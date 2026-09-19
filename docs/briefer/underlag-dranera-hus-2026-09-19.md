# Underlag: dränera hus, så går det till och när du gör det själv

Hämtat 2026-09-19 av skribenten inför `/grund/dranera-hus/` (`src/content/guider/grund/dranera-hus.mdx`).
Typ projektguide, pelare grund, nivå mellan, målgrupp både nybörjare och den som redan
begärt in offerter.

Sidan äger **metoden**. Kostnaden ägs av `/rakna/dranering/` och bäddas in med
`<Kalkylator namn="dranering" />`. Diagnosen ägs av `/fukt/fukt-i-kallaren/` och
`/rakna/kallare/`, och bäddas in med `<Verktygskort kalkylator="kallare" />` tidigt.
Krypgrunden ägs av `/grund/isolera-krypgrund/`, sprickor och sättningar av
`/grund/sprickor-i-grunden/`.

## 1. Sökanalys

**Huvudfras.** "dränera hus" och "dränering av hus", alltså projektet som verb. Sökaren
vill veta hur det går till och om hon kan göra något själv, inte i första hand vad det
kostar (den frasen är "vad kostar dränering" och den äger verktyget).

**Volym.** Ej hämtad. Googles verktyg kräver aktivt annonskonto, samma spärr som i
`docs/briefer/underlag-kalkyl-dranering-2026-09-18.md` avsnitt 9. **Uppskattning**, inte
data, och publiceras inte på sidan: 500 till 1 500 sökningar per månad på huvudfrasen,
utifrån att fem byggkedjor och två villatidningar alla byggt egna sidor på den. Den
långa svansen ("dränera hus själv", "dränering steg för steg", "hur djupt dränering")
ligger sannolikt i samma härad tillsammans.

**Sökintention.** Blandad. Hälften vill förstå vad de köper innan de tar in offert, och
hälften vill veta om de kan gräva själv. Ingen av de lästa sidorna svarar rakt på den
andra halvan.

**De översta organiska resultaten**, sökt på svenska 2026-09-19:

| Träff | Gick att läsa | Vad den ger |
|---|---|---|
| Hornbach, dränera huset steg för steg | **Nej** | Sidan renderas med JavaScript, bara meny och sidfot kom ut |
| Vi i Villa, så dränerar du grunden steg för steg | Ja | Åtta moment, schakt 15 cm under plattan, fall 0,5 cm per meter, makadam 11/16, cirka 30 cm över röret, stuprörsledning på minst 60 cm djup, två veckors aktivt arbete, 3 500 till 4 500 kr per meter |
| Bolist, dränera kring husgrund | Ja | Sju steg, schakt cirka 1 m ut och 50 cm under sulan, makadam 8 till 16 mm, bädd 3 till 10 cm, fall minst 0,5 cm per meter, rör 75 mm, växter inte närmare än 40 cm, "20 graders lutning tre meter bort från huset" |
| Byggahus, dränera grunden själv steg för steg | **Nej, 403** | Blockerar hämtning, samma spärr som i septemberunderlaget |
| Byggmax, dränera husgrund | **Nej** | Produktsidan renderas med JavaScript |
| HelpHero, dränering steg för steg | Ja | Schakt minst 1 m ut och cirka 50 cm under sulans botten, grusbädd 10 cm i 8 till 16 mm, rör 110 mm, fall minst 5 mm per meter, avsnittsvis grävning, samma "20 graders lutning" |
| Markexperter, hur gör man när man dränerar | Ja | Momenten i ord utan mått, vänta 2 till 3 månader på sättning före återställning, avråder från eget arbete |

**Vad ettan (och hela toppen) täcker.** Momenten i rätt ordning, ungefär rätt mått på
schakt och makadam, och en bild på ett rör i en grop. Alla fyra lästa konkurrenter
skriver ungefär samma sak i ungefär samma ordning.

**Vad de saknar, punkt för punkt.**

1. **Ingen anger källa för ett enda mått.** Fallet står som "minst 0,5 cm per meter" utan
   avsändare, och schaktdjupet som "50 cm under sulan" utan att säga vems anvisning det är.
2. **Ingen säger att källorna är oense.** Schaktdjupet anges som 15 cm (Vi i Villa), 30
   till 40 cm (Villaägarna) och 50 cm (GarBo, Bolist, HelpHero), och tillverkaren Isodrän
   mäter något annat än alla tre: rörets underkant mot sulans underkant, inte schaktbotten.
3. **"20 graders lutning tre meter bort från huset" är fel och kopieras vidare.** Det står
   ordagrant hos Bolist, HelpHero och Markexperter, och som "helst med 20 graders lutning"
   hos Vi i Villa. Tjugo grader är 36 cm per meter, alltså 1,09 m höjdskillnad på tre
   meter. Ingen av dem har räknat efter. Talet som menas är 1:20.
4. **Ingen tar upp kommunens regler för dräneringsvatten.** Att koppla dräneringen till
   spillvattnet är inte tillåtet, och flera kommuner kräver bortkoppling just vid en
   omdränering. Ingen läst konkurrent nämner det.
5. **Ingen skriver att översta lagret återfyllning inte ska dränera.** Isodräns
   arbetsinstruktion är tydlig: de översta 0,3 m ska vara finkornig jord.
6. **Ingen förklarar varför fuktskyddet ska vara diffusionsöppet**, och Vi i Villa nämner
   ordet utan att säga vad det betyder.
7. **Ingen ställer diagnosfrågan före grävningen.** Alla utgår från att läsaren redan
   bestämt sig.
8. **Gränsen för eget arbete är otydlig.** Markexperter avråder rakt av, HelpHero säger
   "hyr en liten grävare", och ingen delar upp jobbet i det du kan och det du inte ska.
9. **Ingen säger vad som ska stå i offerten.** Maskinhyran på egen rad är det enda sättet
   att veta hur stort rotavdraget blir, eftersom Skatteverket undantar grävmaskinen.
10. **Ingen nämner rensbrunn eller spolbrunn** annat än som "uppsamlingsbrunn", trots att
    det är skillnaden mellan att spola ledningen och att gräva upp den igen.

**Tre sätt vår sida blir bättre**, alltså det som går att kontrollera i den färdiga texten:

1. **Källa och avsändare på varje mått, och en tabell där källorna är oense.** Schaktdjupet
   och fallet får varsin tabell med fyra rader och avsändare, i stället för ett tal utan
   ursprung. Det gör också att läsaren kan läsa en offert och se vilken anvisning
   entreprenören följer.
2. **Ett räknefel som hela branschen kopierar rättas på sidan, med räkningen utskriven.**
   Tjugo graders marklutning mot 1:20.
3. **Gränsen för eget arbete delas i tre högar**, med det du bör göra själv, det du kan
   göra med maskin och hjälp, och det du inte ska röra, plus de två reglerna som gör att
   schakten rasar eller att huset sätter sig.

Tillkommer: kommunens dagvattenregel, det finkorniga översta lagret, diffusionsöppenheten
förklarad i samma mening som ordet nämns, och offertens innehåll.

**Rubrikstruktur** (H2 i ordning): diagnos före grävning, gör det billiga först, momenten
i ordning, schaktet, fallet, röret och makadamen, fuktskyddet, återfyllningen, dagvattnet,
eget arbete, tidsåtgång, beställningen.

**Interna länkar ut:** `/fukt/fukt-i-kallaren/`, `/rakna/kallare/` (Verktygskort),
`/rakna/dranering/` (Kalkylator), `/grund/sprickor-i-grunden/`, `/grund/isolera-krypgrund/`,
`/fukt/avfuktare-kallare/`.

**Interna länkar in:** se avsnitt 5.

## 2. Faktaunderlag, varje siffra med källa

### Schaktet

| Uppgift | Tal | Källa |
|---|---|---|
| Schaktbredd längs väggen | Cirka 1 m | [GarBo](https://www.garbo.se/sv-se/bygga-hus/dranera-huset-hur-mycket-kostar-det-och-hur-gar-det-till) |
| Schaktbotten under grundsulan | 50 cm | GarBo, [Bolist](https://bolist.se/gor-det-sjalv/ut/grund/dranera-kring-husgrund/), [HelpHero](https://helphero.se/kunskapsbank/markarbete/dranering-steg-for-steg) |
| Grävdjup under betongplattans lägsta punkt | 3 till 4 dm | [Villaägarna](https://www.villaagarna.se/radgivning-och-tips/utomhus/grund/maste-du-dranera-huset/) |
| Schakt under bottenplattan | 15 cm | [Vi i Villa](https://viivilla.se/gor-det-sjalv/sa-dranerar-du-grunden-steg-for-steg/) |
| Rörets underkant mot sulans underkant | Minst 100 mm lägre | [Isodrän, arbetsinstruktion källarvägg](https://www.isodran.se/arbetsinstruktioner/kallarvagg) |
| Rörets läge vid djup grundsula | Minst 500 mm under golvets överkant | Isodrän, samma sida |

Citat, Isodrän: "minst 100 mm lägre än grundsulans eller kantbalkens underkant". Vid
"djupare grundsula än 500 mm under golvöverkant" placeras ledningen "minst 500 mm under
golvets överkant".

Citat, GarBo: "Jorden måste schaktas bort med ca 1 meters bredd och ned till 50 cm under
husets grundsula."

Citat, Villaägarna: "Grävdjupet för ett nytt hus är som minst 3–4 decimeter under
betongplattans lägsta punkt."

**Två olika mått blandas ihop i källorna.** GarBo, Bolist och HelpHero mäter schaktbotten
mot sulans underkant. Isodrän mäter rörets underkant mot samma punkt. Ett rör på 110 mm i
en bädd på 100 mm gör skillnaden mellan de två måtten till drygt två decimeter, och det
är en stor del av spridningen i tabellen. Den iakttagelsen är **vår**, inte hämtad.

**Gräv i etapper.** "5–6 meter i taget" i stället för en hel sida åt gången, för att
grunden inte ska sätta sig. Källa: [Gör Det Själv, dränering av
husgrund](https://gds.se/hus/inomhusklimat/fukt-i-kallare/dranering-av-husgrund-skydda-ditt-hus-mot-fukt-och-mogel).
Samma sida varnar uttryckligen för att gräva under grundens underkant. Markexperter säger
samma sak i ord, utan tal.

### Fallet på ledningen

| Källa | Fall | Skrivsätt på sidan |
|---|---|---|
| Isodrän, arbetsinstruktion källarvägg | 5 mm per meter | "Lutning 5 mm per meter", aldrig bakfall |
| Gör Det Själv, dränering av husgrund | 3 till 5 promille | "minst 3 promille och helst 5 promille (0,5 cm fall per meter)" |
| Gör Det Själv, inget vatten i källaren | 2 till 3 mm per meter | "2-3 promille, dvs. 2-3 millimeter per meter" |
| Vi i Villa, dags att dränera | 1:200 | "Den ska luta 1:200 mot ett avlopp eller stenkista" |
| Bolist och Vi i Villa, steg för steg | 0,5 cm per meter | "minst 0,5 cm per meter" |

Fem mm per meter och 1:200 är samma tal. Den nedre kanten hos Gör Det Själv är alltså
knappt hälften av vad tillverkaren kräver, och det är den enda egentliga motsägelsen.

**Vår egen räkning** (skrivs ut på sidan som vår): ett hus på 12 gånger 8 m har 40
löpmeter runt grunden. Ligger högpunkten i ett hörn och vattnet går åt två håll till
brunnen är den längsta sträckan ungefär 20 m, vilket vid 5 mm per meter ger 100 mm
höjdskillnad från högpunkt till brunn. Husets mått är kalkylatorns standardfall i
`src/lib/kalkyl/dranering.ts`.

Citat, Isodrän om bakfall: ledningen kan under vissa omständigheter läggas "med mindre
eller utan fall, dock aldrig i bakfall".

### Röret, makadamen och duken

| Uppgift | Tal | Källa |
|---|---|---|
| Makadam runt röret | 8 till 16 mm | GarBo ("dimension 8/16 mm"), Bolist, HelpHero, Isodrän ("cirka 8-16 mm") |
| Makadam, Vi i Villa | 11/16 | Vi i Villa |
| Bädd under röret | 10 cm | HelpHero, Gör Det Själv |
| Makadam över röret | Cirka 30 cm | Vi i Villa |
| Rörets diameter | 70 mm som minst | Gör Det Själv, "Ø 70" |
| Rörets diameter, sålda dimensioner | 75, 90 och 110 mm | Bolist (75), Bauhaus (90, ur septemberunderlaget), HelpHero och Markexperter (110) |
| Duk runt makadamen | Genomsläpplig markduk utanför och ovanför makadamen | GarBo |
| Duk runt röret | Ska inte lindas | Isodrän: "Dräneringsledningen skall inte lindas in i filterduk." |
| Fiberdukens klass | N3 | Gör Det Själv, dränering av husgrund |

**Motsägelsen att skriva ut.** Isodrän säger att röret inte ska lindas i filterduk, medan
byggvaruhusen säljer dräneringsslang med geotextil färdigpåsydd (Bauhaus, 56 kr per meter,
hämtat 2026-09-18 enligt septemberunderlaget). Båda har rätt i sitt sammanhang: duken runt
röret är till för finkornig jord som annars vandrar in, och den är en nackdel i en
korrekt byggd makadambädd där den kan sätta igen. Den avvägningen är **vår** slutsats av
de två källorna och skrivs ut som sådan.

### Fuktskyddet mot väggen

**Noppmatta.** Isola Platon Xtra: nopphöjd "7 mm", monteras "direkt utvändigt mot grunden"
med "spik med brickor som passar till de fyrkantiga knopparna", och "Mattan avslutas 5 cm
under marknivå och avslutas med kantlist". Källa:
[Isola](https://isola.se/produkter/golv-och-grund/dranering-och-grundmur/grundmursmatta/platon-xtra/100-x-20-m).
Priset 80 kr per kvm står i septemberunderlaget, hämtat hos Bauhaus 2026-09-18.

**Grundmursskiva.** Isodrän: "minst 100 mm tjock Isodrän-skiva" vid liten fuktbelastning,
"minst 200 mm skiva runt grundsulan upp till 500 mm över invändig golvyta" vid stor.
Skivorna monteras "kant mot kant upp strax under färdig markyta", fästs med isolerhållare
(en till två per skiva) eller limmas, och avslutas med täcklist "alltid strax under
markytan", fäst med slagnit på "ett maximalt avstånd på 150 mm". Källa: Isodrän,
arbetsinstruktion källarvägg. Priset 320 kr per kvm står i septemberunderlaget.

**Gamla tätskikt ska bort.** Citat, Isodrän: "Ett korrekt monterat Isodrän-system släpper
inte fram vatten till grundmuren varför tätskikten förlorat sin funktion och endast
hindrar uttorkning."

**Plastmatta som enda skydd.** Villaägarna avråder: "den kalla marken gör att fukten
fastnar i väggarna istället för att vandra ut från väggen".

**Myndighetens formulering.** Boverket: fukttransporten från marken är främst kapillär,
ibland genom diffusion, och väggen ska skyddas från markfukt på utsidan, inklusive den
fyllning som ligger an mot väggen. Källa:
[Boverket, risk med fuktinträngning källarvägg](https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-fuktskador/fuktrisker-for-grund/fuktrisker-med-kallare/risk-med-fuktintrangning-kallarvagg/).
**Förbehåll:** sidan är JavaScript-renderad och gick inte att läsa maskinellt vid det här
tillfället heller. Formuleringen är återgiven ur
`docs/briefer/underlag-fukt-i-kallaren-2026-09-16.md` och ur den publicerade texten i
`/fukt/fukt-i-kallaren/`, där samma förbehåll noterades 2026-09-16.

### Återfyllningen

- Lager om cirka 0,3 m som packas noggrant. Källa: Isodrän, arbetsinstruktion källarvägg.
  GarBo säger samma sak: "Packa massorna med maskin, i lager om 30 cm, upp till färdig
  marknivå."
- Inga stenar eller jordklumpar större än 100 mm mot filterduken. Källa: Isodrän.
- "De översta 0,3 m ska alltid återfyllas med finkornig jord (ej dränerande)". Källa:
  Isodrän. Ingen läst konkurrent nämner det.
- Jordtätning ovanpå, minst 20 cm. Källa: Gör Det Själv, dränering av husgrund.

### Markfallet och det billiga först

- Tak på 150 kvm, 20 mm regn, 3 000 liter vatten. Citat, Anticimex: "Vid exempelvis 20 mm
  regn på ett 150 m2 stort tak så måste 3 000 liter vatten transporteras bort via
  dagvattensystemet." Källa: [Anticimex](https://www.anticimex.se/fuktskador/grund-kallare/).
  **Verifierad 2026-09-19, står kvar.**
- Anticimex om marken: "Se till att marken lutar bort från huset om den inte gör det."
  Inget tal.
- Villaägarna anger inget tal för marklutning.
- Stuprörsledning på minst 60 cm djup med 0,5 cm fall per meter. Källa: Vi i Villa.
- Växter inte närmare fasaden än 40 cm. Källa: Bolist.
- **"20 graders lutning tre meter bort från huset"** står hos Bolist, HelpHero och
  Markexperter, och som "helst med 20 graders lutning" hos Vi i Villa. Räkningen:
  tan 20° är 0,364, alltså 36 cm per meter och 1,09 m på tre meter. Talet som avses är
  1:20, alltså 5 cm per meter och 15 cm på tre meter.
- **1:20 har avsändare, rättat 2026-09-20.** Vid första hämtningen hittade vi ingen källa
  som angav 1:20 med namn, och sidan skrev därför ut talet som vårt eget. Det stämmer inte:
  två isolertillverkare anger det ordagrant, hämtade i
  `docs/briefer/underlag-isolera-kallarvagg-2026-09-19.md`.
  [Rockwool](https://www.rockwool.com/se/produkter-och-konstruktioner/yttervagg/betong/):
  "Markytan ska luta minst 1:20 (ca 3º) inom 3 m från byggnaden."
  [Paroc, projekteringsstöd fuktsäkra konstruktioner](https://www.paroc.com/sv/documents/uploads/paroc-moisture-guide):
  "det rekommenderade fallet bort från byggnaden 1:20 på ett avstånd av 3 m (cirka 15 cm
  höjdskillnad på en sträcka av 3 m)." Rockwools parentes om ungefär tre grader är dessutom
  den rakaste motbilden till de tjugo graderna som cirkulerar. Båda ligger nu i sidans
  källförteckning, och meningen om att talet är vårt eget är struken.

### Dagvattnet

- Citat, Kristinehamns kommun: "Det är inte tillåtet att påbörja eller fortsätta med att
  avleda dräneringsvatten till det kommunala spillvattennätet." Fastighetsägaren måste
  "koppla bort befintlig dränering från spillvattennätet när felkoppling påträffas
  och/eller vid omdränering". Och: "Fastighetsägare som inte följer Kristinehamns kommuns
  krav på omkoppling, kommer inte att kunna ställa anspråk på ersättning för skador."
  Källa: [Kristinehamns kommun, dagvatten och
  dränering](https://www.kristinehamn.se/bygga-bo-och-leva/vatten-och-avlopp/dagvatten-och-dranering/).
- Regeln kommer ur ABVA, alltså kommunens allmänna bestämmelser för vatten och avlopp, och
  ser likadan ut i flera kommuner. Sidan skriver att den ska kontrolleras i den egna
  kommunen, eftersom vi bara läst en.
- Anslutning till den kommunala dagvattenledningen kräver enligt Gör Det Själv att man
  först talar med kommunens byggnadskontor, och kopplingen görs av behörig entreprenör.

### Eget arbete, tid och pengar

- Citat, GarBo: "Det går att utföra dränering och grundisolering på egen hand, men det är
  ett ganska krävande arbete."
- Material för egen regi i hus upp till 300 kvm: 25 000 till 40 000 kr, och med maskinhyra
  och köpt hjälp "en bit över 50 000 kronor". Källa: Gör Det Själv, dränering av husgrund.
- Cirka två veckors aktivt arbete för en normalstor villa med två meter djup källare.
  Källa: Vi i Villa, steg för steg. Gör Det Själv anger ungefär samma tid.
- Vänta 2 till 3 månader på att marken sätter sig innan slutlig återställning. Källa:
  Markexperter. Samma sida avråder från sommararbete.
- Rotavdrag 30 procent av arbetskostnaden, högst 50 000 kr per person och år, inom ett
  gemensamt tak för rot och rut på 75 000 kr. Citat, Skatteverket: "Företaget får dra av
  högst 30 procent av arbetskostnaden på fakturan" och "Du kan få högst 75 000 kronor per
  år i rotavdrag och rutavdrag. Av den summan får högst 50 000 kronor vara rotavdrag."
  Källa: [Skatteverket, så fungerar
  rotavdraget](https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html).
  **Verifierad 2026-09-19: 30 procent gäller, ingen tillfällig höjning nämns på sidan.**
- Maskinell utrustning ger inte rätt till avdrag. Källa: Skatteverket, ger arbetet rätt
  till rotavdrag (citerad i septemberunderlaget, avsnitt 7).

### Rensbrunn och spolbrunn

**Ingen källa vi kunnat läsa sätter ett tal.** Vi i Villa skriver att ledningen ska luta
"mot ett avlopp eller stenkista", Gör Det Själv skriver "uppsamlingsbrunn", och Isodräns
arbetsinstruktion nämner ingen brunn alls. Sökträffarna på spolbrunn är entreprenörsbloggar
utan avsändare och används inte. Sidan skriver därför rådet att sätta en rensbrunn i varje
hörn som **vårt eget**, med motiveringen att en ledning som inte går att spola bara går att
gräva upp, och säger rakt ut att ingen av våra källor anger ett intervall.

## 3. Det vi inte kunde hämta

| Källa | Vad som hände | Vad chefredaktören kan göra |
|---|---|---|
| hornbach.se, dränera huset steg för steg | Renderas med JavaScript, bara meny och sidfot kom ut | Öppna i webbläsare och läs vad ettan faktiskt täcker. Punkt 1, 3 och 9 i "vad de saknar" bygger på att den liknar de andra |
| byggahus.se, dränera grunden själv steg för steg | 403, samma spärr som 2026-09-18 | Öppna i webbläsare. Den här är den enda i toppen som uttryckligen vänder sig till den som ska gräva själv, alltså vår närmaste konkurrent |
| byggmax.se, dränera husgrund | Renderas med JavaScript | Samma sak, kontrollera om den har mått vi missat |
| boverket.se, risk med fuktinträngning källarvägg | Renderas med JavaScript, andra gången i rad | Öppna och kontrollera att formuleringen om utvändigt skydd står kvar ordagrant. Vi citerar den i andra hand via `/fukt/fukt-i-kallaren/` |
| isola.se, Isola Academy Platon Xtra grundmur | 404 | Produktsidan gick att läsa och gav nopphöjd och kantlist. Academy-sidan kan ha monteringsdetaljer vi saknar, som överlapp mellan våder |
| isodran.se, monteringsanvisning som PDF | Filen är inskannade bilder utan textlager | Arbetsinstruktionen på webbsidan gav allt vi behövde. PDF:en kan innehålla figurerna 3a och 3b som instruktionen hänvisar till |
| mobergsbygghandel.se, System Platon Grund | PDF utan textlager | Överlapp mellan våder, infästningsavstånd och avslutning nedtill saknas därför i vårt underlag. Sidan skriver inga tal om det |
| Svenskt Vatten, dagvattenregler | Ingen central regel hittad i läsbar form. Servisbroschyren 2022 kom upp i sökningen men är en PDF | Vi lutar oss på en kommun (Kristinehamn) och skriver ut att regeln ska kontrolleras lokalt |
| Marklutning 1:20 med avsändare | Löst 2026-09-20 | Rockwool och Paroc anger 1:20 ordagrant, hämtade i underlaget för isolera källarvägg. Raden är kvar bara som historik |
| Spolbrunn, intervall och placering | Bara entreprenörsbloggar | Samma sak. Rådet står som vårt |

## 4. Verifieringspunkter ur septemberunderlaget

Av de tio punkterna i `docs/briefer/underlag-kalkyl-dranering-2026-09-18.md` avsnitt 9 har
följande kontrollerats om 2026-09-19:

| Punkt | Utfall |
|---|---|
| 4. Villaägarnas löpmeter | **Bekräftad.** Löpmetern räknas längs alla husets ytterväggar, alltså hela varvet runt. Modulen räknar rätt |
| 7. Skatteverkets nivå och tak | **Bekräftad.** 30 procent, högst 50 000 kr i rotavdrag inom ett gemensamt tak på 75 000 kr för rot och rut. Sidan nämner ingen tillfällig höjning |
| 9. Anticimex om regnet | **Bekräftad ordagrant.** "Vid exempelvis 20 mm regn på ett 150 m2 stort tak så måste 3 000 liter vatten transporteras bort via dagvattensystemet" |
| 1. Husgrunders kalkylator | Ej kontrollerad, renderas fortfarande med JavaScript |
| 2. Byggahus | Ej kontrollerad, 403 kvarstår |
| 3. Sambla | Ej försökt den här gången |
| 5. Materialpriserna hos Bauhaus och Markgrossen | Ej kontrollerade. Isolas egen produktsida bekräftar däremot Platon Xtra som produkt och ger nopphöjd 7 mm |
| 6. Mark och Anläggnings prissida | Ej kontrollerad |
| 8. Ocab och Polygon | Ej kontrollerade |
| 10. Vår totalsumma mot marknaden | Delvis. Vi i Villa anger 3 500 till 4 500 kr per meter inklusive arbete, material, isolering, schakt och transport, alltså inom verktygets spann på 3 400 till 7 200 kr |

## 5. Inlänkar som ska in från andra filer

Föreslås, görs inte av skribenten:

1. `src/content/guider/fukt/fukt-i-kallaren.mdx`, i stycket som slutar "Tre skäl gör det
   motiverat ändå", direkt efter punktlistan. Ny mening: "Hur en dränering går till, vad du
   kan göra själv och vad som ska stå i offerten står i [dränera huset](/grund/dranera-hus/)."
2. `src/pages/rakna/dranering.astro`, listan under "Läs vidare", som ny första punkt:
   `<li>` med `href="/grund/dranera-hus/"` och texten "Dränera huset, så går det till och
   hur långt du kommer själv".
3. `src/pages/rakna/dranering.astro`, i stycket under rubriken "Vad som gör priset dubbelt
   så högt", sista meningen: lägg till "Vad du faktiskt betalar för i varje moment står i
   [dränera huset](/grund/dranera-hus/)."
4. `src/content/guider/fukt/avfuktare-kallare.mdx`, där markfukt nämns som det en avfuktare
   inte löser: en mening som pekar på `/grund/dranera-hus/`.
5. Pelarhubben `/grund/` bygger sitt galleri av frontmatter och behöver ingen ändring.
