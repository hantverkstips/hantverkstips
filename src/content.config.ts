import { existsSync } from 'node:fs';
import { defineCollection, z, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { NIVAER, STANDARD_NIVA } from './lib/niva';
import { PELARE_SLUGS } from './lib/pelare';

// Scheman för content collections. Fälten dokumenteras i docs/ARKITEKTUR.md.
// Ändra här först, uppdatera dokumentet, sedan innehållsfilerna.

const pelareEnum = z.enum(PELARE_SLUGS);
const nivaEnum = z.enum(NIVAER);

/**
 * Loader för artikelsamlingarna. Filerna ligger i undermappar (guider/fukt/,
 * kunskap/inomhus/, tester/luftavfuktare/) så att samlingarna klarar hundratals
 * filer, men id och därmed URL kommer från filnamnet, aldrig från mappen:
 * src/content/guider/fukt/avfuktare-kallare.mdx blir /fukt/avfuktare-kallare/.
 *
 * Två filer med samma namn i olika mappar ger byggfel här, oavsett ordning,
 * och dessutom i Astros egen dubblettkontroll (prerenderConflictBehavior: 'error'
 * i astro.config.mjs). Kontrollen mot en fil som fortfarande finns gör att ett
 * namnbyte i npm run dev inte ger ett falskt fel.
 */
function artikelLoader(mapp: string) {
  const sedda = new Map<string, string>();
  return glob({
    base: `./src/content/${mapp}`,
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry, base }) => {
      const fil = entry.split(/[\\/]/).pop() ?? entry;
      const id = fil.replace(/\.(md|mdx)$/, '');
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id) || id === 'index') {
        throw new Error(
          `src/content/${mapp}/${entry}: filnamnet blir adressen och får bara innehålla a-z, 0-9 och bindestreck (inte "index")`,
        );
      }
      const tidigare = sedda.get(id);
      if (tidigare && tidigare !== entry && existsSync(new URL('./' + encodeURI(tidigare), base))) {
        throw new Error(
          `Dubbel slug "${id}" i ${mapp}: ${tidigare} och ${entry}. Filnamnet är adressen, så två filer får inte heta lika även om de ligger i olika mappar.`,
        );
      }
      sedda.set(id, entry);
      return id;
    },
  });
}

// Produkter en artikel nämner. Antingen bara slug, eller slug med redaktörens rad
// "för vem" och etikett, som produktkortet visar i blocket "Produkterna vi nämner".
const produktRef = z.union([
  z.string(),
  z.object({
    slug: z.string(),
    forVem: z.string().optional(),
    etikett: z.string().optional(),
  }),
]);

// Gemensamt frontmatter för alla textsidor. image() validerar sökvägen vid bygget
// och ger mallen width/height till <Image>. Sökvägen är relativ från innehållsfilen,
// som ligger i en undermapp: bild: ../../../assets/illustrationer/fukt/kallare.svg
const artikel = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    // Egen title-tagg när sökfrasen inte tål samma formulering som H1. Utelämnad
    // används title. Sätts av SEO-strategen, se docs/ARKITEKTUR.md.
    seoTitle: z.string().optional(),
    description: z.string().max(160),
    publicerad: z.coerce.date(),
    uppdaterad: z.coerce.date().optional(),
    // Pelaren styr URL:en: /[pelare]/[slug]/. Se docs/INNEHALLSARKITEKTUR.md avsnitt 3.
    pelare: pelareEnum,
    // Vem sidan är skriven för: enkel, mellan eller expert. Visas som etikett i
    // artikelhuvudet ("Kunskap · Expert") och grupperar hubsidans lista. Se src/lib/niva.ts.
    niva: nivaEnum.default(STANDARD_NIVA),
    // Produktkategori artikeln hör till (slug i src/content/kategorier/). Valfri:
    // en altanguide har ingen kategori förrän kap- och gersågar finns.
    kategori: z.string().optional(),
    produkter: z.array(produktRef).default([]),
    forfattare: z.string().default('redaktionen'),
    // Sidans korta svar. Mallen renderar det som Faktaruta variant kortsvar direkt
    // efter metaraden, före bilden. Skrivs i frontmatter, aldrig i brödtexten,
    // så att mallen styr placeringen och strukturen blir densamma på varje sida.
    kortSvar: z.string().optional(),
    // Eget foto eller egen illustration. Aldrig leverantörsbild. Ligger under "Kort svar".
    bild: image().optional(),
    bildtext: z.string().optional(),
    // Källförteckning, visas sist på sidan.
    kallor: z.array(z.object({ titel: z.string(), url: z.string().url().optional() })).default([]),
    // Utkast visas i npm run dev, utesluts i npm run build. Se src/lib/innehall.ts.
    utkast: z.boolean().default(false),
  });

// Guider: projektguide, problemguide, köpguide. Mallen varierar på typ.
// Undermapp per pelare: src/content/guider/[pelare]/[slug].mdx
const guider = defineCollection({
  loader: artikelLoader('guider'),
  schema: (ctx) =>
    artikel(ctx).extend({
      typ: z.enum(['projektguide', 'problemguide', 'kopguide']),
      // Projektguidens lista "Det här behöver du". Verktyg har köpknapp, material har inte.
      // namn är valfritt och visas när produkten saknas i databasen (raden renderas
      // då utan köpknapp och bygget varnar). Finns produkten vinner databasens namn.
      behover: z
        .object({
          verktyg: z
            .array(z.object({ produkt: z.string(), namn: z.string().optional(), varfor: z.string() }))
            .default([]),
          material: z.array(z.object({ namn: z.string(), varfor: z.string() })).default([]),
        })
        .optional(),
    }),
});

// Kunskap: ingen reklammärkning, inga produktkort. typ är alltid kunskap.
// Undermapp per pelare: src/content/kunskap/[pelare]/[slug].mdx
const kunskap = defineCollection({
  loader: artikelLoader('kunskap'),
  schema: (ctx) =>
    artikel(ctx).extend({
      typ: z.literal('kunskap').default('kunskap'),
    }),
});

// Tester och granskningar. Ingen poängskala, inga stjärnor (docs/DESIGN.md).
// Undermapp per kategori: src/content/tester/[kategori]/[marke-modell].mdx
const tester = defineCollection({
  loader: artikelLoader('tester'),
  schema: (ctx) =>
    artikel(ctx)
      .omit({ pelare: true })
      .extend({
        // Slug på produkten testet handlar om. Måste finnas i databasen.
        produkt: z.string(),
        // Brödsmulan går via kategorin, inte pelaren. Krävs här.
        kategori: z.string(),
        // test: vi har haft produkten och mätt. granskning: datablad och tredjepartsmätningar.
        // Vi skriver aldrig "vi testade" på en granskning.
        etikett: z.enum(['test', 'granskning']),
        testad: z.coerce.date().optional(),
        // Omdömesblocket överst. En mening, sedan köp om och köp inte om.
        omdome: z.string(),
        kopOm: z.string(),
        kopInteOm: z.string(),
        // Tabellen "Vi mätte" mot "Tillverkaren uppger". Kolumnen vi är tom på granskningar.
        matningar: z
          .array(
            z.object({
              etikett: z.string(),
              enhet: z.string().optional(),
              vi: z.string().optional(),
              tillverkaren: z.string().optional(),
            }),
          )
          .default([]),
        // Alternativ som visas under H2 "Alternativ". Rubriken säger varför.
        alternativ: z.array(z.object({ produkt: z.string(), varfor: z.string() })).default([]),
      }),
});

// Jämförelser, X mot Y. Platt URL under /jamforelser/.
// Undermapp per kategori: src/content/jamforelser/[kategori]/[a-vs-b].mdx
const jamforelser = defineCollection({
  loader: artikelLoader('jamforelser'),
  schema: (ctx) =>
    artikel(ctx)
      .omit({ pelare: true })
      .extend({
        kategori: z.string(),
        produkter: z.array(produktRef).min(2),
      }),
});

// Pelarhubbar. En fil per pelare med handskriven text. Slug måste finnas i src/lib/pelare.ts.
// Huben publiceras när den har minst fem sidor att länka till.
const pelare = defineCollection({
  loader: glob({ base: './src/content/pelare', pattern: '*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(160),
    // En mening om pelaren, på hubben och på /amnen/.
    ingress: z.string(),
    // Två till tre viktiga sidor som startsidans säsongsblock och /amnen/ länkar till (sökvägar).
    viktiga: z.array(z.object({ titel: z.string(), href: z.string() })).max(3).default([]),
    uppdaterad: z.coerce.date().optional(),
    utkast: z.boolean().default(false),
  }),
});

// En fil per produktkategori. Styr bäst i test-sidan och vilka specs som visas.
const kategorier = defineCollection({
  loader: glob({ base: './src/content/kategorier', pattern: '*.{md,mdx}' }),
  schema: z.object({
    namn: z.string(),
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(160),
    // Ingressen under H1. Meta-beskrivningen (description) återanvänds inte som ingress.
    ingress: z.string(),
    // Pelare kategorin hör till. Kategorisidan länkar till hubbarna, hubbarna till kategorin.
    pelare: z.array(pelareEnum).min(1),
    // Specs från produkter.specs (jsonb) som visas i tabeller, i ordning.
    specs: z.array(
      z.object({
        nyckel: z.string(),
        etikett: z.string(),
        enhet: z.string().optional(),
        // Vilket värde som är bäst i jämförelsetabellen. Saknas: markeras inte.
        bast: z.enum(['hogst', 'lagst']).optional(),
      }),
    ),
    // "Våra val". Etiketterna skrivs av redaktören och säger något konkret,
    // aldrig "premium" eller "budget". Första valet är "Vårt val" på startsidan.
    val: z
      .array(z.object({ produkt: z.string(), etikett: z.string(), forVem: z.string().optional() }))
      .max(3)
      .default([]),
    // Sökväg till köpguiden och slug på kalkylatorn, för blocket "Så väljer du".
    kopguide: z.string().optional(),
    kalkylator: z.string().optional(),
    forfattare: z.string().default('redaktionen'),
    uppdaterad: z.coerce.date().optional(),
    // Håller sidan ur Googles index utan att avpublicera den. Används medan
    // kategorin bara har platshållartext: den får inte rankas på "bäst i test"
    // förrän den har egen text. Tas bort när texten är skriven.
    noindex: z.boolean().default(false),
    utkast: z.boolean().default(false),
  }),
});

// Om-sidor under /om/ plus startsidans text (id startsida, renderas av index.astro).
const sidor = defineCollection({
  loader: glob({ base: './src/content/sidor', pattern: '*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(160),
    uppdaterad: z.coerce.date().optional(),
    // Vilken strukturerad data sidan får. Organization bara på /om/.
    strukturdata: z.enum(['Organization', 'Article', 'ingen']).default('ingen'),
    // Bara för startsida: säsongsblockets rubrik och mening, skrivna av
    // chefredaktören och bytta med säsongen. Saknas de renderas blocket med
    // etikett, illustration, verktygskort och länkar, utan rubrik och text.
    sasongRubrik: z.string().optional(),
    sasongText: z.string().optional(),
    // Bara för startsida: artikeln under "Just nu", vald av chefredaktören.
    justNu: z
      .object({
        samling: z.enum(['guider', 'kunskap', 'tester', 'jamforelser']),
        id: z.string(),
      })
      .optional(),
    utkast: z.boolean().default(false),
  }),
});

// Författare. Brödtexten är den längre presentationen på författarsidan.
const forfattare = defineCollection({
  loader: glob({ base: './src/content/forfattare', pattern: '*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      namn: z.string(),
      yrke: z.string(),
      // Året personen började i yrket. Författarrutan skriver "Snickare sedan 2004".
      sedan: z.number().int().min(1950).max(2100).optional(),
      // Kvadratiskt foto, 1:1. Saknas: initialer i författarrutan.
      bild: image().optional(),
      // En rad för författarrutan. Fakta, inte adjektiv.
      presentation: z.string(),
      utkast: z.boolean().default(false),
    }),
});

export const collections = { guider, kunskap, tester, jamforelser, pelare, kategorier, sidor, forfattare };
