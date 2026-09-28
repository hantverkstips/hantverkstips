# SEO-checklista, tre räknare, 2026-09-28

`/rakna/kontrollplan/`, `/rakna/grannemedgivande/` och `/rakna/fasadyta/`. Hantverkaren läser sitt avsnitt före skrivningen, UX och bygge-agenten läser punkt 1, 9 och 10 före specen, och SEO och GEO-agenten läser den färdiga sidan mot samma avsnitt efteråt (skillarna `ny-sida` och `nytt-verktyg`).

Så här läses checklistan:

- **Underlag:** SERP-läsningen `docs/briefer/serp-raknare-2026-09-28.md`, räknarunderlagen `docs/briefer/underlag-kalkyl-fasadyta-2026-09-28.md` och `docs/briefer/underlag-kalkyl-grannemedgivande-2026-09-28.md`, affiliatebeslutet `docs/briefer/affiliate-fasad-2026-09-28.md`, volymerna i `docs/data/keyword-stats-2026-09-20-sorterad.tsv`.
- **Ordningen i topp fem är osäker** för alla tre fraserna, eftersom sökverktyget svarar från USA. Domänerna och innehållet är lästa, ordningen är inte kontrollerad i webbläsare. Där en bedömning hänger på vem som är etta står det.
- **Title** räknas utan suffixet " · Hantverkstips". Suffixet läggs på vid 44 tecken eller kortare, så 44 är kravet om frasen tillåter.
- **Punkt 6** säger vad ett avsnitt ska svara på och vilken fras det bär, aldrig hur rubriken ska låta. Mallens fasta H2 ("Därför blev svaret så", "Gör inte det här", "Så räknar jag", "Läs vidare") ligger kvar, och de avsnitt som listas här kommer utöver dem.
- **Punkt 11** har två delar: det ettan har som vi måste ha, och listan **Bättre än ettan**. Varje punkt i den listan är ett krav, och sidan publiceras inte om en saknas (CLAUDE.md regel 8).
- **Sidofraser utan volym** är språkbruk ur autocomplete, inte uppmätt efterfrågan. De får inte tvingas in.

Tre saker gäller alla tre räknarna och upprepas inte per sida:

1. **Ingen produkt, inget reklamband.** Affiliatebeslutet gäller fasadyta; kontrollplan och grannemedgivande har inget att sälja.
2. **Resultatet ska ligga i adressen** som på alla räknare, med ett undantag: personuppgifter på grannemedgivandet (se den sidans punkt 10).
3. **En räknare utan värdartikel publiceras inte** (`nytt-verktyg`, Vad som stoppar). Värdartikeln står i punkt 9 för varje sida och ska ändras i samma omgång.

**En sak koordinatorn måste veta först.** Enligt Boverkets nyhet 2026-07-01 (lästa i SERP-läsningen) upphörde BBR och EKS samma dag, när PBL ändrades genom SFS 2026:712. Trappsidan och källarsidan har redan tagit hänsyn till det, men ordet BBR står i sex innehållsfiler (bland dem `fukt-i-kallaren`, `isolera-krypgrund`, `u-varde`, `luftfuktighet-inomhus`) och i räknarna `avfuktare`, `daggpunkt`, `kallare` och `trappa`. Det är inte den här checklistans uppgift, men `underlag` bör gå igenom dem och se att ingen anger BBR som gällande efter 1 juli 2026. Kontrollplanssidan får inte skrivas med "mot BBR" i en enda rad.

---

## /rakna/kontrollplan/

### 1. Adress och sidtyp

`/rakna/kontrollplan/` · `src/pages/rakna/kontrollplan.astro` · **generator** (inte kalkylator): läsaren väljer åtgärd och får kontrollpunkter med vad, hur, mot vad och vem, som utskrift eller PDF och delbar adress. Registret: `pelare: ['grund', 'altan']` (se punkt 9).

Intentionen är en mall att fylla i och lämna in. Läsaren har ett bygglov eller en anmälan och har fått beskedet att kommunen vill ha en kontrollplan. Frasen ska bli ett verktyg, inte en text: alla fem i topp är tomma mallar, och ingen tar hänsyn till åtgärden.

### 2. Huvudfras och sidofraser

**Huvudfras: kontrollplan mall, 320 per månad**, 0 procent på tre månader, −56 procent på ett år, låg konkurrens, toppmånad september. Vinnbarhet 5.

Sidofraser, med plats:

- **kontrollplan** (naken, volym okänd, autocomplete: "bygglov", "eldstad", "enligt pbl", "rivning", "exempel") — i H1.
- **kontrollplan exempel** (volym okänd) — i H2:n med ett ifyllt exempel.
- **kontrollplan eldstad** (volym okänd, autocomplete) — som eget val i formuläret och i en H3 eller en Faq-fråga.
- **kontrollplan altan** (10) — som val i formuläret om altanen är en tillbyggnad; ingen rubrik.
- **kontrollplan enligt PBL** (volym okänd) — i brödtexten där 10 kap. 6 § förklaras.

"kontrollplan mall gratis", "word", "pdf" och "excel" i autocomplete visar vad läsaren vill ha i handen. Description ska säga att den är gratis och finns som utskrift eller PDF, utan e-post.

### 3. Title

Nuvarande: ingen.

Krav: **högst 44 tecken**, börjar med "Kontrollplan", innehåller **mall** i de fyra första orden. Löftet ska säga att mallen anpassas efter åtgärden. Inget årtal i title (reglerna ändras; datumet hör hemma i description och i texten). Får inte dela de tre första orden med någon annan sida; ingen annan title börjar med "Kontrollplan".

### 4. Description

Krav: **120 till 155 tecken.** Frasen med. Ska lova: kontrollpunkter efter vad du bygger, gratis som utskrift eller PDF utan e-post, och att mallen följer reglerna från 1 juli 2026. Det sista är den enda aktuella skillnaden mot hela fältet och ska stå i snippeten.

### 5. H1

Krav: börjar med **kontrollplan** och säger vad verktyget gör för läsarens åtgärd. Delar inte de tre första orden med title.

### 6. H2-struktur

Utöver mallens fasta avsnitt:

0. **Kortsvaret** (`Faktaruta variant="kortsvar"`): tre till fem meningar som går att citera utan resten av sidan. Vad en kontrollplan är, att byggherren ska ha den enligt 10 kap. 6 § PBL, de fyra saker den ska innehålla, och att den sedan 1 juli 2026 också ska ha en plan för avfall. Det är stycket en AI lyfter.
1. **Vad kontrollplanen ska innehålla.** 10 kap. 6 § i lydelse Lag (2026:712), de fyra punkterna, med lagrum i texten. **Bär kontrollplan enligt PBL.**
2. **Vad som ändrades 1 juli 2026.** Planen delas i kontroll och avfall (8 a §), kontrollansvarig får inte kontrollera det den själv projekterat, byggbedömare, obligatorisk sakkunnigkontroll, BBR och EKS upphörde. Med datum och källa i löptexten. Det här avsnittet är sidans största försprång; det ska ha en egen H2, inte en rad.
3. **Ett ifyllt exempel**, med tabell: kolumnerna vad, hur, mot vad, vem, verifikat, signatur och datum. Rubrikrad och enhet. **Bär kontrollplan exempel.** Tabellen plockas rakt av av AI-svar.
4. **När ingen kontrollplan behövs.** 6 a § (nämnden får besluta att den inte behövs för enklare åtgärder), och 8 a § om när avfallsplanen uppenbart inte behövs. Frågan står kvar hos läsaren efter hela topp fem.
5. **Egenkontroll eller sakkunnig.** 8 §. Vad du får kontrollera själv och när det ska vara en certifierad sakkunnig. Kan vara H3 under 1.

Faq: tre till fem frågor som inte dubblerar avsnitten, till exempel vem som skriver under, om Västerås eller min egen kommuns mall gäller, och vad som händer om en kontroll inte görs.

### 7. Längd

Mål **1 000 till 1 300 ord** plus Faq. Topp fem är tomma dokument utan brödtext, så längden motiveras av avsnitt 2 och 4, inte av konkurrenterna. Västerås html-sida, bäst i fältet, är kortare än så. Längre än 1 300 ord skymmer verktyget.

### 8. Bilder

- **Skissen** (`src/assets/illustrationer-kallor/rakna/kontrollplan.svg`): alt under 125 tecken, beskrivande, med ordet kontrollplan. Exempel på innehåll: ett protokoll med kolumnerna vad, hur, mot vad och vem och en signaturrad. Måtten och lagrummen i bildtexten.
- **Varumärkesbilden**: tom alt.
- Delningsbilden `public/og/rakna-kontrollplan.png` genereras.

### 9. Interna länkar

**Värdartikel: `/grund/inreda-kallare/`.** `<Kalkylator namn="kontrollplan" />` i H2:n "Källare till bostad, lov, anmälan och vägen ut i en brand", direkt efter stycket om att en anmälningspliktig åtgärd inte får påbörjas före startbesked. Där har läsaren just fått veta varför hen behöver planen. Skälet till valet: det är den enda publicerade sidan där läsaren står inför en anmälan (bärande delar, ventilation, vatten och avlopp) och där kontrollplanen är nästa steg. Stycket i samma H2 som säger att listan ändrades 1 december 2025 ska samtidigt få veta att kontrollreglerna ändrades 1 juli 2026.

**Andra inlänkar**, båda krav:

- `/altan/bygglov-altan/`: `<Verktygskort kalkylator="kontrollplan" />` i H2:n "Sätter du tak på altanen blir den en tillbyggnad". Sidan har i dag ingen `Verktygskort`, bara `<Kalkylator namn="bygglov-altan" />`, så kortet ryms (ett per sida). Grannemedgivandet bäddas in på samma sida som Kalkylator, se nästa avsnitt.
- `/rakna/bygglov-altan/`: länk i utfallet när altanen kräver lov.

**Ut**, minst tre: `/rakna/bygglov-altan/`, `/altan/bygglov-altan/`, `/grund/inreda-kallare/`, `/rakna/grannemedgivande/`. Extern länk till Boverkets sida om kontrollplanens innehåll i H2 1 är tillåten enligt skillen avsnitt 4 (läsaren ska läsa myndighetens text), en gång, också i `kallor`.

**Beslut som bör tas senare:** en egen kunskapssida om lov, anmälan och startbesked blir den naturliga värden när den finns. Inreda källare bär verktyget tills dess.

### 10. Strukturerad data och komponenter

`WebApplication` via `verktyg()`, `BreadcrumbList` Hantverkstips / Räkna själv / namnet. `FAQPage` bara om Faq finns, med samma text som syns. Ingen `HowTo`. Utskriften eller PDF:en får inte ha annan text än den som syns på sidan.

### 11. Ettan och Bättre än ettan

Topp fem: hagfors.se (PDF, 2016, 404 vid läsning), hallstahammar.se (PDF 2022), degerfors.se (PDF 2021), skelleftea.se (html och ifyllbar PDF, uppdaterad 2026-06-16), vasteras.se (html med .docx, 26 mallar, före och från 1 juli 2026). **Vilken som är etta är osäkert**; SOKORDSANALYS 7.2 har en naken .docx från Västerås som etta, den här läsningen Hagfors.

Det ettan har som vi måste ha:

- Kolumnerna vad, hur, mot vad, vem och signatur, som alla kommunmallar har.
- Något att ladda ner eller skriva ut, i ett format man kan lämna in.
- Kontrollpunkter för de vanliga delarna: grund, stomme, fukt, våtrum, ventilation, brand, energi.
- Västerås uppdelning före och efter 1 juli 2026.

**Bättre än ettan** (krav):

1. **Val av åtgärd ger färdiga kontrollpunkter** för just den åtgärden: tillbyggnad, komplementbyggnad, eldstad, ändrad planlösning med bärande vägg, våtrum och rivning som minst. Ingen i topp fem gör det.
2. **Avfallsplanen enligt 10 kap. 8 a §** som egen del i utdatat, med en ruta för när den uppenbart inte behövs. Ingen kommunmall nämner den.
3. **Lagrummet med lydelse och datum synligt**: 10 kap. 6 § PBL i lydelse Lag (2026:712), och att BBR och EKS upphörde 1 juli 2026. "Mot vad" i mallen hänvisar till gällande regler, inte BBR. Degerfors och Hallstahammar hänvisar till upphävda regler.
4. **Egenkontroll eller sakkunnig per punkt** enligt 8 §, i en kolumn.
5. **Gratis, utan e-post**, som utskrift och delbar adress. bygglov.se, som är den enda andra generatorn, kräver e-post och har inga kolumner för metod eller verifikat.

### 12. Fällor

- **BBR får inte stå som gällande** någonstans, inte heller i formulärets hjälptexter. BFS-beteckningen på de nya reglerna är inte verifierad; står den inte bekräftad skrivs "Boverkets byggregler från 1 juli 2026" utan nummer.
- **Västerås "BBR ändrades 1 juli 2025"** är troligen fel på deras sida. Citera den inte.
- **Kontrollansvarig** och **byggbedömare** förklaras första gången de står.
- Ingen SERP-analys i publik text ("ingen kommun har …"). Att andra mallar hänvisar till upphävda regler sägs som råd till läsaren, utan att namnge kommunerna.
- Kortsvaret och Faq ska inte vara samma meningar.

---

## /rakna/grannemedgivande/

### 1. Adress och sidtyp

`/rakna/grannemedgivande/` · `src/pages/rakna/grannemedgivande.astro` · **generator** med tre utfall: medgivande krävs, krävs inte, eller bygglov oavsett. När det krävs: ett medgivande att skriva ut och ge grannen. Registret: `pelare: ['altan']`.

Intentionen är att få ett papper grannen kan skriva under, och att veta om man alls behöver det. En räknare, inte en text: topp fem har ingen blankett utan e-post, och ingen säger när medgivandet inte behövs.

### 2. Huvudfras och sidofraser

**Huvudfras: grannemedgivande, 210 per månad, +55 procent på ett år**, låg konkurrens, toppmånad mars. **Äger också grannemedgivande mall, 210**, −47 procent. Samma intention, två SERP:ar: utan "mall" kommunsidor, med "mall" blankettsajter. En sida tar båda.

Sidofraser, med plats:

- **grannemedgivande mall** (210) — i title eller H1.
- **grannemedgivande blankett** (volym okänd, autocomplete) — i description.
- **grannemedgivande altan** och **grannemedgivande staket** (volym okänd, autocomplete) — som val i formuläret och i H2:n om vilka åtgärder som omfattas.
- **4,5 meter från tomtgränsen** (volym okänd) — i kortsvaret och i H2:n om när det krävs.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Grannemedgivande**, och **mall** eller **blankett** med (mall är den mätta frasen). Löftet ska säga att det är gratis eller att läsaren först får veta om det behövs. Inget årtal.

### 4. Description

Krav: **120 till 155 tecken.** Ska lova: svar på om medgivande krävs, en blankett att skriva ut utan e-post, och reglerna sedan 1 december 2025. Ordet **blankett** med.

### 5. H1

Krav: börjar med grannemedgivande eller grannens medgivande, lovar svaret och pappret. Delar inte de tre första orden med title.

### 6. H2-struktur

0. **Kortsvaret**: när medgivande krävs (lovfri åtgärd närmare gränsen än 4,5 meter, 9 kap. 34 och 35 §§ PBL), att det sedan 1 december 2025 måste vara skriftligt, att alla ägare ska skriva under, och att huvudmannen skriver under mot gata eller park. Tre till fem meningar.
1. **Vilka åtgärder som kräver medgivande, och vilka som inte gör det.** Tabell med rubrikrad: åtgärd, medgivande, lagrum. Komplementbyggnad, komplementbostadshus, tillbyggnad, mur och plank över 1,2 meter, altan utan tak, staket. **Bär grannemedgivande altan och staket.**
2. **Vad som ändrades 1 december 2025.** SFS 2025:974, skriftlighetskravet, de nya begreppen med de gamla namnen (friggebod, attefallshus) inom parentes första gången, huvudmannen för allmän plats. Egen H2.
3. **Vem som räknas som granne.** Samägd fastighet, samfällighet, gata och park, järnväg.
4. **Vad medgivandet ska innehålla**, och **grannehörande är något annat**. Kan vara två H3.
5. **Om grannen säger nej**, och frågan om grannen kan ångra sig. Med båda källorna (propositionen och Boverket), utan att avgöra det som inte är avgjort.

Faq: tre till fem frågor som inte dubblerar avsnitten.

### 7. Längd

Mål **1 000 till 1 300 ord** plus Faq. Kommunsidorna är 300 till 600 ord; längden motiveras av tabellen och specialfallen, som ingen av dem har.

### 8. Bilder

- **Skissen**: alt under 125 tecken med ordet grannemedgivande eller tomtgränsen, till exempel en tomt med en komplementbyggnad närmare gränsen än 4,5 meter och grannens underskrift. Talet i bildtexten.
- Varumärkesbilden tom alt. Delningsbilden genereras.

### 9. Interna länkar

**Värdartikel: `/altan/bygglov-altan/`.** `<Kalkylator namn="grannemedgivande" />` i H2:n "Nära tomtgränsen räcker grannens ja", efter första stycket. Det är sidans naturliga plats, och läsaren har just fått veta att pappret behövs.

**Beslut som påverkar värdartikeln innan inbäddningen:** underlaget (`underlag-kalkyl-grannemedgivande-2026-09-28.md`, Att verifiera punkt 1) visar att lagen, propositionen och Boverkets kunskapsbank säger att en **altan utan tak inte kräver medgivande**, medan värdartikeln och `/rakna/bygglov-altan/` säger att Boverket vill att du hämtar ett. Två sidor på sajten får inte ge olika svar på samma fråga; det är det första en AI eller en läsare ser. Koordinatorn låter `underlag` avgöra, och värdartikelns H2, dess Faq och `gransRegel` i `bygglov-altan.ts` ändras i samma omgång som räknaren publiceras. Rubrikens påstående "räcker grannens ja" kan behöva ändras.

**Andra inlänkar**, krav: `/rakna/bygglov-altan/` i utfallet om avståndet till gränsen, och `/altan/bygga-altan/` om bygglovsavsnittet talar om gränsen (i dag `Verktygskort kalkylator="bygglov-altan"`, så en textlänk räcker).

**Ut**, minst tre: `/rakna/bygglov-altan/`, `/altan/bygglov-altan/`, `/rakna/kontrollplan/`. Extern länk till PBL på riksdagen.se eller Boverkets sida om utökad lovplikt nära gräns, en gång, också i `kallor`.

### 10. Strukturerad data och komponenter

`WebApplication`, `BreadcrumbList`, `FAQPage` bara med riktig Faq. **Personuppgifter i adressen:** namn och fastighetsbeteckning får inte hamna i den delbara adressen (underlaget avsnitt 8). SEO-kravet är bara att resultatet, alltså åtgärd, avstånd och svar, ligger i adressen så att delningen fungerar; personfälten får skrivas ut tomma eller fyllas utan att lämna webbläsaren. UX och bygge väljer väg.

### 11. Ettan och Bättre än ettan

Topp fem på grannemedgivande: lund.se (2026-09-15), helsingborg.se (2025-12-01), skara.se, sandviken.se, attefallshus.se. På grannemedgivande mall: evolvebyggkonsult.se (PDF för 99 kr), bygglovstjanst.se (gratis PDF mot e-post), bygglo.com (kopierbar text, rätt lagrum), cdcab.se. Ordningen är osäker; **Lund** behandlas som etta.

Det ettan har som vi måste ha:

- Skriftlighetskravet och att alla ägare ska skriva under.
- Juridisk person och allmän plats som granne.
- Vad medgivandet ska innehålla.
- "Säger grannen nej, sök bygglov."

**Bättre än ettan** (krav):

1. **En blankett att skriva ut, gratis, utan e-post och utan inloggning.** Ingen kommun har en; de två blankettsajterna tar betalt eller vill ha e-post.
2. **Lagrummet och ändringen i klartext**: 9 kap. 34 och 35 §§ PBL, SFS 2025:974, i kraft 1 december 2025, och att skriftligheten är ny. Ingen av de fem kommunsidorna nämner ändringen med paragraf; attefallshus.se har upphävda paragrafer.
3. **Tre utfall** i stället för två: krävs, krävs inte (altan utan tak, staket, plank högst 1,2 m, exakt 4,5 m eller längre), och bygglov oavsett. Ingen i fältet säger när medgivandet är onödigt eller inte räcker.
4. **Specialfallen för vem som är granne**: samägd fastighet, samfällighet, gata, park, järnväg.
5. **Grannehörande mot grannemedgivande** i samma tabell.

### 12. Fällor

- Återkallelsen är inte avgjord efter 1 december 2025. Skriv inte att grannen inte kan ångra sig.
- Digital underskrift och BankID har ingen myndighetskälla. Lova inte att det godtas.
- De gamla begreppen får stå inom parentes men aldrig som gällande.
- Altanfrågan i punkt 9 måste vara avgjord före publicering, annars säger sajten emot sig själv.

---

## /rakna/fasadyta/

### 1. Adress och sidtyp

`/rakna/fasadyta/` · `src/pages/rakna/fasadyta.astro` · **kalkylator**: husets längd, bredd, höjd till takfot och takvinkel eller nockhöjd, takform, fönster och dörrar, panelprofil och färgtyp ger väggytan, den målade ytan, liter färg och burkar. Registret: `pelare: ['fasad']`. Verktyg 18 i `docs/VERKTYGSPLAN.md`.

### 2. Huvudfras och sidofraser, och ägarskapet

**Beslut, huvudfras: beräkna fasadyta. Volym okänd**, finns inte i någon export och ska med i nästa Keyword Planner-hämtning tillsammans med sidofraserna nedan. Valet bygger på autocomplete: "räkna fasadyta" kompletteras till "beräkna fasadyta", "beräkna yta fasad" och "beräkna fasadfärg", alltså skriver folk *beräkna*. "fasadyta" ensamt gav inga svenska träffar och ingen läst sida räknar gavelspetsar. Vinnbarhet 5 på det lilla, gissningsvis under 100 i månaden.

**Andra fras, som bär trafiken: hur mycket färg går det åt till ett hus** (volym okänd; autocomplete ger också "hur mycket färg behövs för att måla ett hus"). Ägs av räknaren, i H1 eller kortsvaret. Topp fem på den frasen är Flügger, Falu Rödfärg och Proffsmagasinets enkla räknare, ingen med gavlar eller avdrag.

**Ägarskapet mot grannarna**, så att ingen fras ägs av två sidor:

| Fras | Volym | Ägare | Varför |
|---|---|---|---|
| beräkna fasadyta, räkna fasadyta | okänd | `/rakna/fasadyta/` | Räkneuppgift på huset |
| hur mycket färg går det åt till ett hus, hur mycket färg behövs till fasaden | okänd | `/rakna/fasadyta/` | Svaret kräver fasadytan först |
| hur många liter färg per kvm | 110 | `/rakna/kvadratmeter/` | Frågan är per kvadratmeter, ofta ett rum; autocomplete "behövs till 10, 15, 20 kvm" |
| färgåtgång per kvm | 40 | `/rakna/kvadratmeter/` | Som ovan |
| räkna ut kvadratmeter | 2 400 | `/rakna/kvadratmeter/` | Oförändrat |
| måla om huset kostnad, måla fasad kostnad | 590, 170 | `/fasad/mala-om-huset/` | Oförändrat; kostnadsfrågan är guidens |
| måla ute temperatur, måla fasad temperatur | 140, 140 | `/rakna/mala-ute/` | Oförändrat |

Konsekvenser: `/rakna/kvadratmeter/` rörs inte. Guiden `/fasad/mala-om-huset/` behåller sin title och sin Faq-fråga "Hur mycket färg går det åt till en fasad?"; frågan är en Faq, inte en title, och den får stå kvar med svaret för ett typhus. Räknaren får inte leda title med "måla om huset" eller "kostnad".

Sidofraser, med plats:

- **gavelspets** eller **gavel** (volym okänd) — i H2:n om hur ytan räknas.
- **lockpanel** (volym okänd) — i H2:n om den målade ytan mot väggytan.
- **hur många liter fasadfärg** (volym okänd) — i kortsvaret.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Beräkna fasadyta**, och löftet om färgen (liter eller burkar) i andra halvan. Får inte börja med "Beräkna U-värde" (`/rakna/u-varde/`); de delar bara första ordet, vilket är tillåtet. Inget årtal.

### 4. Description

Krav: **120 till 155 tecken.** Ska lova: fasadytan ur husets mått med gavlarna och fönstren avdragna, liter och burkar per färgtyp. Frasen "hur mycket färg" gärna i naturlig form.

### 5. H1

Krav: läsarens fråga, gärna **hur mycket färg går det åt till huset** eller motsvarande, så att H1 bär andra frasen och title den första. Delar inte de tre första orden med title.

### 6. H2-struktur

0. **Kortsvaret**: ett typhus med tal. Guidens hus, 10 gånger 8 meter och 2,8 meter till takfoten, har 98 kvadratmeter fasad och tar 28 till 30 liter täckfärg för två strykningar med akrylat, 7 m² per liter (underlaget E2). Plus att lockpanel drar mer, om UX och bygge beslutar att räkna med det (K1). Tre till fem meningar.
1. **Hur fasadytan räknas**, med formeln per takform: sadeltak, pulpettak, valmat. **Bär beräkna fasadyta och gavelspets.** Formlerna i klartext, eftersom ingen konkurrent visar dem.
2. **Väggytan och den målade ytan.** Det målaren tar betalt för mot det färgen räcker till, lockpanelens kanter. **Bär lockpanel.** Beror på beslutet K1; se punkt 12.
3. **Liter per färgtyp och antal strykningar**, tabell med rubrikrad och enhet: akrylat, oljealkyd, slamfärg, silikat på puts; ommålning, nytt trä, kulörbyte. Källa per rad i löptexten.
4. **Tegel målas inte**, som besked och kort avsnitt med källa.

Faq: frågor om takfot och vindskivor, knutbrädor, sockel, hur många burkar till ett tvåplanshus.

### 7. Längd

Mål **900 till 1 200 ord** plus Faq. Fältet är produktsidor och korta färgguider; längden bärs av tabellen i avsnitt 3 och formlerna.

### 8. Bilder

- **Skissen**: alt under 125 tecken, till exempel ett hus i perspektiv med gavelspetsen skuggad och måtten längd, bredd, höjd till takfot och takvinkel utsatta. Nyckeltalet, fasadytan, i bildtexten.
- Varumärkesbilden tom alt. Delningsbilden genereras.

### 9. Interna länkar

**Värdartikel: `/fasad/mala-om-huset/`.** I H2:n "Fasadytan räknar du ut med omkrets, höjd och gavelspetsar" byts `<Verktygskort kalkylator="kvadratmeter" />` mot `<Kalkylator namn="fasadyta" />`, och stycket efter kortet ("Räknaren är byggd för rum … lägg till gavelspetsarna för hand") stryks, eftersom det inte längre stämmer. Metoden med fyra steg står kvar i guiden; det är den läsaren förstår talet genom.

**Andra inlänkar**, krav: `/fasad/tvatta-fasad/` (ytan avgör mängden tvättmedel och hur länge du håller på), `/fasad/valja-fasadfarg/` (sträckförmågan per färgtyp) och `/rakna/kvadratmeter/`, som ska få en rad i "Läs vidare" eller i resultatet för den som räknar en fasad i kvadratmeterräknaren. Se `fasad.md`.

**Ut**, minst tre: `/fasad/mala-om-huset/` (kostnaden, med samma kvadratmetertal), `/rakna/mala-ute/` (vädret), `/fasad/valja-fasadfarg/` (typen), `/rakna/rotavdrag/` om arbetskostnaden nämns.

### 10. Strukturerad data och komponenter

`WebApplication`, `BreadcrumbList`, `FAQPage` bara med riktig Faq. Inga produktkort, inget reklamband (affiliatebeslutet). Färgtypernas nycklar i adressen samma som `/rakna/mala-ute/` (`akrylat`, `oljealkyd`, `slamfarg`), så att räknarna kan länka till varandra med samma värde.

### 11. Ettan och Bättre än ettan

På **beräkna fasadyta** finns ingen riktig etta: kungsbacka.se (byggnadshöjd, annan intention), oncewall.se (produktsida utan räknare), rukkor.com, lovelyhome.se. På **hur mycket färg går det åt till ett hus** är proffsmagasinet.se den enda med räknare (2024-06-04, höjd gånger bredd, inga gavlar, inga avdrag, Beckers 6 m² per liter, 34 liter på 100 kvadratmeter). **Proffsmagasinet är återigen vår egen affiliatepartner**, som på räkna ut kvadratmeter; det är ett medvetet val, inte en överraskning.

Det ettan har som vi måste ha:

- Liter ur yta och sträckförmåga, med tillverkarens tal.
- Två strykningar som standard.
- Ett svar som går att köpa efter.

**Bättre än ettan** (krav):

1. **Gavelspetsarna ur takvinkel eller nockhöjd, per takform** (sadel, pulpet, valmat). Ingen läst sida räknar gavlarna.
2. **Avdrag för fönster och dörrar** med verkliga eller standardmått, samma som guiden (1,2 × 1,2 och 1,0 × 2,1).
3. **Liter per färgtyp och fall** (ommålning, nytt trä, kulörbyte, slamfärg) med tillverkarens namn i löptexten, och **omräknat till burkar**.
4. **Väggytan och den målade ytan som två tal**, om K1 beslutas så, så att läsaren kan jämföra målarens kvadratmeterpris och sin egen färgmängd.
5. **Samma tal som guiden** för samma hus: 98 kvadratmeter och tre burkar om 10 liter i det slätpanelade fallet. Guiden är facit i testet.

### 12. Fällor

- **K1, paneltillägget.** Med lockpanel ger räknaren fyra burkar där guiden säger tre. Två sidor på sajten får inte ge olika tal för samma hus utan att förklara varför. Antingen räknar verktyget slät panel som standard, eller så får guiden en mening om lockpanel i samma omgång. Beslutet är UX och byggs; kravet här är att talen stämmer.
- **Profilfaktorn 1,20 är egen räkning** utan tillverkarkälla. Den ska stå som min räkning i texten, aldrig som tillverkarens tal.
- **Ytterdörrens mått saknar källa** i både guide och underlag. Står som antagande i "Så räknar jag".
- Inga produktnamn som köprekommendation. Tillverkarnas namn står vid sina tal, inte som val.
- Ingen SERP-analys i publik text.
