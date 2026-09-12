import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

/** Prefixo do site (base do GitHub Pages), sem barra final. */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Origem canônica (astro.config › site) sem barra final. */
export const ORIGIN = (import.meta.env.SITE ?? 'https://valbergregory.github.io').replace(
  /\/$/,
  '',
);

/** Caminho absoluto dentro do site: url('/textos/') → /economia-da-cultura/textos/ */
export function url(path: string): string {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** URL completa, para canonical, Open Graph e compartilhamento. */
export function absolute(path: string): string {
  return `${ORIGIN}${url(path)}`;
}

/** Slug público: nome do arquivo sem a data inicial (AAAA-MM-DD-) e sem a extensão. */
export function slugOf(entry: { id: string; filePath?: string }): string {
  const file = (entry.filePath ?? entry.id).split(/[\\/]/).pop() ?? entry.id;
  return file
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .toLowerCase();
}

type Published = { draft: boolean; date: Date };

/** Publicado = não rascunho e com data já alcançada (datas futuras ficam agendadas). */
export function isLive(d: Published): boolean {
  return !d.draft && d.date.getTime() <= Date.now();
}

/** Entradas publicadas de uma coleção, da mais recente para a mais antiga. */
export async function published<K extends CollectionKey>(key: K): Promise<CollectionEntry<K>[]> {
  const all = await getCollection(key);
  return all
    .filter((e) => isLive(e.data as unknown as Published))
    .sort(
      (a, b) =>
        (b.data as unknown as Published).date.getTime() -
        (a.data as unknown as Published).date.getTime(),
    );
}

export const SECTION_PATH: Record<CollectionKey, string> = {
  textos: '/textos/',
  criticas: '/critica/',
  musicas: '/musica/',
  destaques: '/destaques/',
};

export function entryPath<K extends CollectionKey>(key: K, entry: CollectionEntry<K>): string {
  return url(`${SECTION_PATH[key]}${slugOf(entry)}/`);
}

export function dateIso(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function formatDate(d: Date, opts?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...opts,
  }).format(d);
}

/** Tempo de leitura estimado (200 palavras por minuto), mínimo 1. */
export function readingTime(body: string | undefined): number {
  const words = (body ?? '')
    .replace(/[#>*_`\-|]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Extrai o id de um vídeo do YouTube (watch?v=, youtu.be/, shorts/, embed/). */
export function youtubeId(u: string | undefined): string | undefined {
  if (!u) return undefined;
  const m = u.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m?.[1];
}

/** Converte um link do Spotify (track/album/episode) na URL de embed. */
export function spotifyEmbed(u: string | undefined): string | undefined {
  if (!u) return undefined;
  const m = u.match(/open\.spotify\.com\/(track|album|episode|playlist)\/([A-Za-z0-9]+)/);
  return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}` : undefined;
}
