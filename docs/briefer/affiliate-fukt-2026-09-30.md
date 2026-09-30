# Affiliate, fuktklustret, 2026-09-30

Affiliateagentens besked på de sex frågorna i `docs/INNEHALLSARKITEKTUR.md` avsnitt 9 ("Vad affiliateagenten behöver veta") och på rotnamnrymden. Underlag: `docs/briefer/underlag-fukt-sortiment-2026-09-30.md` (underlagsarbetaren samma dag, alla priser, lager och adresser lästa 2026-09-30), `docs/SOKORDSANALYS.md` avsnitt 7.5 och 12, skillen `affiliate`, `docs/AFFILIATE.md` avsnitt 1 till 5. Inga fröskript, inga innehållsfiler ändrade.

## Sammanfattning

| # | Fråga | Besked | Klart för |
|---|---|---|---|
| 1 | `/luftfuktare/` | **Nej.** Ingen kategorisida. `/fukt/lag-luftfuktighet/` byggs som kunskapssida utan produkter och utan reklamband | SEO, omgång B |
| 2 | Hygrometern | Kunskapssida **utan** produktkort, köpknappar och annonslänkar. Inget reklamband | hantverkaren, omgång A |
| 3 | Radonmätare | Inget kort på `/fukt/radon/`. Omprövas före `/fukt/radonsug/` i omgång E | hantverkaren, omgång B |
| 4 | `/fuktmatare/` | **Ja, kategorisida, granskning på datablad.** Test bara om Christian köper instrumenten (pengafrågan nedan) | UX och bygge, SEO, omgång C |
| 5 | Badrumsfläkten | Köpguide med kort, tre kandidater, efter flödesresonemanget | underlag före omgång D |
| 6 | Vind och tvättstuga | Produkter ur `luftavfuktare`; vinden bara sorption. Urvalet görs efter nytt underlag | underlag före omgång B resp. D |
| – | Rotnamnrymden | `fuktmatare` ja. `luftfuktare` nej | UX och bygge |

## 1. `/luftfuktare/`: nej

Proffsmagasinet har **två aktiva luftfuktare**: Termo Fresh för 395 kr (i lager) och HACE PCMH45 för 6 777 kr, som är "Slut för säsongen" och inte går att köpa. Åtta modeller är utgångna, bland dem Wood's Vienna HSW100 som är en av de tre i butikens egen "bäst i test" från 2026-01-22. Ingen proffs- eller byggbefuktare finns, och inget annat märke (Boneco, Stadler, Venta, Condair) finns i sitemapen.

En kategorisida med en köpbar produkt för 395 kr är en produktlista med en knapp, och valet kan inte göras på meriter när det inte finns något att välja mellan. Den klarar inte recensionsriktlinjerna (skillen punkt 4) och ligger under ordervärdesgränsen.

- **`/fukt/lag-luftfuktighet/` byggs som kunskapssida** enligt SEO:s reservplan. Inga produktkort, ingen köpknapp, inga annonslänkar, inget reklamband. Sidan får nämna typerna (ultraljud, förångning, ånga) och vad de kräver i skötsel, med källa, men inga modeller.
- "luftfuktare bäst i test" lämnas.
- **Omprövas** i augusti 2027 inför nästa säsong, eller tidigare om Proffsmagasinet får minst fem köpbara modeller från 1 500 kr med tillverkarens datablad. Underlagsarbetaren kontrollerar sortimentet igen då; det är min uppgift att beställa.
- Till hantverkaren, som fakta och inte text: HACE PCMH45 är en förångare enligt bruksanvisningen, fast butiken kallar den "ultrasonisk". Butikens uppgift används inte (raden är införd i `docs/AFFILIATE.md` avsnitt 3). Butikens egen artikel anger 40 till 60 procent utan källa; talen på `/fukt/lag-luftfuktighet/` kommer ur det gemensamma faktabladet `fukt-gemensamma-tal.md`.

## 2. Hygrometern: inga annonslänkar

SEO:s förslag var inget kort men textlänkar. Mitt beslut: **inga annonslänkar alls**, inte heller i text. En annonslänk i brödtext är en affiliatelänk som kräver reklambandet, och på en kunskapssida är det bara undantaget "en produkt per typ, sist" som tillåter reklam.

Skälet är produkten, inte formen. Den som söker "hygrometer" (4 400) vill ha en rumsmätare för 100 till 1 000 kr. Proffsmagasinet har 17 luftfuktighetsmätare från 1 500 kr (Testo 605i 1 590 kr, Bosch GDH 1-17 2 641 kr, loggrar från 1 884 kr), men att peka en husägare som vill veta om sovrummet är torrt mot ett instrument för 2 600 kr vore val på provision.

Sidan länkar internt till `/fuktmatare/` där läsaren behöver mäta i trä eller material, och till `/fukt/fukt-i-krypgrund/` och `/fukt/fukt-pa-vinden/` för loggning i utrymmen man inte går in i. En loggande hygrometer för krypgrunden prövas på `/fuktmatare/` eller på krypgrundsguiden, inte här.

## 3. Radonmätare: inget kort nu

Proffsmagasinet säljer fyra: Airthings Home 1 911 kr (i lager), Airthings Wave 2 181 kr, och två Sarad-instrument för cirka 40 000 kr. Inga spårfilmsdosor.

SSM:s metodbeskrivning för bostäder, som gäller från 1 oktober 2026, kräver för ett årsmedelvärde minst 60 dygns mätning under eldningssäsongen med spårfilm eller ett kalibrerat tidsupplöst instrument med högst 20 procent mätosäkerhet vid 200 Bq/m³, och rekommenderar kalibrering varje år. Att Airthings klarar det är inte belagt. Sidans ärliga svar på "hur mäter jag radon" är spårfilm från ett ackrediterat laboratorium, som Proffsmagasinet inte säljer. Ett kort för en digital mätare på den sidan vore att sälja det sidan inte rekommenderar.

- **`/fukt/radon/` (omgång B): inga produktkort, inget reklamband.**
- **Omprövas före `/fukt/radonsug/` (omgång E)**: en kontinuerlig mätare kan ha en roll för att se att sugen verkar. Före dess läser underlagsarbetaren Airthings datablad (mätosäkerhet, kalibrering) och vad SSM säger om kontrollmätning efter åtgärd. Beställs av mig i januari.

## 4. `/fuktmatare/`: ja, granskning

Kategorin bär. 54 artiklar i underkategorin, **43 riktiga fuktmätare för trä och bygg från 1 500 kr**, 13 av dem i lager, märken som Protimeter, Gann, Testo, Flir, Bosch, Laserliner och Elma. Prisläget är 1 609 till 24 650 kr, alltså ett proffssortiment och inte konsumentsortimentet på 150 till 2 500 kr som körning 2 räknade med. Under 1 500 kr finns bara tre: Bosch UniversalHumid, Stanley 0-77-030 och Ryobi RBPINMM1.

Inget oberoende test av fuktmätare har publicerats i Sverige eller Norden de senaste tre åren. Det senaste är SP Träs rapport PX21326 från 2012, där bara Testo 606-2 och Gann BL Compact B finns i dagens sortiment. Det är luckan.

**Rotnamnrymden:** `fuktmatare` godkänd.

**Etiketten är Granskning** tills en mätning är gjord. Mallens rad "Granskas. Vi har inte haft maskinen." står kvar. Title och description får inte säga test, mätt eller bäst i test.

### Tabellen, åtta modeller

Samma princip som krysslasern: varje rad i tabellen får en köpknapp, så varje rad ska ha tillverkarens datablad och vara värd knappen på meriter.

| Förslag till slug | Modell | Pris 30/9 | Lager 30/9 | Typ | Varför den står här |
|---|---|---|---|---|---|
| `bosch-universalhumid` | Bosch UniversalHumid | 504 kr | i lager | stift | Det ärliga svaret för ved och virke före målning: två trägrupper, Boschs ±1 % för ledningsförmåga. Under gränsen, men att sätta en mätare för 1 700 kr först för den som ska mäta ved vore val på provision |
| `testo-606-1` | Testo 606-1 | 1 609 kr | i lager | stift | Billigaste med tillverkarens kurvor för gran och tall och för puts, betong och gips. Testos produktblad är från 2007 |
| `elma-dt125` | Elma DT125 | 1 680 kr | i lager | stift | Billigaste som mäter trä (±1 inom 0–30 %), fyra byggmaterialgrupper och luftens RF i samma instrument |
| `bosch-gmp-2-15` | Bosch GMP 2-15 | 2 147 kr | i lager | stift | 37 träslag, 10 byggmaterial, RF, IP65. Mätområdet för trä saknas i Boschs bruksanvisning |
| `flir-mr55` | Flir MR55 | 2 990 kr | beställning, skickas 5/10 | stift | Billigaste med temperaturkompensering enligt tillverkaren, nio trägrupper, ±2 % inom 7–29 %, tre års garanti |
| `bosch-gmm-1-15` | Bosch GMM 1-15 | 3 217 kr | beställning, 8–12 dagar | stiftlös | Enda stiftlösa i sortimentet med träslagsval (37) och ett värde i fuktkvot, inte en relativ skala. Mätdjup 0–30 mm |
| `laserliner-dampmaster-compact-plus` | Laserliner DampMaster Compact Plus (082.321A) | 5 236 kr | i lager | stift | Automatisk och manuell temperaturkompensering, ±1 % inom 5–30 %, åtta byggmaterial, app. Tydligast datablad i tabellen |
| `protimeter-surveymaster` | Protimeter BLD5375 SurveyMaster | 9 695 kr | i lager | stift och stiftlös | Proffsklassen: besiktningsinstrumentet med båda metoderna, träslagstabell, två års garanti, Protimeters datablad 07/2024 |

### Våra val, högst tre

| Slug | Uppgift för etiketten | forVem, sakinnehåll |
|---|---|---|
| `bosch-universalhumid` | ved och virke | vedförrådet före eldning och virke före målning, där ±1 till 2 procentenheter räcker |
| `elma-dt125` | trä, puts och luften i ett instrument | husägaren som vill mäta syll, reglar och puts och samtidigt se luftfuktigheten, inomhus och i källaren |
| `flir-mr55` | kalla utrymmen | krypgrund och kallvind på vintern, där träets temperatur ligger långt under rumstemperatur och mätaren behöver kompensera |

Hantverkaren skriver etiketterna och `forVem` i Christians röst. Villkor: konkreta, aldrig "premium", "budget", "bäst för pengarna", "testvinnare" eller "bäst i test". Ordningen är den ovan, billigast först.

Varför de tre: var och en är den billigaste som löser sin uppgift fullt ut. MR55 får platsen för kalla utrymmen **bara om** underlagsarbetaren belägger med källa att resistansmätning i trä beror på träets temperatur och ungefär hur mycket (Träguiden, RISE eller standarden SS-EN 13183-2). Utan den källan faller motiveringen, och valet blir `bosch-gmp-2-15` med uppgiften "37 träslag".

### Utelämnade, med skäl

- **Extech MO55** (1 662 kr, i lager): ±(3 % + 5 siffror), ingen träslagsinställning. DT125 är bättre på allt utom stiftlöst läge, för 18 kr mer. Extech MO260 fick "stora avvikelser" hos SP 2012; det är en annan modell och används inte som skäl.
- **Bosch GMP 1-13** (1 926 kr, beställning): GMP 2-15 utan RF. DT125 har RF för 246 kr mindre.
- **Testo 606-2** (3 026 kr): 606-1 med RF. RF finns billigare i DT125 och GMP 2-15. Om hantverkaren nämner SP-rapporten gäller den 606-2, inte 606-1, och får inte skrivas om som ett omdöme om 606-1.
- **Protimeter Mini** (3 469 kr): enda källan är Proffsmagasinets egen bruksanvisning, inte Protimeters. Kan tas in när tillverkarens datablad är läst.
- **Elma Moisture Max** (3 508 kr), **Elma DT-128M** (2 064 kr), **Flir MR59** (3 732 kr), **Protimeter Aquant** (6 608 kr), **Gann UNI 1** (9 074 kr): stiftlösa med relativ skala, eller bara sammanfattning som källa. Söker fukt bakom ytan men ger ingen fuktkvot.
- **Testo 616** (4 812 kr): stiftlös med materialinställning, men produktbladet är från 2009 och noggrannhet saknas. GMM 1-15 är billigare.
- **Gann Hydromette-serien, Laserliner MoistureMaster, Limit 6200, REMS, Flir MR77 och MR160, Tramex, Protimeter MMS3**: datablad inte lästa, flera inte beställningsbara eller över 10 000 kr utan en uppgift på sidan som motiverar dem.
- **RF-mätning i betong** (Protimeter HygroMaster II med Hygrostick 7 515 kr, Testo 605 RBK 11 013 kr): hör till `/fukt/fuktmatning-betong/` i omgång E, inte till tabellen, eftersom specen är en annan. Beslut om kort där tas före omgång E; svaret för en husägare är ofta en fuktkonsult, och då ska sidan säga det.
- **Dataloggrar och luftmätare** i samma underkategori (Celsicom, Hioki, Fluke 971): inte fuktmätare för material.

### Nya spec-nycklar för kategorin `fuktmatare`

| Nyckel | Etikett | Enhet | Typ | `bast` |
|---|---|---|---|---|
| `typ` | Typ | | text: stift, stiftlös, stift och stiftlös | – |
| `matomrade_tra` | Mätområde trä | % fuktkvot | text, t.ex. "7–29 (±2)"; relativ skala skrivs "relativ" | – |
| `noggrannhet_tra` | Noggrannhet trä | | text med intervallet den gäller i | **nej**, tillverkarna anger den på olika sätt (Boschs "±1 %" säger inte om det är procentenheter) |
| `traslag` | Träslag | | text: antal träslag eller trägrupper | – |
| `byggmaterial` | Byggmaterial | | text: antal material eller grupper | – |
| `rf_luft` | Luftens RF | | ja eller nej | – |
| `temperaturkompensering` | Temperaturkompensering | | ja, manuell, nej, eller tomt om tillverkaren inte anger | – |
| `matdjup_mm` | Mätdjup | mm | tal, bara stiftlös | – |
| `stift_mm` | Stiftlängd | mm | tal | – |
| `hammarelektrod` | Hammarelektrod | | ja, tillval, nej | – |
| `kontroll` | Kontroll av mätaren | | text: kontrollbricka, självtest, kalibreringsprotokoll | – |
| `app` | App | | ja eller nej | – |
| `batteri` | Batteri | | text | – |
| `ip_klass` | IP-klass | | text | – |
| `garanti_ar` | Garanti | år | tal | – |

Ingen nyckel får `bast`: mätområden och noggrannhet är inte jämförbara rakt av mellan tillverkarna. Tomma rutor står tomma, som på krysslasern.

### Öppet innan fröskript och text

Beställs av mig hos underlagsarbetaren före omgång C:

1. Bosch GMP 2-15 och GMM 1-15: mätområde för trä och vad "±1 %" och "±4 %" avser, ur Boschs svenska bruksanvisningar.
2. Bosch UniversalHumid: EAN och läst bruksanvisning (finns delvis).
3. Källa för temperaturens inverkan på resistansmätning (se valet av MR55).
4. Flir MR55: RF-noggrannheten, som inte gick att läsa entydigt.
5. IP-klass och garanti för modellerna där de saknas; tomt om tillverkaren inte anger dem.
6. Priser och lager läses om samma dag som sidan publiceras. Fyra av åtta är beställningsvaror eller buffertlager.

## 5. Badrumsfläkten: köpguide med kort

Proffsmagasinet har 12 aktiva badrumsfläktar, 1 076 till 2 013 kr, 9 från 1 500 kr, 11 i lager. De tre som SEO nämner finns alla: Fresh Intellivent Sky 1 887 kr, PAX Calima 1 801 kr, PAX Levante 40 1 499 kr. Butikens egen "bäst i test" (2026-01-12) har samma tre och bygger på Trustpilot.

**Beslut:** `/fukt/badrumsflakt/` är köpguide med kort. Kortet står efter avsnittet som räknar ut vilket flöde badrummet behöver i l/s med källa (det ingen konkurrent har), och en fläkt får kort bara om tillverkaren visar att den ger det flödet mot det tryck en kanal ger. Fresh anger 140 m³/h vid 57 Pa; PAX anger bara friblåsande flöde och maxtryck 25 Pa. Om PAX saknar tryckkurva får texten säga att flödet är angivet utan kanal, och PAX-kortet står ändå bara om det friblåsande flödet klarar kravet med marginal. Levante 40 på 1 499 kr står med; är två fläktar lika bra står den billigare först.

Sidan säger att fast anslutning görs av behörig elinstallatör, med lagrum som hantverkaren hämtar. Inga kort för fläktar som bara säljs för fast installation utan att sidan säger det i samma avsnitt.

Beställs av mig före omgång D: tryck- och flödeskurvor för de tre och för övriga sex från 1 500 kr, EAN, och kravet på frånluftsflöde i badrum med källa (BBR eller Boverkets handbok, tillsammans med SEO som äger frasen). Ny kategori i databasen: `badrumsflakt`, utan kategorisida. Spec-nycklar: `flode_ls_fri`, `flode_ls_tryck` (text med tryck), `max_tryck_pa`, `ljud_dba_3m`, `effekt_w`, `fuktstyrning`, `kanal_mm`, `ip_klass`, `garanti_ar`.

## 6. Köpguiderna för vinden och tvättstugan

- **Avfuktare vind** (omgång B): bara sorption. Produkter ur kategorin `luftavfuktare`, men bara modeller som tillverkaren anger för drift under 5 °C, har hygrostat och våtluftsslang. Beställs av mig i oktober: vilka av sorptionsmaskinerna i databasen (Wood's SW-serien, Acetec Evodry 6H-2, Eeese) och i Proffsmagasinets 39 som uppfyller det, med lägsta arbetstemperatur, effekt, upphängning och slanglängd ur datablad, och om Trygghetsvakten (140 i månaden på "trygghetsvakten vind") säljs av Proffsmagasinet. Är svaret färre än två modeller blir sidan problemguide med kort på den enda, inte köpguide.
- **Avfuktare tvättstuga** (omgång D): kondens och sorption efter rummets temperatur, med Energimyndighetens test 2017 som grund för jämförelsen mot torktumlare. Beställs i december.

## Villkor som gäller hela klustret

1. Kunskapssidorna om mögel, radon, fuktskada och vattenskada, och `/fukt/lag-luftfuktighet/`, har inga produktkort och inget reklamband.
2. **`/luftavfuktare/` i omgång A**: när metadata byts ska etiketterna i `val` bytas. "Bäst totalt" och "Bäst för pengarna" i `src/content/kategorier/luftavfuktare.md` bryter mot skillen avsnitt 2 (konkreta etiketter, aldrig budget). Hantverkaren skriver nya, konkreta etiketter; jag granskar.
3. Fuktslukaren (`/fukt/fuktslukare/`, omgång A) är en förbrukningsvara under 1 500 kr och får inget kort. Sidan länkar till köpguiderna för avfuktare.
4. Inga nya skript, inga externa resurser, inga produktbilder förrän feedens villkor är lästa.

## Pengafrågan till Christian

**Ska vi köpa fem fuktmätare och en våg för ett eget test, cirka 10 550 kr?**

- Mätarna: Bosch UniversalHumid 504, Testo 606-1 1 609, Elma DT125 1 680, Flir MR55 2 990, Bosch GMM 1-15 3 217. Summa **10 000 kr**, alla från tabellen ovan.
- Ugnstermometer 199,90 kr och en våg på 0,01 g. Clas Ohlsons för 349 kr är slut och anger bara upplösning; en våg med känd noggrannhet är inte prissatt än. Standarden (SS-EN 13183-1) kräver torkning i 103 ± 2 °C med fri luftcirkulation. Med vanlig hemugn avviker testet från standarden och sidan måste säga det; ett labbtorkskåp är inte prissatt.
- Köps direkt, inte via våra egna annonslänkar.

**Vad testet ger mot en granskning:**

| | Granskning | Test |
|---|---|---|
| Etikett | Granskning | Test, första oberoende mätningen av fuktmätare i Sverige sedan SP 2012 |
| Underlag | tillverkarens tal, som inte går att jämföra (olika sätt att ange noggrannhet) | samma bräda med alla fem mot torrvikt; avvikelsen i procentenheter per mätare |
| Fraserna | fuktmätare 6 600 och trä 880, realistiskt plats 4 till 8 | därtill "fuktmätare bäst i test" 210 och "fuktmätare test" 90, där topp 10 är affiliatesidor utan mätning |
| Resten av klustret | inga egna tal | mätarna används igen för egna mätningar på krypgrunds-, vinds- och fuktslukarsidorna |
| Kostnad | 0 kr | cirka 10 550 kr plus eventuellt torkskåp, och några kvällar |

Tidsramen: `/fuktmatare/` går ut i omgång C, 20 december. För att testet ska hinna med behöver beskedet komma **senast 15 oktober** (leveranstid upp till 12 dagar och brädorna ska hinna konditioneras). Kommer beskedet senare går sidan ut som granskning och byggs om till test när mätningen är gjord.

## Vad som kräver Christian

1. Pengafrågan ovan, besked senast 15 oktober.
2. Inget annat. Övriga beslut är fattade här.
