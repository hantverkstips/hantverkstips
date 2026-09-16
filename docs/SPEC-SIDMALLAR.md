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
  title: string;                 // <title>. Rutten skriver "Sidans titel · Hantverkstips" själv
  description: string;
  reklam?: boolean;              // visar Reklamband. Standard false
  brodsmulor?: Brodsmula[];      // från src/lib/innehall.ts. Utelämnas på startsidan
  bred?: boolean;                // main får max-w-sidbredd i stället för lasbredd. Kategori, jämförelse, kalkylator
  noindex?: boolean;             // <meta name="robots" content="noindex">. 404 och admin
}
```

`sidtyp` sätts inte av layouten utan av rutten, överst i dess frontmatter: `Astro.locals.sidtyp = 'guide'`. Skälet är att slot-innehåll kan renderas före layoutens frontmatter.

### Head

I ordning: `charset`, `viewport`, `<title>`, `description`, `canonical` (som nu), `robots` om `noindex`, favicon, tre `<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/...">`, `<slot name="head" />`. Inga externa skript. Vercel Analytics läggs till vid lansering av teknisk ansvarig, inte nu.

### Body, uppifrån

1. `<a href="#innehall" class="hoppa">Hoppa till innehåll</a>`. Visuellt dold, synlig vid fokus (position absolute, `focus:not-sr-only`-mönstret), första fokuserbara elementet.
2. Inlinead ikonsprite: `import ikoner from '../assets/brand/riktning-1/ikoner.svg?raw'` och `<Fragment set:html={ikoner} />`. Filen har `style="display:none"` och `<symbol id="ikon-...">`.
3. `<header>`, 56 px hög på mobil, 64 från `lg`, 1 px `linje` under. Innehåll i `max-w-sidbredd`:
   - Ordmärket som länk till `/`: `import ordmarke from '../assets/brand/riktning-1/ordmarke-inline.svg?raw'`, `set:html` inuti `<a href="/" class="ordmarke" aria-label="Hantverkstips, till startsidan">`. Filen finns (designansvarig lade till den 2026-09-15), saknar `xmlns` med avsikt och sätter färger och typsnitt via `var(--color-blyerts)`, `var(--color-penna)`, `var(--color-tumstock)` och `var(--font-serif)`, så den följer tokens automatiskt. CSS: `.ordmarke svg { height: 1.75rem; width: auto }` på mobil, `2rem` från `lg`. Ordmärket är den enda länken till startsidan i sidhuvudet.
   - Desktop (`hidden lg:flex`): `<nav aria-label="Huvudmeny">` med länkarna i rad till höger: de publicerade hubbarna i `PELARE`-ordning (högst `MAX_HUBBAR_I_MENY`, fem), sedan Räkna själv `/rakna/` och Så testar vi `/om/sa-testar-vi/`. 15 px, `blyerts`, understrykning vid hover. Listan byggs av `publicerade('pelare')` (ändrat 2026-09-16, tidigare hårdkodad) enligt `docs/INNEHALLSARKITEKTUR.md` avsnitt 4.
   - Mobil (`lg:hidden`): `<details class="meny">` med `<summary>` som visar `<Ikon namn="meny" />` och ordet "Meny" (text, inte bara ikon), 44 px hög. När öppen: en lista absolut positionerad under sidhuvudet, full bredd, bakgrund `papper`, `shadow-lyft`, 48 px per rad. Innehåll: de fem posterna, en `<hr>` i `linje`, rubrik "Bäst i test" i etikett-stil följd av kategorisidorna (max fyra, från `publicerade('kategorier')`), sedan "Om Hantverkstips" till `/om/`. Ingen JavaScript, `<details>` sköter öppna och stäng. `summary::marker` döljs.
4. `<Reklamband />` om `reklam`.
5. `<Brodsmulor lista={brodsmulor} />` om `brodsmulor` finns, inuti `main`:s bredd, ovanför slot.
6. `<main id="innehall" tabindex="-1">` med `max-w-lasbredd` (eller `sidbredd` om `bred`), `px-4 sm:px-6 lg:px-8`, `py-8 lg:py-12`.
7. `<footer>` bakgrund `blyerts`, text `papper`, 14 px. Ordmärket överst i `papper`: samma inline-SVG, och eftersom den läser `var(--color-blyerts)` räcker det att sidfotens `.ordmarke` sätter `style="--color-blyerts: var(--color-papper)"`; tumstocksgult och pennstrecket behålls. Fyra grupper, en spalt på mobil och fyra från `lg`, i ordning:
   - **Ämnen**: alla publicerade hubbar, i `PELARE`-ordning. Data: `publicerade('pelare')` matchad mot `PELARE` för namn. En pelare utan publicerad hub listas inte.
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

Innehåll, i ordning: bild, etikett (om satt, `penna`, etikett-stil), H3 med `marke` och `modell` (eller `namn` om de saknas), `forVem`, nyckelvärden (de första fyra i kategorifilens `specs` som produkten har värde för, som `<dl>` med etikett och värde plus enhet, tabellsiffror), pris och köpknapp, länk "Läs testet" (sekundär stil, om test finns).

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

### 2.9 `Verktygskort.astro`

`interface Props { kalkylator: string }`. Slår upp i `KALKYLATORER` (avsnitt 3.3); okänd slug ger byggfel (`throw new Error`). Ett kort med ram: `<Ikon namn="kalkylator" />` och etiketten "Räkna själv" på samma rad i etikett-stil, rubriken (H3) som länk till `/rakna/[slug]/`, en rad (`rad`), länktexten "Till kalkylatorn" som en textlänk under. Inget diagram i fas 1. En sida får aldrig ha två verktygskort; det är en granskningsregel, inte något komponenten kontrollerar.

### 2.10 `BorjaHar.astro`

Inga props. Data: `publicerade('pelare')` sorterad i `PELARE`-ordning. H2 "Börja här" via Pennstreck, sedan en rad per hub: `<Ikon namn={pelare.ikon} />` och H3 med `PELARE.kort` som länk till `/[slug]/`, `ingress` som ett stycke, `viktiga` som en kort lista med länkar. Rader skiljs med 1 px `linje`. Inga kolumner, inga kort.

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
export interface Kalkylator { slug: string; namn: string; rad: string; sasong: [number, number] /* månad från, till, 1 till 12 */; kategori?: string }
export const KALKYLATORER: Kalkylator[] = [
  { slug: 'avfuktare', namn: 'Hur stor avfuktare behöver du?', rad: 'Yta, takhöjd och fuktnivå ger liter per dygn, och maskinerna som klarar det.', sasong: [8, 11], kategori: 'luftavfuktare' },
];
export function sasongensKalkylator(manad: number): Kalkylator;   // första vars sasong täcker månaden, annars KALKYLATORER[0]
```

Fler kalkylatorer läggs till här och som `src/pages/rakna/[slug].astro`-filer. Sidfoten och `/rakna/` läser listan.

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

`<title>` skrivs `${title} · Hantverkstips` överallt utom startsidan där det är `Hantverkstips · ${description-kortform}` (chefredaktören skriver; tills dess "Hantverkstips, bygg och renovera utan att köpa fel").

### 4.1 `src/pages/index.astro`

Data: `getEntry('sidor', 'startsida')` (H1 = `title`, stycket = `<Content />`), `sasongensKalkylator(new Date().getMonth() + 1)`, `publicerade('pelare')`, "just nu" via `getEntry(justNu.samling, justNu.id)`, `publicerade('kategorier')` med `hamtaProdukt(val[0].produkt)` per kategori, de sex senaste av guider + kunskap + tester + jamforelser sorterade på `publicerad` fallande, `KALKYLATORER`.

Block i ordning, enligt `docs/INNEHALLSARKITEKTUR.md` avsnitt 5:

1. Öppning: H1 i `font-rubrik`, vänsterställd, läsbredd. Stycket från `startsida.mdx` i ingress-storlek; länkarna ligger i texten. Från `lg` i vänster två tredjedelar med verktygskortet i höger tredjedel.
2. `<Verktygskort kalkylator={sasong.slug} />`.
3. `<BorjaHar />`.
4. Just nu: etikett (`typEtikett`), H2 (Pennstreck) som länk, `description` som ingress, meta med datum. Bild från `entry.data.bild` via `<Image>` 3:2 om den finns, annars ingen bild. Utan `justNu` i frontmatter utgår blocket.
5. Bäst i test just nu: H2 "Bäst i test just nu". En rad per kategori med `val[0]`: kategorinamn (H3 som länk till `/[kategori]/`), "Vårt val: {produktnamn}" och pris i `blyerts-2` med `formateraPris`, länken "Alla vi testat". Ingen köpknapp, ingen bild. Kategori vars produkt saknas i databasen visar raden utan pris. Inga kategorier: blocket utgår.
6. Senaste guider och tester: H2, sex rader med etikett, H3 som länk, `description`, datum. En spalt, två från `lg`.
7. Räkna själv: H2, `<ul>` med varje kalkylator: namn som länk, `rad`.
8. Så jobbar vi: H2, `<Content />`-fritt block med hårdkodad platshållartext i rutten tills chefredaktören levererar: "Vi testar själva när vi kan och granskar tillverkarnas data när vi inte kan. Så testar vi. Sajten finansieras av annonslänkar, och hur det påverkar det vi skriver står på Så tjänar vi pengar." med de två länkarna.

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

**`vyer/PelarHub.astro`.** `sidtyp` sätts inte (inga knappar). `reklam={false}`. Brödsmulor: Hantverkstips / {kort}. H1 `title`, `description` visas inte (den är meta), `<Content components={{ h2: Pennstreck, Faktaruta, Varning, Verktygskort, Markering }} />`. Efter innehållet H2 "Bäst i test" med länkar till kategorier vars `pelare` innehåller huben (från `publicerade('kategorier')`), sedan H2 "Alla sidor i {kort}" med en lista av alla publicerade guider och kunskap med `pelare === rot`, sorterade på titel; den listan är säkerheten mot föräldralösa sidor, huben ovanför är den handskrivna. Strukturerad data: `artikel()` med författare redaktionen.

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

Strukturerad data: `lista()` med produkterna i tabellordning (namn, url = testsidan om test finns, annars kategorisidan med `#`-ankare till produktens H2).

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
3. `<Content components={komponenter} />` där `komponenter` beror på typ (tabell nedan). Skribenten lägger `<Faktaruta variant="kortsvar">` överst själv; mallen tvingar inte.
4. Bild: om `bild` finns, `<Image src={bild} alt={bildtext ?? ''} widths={[375, 704]} sizes="(min-width: 1024px) 704px, 100vw" />` med `<figcaption>`. Placeringen "under Kort svar" löses så: vyn renderar bilden före `<Content>` om innehållet inte börjar med en Faktaruta, annars direkt efter första H2:s föregångare... det kräver att vyn läser MDX-trädet, vilket vi inte gör. Beslut: bilden renderas av vyn direkt efter metaraden, före `<Content>`. Skribenten skriver "Kort svar" som första element i brödtexten och bilden hamnar då ovanför det. Designansvarig får avgöra om det håller; alternativet är att skribenten placerar bilden själv med `![]()` i MDX, och då utelämnas `bild` i frontmatter.
5. `<Innehallsforteckning rubriker={headings depth 2} />` mellan bild och innehåll; på desktop i höger spalt.
6. Typspecifika block efter innehållet (tabell).
7. Källor: H2 "Källor" (Pennstreck) och `<ol>` från `kallor` med länk om `url` finns. Tom: utgår.
8. Relaterat: H2 "Läs vidare", tre till fyra länkar: kategorisidan om `kategori` finns, huben, och de två senaste andra artiklarna i samma pelare. Färre än två: utgår.
9. `<Forfattarruta forfattare publicerad uppdaterad />`.

| Typ | `sidtyp` | `reklam` | Komponenter till `<Content>` | Block efter innehållet |
|---|---|---|---|---|
| kopguide | guide | alltid true | h2, Kopknapp, Produktkort, Jamforelsetabell, Faktaruta, Varning, Verktygskort, Markering | H2 "Produkterna vi nämner": ett kompakt Produktkort per post i `produkter` med `forVem` och `etikett`, `modul="avslut"`. Tom lista: utgår |
| problemguide | problemguide | `produkter.length > 0` | samma som kopguide | inget. Produkten står i texten där diagnosen pekar på den |
| projektguide | projektguide | `behover?.verktyg.length > 0 || produkter.length > 0` | samma som kopguide | `<DetHarBehoverDu verktyg material />` från `behover` |
| kunskap | kunskap | `produkter.length > 0` | h2, Faktaruta, Varning, Verktygskort, Markering, Illustration | H2 "Produkterna vi nämner" som i köpguiden när `produkter` inte är tom ("en produkt per typ, sist", DESIGN 5.3). Tom lista: inget, och inget reklamband |

Kunskap får inte `Kopknapp` eller `Produktkort` i brödtexten; skriver en innehållsfil ändå `<Produktkort>` ger MDX ett byggfel ("Expected component Produktkort to be defined"), vilket är avsikten. Produkterna på en kunskapssida kommer bara från frontmatterns `produkter` och renderas av mallen sist.

Strukturerad data: `artikel()` med `url = artikelUrl(entry)`, författarnamn från `forfattare`-samlingen, `bildUrl` om bild finns (absolut adress från `<Image>`-resultatet eller `bild.src`).

Desktop: samma tvåspaltsgrid som kategorisidan. Innehåll i läsbredd, tabeller och diagram får `lg:col-span-2`.

### 4.4 `src/pages/tester/[slug].astro`

`getStaticPaths` från `publicerade('tester')`. `Astro.locals.sidtyp = 'test'`. `reklam={true}`. Data: `hamtaProdukt(produkt)`, `getEntry('kategorier', kategori)`, `hamtaProdukter(alternativ.map(a => a.produkt))`, guider och kunskap med samma `kategori` (för "Relaterat"), `hamtaButik()`. Brödsmulor: Hantverkstips / {kategorinamn} (`/[kategori]/`) / {title}.

Ordning:

1. Etikett "Test" eller "Granskning" i etikett-stil, `penna`. H1 `title`. Meta: "Testad {testad}" (bara test), "Publicerad", "uppdaterad", "Av".
2. Omdömesblock: kort med ram. Bild från produkten (4:3) överst på mobil, 40 procent till vänster från `lg`. Etikett om produkten är `val[0]` i kategorifilen ("Vårt val"). `omdome` som ett stycke i ingress-storlek. Tabell med `matningar`: kolumnerna "Vi mätte" och "Tillverkaren uppger", enhet i radrubriken, tomt värde skrivs "ej mätt" (kolumnen vi) eller "ej angivet". På granskningar döljs kolumnen "Vi mätte" helt. `<Faktaruta variant="kopom" kopOm kopInteOm />`. Pris och Kopknapp `modul="kort_full"`.
3. `<Innehallsforteckning />` från headings.
4. `<Content components={{ h2: Pennstreck, Faktaruta, Varning, Verktygskort, Markering, Kopknapp, Produktkort, Jamforelsetabell }} />`. Enligt `docs/AFFILIATE.md` ska inga knappar ligga mellan omdömet och avslutet; att Kopknapp ändå är tillåten i texten är för att granskaren ska kunna se och stryka, inte för att den ska användas.
5. H2 "Alternativ" (Pennstreck): ett kompakt Produktkort per post i `alternativ`, med `etikett = varfor`. Tom: utgår.
6. H2 "Specifikationer": `<table>` två kolumner (egenskap, värde) från kategorifilens `specs` och produktens `specs`. Alla specs, inte bara fyra. "ej angivet" för saknade.
7. H2 "Så testade vi" om brödtexten inte redan har en H2 med den texten (kontrollera `headings`); då renderas en kort standardtext "Metoden i sin helhet står på sidan Så testar vi." med länk. Källor från `kallor`.
8. Avslutande Kopknapp med pris, `modul="avslut"`.
9. Relaterat, Författarruta som i artikeln.

Strukturerad data: `produkt()` med `etikett`, och `brodsmulor` via layouten. Om produkten saknas i databasen renderas sidan ändå med "Produktdata saknas i bygget" i omdömesblocket, utan Product-markup.

### 4.5 `src/pages/jamforelser/[slug].astro`

`publicerade('jamforelser')`. `Astro.locals.sidtyp = 'jamforelse'`. `reklam={true}`. `bred={true}`. Brödsmulor: Hantverkstips / {kategorinamn} / {title}. Ordning: etikett "Jämförelse", H1, meta, `<Innehallsforteckning />`, `<Jamforelsetabell produkter kategori />` direkt efter metaraden (tabellen är svaret), `<Content>` med samma komponenter som köpguiden, H2 "Produkterna vi nämner" som i köpguiden, källor, relaterat, författarruta. Strukturerad data: `artikel()`.

### 4.6 `src/pages/rakna/index.astro`

Statisk. Brödsmulor: Hantverkstips / Räkna själv. H1 "Räkna själv", ett stycke platshållare ("Kalkylatorerna räknar på riktiga produktdata. Resultatet är en marginal, inte ett exakt svar."), sedan en rad per post i `KALKYLATORER`: H2 (Pennstreck) som länk, `rad`. `reklam={false}`.

### 4.7 `src/pages/rakna/avfuktare.astro`

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

Desktop: kortet 44 rem brett, formulär till vänster och resultat till höger i två lika spalter, produkterna i rad om tre under. Strukturerad data: ingen utöver brödsmulor (kalkylatorn är ett verktyg, inte en artikel). `<title>` "Avfuktarkalkylator: hur stor avfuktare behöver du? · Hantverkstips".

### 4.8 `src/pages/om/index.astro` och `src/pages/om/[slug].astro`

`index.astro` renderar `getEntry('sidor', 'om')`. `[slug].astro` har `getStaticPaths` från `publicerade('sidor')` utan `om` och `startsida`. Båda: brödsmulor Hantverkstips / {title} (index) respektive Hantverkstips / Om (`/om/`) / {title}. H1, meta "Uppdaterad {datum}" om den finns, `<Content components={{ h2: Pennstreck, Faktaruta, Varning, Markering }} />`. `reklam={false}`. Strukturerad data efter `strukturdata`: `Organization` ger `organisation()`, `Article` ger `artikel()` med redaktionen, `ingen` ger inget. Gemensam vy `vyer/Sida.astro` så att de två rutterna är tio rader var.

### 4.9 `src/pages/forfattare/[slug].astro`

`publicerade('forfattare')`. Brödsmulor: Hantverkstips / Författare (ingen länk, det finns ingen listsida) / {namn}. H1 `namn`, rad "{yrke} sedan {sedan}" eller `yrke`, bild 160 × 160 (`<Image>`, radie `sm`) om den finns, `<Content />` (presentationen), sedan H2 "Sidor av {namn}": alla publicerade guider, kunskap, tester och jämförelser med `forfattare === slug`, sorterade på `publicerad` fallande, med etikett och länk. Tom: "Inga publicerade sidor än." `reklam={false}`. Strukturerad data: `person()`.

### 4.10 `src/pages/404.astro`

Statisk. `noindex={true}`. H1 "Sidan finns inte", ett stycke ("Adressen kan ha ändrats. Börja från en av de här sidorna."), länkar till publicerade hubbar och `/rakna/`. Vercel serverar `dist/client/404.html` för okända adresser.

## 5. Ruttkollisioner, sammanfattning

| Sökväg | Fil | Hur den vinner |
|---|---|---|
| `/` | `index.astro` | statisk |
| `/fukt/`, `/luftavfuktare/` | `[rot]/index.astro` | en rutt, `getStaticPaths` avgör hub eller kategori, kollision ger byggfel |
| `/fukt/fukt-i-kallaren/` | `[rot]/[slug].astro` | två dynamiska segment, kolliderar inte med `[rot]/index.astro` |
| `/tester/x/`, `/jamforelser/x/`, `/rakna/x/`, `/om/x/`, `/forfattare/x/`, `/go/x/` | statiska mappar | Astro prioriterar statiska segment före dynamiska, så `tester` når aldrig `[rot]` |
| `/rakna/`, `/om/` | `rakna/index.astro`, `om/index.astro` | statiskt segment vinner över `[rot]/index.astro` |

Konsekvens: ingen pelare eller kategori får heta `tester`, `jamforelser`, `rakna`, `om`, `forfattare`, `go`, `admin`; kontrollen ligger i `RESERVERADE_ROTSLUGS`. Och en artikel-slug får inte heta `index`.

## 6. Strukturerad data per sidtyp

| Sida | Objekt | Var |
|---|---|---|
| Alla med brödsmulor | `BreadcrumbList` | `Bas.astro` |
| Startsida, `/om/` | `Organization` | rutten |
| Guide, kunskap, jämförelse, om-sida med `Article` | `Article` med `author` Person och `publisher` Organization | rutten |
| Test | `Product` med `AggregateOffer`; `review` bara på `etikett: test` | rutten |
| Kategori | `ItemList` | rutten |
| Författare | `Person` | rutten |
| Kalkylator, `/rakna/`, 404 | bara `BreadcrumbList` | |

Rutten renderar `<StrukturData data={...} slot="head" />` inuti `<Bas>`. `FAQPage` byggs inte nu.

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
| pelare | `fukt.mdx`, `inomhus.md`, `verktyg.mdx` (publicerade), `altan.mdx` (utkast till februari) | PelarHub, menyn, sidfoten, BorjaHar |
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
