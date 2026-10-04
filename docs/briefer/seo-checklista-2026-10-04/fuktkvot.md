# SEO-checklista, fuktkvot i trä, startlista 6 omgång C, 2026-10-04

Omgång C i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad C2), deadline **20 december**. Ny kunskapssida som bär räknaren `/rakna/fuktkvot/` och är kunskapsgrenen under `/fuktmatare/`.

Underlaget är underlagsarbetarens SERP-läsning 2026-10-04, block B ("fuktkvot trä", "fuktkvot trä mögel"), och det gemensamma faktabladet `fukt-gemensamma-tal.md` avsnitt 1 och 4 (T1 till T6, T22 till T32). Sökverktyget svarar från USA. Title räknas utan suffix.

Tre saker styr sidan:

1. **Gränserna är TräGuidens, och sidan säger varför de andra talen inte är det.** Topp 9 ger mögelgränsen som 16, 17, 17–18, 17–20 och 18 procent och rötgränsen som 18–20, 24 och 24–25, och ingen har en källa. En sida som ger ett tal per gräns med källa, och säger att mögel styrs av ytan, luften och tiden, är det ingen annan har.
2. **Fuktkvot och RF är två mått.** Kopplingen mellan dem (TräGuidens tabell 2) och räknaren är det som gör talet på mätaren begripligt.
3. **Inga produkter.** Fuktmätaren nämns med länk till `/fuktmatare/`.

---

## /fukt/fuktkvot/

### 1. Adress och sidtyp

`/fukt/fuktkvot/` · `src/content/kunskap/fukt/fuktkvot.mdx` · samling **kunskap**, `typ: kunskap`, `pelare: fukt`, `plats: hela-huset`, `niva: mellan`. `produkter: []`.

Läsaren har ett tal från en fuktmätare och undrar om det är för högt för det hon ska göra: måla, bygga in, lägga golv, elda, eller om det betyder mögel eller röta.

### 2. Huvudfras och sidofraser

**Huvudfras: fuktkvot trä, 110 per månad**, topp i september. Sidan äger **210**. Vinnbarhet 4: ettan är Svenskt Träs faktasida utan mögel- och rötgränser, och resten är säljare utan källor.

Sidofraser, med plats:

- **fuktkvot trä mögel** (40) i en H2.
- **fuktkvot trä målning** (20) och **fuktkvot trä inomhus** (10) i gränstabellen eller en H2.
- **fuktkvot ved** (20) i en H2 eller tabellrad.
- **kritiskt fukttillstånd** (10) i H2 om mögel, med Boverkets ord "högsta tillåtna fukttillstånd" bredvid.
- **fuktkvot och relativ fuktighet** och **fukthalt** (ingen data) i H2 om sambandet.

"fuktkvot krypgrund" (30), "fuktkvot källare" (10) och "fuktkvot syll" (10) ägs av krypgrunden, källaren och hussvampen.

### 3. Title

Krav: **högst 44 tecken**, börjar med **"Fuktkvot i trä"** eller **"Fuktkvot"**. Förslag: "Fuktkvot i trä, gränserna för mögel och röta" (44). Räknaren får inte börja likadant.

### 4. Description

Krav: 120 till 155 tecken, "fuktkvot" i första meningen, minst tre av användningarna (målning, inbyggnad, golv, ved, mögel, röta), och att gränserna har källa.

### 5. H1

Sidans löfte, inte sökfrasen. Delar inte de tre första orden med title.

### 6. H2-struktur

`kortSvar`, tre till fem meningar: vad fuktkvot är (vattnet i procent av torrt träs vikt); de gränser som gäller med TräGuiden som källa (16 före målning, 18 före inbyggnad, röta liten risk under 20); att mögel styrs av luftens fuktighet vid ytan och tiden, med 75 till 80 procents RF som gräns för trä; och att en mätare kan visa 2 procentenheter fel.

1. **Vad fuktkvoten är, och skillnaden mot fukthalt.** Formeln i ord, ett räkneexempel (1 100 g före, 1 000 g efter ger 10 procent fuktkvot och 9,1 procent fukthalt), fibermättnaden runt 30 procent, och att veden ofta anges som fukthalt. Kalkylatorn eller ett Verktygskort här eller i H2 3.
2. **Gränserna för målning, inbyggnad, golv och ved** (bär "målning", "inomhus", "ved"). En tabell med gräns, fuktkvot, mått (yt- eller medelfuktkvot) och källa per rad: ytfuktkvot 16 före ytbehandling, 18 före inbyggnad, målfuktkvot 8, 12 och 16 vid leverans med partiets intervall, inne 7,5 i medel (2 till 6 vinter, 7 till 12 sommar), ute 11 till 15 sommar och 19 till 23 vinter, veden med källa ur faktabladet. Rubrikrad och enhet.
3. **Fuktkvot och relativ fuktighet** (bär sambandet och "jämviktsfuktkvot"). TräGuidens tabell 2 (75 → 15, 80 → 16, 85 → 18, 90 → 21, 95 → 24 vid 20 °C), att träet går mot luftens fukt över veckor, och hysteresen. **Här bäddas räknaren in** med `<Kalkylator namn="fuktkvot">` där läsaren just förstått sambandet, med förval för krypgrund eller kallvind.
4. **Vid vilken fuktkvot växer mögel** (bär "fuktkvot trä mögel" och "kritiskt fukttillstånd"). Ett rakt svar: mögel växer på ytan, så det är ytfuktkvoten och luften vid ytan som räknas; trä kan mögla vid 75 till 80 procents RF under lång tid, vilket motsvarar ungefär 15 till 16 procent fuktkvot vid 20 grader; kallare tar längre tid. Boverkets 75 procent (BFS 2024:8 7 kap. 1 §) är en regel för byggnadsdelar i RF, inte en fuktkvot. Varför säljarnas 17, 18 och 24 procent saknar källa, sagt i sak utan namn.
5. **Röta börjar över 20 procent** (rubriken hantverkarens). Under 20 liten risk, över 30 etablerar sig rötsvamparna, optimum 40 till 80, temperaturspannet. En mening om hussvampen med länk; hussvampens egna tal står där, inte här.
6. **Så mäter du fuktkvoten rätt.** Tre mätningar tätt intill varandra och medelvärdet, ytfuktkvot mot djupare mätning, temperaturen och träslaget som felkällor (intervallet, inte en korrigering), ±2 procentenheter, torrviktsmetoden som facit. Länk till `/fuktmatare/` för valet av instrument, en gång.
7. **Faq**, två eller tre frågor som inte upprepar H2:orna, till exempel "Hur lång tid tar det för virke att torka till 16 procent?" (bara med källa) och "Varför visar min mätare olika på samma bräda?".

### 7. Längd

Mål **1 500 till 2 200 ord**. Ettan, Svenskt Träs faktasida, har cirka 4 500 ord men täcker allt om trä och fukt; TräGuidens "Fuktkvot och mätning" cirka 1 200 och den bästa säljarbloggen cirka 2 500 utan källor. Vi vinner på tabellerna och räknaren.

### 8. Bilder

- **Huvudbild, rekommenderad:** en bräda i genomskärning med ytfuktkvot och kärna, och tre stiftpar tätt intill varandra 300 mm in från änden. `bildAlt` högst 125 tecken, med "fuktkvot". Spec till UX.
- Tabellerna i H2 2 och 3 skrivs i Markdown.

### 9. Interna länkar

**Ut**, minst tre, högst en per H2:

- `/rakna/fuktkvot/` (inbäddad i H2 3, och länk i H2 1 eller 2).
- `/fuktmatare/` i H2 6.
- `/fukt/hussvamp/` i H2 5.
- `/fukt/luftfuktighet-inomhus/` eller `/fukt/hygrometer/` i H2 3 eller 4.
- `/fukt/fukt-i-krypgrund/` eller `/fukt/fukt-pa-vinden/` i H2 4, där fukten oftast ligger högt.
- Målningen (`/fasad/mala-om-huset/` eller `/fasad/tvatta-fasad/`) i H2 2.

**In**, krav senast en vecka efter publicering: `/fukt/hussvamp/` rad 142, `/fukt/luftfuktighet-inomhus/` rad 240, `/fukt/fukt-pa-vinden/` rad 163 (fukt-6-C.md avsnitt 2), och `/fuktmatare/` i samma omgång.

### 10. Strukturerad data och komponenter

`Article` och `BreadcrumbList`. `FAQPage` bara om Faq finns. Inga produkter och inget reklamband. `kallor` med TräGuidens fyra sidor (Mikroorganismer, Trä och fukt, Fuktkvot och mätning, Planering), BFS 2024:8, Svenskt Trä Träfakta, vedens källa och räknarens modell.

### 11. Ettan och Bättre än ettan

**Ettan (2026-10-04):** svenskttra.se, "Trä och fukt" (branschorganisation, odaterad, cirka 4 500 ord). Den har definitionen, ytfuktkvoten 16 och 18, målfuktkvoten 8, 12 och 16 och en sorptionskurva, men ingen mögel- eller rötgräns i procent, inget räkneexempel och ingen räknare. TräGuidens sidor på plats två och tre har samma gränser och mätmetoderna. På "fuktkvot trä mögel" är ettan en PDF från Polygon (oläst), och resten är säljare med mögelgränser mellan 16 och 20 procent och rötgränser mellan 18 och 25, utan källa. En blogg skriver "15 procents säkerhetsgräns enligt Boverket", vilket inte stämmer med föreskriften.

Det ettan har som vi måste behålla eller överträffa: definitionen, målfuktkvoten med partiets tolerans, och fibermättnaden.

**Bättre än ettan** (krav):

1. **En gränstabell med en källa per rad** för målning, inbyggnad, golv, inne, ute och ved.
2. **Ett rakt svar på vid vilken fuktkvot mögel växer**, med RF, tid och temperatur, och Boverkets regel förklarad som RF i byggnadsdelar.
3. **Räknaren inbäddad** med förval för krypgrund och kallvind. Ingen i topp 9 har en.
4. **Mätfelet och felkällorna** (±2 procentenheter, temperatur, träslag, ytfuktkvot mot djup), så att läsaren vet att 17 och 19 procent inte är ett besked.

**Krav på faktabladet** (`underlag`, `docs/briefer/faktablad/kunskap-fuktkvot.md`):

- T22 till T32 ur `fukt-gemensamma-tal.md`, med TräGuidens rötformulering läst ordagrant (SERP-läsningen läste den inte om).
- Vedens gräns med myndighet eller branschorganisation som källa, och om den anges som fukthalt eller fuktkvot.
- TräGuiden, Fuktinnehåll och sorptionskurvor: hysteresen och de konditionerade värdena, ordagrant.
- SS-EN 14298-toleranserna ur TräGuiden, Trä och fukt.
- Torktid för virke till 16 eller 18 procent, bara om en källa av rang ger den. Annars utgår frågan.
- Polygons PDF om mögelrisk (ettan på "fuktkvot trä mögel"): vad den säger och om den har en källa. Används bara om den hänvisar till forskning.

### 12. Fällor

- **Säljarnas gränser** (16, 17, 17–18, 17–20, 24, 24–25) står inte som gränser. De får nämnas i sak som vanliga tal utan källa.
- **"Boverket 15 procent"** finns inte. Boverkets tal är RF.
- **Hussvampens 23 till 26 procent** (Botaniska Analysgruppen) står på hussvampssidan, inte här.
- **Krypgrundens åtgärder** står på krypgrundssidan. Här finns krypgrunden som exempel och förval.
- **Instrumentvalet** står på `/fuktmatare/`. Här finns en länk och ingen modell.
- **Räknarens formel** skrivs inte om med andra tal än de räknaren använder.
