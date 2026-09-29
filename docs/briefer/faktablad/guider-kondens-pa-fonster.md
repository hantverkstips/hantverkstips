# Faktablad: guider/fukt/kondens-pa-fonster

Ny sida. `/fukt/kondens-pa-fonster/` · `src/content/guider/fukt/kondens-pa-fonster.mdx` · samling guider, `typ: problemguide`, `pelare: fukt`, `niva: enkel`, inget produktkort. Huvudfras **kondens på fönster insida** (110/mån, topp november). Sidofraser: kondens på fönster, imma på fönster (kortsvar, H1), kondens på fönster utsida, kondens mellan glasen (H2 om de tre fallen). Checklista: `docs/briefer/seo-checklista-2026-09-29/fukt-4.md`, avsnittet /fukt/kondens-pa-fonster/.

Allt hämtat 2026-09-29 om inget annat står. "Egen räkning" är märkt med formel.

---

## 0. Besked till hantverkaren

- **Formeln och talen finns redan.** Daggpunkten räknas som i `/rakna/daggpunkt/` (Magnus, Lawrence 2005). RF-värden som på `/fukt/luftfuktighet-inomhus/`. Upprepa inte deras tabeller; hänvisa. Faktabladen: `rakna-daggpunkt.md`, `kunskap-luftfuktighet-inomhus.md`.
- **Rutans temperatur har ingen läsbar tabell från tillverkare eller branschorgan.** Tabellen i avsnitt 3 är egen räkning med standardformeln och Energimyndighetens U-värden. Det går emot checklistans krav på källa för tabellen; se avsnitt 7. Talen stämmer med räknarens antagande "fönsterglas i januari 5 till 10 grader".
- **Villaägarna säger 40–60 % RF**, sajten säger under 45 % i sovrum vintertid (Astma- och Allergiförbundet) och 30–70 % går bra (Alingsås kommun). Villaägarna är intresseorganisation och väger lättare. Använd sajtens tal.
- **BBR gäller inte.** Ventilationen står i BFS 2024:8 3 kap. 4 och 5 §§ (avsnitt 4).
- **Kantzonen är kallare än mitten, men inget tal hittat.** LTH säger att varm kant minskar kondens i bågens nederdel, utan tal. Skriv utan grader.

---

## 1. Daggpunkten (H2 2)

- Formel och källa: `rakna-daggpunkt.md`, "Konstanter": Magnus a 6,1094 hPa, b 17,625, c 243,04; Lawrence 2005, BAMS 86(2); osäkerhet 0,35 grader. Ånghalt 216,68 × e / T (SMHI). Hänvisa, skriv inte om.
- Egen räkning med samma formel, rumstemperatur 21 °C (för kortsvaret "vid 21 °C och X %"):

| RF inne | 30 % | 35 % | 40 % | 45 % | 50 % | 55 % | 60 % |
|---|---|---|---|---|---|---|---|
| Daggpunkt vid 21 °C | 2,8 | 5,0 | 6,9 | 8,6 | 10,2 | 11,6 | 12,9 |

- Kontroll mot sajten: 20 °C/50 % ger 9,3 och 22 °C/50 % ger 11,1, samma som `kunskap-luftfuktighet-inomhus.md` tabell 1.
- `<Kalkylator namn="daggpunkt" />` inbäddas i H2 2 (checklistan). Räknarens egen text om sovrummet i januari (20 grader, 50 %, daggpunkt 9,3, gammalt tvåglas immar) finns i `rakna-daggpunkt.md`; upprepa inte.

---

## 2. RF-värden inomhus (H2 4)

Samma som `/fukt/luftfuktighet-inomhus/`, källorna i `kunskap-luftfuktighet-inomhus.md` H2 3:

| Påstående | Tal | Källa |
|---|---|---|
| Bostad bör utredas om medel över eldningssäsongen | över 7 g/kg torr luft, "vilket motsvarar cirka 45 % relativ luftfuktighet vid 21 °C" | Folkhälsomyndigheten, FoHMFS 2014:14 |
| Fukttillskott vintertid | regelmässigt över 3 g/m³ ska utredas | FoHMFS 2014:14 |
| Sovrum vintertid | "gärna under 45 procent" | Astma- och Allergiförbundet |
| Vardagsrum | runt 50 %, 30–70 % går bra | Alingsås kommun |
| Tecken på fuktskada | "omfattande kondens på fönstrens insida vid cirka minus 5 grader ute eller kallare" | Folkhälsomyndigheten (lista i luftfuktighetsfaktabladet H2 2) |

- Källorna säger olika: Villaägarna, "Fönsterkondens", 12 januari 2025, https://www.villaagarna.se/radgivning-och-tips/inomhus/fonster/fonsterkondens/ : "en relativ fuktighet mellan 40 och 60 procent". Villaägarna: "Fem minuter på vintern och 10–15 minuter under övriga årstider" för vädring. Folkhälsomyndigheten och Astma- och Allergiförbundet väger tyngst.

---

## 3. Rutans temperatur (H2 3)

**Formel:** θsi = θi − Rsi × U × (θi − θe). θsi = glasets innertemperatur, θi = inne, θe = ute, U = fönstrets U-värde, Rsi = inre värmeövergångsmotstånd 0,13 m²K/W för vertikal yta (SS-EN ISO 6946; värdet står i `kunskap-u-varde.md`, tabellen över Rsi och Rse). Gäller mitt på glaset i jämvikt, utan sol och utan gardin.

**U-värden:** Energimyndigheten, "Fönster. En guide från energi- och klimatrådgivningen", ET 2025:01, tabell 1 (`kunskap-u-varde.md` och `guider-renovera-fonster.md` avsnitt 8): tvåglas standard 2,8–3,0; tvåglas lågemission 1,7–2,0; treglas standard 1,4–1,8; treglas lågemission 0,8–1,2; energifönster 0,6–0,9. Nytt fönster bör ha under 1,0 (s. 13).

**Egen räkning, inne 21 °C, Rsi 0,13:**

| Fönster (ET 2025:01) | U, W/m²K | Glasets insida vid −5 °C ute | vid −10 °C | vid −20 °C |
|---|---|---|---|---|
| Tvåglas standard | 3,0 | 10,9 | 8,9 | 5,0 |
| Tvåglas standard | 2,8 | 11,5 | 9,7 | 6,1 |
| Tvåglas lågemission / treglas standard | 1,8 | 14,9 | 13,7 | 11,4 |
| Treglas standard | 1,4 | 16,3 | 15,4 | 13,5 |
| Treglas lågemission | 1,0 | 17,6 | 17,0 | 15,7 |
| Energifönster | 0,8 | 18,3 | 17,8 | 16,7 |

- Jämför med daggpunkten i avsnitt 1: vid 21 °C och 45 % (8,6 °C) immar ett tvåglas med U 3,0 vid −10 ute (8,9 °C, marginal 0,3) och gör det säkert vid −20 (5,0). Ett treglas med U 1,4 håller 13,5 vid −20 och immar först vid ca 62 % RF (egen räkning: mättnadsångtryck vid 13,5 °C / vid 21 °C = 15,4 / 24,8 hPa). Märks egen räkning.
- **Två avvikelser att veta:** (1) U-värdet i ET 2025:01 gäller hela fönstret (Uw), formeln gäller glasmitten (Ug). Glasmitten är oftast bättre än hela fönstret, så tabellen är något för kall i mitten. (2) Kanten och nederkanten är kallare än mitten; inget tal hittat.
- LTH, Helena Bülow-Hübe, "Fönsterfysik och energitransport genom fönster" (kursmaterial ABK100, odaterat), https://www.lth.se/fileadmin/energi_byggnadsdesign/images/Utbildning/ABK100/F8_PM_f_nsterfysik.pdf , ordagrant: varm kant ger liten förbättring av fönstrets U-värde, "men risken för att det bildas kondens på insidan av bågens bottenstycke reduceras kraftigt (Jonsson, 1985 och Frank, 1994)".
- Butik, bara som jämförelse, inte som källa för prestanda: Klarfönster, "Är 3-glasfönster värt det?", odaterad: "Vid 21 grader inomhus håller insidan av ett 3-glasfönster ungefär 18 grader, mot 16 grader för 2-glas." Utetemperatur anges inte. https://klarfonster.se/blog/3-glas-vart-det
- SP:s sida "Fakta om fönster" (energy.extweb.sp.se) med en tabell över glasets yttemperatur vid 20 °C inne och −10/−20 °C ute syns i sökutdrag men gick inte att nå (DNS-fel). **Utdrag**, talen inte lästa.

---

## 4. Vad som hjälper (H2 4)

### Ventilation, BFS 2024:8

Källa: Boverkets föreskrifter om hygien, hälsa och miljö, BFS 2024:8, https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf , s. 5. I kraft 1 juli 2025; BBR fick väljas i stället för ärenden och arbeten före 1 juli 2026 (BFS 2024:14 övergångsbest. p. 3, se `granskning-bbr-2026-09-28.md`). Ordagrant bekräftat i `underlag-kalkyl-kontrollplan-varv-2-2026-09-28.md`:

- 3 kap. 4 §: "Byggnaders ventilationssystem ska vara utformade så att rum kan ha kontinuerlig luftväxling."
- 3 kap. 5 §: "Ventilationssystem för bostäder ska vara utformade för ett uteluftsflöde på minst 0,35 l/s per kvadratmeter golvarea. Ventilationssystem för rum i bostäder ska vara utformade för ett uteluftsflöde på minst 4,0 l/s per person."
- Egen läsning: kraven gäller nya byggnader och ändring, inte ett befintligt hus där inget ändras. Skriv "så mycket ska ett nytt hus klara", inte "ditt hus måste".
- Egen räkning: 0,35 l/s per m² × 3,6 = 1,26 m³/h per m²; vid 2,5 m takhöjd 0,5 luftomsättningar i timmen (samma som räknarens konstant i `avfuktare.ts`, där det står med FoHMFS 2014:18 som källa).

### Ordningen

- Vädra, sänk fukten, värm, täta eller byta: räknarens åtgärdstexter i `rakna-daggpunkt.md` (vädra kort med genomdrag, lock på grytor, frånluft efter dusch, tvätt inte i sovrummet; luftspalt bakom möbler). Luftfuktighetssidans H2 5 har samma ordning (vädra, värm, avfukta). Hänvisa.
- **Avfuktare inte som första råd** (checklistan). Räknaren, ordagrant i sak: köp ingen avfuktare till ett sovrum som immar i januari, uteluften är torr. Avfuktare bara om RF är hög året runt, länk till köpguiden.
- Energimyndigheten ET 2025:01, s. 11: åtgärder på befintliga fönster med U-värde ned till 1,3–1,8 (tabell i `guider-renovera-fonster.md` avsnitt 8). Kostnad för fönsterbyte: **ingen källa i det här bladet**; checklistan förbjuder byte som lösning utan kostnad.

---

## 5. Insidan, utsidan, mellan glasen (H2 1)

| Var | Orsak | Farligt? | Källa |
|---|---|---|---|
| Insidan | Inneluftens fukt mot kall ruta, glaset under daggpunkten | Enstaka morgon nej; omfattande vid −5 ute eller kallare är tecken på fuktproblem | Folkhälsomyndigheten (avsnitt 2); Energimyndigheten ET 2025:01 s. 10: "Kondens på insidan av fönstret kan leda till fuktskador" |
| Utsidan | Ytterglaset så kallt att uteluftens fukt fäller ut; tecken på välisolerat fönster | Nej | ET 2025:01 s. 10: "kondens på utsidan oftast inte utgör en risk eftersom moderna fönster är byggda för att tåla hög fuktbelastning"; Villaägarna: "fönstret är så välisolerande" |
| Mellan glasen, isolerruta | Rutan punkterad, fukt in mellan glasen | Rutan har förlorat funktionen | Villaägarna: "glaskassetten har punkterats så att fukt kommer in mellan glasen" |
| Mellan glasen, kopplade bågar | Fel täthet mellan bågarna | Åtgärdas med tätning | Villaägarna: "det är för tätt mellan bågarna" eller "för tjocka färglager". Relevant för `/fasad/renovera-fonster/` och `/fasad/dreva-fonster/` |

- ET 2025:01 s. 10, ordagrant: "Kondens kan uppstå på fönster, särskilt vid kallt väder och otillräcklig ventilation." Tecken att hålla utkik efter: "röta, brister i fogar och tätningslister, färg som flagnar eller kittsläpp". Adress: https://energiochklimatradgivningen.se/download/18.5e9a579b195c021e865e6614/1742900645267/BQ_EPRO011_FO%CC%88NSTER_ET_2025_01_A4_TA.pdf (läst via Energimyndighetens kopia 2026-09-29).

---

## 6. När det är ett problem (H2 5)

- ET 2025:01 s. 10: fuktskador i karm och båge, tecken ovan; "Orsaken kan vara en skada på fönstret eller dropplisterna, eller att fönstret är felmonterat."
- Mögel: BFS 2024:8 7 kap. 1 § andra st. (75 % RF som högsta tillåtna fukttillstånd när materialets värde inte är undersökt) gäller byggnadsdelar, inte rumsluften (`granskning-bbr-2026-09-28.md`). Räknaren använder 75 % vid ytan. Skriv inte "luften får inte ligga över 75 %".

---

## 7. Sökanalys

Checklistans läsning 2026-09-29 (US-sökverktyg, ordningen osäker). byggahus.se omläst: artikeln "Kondens på insidan av fönster – orsaker och lösningar" ger **403** i WebFetch; sökutdraget säger att en professor i byggteknik pekar på dålig eller obalanserad ventilation och att glaset värms långsammare än luften vid väderomslag. **Utdrag**, namn och datum ej lästa.

1. **klarfonster.se** (fönsterbutik, ettan). Har: insida, utsida, mellan glasen. Saknar: daggpunkt, RF, källa; enda talet U 0,79 i en säljruta.
2. **aerius.se** (ventilationsfirma, två sidor, 2025-10-06 och 2025-11-28). Har: tabell över de tre fallen, Faq. Saknar: tal.
3. **skaala.com** (tillverkare). Saknar: tal och källa.
4. **byggahus.se** (403, utdrag ovan).
5. Femte platsen ej namngiven i checklistan.

Vår sida kan ha som ettan saknar: daggpunkten räknad med formel och källa, räknaren inbäddad; RF med Folkhälsomyndigheten; glasets temperatur per U-värde och utetemperatur (egen räkning, formel utskriven); BFS 2024:8 3 kap. 5 § ordagrant; Energimyndighetens mening om ut- och insida; skiss.

---

## 8. Interna länkar (checklistan punkt 9)

- `/rakna/daggpunkt/` inbäddad (H2 2), `/fukt/luftfuktighet-inomhus/` (H2 4), `/el/u-varde/` (H2 3), `/fasad/dreva-fonster/` eller `/fasad/renovera-fonster/` (H2 4).
- Köpguiden `/fukt/avfuktare-kallare/` bara om RF hög året runt.
- Inlänkar: `/fukt/luftfuktighet-inomhus/` (där fönstren nämns, H2 2 sovrummet), `/el/u-varde/` eller `/fasad/renovera-fonster/`.

---

## 9. Osäkert och saknat

- Tabell över glasets yttemperatur från tillverkare, branschorgan eller lärobok: **saknas** (SP-sidan onåbar). Tabellen är egen räkning.
- Kantzonens temperatur: inget tal.
- byggahus.se: 403, bara utdrag.
- Fönsterbytets kostnad: inte hämtad (väntar i Fasad).
