# SEO-checklista, radonsug, startlista 6 omgång E, 2026-10-07

Omgång E i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad E1; 12.4 Radon), deadline **28 februari**. Ny kunskapssida om åtgärden mot markradon. `/fukt/radon/` äger ordet radon, gränsvärdet och mätningen. Den här sidan tar vid där radonsidans sista avsnitt, "Protokollet visar över 200", slutar.

Underlaget är SERP-läsningen 2026-09-30 (SOKORDSANALYS 12.3, raden "radon"). Där har "radonsug" (720) tre saneringsfirmor som etta till trea, med priser utan källa (Aerius 20 000 till 40 000 kr efter rotavdrag, Radonvac 30 000 till 50 000 kr). Radonvac kallar 200 Bq/m³ "Folkhälsomyndighetens rekommendation", fast det sedan 2018 är en referensnivå i strålskyddsförordningen. Talen för radon står i `fukt-gemensamma-tal.md` avsnitt 8 (T47 till T57) och gäller här som på radonsidan. YMYL: hälsan bygger bara på Strålsäkerhetsmyndigheten (SSM). Title räknas utan suffix.

**Väntar på affiliate och underlag** (beställt parallellt, se fukt-6-E.md avsnitt 1):

- **R1, affiliate.** Om en kontinuerlig radonmätare (Airthings Home eller Wave, Proffsmagasinet) får ett kort för kontrollen efter åtgärden. Beslutet bygger på SSM:s besked om kontrollmätning efter åtgärd och på Airthings datablad (mätosäkerhet, kalibrering), enligt affiliatebeslutet 2026-09-30 punkt 3. Blir svaret ja står kortet sist, med reklambandet ovanför. Blir svaret nej står inget kort och inget band.
- **R2, underlag.** Radonsugens eleffekt i W ur tillverkarnas datablad, för minst två vanliga fläktar, så att `/rakna/elkostnad/` får förvalet `?plats=radonsug` eller motsvarande. Förvalet byggs av UX. Sidan länkar dit när förvalet finns, och annars med effekten ifylld för hand i adressen.

Checklistan kan användas för skrivningen redan nu. Punkt 6 H2 5 och 6 och punkt 11 krav 3 kan inte skrivas klart förrän R1 och R2 finns.

---

## /fukt/radonsug/

### 1. Adress och sidtyp

`/fukt/radonsug/` · `src/content/kunskap/fukt/radonsug.mdx` · samling **kunskap**, `typ: kunskap`, `pelare: fukt`, `plats: hela-huset`, `niva: mellan`. `produkter:` tom, om inte R1 ger ett kort.

Läsaren har fått ett mätprotokoll över 200 Bq/m³, eller köper ett hus med en radonsug som brummar i källaren, och undrar vilken åtgärd som behövs, vad den kostar i pengar och el, om hon kan göra något själv och hur hon vet att den fungerar.

### 2. Huvudfras och sidofraser

**Huvudfras: radonsug, 720 per månad** (0 %), topp i mars. Sidan äger **1 150**. Vinnbarhet 4: topp 3 är saneringsfirmor med priser utan källa.

Sidofraser, med plats:

- **radonsanering** (210) i en H2 eller i H1.
- **radon åtgärder** (110) i H2:n som går igenom åtgärderna efter källa.
- **radon ventilation** (90) och **ventilera bort radon** (20, +200 %) i en H2: när det räcker med mer ventilation och när det inte gör det.
- **radonbrunn** och **radonsug pris** (ingen egen data, men radonsug-SERP:en domineras av pris) i H2:erna om typerna och kostnaden.

"radon", "radon gränsvärde", "radonmätare", "radon i hus" och "vad kostar en radonmätning" ägs av `/fukt/radon/`.

### 3. Title

Krav: **högst 44 tecken**, börjar med **"Radonsug"**, och delar inte de tre första orden med `/fukt/radon/` ("Radon i huset, gränsvärdet"). Förslag: "Radonsug, när den behövs och vad den kostar" (43).

### 4. Description

Krav: 120 till 155 tecken. "radonsug" i första meningen, att åtgärden beror på var radonet kommer ifrån, och kostnad eller kontrollmätning. Inget utropstecken.

### 5. H1

Sidans löfte. Delar inte de tre första orden med title.

### 6. H2-struktur

`kortSvar`, tre till fem meningar:

- att en radonsug skapar undertryck i marken under huset så att markluften inte sugs in, och att den behövs när radonet kommer från marken och tätning inte räcker (SSM)
- vilka typer som finns (sug under plattan, radonbrunn, smalrör, sug i krypgrund)
- vad den brukar kosta, bara med källa och år
- att en ny långtidsmätning visar om den fungerar

Brödtexten:

1. **Ta reda på var radonet kommer ifrån först** (bär "radon åtgärder"). Mark, blåbetong eller brunnsvatten, och åtgärden för var och en med SSM som källa. Kort, eftersom radonsidan har källorna. Här står beslutet.
2. **Så fungerar en radonsug** (bär huvudfrasen). Undertrycket och fläkten, var röret går och var luften blåses ut. Typerna i en tabell med var de passar (platta på mark, källare, krypgrund), vad som installeras och om grunden måste borras: sug under plattan, radonbrunn i tomten, smalrör, sug i krypgrunden.
3. **Räcker det att ventilera bort radon?** (bär "radon ventilation" och "ventilera bort radon"). När ventilationen hjälper (radon från byggmaterial, låga halter) och när den gör det värre (fläkten ger undertryck i huset och drar in mer markluft, som `/fukt/sjalvdrag/` redan säger). SSM:s besked, och tätningen av grunden som första steg.
4. **Radonsanering, vem som gör den och vad den kostar** (bär "radonsanering"). Pris bara med källa och år. Saneringsfirmornas prisspann står som deras uppgift och inte som sajtens. Rotavdraget med Skatteverket som källa, om radonsanering omfattas. Vad som skiljer en certifierad radontekniker eller ett företag i Svensk Radonförening, som SSM hänvisar till.
5. **Elen och ljudet.** Fläktens effekt ur datablad, kronor per år, och länk till `/rakna/elkostnad/` med förvalet. Ljudet och var fläkten placeras. *Väntar på R2.*
6. **Kontrollera att sugen fungerar.** Ny långtidsmätning med spårfilm under eldningssäsongen enligt SSM (T50), korttidsmätning för ett första besked, och en kontinuerlig mätare för att se att fläkten går. Länk till `/fukt/radon/` för mätningen. *R1 avgör om ett kort står här.*
7. **Faq**, två eller tre frågor som inte upprepar H2:orna, till exempel "Kan radonsugen stängas av på sommaren?", "Vad händer om fläkten går sönder?" och "Finns det bidrag för radonsanering?" (bara med källa; om bidraget till småhus är avskaffat säger svaret när). Svaren är ren text, eftersom länkar inte fungerar i Faq-svar.

### 7. Längd

Mål **1 600 till 2 200 ord**. Topp 3 är firmasidor med priser utan källa. Vi vinner på åtgärden efter källa, typtabellen, kontrollen och elen.

### 8. Bilder

- **Huvudbild, rekommenderad:** ett hus på platta i genomskärning med radonsugens rör ner under plattan, fläkten och utblåset över taket, och markluften med pilar som vänds bort från huset. En liten ruta visar radonbrunnen i tomten. `bildAlt` högst 125 tecken med "radonsug". Spec till UX.
- Typtabellen i H2 2 skrivs i Markdown.

### 9. Interna länkar

**Ut**, minst tre, högst en per H2:

- `/fukt/radon/` i H2 1 och i H2 6 (olika H2).
- `/fukt/sjalvdrag/` i H2 3.
- `/rakna/elkostnad/` i H2 5.
- `/fukt/fukt-i-krypgrund/` eller `/fukt/avfuktare-krypgrund/` i H2 2, eftersom sug i krypgrund och krypgrundsavfuktare ofta nämns ihop (krypgrundsavfuktare radon, ingen data).
- `/fukt/fukt-i-kallaren/` i H2 1 eller 3, där radonet redan nämns.

**In**, när omgången publiceras (fukt-6-E.md avsnitt 2): `/fukt/radon/` (H2 "Protokollet visar över 200", meningen om radonsug, radonbrunn och smalrör), `/fukt/sjalvdrag/` (stycket om radon efter bytet till fläkt) och `/fukt/fukt-i-kallaren/` (stycket om radon).

### 10. Strukturerad data och komponenter

`Article` och `BreadcrumbList`. `FAQPage` bara om Faq finns. Inget kort och inget reklamband om R1 säger nej. `kallor` med SSM (åtgärder mot radon, att mäta radon, referensnivå), strålskyddsförordningen och strålskyddslagen, Boverket (BFS 2024:8 3 kap. 2 § för nya byggnader), Skatteverket om rotavdraget och tillverkarnas datablad för fläktarna.

### 11. Ettan och Bättre än ettan

**Ettan (2026-09-30):** en saneringsfirma (Aerius eller Radonvac; ordningen i topp 3 är inte kontrollerad). Topp 3 är tre firmor med priser utan källa: Aerius 20 000 till 40 000 kr efter rotavdrag och Radonvac 30 000 till 50 000 kr. Radonvac kallar 200 Bq/m³ "Folkhälsomyndighetens rekommendation", vilket är gammalt. Sedan 2018 är det en referensnivå i strålskyddsförordningen (SFS 2018:506 3 kap. 6 §). Läsningen från september var en sammanfattning, så faktabladet läser ettan och tvåan i original innan något i dem används.

Det ettan har som vi måste behålla eller överträffa: ett prisintervall, och en förklaring av hur sugen fungerar.

**Bättre än ettan** (krav):

1. **Åtgärden efter källa med SSM som källa**, och referensnivån med rätt författning.
2. **Tabellen över typerna** (sug under platta, radonbrunn, smalrör, krypgrund) med var de passar.
3. **Elen per år ur datablad**, med länk till räknaren. *R2.*
4. **Kontrollen efter åtgärden** enligt SSM, och vad läsaren gör om halten inte sjunker.

**Krav på faktabladet** (`underlag` och hantverkaren, `docs/briefer/faktablad/kunskap-radonsug.md`):

- SSM, "Åtgärder mot radon" (uppdaterad 2025-11-10), ordagrant om radonsug, radonbrunn, smalrör, tätning och ventilation, och om kontrollmätning efter åtgärd.
- T47 till T57 ur `fukt-gemensamma-tal.md` avsnitt 8, oförändrade.
- Pris för radonsanering ur en källa som inte säljer jobbet (SSM, Boverket, en kommun eller Konsumentverket), med år. Finns ingen, står firmornas spann som deras uppgift.
- Skatteverket: om installation av radonsug eller radonbrunn ger rotavdrag, ordagrant.
- Bidrag: om radonbidraget till småhus finns kvar, och i så fall när det avskaffades, med källa.
- R2: fläktarnas effekt i W ur datablad.
- SERP: ettan och tvåan på "radonsug" lästa i original, med datum.

### 12. Fällor

- **Gränsvärdet, mätningen och mätarna** ägs av `/fukt/radon/`. Här står en länk och det som behövs för kontrollen.
- **"Folkhälsomyndighetens rekommendation"** om 200 står inte. Det är SSM och förordningen.
- **Hälsotal** (500 lungcancerfall, 14 procent) står på radonsidan och upprepas bara med SSM som källa om de behövs.
- **Firmornas priser** står som deras uppgift med år, aldrig som "kostar".
- **Radonsugen i krypgrunden** får inte låta som en avfuktare. Krypgrundens fukt ägs av krypgrundssidorna.
- **Inget råd om att installera sugen själv** utan källa. Elanslutningen följer samma lagrum som badrumsfläkten (Elsäkerhetsverket).
- **Länkar i Faq-svar** fungerar inte.
