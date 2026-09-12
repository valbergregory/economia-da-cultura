import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Alcance geográfico de um destaque cultural. */
export const SCOPES = ['local', 'regional', 'nacional', 'internacional'] as const;

/** Tipo de obra criticada. */
export const CRITICA_KINDS = [
  'livro',
  'filme',
  'serie',
  'musica',
  'espetaculo',
  'exposicao',
] as const;

/** Eixo de um texto semanal. */
export const TEXTO_AXES = [
  'economia-da-cultura',
  'direito-e-cultura',
  'opiniao',
  'cronica',
] as const;

const base = {
  title: z.string().min(1),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  summary: z.string().min(1),
  tags: z.array(z.string().min(1)).default([]),
  draft: z.boolean().default(false),
};

/** Aceita número ou texto (ex.: `written: 2019`) e guarda como texto. */
const text = () => z.union([z.string(), z.number()]).transform(String).optional();

const cover = ({ image }: SchemaContext) => ({
  cover: image().optional(),
  coverAlt: z.string().optional(),
});

/** Textos semanais: críticas econômicas e jurídicas sobre situações culturais. */
const textos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/textos' }),
  schema: (ctx) =>
    z.object({
      ...base,
      ...cover(ctx),
      axis: z.enum(TEXTO_AXES).default('economia-da-cultura'),
      scope: z.enum(SCOPES).optional(),
      /** Texto de abertura / destaque na página inicial. */
      featured: z.boolean().default(false),
      linkedin: z.url().optional(),
    }),
});

/** Críticas de livros, filmes, séries, discos, espetáculos e exposições. */
const criticas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/criticas' }),
  schema: (ctx) =>
    z.object({
      ...base,
      ...cover(ctx),
      kind: z.enum(CRITICA_KINDS),
      /** Obra criticada (título original ou em português). */
      work: z.string().min(1),
      /** Autor, diretor, artista ou companhia. */
      creator: z.string().optional(),
      year: z.number().int().optional(),
      /** Nota de 1 a 5 (opcional). */
      rating: z.number().int().min(1).max(5).optional(),
      linkedin: z.url().optional(),
    }),
});

/** Músicas gravadas: áudio local (public/audio) ou embed externo; letra no corpo. */
const musicas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/musicas' }),
  schema: (ctx) =>
    z
      .object({
        ...base,
        ...cover(ctx),
        /** Caminho em public/ (ex.: /audio/nome.mp3) ou URL externa de áudio. */
        audio: z.string().optional(),
        /** URL do vídeo no YouTube (watch?v=… ou youtu.be/…). */
        youtube: z.url().optional(),
        /** URL da faixa/álbum no Spotify. */
        spotify: z.url().optional(),
        /** URL da faixa no SoundCloud. */
        soundcloud: z.url().optional(),
        /** Composição, letra, arranjo, participações. */
        credits: z.string().optional(),
        /** Ano de composição ou gravação. */
        year: z.number().int().optional(),
        duration: text(),
      })
      .superRefine((m, ctx2) => {
        if (!m.audio && !m.youtube && !m.spotify && !m.soundcloud) {
          ctx2.addIssue({
            code: 'custom',
            message: `${m.title}: informe audio, youtube, spotify ou soundcloud`,
          });
        }
      }),
});

/** Destaques culturais: situações e eventos por alcance geográfico. */
const destaques = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/destaques' }),
  schema: (ctx) =>
    z.object({
      ...base,
      ...cover(ctx),
      scope: z.enum(SCOPES),
      place: z.string().optional(),
      /** Data (ou período) do evento/situação, em texto livre. */
      when: text(),
      link: z.url().optional(),
      linkLabel: z.string().optional(),
    }),
});

/** Páginas fixas em Markdown (hoje: a apresentação da página "Sobre"). */
const paginas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/paginas' }),
  schema: (ctx) =>
    z.object({
      title: z.string().min(1),
      summary: z.string().min(1),
      ...cover(ctx),
    }),
});

export const collections = { textos, criticas, musicas, destaques, paginas };
