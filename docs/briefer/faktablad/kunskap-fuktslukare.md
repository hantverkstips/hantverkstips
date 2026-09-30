# Faktablad: Fuktslukare

> **Rättelse 2026-09-30:** Wood's DSC50FM har bytt källa från butiken (Proffsmagasinet: 8,8 l/dygn och 231 W vid 20 °C och 70 %) till Wood's bruksanvisning, engelska tabellen (<https://woods.se/wp-content/uploads/2024/12/woods_manual_dsc50_alla_sprak.pdf>, läst 2026-09-30): "Dehumidifying at 20°C and 70% r.h. 8,0 L/ 24h", "Dehumidifying at 30°C and 80% r.h. 13,5 l/24h", "Power at 20°C and 70% r.h. 145 W", "Power consumption at 20°C and 70% r.h. 3,5kWh/24 h". Den svenska tabellen i samma PDF har förskjutna rader och används inte. EGEN: 145 × 24 / 1 000 / 8,0 = 0,44 kWh per liter, × 2,40 = 1,05 kr per liter (ersätter 0,63 och 1,51).

**Sida:** `/fukt/fuktslukare/` · samling kunskap · `src/content/kunskap/fukt/fuktslukare.mdx` (ny).
**Huvudfras:** fuktslukare. Sidofras: fuktabsorberare. Sidtyp: kunskap, `produkter: []`, ingen `kategori`.
**Beställt:** hantverkaren 2026-09-30, krav i `docs/briefer/seo-checklista-2026-09-30/fuktslukare.md` punkt 11 och 12.
**Skrivet:** 2026-09-30 av underlag. Allt "läst" nedan är hämtat och läst 2026-09-30 om inget annat står.

**EGEN** = egen räkning, formel bredvid. **UTDRAG** = sökmotorns eller WebFetch-sammanfattningens text, inte läst ordagrant i källan. Citat inom citattecken är ordagranna ur källan. Ingen text här är förlaga.

---

## Villkoret om upptagen mängd: uppfyllt

Koordinatorns villkor var att mängden vatten ska komma ur säkerhetsdatablad, tillverkaruppgift eller jämviktskurva. **Båda finns:**

1. **Tillverkarens uppgift:** Henkel (Unibond Aero 360) anger för en tablett på 450 g kalciumklorid saltlösning "Up to 1 litre per tab" och "Average:1L - Could absorb up to 1.3L*", med villkoret "* Depending on the humidity level and room temperature". Avsnitt 2.
2. **Jämviktskurva:** vattenaktiviteten för kalciumkloridlösning vid 25 °C ur NIST:s kritiska sammanställning (Staples och Nuttall 1977), kontrollerad mot OxyChems handbok (tillverkare), som ger formeln och ett räknat exempel vid 25 °C och 70 % RF. Avsnitt 3.

De två stämmer med varandra (avsnitt 3.5). Ingen vägning är använd.

---

## 0. Talen i en tabell

| Nr | Tal | I sak | Källa | Typ |
|---|---|---|---|---|
| F1 | 75–99 % | Halt kalciumklorid (CAS 10043-52-4) i påfyllningen | SDS Biltema; SDS Everbrand (Torrbollen/Absodry) | säkerhetsdatablad |
| F2 | H319 | "Orsakar allvarlig ögonirritation" | båda SDS | säkerhetsdatablad |
| F3 | ca 1 l, upp till 1,3 l saltlösning per 450 g | Unibond Aero 360-tablett, beror på luftfuktighet och rumstemperatur | Henkel TDS UH6000 | tillverkare |
| F4 | 1,8 / 2,2 / 2,6 / 3,5 kg vatten per kg CaCl2 | Vid jämvikt, 25 °C, 50 / 60 / 70 / 80 % RF, rent vattenfritt salt | **EGEN** ur Staples & Nuttall 1977 + OxyChem-formeln | kurva |
| F5 | 0,8 / 1,0 / 1,2 / 1,6 kg vatten per 450 g påse | Samma villkor, rent salt | **EGEN** ur F4 | kurva |
| F6 | ca 0,27 | Lösningens koncentration vid 25 °C (77 °F) och 70 % RF | OxyChem handbok s. 24 | tillverkare |
| F7 | 22 % RF vid 30 °C | Under detta löses saltet inte upp | OxyChem handbok s. 24 | tillverkare |
| F8 | 33,3 % RF vid 20 °C | Deliquescens för hexahydratet | Saltwiki (Stahlbuhk 2016) | uppslagsverk, forskargrupp |
| F9 | ca 29 % RF vid 25 °C | Mättad lösning, 7,28 mol/kg | **EGEN** ur Staples & Nuttall 1977 | kurva |
| F10 | "To be used above 10°C." | Unibond Aero 360 | Henkel TDS UH4000 och UH6000 | tillverkare |
| F11 | 11 / 26 / 40 % av vikten | Kiselgel vid 25 °C och 20 / 50 / 90 % RF | Long Life for Art, datablad Silica gel E | leverantör, datablad |
| F12 | 3 h vid 130–150 °C | Kiselgel torkas om | samma | leverantör, datablad |
| F13 | "upp till 40% av sin egen vikt" | Kiselgel | Corroventa | tillverkare (avfuktare) |
| F14 | 8–68 kr per liter vatten | Burkens påfyllning vid 70 % RF, fem butikspriser | **EGEN**, avsnitt 6 | – |
| F15 | 0,8–4,1 kr per liter | Avfuktarens el vid tillverkarens villkor | **EGEN**, avsnitt 7 | – |

---

## 1. Säkerhetsdatablad

### 1.1 Biltema, påfyllning och burkar

- **Adress:** <https://docs.biltema.com/v2/documents/file/sv/a5c57e1f-a386-4a27-97c5-5babd6b60210> (WebFetch gav 403; hämtad med curl som PDF och läst ordagrant 2026-09-30).
- **Version:** "Versionsnummer: 1", "Utfärdat: 2023-02-13".
- **Handelsnamn:** "Refillpåsar Original till fuktslukare, Fuktslukare, refillpåse, Fuktslukare spillsäker". Artikel-nr "36-375, 36-374, 47-0352, 47-0366, 47-0348, 47-0350".
- **Avsnitt 3, sammansättning:**

| Ämne | CAS | Konc. | H-fras |
|---|---|---|---|
| kalciumklorid | 10043-52-4 | 75 - 99% | H319 |
| Kalciumklorid monohydrat | 22691-02-7 | 0 - <1% | H319 |
| Kalciumklorid dihydrat | 10035-04-8 | 0 - <1% | H319 |
| Kalciumklorid tetrahydrat | 25094-02-4 | 0 - <1% | H319 |
| Kalciumklorid hexahydrat | 7774-34-7 | 0 - <1% | H319 |
| Kalciumhydroxid | 1305-62-0 | 0 - <1% | H314 (Skin Corr. 1) |

- **Avsnitt 2:** "Ögonirritation, kategori 2". Signalord "Varning". "H319 Orsakar allvarlig ögonirritation."
- **Skyddsangivelser, ordagrant:** "P264 Tvätta Händer grundligt efter användning." "P280 Använd skyddshandskar/skyddskläder/ögonskydd/ansiktsskydd." "P305 + P351 + P338 VID KONTAKT MED ÖGONEN: Skölj försiktigt med vatten i flera minuter. Ta ur eventuella kontaktlinser om det går lätt. Fortsätt att skölja." "P337 + P313 Vid bestående ögonirritation: Sök läkarhjälp." "P101 Ha förpackningen eller etiketten till hands om du måste söka läkarvård." "P102 Förvaras oåtkomligt för barn."
- **Husdjur:** nämns inte i Biltemas SDS.
- **Avsnitt 9:** "Fysiskt tillstånd Granulat", "Färg vit", "Smältpunkt / fryspunkt 782 °C", "Löslighet 745 g/l", "Densitet och / eller relativ densitet 2,15 g/cm³".
- **Avsnitt 10.5 Oförenliga material:** "Rostfritt stål".
- **Avsnitt 13:** "Töm inte avfall i avloppet. Samla upp spill. Innehållet/behållaren lämnas till insamlingsställe för farligt avfall."
- **Konstigheter i databladet (används inte):** "VOC % 603,7 g/l" och en mening om "Den tensid som ingår i denna blandning". Ser ut som mallrester. Ingen av dem ska stå på sidan.

### 1.2 Everbrand Sweden, Torrbollen och Absodry (länkat från Clas Ohlson)

- **Adress:** <https://www.clasohlson.com/medias/sys_master/ha5/h81/68532824637470.pdf> (länkad från Clas Ohlsons produktsida 36-6050; hämtad med curl, läst ordagrant).
- **Version:** "Utfärdat 2024-02-07", "Versionsnummer 1.0", "SDS-ID: 67703". Företag: Everbrand Sweden, Hillerstorp.
- **Avsnitt 3:** KALCIUMKLORID (CAS 10043-52-4) "75 - 99 %"; monohydrat, dihydrat, tetrahydrat och hexahydrat "1 - 25 %" vardera; KALCIUMHYDROXID "<1 %" (Skin Corr. 1B; H314). Alla kalciumkloridformer "Eye Irrit. 2; H319".
- **Avsnitt 2:** "H319 Orsakar allvarlig ögonirritation". Signalord "Varning". Skyddsangivelser: "P102 Förvaras oåtkomligt för barn", "P264 Tvätta utsatt hud grundligt efter användning", "P280 Använd ögonskydd", "P305+P351+P338 …", "P337+P313 Vid bestående ögonirritation: Sök läkarhjälp".
- **Barn och husdjur, ordagrant (7.1):** "Håll denna produkt avskild från matvaror och utom räckhåll för barn och husdjur." (7.2): "Undvik kontakt med människor och djur".
- **Avsnitt 9:** "Fysikaliskt tillstånd Fast", "Form: Granulat", "Smältpunkt/fryspunkt 782 °C", "Densitet … 2,15 g/cm³ (25°C)".
- **Avsnitt 13:** "Förhindra utsläpp av outspädd produkt i avlopp. Kasserad produkt skall omhändertas som farligt avfall enligt gällande föreskrifter."
- **Förtäring (4.1):** "Skölj först munnen noggrant med mycket vatten och SPOTTA UT sköljvattnet. Drick sedan minst en halv liter vatten och kontakta läkare. Framkalla EJ KRÄKNING." Nödnummer: "I akuta fall: Ring 112, begär giftinformation."

### 1.3 Vilken form av kalciumklorid som säljs

- Båda SDS anger huvudämnet med CAS 10043-52-4, som är vattenfri kalciumklorid, och smältpunkt 782 °C och densitet 2,15 g/cm³, som är den vattenfria formens värden. Hydraterna finns med i mindre halt (Biltema under 1 % vardera, Everbrand 1–25 % vardera).
- **Slutsats för räkningen:** salthalten i påsen ligger mellan 75 och 99 procent enligt databladen. Räkningen i avsnitt 3 görs därför för rent salt (övre gräns) och för 75 procent (nedre gräns). OxyChems formel tar hand om halten (avsnitt 3.2).
- OxyChem, hydraternas sammansättning (handboken s. 16, tabell 1): CaCl2·6H2O 50,66 % CaCl2; ·4H2O 60,63 %; ·2H2O 75,49 %; ·H2O 86,03 %; vattenfritt 100 %. Molvikter 219,09; 183,05; 147,02; 129; 110,99.

### 1.4 Butikernas egna varningar (butik, inte SDS)

- Biltema, kategorisidans Faq, ordagrant: "Fuktslukare är generellt sett säkra att använda, men det är viktigt att hålla dem utom räckhåll för barn och husdjur, särskilt om de innehåller kemikalier som kalciumklorid." <https://www.biltema.se/hem/stadning/fuktslukare/> (curl, läst).
- Biltema "Fuktslukare, 35–40 m²" (36-0504) och "Fuktslukare, 15-20 m²" (36-0500) visar på produktsidan "H302 Skadligt vid förtäring." utöver H319. Det SDS som hör till dem är inte läst. Osäkert vad som ger H302; skriv inte H302 som allmän egenskap för burken.

### 1.5 Tömning: källorna säger emot varandra

| Källa | Vad den säger |
|---|---|
| SDS Biltema, avsnitt 13 | "Töm inte avfall i avloppet." Till insamling av farligt avfall |
| SDS Everbrand, avsnitt 13 | "Förhindra utsläpp av outspädd produkt i avlopp." |
| Biltema produktsidor 36-374, 36-0504, 36-0500 (butik, samma företag) | "Töm ut vätskan i avloppet och byt endast refillpåse." och "töm behållaren i t.ex. WC" |
| Henkel TDS Unibond (tillverkare) | "Once the tab is fully dissolved, open the spout and pour the salty solution into the toilet" |
| Rubson TDS (Henkel Frankrike) | "vider l'eau du bac dans vos sanitaires" |

Säkerhetsdatabladen väger tyngst enligt rangordningen. Två av dem säger inte i avloppet, medan tillverkarnas och butikens bruksanvisningar säger toaletten. Sidan kan inte säga "häll i toaletten" som fakta. Hantverkaren eller SEO avgör hur det skrivs. Förslag i sak: säg att databladen säger en sak och förpackningen en annan.

### 1.6 Vad vätskan gör med material

- Henkel TDS (UH4000 och UH6000), ordagrant: "Do not allow AERO360® Tab or waste water solution to come into contact with easily damaged metal surfaces such as gold plate and chromium plate, leather, fabrics, carpets or other floor coverings. In case of contact, immediately wash with warm water."
- Biltema SDS 10.5: oförenligt med "Rostfritt stål".
- Stålbyggnadsinstitutet om korrosion vid under 60 % RF: T41 i `fukt-gemensamma-tal.md` (gäller luft, inte saltlösning).
- **Saknas:** källa för att saltlösningen fläckar trä. Checklistan nämner trä och textil; textil har källa (Henkel "fabrics, carpets"), trä har ingen.

---

## 2. Tillverkarnas uppgifter om mängd och villkor

### 2.1 Henkel, Unibond Aero 360 (tillverkare) – **har tal**

- **Aero 360 Device, TDS:** <https://datasheets.tdx.henkel.com/UNIBOND-Aero-360-Device-en_GB.pdf>. "Ref: UH6000", "Issued: 15.11.2022". Läst ordagrant (curl, pdftotext).
  - "AERO 360® Tab 450g / diameter: 100mm / thickness: 41 to 44mm"
  - "AERO 360® Tab's composition Calcium chloride"
  - "Water solution (brine) Up to 1 litre per tab"
  - "Average:1L - Could absorb up to 1.3L*"
  - "* Depending on the humidity level and room temperature"
  - Behållaren: "tank, spill guard, whirl grid cover and sliding loading tray / 1.3L capacity"
  - "To be used above 10°C." "Store in dry room above 0°C."
  - "The 450g AERO360® system is ideal for rooms of about 20 m2 with poor air circulation."
- **Aero 360 Refill Tabs, TDS:** <https://datasheets.tdx.henkel.com/UNIBOND-Aero-360-Neutral-Refill-Tab-en_GB.pdf>. "Ref: UH4000", "Issued: 15.11.2022". "Up to 3 months* in a room of 20m2", "First drop in less than 12h*", "* Depending on the humidity level and room temperature", "To be used above 10°C."
- **Observera:** Henkel anger **liter saltlösning**, inte liter vatten. Lösningen innehåller det upplösta saltet. Omräkning till vatten i avsnitt 3.5.
- **Temperaturen hos Henkel:** "To be used above 10°C." Det betyder att tillverkaren inte lovar något i ett ouppvärmt förråd, garage eller sommarstuga på vintern. Viktigt för H2 4.

### 2.2 Rubson (Henkel Frankrike) – inget tal

- Rubson Aero 360° Recharge Neutre: <https://www.rubson.com/products-diy/central-pdp.html/rubson-aero-360-recharge-neutre/SAP_0201LDR08EZ3.html> (WebFetch, UTDRAG): "Jusquà 3 mois d'efficacité dans une pièce de 20m²", "suivant le taux d'humidité et la température ambiante de la pièce". Ingen mängd.
- Rubson Basic Recharge, TDS "Mise à jour : Mai 2023": <https://datasheets.tdx.henkel.com/RUBSON-Basic-Recharge-Neutre-fr_FR.pdf>. "Le poids unitaire de chaque tab est de 450 grammes." "Jusqu'à 2 à 3 mois d'efficacité dans une pièce très humides de 20 m2". "A conserver hors de portée des enfants". Ingen mängd.
- Rubson Faq: <https://www.rubson.com/tutos-astuces/faq/recharge-dure-combien-de-temps.html> (UTDRAG): "la pastille durera 3 mois dans une pièce allant jusqu'à 20 m²". Ingen mängd.
- **Sökutdrag som inte går att använda:** en sökning gav "A 450g AERO 360° refill can absorb up to 1.5 liters of water in a 20 m² room … a maximum value measured under specific temperature and humidity conditions". Sidan som säger det hittades inte (Leroy Merlin 403, ManoMano 403, L'Air Sain 429). **Används inte.**

### 2.3 Torrbollen (Everbrand Sweden) – inget tal

- torrbollen.se omdirigeras till <https://www.everbrandsweden.com/>. Faq på <https://www.everbrandsweden.com/fragor-och-svar/> (WebFetch, läst): bara allmänna frågor om företaget, **ingen uppgift om mängd, vikt eller temperatur**. Varumärkessidan <https://www.everbrandsweden.com/varumarken/torrbollen/> har inga specifikationer. Försökt igen 2026-09-30 enligt beställningen.
- Clas Ohlson, Torrbollen Mega: produktnamnet är "Luftavfuktare Torrbollen Mega 2,5 liter", med 3 påsar samtidigt. 2,5 liter är behållarens mått enligt namnet, inte en uppgift om hur mycket vatten saltet tar. Används inte som mängd.

### 2.4 Andra

- KWI Produkter (säljer SekoDry, kalciumklorid med gel), <https://www.kentw.se/avfuktning/> (UTDRAG): "Beroende på temperatur och luftfuktighet kan absorbentpåsen suga upp till 400% av sin egen vikt vid optimala förhållanden." Säljare, inte tillverkare, och villkoret "optimala förhållanden" är inte angivet i tal. Stämmer med kurvan vid drygt 80 % RF (avsnitt 3.4). Får nämnas som kontroll, inte som sajtens tal.
- Wenko 1 kg (Bauhaus): ingen mängd på sidan. Amazon.se-sidan gick inte att läsa (bara kod). Sökutdraget "2 x 1 kg … can hold up to 1.4 liters" är inte kontrollerat. **Används inte.**

---

## 3. Kalciumkloridens jämviktskurva

### 3.1 Källorna

1. **OxyChem, Calcium Chloride Handbook**, utgåva "SEPTEMBER 2026", Occidental Chemical Corporation (tillverkare). <https://www.oxychemcalciumchloride.com/siteassets/documents/guides/calcium-chloride-handbook.pdf>. Läst ordagrant ur PDF (pdftotext). Avsnittet "Moisture Absorption", s. 24. Figur 9 "Vapor Pressure of CaCl2" (s. 25) är en bild och gick inte att läsa av; bara exemplet i texten finns som tal.
2. **Staples, B. R. och Nuttall, R. L. (1977), "The Activity and Osmotic Coefficients of Aqueous Calcium Chloride at 298.15 K", Journal of Physical and Chemical Reference Data 6, 385–408**, National Bureau of Standards (nu NIST). doi:10.1063/1.555551. PDF: <https://srd.nist.gov/jpcrdreprint/1.555551.pdf>. Läst ur PDF, tabell 26 "Recommended values for mean activity coefficient and osmotic coefficient of CaCl2 in H2O at 298.15 K" (s. 402), kolumnerna m (mol/kg), γ, φ och a_w (vattenaktivitet). Texten ur skannad PDF är brusig; värdena nedan är kontrollerade genom att a_w räknats om ur φ (formel i 3.3) och jämförts med tabellens a_w där den är läsbar (2,0; 3,5; 4,5; 5,0; 6,0; 7,0; 8,0 mol/kg stämmer på fyra decimaler). φ vid 1, 3, 5, 7 och 9 mol/kg bekräftas också av tabell 27 i samma artikel.
   - Ordagrant om mättnad (s. 405): "saturation occurs at 7.28 mol· kg-1".
   - Vattenaktivitet = jämviktens relativa luftfuktighet / 100 (definition).

Ranking: båda är högre än butik och forum. Staples och Nuttall är en granskad referenssammanställning, OxyChem en tillverkares handbok. De stämmer (3.4).

### 3.2 OxyChems formel och exempel, ordagrant

- "Calcium chloride is hygroscopic and deliquescent. Under common ambient conditions, solid material will absorb moisture from the air until it dissolves. Calcium chloride solutions will absorb moisture until an equilibrium is reached between the water vapor pressure of the solution and that of the air. If the humidity of the air increases, more moisture is absorbed by the solution. If it decreases, water evaporates from the solution into the air."
- "The rate at which moisture is absorbed by a given quantity of calcium chloride depends on application-specific variables that control the degree of contact between the air and the calcium chloride, such as surface area and air movement."
- "While it is difficult to estimate the rate at which moisture is absorbed, it is not difficult to determine the maximum amount of water that can be absorbed per pound of calcium chloride at any given humidity and temperature."
- Formeln (i PDF:en som bild; texten ger delarna): vatten upptaget per viktenhet produkt = (startprocent / slutprocent) − 1, där "Start percent equals stating concentration of calcium chloride product in decimal form" och "End percent equals ending concentration of calcium chloride in decimal form. This is obtained from Figure 9 at the specified humidity and temperature conditions."
- Exemplet: "How much water can be absorbed from air by 94% calcium chloride at 77°F and 70 percent relative humidity? Starting percent = 0.94 From Figure 9, end percent = approximately 0.27 Water absorbed is equal to (0.94/0.27)-1 = 2.5 lbs"

Det vill säga: 1 kg produkt med 94 % CaCl2 tar upp 2,5 kg vatten vid 25 °C och 70 % RF (pund per pund är samma kvot som kilo per kilo).

### 3.3 Räkningen, EGEN

Formler:

- a_w = exp(−3 · m · φ · 0,0180153) — vattenaktivitet ur osmotisk koefficient φ vid molalitet m (mol CaCl2 per kg vatten); 3 = antal joner per CaCl2, 0,0180153 kg/mol = vattnets molmassa. Det är definitionen Staples och Nuttall använder; kontrollerad mot tabellens a_w (3.1).
- c = m · 110,98 / (1 000 + m · 110,98) — viktandel CaCl2 i lösningen. 110,98 g/mol = CaCl2:s molmassa (OxyChem tabell 1 ger 110,99).
- Vatten per kg rent salt = (1 − c) / c = (100 − c%) / c%.
- Vatten per kg produkt med halt s = s / c − 1 (OxyChems formel).
- Linjär interpolation i a_w mellan tabellens hela och halva molaliteter.

Staples och Nuttall, tabell 26, de rader som används (m; φ; a_w räknat, EGEN):

| m, mol/kg | φ | a_w (EGEN) | c, vikt-% (EGEN) |
|---|---|---|---|
| 2,0 | 1,3754 | 0,8619 | 18,2 |
| 2,5 | 1,5660 | 0,8093 | 21,7 |
| 3,0 | 1,7685 | 0,7507 | 25,0 |
| 3,5 | 1,9781 | 0,6879 | 28,0 |
| 4,0 | 2,1835 | 0,6237 | 30,7 |
| 4,5 | 2,3926 | 0,5588 | 33,3 |
| 5,0 | 2,5826 | 0,4976 | 35,7 |
| 5,5 | 2,7515 | 0,4414 | 37,9 |
| 6,0 | 2,8932 | 0,3913 | 40,0 |
| 7,0 | 3,083 | 0,3115 | 43,7 |
| 7,5 | 3,1332 | 0,2808 | 45,4 |

**Tabellen sidan kan ha (25 °C), EGEN:**

| Luftfuktighet | Lösningens halt vid jämvikt | Vatten per kg rent salt | Vatten per kg påfyllning med 75 % salt | Vatten per påse på 450 g, rent salt | Samma, 75 % salt |
|---|---|---|---|---|---|
| 50 % | 35,6 % | 1,8 kg | 1,1 kg | 0,81 kg | 0,50 kg |
| 60 % | 31,7 % | 2,2 kg | 1,4 kg | 0,97 kg | 0,61 kg |
| 70 % | 27,4 % | 2,6 kg | 1,7 kg | 1,19 kg | 0,78 kg |
| 80 % | 22,3 % | 3,5 kg | 2,4 kg | 1,57 kg | 1,07 kg |

Exakta värden: 50 %: m 4,98, (1−c)/c 1,81; 60 %: m 4,18, 2,15; 70 %: m 3,40, 2,65; 80 %: m 2,58, 3,49. Ett kilo vatten är ungefär en liter.

**Vad sidan får säga i sak:** ett kilo kalciumklorid kan ta upp mellan knappt två och drygt tre liter vatten innan det står stilla, beroende på luftfuktigheten. En påse på 450 gram tar ungefär en liter vid 70 procent. Det är ett tak: det är vad saltet tar om det får stå tills lösningen är i jämvikt med luften. Hur fort det går säger källorna ingenting om i tal (OxyChem: beror på yta och luftrörelse).

### 3.4 Kontroll mellan källorna

- OxyChem vid 25 °C/70 %: slutkoncentration "approximately 0.27". Staples och Nuttall, EGEN: 27,4 %. Stämmer.
- OxyChems exempel 0,94/0,27 − 1 = 2,5. Med 27,4 %: 0,94/0,274 − 1 = 2,43. Stämmer.
- KWI "upp till 400% av sin egen vikt": 4 kg vatten per kg salt motsvarar c = 20 %, alltså m ≈ 2,25 och a_w ≈ 0,84 (EGEN, interpolerat mellan 2,0 och 2,5). Stämmer med "optimala förhållanden" vid drygt 80 % RF.

### 3.5 Henkels liter lösning omräknat till vatten, EGEN

OxyChem tabell 3b (s. 19), "Properties for Calcium Chloride Solutions in Metric Units at 25°C", kolumnen "Liters per 1000 kg Dry" (liter lösning per ton torrt CaCl2), ordagrant: 27 % → 3 084; 28 % → 2 941; 29 % → 2 810; 34 % → 2 278; 35 % → 2 193; 22 % → 3 984; 23 % → 3 771; 31 % → 2 576; 32 % → 2 470; 36 % → 2 112.

- Henkels "Average: 1L" per 450 g: 1 / 0,45 = 2,22 l per kg salt → c ≈ 34,7 % (mellan 34 och 35 %) → vatten = 450 · (100 − 34,7) / 34,7 ≈ **850 g**. Den halten motsvarar a_w ≈ 0,52, alltså jämvikt vid ungefär 52 % RF vid 25 °C.
- Henkels "up to 1.3L": 1,3 / 0,45 = 2,89 l/kg → c ≈ 28,4 % → vatten ≈ **1 130 g**, jämvikt vid ungefär 68 % RF.
- Omvänt, lösningens volym per påse på 450 g rent salt (EGEN, samma tabell): 50 % RF ≈ 0,96 l; 60 % ≈ 1,13 l; 70 % ≈ 1,39 l; 80 % ≈ 1,76 l.
- **Antagande:** att Henkels tablett är rent CaCl2. TDS säger bara "Calcium chloride"; halten är inte angiven och Unibonds SDS är inte läst.
- **Slutsats:** tillverkarens tal (0,85–1,13 kg vatten per 450 g) ligger inom kurvans spann för 50–70 % RF (0,81–1,19 kg). Talen bär varandra.

### 3.6 Temperaturen

- Kurvan ovan gäller **25 °C**. Staples och Nuttall gäller bara 298,15 K. OxyChems figur 9 visar flera temperaturer men är en bild som inte gick att läsa av.
- **Saknas:** jämviktshalt per RF vid 5–15 °C (källaren, garaget, sommarstugan på vintern). Försökt: OxyChem (figur som bild), Conde 2004 (Int. J. Thermal Sciences 43, 367–382; författarens PDF-adress mrc-eng.com är nedlagd, ScienceDirect betalvägg), ScienceDirect 2024 "Hydration and deliquescence behavior of calcium chloride hydrates" (403). Sidan ska inte räkna om till 10 grader.
- Henkel: "To be used above 10°C." (F10). Det är tillverkarens gräns, och det enda tal om kyla som finns.

---

## 4. Deliquescens: när saltet börjar lösas upp

| Källa | Tal | Temperatur | Ordagrant |
|---|---|---|---|
| OxyChem handbok s. 24 (tillverkare) | 22 % RF (ångtryck 7 mmHg) | 30 °C | "At 85°F (30°C), a typical summer temperature, the water vapor pressure needed to liquefy calcium chloride is 7 mmHg, corresponding to 22 percent relative humidity. Since summer humidities are usually higher than 22%, calcium chloride liquid, flakes, or pellets will pick up water from the air and either dilute or dissolve." |
| Staples & Nuttall 1977 (NIST) | ca 29 % RF, **EGEN** | 25 °C | mättnad vid "7.28 mol· kg-1"; a_w interpolerat mellan 7,0 (0,3115) och 7,5 (0,2808) → 0,294 |
| Saltwiki, "Calcium chloride", Amelie Stahlbuhk, senast ändrad 2016-08-30, <https://www.saltwiki.net/index.php/Calcium_chloride> (WebFetch, UTDRAG) | 33,3 % RF (hexahydratet, antarcticit → lösning); 18,5 % (hexahydrat ↔ tetrahydrat); 9 %; 6 % | 20 °C | "The deliquescence relative humidity decreases with increasing temperature." |

- Alla tre säger samma riktning: ju varmare, desto lägre gräns. 33 % vid 20 °C, cirka 29 % vid 25 °C och 22 % vid 30 °C. Inget medelvärde; sidan anger talet med sin temperatur. OxyChem väger tyngst som tillverkare med tryckt handbok, Staples & Nuttall som referensdata.
- **Saknas:** tal vid 5–10 °C. Enligt Saltwiki ligger gränsen högre när det är kallare, men inget tal är hämtat.
- **Under gränsen, EGEN ur OxyChems molvikter:** saltet löses inte upp utan binder vatten som kristallvatten. Från vattenfritt till hexahydrat: (219,09 − 110,99) / 110,99 = 0,97 kg vatten per kg salt; till tetrahydrat (183,05 − 110,99) / 110,99 = 0,65; till dihydrat 0,32. Enligt Saltwiki är hexahydratet stabilt mellan 18,5 och 33,3 % RF vid 20 °C. Sidan kan säga i sak: under ungefär en tredjedels luftfuktighet blir det ingen vätska i burken; saltet tar lite vatten som kristaller och sedan stannar det.
- **Koppling till klustrets tal:** inomhus i uppvärmda rum på vintern 10–25 % RF (T8, TräGuiden). I ett varmt hus på vintern ligger luften alltså under gränsen där burken börjar arbeta. Påståendet är en sammanställning av T8 och F7–F9, inte en källas mening.

---

## 5. Påfyllningens vikt

| Produkt | Vikt | Källa | Läst |
|---|---|---|---|
| Unibond/Rubson Aero 360-tablett | 450 g | Henkel TDS UH4000/UH6000; Rubson TDS | 2026-09-30 |
| Biltema "Fuktslukare, stor" 36-374 | "2 x refillpåsar som väger 450 g var." | <https://www.biltema.se/hem/stadning/fuktslukare/fuktslukare-stor-2000064761> (curl) | 2026-09-30 |
| Biltema refill 3-pack 36-375 | vikt inte angiven på sidan; påsarna är till "fuktslukare 36-373 och 36-374" (sökutdrag) och 36-374:s påsar väger 450 g. **450 g är EGEN slutsats** | <https://www.biltema.se/hem/stadning/fuktslukare/refillpasar-original-till-fuktslukare-3-pack-2000055266> | 2026-09-30 |
| Jula Anslut refill 3-pk 025933 | "Vikt (styck) 450 g", "Vikt 1350 g" | <https://www.jula.se/catalog/bygg-och-farg/varme-och-ventilation/luftforbattring/fuktslukare/refillpasar-for-fuktslukare-025933/> (curl) | 2026-09-30 |
| Jula Torrbollen Home refill 025653 | "2-pk 2x600 g" (produktnamn) | <https://www.jula.se/catalog/bygg-och-farg/varme-och-ventilation/luftforbattring/fuktslukare/refillpasar-025653/> (curl) | 2026-09-30 |
| Clas Ohlson Torrbollen refill 4-pack 36-4274 | "1800 g" för fyra påsar → 450 g per påse (**EGEN**, 1 800 / 4) | <https://www.clasohlson.com/se/Refill-till-luftavfuktare-Torrbollen,-4-pack/p/36-4274> (WebFetch, UTDRAG) | 2026-09-30 |
| Clas Ohlson Torrbollen Home refill 4-pack 36-264 | 4 × 300 g (sökutdrag, sidan inte läst) | <https://www.clasohlson.com/se/Torrbollen-refill-till-Torrbollen-Home,-4-pack/p/36-264> | UTDRAG |
| Wenko påfyllning 1 kg, Bauhaus 1382058 | "1KG" i namnet; "netto weight: 1.080 kg" | <https://www.bauhaus.se/pafyllning-wenko-avfuktare-kalciumklorid-1kg> (WebFetch, UTDRAG) | 2026-09-30 |
| Clas Ohlson T.DRY Fresh 36-267 | 2 × 100 g (checklistan; sökutdrag) | <https://www.clasohlson.com/se/TDry-avfuktare-bil,-Fresh-fuktslukare,-6-m2/p/36-267> | UTDRAG |

**450 gram är den vanliga storleken** (Henkel, Biltema, Jula Anslut, Torrbollen Original). Räkneexemplet för en påse på 450 g står i avsnitt 3.3.

---

## 6. Priser och kronor per liter vatten

Priser inklusive moms, hämtade 2026-09-30.

| Butik | Produkt | Art.nr | Pris | Påsar × vikt | Kr per påse | Lagerstatus | Adress |
|---|---|---|---|---|---|---|---|
| Biltema | Refillpåsar Original till fuktslukare, 3-pack | 36-375 | 47,90 kr | 3 × 450 g (EGEN, se 5) | 15,97 | ej kontrollerad | se avsnitt 5 |
| Biltema | Fuktslukare, stor (burk + 2 påsar) | 36-374 | 69,90 kr | 2 × 450 g | – | ej kontrollerad | se avsnitt 5 |
| Biltema | Fuktslukare, 35–40 m² (burk + 2 påsar) | 36-0504 | 69,90 kr | vikt ej angiven | – | ej kontrollerad | <https://www.biltema.se/hem/stadning/fuktslukare/fuktslukare-35-40-m2-2000064496> |
| Biltema | Fuktslukare (hängande, checklistans etta) | 36-6811 | 79,90 kr | vikt ej angiven | – | utgången enligt checklistan | <https://www.biltema.se/hem/stadning/fuktslukare/fuktslukare-2000019534> |
| Jula | Refillpåsar för fuktslukare 3-pk, Anslut | 025933 | 29,90 kr | 3 × 450 g | 9,97 | "InStock" | se avsnitt 5 |
| Jula | Fuktslukare 35 m², Anslut (burk + 1 påse) | 025934 | 29,90 kr | – | – | – | <https://www.jula.se/catalog/bygg-och-farg/varme-och-ventilation/luftforbattring/fuktslukare/fuktslukare-025934/> |
| Jula | Refillpåsar 2-pk 2x600 g, Torrbollen Home | 025653 | 29,90 kr | 2 × 600 g | 14,95 | – | se avsnitt 5 |
| Clas Ohlson | Refill till luftavfuktare Torrbollen, 4-pack | 36-4274 | 129,90 kr | 4 × 450 g | 32,48 | "Currently out of stock" | se avsnitt 5 |
| Clas Ohlson | Luftavfuktare Torrbollen Original (burk + 1 påse) | 36-6050 | 79,90 kr | – | – | slut | <https://www.clasohlson.com/se/Luftavfuktare-Torrbollen-Original/p/36-6050> |
| Clas Ohlson | Luftavfuktare Torrbollen Mega 2,5 liter (burk + 3 påsar) | 36-6051 | 149,90 kr | – | – | "Finns ej i lager" | <https://www.clasohlson.com/se/Luftavfuktare-Torrbollen-Mega-2,5-liter/p/36-6051> |
| Bauhaus | Påfyllning Wenko avfuktare kalciumklorid 1 kg | 1382058 | 119,00 kr | 1 × 1 kg | 119,00 | ej kontrollerad | se avsnitt 5 |

- Jula-priserna är lästa ur sidans JSON-LD ("@type":"Offer","price":29.9) och prisfältet "priceType":"Base", "hasReducedPrice":false. Tre olika produkter har samma pris, 29,90 kr. Det ser ut som ett riktigt pris men är ovanligt lågt för Torrbollens 2 × 600 g. **Kontrollera i webbläsaren före publicering.**
- Biltemas priser är lästa ur sidans JSON-LD ("price": "47.90" etc.).

**Kronor per liter vatten vid 70 % RF och 25 °C, EGEN.** Formel: kr per liter = (pris / antal påsar) / (påsens vikt i kg × vatten per kg). Vatten per kg: 2,65 (rent salt) och 1,74 (75 % salt), ur 3.3. 1 kg vatten ≈ 1 liter.

| Påfyllning | Liter per påse | Kr per liter (rent salt) | Kr per liter (75 % salt) |
|---|---|---|---|
| Jula Anslut 3 × 450 g | 1,19 / 0,78 | 8,4 | 12,7 |
| Jula Torrbollen Home 2 × 600 g | 1,59 / 1,04 | 9,4 | 14,3 |
| Biltema 3 × 450 g | 1,19 / 0,78 | 13,4 | 20,4 |
| Clas Ohlson Torrbollen 4 × 450 g | 1,19 / 0,78 | 27,2 | 41,5 |
| Bauhaus Wenko 1 kg | 2,65 / 1,74 | 44,9 | 68,4 |

Burkens eget pris är inte med; den köps en gång.

---

## 7. Avfuktarna i jämförelsen

Alla maskintal är hämtade ur klustrets faktablad; källan står där. Inget är uppmätt av oss.

**Elpris:** 2,40 kr/kWh, `ELPRIS_KR_PER_KWH` i `src/lib/antaganden.ts`. `ELPRIS_KALLA`: "SCB, Priser på elenergi och på överföring av el", <https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris>, period "juli till december 2025", "hushåll med 5 000 till 14 999 kWh per år, inklusive elhandel, nätavgift, energiskatt och moms". Samma som `/rakna/elkostnad/`. Perioden ska stå intill talet på sidan.

**Formel, EGEN:** kWh per liter = effekt (W) × 24 / 1 000 / liter per dygn. Kr per liter = kWh per liter × 2,40. Antar att maskinen drar märkeffekten hela dygnet vid det angivna villkoret, som i `kunskap-sorptionsavfuktare.md`.

| Maskin | Typ | Villkor | Liter/dygn | Effekt | kWh/liter (EGEN) | Kr el/liter (EGEN) | Påsar à 450 g per dygn vid 70 % (EGEN, l/dygn / 1,19) | Källa i klustret |
|---|---|---|---|---|---|---|---|---|
| Wood's DSC50FM | kondens | 20 °C, 70 % | 8,8 | 231 W | 0,63 | 1,51 | 7,4 | `kunskap-sorptionsavfuktare.md` (Proffsmagasinet) |
| Wood's MDK21 | kondens | 30 °C, 80 % | 20 | 275 W (manual); 240 W (butik) | 0,33 | 0,79 | 16,8 | `guider-avfuktare-garage.md` rad 73 |
| Meaco 10L ABC | kondens | 10 °C, 60 % / 5 °C, 60 % | 1,09 / 0,47 | **saknas vid dessa villkor** | – | – | 0,9 / 0,4 | T39; Elgiganten (butiksuppgift) |
| Acetec EvoDry 6H 2.0 | sorption | 20 °C, 60 % | 7,4 | 530 W | 1,72 | 4,13 | 6,2 | `guider-avfuktare-kallare.md` rad 70–71 |
| Corroventa CTR STD-TT | sorption | 20 / 10 / 5 °C, 60 % | 17 / 13 / 11 | 775 W | 1,09 / 1,43 / 1,69 | 2,63 / 3,43 / 4,06 | 14,3 / 10,9 / 9,2 | `kunskap-sorptionsavfuktare.md`; T38; Corroventa anger själv 1,10 / 1,44 / 1,70 |

- **Märkt kapacitet:** MDK21:s 20 liter gäller vid 30 °C och 80 %, enligt Wood's bruksanvisning. Det är det varmaste villkoret i tabellen och ska inte jämföras rakt mot de andra. Använd hellre DSC50FM (20 °C) för kondens och Corroventa vid 10 °C för sorption, som checklistan ber om.
- **Liten kondens i kyla:** Meaco 10L tar 1,09 liter per dygn vid 10 °C, ungefär en påse om dagen. Effekt vid 10 °C saknas, så kronor per liter går inte att räkna.
- **Villkoren skiljer:** avfuktarna vid 20 °C och 60–70 %, burken vid 25 °C och 70 %. Tabellen jämför storleksordning, inte samma villkor. Skriv villkoret i varje rad.
- **Inte med:** maskinens inköpspris. Kronor per liter för avfuktaren är bara el.

**Storleksordningen, EGEN:** en påse på 450 g tar ungefär en liter totalt vid 70 %. En liten kondensmaskin vid 20 grader tar 8,8 liter per dygn, en sorptionsmaskin vid 10 grader 13 liter per dygn. Burkens vatten kostar 8–45 kronor litern (rent salt) och avfuktarens el 1,5–4 kronor litern.

---

## 8. Kiselgel (fuktabsorberaren som går att torka om)

| Tal | Villkor | Källa | Adress | Läst |
|---|---|---|---|---|
| "At 25°C, 20% RH: 11%"; "At 25°C, 50% RH: 26%"; "At 25°C, 90% RH: 40%" (vatten i förhållande till gelens vikt, "Moisture adsorption capacity (typical)") | 25 °C | Long Life for Art (Christoph Waller, Tyskland), "Silica gel E, granular size 2-5 mm, technical data sheet". Leverantör, datablad | <https://llfa.de/mwdownloads/download/link/id/513> (curl, pdftotext) | 2026-09-30 |
| "Heating about 3 hours at 130 - 150°C restores the original moisture-adsorbing capability." | – | samma | samma | 2026-09-30 |
| "Silicagel är en kristall som kan absorbera upp till 40% av sin egen vikt med fukt." ; "ett enda gram Silicagel en total inre torkyta på hela 200-700m2" | – | Corroventa, "Olika typer av avfuktare" (tillverkare av avfuktare) | <https://www.corroventa.se/artikel/olika-typer-av-avfuktare/> (WebFetch, UTDRAG) | 2026-09-30 |

- Pdftotext blandade ihop datablad-kolumnerna. Parningen ovan (11/26/40 % mot 20/50/90 % RF) stämmer med sökutdraget för samma dokument ("11% at 20% RH, 26% at 50% RH, and 40% at 90% RH"). Övriga fält (porstorlek 20–30 Å, bulkdensitet 760 g/l, yta ca 600 m²/g, porvolym 0,35–0,45 ml/g) är osäkert parade och används inte.
- **Jämförelse, EGEN:** vid 50 % RF tar kiselgel 0,26 kg vatten per kg, kalciumklorid 1,8 kg per kg (3.3). Kalciumklorid tar ungefär sju gånger så mycket per kilo, men kiselgelen blir inte flytande och går att torka om. Därför passar kiselgel i små slutna utrymmen som verktygslådan och kameraväskan.
- **Saknas:** hushållskiselgelens egen omtorkningstemperatur (påsar som säljs för att torkas i ugn). 130–150 °C gäller industrigranulat. Sök på förpackningens anvisning om sidan ska ge ett ugnstal.
- **Fuktabsorberare på Amazon** (checklistans etta på ordet) är kiselgel. Den sidan är inte läst här.

---

## 9. Värmer burken rummet?

- **Ingen källa krävs för fysiken**, och ingen källa är hämtad. I sak: burken har ingen el och tillför ingen värme av betydelse. När vattenånga binds i saltet frigörs samma värme som när ånga kondenserar, och OxyChem anger att upplösning av kalciumklorid avger värme (tabell 1, fotnot "Negative sign means that heat is evolved (process is exothermic)"). Mängden är liten, eftersom burken tar ungefär en liter på flera veckor.
- En räkning i watt skulle kräva ångbildningsvärmet som konstant, och den konstanten har ingen hämtad källa i detta blad. **Skriv inget wattal.**
- **Rustas uppgift om 2,5 grader och 15 procent lägre luftfuktighet upprepas inte** (checklistans punkt 12). Butiken namnges inte.

---

## 10. Hur länge en påfyllning räcker: tillverkarnas och butikernas ord

Villkor inom citattecken är deras egna. Ingen anger vid vilken luftfuktighet talet gäller.

| Källa | Ordagrant |
|---|---|
| Henkel TDS (tillverkare) | "Up to 3 months* in a room of 20m2" / "* Depending on the humidity level and room temperature" |
| Rubson TDS (tillverkare) | "Jusqu'à 2 à 3 mois d'efficacité dans une pièce très humides de 20 m2" |
| Biltema 36-6811 och 36-375 (butik) | "1 refill-påse räcker 1-3 månader." |
| Biltema 36-0504 och 36-0500 (butik) | "räcker cirka 3–6 veckor beroende på temperatur och luftfuktighet" |
| Clas Ohlson 36-4274 (butik) | "Refillpåsarna räcker i 1–3 månader innan de behöver bytas, beroende på hur hög luftfuktigheten är" |
| Jula 025653 (butik) | "Håller i 1-3 månader beroende på rummets luftfuktighet." |

- **Kvadratmetrarna** (Henkel 20 m², Biltema 15–20, 35–40, 50–60 m², Clas Ohlson 12–14 och 35 m², Wenko 50 m², Jula 35 m² och 50 m³) står inte som sajtens tal (checklistan punkt 12). Ingen av dem anger luftfuktighet, luftomsättning eller temperatur.
- Jula Anslut: "håller den på en nivå mellan 45–65%". Butikspåstående utan villkor. Används inte.
- **Saknas:** någon källa som anger hur många gram per dygn en burk tar vid ett givet villkor. OxyChem säger uttryckligen att hastigheten är svår att uppskatta. Sidan kan inte ge ett dygnstal för burken.

---

## 11. Interna länkar

Kontrollerat i `src/content` 2026-09-30.

| Länk | Finns | Fil | Var på sidan (checklistan punkt 9) |
|---|---|---|---|
| `/fukt/avfuktare-garage/` | ja | `src/content/guider/fukt/avfuktare-garage.mdx` | H2 4 |
| `/fukt/avfuktare-kallare/` | ja | `src/content/guider/fukt/avfuktare-kallare.mdx` | H2 3 eller 4 |
| `/fukt/luftfuktighet-inomhus/` | ja | `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` | där normal luftfuktighet nämns |
| `/rakna/avfuktare/` | ja | `src/pages/rakna/avfuktare.astro` | via `<Verktygskort kalkylator="avfuktare" />` i H2 3 |
| `/rakna/daggpunkt/` | ja | `src/pages/rakna/daggpunkt.astro` | H2 4, löptext. Förvalet `/rakna/daggpunkt/?rum=garage#raknaren` ("Garage, förråd eller uthus") finns i arbetskopian men är **inte committat** (git status visar `M` på `daggpunkt.ts` och `daggpunkt.astro`); kontrollera före publicering |
| `/fukt/hygrometer/` | nej, skrivs samtidigt | – | får länkas enligt beställningen |
| `/fukt/sorptionsavfuktare/` | ja | `src/content/kunskap/fukt/sorptionsavfuktare.mdx` | inte krav; inlänk därifrån enligt punkt 9 |

---

## 12. Klustrets gemensamma tal som sidan använder

Ur `docs/briefer/faktablad/fukt-gemensamma-tal.md`, som de står:

- T7 45–60 % RF inomhus sommar, T8 10–25 % RF inomhus vinter (TräGuiden). Används i avsnitt 4.
- T15 65–75 % / 90–95 % RF uteluft sommar / vinter (TräGuiden). Förklarar varför uteluften i garaget och sommarstugan håller burken i gång.
- T38 Corroventa 76 % / 65 % av kapaciteten vid 10 / 5 °C. T39 Meaco 10L 1,09 / 0,47 l/dygn vid 10 / 5 °C.
- T41 "I luft sker praktiskt taget ingen korrosion under 60 procents relativ luftfuktighet." (Stålbyggnadsinstitutet).
- T17 ±10 procentenheter för billiga hygrometrar (Boverket), där sidan säger att läsaren ska mäta före och efter.

---

## 13. Osäkert och saknas

1. **Jämviktskurvan vid 5–15 °C saknas.** Talen gäller 25 °C. Henkel anger bara "To be used above 10°C."
2. **Hastighet per dygn för burken saknas.** Ingen tillverkare anger den; OxyChem säger att den beror på yta och luftrörelse.
3. **Salthalten i påsen är ett spann**, 75–99 % enligt SDS. Därför två kolumner.
4. **Biltemas refillvikt** (36-375) är EGEN slutsats från 36-374.
5. **Jula-priserna**, 29,90 kr på tre produkter, bör kontrolleras i webbläsare.
6. **Henkels liter lösning** är omräknade till vatten under antagandet att tabletten är ren kalciumklorid.
7. **Tömning i avlopp:** SDS och bruksanvisningar säger emot varandra (1.5).
8. **Att lösningen fläckar trä:** källa saknas.
9. **Kiselgelens ugnstemperatur för hushållspåsar:** saknas; 130–150 °C gäller industrigranulat.
10. **Deliquescens vid låg temperatur:** bara riktningen har källa, inget tal.
11. **H302** på två Biltema-burkar: vilket ämne som ger den är okänt; SDS för dem är inte läst.

## 14. Sidor som inte gick att läsa

| Sida | Fel | Vad som användes i stället |
|---|---|---|
| docs.biltema.com (SDS) och biltema.se | 403 i WebFetch | curl, läst ordagrant |
| jula.se | 403 i WebFetch | curl, läst ur sidans JSON |
| torrbollen.se/faq | TLS-fel; domänen går till everbrandsweden.com | Everbrands Faq och varumärkessida, inget tal |
| sciencedirect.com, S037838122400147X | 403 | inget |
| mrc-eng.com (Conde 2004) | domänen till salu | inget |
| leroymerlin.fr, manomano.fr | 403 | inget (sökutdraget om 1,5 l används inte) |
| lairsain.com | 429 | inget |
| amazon.se, Wenko | bara kod | inget |
| OxyChem figur 9 | bild i PDF | exemplet i texten och Staples & Nuttall |
| Unibond SDS (Henkel mysds) | inte försökt; två andra SDS räckte | – |
| Rusta | inte läst; nämns bara som "upprepas inte" | – |
