# Faktaunderlag: luftfuktighet inomhus

Skrivet 2026-09-16 av produktexperten. Sidtyp kunskap, URL `/fukt/luftfuktighet-inomhus/`. Allt nedan är hämtat från angiven källa eller beräknat av oss med angiven formel. Inget är mätt av oss ännu; beställningen till Christian står sist.

## 1. Begreppen

- Relativ fuktighet (RF) är hur mycket vattenånga luften bär i procent av vad den kan bära vid sin temperatur. Absolut fuktighet är mängden vatten i gram per kubikmeter luft. Samma luft får högre RF när den kyls och lägre när den värms, utan att vatteninnehållet ändras. Exempel från Alingsås kommun: uteluft vid -20 °C och 100 % RF som värms till 20 °C hamnar på cirka 6 % RF. Källa: [Alingsås kommun, luftfuktighet inomhus](https://www.alingsas.se/bygga-bo-och-miljo/boende/luftfuktighet-inomhus/).
- Daggpunkt är temperaturen där luften når 100 % RF och vatten börjar fällas ut på ytor som är kallare än så.
- Formel (Magnus, konstanter enligt Alduchov och Eskridge): α = ln(RF/100) + a·T/(b+T), daggpunkt Td = b·α/(a−α), med a = 17,625 och b = 243,04 °C. Osäkerhet 0,35 °C mellan -40 och 50 °C. Tumregel för RF över 50 %: daggpunkten sjunker cirka 1 °C per 5 procentenheter lägre RF. Källa: [Lawrence, Bulletin of the American Meteorological Society 86(2), 2005](https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml). Samma formel med a = 17,27 och b = 237,7 hos [Intab](https://intab.se/daggpunkt).

Mättnadsånghalt, beräknad av oss ur Magnus-formeln ovan (mättnadstryck 6,1094·exp(a·T/(b+T)) hPa, omräknat till g/m³). Alingsås kommun anger 30, 17 och 5 g/m³ vid 30, 20 och 0 °C, vilket stämmer.

| Temperatur | Max vatteninnehåll |
|---|---|
| -10 °C | 2,4 g/m³ |
| 0 °C | 4,9 g/m³ |
| 5 °C | 6,8 g/m³ |
| 10 °C | 9,4 g/m³ |
| 12 °C | 10,6 g/m³ |
| 15 °C | 12,8 g/m³ |
| 20 °C | 17,3 g/m³ |
| 25 °C | 23,0 g/m³ |
| 30 °C | 30,3 g/m³ |

Daggpunkt, beräknad av oss med Lawrence 2005:

| Rumstemp | 30 % | 40 % | 50 % | 60 % | 70 % | 80 % |
|---|---|---|---|---|---|---|
| 20 °C | 1,9 °C | 6,0 °C | 9,3 °C | 12,0 °C | 14,4 °C | 16,4 °C |
| 22 °C | 3,6 °C | 7,8 °C | 11,1 °C | 13,9 °C | 16,3 °C | 18,3 °C |
| 12 °C (källare) | | | | 4,5 °C | 6,7 °C | 8,7 °C |
| 15 °C (källare) | | | | | 9,6 °C | 11,6 °C |

## 2. Vad som är normalt i svenska hus

- Allmän rekommendation 30 till 60 % RF; vintertid vanligen under 40 %, ibland under 15 %; 20 till 40 % är vanligt inomhus. Källa: [Intab, inomhusklimat](https://intab.se/radgivning/inomhusklimat) (instrumentbutik, siffror utan egen mätserie).
- Alingsås kommun: "Vi mår bäst när den relativa luftfuktigheten är runt 50 %. Det är inte jättenoga, mellan 30 och 70 % går bra." Källa: [Alingsås kommun](https://www.alingsas.se/bygga-bo-och-miljo/boende/luftfuktighet-inomhus/).
- Folkhälsomyndighetens gräns för utredning: om luftfuktighetens medelvärde under en längre period av eldningssäsongen överstiger 7 g vatten per kg torr luft, "vilket motsvarar cirka 45 % relativ luftfuktighet vid 21 °C", och om fukttillskottet inomhus vintertid regelmässigt överstiger 3 g/m³. Källa: [Folkhälsomyndigheten, tillsynsvägledning om fukt och mikroorganismer](https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/), som bygger på [FoHMFS 2014:14](https://www.folkhalsomyndigheten.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf).
- Per rumstyp (sovrum, badrum, källare, tvättstuga) finns ingen svensk mätserie vi kan citera. Det är luckan våra egna mätningar fyller, se avsnitt 7.

## 3. När det blir problem

- Mögel: Boverkets byggregler (BBR 6:52) säger att om det kritiska fukttillståndet för ett material inte är väl undersökt ska 75 % RF användas som kritiskt fukttillstånd, och att RF vid rumstemperatur inte bör överstiga 75 % under längre tid. Källa: [Boverket, PBL kunskapsbanken, högsta tillåtna fukttillstånd](https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/) och [Polygon, sammanfattning av BBR 6:52](https://www.polygongroup.com/globalassets/svenska-sverige/bilder/kunskapstorget/b_t---hogsta-tillatna-fukttillstand-o-kritisk-relativ-fuktighet.pdf). Provmetoden för materialspecifika värden beskrivs av [RISE](https://www.ri.se/sv/brandsakerhet/tjanster/provning-av-kritiskt-fukttillstand-for-mogel-pa-byggnadsmaterial) (rapport 2022:69, Johansson, Ekstrand-Tobin, Bok).
- Kvalster: "gärna under 45 procent vintertid"; kondens på fönstren "är tecken på att luftfuktigheten är för hög"; undvik att vädra samtidigt som tvätt torkar inomhus; minst 0,5 luftomsättningar per timme. Källa: [Astma- och Allergiförbundet, kvalsterallergi](https://astmaoallergiforbundet.se/allergi/kvalsterallergi/).
- Torr luft: det finns inget svenskt gränsvärde. En representant för Arbetsmiljöverket sa 2019 att myndigheten aldrig haft ett överklagat krav om torr luft. Symtom enligt Alingsås kommun: irriterade ögon, torr hud, statisk elektricitet, halsont, nästäppa nattetid, spruckna läppar. Källa: [Arbetet, 2019-02-01](https://arbetet.se/2019/02/01/torr-luft-ger-dalig-arbetsmiljo-att-vadra-hjalper-inte/), [Alingsås kommun](https://www.alingsas.se/bygga-bo-och-miljo/boende/luftfuktighet-inomhus/).
- Indikationer på fuktskada enligt Folkhälsomyndigheten: synliga fuktfläckar, missfärgningar eller bubblor i golvmattor och tapeter, synlig mikrobiell växt eller mikrobiell lukt, samt "omfattande kondens på fönstrens insida vid en utetemperatur av cirka -5 °C eller lägre". Källa: [Folkhälsomyndigheten, tillsynsvägledning](https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/).

## 4. Varför fönstren immar

Glasets insida är kallare än rumsluften. När ytan är kallare än daggpunkten (tabellen ovan) fälls vatten ut. Vid 22 °C och 50 % RF räcker en glasyta på 11 °C. Det är därför Folkhälsomyndigheten använder kondens vid -5 °C ute som indikation (källa ovan) och Astma- och Allergiförbundet ser imma som tecken på för hög fuktighet (källa ovan). Kondens mellan glasen i en isolerruta är ett annat fel (punkterad ruta), saknar källa här och ska inte påstås utan en.

## 5. Så mäter du

- Instrument: en digital hygrometer med temperatur. Testkollens test anger max 3 procentenheter avvikelse mot referens för bästa modell och 0,6 °C i temperatur; ett annat test anger 3 till 4 procentenheter mot Testfaktas referens. Källa: [Testkollen, hygrometer](https://www.testkollen.se/hygrometer), [Tryggt och säkert hem](https://www.xn--tryggtochskerthem-zqb.se/familj/hushall/hygrometer-bast-i-test/). Båda är tunna testsajter; vi anger dem som tredje part och kontrollerar själva.
- Egen kontroll: mättad koksaltlösning i sluten burk ger 75,3 ± 0,2 % RF vid 25 °C. Källa: Greenspan 1977, Journal of Research of the NBS 81A(1), refererad i [OIML R121](https://www.gso.org.sa/store/standards/GSO:484863/GSO%20OIML%20R121:2007?lang=en). Visar instrumentet 70 eller 80 vet du felet.
- Var: Folkhälsomyndigheten mäter där problem befaras (bostadsrum, krypgrund, källare, vind), och räknar medelvärde över en längre period, inte enstaka avläsningar (källa i avsnitt 2). Vår praxis, utan extern källa: mitt i rummet eller 1 m från yttervägg, inte i sol, inte ovanför element, minst en vecka, avläst morgon och kväll.

## 6. Vad du gör

- För högt: vädra kort och ofta, kör frånluft vid dusch och matlagning, torka inte tvätt inomhus utan ventilation (Astma- och Allergiförbundet, källa ovan). Är källaren över 75 % RF i medel över veckan är det avfuktare, se köpguiden.
- För lågt: sänk inomhustemperaturen en grad (RF stiger utan att vatten tillförs, avsnitt 1), stäng inte ventilationen (Folkhälsomyndighetens fukttillskott på 3 g/m³ är ett tak, källa ovan). Luftfuktare saknar svensk rekommendation från myndighet; vi tar inte ställning utan mätning.

## 7. Beställning till Christian

Fyra instrument av samma modell, kontrollerade med saltmetoden innan start (skriv upp avvikelsen per instrument).

| Rum | Placering | Period | Avläsning |
|---|---|---|---|
| Sovrum | Nattduksbord, 1 m från yttervägg | 7 dygn | 07 och 22, plus loggning om instrumentet kan |
| Vardagsrum | Hylla mitt i rummet | 7 dygn | 07 och 22 |
| Badrum | Utanför duschzon, 1,5 m höjd | 7 dygn | Före och 30 min efter dusch, plus 22 |
| Källare eller tvättstuga | Mitt i rummet, 1 m över golv | 7 dygn | 07 och 22 |

Notera samtidigt utetemperatur och ute-RF (SMHI för orten), om tvätt torkat inne, och om fönster immat. Upprepa samma vecka i december och februari så att sidan får årstidsserien ingen konkurrent har.

## 8. Det vi inte vet

- Uppmätta svenska värden per rum och månad. Ingen offentlig mätserie hittad. Egna mätningar krävs.
- Ordagrann text ur FoHMFS 2014:14 och vägledningen om temperatur: PDF:erna gick inte att läsa maskinellt. Siffrorna ovan kommer från myndighetens HTML-sida om tillsynsvägledning. Chefredaktören bör öppna PDF:en och kontrollera citaten.
- Hygrometrarnas verkliga fel: bara tunna testsajter. Vi mäter själva mot salt.
- Tröskel för kvalster i forskning (ofta 50 % RF i litteraturen) saknar källa här; vi använder förbundets 45 %.
