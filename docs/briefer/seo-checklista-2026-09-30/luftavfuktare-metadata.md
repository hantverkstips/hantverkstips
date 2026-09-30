# SEO-checklista, /luftavfuktare/, metadata och etiketter, startlista 6 omgång A, 2026-09-30

Den här checklistan hör till omgång A i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, "Utanför omgångarna, direkt"; 12.4 Avfuktare; 12.5). Kategorisidan byter huvudfras från "avfuktare bäst i test" (880) till det nakna ordet **"avfuktare"** (9 900), med **"luftavfuktare"** (5 400) som sidofras. Det här är en **utbyggnad av metadata och etiketter**, inte en omskrivning. Tabellen, specs, valen (produkterna), 15/10-gränsen och tillverkarens tal för DSC50FM står kvar. Adressen ändras inte.

Underlaget är SERP-läsningen i 12.3 ("avfuktare": sex butiker, en annons, en tunn sida och Wikipedia i topp 10), affiliatebeslutet `docs/briefer/affiliate-fukt-2026-09-30.md` (villkor 2 för hela klustret, och avsnittet "Vad som kräver Christian") och krysslaserns etiketter i `src/content/kategorier/krysslaser.md` som mönster. Sökverktyget svarar från USA, och ordningen i topp 5 är inte kontrollerad.

---

## /luftavfuktare/

### 1. Adress och sidtyp

`/luftavfuktare/` · `src/content/kategorier/luftavfuktare.md` · samling **kategorier**, etikett **Granskning**. Köpknappar och reklamband finns redan, och formen ändras inte.

### 2. Huvudfras och sidofraser

**Huvudfras: avfuktare, 9 900 per månad**, topp i september. Vinnbarheten är 2 på det nakna ordet, men sidan äger hela avsikten (samma resonemang som för krysslasern i avsnitt 11).

Sidofraser, med plats:

- **luftavfuktare** (5 400) i title och H1. H1 har det redan.
- **avfuktare bäst i test** (880), **luftavfuktare bäst i test** (720), **avfuktare test** (110) och **luftavfuktare test** (70). Sidan äger fraserna men får **inte** skriva "test" eller "bäst i test" i title, description, H1 eller rubriker (affiliate, granskning). Ordet får stå i brödtexten där sidan förklarar att den inte är ett test, som i dag.
- **avfuktare liten** (480), **tyst, lägenhet och sovrum** (150), **med slang och pump** (110), **vägghängd** (70) och **husvagn och båt** (200) samlas i ett stycke i "Så väljer du" (12.4 och 12.5), i naturlig svenska. De får inga egna H2.

### 3. Title

Nuvarande `seoTitle`: "Bästa luftavfuktaren, jämförd på datablad" (41).

Krav: **högst 44 tecken**. Titeln börjar med **"Avfuktare"** och innehåller "luftavfuktare". Den får inte innehålla "bäst" eller "test", och den får inte börja med "Avfuktare till", "Avfuktare i" eller "Avfuktare krypgrund" (12.8; köpguidernas början). Förslag: "Avfuktare och luftavfuktare jämförda" (36) eller "Avfuktare och luftavfuktare i en tabell" (39). Inget annat på sajten börjar med "Avfuktare och".

### 4. Description

Nuvarande: "Vilken luftavfuktare som är bäst enligt tillverkarnas egna siffror, tre jag står för och hur stor du behöver. Inga egna mätningar än." (135).

Krav: 120 till 155 tecken, **"avfuktare"** och "luftavfuktare" i första meningen, och temperaturen som det som avgör typen. Inget "bäst" och inget "test". Descriptionen får inte heller lova mätningar som inte kommer att göras. Förslag att mäta mot: "Avfuktare och luftavfuktare jämförda på tillverkarnas datablad. Temperaturen avgör om du ska ha kondens eller sorption, och tre maskiner jag pekar på." (150).

### 5. H1

Nuvarande: "Luftavfuktare jämförda på tillverkarnas egna siffror, och de tre jag pekar på". **Står kvar.** Den delar inte de tre första orden med den nya titeln.

### 6. Vad som ändras på sidan

1. **Etiketterna i `val`** skrivs om efter krysslaserns mönster: uppgiften, inte ett betyg. "Bäst totalt", "Bäst till kall källare" och "Bäst för pengarna" byts. Hantverkaren skriver etiketterna, affiliate granskar. I sak ska de säga ungefär "källare som håller 15 grader" (SW39FW), "kall källare under 10 grader" (EvoDry 6H 2.0) och "uppvärmd källare med golvbrunn" (MDK21). Förbjudet: "bäst", "premium", "budget", "för pengarna", "testvinnare". `forVem` får stå kvar om det stämmer med 15/10-gränsen.
2. **Samma etiketter står på två andra sidor** och byts i samma commit, annars säger sajten två saker om samma maskin:
   - `src/content/guider/fukt/avfuktare-kallare.mdx`, `val` rad 19, 22 och 25, och `<Produktkort … etikett=…>` rad 191, 250 och 267.
   - `src/content/guider/fukt/fukt-i-kallaren.mdx`, `<Produktkort … etikett="Bäst totalt">` rad 145.
3. **Löften om egna mätningar stryks.** Christian beslutade 2026-09-30 att vi inte köper produkter och inte testar själva, så sidan ska inte lova ett test som inte kommer. Det här är ingen stilfråga. Ett löfte om en mätning som inte kommer är en felaktig uppgift, och den skadar förtroendet hos läsare, hos Google och hos AI-svar. Följande ställen berörs:
   - `ingress`: "Tre val står jag för tills kammartestet vid 10 och 20 grader är gjort."
   - `description`: "Inga egna mätningar än."
   - "Så väljer du", sista stycket: "Tills jag mätt den själv ska du läsa …"
   - "Varifrån talen i tabellen kommer": "Bäst i test kan jag inte skriva om någon luftavfuktare förrän jag mätt dem".
   - Sista stycket, "Det som fattas är mätningen … När de är gjorda byts etiketten till Test". Stycket skrivs om till vad granskningen bygger på, eller stryks.

   Sakinnehållet står kvar: tabellen är tillverkarens uppgifter, villkoret står utskrivet, och sidan är en granskning.
4. **Ett stycke i "Så väljer du" för de små och särskilda maskinerna** (punkt 2): liten, tyst, för lägenhet eller sovrum, med slang och pump, vägghängd, och en mening om husvagn och båt. Tal bara ur datablad, och länkar till köpguiden där platsen har en.
5. **En mening med det nakna ordet högt upp.** "Så väljer du" börjar i dag med "Börja med temperaturen". Första stycket bör säga "avfuktare" eller "luftavfuktare" i klartext, att det är samma sak, och att temperaturen avgör typen (15/10-gränsen, T33 och T34 i `fukt-gemensamma-tal.md`). Det är stycket en AI lyfter på ordet.
6. **`uppdaterad`** sätts till publiceringsdagen.

### 7. Längd

Nuvarande längd är cirka 950 ord inklusive frontmatter. Målet är **800 till 1 200 ord brödtext**. Tabellen bär sidan, och texten ska inte växa mer än punkt 4 och 5 kräver.

### 8. Bilder

Inga nya. Produktbilderna följer feedens villkor (affiliate).

### 9. Interna länkar

Befintliga länkar står kvar: köpguiderna för källare, krypgrund och garage, granskningarna av SW39FW och EvoDry 6H 2.0, sorptionssidan, räknaren och pelaren. **Nya:**

- `/fukt/fuktslukare/` i stycket om de små maskinerna, för den som funderar på en burk i stället.
- `/fukt/avfuktare-vind/` **först i omgång B**, när sidan finns.
- `/rakna/elkostnad/` med förvalet för avfuktaren, när förvalen från omgång B finns.

### 10. Strukturerad data och komponenter

`ItemList` via kategorimallen och `BreadcrumbList`. Ingen `Product` med betyg, eftersom sidan är en granskning. Formen ändras inte.

### 11. Ettan och Bättre än ettan

**Ettan på "avfuktare" (12.3):** clasohlson.com, ett butikssortiment. Topp 5 är fyra butiker och Wikipedia. Ingen förklarar att samma maskin ger olika många liter vid 30 °C och 80 procent än vid 27 °C och 60 procent, och Wikipedia säger utan källa att kondensavfuktaren slutar fungera under 5 grader.

**Bättre än ettan** (krav; sidan har alla tre i dag och de får inte strykas):

1. **Kapaciteten med villkoret utskrivet** för varje maskin i tabellen.
2. **Temperaturgränsen 15 och 10 grader** med källorna bakom den (TräGuiden, Ljungby Fuktkontroll, Dantherm och tillverkarnas tal).
3. **Kilowattimmar per liter** räknat ur tillverkarens effekt och kapacitet vid samma villkor, och länken till räknaren.

### 12. Fällor och kannibalisering

- **"hur stor avfuktare"** ägs av `/rakna/avfuktare/`. Exemplet med 16 och 22 liter får stå med länk till räknaren, men ingen H2 heter "Hur stor avfuktare". Tabellen för 20 till 80 kvm står på köpguiden, inte här.
- **"avfuktare källare"**, **"avfuktare krypgrund"**, **"avfuktare garage"** och **"avfuktare vind"** ägs av köpguiderna. De står bara som länkankare, aldrig i title, H1 eller H2.
- **"sorptionsavfuktare"** och **"kondensavfuktare"** ägs av `/fukt/sorptionsavfuktare/`. Här förklaras typerna i två meningar med länk.
- **"elkostnad avfuktare"** ägs av `/rakna/elkostnad/`.
- **Inget "bäst", "test", "mätt" eller "jag testade"** i title, description, H1, rubriker eller etiketter.
- Etiketterna byts på alla tre sidor samtidigt (punkt 6.2).
