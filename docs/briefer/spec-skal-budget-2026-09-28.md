# Spec: skalet och HTML-budgeten, alla sidor

UX och bygge-agenten, 2026-09-28. Koordinatorns beslut samma dag: grannemedgivandet och altanartikeln publiceras över budgeten, som `/rakna/u-varde/` gjorde. Den här specen byggs direkt efter att de tre nya räknarna (grannemedgivande, fasadyta, kontrollplan) är publicerade. **Målet: varje sida under 66 kB (67 584 byte) i filen på bygget**, också de tre nya, mätt vid standardvärden och för grannemedgivandet också med två blanketter.

**Status 2026-09-28, efter commit d0c3c1c:**
- **Godkänt att bygga nu:** steg 1 till 4 (avsnitt 2 till 5) och mätskriptet (8.1).
- **Byggs först efter mätning:** steg 5 (avsnitt 6), och bara för de sidor mätskriptet då visar över 66 kB.
- **Byggs inte här:** sidfotens räknarlista (avsnitt 7). Koordinatorn frågar SEO och GEO-agenten separat.
- **Dokumenten i avsnitt 10 är rättade:** ARKITEKTUR, DESIGN, SPEC-SIDMALLAR och skillen astro-och-prestanda.

Utvecklaren gissar ingenting. Står något inte här, frågar hen innan hen bygger. Arbetaren kör inte `npm run build`; koordinatorn bygger, och jag mäter på bygget.

---

## 0. Läget, mätt 2026-09-28

Mätt på `dist/client` från bygget 16:08 (72 statiska sidor) och på räknarna i dev med dev-CSS och dev-skript bortskurna. Metoden skiljer 0,9 kB från bygget på `/altan/bygga-altan/`.

**Skalet** är det som står på varje sida, i kB:

| Del | kB | Vad |
|---|---|---|
| `<head>` | 2,0 till 3,0 | meta, preload, JSON-LD för brödsmulor |
| Ikonspriten, inline | 6,4 | 20 symboler och en lång kommentar; en artikel använder 10 av dem |
| Sidhuvud | 8,5 | ordmärket 1,9 (varav 0,7 kommentar), klassattribut 3,9, mobilmenyn 3,4, ämnesraden 2,5 |
| Sidfot | 7,5 | ordmärket igen 1,9, 32 länkar med samma klass på 81 byte (2,6), räknarlistan med 18 poster |
| **Summa** | **24 till 25** | budgeten räknar av 6 kB för sprite och ordmärke |

**De sidor som ligger över 66 kB**, 18 statiska och minst tre räknare:

| Sida | kB | Klasser i `<main>` | Text |
|---|---|---|---|
| `/luftavfuktare/` | 107,1 | 48,4 | 13,5 |
| `/fukt/avfuktare-kallare/` | 89,5 | 22,7 | 27,5 |
| `/fukt/avfuktare-krypgrund/` | 81,1 | 16,8 | 27,1 |
| `/el/u-varde/` | 79,1 | 13,0 | 27,0 |
| `/grund/inreda-kallare/` | 77,5 | 10,9 | 33,3 |
| `/el/tillaggsisolera-vind/` | 76,1 | 12,3 | 29,4 |
| `/fukt/fukt-i-kallaren/` | 73,7 | 14,5 | 22,3 |
| `/fasad/mala-om-huset/` | 73,1 | 13,3 | 25,3 |
| `/grund/dranera-hus/` | 72,6 | 13,4 | 24,1 |
| `/golv/slipa-parkettgolv/` | 70,8 | 13,1 | 22,9 |
| `/inomhus/bygga-innervagg/` | 70,4 | 14,3 | 19,8 |
| `/amnen/` | 70,3 | 27,2 | 8,4 |
| `/tester/woods-sw39fw/` | 68,7 | 18,0 | 15,5 |
| `/fukt/sorptionsavfuktare/` | 68,1 | 12,8 | 19,6 |
| `/golv/lagga-klickgolv/` | 66,8 | 11,5 | 22,1 |
| `/golv/renovera-trappa/` | 66,7 | 11,9 | 21,7 |
| `/altan/tradack-pa-mark/` | 66,5 | 12,4 | 20,5 |
| `/golv/bygga-trappa/` | 66,1 | 11,3 | 22,1 |
| `/rakna/grannemedgivande/`, två blanketter (dev) | 74,7 | – | – |
| `/rakna/grannemedgivande/` och `/rakna/u-varde/` (dev) | 69,3 | – | – |
| `/altan/bygglov-altan/` (dev, efter dagens ändring) | 67,5 | – | – |

Texten rörs inte. Hantverkaren kortar ingenting för budgetens skull (koordinatorns beslut). Vikten tas ur skalet och ur klassattribut som upprepas.

De vanligaste upprepade klassträngarna i `<main>`:
- länkklassen `text-penna underline decoration-1 underline-offset-2 hover:decoration-2` (`LANK_KLASS` i `src/lib/kalkyl/stil.ts` och 32 handskrivna kopior i `src/`)
- köpknappens klass på 110 tecken (27 gånger och 5,1 kB på `/luftavfuktare/`)
- jämförelsetabellens cellklasser (`min-w-[150px] p-3 align-top text-blyerts` 81 gånger, `m-0 mb-2 sm:mb-0 tabular-nums text-blyerts` 64 gånger)
- på `/amnen/` länkraden och kortets klasser, 24 till 32 gånger var

---

## 1. Vad som inte får ändras

- Utseendet. Varje sida ska se likadan ut på 375 och 1280 px före och efter, pixel för pixel utom kantutjämning. Jag jämför skärmdumpar av tio sidor, 12.
- Ingen klient-JS, inga nya beroenden, inga nya tokens, inga hexvärden i komponenter.
- Tillgängligheten: samma rubrikordning, samma `aria-*`, samma fokusring, samma länktexter.
- Sidfotens och sidhuvudets innehåll: samma länkar i samma ordning. Om räknarlistan i sidfoten ska kortas är en fråga för SEO och GEO-agenten (avsnitt 7), inte för den här specen.
- Utskriften av räknarnas blanketter (`[data-utskrift]`-blocket sist i `global.css`).
- Texten i innehållsfilerna.

---

## 2. Steg 1: ikonspriten blir en fil

**Beslut:** spriten serveras som en egen fil med hash och `immutable`-cache i stället för att inlineas på varje sida. Den väger 6,4 kB på varje sida, varav hälften är symboler sidan inte använder, och den är ingen del av LCP. En förfrågan på cirka 5 kB som cachas i ett år är billigare än 6,4 kB på varje sidvisning. Att bara minifiera den inline sparar 1 kB; det räcker inte.

- `src/components/ui/Ikon.astro`: `import sprite from '../../assets/brand/riktning-1/ikoner.svg?url';` och `<use href={`${sprite}#ikon-${namn}`} />`. Resten av komponenten är oförändrad.
- `src/layouts/Bas.astro`: raderna 10 och 200 (importen med `?raw` och `<Fragment set:html={ikoner} />`) tas bort.
- `src/assets/brand/riktning-1/ikoner.svg`: roten får `xmlns="http://www.w3.org/2000/svg"` om den saknas (en extern `<use>` kräver det), och `style="display:none"` tas bort (filen visas aldrig själv). Symbolerna rörs inte. Kommentaren står kvar i källfilen; den kostar bara en gång.
- Kontrollera i bygget att filen hamnar i `dist/client/_astro/` med hash och att Vercel ger den `Cache-Control: public, max-age=31536000, immutable`, som övriga `/_astro/`-filer. Kontrollera att Vite **inte** inlinear den som data-URI: en data-URI i `href` på `<use>` fungerar inte i alla webbläsare. Är filen under `assetsInlineLimit` (4 kB som standard) sätts `build.assetsInlineLimit` i `astro.config.mjs` så att `.svg` från `brand/` aldrig inlineas, med en kommentar om varför.
- Ikonerna ärver `currentColor` genom `<use>` även från en extern fil. Kontrollera det i Edge och Firefox på mobilmenyn, ämnesraden, Kalkylator och Verktygskort.

Förväntat: −6,2 kB på varje sida.

## 3. Steg 2: ordmärket utan kommentar

`ordmarke-inline.svg` står två gånger på varje sida (sidhuvud och sidfot), och 0,7 kB av dess 1,9 är en kommentar och indrag.

- `src/layouts/Bas.astro`: efter importen med `?raw`, `const ordmarkeRen = ordmarke.replace(/<!--[\s\S]*?-->/g, '').replace(/>\s+</g, '><').trim();`, och `ordmarkeRen` används i båda `set:html`. Källfilen ändras inte.
- Ordmärket förblir inline. Det sätter texten i Zilla Slab via `var(--font-serif)`, och sidfoten färgar om det med `--color-blyerts`. Båda kräver att det ligger i dokumentet.

Förväntat: −1,4 kB på varje sida.

## 4. Steg 3: klasserna i sidhuvud och sidfot en gång

Samma sätt som u-värdesspecen 12.1: klasserna som upprepas på varje `<li>` och `<a>` flyttas till föräldern som godtyckliga varianter.

- **Mobilmenyn** (`Bas.astro` rad 223 till 259): `<li class="border-b border-linje">` och `<a class="flex h-12 items-center gap-3 text-blyerts no-underline">` flyttas till den omslutande `<div>` som `[&_li]:border-b [&_li]:border-linje [&_a]:flex [&_a]:h-12 [&_a]:items-center [&_a]:gap-3 [&_a]:text-blyerts [&_a]:no-underline`. Undantagen står kvar på sina element: `font-bold` på "Alla ämnen" och `last:border-b-0` på den sista posten.
- **Ämnesraden** (rad 266 till 287): länkklassen flyttas till `<ul>`, och "Alla ämnen" behåller sina egna klasser, som skiljer sig.
- **Huvudmenyn** för desktop (rad 208 till 215): länkklassen flyttas till `<nav>`.
- **Sidfoten** (rad 310 till 386): `sidfotLank` och `mb-2` flyttas till `<footer>`s inre `<div>` som `[&_li]:mb-2 [&_a]:text-papper [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a]:hover:decoration-2`. Ordmärkets `<a>` finns inte i sidfoten, så inget annat träffas; kontrollera det.
- `Ikon` inuti menyerna får fortfarande sin `shrink-0` från komponenten.

Förväntat: −5 till −6 kB på varje sida (sidhuvudets klasser 3,9 kB, sidfotens länkar 2,6 kB, minus det som står kvar på föräldrarna).

## 5. Steg 4: länkklassen och köpknappen som komponentklasser

Samma sätt som `.linjerat` och `.artikelkort` i `global.css`: ett utseende som finns på hundratals element blir en komponentklass i `@layer components`.

- **`.lank`** i `global.css`: `color: var(--color-penna); text-decoration-line: underline; text-decoration-thickness: 1px; text-underline-offset: 2px;` och `:hover { text-decoration-thickness: 2px; }`. Värdena ska ge exakt samma rendering som Tailwinds `decoration-1 underline-offset-2 hover:decoration-2`. Kontrollera beräknade värden i Edge före och efter på en länk.
  - `LANK_KLASS` i `src/lib/kalkyl/stil.ts` blir `'lank'`.
  - De 32 handskrivna kopiorna av `text-penna underline decoration-1 underline-offset-2 hover:decoration-2` i `src/` byts mot `lank`, också där strängen ingår i en längre klasslista (`inline-flex min-h-11 items-center` plus länkklassen blir `inline-flex min-h-11 items-center lank`).
  - Varianterna med `text-blyerts` eller `text-blyerts-2` i stället för `text-penna` blir `lank text-blyerts` och `lank text-blyerts-2`. `text-*` från Tailwind ligger i utilities-lagret och vinner över komponentlagret, vilket är avsikten. Kontrollera det.
  - Länkar i MDX-innehåll styrs av `.prosa` och rörs inte.
- **`.kopknapp`** i `global.css`, med exakt köpknappens nuvarande klasser (läs dem ur `src/components/ui/Kopknapp.astro` och översätt varje utility till samma CSS, eller använd `@apply` om projektet redan gör det någonstans; gör det inte, skriv CSS). `Kopknapp.astro` sätter `kopknapp` plus de klasser som skiljer mellan varianterna.
- `rel`, `href` och `data-*` rörs inte. Affiliatelänkarna ska se ut och bete sig exakt som före; affiliateagenten tittar på en produktsida efter bygget.

Förväntat: −1 till −3 kB på innehållssidorna, −8 kB på `/luftavfuktare/`.

## 6. Steg 5: komponenterna med flest upprepade klasser

Mät först, bygg sedan. Utvecklaren kör mätskriptet i 8.1 efter steg 1 till 4 och rapporterar vilka sidor som ligger över 66 kB. Bara för dem gäller det här steget, i den här ordningen, och bara tills sidan är under:

1. **`Jamforelsetabell.astro`**: cellklasserna flyttas till `<table>` som varianter (`[&_td]:min-w-[150px] [&_td]:p-3 …`). Radernas egna `<p>` får sina klasser från cellen på samma sätt. Gäller `/luftavfuktare/` och testerna.
2. **`Faq.astro`**: klasserna på varje `<details>`, `<summary>` och svarets `<p>` flyttas till den omslutande listan.
3. **`/amnen/`** (`src/pages/amnen/index.astro`): länkraden och kortets klasser flyttas till listan och rutnätet.
4. **Regellistan i "Därför blev svaret så"** på räknarna som inte redan fått det. Grannemedgivandet och altanräknaren får det i sin egen omgång, u-värdet har det.
5. **`Produktkort.astro`** och **`Verktygskort.astro`**, om en sida fortfarande är över.

Ligger `/luftavfuktare/` kvar över 66 kB efter punkt 1 till 5 skriver jag en egen spec för kategorisidans tabell. Den bär 23 kB tabell och 13,5 kB text och kan behöva en annan uppställning. Den sidan stoppar inte resten av den här specen.

---

## 7. Sidfotens räknarlista (fråga till SEO och GEO-agenten, inte byggs här)

Sidfoten listar alla räknare. Med 18 poster är den cirka 1,4 kB efter steg 3, och den växer med varje räknare, på varje sida. Varje sida länkar i dag till varje räknare från sidfoten. Om det är värt vikten avgör SEO och GEO-agenten. Möjliga alternativ är:
- listan står kvar
- en länk till `/rakna/` och bara de räknare som hör till sidans pelare
- de räknare vars `sasong` omfattar innevarande månad vid bygget

Beslutet byggs i en egen omgång.

---

## 8. Mätning

### 8.1 Mätskriptet `scripts/budget-html.mjs` (nytt)

Node utan beroenden, körs med `node scripts/budget-html.mjs` efter ett bygge.

- Läser varje `.html` under `dist/client` och skriver ut sökväg och storlek i byte och kB, största först. Markerar varje sida över 67 584 byte.
- Med `--preview http://localhost:4321` hämtar det dessutom varje räknare i `src/lib/kalkyl/register.ts` vid standardvärden (`/rakna/[slug]/`), plus en lista med extra adresser överst i skriptet. Den börjar med `/rakna/grannemedgivande/?grans=2&jarnvag=1` (två blanketter). Samma gräns gäller.
- Skriver också, per sida över gränsen, klassattributens summa, `<main>`s storlek och den synliga textens storlek, som tabellen i avsnitt 0.
- Avslutar med kod 1 när någon sida är över gränsen, annars 0.
- **Läggs inte i `npm run build` än.** Det läggs in i `build` (efter `astro build`) när alla sidor är under, så att budgeten därefter vaktas av bygget och inte av en agent. Det steget gör jag i granskningen när siffrorna håller.

### 8.2 Förväntat efter steg 1 till 4

Summan av steg 1 till 4 är cirka −13 kB på varje sida (6,2 + 1,4 + 5 till 6), plus det länkklassen och köpknappen ger. Förväntat på bygget:

| Sida | Nu | Efter 1–4 |
|---|---|---|
| `/rakna/grannemedgivande/` | 69,3 | cirka 55 |
| samma, två blanketter | 74,7 | cirka 61 |
| `/rakna/u-varde/` | 69,3 | cirka 55 |
| `/altan/bygglov-altan/` | 67,5 | cirka 53 |
| `/el/u-varde/` | 79,1 | cirka 65 |
| `/grund/inreda-kallare/` | 77,5 | cirka 64 |
| `/fukt/avfuktare-krypgrund/` | 81,1 | cirka 67, steg 5 |
| `/fukt/avfuktare-kallare/` | 89,5 | cirka 75, steg 5 |
| `/luftavfuktare/` | 107,1 | cirka 86, steg 5 och egen spec |

Siffrorna är uppskattningar. Mätskriptet avgör.

---

## 9. Filer

| Fil | Steg |
|---|---|
| `src/components/ui/Ikon.astro` | 1 |
| `src/assets/brand/riktning-1/ikoner.svg` | 1, bara roten |
| `astro.config.mjs` | 1, bara om Vite inlinear spriten |
| `src/layouts/Bas.astro` | 1, 2, 3 |
| `src/styles/global.css` | 4, `.lank` och `.kopknapp` i `@layer components` |
| `src/lib/kalkyl/stil.ts` | 4, `LANK_KLASS` |
| filerna med handskrivna kopior av länkklassen | 4 (utvecklaren listar dem med `grep`) |
| `src/components/ui/Kopknapp.astro` | 4 |
| `src/components/ui/Jamforelsetabell.astro`, `Faq.astro`, `src/pages/amnen/index.astro`, räknarsidorna, `Produktkort.astro`, `Verktygskort.astro` | 5, bara de som behövs |
| `scripts/budget-html.mjs` | 8.1 |

Rörs inte: innehållsfilerna, formelmodulerna, testerna (utom om ett test läser en klasslista; då uppdateras testet och det rapporteras), utskriftsblocket, `src/lib/illustration.ts`.

---

## 10. Dokumenten (jag, innan utvecklaren börjar)

Beslutet att spriten inte längre inlineas avviker från fyra dokument. De rättades 2026-09-28, innan bygget började:

- `docs/ARKITEKTUR.md` rad 294: budgeten blir "HTML per innehållssida högst 66 kB okomprimerat i filen, mätt med `scripts/budget-html.mjs`". Undantaget för sprite och ordmärke försvinner, eftersom spriten inte längre ligger i HTML:en och ordmärket räknas in.
- `docs/DESIGN.md` rad 679 och tabellen rad 1033: spriten serveras som fil via `<use href="[fil]#ikon-…">`.
- `docs/SPEC-SIDMALLAR.md` rad 70 och avsnitt 10: spriten, och mätningen med skriptet i stället för PowerShell-raden.
- `.claude/skills/astro-och-prestanda/SKILL.md` avsnitt 2 och 4: samma sak, och `.lank` och `.kopknapp` bland konventionerna.

---

## 11. Kontroller (utvecklaren)

1. `npx astro check --minimumSeverity error`: 0 fel. `npm run kontrollera`: 0 fel.
2. Alla räknartester gröna, oförändrade.
3. `npm run dev` på egen port. Ikonerna syns på startsidan, i mobilmenyn, i ämnesraden, i Kalkylator, i Verktygskort och vid pelarhubbens H1, i Edge och Firefox.
4. Den beräknade stilen på en länk i spalten, en länk i sidfoten, en köpknapp och en menypost, före och efter: `color`, `text-decoration-*`, `text-underline-offset`, `padding`, `height`. Rapportera tabellen.
5. Mätskriptet på koordinatorns bygge: listan före och efter.
6. Leverans: filerna, mätningen, en rad om osäkerheter.

## 12. Godkännande (jag)

- Mätskriptet på bygget ger 0 sidor över 66 kB. Undantaget är `/luftavfuktare/` om den har fått sin egen spec.
- Skärmdumpar på 375 och 1280 px före och efter av tio sidor:
  - startsidan
  - `/altan/`
  - `/altan/bygglov-altan/`
  - `/luftavfuktare/`
  - `/tester/woods-sw39fw/`
  - `/amnen/`
  - `/rakna/grannemedgivande/`
  - `/rakna/u-varde/`
  - `/rakna/bygglov-altan/`
  - `/om/`
- Spriten ligger i `/_astro/` med `immutable`, och ingen HTML-sida innehåller `<symbol`.
- Fokusring och tabbordning i sidhuvudet och sidfoten oförändrade på 375 px.
- Därefter läggs mätskriptet i `npm run build`, och dokumenten i avsnitt 10 visar det.

---

## 13. Granskning av steg 1 till 4, 2026-09-28 (UX och bygge)

Läst: `git diff` för `Bas.astro`, `Ikon.astro`, `ikoner.svg`, `global.css`, `stil.ts`, `Kopknapp.astro` och de 25 komponenter och sidor där länkklassen byttes, samt `scripts/budget-html.mjs`. Den genererade CSS:en i `dist/client/_astro/Bas.CYBBQPPT.css` är kontrollerad. Mätskriptet är kört på `dist/client` från bygget 19:45: 72 sidor, 4 över. Fasadfilerna i `src/content/*/fasad` är inte rörda.

**Godkänt:**
- Spriten är en fil, `/_astro/ikoner.BT0E7Zs8.svg` på 6,4 kB, som `<use href>` pekar på. Ingen HTML-sida innehåller `<symbol`. Den är över Vites gräns för inlining (4 kB), så den blir ingen data-URI.
- Ordmärket skalas vid bygget.
- Sidhuvudets och sidfotens varianter kompilerar rätt, `[&_a]:hover:underline` till `.x a:hover` inom `@media (hover:hover)`.
- `.lank` och `.kopknapp` ligger i `@layer components`, så `text-*` bredvid vinner som avsett. `.prosa .lank` och `.prosa .kopknapp` behövs, eftersom `.prosa a` ligger i samma lager med högre specificitet än `.lank`. Godkänt.
- `kopknapp` har flyttat från omslaget till länken. Ingen annan fil läser klassen på omslaget. Godkänt.
- Ämnesradens `[&_li:not(.ml-auto)_a]:` är godkänd: den är det enklaste sättet att låta "Alla ämnen" behålla sina egna klasser.
- 0 pixlar olika på tio sidor i 375 och 1280 px och i utskrifterna, enligt utvecklarens mätning.

**Retur, två punkter i `scripts/budget-html.mjs`:**

1. **Vad `--preview` pekar på.** `astro preview` fungerar inte med Vercel-adaptern. **Beslut:**
   - `--preview` tar adressen till en **driftsatt** version, en Vercel-förhandsgranskning eller produktion. Det är den enda miljö som ger räknarnas riktiga HTML. Kommentaren överst i skriptet (rad 5 till 12) och felmeddelandet på rad 80 ska säga det.
   - Ny flagga **`--dev http://localhost:PORT`** mäter räknarna mot `npm run dev`. Skriptet skalar då bort det dev lägger till: `<script type="module" src="/@…">` och andra `<script>` utan `ld+json`, `<style>`-block i `<head>`, och attributen `data-astro-source-file`/`data-astro-source-loc`. Utskriften märker de raderna "(dev, cirka ±1 kB)". Metoden skiljer 0,9 kB från bygget på `/altan/bygga-altan/` (min mätning 2026-09-28).
   - I `npm run build` körs skriptet utan flagga, alltså bara på `dist/client`. Räknarna mäts av koordinatorn med `--preview` mot förhandsgranskningen före push, som en rad i live-kollen.
2. **Vakt mot en inlinad sprite.** Blir `ikoner.svg` någon gång mindre än 4 kB inlinar Vite den som data-URI, och `<use href="data:…">` fungerar inte i alla webbläsare. Skriptet ska därför avsluta med kod 1 och skriva sidan när en HTML-sida innehåller `<use href="data:`. Två rader efter läsningen på rad 72.

Sedan är steg 1 till 4 godkända, och jag behöver inte se mer än skriptets utskrift efter ändringen.

### 13.1 Steg 5 för de fyra sidorna

Mätt på bygget, i kB. Klasserna och texten gäller `<main>`.

| Sida | kB | Över med | Klasser | Text | Det som väger |
|---|---|---|---|---|---|
| `/luftavfuktare/` | 88,6 | 22,6 | 41,4 | 13,7 | jämförelsetabellen 21,7 kB, varav klasser 15,3 |
| `/fukt/avfuktare-kallare/` | 74,1 | 8,1 | 18,8 | 27,5 | sju produktkort, `kort-cell` 112 gånger, Faq 4,7 |
| `/fasad/mala-om-huset/` | 68,1 | 1,6 | 13,4 | 28,4 | två inbäddade räknare (fasadyta och måla ute), formulär 10,3 kB |
| `/grund/inreda-kallare/` | 66,8 | 0,8 | 9,6 | 34,3 | den längsta texten på sajten |

Steg 5 byggs i den här ordningen. Mätskriptet körs efter varje punkt, och man slutar när alla fyra är under.

- **5.0 `Pennstreck.astro` (ny, gäller alla sidor).** H2:ans klasser `font-serif text-h2 lg:text-h2-lg mb-3 text-blyerts` och `mt-12 lg:mt-16` flyttas in i `.pennstreck` i `global.css`, med tokens (`var(--font-serif)`, `var(--text-h2)` och `var(--text-h2--line-height)`, lg-värdena i `@media (min-width: 64rem)`, `var(--color-blyerts)`). `utanLuft` blir klassen `pennstreck-tat`, som tar bort marginalen ovanför. `klass` från anroparen ligger i utilities-lagret och vinner, som i dag. Cirka −1 kB på varje lång sida. Bör räcka ensamt för `/grund/inreda-kallare/`.
- **5.1 `Faq.astro`.** Klasserna på `<details>`, `<summary>` och svaret flyttas till listan som varianter. −1 till −1,5 kB. Tillsammans med 5.0 tar det `/fasad/mala-om-huset/` under.
- **5.2 `Produktkort.astro`.** Kortets upprepade klasser: bildytan, raden `m-0 mb-2 sm:mb-0 tabular-nums text-blyerts`, prisraden, `grid … text-liten`-listan och `kort-cell`. De flyttas till kortets rot som varianter. Mät på `/fukt/avfuktare-kallare/`, som behöver 8 kB. 5.0, 5.1 och 5.2 bör tillsammans ge 5 till 7 kB. Räcker det inte, rapportera siffrorna så beslutar jag. Texten kortas inte.
- **5.3 `Jamforelsetabell.astro`.** Cellklasserna (`min-w-[150px] p-3 align-top text-blyerts` 81 gånger, `bg-papper-2`-varianten 25 gånger) och cellernas `<p>` flyttas till `<table>` som varianter. Uppskattat −10 kB på `/luftavfuktare/`, som ändå blir kvar över gränsen. Resten av den sidan tar jag i en egen spec för kategorisidans tabell och uppställning. Den stoppar inte att skriptet läggs i bygget: `/luftavfuktare/` står då som ett namngivet undantag i skriptet, med hänvisning till den specen, och undantaget tas bort när den är byggd.
- `/amnen/` och regellistorna behövs inte längre (under gränsen efter steg 1 till 4).

Samma regler som steg 1 till 4:
- 0 pixlar olika på 375 och 1280 px, på de fyra sidorna plus startsidan och `/rakna/u-varde/`
- ingen text ändras
- fasadfilerna rörs inte medan de skrivs; `/fasad/mala-om-huset/` mäts, men dess MDX ändras inte

---

## 14. Granskning av steg 5.0 till 5.3 och beslut, 2026-09-28 (UX och bygge)

Läst: `git diff` för `Pennstreck.astro`, `Faq.astro`, `Jamforelsetabell.astro`, `Produktkort.astro`, blocket `.pennstreck` i `global.css` och `scripts/budget-html.mjs`. Mätt på `dist/client` från bygget 20:09.

**5.0 till 5.3 är godkända, med de tre avvikelser utvecklaren angett:**
- `.pennstreck:not(.pennstreck-tat)` står sist i komponentlagret. Det behövs för att marginalen ska gälla bara utan `pennstreck-tat`, och anroparens verktygsklasser vinner fortfarande.
- Faq-svarets `<p>` har ingen `m-0`, eftersom preflight nollar marginalen och en variant på föräldern annars slår länkradens `mt-2`. Utvecklaren mätte 0 pixlar olika på artiklarna med Faq.
- Jämförelsetabellens hörncell undantas med `td:not(:first-child)`. Varje annan `td` har en `th` före sig, så selektorn träffar exakt samma celler som förut.

Läget efter 5.3, i byte:

| Sida | byte | Över med |
|---|---|---|
| `/luftavfuktare/` | 79 688 | 12 104, undantag |
| `/fukt/avfuktare-kallare/` | 73 153 | 5 569 |
| `/fasad/mala-om-huset/` | 68 615 | 1 031 |
| övriga 69 | under | – |

### 14.1 Beslut: formulärens klasser blir komponentklasser

Tre klassträngar står på varje fält i alla femton formulär under `src/components/kalkyl/`. `FALT_KLASS` finns i `stil.ts` och används 94 gånger. Etiketten till radioknappar och kryssrutor är handskriven i 15 filer, och `/fasad/mala-om-huset/` bär den 24 gånger. De blir komponentklasser i `@layer components`, som `.lank`:

| Ny klass | Ersätter | Var |
|---|---|---|
| `.falt` | `FALT_KLASS` (`w-full min-h-12 rounded-sm border bg-papper px-3 text-brod text-blyerts tabular-nums`) | `stil.ts`: `FALT_KLASS = 'falt'` |
| `.val` | `flex min-h-11 items-center gap-2 text-brod`, etiketten runt radioknapp och kryssruta | ny `VAL_KLASS = 'val'` i `stil.ts`. De 15 formulären byter sin handskrivna sträng mot konstanten |

- `ramKlass()`, `min-w-0`, `max-w-28`, `border-blyerts-2` och andra tillägg står kvar som verktyg bredvid och vinner över komponentlagret, som `text-*` bredvid `.lank`.
- Står formuläret i `.prosa` (Kalkylator i en artikel), krävs `.prosa .falt` och `.prosa .val` av samma skäl som `.prosa .lank`, om `.prosa` sätter något på `input` eller `label`. Utvecklaren kontrollerar det och tar med dem bara om det behövs.
- Förväntat: −2,5 kB på `/fasad/mala-om-huset/`, som då hamnar under gränsen, och −1 till −2 kB på varje räknarsida.

### 14.2 Beslut: `kort-cell` sätts bara på minoriteten

`kort-cell` sätts per cell, eftersom det är cellens egen textlängd som avgör. Klassen kan därför inte ensam flyttas till tabellen. Två ändringar i `markeraKortaCeller` i `astro.config.mjs` och i `.brodtabell`-reglerna i `global.css`, med samma rendering som i dag:

1. **Ingen `th` markeras.** Regeln `.prosa .brodtabell th, .prosa .brodtabell th.kort-cell` tar redan bort all verkan av klassen på `th`, och `td:not(.kort-cell)` gäller bara `td`. Klassen på `th` gör alltså ingenting i dag.
2. **Bara den mindre gruppen celler får en klass.** Pluginet räknar per tabell korta och långa `td`:
   - Är de korta minst lika många som de långa, får `<table>` klassen `korta-celler` och bara de långa `td` får `lang-cell`.
   - Annars är det som i dag: `kort-cell` på de korta.
   - CSS:en skrivs så att båda fallen ger exakt samma regler som nu:
     - `nowrap` på korta `td`: `.prosa .brodtabell .kort-cell` och `.prosa .brodtabell.korta-celler td:not(.lang-cell)`.
     - `min-width: 4rem` på långa `td`: `.prosa .brodtabell:not(.korta-celler) td:not(.kort-cell)` och `.prosa .brodtabell.korta-celler td.lang-cell`.
     - Fyrkolumnsregeln (`white-space: normal` från fyra kolumner) gäller båda.
   - Pluginet sätter tabellklassen i samma genomgång som det sätter cellklasserna. Det är ett hast-plugin i Sätteri, och tabellen nås via `ctx.parent`, som i `tabellBehallare`.
3. Test: ett nytt `scripts/test-tabellceller.mjs` kör pluginfunktionen på tre små tabeller:
   - övervägande korta celler: tabellen får `korta-celler`, och bara den långa cellen får `lang-cell`
   - övervägande långa celler: som i dag
   - rubrikrad: ingen `th` får någon klass

   Utvecklaren kör dessutom 0 pixlar olika på de fem artiklar som har flest brödtabeller, som mätskriptet listar.

Förväntat: cirka −1,8 kB på `/fukt/avfuktare-kallare/`.

### 14.3 Beslut: produktkortet och köpknappens två lägen

`/fukt/avfuktare-kallare/` behöver 5,6 kB och har sju produktkort på 7,9 kB. Efter 14.1 och 14.2 återstår cirka 3,5 kB.
- `.produktkort` i komponentlagret tar rotens klasser (`border border-linje rounded-sm p-4 lg:p-6 bg-papper`) och variantlistan för `dl`, `dt` och `dd` från 5.2 som vanlig CSS (`.produktkort dl > div { display: contents }` och så vidare, med tokens).
- `.produktkort-bild` tar bildytans klasser (`bg-papper-2 border border-linje rounded-sm flex items-center justify-center text-center p-2 w-24 h-18`).
- `.kopknapp` får två modifierare för det som i dag står som verktyg, `.kopknapp-full` (`flex w-full sm:inline-flex sm:w-auto`) och `.kopknapp-aktiv` (`bg-penna text-papper hover:bg-blyerts hover:text-papper`, hover inom `@media (hover: hover)`). Läget utan pris behåller sina verktyg.
- `.prosa .produktkort` och `.prosa .kopknapp-*` behövs, som för `.lank`.
- Affiliatelänkarnas `href`, `rel` och `data-*` rörs inte, och affiliateagenten tittar på en produktsida efter bygget.

Förväntat: −3 till −4 kB.

Når `/fukt/avfuktare-kallare/` inte under 67 584 byte efter 14.1 till 14.3, rapporterar utvecklaren siffrorna, och jag beslutar innan något mer byggs. Texten, produkterna och deras antal rörs inte för budgetens skull.

### 14.4 Beslut: undantagen i mätskriptet, och skriptet i bygget nu

Skriptet läggs i `npm run build` **nu**, sist efter `astro build`, med undantag som har ett tak och ett skäl. Ett undantag låter sidan ligga över 66 kB men inte växa. Bygget blir då grönt i dag och rött så fort någon sida blir tyngre eller en ny sida går över.

`UNDANTAG` blir `Map<string, { tak: number; skal: string }>`:

| Sida | Tak, byte | Skäl | Tas bort när |
|---|---|---|---|
| `/luftavfuktare/` | 80 712 | kategorisidans tabell och uppställning, egen spec | den specen är byggd |
| `/fukt/avfuktare-kallare/` | 74 177 | produktkorten och brödtabellerna, avsnitt 14.2 och 14.3 | 14.2 och 14.3 är byggda |
| `/fasad/mala-om-huset/` | 69 639 | formulärens klasser, avsnitt 14.1 | 14.1 är byggt |

Taket är dagens storlek plus 1 024 byte, så att en rättad mening inte stoppar bygget.

Skriptet ändras så här:
- **Fel (kod 1):** en sida utan undantag över 67 584 byte, en sida med undantag över sitt tak, eller `<use href="data:` på någon sida.
- **Varning (kod 0):** en sida med undantag som ligger under 67 584 byte. Utskriften är "Undantaget för [sida] kan tas bort". Den som bygger 14.1 till 14.3 tar bort raden i samma ändring.
- I bygget körs skriptet utan `--preview` och `--dev`.
- `package.json`: `build` får `&& node scripts/budget-html.mjs` sist.
- Dokumenten ändras i samma omgång: `.claude/skills/astro-och-prestanda/SKILL.md` avsnitt 3 och 7 (bygget kör budgetkontrollen) och `docs/SPEC-SIDMALLAR.md` avsnitt 10. Det gör jag när utvecklaren levererat.

### 14.5 Ordning

1. 14.4, skriptet i bygget med undantagen.
2. 14.1, som tar bort undantaget för `/fasad/mala-om-huset/`. Fasadfilernas MDX rörs inte.
3. 14.2 och 14.3, som tar bort undantaget för `/fukt/avfuktare-kallare/`.

Samma krav som tidigare gäller: 0 pixlar olika på 375 och 1280 px, på de berörda sidorna plus startsidan, `/rakna/u-varde/`, `/rakna/grannemedgivande/` och en produktsida. Ingen text ändras.

---

## 15. Granskning av 14.1 till 14.4, 2026-09-28 (UX och bygge)

Läst: `git diff` för `astro.config.mjs`, `package.json`, `global.css`, `stil.ts`, de 15 formulären, `Kopknapp.astro`, `Produktkort.astro` och `elkostnad.ts`, samt `scripts/budget-html.mjs`, `scripts/tabellceller.mjs` och `scripts/test-tabellceller.mjs`. `test-tabellceller` ger 5 av 5 gröna. Mätskriptet är kört på bygget från 20:51.

**Godkänt:**
- `.falt` och `.val` ger samma beräknade värden som verktygen, också radavståndet med `--tw-leading` som reserv. Att `.prosa .falt` och `.prosa .val` inte behövdes stämmer, eftersom `.prosa` inte sätter något på `input` eller `label`.
- `border-style: var(--tw-border-style, solid)` på `.falt`, `.produktkort` och `.produktkort-bild`, alltså samma sätt som Tailwinds `border`.
- Tabellcellerna: `markeraCeller` i en egen modul som både konfigurationen och testet laddar, ingen `th` markerad, och tabellklassen satt i samma genomgång. CSS:en har båda formerna i varje regel. Utvecklaren mätte 0 pixlar olika.
- `.kopknapp-full` och `.kopknapp-aktiv`, med hover i `@media (hover: hover)` och `.prosa`-varianter för färgen.
- `.produktkort` med `dl`, `dt` och `dd`.
- De två ändringarna i produktkortet (`ELKOSTNAD_KATEGORIER`, kategorin via `getCollection` utan varning) följer `spec-bilder-fasad-2026-09-28.md` 7.4 och 7.5 och är inte budgetarbete. Godkända här eftersom de ligger i samma diff. `pelareForKategori` får vara orörd.
- Mätskriptet sist i `npm run build`, undantagen som `Map` med tak och skäl, fel vid `<use href="data:`, och varning när ett undantag kan tas bort.

**Godkänd av UX och bygge** för commit av 14.1 till 14.4 som det står.

### 15.1 Taken följer med ner

Ett tak som ligger långt över sidans storlek vaktar ingenting. I nästa ändring sätts taken till dagens storlek plus 1 024 byte:

| Sida | Byte i dag | Nytt tak |
|---|---|---|
| `/luftavfuktare/` | 73 254 | 74 278 |
| `/fukt/avfuktare-kallare/` | 68 445 | 69 469, tills 15.2 är byggd |
| `/fasad/mala-om-huset/` | 67 667 | 68 691, tills 15.3 är byggd |

Skälet för `/fasad/mala-om-huset/` ändras från "UX och bygge beslutar" till "DetHarBehoverDu (avsnitt 15.3)".

**Regel från och med nu:** den som gör en sida lättare sänker dess tak i samma ändring.

### 15.2 `/fukt/avfuktare-kallare/`, 861 byte över: produktkortets inre klasser

Sju kort bär samma klasser inuti. De flyttas till `.produktkort` i `global.css` som CSS på elementen i kortet, eller till kortets rot som varianter, med samma värden:
- rubriken i kortet: `m-0 font-sans text-h3 lg:text-h3-lg text-blyerts`
- märkesraden: `m-0 mb-1 text-etikett lg:text-etikett-lg uppercase text-penna`
- priset: `m-0 mb-2 font-bold tabular-nums text-brod text-blyerts`
- nyckelvärdenas `dl`: `m-0 mt-3 grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 text-liten`

Utvecklaren väljer det som ger minst HTML, och varje element får en egen selektor, till exempel `.produktkort > … h3`. Uppskattat cirka −1,9 kB.

`/fukt/avfuktare-kallare/` hamnar då under 66 kB, och undantaget tas bort i samma ändring.

### 15.3 `/fasad/mala-om-huset/`, 83 byte över: DetHarBehoverDu

`src/components/ui/DetHarBehoverDu.astro` skriver samma två klasser på varje rad i båda listorna:
- namnet: `m-0 font-bold text-brod lg:text-brod-lg text-blyerts`, 11 gånger på sidan
- varför-raden: `m-0 mt-1 text-brod text-blyerts-2`, 10 gånger

De flyttas till de två `<ul>` (rad 62 och 106) som varianter på `li p:first-child` och `li p:nth-child(2)`. Prisraden `m-0 shrink-0 font-bold tabular-nums …` i verktygslistan står kvar på sitt element. Uppskattat cirka −1 kB på varje sida med listan.

Undantaget för `/fasad/mala-om-huset/` tas bort i samma ändring. Fasadfilernas MDX rörs inte.

### 15.4 Därefter

Kvar står bara undantaget för `/luftavfuktare/`, som tas i kategorisidans egen spec. Jag skriver den när koordinatorn ger den en plats i kön.

Samma krav som tidigare gäller: 0 pixlar olika på 375 och 1280 px, på de två sidorna plus en produktsida och `/luftavfuktare/`. Ingen text ändras. Bygget ska vara grönt med mätskriptet.
