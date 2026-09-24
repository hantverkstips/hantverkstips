# Underlag: räknaren /rakna/u-varde/

Räknarunderlag enligt skillen nytt-verktyg, "Innan något byggs". Underlagsarbetaren, 2026-09-24. Ska godkännas av UX och bygge-agenten före steg 1.

- Fras: "beräkna u värde" 110/mån. "u värde" 590/mån ägs av artikeln /el/u-varde/.
- Räknaren går hela vägen: U före och efter, jämförelse mot Boverket, sparade kWh, kronor per år och återbetalningstid.
- Grund: `docs/briefer/faktablad/kunskap-u-varde.md` (hämtat 2026-09-22, avsnitt 1 till 13) och den publicerade artikeln `src/content/kunskap/el/u-varde.mdx` (publicerad 2026-09-23). Varje tal nedan som artikeln redan säger står med samma värde, så att testet kan läsa artikeln som facit.
- Omläst i dag, 2026-09-24: Rockwools vindsida, Bauhaus Vindsull, Helsingborgs stad. Nytt i dag: Energimyndigheten ET 2025:05 Värmepumpar (SCOP), Bauhaus Flexibatts 45 och 95 mm.
- "Egen räkning" står vid varje tal jag räknat fram, med formeln. ANTAGANDE står vid varje val utan källa.

---

## 1. Formeln

```
R_skikt = d / λ                   d i meter, λ i W/mK
R_T     = Rsi + Σ(d_i / λ_i) + Rse   m²K/W
U       = 1 / R_T                  W/m²K
```

Källa: Svenskt Trä, Träguiden, 9.3 KL-trä och värmeisolering, publicerad 2017-07-07, enligt SS-EN ISO 6946, https://www.traguiden.se/konstruktion/kl-trakonstruktioner/kl-tra-och-varme-och-fukt/9.3-kl-tra-och-varmeisolering/kl-tra-och-varmeisolering/ , läst 2026-09-22. Samma formel: SLU, Christer Nilsson, Byggnadsfysik värmelära, TN0258 (2011), https://slunik.slu.se/kursfiler/TN0258/30276.1011/Byggfysik_Varmelara_forelasning_110316.pdf , läst 2026-09-22. Artikeln: `U = 1 / (Rsi + d₁/λ₁ + d₂/λ₂ + … + Rse)`.

- Korrektionstermerna ΔU_g (luftspalter, springor) och ΔU_f (fästdon) i standarden sätts till 0. Sidan ska säga det. Källa till att termerna finns: Träguiden 9.3 (ΔU 0,01 i Träguidens exempel). ANTAGANDE: 0 i räknaren.
- Rätta inte användaren mot, men testa inte heller, den felaktiga formeln 1/U = Σ 1/Ui (sökmotorns sammanfattning, faktablad avsnitt 2).

### 1.1 Övergångsmotstånd

| Byggnadsdel | Värmeflöde | Rsi, m²K/W | Rse, m²K/W | Källa |
|---|---|---|---|---|
| Vägg | horisontellt | 0,13 | 0,04 | Träguiden 9.3; SLU TN0258; artikelns tabell |
| Tak | uppåt | 0,10 | 0,04 | samma |
| Golv | nedåt | 0,17 | 0,04 | samma |
| Vägg med välventilerad luftspalt | horisontellt | 0,13 | **0,13** | Paroc, Projekteringsanvisning välisolerade ventilerade fasader, oktober 2025, s. 15 och 18, https://www.paroc.com/sv/documents/uploads/ventilated-facades-design-guide , läst 2026-09-22 |

Regeln för välventilerad luftspalt (Paroc s. 15, med hänvisning till ISO EN 6946): bortse från luftspaltens motstånd och från alla skikt mellan luftspalten och utsidan, och räkna ett yttre övergångsmotstånd som stillastående luft, alternativt Rse = Rsi = 0,13. Träguiden tabell 9.6: väl ventilerad luftspalt har motståndet 0.

Så ska räknaren göra (följer artikeln):
- Skiktet "luftspalt, ventilerad" får bara väljas en gång. Allt som står utanför det i listan räknas inte, och Rse byts mot 0,13 (samma som väggens Rsi).
- Källorna skiljer: Paroc räknar Rse 0,13, Träguidens eget väggexempel med luftspalt räknar Rse 0,04. Paroc väger tyngst i just denna fråga eftersom den hänvisar till standardens regel för ventilerade fasader, och artikeln använder 0,13. Skillnad på Träguidens vägg: U 0,219 mot 0,214 (egen räkning, faktablad 13.3).
- Oventilerad och svagt ventilerad luftspalt: Träguiden anger bara "< 0,18" och "< 0,15", inte ett värde per tjocklek. **Saknas.** Erbjud inte de valen.
- Vad som gör en spalt "väl ventilerad" (öppningsarea): **saknas** (står i SS-EN ISO 6946, inte läst).
- Luftspalt på tak och golv: ingen källa hämtad. ANTAGANDE: luftspaltsvalet finns bara för vägg.
- Tak mot kallvind: artikeln räknar Rse 0,04. Om vindsutrymmet borde räknas med eget motstånd eller Rse = Rsi är **inte kontrollerat** mot standarden (faktablad avsnitt 8). Räknaren följer artikeln.
- Golv mot krypgrund: artikeln räknar Rse 0,04 ("gäller en yta som står direkt mot uteluften"). Krypgrund och platta på mark räknas i verkligheten enligt SS-EN ISO 13370, som inte är hämtad. **Saknas.** Sidan ska säga att golvtalet gäller bjälklaget mot uteluft och blir för högt för ett golv mot krypgrund eller mark.

### 1.2 Reglar i ett skikt (inhomogent skikt)

Artikelns väggexempel kräver att ett skikt kan bestå av isolering och reglar. Metoden enligt SS-EN ISO 6946, återgiven i Träguiden 9.3 (faktablad 13.4):

```
Övre gränsvärde (U-värdesmetoden):
  U_isol  = 1 / R_T med isoleringen i skiktet
  U_regel = 1 / R_T med trä i skiktet
  R_övre  = 1 / (andel_isol × U_isol + andel_regel × U_regel)
Undre gränsvärde (λ-värdesmetoden):
  λ_mix   = andel_isol × λ_isol + andel_regel × λ_trä
  R_undre = Rsi + övriga skikt + d / λ_mix + Rse
R_T = (R_övre + R_undre) / 2
U   = 1 / R_T
```

- Regelandel 12 procent: Svenskt Träs exempel (Träguiden 9.3, 170 mm, λ 0,14 och 0,037, R_u 4,717, R_λ 4,432, R_T 4,575). Artikeln lånar 12 procent.
- λ trä i regeln: 0,14 (Träguiden, som i artikeln).
- ANTAGANDE: högst ett skikt med reglar. Regelandelen erbjuds som två val, "inga reglar" och "reglar, 12 procent". Andra andelar (till exempel cc 450 med 45 mm regel, 10 procent, eller cc 600, 7,5 procent) är egen räkning ur geometri och saknar källa som tal för väggens yta. Beslut för UX.

---

## 2. Lambdatabell

Alla värden är de artikeln använder (tabellen under "Räkna ut U-värdet skikt för skikt"). Källor och datum som i faktabladet avsnitt 3, läst 2026-09-22 om inget annat står.

| Val i räknaren | λ, W/mK | Källa, adress, datum | Erbjuds |
|---|---|---|---|
| Stenull, skiva (Paroc eXtra) | 0,036 | Paroc produktblad, uppdaterat 2023-06-12, https://media.derome.se/medias/docus/137/PAROC-eXtra-sv-SE.pdf | ja |
| Stenull, skiva (Rockwool Flexibatts) | 0,037 | Rockwool, vind, https://www.rockwool.com/se/produkter-och-konstruktioner/takisolering/vind/ , omläst 2026-09-24 ("λ 37"); Bauhaus produktsida λD 37 mW/mK, 2026-09-24 | ja, standardval för mineralull och för gammal ull |
| Stenull, lösull maskinblåst 25 kg/m³ (Rockwool Granulate Pro Plus) | 0,041 | Rockwool, samma sida, omläst 2026-09-24 | ja |
| Glasull, lösull handutlagd (Isover Easy FyllUpp) | 0,045 | Byggkatalogen, https://byggkatalogen.byggtjanst.se/produkt/byggmaterial/isolering/losfyllnadsisolering-drev/isover-easy-fyllupp-losfyllnadsisolering/17202 | ja |
| Stenull, lösull handutlagd (Rockwool Vindsull) | 0,042 | Bauhaus produktdata, https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg , omläst 2026-09-24 (λ 42 mW/mK). Butik som källa för spec | valfritt. Står inte i artikelns tabell. Behövs om prisraden (avsnitt 6) ska gälla samma produkt. Beslut för UX och hantverkaren; läggs den till ska artikelns tabell få samma rad |
| Cellulosa, lösull | 0,037 till 0,040 | Energimyndigheten, Isolering, ET 2025:06, tabell 1, s. 7 (spann), https://energimyndigheten.a-w2m.se/Arkitektkopia/GetTemplateResource/121?id=fd3d494afb2148e7ab08bae60c7d06a7&res=4cc33ab6dd69484ca99def154051181d&lr=False&fn=ET_2025_06_BQ_EPRO011_ISOLERING_ET_2025_06_A4_TA.pdf&elp=portal&elt=t&eloid=fd3d494afb2148e7ab08bae60c7d06a7 | ja, med **0,040**. ANTAGANDE: spannets sämre ände, eftersom inget aktuellt tillverkardatablad finns (Ekofibers 0,040 är från 2010 via återförsäljare). Sidan ska säga det |
| Cellplast EPS (Sundolitt S80) | 0,038 | Sundolitt, https://www.sundolitt.se/product/s80--3040?code=3040 | ja |
| PIR (Kingspan Therma TW55) | 0,022 | Kingspan, https://www.insulation.kingspan.com/se/sv/produkter/isoleringsskivor/vaggisoleringsskivor/therma-tw55 | ja |
| Trä, gran och furu (panel, golvspån, regel) | 0,14 | Träguiden 9.3 (URL ovan) | ja |
| Gips | 0,24 | Träguiden 9.3 | ja |
| Lättbetong 500 kg/m³, med fukt inräknad | 0,14 | Betongföreningen, Fråga experten, Oskar Esping, https://betongforeningen.se/fraga_experten/2307-2/ (odaterad) | ja |
| Betong | 1,7 | Träguiden 9.3; Rockwool vind ("200 mm armerad betong, λ 1,7") | ja |
| Luftspalt, ventilerad | ingen λ, se 1.1 | Paroc 2025; Träguiden tabell 9.6 | ja, bara vägg |

Erbjuds inte, saknar källa eller står inte i artikeln:
- **Tegel**: λ saknas (inget tillverkardatablad, sökutdrag "cirka 0,6" utan källa). Artikeln säger "låt teglet vara". Räknaren ska inte ha tegel som val; hjälptexten kan säga samma sak som artikeln.
- Luftspalt oventilerad och svagt ventilerad: värde per tjocklek saknas (1.1).
- XPS, PUR, glasull skiva, träfiber, KL-trä, lättbetong 400 och 600, kutterspån, sågspån: har spann eller värden i faktabladet men står inte i artikelns tabell. Erbjud inte, så att räknaren och artikeln säger samma sak. Kutterspån finns bara som färdigt U-värde i Rockwools vindtabell (0,625 för 100 mm), inte som λ.
- Fritt lambdavärde: ANTAGANDE att räknaren inte har ett fritt fält. Beslut för UX; ett fritt fält gör att tegel och annat utan källa kommer in bakvägen.

---

## 3. Gradtimmar och elpris

### 3.1 Gradtimmar per del av landet (artikelns tal)

| Val | Gradtimmar, °Ch/år | Härledning | Artikeln skriver |
|---|---|---|---|
| Mellansverige, standardval | 89 280 | 3 720 graddagar × 24 (egen räkning) | 89 280 |
| Södra Sverige | 71 424 | 89 280 × 0,80 (egen räkning) | omkring 71 400 |
| Norra Sverige | 120 528 | 89 280 × 1,35 (egen räkning) | omkring 120 500 |

Källa: Rockwool, Isolera eller tilläggsisolera vind och innertak, https://www.rockwool.com/se/produkter-och-konstruktioner/takisolering/vind/ , omläst 2026-09-24. Ordagrant: "Beräkningarna använder normalårets graddagar: 3720 som är representativa för Mellansverige" och "För uppskattad besparing i södra Sverige beräkna ca 20% lägre besparing. För uppskattad besparing i norra Sverige beräkna ca 35% större besparing." Faktabladet anger att Rockwool avser Örebro–Västerås–Uppsala.

- Räknaren använder de oavrundade 71 424 och 120 528. Artikelns "omkring" täcker det.
- Gränstemperaturen 17 °C för äldre hus: Ulf Aronsson, examensarbete LTH, mars 2006, s. 25–26, https://www.lth.se/fileadmin/ees/Publikationer/2006/5091.pdf . Rockwool anger inte sin.
- Andra tal på sajten som räknaren **inte** ska använda: 100 000 (Bygg & teknik-tumregeln, i /grund/isolera-krypgrund/), 81 357 Stockholm (egen räkning ur SMHI 1991–2020, faktablad avsnitt 6), 113 880 (Energimyndighetens förenklade fönstermetod). Se avsnitt 7 om vad det betyder för facit.

### 3.2 Elpris

Läses från `src/lib/antaganden.ts`, skrivs aldrig in i modulen:
- `ELPRIS_KR_PER_KWH` = 2,40 kr/kWh
- `ELPRIS_KALLA`: SCB, Priser på elenergi och på överföring av el, https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris , period juli till december 2025, hushåll med 5 000 till 14 999 kWh per år, inklusive elhandel, nätavgift, energiskatt och moms. Periodtexten ska stå intill kronorna.
- ANTAGANDE: om räknaren får ett eget elprisfält (som /rakna/elkostnad/) behöver gränser sättas; ingen källa för gränser. Alternativet är att länka till /rakna/elkostnad/ som artikeln gör.

---

## 4. Boverkets värden att jämföra mot

| Byggnadsdel | BBR 9:92, tabell 9:92, gäller till och med 2026-09-30, "ska eftersträvas" | BFS 2026:9, bilaga 2 tabell 6, från 2026-10-01, "högsta tillåtna" |
|---|---|---|
| Tak | 0,13 | 0,13 |
| Vägg | 0,18 | 0,18 |
| Golv | 0,15 | 0,15 |
| Fönster | 1,2 | 1,1 |
| Ytterdörr | 1,2 | 1,1 |

Källor, lästa 2026-09-22:
- BFS 2011:6 i lydelse BFS 2024:14 (BBR 31, omtryck), avsnitt 9:92, https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf ; samma tabell i BFS 2020:4 (BBR 29) s. 10, https://rinfo.boverket.se/BFS2011-6/pdf/BFS2020-4.pdf
- BFS 2026:9, Boverkets föreskrifter om energihushållning och värmeisolering i byggnader, beslutad 2026-08-25, i kraft 2026-10-01, bilaga 2 tabell 6 s. 15 och 3 kap. 1 §, https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf

Villkor som ska stå vid jämförelsen:
- Talen gäller vid **ändring** av en befintlig byggnad, för den del som görs om. De är inte krav på nya småhus; ett nytt hus har krav på Um (0,30 för en- och tvåbostadshus i ett plan, 0,40 i mer än ett plan enligt BFS 2026:9 tabell 4). Räknaren räknar inte Um.
- Övergång: BBR får tillämpas på arbeten där bygglov söks, anmälan görs eller arbetet påbörjas före 2027-10-01, och då ska alla äldre regler tillämpas samtidigt (BFS 2026:9, övergångsbestämmelser punkt 3–4).
- Kravet får anpassas om kostnaden är oskäligt hög mot nyttan, om energihushållningen bara blir försumbart bättre, av tekniska skäl eller kulturvärden (BFS 2026:9, 3 kap. 1 §).
- BFS 2026:9 gäller inte byggnad med temperaturreglerad area mindre än 50 m² (1 kap. 3 § punkt 2).
- Att fönstrets 1,1 avser hela fönstret (Uw) är inte belagt ordagrant i BFS 2026:9 (faktablad 13.2). Jämförelsen ska göras mot Uw, som artikeln säger.
- ANTAGANDE, förslag till UX: visa båda kolumnerna i stället för att byta efter datum, eftersom sidan cachas och övergången gör att båda gäller till 2027-10-01. Byts det efter datum ska datumet vara 2026-10-01 och testet ha fall på båda sidor.

---

## 5. Besparing i kWh och kronor

```
Besparing [kWh/år]      = (U_före − U_efter) × A × Gt / 1 000
Besparing [kr/år]       = Besparing [kWh/år] × elpris                  (direktverkande el)
Besparing [kr/år], VP   = Besparing [kWh/år] / SCOP × elpris           (värmepump, egen räkning)
Återbetalningstid [år]  = investering [kr] / Besparing [kr/år]
```

- Källa till kWh-formeln: Bygg & teknik 3/24, Marcus Dahlin, https://byggteknikforlaget.se/och-svarar-3-24/ (artikelns källa). Kontroll: formeln återskapar Rockwools tabell, (0,184 − 0,078) × 89 280 / 1 000 = 9,46 kWh/m² och år, Rockwool anger 9,46 (egen räkning, faktablad avsnitt 6).
- Kronor = kWh × elpris gäller direktverkande el. Artikeln säger det ("I ett hus med direktverkande el motsvarar det …").
- Återbetalningstiden är enkel: utan ränta, prisändring och rotavdrag. Egen räkning.
- Om U_efter ≥ U_före: ingen besparing. ANTAGANDE: räknaren visar U-värdena och jämförelsen men ingen besparing eller återbetalningstid, och säger varför.

### 5.1 Värmepump

Energimyndigheten, Värmepumpar. En guide från energi- och klimatrådgivningen, ET 2025:05, mars 2025, s. 9, tabell 1 "SCOP för olika typer av värmepumpar", https://energimyndigheten.a-w2m.se/arkitektkopia/GetTemplateResource/121?id=f2885ffb97944c4faff591107207e98c&res=e424cc0a9f144dfe985d72b3b35f97cd&lr=False&fn=ET_2025_05+_BQ_EPRO011_V%C3%84RMEPUMPAR_ET_2025_05_A4_TA.pdf , läst 2026-09-24:

| Värmepump | SCOP |
|---|---|
| Luft-luft | 3,5–5,0 |
| Luft-vatten | 3,0–4,5 |
| Jordvärme | 4,0–5,0 |
| Sjövärme | 4,0–5,0 |
| Bergvärme | 4,0–5,5 |
| Frånlufts-VP | 2,5–4,0 |

- Samma sida: "Observera att dessa värden kan variera mycket beroende på teknisk lösning och geografisk placering." s. 9: en värmepump med COP 4 levererar fyra kWh värme per kWh el.
- s. 8: "Det är inte vanligt att värmepumpar dimensioneras för att klara hela husets värmebehov." Villor spetsar oftast med el.
- Egen räkning: el sparad = värme sparad / SCOP. ANTAGANDE: hela den sparade värmen kommer från värmepumpen. Eftersom spetsen är el ligger den verkliga besparingen i kronor mellan värmepumpstalet och direktelstalet. En luft-luftvärmepump värmer dessutom ofta bara en del av huset; hur stor del saknar källa.
- Förslag till UX: visa ett spann i kronor per typ (övre och undre SCOP), inte ett tal. Räkna inte ett medelvärde av spannet. Exempel, vinden med 946 kWh: luft-luft 454 till 649 kr/år (egen räkning, 946,368 / 5,0 × 2,40 och 946,368 / 3,5 × 2,40).
- Fjärrvärme, ved, pellets, olja: pris per kWh värme **saknas**. ANTAGANDE: räknaren visar bara kWh för dem, och pekar på /rakna/elkostnad/ för eget pris.

### 5.2 Gräns som ska stå på sidan

Energimyndigheten ET 2025:06 s. 13: energianvändningen minskar inte nödvändigtvis bara för att byggnaden tilläggsisoleras; sänks inte värmetillförseln blir resultatet högre inomhustemperatur. Formeln ger minskad värmeförlust, inte vad elmätaren visar.

---

## 6. Materialpris och investering

### 6.1 Lösull, egen läggning (samma som artikeln och vindguiden)

- Rockwool Vindsull 20 kg: 19,95 kr/kg, säljs på nätet tolv säckar åt gången, 4 788 kr för tolv. Densitet löst utlagd ≥ 42 kg/m³. Bauhaus, https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg , hämtat 2026-09-20 (vindguiden), 2026-09-22 (faktabladet) och omläst 2026-09-24, oförändrat.
- Pris per m² och mm, egen räkning: 19,95 kr/kg × 0,042 kg per m² och mm = **0,8379 kr/m²/mm**.
- Vid 300 mm: 251,37 kr/m² (egen räkning). Vindguiden skriver "252 kr per kvadratmeter", räknat som 4 788 kr / 19 m² (240 kg / 12,6 kg per m² = 19,05 m², avrundat nedåt till 19). Skillnaden är avrundning. Räknaren använder 0,8379, och hantverkaren bör veta att vindguidens 252 är avrundat.
- Hela förpackningar: tolv säckar = 240 kg. ANTAGANDE: räknaren räknar exakt åtgång, inte hela förpackningar. Faktabladet visar båda för vinden (25 137 kr exakt, 28 728 kr i sex förpackningar).
- Priset gäller Vindsull (λ 0,042), medan Rockwools U-värden för vinden gäller maskinblåst Granulate (λ 0,041). Faktabladet avsnitt 8: skillnaden är inte räknad med Rockwools metod; eget antagande att den är försumbar.

### 6.2 Skiva, egen läggning (nytt 2026-09-24)

Bauhaus, jämförpris per m², hämtat 2026-09-24:

| Produkt | Jämförpris | kr/m²/mm, egen räkning | Adress |
|---|---|---|---|
| Rockwool Flexibatts 45 × 565 × 1 170, 7,93 m² | 44,95 kr/m² | 0,999 | https://www.bauhaus.se/isolering-rockwool-flexibatts-45x565x1170mm-7-93m-stenullsisolering |
| Rockwool Flexibatts 95 × 580 × 1 170, 4,07 m² | 84,95 kr/m² | 0,894 | https://www.bauhaus.se/isolering-rockwool-flexibatts-95x580x1170mm-4-07m-stenullsisolering |

- Förpackningspriset som sidan visade (6 915 kr resp. 4 277,40 kr) stämmer inte med 4,07 och 7,93 m² gånger jämförpriset och gäller troligen flera förpackningar. Använd jämförpriset. Sökutdrag nämner ett tidigare pris 63,92 kr/m² för 95 mm; ej bekräftat på sidan.
- Priset per mm är inte linjärt mellan tjocklekarna. ANTAGANDE om räknaren räknar kostnad för skivor: använd priset för närmaste tjocklek eller bara lösullspriset. Beslut för UX. Artikeln har inget skivpris i dag.
- Material utöver ullen (reglar, läkt, gips, ångbroms, vindskydd, lösullsskärmar) **saknas**. Återbetalningstiden gäller bara ullen, och sidan ska säga det.

### 6.3 Firma

- Vindsbjälklag: 150 till 500 kr/m², Helsingborgs stad, energi- och klimatrådgivningen, https://helsingborg.se/bo-bygga-och-miljo/energi-och-klimatradgivning/vad-kostar-det-att-isolera-vinden/ , uppdaterad 2021-10-01, omläst 2026-09-24. Ordagrant: "en tilläggsisolering av vindbjälklaget kan kosta från 150 kronor till 500 kronor per kvadratmeter". Vad som ingår anges inte, utöver att snickeri och framkörning är den stora posten. Vindguiden: "får räknas upp något".
- Vägg, golv, krypgrund, fönster med firma: pris **saknas**. Vindguidens forumoffert (975 kr/m², RikaTillsammans 2023) är forum och inte en källa enligt reglerna.
- ANTAGANDE: firmaspannet visas bara för tak, och då som två återbetalningstider (150 och 500 kr/m²), inte ett medelvärde. Rotavdraget räknas inte in (artikeln och faktabladet räknar inte in det).

---

## 7. Räkneexempel med facit

Konvention: räknaren räknar oavrundat och avrundar bara det som visas (U till tre decimaler, kWh och kronor till heltal). Artikeln avrundar till tre decimaler i varje steg; för exempel 1 och 2 ger båda sätten samma tre decimaler (egen kontroll). Testtolerans: U ± 0,001, kWh ± 1, kr ± 2.

### Exempel 1: Artikelns vägg med reglar och luftspalt (facit: artikeln)

Indata: vägg; skikt inifrån: gips 13 mm (0,24), mineralull 120 mm (0,037) med reglar 12 procent (trä 0,14), luftspalt ventilerad, [panel utanför räknas inte]. Rsi 0,13, Rse 0,13.

| Steg | Artikeln (avrundat per steg) | Oavrundat, egen räkning |
|---|---|---|
| R mellan reglar | 3,557 → U 0,281 | 3,55741 → 0,28110 |
| R genom regel | 1,171 → U 0,854 | 1,17131 → 0,85375 |
| Viktat U, R_övre | 0,350 → 2,857 | 0,34982 → 2,85861 |
| λ_mix, R_undre | 0,0494 → 2,743 | 0,04936 → 2,74528 |
| R_T | 2,800 | 2,80195 |
| **U** | **0,357** ("0,36 avrundat") | **0,35689** |

Tillägg på samma vägg: 50 mm mineralull 0,037 på insidan utan reglar: R_T 4,151 → **U 0,241** (artikeln "0,24"; oavrundat 4,15330 → 0,24077).

Jämförelse: 0,357 > vägg 0,18 i båda kolumnerna. 0,241 > 0,18.

### Exempel 2: Artikelns fasad 0,40 → 0,18 (facit: artikeln)

Indata: känt U före 0,40 och efter 0,18 (inte skikt), vägg, 100 m², Mellansverige.
- kWh = 0,22 × 100 × 89 280 / 1 000 = **1 964** (1 964,16). Artikeln: 1 964.
- kr = 1 964,16 × 2,40 = **4 714** (4 713,98). Artikeln: "omkring 4 700 kr".

Detta förutsätter att räknaren tar emot ett känt U-värde före och efter, inte bara skikt. Samma läge behövs för fönster (exempel 4) och vind (exempel 3). Förslag till UX: två lägen, "räkna fram ur skikten" och "jag vet U-värdet".

### Exempel 3: Vind 200 → 500 mm, 100 m² (facit: Rockwool och faktabladet)

Indata, läge känt U: tak, U före 0,184, U efter 0,078 (Rockwool, tilläggsisoleringstabell 25 kg/m³, raden mineralull 200 mm, plus 300 mm), 100 m².

| Gradtimmar | kWh/år | kr/år | Källa |
|---|---|---|---|
| **89 280, Mellansverige (räknarens standard)** | **946** (946,37) | **2 271** (2 271,28) | egen räkning; stämmer med vindguidens "950 kWh, drygt 2 200 kr" |
| 71 424, södra | 757 (757,09) | 1 817 | egen räkning |
| 120 528, norra | 1 278 (1 277,60) | 3 066 | egen räkning |
| 81 357, Stockholm, månadsmetod | 862 (862,38) | 2 070 (2 069,72) | faktablad avsnitt 8, egen räkning |

**Obs till beställaren.** Uppdragets facit 862 kWh och 2 070 kr bygger på 81 357 gradtimmar (egen räkning ur SMHI för Stockholm), inte på Rockwools 89 280 som artikeln och vindguiden använder. Räknaren med artikelns gradtimmar ger 946 kWh och 2 271 kr. Testet ska låsa 946 och 2 271. Ska 862 och 2 070 användas måste räknaren ha ortsval med SMHI-talen, och då säger den något annat än artikeln. Rekommendation: lås mot 946 / 2 271.

Återbetalning, egen läggning, Vindsull 300 mm: 100 × 300 × 0,8379 = **25 137 kr** → 25 137 / 2 271,28 = **11,1 år**. Firma: 150 kr/m² → 15 000 kr → **6,6 år**; 500 kr/m² → 50 000 kr → **22,0 år** (samma som faktablad avsnitt 8 och vindguidens "sju och tjugotvå år").

Värmepump luft-luft (5.1): 946,37 / 5,0 × 2,40 = **454 kr**, 946,37 / 3,5 × 2,40 = **649 kr**.

Läge skikt, samma vind (kontroll, egen räkning, faktablad avsnitt 8): tak, gips 13 mm, mineralull 200 mm (0,037), Rsi 0,10, Rse 0,04 → R 5,5996, **U 0,179**. Plus lösull Granulate 300 mm (0,041) → R 12,9166, **U 0,077** (0,07742). Skillnaden mot Rockwools 0,184 / 0,078 är takstolarna, som skiktläget inte har. Testet ska inte kräva 0,184 i skiktläget.

Jämförelse: 0,184 > tak 0,13; 0,078 ≤ 0,13 i båda kolumnerna.

### Exempel 4: Fönster, bara jämförelse och besparing (facit: artikeln)

Indata, läge känt U: fönster, Uw före 2,8, Uw efter 0,9, 1,5 m², Mellansverige. Inga skikt: räknaren ska inte låta fönster byggas av skikt (Uw räknas enligt EN ISO 10077, faktablad 13.1).
- kWh = 1,9 × 1,5 × 89 280 / 1 000 = **254** (254,45). Artikeln: "omkring 250".
- kr = **611** (610,68). Artikeln: "610 kr". Tio fönster: 6 107 kr, artikeln "drygt 6 000".
- Jämförelse: 2,8 > 1,2 och > 1,1. 0,9 ≤ båda. Ett fönster med **1,15** klarar BBR:s 1,2 men inte BFS 2026:9:s 1,1: bra testfall för att kolumnerna skiljer.
- Kontroll mot artikelns stycke om Energimyndighetens metod: 1,5 m², U 1,0 → 1,5 × 1,0 × 89 280 / 1 000 = **134** kWh (133,92). Artikeln: 134. (Energimyndighetens egen metod ger 170, 1,5 × 1,0 × 113 880 / 1 000 = 170,8; räknaren använder inte den.)

### Exempel 5: Golv, bjälklag, skikt (facit: egen räkning, ingen artikel har exakt detta)

Indata: golv, 80 m², Mellansverige. Före: golvspån trä 22 mm (0,14), mineralull 145 mm (0,037). Efter: samma plus 50 mm mineralull (0,037) utan reglar. Rsi 0,17, Rse 0,04 (se 1.1 om krypgrund).
- Före: R = 0,17 + 0,15714 + 3,91892 + 0,04 = 4,28606 → **U 0,233**
- Efter: R = 4,28606 + 1,35135 = 5,63741 → **U 0,177**
- kWh = 0,05593 × 80 × 89 280 / 1 000 = **399** (399,46); kr = **959** (958,71). Med avrundade U (0,233 − 0,177 = 0,056) blir det 400 kWh; testet ska räkna oavrundat.
- Jämförelse: 0,233 > golv 0,15; 0,177 > 0,15 i båda kolumnerna. Bra fall för "bättre men når inte målet".
- Återbetalning, ANTAGANDE (skivpris 45 mm används för 50 mm, 0,999 kr/m²/mm): 80 × 50 × 0,999 = 3 996 kr → 4,2 år. Gäller bara ullen.
- Förhållande till krypgrundsguiden: den använder Rockwools krypgrundstabell 0,26 → 0,18 och 100 000 gradtimmar, 800 kWh och ungefär 1 900 kr på 100 m². Med räknarens 89 280 blir samma fall **714 kWh och 1 714 kr** (egen räkning, 0,08 × 100 × 89 280 / 1 000). Räknaren och krypgrundsguiden säger alltså olika tal för samma fall. Beslut för koordinatorn: krypgrundsguiden bör byta till 89 280 eller säga varför den inte gör det.

### Exempel 6: Luftspalt räknas bort (facit: artikeln, mellanreglarvärdet)

Indata: vägg, inga reglar. Skikt inifrån: gips 13 mm (0,24), mineralull 120 mm (0,037), luftspalt ventilerad, trä 22 mm (panel).
- Förväntat: panelen räknas inte, Rse 0,13. R = 0,13 + 0,05417 + 3,24324 + 0,13 = 3,55741 → **U 0,281** (artikeln: "0,281" mellan reglarna).
- Samma utan panel ska ge exakt samma U. Samma utan luftspalt (gips, ull, panel direkt, Rse 0,04) ger R 3,62455 → U 0,276 (egen räkning, 0,13 + 0,05417 + 3,24324 + 0,15714 + 0,04). Testet ska visa att luftspalten slår bort panelen och byter Rse.
- Luftspalt vald två gånger: ogiltig.

### Exempel 7: Utanför gränserna (facit: avsnitt 8)

| Indata | Förväntat |
|---|---|
| Ett skikt 700 mm | `ogiltig`, fel på skiktets tjocklek |
| Ett skikt 5 mm | `ogiltig`, fel på skiktets tjocklek |
| Sju skikt | `ogiltig`, fel på antal skikt |
| Area 0 och area 600 m² | `ogiltig`, fel på arean |
| Tjocklek "12,5" (decimalkomma) | tolkas som 12,5 mm, giltig |
| Area "abc" | `tolkaQuery` faller tillbaka på standardvärde, standardvarningen visas |
| U efter ≥ U före (till exempel vind 0,078 före, 0,184 efter) | U och jämförelse visas, ingen besparing eller återbetalning (avsnitt 5) |

---

## 8. Gränser för fälten

| Fält | Gräns | Källa |
|---|---|---|
| Tjocklek per skikt | 10 till 600 mm | Beställarens gräns. ANTAGANDE i sak: 10 mm släpper in gips 12,5 och 13; 600 mm täcker vindens 500 mm (exempel 3) |
| Antal skikt | 1 till 6, luftspalt räknas som skikt | Beställarens gräns. ANTAGANDE: luftspalten räknas in |
| Luftspalt | högst en, bara vägg | avsnitt 1.1, ANTAGANDE för tak och golv |
| Skikt med reglar | högst ett, andel 0 eller 12 procent | avsnitt 1.2, ANTAGANDE |
| Area | 1 till 500 m² | Beställarens gräns |
| Känt U-värde, vägg, tak, golv | ANTAGANDE: 0,05 till 3,0 W/m²K. Ingen källa för gränsen. Energimyndighetens sämsta väggtyp är 1,30 (resvirkesvägg, ET 2025:06 s. 10), vindsbjälklag 0,50 | förslag |
| Känt U-värde, fönster och dörr | ANTAGANDE: 0,5 till 6,0 W/m²K. Energimyndighetens tabell: enkelt glas 5,0–6,0, energifönster 0,6–0,9 (ET 2025:01 tabell 1, s. 5) | förslag |
| Del av landet | Mellansverige (standard), södra, norra | avsnitt 3.1 |
| Uppvärmning | direktverkande el (standard), värmepump per typ, annan | avsnitt 5.1 |
| Elpris | läses från antaganden.ts; eget fält ANTAGANDE, se 3.2 | |

Standardvärden, förslag (ANTAGANDE, beslut för UX): artikelns vägg (exempel 1) som före-läge, så att en tom adress ger artikelns 0,357.

---

## 9. Eget antagande, samlat

1. ΔU-korrektionerna sätts till 0.
2. Luftspalt bara för vägg, bara ventilerad, högst en.
3. Tak mot kallvind och golv mot krypgrund räknas med Rse 0,04 som i artikeln; standardens metod för vindsutrymme och mark (ISO 13370) är inte hämtad.
4. Reglar: högst ett skikt, 12 procent eller inga.
5. Cellulosa 0,040, spannets sämre ände.
6. Vindsull (0,042) som valfritt material, inte i artikelns tabell.
7. Värmepump: hela besparingen antas komma från värmepumpen; spann per typ, inget medelvärde.
8. Exakt åtgång, inte hela förpackningar; kostnaden gäller bara ullen.
9. Skivpris per mm från närmaste tjocklek.
10. Firmapris bara för tak, två tider.
11. Ingen besparing när U efter ≥ U före.
12. Gränserna för känt U-värde och eventuellt elprisfält.
13. Båda Boverkskolumnerna visas i stället för datumstyrning.
14. Två lägen: skikt och känt U.

## 10. Saknar källa

- λ för tegel.
- Aktuellt tillverkardatablad för cellulosa.
- Motstånd för oventilerade och svagt ventilerade luftspalter per tjocklek; kravet för "väl ventilerad".
- Övergångsmotstånd och metod för kallvind och golv mot krypgrund eller mark (SS-EN ISO 6946 och 13370 är inte lästa, betalda).
- Regelandel annat än 12 procent.
- Värmepumpens andel av husets värme (spets, luft-luft som bara värmer en del).
- Pris per kWh för fjärrvärme, ved, pellets och olja.
- Firmapris för vägg, golv och fönster; Helsingborgs vindspann är från 2021.
- Pris för reglar, läkt, gips, ångbroms och annat material utöver ullen.
- Gränser för känt U-värde och elpris.

## 11. Sidor som inte gick att läsa

- Isover, användarmanual för U-värdesberäknaren: 403 (2026-09-22, faktabladet).
- Bauhaus Flexibatts: förpackningspriset på sidan stämmer inte med arean; bara jämförpriset används.
- Rockwools vindsida gav i dag bara 150 mm-raden i sammanfattningen; 300 mm-raden (0,184 → 0,078, 9,46) är läst 2026-09-22 och inte omläst.
