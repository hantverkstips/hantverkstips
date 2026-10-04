# Faktablad: Självdrag (D3, `/fukt/sjalvdrag/`)

Huvudfras: **självdrag** (6 360 i månaden). Sidtyp: kunskap. Äger enligt `docs/INNEHALLSARKITEKTUR.md` rad 65: självdrag, spaltventil, frånluftsventilation, ftx ventilation, ventilation i hus. Plan: `docs/SOKORDSANALYS.md` 12.7, rad D3: "Systemen i äldre hus, med spaltventilen och FTX som avsnitt". Sökanalysen av de fem som rankar görs av SEO-agenten och står inte här.

Skrivet 2026-10-04 av underlag. "Läst 2026-10-04" betyder hämtat och läst den dagen. Citat inom citattecken är ordagranna ur PDF-text (pdftotext) eller HTML (curl). **UTDRAG** = WebFetch-sammanfattning, inte ordagrant. **EGEN** = egen räkning med formel och indata. T-nummer finns i `fukt-gemensamma-tal.md` tabell 0 och läses inte om här; S-nummer är nya. Ingen text här är förlaga.

---

## 0. Talen i en tabell

| Nr | Tal | I sak | Källa | Läst |
|---|---|---|---|---|
| T43 | 0,35 l/s per m² golvarea | Minsta uteluftsflöde, bostad | BFS 2024:8 3 kap. 5 § (byggande); FoHMFS 2014:18 (befintliga) | 2026-09-30; FoHMFS läst ordagrant 2026-10-04 (S1) |
| T44 | 4,0 l/s per person | Minsta uteluftsflöde per rum | BFS 2024:8 3 kap. 5 § | 2026-09-30 |
| T45 | 1 000 ppm CO₂ | Över detta tyder på otillräcklig ventilation | FoHMFS 2014:18; vägledningen tabell 1 | nu ordagrant, S3 |
| T46 | 0,5 rumsvolymer/h | Lägsta luftomsättning i bostad | FoHMFS 2014:18 | nu ordagrant, S1 |
| T11 | 3 g/m³ | Fukttillskott vintertid, bör inte regelmässigt överskridas | FoHMFS 2014:14 och 2014:18 | nu ordagrant i 2014:18, S2 |
| T12 | ca −5 °C | Omfattande kondens på fönstrets insida vid denna utetemperatur → undersök ventilationen | FoHMFS 2014:18 (också 2014:14) | nu ordagrant, S4 |
| S1 | 0,5 rv/h; 0,35 l/s per m²; 4 l/s per person | "I bostäder bör det specifika luftflödet (luftomsättningen) inte understiga 0,5 rumsvolymer per timme (rv/h)." | FoHMFS 2014:18, PDF | 2026-10-04 |
| S2 | 3 g/m³ | Skillnaden i absolut luftfuktighet ute–inne vintertid bör inte regelmässigt överstiga | FoHMFS 2014:18 | 2026-10-04 |
| S3 | 1 000 ppm; ute ca 400 ppm; 600–800 ppm i väl ventilerade bostäder; 20 000 ppm | CO₂ som indikator, inte hälsogräns | FoHMFS 2014:18; FoHM vägledning om ventilation (uppd. 2024-12-12) | 2026-10-04 |
| S4 | ca −5 °C | Kondens på fönstrets insida som skäl att undersöka ventilationen | FoHMFS 2014:18 | 2026-10-04 |
| S5 | minst ca 10 grader kallare ute än inne | Först då är det meningsfullt att mäta luftomsättningen vid självdrag | FoHM vägledning om ventilation | 2026-10-04 |
| S6 | inga riktvärden | FoHM har inga riktvärden för frånluft i badrum, toalett, tvättrum eller köksfläkt (= B3) | FoHM vägledning | 2026-10-04 |
| S7 | Δp = ρ·g·h·Δt/T; ρ 1,2 kg/m³; g 9,81 m/s²; T 293–295 K; förenklat Δp = 0,04·h·Δt | Termisk drivkraft i självdrag | Boverket, Självdragsventilation, handbok, februari 1995, s. 12 | 2026-10-04 |
| S8 | Δp = 0,043·(Tinne − Tute)·h | Samma, SWESIAQ:s variant (efter LTH, Faraguna 2012) | SWESIAQ, Utredning av självdragssystem i bostad, 2023-05-15, s. 7 | 2026-10-04 |
| S9 | Δp = 0,0435·h·ΔT | Samma, RISE:s variant | RISE (fd SP) via fuktsaker.se, Tryckskillnader | 2026-10-04, UTDRAG |
| S10 | tabell 1.2 | Drivtryck i Pa vid 5 och 8 m, inne 21 °C, ute −10/0/+10/+20 | **EGEN**, S7 | – |
| S11 | Δp = c·ρv²/2; c = 0,5 → 0,3·v² | Vindens tryck | Boverket 1995 s. 13; SWESIAQ 2023 s. 9 (formel 3a) | 2026-10-04 |
| S12 | 30 Pa vid 10 m/s | Vindens tryck, grov uppskattning; "ofta större betydelse än det termiska drivtrycket" | SWESIAQ 2023 s. 9 | 2026-10-04 |
| S13 | sällan över 30 Pa, ofta under 10 Pa | Termiska drivtrycket | SWESIAQ 2023 s. 7 | 2026-10-04 |
| S14 | 4 K | Internt värmetillskott att räkna med vid dimensionering av självdrag i bostad | Boverket 1995 s. 11 | 2026-10-04 |
| S15 | minst 1 m/s öppet läge; vindskyddat "knappast" | Vind att räkna med vid dimensionering | Boverket 1995 s. 11 | 2026-10-04 |
| S16 | högst 20 % | Självdrag bör inte överstiga avsett flöde under uppvärmningssäsong med mer än så | Boverket 1995 s. 15 | 2026-10-04 |
| S17 | kök 200 cm², badrum 150 cm², toalett 100 cm²; totalt normalt 350 cm² (större lägenhet 450) | Minsta kanalarea för självdrag i äldre byggregler (BABS 60, SBN 67, SBN 75, SBN 80) | Boverket 1995 s. 23 | 2026-10-04 |
| S18 | 0,625 m/s; 22 l/s; ca 63 m² (350 cm²), ca 80 m² (450 cm²) | Boverkets räkneexempel med äldre kanalareor, 4 m skorstenshöjd, 4 K, 1 m/s | Boverket 1995 s. 23 | 2026-10-04 |
| S19 | 200 W | Handdukstork i badrum året runt för att hålla drivkraften | Boverket 1995 s. 10 (anm.) | 2026-10-04 |
| S20 | 10 l/s kök + forcering; 15 l/s pentry; 10 l/s bad med öppningsbart fönster; 10 l/s med forcering till 30 l/s, eller 15 l/s, bad utan öppningsbart fönster; 10 l/s toalett; +1 l/s per m² över 5 m² | **Historiska allmänna råd** om minsta frånluftsflöde **vid mekanisk ventilation**, BBR 94 (BFS 1993:57) t.o.m. BFS 1998:38. Upphörde 2006. Gäller inte i dag | BFS 1993:57 6:232; Svensk Ventilation (branschorganisation), sammanställning 2019-01-08 | 2026-10-04 |
| S21 | 4 l/s per sovplats | Historiskt råd om uteluft till sovrum, samma regelverk | samma | 2026-10-04 |
| S22 | S och F: ingen OVK; FT, FX, FTX: första besiktning, ingen återkommande | OVK i en- och tvåbostadshus | BFS 2011:16 (t.o.m. BFS 2017:10) 2 §; PBF (2011:338) 5 kap. 1 §; Boverket, tabell | 2026-10-04 |
| S23 | 3 år / 6 år | Återkommande OVK flerbostadshus FT/FTX / S, F, FX (för jämförelse) | BFS 2011:16 3 § | 2026-10-04 |
| S24 | 72 ± 3 % självdrag; 13 ± 2 F; 1 ± 1 FT; 9 ± 3 FTX; 4 ± 1 FVP | Andel småhus per ventilationssystem, inventering 2007–2008 | Boverket, Energi i bebyggelsen (BETSI), dec 2010, tabell 4.1, s. 71 | 2026-10-04 |
| S25 | 97 ± 2 % (–1960); 88 ± 8 % (1961–75); 23 ± 9 % (1976–85); 11 ± 5 % (1986–95 och 1996–2005) | Andel småhus med självdrag per byggår | samma tabell | 2026-10-04 |
| S26 | ca 1,2 miljoner småhus | Har självdrag | Boverket, Så mår våra hus (BETSI), sept 2009, s. 81 | 2026-10-04 |
| S27 | 0,40 oms/h | Uppmätt medel, alla småhus (spårgas, 14 dygn) | BETSI 2009 s. 94; BETSI 2010 s. 72 | 2026-10-04 |
| S28 | 0,40 / 0,36 / 0,45 oms/h | Uppmätt medel per system: självdrag / F & FVP / FT & FTX | BETSI 2010 s. 72 (figur 4.2, talen i texten) | 2026-10-04 |
| S29 | 0,23 l/s per m² Atemp | Uppmätt medelflöde i småhus | BETSI 2010 s. 73; BETSI 2009 s. 68 | 2026-10-04 |
| S30 | fyra femtedelar; 82 % av golvarean | Småhus under 0,35 l/s per m² | BETSI 2010 s. 11 och s. 74 | 2026-10-04 |
| S31 | 84 % | Byggnader med mögel på vinden som har självdrag | BETSI 2009 s. 41 (= K9 i `fukt-mogel-gemensamt.md`) | 2026-10-04 |
| S32 | 1,768 ± 0,144 g/m³ (småhus); 1,216 ± 0,175 (flerbostadshus) | Uppmätt fukttillskott, medel | BETSI 2009 tabell 4.22, s. 93 | 2026-10-04 |
| S33 | 75–90 / 50–75 / 75–85 / 45–70 % | Temperaturverkningsgrad: motströms platt / korsströms platt / roterande / vätskekopplad | Energimyndigheten, Ventilation, ET 2025:03, tabell 1, s. 8 | 2026-10-04 |
| S34 | halvera | Värme och varmvatten kan halveras med värmeåtervinning "beroende på husets förutsättningar och geografiska läge" | Energimyndigheten, Husguiden, Ventilation (uppd. 2022-07-08) | 2026-10-04 |
| S35 | varannan timme | "Luften i ett rum ska bytas ut varannan timme." | samma | 2026-10-04 |
| S36 | minst en gång per år, gärna hösten | Filterbyte i mekaniska system | ET 2025:03 s. 9 | 2026-10-04 |
| S37 | upp till 15 % | Ventilationens andel av byggnadens energianvändning | ET 2025:03 s. 4 | 2026-10-04 |
| S38 | 7,5 l/s vid 10 Pa; 2,5 l/s per bricka vid 10 Pa; öppen ned till +10 °C, stängd vid −5 °C; filter 1–2 ggr/år | Väggventil Fresh 100 Thermo | Fresh, produktblad 2003-11-01 (**tillverkare**) | 2026-10-04 |
| S39 | tabell 5.2 | Flöde genom en sådan ventil vid självdragets tryck | **EGEN**, S38 och SWESIAQ (flöde ∝ √Δp) | – |
| S40 | 0,11–2,5, median ca 0,6 l/s per m² vid 50 Pa | Läckflöde i hundra nybyggda bostäder; äldre självdragshus "ofta över 1" | SWESIAQ 2023 s. 10 (refererar Svensson och Hägerhed 2009) | 2026-10-04 |
| S41 | ca hälften | "Det är inte ovanligt att hälften av bostadens tilluft kommer in i form av läckflöden" | SWESIAQ 2023 s. 10 | 2026-10-04 |
| S42 | 15–30 min | Imma på badrumsspegeln efter dusch bör försvinna efter högst så lång tid | SWESIAQ 2023 s. 33 | 2026-10-04 |
| S43 | 0,15 m/s | Lufthastighet, drag (HSLF-FS 2024:10, ersätter FoHMFS 2014:17) | `guider-kallras.md` rad 11–12 | 2026-09-30 |
| S44 | 1989 / 1994 | Krav på värmeåtervinning infördes i Nybyggnadsreglerna 1989 (BFS 1988:18); togs bort 1994 för hus som värms med förnybart, el undantaget | BETSI 2009 s. 81 | 2026-10-04 |

---

## 1. Hur självdrag fungerar

### 1.1 Principen, myndighet och bransch

- Energimyndigheten, *Ventilation. En guide från energi- och klimatrådgivningen*, ET 2025:03, "Statens energimyndighet, mars 2025", ISBN (pdf) 978-91-7993-201-5, s. 5: "Självdragssystem är allra vanligast i småhus och äldre flerbostadshus. I självdrags­system finns det inte fläktar för till- och frånluft. Systemet bygger i stället på den så kallade skorstenseffekten genom att varm inomhusluft stiger uppåt och leds ut genom ventilationskanaler som ofta mynnar ut i en takhuv på byggnadens tak. Frisk utomhus­luft tas in genom ventiler i väggar och fönster."
- Samma s. 5: "Då systemet inte kräver några fläktar eller andra installationer är det mycket billigt i drift. Samtidigt är det inte så lätt att reglera luftflödet i ett självdragssystem. Under vindstilla och varma sommardagar kan luftflödet vara otillräckligt eller helt avstanna, vilket ökar risken för dålig inomhusluft, fukt och mögelbildning. På kalla vinterdagar kan luftflödet däremot bli för kraftigt, vilket kan leda till drag och onödiga värme­förluster."
- Samma s. 6, bildtext: "Självdrag innebär att bostaden har ventilation utan fläktar. Värmeskillnad mellan inne och ute och vindpåverkan på byggnaden skapar drag där frisk utomhusluft tränger in genom fönster och dörrar."
- Folkhälsomyndigheten, vägledning om ventilation (adress i källförteckningen), "S = Självdragsventilation. Bostadens ventileras passivt utan någon mekanisk fläkt. Ventilationen styrs av temperatur- och tryckskillnader." [sic: "Bostadens"]
- Svensk Ventilation (branschorganisation), "Självdragssystem" (publicerad 2014-07-01, ändrad 2015-01-07): "Principen för självdrag är enkel, den varma luften inomhus stiger uppåt och försvinner ut ur huset via luftkanaler, vilket skapar ett undertryck i byggnaden." och "Tack vare undertrycket sugs ny luft in utifrån, den nya luften kommer in via otätheter i huset."
- SWESIAQ 2023 s. 7: "Det termiska drivtrycket är sällan högre än 30 Pa (3 mm vattenpelare), ofta lägre än 10 Pa". Och: "Den tryckskillnad som driver luften genom bostaden är alltså inte högre än det tryck som man upplever på någon millimeters vattendjup!"

### 1.2 Formeln, och tre konstanter som skiljer sig lite

**Boverket, *Självdragsventilation*, handbok, Boverket byggavdelningen, februari 1995, ISBN 91-7147-166-9, avsnitt 5 "Termiska drivkrafter", s. 12** (ordagrant ur PDF-texten, OCR, symbolerna rekonstruerade):

> Den termiska drivkraften kan skrivas som Δp1 = ρgh·Δt/T där ρ = luftens täthet = 1,2 kg/m³, g = jordaccelerationen = 9,81 m/s², h = höjdskillnaden mellan byggnadens luftintag och utsläpp, Δt = skillnaden mellan inne- och utetemperaturen samt T = innetemperaturen i K, normalt 293 - 295 K. Vid normal inomhustemperatur blir termiska drivkraften Δp1 = 0,04·h·Δt

- **h** är höjden mellan **luftintaget** (uteluftsventilen) och **utsläppet** (kanalens mynning på taket), inte kanalens längd. SWESIAQ s. 7 kallar det lyfthöjden: "det vertikala avståndet mellan uteluftdonen och den skorstensmynning på taket där bostadens frånluft (avluft) släpps ut."
- Handboken är från 1995 och skriven mot BBR 94. Fysiken gäller, regelhänvisningarna gör det inte (avsnitt 2).

Konstanterna som cirkulerar:

| Källa | Rang | Konstant | Adress |
|---|---|---|---|
| Boverket 1995 s. 12 | myndighet (äldre handbok) | 0,04 | PDF i källförteckningen |
| SWESIAQ 2023 s. 7, formel (1), "(approxima­tiva)", efter Faraguna, LTH, TVIT--12/5039, 2012 | ideell förening för innemiljöutredare; arbetsgruppen hade med Svensk Ventilation, och prof. Lars Jensen, LTH, gjorde beräkningsmodellen | 0,043 | PDF i källförteckningen |
| RISE (fd SP), fuktsaker.se, "Tryckskillnader" | forskningsinstitut | 0,0435 | UTDRAG |

- Skillnaden (ca 8 %) beror på vilken lufttäthet och temperatur man räknar med. Den spelar ingen roll för en sida som visar storleksordningen. **Väger tyngst:** Boverket för formeln med redovisade konstanter; RISE och SWESIAQ bekräftar storleksordningen. Inget medelvärde. Skriv "ungefär 0,04 pascal per meter och grad" om en avrundning behövs.
- **EGEN kontroll:** 1,2 × 9,81 / 294,15 = 0,0400. Stämmer med Boverkets 0,04 vid 21 °C inne.

**Tabell 1.2. Termiskt drivtryck i pascal, inne 21 °C (EGEN)**

Formel: Δp = 1,2 × 9,81 × h × Δt / 294,15 (S7, Boverket). Kontroll: Δp = g·h·(ρute − ρinne) med ρ = 101 325 / (287,05 × T[K]) (allmänna gaslagen, torr luft, normalt lufttryck; **EGEN**).

| Ute | Δt | h = 5 m (S7) | h = 5 m (gaslag) | h = 8 m (S7) | h = 8 m (gaslag) |
|---|---|---|---|---|---|
| −10 °C | 31 | 6,2 | 6,9 | 9,9 | 11,1 |
| 0 °C | 21 | 4,2 | 4,5 | 6,7 | 7,2 |
| +10 °C | 11 | 2,2 | 2,3 | 3,5 | 3,7 |
| +20 °C | 1 | 0,2 | 0,2 | 0,3 | 0,3 |

- Boverkets förenkling räknar lite lågt i stark kyla (den delar med innetemperaturen). Skillnaden är under en pascal vid 0 °C. Sidan kan använda vilken kolumn som helst men ska säga vilken.
- Antaganden: ingen vind, inget värmetillskott i kanalen från en varm skorsten (avsnitt 4.3), kanalen har rumstemperatur hela vägen.
- 5 m motsvarar ungefär ett enplanshus med kanal genom vind och tak, 8 m ett hus i ett och ett halvt eller två plan. **Antagande**, ingen källa för typiska höjder.
- Jämförelse: SWESIAQ:s eget exempel s. 7–8, inne 20 °C: −20 ute och h 16 m ger 27,5 Pa; +10 ute och h 4 m ger 1,7 Pa. "Termiska drivtrycket blir alltså 16 gånger högre i fall A jämfört med i fall B." Flödet är ungefär proportionellt mot roten ur drivtrycket (formel 4c), alltså cirka fyra gånger: "Man ska alltså inte bli förvånad om luftflödet blir lågt i en enplansvilla under vår och höst."

### 1.3 Vinden

- Boverket 1995 s. 13, ordagrant: "Vindtrycket mot en fasad och/eller det undertryck som bildas på läsidan och vid parallellt anblåsta fasader liksom det undertryck som kan alstras vid vindens rörelse förbi en avluftöppning kan skrivas som Δp2 = c·ρv²/2 där v = vindhastigheten, ρ = luftens täthet som utan hänsyn till lufttemperaturen kan sättas till 1,2 kg/m³, c = en formfaktor som antingen sätts till påvisat värde eller som utan redovisning normalt kan sättas till 0,5. För c = 0,5 är vindtrycket Δp2 = 0,3·v²."
- SWESIAQ s. 8–9: samma 0,3·U² (formfaktor −0,5 vid skorstensmynningen, fasaderna tar ut varandra). "Vid en vindstyrka på 10 m/s blir Δpvind ≈ 30 Pa. Om man jämför med figur 2 ser man att vindtrycket ofta får större betydelse än det termiska drivtrycket."
- **EGEN** med 0,3·v²: 2 m/s ger 1,2 Pa, 5 m/s ger 7,5 Pa, 10 m/s ger 30 Pa.
- Hjälper: SWESIAQ s. 8: "Vid skorstensmynningen skapar vinden oftast ett undertryck." Och: "Om bostaden enbart har uteluftdon mot vindsidan, får vinden ofta dubbel inverkan, dels genom att trycka in mer luft vid uteluftdonen, dels genom undertrycket vid skorstensmynningen."
- Stör: samma: "Vid olämplig utformning och vid kraftig vind, kan effekten istället bli den motsatta - luft pressas ner genom skorstenen." "Om å andra sidan uteluftdonen enbart vetter mot läsidan kommer de båda vindkrafterna att motverka varandra." Och "Vid hörn uppstår det ofta luftvirvlar som är svåra att förutse."
- Boverket 1995 s. 18: "Det skall också observeras att luftintag belägna på en byggnads läsida lätt kan bli frånluftöppningar p g a vindtrycket."
- Hjälpmedel på taket (SWESIAQ s. 8, figur 3): dragförstärkare (roterande huv som skapar undertryck) och vindflöjel som vänder avluften mot läsidan. Inga tal.
- RISE/fuktsaker.se (UTDRAG): "Vinden skapar i allmänhet utvändigt övertryck på byggnadens lovartsida och undertryck på gavler och läsida."

### 1.4 Kanalens höjd, area och dragning

- Höjden: drivtrycket är proportionellt mot h (1.2). Inget annat behövs för att visa varför ett högre hus drar bättre.
- Area och motstånd, Boverket 1995 s. 14, ordagrant: "Strömningsförluster uppstår vid luftens strömning i kanaler och genom don." ... "Uttrycket Z = Σζ + Σ(f·s) bör kunna sättas till värdet 6 om kanaler och don utförs för högst hastigheten 0,60 m/s och om kanaler utförs med högst 2 - 3 riktningsförändringar." "För Z = 6 erhålls strömningsförlusterna till Δpf = 3,6·u²." Det är källan för att **få och mjuka böjar** och **låg lufthastighet (stor area)** spelar roll.
- Energimyndigheten ET 2025:03 s. 16 (om mekaniska system, men samma fysik): "Ju större tvärsnitts­area kanalen har och ju rakare kanaldragning desto mindre fläktkraft behövs för att driva det".
- **Minsta kanalarea, historiskt** (S17), Boverket 1995 s. 23, ordagrant: "I samtliga här refererade byggregler angavs dimensioneringsanvisningar för självdrag enligt följande. I kök skulle anordnas självdragskanal med area minst 200 cm², i badrum kanal med minst area 150 cm² och i separat toalett 100 cm². Inga anvisningar för minsta "skorstenshöjd" angavs. Bostäder med självdrag enligt dessa äldre byggregler har således normalt 350 cm² total kanalarea, i större lägenheter ev 450 cm²." "Samtliga" = BABS 60, SBN 67, SBN 75, SBN 80 (samma sida).
- Samma sida, räkneexempel (S18): 4 m skorstenshöjd, 4 K, 1 m/s ger högst 0,625 m/s i kanalen; 350 cm² × 0,625 m/s = 22 l/s, vilket med 0,35 l/s per m² räcker till ca 63 m²; 450 cm² till ca 80 m².
- Fotnot samma sida, ordagrant: "Från undersökningar är känt att självdrag i det äldre befintliga svenska bostadsbeståndet ofta har lägre luftväxling än 0,35 l/s per m² golvarea." (OCR-raden är trasig, läst ur sammanhanget.)
- **Kanalen över taknocken: saknas.** Ingen myndighet, branschorganisation eller högskolekälla hittad som anger att frånluftskanalen ska mynna över nock eller en viss höjd över tak. Boverket 1995 säger tvärtom att äldre regler **inte** angav någon minsta skorstenshöjd. Sökt 2026-10-04 i Boverket 1995, SWESIAQ 2023, BBR 94, BBR 6-vägledningen.
- **Gällande krav på kanalarea: finns inte.** BFS 2024:8 3 kap. ställer funktionskrav (avsnitt 2).
- Överslagstabell, Boverket 1995 appendix s. 26: öppningsarea för uteluft i promille av golvarean, för h = 3, 6, 10, 15, 20 m och Δt = 2, 4, 6 K. Exemplet ordagrant: "En bostad på 120 m² kräver vid 6 m "skorstenshöjd" (= vertikal skillnad mellan avluftöppning och luftintag samt vid 2 K temp.-diff. inne-ute enligt tabellen luftintagsöppningar som är 0,47 ‰ av golvarean d v s 0,47 · 120 · 10⁻³ = 0,0564 m² = 564 cm²." Tabellen är OCR-skadad; tolkning (kontrollera mot originalet före användning): h 3 m: 0,55 / 0,48 / 0,42; 6 m: 0,47 / 0,41 / 0,36; 10 m: 0,39 / 0,33 / 0,27; 15 m: 0,30 / 0,25 / 0,20; 20 m: 0,21 / 0,17 / 0,12 ‰. Handboken: "För överslagsbedömning (ej för dimensionering)".

### 1.5 Var luften tas ut och kommer in

- Frånluft: Energimyndigheten ET 2025:03 s. 5: "Frånluftsventiler placeras vanligtvis i utrymmen såsom WC, tvättrum och kök." Svensk Ventilation, "Vad har jag för ventilation?" (publicerad 2021-09-08, ändrad 2021-09-13): "Har du frånluftsgaller i köket, våtutrymmen (ex. badrum) och sovrummet har du sannolikt självdrag. Du kan även ha luftintag, t.ex. borrade hål eller ventiler i fönsterkarmar eller lister."
- Två sorters system, SWESIAQ s. 7: "I centraliserade system kommer uteluften bara in i sovrum och vardagsrum. Sedan finns överluftdon till hallen och överluftdon till våtrum och kök, vilka endast har frånluft." och "I decentraliserade system har de flesta rummen både ute- och frånluftdon."
- Två plan, Boverket 1995 s. 19, ordagrant: "I lägenheter med mer än ett plan, t ex 1½-plans småhus, blir luftväxlingen i rum på övre våningen inte tillfredsställande med enbart tilluftöppningar i dessa rum. Även frånluftanordningar måste anordnas i varje rum på den övre våningen eftersom vid självdrag (liksom vid mekanisk frånluft) tryckskillnaden mellan våningarna medför att den huvudsakliga tillufttillförseln sker i nedre våningen."
- Uteluften: ventiler i vägg och fönster (ET 2025:03 s. 5); "uteluftsdon, vädringsfönster eller otätheter i byggnaden" (Svensk Ventilation); Boverket (via `guider-kallras.md` 9): "Ventilationsluften tas in genom uteluftsventiler placerade i ytterväggen, bakom radiatorer eller genom springventiler i fönstren."
- Överluft: SWESIAQ s. 11: överluftdon "bör skapas medvetet i form av t.ex. spalter eller hål under eller över dörrarna till hallen. Ofta har man glömt detta." FoHMFS 2014:18 räknar det som en indikator på brist om "rummen är oventilerade eller det saknas överluftsdon mellan rum där människor vistas stadigvarande" (S1-citatet, avsnitt 7).

---

## 2. Boverkets krav, och vad som gäller ett befintligt hus

### 2.1 BFS 2024:8, hänvisning och två tillägg

- 3 kap. 4–6 §§: se `fukt-gemensamma-tal.md` 7.1 (T43, T44). Läst om 2026-10-04 ur PDF:en. Två stycken som inte står där, ordagrant:
  - 3 kap. 3 §: "Byggnader ska vara utformade så att luftkvaliteten inte blir oacceptabel på grund av spridning av luftföroreningar inom byggnaden, från mark eller från utomhusluften till inomhusmiljön."
  - 3 kap. 6 § andra stycket: "Oacceptabla tryckskillnader över byggnadsdelar får inte uppstå vid ökad luftväxling."
- **Inget krav på ventilationssystem.** BFS 2024:8 kräver flöde och funktion, inte fläkt. Självdrag är inte förbjudet i föreskriften (samma princip sedan BBR 94, Boverket 1995 s. 7: "kraven på ventilation i funktionstermer, vilket innebär krav på viss luftväxling men inte krav på visst ventilationssystem.").
- **Inget flöde per rum** (kök, badrum, wc) i BFS 2024:8. Se B3, B4 i `fukt-gemensamma-tal.md` 13.1 och 2.3 nedan.

### 2.2 Gäller föreskrifterna ett befintligt hus?

BFS 2024:8 1 kap. 2 §, ordagrant: "Föreskrifterna i 1 kap. gäller vid uppförande av nya byggnader och vid ändring av byggnader för den ändrade delen. Föreskrifterna i 2-11 kap. gäller vid uppförande av nya byggnader. Föreskrifterna i 12-13 kap. gäller vid ändring av byggnader."

- Ändring: 12 kap. 1 §: "Vid ändring av byggnad ska den ändrade delen uppfylla kraven i 2-11 kap." med sju skäl för anpassning (bl.a. "det är oskäligt med hänsyn till ändringens omfattning", "kostnaden är oskäligt hög i förhållande till den förväntade nyttan").
- 1 kap. 12 §: "Vid ändring av en byggnads system för luftväxling ska det klarläggas vilka möjligheter det finns att utnyttja befintliga kanaler eller att på annat sätt minimera ingreppets omfattning."
- 13 kap. 4 §: "Ventilationskanaler som tas ur bruk ska demonteras eller tillslutas."
- **Ett hus som står kvar som det är** mäts inte mot BFS 2024:8 utan mot Folkhälsomyndighetens allmänna råd (miljöbalken), FoHMFS 2014:18 (avsnitt 7). Samma slutsats i `guider-kallras.md` 2 ("EGEN läsning: för ett befintligt hus är Folkhälsomyndighetens riktvärden rätt jämförelse").
- BFS 2024:8: beslutad 19 november 2024, i kraft 1 juli 2025, BBR valbar till 1 juli 2026 (`fukt-gemensamma-tal.md` 1.1). Boverkets arkiverade BBR 6-vägledning, ordagrant: "Observera att BBR endast gäller till och med den 1 juli 2026. Därefter upphör övergångsbestämmelserna för BBR att gälla."

### 2.3 Frånluftsflöden per rum: var talen kommer ifrån

**De cirkulerande talen (kök 10 l/s, badrum 10 eller 15, wc 10) är allmänna råd i BBR 94 (BFS 1993:57) avsnitt 6:232 och BFS 1998:38, och de gällde frånluft vid _mekanisk_ ventilation. De togs bort 2006. De gäller inte i dag och har aldrig gällt självdrag.**

- BFS 1993:57 (BBR 94:1, utkom 22 december 1993, i kraft 1 januari 1994), 6:232 Luftväxling, föreskrift: "Rum skall ha kontinuerlig luftväxling då de används. Uteluftflödet skall vara lägst 0,35 l/s per m² golvarea." Råd: "Uteluftflödet till rum eller del av rum för sömn och vila bör vara minst 4 l/s per sovplats." Råd: "Frånluftflödet vid mekanisk ventilation bör anordnas med en lägsta kapacitet enligt följande tabell (a)." <https://rinfo.boverket.se/BFS1993-57/pdf/BFS1993-57.pdf>, läst 2026-10-04 (OCR; tabellens kolumner förskjutna i OCR:en, läst mot Svensk Ventilations sammanställning nedan).
- Svensk Ventilation (branschorganisation), "Tidigare allmänna råd till BBR om ventilationsflöden", daterad 2019-01-08, ordagrant: "Till och med år 2006 innehöll Boverkets byggregler följande råd om hygienluftflöden: [...] Frånluftsflödet vid mekanisk ventilation bör anordnas med lägsta kapacitet enligt Tabell b." Tabell b "enligt allmänt råd i BFS 1998:38, avsnitt 6:232 Luftväxling". Så ska den stå (bostadsraderna):

| Utrymme (bostäder) | Minsta frånluftflöde, mekanisk ventilation, råd BBR 94–2006 |
|---|---|
| Kök | 10 l/s, forcering med minst 75 % uppfångningsförmåga för luftföroreningar |
| Pentry, kokvrå | 15 l/s |
| Bad- eller duschrum med öppningsbart fönster | 10 l/s (1) |
| Bad- eller duschrum utan öppningsbart fönster | 10 l/s med forcering till 30 l/s eller 15 l/s (1) |
| Toalettrum | 10 l/s |

(1) "Om golvarean är större än 5 m², bör frånluftsflödet ökas med 1 l/s för varje tillkommande m² därutöver. Om man skall kunna installera tvättmaskin, torktumlare eller liknande i badrum, bör ökade krav ställas på luftväxling."

- Läsning: med pdftotext -raw ur Svensk Ventilations PDF. I layout-läget hamnar badrumsraderna förskjutna (det är därför "badrum med fönster 10 l/s med forcering" ibland citeras fel). Raw-ordningen ovan stämmer med OCR:en av BFS 1993:57.
- Boverket 1995 s. 9, ordagrant: "Frånsett det generella kravet på 0,35 l/s per m² finns i BBR inga specificerade krav på vissa luftflöden. I rådstext anges dock normalt lämpliga frånluftflöden för olika utrymmen."
- **Gällande regel om flöde per rum: saknas.** Letat i: BFS 2024:8 3 kap. (PDF, 2026-10-04); Boverkets arkiverade BBR 6-vägledning (före 1 december 2025), avsnitten Ventilation, Luftkvalitet inomhus, Köksventilation (hänvisar till BBR 6:251–6:2524 utan tal och till Arbetsmiljöverket och Folkhälsomyndigheten för "specifika luftflöden"); Folkhälsomyndighetens vägledning ("inga riktvärden för frånluftsflöden i våtutrymmen"). BBR (BFS 2011:6) 6:2524-texten själv **ej läst** (bara rubriken i vägledningen).
- **SBN 75 och SBN 80: ej lästa.** Bara via Boverket 1995 (kanalareor och att självdrag godtogs i småhus enligt SBN 80, och i småhus och flerbostadshus med högst två våningar enligt SBN 75).

### 2.4 OVK, obligatorisk ventilationskontroll

**Ett en- eller tvåbostadshus med självdrag (S) eller mekanisk frånluft utan värmeåtervinning (F) omfattas inte av OVK alls. Med FT, FX (frånluftsvärmepump) eller FTX krävs första besiktning innan systemet tas i bruk, men ingen återkommande.**

- Plan- och byggförordning (2011:338) 5 kap. 1 §, ordagrant (riksdagen, t.o.m. SFS 2026:1722, läst 2026-10-04): "För att säkerställa ett tillfredsställande inomhusklimat enligt 8 kap. 25 § plan- och bygglagen (2010:900) ska en byggnads ägare se till att funktionen hos ventilationssystemet i byggnaden kontrolleras innan systemet tas i bruk för första gången (första besiktning) och därefter regelbundet vid återkommande tillfällen (återkommande besiktning). En- och tvåbostadshus omfattas inte av kravet på återkommande besiktning."
- Undantaget för självdrag står **inte** i förordningen utan i Boverkets föreskrifter. BFS 2011:16 (OVK 1) med ändringar t.o.m. BFS 2017:10, 2 §, ordagrant (konsoliderad version och PBL kunskapsbanken): "Kravet på funktionskontroll gäller inte en- och tvåbostadshus med självdragsventilation eller mekanisk frånluftsventilation utan värmeåtervinning."
- Boverkets tabell, PBL kunskapsbanken "Bestämmelser om obligatorisk ventilationskontroll (OVK)", senast ändrad 10 juni 2025:

| Byggnad | Första besiktning | Återkommande |
|---|---|---|
| En- och tvåbostadshus med S- eller F-ventilation | Nej | Nej |
| En- och tvåbostadshus med FT-, FX- eller FTX-ventilation | Ja | Nej |
| Skolor, vårdlokaler m.m. | Ja | Ja, vart tredje år |
| Flerbostadshus, kontor o.d. med S-, F- eller FX-ventilation | Ja | Ja, vart sjätte år |
| Flerbostadshus, kontor o.d. med FT- eller FTX-ventilation | Ja | Ja, vart tredje år |

- Definitioner, samma sida: "Med FTX- och FX-ventilation avses FT- respektive F-ventilation med värmeåtervinning."
- **Ditt minne i beställningen stämmer nästan.** Rättelse: första besiktning krävs för FT, FX **och** FTX i småhus (även FT utan återvinning), inte bara "FTX/FX med värmepump". Självdrag: aldrig.
- **Gällande föreskrift:** BFS 2011:16 med ändringar t.o.m. BFS 2017:10 är den senaste konsoliderade versionen på Boverkets webbplats 2026-10-04. Ingen ersättande OVK-föreskrift hittad; Boverkets remisslista visar förslag om motordrivna anordningar, energihushållning och certifiering men inget nytt OVK-beslut. **Osäkert:** en ändring efter 2017 som inte syns i den konsoliderade versionen kan inte uteslutas helt; rinfo.boverket.se ej genomsökt.
- Varför småhus undantas, Boverket, "En- och tvåbostadshus i OVK sammanhang" (senast ändrad 6 augusti 2024): "motiverades det med att ägare av småhus ansågs ha ett så stort eget intresse av att tillse att ventilationen fungerar tillfredsställande att det framstod som onödigt med obligatorisk återkommande kontroll (jfr prop. 1998/99:62 sid. 39)." Och: "finns det möjlighet för ägaren att låta utföra funktionskontroll av ventilationen även om byggnaden är undantagen från kravet."
- Energimyndigheten ET 2025:03 s. 11 har samma uppgifter i tabell 2 (läst med pdftotext -raw; layout-läget förskjuter intervallen). Ventilationskontrollant i samma guide s. 12: "Självdragssystem vill man exempelvis besikta på vinterhalvåret då skorstenseffekten är starkare."
- Folkhälsomyndigheten, vägledningen, "OVK är inte alltid tillräcklig": "Protokollet beskriver endast hur ventilationssystemet fungerar enligt de funktionskrav som fanns när systemet installerades."
- BFS 2011:16 6 §: behörighet N räcker för "Alla byggnader med S-, F- och FX-ventilation samt en- och tvåbostadshus med FT- och FTX-ventilation."

---

## 3. Systemen jämförda

### 3.1 Vad som driver luften, var den tas in och ut

| System | Driver | Uteluft in | Frånluft ut | Källa |
|---|---|---|---|---|
| S, självdrag | Temperaturskillnad och vind | Ventiler i vägg och fönster, otätheter | Kanaler från kök, bad, wc (ibland sovrum) till takhuv/skorsten | ET 2025:03 s. 5; Svensk Ventilation |
| F, mekanisk frånluft | Frånluftsfläkt, undertryck | "ventiler som finns placerade i väggar, bakom element eller i fönster­karmarna" | Kök, bad, wc via fläkt | ET 2025:03 s. 6 |
| FX / FVP, frånluft med värmepump | Som F; värmepumpen tar värme ur frånluften | Som F | Som F | ET 2025:03 s. 7; Husguiden; Svensk Ventilation |
| FT | Till- och frånluftsfläkt | Tilluftsdon via kanal | Frånluftsdon via kanal | ET 2025:03 s. 6 |
| FTX | Som FT, värmeväxlare | Som FT, förvärmd och filtrerad | Som FT | ET 2025:03 s. 7; Svensk Ventilation |

- FoHM vägledningen: "En köksfläkt med separat imkanal räknas inte som en F-ventilation."
- Boverket Energiguiden (Luftvärmepump m.fl., senast ändrad 31 augusti 2026), ordagrant: "Mekanisk ventilation med värmeåtervinning (FTX) ger en bättre luftomsättning och långsiktig besparing. För att den ska fungera bra behöver du täta eventuella spaltventiler i fönster eller vägg. (Om du däremot vill kombinera frånluftsventilation (F) med frånluftsvärmepump (FX) behöver det finnas spaltventiler i fönster och väggventiler för tilluft.)"
- Energimyndigheten Husguiden (uppd. 2022-07-08), ordagrant: "Ett tätt hus är en förutsättning för att det ska vara någon idé att byta till mekanisk ventilation. Om huset redan har både till- och/eller frånluftsintag och är tätt kan det vara en bra idé att installera mekanisk från- och tilluft med värmeväxling (FTX) för att ta vara på värmen i frånluften."
- Svensk Ventilation, "Från- och tilluftssystem" (ändrad 2023-04-26): "I bostäder rekommenderas att man projekterar ett frånluftsflöde som är cirka 10% högre än tilluftsflöde för att inte riskera att fukt kan tryckas ut i byggnadens konstruktion." (branschorganisation)
- Tryckbild per system, RISE/fuktsaker.se (UTDRAG): F-ventilation "invändigt undertryck", FT "små tryckskillnader", S "undertryck nedre delar, övertryck övre delar".
- F och öppna fönster, Svensk Ventilation "Vad har jag för ventilation?": "Sover du exempelvis med öppet fönster i ett sovrum, sätter du ventilationen ur spel och orsakar att ett annat sovrum med stängt fönster får sämre luftkvalitet."

### 3.2 Värmeåtervinning och energi

- Temperaturverkningsgrad, ET 2025:03 tabell 1, s. 8 (S33), så ska den stå:

| Värmeväxlare | Temperaturverkningsgrad, % |
|---|---|
| Motströms plattvärmeväxlare | 75–90 |
| Korsströms plattvärmeväxlare | 50–75 |
| Roterande värmeväxlare | 75–85 |
| Vätskekopplad återvinning | 45–70 |

- Samma s. 8: temperaturverkningsgrad "visar hur stor andel av frånluftens värme som återvinns". Roterande: "till- och frånluften kan blandas något".
- FX: ET 2025:03 s. 7: "värmen i frånluften överförs till en vätskeburen krets som leder värmen till byggnadens värme- och/eller tappvarmvattensystem. Ofta kopplas en värmepump till systemet". **Ingen verkningsgrad eller värmefaktor för FVP** i de lästa källorna. Saknas.
- Besparing, Husguiden (S34): "Beroende på husets förutsättningar och geografiska läge kan du på så vis halvera den energianvändning som går till värme och varmvatten."
- Självdrag och återvinning, Boverket 1995 s. 16: "Vid självdragssystem torde inte sådan värmeåtervinning vara möjlig p g a de ökade tryckfall som återvinningen orsakar i frånluftsystemet."
- Ventilationens andel, ET 2025:03 s. 4 (S37): "Ventilationssystem kan stå för upp till 15 procent av byggnadens totala energi­användning."
- BETSI 2010 s. 11: att ventilera småhusen enligt nybyggnadskravet skulle kräva "ytterligare cirka 5 TWh värme per år". (Hela beståndet; inte ett tal per hus.)
- **Fläktel / SFP: saknas.** Energimyndighetens jämförelsetabell över FTX-aggregat för villor (sökutdrag: SFP, verkningsgrad vid +2 och −15 °C, 45 l/s för ca 130 m²) gav 404 vid läsning 2026-10-04. Ingen annan källa av rang med SFP för småhus läst.
- **Kostnad för FTX eller FVP i ett äldre hus: saknas.** Varken Energimyndigheten, Boverket eller Svensk Ventilation anger installationskostnad på de lästa sidorna.

### 3.3 Filter och underhåll

- ET 2025:03 s. 9 (S36): "Ventilationsfiltret behöver bytas efter tillverkarens rekommendat­ioner, minst en gång per år och gärna på hösten efter pollensäsongen."
- Boverket Energiguiden, "Underhåll ventilation och se över styrningen" (senast ändrad 15 juni 2026): "Filterbyten varar längst när de görs på hösten efter pollensäsongen." Checklista: "Identifiera var det finns don och kanaler som kan behöva städas. Glöm inte bort eventuella spaltventiler i fönster."
- Husguiden: "Den viktigaste åtgärden för att ventilationen ska vara effektiv är regelbundet underhåll. Exempelvis att rengöra fläktar, ventiler och kanaler och att göra filterbyten och injustering."
- Självdrag: SWESIAQ s. 25: "Kanaler, uteluftdon och frånluftdon måste inspekteras och rengöras regelbundet så att inte genom­strömningsarean minskar och luftmotståndet ökar." Exempel: "En bit av en murad kanal kan ha lossnat, en död fågel kan ha ramlat ner och hindrar flödet." Torktumlare i badrum: "Fukten och luddet kondenserar och fastnar på kanalväggarna så att kanalen till slut blir helt igensatt."
- FoHM vägledningen, fastighetsägaren bör ha kontroll på att "Självdragets från- och tilluftsdon är fria och fungerar."

### 3.4 Hur vanligt, och hur mycket luft husen faktiskt får (BETSI)

Två rapporter från samma inventering (2007–2008, besiktningar oktober 2007–maj 2008):
- **BETSI 2009** = Boverket, *Så mår våra hus*, september 2009, ISBN pdf 978-91-86342-29-6. Kopia hos Fuktcentrum LTH. Sidnummer = tryckta sidor.
- **BETSI 2010** = Boverket, *Energi i bebyggelsen – tekniska egenskaper och beräkningar*, december 2010, ISBN pdf 978-91-86559-84-7.

**Tabell 4.1, BETSI 2010 s. 71** (andel småhus, %; parentes = "Statistiskt osäkra uppgifter"). Läst med pdftotext -raw, stämmer med layout-läget:

| Byggår | Självdrag | F | FT | FTX | FVP |
|---|---|---|---|---|---|
| –1960 | 97 ± 2 | 2 ± 2 | 0 ± 0 | 0 ± 0 | 0 ± 0 |
| 1961–75 | 88 ± 8 | 8 ± 6 | (1 ± 1) | (4 ± 4) | 0 ± 0 |
| 1976–85 | 23 ± 9 | 39 ± 8 | 4 ± 4 | 29 ± 13 | 5 ± 4 |
| 1986–95 | 11 ± 5 | 23 ± 9 | (4 ± 4) | 39 ± 8 | 24 ± 13 |
| 1996–05 | 11 ± 5 | 42 ± 8 | (6 ± 9) | 6 ± 4 | 36 ± 9 |
| Totalt | 72 ± 3 | 13 ± 2 | 1 ± 1 | 9 ± 3 | 4 ± 1 |

- BETSI 2009 s. 81: "Självdragsventilation finns i cirka 1,2 miljoner småhus och är vanligast i äldre småhus". Samma sida: krav på värmeåtervinning "infördes 1989" i Nybyggnadsreglerna (BFS 1988:18); "I ålderskategorin 1986 - 1995 har drygt 60 procent av byggnaderna värmeåtervinning av ventilationsluften." 1994 togs kravet bort "i byggnader som i huvudsak värms med förnyelsebar energi, el undantaget" (BBR, BFS 1993:57).
- **Uppmätt luftomsättning:** BETSI 2009 s. 94: "Den genomsnittliga luftomsättningen småhusen har mätts till 0,40 oms/h och i flerbostadshuslägenheterna 0,52 oms/h." Metod: spårgas, "homogenspridningstekniken enligt standarden ISO 16000-8". BETSI 2010 s. 72: "Ingen åldersklass uppfyller socialstyrelsens rekommendation på en luftomsättning motsvarande 0,5 rumsvolymer per timme." Mätt "under en 14-dagars period".
- **Per system**, BETSI 2010 s. 72: "Småhus med mekanisk från- och tilluft (FT & FTX) har högst luftomsättning, 0,45 rumsvolymer per timme. Därefter kommer självdrag med 0,40 omsättningar, och lägst luftomsättning, 0,36 oms/h, har småhus med mekanisk frånluft (F & FVP)."
- Förklaring, s. 74: den äldsta åldersklassen (97 % självdrag) har högt flöde; 1961–75 lägre, möjligen för att husen är tätare och för att "småhus motsvarande 37 procent av uppvärmd golvarea, i byggnader uppförda till och med 60 har egen förbränningspanna, jämfört med 18 procent i husen uppförda 61-75".
- **Andel som klarar 0,35 l/s per m²:** BETSI 2010 s. 11, ordagrant: "Fyra femtedelar av småhusen har en lägre luftomsättning än den som föreskrivs vid nybyggnad av bostäder, 0,35 l/m²/s." Och s. 74: "Jämfört med det i byggreglerna föreskrivna luftflödet, 0,35 l/m²/s, underskrids det i småhus med en uppvärmd golvarea motsvarande 82 procent av hela beståndets." Samma sida: "Luftflödet skiljer en faktor 20 mellan högsta och lägsta uppmätta värde."
- Medelflödet, BETSI 2010 s. 73: "ett genomsnittligt luftflöde på 0,23 liter/s och m²" (per m² Atemp). BETSI 2009 s. 68: "I småhusen motsvarar dock uppmätta luftflöden endast 0,23 l/m² Atemp".
- **Andel självdragshus som klarar 0,35: saknas.** BETSI redovisar fördelningen för alla småhus (figur 4.4 i BETSI 2010, figur 4.24a i BETSI 2009) och medel per system, men inte andelen under 0,35 per system. Staplarna i figurerna finns bara som grafik och kunde inte läsas ur PDF:en.
- Varning för sidan: 0,40 oms/h och 0,23 l/s per m² Atemp är samma mätning uttryckt på två sätt, och de går inte ihop med 2,5 m takhöjd (0,23 × 3,6 / 2,5 = 0,33, **EGEN**). BETSI förklarar inte skillnaden; troligen räknas Atemp med källare och biutrymmen som inte ingår i den uppmätta volymen. **Använd ett av talen per påstående och säg vilket.**
- Fukttillskott, BETSI 2009 tabell 4.22 s. 93: småhus 1,768 g/m³ (95 % konfidensintervall 0,144), flerbostadshus 1,216 (0,175). "Det högsta fukttillskottet redovisas i småhus byggda 1961 - 75". Mätningarna skedde under olika tider oktober–maj, ca 2 veckor per bostad.
- BETSI 2009 s. 68, om byte av system: "Byte av ventilationssystem från självdrag till mekanisk ventilation kan säkerställa att rätt flöden fås oberoende av väderförhållanden. Förutom att bytet leder till en förändrad energianvändning kan det även resultera i ändrade tryckförhållanden i byggnaden, med risk för att lukt sprids mellan bostäder eller att markradon läcker in."
- BETSI 2009 s. 41: "Information om behovet av förbättrad ventilation speciellt i småhus med självdragsventilation." (bland Boverkets förslag)
- **Nyare statistik: saknas.** Energimyndighetens officiella energistatistik för småhus redovisar uppvärmning, inte ventilationssystem (sökt 2026-10-04, ej läst i detalj). BETSI är den senaste nationella inventeringen (samma slutsats i `fukt-mogel-gemensamt.md` rad 323).

---

## 4. Varför självdraget blir sämre

### 4.1 Sommaren

- Drivtrycket går mot noll när ute närmar sig inne (tabell 1.2: 0,2–0,3 Pa vid +20 °C).
- ET 2025:03 s. 5: "Under vindstilla och varma sommardagar kan luftflödet vara otillräckligt eller helt avstanna".
- Svensk Ventilation (två sidor): "På sommaren, när temperaturskillnaden är liten eller ingen alls, blir det därför ingen ventilation."
- SWESIAQ s. 24: "måste man i självdragssystem alltid räkna med att komplettera med fönstervädring när utetemperaturen börjar närma sig 20 °C."
- **Källorna säger olika.** Svensk Ventilation "ingen ventilation", Energimyndigheten "otillräckligt eller helt avstanna". Energimyndigheten (myndighet) väger tyngre och är mer försiktig; vinden och värme inne (S14, 4 K) ger ofta lite drag även en sommardag. Skriv inte "ingen ventilation alls" som regel.
- **Omvänt drag på sommaren: ingen källa som beskriver det som vanligt.** Det följer av formeln när ute är varmare än inne, och SWESIAQ beskriver bakdrag av andra orsaker (4.4). Om sidan skriver det: som följd av fysiken, märkt så.

### 4.2 Tätare hus: fönsterbyte, tätningslister, tilläggsisolering

- Boverket Energiguiden, "Förbättra fönster och dörrar" (senast ändrad 31 augusti 2026), ordagrant: "Var dock uppmärksam på att om huset har ett äldre ventilationssystem kan det vara inställt utifrån att luft kan röra sig genom och kring otäta fönster. Denna luft kan vara en betydande del av tilltänkta tilluften. Om du väljer att täta fönstren behöver du därför också kontrollera behovet av tilluft, så att ventilationen och luftkvaliteten inte blir för dåliga."
- Samma sida: "Bedöm om det behövs ventilation i fönsterlösningen, till exempel spaltventiler i fönsterbågen eller karmen." och "I vissa äldre hus med självdrag fungerar läckage genom fönstren som tilluft. Om du byter till energifönster utan att ta hänsyn till ventilationens funktion, kan det skapa risk för fuktskador och dålig luftkvalitet."
- Boverket Energiguiden, "Lufttätning av klimatskärm" (senast ändrad 7 augusti 2026): "Om ditt hus har självdragsventilation är det tänkt att visst läckage genom klimatskärm ska fungera som tilluft för ventilationen (gäller ibland även hus med mekanisk ventilation med en frånluftsfläkt). När du tätar, måste det minskade friskluftsintaget ibland kompenseras med nya tilluftsventiler. Det kan du göra genom att ta upp nya spalt- eller ytterväggsventiler."
- Folkhälsomyndigheten, tillsynsvägledningen om temperatur (citerad ordagrant i `guider-kallras.md` 9): "Framförallt gäller detta hus med självdrag. I sådana fall kan det minskade inflödet behöva kompenseras med nya tilluftsventiler."
- Energimyndigheten Husguiden: "Ventilationssystemet påverkas av andra åtgärder som tilläggsisolering eller byte av fönster. När du gör den typen av åtgärder behöver du även se över ventilationssystemet. Du kan exempelvis behöva justera luftflöden, eller byta eller installera nya ventiler."
- ET 2025:03 s. 10: "Du bör energioptimera byggnaden efter varje större ingrepp, såsom tilläggsisolering, byte av fönster eller vid byte av uppvärmningskälla."
- Energimyndigheten fönsterguide ET 2025:01 s. 9 (`guider-kallras.md` 3.1): äldre byggnader "kan ibland behöva en liten springa i fönstret", t.ex. "plocka bort tätningslisten på en del av ovansidan fönstret, eller öppna spaltventiler".
- Svensk Ventilation: "en så enkel sak som isoleringsfilter i fönstren kan förstöra ett helt självdragssystem och göra ventilationen otillräcklig." och "Om dörrar och fönster har tätats, och väggarna fått ny isolering, har förmodligen ventilationen försämrats."
- BETSI 2009 s. 67–68: "Byte till nya fönster och dörrar, samt tilläggsisolering av ytterväggar kan till exempel ge en tätare byggnad. [...] Till exempel kan drag minska. Dock kan samtidigt luftomsättningen minska till en allt för låg nivå."
- SWESIAQ s. 11: "Ett vanligt problem är att man i efterhand tätat klimatskalet och på så sätt minskat läckflödet (infiltrationen), detta utan att samtidigt förbättra uteluftdonen."
- Boverket 1995 s. 24: med dagens lufttäthetskrav "måste vid självdragsventilation luftintag i form av ventiler el dyl anordnas", och ventilernas area är "av samma storleksordning som frånluftkanalernas", ca 350–450 cm² i exemplet.

### 4.3 Eldstaden, pannan och skorstenen

- Boverket Energiguiden, Luftvärmepump / Berg-, sjö- och jordvärme (senast ändrad 31 augusti 2026), ordagrant: "Om ditt hus har självdragsventilation bygger ventilationen i huset på att skorstenen blir varm och på så sätt hjälper till med självdraget. När man byter till olika typer av värmepumpar blir skorstensstocken kallare och ventilationen minskar. Det kan leda till exempelvis besvärande lukt, fukt och sämre luftkvalitet inomhus. Man kan även få fuktproblem på vinden när den inte längre värms lika mycket av skorstenen. Man kan därför behöva åtgärda ventilationssystemet och se över luftfuktigheten på vinden i samband med ett byte av värmesystem. Du kan även behöva installera mekanisk ventilation, om skorstenen inte längre kommer att användas på samma sätt."
- Samma i Fjärrvärme-sidan (31 augusti 2026), kortare.
- ET 2025:03 s. 6: "Lösningen var mer effektiv i tider då många byggnader värmdes med en oljepanna i källaren. När sedan allt fler pannor monterades bort för att ersättas av andra energi­källor, minskade skorstenseffekten i källaren, vilket i många fall ledde till fuktskador. En lösning för att öka cirkulation av luft och motverka fuktskador kan vara att värma källaren lite mer eller att öka luftväxlingen något genom att installera en fläkt vid avluftskanalen och skapa ett förstärkt självdrag."
- SWESIAQ s. 25: drivtrycket var högre förr när kanalerna låg intill en rökkanal; "det termiska drivtryckets (Tinne-Tute) kunde vara flera hundra grader!" och "Även sommartid fungerade de bättre eftersom man eldade året runt för att producera varmvatten."
- Svensk Ventilation: "Många självdragssystem går genom skorstenen. Om man slutar elda i pannan eller spisen så kallnar skorstenen, och självdraget blir sämre." Och "Enfamiljshus" (ändrad 2021-08-17): "Ofta har dessa hus idag otillräcklig ventilation, eftersom man har bytt ut värmesystemet. Självdraget uppstår nämligen genom att skorstenen är varm."
- Eldstad som utsug, SWESIAQ s. 22: "Om inte förbränningsluften tas utifrån, kommer eldstaden att fungera som ett kraftigt punktutsug när man eldar i den." Och: "kan till och med en rökkanal bli tilluftskanal, kanske när elden håller på att slockna. Då kommer rökgaser in i bostaden med risk för kolmonoxidförgiftning."
- Fukt på vinden efter pannbytet: Tobin och Samuelson (`guider-fukt-pa-vinden.md` 2.5): "I en byggnad där man byter uppvärmning med eldstad till direktverkande el, fjärrvärme eller bergvärme är denna risk uppenbar."

### 4.4 Köksfläkt, badrumsfläkt och bakdrag

- Boverket 1995 s. 22, ordagrant: "Vid självdrags­ventilation måste särskilt beaktas att sådan forcering (med hjälp av fläkt) riskerar att hindra den normala funktionen i andra utsugskanaler än den forcerade. Inom en bostadslägenhet eller inom en ventilationstekniskt sammanhängande del av bygg­naden kan då uppkomma s k bakdrag." Och: "Vid självdragsventilation är det lämpligt att tilluftflödet till en lägenhet underlättas då forcering i någon del av lägenheten utnyttjas."
- SWESIAQ s. 21: "Bostadens undertryck ökar då och det finns risk för att luftflödet vänder riktning i någon av de övriga frånluftskanalerna med enbart självdrag. Detta kallas bakdrag." Orsaker till obalans: "Otillräckligt antal eller för små uteluftdon", "Att uteluftdonen strypts för mycket (vanligt vintertid när det drar kallt)", "Tätning av klimatskalet i efterhand som gett minskat läckflöde".
- Samma, efter bakdrag vintertid: kanalen kyls så "att den termiska drivkraften upphör i denna kanal. Det kan sedan vara svårt att få luftflödet att vända åt rätt håll. Man kan försöka att värma kanalen genom att spruta in varmluft från en hårtork." (SWESIAQ kallar detta "kallras" i kanalen; ordet betyder något annat på `/fukt/kallras/`. Använd inte ordet så på sidan.)
- Samma s. 22: "Bl.a. för att undvika bakdrag, bör man vid forcerat luftflöde öppna fönster/vädringslucka på lämplig plats". "Stäng av forceringen efteråt, helst med hjälp av en timer, temperatur- eller fuktgivare!"
- Backspjäll, samma s. 22: "Vid fläktdrivna punktutsug får det inte finnas backspjäll, eftersom de hindrar det normala luftflödet för mycket när fläkten är avstängd." **Motsäger inte** `guider-kallras.md` 8 (kallrasskydd = backspjäll i köksfläktens egen kanal); SWESIAQ gäller en fläkt som sitter i självdragskanalen. Hänvisa till `/fukt/badrumsflakt/` (D2) för fläktvalet.
- Kolfilterfläkt: SWESIAQ s. 22: "Kolfiltret tar inte hand om den fukt som bildas vid t.ex. långkok". BBR 6-vägledningen (arkiverad): "Observera att en återcirkulerande köksfläkt med kolfilter inte utgör ventilation." Och: "Vid forcerade luftflöden i spiskåpor eller spisfläktar finns det risk för obalans i flödena och för högt undertryck som en följd av att det inte kommer tillräckligt med tilluft till köket."
- BFS 2024:8 3 kap. 6 § andra stycket (2.1): "Oacceptabla tryckskillnader över byggnadsdelar får inte uppstå vid ökad luftväxling."
- Våtrum, SWESIAQ s. 21: "Luftavfuktare är ett effektivt sätt att ta hand om fukt utan att störa självdraget."
- Handdukstork, Boverket 1995 s. 10 (S19): "Det är lämpligt att förse badrum med handdukstork, som är i drift även sommartid för att säkerställa en viss övertemperatur i badrummet och därmed åstadkomma en önskvärd termisk drivkraft. Ofta kan en värmeeffekt på åtminstone 200 W vara tillräcklig på handdukstorken i ett normalstort badrum."
- Boverket Energiguiden, ventilationssidan: "Flödet behöver dock alltid vara tillräcklig så att fukt från till exempel duschen transporteras ut ur huset i tillräcklig hastighet." (om manuell styrning av fläktar)

### 4.5 Brukarna stänger ventilerna

- SWESIAQ s. 25: "För att undvika bakdrag bör donen aldrig vara helt stängda, med undantag för t.ex. tillfällig brandrök utomhus. Men det är vanligt att brukare stryper/stänger uteluftdon som det drar från."
- FoHM tillsynsvägledning om temperatur (`guider-kallras.md` 9): risk att boende "sätter igen friskluftsintagen".
- SWESIAQ s. 25: fjärrvärme/värmepump med lägre radiatortemperatur har gjort att "brukarna stängt uteluftdon för att slippa frysa med dålig luftkvalitet på köpet."
- Termostatventilen i S38 (Fresh 100 Thermo) stänger själv helt vid −5 °C ute om ingen grundflödesbricka sitter i. Det är när självdraget annars är starkast. **Tillverkardata**, säger inget om hur vanligt det är.

---

## 5. Spaltventiler och uteluftsdon

### 5.1 Vad och var

- Spaltventil i fönsterbåge eller karm: Boverket Energiguiden fönster (4.2); "springventiler i fönstren" (Boverket, luftfuktighetssidan, via `guider-kallras.md` 9).
- Väggventil: "uteluftsventiler placerade i ytterväggen, bakom radiatorer" (samma Boverket-sida); "ventiler som finns placerade i väggar, bakom element eller i fönster­karmarna" (ET 2025:03 s. 6, om F-system).
- Placering, källorna:

| Källa | Rang | Råd |
|---|---|---|
| SWESIAQ 2023 s. 24 | förening, innemiljöutredare | "bör uteluftdonet/luftintaget helst placeras bakom en radiator så att uteluften förvärms. Denna möjlighet saknas vid golvvärme." |
| Boverkets kunskapssammanställning (via `guider-kallras.md` 9) | myndighet | "uteluftsventiler placeras bakom radiatorer som på sätt förvärmer uteluften vintertid och därmed minskar risken för drag" |
| Energimyndigheten ET 2025:01 s. 9 | myndighet | luften kommer in "där den får som bäst effekt, till exempel ovanför ett element" |
| Fresh, produktblad 2003 | tillverkare | "Ventilen bör placeras högt upp på väggen, finns det radiator bör man sträva efter en placering ovanför denna. Vid sådan placering utnyttjas konvektionsströmmen och man når bästa komfort." |

- **Bakom eller ovanför elementet**: källorna säger olika, men båda handlar om att elementets värme ska blanda in uteluften. Boverket och SWESIAQ säger bakom, Energimyndigheten och tillverkaren ovanför/högt. Inget val mellan dem; skriv "vid elementet, bakom eller högt ovanför".
- Kallras och drag: FoHM tillsynsvägledning om temperatur: "Risken för drag är särskilt stor vid självdrags- eller frånluftssystem, där tilluften tas direkt utifrån utan att förvärmas" (`guider-kallras.md` 1.3). Lufthastighet högst 0,15 m/s (S43, HSLF-FS 2024:10). **FoHMFS 2014:17 är upphävd**; citera inte den.
- Filter: SWESIAQ s. 24: "I uteluftdonen bör finnas enklare luftfilter. För att inte störa luftflödet för mycket är det bara möjligt att använda grovfilter (t.ex. av skumplast). Filtren bör enkelt kunna bytas eller tvättas av brukaren själv." Fresh: "filtret rengöras/bytas 1-2 ggr/år" (tillverkare).
- Buller: SWESIAQ s. 24–25: uteluftdon "kan lätt kan leda in utebuller", nära trafik bör de ha invändig ljudisolering. Svensk Ventilation: "Tilluftsventiler (ex. sådana som sitter ovan eller under fönstret) kan även släppa in mycket ljud". Fresh 100 Thermo: Dn,e,w 33 dB (standard), 40–45 dB (dB-modellen, 200–400 mm rör) (tillverkare).
- Reglering: SWESIAQ s. 24: "Luftflödet genom donen bör kunna regleras, dvs. sänkas vid behov när det är kallt ute."

### 5.2 Hur mycket luft en ventil släpper in

- Tillverkardata (S38), Fresh 100 Thermo, produktblad "Tilluft - väggventiler · 2003-11-01": "Kapacitet vid 10 Pa: 7,5 l/s". Grundflödesbricka "en bricka ger ca 2,5 l/s vid 10 Pa". Termostat: "håller ventilen helt öppen ned till +10°C. Därefter stänger den successivt för att vid -5°C vara helt stängd." Håltagning Ø105 mm.
- Butiksuppgift (sökutdrag, ej läst): "Fresh 100" 9,0 l/s vid 10 Pa. Bara butik; används inte.

**Tabell 5.2. EGEN: en Fresh 100 Thermo, fullt öppen, vid självdragets tryck**

Formel: q = 7,5 × √(Δp / 10) l/s. Antagande: flödet är ungefär proportionellt mot roten ur tryckskillnaden (SWESIAQ s. 8, "formel 4c"), och hela drivtrycket ligger över ventilen. Det gör det inte i verkligheten; kanal, överluft och frånluftsdon tar sin del (Boverket 1995 s. 14, SWESIAQ s. 10–11). Talen är alltså ett **tak**.

| Δp | 1 Pa | 2 Pa | 4 Pa | 6,2 Pa | 10 Pa |
|---|---|---|---|---|---|
| l/s | 2,4 | 3,4 | 4,7 | 5,9 | 7,5 |

- Behovet, **EGEN**: 120 m² × 0,35 l/s per m² = 42 l/s (T43). Med 4–6 l/s per ventil vid 4–6 Pa blir det 7–10 ventiler om ingen luft kom in genom otätheter. SWESIAQ s. 10 (S41): ungefär hälften kommer ofta in som läckage. **Används bara som illustration av storleksordningen, inte som dimensionering.** Ingen myndighet eller branschorganisation anger antal ventiler per rum. **Antal per rum: saknas.**
- Boverket 1995 s. 26: "Ett annat sätt att göra överslagbedömningar (ej dimensionering) av erforderliga öppningsareor och kanalareor för bostäder och lokaler är att ansätta strömningshastigheten till högst 0,56 m/s. Då kan erforderliga areor beräknas enligt S = L/2000 där S = erforderlig area m² och L = ventilationsluftflöde m³/h". **EGEN**: 42 l/s = 151 m³/h → 0,076 m² = 756 cm² sammanlagd öppningsarea för uteluften.
- Rumsfördelning, SWESIAQ s. 11: "Ett sovrum för två bör t.ex. ha dubbelt så stor total genomströmningsarea jämfört med ett sovrum för en person."

### 5.3 Fönsterventil vid fönsterbyte

- Boverket Energiguiden fönster (4.2): "Bedöm om det behövs ventilation i fönsterlösningen, till exempel spaltventiler i fönsterbågen eller karmen." Det är den enda myndighetsformuleringen om ventil i nya fönster som hittats.
- Energimyndigheten Husguiden (4.2): "byta eller installera nya ventiler".
- FTX och spaltventiler: Boverket (3.1) säger att spaltventilerna ska **tätas** vid FTX men **finnas** vid F/FX.
- Sajtens sidor har redan, i sak: `/fukt/kallras/` rad 114 (nya tilluftsventiler när fönstren tätas i självdragshus), rad 124–130 (låt ventilen vara öppen, ventil vid elementet); `/fukt/kondens-pa-fonster/` rad 121 (papper mot frånluftsdonet, 0,35 l/s per m² och 2,5 m takhöjd), rad 149–151 (övertryck på övervåningen i självdragshus), rad 164 (tilluftsventilen i sovrummet öppen). Inga tal där som krockar med detta blad. Kondenssidans U-värden och glastemperaturer (tabell rad 101–105, **EGEN** i `guider-kondens-pa-fonster.md` 3) och kallrassidans 8,9 °C/17 °C används inte här.

---

## 6. Tecken på dåligt självdrag

| Tecken | Gräns eller tal | Källa |
|---|---|---|
| Kondens på fönstrens insida | "omfattande kondensbildning på fönsters insida vid en utetemperatur av ca -5° C" som skäl att undersöka ventilationen | FoHMFS 2014:18 (S4); T12 |
| | "Kondens på fönsters insida kan vara en indikator på låg luftomsättning om huset har dåligt isolerade fönster. En indikation på extrem fuktalstring eller bristande luftväxling är omfattande och varaktig kondensbildning på fönstrens insida." | FoHM vägledning |
| | "Vid mycket låga utomhustemperaturer kan det bli kondens utan att det behöver bero på dålig ventilation." | samma |
| | "Om du upplever att det är dragigt i ditt hus, att det uppstår kondens på fönstrens insida eller att det luktar instängt kan det vara dags att fundera över hur ventilationen kan förbättras." | Energimyndigheten Husguiden |
| Imma i badrummet | spegeln "bör försvinna efter högst 15-30 min" | SWESIAQ 2023 s. 33 (S42) |
| | "Även kondens under längre tid på väggar eller innertak i våtutrymmen eller på kalla ytor kan vara en indikator på att ventilationen inte fungerar på rätt sätt." | FoHM vägledning |
| Matos och lukt | "det ofta förekommer lukt från en annan plats än den egna bostaden eller lokalen, t.ex. matos eller andra påtagliga eller besvärande lukter" | FoHMFS 2014:18 |
| | "luften i bostaden eller lokalen strömmar från rum med lägre krav på luftkvalitet till rum med högre krav, t.ex. från kök eller badrum till sovrum" | FoHMFS 2014:18 |
| Fukttillskott | över 3 g/m³ vintertid, regelmässigt | FoHMFS 2014:18 (S2); T11. Medel i småhus 1,8 g/m³ (S32) |
| | "Tillfälligt kan skillnaden vara över 3 g/kubikmeter, till exempel i våtutrymmen eller kök." | FoHM vägledning (= B2) |
| Koldioxid | över 1 000 ppm | FoHMFS 2014:18; FoHM vägledning tabell 1 (S3) |
| Radon | höga halter som skäl att undersöka ventilationen | FoHMFS 2014:18 (avsnitt 9) |
| Mätning | luftomsättning vid självdrag meningsfull först vid "minst cirka 10 grader kallare" ute | FoHM vägledning (S5) |

- **1 000 ppm, nyans:** i FoHMFS 2014:18 står meningen i stycket om skolor och barnomsorg ("Om koldioxidhalten i ett rum vid normal användning regelmässigt överstiger 1 000 parts per million (ppm), bör detta ses som en indikation på att ventilationen inte är tillfredsställande."). Vägledningens tabell 1 tillämpar den på bostäder också. Båda är Folkhälsomyndigheten; vägledningen är nyare (uppd. 2024-12-12). Skriv "Folkhälsomyndigheten" och att talet är en indikation, inte en hälsogräns.
- FoHM vägledningen, CO₂, ordagrant: "Det indikerade värdet på 1 000 ppm är alltså inte gräns för hälsopåverkan av koldioxid. Först vid en koldioxidhalt över 20 000 ppm börjar människans andningsfrekvens påverkas". "Utomhushalten av koldioxid är ca 400 ppm och inomhus brukar halten vara 600–800 ppm i väl ventilerade bostäder eller lokaler." "Som indikator fungerar koldioxidhalten bäst i stora lokaler som skolor och idrottshallar med många personer eller i små rum."
- **Enkelt test med papper eller rök:**
  - SWESIAQ 2023 s. 33, metod A1: "Komponenterna undersöks med teströk (ibland räcker tunt papper)". Och s. 32: "Röken bör vara kall och släppas ut sakta. Med en ficklampa lyser man på den rök som släpps ut för att bättre se åt vilket håll röken rör sig." Rökvarning s. 31: "Rökampuller med titantetraklorid fungerar bra tekniskt sett men röken är irriterande. Ett mildare alternativ är rök alstrad ur glycerin."
  - SWESIAQ s. 34, punktutsugen: "Starta de olika möjligheterna till forcering i kök/bad/dusch/tvätt/WC - en i taget, med både stängt och öppet fönster/vädringslucka för tryckutjämning. [...] Notera med teströk eventuella förändringar i alla från- och uteluftdon när det gäller flödesriktning (bakdrag)". "Risken för att punktutsug stör självdraget ökar vid lågt termiskt drivtryck o hög utetemperatur."
  - FoHM tillsynsvägledning om temperatur: inspektörer använder rökpennor (via `/fukt/kallras/` rad 89; källa i `guider-kallras.md`).
  - **Myndighet som beskriver papperstestet för husägare: saknas.** SWESIAQ (förening för innemiljöutredare) är den högsta källan. Pappret står redan på `/fukt/kondens-pa-fonster/` rad 121 utan källa.
  - Rökelsepinne nära gardiner och brandrisk: ingen källa läst här; `/fukt/kallras/` rad 89 har redan formuleringen.
- Svensk Ventilation listar som tecken på självdrag i huset: frånluftsgaller i kök, badrum och sovrum, borrade hål eller ventiler i karmar (1.5).

---

## 7. Folkhälsomyndigheten, FoHMFS 2014:18, nu ordagrant

**Källa:** Folkhälsomyndighetens allmänna råd om ventilation, FoHMFS 2014:18, "beslutade den 2 januari 2014", "Utkom från trycket den 4 februari 2014". PDF <https://www.folkhalsomyndigheten.se/contentassets/641784832543443ea4eebe9b300c244e/fohmfs-2014-18.pdf>, läst 2026-10-04 med pdftotext. Rättar `fukt-gemensamma-tal.md` 7.2 och 11: **inte längre UTDRAG**. Vägledningen (uppd. 12 december 2024) hänvisar fortfarande till FoHMFS 2014:18 som gällande; ingen ersättare hittad.

- Tillämpning: "I dessa allmänna råd ges rekommendationer för tillämpningen av 9 kap. 3 § och 26 kap. 22 § miljöbalken (1998:808) vad gäller ventilation och luftkvalitet i bostäder och lokaler för allmänna ändamål." "Dessa allmänna råd gäller för bostäder och lokaler för allmänna ändamål där människor vistas mer än tillfälligt."
- Olägenhet, ordagrant: "Vid bedömningen av om bristande luftkvalitet i bostäder och lokaler för allmänna ändamål innebär olägenhet för människors hälsa enligt 9 kap. 3 § miljöbalken bör följande riktvärden vara vägledande."
- **Bostäder, ordagrant:** "I bostäder bör det specifika luftflödet (luftomsättningen) inte understiga 0,5 rumsvolymer per timme (rv/h). Uteluftsflödet bör inte understiga 0,35 liter luft per sekund per kvadratmeter (l/s per m²) golvarea eller 4 l/s per person."
- Koldioxid: se 6.
- Fukt, ordagrant: "I bostäder och lokaler för allmänna ändamål, där människor vistas stadigvarande, bör skillnaden i absolut luftfuktighet mellan ute och inne under vinterförhållanden inte regelmässigt överstiga 3 g/m³."
- Indikatorer, ordagrant: "Ytterligare indikatorer på att luftkvaliteten kan vara bristfällig och att ventilationen inte fungerar tillfredsställande är om - tilluften är förorenad, - det ofta förekommer lukt från en annan plats än den egna bostaden eller lokalen, t.ex. matos eller andra påtagliga eller besvärande lukter, - luften i bostaden eller lokalen strömmar från rum med lägre krav på luftkvalitet till rum med högre krav, t.ex. från kök eller badrum till sovrum, och - rummen är oventilerade eller det saknas överluftsdon mellan rum där människor vistas stadigvarande."
- OVK räcker inte, ordagrant: "Om det bedöms föreligga olägenhet för människors hälsa på grund av bristfällig luftkvalitet, kan åtgärder eller ytterligare undersökningar krävas med stöd av miljöbalken även om ventilationssystemet är godkänt enligt plan- och byggförordningen (2011:338)."
- Undersök ventilationen bl.a., ordagrant: "vid konstaterade höga radongashalter eller där höga radongashalter kan antas förekomma", "vid svårdefinierad lukt", "vid mikrobiell växt, speciellt på invändiga ytor, där orsaken misstänks vara hög luftfuktighet och där den inte orsakats av en uppenbar vattenskada", "vid omfattande kondensbildning på fönsters insida vid en utetemperatur av ca -5° C", "vid konstaterad allergi mot husdammskvalster".
- Vägledningen, helhet: "För bostäder är riktvärden för luftflöde och luftombyte avsedda för hela bostaden och inte för varje rum för sig."
- Vägledningen, mätning vid självdrag (S5), ordagrant: "Vid självdrag är mätning av luftomsättningen endast meningsfull när temperaturen utomhus är minst cirka 10 grader kallare än temperaturen inomhus. Eventuell mätning behöver alltså göras den kalla årstiden."
- Vägledningen, RF: BETSI-värdena "20–40 % med ett snitt runt 30 %" under uppvärmningssäsongen (= L3 i `kunskap-lag-luftfuktighet.md`).
- **Temperatur och drag:** FoHMFS 2014:17 är upphävd och ersatt av HSLF-FS 2024:10 (15 maj 2024). Luftens medelhastighet högst 0,15 m/s vid upp till 24 °C, operativ temperatur lägst 18 °C, golv lägst 16 °C. Allt läst och citerat i `guider-kallras.md` 1. Hänvisa dit.
- EGEN-kontroll av T46 mot S1: 0,35 × 3,6 / 2,5 = 0,50. FoHMFS ger båda talen var för sig; BETSI 2009 s. 69 fotnot 33 gör samma omräkning ("Detta motsvarar 0.35 l/s och m² golvarea i en byggnad med en genomsnittlig rumshöjd på 2,5 meter"). BETSI 2010 s. 72 räknar med 2,52 m. BETSI 2009 s. 95 skriver att 0,35 l/s per m² "motsvarar cirka 0,52 oms/h vid den minsta takhöjd som krävs" (2,4 m; **EGEN** 0,35 × 3,6 / 2,4 = 0,525).

---

## 8. Energimyndigheten

Lästa 2026-10-04:

1. **ET 2025:03, Ventilation** (PDF, mars 2025). Citaten i 1.1, 2.4, 3.1–3.3, 4.2, 4.3. Talen: S33, S36, S37. Grundregeln s. 5 skriver "Boverkets Byggregler (BBR)" om 0,35 l/s per m²; BBR är ersatt av BFS 2024:8 (2.2). Citera inte guidens regelhänvisning, bara sakuppgiften.
2. **Husguiden, Ventilation** (senast uppdaterad 2022-07-08). Citaten i 3.1, 3.2, 3.3, 4.2, 6. Radon, ordagrant: "Om ditt hus har förhöjd radonhalt behöver du vara extra noga med tryckförhållanden när du väljer ventilationslösning. Kontakta en sakkunnig för att få råd om åtgärder kopplade till exempelvis fukt eller radon."
3. **ET 2025:01, Fönster**: läst 2026-09-30, citerat i `guider-kallras.md` 3.1. Hänvisa.

- Kostnad för att byta från självdrag till FTX eller FVP: **saknas** hos Energimyndigheten (sökt Husguiden, ET 2025:03, energiochklimatradgivningen.se/ventilation ej läst).
- Besparing: bara "halvera" värme och varmvatten (S34), villkorat.
- Energimyndighetens test av FTX-aggregat för villor: 404, se 3.2.

---

## 9. Radon och ventilation

Redan läst och citerat: `kunskap-radon.md` 7 (Boverket) och 9 (SSM åtgärder); `fukt-gemensamma-tal.md` 8. Bara det nya här.

- SSM, "Radonkällor i inomhusluften" (läst om 2026-10-04): "Radon bildas i marken och transporteras in i byggnaden eftersom lufttrycket där oftast är lägre än i utomhusluften." Och: "Hur stor radonhalten blir inomhus beror på flera faktorer, bland annat markluftens radonhalt, markens luftgenomsläpplighet, tryckskillnaden mellan inomhus- och utomhusluft samt hur otät byggnaden är mot marken."
- SSM, "Radon i småhus" (läst om 2026-10-04): "Eftersom radonhalten bland annat påverkas av boendevanor, ventilationen och eventuella transportvägar för radon så kan förutsättningarna ändras med tiden."
- SSM, "Åtgärder mot radon": byggnadsmaterial → "kan luftväxlingen ökas och på så sätt sänka radonhalten. I enklare fall räcker det ofta att installera ett frånluftssystem med fläkt." (= `kunskap-radon.md` 9)
- Boverket, "Vad är radon?": blåbetong "kan ge radongashalter på uppåt 1 000 Bq/m3, när luftväxlingen är dålig." (= `kunskap-radon.md` 7.1)
- Boverket, mät radon när du "ändrar ventilationen eller uppvärmningssystemet" (= `kunskap-radon.md` 7.2).
- BETSI 2009 s. 68 (3.4): byte från självdrag till mekanisk ventilation kan ändra tryckförhållandena "med risk för [...] att markradon läcker in."
- ET 2025:03 s. 10: "Rum med undertryck har mer frånluft än tilluft och luft kommer sugas in genom glipor och sprickor, vilket kan föra med sig lukt, radon, mögel och avgaser."
- SWESIAQ s. 10: "På grund av de termiska stigkrafterna är risken för inläckage normalt större från grunden och från väggarna än från taket. Vindens påverkan, låg utetemperatur (stort termiskt drivtryck) och kraftiga punktutsug i bostaden kan påverka tryckförhållandena och öka inläckaget." Och: "Läckflödet från grunden eller från golvbjälklag är ofta förorenat (möglig krypgrund ...)".
- FoHMFS 2014:18: undersök ventilationen "vid konstaterade höga radongashalter" (7).
- **Det som går att skriva med källa:** självdraget ger undertryck i husets nedre del (RISE, SWESIAQ), radon tar sig in där trycket inne är lägre än i marken (SSM), och ändrad ventilation kan ändra radonhalten åt båda hållen (BETSI, Boverket, SSM: mät efter). **Det som saknas:** en myndighet som säger att självdrag i sig ger högre radonhalt än F eller FTX. Ingen jämförelse per system hittad. Skriv det inte.

---

## 10. Fukt på vinden kopplat till självdrag

Redan läst: `guider-fukt-pa-vinden.md` 2.2 (Boverket exfiltration), 2.5 (SP, Sikander och Sandberg, Tobin och Samuelson), V7 (Anticimex); `fukt-mogel-gemensamt.md` K9 (BETSI 84 %). Sidan `/fukt/fukt-pa-vinden/` har redan i text: övertryck högst upp i självdragshus (rad 88, SP), Anticimex 28 %, tre av fyra skadade vindar i hus med självdrag (rad 90), tryckbyte vid F → FT (rad 144), pannbytet (rad 170). Inga av dess tal krockar med detta blad.

Nytt eller samlat:
- RISE/fuktsaker.se (UTDRAG): "Varm luft är lättare än kallare luft, vilket under den kalla årstiden skapar ett invändigt övertryck i byggnadens övre delar och ett undertryck i de nedre delarna."
- SWESIAQ s. 6: "Normalt förekommer inomhus ett undertryck relativt uteluften, men ibland - orsakat bl.a. av kraftigt vindtryck eller termiska drivkrafter - kan övertryck förekomma och orsaka exfiltration, särskilt i övre delen av en byggnad."
- SWESIAQ s. 8: "I bostäder med flera plan och öppet mellan våningarna kan termiska stigkrafter medföra att luft tränger ut genom otätheter i fasaden eller ut via uteluftdonen på övervåningen."
- SWESIAQ s. 23: "Övertryck relativt uteluften kan uppstå i de övre delarna i en byggnad, t.ex. i en tvåvåningsbostad med öppen genomgång mellan våningarna. Övertrycket kan leda till att fuktig inneluft rör sig ut genom klimatskalet eller t.ex. upp på en kall vind. Vindarna är numera ofta kallare än tidigare när de inte längre värms av en varm skorsten och eftersom de är bättre isolerade."
- SWESIAQ s. 23, otäta kanaler: "Med en otät frånluftskanal hamnar en del av frånluften på oönskade platser. Fuktig frånluft kan läcka ut på en kall vind och orsaka fuktskador. Samtidigt minskar självdragets drivtryck."
- BETSI 2009 s. 41: "Byggnader med mögel på vinden har i 84 procent av fallen självdragsventilation och det är också vanligast i det äldre byggnadsbeståndet. Det tyder på problem med luftläckage genom vindsbjälklaget."
- Boverket Energiguiden, Tilläggsisolera vinden (via `guider-fukt-pa-vinden.md` 2.4): "Om det blir invändigt övertryck mot vinden kan luft tryckas ut till vindsutrymmet, vilket kan ge upphov till fuktproblem."
- Boverket, Risker med fukt från inomhusluften (`guider-fukt-pa-vinden.md` 2.2): övertrycket ökar vintertid "på grund av större temperaturskillnader (så kallade termiska stigkrafter)".
- **Ordet "neutrala zonen" / "neutrallagret":** ingen källa av rang läst som använder det. Sökutdrag (2026-10-04) visar att det används i LTH-examensarbeten och ett Polygon-PM; inte lästa. RISE beskriver samma sak utan ordet. Sidan kan förklara principen med RISE och SWESIAQ utan att använda termen, eller ta termen bara efter att en LTH-källa lästs.
- **Var nollnivån ligger i ett småhus: saknas** som tal.

---

## 11. Interna länkar

Adress = `/[pelare]/[filnamn]/` (`src/content.config.ts` rad 76). Lästa i frontmatter 2026-10-04.

| Adress | Fil | Status | Varför |
|---|---|---|---|
| `/fukt/luftfuktighet-inomhus/` | `kunskap/fukt/luftfuktighet-inomhus.mdx` | publicerad 2026-09-16 | Fukttillskott, normalvärden |
| `/fukt/kondens-pa-fonster/` | `guider/fukt/kondens-pa-fonster.mdx` | publicerad 2026-09-29, uppd. 09-30 | Tecken; övertryck och kopplade bågar |
| `/fukt/kallras/` | `guider/fukt/kallras.mdx` | publicerad 2026-09-30, uppd. 10-04 | Ventil vid elementet, drag, stäng inte tilluften |
| `/fukt/fukt-pa-vinden/` | `guider/fukt/fukt-pa-vinden.mdx` | publicerad 2026-09-30, uppd. 10-04 | Övertryck mot vinden |
| `/fukt/radon/` | `kunskap/fukt/radon.mdx` | publicerad 2026-09-30 | Tryck och ventilation; mät efter byte |
| `/fukt/mogellukt/` | `guider/fukt/mogellukt.mdx` | publicerad 2026-10-04 | Lukt som tecken |
| `/fukt/mogel-i-huset/` | `guider/fukt/mogel-i-huset.mdx` | publicerad 2026-10-04 | Följd av för lite luft |
| `/fukt/hygrometer/` | `kunskap/fukt/hygrometer.mdx` | publicerad 2026-09-30 | Mäta fukttillskottet |
| `/fukt/lag-luftfuktighet/` | `kunskap/fukt/lag-luftfuktighet.mdx` | publicerad 2026-09-30 | Torr luft vintertid vid starkt drag (valfri) |
| `/rakna/daggpunkt/` | `src/pages/rakna/daggpunkt.astro` | finns | Kondens |
| `/fasad/renovera-fonster/` | `guider/fasad/renovera-fonster.mdx` | publicerad 2026-09-28 | Fönster och tilluft (sidan nämner inte ventilation) |
| `/fasad/dreva-fonster/` | `guider/fasad/dreva-fonster.mdx` | publicerad 2026-09-16 | Tätning tar bort tilluftsvägen (sidan nämner inte ventilation) |
| `/el/tillaggsisolera-vind/` | `guider/el/tillaggsisolera-vind.mdx` | publicerad 2026-09-20 | Tätare och kallare vind; exfiltration |
| `/el/u-varde/` | `kunskap/el/u-varde.mdx` | publicerad 2026-09-23 | Valfri |
| `/fukt/badrumsflakt/` | – | **finns inte** (D2, omgång D) | Fläkt i självdragshus, bakdrag |
| `/fukt/svartmogel-badrum/` | – | **finns inte** (D1, omgång D) | Imma som dröjer |

- **Guide om fönsterbyte: finns inte.** Ingen fil i `src/content` med fönsterbyte som ämne; närmast är renovera och dreva fönster.
- Ingen befintlig sida länkar till `/fukt/sjalvdrag/` i dag (sökt `sjalvdrag` i `src/content`).

---

## 12. Källförteckning (kallor-format)

```yaml
kallor:
  - titel: Boverket, Självdragsventilation, handbok, februari 1995 (läst 2026-10-04)
    url: https://www.boverket.se/globalassets/publikationer/dokument/1995/sjalvdragsventilation-handbok.pdf
  - titel: Boverket, BFS 2024:8, 1 kap. 2 och 12 §§, 3 kap. 3–6 §§, 12 kap. 1 §, 13 kap. 4 § (läst 2026-10-04)
    url: https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf
  - titel: Boverket, BFS 1993:57 (BBR 94), avsnitt 6:232 (läst 2026-10-04)
    url: https://rinfo.boverket.se/BFS1993-57/pdf/BFS1993-57.pdf
  - titel: Svensk Ventilation, Tidigare allmänna råd till BBR om ventilationsflöden, 2019-01-08
    url: https://www.svenskventilation.se/app/uploads/2019/01/Ventilationsfloden-enligt-BFS-1998_38.pdf
  - titel: Boverket, BFS 2011:16 (OVK) med ändringar till och med BFS 2017:10, konsoliderad version
    url: https://www.boverket.se/resources/constitutiontextstore/ovk/PDF/konsoliderad_ovk_bfs_2011-16.pdf
  - titel: Boverket, PBL kunskapsbanken, Bestämmelser om obligatorisk ventilationskontroll (ändrad 2025-06-10)
    url: https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/ovk/
  - titel: Boverket, PBL kunskapsbanken, En- och tvåbostadshus i OVK sammanhang (ändrad 2024-08-06)
    url: https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/ovk/en--och-tvabostadshus-i-ovk-sammanhang/
  - titel: Plan- och byggförordning (2011:338), 5 kap. 1–7 §§ (t.o.m. SFS 2026:1722)
    url: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/
  - titel: Boverket, BBR avsnitt 6, vägledning från PBL kunskapsbanken (före 1 december 2025), december 2025
    url: https://www.boverket.se/globalassets/publikationer/dokument/2026/boverkets-byggregler-bbr-avsnitt-6---hygien-halsa-och-miljo-vagledning-fran-pbl-kunskapsbanken-fore-1-december-2025.pdf
  - titel: Boverket, Så mår våra hus (BETSI), september 2009 (kopia hos Fuktcentrum LTH)
    url: https://www.fuktcentrum.lth.se/fileadmin/fuktcentrum/Publikationer/sa_mar_vara_hus_Boverket2009_BETSI.pdf
  - titel: Boverket, Energi i bebyggelsen – tekniska egenskaper och beräkningar (BETSI), december 2010
    url: https://www.boverket.se/globalassets/publikationer/dokument/2011/betsi-energi-i-bebyggelsen.pdf
  - titel: Boverket, Energiguiden, Förbättra fönster och dörrar (ändrad 2026-08-31)
    url: https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/fonster_dorrar/
  - titel: Boverket, Energiguiden, Lufttätning av klimatskärm (ändrad 2026-08-07)
    url: https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/klimatskarm/
  - titel: Boverket, Energiguiden, Luftvärmepump (ändrad 2026-08-31)
    url: https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/luftvarmepump/
  - titel: Boverket, Energiguiden, Berg-, sjö- och jordvärme (ändrad 2026-08-31)
    url: https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/berg--sjo--och-jordvarme/
  - titel: Boverket, Energiguiden, Underhåll ventilation och se över styrningen (ändrad 2026-06-15)
    url: https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/ventilation/
  - titel: Folkhälsomyndigheten, allmänna råd om ventilation, FoHMFS 2014:18 (läst ordagrant 2026-10-04)
    url: https://www.folkhalsomyndigheten.se/contentassets/641784832543443ea4eebe9b300c244e/fohmfs-2014-18.pdf
  - titel: Folkhälsomyndigheten, vägledning om ventilation (uppdaterad 2024-12-12)
    url: https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/vagledning-om-ventilation/
  - titel: Folkhälsomyndigheten, allmänna råd om temperatur inomhus, HSLF-FS 2024:10
    url: https://www.folkhalsomyndigheten.se/contentassets/1c28701a4c8f49cabce85e3bb65695dc/hslf-fs-2024-10.pdf
  - titel: Energimyndigheten, Ventilation. En guide från energi- och klimatrådgivningen, ET 2025:03, mars 2025
    url: https://energiochklimatradgivningen.se/download/18.5e9a579b195c021e865e6616/1742900645492/Ventilation_en%20guide%20fr%C3%A5n%20energi-%20och%20klimatr%C3%A5dgivningen%202025.pdf.pdf
  - titel: Energimyndigheten, Husguiden, Ventilation (uppdaterad 2022-07-08)
    url: https://www.energimyndigheten.se/effektiv-energianvandning/guider/husguiden-for-dig-som-vill-energieffektivisera-ditt-hus/minska-behovet-av-varme-och-varmvatten/ventilation/
  - titel: Energimyndigheten, Fönster. En guide från energi- och klimatrådgivningen, ET 2025:01
    url: https://energiochklimatradgivningen.se/download/18.5e9a579b195c021e865e6614/1742900645267/BQ_EPRO011_FO%CC%88NSTER_ET_2025_01_A4_TA.pdf
  - titel: Strålsäkerhetsmyndigheten, radonkällor i inomhusluften
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/vad-ar-radon/radonkallor-i-inomhusluften/
  - titel: Strålsäkerhetsmyndigheten, radon i småhus
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/radon-i-smahus/
  - titel: Strålsäkerhetsmyndigheten, åtgärder mot radon
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/atgarder-mot-radon/
  - titel: SWESIAQ, Utredning av självdragssystem i bostad, bilaga till SWESIAQ-modellen, 2023-05-15
    url: https://swesiaq.se/onewebmedia/Dokument/Sj%C3%A4lvdrag%20230515.pdf
  - titel: RISE (fd SP), fuktsaker.se, Tryckskillnader
    url: https://fuktsaker.se/lufttathet/tryckskillnader/
  - titel: Svensk Ventilation, Självdragssystem (ändrad 2015-01-07)
    url: https://www.svenskventilation.se/ventilation/olika-satt-att-ventilera/sjalvdragssystem/
  - titel: Svensk Ventilation, Vad har jag för ventilation? (ändrad 2021-09-13)
    url: https://www.svenskventilation.se/ventilation/bostader/vad-har-jag-for-ventilation/
  - titel: Svensk Ventilation, Enfamiljshus (ändrad 2021-08-17)
    url: https://www.svenskventilation.se/ventilation/bostader/enfamiljshus/
  - titel: Svensk Ventilation, Från- och tilluftssystem (ändrad 2023-04-26)
    url: https://www.svenskventilation.se/ventilation/olika-satt-att-ventilera/fran-och-tilluftssystem/
  - titel: Fresh (tillverkare), Fresh 100 Thermo, produktblad 2003-11-01
    url: https://fresh.se/Image/GetDocument/sv/378/product%20sheet%20wall%20vent%20f100%20thermo.pdf
```

Redan i andra blad och citerade via dem: Boverket Risker med fukt från inomhusluften, Tilläggsisolera vinden (`guider-fukt-pa-vinden.md`); SP B&T 4/04, 4/06, 4/07 (samma); FoHM tillsynsvägledning om temperatur (`guider-kallras.md`); Boverket radonsidor (`kunskap-radon.md`).

---

## 13. Osäkert och saknas

**Saknas (sökt, inte hittat):**
- Gällande flöde per rum (kök, bad, wc). Bara historiska råd för mekanisk ventilation (S20). Letat: BFS 2024:8, BBR 6-vägledningen, FoHM vägledning.
- Andel **självdragshus** som klarar 0,35 l/s per m². BETSI ger bara alla småhus (82 % av golvarean under) och medel per system.
- Typisk kanalhöjd i småhus. 5 och 8 m i tabell 1.2 är antaganden.
- Krav eller råd om att kanalen ska mynna över nock.
- Antal uteluftsventiler per rum från myndighet eller branschorganisation.
- SFP eller fläkteffekt för FTX och F i villa (Energimyndighetens testtabell gav 404).
- Värmefaktor för frånluftsvärmepump.
- Kostnad för att byta till FTX eller FVP.
- Nyare statistik över ventilationssystem i småhus än BETSI 2007–2008.
- En myndighet som säger att självdrag ger högre radonhalt än mekanisk ventilation.
- Myndighet som beskriver papperstestet för husägare (SWESIAQ är högsta källan).
- "Neutrala zonen" i en läst källa av rang.
- SMHI-data hämtades inte; tabell 1.2 räknar på valda utetemperaturer.

**Osäkert:**
- Boverket 1995 är OCR-läst. Formeln och citaten är tydliga; appendixtabellen (1.4) är rekonstruerad och ska kontrolleras mot originalet.
- BFS 1993:57-tabellen är OCR-läst med förskjutna kolumner. Bostadsraderna i 2.3 bygger på Svensk Ventilations sammanställning i raw-läge, som stämmer med OCR:en. Badrumsraderna byter lätt plats i layout-läge.
- BFS 2011:16: senaste konsoliderade version är t.o.m. BFS 2017:10. En senare ändring kan inte uteslutas helt (rinfo ej genomsökt).
- BETSI:s 0,40 oms/h och 0,23 l/s per m² Atemp går inte ihop med 2,5 m takhöjd (3.4).
- RISE/fuktsaker.se och Fresh F100 Thermo-webbsidan är UTDRAG. Fresh-produktbladet är ordagrant men från 2003.
- SWESIAQ är en ideell förening för innemiljöutredare, inte myndighet. Dokumentet har remissats (bl.a. Folkhälsomyndigheten) och har LTH-medverkan; väger som branschorganisation.

**Rättelser till andra blad:**
- `fukt-gemensamma-tal.md` 7.2 och 11: FoHMFS 2014:18 är nu läst ordagrant (avsnitt 7 här). T45 och T46 kan få UTDRAG-märkningen borttagen. Notera att 1 000 ppm-meningen i FoHMFS står i skolstycket (6).
- `fukt-gemensamma-tal.md` 13.1, "imman borta inom 15 minuter enligt Boverkets riktlinjer" saknar källa hos Boverket, men SWESIAQ 2023 anger "högst 15-30 min" för spegeln (S42). Det är en källa att använda i stället, märkt som förening.

---

## 14. Tal som cirkulerar och inte ska upprepas

| Påstående | Var | Varför inte |
|---|---|---|
| "BBR kräver 15 l/s i badrum" / "nuvarande BBR kräver minst 15 l/s" | totalbyggarna.se, lead- och installatörssidor (sökutdrag 2026-10-04; samma i `fukt-gemensamma-tal.md` 13.1) | Står inte i BFS 2024:8. 15 l/s var ett av två alternativ i ett allmänt råd för **mekanisk** frånluft i badrum utan fönster, BBR 94–2006 (S20) |
| Kök 10 l/s, badrum 10 och 15, wc 10 "enligt Boverket" | lead-sidor | Samma: historiskt råd, mekanisk ventilation, upphört 2006 |
| "78 % av småhusen klarar kraven på luftomsättning" | Svensk Ventilation, "Vad har jag för ventilation?" | Motsäger BETSI ("fyra femtedelar" under). Troligen ett "inte" som fallit bort. BETSI (myndighet, mätning) väger tyngst |
| "Ca 70 %, nästan 1,5 miljoner småhus byggdes med självdrag" | dryft.se (firma, sökutdrag) | Ingen källa. BETSI: 72 ± 3 %, ca 1,2 miljoner (2007–2008) |
| "Imman ska vara borta inom 15 minuter enligt Boverket" | ventilation.se m.fl. (`fukt-gemensamma-tal.md` 13.1) | Boverket säger det inte. SWESIAQ: 15–30 min |
| "Självdrag fungerar inte alls på sommaren" | Svensk Ventilation ("blir det därför ingen ventilation") | Branschorganisation; Energimyndigheten säger "otillräckligt eller helt avstanna". Skriv Energimyndighetens version |
| "OVK krävs inte för småhus" (utan förbehåll) | allmänt | Gäller bara S och F. FT, FX och FTX kräver första besiktning |
| "Kanalen/skorstenen ska gå minst X m över nock" för självdragets skull | inte hittat med källa | Ingen källa; Boverket 1995 säger att äldre regler inte angav någon skorstenshöjd |
| Pascal-konstanter utan källa (t.ex. "1 Pa per meter") | – | Använd 0,04 (Boverket), 0,043 (SWESIAQ) eller 0,0435 (RISE) med källa |
