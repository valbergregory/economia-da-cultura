/**
 * Galeria de fotos (música, shows, bastidores). Para acrescentar uma foto:
 * 1) salve o arquivo em src/assets/fotos/ (jpg, png ou webp);
 * 2) inclua uma entrada abaixo com `file` = nome do arquivo, `alt` obrigatório
 *    (descrição objetiva da imagem) e `caption` opcional (legenda visível).
 * A ordem da lista é a ordem de exibição; as três primeiras vão para a página inicial.
 */
export interface Foto {
  file: string;
  alt: string;
  caption?: string;
  /** Ano ou período em texto livre, opcional. */
  when?: string;
}

export const fotos: Foto[] = [
  {
    file: 'guitarra-no-palco.webp',
    alt: 'Valber, jovem, de camiseta preta, tocando uma guitarra vermelha em um palco escuro, com bateria e teclado ao fundo.',
    caption: 'No palco, com a guitarra.',
  },
  {
    file: 'valber-baixo.webp',
    alt: 'Valber tocando um baixo elétrico de cinco cordas, de pé, diante de um microfone, com parede vermelha ao fundo.',
    caption: 'Ao baixo.',
  },
  {
    file: 'ensaio-mosaico.webp',
    alt: 'Mosaico de três fotos de ensaio: Valber ao microfone com um baixo branco; um baterista atrás do kit com um sol pintado no bumbo; e Valber de camisa vermelha com a guitarra.',
    caption: 'Ensaio.',
  },
  {
    file: 'trio-2017-01.webp',
    alt: 'Três músicos em um bar ao ar livre à noite: vocalista com guitarra Les Paul ao centro, baterista atrás e Valber com baixo de cinco cordas à direita.',
    caption: 'Com Arthur Magalhães e Ramiro Júnior.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-02.webp',
    alt: 'Trio tocando em um bar: baterista com baquetas erguidas, vocalista com violão ao centro e Valber sentado com o baixo, sob uma TV e quadros na parede.',
    caption: 'Com Arthur Magalhães e Ramiro Júnior.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-03.webp',
    alt: 'Trio em apresentação em um salão: Valber ao baixo à esquerda, vocalista com guitarra ao centro e baterista à direita, com o nome Ramiro Júnior no bumbo.',
    caption: 'Com Arthur Magalhães e Ramiro Júnior.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-04.webp',
    alt: 'Selfie do vocalista com o baterista e Valber, que faz sinal de positivo com o baixo, em um bar de tijolos aparentes.',
    caption: 'Bastidores.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-05.webp',
    alt: 'Selfie do baterista, de boina e óculos, com o vocalista e Valber ao fundo, em um bar cheio à noite.',
    caption: 'Bastidores.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-06.webp',
    alt: 'Selfie do baterista atrás da bateria; ao fundo, Valber e o vocalista sentados com os instrumentos.',
    caption: 'Ensaio.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-07.webp',
    alt: 'Selfie do baterista em um bar de tijolos; ao fundo, o vocalista com a guitarra e Valber com o baixo.',
    caption: 'Bastidores.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-08.webp',
    alt: 'Selfie do baterista, de boné, com Valber ao baixo e o vocalista ao fundo, sob guarda-sóis de um bar à noite, com luz azul.',
    caption: 'Bastidores.',
    when: '2016–2017',
  },
  {
    file: 'trio-2017-09.webp',
    alt: 'Selfie do baterista com luz azul; ao fundo, Valber faz sinal de paz com o baixo e o vocalista sorri com a guitarra.',
    caption: 'Bastidores.',
    when: '2016–2017',
  },
];
