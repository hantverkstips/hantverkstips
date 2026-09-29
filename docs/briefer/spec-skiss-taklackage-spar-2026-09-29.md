# Spec: vattnets väg från läckan till fläcken i innertaket

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/tak/taklackage.mdx` (utkast), där platshållaren väntar på `tak/taklackage-spar`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak-4.md` rad 53 och 66 ("ett tak i genomskärning: panna, läkt, underlagstak och vattnets väg till fläcken i innertaket"). Faktabladet är `docs/briefer/faktablad/guider-taklackage.md`; bilden bär inget tal.

Handen, papperet, pannorna, läkten och underlagstaket ritas som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`, som godkändes i dag. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Fläcken i innertaket sitter lägre ner i takfallet än stället där vattnet kom in. Vattnet har runnit längs taket innan det droppat igenom. Läsaren ska se att hon ska börja på vinden ovanför fläcken och följa fukten uppåt. Vattnets väg i penna är den enda saken som pekar.

Källan är sidan själv (rad 59 och 67 i utkastet): vattnet "har tagit sig in under pannorna, runnit på underlagstaket eller längs en läkt och kommit igenom bjälklaget där det fanns en springa", och "stället där det kommer in ligger oftast högre upp i takfallet". Genomföringar som huvar är ett av de ställen Boverket pekar ut. **Inget tal, ingen måttbygel och ingen gul markering**, som i fogskissen: det finns inget mått med källa att visa.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/taklackage-spar.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/taklackage-spar.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 3. Motivet, koordinater

Snitt längs en takstol, sett från gaveln. Taket lutar ner från uppe till vänster mot höger. Vinden under taket, bjälklaget och innertaket nedtill, rummet under. **Inte skalenligt.** Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

Linjen `U(x) = 56 + 0,34 × (x − 44)` är råspontens undersida (y 56 vid x 44, y 242 vid x 590).

| Del | Form och läge | Stil |
|---|---|---|
| Takstol | band 16 tjockt under U(x), x 44–590 | blyerts 2 |
| Råspont med underlagspapp | band 10 ovanpå U(x), x 44–590 | blyerts 2 |
| Ströläkt, bärläkt, pannor | som i takfot-snitt: ströläkt band 8, bärläkt 12 × 10 var 110:e enhet, pannor som överlappande plattor med nos | blyerts 2 |
| Huv | ett lodrätt rör x 164–184 som går ner genom pannorna och underlagstaket och slutar under det, och upp till y 12, med en krage som ligger på pannorna runt röret | blyerts 2 |
| Bjälklag | band y 276–292, x 44–590, med en springa 6 bred vid x 400 | blyerts 2 |
| Isolering | ovanpå bjälklaget, y 244–276, x 44 till där taket möter den | skraffering som i fogskissen, glest (två rader), en `<path>` per rad, blyerts-2 1,25; uppehåll 4 runt vattnets väg |
| Innertak | bjälklagets undersida, y 292, är innertaket | blyerts 2 |

**Snickarpennan, den enda saken som pekar.** Vattnets väg, penna 2,5 px, runda ändar:

1. Tre korta droppar vid kragens nedre kant, där vattnet tar sig in, cirka (190, U − 18).
2. En linje som går genom underlagstaket bredvid röret och sedan rinner längs takstolens undersida nedåt, parallellt med den och 3 enheter under, från x 192 till x 392.
3. Två droppar som faller lodrätt från (392, U + 20) ner mot isoleringen.
4. En streckad linje (streck 6, mellanrum 5) genom isoleringen och springan i bjälklaget vid x 400.
5. Fläcken: en oregelbunden öppen ring, som när man ringar in för hand, under innertaket kring (400, 300), cirka 44 × 12, och en droppe som hänger under den vid (400, 322).

Inget annat i penna utom marginallinjen, etiketterna T5 och T6 och deras ledare.

## 4. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px (i penna för T5 och T6). Papperslapp bakom etiketter som står i skraffering. **Högst 50 tecken etikettext**, orden är sidans egna.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | panna | blyerts-2 | ovanför taket, cirka (330, 100), ledare till en panna vid (320, 128) |
| T2 | läkt | blyerts-2 | ovanför taket, cirka (440, 140), ledare till en bärläkt |
| T3 | underlagstak | blyerts-2 | ovanför taket till höger, cirka (470, 190), ledare till råsponten vid (520, 212) |
| T4 | vind | blyerts-2 | på vinden, cirka (250, 214) |
| T5 | kom in | penna | ovanför taket, cirka (200, 40), ledare till dropparna vid kragen |
| T6 | fläcken | penna | i rummet till höger om fläcken, cirka (452, 330) |
| T7 | innertak | blyerts-2 | i rummet, cirka (120, 330), ledare till innertaket vid (140, 292) |

Tecken: 5 + 4 + 12 + 4 + 6 + 7 + 8 = 46. Ingen tumstock. Takstolen, huven, isoleringen och bjälklaget får ingen etikett. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 5. Alt, aria-label och bildtext

- `aria-label` och `bildAlt`: "Ett tak i genomskärning med ett takläckage vid en huv, där vattnet rinner nedåt längs taket innan det syns i innertaket."
- `bildtext`: "Vattnet kom in vid huven, rann längs undersidan av taket och droppade igenom en springa i bjälklaget längre ner. Stället där det kommer in ligger oftast högre upp i takfallet än fläcken, så börja på vinden rakt ovanför fläcken och följ fukten uppåt."

Hantverkaren har inte lämnat ordagrann alt eller bildtext för den här bilden; texterna är byggda av sidans egna meningar.

## 6. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `tak/taklackage-spar`. Vid granskningen på 343 px: syns det att vattnet kom in högre upp än fläcken, går vattnets väg att följa från kragen till fläcken utan att tappa den, går alla etiketter att läsa.

## 7. Tillstånd

Som takfotsspecen avsnitt 8.

## 8. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 19 748 byte. Godkända avvikelser: pannorna ligger som i takfotsskissen, högre än specens koordinater, så T1 och T3 står högre och T1:s ledare slutar i en panna; bärläkten flyttad så att ingen hamnar i huven; T6 har en kort ledare i penna. Dropparna vid kragen flyter ihop till en klick på 343 px men läses ihop med "kom in". Inlagd i `taklackage.mdx` med alt och bildtext enligt avsnitt 5.
