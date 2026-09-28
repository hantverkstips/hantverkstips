# Spec: skalet och HTML-budgeten, alla sidor

UX och bygge-agenten, 2026-09-28. Koordinatorns beslut samma dag: grannemedgivandet och altanartikeln publiceras över budgeten, som `/rakna/u-varde/` gjorde. Den här specen byggs direkt efter att de tre nya räknarna (grannemedgivande, fasadyta, kontrollplan) är publicerade. **Målet: varje sida under 66 kB (67 584 byte) i filen på bygget**, också de tre nya, mätt vid standardvärden och för grannemedgivandet också med två blanketter.

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

Beslutet att spriten inte längre inlineas avviker från fyra dokument. Jag rättar dem innan bygget börjar:

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
