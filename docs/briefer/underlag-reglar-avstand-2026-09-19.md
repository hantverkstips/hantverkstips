# Underlag: avstånd mellan reglar och plintar på altan

Sida: `/altan/reglar-avstand-och-dimensioner/`, fil `src/content/kunskap/altan/reglar-avstand-och-dimensioner.mdx`.
Huvudfras: **avstånd mellan reglar altan**, 70 sökningar per månad, växer 80 procent. Typ kunskap, pelare altan, nivå mellan.
Hämtat 2026-09-19 av skribenten.

## 1. Sökanalys

Sökningen görs på svenska av någon som står i byggvaruhuset eller har ritat altanen på ett papper. Intentionen är rent informativ och **tabellsökande**: läsaren vill ha ett tal, inte ett resonemang, och vill ha det innan hon betalar för virket. Frågan bakom frasen är i praktiken tre frågor: hur tätt ska reglarna sitta, hur långt får de spänna, och var sätter jag plintarna.

### De tre översta organiska resultaten

| Sida | Vad den ger | Vad den saknar |
|---|---|---|
| gds.se, Hur stort avstånd mellan reglarna till trädäcket | 45 cm vid 21 mm trall, 60 cm vid 28 mm | Cirka 150 ord, ingen tabell, ingen källa, inget om spännvidd |
| clasfixare.se, Hur reglar man en altan | 60 cm, 40 cm vid tunn trall, upp till 80 cm vid tjock, dimensioner 45 × 95 till 45 × 170 | Ingen tabell, enda källan är en artikel i Aftonbladet om bygglov, inget om spännvidd eller plintavstånd, texten är en tjänsteförsäljning med FAQ |
| husgrunder.com, Bygga altan, avstånd mellan reglarna, stolpar och plintar | Rubriken lovar allt tre, sidan är i praktiken en ingång till företagets övriga sidor | Inga tal alls om c-mått, dimension, spännvidd eller plintavstånd |

Bakom dem ligger Byggahus forumtrådar (Avstånd mellan reglar/bärlina, Spännvidd dimension bärlinor, Dimensionering altandäck), Hornbachs och XL-Byggs projektsidor och två affärsdrivna altansidor (altanplaneraren.se, altanbyggaren.nu). Byggahustrådarna har de bästa svaren men de är odaterade, spridda över flera trådar och saknar tabell. Ingen av sidorna på första sidan visar Svenskt Träs tal.

**Slutsats.** Hela förstasidan svarar "60 cm" och stannar där. Ingen visar var talet kommer ifrån, ingen svarar på den fråga som kommer direkt efter (hur långt får regeln gå mellan bärlinorna), och ingen kopplar ihop regeln med plinten.

### Bättre än ettan, sex punkter

1. **Riktig tabell ur primärkällan.** Svenskt Träs Lathunden, utgåva 8:2021, har en egen dimensioneringstabell för golvbjälkar till altan. Talen står ingenstans på förstasidan i dag. Vi publicerar dem med dimension, c-mått och hållfasthetsklass.
2. **Plintavståndet med i samma sida.** Lathundens bärlinetabell ger maximalt plintavstånd som funktion av bärlinans dimension och reglarnas fria längd. Ettan nämner ordet plint i rubriken utan att ge ett tal.
3. **Två tal i stället för ett.** Vi skiljer på c-måttet (som trallens tjocklek styr) och spännvidden (som regelns höjd styr). Konkurrenterna blandar ihop dem, och det är förväxlingen som gör att folk köper 45 × 145 till en altan som spänner tre meter.
4. **Hållfasthetsklassen syns.** C24 och C14 skiljer nästan en halvmeter på samma dimension. Ingen av de tre sidorna nämner klassen, trots att båda ligger i samma hylla på byggvaruhuset.
5. **Räknare på plats.** `<Kalkylator namn="altan" />` räknar reglar, bärlinor och plintar ur exakt den tabell sidan visar. Ingen konkurrent har ett verktyg på sidan.
6. **Snözonen besvarad, inte viftad bort.** Lathundens altantabeller frågar inte efter snözon, dess takbjälkstabeller gör det. Vi säger det rakt ut och säger vad man gör i stället.

### Rubrikstruktur

H1: Avstånd mellan reglar och plintar, tabellen du letar efter
H2: Trallens tjocklek bestämmer c-måttet
H2: Så långt får reglarna spänna mellan bärlinorna
H2: Plintavståndet följer av bärlinan
H2: Vad du vinner och förlorar på c 400 mm
H2: Snön i norr står inte i tabellen
H2: Tre saker tabellerna inte täcker

### Interna länkar

In: från `/altan/` (hubgalleriet, automatiskt), och föreslagna manuella inlänkar i rapporten.
Ut: `/altan/bygglov-altan/`, `/rakna/altan/`, `/guider/altan/`. Inte `/altan/bygga-altan/` (utkast just nu), inte `/altan/trallskruv/` eller `/altan/tradack-pa-mark/` (finns inte som filer ännu, länken hade stoppat bygget).

## 2. Faktaunderlag

### 2.1 Trallens tjocklek mot största centrumavstånd

Källa: TräGuiden, [Läggning av trall](https://www.traguiden.se/konstruktion/konstruktiv-utformning/tradack/tradack/laggning-av-trall/), tabell 1. Hämtad 2026-09-19.

| Tjocklek, mm | Största c-mått, mm | Skruvlängd, mm |
|---|---|---|
| 22 | 400 | 45 |
| 26 | 450 | 55 |
| 28 | 600 | 55 |
| 34 | 800 | 75 |

Svenskt Träs Lathunden 8:2021 (spikåtgångstabellen, Altan och staket, sid. 90) anger samma sak från spikhållet: 22 mm trall 400 mm, 28 mm trall 600 mm, 34 mm trall 600 till 800 mm. **Avvikelse:** TräGuiden säger 800 mm för 34 mm trall, Lathunden säger 600 till 800 mm. Sidan skriver 800 mm med TräGuiden som källa och nämner inte spannet, eftersom 34 mm trall är ett randfall på en sida om regelavstånd.

Infästning, samma TräGuiden-sida: brädor bredare än 70 mm ska ha dubbel infästning med 30 mm kantavstånd, skruv med minst 4,2 mm ytterdiameter i rostfritt A2 eller A4.

### 2.2 Golvbjälkar (reglar) av konstruktionsvirke i ett fack till altan

**Primärkälla.** Svenskt Trä, *Lathunden, hjälpreda för byggare*, utgåva 8:2021, sid. 30, tabellen "Golvbjälkar av konstruktionsvirke i ett fack till altan (0,30 kN/m²), maximal fri längd". PDF hämtad 2026-09-19 från
https://www.svenskttra.se/siteassets/5-publikationer/pdfer/st-lathunden-2021-med-utvik.pdf

Förutsättningar som står i tabellhuvudet, ordagrant:

- Konstruktionsvirke i hållfasthetsklass C24 eller C14.
- Centrumavstånd (C) 600, 400 eller 300 mm.
- Golv av minst 22 mm trall av sort G4-2 eller bättre.
- Dimensionering enligt Boverkets konstruktionsregler, EKS 11 (BFS 2019:1).
- Säkerhetsklass 1. Klimatklass 3.
- Momentan nedböjning av nyttig last med karakteristiskt värde tillsammans med långtidsnedböjning av kvasipermanent lastkombination har begränsats till 1/200 av spännvidden.
- Altan med räcke i golvbjälkriktningen ska ha en extra golvbjälke mellan de två yttersta golvbjälkarna.

Fri längd (L) i meter, **C24**:

| Regel, mm | c 600 | c 400 | c 300 |
|---|---|---|---|
| 45 × 120 | 1,91 | 2,19 | 2,32 |
| 45 × 145 | 2,31 | 2,64 | 2,81 |
| 45 × 170 | 2,71 | 3,10 | 3,30 |
| 45 × 195 | 3,11 | 3,56 | 3,78 |
| 45 × 220 | 3,51 | 4,01 | 4,27 |
| 45 × 245 | 3,91 | 4,35 | 4,67 |
| 70 × 220 | 4,05 | 4,48 | 4,81 |

Fri längd (L) i meter, **C14**:

| Regel, mm | c 600 | c 400 | c 300 |
|---|---|---|---|
| 45 × 120 | 1,50 | 1,84 | 1,99 |
| 45 × 145 | 1,78 | 2,18 | 2,41 |
| 45 × 170 | 2,08 | 2,55 | 2,83 |
| 45 × 195 | 2,39 | 2,93 | 3,25 |
| 45 × 220 | 2,69 | 3,30 | 3,67 |
| 45 × 245 | 3,00 | 3,68 | 4,09 |
| 70 × 220 | 3,36 | 4,00 | 4,26 |

Omräkning som står i tabellen: vid 70 mm virkestjocklek i stället för 45 mm multipliceras tabellvärdet med cirka 1,16.

**45 × 95 mm finns inte i tabellen.** Lathundens altantabell börjar på 45 × 120 mm. Detsamma gäller TräGuidens tabell för golvbjälkar inomhus. Sidan skriver därför att dimensionen inte är en altanregel enligt Svenskt Trä, och hittar inte på ett tal för den. Uppdragets rad för 45 × 95 mm går alltså inte att fylla i med källa.

**Jämförelsekälla, inomhusgolv.** TräGuiden, [Golvbjälkar av konstruktionsvirke i ett fack](https://www.traguiden.se/konstruktion/dimensionering/hjalpmedel---tabeller/bjalklag/golvbjalkar-av-konstruktionsvirke-i-ett-fack/), "i bostad (0,45 kN/m²)", dimensionerad enligt EKS 12 (BFS 2022:4), säkerhetsklass 2, klimatklass 2, nedböjning begränsad till minsta av 20 mm eller 1/300, och med minst 22 mm golvspånskiva som undergolv. C24 vid c 600: 45 × 120 = 2,09, 45 × 145 = 2,53, 45 × 170 = 2,97, 45 × 195 = 3,41, 45 × 220 = 3,84. Talen är genomgående 8 till 10 procent högre än altantabellens, vilket är väntat: styvare undergolv, lägre klimatklass, annan säkerhetsklass. **Sidan använder altantabellen, inte den här.** Den ligger här för att förklara varför olika källor på nätet ger olika tal för samma dimension.

### 2.3 Bärlinor av konstruktionsvirke till golvbjälkar i ett fack till altan

Källa: samma Lathunden 8:2021, sid. 24, tabellen "Bärlinor av konstruktionsvirke till golvbjälkar i ett fack till altan (0,45 kN/m²), plintavstånd".

Förutsättningar i tabellhuvudet:

- Bärlinor med två eller flera fack med samma plintavstånd (D).
- Alla bärlinor har samma dimension och hållfasthetsklass.
- Konstruktionsvirke i hållfasthetsklass C24 eller C14.
- Golvbjälkarnas centrumavstånd (C) rekommenderas vara högst plintavståndet delat med fyra (D/4).
- EKS 11 (BFS 2019:1), säkerhetsklass 1, klimatklass 3, nedböjning 1/300 av spännvidden.

Maximalt plintavstånd (D) i meter, **C24**, mot golvbjälkarnas fria längd (L):

| Bärlina, mm | L 2,4 m | L 3,6 m | L 4,8 m |
|---|---|---|---|
| 45 × 120 | 1,38 | 1,03 | 0,83 |
| 45 × 145 | 1,64 | 1,25 | 1,00 |
| 45 × 170 | 1,92 | 1,47 | 1,18 |
| 45 × 195 | 2,20 | 1,68 | 1,35 |
| 45 × 220 | 2,49 | 1,90 | 1,53 |
| 45 × 245 | 2,69 | 2,12 | 1,70 |
| 70 × 220 | 3,10 | 2,56 | 2,18 |

**C14**, samma tabell: 45 × 120 = 1,06 / 0,82 / 0,67, 45 × 145 = 1,25 / 0,99 / 0,81, 45 × 170 = 1,47 / 1,17 / 0,95, 45 × 195 = 1,68 / 1,34 / 1,09, 45 × 220 = 1,90 / 1,51 / 1,23, 45 × 245 = 2,11 / 1,68 / 1,37, 70 × 220 = 2,37 / 1,96 / 1,71.

Lathunden har egna tabeller för bärlinor i två fack (sid. 25), där mittstödet får ligga i området 0,4 till 0,6 av den fria längden och där mittbärlinan ska vara dubbel. Sidan nämner det i en mening och räknar inte på det.

### 2.4 Snölast

Lathundens tabeller för takbjälkar och takbalkar har snözonen som ingångsvärde och hänvisar till snözonskartan på sid. 49. **Altantabellerna på sid. 24 och 30 har inte snözon som ingångsvärde.** Snölastens grundvärde på mark enligt EKS 11 går enligt den kartan från 1,0 kN/m² i sydligaste Skåne och på Gotlands kust till 5,5 kN/m² i fjälltrakterna, med 3,0 till 4,5 kN/m² i stora delar av Norrlands inland.

Sidan säger därför två saker och inte mer: att altantabellen är ett rikstal utan snözon, och att den som bygger i en hög snözon kör sitt eget fall genom Svenskt Träs dimensioneringsprogram på byggbeskrivningar.se, som frågar efter ort. Rådet att gå upp en dimension märks ut som **vårt råd**, inte som ett tal ur tabellen.

### 2.5 Byggbeskrivningen Altan, som jämförelse i praktiken

Källa: Svenskt Trä, [Altan](https://www.byggbeskrivningar.se/utvandigt/altan/). Exemplet där använder golvbjälkar 45 × 145 mm C24 på c 600 mm med 2 400 mm längd, bärlina byggd av 45 × 195 mm, trall 28 × 95 till 120 mm med 5 mm springa, plintar 500 till 600 mm ner till fast botten, NTR A mot mark och NTR AB ovan mark. 2 400 mm mot tabellens 2,31 m stämmer på tre centimeter, vilket är det bästa kvittot på att vi läst rätt rad.

## 3. Avvikelser mot `src/lib/kalkyl/altan.ts`

Rör inte modulen, men utvecklaren behöver de här tre raderna.

**1. `MAX_SPANNVIDD_M` är rätt, och antagandet kan strykas.** Modulens kommentar kallar raderna för 45 × 170 och 45 × 195 ANTAGANDE. Lathunden 8:2021 sid. 30 bekräftar dem på centimetern vid c 600 mm:

| Regel | Modulen, c 600 | Lathunden C24, c 600 | Modulen, c 450 | Lathunden C24, c 400 |
|---|---|---|---|---|
| 45 × 145 | 2,30 | 2,31 | 2,60 | 2,64 |
| 45 × 170 | 2,70 | 2,71 | 3,00 | 3,10 |
| 45 × 195 | 3,10 | 3,11 | 3,45 | 3,56 |

Kolumnen c 450 i modulen jämförs mot Lathundens c 400, vilket är på säkra sidan eftersom 450 mm är glesare än 400 mm. Förslag: byt källhänvisningen i kommentaren från Altanplaneraren till Lathunden 8:2021 sid. 30, stryk ordet ANTAGANDE, och överväg att höja c 450-raderna till Lathundens c 400-tal minus en marginal. Två dimensioner kan dessutom läggas till utan nytt underlag: 45 × 120 (1,91 vid c 600) och 45 × 220 (3,51 vid c 600).

**2. `PLINTAVSTAND_M = 2.5` är för generöst och bör ändras.** Modulen räknar med bärlina 45 × 170 mm och 2,5 m mellan plintarna. Lathunden sid. 24 ger för 45 × 170 mm C24 ett maximalt plintavstånd på 1,92 m när golvbjälkarna har fri längd 2,4 m, och 1,47 m vid 3,6 m fri längd. 2,5 m kräver 45 × 220 mm (2,49 m vid L 2,4 m). Det här är den enda egentliga felaktigheten: kalkylatorn ger i dag för få plintar. Förslag till utvecklaren: gör plintavståndet till en uppslagning på bärlinans dimension och reglarnas fria längd, med Lathundens tabell i avsnitt 2.3 ovan, eller sänk konstanten till 1,9 m och skriv om `BARLINA_TEXT` till 45 × 170 mm C24.

**3. Regeln D/4 saknas.** Lathunden rekommenderar att golvbjälkarnas centrumavstånd är högst plintavståndet delat med fyra. Vid c 600 mm betyder det plintavstånd högst 2,4 m, oavsett bärlina. Det är en enkel kontroll att lägga till i `raknaAltan`.

Övrigt som stämmer: `TRALL_TJOCKLEK_MM`, `SPRINGA_MM`, `SKRUV_PER_KORSNING`, `SKRUV_TEXT` och `FALL_TEXT` är oförändrat riktiga mot TräGuiden och byggbeskrivningen.

## 4. Det vi inte kunde hämta

- **Svenskt Träs dimensioneringstabeller på byggbeskrivningar.se** ligger fortfarande som bilder i sidorna, och tabell 1 till 3 på Montering av trall gick inte att läsa maskinellt. Lathunden i PDF löste problemet den här gången, men bildtabellerna behöver fortfarande ögon om någon ska verifiera dem ord för ord.
- **Dimensioneringsprogrammet på byggbeskrivningar.se** är ett formulär som kräver interaktion. Vi kunde alltså inte köra ett altanfall genom det och jämföra mot Lathunden. Chefredaktören kan öppna det i webbläsaren, mata in en altan på 4 × 3 m i snözon 3,0 och se om programmet ger ett annat tal än tabellen.
- **traguiden.se spännviddstabeller för altan** svarade 404 vid hämtningen 2026-09-17 och gör det fortfarande. TräGuidens bjälklagstabeller gäller bostad, inte altan.
- **byggahus.se** svarade 403 och gick inte att läsa. Trådarna finns i sökresultatet men innehållet lästes bara via sökmotorns utdrag.
- **petersprojekt.se spännviddstabell** är en betald PDF. Talen går inte att verifiera utan köp, och sidan uppger själv att den räknar på 22 mm trall på c 600 mm, vilket strider mot TräGuidens egen tabell (22 mm vill ha c 400 mm). Vi länkar inte till den.
- **Om Lathunden finns i en nyare utgåva än 8:2021** gick inte att avgöra. Sidan daterar därför källan i klartext, och talen ska läsas om mot en utgåva 9 när den dyker upp. EKS har hunnit gå från 11 till 12 sedan 2021, vilket är skälet att kontrollera.

## 5. Illustration

`src/assets/illustrationer-kallor/altan/reglar-avstand.svg`, 600 × 360, skiss uppifrån. Två bärlinor med plintar, reglar tvärs dem, måttbygel för c 600 mm överst och måttbygel för spännvidden till höger. Nyckeltalet med gul markering är c 600. Snickarpennan pekar på en sak: att spännvidden är måttet mellan bärlinorna, inte altanens längd, vilket är den förväxling som gör att folk köper för klen regel.
