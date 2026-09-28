# Faktablad: kunskap/badrum/tatskikt-badrum (+ underlag för /rakna/badrum-kostnad/)

Hämtat 2026-09-28 av underlagsarbetaren. Beställt av koordinatorn. Checklistor: `docs/briefer/seo-checklista-2026-09-29/badrum.md` (tätskikt) och `raknare.md` (badrum-kostnad). Avgränsning: SOKORDSANALYS 8.3.

- Huvudfras: **tätskikt badrum** (1 900/mån, avsikt 2 270). Sidtyp: kunskap, `pelare: badrum`, `niva: mellan`. Inget produktkort.
- Sidofraser: tätskikt badrum regler (210), tätskikt badrum källare (90), tätskikt badrum pris (50), tätskikt badrum golv (20).
- `pelare: badrum` finns inte i `src/lib/pelare.ts` i dag (kontrollerat 2026-09-28). Sidan kan inte byggas förrän UX och bygge lagt in pelaren.
- Alla regeltexter nedan är lästa i original (PDF) om inget annat står. Sidnummer = tryckt sidnummer i dokumentet.
- Ingen prosa från någon sida. Citat med citattecken är ordagranna.

---

## 1. Regelverket, gällande versioner

| Regel | Beteckning | Gäller från | Ersätter | Källa |
|---|---|---|---|---|
| Boverkets föreskrifter om skydd med hänsyn till hygien, hälsa och miljö samt hushållning med vatten och avfall | BFS 2024:8 | 1 juli 2025 | BBR (BFS 2011:6), fuktdelen 6:5 | [BFS 2024:8, PDF](https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf), s. 13 |
| Byggkeramikrådets branschregler för våtrum | BBV 26:1 | 1 januari 2026 | BBV 21:1 | [BBV 26:1, PDF](https://admin.bkr.se/app/uploads/2026/05/BKR_BBV_2026_webb.pdf), s. 2 (förord) |
| GVK, Säkra Våtrum | Säkra Våtrum 2026 (i texten "branschregler 2026:1"), "1 Januari 2026, utgåva 1" | 1 januari 2026 | Säkra Våtrum 2021 (2021:1) | [GVK Säkra Våtrum 2026, PDF](https://www.gvk.se/siteassets/gvk/dokument/sakra-vatrum-2026.pdf), s. 6 |
| Säker Vatten, Branschregler Säker Vatteninstallation | 2026:1 | 1 januari 2026 | 2021:2 | [Säker Vatten 2026:1, PDF](https://sakervatten.se/wp-content/uploads/2025/10/branschregler-saker-vatteninstallation-2026-web-v2-lagupplost.pdf), s. 2 och 5 |
| Måleribranschens regler för våtrum (MVK) | MVK, "Gäller från och med 2026-01-01" | 1 januari 2026 | "tidigare regler (Utgåva 2021)" | [MVK 2026, PDF](https://www.vatrumsmalning.se/s/MVK-BR-2026-01-01-lcaf.pdf) |

OBS adressbyte: Säker Vattens PDF ligger nu på `sakervatten.se` utan www. Adressen med `www.` i SOKORDSANALYS källista gav 404 den 2026-09-28.

### BFS 2024:8, 7 kap. Fuktsäkerhet (s. 6–7), ordagrant

- **7 kap. 7 §** "Ytor inomhus, som kan förväntas utsättas för vatten i vätskefas, ska ha ett vattentätt skikt om det inte är obehövligt. Skiktet ska hindra fukt från att ta sig in i byggnadsdelar i oacceptabel mängd. Utformningen ska särskilt ta hänsyn till 1. täthet mot vatten i vätskefas, 2. täthet i skarvar, anslutningar, infästningar och genomföringar, och 3. ånggenomgångsmotstånd. I golvytor, som ofta kommer att utsättas för vatten i vätskefas, får genomföringar göras endast för golvavlopp."
- **7 kap. 8 §** "Vattentäta skikt ska vara åldersbeständiga. Utformningen ska särskilt ta hänsyn till 1. rörelser i material och mellan material, 2. beständighet mot kemisk och biologisk nedbrytning, och 3. vibrationer."
- **7 kap. 9 §** "Ytor inomhus, som kan förväntas utsättas för vattenstänk, våtrengöring eller kondensvatten, ska ha ett vattenavvisande ytskikt. Kravet i första stycket gäller inte om det är uppenbart obehövligt."
- **7 kap. 11 §** "Golvytor, som ofta kommer att utsättas för vatten i vätskefas, ska ha golvavlopp om det behövs för att hindra fukt från att ta sig in i byggnadsdelar. I utrymmen med golvavlopp ska golvet ha fall mot avloppet i de delar av utrymmet som ofta kommer att utsättas för vatten i vätskefas. Bakfall får inte förekomma i någon del av utrymmet."
- Ändring (renovering): **12 kap. 1 §** "Vid ändring av byggnad ska den ändrade delen uppfylla kraven i 2–11 kap." Anpassning tillåten i sju fall (bl.a. "oskäligt med hänsyn till ändringens omfattning", "kostnaden är oskäligt hög i förhållande till den förväntade nyttan", "tekniska skäl"), s. 10. 13 kap. har inget eget fuktkrav för badrum, bara 6 § (ändrad användning) och 7 § (fuktskadade byggnadsdelar), s. 13.
- Ordet "våtrum" och "våtzon" finns inte i BFS 2024:8. Zonerna kommer från branschreglerna.

### Övergången från BBR (rättar checklistans formulering)

- BFS 2024:8 s. 13: "1. Denna författning träder i kraft den 1 juli 2025. 2. Äldre bestämmelser i Boverkets byggregler (2011:6) – föreskrifter och allmänna råd får dock tillämpas i den utsträckning som framgår av punkten 3 i övergångsbestämmelserna till Boverkets föreskrifter (2024:14) om ändring i Boverkets byggregler".
- Punkt 3 står alltså i **BFS 2024:14**, inte i 2024:8. [BFS 2024:14, PDF](https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf), övergångsbestämmelserna, ordagrant: "3. Äldre bestämmelser får tillämpas på arbeten som a) kräver bygglov om ansökan om bygglov kommer in till kommunen före den 1 juli 2026, b) kräver anmälan om anmälan kommer in till kommunen före den 1 juli 2026, eller c) varken kräver bygglov eller anmälan om arbetena påbörjas före den 1 juli 2026." Förutsättning: "samtliga äldre bestämmelser" tillämpas.
- Badrumsrenovering i villa kräver normalt varken lov eller anmälan (ej verifierat i PBL i denna körning, se Osäkert), alltså punkt c: **BBR fick användas om arbetet påbörjades före 1 juli 2026.** Påbörjat 1 juli 2026 eller senare: BFS 2024:8.
- BBR 6:5331 får bara stå som upphävd.

### Branschreglernas egna övergångar

- BBV 26:1 s. 2: arbeten som påbörjas från 1 januari 2026 ska följa BBV 26:1; BBV 21:1 får användas om bygglov beviljats före 1 januari 2026 eller om projekterings- eller bygghandlingar påbörjats före 1 januari 2026.
- GVK s. 6: samma två undantag, med 2021:1.
- Säker Vatten 2026:1 s. 5: samma två undantag, med 2021:2.

---

## 2. Våtzonerna (bär "tätskikt badrum golv")

| Begrepp | BBV 26:1 § 3.2 (s. 11) | GVK Säkra Våtrum 2026 § 4.1–4.3 (s. 14–15) |
|---|---|---|
| Plats för bad eller dusch | "Golv i dusch eller under badkar samt väggar upp till 2,0 m över golvet bakom badkar eller duschplats." | Väggytor i duschplats "upp till 2 meter ovanför golvet", väggytor runt badkar upp till 2 m, golvet i duschplatsen eller under badkaret |
| Våtzon 1 | "Väggar från golv till tak vid plats för bad eller dusch och väggytor minst en meter utanför dessa samt våtrummets hela golvyta." Inom en meter ingår "motstående väggyta, inklusive gavel". | "Hela golvytan i utrymmet tillhör våtzon 1." Väggytor "inom en radie på 1 meter" från plats för bad eller dusch. Väggytor ovanför platsen. |
| Yttervägg | "Om del av yttervägg ingår i våtzon 1 ska hela väggen behandlas som tillhörande våtzon 1." Skäl i texten: temperaturskillnaden ute och inne, främst vintertid. | "Om del av yttervägg ingår i våtzon 1 ska hela ytterväggen behandlas som våtzon 1." |
| Våtzon 2 | "Övriga väggytor." | "Alla övriga väggytor tillhör våtzon 2." |
| Skärmvägg | Till tak och plattsatt: gavel = våtzon 1, baksida = våtzon 2 | Gaveln = våtzon 1, bortre sidan = våtzon 2 (§ 4.3) |
| Tätskikt i hela rummet? | BBV § 3.1 (s. 9): "Samtliga golv-/väggytor med keramisk beläggning/beklädnad i ett våtrum ska förses med godkänt tätskiktssystem" | GVK s. 14: "Hela utrymmet ska bekläs med tätskikt (oavsett område) på golv och väggar." |

- MVK (målade system): klass **VT** (vattentätt) i våtzon 1, klass **VA** (vattenavvisande) i våtzon 2; "System som uppfyller kraven för klass VT uppfyller även kraven för klass VA." "Ytor i våtzon 2 ska målas med minst VA system men får också målas med VT system. Vid tveksamhet välj VT system." Beställaren ansvarar för zonklassningen. [MVK 2026](https://www.vatrumsmalning.se/s/MVK-BR-2026-01-01-lcaf.pdf)
- MVK: "Golv omfattas inte av MVKs branschregler." [MVK frågor och svar](https://www.vatrumsmalning.se/faq-tolkningar-fragor-och-svar), odaterad, läst 2026-09-28.
- Zonskiss (checklistan punkt 8): måtten att rita är 2,0 m (plats för bad eller dusch), 1,0 m ut från platsen, hela golvet våtzon 1, hel yttervägg om en del ligger i zonen.
- Golvlutning, BBV § 4.2 (s. 14): i plats för bad eller dusch 1:150 till 1:35 (7–30 mm/m), rekommenderat 15 mm/m; mellan brunn och närmaste vägg högst 1:25 (40 mm/m); övrigt golv 1:200 till 1:100 (5–10 mm/m) "om inget annat avtalats". Plan yta för golv-WC minst 300 × 400 mm, lutning högst 10 mm/m (s. 15).
- Rum utan dusch (WC, tvättstuga): BBV § 1.1 (s. 3): hela golvet tätskikt, uppvik minst 50 mm på vägg; "Kök i bostäder omfattas inte av krav på tätskikt på golvet."

---

## 3. Tätskiktstyperna: folie, matta, rollat (vätskebaserat)

Beteckningar, BBV § 3.3 (s. 12): VTgF/VTvF = folie eller skivor med tätskikt (golv/vägg). VTg/VTv = övriga godkända system, dvs. vätskebaserade. BBV om vätskebaserat: kräver "rätt mängd per ytenhet", annars "kan ett för tunt skikt resultera i otillräcklig täthet".

### Var varje typ får användas

| Typ | Skivvägg, våtzon 1 | Skivvägg, våtzon 2 | Massiv vägg (betong, puts, murverk) | Golv på träbjälklag/skiva | Källare med tillskjutande markfukt | Källa |
|---|---|---|---|---|---|---|
| Folie (VTvF/VTgF) | ja | ja | ja | ja (VTgF krävs på skivkonstruktion) | **nej** (GVK) | BBV § 3.4 tabell 1 (s. 12); GVK § 8.3.1–8.3.2 (s. 36) |
| Vätskebaserat, rollat eller struket (VTv/VTg) | **nej** | ja | ja | **nej** | produkt "avsedd för underlag med tillskjutande fukt" (GVK § 8.1.2) | BBV tabell 1; GVK § 8.4.1–8.4.2 (s. 37): "ska INTE användas: I plats för bad eller dusch och våtzon 1 på skivmaterial eller på träbjälklagskonstruktioner" |
| Plastmatta (våtrumsmatta) som tät- och ytskikt eller under keramik | ja, även på kartongklädd gips i zon 1 och 2 | ja | ja | ja | **nej** | GVK § 8.2.1–8.2.2 (s. 35), tabell 3 (s. 19) |

- GVK tabell 3 fotnot (s. 19): vätskebaserade tätskikt med ånggenomgångsmotstånd minst 1 miljon s/m kan användas under keramik i våtzon 2. GVK § 8.1: tätskikt under keramik ska ha ånggenomgångsmotstånd över 1 miljon s/m om inte fuktsäkerhetsprojektering visar annat. "Dubbla tätskikt får inte förekomma".
- Byte av tätskiktstyp i samma rum: BBV § 3.1: "Tätskiktssystemet ska vara av samma fabrikat i hela utrymmet." GVK § 8.1: vid skarv mellan två typer ska minst en leverantör ha skriftlig anvisning för kombinationen.
- Underlagstemperatur, GVK s. 29 (golv) och s. 33 (vägg): plastmatta lägst +18 °C; folie eller vätskebaserat lägst +10 °C. BBV § 4.1.2 (s. 13): lägst 10 °C om inte leverantören säger annat.
- Delreparation: GVK § 8.2.1 och 8.3.1 nämner plastmatta och folie där "det ställs krav att ... ska gå att delreparera". BBV § 1.4 (s. 5): delreparation kräver godkännande och anvisning från tätskiktsleverantören, och **kvalitetsdokument får inte utfärdas enbart för delreparation**.
- Golvvärme under keramik, GVK s. 18: "Golvvärmen får slås på tidigast 28 dygn efter monteringen av keramiskt ytskikt." "Golvytans temperatur får inte överstiga 27 °C."
- Skivor, BBV § 4.7.1 (s. 15): "Kartongklädda gipsskivor kan användas på vägg i samtliga våtzoner. Dock är rekommendationen att särskilda våtrumsskivor används i hela utrymmet." Länk till `/inomhus/gipsskruv/` (H2 "Våtrum, brandgips och utegips") är redan relevant.

### Pris per typ (bara stöd, se avsnitt 7)

| Typ | kr/kvm, material och arbete | Källa, datum | Typ av källa |
|---|---|---|---|
| Målat tätskikt | 300–500 | Totalbyggarna (Mateusz Kerlin), 2026-03-30 | firma, se varning avsnitt 7 |
| Folie | 400–700 | samma | samma |
| Flytande membran | 350–550 | samma | samma |
| Flytande tätskikt golv | 900–1 400 | Hantverkskollen, 2026-04-25 | offertförmedlare |
| Tätskikt väggar | 700–1 100 | samma | samma |
| Membranmatta | 1 400–2 000 | samma | samma |
| Material, bara | 350–700 | samma | samma |

Källorna skiljer sig med en faktor 2 till 3. Ingen av dem är myndighet eller bransch. Inget medelvärde.

---

## 4. Vem får lägga tätskiktet

### Behörighet enligt branschreglerna

- **BBV § 1.2 (s. 4–5)**, fackmässighet enligt BBV kräver: arbete enligt BBV; godkänt tätskiktssystem på "samtliga golv-/väggytor med keramisk beläggning"; behörigt företag; tätskiktsarbetet utfört av "plattsättare som har behörighet enligt § 2.2 BBV, är anställd i ett behörigt företag och kan uppvisa giltig fotolegitimation utfärdad av Byggkeramikrådet"; kvalitetsdokument (Bilaga A) till beställare med monteringsanvisning.
- **BBV § 2.3 (s. 7)**: "Plattsättare som utför tätskiktsarbeten enligt branschreglerna ska ha genomgått Byggkeramikrådets Grundkurs (Kurs 1) och Tätskiktskurs (Kurs 3) samt vara anställd i ett behörigt företag." Arbetsledare: Kurs 1 och Kurs 2. Enmansföretagare: Kurs 1, 2 och 3. Kurs 3 hålls av tätskiktsleverantören och gäller per system.
- **BBV § 2.2 och 2.4 (s. 6–7)**: behörigheten gäller 5 år; återkurs vart femte år.
- **BBV § 2.1 (s. 6)**: behörigt företag ska ha F-skatt, ansvarsförsäkring, momsregistrering. Förteckning: Bilaga D på bkr.se.
- **BBV § 2.5 (s. 8)**: "Behöriga företag ska utfärda Kvalitetsdokument, Bilaga A till BBV, efter varje våtrumsentreprenad." Utfärdas digitalt, undertecknas av våtrumsansvarig arbetsledare, plattsättaren namnges.
- **GVK s. 12–13**: montörer anställda i GVK-auktoriserat företag med behörighet "Plastmatta som ytskikt och/eller tätskikt" eller "Tätskikt under keramik"; yrkesbevis eller motsvarande erfarenhet, utbildning, godkänt prov, fortbildning vart femte år, branschlegitimation. GVK s. 5: "Det är enbart GVK-auktoriserade företag som har rätt att utfärda våtrumsintyg och kvalitetsdokument enligt GVK."
- **GVK § 11.4.5 (s. 48)**: "Det är obligatoriskt att överlämna Våtrumsintyg till konsument efter avslutat arbete där Konsumenttjänstlagen gäller".
- **Säker Vatten 2026:1 (s. 7 och 9)**: VVS-företaget ska vara auktoriserat, montörer med branschlegitimation; intyg "ska lämnas till beställaren i direkt anslutning till avslutat installationsarbete, dock senast efter fyra veckor". "Det är inte tillåtet för ett auktoriserat VVS-företag att avtala med beställaren att intyget inte ska lämnas ut". Intyget arkiveras 10 år.
- **MVK 2026**: målade våtrumssystem utförs av MVK-auktoriserat företag med behöriga våtrumsmålare; bara system i MVK:s lista över godkända system.
- **El**: Elsäkerhetsverket om golvvärme: "Arbetet ska göras av ett registrerat elinstallationsföretag." [Elsäkerhetsverket, installation av golvvärme](https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-golvvarme), senast granskad 2026-02-03, läst 2026-09-28.

### Vad en privatperson får göra

- **Ingen lag förbjuder** en ägare att lägga tätskikt i sitt eget badrum. Ingen paragraf i BFS 2024:8 kräver behörighet.
- **BBV § 1.5 Gör-det-självarbeten (s. 5)**, ordagrant: "Privatpersoner som utför kakel- och klinkerarbeten i sin egen fastighet kan normalt räkna med att försäkringsbolagen accepterar arbetet, under förutsättning att det utförs enligt gällande branschregler och i enlighet med tätskiktsleverantörens godkända monteringsanvisning. Byggkeramikrådet avråder dock från gör-det-självarbeten i våtrum, om man inte har mycket god kunskap och vana inom området. Kvalitetsdokument kan inte utfärdas för dessa arbeten."
  - Checklistan skriver "BBV 26:1 § 1". Rätt paragraf är **§ 1.5**.
- **GVK**, ordagrant: "Om arbetena utförs fackmässigt och tekniskt följer gällande branschregler finns det ingen 'lagstiftning' som förbjuder att våtrumsarbetena utförs". GVK rekommenderar ändå auktoriserat företag och nämner kvalitetsdokumentet och konsumenttjänstlagens tioåriga skydd. [GVK, Badrum, göra själv](https://www.gvk.se/branschregler/fragor-och-svar/fackmassigt-utfort-och-dokument/badrum-gora-sjalv-ar-det-ok-och-tillatet/). **Sidan är odaterad**, läst 2026-09-28.
- **MVK**, ordagrant: "MVK rekommenderar att man alltid anlitar MVK-auktoriserat företag vid våtrumsmålning." För den som gör själv: kontakta försäkringsbolaget och följ färgtillverkarens anvisning. [MVK frågor och svar](https://www.vatrumsmalning.se/faq-tolkningar-fragor-och-svar), odaterad.
- **El**: privatpersonen får inte installera eller koppla in elgolvvärme (Elsäkerhetsverket, ovan).
- **Säker Vatten**: bara auktoriserat VVS-företag kan utfärda intyg om Säker Vatteninstallation (s. 7). Privatpersonen blir alltså utan intyg för egen VVS.
- **Konsekvens (egen slutsats, märks som det)**: den som lägger tätskiktet själv bryter ingen lag men saknar kvalitetsdokument/våtrumsintyg. Hos If och Länsförsäkringar ger dokumentet ett extra skydd som den som gjort själv inte kan få (avsnitt 5).

### Tabellen per arbete (SOKORDSANALYS 8.3, källa per rad)

Tas oförändrad från SOKORDSANALYS 8.3 (rader och källor). Två rättelser efter läsning i original:
- Raden "Lägga tätskikt, kakla dusch och golv": källan är BBV 26:1 **§ 1.5** (s. 5) och GVK:s frågesida (odaterad).
- Raden "Byta golvbrunn": Säker Vatten 2026:1 § 4.4.5 (s. 35), "Golvbrunn tillverkad före 1990 samt golvbrunn som är skadad eller felaktigt monterad i bjälklaget, ska bytas ut vid renovering." GVK s. 22 har samma årtal: "Vid renoveringar ska golvbrunnar bytas ut om de är tillverkade före 1990." Toleransen ±2 mm (Säker Vatten 4.4.5).
- Tillägg till raden "Golvvärme el": registrerat elinstallationsföretag, Elsäkerhetsverket granskad 2026-02-03.

---

## 5. Försäkringen

Alla tre villkoren lästa i PDF 2026-09-28.

| | Folksam | If | Länsförsäkringar |
|---|---|---|---|
| Villkor | Hem och villa, "Försäkringsvillkor 1 januari 2026" (S2940 26-01) | Villaförsäkring, "Försäkringsvillkor – december 2025" | Villahemförsäkring VH25, "Gäller från 2025-01-01" (LF 01611 utg 19). Villkoret kan skilja per länsbolag |
| Adress | [Folksam S2940](https://s7g10.scene7.com/is/content/folksam/S2940_3688pdf) | [If villavillkor](https://www.if.se/globalassets/se/dokument/privat/villaforsakring-villkor.pdf) | [LF 01611](https://www.lansforsakringar.se/globalassets/aa-global/dokument/villkor/01611-villkor-villahem.pdf) |
| Krav på våtrummet | Läckage från badrum "som försetts med vattentätt skikt enligt gällande byggnorm/branschregler vid tidpunkten för uppförandet/reparationen" | "Läckage i våtutrymme ersätts bara om det är byggt enligt den byggnorm och de branschregler samt branschens råd och anvisningar som gällde vid byggnads- eller installationstillfället." (s. 4) | F.2.2 p. 4 (s. 14): "Våtutrymmena ska vara utförda enligt de byggregler och i förekommande fall branschregler samt tillverkarens råd och anvisningar som gällde vid byggnads- eller installationstillfället." |
| Om reglerna inte följts | Villa, B7 (s. 57): självrisk "tio procent av skadebeloppet, lägst 10 000 kronor om skadan beror på att byggnorm/branschregler vid tidpunkten för uppförandet/reparationen inte följts" | Ersätts inte (samma mening). "Skada till följd av husägarens/beställarens godkända avvikelse från byggnorm/branschregel ersätts inte." (s. 8) | Gäller bara om läckaget "a) inte har samband med avvikelsen ... eller b) kommer från våtutrymme som någon annan ansvarar för." (s. 14) |
| Själva tätskiktet som läckt | Undantas (B6). Hela våtutrymmet ses "som en enhet" | Undantas; yt-/tätskiktet i hela utrymmet "ses ... som en byggnadsdel" (5.2.3) | Undantas; hela våtutrymmet "som en enhet" (s. 14) |
| Tillägg för tätskiktet | Villa Stor: ersätter ytskikt och tätskikt om arbetet "utförts enligt gällande byggnormer och branschregler och att kvalitetsdokument eller annan motsvarande dokumentation från uppförandet kan uppvisas" (s. 64) | – | Tillägg K.8.3 (s. 31): kräver att arbetet "har utförts av behörig entreprenör som lämnat kvalitetsdokument, utan avvikelse". Högst 200 000 kr (bostadsbyggnad) |
| Extra skydd med dokument | – | "Om våtrumsbehörigt företag samt certifierad installatör utfört arbetet och kvalitetsdokument från Byggkeramikrådet (BKR) alternativt våtrumsintyg från AB Svensk Våtrumskontroll (GVK) kan uppvisas tillsammans med intyg om Säker Vatteninstallation från auktoriserat VVS-företag kan ersättning lämnas även om utrymmet visar sig ha en felaktighet." (s. 8) | – |
| Gammalt våtrum | Åldersavdrag kan bli 100 % på "ytskikt och tätskikt äldre än 30 år i våtutrymme" | Ersätter inte kostnaden att renovera till gällande regler "om det skadade utrymmet är äldre än 35 år" (s. 8) | Samma, "äldre än 35 år" (s. 14) |
| Självrisk läckage genom tätskikt | 4 000 kr (B7) | ej hämtad | ej hämtad |

### Åldersavdrag på våtrum (tabellerna ur villkoren)

Friår, sedan procent per påbörjat år. Avser material och arbete.

| Material | Folksam C42 (s. 77) | If 5.2.4 (s. 18) | Länsförsäkringar (s. 9) |
|---|---|---|---|
| Golv- och väggmatta, trådsvetsad | 5 år, 8 % | 5 år, 8 % | 5 år, 5 % |
| Keramiska plattor inkl. tätskikt | 10 år, 5 % | 10 år, 5 % | **5 år, 5 %** |
| Övrigt material och målning i våtrum | 2 år, 10 % | 2 år, 10 % | 2 år, 10 % |

- If: åldersavdraget "begränsas till högst 80 %" för funktionsduglig byggnadsdel, men kan bli 100 % på "våtrumsbeklädnad inkl. tätskikt som enligt tabell 5.2.4 är helt avskriven".
- Checklistan (punkt 4 i "Fem saker") säger "Inga åldersavdrag i procent, eftersom ingen källa har dem". **Nu finns källan: bolagens egna villkor.** SEO och GEO-agenten avgör om regeln ska ändras.
- Egen räkning (märkt): kakel, Folksam/If, 20 år gammalt: 10 friår, sedan 10 påbörjade år × 5 % = 50 % avdrag. Samma badrum hos LF: 5 friår, 15 år × 5 % = 75 %.
- Trygg-Hansa: [Vattenskada i bostaden](https://www.trygghansa.se/forsakringar/hemforsakring/vattenskada), sidan daterad 2024-06-12: "badrumsrenovering eller installation av en tvättmaskin ska vara fackmannamässigt utfört – annars kan du få minskad ersättning." Villkoret ej läst.
- Konsumenternas: försäkringsbolaget kräver normalt att "de branschregler som gällde vid bygg- eller renoveringstillfället har följts", och vanligen "kvalitetsdokument eller våtrumsintyg från behörig hantverkare". Självrisken "ofta högre än för andra skador", inga belopp. [Konsumenternas, vattenskador](https://www.konsumenternas.se/forsakringar/boendeforsakringar/villaforsakringar/vattenskador/), odaterad, läst 2026-09-28.

---

## 6. Livslängd

| Påstående | Tal | Källa | Datum | Vikt |
|---|---|---|---|---|
| Tätskikt bakom kakel och klinker | 25–30 år | [Länsförsäkringar, teknisk livslängd](https://lansforsakringar.se/privat/forsakring/hemforsakring/renovera/teknisk-livslangd) (hänvisar till "branschgemensamma riktlinjer", ingen primärkälla) | odaterad, läst 2026-09-28 | försäkringsbolag, starkast av det som hittats |
| Plastmatta i våtrum | 25–30 år | samma | samma | samma |
| Våtrumstapet | 10–15 år | samma | samma | samma |
| Målade väggar i duschen | upp till 10 år | samma | samma | samma |
| WC, handfat, badkar | 30–35 år | samma | samma | samma |
| Badrummet som helhet | "omkring 25 år" | GVK (Christoffer Lundkvist), [pressmeddelande](https://www.mynewsdesk.com/se/gvk/news/renovera-badrummet-i-tid-192755) | 2016-10-20, gammalt | branschorgan men tio år gammalt |
| Tätskikt, korrekt lagt | 15–20 år | Bygghantverkarna Jakub och Far AB (sonochfar.se) | 2026-04-07 | firma, samma sida citerar BBR 6:5331 som gällande och rot 50 % |
| Tätskikt | 15–20 år med underhåll | Bygghemma (butik) | 2026-02-23 | butik, räknas inte för prestanda |

- Källorna säger 15–20 mot 25–30 år. LF väger tyngst av dem som hittats; firmans och butikens tal ska inte användas.
- Implicit i villkoren: Folksam 30 år och If/LF 35 år (avsnitt 5) är gränser för ersättning, inte livslängd. Får inte skrivas som livslängd.
- BBV, GVK och MVK anger **ingen livslängd**. Ingen primärkälla (t.ex. SBEF, Svensk Försäkring eller Boverket) hittades.

---

## 7. Kostnad per kvm för tätskikt och kvalitetsdokument i offerten

### Tätskikt, totalt för ett badrum

| Källa | Typ | Badrum | Tätskikt, före rot | Arbete / material | Datum |
|---|---|---|---|---|---|
| Bygghantverkarna Jakub och Far AB, [sonochfar.se/blog/tatskikt-badrum](https://sonochfar.se/blog/tatskikt-badrum/) | firma, Nynäshamn | 5 m² | 16 000 kr | 10 000 / 6 000 | 2026-04-07 |
| Totalbyggarna, Mateusz Kerlin, [tätskikt badrum pris](https://www.totalbyggarna.se/blogg/tatskikt-badrum-pris/) | se varning nedan | 4–6 kvm | 8 000–15 000 kr | ej delat | 2026-03-30 |
| Byggstart, [renovera badrum](https://www.byggstart.se/pris/renovera-badrum) | offertförmedlare | 5 kvm | 8 000–12 000 kr (exempel 12 000) | entreprenörspost | odaterad, titel "2026", ingen författare |
| Hantverkskollen, [tätskikt badrum kostnad 2026](https://www.hantverkskollen.se/artiklar/rormokare/rormokare-tatskikt-badrum-kostnad-2026) | offertförmedlare | 5 m² | 15 000–22 000 kr | ej delat | 2026-04-25 |
| LeadHive, [tätskikt i våtrum](https://www.leadhive.se/kalkylator/tatskikt-i-vatrum) | offertförmedlare | 6 kvm, ca 28 kvm tätad yta, folie | 41 300 kr | 24 000 / 14 600, + 2 700 etablering och dokumentation | "2026" |

**Varning, samma avsändare:** totalbyggarna.se och sonochfar.se har samma adress (Idunvägen 5, Nynäshamn), samma namn i sidfoten (Bygghantverkarna) och samma timpriser (350 och 481,25 kr/h efter rot). De är **en källa, inte två**. Kontrollerat i HTML 2026-09-28.

- Sonochfars 2 700 kr/m² används inte (checklistan). Sidan räknar också med rot 50 % och citerar BBR 6:5331 som gällande.
- Checklistans krav "pris per kvm från två källor som går att läsa": uppfyllt bara med en firma plus offertförmedlare. **Två oberoende namngivna firmor med tätskiktspris per kvm hittades inte.**

### Vad en offert och en slutdokumentation ska innehålla (ur reglerna)

- Kvalitetsdokument BBV Bilaga A (s. 8): behörighetsnummer, ansvarsförsäkring, objekt, tidsperiod, godkänt tätskiktssystem per yta (golv, vägg våtzon 1, vägg våtzon 2) med tillverkare och systembenämning, egenkontroll av underlag, lutning, uppvik mot tröskel, genomföringar, avtalade avvikelser.
- Kvalitetsdokumentet skickas med länk till monteringsanvisningen (BBV § 2.5).
- Avvikelser: BBV § 1.3.1 (s. 5) kräver samråd med leverantör, skriftlig överenskommelse och notering i kvalitetsdokumentet. GVK s. 13: avvikelser "ska tydligt avtalas och dokumenteras" och "kan få betydelse ... vid eventuella skador". If: skada till följd av beställarens godkända avvikelse ersätts inte. LF K.8.3: kvalitetsdokument "utan avvikelse".
- Befintliga ytskikt, BBV § 4.1.3 (s. 14): "Huvudregeln är att alla befintliga ytskikt ska tas bort vid renovering." Ska alltid bort: ytskikt på sandspackel (och spacklet), kalkputs, asfaltprodukter, plastmattor, våtrumstapeter, "Lim, målarfärg, väv och liknande behandlingar." Går något inte att ta bort: rådgör med leverantören, anges i kvalitetsdokumentet. GVK s. 29 och 33: "Befintligt tät- och ytskikt ska tas bort innan ett nytt tät- och ytskikt appliceras."
- Nytt kakel på gammalt kakel: BKR:s frågesida: "Det kan fungera men är egentligen en fråga om materialval"; kontrollera med tillverkaren, väggen ska bära dubbel vikt, löser inte fel i lutningen. [BKR vanliga frågor](https://www.bkr.se/vanliga-fragor), odaterad. (Rör kakel på kakel, inte nytt tätskikt på kakel; för tätskikt gäller § 4.1.3.)
- MVK, ommålning: kakel är ett underlag "ej avsett för att måla på" och "ska ... avlägsnas helt". Länk `/badrum/mala-kakel/`.

---

## 8. Källarbadrum (bär "tätskikt badrum källare")

- BBV § 3.1.1 (s. 9–10), undantag vid massivkonstruktion mot mark utan utvändig isolering och kapillärbrytande skikt: tätskiktet kan begränsas till ytor med kraftig vattenbelastning, t.ex. duschplatsen, så att fukt kan diffundera ut genom övriga ytor. Fördelningen bestäms "i det enskilda fallet" med tätskiktsleverantören. Ytor utan tätskikt ska vara mineraliska. Figur 3: "Vid en isolerad och dränerad källare ska tätskikt utföras enligt branschreglerna på alla ytor i våtrummet."
- BBV: diffusionsöppet cementbaserat tätskikt är möjligt men inte ett godkänt system enligt § 6; kräver projektspecifikt godkännande från leverantören, noteras i kvalitetsdokumentet (s. 10).
- GVK § 8.1.2 (s. 34): undantag "till exempel i källare med tillskjutande fukt"; utred vilka delar som ska ha tätskikt; produkten ska vara avsedd för tillskjutande fukt; kontroll via kapillärbrytande material/isolering på ritningen eller fuktsäkerhetsprojektering av fuktsakkunnig, "det är beställaren/byggherrens ansvar". Plastmatta och folie ska **inte** användas "i källare i äldre hus utan kapillärbrytande skikt" (s. 35–36).
- BFS 2024:8 7 kap. 5 §: byggnadsdelar mot mark ska hindra markfukt "i en oacceptabel mängd".
- Möjliga interna länkar (inte krav i checklistan): `/fukt/fukt-i-kallaren/` (`src/content/guider/fukt/fukt-i-kallaren.mdx`) och `/grund/isolera-kallarvagg/` (`src/content/kunskap/grund/isolera-kallarvagg.mdx`). Adresserna antagna ur mappstrukturen, kontrollera mot bygget.
- Ingen egen regel för badrum på betongplatta på mark hittades utöver 7 kap. 5 § och zonreglerna.

---

## 9. Rotavdraget för badrummet

Konstanter från `src/lib/kalkyl/rotavdrag.ts` (läst hos Skatteverket 2026-09-20), inte ny källa:

| Konstant | Värde | Källa i modulen |
|---|---|---|
| ARET | 2026 | – |
| ROT_PROCENT | 30 | [Skatteverket, så fungerar rotavdraget](https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html) |
| ROT_PROCENT_HOJT | 50, bara betalningar 12 maj till 31 december 2025 | Skatteverket, nyhet 2025 |
| ROT_TAK_KR | 50 000 per person och år | Skatteverket |
| GEMENSAMT_TAK_KR | 75 000 per person och år (rot + rut) | Skatteverket |

Kontrollerat igen 2026-09-28 på samma sida: "Det är endast arbetskostnaden som ger rätt till rotavdrag. Material och resekostnader i samband med arbetet ger inte rätt till avdrag." Flera ägare kan dela, men högst 30 % av arbetskostnaden totalt.

Arbeten i badrum, [Skatteverket, Ger arbetet rätt till rotavdrag?](https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html), läst 2026-09-28, ingen datumrad på sidan. Småhus:

| Arbete | Rot | Ordagrant ur listan |
|---|---|---|
| Kakel och klinker | ja | "sätta kakel och klinker" |
| Byta plastmatta eller våtrumstapet | ja | "göra förbättringsarbeten, till exempel byta plastmatta till trägolv eller våtrumstapet till kakel" |
| Riva innerväggar, bygga om planlösning | ja | "riva väggar och bygga om planlösningen i ett hus" |
| VVS: toalett, dusch, badkar, handfat, blandare | ja | "installera och reparera vattenmätarkonsol, vattenfelsbrytare, element, termostat, blandare, kranar, toalett, dusch, badkar, handfat samt kakel- och klinkersättningar" |
| Ledningar | ja | "dra in och reparera el-, vatten- och avloppsledningar" |
| Badrumsinredning | ja, med villkor | "montera fast köks- och badrumsinredning ... i samband med omfattande byggarbete eller renovering" |
| El, spotlights, uttag | ja | "modernisera el samt byta och montera vägguttag", "installera inbyggda spotlights" |
| Målning | ja | "måla golv, tak, väggar" |
| Byggstädning | ja | "byggstäda material och andra grovsopor efter ett utfört rotarbete" |
| Bortforsling, container | **nej** | Inget avdrag för att "forsla bort till exempel byggmaterial, skräp eller möbler" |
| Besiktning, fuktmätning, kvalitetsansvarig | **nej** | "göra energideklarationer eller mäta fukt, radon och asbest", "anlita en arkitekt, kvalitetsansvarig, besiktningsman" |
| Bostad yngre än fem år | bara återställning | "Om bostaden är yngre än fem år får arbetet endast syfta till att återställa byggnaden till det skick den var i från början." |

Bostadsrätt (samma sida): "byta golvbrunn" ger rot; "utföra stambyten, flytta eller byta ut avloppsrör, flytta golvbrunn" ger **inte** rot.

- Rivning av badrummets ytskikt nämns inte ordagrant i listan. Checklistan och räknaren behandlar rivning som rotarbete; det är en tolkning ur "riva väggar", märk den. Se Osäkert.
- Egen insats ger inget rotavdrag (logiskt; Haga Plattsättning AB 2026-05-11 säger samma sak, firma).

---

## 10. Sökanalys: tätskikt badrum

Topp 5 enligt SOKORDSANALYS 8.2 (sökverktyg från USA; ordningen i google.se är **inte** kontrollerad i webbläsare i denna körning, det kan jag inte). Sökverktyget 2026-09-28 visade clasfixare.se och gds.se först, sedan se.weber (två), byggmax, bygghemma, sonochfar, vatrumstockholm.

1. **se.weber** (tillverkare). 403 igen 2026-09-28 på [regler för tätskikt](https://www.se.weber/blogg/regler-tatskikt-i-badrum-allt-du-behover-veta). Oläst. Om Weber är etta: läs i webbläsare innan texten skrivs.
2. **bkr.se** (branschorgan, [vanliga frågor](https://www.bkr.se/vanliga-fragor)). Har: kvalitetsdokument, källarundantaget, vad konsumenten ska kräva. Saknar: zonskiss i klartext, pris, försäkring, BFS 2024:8. Frågor kvar: får jag göra själv, vad kostar det.
3. **bygghemma.se** (butik, 2026-02-23). Har: zoner (förenklade), el kräver behörig, mått för WC. Saknar: versioner (varken BFS 2024:8, BBV 26:1 eller GVK 2026). Fel: säger att egen dokumentation med foto kan räcka för försäkringen, vilket inget av de tre lästa villkoren säger.
4. **byggfirma-norrkoping.se** (firma, "augusti 2026"). Har: steg-för-steg i tio punkter (det vi inte får göra). Saknar: versioner, zondefinition, pris, försäkring, författare.
5. **vatrumstockholm.se** (firma, odaterad). Fel: våtzon 1 som "minst 1 m ut från centrum, 2,2 m höjd", stämmer varken med BBV eller GVK (golv till tak, 1 m från platsen, 2,0 m). Saknar: versioner, pris, datum.
- Högt men utanför topp 5: **clasfixare.se** (ingen författare, inget datum, ingen regel utom BKR, avråder från att göra själv). **sonochfar.se** (2026-04-07, BBR 6:5331 som gällande, rot 50 %).

**Vad vår sida kan ha som ettan saknar:** (1) BFS 2024:8 7 kap. 7–9 §§ ordagrant och BFS 2024:14 punkt 3 om övergången; (2) BBV 26:1, GVK 2026, Säker Vatten 2026:1 och MVK 2026 med datum; (3) zonerna ur BBV § 3.2 och GVK § 4.2 med skiss; (4) BBV § 1.5 och GVK:s svar om att göra själv, ordagrant; (5) tre bolags villkor med sida och åldersavdragstabellen; (6) var folie, matta och rollat får användas (BBV tabell 1, GVK 8.2–8.4); (7) källarundantaget ur BBV och GVK; (8) pris med källa och datum och rot 30 %.

---

## 11. Interna länkar (checklistan punkt 9)

Ut: `/rakna/badrum-kostnad/` (`<Verktygskort kalkylator="badrum-kostnad" />` i kostnadsavsnittet), `/badrum/mala-kakel/`, `/badrum/vatrumsfarg/`, `/badrum/fogar-badrum/` (alla tre utkast, läggs till när målsidan publiceras), `/rakna/rotavdrag/` (finns). In: `/inomhus/gipsskruv/` H2 "Våtrum, brandgips och utegips" (meningen om tätskiktet finns, rad 170 i MDX:en). Externa länkar i brödtext bara Boverket och Skatteverket; övriga i `kallor`.

---

## 12. Osäkert eller saknas

- **Ordningen i topp 5 i google.se** ej kontrollerad (ingen webbläsare). Weber oläst (403).
- **Två oberoende namngivna firmor** med tätskiktspris per kvm: bara en (Bygghantverkarna, som också är Totalbyggarna).
- **Livslängd från branschorgan eller myndighet**: saknas. Bästa källan är Länsförsäkringars odaterade sida utan primärkälla; GVK:s "omkring 25 år" är från 2016.
- **PBL, att badrumsrenovering inte kräver lov eller anmälan**: inte kontrollerat i lagtexten i denna körning. Behövs för att säga "punkt c" i övergången säkert.
- **Rivning av badrummets ytskikt som rotarbete**: inte ordagrant hos Skatteverket.
- **Länsförsäkringar**: villkoret är VH25 från 2025-01-01 ur den nationella adressen; om ett VH26 finns eller om länsbolag avviker är okontrollerat. Rådsidan om tätskikt är odaterad.
- **Trygg-Hansas villkor**: inte läst, bara rådsidan (2024-06-12).
- **GVK-sidan om att göra själv och MVK:s frågesida**: odaterade.
- **Checklistans BBV-paragrafer**: "§ 1" ska vara § 1.5; "§ 4" om befintliga ytskikt är § 4.1.3.
- **Checklistans regel om åldersavdrag** motsägs av villkoren (avsnitt 5). Beslut hos SEO och GEO-agenten.

---
---

# Räknarunderlag: /rakna/badrum-kostnad/

Eget avsnitt enligt koordinatorns beställning (checklistan `raknare.md` punkt 11 ber om en egen fil, `underlag-kalkyl-badrum-kostnad-[datum].md`; koordinatorn har valt samma fil). Formelmodul: `src/lib/kalkyl/renovering.ts`, delad med kök.

## A. Källorna för priser

| Kod | Källa | Typ | Datum | Status |
|---|---|---|---|---|
| BE | [Badrumsexperter, vad kostar en badrumsrenovering](https://www.badrumsexperter.se/pris/vad-kostar-en-badrumsrenovering) | offertförmedlare ("prisuppskattning baserat på data som Badrumsexperter har samlat in") | datePublished 2020-08-17, **dateModified 2024-04-06**, titel "(Pris 2026)" | stöd. Samma kalkyl finns hos [Hantverkarpriser](https://www.hantverkarpriser.se/sida/prisguide-badrumsrenovering), där WebFetch-utdraget säger 10 m²; BE säger 5 kvm. Räknas som en källa |
| BS | [Byggstart, renovera badrum](https://www.byggstart.se/pris/renovera-badrum) | offertförmedlare, topp 1 | odaterad, titel "2026", ingen författare | stöd |
| TB | [Totalbyggarna, vad kostar det att renovera ett badrum](https://www.totalbyggarna.se/blogg/vad-kostar-det-att-renovera-ett-badrum/), Mateusz Kerlin | firma = Bygghantverkarna (samma som sonochfar.se) | 2026-03-30 | namngiven firma med datum |
| SF | [sonochfar.se](https://sonochfar.se/), Bygghantverkarna Jakub och Far AB, Nynäshamn: startsidans timpris; [tätskikt](https://sonochfar.se/blog/tatskikt-badrum/) och [plattsättare pris per kvm](https://sonochfar.se/blog/plattsattare-pris-per-kvm/) | firma, **samma som TB** | 2026-04-07 (bloggsidorna); startsidan läst 2026-09-28 | namngiven firma med datum |
| HK | [Hantverkskollen, tätskikt badrum kostnad 2026](https://www.hantverkskollen.se/artiklar/rormokare/rormokare-tatskikt-badrum-kostnad-2026) | offertförmedlare | 2026-04-25 | stöd |
| HV | [Hägersten VVS, kostnad byta golvbrunn](https://hagerstenvvs.se/kostnad-byta-golvbrunn/) | firma | datum ej utläst | stöd för golvbrunn |

Namngivna oberoende firmor med datum och pris per post: **en** (TB/SF). Checklistans krav på två läsbara källor per post uppfylls bara om förmedlarna räknas med. Kandidaterna Villaägarna och Vi i Villa gav ingen prissida i sökningen.

## B. Pris per post, arbete och material

Badrum 5 kvm golvyta i alla exempel. Kronor inkl. moms, före rot.

| Post | BE arbete | BE material (egen räkning) | BS entreprenör | TB arbete | Övrigt |
|---|---|---|---|---|---|
| Rivning | 19 200 (32 h × 600) | 0 | 16 000 (inkl. bortforsling); spann 8 000–20 000; "20 timmar" för 5 kvm | 5 000–10 000 | – |
| Bortforsling, container | ingår ej separat | – | ingår i rivning | 2 000–5 000 | ger inte rot (Skatteverket) |
| Underlag, snickeri, förarbeten | 28 800 (48 h × 600) | 20 000 | 20 000; spann 15 000–35 000 | 5 000–12 000 (snickerier/montering) | – |
| Tätskikt | ingår i förarbeten/plattsättning | ingår | 12 000; spann 8 000–12 000 | 6 000–12 000 | SF: 10 000 arbete + 6 000 material; HK: 15 000–22 000 totalt |
| Kakel och klinker, arbete | 42 000 (70 h × 600) | 3 500 (fix, fog m.m.) | 20 000; spann 12 000–25 000 | golv 8 000–15 000, väggar 10 000–20 000 | SF: normal plattsättning 900–1 200 kr/kvm arbete, 1 200–2 500 kr/kvm med material (2026-04-07) |
| Kakel och klinker, material | – | 24 500 (egen post) | 3 000 (egna inköp) | – | BS: kakel "från cirka 80 kronor per kvadratmeter" |
| VVS | 7 200 (12 h × 600) | 6 000 | 40 000; spann 25 000–50 000 | 10 000–25 000 | HV: golvbrunnsbyte från ca 5 000 kr utan ingrepp i tätskiktet, 60 000–100 000+ när tätskikt och golv görs om |
| El | 7 200 (12 h × 600) | 8 000 | 20 000; spann 20 000–32 000 | 4 000–10 000 | – |
| Målning | 9 600 (16 h × 600) | 3 000 | 5 000; spann 4 000–6 500 | – | – |
| Montering av inredning | 4 800 (8 h × 600) | – | – | ingår i snickerier | – |
| Inredning, sanitet, armatur | – | 25 000 ("standardvitvaror", toalett, handfat, badkar, duschkabin, skåp, armatur) | 16 000 armaturer + 32 000 badkar och möbler | – | – |
| Städ | saknas | – | saknas | saknas | **ingen källa**; byggstäd ger rot |
| **Summa** | **118 800** (198 h) | **40 500 + 24 500 + 25 000 = 90 000** | **133 000 entreprenör + 51 000 egna inköp = 184 000** ("cirka 185 000") | – | – |

Egen räkning, BE material per post: posten i BE:s specifikation minus timmar × 600 kr. VVS 13 200 − 7 200 = 6 000; el 15 200 − 7 200 = 8 000; förarbeten 48 800 − 28 800 = 20 000; målning 12 600 − 9 600 = 3 000; plattsättning 45 500 − 42 000 = 3 500. Summa 40 500 = BE:s "Materialkostnader". Totalen 118 800 + 40 500 + 24 500 + 25 000 = 208 800; BE:s rot 35 640 = 0,30 × 118 800; 208 800 − 35 640 = 173 160 = BE:s "Totalkostnad". Kalkylen går ihop.

- BS delar inte entreprenörens poster i arbete och material. Hur stor del av 133 000 som är arbete är **okänt**.
- TB:s procentandelar per post går inte ihop (checklistan); endast kronspannen används.
- TB totalt före rot: upp till 5 m² 80 000–120 000; 5–8 m² 120 000–180 000; över 8 m² 180 000–300 000. "Materialkostnaden utgör ofta 40-50 procent" och arbetet "50–70%" i samma text (går inte ihop; används inte).

## C. Timpriser

| Källa | Timpris | Före/efter rot | Egen räkning före rot |
|---|---|---|---|
| BE | 600 kr/h | anges som timpris, oklart om moms (Hantverkarpriser-utdraget: "including VAT") | – |
| SF/TB | 350 kr/h bygg och snickeri; 481,25 kr/h badrum, el och VVS | efter rot 30 %, inkl. moms | 350 / 0,70 = **500 kr/h**; 481,25 / 0,70 = **687,50 kr/h** |
| SF | material "till kvittopris ... plus 10 % påslag" | – | – |
| SF | plattsättare 450–650 kr/h | före rot | – |

## D. Formler

Egen modell, märkt. Varje konstant har källa i tabellerna ovan eller är märkt ANTAGANDE.

1. Arbete per post = timmar per post × timpris.
   - Timmar för 5 kvm: BE (rivning 32, förarbeten 48, plattsättning 70, VVS 12, el 12, målning 16, montering 8; summa 198).
   - **ANTAGANDE:** timmar för rivning, förarbeten, plattsättning och målning skalar linjärt med golvytan (198 h / 5 kvm ger 39,6 h/kvm om allt skalar; VVS, el och montering är fasta). Ingen källa anger skalningen per post. Stöd: BS "8.000 – 16.000 kronor extra per kvadratmeter" för större badrum.
2. Tätad yta (för tätskikt och kakel på vägg), egen formel: golvyta + omkrets × takhöjd − dörröppning. Stöd: BBV § 3.1 och GVK s. 14, hela rummet ska ha tätskikt när det är kaklat.
   - **ANTAGANDE:** takhöjd 2,4 m, dörr 0,8 × 2,0 m. Exempel 2,0 × 2,5 m: 5 + 9 × 2,4 − 1,6 = **25,0 kvm**. LeadHive: 6 kvm ger "cirka 28 kvm" (stöd, rimligt nära).
3. Material per post = BE:s materialbelopp skalat med yta (kakel, tätskikt) eller fast (VVS, el, inredning i tre nivåer). **ANTAGANDE** för tre nivåer: BE:s 25 000 kr är "standard"; BS 48 000 (16 000 + 32 000) kan användas som mellannivå. **Ingen källa för en tredje, dyr nivå.**
4. Rotunderlag = summa arbete för poster som ger rot (allt utom bortforsling/container, besiktning). Material, resor och bortforsling ingår inte (Skatteverket).
5. Rot = min(ROT_PROCENT/100 × rotunderlag, ROT_TAK_KR × antal ägare − redan utnyttjat rot). Antal ägare 1 eller 2. Utnyttjat tak per person dras av; gemensamt tak 75 000 om rut också använts. Konstanter från `rotavdrag.ts`.
6. Att betala = summa arbete + summa material − rot.
7. Egen insats: posten sätts till 0 kr arbete, materialet kvar. Bara för poster SOKORDSANALYS 8.3 säger ja till: rivning (med förbehåll), målning utanför våtzon 1, montering av inredning (golvstående WC med villkor), bortforsling. **Aldrig** tätskikt, kakel i våtzon 1, golv, VVS-installation, el.

## E. Gränser

- Golvyta: **ANTAGANDE** 2–15 kvm (BE:s exempel 5 kvm; TB:s största kategori "över 8 m²", Totalbyggarnas tätskiktssida till 15 kvm).
- Antal ägare: 1 eller 2.
- Utnyttjat rot i år: 0 till 50 000 per person.
- Rotsatsen 30 % gäller betalningar 2026. 50 % bara för betalning 12 maj till 31 december 2025.

## F. Räkneexempel att testa mot

| Nr | Indata | Förväntat | Källa |
|---|---|---|---|
| 1 | BE:s badrum, 5 kvm, 1 ägare, inget utnyttjat | arbete 118 800; material 90 000; rot 35 640; att betala 173 160 | BE, kontrollräknat ovan |
| 2 | Som 1 men 2 ägare | rot 35 640 (under ett tak) | egen räkning |
| 3 | Arbete 200 000, 1 ägare | rot 0,30 × 200 000 = 60 000 → tak **50 000** | egen räkning, ROT_TAK_KR |
| 4 | Arbete 200 000, 2 ägare | rot **60 000** (varje ägare 30 000, under 50 000) | egen räkning |
| 5 | Arbete 118 800, 1 ägare, 30 000 redan utnyttjat | rot min(35 640, 20 000) = **20 000** | egen räkning |
| 6 | Tätad yta 2,0 × 2,5 m, 2,4 m tak, dörr 0,8 × 2,0 | 25,0 kvm | egen formel D2 |
| 7 | SF timpris efter rot 481,25 | före rot 687,50 | egen räkning |
| 8 | BS:s exempel | 133 000 + 51 000 = 184 000 (sidan: "cirka 185.000") | BS |

## G. Vad som är eget antagande

- Linjär skalning av timmar med golvyta (D1).
- Takhöjd 2,4 m och dörrmått (D2).
- Tre inredningsnivåer; den dyra nivån saknar källa (D3).
- Ytgränserna 2–15 kvm (E).
- Att rivning av ytskikt ger rot (inte ordagrant hos Skatteverket).
- BE:s 600 kr/h används som grundtimpris; SF:s 500 och 687,50 kr/h som jämförelse. Inget medelvärde.

## H. Saknas

- Byggstädning i kronor: ingen källa.
- Container i kronor: bara TB (2 000–5 000, "bortforsling avfall"). Ingen andra källa.
- Arbetsandel av BS:s entreprenörsposter.
- Inredning i tre nivåer med källa.
- En andra oberoende namngiven firma för VVS och el med datum.
- Datum för Hägersten VVS-sidan.

## Sidor jag inte kunde läsa

- se.weber, regler för tätskikt: 403.
- Säker Vatten på `www.sakervatten.se/...`: 404 (hämtad på `sakervatten.se/...`).
- Länsförsäkringar: `lansforsakringar.se/stockholm/.../villahemforsakring/` 404; villkors-PDF:en gick bara att läsa via WebFetch-sparad fil (curl gav 34 kB utan PDF).
- Swedbanks villkorsarkiv: 403.
- totalbyggarna.se/om-oss/: 404 (ägarskapet kontrollerat i startsidans HTML i stället).
