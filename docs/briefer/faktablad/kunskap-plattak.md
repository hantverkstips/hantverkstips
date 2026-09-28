# Faktablad: kunskap/tak/plattak

Ny sida. `/tak/plattak/` · `src/content/kunskap/tak/plattak.mdx` · samling **kunskap** (checklistan anger kunskap, därför inte `guider-`), `pelare: tak`, `niva: mellan`, kunskapssida med ett avsnitt om att lägga själv, inget produktkort. Huvudfras **plåttak** (6 600/mån). Sidofraser: plåttak kostnad (320), lägga plåttak själv (210), lägga takplåt (70), takpapp under plåttak (90), måla takplåt (70), byta takpannor till plåt (ingen data). Värdartikel för `/rakna/takbyte/`. Checklista: `docs/briefer/seo-checklista-2026-09-29/tak.md`, avsnittet /tak/plattak/.

Allt nedan är hämtat 2026-09-28 om inget annat står. Lagtexten och Boverkets sidor är lästa av mig (curl och text-extraktion). Tillverkarnas monteringsanvisningar är lästa av en hjälparbetare med pdftotext; jag har kontrollerat Plannja Royal (skruv per m², verktyg, bemanning) och Plannjas FAQ (lägga själv, livslängd, garanti) mot originalet.

Snörasskydd på plåt står i `kunskap-snorasskydd.md` avsnitt 8 och upprepas inte. Priser och rot för hela takbytet står i `rakna-takbyte.md` avsnitt 4 och 5; här står bara det som gäller plåt.

---

## 0. Det sidan kan säga, och det som stoppar

- **Bygglovet är klart och entydigt.** Lagtext och Boverket säger samma sak: byte av taktäckningsmaterial på ett en- eller tvåbostadshus kräver inte bygglov sedan 1 december 2025, med undantag för särskilt värdefulla byggnader och områden med skyddsbestämmelser (PBL 9 kap. 37 §) och utökad lovplikt i detaljplan eller områdesbestämmelser (9 kap. 2 § andra stycket). Checklistan nämner "undantagen i 34 till 37 §§". **34–35 §§ (närmare gräns än 4,5 m, järnväg) gäller inte fasadändring** enligt lagtexten; 36 § gäller bara solenergianläggningar. Bara 37 § och planen gäller ett takbyte. Se 4.3.
- **Läktavstånd, skruv och lutning finns per plåttyp** ur Plannjas och Lindabs anvisningar 2023–2026. Plåtgrossistens tal ("bärläkt 525 mm, 6 till 8 skruv") behövs inte: Plannja Royal anger själv "6-7 skruvar per m2".
- **Pris per kvadratmeter lagt per plåttyp** finns hos tre källor (Hantverkskollen, Totalbyggarna, Beckmans), alla förmedlare eller firmor. Källorna säger olika, se 3.1.
- **Pruszynski** gick inte att nå (DNS-fel). Inga tal från Pruszynski.

---

## 1. Plåttyperna (tabellen i H2 1)

### 1.1 Monteringsdata per typ, ur tillverkarens anvisning

| Typ | Produkt | Minsta lutning | Bärläkt c/c | Skruv | Vikt stål | Källa |
|---|---|---|---|---|---|---|
| Takpanneplåt | Plannja Royal | "Min. taklutning 14° (1:4)" | följer pannsteget, 400 mm ("Bärläktavstånd för Plannja Takpannor skall alltid följa takpannans pannsteg") | "6-7 skruvar per m2" (tumregel), 4,8x35 mot träläkt | 4,9 kg/m² | PL-ROYAL |
| Takpanneplåt | Plannja Regent | 14° (1:4) | 350 mm (steglängd) | som Royal | 4,7 kg/m² | PL-ROYAL |
| Takpanneplåt | Lindab Torekov/Norrviken (LPA/LPE) | "Taklutningen måste vara minst 14°." | "vid takprofil LPA cc 400 och LPE cc 350" | skruv i varje panna längs takfot, nock och gavel; annars "varannan 'panna' och varannan 'pannrad'" | – | LB-PANNA |
| Pannplåt (lång, profilerad) | Plannja Pannplåt | "Minsta rekommenderade lutning 10° (1:9)"; tätning i överlapp 10–14° | "Max läktavstånd med hänsyn till plåtens gåbarhet Strö- och bärläkt är 500 mm." | "c/c 500 mm i varje profilbotten med skruv 4,8x35" | 5,2 kg/m² | PL-PANN |
| Pannplåt | Lindab LPPN20D | "minst 14°" | "Max cc 500 mm" | "3 st/m²" vid ändupplag, "2 st/m²" vid sidoöverlapp (köpråd) | – | LB-LPPN |
| Trapetsplåt | Plannja 20-105 | "Minsta rekommenderade lutning 5,7° (1:10)"; tätning 5,7–14° | "Bärläktsavstånd c/c 500 mm" (på träpanel), ströläkt c/c 600 | "Ett fästelement till varje läkt i var tredje profilbotten" | 3,7 / 4,6 / 5,5 kg/m² vid 0,40 / 0,50 / 0,60 mm | PL-PROF |
| Trapetsplåt | Lindab LTP20 | "Den lägsta tillåtna taklutningen är 5,7°." | "Kontakta Lindab för dimensionering." | "1 skruv i varje profilbotten" vid ändupplag | – | LB-PROF |
| Klickfals | Plannja Trend | "Minsta rekommenderade lutning 8° (1:7)" | på läkt "max c/c 300 mm", bärläkt minst 70 mm bred | "4,2x25 i de förstansade hålen", "C/C 300 mm upp till nock" | enhet oklar i källan | PL-TREND |
| Klickfals | Plannja Modern | 10° (1:9) | "max c/c 400 mm", bärläkt minst 70 mm bred | på läkt "profilbotten på varannan läkt med skruv 4,8x35" | 5,4 kg/m² | PL-MODERN |
| Klickfals, bandtaksprofil | Lindab SRP25N Båstad | "kan läggas ner till 8 graders taklutning"; fogmassa vid 8–11° | "maximalt … 300 mm" på läkt, med polyetenduk PD10 95 under varje plåt; annars "tätt underlag" | "cc 300 längs takets kanter och cc 600 i övrigt"; på 17 mm råspont cc 300 hela ytan | – | LB-SRP |
| Bandtäckning (falsad planplåt) | Plannja, Lindab | – | – | – | 0,20 kN/m² (≈ 20 kg/m²) för "Takplåt dubbelfalsad, underlagspapp, underlagsspont", TräGuiden | ingen anvisning för privatpersoner hittad |

- Ströläkt: Plannja Royal och Regal "Ströläkt 25x50 c/c 600"; Plannja Pannplåt "Bärläkt 28x70 Ströläkt 25x50 c/c 500"; Lindab "Vid träläkt rekommenderas 25×25 till ströläkt och 25×50 till [bär]läkt" (LB-PANNA, LB-LPPN, LB-PROF).
- Takstol c/c 1 200: Plannja Royal "Takstolsavstånd c/c 1200 mm." "Bärläkt fästes med 2 varmförzinkade spikar, 100x3,4 i varje takstol." Plannja Royal, tabell för lätt underlagstak, snölast 1,0–2,5: bärläkt 45x70. På träpanel ("minimitjocklek17mm") bärläkt 25x50.
- Överhäng vid takfot: Plannja Royal "Omkring 1-2 cm från kanten"; Plannja Pannplåt "monteras med 10 mm utstick på ett standard takfotsbeslag"; Plannja Trend "10 mm utstick". Takfotsbeslaget fästs "med avståndet 500 mm", skarvas "omlott med min.100 mm" (Royal).
- Överlapp: Plannja Pannplåt "Plåt nummer 2 måste överlappa plåt nummer 1 med minst 200 mm." Plannja 20-105 ändöverlapp: "5,7–6,3 grader 450 mm … över 11,3 grader 200 mm". Lindab LTP20: "Om taklutningen är mindre än 14° måste överlappet vara längre och tätningsremsa måste användas."
- Lindab om gammalt tak: "Tack vare takpannornas låga vikt kan plåtarna normalt läggas ovanpå ett gammalt tak." (LB-PANNA) Används bara med Lindabs namn, och bara om hantverkaren tar med det.
- Byggmax TP20 (butikstext, inte tillverkare): "Avstånd mellan ströläkt: 600 mm Avstånd mellan bärläkt: 500 mm". Används inte, tillverkarens tal finns.
- Osäkert i utdraget: Plannjas fribärande läkttabell (45x70/45x90 vid takstol c/c 1 200), köpråd-kolumnen för LTP20, Trends vikt. Används inte.

### 1.2 Källor, tillverkare

- **PL-ROYAL** Plannja, "Monteringsanvisning Plannja Royal och Plannja Regent", 2026-2 · https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-royal-regent-2026-2.pdf?sfvrsn=38639147785467830000
- **PL-REGAL** 2026-1 · https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-regal-2026-1.pdf?sfvrsn=16639080526129370000 (14°, ströläkt 25x50 c/c 600, skruv 4,8x35 i profilbotten)
- **PL-PANN** "Monteringsanvisning 2026 | Plannja Pannplåt" · https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-pannplat-2026-1.pdf?sfvrsn=17639080525318400000
- **PL-PROF** "Monteringsanvisning 2026 | Tak- och väggprofiler", 2026-3 · https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-tak-vagg-profiler-2026-3.pdf?sfvrsn=36639253248935100000
- **PL-TREND** · https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-trend-2026-1x.pdf?sfvrsn=87639089069572830000
- **PL-MODERN** · https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-modern-2026-1.pdf?sfvrsn=19639080525723300000
- **PL-FAQ** Plannja konsument, vanliga frågor · https://www.plannja.se/konsument/support/faq
- **PL-GAR** "Garantiåtagande färgbelagd stålplåt", 2024-04-01, reviderad 2026-05-08 · https://www.plannja.se/docs/default-source/documents-se/garantier/garanti-plannja-stalplat-2026-05-08-edit.pdf?sfvrsn=43639178919118030000
- **PL-RÅD** "Råd om val av material och underhåll", januari 2021 · https://www.plannja.se/docs/default-source/documents-se/garantier/se-plannja-rad-om-val-och-underhall-2021-1.pdf?sfvrsn=b1293b85_7
- **LB-PANNA** "Lindab Torekov & Norrviken (LPA/LPE) Monteringsanvisningar", 2024-09-20 · https://www.lindab.se/globalassets/commerce/lindabwebproductsdoc/assets/production/zde0otc2odatnzc1ms00ownhltkzzmmtotnmnzfmmdq1ntix/5250310262028213421/takpanna-torekov-norrviken-montering-se.pdf?v=1769298996
- **LB-LPPN** "Lindab Ranarp Monteringsanvisning LPPN20D", 2023-05-08 · https://stlpimeuscprod.z1.web.core.windows.net/assets/Yjc5ZDg1YWYtNzBkMS00OTkxLWI1ZTItZDI4YzllZmVmODVm/5249877330418153122/LPPN20D_Assembly_SE.pdf
- **LB-PROF** Lindab profilerad plåt (LTP20 Grevie m.fl.), 2024-04-25 · https://www.lindab.se/globalassets/commerce/lindabwebproductsdoc/assets/production/mge0mwzjmgmtzmu4zc00nmuwlthim2ytodcxmdy4ymzkntk0/5250182415183917907/profiled_sheeting_assembly_se.pdf?v=1790470764
- **LB-SRP** "Lindab Båstad Monteringsanvisningar SRP25N", 2023-03-17 · https://itsolution.lindab.com/lindabwebproductsdoc/assets/production/MDgyZmY0ZGItMTBmOC00YmIyLWI5MTktNTJhNmU2YTY0YmMz/5249862589961486427/seam_roof_profile_assembly_se.pdf
- **LB-GAR** "Garanti för produkter av färgbelagd stålplåt", 2026-01-15 · https://www.lindab.se/globalassets/commerce/lindabwebproductsdoc/assets/production/ztu0mtmwotctywrlns00nwqyltg5zditothiogvlzmywota3/5250942518737348772/garanti_fargbelagd_stalplat_20260115.pdf?v=1790470803
- Lindab har ingen produkt som heter "Topline". Coverline är Lindabs varumärke för takprofilerna ovan.

---

## 2. Livslängd och garanti (håll isär)

### Garanti, tillverkarnas dokument

**Plannja** (PL-GAR, tabell 1; första talet korrosivitetsklass C1–C3, andra C4):

| Beläggning | Teknisk garanti | Estetisk garanti |
|---|---|---|
| GreenCoat PRO BT EMK Matt/Glossy | 50 år / 20 år | 25 år / 15 år |
| GreenCoat PRO BT STD Matt/Glossy | 40 år / 15 år | 20 år / 15 år |
| Hard Coat | 30 år / 15 år | 20 år / 15 år |
| Polyester | 15 år | 10 år |
| Plastisol 200 | 10 år | 10 år |

- Villkor, ordagrant: "a) produkten skall ha installerats inom 6 månader efter fakturadatum". "Garantitiden räknas från datum för leveransen till byggplatsen eller 18 månader efter tillverkningen". Årlig besiktning och underhåll krävs. Undantag bland annat "ytor med bättringsfärg".
- PL-FAQ: "Vi har upp till 40 års garanitid på tak- och fasadprofiler samt upp till 50 års garanti på material till bandtäckning." (stavningen är Plannjas). Samma FAQ på annat ställe: "Plannjas tekniska garanti sträcker sig upp till 50 år". Garantidokumentet gäller.

**Lindab** (LB-GAR, tabell 1, C1–C3 / C4):

| Färgsystem och användning | Estetisk garanti | Teknisk garanti (genomrostning) |
|---|---|---|
| GreenCoat Pro BT, tak- och väggprofiler | 20 år / 15 år | 40 år / 15 år |
| GreenCoat Pro BT, bandtäckningsplåt PLX | 20 år / 15 år | 50 år / 20 år |
| PE25, tak- och väggprofiler | 10 år | 10 år |

- Villkor: garantin gäller inte "Om lutningen på taket … är mindre än 1:16 (3,6º)", och inte "närmare än 300 meter från hav med hög salthalt". Tillägg för bandtäckning: "Garantin gäller inte, om inte underlagspappen plåtens läggs på är godkänd enligt AMA."

**Byggmax** (butik): "Byggmax lämnar 10 års funktionsgaranti på all takplåt". Butikens egen, inte tillverkarens.

### Livslängd

- Plannja, PL-FAQ, ordagrant (kontrollerat): "Det är inte ovanligt att den tekniska livslängden sträcker sig upp emot 50 år och vidare om man håller taket rent från mossa och smuts som binder fukt."
- Plannja, PL-FAQ: "takets skyddande underlagspapp brukar åldras snabbare än ytskiktet."
- Lindab: inget livslängdstal hittat.
- Förmedlarna anger livslängd per plåttyp utan källa (Hantverkskollen: trapets och takpanneplåt 30–50 år, klicktak 40–60, falsat 50–100; Takexperter 40–60 år för stål). **Används inte** som livslängd i tabellen. Tabellens kolumn "livslängd" fylls med tillverkarens garanti per beläggning och Plannjas "upp emot 50 år och vidare", märkt som tillverkarens ord.
- Byggmax: "livslängden är lång, uppemot 50-60 år" (butik, används inte).

---

## 3. Vad det kostar

### 3.1 Pris per m² lagt, per plåttyp (före rot, inkl. moms)

Källorna och datumen: se `rakna-takbyte.md` avsnitt 4.1 (P2 Beckmans, P3 Byggstart, P4 Hantverkskollen, P5 Totalbyggarna, P6 BraByggare).

| Plåttyp | P4 Hantverkskollen (2026-07-17), totalt / material / arbete | P5 Totalbyggarna (2026-03-30) | P2 Beckmans (ändrad 2026-01-14), efter rot | P6 BraByggare (2026-04-28) |
|---|---|---|---|---|
| Trapetsplåt | 800–1 150 / 150–230 / 190–340 kr | 700–1 200 kr | 1 400–1 800 kr ("Korrigerad plåt") | 1 800–2 800 kr |
| Takpanneplåt | 950–1 300 / 200–320 / 220–430 kr | 900–1 500 kr | 1 400–1 900 kr | – |
| Klicktak (planplåt) | 1 150–1 700 / 267–559 / 340–640 kr | 1 200–2 000 kr | – | – |
| Falsat, bandtäckt stål | 1 600–2 500 / 150–350 / 670–1 190 kr | 1 500–2 500 kr | 1 500–3 500 kr | 3 000–4 500 kr |

- P4 om vad som ingår, ordagrant: "total entreprenadkostnad — material, arbete, underlagspapp, plåtdetaljer, ställning och bortforsling inkluderade — för ett normalt villaprojekt med 100–200 m² takyta och ca 22° lutning. Alla priser inkluderar moms men är före ROT-avdrag."
- P4 om bandtäckning, ordagrant: "Obs: Materialkostnaden för falsat plåttak ser låg ut — men arbetskostnaden är hög. Det är falsningstiden som driver totalpriset." **Det är förklaringen till spannet** (checklistan krav 1): materialet per m² är ungefär lika för trapets och bandtäckning, arbetet är tre gånger dyrare för falsning. Egen jämförelse av P4:s rader: arbete trapets 190–340 kr/m², falsat 670–1 190 kr/m².
- P3 Byggstart, plåttak utan typ: "genomsnittspriset för att lägga plåttak ligger på cirka 1.700 kronor per kvadratmeter. Summan inkluderar samtliga kostnader för arbete och material. … så lågt som på 1.500 kr/m2 … upp till 3.000 kr/m2." P3 om zink och koppar: "Zink- och kopparplåt är svårare att lägga och kräver specialkompetens som reflekteras även i priset."
- P9 Bygghemma (2026-02-23): "Normalt landar priserna någonstans mellan 1500 kr/m2 och upp till 3500 kr/m2." Utan plåttyp.
- **Källorna säger olika.** P6 ligger dubbelt så högt som P4 och P5 för trapets och bandtäckning. P2:s tal är efter rot (se `rakna-takbyte.md` 4.2). P4 är den enda som delar material och arbete per plåttyp, och väger tyngst för tabellen på sidan. Skriv källa och datum per rad, inget medelvärde.
- Topp 5 anger 800–3 500 kr utan förklaring (checklistan). Förklaringen enligt källorna: plåttypen (falsning är arbetskrävande), takets form, och vad som ingår (ställning, rivning, underlag). Byggstart: "Takets storlek är som sagt en viktig faktor, men även höjden på taket kommer att påverka priset."

### 3.2 Materialpris i butik (inkl. moms)

| Produkt | Butik | Pris | Datum | Adress |
|---|---|---|---|---|
| Lindab LPE Norrviken svart, 1530x1080x0,5 mm (takpanneplåt) | Hornbach | 229 kr/m² (377,85 kr/st) | 2026-09-28 | https://www.hornbach.se/p/takpanneplat-lindab-lpe-norrviken-svart-1530x1080x0-5-mm/12041355/ |
| Precit takpanneplåt svart, 2160x1170x0,5 mm | Hornbach | 199,01 kr/m² | 2026-09-28 | https://www.hornbach.se/p/takpanneplat-precit-svart-2160x1170x0-5-mm/8457257/ |
| Lindab LLP20 Förslöv svart, 2500x1000x0,5 mm (trapets) | Hornbach | 185 kr/m² (462,50 kr/st) | 2026-09-28 | https://www.hornbach.se/p/takplat-lindab-llp20-forslov-svart-2500x1000x0-5-mm/5588592/ |
| Precit H12, 0,4 mm (trapets) | Hornbach | 149 kr/m² | 2026-09-28 | kategorin https://www.hornbach.se/c/byggmaterial-tra-fonster-dorrar/tak/plattak/trapetsplat/S21393/ |
| Plannja Regent HardCoat (takpanneplåt) | Plåtgrossisten | 232 kr/m² (produkttitel) | 2026-09-28 | https://www.xn--pltgrossisten-qfb.se/produkt/plannja-regent/ |
| Plannja Trend (klickfals) | Plåtgrossisten | 389 kr/m² (produkttitel) | 2026-09-28 | Plåtgrossisten |
| TP20 Prima 0,5 mm (trapets) | Plåtgrossisten | 164 kr/m² (produkttitel) | 2026-09-28 | Plåtgrossisten |

- Hornbach: "Alla priser är inkl. moms och exkl. fraktkostnader".
- Plåtgrossistens brödtext (https://www.xn--pltgrossisten-qfb.se/takplat-platgrossisten/) anger andra tal än produkttitlarna ("Profilplåts TRP20 35×35 kostar 149 kr/m2 i svart … Plannjas TRP 20 heter 20-105 och den går att få från 205 kr/m2"). Brödtexten kan vara äldre. Använd produkttitlarna eller ingen.
- Byggmax: källkoden ger "price":"200.00" för takpanneplåt P-20506 och P-20540 och "259.00" för TP20 P-6302518, men priset är inte sett på den renderade sidan. **Används inte** utan kontroll i webbläsare.
- Egen jämförelse: butikspriset för plåten (149–389 kr/m²) ligger inom P4:s materialkolumn och förklarar en liten del av priset lagt.

### 3.3 Poster, rot och räknaren

- Poster (rivning, läkt och underlag, plåt, beslag, ställning, container) med belopp: `rakna-takbyte.md` 4.3 och 4.4. Exempel P4, 150 m² bandplåt: rivning och bortforsling 15 000, underlagspapp och läkt 25 000, bandplåt material 52 500, arbete montering 127 500, beslag, nock, fotrännor 22 000, ställning och etablering 20 000, totalt 262 000 kr före rot.
- Rot på plåttak, Skatteverket ordagrant: "reparera, rengöra eller byta ut plåttak, hängrännor och stuprör." Ställningsmontage är arbete, hyran och containern är det inte. Tabellen i `rakna-takbyte.md` avsnitt 5.
- Rot-taket: 30 procent, 50 000 kr per person och år, 75 000 kr med rut (`src/lib/kalkyl/rotavdrag.ts`). Två ägare: 100 000 kr (Beckmans skriver samma sak: "två ägare kan få upp till 100 000 kr i avdrag tillsammans"; Skatteverket: "Sammanlagt kan dock rotavdraget aldrig bli högre än 30 procent av den totala arbetskostnaden").
- `<Kalkylator namn="takbyte" />` bäddas in i kostnadsavsnittet (checklistan).

---

## 4. Bygglov och byte från pannor till plåt

### 4.1 Lagtexten i dag

**Källa L1:** Plan- och bygglag (2010:900), Riksdagen, SFS 2010:900 t.o.m. SFS 2026:1583, https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/ , läst 2026-09-28. Samma lydelse återges hos Boverket (L3).

- **9 kap. 15 §**, ordagrant: "Det krävs bygglov för annan ändring av en byggnad än en tillbyggnad, om ändringen innebär att
  1. byggnaden helt eller delvis tas i anspråk eller inreds för ett väsentligen annat ändamål än det som byggnaden senast har använts för eller enligt senast beviljade bygglov har anpassats till utan att den avsedda användningen kommit till stånd,
  2. det i byggnaden inreds ytterligare en bostad, eller
  3. det i ett område som omfattas av en detaljplan görs en fasadändring på en byggnad som inte är ett en- eller tvåbostadshus, en komplementbyggnad eller ett komplementbostadshus och ändringen sker på en fasad eller på ett tak som vetter mot en allmän plats. Lag (2025:974)."
- **1 kap. 4 §**, definition, ordagrant: "fasadändring: en ändring av en byggnad som innebär att byggnaden byter kulör, fasadbeklädnad eller taktäckningsmaterial eller att byggnadens yttre karaktärsdrag påverkas på annat sätt,"
- **9 kap. 18 §**, ordagrant: "Även om bygglov inte krävs enligt 15-17 a §§ kan bygglov krävas enligt någon av 34-37 eller 54 §. Lag (2026:406)."
- **9 kap. 37 §**, ordagrant: "Det krävs bygglov för nybyggnad, tillbyggnad, inredning av ytterligare en bostad i ett enbostadshus eller fasadändring, om
  1. åtgärden avser en byggnad som omfattas av bestämmelser om skydd för särskilda värden i en detaljplan enligt 4 kap. 16 § 3 eller i områdesbestämmelser enligt 4 kap. 42 § andra stycket,
  2. åtgärden avser en särskilt värdefull byggnad enligt 8 kap. 13 § första stycket som inte omfattas av sådana bestämmelser som avses i 1,
  3. åtgärden vidtas inom en tomt, en allmän plats eller ett bebyggelseområde som omfattas av bestämmelser om skydd för särskilda värden i en detaljplan enligt 4 kap. 16 § 3 eller i områdesbestämmelser enligt 4 kap. 42 § andra stycket, eller
  4. åtgärden vidtas inom en allmän plats eller ett bebyggelseområde som är ett sådant särskilt värdefullt område som avses i 8 kap. 13 § andra stycket 3 eller 4 utan att omfattas av sådana bestämmelser som avses i 3. Lag (2025:974)."
- **9 kap. 2 §**, ordagrant: "En åtgärd kräver lov om det följer av bestämmelserna i detta kapitel. Ytterligare bestämmelser om att det krävs bygglov kan finnas i en detaljplan eller i områdesbestämmelser. Lag (2025:974)."
- **9 kap. 52 §**, ordagrant: "Även om en åtgärd inte omfattas av krav på bygglov, rivningslov eller marklov, får den som avser att vidta åtgärden ansöka om lov för åtgärden. Lag (2025:974)." (frivilligt bygglov)
- **Ikraftträdande, lag 2025:974**, ordagrant: "1. Denna lag träder i kraft den 1 december 2025. 2. Äldre bestämmelser gäller fortfarande för ärenden som har påbörjats före ikraftträdandet … I fråga om tillsynsåtgärder och påföljder med anledning av en åtgärd som innebär en överträdelse av de äldre bestämmelserna, ska dock de nya bestämmelserna tillämpas om åtgärden enligt de nya bestämmelserna inte är en överträdelse eller leder till en lindrigare påföljd. 3. Bestämmelser i en detaljplan eller områdesbestämmelser om undantag från krav på lov, som har meddelats med stöd av upphävda 9 kap. 7, 10 eller 11 §, ska fortsätta att gälla, dock längst till utgången av november 2027."
- Egen läsning av punkt 2: den som bytte tak utan lov före 1 december 2025, där lov krävdes då, bedöms vid tillsyn efter de nya reglerna om de är lindrigare. Skrivs bara om hantverkaren vill ta med det, märkt som vår läsning.

### 4.2 Boverket säger samma sak

- **L2:** Boverket, "Ändra fasad eller tak" (för privatpersoner), publicerad 4 juni 2026, https://www.boverket.se/sv/byggande/bygglov-rivningslov-marklov-och-anmalan/vad-far-jag-bygga-utan-bygglov/andra-fasad-eller-tak/ , ordagrant:
  - "Du behöver vare sig bygglov eller anmälan för att ändra fasad eller tak på ditt hus. Även om du inte behöver bygglov så måste ändringen göras varsamt och anpassas till omgivningen. Den får heller inte innebära en betydande olägenhet för dina grannar."
  - Under "Byta tak": "Du behöver inget bygglov för att byta taktäckningsmaterial. Med att byta taktäckningsmaterial menas ett byte till ett tak som ser annorlunda ut eller som är av annat material. Innan du byter tak behöver du kontrollera att ditt tak klarar ny belastning."
  - "Kom ihåg att ibland krävs det bygglov i alla fall".
  - "Kommunen kan i vissa fall ha beslutat om utökad eller minskad lovplikt i detaljplan eller områdesbestämmelser."
  - Om minskad lovplikt: "tänk på att från och med den 1 december 2027 kommer dessa åtgärder att kräva bygglov för då upphör bestämmelserna om minskad lovplikt att gälla."
  - "Om du är osäker på vad som gäller där du ska bygga, ta kontakt med byggnadsnämnden i din kommun."
- **L3:** Boverket, PBL kunskapsbanken, "Bygglov för fasadändring", senast ändrad 1 juli 2026, publicerad 1 juli 2017, https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/fasadandring , ordagrant:
  - "Inom detaljplan krävs det bygglov om åtgärden är en fasadändring, åtgärden utförs på en annan byggnad än ett en- eller tvåbostadshus, en komplementbyggnad eller ett komplementbostadshus, ändringen sker på en fasad eller på ett tak som vetter mot en allmän plats. Samtliga tre förutsättningar ovan måste vara uppfyllda för att åtgärden ska kräva lov." (punktlistan sammanfogad)
  - "För en- och tvåbostadshus, komplementbyggnader och komplementbostadshus krävs det inte bygglov för att byta kulör eller för att byta material på fasad eller tak."
  - "Det kan dock krävas bygglov för fasadändringar på dessa byggnader om de omfattas av utökad lovplikt i plan- och bygglagen, PBL, eller i detaljplan eller områdesbestämmelser."
  - "Det finns utökad lovplikt för fasadändringar i PBL på följande platser och områden: i områden till skydd för totalförsvaret, vid särskilt värdefulla byggnader och områden."
  - **Tegel till plåt nämns uttryckligen:** "Med byte av fasadbeklädnad eller taktäckningsmaterial avses ändring till annat material. Det kan exempelvis vara att byta från putsad fasad till träpanel eller byta från tegeltak till plåttak." (jfr prop. 2024/25:169 s. 113)
  - **Samma material är underhåll:** "Att byta ut fasadbeklädnaden eller taktäckningsmaterialet mot samma material och utförande är dock inte en fasadändring, utan underhåll."
  - "Även om det inte krävs bygglov måste en fasadändring uppfylla de krav i PBL, plan- och byggförordningen, PBF, och Boverkets föreskrifter som gäller för åtgärden."
  - "En lovfri fasadändring får inte strida mot detaljplan eller områdesbestämmelser som gäller för området." (PBL 10 kap. 2 §)
  - Om ändrad lovplikt i planer: "Planbestämmelser om utökad lovplikt gäller. Planbestämmelser om minskad lovplikt som har beslutats med stöd av PBL upphör att gälla den 30 november 2027."
- **L4:** Boverket, "Lista med PBL-ändringar", senast ändrad 15 december 2025, publicerad 23 juni 2025, https://www.boverket.se/sv/samhallsplanering/uppdrag/nytt-regelverk-for-bygglov/lista-pbl--andringar/ , ordagrant: "Lagändringen trädde i kraft 1 december 2025." "Kap. 9 har ersatts av ett helt nytt kapitel med en delvis ny struktur." "Inom detaljplan krävs det bygglov för fasadändringar på alla byggnader, förutom en- och tvåbostadshus, komplementbyggnad eller komplementbostadshus, och om ändringen sker på en fasad eller ett tak som vetter mot en allmän plats."
- **Lagtext och Boverket säger samma sak.** H2:n stoppas inte (checklistans villkor).

### 4.3 Vilka undantag som gäller ett takbyte (egen läsning av lagtexten)

| Paragraf | Gäller fasadändring (takbyte)? | Grund |
|---|---|---|
| 9 kap. 34–35 §§ (närmare gräns än 4,5 m, järnväg 30 m) | **nej** | 34 § räknar upp nybyggnad, tillbyggnad, "en sådan annan ändring av en byggnad som avses i 16 §" (ändrad användning), mur och plank, idrottsanläggning, upplag. Fasadändring står inte med. |
| 9 kap. 36 § (totalförsvaret) | bara solenergianläggning | 36 § 2: "fasadändring som innebär att en solenergianläggning sätts upp eller väsentligt ändras". Takbyte med solcellstak: beslut för hantverkaren, ingen källa läst om solcellstak som taktäckning mer än L3:s mening om "tak- eller fasadintegrerade solfångare eller solcellspaneler". |
| 9 kap. 37 § (skyddsbestämmelser, särskilt värdefull byggnad eller område) | **ja** | ordagrant ovan |
| 9 kap. 2 § andra stycket (utökad lovplikt i detaljplan eller områdesbestämmelser) | **ja** | ordagrant ovan |
| 10 kap. 2 § (lovfri åtgärd får inte strida mot planen) | **ja** | L3; en plan kan alltså föreskriva takmaterial |

- Boverkets privatsida L2 räknar upp fem skäl till utökad lovplikt, däribland "närmare gräns än 4,5 meter". Sidan gäller alla lovfria åtgärder, inte takbyte särskilt. Kunskapsbanken L3, som gäller fasadändring, nämner bara totalförsvaret och särskilt värdefulla byggnader och områden. **Sidan följer L3 och lagtexten.** Skriv inte att 4,5-metersregeln gäller takbytet.
- Egen formulering för kortsvaret som håller mot källorna: byte från pannor till plåt på ett en- eller tvåbostadshus kräver inte bygglov sedan 1 december 2025, om inte huset är särskilt värdefullt eller omfattas av skyddsbestämmelser, eller detaljplanen säger något annat. Fråga byggnadsnämnden om du är osäker (L2).

### 4.4 Vad som gällde före 1 december 2025 (för "äldre sidor har fel")

- **Källa L5:** Boverket, PBL kunskapsbanken, "Bygglov för ändring av byggnaders yttre utseende", granskad 12 november 2020, arkiverad av Internet Archive 2024-02-05: https://web.archive.org/web/20240205061855/https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/andring/ (Boverkets sida finns inte längre på den adressen.)
- Äldre 9 kap. 2 § första stycket 3 c, ordagrant ur L5: bygglov krävdes när "byggnaden byter färg, fasadbeklädnad eller taktäckningsmaterial eller byggnadens yttre utseende avsevärt påverkas på annat sätt." "Första stycket 3 c gäller bara om byggnaden ligger i ett område som omfattas av en detaljplan."
- Äldre 9 kap. 5 §, ordagrant ur L5: "För en- och tvåbostadshus och tillhörande komplementbyggnader inom ett område med detaljplan krävs det, trots 2 §, inte bygglov för att färga om, byta fasadbeklädnad eller byta taktäckningsmaterial, om åtgärden inte väsentligt ändrar byggnadens eller områdets karaktär. Första stycket gäller inte om kommunen enligt 8 § första stycket 6 har bestämt att åtgärden kräver bygglov. Lag (2018:636)."
- Alltså, före 1 december 2025: inom detaljplan krävdes bygglov för villans takbyte om det **väsentligt ändrade byggnadens eller områdets karaktär**; utanför detaljplan krävdes det inte (om inte områdesbestämmelser sa annat). Om tegel till plåt var en väsentlig ändring avgjorde kommunen. Egen sammanfattning av L5.
- **Äldre sidor i fältet:** Takexperter ("Krävs det även bygglov tillkommer kostnader på cirka 15 000 – 30 000 kronor", odaterad "Pris 2026"), Hantverkskollen 2026-07-17 ("byter du till ett material som ser annorlunda ut än det befintliga kan det kräva bygglov. Kontrollera alltid med din kommun"; "Bygglov. Material- eller utseendebyte kan utlösa bygglovsplikt. Ansökan kostar 3 000–10 000 kr"). Nämns inte med namn i publik text (checklistans fälla); innehållet "äldre sidor säger att det krävs lov" får stå.

### 4.5 Belastningen och anmälan

- Boverket L2: "Innan du byter tak behöver du kontrollera att ditt tak klarar ny belastning." Från pannor till plåt blir taket lättare. Vikter i `kunskap-takstolar.md` avsnitt 7 (plåt cirka 5 kg/m², betongpannor 36–51 kg/m², lertegel cirka 30 kg/m² ur tillverkarnas blad; TräGuiden 0,10 kN/m² för profilerad plåt med läkt och duk mot 0,45–0,60 för pannor med läkt och underlag).
- Byter man bärande delar (takstolar) krävs anmälan när de "påverkas väsentligt", PBF 6 kap. 1 § 2 (se `kunskap-takstolar.md` avsnitt 4). Ett rent byte av taktäckning kräver ingen anmälan enligt L2 ("Du behöver vare sig bygglov eller anmälan för att ändra fasad eller tak").
- Varsamhetskravet: L2 "måste ändringen göras varsamt och anpassas till omgivningen". Lagrummet (PBL 2 kap. 6 §, 8 kap. 17 §) är inte hämtat ordagrant. Citera Boverket, inte paragrafen.

---

## 5. Underlaget: läkt, takpapp och duk

- Plannja PL-PANN och PL-PROF, ordagrant: "spontade brädor/plywood minst 17 mm tjocka, med underlagspapp, av minsta kvalitet YAP2200 eller Plannja Anticon Coverall". Vid nybygge: "normalt ett lätt underlagstak t ex Plannja Anticon Coverall".
- Plannja Royal: "Använd alltid ett godkänt vattenavledande underlag t ex Plannja Anticon Coverall." "Vattenavledande underlag läggs över takfotsbeslaget."
- Plannja Pannplåt: "Före montering av takfotsplåt ska en remsa underlagstäckning läggas." Utan rilla: "kräver montering på plant underlag samt underlagspapp".
- Lindab LB-GAR (bandtäckning): garantin gäller inte "om inte underlagspappen plåtens läggs på är godkänd enligt AMA."
- Lindab LB-LPPN: underlag av trä ska "inte vara tryckimpregnerat".
- Lindab LB-SRP: på läkt ska "en polyetenduk, PD10 95, … monteras centriskt under varje plåt".
- Lindab LB-PANNA: "KLS behöver ej ströläkt eftersom den har dräneringshål för vattnet."
- **Diffusionsöppen duk kontra papp och kondens:** inget från tillverkarna hittat. Skriv inte.
- **Snittskissen** (checklistan punkt 8), uppbyggnad nedifrån enligt Plannja Royal på råspont: råspont (minst 17 mm) · underlagspapp minst YAP2200 · ströläkt 25x50 c/c 600 (längs takfallet) · bärläkt 25x50 på träpanel, c/c efter pannsteget (Royal 400 mm) · takpanneplåt · takfotsbeslag med plåten "Omkring 1-2 cm från kanten". Ströläktens c/c och bärläktens dimension står i bildtexten med källa. (Egen sammanställning av Plannjas uppgifter.)

---

## 6. Lägga plåttak själv

- Plannja FAQ, ordagrant (kontrollerat): "Kan man lägga ett plåttak själv? Det beror på hur händig du är. Våra profiler är det många som lägger själva – om taket inte har mycket vinklar och vrår. Ta hjälp av en takläggare om du är osäker. Vill du ha bandtäckning på ditt tak så ska du kontakta en plåtslagare."
- Plannja Pannplåt: "Plannjas monteringsanvisningar är framtagna för att vara till hjälp för såväl privatpersoner som proffs."
- Plannja Royal, ordagrant (kontrollerat): "Montering kan utföras av en person. Vi rekommenderar dock att man alltid är minst två personer för säker montering." "Följ alltid Arbetsmiljöverkets anvisningar."
- Lindab LB-PROF: "För taklutningar mellan 5,7-14° … rekommenderar vi att anlita en kvalificerad fackman". Lindab LB-SRP: "Beslagning kring skorsten bör göras av en plåtslagare."
- Lindab: ingen text om att en privatperson kan lägga själv.
- **Verktyg**, Plannja Royal ordagrant (kontrollerat): "För att montera takplåt behöver du inga speciella verktyg. Däremot kan en skruvdragare underlätta arbetet betydligt. Plåten klipps med plåtsax, nibblingsmaskin eller cirkelsåg. Använd aldrig rondell. Plåtens ytskikt kan skadas av sprutet från klingan."
- Plannja Royal, underhåll efter montering: "Klippkanter och lackskador som uppstår vid montering bör omedelbart bättringsmålas med Plannja bättringsfärg. Efter montering, var noga med att borsta bort alla borrspån, så att profilerna ej missfärgas."
- **Skruv per m²**: Plannja Royal "En tumregel är att det går åt 6-7 skruvar per m2" (kontrollerat). Lindab LPPN20D köpråd 2–3 st/m² efter läge. Övriga i tabell 1.1.
- **Ordningen** (checklistan: hänvisa till tillverkarens anvisning, inget eget recept): Plannja Royal börjar med förberedelser, arbetsskydd, bemanning, verktyg, transport och förvaring och gåbarhet (sidan 15), och hänvisar först till avsnittet "Allmänna förberedelser takläggning", "hur du mäter ditt tak, vilka underlag och material som är lämpliga". Monteringsstegen därefter (takfot, plåt, nock, valmad nock, beslag) har jag bara sett som rubriker i texten, inte läst i ordning. Sidan länkar till anvisningen i stället för att återge stegen.
- Bygghemma (butik, 2026-02-23): "I de allra flesta fall går det bra att lägga om taket själv, speciellt om du har lagt tak förut eller kan få hjälp av någon som har erfarenhet." "Om du väljer att lägga taket själv blir det uppskattningsvis tre gånger så billigt som om du anlitar en firma". Bygghemmas bedömning, inte tillverkarens.
- Rot: eget arbete ger inget rotavdrag (Skatteverket, se `rakna-rotavdrag.md`: "kontanter, eget arbete, närstående ger inget").

---

## 7. Snörasskydd och taksäkerhet på plåt

- Kort, med länk till `/tak/snorasskydd/`. Faktan står i `kunskap-snorasskydd.md` avsnitt 1 (BFS 2024:9 2 kap. 24 §) och 8 (Plannja, Lindab, TJB på plåt). Upprepas inte.
- Plannja FAQ: "På vintern glider snö enkelt av från taket" står hos Takexperter, inte hos Plannja. Använd inte.

---

## 8. Faq-underlag

### Måla takplåt

- Plannja PL-RÅD (januari 2021), ordagrant:
  - "Kulörförändringar, flagning, korrosion eller att man helt enkelt vill byta kulör är exempel på orsaker till att man vill måla om". "En ommålning kan förväntas ge en estetisk livslängd på 10 år eller mer."
  - "Måla inte i direkt solljus och inte i temperaturer under fem grader. Helst bör temperaturen vara minst 15 grader. Relativa luftfuktigheten bör vara högst 65%."
  - "Om zinkskiktet är borta måste plåten grundmålas med en zinkrik primer." "När färgen är borta, men zinkskiktet är oskadat, grundmålas plåten med en wash primer."
  - "Rengör med alkaliskt avfettningsmedel, till exempel femprocentig kaustiksoda med tillsats av något diskmedel."
  - Vidhäftningsprov: "man låter kanten på ett mynt eller en nyckel tryckas mot färgskiktet … Sprätter färgflagor har vidhäftningen gått förlorad".
  - "garantivillkor kan förändras vid om- och bättringsmålning". PL-GAR undantar "ytor med bättringsfärg".
- Nordsjö (allmänt om järn och plåt, odaterad), https://www.nordsjo.se/sv/inredningstips-och-r%C3%A5d/s%C3%A5-h%C3%A4r-skyddar-du-j%C3%A4rn-och-pl%C3%A5t : "Smuts och fett avlägsnas med Original Målartvätt." "Grundmåla obehandlade ytor med Original Metallgrundfärg." "Måla med Original Metallfärg i minst två skikt".
- Alcro (https://www.alcrostudio.se/sv-SE/product/plat-halvmatt-tackfarg/221002ASE20498): "vattenburen halvmatt täckfärg för plåttak … Fungerar på tidigare målade eller grundade ytor." Förbehandlingen bara som **utdrag** (sidan renderas med skript). Beckers: 403, bara **utdrag**. Flügger: 404.
- Rot på målning av plåttak: Skatteverket, under Målning och tapetsering (ej hämtat ordagrant för tak). Under Rengöring: "rengöra altandäck, fasader, tak, takpannor, hängrännor och solceller". Målning av tak: **inte kontrollerat**, skriv inte.

### Regnljud

- Plannja FAQ: "På en normalisolerad byggnad hörs regnet som hamnar på taket mest troligen inte alls … På en oisolerad eller tunt isolerad byggnad kommer det mest troligen att höras att regnet faller på taket."
- Plannja Trend och Modern om dämpningslist: "Syftet är att minska eventuella ljud som kan orsakas av vind och regn." Trend: "Det är dock inte säkert att man kan förhindra ljud i speciellt vindutsatta lägen … rekommenderas Plannja Trend med SoundControl, vilket är en variant med filt på undersidan."
- Plannja PL-PROF om aluminium: "När du använder träläkt bör du häfta fast en regelpappremsa … så slipper du knäppljud vid temperaturväxlingar."

### Kondens under plåten

- Plannja PL-PROF, "Antikondensbelagd plåt": "Till takprofilen P20-105 kan en antikondensfilt appliceras på undersidan redan vid tillverkningen. Den absorberar tillfälligt den kondensfukt som kan bildas på plåtens undersida." "Kondensfilten får inte ligga direkt mot ett sugande underlag, exempelvis träläkt." "Säkerställ god ventilation vid nock".
- Lindab LB-PROF: "Antikondensfilt kan fås på de flesta profiler."
- Gäller plåt utan underlagstak (garage, uthus). På ett bostadshus med råspont och papp: ingen tillverkarkälla om kondens. Skriv inte.

---

## 9. Sökanalys (enligt checklistan och SOKORDSANALYS 8.2, lästa 2026-09-28)

Ordningen är inte kontrollerad i google.se. Kostnadsfrasen:

1. **byggahus.se** (forum): inte läst.
2. **bygghemma.se/reportage-och-guider/lagga-om-tak-kostnad/** (Bygghemma-redaktionen, 2026-02-23): 1 500–3 500 kr/m² utan plåttyp, "tre gånger så billigt" själv. Saknar plåttyper, källor, rot, bygglov. Butikens produkter under texten.
3. **takexperter.se/sida/vad-kostar-det-att-lagga-plattak** (publicerad 2021-04-16, ändrad 2024-05-28): 800–1 500 kr/m² för enklare, livslängd 40–60 år stål, "click-tak" går att lägga själv. Den andra Takexperter-sidan (vad-kostar-plattak, ändrad 2022-08-09) säger livslängd "upp till cirka 40 år". Två sidor, två livslängder. Gammalt: bygglovskostnad i kostnadsguiden.
4. **byggstart.se/pris/takplat** (ändrad 2026-02-18): 1 700 kr/m² snitt, 1 500–3 000. "avdrag på upp till 50.000 kr" utan procent. Saknar plåttyper och bygglov.
5. **vitalybygg.se/tak/plattak/**: gav ingen text vid hämtningen (5 kB). Inte läst.

Kvar hos läsaren: varför spannet är så stort, vilken plåt som passar min lutning, får jag byta från pannor, kan jag lägga det själv och i så fall vilket.

**Det vår sida kan ha som ettan saknar:** pris per plåttyp med material och arbete för sig och datum, och förklaringen (falsningen är arbetet); PBL 9 kap. 15 § och 37 § ordagrant med Boverkets mening om tegel till plåt; vad som gällde före 1 december 2025; minsta lutning, läktavstånd och skruv per m² ur Plannja och Lindab 2023–2026; garanti per beläggning ur tillverkarnas garantidokument, åtskild från livslängd; Plannjas och Lindabs egna ord om att lägga själv och när plåtslagare behövs; räknaren med takarean; snittskiss efter Plannjas anvisning.

---

## 10. Interna länkar

- **Ut** (checklistan, alla krav): `/rakna/takbyte/` som `<Kalkylator namn="takbyte" />` i kostnadsavsnittet; `/tak/snorasskydd/` i avsnittet om snörasskydd; `/tak/hangrannor/` där rännan och fotplåten möts; `/rakna/rotavdrag/` där rotavdraget nämns, ankare som säger rotavdrag. Av dessa finns bara `/rakna/rotavdrag/` publicerad och `src/content/kunskap/tak/snorasskydd.mdx` som utkast, 2026-09-28.
- **In:** `/tak/snorasskydd/`, `/tak/hangrannor/`, `/tak/takstolar/` (där plåt väger mindre än pannor, se `kunskap-takstolar.md` avsnitt 7).

---

## 11. Till affiliateagenten

Checklistan: affiliateagenten avgör om "Det här behöver du" får stå sist med en skruvdragare. Underlag:

- **Tillverkarens verktygslista** (Plannja Royal, kontrollerat): skruvdragare "kan underlätta arbetet betydligt"; plåten klipps med "plåtsax, nibblingsmaskin eller cirkelsåg. Använd aldrig rondell." Det är den enda tillverkarkällan om verktyg. Ingen krav på varvtal eller djupstopp hittad.
- Proffsmagasinets plåtsaxar, nibblare och skruvdragare med priser 2026-09-28: `rakna-takbyte.md` avsnitt 10. I korthet: batteriplåtsaxar 2 485–4 707 kr (Milwaukee M18 BMS12-0 och BMS20-0, Dewalt DCS491N och DCS496N-XJ som butiken säger klarar korrugerad plåt, Makita DJS161Z och DJS101Z, Bosch GSC 12V-13); nibblare 3 629–9 628 kr (Makita DJN161Z och JN1601 "stansar högprofil- och trapetsplåt", Milwaukee M12 FNB16-0, Fein BLK 1.6 E "för tak- och fasadbyggnad", Bosch GNA 18V-16 E); borrskruvdragare 1 237–4 297 kr. Inga slugs.
- Takmaterial och snörasskydd ligger utanför AFFILIATE.md (checklistan).

---

## 12. Osäkert och saknat

- Pruszynski: inte nåbar. Weckman: inte undersökt. Areco: pdf trasig.
- Bandtäckning: ingen monteringsanvisning för privatpersoner hittad; Plannja hänvisar till plåtslagare.
- Diffusionsöppen duk kontra papp: inget från tillverkarna.
- Livslängd per plåttyp från tillverkaren: bara Plannjas "upp emot 50 år och vidare". Förmedlarnas tal per typ har ingen källa.
- Priset lagt per plåttyp: förmedlare och firmor som säger olika, upp till en faktor två.
- Byggmax plåtpris: sett bara i källkod.
- Plannja Trends vikt: enheten oklar.
- Varsamhetskravet: lagrummet inte hämtat ordagrant.
- Rot på ommålning av plåttak: inte kontrollerat.
- Solcellstak som taktäckning och 9 kap. 36 §: inte utrett.
- vitalybygg.se och byggahus.se: inte lästa.
