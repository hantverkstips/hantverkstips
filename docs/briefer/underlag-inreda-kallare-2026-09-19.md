# Underlag: inreda källare, `/grund/inreda-kallare/`

Skrivet 2026-09-19 av skribenten. Projektguide, pelare grund, nivå mellan, målgrupp båda.
Systersidan `/grund/isolera-kallarvagg/` skrivs samtidigt och äger väggen.

## 1. Sökanalys

### Vald huvudfras

**"inreda källare".** Sidofraser som samma sida äger: "renovera källare", "källare till bostad",
"inreda källare regler", "inreda källare kostnad", "inreda källare till boyta".

Volymen är inte hämtad och står inte i `docs/SOKORDSANALYS.md`. **Uppskattning, märkt som sådan:**
600 till 1 200 sökningar per månad på "inreda källare", med en topp i januari och februari när
folk sitter inne och planerar. "Renovera källare" ligger lägre men har samma intention och har en
egen prisguide hos Byggstart, vilket tyder på att den bär. "Källare till bostad" är den fras som
signalerar regelfrågan och är den vi kan vinna lättast, eftersom ingen konkurrent har läst de
byggregler som gäller sedan i somras.

Motivering till valet: "inreda källare" är projektfrasen, och sökmönstret är projekt som verb
enligt `docs/INNEHALLSARKITEKTUR.md` avsnitt 2. "Renovera källare" är samma avsikt med ett annat
verb och förtjänar ingen egen sida (en fras, en sida). "Källare till bostad" är en delfråga som
sidans tillståndsavsnitt svarar på.

### Sökintention

Blandad, men tyngdpunkten är informativ med kommersiellt efterled. Läsaren har en källare som
används som förråd och vill göra gillestuga, sovrum, kontor eller uthyrningsdel av den. Hon vill
veta i ordning: får jag, vad kostar det, och vad måste fixas först. Ingen enskild produkt köps på
den här frasen, därför inga produktkort och ingen köpguide.

### De tre översta organiska resultaten, lästa 2026-09-19

**1. Vi i Villa, "Inred källaren – så gör du."** Bygger på en namngiven expert, Johan Hedström,
kanslichef på Småhusskadenämnden. Bra på principen "varmare är torrare", avråder från golvvärme i
äldre hus, kräver mekaniskt ventilerat golv, silikatfärg, plåtreglar i stället för träreglar,
luftspalt upp och ned, högst 50 mm isolering på källarytterväggens insida. Saknar: bygglov,
anmälan, takhöjd, dagsljus, utrymning, kostnad, alla tal utom de 50 millimetrarna, och varje
hänvisning till en byggregel.

**2. Byggahus, "Inreda källare."** Gick inte att hämta (HTTP 403 och en JavaScript-vägg), se
avsnitt 4. Bedöms utifrån Byggahus övriga material och forumtrådar på samma fras.

**3. Byggstart, "Inreda källare: en komplett guide."** Marknadsplats för offerter. Har det enda
riktiga prisunderlaget i toppen: genomsnitt cirka 20 000 kr per kvadratmeter för full
källarutbyggnad, spann 15 000 till 26 000 kr, och ett detaljerat prisexempel på en uthyrningsdel
på 50 kvadratmeter. Saknar: hela fuktkedjan, allt om golvuppbyggnad, ventilationskrav, dagsljus,
utrymning. **Har ett sakfel:** "Minst 2,30 meter krävs för godkänd boendeyta."

Närmast därefter ligger Hemsmart, som citerar Byggstarts pris och skriver
**"Plan- och bygglagen säger att takhöjden måste vara minst 2,3 meter"**. Det står inte i PBL och
har aldrig gjort det. Sajten har dessutom en banner om att rotavdraget är höjt till 50 procent
till 31 december 2025, alltså nio månader efter att den höjningen upphörde.

### Det hela toppen missar, och som avgör vår vinkel

Samtliga sidor i toppen beskriver regler som slutade gälla **1 juli 2026**. Boverkets nya
byggregler trädde i kraft 1 juli 2025 med en ettårig övergångsperiod, och möjligheten att tillämpa
BBR upphörde 1 juli 2026 (Boverket, "Om Boverkets nya byggregler"). Det betyder att:

- **Takhöjden 2,40 m och 2,30 m finns inte längre som krav.** BFS 2024:8 5 kap. 1 § säger att
  rumshöjden ska vara tillräcklig för att undvika olägenheter för människors hälsa och anpassad
  till rummets avsedda användning. Inget mått.
- **Fönsterarean 10 procent av golvytan finns inte längre.** BFS 2024:8 4 kap. 1 § kräver
  dagsljusfaktor minst 1,0 procent för minst halva den sammanlagda bedömda ytan av bostadens
  vistelserum, och 13 kap. 5 § sänker den till 0,8 procent vid ändring, under villkor.
- **"Anmälan om ändrad användning" är fel ord.** Ändrad användning är en bygglovsfråga enligt
  PBL 9 kap. 15 §, och kräver lov bara om byggnaden tas i anspråk för ett **väsentligen annat**
  ändamål. Anmälningsplikten står i PBF 6 kap. 1 § och handlar om bärande delar, brandskydd,
  ventilation, vatten och avlopp. Listan ändrades dessutom 1 december 2025.

### Tre sätt vår sida blir bättre än ettan

1. **Rätt regelverk.** Vi är den enda sidan på svenska som skriver att BBR är ersatt, att
   takhöjdskravet på 2,40 m inte finns längre, och som citerar paragrafen som faktiskt gäller. Vi
   ger dessutom dagsljusfaktorn 0,8 procent vid ändring, som är skriven just för källare och mörka
   utrymmen, och som ingen konkurrent nämner.
2. **Golvet med mått och gränsvärde.** Toppen räknar upp golvmaterial (PVC, klinker, laminat,
   parkett). Vi ger gränsvärdet för relativ fuktighet i betongen, vad som händer när ett ångtätt
   golv läggs på en platta i markkontakt, vad luftspaltsmattan gör, och varför golvvärme på en
   tunt isolerad källarplatta är den enskilt sämsta idén i hela projektet, med Fuktcentrums
   beräkning bakom.
3. **Rätt fråga först och pengarna i rätt ordning.** Toppen börjar med inredning och slutar med
   fukt. Vi börjar med mätningen, bäddar in självbesiktningen av källaren, och avslutar med en
   kostnadsordning där de tre första posterna är sådana som inte syns när det är klart.

Plus två till: **utrymningsfönstrets fyra mått** i en egen skiss, och **ventilationens två
flödeskrav** i liter per sekund, som ingen av de lästa sidorna har.

### Rubrikstruktur

H1: Inreda källaren, fuktkraven först. Åtta H2 i utförandeordning:

1. Mät fukten en hel sommar innan du river något (Verktygskort `kallare`)
2. Det som ska vara löst utifrån innan något byggs in
3. Golvet på betongplattan är projektets svåraste del (huvudbild)
4. Väggen har en egen fälla, och en egen sida
5. Luften i ett rum under mark
6. Takhöjd och dagsljus, och varför de gamla talen inte gäller
7. Bygglov, anmälan och vägen ut (andra illustrationen)
8. Vad det kostar, och i vilken ordning pengarna ska läggas

Sedan en Faq med fem frågor.

### Interna länkar

Ut: `/fukt/fukt-i-kallaren/` (diagnosen, äger tejptestet), `/grund/dranera-hus/` (schaktet),
`/grund/isolera-kallarvagg/` (väggen, systersida), `/fukt/avfuktare-kallare/` (maskinen),
`/fukt/luftfuktighet-inomhus/` (vad talen betyder), `/grund/isolera-krypgrund/` (när golvet står
på krypgrund i stället), `/rakna/kallare/` och `/rakna/avfuktare/` som verktygskort.

In: förslagen står i rapporten.

## 2. Faktaunderlag

### Regelverkets status

| Uppgift | Värde | Källa |
|---|---|---|
| BBR ersatt av nya byggregler | 1 juli 2026 | Boverket, om nya byggregler |
| Energikraven kvar i BBR till | 1 oktober 2026 | Boverket, samma sida |
| Nio nya grundförfattningar | BFS 2024:4 till 2024:13 | Boverket, samma sida |

Källa: Boverket, "Om Boverkets nya byggregler", läst 2026-09-19.

Ordagrant: "Möjligheten att tillämpa de äldre reglerna upphörde den 1 juli 2026." Och: "Boverkets
nya byggregler baseras på funktionskrav. Reglerna innehåller i huvudsak inte längre några allmänna
råd eller hänvisningar till specifika standarder."

### Fukt

- **Högsta tillåtna fukttillstånd, 75 procent relativ fuktighet** när materialets eget värde inte
  är väl undersökt och dokumenterat. BFS 2024:8 7 kap. 1 §, citerad på Boverkets vägledningssida
  om fuktsäkerhet. Samma tal som BBR 6:52 hade, alltså oförändrat i sak.
- **Ångtätt golv på betong i markkontakt.** "Ett ångtätt golvmaterial som läggs på betong i
  kontakt med marken utan skydd mot fukttransport kan orsaka fuktproblem. Om golvvärme installeras
  på en oisolerad betongplatta kan det leda till fuktproblem och hög energianvändning." Boverket,
  risker med fukttransport, källare.
- **Värmekudde.** "Vid stora källare och utbredda betongplattor bildas en värmekudde under
  byggnaden ... vilket kan innebära att värmeisoleringen inte räcker till för att upprätthålla en
  temperaturskillnad mellan mark, källare och betongplatta." Boverket, samma sida.
- **Omvänd fuktvandring vid golvvärme.** Marken under värmeisoleringen ska vara högst 3 grader
  kallare än inneluften; då kan markfukten aldrig ge högre relativ fuktighet än 85 procent i
  plattan. "I befintliga hus, med tunn, öppen värmeisolering och golvvärme, är det en uppenbar
  risk att omvänd fukttransport kan ge kortvarig uppfuktning under sommaren om man har en tät
  golvbeläggning." Lars-Olof Nilsson, Fuktcentrum vid Lunds tekniska högskola.
- **Villaägarnas femtio år.** "Den gamla dräneringen kan fungera i femtio år, särskilt om källaren
  bara används som källare och inte som förråd för kläder eller annat organiskt material."
  Villkoret för femtio år är alltså användningen. Samma sida: "Fuktproblem är en vanlig anledning,
  eller så vill du kanske inreda källaren till bostad." Patrik Wendelius, byggnadsteknisk
  rådgivare på Villaägarna, 2024-12-04.
- **Hygrometergränsen.** 40 till 60 procent relativ luftfuktighet är ingen anledning till oro,
  över 75 procent under längre tid är stor skaderisk. Samma källa.

### Golvet

| Uppgift | Värde | Källa |
|---|---|---|
| Ytskiktets vanliga krav på betongens RF | 85 % | Golvbranschen, GBR |
| Fuktskydd behövs inte vid RF under | 60 % | Kährs läggningsanvisning |
| Plastfolie räcker inte som fuktskydd över | 95 % RF | Kährs läggningsanvisning |
| Åldersbeständig polyetenfolie som fuktskydd | 0,2 mm | Kährs läggningsanvisning |

Källor: Golvbranschen, "Uttorkning av golvavjämning", läst 2026-09-19. Kährs läggningsanvisning
för trägolv med Woodloc 2G, se förbehållet i avsnitt 4.

GBR ordagrant: "om ytskiktet kräver RF ≤ 85 % så måste det säkerställas att betongens RF inte
överstiger 85 %." Och: "Golvbranschen, GBR, rekommenderar generellt att bjälklagets RF
kontrolleras innan golvavjämningen appliceras ... Vi hänvisar till auktoriserade fuktkontrollanter
inom RBK."

Kährs ordagrant, obligatoriskt fuktskydd oavsett ålder på bland annat "betonggolv som ligger
direkt på mark (platta på mark)" och "bjälklag över ventilerad kryprumsgrund". Vidare: "Är
undergolvets relativa fuktighet över 95 % är ångspärr av plastfolie inte tillräckligt som
fuktskydd." Och vid läggning: "Rummets luftfuktighet får ej överstiga 60 % RF ... Både rummet och
bräderna skall vara uppvärmda till minst 18 °C."

**Luftspaltsmatta, Isola Platon Golv,** tillverkarens produktdata:

| Uppgift | Värde |
|---|---|
| Knopphöjd | 5,5 mm |
| Total höjd | 6 mm |
| Ånggenomgångsmotstånd, sd | 240 ± 25 m |
| Förväntad livslängd | över 50 år |

Källa: Isola, produktsida Platon Golv 1,07 × 10 m, läst 2026-09-19. Tillverkaren skriver att vid
renovering behövs oftast mekanisk ventilation av spalten, eftersom "äldre betongplattor gjutna
direkt på marken ... blir mer fuktbelastade", och att den bästa lösningen vid renovering alltid är
mekaniskt ventilerad Platon.

### Luften

- **Uteluftsflöde i bostäder: minst 0,35 liter per sekund och kvadratmeter golvarea.** BFS 2024:8
  3 kap. 5 §, första stycket.
- **Per person: minst 4,0 liter per sekund.** Samma paragraf, andra stycket.
- **Kontinuerlig luftväxling.** BFS 2024:8 3 kap. 4 §: "Byggnaders ventilationssystem ska vara
  utformade så att rum kan ha kontinuerlig luftväxling."
- **Markluft.** BFS 2024:8 3 kap. 3 §: luftkvaliteten får inte bli oacceptabel "på grund av
  spridning av luftföroreningar inom byggnaden, från mark eller från utomhusluften".
- Väsentlig ändring av anordning för ventilation är anmälningspliktig, PBF 6 kap. 1 § punkt 4.

### Rumshöjd

- **Nu:** BFS 2024:8 5 kap. 1 §: "Rumshöjden ska vara tillräcklig för att undvika olägenheter för
  människors hälsa och vara anpassad till rummets avsedda användning." Vid bedömningen beaktas
  golvyta, hur många som vistas där samtidigt, hur länge, vilka aktiviteter och användarnas
  känslighet. Boverket lägger till: "en person som är 2 meter lång når cirka 2,50 meter upp med
  fullt utsträckta armar", och att lägre höjd kan accepteras i rum där man vistas tillfälligt.
- **Förr:** BBR krävde 2,40 m i bostadsrum, men 2,30 m i källare i småhus. Boverkets vägledning om
  BBR avsnitt 3, versionen före 1 december 2025, sid. 85.

### Dagsljus

- **Nybyggnad:** dagsljusfaktor minst 1,0 procent för minst halva den sammanlagda bedömda ytan av
  samtliga vistelserum i bostaden. BFS 2024:8 4 kap. 1 §.
- **Vid ändring, skrivet för källare:** BFS 2024:8 13 kap. 5 §. "Om en byggnad ändras så att
  bostäder inreds i lokaler, som inte tidigare använts som bostad, ska den ändrade delen uppfylla
  kraven i 4 kap. 1 §. Finns skäl enligt 12 kap. 1 § så kan dock tillgång till dagsljus motsvarande
  en dagsljusfaktor om 0,8 procent godtas." Anpassningen är tillåten bara om ljusförhållandena
  skulle förbättras försumbart, eller om det krävs för att inte förvanska en särskilt värdefull
  byggnad.
- Boverkets egen motivering: "För att säkerställa att man inte gör bostäder i utrymmen där ljuset
  är undermåligt, till exempel i källare och andra mörka utrymmen finns ett särskilt krav på
  dagsljus vid ändring av byggnader."
- Vistelserum är utrymmena för samvaro, matlagning, måltider samt sömn och vila. Inte toaletter
  och förråd.
- Dagsljusfaktor 1 procent betyder att en hundradel av dagsljuset utomhus tar sig in i rummet.
- **Utblick** krävs i utrymme för samvaro och måltider, BFS 2024:8 4 kap. 2 §.
- Regeln gäller inte ett utrymme som tidigare varit bostad och görs om till bostad igen.

### Utrymning

- Grundkravet i bostad, verksamhetsklass 3A: tillgång till två av varandra oberoende
  utrymningsdörrar. BFS 2024:7 7 kap. 9 §, i lydelsen enligt BFS 2025:10.
- **Undantaget för villor och radhus:** en enda utrymningsdörr räcker om utrymning via fönster är
  möjlig. Villkoren, BFS 2024:7 7 kap. 14 §: fönstret leder till säker plats, utrymmet med
  fönstret är avskilt i samma plan som fönstret, och fönstrets underkant ligger högst 5,0 meter
  över utanförliggande marknivå, eller högst 8,0 meter om det finns fast stege.
- Boverket: "Utformningen är vanlig i villor och radhus."
- **Fönstrets mått**, BFS 2024:7 2 kap. 26 §: öppningsbart utan nyckel eller redskap, stannar i
  öppet läge, fri öppning minst 0,50 meter bred, minst 0,60 meter hög, summan av bredd och höjd
  minst 1,50 meter, och högst 1,20 meter från öppningens underkant till golvet.
- **Ändring av en byggnad som väsentligt påverkar brandskyddet är anmälningspliktig.** PBF
  6 kap. 1 § punkt 3.

### Lov och anmälan

- **Bygglov vid ändrad användning**, PBL 9 kap. 15 § punkt 1: krävs om byggnaden "helt eller
  delvis tas i anspråk eller inreds för ett väsentligen annat ändamål än det som byggnaden senast
  har använts för". Lag (2025:974).
- **Bygglov om ytterligare en bostad inreds**, samma paragraf punkt 2.
- Boverket: "Att ändra användningssätt i hela eller delar av en byggnad kräver bygglov först om
  det nya ändamålet är ett väsentligen annat än det pågående."
- **Anmälningsplikt**, PBF 6 kap. 1 §, Förordning (2025:979), sex punkter, varav fyra är
  relevanta här: bärande delar påverkas väsentligt, brandskyddet påverkas väsentligt, installation
  eller väsentlig ändring av anordning för ventilation, installation eller väsentlig ändring av
  anläggning för vattenförsörjning eller avlopp.
- En anmälningspliktig åtgärd får inte påbörjas före startbesked, och delen får inte tas i bruk
  före slutbesked. PBL 10 kap. 3 §.
- **Vid ändring får kraven anpassas**, PBL 8 kap. 7 §, med hänsyn till ändringens omfattning,
  byggnadens förutsättningar och varsamhetsbestämmelserna.
- **Kraven gäller även utan lov och anmälan**, men får då anpassas i skälig utsträckning, PBL
  8 kap. 8 §. Boverket skriver det rakt ut på flera vägledningssidor: "Kraven gäller oavsett om
  åtgärden kräver bygglov, anmälan eller inget av det."

### Kostnad

| Post | Belopp | Källa |
|---|---|---|
| Full källarutbyggnad, snitt | 20 000 kr per kvm | Byggstart |
| Samma, spann | 15 000 till 26 000 kr per kvm | Byggstart |
| Enbart ytskikt | ungefär halva den summan | Byggstart |
| Dränering, arbetskostnad | 3 000 kr per löpmeter | Villaägarna |

Källor: Byggstart, prisguide inreda källare, läst 2026-09-19. Villaägarna, måste du dränera
huset, 2024-12-04. Alla belopp inklusive moms.

Byggstarts prisexempel, en uthyrningsdel på cirka 50 kvadratmeter i en tidigare oinredd källare,
totalt 844 000 kr:

| Post | Belopp |
|---|---|
| Bilning, 40 kubik | 180 000 kr |
| Dränering, 35 löpmeter | 157 500 kr |
| Badrum | 215 000 kr |
| Arkitekt med bygglovsansökan | 40 000 kr |

Enhetspriserna bakom: dränering 4 500 kr per löpmeter, bilning 4 500 kr per kubikmeter,
golvgjutning 550 kr per kvadratmeter, upptagning för nytt fönster 8 000 kr per styck, golv, tak
och innerväggar 2 800 kr per kvadratmeter. Källa: Byggstart, samma sida.

### Väggen, som systersidan äger

Noteras här bara för att gränsen ska vara dokumenterad. Villaägarnas checklista för en frisk
källare: isolera utifrån, stålreglar med distanser mot väggen så att luft kan cirkulera, cellplast
hellre än mineralull, och klinker eller laminat på en ventilerande plastmatta. Vi i Villa: högst
50 mm isolering invändigt, silikatfärg, inga organiska material mot betongen. **Inget av detta
skrivs ut på vår sida**, utöver en mening som skickar läsaren till
`/grund/isolera-kallarvagg/`.

## 3. Korsdubblettkontroll mot systersidor

Granskningen 2026-09-19 fällde tolv meningar som stod ordagrant på två sidor. Kontrollerat före
skrivning, punkt för punkt:

- **Villaägarnas femtio år** står redan i `fukt-i-kallaren.mdx` i formen "En gammal dränering kan
  fungera i femtio år, särskilt om källaren bara används som källare". Vår sida vänder på den och
  använder villkoret, inte påståendet: användningen är det som gör talet ogiltigt. Ingen ordagrann
  mening.
- **Tejptestet** ägs av `fukt-i-kallaren.mdx` och beskrivs inte här. Vi säger vad det ger och
  länkar.
- **75 procent relativ luftfuktighet** står på `fukt-i-kallaren.mdx`, `isolera-krypgrund.mdx` och
  här. Talet får stå på flera sidor, men de två befintliga citerar BBR 6:52. Vår sida citerar den
  författning som gäller, BFS 2024:8 7 kap. 1 §, och skriver ut att talet är oförändrat.
  Formuleringen är egen.
- **Stuprör, marklutning och dagvattenbrunn** ägs av `dranera-hus.mdx` efter granskningens krav
  2.6.7. Vår sida räknar inte upp dem i samma ordning och upprepar inte Anticimex tal om 3 000
  liter. Vi säger att arbetet ska vara gjort och länkar dit.
- **Krypgrund** nämns i en enda mening, med länk, och utan att upprepa isoleringsordningen.
- **Radon** ägs av varningen på `fukt-i-kallaren.mdx`. Vår sida nämner det i en mening som handlar
  om något annat, nämligen att markluft och markfukt tar samma väg, och länkar.
- **3 grader** står på `isolera-krypgrund.mdx` om luften i kryputrymmet, från Svenskt Trä. Här
  gäller talet marken under golvisoleringen, från Fuktcentrum, och meningen säger uttryckligen
  vilka två temperaturer som jämförs.

## 4. Det vi inte kunde hämta

1. **Byggahus, `byggahus.se/renovera/inreda-kallare`.** Svarar HTTP 403 på hämtning och visar en
   JavaScript-vägg för automatiska läsare. Sidan ligger i topp tre på frasen. Chefredaktören bör
   öppna den i webbläsare och kontrollera att vår "bättre än ettan"-lista håller också mot den.
2. **Kährs aktuella läggningsanvisning.** `kahrs.com` svarar 404 på de dokumentadresser som ligger
   i sökresultaten. Talen i avsnitt 2 är lästa ur Kährs läggningsanvisning för trägolv med
   Woodloc 2G, distribuerad av Bygghemma, som hänvisar till Hus AMA 98. Sakinnehållet om
   fuktskydd på betonggolv direkt på mark är oförändrat i Kährs nyare anvisningar så vitt vi kan
   se, men **artikeln skriver därför inte ut något årtal för anvisningen**, och chefredaktören bör
   öppna kahrs.com och bekräfta 0,2 mm och 95 procent mot den utgåva som gäller i dag.
   Överlappsmåttet i millimeter föll bort i vår textextraktion och står därför inte i artikeln.
3. **Författningarnas PDF-original.** `rinfo.boverket.se` levererar BFS 2024:7, 2024:8 och 2024:11
   som PDF, men filerna gick inte att läsa som text i vår miljö. Alla paragrafcitat i avsnitt 2 är
   i stället hämtade ur Boverkets egen vägledning i PBL kunskapsbanken, som återger
   föreskriftstexten ordagrant i citatrutor. Adresserna står i artikelns källförteckning.
4. **DittBygg.se** blockerar hämtning med en brandvägg ("455 Security Incident Detected"). Sidan
   rankar på frasen men citerar samma prisunderlag som Hemsmart.
5. **Sökvolymen.** Ingen volymsiffra är hämtad för någon av fraserna. Talet i avsnitt 1 är en
   uppskattning och är märkt som det både här och i rapporten.
6. **Taxeringsvärdet.** Att biyta som blir boarea påverkar taxeringsvärdet är ett vanligt
   påstående i toppen. Vi har inte hittat en källa hos Skatteverket som säger det i den formen,
   och **påståendet står därför inte i artikeln**.
