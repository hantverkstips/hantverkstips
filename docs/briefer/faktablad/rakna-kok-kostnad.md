# Faktablad och räknarunderlag: /rakna/kok-kostnad/

Ny räknare. Allt hämtat och läst 2026-09-28 om inget annat står. Checklista: `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnittet /rakna/kok-kostnad/, och SOKORDSANALYS 8.5. Formelmodulen delas med `/rakna/badrum-kostnad/` (`src/lib/kalkyl/renovering.ts` enligt checklistan). Värdartikel: `/kok/byta-koksluckor/` (`guider-byta-koksluckor.md`). Luckpriser och måla-alternativen: `guider-mala-koksluckor.md` avsnitt 7.

**Filnamn:** beställningen sa `docs/briefer/faktablad/rakna-kok-kostnad.md`. Checklistan (raknare.md punkt 11) och skillen `nytt-verktyg` säger `docs/briefer/underlag-kalkyl-kok-kostnad-[datum].md`. Innehållet här är räknarunderlaget; koordinatorn avgör om filen ska flyttas eller kopieras.

Märkning: **Källa** = hämtat tal med adress och datum. **Egen räkning** = formel står bredvid. **ANTAGANDE** = vårt val utan källa, ska stå i antagandetabellen. **STOPP** = posten har inte två läsbara källor, vilket enligt raknare.md punkt 3 stoppar posten och därmed räknaren tills underlaget har dem.

---

## 1. Rotavdraget: importeras, skrivs inte om

Ur `src/lib/kalkyl/rotavdrag.ts` (Skatteverket, lästa där):
- `ROT_PROCENT` = 30, `ROT_TAK_KR` = 50 000 per person och år, `GEMENSAMT_TAK_KR` = 75 000 per person och år med rut.
- Fälten antal ägare och utnyttjat i år (rot, rut) som i `/rakna/rotavdrag/`.
- Rot 50 procent gällde bara betalningar 12 maj till 31 december 2025.

Vad som är rotarbete i ett kök. Skatteverket, Ger arbetet rätt till rotavdrag, https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html (läst 2026-09-28, ordagrant):

| Arbete | Besked | Avsnitt på sidan |
|---|---|---|
| "byta och reparera köksluckor, dörrar, dörrlås, dörrhandtag och fönsterbleck" | avdrag | Småhus, Bygg, reparera och underhålla |
| "montera fast köks- och badrumsinredning samt installera vitvaror i samband med omfattande byggarbete eller renovering" | avdrag | Småhus, Bygga om och bygga till |
| "riva väggar och bygga om planlösningen i ett hus" | avdrag | samma |
| "måla eller lacka dörrar och köksluckor" | avdrag | Målning och tapetsering |
| "måla eller lacka dörrar och köksluckor i företagets lokaler" | **inget avdrag** | samma |
| "modernisera el samt byta och montera vägguttag" | avdrag | El |
| "dra in och reparera el-, vatten- och avloppsledningar …" | avdrag | VVS |
| "installera och reparera … blandare, kranar …" | avdrag | VVS |
| "dra vatten- och avloppsledningar, oavsett om ledningarna går i eller utanpå väggen" | avdrag | Bostadsrätt, VVS |
| "reparera tvättmaskiner, torktumlare och diskmaskiner" | inget rot (hänvisar till rut) | VVS, inget avdrag |
| "sätta kakel och klinker" | avdrag | Bygg |
| "betala för maskinell utrustning" | inget avdrag | Gräv- och markarbete |
| "enbart felsöka" (el) | inget avdrag | El |

Villkor som styr köket:
- "Om bostaden är yngre än fem år får arbetet endast syfta till att återställa byggnaden till det skick den var i från början. Om material byts ska det nya vara likvärdigt med det gamla."
- Ombyggnad: "Bostaden ska vara äldre än fem år." (Bygga om och bygga till.)
- Bostadsrätt: arbetet "innanför väggar, tak och golv" och ägaren ska ha underhållsansvaret enligt stadgarna.
- Material ger inget avdrag (konstanterna i rotavdrag.ts).

**Följd för räknaren:** vitvarornas installation är rotarbete bara "i samband med omfattande byggarbete eller renovering". I vägen "byta luckor" ska vitvaruinstallation inte vara rotarbete utan det villkoret. Lackering i verkstad ger inget rot.

---

## 2. Vad en lekman får göra: el och vatten

**Elsäkerhetsverket**, Vad får jag göra själv med el?, https://www.elsakerhetsverket.se/privatpersoner/detta-far-du-gora-sjalv-med-el/vad-far-jag-gora-sjalv-med-el/ (senast granskad 2025-07-30), ordagrant:
- "Vid förändringar i den fasta elinstallationen, till exempel ett uttag i köket och elledningar i väggar, ska ett registrerat elinstallationsföretag alltid anlitas."
- Får göras själv, med kunskap: byta propp, glödlampor, lamphållare, "Byta fast ansluten ljusarmatur i torra utrymmen i bostäder", skarvsladdar, stickproppar, "Byta befintlig strömbrytare för högst 16 A som är placerad i en egen kapsling eller dosa", "Byta befintligt vägguttag för högst 16 A som är placerat i en egen kapsling eller dosa."
- Elinstallationsarbete omfattar "att fast ansluta en elektrisk produkt till en elanläggning" och att koppla loss den.
- **Spis och häll nämns inte uttryckligen på sidan.** Att fast ansluta en häll är "fast ansluta en elektrisk produkt", alltså elinstallationsarbete. Vår slutsats ur lagtexten som sidan citerar, inte Elsäkerhetsverkets egen mening om häll. Hantverkskollens påstående att Elsäkerhetsverket "kräver" elektriker för häll och ugn är Hantverkskollens tolkning.

**Säker Vatten**, Branschregler Säker Vatteninstallation 2026:1, https://sakervatten.se/branschregler2026/ (läst 2026-09-28):
- "Branschregler Säker Vatteninstallation 2026:1 gäller från den" [1 januari 2026, datumet i sidans rubrikblock].
- Branschregler, **inte lag**. De gäller auktoriserade VVS-företag: "De VVS-företag som gör en Säker Vatteninstallation ska vara auktoriserade." "Det är endast det auktoriserade VVS-företaget som utfört arbetet som kan utfärda intyg om Säker Vatteninstallation."
- Kök: "Tappvattenledningar till kök ska utföras utan fogar fram till diskbänkskåp eller vattenansluten utrustning." Läckage från fogar ska mynna ut på vattentätt golv, "vattentät insats i diskbänkskåp" eller "uppsamlande tråg i eller under diskbänkskåp".
- Diskmaskin: "Diskmaskin samt fogar på vatten och avloppsanslutningar ska placeras över ett uppsamlande tråg." "Diskmaskinen ska förses med en avstängningsventil med lätt åtkomlig manöveranordning."
- Köksblandare: pipens svängradie begränsad så att vattnet rinner i diskbänkens lådor; anslutningsrör ska klamras.
- **Säker Vatten förbjuder inte en privatperson att byta blandare.** Checklistans formulering "fast vatten gör en behörig, enligt … Säker Vatten 2026:1" har inte stöd i den formen. Det som har stöd: intyg om Säker Vatteninstallation kan bara ett auktoriserat företag utfärda. Försäkringsvillkor hämtades inte för kök; `guider-mala-kakel.md` avsnitt 7 har Folksam, If och Trygg-Hansa för våtrum.

---

## 3. Posterna, med pris, källa och datum

Alla priser inkl. moms om inget annat står.

### 3a. Luckor per styck (väg A), tre nivåer

| Nivå | Källa 1: IKEA 60×80 | Källa 2: Vedum 696×596 |
|---|---|---|
| Låg | 289 kr (VALLSTENA) | 390 kr (grupp 1) |
| Mellan | 709 kr (BODBYN) | 1 444 kr (grupp 5) |
| Hög | 969 kr (VOXTORP) | 3 673 kr (grupp 10) |

IKEA: https://www.ikea.com/se/sv/cat/luckor-23613/ (2026-09-28). Vedum: luckprislista 2026, s. 12, "inklusive moms", "Gångjärn ingår inte", https://www.vedum.se/globalassets/dokument/kok/luckprislista/luckprislista_2026.pdf. Spannet mellan källorna är stort i mellan- och högnivån; redovisa båda, inget medelvärde. Tredje källa för spann: Hantverkskollen 2026-04-27, folierad MDF 150–350, lackad MDF 500–900, massivt trä 1 000–2 500 kr/st.

Gångjärn: IKEA UTRUSTA 159 kr / 2 st; Vedum Grass 169 kr / st. Två per lucka (IKEA: "Komplettera med 2 gångjärn"). Handtag: **saknas**.

Montering luckor (arbete):
- Totalbyggarna: 350 kr/h efter rot inkl. moms → **500 kr/h före rot** (egen räkning 350 / 0,7); fast pris 7 500 kr före rot (5 250 / 0,7) för 15 debiterbara timmar. https://www.totalbyggarna.se/smatjanster/byta-koksluckor-befintlig-stomme-pris/ (odaterad)
- Hantverkskollen: 15–20 luckor 6–10 h; median 625 kr/h (2026-07-17, moms ej angiven). https://www.hantverkskollen.se/artiklar/snickare/snickare-koksluckor-byta-kostnad-vad-kostar-det-att-luckor-istallet-for-hela-koket
- Clas Fixare: från 650 kr/h (odaterad).
- ANTAGANDE för formeln: timmar = antal luckor / 20 × 8 (Hantverkskollen "cirka 20 luckor per dag", arbetsdag 8 h är vårt antagande). 16 luckor → 6,4 h.

### 3b. Bänkskiva per löpmeter (väg B)

| Material | Källa 1: Kitchens.se (maj 2026), kr/löpmeter, 60–63 cm djup, material | Källa 2: Hantverkskollen (2026-07-17), kr/löpmeter **inkl. montering** | Källa 3: Totalbyggarna (2026-03-30), kr/**m²** |
|---|---|---|---|
| Laminat | 500–1 500 | 1 200–2 500 | 500–1 500 |
| Massivt trä | 1 200–3 500 | 2 500–5 000 | 1 500–4 000 |
| Kvartskomposit | 2 000–5 000 | 4 000–7 000 | 2 500–6 000 |
| Granit | 2 500–6 000 | 5 000–9 000 | 3 000–8 000 |
| Keramik | 2 500–7 000 | ej angivet | 4 000–9 000 |

- Kitchens.se: https://kitchens.se/inspiration/vad-kostar-en-bankskiva-prisguide-sten-komposit-keramik/ ; totalpris 3–4 m inkl. montering: laminat 3 000–8 000, trä 7 000–18 000, kvarts 12 000–28 000 kr. Kitchens.se säljer bänkskivor.
- Hantverkskollen: https://www.hantverkskollen.se/artiklar/snickare/snickare-komplett-guide-koksrenovering-kostnad-priser-tips-och-rad-2026
- Totalbyggarna: https://www.totalbyggarna.se/blogg/kok-bankskiva/ ; montering 500–2 000 kr per löpmeter; rot bara på arbetet.
- **Källorna säger olika om laminat**, som checklistan förutsåg. Totalbyggarna räknar per m², de andra per löpmeter. Vid 0,6 m djup blir Totalbyggarnas laminat 300–900 kr/lm (egen räkning 500 × 0,6 och 1 500 × 0,6). Hantverkskollen inkluderar montering. Redovisa spannet med enheten, räkna aldrig medelvärde.
- Montering bänkskiva, två källor: Totalbyggarna 500–2 000 kr/lm; Hantverkskollen (differens mot material, inte angivet separat). **Bara en källa anger monteringen separat → STOPP för separat monteringspost**, eller använd Hantverkskollens inkl.-pris som en rad och Kitchens.se-totalen som den andra.

### 3c. Stommar per meter (väg C)

- **IKEA METOD, egen räkning:** en 60 cm modul = bänkskåp 60×60×80 599 kr + väggskåp 60×37×80 509 kr + två VEDDINGE 60×80 à 439 kr + två UTRUSTA-par à 159 kr = 2 304 kr. Per meter: 2 304 / 0,6 = **3 840 kr/m**. Formel: (bänkskåp + väggskåp + 2 × lucka + 2 × gångjärnspar) / 0,6. Priser ikea.com 2026-09-28. Utanför: ben, sockel, täcksidor, lådor, upphängningsskena, handtag. ANTAGANDE: ett bänkskåp och ett väggskåp per 60 cm.
- Hantverkskollen (2026-07-17): IKEA METOD utan vitvaror "20 000–40 000 kr för material"; stommar 45 000–90 000 kr för ett kök på 11–15 kvm (material). Inga meter angivna.
- Offerta (2026-09-25): skåpsystem 70 000–250 000 kr. Inga meter.
- **STOPP:** stommar och luckor per meter i mellan- och högnivå har ingen källa per meter. Två vägar för UX och bygge-agenten: fråga efter kökets storlek i nivåer (litet, normalt, stort) och använd källornas totalspann, eller låt köksmetrar styra bara budgetnivån. Beslutet är deras.

### 3d. Vitvaror (material)

| Källa | Spann | Datum |
|---|---|---|
| Hantverkskollen, Nytt kök kostnad | kyl/frys 5 000–25 000, ugn 3 000–20 000, induktionshäll 3 000–15 000, diskmaskin 4 000–18 000, fläkt 2 000–12 000; paket **17 000–90 000** | uppd. 2026-07-17, https://www.hantverkskollen.se/artiklar/snickare/snickare-nytt-kok-kostnad-vad-kostar-ett-helt-fran-grunden (moms ej angiven) |
| Totalbyggarna, IKEA kök pris | budgetpaket **15 000–25 000**, premium **30 000–50 000** | 2026-03-30, uppd. 2026-06-29, https://www.totalbyggarna.se/blogg/ikea-kok-pris/ |

Installation av vitvaror (arbete): Golonka (sonochfar.se, 2026-04-07) en vitvara 3 000–8 000 kr, alla standardvitvaror 25 000–80 000 kr före rot, "vitvarorna ingår nästan aldrig i arbetspriset". Clas Fixare: installera diskmaskin 2 250 kr, byta häll 1 700 kr (odaterat). **Två källor, men olika detaljnivå.**

### 3e. Montering nytt kök (arbete)

| Källa | Spann före rot | Datum |
|---|---|---|
| Hantverkskollen, komplett guide | montering/snickeri 25 000–55 000 (30–50 h) | 2026-07-17 |
| Hantverkskollen, nytt kök | 25 000–50 000 (40–80 h) | 2026-07-17 |
| Totalbyggarna, IKEA kök pris | litet 15 000–20 000, mellan 20 000–30 000, stort 25 000–40 000 | 2026-06-29 |
| Offerta | snickare/montering 10 000–100 000 | 2026-09-25, https://offerta.se/bygg-och-renovering/koksrenovering/vad-kostar-det-att-renovera-koket |

### 3f. Rivning och bortforsling (arbete)

- Hantverkskollen (komplett guide, 2026-07-17): rivning 8 000–18 000 kr, rotberättigad. Hantverkskollen (nytt kök): besparing om man river själv 8 000–15 000 kr.
- Husexperter: rivning och bortforsling ingår i arbetskostnaden, inget eget tal. https://www.husexperter.se/pris/vad-kostar-koksrenovering (odaterad)
- **STOPP:** bara en utgivare (Hantverkskollen, två artiklar). Container: **saknas**.

### 3g. El vid ändrad planlösning (arbete)

| Källa | Spann | Datum |
|---|---|---|
| Hantverkskollen, komplett guide | el 8 000–20 000; elektriker 850–1 100 kr/h inkl. moms | 2026-07-17 |
| Hantverkskollen, nytt kök | flytta uttag 2 000–5 000, installera häll/ugn 3 000–7 000, nytt uttag 1 500–3 500, ny grupp 5 000–15 000, ventilation 4 000–10 000 | 2026-07-17 |
| Offerta | elektriker 15 000–30 000 | 2026-09-25 |

### 3h. VVS vid flytt av diskbänk (arbete)

| Källa | Spann | Datum |
|---|---|---|
| Hantverkskollen, komplett guide | VVS 8 000–25 000; rörmokare 900–1 150 kr/h inkl. moms | 2026-07-17 |
| Hantverkskollen, nytt kök | flytt av diskbänk 5 000–20 000 | 2026-07-17 |
| Offerta | rörmokare/VVS 3 000–30 000 | 2026-09-25 |

Offerta räknar elektriker och rörmokare som arbetskostnad. Hantverkskollen delar inte upp el och VVS i arbete och material. **ANTAGANDE:** el- och VVS-posterna räknas som 100 % arbete. En källa (Offerta) stöder det.

### 3i. Timpriser (för egen insats och kontroll)

| Yrke | Hantverkskollen (2026-07-17, inkl. moms) | Andra |
|---|---|---|
| Snickare, köksmontör | 550–688 kr/h, median 625 | Totalbyggarna 500 kr/h före rot (omräknat); Clas Fixare från 650 |
| Elektriker | 850–1 100 | |
| Rörmokare | 900–1 150 | Hantverkskollen (annan artikel) 700–1 100 |
| Plattsättare | 750–1 000 | |

Hantverkskollen: storstad 10–20 % över riksmedianen.

### 3j. Andel arbete (kontroll av totalen)

- BraByggare (2026-04-28): "Material står typiskt för 55–65 procent av totalpriset, arbete för 35–45 procent." https://www.brabyggare.se/info/vad-kostar-koksrenovering-2026/
- Husexperter (sökmotorns utdrag): "35–45 procent av totalpriset vara arbete" (utdrag). Husexperters tabell (läst): 10 kvm arbete 70 000–90 000, material 60 000–90 000 kr, där arbetet anges efter rot.
- Offerta: arbete 60 000–120 000 och material 140 000–300 000 kr för en totalrenovering.
- Hantverkskollen: exempel 12 kvm, cirka 175 000 kr totalt, arbete cirka 80 000 kr, rot 24 000, netto 151 000.

### 3k. Totalspann (kortsvaret, kontroll)

| Källa | Ytrenovering | Luckor + bänkskiva | Totalrenovering | Datum |
|---|---|---|---|---|
| Offerta | 25 000–60 000 (lacka eller foliera + ny bänkskiva) | 60 000–120 000 | 150 000–350 000 (10–15 kvm) | 2026-09-25 |
| Hantverkskollen | | 15 000–55 000 (luckor och bänkskiva) | 130 000–230 000 (11–15 kvm) | 2026-07-17 |
| BraByggare | 80 000–150 000 (budget) | | 150 000–300 000 (mellan), 300 000–600 000+ | 2026-04-28 |
| Clas Fixare | 50 000 (IKEA) | | 150 000–300 000 | odaterad |

Offerta och Hantverkskollen skiljer sig med en faktor fyra på "luckor och bänkskiva". Redovisa båda.

---

## 4. Formler

Alla belopp i kronor inkl. moms. Varje post har `arbete` och `material` för sig.

**Väg A, byta luckor på befintlig stomme:**
- material = antal_luckor × pris_lucka[nivå] + antal_luckor × 2 × pris_gångjärn (om gångjärn byts)
- arbete = timmar × timpris, där timmar = antal_luckor / 20 × 8 (ANTAGANDE ur Hantverkskollen), timpris 500 kr före rot (Totalbyggarna, omräknat) eller 625 (Hantverkskollen median)
- Alternativ: fast pris 7 500 kr före rot (Totalbyggarna) för ett normalkök.

**Väg B, byta bänkskiva:**
- material = löpmeter × pris_lm[material]
- arbete = löpmeter × montering_lm (Totalbyggarna 500–2 000; STOPP som separat post, se 3b)

**Väg C, nytt kök:**
- material = köksmeter × stommar_luckor_per_m[nivå] + bänkskiva (väg B) + vitvaror[nivå]
- arbete = montering[nivå] + rivning (om ja) + el (om planlösningen ändras) + VVS (om diskbänken flyttas)
- ANTAGANDE: bänkskivans längd = köksmeter om läsaren inte anger den.

**Egen insats:** ANTAGANDE. En post som läsaren gör själv får arbete = 0 och inget rot. El och VVS kan inte väljas som egen insats (Elsäkerhetsverket; för VVS se 2, bara intyg och försäkring, ingen lag).

**Rotavdraget (som `/rakna/rotavdrag/`):**
- rot = min(ROT_PROCENT/100 × summa_arbete, ROT_TAK_KR × ägare − utnyttjat_rot, GEMENSAMT_TAK_KR × ägare − utnyttjat_rot − utnyttjat_rut), aldrig under 0
- att betala = summa_material + summa_arbete − rot
- Avrundning till hel krona som i rotavdrag.ts.

---

## 5. Räkneexempel att testa mot (egen räkning)

**Ex 1, väg A.** 16 luckor Vedum grupp 1 (390), Grass-gångjärn 169 × 32, Totalbyggarnas fasta pris 7 500 före rot, en ägare, inget utnyttjat.
- material 6 240 + 5 408 = 11 648
- arbete 7 500; rot 0,3 × 7 500 = 2 250
- att betala 11 648 + 7 500 − 2 250 = **16 898**

**Ex 2, väg A med formeltimmar.** 16 luckor IKEA VALLSTENA 289, UTRUSTA 16 × 159, timmar 16 / 20 × 8 = 6,4, timpris 500.
- material 4 624 + 2 544 = 7 168
- arbete 6,4 × 500 = 3 200; rot 960
- att betala 7 168 + 3 200 − 960 = **9 408**

**Ex 3, väg B.** Laminat 4 lm, Kitchens.se 500–1 500/lm, montering Totalbyggarna 500–2 000/lm.
- material 2 000–6 000; arbete 2 000–8 000; rot 600–2 400
- att betala **3 400–11 600**. Kitchens.se:s egen total för 3–4 m laminat inkl. montering: 3 000–8 000.

**Ex 4, väg C budget.** 4,8 m IKEA (8 moduler), vitvaror Totalbyggarna budget, laminat 4,8 lm Kitchens.se, montering Totalbyggarna mellan, ingen rivning, ingen flytt.
- stommar och luckor 8 × 2 304 = 18 432
- vitvaror 15 000–25 000; bänkskiva 2 400–7 200
- material 35 832–50 632
- arbete 20 000–30 000; rot 6 000–9 000
- att betala **49 832–71 632**

**Ex 5, rot-taket och två ägare.** Summa arbete 200 000, inget utnyttjat.
- En ägare: min(60 000, 50 000, 75 000) = **50 000** (rot-taket slår i).
- Två ägare: min(60 000, 100 000, 150 000) = **60 000** (procenten styr).

**Ex 6, flytt av diskbänk och ny elgrupp** läggs på Ex 4: el 5 000–15 000 (Hantverkskollen, ny grupp), VVS 5 000–20 000 (Hantverkskollen, flytt av diskbänk). Arbete ökar med 10 000–35 000, rot med 3 000–10 500.

---

## 6. Gränser (ANTAGANDE, rimlighetskontroll, inte regler)

- Antal luckor 1–60.
- Köksmeter 1–15.
- Bänkskiva 0,5–15 löpmeter.
- Ägare 1–4, utnyttjat 0–500 000 kr (som rotavdragsräknaren).
- Standardvärden: väg A, 16 luckor (checklistans kök), låg nivå, en ägare. 16 luckor är checklistans antal, inte en källa.

---

## 7. Antagandetabellens rader (underlag till "Vad siffrorna vilar på")

| Storhet | Värde | Grund |
|---|---|---|
| Rotprocent, tak | 30 %, 50 000, 75 000 | Källa: Skatteverket via rotavdrag.ts |
| Lackering i verkstad | inget rot | Källa: Skatteverket |
| Vitvaruinstallation | rot bara vid omfattande renovering | Källa: Skatteverket |
| Luckor per styck | IKEA 289/709/969, Vedum 390/1 444/3 673 | Källa: ikea.com, Vedum prislista 2026 |
| Gångjärn | 159 kr/2 st, 169 kr/st | Källa: IKEA, Vedum |
| Montering luckor | 500 kr/h före rot, 20 luckor per dag | Källa: Totalbyggarna (omräknat), Hantverkskollen; arbetsdagen 8 h ANTAGANDE |
| Bänkskiva per lm | spann per material, tre källor, olika enheter | Källa |
| Stommar per meter | 3 840 kr/m IKEA budget | Egen räkning ur IKEA-priser; mellan och hög STOPP |
| Vitvaror | 15 000–25 000 / 30 000–50 000; 17 000–90 000 | Källa: Totalbyggarna, Hantverkskollen |
| Montering nytt kök | 15 000–55 000 | Källa: Hantverkskollen, Totalbyggarna, Offerta |
| Rivning | 8 000–18 000 | Källa: Hantverkskollen (en utgivare, STOPP) |
| El, VVS vid flytt | se 3g, 3h | Källa; 100 % arbete ANTAGANDE |
| Bänkskivans längd = köksmeter | | ANTAGANDE |
| Gränser, standardvärden | | ANTAGANDE |

---

## 8. Sökanalys: renovera kök kostnad

Ordningen i google.se är inte kontrollerad.

1. **offerta.se** (2026-09-25, offertförmedlare). Har: tre nivåer 25 000–350 000, el och VVS som arbete, rot rätt med Skatteverket. Saknar: räknare, per post, två ägare.
2. **clasfixare.se/vad-kostar-det-att-renovera-ett-kok/** (odaterad). Har: nivåer, tjänstepriser. Fel: "30 % av arbetskostnaden upp till 75 000 kronor per år" (nämns inte publikt).
3. **ikea.com**. Mätning 1 295 kr, förbesiktning 995 kr. Inga totalpriser.
4. **byggstart.se/pris/renovera-kok-pris** (2026). Har: 50 000–140 000, snitt 96 000. Saknar: poster, rot.
5. **brabyggare.se** (2026-04-28). Har: tre nivåer, kr/kvm, 35–45 % arbete, rot rätt. Saknar: räknare, poster.

Frågor läsaren har kvar: vad kostar mitt kök med mina val, vad blir rot för oss två, vad kostar det om diskbänken flyttas, vad sparar jag själv.

Det vår sida kan ha som ettan saknar:
- Tre vägar i samma räknare.
- Arbete och material per post, rot för en eller två ägare med utnyttjat tak.
- El och VVS som egna poster vid flytt.
- Källa och datum per pris; inget rot för verkstadslackering.

---

## 9. Proffsmagasinet

Checklistan: ingen produkt och inget reklamband på räknaren. Inget hämtat.

---

## Det som saknas eller är osäkert

- **STOPP stommar per meter, mellan och hög nivå:** ingen källa per meter.
- **STOPP rivning:** en utgivare. Container: saknas helt.
- **STOPP bänkskivans montering som egen post:** en källa (Totalbyggarna).
- Handtag: pris saknas.
- IKEA:s monteringspris 3 399 kr (checklistan): hittades inte på IKEA:s sida.
- Hantverkskollens moms: "inkl. moms" i en artikel, ej angivet i en annan.
- Elsäkerhetsverket nämner inte spis eller häll med namn.
- Säker Vatten är branschregler, inte lag; checklistans "gör en behörig" ska inte stå som krav på lekmannen.
- Vedums prislistekolumner lästa ur PDF-text, kontrolleras mot sidan.
