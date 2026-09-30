# Spec: radonets vägar in i huset

UX och bygge, 2026-09-30. Krav i `docs/briefer/seo-checklista-2026-09-30/radon.md` punkt 8, huvudbild för `/fukt/radon/`. Tal och källor finns i `faktablad/fukt-gemensamma-tal.md` avsnitt 8 och `faktablad/kunskap-radon.md`.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport finns, med `bildAlt`, `bildtext` och etiketterna ordagrant. Saknas en etikett ritas den platsen inte.

Handen och papperet är samma som i `src/assets/illustrationer-kallor/fukt/kallras.svg`. Följ DESIGN.md avsnitt 7 "Skisserna".

## 1. Vad bilden ska säga

Radon kommer in i huset på tre vägar: markluften under plattan, byggnadsmaterialet (blåbetong) och hushållsvattnet (GT 8.5, SSM). Marken är "den klart dominerande radonkällan" (samma källa), så **markluftens väg in genom plattan är den enda saken i penna**. Blåbetongen och vattnet ritas i blyerts-2.

Mätningen syns som små dosor. SSM:s regel är "minst två mätpunkter" och "varje plan med boendeutrymmen" (GT T51, `kunskap-radon.md` rad 55).

**Nyckeltal:** 200 Bq/m³, referensnivån (GT T47), med gul markering.

## 2. Motivet (600 × 360), ett hus i genomskärning

- **Hus och grund.** Ett tvåplanshus från sidan, tak överst, två våningar med ett bjälklag emellan, och en platta på mark. Marken är skrafferad (blyerts-2 1,25) och fyller nedre femtedelen.
- **Markluften, i penna 2,5.** Tre–fyra korta vågiga pilar underifrån genom marken. De når plattan vid en genomföring (rör) och vid en spricka, som ritas som ett kort brutet streck i plattan, och fortsätter in i bottenvåningen.
- **Blåbetongen.** En vägg i bottenvåningen markerad med glesa korta streck inne i väggen (blyerts-2). Etiketten står vid den.
- **Vattnet.** Ett rör från marken in i huset till ett tappställe, som en kran i köket. Tre små prickar i blyerts-2 vid kranen.
- **Dosorna.** Små rektanglar, 14 × 10, i blyerts. Två på bottenplanet i två olika rum, två på övre planet i två olika rum.
- **Utan detta:** inga människor och inga möbler. Radonsugen hör till en annan bild (omgång E).

## 3. Handskriften

Caveat 500, 24 px, högst 60 tecken. Orden tas ur hantverkarens kommentar. Här står vad varje plats ska säga:

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| T1 | markluften | penna | vid pilarna under plattan |
| T2 | blåbetong | blyerts | vid väggen |
| T3 | vattnet | blyerts-2 | vid kranen |
| T4 | dosorna, två per plan | blyerts | vid dosorna på övre planet |
| V1 | 200 Bq/m³ | blyerts på tumstock | i bottenvåningen, fritt |

## 4. Filer, budget och kontroller

- Källa: `src/assets/illustrationer-kallor/fukt/radon-vagar.svg`, under 12 288 byte.
- Publicerad fil: `src/assets/illustrationer/fukt/radon-vagar.svg`, under 30 720 byte, utan `<text>`. `test-illustration.mjs` ska vara grönt.
- Rendering på 343 och 1200 px. Tre saker ska gå att se på 343 px:
  - att pennan är den väg som kommer underifrån
  - att dosorna sitter i två rum på varje plan
  - att alla etiketter går att läsa
- `aria-label` är hantverkarens `bildAlt`, ordagrant. Den ska innehålla "radon".

## 5. Godkännande

Godkänd av UX och bygge 2026-09-30.

## 6. Koordinatorns och hantverkarens beställning, 2026-09-30 (gäller före avsnitt 1–3)

Alt och bildtext står i frontmatter i `src/content/kunskap/fukt/radon.mdx`. Beställningen kom via koordinatorn.

- **Tvåplanshus med platta på mark.** Pilarna i penna går genom en spricka i plattan. Genomföringen tas bort, så att det blir en sak som pekar.
- **Vattnet** kommer från en brunn med en droppe, i blyerts-2: en brunn i marken bredvid huset, med rör in i huset. Kranen tas bort.
- **Dosorna.** Fyra dosor, två per plan i två olika rum. Vid en av dem på bottenvåningen står två måttbyglar i blyerts-2: "30 cm" till väggen och "1,5 m" till fönstret. Fönstret ritas i det rummet.
- **Etiketterna, ordagrant och inga andra:**
  - "blåbetong 1929–1975" vid väggen, i blyerts. Tankstreck i årtalsspannet, som i GT 8.5.
  - "30 cm" och "1,5 m" vid byglarna.
  - "200 Bq/m³" på tumstock.
- **Huset får inte likna** huset på luftfuktighetssidan, `src/assets/illustrationer-kallor/fukt/luftfuktighet-rum.svg`. Titta på den och välj en annan takform, andra proportioner och en annan rumsindelning.
- Publicerad fil under 28 672 byte.
- `aria-label` är bildAlt, ordagrant.
