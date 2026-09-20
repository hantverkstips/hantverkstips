# Faktablad: /rakna/gipsskruv/

Ur `src/pages/rakna/gipsskruv.astro`, `GipsskruvForm.astro`, `src/lib/kalkyl/gipsskruv.ts` och registret, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG gipsskruv, VERKTYGSNAMN "Vilken gipsskruv". reklam={true}, butikNamn, produktkort essve-fzb-39x41 (bara när visaBandadSkruv) och makita-dfr550zx1 alltid. Rörs inte.
- Title "Vilken gipsskruv? Längd och gänga för din vägg" 46. Krav: frågeordet först, gipsskruv + längd, "för din vägg" får gå (under 44 ger varumärket). Guidens seoTitle "Gipsskruv, rätt längd och gänga".
- Description 138. Behåll gipsskruv + längd; spetsen och ytbehandling får gå.
- H1 "Vilken gipsskruv ska du ha? Räkna ut längd och gänga". Behåll frågeordet och längd.
- Registret: namn "Vilken gipsskruv ska du ha?" behålls (frågeform). rad substantivramsa.

## Formuläret (bara val, inga talfält)

- skiva radio SKIVA_VAL: 9 "9,5 mm, den tunna skivan"/kort "9,5 mm", 12.5 "12,5 mm, vanlig gipsskiva", 15 "15 mm, den tjocka skivan". Hjälp: står det 13 mm är det 12,5; tunna säljs som 9 och mäter 9,5.
- lag radio LAG_VAL 1 Ett lag, 2 Två lag. Legend "Antal lag på den sida du skruvar".
- regel radio REGEL_VAL: tra Träregel, stal-tunn "Stålregel, plåt upp till 0,9 mm", stal-tjock "Stålregel, plåt över 0,9 mm". Hjälp: godstjockleken är plåtens tjocklek, inte profilens bredd; vanlig innerväggsstomme under 0,9; bärande profiler och kontorshus över.
- fog radio ja/nej "Torr fogtätning bakom skivan". Hjälp: remsor mot ljud och drag i stället för fogmassa, mellan regel och skiva, ca 7 mm.
- miljo radio MILJO_VAL torrt "Torrt rum", vatrum "Våtrum", ute "Utomhus, utegips". Hjälp: styr bara ytbehandlingen; utomhus = utegips bakom fasad.
- Knapp "Ge mig skruven".

## Konstanter (rörs inte)

- TRA_IN_I_REGEL 20 mm, STAL_GENOM 10 mm, FOGTATNING 7 mm (Norgips). PLAT_GRANS 0,9 (Gyproc QS Quick). Nålspets 0,4 till 0,9 (Essve 522224 via Proffsmagasinet). Borrspets 0,7 till 2,0 (Essve). KANT_CC 200, FALT_CC 300 (Norgips, Svenskt Trä). Handelslängder 25 30 35 38 41 45 51 55 60 65 70 75 (Essve spann 25 till 75; 60 till 75 egen indelning, behövs bara två lag 15 på trä med fog). Skiva 9 = 9,5.
- Längdtabell trä: 9-1 30 (alt 35), 9-2 41 (45), 12.5-1 41 (35, anm: tumregeln stannar på 35, vi skriver 41 som guiden, i tak aldrig kortare), 12.5-2 45 (51), 15-1 41, 15-2 51 (55). Stål: 9-1 25, 9-2 30, 12.5-1 25, 12.5-2 38 (41), 15-1 30 (25, anm: 25 är minsta och precis på gränsen, vi skriver 30), 15-2 41. 9-raderna inte i guidens tabell.
- Gänga grov i trä, fin i stål (Gör Det Själv). Spets: trä S-spets eller nålspets; tunn plåt nål; tjock borr.
- Ytbehandling: ute C4 eller rostfri A2 (Essve GU Corrseal C4, Beijer A2 = C4). Våtrum C4/A2, egen hållning, källorna kräver C1 bakom tätskikt. Torrt trä: elförzinkad eller fosfaterad C1. Torrt stål: fosfaterad C1 (Gör Det Själv).
- Svenskt Trä anger 30 mm på ett lag (17,5 ner i regeln, under Norgips 20; vi följer Norgips).
- STANDARD 12,5, ett lag, trä, ingen fog, torrt → 41 mm grov, bandad skruv visas.
- Fel: "Välj 9,5, 12,5 eller 15 mm skiva" etc. Testet kräver bara att fel finns.
- Testet matchar: anm innehåller '35' resp '25'; gorInteDetHar innehåller 'grovgängad', 'nålspets'/'Nålspets', 'tak', 'utegips'; spetsSkal innehåller '2' och '0,7'; fogtatningText innehåller '41'; ytbehandling.kort innehåller C4 och A2; text innehåller 'tätskikt', 'Corrseal'; skruvavstandText innehåller 'c 200' och 'c 300'; ytbehandling.kort exakt 'Elförzinkad eller fosfaterad' och 'Fosfaterad'.

## Gör inte det här (modulen)

- Grov träskruv i stål: snurrar utan att ta, batteriet tros slut; fin gänga i stål (GDS).
- Nålspets i plåt över 0,9: tar inte hål, spetsen blir rund; Gyproc högst 0,9; borrspets.
- Kortaste längden i tak: Svenskt Trä 30 mm på ett lag = 17,5 ner, under Norgips 20; i vägg ok, i tak hänger skivan i skruvarna, aldrig kortare än raden.
- Fosfaterad ute: C1 torra rum, rostar; C4 eller A2.

## Resultatspalten i dag

Etikett skiva, lag, regel. Stort tal mm gipsskruv. Rad miljö + fog. Tre block Gänga/Spets/Ytbehandling med kort + skäl (korta av designskäl, byggs inte ut i spalten). "Så kom längden fram": minst enligt tumregeln, närmaste längd över, ner i regeln, andra längden på raden; anm; fogtatningText; "tunna skivan står inte i tabellen". "Så tätt ska de sitta": skruvavstandText + länk /rakna/innervagg/ ("regelkalkylatorn räknar antalet"). Gör inte. Länk sa-raknar-vi. Dela ("Adressen innehåller dina val").
Kortsvar: regeln bestämmer skruven; ett lag på trä 41 mm grov; samma på stål 25 fin; två lag på trä 45 eller mer; plåt över 0,9 borrspets.

## Brödtext

- H2 skruven-och-maskinen: bandad skruv om visaBandadSkruv (forVem "Det är den här skruven: 3,9 × 41 mm med grov gänga, rakbandad för träregel inomhus."), annars "längden finns lös i påse, bandet är 41 mm, maskinen matar hela spannet". Makita "Från ungefär 300 skruv lönar sig en automat." Rad: bandet för träregel, stål = för hand.
- H2 id gipsskruv-langd (i dag "Gipsskruv längd och gänga, och varför regeln avgör båda", "X, och Y", regel tvetydigt): gipset håller inget, skivan hänger i skruvarna som sitter i regeln bakom (lodräta trä- eller stålbiten). Längd: Norgips 20 mm in i trä; 12,5 → 32,5 finns inte, närmaste 35, vi skriver 41 för marginal. Två lag: 25 mm gips, 45 första som räcker; bandet i väskan från förra bygget. Fogtätning: remsor mot ljud och drag, Norgips ca 7 mm, raden ett steg upp.
- H3 "Gipsskruv stålregel, gränsen går vid 0,9 mm plåt": Norgips 10 mm genom plåten, 12,5 → 25. Fin gänga (GDS). Gyproc 0,9 godstjocklek; nål 0,4 till 0,9 Essve; borr 0,7 till 2,0. Längden ändras inte av plåtens tjocklek, spetsen byts.
- H2 Så räknar vi: skiss rakna/gipsskruv (alt 149 tecken i dag: genomskärning vägg med träregel, gipsskiva 12,5, skruv genom skivan, sträckan i regeln måttsatt). Sju steg. Tabell 20 rader ("Vi går på"). Efter tabellen: "Gyprocs monteringshandbok och Norgips montagehandbok ligger som PDF-filer vi inte kunnat läsa maskinellt" ska bort (internt). Talen kommer från tillverkarnas webbsidor, Svenskt Trä, Essve; tro på förpackningen. Verktyget ser inte din vägg: skev regel, skivan uppe, brandklassad vägg tätare skruvning. Länk sa-testar-vi.
- Läs vidare: /inomhus/gipsskruv/, /rakna/innervagg/, /inomhus/bygga-innervagg/.
- Faq (64 ord, ska bli 3 till 5 meningar var): Hur lång (skivan + 20 trä / + 10 stål, Norgips; 12,5 → 32,5, närmaste över, vi skriver 41; lank /inomhus/gipsskruv/). Stålregel (fin gänga alltid, grov snurrar; spets efter plåt 0,9; längden samma). Rostfri i badrum (bakom tätskikt räcker fosfaterad enligt Norgips och Essve; vi skriver upp ett steg C4 eller A2, skivan står fuktig i veckor; utomhus inget val, fosfaterad rostar).

## Krav ur checklistan

- Sidofraser: hur lång gipsskruven ska vara (H2), stålregel mot träregel (H2 + Faq), grov och fin gänga (spalt + brödtext), rostfritt i våtrum (Faq).
- Behåll: längdregeln med talet, grov mot fin bunden till trä/stål, handelslängderna, skruvavståndet, våtrumssvaret. Handelslängd, inte uträknat tal, är sidans skäl att finnas.
- "regel" tvetydigt: skriv träregeln/regelvirket där oklart. Längd 1 100 till 1 350.
