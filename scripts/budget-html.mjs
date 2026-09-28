/**
 * HTML-budgeten: högst 66 kB (67 584 byte) per sida i filen, allt inräknat.
 * Spec: docs/briefer/spec-skal-budget-2026-09-28.md avsnitt 8.1 och 13.
 *
 *   node scripts/budget-html.mjs
 *   node scripts/budget-html.mjs --preview https://<förhandsgranskning>.vercel.app
 *   node scripts/budget-html.mjs --dev http://localhost:4321
 *
 * Utan flagga mäts varje .html under dist/client, alltså de statiska sidorna
 * efter `npm run build`. Så körs skriptet i bygget.
 *
 * Räknarna renderas på servern och finns inte i dist/client. De hämtas vid
 * standardvärden (varje slug i src/lib/kalkyl/register.ts), plus adresserna i
 * EXTRA, med en av två flaggor:
 *
 * --preview tar adressen till en driftsatt version: en Vercel-förhandsgranskning
 *   eller produktion. Det är den enda miljö som ger räknarnas riktiga HTML;
 *   `astro preview` fungerar inte med Vercel-adaptern.
 * --dev tar adressen till `npm run dev`. Skriptet skalar då bort det dev lägger
 *   till (skript utom JSON-LD, stilblocken i <head>, data-astro-source-*), och
 *   raderna märks "(dev, cirka ±1 kB)": metoden skiljer ungefär så mycket från
 *   bygget.
 *
 * För varje sida över gränsen skrivs klassattributens summa i <main>, <main>s
 * storlek och den synliga textens storlek i <main>, som tabellen i specens
 * avsnitt 0.
 *
 * Avslutar med kod 1 när
 *   - en sida utan undantag är över gränsen,
 *   - en sida med undantag är över sitt tak, eller
 *   - en sida har en inlinad ikonsprite (<use href="data:…">, som inte fungerar
 *     i alla webbläsare; spriten ska vara en fil i /_astro/).
 * Annars 0. En sida med undantag som ligger under gränsen ger en varning: då
 * kan undantaget tas bort.
 *
 * Körs sist i `npm run build`, utan flagga (spec avsnitt 14.4).
 *
 * Ren Node utan beroenden.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const GRANS = 67_584;
const DIST = 'dist/client';

/** Räknaradresser utöver standardvärdena, mätta med samma gräns. */
const EXTRA = ['/rakna/grannemedgivande/?grans=2&jarnvag=1'];

/**
 * Sidor som får ligga över gränsen tills ett namngivet arbete är byggt. Taket är
 * sidans storlek plus 1 024 byte: sidan får ligga över 66 kB men inte växa.
 * Den som gör en sida lättare sänker dess tak i samma ändring, och undantaget
 * tas bort i den ändring som gör sidan lätt nog; skriptet varnar när det går.
 * Spec: spec-skal-budget-2026-09-28 avsnitt 14.4 och 15.1. Tom sedan
 * 2026-09-28: alla sidor ligger under 66 kB (spec-kategorisida-budget-2026-09-28).
 *
 * @type {Map<string, { tak: number; skal: string }>}
 */
const UNDANTAG = new Map();

const DEV_MARKNING = ' (dev, cirka ±1 kB)';

const kB = (byte) => (byte / 1024).toFixed(1).replace('.', ',');
const bytelangd = (text) => Buffer.byteLength(text, 'utf8');

/** Alla .html under en mapp, rekursivt. */
function htmlFiler(mapp) {
  const ut = [];
  for (const namn of readdirSync(mapp)) {
    const sokvag = join(mapp, namn);
    if (statSync(sokvag).isDirectory()) ut.push(...htmlFiler(sokvag));
    else if (namn.endsWith('.html')) ut.push(sokvag);
  }
  return ut;
}

/** Filsökväg i dist/client till adress: dist/client/altan/index.html blir /altan/. */
function adress(fil) {
  const rel = '/' + relative(DIST, fil).split(sep).join('/');
  return rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
}

/** Räknarnas slugs ur registret, lästa som text: modulen är TypeScript. */
function raknarSlugs() {
  const kalla = readFileSync('src/lib/kalkyl/register.ts', 'utf8');
  return [...kalla.matchAll(/^\s+slug:\s*'([^']+)'/gm)].map((m) => m[1]);
}

/** Tar bort det dev-servern lägger till och bygget inte har. */
function utanDev(html) {
  return html
    .replace(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<head>[\s\S]*?<\/head>/, (head) => head.replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, ''))
    .replace(/\s+data-astro-source-(?:file|loc)="[^"]*"/g, '');
}

/** Klassattribut, <main> och synlig text i <main>, i byte. */
function analys(html) {
  const main = /<main\b[\s\S]*?<\/main>/.exec(html)?.[0] ?? '';
  const klasser = [...main.matchAll(/\sclass="[^"]*"/g)].reduce((s, m) => s + bytelangd(m[0]), 0);
  const text = main
    .replace(/<(script|style|svg|template)\b[\s\S]*?<\/\1>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    // Ett klassattribut kan innehålla > ([&_dl>div]:contents), så citattecknen respekteras.
    .replace(/<(?:[^>"']|"[^"]*"|'[^']*')*>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, 'x')
    .replace(/\s+/g, ' ')
    .trim();
  return { klasser, main: bytelangd(main), text: bytelangd(text) };
}

const sidor = [];

for (const fil of htmlFiler(DIST)) {
  const html = readFileSync(fil, 'utf8');
  sidor.push({ sida: adress(fil), byte: statSync(fil).size, html, markning: '' });
}

const argPreview = process.argv.indexOf('--preview');
const argDev = process.argv.indexOf('--dev');
if (argPreview !== -1 && argDev !== -1) {
  console.error('Ange --preview eller --dev, inte båda.');
  process.exit(2);
}
const dev = argDev !== -1;
const flagga = dev ? argDev : argPreview;
if (flagga !== -1) {
  const bas = process.argv[flagga + 1];
  if (!bas) {
    console.error(
      dev
        ? '--dev behöver adressen till npm run dev, till exempel http://localhost:4321'
        : '--preview behöver adressen till en driftsatt version, en Vercel-förhandsgranskning eller produktion, till exempel https://www.hantverkstips.se. astro preview fungerar inte med Vercel-adaptern; mät mot dev med --dev.',
    );
    process.exit(2);
  }
  const adresser = [...raknarSlugs().map((s) => `/rakna/${s}/`), ...EXTRA];
  for (const a of adresser) {
    const svar = await fetch(new URL(a, bas));
    if (!svar.ok) {
      console.error(`${a}: HTTP ${svar.status}`);
      process.exitCode = 1;
      continue;
    }
    const html = dev ? utanDev(await svar.text()) : await svar.text();
    sidor.push({ sida: a, byte: bytelangd(html), html, markning: dev ? DEV_MARKNING : '' });
  }
}

sidor.sort((a, b) => b.byte - a.byte);

const bred = Math.max(...sidor.map((s) => s.sida.length));
console.log(`${'sida'.padEnd(bred)}  ${'byte'.padStart(7)}  ${'kB'.padStart(6)}`);
for (const s of sidor) {
  const u = UNDANTAG.get(s.sida);
  const over =
    s.byte <= GRANS ? '' : !u ? '  ÖVER' : s.byte > u.tak ? `  ÖVER, OCH ÖVER TAKET ${u.tak}` : `  ÖVER, undantag till ${u.tak}`;
  console.log(`${s.sida.padEnd(bred)}  ${String(s.byte).padStart(7)}  ${kB(s.byte).padStart(6)}${over}${s.markning}`);
}

const over = sidor.filter((s) => s.byte > GRANS);
const stoppar = over.filter((s) => {
  const u = UNDANTAG.get(s.sida);
  return !u || s.byte > u.tak;
});
console.log(
  `\n${sidor.length} sidor mätta, ${over.length} över ${GRANS} byte (66 kB), varav ${over.length - stoppar.length} undantag.`,
);

if (over.length > 0) {
  console.log(`\n${'sida över gränsen'.padEnd(bred)}  ${'kB'.padStart(6)}  ${'klasser i main'.padStart(14)}  ${'main'.padStart(6)}  ${'text'.padStart(6)}`);
  for (const s of over) {
    const a = analys(s.html);
    console.log(
      `${s.sida.padEnd(bred)}  ${kB(s.byte).padStart(6)}  ${kB(a.klasser).padStart(14)}  ${kB(a.main).padStart(6)}  ${kB(a.text).padStart(6)}${s.markning}`,
    );
  }
}
for (const s of over) {
  const u = UNDANTAG.get(s.sida);
  if (!u) continue;
  if (s.byte > u.tak) console.error(`${s.sida}: ${s.byte} byte är över undantagets tak ${u.tak}. Skäl till undantaget: ${u.skal}.`);
  else console.log(`Undantag ${s.sida}, tak ${u.tak} byte: ${u.skal}.`);
}
for (const [sida] of UNDANTAG) {
  const s = sidor.find((x) => x.sida === sida);
  if (s && s.byte <= GRANS) console.warn(`VARNING  Undantaget för ${sida} kan tas bort (${s.byte} byte).`);
}
if (stoppar.length > 0) process.exitCode = 1;

const dataSprite = sidor.filter((s) => s.html.includes('<use href="data:'));
for (const s of dataSprite) {
  console.error(`${s.sida}: <use href="data:…">. Ikonspriten är inlinad som data-URI; den ska vara en fil i /_astro/.`);
}
if (dataSprite.length > 0) process.exitCode = 1;
