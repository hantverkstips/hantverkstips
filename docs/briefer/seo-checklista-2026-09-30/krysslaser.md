# SEO-checklista, /krysslaser/ som granskning, 2026-09-30

Kategorisidan för krysslaser skrivs om från platshållare till en granskning på tillverkarnas datablad. Ingen mätutrustning finns på minst ett år, så sidan får aldrig säga mätt, testad eller test om något vi gjort (samma regel som `/luftavfuktare/`, `/tester/woods-sw39fw/` och `/tester/acetec-evodry-6h-2/`). Affiliate väljer produkterna före allt annat, `underlag` läser punkt 10 till 12 innan faktabladet skrivs, hantverkaren läser checklistan före skrivningen, och SEO och GEO-agenten läser den färdiga sidan mot samma lista.

Så här läses checklistan:

- **Underlag:** SERP-läsning av underlagsarbetaren 2026-09-30 för "krysslaser" och "krysslaser bäst i test", volymerna i `docs/data/keyword-stats-2026-09-16.csv` och `keyword-stats-2026-09-20.csv`.
- **Ordningen i topp 5 är osäker**, eftersom sökverktyget svarar från USA. Kontrollera i google.se innan faktabladet skrivs.
- **Title** räknas utan suffixet " · Hantverkstips".
- **Punkt 11** innehåller **Bättre än ettan** (krav, sidan publiceras inte om en punkt saknas) och **Krav på faktabladet**.

## Beslut som gäller före checklistan

1. **Huvudfrasen byts.** Registret (`INNEHALLSARKITEKTUR.md` avsnitt 2) sa "krysslaser bäst i test", 550. Sidan äger hela avsikten, **4 150** i månaden, och huvudfrasen är det nakna ordet **krysslaser (3 600, +24 %, topp november)**. Skälet står i SOKORDSANALYS 7.2: krysslaser är det enda stora produktordet där redaktionellt innehåll rankar högt (i dag Proffsmagasinets kundtest etta, gds tvåa, en guide fyra), och en riktig modelljämförelse kan ta topp tre. "krysslaser bäst i test" 480 och "krysslaser test" 70 blir sidofraser. 4 150 är summan av de tre, inte en volym för en fras.
2. **Kategorisidan går ensam.** Inga `/tester/[modell]/` nu, varken en eller två. En granskning av en laser på datablad har ingenting som inte redan står i kategorins tabell: avfuktarnas granskningar bar en egen räkning (kapacitet vid 15 grader, elkostnad per månad) som en laser saknar motsvarighet till. En sådan sida blir tunn, och "[modell] test" är under 70 i månaden för hela kategorin. Testsidor skrivs när lasrarna mätts, och då som Test.
3. **Pelaren byts från `[verktyg]` till `[inomhus, kok]`.** Hubben `/verktyg/` är utkast och kategorin vore den enda sidan i den, alltså en ensam sida. Inomhus (innerväggar, skåp, undertak) och Kök (kakla kök) är publicerade hubbar där lasern används, och kategorin listas då under Välj rätt i båda (`PelarHub.astro` filtrerar kategorier på `pelare`). `verktyg` läggs tillbaka när den hubben har fem sidor.
4. **Produkterna före texten.** Kategorin har inga produkter i databasen (`supabase/seed.sql` rad 20). Affiliate väljer modellerna ur Proffsmagasinets sortiment innan hantverkaren skriver; utan produkter blir sidan en guide utan tabell och publiceras inte.

---

## /krysslaser/

### 1. Adress och sidtyp

`/krysslaser/` · `src/content/kategorier/krysslaser.md` · samling **kategorier**, Granskning i sak (texten och metoddelen säger det, som på `/luftavfuktare/`). Mallen `src/components/vyer/Kategorisida.astro` bygger jämförelsetabell, Våra val, en rubrik per produkt och ItemList ur databasen, och sätter reklambandet.

Läsaren ska sätta kakel, skåp, en innervägg eller ett undertak rakt och undrar vilken laser som räcker, om grön är värd pengarna och vad skillnaden mellan 1 000 och 7 000 kr är.

### 2. Huvudfras och sidofraser

**Huvudfras: krysslaser, 3 600 per månad**, +24 procent på ett år, topp i november (880). Vinnbarhet 4.

Sidofraser, med plats:

- **krysslaser bäst i test** (480, +23 %) i description eller ingress och i en mening under Så väljer du, i klartext: det här är en jämförelse på datablad, inte ett test. Aldrig i title eller H1 som påstående.
- **krysslaser test** (70) i metoddelen, med samma ärlighet.
- **grön eller röd krysslaser** (ej mätt) i en H2.
- **krysslaser eller rotationslaser** (ej mätt; Proffsmagasinets guide med den frågan rankar fyra på huvudfrasen) i ett stycke under Så väljer du.
- **krysslaser med mottagare** (ej mätt) i brödtexten under grön eller röd.

### 3. Title

Nuvarande `title` "Bästa krysslasern, linjeavvikelse mätt på 10 meter", 50 tecken, ingen `seoTitle`. **Falsk** (ingenting är mätt) och ska bort ur både title och H1.

Krav: `seoTitle` sätts, **högst 44 tecken**, börjar med **Bästa krysslasern** eller **Krysslaser**, säger datablad eller granskning, innehåller aldrig mätt, testad, test eller bäst i test. Förslag: "Bästa krysslasern, jämförd på datablad" (38). Delar inte de tre första orden med `/luftavfuktare/` ("Bästa luftavfuktaren, jämförd …").

### 4. Description

Nuvarande 129 tecken, "Vi mäter linjeavvikelse på 10 m och synlighet i lux …". **Falsk** och byts helt.

Krav: 120 till 155 tecken, ordet krysslaser, datablad, minst två av noggrannhet på 10 meter, grön eller röd, räckvidd med mottagare, och att inga egna mätningar är gjorda. Inget utropstecken. Förslag att mäta mot, inte att skriva av: "Krysslasrar jämförda på datablad: noggrannhet på 10 meter, grön eller röd linje, räckvidd med mottagare. Tre jag pekar på, inga egna mätningar." (143).

### 5. H1

`title` är sidans löfte. Krav: krysslaser eller krysslasrar tidigt, säger att jämförelsen bygger på tillverkarnas siffror, inga ord om mätning. Delar inte de tre första orden med `seoTitle`. Mönstret från `/luftavfuktare/` ("Luftavfuktare jämförda på tillverkarnas egna siffror, och de tre jag pekar på") fungerar, men hantverkaren formulerar.

`ingress` ersätter platshållaren: vad tabellen jämför, att det är datablad, att en tom ruta betyder att tillverkaren inte anger talet.

### 6. H2-struktur

Mallen sätter Jämförelse och en rubrik per produkt före brödtexten; H2:orna nedan är brödtexten i filen.

1. **Så väljer du** (finns). Bär huvudfrasen i naturlig form. Tre frågor i ordning: var lasern ska användas (inne, ute, hur långt), hur noggrann den behöver vara, och om linjen ska gå runt hela rummet. Ett stycke om **krysslaser eller rotationslaser**: när rotationslasern är nästa klass (ute, grund, långa avstånd) och att sidan inte jämför dem.
2. **Grön eller röd linje** (ny). Synlighet i dagsljus, batteritid och pris, med tillverkarens egna uppgifter och källa. **Mottagaren** här: vilka lasrar som har pulsläge och om mottagaren ingår.
3. **Vad noggrannheten betyder på väggen** (ny). Tabell: databladets mm/m omräknat till mm på 4 m och 10 m för varje noggrannhet som finns i jämförelsen, formeln synlig och räkningen märkt som egen. Sidans starkaste GEO-stycke, så det ska gå att läsa utan resten av sidan.
4. **360 grader eller två linjer** (ny, får slås ihop med 1). När 3 × 360 behövs (skåp runt hela köket, undertak), när ett kryss räcker (kakel på en vägg, en tavelrad).
5. **Varifrån talen i tabellen kommer** (ersätter "Så testade vi"). Varje värde från tillverkarens datablad eller Proffsmagasinets produktsida med läsdatum, vad som är egen räkning, att inget är mätt, och vad som mäts när utrustningen finns (linjeavvikelse på 5 och 10 m, synlighet grön mot röd), med länk till `/om/sa-testar-vi/`. Rubriken innehåller inte ordet test.

Inga Faq-rubriker: kategorimallen har ingen Faq-komponent, och FAQPage-markup läggs inte till utan ett synligt avsnitt.

### 7. Längd

Nuvarande cirka 80 ord platshållare. Mål **1 200 till 1 800 ord** i brödtexten, utöver tabellen och produktblocken som mallen bygger. Testra och testkollen har fem modeller med FAQ, gds elva modeller. Vi vinner på tabellens bredd och på omräkningen, inte på längden. `/luftavfuktare/` ligger på 950 ord.

### 8. Bilder

Kategorimallen har inget bildfält. Produktbilderna kommer ur databasen (`bild_url`); affiliate säkerställer att de får användas. En egen skiss är inget krav. Gör UX en skiss av vad ±0,3 mm/m blir på en 4 m vägg står den under H2 3 med alt på högst 125 tecken som säger vad den visar och innehåller krysslaser.

### 9. Interna länkar

**Ut**, minst tre i brödtexten:

- `/kok/kakla-kok/` (lasern håller kakelraden rak), under Så väljer du eller 360-avsnittet.
- `/inomhus/bygga-innervagg/` (lodet mot lasern), under Så väljer du.
- `/om/sa-testar-vi/`, i metoddelen.
- En hubb, `/inomhus/` eller `/kok/`, en gång.

**In**, krav senast en vecka efter publicering:

- `src/content/guider/kok/kakla-kok.mdx` rad 146 ("Med en krysslaser eller ett långt vattenpass") får länken hit, och krysslasern i "Det här behöver du" pekar hit (kok-4.md, noteringen 2026-09-29). Affiliate avgör om raden blir produkt.
- `src/content/guider/inomhus/bygga-innervagg.mdx` rad 107 ("En krysslaser gör det på halva tiden") får länken hit.

Ankaret säger krysslaser eller vad läsaren hittar, aldrig "här". Länkarna in får läggas först när sidan är publicerad (en länk till utkast stoppar bygget).

### 10. Strukturerad data och komponenter

- `kategori()` i `src/lib/strukturdata.ts`: ItemList med Product och Offer per modell, lägsta pris och lagerstatus ur samma funktioner som köpknappen. **Inget Review och ingen aggregateRating**, vilket är rätt för en granskning. Funktionen ändras inte.
- BreadcrumbList sätts av mallen. Ingen FAQPage.
- `specs` i frontmatter styr tabellen. Behålls: `rackvidd_m` (utan mottagare), `noggrannhet_mm_per_10m` (databladets mm/m gånger tio, räkningen i metoddelen), `linjer` (skrivs som 2 linjer eller 3 × 360), `sjalvnivellering_grader`, `laserklass`, `batteri`. **Nya**, krävs av Bättre än ettan 1 och 5: `rackvidd_mottagare_m`, `farg` (grön eller röd), `ip_klass`, `leverans` (med batteri och laddare, eller solo). Nya nycklar kräver att affiliate fyller produkternas `specs` och uppdaterar kommentaren i `supabase/seed.sql`.
- `val`: högst tre, `forVem` konkret (rum, avstånd, inne eller ute). `kopguide` och `kalkylator` lämnas tomma; ingen finns.
- `noindex` sätts inte. `utkast: false` först när produkterna finns och punkt 11 är uppfylld.

### 11. Ettan och Bättre än ettan

**Ettan (SERP 2026-09-30):** Proffsmagasinets "Våra populäraste korslasrar testade av våra kunder", etta på båda fraserna. Fyra modeller från 2 484 till 7 939 kr (Bosch GCL 2-50 G, Dewalt DW088CG och DCE089D1G, Milwaukee M12 3PL-401C), specifikationerna utspridda i text, **ingen tabell**, "testad" betyder Trustpilot-betyg, ingen noggrannhet i mm, ingen FAQ, uppdaterad 2026-02-24. Proffsmagasinet är vår affiliatebutik. Tvåan, gds, har en egen provning men bara lasrar under 1 300 kr. Testra och testkollen har tabeller men "test" utan mätvärden, och noggrannheten bara i mm/m.

Det ettan har som vi måste behålla eller överträffa:

1. Aktuella priser per modell. Vi har pris och datum per erbjudande ur databasen.
2. Proffsklassen (grön, 3 × 360, Li-ion) med namngivna modeller.
3. En namngiven författare och ett datum.

**Bättre än ettan** (krav, varje punkt kontrolleras i den färdiga sidan):

1. **Jämförelsetabell med samma kolumner för varje modell**: noggrannhet, räckvidd utan och med mottagare, färg, linjer, självnivellering, IP-klass, leverans. Ingen i topp 5 har alla; ettan har ingen tabell.
2. **Noggrannheten omräknad till millimeter på väggen**, tabell för 4 och 10 m med formeln, märkt som egen räkning. Alla konkurrenter anger mm/m eller ingenting.
3. **Båda prisnivåerna på samma sida** och var gränsen går för när det dyra lönar sig (grön, 360, mottagare, batteri). Ettan börjar på 2 484 kr, gds slutar på 1 270 kr. Förutsätter att affiliate hittar minst en modell under 1 500 kr hos Proffsmagasinet; annars skrivs gränsen i text med källa och tabellen visar det sortiment som finns.
4. **Ärlig metod**: varje värde med källa och läsdatum, ordet test används aldrig om oss, och det står vad som mäts när utrustningen finns. Ettan kallar kundbetyg för test.
5. **Solo eller kit, och om mottagaren ingår**, i tabellen. Otydligt eller saknas hos alla fem.

**Krav på faktabladet** (`underlag`, efter affiliates produktval):

- Tillverkarens datablad per modell, med adress och läsdatum, för varje kolumn i punkt 10. Tom ruta där tillverkaren inte anger talet; inget räknas fram åt tillverkaren utom mm på 10 m.
- Synlighet grön mot röd: tillverkarens egen uppgift med källa, inga forumpåståenden.
- Rotationslaserns prisnivå och noggrannhet med källa (Proffsmagasinets guide anger ±0,08 mm/m och från 5 000 kr enligt SERP-läsningen; kontrollera på sidan).
- Laserklass 2 och vad den innebär, med Strålsäkerhetsmyndigheten som källa.

### 12. Fällor

- **Mätt, testad, test, testvinnare, bäst i test** om något vi gjort, var som helst på sidan, i `val`-etiketterna och i `forVem`. "Bäst totalt" går, "Testvinnare" går inte.
- **`noggrannhet_mm_per_10m` är en omräkning, inte en mätning.** Metoddelen måste säga det, annars ser tabellen ut som ett mätresultat.
- Platshållarna ("Platshållare", "Skribenten ersätter efter brief från chefredaktören", "Expertundersökning 4 enligt docs/SOKORDSANALYS.md") och YAML-kommentaren om mätningar ska bort ur filen.
- "Linjeavvikelse på 10 m" och "synlighet i lux" får stå som planerad mätning i metoddelen, aldrig som något sidan visar.
- Proffsmagasinets kundtest är ingen källa för kvalitet; deras produktsidor används för pris och datablad.
- `/verktyg/valja-lasermatare/` (planerad) får inte börja med "Bästa", och ingen annan sida tar "krysslaser" först i title.

---

## Kontroll efter skrivningen, 2026-09-30

SEO och GEO-agenten har läst `src/content/kategorier/krysslaser.md` (utkast, cirka 1 600 ord brödtext) mot punkt 1 till 12. **Godkänd av SEO och GEO**, med ett beslut som redan är infört och två villkor för publicering.

1. **seoTitle** "Bästa krysslasern enligt databladen" (35 tecken) är godkänd. Den börjar med huvudfrasen, säger datablad och har inget ord om mätning. De tre första orden skiljer sig från `/luftavfuktare/` ("Bästa luftavfuktaren, jämförd") och från H1 ("Krysslasrar för kök"). Description (147 tecken) och H1: inget att ändra.
2. **Pelare `[inomhus, kok]`** bekräftas.
3. **Sidofraserna räcker.** "bäst i test" står i klartext i första stycket som något sidan inte är. "krysslaser test" (70) behöver inte stå ordagrant, eftersom metoddelen har "test" och "granskning" i samma avsikt. "Grön eller röd krysslaser" bär en H2, och "krysslaser med mottagare" finns i brödtexten. Stryks rotationslaserstycket försvinner sidofrasen "krysslaser eller rotationslaser" och länken till `/inomhus/`. Det stoppar inte publiceringen, eftersom tre länkar ut står kvar (`/kok/kakla-kok/`, `/inomhus/bygga-innervagg/`, `/om/sa-testar-vi/`).
4. **`bast: hogst` på `sjalvnivellering_grader` är struken** (ändrat i frontmatter). Ett större område för självnivellering är ingen fördel för läsaren, och en markering på nio av tio rader säger ingenting.
5. **Bättre än ettan 1 till 5 är uppfyllda.** Tabellen har alla kolumnerna. Omräkningen till 4 och 10 m står med formeln och är märkt som egen räkning. Båda prisnivåerna finns, från cirka 1 250 till knappt 8 000 kr, med en utskriven gräns. Metoden är ärlig, och "I lådan" plus meningen om mottagaren täcker punkt 5. Ingen kannibalisering mot `/luftavfuktare/`.

**Villkor för `utkast: false`:**

- Produkterna i `supabase/seed-produkter-2026-09-30.sql` ska vara inlästa i databasen som bygget läser. Annars blir tabellen och ItemList tomma.
- Inom en vecka efter publicering: länken hit från `kakla-kok.mdx` rad 146 och `bygga-innervagg.mdx` rad 107 (punkt 9).
