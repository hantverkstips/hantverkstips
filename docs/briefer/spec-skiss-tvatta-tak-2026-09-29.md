# Spec: huset från gaveln, mossan på norrsidan och tre steg

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/tak/tvatta-tak.mdx` (utkast), där platshållaren väntar på `tak/tvatta-tak`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak-4.md` rad 259 ("ett tak med norrsida, skuggor och mossans vanliga platser, och ordningen från nock mot takfot"). Faktabladet är `docs/briefer/faktablad/guider-tvatta-tak.md` rad 44, 89–92 och 146–160. Koordinatorn: stegen får inte nämna något medel vid namn.

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Mossan sitter där solen inte når: på norrsidan och under träden. Söder om nocken är taket grått. Bredvid står sidans tre steg (rad 113–115): borsta bort mossan, lägg på algmedlet, låt det vara. Mossan i penna är den enda saken som pekar.

## 2. Beslut

- **Ordningen från nock mot takfot ritas inte.** Faktabladet rad 91, 137 och 160: ingen tillverkare anger den för pannor, och sidan säger den inte. Plannjas "nedifrån och upp, uppifrån och ned" gäller tvättmedel på plåt och står på sidan i det sammanhanget. Checklistans punkt uppfylls med norrsidan, trädet och mossans platser; SEO får veta att ordningen saknar källa.
- Stegen säger "algmedel", sidans ord för sorten, aldrig ett produktnamn eller ett ämne.
- Ingen skuggning (DESIGN.md avsnitt 7). Skuggan visas av trädet och solen, inte med skraffering på taket.
- **Inget nyckeltal och ingen gul markering.** 12 timmar hör till vädret och står i bildtexten.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/tvatta-tak.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/tvatta-tak.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Ett enplanshus sett från gaveln, med sadeltak. Norr till vänster, söder till höger. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Mark | en vågrät linje y 300 från x 44 till x 594 | blyerts 2 |
| Husets gavel | väggar x 150 och x 390 från y 300 upp till y 200, en dörr eller ett fönster på gaveln får inte finnas (det drar blicken) | blyerts 2 |
| Taket | sadeltak med nocken vid (270, 84), takfoten ut till (126, 206) och (414, 206), taket 10 tjockt (två linjer) | blyerts 2 |
| Pannrader | 4 till 5 korta streck vinkelrätt mot takfallet på varje sida, som antyder pannorna | blyerts-2 1,25 |
| Skorsten | ingen | |
| Träd | ett lövträd till vänster om huset: stam x 78–92 från y 300 upp till y 200, en luftig krona som en öppen, bucklig kontur från cirka (44, 60) till (160, 200), så att den hänger in över norrsidans nedre del | blyerts 2 för stammen, blyerts-2 1,5 för kronan |
| Sol | uppe till höger, en ring r 18 kring (470, 58) med åtta korta strålar | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar.** Mossan i penna 2,5: små buckliga tuvor (öppna bågar, 3 eller 4 buckler var, cirka 14 × 8) på norrsidans takfall, tätast nedtill under kronan och längs takfoten, glesare upp mot nocken, sammanlagt 8 till 10 tuvor. Två tuvor får sitta i takfotens kant. Söder om nocken inga tuvor alls.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. **Högst 46 tecken etikettext**, orden är sidans egna.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | norr | blyerts | under takfoten till vänster, vid väggen, cirka (160, 236), innanför gaveln eller strax utanför |
| T2 | söder | blyerts | motsvarande till höger, cirka (340, 236) |
| T3 | mossa | penna | ovanför norrsidan mellan kronan och nocken, cirka (170, 62), ledare i penna 1,25 till en tuva |
| S1 | 1 borsta | blyerts | stegen i en kolumn till höger om huset, vänsterställda vid x 436, baslinjer y 250, 276 och 302 om det ryms, annars y 232, 258, 284 |
| S2 | 2 algmedel | blyerts | som ovan |
| S3 | 3 låt det vara | blyerts | som ovan |

Siffran i varje steg är en del av texten, skriven i samma hand. Tecken: 4 + 5 + 5 + 8 + 10 + 14 = 46. Ingen tumstock. Står stegen för tätt mot solens strålar eller husets takfot: flytta solen, inte stegen. Står något för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt`: "Ett hus från gaveln där mossan växer på den skuggiga norrsidan, med de tre stegen när du ska tvätta tak."
- `bildtext`: "Mossan växer mest på norrsidan och där träd skuggar taket, medan den södra sidan håller sig grå. Borsta eller skrapa bort mossan först, lägg sedan på algmedlet och låt det vara, så sköter regn och vind resten. Välj en dag utan frost, när det inte väntas regn inom 12 timmar. Källa: Benders produktblad 2026-06."

Hantverkaren har inte lämnat ordagrann alt eller bildtext för den här bilden; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `tak/tvatta-tak`. Vid granskningen på 343 px: syns det på en sekund att mossan sitter på den ena sidan, under trädet, går de tre stegen att läsa i ordning, går huset att känna igen utan att det ser ut som en varumärkesbild.

## 8. Tillstånd

Som takfotsspecen avsnitt 8.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 17 452 byte. Godkända avvikelser: "söder" 6 enheter åt vänster; stegen på baslinjerna 232, 258 och 284; åtta tuvor ritade som låga kuddar, eftersom lösa bucklor lästes som bokstaven m. Tuvorna läses som en röd rad längs norrsidan på 343 px, och det räcker för budskapet. Inlagd i `tvatta-tak.mdx` med alt och bildtext enligt avsnitt 6.
