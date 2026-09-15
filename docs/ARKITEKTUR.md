# Arkitektur

Beslutad 2026-09-15. Ändringar kräver uppdatering av detta dokument.

## Stack

| Del | Val | Motiv |
|---|---|---|
| Ramverk | Astro 5 | Noll JavaScript till klienten som standard, content collections, bäst Core Web Vitals utan handpåläggning |
| Interaktivitet | React som Astro-öar | Kalkylatorer, filter, dashboard. Laddas bara där de behövs |
| Styling | Tailwind CSS 4 | Tokenbaserat designsystem, konsekvens över hundratals sidor |
| Innehåll | MDX i `src/content/` | Agenter skriver filer direkt, allt i git, inget CMS |
| Databas | Supabase Postgres | Produkter, priser, prishistorik, klick |
| Auth | Supabase Auth | Bara för `/admin` |
| Hosting | Vercel | Statisk output + serverfunktioner för `/go/` och `/admin` |
| Rendering | Statisk som standard, `prerender = false` på `/go/*` och `/admin/*` | |
| Mätning | Search Console + Vercel Analytics | Inget Google Analytics |
| Språk | TypeScript strikt | |

## Mappstruktur

```
C:\Hantverkstips\
├── CLAUDE.md
├── docs/                      # projektdokument, läses av alla agenter
├── .claude/agents/            # agentdefinitioner, en per roll
├── public/                    # statiska filer, favicon, robots.txt
├── src/
│   ├── content/               # content collections (MDX)
│   │   ├── guider/            # köpguider
│   │   ├── tester/            # produkttester
│   │   ├── jamforelser/       # X vs Y
│   │   ├── kunskap/           # kunskapsartiklar
│   │   └── kategorier/        # en fil per kategori, styr bäst i test-sidor
│   ├── content.config.ts      # scheman för samlingarna
│   ├── components/
│   │   ├── ui/                # Astro-komponenter, ingen klient-JS
│   │   └── islands/           # React-komponenter som hydreras
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── [kategori]/        # bäst i test-sida per kategori
│   │   ├── guider/[...slug].astro
│   │   ├── tester/[...slug].astro
│   │   ├── verktyg/           # kalkylatorer, en sida per verktyg
│   │   ├── go/[slug].ts       # affiliate-redirect, serverkörd
│   │   └── admin/             # dashboard, serverkörd, bakom auth
│   ├── lib/
│   │   ├── supabase.ts        # klient
│   │   ├── produkter.ts       # hämta produkter, priser
│   │   └── affiliate.ts       # bygg spårade länkar
│   └── styles/
│       └── global.css         # Tailwind + designtokens
├── supabase/
│   └── migrations/
└── scripts/                   # feed-import, ombyggnadstriggers
```

## Datamodell (Supabase)

Första version. Utökas när affiliatenätverk är känt.

```sql
butiker        id, namn, slug, affiliate_natverk, cookie_dagar, provision_procent
kategorier     id, slug, namn, beskrivning, foralder_id
produkter      id, slug, namn, marke, modell, kategori_id, bild_url,
               specs jsonb, ean, aktiv, skapad, uppdaterad
erbjudanden    id, produkt_id, butik_id, pris, ord_pris, lagerstatus,
               butik_url, affiliate_url, uppdaterad
prishistorik   id, erbjudande_id, pris, datum
klick          id, produkt_id, butik_id, sida, referrer, user_agent_hash, tidpunkt
```

Principer:
- En produkt kan ha erbjudanden från flera butiker. Vi startar med en butik men bygger för fler.
- `specs` är JSONB med kategorispecifika fält (kapacitet_liter_dygn, max_avstand_m, klingdiameter_mm). Kategorifilen i `src/content/kategorier/` deklarerar vilka specs som finns och hur de visas.
- Prishistorik fylls av feed-importen, en rad per prisändring, inte per körning.
- Klick lagras utan personuppgifter. IP sparas inte.

## Konventioner

**URL:er.** Små bokstäver, bindestreck, svenska utan diakritiska tecken: `/luftavfuktare/`, `/guider/avfuktare-kallare/`, `/tester/woods-mrd20/`. Avslutande snedstreck överallt.

**Affiliatelänkar.** Alltid `/go/[produkt-slug]` eller `/go/[produkt-slug]?butik=[butik-slug]`. Rutten loggar klick i Supabase och gör 302 till affiliate_url. Länkar i innehåll får `rel="sponsored nofollow"`. Komponenten `<Kopknapp>` sköter det, skriv aldrig `<a>` direkt till en butik.

**Reklammärkning.** Layouten för alla sidtyper med affiliatelänkar visar en märkning ovanför innehållet. Inte valbar per sida.

**Bilder.** Astro `<Image>` med width/height satt. WebP/AVIF. Leverantörsbilder laddas ner till `src/assets/` vid import, hotlinkas aldrig.

**Strukturerad data.** `Product` + `AggregateOffer` på testsidor, `ItemList` på bäst i test-sidor, `Article` på guider, `FAQPage` bara där riktiga frågor finns, `BreadcrumbList` överallt.

**Interna länkar.** Varje guide länkar till sin kategorisida och minst två relaterade sidor. Kategorisidan länkar till alla guider och tester i kategorin.

**Komponenter i MDX.** Content-agenter har tillgång till: `<Kopknapp produkt="slug" />`, `<Produktkort produkt="slug" />`, `<Jamforelse produkter={[...]} />`, `<Faktaruta>`, `<Varning>`. Inga egna komponenter i innehållsfiler.

**Frontmatter för guider och tester** (fastställs i `content.config.ts`):

```yaml
title:            # H1
description:      # meta description
publicerad:       # datum
uppdaterad:       # datum
kategori:         # slug
produkter:        # lista med produkt-slugs som nämns
forfattare:       # slug
bild:             # hero, relativ sökväg
utkast: true      # utesluts från bygget
```

## Prestandabudget

Gäller alla publika sidor, mätt på mobil med Lighthouse:

- LCP under 2,0 s
- INP under 200 ms
- CLS under 0,05
- Total JavaScript till klienten: 0 kB på rena innehållssidor, under 60 kB på sidor med verktyg
- Inga externa skript utom Vercel Analytics
- Typsnitt: max två filer, self-hostade, `font-display: swap`

## Miljövariabler

```
PUBLIC_SUPABASE_URL
PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY      # bara server, aldrig PUBLIC_
ADMIN_EMAILS                    # kommaseparerad, vilka som får logga in
```

Aldrig i git. `.env.example` visar vilka som behövs.
