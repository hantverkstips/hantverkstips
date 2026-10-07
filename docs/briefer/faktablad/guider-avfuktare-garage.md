# Faktablad: guider/fukt/avfuktare-garage

Ny sida. `/fukt/avfuktare-garage/` · `src/content/guider/fukt/avfuktare-garage.mdx` · samling guider, `typ: kopguide`, `pelare: fukt`, `niva: mellan`. Huvudfras **avfuktare garage** (320/mån, topp januari). Sidofraser: luftavfuktare garage, avfuktare kallt garage (brödtext), sorptionsavfuktare garage (H2 om typ). Checklista: `docs/briefer/seo-checklista-2026-09-29/fukt-4.md`, avsnittet /fukt/avfuktare-garage/. Produktunderlaget till affiliateagenten står i `docs/briefer/underlag-avfuktare-garage-2026-09-29.md` (uppdrag 1); det här bladet hänvisar dit och upprepar bara det sidan skriver från.

Allt hämtat 2026-09-29 om inget annat står. "Egen räkning" är märkt med formel.

---

## 0. Besked till hantverkaren

- **Temperaturgränsen är sajtens, och den är 10 grader.** `/fukt/sorptionsavfuktare/` och `/rakna/avfuktare/` säger: under 10 grader bara sorption, 10 till 15 tappar kondens det mesta, över 15 kondens. Källorna bakom står i `kunskap-sorptionsavfuktare.md` H2 2 (Dantherm 8 grader, Ljungby Fuktkontroll 15 grader, Meaco en tiondel av märkvärdet vid 10 grader). Duabs "+15" och "+10" i SERP:en är butiker. Använd inget nytt tal.
- **Tillverkarnas egna lägsta temperaturer är något annat än gränsen.** Wood's MDK21 +5 °C, Wood's SW-serien +2 °C, Acetec 6H 2.0 och Fresh −20 °C (avsnitt 3). Bärande mening från granskningen av SW39FW (`tester-woods-sw39fw.md`): att en maskin startar vid 2 grader är inte att den avfuktar där.
- **Ingen bruksanvisning förbjuder garage.** Alla fem som lästs listar garage som användning. Två säkerhetsregler finns: Acetec förbjuder "aggressiva eller explosiva gaser", Wood's (R290) förbjuder förvaring i rum med ständigt använda tändkällor och brännbart nära maskinen. Ingen nämner bensin, bil eller lösningsmedel med de orden. Avsnitt 4.
- **Wood's motsäger sig själv om värmare.** Samma manual som säger "förvaras inte i rum där kontinuerligt använda tändkällor finns (… elektriska värmare)" råder att använda "värmeelement eller värmefläkt" för att hålla över +5 (MDK21) eller +2 (SW). Skriv inte råd om värmefläkt bredvid en R290-maskin utan att säga det.
- **Räknaren ger inget svar vid 5 grader.** Valet "Kallt, under 5 grader" ger utanför-texten; "Ouppvärmt, 5 till 15 grader" räknar på 10 grader. Tabellen i 2B har därför bara 10 grader. Se underlaget avsnitt 2.
- **Ingen sorptionsavfuktare under 15 000 kr hos Proffsmagasinet har kapacitet vid räknarens villkor (20 °C, 60 %) som räcker till dubbelgaraget.** Underlaget avsnitt 3. Sidan säger då, enligt affiliatebeslutet: "jag har inte granskat någon i den storleken".
- **Pris har ändrats.** Acetec EvoDry 6H 2.0 kostar 10 588 kr hos Proffsmagasinet 2026-09-29, restnoterad; granskningen och affiliatebeslutet säger 9 995 kr (16 sep). Granskningssidan behöver uppdateras.
- **Wood's MDK21: effekten skiljer.** Butiken 240 W, Wood's bruksanvisning (rev. 2022-05-02) 275 W vid 30 °C och 80 %. Båda i tabellen, tillverkaren väger tyngst.

---

## 1. Kortsvaret, talen

| Påstående | Tal | Källa | Adress | Datum |
|---|---|---|---|---|
| Kondensavfuktare tappar det mesta under ca 10 °C, sorption arbetar i kyla | gräns 10 °C (sajtens), spannet 8–15 °C mellan källorna | `kunskap-sorptionsavfuktare.md` H2 2; Dantherm, Ljungby Fuktkontroll, Meaco | se det faktabladet | läst 2026-09-20 |
| Korrosion på stål i luft praktiskt taget noll under | 60 % RF | Stålbyggnadsinstitutet (SBI), "Rostskydd": "I luft sker praktiskt taget ingen korrosion under 60 procents relativ luftfuktighet." | https://www.sbi.se/rostskydd-2/ | odaterad, läst 2026-09-29 |
| Standardens mått på "våt yta" | RF över 80 % vid temperatur över 0 °C | ISO 9223:2012, bilaga B: "The length of time during which the relative humidity is greater than 80 % at a temperature greater than 0 °C is used to estimate the calculated time of wetness" | https://www.eskom.co.za/wp-content/uploads/2024/04/Appendix_5.8.E_SO_9223_2012en.pdf (licensierad kopia publicerad som bilaga av Eskom) | standard 2012, läst 2026-09-29 |
| Mål i räknaren | 55 % RF | `src/lib/kalkyl/avfuktare.ts`, `MAL_RF`, med BFS 2024:8 7 kap. 1 § (75 %) som tak | – | – |
| Elkostnad | se avsnitt 5 | egen räkning | – | – |

- **Två tal för korrosion, inget medelvärde.** SBI (branschorganisation för stålbyggnad) ger 60 %. ISO 9223 använder 80 % som gräns för beräknad "time of wetness" (tiden ytan räknas som våt), inte som gräns för att rost börjar. SBI väger tyngst för frågan "vid vilken RF börjar verktygen rosta"; ISO förklarar varför kondens och snö gör det värre. Ettans (polarpumpen.se) 60 % utan källa stämmer alltså med SBI.
- ISO 9223 tabell C.1, ordagrant om korrosivitetsklass C2 inomhus: "Unheated spaces with varying temperature and relative humidity. Low frequency of condensation and low pollution, e.g. storage, sport halls". C3 utomhus: "coastal areas with low deposition of chlorides"; C4: "exposure to strong effect of de-icing salts". Ett garage med saltig bil nämns inte; kopplingen är egen läsning och skrivs inte som standardens.
- Ingen myndighet (Boverket, Folkhälsomyndigheten) med garage-RF hittad. **Saknas.**

---

## 2. Storlek: vad /rakna/avfuktare/ ger

Körd 2026-09-29 mot `src/lib/kalkyl/avfuktare.ts` (esbuild + node), takhöjd 2,4 m (antagande, ingen källa för garagets takhöjd). "Märkt" = kapacitet att leta efter på lådan vid räknarens villkor.

### 2A. Villkoret som talet gäller vid

- Ouppvärmt 5 till 15 grader: räknar på **10 °C**, typ **sorption**, märkt kapacitet vid **20 °C och 60 % RF**, faktor 0,80 (0,75–1,0).
- Uppvärmt över 15: räknar på **15 °C**, typ **kondens**, märkt vid **30 °C och 80 % RF**, faktor 0,30 (0,25–0,35).
- Kallt under 5: **inget tal**, text: "Under 5 grader tappar även en sorptionsmaskin farten, och en kondensmaskin står stilla. …"

### 2B. Tabell (egen körning av räknaren)

| Garage | Yta | Fuktnivå | Ouppvärmt (10 °C), sorption: verklig l/dygn · märkt l/dygn [spann] | Uppvärmt (15 °C), kondens: verklig · märkt [spann] |
|---|---|---|---|---|
| Enkel | 18 kvm | medel | 4 · 5 [4–5] | 3 · 8 [7–10] |
| Enkel | 18 kvm | hög | 5 · 6 [5–6] | 4 · 11 [9–13] |
| Enkel | 25 kvm | medel | 5 · 7 [5–7] | 4 · 11 [10–13] |
| Enkel | 25 kvm | hög | 6 · 8 [6–8] | 5 · 15 [13–18] |
| Dubbel | 35 kvm | medel | 7 · 9 [7–10] | 5 · 15 [13–18] |
| Dubbel | 35 kvm | hög | 9 · 11 [9–12] | 6 · 20 [18–24] |
| Dubbel | 50 kvm | medel | 10 · 13 [10–14] | 7 · 22 [19–26] |
| Dubbel | 50 kvm | hög | 12 · 15 [12–16] | 9 · 29 [25–35] |

- Medel = 60–70 % RF, hög = 70–80 % (räknarens etiketter). Enkelgarage 18–25 kvm och dubbelgarage 35–50 kvm är affiliatebeslutets spann, inte en källa.
- Räknarens antaganden (luftomsättning 0,5 oms/h, markfukt 10/40 g/m² och dygn för betongplatta, augustiluft 10 g/m³) gäller en källare. Att de gäller ett garage med port är **antagande utan källa**. Ett otätt garage har högre luftomsättning; räknaren vet inte det.
- Mot Acetec EvoDry 6H 2.0 (7,4 l vid 20 °C/60 %): räcker enligt räknaren till 18 kvm båda fuktnivåerna och 25 kvm medel (7 ≤ 7,4), inte 25 kvm hög (8) och inget dubbelgarage. Samma slutsats som granskningens "20 kvm vid 75 procent i en källare på 10 grader".

---

## 3. Tabell till H2 2: sorption mot kondens ur datablad

Ur tillverkarnas bruksanvisningar och datablad. Pris Proffsmagasinet 2026-09-29, läst på produktsidan (schema.org `price`). Full källförteckning i underlaget.

| Maskin | Typ | Lägsta arbetstemp. (tillverkaren) | Kapacitet och testvillkor | Effekt | Ljud | Pris 29 sep |
|---|---|---|---|---|---|---|
| Wood's MDK21 | kondens | +5 °C | 20 l/dygn vid 30 °C, 80 % | 275 W vid 30 °C, 80 % (manual); 240 W (butiken) | högst 48 dB (butiken via `kunskap-sorptionsavfuktare.md`), avstånd ej angivet | 3 118 kr |
| Wood's SW39FW | kondens | +2 °C (butiken; manual för SW39FW ej hittad) | 19 l/dygn, villkor ej angivet för SW39FW. Systermodellen SW38F: 19 l vid 30 °C/80 %, **11 l vid 20 °C/70 %** | 320 W (butiken); SW38F 320 W vid 20 °C/70 %, 7,3 kWh/dygn | ej angivet för SW39FW; SW38FW 54–57 dB (produktblad) | 5 948 kr |
| Acetec EvoDry 6H 2.0 | sorption | −20 °C | 7,4 l/dygn vid 20 °C, 60 % | 530 W | 48 dBA, avstånd ej angivet | 10 588 kr (restnoterad) |
| Fresh D-1200 | sorption | −20 °C | 10 l/dygn vid 27 °C, 60 %; 12 l vid 35 °C, 90 % | 500 W vid 27 °C, 60 % | 44 dB, avstånd ej angivet | 10 995 kr |
| Drybox X4 | sorption | ej på tillverkarens sida (återförsäljare −20 °C) | 19 l/dygn, villkor ej angivet | 850 W | 52 dB på 3 m | 12 763 kr |

- Tre sorption och två kondens, som checklistan kräver. Fresh D-800 (6 l vid 27 °C/60 %, 350 W, 40 dB, 7 250 kr) och Drybox X2 (19 l, 850 W, 52 dB på 3 m, 10 878 kr, restnoterad) står i underlaget.
- **Kapaciteten går inte att jämföra rakt av.** Villkoren är 20/60, 27/60, 30/80 och ej angivet. Sajtens metodlöfte (`kategorier-luftavfuktare.md`): saknas villkoret står det ej angivet, och vi räknar inte fram en siffra åt tillverkaren.
- SW38F:s 11 l vid 20 °C/70 % är **ny uppgift** jämfört med `kunskap-sorptionsavfuktare.md`, som saknade 20-graderstal för SW39FW. Källa: Wood's bruksanvisning SW-serien, rev. 2022-05-25, s. 14 (se underlaget). Gäller SW38F, inte SW39FW; skrivs med modellnamnet.

---

## 4. Säkerhet: brandfarligt, köldmedium, garage

Ordagrant ur bruksanvisningarna. Adresser i underlaget avsnitt 1.

- **Acetec EvoDry 6H 2.0** (dokumentation daterad 7 september 2026): "får inte installeras i miljöer med aggressiva eller explosiva gaser". Användning: "mindre utrymmen, särskilt sådana som används mer sällan", bland annat ouppvärmda garage. Inte krypgrund eller kallvind.
- **Wood's MDK21** (rev. 2022-05-02) och **Wood's SW-serien** (rev. 2022-05-25), samma text: "Brännbart ämne. Denna maskin innehåller R290/Propan - ett brännbart köldmedium." "Produkten ska inte förvaras i ett rum där kontinuerligt använda tändkällor finns (till exempel; öppen eld, gasvärmare eller elektriska värmare)." "Produkten ska installeras, användas och förvaras i ett rum med en golvyta större än 4 m2." "Placera inte brännbara ämnen eller föremål dränkta i brännbara ämnen i närheten av, eller på produkten." Användning: "källare, tvättstugor, garage, husvagnar, sommarstugor och i båtar". Köldmedium MDK21 ca 70 g R290; SW38F 110 g R290.
- **Fresh D-800/D-1200** (bruksanvisning 008634-A_200116): garage listat bland användningarna. Inget köldmedium (sorption). Inget förbud mot gas hittat i den svenska delen.
- **Drybox** (produktsida X4, ändrad 2026-08-19): garage listat. Bruksanvisning ej läst.
- **Slutsats för sidan (egen läsning):** ingen tillverkare utesluter ett garage med bil. Texten får säga: R290-maskiner ska inte stå där tändkällor används hela tiden och inte nära bensindunkar eller lösningsmedel; Acetec förbjuder explosiva gaser. Att bensinångor räknas som "explosiva gaser" är egen tolkning, märks.

---

## 5. Driftkostnad (H2 3)

**Formel:** kWh = W / 1 000 × timmar per dygn × dagar. Kronor = kWh × 2,40. **Elpris:** 2,40 kr/kWh, SCB, hushåll 5 000–14 999 kWh/år, juli till december 2025, inkl. elhandel, nätavgift, energiskatt och moms (`src/lib/antaganden.ts`, `ELPRIS_KALLA`, https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris). Samma som `/rakna/elkostnad/`.

Egen räkning, märkeffekten hela gångtiden (övre gräns, som räknaren):

| Maskin | Effekt | 8 h/dygn: kWh och kr per 30 dagar | Dygnet runt: kWh och kr per 30 dagar | 8 h/dygn helt år |
|---|---|---|---|---|
| Wood's MDK21 | 275 W (manual) | 66,0 kWh · 158 kr | 198,0 kWh · 475 kr | 803 kWh · 1 927 kr |
| Wood's SW39FW | 320 W | 76,8 kWh · 184 kr | 230,4 kWh · 553 kr | 934 kWh · 2 243 kr |
| Fresh D-1200 | 500 W | 120,0 kWh · 288 kr | 360,0 kWh · 864 kr | 1 460 kWh · 3 504 kr |
| Acetec EvoDry 6H 2.0 | 530 W | 127,2 kWh · 305 kr | 381,6 kWh · 916 kr | 1 548 kWh · 3 714 kr |
| Drybox X4 | 850 W | 204,0 kWh · 490 kr | 612,0 kWh · 1 469 kr | 2 482 kWh · 5 957 kr |

- 8 h/dygn är sajtens antagande för hygrostatstyrd drift i tätat utrymme (`/rakna/elkostnad/`). Acetec (support): förbrukningen "går inte att förutsäga". Otätt garage = dygnet runt (granskningen av 6H 2.0).
- kWh per liter vid tillverkarens villkor (egen räkning, dygnet runt): Fresh D-1200 1,20 vid 27/60; SW38F 0,66 vid 20/70 (ur manualens 7,3 kWh/dygn och 11 l); MDK21 0,33 vid 30/80; Acetec 1,7 vid 20/60 (redan i `kunskap-sorptionsavfuktare.md`). Jämförs bara vid samma villkor.
- Siffrorna för 6H 2.0, SW39FW, Drybox och eltabellen i sorptionsartikeln är desamma. Upprepa inte den tabellen; länka.

---

## 6. Innan du köper (H2 5)

- Täta först: Acetec och Optihus, "ventiler och öppningar tätas" (`kunskap-sorptionsavfuktare.md` H2 5). Affiliatebeslutet: otätt garage med öppna ventiler, sidan säger "köp ingenting".
- Wood's MDK21, ordagrant: "For optimal efficiency, the doors and windows of rooms being dehumidified should be kept closed." Svenska tipset: "För maximal avfuktningskapacitet i ett rum rekommenderas att tilluften från utsidan och intilliggande rum minimeras" (SW-manualen, garblad text i pdf, kontrollera ordalydelsen).
- Snö och vatten från bil: ingen källa med liter per bil hittad. **Saknas.** Skriv inte ett tal.
- Daggpunkten i garaget: `rakna-daggpunkt.md`, H3 Garaget (betongplattan på gårdagens temperatur, ventilera när det är kallare ute än inne). Hänvisa, upprepa inte.
- Wood's: "Notera att mögelsvamp kräver minst temperatur på 7 °C och 72 % RF för att växa" (SW-manualen). Tillverkarens påstående utan källa; skrivs inte som fakta.

---

## 7. Sökanalys

Från checklistan (SERP 2026-09-29, sökverktyget svarar från USA; ordningen osäker, utvald snippet ej kontrollerad i google.se, går inte med de verktyg arbetaren har).

1. **polarpumpen.se** (kategorisida, ca 280 ord, 0 produkter vid läsning). Har: 60 % RF för rost. Saknar: källa, typ per temperatur, storlek, el.
2. **duab.se** (butik, 38 produkter). Har: kondens "bäst över +15 °C", sorption till 0 eller −10. Saknar: källa, driftkostnad, effekt.
3. **clasohlson.com** (kategori med guidetext). Saknar: tal med källa.
4. **byggahus.se** (forum, 403). Visar att läsaren vill ha erfarenheter.
5. **ozoneair.se** (säljer egen avfuktare, 1 700 ord). Saknar: källor.

Vår sida kan ha som ettan saknar: RF-gränsen med SBI och ISO 9223; tabell ur datablad med villkor; räknarens tal för enkel- och dubbelgarage; driftkostnad per maskin med SCB:s elpris; tillverkarnas egna säkerhetsregler om R290 och gas; ärligt "ingen granskad i den storleken" för dubbelgarage i kyla.

---

## 8. Interna länkar (checklistan punkt 9)

- `/fukt/sorptionsavfuktare/` (H2 2), `/rakna/avfuktare/` (H2 1, inbäddad eller verktygskort), `/rakna/elkostnad/` (H2 3), `/luftavfuktare/` (H2 4), `/fukt/avfuktare-kallare/` (jämförelse kall källare).
- Granskningarna `/tester/acetec-evodry-6h-2/` och `/tester/woods-sw39fw/` (affiliatebeslutet).
- Inlänkar: `/fukt/sorptionsavfuktare/` (H2 6 nämner "avfuktare garage"), `/luftavfuktare/`.

---

## 9. Osäkert och saknat

- Bruksanvisning för **Wood's SW39FW**: inte hittad (woods.se ger 404 för modellen). SW38F-manualen används, märkt.
- Drybox X2/X4 bruksanvisning: inte läst. Kapacitetens villkor saknas hos Drybox.
- Kapacitet vid 5 och 10 °C för Acetec, Fresh, Drybox: saknas i databladen (samma lucka som sorptionsartikeln).
- Garagets luftomsättning, fukt från bil och snö: ingen källa.
- Oberoende svensk myndighetskälla för RF i garage: saknas; SBI och ISO används.
- google.se-SERP: ej kontrollerad.

---

## 10. Komplettering 2026-10-07: förråd, sommarstuga, jordkällare och ventilation

Beställt av hantverkaren, omgång F rad F5. En ny H2 på `/fukt/avfuktare-garage/` om förråd, kall sommarstuga, jordkällare och ventilation i garage och jordkällare. Fraser (`docs/SOKORDSANALYS.md` rad 842): ventilation i garage (70), ventilation jordkällare (70), avfuktare förråd (30), avfuktare sommarstuga (20), avfuktare jordkällare (20), fukt i kallförråd (10), fukt i sommarstuga (10), luftfuktighet jordkällare (10), unken lukt i sommarstuga (10). Allt läst 2026-10-07 om inget annat står. T-nummer = `fukt-gemensamma-tal.md` avsnitt 0; K-nummer = samma blad 13.2. **EGEN** = egen räkning eller egen slutsats.

### 10.0 Besked till hantverkaren

- **Jordkällaren ska vara fuktig.** Länsstyrelsen i Västra Götaland: rotfrukter 90–95 % RF vid +1–3 °C, potatis 85–90 % vid +3–7 °C (10.3). Det ligger över T1 (75 %) och T2 (75–80 %). En avfuktare i en jordkällare med rotfrukter motverkar lagringen. Ingen källa säger det med de orden; slutsatsen är **EGEN** ur talen.
- **Ingen paragraf i Boverkets nya regler nämner garage i ventilationskapitlet.** BFS 2024:8 innehåller inte ordet "garage" (hela texten genomsökt). Garage står i BFS 2024:7 (brand); förgiftningsparagrafen i BFS 2024:9 nämner inte garage. 10.4. Krav för ett befintligt fristående garage som inte byggs om: **inga hittade**.
- **Försäkringsbolagen säger 15 grader i fritidshuset, men av frysskäl.** Konsumenternas Försäkringsbyrå, If 2023 och Länsförsäkringar Blekinge 2017 säger 15 grader; skälet de anger är vattenledningar. Ett tal för grundvärme mot **fukt** med källa av rang: **saknas**. If (äldre, troligen 2014) sa minst 10 grader i vinterbonat hus och "värme och el stängs av helt" i oisolerat. Två råd från samma bolag, inget medelvärde. 10.2.
- **Grundvärme sänker RF utan maskin.** SP:s tabell (K5): uteluft 0 °C och 95 % blir 83 % vid +2 och 68 % vid +5. Det är mekanismen bakom grundvärme mot fukt. Tabellen gäller en vind och används här som fysik, inte som mätning i stugor.
- **Tillverkarna säger "stäng ventiler", och ingen gällande regel säger emot för ett befintligt garage.** Wood's MDK21-manualen har en ren svensk mening (10.4) som ersätter den garblade SW-texten i avsnitt 6.

### 10.1 Fukt i kallförråd och förråd

| Påstående | Tal | Källa (typ) | Adress | Datum |
|---|---|---|---|---|
| Normal RF i ett ouppvärmt förråd över året | **Saknas.** Ingen källa av rang ger ett tal för ouppvärmda förråd, friggebodar eller kallförråd | – | – | – |
| Uteluften, som ett ventilerat ouppvärmt förråd följer | 65–75 % sommar, 90–95 % vinter | T15, TräGuiden (branschorganisation) | se `fukt-gemensamma-tal.md` | uppdaterad 2021-06-07 |
| En uteluftsventilerad kall vind har klimat "som utomhus" | – | K4, SP (forskningsinstitut, nu RISE) | se 13.2 | Bygg & teknik 4/06 |
| Kall vind mätt: månadsmedel 79–88 % RF oktober–februari | 79–88 % | K8, LTH (universitet) | se 13.2 | – |
| Mögel på trä | 75–80 % RF, rumstemperatur, lång tid | T2, TräGuiden | – | 2025-01-24 |
| Under detta "kan inget angrepp utvecklas" | under 75 % | T6 | – | – |
| Temperaturspann för mögel | −5 till +55 °C, optimum 20–30 | T5 | – | – |
| Tiden | "Vid 75 % relativ luftfuktighet krävs betydligt längre tid för att tillväxt ska kunna ske än vid exempelvis 90 % relativ luftfuktighet." | TräGuiden, `fukt-gemensamma-tal.md` 1.2 | – | – |
| Högsta tillåtna fukttillstånd (byggnadsdelar, nya byggnader) | 75 % | T1, BFS 2024:8 7 kap. 1 § | – | – |
| Rost på verktyg | praktiskt taget ingen under 60 % | T41, SBI | – | – |
| Kallt och fuktigt ger låg mögelrisk | "Under dessa perioder är dock temperaturen ganska låg varför mögelrisken måste betraktas som liten" | K16, Harderup LTH, SBUF 11765 | se 13.2 | jan 2021; gäller spalten under takpannor, inte rumsluft |

- **EGEN slutsats:** ett ventilerat ouppvärmt förråd ligger nära uteluften, alltså 90–95 % vintertid (T15) och över T2 stora delar av vinterhalvåret. Risken för mögel är störst höst och vår när det är fuktigt men inte kallt (samma slutsats som kallvinden, 13.2 "Normalt och risk"). Skrivs som slutsats, inte som mätning i förråd.
- Wood's (SW-manualen): "Notera att mögelsvamp kräver minst temperatur på 7°C och 72 % RF för att växa." Tillverkare, utan källa, motsäger T5 (−5 °C). **Skrivs inte som fakta** (redan avsnitt 6).
- **Vad som skadas.** Verktyg: rost, T41 och avsnitt 1. Trä: mögel T2, röta T23–T25. Textil, papper och elektronik i förråd: **Saknas** (ingen källa av rang med RF-tal läst).
- Folkhälsomyndigheten, Fuktcentrum, RISE, Boverket, Villaägarna om förråd eller friggebod: **inget hittat**.

### 10.2 Sommarstuga som står kall på vintern

**Fysiken (EGEN räkning med T18, uteluft 0 °C och 95 % enligt K3):**

| Stugans temperatur | RF inne, EGEN (Magnus, T18) | SP:s tabell (K5) |
|---|---|---|
| +2 °C | 82 % | 83 % |
| +5 °C | 67 % | 68 % |
| +8 °C | 54 % | – |
| +10 °C | 47 % | – |
| +15 °C | 34 % | – |

- Formel: RF = 0,95 × es(0) / es(T), es(T) = 6,1094 × e^(17,625 × T / (243,04 + T)). Förutsätter att stugan inte tillför fukt och att luften byts mot uteluft. SP:s tabell väger tyngst; skillnaden är avrundning.
- **Vårens kondens (EGEN):** mild aprilluft på 12 °C och 70 % har daggpunkt 6,7 °C. Väggar och inredning som fortfarande är kallare än så får kondens när den luften kommer in. Exempelvärdena är antaganden, inte mätningar. Samma mekanism som garaget i `rakna-daggpunkt.md` H3 Garaget.
- **Lukten.** Anticimex (firma, **SÄLJER**), via `fukt-mogel-gemensamt.md` 7.6 (K26 där): "Sommarstugelukt är typiskt för ouppvärmda sommarstugor och luktar ovädrat." Folkhälsomyndigheten (K4 där): "Om det ofta luktar instängt eller blir imma på insidan av fönstren kan det var ett tecken på dålig ventilation." Hänvisa, upprepa inte.

**Råden, ordagrant:**

| Råd | Källa (typ) | Adress | Datum |
|---|---|---|---|
| "Försäkringsbolagen rekommenderar att man har en grundvärme på omkring 15 grader." "Sänker du värmen ytterligare utan att vidta åtgärder kan du anses ha varit oaktsam och riskerar att få en lägre ersättning från försäkringen." | Konsumenternas Försäkringsbyrå (oberoende konsumentbyrå), Camilla Kågström, jurist | <https://www.konsumenternas.se/arkiv---nyheter-bloggar-och-poddar/nyheter/2024/oktober/sa-skyddar-du-fritidshuset-under-vintern/> | 2024-10-03 |
| Samma 15-gradersmening | samma, Andrea Ekeblad Szanto | <https://www.konsumenternas.se/arkiv---nyheter-bloggar-och-poddar/nyheter/2022/september/undvik-frysskador-om-du-sanker-varmen-i-huset/> | 2022-09-20 |
| "If gick i höstas ut med en stark rekommendation att alltid ha 15 grader som grundvärme." | If (försäkringsbolag), Jenny Rudslätt, skadechef | <https://via.tt.se/pressmeddelande/3338396/stor-okning-av-frysskador-pa-fritidshus-i-vinter?lang=sv> | 2023-01-18 |
| "Om det finns vatten kvar i ledningarna bör huset vara uppvärmt till minst 15 grader." "Öppna husets ventiler, dörrar och skåpluckor så att luften kan cirkulera överallt." | Länsförsäkringar Blekinge (försäkringsbolag), "Till fritidshusägare" | <https://www.lansforsakringar.se/globalassets/blekinge/dokument/nyheter/vintersakra-bostaden_sve_web.pdf> | "Okt_2017" |
| "Öppna luftventilerna för att säkra god luftcirkulation och motverka fukt- och mögelangrepp. Om huset är vinterbonat eller isolerat - ställ in underhållsvärme på minst 10 grader. Om huset är oisolerat rekommenderar vi att värme och el stängs av helt under vintern." | If, pressmeddelande "Skador för miljoner i vinterstängda stugor", Mats Larsson, skadeinspektör | <https://mb.cision.com/Main/81/9641208/284305.pdf> | odaterat; talen gäller 2013, alltså troligen hösten 2014 |
| "Omkring hälften avskadorna inträffar mellan oktober och april när många sommarstugor står tomma." (källans stavning) Fukt- och vattenskador "kostade förra året försäkringsbolagen närmare 300 miljoner kronor". | samma | samma | samma; gammalt tal, skrivs med år eller inte alls |
| "Man behöver ha 10-15 grader i bostaden för att framförallt undvika fuktskador på insidan av väggen eller bakom soffan, där luften står lite extra still" | Anticimex (firma, **SÄLJER**), Johanna Lindström, i Dagens PS | <https://www.dagensps.se/privatekonomi/spara-pengar-pa-el-gor-inte-sa-har-hela-huset-forstors/> | 2026-02-02; gäller bostad, inte fritidshus |
| "För ett ouppvärmt hus är det praktiskt med en avfuktare. … Viktigt är att se till att avfuktaren är kopplad till ett avlopp." | Slöjd & Byggnadsvård (Västra Götalandsregionen), "Mullbänk", via `guider-torpargrund.md` (M2) | se det bladet | uppdaterad 2026-09-30; svar på fråga om sommarstuga med mullbänk; inte läst om i dag |

- **Källorna säger olika.** 15 grader (Konsumenternas, If 2023, LF Blekinge) gäller frysrisk för vatten; minst 10 grader (If, äldre) gäller vinterbonat hus; "stängs av helt" (If, äldre) gäller oisolerat hus. Konsumenternas väger tyngst i försäkringsfrågan. Om fukten ger ingen av dem ett tal med grund.
- **Villaägarna** (intresseorganisation), "Förbered fritidshuset inför vintern", <https://www.villaagarna.se/vintersakra-fritidshuset>: sidan gav **HTTP 500** 2026-10-07 (WebFetch och curl). **UTDRAG** ur sökmotorn, omskrivet av sökverktyget, **inte ordagrant**: stänger man av värmen finns risk för mögelskador som kan minskas med avfuktning; kallställd stuga utan vattenburen värme och vattenledningar riskerar kondens inne; en adsorptionsavfuktare (sorption) är mest tillförlitlig vid låga temperaturer men dyrare och krångligare att installera; håll innerdörrar och skåpsluckor öppna. **Ska läsas ordagrant innan något citeras.**
- Grundvärme kontra avfuktning kontra vädring, jämfört av en källa av rang (Fuktcentrum, RISE, Energimyndigheten, Boverket): **Saknas.** Sökt; bara forum, firmor och försäkringsbolag.
- Lägsta grundvärme mot **fukt**: **Saknas** med källa av rang. "5 grader mot mögel på Skansen" kom i ett sökverktygsutdrag utan spårbar källa; **upprepas inte**.
- Fuktslukare i kall stuga: `kunskap-fuktslukare.md` (Henkel "To be used above 10°C"). Hänvisa.

### 10.3 Jordkällare

**J1:** Länsstyrelsen i Västra Götalands län (myndighet) och Göteborgs universitet, "Ta hand om din jordkällare", Agrarhistoria i Västra Götaland, rapport 2015:20, <https://catalog.lansstyrelsen.se/store/13/resource/2920> (PDF). Sidnummer = tryckt sida (sammanfaller med PDF-sidan).
**J2:** Kalmar läns museum (länsmuseum), "Stenkällare på Öland, Kalmar län", 2014-03-07, <https://alltpaoland.se/~alltpaol/site/assets/files/2593/stenkallareolandlagupplost.pdf> (kopia hos alltpaoland.se).

**Klimat, som tabellen ska stå (J1 s. 32, talen ordagrant):**

| Vara | Temperatur | RF |
|---|---|---|
| Rotfrukter (morot, kålrot, rotselleri, rödbetor) | +1–3 °C | 90–95 % |
| Potatis ("vill ha det mörkt") | +3–7 °C | 85–90 % |
| Blom- och stjälkgrönsaker | +1–3 °C | 90–95 % |

- J1 s. 32: "Avdunstningen från växtdelar upphör nästan helt vid 90-95 procent relativ luftfuktighet i den omgivande luften." "I ett kylskåp är luften mycket torrare, vilket gör att potatis, morötter och äpplen ofta skrumpnar." "Om potatisen ligger för länge i en kall jordkällare, så smakat den sött." (källans stavning)
- Frukt: J1 skriver "+-3 grader C och 90 procent" (troligen tryckfel för +1–3). **Osäkert, skrivs inte.**
- Sommar, J1 s. 31: "Många har berättat att det under sommaren är mellan 12-14 grader varmt i jordkällaren." Berättelser, inte mätning.
- Vinter, J1 s. 32, citat från en ägare: temperaturen "omkring nollstrecket oberoende om det är -18 eller som idag -3". En källare, en vinter.
- J1 s. 7: "En källare ska vara sval på sommaren, men får inte frysa på vintern."
- J1 s. 32 om att mäta: "Innan man börjar använda en jordkällare som länge stått oanvänd så bör man under första vintern kontrollmäta temperaturen kontinuerligt i förstugan, i källaren och sätta in en hygrometer som mäter luftfuktigheten." Länk till `/fukt/hygrometer/`.
- J1 s. 31–32 om frost: "Idag kan man sätta in en frostvakt om det finns el eller värmeljus."

**Luftningen, ordagrant:**

- J1 s. 27: "I en jordkällare är det självdragsprincipen som gäller. På vintern kommer kall luft in när man går in i källaren eller via naturligt drag, luften byter långsamt värme till jordkällarens, +1-3 grader C." "Rörelsen i självdraget styrs av jordkällarens temperatur och hur kallt eller varmt det är utanför. Frånluftsventilen kan täppas till på vintern med halm eller liknande. På sommaren kan ventilationen delvis öppnas."
- J1 s. 27 om dörrventiler: "Om det finns behov av reglerbara ventiler i dörren så ska de gå att öppna och stänga samt ha ett mussäkert nät."
- J1 s. 31, året förr: "Senare minskades ventilationen för att under midvintern helt stängas, samtidigt som råvarorna i jordkällaren konsumerades. Potatishålet kunde fyllas med halm, gamla tidningar och säckar. Det gällde att inte släppa in kylan."
- J1 s. 24, vårstädning: "Städa ur jordkällaren tidigt varje vår. Gör det en dag då luften är kall och klar." "Öppna alla ventilationskanaler och dörrarna under en dag." "Ta in den torra inredningen innan kvällsfukten kommer och håll dörrarna stängda, även under sommaren." J1 s. 31 om samma dag: "det gällde också att undvika att den varma luften orsakade kondens som blev till fukt."
- J2: "Öppna dörrar och ventilationsglugg på hösten och vädra ur källaren. Då kyls källaren ned." "Se till att hålla dörrarna stängda för att hålla en jämn temperatur och fuktighet i källaren. Under den kyligaste delen av vintern kan ventilationsgluggen tillfälligt behöva täppas för." Och: "En stenkällare för potatisförvaring kräver väl isolerade tak och väggar samt bra ventilation. Just balansen mellan ventilation och fukt, men inte frost, var viktig för att potatisen skulle bevaras över vintern."
- **Var öppningarna sitter.** J1 s. 11: potatisgluggen "Den sitter högt upp i bakmuren, och har också funktionen som ventilation. I andra källare är gluggen enbart ventilation, och kan ha ett rör som leder upp och igenom jorden." J1 s. 20 (restaureringsexemplet Ljungås, Vårgårda): "Inluftventilen kommer in på västra gavel vid dörren. Från källaren leder en snickrad träventil som fungerar som frånluftventil, genom taket och vidare ut på den östra gaveln." J2: inre gaveln har en öppning som är "ilastningshål för potatis samt ventilation".
- **"Tilluft lågt, frånluft högt" som regel står inte ordagrant i någon läst källa.** Källorna beskriver inluft vid dörren och frånluft högt i bakmuren eller genom taket. Formuleringen som regel är **EGEN** sammanfattning.
- Storlek på ventiler med seriös källa: **Saknas** (8 cm vid dörren och 15 cm rör finns bara i forum).

**Källorna säger olika om sommaren:**

- J1 s. 24 och 31: håll dörrarna stängda "även under sommaren". J1 s. 27: "På sommaren kan ventilationen delvis öppnas." J1 s. 26, för en källare med vatten på golvet: "Öppna dörrar och ventilationshål för att torka ut jordkällaren ordentligt när det är varmt ute."
- **EGEN räkning till konflikten (T18):** sommarluft 20 °C och 70 % har daggpunkt 14,4 °C; 15 °C och 80 % har 11,6 °C. En källare på 12–14 grader (J1) ligger under eller nära den daggpunkten, så varm uteluft kan ge kondens på väggar och valv. Det stöder J1:s egen mening om att undvika "att den varma luften orsakade kondens". Exempelvärdena är antaganden. Används någon av J1:s sommarmeningar ska den andra också nämnas.

**Avfuktare i jordkällaren:**

- **Fel när källaren lagrar rotfrukter (EGEN slutsats):** målet är 85–95 % RF (J1). Ordet avfuktare förekommer inte i J1 eller J2.
- **När den kan vara rätt (EGEN):** källaren används som förråd för annat än grönsaker (verktyg, möbler, papper) och ligger över T2 eller T41; mögel på inredningen; kondens sommartid. Då styr temperaturen, 10.5: 1–14 °C över året betyder sorption, inte kondens (T33, T34). Ingen källa har prövat avfuktare i jordkällare. **Saknas.**
- J1 om mögel: vårstädning och såpskurning gjorde att "Trävirket höll då längre och risken för mögel minskade". Kalkning "vartannat till vart tredje år. Kalk hade en desinficerande effekt." (s. 31). "Sätt aldrig in sekunda varor för då finns risk för mögel" (s. 33).
- J1 s. 26 om tätskikt: "Att använda till exempel ett plastskikt är en osäker metod, vi vet inte riktigt vad konsekvenserna blir av att tätt skikt." Och: "Använd inte cement i kallmurade konstruktioner." … "Dessutom blir det för tätt och fukten kan inte komma ut."
- Lukten: jordkällarlukt = actinomyceter enligt TräGuiden (`guider-fukt-i-krypgrund.md` rad 59 och 175). Hänvisa.

**Inte lästa:** Riksantikvarieämbetet och Länsstyrelsen i Södermanlands län, "Skötsel av kulturvärden i odlingslandskapet – Jordkällare", faktablad 1995 (i J2:s litteraturlista, ingen webbkopia hittad). SLU och Jordbruksverket om potatislagring: sökträffar (<https://stud.epsilon.slu.se/12914/>, <https://www2.jordbruksverket.se/webdav/files/SJV/trycksaker/Pdf_ovrigt/p7_2.pdf>), inte lästa; gäller lagerhus, inte jordkällare.

### 10.4 Ventilation i garage

**Boverkets nya byggregler, ordagrant.** BFS 2024:8 <https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf>, BFS 2024:9 <https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf>, BFS 2024:7 <https://rinfo.boverket.se/BFS2024-7/pdf/BFS2024-7.pdf>; alla beslutade 19 november 2024 och gäller ensamma sedan 1 juli 2026.

- **BFS 2024:8 1 kap. 2 §:** "Föreskrifterna i 2–11 kap. gäller vid uppförande av nya byggnader." "Föreskrifterna i 12–13 kap. gäller vid ändring av byggnader."
- **BFS 2024:8 3 kap. 1 §:** "Byggnader ska vara utformade så att de kan ge förutsättningar för acceptabel luftkvalitet inomhus vid avsedd användning."
- **3 kap. 3 §:** "Byggnader ska vara utformade så att luftkvaliteten inte blir oacceptabel på grund av spridning av luftföroreningar inom byggnaden, från mark eller från utomhusluften till inomhusmiljön."
- **3 kap. 4 §:** "Byggnaders ventilationssystem ska vara utformade så att rum kan ha kontinuerlig luftväxling." Andra stycket: "Luftväxlingen ska kunna föra bort luftföroreningar så att luftkvaliteten blir acceptabel för den avsedda användningen. Särskild hänsyn ska tas till 1. tilluftens kvalitet, 2. föroreningar från den avsedda användningen, 3. föroreningar från byggnaden, och 4. luftbehandling."
- **3 kap. 5 §** (0,35 l/s per m², 4,0 l/s per person) gäller **bostäder**, T43 och T44. Inget flöde för garage.
- **BFS 2024:9 2 kap. 37 §** (rubrik "Lokaler där giftiga gaser förekommer"): "Mellan en lokal där det förekommer giftiga gaser och ett utrymme där människor vistas mer än tillfälligt, får en förbindelse anordnas endast om betryggande åtgärder vidtagits för att begränsa risken för personskador genom förgiftning." Ordet garage står inte i paragrafen.
- **BFS 2024:7 4 kap. 15 §** (brand): "Eldstäder får inte placeras i garage, verkstäder eller andra utrymmen med förhöjd sannolikhet för förekomst av brännbara gaser eller lättantändligt damm om inte särskilda åtgärder vidtas."
- BFS 2024:8 genomsökt på "garage", "fordon", "avgas": **0 träffar**. BFS 2024:8 har inga allmänna råd (Boverket, "Om Boverkets nya byggregler", <https://www.boverket.se/sv/byggande/regler-for-byggande/om-boverkets-nya-byggregler/>, senast ändrad 3 februari 2026: allmänna råd finns i BFS 2024:6, 2024:7 och 2026:4).
- Boverket, PBL kunskapsbanken, "Utformning av ventilation", <https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/hygien-halsa-och-miljo/luft/utformning/>, senast ändrad 1 juli 2026: inget om garage. Om carport: "Exempel på när det är obehövligt att dokumentera projekteringen utifrån luft och hälsorisk kan vara att det inte finns någon ventilation, som i en carport." Om tryck: "Tryckskillnader kan också orsaka att förorenad luft sugs in från mark."

**Äldre regler, gäller inte längre** (BBR, BFS 2011:6 med ändringar t.o.m. BFS 2024:5, konsoliderad, <https://rinfo.boverket.se/BFS2011-6/dok/BFS2024-5_Konsolidering.pdf>; fick väljas till 1 juli 2026):

- BBR 1:6 räknade garage till rum "avsedda för människor att vistas i tillfälligt".
- BBR 6:2523 Överluft: "Avsiktlig luftföring får endast anordnas från rum med högre krav på luftkvalitet till rum med samma eller lägre krav på luftkvalitet." Garage nämns inte.
- BBR 8:7 allmänt råd: "Exempel på lokaler där giftiga gaser kan förekomma är garage i flerbostadshus och förråd för vissa bränslen." "Förbindelsen bör vara tät och förses med dörrstängare." Föreskrift: "I ett garage med mer än 50 m2 nettoarea ska det finnas väl synliga skyltar som varnar för risken för koloxidförgiftning."
- BBR 5:44 allmänt råd: "Uppvärmning i garage bör inte ske med öppen låga, öppen glödspiral eller annan anordning som kan orsaka brand eller explosion."
- **Citera inte BBR som gällande.** Den täta dörren med dörrstängare mellan garage och bostad var BBR:s allmänna råd med flerbostadshus som exempel; i dag finns bara BFS 2024:9 2 kap. 37 § utan ordet garage.

**Fristående garage till en villa:**

- **EGEN läsning:** kapitel 3 i BFS 2024:8 gäller när ett garage byggs nytt; då ska det enligt 4 § ha "kontinuerlig luftväxling" och enligt 1 § acceptabel luftkvalitet "vid avsedd användning". Inget flöde anges. För ett befintligt garage som inte ändras ställer föreskrifterna inget krav. Ingen Boverket-text som säger detta om garage: **Saknas**. Skrivs som egen läsning eller inte alls.
- Krav eller råd om ventilationsöppningar i villagarage (placering, storlek): **Saknas.** Bara forum (byggahus.se: tilluft i portens underkant, frånluft högt bak, 125 mm ventiler). Forum är inte källa.

**Konflikten tätning mot ventilation:**

- Tillverkarna: Acetec och Optihus, ventiler och öppningar tätas (`kunskap-sorptionsavfuktare.md` H2 5). Wood's MDK21, ren svensk text (ersätter den garblade SW-meningen i avsnitt 6): "För maximal avfuktningskapacitet i ett rum rekommenderas att tilluften från utsidan och intilliggande rum minimeras – stäng dörrar och ventiler." (Wood's, "Operating instructions for MDK21 MDK26", rev. 2022-05-02, <https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk21_mdk26pdf.pdf>, avsnittet TIPS.)
- Gällande krav som säger emot för ett befintligt villagarage: **inget hittat**. Att avgaser ska vädras ut när en motor körs är **EGEN** slutsats ur 3 kap. 1 och 4 §§ (som gäller nybyggnad), inte ett krav för befintligt garage. Skriv inte "Boverket kräver ventilation i garaget".
- Sidans befintliga H2 "Täta porten eller ventilera" (rad 147 i mdx) säger redan: tätt garage → avfuktare; otätt → ingen avfuktare, vädra när det är kallare ute än inne. Daggpunkten: `rakna-daggpunkt.md` H3 Garaget, publicerad på `/rakna/daggpunkt/#garaget`. Upprepa inte.

### 10.5 Avfuktare i kyla: förråd, kall stuga, jordkällare

Temperaturgränserna står i avsnitt 0 och 3 och i `kunskap-sorptionsavfuktare.md` H2 2; sajtens regel är T33 och T34. Upprepas inte. Tillägg:

| Maskin | Lägsta arbetstemp. | Nämner förråd, fritidshus, sommarstuga? | Källa |
|---|---|---|---|
| Acetec EvoDry 6H 2.0 | −20 °C | ja: ouppvärmda garage, källare, **förråd**, båtar, husvagnar, containrar, **fritidshus**; "mindre utrymmen, särskilt sådana som används mer sällan"; inte krypgrund eller kallvind | `underlag-avfuktare-garage-2026-09-29.md` avsnitt 1 |
| Fresh D-800/D-1200 | −20 °C | ja: "boytor, vindar, källare, båtar, **fritidshus**, garage och lagerutrymmen" | samma |
| Drybox X2/X4 | ej på tillverkarens sida | ja (FAQ): "källare, garage, kallvind, **sommarstuga**, husbil, husvagn, båt …" | samma |
| Wood's MDK21 | +5 °C | ja: "källare, tvättstugor, garage, husvagnar, **sommarstugor** och i båtar" | avsnitt 4 |
| Wood's SW-serien | +2 °C, stänger av under | samma lista | avsnitt 4 |

- **Ny ordagrann text ur Fresh-manualen** (008634-A_200116, <https://www.marineshop.no/userfiles/ProductDocuments/multicase/Manual%20D-800-D-1200.pdf>, svensk del): "Där kompressoravfuktare slutar att fungera vid 5 °C fortsätter enheter med sorbtionsteknik att torka luft ända ned till -20 °C, vilket gör dem idealiska för ouppvärmda rum och uthus." Tillverkarens påstående om alla kompressormaskiner; Wood's SW anger +2. **Används inte som fakta om andra märken.**
- **Ny ordagrann text ur Wood's MDK21** (samma manual som 10.4, TIPS): "Använd en frostvakt om temperaturen faller under +5°C". SW-manualen har samma råd med +2 °C (texten garblad i pdf:en, talet läsbart). Krocken med R290-förbudet mot "elektriska värmare" i samma rum står i avsnitt 0.
- **EGEN, per utrymme:** kall sommarstuga vintertid och kallförråd under 10 °C → sorption (T34). Jordkällare 1–14 °C över året (J1) → sorption om någon maskin alls (10.3). Förråd i uppvärmt hus över 15 °C → kondens (T33).
- **Frost när maskinen står avstängd i minusgrader** (vatten i tank eller slang, förvaringstemperatur): sökt i MDK21-, SW- och Fresh-manualen på "frys", "frost", "förvar", "minus", "storage": **inget om förvaring eller frysrisk avstängd.** Wood's nämner bara att avfrostningen under drift hindrar att maskinen fryser. **Saknas.**
- Kapacitet vid 0 till 5 °C för någon sorptionsmaskin i bladen utom Corroventa (T38): **Saknas** (avsnitt 9).
- Inget nytt pris.

### 10.6 Interna länkar som finns (kontrollerat i `src/` 2026-10-07)

Alla sidor med pelaren fukt publiceras som `/fukt/[slug]/`; varje adress nedan länkas redan från andra sidor i `src/content`.

| Adress | Fil | Vad sidan säger, en rad |
|---|---|---|
| `/fukt/sjalvdrag/` | `src/content/kunskap/fukt/sjalvdrag.mdx` | Självdrag i äldre hus, varför draget försvinner på sommaren, kraven (T43–T46); samma princip som J1:s "självdragsprincipen" |
| `/fukt/luftfuktighet-inomhus/` | `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | 10–25 % vinter, 45–60 % sommar inne; H2 "Vädra, värm och avfukta, i den ordningen" |
| `/fukt/mogellukt/` | `src/content/guider/fukt/mogellukt.mdx` | Lukttabell: unket och instängt = för lite ventilation (Folkhälsomyndigheten); jord- och jordkällarlukt = krypgrund eller källare (TräGuiden). Nämner inte sommarstuga |
| `/rakna/daggpunkt/#garaget` | `src/pages/rakna/daggpunkt.astro` | Garaget följer uteluften med ett dygns fördröjning; ventilera när det är kallare ute än inne |
| `/fukt/fuktslukare/` | `src/content/kunskap/fukt/fuktslukare.mdx` | En påse tar ungefär en liter; i en stängd sommarstuga under 10 grader finns inga tal, och burken håller inte en hel stuga torr |
| `/fukt/hygrometer/` | `src/content/kunskap/fukt/hygrometer.mdx` | ±10 procentenheter (T17), koksaltprovet, var den ska hänga; passar J1:s råd att mäta första vintern |
| `/fukt/avfuktare-kallare/` | `src/content/guider/fukt/avfuktare-kallare.mdx` | Köpguide källare, storlek och typ efter temperatur |
| `/fukt/sorptionsavfuktare/` | `src/content/kunskap/fukt/sorptionsavfuktare.mdx` | Sorption under 10 grader, kapacitet vid 5/10/20; H2 "Krypgrunden, garaget, kallvinden och källaren var för sig" |
| `/fukt/torpargrund/` | `src/content/guider/fukt/torpargrund.mdx` | H2 "Ventilera torpargrunden efter årstiden": stryp gluggarna vintertid; källorna säger emot varandra om sommaren (samma mönster som jordkällaren) |
| `/fukt/avfuktare-vind/` | `src/content/guider/fukt/avfuktare-vind.mdx` | Avfuktare nära noll grader på kallvinden; närmaste analog till kallförrådet |
| `/fukt/fukt-i-kallaren/` | `src/content/guider/fukt/fukt-i-kallaren.mdx` | Plastprovet; källarlukt och geosmin "ungefär som en gammal jordkällare" |
| `/rakna/avfuktare/` | `src/pages/rakna/avfuktare.astro` | Räknaren; "Kallt, under 5 grader" ger inget tal (avsnitt 0) |

- Finns inte: egen sida om sommarstuga, fritidshus, förråd eller jordkällare. Bland `/fukt/`-sidorna nämner bara `/fukt/fuktslukare/` (rad 108, "stängd sommarstuga") och `/fukt/vattenskada/` (rad 166, "ouppvärmt fritidshus") stugan.

### 10.7 Osäkert och saknat

- **Saknas:** normal RF över året i ouppvärmt förråd, friggebod eller kallförråd (bara uteluften T15 och kallvinden K4–K9 som analogi).
- **Saknas:** RF-gränser för textil, papper och elektronik i förråd.
- **Saknas:** lägsta grundvärme mot fukt i fritidshus med källa av rang. Försäkringsbolagens 15 grader gäller frysrisk.
- **Saknas:** jämförelse grundvärme, avfuktning och vädring i fritidshus från Fuktcentrum, RISE, Energimyndigheten eller Boverket. Folksam inte läst.
- **Ej nådd:** Villaägarna, <https://www.villaagarna.se/vintersakra-fritidshuset>, HTTP 500. Utdraget i 10.2 är omskrivet och får inte citeras.
- **Saknas:** paragraf om ventilation i garage i gällande regler; flöde för garage; krav för befintligt fristående garage. BFS 2024:8 nämner inte garage.
- **Saknas:** storlek och placering av ventiler i garage och jordkällare med seriös källa ("tilluft lågt, frånluft högt" är egen sammanfattning).
- **Saknas:** försök med avfuktare i jordkällare; tillverkare som nämner jordkällare.
- **Saknas:** frysrisk för avstängd avfuktare (tank, slang) och förvaringstemperatur i manualerna.
- **Osäkert:** J1:s frukttal "+-3 grader C"; J1:s två sommarråd (stängt mot delvis öppet); J1:s 12–14 grader sommartid är berättelser.
- **Osäkert:** If-pressmeddelandet i 10.2 saknar datum; talen gäller 2013.
- **Ej läst:** Riksantikvarieämbetets faktablad om jordkällare 1995; SLU och Jordbruksverket om potatislagring. Svenska kyrkans studie om fuktstyrning (<https://www.svenskakyrkan.se/filer/Fuktstyrning%20-%20en%20studie%20i%20inomhusklimat%20Uppsala%20stift.pdf>) öppnad, gäller kyrkor, används inte.

### 10.8 Källor (kallor-format)

```yaml
kallor:
  - titel: Länsstyrelsen i Västra Götalands län och Göteborgs universitet, Ta hand om din jordkällare, rapport 2015:20 (läst 2026-10-07)
    url: https://catalog.lansstyrelsen.se/store/13/resource/2920
  - titel: Kalmar läns museum, Stenkällare på Öland, Kalmar län (2014-03-07, läst 2026-10-07)
    url: https://alltpaoland.se/~alltpaol/site/assets/files/2593/stenkallareolandlagupplost.pdf
  - titel: Boverket, BFS 2024:8, 1 kap. 2 § och 3 kap. 1, 3 och 4 §§ (läst 2026-10-07)
    url: https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf
  - titel: Boverket, BFS 2024:9, säkerhet vid användning av byggnader, 2 kap. 37 § (läst 2026-10-07)
    url: https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf
  - titel: Boverket, BFS 2024:7, säkerhet i händelse av brand i byggnader, 4 kap. 15 § (läst 2026-10-07)
    url: https://rinfo.boverket.se/BFS2024-7/pdf/BFS2024-7.pdf
  - titel: Boverket, PBL kunskapsbanken, utformning av ventilation (senast ändrad 2026-07-01, läst 2026-10-07)
    url: https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/hygien-halsa-och-miljo/luft/utformning/
  - titel: Konsumenternas Försäkringsbyrå, så skyddar du fritidshuset under vintern (2024-10-03, läst 2026-10-07)
    url: https://www.konsumenternas.se/arkiv---nyheter-bloggar-och-poddar/nyheter/2024/oktober/sa-skyddar-du-fritidshuset-under-vintern/
  - titel: If, stor ökning av frysskador på fritidshus i vinter (2023-01-18, läst 2026-10-07)
    url: https://via.tt.se/pressmeddelande/3338396/stor-okning-av-frysskador-pa-fritidshus-i-vinter?lang=sv
  - titel: If, skador för miljoner i vinterstängda stugor (odaterat, läst 2026-10-07)
    url: https://mb.cision.com/Main/81/9641208/284305.pdf
  - titel: Länsförsäkringar Blekinge, till fritidshusägare (oktober 2017, läst 2026-10-07)
    url: https://www.lansforsakringar.se/globalassets/blekinge/dokument/nyheter/vintersakra-bostaden_sve_web.pdf
  - titel: Wood's, bruksanvisning MDK21 och MDK26 (rev. 2022-05-02, läst 2026-10-07)
    url: https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk21_mdk26pdf.pdf
  - titel: Fresh, bruksanvisning D-800 och D-1200 (008634-A_200116, läst 2026-10-07)
    url: https://www.marineshop.no/userfiles/ProductDocuments/multicase/Manual%20D-800-D-1200.pdf
```

Bara för 10.4, inte gällande: Boverket, BBR BFS 2011:6 konsoliderad t.o.m. BFS 2024:5, <https://rinfo.boverket.se/BFS2011-6/dok/BFS2024-5_Konsolidering.pdf>, läst 2026-10-07. Lägre rang: Anticimex i Dagens PS (firma, säljer), <https://www.dagensps.se/privatekonomi/spara-pengar-pa-el-gor-inte-sa-har-hela-huset-forstors/>, 2026-02-02, läst 2026-10-07.
