import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hoirilm.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});