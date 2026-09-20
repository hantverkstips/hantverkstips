# SEO-checklista inför omskrivningen: fukt och produkter

Skriven 2026-09-20 av SEO-strategen på uppdrag av koordinatorn. Elva sidor som skrivs om i ny röst.
Skribenten läser sitt avsnitt **före** skrivningen. Jag läser den färdiga sidan mot samma avsnitt efteråt.

Volymer är genomsnitt per månad ur `docs/data/keyword-stats-2026-09-16.csv` och `-2026-09-20.csv`, sammanställda i `docs/SOKORDSANALYS.md`. Där jag saknar mätning står det att jag gissar.

## Regler som gäller alla elva sidorna

- **Rösten får ändras, frasen får inte.** Huvudfrasen ska finnas ordagrant i title och minst en gång i de första två styckena, i naturlig svenska. Sidofraserna ska finnas någonstans på sidan i en form som en människa skulle säga.
- **Ingen sida tar en annan sidas fras.** Frasägandet står i `docs/INNEHALLSARKITEKTUR.md` avsnitt 6. Om en formulering frestar dig att skriva "bäst i test" på en köpguide eller "avfuktare källare" som rubrik på en kunskapssida, låt bli.
- **Två sidor får aldrig dela de tre första orden i title.** Kontrollera mot listan i avsnittet nedan innan du byter en title.
- **Suffixet " · Hantverkstips" är 16 tecken och läggs på av `Bas.astro` bara när hela titeln då ryms i 60 tecken.** En title på 44 tecken eller kortare får alltså varumärket, en på 45 till 60 får det inte. Fyra av sidorna ligger i dag under 44 med flit. Växer en sådan title till 46 tecken försvinner varumärket ur sökresultatet utan att något varnar. Det står per sida nedan.
- **Fältet `seoTitle` sätts av mig, inte av skribenten.** Vill du ändra en `seoTitle`, skriv förslaget i granskningsrundan i stället för att ändra i filen.
- **Siffror, källor och mätvillkor följer med texten.** Varje tal på de här sidorna har en källa eller är märkt som vår egen räkning. En omskrivning som tappar "vid 30 grader och 80 procent luftfuktighet" tappar hela sidans argument mot ettan.
- **Interna länkar: ankartexten är inte utsmyckning.** Andra sidor är byggda för att peka hit med en bestämd formulering. Listan per sida säger vilka ankare som ska finnas kvar ut från sidan. Ankarna in till sidan står också, så att du ser vad läsaren förväntade sig när hon klickade.
- **Alt-texter kortas.** Elva av femton alt-texter på de här sidorna är i dag 144 till 255 tecken. Kravet är under 125. Alt-texten säger vad skissen visar; detaljerna flyttar till `bildtext`, som inte har någon gräns.
- **Antalet Faq-frågor behålls.** Frågorna får skrivas om helt, men fem frågor ska förbli fem frågor. `FAQPage` skrivs ut av komponenten, och en sida som tappar block tappar rich result.
- **`npm run kontrollera` ingår i bygget** och stoppar på intern länk som leder ingenstans, saknad avslutande snedstreck och saknad inlänk. Kör det innan du lämnar ifrån dig något.

---

## /fukt/avfuktare-kallare/

### 1. Adress och sidtyp
`/fukt/avfuktare-kallare/`, fil `src/content/guider/fukt/avfuktare-kallare.mdx`. Köpguide, pelare fukt, kategori luftavfuktare, nivå mellan. Kommersiell intention, klustrets pengasida tillsammans med kategorisidan.

### 2. Huvudfras och sidofraser
Huvudfras: **avfuktare källare**, 2 900 per månad (klustret 3 490), YoY −18 procent, topp juli till september.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| luftavfuktare källare | 590 | brödtext, en gång, naturligt |
| hur stor avfuktare | ingen data | H2 1, i rubriken eller första meningen |
| kondensavfuktare | ingår i sorptionsklustret | H2 2, brödtext |
| avfuktare källare el | gissning, låg | H2 4, brödtext |

"Avfuktare källare" ska stå ordagrant i title och i en H2. Frasen "bäst i test" hör till `/luftavfuktare/` och får inte stå på den här sidan. "Sorptionsavfuktare" som fras ägs av `/fukt/sorptionsavfuktare/`; ordet får användas i löptext, men inte bära en H2 ensamt.

### 3. Title
Nuvarande: `Rätt avfuktare till källaren, och hur stor den behöver vara` (59 tecken, ingen `seoTitle`, alltså samma som H1).
Krav: 45 till 58 tecken. "Avfuktare" och "källare" ska stå i de fem första orden. Får gå: "Rätt", "och hur stor den behöver vara". Varumärket läggs inte på vid den här längden, och det är avsiktligt.

### 4. Meta description
Nuvarande: `Så stor avfuktare din källare behöver, och när kondens räcker eller sorption krävs. Tre maskiner, kapacitet vid låg temperatur och elkostnad per månad.` (151 tecken).
Krav: 120 till 155 tecken. Huvudfrasen med. Löftet är tre saker: storleken i liter, valet mellan kondens och sorption, och elkostnaden. Inga utropstecken, inget "bäst".

### 5. H1
Sidans löfte, inte frasen instoppad. Ska innehålla "avfuktare" och "källare" och skilja sig i formulering från title (stilguiden avsnitt Rubriker och metadata). Får inte börja med samma tre ord som title om title ändras.

### 6. H2-struktur
Sex H2 måste finnas kvar, i den här ordningen. Rubrikerna får formuleras om.

1. **Hur stor den ska vara.** Två dimensioneringstabeller (kondens vid 15 grader, sorption vid 10 grader), antagandena under, verktygskortet. Bär sidofrasen "hur stor avfuktare".
2. **Temperaturen avgör typen.** Varför kondens tappar i kyla, de tre tillverkargränserna, vår regel vid 10 grader. Bär "kondensavfuktare".
3. **Var maskinen ska stå och vart vattnet tar vägen.** Placering, tank mot slang, hygrostatvärde.
4. **Vad den kostar i drift.** Elkostnadstabellerna. Bär "avfuktare källare el".
5. **Maskinerna vi rekommenderar, och två vi inte gör.** Avrådandet är en del av frasens intention och en av Googles recensionssignaler.
6. **När avfuktaren inte räcker.** Markfukt, dränering, länk till problemguiden.

Faller något av de sex bort svarar sidan inte längre på frasen.

### 7. Längd
Nuvarande brödtext cirka 3 470 ord. Mål 3 200 till 3 800. Ettan (Elon) är cirka 1 200 ord och tvåan cirka 1 500. Vi vinner på substans, inte på ord, men under 3 000 ord ryms inte de sex avsnitten med sina tabeller.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| Huvudbild `fukt/kallare-avfuktare.svg` | `bildtext` 113 tecken | Bildtexten behålls i sak: 40 kvm, augusti, tre fuktkällor. Bilden är sidans `image` i Article-markupen |
| `fukt/kapacitet-temperatur` | 157 tecken | Kortas till under 125. Måste säga "liter per dygn" och "vid 30 och 20 grader" |
| `fukt/placering-ratt-fel` | 106 tecken | Under 125, ligger redan rätt. Behåll "avfuktare" och "källare" |

Ingen illustration får tas bort. `namn`-attributet får inte ändras, filen slås upp på det.

### 9. Interna länkar
Ut från sidan, ska finnas kvar med ungefär dessa ankare:
- `/rakna/avfuktare/` som `<Verktygskort kalkylator="avfuktare" />` i H2 1, plus textlänken "räkna på din källare" i ingressen
- `/tester/woods-sw39fw/`, "granskningen av Wood's SW39FW", två gånger (ingress och H2 4)
- `/tester/acetec-evodry-6h-2/`, "granskningen av EvoDry 6H 2.0"
- `/fukt/luftfuktighet-inomhus/`, "vad som är normal luftfuktighet inomhus"
- `/fukt/sorptionsavfuktare/`, "sorptionsavfuktare för källare under 15 grader"
- `/fukt/avfuktare-krypgrund/`, "avfuktare till krypgrunden"
- `/fukt/fukt-i-kallaren/`, "ta reda på varifrån fukten kommer"
- `/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/`, "jämförelsen mellan SW39FW och EvoDry 6H 2.0"
- `/luftavfuktare/`, "alla avfuktare vi granskat"
- `/grund/dranera-hus/`, "dränera huset"
- `/rakna/elkostnad/` som `<Kalkylator namn="elkostnad" />` i H2 4

In till sidan, elva länkar. Ankarna som andra sidor bygger på: "rätt avfuktare till källaren" (krypgrundsguiden, fukt-i-källaren, inreda-källare, kategorisidan), "köpguiden om avfuktare till källaren" (jämförelsen, Acetec-granskningen), "vilken avfuktare som passar i källaren" (luftfuktighet), "avfuktare till källaren" (sorption, två gånger), "kalkylatorn och köpguiden" (Wood's-granskningen), "avfuktare" (dränera-hus). Skriv inte om sidan så att de ankarna blir felaktiga löften.

### 10. Strukturerad data och komponenter
`Article` via `strukturdata.ts`, `BreadcrumbList`. `FAQPage` från `<Faq>`: **fem frågor, ska förbli fem**, två av dem har `lank` till `/rakna/avfuktare/` respektive `/rakna/elkostnad/` som ska vara kvar. `<Markering>` en gång (16 liter märkt kapacitet) — högst två per skärm, en räcker här. `<Verktygskort>` en gång, aldrig två på en sida. `<Kalkylator namn="elkostnad" />` en gång. Tre `<Produktkort variant="kompakt">` plus mallens block "Produkterna vi nämner" ur frontmatterns `produkter`. Produktval, `etikett` och `forVem` ändras inte av skribenten. HTML-kommentaren på rad 181 (om att kapacitetsjämförelsen inte får dubbleras) ska stå kvar.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-seo-avfuktare-kallare.md` avsnitt b. Ettan är Elon, tvåan Clas Ohlson och Bygghemma.
1. Ett målvärde för luftfuktigheten i källaren (Elon: 50 till 55 procent). Vi svarar med hygrostaten på 60 till 65 procent och Boverkets 75 som tak.
2. Kapacitet i liter per dygn och maxyta i kvadratmeter för namngivna maskiner. Tabellen "Maskin, maxyta, kapacitet, lägst temp" är vår motsvarighet.
3. Prisspann. Våra priser med läsdatum, i produktkorten och i H2 5.
4. Flera maskiner att välja mellan, inte en. Tre val plus SW43FW som nästa storlek.
5. Ett rakt svar på "vilken ska jag köpa" högt upp. Det ligger i `kortSvar`.

### 12. Fällor
- **`kortSvar` i frontmatter är första skärmen.** Fyra till fem korta meningar, ett tal per mening, inga tillverkarnamn. Den bär i dag hela svaret på frasen (temperaturgränsen och 16 liter). Skrivs den om till en inledning i stället för ett svar tappar sidan sin position.
- **Meningen "Märkt kapacitet är siffran som står på lådan, inte vad maskinen tar upp i din källare."** Den definierar sidans eget begrepp och gör att tabellerna går att läsa. Den mekanismen måste finnas, i någon formulering.
- **De två dimensioneringstabellerna och punktlistan med antaganden.** Det är den enda dimensioneringen på svenska som en läsare kan räkna själv, och det är punkt 1 i briefen. Samma formel som kalkylatorn; ändra inga tal.
- **"Räknat av oss med Magnus-formeln enligt Lawrence 2005."** Källraden under vattenhaltstabellen. Utan den är talen påståenden utan källa.
- **Meningen om att ingen tillverkare anger kapacitet under 20 grader.** Det är luckan hela sidan bygger på, och den formuleringen är vårt starkaste argument mot ettan.
- **Elpriset 2,40 kr per kWh med SCB som källa och perioden utskriven.** Tappas perioden blir talet obrukbart.
- **Stycket om att mätningen i vår egen källare pågår.** Det är transparenskravet i `docs/ARBETSFLODE.md`; ta inte bort det för att det låter ofärdigt.

---

## /fukt/avfuktare-krypgrund/

### 1. Adress och sidtyp
`/fukt/avfuktare-krypgrund/`, fil `src/content/guider/fukt/avfuktare-krypgrund.mdx`. Köpguide, pelare fukt, kategori luftavfuktare, nivå mellan. Kommersiell med informativ förhals.

### 2. Huvudfras och sidofraser
Huvudfras: **avfuktare krypgrund**, 1 600 per månad (klustret 2 600), YoY −21 procent, topp juli till september.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| krypgrundsavfuktare | 1 000 | brödtext, H2 5, ett sammansatt ord som är naturligt i svenskan |
| sorptionsavfuktare krypgrund | ingår i 2 600 | H2 2, brödtext |
| avfuktare krypgrund bäst i test | liten, gissning | ingenstans ordagrant; "bäst i test" ägs av `/luftavfuktare/` |
| täta ventiler krypgrund | gissning, låg | H2 4 |

"Avfuktare" och "krypgrund" ska stå ordagrant i title och i en H2. "Isolera krypgrund" (390 plus 480) ägs av `/grund/isolera-krypgrund/` och får bara stå som länk, aldrig som rubrik.

### 3. Title
Nuvarande `seoTitle`: `Avfuktare krypgrund, rätt typ och storlek till din grund` (56 tecken). `title` (H1) är `Avfuktare till krypgrunden, vilken typ och hur stor` (51).
Krav: 45 till 58 tecken, huvudfrasen ordagrant först. Får gå: "till din grund". `seoTitle` ändras inte av skribenten.

### 4. Meta description
Nuvarande: 133 tecken. Krav 120 till 155, huvudfrasen med, och löftet ska vara tre saker: storleken, varför sorption och inte kondens, och driftkostnaden. Behåll att det är tre namngivna maskiner.

### 5. H1
Innehåller "avfuktare" och "krypgrund" i läsbar form och skiljer sig från `seoTitle`. Den nuvarande gör det; ändras den ska skillnaden bestå.

### 6. H2-struktur
Sex avsnitt, i ordningen läsaren frågar:
1. **Varför grunden är blötast mitt i sommaren.** Mekanismen med sommarkondens. Utan den förstår ingen varför ventilerna inte räddar något.
2. **Sorption, och varför kondens inte är ett alternativ.** Fyra källors gränser, kapacitetstabellen. Bär "sorptionsavfuktare krypgrund".
3. **Hur stor den ska vara.** Dimensioneringstabellen efter golvyta, inte volym, plus höjdens betydelse.
4. **Plasten på marken gör mer för talet än maskinen.** Ordningen städa, plasta, täta, sedan maskin. Bär "täta ventiler krypgrund".
5. **Maskinerna vi pekar på, och en som inte ska ner i grunden.** Bär "krypgrundsavfuktare".
6. **När en avfuktare är fel pengar.** Ytvatten, lukt, och paketpriset 50 000 till 65 000 kr mot maskinpriset.

### 7. Längd
Nuvarande cirka 3 495 ord. Mål 3 200 till 3 800. Ettan (Anticimex) är kort och säljande; tredjeplatsen (Polarpumpen) är flera tusen ord. Under 3 000 ord ryms inte tabellerna.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| Huvudbild `fukt/krypgrund-sommarkondens.svg` | `bildtext` 140 tecken | Bildtexten behålls i sak: 80 kvm, julidag, var kondensen hamnar |
| `fukt/krypgrund-installation` | **249 tecken** | Kortas till under 125. Måste säga: krypgrund i genomskärning, avfuktaren upphöjd, våtluftsslang med fall ut, plast på marken. Resten flyttas till `bildtext` |

### 9. Interna länkar
Ut från sidan:
- `/rakna/avfuktare/` som verktygskort i H2 3, plus textlänken "kalkylatorn" i ingressen
- `/fukt/luftfuktighet-inomhus/`, "normal luftfuktighet inomhus"
- `/fukt/sorptionsavfuktare/`, "sorptionsavfuktare, temperaturen avgör"
- `/fukt/avfuktare-kallare/`, "rätt avfuktare till källaren"
- `/tester/acetec-evodry-6h-2/`, "granskningen av EvoDry 6H 2.0"
- `/grund/isolera-krypgrund/`, "isolera krypgrunden"
- `/luftavfuktare/`, "alla avfuktare vi granskat"
- `/fukt/fukt-i-kallaren/`, "testet som skiljer kondens från markfukt"

In till sidan, åtta länkar. Ankare andra sidor bygger på: "avfuktare till krypgrunden" (källarguiden, isolera-krypgrund två gånger, jämförelsen, kategorisidan, sorption, Acetec-granskningen) och "avfuktare i krypgrund" (fukt-i-källaren). Sidan måste alltså fortsätta svara på både typvalet och storleken.

### 10. Strukturerad data och komponenter
`Article`, `BreadcrumbList`. `FAQPage` med **fem frågor, ska förbli fem**, den sista har `lank` till `/rakna/avfuktare/`. `<Markering>` en gång (9,4 gram). Två `<Varning>` med rubrik: den om att täta ventiler som del av installationen, och den om att Acetec avråder från krypgrund. Båda bär sakinnehåll som inte får bli löptext utan ruta. Två `<Produktkort variant="kompakt">` med `modul="kort_kompakt"`. `<Verktygskort>` en gång.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-avfuktare-krypgrund-2026-09-16.md`. Ettan är Anticimex.
1. Mekanismen bakom sommarkondens i krypgrund, rätt beskriven.
2. Gränsen 75 procent relativ luftfuktighet som övre gräns i grunden, med myndighetskälla (Boverket, BBR 6:52).
3. Gränsen kring 15 grader där kondenstekniken slutar fungera väl.
4. Skillnaden mellan sorption och kylavfuktare förklarad, inte bara påstådd.
5. Siffran på hur vanligt problemet är (Anticimex 43 procent), återgiven med vem som mätt och varför det är en partsinlaga.

### 12. Fällor
- **`kortSvar`** bär hela svaret: sorption, 18 liter för 80 kvm med bar mark, och att plast plus tätning tar talet till en tredjedel. Det är sidans unika löfte och får inte bli en inledning.
- **Citatet ur Acetecs dokumentation** ("inte avsedd för krypgrund eller kallvind", med artikelnumren). Ordagrant citat, får inte refereras bort. Det är punkt 3 i briefens lista över vad vi har som ettan saknar.
- **Skillnaden mellan arbetsområde och användningsområde.** Två meningar som förklarar varför minus 20 grader i databladet inte betyder att maskinen får stå i krypgrunden. Ingen annan sida på svenska gör den skillnaden.
- **Dimensioneringstabellen med tre markkolumner** och raden "80 kvm: 18, 10, 6". Hela H2 4 hänger på att de tre talen står i tabellen.
- **Kurnitski 2001 som källa för markfukten** (86 till 137 gram per kvm och dygn), och meningen om att de två lägre nivåerna är våra antaganden. Det är den enda mätta konstanten i tabellen och den ärlighet som skiljer oss från fältet.
- **Att en krypgrund dimensioneras efter golvyta och inte volym**, plus höjdlistan (17, 18, 21 liter). Det är sidans mest originella iakttagelse.
- **Priset 50 000 till 65 000 kr för paket med installation, med Ocab som källa**, mot 7 250 till 12 763 kr för maskinen. Jämförelsen är skälet till att läsaren stannar.

---

## /fukt/fukt-i-kallaren/

### 1. Adress och sidtyp
`/fukt/fukt-i-kallaren/`, fil `src/content/guider/fukt/fukt-i-kallaren.mdx`. Problemguide, pelare fukt, kategori luftavfuktare, nivå mellan. Informativ och diagnostisk intention med kommersiell svans. Sajtens identitetssida: diagnos först, produkt sist.

### 2. Huvudfras och sidofraser
Huvudfras: **fukt i källaren**, 480 per månad, YoY −46 procent, topp september (880). Google slår ihop "fuktig källare" med samma fras.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| fuktig källare | ingår i 480 | brödtext, en gång |
| markfukt källare | gissning, låg | H2 3, i rubriken |
| kondens i källaren | gissning, låg | H2 4, i rubriken |
| mögel i källaren | 260, YoY −56 % | H2 6, brödtext, inte i en rubrik |
| lukt i källaren | gissning, låg | H2 6, i rubriken |

Sidan äger inte "avfuktare källare" (köpguiden), "dränera hus" (`/grund/dranera-hus/`) eller "sorptionsavfuktare". `/rakna/kallare/` är rättad så att den inte längre leder med "fuktig källare"; den här sidan äger frasen ensam och ska fortsätta göra det.

### 3. Title
Nuvarande `seoTitle`: `Fukt i källaren, hitta orsaken själv med tejptestet` (51 tecken). `title` (H1): `Fukt i källaren, så tar du reda på varifrån den kommer` (54).
Krav: 45 till 58 tecken, huvudfrasen ordagrant först. Ordet "tejptestet" ska stå kvar, det är sidans särdrag och det enda konkreta i sökresultatet.

### 4. Meta description
Nuvarande: 139 tecken. Krav 120 till 155. Huvudfrasen med. Löftet: tejptestet skiljer kondens från markfukt på två dygn, plus symptomtabell och kostnader i storleksordning. Lova inte en åtgärd, lova en diagnos.

### 5. H1
Bär läsarens fråga, inte frasen instoppad. "Fukt i källaren" ordagrant plus ett löfte om att hitta orsaken. Skiljer sig från `seoTitle` i andra halvan.

### 6. H2-struktur
Sju avsnitt i diagnosordning. Ordningen är sidans argument och får inte kastas om.
1. **Titta först.** Symptomtabellen, det gratis steget.
2. **Tejptestet.** Metoden, tre utfall, tidsangivelsen med båda källorna.
3. **Markfukt.** Mekanismen, varför skyddet hör hemma på utsidan, när dränering är motiverad. Bär "markfukt källare".
4. **Kondens.** Daggpunkten, gränsen 75 procent, dimensioneringen i korthet, en produkt. Bär "kondens i källaren".
5. **Läckage.** Det som är bråttom.
6. **Lukten.** Mikrobiell lukt, geosmin, vad Folkhälsomyndigheten säger och inte säger. Bär "lukt i källaren" och "mögel i källaren".
7. **Vad det kostar.** Kostnadstabellen med fyra nivåer.
8. **När du ska ringa någon.** Fyra lägen plus vad man ska be om.

### 7. Längd
Nuvarande cirka 2 790 ord. Mål 2 500 till 3 100. Ettan (Anticimex) är 1 200 till 1 400 ord, tvåan (Gör Det Själv) 1 200 till 1 500, trean (Ocab) cirka 1 500. Vi behöver marginalen till diagnosordningen och kostnaderna, men sidan ska inte svälla.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| Huvudbild `fukt/kallare.svg` | `bildtext` 92 tecken | Behåll i sak: källare från 1971 utan dränering, markfukt möter varm luft |
| `fukt/kallarsymptom` | **230 tecken** | Kortas till under 125. Måste säga: källare i genomskärning med tre symptom markerade. De tre detaljerna flyttas till `bildtext` |
| `fukt/tejptest` | **199 tecken** | Kortas till under 125. Måste säga: plastbit tejpad mot källarvägg, droppar på rumssidan mot väggsidan. "Tejptestet" ska stå i alt-texten |

### 9. Interna länkar
Ut från sidan:
- `/rakna/kallare/` som `<Kalkylator namn="kallare" />` i H2 1
- `/rakna/avfuktare/` som verktygskort i H2 4
- `/rakna/dranering/` som `<Kalkylator namn="dranering" />` i H2 7
- `/fukt/luftfuktighet-inomhus/`, "vad hygrometerns tal faktiskt betyder"
- `/fukt/sorptionsavfuktare/`, "sorption eller kondens, temperaturen avgör"
- `/fukt/avfuktare-kallare/`, "rätt avfuktare till källaren"
- `/fukt/avfuktare-krypgrund/`, "avfuktare i krypgrund"
- `/tester/woods-sw39fw/`, "granskningen av Wood's SW39FW"
- `/grund/dranera-hus/`, "dränera huset"
- `/grund/isolera-kallarvagg/`, "isolera källarväggen"
- `/grund/inreda-kallare/`, "inreda källaren"
- `/grund/sprickor-i-husgrunden/`, "en spricka efter en sättning"
- `/golv/golv-i-kallare/`, "golv i källaren"

In till sidan, femton länkar, fler än någon annan sida i klustret. Ankare som andra sidor bygger på: "fukt i källaren" (golv-i-kallare två gånger, dränera-hus två gånger, isolera-kallarvagg), "testet som skiljer kondens från markfukt" (krypgrund, isolera-krypgrund), "tejptestet som skiljer markfukt från kondens" (jämförelsen), "plasttestet och de tre orsakerna" (isolera-kallarvagg), "ta reda på varifrån fukten kommer" (källarguiden), "hitta varifrån fukten i källaren kommer" (luftfuktighet), "guiden om fukt i källaren" (sprickor). **Startsidan länkar hit med "Ett tejptest på källarväggen visar på två dygn varifrån vattnet kommer."** Tejptestet, de två dygnen och de tre orsakerna är alltså utlovade utifrån och måste stå kvar i den formen.

### 10. Strukturerad data och komponenter
`Article`, `BreadcrumbList`. Ingen `FAQPage` i dag; lägg inte till en. `<Markering>` en gång (14,4 grader). En `<Faktaruta rubrik=...>` och tre `<Varning rubrik=...>`: läckaget som inte väntar, öppna en bit innan du köper, och radon. **Radonvarningen ska stå kvar** även om den känns som en utvikning; den är sidans enda myndighetsbaserade säkerhetsupplysning. Ett `<Produktkort variant="kompakt" modul="kort_kompakt">`, sist i H2 4 enligt problemguidens regel "en produkt, i det avsnitt där texten säger att en avfuktare är rätt åtgärd". Lägg inte till fler produktkort.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-fukt-i-kallaren-2026-09-16.md` avsnitt 1.
1. Anticimex sortering efter skyddsdelar utifrån: dagvattensystem, dränering, fuktskydd på utsidan. Vår H2 3 måste fortfarande täcka utsidan.
2. Talet 20 mm regn på ett tak på 150 kvm ger 3 000 liter. Det står redan hos oss med Anticimex som källa.
3. Gör Det Självs tejptest. Vi har det utbyggt med tre utfall och en bild; grundmetoden måste vara igenkännbar.
4. Ocabs symptomlista (tvätt som torkar långsamt, bubblor i färg, unken lukt, kondens på fönster). Vår symptomtabell täcker den; tappar tabellen rader tappar vi täckningen.
5. Ett pris på en professionell fuktkontroll (Ocab 5 355 kr inklusive moms). Det är enda gången någon konkurrent anger ett tal, och vi ställer det bredvid tre andra.

### 12. Fällor
- **`kortSvar`** är metoden i fyra meningar: tejpa, två dygn, utsidan är kondens, insidan är markfukt, rinner det efter regn är det läckage. Det är sidans hela värde i första skärmen.
- **Symptomtabellen med sex rader.** Ingen konkurrent har en enda tabell. Undantaget för diagnostabeller i stilguiden gäller här: tre kolumner, celler får vara korta meningar.
- **De tre utfallen av tejptestet, inklusive "torr plast betyder att du tejpade på fel vägg".** Tredje utfallet är det ingen annan har.
- **Tvålappstricket** (en lapp vid golvet, en i brösthöjd, och vad gränsen betyder för en besiktningsman). Liten detalj, stort förtroende.
- **Meningen "Läs sista meningen en gång till. Skyddet hör hemma på utsidan av väggen."** Den bär hela resonemanget om varför invändiga åtgärder flyttar problemet.
- **Kostnadstabellen med fyra nivåer och multiplikationen till 120 000 kr respektive 240 000 kr**, med Villaägarna som källa per meter och multiplikationen märkt som vår.
- **Meningen om att en avfuktare mot markfukt bara ökar avdunstningen ur väggen.** Det är den enda platsen på sajten där vi argumenterar mot vår egen produktkategori, och det är därför sidan är trovärdig.
- **Fyra Boverketpåståenden på rad 99 är flaggade för ögonkontroll** i underlaget (sidan renderas med JavaScript och gick inte att hämta). Skriv inte om de meningarna så att de säger mer än de gör i dag.

---

## /fukt/luftfuktighet-inomhus/

### 1. Adress och sidtyp
`/fukt/luftfuktighet-inomhus/`, fil `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`. Kunskapsartikel, pelare fukt, kategori luftavfuktare, nivå mellan. Rent informativ intention. `produkter: []`, alltså inget reklamband och inga produktkort. Klustrets största trafiksida och dess vinterben.

### 2. Huvudfras och sidofraser
Huvudfras: **luftfuktighet inomhus**, 3 600 per månad (klustret 4 320), YoY −21 procent. Topp januari 6 600, november till december 4 400 till 5 400, botten juli 1 600. Sidan ska vara klar i god tid före november.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| normal luftfuktighet inomhus | 720 | H2 3, i rubriken eller första meningen |
| daggpunkt | 880, YoY −28 % | H2 2, i rubriken. Delas med `/rakna/daggpunkt/`, som äger verktygsintentionen |
| relativ luftfuktighet | gissning, medel | H2 1, brödtext, förklarad i samma mening |
| hygrometer | gissning, medel | H2 7, i rubriken |
| fuktkvot | ingår i fuktmätarklustret | H2 6, brödtext |

Sidan äger inte "kondens på fönster insida" (480, +50 procent, egen sida planerad), "avfuktare källare" eller "sorptionsavfuktare". Nämn dem i löptext med länk, inte i rubriker.

### 3. Title
Nuvarande `seoTitle`: `Rätt luftfuktighet inomhus, tabell per rum` (42 tecken). `title` (H1): `Rätt luftfuktighet inomhus, och vad du gör när hygrometern visar fel` (68).
Krav: **högst 44 tecken**, annars försvinner " · Hantverkstips" ur sökresultatet. Huvudfrasen ordagrant först. "Tabell per rum" är löftet som skiljer oss från kommunsidan och ska stå kvar i någon form.

### 4. Meta description
Nuvarande: 148 tecken. Krav 120 till 155. Huvudfrasen med. Löftet: talet som är normalt, tabell per rum, daggpunkten förklarad, och vad man gör åt både för fuktigt och för torrt. Båda riktningarna ska nämnas; ettan (Alingsås) täcker bara torr luft och det är vår öppning.

### 5. H1
Skiljer sig från `seoTitle` i andra halvan (den gör det i dag). Huvudfrasen ordagrant. H1 får vara lång, det är title som är trång.

### 6. H2-struktur
Sju avsnitt. De två första är svaret på frasen, de tre sista är det som gör sidan bred nog att hålla.
1. **Vad hygrometern faktiskt mäter.** Relativ mot absolut fuktighet, vattenhaltstabellen. Bär "relativ luftfuktighet".
2. **Daggpunkten avgör om väggen blir våt.** De två daggpunktstabellerna, kalkylatorn, diagrammet. Bär "daggpunkt".
3. **Normalt per rum och årstid.** Riktvärdestabellen plus H3:n under. Bär "normal luftfuktighet inomhus".
4. **Så torr blir luften på vintern.** Vinterbenet, alltså det som ger trafiken i januari.
5. **För fuktigt: vädra, värm, avfukta.** Ordningen från gratis till dyrt, och de tre länkarna till avfuktarsidorna.
6. **Snickarens gräns.** Fuktkvots- och RF-tabellen för virke, betong, målning och gips. Det är sidans proffsben och det ingen konkurrent har.
7. **Mät rätt, och kontrollera hygrometern.** Saltprovet. Bär "hygrometer".

### 7. Längd
Nuvarande cirka 2 450 ord. Mål 2 300 till 2 900. Ettan är cirka 1 400 ord, tvåan cirka 180. Frasen tål en lång sida; det är bredden per rum och per arbetsmoment som ska bära längden, inte utfyllnad.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| `fukt/daggpunkt` | 144 tecken | Kortas till under 125. Måste säga: diagram över daggpunkt mot rumstemperatur och relativ fuktighet. "Daggpunkt" ska stå i alt-texten |

Ingen huvudbild i frontmatter, och det är avsiktligt tills mätningen finns. **HTML-kommentaren `{/* ILLUSTRATION NÄR MÄTNINGEN FINNS: fukt/hus-rf-per-rum */}` ska stå kvar** som påminnelse.

### 9. Interna länkar
Ut från sidan:
- `/rakna/daggpunkt/` som `<Kalkylator namn="daggpunkt" />` i H2 2
- `/rakna/avfuktare/` som verktygskort i H2 5
- `/fukt/avfuktare-kallare/`, "vilken avfuktare som passar i källaren"
- `/fukt/sorptionsavfuktare/`, "sorptionsavfuktare i kalla utrymmen"
- `/fukt/fukt-i-kallaren/`, "hitta varifrån fukten i källaren kommer"
- `/om/sa-testar-vi/`, "så mäter vi"
- `/fasad/dreva-fonster/`, "dreva fönster"
- `/grund/isolera-kallarvagg/`, "isolera källarväggen"
- `/grund/isolera-krypgrund/`, "isolera krypgrunden"
- `/el/tillaggsisolera-vind/`, "tilläggsisolera vinden"
- `/golv/lagga-klickgolv/`, "lägga klickgolv"

In till sidan, fjorton länkar, flest efter fukt-i-källaren. Ankare andra sidor bygger på: "rätt luftfuktighet inomhus" (tilläggsisolera-vind två gånger, lägga-klickgolv), "normal luftfuktighet inomhus" (dreva-fönster, krypgrund, Wood's-granskningen), "vad hygrometerns tal faktiskt betyder" (fukt-i-källaren, inreda-källare), "vad hygrometern faktiskt mäter" (isolera-krypgrund), "relativ luftfuktighet och daggpunkt" (sorption), "luftfuktigheten inomhus" (slipa-bänkskiva, slipa-parkettgolv). **Fyra av de inlänkarna kommer från golv-, fasad- och vindsidor som väntar sig snickargränserna i H2 6.** Stryks den tabellen blir sex inlänkar felaktiga löften.

### 10. Strukturerad data och komponenter
`Article`, `BreadcrumbList`. Ingen `FAQPage`. `<Markering>` en gång (75 procent luftfuktighet). `<Kalkylator namn="daggpunkt" />` en gång, `<Verktygskort kalkylator="avfuktare" />` en gång. Inga `Kopknapp`, `Produktkort` eller `Jamforelsetabell`: mallen ger byggfel på dem i kunskapssamlingen, och `produkter: []` ska förbli tom.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-seo-luftfuktighet-inomhus.md` avsnitt b. Ettan är Alingsås kommun.
1. Talet: runt 50 procent är bäst, 30 till 70 går bra. Citerat med kommunen som källa; det är det läsaren söker efter.
2. Luftens vattenkapacitet vid olika temperaturer, i tabell. Vår tabell är en utbyggnad av deras.
3. Exemplet att uteluft på minus 20 grader som värms till 20 landar på cirka 6 procent relativ luftfuktighet.
4. Symtomen på torr luft (irriterade ögon, statisk elektricitet, torr hud).
5. Rådet att skaffa en termohygrometer och mäta. Vårt saltprov går ett steg längre.

### 12. Fällor
- **`kortSvar`** ger talet som frasen söker: runt 50 procent, 30 till 70 går bra, över 75 vid en kall yta börjar mögel. Fyra meningar. Den ska svara, inte introducera.
- **Vattenhaltstabellen med nio temperaturrader** och raden om att Alingsås anger samma tal vid 30, 20 och 0 grader. Kontrollen mot en oberoende källa är vad som gör vår egen beräkning trovärdig.
- **De två daggpunktstabellerna, inklusive de tomma cellerna.** Meningen "Tomma celler är kombinationer vi inte räknat, och de fyller vi inte i på känsla" ska stå kvar. Den är sajtens hållning i en mening.
- **Magnus-formelns konstanter (a = 17,625 och b = 243,04) och osäkerheten 0,35 grader.** Utan dem är tabellerna opåstådda tal.
- **Tumregeln "daggpunkten sjunker cirka en grad för varje 5 procentenheter lägre luftfuktighet".** Den är det läsaren tar med sig när hon lämnar sidan.
- **Snickargränstabellen i H2 6 med åtta rader och källraden under.** Den bär proffsmålgruppen, sex inlänkar och hela argumentet att sidan är bredare än en kommunsida.
- **Meningen om att badrummet står utan riktvärde med flit.** Att skriva ut vad vi inte vet är en E-E-A-T-signal, inte en lucka att fylla.
- **Saltprovet med 75,3 procent vid 25 grader och Greenspan 1977 via OIML R121.** Ingen svensk konkurrent har det, och det är sidans mest länkbara stycke.
- **Stycket om att vår mätning i fyra rum pågår.** Står kvar tills mätningen finns.

---

## /fukt/sorptionsavfuktare/

### 1. Adress och sidtyp
`/fukt/sorptionsavfuktare/`, fil `src/content/kunskap/fukt/sorptionsavfuktare.mdx`. Kunskapsartikel med köpråd, pelare fukt, kategori luftavfuktare, nivå mellan. Blandad intention med tyngd på kunskap. Undantaget "en produkt per typ, sist" gäller: två produkter i frontmatter, alltså reklamband och blocket "Produkterna vi nämner" sist.

### 2. Huvudfras och sidofraser
Huvudfras: **sorptionsavfuktare**, 1 900 per månad, YoY 0 procent. Toppar september och november (2 900), botten maj (1 000). Den jämnaste frasen i klustret.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| sorptionsavfuktare eller kondensavfuktare | 10 | H2 2, brödtext. Liten fras, men den är intentionen |
| kondensavfuktare | ingår i klustret | H2 2, i rubriken |
| avfuktare garage | 320 | H2 6, brödtext. **Egen sida planerad på `/fukt/avfuktare-garage/`**, så frasen får inte bära en rubrik här |
| sorptionsavfuktare krypgrund | ingår i krypgrundsklustret | H2 6, brödtext med länk vidare |
| våtluftsslang | gissning, låg | H2 5, i rubriken |

### 3. Title
Nuvarande: `Sorptionsavfuktare, temperaturen avgör om du behöver en` (55 tecken, ingen `seoTitle`).
Krav: 45 till 58 tecken. Huvudfrasen ordagrant först. Får gå: "om du behöver en". Tänk på att `/luftavfuktare/` och `/fukt/avfuktare-kallare/` inte får dela de tre första orden med den här.

### 4. Meta description
Nuvarande: 150 tecken. Krav 120 till 155. Huvudfrasen med. Löftet är fyra saker och ska förbli fyra: att den torkar vid minusgrader, att den drar mer el, kapacitetstabellen vid 5, 10 och 20 grader, och ljudet.

### 5. H1
Huvudfrasen ordagrant plus sidans tes: att det är temperaturen och inget annat som avgör. Skiljer sig från title om `seoTitle` sätts.

### 6. H2-struktur
Sju avsnitt, i den ordning läsaren behöver dem:
1. **Så torkar en sorptionsavfuktare luften.** Rotorn, kiselgelen, regenereringen, våtluften. Utan mekanismen är resten påståenden.
2. **Temperaturen där kondensavfuktaren ger upp.** De två kapacitetstabellerna (varma villkor, kylan) och de fyra källornas olika gränser. Bär "kondensavfuktare".
3. **Priset i el, och varför den drar mer.** kWh per liter-tabellen. Det är sidans tyngsta unika innehåll.
4. **Ljudet, och var den inte kan stå.** Ljudtabellen med avståndskolumnen.
5. **Våtluftsslangen, tätningen och hygrostaten.** Bär "våtluftsslang".
6. **Krypgrund, garage, vind och källare.** Ett stycke per utrymme. Bär "avfuktare garage" och "sorptionsavfuktare krypgrund".
7. **En sorption och en kondens vi rekommenderar.** Sist, enligt regeln om en produkt per typ.

### 7. Längd
Nuvarande cirka 2 790 ord. Mål 2 500 till 3 100. Ettan (Proffsmagasinet) är cirka 850 ord och tvåan cirka 1 200. Vi har gott om marginal; använd den till tabellerna, inte till fler ord.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| Huvudbild `fukt/sorption-flode.svg` | `bildtext` 116 tecken | Behåll i sak: sorption till vänster, kondens till höger, den ena skickar ut våtluft och den andra samlar vatten |
| `fukt/kapacitet-kurva` | **165 tecken** | Kortas till under 125. Måste säga: kurvdiagram, liter per dygn mot temperatur, sorption mot kondens |
| `fukt/sorption-installation` | **174 tecken** | Kortas till under 125. Måste säga: kallt utrymme i genomskärning, sorptionsavfuktare, våtluftsslang genom ytterväggen |

### 9. Interna länkar
Ut från sidan:
- `/fukt/avfuktare-kallare/`, "avfuktare till källaren", två gånger (ingress och H2 6)
- `/fukt/avfuktare-krypgrund/`, "avfuktare till krypgrunden"
- `/fukt/luftfuktighet-inomhus/`, "relativ luftfuktighet och daggpunkt"
- `/fukt/fukt-i-kallaren/`, "testet som skiljer dem åt"
- `/tester/acetec-evodry-6h-2/`, "granskningen av Acetec EvoDry 6H 2.0"
- `/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/`, "Wood's SW39FW mot Acetec EvoDry 6H 2.0"
- `/luftavfuktare/`, "alla avfuktare vi granskat"

Reglen "max en länk till köpguiden per H2-avsnitt" gäller. In till sidan, åtta länkar. Ankare andra sidor bygger på: "sorptionsavfuktare, temperaturen avgör" (krypgrund, kategorisidan, Acetec-granskningen), "sorption eller kondens, temperaturen avgör" (fukt-i-källaren, jämförelsen, Wood's-granskningen), "sorptionsavfuktare för källare under 15 grader" (källarguiden), "sorptionsavfuktare i kalla utrymmen" (luftfuktighet). **Sex av åtta inlänkar utlovar en temperaturgräns.** Tabellerna i H2 2 är alltså det inlänkarna betalar för.

### 10. Strukturerad data och komponenter
`Article`, `BreadcrumbList`. Ingen `FAQPage`. `<Markering>` en gång (10 grader). En `<Varning rubrik=...>` om att EvoDry 6H 2.0 inte ska ner i krypgrunden. **Inga `Kopknapp`, `Produktkort` eller `Jamforelsetabell` i brödtexten** — mallen ger byggfel i kunskapssamlingen. De två produkterna ligger i frontmatterns `produkter` och renderas av mallen sist; listan ändras inte av skribenten.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-seo-sorptionsavfuktare.md` avsnitt b. Ettan är Proffsmagasinets "Sorptionsavfuktare bäst i test", tvåan deras guide.
1. Arbetsområdet minus 20 till plus 40 grader, angivet per maskin.
2. Fyra namngivna maskiner med pris och kapacitet i liter per dygn.
3. Gränsen där kondens slutar fungera, uttryckt i grader.
4. Ljudet som köpargument, med en siffra (de anger sorption över 47 dB, kondens från cirka 30).
5. Prisskillnaden mellan teknikerna, uttryckt så att läsaren förstår storleksordningen.

### 12. Fällor
- **`kortSvar`** är fem meningar med gränsen (10 grader), mellanläget (10 till 15), när kondens vinner (över 15) och hålet i väggen. Det är hela beslutsträdet i första skärmen.
- **De två kapacitetstabellerna, med alla "ej angivet"-celler.** Meningen "Luckorna är inte slarv från vår sida" ska stå kvar. Att vi redovisar vad tillverkarna inte anger är sidans viktigaste argument, och tomma celler ser ut som något att städa bort.
- **kWh per liter-tabellen med åtta rader.** Ingen annan svensk sida har den. Kolumnen "Villkor" är inte utfyllnad: utan villkoret går raderna inte att jämföra, och meningen "Jämför raderna vid samma villkor, annars blir svaret fel" ska stå kvar.
- **Procenttalen 76 och 65 procent för Corroventa, och att de är våra egna beräkningar ur tabellens siffror.** Märkningen är ett krav, inte en brasklapp.
- **Ljudtabellens kolumn "Avstånd" med "ej angivet" i sex av sju rader.** Poängen är att bara en tillverkare säger var mikrofonen stod.
- **Slangdimensionerna (50, 63, 80 och 100 mm).** Det är det praktiska läsaren kom för och det enda som hindrar ett felborrat hål.
- **Meningen om att en sorptionsavfuktare i ett otätat utrymme torkar hela Sverige, en kubikmeter i taget.** En bild som gör tätningskravet begripligt; behåll poängen även om formuleringen byts.
- **Stycket om att vår egen ljudmätning pågår.**

---

## /fukt/ (pelarhubben)

### 1. Adress och sidtyp
`/fukt/`, fil `src/content/pelare/fukt.mdx`. Pelarhub. **Filen har ingen brödtext och ska inte få någon.** Hubben är ett galleri som `PelarHub.astro` bygger av artiklarnas frontmatter, grupperat i Hitta felet, Välj rätt, Gör det själv och Räkna (`docs/DESIGN.md` 5.2). Allt skribenten kan ändra är tre fält: `title`, `description` och `ingress`.

### 2. Huvudfras och sidofraser
Ingen egen fras. Hubben rankar på navigationsfraser och varumärkessökningar och är byggd för intern länkstyrka, inte för trafik. Närmast en fras är "fuktproblem hus", som saknar mätning i båda körningarna.

Ord som ska finnas i `description` och `ingress`, eftersom de säger vad klustret täcker: luftfuktighet, avfuktare, mögel, ventilation, källare, krypgrund, vind. Ingen av dem ska stå ordagrant som sökfras i en rubrik; de är innehållsförteckning.

### 3. Title
Nuvarande: `Fukt och inomhusklimat` (22 tecken, ingen `seoTitle`). Med suffix blir det `Fukt och inomhusklimat · Hantverkstips`, 38 tecken.
Krav: högst 44 tecken, så att varumärket följer med. Ordet "fukt" först.

### 4. Meta description
Nuvarande: 150 tecken. Krav 120 till 155. Ska säga vad pelaren innehåller **och** i vilken ordning sajten tar problemen: diagnosen först, maskinen sist. Den ordningen är sajtens identitet och står i `docs/PROJEKTBRIEF.md`.

### 5. H1
`title` renderas som H1. Kort, beskriver ämnesområdet, ingen fras instoppad.

### 6. H2-struktur
Inga H2 i filen. Mallen sätter gruppernas rubriker. Lägg inte till brödtext med egna H2 — kommentaren i frontmatter säger det, och kommentaren ska stå kvar.

### 7. Längd
Brödtext: noll ord, oförändrat. `ingress` är en mening (i dag 118 tecken); håll den under 140.

### 8. Bilder
Inga. Hubben har ingen huvudbild och behöver ingen.

### 9. Interna länkar
Hubben länkar automatiskt till varje publicerad sida i pelaren. Ingen handskriven länk i filen. Fältet `viktiga` (upp till tre `{ titel, href }` som `/amnen/` länkar till) saknas i dag; det sätts av mig, inte av skribenten. In till hubben: brödsmulan på varje fuktsida, sidfoten, huvudmenyn, `/amnen/`, och en textlänk från `/luftavfuktare/` med ankaret "pelaren Fukt".

### 10. Strukturerad data och komponenter
`BreadcrumbList`. Ingen `Article`. Tillåtna komponenter i hubbar är `Faktaruta`, `Varning`, `Verktygskort`, `Markering` och `Illustration`, men ingen av dem används här och ingen ska läggas till.

### 11. Det ettan har som vi måste behålla
Ingen fras, ingen etta. Hubbens uppgift är att samla klustret och skicka länkstyrka till de tio andra sidorna. Kravet i `docs/INNEHALLSARKITEKTUR.md` avsnitt 6 är att hubben länkar till varje sida i klustret; det sköter mallen så länge artiklarnas frontmatter är rätt.

### 12. Fällor
- **Kommentaren i frontmatter** ("Hubben är ett galleri som mallen bygger av frontmatter i artiklarna ... Ingen handskriven text här") ska stå kvar. Utan den skriver nästa skribent en ingress på 600 ord.
- **`utkast: false` får inte ändras.** Hubben står i huvudmenyn och en pelare kommer in i menyn genom det fältet.
- **Filändelsen `.mdx`.** `npm run kontrollera` stoppar bygget om en hub sparas som `.md`, eftersom H2 då tappar pennstrecket.
- **Grupperingen styrs av artiklarnas `typ` och `niva`,** inte av hubben. Ändrar du `niva` på en artikel flyttar den sig på hubben; gör det inte i förbifarten.

---

## /tester/acetec-evodry-6h-2/

### 1. Adress och sidtyp
`/tester/acetec-evodry-6h-2/`, fil `src/content/tester/luftavfuktare/acetec-evodry-6h-2.mdx`. Granskning (inte test), kategori luftavfuktare, nivå mellan. Produktslug `acetec-evodry-6h-2`. Kommersiell intention, liten volym, hög konverteringsgrad.

### 2. Huvudfras och sidofraser
Huvudfras: **acetec evodry 6h**, ingen mätbar volym i Google Ads-uttaget (under tio i månaden). Jag gissar 30 till 80 per månad med septembertopp. Sidan finns för att maskinen är vårt val till kall källare på fyra andra sidor, inte för volymen.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| acetec evodry 6h 2.0 test | ingen data | brödtext. Ordet **test** får inte stå som påstående om vår metod, bara som läsarens sökord i sammanhang |
| evodry 6h recension | ingen data | brödtext eller inte alls |
| sorptionsavfuktare källare | ingår i 1 900 | brödtext, H2 om vem som ska köpa |
| acetec evodry 6h krypgrund | ingen data | H2 om krypgrund, i rubriken |

Modellbeteckningen ska stå ordagrant som "Acetec EvoDry 6H 2.0" första gången och i title. Sidan äger inte "sorptionsavfuktare" som huvudfras.

### 3. Title
Nuvarande `seoTitle`: `Acetec EvoDry 6H 2.0 granskad, el och kyla` (42 tecken). `title` (H1): `Acetec EvoDry 6H 2.0, torkar där kondensmaskinerna ger upp, för fyra kronor litern` (82).
Krav: **högst 44 tecken**, så att " · Hantverkstips" följer med. Modellnamnet ordagrant först. Ordet "granskad" ska stå kvar: vi har inte haft maskinen, och att skriva "test" i title vore osant.

### 4. Meta description
Nuvarande: 150 tecken. Krav 120 till 155. Ska börja med "Granskning av Acetec EvoDry 6H 2.0" eller motsvarande, så att etiketten syns i sökresultatet. Löftet: vad 7,4 liter räcker till, elkostnaden, hålet i väggen, och att tillverkaren avråder från krypgrund.

### 5. H1
Får vara lång och är det i dag. Ska innehålla modellnamnet och sidans slutsats. Skiljer sig starkt från `seoTitle`, vilket är avsikten.

### 6. H2-struktur
Sju avsnitt. Testmallens ordning är en del av sidtypen.
1. **Vad du får för pengarna.** Mått, vikt, ingen tank, slang, styrning, filter, garanti.
2. **Sju liter är sant vid 20 grader.** Vad kapaciteten gäller vid och vad som saknas i kyla.
3. **Hålet i väggen är en del av priset.** Installationen, måtten, slanglängden.
4. **Vad den kostar att ha igång.** Elkostnadstabellen och kronor per liter.
5. **Ljudet.** Tre siffror för samma maskin.
6. **Krypgrund: nej säger tillverkaren, ja säger butikerna.** Sidans mest citerbara avsnitt.
7. **Mot de tre den ska jämföras med**, och **vem som ska köpa den**.
8. **Så granskade vi.** Metod, underlag, och listan "det vi inte vet".

### 7. Längd
Nuvarande cirka 1 640 ord. Mål 1 500 till 1 900. Det finns ingen test eller recension på frasen i dag, bara produktsidor på 300 till 600 ord. Längden är inte problemet; substansen per avsnitt är det.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| `fukt/evodry-6h-installation` | **255 tecken** | Kortas till under 125. Måste säga: garage i genomskärning, maskinen vid ytterväggen, våtluftsslang med fall ut genom hålet. Slanglängd, hygrostatratt och plåt flyttas till `bildtext` |

Sidan har ingen huvudbild i frontmatter. Produktbilden kommer från databasen via omdömesblocket.

### 9. Interna länkar
Ut från sidan:
- `/luftavfuktare/`, "kategorisidan för luftavfuktare"
- `/fukt/sorptionsavfuktare/`, "sorptionsavfuktare, temperaturen avgör"
- `/fukt/avfuktare-kallare/`, "köpguiden om avfuktare till källaren"
- `/fukt/avfuktare-krypgrund/`, "avfuktare till krypgrunden"
- `/tester/woods-sw39fw/`, "granskningen av Wood's SW39FW"
- `/om/sa-testar-vi/`, "Så testar vi"
- `/rakna/avfuktare/` som verktygskort

Kravet i arkitekturen: varje test länkar till kategorisidan, köpguiden och minst en kunskapsartikel som förklarar det testet mäter. Alla tre finns; ingen får falla bort.

In till sidan, sex länkar, alla med ankaret "granskningen av EvoDry 6H 2.0" eller "granskningen av Acetec EvoDry 6H 2.0". **Ordet "granskningen" är alltså utlovat från sex håll.** Byts etiketten till Test när kammartestet är gjort ska alla sex ankare bytas samtidigt; det är inte skribentens beslut i den här omgången.

### 10. Strukturerad data och komponenter
`Product` plus `AggregateOffer`, `BreadcrumbList`. **Omdömesblocket byggs av frontmatter**, inte av brödtexten: `omdome`, `kopOm`, `kopInteOm`, `matningar` (fem rader, `markera: true` på kapacitetsraden, `kalla: tillverkaren` på alla) och `alternativ` (tre produkter med `etikett` och `varfor`). De fälten är första skärmen och strukturdatans innehåll. Skribenten får skriva om texten i `omdome`, `kopOm` och `kopInteOm`, men inte ändra `matningar`, `alternativ`, `etikett: granskning` eller `produkt`. `<Markering>` en gång (minus 20 grader). `<Verktygskort>` en gång. Ingen `Faq`.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-acetec-evodry-6h-2-2026-09-16.md` avsnitt 1. Ettan är Proffsmagasinets produktsida.
1. De fullständiga tekniska data: 7,4 liter vid 20 grader och 60 procent, 530 W, minus 20 till plus 40 grader, 100 kubikmeter, mått och vikt.
2. Priset, med läsdatum.
3. Att slang på 1,5 meter och utloppsplåt ingår.
4. Hygrostatens inställningsområde och att styrningen är en ratt.
5. Optihus rekommenderade volymer per utrymme och slanglängden max 7,5 meter, som är det enda praktiska någon återförsäljare bidrar med.

### 12. Fällor
- **`omdome`, `kopOm` och `kopInteOm` i frontmatter är första skärmen**, inte brödtextens inledning. De ska svara, inte introducera, och "köp inte om" ska vara lika konkret som "köp om".
- **Citatet ur Acetecs datablad med artikelnumren för RCF 12 och RCF 20.** Ordagrant. Det är sidans mest unika innehåll och citeras på två andra sidor.
- **Meningen att två återförsäljare ändå säljer maskinen till krypgrund, och att vi följer tillverkaren.** Konflikten är poängen.
- **Uppskattningen 5,6 liter vid 10 grader, med reservationen att kurvan är lånad från Corroventa.** Reservationen är ett krav: talet är inte Acetecs.
- **Listan "Det vi inte vet" med sex punkter.** Den är Googles E-E-A-T i praktiken och sajtens signatur. Sex punkter in, sex punkter ut.
- **Meningen om varför det står granskning och inte test.** Står den inte kvar bryter sidan mot `/om/sa-testar-vi/`.
- **Motsatsparen (5,4 mot 4,7 kg, 48 mot 46 dB, 530 mot 585 W, 7,4 mot 9,7 liter).** Fyra ställen där källorna säger olika, och vi skriver ut båda. Det är metodlöftet på den här sajten.

---

## /tester/woods-sw39fw/

### 1. Adress och sidtyp
`/tester/woods-sw39fw/`, fil `src/content/tester/luftavfuktare/woods-sw39fw.mdx`. Granskning, kategori luftavfuktare, nivå mellan. Produktslug `woods-sw39fw`. Maskinen är förstaval på kategorisidan och i köpguiden, alltså klustrets viktigaste produktsida.

### 2. Huvudfras och sidofraser
Huvudfras: **woods sw39fw**, ingen mätbar volym (under tio i månaden). Jag gissar 20 till 60 per månad, topp augusti till september.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| woods sw39fw test | ingen data | brödtext, aldrig som påstående att vi testat |
| woods sw39fw i-ecodefrost | ingen data | H2 om avfrostningen, i rubriken eller första meningen |
| avfuktare 19 liter | gissning, låg | H2 2, brödtext |
| woods avfuktare källare | ingår i källarklustret | brödtext, en gång |

Hela modellbeteckningen "Wood's SW39FW" med apostrof ska stå i title, H1 och första stycket. Butikerna skriver "I-EcoDefrost+"; skriv den som tillverkaren gör minst en gång så att frasen matchar.

### 3. Title
Nuvarande `seoTitle`: `Wood's SW39FW, granskning av kapacitet och elkostnad` (52 tecken). `title` (H1): `Wood's SW39FW, nitton liter på lådan och knappt sex i källaren` (62).
Krav: 45 till 58 tecken, modellnamnet ordagrant först, ordet "granskning" kvar. Vill du ha varumärket i sökresultatet måste titeln ner under 45 tecken; det är ett val jag tar, inte skribenten.

### 4. Meta description
Nuvarande: 135 tecken. Krav 120 till 155. Ska börja med "Granskning av Wood's SW39FW". Löftet: vad de 19 literna blir vid 15 grader, elkostnaden per månad, och att ingen anger ljudnivån.

### 5. H1
Modellnamnet plus sidans slutsats i siffror. Den nuvarande ("nitton liter på lådan och knappt sex i källaren") är hela granskningen i sju ord och sätter ribban för omskrivningen.

### 6. H2-struktur
Åtta avsnitt:
1. **Vad du får för pengarna.** Mått, vikt, tank, slang som inte ingår, garantin som är två olika saker.
2. **De nitton literna är uppmätta i ett annat rum.** Omräkningen till 5,7 liter vid 15 grader, med intervall. Bär "avfuktare 19 liter".
3. **Avfrostningen är hela poängen, och den är dåligt beskriven.** Bär "i-EcoDefrost".
4. **Ljudet är uppgiften ingen vill skriva ut.**
5. **Vad den kostar att ha igång.** Elkostnadstabellen med båda effekterna.
6. **Tanken räcker längre än lådan antyder.**
7. **Mot de tre den ska jämföras med**, och **vem som ska köpa den**.
8. **Så granskade vi.**

### 7. Längd
Nuvarande cirka 1 710 ord. Mål 1 500 till 1 900. Det finns ingen recension alls på frasen; de tre översta är två produktsidor och en säljfilm.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| `fukt/sw39fw-kapacitet` | **170 tecken** | Kortas till under 125. Måste säga: stapeldiagram, tillverkarens 19 liter mot vår omräkning till 5,7 liter vid 15 grader. Intervallet flyttas till `bildtext` |

### 9. Interna länkar
Ut från sidan:
- `/luftavfuktare/`, "kategorin luftavfuktare"
- `/fukt/avfuktare-kallare/`, "kalkylatorn och köpguiden"
- `/fukt/sorptionsavfuktare/`, "sorption eller kondens, temperaturen avgör"
- `/fukt/luftfuktighet-inomhus/`, "normal luftfuktighet inomhus"
- `/tester/acetec-evodry-6h-2/`, "granskningen av Acetec EvoDry 6H 2.0"
- `/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/`, "jämförelsen SW39FW mot EvoDry 6H 2.0"
- `/om/sa-testar-vi/`, "Så testar vi"
- `/rakna/avfuktare/` som verktygskort, `/rakna/elkostnad/` som `<Kalkylator>`

In till sidan, sex länkar, alla med ankaret "granskningen av Wood's SW39FW". **Två av dem, i köpguiden och på kategorisidan, lovar uttryckligen "kapaciteten omräknad till 15 grader och elkostnaden per månad".** Båda talen måste alltså finnas kvar i just den formen.

### 10. Strukturerad data och komponenter
`Product` plus `AggregateOffer`, `BreadcrumbList`. Omdömesblocket byggs av `omdome`, `kopOm`, `kopInteOm`, `matningar` (fem rader, varav **raden "Ljudnivå på 1 m" medvetet saknar värde**) och `alternativ` (tre produkter). Den tomma raden ska stå kvar: den visar vad vi inte vet, och `/om/sa-testar-vi/` lovar att tomma celler inte fylls i på känsla. `<Markering>` en gång (5,7 liter per dygn vid 15 grader). `<Verktygskort>` en gång, `<Kalkylator namn="elkostnad" />` en gång. Ingen `Faq`.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-woods-sw39fw-2026-09-16.md` avsnitt 1. Ettan är Proffsmagasinets produktsida.
1. Fullständiga tekniska data: 19 liter per dygn, 2 till 40 grader, 190 till 340 m³/h, 320 W, tank 11,4 liter, mått.
2. Priset med läsdatum och lagerstatus.
3. Maxytan 140 kvm, som butiken har i rubriken men inte i tekniska data.
4. Att maskinen har autostopp, slangdränering, mekaniska vred, hjul och handtag.
5. Kylmediet R290 och mängden, som ingen annan svensk sida nämner.

### 12. Fällor
- **Omräkningsfaktorn 0,30 och intervallet 0,25 till 0,35**, plus meningen om att faktorn är interpolerad och saknar egen mätpunkt. Talet 5,7 liter är sidans rubrik; utan reservationen är det ett påstående vi inte kan stå för.
- **Villkoret 30 grader och 80 procent luftfuktighet, hämtat ur Wood's produktblad för systermodellen SW38FW.** Källkedjan (butiken saknar villkoret, tillverkaren dokumenterar bara systermodellen) är hela avsnitt 2.
- **Att Wood's inte har någon egen produktsida för SW39FW.** Punkt 6 i briefens lista över vad vi har som ettan saknar.
- **De två effekterna, 320 W från butiken och 510 W från tillverkarens produktblad**, och att skillnaden syns i eltabellens fyra rader. Kortas tabellen till två rader faller argumentet.
- **Ljudsiffran 54 till 57 dB för systermodellen, publicerad som indikation med reservationen utskriven**, samtidigt som tabellraden står tom. Den kombinationen är avsiktlig och får inte "städas".
- **Listan "Det vi inte vet" med fem punkter.** Fem in, fem ut.
- **Meningen om att en maskin som startar vid 2 grader inte är detsamma som en maskin som avfuktar där.** Den återkommer på tre sidor och är klustrets bärande resonemang.

---

## /jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/

### 1. Adress och sidtyp
`/jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/`, fil `src/content/jamforelser/luftavfuktare/woods-sw39fw-vs-acetec-evodry-6h-2.mdx`. Jämförelse, kategori luftavfuktare, nivå mellan. Kommersiell med informativ ingång.

### 2. Huvudfras och sidofraser
Huvudfras: **kondensavfuktare eller sorptionsavfuktare källare**, ingen mätbar volym som helfras. Besläktade mätta fraser: "sorptionsavfuktare" 1 900 (ägs av kunskapssidan) och "sorptionsavfuktare eller kondensavfuktare" 10. Jag gissar 50 till 150 per månad för hela frasfamiljen "kondens eller sorption" med olika ordföljd. Sidan finns för mellanlägesläsaren och för att fånga modellparet, inte för volym.

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| woods sw39fw eller acetec evodry | ingen data, ingen etta finns | title och H1 |
| avfuktare källare 10 grader | ingen data | H2 1, brödtext |
| kondens eller sorption | ingår i 10 | H2 1 eller H2 2, brödtext |
| avfuktare kostnad per liter | gissning, låg | H2 2, i rubriken |

Sidan äger inte "sorptionsavfuktare" (kunskapssidan), "avfuktare källare" (köpguiden) eller modellsidornas egna fraser. Ordet "vs" står i URL:en men ska aldrig stå i title eller H1; skriv "mot" eller "eller".

### 3. Title
Nuvarande `seoTitle`: `Wood's SW39FW eller Acetec EvoDry, kondens mot sorption` (55 tecken). `title` (H1): `Wood's SW39FW mot Acetec EvoDry 6H 2.0, samma källare vid 15, 10 och 5 grader` (77).
Krav: 45 till 58 tecken. Båda modellnamnen och ordparet kondens/sorption ska rymmas. Får gå: "6H 2.0" i `seoTitle`.

### 4. Meta description
Nuvarande: 151 tecken. Krav 120 till 155. Löftet: samma källare på 40 kvm vid tre temperaturer, liter per dygn, el per liter, och treårskostnaden. Talen 15, 10 och 5 grader ska stå med; de är sidans unika innehåll.

### 5. H1
Båda modellnamnen plus villkoret (samma källare, tre temperaturer). Får vara lång.

### 6. H2-struktur
Sex avsnitt i beslutsordning:
1. **Vatten per dygn i samma källare.** Omräkningstabellen vid 15, 10 och 5 grader plus behovet i samma källare. Bär "avfuktare källare 10 grader".
2. **Vad varje liter vatten kostar i el.** Bär "avfuktare kostnad per liter".
3. **Elräkningen per månad, och priset över tre år.** Totalkostnadstabellen.
4. **Ljudet ingen anger på samma sätt.**
5. **Tank i källaren mot slang genom väggen.** Det praktiska.
6. **Vilken du ska köpa, i tre fall.** Inklusive "köp ingen av dem".

### 7. Längd
Nuvarande cirka 1 870 ord. Mål 1 700 till 2 100. Ettan på den besläktade frasen (Proffsmagasinets guide) är cirka 2 800 ord men utan ett enda tal vid låg temperatur. Vi vinner på tabeller, inte på ord.

### 8. Bilder
| Bild | Nuvarande alt | Krav |
|---|---|---|
| `fukt/sw39fw-vs-evodry-kapacitet` | **188 tecken** | Kortas till under 125. Måste säga: stapeldiagram, liter per dygn vid 15, 10 och 5 grader, de två maskinerna vid namn. Talen flyttas till `bildtext` |

Ingen huvudbild i frontmatter. `Illustration` är inte tillåten i jämförelser enligt arkitekturen (undantaget gäller tills en skiss behövs); den här sidan har fått sitt undantag, så lägg inte till fler.

### 9. Interna länkar
Ut från sidan:
- `/fukt/avfuktare-kallare/`, "köpguiden om avfuktare till källaren"
- `/tester/woods-sw39fw/`, "granskningen av Wood's SW39FW"
- `/tester/acetec-evodry-6h-2/`, "granskningen av Acetec EvoDry 6H 2.0"
- `/fukt/sorptionsavfuktare/`, "sorption eller kondens, temperaturen avgör"
- `/fukt/fukt-i-kallaren/`, "tejptestet som skiljer markfukt från kondens"
- `/fukt/avfuktare-krypgrund/`, "avfuktare till krypgrunden"
- `/luftavfuktare/`, "alla avfuktare vi granskat"
- `/rakna/avfuktare/` som verktygskort

In till sidan, bara tre länkar, och det är klustrets svagaste inlänkning. Ankare: "jämförelsen mellan SW39FW och EvoDry 6H 2.0" (köpguiden), "Wood's SW39FW mot Acetec EvoDry 6H 2.0" (sorptionssidan), "jämförelsen SW39FW mot EvoDry 6H 2.0" (Wood's-granskningen). **Alla tre lovar en jämförelse vid specifika temperaturer.** Byggkontrollen varnar för sidor utan inlänk; tre är över gränsen men inte med marginal, så ta inte bort något som gör att en inlänk blir omotiverad.

### 10. Strukturerad data och komponenter
`Article`, `BreadcrumbList`. Ingen `Product` (jämförelser får det inte), ingen `FAQPage`. `kortSvar` i frontmatter är första skärmen, med **10 grader i fetstil** — fetstilen är avsiktlig och ska vara kvar. `<Markering>` en gång (4,7 liter per dygn). `<Verktygskort>` en gång. Frontmatterns `produkter` med två maskiner, `etikett` och `forVem` ändras inte.

### 11. Det ettan har som vi måste behålla
Ur `docs/briefer/underlag-jamforelse-sw39fw-evodry-2026-09-16.md` avsnitt 1. Ettan på den närmaste frasen är Proffsmagasinets guide; på modellparet finns ingen etta.
1. Att sorption arbetar ner till minus 20 grader och kondens slutar nära noll.
2. Ljudet som skiljelinje: sorption sällan under 47 dB, vissa kondensmaskiner runt 30.
3. Prisbilden: kondens billigast i inköp, sorption flerdubbelt.
4. Installationsskillnaden: slangar och våtluft genom vägg mot enbart placering.
5. Underhållet och filterbytet som återkommande kostnad.

### 12. Fällor
- **`kortSvar` med gränsen 10 grader i fetstil.** Det är sidans hela svar i fem meningar, inklusive "är källaren kall och större än 20 kvm räcker ingen av dem".
- **De fyra antagandena under kapacitetstabellen** (faktorerna 0,30, 0,20 respektive 0,90, 0,80, 0,65, varifrån de kommer, och att kondensraden vid 5 grader vilar på en butiksuppgift). Utan dem är tabellen siffror utan grund.
- **Meningen "Osäkerheten är inte liten ... Ordningen mellan maskinerna ändras inte av det."** Den gör sidan användbar trots osäkerheten, och den är svår att skriva om utan att tappa balansen.
- **Behovsraden: 4,7 liter vid 15 grader och 7,3 liter vid 10 grader i samma källare.** Poängen är att behovet *växer* när det blir kallare medan maskinerna ger mindre. Det är sidans mest överraskande iakttagelse och ingen annan har den.
- **Reservationen om Wood's 510 W som vänder första raden.** Ett avsnitt där vi argumenterar mot vår egen slutsats; det ska vara kvar.
- **Treårstabellen med inköp plus el**, och de tre alternativa utfallen under den (året runt, 510 W).
- **"Köp ingen av dem"-stycket sist.** Tre fall, inklusive krypgrund och markfukt.

---

## /luftavfuktare/ (kategorisidan)

### 1. Adress och sidtyp
`/luftavfuktare/`, fil `src/content/kategorier/luftavfuktare.md`. Bäst i test-sida, pelare fukt. Kategorislugen ligger i roten och delar namnrymd med pelarslugarna. Sidan är klustrets kommersiella topp och den som tjänar mest pengar. `noindex` är avstängt sedan 2026-09-16.

### 2. Huvudfras och sidofraser
Huvudfras: **avfuktare bäst i test**, 880 per månad, YoY −45 procent (klustret 1 650, topp september 1 900, botten april 320).

| Sidofras | Volym | Var den ska stå |
|---|---|---|
| luftavfuktare bäst i test | 720, YoY −28 % | `seoTitle` eller H1, brödtext |
| bästa luftavfuktare | 50 | `seoTitle`, brödtext |
| luftavfuktare test | ingår i klustret | brödtext, men **aldrig som påstående att vi testat** |
| avfuktare jämförelse | gissning, låg | brödtext i "Så väljer du" |

Kategorisidan äger frasmönstren "bästa X", "X bäst i test" och "X test". Den äger inte "avfuktare källare" eller "avfuktare krypgrund"; de orden får stå i löptext med länk vidare, men ingen H2 får bära dem.

### 3. Title
Nuvarande `seoTitle`: `Bästa luftavfuktaren, jämförd på datablad` (41 tecken). `title` (H1): `Luftavfuktare jämförda på tillverkarnas egna siffror, och tre vi står för` (73).
Krav: **högst 44 tecken**, så att " · Hantverkstips" följer med. Ordet "bästa" eller "bäst i test" ska stå, och "på datablad" är reservationen som gör titeln sann så länge vi inte mätt.

### 4. Meta description
Nuvarande: 149 tecken. Krav 120 till 155. Huvudfrasen eller en variant med. **Meningen "Inga egna mätningar än" ska stå kvar** tills kammartestet är gjort; det är hela skillnaden mot de tunna testsajterna i SERP:en och en direkt tillämpning av Googles riktlinjer för recensionsinnehåll.

### 5. H1
`title` renderas som H1 över ingressen. Ska innehålla "luftavfuktare" och säga vad jämförelsen bygger på. Får inte börja med samma tre ord som `seoTitle`.

### 6. H2-struktur
Två H2 i brödtexten, och bara två. Tabellen, "Våra val" och listorna byggs av mallen ur frontmatter och databasen.
1. **Så väljer du.** Tre till fem stycken enligt arkitekturen, aldrig en andra köpguide. Ordningen är temperatur, sedan storlek, sedan utrymmestyp, med länk vidare till köpguiden i varje stycke.
2. **Så granskade vi.** Metoden, de tre sakerna vi räknat själva, och vad som fattas.

Lägg inte till en tredje H2. Kategorisidans avsnitt ska vara kortare än köpguidens, annars kannibaliserar de varandra.

### 7. Längd
Nuvarande brödtext cirka 580 ord plus `ingress` på 231 tecken. Mål 500 till 750 ord. Den tunna konkurrensen (Bygghemma, bäst-i-test.se, två exaktdomäner) skriver 800 till 1 500 ord utan mätvärden; vi vinner på tabellen och på ärligheten, inte på längden. En kategorisida som växer till 1 500 ord börjar konkurrera med `/fukt/avfuktare-kallare/`.

### 8. Bilder
Inga i filen. Produktbilder kommer från databasen. `docs/DESIGN.md` kräver minst ett diagram per kategorisida; det är ännu inte byggt och beställs av mig när kammartestet finns. Lägg inte in en illustration på eget bevåg.

### 9. Interna länkar
Ut från sidan, i "Så väljer du":
- `/tester/woods-sw39fw/`, "granskningen av Wood's SW39FW"
- `/tester/acetec-evodry-6h-2/`, "granskningen av EvoDry 6H 2.0"
- `/fukt/sorptionsavfuktare/`, "sorptionsavfuktare, temperaturen avgör"
- `/fukt/avfuktare-kallare/`, "rätt avfuktare till källaren"
- `/fukt/avfuktare-krypgrund/`, "avfuktare till krypgrunden"
- `/rakna/avfuktare/`, "kalkylatorn"
- `/fukt/`, "pelaren Fukt"
- `/rakna/avfuktare/#sa-raknar-vi`, "så räknar vi"
- `/om/sa-testar-vi/`, "så testar vi"

Kravet: kategorisidan länkar till sin pelarhub, sin köpguide och sin kalkylator i "Så väljer du". Alla tre finns. Mallen listar automatiskt alla tester och jämförelser i kategorin; den listan ersätter inga textlänkar.

In till sidan: fem textlänkar med ankaret "alla avfuktare vi granskat", plus "kategorisidan för luftavfuktare" och "kategorin luftavfuktare" från de två granskningarna, plus brödsmulan från varje test. **Ankaret "alla avfuktare vi granskat" lovar bredd**, så tabellen måste fortsätta innehålla fler maskiner än de tre valen.

### 10. Strukturerad data och komponenter
`ItemList`, `BreadcrumbList`. **Frontmatter styr sidan och ändras inte av skribenten:** `specs` (nio rader i visningsordning, med `bast: hogst | lagst`), `val` (tre produkter med `etikett` och `forVem`), `kopguide`, `kalkylator`, `noindex`. Produktvalet är produktexpertens och affiliateansvarigs. Filen är `.md`, inte `.mdx`, så inga komponenter i brödtexten. HTML-kommentaren om indexeringen (rad 53) ska stå kvar.

### 11. Det ettan har som vi måste behålla
Ettan är Proffsmagasinets "5 populära avfuktare testade"; övriga i topp är Bygghemma och två exaktdomäner.
1. En rangordnad lista med ett tydligt förstaval. Vårt "Våra val" med tre etiketter svarar mot det.
2. Kapacitet i liter per dygn och maxyta per maskin, i tabell.
3. Pris per maskin, uppdaterat.
4. En kort "så väljer du"-text före listan.
5. Flera maskiner än de rekommenderade, så att läsaren upplever att urvalet är gjort åt henne.

### 12. Fällor
- **Meningen "En maskin som ger 20 liter per dygn vid 30 grader och 80 procent luftfuktighet ger inte 20 liter vid 12 grader och 75 procent."** Den är kategorisidans hela existensberättigande mot de tunna testsajterna.
- **"Saknas villkoret på produktsidan står det ej angivet, och vi räknar inte fram en siffra åt tillverkaren."** Metodlöftet; ta inte bort det för att det låter defensivt.
- **De tre punkterna om vad vi räknat själva** (kWh per månad, kWh per liter, dimensioneringstabellen med Magnus-formeln). Tre in, tre ut.
- **Meningen om att eeese Adam 20 inte är vårt val trots lägre pris och lägre uppgiven ljudnivå.** Ett aktivt "köp inte" på en kategorisida är sällsynt i nischen och är precis vad Googles riktlinjer för recensionsinnehåll efterfrågar.
- **Stycket om att etiketten byts till Test när mätningen finns.** Det är ett löfte till läsaren och en intern påminnelse.
- **`ingress` på 231 tecken.** Den renderas under H1 och är i praktiken första skärmen. Den ska säga tre saker: samma mått för alla, villkoret utskrivet, och att det som saknas står som saknas.

---

## /om/sa-testar-vi/

### 1. Adress och sidtyp
`/om/sa-testar-vi/`, fil `src/content/sidor/sa-testar-vi.mdx`. Om-sida, `strukturdata: Article`. Ingen kommersiell intention. Sidan är sajtens förtroendesida: den definierar skillnaden mellan test och granskning som tretton andra sidor hänvisar till.

### 2. Huvudfras och sidofraser
Ingen sökfras, och sidan ska inte jaga någon. Den finns för läsare som klickat på "så testar vi" från en produktsida och för Googles bedömning av förstahandserfarenhet.

Ord som måste finnas eftersom andra sidor hänvisar till dem: **test**, **granskning**, **datablad**, **kalkylator**, **mätning**. Ingen av dem bär en sökfras; de är begrepp sajten definierar här.

### 3. Title
Nuvarande: `Så testar vi` (12 tecken, ingen `seoTitle`). Med suffix: `Så testar vi · Hantverkstips`, 28 tecken.
Krav: högst 44 tecken. Ordet "testar" ska stå, eftersom det är ankartexten från tretton sidor. Gör den inte längre än den behöver vara.

### 4. Meta description
Nuvarande: 148 tecken. Krav 120 till 155. Löftet: skillnaden mellan test och granskning, hur vi räknar i kalkylatorerna, och vad som kommer att mätas.

### 5. H1
`Så testar vi` eller en lika kort variant. H1 och ankartexten från andra sidor ska vara igenkännbart samma sak.

### 6. H2-struktur
Fyra avsnitt, alla fyra måste finnas:
1. **Test eller granskning.** Definitionen som två testsidor, kategorisidan och elva andra sidor hänvisar till.
2. **Vad vi gör med ett datablad.** Villkoret, "ej angivet", och regeln om två källor som säger olika.
3. **Så räknar vi i kalkylatorerna.** Avfuktarformelns tre poster, marginalen 1,3, omräkningsfaktorerna, Magnus-formeln och elpriset.
4. **Vad som kommer att mätas.** Den planerade ordningen, fem punkter.

### 7. Längd
Nuvarande cirka 560 ord. Mål 500 till 800. Sidan ska vara läsbar i ett svep. Blir den längre läser ingen den, och då tappar den sin funktion.

### 8. Bilder
Inga, och ingen behövs. Sidan är en policy, inte en förklaring av en mekanism.

### 9. Interna länkar
Ut från sidan: `/rakna/avfuktare/#sa-raknar-vi`, "så räknar vi". Det är den enda utgående länken i dag och den ska vara kvar. En länk till `/luftavfuktare/` vore rimlig att lägga till; föreslå den i granskningsrundan.

In till sidan, tretton länkar. Två ankartexter dominerar: **"Så hämtar vi värden från tillverkarna"** (sju guider utanför fuktklustret) och **"så testar vi"** (redaktionens författarsida, om-sidan, kategorisidan). Dessutom "så mäter vi" från luftfuktighetssidan och "Så testar vi" från de två granskningarna. **Sju sidor lovar alltså uttryckligen ett avsnitt om hur vi hämtar värden från tillverkarna.** Det är H2 2, och den får inte försvinna eller bakas ihop med H2 1.

### 10. Strukturerad data och komponenter
`Article` via `strukturdata: Article` i frontmatter, plus `BreadcrumbList` och `Organization` som publisher. Fältet `strukturdata` ändras inte. Inga komponenter i brödtexten i dag; lägg inte till några.

### 11. Det ettan har som vi måste behålla
Ingen sökfras och ingen etta. Motsvarigheten i nischen är testsajternas metodsidor (test.se, testra.se, testkollen.se), som alla skriver att de "kollar vad andra tycker" eller "bygger på insamlad data". Fem saker vår sida måste göra som deras gör eller borde göra:
1. Säga rakt ut vad ordet "test" betyder på den här sajten.
2. Säga var siffrorna kommer ifrån.
3. Säga vad som händer när två källor säger olika.
4. Redovisa konstanterna i kalkylatorerna, med källa eller som antagande.
5. Säga vad som ännu inte är gjort, med en tidsordning.

### 12. Fällor
- **Första meningen: "I september 2026 har vi inte mätt något själva."** Att skriva det högst upp är sajtens enskilt starkaste trovärdighetssignal, och den frestelse som är störst att skriva bort i en ny röst. Den ska stå kvar och datumet ska uppdateras, aldrig tas bort.
- **Meningen "vi skriver aldrig 'vi testade' om en granskning".** Det är regeln elva andra sidor lutar sig mot.
- **Exemplet med 48 mot 46 dBA.** Ett konkret exempel gör policyn kontrollerbar.
- **Meningen "och vi lånar inte ett värde från en systermodell".** Den står i direkt spänning med Wood's-granskningen, som publicerar systermodellens ljudsiffra som indikation. Läs båda sidorna tillsammans innan du skriver om något av det; formuleringen "vi lånar inte" gäller tabellvärden, och det måste fortsätta framgå.
- **Greenspan 1977 och de 75,3 procenten**, som luftfuktighetssidans saltprov bygger på.
- **De fem punkterna under "Vad som kommer att mätas".** Fem in, fem ut, och gipspluggspunkten hör dit trots att den ligger utanför fuktklustret.
- **Sista meningen: "Mätvärden som saknas i en tabell står tomma. Vi fyller inte i dem på känsla."** Den är källan till den tomma ljudraden i Wood's-granskningen och till alla "ej angivet" i klustret.

---

## Granskning efteråt

Jag läser varje färdig sida mot sitt avsnitt här och svarar med en lista över konkreta ändringar med rubrik eller rad som referens, eller med "Godkänd av SEO". De sex frågorna jag granskar mot står i min rolldefinition. Utöver dem kontrollerar jag den här omgången särskilt:

1. Att ingen av de elva sidorna har tagit en annan sidas huvudfras.
2. Att inga två titlar delar sina tre första ord.
3. Att alla femton alt-texter ligger under 125 tecken.
4. Att `kortSvar`, `omdome`, `kopOm` och `kopInteOm` fortfarande svarar i första skärmen i stället för att introducera.
5. Att varje ankartext som andra sidor bygger på fortfarande motsvaras av innehåll på sidan.
6. Att `npm run kontrollera` inte varnar för en enda sida utan inlänk.
