// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// Statisk output som standard. Sidor som behöver servern (/go/*, /admin/*)
// sätter `export const prerender = false` och körs via Vercel-adaptern.
export default defineConfig({
  site: 'https://hantverkstips.se',
  trailingSlash: 'always',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
