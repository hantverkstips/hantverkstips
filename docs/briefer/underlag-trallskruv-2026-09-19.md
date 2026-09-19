# Underlag: trallskruv

Skrivet 2026-09-19 av skribenten inför `/altan/trallskruv/`, alltså
`src/content/guider/altan/trallskruv.mdx`. Huvudfras **trallskruv**, 3 630 sökningar per
månad, topp i maj. Sidan äger även **skruv till trall** (30). Typ problemguide, pelare
altan, nivå enkel.

Varje tal nedan står med **Källa** eller **ANTAGANDE**. Kalkylatorns konstanter kommer ur
`docs/briefer/underlag-kalkyl-altan-2026-09-17.md` och upprepas inte här, utom där texten
måste säga samma tal som `src/lib/kalkyl/altan.ts`.

## 1. Sökanalys

### Vad sökresultatet ser ut som

Sökningen på "trallskruv" ger nästan bara butikers sortimentssidor: Biltema, Byggmax,
Bauhaus, Proffsmagasinet, Ahlsell, Beijer, K-Bygg. Två av dem rankar med en riktig guide i
stället för en produktlista, och det är dem vi mäter oss mot.

**Etta i praktiken: [Bauhaus, Välj rätt trallskruv](https://www.bauhaus.se/trallskruvsguide).**

Täcker:

- Fyra korrosionsklasser, A4, A2, C4 och C3, med en mening om miljö per klass.
- En tabell virke mot skruvlängd och antal per kvadratmeter: 22 × 95 mm ger 42 mm och 58 st/m²,
  28 × 95 mm ger 55 mm och 40 st/m², 28 × 120 mm ger 55 mm och 32 st/m², 34 × 145 mm ger
  70 mm och 28 st/m².
- Rådet att skruven ska gå in lika långt i båda delarna och sänkas en millimeter under ytan.
- Att exotiska träslag kräver förborrning.
- Rådet att C4 inte bör användas på altaner över 60 kvm.

Saknar:

- Varje siffra om hur länge skruven faktiskt håller. Ordet tjugo år finns inte, trots att det
  är frågan bakom sökningen.
- Varför det blir svarta ränder runt huvudet, alltså garvsyran i virket.
- Att rostfritt och ytbehandlat skiljer sig i hårdhet, och att den hårda skruven är den som
  går av när altanen rör sig.
- Gänglängd, halslängd, spets, huvud, bitsstorlek och varvtal. Inte ett ord.
- Kantavstånd från brädans kant, och förborrningens diameter.
- Varje hänvisning till en oberoende mätning eller till Svenskt Trä.

**Tvåa: [Bolist, Trallskruvsguiden](https://bolist.se/inspiration-och-tips/allt-for-din-altan/trall/trallskruvsguiden/).**
Samma upplägg, något längre längder (55 till 60 mm för 28 mm trall), tabell för dolt montage,
nämner torxbits och vass spets. Saknar samma sak som Bauhaus, plus att den hoppar över A2
helt och i stället talar om A4 och A5.

**Trea: [Proffsmagasinet, Så väljer du rätt trallskruv till din altan](https://www.proffsmagasinet.se/kunskapsportalen/guider/sa-valjer-du-ratt-trallskruv-till-altan).**
Fyra klasser, förborrning, dolt montage. Anger avvikande längder: 70 mm för 28 mm trall och
85 till 90 mm för 34 mm. Anger 34, 28 och 24 skruv per kvadratmeter för 95, 120 och 140 mm
breda brädor vid c 600 mm, alltså lägre tal än Bauhaus och Essve.

Fjärde platsen delas av [Essve, Bygga trall, välj rätt skruvkvalitet](https://essve.com/sv/bygguider/allt-om-trall/bygginstruktioner/valj-ratt-skruvkvalitet)
och [Beijer, Skruva trall](https://www.beijerbygg.se/privat/sv/trallskruvsguide). Essve är den
enda som kopplar skruvkvalitet till träslag i stället för bara till miljö.

### Sökintention

Blandad, med tyngdpunkt kommersiell. Den som söker ska köpa skruv i dag eller i morgon och
står antingen i butiken eller framför en kundvagn. Tre frågor ligger under frasen:

1. Vilken längd till min trall (sifferfråga, vill ha ett tal).
2. Rostfritt eller ytbehandlat, alltså vad som är värt pengarna (valfråga, vill ha ett ställningstagande).
3. Hur många behöver jag (mängdfråga, vill ha en räkning).

Ingen av de tre översta svarar på fråga tre annat än med ett tal per kvadratmeter.

### Tre sätt vår sida blir bättre än ettan

1. **Vi svarar på tjugoårsfrågan med en mätning i stället för en känsla.** Gunnebo Fastening
   fotograferar fästdon efter saltspraytest enligt ISO 9227 och skriver ut vad testtiderna
   motsvarar: 24 timmar är cirka 5 år, 96 timmar cirka 20 år och 168 timmar cirka 35 år i
   normalt utomhusklimat. Vid tjugoårsmärket har den blanka spiken gravrost, den elförzinkade
   en klar tendens till rost, den varmförzinkade en antydan till zinkutfällning, och den
   rostfria är opåverkad genom hela testet. Ingen av de tre översta nämner en enda mätning.
2. **Vi namnger ett oberoende test.** Villaägarna testade åtta trallskruvar i maj 2023 på
   korrosionshärdighet och användarvänlighet, med korrosionen tyngst vägd. Vi återger
   placeringarna och det obekväma resultatet: den billigaste skruven i testet fick högsta
   betyg i korrosion. Butikernas guider rekommenderar bara det de själva säljer.
3. **Vi ger antalet för läsarens egen altan, inte per kvadratmeter.** Vår altankalkylator
   räknar brädor gånger reglar gånger två och rundar upp till hel förpackning, och den bäddas
   in i texten. Räkningen ger 32 skruv per kvadratmeter för 28 × 120 mm trall på c 600 mm,
   samma tal som Essve och Bauhaus anger i sina tabeller, alltså ett kvitto på att räkningen
   stämmer med branschen.

Fyra till, som också saknas hos ettan:

4. **Halslängden.** Vi förklarar varför skruven är delgängad och varför den ogängade halsen
   ska vara lika lång som trallen är tjock. Essves 4,2 × 55 mm har 27 mm gänga, alltså 28 mm
   slät hals mot 28 mm trall. Ingen konkurrent nämner ordet.
5. **Konflikten mellan källorna.** TräGuiden säger 55 mm till 28 mm trall, Proffsmagasinet
   säger 70 mm. Vi skriver ut att de säger olika och vilken vi följer.
6. **Kantavstånd och förborrning med tal.** TräGuiden: två skruv per regel för brädor från
   95 mm, 30 mm från kanten, förborrning 3 till 3,5 mm. Bauhaus och Bolist har ingetdera.
7. **Skruvautomaten mot skruvdragaren med varvtal.** Essve anger 400 till 1 200 varv per
   minut för den rostfria A4-skruven och 400 till 2 500 för den ytbehandlade Corrseal.
   Sencos DuraSpin DS522 går på 1 600 eller 2 500 varv per minut. Det säger vilket par som
   hör ihop, och det säger ingen annan.

### Rubrikstruktur

| H2 | Svarar på |
|---|---|
| Måttet först, 4,2 × 55 mm till 28 mm trall | längdfrågan |
| Stålet avgör om det syns svarta ränder om två somrar | A2, A4, C4 och tjugoårsfrågan |
| Virket bestämmer lika mycket som vädret | furu, lärk, kärnfuru, komposit |
| Gängan, spetsen och huvudet | varför trallskruv inte är en vanlig träskruv |
| Så många skruv går det åt | mängdfrågan, kalkylatorn |
| Färgen syns i två år, sedan grånar allt | den estetiska frågan |
| Skruvautomat eller skruvdragare | verktygsfrågan |

### Interna länkar

Ut från sidan: `/altan/` (huben), `/rakna/altan/` (kalkylatorn, dessutom inbäddad),
`/altan/bygglov-altan/`, `/om/sa-testar-vi/`.

Utkast i dag, alltså länkar som ska in när systersidorna publiceras och som står som
kommentarer i filen: `/altan/bygga-altan/`, `/altan/tradack-pa-mark/`,
`/altan/reglar-avstand-och-dimensioner/`.

In till sidan: se rapporten.

## 2. Faktaunderlag

### 2.1 Mått och längd

**Källa: TräGuiden, [Läggning av trall](https://www.traguiden.se/konstruktion/konstruktiv-utformning/tradack/tradack/laggning-av-trall/).**
Samma tabell som ligger bakom kalkylatorn.

| Tralltjocklek, mm | Största c-mått, mm | Skruvlängd, mm |
|---|---|---|
| 22 | 400 | 45 |
| 26 värmebehandlad | 450 | 55 |
| 28 | 600 | 55 |
| 34 | 800 | 75 |

Samma sida: ytterdiameter minst 4,2 mm. Den ogängade delens längd motsvarar trallbrädans
tjocklek. Rostfritt A2 eller A4, eller härdat stål med korrosionsskydd motsvarande C4. A4 för
kustnära objekt och tropiska träslag. Dubbel infästning för brädor bredare än 70 mm, centrisk
för 45 till 70 mm. 30 mm från brädans kant vid dubbel infästning. Förborrning 3 till 3,5 mm.

**Avvikande uppgifter om längd.** Bauhaus 55 mm, Bolist 55 till 60 mm, Essve 55 mm toppskruvat
och 60 mm i dolt montage, Proffsmagasinet 70 mm. Sidan följer TräGuiden, alltså 55 mm, och
skriver ut att Proffsmagasinet säger något annat.

**Källa: Essve, [Trallskruv 4,2 × 55 CS-1000](https://essve.com/sv/produkter/bygg-och-traskruv/trallskruv/toppskruvad-trallskruv/trallskruv/trallskruv-corrseal/trallskruv-4-2x55-cs-1000-1)**
(Corrseal, ytbehandlad C4) och **[K-Bygg, Trallskruv A4 TX20 hink 4,2 × 55, 1 000 st](https://k-bygg.se/produkt/trallskruv-a4-tx20-hink-42x55-1000st/7317761097006)**
(Essve Classic A4).

| Uppgift | Corrseal C4 | Classic A4 |
|---|---|---|
| Ytterdiameter, mm | 4,2 | 4,2 |
| Kärndiameter, mm | 2,7 | ej angivet |
| Huvuddiameter, mm | 7,4 | 7,4 |
| Gänglängd, mm | 27 | 27 |
| Bits | TX20 | TX20 |
| Varvtal, varv/min | 400 till 2 500 | 400 till 1 200 |
| Material | SAE1022, härdat, Corrseal C4 | rostfritt syrafast A4, ISO 3506 |

Källa: Essves produktsida för Corrseal och K-Byggs artikelsida för A4-hinken, hämtade
2026-09-19. Båda anger fibersnitt i spetsen mot sprickbildning, skärspår under huvudet som
försänker, CE enligt EN 14592 och Basta-registrering. A4-artikeln väger 3,338 kg per
1 000 skruv.

55 mm total längd minus 27 mm gänga ger 28 mm slät hals, alltså exakt 28 mm trall. Den
räkningen är vår, talen är källans.

### 2.2 Korrosion och livslängd

**Källa: Gunnebo Fastening (Simpson Strong-Tie), [Korrosion](https://www.gunnebofastening.se/support/tjanster/kunskapsbanken/korrosion/).**

- Korrosivitetsklasserna C1 till C5-M, där C1 är uppvärmd inomhusmiljö, C4 är industri- och
  kustområde med måttlig salthalt och C5-M är kust och offshore med hög salthalt.
- Saltspraytest enligt ISO 9227. Testintervallen 24, 96 och 168 timmar motsvarar "ca 5, 20
  respektive 35 års naturligt åldrande i normalt utomhusklimat".
- Vid 96 timmar, alltså tjugoårsmärket: "Gravrost framträder ordentligt på den blanka spiken
  och en klar tendens till rost finns på den elförzinkade. Den varmförzinkade har endast en
  liten antydan till zinkutfällning." Och om hela testet: "Den rostfria spiken är under hela
  testet opåverkad."
- Anodiskt index: rostfritt stål med 18 procent krom 0,50 V, varmgalvaniserat stål 1,20 V.
  Vid vanlig användning utomhus bör differensen inte överstiga 0,25 V, i krävande
  utomhusmiljö inte 0,15 V.

Notera att bilderna visar spik, inte trallskruv. Sidan säger det själv. Vi skriver spik.

**Källa: Villaägarnas Riksförbund, [Så bra är vanligaste trallskruvarna](https://www.villaagarna.se/radgivning-och-tips/produktgranskning/artiklar/test--sa-bra-ar-vanligaste-trallskruvarna/),
publicerad 30 maj 2023.** Åtta skruvar, två parametrar, korrosionshärdighet tyngst vägd.
Priserna gäller förpackningar om 200 till 250 skruv.

| Plats | Trallskruv | Typ | Samlat betyg |
|---|---|---|---|
| 1 | Essve Classic | Rostfri A4 C5, 4,2 × 55 mm | 5,0 |
| 2 | Hornbach | Rostskyddad C4, 4,2 × 55 mm | 4,7 |
| 3 | Heco | Rostfri A2 C4, 4,2 × 55 mm | 4,4 |
| 4 | Clas Ohlson | Rostskyddad C4, 4,1 × 56 mm | 4,3 |
| 5 | Grabber | Rostskyddad C4, 4,3 × 58 mm | 4,3 |
| 6 | Biltema | Rostskyddad C4, 4,5 × 55 mm | 3,6 |
| 7 | Raptor | Rostskyddad C4, 4,8 × 55 mm | 3,3 |
| 8 | Infe | Rostskyddad C4, 4,2 × 55 mm | 2,0 |

Priser per skruv i testet: Essve Classic 1,48 kr, Hornbach 0,35 kr, Heco 0,85 kr, Clas Ohlson
0,50 kr, Grabber 0,92 kr, Biltema 0,40 kr, Raptor 1,00 kr, Infe 0,48 kr.

Samma artikel, om hårdhet: "Rostfria skruvar i kvalitet A4 är mjukare och kan utsättas för
stora rörelser utan att gå av, till exempel stora och höga altaner. Trallskruv i kvalitet A2
är något hårdare medan stålskruv i kvalitet C4 är hårdast och lättast går av vid rörelse."
Och om beläggningen: "Om du slinter med skruvdragaren och skadar beläggningen, ökar risken
för att skruvarna rostar." Och om skruvdjup, citerat efter Malte Rungård, byggnadsteknisk
rådgivare: skruva inte ner för djupt, då bildas ansamlingar av vatten.

**Källa: Essve, [Välja rostfri skruv till din altan](https://essve.com/sv/bygguider/allt-om-trall/tips-och-inspiration/bygga-altan-med-rostfri-skruv).**
A4 har korrosionsklass C5 och mest flexibelt stål, A2 har C4. Kustnära trädäck måste byggas
med A4. Poolvatten ger rödrost och oxidation. Exotiskt virke som cumaru och teak kräver A4.
A2 räcker vid insjö och bräckt vatten, trall direkt på mark, och stora eller höga
konstruktioner.

**Källa: tidningen Gör Det Själv, [Undvik att träet äter dina skruvar](https://gds.se/material/spik-och-skruv/undvik-att-traet-ater-dina-skruvar).**
Lärk, ek och många hårdträ innehåller garvsyra som äter sig genom ytbehandlingen. Exemplet i
artikeln är en rostig skruv efter cirka 5 år i hårdträ. Tryckimpregnerat trä innehåller
salter som tär på skruven. A2 duger till trä som inte är tryckimpregnerat, A4 till allt.

### 2.3 Virke mot skruvkvalitet

**Källa: Essve, [Välj trallvirke till altanprojektet](https://essve.com/sv/bygguider/allt-om-trall/tips-och-inspiration/valja-virke-en-djungel).**

| Virke | Skruv enligt Essve |
|---|---|
| Tryckimpregnerad furu | kolstål C4, rostfri A2 eller rostfri A4 |
| Lärk | endast rostfri A4 |
| Kärnfuru | rostfri A4 |
| Träkomposit | rostfri A2 eller A4, förborrning krävs |

Samma sida: tryckimpregnerad furu är det vanligaste trallvirket i Sverige, finns i grönt och
brunt, och båda varianterna grånar med tiden. Lärk bör oljas på alla sidor före montering och
kan vrida sig efter montage.

### 2.4 Antal skruv

**Källa: Essve, [Bygga trall, välj rätt skruvkvalitet](https://essve.com/sv/bygguider/allt-om-trall/bygginstruktioner/valj-ratt-skruvkvalitet),
och Bauhaus trallskruvsguide.** Båda anger samma tal per kvadratmeter.

| Virke | Skruv per kvm | c-mått, mm |
|---|---|---|
| 22 × 95 mm | 58 | 400 |
| 28 × 95 mm | 40 | 600 |
| 28 × 120 mm | 32 | 600 |
| 34 × 145 mm | 28 | 600 |

Essve skriver att tabellen är vägledande och att virkesleverantörens rekommendation gäller.

**Vår kalkylator, `src/lib/kalkyl/altan.ts`, kontrollräknad 2026-09-19** med
`raknaAltan` på en altan 4 × 3 m, trall längs långsidan, c 600 mm:

| Trallbredd, mm | Skruv, st | Yta, kvm | Per kvm |
|---|---|---|---|
| 95 | 480 | 12 | 40,0 |
| 120 | 384 | 12 | 32,0 |
| 145 | 320 | 12 | 26,7 |

Talen 40 och 32 är identiska med Essves och Bauhaus tabell. 145 mm-raden ligger något under
deras 28, eftersom vi räknar brädorna på altanens verkliga bredd i stället för att avrunda
per kvadratmeter. Skillnaden är en skruv per kvadratmeter och behöver inte skrivas ut.

**Förpackningar.** Kalkylatorn räknar upp till hel förpackning om 250 eller 500 skruv
(`FORPACKNINGAR` i modulen, märkt ANTAGANDE i kalkylunderlaget avsnitt 7 punkt 4). Kontrollen
är nu gjord och svaret är att paret bör vara 250 och 1 000, se avsnitt 4 nedan. Texten säger
250 och 1 000 om handeln, och säger separat att räknaren rundar upp till 250 eller 500, så att
sidan och verktyget inte påstår olika saker.

### 2.5 Skruvautomat

**Källa: Senco, [DuraSpin-teknik](https://www.senco.se/sv/n/duraspin-teknik).** DS525-18V går
på 5 000 varv per minut och tar skruv 25 till 55 mm. DS522-18V växlar mellan 2 500 och 1 600
varv per minut, tar 25 till 55 mm och anges för bland annat trallskruvning. DS722-18V har
samma varvtal som DS522 och tar 25 till 75 mm.

Ihop med Essves 400 till 1 200 varv per minut för A4-skruven ger det slutsatsen i texten:
automatens lägsta varvtal ligger över det tillverkaren anger för den rostfria skruven, medan
den ytbehandlade Corrseal-skruven tål upp till 2 500.

### 2.6 Handelsdata, för storleksordning

Bauhaus säljer trallskruv C4 4,2 × 55 mm i 200-pack och Essve Classic A4 4,2 × 55 mm i
250-pack. Byggmax har C4, A2 och A4 i samma dimension, 250-pack, med T20. K-Bygg har Essve A4
i 250-pack och i hink om 1 000. Essves egen katalog har både 250 och 1 000.

## 3. Det vi inte kunde hämta

Chefredaktören öppnar de här i webbläsare om något behöver skärpas:

1. **[Beijer, Skruva trall](https://www.beijerbygg.se/privat/sv/trallskruvsguide).** Sidan
   svarade 200 men levererade bara navigation och kategorilistor. Brödtexten, som enligt
   sökutdraget innehåller en formulering om minst 25 år utomhus, gick inte att läsa. Den
   uppgiften används därför inte på sidan.
2. **Essves produktsidor under `essve.com/sv/produkter/`.** Tre av fyra adresser svarade 404
   vid hämtning, samma problem som kalkylunderlaget rapporterade i september. Corrseal-sidan
   gick att läsa. A4-datan är därför hämtad ur K-Byggs artikelsida, som återger Essves
   tekniska data.
3. **[Bauhaus skruvguide som pdf](https://www.bauhaus.se/media/pdf/skruvguide.pdf).** En
   megabyte pdf som inte gick att läsa maskinellt. Kan innehålla en livslängdsuppgift per
   korrosivitetsklass, vilket vore värt att ha.
4. **Villaägarnas testrapport.** Artikeln länkar till "Testrapport, korrosionsprovning av
   trallskruvar". Vi har bara artikelns sammanställning, inte provrapporten. Mätmetod utöver
   "korrosionshärdighet" och "användarvänlighet" är alltså inte känd, och betygen är därför
   återgivna som betyg, aldrig som mätvärden.
5. **[Heco, trallskruv](https://www.heco.se/sortiment/trallskruv/trallskruv).** Översikten
   listar Protect 4 (C4), Rostfri A2 (C4) och Rostfri A4 (C5) med TX-bits, men dimensioner,
   gänglängd och varvtal ligger bakom produktsidorna och gick inte att läsa.
6. **Byggahus forumtrådar om trallskruv.** Svarade 403 vid hämtning, som i kalkylunderlaget.
   Inget vi behöver, men värt att veta att de inte går att kontrollera maskinellt.

## 4. Det här ska ändras någon annanstans

1. **`FORPACKNINGAR` i `src/lib/kalkyl/altan.ts`** står i dag som `[250, 500]` och är märkt
   ANTAGANDE i kalkylunderlaget avsnitt 7 punkt 4. Kontrollen är gjord 2026-09-19: Bauhaus har
   200 och 250, Byggmax 250, K-Bygg och Essve 250 och 1 000. Ingen av dem har 500. Paret bör
   vara `[250, 1000]`. Ändringen rör utvecklarens fil, inte skribentens, och testskriptet
   `scripts/test-kalkyl-altan.mjs` följer med.
2. **`typ` på den här sidan.** Filen ligger som `problemguide` med tom `produkter`, eftersom
   det är den enda typen som ger både rätt sida och inget reklamband när databasen saknar
   trallskruv. När produktkategorin finns byts `typ` till `kopguide` och `produkter` fylls, och
   då hamnar sidan i hubbens grupp Välj rätt i stället för Hitta felet, där den hör hemma.

## 5. Illustrationer

Två skisser, källor i `src/assets/illustrationer-kallor/altan/`, konverterade med
`npm run illustrationer`.

- `trallskruv-sektion.svg`, huvudbild. Genomskärning genom trall och regel med skruven i.
  Måtten 28 mm trall, 55 mm skruv och 28 mm slät hals. Nyckeltalet med gul markering är
  55 mm. Snickarpennan pekar på huvudet som ligger en millimeter under ytan.
- `trallskruv-kant.svg`, inline. Brädan uppifrån med två skruv per regel och 30 mm från
  kanten, och en spräckt bräda bredvid där skruven sitter för nära kanten.
