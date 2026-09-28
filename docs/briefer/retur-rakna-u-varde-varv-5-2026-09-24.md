# Läsarens retur: /rakna/u-varde/, varv 5, 2026-09-24

Läst som husägare: kortet i registret, sidan, formuläret och alla besked i modulen. Jämförd med /rakna/elkostnad/. Modulen körd med standardvärdena, med `del=fonster`, med fönster i läget "Jag vet U-värdet", med yttervägg, med en vind som redan klarar kravet och med för lite tillägg.

## Kortet i registret

> ”Beräkna U-värde och vinsten av mer isolering”

"Vinsten av" låter som en rubrik i en rapport. "Vad du sparar på mer isolering" säger samma sak på vanlig svenska.

> ”… och hur många kronor om året du sparar på att isolera mer.”

"Spara på något" betyder på svenska ofta att snåla med det, så meningen kan läsas som att man låter bli att isolera. Skriv "sparar genom att isolera mer" eller "sparar om du isolerar mer".

Går kortet att förstå utan att ha sett sidan? Ja. Jag vet vad jag ska fylla i och vad jag får tillbaka. Det är bättre än elkostnadskortet.

## Sidan /rakna/u-varde/

### Sidhuvud, kortsvar och skiss

H1 och ingress fungerar. Ingressen tar upp min situation ("du har mätt ullen på vinden") och säger vad jag får. Den är lång med sina fem meningar, men inget i den är svårt.

> ”Välj materialen som sitter där, inifrån och ut, …”

På en vind finns inget "inifrån och ut". Hjälptexten under formuläret förklarar det, men ingressen kommer först.

Kortsvaret är bra: ett konkret exempel med ett tal jag kan känna igen. Bildtexten beskriver faktiskt bilden. Inga anmärkningar.

### Formuläret

> ”Vilket skikt sitter mellan reglar?”, med förvalet ”Inga reglar” för en vind

Skissen visar takstolar och tak-kallvind-regeln säger att tillverkaren räknar med takstolar, men standardvinden räknas utan reglar. Jag blir osäker på om jag ska välja ullen här eller inte för min egen vind, och sidan säger aldrig rakt ut vad den rekommenderar. En mening i hjälptexten behövs, till exempel "På en vind med takstolar på 1,2 meter kan du lämna Inga reglar, för träet är så lite".

> ”Att bjälkarna på en vind ger en andel i samma storleksordning är mitt antagande, inget jag har mätt.”

Ärligt, men det är den tredje meningen i en hjälptext under ett fält. Den hör hemma i "Så räknar jag".

Materiallistan: ”Rockwool Granulate” och ”Lösull, stenull” är båda lösull av stenull från Rockwool. Som husägare kan jag inte avgöra vilken jag ska välja. ”Lösull, stenull” och ”Lösull av cellulosa” är dessutom byggda på olika sätt i samma lista.

> ”Del av landet”: Mellansverige, Södra Sverige, Norra Sverige

Var går gränsen? Bor jag i Gävle eller Karlstad vet jag inte vilken jag ska välja, och i norr fyrdubblas besparingen. Det behövs en hjälprad med ett par städer.

> ”När du har fyllt i den sista raden och tryckt på ”Räkna ut” kommer en ny tom rad.”

Den är begriplig och bra att den finns.

Felmeddelandena låter som en människa: ”Välj minst ett material, så har jag något att räkna på.” och ”Luftspalten kan inte ligga innerst. Börja listan med skiktet som vetter mot rummet.” är bättre än på de flesta sajter.

### Resultatspalten, standardvärdena

Rubriken ”Lägger du på 300 mm lösull klarar du kravet på 0,13 och sparar 2 801 kr om året” säger vad jag ska göra. Bra.

> ”Kravet klaras med det du lägger till, inte med det som sitter där i dag. Hur snart det betalar sig ser du i raden om återbetalning längre ner. Är det vinden du isolerar tätar du genomföringarna och luckan först, och lämnar en öppen spalt vid takfoten så att vinden fortfarande får luft.”

Det här är en rad som står under varje "klarar", och den stämmer bara i standardfallet. Jag körde modulen:

- **Vinden klarar redan kravet** (400 mm gammal ull, U 0,110, plus 100 mm lösull): raden säger ändå ”inte med det som sitter där i dag”. Det är fel. Kravet klarades redan innan.
- **Fönster i läget "Jag vet U-värdet"** (standardfönstret 2,80 till 0,90): raden hänvisar till ”raden om återbetalning längre ner”, men den raden säger att återbetalningstid saknas. Sedan kommer råd om genomföringar, vindslucka och takfot, trots att jag byter ett fönster. ”Det du lägger till” finns inte ens i det läget.
- **Vind i läget "Jag vet U-värdet"**: samma hänvisning till en återbetalning som inte finns.

Som läsare tappar jag förtroendet för hela spalten när en rad talar om vindsluckan medan jag räknar på ett fönster. Det här är det allvarligaste felet på sidan.

> ”Det är 1 167 kWh om året i Mellansverige. Kronorna är räknade med direktverkande el och 2,40 kr per kWh, SCB:s snitt för juli till december 2025. Med värmepump sparar du mindre:”

Den fungerar. Listan med fem värmepumpar är tydlig.

> ”Ullen kostar 25 137 kr och betalar sig på 9 år med direktverkande el, om du lägger den själv.”

Tydligt och konkret, det bästa beskedet i spalten.

### Resultatspalten, fönster och yttervägg

`?del=fonster` (skiktläget): sidan visar standardvinden med varningen ”Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det.” Inget fält var oläsligt; jag valde en del som inte går att räkna skikt för skikt. Felet under "Del av huset" säger rätt sak, men varningen överst pekar åt fel håll. Det händer bara via en adress, eftersom formuläret inte visar fönster i skiktläget.

Fönster i läget "Jag vet U-värdet":

> ”Återbetalningstid saknas, eftersom jag inte vet vilket material du tänkt dig. Den får du om du räknar ”Skikt för skikt”.”

För ett fönster är det fel: skiktläget tar inte emot fönster, och felmeddelandet säger ju just det. Jag skickas till en återvändsgränd. För fönster behövs en egen rad, till exempel "Vad fönstret kostar vet jag inte, så återbetalningstiden får du räkna själv: priset delat med kronorna ovanför".

Byter jag från vindsbjälklag till yttervägg följer standardvärdena för ytan med, men skikten och tillägget gör det inte:

> ”Lägger du på 300 mm lösull klarar du kravet på 0,18 och sparar 2 776 kr om året”

300 mm lösull på en yttervägg ser ut som ett fel i räknaren, även om det är en följd av att fälten behölls. Samtidigt dyker ”Gör inte det här” om att isolera inifrån upp, fast sidan föreslagit lösull.

Med för lite tillägg (100 mm gammal ull plus 45 mm Flexibatts):

> ”Lägg på 195 mm Rockwool Flexibatts totalt, 150 mm utöver de 45 du lagt in, så kommer U-värdet ner till 0,13”

Den säger vad jag ska göra, men meningen är lång och ”totalt, 150 mm utöver de 45 du lagt in” tar två läsningar. Talet efter "ner till" är också kravet och inte mitt U-värde, så jag undrar om jag hamnar på exakt 0,13.

Siffran i rubriken, ”kravet på 0,13”, står utan enhet. Jag förstår den först när jag sett det stora talet under.

> ”Gamla regler, till 30 september 2026”

Sidan säger på två andra ställen att jag får välja de gamla reglerna fram till 1 oktober 2027. Etiketten ”till 30 september 2026” säger emot det. Om en vecka ser raden ut att handla om något som inte längre gäller.

### Därför blev svaret så

> ”Vindsbjälklaget räknar jag med 0,04 på utsidan, som om ullen låg direkt mot uteluften.”

0,04 vad? Talet står utan enhet och utan förklaring. En husägare hänger inte med.

> ”… med 0,13 och inte 0,04, på samma sätt som isoleringstillverkaren Paroc räknar sina väggar.”

Samma sak: två nakna tal.

> ”Tillverkarens tabell för samma vind räknar med takstolar på 1,2 meters avstånd. Ändå får jag ett sämre U-värde än tabellen, …”

"Tillverkarens" pekar på Rockwool, men namnet står inte i stycket. Jämförelsen 0,216 mot 0,184 står nu för tredje gången på sidan: i kortsvaret, här och i vanliga frågor.

> ”Är din konstruktion byggd som i exemplet kan du lägga till ungefär 0,01 på U-värdet här.”

Vilket exempel? Svenskt Träs exempel finns inte på sidan, så jag kan inte avgöra om min konstruktion är byggd så.

> ”Varje skikt får sitt motstånd, tjockleken i meter delat med lambdavärdet.” (Så räknar jag, steg 2)

Ordet lambdavärde används på minst sex ställen utan att någon gång förklaras. En halv mening räcker: "lambdavärdet, som säger hur bra materialet leder värme".

> ”Uträkningen visar hur mycket mindre värme som går ut genom konstruktionen. Vad elmätaren visar beror också på hur du värmer huset och hur varmt du håller inne.”

Det här säger samma sak som ”Gör inte det här” om termostaten, några rader längre ner. Stryk den ena.

> ”I ett räkneexempel från en glasrådgivare hade glaset 1,1, …”

"En glasrådgivare" är ingen källa jag kan kontrollera. Namnge den eller stryk exemplet.

> ”Räkna fram i daggpunktsräknaren var den hamnar …”

Står utan länk i texten. Länken finns bara i "Läs vidare".

### Vad siffrorna vilar på

> ”Svenskt Trä, Träguiden, 9.3 KL-trä och värmeisolering”

Källan som bär nästan varje rad handlar enligt titeln om KL-trä. Jag har ingen KL-trävind och undrar om talen gäller mig. Säg i en mening att övergångsmotstånden är desamma för alla konstruktioner.

> ”0,8379 kr/m²/mm”

Fyra decimaler och en enhet med två snedstreck. "0,84 kr per kvadratmeter och millimeter" eller "84 kr per kvadratmeter för 100 mm" går att läsa.

> ”Det du lägger till, som ligger innanför en eventuell luftspalt” med värdet ”räknas utan reglar”

Etikett och värde bildar ingen mening tillsammans. Kolumnrubriken heter ”Värde”, medan elkostnad har den mänskligare ”Jag räknar med”.

### Vanliga frågor

Alla tre är bra. Svaret om tegel (”Något lambdavärde för tegel som jag kan lita på har jag inte hittat … det är bättre än att räkna för lågt”) låter som en människa som vet vad han gör. Svaret om Rockwool är ärligt och har siffror, men det är tredje gången samma jämförelse görs.

### Människa eller mall?

Det mesta låter som en kunnig person som förklarar. Felmeddelandena, frågorna och återbetalningsraden är bättre än på elkostnadssidan. Resultatspalten avslöjar ändå att texten är skriven för ett enda fall, standardvinden: klarar-raden, hänvisningen till återbetalningen och vindsrådet följer med till fönster och till vindar som redan klarar kravet. Dit har läsaren kommit just för att få ett rakt besked, och där blir det fel.

**Betyg: 3 av 5.** Med klarar-raden uppdelad per fall och fönstret fixat hade det blivit en 4.

## Jämförelse: /rakna/elkostnad/

Läst som referens. Elkostnad är kortare, beskedet (”Räkna med [kronor] för [dagar] dagar, och [kronor] om året.”) passar varje indata, och de tre exemplen med avfuktare, värmefläkt och byggfläkt är konkreta. U-värdessidan har mer ärlighet om källor och bättre felmeddelanden, men elkostnad har ingen rad som kan bli fel beroende på vad jag fyller i. Elkostnad: 4 av 5.

## Återkommande mönster

1. **Samma besked för olika fall** (u-varde.ts, `TEXT.besked.klarar.rad`). En enda rad på tre meningar ska täcka vind, vägg, golv, fönster och dörr i båda lägena. Den blev fel i tre av sex fall jag körde. Det är det tydligaste tecknet på att texten skrevs mot en mall och inte mot läsarens situation.

2. **”Räknar jag” och ”jag räknar”, runt 20 gånger** i u-varde.ts och u-varde.astro. Exempel: ”Vindsbjälklaget räknar jag med 0,04”, ”Cellulosa räknar jag med lambdavärdet”, ”Kronorna räknar jag med 2,40 kr”, ”Jag räknar golvet som ett bjälklag”, ”jag räknar den gamla ullen försiktigt”. Var för sig är de naturliga, men i ”Därför blev svaret så” börjar nästan varje punkt så.

3. **Inverterade villkor som inledning, runt 25 stycken**: ”Lägger du” (4), ”Vet du” (3), ”Har du” (3), plus ”Är det”, ”Värmer du”, ”Sitter det”, ”Ligger det”, ”Betalar du”, ”Börjar du”, ”Räcker det” med flera. Samma konstruktion i ingress, hjälptexter, besked, regler och frågor ger en entonig rytm.

4. **Källan presenteras med en yrkesbeskrivning framför**: ”branschorganisationen Svenskt Trä” (2 gånger, u-varde.ts formel och hjalp-reglar), ”isoleringstillverkaren Paroc”, ”isoleringstillverkaren Rockwools guide”. På elkostnadssidan heter det ”statistikmyndigheten SCB”. Samma grepp på varje sida gör att det låter som en regel och inte som ett sätt att prata.

5. **Samma jämförelse tre gånger**: 0,216 mot 0,184/Rockwool står i kortsvaret, i regeln tak-kallvind och i frågan om tillverkarens tabell.

6. **”Den sämre änden av spannet” och ”försiktigt”** står i regeln om cellulosa, regeln om tak-kallvind och i vanliga frågor. Poängen är bra, men läsaren behöver den en gång.

7. **Nakna tal utan enhet** (”0,04”, ”0,13 och inte 0,04”, ”kravet på 0,13”, ”0,01 på U-värdet”). Det återkommer i regler och besked.

8. **Förklaringar som sägs två gånger**: termostaten och elmätaren (energi-inte-matare och glom-termostaten), och de gamla och nya reglerna (boverket-overgang, klarar-gamla.rad och battre-men-over.rad).

Tankstreck, skämt och förtroliga fraser hittade jag inga. Styckelängderna varierar.

**Medelbetyg: 3,5** (u-varde 3, elkostnad 4 som referens).
