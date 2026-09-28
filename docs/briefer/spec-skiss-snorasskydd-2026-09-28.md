# Spec: skiss av snörasskyddet över entrén

UX och bygge, 2026-09-28. Beställd av koordinatorn för `src/content/kunskap/tak/snorasskydd.mdx` (utkast), där kommentaren på rad 78 väntar på `tak/snorasskydd-entre`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak.md` avsnitt 8, faktabladet `docs/briefer/faktablad/kunskap-snorasskydd.md` avsnitt 1 och 7. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Snörasskyddet sitter längs hela takfoten, också där det inte finns någon dörr under, och konsolerna sitter tätt. Lindab: "Sätt snörasskydd längst hela takfoten", eftersom ett skydd bara över entrén tar snö från en större del av taket och kan kollapsa. Konsolavståndet högst 1,2 m är fast hos Lindab, Benders, Plannja och BMI (faktabladet avsnitt 1). Det är bildens enda tal och får gul markering. Inga andra mått: husets längd, höjd och lutning har ingen källa i bilden och ritas utan tal.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/snorasskydd-entre.svg` | Ny källa. Mappen `tak/` är ny |
| `src/assets/illustrationer/tak/snorasskydd-entre.svg` | Skrivs av `npm run illustrationer` |

Inbäddning senare, av hantverkaren: `<Illustration namn="tak/snorasskydd-entre" alt="..." bildtext="..." />` på kommentarens plats. Rör inga andra filer; listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`.

## 3. Motivet

Ett enkelt hus med sadeltak snett framifrån i parallellprojektion: långsidan rakt mot läsaren, gaveln till höger och snett bakåt så att takets lutning syns. Entrédörren sitter i långsidan, under takfoten. Marken skrafferad under huset. Snö på taket ovanför skyddet. Inga människor, inga fönsterdetaljer utöver en enkel ruta, ingen skorsten.

Koordinater att utgå från (600 × 360), djupvektor för hela huset (100, −60):

| Del | Koordinater | Stil |
|---|---|---|
| Långsidans vägg | x 70–400, y 200–330 | blyerts 2 |
| Gavelväggen | parallellogram (400,200) (400,330) (500,270) (500,140), gavelspetsen över mitten av dess överkant | blyerts 2 |
| Takfoten fram | (55,190) till (415,190), taket skjuter ut över väggen | blyerts 2 |
| Takytan fram | parallellogram från takfoten till nocken (105,90)–(465,90) | blyerts 2, ingen fyllning |
| Takfallet bak på gaveln | från nockens högra ände ner till (515,130) | blyerts 2 |
| Dörr | x 130–172, y 244–330, med ett trappsteg | blyerts 2 |
| Ett fönster | långsidan till höger om dörren, x 300–360, y 232–282 | blyerts 2 |
| Mark | linje y 330 från x 44 till 590; skraffering y 336–360 | blyerts 2 för linjen, skraffering som fogskissen |
| Snö | mjuk vågig överkant på takytan, från skyddet och en bit upp, hela takets längd | blyerts-2 1,5, inga prickar och inga flingor |
| Konsoler | korta blyerts-streck 2 px, ett var 43:e enhet längs takfoten från x 62 till 405 (43 enheter motsvarar 1,2 m om takfoten är cirka 10 m; bilden är inte skalenlig och säger inte det) | blyerts 2 |

**Snickarpennan, den enda saken som pekar**: snörasskyddet självt, två parallella rör 4 enheter isär, penna 2,5 px, strax ovanför takfoten på takytan (cirka 10 enheter upp längs takytan) från takets vänstra ände till den högra, i hela längden. Det ska vara uppenbart vid 343 px att skyddet går förbi dörren åt båda hållen.

**Måttet**: en måttbygel i blyerts-2 1,5 mellan två konsoler långt från dörren (till exempel konsol 6 och 7), med texten A4 och tumstock `#e8b830` 65 procent bakom texten, roterad 1 till 2 grader. Bygel och text får stå på väggen under takfoten eller på takytan ovanför skyddet, där det är luft; texten på papperslapp om den ligger på snön.

## 4. Handskriften

| Nr | Text | Färg | Placering |
|---|---|---|---|
| A1 | takfot | blyerts-2 | vid takfotens ena ände, ledare till takfoten |
| A2 | entré | blyerts-2 | vid dörren, ledare eller direkt bredvid |
| A3 | konsol | blyerts-2 | ledare till en konsol som inte är en av måttkonsolerna |
| A4 | högst c 1 200 mm | blyerts-2 på tumstock | vid måttbygeln |
| A5 | snörasskydd hela vägen | penna | i himlen ovanför taket eller vid skyddets ena ände, nära nog att läsas ihop med det röda skyddet |

Caveat 500, 24 px, inget under. Himlen ovanför taket och ytan till höger om gaveln är luft för etiketter. Får det inte plats: säg till, krymp inte.

## 5. Alt och aria-label

`aria-label` på roten: Hus med sadeltak där snörasskyddet går längs hela takfoten, förbi entrédörren åt båda hållen.

`alt` i mdx: samma text som aria-label.

`bildtext` i mdx: Skyddet går förbi dörren åt båda hållen, eftersom snön från hela taket trycker på skyddet och ett kort skydd över dörren kan ge vika. Konsolerna sitter på högst c 1 200 mm.

## 6. Budget

Publicerad fil under 32 kB. Resten som fogspecen avsnitt 7, med `tak/snorasskydd-entre` i stället för fogskissen.
