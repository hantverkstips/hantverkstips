# Faktablad: /fukt/avfuktare-vind/

Beställt av hantverkaren 2026-09-30. Underlag till köpguiden `src/content/guider/fukt/avfuktare-vind.mdx` (finns inte än), adress `/fukt/avfuktare-vind/`. Checklistan är `docs/briefer/seo-checklista-2026-09-30/avfuktare-vind.md`, kraven på det här bladet i dess avsnitt 11.

Skrivet 2026-09-30 av underlag. "Läst 2026-09-30" betyder hämtat med curl och läst den dagen. Citat inom citattecken är ordagranna ur sidans HTML eller ur PDF:en (pdftotext). Märkning: **TILLVERKARE** (tillverkarens eget dokument eller sida), **FIRMA** (säljer produkten eller tjänsten), **FORSKNING** (SP, LTH, Chalmers, SBUF), **BUTIK** (återförsäljare, bara pris och titel), **EGEN** (egen räkning, formeln utskriven), **ANTAGANDE** (villkor jag har valt, utan källa). Ingen text här är förlaga. Hantverkaren skriver från talen och citaten.

Hänvisningar som inte skrivs om: **K1–K20** och **T1–T57** i `fukt-gemensamma-tal.md` (avsnitt 0, 5 och 13.2), **V1–V14** och citaten ur SP, LTH och Hagentoft i `guider-fukt-pa-vinden.md`, maskinerna i `underlag-avfuktare-vind-2026-10.md` del A–E (här "underlaget"). Nya uppgifter har nummer **AV1–AV40**.

---

## 0. Sidan i korthet

- **Huvudfras:** avfuktare vind (390 per månad). **Sidtyp:** köpguide (eller problemguide, affiliate avgör), `pelare: fukt`, `plats: vind`, `kategori: luftavfuktare`, `niva: mellan`. Reklamband över första länken.
- **Temperaturgränsen:** T33, T34 (sajtens regel), T35–T40 med källor i gemensamma bladet 5.1–5.2. K8: vinden −0,6 till +10,8 °C som månadsmedel oktober–februari.
- **Elpriset:** 2,40 kr per kWh, SCB, hushåll 5 000–14 999 kWh per år, juli–december 2025, inklusive elhandel, nätavgift, energiskatt och moms (`src/lib/antaganden.ts`, `ELPRIS_KR_PER_KWH`, `ELPRIS_KALLA`), <https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris>. Samma som `/rakna/elkostnad/`.
- **Räknaren `/rakna/avfuktare/`** har inget vindsförval: `src/lib/kalkyl/avfuktare.ts` rad 165 räknar upp förvalen och säger att vind saknas. Ytan är begränsad till 5–300 m² (`GRANSER`). Sidan får alltså själv förklara dimensioneringen (avsnitt 2 och 3 här).

---

## 1. Luftomsättning på en kallvind (punkt 1)

### 1.1 Vad som finns

| Nr | Tal | Vad det är | Källa, sida | Märkning |
|---|---|---|---|---|
| AV1 | 0,0347–4,4712 oms/h; 71 % av värdena 1–4,5 oms/h | **Uppmätt** med spårgas, vår 2014, på en "normal" kallvind: "öppna luftspalter vid båda takfötterna samt fullt öppna gavelventiler". Provhus i Lund, ett rum 7 × 3,6 m (25,2 m²) | Pettersson 2014, examensarbete LTH (ISRN LUTVDG/TVBH-14/5078), refererat i Harderup, SBUF 11765, januari 2021, s. 31 och 142. **Studentarbete, ett litet provhus, andrahand** | FORSKNING |
| AV2 | 2,75 oms/h | Medelvärdet av intervallet 1–4,5, som Harderup använder som "normalfallet" i simuleringarna | Harderup 2021, s. 142 (C.1.9) och tabell 3.5 s. 74 | FORSKNING, räknat ur AV1 |
| AV3 | 0,55 oms/h | "Reducerad ventilation" = 20 % av normalfallet. **Inte uppmätt** | Harderup 2021, s. 142 | FORSKNING, antagande i rapporten |
| AV4 | ca 1 oms/h | Styrd ventilation med fläkt, beräkningsantagande | Hagentoft, SBUF 11871/11955, s. 11 | FORSKNING |
| AV5 | 35 W, 40 % gångtid, 123 kWh/år | Fläkten för styrd ventilation (SystemAir K160 M i fältförsöket, s. 18) | Hagentoft s. 15 | FORSKNING |
| AV6 | 80 m³ | Kallvindens volym i Hagentofts beräkningshus (vindsbjälklag 74,8 m²) | Hagentoft s. 11 | FORSKNING |

Ordagrant:

- AV1, Harderup 2021 s. 31: "Även om metodutvecklingen var det primära syftet med arbetet har detta ändå resulterat i att luftomsättningen har bestämts ett flertal gånger under våren 2014. Från metod tre varierade den utvärderade luftomsättningen mellan 0,0347 och 4,4712 omsättningar per timme, varav 71 % av de beräknade värdena ligger i intervallet mellan 1 och 4,5 oms/h. Resultaten visar också att luftomsättningen varierar påtagligt under mätperioderna. De yttre parametrar som (Pettersson, 2014) anser vara av störst betydelse är vindhastighet, vindriktning samt temperatur och tryckfördelning på vinden."
- AV2 och AV3, Harderup 2021 s. 142: "Mätningarna utfördes enbart med normal ventilation på vinden, dvs. öppna luftspalter vid båda takfötterna samt fullt öppna gavelventiler. [...] Medelvärdet för detta intervall blir 2,75 luftomsättningar per timme [...]. För fallet med reducerad ventilation antas att denna motsvarar 20 % av ventilationen vid ”normalfallet”. Huruvida detta är sant har dock inte stöd från mätningar. Med reducerad ventilation blir således antagen luftomsättning 0,55 per timme."
- AV4, Hagentoft s. 11: "Den styrda ventilationen på vinden ger ca en luftomsättning i timmen." Och s. 12: "För några fall med styrd ventilation på vinden har ventilationsflödet ökat till 5 luftomsättningar i timmen."
- AV5, Hagentoft s. 15: "Energibehovet för den mekaniska ventilationen (35 W) med en 40 procentig gångtid motsvarar ett energibehov på 123 kWh/år." Kontroll, **EGEN**: 35 W × 0,40 × 8 760 h / 1 000 = 122,6 kWh. Sammanfattningens "i storleksordningen 100 kWh" (V5) är samma tal avrundat.
- Hagentoft s. 11, täthet (inte luftomsättning i drift): den vanliga vinden motsvarar "130 luftomsättningar (för kallvindsluften) i timmen vid 50 Pa"; den tätade 7, 1 eller 0 vid 50 Pa. Fältvindarna i Huddinge mättes till 20–30 och 40–55 per timme vid 50 Pa (tabell 6, s. 18). **Provtryckningstal, ska inte läsas som luftomsättning i vardagen.**

### 1.2 Vad som inte finns

- **Tobin och Samuelson B&T 4/04, Samuelson och Hägerhed Engman B&T 4/06, Sikander och Sandberg B&T 4/07, Harderup och Arfvidsson B&T 4/07, SBUF Informerar 10:05: inget tal för luftomsättning** (sökt på omsättning, luftväxling, m3/h, l/s, per timme; läst 2026-09-30). De säger "en viss luftväxling" och "någon eller några gavelventiler" utan tal. B&T 4/06 s. 23 nämner bara att Chalmers modeller kan räkna luftomsättning.
- **Uppmätt luftomsättning på en vind med bara gavelventiler: saknas.** Harderups 0,55 är ett antagande.
- **Uppmätt flöde för en fläkt i styrd ventilation i drift: saknas.** Hagentofts 1 oms/h är ett beräkningsantagande; fläktmodellen står men inte dess uppmätta flöde.
- Harderup 2021 s. 37 skriver "en normal luftomsättning på cirka 0,5 luftomsättningar per timme i en bostad". **Gäller bostaden, inte vinden.** Använd inte.

---

## 2. Fuktbelastningen att avfukta, EGEN räkning (punkt 2)

### 2.1 Formler och konstanter

- Mättnadsångtryck, Magnus med Lawrence 2005 (T18): es(T) = 6,1094 × exp(17,625 × T / (T + 243,04)) hPa.
- Ånghalt (T19): v = 216,68 × RF × es(T) / (T + 273,15) g/m³.
- Det som ska avfuktas per kubikmeter luft som kommer in: Δv = v(ute) − v(mål på vinden). Uteluften värms på vinden men behåller sin ånghalt; avfuktaren ska ta bort skillnaden mellan uteluftens ånghalt och den ånghalt som ger målnivån vid vindens temperatur.
- Liter per dygn = Δv (g/m³) × n (oms/h) × V (m³) × 24 h / 1 000.
- **Förutsättningar:** vinden tillför ingen egen fukt (inget läckage från bostaden, ingen byggfukt, inget regn); allt som kommer in är uteluft; trävirkets fuktbuffring räknas inte; avfuktarens egen värme räknas inte (den gör vinden något varmare och sänker behovet). Resultatet är ett **golv**, inte en dimensionering.

### 2.2 Mellanled, vinter (K3: ute 0 °C och 95 %; K8: vinden 0,5–2 °C varmare)

| Steg | Värde |
|---|---|
| es(0) | 6,1094 hPa |
| e ute = 0,95 × 6,1094 | 5,8039 hPa |
| v ute = 216,68 × 5,8039 / 273,15 | **4,604 g/m³** (SP räknar 4,62, V1; skillnaden kommer av avrundning och tabellvärde) |
| es(1) | 6,5670 hPa; mättnad 5,190 g/m³; RF på vinden utan avfuktare 88,7 % (K5 anger 89) |
| es(2) | 7,0546 hPa; mättnad 5,556 g/m³; RF utan avfuktare 82,9 % (K5 anger 83) |
| v mål 1 °C, 70 % = 0,70 × 5,190 | 3,633 g/m³ → Δv = **0,971 g/m³** |
| v mål 1 °C, 75 % | 3,893 g/m³ → Δv = **0,711 g/m³** |
| v mål 2 °C, 70 % | 3,889 g/m³ → Δv = **0,715 g/m³** |
| v mål 2 °C, 75 % | 4,167 g/m³ → Δv = **0,437 g/m³** |

### 2.3 Liter per dygn, vinter

Luftflöde: **0,5 och 1 oms/h = ANTAGANDE** (inget uppmätt tal för en tätad eller gavelventilerad vind, avsnitt 1.2). Som jämförelse också Harderups 0,55 (antagande i rapporten) och 2,75 (uppmätt medel på en fullt ventilerad provvind, AV1–AV2).

Vind 1 °C (vinden 1 grad varmare än ute):

| Mål | oms/h | 100 m³ | 150 m³ | 200 m³ | 300 m³ |
|---|---|---|---|---|---|
| 70 % | 0,5 | 1,16 | 1,75 | 2,33 | 3,49 |
| 70 % | 1 | 2,33 | 3,49 | 4,66 | 6,99 |
| 75 % | 0,5 | 0,85 | 1,28 | 1,71 | 2,56 |
| 75 % | 1 | 1,71 | 2,56 | 3,41 | 5,12 |

Vind 2 °C:

| Mål | oms/h | 100 m³ | 150 m³ | 200 m³ | 300 m³ |
|---|---|---|---|---|---|
| 70 % | 0,5 | 0,86 | 1,29 | 1,72 | 2,57 |
| 70 % | 1 | 1,72 | 2,57 | 3,43 | 5,15 |
| 75 % | 0,5 | 0,52 | 0,79 | 1,05 | 1,57 |
| 75 % | 1 | 1,05 | 1,57 | 2,10 | 3,15 |

Jämförelse, vind 1 °C, mål 75 %: 0,55 oms/h ger 0,94 / 1,41 / 1,88 / 2,82 l; 2,75 oms/h ger 4,69 / 7,04 / 9,39 / 14,08 l. Vind 2 °C, mål 75 %: 0,55 → 0,58 / 0,87 / 1,15 / 1,73; 2,75 → 2,89 / 4,33 / 5,77 / 8,66.

Exempelrad utskriven: 150 m³, 1 oms/h, vind 1 °C, mål 70 %: 0,971 × 1 × 150 × 24 / 1 000 = 3,49 l per dygn.

### 2.4 Höstvecka, ute 8 °C och 90 % (**ANTAGANDE**)

Ingen läst källa ger uteluftens månadsmedel för oktober eller november i text. K8 (Harderup och Arfvidsson 2007) ger bara vindens temperatur (−0,6 till +10,8 °C oktober–februari) och RF (79–88 %); utetemperaturen finns i figur 3 och kan inte läsas ur PDF:en. Harderup 2021: inga uteluftsvärden för oktober eller november i texten. Villkoret 8 °C och 90 % är därför mitt eget. Vindens temperatur: 9 och 10 °C, med K8:s vintervärde 1–2 grader varmare (K8 säger "på sommaren mellan 2 och 3,5 grader varmare"; hösten står inte).

| Steg | Värde |
|---|---|
| es(8) | 10,7134 hPa; e ute = 9,6420 hPa; **v ute = 7,431 g/m³** |
| vind 9 °C: es 11,4638 hPa, mättnad 8,804 g/m³, RF utan avfuktare 84,4 % | Δv mot 70 % = **1,268**; mot 75 % = **0,828 g/m³** |
| vind 10 °C: es 12,2602 hPa, mättnad 9,382 g/m³, RF utan avfuktare 79,2 % | Δv mot 70 % = **0,864**; mot 75 % = **0,395 g/m³** |

| Vind, mål | oms/h | 100 m³ | 150 m³ | 200 m³ | 300 m³ |
|---|---|---|---|---|---|
| 9 °C, 70 % | 0,5 | 1,52 | 2,28 | 3,04 | 4,57 |
| 9 °C, 70 % | 1 | 3,04 | 4,57 | 6,09 | 9,13 |
| 9 °C, 75 % | 0,5 | 0,99 | 1,49 | 1,99 | 2,98 |
| 9 °C, 75 % | 1 | 1,99 | 2,98 | 3,98 | 5,96 |
| 10 °C, 70 % | 0,5 | 1,04 | 1,55 | 2,07 | 3,11 |
| 10 °C, 70 % | 1 | 2,07 | 3,11 | 4,15 | 6,22 |
| 10 °C, 75 % | 0,5 | 0,47 | 0,71 | 0,95 | 1,42 |
| 10 °C, 75 % | 1 | 0,95 | 1,42 | 1,89 | 2,84 |

Om vinden inte är varmare än ute (8 °C, RF 90 %): Δv mot 70 % = 1,651, mot 75 % = 1,239 g/m³; 150 m³ och 1 oms/h ger 5,94 respektive 4,46 l per dygn.

### 2.5 Mätt fukttillskott på vinden, som kontroll

- Harderup och Arfvidsson, B&T 4/07 s. 14 (vind med reducerad ventilation, Stockholm): "Under vår och sommar har vi de högsta värdena på fukttillskotten, mellan 0,5 och 0,75 g/m3. Under hösten finner vi negativa fukttillskott på maximalt 0,16 g/m3." Samma storleksordning som Δv ovan, men det är vindens eget nettotillskott, inte ett avfuktningsbehov.
- K12: Hagentoft mätte negativa tillskott, −0,2 till −0,3 g/m³ (vanlig) och −0,5 till −0,8 g/m³ (styrd). V2: SP −0,7 till +0,6 g/m³.

### 2.6 Fukt som läcker upp från bostaden (räknas inte in)

Talen finns bara som **beräkningsantaganden**, inte som mätning på villavindar. De står här så att sidan kan säga att läckaget kommer ovanpå talen i 2.3–2.4:

- Hagentoft s. 12, tabell 3, "Beräknat luftflöde upp till kallvinden genom bjälklaget. Medelflöden (m3/h) över året": F-ventilation 2,6–3,1 m³/h, FT-ventilation 16,7–47,0 m³/h, beroende på bjälklagets täthet. Inomhusklimatet i modellen: "I genomsnitt motsvarar detta ett fukttillskott på ca 3 g/m3" (s. 11).
- Harderup 2021 s. 28: "fuktklass 2 enligt EN-ISO 13788:2012, vilket motsvarar ett fukttillskott på 4 g/m3 då utomhustemperaturen är lägre än 0°C."
- Trygghetsvakten (FIRMA): "Varje person avger ca två liter vatten i form av vattenånga per dygn." (installation-vind, adress i 5.1). Ingen källa. Använd inte.
- **Uppmätt läckage upp till en befintlig villavind: saknas.**

### 2.7 Vad räkningen säger om maskinen, EGEN

Bara Acetec RCF 12 G1 har en kapacitet vid 0 °C: ca 6,7 l per dygn vid 60 % RF, avläst ur diagram (underlaget B6). Drifttid för att klara behovet: timmar per dygn = behov / 6,7 × 24. Exempel: 1,05 l → 3,8 h; 2,33 l → 8,3 h; 3,49 l → 12,5 h; 4,66 l → 16,7 h; 6,99 l → 25,0 h (räcker inte). **Förbehåll:** diagrammet gäller 60 % RF in; på vinden är luften fuktigare (83–89 %), vilket enligt samma diagram ger mer (ca 7,9 l vid 80 %). Övriga maskiner saknar tal vid 0 °C, så räkningen kan inte göras för dem.

---

## 3. Tillverkarnas egen dimensionering (punkt 3)

| Maskin | Uppgift | Villkor | Källa | Märkning |
|---|---|---|---|---|
| Acetec EvoDry RCF 12 G1 | "Lämplig upp till (m³) 200"; "lämpar sig för utrymmen upp till 200 m³" | inget villkor | Acetec, "Dokumentation EvoDry RCF 12 G1", ref-20012, "Uppdaterad: 26 maj 2026", <https://docs.acetec.se/dokument/ref-20012/>, läst 2026-09-30 | TILLVERKARE |
| Acetec EvoDry RCF 20 G1 (jämförelse) | "Lämplig upp till (m³) 300" | inget villkor | ref-20020, uppdaterad 14 augusti 2026 | TILLVERKARE |
| Fresh D-800 | "D-800 upp till 80 m2" | inget villkor, ingen takhöjd | Fresh, "Folder Fresh avfuktare D-800 och D-1200 Art no 008633 Ed 2019", "Copyright© Fresh AB 2019", i RSK-databasen <https://www.rskdatabasen.se/infodocs/PROD/PROD_295_6700887.pdf>, läst 2026-09-30 | TILLVERKARE (via RSK) |
| Fresh D-1200 | "D-1200 upp till 120 m2"; "passar i utrymmen upp till 80 respektive 120 m2" | samma | samma | TILLVERKARE (via RSK) |
| Fresh, nyare dokument | **saknas**: bruksanvisningen 008634-A_200116 och Fresh nuvarande folder (<https://fresh.se/Image/GetDocument/fi/218/folder%20fresh%20avfuktare.pdf>, "Copyright © Volution Sweden AB") anger ingen yta eller volym. Fresh produktsida (<https://fresh.se/en/product/avfuktare/avfukter-d-800--720016>) inte heller | – | läst 2026-09-30 | TILLVERKARE |
| Drybox X4 | "Upp till 250 m²" | inget villkor; datablocket saknar modellnamn och gäller X2 och X4 (underlaget B1) | Drybox, "Installationsbeskrivning DryBOX", PM-bilaga AssetDocument29528729, odaterad, läst 2026-09-30 | TILLVERKARE |
| Drybox X4, sida | **saknas** på <https://drybox.se/produkter/drybox-x4/> (`dateModified` 2026-08-19). FAQ: "Storleken på avfuktaren beror på volymen av utrymmet du vill behandla och hur mycket fukt som behöver avlägsnas. [...] Kontakta Drybox vid frågor om vilken modell som passar bäst för ditt specifika behov." | – | läst 2026-09-30 med curl, **ordagrant** (tidigare bara sammanfattning) | TILLVERKARE |
| Drybox X4, PM | produkttitel "upp till 250 m²" (adress `drybox-x4-avfuktare-upp-till-250-m-2950004`) | – | Proffsmagasinet, underlaget A2 | BUTIK |
| Drybox DryAttic | "Systemets kapacitet: 10 – 100 m2"; produktbladet "Area: 10 – 100 m2" | inget villkor | drybox.se/produkter/dryattic/ (`dateModified` 2026-04-20); produktbladet PM-bilaga 72013561 | TILLVERKARE |
| Trygghetsvakten Vind Start | "Byggyta upp till ca 120 kvm" | "Vindar som inte är angripna av mögel", "Enplanshus eller sidovindar" | trygghetsvakten.se/vindsavfuktare/installation-vind/ (adress i 5.1) | FIRMA/TILLVERKARE |
| Trygghetsvakten Vind (datablad) | "Systemets kapacitet: 10 - 100 m2" | – | "tvu-2009-02.pdf", "© 2010 Lindenstone Innovation AB" (adress i 5.1) | FIRMA/TILLVERKARE |

**Acetec om dimensionering**, "Hur stor avfuktare behöver jag?", <https://blog.acetec.se/dimensionera-avfuktare/>, publicerad 2026-09-17 (`datePublished`), läst 2026-09-30, TILLVERKARE:

- "Snabbsvar: Börja med att räkna ut utrymmets volym i m³, men använd den bara som ett första underlag. Temperatur, fukttillskott, täthet och användning påverkar också vilken kapacitet som behövs. Välj därför inte avfuktare enbart utifrån att en angiven maxvolym motsvarar utrymmets storlek."
- Vindsexemplet: "En vind som är 10 meter lång, 8 meter bred och cirka 3 meter hög vid nocken får förenklat volymen:" "8 × 3 ÷ 2 × 10 = 120 m³". "När förutsättningarna kräver högre kapacitet kan EvoDry RCF 20 G1 vara en modell att utvärdera."
- "l/24h beskriver hur mycket vatten avfuktaren kan avlägsna under ett dygn vid angivna temperatur- och fuktförhållanden." "Kapaciteten förändras när temperatur och luftfuktighet förändras."
- Acetecs installationssida (4.1): "Volym, temperatur, fuktbelastning, luftläckage och hur torrluften kan fördelas påverkar också vilken kapacitet du behöver."

**Källorna säger olika om måttet:** Acetec dimensionerar i m³, Fresh, Drybox och Trygghetsvakten i m². Ingen av dem anger villkor (temperatur, RF, luftomsättning) för sin gräns. Tillverkarnas egna dokument väger tyngst för respektive maskin; inget av dem kan jämföras rakt med ett annat.

**EGEN omräkning** för att visa skillnaden: Acetecs exempelvind, 80 m² golv och 120 m³, ligger precis på Fresh D-800:s 80 m² men på 60 % av RCF 12:s 200 m³. En sadeltaksvind har volymen golvyta × nockhöjd ÷ 2 (Acetecs formel).

---

## 4. Acetec om kallvind (punkt 4)

### 4.1 "Installera avfuktare"

<https://www.acetec.se/page/installera-avfuktare> svarar **301** till <https://www.acetec.se/kunskap/installera-avfuktare/>, publicerad och ändrad 2026-06-05 10:49 (`datePublished`, `dateModified`), läst 2026-09-30 med curl. TILLVERKARE. Ordagrant, allt som gäller vind:

- "På en kallvind behöver du i stället kontrollera luftläckage från bostaden och andra möjliga fuktkällor. Avfuktaren ska placeras så att luften kan cirkulera, våtluften ska ledas ut och manöverpanelen ska sitta varmt, väderskyddat och lättåtkomligt."
- "En krypgrund ställer andra krav än ett garage, och en stor uppdelad kallvind behöver planeras på ett annat sätt än ett mindre öppet utrymme."
- "I våra installationsanvisningar för EvoDry RCF 12 och RCF 20 anges att avfuktaren ska installeras av kvalificerad person."
- "En kallvind följer utomhustemperaturen betydligt mer än resten av huset. När temperaturen sjunker ökar den relativa luftfuktigheten, och under längre fuktiga perioder kan träkonstruktionen utsättas för nivåer som gynnar mikrobiell påväxt."
- "Om vindsbjälklaget tilläggsisoleras når mindre värme från bostaden vinden, som då blir kallare."
- "Innan du installerar en avfuktare bör du därför kontrollera om det finns tydliga fuktkällor som först behöver åtgärdas. Det kan exempelvis handla om luftläckage från bostaden, läckande ventilationskanaler eller vatteninträngning genom taket."
- "En avfuktare hjälper dig att kontrollera luftfuktigheten, men den ska inte användas för att kompensera för ett läckande tak eller andra byggnadsskador."
- Rubriken "Tänk på det här vid installation på kallvind":
  - "Placering: Ställ avfuktaren stabilt och väderskyddat med tillräckligt utrymme för luftintag, filterbyte och framtida service."
  - "Våtluft: Led den fuktiga luften ut ur det utrymme som avfuktas. Håll våtgasslangen så kort och rak som möjligt och täta genomföringen ordentligt."
  - "Torrluftens spridning: På en öppen vind kan fri utblåsning vara tillräcklig. På en större eller uppdelad vind kan du behöva torrluftsslangar för att nå alla delar."
  - "Luftvägar: Se till att isolering, kartonger eller andra föremål inte blockerar avfuktarens luftintag eller torrluftsutblås."
  - "Manöverpanel: Placera panelen varmt, väderskyddat och lättåtkomligt så att du enkelt kan kontrollera luftfuktighet, driftstatus och eventuella larm."
- "När avfuktaren är installerad är det klokt att följa luftfuktigheten över tid."
- Faq: "Fukten transporteras ut ur utrymmet som varm och fuktig luft via våtgasslangen. Du behöver därför inte tömma någon vattentank."

**Tätning av vindens ventilation: Acetec säger inget.** För krypgrunden står "Täta ventiler och andra öppningar, förutom den genomföring som ska användas för våtgasslangen." För kallvinden står bara luftläckaget från bostaden. Se 7.2 för att Drybox, Trygghetsvakten och Ljungby Fuktkontroll säger annat.

### 4.2 docs.acetec.se ref-20012 (RCF 12 G1)

Läst om 2026-09-30 med curl, "Uppdaterad: 26 maj 2026". Allt som berör vind:

- "Kallvind: I kallvindar kan fukt och kondens orsaka mögelpåväxt – särskilt efter fönsterbyte eller tilläggsisolering i äldre hus. Med en RCF-avfuktare hålls den relativa luftfuktigheten på en nivå där mögel inte får förutsättningar att utvecklas."
- "Avfuktaren är avsedd för installation endast inomhus eller i ett väderskyddat utrymme [...] Avfuktaren placeras i det utrymme som ska avfuktas. Våtgasslangen (80 mm) förs ut ur det betjänade utrymmet och ansluts till utloppsplåten som monteras på utsidan av väggen. Använd den medföljande våtgasslangen. Slangen bör inte förlängas eller ersättas med en slang som är längre än den medföljande slangen."
- "Våtgasslangen ska hållas så kort som möjligt för att undvika kondensbildning i slangen. Slangen kan även isoleras utvändigt eller, om möjligt, monteras med fall (lutning) mot utloppsplåten." Kondenshål "ca 3–5 mm" i lägsta punkten.
- Manöverpanelen: "Placera den inte på kallvind eller i krypgrund." och "Manöverpanelen ska inte placeras på kallvind eller i krypgrund."
- Steg-för-steg-anvisningen har rubriken "Förberedelse (krypgrund)" och talar om grundbalk. **Ingen vindsspecifik steg-för-steg-anvisning.** Hängande montering: **saknas.**

---

## 5. Trygghetsvakten och Drybox DryAttic (punkt 5)

### 5.1 Trygghetsvakten, tillverkarens egna uppgifter (FIRMA/TILLVERKARE)

Alla lästa ordagrant med curl 2026-09-30 (tidigare bara sammanfattning).

| Adress | Datum enligt sidan |
|---|---|
| <https://trygghetsvakten.se/vindsavfuktare/> | publicerad 2019-03-21, ändrad 2025-10-23 |
| <https://trygghetsvakten.se/vindsavfuktare/installation-vind/> (dit `vad-ar-trygghetsvakten-vindsavfuktare` och `fragor-svar-vindsavfuktare/flakten-gar-hela-tiden/` omdirigeras) | publicerad 2019-03-21, ändrad 2026-06-30 |
| <https://trygghetsvakten.se/produkt/trygghetsvakten-vind-classic/> | publicerad 2020-11-06 |
| <https://trygghetsvakten.se/produkt/trygghetsvakten-vind-start/> | publicerad 2020-11-06 |
| Installationsanvisning "Anvisningar för installation av TrygghetsVakten Vind Start & Classic", <https://trygghetsvakten.se/wp-content/uploads/2020/11/TV-Installation-Vind-v3_7.pdf> | "© 2011 Lindenstone Innovation AB", "© 2021 Trygghetsvakten AB" |
| Datablad "TrygghetsVakten Vind", <https://trygghetsvakten.se/wp-content/uploads/2020/11/tvu-2009-02.pdf> | "© 2010 Lindenstone Innovation AB" |
| <https://trygghetsvakten.se/installation-sorptionsavfuktare/> ("Sorptionsavfuktare för kalla vindar") | publicerad 2025-11-13, ändrad 2026-09-28 |

**Priser** (produktsidornas strukturerade data, `"price"`, `"priceCurrency":"SEK"`, `"valueAddedTaxIncluded":"true"`), läst 2026-09-30: **Vind Classic 18 980 kr**, **Vind Start 11 995 kr**, inklusive moms. Sålda i Trygghetsvaktens egen butik; inte hos Proffsmagasinet (underlaget del D). Båda sidorna: "Offert från certifierad installatör ingår för korrekt dimensionering" (Classic) respektive "offert från certifierad installatör" (Start).

**Hur det fungerar**, ordagrant:

- AV20. Classic: "Systemet kombinerar behovsstyrd ventilation med värmekabel för att hålla den relativa fuktigheten på en nivå där mögel inte trivs." "Leveransen omfattar värmekabel på femtio meter, backspjäll, väggstos, extra ljuddämpare, allt monteringsmaterial samt tydliga installationsanvisningar." (produktsidan)
- AV21. "Funktionen hos TrygghetsVakten Vind är att avfukta vinden så mycket som möjligt när uteluften har lägre ånghalt än inne på vinden. Genom att jämföra klimatet på vinden med utomhusklimatet ventileras vinden enbart när det är uttorkande. Under perioder med ogynnsamt utomhusklimat skyddar TrygghetsVakten genom att inte ventilera utan övervakar istället klimatet." (installation-vind)
- AV22. "Värmekabeln styrs på risken för mögelskador. Den går till exempel inte vid minusgrader på vinden eftersom ingen mögeltillväxt sker vid dessa låga temperaturer." (installation-vind)
- AV23. Installationsanvisningen: "Systemet har tre sensorer och två styrenheter. [...] Styrenheten till värmekabeln mäter klimatet inne på vinden. När det är ett sådant klimat att mögel och svamp skulle kunna växa aktiverar den värmekabeln. Den andra styrenheten mäter fuktskillnaden mellan ute och inne. När ventilationen är uttorkande aktiveras fläkten som ventilerar in torr luft. Fläkten aktiveras även varma sommardagar för att ventilera ut värmeöverskott på vinden."
- AV24. Placering: "TrygghetsVakten Vind monteras med värmekabeln spridd i utrymmet längs med takfoten på norrsidan. Fläkten monteras så att den blåser in luft från ett luftintag på vindsgaveln." Anvisningen: "I stosen sitter en backventil förmonterad"; "Utloppsventil ska sitta diametralt motsatt fläkten så att luften passerar så stor del av vinden som möjligt."
- AV25. Tätning, anvisningen: "För att TrygghetsVakten Vind skall fungera effektivt behöver du täta eventuell takfotsventilation." Sidan: "I den idag vanligaste vindskonstruktionen finns mycket ventilation via öppen takfot som tätas med en takfotstätning. En gavelspetsventil lämnas för att möjliggöra ett luftgenomflöde genom hela vindsutrymmet."
- Fläkten går ofta, sidan: "Fläkten går vid varje tillfälle som det är gynnsamt (lägre ånghalt ute) att ventilera in luft oavsett om det finns risk för mögelpåväxt."
- Datablad: "Uppvärmningen är normalt bara aktiv under ett par veckor på ett år." Ingen källa.

**Energin**, ordagrant:

- AV26. installation-vind (står två gånger): "Energiförbrukningen brukar ligga på ett par hundra kWh per år, vilket motsvarar 3-4 kWh/m²/år."
- Classic-sidan: "Med en årsförbrukning på några hundra kilowattimmar". installation-vind om Classic: "oftast bara några hundra kilowattimmar per år". Vindsavfuktare-sidan: "en extremt låg energiförbrukning motsvarande några hundralappar per år".
- AV27. Datablad: "Extremt energisnål (ca:4 kwH per m2 och år)" och "Normal energiåtgång: 4 kWh per m2/år". "Maximal effekt: 610 W", "Fläktens kapacitet ca: 350 m3/h", "Värmekabelns längd: 50 m", "Systemets kapacitet: 10 - 100 m2".
- AV28. Installationsanvisningen: "Strömförbrukning: max 560W inkl. 50m värmeslinga" (texten är dubbeltryckt i PDF:en, "556600WW"). **Källorna säger olika:** 610 W (datablad 2010) mot 560 W (anvisning 2021). Den nyare anvisningen väger tyngst.
- Jämförelsen mot sorption, sidan: "En sorptionsavfuktare för vindsutrymmen förbrukar typiskt 10 gånger mer energi än TrygghetsVakten Vind." Ingen källa, ingen modell. Använd inte som fakta.

**Tillverkarens eget förbehåll om Vind Start**, ordagrant:

- AV29. <https://trygghetsvakten.se/vindsavfuktare/installation-vind/>: **"Specialanpassad avfuktare för kallvindar och ouppvärmda förråd. Denna produkt ger dig ett basskydd, men då värme inte tillförs kan mögelpåväxt inte helt uteslutas. (Kan kompletteras med värmekabel för utbyggnad till TrygghetsVakten Vind Classic.)"**
- Start-produktsidan: "När full garanti mot mögel krävs kompletterar du systemet med värmekabel och går vidare till TrygghetsVakten Vind Classic."
- Installationsanvisningen: "Observera att värmekabeln ej ingår i TrygghetsVakten Vind Start!"
- Start "lämplig för": "Vindar som inte är angripna av mögel", "Vid byte av uppvärmning eller tilläggsisolering", "Enplanshus eller sidovindar", "Byggyta upp till ca 120 kvm". Classic "rekommenderas för": "Vindar med befintligt mikrobiellt angrepp", "När man vill ha extra säkerhet mot extrema vädersituationer", "Större vindar med en stor volym", "Dubbel driftsäkerhet (två separata avfuktande system)".

**Trygghetsvaktens påståenden om sorption, som sidan inte ska upprepa som fakta** (FIRMA, säljer konkurrerande teknik, ingen källa):

- "Med sorptionsavfuktare installerad är det dock bråttom, då dess princip bygger på totalt instängd luftvolym och därmed stängda ventiler – fukten kan inte evakueras vid strömavbrott. Redan efter någon vecka kan mögel växa och följden av strömavbrottet kan bli sanering."
- "Om man inte bor i huset året om, tex ett sommarhus, är det direkt olämpligt att täta alla ventiler!"
- "Principen från TrygghetsVakten Vind är verifierad av Chalmers samt Lunds Tekniska Högskola och sitter idag i ca 20 000 fastigheter." **Obs:** Hagentofts rapport (Chalmers) prövar styrd ventilation utan värme och nämner inte Trygghetsvakten; Harderup (LTH) inte heller. Påståendet kan inte beläggas i de lästa rapporterna.
- "Varje grad som luften värms upp sänks den relativa fuktigheten med fem procentenheter." **Stämmer ungefär** med K5 (SP: 89 → 83 → 78 → 73 → 68 %, 5–6 procentenheter per grad nära 0 °C). Använd K5, inte Trygghetsvakten.

### 5.2 Drybox DryAttic (TILLVERKARE)

- Sida: <https://drybox.se/produkter/dryattic/>, publicerad 2022-08-18, ändrad 2026-04-20, läst 2026-09-30 med curl, **ordagrant**.
- Produktblad: PM-bilaga id 72013561, `https://pm-asset.azureedge.net/api/asset-download?id=72013561`, odaterat, läst 2026-09-30.
- Installationsmanual "INSTALLATIONS MANUAL DryAttic på Vind": PM-bilaga id AssetDocument72013562, odaterad, läst 2026-09-30 (pdftotext, **ordagrant**).
- Pris: 14 999 kr hos Proffsmagasinet, beställningsvara, 2026-09-30 (underlaget A3).

Ordagrant:

- AV30. Produktbladet: "DryAttic är en kombination av fläkt och termisk avfuktning. Varm luft kan innehålla mer fukt än kall luft, den termiska avfuktaren höjer temperaturen när det behövs för att hålla den relativa fuktigheten på säkra nivåer. Den värmestyrda avfuktningen kombineras med en fläktenhet som blåser in torr luft utifrån."
- AV31. Produktbladet, teknisk data: "Temperaturhöjning +2°C", "Relativ fuktighets installerad ≤ 60% RF", "Fläktkapacitet 350 m3/h", "Maximal effekt 610 W", "Värmeslingans längd (1st) 50 m", **"Normal energiåtgång 4 kWh per m2 /år"**, "Area: 10 – 100 m2", **"Ca förbrukning: 400 kWh/år"**, "totalvikt (small/large) 15/19 kg", "Artikelnummer X3020".
- AV32. Sidans faq: **"Med DryAttic är förbrukningen knappast märkbar med ca 250-400 kWh per år räknat på en vind om 100 kvm. Ju mer varmluftsläckage från boytan du har till vinden desto högre blir förbrukningen."**
- Sidan: "När den relativa luftfuktigheten stiger aktiveras den termiska funktionen och höjer temperaturen i utrymmet." "När uteluften är torrare kan fläkten föra in den och på så sätt avlasta värmesteget."
- **När fläkten får gå**, manualen: "Den andra styrenheten mäter fuktskillnaden mellan ute och inne. När ventilationen är uttorkande aktiveras fläkten som ventilerar in torr luft. Fläkten aktiveras även varma sommardagar för att ventilera ut värmeöverskott på vinden." Och: "Fläkten ventilerar in torr luft när det är möjligt."
- **Värmekabeln**, manualen: "Styrenheten till värmekabeln mäter klimatet inne på vinden. När det är ett sådant klimat att mögel och svamp skulle kunna växa aktiverar den värmekabeln." "Installera DryAttics värmekabel så lågt som möjligt – dock minst 10 cm ovanför eventuell isolering." "Värmekabeln får aldrig övertäckas, klämmas eller isoleras." Styrenheten "där det är som fuktigast vilket kan vara exempelvis i nordlig eller nordostlig riktning eller ovanför sov- eller badrum"; sensorn "längst ner mot takfoten och dikt an mot råsponten".
- Tätning, manualen: "För att DryAttic skall fungera effektivt behöver du täta eventuell takfotsventilation." och "Utloppsventil ska sitta diametralt motsatt fläkten så att luften passerar så stor del av vinden som möjligt."
- Kapacitetskontroll, manualen: "Observera att det är nödvändigt att kontrollera att kapaciteten är tillräcklig eftersom vindsutrymmen skiljer sig mycket åt i hur mycket fukt som läcker in i dem. [...] Den mest pålitliga metoden är att använda sig av en fuktkvotsmätare." Gräns: "ca:17 % eller lägre" (manualen skriver "i krypgrunden", ett kvarlämnat ord).
- Manualens tekniska specifikation: "Temperatur, användningsområde: -40° C till + 40° C", "IP 43", "Garantitid: 6 år från leveransdatum vid registrering". Sidan och produktbladet: 5 år vid registrering. **Källorna säger olika** (6 mot 5 år); sidan är nyast.

**Källorna säger olika om DryAttics energi:** produktbladet "4 kWh per m2 /år" och "Ca förbrukning: 400 kWh/år" (för 100 m²) mot sidans "ca 250-400 kWh per år räknat på en vind om 100 kvm". Sidan (ändrad 2026-04-20) har spannet; produktbladet är odaterat. Skriv spannet med sidan som källa, eller båda.

**Egen iakttagelse:** Trygghetsvakten Vinds datablad från 2010 (Lindenstone Innovation AB) och DryAttics produktblad har **samma tal** (610 W, 350 m³/h, 50 m, 4 kWh per m² och år, 10–100 m²) och installationsanvisningarna har samma text ord för ord (tätning, värmekabel, utloppsventil, tillsyn). Båda från Amrox Group AB, Kungsängen (underlaget del D). Att det är samma produkt är **inte bekräftat av tillverkaren**.

---

## 6. Kontrollräkning av elen, EGEN (punkt 6)

Formel: kWh = effekt (W) / 1 000 × timmar per dygn × dygn. Kronor = kWh × 2,40 (avsnitt 0). Effekten är tillverkarens angivna effekt vid avfuktning; hygrostaten gör att maskinen står still en del av tiden, så **verklig drifttid på en vind saknas i alla källor**. Timmarna är ANTAGANDE.

| Maskin | Effekt, källa | 8 h/dygn, 365 dygn | 24 h/dygn, 365 dygn | 8 h/dygn, okt–mars 182 dygn |
|---|---|---|---|---|
| Fresh D-800 | 350 W vid 27 °C/60 % (bruksanvisningen s. 14) | 1 022 kWh, 2 453 kr | 3 066 kWh, 7 358 kr | 510 kWh, 1 223 kr |
| Fresh D-1200 | 500 W vid 27/60 (samma) | 1 460 kWh, 3 504 kr | 4 380 kWh, 10 512 kr | 728 kWh, 1 747 kr |
| Drybox X4 | 850 W ("Effekt 850W", drybox.se, läst 2026-09-30) | 2 482 kWh, 5 957 kr | 7 446 kWh, 17 870 kr | 1 238 kWh, 2 970 kr |
| Drybox X4, 805 W | 805 W (installationsbeskrivningen) | 2 351 kWh, 5 641 kr | 7 052 kWh, 16 924 kr | 1 172 kWh, 2 813 kr |
| Acetec RCF 12 G1 | 665 W vid avfuktning (ref-20012); fläkt 55 W separat | 1 942 kWh, 4 660 kr | 5 825 kWh, 13 981 kr | 968 kWh, 2 324 kr |

Exempel utskrivet: RCF 12, 8 h, 182 dygn: 665 / 1 000 × 8 × 182 = 968,2 kWh; × 2,40 = 2 324 kr.

**kWh per liter, RCF 12 G1:**

- 0 °C och 60 %: 665 × 24 / 1 000 = 15,96 kWh per dygn; / 6,7 l (avläst) = **2,38 kWh per liter**.
- 20 °C och 60 %: 15,96 / 12 = **1,33 kWh per liter** (samma som underlaget B6).
- Förbehåll: 6,7 l är avläst ur diagram (underlaget B6); att effekten är 665 W även vid 0 °C står inte i databladet.

**Jämförelse med styrd ventilation och värme:**

| System | kWh per år | kr per år à 2,40 | Källa |
|---|---|---|---|
| Styrd ventilation, fläkt utan värme (forskningsinstallation) | ca 100 (V5); 123 räknat (AV5) | 240; 295 | Hagentoft, FORSKNING |
| DryAttic, 80 m² × 4 kWh | 320 | 768 | EGEN ur AV31 |
| DryAttic, 100 m² × 4 kWh | 400 | 960 | EGEN ur AV31; produktbladet "Ca förbrukning: 400 kWh/år" |
| DryAttic, 100 m², sidans spann | 250–400 | 600–960 | AV32 |
| Trygghetsvakten, 3–4 kWh/m², 80 m² | 240–320 | 576–768 | EGEN ur AV26 |
| Trygghetsvakten, 3–4 kWh/m², 100 m² | 300–400 | 720–960 | EGEN ur AV26 |

- Kvoter, **EGEN**: RCF 12 vid 8 h om dygnet under vinterhalvåret (968 kWh) är ca 2,4 gånger DryAttics 400 kWh för 100 m² och ca 9,7 gånger Hagentofts 100 kWh. Vid 24 h året om (5 825 kWh) är det ca 15 gånger DryAttic. Ett enda "gånger mer" finns alltså inte; det beror helt på drifttiden, som saknas.
- Trygghetsvaktens "10 gånger mer" (5.1) är inte räknat mot något angivet värde.
- Talen gäller bara el. Hagentofts investeringskostnad 5 000–15 000 kr är från omkring 2009 och gäller forskningsinstallationen (V5); använd den inte som dagens pris.

---

## 7. Våtluften ut genom gaveln (punkt 7)

### 7.1 Om fuktig luft kan komma tillbaka in genom en ventil, eller om avstånd

**Saknas.** Ingen läst källa (tillverkare, SP, LTH, Chalmers eller Boverket) säger att våtluft som blåses ut genom en gavelventil kan komma tillbaka in genom samma eller en annan ventil, och ingen anger ett avstånd mellan utlopp och ventiler. Boverkets tre vindsidor (läst 2026-09-30, `guider-fukt-pa-vinden.md` 2.1–2.3) nämner inte avfuktare.

Det närmaste, ordagrant:

| Källa | Citat | Märkning |
|---|---|---|
| Trygghetsvakten, "Sorptionsavfuktare för kalla vindar", <https://trygghetsvakten.se/installation-sorptionsavfuktare/>, ändrad 2026-09-28 | "Utblåsslangen ska ledas genom en gavelventil eller annan lämplig öppning ut från vinden. Detta säkerställer att fuktig luft ventileras effektivt och inte återcirkulerar i utrymmet." | FIRMA |
| Fresh, bruksanvisning 008634-A_200116, PDF-sida 11 | "OBS: Eftersom utloppet ”fuktig luft ut” är varmt och mycket fuktigt, se till att det riktas så att det inte får någon negativ effekt på den omedelbara omgivningen." | TILLVERKARE |
| samma, PDF-sida 9 | "Utloppet ”fuktig luft ut” MÅSTE ledas ut ur rummet." | TILLVERKARE |
| Drybox, installationsmanualen "Krypgrund och Vind" (AssetDocument72013555, underlaget B3) | "för slangen genom väggen utifrån i den ventil närmast din DryBox. Denna ventil bör sitta lägre än din DryBox." | TILLVERKARE |
| Acetec, installationssidan (4.1) | "Led den fuktiga luften ut ur det utrymme som avfuktas. [...] täta genomföringen ordentligt." | TILLVERKARE |
| Acetec, ref-20012 | "ansluts till utloppsplåten som monteras på utsidan av väggen" | TILLVERKARE |

### 7.2 Gavel eller tak, och vad som ska tätas: källorna säger olika

- Drybox, "Var placerar man avfuktare på kallvind", <https://drybox.se/var-placerar-man-avfuktare-pa-kallvind/>, publicerad 2026-02-06, ändrad 2026-04-24, TILLVERKARE: "Håll därför våtluftsslangen så kort och rak som byggnaden tillåter och för den ut genom gaveln eller upp över nock. Genomföringen ska vara väl tätad mot både luft och regn. Isolera slangen i hela sin längd för att slippa kondensfällning i innerväggen."
- Ljungby Fuktkontroll, <https://www.lfs-web.se/installation-acetec-evodry-rcf20-vind-vindsavfuktare.htm>, publicerad 2026-03-31, FIRMA (säljer och installerar): "Våtgasslangen ska inte dras vertikalt uppåt för utblås genom taket. Vid sådan installation kan kondens bildas i slang samt takhuv etc. och rinna tillbaka ned mot avfuktaren. Slangen ska dras horisontellt ut som på bilderna ovan." Och: "Förlängning av medföljande våtgasslang på vinden är inte att rekommendera."
- **Oense om taket:** Drybox tillåter "upp över nock", Ljungby Fuktkontroll avråder från vertikalt genom taket. Acetec (slangen får inte förlängas, fall mot utloppsplåten) och Fresh (kanalen "bör luta nedåt") stöder i sak en kort slang med fall, alltså gaveln. Tillverkarnas egna anvisningar väger tyngst; de säger fall och kort slang, inte tak.
- **Oense om tätningen av vindens ventilation:**
  - Drybox (X-serien, B3; DryAttic) och Trygghetsvakten: täta takfotsventilationen och takventiler ("mögelstoppers"). Trygghetsvakten: "En gavelspetsventil lämnas".
  - Ljungby Fuktkontroll: "Ventilation såsom takfotsventilation, nockventilation och gavelventilation ska sättas igen."
  - Drybox X4-sidans faq: "Vid fast installation, se till att friskluftsventilerna i utrymmet täpps igen".
  - Acetec: säger inget om vindens ventilation (4.1).
  - SP (Tobin och Samuelson; Samuelson och Hägerhed Engman) och Hagentoft: vinden ska **inte vara helt oventilerad** (`guider-fukt-pa-vinden.md` 3.1). Harderup och Arfvidsson: reducerad ventilation olämplig under byggskedet.
  - Forskningen väger tyngst. Ingen forskningskälla prövar en sorptionsavfuktare på en tätad vind, så frågan "stäng allt när avfuktaren går" har inget svar av rang. Sidan kan skriva vad tillverkaren av den valda maskinen föreskriver, och att forskningen säger att vinden inte ska vara helt stängd.

### 7.3 Värme på vinden sommartid

Fresh produktsida (FAQ om överhettningsskyddet), TILLVERKARE: "Ambient temperature – Winds can e.g. get really hot during the summer." (engelsk sida, "Winds" = vindar). Fresh arbetsområde −20 till +40 °C (underlaget B4). Ingen källa ger vindens sommartemperatur i villa; K8: månadsmedel på vinden upp till +24,9 °C (Harderup och Arfvidsson 2007, figur 3, i text).

---

## 8. Interna länkar

Enligt checklistan avsnitt 9. Kontrollerat i `src/content` 2026-09-30:

| Länk | Finns | Plats |
|---|---|---|
| `/fukt/fukt-pa-vinden/` | `guider/fukt/fukt-pa-vinden.mdx` finns | H2 1 |
| `/fukt/sorptionsavfuktare/` | kunskap, publicerad | H2 2 |
| `/luftavfuktare/` | kategorisidan | H2 5 |
| `/rakna/avfuktare/` | finns, men **inget vindsförval** (avsnitt 0) | H2 3, bara om sidan säger att räknaren inte räknar vind |
| `/rakna/elkostnad/` | finns; vindsförval ej kontrollerat i denna omgång (`elkostnad.ts` har inget "vind") | H2 6, när B0 har förvalet |
| `/fukt/avfuktare-krypgrund/` | `guider/fukt/avfuktare-krypgrund.mdx` finns | en gång |

Produkter: slugs tas fram av affiliate (underlaget föreslår inga).

---

## 9. Saknas och osäkert

1. **Luftomsättning på en tätad vind eller en vind med bara gavelventiler: saknas.** Bara Harderups antagande 0,55 och Hagentofts beräknade 1 oms/h. Enda mätningen (AV1) är ett studentarbete på en 25 m² provvind med full ventilation.
2. **Uteluftens månadsmedel för oktober och november** i text: saknas i K8 och Harderup 2021. Höstvillkoret 8 °C och 90 % är ANTAGANDE.
3. **Läckage från bostaden till en befintlig villavind, uppmätt: saknas.** Bara beräkningsantaganden (2.6).
4. **Verklig drifttid** för en sorptionsavfuktare på en vind: saknas i alla källor. Elräkningarna i avsnitt 6 bygger på antagna timmar.
5. **Kapacitet vid 0–10 °C** för Fresh, Drybox X4 och RCF 20: saknas (underlaget). Räkningen i 2.7 går bara för RCF 12.
6. **Villkor för tillverkarnas yt- och volymgränser** (80/120 m², 250 m², 200/300 m³, 10–100 m², 120 kvm): inget villkor anges av någon.
7. **Fresh 80 och 120 m²** står bara i foldern från 2019 (via RSK-databasen), inte i Fresh nuvarande folder eller bruksanvisning.
8. **Våtluft tillbaka in genom ventil, avstånd mellan utlopp och ventil:** saknas (7.1).
9. **Trygghetsvaktens "verifierad av Chalmers samt Lunds Tekniska Högskola"**: inget stöd i de lästa rapporterna.
10. **Vind Classic = DryAttic**: samma tal och samma anvisningstext, inte bekräftat.
11. Uteluftens RF 95 % vid 0 °C (K3) gäller "södra Sverige under vinterhalvåret". Norrland saknas (K-avsnittet).

## 10. Källorna säger olika (samlat)

| Fråga | Källa A | Källa B | Väger tyngst |
|---|---|---|---|
| Mått för dimensionering | Acetec: m³ (200/300) | Fresh, Drybox, Trygghetsvakten: m² | var och en för sin maskin; ingen jämförbar |
| DryAttic energi, 100 m² | produktbladet: 4 kWh/m², "Ca förbrukning: 400 kWh/år" | sidan: "ca 250-400 kWh per år" | sidan (daterad 2026-04-20) |
| Trygghetsvakten max effekt | datablad 2010: 610 W | anvisning 2021: max 560 W inkl. värmeslinga | anvisningen, nyare |
| DryAttic garanti | manualen: 6 år vid registrering | sidan och bladet: 5 år | sidan |
| X4 effekt | drybox.se 850 W | installationsbeskrivningen 805 W | drybox.se (underlaget B1) |
| X4 våtluftsstos | drybox.se "Våtluftsstos 50 mm" (nu läst ordagrant) | PDF:er och PM 63 mm | PDF:erna (underlaget B1) |
| Våtluft genom taket | Drybox: "upp över nock" tillåts | Ljungby Fuktkontroll: inte vertikalt genom taket | tillverkarnas anvisningar om fall och kort slang talar för gaveln |
| Tätning av vindens ventilation | Drybox, Trygghetsvakten, Ljungby: täta takfot (och mer) | SP, Hagentoft: inte helt oventilerad; Acetec: säger inget | forskningen |
| Ånghalt 0 °C, 95 % | SP: 4,62 g/m³ | EGEN (T18, T19): 4,604 g/m³ | lika i sak; skillnad i avrundning |

## 11. Lästa och inte nådda

- **Lästa 2026-09-30 (curl, pdftotext, ordagrant):** Tobin och Samuelson B&T 4/04; Samuelson och Hägerhed Engman B&T 4/06; Harderup och Arfvidsson B&T 4/07; Sikander och Sandberg B&T 4/07; Hagentoft SBUF 11871/11955; Harderup SBUF 11765 (2021); SBUF Informerar 10:05; Acetec installera-avfuktare (efter 301), docs.acetec.se ref-20012 och ref-20020, blog.acetec.se dimensionera-avfuktare; Fresh bruksanvisning 008634-A_200116 (PM-bilaga), Fresh folder på fresh.se, Fresh folder 2019 i RSK-databasen, Fresh D-800-produktsidan (engelska); drybox.se X4, DryAttic och "Var placerar man avfuktare på kallvind"; Drybox PM-bilagor 29528729, 72013555, 72013561, 72013562; trygghetsvakten.se vindsavfuktare, installation-vind, Vind Classic, Vind Start, installation-sorptionsavfuktare, blogginlägget 2026-01-22, installationsanvisning v3.7 och datablad tvu-2009-02; Ljungby Fuktkontroll RCF 20 på vind.
- **Omdirigerade:** `trygghetsvakten.se/vindsavfuktare/fragor-svar-vindsavfuktare/energiforbrukning-pa-vinden` går till krypgrundssidan, inte till en energisida; energitalen är i stället tagna från installation-vind. `vad-ar-trygghetsvakten-vindsavfuktare` och `flakten-gar-hela-tiden` går till installation-vind.
- **Inte nådda:** `https://fresh.se/product/avfuktare/avfukter-d-800--720016` (svensk adress) gav **404**; den engelska lästes. Pettersson 2014 (examensarbetet) inte hämtat, bara via Harderup 2021. Harderup och Arfvidssons figurer 3–7 (utetemperatur per månad) går inte att läsa ur PDF:en.
- **Bara sammanfattning:** inget i detta blad. Allt som tidigare bara fanns som WebFetch-sammanfattning för drybox.se och trygghetsvakten.se är nu läst ordagrant.
