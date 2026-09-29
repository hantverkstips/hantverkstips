# Faktablad och räknarunderlag: rakna/takbyte

Ny räknare. `/rakna/takbyte/` · `src/pages/rakna/takbyte.astro` · formelmodul `src/lib/kalkyl/tak.ts` (checklistan: geometrin delas med `/rakna/takavvattning/`). Huvudfras **byta tak kostnad** (880/mån). Sidofraser: takbyte (480), takbyte kostnad (320), takbyte kostnad per kvm (20), takbyte kvm pris (20), beräkna takarea (10), takvinkel (210). Värdartikel `/tak/plattak/` (faktablad `kunskap-plattak.md`). Checklista: `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnittet /rakna/takbyte/, med källkraven i regel 3 så som de ändrades 2026-09-29.

**Filnamnet.** Koordinatorn beställde den här adressen. Checklistan kallar underlaget `docs/briefer/underlag-kalkyl-takbyte-[datum].md`. Innehållet följer räknarunderlagets form (formler, konstanter, gränser, räkneexempel, antaganden). UX och bygge-agenten avgör om filen ska kopieras eller döpas om.

Allt nedan är hämtat 2026-09-28 om inget annat står. Priserna är lästa med curl och text-extraktion, citat ordagrant.

---

## 0. Vad som går att bygga, och vad som stoppar

- **Geometrin går att bygga helt.** Den är plan trigonometri och behöver ingen extern källa. Varje formel är märkt egen räkning, med räkneexempel att testa mot (avsnitt 2 och 7).
- **Priserna finns för alla sex material**, med minst en namngiven källa som går att läsa och datum. Ingen av källorna är myndighet eller bransch. Alla är offertförmedlare eller takfirmor. Det uppfyller regel 3 i sin nya lydelse (minst en namngiven källa, förmedlare tillåtna och namngivna som förmedlare).
- **Källorna är inte oberoende av varandra.** Hantverkskollens tabell per takmaterial är siffra för siffra Beckmans Byggs. Husexperters tabell är siffra för siffra Takexperters. De räknas som en källa var (regel 3: "Firmor med samma ägare räknas som en källa". Här är det samma tal, inte känd samma ägare. Behandlas ändå som en källa, eftersom talen inte är oberoende).
- **Beckmans tabell är efter rotavdrag, Hantverkskollen kallar samma tal före rotavdrag.** Beckmans egen kolumnrubrik säger "Total kostnad (efter ROT)", och Beckmans räkneexempel (1 758 kr/m² före rot, 1 446 kr/m² efter) passar bara om spannet är efter rot. Beckmans tal är originalet. Se 4.2.
- **Andelen arbete** finns med kronor för arbete och material i fyra källor (Takexperter, Beckmans, Hantverkskollen, Totalbyggarna). Den skiljer sig mycket beroende på om ställning och container räknas som material eller för sig. Se 4.3.
- **Snölast räknas inte** i första versionen (checklistans fälla). Snölastkartan finns i `kunskap-snorasskydd.md` avsnitt 3 om den behövs senare.
- **Valmtak** går att räkna med samma formel om alla fyra takfall har samma lutning (2.4). Beslutet är UX och bygge-agentens.

---

## 1. Fält, standardvärden och gränser (förslag till specen, allt ANTAGANDE)

| Fält | Enhet | Förslag standard | Förslag gräns | Grund |
|---|---|---|---|---|
| Längd L (gavel till gavel, längs takfoten) | m | 12 | 3–40 | ANTAGANDE, villa |
| Bredd B (gavelns bredd, fasadliv till fasadliv) | m | 9 | 3–20 | ANTAGANDE |
| Takfotsutsprång u_f (vågrätt, från fasadliv) | m | 0,5 | 0–1,5 | ANTAGANDE |
| Gavelutsprång u_g (vågrätt, per gavel) | m | 0,4 | 0–1,5 | ANTAGANDE |
| Takform | – | sadel | sadel, pulpet (valm om beslut) | checklistan |
| Lutning v, eller nockhöjd t | grader / m | 27° | sadel 5–60°, pulpet 3–30° | samma gränser som `VINKELGRANSER` i `src/lib/kalkyl/fasadyta.ts` (där märkta Antagande) |
| Material | – | betongpannor | sex val (avsnitt 4) | checklistan |
| Centrumavstånd takstolar | mm | 1 200 | 600, 900, 1 200 | TräGuiden (avsnitt 3) |
| Antal ägare | st | 1 | 1–4 | som `/rakna/rotavdrag/` |
| Utnyttjat rot och rut i år | kr | 0 | som `/rakna/rotavdrag/` | som `/rakna/rotavdrag/` |

- Standardvärdet 27° är samma som `STANDARD.vinkelGrader` i `fasadyta.ts`. Om samma standardhus används i båda räknarna blir talen jämförbara.
- Takstolsfabriken (se `kunskap-takstolar.md` avsnitt 2) mäter spännvidden som "mått utsida vägg" (XL-Bygg: "Spännvidd avser mått utsida vägg"). Bredden B ska alltså mätas utvändigt. Samma mått som fasadräknaren.

---

## 2. Geometrin (egen räkning, plan trigonometri)

Beteckningar: L längd längs takfoten, B gavelns bredd, u_f takfotsutsprång vågrätt, u_g gavelutsprång vågrätt per gavel, v takvinkel i grader, t nockhöjd över takfoten vid fasadlivet.

### 2.1 Sadeltak

- Vågrät projektion av hela taket: P = (L + 2·u_g) · (B + 2·u_f)
- **Takarea: A = P / cos v**
- Takfallslängd (snett, från takfotens ytterkant till nocken): s = (B/2 + u_f) / cos v
- Nockhöjd över takfotens nivå vid fasadlivet: t = (B/2) · tan v
- Vinkel ur nockhöjd: v = arctan(2t / B)
- Samma nock- och vinkelformler som `nockUrVinkel` och `vinkelUrNock` i `fasadyta.ts` (rad 1466–1474), som räknar gavelspetsarna.

### 2.2 Pulpettak

- A = (L + 2·u_g) · (B + 2·u_f) / cos v, där u_f gäller både den låga och den höga sidan (ANTAGANDE: samma utsprång båda sidor).
- Takfallslängd s = (B + 2·u_f) / cos v
- Höjdskillnad mellan låg och hög vägg: t = B · tan v; vinkel ur höjd v = arctan(t / B). Samma som `fasadyta.ts`.

### 2.3 Påslaget för lutningen (1/cos v), egen räkning

| Lutning | 1/cos v | Takytan är större än bottenytan med | tan v (nockhöjd per meter halv bredd) |
|---|---|---|---|
| 6° | 1,0055 | 0,6 % | 0,1051 |
| 10° | 1,0154 | 1,5 % | 0,1763 |
| 14° | 1,0306 | 3,1 % | 0,2493 |
| 18° | 1,0515 | 5,1 % | 0,3249 |
| 22° | 1,0785 | 7,9 % | 0,4040 |
| 27° | 1,1223 | 12,2 % | 0,5095 |
| 30° | 1,1547 | 15,5 % | 0,5774 |
| 34° | 1,2062 | 20,6 % | 0,6745 |
| 38° | 1,2690 | 26,9 % | 0,7813 |
| 45° | 1,4142 | 41,4 % | 1,0000 |

Räknat med node 2026-09-28. Tabellen kan stå på sidan som den är (checklistan H2 1: "en tabell över lutningen och påslaget på bottenytan").

### 2.4 Valmtak (beslut för UX och bygge-agenten)

- Om alla takfall har samma lutning v är varje takfalls yta dess vågräta projektion delad med cos v. Summan blir **A = (L + 2u)(B + 2u) / cos v**, med samma utsprång u runt om. Egen räkning (projektionssatsen för plana ytor med samma lutning), ingen extern källa.
- Exempel: 12 × 9 m, u 0,5 m, 27°: 13 × 10 / cos 27° = **145,90 m²**.
- Gäller inte valmat tak med olika lutning på långsida och gavel, halvvalm eller mansard. Fasadräknaren har halvvalm som eget antagande (`fasadyta.ts`, nyckel `halvvalm`).
- Tak i Väst (se 4.1) anger pris separat för sadeltak, valmat tak och mansardtak, och Takexperter: "Har man istället ett mansardtak eller valmat tak blir priserna generellt högre." Om valmtak tas med ska det stå att priset per kvadratmeter i källorna gäller sadeltak.

### 2.5 Kontroll mot en offert (för sidan, checklistan "Det ettan har")

- Leadhive varnar för att offertens yta ska vara takyta. Tak i Väst, ordagrant: "Observera att exemplen avser takyta (KVM = kvadratmeter/m²)". Tak i Väst ber läsaren mäta "vindskivan/takfallslängd" (meningen avklippt i texten). https://takivast.se/byta-tak-kostnad-pris/ (ändrad 2026-08-17).

---

## 3. Antal takstolar (egen räkning)

- **antal = avrunda uppåt(L / c/c) + 1**, där L är längden gavel till gavel (utan gavelutsprång).
- c/c 1 200 mm som standard: TräGuiden 4.2.2, "Takstolar som är godkända och tillverkas industriellt dimensioneras och används normalt för ett centrumavstånd på 1 200 mm." TräGuiden 1.3.1: "Vanligtvis används ett centrumavstånd av 1 200 mm men mindre centrumavstånd, 600 och 900 mm, förekommer." Adresser och fler källor i `kunskap-takstolar.md` avsnitt 3.
- Exempel: 12 m / 1,2 = 10 → **11**; 12 m / 0,9 = 13,33 → **15**; 12 m / 0,6 = 20 → **21**; 10 m / 1,2 → **10**.
- ANTAGANDE: första och sista takstolen står i gavellivet. Om gaveln har en egen gavelstol, eller om leverantören räknar annorlunda: ingen källa. Resultatet ska säga att leverantören bestämmer antalet.
- Räknaren dimensionerar inga takstolar (checklistan takstolar, fälla "Ingen egen dimensioneringstabell").

---

## 4. Pris per kvadratmeter takyta

Alla belopp inkl. moms om inget annat står. "Lagt" = material och arbete. Varje rad: källa, typ, datum, adress.

### 4.1 Källorna

| # | Källa | Typ | Datum | Adress |
|---|---|---|---|---|
| P1 | Takexperter, "Vad kostar det att byta tak? (Pris 2026)" | offertförmedlare | odaterad ("Pris 2026") | https://www.takexperter.se/sida/vad-kostar-det-att-byta-tak-pris |
| P2 | Beckmans Bygg, "Vad kostar det att byta tak? Prisguide 2026" | takfirma | publicerad 2025-03-12, ändrad 2026-01-14 | https://beckmansbygg.se/byta-tak-kostnad/ |
| P3 | Byggstart, "Vad kostar det att byta tak?" / "…lägga plåttak?" / takpapp / shingeltak | offertförmedlare | ändrade 2026-02-18 | https://www.byggstart.se/pris/byta-tak · /pris/takplat · /pris/takpapp · /pris/shingeltak-pris |
| P4 | Hantverkskollen, "Plåttak pris per kvadratmeter" | offertförmedlare | uppdaterad 17 juli 2026 | https://www.hantverkskollen.se/artiklar/tak/tak-plattak-pris-per-kvadratmeter-guide-till-2026 |
| P4b | Hantverkskollen, "Pris kvm tak: jämförelse" | offertförmedlare | uppdaterad 17 juli 2026 | https://www.hantverkskollen.se/artiklar/tak/tak-pris-kvm-jamforelse-mellan-olika-takmaterial |
| P5 | Totalbyggarna, "Nytt plåttak" (Mateusz Kerlin) | byggfirma | publicerad och uppdaterad 30 mars 2026 | https://www.totalbyggarna.se/blogg/plattak/ |
| P6 | BraByggare, "Vad kostar det att lägga om taket 2026?" | offertförmedlare | 2026-04-28 | https://www.brabyggare.se/info/vad-kostar-lagga-om-tak-2026/ |
| P7 | Tak i Väst (Takläggarna i Väst AB), "Byta tak kostnad" | takfirma, Göteborg | ändrad 2026-08-17 | https://takivast.se/byta-tak-kostnad-pris/ |
| P8 | Svenska Byggruppen, "Vad kostar det att byta tak?" | byggfirma | odaterad | https://svenskabyggruppen.se/vad-kostar-takbyte |
| P9 | Bygghemma, "Lägga om tak – kostnad" (Bygghemma-redaktionen) | butik | 2026-02-23 | https://www.bygghemma.se/reportage-och-guider/lagga-om-tak-kostnad/ |

### 4.2 Pris per material, lagt

| Material | Belopp per m² takyta | Källa | Före eller efter rot | Ordagrant eller egen räkning |
|---|---|---|---|---|
| **Bandtäckt (falsad) plåt** | 1 500–3 500 kr | P2 | efter rot enligt P2:s kolumnrubrik | "Bandtäckt plåt … 1 500 - 3 500 kr" |
| | 1 600–2 500 kr; material 150–350, arbete 670–1 190 kr | P4 | före rot | "Falsat plåttak (bandplåt)1 600–2 500 kr150–350 kr670–1 190 kr" |
| | engelfalsat stål 1 600–2 000; dubbelfalsat stål 1 800–2 500 | P4 | före rot | ordagrant |
| | 1 500–2 500 kr (bandtäckt stål) | P5 | före rot | "Bandtäckt plåt (stål) 1 500-2 500 kr" |
| | 3 000–4 500 kr | P6 | anges inte | "Bandtäckt eller falsad plåt: 3 000–4 500 kr/kvm" |
| | 1 080 kr (utan tillägg), 1 280 kr (med P1:s tillägg 30 000 kr) | P1 | före rot | egen räkning: (72 000 + 90 000) / 150; (162 000 + 30 000) / 150 |
| **Takpanneplåt** | 1 400–1 900 kr | P2 | efter rot enligt P2 | ordagrant |
| | 950–1 300 kr; material 200–320, arbete 220–430 kr | P4 | före rot | ordagrant |
| | 900–1 500 kr | P5 | före rot | "takpanneplåt 900–1 500 kr/m²" |
| | plåttak i allmänhet 1 700 kr snitt (1 500–3 000) | P3 | "Summan inkluderar samtliga kostnader för arbete och material" | ordagrant |
| **Trapetsplåt** (om den blir ett val) | 1 400–1 800 kr ("Korrigerad plåt") | P2 | efter rot enligt P2 | ordagrant, stavningen är P2:s |
| | 800–1 150 kr; material 150–230, arbete 190–340 | P4 | före rot | ordagrant |
| | 700–1 200 kr | P5 | före rot | ordagrant |
| | 1 800–2 800 kr | P6 | anges inte | ordagrant |
| **Betongpannor** | 1 300–1 700 kr | P2 | efter rot enligt P2 | ordagrant; också P2:s rubrikmening |
| | 1 500–2 200 kr | P6 | anges inte | ordagrant |
| | 1 124 kr (utan tillägg), 1 324 kr (med tillägg) | P1 | före rot | egen räkning: (93 600 + 75 000) / 150 |
| | 150 kvm: 155 000–185 000 kr efter rot → 1 033–1 233 kr/m² | P7 | efter rot | egen division; P7: "150 KVM – 2 huvar, 2 stuprör, 2 gavlar – Ca pris efter ROT avdrag 155 000 – 185 000kr", Benders Palema, Göteborg |
| | 900–1 200 kr | P8 | anges inte | ordagrant, odaterad |
| **Tegelpannor (lertegel)** | 1 500–1 900 kr | P2 | efter rot enligt P2 | ordagrant |
| | 2 500–3 500 kr | P6 | anges inte | ordagrant |
| | 1 464 kr (utan tillägg), 1 664 kr (med tillägg) | P1 | före rot | egen räkning: (93 600 + 126 000) / 150 |
| | 1 100–1 500 kr | P8 | anges inte | ordagrant, odaterad |
| **Papp (ytpapp)** | 1 200 kr snitt (1 000–1 800) | P3 | "omfattar både arbete och material" | "genomsnittspriset ligger på omkring 1.200 kr inklusive moms per kvadratmeter takyta" |
| | 600–1 200 kr | P2 | efter rot enligt P2 | ordagrant |
| | 1 200–2 000 kr ("Takpapp / shingel") | P6 | anges inte | ordagrant |
| | 767 kr (utan tillägg), 967 kr (med tillägg) | P1 | före rot | egen räkning: (57 600 + 57 500) / 150 |
| **Shingel** | 1 000 kr snitt (800–1 600); material 100–200 kr | P3 | "När både material och montering ingår" | ordagrant |
| | 1 200–2 000 kr ("Takpapp / shingel") | P6 | anges inte | ordagrant |

- **P1:s tillägg**, ordagrant: "Till totalpriset ovan tillkommer resekostnader, etableringskostnad och projekteringskostnader med cirka 30 000 kronor." P1:s egen slutsats: "ett takbyte kan kosta så pass lite som från 850 kronor per kvm för ytpapp upp till 1 500 kronor per kvm för tak med tegelpannor." P1:s snitt: "cirka 1 400 kronor per kvadratmeter, inklusive moms … så lågt som 800 kronor per kvadratmeter … runt 3 000 kronor per kvadratmeter."
- **P2 före eller efter rot:** P2:s rubrikrad lyder "Takmaterial | Total kostnad (efter ROT) | Pris per m²", och "Alla priser är ungefärliga och inkluderar material, arbete, byggställning, avfallshantering och städning efter avslutat arbete." P2:s exempel för 150 m² betongpannor: arbetskostnad 156 250, materialkostnad 52 500, övriga kostnader 55 000 ("byggställning, container, eventuell kranlyft samt frakt och transport"), totalt före rot 263 750, rot −46 875, efter rot 216 875 kr, "Pris per kvm: 1 450 kr/kvm allt inkluderat (efter ROT-avdrag)". Egen räkning: 263 750 / 150 = **1 758 kr/m² före rot**, 216 875 / 150 = **1 446 efter**. Spannet 1 300–1 700 omfattar 1 446 men inte 1 758. **Beslut för underlaget: P2:s spann är efter rot.** Räknaren ska inte blanda P2 med källor som anger före rot utan att räkna om.
- **P4b är P2:s tabell.** P4b: "Ytpapp / papptak600–1 200 kr … Betongpannor1 300–1 700 kr … Lertegel1 500–1 900 kr … Korrugerad plåt (takplåt)1 400–1 800 kr … Takpanneplåt1 400–1 900 kr … Bandtäckt plåt1 500–3 500 kr", med rubriken "Pris/kvm (totalt)" och "Priser nedan är inkl. moms men före ROT-avdrag". Samma tal som P2, motsatt etikett. P4b används inte. P4 (plåtsidan) har egna tal och används.
- **Källorna säger olika, inget medelvärde.** Spannen för samma material skiljer upp till en faktor tre (bandtäckt plåt 1 500–2 500 hos P4 och P5, 3 000–4 500 hos P6). Vilket som väger tyngst: ingen av dem är primärkälla. P2 och P7 är takfirmor som redovisar egna projekt ("Allting baserat på verkliga siffror från egna projekt", P2), P4 har material och arbete per rad. **Förslag till UX och bygge-agenten:** räkna ett spann per material ur de källor som anger före rot och har datum 2026 (P4, P5, P3, P1), redovisa P2 och P6 i antagandetabellen, och skriv källan per rad i "Så räknar jag". Det är ett beslut, inte ett underlag.
- **P9 (Bygghemma)**, ordagrant: "Normalt landar priserna någonstans mellan 1500 kr/m2 och upp till 3500 kr/m2." Inget per material. "Om du väljer att lägga taket själv blir det uppskattningsvis tre gånger så billigt som om du anlitar en firma".
- **P8 (Svenska Byggruppen)** är odaterad och plåt 800–1 100 kr anges utan plåttyp. Används inte i räknaren.
- **Takpriser.se** (publicerad 2025-11-28) har två tabeller som motsäger varandra (plåttak 500–800 kr/m² och bandtäckt plåt 1 000–1 400 kr/m² på samma sida) och fel rot-tak ("upp till 75 000 kr per person och år"). **Används inte.** https://takpriser.se/planera-ditt-takbyte-sa-mycket-bor-taket-kosta/

### 4.3 Andelen arbete

| Källa | Material | Arbete kr | Material kr (vad som ingår) | Andel arbete (egen räkning) |
|---|---|---|---|---|
| P1, 150 m² | tegel | 93 600 | 126 000 (ink. ställning 20 000, container 5 000) | 42,6 % |
| P1 | betong | 93 600 | 75 000 (samma) | 55,5 % |
| P1 | bandplåt | 72 000 | 90 000 (samma) | 44,4 % |
| P1 | ytpapp | 57 600 | 57 500 (samma) | 50,0 % |
| P2, 150 m² | betong | 156 250 | 52 500 + övrigt 55 000 | 59,2 % |
| P4, 150 m² | bandplåt | 127 500 | 134 500 (rivning 15 000, underlag och läkt 25 000, plåt 52 500, beslag 22 000, ställning 20 000) | 48,7 % |
| P5, 150 m² | bandtäckt stål | 165 000 | 115 000 (material 60 000, underlag och beslag 35 000, ställning 20 000) | 58,9 % |

- P1:s arbetstimpris: "Vi har använt en genomsnittlig arbetskostnad på 600 kronor per timme." P1:s förarbete innehåller "montering av ställning". P1:s arbetsposter för betong och tegel är identiska (förarbete 14 400, rivning 21 600, tätskikt och läkt 28 800, takbeklädnad 28 800).
- P4 per m² per plåttyp (ordagrant ur tabellen, före rot): trapets arbete 190–340, takpanneplåt 220–430, klicktak 340–640, falsat 670–1 190 kr/m².
- P4:s rivning (15 000) räknas i P4 som material. Egen bedömning: rivning är arbete. Andelen arbete hos P4 är alltså högre än 48,7 % om rivningen flyttas (142 500 / 262 000 = 54,4 %, egen räkning).
- **Källorna säger olika:** 43 till 59 procent. P1 lägger ställning och container i materialet. **Förslag:** andel per material ur P1 (enda källan med samma uppställning för alla fyra material), märkt som P1:s uppställning, eller en andel per material ur P4 för plåt. Beslut för UX och bygge-agenten. Shingel har ingen källa för andelen arbete: P3 anger material 100–200 kr av snittet 1 000 kr/m² (egen räkning: 80–90 % är annat än takmaterialet, men det är inte samma sak som arbete). **Andel arbete för shingel: saknas.** Posten märks ANTAGANDE eller tas bort.

### 4.4 Ställning och container

| Post | Belopp | Källa | Datum |
|---|---|---|---|
| Takställning, 150 m² | 20 000 kr (i materialet) | P1 | odaterad |
| Ställning | "varierar mellan 10 000 och 40 000 kr beroende på husets storlek och form" | P4b | 2026-07-17 |
| Ställning och etablering | 20 000 kr | P4 och P5 (båda exemplen) | 2026-07-17, 2026-03-30 |
| Ställning och arbete, cirka 5 m höjd | "ena sidan – 10 000 – 20 000 kr", "båda sidor – 15 000 – 30 000 kr", extra, efter rot | P7 | 2026-08-17 |
| Container | 5 000 kr | P1 | odaterad |
| Container 10 m³, blandat avfall, 7 dagar | 6 950 kr + frakt efter postnummer, "I priset ingår 1 st utsättning, 1 st tömning i samband med hemtagning dag 7, behandlingsavgiften för avfallet samt hyran" | Ohlssons (avfallsföretag, Skåne) | hämtad 2026-09-28 · https://www.ohlssons.se/tjanster/avfallshantering/container-privat/container-fastpris-blandat-avfall/ |

- Ohlssons, ordagrant: "Du får heller inte slänga ren betong, schakt, tegel, jord, sand, tryckimpregnerat trä, slipers, asbest/eternit, gips eller iso…" (texten avklippt). Gamla tegelpannor och eternit får alltså inte i den containern. Egen slutsats: containerpriset för ett pannetak kan inte tas ur Ohlssons blandade container. Ohlssons levererar "till de flesta kommuner i Skåne".
- Rivning av eternit: Hantverkskollen P4b nämner asbest ("15 000–40 000 kr extra") och Boverket utan adress. **Ingen läst källa.** Nämns inte med tal.

---

## 5. Rotavdraget

**Konstanter:** importeras ur `src/lib/kalkyl/rotavdrag.ts` (checklistan regel 4): `ROT_PROCENT` 30, `ROT_TAK_KR` 50 000 per person och år, `GEMENSAMT_TAK_KR` 75 000 per person och år för rot och rut. Källorna finns i den filen. Skrivs inte om här.

**Vad som är arbete vid takbyte, Skatteverket** (företagssidan "Ger arbetet rätt till rotavdrag?", https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html , läst 2026-09-28, sidan saknar datum):

- Under Bygg, reparera och underhålla, småhus, "Rotavdrag ges för att": "byta och reparera fasader, hängrännor och takpannor" och "montera och montera ner byggnadsställningar i samband med rotarbete."
- Under Glas och plåt: "reparera, rengöra eller byta ut plåttak, hängrännor och stuprör."
- Under Rengöring: "byggstäda material och andra grovsopor efter ett utfört rotarbete".
- Nybyggd bostad: "Om bostaden är yngre än fem år får arbetet endast syfta till att återställa byggnaden till det skick den var i från början. Om material byts ska det nya vara likvärdigt med det gamla."

**Vad som inte är arbete**, Skatteverket privatsidan "Så fungerar rotavdraget", https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html , ordagrant:

- "Material som hyrs eller leasas ger inte heller rätt till rotavdrag."
- "Övriga kostnader som utföraren har i samband med arbetet ger inte rätt till skattereduktion. … Företaget kan till exempel ha övriga kostnader för restid till och från dig samt vid materialinköp och bortforsling av avfall … maskiner, utrustning och avfallshantering … administration."
- "Det är bara arbetad tid på plats hos dig som ger rätt till rotavdrag."

**Alltså (egen läsning av de två sidorna, märks som det):**

| Post | Rot? | Grund |
|---|---|---|
| Rivning, läkt, underlag, lägga taket, plåtdetaljer | ja, arbetet | "byta … takpannor", "byta ut plåttak" |
| Montera och ta ner ställningen | ja, arbetet | "montera och montera ner byggnadsställningar i samband med rotarbete" |
| Hyra av ställningen | nej | "Material som hyrs eller leasas", "utrustning" |
| Container och bortforsling | nej | "bortforsling av avfall", "avfallshantering" |
| Byggstädning efter arbetet | ja, arbetet | "byggstäda material och andra grovsopor efter ett utfört rotarbete" |
| Material (plåt, pannor, papp, läkt) | nej | "Material och resekostnader … ger inte rätt till avdrag" |

- BraByggare (P6) räknar "ställningsbygge" som avdragsgillt. Det stämmer med Skatteverket för arbetet, inte för hyran.
- **Fel i fältet, för hantverkaren att veta (nämns inte i publik text):** Totalbyggarna (P5) räknar rot 82 500 kr på 165 000 kr arbete, över taket 50 000 kr per person. Hantverkskollen (P4b) och Takpriser skriver "max 75 000 kr per person och år" om rot. Takexperter nämner inget tak.

---

## 6. Formeln för kostnaden (förslag, ANTAGANDE i sin helhet)

1. A = takarea enligt avsnitt 2.
2. Kostnad lagt = A × pris per m² (låg och hög ur valda källor, avsnitt 4.2), före rot.
3. Arbete = kostnad × andel arbete (avsnitt 4.3). Material = kostnad − arbete.
4. Rot = min(30 % × arbete, 50 000 × ägare − utnyttjat rot, 75 000 × ägare − utnyttjat rot och rut), avrundat till hel krona, som i `rotavdrag.ts`.
5. Att betala = kostnad − rot.

- Priserna per m² är snitt för sadeltak på villa (P1: "enplansvilla med ett sadeltak som har en yta på 150 kvm"; P4: "normalt villaprojekt med 100–200 m² takyta och ca 22° lutning"). Linjär skalning med takarean är ett ANTAGANDE. P1 och Leadhive säger båda att ytan inte följer proportionellt: Leadhive, ordagrant: "Ett mindre tak får inte automatiskt samma kvadratmeterpris som ett större, eftersom etablering, transporter och ställning inte följer ytan proportionellt."
- Förslag, i samma anda som badrumsbeslutet 2026-09-29 i `raknare.md`: tillåt linjär skalning bara inom det intervall källornas exempel täcker (P4: 100–200 m²; P1, P2, P5: 150 m²; P7: 120–220 m²). Utanför intervallet visar räknaren takarean men inget belopp. Beslut för UX och bygge-agenten.

---

## 7. Räkneexempel att testa mot (egen räkning, node, 2026-09-28)

| Fall | Indata | Förväntat |
|---|---|---|
| G1 sadel | L 12, B 9, u_f 0,5, u_g 0,4, 27° | A = 2 · 12,8 · 5,0 / cos 27° = **143,66 m²**; s = 5,0 / cos 27° = **5,612 m**; t = 4,5 · tan 27° = **2,293 m** |
| G2 sadel utan utsprång | L 12, B 9, 0, 0, 27° | A = **121,21 m²** (bottenyta 108 m²) |
| G3 sadel brant | L 10, B 8, u_f 0,6, u_g 0,3, 38° | A = 10,6 · 9,2 / cos 38° = **123,75 m²**; s = **5,837 m**; t = **3,125 m** |
| G4 pulpet | L 6, B 4, u_f 0,3, u_g 0,3, 10° | A = 6,6 · 4,6 / cos 10° = **30,83 m²**; s = **4,671 m**; t = 4 · tan 10° = **0,705 m** |
| G5 vinkel ur nock | sadel B 9, t 2,3 | v = arctan(4,6 / 9) = **27,07°** |
| G6 valm (om med) | L 12, B 9, u 0,5, 27° | A = 13 · 10 / cos 27° = **145,90 m²** |
| T1 takstolar | L 12, c/c 1 200 / 900 / 600 | **11 / 15 / 21** |
| K1 kostnad | A 143,66, pris 1 500 kr/m², andel arbete 55 %, 1 ägare | kostnad 215 487; arbete 118 518; rot = 30 % = **35 555 kr** (under taket) |
| K2 taket slår i | kostnad 400 000 (200 m² × 2 000), andel arbete 60 %, 1 ägare | arbete 240 000, 30 % = 72 000 → **50 000 kr**; 2 ägare → **72 000 kr** |

- K1 och K2 använder påhittade pris och andel för att testa logiken. De får inte stå som priser på sidan.
- Fasadräknaren använder standardhuset 27°. Testet kan läsa `STANDARD` ur `fasadyta.ts` och kontrollera att nockhöjden blir samma i båda modulerna.

---

## 8. Sökanalys (topp 5 enligt checklistan, lästa 2026-09-28)

Ordningen är inte kontrollerad i google.se.

1. **leadhive.se/artiklar/byta-tak-kostnad-priser-2026** (publicerad 3 mars 2026, uppdaterad 26 september 2026, lead-sajt): 1 300–1 700 kr/kvm och 195 000–255 000 kr för 150 kvm "enligt Beckmans Byggs prisguide", materialpris per takmaterial ur "marknadsguiderna", varnar att ytan inte skalar proportionellt. Saknar rotprocent, rot-tak, takarea. Har fel: Beckmans spann anges utan att säga att det är efter rot.
2. **takexperter.se** (odaterad, "Pris 2026"): tre tabeller för 150 kvm med arbete och material för sig, 600 kr/tim, rot 30 %. Saknar rot-taket, takarean, datum. Gammalt: "Krävs det även bygglov tillkommer kostnader på cirka 15 000 – 30 000 kronor" utan att säga att villor inte behöver lov sedan 1 december 2025.
3. **svenskabyggruppen.se/vad-kostar-takbyte** (odaterad): fyra spann per material, rot 30 % och 50 000 kr rätt. Saknar datum, källa, arbete och material för sig, takarea.
4. **takpriser.se** (2025-11-28): två tabeller som motsäger varandra, rot-tak 75 000 per person (fel).
5. **takivast.se/byta-tak-kostnad-pris/** (ändrad 2026-08-17, takfirma Göteborg): pris efter rot per takstorlek, detaljpriser (huvar, skorstensbeslag, råspont 360–395 kr/m², ställning 10 000–30 000 kr), påminner att priset gäller takyta. Saknar formel för takarean, arbete och material för sig.

Kvar hos läsaren efter alla fem: hur stor är min takyta, vad blir det med mitt material, vad är arbete, hur mycket rot får vi som två ägare.

**Det vår sida kan ha som ettan saknar:** takarean ur bottenyta, utsprång och lutning; tabellen över påslaget per lutning; pris per material med källa, typ och datum, och om det är före eller efter rot; arbete och material för sig; rot rätt med tak och två ägare, och vad som är arbete (ställningsmontage ja, hyra nej, container nej); takvinkel, nockhöjd och antal takstolar i samma svar; resultatet i adressen utan kontaktuppgifter.

---

## 9. Interna länkar

- **Ut** (checklistan): `/tak/plattak/` i avsnittet om vad som ingår; `/tak/takstolar/` där antalet takstolar visas; `/rakna/rotavdrag/` i rotavsnittet; `/rakna/takavvattning/` i "Läs vidare". Ingen av `/tak/plattak/`, `/tak/takstolar/`, `/rakna/takavvattning/` finns i `src/` 2026-09-28.
- **In:** `/tak/plattak/` (värdartikel), `/tak/snorasskydd/` och `/tak/takstolar/` (verktygskort).
- **`/rakna/fasadyta/` i "Läs vidare": ja.** Checklistan bad underlaget kontrollera om fasadräknaren räknar gavelspetsar med samma lutning. Den gör det: `gavelyta()` i `src/lib/kalkyl/fasadyta.ts` (rad 1449–1464) räknar gavelspetsar för sadel, pulpet, valmat och mansard, och `nockUrVinkel` / `vinkelUrNock` (rad 1466–1474) är samma formler som i avsnitt 2 här. Länken är befogad åt båda håll.
- Inga produkter, inget reklamband (checklistan).

---

## 10. Till affiliateagenten: Proffsmagasinet, verktyg för plåttak

Checklistan säger ingen produkt på räknaren. Noterat för `/tak/plattak/` och "Det här behöver du", beslut hos affiliateagenten. Inga slugs. Priser inkl. moms, lästa på proffsmagasinet.se 2026-09-28. Kampanjpris markerat.

**Plåtsaxar, batteri och el** (https://www.proffsmagasinet.se/produkttyp/Pl%C3%A5tsax):

| Produkt | Pris | Butikens egen beskrivning (kort) |
|---|---|---|
| Milwaukee M18 BMS12-0 (utan batteri) | 2 485 kr (ord. 2 785, −11 %) | "maximalt skärdjup på 1,2mm i stål och 2,0mm i aluminium" |
| Milwaukee M18 BMS20-0 (utan batteri) | 3 447 kr (ord. 3 830, −10 %) | "2,0mm i stål och 3,2mm i aluminium" |
| Dewalt DCS491N (utan batteri) | 3 341 kr | "1,0mm i rostfritt stål och 1,3mm i mjuk plåt" |
| Dewalt DCS496N-XJ (utan batteri) | 3 195 kr | "förskjutet saxhuvud som möjliggör klippning i oregelbundna material (korrugerad plåt)" |
| Makita DJS161Z (utan batteri) | 4 707 kr | "1,6mm mjukt stålplåt" |
| Makita DJS101Z (utan batteri) | 4 437 kr | "1mm mjukt stålplåt" |
| Bosch GSC 12V-13 (utan batteri) | 4 018 kr | "upp till 1,3 mm i metall" |
| Dräco DR61060, plåtsax för profilerad plåt | 20 202 kr | "kapning av profilerad plåt upp till 2 mm", butiken nämner elinstallationer |

Handsaxar på samma sida: 129–715 kr (Stanley, Dewalt Ergo, Bessey, Fiskars, Bahco). Under gränsen 1 500 kr (SOKORDSANALYS 8.6).

**Nibblare** (https://www.proffsmagasinet.se/produkttyp/Nibblare):

| Produkt | Pris | Butikens beskrivning |
|---|---|---|
| Makita DJN161Z (utan batteri) | 5 111 kr | "stansar högprofil- och trapetsplåt med samma stans" |
| Makita JN1601 (550 W) | 3 629 kr | samma |
| Milwaukee M12 FNB16-0 (utan batteri) | 4 824 kr (ord. 5 361, −10 %) | "1,6 mm nibblare" |
| Fein BLK 1.6 E (350 W) | 9 628 kr | "universalnibblare för tak- och fasadbyggnad" |
| Bosch GNA 18V-16 E (utan batteri) | 6 613 kr | – |

Nibblingsmaskiner (annan kategori, https://www.proffsmagasinet.se/produkttyp/Nibblingsmaskin): Pela 507085 1 179 kr (ord. 1 391), Pela 510973 luftdriven 490 kr, Dräco DR61203-1 13 142 kr.

**Skruvdragare** (https://www.proffsmagasinet.se/produkttyp/Skruvdragare): borrskruvdragare 1 237–4 297 kr, t.ex. Makita DDF484Z 2 066 kr (utan batteri), Milwaukee M18 BLDD2-0X 2 190 kr (ord. 2 434), Dewalt DCD791NT-XJ 1 815 kr (utan batteri). Ingen produkt på sidan heter "för takplåt". Vilken skruvdragare tillverkarna av takplåt kräver (varvtal, djupstopp) står i `kunskap-plattak.md` om den hittas.

Inte kontrollerat: lagerstatus per produkt, om kampanjpriserna gäller efter i dag, och om plåtsaxarnas tjocklek räcker för takplåtens 0,5–0,6 mm (egen bedömning: alla listade klarar minst 1,0 mm stål enligt butikens text).

---

## 11. Osäkert och saknat

- Ingen källa för pris per material är myndighet, bransch eller tillverkare. Alla är förmedlare eller firmor.
- P2:s spann tolkat som efter rot, på P2:s kolumnrubrik och exempel. P4b säger motsatsen för samma tal.
- P1 (Takexperter) och Svenska Byggruppen saknar datum. P1 räknas ändå, eftersom den är den enda med samma uppställning för fyra material.
- Andel arbete för shingel: saknas.
- Pris per material för trapetsplåt och takpanneplåt skiljer sig mellan P2 och P4 med en faktor 1,5. Ingen förklaring i källorna.
- Container för pannor och eternit: ingen källa med pris.
- Om valmtak ska med: beslut för UX och bygge-agenten.
- Linjär skalning av priset med ytan: antagande, källorna säger att den inte håller.
- Skatteverkets sidor saknar datum. Rotkonstanterna byts varje december och tas ur `rotavdrag.ts`.

---

## 12. Minsta lutning per material, 2026-09-29

Beställt av koordinatorn för `/rakna/takbyte/`. Allt hämtat och läst 2026-09-29. Citaten är ordagranna. Sidnumret är det tryckta; det stämmer med PDF-sidan i alla tre PDF:erna.

### 12.1 Tabell

| Material | Tillverkare, produkt | Minsta lutning | Villkor enligt källan | Källa | Adress | Dokumentets datum |
|---|---|---|---|---|---|---|
| Betongpannor | Benders (betongtakpannor 1- och 2-kupig: Palema, Exklusiv) | **14°** | Under 22°: underlagspappen skarvklistrad och tätare läktavstånd, 310–340 mm | Benders, Monteringsanvisning betong 1- och 2-kupig, s. 4 och 5 | https://www.benders.se/globalassets/c4-assets/document/Monteringsanvisning-BETONG-1o2kupig--2023-07-LU-2.pdf | "BENDERS / SE / 2023 - 07" (s. 12) |
| Betongpannor | Monier (BMI): Jönåker Protector, Jönåker Ytbehandlad | **14°** | Inget villkor i tabellen. Läktavståndet anges per lutningsintervall i läggtabellen s. 15 | Monier/BMI, Monteringsanvisning Tegel- och betongtak, s. 5, "Tabell Taklutning" | https://hemmatema.se/userfiles/files/BMI_Monteringsanvisningtegel-%20och%20betongtak%202019_SWE_190827.pdf (återförsäljarens kopia) | "Monier Roofing AB / BMI Group Sverige 190827_01SWE", 2019-08-27 |
| Betongpannor | Monier (BMI): Minster | **18°** | Inget villkor i tabellen | samma, s. 5 | samma | 2019-08-27 |
| Tegelpannor (lertegel) | Monier (BMI): KDN, Turmalin, Hollander, Nortegel, Nova | **14°** | Inget villkor i tabellen | samma, s. 5 | samma | 2019-08-27 |
| Tegelpannor (lertegel) | Monier (BMI): Vittinge T11, Vittinge E13 | **22°** | Inget villkor i tabellen | samma, s. 5 | samma | 2019-08-27 |
| Takpapp | Icopal (BMI): TopSafe 3° | **3°** | "ju lägre lutning, desto högre blir kvalitetskraven" | BMI Sverige, produktsida TopSafe | https://bmisverige.se/produkter/yttertak/takpapp/top-safe | inget datum på sidan, läst 2026-09-29 |
| Takpapp | Icopal (BMI): TopSafe 14° | **14°** | "avsedd att användas på brantare tak" | samma | samma | läst 2026-09-29 |
| Bandtäckt plåt (planplåt, falsad) | Plannja | **5,7° (1:10)** | Under 11,3° (1:5): falserna tätas med falskitt | Plannja, Handbok för band- och skivtäckning i stål och aluminium, s. 5 och s. 16 | https://www.plannja.se/docs/default-source/documents-se/montering-uppdelade-2020/se-plannja-planpl%C3%A5tst%C3%A4ckning-handbok-2020-1.pdf?sfvrsn=4637394718963370000 | "PLANNJA 2020 JANUARI" (s. 32) |
| Bandtäckt plåt, klickfalsad profil | Lindab SRP25N Båstad | **8°** ("rekommenderade") | Inget villkor på sidan | Lindab, produktsida SRP25N Båstad | https://www.lindab.se/produkter/byggprodukter/tak/takprofiler/takplat/srp25n-bastad/ | inget datum på sidan, läst 2026-09-29 |
| Takpanneplåt | Plannja Royal/Regent, Lindab Torekov och Norrviken | 14° | se tidigare underlag | redan hämtat | | Plannja 2026-2, Lindab 2024-09-20 |

Vilka Monier-pannor som är betong och vilka som är lertegel står inte i monteringsanvisningen. Indelningen är hämtad ur BMI:s produktkatalog "Din guide till rätt tak" 2021, innehållsförteckningen s. 3: under "Taktegel" står Vittinge, KDN VH, Hollander V, Nortegl, Nova; under "Betongpannor" står Aerlox, Jönåker Elegant, Jönåker Protector 2.0, Jönåker Polar, Minster, Zanda Protector 2.0, Zanda Arktis. Adress: https://bmisverige.se/sites/default/files/2021-09/Din_guide_till_ratt_tak_2021.pdf. Turmalin står inte i katalogen 2021; den räknas som tegel på grund av BMI:s egen adress (`/produkter/yttertak/taktegel/turmalin`, sidan gav 403 och lästes inte). Rustilkk (14° i samma tabell) står inte i katalogen och dess material är **okänt**; den står därför inte i tabellen ovan.

### 12.2 Citat

**Benders, 2023-07**
- s. 4: "Benders takpannor kan läggas på taklutningar ned till 14°."
- s. 4: "Papp av godkänd kvalitet ex Benders BTS eller likvärdig krävs alltid. Vid taklutningar under 22° skall underlagspappen vara skarvklistrad."
- s. 5: "Min avstånd för Benders betongtakpannor är 310 mm, max 375 mm. Vid lägre taklutning än 22° skall tätare läktavstånd användas, 310-340 mm, se tabell 3."
- s. 5, Tabell 3 börjar på raden "14 - 17" för Palema 2-kupig och Exklusiv 1-kupig.

**Monier/BMI, 2019-08-27**
- s. 5: "Taklutningen är avgörande för vilka takpannor som kan användas. Kontrollera att taklutningen på ditt tak ligger inom spannet av vad som är möjligt med den panna du valt. Se tabell."
- s. 5, "Tabell Taklutning", kolumnerna Min och Max: KDN 14 85; Turmalin 14 85; Hollander 14 85; Nortegel 14 85; Nova 14 85; Vittinge T11 22 85; Vittinge E13 22 85; Minster 18 85; Rustilkk 14 85; Jönåker Protector 14 85; Jönåker Ytbehandlad 14 85.
- s. 5: "Det bör påpekas att risken för fuktinträngning ökar vid lägen med mycket vind och nederbörd, låg taklutning samt vid anslutningar och övergångar i takytan."
- Tabellen anger ingen enhet. Att det är grader framgår av läggtabellen s. 15 (kolumnen "Taklutning") och av "taklutning över 45°" s. 26.
- Samma tabell med samma tal står i den äldre utgåvan "121030_04SE" (Monier Roofing AB), s. 5, med "Jönåker Elegant" i stället för "Jönåker Ytbehandlad": https://www.beijerbygg.se/wcsstore/BeijerCAS/HPMAssets/d220001/medias/docus/2/002459890_7652789_249060318_MA1.pdf

**BMI, TopSafe (produktsidan, läst 2026-09-29)**
- "Icopal TopSafe 3° är originalet inom takpapp och ligger på många svenska tak. Tack vare de exceptionellt starka klisterkanterna klarar den ända ned till 3° lutning, något som ger extra trygghet, ju lägre lutning, desto högre blir kvalitetskraven."
- "TopSafe 14° är en klassisk ytpapp [...] Modellen är avsedd att användas på brantare tak, dvs från 14° och uppåt"
- Samma text om TopSafe 3° står i katalogen "Din guide till rätt tak" 2021, s. 36.

**Plannja, januari 2020**
- s. 5: "I princip kan alla byggnader täckas med planplåt. En av de begränsningar som förekommer är takets lutning som ska vara minst 1:10 eller 5,7°."
- s. 16: "Vid taklutning under 1:5 (11.3°) och i ränndalar ska falser tätas med falskitt."

**Lindab SRP25N Båstad (produktsidan, läst 2026-09-29)**
- "Minsta rekommenderade taklutning 8 grader."

### 12.3 Mot räknarens vinklar (egen jämförelse)

Förslaget i avsnitt 1: sadel 5–60°, pulpet 3–30°.

- **Papp** (TopSafe 3°): gränsen 3° är lika med räknarens lägsta pulpetvinkel. Ingen gräns inom räknarens vinklar. TopSafe 14° har gränsen 14°.
- **Bandtäckt plåt har en gräns inom räknarens vinklar**: 5,7° enligt Plannja, 8° för Lindabs klickfalsade profil. Pulpet 3–5,6° och sadel 5–5,6° ligger under Plannjas gräns. Beställningens antagande att bandtäckt plåt saknar gräns stämmer inte.
- **Betong och tegel**: 14° för de flesta pannor, 18° för Minster, 22° för Vittinge.

### 12.4 Är tillverkarna oense?

- **Betong, Benders och Monier: nej om talet.** Båda säger 14°. De skiljer sig i villkoren: Benders kräver skarvklistrad underlagspapp och tätare läkt under 22°; Monier sätter inget villkor i tabellen, bara läktavstånd per lutning i läggtabellen. Monier har en betongpanna med högre gräns (Minster 18°).
- **Tegel**: bara en tillverkare läst (Monier). Inom den skiljer sig modellerna: 14° för de falsade pannorna, 22° för Vittinge.
- **Bandtäckt plåt, Plannja och Lindab**: 5,7° och 8°. De gäller olika saker: Plannjas tal gäller bandtäckning med planplåt som metod, Lindabs en bestämd klickfalsad profil och är skrivet som rekommendation. För en allmän gräns väger Plannjas handbok tyngst; Lindabs tal gäller bara den profilen.

### 12.5 Osäkert och ej läst

- Moniers anvisning är från 2019-08-27 och säger själv: "Aktuell version av monteringsanvisningen finns på www.bmigroup.com/se." BMI listar en utgåva 2021 (https://store.bmigroup.com/medias/BMI-Monteringsanvisningtegel-och-betongtak-2021-SWE-2100127-print.pdf) som gav HTTP 400 och inte gick att läsa. Talen i utgåvorna 2012 och 2019 är desamma.
- bmisverige.se gav 403 för produktsidorna Zanda Protector 2.0 och Turmalin. experthjalp.bmisverige.se ("Taklutning för betongpannor") gav 404. docplayer.se gick inte att nå.
- Zanda (betong) saknas i min/max-tabellen. Läggtabellen s. 15 i utgåvan 2012 börjar på "14 - 17" för Zanda, men i utgåvan 2019 är tabellen sönderfallen i textutdraget. Zandas minsta lutning är **inte bekräftad**.
- Rustilkk: material okänt.
- Plannjas handbok är från januari 2020. Ingen senare utgåva hittad.
- Ingen annan tegeltillverkare än Monier läst.
