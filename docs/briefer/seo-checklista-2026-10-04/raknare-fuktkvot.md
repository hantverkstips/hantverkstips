# SEO-checklista, /rakna/fuktkvot/, ny räknare, startlista 6 omgång C, 2026-10-04

Omgång C i startlista 6 (`docs/SOKORDSANALYS.md` 12.6 och 12.7, rad C0), deadline **20 december**. Räknaren byggs **först i omgången**, eftersom `/fukt/fuktkvot/` bäddar in den och `/fuktmatare/` och `/fukt/hussvamp/` länkar dit. UX specar och bygger (skillen `nytt-verktyg`, räknarmallen `docs/SPEC-SIDMALLAR.md` 4.7.0). Den här checklistan säger vad sökningen kräver av sidan, och vilket underlag som ska finnas innan specen skrivs. Den säger inte hur sidan byggs.

Underlaget är underlagsarbetarens SERP-läsning 2026-10-04, block A ("räkna ut fuktkvot", "fuktkvot formel", "jämviktsfuktkvot"). Sökverktyget svarar från USA. Title räknas utan suffix.

---

## /rakna/fuktkvot/

### 1. Adress och sidtyp

`/rakna/fuktkvot/` · `src/pages/rakna/fuktkvot.astro` och `src/lib/kalkyl/fuktkvot.ts` · räknare, `WebApplication`, `pelare: ['fukt']`, `sasong` september och oktober. Ny adress.

Läsaren har ett tal från en fuktmätare, eller en bit trä som hon har vägt före och efter torkning, eller en hygrometer i krypgrunden, och vill veta vad talet betyder för det hon ska göra: elda, måla, lägga golv, bygga in, eller om det riskerar att mögla.

### 2. Huvudfras och sidofraser

**Huvudfras: räkna ut fuktkvot.** Ingen av fraserna har data i exporterna ("fuktkvot trä formel", "fuktkvot och relativ fuktighet" och "jämviktsfuktkvot" är tomma eller saknas). Jag gissar under 10 per fras. Räknaren lever på inlänkar och på delade adresser, som elkostnaden. Vinnbarhet 4: ettan är en forumtråd, och ingen svensk räknare finns.

Sidofraser, med plats:

- **fuktkvot formel** i "Så räknar jag", med formeln utskriven.
- **jämviktsfuktkvot** i ett läge eller en etikett och i "Så räknar jag".
- **fuktkvot till fukthalt** (forumtråden som är etta på huvudfrasen) i ett läge eller en rad i resultatet.
- **fuktkvot och relativ fuktighet** (ingen data) i jämviktslägets etikett eller beskedet.

"fuktkvot trä" (110) ägs av `/fukt/fuktkvot/`, inte av räknaren. Registret 12.6 sa räknaren; det rättas i SOKORDSANALYS 12.7.

### 3. Title

Krav: **högst 44 tecken**, "fuktkvot" bland de tre första orden, och inte samma tre första ord som någon annan räknare. "Räkna ut trall", "Räkna ut hur" och "Räkna ut kvadratmeter" finns, så "Räkna ut fuktkvoten" är ledigt. Förslag: "Räkna ut fuktkvoten ur vikt eller luft" (38). Titeln får inte börja med "Fuktkvot i trä", som är kunskapssidans början. UX och hantverkaren väljer; jag godkänner.

### 4. Description

Krav: 120 till 155 tecken. Fuktkvoten och båda vägarna (vikt och luftens fuktighet) i första meningen, och att svaret säger vad talet betyder för ved, målning, golv, mögel och röta. Inget utropstecken.

### 5. Lägena, och vad underlaget ska ta fram före specen

**Tre lägen.** Varje läge har en delbar adress, och canonical är adressen utan query.

| Läge | Indata | Ut | Källa som krävs |
|---|---|---|---|
| Vikt | vikt före och efter torkning, g | fuktkvot och fukthalt, med torrviktsmetodens villkor | Definitionen u = (m_våt − m_torr) / m_torr × 100 (TräGuiden, Trä och fukt); torrviktsmetoden 103 ± 2 °C tills vikten är stabil (SS-EN 13183-1, via TräGuiden, Fuktkvot och mätning). Räkneexemplet 1 100 g före och 1 000 g efter ger 10 procent fuktkvot och 9,1 procent fukthalt (testfall) |
| Luft (jämvikt) | luftens RF och temperatur, eller ett rum ur förvalen | den fuktkvot träet går mot | **Modell med källa, hämtas nu**, se nedan |
| Fukthalt till fuktkvot | ett tal och vilket det är | det andra | u = w / (1 − w), w = u / (1 + u). Egen räkning ur definitionerna |

**Krav på räknarunderlaget** (`underlag`, `docs/briefer/underlag-kalkyl-fuktkvot-2026-10.md`, före UX:s spec):

1. **Jämviktsfuktkvoten ur RF och temperatur**, en namngiven modell med alla konstanter och sin källa. Förslag att läsa: Hailwood–Horrobin-ekvationen i USDA Forest Products Laboratory, *Wood Handbook* (FPL-GTR-282, 2021), kapitel 4, med temperaturpolynomen för W, K, K1 och K2. Läs ekvationen och konstanterna ordagrant i PDF:en, med sida och ekvationsnummer. Säg vilket temperatur- och RF-intervall modellen gäller för.
2. **Kontroll mot svenska tal.** Modellen ska jämföras med TräGuidens tabell 2 i Mikroorganismer vid 20 °C (75 → 15, 80 → 16, 85 → 18, 90 → 21, 95 → 24; T22 i `fukt-gemensamma-tal.md`) och med TräGuidens "konditionerat vid +20 °C och 65 % RF: gran och furu 12–13 %" (Fuktinnehåll och sorptionskurvor, uppdaterad 2026-07-01). Avvikelsen per punkt redovisas. Är den större än en procentenhet beslutar UX med mig om tabellen eller modellen ska styra; TräGuidens tabell väger tyngst i Sverige.
3. **Hysteresen** som osäkerhet: TräGuiden anger 1 till 4 procentenheter mellan uppfuktning och uttorkning vid 50 % RF. Beskedet ska säga att talet är ett ungefär.
4. **Gränserna för utfallen**, alla ur `fukt-gemensamma-tal.md` avsnitt 4 (T22 till T32), inga andra: ytfuktkvot högst 18 procent före inbyggnad och 16 procent före ytbehandling, målfuktkvot 8, 12 och 16 procent, röta liten risk under 20 och etablerar sig över 30, mögel som luftens RF 75 till 80 procent över tid (motsvarar ungefär 15 till 16 procent vid 20 °C).
5. **Ved:** myndighetens eller branschens gräns för eldning med källa (Energimyndigheten, Naturvårdsverket eller Skogsstyrelsen), och om den anges som fukthalt eller fuktkvot. Det är räknarens tredje läge som gör talet användbart.
6. **Förvalens klimat:** temperatur och RF per rum och årstid ur samma källor som daggpunktens förval (`src/lib/kalkyl/daggpunkt.ts`, `FORVAL_PER_RUM` och `NORMALT_PER_RUM`), plus TräGuidens ute sommar (65–75 % RF, 11–15 % fuktkvot) och vinter (90–95 %, 19–23 %) och inne (7,5 % medel, 2–6 vinter, 7–12 sommar) som kontrollpunkter för modellen.

### 6. Förvalen

Samma värden på `rum=` som i `/rakna/daggpunkt/`, så att platssidorna länkar båda räknarna med samma adressdel: `kallare`, `krypgrund`, `vind`, `garage`, `sovrum` (bostad), plus `arstid`. Ute sommar och ute vinter som egna förval om underlaget ger dem. Förvalen visas som chips (4.7.0).

| Förval | Länkas från |
|---|---|
| Krypgrund, sommar | `/fukt/fukt-i-krypgrund/`, `/fukt/hussvamp/` |
| Kallvind, vinter | `/fukt/fukt-pa-vinden/`, senare `/fukt/mogel-pa-vinden/` (E2) |
| Källare | `/fukt/fukt-i-kallaren/` |
| Garage | `/fukt/avfuktare-garage/` |
| Bostad, vinter och sommar | `/fukt/fuktkvot/`, `/fukt/luftfuktighet-inomhus/` (golv och lister) |
| Ved (viktläget eller fukthaltsläget) | `/fukt/fuktkvot/`, `/fuktmatare/` (valet "ved och virke") |

### 7. Svarsytan och innehållet under formuläret

- **Svarsytan utan query** (SEO-villkoret 2026-10-02): en mening i klartext med talet, villkoret och källan, renderad på servern. Till exempel i sak: trä i luft med 75 procents fuktighet vid 20 grader landar på ungefär 15 procent fuktkvot, enligt TräGuiden. Det är stycket en AI lyfter.
- **Beskedet per användning**, kort i resultatspalten (Christians regel: korta besked i spalten, förklaringen i brödtexten): ved, målning, inbyggnad, golv, mögel och röta, var och en med gräns och källa en gång under verktyget.
- **H2 "Så räknar jag"** med formlerna i ord, modellens namn och källa, och antagandetabellen med varje rad märkt Källa eller Antagande.
- **H2 "Gör inte det här"**: lita inte på ett enda mättal från en stiftmätare i kallt trä (temperaturen ändrar värdet; intervallet ur affiliatebeslutet, SP Trä PX21326 2012 och USDA 2021, i sak, inte som korrigering i räknaren); blanda inte ihop fukthalt och fuktkvot; jämviktstalet nås först efter veckor.
- **Tabell** över jämviktsfuktkvot vid 20 °C och fem RF-värden, och för ute sommar och vinter, med rubrikrad och enhet. Den besvarar "fuktkvot och relativ fuktighet" i klartext och plockas rakt av.

### 8. Bilder

Tre filer enligt räknarmallen: skissen (`src/assets/illustrationer/rakna/fuktkvot.svg`), varumärkesbilden och delningsbilden `public/og/rakna-fuktkvot.png`. Skissen visar en bräda med ytfuktkvot och kärna, eller trä som går mot luftens fukt; UX bestämmer. `og:image` får inte saknas.

### 9. Interna länkar

**Ut**, i "Läs vidare" och i resonemanget: `/fukt/fuktkvot/` (gränserna), `/fuktmatare/` (instrumentet), `/rakna/daggpunkt/` (samma rum, luften i stället för träet), `/fukt/hussvamp/` (röta).

**In**, krav minst två från innehållsfiler: `/fukt/fuktkvot/` (inbäddad med `<Kalkylator namn="fuktkvot">` och en länk), `/fuktmatare/` (Verktygskort eller länk), `/fukt/hussvamp/` rad 153 och `/fukt/fukt-i-krypgrund/` rad 138 (fukt-6-C.md avsnitt 2). Registret ger `/rakna/` och hubbens grupp Räkna.

### 10. Strukturerad data och komponenter

`WebApplication` via `verktyg()` och `BreadcrumbList` från layouten. Ingen `Article`, inga datum. `FAQPage` bara om sidan får en synlig Faq. `SLUG`, `VERKTYGSNAMN` och `BESKRIVNING` överst i rutten. Inga produkter och `reklam={false}`.

### 11. Ettan och Bättre än ettan

**Ettan (2026-10-04):** byggahus.se, forumtråden "Fuktkvot till fukthalt" (oläst, 403). Att den ligger etta visar frågan: folk blandar ihop fuktkvot och fukthalt och vet inte hur man räknar om. Tvåan nysagat.se (2010, cirka 300 ord) har ingen formel. På "jämviktsfuktkvot" är ettan en ordlista ur Skogsencyklopedin från 2000, en mening och inga tal. TräGuiden har sorptionskurvorna som diagram men ingen tabell över RF och temperatur och ingen räknare. Ingen svensk räknare för fuktkvot eller jämviktsfuktkvot hittades.

Det ettan har som vi måste behålla eller överträffa: svaret på fukthalt mot fuktkvot, i klartext.

**Bättre än ettan** (krav):

1. **Viktläget med fuktkvot och fukthalt samtidigt** och omräkningen mellan dem, med formeln synlig. Svarar på forumtrådens fråga.
2. **Jämviktsfuktkvot ur RF och temperatur med namngiven modell och källa**, kontrollerad mot TräGuidens tabell. Ingen svensk sida har det.
3. **Beskedet per användning** med TräGuidens gränser: ved, målning, inbyggnad, golv, mögel och röta. Ingen konkurrent kopplar talet till vad läsaren ska göra.
4. **Förval per rum** med samma värden som daggpunkten, så att krypgrunden, vinden och källaren får ett tal för träet och inte bara för luften.

### 12. Fällor

- **Ingen korrigering för temperatur eller träslag i räknaren.** Källorna säger olika om storleken (0,1 till 0,15 procentenheter per grad mot ungefär 0,9 per 10 grader). Det står i text, som ett intervall.
- **Sökverktygets egen tabell** (20 % RF → 5–6 % och så vidare) gick inte att knyta till någon källa och används inte. Inte heller ernstp.se:s tabell utan källa.
- **Rötgränsen 24 procent** och mögelgränsen 17 eller 18 procent, som säljarna skriver, används inte.
- **"fuktkvot trä"** i title eller H1 tar kunskapssidans fras. Räknaren skriver fuktkvoten, inte "fuktkvot i trä", först.
- Elkostnadens `plats=` och daggpunktens fältnamn ändras inte.
