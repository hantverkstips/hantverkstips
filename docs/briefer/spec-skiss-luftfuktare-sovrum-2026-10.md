# Spec: sovrummet en vinternatt med luftfuktaren igång

UX och bygge, 2026-09-30. Huvudbild för `src/content/kunskap/fukt/lag-luftfuktighet.mdx`. Hantverkaren vill ha den, och koordinatorn beställde den 2026-09-30. Alt och bildtext är hantverkarens, och de står i mdx-filens frontmatter.

Talen har källa:

- 21 °C och 45 % (FoHMFS 2014:14, GT T10) ger daggpunkten 8,6 °C, ur formeln i GT 3.2.
- Glaset blir 5 °C: ett tvåglasfönster med U 3,0 vid minus 20 ute, enligt tabellen på `/fukt/kondens-pa-fonster/` (GT 3.4).
- Väggen på 12 °C är ett antagande: ytterväggen i ett äldre hus, enligt `TYPISKA_YTOR`.

Handen och papperet är samma som i `src/assets/illustrationer-kallor/fukt/kallras.svg`. Följ DESIGN.md avsnitt 7 "Skisserna".

## 1. Vad bilden ska säga

Luftfuktaren gör luften fuktigare än den kallaste ytan i rummet tål. Glaset, på 5 grader, ligger under daggpunkten 8,6 och immar. Nere i ytterväggens hörn, på 12 grader, blir det en fuktfläck utan synliga droppar.

**Dropparna på glaset är den enda saken i penna.** Fläcken i hörnet ritas som skraffering i blyerts-2.

## 2. Motivet (600 × 360), sovrummet från sidan

- **Ytterväggen.** Till vänster, x 40–70, y 20–330, skrafferad.
- **Fönstret.** Ett tvåglasfönster i väggen, med dubbellinjer vid x 60 och 66, y 80–200.
- **Golvet.** En linje vid y 330.
- **Fläcken.** Nere i hörnet mellan yttervägg och golv, cirka x 70–110, y 290–330: en oregelbunden fläck med tät skraffering i blyerts-2 1,25.
- **Luftfuktaren.** En enkel form på golvet till höger om mitten, cirka x 360–420, y 270–330: en rundad kropp med ett munstycke. Tre vågiga linjer i blyerts-2 går uppåt från munstycket som ånga. Inget märke.
- **Sängen.** Kan skymtas som en låg rektangel längst till höger, bara om det behövs för att rummet ska läsas som ett sovrum. Ingen garderob och inga människor.
- **Dropparna, i penna 2,5.** Sex till åtta slutna droppformer på glasets insida, tätast nedtill.

## 3. Handskriften

Caveat 500, 24 px, ordagrant och inga andra etiketter:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| V1 | 45 % vid 21 °C | blyerts på tumstock | i rummet, uppe till höger |
| T1 | daggpunkt 8,6 °C | blyerts | under V1 |
| T2 | glaset 5 °C | penna | till höger om fönstret, med ledare till dropparna |
| T3 | väggen 12 °C | blyerts-2 | vid fläcken, med ledare |

`aria-label` är hantverkarens `bildAlt`, ordagrant.

## 4. Filer och kontroller

- Källa: `src/assets/illustrationer-kallor/fukt/luftfuktare-sovrum.svg`, under 10 240 byte.
- Publicerad fil: `src/assets/illustrationer/fukt/luftfuktare-sovrum.svg`, under 28 672 byte och utan `<text>`.
- Rendera i 343 och 1200 px. På 343 px ska det gå att se att dropparna sitter på glaset och fläcken i hörnet, och alla etiketter ska gå att läsa.

## 5. Godkännande

Godkänd av UX och bygge 2026-09-30.
