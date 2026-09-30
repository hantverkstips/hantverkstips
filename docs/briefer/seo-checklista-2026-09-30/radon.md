# SEO-checklista, radon, startlista 6 omgång B, 2026-09-30

Omgång B i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad B2; 12.4 Radon; 12.5). Ny sida, deadline **30 november**, och den skrivs **först i omgången**, eftersom radon toppar i oktober och mätsäsongen löper 1 oktober till 30 april. Sidan är YMYL: allt om hälsa och risk bygger bara på SSM, Boverket och Folkhälsomyndigheten.

Underlaget är underlagsarbetarens SERP-läsning 2026-09-30 ("radon", "radon gränsvärde", "radonmätare", "vad kostar en radonmätning"), det gemensamma faktabladet `docs/briefer/faktablad/fukt-gemensamma-tal.md` avsnitt 8 (T47 till T57), som är talens enda källa, och affiliatebeslutet `docs/briefer/affiliate-fukt-2026-09-30.md` punkt 3. Sökverktyget svarar från USA, och ordningen i topp 5 är inte kontrollerad. Topp 5 på "radon" skilde sig 2026-09-30 från läsningen i 12.3. Radonova gick inte att läsa (429). Title räknas utan suffix.

Tre saker styr sidan:

1. **Affiliate: inga produktkort, inget reklamband och inga annonslänkar.** SSM:s metod kräver spårfilm eller ett kalibrerat instrument för årsmedelvärdet, och Proffsmagasinet säljer inga spårfilmsdosor. Ett kort för en digital mätare skulle sälja det sidan inte rekommenderar. Frågan prövas igen före radonsugen i omgång E.
2. **Rätt ord:** **referensnivå** 200 Bq/m³ för befintliga bostäder (strålskyddsförordningen 2018:506, 3 kap. 6 §) och **gränsvärde** 200 Bq/m³ för nya byggnader (BFS 2024:8, 3 kap. 2 §). "Gränsvärde" om ett befintligt hus är fel ord. "Riktvärde" och "Folkhälsomyndighetens rekommendation" är gamla uttryck.
3. **Åtgärden ägs av `/fukt/radonsug/` (omgång E).** Den här sidan tar nivåerna, mätningen och kostnaden för mätningen. Åtgärderna får ett kort avsnitt, och länken till radonsugen läggs när den sidan finns.

---

## /fukt/radon/

### 1. Adress och sidtyp

`/fukt/radon/` · `src/content/kunskap/fukt/radon.mdx` · samling **kunskap**, `typ: kunskap`, `pelare: fukt`, `plats: hela-huset`, `niva: enkel`. `produkter: []`, ingen `kategori`.

Läsaren har hört att radon ger lungcancer, ska köpa hus eller har fått ett mätvärde. Hon vill veta vilken gräns som gäller, hur hon mäter och vad det kostar.

### 2. Huvudfras och sidofraser

**Huvudfras: radon, 12 100 per månad**, topp i oktober. Vinnbarheten är 2 på ordet: myndigheter (SGU, SSM, Boverket) och KI ligger i topp 5.

Sidofraser, med plats:

- **radon i hus** (720) i title eller H1.
- **radon gränsvärde** (880) i en H2. Rubriken får gärna säga både gränsvärde och referensnivå.
- **radonmätare** (1 000) och **radonmätning villa** (210, +50 %) i H2:n om mätningen.
- **vad kostar en radonmätning** (140) i en H2 eller i en fråga.
- **radon hur farligt** (110), **radonmätning hur ofta** (90), **radon lukt** (50), **radon källare** (30) och **radon dolt fel** (10) i brödtexten och i Faq.

### 3. Title

Krav: **högst 44 tecken**, och titeln börjar med **"Radon"**. Förslag: "Radon i huset, gränsvärdet och mätningen" (40). `/fukt/radonsug/` ska senare börja med "Radonsug", och de två får inte dela de tre första orden.

### 4. Description

Krav: 120 till 155 tecken, "radon" först, mätregeln och 200 Bq/m³ i sak. Förslag att mäta mot: "Radon i huset mäts med dosor i minst två månader mellan oktober och april. Så går mätningen till, vad den kostar och vad 200 Bq/m³ betyder." (139).

### 5. H1

Sidans löfte, till exempel om att man bara kan veta genom att mäta. Den delar inte de tre första orden med title och börjar inte med "Radon i huset".

### 6. H2-struktur

`kortSvar`, tre till fem meningar som går att lyfta rakt av: radon märks inte och måste mätas ("Det enda sättet att upptäcka radon är att mäta", SSM); referensnivån 200 Bq/m³; mätningen med spårfilm i minst två månader mellan 1 oktober och 30 april, i minst två rum och på varje plan; och att en långtidsmätning kostar under 1 000 kr (pris med källa och datum).

1. **Vad radon är och var det kommer ifrån.** Mark, byggmaterial och vatten (SSM, T56). Blåbetong 1929 till 1975 enligt SSM, med en mening om att SGU skriver 1978. Radon luktar inte. Radon i källaren.
2. **Referensnivå och gränsvärde** (bär "radon gränsvärde"). En tabell med nivå, typ, författning och vad det betyder för en villaägare, efter SSM:s tabell i det gemensamma faktabladet 8.2. Dricksvattnet står med 100 och 1 000 Bq/l.
3. **Hur farligt radon är.** Bara SSM: cirka 500 lungcancerfall per år och 14 procent, varav 450 i kombination med rökning, risken fördubblas strax över 600 Bq/m³, och medelhalten i svenska bostäder är cirka 100 (T53, T54). Inga andra hälsopåståenden.
4. **Så mäter du radon i villan** (bär "radonmätning villa"). SSM:s mätregel i punktform: period, minst två månader, minst två punkter och varje plan med boendeutrymmen. Dosorna beställs från ett ackrediterat laboratorium (Swedac, om faktabladet bekräftar det). Ny mätning efter 10 år eller efter byggnadsåtgärder (T52). Korttidsmätning ger inget årsmedelvärde.
5. **Spårfilm eller digital radonmätare** (bär "radonmätare"). En tabell över vad varje metod duger till: årsmedelvärde, husköp och uppföljning efter åtgärd. Tillverkarens noggrannhet för en digital mätare och SSM:s krav på kalibrering. Inga produktlänkar.
6. **Vad en radonmätning kostar** (bär frågan). En pristabell med leverantör, antal dosor, vad som ingår och datum.
7. **Över 200, vad gör du då.** Kort: mät om och ta reda på källan, och det finns åtgärder (radonsug, radonbrunn, ventilation). SSM som källa. Länken till `/fukt/radonsug/` läggs när den sidan finns. Radon som dolt fel vid husköp, med källa, i en mening.
8. **Faq**, tre frågor som inte upprepar H2:orna, till exempel "Hur ofta ska man mäta radon?", "Luktar radon?" och "Är radon i källaren farligare?".

### 7. Längd

Mål **1 800 till 2 500 ord**. SSM:s sida om nivåerna har cirka 1 200 till 2 500 ord, Anticimex cirka 1 200 och Testix cirka 6 000 (affiliate).

### 8. Bilder

- **Huvudbild, krav:** radonets vägar in i ett hus i genomskärning, med marken under plattan, blåbetong i väggen och vattnet, och en dosa i två rum på varje plan. `bildAlt` högst 125 tecken, med "radon". Spec till UX som `spec-skiss-radon-vagar-2026-10.md`.
- Tabellerna i H2 2, 5 och 6 skrivs i Markdown.

### 9. Interna länkar

**Ut**, minst tre, högst en per H2:

- `/fukt/fukt-i-krypgrund/` eller `/fukt/fukt-i-kallaren/` i H2 1, där marken och grunden nämns.
- `/fukt/hygrometer/` i H2 5, som jämförelse: samma fråga om hur exakt en mätare är.
- `/fukt/luftfuktighet-inomhus/` eller en ventilationssida i H2 7.
- `/fukt/radonsug/` **först i omgång E**.

**In**, senast en vecka efter publicering:

- `src/content/guider/fukt/fukt-i-kallaren.mdx`, meningen om radon (rad 210 enligt det gemensamma faktabladet 10.1). Ankare om att mäta radon i källaren och huset.
- `src/pages/rakna/kallare.astro`, radonraden (rad 281 till 284). UX lägger länken.
- Gärna `src/content/guider/fukt/fukt-i-krypgrund.mdx`, H2 "Fukt i krypgrunden när du köper hus", med ett ankare om radonmätning vid husköp.

### 10. Strukturerad data och komponenter

`Article` och `BreadcrumbList`. `FAQPage` bara om Faq finns. Inga `/go/`-länkar och ingen `Reklammarkning`. `kallor` med SSM:s fem sidor, strålskyddsförordningen, BFS 2024:8, SSM:s metodbeskrivning, prissidorna med datum och tillverkarens datablad för den digitala mätaren.

### 11. Ettan och Bättre än ettan

**Ettan på "radon" (2026-09-30):** sgu.se, markradon, granskad 2020-11-03, cirka 650 ord. Den tar upp mark och blåbetong (1929 till 1978), men inte nivåer, mätning eller kostnad. Ki.se Riskwebben har gamla uppgifter ("riktvärdet", FoHMFS 2014:16, BFS 2011:6, dricksvatten 1 000 Bq/l). SSM:s tabell är etta på "radon gränsvärde", och där används orden rätt, men sidan har ingen mätregel och inga priser. Testix, etta på "radonmätare", jämför inte med spårfilm och nämner inte 200. Anticimex, etta på "vad kostar en radonmätning" (795 och 1 490 kr), skriver "Folkhälsomyndighetens rekommendationer". Ingen sida har nivåerna, mätregeln, kostnaden och valet av mätmetod samlat.

Det ettan har som vi måste behålla eller överträffa: marken och blåbetongen, med båda årtalen redovisade.

**Bättre än ettan** (krav):

1. **Nivåerna med rätt ord och författning i en tabell**: referensnivå mot gränsvärde och vad skillnaden betyder för en villaägare.
2. **SSM:s mätregel steg för steg**: period, två månader, två punkter och varje plan, omätning efter 10 år.
3. **En daterad pristabell** med leverantör, antal dosor och vad som ingår.
4. **Spårfilm mot digital mätare**: vad varje metod duger till, med SSM:s krav och tillverkarens noggrannhet.
5. **Hälsorisken med bara SSM:s tal.**

**Krav på faktabladet** (`underlag`, `docs/briefer/faktablad/kunskap-radon.md`):

- **SSM:s metodbeskrivning för bostäder** (PDF, gäller från 1 oktober 2026). Den gick inte att läsa i det gemensamma faktabladet (8.3) och måste läsas nu: mättid, antal mätpunkter, krav på instrument (högst 20 procent osäkerhet vid 200 Bq/m³ enligt affiliatebeslutet) och kalibrering.
- Kontrollera strålskyddsförordningens 3 kap. 6 § ordagrant i riksdagens text (utdrag i 8.1). Läs om SSM:s "400 000 bostäder" ordagrant, eller låt bli att använda talet.
- Priser med datum från minst tre: Anticimex (795 och 1 490 kr), Radonova (läs om, gav 429), Svensk Energideklaration eller ett laboratorium. Kontrollera vilka som är Swedac-ackrediterade, med Swedacs register som källa.
- Digital mätare: tillverkarens datablad för minst en (noggrannhet, kalibrering) och om SSM godtar den för årsmedelvärde.
- Radon som dolt fel vid husköp: en källa som inte är en advokatbyrå eller firma, eller skriv det utan tal.
- Boverkets "Vad är radon?" (oläst 2026-09-30).

### 12. Fällor

- **"Folkhälsomyndighetens rekommendation", "riktvärde" och "gränsvärde" om ett befintligt hus** står inte på sidan, utom som rättelse.
- **Blåbetong 1929 till 1975** enligt SSM. SGU:s 1978 får nämnas med källa. Anticimex "slutet av 1920-talet till slutet av 1970-talet" upprepas inte.
- **Inga kort, inga annonslänkar och inga produktnamn med länk.** Digitala mätare beskrivs som typ.
- **Hälsan bara med SSM som källa.** Inga påståenden om symtom.
- **"radonsug", "radonsanering" och "radon åtgärder"** ägs av `/fukt/radonsug/`. Här står de inte i title, H1 eller H2.
- **WHO:s 100 Bq/m³** får bara stå om faktabladet har WHO:s egen källa.
