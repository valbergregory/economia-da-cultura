import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '@/data/site';
import { entryPath, published } from '@/lib/content';

/** Um único feed com todas as seções, do mais recente para o mais antigo. */
export async function GET(context: APIContext) {
  const [textos, criticas, musicas, destaques] = await Promise.all([
    published('textos'),
    published('criticas'),
    published('musicas'),
    published('destaques'),
  ]);
  const items = [
    ...textos.map((e) => ({
      e,
      link: entryPath('textos', e),
      cat: 'Textos',
      desc: e.data.summary,
    })),
    ...criticas.map((e) => ({
      e,
      link: entryPath('criticas', e),
      cat: 'Crítica',
      desc: e.data.summary,
    })),
    ...musicas.map((e) => ({
      e,
      link: entryPath('musicas', e),
      cat: 'Música',
      desc: e.data.summary,
    })),
    ...destaques.map((e) => ({
      e,
      link: entryPath('destaques', e),
      cat: 'Destaques',
      desc: e.data.summary,
    })),
  ].sort((a, b) => b.e.data.date.getTime() - a.e.data.date.getTime());

  return rss({
    title: `${site.name} — ${site.authorShort}`,
    description: site.description,
    site: context.site ?? 'https://valbergregory.github.io',
    items: items.map((i) => ({
      title: i.e.data.title,
      description: i.desc,
      pubDate: i.e.data.date,
      link: i.link,
      categories: [i.cat, ...(i.e.data.tags ?? [])],
    })),
    customData: '<language>pt-BR</language>',
  });
}
