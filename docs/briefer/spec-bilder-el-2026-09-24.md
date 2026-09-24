# Spec: huvudbilder till de tre elsidorna

Datum 2026-09-24. Ägare UX och bygge. Ritas av `utvecklare`. Etiketterna godkänns av hantverkaren, `bildtext` och `bildAlt` skrivs av hantverkaren.

Gäller `/el/jordfelsbrytare-loser-ut/`, `/el/u-varde/` och `/el/byta-elcentral/`. Underlaget är SEO-returen `docs/briefer/retur-el-2026-09-23-seo.md` (punkt 1 och 2) och checklistan `docs/briefer/seo-checklista-2026-09-23/el.md` avsnitt 8 för varje sida.

## 0. Det som gäller alla tre

**Regelverket.** DESIGN.md avsnitt 7, "Skisserna", ordagrant. Förebild för handen är `src/assets/illustrationer-kallor/el/vind-bjalklag.svg`: kopiera dess `<defs>`, papper, marginallinje, gruppindelning per lager och textgrupp. Läs den innan du ritar.

**Duk.** `viewBox="0 0 600 360"`, `width="600" height="360"`. Papperet är mönstret `linjerat` (48 × 24, `#f5efe3` med linje `#c9bca3` 0,75 px vid y 23,5). Marginallinjen `M40,0 V360` i `#ad3519`, 0,75 px, `stroke-opacity="0.35"`. Inget ritas till vänster om x 56 eller till höger om x 560.

**Färger, bara de här hexvärdena.** papper `#f5efe3`, linje `#c9bca3`, blyerts `#2a2521`, blyerts-2 `#625a50`, penna `#ad3519`, tumstock `#e8b830`. Inget `currentColor`, inget `var()`.

**Lager, en linjebredd per lager, en `<g>` per lager med kommentar.**

| Lager | Färg | Bredd | Används till |
|---|---|---|---|
| Föremål | blyerts | 2 | centraler, moduler, spakar, väggens skikt |
| Skraffering | blyerts-2 | 1,25 | bara isoleringen i bild 2: 10 px snedstreck, 45 grader, 22 px emellan |
| Pekare och byglar | blyerts-2 | 1,5 | ledlinjer från etikett till föremål, måttbygeln i bild 2, brytlinjerna i bild 2 |
| Vindskydd | blyerts-2 | 3,5 | bara vindskyddet i bild 2, som ångspärren i förebilden |
| Snickarpennan | penna | 2,5 | den enda saken som pekar, se varje bild |

Alla streck `stroke-linecap="round" stroke-linejoin="round"`, `fill="none"`. Raka linjer är kvadratiska kurvor med kontrollpunkten förskjuten 1 till 3 procent av linjens längd, och hörn skjuter över 2 till 4 px. Ingen fyllning utom papperslappar i `#f5efe3` bakom text och den gula markeringen.

**Handskrift.** En `<g font-family="'Caveat', 'Segoe Print', cursive" font-weight="500" font-size="24">` sist i filen. Alla etiketter 24 px, inga undantag till 22 i de här bilderna eftersom de också blir delningsbilder i 560 px. Färgen står per etikett i tabellerna nedan. Koordinaterna är baslinjens vänsterkant. Caveat 500 i 24 px är omkring 9,5 px per tecken; får en etikett inte plats på sin plats med minst 12 px luft till grannen får den flyttas högst 12 px i sidled, annars går den tillbaka till mig.

**Nyckeltalet.** `<rect fill="#e8b830" fill-opacity="0.65">`, roterad −1,5 grader kring sin mitt, 4 px luft runt talet åt alla håll, bakom texten och ingenting annat. Texten ovanpå är blyerts.

**Filerna.** Källan med `<text>` i `src/assets/illustrationer-kallor/el/[namn].svg`. `npm run illustrationer` skriver den publicerade i `src/assets/illustrationer/el/[namn].svg`. Filen börjar med `role="img"` och en `aria-label` som beskriver bilden (som i förebilden), och en kommentar med lagren, skalan och tokens.

**Inga människor, inga händer, inga verktyg, inga produktnamn eller märken på centralerna.**

## 1. `jordfelsbrytare-spak.svg`, till `/el/jordfelsbrytare-loser-ut/`

**Vad bilden ska säga på en sekund.** Så här ser centralen ut när jordfelsbrytaren har löst ut, och det här är spaken du för upp. Sidans första steg och kortsvarets första mening.

**Motivet.** En elcentral rakt framifrån med en rad moduler bakom frontplåten. Från vänster: huvudbrytaren, jordfelsbrytaren och sju automatsäkringar. Huvudbrytaren och alla automatsäkringar har spaken uppe (tillslagna). Jordfelsbrytaren har spaken nere (utlöst). Det är just det läget läsaren står framför.

**Geometrin.**

| Del | Koordinater | Detaljer |
|---|---|---|
| Frontplåten | rektangel x 72 till 548, y 96 till 262 | blyerts, hörnen skjuter över |
| Huvudbrytaren | modul x 96 till 160, y 132 till 228 | spakhus x 118 till 138, y 144 till 220; spaken uppe, rektangel x 121 till 135, y 148 till 174 med två korta greppstreck |
| Jordfelsbrytaren | modul x 172 till 300, y 132 till 228 | spakhus x 196 till 216, y 144 till 220; spaken nere, rektangel x 199 till 213, y 190 till 216 med två greppstreck; testknappen kvadrat x 262 till 290, y 140 till 168 med handskrivet "T" i blyerts vid x 271, y 162 |
| Automatsäkringarna | sju moduler à 32 px, x 312 till 536, y 132 till 228 | i varje: spakhus 12 × 56 centrerat, y 150 till 206; spaken uppe, 8 × 20, y 154 till 174 |
| Nyckeltalet | "30 mA" vid x 242, y 214, på jordfelsbrytarens front | gul rektangel x 238 till 294, y 194 till 220 |

Ingen DIN-skena, ingen kapsling runt plåten, inga kablar. Allt under 8 px stryks.

**Snickarpennan, det enda som pekar.** En pil i spakhuset från spakens överkant rakt upp: kurva från (206, 186) till (206, 152), pilspets två streck på 10 px i ±35 grader. En öppen ring runt spakhuset: ellips med mitten (206, 182), rx 30, ry 48, som inte sluter (öppningen 20 till 30 grader uppe till höger). Ett kort streck från ringens överkant till etiketten, (212, 134) till (206, 84). Inget annat i penna. En markerad grupp ritas inte; det vore en andra sak som pekar, och den hör hemma i en egen bild om sidan behöver den.

**Etiketterna.** Förslag med ord ur sidan; hantverkaren godkänner.

| Text | Färg | Plats (x, y) | Ledlinje, blyerts-2 1,5 | Ordet står på sidan |
|---|---|---|---|---|
| för upp spaken | penna | 150, 74 | pennstrecket ovan | kortsvaret rad 11 och rad 54 |
| testknapp | blyerts-2 | 318, 74 | (322, 80) till (291, 140) | H2 rad 114, "testknappen" |
| jordfelsbrytaren | blyerts | 196, 300 | (240, 280) till (240, 232) | genomgående |
| automatsäkringar, | blyerts | 372, 300 | (440, 280) till (440, 232) | rad 62 |
| en per grupp | blyerts | 396, 330 | ingen | rad 63, "grupp" |
| huvudbrytare | blyerts-2 | 60, 334 | (120, 314) till (128, 232) | **nej**, se nedan |
| T | blyerts | 271, 162 | ingen | rad 116, "Knappen märkt T" |
| 30 mA | blyerts, på gul | 242, 214 | ingen | rad 106 |

"huvudbrytare" finns inte i sidans text men krävs av SEO-checklistan (läsaren ska se vilket reglage som är vilket, och det är huvudbrytaren en stressad läsare drar i av misstag). Hantverkaren väljer: behåll etiketten och nämn huvudbrytaren i texten, eller stryk etiketten och låt modulen stå kvar utan namn.

**Frontmatter** i `src/content/guider/el/jordfelsbrytare-loser-ut.mdx`, efter `kortSvar`:

```yaml
bild: ../../../assets/illustrationer/el/jordfelsbrytare-spak.svg
bildtext: "…"   # hantverkaren: 30 mA och testknappen nämns här (SEO punkt 1)
bildAlt: "…"    # hantverkaren: högst 125 tecken, med orden "jordfelsbrytare" och "elcentral"
```

## 2. `u-varde-vagg.svg`, till `/el/u-varde/`

**Vad bilden ska säga på en sekund.** Värmen går genom väggens skikt, varje skikt bromsar lite, motstånden läggs ihop och U-värdet är 1 delat med summan. Räkneexemplet på rad 154 till 162, steg 1 till 5, ska gå att följa i bilden tal för tal.

**Motivet.** Snitt genom sjuttiotalets regelvägg i facket mellan två reglar, inne till vänster och ute till höger. Från vänster: 13 mm gips, 120 mm mineralull, vindskydd, luftspalt, panel. Skikten är inte skalenliga (skriv det i kommentaren), men ordningen och att ullen är det tjockaste skiktet stämmer.

**Geometrin.**

| Del | Koordinater | Detaljer |
|---|---|---|
| Väggens höjd | y 80 till 240 | brytlinje i blyerts-2 1,5 upptill och nedtill, sicksack med 4 toppar, x 144 till 402 |
| Gipsen | x 150 till 166 | två blyertslinjer, ingen skraffering |
| Ullen | x 166 till 330 | skrafferad (se lagren), med glapp i skrafferingen y 138 till 162 där pennpilen går, och papperslapp x 196 till 304, y 196 till 222 bakom etiketten |
| Vindskyddet | x 333 | blyerts-2 3,5 px, y 80 till 240 |
| Luftspalten | x 336 till 376 | tom |
| Panelen | x 376 till 396 | två blyertslinjer |
| Bygeln över det som inte räknas | y 60, x 330 till 398 | blyerts-2 1,5, ändstreck ner till y 68 |
| Nyckeltalet | "0,281" i rad två nedan | gul rektangel bakom talet, bara talet |

**Snickarpennan, det enda som pekar.** Värmen på väg ut: en enda pil från (64, 150) till (540, 150) genom alla skikt, kontrollpunkten förskjuten högst 8 px, pilspets två streck på 14 px i ±35 grader. Pilen är den enda linjen som får gå över bygelns och skiktens linjer; den är inte avbruten. Ingen etikett i penna.

**Etiketterna.** Talen är sidans egna, med tre decimaler som i exemplet.

| Text | Färg | Plats (x, y) | Ledlinje, blyerts-2 1,5 | Ur sidan |
|---|---|---|---|---|
| räknas inte | blyerts-2 | 314, 44 | bygeln | rad 154 |
| gips | blyerts | 108, 56 | (150, 54) till (158, 84) | rad 154 |
| inne | blyerts | 72, 120 | ingen | rad 68 |
| ute | blyerts | 470, 120 | ingen | rad 68 |
| 120 mm ull | blyerts | 200, 216 | ingen, på papperslappen | rad 154 |
| 0,130 | blyerts-2 | 64, 290 | ingen, står under inne | steg 1 |
| + | blyerts-2 | 118, 290 | | |
| 0,054 | blyerts-2 | 138, 290 | (160, 272) till (158, 244) | steg 2 |
| + | blyerts-2 | 200, 290 | | |
| 3,243 | blyerts-2 | 224, 290 | (248, 272) till (248, 244) | steg 3 |
| + | blyerts-2 | 298, 290 | | |
| 0,130 | blyerts-2 | 334, 290 | (356, 272) till (356, 244) | steg 4 |
| = 3,557 | blyerts-2 | 392, 290 | ingen | steg 5 |
| U = 1 / 3,557 = 0,281 | blyerts, "0,281" på gul | 200, 334 | ingen | steg 5 |

Talen ändras aldrig i bilden utan att sidans exempel ändras först; ändras exemplet ritas raden om. Hela väggens 0,36 står inte i bilden. Den är en annan räkning (rad 166 till 170) och hör hemma i bildtexten.

**Frontmatter** i `src/content/kunskap/el/u-varde.mdx`, efter `kortSvar`:

```yaml
bild: ../../../assets/illustrationer/el/u-varde-vagg.svg
bildtext: "…"   # hantverkaren: talen, att det är facket mellan reglarna, och att hela väggen blir 0,36
bildAlt: "…"    # hantverkaren: högst 125 tecken, med "U-värde" och "vägg"
```

## 3. `elcentral-proppskap.svg`, till `/el/byta-elcentral/`

**Vad bilden ska säga på en sekund.** Till vänster ett proppskåp utan jordfelsbrytare, till höger en elcentral med automatsäkringar och jordfelsbrytare. Läsaren ser vilken av dem hen har hemma och vad den gamla saknar.

**Motivet.** Två centraler bredvid varandra, rakt framifrån, lika stora.

**Geometrin.**

| Del | Koordinater | Detaljer |
|---|---|---|
| Proppskåpet | låda x 64 till 288, y 64 till 262 | blyerts |
| Propphuvarna | två rader om fyra, mitt x 104, 152, 200, 248 och y 128, 200 | yttercirkel r 20, inre cirkel r 8 (skyddsglaset, igenkänningstecknet); cirklarna ritas som två bågar med 2 till 3 px överskjut, inte som perfekta `<circle>` |
| Elcentralen | låda x 316 till 544, y 64 till 262 | blyerts |
| Jordfelsbrytaren | modul x 332 till 428, y 96 till 160 | spakhus x 346 till 362, y 106 till 152, spaken uppe y 110 till 128; testknapp kvadrat x 398 till 418, y 104 till 124, utan T |
| Automatsäkringar rad 1 | fyra moduler à 24 px, x 436 till 532, y 96 till 160 | spakhus 8 × 44, spaken uppe 8 × 16 |
| Automatsäkringar rad 2 | åtta moduler à 24 px, x 332 till 524, y 184 till 248 | som rad 1 |

Ingen pil mellan centralerna, inget "före" och "efter". Bredvid varandra räcker.

**Snickarpennan, det enda som pekar.** En öppen ring runt jordfelsbrytaren i den nya centralen: ellips med mitten (380, 128), rx 58, ry 44, öppning uppe till höger. Ett kort streck från ringens överkant (384, 84) till etiketten (392, 54).

**Etiketterna.**

| Text | Färg | Plats (x, y) | Ur sidan |
|---|---|---|---|
| jordfelsbrytare | penna | 332, 46 | rad 84 |
| proppskåp | blyerts | 133, 298 | H1 |
| utan jordfelsbrytare | blyerts | 81, 330 | rad 84, "Det finns ingen jordfelsbrytare" |
| elcentral med | blyerts | 370, 298 | H1 |
| automatsäkringar | blyerts | 356, 330 | H1 |

**Nyckeltal: inget.** Beslut av UX och bygge. Bildens jobb är att läsaren känner igen sin central, och inget tal svarar på det. Priset och årtalet 1996 står i texten och i bildtexten. Att sätta "30 mA" på jordfelsbrytaren här vore samma gula tal som i bild 1 på grannsidan. Avsnitt 7 tillåter ett nyckeltal per bild men kräver det inte.

**Frontmatter** i `src/content/guider/el/byta-elcentral.mdx`, efter `kortSvar`:

```yaml
bild: ../../../assets/illustrationer/el/elcentral-proppskap.svg
bildtext: "…"   # hantverkaren: årtalet 1996 och märkningen (SEO-checklistan avsnitt 8)
bildAlt: "…"    # hantverkaren: högst 125 tecken, med "elcentral" och "proppskåp"
```

## 4. Hur sidan använder bilden

Inget i koden ändras. `bildAlt` finns redan i schemat (`src/content.config.ts` rad 89 till 91, `max(125)`) och används av `src/components/vyer/Artikel.astro` rad 188 och 198 före `bildtext`. Bilden renderas som `<img>` med `fetchpriority="high"` direkt under kortsvaret och är sidans LCP på mobil, så vikten räknas. `npm run delningsbilder` tar samma skiss till `public/og/guider-[slug].png` och `public/og/kunskap-u-varde.png` i 560 px bredd; det är ytterligare ett skäl till 24 px.

Ordningen:

1. Utvecklaren ritar de tre källorna och kör `npm run illustrationer`. Inte `npm run build`.
2. UX och bygge rendrar i 343 px och 600 px och godkänner eller returnerar.
3. Hantverkaren godkänner etiketterna och skriver `bildtext` och `bildAlt`. Ändras en etikett ska den rymmas på samma plats (tecken gånger 9,5 px, minst 12 px till grannen); annars tillbaka till mig.
4. Frontmatter läggs in, `npm run kontrollera` och bygget körs av koordinatorn.

## 5. Vad utvecklaren får röra

Skapa: de tre källorna under `src/assets/illustrationer-kallor/el/` och de tre konverterade under `src/assets/illustrationer/el/`, som skriptet skriver. Inget annat. Inga `.mdx`, inga komponenter, inget skript, ingen `package.json`. Rör inte `vind-bjalklag.svg` eller `vind-takfot.svg`.

## 6. Godkännandekriterier

Bilden godkänns först när alla punkter håller. En enda som inte håller är retur.

1. **Handskrift minst 24 px.** Varje `<text>` i källan har `font-size` 24 (ärvt från gruppen). Ingen 22, ingen `transform: scale` på text.
2. **Under 40 kB efter konvertering.** Mätt på filen i `src/assets/illustrationer/el/`. Mål under 30 kB, eftersom bilden är LCP. Ingen `<text>` kvar i den publicerade filen.
3. **Läsbar på 343 px.** Rendrad i 343 px bredd går varje etikett och varje tal att läsa utan zoom, spakens läge i bild 1 syns (nere mot uppe), skyddsglaset i propphuvarna syns i bild 3, och inget blir gröt. Det som blir gröt stryks.
4. **En sak som pekar.** Bara ett element i penna per bild utöver en penna-etikett: spakens pil och ring i bild 1, värmepilen i bild 2, ringen i bild 3. Räknat på alla `stroke="#ad3519"` och `fill="#ad3519"` utom marginallinjen.
5. **Inga människor**, inga händer, inga verktyg, inga märken.
6. **Tokens.** Bara de sex hexvärdena i avsnitt 0. `grep -o '#[0-9a-fA-F]\{6\}'` på filen ger inget annat.
7. **Ett nyckeltal** i bild 1 (30 mA) och bild 2 (0,281), inget i bild 3. Den gula rektangeln ligger bara bakom talet.
8. **Talen i bild 2** är exakt 0,130, 0,054, 3,243, 0,130, 3,557 och 0,281, samma som steg 1 till 5 på sidan.
9. **Linjer.** En bredd per lager enligt tabellen, inga perfekt raka linjer, runda ändar, ingen fyllning utom papperslapparna och markeringen.
10. **Kontrollerna.** `node --experimental-strip-types --test scripts/test-illustration.mjs` grönt med de tre nya filerna (de ska bli `<img>`-läge, inte inline). `npm run kontrollera` utan nya varningar när frontmatter är inlagd (bildAlt satt, så varningen om lång bildtext kommer inte).

## 7. Leverans från utvecklaren

De sex filernas sökvägar, storleken i kB på de tre publicerade, utfallet av testet i punkt 10, en rendering av varje i 343 px (PNG i scratchpad, inte i repot) och en rad om det som var osäkert.
