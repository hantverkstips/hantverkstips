# Spec: köksväggen framifrån, med listen under arbetet och glipan när det är klart

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/kok/kakla-kok.mdx` (utkast), namnet `kok/kakla-kok`. Hantverkarens förslag, genom koordinatorn: köksväggen framifrån med listen och glipan. Checklistan är `docs/briefer/seo-checklista-2026-09-29/kok-4.md` rad 157, 170 och 198 ("köksväggen i elevation: bänkskiva, glipa, första raden, skåpens underkant, eluttag och hel platta vid synlig kant"). Faktabladet är `docs/briefer/faktablad/guider-kakla-kok.md`; sidan rad 118–124 och steg 3, 6 och 7 (rad 143–147).

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`, tvådelningen som i `src/assets/illustrationer-kallor/badrum/toalettstol-fot.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

När överskåpen går längs hela väggen står de hela plattorna nertill vid bänkskivan och den kapade raden uppe under skåpen, där den syns minst. Under arbetet vilar den första raden på en rak list som är uppallad strax ovanför bänkskivan. När det är klart är listen borta och glipan mot bänkskivan fylld med silikon. Listen i penna är den enda saken som pekar.

Källorna: sidan rad 118 (hela plattor där kanten syns, Hornbach; kapade raden under skåpen, Christians råd), rad 120 (listen, Gör Det Själv; första raden "några millimeter ovanför bänkskivan"), rad 124 (glipan fylls med silikon, Vedum och LG Collection) och steg 6 (listen tas bort när fixet torkat). **Ingen källa ger ett mått som gäller alla**: glipan är "några millimeter" hos Vedum och 10 mm hos Bolist, och sidan säger att bänkskivans anvisning gäller. Därför inget tal, ingen bygel och ingen gul markering.

## 2. Beslut

- Bilden delas i två halvor av en lodrät streckad linje: vänster under arbetet, höger klar. Samma vägg, samma rader, så att skillnaden är listen, glipan och den kapade raden.
- Plattorna ritas 44 × 44 med 3 i fog. Det är ingen verklig plattstorlek och bildtexten säger inget om den.
- Glipan är förstorad till 10 enheter så att den syns på 343 px.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/kok/kakla-kok.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/kok/kakla-kok.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Köksväggen rakt framifrån. **Inte skalenligt.** Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

| Del | Form och läge | Stil |
|---|---|---|
| Överskåp | två skåp x 44–316 och x 324–594, y 0–70, med var sitt litet handtag nertill | blyerts 2 |
| Bänkskiva | framkanten som ett band y 282–300, x 44–594 | blyerts 2 |
| Underskåp | luckornas överkanter och en lodrät skarv vid x 320, y 304–360 | blyerts-2 1,5 |
| Delningslinje | lodrät, streckad (6 och 5), x 320 från y 70 till y 282 | blyerts-2 1,25 |
| Hela plattor | fyra rader, 44 höga med 3 i fog: y 228–272, 181–225, 134–178, 87–131. I sidled 44 breda med 3 i fog, från x 48 i vänster halva och från x 327 i höger | blyerts 2 för plattornas konturer |
| Kapad rad | bara i höger halva: en smal rad y 72–84 upp mot skåpens underkant. I vänster halva är den remsan tom papper | blyerts 2 |
| Glipan | i båda halvorna 10 hög, mellan första radens underkant y 272 och bänkskivan y 282 | |
| Listen, vänster | en rak list i glipan, y 272–278, x 48–316, som vilar på tre små kilar (trianglar 6 höga) på bänkskivan vid x 80, x 200 och x 300 | **penna 2,5**, kontur, ingen fyllning |
| Silikon, höger | en sträng i glipan x 327–590, ritad som en mjuk konkav båge mellan plattans underkant och bänkskivan, med två korta parallella bågar i blyerts-2 1,25 inuti | blyerts 2 |
| Eluttag, höger | ett dubbeluttag, rektangel 56 × 30 med två runda uttag, mitt i raden y 181–225 kring x 470; plattorna runt det har ett urtag som följer ramen | blyerts 2 |

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px (i penna för T1). Papperslapp bakom varje etikett som står på plattorna (etiketten plus 4 runt om). **Högst 52 tecken etikettext.**

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | list | penna | vänster halva, på plattorna på lapp, cirka (150, 250), ledare i penna 1,25 till listen vid (170, 275) |
| T2 | hela plattor | blyerts-2 | vänster halva, på plattorna på lapp, cirka (70, 160) |
| T3 | kapad rad | blyerts-2 | höger halva, på plattorna på lapp, cirka (350, 116), ledare till den kapade raden vid (380, 78) |
| T4 | glipa med silikon | blyerts-2 | höger halva, på plattorna på lapp, cirka (340, 256), ledare till silikonet vid (420, 278); går inte över eluttaget |
| T5 | bänkskiva | blyerts-2 | på underskåpen till höger, cirka (440, 336) |

Tecken: 4 + 12 + 9 + 17 + 9 = 51. Ingen tumstock. Eluttaget, skåpen och kilarna får ingen etikett. Står något för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (118 tecken): "En köksvägg framifrån som visar hur du ska kakla kök, med hela plattor på en list och silikon i glipan mot bänkskivan."
- `bildtext`: "Till vänster står den första raden hela plattor på en rak list, uppallad strax ovanför bänkskivan. Till höger är listen borta, glipan mot bänkskivan är fylld med silikon och den kapade raden sitter uppe under överskåpen, där den syns minst. Hur bred glipan ska vara står i anvisningen för din bänkskiva."

Hantverkaren har lämnat motivet men inte ordagrann alt eller bildtext; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `kok/kakla-kok`. Vid granskningen på 343 px: syns skillnaden mellan halvorna på en sekund, syns glipan mot bänkskivan i båda, läses listen som en list och inte som en rad plattor, går alla etiketter att läsa.

## 8. Tillstånd

Som takfotsspecen avsnitt 8.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 19 214 byte. Godkända avvikelser: kilarna 4 höga och i penna med listen, eftersom listen tar 6 av glipans 10; den kapade raden har skåpet som överkant; urtaget 4 utanför uttagets ram; plattorna avkapade vid delningen och högerkanten. Rättat vid granskningen: T5 "bänkskiva" fick en kort ledare upp till framkanten, eftersom etiketten annars lästes som underskåpens namn. Inlagd i `kakla-kok.mdx` med alt och bildtext enligt avsnitt 6. Sidan hade ingen platshållarkommentar.
