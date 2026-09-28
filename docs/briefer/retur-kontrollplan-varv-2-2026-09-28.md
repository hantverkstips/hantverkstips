# Läsarens retur, varv 2: /rakna/kontrollplan/, 2026-09-28

Jag läste igen som en husägare som behöver en kontrollplan. Sidan kördes på en egen dev-server (port 4460) och servern är stoppad. Inget är byggt. Vyer jag läste: standardvyn (öppen altan), altan med skärmtak, eldstad mot befintlig skorsten, tre åtgärder (tillbyggnad, eldstad och ventilation i ett värdefullt hus), ärende inkommet före juli 2026, tillbyggnad inkommen juli till september, och tre ogiltiga val (fyra åtgärder, ingen åtgärd, altan i komplementbostadshus). Standardplanen, eldstadsplanen och trebyggesplanen är utskrivna till PDF i A4 liggande via Edge. Jag läste också de nya meningarna i /altan/bygglov-altan/, /grund/inreda-kallare/ med den inbäddade räknaren och länken i /rakna/bygglov-altan/ vid 2 m golvhöjd. Jämförelse: grannemedgivande.astro och u-varde.astro.

**Betyg: 4 av 5 (förra varvet 3).** Nästan allt som stoppade förra gången är rättat. Den ogiltiga vyn fungerar, papperet till nämnden talar inte längre till mig, raderna stämmer med det jag valt och utskriften har sidnummer och fastighetsbeteckning på varje sida. Det som håller kvar sidan under 5 är det konstiga "1:22347" som fortfarande står på papperet, en länk från bygglovsräknaren som tappar mitt skärmtak, att den inbäddade räknaren i källarguiden ger en altanplan om man inte kryssar något, att utskriften slösar papper, och att sidan fortfarande har 46 paragraftecken i standardvyn.

---

## Vad som är rättat sedan förra returen

| Förra returen | Nu |
|---|---|
| `TEXT SAKNAS: beskedsvarning` vid ogiltigt val | Borta. Spalten säger "Ett av fälten gick inte att läsa..." (se nedan om ordvalet). |
| Delningsfältet visades med standardvärdena vid ogiltigt val | Borta vid ogiltigt val och vid äldre ärenden. |
| Skärmtaksraden i planen för öppen altan | Rättat. Öppen altan har "Bärlinor och reglar / Innan trallen läggs", skärmtak får "Bärlinor, reglar och skärmtakets bärverk / Innan trall och takbeklädnad läggs". |
| "alltså du", "hjälper dig", "för det här" på papperet | Rättat. Papperet säger "Byggherren", "Krävs inte för åtgärden", "B är byggherren och E entreprenören". |
| Tom linje för kontrollansvarig utan etikett | Rättat: "Namn, certifiering och telefon". |
| När intygandet skrivs under | Rättat: "Intygandet skrivs under när byggherren begär slutbesked." |
| Avfallsrutan och tabellerna | Rättat: "Är rutan ikryssad lämnas tabellerna tomma. Annars fylls de i före inlämningen." På skärmen finns dessutom en mening om vad man kryssar. |
| Sidnummer och fastighetsbeteckning på varje sida | Rättat. "1 / 6" nere till höger och fastighetsbeteckning i tabellhuvudet på varje sida. |
| Långa namn gick ut i nästa kolumn | Rättat. "Skorstensfejar-mästaren" och "Certifierad funktions-kontrollant" avstavas snyggt i sin kolumn. |
| "Upprättad, datum" ovanpå "Åtgärd" | Rättat, fälten står i ett rutnät med luft under. |
| "Skorstensfejarmästaren / Egenkontroll" såg motsägelsefullt ut | Förklarat på papperet: "Egenkontroll är byggherrens kontroll, också när byggherren anlitar någon för den, till exempel skorstensfejarmästaren." Bra. |
| Befintlig skorsten "Vid leverans" | Rättat: "Eldstadens dokumenterade egenskaper / När eldstaden levereras", och genomföring, mynning och takskydd är borta. |
| Dubbla luftflödesrader | Rättat. En rad, "Efter injustering". |
| "Förvanskning och varsamhet" | Rättat: "Husets kulturvärden tas till vara och skadas inte". |
| Naket "PBF" i regellistan | Rättat: "PBF (2011:338)". |
| Kort svar med paragraf i första meningen | Rättat. Kort svar har ingen paragraf och förklarar på vanlig svenska. |
| "Ligger avfallet... egen... egen" | Rättat: "ska avfallet redovisas i en separat avfallshanteringsplan". |
| "komplementbostadshus" utan förklaring | Rättat: "det som förr hette attefallshus". |
| "1 oktober 2026 eller senare, eller inte än" | Rättat. Frågan heter "När kom ansökan eller anmälan in till kommunen, eller när skickar du in den?", och den som skickar i morgon kan välja rätt. |
| Kontrollansvarig vid tillbyggnad, "är min liten?" | Rättat: "så fråga nämnden om din tillbyggnad räknas dit". |
| Ventilationsexemplet i en altanplan | Borta ur "Därför". |
| "det är dem raderna i planen hänvisar till" | Borta. |
| "Beviljades lovet ... med de äldre byggreglerna valda" | Rättat: först "Fram till 1 juli 2026 fick byggherren välja mellan Boverkets gamla och nya byggregler", sedan beskedet. Nu går det att förstå. |
| Tekniskt samråd och slutsamråd oförklarade | Rättat i FAQ: "mötet med nämnden innan bygget börjar", "när bygget är klart". |
| "Ritningen eller anvisningen ... skriver du för sig" | Rättat: "hör hemma i kolumnen Hur och mot vad". |
| Rubrikerna "Så räknar jag" och "Vad siffrorna vilar på" | Bytta mot "Hur jag ställer upp planen" och "Det planen bygger på". |
| Brödtext saknades | Två nya avsnitt: "Nya regler för kontrollplanen från 1 juli 2026" och "Kontrollplan behövs inte alltid". Skissen i "Hur jag ställer upp planen" finns nu. |
| Kluvna satser, "det är ... som" (6 st) | 1 kvar. Manéret är borta. |
| Samma lugnande besked 7 gånger | Nere på ungefär 4 (spalten, planens första stycke, "Därför" och FAQ). Kort svar har inte längre det. Godtagbart. |

## Det som står kvar från förra returen

1. **"BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92"** står fortfarande på energiraden för ärenden 1 juli till 30 september, både i planen och som etikett i "Därför blev svaret så". Jag kan inte avgöra om det är rätt avsnitt, men det ser ut som ett skrivfel och jag skulle inte våga skicka in det. Står det rätt behöver det se ut som ett avsnittsnummer, till exempel skrivas som två avsnitt.
2. **`<title>` "Kontrollplan mall, ifylld efter ditt bygge"** är oförändrad. "Kontrollplan mall" är en särskrivning i fliken och på Google, och planen är inte ifylld.
3. **"och då blir det elva kontroller"** står kvar i FAQ om eldstad. Hoptryckt och onödigt.
4. **"lästa 28 september 2026"** hänger fortfarande löst i antagandetabellen: "Lag (2026:746) och förordning (2026:1265), lästa 28 september 2026, ändrar inget lagrum i planen".
5. **"Radernas ordning ... aktsamhet och överensstämmelse allra sist"**. "Överensstämmelse" är myndighetsord.
6. **Två tomma linjer under "Anmälningar"** har fortfarande ingen etikett. Är det för andra anmälningar, eller för datum? På papperet vet jag inte.
7. **Paragraftecknen** är 46 i standardvyn (förra varvet 44). De nya avsnitten slutar nästan varje stycke med "(10 kap. ... §)". Se mönster.
8. **"Skärmtak"-meningen om kontrollansvarig** är bättre men går fortfarande inte att läsa en gång. Se nedan.

## Nytt som är fel eller oklart

### Utskriften (A4 liggande, Edge)

- **Planen för en öppen altan tar fyra sidor för åtta rader.** Sida 1 har huvudet och bara rad 1 och 2 och sedan tom yta. Sida 3 har bara intygandet med tre linjer, resten är tomt. Trebyggesplanen blir sex sidor med samma mönster: sida 1 har en enda tabellrad och sida 5 bara intygandet. Intygandet får plats under "Arbetsplatsbesök" på sidan före. För en handläggare ser tomma sidor ut som slöseri, och för mig kostar det bläck och papper.
- **Adressen i sidfoten bryts vid bindestrecket**, "plac=vid-" på en rad och "huset" på nästa. Den som skriver av den från papperet vet inte om strecket hör till adressen.

### Den ogiltiga vyn

- "Ett av fälten gick inte att läsa. Rätta värdet där felet står, så visar jag svaret." Det stämmer inte vid fyra kryss eller inget kryss. Fälten gick att läsa, jag valde bara fel antal. "Värdet" passar inte för kryssrutor, och det jag får är en plan, inte ett svar. Felet vid formuläret är däremot bra: "Välj högst tre saker, annars blir planen för lång att läsa och skriva ut."

### Länken från /rakna/bygglov-altan/

- Vid 2 m golvhöjd säger räknaren "Ja, du behöver bygglov" och sedan "Skriv ut kontrollplanen för altanen, om den kräver lov". "Om den kräver lov" krockar med beskedet ovanför, som precis sa att den gör det.
- **Länken tappar mina val.** Om jag har sagt skärmtak eller värdefullt hus i bygglovsräknaren kommer jag ändå till en plan för en öppen altan i ett vanligt hus, eftersom länken bara bär med sig "altan". Då får jag en plan utan takets tre kontroller och utan kulturvärdesraden, och det märker jag inte.
- Länken står mellan "Så bedömer jag" och "Dela svaret" som en länk bland andra. Den syns, men den ser inte ut som nästa steg.

### /altan/bygglov-altan/

- "Får altanen lov behöver du också lämna in ett förslag till kontrollplan innan kommunen ger startbesked, och en kontrollplan för altanen kan du skriva ut färdig att fylla i." Meningen är bra, men den står bara i stycket om altan ovanpå garaget. Den som har en hög altan på marken, vilket är det vanliga, läser inte det stycket och får aldrig veta att det behövs en plan. "Färdig att fylla i" låter också lite motsägelsefullt; "och skriva ut en som du fyller i" säger samma sak.

### /grund/inreda-kallare/ med inbäddad räknare

- De två nya meningarna är bra och sitter på rätt ställe: "Startbeskedet kommer först när nämnden har prövat ditt förslag till kontrollplan, en lista över vilka kontroller som görs under bygget, av vem och mot vilka krav." Den förklarar ordet i samma andetag.
- **Trycker jag på "Gör kontrollplanen" utan att kryssa något får jag en plan för en altan.** Det är fel för den som läser om källaren, och det är lätt hänt när man vill se vad knappen gör.
- Kortet listar altan, tillbyggnad, garage och rivning först. För en källare är det bärande konstruktion, ventilation och vatten och avlopp som gäller, och de står längst ned.
- Knappen heter "Gör kontrollplanen" i kortet och "Visa kontrollplanen" på sidan. Välj en.
- "Knappen tar dig till räknaren med dina värden ifyllda. Där får du hela svaret och ser vad det bygger på." Jag har inga värden, jag har kryssat åtgärder, och det jag får är en plan och inget svar. Det är mallens text från räknarna med siffror.

## Meningar som inte går att förstå vid första läsningen

Spalten
- "Du behöver normalt ingen kontrollansvarig för en altan. Ser nämnden skärmtaket som en tillbyggnad kan det räknas som en liten ändring av huset, som också är undantagen, men nämnden kan ändå kräva en." Jag fick läsa den två gånger. "Det" kan syfta på taket eller på tillbyggnaden, och "som också är undantagen" hänger efter. Förslag: "Blir den en tillbyggnad räknas den troligen som en liten ändring, och då behövs ingen heller. Nämnden kan ändå kräva en."
- Samma sak på papperet: "Bedömer byggnadsnämnden skärmtaket som en tillbyggnad gäller undantaget för små ändringar av en- eller tvåbostadshus". "Undantaget" i bestämd form förutsätter att jag vet vilket.

Äldre ärenden
- Vid "Före 1 juli 2026" står samma två stycken ordagrant två gånger, först i spalten och sedan i "Därför blev svaret så". Den som läser uppifrån läser allt två gånger.

"Gör inte det här"
- "Undantaget är energiraden för en tillbyggnad där ansökan kom in före 1 oktober 2026 (BFS 2024:14 övergångsbestämmelse 3)." Den står också på planen för en öppen altan, som inte har någon energirad. Då undrar jag om jag missat något.

"Nya regler för kontrollplanen från 1 juli 2026"
- "Den 1 juli 2026 började ändringarna i plan- och bygglagen genom Lag (2026:712) att gälla". Lagboken i första meningen i ett avsnitt som ska förklara för mig. "Den 1 juli 2026 ändrades plan- och bygglagen" räcker.
- "Nytt är också byggbedömaren, ett certifierat företag som kontrollerar utförandet åt byggherren." Byggbedömaren gäller bara nybyggnad och aldrig mig med altan, kamin eller tillbyggnad, men den får ett helt stycke här och en mening till i nästa avsnitt ("Den del av en nybyggnad som en byggbedömare kontrollerar klarar sig också utan, som i avsnittet ovanför."). Ett stycke räcker, och det kan vara kortare.
- "Det enda som låg kvar i BBR var energikraven, som har en egen föreskrift från den 1 oktober 2026." Två meningar innan stod att BBR slutade gälla. "Låg kvar" behöver ett "till och med 30 september".

"Kontrollplan behövs inte alltid"
- "Därför har utskriften en ruta för det, men den kryssar jag aldrig i åt dig, för bedömningen är din." Den här meningen är bra, den låter som en människa.

Bildtexten
- "Plinten och bärlinan kontrolleras mot BFS 2024:6, räcket och trappan mot BFS 2024:9, och plinten medan den fortfarande syns." Sista ledet är hoptryckt. "Plinten ska kontrolleras innan den grävs igen" säger det tydligt och är det viktigaste i bilden.

Antagandetabellen
- "Möjligheten att välja de äldre reglerna till 30 september 2027 tas inte upp". Vilka äldre regler? Det är energireglerna, men det står inte.

## Människa eller mall?

Mer människa än förra gången. Formuläret och spalten låter som någon som vet och som säger vad jag ska göra: "Skriv ut planen och fråga nämnden om skärmtaket gör altanen till en tillbyggnad.", "så fråga nämnden om din tillbyggnad räknas dit", "Använd kommunens mall för ärenden som kom in före 1 juli 2026." och "den kryssar jag aldrig i åt dig, för bedömningen är din." Papperet är nu ett papper och inget brev, och det är sidans stora framsteg. Men de nya brödtextavsnitten är skrivna som en sammanfattning av en proposition, med paragraf i parentes i slutet av varje stycke, och byggbedömaren tar plats från det jag faktiskt undrar över: hur det går till från ansökan till slutbesked. Det avsnittet saknas fortfarande. Tekniskt samråd och slutsamråd förklaras bara i FAQ.

Jämfört med u-värde och grannemedgivande: u-värde har färre och kortare avsnitt och ingen lagtext i brödtexten. Grannemedgivande har samma paragraftäthet men förklarar i större utsträckning med exempel. Kontrollplanen har nu ungefär lika många förklarande avsnitt som grannemedgivande, och det är bra.

---

## Återkommande mönster

1. **Paragraf i parentes sist i stycket.** 46 paragraftecken i standardvyn. Alla fyra stycken i "Nya regler" och alla tre i "Kontrollplan behövs inte alltid" slutar med eller har "(10 kap. ... §)" mitt i. Spalten, "Gör inte det här" och varje etikett i "Därför blev svaret så" gör likadant. Grannemedgivande.astro har samma vana. För en husägare är det brus. En samlad källrad per avsnitt räcker.
2. **Samma rubriker på alla räknare.** "Därför blev svaret så", "Gör inte det här" och "Läs vidare" finns i kontrollplan.astro, grannemedgivande.astro och u-varde.astro (3 av 3). Här heter det "svaret" fast det är en plan. "Så räknar jag" är bytt här men finns kvar i de två andra.
3. **Samma gränssnittstext överallt, med räknarord.** "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar." står ordagrant på alla tre räknare och på bygglov-altan. Den inbäddade kortets "med dina värden ifyllda. Där får du hela svaret" och felmeddelandet "Rätta värdet där felet står, så visar jag svaret" hör också hit. Kontrollplanen har inga värden och inget svar.
4. **Samma förbehåll om nämnden.** "om nämnden inte (har) beslutar/beslutat annat" och "nämnden kan ändå kräva/besluta" står 4 gånger i standardvyn. Färre än förra gången, men fortfarande en refräng.
5. **Samma sak förklarad två gånger på sidan.** Byggbedömaren (två avsnitt, med hänvisning mellan dem), de två styckena för äldre ärenden (spalt och "Därför", ordagrant), "Använd kommunens mall" (gästhus och äldre ärenden, det går an).
6. **Länkar in till räknaren som tappar det läsaren redan sagt.** Bygglovsräknaren skickar bara "altan" (tak och värdefullt hus faller bort), och den inbäddade räknaren i källaren ger altan när inget är valt. Samma sak kan hända på fler sidor med inbäddade räknare.

## Det viktigaste att rätta, i ordning

1. "1:22347" på energiraden, både i planen och i "Därför".
2. Länken från /rakna/bygglov-altan/: bär med tak och värdefullt hus, och ta bort "om den kräver lov" när svaret är ja.
3. Den inbäddade räknaren i källaren: inget kryss ska inte ge en altanplan, och källarens åtgärder bör stå först eller vara förvalda.
4. Utskriften: låt intygandet följa med på sidan före, och låt tabellen börja på sida 1 utan att lämna halva sidan tom. Etikett på de två tomma linjerna under Anmälningar.
5. Felmeddelandet vid ogiltigt val och `<title>` ("Kontrollplan mall").
6. Glesa ut paragraferna i brödtexten och korta byggbedömaren till en mening. Använd platsen till ett kort stycke om gången från ansökan via tekniskt samråd och startbesked till slutbesked.
