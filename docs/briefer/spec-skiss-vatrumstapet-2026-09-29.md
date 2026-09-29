# Spec: skiss av våtrumstapetens skarvar i ett duschhörn

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/kunskap/badrum/vatrumstapet.mdx` (utkast). Checklistan är `docs/briefer/seo-checklista-2026-09-29/badrum-4.md` rad 258 och 286, faktabladet `docs/briefer/faktablad/kunskap-vatrumstapet.md` avsnitt 2a, 2b och 2d (GVK 2026 § 8.2.4 och § 1.2). Hantverkarens förslag: innerhörn på duschplatsen, med svetsad skarv 100 mm in på nästa vägg i gult, omlott i våtzon 1 och vågrät omlott mot golvmattan.

Rummet ritas i samma parallellprojektion och samma hand som zonskissen, `src/assets/illustrationer-kallor/badrum/vatzoner.svg`. Läs `docs/briefer/spec-skiss-vatzoner-2026-09-28.md` och `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

På duschplatsen svetsas skarven, och den ligger en bit in från hörnet. Utanför duschplatsen får våderna ligga omlott, och nere vid golvet ligger tapeten omlott över golvmattans uppvik. Den svetsade skarven i penna är den enda saken som pekar.

Källorna, GVK Säkra Våtrum 2026 § 8.2.4 ordagrant: "I plats för bad eller dusch ska skarvar på väggmattor trådsvetsas. Skarvarna ska placeras minst 100 mm från innerhörn och 100 mm från ytterhörn." "I plats för bad eller dusch är det inte tillåtet med överlapp mellan väggmatta/väggmatta." "I plats för bad eller dusch, våtzon 1 och våtzon 2 är det godkänt med överlapp mellan väggmatta/golvmatta eller väggmatta/bård." "I våtzon 1 och våtzon 2 ska skarvar på väggmattor trådsvetsas, alternativt utföras enligt överlappsmetod." § 1.2: överlappskarvar godkända i våtzon 1 sedan 2026. Duschplatsen går 2,0 m upp (tätskiktsbladet avsnitt 2). **Nyckeltalet är minst 100 mm.** Det får gul markering en gång.

## 2. Beslut och varning

- **Tarketts "10 cm runt hörnet" ritas inte.** Tarkett beskriver hur grundväggen viks runt hörnet mot en fondvägg; det är inte en skarv 100 mm från hörnet och inte GVK:s regel. Bilden visar bara GVK:s skarv: minst 100 mm från innerhörnet, mätt från hörnet till skarven. Tapeten går obruten runt hörnet.
- Inte skalenligt. 100 mm är ritat som 50 enheter så att bygeln och den svetsade skarven går att se på 343 px; bildtexten säger att skissen inte är skalenlig.
- Ingen bård mot taket och ingen genomföring; de är två saker till.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/vatrumstapet-horn.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/badrum/vatrumstapet-horn.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

Ett duschhörn snett uppifrån som en öppen låda: bakväggen rakt fram, vänsterväggen i perspektiv, en remsa golv. Djupvektor (−140, 56). Ingen skraffering. Flytta högst 8 enheter om en etikett kräver det.

| Del | Koordinater | Stil |
|---|---|---|
| Bakvägg | x 200–600 (fortsätter ut ur bilden till höger), golvlinje y 300, ingen överkant (väggen fortsätter uppåt ut ur bilden) | blyerts 2 |
| Innerhörnet | lodrät linje x 200 från y 300 upp till y 12 | blyerts 2 |
| Vänstervägg | (200,12) (200,300) (60,356) (60,68), ingen överkant | blyerts 2 |
| Golv | (200,300) (600,300) och (200,300) (60,356); golvet går ut ur bilden nedtill | blyerts 2 |
| Golvmattans uppvik | dold bakom tapeten: streckad linje i blyerts-2 1,5 vid y 274 på bakväggen och parallellt på vänsterväggen från (200,274) till (60,330) | blyerts-2 streckad |
| Tapetens nederkant, den vågräta omlotten | y 286 på bakväggen och från (200,286) till (60,342) på vänsterväggen. Mellan y 274 och 286 ligger tapeten över uppviket | blyerts 2 |
| Duschplatsen | streckad i blyerts-2 1,5: lodrätt vid x 400 från y 300 upp till y 60 och vågrätt vid y 60 från x 200 till x 400; på vänsterväggen från (200,60) till (60,116) | blyerts-2 streckad |
| **Svetsad skarv** | lodrät på bakväggen vid x 250 från y 286 upp till y 12, penna 2,5, med korta tvärstreck 4 långa var 16:e enhet som en svetstråd | **penna 2,5** |
| Omlottskarv | lodrät på bakväggen vid x 520 från y 286 upp till y 12: den synliga kanten i blyerts 2 vid x 520 och den täckta kanten streckad i blyerts-2 1,25 vid x 512 | blyerts 2 och blyerts-2 |
| Måttet minst 100 mm | vågrät bygel i blyerts-2 1,5 vid y 110 från x 200 (hörnet) till x 250 (skarven) | blyerts-2 |

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px. Papperslapp där en etikett korsar en linje. **Högst 70 tecken etikettext** (zonskissen hade 70 tecken och vägde 22 kB utan skraffering).

| Nr | Text | Färg | Placering |
|---|---|---|---|
| S1 | minst 100 mm | blyerts på tumstock | till höger om skarven, cirka (262, 118), ledare till bygelns mitt vid (225, 110). Tumstock `#e8b830` 65 procent bakom hela etiketten, roterad 1 till 2 grader |
| S2 | svetsad skarv | penna | till höger om skarven, två rader om den inte ryms mellan x 258 och x 396 ("svetsad" / "skarv"), cirka (262, 180) |
| S3 | duschplats | blyerts-2 | inne i duschplatsen på bakväggen, cirka (270, 250) |
| S4 | våtzon 1 | blyerts-2 | till höger om duschplatsens gräns, cirka (414, 80) |
| S5 | omlott | blyerts | vänster om omlottskarven, cirka (430, 180), ledare till (512, 186) |
| S6 | omlott mot golvmattan | blyerts | på golvet på lapp, cirka (250, 340), ledare upp till den vågräta omlotten vid (330, 280) |

Tecken: 12 + 13 + 10 + 8 + 6 + 21 = 70. Vänsterväggen får ingen etikett; den visar bara att tapeten går runt hörnet. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (121 tecken): "Innerhörn i en dusch med våtrumstapet, där skarven närmast hörnet är svetsad och skarvarna utanför duschen ligger omlott."
- `bildtext`: "På duschplatsen ska skarven mellan två våder svetsas och ligga minst 100 mm från hörnet. Utanför duschplatsen, i våtzon 1, får våderna ligga omlott och tätas med tätningsmassa. Där tapeten möter golvmattans uppvik får den vågräta skarven ligga omlott i alla zoner. Skissen är inte skalenlig. Källa: GVK Säkra Våtrum 2026 § 8.2.4."

Hantverkaren har inte lämnat ordagrann alt eller bildtext; texterna ovan är skrivna ur sidans egna ord och ska höras av hantverkaren före publicering.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Resten som i golvvärmespecen `docs/briefer/spec-skiss-golvvarme-badrum-2026-09-29.md` avsnitt 7, med `badrum/vatrumstapet-horn`. Vid granskningen på 343 px: läses bilden som ett hörn, syns skillnaden mellan den svetsade skarven och omlottskarven, och ser man att tapeten ligger över golvmattan?

## 8. Tillstånd

Som golvvärmespecen avsnitt 8.

## 9. Godkännande

Godkänd 2026-09-29 av UX och bygge, granskad i 343 px: 23 757 byte, ingen `<text>`. Godkända avvikelser: S1 med baslinje y 126 så att ledaren inte läses som en förlängning av bygeln, och ledaren korsar den svetsade skarven; bygelns ändar är sneda streck. Omlotten mot golvmattan är ett smalt band på 343 px men går att se. Inlagd som `bild` på tapetsidan.
