# Faktablad: /rakna/fuktkvot/

Räknarunderlag för `/rakna/fuktkvot/` (`src/lib/kalkyl/fuktkvot.ts`), beställt av koordinatorn 2026-10-04 på SEO-agentens checklista `docs/briefer/seo-checklista-2026-10-04/raknare-fuktkvot.md` punkt 5 och `fukt-6-C.md` rad C0. Checklistan nämner filnamnet `underlag-kalkyl-fuktkvot-2026-10.md`; koordinatorn bad om den här adressen. Samma innehåll, en fil.

Skrivet 2026-10-04 av underlag. "Läst 2026-10-04" betyder hämtat och läst den dagen. Citat inom citattecken är ordagranna. **EGEN** = egen räkning med formel. **ANTAGANDE** = eget val utan källa. Ingen text här är förlaga. Huvudfras: **räkna ut fuktkvot**. Sidtyp: räknare, `WebApplication`.

---

## 1. Källorna

| Kod | Källa | Rang | Adress | Datum på sidan | Läst |
|---|---|---|---|---|---|
| WH4 | Glass, S. V.; Zelinka, S. L. 2021. "Moisture Relations and Physical Properties of Wood", kap. 4 i *Wood Handbook – Wood as an Engineering Material*, USDA Forest Service, Forest Products Laboratory, FPL-GTR-282 | myndighet (USA), referensverk | <https://research.fs.usda.gov/download/treesearch/62243.pdf> (fpl.fs.usda.gov-adressen omdirigeras till en startsida) | 2021 | 2026-10-04, PDF-texten utdragen med pdftotext |
| WH13 | Bergman, R. 2021. kap. 13 "Drying and Control of Moisture Content and Dimensional Changes", samma bok | samma | <https://research.fs.usda.gov/download/treesearch/62261.pdf> | 2021 | via `underlag-fukt-sortiment-2026-09-30.md` avsnitt A, ej läst om |
| TG-S | Svenskt Trä, TräGuiden, "Fuktinnehåll och sorptionskurvor" | branschorganisation | <https://www.traguiden.se/om-tra/byggfysik/fukt/fukt/fuktinnehall-och-sorptionskurvor/> | publicerad 2003-09-01, uppdaterad 2026-07-01 | 2026-10-04, ordagrant ur HTML |
| TG-M | TräGuiden, "Mikroorganismer" | samma | <https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/bestandighet1/mikroorganismer1/> | uppdaterad 2025-01-24 | 2026-10-04 (UTDRAG, stämmer med `fukt-gemensamma-tal.md` 4.2, läst ordagrant 2026-09-30) |
| TG-FM | TräGuiden, "Fuktkvot och mätning" | samma | <https://www.traguiden.se/om-tra/byggfysik/fukt/fukt/fuktkvot-och-matning/> | publicerad 2003-09-01, uppdaterad 2026-07-01 | 2026-10-04, ordagrant ur HTML |
| TG-TF | TräGuiden, "Trä och fukt" | samma | <https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/fuktegenskaper1/tra-och-fukt/> | publicerad 2017-05-15, uppdaterad 2021-06-07 | 2026-10-04, ordagrant ur HTML |
| TG-P | TräGuiden, "Fuktkvot" (Planering) | samma | <https://www.traguiden.se/planering/byggnation-och-utforande/planering/planering/fuktkvot/> | uppdaterad 2026-03-09 | via `fukt-gemensamma-tal.md` 4.1, ej läst om |
| EN | EN 13183-1:2002 (SS-EN 13183-1), torrviktsmetoden | standard | iTeh:s förhandsvisning, via `underlag-fukt-sortiment-2026-09-30.md` del 3 | 2002 | ej läst om; gällande status i SIS ej kontrollerad |
| NV | Naturvårdsverket, "Elda med ved i kamin, spis och ugn" och "Elda med ved i vedpanna" | myndighet | <https://www.naturvardsverket.se/vagledning-och-stod/luft-och-klimat/vedeldning/elda-med-ved-i-kamin-spis-och-ugn/>, <https://www.naturvardsverket.se/vagledning-och-stod/luft-och-klimat/vedeldning/elda-med-ved-i-panna/> | granskad 2026-02-16 (fältet `lastReviewed`) | 2026-10-04, ordagrant ur sidans källkod |
| SP | SP Trä, rapport PX21326, 2012-09-20 | forskningsinstitut, test | <https://www.maleriforetagen.se/globalassets/dokumentbank-oppna/sp-ytfuktkvotsrapport-20120920.pdf> | 2012 | via `underlag-fukt-sortiment-2026-09-30.md` avsnitt A, ej läst om |

---

## 2. Läge 1: vikt (torrviktsmetoden)

### 2.1 Formeln

- Fuktkvot: **u = (m_våt − m_torr) / m_torr × 100 %**
  - WH4 s. 4-1, ekvation (4-2), ordagrant: "MC = (m wet − m dry) / m dry × 100%", "where mwet is the mass of the specimen at a given moisture content and mdry is the mass of the ovendry specimen."
  - EN avsnitt 6: u = (m1 − m0) / m0 × 100, redovisas med 0,1 procentenhet (via sortimentsunderlaget).
  - TG-TF, ordagrant: "Fuktkvot definieras som kvoten av vattnets massa i fuktigt material och massan av det uttorkade materialet. Kvoten brukar anges i %."
- Fukthalt: **w = (m_våt − m_torr) / m_våt × 100 %**
  - TG-TF, ordagrant: "Fukthalt, som används i vissa skogliga såväl som träteknologiska sammanhang, till exempel trädbränslen, definieras som kvoten av vattnets massa i fuktigt material och massan av det fuktiga materialet."
  - TG-FM, ordagrant: "Det definieras som kvoten av vattnets massa i en fuktig träbit och massan av den fuktiga träbiten, uttryckt i viktsprocent. Fukthalt används till exempel inom jordbruket och ibland även inom skogsbruket och träbränslesektorn."

### 2.2 Metodens villkor

- TG-FM, ordagrant: "Torrviktsmetoden innebär att man först väger en virkesbit, torkar den i ugn i 103 ± 2 °C till dess vikten inte förändras mer än maximalt 0,1 procent på två timmar, och därefter väger den helt torra virkesbiten igen."
- TG-FM, ordagrant: "Metoden som beskrivs i standarden SS-EN 13183-1 är på samma gång själva definitionen på fuktkvot och den enda praktiskt tillgängliga metoden att exakt bestämma fuktkvot. Nackdelen är förstås att metoden förstör provet och tar relativt lång tid."
- EN: våg 0,1 g om torr provbit över 100 g, annars 0,01 g; provskiva minst 20 mm längs fibrerna, minst 300 mm från änden (sortimentsunderlaget del 3).
- Hemugn: ingen källa säger att den duger (sortimentsunderlaget). Räknaren kan inte veta hur biten torkats. Beskedet ska säga villkoret, inte påstå att hemugnen räcker.

### 2.3 Gränser för indata (**ANTAGANDE**, UX bestämmer)

- m_torr > 0 och m_våt ≥ m_torr. Om m_våt < m_torr är talen förväxlade; räknaren bör säga det, inte räkna.
- Ingen övre gräns i formeln. Rå ved och färskt virke ligger långt över 30 %: WH4 s. 4-1, ordagrant: "The moisture content of green wood can range from about 30% to more than 200%."

### 2.4 Testfall (**EGEN**, formlerna ovan)

| m_våt, g | m_torr, g | Fuktkvot u | Fukthalt w |
|---|---|---|---|
| 1 100 | 1 000 | 10,0 % | 9,1 % (9,09) |
| 1 150 | 1 000 | 15,0 % | 13,0 % |
| 1 200 | 1 000 | 20,0 % | 16,7 % |
| 2 000 | 1 000 | 100,0 % | 50,0 % |
| 1 000 | 1 000 | 0,0 % | 0,0 % |

---

## 3. Läge 3: fukthalt till fuktkvot och tillbaka

- **u = w / (1 − w)** och **w = u / (1 + u)**, båda som decimaltal. **EGEN** härledning ur definitionerna i 2.1 (m_vatten = m_våt − m_torr).
- Fukthalten kan aldrig nå 100 %; fuktkvoten kan överstiga 100 % (WH4, "more than 200%").

Testfall (**EGEN**):

| Fukthalt w | Fuktkvot u |
|---|---|
| 10 % | 11,1 % |
| 15 % | 17,6 % |
| 20 % | 25,0 % |
| 50 % | 100,0 % |

| Fuktkvot u | Fukthalt w |
|---|---|
| 15 % | 13,0 % |
| 16 % | 13,8 % |
| 18 % | 15,3 % |
| 20 % | 16,7 % |
| 30 % | 23,1 % |

---

## 4. Läge 2: jämviktsfuktkvot ur luftens RF och temperatur

### 4.1 Modellen

**Hailwood–Horrobin-ekvationen i den form som står i Wood Handbook 2021**, WH4 s. 4-3, ekvation (4-5). Konstanterna ordagrant ur PDF:en:

```
EMC(%) = 1800 / W × [ K·h / (1 − K·h) + (K1·K·h + 2·K1·K2·K²·h²) / (1 + K1·K·h + K1·K2·K²·h²) ]
```

"where h is relative humidity (decimal, 0 ≤ h ≤ 1) and the parameters W, K, K1, and K2 depend on temperature:"

"For temperature T in °C,"

| Parameter | Ordagrant |
|---|---|
| W | `W = 349 + 1.29T + 0.0135T2` |
| K | `K = 0.805 + 0.000736T - 0.00000273T2` |
| K1 | `K1 = 6.27 - 0.00938T - 0.000303T2` |
| K2 | `K2 = 1.91 + 0.0407T - 0.000293T2` |

(T2 = T². Samma konstanter i °F står också på sidan: W = 330 + 0.452T + 0.00415T², K = 0.791 + 0.000463T − 0.000000844T², K1 = 6.34 + 0.000775T − 0.0000935T², K2 = 1.09 + 0.0284T − 0.0000904T². Används inte.)

- **Namnet.** Ordet "Hailwood–Horrobin" står **inte** i WH4. Sidan säger: "These values have been calculated from the following equation" och "Simpson (1973) showed that this equation provides a good fit to the EMC data tabulated in the 1955 edition of the Wood Handbook." Källan bakom är Simpson, W. T. 1973, "Predicting equilibrium moisture content of wood by mathematical models", *Wood and Fiber* 5(1): 41–49 (WH4:s litteraturlista), som inte är läst. Att formen är Hailwood–Horrobins (två hydrat) är etablerat i litteraturen men **inte kontrollerat i en läst källa i dag**. Säkrast på sidan: "ekvationen i USDA:s Wood Handbook (2021, kap. 4)".
- **Mitt genomförande är kontrollerat mot WH4:s egen tabell 4-2** (s. 4-4), som enligt sidan är räknad med ekvationen. **EGEN** räkning, se 4.3.
- **Tabellens kvalitet**, WH4 s. 4-4, ordagrant: "The level of precision (0.1% MC) in Table 4-2 is provided only for the purpose of illustrating trends in EMC with temperature and RH. In reality, this level of precision is not meaningful. Actual EMC may vary considerably among wood species and among different specimens of the same species." och "differences in EMC among wood species generally are minor at low and moderate levels of relative humidity but become considerable at high RH levels".
- **Mellan uppfuktning och uttorkning**, WH4 s. 4-4, ordagrant: "EMC values in Table 4-2 were derived primarily for Sitka spruce under conditions described as oscillating vapor pressure desorption (Stamm and Loughborough 1935), which was shown to represent a condition midway between absorption and desorption. The tabulated EMC values thus provide a suitable and practical compromise for use when the direction of sorption is not always known."

### 4.2 Giltighetsområde

- WH4 anger **inget** uttryckligt giltighetsområde för ekvation (4-5). Den definieras för 0 ≤ h ≤ 1.
- Tabell 4-2, som ekvationen räknat fram, täcker **−1,1 till 132,2 °C** (30 till 270 °F) och **5 till 95 % RF**. Utanför det är det **EGEN** extrapolation.
- Vid h = 1 ger ekvationen ett ändligt tal, 28,8 % vid 20 °C (**EGEN**), nära fibermättnaden "omkring 30 %" (TG-FM). Över 95 % RF ska räknaren inte visa ett exakt tal. **ANTAGANDE:** visa "över 24 %" eller "nära fibermättnad".
- Svensk krypgrund och kallvind vintertid ligger under −1,1 °C. Ekvationen beter sig lugnt där (−10 °C, 85 % → 18,4 %, mot 18,5 % vid −1,1 °C), men det är extrapolation. **ANTAGANDE**, förslag: tillåt −20 till +40 °C, märk under −1 °C i beskedet.

### 4.3 Kontroll av genomförandet mot WH4 tabell 4-2 (**EGEN**)

Ekvationen räknad med konstanterna ovan, mot tabellens tal:

| °C | RF | Ekvationen | Tabell 4-2 |
|---|---|---|---|
| 21,1 | 5 % | 1,30 | 1,3 |
| 21,1 | 30 % | 6,17 | 6,2 |
| 21,1 | 50 % | 9,24 | 9,2 |
| 21,1 | 75 % | 14,41 | 14,4 |
| 21,1 | 85 % | 17,95 | 17,9 |
| 21,1 | 95 % | 23,89 | 23,9 |
| −1,1 | 75 % | 14,91 | 14,9 |
| −1,1 | 95 % | 24,33 | 24,3 |
| 37,8 | 50 % | 8,68 | 8,7 |
| 37,8 | 90 % | 19,48 | 19,5 |

Alla stämmer på avrundningen utom 21,1 °C och 85 %, där ekvationens 17,95 avrundas till 18,0 mot tabellens 17,9: den punkten avviker med 0,05 på grund av avrundningen. Konstanterna är rätt avlästa.

### 4.4 Kontroll mot TräGuiden (**EGEN** räkning; TräGuidens tal ordagranna)

**Mot TG-M tabell 2**, "Ungefärliga fuktkvoter vid 20 °C för olika värden på relativ luftfuktighet", och TG-S:s konditionering:

| Punkt, 20 °C | Modellen | TräGuiden | Avvikelse, procentenheter | Källa |
|---|---|---|---|---|
| 65 % RF | 12,00 | 12–13 (gran och furu) | inom, på nedre kanten | TG-S: "Efter konditionering vid + 20° C och 65 % relativ luftfuktighet är fuktkvoten normalt: 12 - 13 % för gran- och furuvirke" |
| 75 % RF | 14,45 | 15 | −0,55 | TG-M tabell 2 |
| 80 % RF | 16,04 | 16 | +0,04 | samma |
| 85 % RF | 18,00 | 18 | 0,00 | samma |
| 90 % RF | 20,53 | 21 | −0,47 | samma |
| 95 % RF | 23,94 | 24 | −0,06 | samma |

- **Största avvikelsen mot tabell 2 är 0,55 procentenheter, vid 75 %.** Under gränsen på en procentenhet i checklistan punkt 5.2.
- **Avrundningen avgör vad läsaren ser.** Avrundat till heltal ger modellen 14 vid 75 % där TräGuiden och klustrets sidor skriver 15 (`fukt-i-krypgrund.mdx` rad 138: "runt 15 procent fuktkvot"). Med en decimal står det 14,5. UX och SEO väljer: visa modellens tal med en decimal och "ungefär", eller låt TräGuidens tabell styra vid 20 °C. Inget medelvärde.

**Mot klimatklasserna** (TG-S tabell 1, Eurokod 5, ordagrant): klimatklass 1 "en temperatur av 20°C och en relativ luftfuktighet som överskrider 65 % endast några få veckor per år. (Medelfuktkvoten i de flesta barrträslagen överskrider inte 12 % i Klimatklass 1.)"; klimatklass 2 samma vid 85 % och "överskrider inte 20 %".

| Punkt | Modellen | TräGuiden | Stämmer |
|---|---|---|---|
| 20 °C, 65 % | 12,00 | högst 12 | ja, på gränsen |
| 20 °C, 85 % | 18,00 | högst 20 | ja |

**Mot årstidsvärdena** (TG-TF; RF och fuktkvot står som separata intervall och TräGuiden anger ingen temperatur. Temperaturen nedan är **ANTAGANDE**):

| Läge | RF (TräGuiden) | Antagen temp | Modellen | Fuktkvot (TräGuiden) | Stämmer |
|---|---|---|---|---|---|
| Inne, uppvärmt, vinter | 10–25 % | 20 °C | 2,5–5,4 | 2–6 % | ja |
| Inne, uppvärmt, sommar | 45–60 % | 20 °C | 8,5–11,0 | 7–12 % | ja |
| Inne, årsmedel | – | 20 °C | 7,5 % motsvarar 38,5 % RF | 7,5 % | (omvänd räkning) |
| Ute, sommar | 65–75 % | 15 °C | 12,2–14,6 | 11–15 % | ja |
| Ute, vinter | 90–95 % | 0 °C | 21,0–24,3 | 19–23 % | **nej, +2,0 i nedre och +1,3 i övre änden** |
| Ute, vinter | 90–95 % | −5 °C | 21,0–24,3 | 19–23 % | samma |

- **Ute vinter avviker mer än en procentenhet.** Modellen ger 21–24, TräGuiden 19–23. Temperaturen förklarar det inte (modellen ändras knappt mellan −5 och +5 °C). Ingen läst källa förklarar skillnaden. Mot TG-M:s egen tabell 2 (90 → 21, 95 → 24) stämmer modellen; TräGuidens två sidor säger alltså själva olika. Förvalet "ute vinter" bör visa TG-TF:s 19–23 % som källa, eller räknas med modellen och märkas; UX och SEO väljer. TräGuidens tabell väger tyngst i Sverige (checklistan 5.2).

Inputdata ordagranna: TG-TF: "I uppvärmda svenska bostäder i Mellansverige är fuktkvoten i virke under hela året i medeltal 7,5 % och den är högst sommartid (7–12 %) och lägst vintertid (2–6 %)." och "RF och därmed träets jämviktsfuktkvot är lägst på sommaren (65–75 % respektive 11–15 %) och högst på vintern (90–95 % respektive 19–23 %)." och "RF i luften inomhus i uppvärmda rum är därför högst på sommaren (45–60 %) och lägst på vintern (10–25 %)."

### 4.5 Temperaturens inverkan på jämvikten

- TG-S, ordagrant: "Sambandet varierar något med temperaturen. Vid en och samma RF minskar träets fuktkvot med ökad lufttemperatur."
- Modellen vid 85 % RF (**EGEN**): −10 °C 18,4 · 0 °C 18,5 · 10 °C 18,4 · 20 °C 18,0 · 25 °C 17,8. Mellan 0 och 25 °C skiljer det under en procentenhet. Temperaturen i jämviktsläget betyder lite i husets temperaturer; RF betyder allt.

### 4.6 Hysteres, osäkerheten i beskedet

- TG-S, ordagrant: "Adsorptionskurvan ligger alltid under desorptionskurvan. I en träbit som fuktas upp är jämviktsfuktkvoten därför lägre än vid torkning av samma träbit." och "Vid 50 % RF varierar skillnaden i jämviktsfuktkvot mellan 1 och 4 %-enheter."
- WH4: tabellen ligger mitt emellan uppfuktning och uttorkning (citat i 4.1).
- Följd för beskedet: talet är ett ungefär. Ett trä som torkar ligger över, ett som fuktas upp under. **Storleken 1–4 är bara belagd vid 50 % RF**; vid andra RF finns inget läst tal.

### 4.7 Tid

- Ingen läst källa ger hur lång tid det tar för en bräda att nå jämvikt. WH4 s. 4-3 säger bara att förändringarna "usually are gradual, and short-term fluctuations tend to influence only the wood surface". Checklistans "veckor" i "Gör inte det här" har **ingen källa** här. **Saknas.**

### 4.8 Räknetabell till sidan (**EGEN**, ekvation 4-5)

Jämviktsfuktkvot, %, vid 20 °C:

| RF | 30 % | 40 % | 50 % | 60 % | 65 % | 70 % | 75 % | 80 % | 85 % | 90 % | 95 % |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Modellen | 6,2 | 7,7 | 9,3 | 11,0 | 12,0 | 13,1 | 14,5 | 16,0 | 18,0 | 20,5 | 23,9 |
| TräGuiden (TG-M, TG-S) | – | – | – | – | 12–13 | – | 15 | 16 | 18 | 21 | 24 |

Testfall för `fuktkvot.ts` (**EGEN**, två decimaler): 20 °C/50 % → 9,27; 20 °C/75 % → 14,45; 20 °C/85 % → 18,00; 20 °C/95 % → 23,94; 5 °C/85 % → 18,47; 2 °C/83 % → 17,66; 21,1 °C/75 % → 14,41 (tabell 4-2: 14,4).

Omvänt, RF som ger en viss fuktkvot vid 20 °C (**EGEN**, bisektion på ekvation 4-5): 8 % → 41,8 % RF; 12 % → 65,0; 15 % → 76,8; 16 % → 79,9; 18 % → 85,0; 20 % → 89,1; 23 % → 93,8.

### 4.9 Alternativ ekvation, används inte

WH4 s. 4-3 ger också Glass m.fl. 2014, ekvation (4-6), med konstanterna för T i kelvin: "A = -0.000612, B = 2.43, C = 0.0577, D = 0.430, Tc = 647.1". **Ekvationens form gick inte att läsa säkert ur PDF-texten** (sättningen bryts upp). Min tolkning, EMC = 100 · [A·T·(1 − T/Tc)^B · ln(1 − h)]^(C·T^D), ger 9,4/14,9/24,9 vid 21,1 °C och 50/75/95 %, alltså upp till en procentenhet över tabell 4-2 och TräGuiden vid hög RF. Okontrollerad. Rekommenderas inte; ekvation (4-5) är den som stämmer med båda tabellerna.

### 4.10 Förvalen: talet för luften är inte talet vid träet

Daggpunktens förval (`src/lib/kalkyl/daggpunkt.ts`, `FORVAL_PER_RUM`, läst 2026-10-04): sovrum 21 °C/45 %, källare 20 °C/70 % (yta 12), krypgrund 20 °C/70 % (yta 10), vind 2 °C/83 % (yta 0), garage 20 °C/70 % (yta 10). `NORMALT_PER_RUM`: bostad vinter 10–25 / sommar 45–60 (TG-TF), krypgrund högst 75 (Olsson, SP), vind vinter 79–88 / sommar under 75 (LTH), källare under 75 (Villaägarna).

Modellen på samma tal (**EGEN**): sovrum 21/45 → 8,5 %; källare och krypgrund och garage 20/70 → 13,1 %; vind 2/83 → 17,7 %; vind vinter 79 och 88 % vid 2 °C → 16,2 och 19,9 %.

- **Fälla:** träet i en krypgrund har ytans temperatur, inte luftens. Luft på 20 °C och 70 % mot en syll på 10 °C ger över 100 % RF vid syllen (**EGEN**, Magnus-formeln T18 i `fukt-gemensamma-tal.md`: e = 0,70 × 23,4 hPa = 16,4 hPa; mättnadstryck vid 10 °C 12,3 hPa), alltså kondens och inget jämviktstal. Jämviktsläget ska räknas med RF och temperatur **vid träet**. Daggpunktens sommarförval för krypgrund och källare (20/70) kan därför inte tas rakt över till träets förval utan ett beslut. Förslag till förval som har källa direkt i RF: krypgrund vid "säker nivå" 75 % (Olsson, SP) → 14,5–14,9 % beroende på temperatur; kallvind vinter 79–88 % (LTH) vid 2 °C → 16,2–19,9 %. Temperaturen är **ANTAGANDE** i båda.
- Ute sommar och ute vinter: se 4.4, TG-TF.

---

## 5. Gränserna räknaren jämför mot

Alla ur `fukt-gemensamma-tal.md` avsnitt 4 (T22–T32), lästa om i dag där annat inte står.

| Användning | Gräns | Ordagrant | Källa |
|---|---|---|---|
| Inbyggnad | ytfuktkvot högst 18 % | "Ytfuktkvoten får vara högst 18 % vid inbyggnad och högst 16 % vid ytbehandling." (TG-FM); TG-S: "Vid inbyggnad får ytfuktkvoten inte överskrida 18 % i någon mätpunkt … Kontrollera att medelfuktkvoten är högst 16 %." | TG-FM, TG-S (2026-10-04) |
| Målning | ytfuktkvot högst 16 % | samma; TG-S: "Ytfuktkvot har betydelse för vidhäftning vid målning på träytan och får vara högst 16 %." | samma |
| Målfuktkvot vid leverans | 8 / 12 / 16 % | TG-S tabell 3: "8 Golvbräder inomhus i uppvärmda utrymmen." "12 Synliga beklädnader, lister samt undergolv i uppvärmda utrymmen." "16 Virke och limträ för inbyggnad samt utvändiga panelbräder." | TG-S (2026-10-04), samma som TG-P |
| Tillåten spridning, målfuktkvot 16 | parti 13,5–18 %; 93,5 % av bitarna 11,2–20,8 % | TG-S tabell 4 (SS-EN 14298): 8 → 7,0–9,0 / 5,6–10,4; 12 → 10,5–13,5 / 8,4–16,6; 16 → 13,5–18,0 / 11,2–20,8 | TG-S |
| Mögel | luftens RF 75–80 % över tid; ytfuktkvoten styr; ca 15 % vid 75 % och 16 % vid 80 % (20 °C) | "det är ytfuktkvoten som ska kontrolleras för att undvika mögelpåväxt"; "Är materialet torrt och den relativa luftfuktighet lägre än 75 % kan inget angrepp utvecklas." | TG-M, T2, T6, T22 |
| Röta, liten risk | under 20 % | "Om fuktkvoten är under 20 % är risken för angrepp av rötsvampar liten." | TG-M, T23 |
| Röta etablerar sig | över 30 % | "fuktkvoten är över 30 %, optimum ligger mellan 40 och 80 % beroende på svampart" | TG-M, T24 |
| Fibermättnad | ca 30 % | "Fibermättnad ligger oftast omkring 30 % fuktkvot." | TG-FM (2026-10-04, ordagrant) |
| Ved | **fukthalt** 15–20 % ("lagom torr") | "Veden ska vara lagom torr. Det innebär att den har en fukthalt på 15–20 procent." (kamin); "Veden ska vara lagom torr, vilket innebär en fukthalt på 15–20 procent." (panna) | NV (2026-10-04) |
| Ved, för torr | fukthalt under 10 % | "Ett väldigt torrt vedträ med en fukthalt under tio procent brinner upp fort och ger lite mindre värme. Dessutom blir utsläppen av föroreningar som sot och kolväten lite högre" | NV, kamin |
| Ved, nyhuggen | fukthalt runt 50 % | "Under den tiden hinner vedens fukthalt minska från runt 50 procent som nyhuggen till runt 15–20 procent." | NV, panna |

**Veden i fuktkvot** (**EGEN**, u = w / (1 − w)): fukthalt 15–20 % = **fuktkvot 17,6–25,0 %**; fukthalt 10 % = fuktkvot 11,1 %; fukthalt 50 % = fuktkvot 100 %. NV definierar inte ordet fukthalt på sidorna. Att de menar fukthalt på våt vikt (TG-TF:s definition, "till exempel trädbränslen") är rimligt men inte uttalat. En fuktmätare för trä visar fuktkvot (TG-FM). Det är skälet till räknarens tredje läge.

Lägre rang, används inte som gräns (`fukt-gemensamma-tal.md` 4.6 och checklistan punkt 12): Ljungby Fuktkontroll 17 och 24 %, Byggello 16–18 %, säljarnas mögelgräns 17–18 och rötgräns 24 %, sökverktygets tabell, ernstp.se.

---

## 6. Vad en resistiv fuktmätare visar vid olika temperatur

Ur `underlag-fukt-sortiment-2026-09-30.md` avsnitt A, ej läst om i dag. Används i text, inte som korrigering i räknaren (checklistan punkt 12).

| Källa | Ordagrant | Per 10 °C (**EGEN**) |
|---|---|---|
| SP PX21326 (2012) | "mätvärdet ändras 0,1-0,15%-enheter per grad °C från 20°C"; tumregeln "Dra ifrån 1,6% per 10°C från avläst värde över 20°C och lägg till 1,6% per 10°C från avläst värde under 20°C" | 1,0–1,5; tumregeln 1,6 |
| WH13 (2021), s. 13-3 | "adding or subtracting about 0.5% for each 5.6 °C (10 °F) the wood temperature differs from the calibration temperature. Add the correction factors to the readings for temperatures less than the calibration temperature and subtract from the readings for temperatures greater than the calibration temperature." | ca 0,9 (0,5 × 10/5,6) |
| WH4 (2021), avsnittet "DC Electrical Properties" | "Unlike conductivity of metals, the conductivity of wood increases with increasing temperature." (läst 2026-10-04) | ingen storlek |

- **Källorna säger olika:** ca 0,9 mot 1,0–1,6 procentenheter per 10 °C. Inget medelvärde. SP väger tyngst för svensk text (nordisk gran och furu, referens 20 °C, fältmätning). WH13 räknar från tillverkarens kalibreringstemperatur, inte 20 °C.
- **Riktningen:** kallt trä visar för lågt, varmt trä för högt (båda).
- **Exempel i ord** (**EGEN**, SP:s tumregel): en mätare kalibrerad vid 20 °C som visar 16 % i en syll på 0 °C motsvarar ungefär 19 % (16 + 2 × 1,6 = 19,2). Med WH13 ungefär 17,8. Läsaren under 18 kan alltså ligga över.
- Mätarens noggrannhet, TG-FM ordagrant: "bara kan förväntas ge ett mätresultat som ligger inom ungefär ± 2 % från den sanna fukt­kvoten för ett enskilt virkesstycke."
- TG-FM (uppdaterad 2026-07-01) nämner **inte** längre temperaturkorrektion. Meningen "uppmätta värden måste korrigeras för rådande temperatur och träslag" stod på den äldre adressen (uppdaterad 2021-06-14, sortimentsunderlaget) och ska inte citeras som TräGuidens gällande text.

---

## 7. Interna länkar som ska finnas

Ur checklistan punkt 9, ingen ändring: ut till `/fukt/fuktkvot/`, `/fuktmatare/`, `/rakna/daggpunkt/`, `/fukt/hussvamp/`. In från `/fukt/fuktkvot/` (inbäddning), `/fuktmatare/`, `/fukt/hussvamp/` rad 153, `/fukt/fukt-i-krypgrund/` rad 138. Inga produkter, `reklam={false}`.

---

## 8. Osäkert och saknas

1. **Namnet Hailwood–Horrobin** står inte i WH4. Simpson 1973 är inte läst. Skriv "ekvationen i Wood Handbook".
2. **Ute vinter**: modellen 21–24 % mot TG-TF 19–23 %, upp till 2 procentenheter. Beslut hos UX och SEO.
3. **Avrundningen vid 75 %**: modellen 14,5 mot TräGuiden och klustret 15.
4. **Under −1,1 °C och över 95 % RF** är extrapolation.
5. **Tid till jämvikt**: ingen källa. "Veckor" kan inte stå som fakta.
6. **Hysteres** bara belagd vid 50 % RF (1–4 procentenheter).
7. **Träslag**: WH4 säger att skillnaden blir "considerable at high RH levels" men ger inga tal per art. Ingen korrigering för träslag.
8. **NV:s "fukthalt"** definieras inte på deras sidor.
9. **Energimyndigheten och Skogsstyrelsen** om ved: ej lästa. Sökmotorns sammanfattning tillskrev Energimyndigheten "15–20 procent" utan att visa sidan; inte kontrollerat, används inte. NV räcker som myndighet.
10. **EN 13183-1** och **SP PX21326** inte lästa om i dag; citaten är sortimentsunderlagets från 2026-09-30.
11. **Förval i krypgrund och källare**: daggpunktens 20 °C/70 % gäller luften, inte träet (4.10).
12. **Klustret**: `hussvamp.mdx` rad 153 skriver att träet når "ungefär 23 procent fuktkvot när luften … runt 92 procent". Linjär interpolation i TG-M:s tabell ger 23 % vid 93,3 % RF, modellen vid 93,8 %. Avvikelsen är liten, men "runt 92" kommer inte ur tabellen. Noteras, inte ändrat.
