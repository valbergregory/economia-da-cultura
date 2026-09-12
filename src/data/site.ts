/**
 * Identidade e textos fixos do site. O texto de abertura e as publicações
 * ficam em src/content; aqui só entram nome, chamada, descrição e links.
 */
export const site = {
  name: 'Economia da Cultura e Entretenimento',
  shortName: 'Economia da Cultura',
  author: 'Valber Gregory Barbosa Costa Bezerra Santos',
  authorShort: 'Valber Gregory',
  tagline: 'Música, livros, cinema e territórios — a cultura vista pela economia e pelo direito.',
  description:
    'Site pessoal de Valber Gregory sobre Economia da Cultura e Entretenimento: textos semanais com críticas econômicas e jurídicas sobre situações culturais — locais, regionais, nacionais e internacionais —, além de músicas, poemas e crítica de livros e cinema.',
  /** Parágrafos da apresentação (a partir das palavras do Valber, 12/09/2026). */
  intro: [
    'Este site fala e cuida da Economia da Cultura e do Entretenimento. Aqui faço críticas econômicas e jurídicas sobre situações diversas e destaco situações culturais em nível local, regional, nacional e internacional.',
    'Toda semana publico um texto novo. Também é o lugar das músicas que gravo, dos poemas e das críticas de livros e de cinema.',
  ],
  links: {
    academic: 'https://valbergregory.github.io/',
    linkedin: 'https://www.linkedin.com/in/valber-gregory-49013744',
    github: 'https://github.com/valbergregory',
    email: 'valber.santos@penedo.ufal.br',
    /** Preencha quando existirem: canais de música e vídeo. */
    youtube: '',
    spotify: '',
    instagram: '',
  },
  /** Texto curto para a assinatura. */
  bio: 'Professor da Universidade Federal de Alagoas, economista, doutor em Economia, bacharel em Direito e servidor do Tribunal de Justiça de Alagoas. Toca, compõe e escreve sobre cultura, economia e direito.',
  repo: 'https://github.com/valbergregory/economia-da-cultura',
} as const;

export const NAV = [
  { key: 'home', label: 'Início', path: '/' },
  { key: 'textos', label: 'Textos', path: '/textos/' },
  { key: 'critica', label: 'Crítica', path: '/critica/' },
  { key: 'poemas', label: 'Poemas', path: '/poemas/' },
  { key: 'musica', label: 'Música', path: '/musica/' },
  { key: 'destaques', label: 'Destaques', path: '/destaques/' },
  { key: 'sobre', label: 'Sobre', path: '/sobre/' },
] as const;

export type NavKey = (typeof NAV)[number]['key'];

export const SCOPE_LABELS: Record<string, string> = {
  local: 'Local',
  regional: 'Regional',
  nacional: 'Nacional',
  internacional: 'Internacional',
};

export const KIND_LABELS: Record<string, string> = {
  livro: 'Livro',
  filme: 'Filme',
  serie: 'Série',
  musica: 'Música',
  espetaculo: 'Espetáculo',
  exposicao: 'Exposição',
};

export const AXIS_LABELS: Record<string, string> = {
  'economia-da-cultura': 'Economia da Cultura',
  'direito-e-cultura': 'Direito e cultura',
  opiniao: 'Opinião',
  cronica: 'Crônica',
};
