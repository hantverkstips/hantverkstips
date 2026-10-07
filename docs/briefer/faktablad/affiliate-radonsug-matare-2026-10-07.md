# Faktablad: radonmätare och radonsugar (affiliate)

Beställt av affiliateagenten 2026-10-07. Ersätter ett blad om radonmätare och radonsugar som skrevs över av misstag; varje punkt i det förra bladet är kontrollerad mot källan här (avsnitt 7). Rör inte `kunskap-radonsug.md`.

Skrivet 2026-10-07 av underlag. "Läst 2026-10-07" betyder hämtat med curl (en gång per adress, utan -L, status noterad) och läst den dagen; PDF:er med pdftotext (layout-, tabell- och råläge), Corentium-bladet dessutom som renderad sida. Citat inom citattecken är ordagranna; ett bindestreck vid radbrytning i PDF:en är borttaget. Märkning: **MYNDIGHET**, **TILLVERKARE** (tillverkarens dokument, även när PM är värd för filen), **BUTIK** (bara pris, lager, leveranstext, artikelnummer, EAN, adress), **EGEN** (egen räkning, formeln utskriven), **ÖVRIG** (annan källa utan rang, t.ex. Bolius). Ingen text här är förlaga.

Uppgifterna har nummer **RS1–RS48**.

---

## 0. Bladet i korthet

- SSM:s nya metodbeskrivning (utgivningsdatum 2026-10-01 på publikationssidan, "Datum: Augusti 2026" i PDF:en) säger att en korttidsmätning efter åtgärd ger en snabb indikation men att en förnyad långtidsmätning behövs. Radonsug nämns inte.
- Citatet "om de är kalibrerade och uppfyller vissa kvalitetskrav" **finns inte** i den nya metodbeskrivningen eller i SSM:s fråga-svar om kalibrering. Det som står är kalibreringskrav, 20 procent vid 200 Bq/m³ (k=2) och ett rekommenderat kalibreringsintervall på ett år.
- Fyra radonmätare hos PM, alla HTTP 200, ingen kampanj. Bara Airthings Home finns i lager (2 st).
- Airthings anger i dag ~±10 % (7 dygn) och ~±5 % (2 månader) vid 200 Bq/m³ och säger att artikeln gäller **även Corentium Home**. PM:s bilagor för Home har bara tal vid 100 Bq/m³.
- Airthings egen Wave Radon-sida har **båda** EAN-numren: 7090031129002 i specifikationen och 7090031109103 (PM:s) i sidans betygsdata för "Wave Radon".
- Inga radonsugar hos PM (produktsitemap, 178 166 adresser, läst 2026-10-07). Ett radonmembran från Tecca finns.
- Effekt: RS 400 "Normal förbrukning 10-25 W"; R2 ES "Normal förbrukning 87 W" (webben) och "Märkeffekt (W) 700" (manualen 2024.10), "Anslutningseffekt 690 W" (webben); Weller "Upptagen effekt" 70 W.

---

## 1. SSM:s metodbeskrivning för radon i bostäder (MYNDIGHET)

Källa: Strålsäkerhetsmyndigheten, *Metodbeskrivning. Mätning av radon i bostäder*, ISSN 2000-0456, <https://www.stralsakerhetsmyndigheten.se/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader-pdf>, HTTP 200, `application/pdf`, 1 896 842 byte, läst 2026-10-07. Sidnummer nedan är tryckt sida (PDF-sidan är tryckt sida + 2).

| Nr | Uppgift | Ordagrant | Var |
|---|---|---|---|
| RS1 | Adress och datum | Publikationssidan: "Utgivningsdatum: 2026-10-01", nedladdningslänken går till `/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader-pdf` "[1852 kB]". PDF:ens titelsida: "Datum: Augusti 2026". | <https://www.stralsakerhetsmyndigheten.se/publikationer/handbocker-och-metodbeskrivningar/handbok-for-matning-av-radon-i-bostader/>, HTTP 200, läst 2026-10-07; PDF s. 1 |
| RS2 | Gamla adressen | `.../metodbeskrivning--matning-av-radon-i-bostader.pdf` ger HTTP 200 med `text/html` och `<title>` "Sidan kan inte hittas - Strålsäkerhetsmyndigheten". | läst 2026-10-07 |
| RS3 | Efter åtgärd | "Efter eventuella åtgärder för att sänka radonhalten kan en korttidsmätning göras för en snabb indikation av åtgärdernas effekt. Eftersom resultatet från en korttidsmätning kan påverkas av tillfälliga variationer behöver en förnyad långtidsmätning genomföras efter åtgärd, för att beräkna ett nytt årsmedelvärde som kan jämföras med referensnivån och säkerställa att åtgärderna har haft varaktig effekt." | avsnitt 5, s. 7 |
| RS4 | Mättid vid första kontroll | "Korttidsmätning kan också utföras t.ex. vid initial kontroll av radonhalt efter olika åtgärder för att sänka radonhalter, och för att få en indikation om radonhalter inför långtidsmätningar. Vid dessa typer av korttidsmätningar kan en individuell bedömning göras av lämplig mättid." | 5.2, s. 8 |
| RS5 | Långtidsmätning, längd | "En uppskattning av årsmedelvärdet ska baseras på en sammanhängande mätning under minst två månader (60 dygn) inom samma eldningssäsong, eller en sammanhängande mätning under ett helt år (365 dygn)." | 6.1, s. 9 |
| RS6 | Mätosäkerhet | "Vid en långtidsmätning av radonhalten i luft, ska radonmätare användas där mätosäkerhet är högst 20 procent vid 200 Bq/m3 (utvidgad mätosäkerhet, täckningsfaktor k=2)." Samma krav i 6.1: "Mätningen ska utföras med en metod som ger en mätosäkerhet på högst 20 procent vid 200 Bq/m3 (utvidgad mätosäkerhet, täckningsfaktor k=2)." | 5.1, s. 7; 6.1, s. 9 |
| RS7 | Kalibreringskrav | "Mätsystem som används för mätning av radonhalt i bostäder ska vara kalibrerade." "Kalibrering av radoninstrument ska göras regelbundet. Strålsäkerhetsmyndigheten rekommenderar ett kalibreringsintervall på ett år. Resultat av kalibrering ska tillämpas. Regelbundna kalibreringar kan göras mer sällan om det är möjligt att genomföra en kontroll av att instrument inte har drivit sedan senaste kalibreringstillfället." | 4.1, s. 6 |
| RS8 | Kalibrering, radoninstrument | "Kalibrering av radoninstrument bör göras med ett längsta tidsintervall på ett år." "Kalibrering ska göras vid laboratorium med spårbarhet till internationellt erkända referenser, såsom Strålsäkerhetsmyndighetens radonlaboratorium eller motsvarande." | Bilaga 2, metod nr 2, s. 19 |
| RS9 | Kontinuerliga instrument för årsmedel | "Med kontinuerligt registrerande radoninstrument går det även att få underlag för uppskattning av radonhaltens årsmedelvärde. För detta syfte behöver mätningen pågå under eldningssäsong i minst två månader (60 dygn) i varje mätpunkt." | Bilaga 2, metod nr 2, s. 18 |
| RS10 | Tabell 1, korttid | Korttidsmätning: "Minst 7 dygn med spårfilm, minst 2 dygn med kontinuerligt registrerande radoninstrument (24 timmar i varje mätpunkt), alternativt individuell bedömning av mätperiod". Årsmedelvärde: "Nej". | Tabell 1, s. 8 |

- Ordet "radonsug" finns inte i PDF:en (sökt på radonsug, sugpunkt, fläkt; bara "insugspunkt" om instrumentets pump).
- SSM:s fråga-svar "Måste radonmätaren (spårfilmsdosor/ elektroniska mätinstrument) vara kalibrerade?", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/maste-radonmataren-sparfilmsdosor-elektroniska-matinstrument-vara-kalibrerad/>, senast uppdaterad 2 oktober 2026, HTTP 200, läst 2026-10-07: "En kalibrering säkerställer att mätresultatet är tillförlitligt. Om mätresultatet ska användas för ett myndighetsbeslut ska radonmätare vara kalibrerade."

---

## 2. Radonmätare hos Proffsmagasinet (BUTIK)

Kategorin <https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare>, HTTP 200, läst 2026-10-07, har fyra produkter. Produktsidorna lästa 2026-10-07 kl. 22:05, en curl per adress, alla HTTP 200 utan omdirigering. Data ur `__INIT_STATE__`: `Price.ListPrice.AmountWithTax`, `Status.Availability.B2C`, `Campaigns`, `Gtin`, `Mpn`. Fälten `SalePrice`, `Discount` och `LowestHistoricalPrice` finns inte på någon sida; produktens `Campaigns` är tom (`[]`) på alla fyra. Pris i kronor med moms. Adresser efter `https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare/`.

| Nr | Produkt (PM art.nr) | Pris | Kampanj | Lager B2C | Leveranstext | EAN/Gtin hos PM | Mpn | Adress |
|---|---|---|---|---|---|---|---|---|
| RS11 | Airthings Home (MW14910) | **1 911 kr** | nej | InStock, 2 st | "Skickas inom 24 timmar!" | 7090031102227 | "Home" | `airthings-home-radonmatare-mw14910` |
| RS12 | Airthings Wave (MW14900) | **2 181 kr** | nej | OutOfStock, AvailableForPurchase true, ej i PM:s lager | "Skickas om 7-8 dagar" | 7090031109103 | "Wave" | `airthings-wave-radonmatare-mw14900` |
| RS13 | Sarad Radon Scout (MW17310) | **39 886 kr** | nej | OutOfStock, AvailableForPurchase true, ej i PM:s lager | "Skickas om 7-9 veckor" | "MW17310" (inget EAN) | "Radon Scout" | `sarad-radon-scout-radonmatare-mw17310` |
| RS14 | Sarad Radon Scout Plus (MW17315) | **42 910 kr** | nej | OutOfStock, AvailableForPurchase true, ej i PM:s lager | "Skickas om 3-4 veckor" | "MW17315" (inget EAN) | "Radon Scout Plus" | `sarad-radon-scout-plus-radonmatare-mw17315` |

- RS15, bilagor på PM-sidorna (tillverkarens dokument, värd `pm-asset.azureedge.net`, alla HTTP 200, `application/pdf`, lästa 2026-10-07): Home: "Corentium-Home+Plus+Pro-Produktblad" (id 28830538) och "Canary-Digital-Radonmatare-Manual" (id 28830543). Wave: "Wave-Manual" (id 28830535). Radon Scout: "Sarad-Radon-Scout-Produktblad" (id 28830556) och "Radon-Vision-Produktblad". Radon Scout Plus: "Sarad-Radon-Scout-Plus-Produktblad" (id 28830560) och "Radon-Vision-Produktblad".

---

## 3. Tillverkarens uppgifter (TILLVERKARE)

### 3.1 Airthings Home (PM MW14910)

| Nr | Uppgift | Ordagrant | Källa |
|---|---|---|---|
| RS16 | Noggrannhet, Corentium Home (produkt nr 224) | "Measurement uncertainty (stat.)": "After 7 days" "Std dev < 20% at 100 Bq/m3"; "After 1 month" "Std dev < 10% at 100 Bq/m3". Inget tal vid 200 Bq/m³. | Corentium, "Product line 2016", s. 3 (PM-bilaga 28830538) |
| RS17 | Noggrannhet, Canary-manualen | "Noggrannhet" "Kortsiktig: < 20% efter en vecka med 100 Bq/m³" "Långsiktig: < 10% efter en månad med 100 Bq/ m³" "Inom 5% av referensvärde uppvisat i jämförandeundersökningar." | Canary-manualen (PM-bilaga 28830543), tekniska data |
| RS18 | Kalibrering | "Efter att batterierna är isatta, startas och kalibreras instrumentet automatiskt och börjar (eller fortsätter) att mäta radonkoncentration efter ungefär 3 minuter." | Canary-manualen, "Mätläge" |
| RS19 | Kalibreringsintyg | Bara under Corentium Pro: "Calibration certificate". Finns inte i listorna för Plus och Home. | Product line 2016, s. 2 |
| RS20 | Långtidsmedel | "Det långsiktiga genomsnittet (LONG TERM AVERAGE) är genomsnittet av de senaste 365 mätdagarna. Om antalet mätdagar är mindre än 365 visas genomsnittet av samtliga mätdagar (eller sedan återställning genom att trycka på RESET-knappen skett)." | Canary-manualen, "Mätläge" |

- Canary-manualen gäller "CANARY®", "registrerat varumärke tillhörande Corentium AS". Att Canary och Corentium Home är samma mätare säger PM:s bilagval, inte tillverkaren. Bladet för Home (RS16) och Canary (RS17) har samma tal.
- Airthings hjälpartikel (RS22) säger "Applicable to the Corentium Home, Wave Radon, Wave Plus, View Plus, and View Radon" och ger tal vid 200 Bq/m³ för "our sensor". Se 6.

### 3.2 Airthings Wave (PM MW14900)

| Nr | Uppgift | Ordagrant | Källa |
|---|---|---|---|
| RS21 | PM:s bilaga | Dokumentnummer "1-MAN-2900-B". "Initial Accuracy/Precision at 100 Bq/m3 (2.7 pCi/L): 7 days < 20 % 1 month < 10 %". Ritningshuvudet i samma fil har datumet "16.0 .2016" (en siffra oläslig i textlagret). | Wave-manualen (PM-bilaga 28830535) |
| RS22 | Noggrannhet i dag | "Typical σ for 7-day average is: ~ ± 10% at 200 Bq/m3 or 5.4 pCi/L" "Typical σ after two months: ~ ± 5% at 200 Bq/m3 or 5.4 pCi/L". Rubriken: "Accuracy/precision after 30 days of continuous measuring". | Airthings Help Center, "Radon: how is radon measured? How does an Airthings device measure radon?", daterad March 26, 2026, HTTP 200, läst 2026-10-07 |
| RS23 | Kalibrering | "Additionally, Airthings radon detectors acclimatize to their surroundings rather than requiring traditional calibration, ensuring accurate and reliable measurements over time." | samma artikel |
| RS24 | BfS | "Our sensor has been tested by independent labs around the world, and we obtain a Calibration Certification from the German Federal Office for Radiation Protection on an annual basis." | samma artikel |
| RS25 | Noggrannhet på produktsidan | "After 7 days: < 10 % at 5 pCi/L / at 200 Bq/m3" "After 2 months: < 5% at 5 pCi/L / at 200 Bq/m3" | <https://www.airthings.com/en/wave-radon>, HTTP 200, läst 2026-10-07 |
| RS26 | EAN | Specifikationen: "Product Codes" "EAN: 7090031129002" "SKU: 2900". Samma sida, betygsdata (Lipscore): `data-ls-product-name="Wave Radon"`, `data-ls-sku="291"`, `data-ls-gtin="7090031109103"`. | samma produktsida |

- RS26: PM:s EAN 7090031109103 finns alltså på Airthings egen sida för Wave Radon, men bara i betygsdata, inte i specifikationen. Om PM:s MW14900 är dagens Wave Radon (2900) eller en äldre utgåva går inte att avgöra ur källorna. Se 6.
- Airthings for Business, "Business devices calibration", <https://businesshelp.airthings.com/en/articles/164881-business-devices-calibration>, HTTP 200, läst 2026-10-07, gäller affärsprodukterna, inte Wave: "Airthings for Business sensors are self-calibrating and do not need to be sent away for calibration and testing as may be the case with other monitors." Tas med som bakgrund, inte som uppgift om Wave.

### 3.3 Sarad Radon Scout och Radon Scout Plus (PM MW17310, MW17315)

| Nr | Uppgift | Ordagrant | Källa |
|---|---|---|---|
| RS27 | Statistiskt fel | "200 Bq/m³ with 20% statistical error (1σ) at 1 hour interval"; "1000 Bq/m³ with an statistical error (1σ) < 10 % at 1 hour interval"; "100 Bq/m³ with 17% statistical error (1σ) at 3 h interval" | PM-bilagor 28830556 och 28830560 (samma rader) |
| RS28 | Messgenauigkeit | "Messgenauigkeit <=6%". Raden under: "Stat. Fehler 200 Bq/m³ mit 20% stat. Fehler (1σ) bei 1h Intervall". | Sarad, "Technische Daten Radon Scout / Plus", fotrad "datenblatt_radon-scout_de_12-10-2022.docx", <https://www.sarad.de/cms/media/docs/datenblatt/ds-radon_scout-de.pdf>, HTTP 200, läst 2026-10-07 |
| RS29 | Användning | "Für Langzeitmessungen der Aktivitätskonzentrationen von luftgetragenem Radon (222 Rn) in Wohnungen, an Arbeitsplätzen (einschließlich Untertage)" | samma datablad |
| RS30 | Kalibrering | Databladet: "DAkkS-akkreditierte Kalibrierung nach DIN EN ISO/IEC17025:2018" och i leveransen "DAkkS-akkreditiertes Kalibrierzertifikat nach DIN EN ISO/IEC 17025:2018". Produktsidan: "Das Gerät wird mit einem DAkkS konformen Kalibrierzertifikat ausgeliefert. Die Radon-Kalibrierung erfolgt nach den Vorgaben der DIN EN ISO/IEC 17025:2018." | datablad; <https://www.sarad.de/product-detail.php?p_ID=37>, HTTP 200, läst 2026-10-07 |
| RS31 | Mätintervall och minne | Radon Scout: "1 Stunde oder 3 Stunden wählbar bzw. anwenderspezifisch", "672 Datensätze". Plus: "1…255 Minuten einstellbar in Minutenschritten", "16.383 Datensätze". | datablad |
| RS32 | Ström | "2 x Monozellen (D), NiCd, NiMH oder Alkaline", "Radon Scout Plus: zusätzlich Stecker-Netzteil", "Batterielebensdauer > 90 Tage". | datablad |

- RS28: vad "Messgenauigkeit <=6%" avser (vid vilken halt, vilken mättid, vilken täckningsfaktor) står inte i databladet. **Saknas.**
- Produktsidan (p_ID=37) säger också "Das tausendfach bewährte, von der US EPA zertifizierte Gerät" och "Die Schaltschwelle ist beim Radon Scout fest auf den EU-Richtwert von 300 Bq/m³ eingestellt, während sie beim Radon Scout PLUS frei gewählt werden kann."
- PM:s engelska blad anger mätområdet "0 ... 10 MBq/m³", Sarads tyska datablad "1 ... 10.000.000 Bq/m³". PM:s Plus-blad anger "Storage: ... last 2047 data records", databladet 2022 "16.383 Datensätze". Databladet är nyare och väger tyngst.

---

## 4. Radonsugar hos Proffsmagasinet (BUTIK)

| Nr | Uppgift | Källa |
|---|---|---|
| RS33 | PM:s fyra produktsitemaps har 178 166 adresser (lastmod 2026-10-07). Sökt i adresserna, skiftlägesokänsligt: "radon" ger 5 träffar (de fyra mätarna och membranet i RS34); radonsug, radonett, radonova, radonbrunn, sugpunkt, markluft och corroventa ger 0; ostberg/östberg tillsammans med radon ger 0. **Inga radonsugar hos PM.** | `https://proffsmaster.blob.core.windows.net/product-feeds/proffs-se_sv-se_sitemap_products_1.xml` till `_4.xml`, via <https://www.proffsmagasinet.se/sitemap.xml>, alla HTTP 200, lästa 2026-10-07 |
| RS34 | Radonmembran i sitemapen: `https://www.proffsmagasinet.se/bygg-interior/kakel-klinkers/tillbehor-kakel/tatskikt/tecca-t-radon-foil-radonmembran-4300x045-mm-22-mrulle-4097319`. Sidan är inte hämtad; pris och lager saknas. | samma sitemap |

- Sökningen gäller ord i adresserna, inte produktnamn eller beskrivning. En radonsug vars adress saknar orden ovan hittas inte så.

---

## 5. Effekt per radonsug (TILLVERKARE, EGEN)

| Nr | Radonsug | Ordagrant | Källa |
|---|---|---|---|
| RS35 | Corroventa RS 400, webben | "Anslutningseffekt 105 W", "Normal förbrukning 10-25 W", "Luftmängd 50-370 m3/h", "Tryck 20-500 Pa", art.nr "9920960" | <https://www.corroventa.se/produkt/radonsug-rs-400/>, `dateModified` 2024-09-06, HTTP 200, läst 2026-10-07 |
| RS36 | Corroventa RS 400, instruktionen | Tabell "Läge / Energiförbrukning W / Tillgängligt tryck Pa / Luftmängd m3/h friblåsande": "1 15 56-107 112", "2 27 131-255 180", "3 60 235-450 242", "4 96 319-673 288". Och: "Anslutningseffekt: 105 W". "Anläggningen konstrueras och byggs för kontinuerlig" [drift]. | Corroventa, "RS 400 Radonsug Drift- & Skötselinstruktion" (filnamnet: 2012), <https://www.corroventa.se/wp-content/uploads/2023/12/rs400-drift-och-skotselinstruktion-a5-separata-sidor-2012-se1.pdf>, HTTP 200, läst 2026-10-07 |
| RS37 | Corroventa R2 ES, webben | "Anslutningseffekt 690 W*", "Normal förbrukning 87 W*", "*Vid en standardinstallation med 3 sugpunkter, 25 m rör och ett luftflöde på 70 m³/h." Brödtexten: "R2 har en effekt på bara 87 W (vid en standardinstallation med 3 sugpunkter, 25 m rör och ett luftflöde på 70 m3/h)". Art.nr "1004736". | <https://www.corroventa.se/produkt/radonsug-r2-es/>, `dateModified` 2024-12-01, HTTP 200, läst 2026-10-07 |
| RS38 | Corroventa R2 ES, manualen | "Teknisk data": "Märkeffekt (W) 700", "Normal förbrukning (W) 87*", "*Standardinstallation med 3 sugpunkter, 25m rör och ett luftflöde på 70m³/h." Luftflöde "Upp till 220", tryck "Upp till 65" mbar. Sidfot "© Corroventa Avfuktning AB 2024.10". | R2 bruksanvisning, <https://www.corroventa.se/wp-content/uploads/2024/12/r2-bruksanvisning-2410-se.pdf>, s. 24, HTTP 200, läst 2026-10-07 |
| RS39 | Weller RS202X, manualen | Svenska avsnittet "Tekniska Data" har raden "Upptagen effekt" och värdet "(W) 70" (kolumnerna förskjutna i textlagret). Engelska avsnittet: "Power consumption (W) 70", "Maximum vacuum (Pa) 2200", "Maximum quantity supplied (m³/h) 130", "Operating sound level from 1 m distance dB (A) <40". "1-Phase Safety transformer 120 VA / 27 VAC". | Weller, bruksanvisning T0055750501, EU-försäkran daterad "Besigheim, 2026-05-18", <https://www.weller-tools.com/sites/default/files/products/documents/WEL_Radon_IO_T0055750501_web.pdf>, HTTP 200, läst 2026-10-07 |
| RS40 | Weller RS202X, datablad | "Low power consumption (<70W)", "Radon extraction unit RS202, ideal for smaller houses with slabs on the ground or basement", Item No "FT91003499". | <https://www.weller-tools.com/eu/gb/product_datasheet?nid=24291>, HTTP 200 (PDF), läst 2026-10-07 |
| RS41 | Weller, grossist (BUTIK, bara art.nr) | Ahlsell anger "Effekt: 70 W"; produktkod "166295-6611399F_10". Ahlsell är inte källa för effekten; tillverkaren är (RS39). | <https://www.ahlsell.se/products/ventilation/flaktar/radon/radonsanering-for-markradon/6611399f>, HTTP 200, läst 2026-10-07 |

### 5.1 kWh per år (EGEN)

**EGEN**, formel: kWh/år = W × 8 760 ÷ 1 000 (8 760 = 365 × 24 timmar, drift dygnet runt hela året). Ingen tillverkare anger kWh per år. Anslutnings- och märkeffekt är inte förbrukning; de raderna är bara ett tak.

| Nr | Radonsug, effekt | W | kWh/år (EGEN) |
|---|---|---|---|
| RS42 | RS 400, "Normal förbrukning" lägsta | 10 | 87,6 |
| | RS 400, "Normal förbrukning" högsta | 25 | 219 |
| | RS 400, läge 1 | 15 | 131,4 |
| | RS 400, läge 2 | 27 | 236,52 |
| | RS 400, läge 3 | 60 | 525,6 |
| | RS 400, läge 4 | 96 | 840,96 |
| | RS 400, anslutningseffekt (tak) | 105 | 919,8 |
| RS43 | R2 ES, "Normal förbrukning" (vid standardinstallationen) | 87 | 762,12 |
| | R2 ES, anslutningseffekt webben (tak) | 690 | 6 044,4 |
| | R2 ES, märkeffekt manualen (tak) | 700 | 6 132 |
| RS44 | Weller RS202X, "Upptagen effekt" | 70 | 613,2 |

### 5.2 Vad andra anger

- RS45 (ÖVRIG), Bolius, "Sådan virker et radonsug", publicerad 3 april 2024, <https://www.bolius.dk/saadan-virker-et-radonsug-25294>, HTTP 200, läst 2026-10-07: "Det årlige elforbrug ligger i størrelsesordenen 260-610 kWh for et aktivt radonsug." Sidan har en källista (bl.a. SBi-anvisningar 232, 233, 270 och en seniorforskare vid SBi), men talet är inte kopplat till någon av källorna. Danskt, inte svenskt.
- RS46, **EGEN**, Bolius spann omräknat till kontinuerlig effekt: W = kWh/år × 1 000 ÷ 8 760; 260 → 29,7 W, 610 → 69,6 W.
- RS47 (MYNDIGHET), SSM, "Åtgärder mot radon", <https://www.stralsakerhetsmyndigheten.se/omraden/radon/atgarder-mot-radon/>, HTTP 200, läst 2026-10-07: "Då kan man med hjälp av en radonsug, radonbrunn eller smalrör skapa ett undertryck under huset så att jordluften inte sugs in." Ingen W- eller kWh-uppgift.
- RS48 (MYNDIGHET), Boverket, "Sanera radon", <https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/sanera/>, HTTP 200, läst 2026-10-07: "Det finns olika metoder för det, bland annat radonsug och radonbrunn." "Tänk dock på att tekniska system för sanering alltid behöver underhållas." Ingen W- eller kWh-uppgift.
- Slutsatsen att varken SSM eller Boverket anger effekt för en radonsug gäller de tre lästa SSM-/Boverketkällorna i bladet (RS1, RS47, RS48). SSM:s "Vägen till ett radonfritt boende" och Boverkets "Åtgärder mot radon i bostäder" (2018) är inte omlästa här.

---

## 6. Källorna säger olika

| Fråga | Källa A | Källa B | Väger tyngst |
|---|---|---|---|
| Metodbeskrivningens datum | Publikationssidan: "Utgivningsdatum: 2026-10-01" | PDF:en: "Datum: Augusti 2026" | Båda stämmer: skriven i augusti, utgiven 1 oktober. För "gäller från" används utgivningsdatumet. |
| Kalibreringsintervall | SSM 4.1: "rekommenderar ett kalibreringsintervall på ett år", "kan göras mer sällan om" drift kontrolleras | SSM bilaga 2: "bör göras med ett längsta tidsintervall på ett år" | Samma dokument; det är ett "bör" och en rekommendation, inte ett krav på högst ett år gammal kalibrering. |
| Airthings Home vid 200 Bq/m³ | PM:s bilagor (2016 och Canary): bara tal vid 100 Bq/m³ | Airthings hjälpartikel mars 2026: gäller "Corentium Home" och anger ~±10 % (7 dygn) och ~±5 % (2 månader) vid 200 Bq/m³ | Airthings artikel är nyare och tillverkarens. Men den säger "Typical σ" efter "30 days of continuous measuring", inte ett garanterat värde för Home specifikt. |
| Wave, EAN | Airthings specifikation: 7090031129002 | Airthings betygsdata för "Wave Radon" och PM: 7090031109103 | Specifikationen. Att PM:s EAN är en annan produkt är inte belagt. |
| R2 ES maxeffekt | Webben: "Anslutningseffekt 690 W*" | Manualen 2024.10: "Märkeffekt (W) 700" | Manualen är tillverkarens tekniska dokument. Skillnaden 10 W påverkar inte normal förbrukning (87 W i båda). |
| RS 400 förbrukning | Webben: "Normal förbrukning 10-25 W" | Instruktionen 2012: läge 1–4 = 15/27/60/96 W | Ingen motsägelse i sak: webben anger normal drift, instruktionen effekt per läge. Vilket läge "normal" avser står inte. |
| Sarad Scout, minne och område | PM:s blad: "last 2047 data records" (Plus), "0 ... 10 MBq/m³" | Sarads datablad 2022: "16.383 Datensätze" (Plus), "1 ... 10.000.000 Bq/m³" | Sarads datablad (nyare, tillverkarens egen adress). |
| Sarad noggrannhet | "Messgenauigkeit <=6%" | "200 Bq/m³ mit 20% stat. Fehler (1σ) bei 1h Intervall" | Båda står i samma datablad och mäter olika saker; vad 6 % avser saknas. Skriv inte ihop dem. |

---

## 7. Avstämning mot det förra bladet

| Punkt i förra bladet | Utfall |
|---|---|
| 1a. Ny adress `...metodbeskrivning--matning-av-radon-i-bostader-pdf`, utgiven 2026-10-01 | **Bekräftad** (RS1). PDF:en själv säger "Augusti 2026". |
| 1b. Gamla .pdf-adressen ger 404-sida med HTTP 200 | **Bekräftad** (RS2). |
| 1c. "en snabb indikation", "en förnyad långtidsmätning" | **Bekräftad** (RS3). |
| 1d. "individuell bedömning" för mättiden vid första kontroll | **Bekräftad** (RS4); orden är "initial kontroll" och "individuell bedömning göras av lämplig mättid". |
| 1e. Kontinuerliga instrument godtas "om de är kalibrerade och uppfyller vissa kvalitetskrav" | **Kunde inte bekräftas.** Frasen finns inte i PDF:en eller i SSM:s fråga-svar. Närmaste text: RS7, RS8, RS9. |
| 1f. Högst 20 % mätosäkerhet (k=2) vid 200 Bq/m³ | **Bekräftad** (RS6). |
| 1g. Kalibrering högst ett år gammal | **Bekräftad med ändring:** SSM "rekommenderar" ett års intervall och skriver "bör"; mer sällan är tillåtet med driftkontroll (RS7, RS8). |
| 1h. Radonsug nämns inte | **Bekräftad.** |
| 2. PM: priser, lager, leveranstext | **Bekräftad** för alla fyra (RS11–RS14). Nytt: Radon Scout "Skickas om 7-9 veckor", Plus "Skickas om 3-4 veckor"; Home 2 st i lager; ingen kampanj. |
| 3a. Home: < 20 % vid 100 Bq/m³ efter 7 dagar, < 10 % efter 1 månad; inget tal vid 200 | **Bekräftad** i PM:s bilagor (RS16, RS17). Airthings hjälpartikel ger dock tal vid 200 Bq/m³ och omfattar Home (se 6). |
| 3b. "kalibreras instrumentet automatiskt" | **Bekräftad** (RS18). |
| 3c. Kalibreringsintyg bara för Corentium Pro | **Bekräftad** (RS19). |
| 3d. Långtidsmedlet gäller 365 dygn | **Bekräftad** (RS20). |
| 3e. Wave: PM:s bilaga modell 2900 rev B från 2016 | **Bekräftad** som "1-MAN-2900-B"; 2016 står bara i ritningshuvudet (RS21). |
| 3f. Wave i dag σ ~10 % (7 dagar), ~5 % (2 månader) vid 200 Bq/m³ | **Bekräftad** (RS22, RS25). |
| 3g. "acclimatize … rather than requiring traditional calibration" | **Bekräftad** (RS23). |
| 3h. Sensortypen certifieras årligen hos BfS | **Bekräftad med ändring:** Airthings skriver "we obtain a Calibration Certification from the German Federal Office for Radiation Protection on an annual basis" (RS24). Ordet sensortyp står inte. |
| 3i. EAN 7090031129002 i dag, PM:s 7090031109103 | **Bekräftad,** men Airthings egen sida har även 7090031109103 för "Wave Radon" i betygsdata (RS26). |
| 3j. Sarad: 20 % (1σ) vid 200 Bq/m³, 1 h | **Bekräftad** (RS27, RS28). |
| 3k. "Messgenauigkeit <=6%" | **Bekräftad** (RS28); vad det avser saknas. |
| 3l. DAkkS-intyg enligt ISO/IEC 17025 | **Bekräftad** (RS30). |
| 3m. "Für Langzeitmessungen … in Wohnungen" | **Bekräftad** (RS29). |
| 4. Inga radonsugar hos PM; Tecca-membran finns | **Bekräftad** (RS33, RS34). |
| 5a. RS 400: "Normal förbrukning 10-25 W", anslutning 105 W, läge 1–4 = 15/27/60/96 W vid 56–673 Pa och 112–288 m³/h | **Bekräftad** (RS35, RS36). |
| 5b. R2 ES: "Normal förbrukning 87 W", max 690 W (webben) eller 700 W (manualen 2024.10) | **Bekräftad;** webben kallar 690 W "Anslutningseffekt", manualen kallar 700 W "Märkeffekt" (RS37, RS38). |
| 5c. Weller RS202: 70 W "Upptagen effekt" | **Bekräftad** (RS39). |
| 5d. Varken SSM eller Boverket anger W eller kWh | **Bekräftad** för de lästa sidorna (RS47, RS48, metodbeskrivningen). |
| 5e. Bolius 260–610 kWh/år utan källa | **Bekräftad** (RS45); sidan har en allmän källista men ingen källa för talet. |

---

## 8. Öppet

1. SSM:s formulering om när kontinuerliga instrument godtas ("om de är kalibrerade och uppfyller vissa kvalitetskrav") finns inte i någon läst källa. Om sidan behöver den måste källan hittas, troligen den äldre metodbeskrivningen. Annars citeras RS7–RS9.
2. Om PM:s Airthings Wave MW14900 (EAN 7090031109103) är dagens Wave Radon 2900: kan inte avgöras. Fråga PM eller Airthings.
3. Vad Sarads "Messgenauigkeit <=6%" avser: saknas.
4. Vilket läge på RS 400 som motsvarar "Normal förbrukning 10-25 W": saknas.
5. R2 ES:s förbrukning vid andra installationer än standardinstallationen (3 sugpunkter, 25 m rör, 70 m³/h): saknas.
6. Tecca radonmembran hos PM: sidan inte hämtad; pris, lager och om det hör hemma bland radonprodukter är inte kontrollerat.
7. Ingen tillverkare anger kWh per år. Talen i 5.1 förutsätter drift dygnet runt hela året; Bolius skriver att aktivt sug "typisk" behövs i vinterperioden. Driftstid över året: saknas i svenska källor.
8. SSM:s "Vägen till ett radonfritt boende" och Boverkets "Åtgärder mot radon i bostäder" (2018) är inte omlästa för effektuppgifter i denna omgång.

## 9. Sidor som inte gick att läsa

- <https://www.stralsakerhetsmyndigheten.se/publikationer/handbocker-och-metodbeskrivningar/metodbeskrivning-matning-radon-bostader-2026/> (adress i tidigare underlag): HTTP 200 men sidan "Sidan kan inte hittas". Rätt publikationssida: `.../handbok-for-matning-av-radon-i-bostader/`.
- <https://www.stralsakerhetsmyndigheten.se/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader.pdf>: samma, HTTP 200 med 404-sida (RS2).
- R2 ES-manualens tabell s. 24 och Wellers svenska tabell gick inte att rendera som bild (pdftoppm saknas); lästa i textlagret i tabell- och råläge. R2-tabellen är entydig i tabelläge; Wellers svenska kolumner är förskjutna och 70 W är bekräftat i den engelska tabellen i samma fil.
- Inga sidor gav 403 eller 429.

---

## 10. Källförteckning

```yaml
kallor:
  - titel: Strålsäkerhetsmyndigheten, Metodbeskrivning. Mätning av radon i bostäder (Datum: Augusti 2026, utgiven 2026-10-01; läst 2026-10-07)
    url: https://www.stralsakerhetsmyndigheten.se/globalassets/publikationer/metodbeskrivning--matning-av-radon-i-bostader-pdf
  - titel: Strålsäkerhetsmyndigheten, publikationssida Metodbeskrivning för mätning av radon i bostäder (läst 2026-10-07)
    url: https://www.stralsakerhetsmyndigheten.se/publikationer/handbocker-och-metodbeskrivningar/handbok-for-matning-av-radon-i-bostader/
  - titel: Strålsäkerhetsmyndigheten, Måste radonmätaren vara kalibrerade? (senast uppdaterad 2026-10-02, läst 2026-10-07)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/fragor-och-svar-om-radon/maste-radonmataren-sparfilmsdosor-elektroniska-matinstrument-vara-kalibrerad/
  - titel: Strålsäkerhetsmyndigheten, Åtgärder mot radon (läst 2026-10-07)
    url: https://www.stralsakerhetsmyndigheten.se/omraden/radon/atgarder-mot-radon/
  - titel: Boverket, Sanera radon (läst 2026-10-07)
    url: https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker-byggande/risker-felaktig-ventilation/radon/sanera/
  - titel: Proffsmagasinet, kategorin Radonmätare (BUTIK, läst 2026-10-07)
    url: https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare
  - titel: Proffsmagasinet, Airthings Home MW14910 (BUTIK, läst 2026-10-07 22:05)
    url: https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare/airthings-home-radonmatare-mw14910
  - titel: Proffsmagasinet, Airthings Wave MW14900 (BUTIK, läst 2026-10-07 22:05)
    url: https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare/airthings-wave-radonmatare-mw14900
  - titel: Proffsmagasinet, Sarad Radon Scout MW17310 (BUTIK, läst 2026-10-07 22:05)
    url: https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare/sarad-radon-scout-radonmatare-mw17310
  - titel: Proffsmagasinet, Sarad Radon Scout Plus MW17315 (BUTIK, läst 2026-10-07 22:05)
    url: https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/miljoinstrument/radonmatare/sarad-radon-scout-plus-radonmatare-mw17315
  - titel: Proffsmagasinet, produktsitemap 1 av 4 (läst 2026-10-07; även _2, _3, _4)
    url: https://proffsmaster.blob.core.windows.net/product-feeds/proffs-se_sv-se_sitemap_products_1.xml
  - titel: Corentium, Product line 2016 (Pro, Plus, Home; PM-bilaga)
    url: https://pm-asset.azureedge.net/api/asset-download?id=28830538
  - titel: Corentium, Canary digital radonmätare, manual (PM-bilaga)
    url: https://pm-asset.azureedge.net/api/asset-download?id=28830543
  - titel: Airthings, Wave User Manual 1-MAN-2900-B (PM-bilaga)
    url: https://pm-asset.azureedge.net/api/asset-download?id=28830535
  - titel: Sarad, Radon Scout Technical Data (PM-bilaga)
    url: https://pm-asset.azureedge.net/api/asset-download?id=28830556
  - titel: Sarad, Radon Scout PLUS Technical Data (PM-bilaga)
    url: https://pm-asset.azureedge.net/api/asset-download?id=28830560
  - titel: Airthings Help Center, Radon - how is radon measured? (March 26, 2026; läst 2026-10-07)
    url: https://help.airthings.com/en/articles/3119759-radon-how-is-radon-measured-how-does-an-airthings-device-measure-radon
  - titel: Airthings, Wave Radon produktsida (läst 2026-10-07)
    url: https://www.airthings.com/en/wave-radon
  - titel: Airthings for Business, Business devices calibration (läst 2026-10-07)
    url: https://businesshelp.airthings.com/en/articles/164881-business-devices-calibration
  - titel: Sarad, Technische Daten Radon Scout / Plus (12-10-2022; läst 2026-10-07)
    url: https://www.sarad.de/cms/media/docs/datenblatt/ds-radon_scout-de.pdf
  - titel: Sarad, Radon Scout/Radon Scout PLUS produktsida (läst 2026-10-07)
    url: https://www.sarad.de/product-detail.php?p_ID=37
  - titel: Corroventa, Radonsug RS 400 (dateModified 2024-09-06, läst 2026-10-07)
    url: https://www.corroventa.se/produkt/radonsug-rs-400/
  - titel: Corroventa, RS 400 Drift- och skötselinstruktion (2012)
    url: https://www.corroventa.se/wp-content/uploads/2023/12/rs400-drift-och-skotselinstruktion-a5-separata-sidor-2012-se1.pdf
  - titel: Corroventa, Radonsug R2 ES (dateModified 2024-12-01, läst 2026-10-07)
    url: https://www.corroventa.se/produkt/radonsug-r2-es/
  - titel: Corroventa, R2 bruksanvisning (2024.10)
    url: https://www.corroventa.se/wp-content/uploads/2024/12/r2-bruksanvisning-2410-se.pdf
  - titel: Weller, Radon bruksanvisning T0055750501 (EU-försäkran 2026-05-18; läst 2026-10-07)
    url: https://www.weller-tools.com/sites/default/files/products/documents/WEL_Radon_IO_T0055750501_web.pdf
  - titel: Weller, Radon Suction Device 230V, product datasheet (läst 2026-10-07)
    url: https://www.weller-tools.com/eu/gb/product_datasheet?nid=24291
  - titel: Ahlsell, Radonsug RS202X (grossist, bara art.nr; läst 2026-10-07)
    url: https://www.ahlsell.se/products/ventilation/flaktar/radon/radonsanering-for-markradon/6611399f
  - titel: Bolius, Sådan virker et radonsug (publicerad 2024-04-03, läst 2026-10-07)
    url: https://www.bolius.dk/saadan-virker-et-radonsug-25294
```
