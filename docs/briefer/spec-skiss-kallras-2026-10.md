# Spec: kallras vid fönstret, och elementet som bryter det

UX och bygge, 2026-09-30. Krav i `docs/briefer/seo-checklista-2026-09-30/kallras.md` punkt 8, huvudbild för `src/content/guider/fukt/kallras.mdx` (ny sida, omgång A). Glasets temperatur står i `docs/briefer/faktablad/guider-kondens-pa-fonster.md` avsnitt 3.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport för kallrassidan finns, med bildAlt, bildtext och en kommentar med etiketterna och måtten. Etiketterna i avsnitt 5 tas då ordagrant därifrån. Illustratören skriver inga egna.

Handen och papperet som i `src/assets/illustrationer-kallor/fukt/kondens-fonster.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Luften kyls mot det kalla glaset, faller längs det och rinner ut över golvet som en kall matta. Står ett element under fönstret stiger dess varma luft längs glaset och bryter fallet. Det kalla fallet i penna är den enda saken som pekar.

Två rutor bredvid varandra, samma rum, samma fönster: vänster utan element (eller med gardinen som stänger in värmen, se avsnitt 2), höger med elementet fritt under fönstret. Penna bara i vänster ruta; i höger ruta är fallet brutet och ritas inte.

**Nyckeltalet** är glasets temperatur, **8,9°**, för ett tvåglas med U 3,0 vid 21 grader inne och minus 10 ute (tabellen på `/fukt/kondens-pa-fonster/`, faktabladet avsnitt 3, egen räkning med SS-EN ISO 6946 och ET 2025:01). Det står en gång, i vänster ruta, med gul markering. Vill hantverkaren ha ett annat tal (Folkhälsomyndighetens golvtemperatur eller lufthastighet när faktabladet verifierat den) byts det, men det blir fortfarande bara ett.

## 2. Beslut

- **Vänster ruta visar gardinen** som hänger ner framför elementet och stänger in värmen, om hantverkarens kommentar vill det; annars inget element alls. Checklistan säger "gärna". Beslutet tas i rapporten, inte av illustratören.
- Rummet ses från sidan: yttervägg till vänster i varje ruta med fönstret i väggen, golv längst ner, ingen möbel.
- Den varma luften i höger ruta är två vågiga pilar i blyerts-2 från elementet uppåt längs glaset. Inte penna, eftersom den inte är problemet.
- Den kalla mattan över golvet i vänster ruta är en lång, platt pil i penna från glasets fot ut i rummet, i samma drag som fallet längs glaset.
- Inga människor, ingen fot, ingen stol.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/kallras.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/kallras.svg` | Skrivs av `npm run illustrationer` |

Frontmatter på sidan: `bild`, `bildAlt`, `bildtext`. Rör inga andra filer.

## 4. Motivet, koordinater (600 × 360)

Två rutor, var och en 270 bred, med en lodrät skiljelinje i blyerts-2 1,5 vid x 300 (y 20–340).

| Del | Vänster ruta | Höger ruta | Stil |
|---|---|---|---|
| Yttervägg | x 40–64, y 20–320, skrafferad | x 330–354, y 20–320 | blyerts 2, skraffering blyerts-2 1,25 |
| Fönster i väggen | glaset som dubbellinje x 58/62, y 70–190, karm över och under | x 348/352, y 70–190 | blyerts 2 |
| Golv | y 320, x 40–290 | y 320, x 330–580 | blyerts 2 |
| Element | (om gardinen) x 70–110, y 220–300 | x 360–400, y 220–300, fyra lodräta lameller | blyerts 2 |
| Gardin | (bara vänster, om vald) vågig linje från y 60 ner till y 305 vid x 116 | – | blyerts 2 |
| Luften | fallet i **penna** 2,5: pil från (70, 80) ner längs glaset till (70, 300), svänger ut över golvet till (260, 312) | två vågiga pilar i blyerts-2 1,5 från elementet (380, 215) upp längs glaset till (365, 80) | |

## 5. Handskriften

Caveat 500, 24 px. Ledare i blyerts-2 1,25 (penna för etiketten vid fallet). **Högst 55 tecken etikettext** för båda rutorna. Orden tas ordagrant ur hantverkarens kommentar.

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| V1 | glaset 8,9° | blyerts på tumstock | vänster ruta, vid glaset, cirka (150, 100) |
| T1 | att den kalla luften faller och rinner över golvet | penna | vänster ruta, över golvpilen, cirka (160, 290) |
| T2 | att ute är minus 10 och inne 21 | blyerts-2 | överst i vänster ruta, cirka (80, 40) |
| T3 | att elementet bryter draget | blyerts | höger ruta, cirka (440, 140) |

Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader. Får etiketterna inte plats i 24 px är det för många; säg till, krymp inte.

## 6. Alt och bildtext

Hantverkaren skriver `bildAlt` (högst 125 tecken, innehåller "kallras") och `bildtext` (med källan för glasets temperatur och elementets placering) i rapporten. `aria-label` i källfilen = bildAlt.

## 7. Budget och kontroller

Publicerad fil under 30 kB (30 720 byte), källan under 12 kB, ingen `<text>` i den publicerade filen. Rendering på 343 px och 1200 px. Vid granskningen på 343 px: går de två rutorna att skilja åt, syns fallet längs glaset och ut över golvet i vänster ruta, syns det att det saknas i höger, går alla etiketter att läsa. Blir rutorna för trånga vid 343 px delas bilden i två skisser, och det beslutet tar UX och bygge.

## 8. Godkännande

Ej ritad.

## 9. Hantverkarens rapport, 2026-09-30

Står i kommentaren vid `bild:` i `src/content/guider/fukt/kallras.mdx`. Gäller före avsnitt 2 och 5. **Vänster ruta visar gardinen** framför elementet, som stänger in värmen, så elementet ritas i båda rutorna. Etiketterna, ordagrant, Caveat 24 px, 54 tecken:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| V1 | glaset 8,9° | blyerts på tumstock | vänster ruta, vid glaset |
| T1 | kallras | penna | vänster ruta, över golvpilen |
| T2 | minus 10 ute, 21 inne | blyerts-2 | överst i vänster ruta |
| T3 | elementet fritt | blyerts | höger ruta, vid elementet |

`aria-label` = bildAlt ordagrant: "Kallras i två rutor: kall luft faller längs fönstret bakom en gardin, och ett fritt element under fönstret bryter fallet."

Godkänd av UX och bygge 2026-09-30. Publicerad fil 18 396 byte, källa 4 851 byte, ingen `<text>`. Godkända avvikelser: elementen står 8 enheter längre in, fallet börjar vid y 90, gardinen hänger från en stång, och elementen har inga ben, så att golvpilen går fri.
