# Läsarens retur: /rakna/kontrollplan/, 2026-09-28

Jag läste som en husägare som fått veta av kommunen att det behövs en kontrollplan, först för en altan med bygglov och sedan för en kamin. Sidan kördes på en egen dev-server (port 4412). Jag läste sex vyer: standardvyn (altan utan tak), altan med skärmtak, eldstad med befintlig skorsten, tre åtgärder samtidigt (tillbyggnad, eldstad och ventilation i ett värdefullt hus), ärende inkommet före juli 2026 och tre ogiltiga val (fyra åtgärder, ingen åtgärd, altan i komplementbostadshus). Jag skrev också ut standardplanen och trebyggesplanen till PDF i A4 liggande via Edge. Servern är stoppad och inget är byggt. Som jämförelse läste jag u-varde, kallare och grannemedgivande.

**Betyg: 3 av 5.** Planen är det mest användbara jag hittat för det här ärendet: raderna har krav, metod, vem som gör kontrollen och verifikat, och den skriver ut sig snyggt. Men den ogiltiga vyn visar texten `TEXT SAKNAS: beskedsvarning` för besökaren, den utskrivna planen har fel och pratig text på det papper som ska till nämnden, och sidan runt planen är skriven på myndighetsprosa med paragrafer i nästan varje mening.

---

## 1. Går planen att lämna in som den är?

Nästan. Ramen finns: fastighet, byggherre, entreprenör, diarienummer, datum, åtgärd med lovgrund, kontrollansvarig, regler, kontrolltabell med signaturkolumn, anmälningar, arbetsplatsbesök, intygande och avfallshanteringsplan. Rubriken på tabellen upprepas på varje sida. Men det här skulle en handläggare eller jag själv snubbla på:

1. **Fel rad i altan utan tak.** Jag valde "Nej, den är öppen" och får ändå rad 3 "Bärlinor och reglar, och skärmtakets bärverk om det finns / Innan trall och takbeklädnad läggs". På en plan för en öppen altan ska det inte stå något om skärmtak eller takbeklädnad. Det får planen att se ut som en mall man inte har läst igenom.
2. **Tilltal till mig på ett papper till nämnden.** "B är byggherren, alltså du, och E är entreprenören som gör jobbet." "Kontrollansvarig krävs som huvudregel och hjälper dig med planen." "Kontrollansvarig krävs inte för det här, om nämnden inte beslutar annat." "Det är du som byggherre som bedömer om planen behövs, och nämnden prövar bedömningen. Blir det något avfall att tala om fyller du i planen nedan." Det är instruktioner till mig, men de står på själva handlingen som handläggaren läser. Där ska det stå "Byggherren (B)" och inga råd.
3. **Linjen för kontrollansvarig saknar etikett.** Vid tillbyggnad kommer en tom linje under texten om kontrollansvarig, men det står inte vad jag ska skriva där (namn, certifieringsnummer, telefon?).
4. **Långa namn går ut i nästa kolumn.** I trebyggesplanen, rad 20, trycks "Skorstensfejarmästaren" in i "Protokoll", och på rad 25 sticker "funktionskontrollant" ut i verifikatkolumnen. På papper ser det slarvigt ut.
5. **Rubriker ligger ihop.** "Upprättad, datum" ligger direkt ovanpå "Åtgärd" utan luft, så det ser ut som att åtgärden är ett svar på datumfältet.
6. **Intygandet säger inte när det ska skrivas under.** "Byggherren intygar att kontrollerna är gjorda och att det som byggts stämmer med lovet eller anmälan och startbeskedet." Den ligger på planen som jag skickar in innan jag börjar bygga. Ska jag skriva under nu? Svaret finns bara längst ned i FAQ ("när du begär slutbesked") och inte på papperet.
7. **Avfallsdelen är tvetydig.** Det finns en ruta för "uppenbart att någon avfallshanteringsplan inte behövs", och under den står tre tomma tabeller i alla fall. Om jag kryssar i rutan, ska jag lämna tabellerna tomma eller stryka dem? Det står inte.
8. **Energiraden för ärenden 1 juli till 30 september ser trasig ut.** "BFS 2011:6 avsnitt 1:22347 och 9:92". "1:22347" ser ut som ett skrivfel, och jag skulle inte våga lämna in det utan att kolla.
9. **"Skorstensfejarmästaren / Egenkontroll".** Det ser motsägelsefullt ut att en utomstående gör kontrollen och att raden ändå heter egenkontroll. Förklaringen finns bara i antagandetabellen.
10. **Rad 1 för befintlig skorsten.** "Eldstadens och skorstenens dokumenterade egenskaper / Vid leverans". En befintlig skorsten levereras inte.
11. **Dubbla rader vid flera åtgärder.** "Luftflöden" står både som rad 10 (tillbyggnad, "Före inflyttning") och rad 24 (ventilation, "Efter injustering") med samma krav och samma metod. Som läsare undrar jag om det är ett fel.
12. **Sidnummer saknas**, och fastighetsbeteckningen står bara på sida 1. Planen för tre åtgärder blir fem lösa blad.

## 2. Är det tydligt vad man fyller i för hand?

På skärmen står det i en mening: "Namn, fastighet, diarienummer och datum fyller du i för hand på utskriften. De sparas inte här." Det är tydligt. Men den meningen syns inte på papperet, och det finns fler tomma linjer än de fyra som räknas upp. Två linjer under "Anmälningar", en under "Arbetsplatsbesök", en under kontrollansvarig och tomma avfallstabeller står utan förklaring. Besked i spalten, "Skriv ut planen, fyll i resten för hand och skicka in den", säger inte vad "resten" är. Signaturkolumnen fylls i under bygget, inte före inskickandet, och det framgår inte heller av papperet.

## 3. Lovar sidan mer än den kan?

Nej, och det är sidans starkaste sida. Den säger aldrig att kommunen godkänner planen. Den säger tvärtom, sju gånger i standardvyn, att planen är ett förslag som nämnden prövar och fastställer i startbeskedet: kort svar, spalten, planens första stycke, "Därför blev svaret så", "Gör inte det här" och två FAQ-svar. Det är tryggt, men sju gånger är för mycket (se mönster). Två små överdrifter finns:

- `<title>`: "Kontrollplan mall, ifylld efter ditt bygge". Planen är inte ifylld, eftersom halva papperet fylls i för hand. "Kontrollplan mall" är dessutom en särskrivning som syns i fliken och på Google.
- Formuläret: "Altan som kräver bygglov / Golvet ligger så högt att altanen behöver lov." Det förutsätter att jag redan vet att lov krävs och att det bara beror på höjden. Länken till bygglovsräknaren finns först under "Läs vidare", längst ned.

## 4. Den ogiltiga vyn

- **`TEXT SAKNAS: beskedsvarning`** visas i resultatspalten vid fyra åtgärder, ingen åtgärd och altan i komplementbostadshus. Det här stoppar publicering. Samma fel finns på /rakna/grannemedgivande/.
- Felmeddelandena vid formuläret är bra: "Välj högst tre saker, annars blir planen för lång att läsa och skriva ut." och "Kryssa i minst en sak som du ska bygga eller ändra." Texten om komplementbostadshus fungerar också ("Ta bort de andra valen eller välj bostadshuset").
- Fältet **"Dela planen"** visas fast det inte finns någon plan. Adressen i fältet är standardvärdenas (`a=altan&...`), inte det jag valde. Den som får länken får alltså en annan plan än jag trodde att jag skickade.

## 5. Meningar som inte går att förstå vid första läsningen

Ingress och kort svar
- "många mallar på nätet hänvisar fortfarande till BBR, som inte gäller i nya ärenden." BBR förklaras inte, och det är det andra ordet jag möter på sidan.
- "enligt PBL 10 kap. 6 § ska du som byggherre se till att den finns när det du gör kräver lov eller anmälan." Paragrafen och ordet byggherre kommer före förklaringen. Första meningen i kort svar ska inte behöva lagboken.
- "Sedan 1 juli 2026 ligger avfallet i en egen avfallshanteringsplan, som följer med här som en egen del." "Ligger avfallet" låter som soporna. Dessutom "egen" två gånger.

Formuläret
- "Ett gästhus som kräver bygglov kan jag inte göra plan för här." Vad gör jag då? Och "göra plan för" är ovanligt uttryckt.
- "Ett komplementbostadshus som inte krävde bygglov, till exempel ett litet gästhus". Ingen säger komplementbostadshus. Jag kallar det attefallshus.
- "1 oktober 2026 eller senare, eller inte än". "Inte än" blir fel för den som skickar in ansökan i morgon eller i övermorgon, 29 eller 30 september, eftersom den då hamnar i fel period för energiraden.

Spalten
- "Kontrollansvarig krävs normalt inte för en altan. Bedömer nämnden skärmtaket som en tillbyggnad gäller undantaget för små ändringar av en- eller tvåbostadshus, och nämnden kan ändå kräva en." Jag fick läsa den tre gånger. Vilket undantag? Betyder det att jag behöver en eller inte?
- "Kontrollansvarig krävs som huvudregel och hjälper dig med planen. Små ändringar av en- eller tvåbostadshus kan undantas." Beskedet ovanför säger samtidigt "Skaffa en kontrollansvarig". Är min tillbyggnad en liten ändring? Det får jag inte veta.

Planen
- "PBL 10 kap. 6 § i lydelse Lag (2026:712)". Juristspråk överst i regelfältet.
- "Förvanskning och varsamhet, husets värden tas till vara". Två fackord i en rad jag själv ska signera.
- "Regler som planen hänvisar till: ...; PBF; ..." Ett naket "PBF" utan paragraf mitt i listan.

Därför blev svaret så
- "En byggbedömare är ett certifierat företag som kontrollerar utförandet åt dig, och det som en byggbedömare kontrollerar behöver ingen kontrollplan. Byggbedömare får bara användas vid nybyggnad." Det har inget med mitt ärende att göra. Planen säger dessutom "Nybyggnad av altan", så nu undrar jag om jag kan använda en byggbedömare i stället.
- "Stryk rader som inte gäller och skriv till det som saknas, till exempel takskydd om ventilationens huv sitter på taket." Exemplet gäller ventilation, men jag valde altan.
- "och det är dem raderna i planen hänvisar till." Här saknas ett ord ("det är dem som raderna hänvisar till").
- "Kom ansökan eller anmälan in före 1 juli 2026 gäller den äldre lydelsen av 10 kap. 6 §". 10 kap. i vilken lag? Och "lydelse" är juridik.
- "Beviljades lovet före 1 juli 2026 med de äldre byggreglerna valda". Jag vet inte att man kunde välja regler, så "valda" går inte att förstå.
- "en tillbyggnad som är en egen enhet ska klara kraven för nya byggnader". Vad är en egen enhet?

Så räknar jag
- "Förvanskning och varsamhet kommer först om huset är särskilt värdefullt, aktsamheten på arbetsplatsen näst sist när du bygger eller river, och kontrollen att allt stämmer med beslutet allra sist." Det här är radernas interna ordning, och jag behöver den inte.
- "Fältet för regler överst i planen listar varje författning som någon kontroll hänvisar till". "Författning" är juridik.

Vad siffrorna vilar på
- "Ouppvärmd och i säkerhetsklass 1, så ingen energirad, inga luftflöden, ingen brandvarnare och ingen dimensioneringskontroll". Säkerhetsklass förklaras inte.
- "Egenkontroll med skorstensfejarmästaren som kontrollant. Ingen föreskrift kräver den, men Boverket kallar den lämplig". Planens rad 7/20 anger ändå två paragrafer som krav för samma kontroll. Det ser ut som en motsägelse.
- "ändrar inget lagrum i planen, lästa 28 september 2026". "Lästa" hänger löst i slutet.
- Nio rader med "Grundförfattningen, som inte har ändrats" och liknande. Det är en källförteckning och hör inte hemma i en tabell som ska förklara antaganden.

FAQ
- "Vid det tekniska samrådet räcker det att kontrollanten står med sin roll, men inför slutsamrådet ska namnet stå där." Tekniskt samråd och slutsamråd nämns bara här och förklaras aldrig.
- "och då blir det elva kontroller med den sista om att allt stämmer med beslutet." Hoptryckt. Stryk slutet.
- "Ritningen eller anvisningen du mäter mot skriver du för sig, som underlag för kontrollen." "För sig" var? Planen har ju en kolumn "Hur och mot vad" där den redan står.

Tankstreck: inga. Det enda strecket är intervallstreck i paragrafer ("10–11 §§", "6–7 §§"), och det är rätt.

## 6. Människa eller mall?

Det mesta låter som en handläggare som skriver till en annan handläggare, med ett "jag" instoppat i formuläret och i "Så räknar jag". Det finns en människa i några meningar: "Har plintarna redan grävts igen är det bättre att säga det till nämnden och fråga hur du kan visa dem i efterhand än att signera något du inte har sett." Den meningen är sidans bästa, och det behövs fler sådana. Beskedet för skärmtak, "Skriv ut planen och fråga nämnden om skärmtaket gör altanen till en tillbyggnad.", är också precis rätt: kort, konkret och ärligt. Hur-kolumnen med "Mot K-ritning", "Foto med mått" och "Minst 0,30 m framför" är exakt vad jag behöver.

Jämfört med de andra: u-värde börjar i min situation ("Du har mätt ullen på vinden"), och källaren har ett kort svar som går att göra i kväll ("Köp ingenting förrän plasten har svarat"). Grannemedgivande har sex förklarande avsnitt mellan blanketten och "Så räknar jag". Kontrollplanen har inget. Det finns ingen brödtext om hur det går till (ansökan, tekniskt samråd, startbesked, bygget, slutsamråd, slutbesked), vad egenkontroll är i praktiken eller hur man signerar under bygget. Allt förklarande ligger i paragrafstyckena och FAQ. Skissen i "Så räknar jag" finns inte heller ännu, trots att alla tre jämförelsesidorna har en.

---

## Återkommande mönster

1. **Samma sex rubriker som räknarna, också där de inte stämmer.** "Därför blev svaret så", "Gör inte det här", "Så räknar jag", "Vad siffrorna vilar på", "Läs vidare", "Vanliga frågor" finns ordagrant i kontrollplan.astro, u-varde.astro och grannemedgivande.astro (6 av 6). Kontrollplanen räknar inte och har inga siffror utom antalet rader. Kallare.astro har redan bytt till "Så bedömer jag", och här behövs samma sak, till exempel "Så ställer jag upp planen" och "Det planen bygger på".
2. **En paragraf i parentes efter varje mening.** Standardvyn har 44 paragraftecken. Besked, spaltrad, "Gör inte det här", åtgärd, kontrollansvarig och avfallsrubrik slutar alla med "(PBL ... §)". I "Därför blev svaret så" står paragrafen som etikett före varje stycke. Grannemedgivande gör likadant men i mindre dos. Det gör sidan till en lagbok för den som bara vill veta vad hen ska göra.
3. **Samma lugnande besked, sju gånger.** "Förslag ... nämnden prövar ... fastställer i startbeskedet" står i kort svar, spalten, planens första stycke, "Därför blev svaret så", "Gör inte det här" och FAQ (7 gånger i standardvyn, "förslag" 9 gånger). "Om nämnden inte (har) beslutar/beslutat annat" står 4 gånger i standardvyn.
4. **Ordagranna upprepningar inom sidan.** "en certifierad person som hjälper dig/byggherren med planen och ser till att den följs" står två gånger (ingress och "Därför"). "certifierad för sitt område" står två gånger. "Vill kommunen ha planen på sin egen blankett för(s) du/raderna över dit" står två gånger (planen och FAQ). "Kontrollansvarig krävs inte för det här" står två gånger på skärmen (spalt och plan). PDF nämns tre gånger (ingress, spalt, meta).
5. **Kluvna satser, "det är ... som".** "Det är du som byggherre som bedömer", "är det du som byggherre som tar fram", "det är i det beskedet du får veta", "är det tillbyggnaden som bestämmer", "är det hen som hjälper", "det är dem raderna ... hänvisar till". Sex gånger på en sida, och det låter som ett manér.
6. **Samma gränssnittstext som de andra räknarna, med samma fel.** "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar." står ordagrant på alla tre räknare. Här heter det "samma svar" fast det är en plan. `TEXT SAKNAS: beskedsvarning` visas både här och på grannemedgivande. Delningsfältet visar standardvärdena vid ogiltigt val på båda.
7. **Etiketten för delningsfältet skiljer sig.** Här heter det "Dela planen" och på grannemedgivande "Länk till ditt svar". Välj en.
8. **Stycken av samma längd och byggnad.** Alla stycken i "Därför blev svaret så" har två eller tre meningar i ordningen definition, regel, konsekvens. Alla åtta steg i "Så räknar jag" följer samma mall. Det liknar ett uppslagsverk.

## Det viktigaste att rätta, i ordning

1. `TEXT SAKNAS: beskedsvarning` (här och på grannemedgivande), och delningsfältet vid ogiltigt val.
2. Skärmtaksraden i planen för öppen altan.
3. Allt "du", "alltså du", "hjälper dig" och "för det här" bort från det utskrivna papperet. Etikett på linjen för kontrollansvarig, när intygandet skrivs under och vad man gör med avfallstabellerna om rutan är ikryssad.
4. "1:22347" i energiraden.
5. Rubrikerna "Så räknar jag" och "Vad siffrorna vilar på" byts mot rubriker som stämmer. Lägg till ett kort avsnitt i brödtext om hur ärendet går, från ansökan till slutbesked.
