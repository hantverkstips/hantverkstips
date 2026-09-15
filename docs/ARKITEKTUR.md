# Arkitektur

Beslutad 2026-09-15, uppdaterad samma dag efter innehållsarkitekturen (`docs/INNEHALLSARKITEKTUR.md`) och affiliatestrategin (`docs/AFFILIATE.md`). Ändringar kräver uppdatering av detta dokument. Den tekniska specen för sidmallar och komponenter finns i `docs/SPEC-SIDMALLAR.md`.

## Stack

| Del | Val | Motiv |
|---|---|---|
| Ramverk | Astro 7 | Noll JavaScript till klienten som standard, content collections, bäst Core Web Vitals utan handpåläggning |
| Interaktivitet | React 19 som Astro-öar | Bara för `/admin` i fas 1. Kalkylatorerna byggs utan ö (formulär via GET, beräkning på servern) |
| Styling | Tailwind CSS 4 | Tokenbaserat designsystem i `src/styles/global.css`, konsekvens över hundratals sidor |
| Innehåll | MDX i `src/content/` | Agenter skriver filer direkt, allt i git, inget CMS |
| Databas | Supabase Postgres | Produkter, priser, prishistorik, klick, konverteringar |
| Auth | Supabase Auth | Bara för `/admin` |
| Hosting | Vercel via `@astrojs/vercel` | Statisk output plus serverfunktioner för `/go/`, `/rakna/` och `/admin` |
| Rendering | Statisk som standard. `prerender = false` på `/go/*`, `/admin/*` och kalkylatorerna under `/rakna/[slug]/` | Kalkylatorn räknar på servern så att den fungerar utan klient-JS. Sidan utan query-parametrar cachas på CDN:et |
| Mätning | Search Console + Vercel Analytics | Inget Google Analytics |
| Språk | TypeScript strikt | |

## Mappstruktur

```
C:\Hantverkstips\
├── CLAUDE.md
├── docs/                      # projektdokument, läses av alla agenter
├── .claude/agents/            # agentdefinitioner, en per roll
├── public/
│   ├── fonts/                 # tre woff2-filer, self-hostade
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── brand/riktning-1/  # ordmärke, symbol, ikonsprite, illustration, mönster
│   │   └── bilder/            # egna foton och diagram, refereras från frontmatter
│   ├── content/               # content collections
│   │   ├── guider/            # projektguider, problemguider, köpguider (fältet typ)
│   │   ├── kunskap/           # kunskapsartiklar
│   │   ├── tester/            # tester och granskningar (fältet etikett)
│   │   ├── jamforelser/       # X mot Y
│   │   ├── pelare/            # en handskriven hub per pelare
│   │   ├── kategorier/        # en fil per produktkategori, styr bäst i test-sidan
│   │   ├── sidor/             # om-sidor plus startsidans text (id startsida)
│   │   └── forfattare/        # en fil per författare
│   ├── content.config.ts      # scheman för samlingarna
│   ├── env.d.ts               # App.Locals: sidtyp och köpknappens löpnummer
│   ├── components/
│   │   ├── ui/                # Astro-komponenter, ingen klient-JS
│   │   ├── vyer/              # sidmallar som rutterna monterar (Artikel, Kategorisida, PelarHub)
│   │   └── islands/           # React-komponenter som hydreras. Bara /admin i fas 1
│   ├── layouts/
│   │   └── Bas.astro          # sidhuvud, reklamband, brödsmulor, sidfot
│   ├── pages/
│   │   ├── index.astro        # startsida
│   │   ├── [rot]/index.astro  # pelarhub ELLER kategorisida, avgörs i getStaticPaths
│   │   ├── [rot]/[slug].astro # guide och kunskap under pelaren
│   │   ├── tester/[slug].astro
│   │   ├── jamforelser/[slug].astro
│   │   ├── rakna/             # kalkylatorer: index.astro (lista) och en fil per kalkylator
│   │   ├── om/                # index.astro (/om/) och [slug].astro
│   │   ├── forfattare/[slug].astro
│   │   ├── 404.astro
│   │   ├── go/[slug].ts       # affiliate-redirect, serverkörd
│   │   └── admin/             # dashboard, serverkörd, bakom auth
│   ├── lib/
│   │   ├── supabase.ts        # klienter (server med service role, publik med anon)
│   │   ├── produkter.ts       # hämta produkter och erbjudanden vid byggtid, med fallback
│   │   ├── affiliate.ts       # modul- och sidtypslistor, bas 36, länkmall, /go/-länk
│   │   ├── pelare.ts          # register över pelare, reserverade rotslugs
│   │   ├── innehall.ts        # utkastfilter, adresser, brödsmulor
│   │   ├── format.ts          # pris, datum, tal enligt stilguiden
│   │   ├── strukturdata.ts    # byggare för JSON-LD
│   │   └── kalkyl/            # rena beräkningsfunktioner, en fil per kalkylator, plus register
│   └── styles/
│       └── global.css         # Tailwind + designtokens
├── supabase/
│   ├── migrations/            # 0001_grund.sql, 0002_klick_och_konverteringar.sql
│   └── seed.sql               # utvecklingsdata, körs manuellt, aldrig mot produktion
└── scripts/                   # feed-import, konverteringsimport, ombyggnadstriggers
```

## Datamodell (Supabase)

Migration 0001 skapar grundtabellerna, 0002 lägger till spårning och konverteringar. Migrationer körs i ordning, aldrig redigeras i efterhand.

```sql
butiker        id, namn, slug, affiliate_natverk, cookie_dagar, provision_procent, lankmall
kategorier     id, slug, namn, beskrivning, foralder_id
produkter      id, slug, namn, marke, modell, kategori_id, bild_url,
               specs jsonb, ean, aktiv, skapad, uppdaterad
erbjudanden    id, produkt_id, butik_id, pris, ord_pris, lagerstatus,
               butik_url, affiliate_url, uppdaterad
prishistorik   id, erbjudande_id, pris, datum
klick          id, produkt_id, butik_id, sida, modul, sidtyp, position, epi,
               kategori_slug, tidpunkt
konverteringar id, epi, klick_id, order_varde, provision, valuta, status,
               klick_tid, order_tid, betalstatus, natverks_id, osaker, importerad
```

Principer:

- En produkt kan ha erbjudanden från flera butiker. Vi startar med en butik men bygger för fler.
- `butiker.lankmall` är mallen för spårningslänken med platshållarna `{epi}`, `{epi2}` och `{url}`. En andra butik i ett annat nätverk är en rad till, inte en kodväg till. Saknas mallen faller `/go/` tillbaka på `erbjudanden.affiliate_url`.
- `erbjudanden.butik_url` är butikens egen produktadress och det som läggs i `{url}`. Feedens spårade länk lagras som `affiliate_url` bara som reserv.
- `specs` är JSONB med kategorispecifika fält (`kapacitet_liter_dygn`, `max_avstand_m`, `klingdiameter_mm`). Kategorifilen i `src/content/kategorier/` deklarerar vilka specs som finns, hur de visas och vilket värde som är bäst. Specs fylls av produktexperten från datablad, inte av feeden.
- Prishistorik fylls av feed-importen, en rad per prisändring, inte per körning.
- Klick lagras utan personuppgifter. IP sparas inte. `modul` och `sidtyp` har check-constraints som speglar listorna i `src/lib/affiliate.ts`; ändras listan ändras båda.
- `konverteringar` fylls dagligen av ett skript från nätverkets transaktionsendpoint. Matchning sker på `epi`. Saknas EPI matchas på `klick_tid` mot klick inom fem minuter och raden märks `osaker`. `natverks_id` är unik så att importen kan köras om.
- RLS: produktdata läses publikt med anon-nyckeln. `klick` och `konverteringar` har inga policyer, bara service role läser och skriver.

## Klickkedjan

1. `<Kopknapp produkt="woods-mrd20" modul="kort_kompakt" />` renderar `/go/woods-mrd20/?modul=kort_kompakt&sidtyp=guide&position=3`. `sidtyp` sätts av rutten i `Astro.locals.sidtyp`, `position` räknas upp per sida i `Astro.locals.kopknappPosition`. Löpnumret följer renderingsordningen, som är stabil mellan byggen men inte alltid dokumentordningen; analyser grupperar på `modul` först.
2. `/go/[slug].ts` slår upp erbjudandet (billigast om butik inte anges), validerar parametrarna mot listorna, gör insert i `klick`, hämtar id, skriver `epi = id` i bas 36, och bygger målet från `butiker.lankmall` med `epi`, `epi2 = kategori_slug` och URL-kodad `butik_url` sist. 302, `Cache-Control: no-store`, `X-Robots-Tag: noindex`.
3. Misslyckas loggningen skickas läsaren ändå vidare, med `epi=x`. Loggning får aldrig stoppa ett klick.
4. Konverteringsimporten (fas 2, `scripts/`) läser transaktioner, matchar på `epi` och skriver `konverteringar`.

## Konventioner

**URL:er.** Små bokstäver, bindestreck, svenska utan diakritiska tecken, avslutande snedstreck överallt. Mönstren är beslutade i `docs/INNEHALLSARKITEKTUR.md` avsnitt 3 och gäller:

| Sidtyp | Mönster | Källa |
|---|---|---|
| Pelarhub | `/[pelare]/` | `src/content/pelare/[pelare].mdx` |
| Guide, kunskap | `/[pelare]/[slug]/` | `src/content/guider/`, `src/content/kunskap/`, fältet `pelare` styr |
| Bäst i test | `/[kategori]/` | `src/content/kategorier/[kategori].md` plus databasen |
| Test | `/tester/[slug]/` | `src/content/tester/` |
| Jämförelse | `/jamforelser/[slug]/` | `src/content/jamforelser/` |
| Kalkylator | `/rakna/[slug]/` | `src/pages/rakna/[slug].astro`, en fil per kalkylator |
| Om sajten | `/om/` och `/om/[slug]/` | `src/content/sidor/` |
| Författare | `/forfattare/[slug]/` | `src/content/forfattare/` |

Rotnamnrymden delas av pelare och kategorier. Pelarslugs (`src/lib/pelare.ts`) är reserverade och får aldrig användas som kategorislug, och ingen av dem får vara `tester`, `jamforelser`, `rakna`, `om`, `forfattare`, `go`, `admin`. Rutten `src/pages/[rot]/index.astro` kontrollerar det i `getStaticPaths` och bygget stoppar vid kollision. En publicerad URL byts aldrig utan 301 (`vercel.json`, redirects).

**Affiliatelänkar.** Alltid `/go/[produkt-slug]/` med query-parametrar från `<Kopknapp>`. Länkar får `rel="sponsored nofollow"`. Skriv aldrig `<a>` direkt till en butik, och bygg aldrig `/go/`-länkar för hand, använd `goLank()` i `src/lib/affiliate.ts`.

**Reklammärkning.** Layouten visar bandet när rutten skickar `reklam={true}`. Rutten sätter det efter sidtyp och innehåll, aldrig innehållsfilen: köpguide, projektguide, test, jämförelse, kategori och kalkylator alltid; problemguide bara när `produkter` inte är tom; kunskap aldrig. Formuleringen är fastställd i `docs/AFFILIATE.md` avsnitt 5. Under varje köpknapp står "Annonslänk · pris 12 sep".

**Bilder.** Astro `<Image>` med width och height. `bild` i frontmatter valideras med `image()` och pekar relativt från innehållsfilen till `src/assets/bilder/`. Leverantörsbilder laddas ner vid import, hotlinkas aldrig; tills importen finns visar produktkortet tillståndet "Bild saknas" för externa adresser.

**Strukturerad data.** Byggs med `src/lib/strukturdata.ts` och renderas av `<StrukturData>`. `Article` på guider, kunskap, jämförelser och om-sidor med `strukturdata: Article`. `Product` + `AggregateOffer` på tester. `ItemList` på kategorisidor. `Person` på författarsidor. `Organization` på `/om/` och som `publisher` överallt. `BreadcrumbList` på alla sidor med brödsmulor. `FAQPage` bara där riktiga frågor finns, beslutas av SEO-strategen.

**Interna länkar.** Reglerna i `docs/INNEHALLSARKITEKTUR.md` avsnitt 6. Mallarna garanterar minimum: artikel länkar till sin hub (brödsmula) och sin kategori, kategorisidan listar alla guider, tester och jämförelser med samma `kategori`, huben länkas från sidfoten.

**Komponenter i MDX.** Innehållsfiler importerar ingenting. Sidmallen skickar de tillåtna komponenterna via `components`-propen på `<Content>`, så att en innehållsfil kan skriva `<Faktaruta>` direkt. Tillåtna i guider och jämförelser: `Kopknapp`, `Produktkort`, `Jamforelsetabell`, `Faktaruta`, `Varning`, `Verktygskort`, `Markering`. I kunskap: samma utom `Kopknapp`, `Produktkort` och `Jamforelsetabell`, så att en produktknapp i en kunskapsartikel ger byggfel. Alla H2 i innehåll renderas via `Pennstreck`.

**Utkast.** `utkast: true` visar sidan i `npm run dev` och utesluter den i `npm run build`. Filtret sitter i `publicerade()` i `src/lib/innehall.ts` och används av alla `getStaticPaths` och alla listor. Platshållarfilerna som mallarna byggs mot har `utkast: false` tills chefredaktören ersatt texten; de ska bytas innan lansering.

## Frontmatter

Fastställs i `src/content.config.ts`. Datum skrivs `2026-09-15`.

**Guider** (`typ` är `projektguide`, `problemguide` eller `kopguide`) och **kunskap** (`typ` sätts automatiskt):

```yaml
title:            # H1, sidans löfte
description:      # meta description, max 160 tecken
publicerad:       # datum
uppdaterad:       # datum, valfritt
pelare:           # fukt | altan | tak | grund | isolering | verktyg | el. Styr URL:en
typ:              # bara guider: projektguide | problemguide | kopguide
kategori:         # kategorislug, valfritt. Krävs för att listas på kategorisidan
produkter:        # lista. Antingen slug, eller { slug, forVem, etikett }
forfattare:       # slug i src/content/forfattare/, standard redaktionen
bild:             # relativ sökväg till eget foto eller diagram, valfritt
bildtext:         # valfritt
kallor:           # lista med { titel, url }
behover:          # bara projektguide: { verktyg: [{ produkt, varfor }], material: [{ namn, varfor }] }
utkast: true      # utesluts från bygget
```

**Tester:**

```yaml
title, description, publicerad, uppdaterad, forfattare, bild, bildtext, kallor, utkast  # som ovan
kategori:         # krävs, brödsmulan går via kategorin
produkt:          # produktslug i databasen
etikett:          # test | granskning
testad:           # datum, valfritt
omdome:           # en mening
kopOm:            # ett kort stycke
kopInteOm:        # ett kort stycke
matningar:        # lista med { etikett, enhet, vi, tillverkaren }. vi är tom på granskningar
alternativ:       # lista med { produkt, varfor }
```

**Jämförelser:** som guider utan `pelare` och `typ`, med `kategori` (krävs) och `produkter` (minst två).

**Pelare** (`src/content/pelare/[pelare].mdx`, slug måste finnas i `src/lib/pelare.ts`):

```yaml
title, description, uppdaterad, utkast
ingress:          # en mening för "Börja här" på startsidan
viktiga:          # upp till tre { titel, href } som startsidan länkar till
```

**Kategorier** (`src/content/kategorier/[kategori].md`):

```yaml
namn:             # "Luftavfuktare"
title:            # H1
description:      # meta
ingress:          # under H1
pelare:           # lista med pelarslugs, minst en
specs:            # lista med { nyckel, etikett, enhet, bast: hogst | lagst }, i visningsordning
val:              # upp till tre { produkt, etikett, forVem } för "Våra val". Första är "Vårt val"
kopguide:         # sökväg till köpguiden
kalkylator:       # slug i src/lib/kalkyl/register.ts
forfattare, uppdaterad, utkast
```

**Sidor** (`src/content/sidor/`): `title`, `description`, `uppdaterad`, `strukturdata` (`Organization` | `Article` | `ingen`), `utkast`. Filen `startsida.mdx` har dessutom `justNu: { samling, id }` och renderas av `index.astro`, aldrig under `/om/`.

**Författare** (`src/content/forfattare/`): `namn`, `yrke`, `sedan` (årtal), `bild` (kvadratisk), `presentation` (en rad, fakta), `utkast`. Brödtexten är den längre presentationen.

## Prestandabudget

Gäller alla publika sidor, mätt på mobil med Lighthouse:

- LCP under 2,0 s
- INP under 200 ms
- CLS under 0,05
- Total JavaScript till klienten: 0 kB på alla publika sidor i fas 1, inklusive kalkylatorer. Under 60 kB om en ö senare motiveras
- Inga externa skript utom Vercel Analytics
- Typsnitt: tre filer (Zilla Slab 600, Atkinson Hyperlegible 400 och 700), self-hostade i `public/fonts/`, totalt under 64 kB, `font-display: swap`, förladdade i `<head>`
- HTML per innehållssida under 60 kB okomprimerat, exklusive inlinead ikonsprite och ordmärke (cirka 6 kB tillsammans)

Kontrollen beskrivs i `docs/SPEC-SIDMALLAR.md` avsnitt 10.

## Miljövariabler

```
PUBLIC_SUPABASE_URL
PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY      # bara server, aldrig PUBLIC_
ADMIN_EMAILS                    # kommaseparerad, vilka som får logga in
```

Aldrig i git. `.env.example` visar vilka som behövs. Saknas `PUBLIC_SUPABASE_URL` bygger sajten ändå: produktkort visar platshållare och `/go/` svarar 503.
