# Räknarunderlag: /rakna/takavvattning/

Underlag för `src/lib/kalkyl/takavvattning.ts` enligt skillen `nytt-verktyg`. Checklista: `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnittet /rakna/takavvattning/. Faktablad för sidan: `docs/briefer/faktablad/rakna-takavvattning.md`. Värdartikelns faktablad: `docs/briefer/faktablad/guider-hangrannor.md` (källbeteckningarna T1, T2, T3, P26, P10, L1, L2, PM, LG nedan är desamma som där, med adresser).

Allt hämtat 2026-09-28. Varje konstant har källa eller är märkt ANTAGANDE. UX och bygge-agenten godkänner underlaget innan steg 1.

---

## 1. Vad standarderna säger

- **SS 82 40 31** (svensk standard, 1988 enligt checklistan; året står inte i någon läst källa): beräkningsmodell med sannolik regnintensitet. Läst bara i sammanfattning (T1, T3, L2). **Får aldrig stå som gällande utan förbehåll** (checklistan, Fällor).
- **Regnintensitet 0,013 l/(s·m²)**:
  - L2 s. 2, ordagrant: "För area mindre än 10 000 m² godtas att sannolik regnintensitet kan sättas till 0,013 l/(sm²) för hela landet, vilket vårt diagram är baserat på."
  - P10: "Diagrammen är baserade på en sannolik regnintensitet av 0,013l(sm²) för hela landet."
  - T3: "Hjälptabellen i RA Hus 21 för hängrännor stämmer tämligen väl överens med den regnintensitet på 0,013 l/sek och m² som SS 824031 rekommenderar som dimensionerande. Detta innebär att hängrännorna bräddar över minst en gång vart 5 år i de lågintensiva områdena och minst en gång vart annat år i de högintensiva områdena."
  - Checklistan anger "0,013 l/s per kvm enligt RA Hus" via husbyggaren.se. Husbyggarens sida `https://www.husbyggaren.se/dimensionering-av-takavvattning/` är **inte läst** (hittad i sökning, utdraget säger 0,013 l/s·m², lutning under 45°, 10 minuter, en gång på 5 år). Utdrag, inte läst.
- **SS-EN 12056-3** (Avloppssystem, självfall, inne i byggnader, del 3: takavvattning): standarden **inte läst**. Sammanfattning ur BMI Groups beräkningsprogram, https://takavvattning.nu/ (läst i HTML, odaterad, gäller invändig avvattning av tak med tätskiktsmatta), ordagrant:
  - "Dimensionering utförs enligt följande standarder: SS-EN 12056-3, SS 824031."
  - "A=LR x BR. LR är längden av taket som skall avvattnas i meter. BR är den plana/projicerade bredden på taket från takfot till nock."
  - "För takytor med anslutande väggar ökas regnintensiteten med 50% av väggytan. Denna yta adderas till den effektiva takytan vid dimensionering av det totala regnvattenflödet."
  - "I Sverige dimensioneras i regel dagvattensystemen i tät bostadsbebyggelse för 5-årsregn med 10 minuters varaktighet och centrum- och affärsområden för 10-årsregn med 10 minuters varighet."
- **SS-EN 612**: produktstandard för hängrännor och stuprör av plåt (L2: "Enligt SS-EN 612 Klass A-X" på stuprör). P10: "Byggreglerna hänvisar till SS-EN 612, men dimensionerna som anges är ofta inte tillräckliga." Det är 2010 års byggregler (BBR), som inte gäller längre.
- **Gällande föreskrift:** BFS 2024:8 7 kap. 4 § kräver bara att vattnet "leds bort från byggnaderna i tillräcklig omfattning" och hänsyn till frysning. Inga tal. Se faktabladet för hängrännor avsnitt 8.

---

## 2. Formler

### 2.1 Takarea per takfall

Två sätt, och de ger olika tal:

| Metod | Formel | Källa |
|---|---|---|
| Tillverkarnas | A = takets längd × takfallets bredd, per takhalva | P26 s. 10 ("Mät takets längd och bredd på varje takhalva"); L1 ("mäta varje takdel genom att multiplicera takets längd med dess bredd"); PM (B mäts längs pannorna "från takfoten till taknocken", alltså längs lutningen) |
| SS-EN 12056-3 enligt BMI | A = LR × BR, BR = projicerad bredd från takfot till nock | takavvattning.nu |
| Tillägg för vägg | + 50 % av anslutande väggyta | takavvattning.nu; T3 säger samma sak utan tal |

- Längs lutningen är takfallets bredd större än den projicerade. **Egen räkning:** bredd längs lutningen = projicerad bredd / cos(lutning). 30°: 1 / 0,866 = 1,155, alltså 15,5 % större area. Tillverkarnas sätt ger större area och därmed säkrare svar.
- **Beslut för UX och bygge-agenten:** vilken area räknaren tar. Förslag, ANTAGANDE: tillverkarnas sätt (längs lutningen), eftersom tabellerna i 3.1 är deras och räknaren delar takarean med `src/lib/kalkyl/tak.ts`, som ska räkna takytan längs lutningen för takbytet. Om `tak.ts` ger projicerad eller verklig area: **kontrollera i specen för takbyte** (modulen finns inte ännu 2026-09-28).
- Lindab L1: "Om takets olika sidor har olika storlek är det den största sidan man ska utgå från."

### 2.2 Flödet (bara för förklaring, inte för val)

- **Egen räkning:** Q (l/s) = 0,013 × A (m²). 75 m² → 0,98 l/s; 125 m² → 1,63 l/s; 200 m² → 2,60 l/s. Per minut: × 60 (125 m² → 97,5 l/min).
- Källan till 0,013 är L2, P10, T3. Formeln Q = r × A är standardens princip enligt BMI ("regnvattenflöde"); multiplikationen är vår.
- Anticimex-talet på sajten (150 m², 20 mm, 3 000 l) är volym, inte flöde, och krockar inte.

### 2.3 Rännans dimension

Välj minsta ränna där A_fall ≤ gränsen i tabell 3.1, där A_fall är den area som rinner mot ett stuprör från ett håll.

- Ett stuprör i änden: A_fall = hela takfallets area.
- Stuprör i båda ändar och fall från mitten (P26 över 10 m): A_fall = A / 2. **Egen räkning.**
- P10 och L2 har diagram där stuprörets läge (L1 / (L1 + L2)) ändrar rännans kapacitet. Egen avläsning av diagrammen: rännans högsta area vid x = 1,0 (stuprör i ände) är dubbla vid x = 0,5, alltså A × x ≤ gränsen. Kontroll mot P10:s exempel: 162 × 0,58 = 94 ≤ 125 → ränna 125, som i källan. Mot L2:s exempel: 180 × 0,58 = 104 ≤ ca 110 (L2:s diagram) → R125, som i källan. **Diagramavläsning, ±10 m², används inte som konstant.** Förslag, ANTAGANDE: räknaren frågar inte efter stuprörets läge i första versionen, utan antar stuprör i ände eller symmetriskt enligt 2.5.

### 2.4 Stuprörets dimension

Välj minsta stuprör där arean som går till röret ≤ gränsen i tabell 3.2.

- Ett stuprör per takfall: hela takfallets area.
- Två stuprör: A / 2 per rör. **Egen räkning.**
- T3: symmetriskt tillflöde ger 40–45 % mer i röret. Tabell 3.2 (SS) har egen rad för det. RA Hus-tabellen har ingen sådan rad.

### 2.5 Antal stuprör per takfall

- n = avrunda uppåt(rännlängd / 10 m), minst 1.
- Källa: L1, ordagrant: "Varje stuprör klarar som mest av 10 m hängränna (huslängd)." "Ett stuprör för taklängder som understiger 10 m." "Två stuprör för taklängder som överstiger 10 m." P26: "Huslängd upp till 10 m - 1 stuprör", "Vid längder över 10 meter krävs fall åt båda håll samt två stuprör."
- Kontroll: avståndet mellan stuprör ≤ 20 m (T2, T3 AMA Hus; P10 "max 20 meter mellan rören"). Med n = ceil(L / 10) blir varje rännfall högst 10 m.
- **Källorna säger olika:** P10 och AMA (via T3) tillåter ett stuprör mitt på en 20 m ränna (två rännfall à 10 m). Lindab L1 räknar 10 m ränna per stuprör. Förslag: Lindabs, den strängare.
- Valmat tak: P26 "bör alltid förses med två stuprör per långsida och hängränna med bredden 125 mm". ANTAGANDE om räknaren ska ha ett val för valmat tak: UX-beslut.
- Stuprörens storlek kontrolleras sedan mot 2.4 med A / n.

### 2.6 Fall

- Höjdskillnad (mm) = rännfallets längd (m) × fall (mm/m). **Egen räkning.**
- Rännfallets längd = rännlängd / n om stuprören sitter så att fallen blir lika långa. ANTAGANDE: lika långa fall.
- Visa två tal: minsta fall 2,5 mm/m (P26, L1, L2, T1, P10) och självrensande fall per dimension: 100 mm 7, 125 mm 6, 150 mm 5 mm/m (T1). P26 och P10 ger 5–7 mm/m utan uppdelning.
- Plast: Plastmo säger "vågrätt, eller med ett litet fall mot stupröret (ca. 2 mm/m)". Om räknaren har materialval: visa Plastmos tal för plast. UX-beslut.
- Lindabs garanti gäller inte under 2,5 mm/m (LG). Kan stå i "Gör inte det här".

### 2.7 Antal krokar

- Antal = avrunda uppåt((rännlängd − 2 × 0,1 m) / 0,6 m) + 1. **Egen räkning** ur P26 (c/c 600, första och sista 10 cm från kanten). L1: 600 c/c, ändkrokar 100 mm från takets ände.
- Kontroll mot källorna: 10 m → 18 (P26 "10 m / 0.6 m = 18 krokar"; L1 "10 m/0,6 m + 1 = 18 krokar").
- Vid fall åt båda håll: P26 sätter krokarna 1-1 ca 30 cm från mitten. Påverkar inte antalet mer än en krok. ANTAGANDE: samma formel.
- Plast (Plastmo): ytterkrokar 150 mm från vindskivan, max 600 mm. ANTAGANDE: samma formel räcker, skillnaden är högst en krok.

### 2.8 Materiallista (om räknaren ska ha den)

| Post | Antal | Källa / antagande |
|---|---|---|
| Ränna | avrunda uppåt(rännlängd / rännans längd i butik) | längder: 4 m (Lindab, Hornbach), 2,5 m (Areco, Bauhaus), 2 m (PVC, Bauhaus) |
| Krokar | 2.7 | P26, L1 |
| Rännskarv | antal rännlängder − 1 | ANTAGANDE (Lindab säljer RSK rännskarv, L2 s. 4) |
| Ränngavel | 2 per rännsträcka | ANTAGANDE |
| Omvikningskupa | 1 per stuprör | L2 s. 8, P26 |
| Stuprör | n × (höjd från ränna till mark) | höjden är indata; ANTAGANDE |
| Rörböjar | 2 per stuprör vid takutsprång | PM: "Mellan två rörböjar ska det alltid vara en bit stuprör … (min. 60 mm)". Antalet 2: ANTAGANDE ur figurerna |
| Rörsvep | avrunda uppåt(stuprörslängd / 2 m) + 1 per rör | P26 "Avståndet mellan rörsvepen får vara max 2m"; PM "ca. 2 m"; +1 är ANTAGANDE. Aluminium max 1,5 m (P26) |
| Utkastare eller brunnsutkastare | 1 per stuprör | P26 s. 25 |

- Plannja säljer också rännvinklar och överspolningsskydd. Hörn: inget indata i första versionen, ANTAGANDE.

---

## 3. Konstanter och tabeller

### 3.1 Ränna, högsta takarea per takfall (m²)

| Dimension (mm) | RA Hus 21 (T1) | SS 824031 (T1) | Plannja 2026 (P26) | Plannja 2010 / RA 08 Hus (P10) | Lindab 2022 (L1) |
|---|---|---|---|---|---|
| 100 | 75 | 70 | 75 | 75 | under 50 |
| 125 | 125 | 120 | 125 | 125 | 50–100 |
| 150 | 200 | 180 | 200 | 200 | över 100 |
| 190 | 250 | – | 250 | – | över 100; "190-rännan klarar en takarea på 320 m²" enligt Lindab i T1 |
| R125 rektangulär | – | – | – | 275 | – |
| Plannja Square | – | – | 200 | – | – |

Förslag: RA Hus 21 som räknarens tabell (samma som Plannja 2026, nyast, branschorganisationens källa). Plannja 2010 som äldre jämförelse enligt checklistan. Över 250 m² per takfall: räknaren ger inget svar och hänvisar till tillverkaren (T1: "Vid större takarea än 200 m² är det viktigt att kontrollera i tillverkarnas produktkataloger").

### 3.2 Stuprör, högsta takarea per rör (m²)

| Diameter (mm) | RA Hus (T2) = Plannja 2026 (P26) = RA 08 Hus (P10) | SS 824031 ensidigt (T2) | SS 824031 symmetriskt (T2) |
|---|---|---|---|
| 75 | 80 | 160 | 225 |
| 87/90 | 125 | 240 | 345 |
| 100 | 180 | 350 | 505 |
| 110/111 | 230 | 445 | 645 |
| 120 | 300 | 580 | 830 |
| 150 | 375 | – | – |

- Beteckningarna skiljer: Plannja och RA Hus säger 90 och 110, Lindab 87 och 111 (L2 s. 12). Area: 87 = 5 900 mm², 111 = 9 700 mm², samma som RA 08 Hus för 90 och 111 (P10). ANTAGANDE: 87 och 90 är samma steg, 110 och 111 samma steg.
- Förslag: RA Hus som räknarens tabell (T3: "dimensionerad i överkant", T3: smala rör fryser lättare). SS-talen i "Så räknar jag" som förklaring till varför ett 75-rör ofta räcker längre.
- Plannja 2010 och Lindab 2023 har diagram enligt SS som stämmer med T2:s SS-tal (egen avläsning: Dim 75 ca 160 vid x = 1,0, ca 225–240 vid x = 0,5; Dim 120 580 respektive 820). Används inte som konstant.

### 3.3 Övriga konstanter

| Namn | Värde | Källa |
|---|---|---|
| REGNINTENSITET_L_S_M2 | 0,013 | L2, P10, T3 |
| FALL_MIN_MM_M | 2,5 | P26, L1, L2, T1, P10 |
| FALL_SJALVRENS_MM_M | 100: 7, 125: 6, 150: 5 | T1 |
| FALL_PLAST_MM_M | ca 2 (eller vågrätt) | PM |
| RANNLANGD_PER_STUPROR_M | 10 | L1, P26 |
| MAX_AVSTAND_STUPROR_M | 20 | T2, T3, P10 |
| KROK_CC_M | 0,6 | P26, L1, PM |
| KROK_KANT_M | 0,1 | P26, L1 |
| SVEP_MAX_M | 2 (aluminium 1,5) | P26 |
| RORELSEFOG_M | stål 15, koppar och aluminium 10 | P26 (AMA Hus) |
| PLAST_EXPANSION_M | 18 | PM |

### 3.4 Gränser (förslag, ANTAGANDE, UX-beslut)

- Takarea per takfall: 5–250 m² (250 = största rad i RA Hus 21 och Plannja 2026).
- Rännlängd per takfall: 1–40 m.
- Stuprörets höjd: 1–12 m.
- Lutning om räknaren räknar arean själv: samma gränser som `tak.ts`.

---

## 4. Räkneexempel att testa mot

Alla med RA Hus-tabellerna 3.1 och 3.2, n enligt 2.5, krokar enligt 2.7.

| # | Indata | Förväntat | Grund |
|---|---|---|---|
| 1 | A = 75 m², ränna 10 m | ränna 100, stuprör 75, n = 1, 18 krokar, fall 25 mm (2,5) / 70 mm (7) | 3.1, 3.2, P26 exempel 18 krokar |
| 2 | A = 90 m², ränna 10 m (Plannjas exempel L 10, B 9) | ränna 125, stuprör 90, n = 1 | P26 s. 10: 75–125 m² → 125 och 90 |
| 3 | A = 125 m², ränna 12 m | n = 2, 62,5 m² per rör → stuprör 75; rännfall 6 m med 62,5 m² → ränna 100 (om fall från mitten) | egen räkning; visar att två stuprör krymper rännan |
| 4 | A = 125 m², ränna 12 m, ett stuprör (om räknaren tillåter) | ränna 125, stuprör 90 | 3.1, 3.2 |
| 5 | A = 200 m², ränna 16 m | n = 2, 100 m² per rör → stuprör 90; ränna 125 per fall | egen räkning |
| 6 | A = 162 m², ränna 18 m (P10:s exempel) | tabellen: n = 2, 81 m² per rör → stuprör 90 (80 < 81 ≤ 125); ränna 125. P10:s diagramsvar med ett stuprör: ränna 125, stuprör 75 | visar skillnaden RA-tabell mot SS-diagram; testet låser tabellsvaret |
| 7 | A = 260 m² | inget svar, hänvisning till tillverkaren | 3.4 |
| 8 | Flöde, A = 125 m² | 1,625 l/s | 2.2 |
| 9 | Krokar, ränna 4 m | avrunda uppåt(3,8 / 0,6) + 1 = 7 + 1 = 8 | 2.7 |
| 10 | tolkaQuery med "12,5" som rännlängd | 12,5 | nytt-verktyg steg 1 |

- Exempel 3 och 5 bygger på antagandet i 2.3 (A / 2 per rännfall vid fall från mitten). Om UX väljer att inte dela arean för rännan blir svaret ränna 125 i ex. 3 och 150 i ex. 5.

---

## 5. Materialpriser (om räknaren ska ha dem)

Butik och datum 2026-09-28, inkl. moms. Adresser i faktabladet för hängrännor, avsnitt 4.

| Post | Pris | Egen räkning per meter |
|---|---|---|
| Ränna 125 stål, Lindab 4 m (Hornbach) | 279 kr | 69,75 kr/m |
| Ränna 125 stål, Areco 2,5 m (Bauhaus) | 169 kr | 67,60 kr/m |
| Ränna 100 stål, Areco 4 m (Bauhaus) | 279 kr | 69,75 kr/m |
| Ränna 100 PVC, RIAS 2 m (Bauhaus) | 199 kr | 99,50 kr/m |
| Stuprör 87 stål, Lindab 2,5 m (Hornbach) | 219 kr | 87,60 kr/m |
| Stuprör 90 stål, Areco 2,5 m (Bauhaus) | 239 kr | 95,60 kr/m |
| Rännkrok kompakt 125, Areco (Bauhaus) | 89 kr/st | – |

- Saknas: ränna 150 och 190, stuprör 75 och 100–120, plaststuprör, omvikningskupa, skarv, gavel, svep, utkastare (Hornbach Lindab UTK 87: sidan gav "price 119" men titeln lästes inte; **ej bekräftat**).
- Checklistan för räknaren kräver inga priser (punkt 1: dimension, stuprör, antal, fall). Förslag: räknaren visar antal, inte kronor, i första versionen. Om kronor ska med gäller regel 3 i raknare.md: varje post med minst en namngiven källa och datum, annars tas posten inte med.
- Arbetskostnad: BraByggare 8 000–14 000 kr för normalt villatak (2026-08-25); Bygghantverkarna Jakub och Far AB (sonochfar.se, 2026-04-07) per meter och material, se faktabladet avsnitt 6. Rot: konstanterna importeras från `src/lib/kalkyl/rotavdrag.ts` (raknare.md regel 4). Andel arbete: ingen källa.

---

## 6. Eget antagande, samlat

1. Takarean längs lutningen (tillverkarnas sätt), inte projicerad (2.1).
2. Rännans area delas lika mellan två rännfall när fallet går från mitten (2.3).
3. Stuprörets läge efterfrågas inte; diagrammens läges-faktor används inte (2.3).
4. n = ceil(L / 10), Lindabs strängare regel (2.5).
5. Lika långa rännfall (2.6).
6. 87 = 90 och 111 = 110 som samma steg (3.2).
7. Krokformeln gäller också vid fall åt båda håll och för plast, ± en krok (2.7).
8. Materiallistans poster utan källa i 2.8 (skarv, gavel, rörböjar, +1 svep).
9. Gränserna i 3.4.

---

## 7. Osäkert och saknat

- SS 82 40 31, SS-EN 12056-3 och RA Hus 21 inte lästa i original. Talen kommer från Teknikhandboken (Plåt & Ventföretagen), Lindab, Plannja och BMI.
- SS 82 40 31:s år (1988 enligt checklistan): inte bekräftat i någon läst källa. Skriv året bara om det kontrolleras hos SIS.
- Husbyggarens artikel inte läst (bara sökutdrag).
- Regnintensitet per ort: T3 säger att den varierar (Halland/Bohuslän högst, Östersjökusten lägst), BMI använder en karta med parameter Z. Inga tal per ort hämtade. Räknaren använder 0,013 för hela landet som källorna.
- Lindabs 190-ränna 320 m²: bara via Teknikhandboken.
- Diagramavläsningar i 2.3 och 3.2: ±10 m², används inte.
