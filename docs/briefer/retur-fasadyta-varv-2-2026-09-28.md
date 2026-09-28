# Läsarens retur, varv 2: fasadräknaren och guiden om att måla om huset, 2026-09-28

Jag har läst sidorna som en husägare som ska måla om. Egen dev-server på port 4430 är nu stängd, och jag har inte byggt något. Jämförelsesidorna var /rakna/u-varde/ och /el/tillaggsisolera-vind/.

Lästa vyer av /rakna/fasadyta/: standard (lockpanel, akrylat, ommålning), slät panel, skrapat, nytt trä (skicket "Ner till rent trä"), ny kulör, byte av färgtyp, oljealkyd, slamfärg på slät panel, puts, tegel, mansard (bryt 2, indrag 1, nock 3) och mansard med tom brytpunkt, samt de ogiltiga värdena längd 70, nockhöjd "abc" och 2,5 fönster. Den nya åtgångstabellen har jag läst rad för rad. Därefter läste jag /fasad/mala-om-huset/ med den inbäddade räknaren.

Inga tankstreck i den synliga texten på någon av sidorna.

## Talen: säger räknaren och guiden samma sak nu?

| Fall | Guiden | Räknaren | Stämmer det? |
|---|---|---|---|
| Fasadyta | "98 kvadratmeter, och jag rundar till 100", färgen räknas sedan på "husets 98 kvadratmeter" | 98,2 m² | Ja. Guiden räknar arbetet på 100 och färgen på 98, och säger det. |
| Lockpanel, akrylat | "34 liter, fyra burkar om 9 liter" | Rubrik "Köp 36 liter", stort tal 36 liter, "Det går åt 33,7 liter". Kortsvaret: "34 på lockpanel … fyra burkar om 9 liter, som blir 36" | **Ja, rättat.** 34, 36 och 33,7 hänger nu ihop och förklaras. |
| Slät panel, akrylat | "28 liter … tre burkar om 9 liter och en om 2,7" | "28,1 liter går åt", "Köp 29,7 liter" | **Ja, rättat.** |
| Slamfärg, slät | 33 liter, tre om 10 och en om 5 | 32,7 går åt, köp 35 | Ja. |
| Slamfärg, lock | 39 liter, fyra om 10 | 39,3 går åt, köp 40 | Ja. |
| Kronor för lockpanel | "Den övre kanten räknar jag med Beckers tiolitersburkar" | Inga kronor | **Ja, rättat.** Bytet av märke och burkstorlek sägs nu. |
| Åtgång per liter | "6 till 8" | 7 på målat, 6 på sågat, och regeln säger "den nedre kanten för ditt underlag … mina tal ligger inom båda" | **I huvudsak rättat.** Men raden "Vilket tal i tillverkarens spann jag tar | Lägsta talet" i antagandetabellen säger fortfarande det gamla. Den som har läst 6 till 8 i guiden och "Lägsta talet" i tabellen undrar varför det står 7. |
| Täckfärg på skrapat | "Den skrapade ytan tar dessutom mer grundfärg, för bart trä suger." | "det är grundfärgen som tar upp det, så täckfärgen räknar jag som på målat trä" | **Ja, rättat.** Samma förklaring på båda sidorna. |
| Grundfärg på skrapat, mängd | "1,7 liter för varje 10 kvadratmeter" bart trä | "1,7 liter för varje 10 m² bart trä" | **Ja, rättat.** |
| Grundfärg på skrapat, var | Nivå två: "Beckers vill ha grundfärg på hela fasaden när skicket är dåligt". Materiallistan: "på hela fasaden om skicket är dåligt". Steg 5 säger detsamma. | "Har du skrapat grundar du bara de partier där träet är bart" | **Nej, ny spricka.** Skicket i räknaren heter "Färgen flagar, stora ytor ska skrapas", och det låter som dåligt skick. Guiden säger hela fasaden, räknaren bara de bara partierna. |
| Grundfärg vid ny kulör | Nämns inte. Steg 5 räknar upp bart trä, dåligt skick och nytt virke. | Hela fasaden, 16,8 liter, "som Beckers och Alcro skriver" | **Nej.** Den som byter kulör efter guiden budgeterar inte två burkar grundfärg. Guidens 8 000 till 11 000 kronor täcker dem inte. |
| Tvåplanshus | "landar kring 200" | FAQ: 199 m², 68 liter på lock, 57 på slät | Ja. |

Kronorna, ställningsveckorna, summorna 22 000 till 29 000 och 30 000 till 37 000 och "50 timmar med infravärmaren" har jag räknat om, och allt stämmer.

## /rakna/fasadyta/

### Rättat sedan förra varvet

- "c 225 mm" har blivit "225 millimeter, räknat från mitten av en lockbräda till mitten av nästa". Det går att förstå nu.
- Kortsvaret förklarar skillnaden mellan åtgång och köp: "går det åt 28 liter på slät panel och 34 på lockpanel, och till lockpanelen köper du fyra burkar om 9 liter, som blir 36."
- Hundradelarna är borta i spalten: "36 liter", "Det går åt 33,7 liter", "Köp 66 liter silikatfärg till putsen".
- Tinova-meningen som motsade regeln är borta.
- "Gör inte det här" börjar nu med "Måla inte ur en burk i taget". Rubrik och råd hänger ihop.
- Meningen om strykningar som "blir tunnare än de har tänkt sig" har jag inte hittat i någon vy.
- "blir litern" har blivit "blir antalet liter".
- "Omkretsen 36,0 m" och "15,0 grader" har blivit "36 m" och "26,6 grader".
- Pulpettaket: "höjden gånger summan av bredden och längden" går att läsa på bara ett sätt.
- Skicket: "Färgen sitter kvar och behöver bara tvättas" är en hel mening.
- Grundfärgen vid skrapat står nu i beskedets rad: "Där du har skrapat fram bart trä behövs grundfärg utöver det, 1,7 liter för varje 10 m²." Vid nytt trä och ny kulör har grundfärgsraden fått ett verb: "Köp två burkar om 9 liter och en om 2,7 liter."
- Spillraden: "Påslag för spill, där Fasadum råder till 10 till 15 procent | 0 % | Antagande." Nu ser man varför källan står där.
- Feltexten för "abc": "Skriv höjden från takfoten upp till nocken i meter." Gränserna med hundradelar är borta.
- Kortet i guiden säger "räknaren", inte "kalkylatorn".

### Står kvar

- **Ogiltigt värde ger fortfarande en köpuppmaning.** Längd 70, nock "abc", 2,5 fönster och mansard med tom brytpunkt visar alla "Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det." och direkt under det, i stor fet stil, "Köp 36 liter akrylatfärg i fyra burkar om 9 liter". Den som skriver 70 meter och bara läser rubriken tror att 36 liter räcker till ett hus som är sju gånger så långt. Det här var punkt 3 av 5 förra gången.
- Antagandetabellen: "B · t; t · (B + L); 0; 2 · ((B + b) / 2 · t1 + b · t2 / 2)". Ingen bokstav förklaras, och raden står i standardvyn.
- "1 + 2 · 22 / 225 = 1,20" i tabellen, men "1,2" i spalten och i reglerna. Samma tal skrivs fortfarande på två sätt.
- "Burkstorlekar för täckfärg och grundfärg, och för slamfärg. Nordsjö Tinovas mellanstora burk är 2,5 liter, lite mindre än 2,7." En reservation står fortfarande i kolumnen "Vad".
- Källistan: "…, 2026-09-28" på 13 rader och "K-Bygg, Falu Rödfärg Original 10 l, september 2026" på en. Det står fortfarande ingenstans vad datumet betyder, och nu finns två sätt att skriva det. U-värdessidan gör likadant, så det är sajtens sätt, men det är lika obegripligt där.
- Formuläret heter "Oljealkydfärg", beskedet säger "Köp 36 liter oljefärg". Två namn på samma val.
- Legenden "Färgen" med skicket "En annan sorts färg än den som sitter där" är fortfarande tvetydig: menas den gamla eller den nya färgen? Beskedet svarar allmänt: "Sitter det slamfärg där ska väggen ha slamfärg igen, och gammal oljefärg vill ha grundfärg under en akrylatfärg."
- "Pulpettaket stiger … m över gaveln" finns kvar i texten (jag läste strängen men provade inte pulpettaket i det här varvet).

### Nytt som stoppar läsningen

- "Talen gäller huset som formuläret börjar med, 98,2 m² slät panel, och bygger på den nedre kanten i tillverkarnas datablad". Formuläret börjar med **lockpanel**, inte slät panel. Meningen stämmer inte med sidan den står på.
- Åtgångstabellens rubrik är "Färg och burkar till 98 m² slät panel", men tabellen har också raderna "Silikatfärg på puts" och "Omålat tegel". Puts och tegel är inte slät panel. Rubriken och texten under säger dessutom 98 respektive 98,2.
- "Ytan jag målar gånger antalet strykningar, delat med hur långt en liter räcker, blir antalet liter. Det avrundar jag till två decimaler." Sidan visar överallt en decimal, till exempel 33,7 och 28,1. Meningen beskriver en äldre version av räknaren.
- Regeln säger "7 m² per liter på trä som målats förut **eller grundats** och till 6 på nytt sågat trä", och om skrapat trä "det är grundfärgen som tar upp det, så täckfärgen räknar jag som på målat trä". Men på nytt trä, som också grundas först, räknar räknaren täckfärgen med 6: "Det går åt 39,3 liter till två strykningar, med 6 m² per liter". Med sidans egen logik borde det bli 7. Den som läser noga fastnar här.
- Två regler i rad säger samma sak: "Beckers Perfekt Fasad anger 6 till 8 utan att skilja på underlaget." och i nästa stycke "Beckers Perfekt Fasad anger 6 till 8 för alla underlag". Det räcker med en gång.
- "Det bara träet suger mer, men det är grundfärgen som tar upp det". "Det bara träet" låter stelt, och "tar upp det" kan syfta på träet eller på sugningen. Skriv "Bart trä suger mer, men det suget tar grundfärgen".
- Beskedet vid nytt trä: "Grundfärgen stryks en gång före täckfärgen, och hur mycket den tar står längre ner." Talet står två rader längre ner. Skriv hellre talet direkt: "och till den går det åt knappt 20 liter".

### Räknaren som räknare

- **Kortet i guiden**: "Mät huset runt om och upp till takfoten, så räknar jag ut väggytan med gavlarna och hur många burkar färg den tar." Det går att förstå utan att ha sett sidan. Knappraden "Knappen tar dig till räknaren med dina värden ifyllda. Där får du hela svaret och ser vad det bygger på." är tydlig.
- **Beskedet** säger vad jag ska göra i alla giltiga vyer: "Köp 29,7 liter akrylatfärg …", "Köp 66 liter silikatfärg till putsen", "Låt de 98,2 m² tegel vara omålade", "Fråga tillverkaren vad den nya färgen kräver innan du köper färg till 98,2 m²". Vid ogiltiga värden säger det fortfarande "Köp" om ett hus som inte är mitt, och det är räknarens största kvarvarande fel.
- Grundfärgen vid skrapat syns nu i beskedets rad. Men rubriken "Köp 36 liter akrylatfärg" nämner den inte, så den som bara läser rubriken missar den fortfarande. Det är ett mindre problem nu än förra gången.
- Puts: "Burkarna räknar jag inte, för jag har inga säkra storlekar på silikatfärg." Den är ärlig och bra.
- Tegel: "Färg direkt på tegel ökar risken att teglet fryser sönder, skriver Alcro, eftersom fukten samlas i fogarna." Den är tydlig och ger ett skäl.

### Människa eller mall

Den övre halvan, med ingress, kortsvar, beskedet, spalten och de fyra frågorna, låter nu som en person som har mätt ett hus och räknat färg förut. Det gäller särskilt sockelfrågan och "Det är ytan en målare tar betalt för". Den nedre halvan är fortfarande en revisionsberättelse, där varje beslut redovisas två gånger (i "Därför blev svaret så" och i "Så räknar jag") och sedan en tredje gång i antagandetabellen. U-värdessidan är byggd på samma sätt, så det är sajtens form och inte bara den här sidans. Men här har tabellen dessutom börjat säga emot sidan själv (slät panel, två decimaler, lägsta talet).

**Betyg: 4 av 5** (förra varvet 3). Talen hänger ihop och spalten går att lita på. Det som håller kvar betyget är "Köp 36 liter" vid felaktiga värden och tre meningar i "Så räknar jag" som inte stämmer med sidan.

## /fasad/mala-om-huset/

### Rättat sedan förra varvet

- Beskrivningen: "En offert kan bli tre gånger så dyr som en annan för samma hus, och det är förarbetet som gör det." Det är svenska nu.
- Kortsvaret har fått med ställningen: "Gör du jobbet själv kommer ställningen och verktygen till, och då landar du kring 22 000 till 29 000 kronor."
- "Nu till frågan ingen prissida bryr sig om … Vädret." är borta. Nu står det "Vädret förstör fler fasader än ett slarvigt förarbete, och där är tillverkarna ovanligt eniga om talen." Det är bättre.
- "fäller de flesta kvällar" och "natten som fäller" har blivit "Det är daggen som sätter stopp de flesta kvällar" och "På hösten är det oftast natten som sätter stopp."
- Oljefärgen: "samma gräns på 7 grader, dag och natt, precis som akrylatfärgen." Motsägelsen är borta.
- Semester eller målare: "Där sparar du mest på att göra det själv, men jobbet är också så tungt att jag hade ringt en målare." Det stämmer nu med "Fallen där jag hade ringt en målare".
- Färgen räknas på 98 kvadratmeter, så slät panel blir 28 liter både i guiden och i räknaren.
- Kronorna för lockpanel förklarar bytet till Beckers tiolitersburkar.
- Grundfärgen per 10 kvadratmeter bart trä är samma tal som i räknaren.
- Daggen: "Beckers vill att färgen är klibbfri minst två timmar innan det händer. Med två timmars torktid ska sista penseldraget ligga fyra timmar före solnedgången." Nu går det att räkna ut 2 + 2. Men att daggen kommer just vid solnedgången sägs fortfarande inte rakt ut, bara att panelen kyls "när solen går ner".

### Står kvar

- "Ett tvåplanshus med samma bottenplatta har det dubbla på väggarna, samma gavelspetsar och lika många fönster i räkningen, och landar kring 200." Meningen är fortfarande hoppressad. Jag fick läsa "lika många fönster i räkningen" två gånger.
- "Fråga i stället om fönsterfoder och knutbrädor ingår i priset". Det är fortfarande oklart vad "i stället" syftar på.
- "Slamfärg är billigare i kronor och dyrare i liter." Vändningen fungerar inte. Litern är billigare, men det går åt fler liter. Senare står det att "litern kostar en fjärdedel", och då säger meningarna emot varandra.
- "Det korta svaret är att du målar med samma typ av färg som fasaden redan har." Det är en formel, och sidan har redan ett kort svar överst.
- "Vill du byta typ frågar du tillverkaren av den nya färgen vad den nya färgen kräver under sig". "Den nya färgen" står två gånger i samma mening.
- "Är det redan september är en målare som kan sin färg värd pengarna, för hen vet vilka dagar som duger, och du får bara några." Det är oklart vad "och du får bara några" syftar på: dagar eller målare?
- "Och vet du inte vilken färg som sitter där kostar fel färg ovanpå nivå tre nästa gång." Jag förstod den inte vid första läsningen den här gången heller. Den behöver två meningar.

### Nytt eller nu synligt

- Nivå två: "Beckers vill ha grundfärg på hela fasaden när skicket är dåligt." Materiallistan: "Grundfärg: På allt bart trä, och på hela fasaden om skicket är dåligt." Räknaren grundar bara de bara partierna vid "Färgen flagar, stora ytor ska skrapas". Guiden och räknaren säger alltså olika saker om samma fasad. Antingen ska räknaren säga när hela fasaden ska grundas, eller så ska guiden säga vad "dåligt" betyder.
- Guiden nämner aldrig grundfärg vid kulörbyte, men räknaren lägger på två burkar. Någon mening under "Måla med samma sorts färg som redan sitter där" eller i steg 5 skulle räcka.
- "Enplanshuset ovan har 100 kvadratmeter fasad." Tre stycken tidigare står "Det är 98 kvadratmeter, och jag rundar till 100", och i nästa avsnitt "husets 98 kvadratmeter". Det är förklarat, men man hoppar mellan 98 och 100 fyra gånger på en skärmlängd.
- Kortsvaret: "då landar du kring 22 000 till 29 000 kronor". Talet gäller enplanshuset i gott skick, men kortsvaret säger inte det. Den med en flagande fasad läser det som sitt pris.
- Ordet "sitter" förekommer 14 gånger på sidan, formulärets etiketter inräknade (förra varvet räknade jag 10 i brödtexten). "sitter där" står fyra gånger, bland annat i H2:n. "Skillnaden sitter i förarbetet" och "Här sitter pengarna" står i de två första avsnitten.

### Det som är bra

Inledningen med två offerter "utan att någon av målarna försöker lura dig", "Jag tror inte att någon av dem ljuger", uträkningen av nivå tre, "Det är en sommar" och "Fallen där jag hade ringt en målare" låter som en granne som har gjort jobbet. Varje kronbelopp går att räkna efter, och alla stämmer. Sidan håller sig nu mycket bättre till sina egna tal än förra gången.

### Människa eller mall

Mest människa. Det låter som vindsguiden, som också har korta klämmar efter långa stycken ("Två tal, och de ligger långt ifrån varandra.", "Det första går att räkna på."). Klämmarna är färre och mindre påträngande än förra gången. Det som stör nu är inte tonen utan sju meningar som fortfarande kräver en andra läsning, och att grundfärgen beskrivs olika på guiden och räknaren.

**Betyg: 4 av 5** (förra varvet 4). Den är klart bättre än förra gången, men inte en femma så länge de sju meningarna ovan står kvar och grundfärgen säger emot räknaren.

## Återkommande mönster

1. **"Ingen X anger" har blivit "jag har inget tal för".** Källmönstret från förra varvet har krympt i guiden från 5 till 3 ("för ingen färgtillverkare anger något tillägg", "Ingen målerifirma jag hittat publicerar ett pris", "Ingen av prissidorna berättar"). På räknarsidan har det bytt form: "ingen av dem anger hur stor del av fasaden det blir" (grundolja, i standardvyn), "Svenskt Trä anger inga mått för dem, så jag har inget att räkna på" (slät panel), "Hur mycket slamning det går åt har jag inget tal för" (tegel), "för jag har inga säkra storlekar på silikatfärg" (puts), "färgtillverkarna lägger inget påslag i sina tal" (spill) och "Färgtillverkarna räknar på en plan vägg" (lockpanel). Det blir sex sätt att säga "det finns ingen källa". Var för sig är de ärliga, men i en vy som slät panel kommer två i rad.
2. **Samma regel tre gånger på räknarsidan.** Lockbrädornas kanter står i kortsvaret, beskedet ("Lockpanelen har mer att måla än fasadytan"), "Därför"-listan, regeln, "Så räknar jag" punkt 6 och antagandetabellen, alltså sex gånger. Beckers 6 till 8 står två gånger i två stycken i rad. Grundfärgen per 10 m² står i beskedet, spalten, uträkningen, regeln, "Så räknar jag" och åtgångstabellen. På u-värdessidan är det likadant, så det är sajtens form. Men här blir sidan dubbelt så lång som frågan i H1 kräver.
3. **Egen räkning som ritual.** I guiden står det fyra gånger ("jag har räknat själv", "Det är min räkning och ingen prislista", "Den tredje raden är min egen räkning", "Femtedelen har jag räknat fram själv"), och på räknarsidan en gång ("tillägget är min egen räkning"). Det är samma antal som förra gången. Vindsguiden klarar sig med en.
4. **"sitter" som förklaringsord.** 14 gånger på guidesidan och 3 på räknarsidan. Vindsguiden och u-värdessidan använder ordet också ("Välj materialen som sitter där", "Skillnaden sitter i den gamla ullen"), så det börjar låta som sajtens ord, inte Christians.
5. **"lite mer" som tröst.** På räknarsidan: "du får lite färg över" (halvvalm), "får du lite mer än jag räknar med" (burkar), "burkarna ger oftast lite över ändå" (spill) och "Faserna och spåren ger lite mer yta" (slät panel). Fyra gånger. Förra varvet räknade jag två.
6. **"står längre ner" som hänvisning.** Beskedet vid nytt trä och ny kulör: "hur mycket den tar står längre ner". Tegel: "står det längre ner vad som gäller". U-värde: "Hur snart ullen har betalat sig står längre ner, under kronorna." Det står tre gånger på två räknare. Skriv talet i stället för att peka på det.
7. **Tabeller som motsäger sidan.** Åtgångstabellen säger "slät panel" om formuläret som börjar med lockpanel, "Det avrundar jag till två decimaler" står över tal med en decimal, och "Lägsta talet" står i antagandetabellen under en regel som säger "nedre kanten för ditt underlag". Den sortens fel uppstår när sidan skrivs om i omgångar och tabellerna inte följer med.
8. **Klämmar efter långa stycken.** Guiden: "Här sitter pengarna.", "Från 200 till 600 kronor är tre gånger.", "Det är en sommar.", "Skillnaden på ett enkelt hus är några tusenlappar och en sommar." Vindsguiden har samma grepp, så det är rösten. "Vädret." är borta, och det var rätt beslut. "en sommar" står två gånger på samma sida.
9. **Rubriker "X, Y och Z" eller med apposition.** Fyra av nio H2 i guiden är byggda så, och det är oförändrat sedan förra varvet.
10. **Källistan med oförklarat datum.** 13 rader med "2026-09-28" och en med "september 2026" på räknarsidan, och 8 datum på u-värdessidan. Det är ett sajtmönster. En rubrikrad som "Läst" skulle lösa det på alla räknare.
11. **Tankstreck:** inga på någon sida.
12. **Bilder:** ingen bild används på mer än en sida. Räknarsidans sidhuvudbild har tom alt, och skissen har alt och en bildtext som stämmer med talen (98,2 m²).

## Det viktigaste att rätta

1. Vid ogiltigt värde ska beskedet inte säga "Köp 36 liter". Visa varningen som rubrik, eller skriv "Så här blir det med standardhuset" i stället för en köpuppmaning. Det här står kvar från förra varvet.
2. Grundfärgen vid skrapat: guiden säger hela fasaden när skicket är dåligt, räknaren säger bara de bara partierna. Välj en av dem, eller säg på båda sidorna när det ena eller det andra gäller.
3. Rätta de tre meningarna i "Så räknar jag" som inte stämmer med sidan: "98,2 m² slät panel" (formuläret börjar med lockpanel), "två decimaler" (sidan visar en) och "Lägsta talet" (regeln säger nedre kanten för underlaget).
4. Täckfärgen på nytt trä: räkna med 7 efter grundfärg, som regeln säger, eller förklara varför nytt grundat trä får 6 när skrapat grundat trä får 7.
5. De sju kvarvarande meningarna i guiden, framför allt "Slamfärg är billigare i kronor och dyrare i liter" och "kostar fel färg ovanpå nivå tre nästa gång".
