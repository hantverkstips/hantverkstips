# SEO-checklista, badrumsfläkt, startlista 6 omgång D, 2026-10-04

Omgång D i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad D2; 12.4 Luften inomhus), deadline **31 januari**. Ny köpguide med produktkort (affiliatebeslutet `docs/briefer/affiliate-fukt-2026-09-30.md` avsnitt 5). Sidan räknar först ut vilket flöde badrummet behöver i l/s, och sedan får bara de fläktar kort som enligt tillverkaren ger det flödet mot det tryck en kanal ger.

Underlaget är SERP-läsningen 2026-09-30 (SOKORDSANALYS 12.3, raderna "badrumsfläkt" och "kallras; kallrasskydd"). Sökverktyget svarar från USA. Title räknas utan suffix.

**Väntar på affiliate** (beställt parallellt, se fukt-6-D.md avsnitt 1):

- **A1.** Kravet på frånluftsflöde i badrum med källa. Det gäller både nya byggnader (BFS 2024:8 3 kap.) och befintliga (Folkhälsomyndigheten FoHMFS 2014:18 eller Boverkets handbok). Talet läggs i `fukt-gemensamma-tal.md` som nytt T-nummer och delas med D1.
- **A2.** Tryck- och flödeskurvor för de tre kandidaterna (Fresh Intellivent Sky, PAX Calima, PAX Levante 40) och för övriga sex från 1 500 kr, plus EAN.
- **A3.** Produkturvalet och korten. En fläkt får kort bara om flödet mot kanaltryck klarar kravet med marginal. Saknar PAX tryckkurva säger texten att flödet anges utan kanal.
- **A4.** Kategorin `badrumsflakt` i databasen med spec-nycklarna `flode_ls_fri`, `flode_ls_tryck`, `max_tryck_pa`, `ljud_dba_3m`, `effekt_w`, `fuktstyrning`, `kanal_mm`, `ip_klass` och `garanti_ar`.
- **A5.** Lagrummet för fast elanslutning, med Elsäkerhetsverket som källa: elsäkerhetslagen och vad en privatperson får göra själv.

Checklistan kan användas för skrivningen redan nu.

**Rättat 2026-10-04 efter D3:s faktablad (`docs/briefer/faktablad/kunskap-sjalvdrag.md`, S6, S20 och S42):** det finns inget krav på frånluft per rum i dag. BFS 2024:8 har bara kraven för hela bostaden, 0,35 l/s per m² och 4 l/s per person. Folkhälsomyndigheten har inga riktvärden för badrum (S6). Talen per rum, 10 l/s i badrum med öppningsbart fönster och 10 l/s med forcering till 30 l/s, eller 15 l/s, utan fönster, var allmänna råd till BBR 1994 till 2006 och är borttagna (S20). `/fukt/sjalvdrag/` skriver redan så, och D1 och D2 ska säga samma sak, och A1 hämtar inget nytt krav utan bekräftar läget. Där checklistan nedan säger "kravet på frånluft i badrum i l/s" gäller i stället: vad som gäller i dag med källa, att det saknas krav per rum, de historiska talen märkta som historiska och som det branschen fortfarande brukar räkna med (bara om en källa säger det), och SWESIAQ:s 15 till 30 minuter för imman på spegeln (S42) som provet läsaren gör själv. Punkt 6 H2 2 och 4 och punkt 11 krav 1 och 2 kan inte skrivas klart förrän A1 till A3 finns.

---

## /fukt/badrumsflakt/

### 1. Adress och sidtyp

`/fukt/badrumsflakt/` · `src/content/guider/fukt/badrumsflakt.mdx` · samling **guider**, `typ: kopguide`, `pelare: fukt`, `plats: badrum`, `niva: enkel`. `produkter:` enligt affiliates val. Reklambandet sätts av mallen ovanför första kortet.

Läsaren ska byta en gammal fläkt, eller har mögel och imma i badrummet, och undrar vilken fläkt som räcker, om en fuktstyrd är värd pengarna, om hon får byta själv och vad som är skillnaden mot en avfuktare.

### 2. Huvudfras och sidofraser

**Huvudfras: badrumsfläkt, 4 400 per månad** (−19 %), med topp i september till november. Sidan äger **6 920**. Vinnbarheten är 2 på ordet, eftersom topp 10 är butiker. Sidofraserna bär sidan.

Sidofraser, med plats:

- **kallrasskydd** (880, topp i november) i en egen H2: backspjället i fläktkanalen, med vad det kostar och när det behövs. Sidan skiljer det i en mening från kallras vid fönster och länkar till `/fukt/kallras/`.
- **badrumsfläkt fuktstyrd** (590, +83 %) i en H2.
- **ventilation badrum** (480) och **ventilation badrum regler** (70) i H2:n om flödet.
- **avfuktare badrum** (320) och **avfuktare badrum bäst i test** (50) i en H2. Svaret är fläkten och inte en avfuktare (12.5).
- **frånluft badrum** (70) och **luftfuktighet badrum** (20) i brödtexten under flödet.
- **ventilation badrum självdrag** (40) i en mening med länk till `/fukt/sjalvdrag/` (D3).

### 3. Title

Krav: **högst 44 tecken**, börjar med **"Badrumsfläkt"**, och säger flödet eller kravet. Förslag: "Badrumsfläkt, flödet badrummet behöver" (38). Ordet test får inte stå i title (affiliatebeslutet).

### 4. Description

Krav: 120 till 155 tecken. "badrumsfläkt" står i första meningen, tillsammans med kravet i l/s, fuktstyrning och kallrasskydd. Inget utropstecken.

### 5. H1

H1 är sidans löfte. Den delar inte de tre första orden med title.

### 6. H2-struktur

`kortSvar`, tre till fem meningar:

- vilket flöde ett badrum ska ha, i l/s med källa (A1)
- att fläktens flöde på kartongen gäller utan kanal, och att det som räknas är flödet mot kanalens tryck
- att en fuktstyrd fläkt startar själv när det fuktar upp
- att ett kallrasskydd stoppar kall luft bakvägen när fläkten står still
- att fast anslutning görs av ett elinstallationsföretag (A5)

Brödtexten:

1. **Så mycket luft ska badrummet ha ut** (bär "ventilation badrum", "regler", "frånluft badrum"). Kravet med paragraf och år, omräknat till m³/h för den som läser på kartongen. En tabell för små, mellan och stora badrum, märkt som egen räkning. Hygrometerprovet efter duschen med länk till `/fukt/hygrometer/`. Ingen konkurrent har l/s med källa.
2. **Flödet på kartongen och flödet i kanalen.** Fritt blåsande flöde mot flöde vid tryck: varför en lång eller smal kanal ger mindre luft, och hur läsaren läser tillverkarens kurva. Rubriken kan bära "badrumsfläkt" i naturlig form. *Väntar på A2.*
3. **Fuktstyrd badrumsfläkt** (bär "fuktstyrd"). Hygrostat, eftergångstid och grundflöde, och när den lönar sig. Bara med tillverkarnas uppgifter.
4. **Fläktarna jag pekar på** (köpguidens produktdel, korten). Varje kort har flöde vid tryck, ljud, effekt och kanalmått ur datablad. Den billigare står först när två är lika bra. *Väntar på A3.*
5. **Kallrasskydd i fläktkanalen** (bär "kallrasskydd"). Vad det gör, att det ingår i en del fläktar, pris med datum och var det sitter. Sidan skiljer det från kallras vid fönster med länk till `/fukt/kallras/`, som redan förklarar skillnaden på rad 128.
6. **Avfuktare i badrummet hjälper sällan** (bär "avfuktare badrum"). Varför fläkten är svaret, när en avfuktare kan vara ett tillfälligt komplement och vad den kostar i el (länk till `/rakna/elkostnad/`).
7. **Byta badrumsfläkten själv.** Vad en privatperson får göra enligt elsäkerhetslagen, och vad som kräver ett registrerat elinstallationsföretag (A5). Tätskiktet runt genomföringen i taket nämns i en mening med länk till `/badrum/tatskikt-badrum/`. Självdrag i badrummet: en mening med länk till D3.
8. **Faq**, två eller tre frågor som inte upprepar H2:orna, till exempel "Hur länge ska fläkten gå efter duschen?" och "Varför låter fläkten mer efter några år?". Svaren är ren text.

### 7. Längd

Målet är **1 800 till 2 500 ord** utöver korten. Topp 10 är butiker och butiksguider. Proffsmagasinets guide (2026-01-12) bygger på Trustpilot. Vi vinner på flödet och trycket.

### 8. Bilder

- **Huvudbild, rekommenderad:** ett badrum i genomskärning med fläkten i taket, kanalen genom bjälklaget till yttertaket, kallrasskyddet i kanalen och tilluften under dörren. Pennan pekar på kanalens längd och böjar som det som stryper flödet. `bildAlt` högst 125 tecken med "badrumsfläkt". Spec till UX.
- Produktbilderna kommer ur databasen.

### 9. Interna länkar

**Ut**, minst tre, högst en per H2:

- `/fukt/svartmogel-badrum/` (D1) i kortSvar eller H2 1.
- `/fukt/hygrometer/` i H2 1.
- `/fukt/kallras/` i H2 5.
- `/rakna/elkostnad/` i H2 6.
- `/fukt/sjalvdrag/` (D3) i H2 7.
- `/badrum/tatskikt-badrum/` i H2 7.
- `/fukt/luftfuktighet-inomhus/` i H2 1.

**In**, när omgången publiceras (fukt-6-D.md avsnitt 2):

- `/fukt/luftfuktighet-inomhus/` rad 159, "det är frånluftens jobb att ta topparna"
- `/fukt/kallras/` rad 128, om kallrasskyddet
- `/fukt/svartmogel-badrum/` (D1)
- `/fukt/svartmogel/` rad 122, där ventilationen nämns

### 10. Strukturerad data och komponenter

`Article` och `BreadcrumbList`, och `FAQPage` om Faq finns. Produktkorten och köpknapparna går via `/go/` med `rel="sponsored nofollow"`, och reklambandet står ovanför första länken. Inget Review och ingen rating. Ordet test står inte i title, rubriker eller etiketter.

### 11. Ettan och Bättre än ettan

**Ettan (2026-09-30):** ventilation.se (butik). Topp 5 är fyra butiker och Proffsmagasinets butiksguide från 2026-01-12, som bygger på Trustpilot. Ingen anger kravet på luftflöde i l/s med källa, bara m³/h. Butikerna skriver att fast anslutning görs av behörig, utan lagrum. På "kallrasskydd" visar Google bara butiker (backspjäll för 80 till 170 kr).

Det ettan har som vi måste behålla eller överträffa: produkter med pris och ett brett urval av typer (fuktstyrd, timer, med kallrasskydd).

**Bättre än ettan** (krav):

1. **Kravet på frånluft i l/s med källa**, omräknat till m³/h. *A1.*
2. **Flöde mot kanaltryck ur tillverkarens kurva** för varje fläkt med kort, och en förklaring av skillnaden mot fritt blåsande flöde. *A2 och A3.*
3. **Lagrummet för fast elanslutning** med Elsäkerhetsverket som källa. *A5.*
4. **Kallrasskyddet förklarat och skilt från kallras**, med pris och datum.

### 12. Fällor

- **Test, testad, testvinnare och bäst i test** står inte någonstans om oss. Proffsmagasinets kundbetyg är ingen källa för kvalitet.
- **Kallras vid fönster** ägs av `/fukt/kallras/`. Här står kallrasskyddet.
- **Mögel i badrummet** ägs av D1, och **fogarna** av `/badrum/fogar-badrum/`. Här finns bara länkar.
- **Självdrag och FTX** ägs av D3.
- **Ett kort för en fläkt som säljs för fast installation** står inte utan att samma avsnitt säger vem som får ansluta den.
- **Flödestal utan villkor** (tryck, kanal) står inte i korten.

---

## Kontroll efter skrivningen, 2026-10-04

SEO och GEO-agenten har läst `src/content/guider/fukt/badrumsflakt.mdx` (utkast) mot punkt 1 till 12. **Godkänd av SEO och GEO.** Inget i texten ska ändras. Publiceringen har villkor som gäller korten.

- **Metadata.** seoTitle "Badrumsfläkt, flödet badrummet behöver" (38 tecken) och description (154) är godkända. H1 "Badrummet behöver en fläkt som orkar trycka luften genom kanalen" delar inte de tre första orden med title.
- **Sidofraserna.** Varje fras bärs av en egen H2:
  - "ventilation badrum" och "regler": H2 1
  - "fuktstyrd": H2 3
  - "kallrasskydd": H2 4
  - "avfuktare badrum": den sista H2:n

  "frånluft badrum" och "luftfuktighet badrum" står i brödtexten.
- **Regelhistorien stämmer med rättelsen 2026-10-04.** Det finns inget krav per rum i dag. Talen 10 l/s med fönster och 15 l/s utan är det borttagna rådet från 1994 till 2006 i 1998 års lydelse, och branschens förslag från 2026 står med årtal. KortSvar säger det i klartext. Talen är T58 och T59 i det gemensamma faktabladet. D1 och D3 ska säga samma sak, se fukt-6-D.md avsnitt 6.
- **Kallrasskyddet godkänns som sakändring.** Fresh, Klimatfabriken och Pax avråder från skyddet i takkanal, och Pax kallar det skadligt i en kanal med självdrag. Sidan säger därför att skyddet hör hemma bakom en fläkt i ytterväggen. Frasen "kallrasskydd" (880) får fortfarande ett rakt svar på vad skyddet är, var det hör hemma och vad det kostar, med datum. Det är bättre än butikerna, som säljer skyddet utan att säga det. Bilden ritar takkanalen utan skydd.
- **Bättre än ettan 1 till 4 är uppfyllda:**
  1. Kravet är omformulerat efter rättelsen: läget i dag med källa, de historiska talen märkta som historiska, och spegelprovet med SWESIAQ.
  2. Ekodesigntabellen visar flödet vid 20 Pa för alla fabrikat hos Proffsmagasinet, och Freshs tryck- och flödeskurva står med. Ingen konkurrent har den.
  3. Elsäkerhetsverket citeras ordagrant om fast anslutning i våtrum.
  4. Kallrasskyddet skiljs från kallras, med länk och pris med datum.
- **Korten.** Bara de två Fresh-fläktar som enligt tillverkaren ger mer än 10 l/s vid 20 Pa har kort. Kortens etikett och forVem är konkreta, och sidan säger "har jag inte haft i händerna". Ordet test används inte om oss.
- **Länkarna ut** är fem: hygrometern, luftfuktighet inomhus, kallras, tätskiktet och elkostnaden. Kommentarerna för D1 och D3 ersätts när D publiceras. Faq-svaren har inga länkar.
- **Strukturerad data.** `Article`, `BreadcrumbList` och `FAQPage` med svar i ren text. Canonical sätts av bygget. Korten och köpknapparna går via `/go/` med `rel="sponsored nofollow"`, och reklambandet sätts av köpguidemallen. Det kontrolleras i bygget.

**Villkor för publicering:** de två produkterna `fresh-intellivent-p` och `fresh-intellivent-sky` ska finnas i databasen som bygget läser, med pris och lager lästa samma dag som publiceringen. Korten ska visa sina tre fakta. Om `kategori: badrumsflakt` ska sättas, eller om korten får sina fakta på annat sätt, avgör UX. Utan produkter i databasen publiceras inte sidan.
