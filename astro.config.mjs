// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [db()]
});