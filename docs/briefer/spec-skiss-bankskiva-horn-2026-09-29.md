# Spec: hörnet i ett L-kök ovanifrån, med skarven, kexen och tre beslag

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/kok/byta-bankskiva.mdx` (utkast), namnet `kok/bankskiva-horn`. Platshållaren står i texten under "Hörnskarven" (rad 176, "SKISS: hörnfogen ovanifrån"); koordinatorn lägger bilden som huvudbild och tar bort platshållaren. Hantverkarens förslag, genom koordinatorn: hörnet i ett L-kök ovanifrån med skarven, tre beslag och kexen, utan mått på beslagen. Checklistan är `docs/briefer/seo-checklista-2026-09-29/kok-4.md` rad 71 och 100. Faktabladet är `docs/briefer/faktablad/guider-byta-bankskiva.md` avsnitt 4, rad 119–134.

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

I ett L-kök möts två skivor i hörnet i en skarv. Kexen sitter i spår i båda skivorna och håller dem i linje, och tre beslag drar ihop dem underifrån i ordningen främre, mittersta, innersta. Skarven i penna är den enda saken som pekar.

Källan: Vedum (faktabladet rad 125, sidan rad 172): hörnet levereras med smalfogmassa, tre kopplingsbeslag och fyra kex; beslagen dras "främre först, sedan mitt, sist inre". **Beslagens lägen och mått saknas i de lästa anvisningarna** (faktabladet rad 133), så beslag och kex ritas utan mått och utan bygel, jämnt fördelade längs skarven. Inget tal, ingen gul markering.

## 2. Beslut

- Skarven ritas som en rak skarv i 90 grader, där den ena skivan går in i hörnet och den andra möter dess kant. Det är den vanligaste lösningen (Agelito säljer både 90 och 45 grader, sidan nämner hörn på 90 grader hos LG Collection). Formen på en fräst skarv, med sin lilla kurva vid framkanten, ritas inte; den skiljer sig mellan tillverkarna.
- Kex och beslag sitter inne i skivorna eller under dem och syns inte ovanifrån. De ritas streckade, som dolda delar på en ritning.
- Siffrorna 1, 2 och 3 vid beslagen visar ordningen från sidan. De är handskrift, inte mått.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/kok/bankskiva-horn.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/kok/bankskiva-horn.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Hörnet sett rakt uppifrån. Väggarna uppe och till vänster, rummet nere till höger. **Inte skalenligt.** Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Väggar | ett skrafferat band längs överkanten y 20–40 från x 60 till x 594, och längs vänsterkanten x 44–60 från y 20 till y 360; kontur bara på insidan (y 40 och x 60) | blyerts 2, skraffering blyerts-2 1,25 som i fogskissen, en `<path>` per rad |
| Skiva A, längs vänster vägg | x 60–240, y 40–360, går in i hörnet | blyerts 2, framkanten x 240 från y 220 ner till y 360 |
| Skiva B, längs övre vägg | x 240–594, y 40–220, möter skiva A:s kant | blyerts 2, framkanten y 220 från x 240 till x 594 |
| Skarven | x 240, från väggen y 40 till innerhörnet (240, 220) | **penna 2,5** |
| Kopplingsbeslag | tre stycken tvärs över skarven, streckade (streck 5 och 4): två ringar r 8 vid x 216 och x 264, förenade av en stång 4 bred. Främre vid y 190, mittersta vid y 130, innersta vid y 70 | blyerts-2 1,5, streckat |
| Kex | fyra ovaler 28 × 10, liggande tvärs över skarven, streckade: vid y 52, y 100, y 160 och y 208, så att de ligger mellan och utanför beslagen utan att röra dem | blyerts-2 1,5, streckat |

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px (i penna för T1). Papperslapp bakom etiketter som står på skivan eller i skraffering. **Högst 30 tecken etikettext.**

| Nr | Text | Färg | Placering |
|---|---|---|---|
| S1 | 1 | blyerts | till höger om det främre beslaget, cirka (282, 198) |
| S2 | 2 | blyerts | till höger om det mittersta, cirka (282, 138) |
| S3 | 3 | blyerts | till höger om det innersta, cirka (282, 78) |
| T1 | skarv | penna | i rummet, cirka (300, 290), ledare i penna 1,25 till skarven vid (240, 214) |
| T2 | kex | blyerts-2 | på skiva B på lapp, cirka (360, 110), ledare till kexet vid y 100 |
| T3 | beslag underifrån | blyerts-2 | på skiva B på lapp, cirka (330, 178), ledare till det främre beslaget |

Tecken: 1 + 1 + 1 + 5 + 3 + 17 = 28. Ingen tumstock. Siffrorna får inte stå så att de läses som mått; står de nära en ledare, flytta siffran, inte ledaren. Står något för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (115 tecken): "Hörnet i ett L-kök ovanifrån, där två bänkskivor möts i en skarv med kex och tre beslag, när du ska byta bänkskiva."
- `bildtext`: "Två skivor möts i hörnet i en färdigfräst skarv. Kexen sitter i spår i båda skivorna och håller dem i linje, och de tre beslagen dras åt underifrån, det främre först, sedan det mittersta och sist det innersta. Stryk fogmassa i skarven innan du trycker ihop skivorna. Källa: Vedums monteringsanvisning för bänkskivor."

Hantverkaren har lämnat motivet men inte ordagrann alt eller bildtext; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `kok/bankskiva-horn`. Vid granskningen på 343 px: syns det på en sekund att det är ett hörn med två skivor, går kexen att skilja från beslagen, läses siffrorna som en ordning.

## 8. Tillstånd

Som takfotsspecen avsnitt 8.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29 efter en retur, publicerad fil 12 606 byte. Returen: diskho på skiva B så att hörnet läses som en köksbänk, kex 34 × 12 och beslagens ringar r 10, papperslapparna på skivan strukna. Godkända avvikelser: T3 "beslag underifrån" står i rummet under skivan vid (330, 252), eftersom diskhon tar dess plats, och ledaren går fri från siffran 1; T1:s ledare går till glipan mellan kexet och innerhörnet, så att inga ledare korsar siffror eller konturer. Inlagd som huvudbild i `byta-bankskiva.mdx` med alt och bildtext enligt avsnitt 6; platshållaren i texten under "Hörnskarven" är borttagen.
