# Spec: designlyftet fas C, räknarmallen

UX och bygge, 2026-10-02. Fas B är committad (0ca9eba). Underlaget är Christians godkända skiss Raknare.dc.html, `docs/DESIGN.md` 5.8 och avsnitt 6 (Formulärfält, Mätare, Delningsrad, Gör inte det här, Steg, Chip, Knapp), och `docs/SPEC-SIDMALLAR.md` 4.7.0. Komponentklasserna från fas A och B gäller (`.kort`, `.blad`, `.yta`, `.band`, `.sidram`, `.pappersruta`, `.chip`, `.knapp`, `.steg`, `.rubrikrad`), och reglerna i spec fas A avsnitt 0.

Arbetet sker i steg. **Steg 1** är den delade layouten, de globala formulärreglerna och daggpunkten som förebild; den mäts och granskas innan något annat flyttas. **Steg 2 till 5** är de andra 21 räknarna i fyra grupper (avsnitt 8), en grupp per uppdrag, med riktigt bygge och budget efter varje.

## 0. Villkor

- **SEO** (`docs/SOKORDSANALYS.md` avsnitt 13): svarsytan innehåller alltid, och alltså också utan query, en mening i klartext med talet, villkoret och källan, renderad på servern. `og:image` (`verktygsDelningsbild`), förhandsbilden och `WebApplication` (`verktyg()`) är oförändrade. Brödsmulorna och title är oförändrade.
- **Minsta möjliga ändring per räknare.** Formelmodulerna, testerna, formulärens fältnamn och id, adresserna och query-nycklarna ändras inte. Texterna flyttas ordagrant; en text som inte längre får plats någonstans tas inte bort utan listas i leveransen så att hantverkaren kan avgöra den. Ny publik text bara som `TEXT SAKNAS` med nyckeln i en kommentar på raden.
- **Budget**: ingen räknare över 66 kB vid standardvärden, mätt i dev före och efter, och efter varje steg med riktigt bygge (koordinatorn bygger; arbetaren mäter i dev).
- Noll klient-JS, inga nya beroenden, komponentklasser för allt som upprepas.

## 1. Formulären, globalt (`src/styles/global.css` och `src/lib/kalkyl/stil.ts`)

Inga formulärkomponenter ändras för det här; reglerna slår igenom på alla 22 formulär och de inbäddade.

- `.falt`: `background-color: vit;` (förut papper), `min-height: 50px;` text 18 px (`text-brod-lg`). Ramen kommer som förut från `ramKlass()` (`blyerts-2`, eller `varning` vid fel).
- **Enheten i fältet.** Formulären skriver enheten som `<span>` direkt efter fältet i en flexrad. Regler: `div:has(> .falt + span) { position: relative; }`, `.falt + span { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; font-size: 15px; color: blyerts-2; }`, `.falt:has(+ span) { padding-right: 4.5rem; }`. Kontrollera alla formulär med enheter (Daggpunkt, Elkostnad, Fasadyta, Takbyte, Takavvattning, Avfuktare, Kvadratmeter, Innervagg, Altan, Gipsplugg, MalaUte, BygglovAltan, Grannemedgivande) i dev; ett formulär där spannet inte är en enhet (en hjälptext) rättas med en klass på det spannet i formulärkomponenten, och det skrivs i leveransen.
- **Radioknappar och kryssrutor som knappar.** `.val:has(> input[type="radio"], > input[type="checkbox"])`: `min-height: 46px; padding-inline: 14px; gap: 10px; background-color: vit; border: 1px solid blyerts-2; border-radius: radius-sm; font-size: 15px;` och `input { accent-color: penna; width: 18px; height: 18px; flex-shrink: 0; }`. Vald: `.val:has(:checked) { border: 2px solid blyerts; padding-inline: 13px; font-weight: 700; }`. Fokus: `.val:has(:focus-visible) { outline: 3px solid penna; outline-offset: 2px; }`. Grupperna (fieldset eller div med flera `.val`) får `gap: 8px` mellan knapparna; en grupp som i dag är en flexrad får `flex-wrap: wrap`, och en knapp i en rad får `flex: 1 1 auto`. Kontrollera alla formulär i dev på 375 och 1280.
- `KNAPP_KLASS` är redan `knapp knapp-fylld min-h-13`.

## 2. Nya komponenter (`src/components/ui/`)

- **`Raknarsida.astro`** (layouten, i `src/components/vyer/`). Props: `slug: string; titel: string; beskrivning: string; rubrik: string; reklam?: boolean; butikNamn?: string; delaUrl: string`. Den hämtar `hittaKalkylator(slug)`, pelaren (första i `pelare`), renderar `<Bas title={titel} description={beskrivning} reklam brodsmulor galleri brodsmulorIVy ogBild={verktygsDelningsbild(slug)}>` med `<StrukturData slot="head" data={verktyg({...})} />` som i dag, och lämnar cache-headern åt sidan, där den står kvar. Markup:
  1. `<div class="sidram pt-7">`: `Brodsmulor` (Hantverkstips / Räkna själv / registrets namn som i dag), etiketten "Räkna själv · {pelare.kort}" i `text-penna` etikett-stil (`mt-6`), `<h1 class="m-0 mt-2.5 max-w-3xl font-serif text-h1 lg:text-h1-lg">{rubrik}</h1>`, slot `ingress` (sidan skickar `<p>`; layouten ger den `mt-2.5 text-ingress text-blyerts-2 max-w-3xl` via en klass på omslaget).
  2. `<div id="raknaren" class="raknare mt-7">`: rutnätet `display: grid; gap: 28px;` från 64rem `grid-template-columns: 1fr 1fr; align-items: start;`. Först i källkoden `<div class="raknare-svar">` med svarsytan och resten av svarsspalten, sedan `<div class="raknare-form blad">` (padding 22 px mobil, 26/28 desktop), som från 64rem står i spalt 1, rad 1 (`grid-column: 1; grid-row: 1;`) och svaret i spalt 2. Formulärblocket: slot `forval` (etiketten och chipsen, se 2.5) och slot `formular`.
  3. Svarsspalten, uppifrån med 16 px emellan: `<div class="yta svarsyta">` med etiketten "Kort svar" och slot `svar`; `<div class="kort rad-kort">` med etiketten "Det här gör du" och `<ol class="steg steg-liten">` runt slot `rad` (renderas bara när slotten har innehåll); `<Delningsrad url={delaUrl} />`.
  4. Resonemanget: `<div class="sidram resonemang mt-14">`, från 64rem `grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); gap: 40px; align-items: start;`. Vänster: slot `darfor` (sidan skriver sin H2 med Pennstreck och sina stycken) och, när slot `gorInte` har innehåll, `<div class="yta gor-inte">` med `Ikon namn="stang"` i 26 px `text-varning` och `<p><strong>Gör inte det här.</strong> <slot name="gorInte" /></p>`. Höger: `<div class="kort sa-raknar">` med `<h2 id="sa-raknar-vi" class="etikett-h2">Så räknar jag</h2>` (H2 utan pennstreck, i etikett-stil, som Källor är en undantagen H2) och slot `saRaknarJag`.
  5. `<div class="sidram pb-16 lg:pb-24">` med slot `efter` (räknarens egna sektioner, produkter, tabeller, Läs vidare, Faq), i läsbredd för text och sidbredd för tabeller som i dag.
- **`Svarstal.astro`**: `{ tal: string; enhet: string; vad?: string }`. `<p class="svarstal">` med talet i `font-serif text-siffra-lg lg:text-siffra-xl` (radavståndet ingår i tokens) och en `<span>` med enheten i Zilla Slab 26 px (`font-serif text-h2`) och `vad` under i `text-liten text-blyerts-2`. `display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap;`.
- **`Matare.astro`**: `{ etikett: string; varde: number; grans: number; enhet: string; visat: string; ariaText: string }`. En rad `flex justify-between text-liten text-blyerts-2` med `etikett` och "<strong class="text-blyerts">{visat}</strong> · gränsen {grans} {enhet}" (formaterat med `formateraTal`), och under den `<div class="matare" role="img" aria-label={ariaText}>` med fyllningen (`width: min(100%, varde / (grans × 1,33) × 100 %)`) och gränsstrecket (`left: 75%`), satta med `style` i procent. CSS enligt DESIGN.md (Mätare): stapeln 14 px, `papper` med 1 px `linje`, radie `full`; fyllningen `tumstock`; strecket 3 px `penna`, 6 px över och under. Orden "gränsen" är gränssnitt och står i komponenten (ny text: nyckel `matare.grans`, TEXT SAKNAS).
- **`Statusrad.astro`**: `{ ton: 'ok' | 'varning'; text: string }`. `<p class="statusrad">` fetstil med `Ikon` `check` i `text-ok` eller `varning` i `text-varning`, 22 px, före texten.
- **`Delningsrad.astro`**: `{ url: string }`. `<div class="delningsrad">`: 1 px streckad `linje`, radie `sm`, `px-4 py-3`, `text-liten text-blyerts-2`, `flex flex-wrap items-center gap-x-2.5`; en länkikon i 18 px (ny symbol `ikon-lank` i spriten: två länkar i en kedja, samma stil som de andra; uppdatera antalet i filens kommentar och `IkonNamn`), adressen utan `https://` i `<span class="dela-url">` med `user-select: all; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; flex: 1 1 12rem; color: blyerts;`, och under den hela raden med den befintliga gränssnittstexten "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar." (ordagrant ur sidorna). Ingen knapp, inget `<input>`.
- **Förvalen som chips**: ingen komponent; sidan skriver `<p class="etikett">{rubrik}</p>` och `<ul class="flex flex-wrap gap-2">` med `<a class="chip" href aria-current>` per förval. Vald chip: `.chip[aria-current] { background: blyerts; color: papper; border-color: blyerts; }`.

## 3. Daggpunkten (`src/pages/rakna/daggpunkt.astro`)

Sidan behåller sin frontmatter (formel, tolkning, `tal`, texter) och byter markup mot `<Raknarsida>`:

- `rubrik` = dagens H1, ingressen = dagens ingress. Huvudbilden (varumärkesbilden eller skissen) i huvudet tas bort; `verktygsVarumarkesbild` används inte längre på sidan.
- `forval`: dagens rumsrad (`RUMSRAD_RUBRIK` som etikett, en chip per `RUM_MED_FORVAL` med `TEXT.rumKort[r]`, länken som i dag med `#raknaren`, `aria-current` på det valda).
- `formular`: `<DaggpunktForm indata varden fel />` som i dag.
- `svar`, i ordning: varningsraden vid `resultat.status === 'ogiltig'` (dagens text, `text-varning`); `<Svarstal tal={tal.daggpunkt} enhet="grader" vad={TEXT SAKNAS: daggpunkt.svar.vad} />`; beskedet (`BESKED_RUBRIK[bedomning]` i fetstil, `beskedRad` under, 17 px); `<Matare etikett={TEXT SAKNAS: daggpunkt.matare.etikett} varde={rfYta} grans={75} enhet="%" visat="{tal.rfYta} %" ariaText={...} />` där `ariaText` byggs av samma ord; `<Statusrad ton={bedomning === 'ingen_risk' ? 'ok' : 'varning'} text={KORT_SVAR_YTA[bedomning]} />`; klartextmeningen `TEXT SAKNAS: daggpunkt.klartext` med platshållarna `{daggpunkt}`, `{temp}`, `{rf}` och `{kalla}` ifyllda (källan står i hantverkarens mening), i `text-liten text-blyerts`.
- `rad`: ett `<li>` per `visat.atgarder` med `ATGARDSTEXT[a]` och under den, i `text-liten text-blyerts-2`, dess källrad (dagens text ur listan Därför blev svaret så, ordagrant).
- `darfor`: H2 "Därför blev svaret så" (Pennstreck, samma id) och dagens punkter utom åtgärderna (de står nu i rådskortet), i samma ordning, som stycken med källraden under i `text-liten text-blyerts-2` (inte längre en lista med vänsterlinje).
- `gorInte`: `visat.gorInteDetHar` när bedömningen inte är `ingen_risk`.
- `saRaknarJag`: skissen (`<Illustration namn="rakna/daggpunkt" ...>` som i dag, i en `<div class="pappersruta">`), dagens steg i ord, och antagandetabellen i `<Tabellyta kolumner={3}>` som i dag.
- `efter`: avsnittet om avfuktaren när `visaAvfuktare`, daggpunktstabellen med läsarens cell markerad (`bg-tumstock font-bold`, om den inte redan är det), avsnittet "Vad daggpunkten är..." med typfallen, Läs vidare (H2 och tre Artikelkort i stället för dagens lista: artiklarna dagens lista pekar på, med `tillKortArtikel`, `visaBeskrivning={false} visaMeta={false}`), och `<Faq>`.
- Den gamla Kort svar-faktarutan, länkarna "står under verktyget" och "Så räknar jag" i resultatspalten, och etiketten "Dela uträkningen" med det skrivskyddade fältet tas bort. Meningarna i Kort svar-faktarutan som inte står någon annanstans på sidan listas i leveransen.

## 4. Kontroller för steg 1

1. Mät `/rakna/daggpunkt/` i dev före och efter, standardvärden och `?rum=kallare`, `?rum=fonster`, `?rum=vind`, `?temp=abc` (ogiltig).
2. `npx astro check --minimumSeverity error` 0 fel; alla räknartester gröna; `npm run kontrollera` bara TEXT SAKNAS-fel och kända varningar.
3. Skärmdumpar i `scratchpad\fas-c\` på 375 och 1280: `/rakna/daggpunkt/` (standard, `?rum=fonster`, `?temp=abc`), och formulären i två andra räknare som inte flyttats än (`/rakna/avfuktare/`, `/rakna/elkostnad/`) för att se att de globala formulärreglerna håller där. `scrollWidth` 375.
4. Tabba genom daggpunkten på 1280 och 375: chips, fält, radioknappar, knapp, adressen i delningsraden går att markera.
5. Kontrollera att `og:image`, `WebApplication` och `BreadcrumbList` i HTML:en är oförändrade mot före.
6. Bygg inte, committa inte.

## 5. Nycklar i steg 1

`matare.grans`, `daggpunkt.svar.vad`, `daggpunkt.matare.etikett`, `daggpunkt.klartext` (platshållarna `{daggpunkt}`, `{temp}`, `{rf}`, `{kalla}`).

## 6. Filer i steg 1

`src/styles/global.css`, `src/lib/kalkyl/stil.ts` (om något där behöver justeras för fälten), `src/assets/brand/riktning-1/ikoner.svg` och `src/components/ui/Ikon.astro` (`lank`), nya `src/components/vyer/Raknarsida.astro`, `src/components/ui/Svarstal.astro`, `Matare.astro`, `Statusrad.astro`, `Delningsrad.astro`, och `src/pages/rakna/daggpunkt.astro`. Formulärkomponenter bara enligt avsnitt 1 (en klass på ett spann som inte är en enhet).

## 7. Steg 2 till 5, mönstret

Varje räknare flyttas som daggpunkten: H1 och ingress till props och slot, förval (om räknaren har dem) som chips, formuläret oförändrat, svaret i `Svarstal` och beskedet, `Matare` där räknaren har en gräns, `Statusrad` där sidan har en sådan bedömning, klartextmeningen (`[slug].klartext`, TEXT SAKNAS, med platshållare för talet och standardvärdena), råden i rådskortet, Därför blev svaret så och Gör inte det här i resonemangets vänsterspalt, Så räknar jag-kortet till höger, resten i `efter`, Läs vidare som kort. Produktkort efter svaret i `efter` som i dag (avfuktaren). Varje grupp får en egen kort spec-rad i avsnitt 8 med mätarna och det som avviker.

## 8. Grupperna

- **Steg 2**: avfuktare, elkostnad, u-varde (mätaren: U-värdet mot kravet 0,13), kallare, dranering.
- **Steg 3**: innervagg, gipsplugg, gipsskruv, kvadratmeter, trappa.
- **Steg 4**: bygglov-altan, grannemedgivande, altan, kontrollplan, mala-ute, fasadyta.
- **Steg 5**: rotavdrag, badrum-kostnad, kok-kostnad, takbyte, takavvattning.

Mätarna utöver daggpunkt och u-värde bestäms i respektive steg av UX och bygge, bara där räknaren har en gräns ur en källa.

## 9. Granskning av steg 1, 2026-10-02

Godkänt med två ändringar, som också gäller mönstret i steg 2 till 5:

1. **Antagandetabellen ut ur kortet.** Så räknar jag-kortet bär skissen i pappersrutan och stegen i ord. Tabellen "Vad siffrorna vilar på" (H3 och `Tabellyta`) står i stället först i `efter`, i läsbredd, så att tre spalter inte pressas in i kortets bredd. Ankaret `#sa-raknar-vi` stannar på kortets rubrik.
2. **Produktkortet** (koordinatorn): reservfallet där testets `kopInteOm` visas som svaghet tas bort i `src/components/ui/Produktkort.astro`. Utan `svaghet` visas bara granskningsmeningen.

Svar på arbetarens frågor: de tre raderna från den gamla resultatspalten står rätt först i Därför blev svaret så; Läs vidare får ha fyra kort när den gamla listan hade fyra länkar (`kolumner={4}`, aldrig fler); vid ogiltig indata står varningsraden först och statusraden visar standardvärdenas bedömning, och DESIGN.md 5.8 ändras till det. Enhetens placering med negativ marginal i stället för absolut placering godtas.
