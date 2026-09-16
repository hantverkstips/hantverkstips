# Underlag: avfuktare till krypgrund

Sökanalys och faktaunderlag till köpguiden `/fukt/avfuktare-krypgrund/`. Skrivet 2026-09-16.
Sökning gjord på Google på svenska 2026-09-16, utan personalisering. Priser lästa på proffsmagasinet.se samma dag.
Inget är mätt av oss. Varje siffra nedan har källa i sin rad. Saknas en uppgift står det "ej angivet".

Huvudsökord: **avfuktare krypgrund**, 2 600 sökningar per månad (klustret, `docs/SOKORDSANALYS.md` avsnitt 2 rad 7).
Sekundära: krypgrundsavfuktare, sorptionsavfuktare krypgrund, avfuktare krypgrund bäst i test.

## 1. Sökanalys

### De tre översta organiska träffarna

| # | Sida | Vad de är |
|---|---|---|
| 1 | [Anticimex, Krypgrundsavfuktning](https://www.anticimex.se/krypgrundsavfuktning/) | Saneringsföretag som säljer besiktning, installation och serviceavtal |
| 2 | [Ocab, Avfuktare krypgrund med installation](https://www.ocab.se/krypgrundsavfuktare-med-installation/) | Saneringsföretag som säljer ett paket med Corroventa-maskin och installation |
| 3 | [Polarpumpen, Krypgrundsavfuktare](https://www.polarpumpen.se/ventilation-och-avfuktare/avfuktare-och-luftavfuktare/avfuktare-krypgrund/) | Butik med kunskapsbank, kategorisida |

### Vad ettan (Anticimex) täcker

Rubriker på sidan: Krypgrundsavfuktning, Förebygg skador i din krypgrund med en avfuktare, Vill du säkerställa att din krypgrund mår bra året runt, Därför ska du välja Anticimex, Vad orsakar fukt i krypgrund, När behövs en avfuktare i krypgrunden, Vilka olika typer av avfuktare finns (H3 Sorptionsavfuktare, H3 Kylavfuktare), Mer om krypgrundsavfuktning, Vanliga frågor och svar, Behöver du en avfuktare för din krypgrund, Få ut maximalt av din avfuktare med ett serviceavtal, Vad ingår i serviceavtalet.

Siffrorna de har: 43 procent av besiktigade villor och fritidshus med krypgrund har fukt- eller mögelskada; 75 procent relativ luftfuktighet som rekommenderad övre gräns i krypgrund; 15 °C som gräns där sorption fungerar effektivt; 20 till 30 °C som kylavfuktarens område; 100 000 besiktningar per år; 25 års erfarenhet.

Mekanismen är rätt beskriven (sommarkondens), typerna är rätt beskrivna, och gränsen 15 °C stämmer med Ljungby Fuktkontroll.

### Vad ettan saknar

- **Ingen maskin.** Inget modellnamn, ingen kapacitet i liter per dygn, ingen effekt i watt, ingen ljudnivå, inget pris. Läsaren kan inte köpa något efter att ha läst sidan, bara boka.
- **Ingen dimensionering.** Inte ett ord om hur stor avfuktare en krypgrund på 80 kvm behöver, och inget som skiljer en grund på 40 kvm från en på 150.
- **Ingen driftkostnad.** Sidan nämner varken kilowattimmar eller kronor per månad. (Tvåan, Ocab, skriver "några hundra kilowattimmar per år" utan att säga vilken maskin.)
- **Ingen installation läsaren kan göra själv.** Placering, hygrostatens värde, tätning av ventiler, plast på marken och våtluftsslangens väg genom grundmuren nämns inte. Tvåan nämner dem i en punktlista utan mått.
- **Inget "köp inte".** Varken ettan, tvåan eller trean skriver att någon maskin är fel för krypgrund.
- **Inga datum, ingen författare, ingen källförteckning.**

Trean, Polarpumpen, har en längre text med fyra avfuktartyper (termisk, sorption, hygrodynamisk, kondens) och gränsen "över 16 grader" för kondens, men visade **noll produkter** i produktlistan vid besöket och har varken datum eller författare.

### Tre sätt vår sida blir bättre (CLAUDE.md regel 8)

1. **En dimensioneringstabell räknad för krypgrundens mått, och siffran på vad plast på marken gör.** Krypgrunden är tvärtemot källaren: stor golvyta, låg takhöjd. Med sajtens egen formel (`src/lib/kalkyl/avfuktare.ts`, T = 10 °C, sorption, faktor 0,80) behöver en krypgrund på 80 kvm med bar mark **18 liter märkt kapacitet**, samma grund med plast på marken **10 liter**, och en tät grund med plast och tätade ventiler **6 liter**. Ingen av de tre översta sidorna ger ett enda liter-tal. Samma formel som kalkylatorn på `/rakna/avfuktare/`, så tabellen och räknaren kan inte säga olika saker.
2. **Tre namngivna maskiner med pris, effekt, ljudnivå, slangdimension och elkostnad i kronor per månad.** Drybox X4, Fresh D-800 och Acetec EvoDry 6H 2.0, alla ur Proffsmagasinets sortiment, med tillverkarens datablad som källa och villkoret för kapaciteten utskrivet där det finns (och "ej angivet" där det inte finns). Elkostnaden räknad ur märkeffekt gånger gångtid gånger 2,40 kr per kWh, med antagandet utskrivet. Ocab ger bara paketpriser (50 000 till 65 000 kr inklusive installation), Anticimex inget pris alls.
3. **Vi skriver ut vilken maskin som inte ska köpas, och citerar tillverkaren.** Acetec skriver själva i databladet att EvoDry 6H 2.0 "inte är avsedd för krypgrund eller kallvind" och hänvisar till EvoDry RCF 12 och RCF 20. Den maskinen är vårt val till kall källare på systersidan, och just därför måste det stå här. Ingen av de tre översta skriver "köp inte" om någonting.

Fjärde punkten, som bonus och som ingen annan har: **takhöjden spelar nästan ingen roll i en krypgrund.** Samma grund på 80 kvm med bar mark ger 17 liter vid 0,5 m fri höjd och 21 liter vid 0,9 m. Det är golvytan och marken som styr talet, inte volymen, och det är motsatsen till hur man dimensionerar till en källare.

### Sökintention

Kommersiell med en informativ förhals. Läsaren har antingen fått en besiktningsanmärkning, känt lukt i hallen eller läst att 4 av 10 krypgrunder har fukt. Hon vill i tur och ordning veta: behöver jag en avfuktare, vilken typ, hur stor, vilken modell, vad kostar den i drift, och kan jag sätta in den själv i stället för att betala 55 000 kr för ett paket. Rubrikerna ska svara i den ordningen.

### Rubrikstruktur

- H1: Avfuktare till krypgrunden, vilken typ och hur stor
- Kort svar (frontmatter, inte brödtext)
- H2 Varför krypgrunden blir fuktigast mitt i sommaren
- H2 Sorption, inte kondens, och varför det inte är en smaksak
- H2 Så stor behöver den vara
- H2 Plasten på marken gör mer för talet än maskinen
- H2 Maskinerna vi pekar på, och en vi inte gör
  - H3 Stor krypgrund med hygrostat och display i huset (Drybox X4)
  - H3 Liten grund där ljudet och priset väger tyngre (Fresh D-800)
  - H3 Maskinen som inte ska ner i krypgrunden (Acetec EvoDry 6H 2.0)
- H2 Var den ska stå och vart våtluften ska ta vägen
- H2 Vad den kostar i drift
- H2 När avfuktaren inte är rätt åtgärd

### Interna länkar

Ut från sidan (minst tre enligt `INNEHALLSARKITEKTUR.md` avsnitt 6):

| Mål | Ankartext, ungefär |
|---|---|
| `/rakna/avfuktare/` | Verktygskort plus "räkna på din egen grund" |
| `/fukt/sorptionsavfuktare/` | "sorption eller kondens, temperaturen avgör" |
| `/fukt/avfuktare-kallare/` | "rätt avfuktare till källaren" |
| `/fukt/luftfuktighet-inomhus/` | "vad hygrometern faktiskt säger" |
| `/luftavfuktare/` | "alla avfuktare vi granskat" |
| `/fukt/fukt-i-kallaren/` | "ta reda på varifrån fukten kommer" |

In till sidan (ska läggas av den som äger respektive fil, inte av skribenten här): huben `/fukt/`, kategorisidan `/luftavfuktare/` och köpguiden om källaren. Förslag på meningar står i rapporten.

## 2. Faktaunderlag

### 2.1 Krypgrundens klimat

| Påstående | Siffra | Källa |
|---|---|---|
| Uteluftsventilerad krypgrund blir fuktig på sommaren: vinterkylan ligger kvar i marken, varm och fuktig uteluft ventileras in, kyls av och den relativa fuktigheten stiger "ofta till mättnad" | ordagrant citat | [Fuktcentrum LTH, Myt eller fakta: krypgrund är en fuktsäker grundläggning](https://www.fuktcentrum.lth.se/verktyg-och-hjaelpmedel/byggnadsdelar/myt-eller-fakta/myt-eller-fakta-krypgrund-aer-en-fuktsaeker-grundlaeggning/) |
| Mikrobiell påväxt finns i blindbotten, träreglar och syllar "i större eller mindre omfattning i alla uteluftventilerade grunder" | ordagrant citat | Fuktcentrum LTH, källa ovan |
| Uteluftsventilerad krypgrund fungerar dåligt ur fuktsynpunkt och är särskilt känslig; skador uppstår ofta. Marken under huset är kallare än uteluften sommartid, uteluften kyls av när den kommer in och den relativa fuktigheten stiger | ingen siffra | [Boverket, risker med fukt från uteluft i krypgrund](https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker/risker-fuktskador/fuktrisker-for-grund/krypgrund/risk-med-fukt-fran-uteluft-i-krypgrund/) |
| Kritiskt fukttillstånd 75 % RF när materialets eget värde inte är väl undersökt | 75 % | [Boverket, PBL kunskapsbanken, högsta tillåtna fukttillstånd (BBR 6:52)](https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/) |
| Rekommenderad övre gräns i krypgrund | 75 % RF | [Anticimex, krypgrundsavfuktning](https://www.anticimex.se/krypgrundsavfuktning/) (sekundärkälla) |
| Andel besiktigade villor och fritidshus med krypgrund som har fukt- eller mögelskada | 43 % | Anticimex, källa ovan (sekundärkälla) |
| Mättnadsånghalt vid 10 °C, alltså hur lite vatten kall luft rymmer | 9,38 g/m³ | Räknat av oss med Magnus-formeln, [Lawrence 2005, BAMS 86(2)](https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml) |
| Mättnadsånghalt vid 25 °C, för jämförelsen med sommarluften | 23,0 g/m³ | Samma beräkning |
| Uteluft en julidag på 20 °C och 70 % RF bär 12,1 gram vatten per m³ | 12,1 g/m³ | Samma beräkning |
| Uteluftens ånghalt i augusti, räkneantagande i formeln | 10,0 g/m³ | SMHI:s spann via `docs/briefer/underlag-kalkyl-avfuktare.md`, försiktiga änden |
| Temperaturen i krypgrunden sommartid | **ej angivet med primärkälla.** Söksammanfattningen anger 8 till 12 °C med hänvisning till en LTH-rapport, men rapporten gick inte att hämta. Används inte i texten som siffra | — |

Konsekvensen för texten: uteluft på 20 grader och 70 procent bär 12,1 gram vatten per kubikmeter. Kyls samma luft till 10 grader ryms bara 9,4 gram innan den är mättad, alltså 129 procent relativ fuktighet, alltså kondens på marken, blindbotten och syllen. Det är hela mekanismen i två tal, och båda är räknade av oss med Magnus-formeln ur raderna ovan.

### 2.2 Varför sorption och inte kondens

| Påstående | Siffra | Källa |
|---|---|---|
| Sorption fungerar effektivt under 15 °C, kylavfuktare i 20 till 30 °C | 15 °C, 20 till 30 °C | [Anticimex](https://www.anticimex.se/krypgrundsavfuktning/) (sekundärkälla) |
| Kondensavfuktare behöver minst +15 °C för att fungera väl; därunder faller kapaciteten "mer markant och successivt" och frost bildas på kylslingan | 15 °C | [Ljungby Fuktkontroll, välj rätt avfuktare](https://www.lfs-web.se/avfuktare-valj-ratt-for-bast-ekonomi-och-sakrast-avfuktning/) |
| Kondens är bäst över 8 °C och 40 % RF, adsorption under det | 8 °C, 40 % | [Dantherm, adsorption eller kondensation](https://www.danthermgroup.com/se/artiklar/adsorption-eller-kondensation-vaelj-raett-avfuktare-foer-dina-behov) |
| Kondensavfuktare fungerar bäst över 16 grader | 16 °C | [Polarpumpen, krypgrundsavfuktare](https://www.polarpumpen.se/ventilation-och-avfuktare/avfuktare-och-luftavfuktare/avfuktare-krypgrund/) (butikskälla) |
| Sorption ger bra avfuktning ner till minusgrader; kondenstekniken kräver varmt klimat och riskerar att sättas igen med is | ingen siffra | [Optihus, avfuktare i krypgrund](https://www.optihus.se/avfuktare-krypgrund) |
| Sorptionens fall med temperaturen: Corroventa CTR STD-TT ger 17 l vid 20 °C och 60 %, 13 l vid 10 °C, 11 l vid 5 °C, alltså 76 respektive 65 procent kvar | 17 / 13 / 11 l | [Corroventa, CTR STD-TT](https://www.corroventa.se/produkter/krypgrundsavfuktare/krypgrundsavfuktare-ctr-std-tt/) |
| Kondensens fall: Wood's DSC50FM 16,2 l vid 35/80 mot 8,8 l vid 20/70; SW59FM 41 l mot 25 l vid 20/70 | | [Proffsmagasinet, DSC50FM](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-dsc50fm-avfuktare-vs57625) |
| Liten kondensmaskin i kyla: Meaco 10L ABC anges till 1,09 l vid 10 °C och 60 %, och 0,47 l vid 5 °C, mot märkvärdet 10 l | 1,09 / 0,47 l | [Elgiganten](https://www.elgiganten.se/product/hem-hushall-tradgard/inomhusklimat-uppvarmning/luftkvalitet/luftavfuktare/meaco-10l-abc-vit-avfuktare-10-liter-per-dag-hygrostat-kompressor/295839) (butiksuppgift, ej kontrollerad mot tillverkarens manual) |
| Wood's säljer ändå DSC-serien som krypgrundsmaskiner: DSC50FM "removes up to 13,5 litres of moisture per day", 350 m³/h, "safe humidity control down to +2 °C"; DSC95P upp till 42 l/dygn, 300 m³/h, pump upp till 10 m | 13,5 l, +2 °C | [Wood's, dehumidifiers for crawl spaces](https://woods.se/en/dehumidifiers-for-crawl-spaces/) |

Obs: Wood's engelska sida anger DSC50FM till 13,5 l/dygn medan Proffsmagasinets svenska produktsida anger 16,2 l vid 35 °C och 80 % och 8,8 l vid 20 °C och 70 %. Villkoret saknas på den engelska sidan. Motsättningen skrivs ut i texten, den döljs inte.

### 2.3 Maskinerna

Alla tre finns i databasen. Priser och lagerstatus lästa 2026-09-16.

| slug | Drybox X4 | Fresh D-800 | Acetec EvoDry 6H 2.0 |
|---|---|---|---|
| Typ | sorption | sorption | sorption |
| Kapacitet | 19 l/dygn | 6 l/dygn (8 l vid 35/90) | 7,4 l/dygn (9,7 som mest) |
| Villkor för kapaciteten | **ej angivet** | 27 °C och 60 % RF | 20 °C och 60 % RF |
| Effekt | 850 W | 350 W | 530 W |
| Ljudnivå | 52 dB på 3 m | 40 dB(A) | 48 dB(A) enligt Acetec, 46 dB enligt Proffsmagasinet |
| Arbetstemperatur | −20 till +40 °C enligt återförsäljare, **saknas på Drybox egen sida** | −20 till +40 °C | −20 till +40 °C |
| Räcker till | upp till 250 m² enligt Proffsmagasinet | ej angivet av tillverkaren | 100 m³ |
| Torrluftsflöde | 250 m³/h | 90 m³/h processluft | 110 m³/h |
| Våtluftsflöde | ej angivet | 14 m³/h | 20 m³/h |
| Slangar | torrluft 63 och 102 mm; våtluft 63 mm enligt Proffsmagasinet, 50 mm enligt Drybox egen sida | 125 mm in, 40 mm våtluft ut | våtluft 50 mm, 1,5 m ingår |
| Vikt | 11 kg | 4,5 kg | 5,4 kg |
| Hygrostat | inbyggd, levereras inställd på 65 % RF, mögelindex som tillåter högre RF vid lägre temperatur, display med 10 m kabel | ej angivet | manöverpanel i bostaden på modularkabel |
| Pris | 12 763 kr | 7 250 kr | 9 995 kr |
| Avsedd för krypgrund | ja, "det vanligaste användningsområdet är avfuktning av krypgrunder" | ja enligt butikens beskrivning; tillverkarens folder anger −20 till +40 °C för dygnetruntdrift | **nej** |

Källor: [Drybox X4, tillverkaren](https://drybox.se/produkter/drybox-x4/), [Proffsmagasinet Drybox X4](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-x4-avfuktare-upp-till-250-m-2950004), [ventilation.se Drybox X4](https://ventilation.se/sv/products/sorptionsavfuktare-drybox-x4), [Proffsmagasinet Fresh D-800](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d800-sorptionsavfuktare-3055560), [Fresh, folder](https://fresh.se/Image/GetDocument/fi/218/folder%20fresh%20avfuktare.pdf) (PDF, gick inte att läsa direkt; värdena för luftflöde, vikt och ljudnivå kommer från `docs/briefer/underlag-fakta-sorptionsavfuktare.md`), [Acetec, dokumentation EvoDry 6H 2.0](https://docs.acetec.se/dokument/ref-20100/), [Proffsmagasinet Acetec EvoDry 6H 2.0](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-6h-20-sorptionsavfuktare-1150001).

**Acetecs egen text, ordagrant:** "EvoDry 6H 2.0 är inte avsedd för krypgrund eller kallvind. För dessa applikationer rekommenderas EvoDry RCF 12 (art.nr 20012) eller EvoDry RCF 20 (art.nr 20020)." Källa: [Acetec docs](https://docs.acetec.se/dokument/ref-20100/). RCF 12 och RCF 20 säljs hos Proffsmagasinet för 15 455 respektive 19 995 kr enligt `underlag-fakta-sorptionsavfuktare.md`, men de ligger inte i vår databas och får därför inget produktkort.

### 2.4 Dimensionering för krypgrund

Formeln är `src/lib/kalkyl/avfuktare.ts`, samma som kalkylatorn på `/rakna/avfuktare/` och som tabellen i köpguiden om källaren. För krypgrund gäller temperaturläget "ouppvärmt, 5 till 15 grader": dimensionerande temperatur 10 °C, typ sorption, omräkning från märkt kapacitet till verklig med faktor 0,80 (Corroventa CTR STD-TT ger 0,76 och Meaco DD8L 0,99 vid 10 °C, vi räknar med 0,80).

Räknat med takhöjd 0,6 m, som är fri höjd i en normal krypgrund. Talen är **märkt kapacitet i liter per dygn**, alltså siffran på lådan.

| Golvyta | Plast och tätade ventiler (60 till 70 % RF) | Plast på marken (70 till 80 %) | Bar mark (över 80 %) |
|---|---|---|---|
| 40 kvm | 3 | 5 | 9 |
| 60 kvm | 5 | 8 | 14 |
| 80 kvm | 6 | 10 | 18 |
| 100 kvm | 8 | 13 | 23 |
| 120 kvm | 9 | 15 | 27 |
| 150 kvm | 12 | 19 | 34 |

Kolumnrubrikerna är vår översättning av formelns tre fuktnivåer till krypgrundens verklighet: markfuktkonstanten är 10, 40 respektive 100 gram per kvadratmeter och dygn, och bara den sista vilar på mätning (Kurnitski, Building and Environment 36(3) 2001, mätte 86 till 137 g per m² och dygn från bar mark). 10 och 40 är antaganden, se `underlag-kalkyl-avfuktare.md`.

Takhöjdens betydelse, samma grund på 80 kvm med bar mark: 17 liter vid 0,5 m, 18 vid 0,6 m, 21 vid 0,9 m. Golvytan och marken styr talet, inte volymen.

Räkneexemplet för texten, 80 kvm med bar mark: volym 48 m³, verkligt behov 15 liter per dygn vid 10 grader och 55 procent RF, märkt kapacitet 18 liter, intervall 15 till 19 beroende på om omräkningsfaktorn är 1,00 eller 0,75. Med plast på marken: 8 liter verkligt, 10 liter märkt.

### 2.5 Installation

| Påstående | Källa |
|---|---|
| Ta bort organiskt material (växtdelar, virke, löv) innan avfuktaren sätts in | [Acetec, installera avfuktare](https://www.acetec.se/page/installera-avfuktare) |
| Täta ventiler och öppningar noggrant | Acetec, källa ovan; [Optihus](https://www.optihus.se/avfuktare-krypgrund) |
| Ventilhålen tätas genom att skära till en bit 20 mm frigolitskiva | Optihus, källa ovan |
| Byggplast på marken med minst 50 cm överlapp i skarvarna | Acetec, källa ovan |
| Avfuktaren står upphöjd på lecablock eller isolerskiva | Acetec, källa ovan |
| Minst 50 cm fritt framför filtret för luftintaget | Acetec, källa ovan |
| Våtluftsslangen så kort som möjligt, med fall mot utloppsplåten, och ett kondenshål på 3 till 5 mm i slangens lägsta punkt om det behövs | Acetec, källa ovan |
| Genomföringen genom ventilen eller grundmuren tätas med silikon eller annat lämpligt tätmedel | Acetec, källa ovan |
| Torrluftsslangarna dras sträckta utan skarpa veck, så att torrluften når grundens alla sektioner | Acetec, källa ovan; Optihus |
| El: jordat uttag, 1-fas 230 V, 10 A trög säkring | Acetec, källa ovan |
| Manöverpanelen sitter i bostaden på modularkabel, så att värdet går att läsa utan att krypa ner | Acetec, källa ovan |
| Drybox X4 levereras inställd på 65 % RF och har ett mögelindex som tillåter högre RF vid lägre temperatur; displayen har 10 m kabel; kanaldragning max 15 m i dimension 100 och max 10 m i dimension 63 | [Proffsmagasinet](https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-x4-avfuktare-upp-till-250-m-2950004), [ventilation.se](https://ventilation.se/sv/products/sorptionsavfuktare-drybox-x4) |
| Målvärde 60 till 65 % RF ger marginal till kritiska 75 % utan att torka ut trä | [Optihus](https://www.optihus.se/avfuktare-krypgrund) |
| Ventilationsröret dras ut genom grundmuren, hygrostat styr, ventiler tätas vid behov, jordat uttag krävs i kryputrymmet, installationen tar cirka en halvdag | [Ocab](https://www.ocab.se/krypgrundsavfuktare-med-installation/) (sekundärkälla) |
| Paketpris med installation: under 40 m² cirka 50 000 kr, 40 till 120 m² cirka 55 000 kr, 120 till 140 m² cirka 60 000 kr, över 140 m² cirka 65 000 kr. ROT 30 procent på arbetskostnaden | [Ocab](https://www.ocab.se/krypgrundsavfuktare-med-installation/) (sekundärkälla) |

Optihus skriver också att man ska strö 3 till 5 kg salt per 10 m² markyta. Den uppgiften saknar stöd hos Boverket, Acetec och Fuktcentrum, och används inte.

### 2.6 Elkostnad

Räknat av oss: märkeffekt gånger gångtid gånger 30 dygn, delat med 1 000, gånger 2,40 kr per kWh (`src/lib/antaganden.ts`; SCB, genomsnittligt totalpris för hushåll med 5 000 till 14 999 kWh per år, juli till december 2025, inklusive elhandel, nätavgift, energiskatt och moms).

| Maskin | Effekt | kWh/mån dygnet runt | kr/mån dygnet runt | kWh/mån vid 8 h | kr/mån vid 8 h |
|---|---|---|---|---|---|
| Drybox X4 | 850 W | 612,0 | 1 469 kr | 204,0 | 490 kr |
| Acetec EvoDry 6H 2.0 | 530 W | 381,6 | 916 kr | 127,2 | 305 kr |
| Fresh D-800 | 350 W | 252,0 | 605 kr | 84,0 | 202 kr |
| Wood's DSC50FM (kondens, jämförelse) | 308 W | 221,8 | 532 kr | 73,9 | 177 kr |

Åtta timmar per dygn är vårt antagande för hygrostatstyrd drift i en grund som inte är genomblöt, samma antagande som på köpguiden om källaren. Dygnet runt är värsta fallet.

kWh per liter, räknat av oss där tillverkaren anger både effekt och kapacitet vid samma villkor: Fresh D-800 1,40 vid 27/60, Acetec EvoDry 6H 2.0 1,72 vid 20/60. För Drybox X4 går det inte att räkna, eftersom villkoret för 19 liter saknas.

### 2.7 Det vi inte vet

- Villkoren för Drybox X4:s 19 liter per dygn. Varken Drybox eller Proffsmagasinet anger temperatur och RF.
- Kapacitet vid 5 och 10 °C för Drybox X4, Fresh D-800 och Acetec 6H. Bara Corroventa publicerar en kurva, och Corroventa säljs inte hos Proffsmagasinet.
- Drybox X4:s våtluftsstos: 63 mm enligt Proffsmagasinet, 50 mm enligt Drybox egen produktsida. Skrivs ut som en motsägelse i texten.
- Fresh D-800:s ljudnivå och vikt bekräftades inte mot tillverkarens PDF, som inte gick att läsa. Värdena kommer från vårt tidigare underlag.
- Temperaturen i en svensk krypgrund över året. Ingen primärkälla hämtad; texten använder därför formelns dimensionerande 10 grader och skriver att det är en dimensionerande temperatur, inte en mätning.
- Boverkets sida gick inte att hämta med verktyget (sidan renderas med JavaScript). Innehållet är återgett från Googles sammanfattning av samma URL och stöds av Fuktcentrum LTH, som gick att läsa i sin helhet.
