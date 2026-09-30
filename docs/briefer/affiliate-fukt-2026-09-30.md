# Affiliate, fuktklustret, 2026-09-30

Affiliateagentens besked på de sex frågorna i `docs/INNEHALLSARKITEKTUR.md` avsnitt 9 ("Vad affiliateagenten behöver veta") och på rotnamnrymden. Underlag: `docs/briefer/underlag-fukt-sortiment-2026-09-30.md` (underlagsarbetaren samma dag, alla priser, lager och adresser lästa 2026-09-30), `docs/SOKORDSANALYS.md` avsnitt 7.5 och 12, skillen `affiliate`, `docs/AFFILIATE.md` avsnitt 1 till 5. Varv 2 samma dag (underlagets avsnitt "Varv 2, fuktmätarna till fröet") gav källan för temperaturen och tillverkarnas uppgifter om kompensering. Fröskript: `supabase/seed-produkter-fuktmatare-2026-10.sql`, inte körd. Inga innehållsfiler ändrade.

## Sammanfattning

| # | Fråga | Besked | Klart för |
|---|---|---|---|
| 1 | `/luftfuktare/` | **Nej.** Ingen kategorisida. `/fukt/lag-luftfuktighet/` byggs som kunskapssida utan produkter och utan reklamband | SEO, omgång B |
| 2 | Hygrometern | Kunskapssida **utan** produktkort, köpknappar och annonslänkar. Inget reklamband | hantverkaren, omgång A |
| 3 | Radonmätare | Inget kort på `/fukt/radon/`. Omprövas före `/fukt/radonsug/` i omgång E | hantverkaren, omgång B |
| 4 | `/fuktmatare/` | **Ja, kategorisida, granskning på datablad**, som krysslasern. Inga egna instrument köps | UX och bygge, SEO, omgång C |
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

Inget oberoende test av fuktmätare har publicerats i Sverige eller Norden de senaste tre åren. Det senaste är SP Träs rapport PX21326 från 2012, där bara Testo 606-2 och Gann BL Compact B finns i dagens sortiment. Luckan fylls inte med egen mätning; sidans försprång är tabellen med tillverkarnas förbehåll utskrivna, och temperaturen, som ingen konkurrent förklarar.

**Rotnamnrymden:** `fuktmatare` godkänd.

**Etiketten är Granskning.** Christian har beslutat 2026-09-30 att vi inte köper produkter själva, i någon kategori, så sidan byggs för att vara granskning på datablad och inte för att bli test. Mallens rad "Granskas. Vi har inte haft maskinen." står kvar. Title och description får inte säga test, mätt eller bäst i test.

### Tabellen, åtta modeller

Samma princip som krysslasern: varje rad i tabellen får en köpknapp, så varje rad ska ha tillverkarens datablad och vara värd knappen på meriter.

| Förslag till slug | Modell | Pris 30/9 | Lager 30/9 | Typ | Varför den står här |
|---|---|---|---|---|---|
| `bosch-universalhumid` | Bosch UniversalHumid | 504 kr | i lager | stift | Det ärliga svaret för ved och virke före målning: två trägrupper, Boschs ±1 % för ledningsförmåga. Under gränsen, men att sätta en mätare för 1 700 kr först för den som ska mäta ved vore val på provision |
| `testo-606-1` | Testo 606-1 | 1 609 kr | i lager | stift | Billigaste med tillverkarens kurvor för gran och tall och för puts, betong och gips. Testos produktblad är från 2007 |
| `elma-dt125` | Elma DT125 | 1 680 kr | i lager | stift | Billigaste som mäter trä (±1 inom 0–30 %), fyra byggmaterialgrupper och luftens RF i samma instrument |
| `bosch-gmp-2-15` | Bosch GMP 2-15 | 2 147 kr | i lager | stift | 37 träslag med eget mätområde vart och ett (gran 8,0–97,3 %), 10 byggmaterial, RF, IP65. Ingen temperaturkompensering; Bosch säger att mätobjektet ska ha omgivningens temperatur |
| `flir-mr55` | Flir MR55 | 2 990 kr | beställning, skickas 5/10 | stift | Nio trägrupper, ±2 procentenheter inom 7–29 %, automatisk temperaturkompensering, app, tre års garanti. Dyrare än DT125 för kalla utrymmen, eftersom temperaturen inte kan ställas in för hand |
| `bosch-gmm-1-15` | Bosch GMM 1-15 | 3 217 kr | beställning, 8–12 dagar | stiftlös | Enda stiftlösa i sortimentet som ger fuktkvot (4–32 %) och inte en relativ skala. Mätdjup 0–30 mm. 37 träslag står bara på Boschs produktsida |
| `laserliner-dampmaster-compact-plus` | Laserliner DampMaster Compact Plus (082.321A) | 5 236 kr | i lager | stift | Automatisk och manuell temperaturkompensering, ±1 % inom 5–30 %, åtta byggmaterial, app. Tydligast datablad i tabellen |
| `protimeter-surveymaster` | Protimeter BLD5375 SurveyMaster | 9 695 kr | i lager | stift och stiftlös | Proffsklassen: besiktningsinstrumentet med båda metoderna, träslagstabell, två års garanti, Protimeters datablad 07/2024 |

### Våra val, högst tre

| Slug | Uppgift för etiketten | forVem, sakinnehåll |
|---|---|---|
| `bosch-universalhumid` | ved och virke | vedförrådet före eldning och virke före målning, där ±1 till 2 procentenheter räcker |
| `elma-dt125` | kalla utrymmen | krypgrund, kallvind och källare, där träet är kallare än 20 grader; temperaturen kompenseras automatiskt och kan ställas in för hand, och samma instrument mäter puts och luftens RF |
| `bosch-gmm-1-15` | utan hål i ytan | golv, lister och snickerier där stifthål inte får synas, och en första sökning efter var fukten sitter |

Hantverkaren skriver etiketterna och `forVem` i Christians röst. Villkor: konkreta, aldrig "premium", "budget", "bäst för pengarna", "testvinnare" eller "bäst i test". Ordningen är den ovan, billigast först.

Varför de tre: var och en är den billigaste som löser sin uppgift fullt ut.

**Temperaturen, och varför MR55 inte blev ett val.** Källan finns (varv 2, A): SP Träs rapport PX21326 (2012) säger att den resistiva mätarens värde "ändras 0,1-0,15%-enheter per grad °C från 20°C", med tumregeln 1,6 per 10 °C; USDA Wood Handbook (2021) anger ungefär 0,9 per 10 °C; SS-EN 13183-2 kräver att mätaren kan korrigera för träslag och temperatur; Träguiden säger att värdena "måste korrigeras för rådande temperatur och träslag". Källorna säger olika om storleken, och texten ska ge intervallet, inte ett medelvärde. Uppgiften "kalla utrymmen" står alltså kvar. Men varv 2 visade också att Elma DT125 kompenserar både automatiskt och med temperaturen inställd för hand, för 1 680 kr, medan MR55 bara kompenserar automatiskt med luftens temperatur, för 2 990 kr. Den billigaste som löser uppgiften fullt ut är DT125, och handinställningen är det som låter läsaren ange träets temperatur i stället för luftens. MR55 står kvar i tabellen på sina egna meriter. Den tredje platsen går till GMM 1-15, som enda stiftlösa med ett värde i fuktkvot. Det här ändrar koordinatorns villkor (MR55 om källan finns, annars GMP 2-15): källan finns, men valet görs på meriter bland modellerna som klarar uppgiften.

Till hantverkaren, som fakta: alla tre som kompenserar (Elma, Flir, Laserliner) mäter omgivningens temperatur, medan standarden och källorna talar om träets. Bosch kompenserar inte och säger att mätobjektet ska ha omgivningens temperatur. Mätriktningen (längs eller tvärs fibrerna) säger källorna olika om; följ tillverkarens anvisning per modell.

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

### Fröet

`supabase/seed-produkter-fuktmatare-2026-10.sql`, efter mönstret i `seed-produkter-2026-09-30.sql`: kategorin `fuktmatare`, de åtta produkterna med de 15 nycklarna där tillverkaren anger ett värde (plus `kalla` och `anmarkning`), erbjudanden och prishistorik 2026-09-30. Alla åtta adresser svarade 200 utan omdirigering, kontrollerat av underlaget och av mig samma dag. Flir MR55 och Bosch GMM 1-15 är beställningsvaror och lagras som `restnoterad`. Inte körd.

Garanti för Bosch: tillverkargarantin ger 2 år privat och 12 månader vid yrkesmässig användning. `garanti_ar` är 2 för UniversalHumid (DIY) och 1 för GMP 2-15 och GMM 1-15 (Professional); villkoret står i `anmarkning`.

### Öppet innan text

1. Boschs "±1 %" och "±4 %" och Testos "±1 %": tillverkarna säger inte om det är procentenheter. Står som text med förbehållet; hantverkaren skriver inte om det som procentenheter.
2. Tomma rutor efter varv 2: Testo 606-1 garanti, stiftlängd, hammarelektrod, kompensering; Elma DT125 IP-klass; Bosch stiftlängd och app; Flir MR55 hammarelektrod; Laserliner stiftlängd, hammarelektrod, IP och garanti; Protimeter IP, noggrannhet och kompensering. De står tomma.
3. GMM 1-15: 37 träslag bara ur Boschs produktsida (sammanfattning); bruksanvisningen anger ett område för alla trämaterial.
4. Priser och lager läses om samma dag som sidan publiceras.

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

## Vad som kräver Christian

Inget. Christian har beslutat 2026-09-30 att vi inte köper produkter själva, i någon kategori, och frågan om egna tester ställs inte igen. Alla sidor med produkter i klustret är granskningar på datablad och skriver aldrig "test", "mätt" eller "jag testade".
