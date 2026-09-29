# Spec: takfoten i genomskärning, med luftens väg till vinden

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/guider/tak/takfot.mdx` (utkast), där platshållaren på rad 49 väntar på `tak/takfot-snitt`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak-4.md` rad 148 och 162 ("takfoten i genomskärning med alla delar namngivna och luftens väg in i vinden"), faktabladet `docs/briefer/faktablad/guider-takfot.md` rad 13, 25–33, 54 och 67–68. Läsaren (`retur-kondens-pa-fonster-och-takfot-2026-09-29.md` rad 245 och 431): "Takfotens tabell med åtta delnamn går knappt att förstå utan ett snitt."

Handen, papperet, ledarna och byglarna är desamma som i `src/assets/illustrationer-kallor/tak/hangranna-takfot.svg`, som redan visar en takfot framifrån. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Takfoten har en spalt där uteluften kommer in och går upp till vinden, och den ska vara öppen när jobbet är klart. Luftens väg i penna är den enda saken som pekar. Delarna runt den får namn så att sidans tabell går att läsa mot bilden.

Källorna: spalten "ca 50 mm", hålls öppen med vindavledare (Rockwool, faktabladet rad 29 och 67); "luftspalt på ca 50 mm mellan isolering och underlagsspont" (BMI TopSafe, rad 68). Pannan skjuter ut "30-50 mm ut över takfoten" (BMI Monier, rad 33), bara i bildtexten. Takfotsplåten under underlagstaket på ett pannetak (BMI Monier, sidans tabell). Takfotsläkten högre och fågelbandet på den (Monier och Benders, rad 25–26). **Nyckeltalet är ca 50 mm**, spalten mellan isoleringen och underlagstaket. Det får gul markering en gång.

## 2. Beslut

- Taket är ett pannetak, eftersom sidans tabell utgår från pannor (takfotsläkt, fågelband) och BMI Monier är källan till takfotsplåtens läge.
- Snittet går genom ett fack mellan två takstolar, så att spalten syns. Takstolen bakom ritas bara som en kontur i blyerts-2.
- 50 mm mäts vinkelrätt mot underlagstaket, mellan vindavledarens ovansida och råspontens undersida, som BMI skriver "mellan isolering och underlagsspont".
- Vindskivan sitter på gaveln och syns inte i ett snitt genom takfoten. Den får ingen plats i bilden (checklistan rad 204 ger den en Faq-fråga; den har en).

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/takfot-snitt.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/takfot-snitt.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan. Inbäddningen gör UX och bygge i frontmatter.

## 4. Motivet, koordinater

Snitt genom takfoten sett från gaveln. Vinden till vänster, väggen i mitten, takutsprånget och rännan till höger, taket lutar upp åt vänster. **Inte skalenligt**: skikten är förstorade. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det, men behåll ordningen.

Linjen `R(x) = 300 − 0,40 × (530 − x)` är råspontens undersida (y 300 vid x 530, y 176 vid x 220, y 106 vid x 44). Allt längs taket ritas parallellt med den.

| Del | Form och läge | Stil |
|---|---|---|
| Råspont med underlagspapp | band 10 tjockt ovanpå R(x), x 44–532, med papplinjen som övre kontur | blyerts 2 |
| Takstolen bakom | band 20 tjockt under R(x), x 44–520, avslutat lodrätt vid x 520 | blyerts-2 1,25, bara kontur |
| Takfotsbräda | lodrät bräda x 520–534, y 286–322, på takstolens ände | blyerts 2 |
| Ströläkt | band 8 ovanpå råsponten, x 44–520 | blyerts 2 |
| Bärläkt | små rektanglar 12 × 10 ovanpå ströläkten, var 110:e enhet längs taket; den nedersta, **takfotsläkten** vid x 494–506, är dubbelt så hög (20) | blyerts 2 |
| Pannor | raka plattor som vilar på läkten och överlappar, var och en med en kort nos nedåt i nedre änden; den nedersta går 16 enheter förbi brädans utsida, till x 550, över rännan | blyerts 2 |
| Fågelband | en kort vågig remsa från takfotsläktens ovansida upp mot den nedersta pannans undersida, vid x 500–512 | blyerts 2 |
| Takfotsplåt | en vinkel som ligger på råsponten under papplinjen från x 470, följer taket ut till brädans överkant och viks ner över brädan in i rännan till y 312 | blyerts 2 |
| Hängränna | halvrund, centrum (560, 318), radie 20, med en krok till brädan | blyerts 2 |
| Vägg | två lodräta linjer x 184 och x 220 från y 360 upp till väggens överkant y 200, med ett hammarband x 184–220, y 200–214 | blyerts 2 |
| Vindsbjälklag | band y 200–214 från x 44 till x 184 | blyerts 2 |
| Isolering | på bjälklaget: vågrät överkant y 152 från x 44 till x 110, därifrån under vindavledaren ner till väggen | skraffering som i fogskissen, en `<path>` per rad, blyerts-2 1,25; kontur bara där den möter vindavledaren |
| Vindavledare | en skiva parallell med R(x), 24 enheter under den, från x 110 till x 214 | blyerts 2 |
| Panel på undersidan | vågrät, y 322–330, från brädan (x 520) mot väggen till x 232, så att en **glipa på 12** blir kvar mot väggen | blyerts 2 |

Stödpunkter: R(160) = 148, vindavledaren vid x 160 på y 172.

**Snickarpennan, den enda saken som pekar.** Luftens väg, penna 2,5 px, runda ändar, en mjuk kurva: in underifrån genom glipan mellan panelen och väggen vid (226, 350), upp längs väggens utsida till cirka (226, 212), in över väggens överkant och upp genom spalten mellan vindavledaren och råsponten, och ut på vinden, där den slutar med ett öppet pilhuvud vid cirka (84, 136). Den får inte röra skrafferingen.

**Måttbygeln** för 50 mm i blyerts-2 1,5: vinkelrätt mot taket vid x 160, från vindavledarens ovansida till råspontens undersida, med korta hjälplinjer. Luftens väg går genom spalten bredvid bygeln, inte genom den; flytta bygeln till x 140 om de ligger på varandra.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px, raka. Papperslapp bakom etiketter som står i skraffering. **Högst 55 tecken etikettext**, orden är sidans egna (tabellen "Vad som sitter i en takfot").

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | takfotsbräda | blyerts-2 | nere till höger under panelen, cirka (430, 352), ledare till brädan vid (527, 318) |
| T2 | takfotsplåt | blyerts-2 | uppe till höger ovanför taket, cirka (440, 150), ledare till plåten där den viks ner vid (536, 290) |
| T3 | fågelband | blyerts-2 | uppe till höger ovanför T2, cirka (440, 118), ledare till bandet vid (506, 262) |
| T4 | panel | blyerts-2 | under panelen, cirka (300, 352), ledare till panelen vid (330, 330) |
| T5 | luftspalt | penna | ovanför taket, cirka (250, 70), ledare i penna 1,25 till spalten vid (180, 180) |
| V1 | ca 50 mm | blyerts på tumstock | ovanför taket till vänster, cirka (100, 60), ledare till bygelns övre ände |

Tecken: 12 + 11 + 9 + 5 + 9 + 8 = 54. Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader; ingen annan markering. Pannor, läkt, isolering, vindavledare, vägg och ränna får ingen etikett; de står i bildtexten. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt` (106 tecken): "Takfoten i genomskärning, där uteluften kommer in vid väggen och går upp genom en öppen spalt till vinden."
- `bildtext`: "Takfoten sedd från gaveln. Uteluften kommer in genom glipan mellan panelen och väggen och går upp till vinden genom en spalt på cirka 50 millimeter, som vindavledaren håller öppen ovanför isoleringen. Pannorna sticker ut 30 till 50 millimeter över takfoten, så att regnet rinner rakt ner i rännan, och på ett pannetak ligger takfotsplåten under underlagstaket. Skikten är förstorade. Källa: Rockwool, BMI TopSafe och BMI Monier."

Hantverkaren har inte lämnat ordagrann alt eller bildtext för den här bilden; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

- Publicerad fil **under 28 kB, 28 672 byte** (1 kB = 1 024 byte). Källan under 10 kB.
- Ingen `<text>` i den publicerade filen, ingen `currentColor`, ingen `var(--`. Rotens `width` och `height` lika med viewBox 600 × 360.
- Kör och redovisa: `npm run illustrationer` (rapportera om den skriver någon annan fil än din), `npx astro check --minimumSeverity error`, `node --experimental-strip-types --test scripts/test-illustration.mjs`, byte för båda filerna, `grep -c "<text"` på den publicerade. Rendera den publicerade filen till PNG i 343 px bredd med sharp till scratchpad och titta: syns luftens väg från glipan till vinden, syns spalten över isoleringen, går pannorna, läkten och plåten att skilja åt vid rännan, går alla etiketter att läsa. **Kör inte `npm run build`**, committa inte.

## 8. Tillstånd

Ifyllt är det enda. En saknad fil eller fel mått ger byggfel i `Illustration.astro`, vilket är rätt. Bilden visas i läsbredd, 343 px på 375 px, och blir sidans delningsbild eftersom den ligger i `bild`.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 21 638 byte. Godkända avvikelser: vindavledaren följer formeln R(x) (specens stödpunkt 148 var fel, rätt är 152); brädans överkant följer råspontens undersida; T2 och T3 flyttade så att ledarna inte korsar ord; T5:s ledare till spaltens övre halva; bygeln kvar vid x 160, eftersom luftens väg korsar varje bygel i spalten. Rättat vid granskningen: takstolens kontur ströks, eftersom den lästes som en lös diagonal genom vinden. Inlagd i `takfot.mdx` med alt och bildtext enligt avsnitt 6.
