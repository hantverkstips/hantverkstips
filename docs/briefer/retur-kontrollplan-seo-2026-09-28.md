# Retur, SEO och GEO: /rakna/kontrollplan/, 2026-09-28

Steg 5 i skillen `ny-sida`. Sidan är läst mot `docs/briefer/seo-checklista-2026-09-28/raknare.md`, avsnittet `/rakna/kontrollplan/`, punkt för punkt, renderad på en egen dev-server (port 4391) i standardfallet, med `?a=eldstad&a=va` och med ett ogiltigt värde. Filer: `src/pages/rakna/kontrollplan.astro`, `src/lib/kalkyl/kontrollplan.ts`, posten i `src/lib/kalkyl/register.ts`.

**Status: inte godkänd.** Fem punkter stoppar publicering (A1 till A5). Tre punkter görs inom en vecka och stoppar inte (B1 till B3). Resten stämmer.

---

## Beslut på de tre frågorna från hantverkaren

### 1. Punkt 6 mot specens sidmall: två egna H2 krävs, längden hålls genom att flytta, inte lägga till

Checklistan säger uttryckligen (rad 10) att mallens fasta H2 ligger kvar och att de listade avsnitten kommer **utöver** dem. Specen 5.2 tog inte med avsnitt 2 och 4, så det är specen som avviker. Innehållet finns på sidan, men bara som punkter i en lista under en rubrik som heter "Därför blev svaret så". Ingen sökning och ingen AI-modell läser den rubriken som svaret på "vad ändrades 1 juli 2026" eller "när behövs ingen kontrollplan". Skillen avsnitt 5 kräver också att vi säger vad som ändrats när regler byts. Fältet har ingen egen text om det, och det är sidans största försprång.

Avsnitt 1, 3 och 5 i punkt 6 är **uppfyllda** som sidan står. Det räcker med kortsvaret, regeln `innehall` och planens H2 "Förslag till kontrollplan enligt PBL" för avsnitt 1, med planen i standardfallet som ifyllt exempel med tabell för avsnitt 3, och med regeln `egen-sakkunnig` och teckenförklaringen för avsnitt 5. Där behövs ingen ny rubrik.

**Längden:** jag räknar den som löptext, alltså utan planen, formuläret, antagandetabellen med källistan och Faq. Den ligger i dag på omkring 1 150 ord. Målet 1 000 till 1 300 står kvar. De två nya avsnitten betalas genom att de fyra regler som alltid visas och som inte förklarar just det här svaret (`avsta`, `byggbedomare`, `avfall` och `nya-byggregler`) flyttas in i de nya avsnitten. Då står ingen mening två gånger. Hur det byggs, och om testet ska följa med, avgör UX och bygge. Mitt krav är bara att **ingen mening står två gånger** och att löptexten **inte går över 1 300 ord**.

### 2. Våtrum i "Bättre än ettan" punkt 1: stoppar inte, checklistan rättas

Kravet i punkt 1 är att valet av åtgärd ska ge färdiga kontrollpunkter, och det uppfyller generatorn med åtta åtgärder. Fem av sex uppräknade finns med, plus ventilation och VA. Det anmälningspliktiga i ett badrumsbygge är VA, och värdartikeln säger själv "vatten eller avlopp, det vill säga badrummet". Det finns ingen lovgrund i underlaget för en egen våtrumsåtgärd, och generatorn får inte ge en plan för något som inte kräver en. **Checklistans punkt 11.1 gäller härmed utan våtrum.** Våtrummet (tätskikt och fall mot golvbrunn, BFS 2024:8 7 kap.) är en kandidat till version 2, som rader under VA efter samma lagrumsläsning som varv 2. Det ska med i specens lista för version 2.

Det som krävs nu är att läsaren med ett badrum hittar sitt val. Se A4.

### 3. Pelarna: `['altan', 'grund']`, utan `inomhus`

Checklistan gäller. Pelaren inomhus heter "Väggar och innertak" och har fem sidor om gips, skruv och upphängning. Ingen av dem nämner bärande väggar, anmälan eller startbesked. En kontrollplansgenerator under Räkna i den hubben hamnar fel och gör gruppen otydligare. Pelaren läggs till den dag en sida om öppning i bärande vägg finns där. Se A3.

### Värdartikeln, slutgiltigt: `/grund/inreda-kallare/` (alternativ B)

Premissen för alternativ A håller inte längre. De 60,1 kB i specen är mätta på ett bygge från 16:08, innan `<Kalkylator namn="grannemedgivande" />` lades in i `bygglov-altan.mdx` (rad 90). Jag har mätt i dev och kalibrerat mot `inreda-kallare`, som inte är ändrad sedan bygget: dev ger 329 byte mer i `<main>` än produktionen. Enligt den mätningen väger `/altan/bygglov-altan/` redan **ungefär 67,0 kB**, alltså över 66 kB innan kontrollplanen kommer in. Med ett tredje formulär på omkring 3 kB blir det cirka 70 kB, och då står tre formulär på en kunskapssida vars huvudbesked är att de flesta altaner inte kräver lov ("Sätt igång").

I källarguiden har läsaren tre av generatorns åtgärder framför sig (bärande, ventilation och VA). Avsnittet talar redan om anmälan, startbesked och slutbesked, och kontrollplanen är nästa steg. Det är den plats där läsaren just förstått varför hen behöver planen, och det var checklistans val. Villkoret i specen 10 gäller: samma leverans sänker sidan med minst lika många byte som den lägger till, uppmätt före och efter. UX och bygge specar sänkningen.

`/altan/bygglov-altan/` får en textlänk i stället för ett `Verktygskort`. Kortet väger omkring 800 byte på en sida som redan är över budget, och en länk i löptext bär samma inlänk. Se A2.

**Till UX och bygge, utanför det här uppdraget:** att `/altan/bygglov-altan/` ligger över 66 kB med grannemedgivandet inbäddat är ett budgetfel som måste mätas på ett riktigt bygge innan grannemedgivandet publiceras.

---

## A. Stoppar publicering

**A1. `src/pages/rakna/kontrollplan.astro`, mellan rad 342 och rad 344** (efter sektionen "Gör inte det här", före "Så räknar jag"). Två nya `<section class="print:hidden">` med var sin `Pennstreck`-H2. De ska vara statiska, alltså renderas i varje tillstånd, också när ett värde är ogiltigt och när `visat.status` inte är `ok`. Texten skrivs av hantverkaren, och rubrikerna formulerar hen.

- **Vad som ändrades 1 juli 2026.** Rubriken ska ha datumet. Löptexten ska ha ändringslagen med beteckning, Lag (2026:712), och datumet. Det här ska stå där:
  1. Planen ska nu ange vilka krav varje kontroll avser och hur den görs (10 kap. 6 §).
  2. Avfallet har flyttat ut ur kontrollplanen till en egen avfallshanteringsplan (10 kap. 8 a §).
  3. En certifierad byggbedömare kan ersätta kontrollplanen för den del hen kontrollerar, och bara vid nybyggnad (10 kap. 6 och 13 §§).
  4. BBR och EKS har ersatts av Boverkets nya föreskrifter, och energikraven flyttade från BBR till BFS 2026:9 den 1 oktober 2026.

  Källa: underlaget rad 130 och varv 2. Obligatorisk sakkunnigkontroll och kontrollansvarigs jäv (10 kap. 8 § tredje st., 11 a §) får stå med i högst en mening. De får också utelämnas, eftersom föreskrifterna om vilka åtgärder som omfattas inte är lästa (underlaget, Att verifiera 12). Avsnittet får inte säga något om lovfria tillbyggnader (specen, F10).
- **När ingen kontrollplan behövs.** Detta ska stå där:
  1. Den behövs bara när åtgärden kräver lov eller anmälan (10 kap. 3 och 6 §§).
  2. Nämnden får besluta att den inte behövs för en enklare åtgärd, men det beslutet kan man inte räkna med i förväg (6 a §).
  3. Det en byggbedömare kontrollerar behöver ingen plan.
  4. Avfallshanteringsplanen behövs inte när det är uppenbart att den inte behövs (8 a § andra st.).

  Innehållet i punkt 3 och 4 får inte stå både här och i föregående avsnitt. Det ska stå på ett ställe, med en hänvisning i det andra.

- Villkor för båda: ingen mening får stå två gånger på sidan (se beslut 1), löptexten får inte gå över 1 300 ord, och "BBR" får bara stå som upphävt eller som undantaget för energi.

**A2. `src/content/kunskap/altan/bygglov-altan.mdx`, rad 104** (stycket om altan ovanpå garaget, i H2:n "Sätter du tak på altanen blir den en tillbyggnad"). En mening efter "Räkna med bygglov och fråga kommunen först." som säger att en altan som kräver lov också kräver ett förslag till kontrollplan före startbeskedet. Länken går till `/rakna/kontrollplan/`, och ankaret ska innehålla ordet kontrollplan. Hantverkaren formulerar. Här ska inget `Verktygskort` stå (budgeten, se ovan). Meningen får inte kopplas till den lovfria tillbyggnaden i första stycket (specen, F10).

**A3. `src/lib/kalkyl/register.ts`, rad 185.** Ska vara:

```ts
    pelare: ['altan', 'grund'],
```

**A4. `src/lib/kalkyl/kontrollplan.ts`, rad 770**, `'atgard.va.hjalp'`. Hjälpraden ska säga att valet gäller badrummet när ledningarna dras nytt eller flyttas, så att läsaren med ett våtrum hittar sitt val. Det är det enda stället på sidan där "Det ettan har: våtrum" kan mötas i version 1. Ordet badrum finns i dag inte på sidan. Hantverkaren formulerar.

**A5. `src/content/guider/grund/inreda-kallare.mdx`, efter stycket på rad 210** och före "En sak gäller oavsett papper." (rad 212): `<Kalkylator namn="kontrollplan" />`. I stycket på rad 210, eller i en mening direkt före inbäddningen, ska två saker in:
- Att startbeskedet förutsätter ett förslag till kontrollplan. Ordet kontrollplan står i dag inte på sidan.
- Att kontrollreglerna ändrades 1 juli 2026, bredvid meningen om att listan ändrades 1 december 2025.

Hantverkaren formulerar. Är lagrummet nytt för sidan ska det in i `kallor` (PBL 10 kap. 6 och 23 §§, Lag (2026:712), samma källa som underlaget). Villkor enligt specen 10: samma leverans sänker sidan med minst lika många byte som inbäddningen och meningarna lägger till, mätt på bygget före och efter. UX och bygge specar sänkningen.

---

## B. Inom en vecka, stoppar inte

**B1. `/rakna/bygglov-altan/`** (`src/pages/rakna/bygglov-altan.astro` eller `src/lib/kalkyl/bygglov-altan.ts`). När beskedet är att altanen kräver bygglov ska en länk till `/rakna/kontrollplan/` stå i resultatet eller i "Läs vidare", med ordet kontrollplan i ankaret. Checklistans punkt 9. UX och bygge väljer var.

**B2. `/rakna/grannemedgivande/`.** Checklistan för den sidan (punkt 9, Ut) kräver en länk till `/rakna/kontrollplan/`, och i dag finns ingen. Den tas i den sidans egen retur men nämns här, eftersom den är en av kontrollplanens inlänkar.

**B3. Efter publicering.** Delningsbilden `public/og/rakna-kontrollplan.png` finns inte än. Den skrivs av bygget, och `og:image` pekar redan dit. Kontrollera efter `npm run build` att filen finns. Fråga en AI om "kontrollplan mall" och "vad ändrades i kontrollplanen 1 juli 2026" två veckor efter publicering, och anteckna i `docs/SOKORDSANALYS.md` om sajten nämns.

---

## Punkt för punkt

| # | Punkt | Utfall |
|---|---|---|
| 1 | Adress och sidtyp | Inget att ändra. Generator, `prerender = false`, canonical `/rakna/kontrollplan/` också med parametrar. Pelarna: A3 |
| 2 | Huvudfras och sidofraser | Inget att ändra. "kontrollplan" står i H1. "kontrollplan enligt PBL" står i planens H2 och i regeln `innehall`. "kontrollplan eldstad" är ett val och en Faq-fråga. "kontrollplan altan" är ett val. "kontrollplan exempel" bärs av planen i standardfallet och ska inte tvingas in (volym okänd) |
| 3 | Title | Inget att ändra. "Kontrollplan mall, ifylld efter ditt bygge", 42 tecken, suffixet kommer med, mall är andra ordet, inget årtal, unik |
| 4 | Description | Inget att ändra. 149 tecken, med frasen, gratis, PDF, utan e-post och 1 juli 2026 |
| 5 | H1 | Inget att ändra. "Kontrollplan som fylls i efter det du ska bygga" delar bara första ordet med title |
| 6 | H2-struktur | A1. Kortsvaret är citerbart och har 10 kap. 6 §, de fyra punkterna och avfallsplanen. Faq har fem frågor och dubblerar inte kortsvaret |
| 7 | Längd | Omkring 1 150 ord löptext. Efter A1 får den inte gå över 1 300, se beslut 1 |
| 8 | Bilder | Inget att ändra. Skissens alt har 115 tecken och ordet kontrollplanens, bildtexten har mått och lagrum, och varumärkesbilden har tom alt. Delningsbilden: B3 |
| 9 | Interna länkar | Ut: inget att ändra (fyra i "Läs vidare", alla krav med). In: A2 och A5 stoppar, B1 och B2 inom en vecka. Den externa Boverkslänken är tillåten men inget krav |
| 10 | Strukturerad data | Inget att ändra. `WebApplication`, `BreadcrumbList` och `FAQPage` har samma text som syns, och ingen `HowTo`. Utskriften har bara text som syns på skärmen |
| 11 | Ettan | Kolumnerna, utskriften och uppdelningen före och efter 1 juli 2026 finns. Grund, stomme, fukt, ventilation, brand och energi finns. Våtrum: A4 och beslut 2 |
| 11 | Bättre än ettan | 1: uppfyllt med åtta åtgärder (beslut 2). 2: uppfyllt, eftersom avfallsplanen är en egen del med rutan och 8 a § andra st. 3: uppfyllt, eftersom planen har "PBL 10 kap. 6 § i lydelse Lag (2026:712)" och regeln `nya-byggregler`. Datumet blir tydligare med A1. 4: uppfyllt, med Egenkontroll per rad i kolumnen "Vem kontrollerar" och teckenförklaringen. 5: uppfyllt, gratis och utan e-post, med utskrift och delbar adress |
| 12 | Fällor | Inget att ändra. BBR står bara som upphävt eller som undantaget för energi. Inga kommuner namnges i löptext (bara i `kallor`). Kontrollansvarig förklaras i ingressen och byggbedömare första gången ordet står. Ingen platshållare syns i något tillstånd |
