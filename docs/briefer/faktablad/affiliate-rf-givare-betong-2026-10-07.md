# Faktablad: RF-givare för betong (affiliate)

Beställt av affiliateagenten 2026-10-07. Ersätter ett blad om RF-mätning i betong som skrevs över av misstag. Underlag för produktval och kort; ingen publik text, ingen SQL.

Skrivet 2026-10-07 av underlag. "Läst 2026-10-07" betyder hämtat med curl (PDF med pdftotext) och läst den dagen. Citat inom citattecken är ordagranna (stavning som i källan). Märkning: **FÖRESKRIFT**, **BRANSCH**, **TILLVERKARE**, **ÅTERFÖRSÄLJARE** (generalagent eller tillverkarens dokument hos återförsäljare), **BUTIK** (bara pris, lager, leveranstext, adress), **EGEN** (egen räkning eller slutsats, formeln eller grunden utskriven), **UTDRAG** (sökmotorns sammanfattning, inte läst i källan). Ingen text här är förlaga.

Hänvisningar till hantverkarens blad `kunskap-fuktmatning-betong.md` skrivs **KFB avsnitt X**. Där finns RBK-flikarna 2, 3, 4, 12, 17, 28, GBR, BFS 2024:8, GVK och BBV med adresser; de hämtades inte om i dag utom där det står.

---

## 0. Kort

- Punkt 1–2 i det förra bladet stämmer i sak, med tre rättelser: 5–10 % står i RBK:s **auktorisationsregler** (Skanskas parallella mätningar, före RBK), inte i manualen; revision 7:2 gäller **bara flik 0, 12, 28 och 31**, resten av manualen är version 7; och givarlistan står i **flik 0 och avsnitt 2.8**, inte i flik 10 (flik 10 är rutinen för Testo).
- Punkt 3: alla tretton produktsidor svarar 200 i dag; alla pris stämmer med det förra bladet. Elva av tretton är beställningsvara (BackOrder), två i lager. Kampanjerna (CME5, Hygro-i, SAL75) gäller till och med 2026-10-19.
- Punkt 4: **HygroStick 41–90 % kunde inte bekräftas.** Båda lästa databladen säger 41–98 % (±2 %); 10–90 % gäller QuikStick. Testo 605-H1 ±3 %RH är nu läst på Nordtecs sida, men att Nordtec är generalagent står inte där.
- Ny uppgift: Proffsmagasinet säger att Hygro-i (LR13800-2) är kompatibel med "Tramex CMEXpert II"; Tramex datablad säger att Hygro-i2 används med CMEX5, MEX5 och dataloggern, **inte CME5**. Ett kort som säljer CME5 och Hygro-i som par saknar stöd.

---

## 1. RBK

### 1.1 Auktorisationen

Källa: RBK, Auktorisationsregler, ver R:15, 2025-09-19, <https://www.rbk.nu/UserFiles/Publika_dokument/Regler_2025/Auktorisationsregler_ver_R15_20250919.pdf>, läst 2026-10-07. (KFB avsnitt 3, kod RBK-R.)

| Påstående | Källa, ordagrant | Status |
|---|---|---|
| Bara en RBK-auktoriserad fuktkontrollant får göra en RBK-mätning | RBK-2 2.14 (s. 32), definition RBK-mätning: "Samtliga moment ska vara utförda av en RBK-auktoriserad fuktkontrollant och mätningen, projektet, ska vara registrerat på webbplatsen www.rbk.nu." (KFB avsnitt 3, ej läst om) | Bekräftat |
| Auktorisationen är personlig | punkt 11: "Auktorisationen är personlig och gäller i fem år från utfärdandet." Punkt 4: "Typ: Personauktorisation gällande specifik(a) mätmetod(er) avseende fuktmätning i betong och golvavjämning." | Bekräftat |
| Gäller fem år | punkt 4: "Auktorisationen gäller under 5 år."; punkt 11 ovan | Bekräftat |
| Kräver tentamen och praktiskt prov | punkt 4: "Sökande ska avlägga skriftlig tentamen jämte praktiskt prov." Punkt 8: "För att klara kunskapsprövningen krävs godkänt resultat i såväl tentamen som praktiskt prov." | Bekräftat |
| Praktiskt prov **per metod** | Reglerna säger att auktorisationen gäller "specifik(a) mätmetod(er)" och att ID-kortet visar "godkända mätmetoder" (punkt 11). Golvbranschen (GBR-RF, KFB avsnitt 11 B) om golvavjämning: "får göras först efter att fuktkontrollanten genomfört praktiskt prov och kompletterat sin auktorisation med mätmetoden." Att ett praktiskt prov krävs för **varje** borrhålsmetod (Testo, Vaisala, HumiGuard) står inte ordagrant i det lästa. | Delvis bekräftat; "per metod" kunde inte bekräftas ordagrant för betong |
| Registrering och stickprov | punkt 10: "Registrera samtliga mätprojekt i databasen på www.rbk.nu"; "Acceptera slumpmässig stickprovskontroll" | Bekräftat |

### 1.2 Blanketterna

- Källa: RBK, Fuktmätningsmanual Betong & Golvavjämning, flik 1 Syfte, version 7, 2023-02-28, gäller från 2023-03-01, <https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-7/Publika_dok/Flik_1_ver_7.pdf>, s. 1, läst 2026-10-07.
- Ordagrant: "De blanketter som finns i denna manual får endast användas för rapportering av RBK-mätningar vilket förutsätter att den som utför mätningen är RBK-auktoriserad."
- Status: **Bekräftat** (det förra bladets citat är ett utdrag ur meningen).

### 1.3 Felaktig mätning ger för låg RF; 5–10 % mellan personer

| Påstående | Källa, ordagrant | Status |
|---|---|---|
| En felaktig mätning ger för låg RF | Flik 1 (s. 1): "En felaktigt utförd RF-mätning ger oftast ett för lågt mätresultat. Detta resulterar i att materialets RF, relativa fuktighet, underskattas." Även RBK-4 4.5 (s. 12): "Ofta erhålls ett lägre RF-värde än det verkliga när ett mätfel begås." (KFB avsnitt 3) | Bekräftat med förbehållet **"oftast"**; skriv inte "alltid" |
| Olika personer med olika utrustning skilde 5–10 % RF | Auktorisationsreglerna R:15, bakgrund (s. 2): Skanska gjorde "parallella mätningar på byggarbetsplatser och i laboratorium. Man fann att mätresultaten varierade mycket. Det kunde skilja +/- 5-10% RF, relativ fuktighet, på samma plats om olika personer mätte med olika utrustning." | Bekräftat, men: talet är **±5–10 %**, det gäller **Skanskas mätningar före RBK-systemet** (odaterade i texten; samma avsnitt nämner en undersökning från 1992) och står i auktorisationsreglerna, inte i manualen |
| Efter metodbeskrivningarna | samma: "Vid mätning enligt metodbeskrivningarna konstaterades att spridningen mellan de olika mätmetoderna utförda av olika personer var inom intervallet +/- 3 % RF." | Ny uppgift, bra motvikt |

### 1.4 Manualens version och nedladdning

Källor: rbk.nu, sidan "Fuktmätningsmanual – Betong & Golvavjämning", <https://www.rbk.nu/ladda-ned/fuktmatningsmanual__36>, läst 2026-10-07; flik 31, version 7:2, 2026-06-11, <https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-72/Flik_31_ver_72.pdf>, läst 2026-10-07.

- Flik 31, ordagrant: "Samtliga dokument är daterade 2023-02-28, gäller från 2023-03-01 och har versionsbeteckning 7 utom nedanstående dokument." Undantagen: Flik 0, 12, 28 och 31, "Reviderad", version 7:2, datum 2026-06-11, gäller från 2026-09-01.
- Status för "version 7, revision 7:2 gäller från 2026-09-01": **delvis bekräftat.** Rätt formulering: manualen är version 7 (gäller från 2023-03-01); flik 0, 12 (HumiGuard), 28 (korrektion och mätosäkerhet) och 31 är reviderade till 7:2 och gäller från 2026-09-01.
- Nedladdningssidan, ordagrant: "Här kan senaste version laddas ned av de dokument som ingår i skriften Fuktmätningsmanual Betong & Golvavjämning." Och: "Dokumenten skyddas av upphovsrättslagen." Pärmen med flikar: "(Finns ej att ladda ner härifrån.)"
- Status för "gratis": **kunde inte bekräftas ordagrant.** Ordet gratis eller pris står inte på sidan. Observerat i dag: alla flikar laddades ned med curl utan inloggning och utan betalning (HTTP 200). Skriv "går att ladda ned från rbk.nu", inte "gratis".

### 1.5 Godkända givare

- Flik 0 (innehållsförteckning), version 7:2, <https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-72/Flik_0_ver_72.pdf>, läst 2026-10-07: de enda rutinerna för borrhålsmätning är "10 RF-mätning i borrhål, Testo 605-H1", "11 RF-mätning i borrhål, Vaisala HMP40S", "12 RF-mätning i borrhål, HumiGuard". Flik 8 är "bestämning av RF på uttaget prov" (används i golvavjämning, se KFB avsnitt 3).
- Flik 2, avsnitt 2.8 (s. 16), version 7, <https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-71/Flik_2_ver_7_0.pdf>, läst 2026-10-07: "En rutinbeskrivning finns upprättad för varje givare, under respektive flik, vilken ska följas steg för steg när en mätning utförs. Borrhålsmätning i kombination med ett specifikt givarfabrikat kallas i denna manual för en egen mätmetod." Underavsnitten är 2.8.1 HumiGuard, 2.8.2 Vaisala HMP40S, 2.8.3 Testo 605-H1.
- Auktorisationsreglerna punkt 9: "De mätmetoder som godkänts av RBK återfinns i Fuktmätningsmanual - Betong & Golvavjämning". Ny metod kräver dokumentation och en period av parallell användning.
- Flik 10 (Testo), version 7, <https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-71/Flik_10_ver_7_0.pdf>, s. 1, läst 2026-10-07: "RF-mätning ska ske med kapacitiv givare av fabrikatet Testo 605-H1 i kombination med tillhörande förbrukningsmaterial" (o-ring, mätrör, gummiplugg, tätningsmassa). "Artikelnummer ovan gäller vid inköp hos Nordtec Instrument AB."
- Status: **bekräftat i sak**, men källan är flik 0 och avsnitt 2.8, inte flik 10. Ordet "bara" står inte; slutsatsen att andra givare (Protimeter, Tramex, DeFelsko) inte ger en RBK-mätning är **EGEN** ur flik 0, 2.8 och regler punkt 9.

### 1.6 Borrhål, inte ytan

- RBK-2 2.1 (s. 2): "Mätning i betong ska utföras i ett borrhål i betongen och inte på betongytan." (KFB avsnitt 1, ej läst om)
- Status: **Bekräftat.** Nyans: golvavjämning mäts på uttaget prov genom hela skiktet (KFB avsnitt 3).

### 1.7 Kalibrering och egenkontroll (ny, för fuktburkarna)

- Flik 2 (s. 17), Testo 605-H1: "Givaren måste kalibreras innan den tas i bruk. Därefter måste fortlöpande egenkontroller utföras av användaren."
- Flik 2 (s. 19): "Vid RBK-mätningar ska givarna kalibreras vid RF-nivåerna 75, 85, 90 och 95 %." Kalibrering minst en gång per år (flik 10, 10.1).
- Flik 5, Rutin för egenkontroll av RF-givare, version 7, <https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-71/Flik_5_ver_7_0.pdf>, 5.1, läst 2026-10-07: "Kontrollen utförs mot en mättad saltlösning med 85 % RF." "Lämplig behållare och färdigblandad saltlösning kan köpas av en del instrumentleverantörer." Temperatur "så nära 20,0°C som möjligt", inte utanför 15,0–25,0 °C.
- Varför 85: RBK-2 (s. 21): "85% RF ofta är gällande högsta tillåtna fuktnivå för ytskikt" (KFB avsnitt 3). Egenkontroll minst en gång per månad (samma).

---

## 2. Övriga regler

| Påstående | Källa | Status |
|---|---|---|
| GBR/SVEFF: RBK-auktoriserad fuktkontrollant "skall" anlitas, åligger beställaren | Golvbranschen och Sveriges Färg och Lim Företagare, Branschrekommendationer för limning av golvbeläggningar på nya betongunderlag, inledning mars 2026, `…/limrekommendationer-inledning-2603.pdf` via <https://www.golvbranschen.se/rad-riktlinjer/limrekommendationer>. Ordagrant (KFB avsnitt 2, anmärkningar; ej läst om): "För en korrekt RF-mätning i underlaget skall en RBK-auktoriserad fuktkontrollant anlitas. OBS! Att få utfört en RF-mätning i underlaget åligger beställaren." | Bekräftat via KFB |
| Boverket BFS 2024:8 kräver ingen metod och ingen RBK | BFS 2024:8, <https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf>, läst 2026-10-07, sökt i hela texten: "RBK", "fuktkontrollant", "borrhål", "mätmetod" förekommer inte. 7 kap. 1 §: högsta tillåtna fukttillstånd, annars "en relativ fuktighet på 75 procent". 1 kap. 17 §: kontroll i färdig byggnad "genom provning, mätning eller besiktning". Boverkets vägledning "Fuktsäkerhet" nämner varken RBK eller RF-mätning i betong (KFB avsnitt 11 C). | Bekräftat |
| GVK Säkra Våtrum 2026: max 85 % RF, ingen metod, ingen RBK | GVK, Säkra Våtrum 2026, "1 Januari 2026, utgåva 1", <https://www.gvk.se/siteassets/gvk/dokument/sakra-vatrum-2026.pdf>, läst 2026-10-07. Golv 6.6.1 (s. 29): "Underlaget ska ha max 85 procents relativ fuktighet, om inte annat anges i tätskiktsleverantörens monteringsanvisning." Samma för vägg 7.4.1 (s. 33). Ingen mätmetod anges. RBK förekommer **bara i ordlistan** (s. 51): "RBK – Rådet för Byggkompetens, bland annat fuktmätning." | Bekräftat; nyans: RBK nämns i ordlistan men krävs inte |
| BBV 26:1: ingen metod, ingen RBK | Byggkeramikrådet, BBV 26:1, <https://admin.bkr.se/app/uploads/2026/05/BKR_BBV_2026_webb.pdf>, läst 2026-10-07, § 4.3 (s. 14): "Anvisning från tätskiktsleverantör avseende RF (Relativ fuktighet) ska följas." Betongen ska ha härdat minst 3 månader. "RBK" förekommer inte i texten (sökt). | Bekräftat; obs att BBV inte anger något RF-tal alls |

---

## 3. Utrustningen hos Proffsmagasinet (BUTIK)

Hämtat 2026-10-07 med `curl -s -A "Mozilla/5.0"` utan `-L`, ett anrop per adress. Adresserna togs ur kategorisidorna. Kategorisidorna med avslutande snedstreck svarade **301** till adressen utan snedstreck; utan snedstreck **200**:

- <https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare-for-betong> (200)
- <https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/givare> (200)
- <https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/ovriga-tillbehor-fuktmatare> (200)

Pris inkl. moms ur sidans strukturerade data (`offers.priceSpecification`). Lager ur `availability`. Leveranstext som den står på sidan. Kampanj: `validFrom` 2026-10-01T22:00:00Z, `validThrough` 2026-10-19T21:59:59Z, alltså 2 oktober till och med 19 oktober svensk tid (EGEN omräkning UTC+2). Ordinarie pris är märkt `StrikethroughPrice`.

Bas: `https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/`

| Produkt | Art.nr (sku) | MPN | Adress efter bas | HTTP | Pris | Kampanj | Lager | Leveranstext |
|---|---|---|---|---|---|---|---|---|
| Testo 605 RBK fuktmätarkit utan RBK-kalibreringscertifikat | LA13350 | 605 RBK | `fuktmatare-for-betong/testo-605-rbk-fuktmatarkit-utan-rbk-kalibreringscertifikat-la13350` | 200 | 11 013 kr | – | BackOrder | "Skickas om 8-12 dagar" |
| Testo 605-H1 givare | LA13360 | 605-H1 | `givare/testo-605-h1-givare-la13360` | 200 | 1 659 kr | – | BackOrder | "Skickas om 9-14 dagar" |
| Protimeter HygroMaster II med HygroStick | LA13043-1 | HygroMaster II | `fuktmatare-for-betong/protimeter-hygromaster-ii-fuktmatare-med-hygrostick-la13043-1` | 200 | 7 515 kr | – | BackOrder | "Skickas om 8-12 dagar" |
| Protimeter HygroMaster II med QuikStick | LA13043-2 | HygroMaster II | `fuktmatare-for-betong/protimeter-hygromaster-ii-fuktmatare-med-quikstick-la13043-2` | 200 | 7 371 kr | – | BackOrder | "Skickas om 8-12 dagar" |
| Tramex CME5 | LA13821 | CME5 | `fuktmatare-for-betong/tramex-cme5-fuktmatare-la13821` | 200 | 9 239 kr | **7 853 kr** t.o.m. 2026-10-19 | BackOrder | "Skickas om 8-12 dagar" |
| Tramex Hygro-i RF-givare 3-pack | LR13800-2 | Hygro-i | `givare/tramex-hygro-i-rf-givare-3-pack-lr13800-2` | 200 | 6 449 kr | **5 481 kr** t.o.m. 2026-10-19 | BackOrder | "Skickas om 8-12 dagar" |
| DeFelsko CMM IS Basic Kit | LA14010 | CMM IS Basic Kit | `fuktmatare-for-betong/defelsko-cmm-is-basic-kit-rf-givare-la14010` | 200 | 5 183 kr | – | BackOrder | "Skickas om 9-14 dagar" |
| DeFelsko CMM IS Complete Kit | LA14011 | CMM IS Complete Kit | `fuktmatare-for-betong/defelsko-cmm-is-complete-kit-rf-givare-la14011` | 200 | 9 026 kr | – | BackOrder | "Skickas om 9-14 dagar" |
| DeFelsko CMM IS Pro Kit | LA14012 | CMM IS Pro Kit | `fuktmatare-for-betong/defelsko-cmm-is-pro-kit-rf-givare-la14012` | 200 | 23 649 kr | – | BackOrder | "Skickas om 9-14 dagar" |
| Protimeter BLD4755-Kit golvset utan Protimeter | 3071179 | BLD4755-Kit | `ovriga-tillbehor-fuktmatare/protimeter-bld4755-kit-golvset-utan-protimeter-3071179` | 200 | 18 980 kr | – | BackOrder | "Skickas om 8-12 dagar" |
| Protimeter BLD4750HS-100 foderrör, 100 st | LM53042 | BLD4750HS-100 | `ovriga-tillbehor-fuktmatare/protimeter-bld4750hs-100-foderror-for-betongmatning-100-st-lm53042` | 200 | 4 441 kr | – | **InStock** | "Skickas inom 24 timmar!" |
| Testo 0160 2185 fuktburk 85 % RH | LM13320 | 0160 2185 | `ovriga-tillbehor-fuktmatare/testo-0160-2185-fuktburk-85-rh-lm13320` | 200 | 2 797 kr | – | BackOrder | "Skickas om 8-12 dagar" |
| Tramex SAL75 fuktburk 75 % RH | LR13802 | SAL75 | `ovriga-tillbehor-fuktmatare/tramex-sal75-fuktburk-75-rh-lr13802` | 200 | 1 428 kr | **1 213 kr** t.o.m. 2026-10-19 | **InStock** | "Skickas inom 24 timmar!" |

- Alla tretton pris och kampanjpris stämmer med det förra bladet. **Bekräftat.**
- Ingen EAN (`gtin`) i sidornas strukturerade data.
- Kampanjsidornas egna data (`LowestHistoricalPrice`) anger 9 239 kr för CME5 och 1 428 kr för SAL75, alltså samma som ordinarie pris. För Hygro-i gäller sidans första rabattblock en annan variant (1 994 / 2 347 kr); variantens tal är inte kontrollerade och används inte.
- Butikens egna uppgifter om innehåll och kompatibilitet (inte spec, bara för att veta vad som säljs):
  - LA13350: "Mätsetet innehåller bl.a 3st Testo 605-H1 minimätare." Namnet säger **utan RBK-kalibreringscertifikat**; RBK kräver kalibrering vid 75, 85, 90 och 95 % innan givaren tas i bruk (avsnitt 1.7). EGEN slutsats: köparen behöver kalibrera före en RBK-mätning.
  - LA13360: "Fukt- och temperaturgivare till Testo 605 Betongmätset RBK."
  - 3071179: "Ett golvkit för dem som redan har ett MMS2 eller HygroMaster2 instrument." Innehåller bl.a. "5 styck protimeter mini hygrostick prober (BLD4755-5)", borr 19 mm, "Salt kalibreringsset med adapter (BLD4790 & BLD4790-AD)". Saltlösningens RF anges inte.
  - LR13800-2: "RF-givaren används för mätning i betong." "Kompatibilitet Tramex CMEXpert II". Se 4.3.

---

## 4. Tillverkarens uppgifter

### 4.1 Testo 605-H1

- Testo.com: <https://www.testo.com/sv-SE/testo-605-h1/p/0560-6053> svarade **403** i dag (curl). Det förra bladet fick 429.
- Nordtec Instrument AB, produktsida, <https://www.nordtec.se/produkt/matinstrument/fuktmatare/luftfuktighetsmatare/testo-605-h1-mangsidig-fuktmatare/>, `dateModified` 2026-10-06, läst 2026-10-07 (ÅTERFÖRSÄLJARE):
  - "Mätområde 5...95 %RH, 0...+50°C, -20...+50°C td"
  - "Noggrannhet ±1 siffra ±3 %RH, ±0.5°C"
  - "Upplösning 0.1 %RH, 0.1°C"
  - "RBK-godkänd för uttaget prov och borrhålsmätning"
  - Pris 1 410 kr, "Finns i lager"; tillval "Med kalibreringscertifikat 0520 9085 (75,85,90,95% vid 20°C)". Momsen anges inte vid priset i det lästa (sökutdraget säger "excluding VAT", UTDRAG). Används inte för jämförelse.
- Status för "±3 %RH inom 5–95 %": **bekräftat** (med "±1 siffra").
- Status för "Nordtec, Testos generalagent": **kunde inte bekräftas.** Ordet generalagent står inte på sidan. RBK flik 10 anger Nordtec som inköpsställe för förbrukningsmaterialet (avsnitt 1.5). Skriv "Nordtec, som säljer Testo i Sverige".
- RBK om givaren (flik 2 s. 17): minsta mätdjup 35 mm, största 90 mm; mätrör kapas till högst 100 mm.

### 4.2 Protimeter HygroStick och QuikStick

Källor (tillverkarens datablad hos återförsäljare):
- Protimeter, HygroMaster 2 datasheet, odaterat, <https://core.instrumart.com/assets/HygroMaster2-datasheet.pdf>, läst 2026-10-07.
- Protimeter, Flooring datasheet MMS2/HygroMaster 2, odaterat, <https://core.instrumart.com/assets/Protimeter-Flooring-datasheet.pdf>, läst 2026-10-07 (KFB kod PROT).

| Givare | Ordagrant | Källa |
|---|---|---|
| HygroStick | "30% to 40% RH (±3% RH) at 68ºF (20ºC)." "41% to 98% RH (±2%) at 68ºF (20ºC)." | båda bladen |
| Mini Hygrostick (i BLD4755-kit) | "30% to 40% RH (±3% RH) at 68ºF (20ºC)"; "41% to 98% RH (±2%) at 68ºF (20ºC)" | Flooring datasheet |
| QuikStick | "0% to 10% RH, ±3% RH"; "10% to 90% RH, ±2% RH"; "90% to 100% RH, ±3% RH", alla "at 68°F (20°C)" | HygroMaster 2 datasheet (Flooring-bladet skriver "11% to 90%" och "91% to 100%") |

- HygroMaster 2-bladet: "BLD7751 with short QuikStick is recommended for general measurement and BLD7750 with Hygrostick is recommended for high" (meningen bryts i textutdraget).
- Status för "±2 % vid 41–98 % vid 20 °C": **bekräftat.**
- Status för "databladet säger 41–90 %": **kunde inte bekräftas.** Inget av de två lästa bladen säger 41–90 %. 90 % är QuikStickens gräns. **Källorna säger olika** stämmer alltså inte för HygroStick; troligen har HygroStick och QuikStick blandats ihop.
- Ej RBK-metod (avsnitt 1.5).

### 4.3 Tramex Hygro-i2 och CME5

- Tramex, Hygro-i2 data sheet EU, "Hygro-i2-EU 04/25 REV.1.0", <https://tramexmeters.com/perch/resources/downloads/data-sheets/hygro-i2-eu-0425-rev1-0-hygro-i2-data-sheet-web.pdf>, läst 2026-10-07 (TILLVERKARE):
  - "Accuracy: 0% to 99%RH ±2.0%RH (@ 25ºC (77ºF))"; "Range: 0 to 100%RH"; "Resolution: 0.1% over the complete range".
  - "The Hygro-i2 ® probe is used with the CMEX5, MEX5 and Feedback DataLogger DL-RHTX for relative humidity testing of flooring slabs and ambient conditions." Och: "used to carry out in situ RH tests (ASTM …" (avbrutet i textutdraget).
  - Status för "±2,0 %RH inom 0–99 % vid 25 °C": **bekräftat.**
- **Obs, namn och kompatibilitet:** Proffsmagasinet säljer "Hygro-i" (MPN "Hygro-i") med kompatibilitet "Tramex CMEXpert II". Tramex blad gäller **Hygro-i2** och nämner CMEX5, MEX5 och DL-RHTX, **inte CME5**. Att LR13800-2 är Hygro-i2: **kunde inte bekräftas.** Att Hygro-i fungerar med CME5: **saknar källa** (CME5 är analog, se nedan).
- Tramex, CME5 Product Datasheet, tillverkarens PDF hos återförsäljare, <https://www.bergeng.com/mm5/downloads/tramex/CME5-Product-Datasheet.pdf>, läst 2026-10-07 (revisionsraden går inte att läsa i textutdraget):
  - "The Tramex Concrete Moisture Encounter 5 (CME5) is a non-destructive analog moisture meter for concrete floors and slabs providing instant and precise quantitative measurement of moisture content using Gravimetric testing as a baseline." "comparative readings as per ASTM F2659."
  - "non-destructively measuring the electrical impedance. A low frequency electronic signal is transmitted into the material under test".
  - "Moisture Content for Concrete 0 → 6%"; "Depth of penetration: approx. ¾" (20 mm)".
  - Tramex egen produktsida <https://tramexmeters.com/moisture-meters/cme5-concrete-moisture-encounter> svarade **404**.
  - Status för "impedans i ytan, ca 20 mm, 0–6 % fukthalt, inte RF": **bekräftat.** Bladet anger ingen RF-skala. (KFB avsnitt 4 har CMEX5: 0–6,9 %, en annan modell.)
- EGEN ur KFB avsnitt 4: 20 mm når ekvivalent mätdjup 0,4 × H bara i plattor upp till 50 mm (20 / 0,4 = 50).

### 4.4 DeFelsko PosiTector CMM IS

- DeFelsko, produktsida "PosiTector CMM IS In Situ Concrete Moisture (RH) Meter", <https://www.defelsko.com/positector-cmm-is>, läst 2026-10-07 (TILLVERKARE). (<https://www.defelsko.com/cmm-is> gav 404.)
  - Specifikation: "Humidity 10 to 90% ±2%* >90% ±3%* 0.1%"; "* 0 – 65° C (32 – 150 ° F)". Temperatur "0° to 80° C ±0.5° C".
  - "Measure and report relative humidity (RH) and temperature in concrete floor slabs in conformance with ASTM F2170".
  - Kit: Basic (CMMISKITB) "3 CMM IS probes"; Complete (CMMISKITC) "5 CMM IS probes" och väska; Pro (CMMISKITP3) "PosiTector DPM3 Advanced" plus 5 prober.
  - Kalibreringskammaren: "designed in accordance with ASTM E104 to maintain a constant relative humidity environment of 75.3% @ 25° C".
  - ASTM F2170 enligt DeFelsko: hål "generally 40% of the depth of the slab", "requires at least 24 hours of being in-situ before an acceptable reading is taken".
  - Status för "±2 % inom 10–90 % och ±3 % över 90 %": **bekräftat.**
- Ej RBK-metod (avsnitt 1.5). EGEN: medföljande kontrollkammare ligger på 75,3 %, inte på RBK:s 85 %.

### 4.5 Fuktburkarna och RBK:s egenkontroll

- RBK flik 5: egenkontroll "mot en mättad saltlösning med 85 % RF" (avsnitt 1.7).
- Tramex SAL75: namnet hos butiken "fuktburk 75 % RH". Tillverkarens blad ej läst.
- Testo 0160 2185: namnet hos butiken "fuktburk 85 % RH". Tillverkarens blad ej läst.
- Status för "SAL75 (75 %) duger inte för RBK:s egenkontroll": **bekräftat som EGEN slutsats** ur flik 5 (85 %) och butikens produktnamn (75 %). RBK nämner inte SAL75. Obs: RBK kalibrerar vid 75 % (avsnitt 1.7), men det är kalibrering hos kalibreringsställe, inte egenkontroll.

---

## 5. Sammanställning av punkterna i beställningen

| Nr | Påstående | Status |
|---|---|---|
| 1a | Bara RBK-auktoriserad får göra RBK-mätning; personlig, fem år, tentamen och praktiskt prov | Bekräftat |
| 1a | ... praktiskt prov **per metod** | Delvis; per metod står bara för golvavjämning (GBR-RF) och indirekt i "specifik(a) mätmetod(er)" |
| 1b | Blanketterna "förutsätter ... RBK-auktoriserad" | Bekräftat, flik 1 |
| 1c | Felaktig mätning ger för låg RF | Bekräftat med "oftast" |
| 1c | 5–10 % mellan personer med olika utrustning | Bekräftat som ±5–10 %, Skanskas mätningar före RBK, i auktorisationsreglerna |
| 1d | Version 7, revision 7:2 gäller från 2026-09-01 | Delvis: 7:2 bara för flik 0, 12, 28, 31 |
| 1d | Går att ladda ned gratis | Kunde inte bekräftas ordagrant; nedladdning utan inloggning observerad |
| 1d | Bara Testo 605-H1, Vaisala HMP40S, HumiGuard (flik 10) | Bekräftat i sak, källan är flik 0 och 2.8, inte flik 10 |
| 1e | Borrhål, "inte på betongytan" | Bekräftat |
| 2a | GBR/SVEFF "skall", åligger beställaren | Bekräftat via KFB |
| 2b | BFS 2024:8, GVK (85 %), BBV 26:1 kräver ingen metod och ingen RBK | Bekräftat; GVK nämner RBK bara i ordlistan |
| 3 | Tretton produkter, pris, kampanj | Bekräftat, alla HTTP 200 |
| 4a | Testo 605-H1 ±3 %RH 5–95 % | Bekräftat (Nordtec) |
| 4a | Nordtec är generalagent | Kunde inte bekräftas |
| 4b | HygroStick ±2 % 41–98 % vid 20 °C | Bekräftat |
| 4b | Databladet säger 41–90 % | Kunde inte bekräftas; båda bladen säger 41–98 |
| 4c | Hygro-i2 ±2,0 %RH 0–99 % vid 25 °C | Bekräftat; att butikens Hygro-i är Hygro-i2 kunde inte bekräftas |
| 4d | DeFelsko ±2 % 10–90 %, ±3 % över 90 % | Bekräftat |
| 4e | CME5 impedans, ca 20 mm, 0–6 %, inte RF | Bekräftat |
| 4f | Egenkontroll vid 85 %, SAL75 duger inte | Bekräftat (EGEN slutsats ur flik 5) |

---

## Öppet

- Om Proffsmagasinets "Hygro-i" (LR13800-2) är Hygro-i2, och vilken mätare den läses av med. Butiken säger CMEXpert II; Tramex säger CMEX5, MEX5, DL-RHTX. Inte CME5 enligt någon källa.
- Praktiskt prov per borrhålsmetod: bilaga 3 och 6 till auktorisationsreglerna (instruktion för tentamen och praktiskt prov) är inte lästa.
- Testos egna datablad för 605-H1, fuktburk 0160 2185 och Tramex SAL75: ej lästa.
- Saltlösningens RF i Protimeters BLD4790 (ingår i BLD4755-kit): ej angiven hos butiken, tillverkarens blad ej läst.
- Momsen i Nordtecs pris (1 410 kr): ej angiven i det lästa.
- CME5-bladets revision och datum: går inte att läsa i textutdraget.
- Elva av tretton produkter är beställningsvara (8–14 dagar). Kampanjpriserna slutar 2026-10-19; läs om pris efter det.

## Sidor som inte gick att läsa

- <https://www.testo.com/sv-SE/testo-605-h1/p/0560-6053>: 403 (curl), 2026-10-07.
- <https://tramexmeters.com/moisture-meters/cme5-concrete-moisture-encounter>: 404.
- <https://www.defelsko.com/cmm-is>: 404 (rätt adress `/positector-cmm-is` gav 200).
- Proffsmagasinets kategoriadresser med avslutande snedstreck: 301 (läst utan snedstreck, 200).

## Källor

| Kod | Källa | Version, datum | Adress | Läst |
|---|---|---|---|---|
| RBK-R | RBK, Auktorisationsregler | R:15, 2025-09-19 | https://www.rbk.nu/UserFiles/Publika_dokument/Regler_2025/Auktorisationsregler_ver_R15_20250919.pdf | 2026-10-07 |
| RBK-dl | rbk.nu, nedladdningssidan för manualen | – | https://www.rbk.nu/ladda-ned/fuktmatningsmanual__36 | 2026-10-07 |
| RBK-0 | Fuktmätningsmanual, flik 0 | 7:2, 2026-06-11, gäller från 2026-09-01 | https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-72/Flik_0_ver_72.pdf | 2026-10-07 |
| RBK-1 | samma, flik 1 Syfte | 7, 2023-02-28 | https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-7/Publika_dok/Flik_1_ver_7.pdf | 2026-10-07 |
| RBK-2 | samma, flik 2 | 7, 2023-02-28 | https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-71/Flik_2_ver_7_0.pdf | 2026-10-07 (2.8, 2.9); övrigt via KFB |
| RBK-5 | samma, flik 5 Egenkontroll | 7, 2023-02-28 | https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-71/Flik_5_ver_7_0.pdf | 2026-10-07 |
| RBK-10 | samma, flik 10 Testo 605-H1 | 7, 2023-02-28 | https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-71/Flik_10_ver_7_0.pdf | 2026-10-07 |
| RBK-31 | samma, flik 31 | 7:2, 2026-06-11 | https://www.rbk.nu/UserFiles/Fuktmatningsmanualen/Ver-72/Flik_31_ver_72.pdf | 2026-10-07 |
| RBK-4 | samma, flik 4 | 7 | se KFB | via KFB |
| GBR | Golvbranschen/SVEFF, limrekommendationer, inledning | mars 2026 | https://www.golvbranschen.se/rad-riktlinjer/limrekommendationer | via KFB |
| GBR-RF | Golvbranschen, Branschstandard för RF-mätning | 2025-05-12 | https://www.golvbranschen.se/teknik--material/golvavjamning/branschstandard-for-rf-matning | via KFB |
| BFS | Boverket, BFS 2024:8 | i kraft 2025-07-01 | https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf | 2026-10-07 (sökt) |
| GVK | GVK, Säkra Våtrum 2026 | utgåva 1, 2026-01-01 | https://www.gvk.se/siteassets/gvk/dokument/sakra-vatrum-2026.pdf | 2026-10-07 |
| BBV | Byggkeramikrådet, BBV 26:1 | från 2026-01-01 | https://admin.bkr.se/app/uploads/2026/05/BKR_BBV_2026_webb.pdf | 2026-10-07 |
| NT | Nordtec, testo 605-H1 | ändrad 2026-10-06 | https://www.nordtec.se/produkt/matinstrument/fuktmatare/luftfuktighetsmatare/testo-605-h1-mangsidig-fuktmatare/ | 2026-10-07 |
| HM2 | Protimeter, HygroMaster 2 datasheet | odaterat | https://core.instrumart.com/assets/HygroMaster2-datasheet.pdf | 2026-10-07 |
| PROT | Protimeter, Flooring datasheet | odaterat | https://core.instrumart.com/assets/Protimeter-Flooring-datasheet.pdf | 2026-10-07 |
| HI2 | Tramex, Hygro-i2 data sheet EU | 04/25 REV.1.0 | https://tramexmeters.com/perch/resources/downloads/data-sheets/hygro-i2-eu-0425-rev1-0-hygro-i2-data-sheet-web.pdf | 2026-10-07 |
| CME5 | Tramex, CME5 Product Datasheet (hos Bergeng) | ej läsbart | https://www.bergeng.com/mm5/downloads/tramex/CME5-Product-Datasheet.pdf | 2026-10-07 |
| DF | DeFelsko, PosiTector CMM IS | – | https://www.defelsko.com/positector-cmm-is | 2026-10-07 |
| PM | Proffsmagasinet, tre kategorisidor och tretton produktsidor | – | se avsnitt 3 | 2026-10-07 |
| KFB | Hantverkarens faktablad `docs/briefer/faktablad/kunskap-fuktmatning-betong.md` | 2026-10-07 | – | 2026-10-07 |
