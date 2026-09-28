# Underlag varv 2: kontrollplansgeneratorn

Beställning: avsnitt 13 i `docs/briefer/spec-kalkyl-kontrollplan-2026-09-28.md`. Bygger på `docs/briefer/underlag-kalkyl-kontrollplan-2026-09-28.md`.

- **Allt läst 2026-09-28.** Endast författningstext och myndighet: riksdagen.se, svenskforfattningssamling.se, rinfo.boverket.se, boverket.se.
- **Hur konsoliderad lydelse har fastställts för BFS:** forfattningssamling.boverket.se är en JavaScript-app och ger bara ett tomt skal (se Kunde inte läsas). I stället är Boverkets officiella rinfo-flöde (R0) läst i sin helhet: varje ändringsförfattning publiceras där under grundförfattningens mapp. Gällande lydelse = grundförfattningen + de ändringsförfattningar som flödet listar. Flödet är uppdaterat 2026-08-28; en ändring beslutad efter det syns inte.
- **Hur konsoliderad lydelse har fastställts för PBL och PBF:** riksdagens SFS-text, som anger "Ändrad t.o.m." och märker varje paragraf med sin senaste ändringsförfattning.
- **Utdrag är ordagranna.** Radbrytningar i källan är borttagna. Där något är egen slutsats står "egen läsning".

---

## Källförteckning

Tabellerna nedan hänvisar med id. Alla lästa 2026-09-28.

| Id | Källa | Adress | Status i källan |
|---|---|---|---|
| R1 | Plan- och bygglag (2010:900), riksdagen.se, SFS-text | https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/ (text: https://data.riksdagen.se/dokument/sfs-2010-900.text) | "Ändrad: t.o.m. SFS 2026:1583" |
| R2 | Plan- och byggförordning (2011:338), riksdagen.se | https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/ (text: https://data.riksdagen.se/dokument/sfs-2011-338.text) | "Ändrad: t.o.m. SFS 2026:1722" |
| R3 | SFS 2026:746 Lag om ändring i plan- och bygglagen, officiell pdf | https://svenskforfattningssamling.se/sites/default/files/sfs/2026-05/SFS2026-746.pdf (sida: https://svenskforfattningssamling.se/doc/2026746.html) | Utfärdad 28 maj 2026, publicerad 2 juni 2026 |
| R4 | SFS 2026:1265 Förordning om ändring i plan- och byggförordningen, officiell pdf | https://svenskforfattningssamling.se/sites/default/files/sfs/2026-06/SFS2026-1265.pdf (sida: https://svenskforfattningssamling.se/doc/20261265.html) | Utfärdad 18 juni 2026, publicerad 24 juni 2026 |
| R5 | Lag (2003:778) om skydd mot olyckor, riksdagen.se | https://data.riksdagen.se/dokument/sfs-2003-778.text | "Ändrad: t.o.m. SFS 2025:1077" |
| R6 | Förordning (2003:789) om skydd mot olyckor, riksdagen.se | https://data.riksdagen.se/dokument/sfs-2003-789.text | "Ändrad: t.o.m. SFS 2026:1377" |
| R0 | Boverkets författningssamling, rinfo-flöde (Atom) | https://rinfo.boverket.se/index.atom | `<updated>2026-08-28T07:55:57Z</updated>`, 464 poster |
| B4 | BFS 2024:4 | https://rinfo.boverket.se/BFS2024-4/pdf/BFS2024-4.pdf | grundförfattning |
| B4a | BFS 2026:6 (ändring i BFS 2024:4) | https://rinfo.boverket.se/BFS2024-4/pdf/BFS2026-6.pdf | i kraft 1 juli 2026 |
| B6 | BFS 2024:6 | https://rinfo.boverket.se/BFS2024-6/pdf/BFS2024-6.pdf | grundförfattning |
| B7 | BFS 2024:7 | https://rinfo.boverket.se/BFS2024-7/pdf/BFS2024-7.pdf | grundförfattning |
| B7a | BFS 2025:10 (ändring i BFS 2024:7) | https://rinfo.boverket.se/BFS2024-7/pdf/BFS2025-10.pdf | i kraft 1 december 2025 |
| B8 | BFS 2024:8 | https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf | grundförfattning |
| B9 | BFS 2024:9 | https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf | grundförfattning |
| B13 | BFS 2024:13 | https://rinfo.boverket.se/BFS2024-13/pdf/BFS2024-13.pdf | grundförfattning |
| B14 | BFS 2024:14 (BBR 31, omtryck av BFS 2011:6) | https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf | omtryck |
| B25-9 | BFS 2025:9 | https://rinfo.boverket.se/BFS2007-5/pdf/BFS2025-9.pdf | i kraft 1 juli 2025 |
| B26 | BFS 2026:9 | https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf | i kraft 1 oktober 2026 |
| B26a–e | BFS 2026:13, 2026:14, 2026:15, 2026:16, 2026:17 (ändringar i BFS 2026:9) | https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-13.pdf … /BFS2026-17.pdf | se tabell 1 |
| KB1 | PBL kunskapsbanken: Bygglov för altan | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/bygglov-for-anlaggningar/altan/ | Senast ändrad 12 december 2025 |
| KB2 | PBL kunskapsbanken: Vad är en tillbyggnad? | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/vad-ar-en-tillbyggnad/ | Senast ändrad 30 december 2025 |
| KB3 | PBL kunskapsbanken: Tillbyggnad, annan byggnad än komplementbyggnad eller komplementbostadshus | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/tillbyggnad/annan-byggnad/ | Senast ändrad 25 juni 2026 |
| KB4 | PBL kunskapsbanken: Eldstäder och kanaler | https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/brandskydd/uppkomst-brand/eldstader-kanaler/ | Senast ändrad 1 juli 2026 |
| KB5 | PBL kunskapsbanken: Räcken och ledstänger | https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/sakerhet-anvandning/racken-ledstanger/ | Senast ändrad 1 juli 2025 |
| KB6 | PBL kunskapsbanken: Obligatorisk sakkunnigkontroll | https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/obligatorisk-sakkunnigkontroll/ | 1 juli 2026 |

---

## 1. Ändringsförfattningar per BFS

Källa för hela tabellen: R0, läst 2026-09-28. Varje rad i flödet vars pdf ligger i grundförfattningens mapp, eller vars titel är "ändring i … (BFS 2024:x)".

| Grundförfattning | Ändringsförfattningar i flödet | Vad de ändrar | Ikraft | Källa |
|---|---|---|---|---|
| BFS 2024:4 Aktsamhet | **BFS 2026:6** | Endast 1 § (hänvisningen till PBL ändras till "10 kap. 2 c §") | 1 juli 2026 | B4a |
| BFS 2024:6 Bärförmåga | **inga** | – | – | R0 |
| BFS 2024:7 Brand | **BFS 2025:10** | 2 kap. 6–8 §§ (byggnadsklasser), 5 kap. 21 §, 6 kap. 10 § och rubriken före 6 kap. 10 § | 1 december 2025 | B7a |
| BFS 2024:8 Hygien, vatten, avfall | **inga** | – | – | R0 |
| BFS 2024:9 Säkerhet vid användning | **inga** | – | – | R0 |
| BFS 2026:9 Energi | **BFS 2026:13** | 2 kap. 1 §; ny 2 kap. 10 § | 1 januari 2027 | B26a |
| | **BFS 2026:14** | 2 kap. 1 och 3 §§, 3 kap. 1 §, 4 kap. 2 §; nya 2 kap. 8 a §, 3 kap. 3 a och 3 b §§, 4 kap. 3 § | 1 januari 2028 | B26b |
| | **BFS 2026:15** | 4 kap. 3 § | 1 januari 2029 | B26c |
| | **BFS 2026:16** | 1 kap. 2 och 5 §§, 2 kap. 3, 6, 7, 8 a och 10 §§, 3 kap. 3 a §, 4 kap. 2 §, bilaga 2; ny 4 kap. 1 a § | 1 januari 2030 | B26d |
| | **BFS 2026:17** | bilaga 2 | 1 januari 2033 | B26e |

### 1.1 BFS 2025:9 rör inte BFS 2024:9

| Fråga | Svar, ordagrant | Källa |
|---|---|---|
| Vad är BFS 2025:9? | "Boverkets föreskrifter om ändring i Boverkets föreskrifter och allmänna råd (2007:5) för certifiering av energiexpert; beslutade den 13 juni 2025." | B25-9 |
| Vad ändras? | "… att 10 § ska ha följande lydelse." (behörighetskrav för energiexpert) | B25-9 |
| Ikraft | "Denna författning träder i kraft den 1 juli 2025." | B25-9 |
| Flyttar eller numrerar den om något i 2 kap. BFS 2024:9? | **Nej.** Den ändrar inte BFS 2024:9 alls. Flödet har ingen ändringsförfattning till BFS 2024:9. | R0, B25-9 |
| Var står glaskraven? | BFS 2024:9 2 kap. 30 § ("Skydd mot fall genom glas") och 31 § ("Skydd mot skärskador"), oförändrade. | B9 |

Stockholms "2 kap. 30–31 § BFS 2025:9" (underlaget 4.7) är alltså fel författningsnummer; rätt är **BFS 2024:9 2 kap. 30–31 §§**.

---

## 2. Avstämning av lagrummen (13.1)

Besked: **Stämmer** = paragrafen finns med det nummer specen använder och säger det specen lägger på den. Annars **Nytt nummer**, **Ändrad lydelse** eller **Hittas inte**. Kolumnen "Läst" är alltid 2026-09-28.

### 2.1 BFS 2024:4 (gällande: grundförfattningen, 1 § i lydelse BFS 2026:6)

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 6 § | BFS 2024:4 | "Om det finns särskild risk för personskador, ska arbetsplatser för bygg-, rivnings- och markåtgärder vara ordnade så att tillträdet för obehöriga försvåras." | Stämmer | B4, 2026-09-28 |
| 7 § | BFS 2024:4 | "Vid bygg-, rivnings- och markåtgärder ska aktsamhetsåtgärder vidtas så att risken för personskador begränsas. Vid bygg-, rivnings- och markåtgärder ska även skäliga aktsamhetsåtgärder vidtas till skydd mot uppkomst och spridning av 1. brand, 2. buller, och 3. damm eller föroreningar i skadliga koncentrationer." | Stämmer | B4, 2026-09-28 |
| 9 § 1 | BFS 2024:4 | "Vid rivningsåtgärder ska 1. virkesförstörande insekter eller andra skadedjur som finns i byggnadsverket avlägsnas och oskadliggöras" | Stämmer | B4, 2026-09-28 |
| 9 § 2 | BFS 2024:4 | "2. material som kan ge skador på människor, djur eller växter tas om hand på ett betryggande sätt." | Stämmer. Ordet "inventering" står inte i paragrafen (egen läsning) | B4, 2026-09-28 |

### 2.2 BFS 2024:6 (gällande: grundförfattningen, inga ändringar)

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 1 kap. 2 § andra st. | BFS 2024:6 | Andra stycket: "Föreskrifterna i 2–7 kap. gäller vid uppförande av nya byggnader." Femte stycket: "Föreskrifterna gäller även på motsvarande sätt i tillämpliga delar vid uppförande och ändring av andra anläggningar än byggnader, där bristande bärförmåga, stadga och beständighet kan medföra risk för oproportionerligt stora skador, om inte annat särskilt anges." | **Nytt nummer: 1 kap. 2 § femte st.** Stycken räknade efter indragen i pdf:en: 1 "1 kap. gäller…", 2 "2–7 kap.…", 3 "8 kap.…", 4 "mark- och rivningsarbeten", 5 "andra anläggningar…", 6 "bergtunnlar". Villkoret "risk för oproportionerligt stora skador" följer med | B6 s. 1, 2026-09-28 |
| 1 kap. 7 § | BFS 2024:6 | "Byggprodukter och material ska ha kända och dokumenterade egenskaper i de avseenden som har betydelse för byggnadens förmåga att uppfylla kraven i denna författning." | Stämmer | B6, 2026-09-28 |
| 1 kap. 12 § | BFS 2024:6 | "Byggnader ska utföras 1. på ett fackmässigt sätt, och 2. enligt gällande handlingar." | Stämmer | B6, 2026-09-28 |
| 1 kap. 13 § | BFS 2024:6 | "Vid ändring av en byggnad ska det klarläggas om 1. byggnaden har brister avseende kraven på bärförmåga, stadga och beständighet som kan åtgärdas inom ramen för den planerade åtgärden, …" Andra st.: "… ska skicket på befintliga bärverk kontrolleras i den utsträckning som krävs …" | Stämmer | B6, 2026-09-28 |
| 1 kap. 15 § | BFS 2024:6 | "Kontroll av att kraven på bärförmåga, stadga och beständighet i byggnader och sådana andra anläggningar som omfattas av denna författning uppfylls ska göras under projektering och utförande enligt 16–19 §§." | Stämmer (ingen kontroll i färdig byggnad) | B6, 2026-09-28 |
| 1 kap. 17 § | BFS 2024:6 | "Dimensioneringskontroll ska göras för byggnader i säkerhetsklass 2 eller 3. Dimensioneringskontrollen ska utföras av en person som inte har varit delaktig i framtagandet av de handlingar som ska kontrolleras." | Stämmer | B6, 2026-09-28 |
| 1 kap. 18 § | BFS 2024:6 | "Vid kontroll under utförande ska det kontrolleras att 1. arbetet utförs enligt gällande handlingar, och 2. tidigare inte verifierbara projekteringsförutsättningar som är av betydelse för säkerheten är uppfyllda." | Stämmer | B6, 2026-09-28 |
| 1 kap. 19 § | BFS 2024:6 | "Byggprodukter och material ska kontrolleras när de tas emot på byggarbetsplatsen. Kontroll ska göras av att byggprodukter och material har förutsatta egenskaper." | Stämmer | B6, 2026-09-28 |
| 2 kap. 6 § | BFS 2024:6 | "Bärverk i följande byggnader och andra anläggningar får hänföras till säkerhetsklass 2: 1. Små byggnader med högst två plan där få personer vistas mer än tillfälligt, såsom en- eller tvåbostadshus, mindre kontor och mindre industrilokaler." | Stämmer | B6 s. 7, 2026-09-28 |

### 2.3 BFS 2024:7 (gällande: grundförfattningen i lydelse BFS 2025:10)

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 1 kap. 7 § | BFS 2024:7 | "Byggprodukter och material ska ha kända och dokumenterade egenskaper i de avseenden som har betydelse för byggnadens förmåga att uppfylla kraven i denna författning." | Stämmer | B7 s. 3, 2026-09-28 |
| 1 kap. 18 § | BFS 2024:7 | "Byggprodukter och material ska kontrolleras när de tas emot på byggarbetsplatsen. Kontroll ska göras av att byggprodukter och material har förutsatta egenskaper." | Stämmer | B7 s. 5, 2026-09-28 |
| 2 kap. 34 § | BFS 2024:7 | "Brandvarnare ska vara utformade så att de med hög tillförlitlighet har förmåga att snabbt detektera och effektivt varna i händelse av brand." | Stämmer som krav på **utformning**. Kravet att brandvarnare ska **finnas** står i 7 kap. 47 §, se nästa rad | B7 s. 12, 2026-09-28 |
| 2 kap. 35 § | BFS 2024:7 | "Brandvarnare ska vara placerade så att de möjliggör effektiv detektering och varning i händelse av brand." P. 2–3: "En brandvarnare täcker högst 60 m2." "Minst en brandvarnare är placerad på varje plan." | Stämmer (placering) | B7 s. 12, 2026-09-28 |
| (saknas i specen) 7 kap. 47 § | BFS 2024:7 | "Brandvarnare ska övervaka följande utrymmen: 1. Verksamhetsklass 3A." 2 kap. 14 §: VK 3A omfattar "bostäder i en- och tvåbostadshus" | **Lägg till** som kravparagraf för `till-brandvarnare` | B7 s. 9 och 43, 2026-09-28 |
| 4 kap. 8 § | BFS 2024:7 | "Byggnader ska vara utformade så att temperaturen på ytan av brännbara byggnadsdelar, fast inredning och fasta installationer inte överstiger 85 °C vid normal drift." | Stämmer | B7 s. 21, 2026-09-28 |
| 4 kap. 9 § | BFS 2024:7 | "Eldstäder ska vara utformade så att de tillförs tillräckligt med förbränningsluft för att ge en effektiv förbränning för avsett bränsleslag och bränslemängd." | Stämmer | B7 s. 21, 2026-09-28 |
| 4 kap. 10 § | BFS 2024:7 | Första st.: "Eldstäder för fast eller flytande bränsle ska vara försedda med eldstadsplan i obrännbart material." **Tredje st., talen ordagrant:** "Eldstadsplan för slutna eldstäder ska täcka minst 0,30 meter framför eldstaden och minst 0,10 meter på vardera sidan om eldstaden alternativt minst 0,20 meter utanför vardera sida av öppningen." | Stämmer. Konstanter: `fram` 0,30, `sida` 0,10, `utanforOppning` 0,20 (m) | B7 s. 21, 2026-09-28 |
| 4 kap. 13 § | BFS 2024:7 | "Eldstäder, skorstenar samt rök- och avgaskanaler ska vara placerade på underlag med sådan bärförmåga att otätheter på grund av sättningar inte uppkommer." | Stämmer | B7 s. 22, 2026-09-28 |
| 4 kap. 14 § | BFS 2024:7 | "Skorstenar samt rök- och avgaskanaler utanför det utrymme där eldstaden är placerad, ska vara utformade så att yttemperaturen inte överstiger 100 °C när eldstaden drivs med högsta dimensionerande effekt." | Stämmer | B7 s. 22, 2026-09-28 |
| 4 kap. 16 § | BFS 2024:7 | **Ordagrant, hela paragrafen:** "Skorstenar och rökkanaler ska mynna minst 1,0 meter över taktäckningen." | Stämmer. Konstant `mynning` 1,0 (m) | B7 s. 22, 2026-09-28 |
| 4 kap. 17 § | BFS 2024:7 | "Skorstenar samt rök- och avgaskanaler ska ha tillfredställande täthet mot läckage av förbränningsgaser." | Stämmer | B7 s. 22, 2026-09-28 |
| 4 kap. 19 § | BFS 2024:7 | "Rökkanaler och tillhörande anslutningar, luckor och liknande, ska 1. vara utformade i brandteknisk klass G(x) med erforderligt skyddsavstånd x till brännbara byggnadsdelar, fast inredning och fasta installationer, eller 2. omges av ett skorstensschakt av obrännbart material i lägst brandteknisk klass EI 60 i byggnadsklass 1 och lägst brandteknisk klass EI 30 i byggnadsklass 2 och 3." | Stämmer | B7 s. 22, 2026-09-28 |
| 4 kap. 21 § | BFS 2024:7 | "Eldstäder, skorstenar samt rök- och avgaskanaler ska vara utformade så att de är åtkomliga för rensning, kontroll och inspektion utan olägenhet." | Stämmer | B7 s. 23, 2026-09-28 |
| 5 kap. 42 § | BFS 2024:7 | "Byggnadsdelar och fasta installationer vars funktion är nödvändiga för att upprätthålla funktionen i brandavskiljande konstruktioner ska vara utformade enligt följande: 1. Så att de med hög tillförlitlighet upprätthåller den brandavskiljande konstruktionens funktion." | Stämmer (paragrafen finns och lyder så). Egen läsning: att genomföringen omfattas följer av definitionen i 1 kap. 4 §: "brandcellsgräns: konstruktion – inklusive genomföringar och liknande samt anslutningar till angränsande byggnadsdelar – med brandavskiljande förmåga …", och klassen av 5 kap. 29 §: "Brandcellsgränser i byggnadsklass 2 och 3 ska vara utformade i lägst brandteknisk klass EI 30." Förslag till Krav för `vent-brandtatning`: "BFS 2024:7 5 kap. 29 och 42 §§" | B7 s. 1, 28, 30, 2026-09-28 |
| (hör till ventilation) 5 kap. 21 § | **BFS 2024:7 i lydelse BFS 2025:10** | "Trots 9–16 §§ får följande delar av luftbehandlingsinstallationer vara utformade i brandteknisk klass E: 1. Kanaler i en- eller tvåbostadshus och i komplementbyggnader som kompletterar en- eller tvåbostadshus." | Ändrad lydelse sedan 1 dec 2025 (före: "Kanaler i en- eller tvåbostadshus och komplementbyggnader.") Specen hänvisar inte dit; underlaget 4.4 gör det | B7a, B7 s. 26, 2026-09-28 |
| 5 kap. 50 § andra st. 2 | BFS 2024:7 | Andra st.: "Trots första stycket får taktäckning vara utformad i enligt följande:" P. 2: "Lägst brandteknisk klass E på mindre tak över uteplats, skärmtak över entré eller liknande." | Stämmer (stycke räknat efter indrag; "i enligt" står så i källan) | B7 s. 32, 2026-09-28 |
| 6 kap. 5 § | BFS 2024:7 | "Byggnader ska vara utformade med skyddsavstånd till andra byggnader på 8 meter eller utformade med brandavskiljning i motstående delar inom detta avstånd." | Stämmer | B7 s. 33, 2026-09-28 |
| 6 kap. 10 § | **BFS 2024:7 i lydelse BFS 2025:10** | Rubrik: "Komplementbyggnader som kompletterar en- eller tvåbostadshus". "Trots 5 § krävs inte skydd mot brandspridning till och från komplementbyggnader som kompletterar en- eller tvåbostadshus om komplementbyggnadens byggnadsarea är högst 15 m2." | **Ändrad lydelse sedan 1 dec 2025.** Grundförfattningen: "… komplementbyggnader med en byggnadsarea på högst 15 m2." Undantaget gäller nu bara komplementbyggnad till en- eller tvåbostadshus. Numret är detsamma | B7a, B7 s. 34, 2026-09-28 |

### 2.4 BFS 2024:8 (gällande: grundförfattningen, inga ändringar)

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 3 kap. 4 § | BFS 2024:8 | "Byggnaders ventilationssystem ska vara utformade så att rum kan ha kontinuerlig luftväxling." | Stämmer | B8 s. 5, 2026-09-28 |
| 3 kap. 5 § | BFS 2024:8 | **Talen ordagrant:** "Ventilationssystem för bostäder ska vara utformade för ett uteluftsflöde på minst 0,35 l/s per kvadratmeter golvarea. Ventilationssystem för rum i bostäder ska vara utformade för ett uteluftsflöde på minst 4,0 l/s per person." | Stämmer. Konstanter: `flodeM2` 0,35, `flodePerson` 4,0 | B8 s. 5, 2026-09-28 |
| 7 kap. 1 § | BFS 2024:8 | "Fukttillstånden i byggnadsdelar får inte överskrida de högsta tillåtna fukttillstånden." | Stämmer | B8 s. 6, 2026-09-28 |
| 7 kap. 4 § | BFS 2024:8 | "Byggnader ska vara utformade så att regnvatten och smältvatten leds bort från byggnaderna i tillräcklig omfattning." | Stämmer | B8 s. 7, 2026-09-28 |
| 8 kap. 1 § | BFS 2024:8 | "Vatten- och avloppsinstallationer ska vara utformade så att de har tillräcklig beständighet mot de yttre och inre belastningar de förväntas utsättas för." Sista st.: "Installationer för tappvatten ska vara utformade för ett statiskt vattentryck på lägst 1 MPa och med hänsyn till den påverkan som tryckslag medför." | Stämmer | B8 s. 7–8, 2026-09-28 |
| 8 kap. 2 § | BFS 2024:8 | "Om byggnadsdelar riskerar att utsättas för vattenläckage från vatteninstallationer, ska det finnas funktioner som begränsar läckaget eller dess skadeverkningar." | Stämmer | B8 s. 8, 2026-09-28 |
| 8 kap. 5 § | BFS 2024:8 | "Installationer för tappvatten ska vara utformade så att tappvattnet inte kan förorenas av gaser eller vätskor genom återströmning eller på annat sätt." | Stämmer | B8 s. 8, 2026-09-28 |
| 8 kap. 6 § | BFS 2024:8 | Första st.: "Installationer för tappvatten ska vara utformade så att den mikrobiella tillväxten i tappvattnet inte främjas." **Tredje st., talet ordagrant:** "Installationer för tappvarmvatten ska vara utformade så att en vattentemperatur på lägst 50 °C kan uppnås vid tappstället." | Stämmer. Konstant `varmvatten` 50 | B8 s. 8, 2026-09-28 |
| 8 kap. 10 § | BFS 2024:8 | "Installationer för spillvatten ska vara utformade så att spillvattnet kan avledas utan att installationen eller avloppsanläggningen påverkas negativt." | Stämmer | B8 s. 8, 2026-09-28 |
| 9 kap. 4 § | BFS 2024:8 | "Förbränningsgaser ska släppas ut via skorstenar eller andra anordningar som är utformade och placerade så att 1. gaserna inte förs tillbaka in i byggnaden, och 2. olägenheter inte uppstår i byggnadens omgivning." | Stämmer | B8 s. 9, 2026-09-28 |

### 2.5 BFS 2024:9 (gällande: grundförfattningen, inga ändringar)

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 2 kap. 5 § | BFS 2024:9 | "Trappor och ramper ska vara utformade så att personer kan förflytta sig säkert." | Stämmer | B9 s. 4, 2026-09-28 |
| 2 kap. 10 § | BFS 2024:9 | "Trappor, ramper, balkonger, loftgångar, takterrasser och andra vistelseytor i eller i anslutning till byggnader, där det finns särskild risk för personskador till följd av fall, ska ha skydd mot fall." | Stämmer. Tillämplighet på fristående altan: se F1 | B9 s. 5, 2026-09-28 |
| 2 kap. 11 § | BFS 2024:9 | "Ett skydd mot fall ska vara utformat och ha sådan höjd att det med hänsyn till ytans avsedda användning och fallhöjden begränsar risken för personskador till följd av fall. Skyddet ska tåla dynamisk påverkan av en människa." Andra st. p. 1–2: "0,8 meter av skyddets höjd ska vara utformat så att det motverkar klättring." "Vertikala öppningar i skyddet ska vara högst 100 mm breda." | Stämmer | B9 s. 5, 2026-09-28 |
| 2 kap. 12 § | BFS 2024:9 | "Trappor och ramper ska ha ledstänger på båda sidor som stöd för balansen." | Stämmer | B9 s. 5, 2026-09-28 |
| 2 kap. 13 § | BFS 2024:9 | "Ledstänger ska 1. vara placerade och utformade så att de är lätta att gripa om, …" | Stämmer | B9 s. 6, 2026-09-28 |
| 2 kap. 15–21 §§ | BFS 2024:9 | 15 §: "Byggnader ska ha följande anordningar, om det finns ett fast arbetsställe på taket eller om det finns något annat skäl att anta att taket behöver beträdas för byggnadens användning eller drift 1. tillträdesanordningar till tak enligt 17–18 §§, 2. fasta anordningar för förflyttning på tak enligt 19 §, och 3. skyddsanordningar mot fall från tak enligt 20–21 §§." | Stämmer (22 § gäller "Fasta arbetsställen på tak") | B9 s. 6–7, 2026-09-28 |
| 2 kap. 33 § | BFS 2024:9 | **Talet ordagrant:** "En installation för tappvarmvatten för personlig hygien och hushållsändamål ska vara utformad så att temperaturen på vattnet kan bli högst 60 °C efter tappstället. Om det finns särskild risk för skållningsskador, får varmvattnets temperatur vara högst 38 °C efter tappstället." | Stämmer. Konstant `skallning` 60 (38 vid särskild risk) | B9 s. 9, 2026-09-28 |
| 2 kap. 38 § | BFS 2024:9 | "Förbränningsgas från en eldstad ska avledas genom rökkanal eller avgaskanal med tillräcklig täthet, så att det inte finns risk för förgiftning." | Stämmer | B9 s. 9, 2026-09-28 |

### 2.6 BFS 2024:14 (BBR 31)

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| Övergångsbestämmelse 3 | BFS 2024:14 (fotnot 32 i omtrycket) | "3. Äldre bestämmelser får tillämpas på arbeten som a) kräver bygglov om ansökan om bygglov kommer in till kommunen före den 1 juli 2026, b) kräver anmälan om anmälan kommer in till kommunen före den 1 juli 2026, eller c) varken kräver bygglov eller anmälan om arbetena påbörjas före den 1 juli 2026." Andra st.: "En förutsättning för att äldre bestämmelser enligt första stycket ska få tillämpas är att samtliga äldre bestämmelser … tillämpas." | Stämmer | B14 s. 28, 2026-09-28 |

### 2.7 PBL (R1, "Ändrad: t.o.m. SFS 2026:1583")

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 8 kap. 13 § | Lag (2025:974) | "En byggnad som är särskilt värdefull från historisk, kulturhistorisk, miljömässig eller konstnärlig synpunkt får inte förvanskas." | Stämmer | R1, 2026-09-28 |
| 8 kap. 17 § | ursprunglig lydelse (ingen ändringsbeteckning) | "Ändring av en byggnad och flyttning av en byggnad ska utföras varsamt så att man tar hänsyn till byggnadens karaktärsdrag och tar till vara byggnadens tekniska, historiska, kulturhistoriska, miljömässiga och konstnärliga värden." | Stämmer | R1, 2026-09-28 |
| (18 §, underlaget 4.4) 8 kap. 18 § | Lag (2025:974) | "Det som gäller i fråga om ändring och flyttning av en byggnad enligt 17 § ska tillämpas också på ändring och flyttning av en annan anläggning än en byggnad, om anläggningen omfattas av krav på bygglov." | Stämmer | R1, 2026-09-28 |
| 8 kap. 25 § | Lag (2026:712) | "… ska byggnadens ägare se till att kontrollen görs av en funktionskontrollant." | Stämmer | R1, 2026-09-28 |
| 9 kap. 19 § | Lag (2025:974) | "Det krävs bygglov för att utomhus uppföra, flytta eller utöka en mur, ett plank eller en altan i ett område som omfattas av en detaljplan, om anläggningen 1. får en höjd över marken som överstiger 1,8 meter och placeras inom 3,6 meter från en byggnad, eller 2. får en höjd över marken som överstiger 1,2 meter och inte placeras inom 3,6 meter från en byggnad." | Stämmer | R1, KB1, 2026-09-28 |
| 9 kap. 43 § | Lag (2025:974) | "I ett område som omfattas av en detaljplan krävs det rivningslov för att riva 1. en byggnad eller en del av en byggnad, …" | Stämmer | R1, 2026-09-28 |
| 10 kap. 3 § | Lag (2025:974) | "En åtgärd får inte påbörjas innan byggnadsnämnden har gett ett startbesked, om åtgärden omfattas av krav på 1. bygglov, rivningslov eller marklov, eller 2. en anmälan enligt föreskrifter som har meddelats med stöd av 16 kap. 8 §." | Stämmer | R1, 2026-09-28 |
| 10 kap. 4 § | ursprunglig lydelse | "Ett byggnadsverk får inte tas i bruk i de delar som omfattas av ett startbesked för byggåtgärder förrän byggnadsnämnden har gett ett slutbesked, om nämnden inte beslutar annat." | Stämmer | R1, 2026-09-28 |
| 10 kap. 5 a § | Lag (2026:712) | "Byggherren ska se till att en åtgärd som är lov- eller anmälningspliktig kontrolleras enligt den kontrollplan och den avfallshanteringsplan som byggnadsnämnden fastställer i startbeskedet." | Stämmer | R1, 2026-09-28 |
| 10 kap. 6 § första st. | Lag (2026:712) | "I fråga om en sådan åtgärd som avses i 3 § ska byggherren se till att det finns en plan för att kontrollera utförandet av åtgärden. Kravet på kontrollplan gäller inte utförande som omfattas av en byggbedömares kontroll." | Stämmer | R1, 2026-09-28 |
| 10 kap. 6 § andra st. | Lag (2026:712) | "Kontrollplanen ska innehålla uppgifter om 1. vilka kontroller som ska göras och vilka krav som kontrollerna ska avse, 2. vem som ska göra kontrollerna och hur de ska utföras, 3. vilka anmälningar som ska göras till byggnadsnämnden, och 4. vilka arbetsplatsbesök som byggnadsnämnden bör göra och när besöken bör ske." | Stämmer | R1, 2026-09-28 |
| 10 kap. 6 a § | Lag (2025:974) | "Byggnadsnämnden får i det enskilda fallet besluta att en kontrollplan inte behövs för enklare åtgärder." | Stämmer | R1, 2026-09-28 |
| 10 kap. 7 § | Lag (2011:335) | "Kontrollplanen ska vara anpassad till omständigheterna i det enskilda fallet och ha den utformning och detaljeringsgrad som behövs för att på ett ändamålsenligt sätt säkerställa att 1. alla väsentliga krav som avses i 8 kap. 4 § uppfylls, 2. förbudet mot förvanskning enligt 8 kap. 13 § följs, och 3. kraven på varsamhet enligt 8 kap. 17 och 18 §§ uppfylls." | Stämmer | R1, 2026-09-28 |
| 10 kap. 8 § | Lag (2026:712) | "Av kontrollplanen ska det framgå i vilken omfattning kontrollen ska utföras 1. inom ramen för byggherrens dokumenterade egenkontroll, eller 2. av en sakkunnig." Tredje st.: "… meddela föreskrifter om att en åtgärd ska kontrolleras av en sakkunnig (obligatorisk sakkunnigkontroll)." | Stämmer | R1, 2026-09-28 |
| 10 kap. 8 a § | Lag (2026:712) | Första st. p. 2: "vilket avfall som åtgärden kan ge upphov till och hur avfallet ska tas om hand, särskilt hur byggherren avser att möjliggöra a) materialåtervinning av hög kvalitet, och b) att farliga ämnen hanteras och avlägsnas på ett säkert sätt." **Andra st.:** "Kravet på avfallshanteringsplan gäller inte om det är uppenbart att det saknas behov av en sådan plan." | Stämmer. Undantaget "uppenbart" står i **andra stycket**. Punkt 2 **har** underpunkterna a och b | R1, 2026-09-28 |
| 10 kap. 9 § | Lag (2026:712) | "För den kontroll som omfattas av en kontrollplan eller avfallshanteringsplan ska det finnas en eller flera kontrollansvariga." | Stämmer | R1, 2026-09-28 |
| 10 kap. 10 § | ursprunglig lydelse | "Trots 9 § krävs det inte någon kontrollansvarig i fråga om 1. små ändringar av en- eller tvåbostadshus, om byggnadsnämnden inte beslutar annat, eller 2. andra små åtgärder enligt föreskrifter som har meddelats med stöd av 16 kap. 10 §." | Stämmer | R1, 2026-09-28 |
| 10 kap. 23 § | Lag (2026:712) | "Byggnadsnämnden ska med ett skriftligt startbesked godkänna att en åtgärd som avses i 3 § får påbörjas. Startbesked får ges endast efter prövning av byggherrens förslag till kontrollplan och avfallshanteringsplan, behovet av sakkunnigkontroll och det som har framkommit vid det tekniska samrådet eller annars vid handläggningen av ärendet." | Stämmer | R1, 2026-09-28 |
| (hör till 23 §) 10 kap. 23 c § | Lag (2026:442) | "Byggnadsnämnden ska med ett skriftligt startbesked godkänna att en åtgärd som avses i 3 § 2 får påbörjas om åtgärden kan antas komma att uppfylla de tekniska egenskapskrav som gäller enligt 8 kap. 4–7 §§ …" | Finns sedan 1 juni 2026, gäller anmälningspliktiga åtgärder. Specen nämner den inte | R1, R2 (PBF 6 kap. 4 §), 2026-09-28 |
| 10 kap. 24 § | Lag (2026:712) | "I ett startbesked ska byggnadsnämnden 1. fastställa den kontrollplan och den avfallshanteringsplan som ska gälla för åtgärderna, med uppgift om vem eller vilka som är sakkunniga eller kontrollansvariga, …" | Stämmer | R1, 2026-09-28 |
| 10 kap. 34 § | Lag (2026:712) | "… om byggherren har 1. visat att alla krav som gäller för åtgärderna enligt lovet, kontrollplanen, avfallshanteringsplanen, startbeskedet och kompletterande villkor är uppfyllda, …" | Stämmer | R1, 2026-09-28 |
| Övergångsbestämmelse 2 till Lag (2026:712) | Lag (2026:712) | "2. Bestämmelserna om kontrollplan i 10 kap. 6 § ska tillämpas i sin äldre lydelse i fråga om åtgärder för vilka ansökan om lov eller anmälan har gjorts före ikraftträdandet." (P. 1: "Denna lag träder i kraft den 1 juli 2026.") | Stämmer | R1, 2026-09-28 |

### 2.8 PBF (R2, "Ändrad: t.o.m. SFS 2026:1722")

| Lagrum i specen | Gällande lydelse | Utdrag | Besked | Källa, läst |
|---|---|---|---|---|
| 5 kap. 1 § | ursprunglig lydelse (2011:338) | "… ska en byggnads ägare se till att funktionen hos ventilationssystemet i byggnaden kontrolleras innan systemet tas i bruk för första gången (första besiktning) och därefter regelbundet vid återkommande tillfällen (återkommande besiktning). En- och tvåbostadshus omfattas inte av kravet på återkommande besiktning." | Stämmer | R2, 2026-09-28 |
| 5 kap. 2 § | ursprunglig lydelse | "Vid den första besiktningen ska det kontrolleras att 1. funktionen och egenskaperna hos ventilationssystemet överensstämmer med gällande föreskrifter, …" | Stämmer | R2, 2026-09-28 |
| 6 kap. 1 § 1 | Förordning (2025:979) | "rivning av en byggnad eller en del av en byggnad, om byggnaden har en byggnadsarea som är större än 50,0 kvadratmeter," | Stämmer | R2, 2026-09-28 |
| 6 kap. 1 § 2 | Förordning (2025:979) | "en ändring av en byggnad, om ändringen innebär att konstruktionen av byggnadens bärande delar påverkas väsentligt," | Stämmer | R2, 2026-09-28 |
| 6 kap. 1 § 4 | Förordning (2025:979) | "en installation eller väsentlig ändring av en hiss, eldstad, rökkanal eller anordning för ventilation i en byggnad," | Stämmer | R2, 2026-09-28 |
| 6 kap. 1 § 5 | Förordning (2025:979) | "en installation eller väsentlig ändring av en anläggning för vattenförsörjning eller avlopp i en byggnad," | Stämmer | R2, 2026-09-28 |
| 7 kap. 5 § första st. 2 | Förordning (2025:979) | "en åtgärd som omfattas av krav på anmälan," | Stämmer | R2, 2026-09-28 |
| 7 kap. 5 § första st. 3 | Förordning (2025:979) | "en åtgärd avseende en komplementbyggnad eller ett komplementbostadshus," | Stämmer | R2, 2026-09-28 |
| 7 kap. 5 § första st. 6 | Förordning (2025:979) | "att uppföra eller utöka en mur, ett plank eller en altan," | Stämmer. Ordet "flytta" finns inte i punkten (egen läsning) | R2, 2026-09-28 |
| 7 kap. 5 § första st. 9 | Förordning (2025:979) | "en åtgärd som omfattas av krav på rivningslov efter beslut i detaljplan eller områdesbestämmelser," | Stämmer | R2, 2026-09-28 |
| 7 kap. 5 § andra st. | Förordning (2025:979) | "Trots det som sägs i första stycket 2–11 får byggnadsnämnden besluta att det krävs en kontrollansvarig." | Stämmer | R2, 2026-09-28 |

**Förordning (2026:709):** har inte ändrat något av lagrummen ovan. Paragrafer i R2 märkta "Förordning (2026:709)": 1 kap. 1 §, 5 kap. 10 §, 7 kap. 2 och 3 §§ (4 § upphävd), 10 kap. 11 a, 11 b, 22 och 23 §§. Ikraft 1 juli 2026 (övergångsbestämmelse 1). Källa R2, 2026-09-28.

Värt att veta ur samma förordning: PBF 10 kap. 22 § i lydelse 2026:709: "Boverket får meddela de föreskrifter som behövs om utformningen av de planer som avses i 10 kap. 6 och 7–8 a §§ plan- och bygglagen (2010:900)." Någon sådan BFS finns inte i R0 (t.o.m. 2026-08-28). Källa R2, R0.

---

## 3. Ändringarna 1 januari 2027 (13.2)

### 3.1 Lag (2026:746) om ändring i PBL

| Uppgift | Ordagrant eller lista | Källa |
|---|---|---|
| Ingress | "dels att 1 kap. 4 §, 8 kap. 2, 3, 5, 6, 7 och 8 §§, 9 kap. 56, 57 och 59 §§, 11 kap. 19 § och 16 kap. 2 och 3 §§ ska ha följande lydelse, dels att det ska införas sju nya paragrafer, 8 kap. 2 a–2 c och 5 a–5 d §§, och närmast före 8 kap. 2–3 och 5–5 d §§ nya rubriker av följande lydelse." | R3 s. 1 |
| Förarbete | "Prop. 2025/26:180, bet. 2025/26:CU39, rskr. 2025/26:286." | R3 s. 1, fotnot 1 |
| Ikraft | "1. Denna lag träder i kraft den 1 januari 2027." | R1, R3 |
| Övergång | "2. Äldre bestämmelser gäller fortfarande för ärenden som har påbörjats före ikraftträdandet och för mål och ärenden som avser överklagande och överprövning av sådana mål och ärenden till dess målet eller ärendet är slutligt avgjort. I fråga om tillsynsåtgärder och påföljder med anledning av en åtgärd som innebär en överträdelse av de äldre bestämmelserna, ska dock de nya bestämmelserna tillämpas om åtgärden enligt de nya bestämmelserna inte är en överträdelse eller leder till en lindrigare påföljd." | R1 |
| Innehåll i korthet (egen läsning) | 1 kap. 4 §: definitionen **"ombyggnad" tas bort**, ny definition "större byggnadsändring: en lov- eller anmälningspliktig ändring av en byggnad som innebär en stor ekonomisk investering och så omfattande åtgärder att hela eller en betydande och avgränsbar del av byggnaden förnyas". 8 kap. 2–8 §§ skrivs om i nybyggnad (2, 5 §§), ändring (2 a, 5 a §§), större byggnadsändring (5 b §), hur kraven uppfylls (2 c, 5 c §§), andra anläggningar (3, 5 d §§). 9 kap. 56, 57, 59 §§ och 11 kap. 19 §, 16 kap. 2–3 §§ följdändras | R1, R3 |

Ny lydelse ordagrant för varje paragraf: **Bilaga A**.

### 3.2 Förordning (2026:1265) om ändring i PBF

| Uppgift | Ordagrant eller lista | Källa |
|---|---|---|
| Ingress | "dels att 3 kap. 21 och 23 §§ och 7 kap. 1 § ska upphöra att gälla, dels att rubrikerna närmast före 3 kap. 21 och 23 §§ och 7 kap. 1 och 2 §§ ska utgå, dels att 1 kap. 11 § ska betecknas 1 kap. 12 §, dels att 1 kap. 1 §, 3 kap. 4, 5 b, 6, 11, 12, 18, 22, 27 och 28 §§, 9 kap. 19 §, 10 kap. 1–3, 4, 4 a och 8 §§ och rubriken till 1 kap. ska ha följande lydelse, dels att rubriken till 7 kap. ska lyda "Byggbedömare, kontrollansvariga, sakkunniga och funktionskontrollanter", dels att rubriken närmast före 9 kap. 24 § ska lyda "Vissa åtgärder i fråga om ett byggnadsverk som kräver anmälan", dels att det ska införas fem nya paragrafer, 1 kap. 11 § och 3 kap. 4 a, 4 b, 18 a och 18 b §§, av följande lydelse." | R4 s. 1 |
| Ikraft | "1. Denna förordning träder i kraft den 1 januari 2027." | R2 |
| Övergång | "2. Äldre bestämmelser gäller fortfarande för ärenden som har påbörjats före ikraftträdandet och för mål och ärenden som avser överklagande och överprövning av sådana mål och ärenden till dess målet eller ärendet är slutligt avgjort. I fråga om tillsynsåtgärder och påföljder med anledning av en åtgärd som innebär en överträdelse av de äldre bestämmelserna, ska dock de nya bestämmelserna tillämpas om åtgärden enligt de nya bestämmelserna inte är en överträdelse eller leder till en lindrigare påföljd." | R2 |
| Obs | PBF 10 kap. 4 a § i den lydelse som träder i kraft 1 januari 2027 bär redan beteckningen "Förordning (2026:1513)", alltså en senare ändring av 2026:1265-lydelsen | R2 |

Ny lydelse ordagrant för varje paragraf: **Bilaga B**.

### 3.3 Svar på frågorna i 13.2

| Fråga | Svar | Källa |
|---|---|---|
| Ändras något av lagrummen i 13.1? | **Nej.** Ingen paragraf i PBL 10 kap. har markering för 2027 i R1. PBL 8 kap. 13, 17, 18, 25 §§ och 9 kap. 19, 43 §§ är oförändrade. PBF 5 kap. 1–2 §§, 6 kap. 1 § och 7 kap. 5 § är oförändrade. I 7 kap. PBF ändras bara rubriken och 1 § upphävs. Egen läsning: 10 kap. 7 § 1 hänvisar till 8 kap. 4 §, som inte ändras | R1, R2, R3, R4 |
| Vad ersätter PBF 7 kap. 1 §? | **Inget.** Paragrafen och rubriken "Kontrollplan" upphör ("7 kap. 1 § ska upphöra att gälla", "rubrikerna närmast före … 7 kap. 1 och 2 §§ ska utgå"). Ordet "etapp" förekommer inte i någon lydelse som träder i kraft 2027 (sökning i R1 och R2) | R4, R2 |
| Vad ersätter PBF 3 kap. 21 §? | **Inget.** 3 kap. 21 § ("Om en ombyggnad ska genomföras i etapper …") upphör med sin rubrik. Samtidigt försvinner begreppet ombyggnad ur PBL 1 kap. 4 §; närmast motsvarande nya begrepp är "större byggnadsändring" (PBL 1 kap. 4 §, 8 kap. 5 b §; PBF 1 kap. 11 §), men inget av dem handlar om etapper eller kontrollplan | R3, R4, R1, R2 |
| Följd för generatorn (egen läsning) | Ingen rad i katalogen hänvisar till PBF 7 kap. 1 § eller 3 kap. 21 §. Om hjälptext nämner "ombyggnad i etapper" ska den bort för ärenden påbörjade från 1 januari 2027 | – |

**Andra ändringar som rör verktyget och som hittades på vägen:**

| Datum | Författning | Vad | Källa |
|---|---|---|---|
| 1 juni 2026 | Lag (2026:442) | Ny PBL 10 kap. 23 c § om startbesked för anmälningspliktiga åtgärder; PBF 6 kap. 4 § hänvisar dit | R1, R2 |
| 1 dec 2027 | Förordning (2025:980) | PBF 6 kap. 3 § "/Upphör att gälla U:2027-12-01 genom förordning (2025:980)./" (anmälan för nybyggnad eller tillbyggnad som undantagits från bygglov genom detaljplan) | R2 |
| 1 jan 2027 | Lag (2026:1583) | PBL 13 kap. 7 och 12 §§ (överklagande), inte 13 kap. 2 § | R1 |

---

## 4. Frågorna F1–F10

### F1. Räcke på fristående altan

| Del | Ordagrant | Källa |
|---|---|---|
| BFS 2024:9 1 kap. 2 § | "Föreskrifterna i 1 kap. gäller vid uppförande av nya byggnader och vid ändring av byggnader för den ändrade delen. Föreskrifterna i 2 kap. gäller vid uppförande av nya byggnader. Föreskrifterna i 3 kap. gäller vid ändring av byggnader." | B9 s. 1 |
| BFS 2024:9 2 kap. 10 § | "… andra vistelseytor i eller i anslutning till byggnader, där det finns särskild risk för personskador till följd av fall, ska ha skydd mot fall." | B9 s. 5 |
| BFS 2024:13 1 kap. 2 § | "Föreskrifterna i 4–7 §§ och 2–4 kap. gäller för en obebyggd tomt som ska bebyggas. Föreskrifterna i 3–14 §§ och 5 kap. gäller för uppförande av vissa andra anläggningar än byggnader på en tomt." | B13 s. 1 |
| BFS 2024:13 5 kap. | Rubrik "Säkerhet vid användning vid uppförande av vissa andra anläggningar än byggnader". 1–6 §§ gäller avfallsanordningar, fasta lekredskap, bassänger, dammar, brunnar och behållare. Altan, räcke och skydd mot fall för upphöjd yta nämns inte | B13 s. 4–5 |
| BFS 2024:13 4 kap. 2 § | "Trappor och ramper på en tomt ska ha balansstöd i form av ledstång, om det behövs för att skydda mot fall." (gäller obebyggd tomt som ska bebyggas, enligt 1 kap. 2 §) | B13 s. 4 |
| PBF 3 kap. 10 § | "För att uppfylla det krav på säkerhet vid användning som anges i 8 kap. 4 § första stycket 4 plan- och bygglagen (2010:900) ska ett byggnadsverk vara projekterat och utfört på ett sådant sätt att det vid användning eller drift inte innebär en oacceptabel risk för halkning, fall, sammanstötning, brännskador, elektriska stötar, skador av explosioner eller andra olyckor." | R2 |
| PBL 8 kap. 5 § tredje st. (gällande t.o.m. 2026-12-31) | "Det som enligt första och andra styckena gäller i fråga om byggnad ska också tillämpas på andra anläggningar än byggnader." Från 2027: 8 kap. 5 d § | R1 |
| Boverket, KB5 | "Kravet är generellt och omfattar alla vistelseytor där det finns en särskild risk för olyckor på grund av fallhöjden och omständigheterna i övrigt. Varje liten nivåskillnad utlöser inte krav på räcke eller annat skydd." "Regleringen anger inget specifikt mått för lägsta räckeshöjd …" | KB5 |
| Boverket, KB1 | "Även om det inte krävs bygglov måste en altan uppfylla de krav i PBL, plan- och byggförordningen, PBF, och Boverkets föreskrifter som gäller för åtgärden." | KB1 |

**Svar:** BFS 2024:9 gäller byggnader. En altan "i anslutning till" en byggnad faller under 2 kap. 10 § enligt ordalydelsen; en altan som inte är i anslutning till en byggnad gör det inte. BFS 2024:13 har inget krav på skydd mot fall för en altan. Kravet som bär den fristående altanen är **PBF 3 kap. 10 §** ("ett byggnadsverk", "oacceptabel risk för … fall"), via PBL 8 kap. 4 § första st. 4 och 8 kap. 5 § tredje st. (från 2027 5 d §). Det finns ingen föreskrift med mått för det fallet. Förslag till Krav för `altan-racke` när `plac` inte är `vid-huset`: "PBF 3 kap. 10 §". Egen läsning; ingen läst myndighetstext tar uttryckligen ställning till fristående altan.

### F2. Skärmtak över altan

| Del | Ordagrant | Källa |
|---|---|---|
| PBL 1 kap. 4 § | "tillbyggnad: ändring av en byggnad som innebär en ökning av byggnadens volym," | R1 |
| Boverket om skärmtak | "Om en byggnad byggs ut med ett skärmtak räknas skärmtaket som en tillbyggnad om det blir en volymökning av byggnaden. Av rättspraxis framgår att ett skärmtak inte behöver ha väggar för att det ska bli en volymökning." | KB2 |
| Boverket om altan kontra tillbyggnad | "På grund av att bygglov krävs specifikt för en åtgärd, kan en och samma konstruktion inte samtidigt kräva lov som flera olika åtgärder. Anläggningar som har inslag av exempelvis både tillbyggnad och altan får bedömas från fall till fall. Detta innebär att en anläggning som är en lovpliktig altan, inte samtidigt kan kräva bygglov som exempelvis en tillbyggnad. (jfr prop. 2024/25:169 sid. 426 och sid 131)" | KB1 |
| Lovgrund tillbyggnad | PBL 9 kap. 9 §: "Det krävs bygglov för tillbyggnad. Lag (2025:974)." Undantag 9 kap. 10 § (högst 30,0 m² bruttoarea eller öppenarea, inte över taknock, sammanlagt högst 30,0 m²). 9 kap. 14 §: "Även om bygglov inte krävs enligt 10–13 §§ kan bygglov krävas enligt någon av 34–37 eller 53 §." 9 kap. 34 § 1: bygglov "närmare gränsen än 4,5 meter" för "nybyggnad eller tillbyggnad av en byggnad", om inte grannarna skriftligen medgett (35 § 3) | R1 |
| PBF 7 kap. 5 § första st. 6 | "att uppföra eller utöka en mur, ett plank eller en altan," | R2 |

**Svar:** Ja, ett skärmtak över altanen som ansluter till huset är en tillbyggnad när det ger en volymökning (KB2). Lovgrunden är då **PBL 9 kap. 9 §**, med undantagen i 10 § och den återinförda lovplikten i 34 §. Om PBF 7 kap. 5 § första st. 6 ("altan") omfattar en altan med skärmtak: **kan inte bekräftas.** Punkten nämner bara altan. Boverket säger att en konstruktion med inslag av både tillbyggnad och altan bedöms från fall till fall och bara kan kräva lov som en åtgärd (KB1). Om skärmtaket bedöms som tillbyggnad till ett en- eller tvåbostadshus är det en ändring av byggnaden, och KA-frågan avgörs då av PBL 10 kap. 10 § 1 ("små ändringar av en- eller tvåbostadshus") eller PBF 7 kap. 5 § första st. 11 ("en annan liten ändring"); ingen läst källa säger om ett skärmtak är en sådan "liten" ändring.

### F3. Skorstensfejarmästarens besiktning

| Del | Ordagrant | Källa |
|---|---|---|
| LSO 3 kap. 4 § tredje st. | "Kommunen skall i brandförebyggande syfte även ansvara för att det som skall rengöras enligt första stycket samt skorstenar, tak och anslutande byggnadsdelar kontrolleras från brandskyddssynpunkt (brandskyddskontroll)." | R5 |
| FSO 3 kap. 1 § andra st. | "Kommunen får besluta om brandskyddskontroll enligt 3 kap. 4 § tredje stycket lagen om skydd mot olyckor i särskilda fall." | R6 |
| FSO 3 kap. 2 § | "Myndigheten för civilt försvar ska även meddela föreskrifter om hur omfattande brandskyddskontrollen ska vara och hur ofta den ska göras. Förordning (2025:1114)." | R6 |
| FSO 3 kap. 10 § | "Behörig att utföra brandskyddskontroll enligt 3 kap. 4 § lagen (2003:778) om skydd mot olyckor är den som genomgått särskild utbildning hos Myndigheten för civilt försvar eller hos dess föregångare." | R6 |
| Boverket | "Något krav på läckagemätning och röktrycksprovning finns inte i byggreglerna eftersom det inte är att krav på byggnadens egenskaper utan ett sätt att kontrollera om kravet uppfyllts. Det är däremot lämpligt att läckagemätning och röktrycksprovning ingår i byggherrens kontrollplan i samband med installation eller väsentliga ändring av en eldstad eller rökkanal." | KB4 |
| PBF 7 kap. 2 § | "Certifiering av en byggbedömare, kontrollansvarig, sakkunnig eller funktionskontrollant ska vara tidsbegränsad och avse ett visst slag av arbete. Förordning (2026:709)." | R2 |

**Svar:** Ingen läst författning (PBL, PBF, LSO, FSO, BFS 2024:7–9) kräver att en skorstensfejarmästare besiktar en ny eldstad eller rökkanal **före första användning**. LSO ger kommunen ansvar för brandskyddskontroll; omfattning och intervall står i Myndigheten för civilt försvars föreskrifter, som inte är lästa (utanför beställningens källor). Boverket kallar täthetskontrollen lämplig i kontrollplanen, inte krav. Att den skulle vara en **sakkunnigkontroll enligt PBL 10 kap. 8 §** kan inte bekräftas: ingen läst text gör skorstensfejaren till sakkunnig i PBL:s mening, och sakkunniga är certifierade (PBF 7 kap. 2 §). Specens "E" för `eld-tathet` är förenligt med källorna. Föreslaget lagrum för raden: "BFS 2024:7 4 kap. 17 och 21 §§; BFS 2024:9 2 kap. 38 §", med KB4 som stöd för att provningen hör hemma i planen.

### F4. Lovgrund för tillbyggnad och komplementbyggnad

| Åtgärd | Paragraf, Lag (2025:974) | Ordagrant | Källa |
|---|---|---|---|
| Tillbyggnad | PBL 9 kap. 9 § | "Det krävs bygglov för tillbyggnad." | R1 |
| Undantag tillbyggnad | 9 kap. 10 § (byggnad som inte är komplementbyggnad), 11–12 §§ (tillbyggnad av komplementbyggnad), 14 § (lov kan ändå krävas enligt 34–37 eller 53 §) | – | R1 |
| Nybyggnad av komplementbyggnad | PBL 9 kap. 3 § | "Det krävs bygglov för nybyggnad." | R1 |
| Undantag komplementbyggnad | 9 kap. 4 § (inom detaljplan: "högst 30,0 kvadratmeter", taknock "högst 4,0 meter", sammanlagt "högst 45,0 kvadratmeter"), 5 § (utanför detaljplan: 50,0 / 4,5 / 65,0), 8 § ("Även om bygglov inte krävs enligt 4–7 §§ kan bygglov krävas enligt någon av 34–37 §.") | – | R1 |

### F5. Tabellerna 3.3 och 3.4

**3.3 Tillbyggnad**

| Nyckel | Krav i specen | Besked | Rätt Krav | Källa |
|---|---|---|---|---|
| `till-lage` | Bygglovet; PBL 10 kap. 34 § 1 | Stämmer | oförändrat | R1 |
| `till-grund` | BFS 2024:6 1 kap. 12 och 18 §§ | Stämmer | oförändrat | B6 |
| `till-fukt` | BFS 2024:8 7 kap. 1 § | Stämmer. Ordet "fuktsäkerhetsbeskrivning" (kolumnen "mot") finns inte i BFS 2024:8; där heter det "Luftkvalitets-, fuktsäkerhets- och vattensäkerhetsdokumentation" (1 kap. 18 §), som krävs "om åtgärden kräver lov eller anmälan och det inte är obehövligt" | oförändrat Krav; "mot" kan hänvisa till "fuktsäkerhetsdokumentation (BFS 2024:8 1 kap. 18 §)" | B8 s. 4 |
| `till-barformaga` | BFS 2024:6 [kravparagraf, F9], 1 kap. 12 och 18 §§ | Kravparagrafen finns, se F9 | **BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§** (4 kap. 27–31 §§ snölast, 32–37 §§ vindlast) | B6 s. 7–8, 4 kap. |
| `till-dimensionering` | BFS 2024:6 1 kap. 17 § | Stämmer för tillbyggnad av en- eller tvåbostadshus i säkerhetsklass 2 (2 kap. 6 § 1). Villkorat: 17 § gäller bara säkerhetsklass 2 eller 3 | oförändrat | B6 |
| `till-mottagning` | BFS 2024:6 1 kap. 19 § | Stämmer | oförändrat | B6 |
| `till-brandspridning` | BFS 2024:7 6 kap. 5 § | Stämmer | oförändrat | B7 |
| `till-brandvarnare` | BFS 2024:7 2 kap. 34–35 §§ | 34–35 §§ är utformning och placering; kravet att brandvarnare ska finnas i bostäder står i 7 kap. 47 § 1 (VK 3A, där "bostäder i en- och tvåbostadshus" ingår enligt 2 kap. 14 §) | **BFS 2024:7 7 kap. 47 §; 2 kap. 34–35 §§** | B7 s. 9, 12, 43 |
| `till-luftfloden` | BFS 2024:8 3 kap. 4 och 5 §§ | Stämmer; talen 0,35 och 4,0 | oförändrat | B8 |
| `till-energi` `juli-sept-2026` | BFS 2011:6 avsnitt 9:92 | Stämmer med tillägg, se F6. Avsnittet heter "Klimatskärm" och lyder "… ska vid ändring i klimatskärmen följande U-värden eftersträvas" | **BFS 2011:6 (BBR 31) avsnitt 1:22347 och 9:92** | B14 |
| `till-energi` `fran-okt-2026` | BFS 2026:9 3 kap. 1 § | Stämmer, se F6 | **BFS 2026:9 3 kap. 1 §, tabell 6 bilaga 2** | B26 |

**3.4 Komplementbyggnad med bygglov**

| Nyckel | Krav i specen | Besked | Rätt Krav | Källa |
|---|---|---|---|---|
| `komp-lage` | Bygglovet; PBL 10 kap. 34 § 1 | Stämmer | oförändrat | R1 |
| `komp-grund` | BFS 2024:6 1 kap. 12 och 18 §§ | Stämmer | oförändrat | B6 |
| `komp-fukt` | BFS 2024:8 7 kap. 1 § | Stämmer. BFS 2024:8 1 kap. 2 § gör inget undantag för komplementbyggnader | oförändrat | B8 s. 1 |
| `komp-barformaga` | BFS 2024:6 [kravparagraf, F9], 1 kap. 12 och 18 §§ | se F9 | **BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§** | B6 |
| `komp-mottagning` | BFS 2024:6 1 kap. 19 § | Stämmer | oförändrat | B6 |
| `komp-brandspridning` | BFS 2024:7 6 kap. 5 och 10 §§ | 10 § har **ändrad lydelse** sedan 1 dec 2025 (BFS 2025:10): undantaget gäller "komplementbyggnader som kompletterar en- eller tvåbostadshus om komplementbyggnadens byggnadsarea är högst 15 m2" | **BFS 2024:7 6 kap. 5 och 10 §§ i lydelse BFS 2025:10**. Konstant: 15 m² byggnadsarea | B7a |

**Rader utan lagrum som bär dem:** ingen i 3.3 eller 3.4, efter rättelserna ovan. Två rader bärs bara delvis av specens hänvisning: `till-brandvarnare` (saknade kravparagrafen 7 kap. 47 §) och `till-/komp-barformaga` (saknade kravparagrafen, nu 2 kap. 2, 3, 12, 13 §§).

### F6. Värmeisolering vid tillbyggnad av uppvärmt småhus

| Del | Ordagrant | Källa |
|---|---|---|
| PBL 1 kap. 4 § | "tillbyggnad: ändring av en byggnad som innebär en ökning av byggnadens volym," | R1 |
| BFS 2026:9 1 kap. 2 § | "Föreskrifterna i 1 kap. gäller vid uppförande av nya byggnader och vid ändring av byggnader för den ändrade delen. För redan uppförda byggnader gäller 1–5 §§. Föreskrifterna i 2 kap. gäller vid uppförande av nya byggnader. Föreskrifterna i 3 kap. gäller vid ändring av byggnader. Föreskrifterna i 4 kap. gäller för redan uppförda lokalbyggnader." | B26 s. 1 |
| **BFS 2026:9 1 kap. 3 §, ordagrant** | "Föreskrifterna i denna författning gäller inte för byggnad som 1. ska användas kortare tid än två år, 2. har en temperaturreglerad area mindre än 50 kvadratmeter, eller 3. är ett bostadshus som används eller är avsett för användning a) mindre än fyra månader per år, eller b) under en begränsad del av året, om energianvändningen beräknas vara mindre än 25 procent av en helårsanvändning." | B26 s. 1 |
| BFS 2026:9 3 kap. 1 § | Första st.: "Vid ändring av byggnad ska den ändrade delen uppfylla kraven i 2 kap. Kraven får dock anpassas om 1. det är oskäligt med hänsyn till ändringens omfattning, …" Fjärde st.: "Vid ändring av klimatskärmen och den ändrade delen har en högsta värmegenomgångskoefficient som inte överstiger värdena i tabell 6 bilaga 2 ska kravet i 2 kap. 4 § trots första stycket anses uppfyllt." | B26 s. 7 |
| BFS 2026:9 tabell 6 bilaga 2 | "Högsta tillåtna värmegenomgångskoefficient, U, för enskilda byggnadsdelar i klimatskärmen": Tak 0,13; Vägg 0,18; Golv 0,15; Fönster 1,1; Ytterdörr 1,1 (W/m²K) | B26 s. 15 (läst med råtextextraktion, layoutläget förskjuter kolumnerna) |
| BFS 2026:9 övergång | "3. Den upphävda författningen får tillämpas på arbeten som a) kräver bygglov om ansökan om bygglov kommer in till kommunen före den 1 oktober 2027, …" "4. En förutsättning för att äldre bestämmelser enligt punkt 3 ska få tillämpas är att samtliga äldre bestämmelser tillämpas." "5. Punkt 3 och 4 gäller inte krav i 2 kap. 8 § 1–3." | B26 s. 10 |
| BFS 2026:14 (från 1 jan 2028) | 3 kap. 1 § får ny lydelse; första–fjärde styckena och hänvisningen till tabell 6 är oförändrade, sista stycket blir "Kraven i 3–3 b §§ får också anpassas enligt första stycket." | B26b |
| BBR 1:22347 (BFS 2011:6 i lydelse BFS 2024:14) | "Den tillbyggda delen ska uppfylla de krav som gäller för nya byggnader om en tillbyggnad ur teknisk och funktionell synpunkt utgör en separat enhet i förhållande till den befintliga byggnaden." | B14 s. 5 |
| BBR 9:92 Klimatskärm | "Uppfyller byggnaden efter ändring inte de i avsnitt 9:2 angivna kraven på primärenergital, ska vid ändring i klimatskärmen följande U-värden eftersträvas." Tabell 9:92: Utak 0,13; Uvägg 0,18; Ugolv 0,15; Ufönster 1,2; Uytterdörr 1,2 (W/m²K). "(BFS 2011:26)" | B14 s. 22 |

**Svar:**
- **Ansökan från 1 oktober 2026:** BFS 2026:9 **3 kap. 1 §** med **tabell 6 bilaga 2**. Tillbyggnaden räknas som **ändring** (PBL 1 kap. 4 § definierar tillbyggnad som en ändring; BFS 2026:9 3 kap. gäller "vid ändring av byggnader"). BFS 2026:9 har ingen egen regel för tillbyggnad som separat enhet (ordet "tillbygg" finns inte i författningen). Egen läsning: 1 kap. 3 § 2 avser "byggnad" med Atemp under 50 m², alltså hela huset, inte tillbyggnadens area.
- **Ansökan 1 juli–30 september 2026:** BBR (BFS 2011:6 i lydelse BFS 2024:14) avsnitt **9:92**, och avsnitt **1:22347** för frågan om tillbyggnaden är en separat enhet (då gäller kraven för nya byggnader, avsnitt 9:2). Annars räknas den som ändring.
- Skillnad i tal: fönster och ytterdörr 1,2 i BBR mot 1,1 i BFS 2026:9. BBR säger "eftersträvas", BFS 2026:9 säger att kravet "anses uppfyllt" vid de värdena.

### F7. PBL 10 kap. 3 och 4 §§, ordagrant

| Paragraf | Ordagrant | Källa |
|---|---|---|
| 10 kap. 3 §, Lag (2025:974) | "En åtgärd får inte påbörjas innan byggnadsnämnden har gett ett startbesked, om åtgärden omfattas av krav på 1. bygglov, rivningslov eller marklov, eller 2. en anmälan enligt föreskrifter som har meddelats med stöd av 16 kap. 8 §. Kravet på startbesked gäller även för en åtgärd med frivilligt lov enligt 9 kap. 52–54 §§, om sökanden har begärt ett startbesked för åtgärden." | R1 |
| 10 kap. 3 a §, Lag (2022:909) | "Om byggnadsnämnden har gett ett startbesked enligt 3 § för en viss del av en åtgärd, får en annan del av åtgärden inte påbörjas innan byggnadsnämnden har gett ett startbesked som omfattar den delen." | R1 |
| 10 kap. 4 §, ursprunglig lydelse | "Ett byggnadsverk får inte tas i bruk i de delar som omfattas av ett startbesked för byggåtgärder förrän byggnadsnämnden har gett ett slutbesked, om nämnden inte beslutar annat." | R1 |

### F8. PBL 10 kap. 6 § första stycket, ordagrant

"I fråga om en sådan åtgärd som avses i 3 § ska byggherren se till att det finns en plan för att kontrollera utförandet av åtgärden. Kravet på kontrollplan gäller inte utförande som omfattas av en byggbedömares kontroll." Lag (2026:712). Källa R1, 2026-09-28.

Sammanhang: byggbedömare får bara användas vid nybyggnad (10 kap. 13 §: "En byggbedömare får användas för kontroll vid genomförandet av nybyggnad som omfattas av föreskrifter som meddelats med stöd av 16 kap. 9 § 2."). Källa R1.

### F9. Bärförmåga i BFS 2024:6

| Del | Ordagrant | Källa |
|---|---|---|
| Kravet på bärförmåga, 2 kap. 2 § | "Bärverk ska med tillräcklig tillförlitlighet i brottgränstillstånd ha en bärförmåga som är lika med eller större än lasteffekten från laster och annan påverkan som sannolikt kommer att uppkomma under byggnadens uppförande och användning." | B6 s. 7 |
| Statisk jämvikt, 2 kap. 3 § | "Byggnader ska ha statisk jämvikt så att stabiliserande krafter med tillräcklig tillförlitlighet är större än eller lika med laster som kan orsaka stjälpning, lyftning och glidning." | B6 s. 7 |
| Stadga, 2 kap. 12 § | "För bärverk ska följande företeelser endast förekomma i acceptabel omfattning i bruksgränstillstånd …: 1. Deformationer. 2. Sprickbildning. 3. Svajning. 4. Svängningar. 5. Vibrationer." | B6 s. 8 |
| Beständighet, 2 kap. 13 § | "Byggprodukter och material som ingår i bärverk ska antingen vara naturligt beständiga eller göras beständiga genom skyddsåtgärder och underhåll så att kraven i brottgräns- och bruksgränstillstånd uppfylls under byggnadens livslängd." | B6 s. 8 |
| Säkerhetsklass 1, 2 kap. 7 § | "Bärverk i följande byggnader och andra anläggningar får hänföras till säkerhetsklass 1: 1. Små byggnader med högst två plan där få personer vistas tillfälligt, såsom komplementbyggnader, mindre lagerlokaler och mindre ekonomibyggnader." | B6 s. 7 |
| Dimensioneringskontroll, 1 kap. 17 § | "Dimensioneringskontroll ska göras för byggnader i säkerhetsklass 2 eller 3." | B6 s. 4 |

**Svar:** Kravparagraferna är **BFS 2024:6 2 kap. 2 § (bärförmåga), 3 § (jämvikt), 12 § (stadga) och 13 § (beständighet)**, alla i avdelning II som gäller nya byggnader. En ouppvärmd komplementbyggnad **får** hänföras till **säkerhetsklass 1** (2 kap. 7 § 1). Då krävs **ingen dimensioneringskontroll** enligt 1 kap. 17 §, som bara gäller säkerhetsklass 2 och 3. Ordet är "får": byggherren kan välja högre klass. Egen läsning: ett komplementbostadshus, där personer vistas mer än tillfälligt, passar bättre in på 2 kap. 6 § 1 (säkerhetsklass 2), och då krävs dimensioneringskontroll. Specens ANTAGANDE A7 (ingen dimensioneringskontroll för komplementbyggnad) har alltså stöd för komplementbyggnad men inte för komplementbostadshus.

### F10. Lovfri tillbyggnad och anmälan för bärande delar (bara FAQ)

| Del | Ordagrant | Källa |
|---|---|---|
| PBF 6 kap. 1 § inledning och p. 2 | "För en åtgärd som inte omfattas av krav på bygglov, rivningslov eller marklov enligt plan- och bygglagen (2010:900) krävs det en anmälan vid … 2. en ändring av en byggnad, om ändringen innebär att konstruktionen av byggnadens bärande delar påverkas väsentligt," | R2 |
| PBL 1 kap. 4 § | "tillbyggnad: ändring av en byggnad som innebär en ökning av byggnadens volym," | R1 |
| Boverket | "Om det är en lovfri tillbyggnad som ska uppföras krävs det inte någon anmälan för själva tillbyggnaden i sig. Men om det finns tekniska installationer i tillbyggnaden, som till exempel ventilation, eldstad, vatten eller avlopp, så krävs det en anmälan för installationerna." | KB3 |

**Svar: källorna säger olika.** Enligt ordalydelsen är en tillbyggnad en ändring av en byggnad, och PBF 6 kap. 1 § 2 gäller varje lovfri ändring som väsentligt påverkar bärande delar; det talar för anmälan när tillbyggnaden gör ingrepp i husets bärande konstruktion. Boverket skriver att själva tillbyggnaden inte kräver anmälan och nämner bara installationerna, utan att ta upp bärande delar. Förordningen väger tyngst som rättskälla; Boverkets text är vägledning. Egen läsning, inte bekräftad av någon källa: det som kan utlösa anmälan är ingreppet i den befintliga byggnadens bärande delar (till exempel håltagning i bärande vägg), inte tillbyggnadens egen stomme.

---

## 5. Sammanfattning för specen

**Ska ändras:**

| Rad eller ställe i specen | Från | Till | Grund |
|---|---|---|---|
| `altan-barformaga` (3.1 rad 3) | BFS 2024:6 1 kap. 2 § andra st., 12 och 18 §§ | BFS 2024:6 1 kap. 2 § **femte** st., 12 och 18 §§ | 2.2 |
| `till-barformaga`, `komp-barformaga` | [kravparagraf, F9] | BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§ | F9 |
| `till-brandvarnare` | BFS 2024:7 2 kap. 34–35 §§ | BFS 2024:7 7 kap. 47 §; 2 kap. 34–35 §§ | 2.3, F5 |
| `komp-brandspridning` | BFS 2024:7 6 kap. 5 och 10 §§ | samma nummer, **i lydelse BFS 2025:10**; undantaget gäller bara komplementbyggnad till en- eller tvåbostadshus, högst 15 m² byggnadsarea | 2.3 |
| `vent-brandtatning` | BFS 2024:7 5 kap. 42 § | förslag: BFS 2024:7 5 kap. 29 och 42 §§ | 2.3 |
| `till-energi` `juli-sept-2026` | BFS 2011:6 avsnitt 9:92 | BFS 2011:6 avsnitt 1:22347 och 9:92 | F6 |
| `altan-racke` när altanen inte ansluter till huset | (raden tas bort i specen) | kan behållas med Krav "PBF 3 kap. 10 §" | F1 |
| Underlaget 4.7, Stockholms "BFS 2025:9" | 2 kap. 30–31 §§ BFS 2025:9 | BFS 2024:9 2 kap. 30–31 §§ | 1.1 |

**Stämmer:** alla övriga lagrum i 13.1, se tabellerna 2.1–2.8.

**Kunde inte bekräftas:** om PBF 7 kap. 5 § första st. 6 omfattar altan med skärmtak (F2); något lagkrav på skorstensfejarmästarens besiktning före första användning och om den är sakkunnigkontroll (F3); om lovfri tillbyggnad som berör bärande delar kräver anmälan (F10, källorna säger olika).

---

## 6. Kunde inte läsas (2026-09-28)

| Adress | Fel | Vad som användes i stället |
|---|---|---|
| https://forfattningssamling.boverket.se/ och https://forfattningssamling.boverket.se/detaljer/BFS2024-9 | HTTP 200 men bara ett tomt Blazor-skal (4,8 kB, ingen författningstext; sidan byggs med JavaScript) | Rinfo-flödet R0 och ändringsförfattningarnas pdf:er |
| https://rinfo.boverket.se/BFS2025-9/pdf/BFS2025-9.pdf | 404 (filen ligger under BFS2007-5) | https://rinfo.boverket.se/BFS2007-5/pdf/BFS2025-9.pdf |
| https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/forbranningsgaser/ | 404 | KB4 |
| Myndigheten för civilt försvars föreskrifter om brandskyddskontroll (som FSO 3 kap. 2 § hänvisar till) | Inte hämtade: utanför beställningens källor | – |

---

## Bilaga A. Lag (2026:746), ny lydelse från 1 januari 2027, ordagrant

Källa: R1 (paragrafer märkta "/Träder i kraft I:2027-01-01/"), läst 2026-09-28; paragraflistan stämd mot ingressen i R3. Rubriker som införs står efter paragrafnumret.


#### 1 kap. 4 §

I denna lag avses med

allmän plats: en gata, en väg, en park, ett torg eller ett
annat område som enligt en detaljplan är avsett för ett
gemensamt behov,

bebygga: att förse ett område med ett eller flera
byggnadsverk,

bebyggelse: en samling av byggnadsverk som inte enbart består
av andra anläggningar än byggnader,

byggherre: den som för egen räkning utför eller låter utföra
projekterings-, byggnads-, rivnings- eller markarbeten,

byggnad: en varaktig konstruktion som består av tak eller av
tak och väggar och som är varaktigt placerad på mark eller
helt eller delvis under mark eller är varaktigt placerad på en
viss plats i vatten samt är avsedd att vara konstruerad så att
människor kan uppehålla sig i den,

byggnadsnämnden: den eller de nämnder som fullgör kommunens
uppgifter enligt denna lag,

byggnadsverk: en byggnad eller annan anläggning,

byggprodukt: en produkt som är avsedd att stadigvarande ingå i
ett byggnadsverk,

ekonomibyggnad: en byggnad som behövs för jordbruket,
skogsbruket, vattenbruket, fisket eller renskötseln,

exploateringsavtal: avtal om genomförande av en detaljplan och
om medfinansieringsersättning mellan en kommun och en
byggherre eller en fastighetsägare avseende mark som inte ägs
av kommunen, dock inte avtal mellan en kommun och staten om
utbyggnad av statlig transportinfrastruktur,

fasadändring: en ändring av en byggnad som innebär att
byggnaden byter kulör, fasadbeklädnad eller
taktäckningsmaterial eller att byggnadens yttre karaktärsdrag
påverkas på annat sätt,

genomförandetiden: den tid för genomförandet av en detaljplan
som ska bestämmas enligt 4 kap. 21-25 §§,

komplementbostadshus: en fristående byggnad som kompletterar
ett en- eller tvåbostadshus och är inredd med en självständig
bostad,

komplementbyggnad: en fristående byggnad som kompletterar en
byggnad och inte är inredd med en självständig bostad,

kvartersmark: mark som enligt en detaljplan inte ska vara
allmän plats eller vattenområde,

markanvisning: ett avtal mellan en kommun och en byggherre som
ger byggherren ensamrätt att under en begränsad tid och under
givna villkor förhandla med kommunen om överlåtelse eller
upplåtelse av ett visst av kommunen ägt markområde för
bebyggande,

medfinansieringsersättning: ersättning som en byggherre eller
en fastighetsägare i samband med genomförande av en detaljplan
åtar sig att betala för en del av en kommuns kostnad för
bidrag till byggande av en viss väg eller järnväg som staten
eller en region ansvarar för,

miljönämnden: den eller de nämnder som fullgör kommunens
uppgifter på miljö- och hälsoskyddsområdet,

nybyggnad: uppförande av en ny byggnad eller flyttning av en
tidigare uppförd byggnad till en ny plats,

omgivningsbuller: buller från flygplatser, industriell
verksamhet, spår-trafik och vägar,

planläggning: arbetet med att ta fram en regionplan, en
översiktsplan, en detaljplan eller områdesbestämmelser,

sammanhållen bebyggelse: bebyggelse på tomter som gränsar till
varandra eller skiljs åt endast av en väg, gata eller
parkmark,

studentbostad: en bostad avsedd för studerande på universitet,
högskola, annan eftergymnasial utbildning eller
vuxenutbildning,

större byggnadsändring: en lov- eller anmälningspliktig
ändring av en byggnad som innebär en stor ekonomisk
investering och så omfattande åtgärder att hela eller en
betydande och avgränsbar del av byggnaden förnyas,

tillbyggnad: ändring av en byggnad som innebär en ökning av
byggnadens volym,

tomt: ett område som inte är en allmän plats men som omfattar
mark avsedd för en eller flera byggnader och mark som ligger i
direkt anslutning till byggnaderna och behövs för att
byggnaderna ska kunna användas för avsett ändamål,

underhåll: en eller flera åtgärder som vidtas i syfte att
bibehålla eller återställa en byggnads konstruktion, funktion,
användningssätt, utseende eller kulturhistoriska värde, och

ändring av en byggnad: en eller flera åtgärder som ändrar en
byggnads konstruktion, funktion, användningssätt, utseende
eller kulturhistoriska värde. Lag (2026:746).

#### 8 kap. 2 § – ny rubrik: Utformningskrav vid nybyggnad

Vid nybyggnad ska kraven i 1 § uppfyllas för hela
byggnaden. Vid flyttning av en byggnad ska kraven dock
anpassas om och i den utsträckning det är skäligt med hänsyn
till

1. flyttningens syfte,

2. byggnadens förutsättningar,

3. resurshushållning, och

4. bestämmelserna om varsamhet och förbud mot förvanskning i
13, 17 och 18 §§.

Första stycket gäller inte om något annat följer av detta
kapitel eller av föreskrifter som har meddelats med stöd av
16 kap. 2 §. Lag (2026:746).

#### 8 kap. 2 a § – ny rubrik: Utformningskrav vid en ändring av en byggnad

Vid en ändring av en byggnad ska kraven i 1 § uppfyllas
för det som ändras. Kraven ska dock anpassas om och i den
utsträckning det är skäligt med hänsyn till

1. ändringens omfattning,

2. byggnadens förutsättningar,

3. resurshushållning, och

4. bestämmelserna om varsamhet och förbud mot förvanskning i
13, 17 och 18 §§.

Första stycket gäller inte om något annat följer av detta
kapitel eller av föreskrifter som har meddelats med stöd av
16 kap. 2 §. Lag (2026:746).

#### 8 kap. 2 b § – ny rubrik: Utformningskrav i fråga om tillgänglighet till eller användbarhet av lokaler

När det gäller kravet i 1 § 3 ska hinder mot
tillgänglighet till eller användbarhet av lokaler dit
allmänheten har tillträde trots 2 och 2 a §§ alltid avhjälpas,
om hindret med hänsyn till de praktiska och ekonomiska
förutsättningarna är enkelt att avhjälpa. Lag (2026:746).

#### 8 kap. 2 c § – ny rubrik: Hur utformningskraven ska uppfyllas

De krav som ska uppfyllas vid tillämpningen av 2 och
2 a §§ är de krav som gäller när byggnaden uppförs eller
ändringen görs. Kraven enligt 2-2 b §§ ska uppfyllas så att de
med normalt underhåll kan antas komma att fortsätta att vara
uppfyllda under en ekonomiskt rimlig livslängd. Lag (2026:746).

#### 8 kap. 3 § – ny rubrik: Utformningskrav på andra anläggningar än byggnader

I den omfattning som framgår av föreskrifter som har
meddelats med stöd av 16 kap. 2 § ska det som enligt 1-2 c §§
gäller för en byggnad också gälla för en annan anläggning än
en byggnad. Lag (2026:746).

#### 8 kap. 5 § – ny rubrik: Egenskapskrav vid nybyggnad

Vid nybyggnad ska kraven i 4 § uppfyllas för hela
byggnaden. Vid flyttning av en byggnad ska kraven dock
anpassas om och i den utsträckning det är skäligt med hänsyn
till

1. flyttningens syfte,

2. byggnadens förutsättningar,

3. resurshushållning, och

4. bestämmelserna om varsamhet och förbud mot förvanskning i
13, 17 och 18 §§.

Första stycket gäller inte om något annat följer av detta
kapitel eller av föreskrifter som har meddelats med stöd av
16 kap. 2 §. Lag (2026:746).

#### 8 kap. 5 a § – ny rubrik: Egenskapskrav vid en ändring av en byggnad

Vid en ändring av en byggnad ska kraven i 4 § uppfyllas
för det som ändras. Kraven ska dock anpassas om och i den
utsträckning det är skäligt med hänsyn till

1. ändringens omfattning,

2. byggnadens förutsättningar,

3. resurshushållning, och

4. bestämmelserna om varsamhet och förbud mot förvanskning i
13, 17 och 18 §§.

Första stycket gäller inte om något annat följer av detta
kapitel eller av föreskrifter som har meddelats med stöd av
16 kap. 2 §. Lag (2026:746).

#### 8 kap. 5 b §

Vid en större byggnadsändring ska, utöver det som
framgår av 5 a §,

1. sådana brister i förhållande till kraven i 4 § första
stycket 1-5 som medför betydande risker med avseende på hälsa
och säkerhet undanröjas i hela byggnaden, och

2. kraven i 4 § första stycket 6, 10 och 11 tillgodoses i den
utsträckning som framgår av föreskrifter som har meddelats med
stöd av 16 kap. 2 §. Lag (2026:746).

#### 8 kap. 5 c § – ny rubrik: Hur egenskapskraven ska uppfyllas

De krav som ska uppfyllas vid tillämpningen av 5 och
5 a §§ är de krav som gäller när byggnaden uppförs eller
ändringen görs. Kraven enligt 5-5 b §§ ska uppfyllas så att de
med normalt underhåll kan antas komma att fortsätta att vara
uppfyllda under en ekonomiskt rimlig livslängd. Lag (2026:746).

#### 8 kap. 5 d § – ny rubrik: Egenskapskrav på andra anläggningar än byggnader

Det som enligt 5-5 c §§ gäller i fråga om en byggnad ska
tillämpas också på andra anläggningar än byggnader.
Lag (2026:746).

#### 8 kap. 6 §

Kraven på tillgänglighet och användbarhet i 1 § 3 och 4 §
första stycket 8 gäller inte i fråga om

1. en arbetslokal, om kraven är obefogade med hänsyn till
arten av den verksamhet som lokalen är avsedd för,

2. ett fritidshus med högst två bostäder,

3. tillgänglighet till ett en- eller tvåbostadshus, om det med
hänsyn till terrängen inte är rimligt att uppfylla kraven, och

4. högst 80 procent av

a) det totala antalet studentbostäder i en byggnad, eller

b) det antal studentbostäder som tillkommer i en byggnad när
en åtgärd vidtas.

En studentbostad som omfattas av undantaget i första stycket 4
och som inte ligger på en vind eller i suterräng ska dock
kunna besökas av en person med nedsatt rörelse- eller
orienteringsförmåga. Lag (2026:746).

#### 8 kap. 7 §

Vid en ändring av en byggnad som innebär att bostäder
inreds på en vind eller i suterräng gäller inte kraven i 1 § 3
och 4 § första stycket 8 för den bostaden. Lag (2026:746).

#### 8 kap. 8 §

I fråga om en byggåtgärd som inte kräver bygglov eller
anmälan enligt denna lag eller föreskrifter som har meddelats
med stöd av lagen, ska kraven

i 1 och 4 §§ anpassas och avsteg från kraven göras om och i
den utsträckning det är skäligt med hänsyn till åtgärdens art
och omfattning.

Första stycket gäller inte i fråga om krav som alltid ska
uppfyllas enligt föreskrifter som har meddelats med stöd av
16 kap. 2 § 4. Lag (2026:746).

#### 9 kap. 56 §

Bygglov ska ges för en åtgärd i ett område som omfattas
av en detaljplan, om

1. den fastighet och det byggnadsverk som åtgärden avser

a) överensstämmer med detaljplanen,

b) avviker från detaljplanen men detaljplanens genomförandetid
har gått ut för minst femton år sedan, eller

c) avviker från detaljplanen men avvikelsen har godtagits vid
en tidigare bygglovsprövning eller fastighetsbildning enligt
3 kap. 2 § fastighetsbildningslagen (1970:988),

2. åtgärden inte strider mot detaljplanen,

3. åtgärden inte måste avvakta att genomförandetiden för
detaljplanen börjar löpa, och

4. åtgärden uppfyller de krav som följer av 2 kap. 6 § första
stycket 1 och 5 och tredje stycket, 8 och 9 §§ samt 8 kap. 1-
2 a, 2 c, 3, 6, 7 och 9-11 §§, 12 § första stycket och 13, 17
och 18 §§ och frågan inte redan är avgjord genom detaljplanen.

Vid bedömningen enligt första stycket 1 a och 2 ska hänsyn
inte tas till åtgärder som enligt 10 kap. 2 a § får strida mot
en detaljplan. Lag (2026:746).

#### 9 kap. 57 §

Bygglov ska ges för en åtgärd i ett område som inte
omfattas av en detaljplan, om åtgärden

1. inte strider mot områdesbestämmelser,

2. inte förutsätter planläggning enligt 4 kap. 2 eller 3 §,
och

3. uppfyller de krav som följer av 2 kap. och 8 kap. 1-2 a,
2 c, 3, 6, 7 och 9-11 §§, 12 § första stycket och 13, 17 och
18 §§ och frågan inte redan är avgjord genom
områdesbestämmelser eller förhandsbesked.

Vid bedömningen enligt första stycket 1 ska hänsyn inte tas
till åtgärder som enligt 10 kap. 2 a § får strida mot
områdesbestämmelser.

Vid bedömningen enligt första stycket 2 om en åtgärds
miljöpåverkan förutsätter planläggning, ska hänsyn tas till de
omständigheter som talar för eller emot en betydande
miljöpåverkan och som motsvarar de omständigheter som hänsyn
ska tas till vid en undersökning av en åtgärds miljöpåverkan
enligt 6 kap. miljöbalken. Om åtgärden kräver tillstånd enligt
7 kap. 28 a § miljöbalken och redan har miljöbedömts enligt
6 kap. miljöbalken, ska hänsyn tas till resultatet av den
bedömningen. Lag (2026:746).

#### 9 kap. 59 §

Bestämmelserna i 57 § första stycket ska inte tillämpas,
om åtgärden

1. är att ett en- eller tvåbostadshus kompletteras med

a) en liten tillbyggnad, eller

b) en liten komplementbyggnad,

2. inte strider mot sådana områdesbestämmelser som avses i
4 kap. 42 § första stycket 3 eller 4 c, och

3. uppfyller de krav som följer av 2 kap. 6 § första stycket 1
och 5 och tredje stycket, 8 och 9 §§ och 8 kap. 1-2 a, 2 c, 3,
6, 7 och 9-11 §§, 12 § första stycket och 13, 17 och 18 §§ och
frågan inte redan är avgjord genom områdesbestämmelser eller
förhandsbesked. Lag (2026:746).

#### 11 kap. 19 §

Om en byggherre, byggbedömare, ägare,
nyttjanderättshavare, väghållare, kontrollansvarig, sakkunnig
eller huvudman för en allmän plats låter bli att vidta en
åtgärd och därigenom bryter mot en skyldighet enligt denna lag
eller föreskrifter eller beslut som har meddelats med stöd av
lagen, får byggnadsnämnden förelägga denne att inom en viss
tid vidta åtgärden (åtgärdsföreläggande).

Förelägganden om att avhjälpa ett sådant hinder som avses i
8 kap. 2 b § eller 12 § andra stycket ska riktas mot den som
har rådighet över hindret. Om inte annat visas ska det anses
vara ägaren av byggnaden respektive den allmänna platsens
huvudman. Lag (2026:746).

#### 16 kap. 2 §

Regeringen eller den myndighet som regeringen bestämmer
får meddela föreskrifter om

1. att det som gäller i fråga om en byggnad i 8 kap. 1-2 c §§
ska tillämpas också på en annan anläggning än en byggnad,

2. vad som krävs för att ett byggnadsverk ska anses uppfylla
kraven i 8 kap. 1 och 4 §§,

3. att vissa krav trots 8 kap. 2, 2 a, 5 och 5 a §§ eller vid
tillämpning av 8 kap. 8 § alltid ska uppfyllas vid nybyggnad,
en större byggnadsändring eller en annan ändring av en
byggnad,

4. att vissa krav trots 8 kap. 2-2 b, 5 och 5 a §§ eller vid
tillämpning av 8 kap. 8 § inte behöver uppfyllas vid
nybyggnad, en större byggnadsändring eller en annan ändring av
en byggnad,

5. att krav enligt 8 kap. 4 § första stycket 6 trots 8 kap. 5
och 5 a §§ alltid ska uppfyllas i fråga om andra byggnader än
bostadshus när detta behövs till följd av Sveriges medlemskap
i Europeiska unionen,

6. att krav enligt 8 kap. 4 § första stycket 11 trots 8 kap. 5
och 5 a §§ alltid ska uppfyllas i fråga om andra byggnader än
bostadshus,

7. vad som krävs för att en studentbostad ska uppfylla kravet
i 8 kap. 6 § andra stycket och sådana undantag från det kravet
som det finns särskilda skäl för, och

8. när en bygglovspliktig eller anmälningspliktig åtgärd
avseende en byggnad uppfyller kriterierna för att vara en
större byggnadsändring. Lag (2026:746).

#### 16 kap. 3 §

Regeringen eller den myndighet som regeringen bestämmer
får meddela föreskrifter om att vissa slags hinder mot
tillgänglighet eller användbarhet vid tillämpningen av 8 kap.
2 b eller 12 § ska anses vara enkla att avhjälpa.
Lag (2026:746).

---

## Bilaga B. Förordning (2026:1265), ny lydelse från 1 januari 2027, ordagrant

Källa: R2 (paragrafer märkta "/Träder i kraft I:2027-01-01/"), läst 2026-09-28; paragraflistan stämd mot ingressen i R4. 1 kap. 11 § i gällande lydelse får beteckningen 1 kap. 12 §. Upphör utan ersättning: 3 kap. 21 och 23 §§, 7 kap. 1 §. 10 kap. 4 a § nedan bär beteckningen Förordning (2026:1513).


#### 1 kap. 1 §

Denna förordning kompletterar plan- och bygglagen
(2010:900) och är indelad i tio kapitel enligt följande:

1. innehåll och tillämpning (1 kap.),

2. planer och områdesbestämmelser (2 kap.),

3. krav på byggnadsverk (3 kap.),

4. krav på byggprodukter m.m. (4 kap.),

5. funktions- och säkerhetsåtgärder (5 kap.),

6. anmälan (6 kap.),

7. byggbedömare, kontrollansvariga, sakkunniga och
funktionskontrollanter (7 kap.),

8. tillsyn, vägledning och uppföljning (8 kap.),

9. byggsanktionsavgifter (9 kap.), och

10. bemyndiganden (10 kap.). Förordning (2026:1265).

#### 1 kap. 11 §

Vid tillämpningen av bestämmelserna om större
byggnadsändring i plan- och bygglagen (2010:900) och denna
förordning ska den bedömning som görs av om åtgärderna är så
omfattande att hela eller en betydande och avgränsbar del av
byggnaden förnyas utgå från en samlad bedömning av åtgärdernas
innebörd. För att åtgärderna sammantagna ska anses innebära en
sådan förnyelse, ska någon eller några av följande åtgärder
ingå i ändringen:

1. större ingrepp i stomme,

2. större ändring av planlösningen,

3. att byggnaden eller en betydande och avgränsbar del av
byggnaden tas i anspråk eller inreds för ett väsentligt annat
ändamål, eller

4. att merparten av de tekniska systemen byts ut.

Om en ändring endast innefattar åtgärder enligt första stycket
3 och 4, ska åtgärderna dock inte anses vara så omfattande att
byggnaden förnyas. Förordning (2026:1265).

#### 1 kap. 12 §

Bestämmelser om riktvärden för buller utomhus för
spårtrafik, vägar och flygplatser vid bostadsbyggnader och
bestämmelser om beräkning av bullervärden vid
bostadsbyggnader finns i förordningen (2015:216) om
trafikbuller vid bostadsbyggnader. Förordning (2026:1265).

#### 3 kap. 4 §

Om det behövs för att en byggnad enligt 8 kap. 1 § 3 plan-
och bygglagen (2010:900) ska vara tillgänglig och användbar
för personer med nedsatt rörelse- eller orienteringsförmåga,
ska byggnaden vara försedd med en eller flera hissar eller
andra lyftanordningar. Förordning (2026:1265).

#### 3 kap. 4 a §

Vid uppförande av en ny byggnad behöver, trots 4 §, en
bostad inte vara tillgänglig genom en hiss eller en annan
lyftanordning, om byggnaden har färre än tre våningar. Om
bostaden inte kan nås från marken, ska byggnaden dock vara
projekterad och utförd på ett sådant sätt att en hiss eller en
annan lyftanordning kan installeras utan svårighet.

Vid tillämpningen av första stycket ska med våning jämställas
vind där det finns en bostad eller huvuddelen av en bostad.
Förordning (2026:1265).

#### 3 kap. 4 b §

Vid en ändring av en byggnad som efter ändringen har
färre än fyra våningar eller vid flyttning av en byggnad som
har färre än fyra våningar behöver, trots 4 §, en hiss eller
en annan lyftanordning inte installeras i byggnaden för att
göra en bostad tillgänglig och användbar för personer med
nedsatt rörelse- eller orienteringsförmåga. En befintlig hiss
i en sådan byggnad får dock inte tas ur bruk.

Vid tillämpningen av första stycket ska med våning jämställas
vind där det finns en bostad eller huvuddelen av en bostad.
Förordning (2026:1265).

#### 3 kap. 5 b §

För en byggnad som innehåller studentbostäder gäller
undantagen i 4 a och 4 b §§ endast om man från marken kan nå
de studentbostäder som enligt 8 kap. 6 § första stycket 4
plan- och bygglagen (2010:900) ska vara tillgängliga och
användbara för personer med nedsatt rörelse- eller orien-
teringsförmåga. I så fall behöver endast de studentbostäder
som kan nås från marken kunna besökas av en person med nedsatt
rörelse- eller orienteringsförmåga. Förordning (2026:1265).

#### 3 kap. 6 §

Det som sägs om uppfyllandet av kraven på utformning i
8 kap. 2 och 2 a §§ plan- och bygglagen (2010:900) ska gälla
för uppfyllandet av utformningskraven i 1-5 §§.
Förordning (2026:1265).

#### 3 kap. 11 §

För att uppfylla rimliga säkerhetskrav vid användning ska

1. en byggnad som har uppförts eller omfattas av ett bygglov
före den 1 juli 1960 alltid vara försedd eller utrustad med de
anordningar som behövs för uppstigning på byggnadens tak och
till skydd mot olycksfall genom nedstörtning från taket,

2. portar och liknande anordningar i en byggnad som har
uppförts eller omfattas av en bygglovsansökan före den 1 juli
1974 vara utförda så att risk för olycksfall inte uppkommer,

3. en byggnad som har uppförts eller omfattas av ett bygglov
före den 1 juli 1977 vara försedd eller utrustad med de
anordningar som skäligen kan krävas för att skapa godtagbara
arbetsförhållanden för dem som hämtar avfall från byggnaden,

4. en hiss som är installerad i en byggnad och avsedd för
persontransport alltid vara försedd med

a) en korgdörr eller ett annat lämpligt skydd i korgöppningen,
om byggnaden huvudsakligen innehåller arbetslokaler, eller

b) en skylt som varnar för risken att klämmas av föremål som
fastnar i schaktväggen, om byggnaden inte huvudsakligen
innehåller arbetslokaler och hissen inte är försedd med en
korgdörr eller annat sådant lämpligt skydd som avses i a,

5. en hiss som är installerad i en byggnad och avsedd för
persontransport senast den 1 oktober 2031 vara försedd med
lämpligt skydd i utrymmet mellan schaktdörren och korgdörren
eller korggrinden, om det finns risk för innestängning i det
utrymmet, och

6. i skälig utsträckning de åtgärder vidtas som är nödvändiga
för att höja säkerheten vid användningen av en hiss som är
installerad i en byggnad. Förordning (2026:1265).

#### 3 kap. 12 §

Kraven i 11 § 2 och 3 ska alltid vara uppfyllda genom att

1. portar och anordningar som avses i 11 § 2 är utförda på det
sätt som skäligen kunde krävas av en ny port eller anordning
den 1 juli 1974, och

2. en byggnad som avses i 11 § 3 har sådana anordningar som
skäligen kunde krävas av en ny byggnad den 1 juli 1977.
Förordning (2026:1265).

#### 3 kap. 18 §

För att uppfylla det krav på tillgänglighet och
användbarhet som anges i 8 kap. 4 § första stycket 8 plan- och
bygglagen (2010:900) ska en byggnad vara projekterad och
utförd på ett sådant sätt att byggnaden är tillgänglig och
användbar för personer med nedsatt rörelse- eller
orienteringsförmåga.

Om det behövs för att en byggnad enligt 8 kap. 4 § första
stycket 8 plan- och bygglagen ska vara tillgänglig och
användbar för personer med nedsatt rörelse- eller
orienteringsförmåga, ska byggnaden vara försedd med en eller
flera hissar eller andra lyftanordningar.
Förordning (2026:1265).

#### 3 kap. 18 a §

Vid uppförande av en ny byggnad behöver, trots 18 §
andra stycket, en bostad inte vara tillgänglig genom en hiss
eller en annan lyftanordning, om byggnaden har färre än tre
våningar. Om bostaden inte kan nås från marken, ska byggnaden
dock vara projekterad och utförd på ett sådant sätt att en
hiss eller en annan lyftanordning kan installeras utan
svårighet.

Vid tillämpningen av första stycket ska med våning jämställas
vind där det finns en bostad eller huvuddelen av en bostad.
Förordning (2026:1265).

#### 3 kap. 18 b §

Vid en ändring av en byggnad som efter ändringen har
färre än fyra våningar eller vid flyttning av en byggnad som
har färre än fyra våningar behöver, trots 18 § andra stycket,
en hiss eller en annan lyftanordning inte installeras i
byggnaden för att göra en bostad tillgänglig och användbar för
personer med nedsatt rörelse- eller orienteringsförmåga. En
befintlig hiss i en sådan byggnad får dock inte tas ur bruk.

Vid tillämpningen av första stycket ska med våning jämställas
vind där det finns en bostad eller huvuddelen av en bostad.
Förordning (2026:1265).

#### 3 kap. 22 §

Det som sägs om att uppfylla kraven på tekniska
egenskaper i 8 kap. 5-5 b §§ plan- och bygglagen (2010:900)
ska gälla för uppfyllandet av egenskapskraven i 7-10, 13, 14
och 16-20 b §§ detta kapitel.

De krav som gäller bredbandsanslutning och hållbar mobilitet i
8 kap. 4 § första stycket 10 och 11 plan- och bygglagen och
20 a och 20 b §§ detta kapitel behöver dock inte uppfyllas vid
annan ändring av en byggnad än en sådan större byggnadsändring
som avses i 1 kap. 4 § plan- och bygglagen.
Förordning (2026:1265).

#### 3 kap. 27 §

Kraven som gäller energihushållning, hushållning med
vatten och avfall och bredbandsanslutning i 8 kap. 4 § första
stycket 6, 9 och 10 plan- och bygglagen (2010:900) och 14, 20
och 20 a §§ detta kapitel samt de föreskrifter som Boverket
har meddelat i anslutning till de paragraferna behöver inte
uppfyllas vid nybyggnad eller ändring av ett tillfälligt
anläggningsboende. Förordning (2026:1265).

#### 3 kap. 28 §

I fråga om nybyggnad eller ändring av ett tillfälligt
anläggningsboende ska kraven i 8 kap. 1 § och 4 § första
stycket 2-5, 7 och 8 plan- och bygglagen (2010:900) och 8-10,
13, 16 §§ och 18 § första stycket detta kapitel samt de
föreskrifter som Boverket har meddelat i anslutning till de
paragraferna anpassas och avsteg från kraven göras i den
utsträckning som är skälig i förhållande till åtgärdens art,
omfattning och varaktighet.

Anpassningar och avsteg som görs enligt första stycket får
inte medföra en oacceptabel risk för människors hälsa och
säkerhet. Förordning (2026:1265).

#### 9 kap. 19 §

För att ta en byggnad i bruk efter tillbyggnad före
slutbesked, och därigenom bryta mot 10 kap. 4 § plan- och
bygglagen (2010:900), är byggsanktionsavgiften när åtgärden
avser

1. ett en- eller tvåbostadshus: 0,1 prisbasbelopp med ett
tillägg av 0,001 prisbasbelopp per kvadratmeter av
tillbyggnadens sanktionsarea,

2. en komplementbyggnad, ett komplementbostadshus eller en
annan liten byggnad: 0,016 prisbasbelopp med ett tillägg av
0,001 prisbasbelopp per kvadratmeter av tillbyggnadens
sanktionsarea,

3. ett flerbostadshus, en kontorsbyggnad, en handelsbyggnad
eller en byggnad för kultur- eller
idrottsevenemang: 0,2 prisbasbelopp med ett tillägg av
0,004 prisbasbelopp per kvadratmeter av tillbyggnadens sank-
tionsarea, eller

4. en annan byggnad än de som omfattas av 1-
3: 0,2 prisbasbelopp med ett tillägg av 0,002 prisbasbelopp
per kvadratmeter av tillbyggnadens sanktionsarea.

Om endast en del av en byggnad tas i bruk i strid med 10 kap.
4 § plan- och bygglagen, ska det som sägs i första stycket om
sanktionsarea i stället avse den area som tas i bruk.
Förordning (2026:1265).

#### 10 kap. 1 §

Boverket får meddela närmare föreskrifter om

1. utformning av byggnader enligt 2 kap. 6, 8 och 9 §§ plan-
och bygglagen (2010:900),

2. utformningskrav avseende lämplighet enligt 3 kap. 1 §,

3. utformningskrav avseende tillgänglighet och användbarhet
enligt 8 kap. 1 § 3 plan- och bygglagen samt 3 kap. 4 och
5 §§, och

4. uppfyllandet av utformningskraven enligt 8 kap. 2 och
2 a §§ plan- och bygglagen och 3 kap. 6 §.
Förordning (2026:1265).

#### 10 kap. 2 §

Boverket får meddela föreskrifter om vilka hinder mot
tillgänglighet och användbarhet som enligt 8 kap. 2 b § plan-
och bygglagen (2010:900) ska anses enkla att avhjälpa samt de
övriga föreskrifter som behövs för tillämpningen av
bestämmelserna om enkelt avhjälpta hinder och om undantag från
sådana krav. Förordning (2026:1265).

#### 10 kap. 3 §

Boverket får meddela närmare föreskrifter om

1. egenskapskrav avseende bärförmåga, stadga och beständighet
enligt 3 kap. 7 §,

2. egenskapskrav avseende säkerhet i händelse av brand enligt
3 kap. 8 §,

3. egenskapskrav avseende skydd med hänsyn till hygien, hälsa
och miljö enligt 3 kap. 9 §,

4. egenskapskrav avseende säkerhet vid användning enligt
3 kap. 10 §,

5. särskilda säkerhetskrav avseende redan uppförda byggnader
enligt 3 kap. 11-12 a §§,

6. egenskapskrav avseende skydd mot buller enligt 3 kap. 13 §,

7. egenskapskrav avseende energihushållning och värmeisolering
enligt 3 kap. 14 §,

8. egenskapskrav avseende lämplighet för det avsedda ändamålet
enligt 3 kap. 17 §,

9. egenskapskrav avseende tillgänglighet och användbarhet
enligt 8 kap. 4 § första stycket 8 plan- och bygglagen
(2010:900) och 3 kap. 18 och 19 §§,

10. egenskapskrav avseende hushållning med vatten enligt
3 kap. 20 §,

11. egenskapskrav avseende hushållning med avfall enligt
8 kap. 4 § första stycket 9 plan- och bygglagen,

12. egenskapskrav avseende bredbandsanslutning enligt 3 kap.
20 a §, och

13. egenskapskrav som avser hållbar mobilitet enligt 3 kap.
20 b §. Förordning (2026:1265).

#### 10 kap. 4 §

Boverket får meddela närmare föreskrifter om uppfyllandet
av egenskapskraven enligt 8 kap. 5-5 b och 5 d §§ plan- och
bygglagen (2010:900) och 3 kap. 22 §. Förordning (2026:1265).

#### 10 kap. 4 a §

Boverket får meddela föreskrifter om att kraven på
energihushållning och värmeisolering samt hållbar mobilitet i
8 kap. 4 § första stycket 6 och 11 plan- och bygglagen
(2010:900) och 3 kap. 14 och 20 b §§ ska uppfyllas vid en
sådan större byggnadsändring som avses i 1 kap. 4 § plan- och
bygglagen, om detta behövs till följd av Sveriges medlemskap i
Europeiska unionen.

Boverket får även meddela föreskrifter om att kraven på
energihushållning och värmeisolering samt hållbar mobilitet i
8 kap. 4 § första stycket 6 och 11 plan- och bygglagen och
3 kap. 14 och 20 b §§ alltid ska uppfyllas i fråga om andra
byggnader än bostadshus, om detta behövs till följd av
Sveriges medlemskap i Europeiska unionen.
Förordning (2026:1513).

#### 10 kap. 8 §

Boverket får, utom i fall som sägs i 6 §, efter att ha
hört andra berörda myndigheter meddela närmare föreskrifter om
anpassning av utformnings- och egenskapskraven på byggnadsverk
enligt 8 kap. 2, 2 a, 5 och 5 a §§ plan- och bygglagen
(2010:900) och bestämmelserna om undantag från utformnings-
och egenskapskraven på byggnadsverk enligt 8 kap. 6-8 §§ plan-
och bygglagen om inte någon annan myndighet enligt annan
författning har rätt att meddela sådana föreskrifter.
Förordning (2026:1265).
