# Läsarens retur: U-värde, varv 3, 2026-09-24

Läst i följd som en besökare: `src/content/kunskap/el/u-varde.mdx`, och som jämförelse `src/content/guider/el/tillaggsisolera-vind.mdx` och `src/content/guider/el/jordfelsbrytare-loser-ut.mdx`. Bara u-värdessidan får betyg. Jämförelsesidorna används för att höra om samma mönster finns på flera sidor.

Jag har räknat om alla tal på sidan med miniräknare. De stämmer utom ett, som står under punkt 1.

## U-värde (`kunskap/el/u-varde.mdx`)

### Förstår en husägare utan teknisk bakgrund vad U-värdet är?

Ja. Kortsvaret och avsnittet "Vad talet betyder en kall natt" är det bästa på sidan. Väggen på 20 kvadratmeter som släpper ut 108 watt, och det gamla fönstret som ensamt släpper ut mer än hela väggen, gör talet begripligt. Inledningen, att ett bra fönster släpper igenom fem gånger så mycket som en vägg, får mig att vilja läsa vidare.

Det som saknas är en känsla för vad 108 watt är. Säg att det är ungefär en gammal glödlampa så har jag det. Sedan tappar sidan mig på tre ställen: i Boverkets regler, när väggen räknas med reglar och i stycket om energiglas.

### Går räkneexemplet att följa?

Till och med steg 5 (U = 0,29) går det bra. Jag kan räkna efter och får samma svar. Det är ovanligt bra för en sådan här sida.

Efter steg 5 går det inte längre att följa:

- "Rakt genom en regel blir U-värdet 0,92, drygt tre gånger sämre". Talet stämmer (0,12/0,14 = 0,857 i stället för ullens 3,243), men sidan visar inte hur det räknas. Det räcker med en rad: "byt ullens 3,243 mot reglens 0,857".
- "därför räknar standarden väggen på två sätt: en gång som om regel och ull låg bredvid varandra, och en gång som om de var blandade till ett enda material." Här tappar jag tråden helt. Jag vet inte hur man räknar "blandade till ett enda material".
- "Medelvärdet av de två ger hela väggen 0,37 när 12 procent av den är trä". Siffran 12 procent dyker upp här för första gången. Det står inte om det är U-värdena eller motstånden som ska medelvärdesbildas. Jag kan inte räkna fram 0,37 själv, trots att det är avsnittets viktigaste tal.
- "Ett obrutet lager på 50 mm av samma ull på insidan tar i samma räkning ner väggen till 0,24." Jag får 1 / (2,698 + 1,351) = 0,247, alltså 0,25 avrundat och inte 0,24. Det är en liten skillnad, men det är det enda tal på sidan som inte stämmer när jag räknar efter. "Obrutet" betyder utan reglar, men det står inte.

Besparingsexemplen med fasaden (1 960 kWh, 4 700 kr) och fönstret (250 kWh, 610 kr) går att följa och stämmer.

### Citat

1. "En yttervägg på 20 kvadratmeter med U-värdet 0,18 har 20 grader inne och 10 minus ute."
   En vägg har inga grader. Dessutom är 20 både arean och innetemperaturen, så i "0,18 gånger 20 gånger 30" måste jag stanna och fundera på vilken 20 det är.

2. "enligt Energimyndighetens tabell för den som inte vet vad som finns i konstruktionen."
   Ordningen blir fel. Det låter som att tabellen gäller för den som inte vet, när det är den som inte vet som ska använda tabellen.

3. "låg genomsnittet för vindsbjälklaget på 0,22, ytterväggen på 0,36, plattan på mark eller källargolvet på 0,29, bjälklaget över krypgrunden på 0,26 och fönstren på 2,23."
   Fem tal i en mening. Efteråt kommenteras bara vinden, och fönstrens 2,23 nämns aldrig mer.

4. "Vindarna ligger alltså mycket bättre än i tabellen"
   Tabellen har sju rader. Det står inte vilken rad jag ska jämföra med.

5. "Kravet gäller hela huset som ett genomsnitt, där alla ytor mot det fria och alla köldbryggor räknas ihop, och det kallas Um."
   Det är oklart vad "det" syftar på. "Mot det fria" är myndighetsspråk.

6. "För hus i mer än ett plan blir den lättare med de nya reglerna, 0,40 i stället för 0,30"
   "Lättare" kan betyda ett lägre tal. Här betyder det ett mildare krav, alltså ett högre tal. Skriv "mildare".

7. "Från den 1 oktober är de gränser som det du bygger om inte får överskrida, och klarar den delen gränsen räknas huset som godkänt utan att du behöver räkna på resten."
   Jag får läsa den två gånger. Det är oklart vad "den delen" syftar på, och vem som godkänner.

8. "Kraven får anpassas om kostnaden blir orimligt hög jämfört med nyttan, om energianvändningen bara minskar obetydligt, eller av tekniska skäl eller av hänsyn till husets kulturvärden."
   Det här är ren myndighetstext. Vem anpassar, jag eller kommunen, och hur gör jag det?

9. "Har du sökt bygglov eller gjort en anmälan före den 1 oktober 2027 får du fortfarande använda de gamla reglerna"
   2027 bland åtta omnämnanden av 2026 ser ut som ett skrivfel. Det står inte att det är ett övergångsår. Meningen säger dessutom emot kortsvaret, som säger att talen blir högsta tillåtna värden från 1 oktober 2026.

10. Hela Boverksavsnittet förutsätter att jag vet om min vindsisolering eller mitt fönsterbyte räknas som att "bygga om". Det är det enda jag vill veta som husägare, och det står inte.

11. "U = 1 / (Rsi + d₁/λ₁ + d₂/λ₂ + … + Rse)"
   Rsi och Rse står i formeln men förklaras först två stycken senare, efter ett stycke om något annat. Byt plats på stycket om felet och stycket om Rsi och Rse.

12. "Det vanliga felet är att lägga ihop U-värdena för varje material."
   Enligt FAQ:n har ett material ett lambdavärde och inget U-värde. Meningen säger alltså emot sidans egen förklaring. Menar du skiktens U-värden?

13. Tabellen över Rsi och Rse har enheten "m²K/W".
   Det är den tredje enheten på sidan, efter W/m²K och W/mK, och den förklaras inte. Jag märker att den är omvänd först när jag läser den en tredje gång.

14. "| 1981 till 2000 | 0,30 | 0,20 |" bredvid "| 1961 till 1980 | 0,4 | 0,3 |"
   Antalet decimaler växlar i samma tabell. Vindsidan skriver 0,50 där den här sidan skriver 0,5.

15. "För ullen räknar jag med dagens Flexibatts, 0,037."
   Varför räknas en vägg från sjuttiotalet med dagens ull? Säg varför, eller säg att den gamla ullen var sämre.

16. "Det är väggen där den bara består av ull."
   Meningen är hoptryckt. "Det är U-värdet mellan reglarna" är tydligare.

17. "Källa: Rockwool, som räknar med 3 720 graddagar för Mellansverige, det vill säga 89 280 gradtimmar"
   Graddagar förklaras inte. Sidan gömmer också innehåll i källraderna, se även tegelraden. Källraden är fel plats för det.

18. "Tegel står inte med, eftersom jag inte har hittat ett värde med källa."
   Det är ärligt, men meningen står i en källrad och gör mig osäker. Om ni inte hittar tegel, vad har ni missat mer? Svenska hus har mycket tegel. Flytta upp meningen och säg vad jag ska göra om jag har tegel.

19. "är vad hushåll med en förbrukning på 5 000 till 14 999 kilowattimmar om året betalade"
   "14 999" är statistikdatabasens språk och inget en person säger. Ett elvärmt hus drar dessutom mer än så, så varför är just den gruppen relevant?

20. "Energiglas är glas med en tunn beläggning som håller kvar värmen, och det finns i en hårdare och en mjukare variant."
   Det låter som att glaset är mjukt. Det är beläggningen som är hård eller mjuk.

21. "Ett nytt innerglas av hårdbelagt energiglas tar ner fönstret till 1,8."
   Det står inte från vilket värde. Jag gissar 2,8, men det står inte.

22. "En ny isolerruta med två glas, energiglas, varm kant och argongas mellan glasen tar ner det till 1,4, och en dubbel isolerruta med mjukbelagt energiglas och argon tar ner det till 1,3."
   Jag förstår inte skillnaden mellan "isolerruta med två glas" och "dubbel isolerruta". Meningen räknar upp fyra saker i rad.

23. "med distanslister av aluminium mellan glasen och 1,4 med varm kant, en distanslist som leder mindre värme."
   Distanslist förklaras inte, och meningen är hoptryckt.

24. "får då 170 kilowattimmar om året för ett fönster på 1,5 kvadratmeter med U-värdet 1,0."
   Är 170 förlusten eller besparingen? Det står direkt efter en besparing på 250, så jag jämför fel.

25. "Var den punkten hamnar med din inomhusluft räknar daggpunktsräknaren ut."
   Omvänd ordföljd. "Daggpunktsräknaren räknar ut var den punkten hamnar" läses i ett svep.

26. FAQ: "Ug, som bara gäller glaset och alltid ser bättre ut."
   Brödtexten säger "normalt". FAQ:n säger "alltid". En av dem har fel.

27. Kortsvaret: "Boverkets mål 0,13 för taket, 0,18 för väggen och 1,2 för fönstren."
   Golvet (0,15) saknas, trots att det står i brödtexten och i rubriken "Bra U-värde för tak, vägg, golv och fönster".

28. Rubriken "Bra U-värde för tak, vägg, golv och fönster" låter som en sökfras. De andra rubrikerna ("Vad talet betyder en kall natt", "Därför blir huset sämre än talen på pappret") låter som en människa.

### Person eller myndighetstext?

Sidan är till större delen en person. Jag-formen känns äkta: "Elpriset jag räknar med", "något sådant krav har jag inte hittat", "håller jag mig till gradtimmarna". Det bästa är meningar som "För tak, vägg och golv är det inte talen som ändras utan vad de betyder" och "Varm luft som läcker ut genom en otät fog tar med sig sin värme förbi hela räkningen".

Avsnittet "Boverkets krav när du bygger nytt och när du bygger om" är däremot en myndighetstext från början till slut: paragrafer, datum, undantag och ingen jag. Där hade jag slutat läsa om jag inte hade ett uppdrag. Sidan anger datumet 1 oktober 2026 tio gånger, varav åtta i brödtexten. När samma datum upprepas så ofta låter det som en regelsammanställning och inte som en förklaring.

### Betyg: 3

Början och besparingsräkningen skulle jag skicka vidare utan att tveka. Boverksavsnittet och resten av väggexemplet efter steg 5 drar ner betyget. Om Boverksavsnittet kortas till vad som gäller för mig som byter fönster eller isolerar vinden, och reglarna räknas ut så att jag kan följa med, blir sidan en fyra.

## Jämförelsesidorna, kort

- `jordfelsbrytare-loser-ut.mdx` låter mest som en person av de tre sidorna. Den har ett tydligt syfte, en numrerad ordning och en egen regel ("Löser brytaren ut igen blir det ingen tredje gång"). Den u-värdessidan borde låta som.
- `tillaggsisolera-vind.mdx` låter som en person som argumenterar. Den har samma källtyngd som u-värdessidan men bär den bättre, eftersom varje källa används för att komma fram till ett beslut.

## Återkommande mönster

1. **Samma förbehåll om besparingen på två sidor, nästan ord för ord.**
   - u-varde, rad 180: "Energimyndigheten påpekar att energianvändningen inte nödvändigtvis minskar bara för att huset isoleras. Blir det varmare inne efteråt ska värmen sänkas, annars tar du ut besparingen som värme..."
   - tillaggsisolera-vind, rad 115: "Energimyndigheten skriver att energianvändningen inte nödvändigtvis minskar bara för att huset tilläggsisolerats. Sänker du inte värmen efteråt får du ett varmare hus..."

   Den som läser båda sidorna hör samma text två gånger.

2. **Samma slutkläm om kronorna.**
   - u-varde, rad 178: "Med direktverkande el och 2,40 kr per kilowattimme är det drygt 4 700 kr om året. Med värmepump blir kronorna färre."
   - tillaggsisolera-vind, rad 111: "Värmer du huset med direktverkande el och betalar 2,40 kr per kilowattimme är det ungefär 5 500 kr om året. ... Med värmepump blir kronorna färre, och med ett annat elpris räknar du om kilowattimmarna i [elkostnadsräknaren]."

   På båda sidorna följer räkneexemplet samma ordning: kWh, direktverkande el, 2,40 kr, "Med värmepump blir kronorna färre" och sedan länken till elkostnadsräknaren. Det låter som en mall. Fönsterexemplet på u-varde (rad 205) följer också ordningen men utan värmepumpsraden.

3. **"i guiden om att [X]" som enda sätt att länka.**
   - u-varde: 4 gånger (tilläggsisolera vinden, isolera krypgrunden, dreva fönster, isolera källarväggen).
   - tillaggsisolera-vind: 4 gånger ("i guiden om [U-värde]", två om luftfuktighet och en om krypgrunden).
   - jordfelsbrytare-loser-ut: 1 gång.

   Nio gånger på tre sidor. Vindsidan kallar dessutom u-värdessidan för en "guide", fast den är en kunskapssida.

4. **Källan i huvudsatsen, gång på gång.** "Energimyndigheten skriver", "förklarar miljömärkningen Svanen", "enligt samma guide", "enligt Betongföreningen", "Formeln kommer från tidskriften Bygg & teknik". I brödtexten på u-varde står Energimyndigheten 10 gånger och Boverket 9 gånger. På vindsidan står "skriver" 15 gånger. Varje fakta får sin avsändare, så att texten ibland låter som ett referat och inte som en förklaring. Jordfelssidan gör likadant ("förklarar Hager", "enligt Schneider Electric", "enligt Voltimum"), men där är det mer sparsamt.

5. **En källrad efter varje tabell, som också får bära innehåll.** u-varde har 5 källrader, de andra sidorna 2 var. På u-varde döljer två av raderna saker jag behöver: tegel (rad 150) och graddagar (rad 174).

6. **"drygt" som standardavrundning.** u-varde använder ordet 5 gånger och tillaggsisolera-vind 4 gånger, och på båda sidorna ofta flera gånger i samma stycke. Det är inget fel, men det märks när man läser sidorna efter varandra.

7. **Samma datum upprepat.** "1 oktober 2026" eller "1 oktober" står 10 gånger på u-varde, i beskrivningen, kortsvaret, sex ställen i brödtexten och två FAQ-svar. Varje gång datumet upprepas blir texten mer lik en myndighetstext.

8. **FAQ:n upprepar brödtexten.** Alla fem FAQ-svar på u-varde upprepar tal från brödtexten (1,2 och 1,1, 0,30 och 0,40, 0,6 och 0,45, 0,29, 0,92 och 0,37). Samma sak gäller på vindsidan (975 kr, 400 mm, 22 år). FAQ:n läses som en sammanfattning av brödtexten och inte som svar på nya frågor.

Inga tankstreck och inga upprepade skämt hittade. Styckena är genomgående tre till fyra meningar långa på u-varde, vilket ger en jämn men något monoton rytm i Boverksavsnittet.
