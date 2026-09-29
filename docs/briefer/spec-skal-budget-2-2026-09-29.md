# Spec: skalet och /amnen/ under budgeten igen (2026-09-29)

Beställd av koordinatorn när takhubben publicerades. Bygger vidare på `spec-skal-budget-2026-09-28.md`; reglerna där gäller.

## 0. Läget

`node scripts/budget-html.mjs` efter bygget med tak publicerad:

| Sida | Byte | Marginal mot 67 584 |
| --- | --- | --- |
| /amnen/ | 68 666 | −1 082 |
| /fasad/mala-om-huset/ | 67 580 | 4 |
| /grund/inreda-kallare/ | 66 983 | 601 |
| /fukt/avfuktare-kallare/ | 66 686 | 898 |
| /luftavfuktare/ | 65 867 | 1 717 |

Skalet (allt utom `<main>`) väger cirka 14,5 kB. Varje publicerad hub lägger en post i mobilmenyn (cirka 130 byte med ikon), en i ämnesraden (cirka 125) och en i sidfoten (cirka 40) på varje sida. På /amnen/ bär 46 listrader tre klassattribut på tillsammans cirka 186 byte var.

## 1. Mål

- 0 sidor över gränsen.
- Varje statisk sida med minst 1 500 byte marginal.
- Ingen synlig skillnad på 375 och 1280 px: startsidan, /amnen/, en artikel. Ingen text tas bort.

## 2. Ändringar

1. **Ordmärket en gång.** Sidhuvudets inline-SVG får `<g id="ordmarke">` runt innehållet. Sidfotens SVG blir samma rotelement med `<use href="#ordmarke"/>`. Ordmärket ligger kvar i dokumentet, så Zilla Slab via `var(--font-serif)` och omfärgningen med `--color-blyerts` på sidfotens `<div>` fungerar som förut: anpassade egenskaper ärvs in i `<use>`s skuggträd. Förväntat −1,4 kB per sida.
2. **Skalets föräldraklasser blir komponentklasser** i `@layer components`, med samma deklarationer som Tailwind genererar för de godtyckliga varianterna (hover inom `@media (hover: hover)`):
   - `.sajtmeny` ersätter `[&_a]:…` på desktopmenyn.
   - `.amnesrad` (klassen finns redan på `<nav>`) tar länkarna och ikonstorleken i ämnesraden; `[&_li:not(.ml-auto)_a]:…` tas bort.
   - `.menypanel` ersätter `[&_li]:…` och `[&_a]:…` på mobilmenyns panel och sätter ikonstorleken.
   - `.sidfot` ersätter `[&_li]:…` och `[&_a]:…` på sidfotens inre `<div>`.
   Förväntat −0,9 kB per sida.
3. **Ikonstorlek från föräldern.** `Ikon` får `storlek={null}`: då skrivs inga `width` och `height`, och storleken kommer från föräldraklassen i punkt 2. Används bara i ämnesraden (20 px) och mobilmenyn (24 px). Övriga anrop oförändrade. Förväntat −0,45 kB per sida.
4. **/amnen/:s listrader.** Listan får komponentklassen `.amnesrader`, som sätter radens flex och linje, länkens flex och min-höjd, och nivåetikettens stil. Radens `<a>` behåller `lank`. Förväntat −7 kB på /amnen/.

## 3. Rör inte

Innehållsfiler, `pelare.ts`, `Kalkylator.astro`, testerna, sidfotens räknarlista (SEO-fråga enligt förra specen), texter och ordningen i menyerna.

## 4. Kontroller

`npx astro check --minimumSeverity error`, `npm run build`, `node scripts/budget-html.mjs` med 0 över och minsta marginal ≥ 1 500 byte. Skärmbilder på 375 och 1280 px före och efter av startsidan, /amnen/ och /fasad/mala-om-huset/, med mobilmenyn öppen en gång; sidfotens ordmärke ska vara ljust.
