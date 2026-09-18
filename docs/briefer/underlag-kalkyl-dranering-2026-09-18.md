# Underlag: dränering och källare, kostnad och nytta

Hämtat 2026-09-18 av utvecklaren inför verktyg 10 i `docs/VERKTYGSPLAN.md`, alltså `src/lib/kalkyl/dranering.ts` och sidan `/rakna/dranering/`. Grundklustret är inte skrivet, så det här dokumentet plus kostnadsavsnittet i `/fukt/fukt-i-kallaren/` är tills vidare hela faktaunderlaget bakom verktyget. Varje konstant i modulen pekar hit, och varje rad nedan säger **Källa** eller **ANTAGANDE**.

Verktyget svarar på två frågor i samma räkning. Priset, alltså kronor per löpmeter husgrund och en summa för hela grunden med arbete, material och återställning var för sig. Och nyttan, alltså om läsaren behöver gräva alls. Det andra är det som saknas på marknaden: ingen svensk sida sätter dräneringens pris bredvid avfuktarens och säger vilket av dem läsaren faktiskt behöver.

Avsnitt 9 listar vad chefredaktören ska verifiera i webbläsare innan sidan går ut ur utkast.

## 1. Vad som gick att hämta maskinellt

| Sida | Gick att läsa | Vad den gav |
|---|---|---|
| villaagarna.se, måste du dränera huset | Ja | 3 000 kr per löpmeter i arbetskostnad, upp till det dubbla, femtio års livslängd, löpmeter längs ytterväggarna |
| brabyggare.se, vad kostar dränering av hus 2026 | Ja | Djuptrappa i tre band, 25 till 50 procent per halvmeter, trång tomt 10 till 25 procent, arbetets andel 35 till 50 procent |
| offerta.se, vad kostar det att dränera | Ja | 3 000 till 9 000 kr per löpmeter, totalt 100 000 till 180 000 kr, rot med femårsregeln |
| bygghemma.se, dränering kostnad | Ja | 3 000 till 7 000 kr per löpmeter inklusive arbete och material |
| husgrunder.com, dränering av källare | Ja | 4 000 till 7 000 kr per löpmeter inklusive moms, utvärdera en dränering äldre än 25 till 30 år |
| byggkostnader.se, dränering | Ja | 2 500 till 5 000 kr per löpmeter, kostnadsfördelning per post, återställning 10 till 15 procent |
| neskom.se, dränering kostnad | Ja | Från 3 500 kr per löpmeter vid en meters djup, cirka 4 500 med källare, livslängd 25 till 50 år |
| ltingenjorsbyra.se, vad kostar det att dränera ett hus | Ja | 3 000 till 9 000 kr per meter, totalt 50 000 till 150 000 kr, livslängd 30 till 50 år |
| garbo.se, dränera huset | Ja | 3 000 till 5 500 kr per meter, schaktbredd cirka 1 m, teknisk livslängd cirka 20 år |
| markexperter.se, hur djupt måste man gräva | Ja | Minst 0,5 m under grundsulan, ofta 2 m totalt |
| gardsexperterna.se, hur länge håller en dränering | Ja | 30 till 50 år, utan källhänvisning |
| skatteverket.se, så fungerar rotavdraget | Ja | 30 procent av arbetskostnaden, högst 50 000 kr per person och år inom taket 75 000 för rot och rut |
| skatteverket.se, ger arbetet rätt till rotavdrag | Ja | "Dränera husgrunder" ger rätt. Maskinell utrustning, "grävmaskiner, borraggregat eller liknande", ger inte |
| helphero.se, så mycket kostar bergsprängning | Ja | Etablering cirka 10 000 kr, täckning cirka 15 000 kr, sprängutförande 700 kr per kvm, tippavgift 35 kr per ton |
| bauhaus.se, Isola Platon Xtra | Ja | 3 195 kr per rulle om 40 kvm, alltså cirka 80 kr per kvm inklusive moms |
| bauhaus.se, dräneringsslang 90 mm med geotextil | Ja | 2 795 kr per rulle om 50 m, alltså cirka 56 kr per meter inklusive moms |
| markgrossen.se, Isodrän 100 mm | Ja | 1 199 kr per paket om 3,75 kvm, alltså cirka 320 kr per kvm inklusive moms |
| markochanlaggning.se, materialpriser | Ja | Makadam 100 till 200 kr per ton, geotextil 5 till 15 kr per kvm, fiberduk 8 till 20, matjord 150 till 300 kr per ton. Exklusive moms |
| upplandsgras.se, priser | Ja | Rullgräs 36 till 51 kr per kvm inklusive moms, utan läggning |
| brabyggare.se, asfaltera eller grusa uppfart | Ja | Asfalt 250 till 500 kr per kvm, marksten 500 till 900 inklusive arbete, betong 600 till 1 000 |
| ocab.se, källarutrymme fuktkontroll | Ja | 5 355 kr inklusive moms för villakällare upp till 75 kvm, provtagning 3 190 kr |
| polygongroup.com, mögel- och fuktkontroll | Ja | 6 230 kr inklusive moms för villa upp till 75 kvm, samma provtagningspris |
| anticimex.se, fuktkontroll | Ja, men prislös | Inget pris publicerat |
| byggahus.se, vad kostar dränera | **Nej, 403** | Inget. Sidan rankar högt men blockerar hämtning |
| sambla.se, dränering kostnad | **Nej, 429** | Inget |
| byggmax.se, k-rauta.se, beijerbygg.se, hornbach.se | **Nej** | Produktpriser renderas med JavaScript och kom inte ut |
| stenbolaget.se, snabbgrus.se | **Nej** | Samma sak, priset ligger bakom JavaScript |
| husgrunder.com, kalkyl dränering | **Nej** | Konkurrentens egen kalkylator. WordPress-plugin som renderas med JavaScript, så fält och formler gick inte att läsa |
| byggstart.se, dränering | **Finns inte, 404** | Byggstart har sidor om grävning och källarisolering, ingen om dränering |
| byggmentor, rotavdrag.se, dranering.se, servicefinder.se | **Inget funnet** | Ingen sida om dräneringspris hittades |

Tre saker är värda att veta om tabellen. Villaägarna är den enda oberoende intresseorganisationen i listan, och den enda källan som uttryckligen säger att talet är **bara arbete**; alla andra anger ett totalpris utan att säga vad som ingår. Byggvaruhusens produktpriser ligger bakom JavaScript, så materialposten vilar på Bauhaus och Markgrossen som gick att läsa. Och konkurrentens kalkylator på husgrunder.com gick inte att inspektera maskinellt, vilket är den enskilt viktigaste punkten i avsnitt 9.

## 2. Arbetskostnad per löpmeter

**Villaägarna.** Källa: [måste du dränera huset](https://www.villaagarna.se/radgivning-och-tips/utomhus/grund/maste-du-dranera-huset/). "En arbetskostnad runt 3000 kronor per löpmeter husgrund. Men det kan gå upp till det dubbla." Löpmetern räknas längs husets ytterväggar. Fördubblingen motiveras med grävdjup, bergsprängning och markförhållanden. Detta är talet kostnadstabellen i `/fukt/fukt-i-kallaren/` redan publicerar, och det är verktygets referens.

**Marknadens övriga tal**, alla totalpriser inklusive material om inget annat sägs:

| Källa | Kr per löpmeter | Avser |
|---|---|---|
| Byggkostnader | 2 500 till 5 000 | Material och arbete |
| Bygghemma | 3 000 till 7 000 | Material och arbete |
| Neskom | Från 3 500, cirka 4 500 med källare | Totalt |
| GarBo | 3 000 till 5 500 | Dränering och isolering |
| Husgrunder | 4 000 till 7 000 | Inklusive moms |
| BraByggare | 3 000 till 7 500, snitt 4 400 | Totalt |
| Offerta och LT Ingenjörsbyrå | 3 000 till 9 000 | Totalt |

Källa för raderna: respektive sidor i tabellen i avsnitt 1. Vår egen totalsumma vid standardfallet ligger på 3 400 till 7 200 kr per löpmeter, alltså mitt i fältet.

**Dämpningen på den övre kanten. ANTAGANDE.** Villaägarnas fördubbling är redan motiverad med grävdjup, bergsprängning och markförhållanden. Läggs våra påslag för djup och åtkomst ovanpå den i båda ändarna räknas samma svårighet två gånger, och den övre kanten hamnar långt över allt marknaden publicerar: tre meters schakt i berg hade gett 13 500 kr per löpmeter bara i arbete. `OVRE_DAMPNING` är därför 0,5, alltså påslaget slår igenom helt på den undre kanten och halvt på den övre. Samma fall landar då på 6 750 till 9 750 kr, i linje med BraByggares svåraste klass. Vid fri tomt på referensdjup är dämpningen verkningslös och spannet är exakt Villaägarnas eget.

**Räkneexemplet som låser formeln.** `/fukt/fukt-i-kallaren/` skriver att en villagrund på 40 löpmeter hamnar på 120 000 kr i arbetskostnad vid gynnsamma förhållanden och 240 000 kr när de inte är det. Standardvärdena i modulen är därför ett hus på 12 gånger 8 m, som ger exakt 40 löpmeter, och testskriptet asserterar båda talen.

## 3. Schaktdjupet

- Minst 0,5 m under grundsulan, vilket "inte sällan kan innebära 2 meters djup totalt". Källa: [Markexperter, hur djupt måste man gräva](https://www.markexperter.se/dranering/hur-djupt-maste-man-grava-vid-en-dranering). Neskom säger samma sak: med källare gräver man ofta ner till cirka två meter.
- Villaägarna anger schaktdjup "som minst 3 till 4 decimeter under betongplattans lägsta punkt". GarBo säger 50 cm under grundplattan.
- **Djuptrappan**, den enda i svenska källor. Källa: [BraByggare](https://www.brabyggare.se/info/vad-kostar-dranering-av-hus-2026/). 0,8 till 1,2 m ger 3 000 till 4 500 kr per löpmeter, 1,5 till 2,0 m ger 4 200 till 5 800, och 2,0 till 2,5 m ger 5 800 till 7 500. Samma sida: "Varje extra halvmeter ökar kostnaden med 25–50 %."
- **ANTAGANDE.** `SCHAKTDJUP_REFERENS_M` är 2, alltså det djup en full källare normalt kräver. Villaägarna anger inget djup, så referensen är vår.
- **Källa med vårt val.** `DJUP_PASLAG_PER_M` är 0,5, alltså BraByggares nedre kant på 25 procent per halvmeter. Vi tar den nedre kanten eftersom deras tal gäller hela jobbet medan vår faktor bara flyttar arbetet. Att kurvan är rak är vårt antagande; BraByggare ger tre band, inte en formel.
- **Souterräng.** Inget funnet med tal. Fältet tillåter grundare schakt, och hjälpraden säger att en souterräng är grundare på husets höga sida.

## 4. Åtkomst, berg och trång tomt

- **Trång tomt.** Källa: BraByggare, "trångt utrymme mellan hus och tomtgräns (under 3 m) kan utgöra merarbete på 10–25 procent". Detta är det enda procentpåslaget som gick att hitta i svenska källor. Modulen tar övre kanten, alltså 25 procent, för den som kryssar i rutan har ett verkligt problem och inte ett gränsfall.
- **Berg. ANTAGANDE.** BraByggares svåraste klass (berg, sprängning, över 2,5 m eller trång tomt) ligger på 7 500 till 9 500 kr per löpmeter mot standardklassens 4 200 till 5 500, alltså ungefär 1,7 gånger. Modulen räknar med 1,5, eftersom sprängningens fasta kostnader ligger utanför meterpriset.
- **Sprängningens fasta del.** Källa: [HelpHero](https://helphero.se/kunskapsbank/markarbete/sa-mycket-kostar-bergsprangning). Etablering "10 000 kronor för ett normalt uppdrag", täckning "cirka 15 000 kronor", sprängutförande 700 kr per kvm, tippavgift 35 kr per ton, besiktning 20 000 till 30 000 kr. Modulen visar etablering och täckning som en egen rad i svaret och räknar dem aldrig per meter.
- **Handgrävning per timme.** Inget funnet. Flera källor nämner handgrävning i ord, ingen sätter ett tal.
- **Hydraulhammare och bergspräckning.** Inget funnet. HelpHero behandlar bara sprängning med dynamit.

## 5. Material

Alla priser hämtade 2026-09-18. Summan per löpmeter är vår, posterna är källor.

| Post | Pris | Källa |
|---|---|---|
| Dräneringsslang 90 mm med geotextil | 56 kr per meter, inklusive moms | [Bauhaus](https://www.bauhaus.se/draneringsslang-o90mmx50m-geotex) |
| Noppmatta Isola Platon Xtra | 80 kr per kvm, inklusive moms | [Bauhaus](https://www.bauhaus.se/fuktskyddsmatta-isola-platon-xtra-2x20m-40m) |
| Grundmursskiva Isodrän 100 mm | 320 kr per kvm, inklusive moms | [Markgrossen](https://markgrossen.se/dranering/isodran/isodran-100mm/) |
| Makadam 16 till 32 | 100 till 200 kr per ton, exklusive moms | [Mark och Anläggning](https://www.markochanlaggning.se/materialpriser) |
| Geotextil och fiberduk | 5 till 20 kr per kvm, exklusive moms | Samma sida |

**ANTAGANDE.** `MATERIAL_LAG_KR_PER_M` 300 och `MATERIAL_HOG_KR_PER_M` 900 vid två meters djup. Den undre kanten är rör, noppmatta i två meters höjd, fiberduk och makadam i nedre prisläget. Den övre är samma rör men en dränerande grundmursskiva i stället för noppmattan, plus dyrare makadam. Materialfaktorn skalar rakt mot djupet, eftersom dubbelt så djup schakt är dubbelt så hög skiva och ungefär dubbelt så mycket makadam.

**Varning om en källa.** Mark och Anläggnings prissida anger både "maj 2026" och "Q1 2026" på samma sida och är internt motstridig. Den används som grovt riktvärde för makadam och duk, alltså de två minsta posterna, och ska inte citeras som exakt.

## 6. Återställning

- **Rullgräs** 36 till 51 kr per kvm inklusive moms, exklusive frakt och läggning. Källa: [Upplands Gräsmattor, prislista 2026](https://www.upplandsgras.se/priser/). Matjord 150 till 300 kr per ton enligt Mark och Anläggning.
- **Asfalt** 250 till 500 kr per kvm exklusive markarbete, **marksten** 500 till 900 kr per kvm inklusive arbete, **betong** 600 till 1 000 kr per kvm. Källa: [BraByggare, asfaltera eller grusa uppfart](https://www.brabyggare.se/info/asfaltera-grusa-uppfart-kostnad-guide/). Samma sida noterar att en ny uppfart normalt inte ger rotavdrag.
- **Återställningens andel av projektet** 10 till 15 procent. Källa: Byggkostnader, som är den enda källan som kvantifierar posten.
- **Schaktbredd** cirka 1 m längs väggarna. Källa: [GarBo](https://www.garbo.se/sv-se/bygga-hus/dranera-huset-hur-mycket-kostar-det-och-hur-gar-det-till). Det är därför kronor per löpmeter också är kronor per kvadratmeter i modulen.
- **Rabatt och altan. ANTAGANDE.** Ingen källa vi hittat prissätter någondera. Rabatten är satt mellan gräs och hårdgjord yta, altanen högst eftersom den ska skruvas loss, virket sparas och däcket byggas upp igen.

## 7. Rotavdraget, och fällan i det

- **Dränering ger rätt till rotavdrag.** "Dränera husgrunder" står uttryckligen i Skatteverkets lista över arbete som ger rätt till avdrag för småhus. Källa: [Skatteverket, ger arbetet rätt till rotavdrag](https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html).
- **Maskinell utrustning ger inte rätt.** Samma sida, under vad som inte ger avdrag: "betala för maskinell utrustning, till exempel grävmaskiner, borraggregat eller liknande". **Ingen av konkurrentsidorna nämner detta**, och flera skriver rakt ut att man drar 30 procent på hela kostnaden.
- **Nivå och tak.** 30 procent av arbetskostnaden på fakturan, högst 50 000 kr per person och år, inom ett gemensamt tak för rot och rut på 75 000 kr. Källa: [Skatteverket, så fungerar rotavdraget](https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html).
- **Historiken som förklarar varför halva nätet säger 50 procent.** Rotavdraget höjdes tillfälligt till 50 procent för arbete som **betalades** mellan 12 maj och 31 december 2025 och är tillbaka på 30 procent sedan 1 januari 2026. Det är betalningsdatum och inte fakturadatum som styr. Källa: Skatteverkets nyhet om det tillfälligt höjda rotavdraget.
- **ANTAGANDE.** `ROT_GRUNDANDE_ANDEL` är 0,6. BraByggare anger att arbetet är 35 till 50 procent av totalpriset, medan vår arbetspost är närmare nio tiondelar av totalen. Skillnaden är just maskinen och lassen med massor, som Skatteverket undantar. Tre femtedelar är vår uppskattning av hur mycket av arbetsposten som är avdragsgillt arbete, och sidan skriver ut att talet är vårt.

## 8. Behöver du gräva alls?

Det här är verktygets andra halva och den som saknas hos alla konkurrenter.

- **Livslängd.** Villaägarna: en gammal dränering kan fungera i femtio år, "särskilt om källaren bara används som källare". Villkoret i den meningen är en nyans ingen konkurrentsida tar upp: femtio år gäller en källare som används som källare, inte en som inreds till bostad. Branschens egna tal är kortare, se tabellen.

| Källa | Livslängd |
|---|---|
| GarBo | Cirka 20 år, teknisk livslängd |
| Neskom | 20 till 30 år tekniskt, 25 till 50 i bästa fall |
| Husgrunder | Utvärdera om den är äldre än 25 till 30 år |
| BraByggare, LT Ingenjörsbyrå, Gårdsexperterna | 30 till 50 år |
| Villaägarna | Upp till 50 år |

- **Vår gräns.** `TROLIGT_SLUT_AR` är 30, alltså överkanten på Husgrunders intervall och nederkanten på det vanligaste branschtalet. Gränsen gäller bara tillsammans med markfukt på plasten; åldern ensam flyttar aldrig svaret till en grävning. Ingen auktoritativ svensk källa anger en ålder att byta vid, så valet av just 30 är vårt.
- **Tejptestet** avgör vilket av tre vatten läsaren har. Beskrivet av tidningen [Gör Det Själv](https://gds.se/hus/inomhusklimat/fukt-i-kallare) och i vår egen `/fukt/fukt-i-kallaren/`. Fukt på plastens väggsida är markfukt, fukt på rumssidan är kondens, torrt på båda sidor betyder fel vägg.
- **Markfukt skyddas utifrån.** Boverket: fukttransporten från marken är främst kapillär, ibland genom diffusion, och väggen ska skyddas på utsidan. Källa och förbehåll står i `docs/briefer/underlag-fukt-i-kallaren-2026-09-16.md`, där samma sida noteras som JavaScript-renderad och avläst i andra hand.
- **Det billiga först.** 20 mm regn på ett tak på 150 kvm ger 3 000 liter vatten. Källa: [Anticimex](https://www.anticimex.se/fuktskador/grund-kallare/).
- **Jämförelsen.** Avfuktare 5 948 kr (Proffsmagasinet, läst 2026-09-16), fuktkontroll 5 355 kr inklusive moms (Ocab, läst 2026-09-18) och 6 230 kr hos Polygon för samma sak. Båda tar 3 190 kr för provtagning och analys och täcker upp till 75 kvm, vilket tyder på en branschnorm. Artikelns påstående att skillnaden är "en faktor tjugo" stämmer mot arbetskostnaden ensam: 120 000 delat med 5 948 är 20. Verktyget jämför mot hela jobbet och landar därför på 23, alltså ett tal i samma härad men inte identiskt. Ingen ändring behövs i artikeln; den jämför uttryckligen mot arbetskostnaden.

## 9. Sökanalys och vad chefredaktören verifierar i webbläsare

**Reservation.** Sökningarna gjordes med ett verktyg vars index är amerikanskt, så ordningen nedan är en indikation på vilka sidor som är starka på frasen, inte en verifierad svensk sökresultatsida. Sökvolymerna gick inte att hämta: Googles verktyg kräver ett aktivt annonskonto. Talen nedan är **uppskattningar**, inte data, och ska inte publiceras.

| Fras | Uppskattad volym per månad | Kommentar |
|---|---|---|
| vad kostar dränering, dränering kostnad | 800 till 2 500 | Uppskattning utifrån hur många kommersiella aktörer som byggt sidor på frasen |
| dränering kostnad per meter, dränering pris per meter | 200 till 600 | Uppskattning |
| dränera källare, dränering källare | 300 till 800 | Uppskattning |

**Ettan på "vad kostar dränering"** är Offerta, en offertförmedlare. Sidan anger 3 000 till 9 000 kr per löpmeter, 100 000 till 180 000 kr totalt och materialpris 1 000 till 1 400 kr, plus rot med femårsregeln. Den saknar källa per tal, räknare, livslängd, schaktdjup, diagnosdel och jämförelse mot avfuktare, och förklarar aldrig var i det breda spannet läsaren hamnar. LT Ingenjörsbyrå på plats tre har mer innehåll men är internt inkonsekvent: 3 000 till 9 000 kr per meter gånger fyrtio meter går inte ihop med deras eget totalspann på 50 000 till 150 000 kr. Neskom, som är starkast på "dränering kostnad per meter", är den enda konkurrenten med någon källhänvisning alls, och den gäller bara rotavdraget.

**Vad vår sida har som ettan saknar.**

1. Källa och hämtningsdatum per tal, i en tabell på tjugosju rader. Ingen konkurrent anger källa för ett enda pris.
2. En räknare där svaret ligger i adressen och går att dela, i stället för ett spann i löptext.
3. Schaktdjupet som räknad faktor, inte som en punkt i en lista över "saker som påverkar priset".
4. Åtkomsten som räknad faktor, med sprängningens fasta kostnader brutna ur meterpriset.
5. Arbete, material och återställning som tre egna poster, så att mellanräkningen syns.
6. Att maskinhyra inte är rotgrundande. Skatteverket säger det uttryckligen, och ingen av konkurrentsidorna nämner det.
7. Återställningen som en egen post per yta, från gräs till altan.
8. Diagnosdelen: tejptestet, dräneringens ålder och tre besked i stället för ett pris.
9. Jämförelsen mot avfuktarens och fuktutredningens pris, alltså skillnaden mellan rätt och fel diagnos.
10. Varje eget antagande utskrivet på sidan, sju stycken, i stället för gömt i ett spann.

**Att verifiera i webbläsare innan sidan lämnar utkast.**

1. **Husgrunders egen dräneringskalkylator** på `husgrunder.com/kalkylator/kalkyl-dranering/`. Den är byggd på ett WordPress-plugin som renderas med JavaScript och gick inte att läsa maskinellt. Öppna den och avgör vilka fält den har, om den delar resultatet i adressen och om den ställer diagnosfrågan. Punkt 2, 3 och 8 i listan ovan bygger på att den inte gör det.
2. **Byggahus sida om dräneringskostnad** på `byggahus.se/bygga/vad-kostar-dranera`. Svarar 403 på hämtning, rankar högt. Läs vilka tal den anger och om något av dem motsäger vårt spann.
3. **Sambla** på `sambla.se/bolan/renovering/dranering-kostnad/`. Svarade 429. Samma kontroll.
4. **Villaägarnas formulering om löpmeter.** Modulen räknar löpmetern som husets hela omkrets. Kontrollera att sidan verkligen menar varvet runt och inte bara de väggar som ligger mot mark.
5. **Materialpriserna hos Bauhaus och Markgrossen.** Tre priser är lästa 2026-09-18 och sätter hela materialposten. Kontrollera att de står kvar och att artikelnumren stämmer.
6. **Mark och Anläggnings prissida**, som anger två olika datum på samma sida. Avgör om den duger som källa för makadam och duk eller om raden ska strykas ur tabellen.
7. **Skatteverkets nivå och tak för 2026.** Modulen räknar 30 procent och 50 000 kr. Kontrollera att den tillfälliga höjningen till 50 procent verkligen upphört och att taket inte ändrats i budgeten för 2026.
8. **Ocabs och Polygons priser.** 5 355 respektive 6 230 kr inklusive moms. Kontrollera att de står kvar, eftersom jämförelsen mellan diagnos och grävning vilar på dem.
9. **Anticimex sida om fukt i källare och grund**, som redan är källa i `/fukt/fukt-i-kallaren/`. Kontrollera att talet om 20 mm regn på 150 kvm tak står kvar.
10. **Vår egen totalsumma mot marknaden.** Standardfallet ger 3 400 till 7 200 kr per löpmeter allt inkluderat. Läs om tabellen i avsnitt 2 och bedöm om spannet fortfarande ligger rätt.
