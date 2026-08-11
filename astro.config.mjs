import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ranko1911.github.io',
  base: '/DnD-Builds/',
  server: {
    port: 3000,
    host: true
  }
});
