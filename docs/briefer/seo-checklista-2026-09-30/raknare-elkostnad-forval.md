# SEO-checklista, /rakna/elkostnad/, förval per maskin, startlista 6 omgång B, 2026-09-30

Omgång B i startlista 6 (`docs/SOKORDSANALYS.md` 12.6 och 12.7, rad B0), deadline **30 november**. Det här gäller räknaren, och den byggs **först i omgången**, eftersom luftfuktaren, vinden och senare radonsugen och tvättstugan länkar dit. UX specar och bygger förvalen parallellt (`docs/INNEHALLSARKITEKTUR.md` avsnitt 9, UX punkt 3). Den här checklistan säger vad sökningen kräver av sidan, inte hur den byggs.

Underlaget är underlagsarbetarens SERP-läsning 2026-09-30 ("hur mycket el drar en avfuktare", "elförbrukning avfuktare"). Sökverktyget svarar från USA. Title räknas utan suffix.

---

## /rakna/elkostnad/

### 1. Adress och sidtyp

`/rakna/elkostnad/` · `src/pages/rakna/elkostnad.astro` och `src/lib/kalkyl/elkostnad.ts` · räknare, `WebApplication`, `pelare: ['el', 'fukt']`. Adressen ändras inte.

### 2. Huvudfras och sidofraser

**Huvudfras: elkostnad avfuktare**, med **hur mycket el drar en avfuktare** (30) och **elförbrukning avfuktare** (20), totalt cirka 70 per månad. Sökorden är små, men räknaren bär länkar från fem sidor. Vinnbarhet 4: topp 3 är butikernas kunskapsbanker utan kronor, elpris eller villkor.

Sidofraser: **sorptionsavfuktare elförbrukning** och **krypgrundsavfuktare elförbrukning** (10 vardera) i förvalens namn eller i en tabell, och **avfuktare eller torktumlare** (10, ägs av `/fukt/avfuktare-tvattstuga/` i omgång D) som tvättläge.

### 3. Title

Nuvarande: "Vad kostar maskinen i el per månad och år" (konstanten `titel`, 42). Avfuktaren står inte i den.

Krav: **högst 44 tecken**, med "el" och "avfuktare". Räknaren räknar också golvvärme och andra maskiner, och det ska stå i description och i förvalen, inte i title. Förslag: "Vad drar avfuktaren i el per år?" (32) eller "Elkostnad för avfuktaren, räkna per år" (38). UX avgör vilken variabel som bär title, och `VERKTYGSNAMN` i registret kan stå kvar.

### 4. Description

Krav: 120 till 155 tecken, avfuktaren och elpriset i första meningen, och att det finns förval för källare, krypgrund, vind och tvätt.

### 5. Förvalen, vad sökningen kräver

Förvalen ska vara **delbara adresser** (samma nycklar som i dag: effekt, timmar, dagar, elpris, liter och typ), så att sidorna kan länka till dem med `?…` och `<Kalkylator namn="elkostnad" forval="…">`. Canonical ska vara adressen utan query, som för daggpunkten.

| Förval | Används av | Källa till effekten |
|---|---|---|
| Avfuktare i källaren (kondens) | `/fukt/avfuktare-kallare/`, `/luftavfuktare/` | Tillverkarens datablad, samma maskin som i köpguiden |
| Avfuktare i krypgrunden (sorption) | `/fukt/avfuktare-krypgrund/` | samma |
| Avfuktare på vinden (sorption) | `/fukt/avfuktare-vind/` (B4) | affiliates underlag för vinden |
| Avfuktare i garaget | `/fukt/avfuktare-garage/` | samma som köpguiden |
| Luftfuktare | `/fukt/lag-luftfuktighet/` (B1) | tillverkarens datablad per typ (ultraljud, förångning, ånga) |
| Radonsug | `/fukt/radonsug/` (omgång E) | fläkttillverkarens datablad |
| Tvätt, avfuktare mot torktumlare | `/fukt/avfuktare-tvattstuga/` (omgång D) | Energimyndighetens test 2017-12-11: 0,23 kWh per kg tvätt för värmepumpstumlaren och 0,32 för luftavfuktaren (SOKORDSANALYS 12.3), läst i original |

### 6. Innehållet under formuläret

- **Tabell över effekt, kWh per dygn och kr per år per typ** (kondens, sorption, luftfuktare), med tillverkarens villkor (°C, RF) och elpriset med källa och datum (SCB, samma som fuktslukarsidan). Den besvarar "hur mycket el drar en avfuktare" i klartext, och ingen konkurrent har den.
- **Villkoret förklarat i två meningar**: märkeffekten gäller vid tillverkarens provklimat, och i en kall källare ger samma watt färre liter. Länk till `/fukt/sorptionsavfuktare/`.
- **Faq**: frågan "Drar en avfuktare mycket el?" finns redan. Den svarar med tal ur tabellen.

### 7. Längd

Ingen ändring utöver tabellen och förvalen. Räknaren ska inte bli en artikel.

### 8. Bilder

Delningsbilden och förhandsvisningsbilden följer räknarmallen. Inga nya.

### 9. Interna länkar

**Ut:** `/fukt/sorptionsavfuktare/` och `/luftavfuktare/` finns redan eller läggs till. **In** med förval: köpguiderna för källare, krypgrund, garage och vind, `/fukt/lag-luftfuktighet/` och `/rakna/avfuktare/` (resultatet visar kWh per år och länkar hit med förvalet ifyllt, 12.6).

### 10. Strukturerad data

`WebApplication` och `BreadcrumbList`. `FAQPage` med samma text som syns. Formen ändras inte.

### 11. Ettan och Bättre än ettan

**Ettan (2026-09-30):** polarpumpen.se, "hur mycket el drar en avfuktare" (butik, inget datum, cirka 900 ord). Den har tillverkarnas kWh per år för egna maskiner och Energimyndighetens tvättal utan år, men inga watt, inget elpris, inga villkor och inga kronor. Optihus har räknare utan redovisad formel. Arida (Meaco) är den enda som anger villkoren.

**Bättre än ettan** (krav):

1. **Kronor per dygn, månad och år med formel och daterat elpris.**
2. **Förval per maskin och plats** med tillverkarens effekt och villkor.
3. **Tvättläget med Energimyndighetens test** med år och adress.

### 12. Fällor

- **"hur stor avfuktare"** ägs av `/rakna/avfuktare/`. Här räknas elen, inte storleken.
- **Golvvärmeförvalet** (typ=golvvarme) står kvar oförändrat.
- **Tal utan villkor** står inte i tabellen. Polarpumpens "upp till fem gånger" och Optihus drifttimmar utan källa upprepas inte.
