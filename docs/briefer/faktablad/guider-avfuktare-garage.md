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
