# Guia de publicação

Este site é estático: cada publicação é um arquivo Markdown em `src/content/`, e o GitHub Pages reconstrói o site a cada `git push` (e a cada 6 horas, para publicar itens agendados).

## Passo a passo

1. Abra a pasta da seção (`textos`, `criticas`, `musicas` ou `destaques`).
2. Copie o `_modelo.md` com o nome `AAAA-MM-DD-slug.md` — por exemplo `2026-09-13-abertura.md`. A data serve para ordenar; a URL usa o `slug` (`/textos/abertura/`).
3. Preencha o cabeçalho (entre os `---`) e escreva o texto abaixo dele, em Markdown.
4. Troque `draft: true` por `draft: false`.
5. `git add`, `git commit`, `git push` — em 2 ou 3 minutos o site está atualizado.

Para agendar, deixe `draft: false` e coloque uma `date` futura: o texto só aparece quando a data chegar (o site é reconstruído automaticamente a cada 6 horas).

## Texto de abertura

No texto que apresenta o site, use `featured: true`. Ele ganha o bloco "Texto de abertura" na página inicial. Só um texto deve ter `featured: true` por vez.

## Campos por seção

### Textos (`src/content/textos/`)

| Campo      | Uso                                                                          |
| ---------- | ---------------------------------------------------------------------------- |
| `title`    | título                                                                       |
| `date`     | data de publicação (`2026-09-13`)                                            |
| `summary`  | 1–2 frases; aparece no cartão, no RSS e no compartilhamento                  |
| `axis`     | `economia-da-cultura`, `direito-e-cultura`, `opiniao` ou `cronica`           |
| `scope`    | opcional: `local`, `regional`, `nacional`, `internacional`                   |
| `tags`     | lista de temas, ex.: `[festival, direitos autorais]`                         |
| `featured` | `true` = texto de abertura                                                   |
| `cover`    | opcional: imagem na mesma pasta (`./foto.jpg`); exige `coverAlt` (descrição) |
| `linkedin` | opcional: link do post correspondente                                        |
| `updated`  | opcional: data de revisão                                                    |

### Crítica (`src/content/criticas/`)

`kind` (`livro`, `filme`, `serie`, `hq`, `musica`, `espetaculo`, `exposicao`), `work` (a obra), `creator` (autor/diretor/artista), `year`, `rating` (1 a 5, opcional) — além de `title`, `date`, `summary`, `tags`, `cover`.

### Música (`src/content/musicas/`)

Informe ao menos um destes: `audio` (arquivo em `public/audio/`, ex.: `/audio/nome.mp3`), `youtube`, `spotify` ou `soundcloud`. Também: `credits` (letra, música, arranjo, participações), `year`, `duration`, `summary`, `cover`. O corpo é a letra (`## Letra`) e o que mais quiser contar.

Áudio local: MP3 ou M4A, de preferência até ~10 MB por faixa (o repositório inteiro deve ficar abaixo de 1 GB). Para álbuns inteiros, prefira YouTube/Spotify/SoundCloud. Vídeos e players externos só carregam quando o visitante clica — o site não faz requisições a terceiros por conta própria.

### Destaques culturais (`src/content/destaques/`)

`scope` (obrigatório: `local`, `regional`, `nacional`, `internacional`), `place`, `when` (texto livre), `link` + `linkLabel` (opcional), além de `title`, `date`, `summary`, `tags`, `cover`.

### Fotos

1. Salve o arquivo em `src/assets/fotos/` (jpg, png ou webp; até ~2000 px de largura).
2. Acrescente uma entrada em `src/data/fotos.ts` com `file`, `alt` (descrição objetiva — obrigatória para acessibilidade), `caption` e `when` (opcionais).

Todas as fotos aparecem na seção Música da página inicial, na ordem da lista.

## Dados fixos

Nome do site, chamada, apresentação, biografia curta, e-mail de contato e avisos legais ficam em `src/data/site.ts`. Preencha `youtube`, `spotify` e `instagram` quando existirem.

## Imagem social e ícones

`npm run og:generate` regenera `public/og/default.png` e `public/apple-touch-icon.png`. Publicações com `cover` ganham imagem social própria automaticamente.

## Domínio próprio

Hoje o site vive em `https://valbergregory.github.io/economia-da-cultura/`. Se um dia tiver domínio próprio, altere `site` e `base` em `astro.config.mjs` (base passa a `/`) e configure o Pages.
