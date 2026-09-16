// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import { satteri } from '@astrojs/markdown-satteri';

/** Längsta celltext som får hållas ihop på en rad. Värden som "1 × 12,5 mm"
 *  och "1,9 °C" ska aldrig brytas mellan tal och enhet; hela meningar bryts
 *  som vanligt, annars blir tabellen orimligt bred att dra i. */
const KORT_CELL = 30;

/** @type {(nod: any) => string} */
function celltext(nod) {
  if (nod.type === 'text') return nod.value ?? '';
  if (!Array.isArray(nod.children)) return '';
  return nod.children.map(celltext).join('');
}

/** Ny gren där korta celler fått klassen `kort-cell`. Inget muteras. */
/** @type {(nod: any) => any} */
function markeraKortaCeller(nod) {
  if (nod.type !== 'element' || !Array.isArray(nod.children)) return nod;
  const barn = nod.children.map(markeraKortaCeller);
  if (nod.tagName !== 'td' && nod.tagName !== 'th') return { ...nod, children: barn };
  // Tomma celler räknas som korta: de ska inte kräva någon spaltbredd alls.
  const text = celltext(nod).trim();
  if (text.length > KORT_CELL) return { ...nod, children: barn };
  const gamla = nod.properties?.className;
  const klasser = Array.isArray(gamla) ? gamla : gamla ? [gamla] : [];
  return { ...nod, properties: { ...nod.properties, className: [...klasser, 'kort-cell'] }, children: barn };
}

/**
 * Lägger samma två behållare runt varje markdown-tabell som Jamforelsetabell
 * använder: `.tabell-yta` (tonad högerkant) runt `.tabell-behallare`
 * (sidledsscroll i behållaren, aldrig i sidan). Markdown kan inte själv lägga
 * en div runt tabellen, och alternativet `display: block; overflow-x: auto` på
 * <table> är sämre: då upphör tabellayouten, kolumnerna slutar linjera mellan
 * raderna och den tonade kanten går inte att lägga på elementet som scrollar.
 * Klassen `brodtabell` skiljer tabellen från Jamforelsetabell, som kan stå i
 * samma `.prosa` med egna klasser.
 * Ett hast-plugin i Sätteri (Astros markdown-processor), inte rehype.
 */
const tabellBehallare = {
  name: 'hantverkstips:tabell-behallare',
  element: {
    filter: ['table'],
    /** @type {(node: any, ctx: any) => void} */
    visit(node, ctx) {
      const foralder = ctx.parent(node);
      const klasser = foralder?.properties?.className;
      if (Array.isArray(klasser) && klasser.includes('tabell-behallare')) return;
      ctx.replaceNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['tabell-yta'] },
        children: [
          {
            type: 'element',
            tagName: 'div',
            properties: { className: ['tabell-behallare'] },
            children: [
              {
                ...node,
                properties: { ...node.properties, className: ['brodtabell'] },
                children: (node.children ?? []).map(markeraKortaCeller),
              },
            ],
          },
        ],
      });
    },
  },
};

// Statisk output som standard. Sidor som behöver servern (/go/*, /admin/*)
// sätter `export const prerender = false` och körs via Vercel-adaptern.
// React-integrationen är borttagen i fas 1: inga öar finns, och utan den
// hamnar ingen client.*.js i bygget alls.
export default defineConfig({
  // Kanonisk värd: sajten serveras på www, hantverkstips.se svarar 308 dit.
  // Canonical måste peka på adressen som svarar 200. Samma värde som SAJT i
  // src/lib/strukturdata.ts. Se docs/ARKITEKTUR.md.
  site: 'https://www.hantverkstips.se',
  trailingSlash: 'always',
  integrations: [mdx()],
  // Två innehållsfiler med samma id (filnamn) eller två sidor på samma adress
  // stoppar bygget i stället för att varna. Standard är 'warn', och en varning
  // i en bygglogg med hundratals sidor läser ingen.
  prerenderConflictBehavior: 'error',
  // MDX ärver markdown-inställningarna (extendMarkdownConfig är på som standard),
  // så pluginet gäller både .md och .mdx.
  markdown: {
    processor: satteri({ hastPlugins: [tabellBehallare] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
