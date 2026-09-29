# Faktablad: guider/tak/hangrannor

Ny sida. `/tak/hangrannor/` · `src/content/guider/tak/hangrannor.mdx` · samling guider, `typ: projektguide`, `pelare: tak`, `niva: enkel`, inget produktkort. Huvudfras **hängrännor** (1 300/mån, avsikten 2 880). Sidofraser: takavvattning (880), hängrännor och stuprör (320), hängrännor plast (110), byta hängrännor (90), byta hängrännor kostnad (50), byta hängrännor utan att byta tak (20). Checklista: `docs/briefer/seo-checklista-2026-09-29/tak.md`, avsnittet /tak/hangrannor/. Värdartikel för `/rakna/takavvattning/` (underlaget: `docs/briefer/underlag-kalkyl-takavvattning-2026-09-28.md`).

Allt nedan är hämtat 2026-09-28 om inget annat står. "Egen räkning" är märkt med formel.

---

## 0. Besked till hantverkaren

- **Det finns en nyare tabell än Plannja 2010.** Tre nyare källor har tabellen över takarea och dimension: Plåt & Ventföretagens Teknikhandboken (RA Hus 21, sidan ändrad 2021-11-11), Plannjas monteringsanvisning 2026-2 (januari 2026) och Plannjas FAQ. Plannja 2010 står kvar som äldre jämförelse (checklistan, Fällor).
- **Två sätt att räkna, och de ger olika svar.** RA Hus-tabellen (branschens hjälptabell, tar hänsyn till löv och igenslamning) och SS 82 40 31 (svensk standard, regnintensitet 0,013 l/(s·m²)). För rännan är de nästan lika. För stupröret ger SS ungefär dubbelt så stor takarea per dimension. Teknikhandboken: hjälptabellen för stuprör är "dimensionerad i överkant". Sidans tabell bör vara RA Hus 21, med SS som jämförelse. Inget medelvärde.
- **Tillverkarna säger olika om gränserna.** Lindabs monteringsanvisning (2022-01-12) byter till 125-ränna redan vid 50 m², Plannja och RA Hus vid 75 m². Se 1E.
- **Fallet:** minst 2,5 mm/m (Plannja, Lindab, Teknikhandboken), 5–7 mm/m för självrensning (Plannja, Lindab). Plastmo (plast) säger vågrätt eller ca 2 mm/m. Lindabs garanti gäller inte under 2,5 mm/m.
- **Krock med `/grund/dranera-hus/`:** se avsnitt 8. Den sidan säger att stupröret ska sluta i en ledning, "inte i en utkastare en halvmeter från sockeln". Kommunerna (Ystad, Umeå) ger råd om motsatsen: koppla bort stupröret och led vattnet i en ränndal minst 2 m ut. Båda går att förena, men hängrännesidan får inte säga att utkastare är fel.

---

## 1. Dimension efter takarea

### 1A. RA Hus 21, halvrunda hängrännor (Teknikhandboken, tabell 4:4)

**Källa T1:** Plåt & Ventföretagen, Teknikhandboken, "Hängrännor", https://plat.teknikhandboken.se/handboken/takets-utformning-och-planlosning/takavvattning/hangrannor/ · publicerad 2012-11-30, ändrad 2021-11-11 (sidans metadata). Tabellen hämtad ur sidans HTML.

| Takarea, högst enligt AMA (m²) | 75 | 125 | 200 | 250 |
|---|---|---|---|---|
| Takarea, högst enligt SS 824031 (m²) | 70 | 120 | 180 | – |
| Nominell diameter (mm) | 100 | 125 | 150 | 190 |
| Minsta lutning för självrensning (mm/m) | 7 | 6 | 5 | – |

- Tabellrubrik i källan: "Tabell 4:4. Diameter på hängrännor enligt RA Hus 21. Lindab AB uppger att 190-rännan klarar en takarea på 320 m²."
- T1, ordagrant: "Standardens beräkningsmodell liksom anvisningarna i AMA Hus 21 är baserad på en lutning i hängrännan på 2,5 mm/m."
- T1, ordagrant: "Självrensande innebär inte att fastighetsägaren slipper rensa bort större partiklar, löv och dylikt för hand."
- T1, ordagrant: "Vid större takarea än 200 m² är det viktigt att kontrollera i tillverkarnas produktkataloger om det finns några andra rekommendationer för hur detta kan lösas."

### 1B. Stuprör, RA Hus och SS 82 40 31 (Teknikhandboken, tabell 4:5 och 4:6)

**Källa T2:** Teknikhandboken, "Stuprör", https://plat.teknikhandboken.se/handboken/takets-utformning-och-planlosning/takavvattning/stupror/ · publicerad 2012-11-30, ändrad 2020-11-19.

RA Hus (tabell 4:5):

| Takarea, högst (m²) | 80 | 125 | 180 | 230 | 300 | 375 |
|---|---|---|---|---|---|---|
| Nominell diameter (mm) | 75 | 90 | 100 | 110 | 120 | 150 |

SS 82 40 31, 0,013 l/(s·m²) (tabell 4:6; i källan felskrivet "SS 424031" i tabellrubriken, "SS 82 40 31" i texten ovanför):

| Takarea vid ensidigt tillflöde, högst (m²) | 160 | 240 | 350 | 445 | 580 |
|---|---|---|---|---|---|
| Takarea vid symmetriskt tillflöde, högst (m²) | 225 | 345 | 505 | 645 | 830 |
| Nominell diameter (mm) | 75 | 90 | 100 | 110 | 120 |

- T2, ordagrant: "På motsvarande sätt som för hängrännor finns i RA Hus en hjälptabell för stuprör. Även den är dimensionerad för att vara tillräcklig i de flesta fall."
- T2, ordagrant: "Största avstånd mellan stuprören bör inte överstiga 20 m."

**Källa T3:** Teknikhandboken, "Inledning" (takavvattning), https://plat.teknikhandboken.se/handboken/takets-utformning-och-planlosning/takavvattning/inledning-6/ · publicerad 2012-11-30, ändrad 2021-11-11. Ordagrant:
- "Vid val av hängrännor och stuprör är det den sannolika regnintensiteten som är dimensionerande. Svensk standard (SS 824031) beskriver hur detta beräknas. Beräkningsmodellen är avancerad och för att underlätta valet av dimension finns det en hjälptabell i RA Hus 21."
- "Vid stora takytor i mindre utsatta lägen kan det dock löna sig att göra en noggrannare beräkning då framför allt hjälptabellen för stuprör är dimensionerad i överkant."
- "Enligt SMHI återfinns den största intensiteten i ett band utmed Hallands och Bohusläns östra gräns medan vi har den lägsta intensiteten utmed östersjökusten och i en tunga in över Östergötland fram till Vänern."
- "Av erfarenhet vet man dock att smalare rör lättare fryser sönder varför en viss överdimensionering kan vara att föredra. Vidare är naturligtvis breda rännor lättare att rensa än smala."
- "Silar i rännor och rör bör också undvikas om det inte finns särskilda skäl såsom bollar från lekande barn och liknande. Då är öppna silar i sockelns överkant att föredra."
- "Vid beräkning av takarean bör hänsyn tas till att regnets infallsvinkel inte nödvändigtvis är lodrät. Ett lägre liggande tak mot en fasad ska även avvattna det vatten som vid ogynnsam infallsvinkel också träffar fasaden."
- "Hjälptabellen i RA Hus 21 för hängrännor stämmer tämligen väl överens med den regnintensitet på 0,013 l/sek och m² som SS 824031 rekommenderar som dimensionerande. Detta innebär att hängrännorna bräddar över minst en gång vart 5 år i de lågintensiva områdena och minst en gång vart annat år i de högintensiva områdena."
- "AMA Hus rekommenderar ett högsta inbördes avstånd mellan stuprör på 20 m. Bästa flödet i ett stuprör antas uppstå när tillflödet i hängrännorna är symmetriskt från två håll. Stupröret antas då svälja mellan 40 och 45 % mer än om flödet endast kommer från en sida."

### 1C. Plannja 2026 (nyaste tillverkartabellen)

**Källa P26:** Plannja, "Monteringsanvisning 2026 | Takavvattning, Plannja hängrännor, stuprör och tillbehör", PLANNJA 2026-2 JANUARI, s. 10, https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-montering-takavvattning-2026-2.pdf?sfvrsn=31639255862089770000 (länkad från https://www.plannja.se/konsument/support/ladda-ner/monteringsanvisning). Äldre adresser till 2026-1 och 2025-2 svarar 404.

"Hängrännor Tabell Plannja":

| Takarea i m², högst | 75 | 125 | 200 | 200 | 250 |
|---|---|---|---|---|---|
| Välj hängränna | 100 | 125 | 150 | Square | 190 |

"Stuprör":

| Takarea i m², högst | 80 | 125 | 180 | 230 | 300 |
|---|---|---|---|---|---|
| Välj stuprör | 75 | 90 | 100 | 110 | 120 |

- P26 s. 10, ordagrant: "Mät takets längd och bredd på varje takhalva. Om ytan är mindre än 75 m2 används rännor med bredden 100 mm och rör med diametern 75 eller 90 mm. Om ytan är 75-125 m2 används rännor med breden 125 mm och rör med diametern 90 mm. Till ännu större ytor finns rännor med bredden 150 mm och rör med diametern 100 mm." Exempel i källan: L = 10 m, B = 9 m, A = 90 m².
- Stuprörstabellen är samma som RA Hus 1B.

**Källa P-FAQ:** Plannja FAQ "Vilken dimension på hängränna och stuprör ska jag välja?", https://www.plannja.se/konsument/support/faq/lists/listsprovider2/takavvattning/vilken-dimension-p%C3%A5-h%C3%A4ngr%C3%A4nna-och-stupr%C3%B6r-ska-jag-v%C3%A4lja (odaterad, läst via WebFetch): under 75 m² ränna 100, rör 75; 75–125 m² ränna 125, rör 90; 125–200 m² ränna 150 eller Plannja Square, rör 100, 110 eller 120; upp till 250 m² ränna 190, rör 120.

### 1D. Plannja 2010, ordagrant (märks som äldre)

**Källa P10:** Plannja, "Dimensionering av takavvattningen.", Mars 2010, https://s3-eu-west-1.amazonaws.com/inriver-documents/se-plannja-dimensionering-takavvattning.pdf (en sida, läst i sin helhet).

- Ingress, ordagrant: "Byggreglerna hänvisar till SS-EN 612, men dimensionerna som anges är ofta inte tillräckliga. En rekommendation är dock att inte överstiga en rännfallslängd på 10 meter (max 20 meter mellan rören)."

"Hängrännor, Tabell RA JT/5 i RA 08 Hus":

| Takarea i m² högst | 75 | 125 | 200 | 275 |
|---|---|---|---|---|
| Nominell diameter i mm | 100 | 125 | 150 | R 125 rektangulärt* |
| Ungefärlig vattenförande tvärsnittsarea i mm² | 4100 | 5500 | 8900 | 11000 |

"Tabell Plannja":

| Takarea i m² högst | 75 | 125 | 200 | 275 |
|---|---|---|---|---|
| Nominell diameter i mm | 100 | 125 | 150 | R 125 rektangulärt* |
| Ungefärlig vattenförande tvärsnittsarea i mm² | 4400 | 6100 | 8900 | 11000 |

"*Rektangulära rännor ges en tvärsnittsarea minst motsvarande halvrunda hängrännor vid samma takarea."

"Utvändiga stuprör, Tabell RA JT/6 i RA 08 Hus":

| Takarea i m² högst | 80 | 125 | 180 | 230 | 300 |
|---|---|---|---|---|---|
| Nominell diameter i mm | 75 | 90 | 100 | 111 | 120 |
| Motsvarande ungefärlig area i mm² | 4400 | 5900 | 7800 | 9700 | 11300 |

- Exempel i P10, ordagrant: "L = 18 m, B = 9 m, A = 162 m2. Stuprör placeras exempelvis 10,5 meter från hörnet. L1 / (L1+L2) = 10,5 / 18 = 0,58. Resultat: Använd minst ränna 125 mm och stuprör 75 mm." (Resultatet kommer ur två diagram på samma sida, inte ur tabellerna. Med tabellen skulle 162 m² ge ränna 150 och stuprör 100. Se underlaget 3.3.)
- P10, "Olika inverkan, funktioner och dimensioner", ordagrant:
  - "Hängrännan skall monteras med ett fall av minst 2,5mm/m, men för att få viss självrensning bör lutningen vara 5-7mm/m. Diagrammen är baserade på en sannolik regnintensitet av 0,013l(sm²) för hela landet."
  - "En rännsil kan ibland bli igensatt. Renstratt monterad på stupröret kan vara en bättre lösning."
  - "Stuprör kopplat till markavlopp, utan öppen sil eller dylikt, hålls lättare isfritt."
  - "Klena rör kan vara känsliga för isbildning."
  - "Takutsprångets utformning kan kräva större dimensioner på rännan, t ex vid bandtäckning."
  - "Anpassning mellan stuprör och hängränna bör ske. I de flesta fall bör rännan ”överdimensioneras”."

### 1E. Lindab (tillverkare, två dokument)

**Källa L1:** Lindab, "Lindab Rainline Monteringsanvisningar", daterad 2022-01-12 (på Hornbachs server), https://media.hornbach.se/hb/installationmanual/as.97249219.pdf. Ordagrant: "Om takets area understiger 50 m² ska 100 mm breda hängrännor och stuprör med 75 mm diameter användas. Om takets area är mellan 50 och 100 m² ska 125 mm breda hängrännor och stuprör med 87 mm diameter användas. Om takets area överstiger 100 m² finns det hängrännor som är 150 mm breda och stuprör med diameter 100 mm eller hängrännor på 190 mm och stuprör med diametrarna 111/120 mm. Om takets olika sidor har olika storlek är det den största sidan man ska utgå från."

**Källa L2:** Lindab, "Lindab Rainline Teknisk information, Lindab Takavvattning", ©Lindab Profil AB 2023-12-12, https://www.lindab.se/globalassets/commerce/lindabwebproductsdoc/assets/production/ztgwnmi5zdgtngq3ns00mwqxlwi5otytzgy2mzq0mtq2nzlh/5250066606480905283/roof_drainage_system_technical_se.pdf?v=1702472423, s. 2. Ordagrant:
- "Vid dimensionering enligt SS, fås mindre dimensioner än då man använder de tabeller som finns i RA 08 Hus. Detta förklaras av att man i RA 08 Hus har till viss del tagit hänsyn till rännans benägenhet att slamma igen på grund av löv och löst material från takets ytskikt m m. SS kompenserar detta genom att ange en minsta lutning för självrensning till 5-7 mm/m beroende på dimension."
- "För area mindre än 10 000 m² godtas att sannolik regnintensitet kan sättas till 0,013 l/(sm²) för hela landet, vilket vårt diagram är baserat på."
- "SS förutsätter att hängrännan är förlagd med ett minsta fall av 2,5 mm/m."
- Exempel: "Takarea L = 20 m, B = 9 m Av = 180 m². Ett stuprör placerat 11,6 m från ena gaveln … = 0,58. Resultat: Man kan här välja mellan halvrund ränna R125 eller större. Stupröret enligt det andra diagrammet blir då SROR75."
- Vattenbärande area (L2 s. 4): R100 4 100 mm², R125 5 500, R150 8 900, R190 16 200. Stuprör (s. 12): 75 = 4 400 mm², 87 = 5 900, 100 = 7 800, 111 = 9 700, 120 = 11 300. Rektangulär ränna RTRA 140: 10 000 mm² (s. 23).

### Källorna säger olika

| Takarea (m²) | RA Hus 21 / Plannja 2026, ränna | Lindab 2022, ränna | SS 824031 (T1), ränna | RA Hus / Plannja 2026, stuprör | Lindab 2022, stuprör | SS 824031 (T2, ensidigt), stuprör |
|---|---|---|---|---|---|---|
| 40 | 100 | 100 | 100 | 75 | 75 | 75 |
| 75 | 100 | 125 | 125 | 75 | 87 | 75 |
| 100 | 125 | 125 | 125 | 90 | 87 | 75 |
| 125 | 125 | 150 | 150 | 90 | 100 | 75 |
| 200 | 150 | 150 eller 190 | över 150-gränsen (180); T1 har inget SS-tal för 190 | 110 | 100 eller 111/120 | 90 |

Egen avläsning ur tabellerna ovan, per ett stuprör som tar hela takfallet. Vilken som väger tyngst: RA Hus 21 via Teknikhandboken (branschorganisationens handbok, AMA-anvisningen) och Plannja 2026 säger samma sak och är nyast för rännan. Lindab 2022 är strängare. Tillverkarens anvisning gäller tillverkarens system.

---

## 2. Fall och antal stuprör

| Uppgift | Värde | Källa |
|---|---|---|
| Minsta fall | 2,5 mm/m | P26 s. 14–15, L1, L2, T1, P10 |
| Fall för självrensning | 5–7 mm/m | P26, P10, L2 ("beroende på dimension") |
| Självrensning per dimension | 100 mm: 7 · 125: 6 · 150: 5 mm/m | T1 |
| Plast, Plastmo | "vågrätt, eller med ett litet fall mot stupröret (ca. 2 mm/m)" | PM (avsnitt 3) |
| Lindabs garanti | "Garantin gäller inte om lutningen på rännan är mindre än 2,5 mm/m." | LG (avsnitt 4) |
| Ett stuprör | huslängd upp till 10 m | P26 s. 11; L1 "Varje stuprör klarar som mest av 10 m hängränna (huslängd)." |
| Två stuprör | över 10 m, fall åt båda håll (P26); stuprör "på båda ändarna av taket" (L1) | P26, L1 |
| Rännfallslängd | högst 10 m, max 20 m mellan rören | P10 (2010) |
| Avstånd mellan stuprör | högst 20 m | T2, T3 (AMA Hus) |
| Valmat tak | "bör alltid förses med två stuprör per långsida och hängränna med bredden 125 mm" | P26 s. 11 |
| Rörelsefog | "Vid längder över 15 meter (stål) samt 10 meter (koppar och aluminium) där rännans temperaturrörelser ej kan upptas tillräckligt kan rörelsefog behöva utföras enligt AMA Hus." | P26 s. 11 |
| Plast, expansion | ränna över 18 m: expansionstappstycke vid alla stuprör; mer än 18 m mellan stuprören: expansionsstycke | PM s. 5 |

- **Egen räkning, fallets höjdskillnad:** höjdskillnad (mm) = rännfallets längd (m) × fall (mm/m). 10 m × 2,5 = 25 mm; 10 m × 5 = 50 mm; 10 m × 7 = 70 mm.
- P26 s. 11 om placeringen, ordagrant: "Vid längder över 10 meter krävs fall åt båda håll samt två stuprör. … Krokarna nr 1-1 skall monteras ca 30 cm från mitten och de sista krokarna ca 10 cm från takets kant."

---

## 3. Krokar

| Uppgift | Värde | Källa |
|---|---|---|
| Krokavstånd | 600 mm c/c | P26 s. 11 (figur "100 600 600 600 600 mm"); L1 "Krokar ska monteras med cc 600 mm"; PM "max 600 mm:s avstånd" |
| Första och sista kroken | 10 cm från takets kant (P26); 100 mm från takets ände (L1); plast 150 mm från vindskivan eller ca 250 mm från hörnet (PM) | |
| Antal krokar, tillverkarnas exempel | "10 m / 0.6 m = 18 krokar" (P26); "10 m/0,6 m + 1 = 18 krokar" (L1) | |
| Plast, avstånd ränngavel–vindskiva | ca 25 mm, 5 mm om rännan monteras en varm dag | PM |
| Plast, skarv till närmaste krok | minst 90 mm (plast), 20 mm (metall) | PM |

- **Egen räkning, antal krokar:** avrunda uppåt((rännlängd − 0,2 m) / 0,6 m) + 1. 10 m: (9,8 / 0,6 = 16,3 → 17) + 1 = **18**, samma som Plannja och Lindab.

### Krokar under pannan eller i takfotsbrädan (Faq)

P26 s. 13, "Rännkrokar, modellöversikt", ordagrant:
- "A Krokar för bockning. Bockas efter taklutning, skruvas på undertak eller läkt."
- "B Korta krokar. Krokar som skruvas i befintlig takfotsbräda, krok 27° är anpassad för takfotsbräda med lutning 27°."
- "C Krok med överliggare. För extra stora snölaster."
- "Ställbar krok. Mellan 0-45° för takfotsbrädor med varierande lutning."
- s. 14: "Bockade krokar kan monteras antingen på nedersta bärläkten eller på ett underlagstak." "Krokarna monteras så att rännan får frigång från ev. snöras."
- s. 15 (korta krokar): "Spänn ett snöre mellan hög och låg krok och montera sedan krokarna direkt till takfotsbrädan med rännkroksskruv."

### Byta utan att byta tak (Faq)

- Korta krokar skruvas i **befintlig** takfotsbräda (P26, ovan). Ingen panna behöver lyftas enligt anvisningen; det står inte uttryckligen, **egen läsning**.
- Plastmo (PM s. 2), ordagrant: "Montera ner den gamla hängrännan. Justera rännkrokarna." Plastmo säljer "Täckbygel för äldre krok" och "Rännhållare för äldre krok" som trycks på runt den gamla kroken. Alltså: gamla långa krokar under pannan kan sitta kvar.
- Ingen källa hittad som säger när gamla krokar är för dåliga för att återanvändas. **Saknas.**

**Källa PM:** Plastmo, "Monteringsanvisning för hängrännor", https://www.plastmo.se/Files/Billeder/items/guides/se-montering-hangrannor.pdf (länkad från https://www.plastmo.se/montering/anvisning). Odaterad.

---

## 4. Material: stål, aluminium, plast

| Material | Garanti enligt tillverkaren | Pris ränna per meter (egen räkning) | Pris stuprör per meter (egen räkning) | Källa |
|---|---|---|---|---|
| Lackerat stål (Lindab, GreenCoat RWS) | färg 15 år, genomrostning 20 år (korrosivitetsklass C1–C3); 10 och 10 år i C4 | Lindab 125, 4 m, 279 kr (Hornbach) = **69,75 kr/m**; Areco 125 stål, 2,5 m, 169 kr (Bauhaus) = **67,60 kr/m** | Lindab 87, 2,5 m, 219 kr (Hornbach) = **87,60 kr/m**; Areco 90 stål, 2,5 m, 239 kr (Bauhaus) = **95,60 kr/m** | LG, butiker nedan |
| Pulverlackerat stål (Lindab) | 5 år färg, 5 år genomrostning | – | – | LG |
| Aluminium | Lindab har en egen garanti för aluminium (Garanti_aluminium_20240101.pdf), **inte läst** | inte hämtat | inte hämtat | |
| Plast (PVC), Plastmo | "35 år garanti" på "produktions- och materialfel som orsakar läckage" | RIAS 100 mm PVC vit, 2 m, 199 kr (Bauhaus) = **99,50 kr/m** | inte hämtat | plastmo.se/hangrannor/plast (WebFetch) |

- **Garanti är inte livslängd.** Ingen tillverkare anger en livslängd i år i de dokument som är lästa. Lindabs inspirationsbroschyr (© 2023) säger bara "år efter år utan att vare sig rosta eller läcka". Söksvaret "15 års garanti, 40 år livslängd" för Lindab gick inte att hitta i någon läst Lindab-källa; **används inte**.
- Konkurrenternas livslängd, som jämförelse och inte som källa: BraByggare 20–40 år ("Plast har kortast livslängd, koppar längst"); dinbyggare 25–40, bäst 50 år. Ingen av dem har källa.
- Lindab, ordagrant (L2 s. 3): "All färgad takvattning från Lindab är belagda med ett zinkskikt på 275 g/m²."
- Plastmo om CO2 och material (WebFetch, inte ordagrant kontrollerat): "100% återvinningsbar blyfri hård PVC".
- Plastmo PM, ordagrant: "Hängrännor i zink och stål plus är ej lämpliga i kombination med underlagspapp utan yttre taktäckning (takpannor/takpapp etc)."
- **Källa LG:** Lindab, "Garanti färgbelagd stålplåt", 2026-01-15, https://itsolution.lindab.com/lindabwebproductsdoc/assets/production/ZTU0MTMwOTctYWRlNS00NWQyLTg5ZDItOThiOGVlZmYwOTA3/5250942518737348772/Garanti_fargbelagd_stalplat_20260115.pdf (länkad från https://www.lindab.se/service-och-support/byggkomponenter/dokumentation/garantier-byggkomponenter/). Tabell 1 är utläst ur pdf-texten, där kolumnerna flyter ihop: raden "GreenCoat RWS … Takavvattning, Fasadkassetter 15 år 10 år 20 år 10 år". Kontrollera mot pdf-bilden innan talet sätts.
- Plannja: garanti för takavvattning **inte hittad** (produktsidan saknar den).

### Priser, butik och datum (2026-09-28, inkl. moms)

| Produkt | Butik | Pris | Adress |
|---|---|---|---|
| Hängränna LINDAB svart 125x4000 mm, metall | Hornbach | 279 kr | https://www.hornbach.se/p/hangranna-lindab-svart-125x4000mm/5099499/ |
| Hängränna ARECO 125 mm 2,5 m vit, stål | Bauhaus | 169 kr | https://www.bauhaus.se/hangranna-areco-125mm-2-5-m-vit |
| Hängränna ARECO Ø125 mm silver 2,5 m, stål | Bauhaus | 189 kr | https://www.bauhaus.se/hangranna-areco-o125mm-silver-2-5m |
| Hängränna ARECO 100 mm 4,0 m vit | Bauhaus | 279 kr | https://www.bauhaus.se/hangranna-areco-100mm-4-0-m-vit |
| Hängränna 100 mm vit 2 m, PVC (RIAS) | Bauhaus | 199 kr | https://www.bauhaus.se/hangranna-100-mm-vit-2-m |
| Stuprör LINDAB svart 87x2500 mm, metall | Hornbach | 219 kr | https://www.hornbach.se/p/stupror-lindab-svart-87x2500mm/5099494/ |
| Stuprör ARECO 90 mm 2,5 m svart, stål | Bauhaus | 239 kr | https://www.bauhaus.se/stupror-areco-90mm-2-5-meter-svart |
| Rännkrok kompakt ARECO Ø125 mm silver, stål | Bauhaus | 89 kr | https://www.bauhaus.se/rannkrok-kompakt-areco-o125mm-silver-metallic |

- **Kontroll 2026-09-29:** Hängränna ARECO 125 mm 2,5 m vit, Bauhaus art.nr 1513049, 169 kr, material stål (sidans kod: "SKU":"1513049", "Price":"169.00", "Material: Stål"), https://www.bauhaus.se/hangranna-areco-125mm-2-5-m-vit. Priset står fast. Arecos fotplåt 2 000 mm (art.nr 1244739) kostar också 169 kr; se `guider-takfot.md`. Samma belopp, två olika varor.
- Bauhaus-priserna och materialet är lästa ur sidans kod (`"Price"`, "Material: Stål"/"Material: PVC"). WebFetch angav felaktigt Areco som PVC; koden säger stål. Hornbach via WebFetch.
- Plaststuprör: inget pris hämtat. Biltema svarade 403. **Saknas.**
- Byggmax och Beijer: sidorna renderas med skript, inget pris gick att läsa.
- Checklistan kräver pris per meter för ränna och stuprör i stål och plast från två butiker: **stål uppfyllt (Hornbach, Bauhaus), plast bara en butik för rännan och ingen för stupröret.**

---

## 5. Byta rännor och stuprör: ordningen

Ur P26 (sidnummer i anvisningen):
1. Mät takarean per takhalva, välj dimension (s. 10).
2. Räkna fall och krokar, numrera krokarna (s. 11).
3. Krokar: första och sista för fallet, snöre mellan dem, resten c/c 600 (s. 14–15).
4. Omvikningskupa: märk ut och såga hålet i rännan (s. 16 ff., inte läst i detalj).
5. Ränna i krokarna, skarvar, ränngavlar.
6. Stuprör: svep 10 cm under den nedre rörvinkeln; "Avståndet mellan rörsvepen får vara max 2m. Vid långa längder (>1st stuprör) samt vid risk för isbildning krävs tätare infästning." Aluminium: "max 1500 mm mellan rörsvepen" (s. 23–24).
7. "Utkastare monteras när stupröret ej är anslutet till dagvattenledning." "Brunnsutkastare monteras mellan stuprör och dagvattenledning." (s. 25)

- Plastmo PM om stupröret: "Mellan två rörböjar ska det alltid vara en bit stuprör vars längd bestäms av takutsprånget (min. 60 mm)." Rörhållare "Monteras med ett avstånd på ca. 2 m." "Finns ej markavlopp används en utkastare."
- Plannja P26 om verktyg, ordagrant: "Tänk på att aldrig använda vinkelslip/rondell eftersom värme och gnistor förstör plåtens ytskikt." Plastmo samma för plåt.
- T1: "Det urklippta hålet i hängrännan har minst samma diameter som röret" (via WebFetch, inte ordagrant kontrollerat).

### Stege eller ställning

- Sonochfar (Bygghantverkarna Jakub och Far AB, 2026-04-07, se 6): "Tvåplanshus kostar mer per meter eftersom det krävs ställning. Ställningskostnaden ligger på 3 000–8 000 kr." (WebFetch)
- Regel för när en privatperson måste ha ställning: **ingen källa läst.** Arbetsmiljöverkets regler gäller yrkesmässigt arbete; ingen föreskrift för privatpersoner hittad. Skriv inte ett krav utan källa.

---

## 6. Vad det kostar

| Uppgift | Tal | Källa |
|---|---|---|
| Byte, normalstort villatak, installerat | 8 000–14 000 kr | BraByggare (offertförmedlare), https://www.brabyggare.se/info/byta-stupror-hangrannor-kostnad/, 2026-08-25, ingen författare |
| Tillägg vid omfattande rivning | +2 000–5 000 kr | BraByggare, samma |
| Skillnad mellan firmor | 30–50 % | BraByggare, samma |
| Per meter inkl. montage, före rot | plast 250–400, galvaniserad 350–550, aluzink 400–600, lackerad 450–650, koppar 700–900 kr | Bygghantverkarna Jakub och Far AB (sonochfar.se), https://sonochfar.se/blog/byta-takranna-pris-per-meter/, 2026-04-07 |
| Enplansvilla 35–40 m | 12 000–20 000 kr före rot | samma |
| Tvåplansvilla 40–50 m | 16 000–30 000 kr före rot | samma |
| Ställning | 3 000–8 000 kr | samma |

- **Fel hos Sonochfar:** kolumnen "efter ROT" är exakt 70 % av hela priset (250 → 175, 12 000 → 8 400), alltså rot räknat på material också. Skatteverket: material ger inte avdrag. Använd bara "före rot"-kolumnen. Egen kontroll.
- Totalbyggarna och Sonochfar räknas som samma firma (raknare.md regel 3). Namnet på sidan är "Golonka Renovering" i sökresultatets titel, "Bygghantverkarna Jakub och Far AB" enligt WebFetch; **ägarskapet inte kontrollerat**.
- Andel arbete i priset: **ingen källa**. Rot kan därför inte räknas i kronor utan antagande. Hantverkaren skriver regeln, inte beloppet (tak.md gemensam punkt 4: rot räknas i räknaren, inte i texten).
- **Egen räkning, bara material för 10 m takfot, 125-ränna i stål, ett stuprör 87 mm, 3 m ner:** 3 rännor à 4 m (Lindab, 279) = 837 kr; stuprör 87: 2 × 2,5 m (219) = 438 kr; 18 krokar (Areco kompakt, 89) = 1 602 kr; summa **2 877 kr** utan kupa, gavlar, skarv, rörböjar, svep och utkastare. Krokarna är ett annat fabrikat än rännan; om Areco-kroken passar Lindabs ränna är **inte kontrollerat**. Visar bara att krokarna är en stor del av materialet.

### Rotavdraget

- Skatteverket, "Ger arbetet rätt till rotavdrag?", https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html (läst via WebFetch; datum saknas i utdraget). Småhus, ger rätt, ordagrant:
  - Bygg: "byta och reparera fasader, hängrännor och takpannor"
  - Bygg: "montera och montera ner byggnadsställningar i samband med rotarbete"
  - Glas och plåt: "reparera, rengöra eller byta ut plåttak, hängrännor och stuprör"
- Ger inte rätt: material; "material som hyrs eller leasas ger inte rätt till rotavdrag" (söksvar från Skatteverket, utdrag). **Alltså: uppsättning och nedtagning av ställning ger avdrag, hyran av ställningen gör det inte.** Hyran-meningen är utdrag, inte läst på sidan.
- Nivå: 30 procent av arbetet, högst 50 000 kr per person och år, 75 000 kr gemensamt med rut (Skatteverket, "Så fungerar rotavdraget", https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html; samma källa som snörasskyddets faktablad). Skatteverket byter reglerna i december; kontrollera före publicering.
- Rensning av hängrännor: raden "reparera, rengöra eller byta ut … hängrännor" gäller plåtarbete. Om rensning ensamt ger rot: raden säger "rengöra"; **egen läsning, inte kontrollerad mot rättslig vägledning.**

---

## 7. Rensa och underhålla

- Plastmo PM, ordagrant: "En god idé är att, minst en gång om året, rensa hängrännorna från löv så att hela rännornas kapacitet utnyttjas."
- T1: "Självrensande innebär inte att fastighetsägaren slipper rensa bort större partiklar, löv och dylikt för hand."
- T3: silar undviks om det inte finns särskilda skäl; "öppna silar i sockelns överkant att föredra".
- P10: "En rännsil kan ibland bli igensatt. Renstratt monterad på stupröret kan vara en bättre lösning."
- Lindab säljer självrensande lövsil (SLS) och lövsil (RT) vars stos "passar i standard markavloppsrör (110 mm)" (L2 s. 20).

### Is och snö (Faq)

- BFS 2024:8 7 kap. 4 § (se 8): "Vid utformning av avledning ska särskild hänsyn tas till risker orsakade av frysning."
- P10: "Stuprör kopplat till markavlopp, utan öppen sil eller dylikt, hålls lättare isfritt." "Klena rör kan vara känsliga för isbildning."
- T3: "smalare rör lättare fryser sönder varför en viss överdimensionering kan vara att föredra."
- P26: "Krokarna monteras så att rännan får frigång från ev. snöras." Krok med överliggare "För extra stora snölaster." Tätare rörsvep "vid risk för isbildning".
- Värmekabel i ränna: **ingen källa läst.** Skriv inte om det.
- Koppling till `/tak/snorasskydd/`: snörasskyddets faktablad har inga tal om rännor. Länken bär frågan, inte ett tal.

---

## 8. Dagvatten och utkastare, och krocken med dräneringssidorna

### Regeln

- **BFS 2024:8** (Boverkets byggregler, föreskrifter), 7 kap. 4 §, ordagrant: "Byggnader ska vara utformade så att regnvatten och smältvatten leds bort från byggnaderna i tillräcklig omfattning. Vid utformning av avledning ska särskild hänsyn tas till risker orsakade av frysning." Källa: https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf, läst 2026-09-28. Tillämpning (1 kap. 2 §): 2–11 kap. gäller nya byggnader; vid ändring gäller 12–13 kap. för den ändrade delen, med anpassning.
- Kommunens VA-regler (ABVA): varje kommun beslutar sina egna. Sajten har redan Kristinehamns ABVA i `/grund/dranera-hus/` (dränering får inte kopplas till spillvattnet). Om **takvattnet** får kopplas till kommunens dagvattenledning: ingen enskild kommuns ABVA läst för detta. Checklistan: "En källa räcker, annars nämns det inte." Kommunernas råd nedan är råd, inte ABVA.

### Kommunernas råd om att koppla bort stupröret

- **Ystads kommun**, "Ränndal och koppla bort stuprör", https://ystad.se/bygga-och-bo/vatten-och-avlopp/gor-plats-for-vattnet/ranndal-och-koppla-bort-stupror, uppdaterad 2026-04-21 (WebFetch): ränndal minst 2 m, lutning 2–3 cm per meter, "om du har källare behöver den vara mist 3 meter"; höj ytan vid stupröret ca 5 cm om marken inte lutar; "Det är viktigt att du proppar ledningen som går ner i marken".
- **Umeå kommun**, "Ränndal", https://www.umea.se/byggaboochmiljo/vattenochavlopp/dagvattenochskyfall/hurkanjagsomfastighetsagarehanteradagvatteninomfastigheten/ranndal.4.7d6aaaf718b5a33d8de8a95.html, uppdaterad 2025-07-11 (WebFetch): högst 5 cm mellan utkastare och ränndal; ränndal 2–3 m från husgrunden; lutning ca 5 cm per meter; makadam eller sten i änden.
- **Källorna säger olika om lutningen:** Ystad 2–3 cm/m, Umeå ca 5 cm/m. Båda är kommunala råd. `/grund/dranera-hus/` använder 1:20 (5 cm/m) för marken inom 3 m (Rockwool, Paroc), vilket stämmer med Umeå.
- Om det krävs anmälan till kommunen för att koppla bort stupröret: ingen av de två sidorna säger det. **Saknas.**
- Plannja P26: utkastare "när stupröret ej är anslutet till dagvattenledning".

### Krock med befintliga sidor (kontrollerat 2026-09-28)

- `/grund/dranera-hus/` (`src/content/guider/grund/dranera-hus.mdx`, rad 103, H2 "Två saker ska vara gjorda innan grävmaskinen kommer"): "Sedan stuprören. De ska sluta i en ledning som för vattnet bort från huset, inte i en utkastare en halvmeter från sockeln." **Delvis krock.** Kommunerna ovan rekommenderar utkastare med ränndal 2–3 m. Förenlig läsning: utkastare är rätt om vattnet leds 2–3 m ut; fel är en utkastare som släpper vattnet vid sockeln. Hängrännesidan bör säga det med kommunen som källa. Om `/grund/dranera-hus/` ska justeras är hantverkarens och koordinatorns beslut; sidan är inte ändrad.
- `/fukt/fukt-i-kallaren/` (rad 114, 155, 182) och `/rakna/dranering/` (`src/lib/kalkyl/dranering.ts` rad 659, `src/pages/rakna/dranering.astro` rad 358, 652): "Stuprören ska leda vattnet bort från huset" och Anticimex 150 kvm, 20 mm, 3 000 liter. **Ingen krock.** Samma tal går att räkna med 0,013 l/(s·m²): 150 m² × 0,013 = 1,95 l/s (egen räkning). Granskningen 2026-09-19 sa att talen får stå på flera sidor men inte orden och ordningen (`docs/briefer/granskning-omgang-altan-grund-2026-09-19.md` rad 130). Hängrännesidan bör inte upprepa Anticimex-meningen i samma form.
- `/rakna/kallare/` har samma Anticimex-rad. Ingen krock.
- Checklistan säger att inlänken ska komma från `/grund/dranera-hus/` "i avsnittet om dagvatten och stuprör om ett sådant finns". **Det finns:** stuprörsstycket står i H2 "Två saker ska vara gjorda innan grävmaskinen kommer" (rad 89–105), och kommunfrågan i H2 "Vart vattnet får ta vägen bestämmer kommunen" (rad 206). `/fukt/fukt-i-kallaren/` har stycket på rad 114 som alternativ.
- Adressen är `/grund/dranera-hus/`, inte `/fukt/dranera-hus/` som beställningen skrev.

---

## 9. Interna länkar (kontrollerat i `src/` 2026-09-28)

| Länk | Finns | Anmärkning |
|---|---|---|
| `/rakna/takavvattning/` (`<Kalkylator namn="takavvattning" />` efter dimensionstabellen) | nej | byggs i samma omgång |
| `/tak/plattak/` | nej | |
| `/tak/snorasskydd/` | fil finns (`src/content/kunskap/tak/snorasskydd.mdx`), inte committad | har en kommentar som väntar på `/tak/hangrannor/` (rad 96) |
| `/grund/dranera-hus/` | ja | ankaret om vattnet vid grunden |
| `/fukt/fukt-i-kallaren/` | ja | reserv för inlänken |
| `/rakna/rotavdrag/` | ja | inte krav i checklistan |

Inga produktslugar. Inget reklamband (tak.md gemensam punkt 3).

---

## 10. Sökanalys ("hängrännor och stuprör", topp 5 enligt SOKORDSANALYS 8.2)

Ordningen är inte kontrollerad i google.se. Lästa via WebFetch 2026-09-28.

1. **hornbach.se** (butik): inte läst, kategorisida.
2. **byggahus.se** (forum): inte läst.
3. **dinbyggare.se/hangrannor-och-stupror-tips-innan-du-koper/** (2015-08-03, uppdaterad 2023-10-24): 125 för normalhus, 100 för små tak, stuprör 80–90 mm; krok var 60 cm; livslängd 25–40, bäst 50 år. Saknar takarea per dimension, fall, priser, källor.
4. **brabyggare.se/info/byta-stupror-hangrannor-kostnad/** (2026-08-25, ingen författare, förmedlare): 8 000–14 000 kr, rot 30 % och 50 000 kr, livslängd 20–40 år. Saknar pris per meter, dimensionering, fall, krokavstånd, källor för talen.
5. **dinbyggare.se/hangrannor-och-stupror-av-plat/**: inte läst i detalj.

Utanför topp 5, lästa: sonochfar.se (2026-04-07) pris per meter per material, men "efter ROT" räknat på hela priset (fel). Teknikhandboken och Plannja 2026 har tabellerna men rankar inte på frasen enligt 8.2.

Kvar hos läsaren: vilken dimension mitt tak behöver, hur mycket fall och var stupröret ska sitta, om jag kan byta utan att röra pannorna, plast eller stål i kronor, vart vattnet ska ta vägen.

**Det vår sida kan ha som ettan saknar:** dimensionstabell efter takarea med källa och år (RA Hus 21, Plannja 2026, Plannja 2010 märkt äldre); att RA Hus och SS ger olika stuprör; fallet 2,5 och 5–7 mm/m med källa, och Lindabs garantivillkor; 10 m per stuprör och 20 m mellan rör; krokavstånd 600 mm och antal krokar; korta krokar i befintlig takfotsbräda som svaret på "utan att byta tak"; butikspris per meter med datum; Skatteverkets rader om hängrännor och ställning; kommunernas ränndalsråd med mått.

---

## 11. Proffsmagasinet (för affiliateagenten, inga slugs)

- Plåtsaxar: 56 produkter, 129–525 kr (kategorisidan https://www.proffsmagasinet.se/maskiner-verktyg/handverktyg/saxar/platsaxar, 2026-09-28, WebFetch). Exempel: PELA 510974 Plåtsax 210 mm 525 kr (från 618 kr); Bessey Pro D216280BLSBSK 523 kr. Under gränsen 1 500 kr i SOKORDSANALYS 8.6.
- Krokbockare (rännkroksbockare): inte hittad hos Proffsmagasinet.
- Takmaterial och takstegar ligger utanför AFFILIATE.md enligt 8.6. Inget förslag.

---

## 12. Osäkert och saknat

- Ordningen i topp 5 i google.se: inte kontrollerad. Hornbach och Byggahus inte lästa.
- RA Hus 21 och SS 82 40 31 är inte lästa i original (betalda). Talen kommer från Teknikhandboken, som är branschorganisationens sammanställning.
- SS-EN 12056-3: standarden inte läst. Enligt T1 och BMI (takavvattning.nu) används den tillsammans med SS 82 40 31. Mer i underlaget avsnitt 1.
- Lindabs garanti för takavvattning: tabellen är tolkad ur pdf-text med ihopflutna kolumner.
- Garanti eller livslängd för Plannjas takavvattning: inte hittad. Lindab aluminium: inte läst.
- Plaststuprör: inget pris. Plastränna: bara Bauhaus.
- Andelen arbete i ett rännbyte: ingen källa.
- Om rot för ställningshyra: utdrag, inte läst på Skatteverkets sida.
- Om ett nytt rännsystem kräver anmälan eller lov: inget hittat som säger det; inte sökt i PBL. Skriv inte om lov.
- Om takvattnet får kopplas till dagvattenledningen enligt en kommuns ABVA: inte läst.
- Värmekabel, snöfångare i rännan: inga källor.
- När gamla krokar är för dåliga för att återanvändas: ingen källa.
