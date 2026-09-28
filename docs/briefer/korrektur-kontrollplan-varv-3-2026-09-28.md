# Korrektur kontrollplan, varv 3 (2026-09-28)

Bara de meningar som ändrats efter varv 2. Grammatik, meningsbyggnad, idiom och kommatering.

## src/pages/rakna/kontrollplan.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 125 | Ändringarna kom med Lag (2026:712), och reglerna om kontrollplanen står i lagens 10 kapitel. | Ändringarna kom med lag (2026:712), och reglerna om kontrollplanen står i lagens tionde kapitel. | stavning (versal i löptext); "lagens 10 kapitel" läses som "tio kapitel" |
| 126 | ...som inte längre är en del av kontrollplanen. Den ska tala om vilka byggprodukter som kan återanvändas, | ...som inte längre är en del av kontrollplanen. Avfallshanteringsplanen ska tala om vilka byggprodukter som kan återanvändas, | syftning ("Den" står närmast efter kontrollplanen) |
| 127 | Lagen fick också byggbedömare, certifierade företag som ska kunna kontrollera en ny byggnad i stället för en kontrollplan. | Med lagen kom också byggbedömare, certifierade företag som ska kunna kontrollera en ny byggnad i stället för en kontrollplan. | ihoptryckt (en lag "får" inte företag) |
| 128 | Kraven står i stället i Boverkets nya föreskrifter, som BFS 2024:6 för bärförmåga och BFS 2024:7 för brandskydd, | Kraven står i stället i Boverkets nya föreskrifter, till exempel BFS 2024:6 för bärförmåga och BFS 2024:7 för brandskydd, | syftning ("som" efter komma läses först som relativ bisats) |
| 159 | Med en ny skorsten tillkommer genomföringen i bjälklaget, mynningen minst {mynning} m över taktäckningen och takskyddet för sotaren. | Med en ny skorsten tillkommer genomföringen i bjälklaget, att mynningen ligger minst {mynning} m över taktäckningen och takskyddet för sotaren. | sats utan verb |
| 142 | Siffrorna är kontrollerna i planen för en altan utan tak, vid huset: | Siffrorna är kontrollerna i planen för en altan utan tak vid huset: | kommatering |
| 142 | Plinten ska kontrolleras innan den grävs igen. | Plinten ska kontrolleras innan gropen fylls igen. | syftning och idiom (det är gropen som grävs igen, och "igen" kan läsas som "på nytt") |

Utan fel: INGEN_PLAN_STYCKEN, alla tre. ANDRAT_STYCKEN i övrigt.

Iakttagelse, inte räknad som fel: rad 128 "Energikraven låg kvar i BBR till och med 30 september 2026" står i preteritum fast dagens datum är 28 september 2026. Tempus stämmer först från 1 oktober. Rad 1197 i kontrollplan.ts nämner dessutom att de äldre energireglerna får väljas fram till 30 september 2027. Det är en innehållsfråga, inte en språkfråga.

## src/lib/kalkyl/kontrollplan.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 807 | Bedömer nämnden skärmtaket som en tillbyggnad behövs ingen heller om nämnden ser den som en liten ändring av huset, | Bedömer nämnden skärmtaket som en tillbyggnad behövs ingen heller om nämnden ser tillbyggnaden som en liten ändring av huset, | syftning ("den" pekar på tillbyggnad, som bara står som predikativ; skärmtaket är "det") |
| 812 | Bedöms skärmtaket som en tillbyggnad krävs ingen om byggnadsnämnden ser den som en liten ändring av bostadshuset. | Bedöms skärmtaket som en tillbyggnad krävs ingen om byggnadsnämnden ser tillbyggnaden som en liten ändring av bostadshuset. | syftning (samma som ovan) |
| 1173 | Det gäller också grävningen för grund eller plintar, eftersom den är en del av bygget och behövs för det. | Det gäller också grävningen för grund eller plintar, eftersom den är en del av bygget. | för många ord och syftning ("det" kan peka på bygget eller startbeskedet) |
| 800 | Rätta det som står vid formuläret, så ställer jag upp den. | Rätta det som meddelandet vid formuläret pekar på, så ställer jag upp den. | ihoptryckt (läsaren ska rätta felet, inte texten vid formuläret) |

Utan fel: atgard.va.hjalp (759), antagande.A6.varde (1187), antagande.A11.varde (1197).

## src/pages/rakna/bygglov-altan.astro

Utan fel: KONTROLLPLAN_LANK (181).

## src/components/ui/Kalkylator.astro

Utan fel: knapptexten "Visa kontrollplanen" (144).

## src/content/kunskap/altan/bygglov-altan.mdx

Utan fel: rad 57, meningen om förslag till kontrollplan och länkmeningen efter den.

---

Totalt 11 fel. Texten behöver ett kort varv till: felen är lokala och går att rätta med lydelserna ovan. Därefter räcker en kontroll av de rättade raderna.
