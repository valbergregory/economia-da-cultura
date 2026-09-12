# Economia da Cultura e Entretenimento

Site pessoal de Valber Gregory Barbosa Costa Bezerra Santos: textos semanais com críticas econômicas e jurídicas sobre situações culturais (locais, regionais, nacionais e internacionais), crítica de livros, cinema e quadrinhos, músicas gravadas, fotos e destaques culturais. Tudo em uma única página (com âncoras), além da página "Sobre"; cada publicação tem o próprio endereço.

Site: https://valbergregory.github.io/economia-da-cultura/

## Como publicar

Tudo é Markdown em `src/content/`. Cada pasta tem um `_modelo.md` para copiar (arquivos que começam com `_` não são publicados):

| Pasta                    | O que é                                             | URL                    |
| ------------------------ | --------------------------------------------------- | ---------------------- |
| `src/content/textos/`    | textos semanais (eixo, alcance, texto de abertura)  | `/textos/<slug>/`      |
| `src/content/criticas/`  | livros, filmes, séries, HQs, discos, espetáculos…   | `/critica/<slug>/`     |
| `src/content/musicas/`   | músicas gravadas: áudio local ou YouTube/Spotify    | `/musica/<slug>/`      |
| `src/content/destaques/` | situações culturais por alcance geográfico          | `/destaques/<slug>/`   |
| `src/data/fotos.ts`      | galeria (arquivos em `src/assets/fotos/`)           | seção Música (início)  |

Nome do arquivo: `AAAA-MM-DD-slug.md` (a data ordena; a URL usa o slug). `draft: true` não publica; uma `date` futura fica agendada e entra no ar no deploy seguinte (o site é reconstruído a cada 6 h). Detalhes em [docs/GUIA.md](docs/GUIA.md).

## Desenvolvimento

```bash
npm ci
npm run dev        # http://localhost:4322/economia-da-cultura/
npm run build      # gera dist/
npm run typecheck
```

Publicação: push na branch `main` → GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`).

## Licença

Código sob MIT. Textos, músicas e fotografias: todos os direitos reservados — não podem ser reproduzidos ou utilizados sem autorização expressa do autor; as fotografias estão protegidas pelo direito de imagem (ver [LICENSE](LICENSE)). Tudo o que está escrito expressa exclusivamente a opinião do autor.
