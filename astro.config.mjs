import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ranko1911.github.io',
  base: '/DnD-Builds',
  integrations: [vue()],
  server: {
    port: 3000,
    host: true
  }
});
