// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site pessoal de cultura e entretenimento, publicado como "project site" do
// GitHub Pages: https://valbergregory.github.io/economia-da-cultura/
export default defineConfig({
  site: 'https://valbergregory.github.io',
  base: '/economia-da-cultura',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
    }),
  ],
  image: {
    responsiveStyles: true,
  },
  compressHTML: 'jsx',
});
