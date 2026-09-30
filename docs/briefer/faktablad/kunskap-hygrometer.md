# Faktablad: /fukt/hygrometer/

Beställt av hantverkaren 2026-09-30. Krav i `docs/briefer/seo-checklista-2026-09-30/hygrometer.md` punkt 11 och 12. Skrivet 2026-09-30 av underlag.

- **Huvudfras:** hygrometer (4 400/mån). **Sidtyp:** kunskap, `src/content/kunskap/fukt/hygrometer.mdx`, `pelare: fukt`, `produkter: []`, ingen `kategori`.
- Talen i `fukt-gemensamma-tal.md` gäller som de står. Här står det som saknades där och det som där var märkt "ej läst om". Avvikelser mot det gemensamma bladet står i avsnitt 11.
- "Läst 2026-09-30" = hämtat och läst den dagen. Citat inom citattecken är ordagranna ur sidans HTML eller PDF-text. **WEBFETCH** = citat som WebFetch återgav men som inte kontrollerats i råtexten. **EGEN** = egen räkning, formeln står bredvid. Engelska och tyska citat står på originalspråket, och hantverkaren översätter dem.
- Ingen text här är förlaga. Ingen prosa ur någon sida på sajten har följt med.
- Modellnamnen nedan står som exempel på vad ett datablad anger. De är inte rekommendationer och ska inte länkas.

---

## 1. Boverket, felmarginalen (T17), läst om ordagrant

Adress: <https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/kontroller/kontroll-av-inomhusmiljo/kontroll-termisk-komfort/luftfuktighet-luftrorelser-drag/>
Sidan "Luftfuktighet, luftrörelser och drag", publicerad 13 december 2023, senast ändrad 16 maj 2024. Läst 2026-09-30 med curl ur HTML, eftersom WebFetch gav tom text. Rang: myndighet.

Ordagrant, i samma stycke och i den här ordningen:

> "Det finns olika typer av mätinstrument för att mäta relativ fuktighet i inomhusluften. Vanligast är en så kallad fuktlogger eller hygrometer som löpande mäter den relativa fuktigheten och vanligtvis även temperaturen. Dessa mätare mäter ofta bra mellan 20 procent och 80 procent."

> "En risk med enkla och billigare instrument är att osäkerheten i mätvärdena kan bli stora (+/- 10 procent), och att noggrannheten kan försämras över tid."

- Boverket skriver "procent", inte "procentenheter". Att det betyder ±10 procentenheter av RF är vår läsning. Den är rimlig eftersom talet står bredvid "20 procent och 80 procent" RF, men ordet "procentenheter" finns inte hos Boverket. Citeras ordet, ska det stå "+/- 10 procent".
- Boverket anger ingen källa för talen och nämner inte kalibrering av hygrometrar. Samma sida säger om anemometrar: "En risk är att noggrannheten hos instrumentet kan försämras över tid. Därför måste instrumenten kalibreras regelbundet." Den meningen gäller lufthastighet och får inte flyttas över till hygrometern.

---

## 2. Saltlösningarnas jämviktsfuktighet (läst om i original)

### 2.1 Källan

- **Greenspan, L. (1977).** "Humidity Fixed Points of Binary Saturated Aqueous Solutions". *Journal of Research of the National Bureau of Standards – A. Physics and Chemistry*, vol. 81A, nr 1, januari–februari 1977, s. 89–96. NIST:s PDF: <https://nvlpubs.nist.gov/nistpubs/jres/81A/jresv81An1p89_A1b.pdf>. Läst 2026-09-30 (skannad PDF, text via OCR, tabell 2). Rang: statligt mätinstitut (NBS, numera NIST). Detta är originalkällan.
- **Vaisala, HMK15 User's Guide** (M210185EN-C, © Vaisala 2006), "Greenspan's Calibration Table", s. 25. Återger Greenspans tabell avrundad till en decimal och hänvisar till samma artikel. Kopia hos återförsäljaren IAG: <https://www.iag.co.at/fileadmin/user_upload/HMK15UserGuide.en.pdf>. Läst 2026-09-30. Rang: givartillverkarens bruksanvisning. Används för att kontrollera OCR-läsningen, och talen stämmer.
- **OIML R 121** kunde inte läsas. oiml.org gav ett felsvar i stället för PDF:en (`r121-e96.pdf`), och övriga kopior ligger på Scribd. Sidan kan hänvisa till Greenspan 1977 direkt, som är källan som OIML R 121 bygger på enligt det gemensamma bladet. Att OIML R 121 återger 75,3 är **inte kontrollerat** i dag.

Ordagrant ur Greenspan (sammanfattningen, s. 89): "An evaluated compilation of equilibrium relative humidities in air versus temperature from pure phase to approximately 10⁵ pascal (1 atm) in pressure is presented for 28 binary saturated aqueous solutions. [...] Equations and tables are presented along with the estimated uncertainties in the correlated results."

Om decimalerna (s. 93): "All calculated values of relative humidity are given to 0.01 percent relative humidity. This does not in any way imply an accuracy of 0.01 percent. The designated estimated uncertainties still give the best prediction of accuracy."

### 2.2 Tabellen, som den ska stå

Jämviktsfuktighet över mättad lösning, % RF. Talet efter ± är Greenspans uppskattade osäkerhet.

| Temperatur | Koksalt (NaCl), Greenspan | Koksalt, Vaisala avrundat | Magnesiumklorid (MgCl₂), Greenspan | MgCl₂, Vaisala avrundat |
|---|---|---|---|---|
| 15 °C | 75,61 ± 0,18 | 75,6 ± 0,2 | 33,30 ± 0,21 | 33,3 ± 0,2 |
| 20 °C | 75,47 ± 0,14 | 75,5 ± 0,1 | 33,07 ± 0,18 | 33,1 ± 0,2 |
| 25 °C | 75,29 ± 0,12 | 75,3 ± 0,1 | 32,78 ± 0,16 | 32,8 ± 0,2 |
| 30 °C | 75,09 ± 0,11 | 75,1 ± 0,1 | 32,44 ± 0,14 | 32,4 ± 0,1 |

- **75,3 procent vid 25 °C stämmer** (75,29 ± 0,12). Vid 20 °C är talet **75,5** (75,47 ± 0,14). Vid rumstemperatur skriver sidan helst 75,5 vid 20 °C, eller båda talen.
- Magnesiumklorid ligger på **33,1 vid 20 °C och 32,8 vid 25 °C**, så checklistans "cirka 33" stämmer.
- **EGEN, ur tabellen:** koksaltets punkt flyttar sig 0,5 procentenheter mellan 15 och 30 °C (75,61 − 75,09 = 0,52). Burkens exakta temperatur spelar alltså liten roll för målvärdet. Det som ger fel är skillnaden i temperatur mellan saltet och mätaren (2.3).
- OCR-läsningen av den skannade PDF:en har brus, men alla åtta tal ovan stämmer med Vaisalas avrundade tabell.

### 2.3 Temperaturen, ordagrant

Vaisala HMK15 User's Guide, kap. 4 "General Instructions", s. 19 (adress i 2.1):

> "Usually, the errors during humidity calibration are due to temperature differences. A temperature difference of ±1 °C at +20 °C between the air in the chamber and the sensor causes an error of ±3 %RH at 50 %RH and an error of ±6 %RH at 97 %RH."

> "The calibrator must be kept out of direct sunlight and away from localized heat sources, such as spot lights, heaters and soldering irons."

> "Do not hold the salt chamber or other parts of the calibrator in hand during calibration as they warm up and cause errors in the readings."

**EGEN**, samma sak räknad vid koksaltets punkt: RF₂ = RF₁ × e_s(T₁) / e_s(T₂), där e_s(T) = 6,1094 × exp(17,625 × T / (243,04 + T)) hPa (Magnus med Lawrence-konstanterna, T18 i det gemensamma bladet). Om luften i burken har 75 % vid 20 °C och givaren är 1 °C varmare (21 °C), visar den 75 × 23,334 / 24,819 = **70,5 %**. Om givaren är 1 °C kallare visar den **79,8 %**. En grads skillnad ger alltså ungefär ±4,5 procentenheter vid 75 %. Vid 50 % ger samma räkning 47,0 respektive 53,2, vilket stämmer med Vaisalas ±3.

---

## 3. Saltprovet i praktiken

### 3.1 Givartillverkaren, ordagrant (Vaisala HMK15 User's Guide, kap. 3, s. 13–17, adress i 2.1)

- Blandningen: "When all salt has been sprinkled into the chamber, the saturated salt solution should have the ratio of 60 … 90 % undissolved salt to 10 … 40 % liquid."
- Mängderna i Vaisalas kammare: NaCl "20 g or 15 ml" salt och "10 ml of water"; MgCl₂ "30 g or 30 ml" salt och "3 ml of water". Mängderna gäller den kammaren och är inget recept för en syltburk.
- Tid för lösningen: "Allow approximately 24 hours for stabilization before use so that the salt solution reaches the equilibrium humidity."
- Tid för givaren (s. 24–25): "Wait until the humidity reading stabilizes; this takes about 10 … 30 minutes. Note that in high humidities the risk for errors increases. Therefore, the stabilization time should be longer (approximately 20 … 40 minutes)."
- Före provet (s. 23): givaren ska vänta "at the calibration site for at least 30 minutes before starting the calibration in order to let the probe temperature stabilize to the room temperature."
- Hela provet på plats (s. 27): "Depending on the temperature differences between the transportation and the calibration site or between the probe removed from the process and the calibration site, a two point calibration takes about 0.5 … 2 hours."
- Ordningen: "If the probe/transmitter is checked against several humidity references, the checking must first be made at the dry end." Magnesiumklorid ska alltså tas före koksalt.

### 3.2 Vaisala, blogg (WEBFETCH, inte kontrollerat i råtexten)

Lars Stormbom, "Saturated salt calibration with the Vaisala HMK15 – another easy option", 7 juni 2018, <https://www.vaisala.com/en/blog/2018-06/saturated-salt-calibration-vaisala-hmk15-another-easy-option>, läst 2026-09-30:

- "A saturated salt calibrator always contains three different phases: gas (saturated air), liquid (water), and solid salt." Det är skälet till att det ska finnas olöst salt kvar.
- "Even small temperature differences between the probe being calibrated and the salt solution will result in big differences in relative humidity."
- "It will usually take between 10 and 30 minutes before equilibrium is reached in each calibration chamber."

### 3.3 Det som inte har källa

- **Tiden i en syltburk hemma.** Vaisalas 10 till 30 minuter gäller en liten kammare som redan har stått i 24 timmar, och en givare som sticks in genom ett hål. Ingen källa ger tiden för en burk där både saltskål och hygrometer ställs in samtidigt. Källorna ger alltså: lösningen behöver cirka ett dygn för att nå jämvikt (Vaisala), och givaren behöver 20 till 40 minuter vid hög fuktighet. Att "låta det stå tills talet står stilla" och "över natten" är hantverkarens egna ord och ska stå som hans.
- **Vanligt hushållssalt** (med jod eller klumpförebyggande medel) nämns inte av Vaisala eller Greenspan. Greenspans tal gäller rent NaCl. Om tillsatserna påverkar punkten: **saknas**.
- **Hur felet räknas bort** (visar mätaren 71 i burken är felet −4,3 vid 25 °C) är enkel aritmetik och behöver ingen källa. Men att felet är lika stort i andra delar av skalan är **inte** sant för alla givare, och det är skälet till att ta två salter (Vaisala torrt först, 3.1). Källa för hur stort felet är i andra delar av skalan: Biltemas och TFA:s datablad anger olika tolerans i olika delar (avsnitt 4).

---

## 4. Noggrannhet per typ, ur tillverkarens datablad

Alla uppgifter är **tillverkarens**. Ingen är oberoende uppmätt. Adresserna står för faktabladet och ska inte länkas från sidan.

| Typ | Exempel (datablad) | Mäter med | Noggrannhet RF enligt tillverkaren | Område, drift, annat | Källa, läst 2026-09-30 |
|---|---|---|---|---|---|
| Kapacitiv givare (komponent, sitter i många mätare) | Sensirion SHT40/SHT41/SHT43 | kapacitiv | "typ." ±1,8 %RH (SHT45: ±1,0) | Långtidsdrift "typ. <0.2 %RH/y". Bäst i 5–60 °C och 20–80 %RH. Hysteres 0,8 %RH vid 25 °C | Sensirion, Datasheet SHT4x, version 7.3, juni 2026, tabell 1 och avsnitt 2.3, <https://sensirion.com/resource/datasheet/sht4x> |
| Enkel digital rumsmätare | Biltema termometer/hygrometer inne/ute, art. 84-0811 | anges inte | "+/- 5 % RH (@25 °C, 35–70 % RH)" och "+/- 10 % RH (@25 °C, 10–34 % RH, 71–99 % RH)" | Mätområde 10–95 % | Biltema bruksanvisning, © 2025-03-06, <https://docs.biltema.com/v2/documents/file/sv/fa446958-59d3-4008-b4a4-49a445481091> |
| Enkel digital rumsmätare | TFA Digitales Schimmel RADAR Thermo-Hygrometer, kat. nr 30.5032 | anges inte | "+/-4% von 30%...80%, ansonsten +/-5%" | Mätområde 10–99 % r.F. Räknar medelvärde var tionde minut | TFA bruksanvisning (tyska), kopia hos Conrad, <https://asset.conrad.com/media10/add/160267/c1/-/de/000622269ML02/navodila-za-uporabo-in-varnost-622269-tfa-digitalni-radar-za-plesen.pdf> |
| Enkel digital rumsmätare | Clas Ohlson Cotech 36-6779 (modell E0119TH) | anges inte | **anges inte** i bruksanvisningen. Butikssidan skriver "Noggrannhet: Temperatur ±0,5 ºC. Luftfuktighet 1 % (RH)." | Mätområde 10–90 % RH. Bruksanvisningen: "Termometern är inte avsedd för att användas som referens" | Bruksanvisning Ver. 20180323, <https://www.clasohlson.com/medias/sys_master/9565704781854.pdf>; produktsida <https://www.clasohlson.com/se/Hygrometer-termometer-Cotech/p/36-6779> |
| Analog hårhygrometer | Fischer 111.01 (präzisions-hårhygrometer) | människohår | "Die Anzeigegenauigkeit beträgt im mittleren und hohen Feuchtebereich ±3% und unterhalb von 25% r.F. ±5%." | Håret måste regenereras "in Abständen von 2 bis 3 Wochen" inomhus. Går att justera med skruv | Fischer, Produktdatenblatt Nr. 111.01, utgåva 1, 05/06, <https://www.fischer-barometer.de/katalog/dokumente/meteo/D111_01.pdf> |
| Analog hår-syntet | TFA Haar-Synthetik-Hygrometer (t.ex. 45.2027) | hår-syntet | **anges inte** | Ska regenereras "mehrmals im Jahr" och justeras vid behov, "unter Umständen auch bereits direkt nach dem Kauf" | TFA Gebrauchsanweisung, 02/2017, kopia hos Conrad, <https://asset.conrad.com/media10/add/160267/c1/-/de/000672206ML02/manual-672206-tfa-dostmann-452027-thermohygrometer.pdf> |
| Loggande, trådlös (Bluetooth, app) | SwitchBot Meter / Meter Plus | anges inte; "Swiss-made sensor" | "10～90%RH：±2%RH；0～10%；90～99%RH±4%RH" | Lokalt minne 68 dagar. Kan kalibreras i appen | SwitchBots produktsida, jämförelsetabell Meter/Meter Plus, <https://us.switch-bot.com/products/switchbot-meter-plus> |
| Loggande, trådlös (Bluetooth, app) | Aranet4 HOME | anges inte | ±3 % | Område 0–85 %. Långtidsdrift 0,5 %/år. "For best accuracy, recommended operating range is 10°C to 40°C [...] and 20% to 60% RH (non-condensing)." Tidskonstant RF: "TBD" | Aranet4 datasheet v2.8, © 2021 SAF Tehnika, kopia hos Naltic, <https://naltic.com/wp-content/uploads/2023/04/Aranet4_datasheet_v25_WEB-1.pdf>; Aranet4 HOME Datasheet i manualen, © 2019, kopia hos datenlogger-store.de, <https://www.datenlogger-store.de/mwdownloads/download/link/id/1671> |
| Referens | Vaisala HMK15 (saltkalibrator) | mättade salter | Tabellosäkerhet ±0,1–0,2 %RH för NaCl och MgCl₂ vid 15–30 °C | Referens för kontroll, inte en mätare | 2.1 |

Ordagrant som behövs i texten:

- Sensirion SHT4x, avsnitt 2.3: "The sensor shows best performance when operated within the recommended normal temperature and humidity range of 5 °C … 60 °C and 20 %RH … 80 %RH, respectively. Long term exposure to conditions outside recommended normal range, especially at high relative humidity, may temporarily offset the RH signal (e.g. +3 %RH after 60 h at >80 %RH). After returning into the recommended normal temperature and humidity range the sensor will recover to within specifications by itself." Det gäller mätare som hänger länge i en fuktig krypgrund eller källare.
- Sensirion, fotnot 10 till långtidsdriften: "Value may be higher in environments with vaporized solvents, out-gassing tapes, adhesives, packaging materials, etc."
- Aranet4: "Prolonged operation beyond these ranges may result in a shift of sensor reading, with slow recovery time."
- Aranet4 v2.8, fotnot 3: "95 % of the sensors measure within these typical limits in equilibrium state at the time of sale. For evaluation of the total measurement error long-term drift has to be taken into account."

Att veta om tabellen:

- **Givare och mätare är inte samma sak.** Sensirions ±1,8 gäller komponenten. Hur den byggs in avgör resten: "Humidity response time in the application depends on the design-in of the sensor" (SHT4x, fotnot 9). SwitchBot uppger en "Swiss-made sensor" men namnger inte modellen, så att SwitchBot har en Sensirion-givare är **inte belagt**.
- **Samma mönster hos flera tillverkare:** tillverkarnas "bästa område" sammanfaller med Boverkets 20–80 (Sensirion 20–80 %RH, Aranet 20–60 %), och toleransen blir större utanför det (Biltema ±5 → ±10 över 70 %, TFA ±4 → ±5 utanför 30–80 %, SwitchBot ±2 → ±4 över 90 %). Det är vår sammanställning av fyra datablad och står inte hos någon av dem.
- **Clas Ohlsons "Luftfuktighet 1 % (RH)" under "Noggrannhet"** motsvarar det som andra datablad kallar upplösning (Aranet4: "Resolution [...] 1 %"). Samma rad står för den trådlösa 36-6725 (bruksanvisningen Ver. 20190521 skriver "Accuracy [...] 1 % (RH)"). Sidan ska inte återge talet som noggrannhet. Ingen noggrannhet finns för Clas Ohlsons mätare: **saknas**.
- **Humidor Discounts spiralhygrometer ±5 %** (ur checklistans SERP) har inte lästs om och används inte.
- **Luftfuktighetssidans ±2–3 för kapacitiva givare** (checklistans H2 3) har nu källa i Sensirion (±1,8 typ.), SwitchBot (±2) och Aranet (±3), alla tillverkarens uppgifter.

---

## 5. Prisspann per typ

Butikernas priser 2026-09-30, ordinarie pris i kr inkl. moms. Priserna står som spann i tabellen, och ingen butik länkas från sidan.

| Typ | Pris och butik | Spann (EGEN, lägsta–högsta ur raderna) |
|---|---|---|
| Analog (spiral/syntet) | TFA Analog Hygrometer: Thomann 53 kr (<https://www.thomann.se/tfa_analogue_hygrometer.htm>, WebFetch); Kjell & Company 139,90 kr (<https://www.kjell.com/se/produkter/hem-fritid/termometrar-hygrometrar/hygrometrar/tfa-analog-hygrometer-p48598>, WebFetch) | 53–140 kr |
| Analog hårhygrometer | Fischer 111.01T: Museiservice 1 714 kr inkl. moms (<https://www.museiservice.se/skydda-miljokontroll/miljokontroll/hrhygrometer-fischer-111>, WebFetch). En butik | cirka 1 700 kr (en butik, inget spann) |
| Enkel digital | Biltema termometer/hygrometer inne/ute 64,90 kr (<https://www.biltema.se/kontor---teknik/termometrar/utomhustermometrar/termometerhygrometer-inneute--2000036346>, ur sidans produktdata; sidan anger art. 84-0860 "replacedBy" 84-0811); Clas Ohlson digital termometer och hygrometer 3-pack 149,90 kr (<https://www.clasohlson.com/se/Digital-termometer-och-hygrometer-inomhus,-3-pack/p/46-1514>, ur sidans produktdata); Kjell Rubicson Kompakt digital hygrometer 179,90 kr, medlemspris 99 kr (<https://www.kjell.com/se/produkter/hem-fritid/termometrar-hygrometrar/hygrometrar>, WebFetch) | 65–180 kr per styck (3-packet 50 kr/st, **EGEN** 149,90 / 3) |
| Trådlös med givare, min/max, utan app | Clas Ohlson trådlös hygrometer/termometer 36-6725, 299 kr (<https://www.clasohlson.com/se/Tradlos-hygrometer-termometer/p/36-6725>, ur sidans produktdata) | 299 kr (en butik) |
| Uppkopplad eller loggande | Kjell: Shelly H&T smart termometer och hygrometer 279,90 kr; Datalogger Pro 1 199 kr; Netatmo Weather station 1 790 kr (<https://www.kjell.com/se/produkter/hem-fritid/termometrar-hygrometrar>, WebFetch) | 280–1 200 kr för mätare med loggning (Netatmo är en väderstation) |

- **Saknas:** priser på SwitchBot och Aranet4 i svensk butik. Kjells SwitchBot-sida visade ingen mätare, Elgiganten svarade inte (429, samma som i checklistans SERP), och Inet listar Aranet4 som utgången. Priset på Fischer finns i en butik, och Tradera (550 kr, begagnad) räknas inte.
- Kjells och Thomanns priser är lästa genom WebFetch, eftersom sidorna bygger priset med JavaScript. Clas Ohlsons och Biltemas priser är lästa ur produktdatan i sidornas HTML.
- Checklistan nämner Hornbach (119–269 kr för sex produkter). Den uppgiften är inte läst om här.

---

## 6. Folkhälsomyndigheten, medelvärdet (läst om; stämmer inte som det står på sajten)

### 6.1 Det som står ordagrant

**FoHMFS 2014:14**, Folkhälsomyndighetens allmänna råd om fukt och mikroorganismer, beslutade den 2 januari 2014, utkom från trycket den 4 februari 2014. PDF: <https://www.folkhalsomyndigheten.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf>. Läst 2026-09-30 ur PDF-text. Rang: myndighet, allmänt råd.

Indikationer som kan föranleda krav på undersökning, ordagrant (s. 2):

> "- om fukttillskottet inomhus, under vinterförhållanden, regelmässigt överstiger 3 g/m3 luft, eller
> - om luftfuktighetens medelvärde överstiger 7 g vatten/kg torr luft under en längre period under eldningssäsongen, vilket motsvarar ca 45 % relativ luftfuktighet vid 21° C."

I samma råd (s. 1): "I regel krävs en okulär besiktning av en byggnads skick för att ta ställning till om det föreligger olägenhet för människors hälsa."

**Tillsynsvägledningen** om fukt och mikroorganismer, uppdaterad 9 april 2026, <https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/>. Läst 2026-09-30 med curl ur HTML, ordagrant. Den återger samma fyra indikationer (med "cirka" i stället för "ca") och säger:

> "I många fall bör undersökningarna i första hand riktas mot att klarlägga om det finns en förhöjd mängd fukt eller risk för detta."

### 6.2 Det som inte står där

- Formuleringen i det gemensamma bladet 2.5 och på `/fukt/luftfuktighet-inomhus/` (rad 220: "Folkhälsomyndigheten är tydlig med att bedömningen ska bygga på medelvärden över en längre period, inte på enstaka avläsningar, och att du mäter där du misstänker problemet") **hittas inte** i FoHMFS 2014:14 eller i tillsynsvägledningen. Genomsökt: rådet (PDF), vägledningssidan med alla åtta underflikar (de är filmer utan text), informationsbladet "Har du problem med inomhusmiljön i din bostad?", HSLF-FS 2024:10 om temperatur och sökningar på folkhalsomyndigheten.se. Presentationen "Utreda och åtgärda fukt och mögelproblem" (contentassets/881edc37…) gav 404.
- Det som går att säga med Folkhälsomyndigheten som källa: gränsen gäller ett **medelvärde under en längre period under eldningssäsongen**, och fukttillskottet ska överstiga 3 g/m³ **regelmässigt**. Att en enstaka avläsning inte räcker följer av det, men meningen "inte enstaka avläsningar" står inte hos myndigheten.
- **"Mät där problemet misstänks"** saknar myndighetskälla. Tillverkarkälla finns (TFA, avsnitt 9): "platzieren Sie das Gerät zur Überwachung möglichst nahe an den Problemstellen."
- **"En vecka"** (checklistans kortSvar: "ett medelvärde över en vecka säger mer än en avläsning") saknar källa. Ingen myndighet eller tillverkare som lästs anger mättid i dagar för luftfuktighet. Om talet står, ska det stå som hantverkarens eget råd. Som jämförelse: SSM:s radonmätning är minst två månader (T50), men det gäller radon och används inte här.

---

## 7. Mögelgränserna 68 och 72 procent

- **Spårade till Wood's**, avfuktartillverkarens egen produkttext för hygrometern WHG-1: "Below 72%, black mould stops growing and below 68%, mould fungus stops developing." <https://woods.se/en/products/dehumidifiers/woods-hygrometer-whg-1/>, läst 2026-09-30 (WEBFETCH). Wood's anger ingen källa.
- Samma mening på svenska hos butiker som säljer WHG-1, bland dem Friska Hem: "Under 72% slutar svartmögel att växa och under 68% slutar mögelsvamp att växa." <https://www.friskahemsverige.se/products/woods-hygrometer-whg-1>, läst 2026-09-30 (WEBFETCH). Ingen källa. Enligt sökmotorns utdrag står samma mening hos Bolist, XL-Bygg och Tretti (UTDRAG, inte lästa).
- **Någon källa bakom Wood's hittades inte.** Talen saknar spårbar källa, och sidan skriver det utan att namnge Wood's eller butikerna (checklistan punkt 6).
- Det som har källa: TräGuiden 75–80 % för trä vid rumstemperatur och lång varaktighet (T2), under 75 % inget angrepp på torrt material (T6), och BFS 2024:8 75 % för byggnadsdelar (T1). Allt står i det gemensamma bladet.
- **Fler tillverkartal, som inte ska upprepas som gräns:** TFA skriver "Ab 65 %rH besteht Schimmelgefahr" (Schimmel RADAR 30.5032) och "Eine dauerhaft hohe Luftfeuchtigkeit von über 65 % kann den gefürchteten Schimmelpilz hervorrufen" (hår-syntet-hygrometern). Ingen källa anges. Clas Ohlsons Cotech kallar 40–60 % "komfortabelt". Tillverkarnas tal går alltså isär (65, 68, 72) och saknar källa. Det är skälet till att sidan länkar till gränserna i stället för att sätta egna.

---

## 8. Inställningstid efter flytt

| Källa | Rang | Ordagrant | Gäller |
|---|---|---|---|
| Sensirion SHT4x v7.3, tabell 1 och fotnot 9 | givartillverkare | Response time τ63% "4 s". "Time for achieving 63% of a humidity step function, measured at 25 °C and 1 m/s airflow. Humidity response time in the application depends on the design-in of the sensor." | Bara komponenten, i fläktluft. Inte en mätare i en kåpa |
| Sensirion SHT4x v7.3, temperatur | givartillverkare | Temperatur: "Temperature response time depends on heat conductivity of sensor substrate and design-in of sensor in application." | Temperaturen styr RF (2.3) |
| Aranet4 datasheet v2.8 | tillverkare | "Time constant τ (63 %)": CO₂ "100 seconds", temperatur "10 minutes", relativ fuktighet "TBD". "Time constant is determined at 1 m/s airflow." | En hel mätare. Temperaturen behöver 10 minuter för 63 % |
| TFA Haar-Synthetik-Hygrometer, Gebrauchsanweisung 02/2017 | tillverkare | "Geben Sie den Geräten 30-45 Minuten Zeit zum Akklimatisieren." | När analoga mätare jämförs sida vid sida |
| Vaisala HMK15 | givartillverkare | "at least 30 minutes [...] to let the probe temperature stabilize to the room temperature"; avläsning "about 10 … 30 minutes", vid hög fuktighet "approximately 20 … 40 minutes" | Proffsgivare i saltkammare |
| Clas Ohlson 36-6725, bruksanvisning Ver. 20190521 | tillverkare/butik | "Update interval [...] 60 seconds" | Hur ofta displayen uppdateras, inte inställningstid |

- **EGEN**, ur Aranets tidskonstant: efter en tidskonstant har mätaren nått 63 % av steget, efter tre 95 % (1 − e⁻³ = 0,950). Med temperaturens 10 minuter blir det cirka 30 minuter till 95 %. Formeln gäller ett första ordningens system, och Aranet anger inte själv tiden till 95 %.
- **Saknas:** en bruksanvisning för en enkel digital rumsmätare som anger minuter efter flytt. Clas Ohlsons (36-6779, 36-6725), Biltemas (84-0811) och TFA:s 30.5032 säger inget om det. De källor som finns hamnar på 30 minuter eller mer (TFA 30–45, Vaisala minst 30 för temperaturen, Aranet cirka 30 enligt den EGNA räkningen), men "en halvtimme" är en slutsats ur tre källor och inte ett citat.

---

## 9. Placering

| Källa | Rang | Ordagrant | Säger |
|---|---|---|---|
| Folkhälsomyndigheten, HSLF-FS 2024:10, allmänna råd om temperatur inomhus, beslutade 2 maj 2024, <https://www.folkhalsomyndigheten.se/contentassets/1c28701a4c8f49cabce85e3bb65695dc/hslf-fs-2024-10.pdf> | myndighet, allmänt råd | "Vistelsezon: Område i ett rum avgränsat av två horisontella plan, ett 0,1 meter över golv och ett annat på 2,0 meters höjd över golv samt vertikalt 0,6 meter från yttervägg, dock 1,0 meter framför fönster eller ytterdörr." och "Temperaturen och luftens medelhastighet bör mätas i vistelsezonen." | **Gäller temperatur, inte luftfuktighet.** Det är den enda myndighetsregeln för var i rummet man mäter. Får stå som "så mäter Folkhälsomyndigheten temperaturen" |
| SMHI, Hur mäts luftfuktigheten?, <https://www.smhi.se/kunskapsbanken/meteorologi/luftfuktighet/hur-mats-luftfuktighet>, datum saknas i HTML | myndighet | "placeras hygrometern 1,5–2 m över mark i ett strålnings- och nederbördsskydd" | Utomhus, väderstation. Inte inomhus |
| Fischer, Produktdatenblatt 111.01 | tillverkare | "Bei der Aufhängung des Hygrometers im Raum ist zu beachten, dass es nicht an Außenwänden oder in der Nähe der Heizung hängen soll." | Inte på yttervägg, inte nära element |
| TFA Haar-Synthetik-Hygrometer | tillverkare | "Innerhalb von Räumen stellen Sie das Gerät dort auf, wo Sie die Luftfeuchtigkeit messen möchten. Achten Sie dabei auf eine gute Belüftung. Vermeiden Sie die Nähe von Wärmequellen (wie Heizkörper) und direkte Sonneneinstrahlung." | Inte vid element, inte i sol, fri luft |
| TFA Schimmel RADAR 30.5032 | tillverkare | "Da die Luftfeuchtigkeit in Räumen je nach Standort stark variieren kann, platzieren Sie das Gerät zur Überwachung möglichst nahe an den Problemstellen." | Mät där problemet finns |
| Clas Ohlson 36-6725, svensk bruksanvisning | tillverkare/butik | "Placera därför enheten på sådant sätt att den inte utsätts för värme från element, spisar eller andra värmekällor." | Inte vid värmekällor |
| Biltema 84-0811 | tillverkare/butik | "Utsätt inte produkten för direkt solljus eller temperaturer över 60 °C." | Inte i sol |
| Aranet4 datasheet v2.8 | tillverkare | "Do not leave the device in the direct sunlight." | Inte i sol |
| Vaisala HMK15 | givartillverkare | "kept out of direct sunlight and away from localized heat sources" | Gäller kalibratorn |

- **Fönster:** ingen källa om luftfuktighet säger "inte vid fönstret". Folkhälsomyndighetens vistelsezon (1,0 m framför fönster) gäller temperatur. Den fysiska grunden finns i 2.3 (EGEN): en grad kallare vid mätaren ger cirka 4,5 procentenheter högre RF vid 75 %, och en kall fönsteryta ger just det.
- **Höjd:** ingen källa för inomhus. Folkhälsomyndighetens vistelsezon 0,1–2,0 m gäller temperatur. SMHI:s 1,5–2 m gäller utomhus.
- **"En meter från ytterväggen"** på `/fukt/luftfuktighet-inomhus/` rad 220 har ingen källa för luftfuktighet. Närmast kommer Folkhälsomyndighetens 0,6 m från yttervägg och 1,0 m från fönster, för temperatur.

---

## 10. Att justera en billig mätare

- **Clas Ohlson Cotech 36-6779:** bruksanvisningen (Ver. 20180323) beskriver en enda knapp, [ C/F ], och ingen justering. Ordagrant: "Termometern är inte avsedd för att användas som referens och Clas Ohlson tar inte ansvar för skador som kan uppkomma på grund av felaktig visning eller avläsning."
- **Biltema 84-0811:** knapparna är °C/°F, MIN och MAX. Ingen justering beskrivs.
- **Aranet4:** bara CO₂ kan kalibreras av användaren ("The Aranet4 device is calibrated at the factory. However, the user can perform CO2 calibration manually if required."). Om RF står inget.
- **SwitchBot Meter:** går att kalibrera i appen ("calibrating the Meter", produktsidans FAQ).
- **Analoga:** Fischer och TFA har en justerskruv. Fischer: "Die Korrekturschraube ist in einer der seitlichen Öffnungen im unteren Teil des Gehäuse sichtbar." Fischer använder regenereringen som kontroll: "Zeigt das Hygrometer in der Feuchtepackung 95 bis 98% an, ist es richtig eingestellt." TFA varnar: "Beachten Sie aber bitte, dass ein feuchtes Tuch keinen eindeutigen Referenzmesswert liefern kann."
- **Slutsats som får stå:** i de bruksanvisningar som lästs saknar de enkla digitala mätarna justering, medan de analoga har en skruv och vissa appmätare har justering i appen. "De flesta billiga mätare" är vår generalisering ur tre enkla digitala mätare (Clas Ohlson, Biltema och TFA 30.5032 saknar justering). Ingen tillverkare säger det rakt ut.

---

## 11. Avvikelser mot det gemensamma bladet

| Gemensamma bladet | Här | Vad som bör ändras |
|---|---|---|
| 2.5: saltprovet 75,3 % vid 25 °C, "inte läst om i dag" | 75,29 ± 0,12 vid 25 °C bekräftat i Greenspan 1977 original och Vaisala. Nytt: 75,47 ± 0,14 vid 20 °C, MgCl₂ 33,07 vid 20 °C och 32,78 vid 25 °C | Märk som läst om 2026-09-30 och lägg till 20 °C och MgCl₂ |
| 2.5: "Folkhälsomyndigheten: medelvärden över längre period, inte enstaka avläsningar", "inte läst om" | Står inte så. Ordagrant: "medelvärde [...] under en längre period under eldningssäsongen" och "regelmässigt" (avsnitt 6) | Byt mot ordagranna citat. `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` rad 220 tillskriver Folkhälsomyndigheten en mening som inte finns hos myndigheten ("tydlig med att bedömningen ska bygga på medelvärden [...] och att du mäter där du misstänker problemet"). Hantverkaren rättar |
| T17 "±10 procentenheter" | Boverket skriver "+/- 10 procent" | Inte fel i sak, men citatet ska ha Boverkets ord |
| 1.3: 68 och 72 procent "Friska Hem" | Talen kommer från Wood's produkttext för WHG-1 och återges av butiker, bland dem Friska Hem. Ingen källa bakom | Ändra källuppgiften till Wood's (tillverkare), fortfarande utan källa |
| – | `/fukt/luftfuktighet-inomhus/` rad 224: "låt det stå tills talet står stilla" och "Visar instrumentet 70 eller 80 vet du felet" | Stämmer i sak. Tiden saknar fortfarande källa för en hemmaburk (3.3) |

---

## 12. Interna länkar (kontrollerade i `src/content` 2026-09-30)

| Adress | Fil | Status | Var på sidan (checklistan punkt 9) |
|---|---|---|---|
| `/fukt/luftfuktighet-inomhus/` | `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | publicerad 2026-09-16, `utkast: false` | H2 1 eller 6 |
| `/fukt/fukt-i-krypgrund/` | `src/content/guider/fukt/fukt-i-krypgrund.mdx` | publicerad 2026-09-30, `utkast: false` | H2 5 eller 7 |
| `/fukt/fukt-i-kallaren/` | `src/content/guider/fukt/fukt-i-kallaren.mdx` | publicerad 2026-09-15, `utkast: false` | H2 5 eller 7 |
| `/fukt/kondens-pa-fonster/` | `src/content/guider/fukt/kondens-pa-fonster.mdx` | publicerad 2026-09-29, `utkast: false` | H2 6 |
| `/rakna/daggpunkt/` | `src/pages/rakna/daggpunkt.astro` | finns; `<Verktygskort kalkylator="daggpunkt" />` används redan i `fukt-i-krypgrund.mdx` rad 100 | H2 6, via Verktygskort |

- `/fuktmatare/` finns inte i `src/content` i dag, så länken väntar till omgång C.
- Sajten länkar redan i löptext till alla fyra fuktsidorna i formen `](/fukt/…/)`. Adresserna stämmer.

---

## 13. Osäkert och saknas

- **Saknas:** OIML R 121 i original (oiml.org gav felsvar). Folkhälsomyndighetens regel om "enstaka avläsningar" och "mät där problemet misstänks" (avsnitt 6.2). Källa för "en vecka". Inställningstid i minuter för en enkel digital rumsmätare. Tid för saltprovet i en hemmaburk. Om jod eller klumpförebyggande medel i hushållssalt påverkar punkten. Noggrannhet för Clas Ohlsons mätare. Svenska butikspriser på SwitchBot och Aranet4. Källa bakom 68 och 72.
- **WEBFETCH (inte kontrollerat i råtexten):** Vaisalas blogg 2018 och 2025, Wood's och Friska Hem, priserna hos Kjell, Thomann och Museiservice.
- **UTDRAG:** att Bolist, XL-Bygg och Tretti har samma 68/72-mening.
- **Lästa sidor som inte kunde nås:** Elgiganten (429, inte försökt igen), Aranet-produktsidan (specifikationen för RF saknas på sidan, och datablad-PDF:en på assets.aranet.com gav 404; kopior hos återförsäljare användes), SwitchBots supportsida (403), SwitchBots manual på manuals.plus (HTML i stället för PDF), Folkhälsomyndighetens vägledning om temperatur inomhus som PDF (404), OIML R 121 (felsvar), Hornbach-kategorin (404).
- **Tillverkarnas datablad är tillverkarens egna uppgifter.** Ingen oberoende mätning av någon modell finns i underlaget, och Christian har inga egna mätningar (checklistan, "Inga egna mätningar").
- **Kopior hos tredje part:** Aranet4 (Naltic, datenlogger-store.de), Vaisala HMK15 (IAG), TFA (Conrad). Innehållet är tillverkarens, men filerna ligger hos återförsäljare. Aranets datablad v2.8 är från 2021, och talen kan ha ändrats i senare versioner.

---

## 14. Källförteckning (kallor-format)

```yaml
kallor:
  - titel: Boverket, luftfuktighet, luftrörelser och drag (ändrad 2024-05-16)
    url: https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/kontroller/kontroll-av-inomhusmiljo/kontroll-termisk-komfort/luftfuktighet-luftrorelser-drag/
  - titel: Folkhälsomyndigheten, allmänna råd om fukt och mikroorganismer, FoHMFS 2014:14
    url: https://www.folkhalsomyndigheten.se/contentassets/26ea6c0d999742c0a5351c63e70cb0ce/fohmfs-2014-14.pdf
  - titel: Folkhälsomyndigheten, tillsynsvägledning om fukt och mikroorganismer (uppdaterad 2026-04-09)
    url: https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/
  - titel: Folkhälsomyndigheten, allmänna råd om temperatur inomhus, HSLF-FS 2024:10 (vistelsezon)
    url: https://www.folkhalsomyndigheten.se/contentassets/1c28701a4c8f49cabce85e3bb65695dc/hslf-fs-2024-10.pdf
  - titel: Greenspan 1977, Humidity Fixed Points of Binary Saturated Aqueous Solutions, J. Res. NBS 81A(1)
    url: https://nvlpubs.nist.gov/nistpubs/jres/81A/jresv81An1p89_A1b.pdf
  - titel: Vaisala, HMK15 Humidity Calibrator User's Guide (M210185EN-C)
    url: https://www.iag.co.at/fileadmin/user_upload/HMK15UserGuide.en.pdf
  - titel: Sensirion, Datasheet SHT4x, version 7.3 (juni 2026)
    url: https://sensirion.com/resource/datasheet/sht4x
  - titel: Fischer, Produktdatenblatt Präzisions-Haarhygrometer Nr. 111.01
    url: https://www.fischer-barometer.de/katalog/dokumente/meteo/D111_01.pdf
  - titel: Boverket, BFS 2024:8, 7 kap. 1 §
    url: https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf
  - titel: SMHI, hur mäts luftfuktigheten?
    url: https://www.smhi.se/kunskapsbanken/meteorologi/luftfuktighet/hur-mats-luftfuktighet
```

Prisspannen får en egen rad i `kallor` om hantverkaren vill, i formen "Priser 2026-09-30: Biltema, Clas Ohlson, Kjell & Company, Thomann, Museiservice", utan länk i brödtexten (checklistan punkt 10).
