/**
 * Galeria de fotos (música, shows, bastidores). Para acrescentar uma foto:
 * 1) salve o arquivo em src/assets/fotos/ (jpg, png ou webp);
 * 2) inclua uma entrada abaixo com `file` = nome do arquivo, `alt` obrigatório
 *    (descrição objetiva da imagem) e `caption` opcional (legenda visível).
 */
export interface Foto {
  file: string;
  alt: string;
  caption?: string;
  /** Ano ou data em texto livre, opcional. */
  when?: string;
}

export const fotos: Foto[] = [
  {
    file: 'valber-baixo.webp',
    alt: 'Valber tocando um baixo elétrico de cinco cordas, de pé, diante de um microfone, com parede vermelha ao fundo.',
    caption: 'Ao baixo.',
  },
];
