# Teknisk spec: sidmallar och komponenter

Skriven 2026-09-15 av teknisk ansvarig. Utvecklaren bygger mot det här dokumentet. Saknas något här, fråga innan du gissar. Designansvarig granskar det visuella mot `docs/DESIGN.md` (skrivs om för riktning 1, Anteckningsboken) och `docs/DESIGNRIKTNINGAR.md`; det här dokumentet styr struktur, props, data, tillstånd och felhantering.

Allt i `src/components/ui/` och `src/components/vyer/` är Astro utan klient-JS. Inga `client:`-direktiv någonstans i det här uppdraget. Inga nya beroenden.

## 0. Förutsättningar

Det här finns redan och ska återanvändas, inte skrivas om:

| Fil | Innehåll |
|---|---|
| `src/content.config.ts` | Alla scheman. Fältnamnen nedan kommer därifrån |
| `src/lib/pelare.ts` | `PELARE` (slug, namn, kort, ikon), `RESERVERADE_ROTSLUGS`, `arPelare()`, `hittaPelare()` |
| `src/lib/affiliate.ts` | `KLICK_MODULER`, `SIDTYPER`, `goLank()`, `byggSparlank()`, `tillBas36()` |
| `src/lib/innehall.ts` | `publicerade()`, `artikelUrl()`, `testUrl()`, `jamforelseUrl()`, `brodsmulorForArtikel()`, `normaliseraProdukter()`, `typEtikett()` |
| `src/lib/format.ts` | `formateraPris()`, `formateraDatum()`, `formateraDatumKort()`, `isoDatum()` |
| `src/lib/supabase.ts` | `publikKlient()` (byggtid) och `serverKlient()` (bara server). Båda returnerar `null` utan miljövariabler |
| `src/env.d.ts` | `App.Locals` med `sidtyp` och `kopknappPosition` |
| `src/components/ui/Kopknapp.astro` | Klar i sin datalogik. Utseendet justeras mot avsnitt 2.2 |
| `src/pages/go/[slug].ts` | Klar. Rör inte |
| `src/content/**` | Platshållarfiler för varje samling, se avsnitt 8 |
| `src/assets/brand/riktning-1/` | `ordmarke.svg`, `symbol.svg`, `ikoner.svg`, `monster.svg` |
| `src/assets/illustrationer/[pelare]/` | Egna skisser, en mapp per pelare. `fukt/kallare.svg` är förebilden. Se `docs/ARKITEKTUR.md`, Illustrationer |
| `public/fonts/` | `zilla-slab-latin-600.woff2`, `atkinson-hyperlegible-latin-400.woff2`, `atkinson-hyperlegible-latin-700.woff2` |

Verifierat i bygget 2026-09-15: MDX-komponenter som skickas via `components`-propen på `<Content>` fungerar utan import i innehållsfilen; `Astro.locals` som sätts i ruttens frontmatter når komponenter inne i `<Content>` vid förrendering; `render(entry).headings` ger H2-listan med `slug` och `text`.

**Tokens.** Designansvarig har bytt tokens i `src/styles/global.css` till riktning 1 (kontrollerat 2026-09-15). Komponenterna byggs mot dessa namn och inga andra: färger `papper`, `papper-2`, `linje`, `blyerts`, `blyerts-2`, `penna`, `tumstock`, `ok`, `varning`, `vit`; typsnitt `font-serif` (Zilla Slab, rubriker och ordmärke), `font-sans` (Atkinson Hyperlegible, allt annat). `font-hand` (Caveat) finns som token men laddas inte som webbfont och används inte i komponenter. Det finns ingen hover-token: knappar och länkar ändrar inte färg vid hover, länkens understrykning går från 1 till 2 px. Vill designansvarig ha något annat läggs en token till i `global.css` först. Typskala, avstånd, radier och skugga enligt `global.css`. Bakgrunden är `papper`, aldrig vit; vit används bara bakom produktbilder och på knapptext.

## 1. Layout: `src/layouts/Bas.astro`

### Props

```ts
interface Props {
  title: string;                 // <title> utan varumärke. Layouten lägger på suffixet, se nedan
  description: string;
  reklam?: boolean;              // visar Reklamband. Standard false
  brodsmulor?: Brodsmula[];      // från src/lib/innehall.ts. Utelämnas på startsidan
  bred?: boolean;                // main får max-w-sidbredd i stället för lasbredd. Kategori, jämförelse, kalkylator
  noindex?: boolean;             // lägger noindex i robots-taggen. 404 och admin
  ogBild?: string;               // sökväg i public till sidans delningsbild. Utelämnad: /og-standard.png
  ogTyp?: 'website' | 'article'; // article på artiklar, tester och jämförelser, website på hubbar och verktyg
  paginering?: { foregaende?: string; nasta?: string };  // rel="prev" och rel="next" i head. /guider/
}
```

`sidtyp` sätts inte av layouten utan av rutten, överst i dess frontmatter: `Astro.locals.sidtyp = 'guide'`. Skälet är att slot-innehåll kan renderas före layoutens frontmatter.

### Head

I ordning: `charset`, `viewport`, `<title>`, `description`, `canonical` (som nu), `robots`, favicon, tre `<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/...">`, `<slot name="head" />`. Inga externa skript. Vercel Analytics läggs till vid lansering av teknisk ansvarig, inte nu.

**Robots-taggen** (ändrad 2026-09-17). Taggen står på varje sida, inte bara på de som är `noindex`, eftersom den bär `max-image-preview:large`. Utan direktivet visar Google en miniatyr av sidans bild i sökresultatet och i Discover; med det visas den i full bredd, vilket är hela poängen med att varje sida numera har en egen delningsbild. Innehållet är `max-image-preview:large`, och på en `noindex`-sida `noindex, max-image-preview:large`: båda värdena hör hemma i samma tagg, för två robots-taggar med olika innehåll är odefinierat och Google tar då den strängaste tolkningen.

**Delningsbilden** (ändrad 2026-09-17). `og:image` är alltid en PNG i 1200 × 630 under `public/og/`, aldrig sidans SVG. Skälen är två: Facebook, LinkedIn och Slack hämtar ingen SVG, och Vite inlinear dessutom gärna en liten SVG som data-URI, vilket gjorde `og:image` till en data-URI utan värd. Layouten avvisar därför en `ogBild` som börjar med `data:` och tar standardbilden i stället.

Vyerna (`Artikel.astro`, `tester/[slug].astro`, `jamforelser/[slug].astro`, `PelarHub.astro`) hämtar sökvägen med `delningsbild(samling, slug)` ur `src/lib/delningsbild.ts`. Funktionen returnerar `/og/[samling]-[slug].png` när filen finns och annars `undefined`, kontrollerat med `existsSync` vid bygget, så att en sida vars bild ännu inte är byggd faller tillbaka på `/og-standard.png` i stället för att peka på en 404. Samma sträng går vidare som `bildUrl` till `artikel()` i `src/lib/strukturdata.ts`, så att `Article.image` blir en rasterbild. Kalkylatorsidorna har sin egen väg dit, `verktygsDelningsbild(slug)` i avsnitt 4.7, och pekar på `/og/rakna-[slug].png`.

Bilderna ritas av `scripts/generera-delningsbilder.mjs`, som ingår i `npm run build` efter `npm run illustrationer` och före `astro build`. En bild byggs per publicerad fil i `guider`, `kunskap`, `tester`, `jamforelser` och `pelare`, och ser ut som ett uppslag i anteckningsboken: papper som yta, `title` ur frontmattern till vänster i Zilla Slab 600 på högst tre rader med krympande storlek och ett pennstreck under, ordmärket nere till vänster, och sidans egen bild till höger. Bilden till höger är frontmatterfältet `bild` när det pekar på en SVG under `src/assets/illustrationer/`, annars den första `<Illustration namn="..." />` i brödtexten. Tester, jämförelser och hubbar har ingen bild i frontmattern och får sin därifrån. Saknas båda sätts titeln i större grad och tumstockssymbolen står till höger i stället.

Skriptet är idempotent: en PNG skrivs om bara när innehållsfilen (och därmed titeln), illustrationen, symbolen, typsnittet eller skriptet är nyare än den. `npm run delningsbilder -- --alla` bygger om allt. Filerna är committade, så ett vanligt bygge skriver ingenting, men en artikel som publiceras får sin bild i samma bygge. Det fungerar också på Vercel: undantaget för `scripts/typsnitt/` togs bort ur `.vercelignore` 2026-09-17, eftersom titeln sätts i Zilla Slab 600 och skriptet inte kan tyst hoppa över den. `sharp`, `opentype.js` och `yaml` ligger därför i `dependencies`, inte i `devDependencies`.

**Titelsuffixet** (beslut 2026-09-16). Rutterna skickar sidans titel utan varumärke (`seoTitle ?? title`), och layouten lägger på `" · Hantverkstips"` bara när den färdiga titeln då blir högst 60 tecken. Blir den längre utelämnas suffixet, eftersom Google klipper vid ungefär 60 och en seoTitle på 58 tecken annars förlorar slutet av löftet i stället för varumärket. Står ordet Hantverkstips redan i titeln, som på startsidan, läggs inget på. Samma titel används i `og:title`. Konsekvenser: korta titlar som "Sidan finns inte" och "Räkna själv" behåller suffixet, artikeltitlar på 45 tecken och uppåt gör det inte.

### Body, uppifrån

1. `<a href="#innehall" class="hoppa">Hoppa till innehåll</a>`. Visuellt dold, synlig vid fokus (position absolute, `focus:not-sr-only`-mönstret), första fokuserbara elementet.
2. Inlinead ikonsprite: `import ikoner from '../assets/brand/riktning-1/ikoner.svg?raw'` och `<Fragment set:html={ikoner} />`. Filen har `style="display:none"` och `<symbol id="ikon-...">`.
3. `<header>`, 56 px hög på mobil, 64 från `lg`, 1 px `linje` under. Innehåll i `max-w-sidbredd`:
   - Ordmärket som länk till `/`: `import ordmarke from '../assets/brand/riktning-1/ordmarke-inline.svg?raw'`, `set:html` inuti `<a href="/" class="ordmarke" aria-label="Hantverkstips, till startsidan">`. Filen finns (designansvarig lade till den 2026-09-15), saknar `xmlns` med avsikt och sätter färger och typsnitt via `var(--color-blyerts)`, `var(--color-penna)`, `var(--color-tumstock)` och `var(--font-serif)`, så den följer tokens automatiskt. CSS: `.ordmarke svg { height: 1.75rem; width: auto }` på mobil, `2rem` från `lg`. Ordmärket är den enda länken till startsidan i sidhuvudet.
   - Desktop (`hidden lg:flex`): `<nav aria-label="Huvudmeny">` med länkarna i rad till höger: de publicerade hubbarna i `PELARE`-ordning (högst `MAX_HUBBAR_I_MENY`, tre sedan 2026-09-16), sedan Ämnen `/amnen/`, Guider `/guider/`, Räkna själv `/rakna/` och Så testar vi `/om/sa-testar-vi/`. 15 px, `blyerts`, understrykning vid hover. Listan byggs av `publicerade('pelare')` (ändrat 2026-09-16, tidigare hårdkodad) enligt `docs/INNEHALLSARKITEKTUR.md` avsnitt 4.
   - Mobil (`lg:hidden`): `<details class="meny">` med `<summary>` som visar `<Ikon namn="meny" />` och ordet "Meny" (text, inte bara ikon), 44 px hög. När öppen: en lista absolut positionerad under sidhuvudet, full bredd, bakgrund `papper`, `shadow-lyft`, 48 px per rad. Innehåll uppifrån: hubbarna med pelarikon och raden "Alla ämnen", sedan "Guider och tester" och "Räkna själv", sedan rubriken "Bäst i test" i etikett-stil följd av kategorisidorna (max fyra, från `publicerade('kategorier')`), sist "Så testar vi" och "Om Hantverkstips". Ingen JavaScript, `<details>` sköter öppna och stäng. `summary::marker` döljs.
4. `<Reklamband />` om `reklam`.
5. `<Brodsmulor lista={brodsmulor} />` om `brodsmulor` finns, inuti `main`:s bredd, ovanför slot.
6. `<main id="innehall" tabindex="-1">` med `max-w-lasbredd` (eller `sidbredd` om `bred`), `px-4 sm:px-6 lg:px-8`, `py-8 lg:py-12`.
7. `<footer>` bakgrund `blyerts`, text `papper`, 14 px. Ordmärket överst i `papper`: samma inline-SVG, och eftersom den läser `var(--color-blyerts)` räcker det att sidfotens `.ordmarke` sätter `style="--color-blyerts: var(--color-papper)"`; tumstocksgult och pennstrecket behålls. Fyra grupper, en spalt på mobil och fyra från `lg`, i ordning:
   - **Ämnen**: alla publicerade hubbar, i `PELARE`-ordning, sist raderna "Alla ämnen" (`/amnen/`) och "Alla guider och tester" (`/guider/`). Data: `publicerade('pelare')` matchad mot `PELARE` för namn. En pelare utan publicerad hub listas inte.
   - **Bäst i test**: alla publicerade kategorier (`publicerade('kategorier')`), länk till `/[kategori]/` med `namn`.
   - **Räkna själv**: alla poster i `KALKYLATORER` (avsnitt 3.3), länk till `/rakna/[slug]/`.
   - **Om sajten**: Om oss `/om/`, Så testar vi `/om/sa-testar-vi/`, Så tjänar vi pengar `/om/sa-tjanar-vi-pengar/`, Författare `/forfattare/redaktionen/` (byts till riktig författare senare), Kontakt `/om/kontakt/`, Integritet `/om/integritet/`.
   - Sist en rad: "© {år} Hantverkstips". Inga sociala ikoner.
8. `<StrukturData>` för `BreadcrumbList` renderas av layouten när `brodsmulor` finns (avsnitt 6). Övrig strukturerad data renderar rutten via `<slot name="head" />`.

Layouten hämtar `publicerade('pelare')` och `publicerade('kategorier')` själv. Astro cachar samlingarna under bygget, så det kostar inget per sida.

## 2. Komponenter i `src/components/ui/`

Gemensamt: TypeScript-`interface Props` överst i varje fil, inga `any`. Alla klickytor minst 44 px höga. Fokus enligt `:focus-visible` i `global.css`. Ingen komponent renderar `<script>`.

### 2.1 `Ikon.astro`

```ts
type IkonNamn = 'fukt' | 'altan' | 'tak' | 'grund' | 'isolering' | 'verktyg' | 'el' | 'kalkylator'
  | 'meny' | 'stang' | 'sok' | 'pil-hoger' | 'extern-lank' | 'varning' | 'info' | 'check';
interface Props { namn: IkonNamn; storlek?: number /* px, standard 24 */; class?: string }
```

Renderar `<svg width={storlek} height={storlek} aria-hidden="true" class={...}><use href={`#ikon-${namn}`} /></svg>`. Färgen kommer från `currentColor`. Ikonen är alltid dekorativ; texten bredvid bär betydelsen. Exportera `IkonNamn` från filen så att `pelare.ts` kan typas mot den.

### 2.2 `Kopknapp.astro` (finns, justera utseendet)

Props och logik enligt filen. Utseende:

- Prisrad ovanför knappen: pris i `blyerts`, 600, tabellsiffror. Vid `slut`: "senast" i `blyerts-2` före priset.
- Primär knapp: bakgrund `penna`, text `papper`, 16 px 600, `px-5 py-3`, minst 44 px hög, radie `md`, ingen ikon, ingen skugga, ingen färgändring vid hover (fokusringen och markören räcker tills designansvarig lagt till en hover-token). Filen använder redan tokennamnen ovan. Full bredd inuti kort på mobil (`w-full sm:w-auto` styrs av föräldern med en klass på wrappern, komponenten själv är `inline-block`).
- Sekundär (`slut`): genomskinlig, 1,5 px ram `blyerts`, text `blyerts`.
- Under knappen finstilt i `blyerts-2`: "Annonslänk · pris 12 sep". Utan pris bara "Annonslänk". Punkten är U+00B7.
- Text: "Till Proffsmagasinet" med pris, "Se pris hos Proffsmagasinet" utan, "Slut i lager hos Proffsmagasinet" vid `slut`. `butikNamn` från databasen.

Det som anropar Kopknapp (Produktkort, Jamforelsetabell, DetHarBehoverDu, vyerna) skickar `pris`, `prisDatum`, `butikNamn`, `slut` från `billigasteErbjudande()` i `produkter.ts`. Innehållsfiler skickar bara `produkt` och eventuellt `modul`; då saknas pris, och knappen säger "Se pris hos Proffsmagasinet". Det är avsiktligt: prisdata i löptext ska gå via Produktkort.

### 2.3 `Produktkort.astro`

```ts
interface Props {
  produkt: string;                       // slug
  variant?: 'kompakt' | 'full';          // standard kompakt
  etikett?: string;                      // "Bäst till krypgrund". Redaktörens text
  forVem?: string;                       // en rad, redaktörens text
  modul?: KlickModul;                    // standard kort_kompakt respektive kort_full
  rekommenderad?: boolean;               // bakgrund papper-2
  visaTestlank?: boolean;                // standard true
}
```

Data: `await hamtaProdukt(produkt)` (avsnitt 3.1). Kategorifilen för produktens `kategoriSlug` via `getEntry('kategorier', slug)` ger `specs` och därmed nyckelvärdena. Testlänk: `publicerade('tester')` filtrerad på `data.produkt === slug`, första träffen ger `href` till `testUrl(entry)`.

Innehåll, i ordning: bild, etikett (om satt, `penna`, etikett-stil), H3 med `marke` och `modell` (eller `namn` om de saknas), `forVem`, nyckelvärden (de första fyra i kategorifilens `specs` som produkten har värde för, som `<dl>` med etikett och värde plus enhet, tabellsiffror), länken "Räkna elkostnaden", pris och köpknapp, länk "Läs testet" (sekundär stil, om test finns).

"Räkna elkostnaden" kom till 2026-09-17 med elkostnadskalkylatorn. Den står under nyckelvärdena, som textlänk i `penna` med 44 px klickyta, och går till `/rakna/elkostnad/?produkt=[slug]`. Raden visas bara när produktens specs har `effekt_w`; utan effekt finns inget att räkna på. Villkoret läses med `produktForval()` ur avsnitt 4.7.3, så att ett tal som ligger som sträng i databasen behandlas likadant här och i kalkylatorn.

Bild: 4:3-ruta, vit bakgrund, 1 px `linje`, radie `sm`, 8 px luft, `object-fit: contain`. Kompakt: 96 × 72 px till vänster om texten. Full: överst i kortets bredd på mobil, 40 procent till vänster från `lg`. Bilden renderas bara om `bildUrl` börjar med `/` (lokal fil under `public/bilder/produkter/`), med `<img width height loading="lazy" decoding="async">`; externa adresser hotlinkas inte och ger tillståndet "Bild saknas".

Tillstånd:

| Tillstånd | Beteende |
|---|---|
| Normal | Ram `linje`, bakgrund `papper`, radie `md`, 16 px innermarginal (24 från `lg`) |
| Rekommenderad | Bakgrund `papper-2` |
| Bild saknas | Rutan i `papper-2` med `marke` (eller `namn`) i etikett-stil centrerat |
| Utan test | Länken utgår |
| Slut i lager | `slut` skickas till Kopknapp när `lagerstatus` är `slut`. Kortet i övrigt oförändrat |
| Databas saknas (`hamtaProdukt` ger null) | Kortet renderas som ram med texten `Produkt: {slug}` i etikett-stil och raden "Produktdata saknas i bygget" i `blyerts-2`. Ingen köpknapp. `console.warn` en gång per slug |

### 2.4 `Jamforelsetabell.astro`

```ts
interface Props {
  produkter: string[];                     // slugs, i kolumnordning
  kategori: string;                        // kategorislug, ger specs och enheter
  kopknappar?: boolean;                    // standard true
  etiketter?: Record<string, string>;      // slug -> etikett i första raden
  rekommenderade?: string[];               // slugs vars kolumn får papper-2
  modul?: KlickModul;                      // standard tabell
}
```

Data: `hamtaProdukter(produkter)` och `getEntry('kategorier', kategori)`. Produkter som saknas i databasen hoppas över med `console.warn`. Färre än två kvar: komponenten renderar ingenting och varnar `[Jamforelsetabell] färre än två produkter på {Astro.url.pathname}`.

Markup: `<div class="tabell-behallare">` med `overflow-x: auto`, före den en rad "Dra i sidled för att se alla" i 14 px `blyerts-2` (bara under `lg`, `lg:hidden`). `<table>` med `<caption class="sr-only">`. Första kolumnen `<th scope="row">` med `position: sticky; left: 0`, bakgrund `papper-2`, 1 px `linje` till höger. Produktkolumner 150 px breda (`min-w-[150px]`; det är den enda tillåtna godtyckliga bredden). Rader: bild (80 px bred, samma ruta som i Produktkort), namn (H3-stil, `<th scope="col">`), etikett (om satt), en rad per spec i kategorifilens ordning, sist pris med Kopknapp om `kopknappar`.

Bästa värdet: för specs med `bast` jämförs numeriska värden (`Number(v)`, `NaN` räknas inte); bästa cellen får `font-semibold text-ok`. Saknat värde skrivs "ej angivet" i `blyerts-2`. Enheter står bara i radrubriken. Prisraden utgår om ingen produkt har pris.

### 2.5 `Faktaruta.astro`

```ts
interface Props {
  variant?: 'kortsvar' | 'fakta' | 'kopom';   // standard fakta
  rubrik?: string;                            // H3-stil. kortsvar: standard "Kort svar"
  kopOm?: string;                             // bara kopom
  kopInteOm?: string;                         // bara kopom
}
```

- `kortsvar`: 4 px `penna`-linje till vänster, ingen bakgrund, 16 px innermarginal. Enligt riktning 1 får rutan dessutom ett svagt linjerat mönster: bakgrund `url(monster.svg)` importerad via `?url`, bara om designansvarig bekräftar det i DESIGN.md. Bygg utan mönster först.
- `fakta`: bakgrund `papper-2`, radie `md`, 16 px innermarginal (24 från `lg`).
- `kopom`: som `fakta`, med två delar under etiketterna "Köp om" och "Köp inte om" (etikett-stil), staplade på mobil, två spalter från `lg`. Texten kommer från `kopOm` och `kopInteOm`, ett stycke var. Slot ignoreras.

Innehåller aldrig köpknappar. Slot renderas som `<div class="prosa">` så att stycken och listor i MDX får rätt avstånd.

### 2.6 `Varning.astro`

`interface Props { rubrik?: string }`, standard "Varning". 4 px linje till vänster i `varning`, rubrik i etikett-stil och `varning`, ingen bakgrund, ingen ikon. Slot som i Faktaruta.

### 2.7 `Innehallsforteckning.astro`

```ts
interface Props { rubriker: { slug: string; text: string }[] }
```

Anroparen filtrerar `headings` från `render()` på `depth === 2` och skickar dem, eller bygger listan själv (kategorisidan). Färre än tre poster: renderar ingenting.

Två markupvarianter i samma komponent:
- `<details class="lg:hidden">` med `<summary>` "Innehåll, {n} avsnitt", ram `linje`, radie `md`, stängd som standard. Öppnad: `<ol>` med 44 px per rad.
- `<nav class="hidden lg:block" aria-label="Innehåll">` med rubriken "Innehåll" i etikett-stil och samma `<ol>`, 15 px `blyerts-2`. Anroparen placerar den i sidospalten med `sticky top-20`.

Länkarna är `#${slug}`. Slugs från Astro innehåller å, ä, ö; det är tillåtet.

### 2.8 `Forfattarruta.astro`

```ts
interface Props { forfattare: string; publicerad?: Date; uppdaterad?: Date }
```

Data: `getEntry('forfattare', forfattare)`; saknas den används `redaktionen`; saknas även den renderas texten "Redaktionen" utan länk. 1 px `linje` ovanför, 24 px lodrätt. Foto 64 × 64 px, radie `sm`, via `<Image>` från `data.bild`; utan foto en kvadrat i `papper-2` med initialer (första bokstaven i varje ord i `namn`, max två) i etikett-stil. Namnet som länk till `/forfattare/[id]/`, 600. Rad två: `presentation`, eller om `sedan` finns "{yrke} sedan {sedan}. {presentation}". Rad tre i 14 px `blyerts-2`: "Publicerad {datum}" och ", uppdaterad {datum}" om den finns. Rad fyra: länk "Så testar vi" till `/om/sa-testar-vi/`.

### 2.9b `Artikelkort.astro`, `Artikelrutnat.astro` och `Kortgrupp.astro` (nya 2026-09-16)

```ts
// Artikelkort
interface Props {
  etikett: string;            // typEtikett(), eller "Bäst i test" på kategorikort
  niva?: Niva;                // visas som " · Mellan" efter etiketten
  rubrik: string;
  beskrivning?: string;       // klipps till tre rader i CSS
  illustration?: ImageMetadata;  // SVG som <img>, raster via <Image>
  bildAlt?: string;           // standard "", bilden är dekorativ på ett kort
  pelare: PelareSlug;         // placeholderns ikon och metaradens pelarnamn
  datum?: Date;
  meta?: string;              // fri text i stället för datum: "13 granskade"
  href: string;
  variant?: 'standard' | 'stor';
  kompaktPaMobil?: boolean;   // bild 120 × 72 till vänster under 640 px
  visaPelare?: boolean;       // false på hubben, där alla kort har samma pelare
  rubrikniva?: 2 | 3;         // standard 3
  prioriterad?: boolean;      // LCP-bild, ingen lazy
  bladfakta?: { val?: string; antal?: number };  // kategorikortets bildyta
}

// Artikelrutnat
interface Props { kort: KortData[]; storForsta?: boolean; kompaktPaMobil?: boolean; visaPelare?: boolean; prioriteraForsta?: boolean }

// Kortgrupp (bara i en pelarhub)
interface Props { grupp: 'hitta-felet' | 'valj-ratt' | 'gor-det-sjalv' | 'rakna' }
```

`KortData` och mappningen från frontmatter ligger i `src/lib/kort.ts` (`tillKortArtikel`, `tillKortTest`, `tillKortJamforelse`, `tillKortKategori`, `allaKort`, `pelareForKategori`), så att startsidan, hubben, `/amnen/` och `/guider/` bygger sina kort på ett ställe. Tester och jämförelser saknar `pelare` i frontmatter och får den via kategorifilens `pelare[0]`.

`Kortgrupp` läser pelaren ur `Astro.locals.pelare`, som `src/pages/[rot]/index.astro` och `vyer/PelarHub.astro` sätter innan `<Content>` renderas. En prop går inte: taggen står i innehållsfilen. Saknad pelare eller okänd grupp ger byggfel, och `npm run kontrollera` stoppar en `<Kortgrupp>` i fel samling eller med okänt gruppnamn. En tom grupp renderar ingenting.

Utseendet i sin helhet står i `docs/DESIGN.md` avsnitt 6, Artikelkort.

### 2.9c `Filterrad.astro` och `Paginering.astro` (nya 2026-09-16)

```ts
interface FilterradProps { rader: { etikett: string; poster: { namn: string; antal: number; href: string; aktiv: boolean }[] }[] }
interface PagineringProps { sida: number; antal: number; bas: string }
```

Bara på `/guider/`. Inga knappar, ingen `<select>`, ingen JavaScript. `Paginering` renderar ingenting när `antal === 1`.

### 2.9 `Verktygskort.astro`

`interface Props { kalkylator: string; iRutnat?: boolean }`. `iRutnat` tar bort kortets egen luft ovanför och under, så att det kan ligga i ett rutnät med samma ram och radie som artikelkorten. Slår upp i `KALKYLATORER` (avsnitt 3.3); okänd slug ger byggfel (`throw new Error`). Ett kort med ram: `<Ikon namn="kalkylator" />` och etiketten "Räkna själv" på samma rad i etikett-stil, rubriken (H3) som länk till `/rakna/[slug]/`, en rad (`rad`), länktexten "Till kalkylatorn" som en textlänk under. Inget diagram i fas 1. En sida får aldrig ha två verktygskort; det är en granskningsregel, inte något komponenten kontrollerar.

### 2.9d `Kalkylator.astro` (ny 2026-09-17)

`interface Props { namn: string }`, alltså kalkylatorns slug. Bäddar in verktygets riktiga formulär i en artikel i stället för att länka till det: `<Kalkylator namn="daggpunkt" />` i MDX ger etiketten "Räkna själv", kalkylatorns namn som länk till `/rakna/[slug]/`, raden ur registret, och formuläret i kompakt form med `action` till verktygssidan. Läsaren fyller i, trycker på knappen och landar på verktygssidan med sina värden i adressen och svaret uträknat. Ingen klient-JavaScript, ingen formel i komponenten.

Formuläret kommer från `src/components/kalkyl/[Verktyg]Form.astro`, samma komponent som verktygssidan renderar, så att fälten aldrig hinner glida isär. Kalkylator sätter `idPrefix` (`daggpunkt-inbaddad-`), så att fältens id är unika även om sidan har ett annat formulär. Radioknapparna behåller sina namn (`fukt`, `temp`, `arstid`, `rum`); en radiogrupp hör till sitt formulär, inte till sidan.

Okänd slug ger byggfel som i Verktygskort, och en slug som finns i registret men saknar formulärkomponent ger ett eget byggfel som säger vad som fattas (listan `MED_FORMULAR` i komponenten). `npm run kontrollera` läser dessutom `<Kalkylator namn="...">` i alla innehållsfiler mot registret.

Skillnaden mot Verktygskort: kortet är en hänvisning och ligger i rutnät och listor, Kalkylator är verktyget på plats och står en gång i en artikel, där läsaren just fått veta vad talet betyder.

### 2.10 `Amnesrad.astro`

Inga props. Bara på startsidan. Data: `PELARE`, `hubPublicerad(slug)` per pelare, samt `publicerade('guider')` och `publicerade('kunskap')` för antalet sidor. Ett `<nav aria-label="Ämnen">` med en `<ul>` i två spalter, fyra från `lg`: ett kort per pelare, alla åtta, i `PELARE`-ordning. Kortet är vänsterställt med `<Ikon namn={pelare.ikon} storlek={40} />` överst, en etikett i versaler, `PELARE.kort` i kortrubrik (Zilla Slab 600) och `PELARE.rad` i 14 px `blyerts-2`.

Publicerad hub: kortet får klassen `artikelkort`, namnet är en `<a class="kortlank">` till `/[slug]/`, alltså samma ram, hover, fokus och klickyta som Artikelkort, och etiketten är antalet publicerade guider och kunskapsartiklar i pelaren ("4 sidor", "1 sida", ingen etikett vid noll). Utan hub: samma kort i `papper-2` med ikon och namn i `blyerts-2`, ingen länk, etiketten "Kommer". Under rutnätet länken "Alla ämnen" till `/amnen/`, högerställd. Ingen H2, ingen Pennstreck: raden är navigering, inte ett textblock. Utseendet står i `docs/DESIGN.md` avsnitt 5.1 och 6.

### 2.11 `DetHarBehoverDu.astro`

```ts
interface Props {
  verktyg: { produkt: string; namn?: string; varfor: string }[];
  material: { namn: string; varfor: string }[];
}
```

H2 "Det här behöver du" via Pennstreck. H3 "Verktyg": en rad per post, `hamtaProdukt(slug)` ger namn och pris; raden visar namn (600), `varfor`, pris i `blyerts-2` och Kopknapp med `modul="behovslista"`. Utan produktdata (slug saknas i databasen) visas raden ändå med `namn` från frontmatter, annars slugen, utan pris och utan knapp, och bygget varnar via `varnaSaknadProdukt()` men stoppar inte. H3 "Material": namn (600) och `varfor`, ingen länk. Rader med 1 px `linje` emellan, inga kort, ingen tabell. Tom lista: H3 utgår. Båda tomma: komponenten renderar ingenting.

### 2.12 `Reklamband.astro`

`interface Props { butikNamn?: string }`, standard "Proffsmagasinet" (rutten skickar `hamtaButik()?.namn`). Full bredd, bakgrund `papper-2`, 1 px `linje` under, 12 px lodrätt, text i läsbredd, 14 px `blyerts`. Text exakt:

"Reklam. Sidan innehåller annonslänkar till {butikNamn}. Handlar du via dem får vi provision, priset för dig är detsamma. Så tjänar vi pengar."

Sista meningen är länk till `/om/sa-tjanar-vi-pengar/`. Inte stängbar.

### 2.13 `Brodsmulor.astro`

`interface Props { lista: Brodsmula[] }`. `<nav aria-label="Brödsmulor"><ol>` med `/` som avdelare (via `::before` på `li + li`), 14 px `blyerts-2`, sista posten utan länk och med `aria-current="page"`. Under `lg` visas bara de två sista: `li:not(:nth-last-child(-n+2)) { display: none }` i en `@media (max-width: 1023px)`. Ingen strukturerad data här, den sköter layouten.

### 2.14 `Pennstreck.astro`

Rubrik med signaturstrecket. `interface Props { id?: string; niva?: 2 | 3 }`, standard 2. Renderar `<h2 id={id} class="pennstreck">` med slot, och direkt under ett inline-SVG `<svg viewBox="0 0 280 8" height="8" aria-hidden="true"><path d="M2,5 Q70,2 140,4.5 T278,4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>` i `penna`, bredd 120 px, `preserveAspectRatio="none"`. Strecket är samma form som under ordmärket. Skickas som `h2` i `components` till `<Content>` så att alla H2 i innehållet får det; Astro skickar `id` som prop, och den måste vidarebefordras för att innehållsförteckningen ska fungera.

### 2.15 `Markering.astro`

Inga props. `<mark class="bg-tumstock/65 text-blyerts px-1 rounded-sm">` med slot. Används kring ett tal eller två ord, aldrig en hel rad. Kontrast `blyerts` på `tumstock` är 8,18.

### 2.16 `StrukturData.astro`

`interface Props { data: object | object[] }`. Renderar `<script type="application/ld+json" set:html={json} />` där `json = JSON.stringify(data).replace(/</g, '\\u003c')`. En array blir `{ "@context": "https://schema.org", "@graph": [...] }`, ett objekt får `@context` tillagt. Det är inte klient-JS: webbläsaren kör inte `application/ld+json`, och kontrollen i avsnitt 10 undantar den.

## 3. Datalager

### 3.1 `src/lib/produkter.ts`

```ts
export interface Erbjudande {
  butikSlug: string; butikNamn: string;
  pris: number | null; ordPris: number | null;
  lagerstatus: string | null; uppdaterad: Date;
}
export interface Produkt {
  id: number; slug: string; namn: string; marke: string | null; modell: string | null;
  kategoriSlug: string | null; bildUrl: string | null;
  specs: Record<string, string | number | boolean | null>;
  erbjudanden: Erbjudande[];
}
export function databasFinns(): boolean;                       // publikKlient() !== null
export async function allaProdukter(): Promise<Map<string, Produkt>>;
export async function hamtaProdukt(slug: string): Promise<Produkt | null>;
export async function hamtaProdukter(slugs: string[]): Promise<Produkt[]>;   // i angiven ordning, saknade utelämnas
export async function produkterIKategori(kategoriSlug: string): Promise<Produkt[]>;  // sorterade på billigaste pris, utan pris sist
export async function hamtaButik(slug?: string): Promise<{ slug: string; namn: string } | null>;  // standard proffsmagasinet
export function billigasteErbjudande(p: Produkt): Erbjudande | null;
```

En enda fråga per bygge, memoiserad i en modulvariabel med tidsstämpel (giltig 60 minuter, så att serverkörda kalkylatorsidor inte frågar per anrop men ändå ser nya priser):

```ts
db.from('produkter')
  .select('id, slug, namn, marke, modell, bild_url, specs, kategorier(slug), erbjudanden(pris, ord_pris, lagerstatus, uppdaterad, butiker(slug, namn))')
  .eq('aktiv', true)
```

Utan databas (`publikKlient()` är null): `console.warn('[produkter] Databas saknas, produktkort visar platshållare')` en gång, och alla funktioner returnerar tomt eller null. Vid fel från Supabase: `throw` med felmeddelandet. Ett bygge med trasig databas ska stoppa, ett bygge utan databas ska gå igenom.

### 3.2 `src/lib/kalkyl/avfuktare.ts`

Ren funktion, inga importer från Astro, testbar utan bygge.

```ts
export type Fuktniva = 'medel' | 'hog' | 'mycket_hog';        // 60 till 70, 70 till 80, över 80 procent
export type Temperaturval = 'over_15' | 'fem_till_15' | 'under_5';
export type Avfuktartyp = 'kondens' | 'sorption';
export interface AvfuktareIndata { ytaKvm: number; takhojdM: number; fuktniva: Fuktniva; temperatur: Temperaturval }
export type AvfuktareResultat =
  | { status: 'ok'; volymM3: number; temperaturC: number; typ: Avfuktartyp;
      literPerDygnVerklig: number;        // vad maskinen tar upp vid temperaturC och 55 % RF
      marktKapacitetLiter: number;        // talet att jämföra med specs.kapacitet_liter_dygn
      marktIntervall: [number, number];   // samma tal med faktorns ytterlägen
      kapacitetVillkor: string }          // '30 °C och 80 % RF' eller '20 °C och 60 % RF'
  | { status: 'ogiltig'; fel: Partial<Record<keyof AvfuktareIndata, string>> }
  | { status: 'utanfor'; text: string };

export const STANDARD: AvfuktareIndata = { ytaKvm: 40, takhojdM: 2.4, fuktniva: 'hog', temperatur: 'fem_till_15' };
export const GRANSER = { ytaKvm: [5, 300], takhojdM: [0.5, 4] } as const;

export function mattnadsanghalt(tempC: number): number;   // Magnus-formeln, g/m³
export function raknaAvfuktare(i: AvfuktareIndata): AvfuktareResultat;
export function tolkaQuery(q: URLSearchParams): { indata: AvfuktareIndata; harIndata: boolean };
```

`tolkaQuery` läser `yta`, `takhojd`, `fukt` (`medel` | `hog` | `mycket_hog`) och `temp` (`over_15` | `fem_till_15` | `under_5`), accepterar decimalkomma (`'2,4'` blir 2.4), och fyller i `STANDARD` för det som saknas. Länkar som delades innan formuläret fick tre temperaturer bär `uppvarmt=1`; den parametern läses fortfarande och blir `over_15` respektive `fem_till_15`. `harIndata` är true om minst en parameter fanns.

`raknaAvfuktare`: först validering; icke-tal eller värden utanför `GRANSER` ger `ogiltig` med text per fält ("Ange yta mellan 5 och 300 kvm", "Ange takhöjd mellan 0,5 och 4 m"). Takhöjden går ner till 0,5 m så att krypgrunder ryms. Yta över 300 ger `utanfor` med texten "Över 300 kvm rekommenderar vi två maskiner eller en fast installation. Läs guiden om krypgrund." `temperatur === 'under_5'` ger `utanfor` med "Under 5 grader tappar även sorptionsmaskiner fart och kondensmaskiner står stilla. Läs guiden om krypgrund innan du köper."

Sedan produktexpertens formel ur `docs/briefer/underlag-kalkyl-avfuktare.md`, som räknar fuktbelastningen per dygn i augusti och sedan räknar om den till kapaciteten på lådan:

```
V   = yta × takhöjd
v_s = mattnadsanghalt(T)                            // Magnus, T = 15 uppvärmt, 10 ouppvärmt
M_luft = V × (RF_start − 0,55) × v_s / 1000          // engångsuttag ur luften, liter
G_luft = max(0, 0,5 × V × 24 × (10,0 − 0,55 × v_s) / 1000)   // uteluft, liter per dygn
G_mark = yta × q / 1000                              // q = 10 / 40 / 100 g per m² och dygn
L_verklig = (M_luft + G_luft + G_mark) × 1,3
L_märkt   = ceil(L_verklig / f)                      // f = 0,30 kondens vid 15 °C, 0,80 sorption vid 10 °C
```

Alla konstanter ligger som namngivna konstanter överst i filen med kommentar om källa eller antagande. Räkneexemplen i underlagets avsnitt 5 körs av `scripts/test-kalkyl-avfuktare.mjs` (`node --experimental-strip-types --test scripts/test-kalkyl-avfuktare.mjs`) och ger 7 och 23 liter, 17 och 21, 4 och 5. Standardvärdena (40 kvm, 2,4 m, hög fukt, ouppvärmt) ger 10 liter verkligt och 12 liter märkt sorption.

### 3.3 `src/lib/kalkyl/register.ts`

```ts
export interface Kalkylator { slug: string; namn: string; rad: string; sasong: [number, number] /* månad från, till, 1 till 12 */; kategori?: string; pelare?: readonly string[] }
export const KALKYLATORER: Kalkylator[] = [
  { slug: 'daggpunkt', namn: 'Blir väggen våt? Räkna ut daggpunkten', rad: 'Temperatur, luftfuktighet och kallaste ytan ger kondensrisken.', sasong: [11, 2], pelare: ['fukt'] },
  { slug: 'avfuktare', namn: 'Hur stor avfuktare behöver du?', rad: 'Yta, takhöjd och fuktnivå ger liter per dygn, och maskinerna som klarar det.', sasong: [8, 11], kategori: 'luftavfuktare', pelare: ['fukt'] },
  { slug: 'elkostnad', namn: 'Vad kostar maskinen i el?', rad: 'Effekt, gångtid och elpris ger kilowattimmar och kronor.', sasong: [10, 3], pelare: ['el', 'fukt'] },
];
export function hittaKalkylator(slug: string): Kalkylator | undefined;
```

`pelare` kom till 2026-09-17. Hubbens grupp Räkna (`Kortgrupp`) och `/amnen/` filtrerade fram till dess bara på `kategori`, och en kalkylator som inte pekar på en produktkategori kunde därför inte visas i något ämne. Båda läser nu `k.pelare` först och kategorin sedan. Samma dag, med elkostnadskalkylatorn, blev fältet en lista: verktyget räknar på vilken maskin som helst men frågan ställs oftast om en avfuktare, så det står i både El och energi och Fukt. `Kortgrupp`, `/amnen/` och `scripts/kontrollera-innehall.ts` läser listan. `rad` är högst tolv ord, den ska rymmas på två rader i ett kort. `npm run kontrollera` stoppar bygget om `pelare` eller `kategori` i registret pekar på något som inte finns.

`sasong` är underlag för chefredaktörens val av `justNu`, inte något koden läser: `sasongensKalkylator` togs bort 2026-09-16 med startsidans säsongsblock. Fler kalkylatorer läggs till här och som `src/pages/rakna/[slug].astro`-filer. Sidfoten och `/rakna/` läser listan.

### 3.4 `src/lib/strukturdata.ts`

Byggare som returnerar vanliga objekt. `SAJT = 'https://hantverkstips.se'`.

```ts
export function organisation(): object;   // @type Organization, @id `${SAJT}/#organisation`, name, url, logo (symbol.svg via ?url), sameAs tom
export function brodsmulor(lista: Brodsmula[]): object;   // BreadcrumbList, position 1..n, item bara på poster med href
export function artikel(a: { url: string; titel: string; beskrivning: string; publicerad: Date; uppdaterad?: Date; forfattareSlug: string; forfattareNamn: string; bildUrl?: string }): object;
   // Article, headline, description, datePublished, dateModified, author { @type Person, name, url `${SAJT}/forfattare/${slug}/` }, publisher { @id organisation }, mainEntityOfPage url, image om finns
export function produkt(p: { produkt: Produkt; url: string; etikett: 'test' | 'granskning'; omdome: string; forfattareNamn: string; publicerad: Date }): object;
   // Product, name, brand { @type Brand, name marke }, sku slug, image om lokal, offers { @type AggregateOffer, priceCurrency SEK, lowPrice, highPrice, offerCount, availability } bara om minst ett erbjudande har pris.
   // review { @type Review, author, datePublished, reviewBody omdome } BARA när etikett är test. En granskning har inget review-objekt; det är E-E-A-T-regeln i INNEHALLSARKITEKTUR avsnitt 7.
export function lista(l: { url: string; namn: string; poster: { namn: string; url: string }[] }): object;   // ItemList med ListItem position 1..n
export function person(f: { slug: string; namn: string; yrke: string; presentation: string; bildUrl?: string }): object;   // Person, @id `${SAJT}/forfattare/${slug}/#person`, jobTitle, description, image
```

Inga betyg (`reviewRating`, `aggregateRating`) någonstans. Vi har inga stjärnor.

## 4. Sidor och rutter

Alla rutter utom kalkylatorn och `/go/` är statiska. Varje rutt: sätter `Astro.locals.sidtyp` överst där köpknappar kan förekomma, hämtar data, bygger `brodsmulor`, avgör `reklam`, renderar `<Bas>` och sin vy. Vyer ligger i `src/components/vyer/` och tar hela `entry` som prop; rutterna är tunna.

`<title>` skickas till `<Bas>` utan varumärke, och layouten lägger på `" · Hantverkstips"` när den färdiga titeln ryms i 60 tecken (avsnitt 1). Startsidan är sin egen: där bär titeln varumärket först och får inget suffix.

#### 4.0 Komponentuppsättningen till `<Content>`

En innehållsfil importerar aldrig en komponent själv. Mallen skickar dem via `components`-propen på `<Content>`, och en MDX-fil som använder något utanför sin uppsättning ger byggfel. Det är avsikten: uppsättningen är gränsen för vad skribenten får skriva. Två uppsättningar finns, och alla artikelmallar använder den ena eller den andra. Ändras listan här ska den ändras i alla mallar som använder den.

**Basuppsättningen** (allt utom affiliate):

```
h2: Pennstreck, Faktaruta, Illustration, Varning, Verktygskort, Kalkylator, Markering, Faq
```

`Kalkylator` kom till 2026-09-17 med daggpunktskalkylatorn och står i båda uppsättningarna. En artikel som förklarar ett tal får alltså bädda in verktyget som räknar ut det.

`Faq` kom till 2026-09-17 och står i båda uppsättningarna. Den tar `fragor` (`{ fraga, svar, lank? }[]`) och en valfri `rubrik` som standard är "Vanliga frågor", renderar frågorna som `<details>` och skriver ut FAQPage-markup där den står. Två regler gäller: högst en `<Faq>` per sida, vilket `npm run kontrollera` kontrollerar, och den står sist i brödtexten, före författarrutan. Svaren är ren text; behöver ett svar peka vidare används fältet `lank`, inte en markdownlänk inne i svaret. Skälet står i komponentens toppkommentar: en sträng som är både synlig text och JSON-LD får inte betyda två saker.

**Produktuppsättningen** = basuppsättningen plus `Kopknapp`, `Produktkort`, `Jamforelsetabell`.

| Mall | Uppsättning |
|---|---|
| `vyer/Artikel.astro`, `typ === 'kunskap'` (4.3) | basuppsättningen |
| `vyer/Artikel.astro`, kopguide, problemguide, projektguide (4.3) | produktuppsättningen |
| `tester/[slug].astro` (4.4) | produktuppsättningen |
| `jamforelser/[slug].astro` (4.5) | produktuppsättningen |

Kategorisidans `<Content>` (4.2, punkt 6) står utanför: den renderar kategorifilens korta avsnitt och har en egen, kortare lista.

### 4.1 `src/pages/index.astro`

Data: `getEntry('sidor', 'startsida')` (H1 = `title`, stycket = `<Content />`), heroillustrationen som statisk import av `src/assets/illustrationer/start/hus-tumstock.svg`, `PELARE` med `hubPublicerad` per pelare (ämnesraden), "just nu" via `getEntry(justNu.samling, justNu.id)`, `publicerade('kategorier')` med `hamtaProdukt(val[0].produkt)` per kategori, de sex senaste av guider + kunskap + tester + jamforelser sorterade på `publicerad` fallande, `KALKYLATORER`.

Block i ordning, enligt `docs/INNEHALLSARKITEKTUR.md` avsnitt 5 och `docs/DESIGN.md` avsnitt 5.1 (omskrivna 2026-09-16, säsongsblocket borttaget samma dag):

1. Hero: ett rutnät i 12 kolumner i sidbredd, `items-center`, 48 px mellanrum från `lg`. Vänster 6/12: H1 i Zilla Slab och stycket från `startsida.mdx` i ingress-storlek, med länkarna i texten. Höger 6/12: illustrationen som `<img>` med `width` och `height` ur importen, `fetchpriority="high"`, `decoding="async"`, `alt=""`. Ingen ram, ingen bildtext, inget linjerat papper. Sidans LCP-bild. Mobil: en kolumn, H1, stycket, illustrationen.
2. `<Amnesrad />` i sidbredd, direkt under heron (avsnitt 2.10). Ersatte "Börja här" 2026-09-16.
3. Guider och tester: H2 via Pennstreck med länken "Alla guider och tester" på samma rad, sedan `<Artikelrutnat storForsta kompaktPaMobil />` med `justNu` först och de fyra senaste ur `allaKort()` efter, `justNu` bortfiltrerad på `href`. Utan `justNu` i frontmatter visas de fem senaste. Säsongen styrs genom `justNu`, inte genom ett eget block.
4. Bäst i test just nu: H2. En rad per kategori ur `kategoriVal()`: kategorinamn (H3 som länk till `/[kategori]/`), "Vårt val" i etikett-stil med produktnamnet, pris via `formateraPris` och antalet granskade, länken "Alla vi granskat". Två spalter av rader från `lg`. Ingen köpknapp, ingen bild. Kategori vars produkt saknas i databasen visar raden utan pris. Inga kategorier: blocket utgår.
5. Räkna själv: H2 och `<Verktygskort iRutnat />` per kalkylator i tre kolumner från `lg`, två från `sm`. Renderas när `KALKYLATORER.length > 0`.
6. Så jobbar vi: H2 och två meningar med länkar till "Så testar vi" och "Så tjänar vi pengar", i läsbredd.

`<title>` är "Hantverkstips, kunskap om huset från källaren till taket", samma mening som H1 utan H1:ans komma. Den står utskriven i rutten och byts när chefredaktören byter H1; `seoTitle` i frontmatter vinner över den.

`reklam={false}`. Ingen `sidtyp`. Strukturerad data: `organisation()` i `<slot name="head">`. `bred={true}`.

### 4.2 `src/pages/[rot]/index.astro` (pelarhub eller kategorisida)

Löser kollisionen mellan `/[pelare]/` och `/[kategori]/`: en rutt, `getStaticPaths` avgör vad `rot` är.

```ts
export async function getStaticPaths() {
  const hubbar = await publicerade('pelare');
  const kategorier = await publicerade('kategorier');
  for (const h of hubbar) if (!arPelare(h.id)) throw new Error(`src/content/pelare/${h.id}: okänd pelare, lägg till i src/lib/pelare.ts`);
  for (const k of kategorier) {
    if (arPelare(k.id)) throw new Error(`Kategorin ${k.id} kolliderar med pelaren med samma slug`);
    if ((RESERVERADE_ROTSLUGS as readonly string[]).includes(k.id)) throw new Error(`Kategorin ${k.id} använder en reserverad sökväg`);
  }
  return [
    ...hubbar.map((entry) => ({ params: { rot: entry.id }, props: { typ: 'pelare' as const, entry } })),
    ...kategorier.map((entry) => ({ params: { rot: entry.id }, props: { typ: 'kategori' as const, entry } })),
  ];
}
```

Pelarslugs vinner alltid: en kategori får inte heta som en pelare, bygget stoppar. Rutten renderar `<PelarHub entry />` eller `<Kategorisida entry />`.

**`vyer/PelarHub.astro`.** `sidtyp` sätts inte (inga knappar). `reklam={false}`, `bred={true}`. Brödsmulor: Hantverkstips / {kort}. H1 `title`, `description` visas inte (den är meta), `<Content components={{ h2: Pennstreck, Faktaruta, Varning, Verktygskort, Markering, Illustration, Kortgrupp }} />`. Rutten och vyn sätter `Astro.locals.pelare` innan innehållet renderas, så att `<Kortgrupp grupp="...">` i hubfilen vet vilken pelare den står i. Brödtexten hålls till läsbredd med en scoped regel på `.hub-prosa > p` med flera; kortrutnäten (`ul.kortrutnat`) undantas och fyller sidbredden. Sist H2 "Alla sidor i {kort}" med länken "Alla guider i {kort}" till `/guider/[pelare]/` på samma rad: alla publicerade guider och kunskap med `pelare === rot`, sorterade på titel och grupperade på nivå i tre spalter. Den listan är säkerheten mot föräldralösa sidor, korten ovanför är kartan. Kategorisidorna ligger numera som kategorikort i gruppen "Välj rätt", inte i en egen lista. Strukturerad data: `artikel()` med författare redaktionen.

**`vyer/Kategorisida.astro`.** `Astro.locals.sidtyp = 'kategori'`. `reklam={true}`. `bred={true}`. Data: `produkterIKategori(entry.id)`, `publicerade('tester')` filtrerade på `kategori === entry.id`, guider + kunskap + jamforelser med samma `kategori`, `hamtaButik()`. Brödsmulor: Hantverkstips / {namn}. Ordning:

1. H1 `title`, ingress `ingress`, meta i 14 px `blyerts-2`: "Uppdaterad {datum} · Av {författarnamn} · {n} produkter jämförda" där n är antalet produkter från databasen.
2. Våra val: block i `papper-2` kant till kant på mobil, H2 "Våra val". Ett `Produktkort` (kompakt) per post i `val`, med `etikett`, `forVem`, `modul="varaval"`, `rekommenderad`. Staplade på mobil, tre lika i rad från `lg`. Tom `val` eller databas saknas: blocket utgår.
3. `<Innehallsforteckning rubriker={...} />` byggd av vyn: "Jämförelse", en post per produkt (namn), "Så väljer du", "Så testade vi", plus H2 från kategorifilens body via `render()`. Alla H2 som vyn själv renderar får `id` av `slugify` i `innehall.ts` (lägg till: gemener, å→a, ä→a, ö→o, mellanslag→bindestreck).
4. H2 "Jämförelse" (Pennstreck) och `<Jamforelsetabell produkter={alla slugs} kategori={entry.id} rekommenderade={val.map(v => v.produkt)} etiketter={...} />`.
5. Per produkt, i tabellens ordning: H2 (Pennstreck) med namnet, `Produktkort variant="full"` med `rekommenderad` om den finns i `val`, sedan om produkten har ett test: `omdome` som stycke, `<Faktaruta variant="kopom" kopOm kopInteOm />`, länk "Läs hela testet", och en avslutande Kopknapp med `modul="avslut"`. Utan test: kortet och raden "Granskas. Vi har inte haft maskinen." i `blyerts-2`. 48 px mellan produkter (64 från `lg`) och 1 px `linje`.
6. `<Content components={{ h2: Pennstreck, Faktaruta, Varning, Markering }} />` (kategorifilens "Så väljer du" och "Så testade vi").
7. `<Verktygskort kalkylator={kalkylator} />` om fältet finns.
8. H2 "Fler guider och tester om {namn}": lista med etikett och länk för allt med samma `kategori`. Tomt: utgår.
9. `<Forfattarruta forfattare={forfattare} uppdaterad={uppdaterad} />`.

Strukturerad data: `kategori()` i `src/lib/strukturdata.ts` med produkterna i tabellordning. Varje `ListItem` bär ett helt `Product` (`name`, `brand`, `sku`, `image` när `lokalBild()` ger en lokal fil, `url` = testsidan om test finns, annars kategorisidan med `#`-ankare till produktens H2) och ett `Offer` med `price` = lägsta pris, `priceCurrency: "SEK"`, `availability` ur `arSlut()` och `url` = samma sida som produktens. Ändrat 2026-09-17 från `lista()`, som bara gav namn och länk och därmed inget om det sidan faktiskt visar: pris, lager och köpknapp.

Två saker är avsiktliga. `offers.url` pekar aldrig på `/go/[slug]`: Google vill ha adressen där erbjudandet visas för läsaren, och `/go/` är en vidarebefordran med `rel="sponsored nofollow"` som varken renderar pris eller produktnamn. Och pris och lagerstatus läses ur `lagstaPris()`, `billigasteErbjudande()` och `arSlut()`, alltså samma funktioner som `Kopknapp` och `produkt()`, så att sidan och markupen aldrig kan säga olika. En produkt utan pris får inget `offers`; då saknar dess `Product` det Google kräver för ett rikt resultat, vilket är rätt läge, eftersom alternativet vore ett påhittat pris.

Desktop: innehåll i läsbredd centrerat i `sidbredd`, innehållsförteckningen i höger spalt från `lg` (`lg:grid lg:grid-cols-[minmax(0,44rem)_16rem] lg:gap-12`). Våra val och tabellen bryter till full `sidbredd` (`lg:col-span-2`).

### 4.3 `src/pages/[rot]/[slug].astro` (artikel)

```ts
export async function getStaticPaths() {
  const guider = await publicerade('guider');
  const kunskap = await publicerade('kunskap');
  const alla = [...guider, ...kunskap];
  const sedda = new Set<string>();
  for (const e of alla) {
    const nyckel = `${e.data.pelare}/${e.id}`;
    if (sedda.has(nyckel)) throw new Error(`Två artiklar har adressen /${nyckel}/`);
    sedda.add(nyckel);
  }
  return alla.map((entry) => ({ params: { rot: entry.data.pelare, slug: entry.id }, props: { entry } }));
}
```

Rutten sätter `Astro.locals.sidtyp` från `typ`: `kopguide` → `guide`, `problemguide` → `problemguide`, `projektguide` → `projektguide`, `kunskap` → `kunskap` (sedan 2026-09-16, för knapparna i "Produkterna vi nämner"). Renderar `<Artikel entry />`.

**`vyer/Artikel.astro`.** Ordning, gemensam:

1. Brödsmulor via `brodsmulorForArtikel(entry)`.
2. Etikett (`typEtikett(typ)`) i etikett-stil, H1 `title`, ingress = `description`? Nej: ingressen är det första stycket i brödtexten och skrivs av skribenten, mallen visar inte `description`. Meta: "Publicerad {datum}" (", uppdaterad {datum}"), "Av {namn}".
3. `<Content components={komponenter} />` där `komponenter` beror på typ (4.0 och tabellen nedan). Skribenten lägger `<Faktaruta variant="kortsvar">` överst själv; mallen tvingar inte.
4. Bild: om `bild` finns, `<Image src={bild} alt={bildtext ?? ''} widths={[375, 704]} sizes="(min-width: 1024px) 704px, 100vw" />` med `<figcaption>`. Placeringen "under Kort svar" löses så: vyn renderar bilden före `<Content>` om innehållet inte börjar med en Faktaruta, annars direkt efter första H2:s föregångare... det kräver att vyn läser MDX-trädet, vilket vi inte gör. Beslut: bilden renderas av vyn direkt efter metaraden, före `<Content>`. Skribenten skriver "Kort svar" som första element i brödtexten och bilden hamnar då ovanför det. Designansvarig får avgöra om det håller; alternativet är att skribenten placerar bilden själv med `![]()` i MDX, och då utelämnas `bild` i frontmatter.
5. `<Innehallsforteckning rubriker={headings depth 2} />` mellan bild och innehåll; på desktop i höger spalt.
6. Typspecifika block efter innehållet (tabell).
7. Källor: H2 "Källor" (Pennstreck) och `<ol>` från `kallor` med länk om `url` finns. Tom: utgår.
8. Relaterat: H2 "Läs vidare", tre till fyra länkar: kategorisidan om `kategori` finns, huben, och de två senaste andra artiklarna i samma pelare. Färre än två: utgår.
9. `<Forfattarruta forfattare publicerad uppdaterad />`.

| Typ | `sidtyp` | `reklam` | Komponenter till `<Content>` | Block efter innehållet |
|---|---|---|---|---|
| kopguide | guide | alltid true | produktuppsättningen (4.0) | H2 "Produkterna vi nämner": ett kompakt Produktkort per post i `produkter` med `forVem` och `etikett`, `modul="avslut"`. Tom lista: utgår |
| problemguide | problemguide | `produkter.length > 0` | samma som kopguide | inget. Produkten står i texten där diagnosen pekar på den |
| projektguide | projektguide | `behover?.verktyg.length > 0 || produkter.length > 0` | samma som kopguide | `<DetHarBehoverDu verktyg material />` från `behover` |
| kunskap | kunskap | `produkter.length > 0` | basuppsättningen (4.0) | H2 "Produkterna vi nämner" som i köpguiden när `produkter` inte är tom ("en produkt per typ, sist", DESIGN 5.3). Tom lista: inget, och inget reklamband |

Kunskap får inte `Kopknapp` eller `Produktkort` i brödtexten; skriver en innehållsfil ändå `<Produktkort>` ger MDX ett byggfel ("Expected component Produktkort to be defined"), vilket är avsikten. Produkterna på en kunskapssida kommer bara från frontmatterns `produkter` och renderas av mallen sist.

Strukturerad data: `artikel()` med `url = artikelUrl(entry)`, författarnamn från `forfattare`-samlingen, `bildUrl` om bild finns (absolut adress från `<Image>`-resultatet eller `bild.src`).

Desktop: samma tvåspaltsgrid som kategorisidan. Innehåll i läsbredd, tabeller och diagram får `lg:col-span-2`.

### 4.4 `src/pages/tester/[slug].astro`

`getStaticPaths` från `publicerade('tester')`. `Astro.locals.sidtyp = 'test'`. `reklam={true}`. Data: `hamtaProdukt(produkt)`, `getEntry('kategorier', kategori)`, `hamtaProdukter(alternativ.map(a => a.produkt))`, guider och kunskap med samma `kategori` (för "Relaterat"), `hamtaButik()`. Brödsmulor: Hantverkstips / {kategorinamn} (`/[kategori]/`) / {title}.

Ordning:

1. Etikett "Test" eller "Granskning" i etikett-stil, `penna`. H1 `title`. Meta: "Testad {testad}" (bara test), "Publicerad", "uppdaterad", "Av".
2. Omdömesblock: kort med ram. Bild från produkten (4:3) överst på mobil, 40 procent till vänster från `lg`. Etikett om produkten är `val[0]` i kategorifilen ("Vårt val"). `omdome` som ett stycke i ingress-storlek. Tabell med `matningar`: kolumnerna "Vi mätte" och "Tillverkaren uppger", enhet i radrubriken, tomt värde skrivs "ej mätt" (kolumnen vi) eller "ej angivet". På granskningar döljs kolumnen "Vi mätte" helt. `<Faktaruta variant="kopom" kopOm kopInteOm />`. Pris och Kopknapp `modul="kort_full"`.
3. `<Innehallsforteckning />` från headings.
4. `<Content>` med produktuppsättningen (4.0). Enligt `docs/AFFILIATE.md` ska inga knappar ligga mellan omdömet och avslutet; att Kopknapp ändå är tillåten i texten är för att granskaren ska kunna se och stryka, inte för att den ska användas.
5. H2 "Alternativ" (Pennstreck): ett kompakt Produktkort per post i `alternativ`, med `etikett = varfor`. Tom: utgår.
6. H2 "Specifikationer": `<table>` två kolumner (egenskap, värde) från kategorifilens `specs` och produktens `specs`. Alla specs, inte bara fyra. "ej angivet" för saknade.
7. H2 "Så testade vi" om brödtexten inte redan har en H2 med den texten (kontrollera `headings`); då renderas en kort standardtext "Metoden i sin helhet står på sidan Så testar vi." med länk. Källor från `kallor`.
8. Avslutande Kopknapp med pris, `modul="avslut"`.
9. Relaterat, Författarruta som i artikeln.

Strukturerad data: `produkt()` med `etikett`, och `brodsmulor` via layouten. Om produkten saknas i databasen renderas sidan ändå med "Produktdata saknas i bygget" i omdömesblocket, utan Product-markup.

### 4.5 `src/pages/jamforelser/[slug].astro`

`publicerade('jamforelser')`. `Astro.locals.sidtyp = 'jamforelse'`. `reklam={true}`. `bred={true}`. Brödsmulor: Hantverkstips / {kategorinamn} / {title}. Ordning: etikett "Jämförelse", H1, meta, `<Innehallsforteckning />`, `<Jamforelsetabell produkter kategori />` direkt efter metaraden (tabellen är svaret), `<Content>` med produktuppsättningen (4.0), H2 "Produkterna vi nämner" som i köpguiden, källor, relaterat, författarruta. Strukturerad data: `artikel()`.

### 4.6 `src/pages/rakna/index.astro`

Statisk. Brödsmulor: Hantverkstips / Räkna själv. `reklam={false}`. `bred={true}`, med H1, ingress och det avslutande stycket i `max-w-lasbredd` som pelarhubben gör, så att texten och rutnätet får samma vänsterkant.

**Galleri sedan 2026-09-17.** H1 "Räkna själv", ingress, sedan ett rutnät med ett `<Artikelkort>` per post i `KALKYLATORER`, i registrets ordning. Samma rutnät som `/guider/`: tre kolumner från 1024 px, två från 640, en under. Fem verktyg blir en rad om tre och en om två. Kortet får `etikett` "Räkna själv · {pelarens korta namn}" (pelaren är den första i registrets lista, uppslagen med `hittaPelare()`), `rubrik` = `namn` som länk till `/rakna/[slug]/`, `beskrivning` = `rad`, `rubrikniva={2}` och `visaPelare={false}`, eftersom pelaren redan står i etiketten och ett verktyg saknar datum. Ingen ny kortkomponent: `<Artikelkort>` tar precis de props galleriet behöver. Under rutnätet ett stycke om att varje verktyg redovisar källan per tal och att resultatet ligger kvar i adressen och går att dela.

### 4.7 Kalkylatorsidorna under `/rakna/`

Varje kalkylator är en egen sida med egen sökfras och resultatet i adressen. Mönstret nedan gäller alla; avvik bara med en anteckning om varför.

**Ett nytt verktyg byggs i sex steg.** Ordningen är avsiktlig: formeln och testet först, utseendet sist.

1. **Formeln.** `src/lib/kalkyl/[slug].ts`, ren modul utan importer från Astro. `STANDARD` med typiska värden, `GRANSER`, `tolkaQuery(q)` som fyller på med standard och tål decimalkomma, och `rakna[Slug](indata)` som ger `status: 'ok'` eller `'ogiltig'` med feltext per fält (avfuktaren har dessutom `'utanfor'`). Varje konstant ligger namngiven överst med en kommentar som säger källa eller ANTAGANDE. Räkningen sker aldrig i en `.astro`-fil.
2. **Testet.** `scripts/test-kalkyl-[slug].mjs`, körs med `node --experimental-strip-types --test scripts/test-kalkyl-[slug].mjs`. Minst sex fall som täcker varje utfall formeln kan ge, plus `tolkaQuery` och gränserna. Talen jämförs mot en källa utanför koden: underlagets räkneexempel eller en tabell i en publicerad artikel. Skripten ligger inte i `package.json`; de körs direkt med node, som `scripts/tabell-dimensionering.ts`.
3. **Formuläret.** `src/components/kalkyl/[Verktyg]Form.astro` med props `indata`, `varden` (talen som de skrevs i adressen), `fel`, `kompakt`, `idPrefix` och `knappText`, alla valfria. Klasserna kommer från `src/lib/kalkyl/stil.ts`, aldrig egna. Komponenten är det enda stället fälten står på.
4. **Sidan.** `src/pages/rakna/[slug].astro`, `prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control` på alla svar, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / {verktyget}. Sidan renderar formulärkomponenten, resultatet med det stora talet, en `<Faktaruta variant="kortsvar">` överst, H2 "Så räknar vi" med formeln i ord och tabellen där varje rad är märkt Källa eller Antagande med länk, och H2 "Läs vidare". Delbar länk i ett skrivskyddat fält, byggd av de tolkade värdena. Strukturerad data: bara brödsmulorna, som layouten skriver ut. Verktyget är inte en artikel.
5. **Registret.** En rad i `src/lib/kalkyl/register.ts` med `slug`, `namn`, `rad` (högst tolv ord), `sasong` och `pelare` (en lista, ett verktyg får höra hemma i flera ämnen) eller `kategori`. `/rakna/`, sidfoten, startsidan, `/amnen/` och hubbens grupp Räkna hämtar listan själva.
6. **Inbäddningen.** Slugen läggs till i `MED_FORMULAR` i `src/components/ui/Kalkylator.astro`, och artikeln som förklarar talet får `<Kalkylator namn="[slug]" />` där läsaren just fått veta vad talet betyder. En kalkylator utan den raden går fortfarande att länka till med `<Verktygskort>`.

**Bilderna, tillagda 2026-09-17, mönstret från 2026-09-19.** Tre filer per verktyg, alla namngivna efter slugen, alla ritade av designansvarig: skissen i `src/assets/illustrationer/rakna/[slug].svg` (600 × 360, alltså 5:3 som artikelkorten, under 40 kB), varumärkesbilden i `src/assets/illustrationer/rakna/varumarke/[slug].svg` (samma mått) och delningsbilden i `public/og/rakna-[slug].png` (1200 × 630). Alla elva verktygssidor följer mönstret från 2026-09-19, inte bara dränering: varumärkesbilden i sidhuvudet när den finns, skissen som `<Illustration>` i avsnittet "Så räknar vi" (på gipsplugg och bygglov-altan heter avsnittet "Så bedömer vi"). Sidorna läser bilderna genom `src/lib/verktygsbild.ts`, som ligger utanför `src/lib/kalkyl/` för att formelmodulerna ska gå att köra med node i testskripten:

- `verktygsVarumarkesbild(slug)` (tillagd 2026-09-19) slår upp varumärkesillustrationen i `src/assets/illustrationer/rakna/varumarke/[slug].svg` på samma sätt. Alla elva verktygssidor anropar den. Sidhuvudet och galleriet visar den när den finns och faller annars tillbaka på skissen; skissen står då i stället i avsnittet "Så räknar vi" som `<Illustration>`, och renderas där bara när båda bilderna finns. Se `docs/DESIGN.md` avsnitt 7, Illustrationer för verktygen.
- `verktygsillustration(slug)` slår upp skissen i en eager `import.meta.glob` och ger `undefined` när filen inte finns. En slug utan skiss är alltså inget byggfel: verktygssidan visar ingen bild, och galleriets kort visar det blanka bladet med pelarikonen, precis som ett artikelkort utan illustration.
- `verktygsDelningsbild(slug)` ger strängen `/og/rakna-[slug].png`, som skickas till `<Bas ogBild={...}>`. Ingen kontroll behövs: sökvägen pekar i `public/`, och layouten gör om den till en absolut adress med `new URL(..., Astro.site)`.

Huvudbilden står i sidhuvudet till höger om ingressen i ett 7/5-rutnät från 1024 px, som startsidans hero, och under ingressen på mobil. `alt` är tom, H1 bär betydelsen. Varumärkesbilden har transparent bakgrund och ligger som heron utan ram; faller sidhuvudet tillbaka på skissen är den ett urklipp och får artikelbildernas ram (`rounded-sm border border-linje`). Bilden är sidans LCP-bild och laddas därför med `fetchpriority="high"` utan `loading="lazy"`; en SVG på 17 till 26 kB är billigare än den kalkylator den illustrerar. På gallerikortet laddas samma fil lazy, som alla kortbilder.

**Strukturerad data, tillagd 2026-09-17.** Varje verktygssida lägger `<StrukturData slot="head" data={verktyg({ url, namn, beskrivning })} />` inuti `<Bas>`. `verktyg()` i `src/lib/strukturdata.ts` ger `WebApplication` med `applicationCategory: 'UtilityApplication'`, `operatingSystem: 'Web'`, `offers` på 0 SEK, `inLanguage: 'sv'`, `isAccessibleForFree: true` och `publisher` från `organisation()`. Sidan är ett verktyg, inte en artikel, och får därför varken `Article`, författare eller datum. Brödsmulorna skriver layouten ut som förut. `FAQPage` läggs till först på en sida som faktiskt har ett avsnitt med frågor och svar; ingen kalkylatorsida har det i dag, och markup för frågor som inte står på sidan är en felaktig signal.

Slug, verktygsnamn och beskrivning står som `SLUG`, `VERKTYGSNAMN` och `BESKRIVNING` överst i varje rutt, så att brödsmulan, `description`, `og:image` och `WebApplication` inte kan glida isär.

**Sitemapen.** Kontrollerad i bygget 2026-09-17: `@astrojs/sitemap` tar med både `/rakna/` och de fem serverrenderade verktygssidorna, så `customPages` behövs inte. `public/robots.txt` blockerar bara `/go/` och `/admin/`.

Produkter visas bara när räkningen faktiskt pekar ut en produktegenskap. Gör den inte det, som daggpunkten, har sidan varken produktkort eller reklamband (`reklam={false}`), utan länkar vidare till kalkylatorn eller artikeln som tar vid.

**Resultatspalten bär svaret, 2026-09-19.** Spalten på det linjerade papperet innehåller beskedet, det stora talet med sina rader och länkarna, alltså "Så räknar vi" och den delbara adressen. Regler med källa och "Gör inte det här" står inte i spalten utan som egna H2 direkt under verktyget, och spalten pekar dit med en rad. Skälet är att en läsare som just fått ett svar läser talet, inte en spalt med femton motiveringar bredvid formuläret. Dränering är först ut. Bygglov-altan, måla-ute och gipsplugg är byggda på samma sätt och ska följa efter. Christians beslut efter att ha läst spalten live.

#### 4.7.1 `src/pages/rakna/avfuktare.astro`

`export const prerender = false`. Motivering: formuläret skickas som GET till samma sida och beräkningen sker på servern, så sidan fungerar utan ett enda byte klient-JS och klarar prestandabudgeten på 0 kB. Alternativet, statisk sida med standardvärden, kan inte räkna på läsarens indata utan en React-ö. Kostnaden är en serverfunktion per anrop; den hålls nere med CDN-cache: `Astro.response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')` på alla svar. Vercel cachar per fullständig URL inklusive query, och indatan är validerad till ett begränsat antal värden, så nyckelrymden är hanterbar. Produktdata kommer från `produkterIKategori('luftavfuktare')` med modulcachen i 3.1.

`Astro.locals.sidtyp = 'verktyg'`. `reklam={true}` (produkter med knappar visas). Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Avfuktarkalkylator.

Flöde: `const { indata, harIndata } = tolkaQuery(Astro.url.searchParams); const resultat = raknaAvfuktare(indata);`.

Markup:

1. H1 "Hur stor avfuktare behöver du?", ingress två rader (platshållare).
2. Kortet (bakgrund `papper-2`, radie `md`): `<form method="get" action="/rakna/avfuktare/">`, fält enligt `docs/DESIGN.md` avsnitt 5.8: `yta` (number-liknande textfält, `inputmode="decimal"`, enhet "kvm" som text i fältet via wrapper), `takhojd` (samma, "m", med raden "Krypgrund räknas också, ner till 0,5 m." under), `fukt` som tre radioknappar med etiketterna "60 till 70 procent, lite unket", "70 till 80 procent, fuktfläckar och lukt", "över 80 procent, synligt mögel", och `temp` som tre radioknappar "Uppvärmt, över 15 grader", "Ouppvärmt, 5 till 15 grader", "Kallt, under 5 grader" under legenden "Temperatur i utrymmet". Alla fält har `<label>` ovanför, 15 px 600, fälthöjd 48 px, ram `blyerts-2` 1 px, radie `sm`, bakgrund `vit`. Värden förifyllda från `indata`. Knapp "Räkna ut" i `blyerts` med `papper`-text (inte `penna`; den leder inte till butik). Vid `ogiltig`: fältet får ram i `varning` och en rad text under i `varning` 14 px från `fel`, `aria-describedby` kopplar dem. Resultatet visas då från `STANDARD` med texten "Visar standardvärden tills indatan är rättad."
3. Resultat i samma kort, avdelat med 1 px `linje`: etiketten "Minst", `marktKapacitetLiter` i `text-siffra` med `<Markering>` bakom talet, enheten "liter per dygn märkt kapacitet" i ingress-storlek, och under i 14 px `blyerts-2` villkoret "uppgiven vid {kapacitetVillkor}, motsvarar cirka {literPerDygnVerklig} liter i din källare vid {temperaturC} grader" samt "{volym} m³, {fuktnivå}". Sedan rekommenderad typ i en mening och en mening om att talet ska läsas som intervallet `marktIntervall`. Länk "Så räknar vi" till `#sa-raknar-vi`. Vid `utanfor` (yta över 300 kvm eller temperatur under 5 grader): `<Faktaruta>` med texten och länk till `/fukt/avfuktare-krypgrund/` (finns inte än; länka till `/fukt/` tills den finns).
4. H2 "Produkter som klarar det": produkter vars `specs.typ` innehåller den rekommenderade typen och vars `specs.kapacitet_liter_dygn` når `marktKapacitetLiter`, sorterade på pris, max tre, som kompakta Produktkort med `modul="kalkylator"`. Är de färre än tre fylls listan på med maskiner inom `marktIntervall`, aldrig under intervallets nedre kant. Inga träffar eller databas saknas: `<Faktaruta>` "Vi har inte testat någon avfuktare i den storleken. Se alla vi testat." med länk till `/luftavfuktare/`. Länk "Alla avfuktare vi testat" under.
5. H2 "Så räknar vi" med `id="sa-raknar-vi"`: formeln i ord som en numrerad lista, H3 "Vad siffrorna vilar på" med tabellen över antaganden där varje rad säger källa eller antagande och länkar till källan, meningen "Vi verifierar formeln med egna mätningar under hösten." och länk till `/om/sa-testar-vi/`.
6. H2 "Läs vidare": länkar till `/luftavfuktare/`, `/fukt/avfuktare-kallare/`, `/fukt/sorptionsavfuktare/`.

Desktop: kortet 44 rem brett, formulär till vänster och resultat till höger i två lika spalter, produkterna i rad om tre under. Strukturerad data: ingen utöver brödsmulor (kalkylatorn är ett verktyg, inte en artikel). `<title>` "Avfuktarkalkylator: hur stor avfuktare behöver du?", 50 tecken och därför utan suffix.

Formuläret flyttades 2026-09-17 till `src/components/kalkyl/AvfuktareForm.astro` utan att något ändrades i utseende, fältnamn eller id. Sidan renderar `<AvfuktareForm indata={indata} varden={{ yta, takhojd }} fel={fel} />`, och `<Kalkylator namn="avfuktare" />` renderar samma komponent i kompakt form.

#### 4.7.2 `src/pages/rakna/daggpunkt.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som avfuktarsidan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: ingen produkt i databasen följer av räkningen, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Daggpunktskalkylator. `bred={true}`.

Formeln ligger i `src/lib/kalkyl/daggpunkt.ts`:

```ts
export interface DaggpunktIndata { luftTempC: number; rfProcent: number; ytTempC: number; arstid: 'vinter' | 'sommar'; rum: 'bostad' | 'kallare' | 'garage' }
export const STANDARD = { luftTempC: 20, rfProcent: 50, ytTempC: 12, arstid: 'vinter', rum: 'bostad' };
export const GRANSER = { luftTempC: [0, 40], rfProcent: [5, 100], ytTempC: [-20, 40] };
export function daggpunkt(tempC: number, rfProcent: number): number;       // Magnus, grader
export function mattnadsangtryck(tempC: number): number;                   // hPa
export function temperaturForAngtryck(hPa: number): number;                // Magnus baklänges
export function mattnadsanghalt(tempC: number): number;                    // g/m³
export function raknaDaggpunkt(i: DaggpunktIndata): DaggpunktResultat;     // ok | ogiltig
export function tolkaQuery(q: URLSearchParams): { indata: DaggpunktIndata; harIndata: boolean };
```

Query: `temp`, `rf`, `ytatemp`, `arstid`, `rum`. Resultatet bär daggpunkten, ånghalten i g/m³, luftfuktigheten vid den kalla ytan, marginalen i grader, bedömningen (`kondens`, `mogelrisk`, `ingen_risk`), de två vägarna under gränsen (`rfForGransenProcent` och `ytTempForGransenC`), åtgärderna i ordning, `visaAvfuktare` och `gorInteDetHar`.

Bedömningen: ytan under daggpunkten ger kondens, luft över 75 procent RF vid ytan ger mögelrisk (Boverket, BBR 6:52), annars ingen risk. Rådet beror på årstid och rum. Vinter ger vädra och sänk fuktproduktionen, sommar i källare eller garage ger avfuktare och `visaAvfuktare`, som lägger in `<Verktygskort kalkylator="avfuktare" />` på sidan. En kall yta ger isolera eller värm ytan i alla lägen. `gorInteDetHar` är åtgärden som är fel i just det läget: avfuktare i ett sovrum i januari, vädring i en källare i augusti, kondensmaskin i ett kallt utrymme på vintern.

Markup: H1 "Blir väggen våt? Räkna ut daggpunkten", ingress på tre meningar, `<Faktaruta variant="kortsvar">` med svaret, sedan formuläret och resultatet i två spalter på det linjerade papperet som avfuktarsidan. Det stora talet är daggpunkten i `text-siffra` med `<Markering>`. Under resultatet åtgärderna som en lista och "Gör inte det här" när det gäller. Sedan H2 "Vad daggpunkten är, och när kondens på vägg blir mögel" med tre typfall som H3 (sovrummet i januari, källaren i augusti, garaget), H2 "Så räknar vi" med sex steg och antagandetabellen, och H2 "Läs vidare" till `/fukt/luftfuktighet-inomhus/`, `/fukt/fukt-i-kallaren/` och `/fukt/sorptionsavfuktare/`.

`<title>` "Daggpunktskalkylator, räkna ut när väggen blir våt", 50 tecken; med suffixet blir den 66 och layouten utelämnar det därför, precis som på avfuktarsidan. Formuläret är inbäddat i `/fukt/luftfuktighet-inomhus/` direkt efter daggpunktstabellerna.

#### 4.7.3 `src/pages/rakna/elkostnad.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de två sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: räkningen pekar inte ut någon produkt, den räknar på maskinen läsaren redan har, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Elkostnadskalkylator. `bred={true}`.

Formeln ligger i `src/lib/kalkyl/elkostnad.ts`:

```ts
export interface ElkostnadIndata { effektW: number; timmarPerDygn: number; dagar: number; elprisKrPerKwh: number; literPerDygn: number | null }
export const STANDARD = { effektW: 320, timmarPerDygn: 8, dagar: 30, elprisKrPerKwh: ELPRIS_KR_PER_KWH, literPerDygn: null };
export const GRANSER = { effektW: [1, 10000], timmarPerDygn: [0.1, 24], dagar: [1, 3650], elprisKrPerKwh: [0.1, 20], literPerDygn: [0.1, 200] };
export function raknaElkostnad(i: ElkostnadIndata): ElkostnadResultat;   // ok | ogiltig
export function tolkaQuery(q: URLSearchParams, forval?): { indata: ElkostnadIndata; harIndata: boolean };
export function produktSlugFranQuery(q: URLSearchParams): string | null;
export function produktForval(specs): { effektW: number | null };
export function standardMedForval(forval): ElkostnadIndata;
```

Elpriset kommer från `ELPRIS_KR_PER_KWH` i `src/lib/antaganden.ts`, alltså samma tal som eltabellerna i `/fukt/avfuktare-kallare/` och `/tester/woods-sw39fw/`. Importen står med `.ts`-ändelse, så att testskriptet kan köras med node utan bygge.

Query: `effekt`, `timmar`, `dagar`, `elpris`, `liter` och `produkt`. Resultatet bär kWh per dygn, kWh och kronor per period, kronor per dygn, kWh och kronor per år vid samma gångtid, kWh och kronor per liter när liter angetts, samt `gorInteDetHar` (en maskin som går dygnet runt utan hygrostat).

**Produkt-parametern.** `?produkt=[slug]` fyller effektfältet ur produktens `specs`, alltså `effekt_w`, och ingenting annat. Uppslaget sker i rutten och inte i formeln, eftersom `src/lib/kalkyl/` är rena moduler utan databas; `produktForval()` tar emot `specs` som ett vanligt objekt och går därför att testa utan Supabase. Över formuläret står en rad med produktens namn ("Räknar på Wood's SW39FW I-EcoDefrost+, 320 W enligt butiken"), och slugen följer med i ett dolt fält så att den står kvar när läsaren ändrar talen. Läsarens egna tal slår alltid produktens. Saknas produkten i databasen, eller saknar den effekt, visas standardvärdena med raden som säger det. Slugen valideras mot `^[a-z0-9-]{1,80}$` innan uppslaget.

Literfältet förifylls aldrig, inte ens när produkten har `kapacitet_liter_dygn` (koordinatorns beslut 2026-09-17). Kapaciteten i databasen är märkt kapacitet, uppmätt vid 30 grader och 80 procent luftfuktighet, och hela sajten säger att talet på förpackningen inte är vad maskinen ger i en källare; förifyllt skulle det ge ett literpris som ser tre gånger bättre ut än verkligheten. Under fältet står i stället raden "Märkt kapacitet gäller vid 30 grader och 80 procent luftfuktighet. I en källare på 15 grader ger en kondensavfuktare ungefär en tredjedel, se köpguiden" med länk till `/fukt/avfuktare-kallare/`.

Perioden är två radioknappar (30 och 365 dagar) plus "Eget antal" med ett fält bredvid. Radioknappen skickar då `dagar=eget` och kalkylatorn läser `dagareget`; den delbara länken skriver alltid ut talet (`dagar=90`), så en delad adress fungerar utan att man vet hur formuläret är byggt.

Markup: H1 "Vad kostar maskinen i el? Räkna ut kWh och kronor", ingress på fyra meningar, `<Faktaruta variant="kortsvar">` med svaret, sedan formuläret och resultatet i två spalter på det linjerade papperet. De stora talen är två: kWh per period med `<Markering>` och kronor per period. Under dem kronor per dygn, kronor per år och kronor per liter som rader med linje emellan, sedan "Gör inte det här" när gångtiden är dygnet runt. Sedan H2 "Räkna elförbrukning från watt till kWh själv" (346 ord) med tre typfall som H3 (avfuktaren i källaren, värmefläkten i garaget, byggfläkten dygnet runt), H2 "Så räknar vi" med sex steg och antagandetabellen, och H2 "Läs vidare" till `/fukt/avfuktare-kallare/` och `/fukt/sorptionsavfuktare/`.

`<title>` "Elkostnadskalkylator, vad kostar maskinen att köra", 50 tecken; med suffixet blir den 66 och layouten utelämnar det därför, precis som på de två andra kalkylatorsidorna. Formuläret är inbäddat i `/fukt/avfuktare-kallare/` direkt efter stycket som förklarar eltabellen, och i `/tester/woods-sw39fw/` i avsnittet om elkostnad.

`Produktkort.astro` fick samtidigt en diskret textlänk "Räkna elkostnaden" till `/rakna/elkostnad/?produkt=[slug]`, under nyckelvärdena och bara för produkter vars specs har `effekt_w`.

#### 4.7.4 `src/pages/rakna/innervagg.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de tre sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={true}` med `butikNamn={butik?.namn}` som avfuktarsidan: räkningen pekar ut två produktegenskaper, antalet skruv och skruvlängden, och sidan visar därför två produktkort. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Regelkalkylator. `bred={true}`.

Formeln ligger i `src/lib/kalkyl/innervagg.ts`:

```ts
export interface InnervaggIndata { langdM: number; hojdM: number; regel: '45x70' | '45x95'; lag: 1 | 2; ccMm: 400 | 450 | 600; dorrar: number; ull: boolean }
export const STANDARD = { langdM: 4, hojdM: 2.5, regel: '45x70', lag: 1, ccMm: 400, dorrar: 0, ull: true };
export const GRANSER = { langdM: [0.5, 30], hojdM: [2, 4], dorrar: [0, 10] };
export function ccStandardForLag(lag): 400 | 600;              // Svenskt Trä
export function skruvPerKvm(ccMm): number;                     // c 200 i kant, c 300 i fält
export function skruvPerKvmInnerlager(ccMm): number;           // c 750
export function bastaHandelslangd(kapLangdM): { handelslangdM; reglarPerLangd; spillProcent };
export function raknaInnervagg(i): InnervaggResultat;          // ok | ogiltig
export function tolkaQuery(q): { indata: InnervaggIndata; harIndata: boolean };
```

Query: `langd`, `hojd`, `regel`, `lag`, `cc`, `dorrar`, `ull`. Saknas `cc` i adressen sätts regelavståndet av `ccStandardForLag()`, alltså c 400 mm för ett lag gips och c 600 mm för två, vilket är det Svenskt Trä anger för skivor som är 1 200 mm breda. Den delbara länken skriver alltid ut c-måttet, så en delad adress är entydig.

Resultatet bär antalet lodräta reglar (väggens egna och dörrarnas extra var för sig), kaplängden, löpmeter virke med och utan spill, syll och hammarband, avväxling, handelslängden som spiller minst med antal längder och spillprocent, antal gipsskivor med och utan spill, skivytan, antal skruv, skruven avrundad uppåt till hela hundratal, antal 1 000-pack, hur många löpmeter ett pack räcker till, skruvlängden som text, kvadratmeter mineralull, ullens bredd och `gorInteDetHar` som en lista.

**Konstanterna med källa.** Skivformat 1 200 × 2 500 mm (Norgips och Gyproc), skruvavstånd c 200 i kant och c 300 i fält samt c 750 på innersta laget (Norgips), kapmån 15 mm (Gyproc), ullbredd 455 och 610 mm (Norgips), skruvlängd 41 mm vid ett lag och 45 eller 51 vid två (vår gipsskruvguide). ANTAGANDE: spill 10 procent på skivor och 5 procent på virke, handelslängder 2,4 till 4,8 m, dörröppning 0,9 m bred med två extra reglar och en avväxling.

**Råden.** `gorInteDetHar` är en lista och kan innehålla tre rader: c 600 mm under ett enda lag gips (Svenskt Trä anger c 400), skivskarv i linje med dörröppningens kant (Svenskt Trä förbjuder det) och vägg över 3 m på 45 × 70 (Gyproc anger bara 45 × 95 upp till 4 m).

**Avvikelsen mot guidens materiallista.** `/inomhus/bygga-innervagg/` räknar per löpmeter och landar på 6,2 löpmeter virke per meter vägg, alltså cirka 25 m på en vägg som är 4 m lång. Talet är en täthet och rymmer inte regeln i den sista väggänden, som guidens egen text ändå ber om. Kalkylatorn räknar reglarna en och en, får åtta reglar i stället för knappt sju och landar på 27,9 löpmeter. Skivor, skruv och ull stämmer exakt mot guidens rader (7 skivor, 139 skruv, 10 kvm). Skillnaden står utskriven under antagandetabellen, och testskriptet asserterar den så att den inte kan glida i väg. Chefredaktören avgör om guidens inköpslista ska skrivas om.

Markup: H1 "Räkna ut reglar, gipsskivor och skruv till innerväggen", ingress på tre meningar, `<Faktaruta variant="kortsvar">` med svaret, sedan formuläret och resultatet i två spalter på det linjerade papperet. De stora talen är två: antalet reglar med `<Markering>` och antalet gipsskivor. Under dem raderna med virke, handelslängd, skivor, skruv, pack, skruvlängd och ull, sedan "Gör inte det här" när något av råden gäller. Sedan H2 "Skruven och maskinen som räkningen pekar på" med `essve-fzb-39x41` och `makita-dfr550zx1` som kompakta Produktkort med `modul="kalkylator"`, där skruvkortets `forVem` säger hur många pack just den här räkningen behöver och maskinens säger "Från ungefär 300 skruv lönar sig en automat." Sedan H2 "Materialåtgång innervägg, så räknar regelkalkylatorn" (418 ord), H2 "Så räknar vi" med sju steg och antagandetabellen på elva rader, och H2 "Läs vidare" till `/inomhus/bygga-innervagg/` och `/inomhus/gipsskruv/`.

`<title>` "Regelkalkylator, räkna reglar, gips och skruv till väggen", 57 tecken; med suffixet blir den 73 och layouten utelämnar det därför, precis som på de tre andra kalkylatorsidorna. Formuläret är inbäddat i `/inomhus/bygga-innervagg/` direkt efter punktlistan med antagandena i materialavsnittet, och i `/inomhus/gipsskruv/` direkt under skruvavståndstabellen.

#### 4.7.5 `src/pages/rakna/bygglov-altan.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de fyra sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: verktyget pekar inte ut någon produkt, det ger ett besked, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Bygglov för altan. `bred={true}`.

Det här är det första beslutsverktyget. Det räknar inget material utan svarar ja, nej eller kanske, och varje regel som slår in bär sitt lagrum. Reglerna ligger i `src/lib/kalkyl/bygglov-altan.ts`:

```ts
export interface BygglovAltanIndata { detaljplan: 'ja' | 'nej' | 'vet-inte'; hojdM: number; avstandByggnadM: number; avstandGransM: number; tak: 'nej' | 'skarmtak' | 'vaggar'; paTak: boolean; ytaKvm: number; vardefullt: 'ja' | 'nej' | 'vet-inte' }
export const STANDARD = { detaljplan: 'ja', hojdM: 0.8, avstandByggnadM: 0, avstandGransM: 4.5, tak: 'nej', paTak: false, ytaKvm: 20, vardefullt: 'nej' };
export const GRANSER = { hojdM: [0, 10], avstandByggnadM: [0, 100], avstandGransM: [0, 200], ytaKvm: [1, 500] };
export function sanktionsavgift(ytaKvm): { grundKr; tillaggKr; summaKr };   // PBF 9 kap. 12 §
export function bedomFall(planlagt, i): Bedomning;                         // ett av de två fallen
export function raknaBygglovAltan(i): BygglovAltanResultat;                // ok | ogiltig
export function tolkaQuery(q): { indata: BygglovAltanIndata; harIndata: boolean };
```

Query: `plan`, `hojd`, `avstand`, `grans`, `tak`, `patak`, `yta`, `vardefullt`. Resultatet bär svaret (`ja`, `nej`, `kanske`), rubriken över det, en eller två `bedomningar` med varsin lista `regler`, flaggan `olikaFall`, `kravGrannmedgivande`, byggsanktionsavgiften med grundbelopp, tillägg, halva och en fjärdedel, samt `gorInteDetHar`.

**Reglerna med lagrum.** Varje regel är en egen funktion i modulen med lagrummet i kommentaren över sig, och samma lagrum följer med ut i resultatet så att läsaren ser det på raden. Inom detaljplan krävs lov över 1,8 m höjd inom 3,6 m från en byggnad, och över 1,2 m längre bort (PBL 9 kap. 19 §). Utanför detaljplan finns ingen måttregel alls (Boverket); kvar står anpassning och olägenhet. Väggar, inglasning eller skärmtak gör altanen till en tillbyggnad, lovfri upp till 30 kvm på ett en- eller tvåbostadshus (9 kap. 10 §). Altan ovanpå en byggnad ger "räkna med bygglov" inom detaljplan och ett kanske utanför (9 kap. 19 § och MÖD mål P 5608-13). Utpekat värdefullt hus eller område kräver lov även för det som annars är fritt (9 kap. 37 och 38 §§). Närmare gränsen än 4,5 m ger utfallet `granne`, alltså raden om skriftligt medgivande, och det lyfter aldrig svaret till ett bygglovskrav (9 kap. 34 och 35 §§ plus Boverkets vägledning; lagtexten räknar inte upp altaner).

**"Vet inte" på detaljplan** kör `bedomFall()` två gånger och visar båda listorna under varsin rubrik. Ger de två fallen olika svar blir det sammanvägda svaret `kanske`. Samma hållning gäller värdefullt hus: ett "vet inte" lyfter svaret till `kanske` i stället för att gissa.

**Byggsanktionsavgiften** står alltid, oavsett vad svaret blev, eftersom den är hela poängen med att fråga först: 0,25 prisbasbelopp plus 0,005 per kvm av prisbasbeloppet 59 200 kr för 2026 (PBF 9 kap. 12 § 3). Sidan visar också nedsättningen till hälften och en fjärdedel, och att avgiften faller bort vid rättelse innan sammanträdet (PBL 11 kap. 51 till 58 §§). Kalkylen på 20 kvm ger 20 720 kr, alltså samma tal som avgiftstabellen i `/altan/bygglov-altan/`, och testskriptet asserterar alla tre raderna i den tabellen.

**ANTAGANDE.** Verktyget räknar på ett en- eller tvåbostadshus; gränsen på 30 kvm gäller inte flerbostadshus. Ett glest räcke räknas inte in i höjden, ett tätt plank gör det. Båda står i regeltabellen.

Markup: H1 "Behöver din altan bygglov? Fyll i måtten och få svar", ingress på fem meningar, `<Faktaruta variant="kortsvar">` med svaret, sedan formuläret och bedömningen i två spalter på det linjerade papperet. Det stora "talet" är svarsordet i `text-siffra` med `<Markering>` och resten av rubriken på samma baslinje, precis där enheten står på de andra kalkylatorerna. Under det reglerna som en lista där varje rad har en etikett (Bygglov, Inget lov, Osäkert, Grannens ja), texten och lagrummet, sedan avgiften i kronor, "Gör inte det här", rådet att kommunen har sista ordet och raden om att reglerna gäller sedan 1 december 2025. Sedan H2 "Bygglov altan, de tre måtten och vad som ändrades 1 december 2025" (399 ord) med länk till artikeln, H2 "Så bedömer vi" med åtta steg och regeltabellen på tretton rader, och H2 "Läs vidare" till `/altan/bygglov-altan/` och `/guider/altan/`.

`<title>` "Behöver altanen bygglov? Svar med lagrum", 40 tecken, och med suffixet 56, så layouten behåller det till skillnad från de fyra andra kalkylatorsidorna. Sidan säger på tre ställen att verktyget är vägledning och inte ett myndighetsbeslut: i ingressen, i brödtexten under regeltabellen och i beskrivningen av vad det inte kan se. Formuläret är inbäddat i `/altan/bygglov-altan/` direkt efter beslutstabellen.

#### 4.7.6 `src/pages/rakna/altan.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de fem sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: trallskruven finns inte i produktdatabasen än, så sidan har varken produktkort eller reklamband. Kortet läggs till när skruvkategorin fylls i februari. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Trallkalkylator. `bred={true}`.

Det här är det första verktyget som byggdes innan ämnets guide fanns. Altanklustret skrivs i februari, så utvecklaren hämtade källorna själv och lade dem i `docs/briefer/underlag-kalkyl-altan-2026-09-17.md`, med en tabell över vilka sidor som gick att läsa maskinellt och ett avsnitt 7 över vad chefredaktören ska verifiera i webbläsare. Svenskt Träs egna tabeller på byggbeskrivningar.se ligger som bilder; TräGuiden publicerar samma tal som text, och det är den sidan modulen hänvisar till.

Formeln ligger i `src/lib/kalkyl/altan.ts`:

```ts
export interface AltanIndata { langdM: number; breddM: number; trallbreddMm: 95 | 120 | 145; riktning: 'langsida' | 'kortsida'; ccMm: 450 | 600; regel: '45x145' | '45x170' | '45x195'; grund: 'plintar' | 'befintlig' }
export const STANDARD = { langdM: 4, breddM: 3, trallbreddMm: 120, riktning: 'langsida', ccMm: 600, regel: '45x145', grund: 'plintar' };
export const GRANSER = { langdM: [1, 20], breddM: [1, 20] };
export function bastaHandelslangd(bradLangdM): { handelslangdM; bradorPerLangd; spillProcent };
export function bastaForpackning(antalSkruv): { storlek; antal; totalt };
export function raknaAltan(i): AltanResultat;                 // ok | ogiltig
export function tolkaQuery(q): { indata: AltanIndata; harIndata: boolean };
```

Query: `langd`, `bredd`, `trallbredd`, `riktning`, `cc`, `regel`, `grund`. Resultatet bär ytan, brädlängden och det mått brädorna täcker, antalet brädor, springan, löpmeter trall med och utan spill, handelslängden som spiller minst med antal längder och spillprocent, antalet reglar med längd och löpmeter, antalet bärlinor med löpmeter, reglarnas spännvidd och den spännvidd dimensionen klarar, antalet plintar och plintar per rad, korsningarna, trallskruven med förpackningsstorlek och antal förpackningar, skruvens och infästningens text samt `gorInteDetHar` som en lista.

**Geometrin.** Långsidan och kortsidan sorteras ur läsarens två mått, så att 4 × 3 och 3 × 4 ger samma svar. Trallens riktning avgör vilken av dem som blir brädlängd; reglarna går alltid tvärs trallen och är därför lika långa som måttet tvärs brädorna. Bärlinorna går parallellt med trallen, och varje bärlina vilar på en rad plintar.

**Konstanterna med källa.** Trall 28 mm på c 600 mm som mest, springa 5, 6 och 7 mm för brädor på 95, 120 och 145 mm, två skruv per korsning för brädor från 95 mm och trallskruv 4,2 × 55 mm (samtliga TräGuiden, Läggning av trall). Bärlina 45 × 170 mm med som mest 2,5 m mellan plintarna och fall 1:100 (TräGuiden och byggbeskrivningen Altan). Spännvidd 2,3 m för 45 × 145 mm vid c 600 mm (branschens dimensioneringstabell för villaaltan utan tak). ANTAGANDE: spännvidd 2,7 och 3,1 m för 45 × 170 och 45 × 195 mm, c 450 mm under 28 mm trall, handelslängder 3,6 till 4,8 m, spill 10 procent och förpackningar om 250 eller 500.

**Regeldimensionen styr plintarna.** Reglarnas fria spännvidd mellan två bärlinor sätts av regelns höjd. Räcker dimensionen inte till altanens djup lägger kalkylatorn in en bärlinrad till, tills spännvidden ligger under taket, och varje rad är en rad plintar. Standardaltanen på 4 × 3 m med 45 × 145 mm får därför tre bärlinrader och nio plintar, medan samma altan på 45 × 195 mm klarar sig med två rader och sex plintar. Rådet om spännvidd säger vilken dimension som hade tagit bort en rad.

**Råden.** `gorInteDetHar` kan innehålla fyra rader: spännvidden som dimensionen inte klarar, springan under fem millimeter (gäller den breda brädan på 145 mm), trallbrädor som skarvas i luften i stället för över en regel (gäller när altanen är längre än 4,8 m i trallens riktning) och trall utan fall (gäller från 2 m djup).

Markup: H1 "Räkna ut trall, reglar och plintar till altanen", ingress på tre meningar, `<Faktaruta variant="kortsvar">` med svaret, sedan formuläret och resultatet i två spalter på det linjerade papperet. De stora talen är två: löpmeter trall med `<Markering>` och antalet handelslängder med längden som enhet. Under dem raderna med spill, reglar, bärlinor, spännvidd, plintar och skruv, infästningen som en finstilt rad, sedan "Gör inte det här". Sedan H2 "Hur mycket trall behöver jag, och hur många plintar altanen behöver" (447 ord), H2 "Så räknar vi" med åtta steg och antagandetabellen på fjorton rader, H2 "Läs vidare" till `/altan/bygglov-altan/` och `/rakna/bygglov-altan/`, och tre frågor i `<Faq>`.

`<title>` "Trallkalkylator, räkna trall, reglar och plintar", 48 tecken; med suffixet blir den 64 och layouten utelämnar det därför, som på fyra av de fem andra kalkylatorsidorna. Sökfraserna "räkna trall", "trallkalkylator", "hur mycket trall behöver jag" och "plintar" ligger i ingressen och i den första H2:n. Formuläret finns i `MED_FORMULAR`, men ingen artikel bäddar in det än: altanguiden är avpublicerad tills klustret skrivs.

Testskriptet `scripts/test-kalkyl-altan.mjs` kör nio fall: standardaltanen, riktningen bytt, 145 mm trall, c 450 mm, 45 × 195 mm på lång spännvidd, 45 × 145 mm som inte räcker till 4 m djup, en liten altan på 2 × 2 m, en stor på 8 × 5 m och standardaltanen på befintlig grund. Utöver dem testas konstanterna mot underlaget, handelslängden, förpackningsvalet, gränserna och `tolkaQuery`.

#### 4.7.7 `src/pages/rakna/gipsplugg.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de sex sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: inga pluggar finns i produktdatabasen, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Vad håller i gipsväggen. `bred={true}`.

Det andra beslutsverktyget, och det första som svarar med en tabell i stället för med ett tal. Läsaren fyller i vad saken väger, vad det är (tavla eller spegel, hylla, tv på fast fäste, tv på svängarm, skåp med lucka, handdukshängare eller krok, i tak), skivtjocklek och antal lag (12,5 mm i ett eller två lag, eller 9,5 mm), antal infästningspunkter och om det sitter en regel bakom. Svaret är ett av fyra: klisterkrok eller X-krok räcker, plugg räcker, sätt den i regeln, kortling behövs.

Reglerna och tillverkarvärdena ligger i `src/lib/kalkyl/gipsplugg.ts`:

```ts
export interface GipspluggIndata { viktKg: number; sak: Sak; skiva: Skiva; punkter: number; regel: RegelBakom }
export const STANDARD = { viktKg: 8, sak: 'hylla', skiva: 'ett-lag', punkter: 2, regel: 'vet-inte' };
export const GRANSER = { viktKg: [0.1, 200], punkter: [1, 12] };
export const INFASTNINGAR: Infastning[];                    // elva rader, enklast först
export function barandePunkter(sak, punkter): number;       // övre raden vid hylla, skåp, svängarm
export function lastPerPunkt(i): number;                    // kg per punkt, en decimal
export function infastningarFor(i, last): InfastningRad[];  // raderna som gäller, med klarar-flagga
export function raknaGipsplugg(i): GipspluggResultat;       // ok | ogiltig
export function tolkaQuery(q): { indata: GipspluggIndata; harIndata: boolean };
```

Query: `vikt`, `sak`, `skiva`, `punkter`, `regel`. Resultatet bär beskedet, rubriken, ordet och resten till det stora formatet, förklaringen i ord, lasten per punkt, antalet bärande punkter, tabellen över infästningar, flaggan `ingenKlarar`, raden `utelamnade` som säger vad som är borta ur tabellen och varför, `kraverRegel` med sitt skäl, och `gorInteDetHar`.

**Lasten per punkt.** Vikten delas på de punkter som faktiskt bär. En hylla och ett skåp får hela lasten på den övre raden, som räknas som halva antalet punkter avrundat nedåt och aldrig färre än en; en hylla vrider sig ut från väggen och ett skåp belastas av luckan som öppnas. Ett tv-fäste med svängarm multipliceras dessutom med 1,5 innan lasten delas. Faktorn är vår, inte en tillverkares, och den styr inte beskedet: svängarmen går alltid till regel eller kortling. Den visar hur stor lasten blir i den skruv som dras rakt ut ur väggen.

**Tabellen.** Elva infästningar, sorterade från enklast till starkast, var och en med tillverkarens rekommenderade last per skivtyp och sin källa. Tre urval är våra: krokar och klisterremsor gäller bara en tavla eller en spegel, i tak räknar vi bara infästningar som viker ut sig bakom skivan, och klisterremsans tal prövas mot hela vikten eftersom 3M anger den per tavla och inte per remsa. En rad utan värde för den valda skivan faller bort helt, en rad som inte når upp står kvar gråmarkerad, och raden under tabellen säger vad som är borttaget. Källorna står i tabellfoten, en gång var.

**Konstanterna med källa.** Självborrande gipsplugg 8 kg i ett lag och 7 i 9,5 mm, DuoBlade 10 och 20 kg (fischer). Kilformat clips 10 och 15, hålrumsplugg ø 6 mm 18 och 28, gipsankare 25 och 40, molly ø 10 mm 38 och 70, vipplugg 25 kg i tak (Gör Det Själv). X-krok 5 kg (BGA), klisterremsa 7 kg och klokrok 7 kg (3M), gipskrok i stål 20 kg (Habo). Skruv med plugg direkt i skivan 5 till 6 kg, avstånd 50 mm och 300 mm vid maxlast, och högst cirka 20 kg per fästpunkt i tak (Norgips). ANTAGANDE: gränsen på 20 kg, svängarmens faktor 1,5, övre raden som bärande, de tre urvalen ovan, och att svängarm och skåp alltid går till regel eller kortling.

**20 kg-gränsen** är klustrets gemensamma, fastställd i `docs/INNEHALLSARKITEKTUR.md` avsnitt 2, och den gäller alltid: över 20 kg blir svaret regel när läsaren har en regel bakom, kortling när hen inte har det, och regel med en rad om att leta först när hen inte vet. Svängarm och skåp med lucka går samma väg oavsett vikt.

**Råden.** `gorInteDetHar` kan innehålla fem rader: plugg i skivan för ett tv-fäste med svängarm, X-krok eller stift i tak, två infästningar närmare varandra än 50 mm, hela lasten i en enda punkt, och skåpets tomvikt i stället för den fyllda.

Markup: H1 "Vad håller i gipsväggen? Välj plugg efter vikten", ingress på fyra meningar med fraserna "plugg gipsvägg", "gipsplugg", "hänga tungt i gipsvägg" och "tv-fäste på gipsvägg", `<Faktaruta variant="kortsvar">` med svaret på fem korta meningar, sedan formuläret och resultatet i två spalter på det linjerade papperet. Det stora "talet" är beskedets ord i `text-siffra` med `<Markering>`, med resten av beskedet på samma baslinje; under det lasten per punkt i `text-h1`, förklaringen, infästningstabellen med källrad, "Gör inte det här" och den delbara länken. Sedan H2 "Plugg i gipsvägg, vad gipspluggen bär och var gränsen går" (483 ord) med H3 "Hänga tungt i gipsvägg utan att öppna väggen" och H3 "Tv-fäste på gipsvägg, armen ändrar räkningen", H2 "Så bedömer vi" med åtta steg och antagandetabellen på tjugoen rader, H2 "Läs vidare" till `/inomhus/skruva-i-gipsvagg/`, `/inomhus/hanga-tavla-gipsvagg/` och `/inomhus/gipsskruv/`, och tre frågor i `<Faq>`.

Sista raden i antagandetabellen säger att vår egen belastningsundersökning kommer: åtta pluggtyper dragna till brott med hängvåg i en vägg med 13 mm skiva, och att de talen då ersätter tillverkarnas. Samma löfte står i brödtexten under tabellen, och ingen egen siffra står i verktyget innan dess.

`<title>` "Pluggväljare för gipsvägg, vad håller din vikt", 46 tecken; med suffixet blir den 62 och layouten utelämnar det därför, som på fem av de sex andra kalkylatorsidorna. Formuläret är inbäddat i `/inomhus/skruva-i-gipsvagg/` efter viktabellen och dess förklaring, och i `/inomhus/hanga-tavla-gipsvagg/` efter krokstabellen och faktarutan om avståndet mellan två krokar.

Testskriptet `scripts/test-kalkyl-gipsplugg.mjs` kör tolv fall, ett per gren: tavlan som klarar sig på en krok, standardhyllan, samma hylla med regel bakom, hyllan över 20 kg med och utan regel, tv på fast fäste, tv på svängarm, badrumsskåpet, handdukshängaren, lampan i tak, hyllan i den tunna skivan där ingen infästning räcker, och spegeln som är för tung för en X-krok. Utöver dem testas tillverkarvärdena mot artiklarnas tabeller, 20 kg-gränsen, hävarmen, takets gräns, urvalen, råden, gränserna och `tolkaQuery`.

#### 4.7.8 `src/pages/rakna/gipsskruv.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de sju sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={true}` med `butikNamn={butik?.namn}` som innerväggsräknaren: svaret är en skruv, alltså en produktegenskap. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Vilken gipsskruv. `bred={true}`.

Rutten `/rakna/gipsskruv/` krockar inte med artikeln `/inomhus/gipsskruv/`. Samma slug i två samlingar är tillåtet så länge undermappen skiljer dem åt, och kontrollen i `scripts/kontrollera-innehall.ts` kollar dubbletter inom en samling, inte över hela sajten.

Regler och längder ligger i `src/lib/kalkyl/gipsskruv.ts`:

```ts
export interface GipsskruvIndata { skiva: '9' | '12.5' | '15'; lag: 1 | 2; regel: 'tra' | 'stal-tunn' | 'stal-tjock'; fogtatning: boolean; miljo: 'torrt' | 'vatrum' | 'ute' }
export const STANDARD = { skiva: '12.5', lag: 1, regel: 'tra', fogtatning: false, miljo: 'torrt' };
export const HANDELSLANGDER_MM = [25, 30, 35, 38, 41, 45, 51, 55, 60, 65, 70, 75];
export const LANGDER: Record<'tra' | 'stal', Record<string, Langdrad>>;   // artikelns längdtabell
export function minstaLangd(i): number;                 // Norgips tumregel, fogtätningen inräknad
export function narmastOver(langdMm): number;           // första handelslängd som räcker
export function gangaFor(regel): 'grov' | 'fin';
export function spetsFor(regel): 's-eller-nal' | 'nal' | 'borr';
export function ytbehandlingFor(miljo, regel): Ytbehandling;
export function raknaGipsskruv(i): GipsskruvResultat;   // ok | ogiltig
export function tolkaQuery(q): { indata: GipsskruvIndata; harIndata: boolean };
```

Query: `skiva`, `lag`, `regel`, `fog`, `miljo`. Modulen har ingen `GRANSER`: varje fält är ett val ur en lista, det finns inga fria talfält, och valideringen sker mot värdelistorna. Ett värde utanför dem ger `ogiltig` med feltext på fältet, precis som ett tal utanför gränserna gör på de andra verktygen.

**Längden.** Minsta längd räknas ur Norgips tumregel, alltså skivornas tjocklek plus 20 mm in i träregel eller plus 10 mm genom stålregel, med cirka 7 mm pålagt vid torr fogtätning. Talet finns sällan att köpa, så svaret är en handelslängd hämtad ur längdtabellen i `/inomhus/gipsskruv/`. Under svaret står minsta längd, närmaste handelslängd över, hur långt skruven går ner i regeln och radens andra längd, så att läsaren ser hela räkningen. Har läsaren fogtätning tas nästa längd upp från raden, och svaret höjs tills det når tumregeln.

**De två raderna som avviker, och varför.** Ett lag 12,5 mm på trä får 41 mm fast 35 mm räcker, och ett lag 15 mm på stål får 30 mm fast 25 mm är minsta längd. Båda står som ANTAGANDE i tabellen, båda förklaras på skärmen på raden `anm`, och båda följer guidens egen text. Raderna för den tunna skivan på 9,5 mm står inte i artikelns tabell och är räknade ur tumregeln; resultatet bär `iTabellen: false`, och sidan skriver ut att raden är vår.

**Gänga, spets och ytbehandling.** Grov gänga i trä och fin i stål (Gör Det Själv). S-spets eller nålspets i trä, nålspets i plåt upp till 0,9 mm och borrspets över (Gyproc QS Quick, Essve). Elförzinkad eller fosfaterad i torrt trä och fosfaterad mot stål, båda i korrosivitetsklass C1 (Essve), C4 eller rostfri A2 utomhus (Essve GU Corrseal och Beijer). Våtrummet får C4 av oss fast källorna nöjer sig med C1 bakom ett färdigt tätskikt, och det är märkt ANTAGANDE.

**Råden.** `gorInteDetHar` kan innehålla fyra rader: grovgängad träskruv i stålregel, nålspets i plåt över 0,9 mm, den kortaste längden på raden i tak, och fosfaterad skruv i utegips.

**Produktkorten.** `essve-fzb-39x41` visas bara när svaret är 41 mm med grov gänga på trä, alltså `visaBandadSkruv`, med `forVem` som säger att det är just den skruven i band. `makita-dfr550zx1` står alltid under med samma rad som innerväggsräknaren, "Från ungefär 300 skruv lönar sig en automat." Under korten står att bandet är gjort för träregel.

Markup: H1 "Vilken gipsskruv ska du ha? Räkna ut längd och gänga", ingress på fyra meningar, `<Faktaruta variant="kortsvar">` med svaret på fem korta meningar, sedan formuläret och svaret i två spalter på det linjerade papperet. Det stora talet är längden i `text-siffra` med `<Markering>`, och under det gänga, spets och ytbehandling som tre rader med skälet under var och en, listan "Så kom längden fram", skruvavståndet med länk till `/rakna/innervagg/` för antalet, "Gör inte det här" och den delbara länken. Sedan H2 "Skruven och maskinen som svaret pekar på", H2 "Gipsskruv längd och gänga, och varför regeln avgör båda" (385 ord) med H3 "Gipsskruv stålregel, gränsen går vid 0,9 mm plåt", H2 "Så räknar vi" med sju steg och antagandetabellen på tjugo rader, H2 "Läs vidare" till `/inomhus/gipsskruv/`, `/rakna/innervagg/` och `/inomhus/bygga-innervagg/`, och tre frågor i `<Faq>`.

Sökfraserna "vilken gipsskruv" (H1 och ingress), "gipsskruv längd" (H2) och "gipsskruv stålregel" (H3) ligger i rubrikerna och i första stycket. `<title>` "Vilken gipsskruv? Längd och gänga för din vägg", 46 tecken; med suffixet blir den 62 och layouten utelämnar det därför, som på sex av de sju andra kalkylatorsidorna. Meta description är 138 tecken. Formuläret är inbäddat i `/inomhus/gipsskruv/` direkt under längdtabellen och i `/inomhus/bygga-innervagg/` sist i skruvavsnittet.

Testskriptet `scripts/test-kalkyl-gipsskruv.mjs` kör femton fall: konstanterna mot underlaget, minsta längd mot artikelns punktlista, hela längdtabellen mot artikelns tabell, ett lag 12,5 mm på trä (41 mm), två lag på trä (45 mm), ett lag på tunn stålregel (25 mm med fin gänga och nålspets), ett lag 15 mm på stål (30 mm med rådet om marginal), den tunna skivan i tre varianter, fogtätningen i två (45 mm och det tjockaste fallet på 60 mm), tjock plåt med borrspets, våtrum och utomhus mot C4, takrådet på varje svar, `narmastOver`, ogiltig indata och `tolkaQuery`.

#### 4.7.9 `src/pages/rakna/kvadratmeter.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de åtta sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: varken färg, tapet eller golv finns i produktdatabasen, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Kvadratmeterräknare. `bred={true}`.

Det här är den mest sökta räknaren av alla, och den med mest konkurrens. Skillnaden mot marknaden är två saker: avdragen för dörr och fönster görs på riktigt, och varje åtgångstal har en källa. Kalkylverket, Fixhuset och byggkedjornas materialräknare multiplicerar längd gånger bredd och drar ingenting alls för öppningarna. Ämnena golv, kök och inomhus har ingen guide som räknar åtgång, så utvecklaren hämtade källorna själv och lade dem i `docs/briefer/underlag-kalkyl-kvadratmeter-2026-09-17.md`, med en tabell över vilka sidor som gick att läsa maskinellt och ett avsnitt 8 över vad chefredaktören ska verifiera i webbläsare.

Formeln ligger i `src/lib/kalkyl/kvadratmeter.ts`:

```ts
export interface KvadratmeterIndata { langdM: number; breddM: number; takhojdM: number; dorrar: number; dorrBreddM: number; dorrHojdM: number; fonster: number; fonsterBreddM: number; fonsterHojdM: number; raknar: 'golv' | 'vaggar' | 'tak' | 'alla'; material: 'inget' | 'vaggfarg' | 'takfarg' | 'tapet' | 'parkett' | 'klinker'; strykningar: number; laggning: 'rak' | 'diagonal'; paketKvm: number | null }
export const STANDARD = { langdM: 4, breddM: 3, takhojdM: 2.5, dorrar: 1, fonster: 1, raknar: 'alla', material: 'inget', strykningar: 2, laggning: 'rak', paketKvm: null };
export const GRANSER = { langdM: [0.5, 50], takhojdM: [1.5, 6], dorrar: [0, 20], fonster: [0, 20], strykningar: [1, 5], paketKvm: [0.1, 20] };
export function bastaBurkar(liter): { burkar: Burk[]; totalt: number };
export function raknaKvadratmeter(i): KvadratmeterResultat;   // ok | ogiltig
export function tolkaQuery(q): { indata: KvadratmeterIndata; harIndata: boolean };
```

Query: `langd`, `bredd`, `takhojd`, `dorrar`, `dorrbredd`, `dorrhojd`, `fonster`, `fonsterbredd`, `fonsterhojd`, `raknar`, `material`, `strykningar`, `laggning` och `paket`. Resultatet bär golvytan, takytan, omkretsen, väggytan före avdrag, de två avdragen var för sig och tillsammans, väggytan efter avdrag, det valda talet med sitt namn, och sedan ett av tre åtgångssvar: `farg`, `tapet` eller `golv`. `gorInteDetHar` är en lista.

**Materialet väljer sin egen yta.** Väggfärg och tapet går på väggarna efter avdrag, takfärg på taket, parkett och klinker på golvet. Valet av vad som ska räknas styr bara vilket tal som står stort, så ett svar kan aldrig bli åtgång på fel yta. Saknas `raknar` i adressen sätts det av materialet: takfärg ger tak, golv och klinker ger golv, väggfärg och tapet ger väggar. Den delbara länken skriver alltid ut båda, så en delad adress är entydig.

**Konstanterna med källa.** Väggfärg och takfärg 8 kvm per liter och strykning (Beckers Scotte 7 och Scotte R2, Alcro Milltex 7 och Milltex 2 RF, Nordsjö Ambiance Smooth Silk; de anger 8 till 10, och vi räknar med den nedre kanten). Grundfärg 7 kvm per liter (Beckers Scotte Grund anger 6 till 8, alltså mindre än täckfärgen). Tapetrulle 0,53 × 10,05 m (Boråstapeter). Spill 5 och 10 procent på parkett och laminat (Kährs och Pergo), 10 och 15 procent på kakel och klinker (Kakelgiganten). Dörröppning 0,9 × 2,1 m (Swedoor, modul 9x21, öppningsmått 910 × 2110 mm). ANTAGANDE: fönstret 1,2 × 1,2 m, burkstorlekarna 1, 2,5 och 10 liter, mönsterrapport 53 cm, påslag 10 cm per våd, att dörrens bredd men inte fönstrets dras av innan våderna räknas, och att rummet är en rektangel.

**Burkarna.** `bastaBurkar()` söker uttömmande över de tre storlekarna och väljer i två steg, enligt koordinatorns beslut 2026-09-17. Först sållas kombinationerna till dem som lämnar högst `OVERSKOTT_GRANS` av behovet över; bland dem vinner den med färst burkar, och vid lika antal den som lämnar minst över. Finns ingen kombination inom gränsen vinner den med minst liter totalt, vilket bara inträffar under en literburk. Skälet att färre burkar går före är att de är billigare per liter, lättare att bära och ett partinummer mindre att hålla isär på samma vägg.

Gränsen är 30 procent och inte 25. Standardrummets väggar behöver 7,92 liter, och en tiolitersburk lämnar 26 procent över; 25 procent hade stängt ute just det fall regeln finns till för. Testskriptet asserterar både gränsvärdet och gränsfallet. Regeln ger 7,92 liter en burk om 10, åtta liter jämnt samma burk, och ett tak på 12 kvm med två strykningar en burk om 2,5 plus en literburk i stället för sju liter på hyllan. Läsaren ser alltid "liter räknat" bredvid burkarna.

**Tapeten räknas i våder, inte i kvadratmeter.** Omkretsen minus dörrarnas bredd delas med rullens bredd. Vådens längd är takhöjden plus påslaget, och antalet våder ur en rulle är rullängden delad med den. Med mönsterpassning avrundas vådlängden uppåt till hel rapport först. Formeln ger den kända tumregeln vid 2,4 m takhöjd: fyra våder per rulle utan mönster och tre med, alltså sju rullar mot nio i standardrummet. Vid 2,5 m takhöjd kostar mönstret ingenting, och sidan skriver ut det i stället för att låtsas om en skillnad som inte finns.

**Råden.** `gorInteDetHar` kan innehålla sex rader: köp inte exakt ytan (alltid när ett material är valt), spara några brädor (parkett), spara några plattor (klinker), blanda inte färgpartier (färg), nöj dig inte med en strykning (färg med en enda strykning) och fyll i dörr och fönster (när båda står på noll).

Markup: H1 "Räkna ut kvadratmeter och hur mycket färg, tapet eller golv du behöver", ingress på tre meningar, `<Faktaruta variant="kortsvar">` med svaret på fem korta meningar, sedan formuläret och resultatet i två spalter på det linjerade papperet. Det stora talet är kvadratmetern med `<Markering>`, och under det åtgången som ett andra stort tal när ett material är valt. Sedan raderna med golv, omkrets, de två avdragen, nettoytan och materialets egna rader, "Gör inte det här" och den delbara länken. Sedan H2 "Räkna ut kvadratmeter steg för steg, och hur mycket färg du behöver" (493 ord) med H3 "Hur mycket färg behöver jag till de kvadratmetrarna?", H3 "Hur många tapetrullar går det åt i samma rum?" och H3 "Räkna ut golv, och lägg på spillet innan du beställer", H2 "Så räknar vi" med åtta steg och antagandetabellen på sjutton rader, H2 "Läs vidare" till `/inomhus/bygga-innervagg/`, `/kok/slipa-bankskiva/` och `/rakna/innervagg/`, och tre frågor i `<Faq>`.

Sökfraserna "räkna ut kvadratmeter" (H1, ingress och första H2), "hur mycket färg behöver jag" (ingress och H3), "hur många tapetrullar" (ingress och H3) och "räkna ut golv" (ingress och H3) ligger i rubrikerna och i första stycket. `<title>` "Räkna ut kvadratmeter, färg, tapet och golv", 43 tecken; med suffixet blir den 59 och layouten behåller det därför, till skillnad från sex av de åtta andra kalkylatorsidorna. Meta description är 148 tecken. Formuläret finns i `MED_FORMULAR`, men ingen artikel bäddar in det än: guiderna om golv och målning skrivs senare.

**Formulärets bredd.** Kalkylatorkortet är en halv spalt på desktop och 375 px minus marginal på mobil, och tre talfält bredvid varandra där gör både etiketter och hjälprader oläsliga. Rummets tre mått ligger därför ett per rad, och bara bredd och höjd på en öppning delar rad, i två kolumner. Det är samma fältbredd som avfuktarens och trallräknarens.

Testskriptet `scripts/test-kalkyl-kvadratmeter.mjs` kör tolv fall: standardrummet utan material, väggfärg med två strykningar, väggfärg med en enda, takfärg, tapet vid 2,5 m takhöjd, tapet vid 2,4 m där mönstret kostar två rullar, parkett rakt och diagonalt, parkett med paketstorlek, klinker rakt och diagonalt, egna dörrmått och ett rum utan dörr och fönster. Utöver dem testas konstanterna mot underlaget, underlagets räkneexempel rad för rad, burkvalet, gränserna och `tolkaQuery`.

#### 4.7.10 `src/pages/rakna/mala-ute.astro` (byggd 2026-09-17)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de nio sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: färg finns inte i produktdatabasen, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Måla ute i dag. `bred={true}`.

Det här är det tredje beslutsverktyget, efter bygglovet och pluggväljaren, och det första som svarar med ett klockslag. Det räknar inget material utan säger ja, ja men sluta senast kl X, eller vänta, och varje regel som slog in bär sin källa som bygglovsverktyget bär lagrum. Ingen svensk sida räknar det: målarfirmornas bloggar upprepar tillverkarnas gränser i löptext, och ingen tar in nattens temperatur, klockslaget och daggpunkten i samma räkning. Fasadguiden om att måla är inte skriven än, så utvecklaren hämtade källorna själv och lade dem i `docs/briefer/underlag-kalkyl-mala-ute-2026-09-17.md`, med en tabell över vilka sidor som gick att läsa maskinellt och ett avsnitt 9 över vad chefredaktören ska verifiera i webbläsare.

Formeln ligger i `src/lib/kalkyl/mala-ute.ts`:

```ts
export interface MalaUteIndata { luftTempC: number; rfProcent: number; nattMinC: number; startTimme: number; solnedgangTimme: number; fargtyp: 'akrylat' | 'oljealkyd' | 'slamfarg' | 'traolja'; yta: 'skugga' | 'sol'; regn: boolean }
export const STANDARD = { luftTempC: 15, rfProcent: 65, nattMinC: 8, startTimme: 10, solnedgangTimme: 20, fargtyp: 'akrylat', yta: 'skugga', regn: false };
export const GRANSER = { luftTempC: [-10, 40], rfProcent: [10, 100], nattMinC: [-10, 40], startTimme: [0, 23], solnedgangTimme: [0, 23] };
export const FARGER: Record<Fargtyp, Farg>;                 // minTempC, klibbfriH, overmalningsbarH, regnfriH, kalla
export function daggpunkt(tempC, rfProcent): number;        // Magnus, samma konstanter som daggpunkt.ts
export function torktidsfaktor(tempC, rfProcent): number;   // 2^((23 − t)/8), gånger 1,5 över 70 %
export function klockslag(timme): string;                   // "kl 16", "kl 3 i morgon"
export function raknaMalaUte(i): MalaUteResultat;           // ok | ogiltig
export function tolkaQuery(q): { indata: MalaUteIndata; harIndata: boolean };
```

Query: `temp`, `rf`, `natt`, `start`, `sol`, `farg`, `yta` och `regn` (`ja` eller `nej`). Decimalkomma, minustecken och typografiskt minus tolkas. Klockslagen ska vara hela timmar, och en solnedgång före starten ger fel på fältet. Resultatet bär utfallet (`mala`, `mala_men`, `vanta`), rubriken, det stora talet (`Ja`, `kl 16` eller `Vänta`), daggpunkten, ytans temperatur i natt, marginalen, om dagg faller, färgen med databladets tal och källa, torktidsfaktorn, torktiden till klibbfri och övermålningsbar vid dagens väder, klockslaget färgen är övermålningsbar, senaste sluttiden som tal och text, om färgen torkar över natten, reglerna i ordning och `gorInteDetHar`.

**Räkningen i fyra steg.** Daggpunkten nu med Magnus-formeln, och antagandet att den håller sig genom kvällen när samma luftmassa ligger kvar. Ytans temperatur i natt är prognosens lägsta minus 2 grader (ANTAGANDE: en yta under klar himmel strålar mot natthimlen och blir kallare än luften; efter solnedgången ligger alla ytor i skugga, så avdraget gäller oavsett valet sol eller skugga). Torktiden ur databladet räknas om med `torktidsfaktor()`: dubbel per 8 grader under 23 (Beckers forum ger punkten "dubblera vid cirka 15 grader", kurvan neråt är vår) och gånger 1,5 över 70 procent luftfuktighet (ANTAGANDE). Senaste sluttiden är solnedgången minus 2 timmar (Beckers Perfekt Fasad, ingen dagg inom två timmar; Alcro säger en till två) minus torktiden till klibbfri.

**Reglerna, i ordning, med utfall `ok`, `varning`, `sluta` eller `stopp`.** Temperaturen nu under färgens gräns ger stopp (databladet). Luftfuktighet över 80 procent ger stopp (Nordsjö Tinova, den enda gränsen i procent någon tillverkare anger). Nattens lägsta under färgens gräns ger stopp när färgen torkar över natten, alltså när den inte är övermålningsbar före solnedgången; för oljealkyd är det alltid så, eftersom `OLJEFARG_MINST_H` sätter minst ett dygn (ANTAGANDE, en oljefärg härdar med syre). En akrylat som är övermålningsbar före solnedgången får passera med varning; Beckers och Alcro skriver att gränsen gäller dygnet, och att låta en torr akrylat passera är vår tolkning, som regeln skriver ut. Start efter senaste sluttiden ger stopp (Alcro, "alltför sent på kvällen"; Beckers, "innan kvällskylan kommer"). Ytan på eller under daggpunkten i natt ger `sluta` med klockslaget, eller stopp om starten redan ligger efter det. Regn inom ett dygn ger stopp oavsett färgtyp (Beckers, rätt väder för målning, "det närmaste dygnet"); databladens egna regntider står i raden som upplysning. Direkt sol ger varning, inte stopp (Alcro forum, Beckers). Ett stopp ger `vanta`, ett `sluta` utan stopp ger `mala_men`, annars `mala` med sluttiden som råd.

**Konstanterna med källa.** Magnus a = 17,625 och b = 243,04 (Lawrence 2005, kopierade från daggpunkt.ts med samma kommentar). `RF_STOPP_PROCENT` 80 (Nordsjö). `DAGG_MARGINAL_H` 2 (Beckers, Alcro). `TORKTID_REFERENS_C` 23 och `TORKTID_REFERENS_RF` 50 (alla datablad). `FORDUBBLING_PER_C` 8 (Beckers forum för punkten, vår kurva). `FUKTKVOT_MAX_PROCENT` 16 (TräGuiden, Svenskt Trä). `FARGER`: akrylat 7 °C, klibbfri 1 h, övermålningsbar 4 h, regn 1 h (Beckers Perfekt Fasad); oljealkyd 7 °C, 2 h, 6 h, regn 2 h (Beckers Perfekt Oljefärg); slamfärg 5 °C, 1 h, 24 h, regn 1 h (Falu Rödfärg Original); träolja 10 °C, 8 h, 16 h, regn 24 h (Beckers Elit Träolja). ANTAGANDE: `YTAVDRAG_NATT_C` 2, `FUKT_GRANS_RF` 70 och `FUKT_FAKTOR` 1,5, `OLJEFARG_MINST_H` 24, att daggpunkten håller i kväll, och att en torr akrylat får passera en kall natt.

**Råden.** `gorInteDetHar` är alltid fem rader: måla inte på morgondaggen, måla inte i direkt sol på varm panel, lita inte på dagstemperaturen när natten blir kall, måla inte på virke över 16 procent fuktkvot, måla inte dagen före regn.

Markup: H1 "Kan du måla ute i dag? Räkna på temperatur, luftfuktighet och dagg", ingress på tre meningar, `<Faktaruta variant="kortsvar">` på fem korta meningar utan tillverkarnamn, sedan formuläret och svaret i två spalter på det linjerade papperet. Det stora talet är klockslaget, ordet Ja eller ordet Vänta i `text-siffra` med `<Markering>`, och resten av svaret på samma baslinje där enheten står på de andra kalkylatorerna. Under det sex rader med daggpunkten, ytan i natt, färgens gräns med källa, klibbfri i dag mot databladet, övermålningsbar och senaste sluttiden, sedan reglerna som en lista där varje rad har en etikett (Klart, Varning, Sluta senast, Stopp), texten och källan, "Gör inte det här", raden om att luftmassan antas vara densamma, och den delbara länken. Sedan H2 "Måla ute: temperatur, luftfuktighet och natten som avgör" (cirka 490 ord) med H3 "Hur kallt får det vara när man målar ute?", H3 "Varför daggen är farligare än kylan" och H3 "Måla ute på våren och hösten", H2 "Så räknar vi" med sex steg och antagandetabellen på tjugo rader med källorna daterade i tabellfoten, H2 "Läs vidare" till `/fasad/dreva-fonster/`, `/fukt/luftfuktighet-inomhus/` och `/rakna/daggpunkt/`, och tre frågor i `<Faq>`.

Formuläret i `src/components/kalkyl/MalaUteForm.astro`: de tre temperatur- och fuktfälten ett per rad med hjälprader som säger var talet hämtas ("temperaturen just nu utomhus i skuggan", "prognosens lägsta i natt"), de två klockslagen i två kolumner under legenden "Klockslagen, hela timmar" med hjälpraden att solnedgången står i väderappen, färgtyp och yta som radioknappar, regn som kryssruta med värdet `ja`.

Sökfraserna "kan man måla ute i dag" (H1 och första stycket), "måla ute temperatur" (H1, H2 och H3), "hur kallt får det vara när man målar ute" (H3 och första frågan), "måla utomhus luftfuktighet" (H1, H2 och andra frågan) och "måla ute på hösten/våren" (tredje H3) ligger i rubrikerna och i första stycket. `<title>` "Kan du måla ute i dag? Temperatur och dagg", 42 tecken; med suffixet blir den 58 och layouten behåller det. Meta description är 137 tecken. Slugen finns i `MED_FORMULAR`, men ingen artikel bäddar in formuläret än: fasadguiden om att måla skrivs senare, och då får den `<Kalkylator namn="mala-ute" />` direkt efter stycket om temperatur och dagg.

Skissen `src/assets/illustrationer-kallor/rakna/mala-ute.svg` är en liggande panel med en pensel, det nystrukna fältet i snickarpenna, solen på väg ner bakom horisonten och klockslaget på tumstocken; delningsbilden `public/og/rakna-mala-ute.png` byggs ur den i bygget.

Testskriptet `scripts/test-kalkyl-mala-ute.mjs` kör fjorton fall: en fin junidag (måla), en varm augustidag med fuktig kväll (sluta kl 17), en septemberdag med kall natt (vänta), luftfuktighet 85 procent (vänta), oljealkyd med natt under gränsen (vänta) och akrylat samma dag som klarar sig med varning, slamfärg en sval dag (sluta kl 14) och samma dag med natt under Falu Rödfärgs gräns (vänta), regn inom ett dygn (vänta), start sent på eftermiddagen (vänta), minusgrader (vänta), träolja som måste börja klockan åtta (måla) och samma dag med start klockan nio (vänta), samt direkt sol (varning utan stopp). Utöver dem testas konstanterna mot underlaget, daggpunkten mot de tio raderna i luftfuktighetsartikelns tabeller, torktidsfaktorn mot Beckers punkt, klockslagsformatet, standarddagen, gränserna och `tolkaQuery`.

#### 4.7.11 `src/pages/rakna/dranering.astro` (byggd 2026-09-18)

`export const prerender = false`, samma motivering och samma `Cache-Control` som de tio sidorna ovan. `Astro.locals.sidtyp = 'verktyg'`. `reklam={false}`: räkningen pekar inte ut någon kapacitet, effekt eller längd, så sidan har varken produktkort eller reklamband. Brödsmulor: Hantverkstips / Räkna själv (`/rakna/`) / Dränering. `bred={true}`.

Det här verktyget gör två saker samtidigt, och det är det första som gör det. Det räknar ett pris, alltså kronor per löpmeter husgrund och en summa för hela grunden med arbete, material och återställning var för sig, och det ger ett besked om läsaren behöver gräva alls. Det andra är det som saknas på marknaden: ingen svensk sida sätter dräneringens pris bredvid avfuktarens och säger vilket av dem läsaren faktiskt behöver. Grundklustret är inte skrivet, så utvecklaren hämtade källorna själv och lade dem i `docs/briefer/underlag-kalkyl-dranering-2026-09-18.md`, med en tabell över vilka sidor som gick att läsa maskinellt och ett avsnitt 9 över vad chefredaktören ska verifiera i webbläsare.

Formeln ligger i `src/lib/kalkyl/dranering.ts`:

```ts
export interface DraneringIndata { husLangdM: number; husBreddM: number; schaktDjupM: number; atkomst: 'fri' | 'trang' | 'berg'; aterstallning: 'gras' | 'rabatt' | 'asfalt' | 'plattgang' | 'altan'; alderAr: number; tejptest: 'markfukt' | 'kondens' | 'torrt' | 'inte-gjort' }
export const STANDARD = { husLangdM: 12, husBreddM: 8, schaktDjupM: 2, atkomst: 'fri', aterstallning: 'gras', alderAr: 50, tejptest: 'inte-gjort' };
export const GRANSER = { husLangdM: [3, 60], husBreddM: [3, 60], schaktDjupM: [0.5, 4], alderAr: [0, 150] };
export function djupfaktor(schaktDjupM): number;            // 1 vid referensdjupet, klämd
export function materialfaktor(schaktDjupM): number;        // skalar rakt mot djupet
export function rotavdrag(arbeteKr): { grundandeKr; avdragKr; taketNas };
export function kronor(n): string;                          // "120 000"
export function raknaDranering(i): DraneringResultat;       // ok | ogiltig
export function tolkaQuery(q): { indata: DraneringIndata; harIndata: boolean };
```

Query: `langd`, `bredd`, `djup`, `atkomst`, `aterstall`, `alder` och `tejp`. Decimalkomma, mellanslag i talet och typografiskt minus tolkas. Åldern ska vara hela år. Resultatet bär omkretsen, de tre posterna med kronor per löpmeter och kronor totalt, arbetet för sig, summan och summan per löpmeter, rotavdraget med den rotgrundande delen och taket, djup- och åtkomstfaktorn, beskedet med rubrik och en mening, faktorerna mot avfuktarens och fuktutredningens pris, `visaAvfuktare`, reglerna i ordning och `gorInteDetHar`.

**Standardvärdena är artikelns räkneexempel.** Ett hus på 12 gånger 8 m ger 40 löpmeter, alltså exakt den villagrund kostnadsavsnittet i `/fukt/fukt-i-kallaren/` räknar på, och arbetet landar därför på 120 000 respektive 240 000 kr utan att någon rundar något. Läsaren mäter två sidor och verktyget räknar varvet; omkretsen är löpmetern priset går på, och det är så Villaägarna definierar den.

**Räkningen i sju steg.** Omkretsen. Arbetet ur Villaägarnas 3 000 kr per löpmeter i undre kanten och det dubbla i den övre. Schaktdjupet, som flyttar spannet med 50 procent per meter över eller under referensdjupet på 2 m. Åtkomsten, som flyttar det en gång till. Materialet, 300 till 900 kr per löpmeter vid normalt djup, skalat rakt mot djupet. Återställningen efter vad som ligger ovanpå schakten. Rotavdraget, som dras från arbetet men bara från den del som inte är maskinhyra.

**Dämpningen på den övre kanten**, som är det enda ställe där formeln medvetet inte multiplicerar rakt av. Villaägarnas fördubbling är redan motiverad med grävdjup, bergsprängning och markförhållanden, så att lägga våra påslag ovanpå den i båda ändarna vore att räkna samma svårighet två gånger; tre meters schakt i berg hade gett 13 500 kr per löpmeter bara i arbete. `OVRE_DAMPNING` är därför 0,5: påslaget slår igenom helt på den undre kanten och halvt på den övre. Samma fall landar då på 6 750 till 9 750 kr, i linje med BraByggares svåraste klass, och spannet krymper när läsaren berättat varför tomten är svår i stället för att bara flyttas uppåt. Vid fri tomt på referensdjup är dämpningen verkningslös och spannet är exakt Villaägarnas eget.

**Beskedet, som är verktygets andra halva.** Tejptestet avgör först, åldern sedan. Markfukt på plasten och en dränering över 30 år ger `dranera`. Kondens ger `mat-forst` och sätter `visaAvfuktare`, som lägger in `<Verktygskort kalkylator="avfuktare" />` på sidan precis som daggpunktsverktyget gör. Allt annat, alltså torr plast, ogjort test eller markfukt på en ung dränering, ger `billiga-forst`. Standardvärdet på tejptestet är "inte gjort", vilket är avsiktligt: sajtens eget råd är att inte gräva förrän plasten har svarat, och den som landar från Google ska mötas av det svaret först.

**Reglerna, i ordning, med utfall `grav`, `mat`, `billigt` eller `ok`.** Tejptestet med Boverket eller Gör Det Själv som källa. Åldern mot Villaägarnas femtio år. Det billiga, alltså stuprör, markfall och rensad dagvattenbrunn, med Anticimex tal om att 20 mm regn på ett tak på 150 kvm ger 3 000 liter. Fuktutredningen med mätvärden mot Ocabs listpris. Djupet och åtkomsten, som bara står när tomten avviker från Villaägarnas eget fall. Sprängningens fasta kostnader, som bara står vid berg. Och rotavdraget, som alltid står.

**Konstanterna med källa.** `ARBETE_KR_PER_LOPMETER` 3 000 och `ARBETE_FAKTOR_OVRE` 2 (Villaägarna). `DJUP_PASLAG_PER_M` 0,5 och åtkomstpåslaget 25 procent för trång tomt (BraByggare). `SPRANGNING_ETABLERING_KR` 10 000 och `SPRANGNING_TACKNING_KR` 15 000 (HelpHero). Materialposterna ur Bauhaus, Markgrossen och Mark och Anläggning, alla lästa 2026-09-18. Återställningen för gräs ur Upplands Gräsmattor och för asfalt och marksten ur BraByggare. Schaktbredden cirka 1 m (GarBo). `ROT_ANDEL` 0,3 och `ROT_TAK_KR` 50 000 (Skatteverket). `KAN_HALLA_AR` 50 (Villaägarna) och `TROLIGT_SLUT_AR` 30 (Husgrunder). `AVFUKTARE_KR` 5 948 (Proffsmagasinet), `FUKTUTREDNING_KR` 5 355 (Ocab) och Anticimex tre tal, alltså samma siffror som kostnadstabellen i `/fukt/fukt-i-kallaren/`. ANTAGANDE: `SCHAKTDJUP_REFERENS_M` 2, `OVRE_DAMPNING` 0,5, bergets påslag på 50 procent, materialsummorna 300 och 900 kr, spannen för rabatt och altan, och `ROT_GRUNDANDE_ANDEL` 0,6.

**Rotavdraget är sidans starkaste faktalucka mot konkurrenterna.** Att dränera husgrunder står i Skatteverkets lista över arbete som ger rätt till avdrag, men två rader längre ner undantas maskinell utrustning, uttryckligen grävmaskiner och borraggregat. En dränering är till stor del grävmaskin och lass med massor, så avdraget träffar en mindre del av notan än den som räknar 30 procent på hela arbetsposten tror. Ingen av de svenska kostnadssidor vi läst nämner det; flera skriver rakt ut att man drar av 30 procent på hela kostnaden. `ROT_GRUNDANDE_ANDEL` 0,6 är vår uppskattning av hur mycket av arbetsposten som är avdragsgillt arbete, och sidan skriver ut att talet är vårt och ber läsaren om en faktura där maskinhyran står på egen rad. Nivån är också värd en anteckning för framtiden: de 50 procent halva nätet anger gällde bara arbete som **betalades** mellan 12 maj och 31 december 2025, och nivån är tillbaka på 30 sedan 1 januari 2026.

Markup: H1 "Vad kostar dränering? Räkna per löpmeter, och se om du behöver gräva", ingress på tre meningar, `<Faktaruta variant="kortsvar">` på fem korta meningar utan tillverkarnamn, sedan formuläret och svaret i två spalter på det linjerade papperet. Resultatspalten bär beskedet, talet och länkarna, och ingenting mer (ändrat 2026-09-19): överst beskedet som en rad i H3-stil med en mening under, sedan det stora talet, alltså arbetets undre kant i `text-siffra` med `<Markering>` och resten av svaret på samma baslinje där enheten står på de andra kalkylatorerna, posttabellen med arbete, material, återställning och allt, fyra rader med rotavdraget och jämförelsen mot avfuktaren och fuktutredningen, en rad i `text-liten text-blyerts-2` som pekar vidare till avsnitten under verktyget, länken "Så räknar vi" och den delbara länken. Direkt under kalkylatorn, efter `<Verktygskort kalkylator="avfuktare" />` när det visas, står H2 "Därför blev svaret så" med reglerna som en lista där varje rad har en etikett (Gräv, Mät först, Gör det billiga, Så här är det), texten och källan under, och H2 "Gör inte det här" med de fem raderna som stycken. Sedan H2 "Dränering, kostnad per löpmeter och om du behöver gräva alls" (687 ord) med två stycken före första H3, sedan H3 "Hur länge håller en dränering?", H3 "Vad som gör priset dubbelt så högt", H3 "Rotavdraget, och fällan i det" och H3 "Avfuktare eller dränering", H2 "Så räknar vi" med nio steg och antagandetabellen på trettioen rader med hämtningsdatumen i tabellfoten, där raden om att talen är storleksordningar och inte en offert står sist i avsnittet, H2 "Läs vidare" till `/fukt/fukt-i-kallaren/`, `/fukt/avfuktare-kallare/` och `/rakna/daggpunkt/`, och tre frågor i `<Faq>`.

Formuläret i `src/components/kalkyl/DraneringForm.astro`: husets två mått i två kolumner under legenden "Husets mått utvändigt" med hjälpraden att omkretsen räknas fram, schaktdjupet som eget fält med hjälpraden om sulan och souterrängen, åtkomst och tejptest som radioknappar med en förklarande rad under varje alternativ, återställningen som radioknappar på en rad, och åldern som eget fält med hjälpraden att husets ålder duger när man inte vet. Tejptestets hjälprad länkar till `/fukt/fukt-i-kallaren/`, där hela testet står.

Sökfraserna "vad kostar dränering" (H1, första stycket och första frågan), "dränering kostnad per meter" (H1, H2 och resultatets rader), "dränera om huset kostnad" (H2 och första frågan), "hur länge håller en dränering" (H3 och andra frågan) och "avfuktare eller dränering" (H3 och tredje frågan) ligger i rubrikerna och i första stycket. `<title>` "Vad kostar dränering? Räkna per löpmeter", 39 tecken; med suffixet blir den 55 och layouten behåller det, som på bygglovsverktyget. Slugen finns i `MED_FORMULAR`, och `<Kalkylator namn="dranering" />` är inbäddad i `/fukt/fukt-i-kallaren/` direkt efter kostnadstabellens räkneexempel.

Skissen `src/assets/illustrationer-kallor/rakna/dranering.svg` ritades av designansvarig parallellt med bygget. `scripts/generera-delningsbilder.mjs` ändrades samtidigt så att en saknad skiss varnar i stället för att stoppa bygget, och delningsbilden får då tumstocken till höger som en innehållssida utan egen bild. Skälet är att `src/lib/verktygsbild.ts` redan är byggd för att en verktygssida ska fungera innan skissen finns, medan delningsbildsskriptet kastade fel på samma sak; nu följer de två samma regel.

Testskriptet `scripts/test-kalkyl-dranering.mjs` kör nitton fall. Talen jämförs mot kostnadstabellen och räkneexemplet i `/fukt/fukt-i-kallaren/`: 3 000 kr per löpmeter, upp till det dubbla, och villagrunden på 40 löpmeter som ger 120 000 respektive 240 000 kr. Utöver dem testas artikelns faktor tjugo mot avfuktarens pris, djupfaktorn med båda klämningarna, dämpningen på den övre kanten, materialfaktorn, de tre åtkomstlägena, återställningens ordning, alla fyra utfallen av tejptestet, gränsen vid trettio år från båda hållen, att Anticimex och Ocabs tal står i varje svar, rotavdraget med och utan taket, gränserna, `tolkaQuery` med decimalkomma och skräp, och tusentalsavgränsaren.

### 4.8 `src/pages/om/index.astro` och `src/pages/om/[slug].astro`

`index.astro` renderar `getEntry('sidor', 'om')`. `[slug].astro` har `getStaticPaths` från `publicerade('sidor')` utan `om` och `startsida`. Båda: brödsmulor Hantverkstips / {title} (index) respektive Hantverkstips / Om (`/om/`) / {title}. H1, meta "Uppdaterad {datum}" om den finns, `<Content components={{ h2: Pennstreck, Faktaruta, Varning, Markering }} />`. `reklam={false}`. Strukturerad data efter `strukturdata`: `Organization` ger `organisation()`, `Article` ger `artikel()` med redaktionen, `ingen` ger inget. Gemensam vy `vyer/Sida.astro` så att de två rutterna är tio rader var.

### 4.9 `src/pages/forfattare/[slug].astro`

`publicerade('forfattare')`. Brödsmulor: Hantverkstips / Författare (ingen länk, det finns ingen listsida) / {namn}. H1 `namn`, rad "{yrke} sedan {sedan}" eller `yrke`, bild 160 × 160 (`<Image>`, radie `sm`) om den finns, `<Content />` (presentationen), sedan H2 "Sidor av {namn}": alla publicerade guider, kunskap, tester och jämförelser med `forfattare === slug`, sorterade på `publicerad` fallande, med etikett och länk. Tom: "Inga publicerade sidor än." `reklam={false}`. Strukturerad data: `person()`.

### 4.10 `src/pages/404.astro`

Statisk. `noindex={true}`. H1 "Sidan finns inte", ett stycke ("Adressen kan ha ändrats. Börja från en av de här sidorna."), länkar till publicerade hubbar och `/rakna/`. Vercel serverar `dist/client/404.html` för okända adresser.

### 4.11 `src/pages/amnen/index.astro`

Statisk sida, kartan över sajten. Data: `publicerade('pelare')` i `PELARE`-ordning, `publicerade('guider')`, `publicerade('kunskap')`, `publicerade('kategorier')`, `publicerade('tester')`, `publicerade('jamforelser')` och `KALKYLATORER`. Per pelare: typgrupper i fast ordning (problemguide, kunskap, köpguide, projektguide, sedan jämförelser via kategorifilens `pelare`), kategorikort via `tillKortKategori()` med kategorins tester som länkrader under, och verktygskort för kalkylatorer vars `kategori` hör till pelaren. Layout enligt `docs/DESIGN.md` avsnitt 5.9 (6/3/3 på desktop). `bred={true}`, `reklam={false}`. Brödsmulor: Hantverkstips / Alla ämnen. Strukturerad data: `lista()` med hubbarna. H1, ingress och raden om pelare på väg är konstanter i rutten, hämtade ur `docs/briefer/texter-platshallare-2026-09-16.md`.

### 4.12 `src/pages/guider/[...vag].astro`

En rutt för `/guider/`, `/guider/[pelare]/`, `/guider/typ/[typ]/`, `/guider/niva/[niva]/` och `/sida/[n]/` under var och en. `getStaticPaths` bygger listan ur `guidefilter()` i `src/lib/guider.ts`, 24 kort per sida, och filter utan träffar byggs inte. Vyn är `src/components/vyer/Guidegalleri.astro` och tar `h1`, `titel`, `beskrivning`, `ingress`, `kort`, `totalt`, `senaste`, `rader`, `sida`, `antalSidor`, `bas` och `brodsmulor`.

Två fällor, båda värda att veta om innan nästa rutt skrivs:

1. `getStaticPaths` körs i sin egen omfattning och når bara importerade värden, aldrig konstanter i samma frontmatter. Därför ligger texterna och filterlogiken i `src/lib/guider.ts`.
2. Astros kompilator läser inte en nästlad mallsträng (en backtick inuti `${}`) i frontmatter: den tappar resten av blocket och rapporterar ett syntaxfel på en helt annan rad. Bryt ut delsträngen till en egen variabel.

`bred={true}`, `reklam={false}`. Strukturerad data: `lista()` med sidans kort. `rel="prev"` och `rel="next"` via `Bas`-propen `paginering`.

## 5. Ruttkollisioner, sammanfattning

| Sökväg | Fil | Hur den vinner |
|---|---|---|
| `/` | `index.astro` | statisk |
| `/fukt/`, `/luftavfuktare/` | `[rot]/index.astro` | en rutt, `getStaticPaths` avgör hub eller kategori, kollision ger byggfel |
| `/fukt/fukt-i-kallaren/` | `[rot]/[slug].astro` | två dynamiska segment, kolliderar inte med `[rot]/index.astro` |
| `/tester/x/`, `/jamforelser/x/`, `/rakna/x/`, `/om/x/`, `/forfattare/x/`, `/go/x/` | statiska mappar | Astro prioriterar statiska segment före dynamiska, så `tester` når aldrig `[rot]` |
| `/rakna/`, `/om/` | `rakna/index.astro`, `om/index.astro` | statiskt segment vinner över `[rot]/index.astro` |
| `/amnen/`, `/guider/`, `/guider/fukt/` | `amnen/index.astro`, `guider/[...vag].astro` | statiska mappar vinner över `[rot]`, och `[...vag]` fångar allt under `/guider/` |

Konsekvens: ingen pelare eller kategori får heta `tester`, `jamforelser`, `rakna`, `amnen`, `guider`, `om`, `forfattare`, `go`, `admin`; kontrollen ligger i `RESERVERADE_ROTSLUGS`. Och en artikel-slug får inte heta `index`.

## 6. Strukturerad data per sidtyp

| Sida | Objekt | Var |
|---|---|---|
| Alla med brödsmulor | `BreadcrumbList` | `Bas.astro` |
| Startsida, `/om/` | `Organization` | rutten |
| Guide, kunskap, jämförelse, om-sida med `Article` | `Article` med `author` Person och `publisher` Organization | rutten |
| Test | `Product` med `AggregateOffer`; `review` bara på `etikett: test` | rutten |
| Kategori | `ItemList` | rutten |
| Författare | `Person` | rutten |
| Kalkylator | `WebApplication` med `publisher` Organization (`verktyg()`) | rutten |
| `/rakna/`, 404 | bara `BreadcrumbList` | |

Rutten renderar `<StrukturData data={...} slot="head" />` inuti `<Bas>`. `FAQPage` byggs bara på en sida som har ett avsnitt med frågor och svar; ingen sida har det i dag.

## 7. Utkast

`utkast: true` i frontmatter: sidan finns i `npm run dev` (så att skribent och redaktör kan granska i webbläsaren) och saknas i `npm run build`. Regeln sitter i `publicerade()` och `arPublicerad()` i `src/lib/innehall.ts`; varje `getStaticPaths` och varje lista i vyer och layout går genom dem. `getEntry` direkt (startsidans `justNu`, kategorifil från ett test) ska följas av `arPublicerad`-kontroll, annars kan en publicerad sida länka till ett utkast. Länkar i löptext till utkast fångas inte av bygget; det är chefredaktörens granskning.

## 8. Platshållarinnehåll

Finns redan i `src/content/`, alla med `utkast: false` eftersom mallarna ska rendera i produktionsbygget så att kontrollen i avsnitt 10 kan köras. Texterna är korta, följer stilguiden och är märkta "Platshållartext" i första stycket. Chefredaktören ersätter dem innan lansering; det står i definition of done.

| Samling | Fil | Mall som verifieras |
|---|---|---|
| guider | `fukt/fukt-i-kallaren.mdx` (problemguide, tejptestet, tre orsaker, Varning, en produkt sist, Verktygskort) | Artikel, problemguide |
| guider | `fukt/avfuktare-kallare.mdx` (köpguide, tre produkter) | Artikel, köpguide, "Produkterna vi nämner" |
| guider | `altan/bygga-altan.mdx` (projektguide med `behover`, Markering) | Artikel, projektguide, DetHarBehoverDu |
| kunskap | `fukt/sorptionsavfuktare.mdx` | Artikel, kunskap utan reklam |
| tester | `luftavfuktare/woods-mrd20.mdx` (granskning, `matningar` utan kolumnen vi, två alternativ) | Test |
| jamforelser | `luftavfuktare/woods-mrd20-vs-platshallare-sorption.mdx` | Jämförelse |
| pelare | `fukt.mdx`, `inomhus.md`, `verktyg.mdx` (publicerade), `altan.mdx` (utkast till februari) | PelarHub, menyn, sidfoten, Amnesrad |
| kategorier | `luftavfuktare.md` (`val` med tre, `kopguide`, `kalkylator`), `krysslaser.md` (utkast) | Kategorisida, startsidans "Bäst i test just nu" |

Undermapparna (`fukt/`, `luftavfuktare/`) är ordning, inte adress: id är filnamnet, se `docs/ARKITEKTUR.md`. Sedan 2026-09-16 finns dessutom utkasten `kunskap/inomhus/gipsplugg.mdx`, `kunskap/inomhus/gipsskruv.mdx` och `guider/inomhus/skruva-i-gipsvagg.mdx` så att inomhushuben har adresser att länka till.
| sidor | `om.mdx`, `sa-testar-vi.mdx`, `sa-tjanar-vi-pengar.mdx`, `kontakt.mdx`, `integritet.mdx`, `startsida.mdx` | Sida, startsidan |
| forfattare | `redaktionen.md` | Författarsida, Forfattarruta |

Ändra inte texterna. Behöver en mall ett fält som saknas: lägg till fältet i schemat och i platshållarfilen, och skriv det i leveransen.

## 9. Produktdata

Databasen är tom. `supabase/seed.sql` finns och innehåller butiken `proffsmagasinet` med `lankmall` (platshållarna `ANNONS_ID` och `KANAL_ID`), kategorin `luftavfuktare`, produkterna `woods-mrd20`, `platshallare-sorption` och `platshallare-kondens-liten` med specs enligt kategorifilens nycklar, erbjudanden med pris (det sista med `lagerstatus = 'slut'` så att tillståndet syns) och en prisrad var. Migration `0002` måste köras före seeden. Ingen av dem körs av utvecklaren; teknisk ansvarig kör mot utvecklingsdatabasen när koden är granskad. Tills dess byggs sajten utan databas, och alla komponenter ska klara det (tillstånden "Databas saknas" ovan).

Utvecklaren bygger och kontrollerar två gånger: en gång utan `.env` (fallback-tillstånden) och en gång med `.env` mot utvecklingsdatabasen när teknisk ansvarig gett klartecken.

## 10. Prestandabudget och kontroll

Budgeten står i `docs/ARKITEKTUR.md`. Så verifieras den efter `npm run build`, i PowerShell från projektroten:

```powershell
# 1. Inga script-taggar i någon statisk HTML-sida, utom application/ld+json.
Get-ChildItem dist\client -Recurse -Filter *.html | ForEach-Object {
  $h = Get-Content -Raw -Encoding UTF8 $_.FullName
  $n = ([regex]::Matches($h, '<script(?![^>]*application/ld\+json)')).Count
  if ($n -gt 0) { "$($_.FullName): $n script-taggar" }
}
# Förväntat: ingen utskrift.

# 2. Ingen HTML-sida refererar JS-filer. Filen dist\client\_astro\client.*.js kommer från
# React-integrationen och laddas bara av sidor med öar; att den finns är inte ett fel,
# att den refereras är det.
Get-ChildItem dist\client -Recurse -Filter *.html | Select-String -Pattern '_astro/[^"]+\.js' | Select-Object Path, Line
# Förväntat: ingen utskrift.

# 3. HTML-storlek per sida, okomprimerat.
Get-ChildItem dist\client -Recurse -Filter *.html | Select-Object @{n='sida';e={$_.FullName.Replace((Get-Location).Path + '\dist\client','')}}, @{n='kB';e={[math]::Round($_.Length/1kb,1)}} | Sort-Object kB -Descending
# Förväntat: ingen innehållssida över 66 kB (60 plus sprite och ordmärke).

# 4. Typsnitt: exakt tre preload-länkar på startsidan, och inga andra fontfiler.
Select-String -Path dist\client\index.html -Pattern 'rel="preload" as="font"' | Measure-Object | Select-Object Count
```

Kalkylatorn (`prerender = false`) finns inte i `dist/client`. Den kontrolleras med `npm run preview` och `curl -s http://localhost:4321/rakna/avfuktare/ | Select-String '<script'`, samma förväntan. Lighthouse körs av teknisk ansvarig vid granskning; utvecklaren behöver inte köra det men får.

## 11. Vad som testas för hand innan leverans

1. `npm run dev`, öppna varje adress i avsnitt 8 på 375 px bredd. Ingen sidledsscroll utom inuti jämförelsetabellen.
2. Tabba genom startsidan och en kategorisida: "Hoppa till innehåll" först, fokusring synlig på allt, mobilmenyn öppnas och stängs med tangentbord.
3. Kalkylatorn: ladda utan query (standardvärden och resultat 10), skicka formuläret med 80 kvm, skicka med yta 2 (feltext under fältet), skicka med 400 (faktaruta "utanför"), avbocka uppvärmt (typ sorption).
4. `/go/woods-mrd20/?modul=avslut&sidtyp=guide&position=1` utan `.env` svarar 503 med `no-store`. Med `.env` och seed: 302 till en adress som börjar med `https://track.adtraction.com/t/t?a=ANNONS_ID` och slutar med `&url=https%3A%2F%2Fwww.proffsmagasinet.se%2F...`, och en rad i `klick` med `epi` satt.
5. Sätt `utkast: true` på `bygga-altan.mdx`, bygg: `/altan/bygga-altan/` saknas i `dist`, och `/altan/` listar den inte. Återställ.
6. Byt namn på `luftavfuktare.md` till `fukt.md` tillfälligt, bygg: bygget stoppar med kollisionsfelet. Återställ.

## 12. Definition of done

- [ ] Alla filer i avsnitt 1 till 4 finns med de props och signaturer som anges. Inga `any`, `npx astro check` utan fel.
- [ ] `npm run build` grönt utan `.env`, och alla adresser i avsnitt 8 finns i `dist/client`.
- [ ] Kontrollerna i avsnitt 10 ger förväntat resultat: noll script-taggar utöver JSON-LD, inga JS-referenser, ingen innehållssida över 66 kB, tre typsnittspreloads.
- [ ] Handtesterna i avsnitt 11 utförda, med avvikelser noterade i leveransen.
- [ ] Reklambandet visas på köpguide, projektguide, test, jämförelse, kategori och kalkylator, på problemguiden bara med produkt, aldrig på kunskap, hubbar, om-sidor och startsidan.
- [ ] Varje köpknapp har "Annonslänk" under sig och `rel="sponsored nofollow"`, och varje `/go/`-länk innehåller `modul`, `sidtyp` och `position`.
- [ ] Ingen `<a>` med `proffsmagasinet.se` eller `adtraction` i `dist/client` (`Select-String -Path dist\client\**\*.html -Pattern 'proffsmagasinet\.se|adtraction'` ger bara reklambandets text, inga `href`).
- [ ] Strukturerad data enligt avsnitt 6 på varje sidtyp; en testsida och en kategorisida klistrade i Googles Rich Results Test utan fel (teknisk ansvarig gör det vid granskning om utvecklaren saknar åtkomst).
- [ ] Formeln i `src/lib/kalkyl/avfuktare.ts` har varje konstant märkt med källa eller antagande, `scripts/test-kalkyl-avfuktare.mjs` är grön, och ingen annan fil räknar kapacitet.
- [ ] Tokens: inga hexvärden i komponenter, inga färgklasser utanför `global.css`, inga radier utom `sm` och `md`, ingen skugga utom `lyft` på mobilmenyn.
- [ ] Leverans enligt `.claude/agents/utvecklare.md`: filer skapade och ändrade, byggresultat, en rad om osäkerheter. Därefter granskning av teknisk ansvarig (kod, bygge, mått) och designansvarig (visuellt), och chefredaktören ersätter platshållartexterna innan lansering.
