# Affiliate, startlista 4, 2026-09-29

Beslut från affiliateagenten om de fyra sidor som SOKORDSANALYS 9.3 pekar ut, och om överfräs och kakelskärare som kategorier. Underlag: skillen `affiliate`, `docs/AFFILIATE.md` (avsnitt 1 till 3, "Butikens uppgifter vi inte följer"), SOKORDSANALYS 8.6 och 9.2 till 9.5, `affiliate-kok-2026-09-29.md`, `affiliate-fasad-2026-09-28.md`, `src/content/kategorier/`, `src/content/tester/luftavfuktare/` och `supabase/seed-produkter-*.sql`. Proffsmagasinets kategorisidor lästa 2026-09-29; priserna nedan är listpriser den dagen och ska läsas om på produktsidan av `underlag` innan något går in i databasen. Ingen innehållsfil och ingen databas är ändrad.

Ingen av sidorna i "Butikens uppgifter vi inte följer" berörs: tabellen gäller våtrumsfärg och kakelfärg, och ingen av de fyra sidorna får kort för färg eller tätskikt. Kakla kök får därmed inte heller länka kakelfärg eller använda butikens kakelguide som källa.

## Sammanfattning

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

Kategorirader i databasen: `sanksagar` (Sänksågar och cirkelsågar) och `overfrasar` (Överfräsar), utan kategorisida. Produktrader och erbjudanden läggs in från underlaget ovan när jag godkänt det. Inga nya komponenter behövs.

## Källor, lästa 2026-09-29

- Proffsmagasinet, sågverktyg (sänksågar 24, cirkelsågar 179): https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/sagverktyg
- Proffsmagasinet, fräsar (83): https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/frasar
- Proffsmagasinet, kakelskärare (11): https://www.proffsmagasinet.se/maskiner-verktyg/stationara-verktyg/kakelskarare
- Proffsmagasinet, TEBO 400 (utgången): https://www.proffsmagasinet.se/maskiner-verktyg/stationara-verktyg/kakelskarare/tebo-400-kakelskarare-400-mm-2890099
- Avfuktarpriser: `supabase/seed-produkter-2026-09-16.sql`. Nilfisk: `supabase/seed-produkter-2026-09-28.sql`.
