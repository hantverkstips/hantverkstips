# Spec: fyra skisser och vindsullens densitet, 2026-10-04

UX och bygge. Talen kommer från hantverkarens rättelser (koordinatorn 2026-10-04). Plattaksbeslutet är SEO och GEO-agentens: exemplet i skissen flyttas till Regent med c 350, och Royal-raden tas bort ur tabellen. Det gör hantverkaren i MDX-filen; här ritas bara skissen om.

Reglerna för skisser står i `docs/DESIGN.md` avsnitt 7. Ändra i källan under `src/assets/illustrationer-kallor/`, kör `npm run illustrationer` och committa båda filerna. Ingen `<text>` får finnas kvar i den publicerade filen. Filen ska vara under 40 kB (40 960 byte), handskriften minst 24 px i skalan, och bara en sak i penna. Etiketterna nedan skrivs ordagrant. aria-label i filen ska säga samma tal som bilden.

## 1. `fukt/kapacitet-kurva`

- Meacokurvan (kondens) får tre punkter: 30 °C 10 l (märkvärdet vid 30 grader och 80 procent), 20 °C 4,48 l och 10 °C 1,55 l. Kurvan slutar vid 10 °C och har ingen punkt vid 5 °C.
- Etiketterna "1,09" och "0,47" tas bort. Nya etiketter blir "4,48" vid 20 °C och "1,55" vid 10 °C, i samma stil som kurvans andra tal.
- Corroventa och Wood's DSC50FM ändras inte.
- aria-label: byt Meacodelen mot "Meaco 10L, kondens, ger 10 liter vid 30 grader, 4,48 vid 20 och 1,55 vid 10, och tillverkaren anger inget tal vid 5." Resten står kvar.

## 2. `fukt/sw39fw-vs-evodry-kapacitet`

- Den streckade kondensstapeln vid 5 °C och etiketten "under 1" tas bort. Vid 5 °C står bara EvoDrys stapel 4,8.
- Övriga staplar och tal ändras inte: SW39FW 5,7 och 3,8, EvoDry 6,7, 5,9 och 4,8. Det gäller också anteckningen "här byter / de plats".
- aria-label: "Stapeldiagram med liter per dygn vid 15, 10 och 5 grader för Wood's SW39FW (5,7 och 3,8, inget tal vid 5 grader) och Acetec EvoDry 6H 2.0 (6,7, 5,9 och 4,8), vår omräkning ur tillverkarnas märkkapacitet."

## 3. `golv/kallargolv-fuktskala`

- Skalan börjar på 70 i stället för 80, och märkena blir "70 %", "75 %", "80 %", "85 %", "90 %" och "100 %". Avstånden ska vara proportionella mot procenten, som i dag. Alla staplar börjar vid 70.
- Klickgolv har två gränser: heldraget till 75 med etiketten "laminat" vid slutet, och streckat vidare till 90 med etiketten "vinyl". Det är samma grepp som limmat trä har mellan 85 och 90.
- Klinker, limmat trä och limmad vinyl ändras inte, och inte heller den röda pilen och markeringen vid 100.
- Ryms inte etiketterna i 24 px blir staplarna kortare, aldrig texten mindre.
- aria-label skrivs om efter samma mönster som i dag: skalan 70 till 100, klickgolv heldraget till 75 (laminat) och streckat till 90 (vinyl), resten oförändrat.
- Bildtexten i artikeln skriver hantverkaren om. Det meddelar koordinatorn.

## 4. `tak/plattak-snitt`

- Bärläkten ritas på c 350, och etiketten "c 400 mm" blir "c 350 mm". Ändra mellanrummet mellan bärläktarna i skissen så att det stämmer i skalan mot ströläktens c 600.
- Allt annat ändras inte.
- Filen är 40 639 byte i dag. Blir den större än 40 960 byte efter ändringen, förenkla ritningen. Texten krymps inte.

## 5. Vindsullens densitet (`src/lib/kalkyl/u-varde.ts`)

- `PRIS_VINDSULL_KR_M2_MM` blir `19.95 * 0.045`. Kommentaren ska säga att densiteten 45 kg/m³ kommer från Rockwools produktblad, och att priset 19,95 kr/kg är Bauhaus pris hämtat 2026-09-24, med samma adress som i dag.
- Ändra testet i `scripts/test-kalkyl-u-varde.mjs` på raderna som låser 0,042 (rad 562 och 640).
- Sök efter fler ställen som bär talet: varje fil som använder `PRIS_VINDSULL_KR_M2_MM` eller 0,042 för vindsull, och varje publicerad artikel vars tal ändras, eftersom kronor per år beror på talet. Lista allt du hittar. Artiklarnas text rör du inte; hantverkaren ändrar den.

## Kontroller

- Rendera varje skiss på 343 och 600 px, och spara PNG:erna i `scratchpad\skisser-2026-10-04\`.
- Läs av filstorlekarna och kontrollera att ingen `<text>` finns kvar i de publicerade filerna.
- Kör `npm run illustrationer`, `npx astro check`, u-värdetestet och `npm run kontrollera`.
- Bygg inte och committa inte.
