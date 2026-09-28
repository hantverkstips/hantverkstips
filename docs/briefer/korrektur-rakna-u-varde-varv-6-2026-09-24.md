# Korrektur, /rakna/u-varde/, varv 6

Läst 2026-09-24. Bara svenskan: grammatik, meningsbyggnad, idiom och kommatering. Röst, innehåll och sökbarhet bedöms inte här.

## Kontroll av varv 5

Alla fem rättelserna är införda och korrekta:

- u-varde.astro rad 73–75: ”… kommer U-värdet ner till 0,085 W/m²K, och vinden klarar kravet med god marginal.”
- u-varde.ts rad 902 (luftspalt): ”med motståndet 0,13 i stället för 0,04”.
- u-varde.ts rad 914 (tak-kallvind): ”med motståndet 0,04 på utsidan” och ”Rockwools tabell … sämre U-värde än i tabellen”.
- u-varde.ts rad 930 (boverket-overgang): ”Om du påbörjar arbetet, söker bygglov eller gör en anmälan före 1 oktober 2027 …”.

Gränsfallen: ”okänt märke och okänd ålder” står nu i u-varde.ts rad 380 och 1026, u-varde.astro rad 109 och u-varde.mdx rad 143. Tegel-FAQ:n (u-varde.astro rad 101) slutar på ”och hellre för högt än för lågt”. Elprisregeln och källistan är oförändrade, se gränsfallen nedan.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

FAQ-svaren om tegelfasad och om tillverkarens tabell är korrekta.

## src/components/kalkyl/UVardeForm.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

## src/lib/kalkyl/u-varde.ts, TEXT, MATERIAL och ANTAGANDEN

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 846 | Rubriken i battre-men-over när tillägget är Vindsull: materialIForslag gör kortnamnet ”Lösull, stenull” till ”lösull, stenull”, så att rubriken blir t.ex. ”Lägg på 190 mm lösull, stenull totalt, 90 mm utöver de 100 du lagt in, så kommer U-värdet ner till 0,13” | ”Lägg på 190 mm lösull totalt, 90 mm utöver de 100 du lagt in, så kommer U-värdet ner till 0,13” (samma tillaggIMening som i beskedet klarar) | meningsbyggnad (kommat inne i namnet gör materialet till en uppräkning mitt i satsen) |
| 946 | ”Rockwool nämner Örebro, Västerås och Uppsala som exempel på Mellansverige men drar inga gränser mot söder och norr, så du väljer den del av landet som ligger närmast din ort.” | ”Rockwool nämner Örebro, Västerås och Uppsala som exempel på Mellansverige men drar inga gränser mot södra och norra Sverige, så du får själv välja den del av landet som stämmer bäst med din ort.” | idiom (orten ligger i en del av landet, delen ligger inte ”närmast” orten) |

Beskedsraderna i klarar är prövade som egna meningar och i kombinationerna A+B+tak, A+fönster/dörr, B+vägg, A+golv och enbart tak. Varje del står som hel mening, ”först” i vindsrådet läses rätt efter hänvisningen till återbetalningen, och ingen kombination ger dubbla ”kravet” som stör. TEXT.kolumn, aterbetalningSaknas['fonster-dorr'] (”Dela priset i offerten med kronorna om året här ovanför”) och regeln formel (”… delat med lambdavärdet, som anger hur bra materialet leder värme.”, där ”som” syftar entydigt på lambdavärdet) är korrekta.

## src/lib/kalkyl/register.ts, posten u-varde

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

”den” i ”så ser du om den klarar” syftar på vinden eller väggen, vilket är avsett.

## src/content/kunskap/el/u-varde.mdx, lambdatabellen, gradtimmestabellen och källraderna

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 192 | ”Mellansverige, hos Rockwool Örebro, Västerås och Uppsala” | ”Mellansverige, med Örebro, Västerås och Uppsala som Rockwools exempel” | ihoptryckt (”hos Rockwool Örebro” läses som att Rockwool har Örebro, eller som ett företagsnamn) |

Lambdatabellen, källraden rad 158 och källraden rad 196 är korrekta.

## Gränsfall, inte räknade

- u-varde.ts rad 824 (klarar, vägg): ”behöver du också räkna på daggpunkten, så att fukt inte fälls ut inne i väggen.” Räkningen hindrar inte fukten, den visar om den fälls ut. ”… räkna på daggpunkten, för att se att fukt inte fälls ut inne i väggen” är exaktare.
- u-varde.ts rad 950 (elpris): ”SCB:s genomsnitt för juli till december 2025, för hushåll med …” står kvar från varv 5. Korrekt men tungt.
- u-varde.astro rad 544–547: `</a>`, radbrytning, `, {k.last}` står kvar. Kontrollera på den renderade sidan att det inte blir mellanslag före kommat.
- u-varde.mdx rad 160, utanför de avsnitt som skulle läsas: ”vilket är rätt håll att ta i åt” blandar ”ta i” och ”fela åt rätt håll”. ”vilket är rätt håll att fela åt” är det vanliga uttrycket.

## Summering

3 fel: 0 i u-varde.astro, 0 i UVardeForm.astro, 2 i u-varde.ts, 0 i register.ts, 1 i u-varde.mdx. Texten är korrekt svenska. Det nya i det här varvet håller. Rubriken på rad 846 är det enda felet som läsaren ser direkt i resultatspalten. Det behövs inget fullt varv till. Det räcker att kontrollera de tre rättade raderna.
