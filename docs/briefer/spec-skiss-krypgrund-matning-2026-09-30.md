# Spec: krypgrunden i genomskärning, där mätningen görs

UX och bygge, 2026-09-30. Beställd av koordinatorn som huvudbild för `src/content/guider/fukt/fukt-i-krypgrund.mdx` (utkast), där platshållaren i frontmatter väntar på `fukt/krypgrund-matning.svg`. Checklistan är `docs/briefer/seo-checklista-2026-09-30/fukt-i-krypgrund.md` avsnitt 8, faktabladet `docs/briefer/faktablad/guider-fukt-i-krypgrund.md` avsnitt 18. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 5 (handskrift och ledare) och 8 (tillstånd), och som i `docs/briefer/spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7 (kontroller). Förebilden för handen är `src/assets/illustrationer-kallor/fukt/krypgrund-installation.svg`.

## 1. Vad bilden ska säga

Var i krypgrunden du mäter: hygrometern hänger strax under blindbotten, en bit in från grundmuren, och fuktkvoten mäts i träet där påväxten syns först, i syllen och i blindbottens undersida. **Hygrometern och dess placering är den enda saken som pekar**, i penna. **Nyckeltalet är under 75 %**, det hygrometern ska visa, med gul markering en gång.

| Detalj | Mått eller läge | Källa |
|---|---|---|
| Fri höjd mark till bjälklag | 600 till 800 mm | TräGuiden, uteluftsventilerad krypgrund |
| Hygrometer | 5–10 cm under blindbotten, cirka 1 m från grundmuren; inte på marken, plasten eller mot grundmuren | Ljungby Fuktkontroll |
| Fuktkvot | i syllen ovanför grundmuren och i blindbottens undersida | Ljungby Fuktkontroll; TräGuiden, fuktkvot och mätning |
| Påväxt syns först | blindbottens undersida och bjälklagsanslutningen över grundmuren | Sikander, Bygg & teknik 8/04 |
| Ventil | minst 0,2 m över mark ute | TräGuiden |
| Plast | 0,30 mm, fram till grundmuren | TräGuiden; Fuktcentrum B&T 5/02 |
| Gräns | 75 % RF | Boverket, BFS 2024:8 |

## 2. Beslut

- **Inte en variant av `fukt/krypgrund-sommarkondens.svg`.** Den och `krypgrund-installation.svg` visar hela grunden mellan två grundmurar med huset ovanför och luft eller slang i penna. Den här är en **närbild av ena sidan**: grundmuren till vänster med syll, bjälklagets ände och ventil, kryprummet ut till bildens högra kant, inget hus i helfigur, ingen luftpil, ingen maskin.
- **Skalenlig, 1 enhet = 4 mm**, utom att bjälklagets skikt får vara förenklade. Då stämmer 700 mm fri höjd (175 enheter), 1 m (250), 0,2 m (50) och grundmuren på 200 mm (50) med byglarna.
- **Fuktkvotsmätaren ritas inte som ett verktyg** (inga verktyg i drift). Mätpunkterna i trä visas som två korta stift i träet, och en etikett med två ledare säger vad som mäts där. Stiften är blyerts, inte penna: de är den andra mätningen, inte det som pekar.
- Påväxten får ingen egen etikett; bildtexten säger att fuktkvotspunkterna är där den syns först.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/fukt/krypgrund-matning.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/fukt/krypgrund-matning.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Särskilt inte `src/content/` (hantverkaren arbetar i sidan nu; frontmatter byter UX och bygge själv efter godkännandet), inte `src/assets/illustrationer-kallor/el/` (en annan illustratör ritar där samtidigt), och inte de befintliga krypgrundsskisserna.

## 4. Motivet, koordinater

Snitt genom grunden sett från sidan. Ute till vänster, kryprummet till höger. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det, men behåll måtten i avsnitt 2.

| Del | Form och läge | Stil |
|---|---|---|
| Ytterväggen | stump x 100–136, y 0–60, två lodräta linjer | blyerts 2 |
| Bjälklaget | golvets ovansida y 60 från x 100 till 600; kantbalk som lodrät rektangel x 100–112, y 60–122; isolering y 66–114 från x 112 till 600 | blyerts 2; isoleringen skrafferas som i förebilden, en `<path>` per rad |
| Blindbotten | band y 114–122 från x 112 till 600 | blyerts 2 |
| Syll | x 100–156, y 122–136, under kantbalken och ut i grunden | blyerts 2 |
| Grundmur | x 100–150 från y 136 ner till y 360 | blyerts 2 kontur, betongskraffering blyerts-2 1,25 |
| Ventil | genom grundmuren, y 196–222: väggens lodräta linjer bryts där, två vågräta linjer tvärs muren, tre korta lodräta streck på utsidan vid x 100 som galler | blyerts 2 |
| Mark ute | y 272 från x 44 till 100, skraffering under | blyerts 2, skraffering blyerts-2 1,25 |
| Mark i grunden med plast | plastlinjen y 297 från x 150 till 600, med en uppvikning 8 enheter upp längs grundmurens insida vid x 152, så att det syns att plasten når muren; skraffering under från y 305 | plasten blyerts 2, skraffering blyerts-2 1,25 |

**Snickarpennan, den enda saken som pekar.** Hygrometern i penna 2,5 px: en liten rektangel x 390–414, y 141–159 med ett kort vågrätt streck inuti som display, hängande i en tråd från blindbottens undersida (402, 122) ner till (402, 141). Inget annat i penna utom marginallinjen och H1.

**Byglar**, blyerts-2 1,5 med korta tvärstreck:

| Bygel | Läge |
|---|---|
| 5–10 cm | lodrät vid x 378 från blindbotten y 122 till hygrometerns ovankant y 141 |
| ca 1 m | vågrät vid y 214 från grundmurens insida x 150 till x 402; streckad hjälplinje blyerts-2 1 från hygrometerns underkant (402, 159) ner till y 220 |
| 60–80 cm | lodrät vid x 580 från blindbotten y 122 till plasten y 297 |
| 0,2 m | lodrät vid x 94 från marken ute y 272 till ventilens underkant y 222, med en kort vågrät hjälplinje från ventilens underkant ut till x 88 |

**Mätpunkterna i trä**, blyerts 1,5: två korta parallella stift, 6 långa och 3 isär. I syllen går de in vågrätt från syllens insida vid (156, 129). I blindbotten går de in lodrätt underifrån vid (262, 122).

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px, raka. En ledare får korsa skikt men aldrig en annan ledare, en bygel eller hygrometern. Papperslapp i `#f5efe3` bakom etiketter som står i skraffering. **Etikettexten är högst 65 tecken utan mellanslag, de tio nedan.** Orden är sidans egna; alla står i `fukt-i-krypgrund.mdx` eller i dess bildtext.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| H1 | hygrometer | penna | till höger om hygrometern, x 424–534, baslinje y 158; ingen ledare |
| K1 | under 75 % | blyerts på tumstock | under H1, x 424–520, baslinje y 190; ingen ledare |
| M1 | 5–10 cm | blyerts-2 | vänster om bygeln, högerställd mot x 372, baslinje y 148 |
| M2 | ca 1 m | blyerts-2 | ovanför bygeln, centrerad kring x 276, baslinje y 206 |
| M3 | 60–80 cm | blyerts-2 | vänster om bygeln, högerställd mot x 572, baslinje y 236 |
| M4 | 0,2 m | blyerts-2 | ute, vänster om bygeln, x 46–88, baslinje y 256 |
| E1 | fuktkvot | blyerts | i grunden, x 172–250, baslinje y 170; två ledare, till syllens stift (158, 130) och till blindbottens stift (262, 126) |
| E2 | syll | blyerts-2 | ute, x 52–88, baslinje y 146; ledare till syllen vid (104, 130) |
| E3 | blindbotten | blyerts-2 | inne i bjälklagets isolering på lapp, x 440–560, baslinje y 104; kort ledare ner till blindbotten vid (500, 117) |
| E4 | plast | blyerts-2 | direkt ovanför plasten, x 470–516, baslinje y 289; ingen ledare |

Tecken utan mellanslag: 10 + 7 + 6 + 4 + 6 + 4 + 8 + 4 + 11 + 5 = 65. Tumstock `#e8b830` 65 procent bakom K1, roterad 1 till 2 grader; ingen annan markering. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

Texterna är hantverkarens och står redan i sidans frontmatter. Ändra dem inte.

- `aria-label` på roten, ordagrant `bildAlt`: "Krypgrund i genomskärning med hygrometern under blindbotten och fuktkvotsmätaren i syllen ovanför grundmuren."
- `bildtext` (sidan) har 600 till 800 mm, 5 till 10 cm, en meter, syllen, blindbottens undersida, 0,2 m och plast 0,30 mm. Bilden får inte visa ett tal som bildtexten eller sidan inte har.

## 7. Budget och kontroller

- Publicerad fil **under 28 kB, 28 672 byte** (1 kB = 1 024 byte). Källan under 10 kB.
- Ingen `<text>` i den publicerade filen, ingen `currentColor`, ingen `var(--`. Rotens `width` och `height` lika med viewBox 600 × 360.
- Kör och redovisa: `npm run illustrationer` (rapportera om den skriver någon annan fil än din; en annan illustratör kör samma skript för `el/snedtak-inifran` samtidigt, och dess fil får skrivas), `npx astro check --minimumSeverity error`, `node --experimental-strip-types --test scripts/test-illustration.mjs`, byte för båda filerna, `grep -c "<text"` på den publicerade. Rendera den publicerade filen och `krypgrund-sommarkondens.svg` till PNG i 343 px bredd med sharp till scratchpad och titta: känns grunden igen på en sekund, syns det att hygrometern hänger i luften och inte ligger på marken, går syllen och blindbotten att skilja, går alla etiketter att läsa, och ser bilden inte ut som sommarkondensskissen. **Kör inte `npm run build`**, committa inte.

## 8. Tillstånd

Ifyllt är det enda. En saknad fil eller fel mått ger byggfel i `Illustration.astro`, vilket är rätt. Bilden visas som huvudbild efter kortsvaret, 343 px på 375 px, och blir sidans delningsbild eftersom den ligger i `bild`.

## 9. Godkännande

UX och bygge rendrar på 343 px och granskar mot avsnitt 1–7 och DESIGN.md avsnitt 7. Därefter byter UX och bygge platshållaren i frontmatter mot `bild: ../../../assets/illustrationer/fukt/krypgrund-matning.svg` och rör ingen annan rad.

Godkänd av UX och bygge 2026-09-30, publicerad fil 27 339 byte. Godkända avvikelser: extra linje vid y 66 mellan golv och isolering; två ådringslinjer i syllen så att den skiljer sig från grundmuren; gallret tre streck vid x 100, 104 och 108; syllens stift en enhet ut förbi syllens insida. Inlagd i `fukt-i-krypgrund.mdx` som `bild`.

Ändrat 2026-09-30 efter att hantverkaren bekräftat etiketterna: M1 och M3 skrivs "5 till 10 cm" och "60 till 80 cm". För att filen skulle hålla budgeten är skrafferingen omskriven med relativa förflyttningar (`m12-10l10,10`). Bilden ser likadan ut. Publicerad fil 28 545 byte.
