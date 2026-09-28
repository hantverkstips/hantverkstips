# Spec: snittskiss för fogarna i badrummet

UX och bygge, 2026-09-28. Beställd av koordinatorn för guiden `src/content/guider/badrum/fogar-badrum.mdx` (utkast) enligt `docs/briefer/seo-checklista-2026-09-29/badrum.md` avsnitt 8. Underlaget är `docs/briefer/faktablad/guider-fogar-badrum.md` avsnitt A och C. Reglerna är `docs/DESIGN.md` avsnitt 7, Skisserna, och bilaga A punkt 13. Förebilden för handen är `src/assets/illustrationer-kallor/inomhus/dreva-fonster-snitt.svg`; läs den innan du börjar och skriv i samma form (samma `<defs>`, samma papper, samma gruppordning, samma kommentarstil).

## 1. Vad bilden ska säga

En läsare som ska skära ut en gammal silikonfog ser på en sekund att det sitter lager bakom fogen, och att kniven ska stanna där silikonen tar slut, före tätskiktet. Det är den enda saken som pekar.

Källorna (faktabladet): BBV 26:1 § 8.3 "Fogmassor ingår inte i det godkända tätskiktssystemet". Casco juli 2026: "Undvik att skära igenom vattentätningsmembranet under." Fog- och brandskyddsföretagen nr 5: underliggande tätskikt får inte skadas vid rensningen. **Ingen källa ger ett mått.** Därför finns inget mått, ingen måttbygel, inget tal och ingen gul markering i bilden. Det är ett medvetet undantag från "ett nyckeltal per illustration": regeln säger "får", och här finns inget tal med källa.

## 2. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/badrum/fogar-badrum-snitt.svg` | Ny. Källan med `<text>`. Mappen `badrum/` är ny, en mapp per pelare enligt ARKITEKTUR.md, Illustrationer |
| `src/assets/illustrationer/badrum/fogar-badrum-snitt.svg` | Ny. Skrivs av `npm run illustrationer`, inte för hand |

Får inte röras: allt annat. Särskilt inte `src/content/guider/badrum/fogar-badrum.mdx` (skissen bäddas in senare av hantverkaren), `src/content/pelare/badrum.mdx`, `src/lib/pelare.ts`, `src/components/ui/Amnesrad.astro`, `src/components/ui/Ikon.astro`, `src/assets/brand/riktning-1/ikoner.svg`, `src/pages/amnen/index.astro`, `src/layouts/Bas.astro`, `src/styles/global.css`, `src/lib/kalkyl/register.ts` och `scripts/kontrollera-innehall.ts`; en annan utvecklare arbetar i dem nu. Ingen ändring i `Illustration.astro` eller `src/lib/illustration.ts` behövs: globben tar med den nya mappen själv.

Inbäddningen, som hantverkaren gör senare: `<Illustration namn="badrum/fogar-badrum-snitt" alt="..." bildtext="..." />`.

## 3. Ramen

- `viewBox="0 0 600 360" width="600" height="360"`. `role="img"` och `aria-label` på roten med alt-texten i avsnitt 6.
- Papperet exakt som förebilden: `<pattern id="linjerat">` 48 × 24 med `#f5efe3` och linjen `#c9bca3` 0,75, en `rect` 600 × 360 med mönstret, marginallinjen `M40,0 V360` i `#ad3519` 0,75 med `stroke-opacity="0.35"`.
- Bara hexvärdena för tokens: papper `#f5efe3`, linje `#c9bca3`, blyerts `#2a2521`, blyerts-2 `#625a50`, penna `#ad3519`. Ingen `currentColor`, ingen `var(--`, annars inlineas bilden och budgeten brister. Tumstock används inte.
- Kommentaren överst som i förebilden: vilka lager som är blyerts, blyerts-2 och penna, att skissen inte är skalenlig, och tokens.

## 4. Motivet, koordinater att utgå från

Snitt genom innerhörnet mellan vägg och golv, sett från sidan. Väggen till vänster, golvet nedtill, rummet uppe till höger. **Inte skalenligt**: skikten är förstorade så att de går att skilja på 343 px, och plattornas längd är kortad. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det, men behåll ordningen och tjockleken på skikten.

| Lager | Form | Koordinater | Stil |
|---|---|---|---|
| Vägg (stomme) | L-formad yta, skrafferad | väggdel x 44–150, y 0–296; golvdel y 296–360, x 44–600 | kontur bara på insidan (x 150 och y 296), blyerts 2 px; skraffering se nedan |
| Tätskikt | band 8 enheter brett som följer stommens insida obrutet runt hörnet, med rundat innerhörn (radie cirka 8) | vägg x 150–158, y 0–288; golv y 288–296, x 150–600 | två blyerts-linjer 2 px, ingen fyllning |
| Fästmassa | band 20 enheter, L-format | vägg x 158–178, y 0–268; golv y 268–288, x 158–600 | ytterkonturerna ritas av plattorna och tätskiktet; inuti glesa prickar i blyerts-2 (korta streck 1,5 lång, 1,25 px, rundade, cirka 14 enheter emellan, förskjutna rad för rad) |
| Väggplatta övre | rektangel | x 178–214, y 0–58 (fortsätter ut ur bilden upptill, ingen överkant) | blyerts 2 px |
| Cementfog vägg | glipan mellan väggplattorna | y 58–68, x 178–214 | glipan får tre korta tvärstreck i blyerts-2 1,25 som textur så att den läses som fylld |
| Väggplatta nedre | rektangel | x 178–214, y 68–204 | blyerts 2 px |
| Golvplatta vänster | rektangel | x 178–462, y 232–268 | blyerts 2 px |
| Cementfog golv | glipa | x 462–472, y 232–268 | som cementfogen på väggen |
| Golvplatta höger | rektangel utan högerkant, går ut ur bilden | x 472–600, y 232–268 | blyerts 2 px |
| Silikonfog | fyller glipan mellan väggplattans underkant och golvplattans ovansida (x 178–214, y 204–232) och buktar ut i rummet som en konkav hålkäl från väggplattans framsida vid (214, 192) till golvplattans ovansida vid (238, 232) | se ovan | blyerts 2 px kontur; inuti två eller tre mjuka parallella bågar i blyerts-2 1,25 så att den skiljer sig från fästmassans prickar |

Skraffering av stommen som förebilden: snedstreck `l10,10` i blyerts-2 1,25 px, 22 enheter emellan, varannan rad förskjuten 11. **En `<path>` per rad**, som i förebilden, inte ett element per streck. Skrafferingen slutar 4 enheter från stommens inre kontur och från papperslappar.

Raka linjer är aldrig helt raka: kvadratisk kurva med kontrollpunkten högst 3 procent av längden vid sidan. Hörn skjuter över 2 till 4 enheter där två konturer möts. En linjebredd per lager, ingen fyllning, ingen skuggning.

**Snickarpennan, den enda saken som pekar.** En pil i penna 2,5 px, runda ändar, som kommer från rummet och går in i silikonfogen längs glipans mitt: skaftet från cirka (330, 218) till (186, 218), svagt darrande, med ett öppet pilhuvud mot vänster vid spetsen (två ben om 9 enheter). Vid x 181 ett stoppstreck tvärs glipan, från y 208 till y 228, också penna 2,5. Stoppstrecket ligger där silikonen slutar och fästmassan börjar, före tätskiktet. Inget annat i penna utom marginallinjen och anteckningen.

## 5. Handskriften

Caveat 500, `font-family="'Caveat', 'Segoe Print', cursive"`, **24 px, inget under**. Etiketter i blyerts-2 för lagren, blyerts för den som bär budskapet (silikonfogen), penna för anteckningen vid pilen. Ledare i blyerts-2 1,25 px, raka, från etikettens närmaste kant till en punkt inne i lagret; en ledare får korsa andra lager men aldrig en annan ledare eller pennpilen. Papperslapp i `#f5efe3` bakom etiketter som står i skrafferingen (etiketten plus 4 enheter runt om).

Texten är hantverkarens och skrivs ordagrant:

| Nr | Text | Färg | Placering |
|---|---|---|---|
| 1 | vägg | blyerts-2 | i väggens skraffering, på lapp, cirka (52, 140) |
| 2 | golv | blyerts-2 | i golvets skraffering, på lapp, cirka (300, 340) |
| 3 | tätskikt | blyerts-2 | i rummet, ledare till väggbandet vid (154, 150) |
| 4 | fästmassa | blyerts-2 | i rummet, ledare till väggens fästmassa vid (168, 110) |
| 5 | kakel | blyerts-2 | i rummet, ledare till nedre väggplattan vid (204, 130) |
| 6 | cementfog | blyerts-2 | i rummet högt upp, ledare till fogen mellan väggplattorna vid (196, 63). Golvets cementfog ritas men får ingen etikett |
| 7 | klinker | blyerts-2 | till höger ovanför golvplattan, cirka (486, 214), ledare till högra golvplattan vid (530, 250) |
| 8 | silikonfog | blyerts | i rummet, ledare till hålkälen vid (222, 222); inte i pilens väg |
| 9 | kniven stannar / före tätskiktet | penna | två rader ovanför pilens skaft, från cirka x 250, baslinjer y 176 och 200 |

Etiketterna 3 till 6 staplas i rummet (x 260–590, y 24–150), cementfog överst eftersom dess fog sitter högst, med minst 26 enheters radavstånd. Ingen text närmare bildkanten än 6 enheter. Står en etikett för tätt för 24 px är det för många etiketter; säg till i stället för att krympa.

## 6. Alt och aria-label

`aria-label` på roten får alt-texten från hantverkaren ordagrant: "Snitt genom hörnet mellan vägg och golv i ett badrum, där kniven skär ur silikonfogen och stannar före tätskiktet."

## 7. Budget och kontroller

- Publicerad fil **under 32 kB** (gränsen är 40 kB; skisserna med fler etiketter ligger på 38, och den här ska lämna marginal). Källan under 12 kB.
- Ingen `<text>` i den publicerade filen. Ingen `currentColor`, ingen `var(--`.
- Rotelementets `width` och `height` är lika med viewBox, annars kastar `Illustration.astro`.
- Sidan: skissen serveras som `<img>` och lägger bara `<figure>` med `<img>` och `<figcaption>` till HTML:en, under 0,6 kB. Guidens HTML ska ligga under 66 kB när den publiceras.

Kör själv och redovisa: `npm run illustrationer` (skriver bara din fil; rapportera om den skriver något annat), `npx astro check --minimumSeverity error`, `node --experimental-strip-types --test scripts/test-illustration.mjs`, byte för båda filerna, `grep -c "<text" ` på den publicerade. Rendera den publicerade filen till PNG i 343 px bredd med sharp till scratchpad och titta på den: går alla etiketter att läsa, skiljer sig de tre skikten åt, syns stoppstrecket. **Kör inte `npm run build`**, committa inte.

## 8. Tillstånd

- Ifyllt: den enda. Bilden har inga varianter.
- Fel: en saknad fil eller fel mått ger byggfel i `Illustration.astro`; det är rätt beteende.
- Utanför: bilden visas i läsbredd, 343 px på 375 px och högst 600 px på desktop. Den blir inte delningsbild (guiden har ingen `bild` i frontmatter, och det beslutet tas inte här).

## 9. Godkännande

Godkänd avvikelse 2026-09-28: silikonfogens ledare går till (204, 210) i glipan ovanför pilen, eftersom (222, 222) inte nås utan att korsa pilen, och stapeln står i ordningen cementfog, fästmassa, tätskikt, kakel, silikonfog så att ingen ledare korsar en annan.


UX och bygge rendrar på 343 px och granskar mot DESIGN.md avsnitt 7: förstås motivet på en sekund, pekar bara en sak, är handskriften 24 px, är filen under 40 kB utan `<text>`. Leverans: filerna, byte, kontrollernas resultat och en rad om osäkerheter.
