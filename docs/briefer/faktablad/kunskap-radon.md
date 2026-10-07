# Faktablad: /fukt/radon/ (kunskap, fukt omgång B)

Beställt av hantverkaren 2026-09-30. Skrivet 2026-09-30 av underlag. Underlag till `docs/briefer/seo-checklista-2026-09-30/radon.md`.

- **Huvudfras:** radon · **Sidtyp:** kunskap · `src/content/kunskap/fukt/radon.mdx` · `produkter: []`
- Tal som redan står i `fukt-gemensamma-tal.md` avsnitt 0 och 8 upprepas inte här, bara T-numret (T47–T57).
- "Läst 2026-09-30" = hämtat och läst den dagen. Citat inom citattecken är ordagranna ur sidans HTML eller PDF-text (curl + pdftotext). **EGEN** = egen räkning eller egen tolkning, med grund. **UTDRAG** = sökmotorns eller WebFetchs sammanfattning, inte läst ordagrant.
- Ingen text här är förlaga för sidan.

---

## 1. SSM:s metodbeskrivning för bostäder (2026)

**Källa:** Strålsäkerhetsmyndigheten, *Metodbeskrivning. Mätning av radon i bostäder*, "Datum: Augusti 2026", ISSN 2000-0456, 20 s.
PDF: <https://www.stralsakerhetsmyndigheten.se/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader-pdf> (HTTP 200, application/pdf, läst ordagrant med pdftotext 2026-09-30). Adressen bytt 2026-10-07: SSM har flyttat PDF:en; den nya adressen svarar HTTP 200, application/pdf (kontrollerad 2026-10-07).
Publikationssida: <https://www.stralsakerhetsmyndigheten.se/publikationer/handbocker-och-metodbeskrivningar/metodbeskrivning-matning-radon-bostader-2026/>, "Utgivningsdatum: 2026-09-04", länkar till samma PDF. Läst 2026-09-30.

Det gemensamma faktabladets 8.3 ("gick inte att läsa") är därmed löst. Den gamla `contentassets`-adressen är inte längre den som SSM länkar till.

### 1.1 Giltighet och vad som är nytt (kap. 1, s. 2)

- "Den reviderade metodbeskrivningen för bostäder tillämpas från och med 1 oktober 2026."
- "Denna metodbeskrivning ersätter den tidigare metodbeskrivningen för mätning av radon i bostäder som publicerades 2013"
- Nytt: "respektavståndet till väggar och tak har ändrats från 0,25 meter till 0,30 meter. Nytt är också att grund för beräkning av årsmedelvärde tillåts vara mätning under ett helt år."
- "Radonhalten i en bostad bör mätas om ingen tidigare mätning finns, om senaste mätning är mer än tio år gammal, samt efter ombyggnation eller renovering som kan påverka radonhalten." (jfr T52)
- "Radon syns inte och har varken lukt eller smak, så det enda sättet att påvisa radon är genom mätning."
- "Det finns ingen tröskelnivå under vilken exponering för radon är helt ofarlig."
- Blåbetong: "som tillverkades i Sverige under åren 1929–1975" (s. 2). Bilaga 2 (s. 20): "I hus byggda mellan 1929 och 1975 eller något senare kan alunskifferbaserad lättbetong (blåbetong) ingå". Se 11 om SGU:s 1978.

### 1.2 Mättid och period

| Vad | Ordagrant | Var |
|---|---|---|
| Långtidsmätning, definition | "Mätning av radonhalt som utförs under minst två månader (60 dygn) men kan utföras under ett helt år förutsatt att lämplig mätmetod används." | kap. 3 |
| Årsmedelvärde, grund | "En uppskattning av årsmedelvärdet ska baseras på en sammanhängande mätning under minst två månader (60 dygn) inom samma eldningssäsong." | 6.1 |
| Period | "Perioden 1 oktober till 30 april räknas normalt som eldningssäsong i de södra och mellersta delarna av landet. I de norra delarna är eldningssäsongen normalt längre." | 6.1 |
| Eldningssäsong, riktvärde | "Som riktvärde för när eldningssäsongen inträffar gäller att dygnsmedeltemperaturen är lägre än +10°C." | 6.1 |
| Mekanisk ventilation | "Även i bostäder med mekanisk ventilation ska radonhalten mätas under eldningssäsongen." | 6.1 |
| Del utanför säsongen | "det kan i enstaka fall accepteras att en mindre del av mätperioden, upp till 20 procent, pågår utanför eldningssäsong förutsatt att minst två månaders mättid inkluderas inom eldningssäsongen." | 6.1 |
| Helt år | "långtidsmätning även utföras genom kontinuerlig mätning under ett helt år. Denna typ av mätning kan utföras såväl med integrerande radonmätare, exempelvis spårfilm, som med tidsupplösta elektroniska radonmätare (radoninstrument)." | 5.1 |
| Bo som vanligt | "När mätningar av radonhalt genomförs är det viktigt att bostaden används som vanligt." | kap. 5 |
| Ouppvärmt hus | "Mätning i ouppvärmda bostäder kan inte ligga till grund för uppskattning av årsmedelvärde." | 7.2 |
| Flytta inte | "Radonmätare ska inte flyttas under mätningen." | 6.2 |

### 1.3 Tabell 1 i metodbeskrivningen (s. 8), som den kan stå

| Mätningstyp | Mätperiod | Radonmätare | Årsmedelvärde |
|---|---|---|---|
| Långtidsmätning | Minst 60 dygn, under eldningssäsong, eller ett helt år | Integrerande eller tidsupplöst mätning | Ja |
| Korttidsmätning | Minst 7 dygn med spårfilm, minst 2 dygn med kontinuerligt registrerande radoninstrument (24 timmar i varje mätpunkt), alternativt individuell bedömning av mätperiod | Integrerande eller tidsupplöst mätning | Nej |
| Momentan mätning | Mellan en och några timmar | Direktvisande | Nej |

### 1.4 Antal mätpunkter och placering (6.2 och tabell 2)

- "För hus och lägenheter i ett plan ska minst två mätpunkter mätas – sovrum och ytterligare ett rum, till exempel vardagsrum."
- "I bostäder med flera våningar ska mätning utföras på varje våning med bostadsutrymme."
- "För enrumslägenheter räcker det med mätning i en mätpunkt, dock fordras två detektorer i denna mätpunkt."
- Vilka rum inte: "För att uppskatta årsmedelvärde av radonhalten ska mätningarna endast utföras i boendeutrymmen. Mätningar ska inte utföras i våtutrymmen, klädkammare, garage eller förråd."
- Kök: "En individuell bedömning behöver göras om ett kök är lämpligt att mäta i eller inte."
- Fönster: "Mätning bör inte utföras i rum där fönstret står öppet flera timmar per dygn. Om mätning ändå utförs i ett sådant rum ska detta anges i mätrapporten."
- Höjd och vägg: "den inte ska placeras nära golv, tak eller vägg. Avståndet till golv, tak och väggar bör vara minst 30 cm." (Metodbeskrivningen anger ingen fast höjd över golv, bara minst 30 cm.)
- Värme och luft: "De bör därför inte placeras närmare än 1,5 m från tilluftsdon, ytterdörr eller fönster, värmeelement eller annan värmekälla och inte närmare än 0,5 m från frånluftsdon."
- Spårfilm: "Spårfilmer är känsliga för stark värme och ska därför inte placeras nära värmekällor eller utsättas för direkt solljus." (Bilaga 2)

Tabell 2, "Minimiavstånd mellan radonmätare och olika delar av lokaler respektive ventilationsdon":

| Placering av radonmätare | Avstånd (m) |
|---|---|
| Golv, vägg, tak | ≥ 0,3 |
| Tilluftsdon, fönster, ytterdörr, värmeelement | ≥ 1,5 |
| Frånluftsdon | ≥ 0,5 |
| Om insugspump används, avstånd vägg/golv | ≥ 1,0 |

### 1.5 Krav på mätinstrument och mätosäkerhet

- "Vid en långtidsmätning av radonhalten i luft, ska radonmätare användas där mätosäkerhet är högst 20 procent vid 200 Bq/m3 (utvidgad mätosäkerhet, täckningsfaktor k=2)." (5.1; samma krav i 6.1)
- Metoder: "Långtidsmätning för att uppskatta årsmedelvärde av radonhalten utförs ofta med integrerande radonmätare, exempelvis spårfilm, [...] Det är även möjligt att använda en tidsupplöst metod för mätning under minst 2 månader (60 dygn)" (5.1)
- Spårfilm, Bilaga 2 metod 1.1: "Spårfilm med filter kan användas för att göra långtidsmätningar av radonhalt i bostäder [...] Mätperiodens längd ska då vara minst två månader (60 dagar)."
- Radoninstrument, Bilaga 2 metod 2: "Med kontinuerligt registrerande radoninstrument går det även att få underlag för uppskattning av radonhaltens årsmedelvärde. För detta syfte behöver mätningen pågå under eldningssäsong i minst två månader (60 dygn) i varje mätpunkt."
- Standard för instrument: "Vid användning av radoninstrument rekommenderas det att välja instrument som uppfyller kraven enligt SS-EN 61577-2" (Bilaga 2)
- Mätosäkerheten "(utvidgad mätosäkerhet, täckningsfaktor k=2) av uppmätt radonhalt ska uppskattas och anges i mätprotokollet." (kap. 8)
- Avrundning: "Mätvärden och gränser för mätosäkerhet avrundas till närmaste tiotal." (kap. 9)

### 1.6 Kalibrering (4.1 och Bilaga 2)

- "Mätsystem som används för mätning av radonhalt i bostäder ska vara kalibrerade. Enligt ovan angivna standarder ska mätsystem vara kalibrerade för en storhet med spårbarhet."
- "Kalibrering av elektronisk mätutrustning (radoninstrument) ska göras innan utrustningen tas i bruk samt efter reparationer eller modifieringar [...] Kalibrering av radoninstrument ska göras regelbundet. Strålsäkerhetsmyndigheten rekommenderar ett kalibreringsintervall på ett år."
- "Kalibrering ska göras vid laboratorium med spårbarhet till internationellt erkända referenser, såsom Strålsäkerhetsmyndighetens radonlaboratorium eller motsvarande." (Bilaga 2)
- Spårfilm: "Kalibrering av spårfilmer ska göras med ett slumpmässigt urval av filmer från varje batch." Minst tre procent av varje batch, minst tio spårfilmer per omgång; bakgrundskontroll minst tre procent av varje batch. (Bilaga 2)

### 1.7 Ackreditering (4.2)

- "Det rekommenderas att analys av radonhalten inomhus utförs av en organisation som är ackrediterad för mätmetoder beskrivna i denna metodbeskrivning. Ackrediteringen bygger på standarden SS-EN ISO/IEC 17025 [...] samt på föreskrifter utgivna av Sveriges nationella ackrediteringsorgan (Swedac)."
- "Om en icke-ackrediterad organisation används bör det säkerställas att organisationen har en kvalitetssäkring som är likvärdig med den som gäller för en ackrediterad organisation."
- Obs. ordvalet: metodbeskrivningen **rekommenderar** ackreditering, den kräver den inte. SSM:s webbsidor skriver "Beställ dina radonmätare (mätdosor) via ett ackrediterat mätlaboratorium." (Att mäta radon, Radon i småhus)

### 1.8 Korttidsmätning och vad den får användas till (kap. 3, 5, 5.2)

- "Årsmedelvärde för radon kan inte uppskattas med denna typ av mätning." (kap. 3)
- "Strålsäkerhetsmyndigheten rekommenderar alltid att en långtidsmätning utförs för att mäta radonhalt i bostad. I vissa fall, där det inte är möjligt att göra en långtidsmätning, kan en korttidsmätning utföras. Exempel på denna situation är vid köp eller försäljning av bostad, eller i bostäder med tillfällig användning" (5.2)
- "En korttidsmätning ger en indikation på radonhalten i en bostad men är inte tillräckligt underlag för att uppskatta ett årsmedelvärde av radonhalten. Tillsynsmyndigheter bör därför inte använda korttidsmätningar som underlag för beslut." (5.2)
- "Mätningen bör ske under eldningssäsong för att resultatet ska bli representativt." (5.2)
- Efter åtgärd: "Efter eventuella åtgärder för att sänka radonhalten kan en korttidsmätning göras för en snabb indikation av åtgärdernas effekt. Eftersom resultatet från en korttidsmätning kan påverkas av tillfälliga variationer behöver en förnyad långtidsmätning genomföras efter åtgärd, för att beräkna ett nytt årsmedelvärde" (kap. 5)
- SSM:s webbsida "Att mäta radon" (uppdaterad 4 september 2026): "Om mätningen sker med spårfilm måste du mäta i minst sju dagar. En korttidsmätning är dock bara rådgivande, den kan inte användas för något myndighetsbeslut."

### 1.9 Hur årsmedelvärdet räknas (7.1, 7.2, 10)

- Ett plan: "Medelvärdet beräknas av mätresultaten från samtliga mätpunkter i bostaden. Antalet mätpunkter ska vara minst två."
- Flera plan: "Medelvärdet beräknas först för varje enskilt plan, om fler än en mätare har använts på respektive våningsplan. Därefter beräknas bostadens medelvärde utifrån medelvärdena från respektive våningsplan."
- Alltså: aritmetiskt medel av planens medelvärden, varje plan väger lika. Ingen viktning efter yta eller vistelsetid anges. (**EGEN** läsning av 7.1: det står inget om viktning.)
- Under MDA: "Om mätvärdet understiger MDA ska det uppmätta värdet ändå användas vid medelvärdesberäkningen."
- "En uppskattning av årsmedelvärdet fås av bostadens medelvärde för mätperioden [...] förutsatt att villkoren vad gäller kalibrering, kontroller och mätperiodens längd är uppfyllda." (7.2)
- Jämförelse: "Jämförelse med referensnivå eller gränsvärde för radon i bostäder ska göras med det uppskattade årsmedelvärdet för radonhalt. Vid jämförelser ska uppskattade årsmedelvärden användas utan att ta hänsyn till mätosäkerheten." (kap. 10)
- Rapporttext om osäkerhet: "Radonhalten i bostaden varierar på grund av väderlek och boendevanor. Detta gör att det sanna årsmedelvärdet kan avvika från det värde som uppmättes under mätperioden." (kap. 8)

Räkneexempel (**EGEN**, formeln ur 7.1, påhittade mätvärden): två plan; bottenplan sovrum 180 och vardagsrum 220 → planmedel 200; övre plan 120 → bostadens medel (200 + 120) / 2 = 160 Bq/m³. Talen är bara exempel på räknesättet.

### 1.10 Digitala och kontinuerliga mätare för årsmedelvärde

- Metodbeskrivningen godtar tidsupplösta radoninstrument för långtidsmätning (1.5 ovan) på samma villkor: minst 60 dygn under eldningssäsong i varje mätpunkt, eller ett helt år; högst 20 % mätosäkerhet (k=2) vid 200 Bq/m³; kalibrerade med spårbarhet, rekommenderat intervall ett år.
- SSM, fråga och svar "Får man använda kontinuerlig elektronisk mätinstrument i stället för spårfilmsdosor för långtidsmätning/uppföljande mätning?", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/far-man-anvanda-kontinuerlig-elektronisk-matinstrument-i-stallet-for-sparfilmsdosor-for-langtidsmatninguppfoljande-matning/>, senast uppdaterad 4 september 2026, läst 2026-09-30: "Ja, om de är kalibrerade och uppfyller vissa kvalitetskrav."
- SSM, "Måste radonmätaren (spårfilmsdosor/ elektroniska mätinstrument) vara kalibrerade?", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/maste-radonmataren-sparfilmsdosor-elektroniska-matinstrument-vara-kalibrerad/>, uppdaterad 4 september 2026: "Om mätresultatet ska användas för ett myndighetsbeslut ska radonmätare vara kalibrerade."
- SSM, "Vilket mätinstrument ska jag välja vid mätning av radonhalten?", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/vilket-matinstrument-ska-jag-valja-vid-matning-av-radonhalten/>, uppdaterad 4 september 2026: "Strålsäkerhetsmyndigheten får inte rekommendera ett specifikt mätinstrument, men vi rekommenderar att mätinstrumenten uppfyller vissa krav: är kalibrerat, CE märkt, uppfyller (elektronisk) IEC standard."
- Mätrapporten ska bl.a. ange "mätmetod och mätutrustning (exempelvis typ och serienummer, senaste kalibreringsdatum)" och undertecknas av mätföretaget, och den boende ska intyga att instruktionerna följts (kap. 11, punkt 8 och 13).

### 1.11 Övrigt ur metodbeskrivningen som kan behövas

- Referensnivå, definition (kap. 3): "Referensnivån är, till skillnad från ett gränsvärde, inte en bindande strikt gräns, men anger en nivå som inte bör överskridas och som utgör en utgångspunkt för att bedöma behovet av åtgärder och optimera strålskyddet. Även under referensnivån bör radonhalten hållas så låg som det är möjligt och rimligt."
- Gränsvärde (kap. 3): "Värde som inte får överskridas. I samband med radon i bostäder används ”gränsvärde” för nybyggnation enligt Boverkets byggregler."
- Skyldighet (Bilaga 1): "Om årsmedelvärdet för radon i inomhusluften överstiger referensnivån 200 Bq/m³ och därmed utgör en risk för människors hälsa, föreligger skyldighet att utreda och åtgärda radonsituationen."
- Tillsyn (Bilaga 1): kommunens miljö- och hälsoskyddsnämnd, "enligt strålskyddsförordningen (2018:506), 8 kap. 2 §" (paragrafen inte kontrollerad i riksdagens text).
- Blåbetong via gammamätning: "Om miljödosekvivalentraten är större än 0,3 μSv/h, indikerar det förekomst av blåbetong." (Bilaga 2)
- Markkontakt (6.3, gäller urval i flerbostadshus): "Med markkontakt avses att utrymmet är beläget direkt på bottenplatta eller ovan kryputrymme med dålig ventilation (luftomsättning)." Lägenheter med markkontakt ska alla mätas.

---

## 2. Strålskyddsförordningen (2018:506) och strålskyddslagen (2018:396)

### 2.1 Förordningen, 3 kap. 6 § (bekräftad, ordagrant ur riksdagens text)

Riksdagen, Strålskyddsförordning (2018:506), <https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddsforordning-2018506_sfs-2018-506/>, "Ändrad: t.o.m. SFS 2026:1336", läst med curl ur HTML 2026-09-30.

- Rubrik före paragrafen: "Referensnivåer för radon". Kapitlet heter "3 kap. Optimering".
- "6 § Referensnivån för radon är 200 becquerel per kubikmeter luft inomhus i bostäder, lokaler som allmänheten har tillträde till och på arbetsplatser, uttryckt som årlig genomsnittlig aktivitetskoncentration."
- Paragrafen säger **inget** om åtgärder, varken "bör" eller "ska". UTDRAG-märkningen i T47 och 8.1 kan tas bort: lydelsen stämmer ordagrant.
- Följande paragraf, 7 §, gäller gammastrålning: "Referensnivån för extern exponering för gammastrålning från byggnadsmaterial är 1 millisievert årlig effektiv dos till personer som vistas i byggnaden."

### 2.2 Åtgärdsplikten står i lagen, 3 kap. 6 §

Riksdagen, Strålskyddslag (2018:396), <https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddslag-2018396_sfs-2018-396/>, "Ändrad: t.o.m. SFS 2026:1590", läst 2026-09-30.

- "6 § I fråga om lokaler som allmänheten har tillträde till och i fråga om bostäder ska fastighetsägaren optimera strålskyddet genom att vidta åtgärder så att radonhalten hålls så låg som det är möjligt och rimligt."
- Samma paragraf citeras i SSM:s metodbeskrivning (kap. 3 och Bilaga 1) och i SSM:s fråga "Vad finns det för krav på mätning av radon i min bostad?" (4.2 nedan).
- Obs. fälla: både lagen och förordningen har en 3 kap. 6 §. **Förordningen** = nivån 200. **Lagen** = fastighetsägaren "ska" optimera. Blanda inte ihop.

---

## 3. SSM "400 000 bostäder" (T57), ordagrant

- SSM, "Radon i småhus", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/radon-i-smahus/>, senast uppdaterad 04 september 2026, läst 2026-09-30: "Strålsäkerhetsmyndigheten uppskattar att det finns närmare 400 000 bostäder i Sverige som har en radonhalt över referensnivån."
- SSM, "Att mäta radon", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/att-mata-radon/>, senast uppdaterad 04 september 2026: "Strålsäkerhetsmyndigheten uppskattar att det finns närmare 400 000 bostäder i Sverige som har högre radonhalt än referensnivån."
- Ordet är **"närmare"**, inte "drygt" eller "uppemot". T57 i det gemensamma faktabladet bör rättas till "närmare 400 000".
- Samma sida, Radon i småhus: "Radonhalten i marken är alltid tillräcklig för att kunna orsaka för hög halt inomhus om huset är otätt mot marken."
- Samma sida: "I privatägda småhus är det den som äger huset som är ansvarig för att mätningar görs och att åtgärder vid behov vidtas."

---

## 4. Priser på långtidsmätning för villa

Alla lästa 2026-09-30. Priserna står som leverantören anger dem. Butik och firma är källa för pris och innehåll, inte för prestanda.

### 4.1 Pristabell

| Leverantör | Pris som angivet | Dosor | Metod | Analys och rapport | Frakt | Källa |
|---|---|---|---|---|---|---|
| Anticimex (webbshop) | "795 kr" ("Anticimex radonmätning kostar från 795 kr, då ingår två dosor.") | 2 | "radondetektorer", minst 60 dagar; metod (spårfilm) inte utskriven på sidan | Står inte uttryckligen; dosorna "returneras till laboratoriet", laboratoriet namnges inte på långtidssidan | Står inte på produktsidan. Köpvillkoren: "Fraktkostnaden baseras på leveranssätt och vikt." | shop.anticimex.com/vatten-och-fukt/radonmatning |
| Eurofins Radon (laboratorium) | "Pris från: 472 SEK (378 SEK exkl. moms)"; sidans prislista: 472,50 kr inkl. moms per detektor vid 1–2, 448,33 vid 3, 423,75 vid 4 … 392,14 vid 7 | minst 2 ("alltid minst 2 stycken") | Spårfilm (Swedac-registret 10243) | "Analys av detektorer", "Ackrediterad rapport på mätningen" | "Frakt till dig, och tillbaka till labbet" ingår | radon.eurofins.se/…/langtidsmatning-villa/ |
| Radea (återförsäljare) | "599 kr inkl moms" för 2 mätpuckar; 779 (3), 965 (4), 1 154 (5), 1 335 (6) | 2–9 | "mätdosor (spårfilmsdosor)" | "Analys och mätrapport från Radonova" ingår | "I priset ingår allt, från fri retur till analys och mätrapport"; "Alltid gratis frakt!" | radea.se/butik/radonmatning-villa/ |
| Radonmätning.se (återförsäljare) | "Det nuvarande priset är: 360,00kr." "Pris per detektor (inkl. moms). Minsta beställningsmängd 3 detektorer." | minst 3 i beställning; "Minst 2 dosor för villor med 1 – 2 våningsplan" | "Spårfilmdosor" | "Analys och resultatrapport från SWEDAC ackrediterat laboratorium" (laboratoriet namnges inte) | Står inte | radonmätning.se/produkt/radonmatning-i-villa/ |
| Radonova (laboratorium) | Sidan **gick inte att läsa** (se 4.3). Radonovas egen blogg 2023-02-02: "För en enplansvilla kostar en mätning som ger ett årsmedelvärde från en knapp tusenlapp." | inte angivet | Spårfilm (Swedac-registret 1489) | "avser ovan priser kostnaden för radondosor, analys och porto" | ingår (porto) | mynewsdesk.com, Radonova, 2023-02-02 |

**EGEN** räkning, pris för två dosor där leverantören anger styckpris:
- Eurofins: 2 × 472,50 = 945 kr inkl. moms. Sidan visar "Pris från: 472 SEK" bredvid "Antal: 2", men sidans skript räknar pris × antal. Osäkert om 472 eller 945 är totalpriset för två; kontrollera i kassan innan talet används.
- Radonmätning.se: minsta beställning 3 × 360 = 1 080 kr inkl. moms.

### 4.2 Viktigt om Anticimex och SEO-checklistans tal

- Anticimex huvudsida <https://www.anticimex.se/radonmatning/> (läst 2026-09-30): "Anticimex radonmätning kostar från 795 kr för en långtidsmätning och från 1 490 kr för en korttidsmätning. I mätningen ingår två dosor."
- **1 490 kr är korttidsmätningen, inte en större långtidsmätning.** SEO-checklistan (avsnitt 11) skriver "795 och 1 490 kr" som om båda vore långtidsmätning.
- Webbshoppens korttidsprodukt "Radonmätning Villa 7-dagar" har `"price":1395` (SEK) i sidans strukturerade data, <https://shop.anticimex.com/vatten-och-fukt/radonmatning-villa-kort>. Huvudsidan och shoppen säger alltså 1 490 och 1 395 kr för korttidsmätning. Korttidsdosorna analyseras av Radonova ("returnerar dosorna till Radonovas laboratorium").
- Anticimex skriver på båda sidorna "enligt Folkhälsomyndighetens rekommendationer" (gammalt uttryck, se fällorna i SEO-checklistan).

### 4.3 Radonova, "429"

- Den 429 som SEO-checklistan anger som Radonovas pris ("gav 429 tidigare") är **HTTP-felkod 429 (Too Many Requests)**, inte ett pris. Det gemensamma underlaget skrev "Radonova gick inte att läsa (429)".
- 2026-09-30: radonova.se/produkter/villamatning-av-radon, /privatperson, /nyheter/vad-kostar-det-att-genomfora-en-radonmatning-i-en-villa och /om-radon/…/vilken-typ-av-radonmatning… gav HTTP 429 med sidan "Vercel Security Checkpoint", både med WebFetch och curl.
- UTDRAG (sökmotorn, 2026-09-30, ur Radonovas egna sidor): "För en enplansvilla kostar en mätning som ger ett årsmedelvärde från knappt 1 000 kronor"; korttidsmätning "från cirka 1 500 kronor". Samma lydelse står ordagrant i Radonovas blogg på Mynewsdesk 2023-02-02 (läst): <https://www.mynewsdesk.com/se/radonova-laboratories-ab/blog_posts/vad-kostar-det-att-genomfoera-radonmaetning-i-en-villa-112138>.

### 4.4 Svensk Energideklaration och Radonanalys GJAB

- Radonanalys GJAB: radonanalys.se och www.radonanalys.se gav HTTP 454 med curl. Inget pris.
- Svensk Energideklaration: inte läst (fyra leverantörer räckte). Saknas.

---

## 5. Swedac: ackrediterade laboratorier för radon i bostäder

### 5.1 Registret

Swedac, ackrediteringsregistret, <https://ackrediteringar.swedac.se/?q=radon>, läst 2026-09-30: "Antal träffar: 8". Swedacs gamla sökadress (search.swedac.se), som SSM länkar till, leder nu till <https://ackrediteringar.swedac.se/>.

Ackrediterade för radon i luft i bostäder, enligt respektive ackrediteringssida (alla SS-EN ISO/IEC 17025:2018, "Aktivitetsmätning"):

| Laboratorium | Ackrediteringsnr | Senaste beslutsdatum | Bostäder, långtid | Bostäder, korttid | Adress |
|---|---|---|---|---|---|
| Eurofins Radon Testing Sweden AB (Luleå) | 10243 | 2025-09-12 | "SS-ISO 11665-4/SSM metodbeskrivning - Mätning av radon i bostäder", "Radon, långtidsmätning, bostäder", "Spårfilmsmätning, bildanalys" | "Radon, rådgivande korttidsmätning, bostäder", spårfilm | <https://ackrediteringar.swedac.se/10243> |
| Radonova Laboratories AB (Uppsala) | 1489 | 2025-08-22 | "SS-ISO 11665-4:2021/SSM metodbeskrivning – Mätning av radon i bostäder, 2013", spårfilm, "20 - 25000 Bq/m3 (3 months exp.)" | spårfilm "50 - 150000 Bq/m3 (7 days exp.)"; även "Kontinuerligt registrerande radoninstrument med halvledardetektor" enligt SSM bostäder 2013, "10 - 100000 Bq/m3" | <https://ackrediteringar.swedac.se/1489> |
| Radonanalys GJAB (Lund) | 1989 | 2026-02-12 | "SS-ISO 11665-4:2021/SSM metodbeskrivning – Mätning av radon i bostäder, 2013", "Radon, långtidsmätning, bostäder", spårfilm, "30 - 1100 Bq/m3 (2 mån. exp.)" | "Radon, rådgivande korttidsmätning, bostäder", "50 – 1100 Bq/m3 (7 dygns exp.)" | <https://ackrediteringar.swedac.se/1989> |

- Övriga träffar på "radon" (Eurofins Water Testing, Mark- och Miljökontroll i Särö, SGS, Uppsala Vatten, RISE) är inte kontrollerade för radon i bostadsluft; troligen vatten eller annat. Inte med i tabellen.
- Anticimex, Radea och Radonmätning.se är inte laboratorier. Radea och Anticimex korttid anger Radonova som analyserande laboratorium. Anticimex långtid och Radonmätning.se namnger inget laboratorium.
- **Osäkert:** Radonovas och Radonanalys ackrediteringar hänvisar till SSM:s metodbeskrivning **2013**. Den nya gäller från 1 oktober 2026. Registret visar inte om ackrediteringarna flyttats över till 2026 års version.

### 5.2 Swedacs informationssida

Swedac, "Tillförlitlig radonmätning", <https://www.swedac.se/tillforlitlig-radonmatning/>, senast uppdaterad 14 november 2022, läst 2026-09-30: "De företag som i dagsläget är granskade och godkända av Swedac för att följa dessa anvisningar är: Eurofins Radon Testing Sweden AB, Radonova Laboratories AB, Radonanalys GJAB". Samma tre som registret.
- Samma sida skriver "Vid en radonhalt högre än 200 bequerel bör byggnaden saneras." (stavat så; ingen enhet). Citeras inte som norm.

---

## 6. Digital radonmätare för hemmabruk (tillverkarens uppgifter)

Allt i detta avsnitt är **tillverkarens** uppgifter. Inga priser, inga länkar på sidan (SEO-fällan).

### 6.1 Airthings Wave Plus (Model 2910)

Airthings, produktsida, <https://www.airthings.com/en/wave-plus>, läst 2026-09-30, ordagrant ur flikarna "Technical specifications":
- "Radon sampling: Passive diffusion chamber"
- "Detection method: Alpha spectrometry"
- "Measurement range: 0 – 500 pCi/L / 0 – 20,000 Bq/m3"
- "Accuracy/precision at 5.4 pCi/L / 200 Bq/m3: After 7 days ~ 10 % After 2 months ~ 5 %"

Airthings hjälpcenter, "What is the accuracy of the radon sensor", <https://help.airthings.com/en/articles/3119759-what-is-the-accuracy-of-the-radon-sensor>, läst 2026-09-30 (uppdateringsdatum syns inte):
- "Typical σ for 7-day average is: ~ ± 10%"
- Kalibrering: "we obtain a Calibration Certification from the German Federal Office for Radiation Protection on an annual basis."
- "Additionally, Airthings radon detectors acclimatize to their surroundings rather than requiring traditional calibration"
- Första värdet: "When first activated, the Corentium Home enters a startup phase [...] The first radon measurement typically appears after 24 hours". Wave: "collects air samples every 6 minutes, and its rolling averages are updated hourly."
- Rullande medel: "A new calculation runs every hour and includes the counts for the past 24 hours".
- Hur länge: "we usually recommend you measure [...] for at least 30 days." och "accurate readings require a longer data collection period of about one month to account for natural fluctuations in radon levels."

### 6.2 Jämfört med SSM:s krav (EGEN, tolkning, inte SSM:s ord)

- SSM kräver högst 20 % **utvidgad** mätosäkerhet (k=2) vid 200 Bq/m³. Airthings anger "~10 %" efter 7 dagar och "~5 %" efter 2 månader, och i hjälpcentret "σ" (en standardavvikelse, k=1). Om σ = 10 % motsvarar det ungefär 20 % vid k=2 efter 7 dagar, och ungefär 10 % vid k=2 efter 2 månader. **EGEN**: utvidgad = 2 × σ. Tillverkaren anger själv inte k=2.
- SSM kräver kalibrering med spårbarhet, rekommenderat varje år, dokumenterad, med kalibreringsdatum och serienummer i mätrapporten. Airthings anger en årlig certifiering av sensortypen hos BfS, inte en kalibrering av den enskilda mätaren; köparen får inget kalibreringsintyg enligt sidorna ovan. Om Wave Plus uppfyller SS-EN 61577-2 står inte på de lästa sidorna.
- Slutsats som går att skriva med källa: SSM godtar kontinuerliga instrument för årsmedelvärde "om de är kalibrerade och uppfyller vissa kvalitetskrav" (1.10). Att en viss hemmamätare uppfyller kraven kan inte beläggas med de lästa källorna.

---

## 7. Boverket om radon

### 7.1 "Vad är radon?"

Boverket, <https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/vad-ar-radon/> (adressen i beställningen, …/halsa-och-inomhusmiljo/radon/vad-ar-radon/, omdirigerar hit), senast ändrad 10 juni 2025, läst 2026-09-30:
- "Radon är en osynlig och luktfri gas som bildas när det radioaktiva grundämnet radium sönderfaller."
- "Att mäta är det enda sättet att ta reda på om det finns radon i ett hus eller en lokal."
- "Marken är den vanligaste radonkällan."
- Blåbetong: "som användes från 1929 till slutet av 1970-talet. Blåbetong i både ytter- och innerväggar samt bjälklag kan ge radongashalter på uppåt 1 000 Bq/m3, när luftväxlingen är dålig."
- Vatten: "En tumregel säger att en radonhalt i vatten på 1000 Bq/l ger ett tillskott på cirka 100 Bq/m3 till inomhusluften." (samma som SSM, 8.5 i gemensamma)
- Nybyggnad: "Boverket har tagit fram ett gränsvärde för radon som gäller vid uppförande av ny byggnad eller ändring av en byggnad som är 200 becquerel per kubikmeter inomhusluft. Detta finns beskrivet i Boverkets byggregler, BBR." (BBR är ersatt av BFS 2024:8 för nya ärenden; sidan är inte uppdaterad på den punkten.)
- "Swedac granskar och godkänner laboratorier som analyserar radon i luft och dricksvatten."

### 7.2 "Mät radon i ditt hus"

Boverket, <https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/mat/>, senast ändrad 7 augusti 2024, läst 2026-09-30:
- När: "Du bör mäta radonhalten om du köper ett hus / bygger om eller till ditt hus / ändrar ventilationen eller uppvärmningssystemet / bygger ett nytt hus / om det har gått mer än 10 år sedan den senaste mätningen."
- "Mätperioden ska vara minst två, helst tre månader."
- Korttid: "Ska du till exempel köpa hus och inte har tid att vänta kan du göra en kortare mätning under 2 till 10 dagar. En sådan mätning [...] ger endast ett ungefärligt radonvärde och kan inte användas för att söka radonbidrag."
- **Gammalt:** "Riktvärden hittar du till exempel i Folkhälsomyndighetens allmänna råd om radon i inomhusluft. Riktvärdet för radon i inomhusluften är 200 Bq/m3." Boverkets egen sida har alltså kvar det gamla ordet. Citeras inte; SSM och förordningen väger tyngre (myndigheten med ansvaret, gällande författning).

### 7.3 Nybyggnad

Boverket, "Regler och vägledning för radon vid uppförande av ny byggnad", <https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/ny-byggnad/>, senast ändrad 1 februari 2024, läst 2026-09-30:
- "Boverkets byggregler anger att gränsvärdet för radonhalt och gammastrålning i nya byggnader är 200 Bq/m3 för inomhusluft respektive 0,3 µSv/h för byggnadsmaterial. Detta gäller för rum där människor vistas mer än tillfälligt."
- "Som byggherre ansvarar du för att byggnaden inte får för höga radonhalter inomhus. Det gäller både när du uppför en ny byggnad och när du gör ändringar i en befintlig."
- "Byggreglerna anger däremot inte vilka tekniska lösningar man ska använda för att gränsvärdena ska uppfyllas."

---

## 8. Radon som dolt fel vid husköp

Källa som inte är advokatbyrå eller firma: **Mäklarsamfundet** (branschorganisation för fastighetsmäklare). Konsumentverket nämner inte radon.

- Mäklarsamfundet, "Vad är radon och vem ansvarar för radon i en bostadsaffär?", <https://www.maklarsamfundet.se/nyheter/vad-ar-radon-och-vem-ansvarar-radon-i-en-bostadsaffar>, läst 2026-09-30 (publiceringsdatum syns inte i sidans text):
  - "Normalt utgör radon inte ett dolt fel. Det ingår i köparens undersökningsplikt att undersöka förekomsten av radon."
  - Säljaren: "Har säljaren utfört en radonmätning bör säljaren upplysa köparen om de uppmätta värdena [...] Om säljaren lämnar en garanti eller utfästelse, till exempel att byggnaden inte byggts med blåbetong eller att säljaren garanterar låga radonvärden kan säljaren bli ersättningsskyldig om det i efterhand visar sig att uppgifterna inte stämmer."
- Mäklarsamfundet, "Undantag från huvudregeln – radon omfattades inte av undersökningsplikten", <https://www.maklarsamfundet.se/nyheter/undantag-fran-huvudregeln-radon-omfattades-inte-av-undersokningsplikten>, läst 2026-09-30: "Refererat avgörande: Svea Hovrätts dom T 2402-16 meddelad den 16 mars 2016." Säljarna hade utfäst ett visst byggmaterial; huset var blåbetong; "Hovrätten fann att prisavdraget skulle bestämmas till 300 000 kr." Samma text: domen kunde "överklagas till och med den 13 april 2017", vilket inte går ihop med 2016. Datum och laga kraft är **osäkra**; domen är inte läst i original.
- Konsumentverket, "Dolda fel i hus – vad kan du göra?", <https://www.konsumentverket.se/varor-och-tjanster/dolda-fel-i-hus/>, läst 2026-09-30: definierar dolt fel och undersökningsplikt, **nämner inte radon**. "Du kan klaga på ett dolt fel i upp till tio år från att du fick tillträde till huset."
- SSM, "Jag vill köpa en bostad, har ni mätresultat för radon?", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/1.1.jag-vill-kopa-en-bostad-har-ni-matresultat-for-radon/>, senast uppdaterad 12 april 2022: "Strålsäkerhetsmyndigheten har inga uppgifter om utförda radonmätningar i bostäder. För frågor om radon i bostäder ska du vända dig till ditt miljö- och hälsoskyddskontor som kan ha uppgifter om utförda mätningar av radon."
- SSM, radonkarta vid husköp, <https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/jag-ar-intresserad-av-ett-hus-pa-en-viss-adress-finns-det-en-radonkarta-for-omradet/>, uppdaterad 12 april 2022: "Markradonkartorna är för oprecisa för att det ska gå att dra slutsatser om hur radonförhållandena är för exempelvis en viss tomt." och "Det enda sättet att få reda på radonhalten i ett hus är därför genom långtidsmätningar av radon i inomhusluften."

---

## 9. SSM om åtgärder, i korthet

SSM, "Åtgärder mot radon", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/atgarder-mot-radon/>, senast uppdaterad 10 november 2025, läst 2026-09-30:
- "Om radonhalten överstiger referensnivån bör åtgärder vidtas för att få ner halten så lågt som det är rimligt och möjligt."
- "När åtgärd behövs är första steget att ta reda på varifrån radonet kommer; om det är från marken, byggnadsmaterialet eller hushållsvattnet."
- "Strålsäkerhetsmyndigheten har ingen expertkunskap vad gäller radonåtgärder."
- Byggnadsmaterial: "kan luftväxlingen ökas och på så sätt sänka radonhalten. I enklare fall räcker det ofta att installera ett frånluftssystem med fläkt."
- Mark: "kan du täta sprickor och otätheter i husets grundkonstruktion, men ger inte tätning tillräcklig effekt. Då kan man med hjälp av en radonsug, radonbrunn eller smalrör skapa ett undertryck under huset så att jordluften inte sugs in. Ventilationen kan också åtgärdas."
- Vatten: "Har du radonhalter över 1000 Becquerel per liter i din privata brunn i ett hus där du bor permanent bör du vidta åtgärder för att sänka halten." SSM:s fråga och svar "Hur kan jag sänka radonhalten inomhus?" (uppdaterad 12 april 2022) lägger till: "Oftast räcker det att vattnet luftas kraftigt med en radonavskiljare."
- "Radon kan också komma från flera källor samtidigt."
- Konsult: "rekommenderar en certifierad radontekniker om det är möjligt", eller medlemsföretag i Svensk Radonförening.
- **Mät igen:** "Efter att åtgärden genomförts är det viktigt att göra en ny långtidsmätning, för att verifiera att åtgärden haft avsedd effekt." Samma sak i metodbeskrivningen (1.8) och på Radon i småhus: "Det är också viktigt att du mäter radonhalten efter att du har åtgärdat ditt hus."
- Åtgärdstyperna som SSM nämner: frånluftssystem med fläkt/ökad luftväxling, tätning, radonsug, radonbrunn, smalrör, ventilation, radonavskiljare för vatten.
- Ingen saneringskostnad från firma tas med. (Radonovas blogg 2023 skriver att en åtgärd "sällan" överstiger 40 000 kr; firma, räknas inte.)

---

## 10. Källare, lägsta plan och lukt

### 10.1 Lukt (SSM säger det uttryckligen)

- SSM, "Vad är radon?", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/vad-ar-radon/>, senast uppdaterad 10 november 2025, läst 2026-09-30: "Radon varken luktar, smakar eller syns. Det enda sättet att upptäcka radon är att mäta."
- Metodbeskrivningen (1.1): "Radon syns inte och har varken lukt eller smak".
- Boverket (7.1): "osynlig och luktfri gas".

### 10.2 Källare

- SSM:s sidor för privatpersoner (Radon i småhus, Att mäta radon, Radonkällor i inomhusluften, Vad är radon, Åtgärder, fråga och svar) **säger inget uttryckligt om att halten är högre i källare eller på lägsta plan i småhus**. Saknas.
- Närmast, metodbeskrivningen: mätning bara i "boendeutrymmen", "på varje våning med bostadsutrymme" (1.4), och för flerbostadshus ska alla lägenheter med markkontakt mätas (1.11). Markkontakt = "direkt på bottenplatta eller ovan kryputrymme med dålig ventilation".
- SSM, Radonkällor (gemensamma 8.5): "Markradon är den klart dominerande radonkällan i både flerbostadshus och småhus."
- UTDRAG (sökmotorn, 2026-09-30, ur SSM:s metodbeskrivning för arbetsplatser 2021, inte läst): lokaler som "är i källare eller på bottenvåning med markkontakt" nämns som särskilt viktiga. Gäller arbetsplatser, inte bostäder.
- Firma, bara för vad som mäts: Eurofins skriver att "oinredd källare klassas inte som bostadsrum och räknas därför inte med i årsmedelvärdet"; Radea "Har du inredd källare ska du mäta även där".

---

## 11. SGU om markradon och blåbetong

SGU, "Markradon", <https://www.sgu.se/samhallsplanering/risker/radon-och-stralning/markradon/>, "Senast granskad 2020-11-03", läst 2026-09-30:
- "Alunskiffer, som är en sedimentär bergart, har använts för att tillverka så kallad blåbetong. Blåbetongen användes under perioden 1929–1978 vid byggandet av både enfamiljshus och flerfamiljshus, vilka därmed har förhöjda radonhalter i inomhusluften."
- Den gamla adressen /samhallsplanering/risker/markradon/ ger 404.

**Årtalen, som källorna säger olika:**

| Källa | Årtal | Ordet |
|---|---|---|
| SSM, Radonkällor (T55) och metodbeskrivningen s. 2 | 1929–1975 | "tillverkades" |
| SSM, metodbeskrivningen Bilaga 2 | "mellan 1929 och 1975 eller något senare" | "byggda" |
| SGU, Markradon | 1929–1978 | "användes" |
| Boverket, Vad är radon? | "från 1929 till slutet av 1970-talet" | "användes" |

Väger tyngst: SSM (ansvarig myndighet för radon, text från augusti 2026). **EGEN** läsning: SSM:s "tillverkades" och SGU:s "användes" behöver inte motsäga varandra; metodbeskrivningens "eller något senare" täcker glappet. Inget medelvärde.

---

## 12. WHO:s 100 Bq/m³

WHO, fact sheet "Radon", <https://www.who.int/news-room/fact-sheets/detail/radon-and-health>, daterad 25 January 2023, läst 2026-09-30, ordagrant:
- "The WHO handbook on indoor radon: A public health perspective (4) provides policy options for reducing health risks from residential radon exposure through: [...] establishing a national annual average residential radon concentration reference level of 100 Bq/m³, but if this level cannot be reached under the prevailing country-specific conditions, the reference level should not exceed 300 Bq/m³"
- "The risk of lung cancer increases by about 16% per 100 Bq/m3 increase in long time average radon concentration."
- WHO:s egen källa finns alltså. SSM:s metodbeskrivning anger "WHO, Handbook on indoor radon, WHO, 2009" som referens [1]. Handboken själv är inte läst.
- Hälsa på sidan bara med SSM som källa (SEO-fällan). WHO:s 16 % får inte stå som hälsopåstående utan beslut från SEO; 100/300 är en rekommendation till länder, inte en svensk nivå.

---

## 13. Avvikelser mot tidigare underlag

- **T47 / gemensamma 8.1:** förordningens 3 kap. 6 § är nu ordagrant kontrollerad. UTDRAG-märkningen kan tas bort. Lägg till att åtgärdsplikten står i **lagens** 3 kap. 6 § (2.2).
- **T57 / gemensamma 8.5:** ordet är "närmare 400 000", inte "drygt/uppemot".
- **Gemensamma 8.3:** metodbeskrivningen är läst; ny adress och giltighet 1 oktober 2026.
- **SEO-checklistan 11:** Anticimex 1 490 kr är korttidsmätning. "Radonova 429" är en HTTP-felkod.
- **SEO-checklistan 6, H2 4:** "Dosorna beställs från ett ackrediterat laboratorium (Swedac, om faktabladet bekräftar det)": bekräftat, tre laboratorier (5.1). Obs. att metodbeskrivningen "rekommenderar" ackreditering.
- **Affiliatebeslutet** ("högst 20 procent osäkerhet vid 200 Bq/m³"): stämmer, med tillägget "utvidgad mätosäkerhet, täckningsfaktor k=2" (1.5).

---

## 14. Interna länkar

Oförändrade från SEO-checklistan avsnitt 9. Inget nytt här.

---

## Källor

```yaml
kallor:
  - titel: Strålsäkerhetsmyndigheten, Metodbeskrivning. Mätning av radon i bostäder (augusti 2026, tillämpas från 1 oktober 2026)
    url: https://www.stralsakerhetsmyndigheten.se/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader-pdf
  - titel: Strålsäkerhetsmyndigheten, publikationssida för metodbeskrivningen (utgiven 2026-09-04)
    url: https://www.stralsakerhetsmyndigheten.se/publikationer/handbocker-och-metodbeskrivningar/metodbeskrivning-matning-radon-bostader-2026/
  - titel: Strålskyddsförordning (2018:506), 3 kap. 6 §, t.o.m. SFS 2026:1336 (läst 2026-09-30)
    url: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddsforordning-2018506_sfs-2018-506/
  - titel: Strålskyddslag (2018:396), 3 kap. 6 §, t.o.m. SFS 2026:1590 (läst 2026-09-30)
    url: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddslag-2018396_sfs-2018-396/
  - titel: Strålsäkerhetsmyndigheten, radon i småhus (uppdaterad 2026-09-04)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/radon-i-smahus/
  - titel: Strålsäkerhetsmyndigheten, att mäta radon (uppdaterad 2026-09-04)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/att-mata-radon/
  - titel: Strålsäkerhetsmyndigheten, vad är radon? (uppdaterad 2025-11-10)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/vad-ar-radon/
  - titel: Strålsäkerhetsmyndigheten, åtgärder mot radon (uppdaterad 2025-11-10)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/atgarder-mot-radon/
  - titel: Strålsäkerhetsmyndigheten, får man använda kontinuerliga elektroniska mätinstrument för långtidsmätning? (uppdaterad 2026-09-04)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/far-man-anvanda-kontinuerlig-elektronisk-matinstrument-i-stallet-for-sparfilmsdosor-for-langtidsmatninguppfoljande-matning/
  - titel: Strålsäkerhetsmyndigheten, måste radonmätaren vara kalibrerad? (uppdaterad 2026-09-04)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/maste-radonmataren-sparfilmsdosor-elektroniska-matinstrument-vara-kalibrerad/
  - titel: Strålsäkerhetsmyndigheten, vilket mätinstrument ska jag välja? (uppdaterad 2026-09-04)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/vilket-matinstrument-ska-jag-valja-vid-matning-av-radonhalten/
  - titel: Strålsäkerhetsmyndigheten, jag vill köpa en bostad, har ni mätresultat för radon? (uppdaterad 2022-04-12)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/1.1.jag-vill-kopa-en-bostad-har-ni-matresultat-for-radon/
  - titel: Strålsäkerhetsmyndigheten, finns det en radonkarta för området? (uppdaterad 2022-04-12)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/jag-ar-intresserad-av-ett-hus-pa-en-viss-adress-finns-det-en-radonkarta-for-omradet/
  - titel: Swedac, ackrediteringsregistret, sökning radon (läst 2026-09-30)
    url: https://ackrediteringar.swedac.se/?q=radon
  - titel: Swedac, ackreditering 10243 Eurofins Radon Testing Sweden AB (beslut 2025-09-12)
    url: https://ackrediteringar.swedac.se/10243
  - titel: Swedac, ackreditering 1489 Radonova Laboratories AB (beslut 2025-08-22)
    url: https://ackrediteringar.swedac.se/1489
  - titel: Swedac, ackreditering 1989 Radonanalys GJAB (beslut 2026-02-12)
    url: https://ackrediteringar.swedac.se/1989
  - titel: Swedac, tillförlitlig radonmätning (uppdaterad 2022-11-14)
    url: https://www.swedac.se/tillforlitlig-radonmatning/
  - titel: Anticimex webbshop, radonmätning villa, 795 kr (läst 2026-09-30)
    url: https://shop.anticimex.com/vatten-och-fukt/radonmatning
  - titel: Anticimex, radonmätning, 795 kr långtid och 1 490 kr korttid (läst 2026-09-30)
    url: https://www.anticimex.se/radonmatning/
  - titel: Anticimex webbshop, radonmätning villa 7 dagar, 1 395 kr (läst 2026-09-30)
    url: https://shop.anticimex.com/vatten-och-fukt/radonmatning-villa-kort
  - titel: Eurofins Radon, långtidsmätning villa (läst 2026-09-30)
    url: https://radon.eurofins.se/sv-se/bestall-din-radonmatning-har/langtidsmatning-villa/
  - titel: Radea, radonmätning i villa (läst 2026-09-30)
    url: https://radea.se/butik/radonmatning-villa/
  - titel: Radonmätning.se, radonmätning i villa (läst 2026-09-30)
    url: https://xn--radonmtning-q8a.se/produkt/radonmatning-i-villa/
  - titel: Radonova, vad kostar det att genomföra radonmätning i en villa? (Mynewsdesk, 2023-02-02)
    url: https://www.mynewsdesk.com/se/radonova-laboratories-ab/blog_posts/vad-kostar-det-att-genomfoera-radonmaetning-i-en-villa-112138
  - titel: Airthings, Wave Plus, tekniska data (läst 2026-09-30)
    url: https://www.airthings.com/en/wave-plus
  - titel: Airthings hjälpcenter, radonsensorns noggrannhet (läst 2026-09-30)
    url: https://help.airthings.com/en/articles/3119759-what-is-the-accuracy-of-the-radon-sensor
  - titel: Boverket, vad är radon? (ändrad 2025-06-10)
    url: https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/vad-ar-radon/
  - titel: Boverket, mät radon i ditt hus (ändrad 2024-08-07)
    url: https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/mat/
  - titel: Boverket, radon vid uppförande av ny byggnad (ändrad 2024-02-01)
    url: https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/ny-byggnad/
  - titel: Mäklarsamfundet, vad är radon och vem ansvarar för radon i en bostadsaffär? (läst 2026-09-30)
    url: https://www.maklarsamfundet.se/nyheter/vad-ar-radon-och-vem-ansvarar-radon-i-en-bostadsaffar
  - titel: Mäklarsamfundet, undantag från huvudregeln, radon omfattades inte av undersökningsplikten (Svea hovrätt T 2402-16)
    url: https://www.maklarsamfundet.se/nyheter/undantag-fran-huvudregeln-radon-omfattades-inte-av-undersokningsplikten
  - titel: Konsumentverket, dolda fel i hus (läst 2026-09-30)
    url: https://www.konsumentverket.se/varor-och-tjanster/dolda-fel-i-hus/
  - titel: SGU, markradon (granskad 2020-11-03)
    url: https://www.sgu.se/samhallsplanering/risker/radon-och-stralning/markradon/
  - titel: WHO, fact sheet Radon (2023-01-25)
    url: https://www.who.int/news-room/fact-sheets/detail/radon-and-health
```

---

**Osäkert och saknas:** Radonovas prissidor gick inte att läsa (HTTP 429, Vercel Security Checkpoint), priset finns bara som Radonovas blogg från 2023 och sökutdrag; Eurofins "Pris från 472 SEK" kan vara per detektor (945 kr för två) eller totalpris, kontrollera i kassan; Anticimex anger inte laboratorium, analys eller frakt för långtidsmätningen; Radonanalys GJAB (HTTP 454) och Svensk Energideklaration har inget pris; Swedac-ackrediteringarna för Radonova och Radonanalys hänvisar till metodbeskrivningen 2013, oklart när de flyttas till 2026; tillverkaren anger inte om Airthings "~10 %" är k=1 eller k=2 på produktsidan, och ingen uppgift om SS-EN 61577-2 eller kalibreringsintyg per mätare; SSM säger inget uttryckligt om källare eller lägsta plan i småhus; Mäklarsamfundets artiklar saknar synligt datum och hovrättsdomens datum (2016 eller 2017) går inte ihop; strålskyddsförordningens 8 kap. 2 § (tillsyn) inte kontrollerad i riksdagens text; WHO-handboken 2009 inte läst, bara fact sheet.
