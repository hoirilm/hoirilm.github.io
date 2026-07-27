import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://hoirilm.github.io',
    integrations: [tailwind()],
});