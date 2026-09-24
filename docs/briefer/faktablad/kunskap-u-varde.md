# Faktablad: /el/u-varde/

Ny kunskapsartikel. Underlag också för räknaren /rakna/u-varde/. Allt hämtat 2026-09-22 om inget annat står. Egen räkning är märkt med formel.

- Huvudfras: "u värde" (590/mån). Bifras: "beräkna u värde" (110/mån).
- Sidtyp: kunskap, pelare el, samling kunskap. Inga produktkort, ingen köpknapp.
- Produkter med slug: inga.

## 1. Definition och enheter

| Storhet | Enhet | Källa |
|---|---|---|
| U-värde, värmegenomgångskoefficient | W/m²K | Energimyndigheten ET 2025:06, s. 7; ET 2025:01 (Fönster), s. 5 |
| Lambdavärde, värmekonduktivitet λ | W/mK | Energimyndigheten ET 2025:06, s. 7 |
| Värmemotstånd R | m²K/W | Svenskt Trä, Träguiden (KL-trä och värmeisolering) |

- Energimyndigheten: lägre lambdavärde eller U-värde betyder att konstruktionen isolerar bättre. U-värdet kan gälla en hel vägg, ett tak eller ett fönster.
- Fel i källa: Energimyndighetens fönsterguide ET 2025:01 s. 13 skriver att U-värdet anger "hur många kilowattimmar värme som passerar genom en kvadratmeter fönster per grad". Enheten är watt, inte kilowattimmar. Citera inte den meningen.

Källor:
- Energimyndigheten, Isolering. En guide från energi- och klimatrådgivningen, ET 2025:06 (2025), https://energimyndigheten.a-w2m.se/Arkitektkopia/GetTemplateResource/121?id=fd3d494afb2148e7ab08bae60c7d06a7&res=4cc33ab6dd69484ca99def154051181d&lr=False&fn=ET_2025_06_BQ_EPRO011_ISOLERING_ET_2025_06_A4_TA.pdf&elp=portal&elt=t&eloid=fd3d494afb2148e7ab08bae60c7d06a7
- Energimyndigheten, Fönster. En guide från energi- och klimatrådgivningen, ET 2025:01 (2025), https://energiochklimatradgivningen.se/download/18.5e9a579b195c021e865e6614/1742900645267/BQ_EPRO011_FO%CC%88NSTER_ET_2025_01_A4_TA.pdf

## 2. Formeln för U-värde (SS-EN ISO 6946)

```
R_skikt = d / λ              d i meter, λ i W/mK
R_T     = Rsi + Σ(d_i / λ_i) + Rse
U       = 1 / R_T            W/m²K
```

Källa till formeln: Svenskt Trä, Träguiden, "KL-trä och värmeisolering" (anger U = 1/R_T + ΔU_g + ΔU_f, beräkning enligt SS-EN ISO 6946), https://www.traguiden.se/konstruktion/kl-trakonstruktioner/kl-tra-och-varme-och-fukt/9.3-kl-tra-och-varmeisolering/kl-tra-och-varmeisolering/ . Samma formel i SLU, Christer Nilsson, föreläsning Byggnadsfysik värmelära, kurs TN0258 (2011), https://slunik.slu.se/kursfiler/TN0258/30276.1011/Byggfysik_Varmelara_forelasning_110316.pdf

- ΔU_g (luftspalter) och ΔU_f (mekaniska fästdon) är korrektionstermer i standarden. Räknaren kan sätta dem till 0, men sidan ska säga det.
- SLU-exemplet lägger på ΔU = 0,02 för en murad vägg (U 0,93 → Up 0,95).

### Övergångsmotstånd

| Byggnadsdel | Rsi, m²K/W | Rse, m²K/W |
|---|---|---|
| Vägg (horisontellt värmeflöde) | 0,13 | 0,04 |
| Tak (uppåt) | 0,10 | 0,04 |
| Golv (nedåt) | 0,17 | 0,04 |

Källa: Svenskt Trä, Träguiden (URL ovan), och SLU TN0258 s. "Värmeövergångsmotstånden". Båda säger att värdena kommer från SS-EN ISO 6946. Själva standarden är inte läst (betald).

- Isovers användarmanual för U-värdesberäknaren, https://www.isover.se/anvandarmanual-u-vardesberaknaren, gav 403. Inte läst.

### Fel formel hos konkurrenter (för sökanalysen)
- Sökmotorns sammanfattning för "beräkna u värde" visar 1/U = 1/U1 + 1/U2 + …, utan Rsi och Rse. Det är fel för en hel byggnadsdel: övergångsmotstånden fattas.
- gds.se (Marie Skøtt, 2022-10-29) säger att man räknar U-värdet "för de olika materialen var för sig". Det är fel. Det är R-värdena som adderas, och U = 1/R_T.

### Gränser att skriva ut på sidan och i räknaren
- Den enkla skiktformeln gäller homogena skikt. Reglar, takstolar och bjälkar (köldbryggor) räknas enligt SS-EN ISO 6946 med ett övre och ett undre gränsvärde. Källa: Isover-sökutdrag "U=1/(Rsi+∑di/λi+Rse)" och SLU. Metoden med övre och undre gränsvärde är inte hämtad i detalj här: **saknas**.
- Energimyndigheten ET 2025:06 s. 9: köldbryggor påverkar energianvändningen mer än man tror i en annars välisolerad byggnad.

## 3. Lambdavärden

### Isolermaterial, tillverkarens deklarerade värde (λD)

| Material | Produkt | λD, W/mK | Källa, datum |
|---|---|---|---|
| Stenull, skiva | Paroc eXtra | 0,036 | Paroc produktblad, uppdaterat 2023-06-12, via https://media.derome.se/medias/docus/137/PAROC-eXtra-sv-SE.pdf |
| Stenull, skiva | Rockwool Flexibatts | 0,037 | Rockwool, vind, https://www.rockwool.com/se/produkter-och-konstruktioner/takisolering/vind/ |
| Stenull, lösull maskinblåst 25 kg/m³ | Rockwool Granulate Pro Plus | 0,041 | Rockwool, samma sida |
| Stenull, lösull maskinblåst 30 kg/m³ | Rockwool Granulate Pro Plus | 0,038 | Rockwool, samma sida |
| Stenull, lösull handutlagd ≥ 42 kg/m³ | Rockwool Vindsull | 0,042 | Bauhaus produktdata, https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg (butik, spec) |
| Glasull, lösull handutlagd 43 kg/m³ | Isover Easy FyllUpp | 0,045 | Byggkatalogen, https://byggkatalogen.byggtjanst.se/produkt/byggmaterial/isolering/losfyllnadsisolering-drev/isover-easy-fyllupp-losfyllnadsisolering/17202 |
| Cellplast EPS | Sundolitt S80 | 0,038 (lambdaklass 38) | Sundolitt, https://www.sundolitt.se/product/s80--3040?code=3040 |
| PIR | Kingspan Therma TW55 | 0,022 | Kingspan, https://www.insulation.kingspan.com/se/sv/produkter/isoleringsskivor/vaggisoleringsskivor/therma-tw55 |
| Cellulosa, lösull | Ekofiber Vind | 0,040 | sökutdrag ur Ekofibers produktblad (isabisolering.se, 2010). Byggkatalogen anger produkten som utgången. **Tillverkarens aktuella datablad saknas.** |

### Ungefärliga spann, myndighet

Energimyndigheten ET 2025:06, Tabell 1, s. 7, "Ungefärliga lambda-värden (W/mK) för olika isoleringsmaterial":

| Isoleringsmaterial | Ungefärligt lambda-värde, W/mK |
|---|---|
| Stenull | 0,035–0,045 |
| Glasull | 0,032–0,040 |
| Cellplast (EPS) | 0,035–0,038 |
| Cellplast (XPS) | 0,030–0,036 |
| Cellulosa | 0,037–0,040 |
| Träfiber | 0,038–0,045 |
| PUR | 0,022–0,028 |
| PIR | 0,021–0,026 |

### Byggmaterial

| Material | λ, W/mK | Källa | Anmärkning |
|---|---|---|---|
| Trä, gran/furu vid 12 % fukt | 0,10–0,12 (torr); 0,13–0,14 används i praktiken | Svenskt Trä, Träguiden (URL ovan) | Träguidens tabell: KL-trä 0,13, trä 0,14 |
| Trä 500 kg/m³ | 0,13 (designvärde enligt SS-EN 12524) | sökutdrag ur Träguiden, "Värmeegenskaper", https://www.traguiden.se/om-tra/materialet-tra/traets-egenskaper-och-kvalitet/termiska-egenskaper1/varmeegenskaper/ | Sidan inte läst i helhet |
| Gips | 0,24 | Träguiden (URL ovan) | |
| Betong | 1,7 | Träguiden; Rockwool vind ("200 mm armerad betong, λ 1,7 W/mK") | |
| Lättbetong 400 / 500 / 600 kg/m³, torr | 0,09 / 0,12 / 0,15 | Betongföreningen, Fråga experten, Oskar Esping (Thomas Betong), https://betongforeningen.se/fraga_experten/2307-2/ (odaterad) | |
| Lättbetong, fuktkorrigerat | 0,10 / 0,14 / 0,17 | samma | Esping rekommenderar de fuktkorrigerade värdena |
| Lättbetong, Ytong PP2-0,35 | 0,09 | Xella Tyskland, https://www.xella.de/de_DE/produkte/ytong-therm-standard (sökutdrag, tysk produkt) | Xella Sveriges datablad nåddes inte (xella.se/ytong gav tom sida) |
| Tegel | **saknas** | – | Inget tillverkardatablad hittat. Sökutdrag säger "cirka 0,6", utan källa. Skriv inte ett tal |

- Relativ jämförelse: lika isolerförmåga har 100 mm mineralull, 100 mm cellplast, 200 mm sågspån, 300 mm trä, 400 mm lättbetong, 425 mm lättklinkerbetong, 1 750 mm tegel och 3 100 mm betong. Källa: SLU TN0258 (2011), bild "Värmeisoleringsförmåga". Ingen primärkälla anges.

## 4. Boverkets krav

### Gäller till och med 30 september 2026: BBR avsnitt 9 (BFS 2011:6 i lydelse BFS 2020:4, BBR 29; omtryck BFS 2024:14, BBR 31)

**Obs till beställaren:** Talen vägg 0,18, tak 0,13, golv 0,15 och fönster 1,2 är **inte** krav på nya småhus. De står i BBR 9:92, tabell 9:92, "Värmegenomgångskoefficient som ska eftersträvas för enskilda byggnadsdelar", och gäller vid **ändring** av en byggnad som efter ändringen inte klarar primärenergikravet i 9:2. Ett nytt småhus har ett krav på genomsnittligt U-värde för hela klimatskärmen (Um), inte krav per byggnadsdel.

BBR tabell 9:2a (bostäder), BFS 2020:4 s. 6, samma värden i BFS 2024:14:

| Småhus, Atemp | Primärenergital EPpet, kWh/m²/år | Um, W/m²K | Luftläckage vid 50 Pa |
|---|---|---|---|
| > 130 m² | 90 | 0,30 | enligt 9:26 |
| > 90–130 m² | 95 | 0,30 | enligt 9:26 |
| > 50–90 m² | 100 | 0,30 | enligt 9:26 |
| ≤ 50 m² | inget krav | 0,33 | 0,6 l/s m² |

BBR tabell 9:92 (ändring av byggnad), BFS 2020:4 s. 10; samma i BFS 2024:14 (BBR 31), avsnitt 9:92:

| Byggnadsdel | Ui, W/m²K, ska eftersträvas |
|---|---|
| Tak | 0,13 |
| Vägg | 0,18 |
| Golv | 0,15 |
| Fönster | 1,2 |
| Ytterdörr | 1,2 |

- Allmänt råd till 9:92: enkla åtgärder kan vara tätning eller komplettering av fönster och dörrar och tilläggsisolering av vindsbjälklag. Vid tilläggsisolering förändras kondensationspunkten i konstruktionen (hänvisning till 6:92 och 6:95).
- Um är definierat i BBR 1:6 som genomsnittlig värmegenomgångskoefficient för byggnadsdelar och köldbryggor, bestämd enligt SS-EN ISO 13789:2017 och SS 24230. Formeln är en bild i PDF:en. Variablerna som står i texten är Ui och Ai per byggnadsdel, ψk och lk för linjära köldbryggor, χj för punktformiga köldbryggor och Aom. Formeln: Um = (Σ Ui·Ai + Σ ψk·lk + Σ χj) / Aom. **Formelbilden är inte läst ordagrant.**
- Um-kravet för småhus skärptes från 0,40 till 0,30 den 1 september 2020. Källa: Boverkets remiss BFS 20xx:A26, februari 2026, avsnitt 5 (se nedan).

Källor:
- BFS 2020:4 (BBR 29), https://rinfo.boverket.se/BFS2011-6/pdf/BFS2020-4.pdf
- BFS 2024:14 (BBR 31, omtryck, beslutad 2024-11-19), https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf

### Gäller från 1 oktober 2026: BFS 2026:9

Boverkets föreskrifter om energihushållning och värmeisolering i byggnader, BFS 2026:9. Beslutad 2026-08-25, utkom från trycket 2026-08-26, träder i kraft 2026-10-01. Upphäver BBR (BFS 2011:6). https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf ; förteckning https://forfattningssamling.boverket.se/detaljer/BFS2026-9 (gav tom sida vid läsning)

Övergångsbestämmelser (punkt 3–4). BBR får fortfarande tillämpas på arbeten
- som kräver bygglov, om ansökan kommer in före 2027-10-01
- som kräver anmälan, om anmälan kommer in före 2027-10-01
- som varken kräver lov eller anmälan, om de påbörjas före 2027-10-01
- Villkor: alla äldre bestämmelser ska då tillämpas samtidigt.
- Pressmeddelandet 2026-08-28 skriver övergångstiden som "till och med 30 september 2027". https://via.tt.se/pressmeddelande/4517817/nya-krav-pa-energihushallning-och-energideklarationer-beslutade?publisherId=3236499&lang=sv

Bilaga 2, tabell 4, Högsta tillåtna Um:

| Byggnadskategori | Um, W/m²K |
|---|---|
| En- och tvåbostadshus i ett plan | 0,30 |
| En- och tvåbostadshus i mer än ett plan | 0,40 |
| Flerbostadshus | 0,40 |
| Lokaler | 0,50 |

Bilaga 2, tabell 6, Högsta tillåtna U för enskilda byggnadsdelar i klimatskärmen (gäller vid ändring, 3 kap. 1 § tredje stycket):

| Byggnadsdel | U, W/m²K |
|---|---|
| Tak | 0,13 |
| Vägg | 0,18 |
| Golv | 0,15 |
| Fönster | 1,1 |
| Ytterdörr | 1,1 |

Detta ändras jämfört med BBR, punkt för punkt:
- Småhus i ett plan: Um 0,30, som i BBR. Småhus i mer än ett plan: Um 0,40, en lättnad jämfört med BBR:s 0,30. Källa: tabell 4; Boverkets remiss förklarar att nivån infördes för timmerhus i flera plan.
- Den särskilda nivån Um 0,33 för småhus på högst 50 m² finns inte i tabell 4. **Oklart** om småhus på högst 50 m² har någon egen regel någon annanstans i BFS 2026:9. Inte hittat.
- Fönster och ytterdörr vid ändring: 1,2 blir 1,1. Formuleringen "ska eftersträvas" blir "högsta tillåtna". Klarar den ändrade delen tabell 6 anses Um-kravet uppfyllt (3 kap. 1 §).
- Primärenergital (EPpet) ersätts av energiprestandatal (Etal). Installerad eleffekt ersätts av specifik eleffektanvändning (Pel).
- Um beräknas enligt 1 kap. 14 § genom att summan av transmissionsförlusterna genom klimatskärmens alla delar, inklusive köldbryggor, divideras med klimatskärmens totala invändiga area.
- 3 kap. 1 §: kraven vid ändring får anpassas, bland annat om kostnaden är oskäligt hög i förhållande till nyttan, om energihushållningen bara blir försumbart bättre, eller av tekniska skäl eller kulturvärden.
- Sökutdrag (utan känd källa) påstod att Um-kravet har skärpts för småhus. Tabell 4 visar inte det för småhus i ett plan. Skriv inte att kravet skärpts.

Remissen: Boverket, Remiss: Boverkets förslag till föreskrifter om energihushållning, BFS 20xx:A26, februari 2026, dnr 243/2025, https://www.boverket.se/contentassets/9d2ec14d53874334b1f2ddd0b96b9a90/boverkets-forslag-till-foreskrifter-om-energihushallning_bfs-20xx_a26.pdf

Sekundärkälla som stämmer med föreskriften: Bygglovstjänst (firma), "Boverkets byggregler 2026", uppdaterad 2026-09-08, https://www.bygglovstjanst.se/boverkets-byggregler/. BBR ersattes den 1 juli 2025 av bland annat BFS 2024:8 (hygien, hälsa och miljö) och BFS 2024:9 (säkerhet vid användning), med övergång till 2026-06-30. Energikraven låg kvar i BBR till 2026-10-01.

## 5. Typiska U-värden i befintliga hus

### Ursprungliga värden, Energimyndigheten

Energimyndigheten ET 2025:06, s. 11. "Om man inte vet hur byggnadens konstruktion ser ut kan man räkna med genomsnittliga U-värden för ytterväggar och vindsbjälklag i småhus uppförda under olika år."

| Byggår | Yttervägg, W/m²K | Vindsbjälklag, W/m²K |
|---|---|---|
| 1920 (första raden, troligen till och med 1920) | 0,9 | 0,5 |
| 1921–1940 | 0,85 | 0,5 |
| 1941–1960 | 0,6 | 0,45 |
| 1961–1980 | 0,4 | 0,3 |
| 1981–2000 | 0,30 | 0,20 |
| 2001–2016 | 0,25 | 0,13 (raden heter 2001–) |
| 2017– | 0,18 | – |

- Golv och fönster per byggår finns inte i ET 2025:06.

Väggtyper med U-värde, ET 2025:06 s. 10:

| Väggtyp | Förekommer | U, W/m²K |
|---|---|---|
| Resvirkesvägg och plankvägg | 1800–1945 | 1,30–0,80 |
| Murverk av gasbetong, 20–30 cm | från 1935 | 0,90–0,75 |
| Resvirkes- och regelverksvägg, sågspån/torvmull | 1900–1955 | 0,6–0,5 |
| Plankvägg isolerad med mineralull | 1945–1960 | 0,55–0,50 |
| Tegelvägg isolerad med mineralull, 100–120 mm | från 1950 | 0,42–0,30 |
| Mineralullsisolerad regelverksvägg, 100–125 mm | från 1950 | 0,38–0,30 |

### Uppmätta värden, Boverket BETSI (inventering 2007–2008)

Boverket, Energi i bebyggelsen – tekniska egenskaper och beräkningar (BETSI), december 2010, ISBN 978-91-86559-84-7, Bilaga 2, tabell 4, 8, 24, 28, 40, https://www.boverket.se/globalassets/publikationer/dokument/2011/betsi-energi-i-bebyggelsen.pdf

Genomsnittligt U-värde för småhus, W/m²K:

| Byggår | Vindsbjälklag | Yttervägg | Platta på mark/källargolv | Krypgrundsbjälklag | Fönster |
|---|---|---|---|---|---|
| till 1960 | 0,29 | 0,47 | 0,28 | 0,30 | 2,34 |
| 1961–1975 | 0,21 | 0,31 | 0,32 | 0,26 | 2,30 |
| 1976–1985 | 0,15 | 0,21 | 0,27 | 0,17 | 2,01 |
| 1986–1995 | 0,12 | 0,17 | 0,24 | 0,16 | 1,94 |
| 1996–2005 | 0,12 | 0,20 | 0,18 | 0,15 | 1,87 |
| Alla småhus | 0,22 | 0,36 | 0,29 | 0,26 | 2,23 |

- Konfidensintervallen står i rapporten, till exempel yttervägg före 1960 ± 0,15.
- Tabellerna är avlästa ur en PDF där kolumnerna ligger förskjutna. Totalerna stämmer med rapportens text: vind 0,22, vägg 0,36, platta 0,29, krypgrund 0,26, fönster 2,23. Enskilda celler bör kontrolleras mot originalet före publicering.
- Energimyndighetens tabell och BETSI mäter olika saker. Energimyndigheten anger vad huset hade när det var nytt. BETSI anger vad husen hade vid inventeringen 2007–2008. BETSI skriver att många äldre vindsbjälklag "förmodligen" hade tilläggsisolerats, därför 0,29 mot 0,5. Använd Energimyndighetens tabell för ursprungsläget och BETSI för dagens genomsnitt. Blanda inte ihop dem.
- Platta på mark: U-värdet beror på plattans storlek. BETSI: 0,20 till 1,48 W/m²K mellan de minsta och största plattorna.

### Fönster efter typ, Energimyndigheten

ET 2025:01, Tabell 1, s. 5:

| Fönstertyp | Typiskt U-värde, W/m²K |
|---|---|
| Enkelt glas | 5,0–6,0 |
| Tvåglasfönster (standard) | 2,8–3,0 |
| Tvåglasfönster (lågemissionsglas) | 1,7–2,0 |
| Treglasfönster (standard) | 1,4–1,8 |
| Treglasfönster (lågemissionsglas) | 0,8–1,2 |
| Treglasfönster (energifönster) | 0,6–0,9 |

- ET 2025:01 s. 13: ett nytt fönster bör ha U lägre än 1,0 W/m²K.
- ET 2025:01 s. 11, åtgärder på befintliga fönster: ersatt innerglas med 4 mm hårdbelagt energiglas ger ned till 1,8. Ny 2-glas isolerruta med energiglas, varm kant och argon ger ned till 1,4. Komplettering med invändigt belagt energiglas ger ned till 1,4. Ny dubbel isolerruta med mjukbelagt energiglas och argon ger ned till 1,3.
- Konkurrenten Era Fönster skriver "EU:s nya krav på energifönster är ett u-värde på 1,0". Den uppgiften saknar källa. Inget EU-krav är hittat. Använd den inte.

## 6. Värmeförlust per år

```
Q [kWh/år]            = U × A × Gt / 1000
Besparing [kWh/år]    = (U_före − U_efter) × A × Gt / 1000
Besparing [kr/år]     = Besparing [kWh/år] × elpris [kr/kWh]
Återbetalningstid [år] = investering [kr] / besparing [kr/år]
```

- U i W/m²K, A i m², Gt = gradtimmar i °Ch/år (Kh).
- Källa till besparingsformeln: Bygg & teknik 3/24, Marcus Dahlin, https://byggteknikforlaget.se/och-svarar-3-24/ . Samma formel i /grund/isolera-krypgrund/: "U-värdets minskning gånger arean gånger gradtimmarna, delat med 1 000". Dahlins tumregel: 100 000 gradtimmar för de flesta byggnader på de flesta platser i Sverige (enligt sajtens krypgrundsguide; artikeln inte omläst i dag).
- Kontroll mot Rockwool (egen räkning): (0,184 − 0,078) × 89 280 / 1000 = 9,46 kWh/m² och år. Rockwool anger 9,46. Formeln återskapar Rockwools tabell.
- Gradtimmemetoden: värmebehovet = förlustfaktor × gradtimmar. Gradtimmar är integralen av (gränstemperatur − utetemperatur) över året. Gränstemperaturen i äldre bostäder är 17 °C. I nyare, välisolerade hus kan den ligga mycket lägre. Källa: Ulf Aronsson, Beräkning av byggnaders energiprestanda med anledning av energideklarationerna, examensarbete LTH, mars 2006, s. 25–26, https://www.lth.se/fileadmin/ees/Publikationer/2006/5091.pdf , med hänvisning till Lars Jensen, LTH, "Värmebehovsberäkning" (tidigare http://www.hvac.lth.se/pdf/varmebeh.pdf, adressen skickar numera vidare till buildtech.lth.se utan dokumentet).
- Förenklad variant hos Energimyndigheten, ET 2025:01 s. 13: Q = A × U × (21 − 8) × 8760 / 1000. För ett fönster på 1,5 m² med U 1,0 blir det cirka 170 kWh/år. Det motsvarar 113 880 gradtimmar. Metoden räknar med hela året och drar inte av gratisvärme, så den ger högre tal än gradtimmemetoden. Skriv båda och säg att gradtimmemetoden väger tyngre för en besparingskalkyl.
- Gräns: formeln ger värmeförlusten, inte vad elmätaren visar. Energimyndigheten, ET 2025:06 s. 13: energianvändningen minskar inte nödvändigtvis bara för att byggnaden tilläggsisoleras. Om värmetillförseln inte sänks blir resultatet bara högre inomhustemperatur.
- Gräns, eget antagande: kronor = kWh × elpris gäller direktverkande el. Med värmepump, fjärrvärme eller ved blir kronorna andra. Ingen källa hämtad för värmepumpens verkningsgrad. **Saknas** om räknaren ska ta hänsyn till det.

### Gradtimmar, jämförelse av källor

| Källa | Gt, °Ch/år | Gäller |
|---|---|---|
| Rockwool, vindsida: 3 720 graddagar × 24 | 89 280 | "Mellansverige, Örebro – Västerås – Uppsala", normalår (period ej angiven) |
| Boverket BETSI 2010, s. 20: 3 734 graddagar, befolkningsviktat kommunsnitt, × 24 | 89 616 | hela Sverige, befolkningsviktat |
| Bygg & teknik 3/24, Dahlin (via sajtens krypgrundsguide) | 100 000 | tumregel, "de flesta byggnader på de flesta platser" |
| Energimyndigheten ET 2025:01 (21 − 8) × 8760 | 113 880 | mellersta Sverige, förenklad |

- Graddagar enligt SMHI: bastemperatur +17 °C, med lägre gräns april till oktober (april 12, maj–juli 10, augusti 11, september 12, oktober 13). Källa: Wikipedia "Graddagar" som hänvisar till SMHI:s faktablad, https://sv.wikipedia.org/wiki/Graddagar . SMHI:s eget faktablad är inte läst. Normalt år i Sverige: 3 100–4 000 graddagar, Malmö mildaste år 2 200, Kiruna kallaste år 6 600 (samma källa).
- SMHI bytte normalperiod för SMHI Graddagar från 1981–2010 till 1991–2020 vid årsskiftet 2021/2022. Uppvärmningsbehovet minskade i hela landet med 1–6 procent. https://www.smhi.se/nyheter/nyheter/2022-03-03-ny-normalperiod-for-smhi-graddagar-smhi-energi-index-och-smhi-kyl-index
- **SMHI:s normalårsgraddagar per ort är inte fritt publicerade** (SMHI Energi-Index och Graddagar är en betaltjänst). Därför egen räkning nedan.

### Gradtimmar per ort, egen räkning ur SMHI 1991–2020

Indata: SMHI, Normal månadstemperatur 1991–2020, Excel sammanställd 2021-06-04, https://www.smhi.se/download/18.18f5a56618fc9f08e8313e96/1741337300232/Normal-temp-1991-2020.xlsx , via https://www.smhi.se/data/temperatur-och-vind/temperatur/dataserier-med-normalvarden-for-perioden-1991-2020

Formel (egen räkning): Gt = Σ över månaderna av max(0, Tg − T_mån) × dagar i månaden × 24. Februari räknas som 28,25 dagar. Tg = gränstemperatur.

| Ort (SMHI-station, klimatnr) | Årsmedel °C | Gt vid Tg 17 | Gt vid Tg 20 | Gt vid Tg 21 |
|---|---|---|---|---|
| Stockholm (Stockholm, 98210) | 7,9 | 81 357 | 105 871 | 114 637 |
| Göteborg (Göteborg A, 71420) | 8,9 | 72 277 | 97 144 | 105 910 |
| Malmö (Malmö A, 52350) | 9,1 | 70 437 | 95 222 | 103 988 |
| Sundsvall (Sundsvalls Flygplats, 127310) | 4,4 | 110 322 | 136 620 | 145 386 |
| Luleå (Luleå Flygplats, 162860) | 2,9 | 123 231 | 149 529 | 158 295 |

Månadsnormaler som använts, °C (jan … dec):
- Stockholm: −1,0 −1,0 1,6 6,3 11,4 15,7 18,7 17,7 13,1 7,7 3,6 0,6
- Göteborg A: 0,8 0,7 3,0 7,7 12,4 15,7 18,3 17,7 14,0 9,0 5,1 2,1
- Malmö A: 1,2 1,2 3,3 7,7 12,3 15,7 18,2 17,9 14,2 9,5 5,5 2,6
- Sundsvalls Flygplats: −5,9 −5,8 −1,6 3,1 8,5 13,3 16,3 15,0 10,3 4,2 −0,6 −4,3
- Luleå Flygplats: −8,5 −8,8 −4,2 1,0 7,2 13,1 16,3 14,6 9,5 2,9 −2,5 −6,1

Gränser för tabellen:
- Månadsmedel jämnar ut kalla dygn under vår och höst. Metoden ger något för få gradtimmar.
- Kontroll mot Jensens tabell (LTH, via Aronsson 2006, tabell 2.9), interpolerad vid Tg 17 med SMHI:s årsmedel: Stockholm 83 570, Sundsvall 113 360, Luleå 126 270. Månadsmetoden ligger 2–3 procent lägre. Göteborg och Malmö ligger utanför Jensens tabell (högst 8 °C).
- Jensen använder normalårstemperatur som median, inte medel, och en äldre normalperiod. Hans egna ortsvärden: Malmö 8,0, Göteborg 7,9, Stockholm 6,6, Luleå 3,0, Umeå 3,4 °C. Sundsvall saknas.
- Månadsmetoden för Stockholm (81 357) ligger 9 procent under Rockwools Mellansverige (89 280). Rockwool anger inte normalperiod. Talet avser Örebro–Västerås–Uppsala.

### Jensens gradtimmetabell, rader Tg 15–21

Källa: Aronsson 2006, tabell 2.9, efter Jensen. Tabellen är **rekonstruerad ur ett trasigt textlager i PDF:en**. Varje rad ökar jämnt från kolumn till kolumn, men raderna ska kontrolleras mot sidan 26 i originalet innan de används.

| Tg \ Tun | −2 | −1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 21 | 204 100 | 194 600 | 185 700 | 176 600 | 167 500 | 158 600 | 149 700 | 140 800 | 131 600 | 123 000 | 113 600 |
| 20 | 195 500 | 186 100 | 177 200 | 168 100 | 159 000 | 150 100 | 141 300 | 132 400 | 123 300 | 114 800 | 105 500 |
| 19 | 187 000 | 177 600 | 168 700 | 159 700 | 150 600 | 141 800 | 133 000 | 124 200 | 115 200 | 106 700 | 97 600 |
| 18 | 178 500 | 169 200 | 160 300 | 151 300 | 142 300 | 133 600 | 124 900 | 116 100 | 107 200 | 98 900 | 90 000 |
| 17 | 170 100 | 160 800 | 152 000 | 143 100 | 134 100 | 125 400 | 116 800 | 108 200 | 99 500 | 91 400 | 82 700 |
| 16 | 161 700 | 152 500 | 143 800 | 135 000 | 126 100 | 117 500 | 109 000 | 100 500 | 92 000 | 84 200 | 75 700 |
| 15 | 153 500 | 144 300 | 135 700 | 127 000 | 118 200 | 109 700 | 101 400 | 93 200 | 84 900 | 77 200 | 69 000 |

## 7. Elpris

Samma tal och källa som src/lib/antaganden.ts:
- ELPRIS_KR_PER_KWH = 2,40 kr/kWh
- Källa: SCB, Priser på elenergi och på överföring av el, https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris
- Period: juli till december 2025
- Omfattar: hushåll med 5 000 till 14 999 kWh per år, inklusive elhandel, nätavgift, energiskatt och moms
- Räknaren ska läsa talet från antaganden.ts, inte skriva in 2,40 själv.

## 8. Räkneexempel: vindsbjälklag 100 m², 200 → 500 mm, Stockholm

Förutsättningar:
- 200 mm befintlig mineralull och 300 mm ny lösull, Rockwool Granulate Pro Plus 25 kg/m³, λ 0,041
- Befintlig konstruktion enligt Rockwool: takstolar 45×145 cc 1200, isolering, glespanel 28×70 cc 300, 13 mm gips

| Steg | Värde | Källa / formel |
|---|---|---|
| U före | 0,184 W/m²K | Rockwool, tilläggsisoleringstabell, 25 kg/m³, raden "trä med mineralull 200" |
| U efter (+300 mm) | 0,078 W/m²K | samma |
| ΔU | 0,106 | egen räkning, 0,184 − 0,078 |
| Gt Stockholm, Tg 17 | 81 357 °Ch | egen räkning, avsnitt 6 |
| Besparing | 862 kWh/år | egen räkning, 0,106 × 100 × 81 357 / 1000 = 862,4 |
| Besparing i kronor | 2 070 kr/år | egen räkning, 862,4 × 2,40 = 2 069,7 |
| Samma med Rockwools Gt 89 280 | 946 kWh/år, 2 271 kr/år | egen räkning, 0,106 × 100 × 89 280 / 1000 = 946,4; × 2,40 = 2 271 |
| Samma med BETSI:s Gt 89 616 | 950 kWh/år, 2 280 kr/år | egen räkning |

Materialpris, själv med handutlagd Rockwool Vindsull:
- Pris: 19,95 kr/kg, 20 kg/säck, säljs på nätet i förpackning om 12 säckar för 4 788 kr. Källa: Bauhaus, https://www.bauhaus.se/losull-rockwool-roxull-vindsull-20kg , hämtat 2026-09-22 (samma pris som 2026-09-20 i vindguiden).
- Densitet, handutlagd: minst 42 kg/m³ (Bauhaus produktdata).
- Åtgång: 100 m² × 0,30 m × 42 kg/m³ = 1 260 kg = 63 säckar (egen räkning).
- Kostnad för exakt åtgång: 1 260 × 19,95 = 25 137 kr (egen räkning).
- Kostnad i hela förpackningar: 6 × 12 säckar = 72 säckar = 28 728 kr (egen räkning).
- Handutlagd Vindsull har λ 0,042 och maskinblåst Granulate 0,041. Med 0,042 blir U efter en aning högre än 0,078. Skillnaden är inte räknad med Rockwools metod. Eget antagande: skillnaden är försumbar.

Återbetalningstid (egen räkning, enkel, utan ränta och prisändring):

| Investering | Mot 2 070 kr/år (Stockholm, månadsmetoden) | Mot 2 271 kr/år (Rockwool Gt) |
|---|---|---|
| 25 137 kr, material, exakt åtgång | 12,1 år | 11,1 år |
| 28 728 kr, material, hela förpackningar | 13,9 år | 12,6 år |
| 15 000 kr, firma, 150 kr/m² | 7,2 år | 6,6 år |
| 50 000 kr, firma, 500 kr/m² | 24,2 år | 22,0 år |

Firmapriset: Helsingborgs stad, energi- och klimatrådgivningen, 150–500 kr/m² för tilläggsisolering av vindsbjälklag, uppdaterad 2021-10-01, https://helsingborg.se/bo-bygga-och-miljo/energi-och-klimatradgivning/vad-kostar-det-att-isolera-vinden/ (från vindguidens källista, inte omläst i dag). Rotavdraget på arbetskostnaden är inte medräknat.

Egen kontroll med skiktformeln (homogen, utan takstolar):
- Antaganden: gammal ull λ 0,037, ny lösull λ 0,041, gips λ 0,24 (Träguiden), Rsi 0,10 och Rse 0,04 (tak)
- Före: R = 0,10 + 0,013/0,24 + 0,200/0,037 + 0,04 = 0,10 + 0,054 + 5,405 + 0,04 = 5,599 → U = 0,179
- Efter: R = 5,599 + 0,300/0,041 = 5,599 + 7,317 = 12,916 → U = 0,0774
- Rockwools 0,184 och 0,078 ligger strax över, vilket stämmer med att takstolarna är köldbryggor. Rockwool anger inte vilka Rsi och Rse de räknat med. Om vinden ska räknas med Rse 0,04 eller med ett eget värmemotstånd för vindsutrymmet är **inte kontrollerat** mot standarden.

## 9. Avvikelser mot /el/tillaggsisolera-vind/

Kontrollerat mot src/content/guider/el/tillaggsisolera-vind.mdx.

Stämmer:
- Rockwools tabell (25 kg/m³): kutterspån 0,625 → 0,113, 45,7; mineralull 100 0,357 → 0,099, 23,0; 150 0,249 → 0,087, 14,5; 200 0,184 → 0,078, 9,5. Rockwool skriver 45,71, 23,03, 14,46, 9,46, och guiden avrundar till en decimal.
- 3 720 graddagar, Mellansverige, ger 89 280. Regionjusteringen −20 respektive +35 procent stämmer.
- Lambda: Flexibatts 0,037, Granulate 0,041 vid 25 kg/m³.
- Energimyndighetens vindtabell per byggår stämmer med ET 2025:06 tabell 2. Tumregeln 40 cm och meningen om att sänka värmen efteråt stämmer också.
- Bauhaus 19,95 kr/kg, tolv säckar, 4 788 kr, minst 42 kg/m³.
- 200 mm-exemplet: 950 kWh, drygt 2 200 kr, 7–22 års återbetalning stämmer med raden ovan (946 kWh och 2 271 kr oavrundat).

Avviker eller behöver beslut:
- **Två gradtimmetal på sajten.** Vindguiden räknar med 89 280 (Rockwool). Krypgrundsguiden räknar med 100 000 (Bygg & teknik-tumregeln). Räknaren behöver ett av dem, eller ett ortsval. Skillnaden är 12 procent.
- Rockwools sida har en andra tabell för 30 kg/m³ (λ 0,038). Där ger 200 + 300 mm U 0,075 och 9,73 kWh/m². Vindguiden nämner bara 25 kg/m³. Det är korrekt men ofullständigt.
- Rockwools tabell har tryckfel: "0,0,89" och "0,8" ska vara 0,089 och 0,080 (egen räkning: 0,357 − 24,73/89,28 = 0,080). Guiden använder inte de cellerna.
- Energimyndighetens första rad heter "1920" i källan. Guiden skriver "till 1920". Tolkningen är rimlig, men källan säger det inte.
- Vindguiden säger att handkrattad och maskinblåst lösull ger "samma U-värde". Lambda skiljer 0,042 (Vindsull) mot 0,041 (Granulate 25 kg). Nästan samma, inte identiskt.
- Vindguidens faktablad säger "sextio procent så mycket ull" och guiden "drygt hälften": 7,5 / 12,6 = 0,595. Båda stämmer.
- Vindguiden nämner inte BBR 9:92, där tak 0,13 ska eftersträvas vid ändring. U 0,078 efter 500 mm klarar det, U 0,184 före gör det inte.

## 10. Interna länkar som ska finnas

- /el/tillaggsisolera-vind/ (räkneexemplet och Rockwools tabell)
- /grund/isolera-krypgrund/ (samma formel, golv, Rsi 0,17)
- /grund/isolera-kallarvagg/ (Rockwools U-tabell för källarvägg, daggpunkt)
- /rakna/elkostnad/ (kWh till kronor med eget elpris)
- /rakna/daggpunkt/ (kondens när isoleringen flyttar temperaturfallet)
- /rakna/u-varde/ när räknaren finns

## 11. Sökanalys

Sökmotorn är WebSearch 2026-09-22, en amerikansk söktjänst, inte google.se. Ordningen kan skilja sig från Google.

### "u värde"

1. isover.se/isover-u-vardesberaknaren (403, bara utdrag): nedladdningsbar räknare för proffs. Har ingen förklaring för husägare, inga kronor och inga krav. Frågan läsaren har kvar: vad betyder talet för mitt hus?
2. passivhuscentrum.se/u-varde (404, bara utdrag): nyproducerad vägg 0,10–0,20, fönster 1,2 kallas energieffektivt, "EU:s nya krav 1,0". EU-kravet har ingen källa och stämmer inte med något vi hittat. Sidan saknar formel med Rsi/Rse.
3. dimensionera.se/energi/u-varde.php: skiktkalkylator med lambdalista och Ri/Ry per riktning. Formeln är en bild. Saknar köldbryggor, BBR, kWh, kronor och datum.
4. ekstrands.com/en/about-us/what-is-u-value: engelsk dörrtillverkarsida. "Gamla hus omkring 1,0–1,3", passivhus under 0,80. Saknar formel, krav och datum.
5. erafonster.se/nyheter/u-varde: fönstertillverkare. 2-glas från sjuttiotalet 2,5–3,0, "bör ligga på 1,2 eller lägre", egen produkt 0,88, "EU:s nya krav 1,0" utan källa. Saknar datum, räkneexempel och kronor. Missar att fönsterkravet vid ändring blir 1,1 från 2026-10-01.

Frågor som ingen av de fem besvarar: vad mitt hus har efter byggåret; hur mycket värme en byggnadsdel släpper ut per år och vad det kostar; vad Boverket kräver vid nybygge respektive ändring, och vad som ändras 1 oktober 2026.

### "beräkna u värde"

- Isover-räknaren (403), Recticel, gds.se, Rockwool Energiberäkning, dimensionera.se, Dryft, energiberakning.se (Um), Konstruktionshjälpen.
- gds.se (Marie Skøtt, 2022-10-29) saknar formel, Rsi/Rse och räkneexempel, och anvisningen att räkna U per material är fel.
- Sökmotorns sammanfattning visar formeln 1/U = Σ 1/Ui utan övergångsmotstånd. Formeln är fel.
- Varken Isover eller Rockwool svarar i kronor per år för en viss ort.

### Det vår sida kan ha som ettan saknar

- Formeln med Rsi och Rse per riktning och ett helt räkneexempel skikt för skikt
- Gällande krav och kraven från 1 oktober 2026 (BFS 2026:9) med övergång till 2027-10-01, och skillnaden mellan Um för nybygge och U per byggnadsdel vid ändring
- Tabell över U per byggår, både vid nybygget (Energimyndigheten) och uppmätt (BETSI), inklusive fönster och golv
- Från U till kWh och kronor per år med gradtimmar per ort (fem orter) och sajtens elpris med period
- Ett verkligt exempel med materialpris och datum, och återbetalningstid
- Lambdatabell med tillverkarnas deklarerade värden och myndighetens spann
- Rättelse av de vanliga felen: 1/U = Σ 1/Ui, U per material, "EU-krav 1,0"
- Länk till räknaren med resultat i länken

## 12. Osäkert eller saknat

- Tegel, λ: saknas.
- Cellulosa: aktuellt tillverkardatablad saknas. 0,040 kommer från ett produktblad från 2010 via återförsäljare. Myndighetens spann 0,037–0,040 finns.
- Xella Sveriges datablad för lättbetong nåddes inte. Tyskt Ytong-värde och Betongföreningens expertsvar används i stället.
- SS-EN ISO 6946 och SS-EN ISO 10456 är inte lästa (betalda). Rsi/Rse är hämtade via Svenskt Trä och SLU.
- Metoden med övre och undre gränsvärde för inhomogena skikt enligt ISO 6946: inte hämtad.
- Um-formeln i BBR är en bild och är inte läst ordagrant.
- Egen regel för småhus på högst 50 m² i BFS 2026:9: inte hittad.
- SMHI:s officiella normalårsgraddagar per ort är inte fritt tillgängliga. Gradtimmarna per ort är egen räkning ur månadsnormaler.
- Jensens gradtimmetabell och BETSI:s tabeller är avlästa ur PDF:er med trasigt eller förskjutet textlager. Kontrollera dem mot originalen.
- Gränstemperaturen (Tg) för ett visst hus är ett antagande. 17 °C gäller enligt Jensen/Aronsson för äldre bostäder.
- Kronor med annan uppvärmning än direktverkande el: ingen källa hämtad.
- Helsingborgs prisspann är från 2021 och inte omläst i dag.

## 13. Komplettering 2026-09-22

Läsdatum för allt i avsnittet: 2026-09-22. Sidans eller dokumentets egen datering står per källa. Sidnummer är PDF-sida där inget annat står.

### 13.1 Fönstrets tre U-värden

| Beteckning | Vad den gäller | Källa, sidans datum |
|---|---|---|
| Uw | hela fönstret: glas, båge och karm | Upphandlingsmyndigheten, krav 10950:2, versionsdatum 2022-05-11: Uw-värdet ska "inkludera glas, båge och karm" |
| Ug | glaset, i glasmitt enligt EN 673 | Carlson 2005, s. 3: "glaset, Ug, W/m2K (glasmitt enligt EN 673)" |
| Uf | ramen, det vill säga karmen och för öppningsbara fönster även bågen | Carlson 2005, s. 3: "ramen, Uf, W/m2K (karmen och för öppningsbart fönster även bågen)" |
| ψg | linjär köldbrygga vid distanslisten i isolerrutan, W/mK | Carlson 2005, s. 3; Wernh 2023, s. 13 och 19 (ψ för mötet mellan karm och glasdel enligt ISO 10077-1) |

Standarder för att bestämma Uw:

| Metod | Standard | Källa |
|---|---|---|
| Förenklad beräkning | EN ISO 10077-1 | Svanen 2024, s. 25 |
| Detaljerad beräkning (karmens Uf räknas i 10077-2) | EN ISO 10077-1 och EN ISO 10077-2 | Svanen 2024, s. 25; Wernh 2023, s. 13 (SS-EN ISO 10077-1:2017 och SS-EN ISO 10077-2:2017) |
| Provning i hot box | EN ISO 12567-1, alternativt EN ISO 12567-2 | Svanen 2024, s. 25; Upphandlingsmyndigheten 10950:2 (SS-EN ISO 12567-1:2010) |
| Deklaration och CE-märkning | EN 14351-1, produktstandarden som anger vilka metoder som godtas | Svanen 2024, s. 17 och 25 |
| Ug i glasmitt | EN 673 | Carlson 2005, s. 3 |

Uw-formeln enligt ISO 10077-1, återgiven i Wernh 2023, s. 13, och använd i Carlson 2005, s. 3:

```
Uw = (Ag·Ug + Af·Uf + lg·ψg + lm·ψm) / (Ag + Af)
Ag = minsta synliga glasarea, Af = största karmarea (inv. eller utv.),
lg = glasdelens omkrets, lm = längd mitt- och tvärposter,
ψm = köldbrygga vid mitt- och tvärposter
```

- Symbolerna i Wernhs PDF har tappats i textlagret. Variabelförklaringarna står i klartext och stämmer med Carlsons exempel. Formeln ovan är ihopsatt ur dem (egen återgivning, inte ordagrann).

Räkneexempel att testa mot, Carlson 2005, s. 3: metallfönster 1 m brett och 2 m högt, tvåglas isolerruta.

| Indata | Värde |
|---|---|
| Ug | 1,1 W/m²K |
| Ag | 1,65 m² |
| Uf (60 mm ram) | 2,0 W/m²K |
| Af | 0,35 m² |
| ψg, aluminiumdistans / varm kant | 0,108 / 0,053 W/mK |
| lg | 6 m |
| Uw enligt källan | 1,6 (aluminiumdistans) resp. 1,4 (varm kant) W/m²K |

- Egen räkning: (1,1 × 1,65 + 2,0 × 0,35 + 0,108 × 6) / 2,0 = 3,163 / 2,0 = 1,58 → 1,6. Med varm kant: (1,815 + 0,7 + 0,318) / 2,0 = 1,42 → 1,4. Källans tal stämmer.
- Carlson: "den totala isolerande förmågan Uw 1,6 resp. 1,4 är betydligt sämre än mittpunktsvärdet Ug 1.1".
- Artikeln är från 2005 och hänvisar till dåvarande BFS avsnitt 9:2. Använd definitionerna och exemplet, inte regelhänvisningen.
- Energimyndigheten ET 2025:01 har ingen definition av Uw, Ug eller Uf. Guiden säger bara (s. 13) att fönsterbranschens frivilliga energimärkning "tar hänsyn till isolerförmåga för glas, båge och karm".

Källor:
- Upphandlingsmyndigheten, Energieffektiva fönster vid ombyggnad, avancerad nivå, krav-ID 10950:2, versionsdatum 2022-05-11, https://www.upphandlingsmyndigheten.se/kriterier/bygg-och-fastighet/flerbostadshus-ombyggnad/totalentreprenad/energieffektiva-fonster-vid-ombyggnad/avancerad-niva/ . Kravtext: "Uw-värdet ska vara uppmätt enligt standarden SS-EN ISO 12567-1:2010 och inkludera glas, båge och karm eller vara beräknat enligt SS-EN ISO 10077-2 inklusive SS-EN ISO 10077-1 i formatet 1230 x 1480 mm (BxH) enligt standard."
- Nordisk Miljömärkning (Svanen), Om Svanenmärkta Fönster och ytterdörrar, version 4.17, bakgrundsdokument, 2024-11-26, https://www.svanen.se/4a423e/contentassets/26b8bd70f117477b9ab26616f519f8ef/bakgrundsdokument-for-produktgrupp-062_062_fonster-och-ytterdorrar-062_svenska.pdf
- Per-Olof Carlson (ACC Glasrådgivare AB), Bygga med glas – en handbok om glas i funktion, Väg- och vattenbyggaren nr 5, 2005, http://media.acc-glas.se/2020/06/artiklar-06Glasbyggande.pdf
- Emil Wernh, Hur förändras en fönstermodells U-värde beroende på dess geometri?, examensarbete, Högskolan i Gävle, 2023, https://www.diva-portal.org/smash/get/diva2:1766964/FULLTEXT01.pdf
- Svensk myndighet eller branschorganisation med en egen definitionstext för alla tre beteckningarna: **saknas**. Försökt: Energimyndigheten ET 2025:01 (har inte definitionerna), Elitfönster "Vad är U-värde?" daterad 2026-04-01 (har inte definitionerna), Svenska Fönster "Vad är U-värde" (har inte definitionerna). Glasbranschföreningen, Svensk Byggtjänst och Trä- och Möbelföretagen: ingen läsbar sida om detta i sökresultaten.

### 13.2 Provstorleken och varför storleken ändrar Uw

| Påstående | Källa, sidans datum |
|---|---|
| Uw ska beräknas "i formatet 1230 x 1480 mm (BxH) enligt standard" | Upphandlingsmyndigheten 10950:2, 2022-05-11 |
| Energiklassningen görs på ett referensfönster med "standardstorlek 1230 mm x 1480 mm" | Svanen 2024, s. 9 (om det danska märkningssystemet) |
| "U-värdet ska mätas på hela fönstret/dörren inklusive karmen enligt storlekar i EN 14351-1." | Svanen 2024, s. 17 (kravtext) |
| U-värde och g-värde anges för referensstorleken och gäller för alla storlekar av samma fönster i serien | Svanen 2024, s. 14 och 25 |
| Varför: "Energiförlusterna är i dagsläget normalt lägre genom glasdelen än genom karm/båge varför ett fönster som är betydligt mindre än referensstorleken kan ha sämre U-värde än det redovisade." | Svanen 2024, s. 25 |
| Svanen godtar det, eftersom U-värdet främst är en jämförande uppgift mellan fönstermodeller, och annat skulle "strida mot den harmoniserade produktstandarden och CE-märkningen" | Svanen 2024, s. 25 |
| Referensstorlek för ytterdörrar: 1,23 × 2,18 m och 2,00 × 2,18 m | Svanen 2024, s. 25 |
| Tidigare användes även 1200 × 1200 mm. Svanens gamla krav 0,95 vid 1480 × 1230 mm motsvarade 1,0 vid 1200 × 1200 mm | Svanen 2024, s. 19, fotnot 18 |
| Beräknad fönstermodell: "fönstermodellens U-värde minskar då dess area ökar". Fönster närmare kvadratisk form fick lägre U | Wernh 2023, s. 5 och 31 |
| Samma modell spände från Uw 0,86 till 2,06 W/m²K mellan största (4 m²) och minsta (0,4 m²) beräknade area | Wernh 2023, s. 27 |

- Obs om Wernhs spann 0,86–2,06: ytterpunkterna har också olika glas (3-glas med varm kant mot 2+1-glas med metalldistans). Spannet visar inte storlekens effekt ensam. Använd det inte som storleksexempel.
- Fel i källa: Svanen 2024 s. 25 skriver "referensstorleken 1,43 x 1,23 m eller 1,48 x 2.8 m". Samma dokument skriver 1230 × 1480 mm på s. 9 och 1480 × 1230 mm på s. 19, och Upphandlingsmyndigheten skriver 1230 × 1480. "1,43" är troligen tryckfel. Citera inte den meningen.
- SS-EN 14351-1 är inte läst (betald). Att 1,23 × 1,48 m kommer ur standarden är hämtat via Upphandlingsmyndigheten ("enligt standard") och Svanen, inte ur standardtexten.
- Egen räkning med samma glas och karm i två storlekar: **inte gjord**. Karmbredd, Ug, Uf och ψ för ett verkligt fönster saknas. Carlsons exempel i 13.1 går att räkna om med andra mått, men då är måtten eget antagande.

#### Menar Boverket U för hela fönstret inklusive karm?

| Regel | Vad den säger | Beteckning, sida |
|---|---|---|
| BBR 9:12, definitioner (gäller till och med 2026-09-30) | Af: "Sammanlagd area för fönster, dörrar, portar och dylikt (m2), beräknad med karmyttermått." Ai: "För fönster, dörrar, portar och dylikt beräknas Ai med karmyttermått." | BFS 2011:6 i lydelse BFS 2024:14 (BBR 31), avsnitt 9:12, s. 12 |
| BFS 2026:9 (gäller från 2026-10-01) | 1 kap. 14 §: Um beräknas genom att summan av transmissionsförlusterna "genom klimatskärmens samtliga delar, inklusive köldbryggor" divideras med klimatskärmens totala invändiga area. Bilaga 2 tabell 6: "Högsta tillåtna värmegenomgångskoefficient, U, för enskilda byggnadsdelar i klimatskärmen", fönster 1,1 | BFS 2026:9, 1 kap. 14 §, s. 4; bilaga 2 tabell 6, s. 15 |

- BBR belägger att fönstrets area räknas med karmyttermått, alltså att fönstret med karm är byggnadsdelen i Um-beräkningen. BBR skriver inte ordagrant att fönstrets U-värde avser hela fönstret.
- BFS 2026:9: ingen definition av fönstrets U och ingen regel om karmyttermått hittad i föreskriften. Att 1,1 i tabell 6 avser hela fönstret är **inte belagt ordagrant** i BFS 2026:9. Det som går att skriva med källa: BBR räknar fönsterarean med karmyttermått, och Upphandlingsmyndigheten, Svanen och produktstandarden (via Svanen) anger U för hela fönstret inklusive karm.
- Textlagret i BFS 2026:9 tabell 6 är förskjutet (värdena står en rad fel i PDF-texten). Ordningen tak 0,13, vägg 0,18, golv 0,15, fönster 1,1, ytterdörr 1,1 i avsnitt 4 stämmer.

### 13.3 Ventilerad luftspalt och fasadpanel i U-värdet (SS-EN ISO 6946)

| Påstående | Källa, sidans datum |
|---|---|
| "Det totala termiska motståndet för en yttervägg som innehåller en välventilerat luftspalt ska erhållas genom att man bortser från det termiska motståndet hos luftspalten och alla andra skikt mellan luftspalten och fasadens utsida, men inkludera ett yttre övergångsmotstånd som motsvarar ett lager av stillastående luft. Alternativt kan det motsvarande värdet på inre övergångsmotstånd Rsi = 0,13 användas för både invändiga och utvändiga ytor." | Paroc, Projekteringsanvisning välisolerade ventilerade fasader, oktober 2025, s. 15, med hänvisning till "ISO EN 6946" |
| Parocs räkneexempel för ventilerad fasad använder Rsi 0,13 och Rse 0,13 | Paroc, samma, s. 18 |
| Tabell 9.6, värmemotstånd för luftspalter: oventilerade < 0,18, svagt ventilerade < 0,15, väl ventilerade 0 m²°C/W | Svenskt Trä, Träguiden, 9.3 KL-trä och värmeisolering, publicerad 2017-07-07 |
| Träguidens väggexempel (gips, KL-trä, isolering, vindskydd, 34 mm luftspalt, 25 mm limträpanel) summerar bara gips 0,052, KL-trä 0,769, Rsi 0,130 och Rse 0,040 plus isoleringsskiktet. Luftspalten och panelen är inte med i R | Träguiden, samma sida |

Egen räkning, Rse 0,04 mot 0,13 på Träguidens vägg:
- Träguiden: R_T = 4,575, U = 1/4,575 = 0,219 (+ ΔU 0,01 = 0,23)
- Med Rse = Rsi = 0,13: R_T = 4,575 + 0,09 = 4,665, U = 1/4,665 = 0,214 (+ 0,01 = 0,22)
- Skillnad 0,004 W/m²K före avrundning.

Där källorna skiljer sig:
- Luftspalten och allt utanför den: ingen skillnad. Båda räknar bort dem.
- Rse: Paroc säger att standarden anger Rse som stillastående luft, alternativt samma som Rsi (0,13). Träguidens exempel räknar Rse 0,04 och säger inget om Rse för det ventilerade fallet. Paroc hänvisar till standarden just för ventilerade fasader och väger därför tyngst i den här sakfrågan, trots att Svenskt Trä har högre rang som källa. Standarden själv är inte läst. Skillnaden i U är liten (se ovan).
- Vad som krävs för att en luftspalt ska räknas som väl ventilerad (öppningsarea per meter): **saknas**. Det står i SS-EN ISO 6946, som inte är läst.

Källor:
- Paroc, Projekteringsanvisning välisolerade ventilerade fasader, 2226BISE1025, oktober 2025, https://www.paroc.com/sv/documents/uploads/ventilated-facades-design-guide
- Svenskt Trä, Träguiden, 9.3 KL-trä och värmeisolering, publicerad 2017-07-07, https://www.traguiden.se/konstruktion/kl-trakonstruktioner/kl-tra-och-varme-och-fukt/9.3-kl-tra-och-varmeisolering/kl-tra-och-varmeisolering/
- Isover, Användarmanual för U-värdesberäknaren, https://www.isover.se/anvandarmanual-u-vardesberaknaren : 403 även 2026-09-22. Inte läst. Sökutdraget säger samma sak som Paroc (skikten utanför räknas som noll, Rse får sättas lika med Rsi). Bara utdrag.
- SLU TN0258 (2011) tar inte upp ventilerade luftspalter. Hela PDF:en genomsökt.

### 13.4 Bifynd under läsningen (gäller avsnitt 2, 4 och 12)

- Övre och undre gränsvärde för inhomogena skikt, som avsnitt 2 och 12 anger som saknat: Träguiden 9.3 (publicerad 2017-07-07, URL ovan) beskriver metoden enligt SS-EN ISO 6946. U-värdesmetoden viktar U per delyta (regel och isolering var för sig). λ-värdesmetoden viktar fram ett nytt λ för det inhomogena skiktet. R_T är medelvärdet av de två. Räkneexempel att testa mot: 12 % regelandel i 170 mm, λ trä 0,14 och isolering 0,037, fasta skikt och övergångsmotstånd R 0,991. R_u = 4,717, R_λ = 4,432, R_T = 4,575, U = 1/4,575 + ΔU 0,01 = 0,23 W/m²K.
- Småhus på högst 50 m², som avsnitt 4 anger som oklart: BFS 2026:9 1 kap. 3 § punkt 2 säger att föreskrifterna inte gäller för byggnad som "har en temperaturreglerad area mindre än 50 kvadratmeter". Obs: "mindre än 50", inte "högst 50". https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf , s. 1.
