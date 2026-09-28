# Korrektur: /rakna/u-varde/, 2026-09-24

Läst: konstanterna och mallens text i `src/pages/rakna/u-varde.astro`, etiketter och texter i `src/components/kalkyl/UVardeForm.astro`, objektet `TEXT` i `src/lib/kalkyl/u-varde.ts` (rad 554–841), och posten `u-varde` i `src/lib/kalkyl/register.ts`. Kod och kommentarer är inte lästa. Bara svenskan är bedömd, inte röst eller innehåll.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 63 | Välj vilka material som sitter där, inifrån och ut och med sina tjocklekar, och sedan det du vill lägga till. | Välj materialen som sitter där, inifrån och ut, skriv hur tjocka de är och välj sedan det du vill lägga till. | reflexiv (sina syftar på du) |
| 63 | Då får du U-värdet före och efter, om det når Boverkets tal och vad det sparar i kilowattimmar och kronor om året. | Då ser du U-värdet före och efter, om det når Boverkets tal och vad tillägget sparar i kilowattimmar och kronor om året. | syftning (två det om olika saker), verb (får du om det når) |
| 67 | Lägg ihop resultaten med luftskikten på in- och utsidan | Lägg ihop resultaten med motstånden för luften på in- och utsidan | ihoptryckt (luftskikten är inga tal) |
| 70 | blir väggen sämre än räkningen genom bara ullen | blir väggen sämre än om du bara räknar genom ullen | ihoptryckt (väggen jämförs med en räkning) |
| 85 | Utan reglar lägger jag ihop motstånden med luften inne och ute | Utan reglar lägger jag ihop motstånden med luftens motstånd inne och ute | ihoptryckt |
| 106 | Räknaren tar golvet som ett bjälklag med uteluft rakt under. | Räknaren räknar golvet som ett bjälklag med uteluft rakt under. | anglicism (tar som, "treats as") |
| 114 | och resten tas oftast med el | och resten täcks oftast med el | ihoptryckt (vad tas?) |
| 120 | Markera den och kopiera, så får den du skickar till samma svar. | Markera den och kopiera, så får den du skickar den till samma svar. | saknat ord, syftning (den = adressen eller mottagaren) |

## src/components/kalkyl/UVardeForm.astro

Inga fel. Den enda egna texten är knappen "Räkna ut"; resten kommer ur `TEXT` och står under u-varde.ts.

## src/lib/kalkyl/u-varde.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 569 | för det når Boverkets tal med både de gamla och de nya reglerna. | för det når Boverkets tal enligt både de gamla och de nya reglerna. | preposition |
| 570 | Vad det sparar står här under | Vad det sparar står härunder | särskrivning |
| 591 | Välj luftspalt en gång. | Välj luftspalt bara en gång. | saknat ord |
| 607 | Räkna fram var den hamnar med din inomhusluft i daggpunktsräknaren | Räkna i daggpunktsräknaren fram var den hamnar med din inomhusluft | ordföljd (i daggpunktsräknaren fäster vid inomhusluften) |
| 607 | På en källarvägg kan punkten hamna inne i muren, och där ska minst en del av isoleringen sitta på utsidan. | På en källarvägg kan punkten hamna inne i muren, och då ska minst en del av isoleringen sitta på utsidan. | syftning (där = inne i muren) |
| 612 | Motstånden läggs ihop med luftskikten inne och ute | Motstånden läggs ihop med luftens motstånd inne och ute | ihoptryckt |
| 616 | Utsidan räknas i stället som stilla luft, med 0,13 i stället för 0,04. | Utsidan räknas i stället som stilla luft, med 0,13 och inte 0,04. | upprepning (i stället två gånger i samma mening) |
| 624 | Jag sätter den till noll, så verkligheten blir en aning sämre än talet här. | Jag sätter den till noll, så i verkligheten blir det en aning sämre än talet här. | ihoptryckt (verkligheten blir sämre) |
| 648 | om energin bara minskar obetydligt | om energianvändningen bara minskar obetydligt | ihoptryckt |
| 660 | och räknar som Rockwool 20 procent mindre i södra och 35 procent mer i norra Sverige. | och räknar, som Rockwool, med 20 procent färre i södra och 35 procent fler i norra Sverige. | kommatering, saknat ord, räknebart substantiv (gradtimmar: färre, fler) |
| 668 | och resten tas oftast med el | och resten täcks oftast med el | ihoptryckt |
| 676 | Återbetalningstiden räknar bara med ullen | I återbetalningstiden räknar jag bara med ullen | ihoptryckt (tiden räknar) |
| 777 | Vet du redan U-värdet, eller gäller det ett fönster? Skriv in talet direkt | Vet du redan U-värdet, eller gäller det ett fönster? Skriv in talet direkt. | interpunktion (punkt saknas efter hel mening) |

## src/lib/kalkyl/register.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 57 | Välj material och tjocklek, så ser du om du når Boverkets tal. | Välj material och tjocklek, så ser du om väggen når Boverkets tal. | syftning (du når inte talet, konstruktionen gör) |

## Summa

22 fel: 8 i u-varde.astro, 0 i UVardeForm.astro, 13 i u-varde.ts, 1 i register.ts. Texten är i grunden korrekt svenska med hela meningar och rätt kongruens. Felen är mest ihoptryckta uttryck där luft, tid eller verklighet får göra något, några syftningar och en särskrivning. Den behöver ett kort varv till, sedan är den klar.
