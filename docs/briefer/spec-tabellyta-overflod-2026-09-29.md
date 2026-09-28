# Spec: ledtext och tonad kant bara när tabellen scrollar

UX och bygge-agenten, 2026-09-29. Beställd av koordinatorn efter granskningen av `/rakna/badrum-kostnad/`, där posttabellen ryms på 375 px men ändå får "Dra i sidled" och en tonad kant över sista siffran.

## 1. Problemet

Tre ställen ritar samma yta: `.tabell-yta` runt `.tabell-behallare`, med en ledtext ovanför. Villkoret för när ledtexten och kanten syns är en gissning om antalet kolumner, inte om tabellen faktiskt är bredare än ytan:

| Var | Ledtext i dag | Tonad kant i dag |
|---|---|---|
| `src/components/ui/Tabellyta.astro` (räknarna, kategorisidan, jämförelser) | från tre kolumner, under lg | alltid under lg |
| `src/components/ui/Jamforelsetabell.astro` | alltid under lg | alltid under lg |
| Markdown-tabeller i MDX (`astro.config.mjs`, hast-pluginet, `.brodtabell-block`) | från tre kolumner via `:has()`, under lg | från tre kolumner, under lg |

## 2. Lösningen, utan JavaScript

En namngiven scroll-tidslinje på behållaren. Finns det inget att scrolla är tidslinjen inaktiv, och då slår en animation som hänger på den aldrig till. Ledtexten och kanten är dolda som utgångsläge och görs synliga av en animation på tidslinjen. De syns alltså bara när tabellen är bredare än ytan, på vilken skärmbredd som helst.

- `scroll-timeline: --tabell inline` på `.tabell-behallare`.
- `timeline-scope: --tabell` på blocket som håller både ledtexten och ytan. Ledtexten ligger utanför behållaren och ser annars inte tidslinjen. Varje block har sitt eget scope, så flera tabeller på samma sida stör inte varandra.
- Ledtexten: `display: none` som utgångsläge och en animation med keyframes `from, to { display: block }` på `animation-timeline: --tabell`, `animation-fill-mode: both`.
- Kanten, `.tabell-yta::after`: `opacity: 0` som utgångsläge och en animation från `opacity: 1` till `opacity: 0` på samma tidslinje. Kanten syns då fullt vid start och tonar bort när läsaren har dragit tabellen till slutet, vilket är rätt signal.
- Allt det här står i `@supports (timeline-scope: --a) and (animation-timeline: scroll())`.
- **Reserv:** i webbläsare utan stöd (Firefox i dag) gäller dagens regler oförändrade. De står i `@supports not (…)` eller är fallback som det nya blocket skriver över. Ingen läsare får sämre än i dag.

Vid lg och större gäller samma sak: ryms tabellen syns ingenting, och ryms den inte syns ledtexten och kanten. Dagens `lg:hidden` och `@media (min-width: 64rem)`-regler behövs bara i reserven.

**Inget JavaScript, ingen ny fil, inget nytt beroende.**

## 3. Ändringar

**`src/styles/global.css`**, bara blocken om `.tabell-behallare`, `.tabell-yta`, `.tabell-yta::after` och `.prosa .tabell-dra` med följande `:has`-regler, rad 418–446 och 516–548 ungefär. Filen har ocommittade ändringar från pelararbetet. Läs den direkt innan du ändrar, redigera med Edit på de blocken, och skriv aldrig över filen.

- `.tabell-dra` blir en klass som inte är bunden till `.prosa`: samma typografi som i dag (`--text-liten`, `--color-blyerts-2`, marginal 0 0 8px). Reglerna med `.prosa`-prefixet står kvar i reserven.
- `timeline-scope` sätts på `.brodtabell-block` och på den nya klassen `.tabell-block`.
- Kommentarerna förklarar tekniken och reserven i två till fyra rader, med hänvisning till den här specen.

**`src/components/ui/Tabellyta.astro`**
- Det yttre `<div>` får klassen `tabell-block` bredvid `klass`.
- Ledtextens `<p>` får `class="tabell-dra"` i stället för `lg:hidden m-0 mb-2 text-liten text-blyerts-2`. Utseendet kommer nu från CSS, och HTML:en blir kortare.
- Villkoret `kolumner >= 3` för att rendera ledtexten står kvar, eftersom det styr reserven. Propen och alla anrop är oförändrade.
- Huvudkommentaren uppdateras.

**`src/components/ui/Jamforelsetabell.astro`**
- Elementet som omsluter ledtexten och `.tabell-yta` får klassen `tabell-block`. Finns inget sådant element, lägg klassen på närmaste gemensamma förälder utan att ändra layouten.
- Ledtexten får `class="tabell-dra"`. Texten "Dra i sidled för att se alla" står kvar ordagrant.
- Reserven ska visa ledtexten under lg som i dag. Lägg en klass eller regel för det i reservblocket.

**Rörs inte:** `astro.config.mjs` (pluginets markup räcker, eftersom `.brodtabell-block` och `.tabell-dra` redan finns), MDX-filer, sidor, andra komponenter. Ingen `npm run build`, ingen commit.

## 4. Budget

HTML får inte växa på någon sida. Tabellyta och Jämförelsetabell ska bli kortare. MDX-sidorna ska vara byte för byte oförändrade, eftersom ingen markup ändras. CSS-filen får växa med högst 1 kB.

Mät med `npm run dev` (sätt porten själv, och stäng din egen server efteråt, inte någon annans):
- `node scripts/budget-html.mjs --dev http://localhost:<port>` före och efter (räknarna). Rapportera alla rader.
- De statiska sidorna finns inte i dev-skriptet. Mät dessa med samma rensning före och efter:
  - `/fasad/mala-om-huset/`, `/grund/inreda-kallare/`, `/fukt/avfuktare-kallare/`, `/luftavfuktare/`, `/el/u-varde/`, `/fukt/avfuktare-krypgrund/`, `/el/tillaggsisolera-vind/` och `/fukt/fukt-i-kallaren/` (de åtta största i `dist/client`)
  - en jämförelsesida under `/jamforelser/`
- Rapportera byte före och efter per adress.

## 5. Kontroll på 375 px

Edge headless har ett minsta fönster på 492 px. Lägg sidan i en `<iframe>` som är 375 px bred i en HTML-fil i scratchpad, ta en skärmbild med `msedge --headless=new --user-data-dir=<egen mapp> --window-size=500,4200 --virtual-time-budget=25000 --run-all-compositor-stages-before-draw --screenshot=…` via PowerShell `Start-Process … WaitForExit`, och beskär till 375 med sharp. Mät dessutom med `--dump-dom` på samma sätt som du gjorde för badrumsräknaren: behållarens `scrollWidth` mot `clientWidth` och om ledtexten har `display: block`.

| Sida | Tabell | Väntat |
|---|---|---|
| `/rakna/badrum-kostnad/?yta=7&niva=mellan&egen=rivning&timpris=750` | posttabellen (ryms) | ingen ledtext, ingen kant |
| samma | antagandetabellen (scrollar) | ledtext och kant, kanten borta när den dragits till slutet |
| `/luftavfuktare/` | jämförelsetabellen (scrollar) | ledtext och kant |
| en MDX-sida med en bred tabell i brödtexten (sök en med fyra eller fler kolumner) | brödtabell | ledtext och kant |
| en MDX-sida med en tabell i två eller tre kolumner som ryms | brödtabell | ingen ledtext, ingen kant |
| samma sidor vid 1280 px, utan iframe | alla | ledtext och kant bara där tabellen verkligen scrollar |

Rapportera skärmbildernas sökvägar och mätvärdena. Jag tittar på bilderna själv.

## 6. Godkännande

1. `npx astro check --minimumSeverity error` 0 fel.
2. Tabellen i avsnitt 5 stämmer på varje rad.
3. Ingen sida blev större i HTML, och ingen ligger över 67 584 byte.
4. Reserven är dagens regler, oförändrade i verkan (jag läser CSS:en).
5. Ingen fil utanför avsnitt 3 är ändrad.

Efter godkännandet skriver jag in regeln i `docs/DESIGN.md` avsnitt 6, "Tabell i brödtext".
