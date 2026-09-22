# Spec: skisser som `<img>` i stället för inlinead SVG

Skriven 2026-09-22 av UX och bygge. Byggs av `utvecklare`. Godkänns av UX och bygge mot avsnitt 9.

## 1. Problemet, mätt

`<Illustration>` (`src/components/ui/Illustration.astro`) läser skissen med `?raw` och skriver hela SVG:n i HTML:en. En konverterad skiss väger 17 till 41 kB, och 27 innehållssidor ligger därför över budgeten 66 kB HTML (60 kB plus sprite och ordmärke, `docs/ARKITEKTUR.md` Prestandabudget).

Mätt i `dist/client` från bygget 2026-09-21 08:23 (det senaste som finns; inget nytt bygge gjordes för specen). Kolumnen "efter" är sidans storlek utan de inlinade skisserna plus 280 byte per `<img>`-tagg som ersätter dem, alltså en uppskattning med felmarginal på ungefär 0,2 kB per skiss.

| Sida | Före | Skisser | Skissbyte | Efter |
|---|---|---|---|---|
| /fukt/fukt-i-kallaren/ | 145,4 | 2 | 73,0 | 72,9 |
| /fukt/avfuktare-kallare/ | 142,4 | 2 | 54,4 | 88,6 |
| /fukt/sorptionsavfuktare/ | 138,2 | 2 | 71,5 | 67,3 |
| /grund/isolera-krypgrund/ | 125,8 | 2 | 62,6 | 63,7 |
| /inomhus/gipsskruv/ | 125,5 | 3 | 63,5 | 62,7 |
| /inomhus/bygga-innervagg/ | 122,0 | 2 | 53,1 | 69,5 |
| /golv/lagga-klickgolv/ | 106,5 | 2 | 41,1 | 66,0 |
| /fukt/avfuktare-krypgrund/ | 101,2 | 1 | 21,3 | 80,2 |
| /grund/dranera-hus/ | 99,6 | 1 | 28,0 | 71,9 |
| /jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/ | 96,5 | 1 | 36,5 | 60,3 |
| /grund/inreda-kallare/ | 95,7 | 1 | 19,3 | 76,6 |
| /grund/sprickor-i-husgrunden/ | 95,3 | 1 | 31,9 | 63,7 |
| /altan/bygga-altan/ | 95,2 | 1 | 32,7 | 62,8 |
| /tester/woods-sw39fw/ | 94,6 | 1 | 26,9 | 68,0 |
| /tester/acetec-evodry-6h-2/ | 93,6 | 1 | 29,2 | 64,7 |
| /fukt/luftfuktighet-inomhus/ | 92,1 | 1 | 29,9 | 62,5 |
| /golv/slipa-parkettgolv/ | 91,6 | 1 | 21,9 | 70,0 |
| /golv/golv-i-kallare/ | 90,2 | 1 | 29,9 | 60,6 |
| /altan/tradack-pa-mark/ | 90,0 | 1 | 24,6 | 65,7 |
| /el/tillaggsisolera-vind/ | 88,7 | 1 | 16,1 | 72,9 |
| /golv/bygga-trappa/ | 86,0 | 1 | 20,9 | 65,4 |
| /inomhus/skruva-i-gipsvagg/ | 81,9 | 1 | 20,0 | 62,1 |
| /altan/trallskruv/ | 81,3 | 1 | 21,0 | 60,6 |
| /fasad/dreva-fonster/ | 78,4 | 1 | 27,1 | 51,6 |
| /grund/isolera-kallarvagg/ | 77,4 | 1 | 24,0 | 53,7 |

Alla tal i kB. Summan: 33 inlinade skisser på 25 sidor, 1 003 kB HTML som blir 33 cachade filer i stället. Räknarsidorna under `/rakna/` (14 stycken, serverrenderade, inte i `dist/client`) har var sin skiss i avsnittet "Så räknar jag" genom samma komponent och tappar 12 till 30 kB var.

## 2. Vad som måste vara inline, och vad som inte behöver det

Regeln i skillen `astro-och-prestanda` avsnitt 4: inline bara när filen använder `currentColor` eller en token (`var(--color-...)`), annars `<img>`.

Räknat på alla 89 filer under `src/assets/illustrationer/**/*.svg` (60 skisser i pelarmapparna, 14 under `rakna/`, 14 under `rakna/varumarke/`, 1 under `start/`):

- Filer med `currentColor`: 0.
- Filer med `var(--`: 0.
- Filer med `<text>`: 0.
- Filer med `width` och `height` på rotelementet som stämmer med `viewBox`: 89 av 89. 81 är 600 × 360, resten 600 × 300 till 600 × 420.
- Färgerna är tokenvärdena inskrivna som hex (`#2a2521`, `#625a50`, `#ad3519`, `#f5efe3`, `#c9bca3`, `#e8b830`), så filerna ser likadana ut som fristående dokument som inlinade. Källorna i `illustrationer-kallor/` innehåller inte heller `currentColor` eller `var(--`, så konverteringen kan inte producera en tokenfil av misstag.

Slutsats: ingen publicerad skiss behöver inline-läget i dag. Alla 33 anrop i innehållet och alla 14 på räknarsidorna går över till `<img>` utan att någon fil ritas om. Inline-läget behålls som väg för det DESIGN.md avsnitt 7 kallar diagram i tokens (testsidornas diagram), men det är undantaget, inte regeln.

## 3. Beslut

### 3.1 Tillgångsvägen: import, inte `public/`

Skissen importeras som tillgång med `import.meta.glob` utan `?raw`, med `eager: true` och `import: 'default'`. Det ger `ImageMetadata` med `src`, `width`, `height` och `format`, exakt som `src/lib/verktygsbild.ts` redan gör för räknarnas bilder. Skäl:

- **Cache.** Filen hamnar i `dist/client/_astro/[namn].[hash].svg`, och Vercel-adaptern sätter `cache-control: public, max-age=31536000, immutable` på `^/_astro/(.*)$` (kontrollerat i `.vercel/output/config.json` från samma bygge). En fil under `public/` får inget hash och Vercels standard `max-age=0, must-revalidate`, alltså en revalidering per sidvisning. Samma skiss på flera sidor hämtas dessutom en gång.
- **Mått utan CLS.** Astros bildläsare tar `width` och `height` från rotelementet (faller tillbaka på `viewBox` om de saknas), och komponenten skriver dem som attribut på `<img>`. Med `class="block w-full h-auto"` reserverar webbläsaren rätt höjd innan filen hämtats. Under `public/` hade komponenten fått läsa filen själv för att veta måtten.
- **Byggfel vid saknad fil.** Ett okänt `namn` ska ge byggfel som i dag; en sträng till `public/` hade blivit en 404 i produktion.

Astros tillgångsflöde skriver bildimporter som filer, aldrig som data-URI (varumärkesbilderna på 4,3 till 7,6 kB ligger som filer i `dist/client/_astro/`, och ingen `data:image/svg` finns i någon HTML-fil i bygget). Komponenten ska ändå kasta byggfel om `src` börjar med `data:`, samma skydd som `Bas.astro` har för `ogBild`. Det kostar en rad och gör felet omöjligt att missa.

### 3.2 Attributen på `<img>`

`src` från `ImageMetadata`, `alt` från propen `alt`, `width` och `height` från `ImageMetadata`, `loading="lazy"`, `decoding="async"`. Inget `fetchpriority` (skisserna står i löptexten under vecket; huvudbilden och räknarens sidhuvud är LCP och hanteras av mallarna). Inget `role`, inget `aria-label`, inget `title`: en `<img>` med `alt` är redan en bild för skärmläsaren. Ingen `srcset` eller `sizes`: SVG skalas av sig själv.

Klasserna är samma som på dagens inlinade `<svg>`: `block w-full h-auto rounded-sm border border-linje`. Figuren behåller `m-0 my-8 max-w-[600px]` och den valfria `class`-propen. Bildtexten renderas exakt som i dag.

### 3.3 Id-suffixning och `<pattern id="linjerat">` behövs inte i img-läget

En `<img>` laddar SVG:n som ett eget dokument med egen id-rymd. Två skisser på samma sida som båda har `<pattern id="linjerat">` krockar inte, och `url(#linjerat)` löses inuti varje fil. Suffixningen, rensningen av `<?xml`, kommentarer och rotattribut, och `slugify` används därför bara i inline-läget. Filen skrivs orörd till `_astro/`.

### 3.4 Läget väljs på filens innehåll, inte med en prop

Komponenten läser råfilen (den eagera `?raw`-globben finns redan) och väljer `inline` om filen, med `<!-- -->`-kommentarer bortstrippade, matchar `/currentColor|var\(--/`, annars `img`. Skäl:

- Regeln är formulerad på filen, inte på sidan (skillen avsnitt 4). Det är filen som vet om den behöver tokens.
- Ingen av de 47 anropsplatserna ändras. Hantverkaren skriver `<Illustration namn alt bildtext />` som förut och behöver inte veta hur skissen är ritad.
- En prop kan sättas fel åt båda hållen: en tokenfil som `<img>` renderas med fel eller saknade färger, en hexfil som inline kostar 30 kB. Innehållstestet kan inte sättas fel, och det går att testa med en sträng in och ett läge ut.
- Kostnaden är noll i körtid: valet görs vid bygget på en sträng som redan finns i minnet.

Kommentarerna strippas före testet eftersom flera källor har en kommentar i stil med `Tokens: papper #f5efe3 ...`; en framtida kommentar som nämner `var(--color-penna)` får inte tvinga en skiss till inline.

Alternativet att ta bort inline-läget helt avvisas tills vidare: DESIGN.md avsnitt 7 beskriver diagram ritade med tokens, och den vägen ska finnas när ett sådant ritas. Det är inte ett skäl att bygga en prop.

### 3.5 Varningar och fel

Oförändrat: okänt `namn` (byggfel med listan över filer som finns), tom `alt` (byggfel), fil utan `<svg>` (byggfel), fil utan läsbar `viewBox` (byggfel), fil över 40 kB (varning), fil med `<text>` (varning). Varningen för 40 kB får ny lydelse eftersom skälet inte längre är HTML-budgeten utan filens egen gräns i DESIGN.md avsnitt 7; något i stil med "filen är N kB, gränsen för en skiss är 40 kB, förenkla den".

Nytt i img-läget, båda byggfel: `ImageMetadata.width` eller `height` skiljer sig från `viewBox` (då stämmer inte den reserverade ytan och sidan hoppar), och `src` som börjar med `data:`.

## 4. Komponentens kontrakt

### Props, oförändrade

```
namn: string       sökväg utan ändelse relativt src/assets/illustrationer/, till exempel "fukt/tejptest"
alt: string        krävs, vad bilden visar
bildtext?: string  valfri figcaption
class?: string     valfri extra klass på <figure>
```

Ingen ny prop. Inga nya beroenden.

### Beteende

1. Slå upp råfilen i `?raw`-globben. Saknas den: byggfel som i dag.
2. Validera `alt`, `<svg>`, `viewBox`, storlek och `<text>` som i dag.
3. `valjLage(ra)`:
   - `img`: slå upp samma nyckel i den andra globben (utan query) och rendera `<figure>` med `<img>` enligt 3.2. Kontrollera måtten mot `viewBox` och att `src` inte är `data:`.
   - `inline`: rendera exakt dagens markup, byte för byte för samma indata: rot med `xmlns`, `viewBox`, `width`, `height` ur viewBox, `role="img"`, `aria-label`, samma klasser, suffixade idn, `<Fragment set:html>`.
4. Figcaption och figurklasser är samma i båda lägena.

### Hjälpmodul

Strängslogiken flyttas till `src/lib/illustration.ts` så att den går att testa med node utan Astro, på samma sätt som formelmodulerna i `src/lib/kalkyl/`. Modulen importerar inget från Astro eller Vite. Exporter:

```
type Lage = 'img' | 'inline'
valjLage(svg: string): Lage
lasViewBox(svg: string): { bredd: number; hojd: number }     kastar samma fel som komponenten gör i dag
inlineMarkup(svg: string, alt: string, suffix: string): string   dagens rensning, suffixning och rot, oförändrad
```

Komponenten anropar dessa och behåller själv globbarna, felmeddelandena med filnamn och renderingen. Namnen ovan är bindande så att testet och komponenten pratar om samma sak.

## 5. Filer

Får röras:

- `src/components/ui/Illustration.astro`
- `src/lib/illustration.ts` (ny)
- `scripts/test-illustration.mjs` (ny, körs med `node --experimental-strip-types --test scripts/test-illustration.mjs`)

Får inte röras:

- Innehållsfilerna i `src/content/**` och anropen där: 33 `<Illustration>`, deras `namn`, `alt` och `bildtext`.
- Räknarsidorna i `src/pages/rakna/*.astro` och deras 14 anrop.
- Filerna under `src/assets/illustrationer/` och `src/assets/illustrationer-kallor/`.
- `src/lib/verktygsbild.ts`, `src/components/vyer/Artikel.astro`, `src/pages/tester/[slug].astro`, `src/pages/jamforelser/[slug].astro`, `src/styles/global.css`.
- `scripts/kontrollera-innehall.ts`, `scripts/generera-delningsbilder.mjs`, `scripts/konvertera-handskrift.mjs`.
- `docs/` (ARKITEKTUR.md är uppdaterad av UX och bygge i samband med den här specen; skillen `astro-och-prestanda` uppdateras efter godkännandet).

Två tillfälliga filer får finnas under arbetet och ska vara borta vid leverans (se 7.3): `src/assets/illustrationer/_test/inline.svg` och `src/pages/skisstest.astro`. `git status` vid leverans visar bara de tre filerna ovan.

## 6. Delningsbilder och huvudbild

Påverkas inte.

- `scripts/generera-delningsbilder.mjs` läser SVG-filerna direkt från `src/assets/illustrationer/` med `fs` och hittar sidans skiss med ett regex på `<Illustration namn="...">` i MDX-källan. Den ser aldrig komponentens utdata. Anropen i MDX ändras inte, så bilderna i `public/og/` är oförändrade och skriptet skriver ingenting om.
- Huvudbilden i frontmatter (`bild`, `bildtext`, `bildAlt`) renderas av `Artikel.astro` med en egen `<img>` med `fetchpriority="high"` och går inte genom `<Illustration>`. Oförändrad.
- `scripts/kontrollera-innehall.ts` kontrollerar `alt` med ett regex på MDX-källan. Oförändrad, samma utfall.
- Räknarnas varumärkesbilder och gallerikort går redan som `<img>` via `verktygsbild.ts`. Oförändrade.

## 7. Testfall

### 7.1 Enhetstest, `scripts/test-illustration.mjs`, minst dessa fall

1. `valjLage` på `src/assets/illustrationer/fukt/tejptest.svg` läst från disk ger `img`.
2. `valjLage` på en sträng med `stroke="currentColor"` ger `inline`.
3. `valjLage` på en sträng med `fill="var(--color-penna)"` ger `inline`.
4. `valjLage` på en sträng där `currentColor` bara står i en `<!-- -->`-kommentar ger `img`.
5. `valjLage` på alla filer under `src/assets/illustrationer/**/*.svg` ger `img` för samtliga (89 i dag; testet räknar filerna och kräver minst 80 så att en tom mapp inte passerar tyst).
6. `lasViewBox` på tejptest ger 600 × 360; på en sträng utan viewBox kastar den.
7. `inlineMarkup` på en sträng med `id="linjerat"`, `url(#linjerat)` och `href="#pil"` med suffix `fukt-tejptest` ger `id="linjerat-fukt-tejptest"`, `url(#linjerat-fukt-tejptest)` och `href="#pil-fukt-tejptest"`, utan `<?xml`, utan kommentarer, med `role="img"` och `aria-label` med citattecken escapade.

### 7.2 Sidtest i `npm run dev`, tre sidor

Tillfällig fil `src/assets/illustrationer/_test/inline.svg`: en 600 × 360 med `viewBox`, `width`, `height`, en `<pattern id="linjerat">` och en `<path stroke="currentColor">`, utan `<text>`. Tillfällig sida `src/pages/skisstest.astro` som renderar `<Illustration namn="_test/inline" alt="Testskiss inline" />` följt av `<Illustration namn="fukt/tejptest" alt="Testskiss som bild" bildtext="Test" />`.

| Sida | Väntat i HTML-källan |
|---|---|
| `/inomhus/gipsskruv/` (tre skisser) | Tre `<figure class="m-0 my-8 max-w-[600px]">` med var sin `<img src="/@fs/...gipsskruv-ganga.svg" ...>` i dev (i bygget `/_astro/gipsskruv-ganga.[hash].svg`), `alt` lika med MDX-filens alt, `width="600" height="360"`, `loading="lazy"`, `decoding="async"`, klassen `block w-full h-auto rounded-sm border border-linje`. Ingen `<svg` med `role="img"` från skisserna. Figcaption med bildtexten där MDX har en. |
| `/skisstest/` (båda lägena) | Första figuren: `<svg xmlns=... viewBox="0 0 600 360" width="600" height="360" role="img" aria-label="Testskiss inline" class="block w-full h-auto rounded-sm border border-linje">` med `id="linjerat-test-inline"` och `url(#linjerat-test-inline)`. Andra figuren: `<img>` som ovan, och `<figcaption class="mt-2 text-liten text-blyerts-2">Test</figcaption>`. |
| `/rakna/avfuktare/` (räknarsida) | Två `<img>`: varumärkesbilden i sidhuvudet med `fetchpriority="high"` som i dag, och skissen under "Så räknar jag" med `loading="lazy"` och alten från sidan. |

På 375 px: figuren fyller bredden, inget sidledsscroll, ramen och radien syns, bilden reserverar sin höjd innan den laddats (kolla med nätverket strypt i devtools att texten under inte flyttar sig).

### 7.3 Städning

`_test/inline.svg` och `skisstest.astro` tas bort innan leverans. `git status` visar bara `Illustration.astro`, `illustration.ts` och `test-illustration.mjs`.

## 8. Kontroller som utvecklaren kör

1. `npx astro check --minimumSeverity error`: 0 fel.
2. `node --experimental-strip-types --test scripts/test-illustration.mjs`: grönt, minst sju fall.
3. `npm run kontrollera`: 0 fel, samma varningar som före (inga nya om `<Illustration>`).
4. Sidtesterna i 7.2 med utdrag ur HTML-källan för de tre sidorna i leveransen.

Utvecklaren kör inte `npm run build`. Det gör koordinatorn, och UX och bygge mäter på `dist/`.

## 9. Godkännande, mätt på `dist/client` efter koordinatorns bygge

1. Script-taggar utöver JSON-LD: 0 på alla sidor (kontrollen i SPEC-SIDMALLAR.md avsnitt 10 punkt 1). Inga `_astro/*.js`-referenser (punkt 2).
2. Ingen `<svg ... role="img" ... class="block w-full h-auto rounded-sm border border-linje">` finns i någon fil under `dist/client`. Antalet `<img` med `loading="lazy"` och `border-linje` är 33 sammanlagt över de 25 sidorna i tabellen i avsnitt 1.
3. `dist/client/_astro/` innehåller minst en `.svg` per använd skiss (33 innehållsskisser plus de 14 under `rakna/`), och varje `<img src>` pekar på en fil som finns. Att den eagera globben skriver ut alla 89 filer, även de som ingen sida använder, är i sin ordning: en oanvänd fil under `_astro/` refereras aldrig och hämtas aldrig, den kostar bara deployutrymme (cirka 1 MB). En icke-eager glob hade inte hjälpt, Vite bundlar ändå varje träff som en chunk och skriver ut tillgången, och den hade lagt en `await` i komponenten för ingenting.
4. Varje sida i tabellen i avsnitt 1 är högst 0,5 kB större än kolumnen "efter". Fjorton sidor går under 66 kB (67 584 byte): isolera-krypgrund, gipsskruv, jämförelsen, sprickor-i-husgrunden, bygga-altan, acetec-evodry-6h-2, luftfuktighet-inomhus, golv-i-kallare, tradack-pa-mark, bygga-trappa, skruva-i-gipsvagg, trallskruv, dreva-fonster, isolera-kallarvagg. Antalet innehållssidor över 66 kB går från 27 till högst 13 (avsnitt 10 säger vilka och varför). Lägga-klickgolv landar på gränsen, 67,6 kB uppskattat mot 67,6 kB gräns, och får hamna på endera sidan utan att det är retur.
5. Varje `<img>` från komponenten har `alt` som är identisk med MDX-filens alt, `width` och `height` som stämmer med filens `viewBox`, `loading="lazy"` och `decoding="async"`. Kontrolleras med ett regex över `dist/client` mot listan över de 33 anropen.
6. `public/og/*.png` är oförändrade (`git status` visar inga ändringar under `public/og/`).
7. `npm run preview` och `curl -s http://localhost:4321/rakna/avfuktare/` visar skissen som `<img ... loading="lazy">` och inget `<script` utöver JSON-LD.
8. Lighthouse mobil på `/fukt/fukt-i-kallaren/`: CLS under 0,05, inga bilder utan uttryckliga mått.

Rött bygge, en `<svg role="img">` kvar från en skiss, eller en sida över kolumnen "efter" plus 0,5 kB är retur.

## 10. Sidorna som ligger kvar över 66 kB, och varför

Tretton sidor är över 67 584 byte även utan inlinade skisser (uppskattat ur samma dist). Det är inte skissernas fel, och den här specen löser det inte. Storlekarna per del i kB, efter att skisserna räknats bort:

| Sida | Efter | Text | Klassattribut | FAQ (details) | Formulär | Tabeller | JSON-LD |
|---|---|---|---|---|---|---|---|
| /luftavfuktare/ (kategorisida, ingen skiss) | 106,4 | 15,3 | 55,5 | 6,7 | 0 | 23,0 | 5,5 |
| /fukt/avfuktare-kallare/ | 88,6 | 26,3 | 29,7 | 8,4 | 2,9 | 5,3 | 3,8 |
| /fukt/avfuktare-krypgrund/ | 80,2 | 25,9 | 23,9 | 8,8 | 0 | 3,9 | 3,8 |
| /grund/inreda-kallare/ | 76,6 | 31,1 | 17,8 | 9,5 | 0 | 1,3 | 4,7 |
| /fukt/fukt-i-kallaren/ | 72,9 | 23,8 | 21,5 | 5,3 | 8,9 | 1,8 | 1,3 |
| /el/tillaggsisolera-vind/ | 72,9 | 27,2 | 18,0 | 8,7 | 3,3 | 1,5 | 3,8 |
| /fasad/mala-om-huset/ (ingen skiss) | 72,4 | 24,2 | 20,2 | 8,9 | 3,6 | 0,7 | 3,7 |
| /grund/dranera-hus/ | 71,9 | 25,4 | 20,2 | 5,9 | 4,5 | 1,3 | 1,3 |
| /golv/slipa-parkettgolv/ | 70,0 | 24,2 | 19,9 | 5,7 | 3,3 | 3,7 | 1,2 |
| /inomhus/bygga-innervagg/ | 69,5 | 21,1 | 21,3 | 6,0 | 6,0 | 2,7 | 1,3 |
| /tester/woods-sw39fw/ | 68,0 | 16,9 | 25,1 | 6,2 | 2,9 | 1,4 | 0,8 |
| /fukt/sorptionsavfuktare/ | 67,3 | 20,9 | 19,8 | 5,2 | 0 | 5,8 | 1,3 |
| /golv/lagga-klickgolv/ | 66,0 | 23,3 | 18,3 | 6,2 | 0 | 3,5 | 1,3 |

Gemensamt för alla sidor: sidhuvud med meny och sprite 8,0 kB, sidfot 7,1 kB, `<head>` 3,0 kB. Det fasta skalet är alltså 18 kB per sida, inte de 6 kB budgeten räknar av för sprite och ordmärke. Därtill kommer 4 000 till 5 100 ord synlig text på de längsta guiderna (21 till 31 kB), Tailwind-klasser på 18 till 30 kB, och FAQ med `<details>` på 5 till 10 kB. Kategorisidan `/luftavfuktare/` har ingen skiss alls; där är det jämförelsetabellen (23 kB) och 55 kB klassattribut.

`/golv/renovera-trappa/` ligger på 67 539 byte utan någon skiss, 45 byte under gränsen. `/fasad/mala-om-huset/` har ingen skiss och är 72,4 kB.

Det här går till en egen spec. Kandidaterna, i den ordning jag skulle mäta dem: sidfotens fyra spalter på varje sida, klasserna i `Faq.astro` och tabellcellerna (kategorisidans 55 kB klasser i en tabell), formuläret som `<Kalkylator>` bäddar in med `MED_FORMULAR`, och till sist frågan om budgeten ska definieras om från 60 plus 6 till 60 plus det skalet faktiskt väger. Inget av det rör den här specen.

## 11. Granskning 2026-09-22

Godkänd av UX och bygge, mätt på koordinatorns bygge samma dag (`dist/client` 17:34).

- Enhetstestet 7 av 7, `astro check` 0 fel, `kontrollera` 0 fel, bygget grönt, 0 script-taggar utöver JSON-LD.
- 0 inlinade skisser kvar i `dist/client`. 33 `<img>` med `loading="lazy"`, `decoding="async"`, `width` och `height`, utan `role` eller `aria-label`; alla 33 alt identiska med MDX-anropen; alla `src` finns under `_astro/`; ingen `data:`-URI i någon HTML.
- Ingen av de 25 sidorna över kolumnen "efter" plus 0,5 kB. 13 sidor över 66 kB, från 27; listan är den i avsnitt 10, med lagga-klickgolv på 66,1.
- `public/og/` oförändrat.
- Räknarsidan `/rakna/avfuktare/` i dev: varumärkesbilden med `fetchpriority="high"`, skissen med `loading="lazy"`.
- 375 px i Edge med enhetsemulering: `/inomhus/gipsskruv/` vid två skisser, `/fukt/fukt-i-kallaren/` vid tejptestet, `/rakna/avfuktare/` vid skissen. Figuren 343 px bred med ram och radie, bildtexten under, `scrollWidth` 375 på alla, och bilder som ännu inte hämtats (`naturalWidth` 0) hade redan sin slutliga höjd reserverad (218 px för 600 × 380, 172,5 px för 600 × 300), alltså ingen CLS.
- Utvecklarens tre avvikelser: eager glob behålls (se 9.3), felmeddelandena blir ordagrant desamma efter uppdelningen (modulen kastar svansen, komponenten sätter `[Illustration] namn.svg` framför), varningens lydelse för 40 kB följer 3.5. Ett påpekande utan retur: kommentaren på rad 16 till 17 i `Illustration.astro` säger att måtten tas från viewBox, vilket bara gäller inline-läget; i img-läget kommer de från filens rot och kontrolleras mot viewBox, som rad 85 till 86 säger. Rättas när filen nästa gång rörs.
