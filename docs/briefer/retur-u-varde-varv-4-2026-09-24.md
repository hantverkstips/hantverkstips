# Läsarens retur, U-värde, varv 4, 2026-09-24

Lästa sidor, i ordning: `src/content/guider/el/tillaggsisolera-vind.mdx` (jämförelse), sedan `src/content/kunskap/el/u-varde.mdx`. Jag har läst dem som om jag kom från vindsguiden via länken "U-värde" och ville förstå talen i Rockwools tabell.

## src/content/kunskap/el/u-varde.mdx

### Meningar som tar stopp

- "Ett fönster med U-värdet 0,9 och en yttervägg med 0,18 är mätta på samma sätt" (rad 64). "Mätta" läser jag först som att de är mätta, alltså inte hungriga. Den allra första meningen på sidan ska inte behöva läsas två gånger. "mäts på samma sätt" löser det.
- "Det är bättre än tabellens 0,30 och 0,40 för ett hus från sextio- och sjuttiotalet, och vinden är det lättaste stället att fylla på." (rad 92). Här jämförs ett snitt för alla småhus med tabellraden för ett enda årtionde, och bisatsen om vinden hänger inte ihop med första halvan. Jag förstår inte vad jag ska dra för slutsats.
- "Att isolera vindsbjälklaget och komplettera fönster är just de åtgärder Boverket själv tar som exempel i sitt råd till reglerna." (rad 98). Meningen före säger "Byter du fönster", men Boverkets exempel är "komplettera". Är ett fönsterbyte samma sak som att komplettera? Uttrycket "sitt råd till reglerna" är också myndighetsspråk som jag inte känner igen.
- "Kravet får sänkas om kostnaden blir orimligt hög jämfört med nyttan, om energianvändningen bara minskar obetydligt, eller av tekniska skäl eller hänsyn till husets kulturvärden." (rad 110). Vem avgör det? Är det jag, kommunen eller en kontrollant? Sidan säger inte om jag behöver fråga någon.
- "Motståndet mäts i m²K/W, den omvända enheten mot U-värdets, och här är högre bättre." (rad 116). "Den omvända enheten mot" låter översatt. "U-värdets enhet upp och ner" säger samma sak på vanlig svenska.
- "För isolering står tillverkarens värde för en namngiven produkt, eftersom det är den du köper. Där det inte finns någon produkt står Energimyndighetens spann." (rad 134). Två "står" på två meningar, och båda handlar om tabellen och inte om saken. Det låter som en instruktion till den som gjorde tabellen.
- "Luftspalten bakom panelen och allt utanför den räknas inte, eftersom uteluften strömmar in där." (rad 154). Jag förstår meningen, men i räkningen efteråt står det ändå "Luften ute ger 0,04", och det är talet för en vägg som står direkt mot uteluften. Om spalten och panelen tas bort, är 0,04 fortfarande rätt? Se räkneexemplet nedan.
- "Som om regel och ull var blandade till ett enda material: ett skikt som är 88 procent ull med lambda 0,037 och 12 procent trä med 0,14 får lambdavärdet 0,0494. Med det skiktet blir summan av motstånden 2,655." (rad 169). Här fattas ett steg. Hur 2,655 kommer fram ser jag inte förrän jag själv räknar 0,120 / 0,0494 = 2,43 och lägger till 0,13 + 0,054 + 0,04. Alla andra steg på sidan visar divisionen, men just det här gör det inte.
- "Standarden räknar sedan väggen på två sätt och tar medelvärdet av de två motstånden." (rad 166). Jag får inget skäl till att man gör så. En halv mening, till exempel att det ena sättet ger för bra tal och det andra för dåliga, hade räckt.
- "Energimyndigheten anger 0,30 till 0,38 för en sådan vägg, så räkningen stämmer." (rad 172). Tabellen på samma sida, från samma myndighet, säger 0,40 för 1961 till 1980, och räkneexemplet för fasaden på rad 190 utgår också från 0,40. Då har jag tre tal för samma vägg: 0,37, 0,30 till 0,38 och 0,40. Vilket av dem ska jag räkna med?
- "Sätter du 50 mm ull på insidan i ett lager utan reglar som bryter det" (rad 172). Hur sitter ullen fast utan reglar? Som husägare vet jag inte hur man gör det, och jag får ingen länk.
- "Kronorna räknar jag med 2,40 kr per kilowattimme." (rad 188). Ordföljden är konstig. "I kronor räknar jag med 2,40 kr per kilowattimme" eller "Jag räknar med 2,40 kr per kilowattimme".
- "Isolerar du den till Boverkets 0,18 sjunker U-värdet med 0,22" (rad 190). Hur mycket isolering det krävs står inte. Utan tjockleken kan jag inte jämföra besparingen med vad arbetet kostar, och det kunde vindsguiden visa.
- "beläggningen finns i en hård och en mjuk variant" (rad 215). Den mjuka varianten kommer aldrig tillbaka, så jag undrar vad den är till för.
- "Energimyndighetens fönsterguide räknar värmeförlusten enklare, med 21 grader inne och 8 ute under årets alla timmar." (rad 219). Hela stycket är en omväg. Om samma fönster hade räknats med gradtimmarna, ungefär 134 kWh mot 170, hade jag sett skillnaden direkt. Nu får jag ett tal utan motsvarighet.
- "i ett annars välisolerat hus betyder de mer än man tror, enligt Energimyndigheten" (rad 227). "Mer än man tror" är en tom fras. Hur mycket mer är det?
- "Förklarar miljömärkningen Svanen" (rad 200). Omvänd ordföljd med källan sist låter som en tidningsnotis och sticker ut på en sida som annars skriver "enligt".
- FAQ: "med den blev en sjuttiotalsvägg med 12 procent trä en femtedel sämre än räkningen genom bara ullen" (rad 240). Det stämmer inte med exemplet. 0,37 mot 0,29 är ungefär 28 procent sämre, alltså mer än en fjärdedel och inte en femtedel.

### Räkneexemplet, omräknat

Jag har räknat om varje steg med miniräknare.

| Steg | Sidan | Mitt resultat | Kommentar |
|---|---|---|---|
| Gips 0,013/0,24 | 0,054 | 0,0542 | stämmer |
| Ull 0,120/0,037 | 3,243 | 3,2432 | stämmer |
| Summa mellan reglar | 3,467 | 3,467 | stämmer |
| U mellan reglar | 0,29 | 0,2884 | stämmer |
| Trä 0,120/0,14 | 0,857 | 0,857 | stämmer |
| Summa genom regel | 1,081 | 1,081 | stämmer |
| U genom regel | 0,92 | 0,9251 | ska avrundas till 0,93 |
| Vägt U, bredvid varandra | 0,365 | 0,3648 (0,3656 med sidans avrundade 0,29 och 0,92) | en läsare som räknar med de visade talen får 0,366 och 2,735, inte 2,741 |
| Blandat lambda | 0,0494 | 0,04936 | stämmer |
| Summa, blandat | 2,655 | 0,13+0,054+2,431+0,04 = 2,655 | stämmer, men 2,431 visas inte |
| Medelvärde | 2,698 | 2,698 | stämmer |
| U hela väggen | 0,37 | 0,3706 | stämmer |
| +50 mm, 0,050/0,037 | 1,351 | 1,3514 | stämmer |
| Summa och U | 4,049 och 0,25 | 4,049 och 0,247 | stämmer |

Övriga räkningar: 108 W, 240 W, 126 W, 40 W (40,5), 1 964 kWh och 4 700 kr, 250 kWh och 610 kr, drygt 6 000 kr, 89 280, 71 400, 120 500 och 170 kWh stämmer alla.

Kan jag följa räkningen hela vägen? Nästan. De fem numrerade stegen är mycket bra och går att räkna efter med penna. Jag fastnar på tre ställen:
1. Steget till 2,655 hoppar över divisionen 0,120/0,0494 = 2,431.
2. Om jag räknar vidare med de avrundade 0,29 och 0,92 som sidan visar får jag 2,735 i stället för 2,741. Det är litet, men jag tror då att jag har räknat fel. Antingen visar sidan tre decimaler i U-stegen (0,288 och 0,925) eller så skriver den att den räknar med oavrundade tal.
3. Rsi och Rse ute. Sidan tar bort luftspalten och panelen men använder ändå 0,04 för uteluften. Jag har för mig att standarden i det fallet räknar med stillastående luft även på utsidan, alltså samma 0,13 som inne. Det vet jag inte säkert som husägare, men det bör kontrolleras mot Svenskt Trä. Med 0,13 ute blir väggen ungefär 0,36 i stället för 0,37, så slutsatsen står sig, men metoden bör stämma.

Till det kommer femtedelen i FAQ:n, som är fel, och talen 0,37, 0,30 till 0,38 och 0,40 som inte går ihop.

### Svarar Boverketavsnittet på om vindsisolering och fönsterbyte räknas som ombyggnad?

Ja, direkt och i första meningen: "Byter du fönster eller tilläggsisolerar vinden bygger du om i Boverkets mening." Det är det tydligaste svaret på sidan, och stycket om att talen går från mål till gräns ("det är inte talen som ändras utan vad de betyder") är riktigt bra.

Tre saker saknas för att jag ska kunna agera på svaret:
- Belägget gäller "komplettera fönster", medan påståendet gäller "byter fönster". Antingen citerar sidan en källa som säger byte, eller så står det att komplettering och byte behandlas lika.
- Övergångsstycket nämner bygglov och anmälan. Behöver jag göra en anmälan för att isolera vinden eller byta fönster? Om svaret är nej, vilket jag tror, ska det stå. Annars blir jag orolig i onödan.
- Den praktiska slutsatsen skrivs aldrig ut. Börjar jag isolera vinden före den 1 oktober 2027 är 0,13 fortfarande bara ett mål. Det är det viktigaste en husägare vill veta, och nu måste jag lista ut det själv genom att lägga ihop två stycken.

### Människa eller mall

Det låter mest som en människa som förklarar. Glödlampan på 100 watt, det gamla fönstret som släpper ut mer än hela den nya väggen, "Tegel saknas i tabellen, eftersom jag inte har hittat ett värde med källa" och "något sådant krav har jag inte hittat" är meningar som bara en person skriver. Mallen hörs i den långa följden av tabell och sedan "Källa:" (fem gånger) och i att varje nytt ord förklaras med en inskjuten bisats på samma sätt. Mitten, avsnittet om Rsi och lambdatabellen, läses mer som en lärobok än som Christian.

Det som är bra: inledningen med 0,9 mot 0,18 är den bästa krok jag har sett på sajten, natten med 30 graders skillnad gör enheten begriplig, de numrerade räknestegen, fönsterdelen om Ug, Uf och Uw, och att sidan ärligt säger vad den inte har hittat. Sidan saknar en bild. En enkel skiss av väggens skikt med motstånden utskrivna hade gjort räknedelen dubbelt så lätt att följa.

### Betyg: 4

Jag hade skickat den till en vän, men först hade jag fixat femtedelen, de tre olika talen för sjuttiotalsväggen och det saknade steget till 2,655.

## src/content/guider/el/tillaggsisolera-vind.mdx (jämförelse)

Jag läste den för att jämföra rösten. Några saker märkte jag i förbigående:
- Sidan säger aldrig att en vind som isoleras efter den 1 oktober 2026 ska nå 0,13, eller att det är ombyggnad. Det är just det U-värdessidan förklarar. Rockwools rader hamnar alla under 0,13, så en mening och en länk hade räckt.
- "Det var det." (rad 125), "Det är den obehagliga poängen." (rad 135) och "en skorsten i miniatyr" (rad 175) är personliga och fungerar. Men fem meningar som börjar med "Och" (rad 125, 145, 179, 200 och 228) blir ett maner.
- Energimyndighetens guide ET 2025:06 länkar här till myndighetens startsida, medan U-värdessidan har en lång direktlänk till pdf:en. Samma källa ser olika ut på två sidor som hör ihop.
- Båda sidorna ligger under "El". Som läsare förstår jag inte varför isolering och U-värde hör till el.

Betyg: 4.

## Återkommande mönster

1. **Förklaringen skjuts in som bisats direkt efter ordet.** U-värde: "En köldbrygga är ett ställe där", "en distanslist, en list längs kanten som", "en så kallad varm kant, en list som", "En ny isolerruta, två glas som sitter ihop", "Gradtimmar är ett mått på", "Energiglas har en tunn, osynlig beläggning", "Luftskiktet på insidan kallas Rsi", ungefär sju gånger. Vind: "Lösull är isolering som", "Kutterspån är hyvelspån", "stödben som lyfter", "köldbrygga, en smal remsa", "klimatskärmen, som är husets yttersta", "sargen, ramen som luckan vilar i", "råsponten, de spontade brädorna", ungefär åtta gånger. Var för sig är de bra, men det blir femton likadana definitioner på två sidor, och köldbrygga förklaras på båda sidorna med olika ord.
2. **Meningar som börjar med ett villkorsverb** ("Byter du", "Isolerar du", "Har du", "Vill du", "Vet du inte"). U-värde har ungefär 13 (rad 72, 78, 98, 112, 116, 152, 172, 190, 192, 215 två gånger, 217, 233), och "Byter du" ensamt står fyra gånger. Vind har ungefär 20 (rad 79, 111, 115, 127, 139, 155, 163, 179, 181, 193, 196, 198, 200, 218, 222, 224, 226, 228). Det är naturlig svenska, men i den tätheten blir det en rytm jag hör.
3. **Tabell och sedan en rad med "Källa:".** Fem gånger på U-värde (rad 90, 108, 126, 150, 186) och två gånger på vind. Det är bra att källan står, men raden ser alltid likadan ut. Ibland kunde källan stå i meningen före tabellen, så som vind gör på rad 79.
4. **Termostaten som slutkläm.** U-värde rad 192 ("sänk värmen när arbetet är klart") och vind rad 115 ("termostaten hör till jobbet") och rad 214. Samma poäng med nästan samma ord tre gånger på två sidor.
5. **Källan sist i meningen efter kommatecken**: "enligt Energimyndigheten", "enligt Betongföreningen", "enligt samma guide", "förklarar miljömärkningen Svanen" och "enligt Energimyndighetens fönsterguide" på U-värde, och "enligt Rockwool" och ", skriver de" / ", skriver Boverket" upprepade gånger på vind. Det blir ett eko av myndighetsreferat.
6. **Rubriker som hela påståendemeningar** på båda sidorna ("Ett bra U-värde beror på vilken del av huset det gäller", "U-värdet på fönster gäller glas, båge och karm", "Lösull slår skivor på nästan alla vindar", "Ventilationen ska vara kvar som den är"), och båda har en rubrik byggd på "Det ... som/är värd" (U-värde rad 174, vind rad 220). Det går an, men alla rubriker har samma form.
7. **Samma tal upprepas.** Boverkets 0,13, 0,18, 0,15 och 1,2 står tre gånger på U-värdessidan (kort svar, rad 76 och tabellen på rad 100), och fönstret som går från 2,8 till 0,9 räknas två gånger (rad 72 och 217). Det är bra för den som skummar men tröttsamt för den som läser i följd.

Tankstreck: inga på någon av sidorna. Skämt som går för långt: inga. Bilder: U-värde har ingen, vind har två olika, så ingen bild återkommer.
