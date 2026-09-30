# Butikskällor i `kallor`, del C (fukt), 2026-09-30

Underlag till svepet enligt AFFILIATE.md, "/go/-rutten", beslutet 2026-09-30. Lista: 11 rader. Alla sidor lästa 2026-09-30 om inget annat står. Radnummer avser filerna i `src/content/` som de låg 2026-09-30.

Grupper: **P** = butik som källa för pris, lager, artikelnummer. **S** = butikssida som källa för prestanda, specifikation eller råd. **D** = tillverkarens dokument på butikens server.

Sammanfattning

| # | Fil:rad | Grupp | Ny källa |
|---|---|---|---|
| 1 | guider/fukt/avfuktare-garage.mdx:37 | D | Wood's, woods.se |
| 2 | guider/fukt/avfuktare-kallare.mdx:43 | S | Meaco, meaco.com (andra tal än Elgiganten) |
| 3 | guider/fukt/avfuktare-krypgrund.mdx:67 | S | ingen källa (butikens egen råd-text) |
| 4 | guider/fukt/avfuktare-krypgrund.mdx:75 | S | Meaco, meaco.com (andra tal än Elgiganten) |
| 5 | guider/fukt/kallras.mdx:54 | P | url bort |
| 6 | guider/fukt/kallras.mdx:56 | P | url bort |
| 7 | kunskap/fukt/fuktslukare.mdx:24 | D | Everbrand, everbrandsweden.com |
| 8 | kunskap/fukt/hygrometer.mdx:42 | D | ingen annan adress hittad (Clas Ohlsons eget märke) |
| 9 | kunskap/fukt/lag-luftfuktighet.mdx:50 | D | Kährs, arkivkopia av kahrs.com (live-adressen ger 404) |
| 10 | kunskap/fukt/sorptionsavfuktare.mdx:51 | S | Meaco, meaco.com (andra tal än Elgiganten) |
| 11 | jamforelser/luftavfuktare/woods-sw39fw-vs-acetec-evodry-6h-2.mdx:39 | S | Meaco, meaco.com, men inget tal vid 5 °C |

---

## Meaco 10L ABC: tillverkaren mot Elgiganten (gäller rad 2, 4, 10, 11)

**Elgiganten** (https://www.elgiganten.se/product/.../meaco-10l-abc-vit-avfuktare-10-liter-per-dag-hygrostat-kompressor/295839): **ej läst**, HTTP 429 både via WebFetch och curl 2026-09-30. Talen 1,09 och 0,47 är alltså inte kontrollerade mot butikssidan i dag.

**Meaco (tillverkare)**, produktsidan MeacoDry ABC 10L, https://www.meaco.com/products/meaco-meacodry-dehumidifier-abc-range-10l, läst 2026-09-30 (sidans produktdata: `updated_at` 2025-08-13). Tabellen "Extraction Rate Data", ordagrant (Room Conditions | Maximum Water Extraction | Wattage):

| Room Conditions | Maximum Water Extraction | Wattage |
|---|---|---|
| 10°C and 60%rh | 1.55 litres per day | 128 watts |
| 20°C and 60%rh | 4.48 litres per day | 152 watts |
| 30°C and 60%rh | 7.04 litres per day | 187 watts |
| 10°C and 80%rh | 2.28 litres per day | 129 watts |
| 20°C and 80%rh | 7.32 litres per day | 159 watts |
| 30°C and 80%rh | 10.28 litres per day | 198 watts |

Samma sida, "Technical Overview": "Extraction Rate at 30°C and 80%rh | 10 litres per day", "Extraction Rate at 27°C and 60%rh | 6 litres per day", "Operating Temperatures | 5°C - 35°C", "Refrigerant | R290 / 35g", "Noise Level | 36-40dB(A) at one metre".

- Meaco anger **1,55 l/dygn vid 10 °C och 60 %**, Elgiganten (enligt våra sidor) **1,09**. Tillverkaren väger tyngst.
- Meaco anger **inget tal vid 5 °C**. 0,47 l/dygn vid 5 °C/60 % har ingen tillverkarkälla.
- Meaco anger 4,48 l/dygn vid 20 °C/60 %. Våra tabeller skriver "ej angivet" i 20-graderskolumnen för Meaco (sorptionsavfuktare rad 104, krypgrund rad 118, kallare rad 158).

Var 1,09 och 0,47 kommer ifrån: samma tabell med 5 till 30 grader (bl.a. "5°C and 60%RH | 0.47 L/day | 124 W", "10°C and 60%RH | 1.09 L/day | 133 W", "20°C and 60%RH | 3.78 L/day | 152 W", "30°C and 80%RH | 10.26 L/day | 195 W") står hos https://www.meaco-dehumidifiers.ie/meacodry-abc-10l-compressor-dehumidifier/, läst 2026-09-30. Sidan drivs av "CH Marine Ltd, trading as Meaco Dehumidifiers Ireland", "Ireland's official authorised Meaco dealer", och säljer maskinen för 189 euro. Det är en återförsäljare, inte Meaco, och kan inte användas som tillverkarkälla. Tabellen ser ut att vara en äldre Meaco-uppgift som butikerna återger; det är en gissning och ska inte skrivas.

Äldre Meaco-uppgift som redan finns i jämförelsens `kallor` (rad 34 till 35): https://blog.meaco.com/my-dehumidifier-is-bigger-than-your-dehumidifier-no-its-not/, "Last Updated On 20 May 2022", publicerad 2012-03-06, Chris Michael. Ordagrant: "Meaco 10L / 10°C/60%rh 1.9L/day / 20°C/60%rh 3.9L/day". Inlägget är från 2012 och gäller Meacos dåvarande 10-litersmaskin, inte ABC-serien. Används inte för ABC.

Meacos bruksanvisning för ABC 10L (ManualsLib-kopia, https://www.manualslib.com/manual/3370488/Meaco-Meacodry-Abc-10l.html) anger bara 30 °C/80 % och 27 °C/60 %. Ingen kapacitet vid låga temperaturer där.

Egen räkning (för hantverkaren, ur Meacos tabell):
- 10 °C mot märkvärdet: 1,55 / 10 = 0,155, ungefär en sjättedel (inte en tiondel). Mot tabellens 10,28 vid 30/80: 1,55 / 10,28 = 0,15.
- 20 → 10 °C vid 60 %: 1,55 / 4,48 = 0,35, alltså 35 procent kvar (jämför Corroventas 76 procent i krypgrundssidan).
- 5 °C: kan inte räknas, Meaco anger inget tal.

Påståenden i texten som därmed saknar källa eller får nytt tal: se tabellerna per fil nedan.

---

## guider/fukt/avfuktare-garage.mdx

Obs: annan hantverkare arbetar i filen. Inget skrivet där.

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 37 (titel rad 36) | D | Rad 100: "Hur mycket en kondensmaskin tappar redan vid 20 grader syns hos systermodellen SW38FW. Den ger 19 liter vid 30 grader och 80 procent men 11 liter vid 20 grader och 70 procent." Rad 121 (troligen också): "MDK21 och SW-serien kyler med R290, som är propan. Enligt Wood's bruksanvisning får maskinen inte ens förvaras i ett rum där en tändkälla används hela tiden [...] och rummet ska vara större än 4 kvm." | Wood's, woods.se, se nedan |

Ahlsell-dokumentet (https://www.ahlsell.se/external-assets/Documents/21/57/AssetDocument75882157.pdf, läst 2026-09-30): Wood's "Operating instructions for: SW20FW | SW22FW | SW22FM | SW38FW ...", 44 sidor. Omslaget har två överlagrade revisionsrader: "Revision date: 2022-05-25" och "Revision date: 2024-06-14". Tabellen: "SW38F ... Dehumidifying at 20°C and 70% r.h. 11 l/24h", "Dehumidifying at 30°C and 80% r.h. 19 l/24h", "Power at 20°C and 70% r.h. 320W". Ahlsell ligger inte i undantagslistan.

Ny källa hos Wood's: https://woods.se/wp-content/uploads/2024/12/sw-manual-sw20_22_38_42_59_2025_v1.pdf, länkad från https://woods.se/en/products/dehumidifiers/woods-sw38fw/ (läst 2026-09-30). Omslag: "SW series", "Revision date: 02-03-2026" (så tryckt, datumformatet anges inte). Samma fil (identisk md5) ligger också på https://woods.se/wp-content/uploads/2024/10/sw-manual-sw20_22_38_42_59_may22_ok.pdf, länkad från SW59FM-sidan. Tabellen "Technical specifications SW series", kolumn SW38:
- "Dehumidifying at 20°C and 70% r.h. ... 11 l/24h" (samma som sidan)
- "Dehumidifying at 30°C and 80% r.h. ... 19 l/24h" (samma som sidan)
- "Power at 20°C and 70% r.h. ... 320W" och en andra rad med samma etikett "Power at 20°C and 70% r.h. ... 510W" (etiketten är dubblerad i Wood's tabell; den andra raden är sannolikt 30/80 men det står inte)
- "Operating Temperatures 2-35°C"
- "Refrigerant R290", "Charge 110g"
- Svensk text, ordagrant: "Produkten ska inte förvaras i ett rum där kontinuerligt använda tändkällor finns (till exempel; öppen eld, gasvärmare eller elektriska värmare)." och "en golvyta större än 4 m2".

Skillnad mot Ahlsell-kopian: SW42 vid 30/80 är "25 l/24h" hos woods.se mot "25,5 l/24h" hos Ahlsell. Påverkar inte SW38-talen som sidan använder.

---

## guider/fukt/avfuktare-kallare.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 43 (titel rad 42) | S | Rad 158 tabell: "Meaco 10L ABC, kondens \| 10 vid 30/80 \| ej angivet \| 1,09 vid 10/60". Rad 160: "För Meaco anger Elgiganten 0,47 liter vid 5 grader och 60 procent luftfuktighet." Rad 162: "Den enda raden som har ett tal där är Meacos, och det är en butiksuppgift". Rad 284: "Elgiganten anger den till 1,09 liter per dygn vid 10 grader och 0,47 liter vid 5 grader. Märkvärdet är 10 liter, så vid 5 grader återstår en tjugondel enligt butikens egen uppgift." Rad 303 (Faq): "Vid 5 grader kan en liten kondensmaskin vara nere på en tjugondel av sitt märkvärde, enligt en butiksuppgift på sidan." | Meaco: 10 l vid 30/80 bekräftat; 4,48 vid 20/60 (fyller "ej angivet"); **1,55 vid 10/60**, inte 1,09. **Ingen källa** för 0,47 vid 5 °C eller "en tjugondel" (rad 160, 284, 303). |

---

## guider/fukt/avfuktare-krypgrund.mdx

Obs: annan hantverkare arbetar i filen. Inget skrivet där.

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 67 (titel rad 66) | S | Rad 107: "Polarpumpen skriver 16 grader." (i stycket om var gränsen för kondens går, bredvid Ljungby Fuktkontroll, Anticimex och Dantherm) | **Ingen källa.** Polarpumpens sida (https://www.polarpumpen.se/ventilation-och-avfuktare/avfuktare-och-luftavfuktare/avfuktare-krypgrund/, HTTP 200, läst 2026-09-30) är butikens egen kategoritext, inget referat av en tillverkare: "En kondensavfuktare/kylavfuktare för luften förbi kylslangar där den kondenserar. [...] En kondensavfuktare fungerar bäst vid temperaturer över 16 grader och används med fördel i tvättstuga, poolrum eller andra uppvärmda fuktiga miljöer." Ingen tillverkare anger 16 grader i det jag läst. Stycket har tre andra källor kvar. |
| 75 (titel rad 74) | S | Rad 118 tabell: "Meaco 10L ABC, kondens \| ej angivet \| 1,09 vid 10/60 \| 0,47 vid 5/60". Rad 120: "Meacos rad är en butiksuppgift från Elgiganten." Rad 122: "Kondensmaskinen ligger vid tio grader på en tiondel av sitt märkvärde". | Meaco: 20 °C-cellen blir 4,48 vid 20/60; 10 °C-cellen **1,55 vid 10/60**; 5 °C **ingen källa**. "En tiondel" blir ungefär en sjättedel (egen räkning 1,55/10). |

---

## guider/fukt/kallras.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 54 (titel rad 53) | P | Rad 116: "Sex meter tätningslist kostar runt 80 kronor." | Ingen, url tas bort. Produkt: Tätningslist fönster P-profil vit 6 m. Butik: Bauhaus. Läst 2026-09-30: 79,95 kr (sidans `itemprop="price"`). |
| 56 (titel rad 55) | P | Rad 110: "Ett nytt termostathuvud ligger på 219 till 399 kronor hos Hornbach, och det byter du själv." | Ingen, url tas bort. Produkt: termostathuvuden Danfoss, kategorisida. Butik: Hornbach. Läst 2026-09-30. Obs: i sidans produktdata är de namngivna termostaterna 245 till 329 kr (Aero RA Click 245 och 279, RA 2761 269, RA 2770 280, Aero RA-VL 329); alla priser i listan spänner 191 till 399 kr, inklusive ventildelar och koppel. 219 syns i listan men jag har inte kunnat knyta det till en termostat. Hantverkaren bör läsa om spannet. |

---

## kunskap/fukt/fuktslukare.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 24 (titel rad 23) | D | Rad 64: "Biltemas och Everbrands säkerhetsdatablad anger 75 till 99 procent kalciumklorid". Rad 112: "Kalciumkloriden är märkt H319 i säkerhetsdatabladen [...] och Everbrands datablad säger detsamma om husdjur." Rad 116: "säkerhetsdatabladen från Biltema och Everbrand säger att den inte ska ut i avloppet och att den ska lämnas som farligt avfall." | Everbrand, se nedan |

Clas Ohlson-kopian (https://www.clasohlson.com/medias/sys_master/ha5/h81/68532824637470.pdf): "Utfärdat 2024-02-07", "Versionsnummer 1.0", produktbeteckning "TORRBOLLEN / ABSODRY".

Ny källa hos Everbrand: https://www.everbrandsweden.com/wp-content/uploads/2025/02/SDS_SE_TORRBOLLENABSODRY.pdf, länkad från https://everbrandsweden.com/sakerhetsdatablad/ (läst 2026-09-30). "Utfärdat 2024-02-07", "Versionsnummer 1.0", "Företag Everbrand Sweden, Ågårdsvägen 4, 33573 Hillerstorp". Produktbeteckningen är bredare än i Clas Ohlson-kopian: "TORRBOLLEN / ABSODRY / T-DRY / EVERBASIC", och listan med artikelnummer är längre. Talen och fraserna som sidan använder står likadant:
- "CAS nr: 10043-52-4 Eye Irrit. 2; H319 75 - 99 %"
- "H319 Orsakar allvarlig ögonirritation"
- "Håll denna produkt avskild från matvaror och utom räckhåll för barn och husdjur."
- "Förhindra utsläpp av outspädd produkt i avlopp." och "Kasserad produkt skall omhändertas som farligt avfall enligt gällande föreskrifter."

Titeln bör följa Everbrands produktbeteckning.

---

## kunskap/fukt/hygrometer.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 42 (titel rad 41) | D | Rad 145 (Faq): "Clas Ohlson skriver till och med i sin bruksanvisning att mätaren inte är avsedd att användas som referens." Rad 146 (Faq): "De enkla digitala mätarna från Biltema, Clas Ohlson och TFA som jag har läst bruksanvisningarna till går inte att justera." Inga tal ur dokumentet används i texten. | **Ingen annan adress hittad.** |

Dokumentet (https://www.clasohlson.com/medias/sys_master/9565704781854.pdf, läst 2026-09-30): "Indoor Thermometer/Hygrometer", "Art.no 36-6779 Model E0119TH", "Ver. 20180323", 5 sidor. Svensk text: "Termometern är inte avsedd för att användas som referens och Clas Ohlson tar inte ansvar för skador som kan uppkomma på grund av felaktig visning eller avläsning." Specifikation: "10 till 90 % RH", ingen noggrannhet angiven. Dokumentet beskriver ingen justering eller kalibrering. Ordet Cotech står inte i dokumentet; Cotech är Clas Ohlsons eget märke enligt produkttiteln "Termometer / hygrometer Cotech" (https://www.clasohlson.com/no/Termometer---hygrometer-Cotech/p/36-6779, sökutdrag, produkten anges som utgången).

Clas Ohlson är alltså både avsändare (tillverkarens roll) och butik. Adressen är Clas Ohlsons mediaserver (`/medias/sys_master/`), inte produktsidan. Jag har inte hittat något separat dokumentarkiv hos Clas Ohlson med en annan adress. Beslut för UX: antingen läggs `clasohlson.com/medias/sys_master/...pdf` till i undantaget för Clas Ohlsons egna märken, eller så stryks url och titeln får "Clas Ohlson, bruksanvisning Cotech 36-6779, modell E0119TH, Ver. 20180323". Obs: samma server används på rad 7 (fuktslukare), där Everbrand är tillverkaren och har en egen adress, så en allmän undantagsväg för `medias/sys_master` skulle släppa igenom andra tillverkares dokument.

---

## kunskap/fukt/lag-luftfuktighet.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 50 (titel rad 49) | D | Rad 88: "Golvtillverkaren Kährs vill ha minst 30 procent för sina golv och skriver att fukt behöver tillföras när luften blir torrare än så, till exempel med en luftfuktare." | Kährs, arkivkopia, se nedan |

Bauhaus-kopian (https://www.bauhaus.se/media/pdf/kahrsunderhall.pdf, läst 2026-09-30): "2019-04 SE", "UNDERHÅLLSHANDBOK BOSTÄDER", "AB Gustaf Kähr, Box 805, 382 28 Nybro". Text: "Det är den relativa fuktigheten (RF) som styr hur träbaserade golvmaterial påverkas. RF ska ligga mellan 30-60% för att golvmaterialet skall fungera som avsett. På vintern när RF sjunker vill träfibrerna dra ihop sig vilket kan göra att golvbrädorna blir konkava och springor visar sig mellan bräderna. Då krävs att fuktighet tillförs till luften genom t ex en luftfuktare."

Hos Kährs:
- Kährs egen adress https://www.kahrs.com/globalassets/kahrs/consumer/documents/maintenance/domestic-areas/kahrs-maintenance-guide-domestic-areas-se.pdf ger **HTTP 404** 2026-09-30. Sökmotorns utdrag visar titeln "2025-11 SE UNDERHÅLLSHANDBOK BOSTÄDER" på den adressen, men den versionen gick inte att läsa. Kährs webbplats är flyttad och hela `globalassets` ger 404 (även läggningsanvisningarna).
- Arkivkopia av Kährs adress, fångad 2024-05-31: https://web.archive.org/web/20240531061432/https://www.kahrs.com/globalassets/kahrs/consumer/documents/maintenance/domestic-areas/kahrs-maintenance-guide-domestic-areas-se.pdf. Version "2019-07 SE". Samma mening ordagrant: "RF ska ligga mellan 30-60% för att golvmaterialet skall fungera som avsett. [...] Då krävs att fuktighet tillförs till luften genom t ex en luftfuktare." Talet 30 och rådet står likadant.
- Kährs nya webbplats, https://www.kahrs.com/se/hur-gor-man/underhalla-tragolv (läst 2026-09-30), har ingen motsvarande mening; bara "Rummets relativa luftfuktighet bör vara mellan 40 % och 60 %" i ett stycke om oljning och "Är luftfuktigheten inom 30-60 % RF?" i ett reklamationsformulär. Inte användbart för rad 88.

Rekommendation: arkivkopian (samma form som SP-källan på samma sida, rad 45 till 46). Titeln ska ange version 2019-07, inte 2019-04.

---

## kunskap/fukt/sorptionsavfuktare.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 51 (titel rad 50) | S | Rad 90: "Jag säger 10, för det är där Meacos kondensmaskin i tabellen nedan ligger på en tiondel av märkvärdet." Rad 104 tabell: "Meaco 10L ABC, kondens \| 10 \| ej angivet". Rad 116 tabell: "Meaco 10L ABC, kondens \| 1,09 \| 0,47" (10 °C och 5 °C, 60 %). Rad 118: "Elgigantens produktsida för Meaco, där siffran är butikens och inte tillverkarens." Rad 120: "Meacos maskin ligger vid 10 grader på ungefär en tiondel av det som står på lådan." Rad 122, bildtext till `fukt/kapacitet-kurva`: "Corroventa CTR mot Meaco 10L och Wood's DSC50FM, 5 till 35 grader, ur tillverkarnas datablad." | Meaco: 20 °C-cellen rad 104 blir 4,48 vid 20/60; rad 116 10 °C **1,55**; 5 °C **ingen källa**. "En tiondel" (rad 90, 120) blir ungefär en sjättedel, egen räkning. Bildtexten rad 122 säger "ur tillverkarnas datablad" men Meacos kurva bygger på butiksuppgiften; illustrationen och dess källa behöver ses över av UX (illustrationer-kallor/ har jag inte läst). |

---

## jamforelser/luftavfuktare/woods-sw39fw-vs-acetec-evodry-6h-2.mdx

| Rad | Grupp | Vad källan bär, citat | Ny källa |
|---|---|---|---|
| 39 (titel rad 38) | S | Rad 65: "Kondens vid 5 grader har ingen faktor alls. Raden bygger på att Meacos kondensmaskin behåller en tjugondel av märkvärdet vid 5 grader, enligt butiken Elgiganten". Tabell rad 57: "SW39FW, kondens \| 5,7 \| 3,8 \| under 1" (cellen "under 1" vid 5 °C). Rad 69, bildtext: "vid 5 är kondensstapeln streckad, för där finns bara en butiksuppgift att luta talet mot." | **Ingen källa** för 5 °C. Meaco anger inget tal under 10 °C för ABC 10L; driftområdet är "5°C - 35°C". Sökt: meaco.com produktsida, blog.meaco.com (två inlägg, 2012/2022, gäller äldre 10L), Meacos bruksanvisning för ABC (ManualsLib-kopia), meaco-dehumidifiers.ie (återförsäljare). |

Sidoanmärkning, utanför uppdraget: rad 64 säger att kondensfaktorerna 0,30 och 0,20 kommer ur kapacitetspar som bl.a. Meaco publicerat. Meacos gamla blogg ger 1,9/10 = 0,19 vid 10 °C (egen räkning), men ABC-sidan ger 1,55/10 = 0,155. Vilket par som använts står inte i filen.

---

## Sidor jag inte kunde läsa

- Elgiganten, Meaco 10L ABC: HTTP 429 (WebFetch och curl).
- Kährs, https://www.kahrs.com/globalassets/kahrs/consumer/documents/maintenance/domestic-areas/kahrs-maintenance-guide-domestic-areas-se.pdf: HTTP 404 (version 2025-11 känd bara ur sökutdrag).
- woods.se, https://woods.se/wp-content/uploads/2021/04/sw-manual-sw20_22_38_42_59_200121.pdf (ur sökresultat): HTTP 404.

## Nya källor, YAML

```yaml
# Rad 1, guider/fukt/avfuktare-garage.mdx:36-37 (ersätter Ahlsell-länken)
  - titel: Wood's, bruksanvisning SW-serien SW20 till SW59, med SW38 (revision date 02-03-2026)
    url: https://woods.se/wp-content/uploads/2024/12/sw-manual-sw20_22_38_42_59_2025_v1.pdf

# Rad 2, 4, 10, 11 (ersätter Elgiganten-länken; ger 1,55 vid 10/60 och 4,48 vid 20/60, inget tal vid 5 °C)
  - titel: Meaco (tillverkare), MeacoDry ABC 10L, produktsida med Extraction Rate Data (läst 30 september 2026)
    url: https://www.meaco.com/products/meaco-meacodry-dehumidifier-abc-range-10l

# Rad 3, guider/fukt/avfuktare-krypgrund.mdx:66-67: ingen ersättning. Påståendet på rad 107 stryks av hantverkaren.

# Rad 5, guider/fukt/kallras.mdx:53-54 (url bort)
  - titel: Bauhaus, tätningslist fönster P-profil vit 6 m, 79,95 kr (pris läst 30 september 2026)

# Rad 6, guider/fukt/kallras.mdx:55-56 (url bort)
  - titel: Hornbach, termostathuvuden Danfoss, kategorisida (priser lästa 30 september 2026)

# Rad 7, kunskap/fukt/fuktslukare.mdx:23-24 (ersätter Clas Ohlson-länken)
  - titel: Everbrand Sweden, säkerhetsdatablad Torrbollen, Absodry, T-Dry och Everbasic (utfärdat 2024-02-07, version 1.0)
    url: https://www.everbrandsweden.com/wp-content/uploads/2025/02/SDS_SE_TORRBOLLENABSODRY.pdf

# Rad 8, kunskap/fukt/hygrometer.mdx:41-42: ingen annan adress. Beslut hos UX (undantag eller url bort). Förslag om url tas bort:
  - titel: Clas Ohlson, bruksanvisning hygrometer och termometer Cotech 36-6779, modell E0119TH (Ver. 20180323)

# Rad 9, kunskap/fukt/lag-luftfuktighet.mdx:49-50 (ersätter Bauhaus-länken)
  - titel: Kährs (tillverkare), underhållshandbok bostäder, 2019-07 (arkivkopia 2024-05-31)
    url: https://web.archive.org/web/20240531061432/https://www.kahrs.com/globalassets/kahrs/consumer/documents/maintenance/domestic-areas/kahrs-maintenance-guide-domestic-areas-se.pdf
```
