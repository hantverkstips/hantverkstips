# Spec: `immutable`-cache på `/_astro/` i produktion, och de två gamla adresserna

Skriven 2026-09-22 av UX och bygge. Byggs av `utvecklare`. Godkänns av UX och bygge mot avsnitt 8. Bygget körs av koordinatorn, inte av utvecklaren.

## 1. Problemet, mätt

Skisserna serveras sedan `dcf8209` som `<img src="/_astro/...">` (`docs/briefer/spec-skisser-som-img-2026-09-22.md`). Specen antog att allt under `/_astro/` får `Cache-Control: public, max-age=31536000, immutable` från Vercel. Det stämmer inte i produktion. Mätt 2026-09-22 15:43 UTC:

```
$ curl -sI https://www.hantverkstips.se/_astro/Bas.BtkGuJgO.css
HTTP/1.1 200 OK
Age: 112
Cache-Control: public, max-age=0, must-revalidate
Etag: "27840a1cde5d22377ae48d98ec3e3409"
X-Vercel-Cache: HIT
```

CDN:et cachar filen (`HIT`, `Age`), men webbläsaren får `max-age=0` och gör ett villkorat anrop per fil vid varje sidvisning. Med en CSS-fil och en till tre skisser per sida är det två till fyra 304-rundturer som inte behövs, på varje sida, för varje besökare. Det bryter avsikten i `docs/ARKITEKTUR.md` (avsnittet om skisser: "hashad, `immutable`-cache från Vercel").

## 2. Orsaken: en känd regression i adaptern

`.vercel/output/config.json` från bygget ser ut så här (rutt 3 och 4):

```json
{ "handle": "filesystem" },
{ "src": "^/_astro/(.*)$", "headers": { "cache-control": "public, max-age=31536000, immutable" }, "continue": true }
```

Vercels dokumentation för Build Output API v3 (`vercel.com/docs/build-output-api/configuration`, avsnittet Handler route) säger: "The routing system has multiple phases. The `handle` value indicates the start of a phase. All following routes are only checked in that phase." Och om värdet `filesystem`: "check matches after the filesystem misses". En fil som finns i `static/` serveras alltså av filsystemet innan rutterna efter `{"handle":"filesystem"}` överhuvudtaget prövas. Huvudrutten når bara anrop som inte är filer, i praktiken 404-svaret. Den måste stå före handtaget, med `continue: true` ("If true, routing will continue even when the src is matched"), så att huvudet sätts och filsystemet sedan serverar filen.

Adaptern `@astrojs/vercel` 11.0.10 skriver rutten på fel plats. I `node_modules/@astrojs/vercel/dist/index.js` rad 343 till 351 läggs den i `finalRoutes`, som sedan hamnar efter det som `getTransformedRoutes` skapar (rad 401), och `getTransformedRoutes` avslutar sin lista med `{"handle":"filesystem"}`. Det är buggen i `withastro/astro` PR 18008, "Fix Vercel adapter cache-control regression", sammanslagen 2026-09-17, changeset: "Fixes the immutable `Cache-Control` rule for hashed assets (`/_astro/*`) being emitted after the `filesystem` route handle in `.vercel/output/config.json`." Regressionen kom i 8.0.5 (januari 2025). Reproduktion med exakt våra versioner (Astro 7.3.3, adapter 11.0.10) finns i `github.com/phildotdev/astro-vercel-immutable-repro`.

Fixen är inte utgiven. `npm view @astrojs/vercel` 2026-09-22: `latest` är 11.0.10, publicerad 2026-09-03; PR:en slogs ihop två veckor senare. Fixen flyttar regeln in i `getTransformedRoutes` som ett `headers`-objekt med `source: '/_astro/(.*)'`, så att den hamnar efter redirects och före filsystemshandtaget (testet i PR:en: `lastRedirectIndex < cacheIndex < handleIndex`). När den släpps (troligen 11.0.11) gör adaptern själv rätt.

**Adaptern har ingen inställning som löser det nu.** `staticHeaders: true` (dokumenterad på docs.astro.build som "Enables specifying custom headers for prerendered pages") tar huvuden från Astros förrenderade sidrutter (`_routeToHeaders`, rad 234 och 408 till 418) och lägger dem före handtaget, men det är sidornas huvuden, inte tillgångarnas; `/_astro/` är ingen rutt i Astro. Att uppgradera adaptern går inte förrän versionen finns. Att ändra `build.assets` hjälper inte, det byter bara namnet i samma felplacerade rutt.

## 3. Varför `vercel.json` fungerar ihop med Build Output API

Vercel bygger projektet med samma kod som `vercel build` (`vercel.com/docs/cli/build`: "Build artifacts are placed into the `.vercel/output` directory according to the Build Output API"). Den koden är öppen: `vercel/vercel`, `internals/cli-builder-integration/src/do-build.ts` (läst från `main` 2026-09-22). Kedjan:

1. Rad 409 till 435: `vercel.json` läses in som `localConfig`.
2. Rad 545: `const routesResult = getTransformedRoutes(localConfig);` gör om `headers`, `redirects`, `rewrites` och `trailingSlash` till lågnivårutter.
3. Rad 1452 till 1534: när byggaren lämnat en Build Output-mapp läses `.vercel/output/config.json` (adapterns fil) in som byggarens resultat, med dess `routes`.
4. Rad 2082: `mergeRoutes({ userRoutes: routesResult.routes, builds: builderRoutes })` slår ihop dem, och resultatet skrivs som slutlig `config.json` (rad 2163 och framåt).

`mergeRoutes` (`node_modules/@vercel/routing-utils/dist/merge.js` rad 76 till 125) grupperar båda listorna per fas (`null` före första handtaget, sedan per `handle`) och skriver per fas: byggarens `continue`-rutter, sedan användarens rutter, sedan byggarens `check`-rutter, sedan byggarens övriga. En `headers`-post i `vercel.json` hamnar därför i fasen före `{"handle":"filesystem"}`, före adapterns 308-regler för snedstreck. Det är samma mekanism som Vercels egen dokumentation visar för statiska filer (`vercel.com/docs/project-configuration/vercel-json`, avsnittet headers: "This example configures custom response headers for static files, Vercel functions, and a wildcard that matches all routes", med `/assets/(.*)` och `public, max-age=31556952, immutable` som exempel under Configure Cache-Control Headers). Ingenstans i dokumentationen står att `vercel.json` ignoreras när utdata kommer från Build Output API; adaptern räknar tvärtom med att filen läses och varnar om `trailingSlash` i `vercel.json` strider mot Astros (`dist/index.js` rad 187 till 196).

Simulerat 2026-09-22 med exakt de funktionerna (`getTransformedRoutes` och `mergeRoutes` ur `@vercel/routing-utils` 6.6.0 i `node_modules`, på dagens `.vercel/output/config.json` och innehållet i avsnitt 5). Resultatet, de första sju rutterna:

```
0 {"src":"^/inomhus/dreva-fonster/$","headers":{"Location":"/fasad/dreva-fonster/"},"status":301}
1 {"src":"^/inomhus/slipa-bankskiva/$","headers":{"Location":"/kok/slipa-bankskiva/"},"status":301}
2 {"src":"^/_astro(?:/(.*))$","headers":{"Cache-Control":"public, max-age=31536000, immutable"},"continue":true}
3 {"src":"^/\\.well-known(?:/.*)?$"}
4 {"src":"^/((?:[^/]+/)*[^/\\.]+)$","headers":{"Location":"/$1/"},"status":308}
5 {"src":"^/((?:[^/]+/)*[^/]+\\.\\w+)/$","headers":{"Location":"/$1"},"status":308}
6 {"handle":"filesystem"}
```

Adapterns felplacerade rutt ligger kvar efter handtaget och gör ingen skada. När adapterfixen släpps får `config.json` två likadana regler före handtaget; det är också ofarligt, och `vercel.json` får stå kvar som det dokumenterade stället för sajtens huvuden och omdirigeringar.

## 4. Beslut: minsta ingreppet

En ny fil `vercel.json` i projektroten. Ingen adapterinställning, inget efterbyggnadsskript, ingen ändring i `astro.config.mjs` utöver kommentaren i avsnitt 6. Alternativen och varför de valdes bort:

- **Efterbyggnadsskript som flyttar rutten i `config.json`.** Fungerar, men lägger sig mellan adaptern och Vercel, går sönder tyst när adaptern ändrar sin utdata, och blir onödigt när fixen släpps. Bara om avsnitt 7 steg 4 misslyckas; se plan B sist i avsnitt 7.
- **Vänta på adaptern.** Ingen tidsplan, och varje sidvisning betalar tills dess.
- **`trailingSlash` i `vercel.json`.** Sätts inte. Astro sköter det, och adaptern varnar vid motstridiga värden.

`.vercelignore` påverkar inte `vercel.json`. Filen läses av Vercel från källträdet, inte från `dist/`.

## 5. Filens innehåll

`vercel.json`, exakt:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "headers": [
    {
      "source": "/_astro/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "redirects": [
    { "source": "/inomhus/dreva-fonster/", "destination": "/fasad/dreva-fonster/", "statusCode": 301 },
    { "source": "/inomhus/slipa-bankskiva/", "destination": "/kok/slipa-bankskiva/", "statusCode": 301 }
  ]
}
```

- `source` följer `vercel.json`-syntaxen (path-to-regexp), inte Build Output-syntaxen: `/_astro/(.*)`, inte `^/_astro/(.*)$`. Vercel gör om det till `^/_astro(?:/(.*))$`.
- `statusCode: 301` i stället för `permanent: true`, som ger 308. Dokumentationen: "`statusCode`: An optional integer to define the status code of the redirect. Used when you need a value other than 307/308 from `permanent`, and therefore cannot be used with `permanent` boolean." 301 är vad `docs/ARKITEKTUR.md` föreskriver och vad serverrutterna svarar i dag.
- `source` med avslutande snedstreck, eftersom det är den adress som är publicerad och indexerad. Se avsnitt 6.
- JSON kan inte bära kommentarer. Förklaringen står i det här dokumentet och i `docs/ARKITEKTUR.md` (avsnitt 6, punkt 4).

## 6. Rutterna 8 och 9: gamla adresser som serverrenderas

`{"src":"^/inomhus/dreva-fonster/$","dest":"_render"}` och motsvarande för `slipa-bankskiva` kommer från `src/pages/inomhus/dreva-fonster.astro` och `src/pages/inomhus/slipa-bankskiva.astro`: två sidor med `prerender = false` som svarar `Astro.redirect('/fasad/dreva-fonster/', 301)` respektive `'/kok/slipa-bankskiva/'`. De skrevs i commit `a4104a6` (2026-09-17) när artiklarna flyttade pelare, efter att `redirects` i `astro.config.mjs` (commit `9a5ef1f`) gett 404 i produktion.

Varför `redirects` i Astro-konfigen inte fungerade: adaptern bygger regeln av Astros ruttsegment, som aldrig innehåller avslutande snedstreck (`dist/lib/redirects.js`, `getRedirects`), och `@vercel/routing-utils` gör `sourceToRegex` med `strict: true`. Resultatet blir `^/inomhus/dreva-fonster$`. `getTransformedRoutes` lägger dessutom `trailingSlash`-reglerna före `redirects` (`dist/index.js` rad 293 till 303 mot 311 till 356), så ett anrop utan snedstreck möter först 308 till adressen med snedstreck, och den matchar sedan ingen regel: 404. Det är inte en bugg som går att konfigurera bort i Astro; nyckeln `'/inomhus/dreva-fonster/'` normaliseras till samma segment.

Vad serverrutterna kostar i dag (mätt 2026-09-22):

```
$ curl -sI https://www.hantverkstips.se/inomhus/dreva-fonster/
HTTP/1.1 301 Moved Permanently
Cache-Control: public, max-age=0, must-revalidate
Location: /fasad/dreva-fonster/
X-Vercel-Cache: MISS
X-Vercel-Id: arn1::iad1::...
```

Varje träff är en funktionsanrop i `iad1`, inte cachat, för ett svar som är en konstant. Google har adresserna i sitt index sedan artiklarna publicerades och kommer att hämta dem länge.

**Beslut:** omdirigeringarna flyttar till `vercel.json` (avsnitt 5), där `docs/ARKITEKTUR.md` redan säger att de ska ligga ("En publicerad URL byts aldrig utan 301 (`vercel.json`, redirects)"). Serverrutterna var en nödlösning och tas bort. Ändringar, alla i denna spec:

1. Radera `src/pages/inomhus/dreva-fonster.astro` och `src/pages/inomhus/slipa-bankskiva.astro`. Då försvinner rutt 8 och 9 ur `config.json`, och Astros filbaserade rutt `[rot]/[slug]` tar inte över: pelaren `inomhus` har ingen artikel med de sluggarna, och adressen matchar `vercel.json` innan filsystemet prövas.
2. `astro.config.mjs` rad 129 till 131, kommentaren ovanför `trailingSlash`, byts till en som säger att flyttade artiklar omdirigeras i `vercel.json` med 301, att `redirects` här inte används eftersom adaptern skriver regeln utan avslutande snedstreck (behåll den meningen, den är sann och sparar nästa person en timme), och hänvisar hit.
3. Ett anrop utan snedstreck, `/inomhus/dreva-fonster`, får två hopp: adapterns 308 till adressen med snedstreck, sedan 301. Den formen har aldrig varit länkad eller publicerad, så det accepteras; inga extra poster för det.
4. `docs/ARKITEKTUR.md`: i stycket om skissen som `<img>` (den som lyder "hashad, `immutable`-cache från Vercel") läggs en mening om att huvudet sätts i `vercel.json` eftersom adaptern 11.0.10 skriver sin egen regel efter filsystemshandtaget (PR 18008, ej utgiven 2026-09-22), med hänvisning till den här specen. Inga andra ändringar i dokumentet.

## 7. Så verifieras det

Före deploy, lokalt, utan bygge:

1. `node -e "JSON.parse(require('fs').readFileSync('vercel.json','utf8'))"` går igenom.
2. Simuleringen körs och visar att de tre användarrutterna står före `{"handle":"filesystem"}` (spara skriptet i scratchpad, inte i repot):

```js
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(process.cwd() + '/package.json');
const { getTransformedRoutes, mergeRoutes } = require('@vercel/routing-utils');
const adapter = JSON.parse(readFileSync('.vercel/output/config.json', 'utf8'));
const user = getTransformedRoutes(JSON.parse(readFileSync('vercel.json', 'utf8')));
if (user.error) throw user.error;
const merged = mergeRoutes({ userRoutes: user.routes, builds: [{ use: '@vercel/static-build', entrypoint: 'package.json', routes: adapter.routes }] });
merged.forEach((r, i) => console.log(i, JSON.stringify(r)));
```

Förväntat: index 0 och 1 är 301-rutterna, index 2 är `^/_astro(?:/(.*))$` med `continue: true`, `{"handle":"filesystem"}` kommer efter. (`.vercel/output/config.json` finns från förra bygget; koordinatorn bygger om innan steg 3 så att rutt 8 och 9 är borta.)

3. `npx astro check --minimumSeverity error`: 0 fel. `npm run kontrollera`: 0 fel. Inga räknartester berörs.
4. Koordinatorn bygger (`npm run build`, grönt) och pushar. Vercels förhandsdeploy för grenen (GitHub-integrationen, `origin` är `github.com/hantverkstips/hantverkstips`) kontrolleras först, sedan produktion efter merge. Mot förhandsadressen respektive `https://www.hantverkstips.se`:

```
curl -sI https://www.hantverkstips.se/_astro/Bas.<hash>.css | grep -i '^cache-control'
# Förväntat: Cache-Control: public, max-age=31536000, immutable
curl -sI https://www.hantverkstips.se/_astro/<en-skiss>.svg | grep -i '^cache-control'
# Förväntat: samma
curl -sI https://www.hantverkstips.se/inomhus/dreva-fonster/ | grep -i '^HTTP\|^location\|^x-vercel-id'
# Förväntat: HTTP/1.1 301, Location: /fasad/dreva-fonster/, och X-Vercel-Id utan andra regionen (ingen funktion)
curl -sI https://www.hantverkstips.se/inomhus/slipa-bankskiva/ | grep -i '^HTTP\|^location'
# Förväntat: 301, Location: /kok/slipa-bankskiva/
curl -sI https://www.hantverkstips.se/fasad/dreva-fonster/ | grep -i '^HTTP\|^cache-control'
# Förväntat: 200, oförändrat huvud (public, max-age=0, must-revalidate): sidorna ska inte påverkas
curl -sI 'https://www.hantverkstips.se/rakna/daggpunkt/' | grep -i '^cache-control'
# Förväntat: public, s-maxage=3600, stale-while-revalidate=86400, oförändrat
```

Filnamnen med hash hämtas ur `dist/client/_astro/` efter bygget. Cachehuvudet på HTML-sidorna och räknarna får inte ändras; det är kontrollen på att `source` inte matchar för brett.

**Plan B**, bara om steg 4 visar `max-age=0` på `/_astro/` trots att simuleringen i steg 2 gav rätt ordning: då tillämpar Vercel inte `vercel.json` på detta projekt av ett skäl som inte syns i koden, och det utreds med `mcp__vercel__get_deployment` (ruttlistan i deployen) innan något skript skrivs. Ett efterbyggnadsskript specas i så fall separat; det ingår inte här.

## 8. Godkännandekriterium

Godkänt när alla sex `curl`-raderna i steg 4 ger förväntat svar i produktion, `astro check` och `kontrollera` är gröna, de två `.astro`-filerna är borta, kommentaren i `astro.config.mjs` och meningen i `docs/ARKITEKTUR.md` är ändrade, och inga andra filer rörts. Ett `max-age=0` på en `/_astro/`-fil är retur.

## 9. Filer som får röras

- `vercel.json` (ny, avsnitt 5)
- `src/pages/inomhus/dreva-fonster.astro` (raderas)
- `src/pages/inomhus/slipa-bankskiva.astro` (raderas)
- `astro.config.mjs` (bara kommentaren rad 129 till 131)
- `docs/ARKITEKTUR.md` (en mening, avsnitt 6 punkt 4)

Inget annat. Inte `package.json`, inte adapterversionen, inte `src/components/ui/Illustration.astro`, inga skript.

## 10. Utanför uppdraget, noterat

- Typsnitten ligger i `public/fonts/` utan hash och får samma `max-age=0` som allt statiskt i `public/`. De byts nästan aldrig, men utan hash i namnet kan de inte bli `immutable` utan att ett byte fastnar i besökarnas cache i ett år. Om det ska ändras är det en egen spec med hashade filnamn, inte en rad till i `vercel.json`.
- När `@astrojs/vercel` med PR 18008 släpps: uppgradera, bygg, och kontrollera att `config.json` har regeln före handtaget. `vercel.json` behålls ändå.

## Källor

- Vercel, Build Output Configuration: `https://vercel.com/docs/build-output-api/configuration` (läst 2026-09-22, sidan daterad 2026-07-27)
- Vercel, Static Configuration with vercel.json: `https://vercel.com/docs/project-configuration/vercel-json` (läst 2026-09-22, sidan daterad 2026-08-14)
- Vercel, vercel build: `https://vercel.com/docs/cli/build` (läst 2026-09-22)
- Vercel CLI-källa: `https://github.com/vercel/vercel/blob/main/internals/cli-builder-integration/src/do-build.ts` (läst 2026-09-22)
- `@vercel/routing-utils` 6.6.0, `dist/index.js` (`getTransformedRoutes`), `dist/merge.js` (`mergeRoutes`), `dist/superstatic.js` (`sourceToRegex`, `convertTrailingSlash`), i `node_modules`
- `@astrojs/vercel` 11.0.10, `dist/index.js` rad 187 till 196, 343 till 418, `dist/lib/redirects.js`, i `node_modules`
- withastro/astro PR 18008: `https://github.com/withastro/astro/pull/18008` (sammanslagen 2026-09-17), diff läst via `patch-diff.githubusercontent.com`
- Reproduktion: `https://github.com/phildotdev/astro-vercel-immutable-repro`
- `npm view @astrojs/vercel time dist-tags` 2026-09-22: latest 11.0.10 (2026-09-03)
- Astro, @astrojs/vercel: `https://docs.astro.build/en/guides/integrations-guide/vercel/` (`staticHeaders`)
- Produktionsmätningar med `curl -sI` 2026-09-22 15:43 UTC, avsnitt 1 och 6
