# Affiliate, startlista 4, 2026-09-29

Beslut från affiliateagenten om de fyra sidor som SOKORDSANALYS 9.3 pekar ut, och om överfräs och kakelskärare som kategorier. Underlag: skillen `affiliate`, `docs/AFFILIATE.md` (avsnitt 1 till 3, "Butikens uppgifter vi inte följer"), SOKORDSANALYS 8.6 och 9.2 till 9.5, `affiliate-kok-2026-09-29.md`, `affiliate-fasad-2026-09-28.md`, `src/content/kategorier/`, `src/content/tester/luftavfuktare/` och `supabase/seed-produkter-*.sql`. Proffsmagasinets kategorisidor lästa 2026-09-29; priserna nedan är listpriser den dagen och ska läsas om på produktsidan av `underlag` innan något går in i databasen. Ingen innehållsfil och ingen databas är ändrad.

Ingen av sidorna i "Butikens uppgifter vi inte följer" berörs: tabellen gäller våtrumsfärg och kakelfärg, och ingen av de fyra sidorna får kort för färg eller tätskikt. Kakla kök får därmed inte heller länka kakelfärg eller använda butikens kakelguide som källa.

## Slutliga beslut efter underlaget, 2026-09-29

Fattade mot `underlag-avfuktare-garage-2026-09-29.md`, `underlag-sagar-bankskiva-2026-09-29.md`, `underlag-overfras-bankskiva-2026-09-29.md` och `underlag-hogtryck-tak-2026-09-29.md`. Går före de villkorade besluten längre ner, som står kvar som motivering. SQL: `supabase/seed-produkter-2026-09-29.sql`, inte körd.

| Sida | Kort, med slug | Var | Reklamband |
|---|---|---|---|
| `/kok/byta-bankskiva/` | `makita-sp6000j` | kompakt kort i H2 om kapningen; i "Det här behöver du" sågen och `makita-199141-8` (skenan) med knapp | ja |
| `/kok/kakla-kok/` | inget | | nej |
| `/fukt/avfuktare-garage/` | `acetec-evodry-6h-2` (kallt enkelgarage), `woods-mdk21` (uppvärmt enkelgarage) | ett kompakt kort i vart och ett av de två H2 om temperaturen, "Produkterna vi nämner" sist | ja |
| `/tak/tvatta-tak/` | inget | | nej |

**Bänkskivan, sågen: `makita-sp6000j`.** Makita SP6000 fick 9,3 och är testvinnare hos Gör Det Själv (2026-03-17), 48 tänder på klingan, kapdjup 56 mm mot skivor på högst 40 mm. Såg och skena var för sig kostar 4 285 kr (3 501 + 784), mindre än Makitas paket för 5 991 kr, så kortet pekar på sågen utan skena, aldrig på paketet. De billigare föll på meriter, inte på pris: Ryobi RCS1600-KSR (2 099 kr med skena, 8,0 och Bästa köp hos GDS) har plastskena som GDS kallar mindre exakt och en klinga med 24 tänder, och exakthet och flisfri kant är just kravet för en laminatskiva. Makita HS7601J fick 5,3 och är trög på skenan. DeWalt DWE576K (4 022 kr med skena) saknar oberoende test och har 24 tänder. Står det i texten att Ryobin räcker för en massiv träskiva där flisning inte är problemet, får den nämnas utan kort. Texten ska säga före kortet att skivan kan kapas i butiken (Hornbach bjuder på det första snittet) och att sågen hyrs för 225 kr per dygn med skena.

**Skenan, `makita-199141-8` (784 kr).** Den ligger under 1 500 kr men sågen klarar inte sidans krav utan den. Beslut: ett tillbehör som krävs för att huvudprodukten ska klara kravet får en knapp i "Det här behöver du", direkt under huvudprodukten, aldrig ett eget kort. Regeln förs in i AFFILIATE.md avsnitt 1.

**Bänkskivan, överfräsen: struken.** Ingen skivtillverkare skriver att läsaren ska fräsa hörnet själv: LG fogar med aluminiumprofil, Vedum och DFI-Geisler levererar skarven färdigfräst. En hörnfog på beställning kostar 625 till 780 kr hos Agelito, mindre än den billigaste fräsen. Trend-mallen kräver 1/2" spännhylsa, och ingen fräs hos Proffsmagasinet har det bekräftat hos tillverkaren. Ryobi RRT1600-K tar CMT-mallens 12 mm men fick 5,2 hos GDS. Sidan säger: beställ skarven färdigfräst eller använd profil. Fräsen står varken som kort, knapp eller textrad med `produkt`. Kategoriraden `overfrasar` läggs inte in. Omprövas bara om en sida längre fram visar att läsaren själv ska fräsa, och då först när 1/2" spännhylsa och 30 mm kopieringshylsa är bekräftade hos tillverkaren.

**Avfuktare i garage.**

- Kallt enkelgarage: `acetec-evodry-6h-2`. Räknaren kräver 5 till 6 liter vid 20 °C och 60 % för 18 kvm, 7 till 8 för 25 kvm. 6H 2.0 ger 7,4, alltså med marginal upp till omkring 20 kvm och inte mer. Kortets etikett och texten ska säga enkelgarage. Fresh D-800 (7 250 kr) är billigare men har 6 liter vid 27 °C, varmare än räknarens villkor, och klarar inte kravet på papperet. Priset är 10 588 kr och maskinen är restnoterad med 7 till 9 dagars leverans; kortet står ändå, lagerstatusen visas.
- Uppvärmt enkelgarage: `woods-mdk21`, 3 118 kr, 20 liter vid 30 °C och 80 % mot räknarens 8 till 15, lägsta rekommenderade temperatur +5 °C. Den är billigare än SW39FW och har samma märkta villkor, så den står först och ensam. SW39FW får inget kort här: dess egen bruksanvisning är inte hittad och uppgifterna kommer från systermodellen SW38F. Den får nämnas i texten med länk till granskningen.
- Dubbelgarage, kallt eller uppvärmt: inget kort. Ingen sorptionsmaskin under 15 000 kr klarar räknarens 9 till 15 liter vid 20 °C och 60 %; Drybox anger 19 liter utan villkor och Fresh D-1200 anger sina 10 liter vid 27 °C. För uppvärmt dubbelgarage kräver räknaren upp till 29 liter, och MDK21 klarar inte det med marginal. Sidan skriver "jag har inte granskat någon i den storleken".
- Brandfarligt: ingen bruksanvisning utesluter garage, så inget kort faller på det. Texten ska återge Wood's villkor för R290 (inga ständigt använda tändkällor i rummet, inga brännbara ämnen nära maskinen, golvyta över 4 m²) och Acetecs förbud mot explosiva gaser, och säga att Wood's rekommenderar värmefläkt i samma häfte som förbjuder ständigt använda elektriska värmare i rummet.
- Kapacitet vid 5 °C: räknaren räknar inte under 5 grader, och ingen tillverkare anger den. Sidan skriver inget tal för 5 grader.

**Tvätta tak: inget kort, inget reklamband, ingen högtryckstvätt i "Det här behöver du".** Ingen taktillverkare godtar högtryck för tvätt eller anger tryck. Plannja skriver "Skölj utan högtryck", Benders låter regnet skölja, BMI skriver "spola av taket försiktigt" utan tal, och Arbetsmiljöverket förbjuder konventionell högtryckstvätt på asbestcement. Nilfisk CORE 125-5 länkas inte från sidan. Plannjas råd om högtryck före ommålning hör till en framtida sida om att måla takplåt och beslutas då.

### Dubbelgaraget på /fukt/avfuktare-garage/, prövat mot utkastet 2026-09-29

Utkastet `src/content/guider/fukt/avfuktare-garage.mdx` har två råd som hantverkaren lagt till: två Acetec EvoDry 6H 2.0 i ett kallt dubbelgarage (rad 108) och två Wood's MDK21 i ett uppvärmt (rad 124).

**Kallt dubbelgarage, två EvoDry 6H 2.0: stryks och skrivs om.**

- *Kapaciteten mot räknaren.* Tabellen på sidan (rad 79–80) kräver 9 till 11 liter för 35 kvm och 13 till 15 för 50 kvm, vid 20 °C och 60 %. Två maskiner ger 14,8 liter. Det räcker med marginal till 35 kvm, men till 50 kvm ligger det under det övre talet och bara 14 procent över det undre. Meningen "räcker … till 50 kvm med måttlig fukt" klarar inte regeln om marginal som räknaren och korten följer. Att två maskiner i samma rum ger summan av sina märkta liter är dessutom vårt antagande, inte en tillverkares uppgift.
- *Köprekommendation utan kort.* Ja. "Det jag själv skulle göra är att ställa två EvoDry" är ett köpråd, och kortet för just den maskinen står fem rader ovanför. Rådet dubblar ordervärdet genom en knapp som redan finns, till 21 176 kr, för en storlek där sidan i samma stycke säger att ingen maskin är granskad. Det är en rekommendation som går runt regeln om produkter utan underlag i storleken, även om avsikten inte är den.
- *Två mot en större.* Inte rimligt på det underlag vi har. Två 6H 2.0 kostar 21 176 kr, tar 1 060 W, kräver två hål i ytterväggen och enligt Acetec en egen 10 A-säkring var, och Acetec skriver att maskinen är avsedd för "mindre utrymmen". Acetec EvoDry RCF 20 G1 kostar 19 995 kr och anges till 17,7 liter vid 20 °C och 60 %, vilket skulle ge marginal även till 50 kvm med ett hål. Den uppgiften är butikens, inte Acetecs, och därför får den inte heller stå som råd i dag.

Ny lydelse i sak, formuleras av hantverkaren: det finns ingen maskin jag granskat som klarar ett kallt dubbelgarage. Läsaren får kravet i klartext, en sorptionsavfuktare där *tillverkaren* anger minst 11 liter vid 20 °C och 60 % för 35 kvm och minst 15 för 50 kvm, och att maskinen till enkelgaraget inte räcker. Tätningen av porten kommer före. Inget produktnamn i stycket och ingen länk till butik.

Nytt uppdrag till `underlag`, inte brådskande (sidan toppar i januari): Acetecs eget datablad för EvoDry RCF 20 G1 och RCF 12 G1 (kapacitet med villkor, effekt, tillåtna utrymmen, förbud, säkring, hål), Drybox datablad för X4 med villkor för de 19 litrarna, och Fresh D-1200 vid 20 °C om Fresh anger det. Bekräftar tillverkaren en maskin som klarar 15 liter vid 20 °C och 60 % och godtar garage, får den ett kort i stycket om kallt dubbelgarage, även om den kostar över 15 000 kr. Prisläget i SOKORDSANALYS 9.3 är en uppskattning, inte en gräns för meriter.

**Uppvärmt dubbelgarage, två MDK21: står kvar med en rättelse.**

- *Kapaciteten.* En MDK21 ger 20 liter vid 30 °C och 80 %, samma villkor som räknarens kolumn. Mot 15 till 20 för 35 kvm är "räcker till 35 kvm med måttlig fukt" riktigt. Två ger 40 liter mot 22 till 29 för 50 kvm, med marginal.
- *Köprekommendation utan kort.* Ja, men på en maskin med datablad vid samma villkor som räknaren, som står i databasen och på `/luftavfuktare/`, och som klarar värdet med marginal. Det uppfyller regeln. Inget nytt kort; kortet ovanför gäller enkelgaraget och får stå.
- *Två mot en större.* Meningen "Någon större kondensmaskin finns inte bland dem jag gått igenom" är fel. Wood's SW59FM står i databasen och på `/luftavfuktare/` med 41 liter vid 30 °C och 80 % och 25 liter vid 20 °C och 70 %, tank 11,4 liter, 690 W, 8 311 kr (16 sep, ska läsas om). Den omfattas av samma Wood's-manual (SW20–SW59) som underlaget redan läst. Två MDK21 kostar 6 236 kr och tar 550 W, alltså billigare och med lägre effekt för samma behov, och den billigare som klarar kravet står först. SW59FM ska ändå nämnas som alternativet med en maskin, en slang och en större tank. Rättelse på rad 124: ta bort påståendet om att ingen större finns, nämn SW59FM med länk till `/luftavfuktare/`, utan kort. R290-varningen på rad 116–118 gäller båda.

### Byta bänkskiva, kontroll av utkastet

`src/content/guider/kok/byta-bankskiva.mdx` följer beslutet på alla punkter utom en detalj:

- Rad 154–156: hyra först, köp bara vid fler skivor, pris med datum, testresultat med källa, kortet efter resonemanget. Följer beslutet.
- Rad 158, Ryobi: nämnd för massiv skiva utan laminat, utan kort och med svagheten ur testet. Följer beslutet.
- Frontmatter rad 14–25: bara `makita-sp6000j` i `produkter`, skenan med `produkt` i behovslistan direkt under sågen, ingen fräs. Följer beslutet och regeln om tillbehör.
- Rad 11, 168–172: hörnet beställs färdigfräst eller fogas med profil. Följer beslutet om att stryka överfräsen.
- **Ändras:** rad 22 och 154 säger att sågen "tar 56 millimeter på djupet". Makitas 56 mm gäller utan skena. Med skenan blir kapdjupet mindre, och skenans tjocklek är inte hämtad. Skriv "56 millimeter utan skena enligt Makita" eller "mer än de 40 millimeter som de tjockaste skivorna har", inte 56 mm som om det gäller på skenan.

**Tvätta tak, prövat igen för plåttak efter kompletteringen (faktabladet `guider-tvatta-tak.md`, "Komplettering 2026-09-29" avsnitt B): fortfarande inget kort.** Villkoret hade två delar, och båda måste vara uppfyllda:

1. *Tillverkaren tillåter högtryck skriftligt.* Delvis. Plannjas broschyr från januari 2021, s. 7, som är ett tillägg till garantin, säger "mjuk borste och vatten eller högtrycksspola" och "högtrycksspola eventuellt". Samma tillverkares FAQ och blogg, som fortfarande nås från Plannjas webbplats, säger "Skölj utan högtryck". Broschyren väger tyngst som källa för vad garantin godtar, men den gör högtrycket till ett tillval och inte till metoden, och på samma sida står "Arbeta varsamt. Överdriven tvättning gör mer skada än nytta." Lindab nämner bara mjuk borste och vatten. Areco och Weckman är inte lästa.
2. *Maskinen klarar tillverkarens tryck och munstycke.* Nej, för det finns inget krav att pröva mot. Plannja anger inget tryck i bar, inget avstånd och inget munstycke. Utan det kan jag inte visa att Nilfisk CORE 125-5 eller någon annan maskin klarar kravet med marginal, och då står inget kort. Det är samma regel som räknarna följer.

Utöver villkoret: huvudmetoden hos Plannja är borste och vatten, och tillverkarens egen FAQ avråder från högtryck. Ett kort skulle göra tillvalet till det enda sidan säljer, i ett avsnitt om arbete på tak där fallrisken redan är det största skälet att inte stå med en maskin. Det är att välja för provisionens skull.

Följd för sidan: plåtavsnittet får återge båda Plannja-källorna och säga att de säger olika, med borste och vatten som metod. Ingen högtryckstvätt med `produkt`, inget reklamband. Nilfisk länkas inte. Betong- och tegelpannor: oförändrat, ingen tillverkare godtar högtryck. Tegelbruk.se:s "max 140 bar" gäller nedtagna pannor på marken, är ingen tillverkare och bär inget kort.

Omprövas om Plannja, eller en annan plåttillverkare, skriftligt anger tryck eller munstycke för tvätt av monterat tak, och den anvisningen inte motsägs av tillverkarens egen aktuella FAQ. Då läggs ett kompakt kort i plåtavsnittet för den billigaste maskin som klarar kravet med marginal, och reklambandet slås på. Frågan kan ställas till Plannjas kundtjänst av `underlag`. Beställs inte nu, eftersom sidan skrivs i december till januari.

**Kakla kök: oförändrat.** Inget kort, inget reklamband.

### Acetec-granskningen och sidorna som visar priset

Priset har gått från 9 995 till 10 588 kr (29 sep) och maskinen är restnoterad, 7 till 9 dagar. Beslut, till hantverkaren genom koordinatorn:

- `src/content/tester/luftavfuktare/acetec-evodry-6h-2.mdx` rad 96 (rubriken "En plåtlåda för 9 995 kronor") och rad 98 ("Så mycket kostade den … 16 september 2026"): nytt pris och datum. Rad 67 och 159, 171: läsdatum för butikens sida till 29 september 2026. Rad 161 säger att SW39FW "kostar hälften"; 5 948 mot 10 588 är 56 procent, och formuleringen ska prövas av hantverkaren. `uppdaterad` i frontmatter sätts till 2026-09-29.
- Samma pris står på `src/content/jamforelser/luftavfuktare/woods-sw39fw-vs-acetec-evodry-6h-2.mdx` rad 48 och i tabellen rad 118, och på `src/content/guider/fukt/avfuktare-krypgrund.mdx` rad 232 och 235. De uppdateras i samma omgång, för annars visar kortet 10 588 och texten 9 995 på samma sida. Summan i jämförelsens tabell räknas om.
- Omdömet ändras inte: restnoteringen är lagerstatus, inte en merit. Blir den "ej beställningsbar" står jag för ett nytt beslut.
- Kortet och knappen hämtar priset ur databasen när SQL-filen är körd.

## Sammanfattning av de villkorade besluten (före underlaget)

| Sida | Produkt i första versionen | Reklamband | Kräver granskning först |
|---|---|---|---|
| `/kok/byta-bankskiva/` | sänksåg med styrskena, överfräs (villkorat) | ja | nej |
| `/kok/kakla-kok/` | ingen | nej | nej för sidan; krysslaserkortet väntar på `/krysslaser/` |
| `/fukt/avfuktare-garage/` | luftavfuktare, en per temperaturfall | ja | nej, granskningarna finns |
| `/tak/tvatta-tak/` | ingen som utgångsläge; högtryckstvätt bara i ett villkorat fall | bara om kortet står | nej |

## Kategorier: överfräs och kakelskärare

**Överfräs: ja som produkttyp, nej som kategorisida.** Handöverfräsarna hos Proffsmagasinet ligger mellan 1 175 och 17 486 kr (83 fräsar totalt under `/maskiner-verktyg/maskiner/frasar`), och de som räcker till en bänkskivemall ligger över 1 500 kr: Bosch DIY POF 1400 ACE 1 819 kr, Ryobi RRT1600-K 1 895 kr, DeWalt DWE625-QS 5 951 kr, Bosch GOF 1250 CE 5 959 kr. Ordervärdet klarar produktfokus, verktyget avgör resultatet i hörnfogen, och det finns koppling till trappa och snickeri senare. Beslut:

- Databasen får kategoriraden `overfrasar` (för `klick.kategori_slug` och `epi2`), som `hogtryckstvattar` fick 2026-09-28. Spec till UX och bygge-agenten, utförs av `utvecklare`.
- Ingen kategorisida och ingen bäst i test förrän volymen på produktordet är hämtad (SOKORDSANALYS 9.5 punkt 2). Då föreslår jag den till SEO och GEO-agenten om den bär.
- Tas upp i AFFILIATE.md avsnitt 3 som kategori 10, "produkttyp utan kategorisida".

**Kakelskärare: nej, varken kategori eller kort nu.** Butiken har 11 kakelskärare. De manuella som går att köpa i dag börjar på 2 118 kr (Sigma 7F), följt av Bosch DIY PTC 640 2 482 kr och Sigma 2G 2 871 kr; TEBO 400, den enklaste, har utgått. Det ser ut som att gränsen klaras, men skälet är fel: ett stänkskydd i kök är tre till fem kvadratmeter tunt väggkakel, och det kapar en enkel skärare för en bråkdel av priset, eller en hyrd. Att länka en proffsskärare för 2 000 till 3 000 kr där en billigare gör samma jobb vore att välja på provision, och skillen säger att den billigare som klarar kravet står först, även när den säljs någon annanstans. De eldrivna våtkaparna (DeWalt D36000-QS 16 765 kr, Montolit, Kaufmann) är fel verktyg för ett kök. Omprövas bara om sidan rekommenderar storformat, se kakla kök nedan.

## /kok/byta-bankskiva/, projektguide

**Produkt: sänksåg med styrskena. Överfräs villkorat. Reklamband: ja.**

Skäl mot meriter. Kapningen är det moment där verktyget avgör resultatet: en laminatskiva flisar i ytskiktet med en vanlig cirkelsåg utan skena, och en sned kapning syns mot väggen. Sänksåg är kategori 3 i AFFILIATE.md. Hos Proffsmagasinet 24 sänksågar under `/maskiner-verktyg/maskiner/sagverktyg/sanksagar`; synliga 29 sep: Makita SP6000J 3 501 kr (tidigare 4 668 kr, skena ingår inte), DeWalt DCS520NT 6 395 kr och Milwaukee M18 FPS55-0P 6 946 kr (båda utan batteri). Ordervärdet ska räknas med skena.

Kravet som maskinen väljs mot, och som texten ska säga före kortet:

- kapdjup med skena minst skivans tjocklek med marginal (bänkskivor i handeln 26 till 40 mm, `underlag` bekräftar),
- skena som räcker över skivans djup, 600 till 650 mm, plus ansats och utgång,
- splitterskydd på skenan och klinga med fin tandning för laminat,
- dammutsug, eftersom kapningen ofta görs inomhus.

Billigaste maskin som klarar kravet står först. Står en cirkelsåg med styrskena eller skenadapter som klarar samma krav billigare, är det den som får kortet, inte sänksågen. Texten ska också säga att skivan kan kapas där den köps och att sågen går att hyra; det är det som gör knappen trovärdig.

**Överfräs**, kortet står bara om texten kommer fram till att läsaren själv ska fräsa en hörnfog. Det gäller i praktiken laminatskiva med rundad framkant i ett L-kök, där skivorna möts med en fog som följer framkanten och en rak kapning inte räcker. En massiv skiva i rak skarv med bänkskivebeslag behöver ingen fräs, och där står inget fräskort. Fräsen väljs mot bänkskivemallens krav, inte mot märke: kopieringshylsa (vanligen 30 mm), fräsdiameter och skaft som mallens fräsar kräver (vanligen 12,7 mm fräs, 1/2 tums skaft), djup för skivan i flera tag, effekt som mallens tillverkare anger. Fräs med 8 mm spännhylsa som inte tar mallens fräsar klarar inte kravet, oavsett pris. Mallen själv och fräsverktyget är tillbehör och står som text. Finns ett alternativ att beställa skivorna färdigfrästa ska texten säga det före kortet.

Var på sidan:

- Kompakt kort för sågen i det H2 som handlar om att kapa skivan, efter att kraven ovan står i texten. Aldrig ovanför kortsvaret, aldrig i en faktaruta.
- Kompakt kort för fräsen i det H2 som handlar om hörnet, efter beskedet om när fräsen behövs. Högst ett kort per H2.
- "Det här behöver du" sist: sänksåg och, om villkoret är uppfyllt, överfräs med knapp. Som text utan `produkt`: sticksåg till urtaget för diskho och häll, bänkskivemall, skruvtvingar, vattenpass, fin klinga, bänkskivebeslag, silikon, kantlist. Sticksågen får inget kort: den finns inte i kategorilistan och vi har inget underlag.
- Frontmatter `produkter` med båda slugs när båda korten står; då sätter rutten reklambandet.

Ingen granskning krävs först. Sänksåg och överfräs är kompakta kort i en projektguide, samma som Nilfisk på tvätta fasad, och kräver underlag med källa per påstående och en databasrad med pris och datum, inte en kategorisida. Kategoriraderna `sanksagar` och `overfrasar` läggs in av `utvecklare` efter UX och bygge-agentens spec.

## /kok/kakla-kok/, projektguide

**Produkt: ingen i första versionen. Reklamband: nej.**

- **Krysslaser.** Kortet står först när `/krysslaser/` är publicerad som Granskning på datablad. Den är i dag `utkast: true` med platshållartext och tom `val`, och det finns ingen utrustning för att mäta (laser skrivs som granskning, aldrig som test). Utan kategorisidan finns inget underlag som visar vilken laser som är bäst på meriter, och kortet skulle stå på en maskin vi inte kan motivera. Texten får beskriva när en laser hjälper (en våglinje runt hörn och över hela väggen mellan överskåp och bänk) och att en lång rätskiva och ett vattenpass gör samma jobb på en rak vägg. Laser står som textrad i "Det här behöver du" utan `produkt`. När granskningen är publicerad läggs ett kompakt kort in i det H2 som handlar om första raden, med länk till `/krysslaser/`, och då slås bandet på.
- **Kakelskärare.** Ingen, se kategoribeslutet ovan. Textrad i "Det här behöver du": kakelskärare för raka snitt, kakeltång eller vinkelslip med diamantklinga för urtag vid eluttag. Omprövas bara om sidan rekommenderar storformat, platta längre än 600 mm eller tjockare än 8 mm. Då hämtar `underlag` de skärare som klarar formatet med marginal hos flera butiker, och kortet står bara om den billigaste som klarar formatet finns hos Proffsmagasinet.
- Kakelfärg, fix, fog och kakel: material, text utan länk.

Sidan kan publiceras utan att någon granskning kommer först. Krysslasergranskningen (4 150 i månaden enligt 9.1) föreslår jag till SEO och GEO-agenten som nästa verktygssida oberoende av kökslistan; den bär mer än kortet här.

## /fukt/avfuktare-garage/, köpguide

**Produkt: luftavfuktare, en per temperaturfall. Reklamband: ja.**

Skäl mot meriter. Temperaturen avgör maskintypen, och det är det sajten redan har skrivit: kondensavfuktaren tappar under 10 grader, sorption arbetar ner till minus 20. Produkterna finns i databasen med datablad och två granskningar:

- **Kallt garage**, under 10 grader flera månader: Acetec EvoDry 6H 2.0 (9 995 kr 16 sep, arbetstemperatur ned till −20 °C, 100 m³ enligt Acetec). Granskningen säger själv "rätt maskin till en källare eller ett garage som ligger under 10 grader".
- **Uppvärmt garage**, över 10 grader året om: Wood's SW39FW (5 948 kr 16 sep, arbetstemperatur ned till +5 °C men granskningen säger nej under 10 grader). Är Wood's MDK21 (3 118 kr, arbetstemp +2 °C, "bäst för pengarna" på `/luftavfuktare/`) lika bra för ett garage av normal storlek står den först, enligt regeln om billigare först. `underlag` avgör på kapacitet vid 20 °C och ljud är oviktigt i garage.

Villkor som stoppar kortet:

- **Storleken.** Kortet står bara för den garagestorlek maskinen klarar med marginal enligt den räkning sidan gör. Granskningen av 6H 2.0 skriver att formeln stannar på 20 kvm vid 75 procent i en källare på 10 grader, alltså ett enkelgarage. För dubbelgarage i kyla står varken 6H 2.0 eller Fresh D-800 (6 liter vid 27 °C, "räcker till ett förråd och inte till ett garage"). Drybox X4 (12 763 kr) är byggd för krypgrund; den står bara om `underlag` visar att tillverkaren godtar garage och att den klarar storleken. Finns ingen som klarar dubbelgaraget skriver sidan "jag har inte granskat någon i den storleken".
- **Kapacitet i kyla.** Ingen siffra för 5 eller 10 grader får stå som tillverkarens om den inte står i databladet. Corroventa-kurvan i granskningen av 6H 2.0 får bara citeras som lånad tumregel, med samma förbehåll som där.
- **Otätt garage.** Sidan ska säga "köp ingenting" för ett garage med otäta portar och öppna ventiler: avfuktaren går dygnet runt och torkar utomhusluften. Rätt åtgärd där är att täta först eller ventilera. Det avsnittet får inget kort.
- **Brandfarliga ångor.** Om tillverkarnas bruksanvisningar förbjuder drift i utrymme med bensin, lösningsmedel eller brandfarlig gas, vilket är vanligt för maskiner med R290 som köldmedium, ska texten säga det, och maskin vars anvisning utesluter garage med bil får inget kort.

Var på sidan:

- Kompakt kort i H2 om kallt garage, efter beskedet om sorption. Kompakt kort i H2 om uppvärmt garage, efter beskedet om kondens. Inga kort före beskedet, inget kort ovanför kortsvaret.
- `/rakna/avfuktare/` bäddas in; dess kort följer räknarens regler (efter beskedet, klarar värdet med marginal). Står räknarens kort och sidans kort på samma maskin i samma vy tas sidans kort bort i det avsnittet, så att samma produkt inte visas två gånger efter varandra. `/rakna/elkostnad/` bär inga produkter.
- Blocket "Produkterna vi nämner" sist, bara med de maskiner texten faktiskt rekommenderar.
- Länk till `/luftavfuktare/` och till granskningarna av 6H 2.0 och SW39FW.

Ingen granskning krävs först; båda maskinerna har publicerade granskningar på datablad. Priserna är från 16 sep och ska läsas om. Etiketten på sidan är köpguide; ingen mening får säga att maskinerna är testade.

## /tak/tvatta-tak/, projektguide

**Produkt: ingen som utgångsläge. Reklamband: nej, utom i fallet nedan.**

Skäl. Säljer vi en högtryckstvätt på en sida om tak utan att veta att taktypen tål den, säljer vi det sidan kanske avråder från (8.6). Det som ska avgöras per taktyp, av tillverkarnas egna underhållsanvisningar och myndigheter:

- betongpannor och tegelpannor (Benders, BMI Monier, Vittinge och andra),
- plåt (Plannja, Lindab, Areco, Weckman),
- papp och shingel (Icopal, Mataki, Trelleborg),
- asbestcementskiva (eternit) på äldre hus; Arbetsmiljöverkets regler gäller, och sidan ska inte ge någon metod med maskin där.

Beslut:

- Säger tillverkaren nej eller saknas anvisning för en taktyp står inget kort i det avsnittet, och texten säger vad som gäller i stället (medel med pumpspruta från marken eller stegen, låt verka, regnet sköljer).
- Säger en tillverkare att högtryck går med en tryckgräns, ett avstånd eller ett munstycke, får det avsnittet ett kompakt kort för den billigaste maskin som klarar just de kraven. Nilfisk CORE 125-5 (1 495 kr 28 sep, redan i databasen från tvätta fasad) är första kandidaten, men den står bara om dess reglering och munstycke uppfyller takets krav, och kortets etikett ska nämna taktypen ("Till plåttaket, på sänkt tryck"). Står kortet sätts reklambandet.
- Texten ska säga att arbete på tak är ett fallrisk-moment och att maskinen går att hyra. Det är inte mitt område att skriva, men kortet står inte om sidan inte säger det, för då länkar vi till ett arbetssätt vi inte har ramat in.
- Takmedel (biocid, 8.6: godkänt av Kemikalieinspektionen), tryckspruta, borste, takstege och fallskydd: text utan länk. Takstegar gör vi inte (AFFILIATE.md avsnitt 3), trycksprutan under gränsen eller batteriberoende, samma beslut som på fasaden.
- "Det här behöver du": högtryckstvätt med `produkt` bara om kortet står i texten; annars textrad eller ingenting.

Ingen granskning krävs först. Säger inget tak ja till högtryck är sidan produktfri, och det är ett giltigt utfall, inte ett problem.

## Uppdrag till underlag, i den här ordningen

Leverantörstext räknas som källa för specifikationer, aldrig för prestanda. Allt skrivs till `docs/briefer/underlag-*.md` med källa per påstående, pris med datum och butik, EAN från tillverkaren eller produktsidan. Priset läses på Proffsmagasinets produktsida, inte på listsidan.

1. **Luftavfuktare i garage** (`underlag-avfuktare-garage-2026-09-29.md`). Tillverkarnas bruksanvisningar för 6H 2.0, SW39FW, MDK21, Drybox X4 och Fresh D-800: tillåtna utrymmen, lägsta och högsta temperatur, förbud mot brandfarliga ångor eller garage, köldmedium. Kapacitet vid lägsta angivna temperatur där den finns. Vad `/rakna/avfuktare/` ger för enkelgarage (18 till 25 kvm) och dubbelgarage (35 till 50 kvm) vid 5 och 10 grader. Finns hos Proffsmagasinet en sorptionsavfuktare under 15 000 kr som tillverkaren godtar i garage och som klarar dubbelgaraget: datablad, pris, EAN. Oberoende källor om avfuktning i kallgarage (Boverket, Folkhälsomyndigheten, SP/RISE, försäkringsbolag) och om tätning mot avfuktning. Aktuella priser för alla fem.
2. **Sänksåg och cirkelsåg med styrskena för bänkskiva** (`underlag-sagar-bankskiva-2026-09-29.md`). Tjocklek på bänkskivor i handeln (laminat, massiv, kompakt). Tillverkarnas råd om kapning av laminatskiva (klinga, sida, splitterskydd). Fyra till sex maskiner hos Proffsmagasinet från cirka 2 000 kr, sänksåg och cirkelsåg med skenadapter: kapdjup med skena, klinga, skenlängd och om skena ingår, pris med och utan skena, batteri eller sladd, EAN. Oberoende tester (Råd & Rön, Testfakta, utländska konsumenttester, fackpress med mätning). Kända svagheter. Hyrpris hos två till tre uthyrare. Om butiker som säljer bänkskivor kapar på mått, och vad det kostar.
3. **Överfräs med bänkskivemall** (`underlag-overfras-bankskiva-2026-09-29.md`). Två till tre bänkskivemallar på marknaden (Trend och motsvarande): vilka krav mallens tillverkare ställer på fräsen (kopieringshylsa, fräsdiameter, skaft, effekt, djup). Tre till fem handöverfräsar hos Proffsmagasinet som klarar kraven, från Bosch DIY POF 1400 ACE 1 819 kr uppåt, med spännhylsa, effekt, djup, pris, EAN, och vilka som inte klarar kraven och varför. Oberoende tester. När en hörnfog krävs och när rak skarv med beslag räcker, enligt skivtillverkarna (Ikea, Nordiska Kök, Byggmax, Fibo eller motsvarande). Om leverantörer fräser hörnet på beställning, och pris.
4. **Högtryck på tak** (`underlag-hogtryck-tak-2026-09-29.md`). Underhållsanvisningar från tillverkarna i listan ovan per taktyp: högtryck ja eller nej, tryckgräns, avstånd, munstycke, riktning. Arbetsmiljöverkets föreskrifter om asbestcement och högtryck. Om något tak tillåter högtryck: kontrollera Nilfisk CORE 125-5 och två till tre andra maskiner hos Proffsmagasinet mot kraven, med pris och EAN.

Kakelskärare och krysslaser beställs inte nu.

## Till UX och bygge-agenten

Ändrat efter underlaget: bara kategoriraden `sanksagar`, utan kategorisida; `overfrasar` utgår. Rader, erbjudanden och prisuppdateringen står i `supabase/seed-produkter-2026-09-29.sql`, som inte är körd. Inga nya komponenter behövs. En fråga till UX och bygge-agenten: `lagerlage()` visar "restnoterad" som slut, men butiken tar emot beställningar med 7 till 9 dagars leverans.

## Källor, lästa 2026-09-29

- Proffsmagasinet, sågverktyg (sänksågar 24, cirkelsågar 179): https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/sagverktyg
- Proffsmagasinet, fräsar (83): https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/frasar
- Proffsmagasinet, kakelskärare (11): https://www.proffsmagasinet.se/maskiner-verktyg/stationara-verktyg/kakelskarare
- Proffsmagasinet, TEBO 400 (utgången): https://www.proffsmagasinet.se/maskiner-verktyg/stationara-verktyg/kakelskarare/tebo-400-kakelskarare-400-mm-2890099
- Avfuktarpriser: `supabase/seed-produkter-2026-09-16.sql`. Nilfisk: `supabase/seed-produkter-2026-09-28.sql`.
