# Korrektur: fasadräknaren, 2026-09-28

Läst: TEXT i src/lib/kalkyl/fasadyta.ts (mallar ifyllda med standardvärdena och med puts, tegel, byte och ett fönster), src/pages/rakna/fasadyta.astro, src/components/kalkyl/FasadytaForm.astro, registerposten fasadyta, länktexterna till fasadyta i kvadratmeter.astro och mala-ute.astro, och dagens ändrade meningar i mala-om-huset.mdx. Bara grammatik, meningsbyggnad, idiom och kommatering.

## src/lib/kalkyl/fasadyta.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 605 | Grundfärgen stryks en gång före täckfärgen och står längre ner. | Grundfärgen stryks en gång före täckfärgen, och hur mycket den tar står längre ner. | syftning (det låter som att färgen sitter längre ner på väggen) |
| 614 | Grunden blandas av silikatbinder, som köps för sig och inte ingår i litern. | Grunden blandas av silikatbinder, som köps för sig och inte ingår i literna. | ihoptryckt ("litern" i singular betyder en liter, inte summan) |
| 628 | Fråga tillverkaren vad den nya färgen kräver innan du köper till 98,2 m² | Fråga tillverkaren vad den nya färgen kräver innan du köper färg till 98,2 m² | saknat ord ("köper till" läses som partikelverbet, alltså köper mer) |
| 639 | Sitter det slamfärg där ska den ha slamfärg igen, och gammal oljefärg vill ha grundfärg under en akrylatfärg. | Sitter det slamfärg där ska väggen ha slamfärg igen, och gammal oljefärg vill ha grundfärg under en akrylatfärg. | syftning ("den" kan peka på slamfärgen) |
| 694 | Höjden dit mäter du från takfoten, precis som nocken, och indraget vågrätt från fasaden in till brytpunkten. | Höjden dit mäter du från takfoten, precis som höjden till nocken, och indraget vågrätt från fasaden in till brytpunkten. | saknat ord (jämför höjden med nocken) |
| 811 | Se om vädret räcker för att måla i dag | Se om vädret duger för att måla i dag | idiom (vädret räcker inte) |
| 861 | Två burkar av samma kulör kan skilja en aning, särskilt när kulören blandas i butiken. | Två burkar av samma kulör kan skilja sig en aning, särskilt när kulören blandas i butiken. | saknat ord (reflexivt med personligt subjekt) |
| 898 | Det ger c 225 mm, räknat från mitten av en lockbräda till mitten av nästa. | Det ger 225 millimeter, räknat från mitten av en lockbräda till mitten av nästa. | ihoptryckt ("c" är fackförkortning, och resten av stycket skriver ut millimeter) |
| 906 | Akrylatfärg och oljefärg räcker 7 m² per liter och strykning … Slamfärg räcker 3 m² per liter enligt Falu Rödfärg. | Akrylatfärg och oljefärg räcker till 7 m² per liter och strykning … Slamfärg räcker till 3 m² per liter enligt Falu Rödfärg. | saknat ord (två ställen i samma regel) |
| 918 | Skrapade partier, nytt trä och en ny kulör får en strykning grundfärg över hela fasaden, som Beckers och Alcro skriver. | Har du skrapat, har du nytt trä eller byter du kulör får hela fasaden en strykning grundfärg, som Beckers och Alcro skriver. | meningsbyggnad (partierna kan inte få färg över hela fasaden, och en kulör får ingen grundfärg) |
| 922 | Beckers och Alcro skriver båda var den ska, men ingen av dem anger hur stor del av fasaden det blir, så den ingår inte i litern. | Beckers och Alcro skriver båda var den ska strykas, men ingen av dem anger hur stor del av fasaden det blir, så den ingår inte i literna. | saknat ord, ihoptryckt |
| 982 | … Nordsjö Tinovas mellanstora burk är 2,5 liter, lite mindre än 2,7 | … Nordsjö Tinovas mellanstora burk är 2,5 liter, lite mindre än 2,7. | kommatering (första meningen i cellen har punkt, andra saknar) |
| 1017 | … stannar jag där, och du får ytan men ingen liter. | … stannar jag där, och du får ytan men inga liter. | numerus ("ingen liter" betyder inte en enda liter) |
| 1020 | Ytan jag målar gånger antalet strykningar, delat med hur långt en liter räcker, blir litern. Den avrundar jag till två decimaler. | Ytan jag målar gånger antalet strykningar, delat med hur långt en liter räcker, blir antalet liter. Det avrundar jag till två decimaler. | ihoptryckt |
| 1021 | Litern delar jag upp i så få burkar som möjligt, … | Literna delar jag upp i så få burkar som möjligt, … | ihoptryckt |

15 fel.

## src/pages/rakna/fasadyta.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 64 | … så får du fasadytan med gavlarna och öppningarna inräknade. | … så får du fasadytan med gavlarna medräknade och öppningarna avdragna. | syftning ("inräknade" säger att fönstren läggs till) |
| 79 | Med två strykningar akrylatfärg, som räcker 7 kvadratmeter per liter, … | Med två strykningar akrylatfärg, som räcker till 7 kvadratmeter per liter, … | saknat ord |
| 100 | Har de samma kulör som väggen finns färgen till dem därför ungefär med i litern. | Har de samma kulör som väggen finns färgen till dem därför ungefär med i literna. | ihoptryckt |

3 fel.

## src/components/kalkyl/FasadytaForm.astro

Komponentens enda egna text är knappen "Räkna ut". Resten kommer ur TEXT och står under fasadyta.ts. 0 fel.

## src/lib/kalkyl/register.ts, posten fasadyta

0 fel.

## Länktexterna i kvadratmeter.astro (rad 814) och mala-ute.astro (rad 668)

0 fel.

## src/content/guider/fasad/mala-om-huset.mdx, dagens ändringar

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 82 | Svenskt Trä, byggbeskrivningar, utvändiga träpaneler (uppdaterad 2021-12-27) | Svenskt Trä, Byggbeskrivningar, utvändiga träpaneler (uppdaterad 2021-12-27) | stavning (namnet på tjänsten har versal, som i räknarens källa) |
| 164 | Burkstorlekarna är de som butiken blandar kulören i, 0,9, 2,7 och 9 liter. | Burkstorlekarna är de som butiken blandar kulören i: 0,9, 2,7 och 9 liter. | kommatering (kommat krockar med decimalkommat) |

2 fel.

## Summa

20 fel: 15 i fasadyta.ts, 3 i fasadyta.astro, 2 i mala-om-huset.mdx och inga i formuläret, registret eller länktexterna. Svenskan är i stort sett korrekt. Det som återkommer är "litern" i betydelsen summan av liter (fem ställen) och "räcker" utan "till". Texten behöver ett kort varv till för de raderna, inte en omskrivning.
