# Retur: måla om huset, kostnad

Granskad 2026-09-21 av SEO-strategen, med både SEO-hatten och läsarhatten på samma genomläsning.

Sida: `src/content/guider/fasad/mala-om-huset.mdx` (`/fasad/mala-om-huset/`)
Underlag: `docs/briefer/underlag-mala-om-huset-2026-09-21.md`
Fras: måla om huset kostnad, 590 i månaden, vinnbarhet 4 (`docs/SOKORDSANALYS.md` rad 231)
Verktyget som bäddas in: `/rakna/mala-ute/`, formeln i `src/lib/kalkyl/mala-ute.ts`

**Inte godkänd än.** 30 punkter nedan, sorterade efter hur mycket de spelar roll. Punkt 1 till 9 är blockerande: de är fel tal, tal utan källa eller ett krav i briefen som inte är uppfyllt. Punkt 4 ensam stoppar publicering enligt regel 8 i `CLAUDE.md`, eftersom punkt sex i "bättre än ettan" bara är halvt infriad.

Radnumren gäller filen som den ser ut nu. Flyttas ett avsnitt (punkt 14) rör sig resten.

---

## Blockerande: fel tal, tal utan källa, krav som inte är infriat

**1. Rad 134, rotavdragstaket är fel räknat.** Det står "Taket är 50 000 kronor per person och år, så två ägare kan dra av på 100 000 kronor i arbete." 50 000 kronor är avdraget, inte arbetskostnaden. Två ägare får 100 000 kronor tillbaka, och det motsvarar en arbetskostnad på drygt 330 000 kronor. Som meningen står nu läser en husägare att två ägare bara får dra av på en nota upp till 100 000 kronor, vilket är en tredjedel av sanningen på den enda siffran där sidan ger pengar tillbaka. Skriv ungefär: "Taket är 50 000 kronor i avdrag per person och år. Två ägare som båda står på fakturan får alltså 100 000 kronor tillbaka, och så mycket arbete får inte plats på en fasad." Underlaget § 9.

**2. Rad 194 och 195, två tal som inte finns i underlaget.** "Beckers grundolja är övermålningsbar efter en halvtimme" och "Beckers trägrund är övermålningsbar efter åtta timmar vid 23 grader". Underlagets § 6 har bara åtgång för Primex Grundolja Trä Plus och Primex Trägrund Plus, ingen övermålningstid. Antingen läggs raderna till i underlaget ur databladen, eller så stryks de två tiderna. Ingen text på sajten bär ett tal som inte står i underlaget.

**3. Rad 140 och Faq-svar 2 på rad 218, fel källa på Alcros åtgång.** Sidan skriver "Alcro Bestå anger samma tal" och "enligt Beckers och Alcros datablad". Underlagets § 10 säger uttryckligen att Alcro Bestås åtgång kommer från återförsäljaren Lovely Home, eftersom Alcros faktablad inte gick att läsa. Skriv "enligt Beckers datablad, och återförsäljaren Lovely Home anger samma tal för Alcro Bestå" på båda ställena. Det är precis den typ av glidning som underlaget varnade för.

**4. Datum saknas på fem prisuppgifter. Det är punkt sex i "bättre än ettan" och den är därmed inte infriad.** Briefens sjätte punkt är "källa på varje tal, med datum på prislistorna". Hantverkskollen (juli 2026, rad 102) och Bygghantverkarna (april 2026, rad 102) har datum. Dessa har det inte:

- Rad 106, NLL Måleri. Underlaget: uppdaterad 2026-08-13.
- Rad 106, Antakus Måleri. Underlaget: 2025-08-28, alltså ett år gammalt, och det förklarar en del av att 90 till 150 kronor sticker ut.
- Rad 144, Stureby Maskiners lift, 1 245 kronor. Underlaget: 2025-01-15. Ett liftpris från januari 2025 presenteras nu som dagens.
- Rad 144, Hemställnings prislista. Underlaget säger odaterad, och det ska stå på sidan.
- Rad 140 och 142, butikspriserna 3 319, 2 299 och 699 kronor. Inget datum alls, varken på sidan eller i underlaget.

Enklast: datum i löptexten där firman nämns, och en mening efter färgpriserna, "butikspriserna är hämtade i september 2026". Färgpriser rör sig, och ettan förlorar just på att inte datera någonting.

**5. Rad 144, ställningspriset går att läsa på två sätt.** "för cirka 1 400 kronor i veckan, och 7 500 kronor med transport och montering" läses som att 7 500 kronor läggs ovanpå hyran. Underlagets § 7 säger att 7 500 kronor är hela kostnaden för en vecka med transport och montering inräknat. Skriv "eller 7 500 kronor för en vecka när transport och montering ingår". Samma sak på nästa mening om tvåplanshuset.

**6. Rad 144, liftpriset saknar tidsenhet.** "kostar från 1 245 kronor hos Stureby Maskiner" säger inte per vad. Underlaget har ingen enhet heller. Ta reda på om det är per dygn och skriv ut det, annars stryk talet. Ett pris utan enhet är inget pris.

**7. Rad 150, gör-det-själv-summan motsägs av sidans egen tidsåtgång.** Summan 16 000 till 20 000 kronor räknar ställningen som 7 500 kronor, alltså en vecka. Rad 148 säger att jobbet tar 4 till 6 helger plus en veckas semester, alltså två månader med ställningen stående. Vid 1 400 kronor i veckan blir ställningen snarare 15 000 kronor, summan närmare 24 000 till 28 000, och hela jämförelsen på rad 150 vänder. Antingen räknas ställningen för hela perioden, eller så står det uttryckligen att summan gäller en vecka och att varje vecka till kostar 1 400 kronor. Som det står nu är det den enda rad på sidan där en läsare kan fatta fel beslut på våra tal.

**8. Rad 150, "är arbetet 40 000 kronor efter avdrag".** Tabellen på rad 130 säger kring 42 000 kronor. Två tal för samma sak på samma sida. Skriv 42 000.

**9. Rad 146, "380 kronor om dagen plus moms".** Varenda annan siffra på sidan är inklusive moms, och rad 102 säger det rakt ut. Skriv infravärmaren på samma grund, alltså 475 kronor om dagen, eller säg varför just den raden är exklusive. `ROST.md` avsnitt 4: ett skrivsätt per mått på hela sajten.

---

## Räkningarna som sidan vilar på

**10. Rad 116, nivå tre går inte att följa efter.** "Lägg på nivå ett för själva målningen och grundfärg på hela ytan, så hamnar du kring 600 kronor per kvadratmeter." Läsaren ska då minnas 200 till 260 från fyra stycken tidigare och gissa vad grundfärg kostar. Det här är sidans egen siffra och den enda i hela SERP:en, så den ska gå att kontrollera rad för rad: 300 kronor för att få bort färgen, 200 till 260 för målningen, 25 till 50 för grundfärgen, i runda tal 600. Alla tre talen står i underlagets § 4.

**11. Rad 10, kortsvaret, nivå tre saknar sin märkning där den syns mest.** "Måste allt skrapas ner till rent trä hamnar du kring 60 000" står omärkt, medan brödtexten (rad 116), tabellfoten (rad 132) och Faq-svar 1 alla säger att det är en egen räkning. Kortsvaret är första skärmen och den troligaste snippeten. Skriv "där räknar jag med kring 60 000" eller motsvarande.

**12. Rad 161, tvåplanshusets 190 kvadratmeter går inte ihop.** Dubbla väggar är 201,6, plus 16 i gavelspetsar, minus 19 i fönster blir 199, inte 190. 190 kräver att antalet fönster stiger, och det säger sidan inte. Antingen skriv "kring 200", eller säg att ett tvåplanshus har ungefär dubbelt så många fönster och visa avdraget. Hela avsnittets poäng är att läsaren ska kunna räkna efter.

**13. Rad 106, NLL Måleris 625 till 875 kronor saknar att material tillkommer.** Underlagets § 3: "material 190 till 250 kr per kvm tillkommer". Utan den upplysningen ser avståndet till Hantverkskollens 200 till 420 större ut än det är, och just det avståndet är vad stycket ska förklara. Lägg till en bisats.

---

## Struktur, sökintention och intern länkning

**14. Flytta "Fasadytan räknar du ut med omkrets, höjd och gavelspetsar" (rad 152) upp, till efter nivåavsnittet och före "Typhuset på 100 kvadratmeter i kronor".** Det här är briefens första punkt i "bättre än ettan" och det enda ingen av de fem i toppen har. Nu ligger det som avsnitt fem av nio, efter att sidan två gånger har använt 100 kvadratmeter som om talet vore givet, och rad 124 tvingas skriva en lapp om att förklaringen kommer senare. Flyttat hamnar det i ordningen: vad det kostar per kvadratmeter, vilken nivå du har, hur många kvadratmeter du har, vad det blir i kronor. Det är också den ordning en läsare som just fått en offert läser i.

**15. Tre ställen där texten pratar om sig själv.** `ROST.md` avsnitt 3.
- Rad 124: "Hur jag räknar fram det visar jag strax." Försvinner av punkt 14.
- Rad 136: "De står i nästa avsnitt." Avsluta meningen efter "vem som än håller i penseln".
- Rad 171: "och verktyget nedanför räknar med exakt dem". Stryk. Verktyget kommer när läsaren behöver det, det behöver inte annonseras tolv rader i förväg.

**16. Rad 183, verktyget ligger ett stycke för sent.** Läsaren har förstått dagg och temperatur när hen har läst rad 177 ("Med två timmars torktid ska sista penseldraget ligga fyra timmar före solnedgången"). Sedan kommer ett stycke om målarmånader och sol (rad 179) innan formuläret. Flytta uppmaningen på rad 181 och `<Kalkylator namn="mala-ute" />` till direkt efter rad 177, och lägg årstidsstycket under verktyget. Då står formuläret i exakt det ögonblick frågan uppstår.

**17. Kannibalisering mot `/rakna/mala-ute/`, avgränsa fraserna.** Verktygssidans titel är "Kan du måla ute i dag? Temperatur och dagg" och den äger *måla ute temperatur* (140) och *måla utomhus luftfuktighet* (40). Den här sidan ska äga *måla om huset kostnad* (590), *måla fasad kostnad* (170), *måla fasad själv* (30) och *måla fasad temperatur* (140). H2:n på rad 169 och Faq-frågan på rad 219 säger båda "fasad" och är därmed rätt; håll det så och skriv inte in "måla ute" någonstans i rubrik eller Faq. Väderavsnittet får gärna kortas till vad en kostnadsläsare behöver: gränserna, daggen, årstiden. Mekaniken, alltså baklängesräkningen från solnedgången, bor på verktygssidan (dess rad 409 säger nästan samma sak som vår rad 177).

**18. Rad 179 och 185 återanvänder verktygets egna strängar nästan ordagrant.** "torkar färgen i penseln. Följ skuggan runt huset" är `GOR_INTE_VARM_PANEL`, och "en panel som tvättades i går ligger över det i flera dagar" är `GOR_INTE_VATT_VIRKE`. `ROST.md` avsnitt 3 förbjuder textblock som återanvänds mellan sidor, och undantaget gäller bara gränssnittssträngar. Skriv om båda med guidens egna ord.

**19. Rad 4, rad 10 och rad 100 inleds med samma mening.** Metabeskrivningen, kortsvaret och första H2:n säger alla "Målaren tar 200 till 420 kronor per kvadratmeter". Behåll den i kortsvaret, där den är svaret i första skärmen. Ge beskrivningen en annan ingång (förarbetet och spannet, eller "räkna fram din egen fasadyta"), och ge H2:n en egen, till exempel "Tvåhundra kronor för en välskött fasad, fyrahundra för en eftersatt". Längderna är annars rätt: title 32 tecken, seoTitle 43, description 152.

**20. Två interna länkar saknas.**
- Rad 177, på "daggpunkten, den temperatur där luftens fukt fälls ut": länka till den sida som äger begreppet, `/fukt/luftfuktighet-inomhus/`. Sidan definierar nu termen själv utan att peka på huset där den bor.
- Återlänk till `/fasad/dreva-fonster/`. Den sidan länkar hit (dess rad 132, "samma väderkrav som fasaden") och får ingenting tillbaka. Naturligast i väderavsnittet eller i fallen där du ringer en målare.

Utgående länkar i övrigt är på plats: `/rakna/rotavdrag/` på rad 134, `/rakna/kvadratmeter/` via kortet på rad 165, `/rakna/mala-ute/` via inbäddningen på rad 183.

**21. Rad 165 till 167, kvadratmeterräknaren är fel verktyg för sidans starkaste poäng, och det syns.** Rad 167 får erkänna att räknaren är byggd för rum och att gavelspetsarna läggs till för hand. Då gör verktyget inte längre jobbet åt läsaren, och punkt ett i "bättre än ettan" blir halv. Jag föreslår en egen kalkylator, `/rakna/fasadyta/`: husets längd och bredd, höjden till takfoten, takets lutning eller gavelspetsens höjd, antal fönster och dörrar med mått. Ut kommer kvadratmeter, liter färg för två strykningar och arbetskostnaden i de tre nivåerna med och utan rotavdrag. Egen sökfras (*räkna ut fasadyta*, *fasadyta beräkna*), delningslänk och förhandsvisningsbild som de andra verktygen. Ingen av de fem i toppen har något sådant (underlagets § 1), och det är den mest länkbara saken på hela ämnet. Läggs i `docs/VERKTYGSPLAN.md` som eget verktyg, inte som en utbyggnad av rumsräknaren. Fram till dess står rad 167 kvar som den är, den är ärlig.

---

## Rösten, läst högt

**22. Sidans centrala påstående sägs fem gånger.** Att förarbetet förklarar priset står på rad 4 ("förarbetet förklarar spannet"), rad 96 (två gånger: "Skillnaden sitter i förarbetet" och "det är den frågan alla priser hänger på"), rad 108 (H2: "Tre nivåer av förarbete förklarar hela prisspridningen"), rad 118 ("Det är hela förklaringen till att...") och rad 148 ("vilket är skälet till att offerterna ser ut som de gör"). Det är figuren "X avgör Y" i fem förklädnader, och tillägget i `ROST.md` avsnitt 3 sätter taket vid ett par per sida. Behåll rad 96 och rad 118, som är ingången och poängen. Skriv om rad 4, rad 108 och rad 148 så att de säger något nytt i stället.

**23. Rad 96, treklangen i ingressen.** "En fasad där färgen sitter kvar ska tvättas och målas. En där den flagar ska skrapas och grundas. En där allt måste bort ner till träet kostar..." Tre meningar med samma bygge på rad. Slå ihop de två första eller bryt takten i den tredje.

**24. Rad 212, fyra meningar i rad som börjar "Ring när".** Samma formel fyra gånger. Behåll två, gör om de andra två till vanliga meningar. Innehållet i avsnittet är bra och ska inte kortas, bara varieras.

**25. Rad 96 och rad 214, sidan öppnar och stänger på samma bild, med tre olika exempelsummor.** Ingressen säger "skilja sig åt med det dubbla", rad 118 säger 25 000 och 70 000, avslutningen säger 45 000 och 70 000. Välj ett par exempelsiffror och använd samma genom hela sidan, annars låter det som tre olika hus. Bokstödet mellan första och sista stycket är dessutom en formel; `ROST.md` vill att sidorna slutar mitt i ett råd, och rådet på rad 214 ("be om offerten uppdelad") räcker gott som sista ord.

**26. Rad 200, H2:n "Täckfärg, slamfärg eller oljefärg" är en uppräkning utan verb och säger inte vad avsnittet svarar på.** Svaret står på rad 202: du målar med samma typ som redan sitter där. Skriv rubriken som det svaret.

**27. Rad 206, mening utan verb i första satsen.** "Samma åtgång per liter och samma 7 grader, men natten måste också klara gränsen." `ROST.md` avsnitt 2: meningar med verb.

**28. Rad 106, "Utanför de spannen finns det också priser."** Går inte att förstå vid första läsningen. Något i stil med "Två firmor ligger långt utanför spannen, åt var sitt håll."

**29. Två ställen där ordet pekar på fel sak.**
- Rad 202, "frågar du tillverkaren av den nya färgen vad den kräver under sig". "Den" kan vara vilken som helst av de två färgerna. Namnge.
- Rad 148, "Hantverkskollen översätter det till 4 till 6 helger". Hantverkskollen översätter ingenting; de är en fristående källa med egna tal (underlagets § 3 mot § 7). Skriv "Hantverkskollen räknar i stället i helger".

**30. Rad 185 och rad 191 säger samma sak två gånger, och det ena talet saknar källa.** Båda handlar om att en tvättad panel behöver dagar på sig att komma ner till 16 procent. Behåll det ena, och om "flera dagar" står kvar ska det antingen ha en källa i underlaget eller märkas som min bedömning. Underlagets § 8 har bara gränsen 16 procent, inte torktiden.

---

## Inget att ändra

- **Sökintentionen.** Frasen är kommersiell undersökande, och sidan svarar med ett pris i första skärmen utan att sälja något. Inga affiliatelänkar, `produkter: []`, alltså ingen reklammärkning som saknas.
- **Kortsvaret** är fyra hela meningar i två stycken, med kronor och kvadratmeter, och det svarar på frasen. Rätt form enligt `ROST.md` avsnitt 2.
- **Metadatalängderna.** title 32 tecken (krav 15 till 40), seoTitle 43, description 152 (krav 120 till 155). title och seoTitle är skilda åt och H1 är läsbar.
- **Inga tankstreck** på hela sidan. Inget "innan du". Inga "X avgör Y" eller "X styr Y" i den ordagranna formen. Ett enda "alltså" (rad 173), och det är inte en inkilad ordboksförklaring.
- **Rubrikerna** följer inte de fem mallarna i tillägget till `ROST.md`, och de går att skumma i följd och förstå resonemanget av. Undantaget är rad 200, punkt 26.
- **Väderavsnittets tal stämmer med verktyget**, kontrollerat mot `src/lib/kalkyl/mala-ute.ts`: 7 grader på yta och luft (`minTempC` 7 för akrylat och oljealkyd), 80 procent luftfuktighet (`RF_STOPP_PROCENT`), klibbfri två timmar före daggen (`DAGG_MARGINAL_H`), 5 grader för slamfärg (`minTempC` 5), 16 procent fuktkvot (`FUKTKVOT_MAX_PROCENT`). Rad 175 om att torktiden dubbleras vid 15 grader stämmer med `FORDUBBLING_PER_C` 8, och rad 177 om fyra timmar före solnedgången är precis `solnedgång − 2 − 2`. **Alla fem Faq-svaren säger samma tal som `/rakna/mala-ute/`**, inklusive verktygssidans eget Faq-svar om kvällsmålning.
- **Typhusets räkning går ihop.** 36 meters omkrets, 100,8 kvadratmeter vägg, 16 i gavelspetsar, knappt 19 i fönster och dörrar, 98 avrundat till 100. Stämmer mot underlagets § 5, där den exakta gavelspetsen är 8,2 och fönstren 18,6. Avrundningarna är gjorda åt rätt håll och sidan visar varje steg.
- **Kostnadstabellen, rad 126 till 131.** Alla nio talen stämmer, och rotavdraget är räknat med 30 procent på arbetskostnaden rakt igenom. Källraden under tabellen skiljer på Hantverkskollens två rader och den egna tredje.
- **Färgräkningen, rad 140.** 100 × 2 / 7 ger 29 liter och tre tioliters. 3 × 2 299 ≈ 7 000 och 3 × 3 319 ≈ 10 000. Stämmer.
- **Nivå tre är märkt som egen räkning** på tre ställen i brödtexten och tabellfoten och i Faq-svar 1. Bara kortsvaret saknar märkningen, se punkt 11.
- **Punkt 1 till 5 i "bättre än ettan" finns i sidan.** Fasadytan från husets egna mått, tre nivåer med pris per nivå och faktor tre, vädret med tillverkarnas tal och verktyget inbäddat, rotavdraget med småhus mot bostadsrätt och hyra mot montering, materialkostnaden räknad ur databladen med Falu Rödfärg som jämförelse. Punkt 6 är halv, se punkt 4.
- **Rad 120, blästringsvarningen.** Kort, källbelagd, och den står där en läsare på nivå tre är som mest frestad. Den ska vara kvar precis där.
