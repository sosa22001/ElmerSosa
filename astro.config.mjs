// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [mdx({
    remarkPlugins: [],
    rehypePlugins: [],
  })],
  markdown: {
    gfm: true, // Activa saltos de línea automáticos y tablas estilo GitHub,
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    },
  },
});