# Underlag: kontrollplansgeneratorn

Verktyg "ny" i `docs/SOKORDSANALYS.md` avsnitt 7.4, planerat till `/rakna/kontrollplan/`. Byggs som generator, inte kalkylator: läsaren väljer åtgärd och får kontrollpunkter med kontrollant, kontrollmetod och lagrum, utskrivbart och delbart via adressen.

- **Huvudfras:** kontrollplan mall (320 i månaden, −56 %). Sidfras: kontrollplan altan (10). Vinnbarhet 5.
- **Sidtyp:** verktyg under /rakna/ (generator).
- **Hämtat:** allt nedan är läst 2026-09-28 om inget annat står på raden. Endast myndighet, lagtext och kommun.
- **Interna länkar som ska finnas:** `/rakna/bygglov-altan/` (frågar redan efter lovplikt för altan, lagrum PBL 9 kap. 19 § i lydelse efter lag 2025:974, se `src/lib/kalkyl/bygglov-altan.ts`), `/rakna/altan/`, guiden `bygga-altan`, kunskapssidan `bygglov-altan`.
- **Produkter:** inga. Verktyget visar inga produkter.

---

## Källförteckning

Tabellerna hänvisar med K-nummer. Alla lästa 2026-09-28.

| Id | Källa | Adress | Sidans datum |
|---|---|---|---|
| K1 | Boverket, PBL kunskapsbanken: Kontrollplan | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/ | Senast ändrad 1 juli 2026 |
| K2 | Boverket, PBL kunskapsbanken: Kontrollplanens innehåll | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/kontrollplanens-innehall/ | Senast ändrad 1 juli 2026 |
| K3 | Boverket, PBL kunskapsbanken: Kontrollplanens utformning | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/kontrollplanens-utformning/ | Publicerad 1 augusti 2020, ändringsdatum ej utläst |
| K4 | Boverket, PBL kunskapsbanken: Kontrollansvariga | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/ | ej utläst |
| K5 | Boverket, PBL kunskapsbanken: Ändringar av PBL och PBF | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/andringar-av-pbl-och-pbf/ | Senast ändrad 22 juni 2026 |
| K6 | Plan- och bygglag (2010:900), riksdagen.se, gällande lydelse inkl. övergångsbestämmelser | https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/ | – |
| K7 | Plan- och byggförordning (2011:338), riksdagen.se | https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/ | – |
| K8 | Boverket, Byggprocessen – vägledning (pdf, december 2025, inte längre uppdaterad), bilaga 1 med 10 kap. 6 § i lydelse Lag (2020:603) | https://www.boverket.se/globalassets/publikationer/dokument/2025/byggprocessen.pdf | december 2025 |
| K9 | Boverket, PBL kunskapsbanken: Nya byggregler | https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/byggregelsystemet/nya-byggregler/ | 1 juli 2026 |
| K10 | Boverket, nyhet: Nu gäller Boverkets nya byggregler fullt ut | https://www.boverket.se/sv/om-boverket/nyheter-aktuellt/nyheter/nu-galler-boverkets-nya-byggregler/ | ej utläst |
| K11 | Boverket, nyhet: Nya krav på energihushållning och energideklarationer beslutade | https://www.boverket.se/sv/om-boverket/nyheter-aktuellt/nyheter/nya-krav-pa-energihushallning-och-energideklarationer-beslutade/ | 28 augusti 2026 |
| K12 | Boverket, Lista med PBL-ändringar som trädde i kraft 1 december 2025 | https://www.boverket.se/sv/samhallsplanering/uppdrag/nytt-regelverk-for-bygglov/lista-pbl--andringar/ | ej utläst |
| K13 | Boverket, PBL kunskapsbanken: Bygglov för nybyggnad av komplementbostadshus | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/nybyggnad/komplementbostadshus/ | ej utläst |
| K14 | Boverket, PBL kunskapsbanken: Frågor och svar om nytt regelverk för bygglov | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/fragor-och-svar/ | ej utläst |
| B4 | BFS 2024:4 Aktsamhet (grundförfattning, pdf) | https://rinfo.boverket.se/BFS2024-4/pdf/BFS2024-4.pdf | i kraft 1 jan 2025 |
| B6 | BFS 2024:6 Bärförmåga, stadga och beständighet (grundförfattning) | https://rinfo.boverket.se/BFS2024-6/pdf/BFS2024-6.pdf | i kraft 1 juli 2025 |
| B7 | BFS 2024:7 Säkerhet i händelse av brand (grundförfattning) | https://rinfo.boverket.se/BFS2024-7/pdf/BFS2024-7.pdf | i kraft 1 juli 2025 |
| B8 | BFS 2024:8 Hygien, hälsa och miljö samt vatten och avfall (grundförfattning) | https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf | i kraft 1 juli 2025 |
| B9 | BFS 2024:9 Säkerhet vid användning (grundförfattning) | https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf | i kraft 1 juli 2025 |
| B13 | BFS 2024:13 Tomter m.m. (grundförfattning) | https://rinfo.boverket.se/BFS2024-13/pdf/BFS2024-13.pdf | i kraft 1 juli 2025 |
| B26 | BFS 2026:9 Energihushållning och värmeisolering (grundförfattning) | https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf | i kraft 1 okt 2026 |
| V1 | Västerås stad: Kontrollplan och kontrollansvarig vid bygg och rivning | https://www.vasteras.se/bygga-bo-och-miljo/bygga-nytt-riva-eller-andra/bra-att-veta-infor-ett-byggprojekt/kontrollplan-och-kontrollansvarig-vid-bygg-och-rivning.html | ej utläst |
| V2 | Västerås, exempel "Altan med skärmtak" fr.o.m. 1 juli 2026 (docx) | https://www.vasteras.se/download/18.1287f9119ed44c3e3bc61c/1782215230084/01.%20Kontrollplan%20tillbyggnad%20altan%20fr.o.m.%201%20juli%202026.docx | – |
| V3 | Västerås, exempel "Eldstad eller rökkanal" fr.o.m. 1 juli 2026 (docx) | https://www.vasteras.se/download/18.1287f9119ed44c3e3bc623/1782215230188/08.%20Kontrollplan%20eldstad%20och%20r%C3%B6kkanal%20fr.o.m.%201%20juli%202026.docx | – |
| V4 | Västerås, samma två exempel före 1 juli 2026 (BBR/EKS) | .../18.4651ec33169110b990c28db/1732795913881/Kontrollplan%20tillbyggnad%20altan.docx och .../18.4651ec33169110b990c28bc/1734771393295/Kontrollplan%20eldstad%20och%20r%C3%B6kkanal.docx (båda under https://www.vasteras.se/download/) | – |
| V5 | Västerås, nya exempel: tillbyggnad (19), komplementbyggnad (10), VA utökning/ändring (21), ventilation (22), rivning (25), tom mall | länkade från V1, samma mapp https://www.vasteras.se/download/18.1287f9119ed44c3e3bc6…/ | – |
| S1 | Stockholms stad: Exempel på kontrollplaner och ritningar | https://bygglov.stockholm/sok-lov-eller-anmalan/exempel-pa-kontrollplaner-och-ritningar/ | Uppdaterad 2026-01-26 |
| S2 | Stockholm, exempel nya byggregler: ändring i bärande konstruktion, ändring i ventilation, lovpliktig tillbyggnad/komplementbyggnad, rivning, tom blankett (pdf) | https://bygglov.stockholm/siteassets/bygglov/sok-lov-eller-anmala/kontrollplaner/[andring-i-barande-konstruktion / andring-i-ventilation-med-huv / lovpliktig-tillbyggnad-eller-komplementbyggnad / rivning / blankett]-nya-byggregler.pdf | – |
| S3 | Stockholm, exempel eldstad, rökkanal och skorsten (BBR) | https://bygglov.stockholm/siteassets/bygglov/blanketter-och-andra-dokument/kontrollplan-for-installation-av-eldstad-rokkanal-och-skorsten.pdf | – |
| G1 | Göteborgs Stad, exempel riskbedömd kontrollplan med KA, tillbyggnad (docx, "2023-09-22-rev") | https://goteborg.se/wps/wcm/connect/5b148f97-f1d5-4f73-8bc7-3369b2d86006/Exempel+kontrollplan+2023-09-22-rev.docx?MOD=AJPERES | 2023-09-22 enligt filnamnet |
| G2 | Göteborgs Stad, förslag till kontrollplan för enkla ärenden utan KA, småhus (pdf) | https://goteborg.se/wps/wcm/connect/81697877-79ce-4d69-9a06-d09131e01658/kontrollplan_f%C3%B6r_enkla_%C3%A4renden_utan_kontrollansvarig_sm%C3%A5hus_villafastighet.pdf?MOD=AJPERES | ej utläst |
| SK1 | Skellefteå kommun: Skapa egen kontrollplan med mall och exempel | https://skelleftea.se/invanare/startsida/bygga-bo-och-miljo/bygga-nytt-andra-eller-riva/bygglov-och-bygganmalan/bygglov---sa-har-gar-det-till/kontrollplan-och-kontrollansvar/skapa-egen-kontrollplan-med-mall-och-exempel | Senast uppdaterad 16 juni 2026 |
| SK2 | Skellefteå, mall Kontrollplan PBL (ifyllbar pdf) | https://skelleftea.se/download/18.4baa100518529b2af5ecd88/1673350632674/Mall_Kontrollplan%20PBL.pdf | – |
| H1 | Hallstahammars kommun, Mall kontrollplan (pdf) | https://www.hallstahammar.se/download/18.6fddbfa31805520a4f8505a8/1650876425674/Mall%20kontrollplan.pdf | – |
| D1 | Degerfors kommun, Kontrollplan, mall (pdf) | https://degerfors.se/download/18.208945ec17c1719f02440/1632749055287/Kontrollplansmall.pdf | – |
| U1 | Uppsala kommun, exempel på kontrollplan, eldstad (pdf) | https://www.uppsala.se/globalassets/dokument/bygglov/kontrollplaner/rev-exempelkontrollplan_eldstad.pdf | – |

**Kunde inte läsas (2026-09-28):**
- Hagfors: sidan `https://www.hagfors.se/undersidor/bo-och-bygga/bygga/ansok-om-bygglov-eller-gor-anmalan.html` och båda mallarna (`.../1466415439406/Kontrollplan+tom+mall,+blankett+(utkast).pdf`, `.../1473236828055/Mall%20kontrollplan.pdf`) ger 404. Bara sökmotorns titel finns: "Kontrollplan tom mall, blankett (utkast)".
- Degerfors: sidan `https://degerfors.se/bo-bygga-trafik-och-miljo/bygga-nytt-riva-eller-andra/handlaggningsprocess/kontrollplan` ger 404. Pdf:en D1 gick att läsa.
- Hallstahammar: sidan `.../bygglov/kontrollplaner-med-exempel` ger "sidan finns inte". Pdf:en H1 gick att läsa.
- Göteborg: portalsidan "Mallar för enkel kontrollplan" och "Riskbedömning och kontrollplan utan kontrollansvarig" leder till startsidan. Filerna G1 och G2 gick att läsa.
- forfattningssamling.boverket.se (listan över ändringsförfattningar per BFS): gick inte att hämta, se Att verifiera.

---

## 1. Vad lagen kräver av en kontrollplan

### 1.1 Lagrum, gällande lydelse

| Krav | Lagrum | Lydelse (utdrag) | Källa |
|---|---|---|---|
| Byggherren ska se till att det finns en plan för att kontrollera utförandet av en lov- eller anmälningspliktig åtgärd | PBL 10 kap. 6 § första st., Lag (2026:712) | "I fråga om en sådan åtgärd som avses i 3 § ska byggherren se till att det finns en plan för att kontrollera utförandet av åtgärden. Kravet på kontrollplan gäller inte utförande som omfattas av en byggbedömares kontroll." | K6, K2 |
| Planens fyra obligatoriska uppgifter | PBL 10 kap. 6 § andra st., Lag (2026:712) | "1. vilka kontroller som ska göras och vilka krav som kontrollerna ska avse, 2. vem som ska göra kontrollerna och hur de ska utföras, 3. vilka anmälningar som ska göras till byggnadsnämnden, och 4. vilka arbetsplatsbesök som byggnadsnämnden bör göra och när besöken bör ske." | K6, K2 |
| Nämnden får avstå från kontrollplan för enklare åtgärder | PBL 10 kap. 6 a §, Lag (2025:974) | "Byggnadsnämnden får i det enskilda fallet besluta att en kontrollplan inte behövs för enklare åtgärder." Boverkets exempel: trädfällning, fasadändring, mur, plank, skyltar, ljusanordningar, ändrad användning utan byggåtgärd, mindre rivningsåtgärder (jfr prop. 2024/25:169 s. 344) | K6, K1 |
| Anpassad till fallet | PBL 10 kap. 7 §, Lag (2011:335) | Utformning och detaljeringsgrad som behövs för att säkerställa att 1. väsentliga krav i 8 kap. 4 § uppfylls, 2. förvanskningsförbudet i 8 kap. 13 § följs, 3. varsamhetskraven i 8 kap. 17 och 18 §§ uppfylls | K6, K2 |
| Egenkontroll eller sakkunnig ska framgå | PBL 10 kap. 8 §, Lag (2026:712) | "Av kontrollplanen ska det framgå i vilken omfattning kontrollen ska utföras 1. inom ramen för byggherrens dokumenterade egenkontroll, eller 2. av en sakkunnig." Nytt tredje st.: obligatorisk sakkunnigkontroll får föreskrivas | K6, K2 |
| Avfallshanteringsplan, separat plan | PBL 10 kap. 8 a §, Lag (2026:712) | Byggherren ska se till att det finns en avfallshanteringsplan med 1. byggprodukter som kan återanvändas, 2. avfall och hur det tas om hand, särskilt materialåtervinning av hög kvalitet och säker hantering av farliga ämnen. "Kravet på avfallshanteringsplan gäller inte om det är uppenbart att det saknas behov av en sådan plan." | K6, K2 |
| Kontroll enligt fastställd plan | PBL 10 kap. 5 a §, Lag (2026:712) | Byggherren ska se till att åtgärden kontrolleras enligt den kontrollplan och avfallshanteringsplan som nämnden fastställer i startbeskedet | K6, K1 |
| Förslag in före tekniskt samråd | PBL 10 kap. 18 §, Lag (2026:712) | Senast fem arbetsdagar före tekniskt samråd, eller inom nämndens frist, lämnas förslag till kontrollplan och avfallshanteringsplan | K6, K1 |
| Tekniskt samråd krävs när | PBL 10 kap. 14 §, Lag (2026:712) | Om KA krävs, om samråd inte är uppenbart obehövligt, eller om byggherren begär det | K6 |
| Utan tekniskt samråd | PBL 10 kap. 22 § | Nämnden ger startbesked i lovbeslutet eller snarast därefter, eller efter att anmälan kommit in, alternativt förelägger om fler handlingar | K6 |
| Startbesked efter prövning av förslaget | PBL 10 kap. 23 §, Lag (2026:712) | "Startbesked får ges endast efter prövning av byggherrens förslag till kontrollplan och avfallshanteringsplan, behovet av sakkunnigkontroll och det som har framkommit vid det tekniska samrådet …" | K6, K9 |
| **Fastställandet sker i 24 §, inte 23 §** | PBL 10 kap. 24 § 1, Lag (2026:712) | I startbeskedet ska nämnden "fastställa den kontrollplan och den avfallshanteringsplan som ska gälla för åtgärderna, med uppgift om vem eller vilka som är sakkunniga eller kontrollansvariga" | K6, K2 |
| Slutbesked kräver att planen följts | PBL 10 kap. 34 § 1, Lag (2026:712) | Byggherren ska ha visat att alla krav enligt lovet, kontrollplanen, avfallshanteringsplanen, startbeskedet och kompletterande villkor är uppfyllda | K6, K9 |
| KA:s uppgifter | PBL 10 kap. 11 §, Lag (2026:712) | Biträda med förslag till kontrollplan, se till att den följs, närvara vid samråd och besök, lämna utlåtande inför slutbesked m.m. | K6, K1 |
| Behovet av kontrollplan kan inte överklagas | PBL 13 kap. 2 § 5, Lag (2026:712) | Gäller kontrollplan, avfallshanteringsplan, KA, sakkunnig, tekniskt samråd, slutsamråd | K6, K2 |
| Etapper | PBF 3 kap. 21 § och 7 kap. 1 § | Tidpunkter för senarelagda ändringar vid ombyggnad i etapper ska framgå av kontrollplanen. **Båda upphör 2027-01-01 genom förordning (2026:1265)** | K7, K1 |

Egen notering: uppdraget nämner 10 kap. 23 §. Efter lag 2026:712 är det 24 § 1 som fastställer planen; 23 § är villkoren för startbesked.

### 1.2 Uppgifter som ska finnas i planen, och var kravet står

| Uppgift | Tvingande eller rekommenderad | Grund | Källa |
|---|---|---|---|
| Vilken kontroll | Tvingande | PBL 10:6 p. 1 | K6 |
| Vilket krav kontrollen avser (lagrum/föreskrift) | Tvingande sedan 1 juli 2026 | PBL 10:6 p. 1, Lag (2026:712) | K6, K5 |
| Vem som kontrollerar | Tvingande | PBL 10:6 p. 2 | K6 |
| Hur (kontrollmetod) | Tvingande sedan 1 juli 2026 | PBL 10:6 p. 2, Lag (2026:712) | K6, K5 |
| Egenkontroll eller sakkunnig | Tvingande | PBL 10:8 | K6, K3 |
| Anmälningar till nämnden | Tvingande | PBL 10:6 p. 3 | K6 |
| Arbetsplatsbesök och när | Tvingande | PBL 10:6 p. 4 | K6 |
| Mot vad kontrollen görs (ritning, anvisning, föreskrift) | Boverket: "information som måste finnas om varje kontrollpunkt" | K3, jfr prop. 2009/10:170 s. 304 | K3, K2 |
| Hur kontrollen dokumenteras | Boverket: "bör … framgå" | K3 | K3 |
| När kontrollen sker | Boverket: "Det ska framgå när kontrollen ska ske" | K3 | K3 |
| Utförd av, datum, signatur (uppföljning) | Boverket: "ska det framgå" för uppföljningen | K3 | K3 |
| Administrativ information: fastighet och åtgärd, byggherre med kontakt, KA, byggherrens organisation, upprättad datum, plats för intygande (datum, underskrift, namnförtydligande), diarienummer, vilka delar planen omfattar | Boverket: "lämpligt" | K3 | K3 |
| Kontrollanten helst namngiven; roll räcker vid samrådet men namn krävs vid slutsamrådet | Boverkets vägledning | K2 | K2 |
| Dokumentation styrks med underskrift av den som kontrollerat | Boverkets vägledning (jfr prop. 2009/10:170 s. 302) | K2 | K2 |
| Projektering hör normalt inte hemma i planen | Boverkets vägledning (jfr prop. 2025/26:172 s. 108) | K2 | K2 |

Boverkets exempelrader (K3), som testet kan läsa som format:

| # | Kontroll | Krav | Vem | Hur | Mot vad | Dokumentation | När |
|---|---|---|---|---|---|---|---|
| 1 | Radonsäker grund/platta | 3 kap. 1 § BFS 2024:8 | Arbetsledare, betongarbeten | Enligt checklista 1B | Bygghandling G1 | Noteringar i checklista 1B | Innan gjutning av bottenplatta påbörjas |
| 2 | Fall i badrum | 7 kap. 11 § BFS 2024:8 | Montör, plattsättning | Mätning av lutning | Branschregler, Säkra Våtrum 2026:1 | Egenkontrollformulär | När fallet lagts, innan nästa moment påbörjas |
| 3 | Fönsterprofilering, nytillverkade enheter | 8 kap. 17 § PBL | Sakkunnig KUL | Mätning med konturverktyg | Befintligt fönster F9 | Fotodokumentation samt utlåtande | Mottagningskontroll vid leverans till arbetsplatsen |

Sakkunnigområden enligt Boverket: brand (SAK), tillgänglighet (TIL), kulturvärden (KUL), energi (CEX), ventilation (OVK). Källa K2.

Kontroll som ska göras oavsett planen: funktionskontroll av ventilation av certifierad funktionskontrollant (PBL 8 kap. 25 §, PBF 5 kap. 1–7 §§, BFS 2011:16), besiktning av hissar och motordrivna anordningar (PBF 5 kap. 8–11 §§). Källa K2.

---

## 2. Regeländringen 1 juli 2026

Det finns **två** ändringar som båda gäller från 1 juli 2026. Västerås nämner bara den ena.

| Vad | Författning | Ikraft | Påverkan på planen | Övergång | Källa |
|---|---|---|---|---|---|
| Effektiv och säker byggprocess | **Lag (2026:712)** om ändring i PBL, prop. 2025/26:172 | 1 juli 2026 | (a) 10:6 kompletteras med "vilka krav som kontrollerna ska avse" och "hur de ska utföras". (b) Avfallspunkterna flyttas ut ur kontrollplanen till en separat **avfallshanteringsplan** (10:8 a). (c) Certifierat byggprojekteringsföretag blir **byggbedömare**; används en sådan för kontroll behövs ingen kontrollplan, KA eller arbetsplatsbesök för den delen (10:6, 10:13 a, 10:24 andra st.). (d) Obligatorisk sakkunnigkontroll kan föreskrivas (10:8). (e) KA får inte kontrollera det den projekterat vid obligatorisk sakkunnigkontroll (10:11 a). (f) Förslag senast fem **arbetsdagar** före tekniskt samråd (10:18). | "Bestämmelserna om kontrollplan i 10 kap. 6 § ska tillämpas i sin äldre lydelse i fråga om åtgärder för vilka ansökan om lov eller anmälan har gjorts före ikraftträdandet." | K6 (övergångsbestämmelse 2026:712 p. 2), K5, K2 |
| BBR och EKS upphör för nya ärenden | BFS 2024:14 (BBR 31) övergångsbestämmelse p. 3, BFS 2024:4, 2024:6–2024:13 | Nya reglerna i kraft 1 juli 2025, valfrihet till 30 juni 2026 | Hänvisningar i planen ska gå till BFS 2024:x i stället för BBR-avsnitt och EKS. Lov beslutat före 1 juli 2026 med äldre regler valda: äldre regler även vid startbeskedet. | "Möjligheten att tillämpa de äldre reglerna upphörde den 1 juli 2026." | K9, K10 |

**Äldre lydelse av 10 kap. 6 §**, Lag (2020:603), gäller alltså för ärenden med ansökan eller anmälan före 1 juli 2026. Källa K8, bilaga 1:
"1. vilka kontroller som ska göras och vad kontrollerna ska avse, 2. vem som ska göra kontrollerna, 3. vilka anmälningar som ska göras till byggnadsnämnden, 4. vilka arbetsplatsbesök som byggnadsnämnden bör göra och när besöken bör ske, 5. vilka byggprodukter som kan återanvändas och hur dessa ska tas om hand, och 6. vilket avfall som åtgärden kan ge upphov till och hur avfallet ska tas om hand, särskilt hur man avser att möjliggöra c) materialåtervinning av hög kvalitet, och d) avlägsnande och säker hantering av farliga ämnen."

**Vad Västerås faktiskt skriver** (V1): "Kom ansökan in före den 1 juli 2026? Använd exempel enligt de tidigare byggreglerna. Kom ansökan in den 1 juli 2026 eller senare? Använd exempel enligt de nya byggreglerna. Orsaken är att Boverkets byggregler ändrades den 1 juli 2025." Västerås motiverar alltså bytet med byggreglerna, inte med lag 2026:712. De nya Västerås-mallarna (V2, V3, V5) har inga fält för anmälningar eller arbetsplatsbesök och ingen separat avfallshanteringsplan. Hjälptexten i mallen säger fortfarande "En paragraf i Boverkets byggregler, BBR" och "En paragraf i Europeiska konstruktionsstandarder, EKS".

**Fler ändringar i närtid:**

| Datum | Författning | Innehåll | Källa |
|---|---|---|---|
| 1 dec 2025 | Lag (2025:974), prop. 2024/25:169 | Nytt regelverk för bygglov. Attefallshus och attefallstillbyggnad borttagna som begrepp; ersatta av lovfri komplementbyggnad, komplementbostadshus och tillbyggnad. 10:6 a införd. Äldre bestämmelser för ärenden påbörjade före 1 dec 2025. | K6, K12 |
| 1 dec 2025 | Förordning (2025:979) | Nytt 6 kap. PBF om anmälningsplikt; nytt 7 kap. 5 § om när KA inte krävs | K7 |
| 1 juli 2026 | Lag (2026:745) | 8 kap. 4 § p. 11 "hållbar mobilitet" ersätter laddning av elfordon | K6, K5 |
| 1 okt 2026 | BFS 2026:9 | Energireglerna flyttar från BBR till egen författning; BBR (BFS 2011:6) upphävs | B26, K11 |
| 1 jan 2027 | Förordning (2026:1265) | PBF 7 kap. rubriken "Kontrollplan" och 7 kap. 1 § upphör; innehåll ej läst | K7 |
| 1 jan 2027 | Lag (2026:746) | Ändring i PBL; innehåll ej läst | K6 |

---

## 3. Kontrollansvarig eller byggherren själv

| Regel | Lagrum | Källa |
|---|---|---|
| Huvudregel: en eller flera KA för kontroll som omfattas av kontrollplan eller avfallshanteringsplan | PBL 10 kap. 9 §, Lag (2026:712) | K6, K4 |
| Ingen KA för små ändringar av en- eller tvåbostadshus, om nämnden inte beslutar annat | PBL 10 kap. 10 § 1 | K6, K4 |
| Ingen KA för andra små åtgärder enligt föreskrifter | PBL 10 kap. 10 § 2 | K6 |
| Ingen KA för: 1. åtgärd utan lov- eller anmälningsplikt, 2. **anmälningspliktig åtgärd**, 3. komplementbyggnad eller komplementbostadshus, 4. inreda ytterligare en bostad i enbostadshus, 5. skylt/ljusanordning, 6. **mur, plank eller altan**, 7. liten begravningsplats, 8. transformatorstation, 9. rivningslov som följer av detaljplan/områdesbestämmelser, 10. litet marklov, 11. annan liten ändring | PBF 7 kap. 5 § första st., Förordning (2025:979) | K7, K4 |
| Nämnden får ändå kräva KA i fall 2–11 | PBF 7 kap. 5 § andra st. | K7, K4 |
| Utan KA upprättar byggherren förslaget själv; med KA biträder KA | PBL 10 kap. 6 och 11 §§; Boverket: "Kontrollplanen ska tas fram av byggherren med stöd av dennas organisation … med biträde av kontrollansvarig" | K1 |
| Beslut om KA kan inte överklagas | PBL 13 kap. 2 § 5 | K6 |

### Per åtgärd i generatorn

| Åtgärd | Lov/anmälan | Lagrum | Kontrollplan | KA | Källa |
|---|---|---|---|---|---|
| Altan inom detaljplan, högre än 1,8 m inom 3,6 m från byggnad, eller högre än 1,2 m längre bort | Bygglov | PBL 9 kap. 19 §, Lag (2025:974) | Ja | Nej (PBF 7:5 p. 6), om nämnden inte beslutar annat | K6, K7, K12 |
| Altan i övrigt (inom eller utanför plan) | Lovfri enligt 9:19, utom utökad lovplikt | PBL 9 kap. 19, 21 §§ | Nej (ingen lov-/anmälningsplikt) | Nej | K6, K12 |
| Altan med skärmtak/tak | Tak kan vara tillbyggnad; lovplikt enligt 9:9–10 | PBL 9 kap. 9–10 §§ | Om lov- eller anmälningspliktig | Tillbyggnad: huvudregel KA; "liten ändring" undantas. **Oklart för skärmtak**, se Att verifiera | K6 |
| "Attefallshus" = lovfri komplementbyggnad/komplementbostadshus ≤ 30,0 m² inom detaljplan (≤ 50,0 m² utanför) | **Ingen anmälan för själva byggnaden sedan 1 dec 2025.** Anmälan krävs för installation av eldstad, rökkanal, ventilation, VA (PBF 6:1 p. 4–5) | PBL 9 kap. 4–5 §§; PBF 6 kap. 1 § | Bara för installationerna som kräver anmälan | Nej (PBF 7:5 p. 2 och 3) | K6, K7, K13, K14 |
| "Attefallstillbyggnad" = lovfri tillbyggnad ≤ 30,0 m² brutto-/öppenarea, inte över taknock | Lovfri. Anmälan om ändringen väsentligt påverkar bärande delar eller brandskydd, eller vid installationer (PBF 6:1 p. 2–5) | PBL 9 kap. 10 §; PBF 6 kap. 1 § | Om anmälan krävs | Nej vid anmälan (PBF 7:5 p. 2) | K6, K7 |
| Eldstad eller rökkanal, installation eller väsentlig ändring | Anmälan | PBF 6 kap. 1 § 4 | Ja; Boverket nämner eldstad uttryckligen | Nej (PBF 7:5 p. 2) | K7, K1 |
| Ändring som väsentligt påverkar bärande delar | Anmälan | PBF 6 kap. 1 § 2 | Ja | Nej (PBF 7:5 p. 2) | K7 |
| Ventilation, installation eller väsentlig ändring | Anmälan | PBF 6 kap. 1 § 4 | Ja, plus funktionskontroll före första användning (PBF 5 kap. 1 §) | Nej (PBF 7:5 p. 2) | K7, K2 |
| VA i byggnad, installation eller väsentlig ändring | Anmälan | PBF 6 kap. 1 § 5 | Ja | Nej (PBF 7:5 p. 2) | K7 |
| Rivning av byggnad > 50,0 m² byggnadsarea utan rivningslovplikt | Anmälan | PBF 6 kap. 1 § 1 | Ja, plus avfallshanteringsplan om inte uppenbart obehövlig | Nej (PBF 7:5 p. 2) | K7, K6 |
| Rivning av byggnad inom detaljplan | Rivningslov | PBL 9 kap. 43 § | Ja, plus avfallshanteringsplan | Ja, huvudregel, utom om lovet följer av utökad lovplikt (PBF 7:5 p. 9) | K6, K7 |
| Undantag från anmälan | Föreläggande, totalförsvar, statlig/regional byggnad, ekonomibyggnad utanför plan (för p. 2–5) | PBF 6 kap. 2 § | – | – | K7 |

Västerås (V1) listar "attefallsbostadshus (ej aktuellt efter 1 december 2025)" bland åtgärder som kräver KA, och "installera eldstad, vatten, avlopp eller ventilation", "altandäck" bland dem där det räcker med kontrollplan.

---

## 4. Kontrollpunkter per åtgärd, kommunerna jämförda

Lästa kommuner: Västerås (V2–V5, nya regler), Stockholm (S2 nya regler, S3 BBR), Göteborg (G1, G2, BBR), Skellefteå (SK1, BBR-baserade exempel trots uppdatering juni 2026), Hallstahammar (H1, tom mall), Degerfors (D1, tom mall), Uppsala (U1, eldstad, BBR). Hagfors gick inte att läsa.

Kolumnen **Lagrum, kontrollerat** anger den paragraf i grundförfattningen som faktiskt säger det punkten kontrollerar, läst i B4–B26. Där kommunens hänvisning avviker står det i sista kolumnen.

### 4.1 Gemensamt för alla kommunmallar

| Del | Västerås | Stockholm | Göteborg | Skellefteå | Hallstahammar | Degerfors | Uppsala |
|---|---|---|---|---|---|---|---|
| Fastighetsbeteckning, åtgärd, byggherre, upprättad datum | ja | ja | ja | ja | ja | ja | ja |
| Kontrollen avser | ja | ja | ja | ja | ja | ja | ja |
| Kontrollant (B/E/S eller namn) | ja | ja | ja | ja | ja | ja | ja |
| Kontrollmetod | ja | ja | ja | ja | ja | ja | ja |
| Kontroll mot (underlag) | ja | ja | ja | ja | ja | ja | ja |
| Signatur/datum | ja | ja | ja | ja | ja | ja | ja |
| Byggherrens intygande vid slutet | ja | ja | ja | ja | ja | ja | ja |
| "Överensstämmer med lov/startbesked" som punkt | ja | ja | ja (G2) | – | ja (intyg) | ja (intyg) | ja |
| När kontrollen sker | – | – | ja (G1) | – | – | – | ja |
| Hur kontrollen dokumenteras | – | – | ja (G1) | – | – | – | ja |
| Anmälningar till nämnden | – | – | ja (G1) | – | – | – | – |
| Arbetsplatsbesök | – | – | ja (G1) | – | – | – | – |
| Avfall/återbruk | rivning | rivning | ja | – | ja | bilaga vid rivning | – |
| Hänvisar till BFS 2024:x | ja | ja (S2) | nej | nej | nej | nej | nej |

Källor: V2, V3, V5, S2, S3, G1, G2, SK2, H1, D1, U1.

### 4.2 Altan (bygglov) och altan med skärmtak

| Kontrollpunkt | Västerås V2 | Stockholm | Göteborg G2 | Lagrum, kontrollerat | Anmärkning |
|---|---|---|---|---|---|
| Utsättning/läge | Mätning mot situationsplan | Utstakning, lägeskontroll (S2, tillbyggnad) | Utstakning | Bygglovet; PBL 10 kap. 34 § 1 | Gemensam |
| Bärförmåga, stadga, beständighet | Beräkning mot K-ritning, "BFS 2024:6, 1 kap. 7 §" | 8 kap. / 7 kap. BFS 2024:6 (S2 tillbyggnad) | Stomme: K-ritning | BFS 2024:6 1 kap. 2 § andra st. (gäller i tillämpliga delar även andra anläggningar än byggnader), 12 § (utförande), 18 § (kontroll under utförande), 19 § (mottagning) | V2:s "1 kap. 7 §" är kravet på kända egenskaper hos byggprodukter, inte bärförmågan |
| Leverantörens anvisningar för vertikal last och vindlast | Visuellt mot K-ritning | – | – | BFS 2024:6 1 kap. 12 § 2 (enligt gällande handlingar); laster 4 kap. | Bara Västerås |
| Brandspridning mellan byggnader | "BFS 2024:7, 5 kap. 2 och 4 §§" | 4, 5, 6 kap. BFS 2024:7 (S2 tillbyggnad) | "BBR 5:6" | BFS 2024:7 **6 kap.** 5 § (8 m eller brandavskiljning), 10 § (komplementbyggnad ≤ 15 m² undantagen) | V2 anger fel kapitel: 5 kap. gäller spridning *inom* byggnad |
| Taktäckning på skärmtak | – | – | – | BFS 2024:7 5 kap. 50 § andra st. 2: "Lägst brandteknisk klass E på mindre tak över uteplats, skärmtak över entré eller liknande" | Ingen kommun har punkten; gäller bara om tak |
| Dagvatten | "BFS 2024:8, 7 kap. 4 §" | – | – | BFS 2024:8 7 kap. 4 § (regn- och smältvatten leds bort från byggnaderna) | Bara Västerås; gäller när taket leder vatten mot huset |
| Räcke/skydd mot fall | – | Räcken 2 kap. 11 § BFS 2024:9 (S2 tillbyggnad) | "Balkongräcke är 1,1 m högt, samt ej klättringsbart. Öppningar mindre än 10 cm" (BBR 8:23) | BFS 2024:9 2 kap. 10 § ("balkonger … och andra vistelseytor i eller i anslutning till byggnader") och 11 § (höjd efter fallhöjd; där yngre barn vistas: 0,8 m klätterskydd, vertikala öppningar högst 100 mm) | Ingen fast räckeshöjd i BFS 2024:9. Tillämpligheten på fristående altan: se Att verifiera |
| Trappa, ledstång | – | 2 kap. 12–13 §§ BFS 2024:9 (S2) | – | BFS 2024:9 2 kap. 5–6, 12–13 §§ | Bara Stockholm |
| Aktsamhet (brand, buller, damm, obehöriga) | – | 7 § och 6 § BFS 2024:4 (S2) | – | BFS 2024:4 6 § (obehöriga), 7 § (personskador, brand, buller, damm) | Bara Stockholm |
| Överensstämmer med bygglov/startbesked | Visuellt, lägeskontroll | ja | ja | PBL 10 kap. 34 § 1 | Gemensam |

### 4.3 Eldstad eller rökkanal (anmälan)

| Kontrollpunkt | Västerås V3 (nya) | Västerås V4 (BBR) | Stockholm S3 (BBR) | Uppsala U1 (BBR) | Lagrum, kontrollerat (BFS 2024:x) | Anmärkning |
|---|---|---|---|---|---|---|
| Utsläpp/verkningsgrad | Prestandadeklaration mot "BFS 2024:8" | BBR 6:7412 | – | BBR 6:7412 | BFS 2024:8 9 kap. 3 § (olägenheter av förbränningsgaser begränsas), inget numeriskt gränsvärde i grundförfattningen | Tal för CO och verkningsgrad saknas i nya reglerna, se Att verifiera |
| Genomföring i bjälklag, avväxling, tak och vägg | "BFS 2024:6, BFS 2024:7, 1 kap. 4 och 6 §§" | EKS 12, BBR 5:232 | – | – | BFS 2024:6 (bärförmåga) och BFS 2024:7 4 kap. 19 § (G(x)-skyddsavstånd eller schakt EI 60/EI 30) | V3:s "1 kap. 4 och 6 §§" är definitioner och brandtekniska klasser |
| Underlagets bärförmåga | "BFS 2024:7, 4 kap. 3 och 13 §§" | BBR 5:4222 | BBR 5:4222 | BBR 5:4222 | BFS 2024:7 4 kap. 13 § | Stämmer |
| Skydd mot brand, allmänt | "4 kap. 1, 8 och 10 §§" | BBR 5:41, 5:4223 | – | – | BFS 2024:7 4 kap. 1, 3 §§ | Stämmer |
| Avstånd till brännbart | "4 kap. 8 och 9 §§" | BBR 5:4221 | BBR 5:422 | – | BFS 2024:7 4 kap. 8 § (högst 85 °C på brännbar yta vid normal drift), 14 § (skorsten utanför eldstadsrummet högst 100 °C), 19 § (G(x)) | 9 § gäller förbränningsluft, inte avstånd |
| Eldstadsplan | – | – | BBR 5:4223 | BBR 5:4223 | BFS 2024:7 4 kap. 10 § (obrännbart; sluten eldstad minst 0,30 m framför och 0,10 m vid sidorna, alternativt 0,20 m utanför vardera sidan av öppningen) | Saknas i Västerås nya mall |
| Förbränningsluft | – | – | – | – | BFS 2024:7 4 kap. 9 § | Ingen kommun |
| Skorstenens utformning | "BFS 2024:7" | BBR 5:425 | BBR 5:425, 6:743 | – | BFS 2024:7 4 kap. 12, 17, 18, 20 §§ | – |
| Mynning över tak | "BFS 2024:8, 9 kap. 4 §", text: "mynna över taknock och minst 1 meter över taktäckning" | BBR 6:743 | Skorstenshöjd | BBR 6:743 | **BFS 2024:7 4 kap. 16 §**: "Skorstenar och rökkanaler ska mynna minst 1,0 meter över taktäckningen." BFS 2024:8 9 kap. 4 §: gaserna förs inte tillbaka in i byggnaden | "Över taknock" står inte i någon av de lästa paragraferna |
| Rensning och inspektion | – | – | BBR 5:428 | – | BFS 2024:7 4 kap. 21 § | Saknas i Västerås |
| Täthet, förgiftning | – | – | – | Täthetsprovning (sotarintyg) | BFS 2024:7 4 kap. 17 §; BFS 2024:9 2 kap. 38 § | – |
| Takskyddsanordningar | "BFS 2024:9, 2 kap. 19 och 22 §§" | BBR 8:2422 | BBR 8:24 | Intyg | BFS 2024:9 2 kap. 15–21 §§ (tillträde, förflyttning, förankring, fotfästen) | 22 § gäller fasta arbetsställen |
| Skorstensfejarmästarens besiktningsprotokoll | ja | ja | "Godkänt besiktningsprotokoll från sotare", S | ja | Lagkravet ej läst, se Att verifiera | Gemensam i alla fyra |
| Förvanskning/varsamhet | – | – | PBL 8:14, 8:17 | – | PBL 8 kap. 13, 17 §§ | Bara Stockholm |
| Överensstämmer med anmälan/startbesked | – | – | ja | ja | PBL 10 kap. 34 § 1 | – |

### 4.4 Ventilation (anmälan)

| Kontrollpunkt | Västerås V5 | Stockholm S2 | Lagrum, kontrollerat |
|---|---|---|---|
| Befintlig konstruktion, bärförmåga | BFS 2024:6 | 8 kap. BFS 2024:6 | BFS 2024:6 1 kap. 13 § (vid ändring klarläggs befintliga bärverk), 8 kap. |
| Brandtätning vid genomföring i brandcellsgräns | BFS 2024:7, 5 kap. 3 och 24–26 §§ | 5 kap. BFS 2024:7 | BFS 2024:7 5 kap. 42 § (installationer i brandavskiljande konstruktion); 5 kap. 21 § (kanaler i en- och tvåbostadshus får vara klass E) |
| Injustering/flöden | BFS 2024:8 1 kap. 9 och 19 §§, 3 kap. 4–5 §§, OVK-protokoll | 3 kap. BFS 2024:8 | BFS 2024:8 3 kap. 4 § (kontinuerlig luftväxling), 5 § (bostad minst 0,35 l/s per m² golvarea och minst 4,0 l/s per person) |
| Funktionskontroll (OVK) | ja | Mätning, OVK | PBL 8 kap. 25 §; PBF 5 kap. 1–2 §§ (första besiktning före första användning) |
| Ljud från installationer | – | 1 kap. 10 §, 2 kap. 7 och 9 §§, 3 kap. 1 § BFS 2024:10 | BFS 2024:10 ej läst i sin helhet |
| Takskydd | BFS 2024:9 | – | BFS 2024:9 2 kap. 15–21 §§ |
| Förvanskning, varsamhet | PBL 8:13, 8:17–18 | PBL 8:13, 8:17 | PBL 8 kap. 13, 17, 18 §§ |

### 4.5 VA (anmälan)

| Kontrollpunkt | Västerås V5 | Göteborg G1 (BBR) | Lagrum, kontrollerat |
|---|---|---|---|
| Tappvarmvatten minst 50 °C vid tappstället | BFS 2024:8 8 kap. 6 § | – | BFS 2024:8 8 kap. 6 § |
| Mikrobiell tillväxt | BFS 2024:8 8 kap. 6 § | – | BFS 2024:8 8 kap. 6 § |
| Återströmning | BFS 2024:8 8 kap. 5 § | – | BFS 2024:8 8 kap. 5 § |
| Avloppets fall | BFS 2024:8 8 kap. 1 § | Tumstock, riktbräda, vattenpass före igenfyllnad | BFS 2024:8 8 kap. 1 § (beständighet) och 10 § (spillvatten avleds) |
| Täthet, provtryckning | – | Provtryckning, protokoll till kommunen | BFS 2024:8 8 kap. 1 § sista st. (dimensionerat för statiskt tryck lägst 1 MPa); 8 kap. 2 § (läckage) |
| Skållning, högst 60 °C | – | – | BFS 2024:9 2 kap. 33 § |
| Placering av ledningar | Situationsplan | Djup i mark före igenfyllnad | Ritning |

### 4.6 Ändrad bärande konstruktion (anmälan)

| Kontrollpunkt | Stockholm S2 | Lagrum, kontrollerat |
|---|---|---|
| Bärförmåga, stadga, beständighet | Beräkning, 8 kap. BFS 2024:6 | BFS 2024:6 1 kap. 13 §, 8 kap. |
| Dimensioneringskontroll | Beräkning, intyg, 1 kap. 17 § BFS 2024:6 | BFS 2024:6 1 kap. 17 §: krävs i säkerhetsklass 2 eller 3, av person som inte deltagit i handlingarna; en- och tvåbostadshus får hänföras till säkerhetsklass 2 (2 kap. 6 §) |
| Mottagning av byggprodukter | Visuellt, intyg, 1 kap. 19 § BFS 2024:6 | BFS 2024:6 1 kap. 19 § |
| Utförande enligt konstruktionshandling | Visuellt | BFS 2024:6 1 kap. 12, 18 §§ |
| Överensstämmer med anmälan | Visuellt | PBL 10 kap. 34 § 1 |

### 4.7 Komplementbostadshus med installationer / lovfri tillbyggnad med anmälan

Västerås V5 (komplementbyggnad, tillbyggnad) och Stockholm S2 (lovpliktig tillbyggnad eller komplementbyggnad). Gemensamma punkter: utstakning/läge, markavvattning/dränering, grundläggning och armering, fuktsäkerhet (BFS 2024:8 7 kap. 1 §), bärförmåga snö och vind (BFS 2024:6), takstolar, luftflöden (BFS 2024:8 3 kap. 4 §), brandspridning mellan byggnader (Västerås: BFS 2024:7 6 kap. 10 §), överensstämmelse. Stockholm lägger till dimensioneringskontroll (BFS 2024:6 1 kap. 17 §), tillgänglighet (BFS 2024:12 3 kap. 1 §, BFS 2024:13 2 kap.), räcken och fönster (BFS 2024:9 2 kap. 4, 11–13 §§), glas ("2 kap. 30–31 § BFS 2025:9"), energi ("BBR 9:92"), aktsamhet (BFS 2024:4 6–7 §§). Västerås lägger till brandvarnare (BFS 2024:7, i grundförfattningen 2 kap. 34–35 §§), energi ("BBR 9").

ANTAGANDE: för ett lovfritt komplementbostadshus gäller anmälan bara installationerna (K13), så generatorn bör bara ta med installationspunkterna (4.3–4.5) för det fallet, inte hela tillbyggnadslistan. Nämnden kan kräva mer.

### 4.8 Rivning

| Kontrollpunkt | Västerås V5 | Stockholm S2 | Lagrum |
|---|---|---|---|
| Sortering av rivningsavfall | 15 kap. miljöbalken | – | Avfallshanteringsplanen, PBL 10 kap. 8 a § (ej miljöbalken läst) |
| Farligt avfall, materialinventering | Avfallsförordningen | – | PBL 10 kap. 8 a § 2 b; BFS 2024:4 9 § 2 |
| Skadedjur i byggnaden | – | – | BFS 2024:4 9 § 1 |
| Kvarstående delars bärförmåga, dimensioneringskontroll | – | 8 kap., 1 kap. 17 § BFS 2024:6 | BFS 2024:6 1 kap. 2 § (gäller även rivningsarbeten i tillämpliga delar) |
| Skydd mot brand, buller, damm; obehöriga | "Säkerhet av arbetsplats BFS 2024:9" | 7 § och 6 § BFS 2024:4 | BFS 2024:4 6–7 §§ (Västerås hänvisning till 2024:9 är fel författning: 2024:9 gäller byggnaden i bruk) |
| Arbetsmiljöplan | AML, AFS | – | Utanför PBL; ej läst |

**Skillnader i sammanfattning:** Stockholm är den enda med förvanskning/varsamhet som första rad på varje nytt exempel. Västerås är den enda med dagvatten på altanen. Göteborg är den enda med när-kolumn, dokumentationskolumn, anmälningar och arbetsplatsbesök (G1, men BBR 29/EKS 12). Skellefteå har flest kontrollpunkter men märker dem "baserade på Boverkets byggregler (2011:6)" trots sidans datum 16 juni 2026. Hallstahammar hänvisar avfallsredovisningen till "10 kap. 5§ PBL", vilket inte stämde ens före 1 juli 2026 (avfallet stod i 6 §).

---

## 5. Hänvisningar i dag och efter övergången

| Ärende | Kontrollplanens innehåll | Tekniska hänvisningar | Energi | Källa |
|---|---|---|---|---|
| Ansökan/anmälan före 1 dec 2025 | Äldre PBL (före 2025:974) | BBR/EKS eller BFS 2024:x (valfritt, ett helt regelverk) | BBR 9 | K6 övergång 2025:974 p. 2, K10 |
| Ansökan/anmälan 1 dec 2025–30 juni 2026 | 10:6 i lydelse Lag (2020:603), avfall i planen | BBR/EKS eller BFS 2024:x, inte blandat. Lov beslutat före 1 juli 2026 med äldre regler: äldre regler även vid startbesked | BBR 9 | K8, K6 övergång 2026:712 p. 2, K10, V1 |
| Ansökan/anmälan 1 juli–30 sep 2026 | 10:6 Lag (2026:712) + separat avfallshanteringsplan (8 a §) | BFS 2024:4, 2024:6–2024:13 | BBR 9 (BFS 2024:14, BBR 31); BBR upphävd först 1 okt 2026 | K6, K9 |
| Ansökan/anmälan 1 okt 2026–30 sep 2027 | Som ovan | BFS 2024:x | BFS 2026:9, eller BBR om *samtliga* äldre bestämmelser tillämpas (B26 övergång p. 3–4; gäller inte 2 kap. 8 § 1–3) | B26, K11 |
| Ansökan/anmälan från 1 okt 2027 | Som ovan | BFS 2024:x | BFS 2026:9 | B26 |

Energipunkten i en plan: BFS 2026:9 gäller inte byggnad med temperaturreglerad area under 50 m² eller bostadshus som används mindre än fyra månader per år (1 kap. 3 §). Kontroll enligt 1 kap. 23–27 §§. Vid ändring av klimatskärm: 3 kap. 1 § med tabell 6 i bilaga 2 (tabellvärdena inte lästa). Källa B26.

Samma kontrollstruktur finns i varje ny författning, bra att ha som standardrad för "hur": kontroll under projektering, under utförande (arbetet enligt gällande handlingar), mottagningskontroll av byggprodukter, och i färdig byggnad genom provning, mätning eller besiktning. BFS 2024:6 tillåter inte kontroll i färdig byggnad, bara under projektering och utförande (1 kap. 15 §; K9).

| Område | Kontrollparagrafer |
|---|---|
| Bärförmåga BFS 2024:6 | 1 kap. 15–19 §§ |
| Brand BFS 2024:7 | 1 kap. 15–19 §§ |
| Hygien, vatten, avfall BFS 2024:8 | 1 kap. 13–17 §§ |
| Säkerhet vid användning BFS 2024:9 | 1 kap. 12–16 §§ |
| Tomter BFS 2024:13 | 1 kap. 10–14 §§ |
| Energi BFS 2026:9 | 1 kap. 23–27 §§ |

Källor: B6, B7, B8, B9, B13, B26.

---

## 6. Form: kommunens mall eller egen plan

| Påstående | Källa |
|---|---|
| "En kontrollplan kan utformas på olika sätt så länge all relevant information finns med." Oftast som matris. | K3, K1 |
| Planen ska vara objektspecifik och anpassad till fallet (PBL 10:7). | K2 |
| Västerås: "Ska du själv ta fram ett förslag till kontrollplan använder du en tom mall som grund." Exemplen är "inspiration". En gemensam plan räcker för flera åtgärder i samma ansökan. | V1 |
| Skellefteå: "Använd gärna kommunens mall som utgångspunkt." | SK1 |
| Degerfors: "Du kan själv välja att upprätta din kontrollplan eller använda mallen och de exempel på kontrollpunkter som finns." Byggherren ansvarar för att hänvisningarna stämmer. | D1 |
| Stockholm, på varje exempel: "Detta är ett exempel och kan inte användas som kontrollplan. Använd någon utav våra mallar för att upprätta er kontrollplan." | S2, S3 |
| Göteborg G2: "Förslag till kontrollplan", byggherren kryssar i punkter på kommunens blankett och kan lägga till egna. | G2 |

Ingen läst kommun skriver att en egen plan avvisas. Stockholm uttrycker sig närmast som krav på egen blankett. ANTAGANDE: en utskrift från generatorn godtas om den har de uppgifter som står i avsnitt 1.2. Verifieras med en kommun, se nedan.

---

## 7. Två kompletta exempelplaner att testa mot

Båda gäller ansökan eller anmälan **efter 1 juli 2026**, en- eller tvåbostadshus inom detaljplan, byggherren utan KA. Rader utan källkolumn är generatorns utdata; varje lagrum är kontrollerat i avsnitt 4. Admininfo och kolumner följer K3.

### 7.1 Altan med bygglov, med skärmtak

Förutsättning: altan 1,5 m över mark, mer än 3,6 m från huset i sin ena del, alltså bygglov enligt PBL 9 kap. 19 § 2. Skärmtak över del av altanen, anslutet till huset. Avstånd till grannens hus 6 m.

**Administrativ information**

| Fält | Värde |
|---|---|
| Fastighet | [fastighetsbeteckning] |
| Åtgärd | Nybyggnad av altan med skärmtak, bygglov enligt PBL 9 kap. 19 § |
| Byggherre | [namn, telefon, e-post] |
| Kontrollansvarig | Krävs inte (PBF 7 kap. 5 § 6), om nämnden inte beslutar annat |
| Entreprenör (E) | [företag, namn] eller "ingen, byggherren bygger själv" |
| Diarienummer | [nämndens nr] |
| Planen upprättad | [datum], av byggherren |
| Regelverk | PBL 10 kap. 6 § i lydelse Lag (2026:712); BFS 2024:4, 2024:6, 2024:7, 2024:8, 2024:9 |
| Avfallshanteringsplan | ANTAGANDE: ej behövlig, nybyggnad utan rivning (PBL 10 kap. 8 a § sista st.). Nämnden avgör. |

**Kontrollpunkter**

| # | Kontrollen avser | Krav (lagrum) | Kontrollant | Egenkontroll/sakkunnig | Metod | Mot vad | Dokumentation | När |
|---|---|---|---|---|---|---|---|---|
| 1 | Altanens läge och höjd enligt lovet | Bygglovet; PBL 10 kap. 34 § 1 | B | Egenkontroll | Mätning | Situationsplan i lovet | Signatur, foto | Efter utsättning, före plintar |
| 2 | Grundläggning, plintar | BFS 2024:6 1 kap. 12 och 18 §§ | B/E | Egenkontroll | Visuellt, mätning | K-ritning eller tillverkarens anvisning | Foto | Före igenfyllnad |
| 3 | Bärförmåga, stadga, beständighet för bärlinor, reglar, skärmtak | BFS 2024:6 1 kap. 2 § andra st., 12 och 18 §§ | B/E | Egenkontroll | Visuellt, mätning mot dimensioner | K-ritning, tillverkarens anvisning för snö- och vindlast | Signatur | Före trall och takbeklädnad |
| 4 | Mottagning av virke och beslag | BFS 2024:6 1 kap. 19 § | B/E | Egenkontroll | Visuellt, märkning | Följesedel mot K-ritning | Följesedel | Vid leverans |
| 5 | Skydd mot fall, räcke | BFS 2024:9 2 kap. 10–11 §§ (tillämplighet: Att verifiera) | B/E | Egenkontroll | Mätning av höjd och öppningar | A-ritning | Signatur, foto | Efter montering av räcke |
| 6 | Trappa och ledstång | BFS 2024:9 2 kap. 5 och 12–13 §§ | B/E | Egenkontroll | Mätning | A-ritning | Signatur | Efter montering |
| 7 | Taktäckning på skärmtaket | BFS 2024:7 5 kap. 50 § andra st. 2 | B/E | Egenkontroll | Visuellt, produktblad | Produktens brandklass | Produktblad | Vid leverans |
| 8 | Brandspridning till grannens byggnad inom 8 m | BFS 2024:7 6 kap. 5 § | B/E | Egenkontroll | Mätning av avstånd, visuellt | A-ritning, situationsplan | Signatur | Före byggstart |
| 9 | Avledning av regnvatten från skärmtaket | BFS 2024:8 7 kap. 4 § | B/E | Egenkontroll | Visuellt | A-ritning | Foto | Efter montering av hängränna |
| 10 | Aktsamhet på arbetsplatsen | BFS 2024:4 6–7 §§ | B | Egenkontroll | Visuellt | – | Signatur | Under byggtiden |
| 11 | Utfört enligt lov och startbesked | PBL 10 kap. 34 § 1 | B | Egenkontroll | Visuellt | Beslutshandlingar | Signatur | Före begäran om slutbesked |

**Anmälningar till nämnden:** byggherren begär slutbesked och lämnar in signerad plan när altanen är klar (PBL 10 kap. 34 §). **Arbetsplatsbesök:** ANTAGANDE "inga bedöms behövas"; nämnden avgör (10 kap. 6 § 4).

Rader som testet kan låsa: 11 punkter; punkterna 7–9 bara när skärmtak finns (utan tak: 8 punkter); KA "krävs inte"; alla rader har icke-tomt lagrum.

### 7.2 Eldstad med ny rökkanal (stålskorsten) i en- eller tvåbostadshus

Förutsättning: sluten braskamin på fast bränsle, ny prefabricerad stålskorsten genom bjälklag och yttertak, huset inte särskilt värdefullt.

**Administrativ information**

| Fält | Värde |
|---|---|
| Åtgärd | Installation av eldstad och rökkanal, anmälan enligt PBF 6 kap. 1 § 4 |
| Kontrollansvarig | Krävs inte (PBF 7 kap. 5 § 2), om nämnden inte beslutar annat |
| Regelverk | PBL 10 kap. 6 § i lydelse Lag (2026:712); BFS 2024:6, 2024:7, 2024:8, 2024:9 |
| Avfallshanteringsplan | ANTAGANDE: ej behövlig (PBL 10 kap. 8 a § sista st.) |
| Övriga fält | som 7.1 |

**Kontrollpunkter**

| # | Kontrollen avser | Krav (lagrum) | Kontrollant | Egenkontroll/sakkunnig | Metod | Mot vad | Dokumentation | När |
|---|---|---|---|---|---|---|---|---|
| 1 | Eldstad och skorsten har dokumenterade egenskaper | BFS 2024:7 1 kap. 7 och 18 §§ | B | Egenkontroll | Visuellt, märkning | Prestandadeklaration, CE-märkning | Prestandadeklaration | Vid leverans |
| 2 | Underlagets bärförmåga | BFS 2024:7 4 kap. 13 § | B/E | Egenkontroll | Visuellt | Tillverkarens anvisning, vikt | Signatur | Före montering |
| 3 | Genomföring i bjälklag och tak, avväxling | BFS 2024:6 1 kap. 12 och 18 §§; BFS 2024:7 4 kap. 19 § | B/E | Egenkontroll | Visuellt, mätning | Monteringsanvisning | Foto | Före igensättning |
| 4 | Avstånd till brännbart, yttemperatur | BFS 2024:7 4 kap. 8 och 14 §§ | B/E | Egenkontroll | Mätning | Monteringsanvisningens skyddsavstånd | Foto med mått | Efter montering, före inklädnad |
| 5 | Eldstadsplan i obrännbart material | BFS 2024:7 4 kap. 10 § | B/E | Egenkontroll | Mätning | 0,30 m fram, 0,10 m sidor (eller 0,20 m utanför öppningen) | Foto med mått | Efter montering |
| 6 | Förbränningsluft | BFS 2024:7 4 kap. 9 § | B/E | Egenkontroll | Visuellt | Monteringsanvisning | Signatur | Efter montering |
| 7 | Skorstenens mynning minst 1,0 m över taktäckningen | BFS 2024:7 4 kap. 16 § | B/E | Egenkontroll | Mätning | A-ritning, monteringsanvisning | Foto med mått | Efter montering |
| 8 | Förbränningsgaser förs inte tillbaka in | BFS 2024:8 9 kap. 4 § | B/E | Egenkontroll | Visuellt | A-ritning | Signatur | Efter montering |
| 9 | Täthet, rensning och inspektion | BFS 2024:7 4 kap. 17 och 21 §§; BFS 2024:9 2 kap. 38 § | Skorstensfejarmästare | Sakkunnig enligt kommunernas praxis (lagkrav ej läst) | Besiktning | Besiktningsprotokoll | Protokoll | Före första eldning |
| 10 | Takskyddsanordningar för sotaren | BFS 2024:9 2 kap. 15–21 §§ | B/E | Egenkontroll | Visuellt | Tillverkarens anvisning | Foto | Efter montering |
| 11 | Utfört enligt anmälan och startbesked | PBL 10 kap. 34 § 1 | B | Egenkontroll | Visuellt | Beslutshandlingar | Signatur | Före begäran om slutbesked |

**Anmälningar:** besiktningsprotokollet (rad 9) och signerad plan lämnas in inför slutbesked. **Arbetsplatsbesök:** ANTAGANDE "inga bedöms behövas".

Rader som testet kan låsa: 11 punkter; rad 7 hänvisar till BFS 2024:7 4 kap. 16 § och inte till BFS 2024:8 9 kap. 4 §; KA "krävs inte".

---

## 8. Att verifiera

1. **Ändringsförfattningar till BFS 2024:4–2024:13.** Paragrafnumren i avsnitt 4–7 är lästa i grundförfattningarna. Listan över ändringar på forfattningssamling.boverket.se gick inte att hämta. Stockholm hänvisar till "BFS 2025:9" för glassäkerhet, vilket tyder på minst en ändringsförfattning till BFS 2024:9. Varje paragraf ska stämmas av mot konsoliderad lydelse innan testet låses.
2. **Räcken på fristående altan.** BFS 2024:9 gäller byggnader (1 kap. 2 §) men 2 kap. 10 § nämner vistelseytor "i eller i anslutning till byggnader". BFS 2024:13 5 kap. om andra anläggningar tar inte upp altaner. Fråga Boverket eller läs PBL kunskapsbanken "Säkerhet vid användning".
3. **Skärmtak över altan:** tillbyggnad med lovplikt och KA-krav, eller del av altanen? Västerås kallar mallen "tillbyggnad altan".
4. **Lovfri tillbyggnad (fd attefallstillbyggnad):** utlöser den anmälan enligt PBF 6 kap. 1 § 2 (bärande delar) eller 3 (brandskydd)? Boverkets frågor och svar (K14) svarar bara för komplementbyggnader.
5. **Eldstadens utsläpp.** BBR 6:7412 hade gränsvärden; BFS 2024:8 9 kap. 3 § har inga tal. Om kraven nu följer av EU:s ekodesignförordning är inte läst i någon myndighetskälla.
6. **Skorstensfejarmästarens besiktning.** Alla fyra eldstadsmallar har den, men lagrummet (troligen lagen om skydd mot olyckor) är inte läst.
7. **Ålder på kommunfilerna.** Datum härledda ur Sitevision-adressernas tidsstämpel, egen räkning: D1 2021-09-27, H1 2022-04-25, SK2 2023-01-10, Västerås gamla exempel 2024-11-28, nya 2026-06-23, Hagfors utkast 2016-06-20. ANTAGANDE att siffran i adressen är uppladdningstid i millisekunder.
8. **Godtar kommunerna en egen utskrift?** Ingen läst källa säger nej, Stockholms formulering är oklar. Ring Stockholms stad och Västerås Bygglots innan sidan lovar det.
9. **PBL-ändring Lag (2026:746) och PBF-ändring Förordning (2026:1265)**, båda 1 jan 2027: innehållet inte läst. Rubriken "Kontrollplan" i PBF 7 kap. försvinner; generatorn kan behöva uppdateras till årsskiftet.
10. **BFS 2024:10 (buller) och BFS 2024:12 (tillgänglighet)** är inte lästa; Stockholms hänvisningar dit är okontrollerade.
11. **Hagfors mallar** gick inte att läsa (404).
12. **Obligatorisk sakkunnigkontroll:** vilka åtgärder Boverket föreskriver (PBL 10 kap. 8 § tredje st.) är inte läst. Påverkar bara om någon av generatorns åtgärder hamnar där.

---

## 9. Vad ettan saknar

Ettan är Västerås tomma mall (.docx), enligt `docs/SOKORDSANALYS.md` rad 201. Det vår sida kan ha som den saknar, med källan för varje påstående:

1. **Anmälningar och arbetsplatsbesök.** PBL 10 kap. 6 § 3–4 kräver dem; Västerås mall och alla nya Västerås-exempel saknar fälten (V2, V3, V5).
2. **Egenkontroll eller sakkunnig per rad** (PBL 10 kap. 8 §). Finns inte som kolumn i Västerås, Hallstahammar, Skellefteå.
3. **När och hur det dokumenteras**, som Boverket säger ska eller bör framgå (K3). Bara Göteborg och Uppsala har det.
4. **Rätt lagrum.** Västerås nya exempel pekar fel på minst fyra rader: altanens brandspridning till 5 kap. i stället för 6 kap. BFS 2024:7; rökkanalens mynning till BFS 2024:8 9 kap. 4 § i stället för BFS 2024:7 4 kap. 16 §; takskydd till 2 kap. 22 § (fasta arbetsställen); rivningens arbetsplatssäkerhet till BFS 2024:9 i stället för BFS 2024:4 (avsnitt 4).
5. **Mallens hjälptext säger fortfarande BBR och EKS** (V2, V3), fast BBR:s tekniska delar och hela EKS inte gäller nya ärenden sedan 1 juli 2026 (K9).
6. **Datumstyrt regelverk.** Samma fråga, "när kom ansökan in?", väljer rätt lydelse av 10:6, rätt BFS och rätt energiregler (avsnitt 5). Västerås delar bara i före/efter 1 juli 2026 och nämner inte energiövergången 1 oktober 2026.
7. **Avfallshanteringsplanen som egen plan** (PBL 10 kap. 8 a §). Ingen läst kommunmall har gjort uppdelningen.
8. **Attefall efter 1 december 2025.** Inget eget byggnadsärende längre, bara installationerna (K13). Stockholm har kvar "Nybyggnad av komplementbyggnad max 30 kvm" och "Mindre tillbyggnad max 15 kvm" bland BBR-exemplen (S1).
9. **Fungerar i alla kommuner.** Kommunmallarna har kommunens adress, e-tjänst och lokala riktlinjer (Skellefteås dagvattenstrategi, SK1).
10. **Frågar om KA.** Svarar direkt med PBF 7 kap. 5 § i stället för en lista med exempel.
11. **Punkter som ingen har:** förbränningsluft (BFS 2024:7 4 kap. 9 §) och taktäckning på skärmtak (5 kap. 50 §).
