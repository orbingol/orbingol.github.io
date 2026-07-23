// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onurraufbingol.com',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/cv') && !page.endsWith('/cv/'),
    }),
  ],
  // Dev Toolbar is only injected by `astro dev`. Production `astro build` never ships it.
  // Keep it on for local Docker (`web` target); deployed Pages site is static HTML only.
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
