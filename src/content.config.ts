import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Gemensamt frontmatter för alla textsidor. Se docs/ARKITEKTUR.md.
const artikel = z.object({
  title: z.string(),
  description: z.string().max(160),
  publicerad: z.coerce.date(),
  uppdaterad: z.coerce.date().optional(),
  kategori: z.string(),
  produkter: z.array(z.string()).default([]),
  forfattare: z.string().default('redaktionen'),
  bild: z.string().optional(),
  utkast: z.boolean().default(false),
});

const guider = defineCollection({
  loader: glob({ base: './src/content/guider', pattern: '**/*.{md,mdx}' }),
  schema: artikel,
});

const tester = defineCollection({
  loader: glob({ base: './src/content/tester', pattern: '**/*.{md,mdx}' }),
  schema: artikel.extend({
    // Slug på den produkt testet handlar om. Måste finnas i databasen.
    produkt: z.string(),
    betyg: z.number().min(1).max(5).optional(),
  }),
});

const jamforelser = defineCollection({
  loader: glob({ base: './src/content/jamforelser', pattern: '**/*.{md,mdx}' }),
  schema: artikel.extend({
    produkter: z.array(z.string()).min(2),
  }),
});

const kunskap = defineCollection({
  loader: glob({ base: './src/content/kunskap', pattern: '**/*.{md,mdx}' }),
  schema: artikel,
});

// En fil per kategori. Styr bäst i test-sidan och vilka specs som visas.
const kategorier = defineCollection({
  loader: glob({ base: './src/content/kategorier', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    namn: z.string(),
    title: z.string(),
    description: z.string().max(160),
    // Specs från produkter.specs (jsonb) som visas i tabeller, i ordning.
    specs: z.array(
      z.object({
        nyckel: z.string(),
        etikett: z.string(),
        enhet: z.string().optional(),
      }),
    ),
    utkast: z.boolean().default(false),
  }),
});

export const collections = { guider, tester, jamforelser, kunskap, kategorier };
