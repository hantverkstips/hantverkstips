# Korrektur: fasadräknaren, varv 2, 2026-09-28

Läst: rättelserna från docs/briefer/korrektur-fasadyta-2026-09-28.md, TEXT i src/lib/kalkyl/fasadyta.ts (atgangstabell, regel.kanten, regel.grundfarg, gorInte, spalt och darfor, mallarna ifyllda med standardvärdena: 98,2 m², 117,84 m² målat, 116,8 brutto, 18,6 avdrag, 33,67 liter, och med slät panel, puts och skrapat), kortsvaret i src/pages/rakna/fasadyta.astro och de ändrade meningarna i mala-om-huset.mdx enligt `git diff`, också description och kortSvar. Bara grammatik, meningsbyggnad, idiom och kommatering.

## Rättelserna från första varvet

Alla 20 är införda. regel.grundfarg avviker med skäl: skrapat står nu i en egen mening ("Har du skrapat grundar du bara de partier där träet är bart …"), och första meningen gäller bara nytt trä och ny kulör. Den nya lydelsen är korrekt svenska.

## src/lib/kalkyl/fasadyta.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 944 | `${literGarAt} liter går åt. Köp ${burkar}, ${literAttKopa} liter.` (ifyllt: "28,1 liter går åt. Köp tre burkar om 9 liter och en om 2,7 liter, 29,7 liter.") | `Det går åt ${literGarAt} liter. Köp ${burkar}, sammanlagt ${literAttKopa} liter.` ("Det går åt 28,1 liter. Köp tre burkar om 9 liter och en om 2,7 liter, sammanlagt 29,7 liter.") | meningsbyggnad (mening som börjar med siffra) och ihoptryckt (summan hänger lös efter burkarna) |
| 949 | `${liter} liter går åt. Köp ${kopa} liter, och bindern till grunden för sig.` (ifyllt: "65,5 liter går åt. …") | `Det går åt ${liter} liter. Köp ${kopa} liter, och bindern till grunden för sig.` | meningsbyggnad (mening som börjar med siffra) |
| 971 | … och bygger på den nedre kanten i tillverkarnas datablad, där akrylatfärg och oljefärg har samma tal. | … och bygger på den nedre kanten av spannet i tillverkarnas datablad, där akrylatfärg och oljefärg har samma tal. | ihoptryckt (databladet har ingen kant, spannet har) |
| 1037 | När en tillverkare delar upp åtgången efter underlaget tar jag den nedre kanten för ditt underlag: 7 m² per liter … | När en tillverkare delar upp åtgången efter underlaget tar jag det lägsta talet för ditt underlag: 7 m² per liter … | ihoptryckt (kanten av vad sägs inte) |
| 1037 | Det bara träet suger mer, men det är grundfärgen som tar upp det, så täckfärgen räknar jag som på målat trä. | Det bara träet suger mer, men det är grundfärgen som sugs in, så täckfärgen räknar jag som på målat trä. | syftning ("det" har inget ord att peka på) |
| 985 | En strykning räcker lika långt per liter som den andra, men väggen får bara hälften så mycket färg att stå emot vädret med. | Med en strykning köper du hälften så mycket färg, men väggen får också bara hälften så mycket att stå emot vädret med. | syftning ("den andra" pekar inte på något i texten före) |
| 860 | Du målar 117,8 m², fasadytan gånger lockpanelens 1,2. | Du målar 117,8 m², fasadytan gånger 1,2 för lockpanelen. | ihoptryckt ("lockpanelens 1,2" kräver att läsaren gissar vad talet är) |

7 fel.

Resten av TEXT.atgangstabell (rubrik, kolumner, radnamn, grundBart, tegelcellerna, källcellerna), regel.grundfarg, gorInte utan-avdrag, blanda-partier och ny-puts, spalt rad-brutto, rad-raknat, rad-grund, rad-grund-bart, rad-puts-burkar och länkraderna, och alla mallar i darfor är korrekta med verkliga tal.

## src/pages/rakna/fasadyta.astro, kortsvaret

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 83 | … och till lockpanelen köper du fyra burkar om 9 liter, som blir 36. | … och till lockpanelen köper du fyra burkar om 9 liter, alltså 36 liter. | ihoptryckt ("som" syftar på burkarna, och enheten saknas) |

1 fel.

## src/content/guider/fasad/mala-om-huset.mdx, ändringarna

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 166 | Den övre kanten räknar jag med Beckers tiolitersburkar, och fyra sådana till lockpanelen kostar 10 780 kronor. | Det dyraste räknar jag med Beckers tiolitersburkar, och fyra sådana till lockpanelen kostar 10 780 kronor. | syftning ("den övre kanten" pekar på ett spann som först nämns i nästa mening) |

1 fel.

description, kortSvar, stycket om nivå två, raden före räknaren, slamfärgsstycket, sammanräkningen, väderstyckena, oljealkydstycket och de tre ändrade FAQ-svaren är korrekta.

## Summa

9 fel: 7 i fasadyta.ts, 1 i fasadyta.astro och 1 i mala-om-huset.mdx. Alla rättelser från första varvet är införda. Svenskan är korrekt i stort. Det som återkommer är "kanten" utan att det står vad den är kant av (tre ställen) och tabellcellerna som börjar med en siffra. Det räcker att rätta raderna ovan, något nytt varv behövs inte.
