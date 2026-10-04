# Underlag: fuktsortimentet hos Proffsmagasinet (luftfuktare, fuktmätare, testutrustning, hygrometrar, radon, badrumsfläktar)

Beställt av affiliateagenten 2026-09-30. Hämtat 2026-09-30. Priser inkl. moms, lästa i Proffsmagasinets strukturerade sidata (`__INIT_STATE__` på kategori- och produktsida, fältet `ListPrice.AmountWithTax`) 2026-09-30. PM = Proffsmagasinet. Butik är källa för pris, lager, artikelnummer och EAN, aldrig för prestanda. **Utdrag** = sökmotorns utdrag, sidan inte läst. **Sammanfattning** = WebFetch-sammanfattning av sidan, inte ordagrant. Egen räkning är märkt med formel. Inga slugs föreslås här.

- "PM-bilaga" = PDF som PM lägger upp på produktsidan, hämtad från `https://pm-asset.azureedge.net/api/asset-download?id=<id>`. Två av dem (Protimeter Mini, Gann UNI 1) är **PM:s egna svenska bruksanvisningar** med PM:s adress, inte tillverkarens. Det står vid varje sådan rad.
- Lagerstatus: "i lager" = B2C `InStock` ("Skickas inom 24 timmar!"). "i lager (buffert)" = `InStockBuffer` ("Skickas om 5-7 dagar"). "beställningsvara" = `OutOfStock` med `AvailableForPurchase: true` och leveranstext. "ej beställningsbar" = `AvailableForPurchase: false`. "utgången" = produktstatus `Expired`, inget pris visas i kategorin.
- URL-kontroll: `fetch` med `redirect: manual` 2026-09-30. Alla produktadresser i filen gav **200 utan omdirigering** (56 fuktmätaradresser, 3 luftfuktare, 3 badrumsfläktar, 3 radonmätare, 5 betongmätare/givare, 4 termometrar/vågar).
- Kategoriernas kompletta innehåll kontrollerat mot PM:s produktsitemap (`proffs-se_sv-se_sitemap_products_1–4.xml`, 177 358 adresser) 2026-09-30.

---

## Sammanfattning

| Fråga | Svar | Källa |
|---|---|---|
| Luftfuktare över 1 500 kr | **1** (HACE PCMH45, 6 777 kr, "Slut för säsongen", inte köpbar i dag) | PM kategori, 2026-09-30 |
| Luftfuktare totalt aktiva | 2 (Termo Fresh 395 kr i lager, HACE PCMH45) + 8 utgångna | PM kategori med `special_filters=with_unavailable` |
| Fuktmätare (trä/bygg) från 1 500 kr | **43** artiklar (51 i tabellen minus 8 som inte är trä-/byggfuktmätare), varav **13 i lager** i dag | egen räkning ur tabell 2c |
| RF-mätning i betong | Ja: Protimeter HygroMaster II + Hygrostick/Quikstick, Testo 605 RBK, Tramex CME5 (kapacitiv), DeFelsko CMM IS; **inte Vaisala**. Alla sju i betongkategorin är beställningsvaror | PM |
| Testutrustning, summa | **11 009,90 kr** med fem mätare + 0,01 g-våg + ugnstermometer, hemugn antagen. Torkskåp: pris ej hittat | egen räkning, del 3 |
| Radonmätare | Ja, 4: Airthings Home (1 911 kr, i lager), Airthings Wave (2 181 kr), Sarad Radon Scout (39 886 kr) och Scout Plus (42 910 kr). Inga spårfilmsdosor | PM |
| Badrumsfläktar | 12 aktiva, 9 från 1 500 kr (två av dem är paket) | PM |

---

## Del 1. Luftfuktare (befuktare)

### 1a. Kategori

- Adress: `https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/luftfuktare/luftfuktare` (kategori-id PMCat_73131087). Sidan anger "2 produkter". Underkategori för tillbehör: `.../luftfuktare/tillbehor-luftfuktare` (1 aktiv artikel).
- Med `?special_filters=with_unavailable` visas 10 artiklar: de 2 aktiva och 8 utgångna.
- Produktsitemap: bara dessa tre luftfuktaradresser är aktiva i sitemap (Termo Fresh, HACE PCMH45, Woods Vienna HSW100). Inga befuktare finns i andra kategorier (sökt på luftfukt, befukt, humidif, Boneco, Stadler, Venta, Beurer, ultraljud). Luftrenarkategorin har inga kombinerade befuktare i namnen.
- **I lager i dag: 1** (Termo Fresh, 8 st).

### 1b. Prisfördelning, aktiva artiklar

| Under 500 | 500–1 499 | 1 500–2 999 | 3 000 och över |
|---|---|---|---|
| 1 (Termo Fresh 395) | 0 | 0 | 1 (HACE PCMH45 6 777) |

- Märken aktiva: Termo, HACE.
- Utgångna (status `Expired`, inget pris): Woods WHU400 (VS57636), Wilfa 601216 (3026278), Woods Vienna HSW100 (VS57638, senast visat pris 6 503 kr på produktsidan), Termo 563100 (2821278), Wilfa Moist L (28111808), HACE MJS-401 (VS18802), MJS-601 (VS18803), MJS-900 (VS18800).
- Tillbehör: HACE 112288 Universalfilter 4-pack, 279 kr, beställningsvara "Skickas om 9-14 dagar" (VS58803). Utgångna: HACE EFS filter (VS58801), vattenfilter 112211 (VS58802) och 112277 (VS58800).

### 1c. Modeller (färre än sex över 1 500 kr, därför alla aktiva med)

| Nyckel | HACE PCMH45 | Termo Fresh |
|---|---|---|
| PM art.nr | VS18801 | 3081782 |
| EAN (PM) | 8718754100007 | 7350051206603 |
| Pris 30/9 | 6 777 kr | 395 kr |
| Lager | ej beställningsbar, "Slut för säsongen" | i lager (8) |
| Adress | https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/luftfuktare/luftfuktare/hace-pcmh45-luftfuktare-vs18801 → 200 | https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/luftfuktare/luftfuktare/termo-fresh-luftfuktare-15-23-kvm-15-l-3081782 → 200 |
| Typ | **Förångning (evaporativ)**: "axial flow fan to drive the air through the evaporative pads", vattenhjul med skumfilter (bruksanvisning). Produktbladet: "Befuktningstyp: Kallfuktare" | Ultraljud (PM:s text) |
| Kapacitet | 45 l/24 h "at 21 °C x 30 % RH" (bruksanvisningen); egen räkning 45/24 = 1,9 l/h. Produktbladet: "ca 45 liter fukt per dygn" | 120 ml/h ± 20 ml (PM:s text; villkor ej angivna) |
| Rumsyta/volym | 250 m² / 1 000 m³ (produktbladet) | 15–23 m² (PM) |
| Tank | 30 l (produktblad och bruksanvisning); slanganslutning för direkt påfyllning | 1,5 l (PM) |
| Drifttid på en tank | Ej angiven. Egen räkning vid full kapacitet: 30 l / 1,875 l/h = 16 h | "cirka 20–25 timmar" (PM) |
| Effekt | 70 W | 12 W (PM) |
| Luftflöde | 500 m³/h, tre fläkthastigheter (bruksanvisningen, tabellen är förskjuten i PDF-texten; värdet står i luftflödesraden) | – |
| Ljud | 30 dB, "2 steg" (produktbladet; avstånd och läge ej angivna) | Ej angivet |
| Hygrostat | Ja: stegen L ≈ 30 %, M ≈ 50 %, H ≈ 70 % RF, mellanlägen 40 och 60 %, samt C = kontinuerlig. Uttag för extern hygrostat | Nej; två lägen hög/låg (PM) |
| Filter | Filtersats EFS-PCMH45 (2 förångningsmattor + 1 kolfilter). Mattor rengörs eller byts "at least yearly, but preferably twice a year"; dammfiltret "at least once a year". Kostnad per år: **ej angiven av tillverkaren**; filtersatsen är utgången hos PM | – |
| Vattenkrav | Inget krav på avjoniserat vatten i bruksanvisningen; avkalkning av mattor med vit ättika eller avkalkningsmedel | Ej angivet |
| Timer | 2, 4 eller 8 h | – |
| Vikt | **Källorna säger olika:** bruksanvisningen 12,4 kg netto; produktbladet och PM 5 kg. Bruksanvisningen väger tyngst | 0,7 kg (PM) |
| Garanti | "Please contact your retailers regarding warranty information" (bruksanvisningen) | Ej angiven |
| Datablad | Produktblad (TES Scandinavia AB) PM-bilaga id 28832033; bruksanvisning "PCMH45-DW" id 28832034 | Inget tillverkardatablad hos PM; ingen tillverkarsida hittad |

- **Källorna säger olika om typen:** PM:s punktlista kallar PCMH45 "Kraftfull ultrasonisk luftfuktare". Bruksanvisningen beskriver förångning genom fuktade mattor. Bruksanvisningen väger tyngst. PM:s egen artikel (1d) nämner inte typen för PCMH45.
- Bruksanvisningen heter "PCMH45-DW". Att den gäller PM:s PCMH45 bygger på PM:s bilaga.

### 1d. PM:s artikel "Luftfuktare bäst i test 2026 – 3 kundfavoriter jämförda"

- Adress: https://www.proffsmagasinet.se/kunskapsportalen/tester/luftfuktare-bast-i-test (200). Datum i sidans data: **2026-01-22**. Författare: "Henrik … testchef här på Proffsmagasinet".
- Grund: "Vi har jämfört tre av våra populäraste luftfuktare och sammanställt betyg och omdömen från våra kunder." Ingen mätning beskrivs.
- Modellerna och status 2026-09-30:

| # | Modell i artikeln | Pris i dag | Finns i sortimentet |
|---|---|---|---|
| 1 | Termo Fresh | 395 kr | ja, i lager |
| 2 | (HACE) PCMH45 | 6 777 kr | aktiv men "Slut för säsongen" |
| 3 | Wood's Vienna HSW100 | – (senast 6 503 kr) | **utgången** (status `Expired`, GTM "Discontinued"). Artikeln säger: "I skrivande stund har vi inte fått in några omdömen" |

- Artikeln anger "en eftersträvansvärd luftfuktighet på 40–60 %" och att ultraljudsfuktare "kan … lämna kalkrester i form av ett vitt damm". Källa för siffrorna anges inte.

### 1e. Proffs- eller byggbefuktare

- Ingen artikel märkt bygg- eller verkstadsbefuktare. Närmast är HACE PCMH45, som produktbladet riktar till "stora kontor, butiker, bibliotek, konferensrum och tryckerier", 6 777 kr, inte köpbar i dag.
- Ingen Condair, Defensor, Munters eller liknande i sitemap (sökt på märkesnamn och "befukt").

### 1f. Oberoende tester och myndighetsråd om luftfuktare

| Källa | Datum | Vad den säger eller mätte |
|---|---|---|
| Folkhälsomyndigheten, FoHMFS 2014:14 Allmänna råd om fukt och mikroorganismer, https://www.folkhalsomyndigheten.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf | läst 2026-09-30 | Indikation på olägenhet bl.a. "om fukttillskottet inomhus, under vinterförhållanden, regelmässigt överstiger 3 g/m³ luft, eller om luftfuktighetens medelvärde överstiger 7 g vatten/kg torr luft under en längre period under eldningssäsongen, vilket motsvarar ca 45 % relativ luftfuktighet vid 21 °C". Om luftfuktare specifikt: inget. Gällande status ej kontrollerad i FoHM:s författningsregister |
| US EPA, "Use and Care of Home Humidifiers", https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers | uppdaterad 2026-04-29 (**sammanfattning**) | Ultraljud och impeller "very efficient at dispersing minerals in tap water into the air", kan sprida mikroorganismer och ge "white dust". Råd: destillerat vatten eller avmineraliseringspatron, rengör bärbara befuktare "every third day", befukta inte över 50 % RF. Inte nordisk källa |
| Tek.no, "Beste luftfuktere" samletest, https://www.tek.no/samletest/i/pQnxO1/beste-luftfuktere | 2023-01-26 (**sammanfattning**) | 9 modeller. Mätte RF-ökning från 30 % i en sluten kammare på 2 m² under ca 65 min, ljud på 0,5 m (inte standardavstånd), rengöring och filterkostnad. Fynd: en modells inbyggda hygrometer (Clas Ohlson) visade över 70 % och stängde av medan sex referensmätare visade måttlig RF |
| M3, "Bäst i test: 10 luftfuktare", https://www.m3.se/article/1845397/luftfuktare.html | uppdaterad 2025-01-24 (**sammanfattning**) | 10 modeller (Beurer, Levoit, Medisana, Philips ×3, Smartmi ×3, Wilfa). Ingen metodbeskrivning; bedömningen är kvalitativ. Ingen av modellerna säljs av PM |
| Råd & Rön | – | **Inget test av luftfuktare hittat.** Råd & Rön har testat luftrenare och luftavfuktare |
| Testfakta, Konsumentverket | – | Inget test eller råd om luftfuktare hittat |
| Astma- och Allergiförbundet | – | **Ingen sida om luftfuktare hittad** på astmaoallergiforbundet.se (bara luftrenare). Sökträffen "astmaochallergilinjen.se" drivs av läkemedelsföretaget Meda och är inte förbundet |

---

## Del 2. Fuktmätare och fuktkvotsmätare

### 2a. Kategori

- Huvudkategori: `https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare`, **168 artiklar** totalt (31 i lager, 134 beställningsvaror, 3 ej beställningsbara). Innehåller underkategorierna nedan.

| Underkategori (adress under `/maskiner-verktyg/matinstrument/fuktmatare/`) | Antal | I lager |
|---|---|---|
| `fuktmatare` (mätarna) | 54 | 15 (varav Protimeter Mini som buffert) |
| `fuktmatare-for-betong` | 7 | 0 |
| `luftfuktighetsmatare` | 20 | 4 |
| `luftfuktighetsloggers` | 5 | 0 |
| `givare` | 21 | 2 |
| `elektroder` | 9 | 1 |
| `matspetsar` | 11 | 2 |
| `ovriga-tillbehor-fuktmatare` | 41 | 7 |

- Två fuktmätare ligger i en annan kategori, `/maskiner-verktyg/matinstrument/eltestverktyg/installationstestare/`: Elma DT125 och Protimeter BLD5770 Aquant. De är med i tabell 2c.
- Underkategorin `fuktmatare` innehåller också sådant som inte är trä-/byggfuktmätare: Zircon Leak Alert (fuktlarm), Hioki LR5091 (adapter), Hioki LR5001 (logger), Celsicom TH600/TH601A/TH601B (dataloggrar), Fluke 971 (luftfukt/temperatur), Protimeter GrainMaster i (spannmål), Tramex Skipper 5 (båtskrov), Sauermann Kimo varmtrådsanemometer.

### 2b. Prisfördelning, underkategorin `fuktmatare` (54)

| Under 500 | 500–1 499 | 1 500–2 999 | 3 000 och över |
|---|---|---|---|
| 1 (Zircon fuktlarm 244) | 4 (Bosch UniversalHumid 504, Stanley 0-77-030 570, Hioki-adapter 788, Ryobi RBPINMM1 849) | 9 | 40 |

- Märken (antal artiklar): Gann 13, Protimeter 9, Flir 4, Bosch 3, Testo 3, Tramex 3, Celsicom 3, Extech 2, Elma 2, Laserliner 2, Hioki 2, Bosch DIY 1, Stanley 1, Ryobi 1, Fluke 1, Limit 1, Sauermann Kimo 1, Zircon 1, REMS 1. I hela huvudkategorin tillkommer DeFelsko 14, Ridgid, Geo Fennel, Kimo, Beha-Amprobe.
- **Finns inte hos PM** (sitemap 2026-09-30): Trotec, Brennenstuhl, Vaisala. Tramex finns (26 adresser).
- **Egentliga fuktmätare för trä och bygg under 1 500 kr: bara tre** (Bosch UniversalHumid, Stanley 0-77-030, Ryobi RBPINMM1). Försäljningsplacering är inte synlig i sidans data; kategorins standardsortering är inte dokumenterad. De tre visas därför som "de enda under 1 500".

### 2c. Alla från 1 500 kr, PM-data

Full adress = `https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/` + adresskolumnen, utom de två märkta "(annan kategori)" som ligger under `https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/eltestverktyg/installationstestare/`. Typ = PM:s benämning. Alla 51 → 200 utan omdirigering.

| # | Pris kr | Märke och modell | PM:s typ | Lager 30/9 | Art.nr | EAN (PM) | Adress |
|---|---|---|---|---|---|---|---|
| 1 | 1 609 | Testo 606-1 | Fuktmätare | i lager (4), "Skickas inom 24 timmar!" | 2850033 | 4029547008290 | testo-606-1-fuktmatare-2850033 |
| 2 | 1 662 | Extech MO55 | Fuktmätare | i lager (65), "Skickas inom 24 timmar!" | MZ13604 | 793950475058 | extech-mo55-fuktmatare-med-batteri-och-stift-mz13604 |
| 3 | 1 680 | Elma DT125 | Fuktmätare | i lager (9), "Skickas inom 24 timmar!" | 4065187 | 5706445840168 | (annan kategori) elma-dt125-fuktmatare-med-batteri-for-tra-div-byggnadsmaterial-samt-rel-luftfuktighet-4065187 |
| 4 | 1 926 | Bosch GMP 1-13 | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 4079911 | 4053423340013 | bosch-gmp-1-13-fuktmatare-4079911 |
| 5 | 2 064 | Elma DT-128M | Fuktmätare | i lager (63), "Skickas inom 24 timmar!" | 2818988 | 5706445840151 | elma-dt-128m-fuktmatare-2818988 |
| 6 | 2 147 | Bosch GMP 2-15 | Fuktmätare | i lager (3), "Skickas inom 24 timmar!" | 4079909 | 4053423340044 | bosch-gmp-2-15-fuktmatare-4079909 |
| 7 | 2 201 | Extech MO230 | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | MZ13605 | 793950472309 | extech-mo230-fuktmatare-med-3-st-batterier-mz13605 |
| 8 | 2 878 | Gann Hydromette Compact | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | LA13772 | 7340076301551 | gann-hydromette-compact-fuktmatare-2-st-kalibreringar-la13772 |
| 9 | 2 900 | Gann Hydromette Compact B | Fuktmätare | ej beställningsbar, "Ej beställningsbar för tillfället" | LA13760 | 7340076300714 | gann-hydromette-compact-b-fuktmatare-la13760 |
| 10 | 2 990 | Flir MR55 | Fuktmätare | beställningsvara, "Skickas 2026-10-05" | ME13552 | 5706445881734 | flir-mr55-fuktmatare-med-bluetooth-me13552 |
| 11 | 3 026 | Testo 606-2 | Fuktmätare | i lager (2), "Skickas inom 24 timmar!" | 2850034 | 4029547008306 | testo-606-2-fuktmatare-2850034 |
| 12 | 3 217 | Bosch GMM 1-15 | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 4079903 | 4053423340051 | bosch-gmm-1-15-fuktmatare-med-batteri-och-laddare-4079903 |
| 13 | 3 357 | Gann Hydromette BL Compact | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | LA13732 | 7340076301476 | gann-hydromette-bl-compact-fuktmatare-la13732 |
| 14 | 3 360 | Celsicom Easy Connect TH600 | Datalogger | beställningsvara, "Skickas 2026-10-08" | 3080086 | 7350070330884 | celsicom-easy-connect-th600-datalogger-fjarrovervakning-via-mobiltelefonnatet-3080086 |
| 15 | 3 469 | Protimeter Mini | Fuktmätare | i lager (buffert), "Skickas om 5-7 dagar" | LA13010 | 5706445682881 | protimeter-mini-fuktmatare-la13010 |
| 16 | 3 508 | Elma Moisture Max | Fuktmätare | i lager (3), "Skickas inom 24 timmar!" | 4088736 | 4088736 (PM:s fält; Elma anger 5706445702008) | elma-moisture-max-fuktmatare-med-batteri-bluetooth-rel-4088736 |
| 17 | 3 732 | Flir MR59 | Fuktmätare | i lager (3), "Skickas inom 24 timmar!" | ME13553 | 5706445881741 | flir-mr59-fuktmatare-med-bluetooth-me13553 |
| 18 | 3 903 | Limit 6200 | Fuktmätare | beställningsvara, "Skickas om 7-8 dagar" | 3073144 | 7311662215194 | limit-6200-fuktmatare-inkl-batteri-3073144 |
| 19 | 4 037 | REMS Detect W | Fuktmätare | ej beställningsbar, "Ej beställningsbar för tillfället" | 3015799 | 4039976160810 | rems-detect-w-fuktmatare-dielektrisk-3015799 |
| 20 | 4 812 | Testo 616 | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 2850037 | 4029547003783 | testo-616-fuktmatare-2850037 |
| 21 | 5 081 | Gann Hydromette BL H 41 | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | LA13780-1 | – | gann-hydromette-bl-h-41-fuktmatare-utan-tillbehor-la13780-1 |
| 22 | 5 236 | Laserliner 082.321A (DampMaster Compact Plus) | Fuktmätare | i lager (9), "Skickas inom 24 timmar!" | 4065101 | 4021563699858 | laserliner-082321a-fuktmatare-med-vaska-och-batterier-4065101 |
| 23 | 5 369 | Protimeter BLD5775 (DigitalMini) | Fuktmätare | beställningsvara, "Skickas om 9-14 dagar" | 4067527 | 1976445830726 | protimeter-bld5775-fuktmatare-4067527 |
| 24 | 5 445 | Celsicom Easy Connect TH601A | Datalogger | beställningsvara, "Skickas om 8-12 dagar" | 3080091 | 7350070330914 | celsicom-celsicom-easy-connect-th601a-datalogger-fjarrovervakning-via-mobiltelefonnatet-3080091 |
| 25 | 5 565 | Celsicom Easy Connect TH601B | Datalogger | beställningsvara, "Skickas om 8-12 dagar" | 3080092 | 7350070330921 | celsicom-celsicom-easy-connect-th601b-datalogger-fjarrovervakning-via-mobiltelefonnatet-3080092 |
| 26 | 5 966 | Gann Hydromette BL Compact B 2 | Fuktmätare | i lager (2), "Skickas inom 24 timmar!" | LA13731 | 7340076300936 | gann-hydromette-bl-compact-b-2-fuktmatare-la13731 |
| 27 | 6 500 | Laserliner MoistureMaster Compact Plus | Fuktmätare | beställningsvara, "Skickas 2026-10-05" | 2680022 | 4021563699865 | laserliner-moisturemaster-compact-plus-fuktmatare-med-bluetooth-2680022 |
| 28 | 6 605 | Hioki LR5001 | Fuktlogger | beställningsvara, "Skickas om 9-14 dagar" | 3091677 | – | hioki-hioki-lr5001-fuktlogger-med-batterier-3091677 |
| 29 | 6 608 | Protimeter BLD5770 Aquant | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 4065180 | 1976444445570 | (annan kategori) protimeter-bld5770-aquant-fuktmatare-med-batteri-4065180 |
| 30 | 6 774 | Fluke 971 | Fuktmätare (luft) | beställningsvara, "Skickas om 8-12 dagar" | 2260011 | 095969287517 | fluke-971-fuktmatare-2260011 |
| 31 | 6 895 | Tramex Skipper 5 | Fuktmätare (båtskrov) | beställningsvara, "Skickas om 9-14 dagar" | LA13843 | 5391521430243 | tramex-skipper-5-fuktmatare-for-batskrov-la13843 |
| 32 | 9 074 | Gann Hydromette UNI 1 - B50 | Fuktmätare | i lager (3), "Skickas inom 24 timmar!" | LA13750 | 7340076301001 | gann-hydromette-uni-1-b50-fuktmatare-la13750 |
| 33 | 9 695 | Protimeter BLD5375 SurveyMaster | Fuktmätare | i lager (3), "Skickas inom 24 timmar!" | 4059208 | 1976449879004 | protimeter-bld5375-surveymaster-fuktmatare-for-matning-och-sokning-4059208 |
| 34 | 9 931 | Protimeter GrainMaster i | Fuktmätare (spannmål) | beställningsvara, "Skickas om 8-12 dagar" | LA13070 | – | protimeter-grainmaster-i-fuktmatare-la13070 |
| 35 | 10 025 | Gann Hydromette BL H 41, Kit 1 | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | LA13780-2 | – | gann-hydromette-bl-h-41-fuktmatare-kit-1-la13780-2 |
| 36 | 10 318 | Flir MR160 | Fuktmätare (med värmebild) | beställningsvara, "Skickas om 8-12 dagar" | ME13550 | 793950371602 | flir-mr160-fuktmatare-me13550 |
| 37 | 10 864 | Tramex CMEX5 | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 3071182 | 5391521430281 | tramex-tramex-cmex5-fuktmatare-3071182 |
| 38 | 11 852 | Gann Hydromette BL H 41, Kit 2 | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | LA13780-3 | – | gann-hydromette-bl-h-41-fuktmatare-kit-2-la13780-3 |
| 39 | 12 290 | Flir MR77 | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | ME13545 | 7332558007372 | flir-mr77-fuktmatare-me13545 |
| 40 | 13 467 | Gann Hydromette UNI 11 - B55 | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | LA13771 | 7340076301797 | gann-hydromette-uni-11-b55-fuktmatare-la13771 |
| 41 | 14 451 | Gann BL A plus | Fuktmätare | beställningsvara, "Skickas om 7-9 dagar" | 4008010 | 5060620191255 | gann-bl-a-plus-fuktmatare-4008010 |
| 42 | 15 200 | Gann Compact B2 + Compact + Compakt TF-IR | Fuktmätarpaket | beställningsvara, "Skickas om 7-9 dagar" | LA23700 | 7340076301490 | gann-compact-b2compactcompakt-tf-ir-fuktmatarpaket-la23700 |
| 43 | 16 165 | Gann Hydromette BL-E Compact Set | Fuktmätarpaket | beställningsvara, "Skickas om 7-9 dagar" | LA23701 | 7340076301537 | gann-hydromette-bl-e-compact-set-fuktmatarpaket-la23701 |
| 44 | 17 045 | Gann BL A plus, för trä | Fuktmätarpaket | beställningsvara, "Skickas om 7-9 dagar" | 4008009 | 5060620191262 | gann-bl-a-plus-fuktmatarpaket-for-tra-4008009 |
| 45 | 17 141 | Protimeter MMS3, mjuk väska | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 3139867 | 5706445682935 | protimeter-mms3-fuktmatare-med-batteri-i-mjuk-vaska-3139867 |
| 46 | 17 810 | Protimeter HygroMaster II + SurveyMaster II | Fuktmätarpaket | beställningsvara, "Skickas om 8-12 dagar" | LA23042 | 5706445682621 | protimeter-hygromaster-iisurveymaster-ii-fuktmatarpaket-la23042 |
| 47 | 18 229 | Protimeter MMS3, hård väska | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 3139868 | 5706445682959 | protimeter-mms3-fuktmatare-med-batteri-i-hard-vaska-3139868 |
| 48 | 19 409 | Sauermann Kimo varmtrådsanemometer | Varmtrådsanemometer | beställningsvara, "Skickas om 8-12 dagar" | 4040643 | 5706445790173 | sauermann-kimo-5706445790173-varmtradsanemometer-4040643 |
| 49 | 20 082 | Protimeter MMS3 med tillbehör | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 3139869 | 5706445682966 | protimeter-mms3-fuktmatare-med-tillbehor-3139869 |
| 50 | 21 717 | Tramex RWS | Fuktscanner | beställningsvara, "Skickas om 8-12 dagar" | LR13809 | 5391521430045 | tramex-rws-fuktscanner-lr13809 |
| 51 | 24 650 | Protimeter MMS3 med tillbehör och batteri | Fuktmätare | beställningsvara, "Skickas om 8-12 dagar" | 3139870 | 5706445682973 | protimeter-mms3-fuktmatare-med-tillbehor-och-batteri-3139870 |

- Räkning (egen, ur tabellen): 51 rader; minus 8 som inte är trä-/byggfuktmätare (rad 14, 24, 25, 28, 30, 31, 34, 48) = **43**. I lager (inkl. buffert) av de 43: rad 1, 2, 3, 5, 6, 11, 15, 16, 17, 22, 26, 32, 33 = **13**.
- "–" i EAN-kolumnen = PM:s `Gtin`-fält innehåller artikelnumret, inte en EAN.
- Under 1 500 kr, de tre fuktmätarna: Bosch DIY UniversalHumid 504 kr (4054182, i lager 5, EAN ej läst), Stanley 0-77-030 570 kr (2901325, i lager 7), Ryobi RBPINMM1 849 kr (4048978, i lager 5). Adresser under samma bas, 200.

### 2c forts. Datablad, de modeller som lästs

Typ: S = stift/resistiv, K = stiftlös/kapacitiv (dielektrisk), S+K = kombi. "Ej hittat" = letat i den angivna källan utan träff.

| Modell | Typ | Fuktkvot trä | Noggrannhet | Träslag/korrektion | Bygg | RF luft | Temp.komp. | Mätdjup (K) | Stift / hammare | Kontroll | Logg/app | Batteri | IP | Garanti | Källa |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Testo 606-1 | S | 0–90 % | ±1 % "(konduktivitet)" | kurvor för bl.a. bok, gran, lärk, ek, tall, lönn | kurvor för cementputs, betong, gips, anhydrit, cementbruk, kalkbruk, tegel | nej | ej angivet | – | fasta stift; hammare ej nämnd | självtest; kalibreringsprotokoll ingår | nej | 2×AAA, 200 h | ej angivet | ej angivet | Testo/Nordtec "PocketLine" produktblad 02.2007, PM-bilaga id 28825974 (bladet är från 2007) |
| Testo 606-2 | S | som 606-1 | som 606-1 | som 606-1 | som 606-1 | **ja**, 0–100 %, ±2,5 % (5–95 %) | ej angivet | – | som 606-1 | som 606-1 | nej | 2×AAA, 130 h | ej angivet | ej angivet | samma produktblad |
| Extech MO55 | S+K | stift 5–50 %; stiftlös 0–99,9 % (relativ) | stift "±(3 % + 5 digits)" vid 22–25 °C | nej; två lägen: trä / byggmaterial | stift 1,4–33 % | nej | ej angivet | < 25 mm | 8 mm integrerade, utbytbara | självtest mot locket: trä 17–19 %, bygg 15,5–17,5 % | nej | 9 V | ej angivet | ej angivet | Extech datablad 5/10/16 id AssetDocument30216366; bruksanvisning MO55-en-GB V1.1 10/18 id AssetDocument30219802 |
| Elma DT125 | S | 1–75 % | 0–30 %: ±1; 30–60 %: ±2; 60–75 %: ±4 | 3 trägrupper (W1–W3) | 4 byggmaterialgrupper (B1–B4), 0,1–24 %; ±0,5 % | ja, 0–100 %; ±3,5 % inom 20–80 % | ej angivet | – | 8 mm, integrerade, utbytbara; hammarelektrod kan anslutas (elma.dk, **utdrag**) | kalibrerings-/självtestpunkter i skyddslocket | nej | 3×CR2032 | ej angivet | 1 år | Elma bruksanvisning SE/NO/DK/EN, PM-bilaga id AssetDocument81306978 (danska tekniska data, tabellen förskjuten i PDF-texten) |
| Extech MO230 | S | 0–75 % | ej angivet | 3 trägrupper, "approximately 150 species" | 4 grupper, 19 material, 0,1–24 % | ja, 0–100 % | ej angivet | – | 8 mm, utbytbara | "measurement verification test" | nej | 3×CR2032 | ej angivet | ej angivet | Extech datablad 8/30/12, id 30218699 |
| Bosch GMP 2-15 | S | ej hittat | "±1 %" för ledningsförmåga (materialfukt) | 37 träslag | 10 byggmaterial | ja, 5–95 %; ±3 % (5–90 %), ±5 % (91–95 %) | ej angivet | – | fasta stift; längd ej hittad | automatiskt självtest | nej | 2×AA 40 h, eller Li-jon 3,7 V 25 h | IP65 | ej angivet | Bosch bruksanvisning 1 609 92A F7L (10.11.2025), svensk del s. 104–105, https://www.bosch-professional.com/binary/manualsmedia/o615646v21_160992AF7L_202511.pdf; https://www.bosch-professional.com/se/sv/products/gmp-2-15-0601078100 (**sammanfattning**) |
| Bosch GMP 1-13 | S | ej hittat | "±1 %" | 37 | 10 | nej | ej angivet | – | fasta stift | självtest | nej | 2×AA | IP65 | ej angivet | samma bruksanvisning; https://www.bosch-professional.com/se/sv/products/gmp-1-13-0601078000 (**sammanfattning**) |
| Bosch GMM 1-15 | K | ej hittat | "Dyn-läge ±4 %" | 37 | 10 | nej | ej angivet | 0–30 mm | – | ej angivet | nej | 2×AA | IP65 | ej angivet | https://www.bosch-professional.com/se/sv/products/gmm-1-15-0601078200 (**sammanfattning**); bruksanvisning ej läst |
| Flir MR55 | S | 7–29 % ±2 % MC; 30–99 % "Reference Only" | se ovan | 11 materialgrupper (9 trä) | grupp 10 och 11 (1–35 %) | ja; noggrannheten går inte att läsa entydigt ur PDF-texten | "automatically compensates for ambient temperature" | – | 10 mm integrerade, utbytbara | "calibration test feature" | Bluetooth, FLIR Tools Mobile | 2×AA, 70 h | IP40 | "Limited 3 years" | Flir produktblad 07/18, PM-bilaga id 28830161 |
| Flir MR59 | K (kula) | 0–100 %, "Relative measurement" | relativ | – | – | nej | – | upp till 100 mm beroende på material | – | ej angivet | Bluetooth | 9 V, 40 h | IP40 | "Limited 3 years" | Flir produktblad 07/18, id 28830166 |
| Protimeter Mini | S | 6–28 % FK; 6–90 % %WME där > 28 % är relativt | ej angivet | ingen träslagsinställning | %WME | nej | ej angivet | – | fasta stift; djupprober och hammarelektrod kan anslutas | CalCheck-bricka medföljer, ska visa 17–19 | nej | 9 V | ej angivet | ej angivet | **PM:s egen svenska bruksanvisning**, id 28829691 |
| Protimeter BLD5775 DigitalMini | S | 6–100 % MC/%WME, över 30 % relativt | ej angivet; "i allmänhet giltiga i ett år efter kalibreringsdatumet" | ej angivet | %WME | nej | ej angivet | – | integrerade stift; djupväggsonder, hammarelektrod tillval | intern kalibreringskontroll | ej angivet | 2×AA 2 700 mAh, > 20 h | ej angivet | ej angivet | Protimeter/Amphenol instruktionsmanual INS5775 Rev. A juni 2023 (svensk), id AssetDocument81307319 |
| Protimeter BLD5770 Aquant | K | "Avläsning: 60 till 999" (relativ) | – | – | – | nej | – | upp till 19 mm | – | ej angivet | Bluetooth (PM) | 2×AA | ej angivet | ej angivet | Protimeter manual (svensk), id AssetDocument81306512 |
| Protimeter BLD5375 SurveyMaster | S+K | stift 6–99 % WME (över 30 % relativt); stiftlös 60–999 relativ | ej angivet | "wood species calibration chart" medföljer | %WME | nej | ej angivet | upp till 19 mm; stift upp till 10 mm | hammarelektrod tillval | inbyggd WME-kontroll, periodisk autokontroll var 50:e start (**utdrag** för "50") | Bluetooth, Protimeter Connect | AA | ej angivet | 2 år | Protimeter datablad AAS-920-085G-EN (07/2024), https://www.protimeter.com/hubfs/AAS-920-085G-EN-Protimeter-SurveyMaster-072224-web.pdf |
| Protimeter MMS3 | S+K+RF | stift 6–100 % WME (över 30 % relativt) | Hygrostick RF: ±2 % (41–98 % vid 20 °C) | ej angivet | %WME | ja, via Hygrostick/Quikstick | ej angivet | ej läst | hammarelektrod BLD5055, djupelektrod BLD5018 i setet | "built-in calibration" | Bluetooth, minne 10 000 | 2×AA | ej angivet | 24 månader | Protimeter broschyr MMS3, id AssetDocument82181681; set-innehåll PM |
| Elma Moisture Max | S+K | %MC och %WME | ±3 % | ej angivet | trä, gips, EPS/XPS, glasfiber, puts, takpapp, murverk, klinker | ja, 20–95 %, ±5 % | ej angivet | 10 mm (Elma anger "Dybde 10 mm" utan att skilja lägena) | hammarelektrod 4088738 säljs av PM | ej angivet | Bluetooth, app, 200 minnen | 9 V | ej angivet | ej angivet | https://elma.dk/produkter/elma-moisture-max (**sammanfattning**) |
| Elma DT-128M | K | "Komparativt fugtniveau" | – | – | 11 material listade | nej | – | 40 mm (elma.dk); "20–40 mm", minst 20 mm material (återförsäljare, **utdrag**) | – | automatisk kalibrering (PM) | nej | 3×AAA | ej angivet | ej angivet | https://elma.dk/produkter/elma-dt128m-fugtsoeger (**sammanfattning**) |
| Laserliner 082.321A DampMaster Compact Plus | S | grupp A 4,6–91,6 %; B 6,1–103,6 %; C 3,0–79,2 % | "± 1 % (5 % … 30 %) ± 2 % (< 5 % and > 30 %)" | 3 trägrupper | 8 byggmaterial | nej | "Automatic and manual temperature compensation" | – | utbytbara spetsar | "testing … through the protective cap" | Digital Connection, MeasureNote-app | 4×AAA (**utdrag**) | ej angivet | ej angivet | Laserliner datablad 082.321A, https://laserliner.com/export/assets/082.321A_en_60_17.pdf |
| Gann Hydromette BL Compact | S | 6–25 % | ej angivet | "4-stage wood type correction" | 0,4–6,0 vikt-% (kalkbruk, gipsputs, blandputs); EPS, träfiberisolering | nej | ej angivet | – | 10×20 mm stift, mätdjup max 15 mm | ej angivet | nej | 9 V | ej angivet | ej angivet | Gann manual (engelska), id 28829746 |
| Gann Hydromette BL Compact B 2 | K (kula) | – | – | – | 0–199,9 digits; **0,3–6,0 vikt-%**, 0,3–4,0 CM-% (kurvor för 7 byggmaterial) | nej | – | beror på densitet; värden är "benchmarks" | – | automatisk kalibrering | nej | 9 V | ej angivet | ej angivet | Gann produktblad id 28829741; manual id 28829740 |
| Gann Hydromette UNI 1 - B50 | K (kula) | – | "indikativa och vägledande, inte som exakta mätvärden" | – | 0–199 digits, tolkningstabell | nej | – | 100 mm (PM) | – | nollkontroll i luft (−5 till 5) | nej | 9 V (PM) | ej angivet | ej angivet | **PM:s egen svenska bruksanvisning**, id 28874760 |
| Testo 616 | K | 0–50 % | ej angivet | "Inställbar för olika material" | 0–20 % blandade byggmaterial | nej | – | trä 50 mm, övrigt 30 mm | – | kalibreringsprotokoll ingår | nej | ej angivet | ej angivet | ej angivet | Testo/Nordtec produktblad 2009-10, id 28825975 |

- Ej lästa datablad (i tabell 2c men inte ovan): Gann Hydromette Compact (LA13772), Compact B (LA13760), BL H 41 och kit, UNI 11, BL A plus och paket, BL-E Compact Set; Laserliner MoistureMaster Compact Plus; Limit 6200; REMS Detect W; Flir MR77 och MR160 (produktblad finns hos PM, ej lästa); Tramex CMEX5, RWS; Protimeter HygroMaster II-paketet. Under 1 500: Bosch UniversalHumid, Ryobi, Stanley har lästs översiktligt: UniversalHumid trägrupp A 7,1–74,7 %, B 6,4–61,9 %, ledningsförmåga ±1 %, 2 trägrupper (Bosch 1 609 92A 7M9, 29.04.2022, id AssetDocument76763748); Ryobi RBPINMM1 trä 0–51 % ±2 %, 4 materiallägen (Ryobi manual id AssetDocument75347248, tabellen förskjuten); Stanley 0-77-030 trä 6–44 %, bygg 0,2–2,0 %, självtest ska visa 19 % ±1 (Stanley manual id AssetDocument71843432).
- **Källorna säger olika:** PM:s typbeskrivning för Laserliner 082.321A ("DampMaster Compact Plus") stämmer med Laserliner; PM:s benämning "Fuktmätare" gäller både stift och kula i samma kategori utan typfält.
- Bosch anger "±1 %" utan att säga om det är procentenheter fuktkvot eller procent av avläsningen. Skriv inte om det som "±1 procentenhet".

### 2d. RF-mätning i betong (borrhålsmetoden)

| Produkt | Pris | Lager | Art.nr | Uppgift | Adress |
|---|---|---|---|---|---|
| Protimeter HygroMaster II med HygroStick | 7 515 | beställningsvara, 8–12 dagar | LA13043-1 | "kan användas för mätning i luft eller med mätrör i betong" (PM) | .../fuktmatare/fuktmatare-for-betong/protimeter-hygromaster-ii-fuktmatare-med-hygrostick-la13043-1 |
| Protimeter HygroMaster II med QuikStick | 7 371 | beställningsvara | LA13043-2 | – | .../fuktmatare-for-betong/protimeter-hygromaster-ii-fuktmatare-med-quikstick-la13043-2 |
| Testo 605 RBK fuktmätarkit | 11 013 | beställningsvara | LA13350 | PM: "RBK-godkänd fuktmätset", 0–100 % RF, ±3 % RF (butikstext; RBK-status ej kontrollerad hos RBK) | .../fuktmatare-for-betong/testo-605-rbk-fuktmatarkit-utan-rbk-kalibreringscertifikat-la13350 |
| Tramex CME5 | 9 239 | beställningsvara | LA13821 | kapacitiv ytmätning, "Fukt i betong: 0–6 %", ca 20 mm (PM). **Inte** borrhålsmetoden | .../fuktmatare-for-betong/tramex-cme5-fuktmatare-la13821 |
| DeFelsko CMM IS Basic / Complete / Pro Kit | 5 183 / 9 026 / 23 649 | beställningsvaror | LA14010 / LA14011 / LA14012 | "RF-givare" (PM) | .../fuktmatare-for-betong/ |
| Protimeter HygroStick, 5-pack (varianter) | 5 999 | beställningsvara | LM13060 | ±3 % RF (30–40 %), ±2 % RF (41–98 %), ±0,3 °C (PM:s återgivning) | .../fuktmatare/givare/protimeter-hygrostick-rf-givare-5-pack-lm13060 |
| Protimeter QuickStick kort | 2 529 | beställningsvara | LM13055 | – | .../givare/ |
| Tramex Hygro-i, 3-pack (varianter) | 6 449 | beställningsvara | LR13800-2 | – | .../givare/ |
| Testo 605-H1 givare | 1 659 | **i lager (4)** | LA13360 | givare till Testo 605 RBK | .../givare/testo-605-h1-givare-la13360 |
| Protimeter BLD4750HS-100 foderrör, 100 st | 4 441 | **i lager (2)** | LM53042 | – | .../ovriga-tillbehor-fuktmatare/ |
| Protimeter BLD4755-Kit golvset (utan instrument) | 18 980 | beställningsvara | 3071179 | – | .../ovriga-tillbehor-fuktmatare/ |
| Testo fuktburk 85 % RF / Tramex SAL75 fuktburk 75 % RF | 2 797 / 1 428 | beställningsvara / i lager (1) | LM13320 / LR13802 | kontroll av RF-givare | .../ovriga-tillbehor-fuktmatare/ |

- Vaisala: **säljs inte** (0 träffar i sitemap och kategorier).
- Datablad för RF-utrustningen är inte lästa; bara PM:s texter.

### 2e. Oberoende tester av fuktmätare

| Källa | Datum | Metod | Resultat (bara det källan säger) |
|---|---|---|---|
| SP Trä (i dag RISE), rapport PX21326 "Instruktioner för fuktkvotsmätning i fält och rekommendation av mätinstrument", uppdragsgivare SABO, https://www.maleriforetagen.se/globalassets/dokumentbank-oppna/sp-ytfuktkvotsrapport-20120920.pdf | 2012-09-20 (äldre än tre år) | 11 mätare kontrollerade mot SP Träs kalibreringsblock (resistanser motsvarande fuktkvoter i gran och furu), sedan 5 + 5 konditionerade provkroppar av gran och furu, 5 punkter per bit, och sprejade bitar | Delmhorst RDM-2S, RDM3, J2000: "Mycket Bra". Testo 606-2: "OK med konstant felvisning"; en av tre som "fungerade bäst" för ytfuktkvot (med Delmhorst J2000 och Voltcraft FM-300). Protimeter Surveymaster SM: "OK med konstant felvisning", "saknar möjlighet att ändra träslag". Extech MO260: "Stora avvikelser"; Extech och Greppa "bör därför undvikas", gran avvek "upp till 25%". Gann BL Compact B: "Inte en stiftmätare". Rapporten nämner att enkla mätare säljs under flera namn: Laesent DT-129 = Voltcraft FM-300 = Exotec MC-410 = Extech MO220 |
| Gör Det Själv, Råd & Rön, Testfakta | – | – | **Inget test av fuktmätare hittat** 2023–2026. Sökträffarna "bäst i test" (fuktmätarguiden.se, testarallt.se, testkollen.se, testix.se m.fl.) är affiliatesidor, inte källor |
| Norska och danska motsvarigheter | – | – | Inget oberoende test hittat (träffarna är affiliatesidor: velgenkelt.no, forbrukertest.no, verkt.no) |

- SP-rapporten gäller inte samma modeller som PM säljer i dag, utom Testo 606-2 och Gann BL Compact B (utan "2"). Extech-modellen i testet är MO260, inte MO55.

---

## Del 3. Vad ett eget fuktmätartest kostar

### Krav i standarden

Källa: EN 13183-1:2002 "Moisture content of a piece of sawn timber – Part 1: Determination by oven dry method", läst i iTeh:s förhandsvisning av den identiska SIST EN 13183-1:2003, https://cdn.standards.iteh.ai/samples/7839/6133757de4e04e4cafd48798aa517aaf/SIST-EN-13183-1-2003.pdf. Svensk beteckning SS-EN 13183-1 med rättelse SS-EN 13183-1/AC:2004 (SIS, https://www.sis.se/en/produkter/wood-technology/wood-sawlogs-and-sawn-timber/ssen131831/). Gällande status i SIS ej kontrollerad.

| Krav | Värde | Källa |
|---|---|---|
| Våg | "Balance accurate to 0,1 g, if the mass of the test slice is likely to be more than 100 g in an oven dry state. Balance accurate to 0,01 g, if … less than 100 g" | EN 13183-1 avsnitt 4 |
| Ugn | "Equipment for drying wood ensuring free internal circulation of air and capable of maintaining a temperature of (103 ± 2) °C" | EN 13183-1 avsnitt 4 (texten delvis överskriven av vattenstämpel, men läsbar) |
| Provbit | Hel tvärsnittsskiva, minst 20 mm längs fibrerna, tagen minst 300 mm från ändarna eller mitt på om biten är kortare än 600 mm; fri från kvist, bark och kådlåpor | EN 13183-1 avsnitt 5 (texten "20 mm" delvis överskriven av vattenstämpel) |
| Vägning | "immediately after cutting"; annars i tät burk och vägning inom 2 h | EN 13183-1 avsnitt 5 |
| Torrt | Tills skillnaden mellan två vägningar med 2 timmars mellanrum är "less than 0,1 %" | EN 13183-1; Svenskt Trä: "tills vikten inte förändras mer än maximalt 0,1 procent på två timmar", https://www.svenskttra.se/trafakta/allmant-om-tra/tra-och-fukt/ (**sammanfattning**) |
| Kådrikt virke | Vakuum < 100 Pa vid max 50 °C, eller exsickator | EN 13183-1 avsnitt 5 |
| Formel | u = (m1 − m0) / m0 × 100, redovisas med 0,1 procentenhet | EN 13183-1 avsnitt 6 |
| Resistansmetodens spridning | "cirka ± 2 procentenheters spridning i förhållande till torrviktsmetoden vid 18 % medelfuktkvot"; användbar 7–25 % | Träguiden, uppdaterad 2021-06-14, https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/fuktegenskaper1/fuktkvot-och-matning/ (**sammanfattning**) |

- **Hemugn med separat termometer:** ingen källa hittad som säger att det duger. Standarden kräver fri luftcirkulation och att (103 ± 2) °C hålls. Om en hemugn används är det ett eget antagande som ska redovisas som avvikelse från standarden.
- Egen räkning av provmassa: en skiva 45 × 145 × 20 mm = 130,5 cm³; med densitet ca 0,45 g/cm³ torr (antagande, ej hämtad) ≈ 59 g, alltså under 100 g → **våg med 0,01 g** krävs.

### Priser på utrustning (butik, 2026-09-30)

| Sak | Produkt | Pris | Butik och status | Anmärkning |
|---|---|---|---|---|
| Våg 0,01 g | Clas Ohlson "Digital köksvåg med dubbla vågplattor", art. 44-6850: liten platta 500 g / 0,01 g | 349,00 kr | https://www.clasohlson.com/se/Digital-koksvag-med-dubbla-vagplattor/p/44-6850, **ej i lager** (**sammanfattning**) | Butiken anger 0,01 g som "noggrannhet"; troligen upplösning. Verklig noggrannhet ej angiven. Kalibreringsvikt ingår inte enligt sidan |
| Våg, lab | Ohaus precisionsbalans 220 g (RS 0199385/0199386), Kern EMB 500-1 | – | se.rs-online.com gav **403**; pris ej läst | Kern EMB 500-1 har 0,1 g enligt sökträffens titel (500 g), räcker bara för provbitar över 100 g torrt |
| Ugnstermometer | Clas Ohlson "Ugnstermometer digital med touch-display och timer", art. 44-5813, 0–300 °C, 85 cm givarkabel | 199,90 kr | https://www.clasohlson.com/se/Ugnstermometer-digital-med-touch-display-och-timer/p/44-5813 (**sammanfattning**); lager ej läst | Noggrannhet ej angiven |
| Torkskåp | Lab-torkugnar (Anbonilabb, KEBO/Froilabo, Carbolite AX30 m.fl.) | **ej hittat** | Anbonilabb visar inga priser; expondo.se säljer bara värmeskåp upp till 70 °C (2 459–13 001 kr) som inte klarar 103 °C | Pris ej belagt |
| Kalibreringsblock (SP:s rekommendation) | Sågteknik i Södermanland AB, Fuktteknik i Lund (fuktbutiken.se) | ej hämtat | – | Rapporten PX21326 pekar på dessa två |

- **PM säljer:** ingen våg som klarar kravet (bara DYMO brev-/paketvågar M2, M5, M10, S50, 581–2 122 kr, ingen upplösning angiven på sidan). Termometrar finns: Elma 708 med insticksprovare 451 kr (i lager, 2818997), Elma 711 1 338 kr (i lager, 2818985), Testo 905-T1 1 158 kr (beställningsvara), Fluke 80PK-1 typ K-prob 945 kr (i lager). Deras mätområde och noggrannhet är inte lästa. PM säljer också Protimeter BLD5086 kalibreringscheck 267 kr (i lager, LR13009) och Gann kontrollkub för trä 1 145 kr (beställningsvara, LM13758).

### Föreslaget urval av fem mätare (ur del 2)

| # | Roll | Modell | Pris PM | Lager | Varför |
|---|---|---|---|---|---|
| 1 | Konsument, stift | Bosch DIY UniversalHumid | 504 | i lager | billigaste stiftmätaren, 2 trägrupper |
| 2 | Stift med träslagskurvor | Testo 606-1 | 1 609 | i lager | fabrikskurvor för gran och tall; 606-2 fanns med i SP-testet 2012 |
| 3 | Kombi stift + stiftlös, konsument/hantverkare | Extech MO55 | 1 662 | i lager (65) | vanligaste kombin; ingen träslagsinställning |
| 4 | Proff, stift | Protimeter Mini | 3 469 | i lager (buffert, 5–7 dagar) | CalCheck-bricka; ingen träslagsinställning |
| 5 | Stiftlös med träslag | Bosch GMM 1-15 | 3 217 | beställningsvara, 8–12 dagar | enda stiftlösa med träslagsval (37); alternativ i lager: Flir MR59 3 732 kr (relativ skala) |

- Summa mätare, egen räkning: 504 + 1 609 + 1 662 + 3 469 + 3 217 = **10 461 kr**.
- Summa med våg och termometer (hemugn antagen, ej standardenlig): 10 461 + 349,00 + 199,90 = **11 009,90 kr** (egen räkning).
- Med Flir MR59 i stället för GMM 1-15: 10 461 − 3 217 + 3 732 = 10 976 kr mätare; 11 524,90 kr totalt (egen räkning).
- Torkskåp tillkommer om testet ska följa standarden; pris saknas.

---

## Del 4. Hygrometrar och radonmätare

### 4a. Hygrometrar (luftfuktighet)

- `.../fuktmatare/luftfuktighetsmatare`: **20 artiklar**, 315–15 866 kr, **17 från 1 500 kr**, 4 i lager: Testo 608-H1 1 302 kr, Testo 605i 1 590 kr, Ridgid HM-100 1 827 kr, Bosch GDH 1-17 2 641 kr. Övriga är beställningsvaror.
- `.../fuktmatare/luftfuktighetsloggers`: **5 artiklar**, alla från 1 500 kr, alla beställningsvaror: Protimeter BLE 1 884 kr (LA23043), Kimo KH120 3 050 kr (DU11532), Testo 175 H1 5 220 kr (2850063), Celsicom TH601B 5 251 kr (4041796), Gann Klima 20 5 664 kr (DU13700).
- Loggande proffsinstrument i kategorin `fuktmatare`: Celsicom Easy Connect TH600 3 360 kr, TH601A 5 445 kr, TH601B 5 565 kr (NB-IoT, ±3 % RF, butikens data), Hioki LR5001 6 605 kr.
- Enkel termohygrometer utanför kategorin: Nexa WTH-103, trådlös, 189 kr, i lager (termometrarkategorin, 3134388).
- Vaisala och Trotec säljs inte.

### 4b. Radonmätare

Kategori: `https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare`, 4 artiklar, alla 200.

| Modell | Pris | Lager | Art.nr | EAN | Typ | Uppgift |
|---|---|---|---|---|---|---|
| Airthings Home | 1 911 | i lager (2) | MW14910 | 7090031102227 | digital, kontinuerlig, display med långtids-, 1- och 7-dagarsmedel (PM) | PM:s bilagor heter "Corentium-Home+Plus+Pro-Produktblad" och "Canary-Digital-Radonmatare-Manual"; ej lästa |
| Airthings Wave | 2 181 | beställningsvara, 7–8 dagar | MW14900 | 7090031109103 | digital, Bluetooth | PM: "Korttidsmätning (1 vecka): mindre än 20 % … Långtidsmätning (1 månad): mindre än 10 % … vid 100 Bq/m³" (butikstext). Generation ej fastställd |
| Sarad Radon Scout | 39 886 | beställningsvara, 7–9 veckor | MW17310 | – | professionellt loggande instrument | – |
| Sarad Radon Scout Plus | 42 910 | beställningsvara, 3–4 veckor | MW17315 | – | professionellt loggande instrument | – |

- Spårfilmsdosor (Radonova m.fl.) och Ecosense: **säljs inte** (sitemap 2026-09-30).
- PM har en egen guide: https://www.proffsmagasinet.se/kunskapsportalen/guider/guide-hur-mater-jag-radon (ej läst).

**SSM om årsmedelvärde i bostad.** Källa: Strålsäkerhetsmyndigheten, "Metodbeskrivning – Mätning av radon i bostäder", publicerad 2026-09-04, https://www.stralsakerhetsmyndigheten.se/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader.pdf. "Den reviderade metodbeskrivningen för bostäder tillämpas från och med 1 oktober 2026."

- Årsmedelvärde "uppskattas med hjälp av en långtidsmätning … under minst två månader (60 dygn), eller genom kontinuerlig mätning under ett helt år."
- Långtidsmätning "utförs ofta med integrerande radonmätare, exempelvis spårfilm, och ska utföras under en sammanhängande mätperiod av minst två månader (60 dygn) under eldningssäsong". "Det är även möjligt att använda en tidsupplöst metod för mätning under minst 2 månader (60 dygn)."
- Eldningssäsong: "Perioden 1 oktober till 30 april räknas normalt som eldningssäsong i de södra och mellersta delarna av" landet.
- Krav på mätaren vid långtidsmätning: "mätosäkerhet är högst 20 procent vid 200 Bq/m³ (utvidgad mätosäkerhet, täckningsfaktor k=2)".
- Radoninstrument "ska vara kalibrerade"; SSM "rekommenderar ett kalibreringsintervall på ett år". Analys rekommenderas hos organisation ackrediterad enligt SS-EN ISO/IEC 17025.
- Korttidsmätning (minst 7 dygn spårfilm, minst 2 dygn instrument) "är inte tillräckligt underlag för att uppskatta ett årsmedelvärde".
- Referensnivå 200 Bq/m³ som årligt genomsnitt.
- Metodbeskrivningen nämner inte konsumentmätare som Airthings vid namn. Om de uppfyller kraven på kalibrering och mätosäkerhet är **inte belagt**.
- SSM:s sida "Att mäta radon", uppdaterad 2026-09-04, https://www.stralsakerhetsmyndigheten.se/omraden/radon/att-mata-radon/ (**sammanfattning**): "Den vanligaste mätmetoden är spårfilm", "minst två månader under eldningssäsong", beställ "via ett ackrediterat mätlaboratorium".

---

## Del 5. Badrumsfläktar

- Kategori: `https://www.proffsmagasinet.se/vvs-inomhusklimat/ventilation/flaktar/badrumsflaktar`, **12 aktiva artiklar** (sitemap har 15 adresser i kategorin), 1 076–2 013 kr, **9 från 1 500 kr** (varav två paket: Klimat K7 fläktpaket yttervägg 1 796 kr och PAX Calima frånluftspaket 2 013 kr). 11 i lager. Märken: PAX 7, Fresh 3, Klimatfabriken 2. Vägg- och takfläktar i grannkategorierna (`vaggflaktar`, `takflaktar`) ej genomgångna.
- Mätt luftflöde i l/s anger bara Fresh. PAX anger m³/h; l/s nedan är egen räkning: l/s = m³/h ÷ 3,6.

| Nyckel | Fresh Intellivent Sky (vit) | PAX Calima (vit) | PAX Levante 40 (vit) |
|---|---|---|---|
| PM art.nr | 2819285 | 28110492 (varianter) | 3131191 |
| EAN (PM) | 7318111974022 | 7391477155014 | 7391477154611 |
| Pris 30/9 | 1 887 kr | 1 801 kr | 1 499 kr |
| Lager | beställningsvara, "Skickas 2026-10-01" (292 st på väg till lager) | i lager (53) | i lager (39) |
| Adress | .../badrumsflaktar/fresh-intellivent-sky-badrumsflakt-vit-2819285 → 200 | .../badrumsflaktar/pax-calima-badrumsflakt-helautomatisk-vit-28110492 → 200 | .../badrumsflaktar/pax-levante-40-badrumsflakt-vit-3131191 → 200 |
| Tillverkarens art.nr | 197402 (fresh.se-adress) | 1550-1 (RSK 8760348) | 1546-1 (RSK 8797626) |
| Maxflöde | 140 m³/h friblåsande; 140 m³/h vid 57 Pa med Ø118 (125) stos enligt kapacitetskurvan | 110 m³/h friblåsande (= 30,6 l/s, egen räkning); maxtryck 25 Pa | 110 m³/h friblåsande (= 30,6 l/s, egen räkning); maxtryck 25 Pa |
| Flöde i l/s enligt tillverkaren | kontinuerlig ca 10 l/s, timer ca 20 l/s i 15 min, fuktstyrning ca 28 l/s, alla "friblåsande" | ej angivet i l/s. Grundflöde ca 30 m³/h (8,3 l/s), ljus ca 60 m³/h (16,7 l/s), fukt ca 95 m³/h (26,4 l/s), egen räkning | ej angivet i l/s. Grundflöde ca 30 m³/h (8,3 l/s); PM:s artikel: ljus ca 60, fukt upp till ca 110 m³/h |
| Ljud | 19 dB(A) 3 m (min) | 17–20 dB(A) 3 m | 17–20 dB(A) 3 m |
| Fuktstyrning | ja, "Helautomatisk fuktstyrning"; även lukt-/luftkvalitetssensor och ljussensor | ja, "Intelligent Fuktsensor", ljus- och temperatursensor | ja, fukt- och ljussensor |
| Effekt | 2–5 W | max 4 W | max 4 W |
| Kanal | Ø98/Ø118, håltagning 105–130 mm | Ø100 | Ø100 |
| IP | IP44 | IP44 | IP44 |
| App | Bluetooth LE | Bluetooth LE (Pax Wireless) | ej nämnd i produktbladet (PM:s fält säger "Appstyrd") |
| Garanti | "Se fresh.se" | 5 år | 5 år |
| Källa | Fresh manual Intellivent SKY (nordisk), https://fresh.se/Image/GetDocument/sv/278/manual%20bathroom%20fan%20intellivent%20sky%20nordic.pdf | Pax produktblad 2023-01-25, PM-bilaga id 68207756 | Pax produktblad 2022-08-08, https://www.rskdatabasen.se/infodocs/PROD/PROD_295_8797626.pdf |

- **Källorna säger olika:** PM:s tekniska fält för Levante 40 anger "Appstyrd"; Pax produktblad för Levante 40 nämner ingen app (det gör Calima-bladet). Pax väger tyngst. PM:s Levante 40-fält anger djup 81 mm och Pax 81 mm; för Calima anger PM djup 58 mm, Pax 81 mm. Pax väger tyngst.
- PM:s artikel "Badrumsfläkt bäst i test 2026 - 3 kundfavoriter jämförda", https://www.proffsmagasinet.se/kunskapsportalen/tester/badrumsflakt-bast-i-test (200), daterad **2026-01-12**: samma tre modeller (Fresh Intellivent Sky, PAX Calima, PAX Levante 40). Grund: "de badrumsfläktar vi säljer mest av just nu, och sammanställt kundomdömen lämnade via Trustpilot". Ingen mätning.

---

## Öppet

1. Termo Fresh: inget tillverkardatablad hos PM och ingen tillverkarsida hittad. Alla värden är PM:s.
2. HACE PCMH45: filterkostnad per år saknas; filtersatsen EFS-PCMH45 är utgången hos PM. Vikten 12,4 eller 5 kg (källorna säger olika). Ljudnivåns avstånd okänt. Garanti ej angiven.
3. Råd & Rön, Testfakta, Konsumentverket, Astma- och Allergiförbundet: inget om luftfuktare hittat. Folkhälsomyndigheten har inga råd om ultraljudsbefuktare specifikt; FoHMFS 2014:14 gällande status ej kontrollerad.
4. Oberoende test av fuktmätare senaste tre åren: inget hittat. Det enda är SP Trä 2012.
5. Bosch GMP 1-13, GMP 2-15, GMM 1-15: mätområde för träfukt i procent ej hittat; vad "±1 %" avser ej klarlagt; stiftlängd ej hittad.
6. Datablad ej lästa: se listan under 2c (Gann-sortimentet utom BL Compact och B 2, Laserliner MoistureMaster, Limit 6200, REMS, Flir MR77 och MR160, Tramex CMEX5 och RWS, Protimeter HygroMaster II, DeFelsko CMM IS, Testo 605 RBK).
7. IP-klass och garanti saknas för de flesta fuktmätare i tabellen.
8. Försäljningsplacering (mest sålda) syns inte i PM:s data; inte använd.
9. Del 3: pris på labbtorkskåp som klarar (103 ± 2) °C ej hittat. Ingen källa för att en hemugn duger. Pris på lab-våg (RS gav 403) och kalibreringsblock (Sågteknik, Fuktbutiken) ej hämtat. Clas Ohlsons våg anger 0,01 g utan känd noggrannhet och är slut i lager. EN 13183-1 lästes i förhandsvisning med vattenstämpel; "20 mm" och luftcirkulationskravet är delvis överskrivna.
10. Airthings Home och Wave: tillverkarens datablad ej lästa; om de uppfyller SSM:s krav (kalibrering, högst 20 % mätosäkerhet vid 200 Bq/m³) är inte belagt. Wave-generation ej fastställd.
11. Badrumsfläktar: grannkategorierna vägg- och takfläktar ej genomgångna; PAX anger inte l/s.
12. RBK-godkännandet för Testo 605 RBK är PM:s påstående, ej kontrollerat hos RBK.

## Sidor som inte gick att läsa

- https://www.bosch-professional.com/se/sv/products/gmp-2-15-0601081400 (404; rätt adress hittad via sökning)
- https://www.elma.dk/produkter/fugtmaaler/elma-moisture-max (404; rätt adress elma.dk/produkter/elma-moisture-max läst)
- https://alega.se/products/precisionsvag-500-g-0-01-g (404)
- https://se.rs-online.com/web/p/vagar/0199385 (403)
- https://treprox.eu/wp-content/uploads/2022/11/SWE-5-BK-Torkning_av_virke-220531.pdf (ingen text; bara **utdrag** i sökningen, inte använd)
- https://www.stralsakerhetsmyndigheten.se/publikationer/handbocker-och-metodbeskrivningar/matning-av-radon-i-bostader--metodbeskrivning/ (404; ersatt av 2026-versionen)
- https://www.folkhalsomyndigheten.se/contentassets/19fa61be24a54e81b83c096038b73e9c/folkhalsomyndighetens-vagledning-om-temperatur-inomhus.pdf (hämtningen gav ingen läsbar PDF)

## Antal lästa källor per del

- Del 1: 11 (PM kategori ×2, PM produktsidor ×3, HACE produktblad och bruksanvisning, PM-artikeln, FoHMFS 2014:14, EPA, Tek.no, M3; Råd & Rön och Astma- och Allergiförbundet sökta utan träff)
- Del 2: 31 (PM kategorier ×9, PM produktsidor 56 i ett svep räknat som 1, tillverkar-PDF:er ×20, Bosch-sidor ×3, Elma-sidor ×2, Protimeter-datablad, Laserliner-datablad, SP-rapporten 2012)
- Del 3: 8 (EN 13183-1 förhandsvisning, SIS, Svenskt Trä, Träguiden, Clas Ohlson ×2, expondo, Anbonilabb; PM våg- och termometerkategorier)
- Del 4: 7 (PM hygrometerkategorier ×2, PM radonkategori och 3 produktsidor, SSM metodbeskrivning 2026, SSM-sidorna ×2)
- Del 5: 6 (PM kategori, PM produktsidor ×3, PM-artikeln, Pax produktblad ×2, Fresh-manualen)

---

## Varv 2, fuktmätarna till fröet

Beställt av affiliateagenten 2026-09-30, hämtat 2026-09-30. Samma märkning som ovan: **utdrag** = sökmotorns utdrag, **sammanfattning** = WebFetch-sammanfattning, inte ordagrant. Butikstext används bara för pris, lager, artikelnummer, EAN och adress.

### A. Temperaturens inverkan på resistansmätning i trä

**Hittat: ja, fyra källor som inte är tillverkare eller butik.** Två ger storleken, två säger bara att korrektion krävs.

| Källa | Ordagrant | Var | Läst |
|---|---|---|---|
| USDA Forest Products Laboratory, *Wood Handbook* (FPL-GTR-282, 2021), kap. 13 "Drying and Control of Moisture Content and Dimensional Changes", R. Bergman, https://research.fs.usda.gov/download/treesearch/62261.pdf | "Make temperature corrections if the temperature of the wood differs considerably from the temperature of calibration used by the manufacturer. Approximate corrections for conductance-type (resistance) meters are made by adding or subtracting about 0.5% for each 5.6 °C (10 °F) the wood temperature differs from the calibration temperature. Add the correction factors to the readings for temperatures less than the calibration temperature and subtract from the readings for temperatures greater than the calibration temperature." Samma stycke: "about 6% to 30% for resistance meters … Readings greater than 30% must be considered only qualitative." | s. 13-3, avsnittet "Electrical Method" | 2026-09-30 |
| SP Trä, rapport PX21326 (2012-09-20), https://www.maleriforetagen.se/globalassets/dokumentbank-oppna/sp-ytfuktkvotsrapport-20120920.pdf | "Temperaturkompensering är för resistiva fuktkvotsmätare viktig då mätvärdet ändras 0,1-0,15%-enheter per grad °C från 20°C. Temperaturkompensering görs antingen via en inställning på mätaren, automatiskt via en sensor på mätaren eller tumregeln: Dra ifrån 1,6% per 10°C från avläst värde över 20°C och lägg till 1,6% per 10°C från avläst värde under 20°C, se Fukt i trä för byggindustrin [2005]." | rapportens s. 5–6 (17) | 2026-09-30 |
| Samma rapport, Bilaga 1 "Mätinstruktion Målfuktkvot" | "Kompensera mätvärdet med avseende på temperatur om inte mätaren har denna funktion. Använd ev. tabell som medföljer mätinstrumentet eller tumregeln: Dra ifrån 1,6 % per 10°C från avläst värde över 20°C. Lägg till 1,6 % per 10°C från avläst värde under 20°C." Kravlistan i slutsatserna: "Temperaturkompensering bör vara möjlig" | Bilaga 1 (PDF s. 18); slutsatser | 2026-09-30 |
| EN 13183-2:2002 "Moisture content of a piece of sawn timber – Part 2: Estimation by electrical resistance method", iTeh:s förhandsvisning av SIST EN 13183-2:2003, https://cdn.standards.iteh.ai/samples/7840/57a4e39f3bba44e9a435e8dce003ea5e/SIST-EN-13183-2-2003.pdf. Svensk beteckning SS-EN 13183-2 (SIS, https://www.sis.se/en/produkter/wood-technology/wood-sawlogs-and-sawn-timber/ssen131832/); gällande status i SIS ej kontrollerad | Avsnitt 5: "The meter shall be equipped with settings or tables to correct for wood species and temperature." Avsnitt 7: "Correct the electrical resistance moisture meter reading to take into consideration the temperature and species of the timber being measured." Avsnitt 4: "suitable for timber having a moisture content between approximately 7 % and 30 %." Bilaga A: resultatet redovisas med bl.a. "species setting, temperature setting, penetration depth". Ingen storlek på temperatureffekten i förhandsvisningen | avsnitt 4, 5, 7, bilaga A | 2026-09-30 |
| Träguiden (Svenskt Trä), "Fuktkvot och mätning", uppdaterad 2021-06-14, https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/fuktegenskaper1/fuktkvot-och-matning/ | "Det gemensamma för alla är att uppmätta värden måste korrigeras för rådande temperatur och träslag." Ingen storlek | avsnittet "Bestämning av fuktkvot" | 2026-09-30 (sidans källkod läst, ordagrant) |

- Egen räkning, samma enhet: Wood Handbook 0,5 per 5,6 °C × 10/5,6 ≈ **0,9 per 10 °C**. SP: 0,1–0,15 per °C × 10 = **1,0–1,5 procentenheter per 10 °C**; tumregeln **1,6 per 10 °C**.
- **Källorna säger olika om storleken**: ca 0,9 (Wood Handbook) mot 1,0–1,6 (SP) per 10 °C. Inget medelvärde. SP väger tyngst för svensk text: rapporten gäller nordisk gran och furu, räknar från 20 °C och är skriven för mätning i fält i Sverige. Wood Handbook är nyare (2021) men anger "about" och har tillverkarens kalibreringstemperatur som referens, inte 20 °C.
- SP skriver "%-enheter" i första meningen men bara "%" i tumregeln. Att tumregeln avser procentenheter framgår av sammanhanget men står inte uttryckligen.
- Riktningen: varmare trä än referensen ger ett för högt värde som ska dras ifrån; kallare trä ger ett för lågt värde som ska läggas till (Wood Handbook och SP).
- Tillverkarna som kompenserar (Elma DT125, Flir MR55, Laserliner 082.321A, se B2) gör det med **omgivningens** temperatur. Standarden och Wood Handbook talar om **träets** temperatur. Boschs bruksanvisningar säger i stället att mätobjektet ska ha samma temperatur som omgivningen (se B2).
- **Källorna säger olika om mätriktningen:** EN 13183-2 avsnitt 7: "Normally take the measurement in the direction of the grain. Take the measurement at right angles to the grain if specially requested in the manual for the instrument." SP-rapporten s. 6, med hänvisning till VTT publikation 420: "Mätriktningen tvärs eller längs fibrerna har ingen stor betydelse". Träguiden: "Mätningen ska ske med stiften efter varandra i fiberriktningen." Boschs UniversalHumid-bruksanvisning: "Mät alltid tvärs mot fibrerna." Standarden väger tyngst, och den låter tillverkarens anvisning gälla när den kräver tvärs.
- Ej läst: primärkällan "Fukt i trä för byggindustrin" (2005), som SP hänvisar till för talen.

### B. Per modell

Priser och lager lästa i PM:s `__INIT_STATE__` (`ListPrice.AmountWithTax`, `StockStatus`, `StockQuantity`, `StockText`) 2026-09-30. Adresskontroll med `curl` utan att följa omdirigering 2026-09-30: **alla åtta gav 200 utan omdirigering**. "Tillv. art.nr" = tillverkarens nummer; PM:s fält `mpn` anges där tillverkarens saknas.

#### B1. PM-data

| Modell | Full PM-adress | Pris 30/9 | Lager 30/9 | PM art.nr | EAN (PM `Gtin`) | Tillv. art.nr |
|---|---|---|---|---|---|---|
| Bosch UniversalHumid | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-diy-universalhumid-fuktmatare-for-tra-med-batterier-4054182 | 504 kr | i lager (5), "Skickas inom 24 timmar!" | 4054182 | **4053423245271** | 3 603 F88 000 (Bosch bruksanvisning 1 609 92A 7M9; tekniska data anger "3 603 F88 0..") ; PM `mpn` "UniversalHumid" |
| Testo 606-1 | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/testo-606-1-fuktmatare-2850033 | 1 609 kr | i lager (4), "Skickas inom 24 timmar!" | 2850033 | 4029547008290 | 0560 6060 (Testo datablad 0981 9684/msp/01.2023) |
| Elma DT125 | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/eltestverktyg/installationstestare/elma-dt125-fuktmatare-med-batteri-for-tra-div-byggnadsmaterial-samt-rel-luftfuktighet-4065187 | 1 680 kr | i lager (9), "Skickas inom 24 timmar!" | 4065187 | 5706445840168 (Elma anger samma) | Elmas varunummer **ej hittat** (elma.dk visar EAN och EL-nr 6398206772; ett sökutdrag säger "3025776", ej bekräftat); PM `mpn` "DT125" |
| Bosch GMP 2-15 | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-gmp-2-15-fuktmatare-4079909 | 2 147 kr | i lager (3), "Skickas inom 24 timmar!" | 4079909 | 4053423340044 | 0 601 078 100 (produktnummer 3601K78100), https://www.bosch-professional.com/se/sv/products/gmp-2-15-0601078100 |
| Flir MR55 | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/flir-mr55-fuktmatare-med-bluetooth-me13552 | 2 990 kr | beställningsvara (`BackOrder`, 0 i lager, köpbar), "Skickas 2026-10-05" | ME13552 | 5706445881734 | MR55 (Flir manual MR55-en-US_AB) |
| Bosch GMM 1-15 | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-gmm-1-15-fuktmatare-med-batteri-och-laddare-4079903 | 3 217 kr | beställningsvara (`OutOfStock`, köpbar), "Skickas om 8-12 dagar" | 4079903 | 4053423340051 | 0 601 078 200 (produktnummer 3601K78200), https://www.bosch-professional.com/se/sv/products/gmm-1-15-0601078200 (**sammanfattning**) |
| Laserliner 082.321A DampMaster Compact Plus | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/laserliner-082321a-fuktmatare-med-vaska-och-batterier-4065101 | 5 236 kr | i lager (9), "Skickas inom 24 timmar!" | 4065101 | 4021563699858 (Laserliner anger samma) | 082.321A (Laserliner datablad) |
| Protimeter BLD5375 SurveyMaster | https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/protimeter-bld5375-surveymaster-fuktmatare-for-matning-och-sokning-4059208 | 9 695 kr | i lager (3), "Skickas inom 24 timmar!" | 4059208 | 1976449879004 | BLD5375 (Protimeter datablad och manual) |

- Priser och lager är oförändrade mot tabell 2c.
- "Bosch UniversalHumid" i beställningen = PM:s "Bosch DIY UniversalHumid".

#### B2. Tillverkarens uppgifter

"Ej angivet" / "nämns ej" = letat i de lästa källorna utan träff.

| Modell | Fuktkvot trä (tillverkaren) | Vad noggrannheten avser | Temp.komp. | Stift | Hammarelektrod | IP | Garanti | Batteri | App |
|---|---|---|---|---|---|---|---|---|---|
| Bosch UniversalHumid | Trägrupp A 7,1–74,7 %, B 6,4–61,9 % | "Ledningsförmåga ± 1 %", fotnot "Vid en drifttemperatur på 25 °C"; vad procenten avser sägs inte | **Inget.** I stället: "Innan mätning, se till att omgivningstemperaturen stämmer överens med temperaturen i mätobjektet." | längd i mm ej angiven; "Optimala mätresultat får man om stiften sticker in ca. 4-5 mm i träet. En markering på 5 mm djup finns på stiften som referens." | nämns ej; "använd inte våld, och använd heller inte andra föremål för att slå in mätinstrumentet i träet!" | ingen IP-klass; "Mätinstrumentet är inte stänk- och dammskyddat." | se Bosch-garantin under källorna | 3 × 1,5 V LR03 (AAA), ca 10 h | nämns ej |
| Testo 606-1 | 8,8–54,8 vikt-% (bok, gran, lärk, björk, körsbär, valnöt); 7,0–47,9 vikt-% (ek, tall, lönn, ask, douglasgran, meranti) | "±1 %" och "±1 digit" (tabellen förskjuten i PDF-texten); vad procenten avser sägs inte | nämns ej | längd ej angiven; reservelektroder (1 par) 0192 5348 | nämns ej | **IP20** | **ej hittat** (testo.com gav 429) | 2 × AAA, 200 h (utan belysning) | nej |
| Elma DT125 | 1–75 % (del 2c) | 0–30 %: ±1; 30–60 %: ±2; 60–75 %: ±4 (del 2c) | **Ja, automatisk och manuell.** "Elma DT125 kompenserar automatiskt för olika materialtemperaturer, då Elma DT125 mäter omgivningstemperaturen och använder denna mätning för intern beräkning. I tillägg kan man i Elma DT125 även ställa in temperaturen manuellt för att öka mätnoggrannheten. Detta värde sparas inte och måste ställas in varje gång man slår på instrumentet." | "Elektrodelængde: 8mm", integrerade, utbytbara | **tillval**: "Til Elma DT125 kan endvidere tilsluttes eksterne prober, herunder en hammerelektrode" (elma.dk, **sammanfattning** med citat) | ej angivet | "Garanti: 1 år." | 3 × CR2032 | nej |
| Bosch GMP 2-15 | Per material, se B5. Byggträ 6,7–100,0 %; gran 8,0–97,3 %; tall, europeisk 7,3–97,4 %. Fotnot: "Mätvärden över 80 % indikeras som "> 80 %" på displayen." | "Mätprecision (typisk) Ledningsförmåga (materialfukthalt) ±1 %", fotnot "Vid en drifttemperatur på 25 °C". Bruksanvisningen säger **inte** om det är procentenheter fuktkvot eller procent av avläsningen | **Inget.** "Mätnoggrannheten blir störst när mätobjektet har samma temperatur som omgivningen. Låt därför vid behov mätobjektets temperatur utjämnas." | längd i mm ej angiven; "Optimala mätresultat får man om stiften sticks in ca 4-5 mm (upp till hacket) i mätobjektet." | nämns ej; "Slå inte in mätinstrumentet i mätobjektet med hjälp av andra föremål." | **IP65** | se Bosch-garantin under källorna | 2 × AA 40 h, eller Li-jon 3,7 V 1,0 Ah (tillbehör) 25 h | nämns ej |
| Flir MR55 | Grupp 1–9: 7–29 % ±2 % MC; 30–99 % "Reference Only" | "± 2% MC"; fotnot: "Accuracy specification is based on the analysis in J. Fernández-Golfín et al. Actual real-world accuracy depends on a variety of factors; For more information, refer to ASTM D4444, section 6." | **Ja, automatisk.** "Moisture measurements are automatically temperature compensated. The meter calculates the compensation using the ambient temperature measurements." Manuell inställning nämns ej | 10 mm, integrerade, utbytbara | nämns ej (manualen nämner bara micro-USB-uttaget) | **IP40** | "Limited 3 years"; manualen: "Register your product at the website to receive a free 1-year warranty extension." | 2 × AA, 70 h utan arbetslampa | Bluetooth (METERLiNK), FLIR Tools Mobile (del 2c) |
| Bosch GMM 1-15 | "Alla trämaterial 4 % ... 32 %"; byggmaterial t.ex. gipsskiva 0,9–20 %, lättbetong 0,8–53 % | "Mätnoggrannhet i trämaterial (typisk) ±4 %", fotnoter "Vid en drifttemperatur på 25 °C" och "Fuktmätvärden för byggnadsmaterial är endast avsedda som referens". Vad procenten avser sägs inte. Ordet "Dyn-läge" (del 2c, ur Boschs produktsida) **finns inte** i bruksanvisningen | **Inget** (stiftlös; "temperatur" förekommer bara om drift, förvaring och laddning) | – (stiftlös); mätdjup 0–30 mm | – | **IP65** | se Bosch-garantin under källorna | 2 × AA, eller Li-jon 3,7 V 1,0 Ah; ca 10 h | nämns ej |
| Laserliner 082.321A | grupp A 4,6–91,6 %; B 6,1–103,6 %; C 3,0–79,2 % (del 2c) | Databladet: "± 1% (5% ... 30%) ± 2% (<5% and >30%)". Bruksanvisningen (**sammanfattning**, se källor): "Wood: ± 0.3% from the end value ± 5 digits". **Källorna säger olika**; databladet är läst direkt hos Laserliner och väger tyngst | **Ja, automatisk och manuell.** Databladet: "Automatic and manual temperature compensation: measuring device adapted to temperature of material to be measured". Bruksanvisningen (**sammanfattning** med citat): "The device automatically compensates for different wood temperatures by measuring the ambient temperature" | längd ej angiven; "Measuring spikes can be replaced" | nämns ej | ej angivet | ej angivet | 4 × 1,5 V AAA (bruksanvisningen via manuals.plus, **sammanfattning**) | Digital Connection, MeasureNote-app |
| Protimeter BLD5375 SurveyMaster | stift 6–99 % WME; stiftlöst 60–999 relativt | ej angivet | **nämns ej** i datablad eller manual | "Pin up to 0.4 in (10 mm)"; integrerade stift och medföljande "Heavy Duty Moisture Probe" | **tillval**: "a Hammer Electrode (optional)" (manualen); "Hammer electrode for wood floor applications" (databladet, under Options) | ej angivet | "2 years on manufacturing defects. Does not include wearing part or accessories." | "3V(2 x AA)2700mAh"; "more than 20 hours" | Bluetooth, Protimeter Connect |

Källor för B2:
- Bosch UniversalHumid: bruksanvisning 1 609 92A 7M9 (29.04.2022), svensk del s. 100–103 (Tekniska data, Mätprocedur), PM-bilaga https://pm-asset.azureedge.net/api/asset-download?id=AssetDocument76763748, läst 2026-09-30.
- Bosch GMP 2-15: bruksanvisning 1 609 92A F7L (10.11.2025), svensk del s. 104–106 (Tekniska data, Mätområde materialfukthalt) och s. 110 (Anvisningar för mätobjekt, Mätprocedur), https://www.bosch-professional.com/binary/manualsmedia/o615646v21_160992AF7L_202511.pdf, läst 2026-09-30. Tabellen på s. 106 kontrollerad i tabelläge; i vanligt textläge är värdena förskjutna en rad.
- Bosch GMM 1-15: bruksanvisning 1 609 92A B3E (27.03.2025), svensk del s. 127–129 (Tekniska data) och avsnittet "Anvisningar för mätobjekt", https://www.bosch-professional.com/binary/manualsmedia/o569105v21_160992AB3E_202503.pdf, läst 2026-09-30.
- Bosch-garantin: "Tillverkargaranti (status 01.12.2021)", 1 600 A02 CK4, https://www.bosch-professional.com/binary/manualsmedia/o375646v21_1600A02CK4_202112.pdf, länkad från GMM 1-15-sidan (inte från GMP 2-15-sidan), läst 2026-09-30. Gäller enligt texten "Samtliga Bosch elverktyg, tryckluftsverktyg, mätinstrument och trädgårdsredskap". Punkt 1: "en garanti som gäller i två år … Vid verktyg som används kommersiellt eller yrkesmässigt eller utsätts för jämförbar belastning är garantitiden tolv månader." Punkt 2: "Du kan förlänga garantitiden till totalt tre år" vid registrering inom fyra veckor (mybosch-tools.com för privat bruk, bosch-professional.com/pro360 för proffsverktyg).
- Testo 606-1: datablad "testo 606", 0981 9684/msp/01.2023, https://static.testo.com/image/upload/HQ/testo-606-data-sheet.pdf, s. 2, läst 2026-09-30. **Källorna säger olika** med PM-bilagan från 2007 (del 2c, "0–90 %"); databladet 2023 väger tyngst.
- Elma DT125: bruksanvisning SE/NO/DK/EN, PM-bilaga https://pm-asset.azureedge.net/api/asset-download?id=AssetDocument81306978, svenska avsnitt 4 och 6.1, danska tekniska data ("Elektrodelængde: 8mm", "Garanti: 1 år."), läst 2026-09-30; https://elma.dk/produkter/elma-dt125-fugtmaaler-m-naaleelektroder (**sammanfattning**), läst 2026-09-30.
- Flir MR55: manual MR55-en-US_AB (release augusti 2018), PM-bilaga https://pm-asset.azureedge.net/api/asset-download?id=28830159, avsnitt 4.2, 9 och 12; produktblad 07/18, PM-bilaga id 28830161; lästa 2026-09-30.
- Laserliner 082.321A: datablad https://laserliner.com/export/assets/082.321A_en_60_17.pdf (läst 2026-09-30); bruksanvisning återpublicerad av tredje part, https://manuals.plus/laserliner/082-321a-dampmaster-compact-plus-moisture-meter-manual (**sammanfattning**, tekniska revisioner "03.17"), läst 2026-09-30.
- Protimeter BLD5375: datablad AAS-920-085G-EN (07/2024), https://www.protimeter.com/hubfs/AAS-920-085G-EN-Protimeter-SurveyMaster-072224-web.pdf; manual INS5375 Rev. A (juni 2023), https://www.protimeter.com/hubfs/INS5375%20(1)%20(1).pdf; båda lästa 2026-09-30.

#### B3. Flir MR55, RF-noggrannheten

- Manualen (avsnitt 9, läsbar): "Ambient Relative Humidity 0 ~ 10% ± 4%; 10 ~ 85% ± 2%". Temperatur "± 2°F (± 1°C)".
- Produktbladet 07/18 går inte att läsa entydigt: texten ger "0 - 20% ±5% ±4%" och "20 - 80% ±3.5% ±2%" i två kolumner.
- **Källorna säger olika**, och produktbladet går inte att tolka säkert. Manualen väger tyngst.
- Också olika: drifttemperatur 0–60 °C i produktbladet, 0–50 °C i manualen.

#### B4. Protimeter SurveyMaster, samma modell?

- **Ja.** Databladet AAS-920-085G-EN har rubriken "PROTIMETER SurveyMaster™ Dual-Function Moisture Meter BLD5375". Manualen INS5375 Rev. A gäller "Surveymaster" med samma funktioner (stift %WME, stiftlöst "REL" 60–999, Bluetooth). PM:s `mpn` är "BLD5375 SurveyMaster" och PM:s produktnamn har BLD5375.
- Det är **inte** samma instrument som "Protimeter Surveymaster SM" i SP-testet 2012 eller "SurveyMaster II" i PM:s paket LA23042. Att de är olika generationer bygger på namnen; hur de skiljer sig har inte kontrollerats.
- Ett sökutdrag (manualslib, ej läst) anger "1x9V battery" för SurveyMaster; det gäller troligen en äldre manual. INS5375 Rev. A anger 2 × AA. Utdraget är inte använt.

#### B5. Bosch GMP 2-15, mätområde per träslag (bruksanvisningen s. 105–106)

Min–max enligt bruksanvisningen. Fotnot: värden över 80 % visas som "> 80 %".

| Material | Min | Max |
|---|---|---|
| Byggträ | 6,7 % | 100,0 % |
| Gran | 8,0 % | 97,3 % |
| Tall, europeisk | 7,3 % | 97,4 % |
| Ädelgran | 8,4 % | 91,1 % |
| Lärkträd | 7,0 % | 100,0 % |
| Björk, europeisk | 4,6 % | 95,9 % |
| Ek, europeisk | 6,9 % | 97,5 % |
| Bok | 6,2 % | 93,2 % |

- Resten av de 37 trämaterialen och de 10 byggmaterialen står på samma sidor. Lägsta minimivärde bland trämaterialen: björk 4,6 %; högsta: ädelgran 8,4 %.
- Bruksanvisningen gäller både GMP 1-13 och GMP 2-15 och delar inte upp mätområdet per modell.

### Fortfarande tomt efter varv 2

- Testo 606-1: garanti, stiftlängd, hammarelektrod, temperaturkompensering (testo.com gav 429; databladet nämner inget av det).
- Elma DT125: IP-klass; Elmas eget varunummer.
- Bosch UniversalHumid och GMP 2-15: stiftlängd i mm (bara instickdjup 4–5 mm); app (nämns ej).
- Bosch: vad "±1 %" och "±4 %" avser (bruksanvisningarna säger det inte).
- Flir MR55: hammarelektrod (nämns ej).
- Laserliner 082.321A: stiftlängd, hammarelektrod, IP-klass, garanti. Batteriet bara via en bruksanvisning återpublicerad av tredje part.
- Protimeter BLD5375: IP-klass, noggrannhet, temperaturkompensering (nämns ej).
- Bosch-garantin är ett generellt dokument, länkat bara från GMM 1-15.

### Sidor som inte gick att läsa i varv 2

- https://www.testo.com/sv-SE/testo-606-1/p/0560-6060 och https://www.testo.com/en-US/testo-606-1/p/0560-6060 (429)
- https://static-int.testo.com/media/b6/fd/f5ee3fc4bc6d/testo-606-Instruction-manual.pdf (403)
- https://www.testequipmentdepot.com/testo/pdf/606-1_manual.pdf (301 till tom fil)
- https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_13_fpl_gtr282.pdf (omdirigeras till research.fs.usda.gov/nrs; samma kapitel läst via treesearch 62261)
- https://elma.dk/produkter/elma-dt125 (404; rätt adress elma.dk/produkter/elma-dt125-fugtmaaler-m-naaleelektroder läst)
- https://laserliner.com/en/products/moisture-measurement/dampmaster-compact-plus/ (404)
- https://standards.iteh.ai/catalog/standards/cen/c04b1bc8-0dd6-4669-9ac6-4a1cc375369d/en-13183-2-2002 (renderas med JavaScript; förhandsvisningens PDF hittad via sökning och läst)

## Prisomläsning /fuktmatare/, 2026-10-04

Beställt av affiliateagenten 2026-10-04, hämtat 2026-10-04. Samma metod som i varv 2: en `curl` per adress utan att följa omdirigering, sedan PM:s `__INIT_STATE__` för produktens egen variant (`Price.ListPrice.AmountWithTax`, `Price.Discount`, `Campaigns`, `GtmStockInfo.StockStatus`/`StockQuantity`, `Status` med `Availability.B2C`). Adresserna står i tabell B1 ovan.

| Slug | Pris 30/9 | Pris i dag (ListPrice) | Kampanjpris i dag (`Discount.SalePrice`) | Rabatt / lägsta pris (`LowestHistoricalPrice`) | Kampanj | StockStatus | Antal | Leveranstext ordagrant | AvailableForPurchase | Produktstatus | HTTP |
|---|---|---|---|---|---|---|---|---|---|---|---|
| bosch-universalhumid | 504 kr | 504 kr | **428 kr** | 15,08 % / 504 kr | "Laser & mät" (/laser-matkampanj) | InStock | 4 | "Skickas inom 24 timmar!" | fältet finns inte (i lager) | Active | 200, ingen omdirigering |
| testo-606-1 | 1 609 kr | 1 609 kr | – | – | ingen | InStock | 3 | "Skickas inom 24 timmar!" | fältet finns inte (i lager) | Active | 200, ingen omdirigering |
| elma-dt125 | 1 680 kr | 1 680 kr | **1 428 kr** | 15 % / 1 680 kr | "Laser & mät" | InStock | 4 | "Skickas inom 24 timmar!" | fältet finns inte (i lager) | Active | 200, ingen omdirigering |
| bosch-gmp-2-15 | 2 147 kr | 2 147 kr | **2 082 kr** | 3,03 % / 2 147 kr | "Laser & mät" | InStock | 7 | "Skickas inom 24 timmar!" | fältet finns inte (i lager) | Active | 200, ingen omdirigering |
| flir-mr55 | 2 990 kr | 2 990 kr | **2 317 kr** | 15,03 % / **2 727 kr** | "Laser & mät" | BackOrder (B2C `OutOfStock`) | 0 (leverantörsbekräftat 2 st till 2026-10-05) | "Skickas 2026-10-05" | true | Active | 200, ingen omdirigering |
| bosch-gmm-1-15 | 3 217 kr | 3 217 kr | **3 023 kr** | 6,03 % / 3 217 kr | "Laser & mät" | OutOfStock | 0 | "Skickas om 8-10 dagar" | true | Active | 200, ingen omdirigering |
| laserliner-dampmaster-compact-plus | 5 236 kr | 5 236 kr | – | – | ingen | InStock | 7 | "Skickas inom 24 timmar!" | fältet finns inte (i lager) | Active | 200, ingen omdirigering |
| protimeter-surveymaster | 9 695 kr | 9 695 kr | – | – | ingen | InStock | 2 | "Skickas inom 24 timmar!" | fältet finns inte (i lager) | Active | 200, ingen omdirigering |

- Ordinarie pris (ListPrice) är oförändrat för alla åtta mot 30/9.
- Fem av åtta har kampanjpris i dag, alla i PM:s "Laser- & mätkampanj" (/laser-matkampanj). Kampanjens slutdatum finns **inte** i `__INIT_STATE__`; okänt hur länge priserna gäller.
- Flir MR55: `LowestHistoricalPrice` är 2 727 kr, lägre än ListPrice 2 990 kr. Det betyder att PM har sålt den för 2 727 kr tidigare under den period fältet avser; vilken period det är står inte i datan. För övriga sju är lägsta pris lika med ListPrice.
- Bosch GMM 1-15: leveranstexten har ändrats från "Skickas om 8-12 dagar" (30/9) till "Skickas om 8-10 dagar". `StoredInOurWarehouse` false.
- Lagerantal har ändrats: UniversalHumid 5→4, Testo 4→3, Elma 9→4, GMP 2-15 3→7, Laserliner 9→7, Protimeter 3→2.
- `AvailableForPurchase` finns i datan bara för varor som inte är i lager; för InStock-varor saknas fältet och köpbarheten framgår av `InStock`.
