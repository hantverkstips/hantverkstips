# Verktygsplan, kalkylatorer per ämne

Research 2026-09-17 på Christians fråga vad man kan bygga för verktyg kring ämnena. Marknaden i Sverige: kalkylverket.se har 26 byggkalkylatorer (trall, reglar, gips, kakel, färg, betong, isolering, kostnader), fixhuset.se 13 (golv, kakel, färg, ROT, värmepump, solpaneler, altan, betong, attefall), Beijer och XL-Bygg har materialräknare kopplade till kassan, Svenskt Trä har virkesåtgång. Alla är materialräknare utan källor, utan antaganden utskrivna och utan delbara resultat. Ingen har diagnosverktyg (vad är felet, behöver jag åtgärden alls) och ingen räknar på drift eller livslängd.

Vår nisch är därför inte "ännu en kvadratmeterräknare" utan verktyg som svarar på frågan före köpet, med källa på varje konstant och en delbar adress för resultatet. Kvadratmeter, färg och trall bygger vi ändå, eftersom de är vägen in, men de får antaganden och källor som ingen annan har.

## Regler för alla verktyg

- Resultatet ligger i adressen, så att det går att dela och länka från forum.
- Varje konstant står under resultatet, märkt källa eller antagande, som på avfuktarkalkylatorn.
- Verktyget säger också när svaret är "gör inte det här" eller "ring någon".
- Produkter visas bara när räkningen faktiskt pekar på en (kapacitet, effekt, längd), aldrig som dekoration.
- Noll klient-JavaScript där det går (formulär och serverrendering), liten ö där det inte går.

## Prioriterad lista

Prioritet efter sökbehov, hur unikt verktyget är, och om det pekar på dyra produkter.

| # | Verktyg | Ämne | Vad det svarar på | Unikt mot marknaden | Affiliate |
|---|---|---|---|---|---|
| 1 | Daggpunkt och kondensrisk, byggd | Fukt | Blir väggen våt vid din temperatur och luftfuktighet, och vad hjälper: värme, ventilation eller avfuktare | Ingen svensk sida räknar det | Avfuktare, hygrometer |
| 2 | Elkostnad för en maskin, byggd | Hela huset | Kr per månad ur effekt, gångtid och elpris, med SCB-priset som standard | Finns bara som generell räknare, aldrig kopplad till maskiner | Alla maskiner |
| 3 | Regel- och skruvräknare för vägg | Väggar | Reglar, skivor, skruv och mineralull per löpmeter med c-måttet ur Svenskt Trä | Kalkylverket har den utan källor | Skruvautomat, bandad skruv |
| 4 | Vad håller i gipsväggen | Väggar | Vikt, skivtjocklek och infästning ger ja eller nej per pluggtyp | Ingen har den; blir starkare med hängvågstestet | Pluggar, regelsökare |
| 5 | Behöver altanen bygglov | Altan | Höjd, avstånd till hus och gräns, detaljplan ger svaret med lagrum | Fixhuset har attefall, ingen har altanen efter lag 2025:974 | Ingen |
| 6 | Trall- och regelräknare för altan | Altan | Trall, reglar, plintar, skruv och spill ur yta och riktning | Finns hos alla; vår har källa och spillregel | Trallskruv, skruvautomat |
| 7 | Kvadratmeter och materialåtgång | Golv, Kök, Väggar | Yta av rum med avdrag för dörrar och fönster, sedan färg, tapet, kakel eller golv | Störst sökvolym av alla, mest konkurrens | Färg, verktyg |
| 8 | Isolering och U-värde | El och energi | Vad tilläggsisolering sparar i kWh och kr per år, med Boverkets U-värden | Fixhuset har en enkel; vår med U-värden och fuktvarning | Ingen direkt |
| 9 | Dränering och källare, kostnad och nytta | Grund | Löpmeter, djup och schablonpris ger intervall, och om avfuktaren räcker i stället | Ingen har den | Avfuktare |
| 10 | Takvinkel, snölast och takarea | Tak | Vinkel ur höjd och bredd, takarea för material, snölast per zon | Kalkylatorer finns utomlands, få på svenska | Ingen |
| 11 | Spannmålare och kapoptimering | Verktyg | Kapa lister och reglar ur standardlängder med minst spill | Kalkylverket har en | Kapsåg, lasermätare |
| 12 | Trappa, steg och stigning | Golv | Steghöjd och djup ur våningshöjd enligt Boverkets rekommendation | Ovanlig på svenska | Ingen |
| 13 | Betong till plint och platta | Grund, Altan | Volym, säckar och armering | Finns hos alla | Blandare |
| 14 | ROT-avdrag | Hela huset | Vad arbetet kostar efter avdrag | Finns hos alla | Ingen |

## Vad som är byggt

**Verktyg 1, daggpunkt och kondensrisk, byggt 2026-09-17.** Ligger på `/rakna/daggpunkt/`. Läsaren fyller i temperaturen inne, luftfuktigheten och den kallaste ytans temperatur, och får daggpunkten, ånghalten, luftfuktigheten vid ytan och en bedömning: kondens, mögelrisk eller ingen risk. Kalkylatorn räknar också ut de två vägarna under Boverkets gräns på 75 procent, alltså vilken luftfuktighet inne som räcker och vilken yttemperatur som gör samma sak. Rådet följer årstid och rum, och sidan säger vilken åtgärd som är fel i just det läget. Magnus-formeln efter Lawrence 2005 och gränsen ur BBR 6:52 är samma tal som `/fukt/luftfuktighet-inomhus/` redan använder, och formuläret är inbäddat i den artikeln med den nya komponenten `<Kalkylator>`. Inga produkter i databasen följer av räkningen, så sidan har varken produktkort eller reklamband; pekar svaret på en avfuktare länkar den vidare till avfuktarkalkylatorn.

**Verktyg 2, elkostnad för en maskin, byggt 2026-09-17.** Ligger på `/rakna/elkostnad/`. Läsaren fyller i effekten i watt, gångtiden per dygn, antal dagar och sitt elpris, och får kilowattimmar och kronor för perioden, per dygn och per år. Fyller hen också i liter vatten per dygn kommer energin och kostnaden per liter, som är det enda måttet som går att jämföra mellan en kondens- och en sorptionsavfuktare. Elpriset står i `src/lib/antaganden.ts` med SCB som källa, så eltabellerna i `/fukt/avfuktare-kallare/` och `/tester/woods-sw39fw/` och kalkylatorn säger samma sak; testskriptet kör kalkylatorn mot just de tabellerna. Query-parametern `produkt` fyller effektfältet ur en produkts specs, och varje produktkort med `effekt_w` har därför en rad "Räkna elkostnaden" som länkar hit med maskinen ifylld. Litern förifylls aldrig: kapaciteten i databasen är mätt vid 30 grader och 80 procent luftfuktighet, och ett literpris räknat på den siffran vore samma löfte som vi avvisar på varje annan sida. Under fältet står i stället vad märkt kapacitet betyder, med länk till köpguiden. Formuläret är inbäddat i köpguiden och i granskningen av Wood's SW39FW. Räkningen pekar inte ut någon produkt, så sidan har varken produktkort eller reklamband. "Gör inte det här" gäller en maskin som går dygnet runt utan hygrostat.

**Verktyg 3, regel- och skruvräknare för innervägg, byggt 2026-09-17.** Ligger på `/rakna/innervagg/`. Läsaren fyller i väggens längd, rumshöjden, regeldimensionen, antalet skivlag, regelavståndet, antalet dörröppningar och om det ska vara mineralull, och får antalet lodräta reglar, löpmeter virke med och utan spill, den handelslängd som spiller minst när reglarna kapas, antalet gipsskivor, antalet skruv avrundat uppåt till hela hundratal med "räcker till" i 1 000-pack, och kvadratmeter ull. Regelavståndet följer Svenskt Trä när läsaren inte väljer själv, alltså c 400 mm för ett lag gips på skivor som är 1 200 mm breda och c 600 mm för två lag. Konstanterna ligger namngivna i `src/lib/kalkyl/innervagg.ts` med Norgips, Gyproc, Svenskt Trä eller ANTAGANDE i kommentaren, och testskriptet kör formeln mot materiallistan i `/inomhus/bygga-innervagg/`: skivor, skruv och ull stämmer exakt, medan virket ligger en regel högre eftersom guidens tal per löpmeter är en täthet utan regeln i sista väggänden. Formuläret är inbäddat i innerväggsguiden efter antagandelistan och i `/inomhus/gipsskruv/` under skruvavståndstabellen. Räkningen pekar ut skruvlängden och antalet skruv, så sidan har reklamband och två produktkort: den bandade gipsskruven med antalet pack just den här väggen behöver, och skruvautomaten. "Gör inte det här" gäller c 600 mm under ett enda lag gips, skivskarv i linje med dörröppningens kant och en vägg över 3 m på 45 × 70.

Mönstret för nästa verktyg (formel, test, formulärkomponent, sida, register, inbäddning) står i `docs/SPEC-SIDMALLAR.md` avsnitt 4.7, elkostnadens produkt-parameter i 4.7.3 och innerväggsräknarens produktkort i 4.7.4.

## Vad som byggs först

Verktyg 1, 2 och 3 är byggda. Verktyg 4 och 5 är de mest unika och binder ihop två kluster som redan finns; 5 kan byggas nu på bygglovssidans lagrum. 6 och 7 är trafikmagneter som bygger länkar och ger sajten en anledning att synas i forum. 8 till 14 följer när ämnena får sidor.

Räkna med att varje verktyg behöver en formelsida som avfuktarens: underlag från produktexperten med källa per konstant, en spec från teknisk ansvarig, och en text från chefredaktören.
