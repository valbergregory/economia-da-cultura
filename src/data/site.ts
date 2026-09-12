/**
 * Identidade e textos fixos do site. O texto de abertura e as publicações
 * ficam em src/content; aqui só entram nome, chamada, descrição e contato.
 */
export const site = {
  name: 'Economia & Cultura',
  longName: 'Economia da Cultura e Entretenimento',
  shortName: 'Economia & Cultura',
  author: 'Valber Gregory Barbosa Costa Bezerra Santos',
  authorShort: 'Valber Gregory',
  tagline:
    'Música, livros, cinema e territórios — a cultura vista pela economia, pela história e pelos dados.',
  description:
    'Economia & Cultura, de Valber Gregory: textos semanais com críticas econômicas e jurídicas sobre situações culturais — locais, regionais, nacionais e internacionais —, além de músicas e crítica de livros e cinema.',
  /** Parágrafos da apresentação (a partir das palavras do Valber, 12/09/2026). */
  intro: [
    'Este site fala e cuida da Economia da Cultura e do Entretenimento. Aqui faço críticas econômicas e jurídicas sobre situações diversas e destaco situações culturais em nível local, regional, nacional e internacional.',
    'Toda semana publico um texto novo. Também é o lugar das músicas que gravo e das críticas de livros e de cinema.',
  ],
  /** Contato pessoal (único link externo do site). */
  email: 'valber.gregory@gmail.com',
  /** Preencha quando existirem: canais de música e vídeo. */
  links: {
    youtube: '',
    spotify: '',
    instagram: '',
  },
  /** Texto curto para a assinatura. */
  bio: 'Economista, bacharel em Direito e professor universitário. Músico amador; toca, compõe e escreve sobre cultura, economia e história.',
  /** Avisos legais exibidos no rodapé e nas publicações. */
  legal: {
    rights:
      'Textos, músicas, fotografias e demais conteúdos deste site são de autoria de Valber Gregory Barbosa Costa Bezerra Santos e não podem ser reproduzidos, copiados, adaptados ou utilizados, no todo ou em parte, sem autorização expressa do autor.',
    image:
      'As fotografias estão protegidas pelo direito de imagem das pessoas retratadas e não podem ser reutilizadas.',
    opinion:
      'Tudo o que está escrito aqui expressa exclusivamente a opinião do autor e não representa as instituições às quais ele está vinculado.',
  },
} as const;

/** Navegação: tudo vive na página inicial (âncoras), exceto Sobre. */
export const NAV = [
  { key: 'home', label: 'Início', path: '/' },
  { key: 'textos', label: 'Textos', path: '/#textos' },
  { key: 'critica', label: 'Crítica', path: '/#critica' },
  { key: 'musica', label: 'Música', path: '/#musica' },
  { key: 'destaques', label: 'Destaques', path: '/#destaques' },
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
