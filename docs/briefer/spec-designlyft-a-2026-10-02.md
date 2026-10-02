# Spec: designlyftet fas A, startsida, hubbar och räkna-index

UX och bygge, 2026-10-02. Underlaget är Christians godkända skisser (Design-artefakten, fem artboards) och de omskrivna `docs/DESIGN.md` (avsnitt 3, 4, 5.1, 5.2, 5.8.1, 6, 8, bilaga A) och `docs/SPEC-SIDMALLAR.md` (avsnitt 0, 1, 2, 4.1, 4.2, 4.6). Läs DESIGN.md avsnitt 4 till 6 innan du börjar; den här specen säger hur, de säger vad. Gissar du är specen fel skriven: skriv frågan i leveransen och bygg resten.

Fas B (artikel, kategorisida) och fas C (räknarsidorna) ingår inte. Rör inte `vyer/Artikel.astro`, `vyer/Kategorisida.astro`, `Produktkort`, `Kopknapp`, `Faktaruta`, `Kortsvarstext`, `Faq`, `Innehallsforteckning`, `Forfattarruta`, någon fil under `src/pages/rakna/` utom `index.astro`, eller någon fil under `src/components/kalkyl/`.

## 0. Regler för hela uppdraget

- Noll klient-JS. Inga `client:`-direktiv, inga `<script>` utom JSON-LD, inga nya beroenden.
- Tokens, inga hexvärden i komponenter. Inga godtyckliga värden i hakparentes utom `grid-template-columns` och de som redan finns i filen du ändrar.
- **Budgeten.** Ett utseende som står på tre eller fler element på samma sida blir en komponentklass i `@layer components` i `global.css`, inte en rad verktygsklasser på varje element. Skalet (sidhuvud, ämnesrad, sidfot) får inte växa med mer än 300 byte per sida. Verktygskortet i variant bild får inte väga mer än det gamla kortet plus 250 byte. Mät före och efter (avsnitt 9).
- All ny publik text är `TEXT SAKNAS` i koden, med nyckeln i en kommentar på samma rad, så att den går att hitta: `fras: 'TEXT SAKNAS', // sasong.10.fras`. Nycklarna och var de står finns i `docs/briefer/texter-designlyft-2026-10-02.md`. Befintlig text flyttas ordagrant, skrivs aldrig om. `npm run kontrollera` blir rött på `TEXT SAKNAS`; det är väntat, och enda felet som får finnas.
- Handskrift används inte: skissernas Caveat-rader (under heron, vid hubbens bild, i "Prova direkt") byggs inte.
- Kör inte `npm run build`. Kör `npx astro check --minimumSeverity error`, alla räknartester, `npm run kontrollera` och mätningen i avsnitt 9 i dev.

## 1. Tokens och komponentklasser (`src/styles/global.css`)

I `@theme`, utöver det som finns:

```css
--color-ruta: #faf6ec;
--radius-sm: 0.25rem;            /* var 0.125rem */
--radius-full: 9999px;
--shadow-kort: 2px 3px 0 var(--color-papper-2);
--shadow-kort-hover: 2px 3px 0 var(--color-linje);
--shadow-block: 3px 4px 0 var(--color-papper-2);
--text-h1-xl: 3.375rem; --text-h1-xl--line-height: 1.1; --text-h1-xl--font-weight: 600;
--text-kortrubrik-xl: 2rem; --text-kortrubrik-xl--line-height: 1.2;   /* var 1.5rem/1.25 */
--text-siffra-xl: 5.25rem; --text-siffra-xl--line-height: 0.95; --text-siffra-xl--font-weight: 600;
```

Uppdatera kommentarerna vid radier och skuggor så att de säger vad DESIGN.md avsnitt 4 säger. `shadow-lyft` står kvar.

Komponentklasser i `@layer components`, med de här värdena (ordningen inom lagret: efter `.artikelkort`-blocket):

| Klass | Regler |
|---|---|
| `.sidram` | `width: 100%; max-width: var(--container-sidbredd); margin-inline: auto; padding-inline: 16px;` 24 px från 40rem, 32 px från 64rem |
| `.band` | `background-color: papper-2; border-block: 1px solid linje;` |
| `.kort` | `background-color: papper; border: 1px solid linje; border-radius: radius-sm; box-shadow: shadow-kort; transition: box-shadow 150ms;` och `.kort:has(.kortlank):hover { box-shadow: shadow-kort-hover }`, transition av vid `prefers-reduced-motion` |
| `.blad` | som `.kort`, men `background-color: ruta; background-image: repeating-linear-gradient(to bottom, transparent 0 27px, color-mix(in srgb, var(--color-linje) 65%, var(--color-ruta)) 27px 28px);` |
| `.yta` | `background-color: papper-2; border: 1px solid linje; border-radius: radius-sm;` ingen skugga |
| `.pappersruta` | `background-color: ruta; padding: 12px; border-bottom: 1px solid linje;` och `.pappersruta > img { display: block; width: 100%; height: auto; aspect-ratio: 5 / 3; object-fit: contain; }` |
| `.chip` | `display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding-inline: 14px; border: 1px solid blyerts-2; border-radius: radius-full; background-color: papper-2; color: blyerts; font-size: text-liten; line-height: 1.2; text-decoration: none;` hover (inom `(hover: hover)`): `border-color: blyerts; text-decoration: underline; text-decoration-color: penna; text-underline-offset: 3px;` |
| `.chip-gul` | `display: inline-flex; align-items: center; min-height: 32px; padding-inline: 12px; border-radius: radius-full; background-color: tumstock; color: blyerts; font-size: text-finstilt; font-weight: 700;` aldrig på en länk |
| `.knapp` | `display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding-inline: 22px; border: 2px solid penna; border-radius: radius-md; color: penna; background-color: transparent; font-weight: 700; font-size: 1.0625rem; text-decoration: none; transition: background-color 150ms, color 150ms, border-color 150ms;` hover: `background-color: blyerts; border-color: blyerts; color: papper;` |
| `.knapp-fylld` | `background-color: penna; color: papper;` (står tillsammans med `.knapp`) |
| `.symbol` | `display: inline-flex; flex-shrink: 0; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: radius-full; background-color: tumstock; color: blyerts;` och `.symbol svg { width: 26px; height: 26px }` |
| `.steg` | på en `<ol>`: `list-style: none; padding: 0; counter-reset: steg;` och `.steg > li { counter-increment: steg; display: flex; align-items: center; gap: 12px; }`, `.steg > li::before { content: counter(steg); flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: radius-full; background-color: tumstock; color: blyerts; font-weight: 700; font-size: 0.9375rem; }` |
| `.rubrikrad` | `display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; column-gap: 24px; row-gap: 4px; margin-bottom: 20px;` och `.rubrikrad > .pennstreck { margin: 0 }`. Varianten `.rubrikrad-rad`: `justify-content: flex-start; align-items: baseline; column-gap: 18px;` med raden i blyerts-2 |

Rör inte `.linjerat`, `.produktkort`, `.kopknapp*`, `.falt`, `.val`: de hör till fas B och C.

## 2. Ikonen penna

`src/assets/brand/riktning-1/ikoner.svg`: en ny `<symbol id="ikon-penna">` i samma stil som de andra (24 × 24, `stroke-width="1.75"`, runda ändar, `currentColor`): en snickarpenna snett från nere till vänster upp till höger, med en kort spets och en linje för den vässade delen. Ungefär `M4.5,19.5 L5.5,15 L15.5,5 Q17,3.6 18.5,5 L19,5.5 Q20.4,7 19,8.5 L9,18.5 Z` och `M13.5,7 L17,10.5` och `M5.5,15 L9,18.5`, med lätt darr enligt filens kommentar. Uppdatera antalet i kommentaren (22 ikoner). Lägg `'penna'` i `IkonNamn` i `Ikon.astro`. Rendera den på 24 och 64 px och lägg skärmdumparna i leveransen.

## 3. Layouten (`src/layouts/Bas.astro`)

**Ny prop `galleri?: boolean`.** Med den får `<main>` bara `flex-1 w-full` (ingen `max-w`, ingen `px`, ingen `py`), och sidfoten får `mt-0` i stället för `mt-12 lg:mt-24`. Sidan sköter sina sektioner med `.sidram` och `.band`. Brödsmulorna renderas av vyn (`brodsmulorIVy`) där sidan har brödsmulor. Startsidan, `PelarHub` och `rakna/index.astro` använder `galleri`.

**Ämnesraden i chips.** Bara CSS och ett attribut. `.amnesrad li:not(.ml-auto) a` får chipens utseende (samma värden som `.chip`, men ytan `papper`), `ul` får `gap-2 py-1`, ikonen står kvar i 20 px. Den aktuella pelaren: Bas räknar ut den ur `Astro.url.pathname` (första segmentet lika med en publicerad hubs slug). Hubben själv får `aria-current="page"`, en sida under hubben `aria-current="true"`, och CSS ger `a[aria-current]` ytan och ramen `tumstock`. Ingen ny klass på elementen. Mobilmenyn är oförändrad.

**Sidfoten.** Rutnätet blir `lg:grid-cols-5`. Första spalten: ordmärket (flyttas in från ovanför rutnätet), en rad i `text-linje` (`sidfot.rad`, TEXT SAKNAS) och "© {år} Hantverkstips" i `text-finstilt text-linje` (flyttas upp från sista raden, som tas bort). Spalternas rubriker får `text-linje`. Länklistorna är oförändrade; vilka räknare och ämnen som listas är SEO och GEO-agentens beslut och ändras inte här.

## 4. Komponenter

### 4.1 `Artikelkort.astro`

- Elementet får `class="artikelkort kort"` och tappar `border border-linje rounded-sm bg-papper`; `overflow: hidden` flyttas in i `.artikelkort`.
- Bilddelen blir en `.pappersruta` (för SVG `<img>` direkt i rutan; för raster `<Image>` med samma klass på bilden). `object-cover` och `aspect-[5/3]` på bilden utgår, rutans regel sköter dem. Det tomma bladet (`.plats-blad`) står i rutan med `aspect-ratio: 5/3`, bakgrunden blir `ruta` med linjerna från `.blad`, och marginallinjen utgår.
- Nya props: `visaBeskrivning?: boolean` (standard true), `visaMeta?: boolean` (standard true), `storBild?: 'halv' | 'smal'` (standard `'halv'`).
- Textdelen: `p-4 sm:p-5`, 6 px mellan etikett, rubrik och beskrivning (`mt-1.5`).
- Variant `stor`: från `lg` ett rutnät, `lg:grid-cols-2` vid `'halv'` och `lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]` vid `'smal'`. Pappersrutan får `p-5`, ingen bottenlinje från `lg` utan en högerlinje. Texten `lg:p-9 lg:justify-center`, etiketten i `text-penna`, rubriken `text-h2 lg:text-kortrubrik-xl`, beskrivningen `text-brod lg:text-ingress-lg` utan radklipp. På mobil: bilden överst.
- `kompaktPaMobil`: under 640 px pappersrutan som en 120 px bred ruta till vänster (`p-2`, högerlinje i stället för bottenlinje), ingen beskrivning. Oförändrat beteende i övrigt.
- Hover och fokus som förut (`.kortlank`), plus skuggans färg via `.kort`.

### 4.2 `Artikelrutnat.astro`

`storForsta` och `prioriteraForsta` tas bort (startsidan renderar det stora kortet själv; kontrollera att ingen annan anropare använder dem, `Guidegalleri` gör det inte). Nya props: `kolumner?: 3 | 4` (standard 3; ger `lg:grid-cols-3` eller `lg:grid-cols-4`), `visaBeskrivning?`, `visaMeta?`, som skickas vidare. Mellanrum `gap-4 lg:gap-5`. `mt-4` utgår: rubrikraden ovanför sätter luften.

### 4.3 `Verktygskort.astro`

Ny prop `variant?: 'bild' | 'tal' | 'text' | 'liten'`, standard `'bild'`. `iRutnat` står kvar (ingen `my-8`). Hela kortet är klickbart med `.kortlank` på namnets länk; "Till räknaren" är inte längre en egen länk utan en `<span aria-hidden="true">` i fetstil `text-penna`, eftersom namnet redan är länken. Klassen på roten är `kort vkort` (+ `vkort-[variant]`), och allt utseende sitter i `.vkort*` i `global.css`.

- `bild`: bilden ur `verktygsVarumarkesbild(slug) ?? verktygsillustration(slug)` som `<img alt="" loading="lazy" decoding="async" width height>`, 120 px bred (140 från `lg`), till vänster med 20 px till texten, 20 px innermarginal (24 från `lg`). Texten: etiketten "Räkna själv · {pelarens korta namn}" (pelaren som i dag i `rakna/index.astro`: första i `k.pelare`), namnet i `font-serif text-kortrubrik lg:text-kortrubrik-lg` som `.kortlank`, `rad` i `text-liten text-blyerts-2`, sist "Till räknaren". Utan bild: samma kort utan bilden.
- `tal`: ingen bild, 24 px innermarginal. Etiketten (pelarens korta namn), namnet som ovan, sedan en rad med talet ur `korttal(slug)` i `font-serif text-siffra` och villkoret i `text-liten text-blyerts-2` bredvid, baslinjejusterade, radbrytning tillåten. Utan tal: `k.svar` i `font-serif text-h2`.
- `text`: som `bild` utan bild. `/amnen/` byter till den (rad 210).
- `liten`: bilden 72 px, etiketten "Räkna själv", namnet i `font-serif text-h3` (19 px). Byggs nu men används först i fas B.

Rubriken förblir ett `<p>` (kortet kan stå före sidans första H2).

### 4.4 `Amnesrad.astro`

Ingen H2 och ingen "Alla ämnen" i komponenten längre: startsidans rubrikrad bär båda. Kvar är `<nav aria-label="Ämnen">` med rutnätet: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5`. Regeln för det sista udda kortet utgår. Antalet per pelare räknas som i dag; pelaren med flest (första i `PELARE`-ordning vid lika) är `stor`: `<li class="col-span-2">`, kortet får `.amneskort-stor` (ytan `ruta`) och etiketten tillägget ` · {TEXT start.amnen.storst}`.

Kortet: `<div class="kort artikelkort amneskort">` med `<span class="symbol"><Ikon namn storlek={26} /></span>` och en `<div>` med etiketten, namnet (`pelare.namn`, inte `kort`) som `.kortlank` och `pelare.rad`. `.amneskort`: `display: flex; flex-direction: column; gap: 12px; height: 100%; padding: 16px;` från 64rem `flex-direction: row; align-items: flex-start; gap: 16px; padding: 20px;`, och barnens typografi via `.amneskort p`-regler (etikett: `text-etikett` versaler `blyerts-2`; namnet: serif `text-kortrubrik`/`-lg`, 4 px över; raden: `text-liten blyerts-2`, 4 px över). Pelare utan hub: `.amneskort-kommer` i stället för `.kort artikelkort`: ytan `papper-2`, 1 px `linje`, radie `sm`, ingen skugga, text `blyerts-2`, `.symbol` med ytan `papper` och ikonen `blyerts-2`, etiketten "{grupp} · Kommer" som i dag.

### 4.5 `Kortgrupp.astro` och gruppdatan

Flytta urvalet ur komponenten till `src/lib/kort.ts`: `hubGrupper(pelare: PelareSlug): Promise<{ id: Grupp; kort: KortData[]; kalkylatorer: string[] }[]>` med samma regler som i dag, i ordningen hitta-felet, valj-ratt, gor-det-sjalv, rakna, och utan tomma grupper. `PelarHub` anropar den en gång och räknar antalen ur resultatet (dagens dubbla urval i `PelarHub` tas bort). `Kortgrupp` blir en ren renderare med props `{ grupp: Grupp; kort: KortData[]; kalkylatorer: string[] }`: för `rakna` ett rutnät `grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5` med `Verktygskort variant="bild" iRutnat`, annars `Artikelrutnat` med `kolumner={kort.length >= 4 ? 4 : 3} visaMeta={false}`. `Astro.locals.pelare` behövs inte längre av Kortgrupp; ta bort kontrollen där och i `kontrollera-innehall.ts` bara om den inte längre har något att kontrollera (hubfilerna har ingen `<Kortgrupp>`), och skriv i leveransen vad du gjorde.

### 4.6 `Platslista.astro`

Listan står i ett kort: `<ul class="kort platslista">`. `.platslista` får `padding: 8px` och tappar sin egen `border-top`; `li` får `padding: 14px 16px`, `border-top: 1px solid linje` utom första (`li + li`), `border-bottom` utgår, och `background-color: papper-2` vid hover. Från 40rem är `li` ett rutnät `grid-template-columns: 12rem minmax(0, 1fr); column-gap: 16px; align-items: baseline;` så att etiketten står i en spalt till vänster. Fokusringen runt raden står kvar.

### 4.7 Nya små komponenter

- `Rubrikrad.astro`: `{ id: string; rubrik: string; lank?: { text: string; href: string }; rad?: string }`. Renderar `<div class="rubrikrad">` (eller `rubrikrad rubrikrad-rad` med `rad`) med `<Pennstreck id utanLuft>` och länken (`.lank`, `min-h-11 inline-flex items-center`) eller raden (`<p class="m-0 text-blyerts-2">`).
- `Portratt.astro`: `{ storlek: 40 | 120 }`. En `<span>` med `aria-hidden="true"`, radie `full`, ytan `papper-2`, 1 px `linje`, `Ikon namn="penna"` i 22 respektive 64 px `text-blyerts`, centrerad.

### 4.8 `Kalkylator.astro`

Bara två nya props, utseendet i övrigt är fas B: `etikett?: string` (standard "Räkna själv", ersätter texten i etikettraden) och `blad?: boolean` (standard false). Med `blad` får roten `blad p-5 lg:p-6` i stället för `linjerat my-8`, och etikettraden får `text-penna` och ingen ikon. Inget annat ändras.

## 5. Data

### 5.1 `src/lib/sasong.ts` (ny)

```ts
export interface Sasongspost { fras: string; lank: string; href: string }
export const SASONG: Record<1|2|3|4|5|6|7|8|9|10|11|12, Sasongspost>; // alla tolv: TEXT SAKNAS i fras, lank och href, nyckel sasong.[månad].*
export function byggmanad(nu?: Date): number;   // månaden i Europe/Stockholm, 1–12
export function manadsnamn(m: number): string;  // "januari" … "december", gemener, via Intl sv-SE
export function iSasong(sasong: [number, number], m: number): boolean; // tål [11, 2]
export function sasongsrad(m: number): { fore: string; lank: string; efter: string; href: string };
```

`sasongsrad` delar frasen vid första förekomsten av `lank` och kastar ett fel med månaden i texten om `lank` inte finns i `fras`. Ingen Astro-import, så att `kontrollera-innehall.ts` kan läsa `SASONG` och kontrollera varje `href` med samma kontroll som interna länkar i innehållet (finns sidan, avslutande snedstreck, inte utkast). Lägg in det i kontrollskriptet.

### 5.2 `src/lib/kalkyl/korttal.ts` (ny)

```ts
export interface Korttal { tal: string; villkor: string }
export function korttal(slug: string): Korttal | undefined;
```

För varje räknare vars sida vid standardvärdena (ingen adress) visar ett tal i `text-siffra` i resultatspalten: talet är det första sådana talet, formaterat precis som sidan formaterar det (samma funktion och samma enhet; läs sidans kod), räknat med formelmodulens `STANDARD` och `rakna[Slug]`. Saknar sidan ett tal vid standardvärdena, eller är det första stora värdet ett ord, finns ingen post. `villkor` är TEXT SAKNAS, nyckel `korttal.[slug]`. Ingen Astro-import. Lista i leveransen vilka slugs som fick en post och talet för var och en; jag jämför med sidorna.

### 5.3 `src/lib/kalkyl/grupper.ts` (ny)

```ts
export interface Raknegrupp { id: 'fukt' | 'el' | 'kostnad' | 'inne' | 'ute'; rubrik: string; rad: string; slugs: readonly string[] }
export const RAKNEGRUPPER: readonly Raknegrupp[];
```

I den här ordningen och med de här räknarna: `fukt` daggpunkt, avfuktare, kallare, elkostnad; `el` u-varde, rotavdrag; `kostnad` kok-kostnad, badrum-kostnad, takbyte, dranering; `inne` innervagg, gipsplugg, gipsskruv, kvadratmeter, trappa; `ute` bygglov-altan, grannemedgivande, altan, kontrollplan, mala-ute, fasadyta, takavvattning. `rubrik` och `rad` är TEXT SAKNAS (`grupper.[id].rubrik`, `grupper.[id].rad`; en tom `rad` renderas inte). En kontroll i modulen (körs vid import) kastar ett fel om en slug i registret saknas i grupperna, står i två, eller om en grupp nämner en slug som inte finns.

### 5.4 `src/lib/kalkyl/register.ts`

Nytt obligatoriskt fält `svar: string` i `Kalkylator`, i alla 22 poster TEXT SAKNAS med nyckeln `register.[slug].svar`: svarets form i två till fyra ord, i räkna-indexets kompakta lista och i talkortet när talet saknas.

### 5.5 `src/lib/kort.ts`

- `kategoriVal(entry)` ger i stället `{ namn, href, antal, val: { etikett: string; produktNamn: string; pris: number | null }[], prisDatum: Date | null, butikNamn: string | null }`: de två första i `val` som finns i databasen, med billigaste erbjudandets pris; `prisDatum` är det senaste `uppdaterad` bland de visade erbjudandena och `butikNamn` dess butik. Startsidan är enda anroparen; kontrollera det.
- `hubGrupper` enligt 4.5.

### 5.6 `src/content.config.ts`, samlingen `pelare`

Fyra valfria fält, och samma fält i kontrollskriptets länkkontroll:

```ts
bild: image().optional(),                                             // hubbens bild i rubrikbandet
borjaHar: z.object({ samling: z.enum(['guider', 'kunskap']), id: z.string() }).optional(),
lasordning: z.object({ rubrik: z.string(), steg: z.array(z.object({ text: z.string(), href: z.string() })).min(2).max(5) }).optional(),
grannar: z.array(z.object({ text: z.string(), href: z.string() })).min(2).max(4).optional(),
```

`kontrollera` stoppar en `borjaHar` som inte finns, är utkast eller har en annan pelare, och en `href` i `lasordning` eller `grannar` som leder ingenstans. Inga hubfiler ändras i det här uppdraget.

## 6. Startsidan (`src/pages/index.astro`)

`<Bas title description galleri>`. Ordning och mått enligt DESIGN.md 5.1. Det som DESIGN.md inte säger:

1. **Hero.** `<section class="sidram pt-8 pb-12 lg:pt-14">` med `<div class="blad rounded-md shadow-block grid grid-cols-1 items-center gap-8 p-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 lg:p-12">` (ändrat vid granskningen från 1.1fr och `lg:p-14`, så att knapparna ryms på en rad på 1280 px). Vänster spalt `flex flex-col gap-5`: säsongsetiketten (`TEXT start.hero.etikett` där `{månad}` byts mot `manadsnamn(byggmanad())`) i `text-etikett lg:text-etikett-lg uppercase text-blyerts-2`; H1 `font-serif text-h1 lg:text-h1-xl`; stycket ur `startsida.mdx` som i dag i `prosa text-ingress lg:text-ingress-lg`; säsongsraden ur `sasongsrad()` i `text-brod lg:text-brod-lg` med länken `.lank`; knappraden `flex flex-wrap gap-3` med `<a class="knapp knapp-fylld" href="/rakna/">` + `ikon-kalkylator` 22 px + "Räkna själv", `<a class="knapp" href="/guider/typ/problemguide/">` + `ikon-sok` + "Hitta felet", `<a class="knapp" href="/guider/typ/kategori/">` + `ikon-check` + "Bäst i test" (kontrollera i dev att båda adresserna finns); sifferraden (`TEXT start.hero.siffror` med `{sidor}`, `{raknare}`, `{kategorier}` ifyllda: publicerade guider, kunskap, tester och jämförelser; `KALKYLATORER.length`; publicerade kategorier) i `text-liten text-blyerts-2`. Höger: heron som i dag, med `mx-auto w-full lg:max-w-md` (448 px).
2. **Var sitter problemet?** `<section class="band"><div class="sidram py-12 lg:py-14">` med `Rubrikrad` (`id="amnen"`, `TEXT start.amnen.rubrik`, länken "Alla ämnen" till `/amnen/`) och `<Amnesrad />`.
3. **Börja här.** `<section class="sidram pt-12 lg:pt-16">` med `Rubrikrad` (`TEXT start.guider.rubrik` med `{månad}`, länken "Alla guider och tester" till `/guider/`), det stora kortet (`Artikelkort variant="stor" storBild="halv"`, `justNu`, eller det senaste när `justNu` saknas) och under det, med 20 px luft, `Artikelrutnat kolumner={4} kompaktPaMobil visaBeskrivning={false}` med de fyra följande. Metaraden som i dag (pelarens korta namn och datum).
4. **Granskat på datablad.** `<section class="sidram pt-12 lg:pt-16">`, `Rubrikrad` utan länk (`TEXT start.bast.rubrik`). `grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5` med ett `.kort` per kategori (`p-6 lg:px-7`): huvudraden `flex justify-between items-baseline` med namnet i `font-serif text-h2` som `.kortlank`-fri vanlig rubrik (`<h3>`) och "{antal} granskade" i etikett-stil; raderna i en `<ul>` med `.granskad-rad` (ny komponentklass: `display: flex; align-items: center; flex-wrap: wrap; gap: 8px 16px; padding: 14px 16px; background-color: papper-2; border-radius: radius-sm;` med 12 px mellan raderna), där varje rad har `.chip-gul` med valets etikett, namnet i fetstil och priset (`formateraPris`) med `ml-auto tabular-nums`; sist länken "Alla jag granskat" (befintlig text) till kategorisidan, `.lank min-h-11 inline-flex items-center`. Under rutnätet `TEXT start.bast.prisrad` med `{butik}` och `{datum}` (`formateraDatum`) i `text-liten text-blyerts-2`, bara när någon kategori har `prisDatum`. Kort utan databas: namnen utan pris.
5. **Räkna själv.** `<section class="band mt-12 lg:mt-16"><div class="sidram py-12 lg:py-14">`, `Rubrikrad` (`TEXT start.rakna.rubrik` med `{antal}`, länken "Alla räknare" till `/rakna/`). Talkorten: `KALKYLATORER.filter(k => iSasong(k.sasong, m) && korttal(k.slug))`, de tre första, påfyllt i registerordning med räknare som har ett tal; `grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5` med `Verktygskort variant="tal" iRutnat`. Den kompakta listan: övriga räknare i registerordning i `<ul class="kort kompaktlista mt-5">`, varje `<li><a href><span>{pelare.kort}</span><span>{namn}</span></a></li>`, sist en rad med `TEXT start.rakna.alla` (`{antal}`) till `/rakna/`. `.kompaktlista`: `padding: 8px; display: grid; grid-template-columns: 1fr; column-gap: 40px;` från 64rem två spalter; `li` med `border-top: 1px solid linje`, utom första (mobil) respektive de två första (från 64rem); `a` `display: flex; align-items: center; gap: 14px; min-height: 44px; padding: 14px 16px; color: blyerts; text-decoration: none;` hover `background-color: papper-2` och understruken namn i penna; första `span` `width: 88px; flex-shrink: 0;` i etikett-stil `blyerts-2`.
6. **Så jobbar jag.** `<section class="sidram py-12 lg:py-16">`, `grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12`. Vänster `flex flex-col gap-3.5`: `<Portratt storlek={120} />`, `Pennstreck` ("Så jobbar jag", befintlig text, `utanLuft`), `TEXT start.jobbar.rad` i `text-blyerts-2`. Höger: `<ul class="principer">` med tre `li`, var och en `Ikon` 30 px i `text-penna` (kalkylator, info, check), `TEXT start.jobbar.[1–3].rubrik` i fetstil och `TEXT start.jobbar.[1–3].text` i `text-liten text-blyerts-2`; `.principer`: `display: grid; gap: 20px;` tre spalter från 40rem, `li` `display: flex; flex-direction: column; gap: 8px;`. Under listan länken "Så testar jag" till `/om/sa-testar-vi/`. Det gamla stycket om annonslänkarna flyttar inte med; länken till `/om/sa-tjanar-vi-pengar/` står i sidfoten.

Rubrikerna är H2 i ordningen ovan, alla med `id`.

## 7. Pelarhubben (`src/components/vyer/PelarHub.astro`)

`<Bas ... galleri brodsmulorIVy>`. Strukturerad data, title och delningsbild oförändrade.

1. **Data.** `hubGrupper(slug)`. Börja här: `borjaHar` ur frontmatter om den finns och är publicerad (uppslagen bland artiklarna), annars det nyaste kortet i `hitta-felet`; finns inget, ingen Börja här. Kortet tas bort ur sin grupp, och en grupp som då blir tom visas inte. Hubbens bild: frontmatterns `bild`, annars `illustration` på det nyaste kortet i grupperna (utom Börja här) som har en.
2. **Rubrikbandet.** `<section class="band"><div class="sidram grid grid-cols-1 items-center gap-8 pt-6 pb-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 lg:pt-10 lg:pb-11">`. Vänster `flex flex-col gap-4`: `<Brodsmulor>`, etiketten "{grupp.namn} · {n} sidor · {m} räknare" (räknarna utelämnas vid noll, "1 sida"/"1 räknare" i singular), H1, ingressen i `text-ingress lg:text-ingress-lg` (blyerts), chipsen i `flex flex-wrap gap-2` som `<a class="chip bg-papper" href="#{id}">` med gruppikonen i 18 px (`sok`, `check`, `verktyg`, `kalkylator`) och "{rubrik} · {antal}". Pelarikonen vid H1 och raden med antal och länk under ingressen tas bort. Höger, när det finns en bild: `<div class="blad p-6">` med `<img alt="" width height fetchpriority="high" decoding="async" class="block h-auto w-full">`.
3. **Börja här.** `<section class="sidram pt-12 lg:pt-14">` med `Rubrikrad` (`id="borja-har"`, `TEXT hub.borja.rubrik`, länken "Alla guider om {pelare.namn med liten bokstav}" till `/guider/[pelare]/`, befintlig text) och `Artikelkort variant="stor" storBild="smal" visaMeta={true}`.
4. **Grupperna** utom `rakna`: `<section id={g.id} class="sidram pt-12 lg:pt-14">` med `Rubrikrad rad={g.rad}` och `<Kortgrupp>`. Gruppernas rubrik och rad är dagens `GRUPPER` i filen, oförändrade.
5. **Räkna**: `<section id="rakna" class="band mt-12 lg:mt-14"><div class="sidram py-12 lg:py-14">` med `Rubrikrad rad` och `<Kortgrupp grupp="rakna">`.
6. **Läs i ordning** när `lasordning` finns: `<section class="sidram pt-12 lg:pt-14">`, `Rubrikrad` med frontmatterns rubrik, `<ol class="steg grid grid-cols-1 gap-4 lg:grid-cols-4">` med en länk per steg (`text-blyerts`, understruken i penna vid hover). **Grannar** när `grannar` finns: en rad `mt-6 pt-6 border-t border-linje flex flex-wrap items-center gap-3 text-liten text-blyerts-2` med `TEXT hub.grannar.etikett` (`{pelare}` = korta namnet med liten bokstav) och en `.chip` per granne.
7. **Platsläge** (`PLATSER[slug]`): chipsen i rubrikbandet leder till platserna (`#{plats.slug}`, "{namn} · {antal}", ingen ikon), `Innehallsforteckning` utgår, Börja här står kvar, och varje plats är en `<section id class="sidram pt-12 lg:pt-14">` med `Rubrikrad` (rubriken = platsens namn, inget mer) och `<Platslista>`.
8. Sista sektionen får `pb-16 lg:pb-24`, så att sidfoten får sin luft.

## 8. Räkna själv-indexet (`src/pages/rakna/index.astro`)

`<Bas ... galleri brodsmulorIVy>`. Title, description, H1, ingress och det avslutande stycket är oförändrade.

1. **Rubrikbandet** som hubbens: vänster `<Brodsmulor>`, H1, ingressen och chips till grupperna (`#{id}`, "{rubrik} · {antal}", ingen ikon); höger `<Kalkylator namn="daggpunkt" etikett={TEXT rakna.prova.etikett} blad />`.
2. **Grupperna** i `RAKNEGRUPPER`-ordning, `<section id class="sidram pt-12 lg:pt-14">` med `Rubrikrad rad`. Fyra räknare eller färre: `grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5` med `Verktygskort variant="bild" iRutnat`. Fem eller fler: `<ul class="raknelista">` med `<li><a href><span>{namn}</span><span>{svar}</span></a></li>`; `.raknelista`: `display: grid; grid-template-columns: 1fr; column-gap: 40px; padding: 0; list-style: none;` två spalter från 64rem; `a`: `display: flex; justify-content: space-between; align-items: center; gap: 16px; min-height: 44px; padding-block: 14px; border-bottom: 1px solid linje; color: blyerts; text-decoration: none;` första `span` fetstil, understruken i penna vid hover; andra `span` `text-liten blyerts-2 flex-shrink: 0; text-align: right`.
3. **Sist** `<section class="sidram py-12 lg:py-16">` med det befintliga stycket i `<div class="yta p-6 lg:p-8">`, max läsbredd för texten.

`Artikelkort` används inte längre på sidan.

## 9. Mätning och kontroller

Före ändringarna: starta `npm run dev`, kör `node scripts/budget-html.mjs --dev http://localhost:4321` och spara utskriften. Efter: samma körning. Leverera tabellen före och efter för `/`, `/tak/`, `/fukt/`, `/inomhus/`, `/rakna/`, `/amnen/`, `/guider/`, `/fasad/mala-om-huset/`, `/fukt/avfuktare-kallare/`, `/grund/inreda-kallare/` och de tre största sidorna i den nya mätningen. Ingen sida över 66 kB.

Kör och rapportera:

1. `npx astro check --minimumSeverity error`: 0 fel.
2. Alla räknartester: `for f in scripts/test-*.mjs; do node --experimental-strip-types --test "$f"; done` gröna.
3. `npm run kontrollera`: bara `TEXT SAKNAS`-fel, inget annat.
4. Inga `<script>` utöver JSON-LD och inga JS-referenser i `/`, `/tak/`, `/fukt/` och `/rakna/` (dev-utskriften, med `--dev`-skriptets rensning).
5. Skärmdumpar på 375 och 1280 px av `/`, `/tak/`, `/fukt/` och `/rakna/` (headless Edge eller Chrome via `msedge --headless --screenshot --window-size=375,4000`), sparade i scratchpad-mappen, sökvägarna i leveransen. Ingen sidledsscroll på 375 (`document.documentElement.scrollWidth` lika med 375; ange hur du mätte).
6. Tabba igenom `/` på 1280 px: fokusringen syns på varje chip, knapp, kort och listrad.

## 10. Vad som inte får ändras

Adresser, title, description, H1, strukturerad data, länkarna i sidfoten, mobilmenyn, `/go/`, räknarnas formler och tester, innehållsfilerna, `Illustration.astro`, delningsbilderna.

## 11. Leverans

Filer skapade och ändrade, resultatet av punkterna i avsnitt 9 med tabellen, listan från 5.2, och en rad om det du var osäker på.

## 12. Tillägg efter koordinatorns granskning, 2026-10-02

**12.1 Prova direkt visar svaret.** Rutan på `/rakna/` följer skissen: två fält (temperaturen och luftfuktigheten inne), under dem svaret och sist knappen. `DaggpunktForm.astro` får propen `faltUrval?: 'alla' | 'luften'` (standard `'alla'`); `'luften'` renderar bara `temp` och `rf` (två i bredd från 640 px) och inga dolda fält, så att räknarsidan tar standardvärdena för resten via `tolkaQuery`. Formuläret får en namngiven slot `fore-knapp` som renderas mellan fälten och knappen. `Kalkylator.astro` får propen `visaSvar?: boolean` (bara för daggpunkten, annat ger byggfel); med den skickar den `faltUrval="luften"` och lägger i slotten svaret: en `.yta` (`flex items-center gap-5 px-4.5 py-3.5`, på mobil staplat) med `korttal('daggpunkt').tal` i `font-serif text-siffra` och raden `TEXT rakna.prova.rad` i `text-liten text-blyerts-2`. Talet räknas i bygget med räknarens standardvärden, samma tal som räknarsidan visar utan adress. Registrets `rad` och fotraden visas inte när `visaSvar` är satt; länken till räknarsidan står kvar som namnet i etikettraden. `rakna/index.astro` sätter `visaSvar`.

**12.2 Räkna ut är fylld.** `KNAPP_KLASS` i `src/lib/kalkyl/stil.ts` blir `knapp knapp-fylld min-h-13` (52 px, pennfylld med papperstext, hover blyerts enligt `.knapp`). Det gäller alla formulär, på räknarsidorna och inbäddat. Ingen annan klass på knappen.

**12.3 Sidfoten kortas** (SEO-beslut, `docs/SOKORDSANALYS.md` avsnitt 13 punkt 1). `Bas.astro`: rutnätet blir `lg:grid-cols-4`: varumärket (oförändrat), Ämnen, Räkna själv, Om sajten. Spalten Bäst i test utgår.
- Ämnen: `/fukt/`, `/badrum/`, `/kok/`, `/tak/` i den ordningen, med pelarens `namn`, bara de som är publicerade. "Alla ämnen" och "Alla guider och tester" utgår ur sidfoten (sidhuvudet bär dem).
- Räkna själv: tre räknare valda i bygget med `iSasong(k.sasong, byggmanad())` i registerordning; är färre än tre i säsong fylls listan på med `rotavdrag` och därefter i registerordning, utan dubbletter. Sist "Alla räknare" till `/rakna/`.
- Om sajten: "Så testar jag" `/om/sa-testar-vi/`, "Så tjänar jag pengar" `/om/sa-tjanar-vi-pengar/`, "Kontakt" `/om/kontakt/`, "Integritet" `/om/integritet/` (befintliga länktexter).
- `kontrollera-innehall.ts` får en ny varning: en räknare i registret som färre än två innehållsfiler länkar till (`/rakna/[slug]/`, `<Kalkylator namn="[slug]"`, `<Verktygskort kalkylator="[slug]"`) ger "räknaren [slug] har [n] inlänkar från innehållet, minst två krävs". Varning, inte fel.

**12.4 Ingen "Bäst i test" i heron** (samma avsnitt punkt 2: kategorisidorna är granskningar, och ordet test får inte bära dem). Startsidans knapprad har två knappar: Räkna själv (fylld) och Hitta felet (kontur). Toppmenyn får ingen sådan post.

**12.5 Granskning, inte test** (koordinatorn efter SEO-beslutet). Kategorikortets etikett i `tillKortKategori` (`src/lib/kort.ts`) blir "Granskad på datablad" i stället för "Bäst i test", och startsidans rubrikrad över Börja här får länktexten "Alla guider och granskningar". Övriga ställen med "Bäst i test" (typfiltret på `/guider/`) rörs inte i fas A.

**12.6 Sifferraden räknar innehållssidorna.** `{sidor}` är publicerade guider, kunskap, tester, jämförelser och kategorisidor; hubbar, om-sidor och räknare räknas inte (räknarna har `{raknare}`).

**12.7 Sidfotens räknare kräver inlänkar.** En räknare som färre än två innehållsfiler länkar till (samma regel som varningen i 12.3) väljs aldrig till sidfoten, varken som säsongsval eller reserv. Räkningen görs i bygget av en funktion i `src/lib/kalkyl/inlankar.ts` (`inlankar(): Map<string, number>`) som läser innehållsfilerna med `import.meta.glob('/src/content/**/*.{md,mdx}', { query: '?raw', import: 'default', eager: true })` och samma tre mönster som kontrollskriptet; kontrollskriptet behåller sin egen räkning. Utkast räknas som i kontrollskriptet.
