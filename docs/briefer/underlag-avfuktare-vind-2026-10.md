# Underlag: sorptionsavfuktare till kallvind (köpguiden /fukt/avfuktare-vind/, omgång B)

Beställt av affiliateagenten. Allt hämtat och läst **2026-09-30** om inget annat står. PM = Proffsmagasinet. Priser inkl. moms ur PM:s strukturerade sidata (`__INIT_STATE__`, fältet `ListPrice.AmountWithTax`) på kategori- och produktsida. Butik är källa för pris, lager, art.nr, EAN och adress, aldrig för prestanda. Prestanda ur tillverkarens datablad, bruksanvisning eller tillverkarens egen sida. **Sammanfattning** = WebFetch-sammanfattning, inte ordagrant. **Utdrag** = sökmotorns utdrag, sidan inte läst. **Avläst** = värde läst ur ett diagram (bild) av oss, ungefärligt. Egen räkning är märkt med formel. Inga slugs föreslås.

- "PM-bilaga" = PDF som PM lägger upp på produktsidan, `https://pm-asset.azureedge.net/api/asset-download?id=<id>`. Alla PM-bilagor nedan är tillverkarens egna dokument (Drybox/Amrox, Fresh, Acetec), inte PM:s.
- Lagerstatus: "i lager (n)" = B2C `InStock`, "Skickas inom 24 timmar!". "beställningsvara" = `OutOfStock` med `AvailableForPurchase: true` och leveranstexten ordagrant. "utgången" = status `Expired`, inget pris.
- Nedsatt pris: **inget av de 13 har kampanj eller ord.pris** (fältet `Campaigns` tomt, inget jämförpris i sidans data).
- URL-kontroll: `curl` utan `-L` 2026-09-30. **Alla 39 aktiva adresser i kategorin och alla 87 utgångna svarade 200 utan omdirigering** (`redirect_url` tomt).

---

## Sammanfattning

| Fråga | Svar | Källa |
|---|---|---|
| Sorptionsavfuktare hos PM i dag (aktiva) | **13**: Drybox X2, X4, X5; Fresh D-800, D-1200; Acetec EvoDry 6H 2.0, RCF 12 G1, RCF 20 G1, 30 Pro, 60 Pro, 120 PRO, 180 PRO; El-Björn ASE 300 | PM kategori + produktsidor + sitemap, del A |
| Därav i lager i dag | 4: Drybox X4 (8), Fresh D-800 (17), Fresh D-1200 (10), Acetec RCF 20 G1 (3) | PM |
| Klarar alla fyra kraven på papperet | **13 av 13** (alla är sorption, tillverkaren anger −20 °C eller −10 °C, alla har inbyggd hygrostat, alla har våtluftsstos) | tabell C |
| Men: utesluts eller har förbehåll | **EvoDry 6H 2.0**: Acetec skriver att den "inte är avsedd för krypgrund eller kallvind". **Fresh D-800**: våtluftskanal högst 0,6 m. **Drybox X2/X4/X5** i program 1: avfuktar bara över +4 °C. **30/60/120/180 Pro**: 2–10,6 kW, 75 000–166 000 kr, industriformat | tabell C, del B |
| Tillverkaren nämner kallvind/vind uttryckligen | Drybox X4, X5 (drybox.se, sammanfattning; X5-installationsmanual "Krypgrund och Vind"), Fresh D-800/D-1200 ("vindar"), Acetec RCF 12 G1 och RCF 20 G1 ("Kallvind"). Pro-serien: bara PM:s text | del B |
| Trygghetsvakten hos PM | **Nej.** 0 träffar i produktsitemap (177 349 adresser). Tillverkare Amrox Group AB, samma bolag och adress som Drybox | del D |
| Sidor som inte svarade 200 | **Inga PM-adresser.** Utanför PM: elbjorn.com två PDF:er (404) | sist i filen |

---

## Del A. PM:s sortiment

### A1. Kategorier genomgångna

- `https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare` (PMCat_73130865): **39 aktiva** artiklar, en sida.
- Med `?special_filters=with_unavailable` (sidorna 1–3, `&page=2`, `&page=3`): **127** artiklar = 39 aktiva + 88 rader utgångna (87 unika; VS11022 visas två gånger).
- Syskonkategorier under `/avfuktare/`: `filter` (20), `slangar` (11), `ovriga-tillbehor-avfuktare` (20). Inga maskiner, bara tillbehör. `kyltorkar` (2) under Inomhusklimat är inte rumsavfuktare.
- Produktsitemap (`https://proffsmaster.blob.core.windows.net/product-feeds/proffs-se_sv-se_sitemap_products_1–4.xml`, 177 349 adresser, länkad från `https://www.proffsmagasinet.se/sitemap.xml`): 39 adresser under `/avfuktare/avfuktare/`, samma som kategorin. Sökt på avfukt, sorption, adsorption, drybox, acetec-evodry, fresh-d, el-bjorn-as, corroventa, munters, dantherm, trygghet: **inga avfuktarmaskiner utanför kategorin.** (Adresserna `proffs-se_sv-se_sitemap_products_N.xml` direkt på proffsmagasinet.se ger nu 404; de ligger på blob-adressen ovan.)
- Typen bestämd per produktsida (PM:s text och tekniska data; nyckelord sorption/adsorption mot köldmedium R290/R134a/kompressor/termisk) och för de 13 mot tillverkarens dokument i del B.

### A2. De 13 aktiva sorptionsmaskinerna

Full adress = `https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/` + adresskolumnen. Alla 200.

| # | Maskin | PM art.nr | EAN (PM) | Pris 30/9 | Lager 30/9 | Adress |
|---|---|---|---|---|---|---|
| 1 | Fresh D-800 | 3055560 | 7318117200163 | 7 250 kr | i lager (17), "Skickas inom 24 timmar!" | fresh-d800-sorptionsavfuktare-3055560 |
| 2 | Acetec EvoDry 6H 2.0 | 1150001 | 7350072460732 | 9 995 kr | beställningsvara, "Skickas om 7-9 dagar" | acetec-evodry-6h-20-sorptionsavfuktare-1150001 |
| 3 | Drybox X2 | 2950003 | 7350069720023 | 10 878 kr | beställningsvara, "Skickas om 9-14 dagar" | drybox-x2-avfuktare-upp-till-250-m-2950003 |
| 4 | Fresh D-1200 | 3055561 | 7318117200187 | 10 995 kr | i lager (10), "Skickas inom 24 timmar!" | fresh-d1200-sorptionsavfuktare-3055561 |
| 5 | Drybox X4 | 2950004 | 7350069720047 | 12 763 kr | i lager (8), "Skickas inom 24 timmar!" | drybox-x4-avfuktare-upp-till-250-m-2950004 |
| 6 | Drybox X5 | 3137750 | 7350069720238 | 15 374 kr | beställningsvara, "Skickas om 9-14 dagar" | drybox-x5-adsorptionsavfuktare-3137750 |
| 7 | Acetec EvoDry RCF 12 G1 | 4043420 | 7350070006246 | 15 455 kr | beställningsvara, "Skickas 2026-10-01" (2 st inkommande) | acetec-evodry-rcf-12-g1-sorptionsavfuktare-4043420 |
| 8 | Acetec EvoDry RCF 20 G1 | 4043421 | 7350070006253 | 19 995 kr | i lager (3), "Skickas inom 24 timmar!" | acetec-evodry-rcf-20-g1-sorptionsavfuktare-4043421 |
| 9 | El-Björn ASE 300 | VS11025 | 7332813018822 | 27 801 kr | beställningsvara, "Skickas om 7-9 dagar" | el-bjorn-ase-300-byggavfuktare-vs11025 |
| 10 | Acetec EvoDry 60 Pro | 1150005 | 7350072461463 | 75 708 kr | beställningsvara, "Skickas om 8-12 dagar" | acetec-evodry-60-pro-sorptionsavfuktare-1150005 |
| 11 | Acetec EvoDry 30 Pro | 1150004 | – (PM:s `Gtin` = art.nr) | 75 786 kr | beställningsvara, "Skickas om 8-12 dagar" | acetec-evodry-30-pro-sorptionsavfuktare-1150004 |
| 12 | Acetec EvoDry 120 PRO | 3069390 | 7350072461470 | 117 797 kr | beställningsvara, "Skickas om 8-12 dagar" | acetec-evodry-120-pro-avfuktare-panel-3069390 |
| 13 | Acetec EvoDry 180 PRO | 3069391 | 7350072461487 | 166 362 kr | beställningsvara, "Skickas om 8-12 dagar" | acetec-evodry-180-pro-avfuktare-panel-3069391 |

- Prisändring: EvoDry 6H 2.0 var 10 588 kr 2026-09-29 (`underlag-avfuktare-garage-2026-09-29.md`), i dag 9 995 kr igen. Övriga i databasen oförändrade (Drybox X4 12 763, Fresh D-800 7 250).
- 30 Pro kostar enligt PM mer än 60 Pro (75 786 mot 75 708 kr). Står så i PM:s data.
- Tillbehör hos PM som berör vind: Drybox tillbehörspaket X685000 (2 torrluftsslangar, 1 våtluftsslang, 2 avstick, 1 utloppsplåt), art.nr 2950005, EAN 7350069720030, 2 496 kr, i lager (11), `.../avfuktare/slangar/drybox-x685000-tillbehorspaket-6-delar-2950005` (200). Acetec väggfäste 20602 finns i sitemap (`.../ovriga-tillbehor-avfuktare/acetec-20602-vaggfaste-1150014`), inte läst.

### A3. Aktiva vindsmaskiner hos PM som inte är sorption

| Maskin | Art.nr | EAN | Pris | Lager | Typ enligt PM/tillverkaren |
|---|---|---|---|---|---|
| Drybox DryAttic, "avfuktare för vind" | 3137751 | 7350069720283 | 14 999 kr | beställningsvara, "Skickas om 9-14 dagar" | "kombination av fläkt och termisk avfuktning": värmekabel 50 m + fläkt 350 m³/h som blåser in uteluft, max 610 W, "Normal energiåtgång 4 kWh per m2 /år", 10–100 m². Drybox produktblad (PM-bilaga id 72013561) och installationsmanual (id AssetDocument72013562). **Inte sorption** |
| Drybox DryHeat 30 / 50 / 60 / 100 | 3137755 / 3137754 / 3137753 / 3137752 | 7350069720290 / …306 / …313 / …320 | 6 299 / 6 149 / 7 699 / 6 896 kr | 100 i lager (1), övriga beställningsvaror | termisk (värmekabel) för krypgrund enligt PM. Inte sorption, inte vind |

- Adress DryAttic: `https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-dryattic-avfuktare-for-vind-3137751` (200).
- Övriga aktiva (26 st) är kondens/kompressor (Wood's, eeese, Innova, REMS, Frico SUN12 med R290 enligt manualen PM-bilaga AssetDocument81308964) eller fuktslukare (Torrbollen). Wood's AD20/AD30 Hybrid: "Arbetsintervall temperatur +5°C till +35ºC", köldmedium (PM). Inte sorption.

### A4. Utgångna sorptionsmaskiner (status `Expired`, inget pris, alla 200)

Acetec EvoDry PD (1150002), RD (1150003), 6P (1150019), 12H (1150020), 12P (1150021), 18H (1150022), 18P (1150023), 24H (1150024), 24P (1150025); El-Björn A 290ADS (VS11020), A 440ADS (VS11021), ASE 200 (VS11024); Wood's WP-200AP (VS57628); eeese Mark (2920271, "Adsorptionsavfuktare", tank 2,5 l, "Arbetstemperatur -10~50 °C" enligt PM). Drybox X1 (2950002) är en undertrycksfläkt, inte avfuktare. Adresser: samma bas + slug ur kategorin med `with_unavailable`.

---

## Del B. Tillverkarens uppgifter per maskin

### B1. Drybox X4 och X2 (Amrox Group AB)

Dokument:
- Drybox "MANUAL AVFUKTARE" (gäller X2 och X4), PM-bilaga id AssetDocument29528728 (X4) = AssetDocument29528609 (X2), samma fil. Odaterad.
- Drybox "Installationsbeskrivning DryBOX", PM-bilaga id AssetDocument29528729 (X4) = AssetDocument29528610 (X2), samma fil. Odaterad, ett gemensamt datablock utan modellnamn.
- Drybox "INSTALLATIONS MANUAL Krypgrund och Vind", PM-bilaga id AssetDocument72013555 (ligger på X5, gäller "din DryBox", nämner X1 och X4).
- https://drybox.se/produkter/drybox-x4/ (**sammanfattning**; `dateModified` 2026-08-19 enligt garage-underlaget).

| Uppgift | X4 | X2 | Källa |
|---|---|---|---|
| Typ | sorption: "den fuktiga luften trycks genom en roterande rotor, som adsorberar fukten" | samma | manualen s. 2 |
| Kapacitet | 19 l/dygn, **villkor ej angivet** | 19 l/dygn, villkor ej angivet | drybox.se; installationsbeskrivningen |
| Kapacitet vid 0–10 °C | **ej angivet** | ej angivet | – |
| Luftflöde | torrluft 250 m³/h, våtluft 35 m³/h | samma | installationsbeskrivningen (tabellen förskjuten i PDF-texten; värdena i ordning) |
| Effekt | **Källorna säger olika:** 850 W (drybox.se, PM) mot 805 W (installationsbeskrivningens datablock). drybox.se väger tyngst som nyast | 850 W max (PM) | se ovan |
| Arbetstemperatur | "Sorptionstekniken avfuktar effektivt inom temperaturområdet -20°C till +40°C" | samma | manualen s. 2 |
| Styrning under +5 °C | Program 1: "Vid temperaturer över +4°C sker avfuktning tills luftfuktigheten når inställt RF-värde. Fläkten går kontinuerligt vid temperaturer över +2°C. Vid lägre temperaturer stannar fläkten men startar efter 4 timmar." Program 2 och 4: avfuktning "oavsett temperatur" respektive "oberoende av luftfuktighet och temperatur". Program 5/6 (mögel): "vid temperaturer lägre än 0°C regleras luftfuktigheten till ca 70%" (55-läget) resp. "ca 80%" (65-läget) | X2 har bara vridpotentiometer, fabriksinställning 60 % RF; programvalen gäller "endast modell X4" | manualen s. 5–6 |
| Hygrostat | inbyggd; lägen 55 % / 65 %, rak / mögel / kontinuerlig; "reglerområde på ±3%"; levereras på 65 % RF (PM). Extern display upp till 10 m (drybox.se, PM) | inbyggd vridpotentiometer 0–100, fabrik 60 %, "±2%"; ingen display ("endast X4" i installationsmanualen) | manualen s. 5; installationsmanualen |
| Våtluftsutlopp | **Källorna säger olika:** 63 mm (installationsbeskrivningen, installationsmanualen "Ø 63 mm, 1.5 meter", PM) mot "Våtluftsstos 50 mm" (drybox.se, sammanfattning). Tillverkarens PDF:er väger tyngst (två dokument mot en sammanfattning) | 63 mm (installationsbeskrivningen, PM) | se ovan |
| Våtluftsslang ingår | **Nej enligt dokumenten:** slangen (Ø 63 mm, 1,5 m) står under "TILLBEHÖR" i tillbehörspaketet X685000; "För installationen krävs DryBox Installatioskit" | samma | installationsbeskrivningen; installationsmanualen |
| Max slanglängd våtluft | ej angiven; manualen anger 1,5 m slang | samma | – |
| Hål i vägg | "ungefär 100 mm i diameter" om ventil saknas | samma | installationsmanualen |
| Torrluft | 1 × 63 mm / 1 × 102 mm (drybox.se, PM); 1 × 63 / 1 × 100 mm (installationsbeskrivningen) | 1 × 63 / 1 × 100 mm | se ovan |
| Placering | golv: "bör stå upphöjd på ett frigolitblock"; på vind "vid ena kortsidan av huset". Hängande: **ej angivet** | samma | installationsmanualen |
| Ljud | 52 dB på 3 m | 52 dB på 3 m | drybox.se; installationsbeskrivningen |
| Vikt | 11 kg | 11 kg (installationsbeskrivningen, gemensamt block) | drybox.se; PDF |
| Mått H×B×D | 285 × 335 × 425 mm | samma | drybox.se; PDF |
| Garanti | **Källorna säger olika:** PM "7 års garanti" vid registrering; drybox.se 2 år, 5 år vid registrering (sammanfattning); installationsmanualen "minst 2 år", förlängd vid registrering inom 6 månader, bara privatpersoner, år ej angivna. Tillverkaren väger tyngst: 2 år, förlängning vid registrering | samma | se ovan |
| Frostskydd/värme | ej angivet (utöver regenereringsvärmaren) | samma | – |
| Kallvind nämns | ja: X4 "unheated attics" (drybox.se, sammanfattning); FAQ "kallvind" (drybox.se, ordagrant i garage-underlaget 2026-09-29) | samma FAQ | – |

### B2. Drybox X5

Dokument: Drybox "Adsorptionsavfuktare X5" produktblad (PM-bilaga id 72013547), "MANUAL Adsorptionsavfuktare X5" (id AssetDocument72013554), installationsmanualen ovan (id AssetDocument72013555), https://drybox.se/produkter/drybox-x5/ (**sammanfattning**). Alla odaterade.

| Uppgift | Värde | Källa |
|---|---|---|
| Kapacitet | 24 l/dygn, villkor ej angivet | produktbladet |
| Kapacitet vid 0–10 °C | ej angivet | – |
| Luftflöde | torrluft 500 m³/h; våtluft ej angivet | produktbladet |
| Effekt | 1 300 W | produktbladet |
| Arbetstemperatur | "Sorptionstekniken avfuktar effektivt inom temperaturområdet -20°C till +40°C" | X5-manualen s. 2 |
| Styrning | samma program 1–6 som X4 (över +4 °C i program 1; ca 70/80 % under 0 °C i mögelläget) | X5-manualen s. 5–6 |
| Hygrostat | inbyggd, levereras på 65 % RF (PM); extern display upp till 10 m (PM, drybox.se) | – |
| Våtluft | **Källorna säger olika:** Ø 63 mm (produktbladet, PM) mot "Våtluftsstos 50 mm" (drybox.se, sammanfattning). Produktbladet väger tyngst | – |
| Slang | krävs "DryBox Installatioskit"; slang Ø 63 mm, 1,5 m i installationsmanualen | installationsmanualen |
| Torrluft | Ø 1 × 102 mm + Ø 1 × 63 mm | produktbladet |
| Ljud | 67 dB på 3 m | produktbladet |
| Vikt | 11,5 kg | produktbladet |
| Mått H×B×D | **Källorna säger olika:** 255 × 335 × 425 mm (produktbladet) mot 285 × 335 × 425 (PM, drybox.se) | – |
| Garanti | PM-tekniska data "Garanti 2 år"; PM-text 7 år vid registrering; drybox.se 2 år, 5 år vid registrering (sammanfattning) | – |
| Placering | "kan installeras på golv" (drybox.se, sammanfattning) | – |
| Kallvind nämns | drybox.se: "lämpar sig särskilt för kallvindar och krypgrunder" (sammanfattning); PM: "fuktskadade källare och vindar" | – |

### B3. Drybox installationsmanual, avsnittet "Installationsmanual Vind" (gäller X-serien)

PM-bilaga id AssetDocument72013555, ordagrant:
- "Kontrollera att det är lufttätt vid alla genomföringar i vindsbjälklaget … Det ska vara helt tätt och det gäller även vindsluckan om ni har en sådan."
- "Lokala läckor måste åtgärdas – det går inte att avfukta bort vatten som läkt in."
- "För att DryBox skall fungera effektivt behöver du täta eventuell takfotsventilation. Det är ofta enklast att täta denna från utsidan. … Om ni har ventilationsöppningar i taket (s.k. mögelstoppers) behöver ni även sätta igen dessa."
- "Placera avfuktaren vid ena kortsidan av huset. Avfuktaren bör stå upphöjd på ett frigolitblock eller liknande."
- "Fäst våtluftskanalen (Ø 63 mm ,1.5 meter) i utloppslåten och för slangen genom väggen utifrån i den ventil närmast din DryBox. Denna ventil bör sitta lägre än din DryBox. Saknas ventil på rätt höjd bör ett nytt hål med diameter av ungefär 100 mm i diameter göras."
- Slangen "vara vinklad nedåt"; "Blir det kondens är ett tips att sätta isolering runt våtluftskanalen."
- Torrluftskanalerna "till 2/3 dels väg av huset … diagonalt i stil av ett V."
- "Filterbyte måste göras minst 2ggr/ år."
- Fuktkvot i virket "ca:17 % eller lägre för att det skall vara säkert."

### B4. Fresh D-800 och D-1200

Dokument: Fresh "Fresh Avfuktare D-800/D-1200" bruksanvisning, dokument 008634-A_200116, PM-bilaga id AssetDocument70505787 (ligger på D-1200; D-800 har ingen bilaga hos PM). Samma dokument som återförsäljarkopian i garage-underlaget.

| Uppgift | D-800 | D-1200 | Källa |
|---|---|---|---|
| Typ | sorption, "kontinuerligt roterande fuktabsorberande och patenterat hjul" | samma | s. 5 |
| Kapacitet | 6 l/dag vid 27 °C 60 % RF; 8 l/dag vid 35 °C 90 % | 10 l/dag vid 27/60; 12 l/dag vid 35/90 | s. 14 (tabellen förskjuten; värdena i kolumnordning) |
| Kapacitet vid 0–10 °C | **ej angivet i liter.** Text: "3–4 gånger så hög prestanda jämfört med kompressoravfuktare vid temperaturer under 10 °C" | samma | s. 4 |
| Luftflöde | process 90 m³/h, regenerering 14 m³/h | 130 / 20 m³/h | s. 14 |
| Effekt | 0,35 kW vid 27/60 | 0,50 kW vid 27/60 | s. 14 |
| Arbetstemperatur | "-20 oC till +40 oC" | samma | s. 14 |
| Hygrostat | inbyggd (ratt 10–80 + ON/OFF) **och** "Uttag för extern hygrostat" 24 V (ingår ej) | samma | s. 12–13 |
| Våtluftsutlopp | 40 mm, "standardstorleken för spillvattenanslutningar" | 40 mm | s. 5, 11 |
| Max kanallängd fuktig luft ut | **0,6 m** | **1,0 m** | s. 7, tabell |
| Max kanal processluft in / torrluft ut | 1,0 m / "ej tillämpligt" | 3,0 m / 3,0 m | s. 7 |
| Slang ingår | ej angivet; "Kanaler kan även fås från din leverantör av avfuktare" | samma | s. 11 |
| Torrluft/inlopp | Ø 125 mm | Ø 125 mm | s. 9–10; PM |
| Montering | "kan monteras i alla riktningar och även upp och ned … Säkra alla fyra fötter med lämpliga fästen (ingår ej) mot golv, vägg eller tak" | samma | s. 12 |
| Ljud | 40 dB, avstånd ej angivet | 44 dB | s. 14 |
| Vikt netto | 4,5 kg | 5,7 kg | s. 14 |
| Mått L×D×H | 200 × 200 × 200 mm | 200 × 300 × 200 mm | s. 14 |
| IP | IP22 | IP22 | s. 14 |
| Garanti | "24-månaders garanti" | samma | s. 15 |
| Frostskydd | ej angivet; PTC-regenereringsvärmare "kan aldrig överhettas" | samma | s. 6 |
| Vind nämns | "boytor, vindar, källare, båtar, fritidshus, garage och lagerutrymmen" | samma | s. 4 |
| Övrigt | "Enheten är avsedd för inomhusbruk." Kondens i våtluftskanalen: "bör luta nedåt" eller isoleras | samma | s. 2, 11 |

### B5. Acetec EvoDry 6H 2.0

Dokument: Acetec "Dokumentation EvoDry 6H 2.0", ref-20100, "Uppdaterad: 7 september 2026", https://docs.acetec.se/dokument/ref-20100/ (läst i sin helhet med curl). PM:s bilaga (id 28817061, "EvoDry-6H+PD+RD-Broschyr") gäller **förra modellen EvoDry 6H** (6,2 l, art.nr 20100) och används inte.

| Uppgift | Värde |
|---|---|
| Användning | "**EvoDry 6H 2.0 är inte avsedd för krypgrund eller kallvind.** För dessa applikationer rekommenderas EvoDry RCF 12 (art.nr 20012) eller EvoDry RCF 20 (art.nr 20020)." |
| Kapacitet | 7,4 l/24 h vid 20 °C/60 % RF |
| Kapacitet vid låg temp | diagram i g/timme. **Avläst:** ca 120 g/h vid 0 °C/60 %, ca 195 g/h vid 10 °C/60 %. **Källorna säger olika:** diagrammet ger ca 255 g/h vid 20/60, egen räkning 255 × 24 / 1000 = 6,1 l/dygn, mot tabellens 7,4. Tabellen är den uttalade uppgiften |
| Luftflöde | torrluft 110, våtluft 20 m³/h |
| Effekt | 530 W vid avfuktning, fläkt 25 W |
| Arbetsområde | "-20 till +40" °C |
| Hygrostat | "elektronisk hygrostat", inställning 0–100 % |
| Våtluft | 50 mm; "Våtgasslang Ø 50mm, längd 1,5m" ingår med utloppsplåt; hål "cirka 70 mm"; max längd ej angiven |
| Torrluft | 1 × 100 mm |
| Placering | "Aggregatet kan även kompletteras med tillbehör såsom väggfäste" |
| Ljud | 48 dBA (avstånd ej angivet). PM skriver 46 dB(A) och 49 dB |
| Vikt, mått | 5,4 kg; B × H × D 217 / 225 / 307 mm. PM: 4,7 kg |
| IP, garanti | IP21; "Garantivillkor AG 20" (år ej angivna) |

### B6. Acetec EvoDry RCF 12 G1 och RCF 20 G1

Dokument: Acetec "Dokumentation EvoDry RCF 12 G1", ref-20012, "Uppdaterad: 26 maj 2026", https://docs.acetec.se/dokument/ref-20012/; "Dokumentation EvoDry RCF 20 G1", ref-20020, "Uppdaterad: 14 augusti 2026", https://docs.acetec.se/dokument/ref-20020/. Kapacitetsdiagram: https://docs.acetec.se/wp-content/uploads/2025/11/kapacitetsdiagram-rcf-12-1.jpg och https://docs.acetec.se/wp-content/uploads/2025/11/kapacitetsdiagram-rcf-20.png. PM har inga bilagor för RCF.

| Uppgift | RCF 12 G1 (art.nr 20012) | RCF 20 G1 (art.nr 20020) |
|---|---|---|
| Kallvind | "Kallvind: I kallvindar kan fukt och kondens orsaka mögelpåväxt – särskilt efter fönsterbyte eller tilläggsisolering i äldre hus. Med en RCF-avfuktare hålls den relativa luftfuktigheten på en nivå där mögel inte får förutsättningar att utvecklas." | samma text |
| Kapacitet | 12 l/24 h vid 20 °C/60 % RF | **Källorna säger olika:** Acetec 17,5 l vid 20/60; PM 17,7. Acetec väger tyngst |
| Kapacitet vid låg temp | **Avläst** ur diagrammet (60 % RF): ca 3,6 l vid −10 °C, ca 6,7 l vid 0 °C, ca 9,6 l vid 10 °C, 12 vid 20 °C. Vid 80 % RF: ca 7,9 l vid 0 °C, ca 10,8 vid 10 °C | **ej angivet.** Diagrammet gäller bara 20 °C vid olika fläktfart (5–10 V): ca 10,3–18,7 l vid 60 % (avläst) |
| Luftflöde | torrluft 200, våtluft 30 m³/h | torrluft 247/295, våtluft 27/42 m³/h (låg/hög fart) |
| Effekt | 665 W vid avfuktning, fläkt 55 W | 900 W, fläkt 88 W |
| Arbetsområde | "-20 till +40" °C | samma |
| Hygrostat | EDC-01 med manöverpanel MPO-01 och 15 m modularkabel; inställning 20–80 %; fabrik 60 %; läge "RF + temp": "Fukthalten tillåts stiga med 1% per grad °C lägre temperatur [än] +15°C. Funktionen är endast aktiv i temperaturområdet 0-15°C." Klimatlarm | samma |
| Panelens plats | "Placera den inte på kallvind eller i krypgrund." | samma |
| Våtluft | 80 mm; "Våtgasslang (2 m)" och utloppsenhet ingår; "**Slangen bör inte förlängas eller ersättas med en slang som är längre än den medföljande slangen.**" | samma |
| Kondens i slang | kort slang, isolering eller fall; alternativt kondenshål "ca 3–5 mm" i lägsta punkten | samma |
| Torrluft | 125 mm (1 stos; 3-stos tillbehör) | 3 × 100 mm |
| Placering | "i ett upphöjt läge, till exempel på lecablock eller en isolerskiva … 'This side up' uppåt … minst 50 cm fritt utrymme mellan filtret och väggen". Hängande: ej angivet | samma |
| Ljud | 58 dBA (avstånd ej angivet). PM 58 | **Källorna säger olika, även inom Acetec:** datablad 48 dBA, broschyrdel 56 dBA, PM "Ljudeffektnivå 61 dB(A)" |
| Vikt, mått | 12,8 kg; B × H × D 370 / 255 / 380 mm | 12,6 kg; samma mått |
| IP, garanti | IP21; "AG 20" (år ej angivna i databladet). PM: "du får alltid 3 års garanti" | samma |
| Installatör | "Avfuktaren ska installeras av kvalificerad person i enlighet med installationsanvisning." | samma |
| Egen räkning kWh/liter vid 20/60 | 665 × 24 / 1000 / 12 = **1,33** | 900 × 24 / 1000 / 17,5 = **1,23** |

Installationsanvisningen på docs.acetec.se är skriven för krypgrund. **Ingen vindsspecifik anvisning hittad hos Acetec** (www.acetec.se/page/installera-avfuktare inte läst i denna omgång; krypgrundsdelen citerad i krypgrundsunderlaget).

### B7. Acetec EvoDry 30 Pro och 60 Pro

Dokument: Acetec "EvoDry Pro" broschyr (PM-bilaga id 28817063, odaterad) och "EvoDry Pro Installation & Underhåll" (id 28817064, odaterad).

| Uppgift | 30 Pro (art.nr 20300) | 60 Pro |
|---|---|---|
| Kapacitet | 1,25 kg/timme vid 20 °C/60 % RF; egen räkning × 24 = 30 l/dygn | 2,25 kg/timme; egen räkning × 24 = 54 l/dygn |
| Kapacitet vid låg temp | ej läst (diagram ej granskade) | ej läst |
| Luftflöde | torrluft 250, våtluft 70 m³/h | 470 / 120 m³/h |
| Effekt | 2 000 W, fläkt 36 W, 10 A | 2 800 W, fläkt 85 W |
| Arbetsområde | "- 20 till + 40" °C | samma |
| Hygrostat | inbyggd styrutrustning; PM: "Inbyggd hygrostat, inställbar mellan 20–80% Rh (inställd på 60% Rh från fabrik)" | samma |
| Våtluft | stos 80 mm (broschyrens måttskiss D2; PM 80 mm); kanal ingår inte; "Våtgas leds alltid ut genom yttervägg (utomhus) med så kort kanal som möjligt. Kanalen måste motstå korrosion och temperaturer upp till ca 100°C." Fabriksinjusterad "med 3 m kanal" | PM: 100 mm |
| Placering | "Ställbara maskinskor" (golv) | samma |
| Ljud | 46 dB(A) på 3 m | 47 dB(A) på 3 m |
| Vikt | 24,4 kg | 29,9 kg |
| Garanti | PM: "Garanti 3 år inskicksgaranti"; Acetec: ej läst | samma |
| Kallvind nämns | bara i PM:s text ("stora krypgrunder eller kallvind"); inte i Acetecs broschyr | samma |

### B8. Acetec EvoDry 120 PRO och 180 PRO

Källa: PM:s tekniska data (tillverkarens datablad ej läst; PM-bilaga "Manual EvoControl Pro-Serien" id AssetDocument30911534, "Senaste uppdatering: Feb 05, 2021", gäller styrningen). Broschyren id 28817063 ger samma tal för 120 (4,5 kg/h, 6 100 W, 59 kg, 47 dB(A) på 3 m) och 180 (7,8 kg/h, 10 600 W, 55 dB(A)).

| Uppgift | 120 PRO | 180 PRO |
|---|---|---|
| Kapacitet vid 20/60 | 108 l/24 h (PM); broschyren 4,5 kg/h, egen räkning × 24 = 108 | 187 l/24 h (PM); 7,8 kg/h × 24 = 187,2 |
| Effekt | 6 100 W, 1 × 230 V, 16 A | 10 600 W, **3 × 400 V**, 25 A |
| Arbetsområde | "-20 - +40" °C | samma |
| Hygrostat | EvoControl, 20–80 %, app | samma |
| Våtluft | stos 160 mm; PM "Slanganslutning: false" | 200 mm |
| Vikt | 59 kg | 81 kg |

### B9. El-Björn ASE 300

Dokument: Aerial/Dantherm "Adsorptionstrockner/Adsorption-dehumidifier Serie/Series ASE 200 ASE 300 [ASE 400]", "V2_04-2021 5506-0099", tillverkare "Dantherm GmbH, Oststraße 148, D-22844 Norderstedt", återförsäljarkopia https://www.heronhill.co.uk/wp-content/uploads/2024/08/Aerial-ASE-200-300-400-manual-5506-0099.pdf (läst). **Att El-Björn ASE 300 är samma maskin som Aerial ASE 300 är inte bekräftat av El-Björn**; PM:s tal (25,7 l, 300/110 m³/h, −10 till +35 °C) stämmer med Aerials. El-Björns egna dokument gick inte att läsa (se sist).

| Uppgift | Värde | Källa |
|---|---|---|
| Kapacitet | 25,70 kg/d vid 20 °C/60 % | Aerial s. 148 |
| Kapacitet vid låg temp | ej angivet | – |
| Luftflöde | torrluft 300, regenerering 110 m³/h | Aerial s. 148 |
| Effekt | 1 040 W | Aerial s. 148 |
| Arbetsområde | "- 10 °C - + 35 °C", 10–95 % RF | Aerial s. 148 |
| Hygrostat | inbyggd ("ASE 300 Hygrostat rechts neben dem Regenerationsluft-Austritt"); extern styrning bara ASE 400 | Aerial s. 2 |
| Våtluft | "Connect hose/air duct (DN 80 mm) to the regeneration air outlet"; slang "(optional accessory)"; hål D = 4 mm i lägsta punkten om fall saknas. Max längd ej angiven | Aerial, engelsk del |
| Torrluft | 2 × DN 50 mm eller 1 × DN 100 mm (vridbar platta) | Aerial |
| Placering | "Standfüße" (golv). PM: "fyra slitagetåliga gummifötter för golvinstallation", "stapelbar" | Aerial; PM |
| Ljud | 57 dB/A (avstånd ej angivet) | Aerial s. 148 |
| Vikt, mått | 18 kg; 370 × 335 × 430 mm; IP23 | Aerial s. 148 (tabellen förskjuten; 14/18/25 kg för ASE 200/300/400) |
| Garanti | ej hittat | – |
| Egen räkning kWh/liter vid 20/60 | 1 040 × 24 / 1000 / 25,7 = **0,97** | – |

- Återförsäljarens datablad (Sydvesta, Danmark, "MASTER ASE 300", mars 2024, https://www.sydvesta.dk/wp-content/uploads/2020/09/150276-Adsorptionsaffugter-ASE-300_Datablad_DA.pdf) ger samma tal: 25,7 l/24 t vid 20/60, −10 till +35 °C, 1 040 W, 57 dB(A), 18 kg. Butikskälla, bara som stöd.
- Användning enligt PM: "torkning efter vattenskador, torkning av byggnader eller torrlagring". Vind nämns inte.

---

## Del C. Kraven, maskin för maskin

Krav: 1 sorption; 2 tillverkaren anger drift under +5 °C (lägsta ordagrant); 3 hygrostat; 4 våtluftsutlopp för slang (diameter, slang ingår, max längd).

| Maskin | 1 Sorption | 2 Lägsta arbetstemp, ordagrant | 3 Hygrostat | 4 Våtluft | Alla fyra | Förbehåll |
|---|---|---|---|---|---|---|
| Fresh D-800 | ja | ja: "-20 oC till +40 oC" | ja, inbyggd + uttag extern 24 V | ja: 40 mm; slang ej angiven som ingående; **max 0,6 m** | ja | 0,6 m räcker bara om maskinen står intill gaveln eller ventilen |
| Acetec EvoDry 6H 2.0 | ja | ja: "-20 till +40" | ja, elektronisk | ja: 50 mm, 1,5 m ingår | ja | **Acetec: "inte avsedd för krypgrund eller kallvind"** |
| Drybox X2 | ja | ja: "-20°C till +40°C" (manualen, allmänt om tekniken) | ja, vridpotentiometer | ja: 63 mm; slang i tillbehörspaket X685000 (1,5 m) | ja | ingen display; kapacitet utan villkor |
| Fresh D-1200 | ja | ja: "-20 oC till +40 oC" | ja, inbyggd + uttag extern 24 V | ja: 40 mm; max 1,0 m | ja | – |
| Drybox X4 | ja | ja: "-20°C till +40°C" | ja, inbyggd, 55/65 %, mögelläge, display 10 m | ja: 63 mm (drybox.se: 50 mm); slang i X685000 | ja | program 1 avfuktar bara över +4 °C; kapacitet utan villkor |
| Drybox X5 | ja | ja: "-20°C till +40°C" | ja, inbyggd + display | ja: 63 mm (drybox.se: 50 mm); installationskit krävs | ja | 67 dB på 3 m |
| Acetec RCF 12 G1 | ja | ja: "-20 till +40" | ja, EDC-01, panel i bostaden | ja: 80 mm, 2 m ingår, ska inte förlängas | ja | enda med kapacitet vid 0 °C (diagram) |
| Acetec RCF 20 G1 | ja | ja: "-20 till +40" | ja, EDC-01, panel i bostaden | ja: 80 mm, 2 m ingår, ska inte förlängas | ja | ljuduppgifterna motsäger varandra |
| El-Björn ASE 300 | ja | ja: "- 10 °C - + 35 °C" (Aerial) | ja, inbyggd | ja: DN 80 mm, slang tillbehör | ja | byggavfuktare; El-Björns egna dokument ej lästa |
| Acetec 30 Pro | ja | ja: "- 20 till + 40" | ja, inbyggd | ja: 80 mm, kanal ingår inte | ja | 2 000 W, 24 kg |
| Acetec 60 Pro | ja | ja: "- 20 till + 40" | ja, inbyggd | ja: 100 mm (PM), kanal ingår inte | ja | 2 800 W |
| Acetec 120 PRO | ja | ja: "-20 - +40" (PM) | ja, EvoControl | ja: 160 mm (PM) | ja | 6 100 W, 59 kg |
| Acetec 180 PRO | ja | ja: "-20 - +40" (PM) | ja, EvoControl | ja: 200 mm (PM) | ja | 10 600 W, 3 × 400 V |

- **Alla 13 klarar de fyra kraven på papperet.** Utesluts av tillverkaren själv för kallvind: EvoDry 6H 2.0. Kvar i villaformat under 30 000 kr: Fresh D-800, Fresh D-1200, Drybox X2, X4, X5, Acetec RCF 12 G1, RCF 20 G1, El-Björn ASE 300.
- Ingen av tillverkarna anger hängande montering utom Fresh ("golv, vägg eller tak", även upp och ned) och Acetec 6H 2.0 (väggfäste som tillbehör).
- Frostskydd eller extra värme: ingen tillverkare anger det. Drybox stoppar fläkten under +2 °C i program 1 och 3.

---

## Del D. Trygghetsvakten

| Fråga | Svar | Källa |
|---|---|---|
| Säljs av PM | **Nej.** 0 träffar på "trygg" som produkt i PM:s produktsitemap 2026-09-30 (enda träffarna: "purus-tryggve-golvbrunn"). PM:s sök gick inte att anropa som adress (se sist); sökmotorn gav ingen PM-produktsida för "proffsmagasinet trygghetsvakten" | sitemap; WebSearch |
| Företag | "TrygghetsVakten (del av Amrox Group AB)", org.nr 556614-5974, Västra Rydsvägen 122, 196 31 Kungsängen | https://trygghetsvakten.se/vindsavfuktare/ (**sammanfattning**) |
| Koppling till Drybox | Drybox manualer anger "Amrox Group AB, Västra Rydsvägen 122, 196 31 Kungsängen". Samma bolag och adress | Drybox X5-manual s. 7; installationsmanualen |
| Vindsmodeller och pris | Vind Classic 18 980 kr; Vind Start 11 995 kr; DH2 sorptionsavfuktare 24 995 kr | https://trygghetsvakten.se/butik/ (**sammanfattning**) |
| Teknik | Vind Classic: "Baserad på hygrodynamisk avfuktning", behovsstyrd ventilation + 50 m värmekabel, backspjäll, väggstos, ljuddämpare. Vind Start: utan värmekabel, kan uppgraderas till Classic. DH2: sorption, torrluft 260 m³/h, 19 l/dygn (villkor ej angivet), 850 W, 48 dBA på 3 m (45 med ljuddämpare), våtluft 50 mm, torrluft 2 × 100 mm, 335 × 285 × 425 mm, 10,9 kg, inbyggd hygrostat, display | produktsidorna Vind Classic, Vind Start, DH2 på trygghetsvakten.se (**sammanfattning**) |
| Egen iakttagelse | DH2 har samma effekt (850 W), kapacitet (19 l) och mått som Drybox X4, från samma bolag. Vind Classic har samma delar som Drybox DryAttic (värmekabel 50 m, fläkt, backventil, väggstos, ljuddämpare). **Att det är samma maskiner är inte bekräftat** | jämförelse av källorna ovan |
| Bara med installation eller abonnemang | **Nej.** Säljs som vara i egen webbutik; "Oftast låter man att en utbildad, certifierad installatör göra monteringen"; Vind Start "DIY with provided instructions or through a certified installer (quote included)"; för DH2 "rekommenderas" certifierad installatör. Inget abonnemang nämnt | trygghetsvakten.se (**sammanfattning**) |
| Garanti | upp till 7 år vid registrering, uppgraderbar till 10 år | trygghetsvakten.se (**sammanfattning**) |
| Andra säljare | Friska Hem Sverige, Ljungby Fuktkontroll (lfs-web.se), Optihus, Luftbutiken, Waterproof Direct | sökträffar, **utdrag** |

---

## Del E. Myndighet och bransch om avfuktare på kallvind (sekundärt)

| Källa | Citat | Anmärkning |
|---|---|---|
| Boverket, "Kalla vindar", https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-fuktskador/fuktrisker-yttertak/kalla-vindar/ (läst med curl; datum ej angivet på sidan) | "Fuktig inomhusluft som läcker till kallare byggdelar via otätheter kan orsaka fuktskador." "Fukt kan tillföras vinden genom till exempel nederbörd, fukt i inomhusluften, fukt i utomhusluften och byggfukt" | **Avfuktare nämns inte** på sidan |
| SBUF Informerar nr 10:05, "Styrd ventilation av kallvindar" (Chalmers, Hagentoft m.fl.), https://vpp.sbuf.se/Public/Documents/InfoSheets/PublishedInfoSheet/c58dab20-2812-4d5b-a7eb-c6423fee3254/SBUF-1005.pdf | "Rådet att bygga helt lufttäta vindsbjälklag är bra, men svårt att uppnå. I moderna kallvindar skapar uteluften mer problem än det löser, genom vattenångan som ventileras in och 'underkyls' på grund av nattutstrålning från taket." "En kallvind med tätt vindsbjälklag och F-ventilationssystem klarar sig utan mögelpåväxt med mindre krav på lufttätning." "Den kontrollerade ventilationen bedöms kräva i storleksordningen 100 kWh elenergi per år" | Branschens utvecklingsfond. År står inte utskrivet; numret 10:05 och hänvisningen till "BBR 2008" tyder på omkring 2010. Handlar om styrd ventilation, inte sorptionsavfuktare. Äldre än tre år |
| Villaägarna, "Se upp med fukt på vinden", https://www.villaagarna.se/radgivning-och-tips/inomhus/mogel/se-upp-med-fukt-pa-vinden/ (datum 2026-09-24, **sammanfattning**) | "Isolera och täta vindsbjälklaget." "Använd avfuktare och tillför värme. Produkter som kombinerar styrd ventilation med tillförsel av värme är ett sätt att hantera fukten som ventileras in." | Intresseorganisation för husägare; ingen produkt eller partner nämnd enligt sammanfattningen |

- RISE/SP, Svenskt Trä, Anticimex eller försäkringsbolag med egen text om avfuktare på kallvind: **inget hittat** i denna omgång. Sökträffen om Länsförsäkringars skadespecialist (Peter Bratt) är ett **utdrag** utan läst källsida.
- Tillverkarna säger samma sak om tätning: Drybox (täta vindsbjälklag, vindslucka och takfotsventilation, B3) och Acetec ("Genom att täta kallvinden och montera en avfuktare", gamla EvoDry-broschyren id 28817061). De är säljare, inte oberoende.

---

## Öppet

- Kapacitet vid 0–10 °C finns bara för Acetec RCF 12 G1 (diagram, avläst) och 6H 2.0 (diagram som motsäger tabellen). Drybox, Fresh, El-Björn/Aerial och Acetec RCF 20 anger inget i kyla.
- Drybox 19 l (X2/X4) och 24 l (X5): villkor saknas. Våtluftsstos 63 eller 50 mm och garantitiden 2/5/7 år är motsägelsefulla mellan Drybox egna källor och PM.
- Vilket av Drybox program X4 levereras i. PM skriver "normalt inställd att följa mögelindex och hålla … 65% RF", vilket motsvarar program 6 i manualen; manualen säger inte vilket läge som är fabriksinställt.
- Fresh D-800:s 0,6 m våtluftskanal: om det räcker ut genom en gavel beror på placering; tillverkaren anger inget om vind specifikt.
- El-Björn ASE 300 = Aerial ASE 300 antas, inte bekräftat. Garanti ej hittad.
- Acetec Pro-seriens kapacitetsdiagram och våtluftskanalens max längd ej lästa. 60 Pro:s våtluftsstos (100 mm) bara från PM.
- Hängande montering: bara Fresh och 6H 2.0 (väggfäste) anger något.
- Om DH2 = Drybox X4 och Vind Classic = DryAttic: samma bolag och samma tal, inte bekräftat.
- Ingen oberoende källa (RISE, Svenskt Trä, försäkringsbolag) läst som uttalar sig om sorptionsavfuktare på kallvind.

## Sidor som inte gick att läsa

- https://www.elbjorn.com/media/8593/ase-300_sv.pdf och https://www.elbjorn.com/media/9051/manual-ase.pdf: **404**.
- https://www.elbjorn.com/sv-se/klimat/byggavfuktare/eb12166-sorptionsavfuktare: svarar men renderas med JavaScript ("Client Portal", felsida i HTML); WebFetch gav bara beskrivningen, inga tekniska data.
- PM:s sök (`/search?query=`, `/sok?q=`): ingen sök-URL som svarar med resultat (404 eller "NotFound" i sidans data). Sökningen gjord i sitemap i stället.
- `https://www.proffsmagasinet.se/proffs-se_sv-se_sitemap_products_1–4.xml`: 404; samma filer lästa på blob-adressen i sitemap-indexet.
- drybox.se (X4, X5) och trygghetsvakten.se (vindsavfuktare, butik, Vind Classic, Vind Start, DH2), Villaägarna: lästa via WebFetch, därför **sammanfattning**, inte ordagrant.
- Boverkets sida via WebFetch gav inget innehåll; läst med curl i stället.
- www.acetec.se/page/installera-avfuktare: inte läst i denna omgång.
