# Startlista 6, omgång F, fukt och grund: ordning, länkar och gränser, 2026-10-07

Omgång F i startlista 6 (`docs/SOKORDSANALYS.md` 12.7) ska **publiceras senast 31 mars**, samlat. Det är den sista omgången i startlistan. Den består av en ny sida och fyra utbyggnader, varav tre ligger i pelaren Grund. Inget verktyg är nytt. Checklistorna per sida ligger i samma mapp:

| # | Fil | Adress | Sidtyp | Volym | Vinn | Väntar på |
|---|---|---|---|---|---|---|
| F1 | `draneringsror.md` | `/grund/draneringsror/` | kunskap med köpråd, ny | 3 660 | 4 | affiliate D1 (kort för rör och brunn, troligen nej) |
| F2 | `dranera-hus-utbyggnad.md` | `/grund/dranera-hus/` | projektguide, två nya H2 | 2 710 | 3 | faktablad |
| F3 | `fukt-i-kallaren-utbyggnad.md` | `/fukt/fukt-i-kallaren/` | problemguide, två nya H2 och ett namnbyte | 2 210 | 3 | faktablad |
| F4 | `isolera-krypgrund-utbyggnad.md` | `/grund/isolera-krypgrund/` | projektguide, en ny H2 | 1 110 | 3 | faktablad |
| F5 | `avfuktare-garage-utbyggnad.md` | `/fukt/avfuktare-garage/` | köpguide, en ny H2 och ett namnbyte | 740 | 3 | affiliate läser om priserna |

Summa 10 430 i månaden. SERP-underlaget för F1 och F2 lästes 2026-10-07 (block K och L). För F3 till F5 lästes ingen ny SERP, eftersom fraserna hör till sidornas befintliga avsikt. Title räknas utan suffix.

## 1. Regler för utbyggnaderna

- **Hantverkaren skriver inte om sidan i övrigt.** Bara de H2 som checklistan anger läggs till. Namnbyten görs bara där checklistan säger det, och en mening med länk får läggas till där det står. Allt annat står ordagrant kvar: tabeller, Faq, kort, räknare och reklamband.
- **Title, description och H1 ändras inte på de publicerade sidorna**, eftersom en ändrad title kostar en omindexering. Titelregeln från omgång E (inte formen "Ämne, A och B", inget "Se …") gäller bara F1.
- **`uppdaterad` sätts till publiceringsdagen** på alla fyra utbyggnaderna, så att `dateModified` stämmer.
- **Samma mål länkas inte två gånger i samma H2.** Hantverkaren kontrollerar först vilka länkar de befintliga H2:erna redan har efter omgång C, D och E.

## 2. Ordningen och länkarna

1. **F1 och F3** skrivs först. Checklistorna är klara.
2. **F2** skrivs samtidigt med F1 eller direkt efter. De delar på rör och arbete, och talen ska vara desamma (110 mm, makadam 8 till 16, Isodräns besked om duken).
3. **F4 och F5** skrivs när deras faktablad finns.
4. Allt publiceras samlat när alla fem är godkända.

**Inlänkar som läggs i samma commit:**

| Fil | Var | Länk till | Ankare, förslag |
|---|---|---|---|
| `src/content/guider/grund/dranera-hus.mdx` | H2 "Röret, stenen och duken": "Röret finns i flera grovlekar" | `/grund/draneringsror/` | "Röret finns i flera grovlekar" eller "rörtyperna" |
| `src/content/guider/grund/dranera-hus.mdx` | rad 171: att ingen källa säger var brunnarna ska sitta (meningen ändras om F1:s faktablad hittar en källa) | `/grund/draneringsror/` | "brunnarna" (bara om den inte står i samma H2 som länken ovan) |
| `src/pages/rakna/dranering.astro` | Läs vidare | `/grund/draneringsror/` | UX väljer ankaret (koden, räknas inte som innehållsfil) |
| `src/content/guider/fukt/fukt-i-kallaren.mdx` | H2 "Prislappen på varje orsak" | `/grund/draneringsror/` | "dräneringsrör" eller "materialet till dräneringen" |
| `src/content/guider/fukt/mogel-i-huset.mdx` | källarraden i platstabellen | `/fukt/fukt-i-kallaren/` (finns redan) | ankaret byts till "mögel och fukt i källaren" |
| `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | H2 "Normal luftfuktighet inomhus, rum för rum", källarraden | `/fukt/fukt-i-kallaren/` | "luftfuktigheten i källaren" |
| `src/content/kategorier/luftavfuktare.md` | Så väljer du, där garaget länkas | `/fukt/avfuktare-garage/` (finns redan) | ankaret eller meningen utvidgas till förråd och sommarstuga |

F1 är den enda nya sidan. Den ska ha minst två inlänkar från innehållsfiler (dranera-hus och fukt i källaren). Utbyggnaderna har redan inlänkar.

## 3. Kannibaliseringsgränser

- **F1 mot F2:** F1 äger materialet, alltså rörtyperna, strumpan efter jordart, brunnarna och materialpriset. F2 äger arbetet: schakt, djup, fall, makadam, duk, fuktskyddet mot muren, var vattnet tar vägen, grundtyperna och hur länge dräneringen håller. **"isodränskivor" (40) flyttas från F1 till F2**, eftersom F2 redan har jämförelsen mellan Isodrän och noppmatta. Registret i SOKORDSANALYS 12.4 är ändrat. Inget tal får skilja sig mellan F1 och F2.
- **F2 mot krypgrundssidorna:** krypgrunden får en rad i grundtyptabellen med länk. Fukten ägs av `/fukt/fukt-i-krypgrund/` och isoleringen av F4.
- **F3 mot omgång C:** symptomen, mögeltestet och saneringen i allmänhet ägs av `/fukt/mogel-i-huset/`. Arten ägs av `/fukt/svartmogel/` och lukten i allmänhet av `/fukt/mogellukt/`. F3 har bara det som gäller källaren. Luftfuktigheten följer klustrets tal i `fukt-gemensamma-tal.md` 2.3, och tabellen per rum står kvar på `/fukt/luftfuktighet-inomhus/`.
- **F3 mot E5:** betongens RF ägs av `/fukt/fuktmatning-betong/`.
- **F4 mot torpargrunden och krypgrunden:** när grunden är för låg för att arbeta underifrån länkas `/fukt/torpargrund/`. Fukten ägs av `/fukt/fukt-i-krypgrund/`.
- **F5 mot jordkällaren:** ingen annan sida äger jordkällaren. F5 tar den, men säger att den ska vara fuktig och att avfuktaren är undantaget.

## 4. Vad var och en behöver veta

### Hantverkaren

- Utbyggnaderna är kirurgi, inte omskrivning. Avsnitt 1 gäller.
- F1 och F2 bygger på tillverkarnas läggningsanvisningar (Pipelife, Uponor, Wavin, Isodrän) och, om den går att läsa, AMA Anläggning. Firmornas tal för livslängd och pris per meter går inte ihop, och de står bara som firmans uppgift, med årtal.
- F3:s mögelavsnitt använder mögelbladet från omgång C (Folkhälsomyndigheten och TräGuiden).
- F5:s jordkällare kräver en källa av rang för klimatet. Utan en sådan står inga tal.
- Ingen sida säger test, testad eller mätt om något vi gjort.

### Affiliate

- **D1:** kort för dräneringsrör och brunnar på F1. Underlaget hittade inte Proffsmagasinet i SERP:en, och priserna ligger under ordervärdesgränsen. Blir det nej står priserna i en tabell med butik och datum, utan kort och utan band.
- **F5:** priser och lager läses om, och korten står kvar som de är. Inga nya kort i den nya H2:n.

### UX och bygge

- **F1 behöver en skiss**, rekommenderad men inte blockerande: röret i makadambädd, tre rörtyper och husets hörn med brunnar.
- **`/rakna/dranering/`** får en länk till F1 i Läs vidare. Om räknaren kan ta ett förval för materialet är det ett plus.
- Inga andra kodändringar.

## 5. Efter publiceringen

- **Dag 12 i indexeringsplanen** begärs av Christian i den här ordningen: `/grund/draneringsror/` (topp i april), `/grund/dranera-hus/`, `/fukt/fukt-i-kallaren/`, `/grund/isolera-krypgrund/`, `/fukt/avfuktare-garage/`, `/grund/` och `/fukt/`. De två sista är hubbar som begärs om.
- **Startlista 6 är klar efter F.** Startlista 7 skrivs när Search Console har två månaders data för omgång A till E.
