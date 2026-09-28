# SEO-checklista, fyra räknare, 2026-09-29

`/rakna/badrum-kostnad/`, `/rakna/kok-kostnad/`, `/rakna/takbyte/` och `/rakna/takavvattning/`. Startlista 3 har fyra räknare, inte tre. Takavvattningen är ett stöd till hängrännesidan och bär ingen trafik själv, men den räknas till takhubbens fem och har därför en checklista här. Hantverkaren läser sitt avsnitt före skrivningen, UX och bygge-agenten läser punkt 1, 9 och 10 före specen, och SEO och GEO-agenten läser den färdiga sidan mot samma avsnitt efteråt (skillarna `ny-sida` och `nytt-verktyg`).

Så här läses checklistan:

- **Underlag:** SERP-läsningen i SOKORDSANALYS 8.2, verktygsbeskeden i 8.5, besluten i 8.9, volymerna i `docs/keyword-stats-2026-09-28.csv`.
- **Ordningen i topp 5 är osäker**, eftersom sökverktyget svarar från USA.
- **Title** (`titel` i rutthuvudet) räknas utan suffixet " · Hantverkstips". 44 tecken är kravet om frasen tillåter det.
- **Punkt 6** anger avsnitten utöver mallens fasta ("Därför blev svaret så", "Gör inte det här", "Så räknar jag", "Läs vidare").
- **Punkt 11** innehåller **Bättre än ettan** (krav) och **Krav på underlaget**. Underlaget för en räknare heter `docs/briefer/underlag-kalkyl-[slug]-[datum].md`, som för de tidigare räknarna.

Fyra saker gäller alla fyra räknare:

1. **Ingen räknare publiceras utan sin värdartikel** (`nytt-verktyg`, Vad som stoppar). Värdartikeln står i punkt 9 och ska vara publicerad eller gå ut i samma omgång.
2. **Resultatet ligger i adressen**, och delningsbilden `public/og/rakna-[slug].png` genereras.
3. **Inga gissade tal.** Kostnadsräknarna är bara så bra som priserna per post. Varje pris ska ha källa och datum i formelmodulen och i "Så räknar jag". Egna antaganden märks ANTAGANDE och står i antagandetabellen. Källkraven ändrades 2026-09-29 efter underlaget till badrumsräknaren. Varje post ska ha minst en namngiven källa som går att läsa, med datum. Två källor är målet, inte kravet. Offertförmedlare (Byggstart, Hantverkskollen, Badrumsexperter med flera) räknas som källor, men de namnges som förmedlare med sitt datum eller "senast ändrad", och ett tal från en firma anges som firmans. Firmor med samma ägare räknas som en källa. En post som saknar källa tas inte med. Den gissas aldrig.
4. **Rotavdraget räknas som i `/rakna/rotavdrag/`**: 30 procent av arbetet, högst 50 000 kr per person och år, 75 000 kr gemensamt med rut, och fälten antal ägare och utnyttjat i år. Konstanterna importeras från `src/lib/kalkyl/rotavdrag.ts` och skrivs inte om, så att decemberrutinen där också uppdaterar de här räknarna.

---

## /rakna/badrum-kostnad/

### 1. Adress och sidtyp

`/rakna/badrum-kostnad/` · `src/pages/rakna/badrum-kostnad.astro` · **kalkylator**. Formelmodulen `src/lib/kalkyl/renovering.ts` delas med `/rakna/kok-kostnad/` (SOKORDSANALYS 8.5). Registret: `pelare: ['badrum']`, `sasong` september till mars. Ingen produkt och inget reklamband.

Läsaren fyller i badrummets golvyta och standard, vad hon gör själv och hur många som äger huset. Hon får kostnaden per post, uppdelad på arbete och material, rotavdraget och vad hon betalar.

### 2. Huvudfras och sidofraser

**Huvudfras: renovera badrum kostnad, 1 300 per månad**, −38 procent på ett år. Toppen är september till oktober (1 600). Vinnbarhet 4. Avsikten med varianterna är 3 620.

Sidofraser, med plats:

- **renovera badrum pris** (1 600) i H1 eller i beskedet.
- **badrumsrenovering kostnad** (720) i brödtexten.
- **renovera badrum billigt** (390) i H2:n om vad du kan göra själv.
- **kakla badrum pris** (210) och **tätskikt badrum pris** (50) som poster i resultatet. De blir inga rubriker.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Renovera badrum, kostnad** eller **Vad kostar det att renovera badrummet**. Titeln leder med frasen, som dräneringsräknarens beslut i 7.3. En framtida artikel om att renovera badrum får inte börja med "Renovera badrum kostnad".

### 4. Description

Krav: **120 till 155 tecken.** Ska lova kostnaden per post, arbete och material för sig, och rotavdraget för två ägare.

### 5. H1

Krav: läsarens fråga. Delar inte de tre första orden med title.

### 6. H2-struktur

Utöver mallens fasta avsnitt:

0. **Kortsvaret** (`Faktaruta variant="kortsvar"`): vad ett badrum på 4 till 5 kvm kostar i två standarder, enkel och mellan, med källa och datum, hur stor del som är arbete, och vad rotavdraget blir.
1. **Vad som gör priset.** Posterna: rivning, tätskikt och kakel, VVS, el, inredning, container. Vilka som är arbete och vilka som är material.
2. **Vad du kan göra själv och vad det sparar.** Rivning och bortforsling, med tabellen från tätskiktssidan som gräns. Målning i badrummet, taket inräknat, är våtzon 2 och kräver ett godkänt system (beslut 7 i SOKORDSANALYS 8.9), så den är ingen egen insats. Montering av inredning som kräver hål i tätskiktet är det inte heller. **Bär renovera badrum billigt.**
3. **Rotavdraget för badrummet.** Två ägare, utnyttjat tak, att material inte ger avdrag.

### 7. Längd

Mål **700 till 1 000 ord** utöver formuläret. Byggstart och Totalbyggarna har 1 500 till 2 500 ord utan räknare. Räknaren är skillnaden, inte texten.

### 8. Bilder

- Räknarens skiss i `src/assets/illustrationer-kallor/rakna/`: ett badrum i planvy med posterna utmärkta. Alt högst 125 tecken med orden renovera badrum och kostnad.

### 9. Interna länkar

**Värdartikel: `/badrum/tatskikt-badrum/`**, `<Verktygskort kalkylator="badrum-kostnad" />` i kostnadsavsnittet (se badrum.md). Tätskiktet är den största posten, och sidan är den som publiceras först i pelaren.

**Ut**, krav:

- `/badrum/tatskikt-badrum/` i avsnitt 2, för gränsen.
- `/rakna/rotavdrag/` i avsnitt 3.
- `/badrum/fogar-badrum/` i avsnitt 2, som det billigaste sättet att fräscha upp. Målat kakel är inget alternativ i badrummet (beslut 5 i SOKORDSANALYS 8.9).

**In**, krav: tätskiktssidan (värdartikeln) och `/rakna/rotavdrag/` i "Läs vidare" eller utfallet.

### 10. Strukturerad data och komponenter

`WebApplication`, `BreadcrumbList` Hantverkstips / Räkna själv / räknaren, `FAQPage` bara med riktig Faq. Formuläret som GET, noll klient-JS.

### 11. Ettan och Bättre än ettan

Topp 5: byggstart.se, mbbyggsyd.se, totalbyggarna.se, sonochfar.se, hantverkarpriser.se. **Ettan: byggstart.se.** Sidan har ett exempel med 133 000 kr till entreprenören och 51 000 kr i egna inköp och ett snitt kring 185 000 kr, men inga källor, ingen författare och **inget om rotavdraget**.

Det ettan har som vi måste ha:

- Ett totalpris för ett vanligt badrum.
- Entreprenör och egna inköp för sig.
- En kostnad per extra kvadratmeter.

**Bättre än ettan** (krav):

1. **Arbete och material per post**, så att rotavdraget går att räkna. Ingen i topp 5 gör det i en räknare.
2. **Rotavdraget rätt för en eller två ägare**, med utnyttjat tak.
3. **Källa och datum på varje pris** i "Så räknar jag".
4. **Vad egen insats sparar**, med gränsen från 8.3.
5. **Delbart resultat** i adressen.

**Krav på underlaget** (`docs/briefer/underlag-kalkyl-badrum-kostnad-[datum].md`):

- **Beslut 2026-09-29, efter faktabladet `docs/briefer/faktablad/kunskap-tatskikt-badrum.md`:**
  - **Poster:** rivning, tätskikt och kakel per kvm, VVS, el och inredning, alla med minst en källa. **Container** får vara med på sin enda källa och märks ANTAGANDE i resultatet. **Byggstädning** tas inte med, eftersom det saknas ett belopp i kronor. Resultatet säger att den tillkommer.
  - **Nivåer:** två, enkel och mellan. Den tredje, dyra nivån saknar källa och tas inte med. Mer utrustade badrum får en mening om att de ligger över räknarens tak.
  - **Golvytan:** linjär skalning är vårt antagande. Den tillåts bara inom det intervall av golvytor som källornas exempel täcker. Utanför intervallet visar räknaren inget belopp, bara beskedet att källorna inte räknar på så små eller stora rum. Intervallet står i formelmodulen.
  - **Källorna:** offertförmedlarna räcker (se regel 3 ovan). Totalbyggarna och Sonochfar är samma firma och räknas som en. Badrumsexperters tal står med "senast ändrad 2024-04-06" och räknas inte upp till dagens prisnivå, eftersom det vore ett eget antagande till.
  - **Hur antagandena syns:** antagandetabellen i "Så räknar jag" har en rad per antagande (skalningen, containern, andelen arbete där den saknar källa, intervallet). Under beloppet i resultatet står en kort rad: att priserna är förmedlares och firmors snitt med hämtningsdatum och att huset kan avvika. Beskedet hålls kort enligt minnet "Kort text i verktyget".
- Andelen arbete per post, med källa, eller märkt som antagande. Totalbyggarnas procentandelar går inte ihop och används inte.
- Konstanterna för rot från `src/lib/kalkyl/rotavdrag.ts`, inte från en ny källa.

### 12. Fällor

- **Rot 50 procent** gällde bara betalningar 12 maj till 31 december 2025.
- **Inga produkter.** Badrumsklustret bär inte affiliate (8.6).
- Räknaren får inte antyda att läsaren lägger tätskiktet själv. Egen insats omfattar bara det som 8.3 säger ja till.
- Offertförmedlarna nämns inte i publik text, bara i antagandetabellen och i `kallor`.


### Beslut efter bygget, 2026-09-29

Specen är `docs/briefer/spec-kalkyl-badrum-kostnad-2026-09-29.md`.

1. **Målningen är ingen egen insats.** Taket i badrummet är våtzon 2 och kräver ett godkänt system. Räknaren gör rätt, och avsnitt 2 i punkt 6 är rättat: egen insats är rivning och bortforsling.
2. **Målningen godkänns som egen post.** Den har källa (Badrumsexperter), och utan den blir totalen för låg mot källans 208 800 kr före rot. Beskrivningen av posten säger att det är ett godkänt våtrumssystem utfört av målare.
3. **Ytan utökas till 4 till 8 kvm, med Byggstarts tillägg i stället för linjär skalning över 5 kvm.** Byggstarts 8 000 till 16 000 kr per extra kvm är en källa, och den väger tyngre än vårt eget antagande om linjär skalning. Mellan 4 och 5 kvm står den linjära nedskalningen kvar och märks ANTAGANDE. Från 5 kvm läggs Byggstarts spann till per kvm, och spannet syns i resultatet. Över 8 kvm visas inget belopp. Gränsen på 8 kvm är vår, eftersom Byggstart inte anger något tak, och den står i antagandetabellen. Underlag behöver inte leta efter fler källor nu.

---

## /rakna/kok-kostnad/

### 1. Adress och sidtyp

`/rakna/kok-kostnad/` · `src/pages/rakna/kok-kostnad.astro` · **kalkylator** med samma formelmodul som badrummet. Registret: `pelare: ['kok']`, `sasong` september till mars. Ingen produkt och inget reklamband.

Läsaren väljer vad som görs: byta luckor på befintlig stomme, byta bänkskiva, nytt kök med eller utan ändrad planlösning. Hon anger köksmetrar och standard, egen insats och antal ägare, och får kostnaden per post med arbete och material för sig och rotavdraget.

### 2. Huvudfras och sidofraser

**Huvudfras: renovera kök kostnad, 720 per månad**, −33 procent på ett år. Vinnbarhet 4. Avsikten med varianterna är 2 140. "renovera kök" (1 000) ingår i avsikten, eftersom topp 5 visar kostnadssidor också där.

Sidofraser, med plats:

- **köksrenovering pris** (210) i H1 eller beskedet.
- **renovera kök billigt** (140) i H2:n om egen insats.
- **renovera kök** (1 000) i brödtexten.
- **byta bänkskiva kök kostnad** (50, +200 procent) och **byta köksluckor pris** som val i formuläret. Frasen **byta köksluckor pris** ägs av `/kok/byta-koksluckor/`.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Renovera kök, kostnad** eller **Vad kostar det att renovera köket**. Delar inte de tre första orden med badrumsräknaren. "Renovera kök" och "Renovera badrum" skiljer sig i andra ordet, så det räcker.

### 4. Description

Krav: **120 till 155 tecken.** Ska lova kostnaden för tre vägar (luckor, bänkskiva, nytt kök), arbete och material för sig, och rotavdraget.

### 5. H1

Krav: läsarens fråga. Delar inte de tre första orden med title.

### 6. H2-struktur

Utöver mallens fasta avsnitt:

0. **Kortsvaret**: vad de tre vägarna kostar i ett kök med 4 till 5 meter skåp, med källa och datum, och vad rotavdraget blir.
1. **Tre vägar och vad de kostar.** Byta luckor, byta bänkskiva, nytt kök. Varför el och VVS blir den stora överraskningen när planlösningen ändras.
2. **Vad du kan göra själv.** Montera stommar och luckor, måla. **El:** fast installation görs av ett registrerat elinstallationsföretag enligt Elsäkerhetsverket. Att det gäller hällen och spisens anslutning är vår slutsats, och det märks så, eftersom Elsäkerhetsverket inte nämner dem. **Vatten:** Säker Vatten är branschregler, inte lag, och förbjuder ingen privatperson att byta blandare. Det som har stöd är att bara ett auktoriserat VVS-företag kan utfärda intyg om Säker Vatteninstallation, och att försäkringsbolagen kräver att reglerna följts (If, se badrum.md). Sidan skriver just det och inget förbud. **Bär renovera kök billigt.**
3. **Rotavdraget för köket.** Två ägare, material ger inget avdrag.

### 7. Längd

Mål **700 till 1 000 ord** utöver formuläret.

### 8. Bilder

- Räknarens skiss: en köksvägg med stommar, luckor och bänkskiva, och posterna utmärkta. Alt högst 125 tecken med orden renovera kök och kostnad.

### 9. Interna länkar

**Värdartikel: `/kok/byta-koksluckor/`**, `<Kalkylator namn="kok-kostnad" />` i kostnadsavsnittet (se kok.md).

**Ut**, krav:

- `/kok/byta-koksluckor/` i avsnitt 1.
- `/kok/mala-koksluckor/` i avsnitt 1 och 2.
- `/rakna/rotavdrag/` i avsnitt 3.

**In**, krav: `/kok/byta-koksluckor/` (värdartikel) och `/kok/mala-koksluckor/` (verktygskort).

### 10. Strukturerad data och komponenter

`WebApplication`, `BreadcrumbList`, `FAQPage` bara med riktig Faq. GET-formulär, noll klient-JS.

### 11. Ettan och Bättre än ettan

Topp 5: offerta.se (2026-09-25), clasfixare.se, ikea.com, byggstart.se, brabyggare.se. **Ettan: offerta.se.** Sidan har rot rätt med Skatteverket som källa och ett spann på 60 000 till 350 000 kr, delvis uppdelat, men ingen tabell och ingen räknare. Clas Fixare har fortfarande 75 000 kr som rot-tak. Husexperter längre ner har en räknare med arbete och material, men utan procent och tak.

Det ettan har som vi måste ha:

- Rotavdraget rätt med källa.
- Ett spann från enkelt till påkostat.
- Vissa poster för sig (snickare).

**Bättre än ettan** (krav):

1. **Tre vägar i samma räknare**: luckor, bänkskiva, nytt kök.
2. **Arbete och material per post** med rotavdraget för en eller två ägare.
3. **El och VVS som egna poster** när planlösningen ändras. Körning 2 pekade ut det som den vanligaste budgetöverraskningen, och ingen prissätter dem.
4. **Källa och datum på varje pris.**
5. **Delbart resultat.**

**Underlaget** är `docs/briefer/faktablad/rakna-kok-kostnad.md` (klart 2026-09-29). Namnet behöver inte bytas, och den här checklistan pekar dit.

**Beslut om poster och nivåer, 2026-09-29:**

- **Med, en källa räcker (regel 3):** luckor per styck i de nivåer som har källa, stommar per meter i **enkel nivå**, bänkskiva per löpmeter, bänkskivans montering (Totalbyggarna), rivning (Hantverkskollen), vitvaror, el och VVS vid flytt där de har källa. Varje post med en enda källa står med den källan i antagandetabellen.
- **Inte med:** stommar på mellan- och hög nivå (ingen källa), container (ingen källa), folie (priset saknar antal luckor och går inte att räkna per lucka), IKEA:s monteringspris 3 399 kr (står inte på IKEA:s sida), verkstadslackering med rot (lackering i företagets lokaler ger inget rot).
- **Nytt kök** räknas därför bara i enkel nivå. Resultatet säger att dyrare stommar ligger över räknarens tak och att källor saknas för dem. Byta luckor och byta bänkskiva räknas i alla nivåer som har källa.
- Priser utan publiceringsdatum, som Picky Living, står med hämtningsdatum.

**Krav på underlaget** (kvar att fylla om nivåerna ska utökas):

- Pris per post (luckor per styck i tre nivåer, stommar per meter, bänkskiva per löpmeter per material, vitvaror, montering, el och VVS vid flytt), med källkraven i regel 3. Kandidater: Offerta, Hantverkskollen (2026-07-17, källor Skatteverket och Elsäkerhetsverket), Totalbyggarna, Husexperter, IKEA:s tjänstepriser (mätning 1 295 kr, montering 3 399 kr), kitchens.se och Totalbyggarna för bänkskivor. Källorna säger olika om laminatpriset, och spannet redovisas.
- Klart: Elsäkerhetsverket nämner inte spis och häll med namn, och Säker Vatten reglerar intyget och inte privatpersonen (se avsnitt 2 ovan).
- Samma rotkonstanter som ovan.

### 12. Fällor

- **Ingen "IKEA-montering" som fras.** IKEA äger den (vinnbarhet 1). IKEA:s tjänstepriser får stå som källa bara där de står på IKEA:s egen sida. Mätningen (1 295 kr) kontrolleras där, och monteringen (3 399 kr) är struken.
- **Rätt rot-tak.** 50 000 kr för rot, 75 000 kr är det gemensamma taket.
- Offertförmedlarna nämns inte i publik text.

---

## /rakna/takbyte/

### 1. Adress och sidtyp

`/rakna/takbyte/` · `src/pages/rakna/takbyte.astro` · **kalkylator**. Formelmodulen `src/lib/kalkyl/tak.ts` bär geometrin (takarea, takvinkel, takfallslängd, nockhöjd, antal takstolar) och är verktygsplanens rad 11. Takavvattningen använder samma takarea. Registret: `pelare: ['tak']`, `sasong` mars till oktober. Ingen produkt och inget reklamband.

Läsaren fyller i husets längd och bredd, takutsprång, taklutning i grader eller nockhöjd, takform (sadel, pulpet) och det nya materialet. Hon får takarean, kostnaden i ett spann med arbete och material för sig, rotavdraget, och som bonus takvinkeln och antalet takstolar vid valt centrumavstånd.

### 2. Huvudfras och sidofraser

**Huvudfras: byta tak kostnad, 880 per månad**, −23 procent på ett år. Toppen är september och maj (1 300). Vinnbarhet 4. Avsikten är 2 080 inklusive verktygsplanens rad 11 (takvinkel 210, beräkna takvinkel 110, snölast tak 30, beräkna takarea 10).

Sidofraser, med plats:

- **takbyte kostnad** (320, +50 procent) och **takbyte** (480) i H1 eller beskedet.
- **takbyte kostnad per kvm** (20) och **takbyte kvm pris** (20) i resultatet och i "Så räknar jag".
- **beräkna takarea** (10) och **takvinkel** (210) i en H2 om takarean.
- **plåttak kostnad** (320) ägs inte här men är ett val i formuläret.

### 3. Title

Krav: **högst 44 tecken**, börjar med **Byta tak, kostnad** eller **Vad kostar det att byta tak**. Löftet: från husets mått. Ingen annan title börjar med "Byta tak".

### 4. Description

Krav: **120 till 155 tecken.** Ska lova takarean ur husets mått och lutning, pris per material, och rotavdraget.

### 5. H1

Krav: läsarens fråga. Delar inte de tre första orden med title.

### 6. H2-struktur

Utöver mallens fasta avsnitt:

0. **Kortsvaret**: vad ett takbyte på en villa kostar per kvadratmeter takyta för tre material, med källa och datum, och att takarean är större än bottenytan med en faktor som lutningen styr.
1. **Takarean ur husets mått.** Formeln i klartext, en tabell över lutningen och påslaget på bottenytan, och takutsprånget. **Bär beräkna takarea och takvinkel.** Det här är luckan ingen i topp 5 fyller.
2. **Vad som ingår i priset.** Rivning, underlag, läkt, material, plåtdetaljer, ställning, container. Arbete och material för sig.
3. **Rotavdraget på takbytet.** Två ägare, och vad som räknas som arbete.

### 7. Längd

Mål **800 till 1 100 ord** utöver formuläret. Takexperter har cirka 2 500 ord och tre tabeller men ingen takarea.

### 8. Bilder

- Räknarens skiss: en husgavel med bredd, takutsprång, lutning och takfallslängd utsatta. Alt högst 125 tecken med orden takbyte och takarea. Måtten står i bildtexten.

### 9. Interna länkar

**Värdartikel: `/tak/plattak/`**, `<Kalkylator namn="takbyte" />` i kostnadsavsnittet (se tak.md).

**Ut**, krav:

- `/tak/plattak/` i avsnitt 2.
- `/tak/takstolar/` där antalet takstolar visas i resultatet.
- `/rakna/rotavdrag/` i avsnitt 3.
- `/rakna/takavvattning/` i "Läs vidare": takarean är redan räknad.

**In**, krav: `/tak/plattak/` (värdartikel), `/tak/snorasskydd/` och `/tak/takstolar/` (verktygskort), `/rakna/fasadyta/` i "Läs vidare" om den räknar gavelspetsar med samma lutning. Underlag kontrollerar det.

### 10. Strukturerad data och komponenter

`WebApplication`, `BreadcrumbList`, `FAQPage` bara med riktig Faq. GET-formulär, noll klient-JS.

### 11. Ettan och Bättre än ettan

Topp 5: leadhive.se (2026-03-03, uppdaterad 2026-09-26), takexperter.se, svenskabyggruppen.se, takpriser.se, takivast.se. Beckmansbygg.se och vertextak.se längre ner har räknare som kräver att läsaren redan vet takytan, och Beckmans kräver kontaktuppgifter. **Ettan: leadhive.se.** Sidan anger 1 300 till 1 700 kr per kvm efter Beckmans, men ingen rotprocent, inget tak och ingen formel för takarean. Den varnar bara för att offertens yta ska vara takyta.

Det ettan har som vi måste ha:

- Pris per kvadratmeter med ett spann.
- Varningen att takyta inte är bottenyta.

**Bättre än ettan** (krav):

1. **Takarean ur bottenyta, takutsprång och lutning.** Ingen i topp 5 eller någon av räknarna gör det.
2. **Pris per material med källa och datum**, arbete och material för sig.
3. **Rotavdraget rätt** med 30 procent, 50 000 kr per person och två ägare. Takexperter saknar taket.
4. **Takvinkel och antal takstolar** i samma resultat.
5. **Delbart resultat**, utan kontaktuppgifter.

**Beslut om prisunderlaget, 2026-09-29.** Underlaget är `docs/briefer/faktablad/rakna-takbyte.md`.

- **Räknaren använder bara källor som anger priset före rot**, eller där det framgår av exemplet. Tre källor uppfyller det: Takexperter (P1), Hantverkskollens sida om plåttak med material och arbete för sig (P4) och Totalbyggarna (P5). Byggstart (P3) tas med för papp och shingel bara om underlag kan visa att priset är före rot. Annars stryks den, och materialet får de källor som återstår.
- **Tas inte med:** Beckmans (P2) och Hantverkskollens jämförelsetabell (P4b), som är samma tal. Beckmans kallar dem "efter rot" och Hantverkskollen "före rot", och motsägelsen går inte att lösa. BraByggare (P6), eftersom rotläget inte anges. Tak i Väst (P7), som gäller efter rot för ett enda projekt. Svenska Byggruppen (P8), som är odaterad. Bygghemma (P9), som saknar pris per material.
- **Dubbletter räknas som en källa:** Husexperter är Takexperter, och Hantverkskollens jämförelsetabell är Beckmans.
- **Spannet per material** går från den lägsta låga till den högsta höga bland de källor som används för materialet. Källorna står i "Så räknar jag". Inget medelvärde räknas. Material med en enda källa (till exempel tegel, bara Takexperter) står med den och märks i antagandetabellen.
- **Takexperters tillägg** för resor, etablering och projektering, cirka 30 000 kr, visas som en egen rad med källan, inte inbakat i kvadratmeterpriset.
- **Andelen arbete** tas från Hantverkskollen (P4) och Takexperter (P1), som delar upp material och arbete. Där båda saknas märks andelen ANTAGANDE.
- **Skalning:** linjär bara för takytor mellan 100 och 200 kvm, det intervall som källornas exempel täcker (Hantverkskollen 100 till 200, Takexperter och Totalbyggarna 150). Utanför intervallet visar räknaren takarean och takstolarna men inget belopp.
- **Valmtak** avgör UX (faktabladet 2.4).

**Krav på underlaget** (kvar för en senare version):

- Pris per kvm lagt och andelen arbete för bandtäckt plåt, takpanneplåt, betongpannor, tegelpannor, papp och shingel, med källkraven i regel 3. Kandidater: Takexperter (tabeller för 150 kvm), Byggstart (plåt 1 700 kr, shingel 800 till 1 600 kr, papp 1 200 kr), Bygghemma (2026-02-23), Offerta (shingel), Beckmans.
- Geometrin för sadeltak och pulpettak med takutsprång, och om valmtak kan tas med i första versionen. Det är ett beslut för UX och bygge-agenten, som ska nämnas i underlaget.
- Poster för ställning och container med pris.
- Om ställning och container räknas som arbete för rot enligt Skatteverket.
- Vanligt centrumavstånd för takstolar (samma källa som `/tak/takstolar/`).

### 12. Fällor

- **Snölast** ska inte räknas i första versionen. Frasen är 30 i månaden, och det saknas en gällande källa efter att EKS upphörde (tak.md, snörasskydd). Den blir en senare version.
- **Takläggarsajterna och förmedlarna** nämns inte i publik text.
- **Priser utan datum** får inte finnas i modulen.

---

## /rakna/takavvattning/

### 1. Adress och sidtyp

`/rakna/takavvattning/` · `src/pages/rakna/takavvattning.astro` · **kalkylator**. Den använder takarean från `src/lib/kalkyl/tak.ts`. Registret: `pelare: ['tak']`, `sasong` april till september. Ingen produkt och inget reklamband.

Läsaren anger takarean för den sida som ska avvattnas, eller husets mått så att räknaren tar den, och rännans längd. Hon får rännans dimension, stuprörets dimension, antal stuprör och minsta fall i mm per meter.

### 2. Huvudfras och sidofraser

**Huvudfras: takavvattning dimensionering, 40 per månad**, med hängrännor dimensioner (10). Räknaren bär ingen trafik själv. Den ger hängrännesidan (2 880) det som ingen i topp 5 har. Vinnbarhet 4.

Sidofraser: **hängrännor dimension**, **stuprör dimension** (volym inte mätt) i resultatet och i "Så räknar jag".

### 3. Title

Krav: **högst 44 tecken**, börjar med **Takavvattning** eller **Hängränna och stuprör, dimension**. Får inte börja med "Hängrännor", eftersom den titeln ägs av `/tak/hangrannor/`.

### 4. Description

Krav: **120 till 155 tecken.** Ska lova rännans och stuprörets dimension efter takytan, antal stuprör och fallet.

### 5. H1

Krav: läsarens fråga. Delar inte de tre första orden med title.

### 6. H2-struktur

Utöver mallens fasta avsnitt:

0. **Kortsvaret**: vilken ränna ett tak på 75, 125 och 200 kvm behöver, stupröret, fall och högsta rännlängd per stuprör, med källa och år.
1. **Tabellen bakom.** Plannja 2010 och RA Hus, märkta som äldre. Om underlaget hittar en nyare tabell används den, och den äldre står som jämförelse.

### 7. Längd

Mål **500 till 800 ord** utöver formuläret. Räknaren är ett stöd, och texten bor i värdartikeln.

### 8. Bilder

- Räknarens skiss: tak i planvy med rännor, stuprör och fall utsatta. Alt högst 125 tecken med orden takavvattning och dimension.

### 9. Interna länkar

**Värdartikel: `/tak/hangrannor/`**, `<Kalkylator namn="takavvattning" />` direkt efter dimensionstabellen (se tak.md).

**Ut**, krav: `/tak/hangrannor/` i "Läs vidare", `/rakna/takbyte/` för takarean.

**In**, krav: `/tak/hangrannor/` (värdartikel) och `/rakna/takbyte/` ("Läs vidare").

### 10. Strukturerad data och komponenter

`WebApplication`, `BreadcrumbList`. GET-formulär, noll klient-JS.

### 11. Ettan och Bättre än ettan

Topp 5 för dimensioneringen: husbyggaren.se (RA Hus, tabellerna i PDF, ingen räknare), Lindabs Rainline Selection Tool (tillverkarens verktyg som slutar i en orderlista, inte testat), Plannjas PDF från 2010. **Ettan räknas som husbyggaren.se.** Den har referenserna (RA Hus 18, 0,013 l/s per kvm, SS 82 40 31 från 1988, SS-EN 12056-3) men inga tabeller på sidan och ingen räknare.

Det ettan har som vi måste ha: referenserna till standarden och RA Hus.

**Bättre än ettan** (krav):

1. **Dimensionen direkt ur takarean** utan PDF.
2. **Antal stuprör ur rännlängden** med regeln om högsta längd per stuprör.
3. **Fallet i mm per meter** med källa.
4. **Källornas år synliga**, och den äldre tabellen märkt som äldre.

**Krav på underlaget** (`docs/briefer/underlag-kalkyl-takavvattning-[datum].md`):

- Plannjas tabell (mars 2010) ordagrant, med adress.
- En nyare tabell om den finns: Lindab, Plannja eller SS-EN 12056-3 i sammanfattning. Dessutom regnintensiteten som används (0,013 l/s per kvm enligt RA Hus), med källa.
- Högsta rännlängd per stuprör och minsta fall, med källa.

### 12. Fällor

- **Lindab och Plannja** får nämnas som källa till tabellen, men räknaren länkar inte till deras verktyg.
- **SS 82 40 31 från 1988** står med år, aldrig som gällande standard utan förbehåll.

### Beslut efter underlaget, 2026-09-29

Underlaget är `docs/briefer/underlag-kalkyl-takavvattning-2026-09-28.md` och faktabladet `docs/briefer/faktablad/rakna-takavvattning.md`.

1. **Stupröret dimensioneras efter RA Hus 21** (via Teknikhandboken). Tabellen är enligt Teknikhandboken dimensionerad i överkant, och för ett stuprör är det rätt fel att göra. SS 82 40 31 (1988) visas inte i svaret. Den står i "Så räknar jag" som jämförelse, med år och med beskedet att den ger andra dimensioner.
2. **Rännan följer RA Hus och Plannja**, som båda byter till 125-ränna vid 75 kvm. Lindab byter redan vid 50 kvm. Ligger takytan mellan 50 och 75 kvm visar beskedet 100-rännan och en pekrad om att Lindab vill ha 125 i det intervallet, så att läsaren väljer efter det fabrikat hon köper. Utanför intervallet är källorna överens och ingen pekrad behövs.
3. **Plaststuprör faller bort ur räknaren.** Det finns inget pris, och en post utan källa tas inte med (regel 3). Räknaren visar dimension och antal för alla material, men materialkostnaden räknas bara för stål, där varje post har en källa. Plast nämns i svaret utan kronor, med en länk till hängrännesidan. Plastrännans enda pris (Bauhaus) räcker inte för en totalsumma när stupröret saknas.
4. **Takarean:** UX avgör i specen om den mäts längs lutningen eller vågrätt. Kravet härifrån är att räknaren säger vilket av dem den använder, med källa i "Så räknar jag", och att samma val gäller i `/rakna/takbyte/`.
