# Faktablad: guider/fukt/avfuktare-tvattstuga

Ny sida, omgång D, SEO-rad D4. `/fukt/avfuktare-tvattstuga/`, köpguide. Beställt av affiliateagenten 2026-10-04. Bladet är underlag och innehåller ingen publik text.

Allt är hämtat och läst **2026-10-04** om inget annat står. PM = Proffsmagasinet. Priser är inkl. moms och kommer ur PM:s `__INIT_STATE__` på produktsidan (`Price.ListPrice.AmountWithTax`, och `Price.Discount` när det finns). Lager är B2C-status och leveranstexten ordagrant. Butiken är källa bara för pris, lager, art.nr och EAN, aldrig för prestanda (AFFILIATE.md, regel 2026-09-30). I `kallor` står butiken utan url, till exempel "Proffsmagasinet, Wood's MDK21, pris och lager 4 oktober 2026". Prestanda kommer ur tillverkarens bruksanvisning eller produktblad. **ER** = egen räkning, formeln står vid talet. **Utdrag** = sökmotorns utdrag, sidan är inte läst. "PM-bilaga" = tillverkarens PDF som PM lägger upp, `https://pm-asset.azureedge.net/api/asset-download?id=<id>`.

URL-kontroll med `curl` utan `-L`: kategorisidan och **alla 39 aktiva produktsidor svarade 200**, ingen omdirigering (`redirect_url` tomt). Gemensam bas för adresserna: `https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/`.

---

## 0. Besked till affiliateagenten och hantverkaren

- **Sju aktiva maskiner hos PM har ett tvättläge enligt tillverkaren:** eeese Emil, eeese Adam, eeese Otto 13 l, eeese Otto 20 l (med luftrenare), Wood's MDK21, Wood's MDX14 och Frico SUN12. Wood's AD20 och AD30 har också ett, med en annan logik (se tabell 1A). Det blir nio.
- **Två sorters tvättläge.** eeese och Frico kör "kontinuerlig avfuktning med hög fläkthastighet i 6 timmar" och stänger sedan av sig själva. Wood's (MDK21, MDX14, AD20/AD30) kör högsta fläkt utan inställbar fuktnivå och stänger inte av efter en fast tid. MDK21 stannar kompressorn vid ≤40 % RF och startar den vid ≥45 %. MDX14 kör kompressorn "kontinuerligt … oavsett luftfuktighet". Timern ställs separat.
- **Sex timmar är kortare än alla torktider i Energimyndighetens test.** Snabbast var 6 h 54 min och snittet 8 h 34 min, för 7 kg (fukt-gemensamma-tal 14.1). Det är en egen jämförelse mellan olika maskiner. Den visar ändå att ett läge som stänger av efter 6 h kan behöva startas om. Ingen tillverkare säger hur många kilo tvätt läget är tänkt för.
- **Ingen tillverkare anger kWh per kg tvätt, torktid eller DER.** Det enda energital som har ett villkor är MDX14: 4,3 kWh/24 h vid 20 °C/70 %. ER ger 6,0 l ÷ 4,3 kWh = 1,40 l/kWh. Alla andra effekttal är märkeffekt, oftast vid 30 °C/80 %.
- **Kapacitet vid tvättstugans temperatur finns hos fem.** Frico SUN12 4,2 l vid 20 °C/60 % och 1,9 l vid 8 °C. MDX14 6,0 l vid 20/70. eeese Emil 6,0, Adam 11,5, Otto 13 l 7 och Otto 20 l 12, alla vid 27 °C/60 %. Wood's MDK21, AD20 och AD30 anger bara 30 °C/80 %. AD20:s "14 l vid 27/60" i databasen kommer från butiken.
- **Ingen sorptionsmaskin hos PM nämner tvätt i tillverkarens dokument.** Acetec 6H 2.0 och RCF 12 G1 är sökta i dag. Fresh, Drybox och El-Björn är lästa i vind- och garageunderlagen. Fresh D-800/D-1200 nämns hos PM med "kontinuerlig torkning", men det är butikens text.
- **Ingen av de fem testade modellerna från 2017 säljs hos PM i dag.** KCC 16AJ finns som utgången. Inget nyare oberoende test av avfuktare för tvätt har hittats (del 2).
- **Databasen behöver rättas.** `woods-mdk21` effekt 240 W: tillverkaren anger 275 W, och 240 W finns bara i det äldre produktbladet. `woods-ad30` kapacitetsvillkor "ej angivet": Wood's anger 26 l vid 30 °C/80 %. `fresh-d800` pris 7 250 kr: i dag 7 211 kr. `acetec-evodry-6h-2` 9 995 kr i lager: i dag 10 588 kr, beställningsvara.

---

## 1. Maskinerna

### 1A. Kondens- och hybridmaskiner med tvättläge enligt tillverkaren

"Hybrid" betyder här avfuktare + luftrenare (Wood's AD, eeese Otto 20 l). Alla är kompressormaskiner med R290.

| Maskin | Tvättläge, ordagrant | Vad läget gör | Kapacitet med villkor | Effekt | Källa (tillverkaren) |
|---|---|---|---|---|---|
| **eeese Emil 10 L** (art. 2508) | "Funktionen Torkning av kläder [knappen Torkning av tvätt]" | "enheten körs på kontinuerlig avfuktning med hög fläkthastighet i 6 timmar för att därefter stängas av automatiskt. Fläkthastighetsknappen och timerknappen kan inte användas i detta läge." | 10 l/dygn vid 30 °C/80 %; 6,0 l vid 27 °C/60 % | 165 W (manualen; tabellens kolumner är förskjutna i PDF-texten, se 1D). PM skriver 155 W | eeese, User manual Emil Art. 2502 & 2508, MV-2502-2508-09-2025, https://cdn.skyfish.com/media/6308647249164.pdf (länkad från eeese-aircare.com, produktsidan Emil 10L) |
| **eeese Adam 20 L wifi** (art. 2509) | "Tvättorkningsläge [Knapp för tvättorkning]" | "Tryck en gång på lägesknappen för att välja klädtorkningsläge. Enheten kör kontinuerlig avfuktning med hög fläkthastighet i 6 timmar och stängs därefter av automatiskt." Fläkthastigheten "kan inte användas i läget torkning av tvätt" | 20 l/dygn vid 30 °C/80 %; 11,5 l vid 27 °C/60 % | 255 W | eeese, User manual Adam Art. 2509, MV-2509-08-2026, https://cdn.skyfish.com/media/630df876dcb01.pdf |
| **eeese Otto 13 L wifi** (art. 2552) | "tvätttorkningsläget" | "I manuellt läge, tryck på knappen Läge en gång för att gå in i tvätttorkningsläget. … Enheten arbetar i kontinuerlig avfuktning med hög fläkthastighet i sex timmar och stängs sedan av automatiskt." | 13 l/dygn vid 30 °C/80 %; 7 l vid 27 °C/60 % | 145 W | eeese, User manual Otto Art. 2552 & 2589, MV-2552-2589-09-2025, https://cdn.skyfish.com/media/67cea8586c30c.pdf |
| **eeese Otto 20 L** avfuktare + luftrenare (art. 2553) | "Tvättläge" (PM-bilagan) / "Tvättorkningstläge" (eeese 09-2025) | "Tryck på lägesknappen (A) tills tvättorkningstlägesindikatorn (B) visas på displayen. Enheten arbetar i kontinuerlig avfuktning med hög fläkthastighet i sex timmar och stängs sedan av automatiskt." | 20 l/dygn vid 30 °C/80 %; 12 l vid 27 °C/60 % | 245 W | eeese, User manual Otto Art. 2553 & 2554, MV-2553-2554-09-2025, https://cdn.skyfish.com/media/63ec9a5a65374.pdf; samma text i PM-bilaga 71663469 (MV-2553-2554-02-2023) |
| **Frico SUN12** | "Torkning av tvätt", "Tvättorkningsknapp" | "Tryck på tvättorkningsknappen för att aktivera tvättorkningsfunktionen. Avfuktaren går på hög fläkthastighet och kontinuerlig avfuktning i 6 timmar och stängs sedan av automatiskt. • Fläkthastighet kan ej väljas och timerfunktion kan ej aktiveras." | 12 l/dygn vid 30 °C/80 %; 7,5 vid 27/60; **4,2 vid 20 °C/60 %**; **1,9 vid 8 °C/60 %** | 155 W "Gäller vid lufttemperatur in +20 °C" | Frico, Montage- och bruksanvisning Sunnan SUN12, daterad 2022-05-06, PM-bilaga AssetDocument81308964 |
| **Wood's MDK21** | "Tvättstugeläge" (manualen); "Torka tvätt funktion 'Dry mode'" (PM-bilagans produktblad) | "Avfuktaren är automatiskt inställd på hög fläkthastighet för att kunna torka kläder fortare. Funktionen önskad fuktighetsnivå går inte att välja i tvättstugeläge. Obs! När enheten uppnår ≤40% RH, stannar kompressorn automatiskt. Fläkten fortsätter att gå på högsta hastighet. När enheten uppnår ≥45% RH, kommer kompressorn att startas." Timer separat: 1/2/4/8 h | 20 l/24 h vid 30 °C/80 %. Vid 20 eller 27 °C: **ej angivet** | **Källorna säger olika:** 275 W vid 30 °C/80 % (manual rev. 2022-05-02 och woods.se produktblad) mot 240 W (PM-bilagans äldre produktblad). Tillverkarens nyare dokument väger tyngst | Wood's, bruksanvisning MDK21_26, "Revision date: 2022-05-02", https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk21_mdk26pdf.pdf; produktblad https://woods.se/wp-content/themes/woods/action/product-sheet.php?id=43640&lang=sv |
| **Wood's MDX14** | "Klädtorkningsläge" / "TORRT LÄGE"; produktbladet: "Tvättläge Ja" | "I det här läget arbetar kompressorn kontinuerligt och fläkten går på hög hastighet oavsett luftfuktighet i rummet. … fläkthastighet och luftfuktighet kan inte justeras". Timer: "Du kan välja 1-24 timmar" | 10 l/24 h vid 30 °C/80 %; **6,0 l vid 20 °C/70 %** | 180 W vid 20 °C/70 %; "Strömförbrukning vid 20 ˚C och 70% r.h." **4,3 kWh/24 h**. Produktbladet: 5,6 kWh/24 h vid 30 °C/80 % | Wood's, bruksanvisning MDX14, "Revision date: 2020-01-20", https://woods.se/wp-content/uploads/2024/12/mdx14_-manual_all_web.pdf; produktblad id=42328 |
| **Wood's AD20 Hybrid** | "torka-tvätt läge" | "Använd detta läge för att snabbast torka tvätt och kläder. Avfuktaren arbetar på högsta fläktläget kontinuerligt; fuktighetsnivå och fläktlägen kan inte ändras." Läget finns "endast under avfuktning". Timer 1–12 h | 23 l/24 h vid 30 °C/80 %. Vid 27 °C/60 %: **ej i tillverkarens dokument** (14 l är PM:s uppgift) | 280 W vid 30 °C/80 % | Wood's, bruksanvisning AD20/AD30 Hybrid, https://woods.se/wp-content/uploads/2024/12/ad20-ad30_hybrid_manual_all_web.pdf (revisionsdatum hittas inte); produktblad id=42809 |
| **Wood's AD30 Hybrid** | samma manual som AD20 | samma | **Källorna säger olika, inom samma produktblad:** tabellen anger 26 l/24 h vid 30 °C/80 %, punktlistan "upp till 12 liter fukt per dag". Tabellen har villkor och väger tyngst | 320 W vid 30 °C/80 % | Wood's produktblad id=42827 |

### 1B. Utrustning per maskin

| Maskin | Slang till golvbrunn | Tank | Hygrostat | Timer | Ljud | Lägsta arbetstemp. | Garanti |
|---|---|---|---|---|---|---|---|
| eeese Emil 10 L | Ø 14 mm, "Dräneringsslang ingår (Art. 2558) Nej" | 2,6 l | ja, inställbar fuktnivå | 1–24 h (ej i tvättläget) | 40 / 36 dB(A) hög/låg, avstånd ej angivet | 5 °C (5–35) | 2 år ("Vi garanterar … under en period av två år") |
| eeese Adam 20 L | Ø 14 mm, ingår ej | 5 l | ja | 1–24 h | 44 / 42 dB(A), avstånd ej angivet | 5 °C | 2 år |
| eeese Otto 13 L | Ø 14 mm, ingår ej | 2,3 l | ja, CO och 30–80 % | 1–24 h | 39 / 35 dB(A), avstånd ej angivet | 5 °C; IPX4 | 2 år |
| eeese Otto 20 L | Ø 14 mm, ingår ej (Art. 2558) | 4,5 l | ja, CO och 30–80 % | 1–24 h | 44 / 40 dB(A) (2553), avstånd ej angivet | 5 °C; IPX4 | 2 år |
| Frico SUN12 | "en Ø13mm (1/2") slang på slangnippeln". Om slangen ingår är oklart: delritningen visar "25. Slang", texten säger inte att den ingår | 2,6 l | ja, "Hygrostatknapp" | ja (ej i tvättläget) | 33/42 dB(A) **på 3 m** | **8 °C** ("Arb.område temperatur 8-35") | ej angivet i manualen |
| Wood's MDK21 | **Källorna säger olika:** manualen (engelska) "Drainage hose 15mm" mot produktbladet "Slangkoppling 17.4mm (ingår)". Manualen: kondensatet "ledas direkt till ett avlopp eller golvbrunn"; "OBS behållaren ska alltid sitta kvar" | 4 l | ja, 40–70 % och CO | 1/2/4/8 h | 48 dB (produktblad), ≤48 dB (PM-bilaga), avstånd ej angivet | +5 °C | "2 års garanti för tillverkningsfel"; produktbladet "Upp till 3 år" vid registrering |
| Wood's MDX14 | "10 mm (included)" (produktbladet) | 1,5 l | ja, 35–85 % (bara i avfuktningsläget) | 1–24 h | 43 dB (manual), 40–42 dB (produktblad), avstånd ej angivet | +5 °C | 2 år; "Upp till 3 år" vid registrering |
| Wood's AD20 | **Källorna säger olika:** manualen "Innerdiameter på slangen är 12 mm" mot produktbladet "17.4mm (ingår)" | 4 l | ja, 30–80 % och CO | 1–12 h | 37–48 dB, avstånd ej angivet | +5 °C; avfuktningen stannar under 3 °C | 2 år; "Upp till 6 år" (produktblad, villkor ej läst) |
| Wood's AD30 | som AD20 | 4 l | ja | 1–12 h | 33–54 dB, avstånd ej angivet | +5 °C | som AD20 |

- Säkerhet, alla R290-maskiner: Wood's MDK11/MDX14 "golvyta som är större än 2 m²", Wood's MDK21 och Frico "större än 4 m²". Wood's: i dusch- eller badrum "bör avfuktaren skruvas fast" (MDX14, MDK11).
- Effektivitet vid låg temperatur: eeese (Otto 20 L, PM-bilagan 02-2023, ordagrant) "Avfuktaren fungerar bäst vid normal rumstemperatur, och dess effektivitet minskas om omgivningstemperaturen sjunker till under 15 °C." Samma mening står i manualerna för Adam, Emil och Otto 13 L.

### 1C. Övriga aktiva kondensmaskiner hos PM, utan tvättläge enligt tillverkaren

| Maskin | Tvättläge | Kapacitet med villkor | Effekt | Slang | Källa | Anm. |
|---|---|---|---|---|---|---|
| Wood's MDK11 | **Inget läge i manualen.** Den nya manualen (rev. 2026-02-09) har timer 2/4/6 h och fuktnivå 40/50/60 eller kontinuerligt. **Källorna säger olika:** PM-bilagans äldre produktblad säger "utrustad med torka-tvätt funktion", men den gamla manualen beskriver bara "CO … continuous dehumidification" och timer 2/4/8 h. Wood's produktblad i dag: "Med topputblåset torkar MDK11 handdukar och mindre mängder tvätt" | 10 l/24 h vid 30 °C/80 % | **Källorna säger olika:** 180 W (manual 2026, produktblad woods.se) mot 210 W (PM-bilagans produktblad). Tillverkarens nya dokument väger tyngst | 17,4 mm (ingår), produktblad | Wood's manual https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk11_13_.pdf; produktblad id=44815; PM-bilagor 28832069, 28832070 (manualen märkt "MDK18 … Revision date: 19-Oct, 2018") | Tank 2 l (ny) eller 1,8 l (gammal); 44 dB (ny) eller 46 dB (gammal); 40 m² (ny) eller 50 m² (gammal). PM:s sida bygger på den gamla versionen |
| Wood's SW23FW / SW39FW / SW43FW I-EcoDefrost+ | inget hittat | ej angivet för FW-modellerna; systermodellerna SW22/38/42 i SW-manualen 7,5 / 11 / 12 l vid 20 °C/70 % | systermodeller 145 / 320 / 420 W vid 20 °C/70 % | ½" slang ingår inte, trädgårdsslangskoppling ingår, "Then lead the hose to a floor drain" | Wood's, "User manual … SW series", "Revision date: 02-03-2026", https://woods.se/wp-content/uploads/2024/12/sw-manual-sw20_22_38_42_59_2025_v1.pdf | FW-modellerna finns inte på woods.se (sökning gav inga träffar). Manualen gäller inte uttryckligen 23/39/43 |
| Wood's SW59FM | inget läge. Produktbladet: "maskinen torkar tvätten", "Optimal för stora källare, tvättstugor och torkrum" | 41 l vid 30 °C/80 %; 25 l vid 20 °C/70 % | 690 / 500 W | ja (slangkoppling) | PM-bilaga 28831998 (produktblad); SW-manualen ovan | 11,4 l tank, 37–58 dB, +2 °C, "förlängd totalgaranti upp till 6 år" med filterbyte |
| Wood's DSC50FM | nej, krypgrund | 16,2 l vid 35/80; 8,8 l vid 20/70 | 308 / 231 W | endast slang | PM-bilaga 28832074 | ingen tank |
| Wood's WCD4 Pro | nej, bygg | 41 l/24 h vid 30/80 | 690 W | ½" (ingår ej) | Wood's produktblad id=44754 | 56–60 dB, 28 kg, 13 100 kr |
| REMS 132010 / 132011 R220 | nej, industri | ej läst | ej läst | – | – | **"Ej beställningsbar för tillfället"** |
| Innova IGDHX-30 | ej angivet | ej läst | ej läst | – | inget tillverkardokument hittat | **"Ej beställningsbar för tillfället"** |

### 1D. Osäkert i läsningen

- **eeese Emil:** i PDF-texten står tabellraderna och kolumnvärdena i olika block: "2508 2502 40 50 1 ~ 24 220-240V-50Hz 10 12 6,0 7,5 165 105 80 … 40 36 2,6". Läsningen 10 och 12 l (30/80), 6,0 och 7,5 l (27/60), 165 W, luft 105/80 m³/h, ljud 40/36 dB följer kolumnordningen. Att 165 W gäller båda modellerna är egen läsning. PM:s 155 W är butikens uppgift.
- **PM:s Emil (art.nr 2920001) är 10 L = eeese art. 2508.** Matchningen gjordes på kapaciteten, för EAN:en (5704841025080) står inte i manualen. PM:s Otto 2920276 (13 l, 145 W, 2,3 l tank) = art. 2552. PM:s Otto 3136629 (20 l, 245 W, HEPA) = art. 2553. Samma matchning på specifikationen.
- **Wood's MDK21:** PM-bilagan är manualen "Revision date: 20-May, 2019". Woods.se har rev. 2022-05-02. Texten om tvättstugeläget är densamma i båda.

### 1E. Sorptionsmaskiner

Ingen av PM:s 13 aktiva sorptionsmaskiner har tvätt eller tvättläge i tillverkarens dokument. Sökt i dag: Acetec ref-20100 (6H 2.0) och ref-20012 (RCF 12 G1), https://docs.acetec.se/dokument/ref-20100/ och …/ref-20012/, 0 träffar på "tvätt", "torkrum" och "kläd". Fresh D-800/D-1200 enligt bruksanvisningen 008634-A_200116: "boytor, vindar, källare, båtar, fritidshus, garage och lagerutrymmen" (`underlag-avfuktare-vind-2026-10.md` B4). Drybox och El-Björn: tvätt nämns inte i de dokument som lästs där. PM:s egen text om Fresh, "där behov av kontinuerlig torkning finns", och om El-Björn ASE 300, "torkning efter vattenskador", är butikstext om annat än tvätt.

### 1F. Pris och lager i dag (PM, 2026-10-04)

ListPrice inkl. moms. Kampanj = `Price.Discount`. Inga andra maskiner har `Discount` eller kampanj.

| Maskin | PM art.nr | EAN (PM) | Pris | Kampanj / jämförpris | Lager och leveranstext | Adress (bas + …) | HTTP | I databasen |
|---|---|---|---|---|---|---|---|---|
| eeese Emil | 2920001 | 5704841025080 | 1 836 kr | – | i lager (11), "Skickas inom 24 timmar!" | eeese-emil-avfuktare-10-l-2920001 | 200 | nej |
| eeese Otto 13 L | 2920276 | 5704841025523 | 2 319 kr | **2 087 kr**, −10 %, kampanj "Badrumsveckor"; LowestHistoricalPrice 2 319 kr | i lager (11), "Skickas inom 24 timmar!" | eeese-otto-avfuktare-13-l-2920276 | 200 | nej |
| eeese Adam 20 L | 2920263 | 5704841025097 | 2 756 kr | – | i lager (18), "Skickas inom 24 timmar!" | eeese-adam-avfuktare-20-l-wifi-2920263 | 200 | `eeese-adam-20` |
| eeese Otto 20 L med luftrenare | 3136629 | 5704841025530 | 3 499 kr | **3 149 kr**, −10 %, "Badrumsveckor"; LowestHistoricalPrice 3 499 kr | i lager (1), "Skickas inom 24 timmar!" | eeese-otto-avfuktare-med-luftrenare-3136629 | 200 | nej |
| Frico SUN12 | 3059269 | 7393410534993 | 4 678 kr | – | beställningsvara, "Skickas 2026-10-09" (1 bekräftad) | frico-sun12-luftavfuktare-230-v-12-l-3059269 | 200 | nej |
| Wood's MDX14 | 4063682 | 7332857501113 | 1 690 kr | – | i lager (527), "Skickas inom 24 timmar!" | woods-mdx14-avfuktare-for-badrum-och-andra-mindre-utrymmen-4063682 | 200 | nej |
| Wood's MDK11 | VS57624 | 7332857500369 | 2 024 kr | – | i lager (13), "Skickas inom 24 timmar!" | woods-mdk11-avfuktare-vs57624 | 200 | nej |
| Wood's MDK21 | VS57632 | 7332857500383 | 3 118 kr | – | i lager (27), "Skickas inom 24 timmar!" | woods-mdk21-avfuktare-upp-till-70-m-vs57632 | 200 | `woods-mdk21` |
| Wood's AD20 Hybrid | VS57634 | 7332857500895 | 3 999 kr | – | i lager (24), "Skickas inom 24 timmar!" | woods-ad20-hybrid-avfuktare-med-luftrening-vs57634 | 200 | `woods-ad20` |
| Wood's AD30 Hybrid | 4028611 | 7332857500772 | 5 495 kr | – | i lager (15), "Skickas inom 24 timmar!" | woods-ad30-hybrid-avfuktare-upp-till-120-m-4028611 | 200 | `woods-ad30` |
| Wood's SW23FW | 4058316 | 7332857502790 | 5 496 kr | – | i lager (24) | woods-sw23fw-i-ecodefrost-avfuktare-med-luftfilter-100-m-4058316 | 200 | `woods-sw23fw` |
| Wood's SW39FW | 4058317 | 7332857502806 | 5 948 kr | – | i lager (9) | woods-sw39fw-i-ecodefrost-avfuktare-med-luftfilter-140-m-4058317 | 200 | `woods-sw39fw` |
| Wood's SW43FW | 4058319 | 7332857502813 | 7 866 kr | – | i lager (4) | woods-sw43fw-i-ecodefrost-avfuktare-med-luftfilter-190-m-4058319 | 200 | `woods-sw43fw` |
| Wood's SW59FM | VS17696 | 7332857500505 | 8 311 kr | – | i lager (1) | woods-sw59fm-luftavfuktare-vs17696 | 200 | `woods-sw59fm` |
| Wood's DSC50FM | VS57625 | 7332857500499 | 6 072 kr | – | i lager (11) | woods-dsc50fm-avfuktare-vs57625 | 200 | `woods-dsc50fm` |
| Wood's WCD4 Pro | 4027227 | 7332857500666 | 13 100 kr | – | i lager (6) | woods-wcd4-pro-avfuktare-114-l-4027227 | 200 | nej |
| REMS 132011 R220 | 3015796 | 4039976166744 | 11 632 kr | – | "Ej beställningsbar för tillfället" | rems-132011-r220-luftavfuktare-265-mh-50ldygn-3015796 | 200 | nej |
| REMS 132010 R220 | 3015795 | 4039976151856 | 25 852 kr | – | "Ej beställningsbar för tillfället" | rems-132010-r220-luftavfuktare-850-mh-80ldygn-3015795 | 200 | nej |
| Innova IGDHX-30 | 3137762 | – (PM:s Gtin = art.nr) | 2 341 kr | – | "Ej beställningsbar för tillfället" | innova-igdhx-30-avfuktare-30-l-3137762 | 200 | `innova-igdhx-30` |

Prisändringar för sorptionsmaskinerna sedan förra underlaget (30/9). Fresh D-800 7 211 kr (var 7 250), i lager (15). Fresh D-1200 10 995 kr, i lager (8). Acetec EvoDry 6H 2.0 **10 588 kr** (var 9 995), beställningsvara, "Skickas 2026-10-12". Acetec RCF 12 G1 15 455 kr, nu i lager (2). Drybox X2 och X5: "Skickas om 9-15 dagar". Acetec 30/60/120/180 Pro: "Skickas om 8-10 dagar".

### 1G. Egen räkning: ett tvättläge på 6 timmar

ER: kWh = W ÷ 1 000 × 6 h. Kronor = kWh × 2,40 (SCB-elpriset i `src/lib/antaganden.ts`, som i garagebladet). Talen är övre gränser, eftersom läget kör kompressorn kontinuerligt med märkeffekten. eeese anger inget villkor för sin effekt. Frico anger +20 °C.

| Maskin | Effekt | kWh per 6 h-läge | kr |
|---|---|---|---|
| eeese Otto 13 L | 145 W | 0,87 | 2,09 |
| Frico SUN12 | 155 W (+20 °C) | 0,93 | 2,23 |
| eeese Emil | 165 W | 0,99 | 2,38 |
| eeese Otto 20 L | 245 W | 1,47 | 3,53 |
| eeese Adam | 255 W | 1,53 | 3,67 |

- Wood's-maskinerna har ingen fast tid och står inte i tabellen. MDX14 med tillverkarens dygnstal vid 20 °C/70 %: 4,3 kWh ÷ 24 × 6 = 1,08 kWh per 6 h (ER).
- Som jämförelse, utan att det är samma villkor: Energimyndighetens snitt för avfuktare var 0,32 × 7 = 2,3 kWh per 7 kg-torkning, och för värmepumpstumlare 1,6 kWh (fukt-gemensamma-tal 14.1, ER). Testmaskinerna var andra modeller och torkade längre än 6 h. Talen får inte ställas mot varandra som om de gällde samma maskin.

---

## 2. Energimyndighetens test 2017 och nyare test

- **De testade modellerna hos PM i dag:** KCC 16AJ (PM art.nr 3137757) finns i kategorin som **utgången** (status `Expired`, inget pris), listad med `special_filters=with_unavailable`, sidorna 1–3, 200. Stadler Form Albert, Canvac Q Air D220 och Electrolux EXD20DN3W finns inte bland PM:s 127 aktiva och utgångna avfuktare. Wood's TDR28FS finns inte. Wood's TDR36FS (VS17636) finns som utgången. Ingen efterföljare som tillverkaren pekar ut har hittats.
- **Testsidan är kvar:** "Luftavfuktare torka tvätt", "Senast uppdaterad: 2017-12-11", https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/luftavfuktare-torka-tvatt/ (WebFetch 2026-10-04, samma innehåll som i 14.1).
- **Nyare oberoende test av avfuktare för tvätt: inget hittat.** Sökt på Energimyndigheten, Råd & Rön och Testfakta.
  - Energimyndigheten har ett äldre test av luftavfuktare generellt, pressmeddelandet "Rätt luftavfuktare sparar energi" (mynewsdesk, 2016, **utdrag**, ej läst). Det gäller inte tvätt.
  - Råd & Rön: tvättorkar, torktumlare och kombimaskiner (2022 och 2026, **utdrag**). Inget avfuktartest efter 2004 hittat, och 2004 års test nämns bara i ett utdrag.
  - Testfakta: torktumlare oktober 2021 (**utdrag**). Inget avfuktartest hittat.
  - Sidor som test.se, testkollen.se, testra.se och bast-i-test.se är lead- och affiliatesidor och inga källor. Utdragen nämner eeese Emil, Wood's WDD80, Wood's SW38FW och Wood's AD20 som "bäst i test", utan mätning som går att spåra.

---

## 3. Dörr, ventilation och temperatur enligt tillverkarna

Ingen tillverkare och inte Energimyndigheten anger hur mycket torktiden ändras med dörr, ventilation eller temperatur i tal. Det som står, ordagrant:

- **Wood's MDK11** (rev. 2026-02-09) och **MDX14** (rev. 2020-01-20), samma text: "Avfuktaren måste användas i ett stängt utrymme för att vara så effektiv som möjligt. Stäng alla dörrar, fönster och andra öppningar till utsidan i rummet. Avfuktarens effektivitet beror på den hastighet med vilken ny fuktig luft kommer in i rummet." Och: "En avfuktare som används i ett rum har liten eller ingen effekt när det gäller att torka ett angränsande stängt utrymme, t.ex. en garderob, om det inte finns tillräcklig luftcirkulation in i och ut från det aktuella utrymmet."
- **Wood's MDX14:** "Ibland kan det vara bra att använda en varmluftsfläkt för att se till att temperaturen inte sjunker under +10 ˚C. Även om MDX14 arbetar ned till så låga temperaturer som +5 °C ökar kapaciteten vid högre temperaturer eftersom varm luft bär mer vatten." Om avfrostning: "Förångaren i avfuktaren kan avfrostas automatiskt om den används i rumstemperaturer under 18 °C. Avfrostningsanordningen kan starta och vara igång ett tag (cirka 8 minuter) automatiskt var 40:e minut eller ännu längre."
- **Wood's MDK11/MDX14**, om värmen: "Den kommer att alstra värme under avfrostningen och gör att rumstemperaturen ökar med mellan 1 och 4 °C." I MDK11 står också: "Rumstemperaturen stiger när avfuktaren är påslagen."
- **Wood's MDK21** (rev. 2022-05-02), tips: "För maximal avfuktningskapacitet i ett rum rekommenderas att tilluften från utsidan och intilliggande rum minimeras – stäng dörrar och ventiler." "Höj temperaturen i rummet för snabbare avfuktning. (Varm luft kan bära mer vatten)." Felsökning: "Det är för mycket ventilation. - Minska ventilationen (stäng dörrar och fönster.)"
- **Wood's AD20/AD30:** "Stäng alla fönster och ventiler i rummet. Annars fortsätter fuktig luft utifrån att strömma in i rummet." "Avfuktaren ska inte placeras nära element eller andra värmekällor då det kan sänka avfuktaren kapacitet."
- **Wood's SW-serien** (rev. 2026-03-02): "För bästa effektivitet, håll dörrar och fönster stängda."
- **Frico SUN12**, felsökning: "För mycket ventilation i rummet. Minimera ventilationen, stäng dörrar och fönster." Kapaciteten per temperatur är tillverkarens tabell: 12 l (30 °C/80 %), 7,5 (27/60), 4,2 (20/60), 1,9 (8/60). ER: vid 20 °C/60 % återstår 4,2 ÷ 12 = 35 % av märktalet, men RF skiljer också mellan villkoren.
- **eeese:** "Avfuktaren fungerar bäst vid normal rumstemperatur, och dess effektivitet minskas om omgivningstemperaturen sjunker till under 15 °C."
- **Energimyndigheten (2017):** testmiljön skulle "motsvara en tvättstuga, ett badrum eller en källare med mekanisk ventilation". "För att luftavfuktaren ska vara energieffektiv bör huset ha ett ventilationssystem som återvinner den uppvärmda luften från luftavfuktaren, till exempel en frånluftvärmepump eller mekanisk från- och tilluftsventilation med värmeväxling". Rummets temperatur och luftomsättning i testet: **saknas** (14.1).
- Läsning för hantverkaren, inte källornas ord: det finns en konflikt mellan tillverkarnas "stäng ventiler" och att tvättstugan ska ha frånluft enligt BBR. Ingen källa löser den. Skriv inte råd om att stänga frånluftsdonet utan källa av rang.

---

## 4. Källor (kallor-format)

```yaml
kallor:
  - titel: eeese, User manual Dehumidifier Emil Art. 2502 & 2508 (MV-2502-2508-09-2025)
    url: https://cdn.skyfish.com/media/6308647249164.pdf
  - titel: eeese, User manual Dehumidifier Adam Art. 2509 (MV-2509-08-2026)
    url: https://cdn.skyfish.com/media/630df876dcb01.pdf
  - titel: eeese, User manual Dehumidifier Otto Art. 2552 & 2589 (MV-2552-2589-09-2025)
    url: https://cdn.skyfish.com/media/67cea8586c30c.pdf
  - titel: eeese, User manual Dehumidifier Otto Art. 2553 & 2554 (MV-2553-2554-09-2025)
    url: https://cdn.skyfish.com/media/63ec9a5a65374.pdf
  - titel: Frico, Montage- och bruksanvisning Sunnan SUN12 (2022-05-06)
    url: https://pm-asset.azureedge.net/api/asset-download?id=AssetDocument81308964
  - titel: Wood's, bruksanvisning MDK21/MDK26 (rev. 2022-05-02)
    url: https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk21_mdk26pdf.pdf
  - titel: Wood's, produktblad MDK21
    url: https://woods.se/wp-content/themes/woods/action/product-sheet.php?id=43640&lang=sv
  - titel: Wood's, bruksanvisning MDX14 (rev. 2020-01-20)
    url: https://woods.se/wp-content/uploads/2024/12/mdx14_-manual_all_web.pdf
  - titel: Wood's, produktblad MDX14
    url: https://woods.se/wp-content/themes/woods/action/product-sheet.php?id=42328&lang=sv
  - titel: Wood's, bruksanvisning AD20/AD30 Hybrid
    url: https://woods.se/wp-content/uploads/2024/12/ad20-ad30_hybrid_manual_all_web.pdf
  - titel: Wood's, produktblad AD20
    url: https://woods.se/wp-content/themes/woods/action/product-sheet.php?id=42809&lang=sv
  - titel: Wood's, produktblad AD30
    url: https://woods.se/wp-content/themes/woods/action/product-sheet.php?id=42827&lang=sv
  - titel: Wood's, bruksanvisning MDK11/MDK13 (rev. 2026-02-09)
    url: https://woods.se/wp-content/uploads/2024/12/woods_manual_mdk11_13_.pdf
  - titel: Wood's, bruksanvisning SW-serien (rev. 2026-03-02)
    url: https://woods.se/wp-content/uploads/2024/12/sw-manual-sw20_22_38_42_59_2025_v1.pdf
  - titel: Wood's, Torka din tvätt med en avfuktare
    url: https://woods.se/sv/avfuktare-for-torka-tvatt/
  - titel: Energimyndigheten, Luftavfuktare torka tvätt (senast uppdaterad 2017-12-11)
    url: https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/luftavfuktare-torka-tvatt/
  - titel: Proffsmagasinet, avfuktarna i tabell 1F, pris och lager 4 oktober 2026
```

- Wood's sida om att torka tvätt (läst i dag, odaterad): "Alla avfuktare för torkning av tvätt hjälper dig att torka din tvätt i uppvärmda utrymmen (lägenheter, badrum etc.). Om du ska torka tvätt där det redan finns mycket fukt, t.ex. i en källare, bör du välja LD-serien." Sidan länkar från PM:s sortiment bara MDK21 och AD30. LD-serien, MDX20P och MRD finns inte hos PM.

---

## Öppet

- Inga tillverkardokument för Wood's SW23FW/SW39FW/SW43FW och Innova IGDHX-30. FW-modellerna finns inte på woods.se.
- Frico SUN12: garanti och om slangen ingår är inte angivet.
- Wood's AD20/AD30: manualens revisionsdatum hittas inte, och villkoren för garantin "Upp till 6 år" är inte lästa.
- Ingen källa ger kWh per kg tvätt, torktid eller DER för någon maskin hos PM.
- Ingen källa ger hur många kilo tvätt ett tvättläge räcker till, eller hur torktiden ändras med temperatur, dörr eller ventilation.
- Databasen avviker från tillverkaren: `woods-mdk21` effekt (240 mot 275 W), `woods-ad30` villkor (ej angivet mot 30/80), `woods-ad20` kapacitet vid 27/60 (bara butiken). Pris: `fresh-d800` 7 211 kr och `acetec-evodry-6h-2` 10 588 kr beställningsvara.
- Varken BBR-kravet på frånluft i tvättstuga eller Boverkets text om tvättstuga är lästa för den här sidan. Konflikten med "stäng ventilerna" (del 3) är olöst.

## Sidor som inte gick att läsa

- woods.se: produktadresserna under `/produkter/avfuktare/<modell>/` och `sitemap_index.xml` gav 404. Svenska produktsidor nåddes via sökning. Ingen sida för SW23FW, SW39FW eller SW43FW.
- cdn.skyfish.com (eeese-manualerna): 302 utan `-L`, hämtade med `-L` från cloudfront. Dokumenten är eeese:s egna, länkade från eeese-aircare.com.
- Råd & Rön, Testfakta och Energimyndighetens pressmeddelande 2016: bara sökmotorns utdrag, inte lästa.
