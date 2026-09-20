# Underlag: tilläggsisolera vind

Skribentens eget underlag till `src/content/guider/el/tillaggsisolera-vind.mdx`, adress `/el/tillaggsisolera-vind/`.
Skrivet 2026-09-20. Pelaren El, värme och energis första sida.

## 1. Sökanalys

**Huvudfras:** tilläggsisolera vind
**Volym:** 480 per månad, +51 procent på ett år och +84 procent på tre månader, toppmånad februari.
Vinnbarhet 5. Klustret med "isolera vind kostnad" (90) ligger på 610.
Källa: `docs/SOKORDSANALYS.md` avsnitt 7.2 och 7.6, körning 2, `docs/data/keyword-stats-2026-09-20.csv`.

**Säsong.** Toppen ligger i februari, alltså när elräkningen för januari har kommit. Sidan måste vara indexerad
i januari. Det är skälet till att den skrivs före resten av pelaren och inte väntar på att El fyller sina fem sidor.

**Sökintention:** informativ med lönsamhetsfråga. Den som söker har redan bestämt att vinden är dåligt isolerad.
Hon vill veta om det är värt pengarna, vad det kostar och vad som kan gå fel. Hon letar inte efter en produkt.
Därför projektguide, ingen kategori och inga produktkort.

**Nivå:** mellan. Läsaren vet vad isolering är och har varit uppe på vinden. Hon kan inte U-värde, lambda,
gradtimmar eller vindavledare, och hon vet inte att vinden blir fuktigare av arbetet. Termerna förklaras kort
första gången.

### Topplistan, läst 2026-09-20

| Plats | Sida | Typ | Läst |
|---|---|---|---|
| 1 | RikaTillsammans, forumtråd "Tilläggsisolera vinden - vettigt eller ej?" | forum | ja |
| 2 | Boverket, Energiguiden, Tilläggsisolera vinden | myndighet | ja, via HTML-nyttolasten |
| 3 | Rockwool, Isolera eller tilläggsisolera vind och innertak | tillverkare | ja |
| 4 | Byggahus, Tilläggsisolera vinden - gör det själv | forum och redaktion | **nej, 403** |
| 5 | Isover, Isolera tak och vind | tillverkare | **nej, 403** |

### Ettan: forumtråden

<https://rikatillsammans.se/forum/t/tillaggsisolera-vinden-vettigt-eller-ej/74556>

Vad den har, och den är bättre än den låter:

- Ett verkligt prisexempel med ort och datum. 40 kvadratmeter vind i Uppsala län, november 2023, offert på
  10 000 kr förarbete plus 29 000 kr isolering och material, alltså 39 000 kr totalt. 300 mm cellulosalösull
  ovanpå befintliga 200 mm kutterspån
- En appuppgift om återbetalningstid, 3 till 4 år, som trådstartaren själv ifrågasätter
- Fuktdiskussionen finns, i fragment: mögelrisk, ångspärr med hål i, luftspalt, gavelventiler, fuktkvot i virke
- En byggnadsingenjör i tråden varnar för att täta och isolera utan expertbedömning

Vad den saknar:

1. **Inte ett enda U-värde och ingen kilowattimme.** Hela tråden handlar om lönsamhet, och ingen räknar.
   Appens 3 till 4 år står oemotsagt bredvid en gissning om att det är fel.
2. **Ingen källa alls.** Inga tal från tillverkare, myndighet eller forskning. De U-värden som nämns gäller
   fönster, inte vindsbjälklag.
3. **Ingen kostnad per kvadratmeter.** De 39 000 kronorna står som en klumpsumma, och ingen delar upp dem
   eller jämför dem med något.
4. **Inget om ventilationen vid takfoten, vindavledare, vindsluckan eller gångbryggor.** Alltså allt det
   praktiska som avgör om arbetet blir rätt.
5. **Rotavdraget nämns inte.** Trots att hela tråden handlar om vad det kostar.
6. **Ingen slutsats.** Tråden landar i "var försiktig", vilket är rätt men inte användbart.

### Tvåan: Boverket

Myndighetstext, korrekt och fullständig om riskerna, men utan ett enda tal. Ingen besparing, ingen kostnad,
ingen tjocklek, inget U-värde. Boverket skriver själva att "hur mycket energi du kan spara beror på flera saker".
Den som söker på lönsamhet får inget svar.

### Trean: Rockwool

Bär tabellerna, och de är bra. Men de ligger som en produktkatalog: ingen kontext, ingen kostnad, ingen
återbetalningstid, och graddagarna står i en fotnot under tabellen där ingen läser dem.

### Så blir vår sida bättre

1. **Lönsamhetsfrågan besvaras med tal som går att räkna efter.** Rockwools besparingskolumn är omvänt räknad
   här (se avsnitt 2) och visar sig vara samma formel som `/grund/isolera-krypgrund/` redan använder, med
   89 280 gradtimmar. Därmed kan sidan ge besparingen för vilken yta som helst, med Rockwools egen
   regionjustering på minus 20 procent i söder och plus 35 procent i norr.
2. **Forumtrådens eget prisexempel räknas hem.** 39 000 kr på 40 kvadratmeter är 975 kr per kvadratmeter,
   och vår räkning ger nio år i stället för appens tre till fyra. Ingen annan sida på frasen gör det.
3. **Tre kostnadsuppgifter med avsändare och datum** i stället för ett spann utan källa: kommunal
   energirådgivning, forumtrådens verkliga offert och vår egen räkning på ett butikspris hämtat i dag.
4. **U-värdet före åtgärden går att hitta utan att krypa.** Energimyndighetens tabell över vindsbjälklag per
   byggår, som varken ettan, tvåan eller trean har.
5. **Fuktavsnittet bygger på forskning, inte på oro.** Två artiklar ur Bygg & teknik, publicerade av
   Fuktcentrum vid Lunds tekniska högskola, säger två saker ingen av topplistans sidor säger: att ökad
   ventilation gör vinden kallare och fuktigare, och att gavelventiler normalt räcker.
6. **Det praktiska finns med.** Vindavledarens två mått, vindsluckan, gångbryggan och efterkontrollen
   nästa vinter.
7. **Rotavdraget med Skatteverkets egna tal**, och kalkylatorn inbäddad där kostnaden står.

### Rubrikstruktur

- H1: Tilläggsisolera vinden, vad det sparar och när det blir fel
- Kort svar (frontmatter)
- H2 Vad 400 millimeter på vindsbjälklaget sparar
- H2 Vad det kostar, och vad de 39 000 kronorna i forumtråden innehöll
- H2 Lösull eller skivor, och vad som faktiskt avgör
- H2 Vinden blir kallare och fuktigare, och det är inte en bieffekt
- H2 Lufttätheten är jobbet, isoleringen är bara materialet
- H2 Ventilationen ska vara kvar, men den ska inte ökas
- H2 Ordningen, från tumstocken till efterkontrollen nästa vinter
- H2 När du ska låta vinden vara
- Faq

### Interna länkar ut

- `/grund/isolera-krypgrund/` två gånger: formeln E lika med delta U gånger area gånger gradtimmar, och den
  parallella fuktlogiken under golvet
- `/fukt/luftfuktighet-inomhus/` en gång, där fukttillskottet inomhus nämns
- `/rakna/elkostnad/` en gång, vid elpriset
- `/rakna/elkostnad/` en gång, sist i antagandelistan under besparingen
- `<Kalkylator namn="rotavdrag" />` vid kostnaden. Verktyget landade i registret under arbetets gång,
  så både `npm run kontrollera` och `npm run build` är gröna.

### Plats för U-värdesräknaren

Direkt efter Rockwools tabell i första H2, före avsnittets sista stycke om regionjusteringen. Texten
säger där att tabellen har fyra rader och att läsarens vind sällan ligger på en av dem. Motorn är
verktygsplanens rad 9 och delas med `/rakna/u-varde/`.

## 2. Faktaunderlag

### Boverket, Energiguiden, Tilläggsisolera vinden

<https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/vind/>
Senast ändrad 15 juni 2026, senast granskad 23 april 2026, publicerad 18 oktober 2023.
Hämtad 2026-09-20. Sidan är JavaScript-renderad; texten togs ur sidans egen HTML-nyttolast.

Ordagrant:

- "Tänk på att när du isolerar mellan bostaden och vinden, blir det kallare på vinden, vilket oftast också
  medför att det blir fuktigare."
- "Hur stor nytta du får ut, beror på hur väl isolerat vindsbjälklaget var från början samt hur mycket
  utrymme det finns att lägga mer isolering. Arbetet genomförs inomhus så det kan genomföras när som helst
  under året."
- "Det är vanligt med luftläckage mellan innertak och vind, vilket ofta är negativt för energianvändningen
  och inomhusmiljön. Det kan dessutom skapa risk för fuktskador."
- "Välj gärna ett isoleringsmaterial som har bra isoleringsförmåga. Ju lägre 'lambda'-värde desto mer
  isoleringseffekt får du ut av varje centimeter."
- "För de flesta hus är det lönsamt att tilläggsisolera vindsbjälklaget." Besparing i tal: **ej angiven.**
- Före åtgärden: undersök fuktskador i bjälklaget och på underlagstaket; kontrollera lufttätningen mellan
  bostad och vind, särskilt vid genomföringar och vid luckan; kontrollera att ventilationskanaler inte läcker;
  kontrollera vakuumventiler på avloppsrör; isolera installationer som hamnar kallare; bedöm om
  tillgängligheten behöver förbättras med "nya spångar eller förhöjd sarg runt takluckan"; kontrollera
  brandrisken vid varm skorsten; undersök hur vinden ventileras "om du behöver bygga om ventilationen för
  att den annars blir igenbyggd av tilläggsisoleringen"; dokumentera energianvändningen före.
- "Om du ska förvara saker på vinden så kan det bli sämre möjlighet till det om det blir kallare och
  fuktigare på vinden."
- "Mekanisk ventilation med värmeåtervinning är ofta lönsamt, och kräver då för det mesta kanaldragning på
  vinden. Om det kan bli aktuellt för ditt hus, så utred det innan du gör en tilläggsisolering."
- Efter: "Kontrollera under den första vintern efter åtgärden att det inte blir kondens på vinden. Om det
  blir fuktfläckar eller rimfrost på yttertakets insida är det tecken på att fukt tillförs som inte torkar ur."
- "För att användningen av energi ska minska så mycket som möjligt, behöver värmesystemet justeras in."
- "När vinden tilläggsisoleras minskar husets effektbehov. Undersök om du kan få ett billigare elabonnemang."

### Boverket, Fuktrisker med kalla vindar

<https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-fuktskador/fuktrisker-yttertak/kalla-vindar/>
och undersidan Risk med fukt från inomhusluften. Hämtade 2026-09-20.

- Om att vindsbjälklagets isolering ökades: "Värmetillförseln till vinden minskade genom vindsbjälklaget,
  och ventilationens uttorkande förmåga minskade. Det ökade luftfuktigheten, och därmed ökade också risken
  för mikrobiologisk påväxt på vinden."
- "Det är lätt att tro att enbart bra ventilation av huset och vinden löser fuktproblem, men i själva verket
  kan ventilationen i sig utgöra en fuktkälla eller ha en begränsad uttorkande effekt under vissa perioder
  av året."
- "Med dagens mildare vintrar ökar dessutom risken för mikrobiologisk påväxt på vinden."
- Exfiltration: "För att luften ska kunna läcka ut krävs att det både är ett hål i klimatskärmen och ett
  inre övertryck som kan pressa ut luften. Fenomenet kallas exfiltration och uppstår oftast i byggnadens
  övre delar."
- "Vintertid är det extra riskfyllt... Fukttillskottet är dessutom normalt sett större på vintern, samtidigt
  som sannolikheten för ett inre övertryck ökar."
- Bland faktorerna som påverkar sannolikheten: "temperaturen på materialytorna som träffas direkt av
  exfiltrationen (välisolerade byggdelar har kallare utsida)".
- Historiskt: när skorstensstocken slutade vara varm blev vinden kallare och fuktigare.

### Energimyndigheten, Isolering. En guide från energi- och klimatrådgivningen

ET 2025:06, mars 2025, ISBN 978-91-7993-207-7. Hämtad 2026-09-20 som pdf.

**Tabell 2, U-värden i vindsbjälklag i småhus** (ursprungligt U-värde, W/m²K):

| Byggår | U-värde |
|---|---|
| 1920 | 0,5 |
| 1921–1940 | 0,5 |
| 1941–1960 | 0,45 |
| 1961–1980 | 0,3 |
| 1981–2000 | 0,20 |
| 2001– | 0,13 |

"Om man inte vet hur byggnadens konstruktion ser ut kan man räkna med genomsnittliga U-värden för
ytterväggar och vindsbjälklag i småhus uppförda under olika år."

Lambda-värden, W/mK: stenull 0,035–0,045, glasull 0,032–0,040, cellplast EPS 0,035–0,038, cellulosa
0,037–0,040, träfiber 0,038–0,045, PUR 0,022–0,028, PIR 0,021–0,026.

Övrigt ordagrant:

- "Vindsisolering som ligger öppet på bjälklaget kan relativt enkelt bytas ut eller kompletteras med lösull
  eller skivor. En bra tumregel är cirka 40 cm isolering och att den är väl fördelad över ytan, men det måste
  även finnas luftutrymme till yttertak."
- "Energianvändningen minskar inte nödvändigtvis bara för att byggnaden tilläggsisoleras. Om inte
  värmetillförseln i byggnadens värmesystem samtidigt sänks så kommer det enda som uppnåtts vara högre
  inomhustemperaturer."
- "Ett exempel är kondens i kalla vindsutrymmen. När undertakets insida är kallare än uteluften kan uteluft
  som kommer in under takfoten kondensera på undertakets insida."
- Energiförlusterna i ett hus fördelas enligt guidens illustration: fönster och dörrar 35 procent, väggar
  20 procent, tak 15 procent, golv och källare 15 procent, ventilation 15 procent.
- "Efter en åtgärd i isoleringen behöver du kontrollera byggnaden regelbundet efter tecken på kondens eller
  fukt."
- "Gnagare eller insekter kan ta sig in i isoleringen om det finns luckor eller hål i konstruktionen."

### Energimyndigheten, Vindsisolering (husguiden)

<https://www.energimyndigheten.se/effektiv-energianvandning/guider/husguiden-for-dig-som-vill-energieffektivisera-ditt-hus/minska-behovet-av-varme-och-varmvatten/tillaggsisolering/vindsisolering/>
Hämtad 2026-09-20 via WebFetch. Sidan är JavaScript-renderad och gav bara meny vid vanlig hämtning.

- Ungefär 15 procent av värmeförlusterna i en villa sker genom vinden och taket.
- Många äldre vindsisoleringar är bara 50 till 100 mm; upp till 500 mm går ofta att lägga.
- Tilläggsisolering är särskilt lönsam om nuvarande isolering är mindre än 200 mm.
- Räkneexempel: 150 mm extra ovanpå befintliga 100 mm minskar värmebehovet med cirka 2 800 kWh per år.

### Rockwool, Isolera eller tilläggsisolera vind och innertak

<https://www.rockwool.com/se/produkter-och-konstruktioner/takisolering/vind/> Hämtad 2026-09-20.

**Tilläggsisolering med lösull, Granulate Pro Plus 25 kg/m³, lambda 0,041.** U-värde i W/m²K, besparing i
kWh per kvadratmeter och år.

| Befintligt | U före | 150 mm | 250 mm | 300 mm | 400 mm |
|---|---|---|---|---|---|
| kutterspån 100 mm | 0,625 | 0,193 / 38,57 | 0,131 / 44,10 | 0,113 / 45,71 | 0,089 / 47,85 |
| mineralull 50 mm | 0,622 | 0,197 / 37,94 | 0,133 / 43,66 | 0,114 / 45,35 | (tryckfel i källan) |
| mineralull 100 mm | 0,357 | 0,156 / 17,95 | 0,113 / 21,78 | 0,099 / 23,03 | (tryckfel i källan) |
| mineralull 150 mm | 0,249 | 0,129 / 10,71 | 0,098 / 13,48 | 0,087 / 14,46 | 0,072 / 15,80 |
| mineralull 200 mm, trä | 0,184 | 0,110 / 6,61 | 0,086 / 8,75 | 0,078 / 9,46 | 0,066 / 10,54 |
| betong 100 mm | 0,311 | 0,146 / 14,73 | 0,107 / 18,21 | 0,095 / 19,28 | 0,077 / 20,89 |
| betong 200 mm | 0,169 | 0,104 / 5,80 | 0,083 / 7,68 | 0,076 / 8,30 | 0,064 / 9,37 |

Två celler i Rockwools 400 mm-kolumn är feltryckta i källan ("0,0,89" och "0,8") och används inte.
Samma tabell finns för 30 kg/m³ och lambda 0,038, med något lägre U-värden.

**Tilläggsisolering med skivor, Flexibatts λ 37**, samma konstruktion:

| Befintligt | U före | 95 mm | 145 mm | 195 mm | 220 mm |
|---|---|---|---|---|---|
| mineralull 100 mm | 0,357 | 0,189 / 15,0 | 0,150 / 18,5 | 0,125 / 20,7 | 0,115 / 21,6 |
| mineralull 150 mm | 0,249 | 0,150 / 8,8 | 0,125 / 11,1 | 0,107 / 12,7 | 0,099 / 13,4 |
| mineralull 200 mm | 0,184 | 0,125 / 5,3 | 0,107 / 6,9 | 0,093 / 8,1 | 0,088 / 8,6 |

**Beräkningsförutsättningarna, ordagrant och avgörande för hela sidan:**

"45 x 145 mm takstolar cc 1200 mm, isolering, plastfolie, 28 x 70 mm glespanel cc 300 mm samt 13 mm
gips/pärlspont. Beräkningarna använder normalårets graddagar: 3720 som är representativa för Mellansverige,
Örebro - Västerås - Uppsala. För uppskattad besparing i södra Sverige beräkna ca 20% lägre besparing. För
uppskattad besparing i norra Sverige beräkna ca 35% större besparing."

Övrigt ordagrant:

- "Ca 15% av husets värme försvinner genom taket."
- "Ett kallt vindsutrymme ska ventileras genom en spalt utmed takfoten och genom ventiler på gavlarna.
  Ventilationsspalten vid takfoten ska vara ca 50 mm och anordnas med [vindavledare]. Den används för att
  leda ventilationsluften upp över isoleringen och ska avslutas ca 150 mm över färdig isoleringsnivå."
- "Använd ROCKWOOL Vindavledare och lägg en 25 mm tjock läkt i mitten av takstolsfacket så att vindspalten
  säkras."
- "På insidan monteras en plastfolie, ett luft- och diffusionstätt skikt, som hindrar oönskat luftläckage
  genom konstruktionen."
- "Kontrollera om konstruktionen är tillräckligt luft- och ångtät. Om inte, ska ångspärr monteras.
  Ångspärren måste vara tät i skarvar och mot intilliggande konstruktion."
- "Befintlig isolering bör inspekteras för skador och korrekt passning till takstolar, underlag och stödben."
- "Gångbryggan förhöjs med tilläggsisolering. För lätt trafik kan gångbryggan utföras med ROCKWOOL Markskiva
  ovanpå befintlig gångbrygga. Täck med ett lager 3 mm hård oljehärdad träfiberskiva. För tung och frekvent
  trafik rekommenderas gångbrygga av råspont. Runt luckor kan fast konstruktion av plywood eller råspont
  byggas."
- Lösull läggs ut maskinellt av entreprenör ansluten till Behörig Lösull, eller för hand med kratta eller
  Vindsullspruta.
- "Exemplen är baserade på att ny isolering läggs ovanpå den gamla."

### Fuktcentrum vid Lunds tekniska högskola, två artiklar ur Bygg & teknik

**Eva Sikander och Per Ingvar Sandberg, SP Sveriges Tekniska Forskningsinstitut, "Energiåtgärders inverkan
på vindar och takkonstruktioner", Bygg & teknik 4/07, sid. 19–20.**
<https://www.fuktcentrum.lth.se/fileadmin/fuktcentrum/Publikationer/Bygg-Teknik/4_07_19.pdf>

- "Tilläggsisolering av en befintlig konstruktion ökar risken för kondens eftersom vinden blir kallare än
  tidigare."
- Följderna av mer värmeisolering listas som plus och minus: plus minskad energianvändning och bättre termisk
  komfort, minus "Kallare utsida, vilket medför högre relativ fuktighet" och "Luftens fuktupptagande förmåga
  minskar, vilket har betydelse för konstruktioner som av någon anledning tillförs fukt och som därmed har
  behov av uttorkning."
- "Orsaken till fuktskador ska alltid utredas och fuktskadorna åtgärdas... En fuktskada löper stor risk att
  förvärras efter en tilläggsisolering."
- "Observera att ett nytt ångtätande skikt inte får placeras på fel ställe i konstruktionen, till exempel så
  långt ut i konstruktionen att kondens kan uppstå."
- "En ny tätningslist vid vindsluckan och lufttätning av genomföringar är en förutsättning för att värme och
  luft inte ska läcka upp på vinden."
- "Sågspån, som är oskadat, får gärna ligga kvar eftersom det är relativt lufttätt."
- "Om det är fråga om en ventilerad vind, se till att hela vindsutrymmet är ventilerat. Men det bör inte
  överventileras. Normalt räcker det enbart med ventiler vid gavlarna."
- "Tilläggsisolera gärna tak och vindsbjälklag men kontrollera under följande vinter att det inte blir kondens
  på vinden. Skulle det under nästa vinter bli fuktfläckar eller rimfrost på yttertakets insida är detta ett
  tecken på att fukt tillförs och att åtgärder måste sättas in."
- Invändig tilläggsisolering av taket bör undvikas.

**Lars Tobin (Anneling Consult AB) och Ingemar Samuelson (Byggnadsfysik SP), "Hur ska vindar ventileras?",
Bygg & teknik 4/04, sid. 17–19.**
<https://www.fuktcentrum.lth.se/fileadmin/fuktcentrum/Publikationer/Bygg-Teknik/4_04_17.pdf>

- "Ett sätt att minska risken för skador är överraskande nog att minska ventilationen på vinden. Detta
  förutsätter dock att ingen fukt tillförs vindsutrymmet."
- "Generellt innebär ökad ventilering att vindsutrymmet blir kallt och fuktigt. Det är därför olämpligt att
  ventilera vindar i samma grad som förr. Fokus ska riktas mot att hindra fukt att tillföras vindsutrymmet."
- "Vinden har alltså inte i första hand ventilerats för att hålla fukt borta eller för att säkerställa en
  torr miljö." Ventilationens historiska uppgift var att hindra ojämn snösmältning och istappar.
- "Om fuktig inneluft läcker upp till vindsutrymmet via otäta luckor, skorstensstockar eller genomföringar
  kan kondens uppstå med allvarliga skador som följd. Även små otätheter kan ge stora problem."
- "Sannolikt räcker det med relativt måttlig ventilation till exempel någon eller några gavelventiler."
- "Det är däremot inte lika nödvändigt att ha ventilation utmed takfoten om det finns ventiler i gavlarna som
  kan ge luftning av hela vinden."
- "Plastfoliens viktigaste uppgift är just denna, att säkerställa att bjälklaget är lufttätt."
- Fyra villkor för att undvika fuktskador: lufttätt vindsbjälklag, undertryck inne, tätt yttertak, byggfukt
  som kan torka ut, och läckage från installationer som förhindras.
- I försök på SP:s provvindar blev en oventilerad vind torrare, och den relativa fuktigheten jämnare.
  Författarna rekommenderar ändå inte en helt oventilerad vind.

**Konflikten mellan källorna, som sidan skriver ut i stället för att välja tyst.** Rockwool föreskriver både
takfotsspalt och gavelventiler. SP:s två artiklar säger att gavelventiler normalt räcker och att mer
ventilation gör vinden kallare och fuktigare. Sidans hållning: rör inte den ventilation som finns, bygg inte
igen den, men bygg inte heller ut den, och lägg pengarna på lufttätheten i stället.

### Kostnader

| Uppgift | Tal | Källa | Datum |
|---|---|---|---|
| Tilläggsisolering av vindsbjälklag, anlitat | 150 till 500 kr per kvm | Helsingborgs stad, energi- och klimatrådgivningen | uppdaterad 2021-10-01 |
| Takisolering, anlitat | 500 till 1 500 kr per kvm | samma | samma |
| Verklig offert, 40 kvm, Uppsala län | 39 000 kr, varav 10 000 kr förarbete | RikaTillsammans forum | november 2023 |
| Rockwool Vindsull, lösull för hand | 19,95 kr per kg, 4 788 kr för 12 säckar à 20 kg | Bauhaus produktsida | hämtat 2026-09-20 |
| Rockwool Vindsull, densitet löst utlagd | minst 42 kg per kubikmeter | Bauhaus, tillverkarens produktdata | 2026-09-20 |
| Rockwool Granulate Pro Plus, maskinblåst | 25 eller 30 kg per kubikmeter | Rockwool, tabellrubrikerna | 2026-09-20 |

<https://helsingborg.se/bo-bygga-och-miljo/energi-och-klimatradgivning/vad-kostar-det-att-isolera-vinden/>
Helsingborg skriver också: "Kostnadsmässigt är det inte själva lösullen i sig som är den stora posten utan
det är snickararbeten och framkörningen."

<https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg>. Produktdata på sidan: "20 kg.
Värmekonduktivitet: λ = 42 mW/mK. Densitet: Löst utlagd ≥ 42 kg/m³." Sidan anger "Online säljs denna vara i
antal av 12 st åt gången".

### Skatteverket, rotavdraget

<https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html>
och listan över rotarbeten. Hämtade 2026-09-20.

- "Företaget får dra av högst 30 procent av arbetskostnaden på fakturan."
- "Du kan få högst 75 000 kronor per år i rotavdrag och rutavdrag. Av den summan får högst 50 000 kronor
  vara rotavdrag."
- "Det är endast arbetskostnaden som ger rätt till rotavdrag." Material och resekostnader ger inte avdrag.
- Tilläggsisolering nämns i listan över rotarbeten, under posten om att bygga om och bygga till ett småhus.
- **Femårsregeln gäller just den posten:** "Du kan inte få rotavdrag för ombyggnad eller tillbyggnad de
  första fem åren efter det år huset byggdes färdigt." Skatteverket tillägger att "Det år huset byggdes
  färdigt kallas för värdeår", och att reparation och underhåll ger avdrag oavsett husets ålder.
  Kontrollerat 2026-09-20 efter granskningens krav 5.6.5.
- Talen stämmer med `docs/SOKORDSANALYS.md` avsnitt 7.4, där de verifierades 2026-09-20 för
  rotavdragskalkylatorn.

### Elpriset

`src/lib/antaganden.ts`: 2,40 kr per kWh, SCB, hushåll med 5 000 till 14 999 kWh per år, juli till december
2025, inklusive elhandel, nätavgift, energiskatt och moms. Samma värde som `/grund/isolera-krypgrund/`.

### Formeln

Bygg & teknik 3/24, Marcus Dahlin: **E = ΔU · A · Gt · 0,001**, där E är kWh per år, ΔU är U-värdets minskning
i W/(m² °C), A är arean i kvadratmeter och Gt är gradtimmar för aktiv uppvärmning. Samma källa och samma formel
som `/grund/isolera-krypgrund/`, och sidan hänvisar dit i stället för att skriva ut den en gång till.
<https://byggteknikforlaget.se/och-svarar-3-24/>

## 3. Våra egna räkningar

Alla fyra är gjorda av oss på källornas tal, och de är märkta som våra i texten.

**A. Rockwools gradtimmar, omvänt räknade.** Rockwool anger 3 720 graddagar. 3 720 gånger 24 timmar är
89 280 gradtimmar. Kontroll mot deras egen besparingskolumn, rad för rad:

| Rad | ΔU | Rockwools besparing | ΔU · 89 280 · 0,001 |
|---|---|---|---|
| kutterspån 100, 300 mm | 0,512 | 45,71 | 45,71 |
| mineralull 100, 300 mm | 0,258 | 23,03 | 23,03 |
| mineralull 150, 300 mm | 0,162 | 14,46 | 14,46 |
| mineralull 150, 400 mm | 0,177 | 15,80 | 15,80 |
| mineralull 100, 195 mm skiva | 0,232 | 20,7 | 20,7 |

Fem rader av fem stämmer på hundradelen. Rockwools kolumn är alltså Bygg & tekniks formel med
Gt lika med 89 280, vilket ligger mellan tidskriftens 80 000 för södra Sverige och 100 000 som allmän tumregel.

**B. Besparingen på 100 kvadratmeter med 100 mm gammal mineralull.**
0,258 gånger 100 gånger 89 280 delat med 1 000 är 2 303 kWh per år. Gånger 2,40 kr är 5 527 kr,
alltså cirka 5 500 kr. Med Rockwools regionjustering: 4 400 kr i södra Sverige, 7 500 kr i norra.

**C. Forumtrådens 39 000 kronor.** 39 000 delat med 40 kvadratmeter är 975 kr per kvadratmeter. Med Rockwools
rad för 100 mm kutterspån och 300 mm lösull blir besparingen 0,512 gånger 40 gånger 89 280 delat med 1 000,
alltså 1 829 kWh per år, eller 4 389 kr. 39 000 delat med 4 389 är 8,9 år. Tråden hade 200 mm kutterspån,
alltså dubbelt så tjock gammal isolering och därmed mindre att vinna, så det verkliga talet är längre än nio år.
Appen i tråden sa 3 till 4 år.

**D. Vad lösullen kostar om du krattar ut den själv.** 12 säckar à 20 kg är 240 kg för 4 788 kr. Vid
densiteten 42 kg per kubikmeter blir det 5,7 kubikmeter. Utlagt i 300 mm räcker det till 19 kvadratmeter.
4 788 delat med 19 är 252 kr per kvadratmeter, bara i material. En entreprenör blåser samma tjocklek med
25 kg per kubikmeter, alltså 7,5 kg per kvadratmeter mot 12,6 kg för hand. 7,5 delat med 12,6 är 0,60,
vilket är den kvot artikeln använder: maskinen gör samma U-värde av sextio procent så mycket ull.
Första utkastet skrev "två tredjedelar", vilket var fel kvot. Rättat efter granskningens krav 5.6.9.

## 4. Det vi inte kunde hämta

Chefredaktören bör öppna dessa i webbläsare innan publicering.

1. **isover.se svarar 403** mot både WebFetch och curl med webbläsaridentitet. Det gäller både
   `https://www.isover.se/supporten-tipsar/isolera-tak-och-vind`, som ligger i topp 5 på huvudfrasen, och
   `https://www.isover.se/faq/vad-kostar-det-att-tillaggsisolera-vinden`, som är den enda tillverkarsidan
   vi hittat med ett pris. **Vi har alltså skrivit om ettans ämne utan att ha läst en av topplistans sidor.**
   Samma spärr noterades i underlaget till isolera-kallarvagg 2026-09-19 och i granskningen 2026-09-20.
   Uppdraget bad om Isovers tabell för vindsbjälklag; den finns inte i den här sidan.
2. **byggahus.se svarar 403.** Gäller både `https://www.byggahus.se/tillaggsisolera-vinden-gor-det-sjalv`
   (plats 4) och `https://www.byggahus.se/pris-tillagsisolera-vinden`. Samma spärr som på källarsidorna.
3. **Paroc har ingen svensk sida kvar att citera.** `se.paroc.com/koncept/tillaggsisolera-vinden` svarar 302
   till `paroc.com/sv-se/campaigns`, och `paroc.se/losningar/byggisolering/vindsbjalklag/kallvind` svarar 302
   till `paroc.com/sv-se`. Ingen av landningssidorna har en U-värdestabell eller ett tal. Det är samma
   nedmontering som upptäcktes på isolera-kallarvagg, där lösningen blev Internet Archive. Uppdraget bad om
   Parocs tabell för vindsbjälklag; **sidan har ingen Paroc-uppgift alls**, och lösull mot skivor bärs i
   stället av Rockwools två tabeller och Energimyndighetens lambdatabell. Parocs uppgift om 5 procents
   sättning enligt typgodkännande syns i sökträffar men gick inte att verifiera i en läsbar källa och används
   inte.
4. **Boverkets båda sidor är JavaScript-renderade.** Texten är hämtad ur sidornas egen HTML-nyttolast, inte
   ur den renderade sidan. Citaten är ordagranna men bör ögonkontrolleras.
5. **Energimyndighetens husguide svarade bara meny vid curl.** Talen 15 procent, 2 800 kWh och gränsen
   200 mm kommer från WebFetch-läsningen av samma adress och är inte lika säkra som talen i pdf:en
   ET 2025:06, som är hämtad i sin helhet.
6. **Helsingborgs prisuppgift är från 2021.** Det är den enda opartiska, daterade uppgiften per kvadratmeter
   vi hittat. Alla nyare spann ligger på innehållssajter utan avsändare och används inte. Priset skrivs därför
   ut med årtal i texten.

## 5. Rättat efter granskningen 2026-09-20

Tolv krav i `docs/briefer/granskning-omgang-golv-2026-09-20.md` avsnitt 5.6. Alla är utförda.

1. Talkrocken. Sista avsnittets tal skrivs nu ut som 950 kilowattimmar och drygt 2 200 kr, och
   forumräkningens 4 400 kr fick tillägget "på de 40 kvadratmetrarna".
2. `description` lovade 300 mm medan första rubriken svarar 400 mm. Bytt till 400. Granskningens
   föreslagna text är 159 tecken och stoppas av kontrollskriptets gräns på 155, så slutet kortades
   från "när jobbet är klart" till "efteråt". 147 tecken.
3. Byggårstabellen: enheten flyttad till kolumnrubriken ("U-värde, W/m²K"), alla värden med två
   decimaler, första raden "till 1920".
4. Rockwooltabellen: "U före, W/m²K", "U efter, W/m²K", "Spara, kWh/kvm och år". Källraden kortad.
5. Rotavdraget: femårsregeln och det gemensamma taket på 75 000 kr inlagda. Femårsregeln är skriven
   med Skatteverkets egen huvudformulering i stället för granskningens "räknat från värdeåret",
   eftersom värdeår är en term som behöver sin förklaring på en mellansida. Båda formuleringarna är
   Skatteverkets egna och hämtade 2026-09-20.
6. Definitionen av relativ luftfuktighet borttagen och ersatt med granskningens mening, plus en
   hänvisning till `/fukt/luftfuktighet-inomhus/` enligt koordinatorns tillägg.
7. U-värdesdefinitionen omskriven så att den inte ekar `isolera-kallarvagg`.
8. FAQ-svar 1 bär nu återbetalningstiden i stället för räkneexemplet, som redan står i brödtexten.
9. "två tredjedelar" rättat till "sextio procent", se räkning D ovan.
10. Länken till `/rakna/elkostnad/` inlagd efter antagandelistan.
11. `el/vind-bjalklag.svg`: gränsen mellan lagren flyttad från y 244,5 till y 257. Ny lösull
    75 enheter (300 mm), gammal ull 25 enheter (100 mm), måttbygeln 100 enheter (400 mm). Bilden
    visar nu artikelns räkneexempel. Bjälkar, skraffering och bildtext följde med.
12. `el/vind-takfot.svg`: måttbygel vinkelrätt över luftspalten, 12,5 enheter märkta 50 mm med
    tumstock bakom talet, och en pekare dit. I den skalan är isoleringens fulla tjocklek
    100 enheter, alltså 400 mm, samma skala som huvudbilden. Ytterväggarna skrafferade i båda
    panelerna så att de går att urskilja, och alt-texten skriven om efter bilden. Uteluftspilen
    kortad så att den inte krockar med bygeln.
