# Spec: pelaren Badrum och köket som bara kök

UX och bygge-agenten, 2026-09-28, för bygget 2026-09-29. Underlaget är SEO och GEO-agentens beslut 1 och 2 i `docs/SOKORDSANALYS.md` avsnitt 8.9. Specen täcker registret, ikonen, typen, de två hubfilerna, rotavdragsräknarens pelare, ämnesraden, mobilmenyn och sidfoten, och vad budgeten tål när hubbarna publiceras.

Utvecklaren gissar ingenting. Står något inte här frågar hen innan hen bygger. Arbetaren kör inte `npm run build`; koordinatorn bygger, och jag mäter på bygget.

**Ordning:**
1. Hantverkaren skriver de sex texterna märkta TEXT SAKNAS (avsnitt 2 och 5). Illustratören ritar ikonen samtidigt (avsnitt 3).
2. Jag godkänner ikonen på 20, 24, 36 och 40 px (avsnitt 3.4).
3. Utvecklaren bygger avsnitt 2 till 9 i en commit. Ingenting committas förrän alla sex texterna står i filerna, eftersom `rad` syns på startsidan från första bygget (avsnitt 8.1).

---

## 0. Läget, mätt 2026-09-28

Mätt på `dist/client` från bygget 21:38 och med typsnittsfilerna i `public/fonts/`. Bredderna är glyfbredder utan kerning och kan skilja cirka 3 procent från webbläsaren.

**Publicerade hubbar i dag:** altan, el, fasad, fukt, golv, grund, inomhus (sju). Utkast: kok, tak, verktyg. Badrum blir det fjärde utkastet.

**Var registret syns:**

| Ställe | Fil | Vilka pelare | Påverkas av badrum som utkast |
|---|---|---|---|
| Startsidans ämnesrad | `src/components/ui/Amnesrad.astro` | alla i registret, opublicerade som dämpade kort med "Kommer" | **ja, genast**: elva kort i stället för tio |
| Sidhuvudets ämnesrad, desktop | `src/layouts/Bas.astro` rad 268 till 291 | bara publicerade | nej |
| Mobilmenyn | `Bas.astro` rad 222 till 265 | bara publicerade | nej |
| Sidfoten, Ämnen | `Bas.astro` rad 319 till 339 | bara publicerade | nej |
| `/amnen/` | `src/pages/amnen/index.astro` | publicerade som sektioner, övriga i raden "På väg" | ja, namnet läggs till i "På väg" |
| `/guider/` filterraden | `src/lib/guider.ts` rad 156 | pelare med minst en publicerad sida | nej |
| Brödsmulan och kortets metarad | `src/lib/innehall.ts` rad 70, `Artikelkort.astro` | `kort` | ja för kök: "Kök och bad" blir "Kök" på `/kok/slipa-bankskiva/` |

**Sidhuvudets ämnesrad, desktop** (`flex`, `overflow-x-auto`, länk = 12 + ikon 20 + 8 + text i 14 px + 12, 4 px mellan länkarna, "Alla ämnen" sist). Innerbredd 960 px vid 1024 och 1 088 px vid 1152 och bredare (sidbredd 72 rem minus `px-8`).

| Publicerade hubbar | Radens bredd | Ryms vid 1024 (960) | Ryms vid 1280 (1 088) |
|---|---|---|---|
| Sju, i dag | 769 | ja | ja |
| Nio, med tak och badrum | 951 | 9 px kvar, inom felmarginalen | ja |
| Tio, med kök | 1 030 | **nej** | ja |
| Elva, alla | 1 132 | **nej** | **nej, vid ingen bredd** |

När raden inte ryms rullar den i sidled inuti sig själv, och "Alla ämnen" hamnar utanför skärmen. Det är ett dolt innehåll och byggs bort här (avsnitt 8.2).

**Mobilmenyn, 375 px.** Radbredd 343 px. Längsta namnet, "Grund, källare och dränering", tar 236 px i 16 px plus ikon och mellanrum, 272 px. "Badrum och våtrum" tar 173 px. Menyn ligger absolut under sidhuvudet och växer nedåt; med elva hubbar blir den cirka 860 px hög och sidan rullar. Inget att ändra.

**Sidfoten.** En spalt på mobil, fyra från 1024 px med 216 px per spalt. Längsta namnet 175 px i 14 px. Elva namn plus två länkar är tretton rader. Inget att ändra.

**Startsidans ämnesrad.** I dag `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`. Tio kort ger 5 + 5 på desktop. Elva kort ger 5 + 5 + 1, ett ensamt kort på en tredje rad, och 2 × 5 + 1 på mobil. Kortets inre bredd vid 375 px är 133 px; etiketten "INSIDAN · KOMMER" tar 127 px och ryms, "Badrum" i kortrubrik 71 px.

**Budgeten.** Varje publicerad hubb lägger till tre poster på **varje** sida: mobilmenyn (178 byte med ikon), ämnesraden (cirka 160 byte med ikon) och sidfoten (cirka 50 byte). Cirka 390 byte per hubb och sida. Största sidan är `/fasad/mala-om-huset/` med 66 643 byte, 941 under taket 67 584. Följden står i avsnitt 9.

---

## 1. Vad som inte får ändras

- Slugen `kok` och alla adresser under `/kok/`. `/kok/slipa-bankskiva/` är publicerad.
- Ordningen i `PELARE` utöver att `badrum` sätts in direkt efter `kok`.
- `PELAREGRUPPER`, inklusive raden för `inne` ("Väggar, golv, kök och badrum.", som stämmer fortfarande).
- `RESERVERADE_ROTSLUGS`. `badrum` krockar inte med någon av dem eller med kategorierna `krysslaser` och `luftavfuktare` (kontrollerat).
- Ikonen `kok`. Diskbänken med kranen säger kök, och den behöver inte ritas om.
- Rotavdragsräknarens formel, test och sida. Bara `pelare` och kommentaren i registret ändras.
- `hubPublicerad`, `publicerade`, `pelareUrl` och logiken för vad som syns i menyerna. En hubb kommer in i sidhuvud, meny och sidfot genom `utkast: false`, aldrig genom en ändring i layouten.
- Mobilmenyn och sidfoten, utom att ikonen tappar sin klass (avsnitt 9.2).
- Ingen text utanför de sex fälten i avsnitt 2 och 5.

---

## 2. `src/lib/pelare.ts`

### 2.1 Raden `kok`

```ts
  {
    slug: 'kok',
    namn: 'Kök',
    kort: 'Kök',
    ikon: 'kok',
    grupp: 'inne',
    rad: 'TEXT SAKNAS',
  },
```

- `namn` och `kort` är SEO och GEO-agentens beslut, ordagrant.
- `rad`: **TEXT SAKNAS**, hantverkaren. En mening med punkt, högst åtta ord, som inte lovar våtrum. Innehållet är bänkskivor, luckor, kakel och vitvaror (8.9 beslut 1). Dagens rad, "Bänkskivor, våtrum, kakel och vitvaror.", står på startsidan nu och ska bort.

### 2.2 Ny rad `badrum`, direkt efter `kok`

```ts
  {
    slug: 'badrum',
    namn: 'Badrum och våtrum',
    kort: 'Badrum',
    ikon: 'badrum',
    grupp: 'inne',
    rad: 'TEXT SAKNAS',
  },
```

- `rad`: **TEXT SAKNAS**, hantverkaren. En mening med punkt, högst åtta ord, om våtrum, kakel, fogar och vad du får göra själv (8.9 beslut 1). Längdvillkor för ämneskortet vid 375 px: raden bryts fritt, men inget enskilt ord får vara bredare än 133 px i 14 px (i praktiken ett ord på högst 17 tecken; "våtrumsreglerna" ryms).

Ordningen blir tak, fasad, altan, grund, inomhus, golv, kok, badrum, fukt, el, verktyg. Grupperna blir fyra, fyra och tre.

### 2.3 Kommentaren överst

Raden `inne   väggar, golv, kök och bad` blir `inne   väggar, golv, kök, badrum`, och en rad läggs till efter stycket: `Badrum blev egen pelare 2026-09-28, docs/SOKORDSANALYS.md 8.9 beslut 1.`

`content.config.ts` bygger sitt enum ur `PELARE_SLUGS`, så `pelare: badrum` blir giltigt i frontmatter utan ändring där. Undermapparna `src/content/guider/badrum/` och `src/content/kunskap/badrum/` skapas **inte** här; de kommer med första sidan.

---

## 3. Ikonen `badrum`

### 3.1 Motiv

**Ett duschmunstycke på ett böjt rör, med strålar.** Duschen är våtzon 1, alltså det pelaren handlar om, och motivet går inte att förväxla med grannarna: `kok` är en skål med kran, `fukt` är en enda stor droppe, `inomhus` är ett rutnät av plattor. Därför inga kakelplattor (krockar med `inomhus`), inget badkar (en skål med kran, för likt `kok` vid 20 px) och inga droppformer (krockar med `fukt`); strålarna är korta raka streck.

Skiss i text, i ikonens 24 × 24-rutnät. Koordinaterna är riktmärken, illustratören ritar:

- **Röret:** lodrätt från golvet vid x 6, y 21,5 upp till y 6, böjer runt (en `Q`-kurva, inte ett skarpt hörn) till vågrätt vid y 3,5 och fortsätter till x 15.
- **Munstycket:** hänger under rörets slut, en platt skiva eller ett trapets som vidgas nedåt, cirka x 11,5 till 18,5 vid y 9, överkanten runt y 6,5 där röret möter.
- **Strålarna:** tre korta streck i en rad under munstycket (cirka y 11,5 till 14, vid x 12,5, 15 och 17,5), de yttre lite utåtlutade, och två streck i en andra rad förskjutna mellan dem (cirka y 16,5 till 19). Varje streck minst 2,5 enheter långt och minst 2,5 enheter från nästa, annars flyter de ihop vid 20 px.
- **Golvet:** en linje från x 2,5 till x 21,5 vid y 21,5, med ikonernas darr (`Q` med 0,4 till 0,5 enheters böj). Röret står på den.

Högst fem separata streckgrupper. Inga fyllda ytor.

### 3.2 Stil och mått, som de befintliga pelarikonerna

Kopiera attributen ordagrant från `ikon-kok`:

```svg
<symbol id="ikon-badrum" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
```

- Allt ritat inom x 2 till 22 och y 2 till 22, som de andra.
- Långa linjer med lätt darr (`Q` i stället för `L`, som golvlinjerna i `ikon-golv` och `ikon-altan`), små överskjut i hörnen.
- `currentColor`, aldrig en hexfärg. Spriten är den enda filen där det gäller; färgen sätts av `text-blyerts` eller `text-blyerts-2`.
- Ingen `<text>`, ingen `<title>`, inga `id` inuti symbolen.
- Symbolen läggs direkt efter `ikon-kok` i `src/assets/brand/riktning-1/ikoner.svg`, med en kommentar på en rad: `<!-- Badrum, ritad 2026-09-29 när badrum blev egen pelare: duschen, eftersom kakel är inomhus och en skål är kök. -->`
- Filkommentaren överst: "16 ikoner" blir "21 ikoner" (det är 20 i dag, kommentaren var fel).

### 3.3 Storlekarna den visas i

20 px (sidhuvudets ämnesrad), 24 px (mobilmenyn, artikelkortets tomma blad i kompakt läge), 32 px (hubbens H1, `/amnen/`), 36 px (startsidans ämneskort), 40 px (artikelkortets tomma blad).

### 3.4 Så godkänner jag den

Illustratören levererar, utöver spriten, en PNG i scratchpad (inte i projektet) som `sharp` rendrar från spriten: raderna `kok`, `badrum`, `fukt`, `inomhus` bredvid varandra, i 20, 24, 36 och 40 px, i `#2a2521` på `#f5efe3`, och samma rad i `#625a50` (blyerts-2) på `#ebe2cf` (papper-2) för det dämpade kortet. Jag tittar på den och frågar:
- Förstår man "dusch" vid 20 px innan man läst ordet bredvid?
- Är den skild från `kok` och `fukt` på en armlängds avstånd?
- Har strålarna flutit ihop vid 20 px?
- Är linjen lika tung som grannarnas?

Filen ska vara under 7 kB efter tillägget (6 383 byte i dag).

---

## 4. `src/components/ui/Ikon.astro`

`IkonNamn` får `| 'badrum'` på raden efter `| 'kok'`. Inget annat i filen ändras utom klassen i avsnitt 9.2.

Registret har `satisfies readonly { … ikon: IkonNamn … }[]`, så `astro check` stoppar en registerrad utan typen. Att symbolen finns i spriten kontrollerar ingenting i dag; en saknad symbol ger en tom ruta utan fel. Det täpps till i avsnitt 7.2.

---

## 5. Hubfilerna

### 5.1 `src/content/pelare/badrum.mdx` (ny)

Samma form som `tak.mdx`, fält för fält:

```mdx
---
title: Badrum och våtrum
description: TEXT SAKNAS
ingress: TEXT SAKNAS
uppdaterad: [datumet för commiten, ÅÅÅÅ-MM-DD]
# Hubben är ett galleri som mallen bygger av frontmatter i artiklarna: Hitta felet,
# Välj rätt, Gör det själv och Räkna. Ingen handskriven text här, se docs/DESIGN.md 5.2.
utkast: true
---
```

- `title`: SEO och GEO-agentens beslut, ordagrant.
- `description`: **TEXT SAKNAS**, hantverkaren. 120 till 155 tecken. Ska nämna tätskiktet, kaklet, fogarna och gränsen för vad du får göra själv (8.9 beslut 1).
- `ingress`: **TEXT SAKNAS**, hantverkaren. En till två meningar, som i de andra hubbarna.
- Ingen `seoTitle`, inga `viktiga`, ingen brödtext under frontmatter.

### 5.2 `src/content/pelare/kok.mdx`

- `title`: `Kök och badrum` blir `Kök`.
- `description`: **TEXT SAKNAS**, hantverkaren. 120 till 155 tecken. Får inte lova våtrum eller tätskikt; innehållet är bänkskivor, luckor, kakel och vitvaror.
- `ingress`: **TEXT SAKNAS**, hantverkaren. Dagens ingress nämner tätskiktet i våtrum och ska skrivas om.
- `uppdaterad`: datumet för commiten.
- `utkast: true` står kvar, och kommentaren står kvar.

---

## 6. `src/lib/kalkyl/register.ts`, räknaren `rotavdrag`

```ts
    /* Fem pelare, inte åtta. Christians beslut 2026-09-20: rot gäller förvisso
       arbete i varje pelare där man anlitar någon, men ett verktyg som står i
       åtta hubbars grupp Räkna står ingenstans. De som valdes är de där notan
       oftast är stor nog att taket biter: grunden, golvet, köket och badrummet,
       och el och energi. Badrummet låg då i kok och flyttade till egen pelare
       2026-09-28 (docs/SOKORDSANALYS.md 8.9 beslut 2); beslutet följde med.
       Tak läggs inte till: takbytesräknaren räknar rot själv. */
    pelare: ['grund', 'golv', 'kok', 'badrum', 'el'],
```

Ordningen i listan följer `PELARE`. Första posten (`grund`) styr etiketten på `/rakna/` och ändras inte. Rotavdragsräknaren syns i badrumshubbens grupp Räkna först när huben publiceras. Kontrollen på rad 171 till 180 i `scripts/kontrollera-innehall.ts` stoppar bygget om `badrum` saknas i registret, så registerraden och den här ändringen hör till samma commit.

`pelare?: readonly string[]` i typen `Kalkylator` rörs inte här.

---

## 7. Kontrollskriptet, `scripts/kontrollera-innehall.ts`

Två nya fel, båda stoppar bygget:

### 7.1 TEXT SAKNAS

Varje fil under `src/` (`.ts`, `.astro`, `.md`, `.mdx`) som innehåller strängen `TEXT SAKNAS` ger fel: `[sökväg]: innehåller TEXT SAKNAS, texten skrivs av hantverkaren före bygget`. Skälet: `rad` syns på startsidan fast pelaren är utkast, och en platshållare får aldrig nå bygget. Specfiler i `docs/` omfattas inte.

### 7.2 Pelarikonen finns i spriten

För varje post i `PELARE`: `src/assets/brand/riktning-1/ikoner.svg` innehåller `id="ikon-[ikon]"`. Annars fel: `src/lib/pelare.ts: pelaren "[slug]" har ikonen "[ikon]" som saknas i ikoner.svg`. Läses som text, ingen SVG-tolk.

Kör `npm run kontrollera` både med och utan felet (lägg tillfälligt in `TEXT SAKNAS` i en kopia och byt en ikon till ett namn som inte finns) och rapportera att båda stoppar. Återställ efteråt.

---

## 8. Layouten

### 8.1 Startsidans ämnesrad, `src/components/ui/Amnesrad.astro`

Elva kort syns från första bygget, badrum som dämpat kort med "Insidan · Kommer".

**Ändring 1, fyra kolumner på desktop.** `lg:grid-cols-5` blir `lg:grid-cols-4`. Elva kort blir 4 + 4 + 3, och raderna blir grupperna: Utsidan, Insidan, Hela huset. Det är också vad `docs/DESIGN.md` avsnitt 5.1 och 6 redan säger; koden hade gått ifrån dokumentet. Kortets inre bredd vid 1024 px blir 193 px, och alla etiketter och namn står på en rad.

**Ändring 2, inget ensamt kort på mobil.** Med två kolumner blir elva kort 5 rader och ett ensamt kort. Det sista kortet spänner över båda kolumnerna när det står på en udda plats, bara under `sm`:

```
[&>li:last-child:nth-child(odd)]:col-span-2 sm:[&>li:last-child:nth-child(odd)]:col-span-1
```

på `<ul>`. Från `sm` (tre kolumner, 3 + 3 + 3 + 2) och `lg` (4 + 4 + 3) gäller vanliga celler. Ett hål nere till höger på kartan över sajten läses som att något saknas.

**Kommentaren överst** skrivs om: "Fyra kolumner från 1024 px, tre från 640, två under. Elva ämnen blir tre rader på desktop, en per grupp, och sex på mobil, där det sista kortet tar hela bredden." Resten av kommentaren står kvar.

Ingenting annat i komponenten ändras: ikonstorlek 36, `gap-3 lg:gap-5`, etiketter, "Kommer".

### 8.2 Sidhuvudets ämnesrad, `src/layouts/Bas.astro` rad 271

`overflow-x-auto` blir `flex-wrap`. Raden bryts till en andra rad när hubbarna inte längre ryms, i stället för att rulla i sidled med "Alla ämnen" utanför skärmen. `li.ml-auto` håller "Alla ämnen" mot högerkanten på sista raden.

- I dag (sju hubbar, 769 px) ändras ingenting synligt.
- Med tak och badrum (951 px) ryms raden vid 1024 px med 9 px marginal; blir den för bred i webbläsaren bryts "Alla ämnen" ensam till rad två och står till höger. Godtaget.
- Med kök (1 030 px) blir det två rader vid 1024 till 1151 px, med alla elva två rader på alla bredder. Sidhuvudet blir 44 px högre på desktop. Godtaget: det är statiskt och ger ingen layoutförskjutning.

Kommentaren ovanför (`{/* Ämnesraden. Bara på desktop; … */}`) får tillägget: "Raden bryts när hubbarna inte ryms, aldrig sidledsrullning."

### 8.3 Mobilmenyn och sidfoten

Inga ändringar utom ikonklassen i 9.2. Måtten i avsnitt 0 visar att båda klarar elva pelare vid 375 och 1024 px.

---

## 9. Budgeten

### 9.1 Vad publiceringarna kostar

Taket är 67 584 byte per sida, i bygget sedan 2026-09-28. Varje publicerad hubb kostar cirka 390 byte på varje sida. Uppskattat på `/fasad/mala-om-huset/` (66 643 byte i dag), efter 9.2:

| Läge | Byte | Kvar till taket |
|---|---|---|
| I dag | 66 643 | 941 |
| Efter 9.2 | cirka 66 340 | cirka 1 240 |
| Plus badrum och tak publicerade | cirka 67 020 | cirka 560 |
| Plus kök | cirka 67 340 | cirka 240 |
| Plus verktyg | cirka 67 670 | **över** |

Utan 9.2 går sidan över när kökshuben publiceras. Med 9.2 håller den för badrum, tak och kök, men marginalen efter köket är en mening. Verktygshuben kräver mer, och det specar jag när den får en plats i kön. Nästa sida, `/grund/inreda-kallare/` med 66 046 byte, har cirka 600 byte mer marginal.

### 9.2 Ikonen utan klass

`Ikon.astro` skriver `class="shrink-0"` på varje ikon, 18 gånger på den största sidan. Klassen tas bort ur `class:list` och ersätts av en regel i `@layer components` i `src/styles/global.css`:

```css
  /* Ikonerna ur spriten krymper aldrig i en flexrad. Förut en klass på varje ikon. */
  svg:has(> use) {
    flex-shrink: 0;
  }
```

`<use>` finns bara i `Ikon.astro` (kontrollerat med sökning i `src/`), så regeln träffar bara ikonerna. Ingen ikon har i dag en egen `shrink`-klass som skulle krocka. `class`-propen står kvar för färg och storlek (`text-blyerts`, `sm:size-10`). Sparar 17 byte per ikon, cirka 300 byte på den största sidan i dag och cirka 440 med elva hubbar.

Krav: 0 pixlar olika på 375 och 1280 px på startsidan, `/fasad/mala-om-huset/`, `/rakna/rotavdrag/` och en hubb, med mobilmenyn öppen på 375.

### 9.3 Grind vid publicering

Detta gäller koordinatorn när en hubb får `utkast: false`, inte den här commiten: `npm run build` ska vara grönt med `scripts/budget-html.mjs` sist, och `node scripts/budget-html.mjs --preview http://localhost:4321` ska visa räknarna under taket. Räknarna mäts inte i bygget och bär samma skal. Rött är retur till mig, inte ett nytt undantag.

---

## 10. Tillstånden

| Läge | Startsidans ämnesrad | Sidhuvud desktop | Mobilmeny | Sidfot | `/amnen/` |
|---|---|---|---|---|---|
| **Efter den här commiten** (badrum och kök utkast) | elva kort, 4 + 4 + 3 på desktop, badrum och kök dämpade med "Kommer", sista kortet i full bredd på mobil | som i dag, sju hubbar | som i dag | som i dag | "På väg" räknar upp Tak och vind, Kök, Badrum och våtrum, Verktyg och maskiner |
| **Badrum och tak publicerade** | två kort blir länkar med antal sidor | nio hubbar, en rad vid 1024 (9 px marginal) | Utsidan fem, Insidan fem (utan kök), Hela huset två | nio namn | två nya sektioner |
| **Alla elva publicerade** | alla länkar | två rader på alla desktopbredder | 4 + 4 + 3 under grupprubrikerna, cirka 860 px hög | elva namn | elva sektioner, ingen "På väg" |
| **Fel: ikon saknas i spriten** | stoppas i bygget (7.2) | | | | |
| **Fel: TEXT SAKNAS kvar** | stoppas i bygget (7.1) | | | | |

Rutnätet vid 375 px, elva kort: kolumnerna 2 × 165 px med 12 px mellan, sex rader, cirka 960 px hög, en rad mer än i dag.

---

## 11. Filer

Får röras:
- `src/lib/pelare.ts`
- `src/assets/brand/riktning-1/ikoner.svg`
- `src/components/ui/Ikon.astro`
- `src/content/pelare/badrum.mdx` (ny)
- `src/content/pelare/kok.mdx`
- `src/lib/kalkyl/register.ts` (bara posten `rotavdrag`)
- `src/components/ui/Amnesrad.astro`
- `src/layouts/Bas.astro` (bara `ul` i ämnesraden på rad 271 och kommentaren ovanför)
- `src/styles/global.css` (bara regeln i 9.2)
- `scripts/kontrollera-innehall.ts` (bara 7.1 och 7.2)

Får inte röras: allt annat, särskilt innehållsfilerna under `src/content/guider/` och `src/content/kunskap/`, `content.config.ts` och räknarnas formler och tester.

---

## 12. Kontroller (utvecklaren)

1. `npx astro check --minimumSeverity error`: 0 fel.
2. `npm run kontrollera`: 0 fel, plus provet i 7 att båda nya felen stoppar.
3. `node --experimental-strip-types --test scripts/test-kalkyl-rotavdrag.mjs`: grönt. Testet läser inte registret; det körs för att visa att formeln är orörd.
4. `npm run dev` och titta på startsidan vid 375, 640, 1024 och 1280 px: elva kort, rätt raduppdelning, badrum med ikon, sista kortet i full bredd bara vid 375.
5. Pixeljämförelsen i 9.2.
6. Leverans: filerna, resultaten, PNG:en med ikonerna (3.4), och en rad om det du var osäker på.

Bygget körs av koordinatorn.

---

## 13. Dokumenten (jag, i samma commit som koden)

Dokumenten har gått ifrån koden sedan omläggningen 2026-09-17 på fler ställen än de som den här ändringen rör. Jag rättar det som rör pelarna och ämnesraden:

- `docs/ARKITEKTUR.md` rad 136: `[pelare].md` blir `[pelare].mdx`, och `/badrum/` läggs i listan över pelare. Rad 147: pelarlistan blir registrets elva slugs. Rad 190: stycket om `MAX_HUBBAR_I_MENY` ersätts av hur `Bas.astro` gör i dag (alla publicerade hubbar i ämnesraden, som bryts i stället för att rulla).
- `docs/DESIGN.md` 4 Huvudmeny och Mobilmenyn (rad 185 och 187), 5.1 Ämnesrad, 6 Ikoner (21 ikoner, badrum bland pelarikonerna, storlekarna i 3.3) och 6 Ämneskort (elva, fyra kolumner, tre rader, sista kortet i full bredd på mobil), och "åtta ämnen" i avsnitt 8.
- `docs/SPEC-SIDMALLAR.md` rad 73 (sidhuvudet), rad 270 (ämnesraden, fyra kolumner och ikonen i 36 px som koden har) och rad 1089 (rotavdraget i fem pelare).

`docs/INNEHALLSARKITEKTUR.md` avsnitt 1 och 2 är SEO och GEO-agentens.

---

## 14. Godkännande (jag)

1. Ikonen mot 3.4, före bygget.
2. Koden mot specen, rad för rad i diffen.
3. På bygget: `astro check`, `kontrollera`, script-taggar 0 och `budget-html.mjs` grönt med `--preview`.
4. Startsidan vid 375 och 1024 px, tabbat med tangentbord: de dämpade korten tar inget fokus, de publicerade får fokusringen runt kortet.
5. Brödsmulan på `/kok/slipa-bankskiva/` säger "Kök".

"Godkänd av UX och bygge" när listan är tom.

---

## 15. Utanför den här specen

- **Hantverkaren:** de sex texterna. Och raden "På väg" på `/amnen/` (`src/pages/amnen/index.astro` rad 105 och 106), som sätter ihop namnen med kommatecken: "Tak och vind, Kök, Badrum och våtrum, Verktyg och maskiner". Hantverkaren avgör om den läses rätt med tre "och" i rad.
- **SEO och GEO-agenten:** `docs/INNEHALLSARKITEKTUR.md`. Brödsmulan och `BreadcrumbList` på `/kok/slipa-bankskiva/` byter "Kök och bad" mot "Kök" automatiskt; filterknappen på `/guider/` gör detsamma.
- **Verktygshuben:** budgeten räcker inte för den (9.1). Egen spec när den får plats i kön.
- **Typen på `pelare` i `Kalkylator`** kunde vara `PelareSlug[]` i stället för `string[]`. Kontrollskriptet fångar redan felet, så det görs inte här.
