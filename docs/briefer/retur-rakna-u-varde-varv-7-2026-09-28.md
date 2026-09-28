# Läsarens retur: /rakna/u-varde/, varv 7, 2026-09-28

Jag har läst sidan som en husägare som kommer från Google och funderar på att isolera vinden, väggen eller byta fönster. Sidan kördes lokalt i standardvyn och med `?del=vagg`, `?del=golv`, `?del=fonster`, `?lage=uvarde` och `?lage=uvarde&del=vagg&uf=0,4&ue=0,18&a=100`. Jag prövade också ytterdörr, fönster med 1,15, vägg i läget ”Jag vet U-värdet” som inte når kravet och en vind som redan klarar kravet (400 mm gammal ull plus 100 mm lösull, och 0,11 till 0,08 i läget ”Jag vet U-värdet”). Dessutom cellulosa som inte räcker, en vind utan tillägg, byte från vind till vägg i formuläret, lägesbytet och guidens exempel (100 mm gammal ull plus 300 mm lösull). Sidan jämfördes med /rakna/kallare/, /rakna/daggpunkt/ och guiden Tilläggsisolera vinden. Tankstreck: inga, varken i u-värdessidan i något läge eller i de tre jämförelsesidorna.

## Vad som är rättat sedan varv 6

- **Standardväggen och standardgolvet** lägger nu till 95 mm Rockwool Flexibatts med pris. Rubriken lyder ”Lägg på 115 mm stenullsskivor totalt, 20 mm mer än de 95 mm som står ifyllda, så kommer U-värdet ner till 0,18”. Det låter inte längre som om jag själv har lagt in något. Återbetalningen visas (1,9 år för väggen, 3,4 år för golvet). Det här var förra varvets värsta fel, och det är borta.
- **En vind som redan klarar kravet** får nu ett eget besked: ”Vinden klarar redan kravet på 0,13, och 100 mm lösull till sparar 490 kr om året”. Läget ”Jag vet U-värdet” säger ”Vinden klarar redan kravet på 0,13, och med U-värdet 0,080 sparar du ändå 643 kr om året”. Precis vad jag bad om.
- **”Så räknar jag” för fönster och dörr** har egna fyra steg om Uw, Boverkets två tal, kilowattimmarna och offerten. Vindskissen syns inte längre där.
- **Uw i raden under beskedet för fönster är struken.** Den förklaras nu i hjälptexten, i regeln, i ”Gör inte det här” och i stegen. Det räcker.
- **Kortets namn**: ”Beräkna U-värde och vad mer isolering sparar”. Det låter som något man söker på.
- **Ingressen**: ”Välj materialen som sitter där, med början närmast rummet”. Nu stämmer den för vinden.
- **Materiallistan** är grupperad: ”Okänt märke”, ”Lösull, för hand eller inblåst”, ”Skivor”, ”Annat än isolering”. ”Utlagd lösull (stenull)” och ”Inblåst lösull (stenull)” går att välja mellan.
- **Hjälptexten om reglar** säger nu rakt ut: ”På en vind med takstolar väljer du ”Inga reglar”.” Den meningen hade jag saknat i fyra varv.
- **Del av landet** har fått en hjälprad direkt under rubriken, med Örebro, Västerås och Uppsala och ”hur långa och kalla vintrarna är där du bor”. Den som bor i Gävle kan välja utifrån den.
- **Etiketten ”Det jag inte räknar med”** heter nu ”Förenklingarna”.
- **Luftens motstånd 0,04 har fått enhet** i regeln: ”motståndet 0,04 m²K/W”.
- **Glasrådgivaren** är borta.
- **Daggpunktsräknaren är en länk** i ”Gör inte det här”.
- **Formelregeln** förklarar nu varför en källa om KL-trä gäller för en vind: ”formeln och luftens motstånd är standardens egna och gäller lika för en vind eller en vägg av ull och reglar”.
- **Kolumnrubriken ”Värde”** heter nu ”Räknat med”.
- **Återbetalningsraden** har fått meningen jag bad om: ”Med en offert där en firma gör förarbetet och lägger ullen kan tiden bli flera gånger så lång.”
- **Guiden** har fått ett stycke före verktygskortet som förklarar skillnaden (se nedan, där det finns ett nytt problem).

## Vad som står kvar från varv 6

1. ”Det du har i dag klarar inte kravet, så det är först efter jobbet som U-värdet räcker.” Den står fortfarande direkt under rubriken i standardvyn, för fönster, för dörr, i läget ”Jag vet U-värdet” och i guidens exempel, och den upprepar rubriken.
2. ”Hur snart ullen har betalat sig står längre ner, under kronorna.” Den hänvisar fortfarande till något som står sex rader längre ner i samma spalt.
3. ”kravet på 0,13” / ”kravet på 1,1” i rubriken saknar fortfarande enhet.
4. ”Jag avrundar U-värdet precis som det står i svaret och jämför det sedan med Boverkets krav, så att talet och beskedet aldrig säger olika saker.” (steg 6) Programmerarens anteckning står kvar.
5. Steg 1, ”… och för utsidan tar jag samma motstånd som för den stilla luften inne.” Den går fortfarande att läsa som att det gäller alla väggar.
6. ”Källa.” och ”Antagande.” med punkt före titeln i tabellen ser fortfarande ut som en mall.
7. Kortsvaret säger ”lager för lager” och resten av sidan ”skikt”.
8. Regeln om energi och elmätare och termostatrådet står fortfarande på samma skärm och säger samma sak.
9. ”0,8379 kr/m²/mm” och ”0,8942 kr/m²/mm” står kvar i tabellen.
10. ”hela lager utan reglar, innanför luftspalten om väggen har en” står i tabellen även för vinden, där ingen luftspalt finns.
11. ”Med de nya reglerna behöver du ett fönster eller en dörr med lägre Uw.” Talet 1,1 står redan i rubriken, så skriv ”med Uw på högst 1,1”.
12. ”… annars drar det kallt runt karmen hur bra fönstret eller dörren än är.” Raden är fortfarande skriven för båda på en gång.

Av de ungefär 25 punkterna från varv 6 är 17 rättade och 12 kvar. Inget av det som står kvar gör att beskedet blir fel.

## Sidan /rakna/u-varde/

### Kortet i registret

> ”Beräkna U-värde och vad mer isolering sparar”
> ”Fyll i vad vinden eller väggen består av, så ser du om den klarar Boverkets krav och hur många kronor om året du sparar genom att isolera mer.”

Går kortet att förstå utan att ha sett sidan? Ja. Namnet är bättre än förra gången, och raden säger vad jag får.

### Sidhuvud och kortsvar

H1:an ”Klarar vinden eller väggen Boverkets krav på U-värde?” är fortfarande precis min fråga.

> ”Du har mätt ullen på vinden, eller du vet ungefär vad väggen består av, och undrar om det lönar sig att lägga på mer. Välj materialen … Då ser du … Om det inte räcker … Ett U-värde du redan känner till …”

Fem meningar, och fyra av dem beskriver formuläret som jag har framför mig. Den första och den sista räcker som ingress.

> ”Jag går igenom vinden eller väggen lager för lager …”

Se punkt 7.

### Formuläret

Hjälptexterna är nu formulärets bästa text. ”På vinden är det innertaket i rummet under, och sedan går du uppåt” och ”På en vind med takstolar väljer du ”Inga reglar”” är sådant en granne säger.

> ”Talet kommer från branschorganisationen Svenskt Träs räkneexempel för en regelvägg med 170 mm isolering.”

Svenskt Träs räkneexempel med 170 mm nämns tre gånger på väggskärmen: här, i regeln om reglar (”samma tal som i Svenskt Träs räkneexempel för en regelvägg”) och i regeln om korrektionen (”I Svenskt Träs räkneexempel, en vägg av KL-trä med 170 mm isolering mellan reglar utanpå”). Jag behöver det en gång.

> ”Örebro, Västerås och Uppsala ligger i Mellansverige, enligt Rockwool som talen kommer från.”

Bra här, men samma städer och samma ”drar inga gränser” står igen i regeln om gradtimmar längre ner: ”Rockwool nämner Örebro, Västerås och Uppsala som exempel på Mellansverige men drar inga gränser mot södra och norra Sverige, så du får själv välja …”. Nu när hjälpraden finns kan regeln strykas från ”Rockwool nämner”.

### Resultatspalten, standardvyn (vind)

> ”Lägger du på 300 mm lösull klarar du kravet på 0,13 och sparar 2 801 kr om året”

Den säger vad jag ska göra. Enheten saknas (punkt 3).

> ”Det du har i dag klarar inte kravet, så det är först efter jobbet som U-värdet räcker. Hur snart ullen har betalat sig står längre ner, under kronorna. Täta först runt rör …”

De två första meningarna är utfyllnad (punkt 1 och 2). Rådet om tätning och takfot är bra och borde stå först.

> ”Ullen kostar 25 137 kr om du lägger den själv, och den betalar sig på 9 år med direktverkande el och på längre tid med värmepump. Med en offert där en firma gör förarbetet och lägger ullen kan tiden bli flera gånger så lång.”

Nu den bästa raden i spalten. Den säger vad talet gäller och vad det inte gäller.

### Resultatspalten, vägg och golv

> ”Lägg på 115 mm stenullsskivor totalt, 20 mm mer än de 95 mm som står ifyllda, så kommer U-värdet ner till 0,18”

Mycket bättre. Men 115 mm stenullsskiva finns inte i butiken. Jag får köpa 45 plus 70 eller 2 × 70, och det säger sidan inte. I formuläret heter tillägget ”Rockwool Flexibatts”, i rubriken ”stenullsskivor” och i tabellen ”Stenull, skiva, Rockwool Flexibatts”. Det är tre namn på samma skiva.

> ”Det du lagt till sparar pengar varje år, men det räcker inte för att klara kravet. Kravet gäller från 1 oktober 2026 och bara för den del av huset du bygger om.”

”Det du lagt till”, fast förvalet lade in det. Rubriken har slutat tilltala mig som om jag valt, men raden under gör det fortfarande. Väggen och golvet får inte heller sina egna råd om vindskydd och ångbroms här. De står bara när väggen klarar kravet, och det är just väggen som inte klarar det som behöver dem mest.

> ”Ullen kostar 8 495 kr om du lägger den själv, och den betalar sig på 1,9 år …”

1,9 år för en yttervägg. På en vägg ska panelen av, det behövs läkt, vindskydd och ny panel, och inget av det står i talet. Meningen efter (”där en firma gör förarbetet och lägger ullen”) är skriven för en vind. För en vägg behövs en egen mening, till exempel ”Panel, läkt och vindskydd är inte med, och de kostar mer än skivorna.” Annars är 1,9 år det farligaste talet på sidan.

### Resultatspalten, vind som redan klarar kravet

> ”Vinden klarar redan kravet på 0,13, och 100 mm lösull till sparar 490 kr om året”
> ”Hur snart ullen har betalat sig står längre ner, under kronorna. Täta först …”

Rubriken är rättad. Raden under hade kunnat säga det viktigaste för just den här läsaren: att 17,1 år är lång tid och att det inte finns något krav att klara. Nu hänvisar den bara neråt.

### Resultatspalten, cellulosa som inte räcker

> ”Lägg på 210 mm inblåst lösull (cellulosa) totalt, 10 mm utöver de 200 du lagt in, så kommer U-värdet ner till 0,13”

”de 200 du lagt in” saknar mm, medan förvalets variant säger ”de 95 mm som står ifyllda”. Parentesen i mitten av en mening läser jag som en listetikett som har ramlat in i texten.

### Resultatspalten, fönster och dörr

> ”Efter jobbet klarar du kravet på 1,1 och sparar 611 kr om året”
> ”Det du har i dag klarar inte kravet, så det är först efter jobbet som U-värdet räcker. Springan mellan karmen och väggen ska drevas och tätas …”

Drevningsrådet är bra. Den första meningen är punkt 1.

> ”Sänk termostaterna när isoleringen är på plats.” (Gör inte det här, fönster och dörr)

Jag byter ett fönster. Jag har ingen isolering. Skriv ”när det nya fönstret sitter” för fönster och dörr, eller låt rådet vara bara för vind, vägg och golv.

### Resultatspalten, läget ”Jag vet U-värdet”

> ”U-värdet går ner från 0,400 till 0,250, men kravet är 0,18”
> ”Jobbet sparar pengar varje år, men U-värdet efter når inte ner till kravet.”

Tydligt. ”Jobbet sparar pengar” följt av ”U-värdet efter når inte ner” upprepar rubriken, men det är kort.

### Därför blev svaret så

> ”För en vägg byggd på samma sätt kan du själv lägga ungefär 0,01 på U-värdet.” (regeln om korrektionen, i standardvyn för vinden)

Nu begriper jag meningen, men den står på vindskärmen. Jag räknar på en vind och får ett råd om en KL-trävägg. Visa regeln bara för vägg, eller skriv en mening för vinden.

> ”Bjälkarna eller takstolarna som går genom ullen räknas bara med om du väljer skiktet med ullen under ”Vilket skikt sitter mellan reglar?”.”

Hjälptexten i formuläret säger nu att jag ska välja ”Inga reglar” på en vind med takstolar. Den här meningen säger vad som händer om jag inte gör det, och de två står långt ifrån varandra. Här räcker det med ”Takstolarna räknas inte med, se hjälptexten om reglar”, eller att meningen stryks.

> ”Vinden som formuläret börjar med visar det: 0,216 W/m²K här mot 0,184 i tabellen.” och frågan ”Varför får jag ett annat U-värde än i tillverkarens tabell?”

Samma förklaring, med lambdavärdet för ull av okänd ålder, står två gånger på samma skärm. Den ena räcker, och frågan är den bättre av dem, eftersom den har kronorna.

> ”Återbetalningstiden … Den får du bara för lösull av stenull och för Rockwool Flexibatts, eftersom det är de enda materialen jag har ett daterat butikspris för.” (steg 9), regeln om återbetalningen och ”Återbetalningstid saknas, för jag har bara pris på lösull av stenull och på Rockwool Flexibatts.”

Samma begränsning tre gånger.

### Vanliga frågor

Alla tre är bra. Tegelsvaret (”hellre för högt än för lågt”) är fortfarande sidans mest mänskliga stycke.

### Sidan mot guiden Tilläggsisolera vinden

Det nya stycket:

> ”Samma vind i räknaren här nedanför ger en högre besparing, eftersom räknaren utgår från att den gamla ullen isolerar sämre än Rockwool räknar med.”

Jag klickar på kortet direkt under stycket. Kortet leder till `/rakna/u-varde/` utan värden, och räknaren öppnar med **200 mm** gammal ull, inte guidens 100. Det första jag ser är **2 801 kr**, alltså *lägre* än guidens 5 500 kr, fast stycket just sa ”högre”. ”Samma vind” stämmer inte på första klicket. Jag måste själv ändra 200 till 100 för att få 6 626 kr. Två sätt att rätta det: länka kortet till guidens vind med värdena i adressen (`d2=100`), eller skriv ”Fyll i 100 mm gammal ull i räknaren här nedanför, så får du en högre besparing …”.

> ”Den visar också hur snart ullen är betald, men bara utifrån vad ullen kostar i butiken när du lägger den själv. Med en offert där arbete och förarbete ingår blir tiden längre, och med offerten från Uppsala län längre ner blir den flera gånger så lång.”

Det här räcker för att guidens ”räkna inte med tre till fyra år” och räknarens ”3,8 år” (för 100 mm gammal ull) inte längre säger emot varandra. Räknarens egen rad säger samma sak från andra hållet. På den punkten är motsägelsen borta. ”Längre ner” hänvisar här till ett avsnitt som faktiskt ligger långt bort, så den hänvisningen är befogad.

Kvar är alltså bara det konkreta talet på första klicket.

### Människa eller mall?

Hjälptexterna i formuläret, drevningsrådet och tegelsvaret låter som en människa som har stått på en vind. Mallen hörs nu mest i upprepningarna: samma förklaring två eller tre gånger på samma skärm (Örebro, Rockwools tabell, Svenskt Träs exempel, priset bara för två material), och en fast mening under rubriken som säger det rubriken redan har sagt.

**Betyg: 4 av 5.** De tre felen som höll kvar sidan på 3 (standardväggen, beskedet för den som redan klarar kravet och ”Så räknar jag” för fönster) är rättade. Sidan hade jag skickat till en granne som ska isolera vinden. Till en granne som ska isolera väggen hade jag skickat den med en varning om 1,9 år.

## Jämförelsesidorna

**/rakna/daggpunkt/:** Besked som går att göra något med (”Vädra kort med genomdrag ett par gånger om dagen, och gör ytan varmare.”), källan som en halv mening efter varje rad (”Mitt råd, inget krav från någon källa.”), och scenarierna sovrummet, källaren och garaget är sajtens bästa text. En hänvisning av samma slag som u-värdessidans finns här också: ”Varför det blev så, och vad som är fel sak att göra, står under verktyget.” Betyg 4.

**/rakna/kallare/:** Rak, säger när något är dess egen läsning, och ”Kommer det ett papper utan en enda siffra har du fått ett säljbesök” är en mening man minns. Samma hänvisning: ”Varför svaret blev så, och det du inte ska göra, står under verktyget.” Källorna presenteras med yrke framför namnet (se mönster 4). Betyg 4.

**Guiden Tilläggsisolera vinden:** Fortfarande den bästa texten av de fyra, konkret och med en åsikt. Det nya stycket gör sitt jobb för återbetalningen men lovar en högre besparing som kortet under inte visar på första klicket. Betyg 4.

## Återkommande mönster

1. **Samma förklaring flera gånger på samma skärm.** Det här är nu sidans största mönster, större än förra varvets förval.
   - Örebro, Västerås och Uppsala: hjälpraden i formuläret och regeln om gradtimmar (u-varde.ts `hjalp-region` och `regel.gradtimmar`), i alla lägen.
   - Rockwools tabell mot räknarens tal, med lambdavärdet för gammal ull: regeln `tak-kallvind` och tredje frågan (u-varde.astro `FRAGOR`).
   - Svenskt Träs räkneexempel med 170 mm: tre gånger på väggskärmen (`hjalp-reglar`, `regel.reglar`, `regel.delta-u`).
   - Pris bara för stenullslösull och Flexibatts: tre gånger när återbetalning saknas (`STEG_SKIKT` steg 9, `regel.aterbetalning-bara-ull`, `aterbetalningSaknas.inget-pris`).
   - Termostat och elmätare: `glom-termostaten` och `energi-inte-matare`.
   - Rubriken och första meningen i raden: ”Efter jobbet klarar du …” / ”… så det är först efter jobbet som U-värdet räcker” (u-varde.ts `besked.klarar.rad`), i standardvyn, för fönster, dörr och i läget ”Jag vet U-värdet”.

2. **Hänvisningar till något som står strax nedanför.** ”Hur snart ullen har betalat sig står längre ner, under kronorna.” (u-varde.ts), ”Varför det blev så, och vad som är fel sak att göra, står under verktyget.” (daggpunkt.astro) och ”Varför svaret blev så, och det du inte ska göra, står under verktyget.” (kallare.astro). De två senare är nästan samma mening på två sidor, och där hör jag mallen tydligast av allt på sajten.

3. **”Räknar jag”, ”tar jag”, ”delar jag”, ”räknar du”: 12 gånger i standardvyn och 12 för väggen**, plus ”räknas” 5 respektive 9 gånger. Exempel: ”Det du lägger till räknar jag som hela lager” (hjälptexten), ”Det du lägger till tar jag som hela lager” (steg 4), ”med värmepump delar jag först med pumpens SCOP” (steg 8), ”Med värmepump delar jag den sparade värmen” (regeln scop). Samma nivå som förra varvet.

4. **Källan får en yrkesbeskrivning framför namnet.** ”branschorganisationen Svenskt Träs” (u-varde.ts `hjalp-reglar`), ”isoleringstillverkaren Paroc” (`regel.luftspalt`), ”isoleringstillverkaren Rockwools guide” (`regel.gradtimmar`); på kallare.astro ”Saneringsföretaget Polygon”, ”Saneringsföretaget Ocab”, ”Tidningen Gör Det Själv”, ”En målerifirma i Gustavsberg”. Varje källa presenteras på samma sätt på varje sida. Det låter som en regel, inte som ett sätt att prata.

5. **”Det du lägger till”, ”Det du lagt till”, ”Det du har i dag”: 5 gånger i standardvyn och i väggvyn.** Det tilltalar mig om något förvalet valt: ”Det du lagt till sparar pengar varje år” på standardväggen och standardgolvet (u-varde.ts `battre-men-over.rad`).

6. **Inverterade villkor som meningsinledning**, ungefär 7 per vy: ”Lägger du”, ”Har du”, ”Kommer jag”, ”Sitter väggens”, ”Ligger teglet”, ”Har du tillverkarens tal”, ”Om du påbörjar”. Guiden gör likadant (”Värmer du”, ”Sänker du inte”). Det är sajtens rytm, men i en resultatspalt blir det tätt.

7. **Nakna tal i rubrikerna**: ”kravet på 0,13”, ”kravet på 1,1”, ”ner till 0,18”, ”de 200 du lagt in”. Tabellerna har enheter, men det är rubrikerna jag läser.

8. **Råd skrivna för flera delar på en gång**: ”hur bra fönstret eller dörren än är”, ”Sänk termostaterna när isoleringen är på plats” på fönsterskärmen, ”där en firma gör förarbetet och lägger ullen” på väggskärmen, och ”För en vägg byggd på samma sätt” på vindskärmen. Fyra ställen där texten inte vet vilken del jag räknar på.

Tankstreck: inga i någon av de fyra sidornas synliga text, i något läge. Skämt och förtroliga fraser: inga. Styckelängden varierar på alla fyra sidorna. Samma delningstext (”Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar.”) står på alla tre räknarna, men det är gränssnitt och stör inte.

**Medelbetyg: 4,0** (u-varde 4, daggpunkt 4, kallare 4, guiden 4).
