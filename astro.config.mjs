import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourwhitescreen.com',
  trailingSlash: 'never',
  compressHTML: true,
});