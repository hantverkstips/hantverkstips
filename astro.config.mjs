// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// Statisk output som standard. Sidor som behöver servern (/go/*, /admin/*)
// sätter `export const prerender = false` och körs via Vercel-adaptern.
// React-integrationen är borttagen i fas 1: inga öar finns, och utan den
// hamnar ingen client.*.js i bygget alls.
export default defineConfig({
  site: 'https://hantverkstips.se',
  trailingSlash: 'always',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
