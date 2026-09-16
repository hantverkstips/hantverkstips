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
  // Två innehållsfiler med samma id (filnamn) eller två sidor på samma adress
  // stoppar bygget i stället för att varna. Standard är 'warn', och en varning
  // i en bygglogg med hundratals sidor läser ingen.
  prerenderConflictBehavior: 'error',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
