#!/usr/bin/env node
/**
 * Konverterar all <text> i illustrationerna till <path>, så att ingen webbfont
 * behövs i webbläsaren (DESIGN.md avsnitt 2 och 7: handskriften i Caveat 500
 * skickas aldrig som webbfont, texten är banor innan publicering).
 *
 * Flöde:
 *   src/assets/illustrationer-kallor/[pelare]/[namn].svg   källa med <text>, redigeras
 *   src/assets/illustrationer/[pelare]/[namn].svg          publicerad, bara <path>
 *
 * Körs med `npm run illustrationer`, och ingår i `npm run build` före astro build.
 *
 * - Finns en källa konverteras den till motsvarande fil under illustrationer/.
 * - Finns bara en publicerad fil som fortfarande har <text> sparas den först som
 *   källa och konverteras sedan på plats.
 * - Idempotent: en fil utan <text> lämnas orörd, och en oförändrad utdata skrivs inte om.
 *
 * Typsnitten ligger i scripts/typsnitt/ (OFL, committade, deployas sedan
 * 2026-09-17 även till Vercel, se .vercelignore).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';

const HAR = path.dirname(fileURLToPath(import.meta.url));
const ROT = path.resolve(HAR, '..');
const MAL_KATALOG = path.join(ROT, 'src', 'assets', 'illustrationer');
const KALL_KATALOG = path.join(ROT, 'src', 'assets', 'illustrationer-kallor');
const TYPSNITT_KATALOG = path.join(HAR, 'typsnitt');

/** Decimaler i banans koordinater. En tiondels användarenhet är en tiondels bildpunkt i skissens skala. */
const DECIMALER = 1;

/**
 * Största tillåtna avvikelse när kurvor slås ihop, i användarenheter (ungefär bildpunkter).
 * Caveat är en tecknad handstil med 70 till 120 kurvsegment per tecken. Utan förenkling
 * blir en illustration flera hundra kB. 0,2 är en femtedels bildpunkt, alltså osynligt i
 * text på 16 till 19 px, men tar bort fyra femtedelar av punkterna.
 */
const TOLERANS = 0.2;

/** Hur många segment som får slås ihop till ett. */
const MAX_IHOP = 16;

/** font-family i SVG:en → fil i scripts/typsnitt/. Vikten avgör bara för Atkinson. */
const TYPSNITT = {
  caveat: () => 'caveat-500.ttf',
  'zilla slab': () => 'zilla-slab-600.ttf',
  'atkinson hyperlegible': (vikt) =>
    vikt >= 600 ? 'atkinson-hyperlegible-700.ttf' : 'atkinson-hyperlegible-400.ttf',
};
const RESERVTYPSNITT = 'atkinson-hyperlegible-400.ttf';

/** Attribut som <text> bär men som en <path> inte ska ärva. fill sätts uttryckligen. */
const TEXTATTRIBUT = new Set([
  'x', 'y', 'dx', 'dy', 'rotate', 'textLength', 'lengthAdjust',
  'font-family', 'font-size', 'font-weight', 'font-style', 'font-stretch', 'font-variant',
  'text-anchor', 'letter-spacing', 'word-spacing', 'dominant-baseline', 'alignment-baseline',
  'baseline-shift', 'writing-mode', 'text-decoration', 'xml:space', 'fill',
]);

/** Presentationsattribut som ärvs nedåt i dokumentet. */
const ARVDA = [
  'font-family', 'font-size', 'font-weight', 'font-style',
  'fill', 'text-anchor', 'letter-spacing', 'word-spacing',
];

const laddade = new Map();

function laddaTypsnitt(fil) {
  if (laddade.has(fil)) return laddade.get(fil);
  const sokvag = path.join(TYPSNITT_KATALOG, fil);
  if (!fs.existsSync(sokvag)) {
    throw new Error(
      `Typsnittet saknas: ${path.relative(ROT, sokvag)}. Hämta om filerna enligt docs/DESIGN.md bilaga B.`,
    );
  }
  const buf = fs.readFileSync(sokvag);
  const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  laddade.set(fil, font);
  return font;
}

/** "'Caveat', 'Segoe Print', cursive" → "caveat" */
function forstaFamiljen(varde) {
  if (!varde) return '';
  const forsta = varde.split(',')[0].trim();
  return forsta.replace(/^['"]|['"]$/g, '').trim().toLowerCase();
}

function tolkaVikt(varde) {
  if (!varde) return 400;
  const v = String(varde).trim().toLowerCase();
  if (v === 'bold') return 700;
  if (v === 'normal') return 400;
  const n = Number.parseInt(v, 10);
  return Number.isFinite(n) ? n : 400;
}

function valjTypsnitt(familj, vikt, varningar) {
  const valj = TYPSNITT[familj];
  if (!valj) {
    varningar.add(familj || '(ingen font-family)');
    return RESERVTYPSNITT;
  }
  return valj(vikt);
}

/** Längd i användarenheter. "0.06em" tolkas mot teckenstorleken. */
function tolkaLangd(varde, teckenstorlek, standard = 0) {
  if (varde === undefined || varde === null || varde === '') return standard;
  const m = String(varde).trim().match(/^(-?[\d.]+)\s*(px|em|pt|%)?$/);
  if (!m) return standard;
  const tal = Number.parseFloat(m[1]);
  if (!Number.isFinite(tal)) return standard;
  switch (m[2]) {
    case 'em': return tal * teckenstorlek;
    case 'pt': return tal * (4 / 3);
    case '%': return (tal / 100) * teckenstorlek;
    default: return tal;
  }
}

// ---------------------------------------------------------------------------
// Banan: konturer, förenkling och utskrift
// ---------------------------------------------------------------------------

/**
 * opentypes kommandon → konturer med segment. Ett segment är en rät linje (L)
 * eller en kvadratisk kurva (Q). Innehåller banan kubiska kurvor (CFF-typsnitt)
 * ger funktionen null, och den som anropar faller tillbaka på opentypes utskrift.
 */
function konturer(kommandon) {
  const ut = [];
  let nuvarande = null;
  for (const k of kommandon) {
    if (k.type === 'M') {
      nuvarande = { start: { x: k.x, y: k.y }, segment: [], sluten: false };
      ut.push(nuvarande);
    } else if (k.type === 'L') {
      if (!nuvarande) return null;
      nuvarande.segment.push({ typ: 'L', p: { x: k.x, y: k.y } });
    } else if (k.type === 'Q') {
      if (!nuvarande) return null;
      nuvarande.segment.push({ typ: 'Q', c: { x: k.x1, y: k.y1 }, p: { x: k.x, y: k.y } });
    } else if (k.type === 'Z') {
      if (nuvarande) nuvarande.sluten = true;
      nuvarande = null;
    } else {
      return null; // C eller något annat: förenkla inte
    }
  }
  return ut;
}

function punktPaSegment(p0, seg, t) {
  if (seg.typ === 'L') {
    return { x: p0.x + (seg.p.x - p0.x) * t, y: p0.y + (seg.p.y - p0.y) * t };
  }
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * seg.c.x + t * t * seg.p.x,
    y: u * u * p0.y + 2 * u * t * seg.c.y + t * t * seg.p.y,
  };
}

/** Kortaste avståndet från punkten p till sträckan a–b, i kvadrat. */
function avstandTillStracka(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const langd = dx * dx + dy * dy;
  let t = langd === 0 ? 0 : ((p.x - a.x) * dx + (p.y - a.y) * dy) / langd;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const qx = a.x + t * dx - p.x;
  const qy = a.y + t * dy - p.y;
  return qx * qx + qy * qy;
}

/** Punkter längs en följd av segment, för att mäta hur mycket en förenkling avviker. */
function provpunkter(p0, segment) {
  const punkter = [];
  let start = p0;
  for (const seg of segment) {
    const steg = seg.typ === 'L' ? 2 : 6;
    for (let i = 1; i <= steg; i += 1) punkter.push(punktPaSegment(start, seg, i / steg));
    start = seg.p;
  }
  return punkter;
}

/** Största avvikelsen mellan provpunkterna och en kvadratisk kurva (eller linje). */
function avvikelse(punkter, p0, c, p1) {
  const linje = c === null;
  const prov = [];
  if (linje) {
    prov.push(p0, p1);
  } else {
    const steg = 24;
    for (let i = 0; i <= steg; i += 1) prov.push(punktPaSegment(p0, { typ: 'Q', c, p: p1 }, i / steg));
  }
  let varst = 0;
  for (const p of punkter) {
    let bast = Infinity;
    for (let i = 0; i < prov.length - 1; i += 1) {
      const d = avstandTillStracka(p, prov[i], prov[i + 1]);
      if (d < bast) bast = d;
    }
    if (bast > varst) varst = bast;
  }
  return Math.sqrt(varst);
}

/** Tangentriktning i början respektive slutet av en segmentföljd. */
function tangenter(p0, segment) {
  const forsta = segment[0];
  const sista = segment[segment.length - 1];
  const foreSista = segment.length > 1 ? segment[segment.length - 2].p : p0;
  const start = forsta.typ === 'Q' ? forsta.c : forsta.p;
  const slut = sista.typ === 'Q' ? sista.c : foreSista;
  return [
    { x: start.x - p0.x, y: start.y - p0.y },
    { x: sista.p.x - slut.x, y: sista.p.y - slut.y },
  ];
}

/**
 * Försöker ersätta en följd av segment med ett enda. Returnerar segmentet om
 * avvikelsen håller sig under toleransen, annars null.
 */
function slaIhop(p0, segment, tolerans) {
  const p1 = segment[segment.length - 1].p;
  const punkter = provpunkter(p0, segment);

  // Rät linje först, den är billigast att skriva.
  if (avvikelse(punkter, p0, null, p1) <= tolerans) return { typ: 'L', p: p1 };

  const [t0, t1] = tangenter(p0, segment);
  const namnare = t0.x * t1.y - t1.x * t0.y;
  if (Math.abs(namnare) < 1e-9) return null;
  const d = { x: p1.x - p0.x, y: p1.y - p0.y };
  const a = (d.x * t1.y - t1.x * d.y) / namnare;
  const b = (t0.x * d.y - d.x * t0.y) / namnare;
  if (!(a > 0) || !(b > 0)) return null;
  const c = { x: p0.x + a * t0.x, y: p0.y + a * t0.y };

  // Styrpunkten får inte skena iväg: den ska ligga i närheten av kurvan.
  const korda = Math.hypot(d.x, d.y);
  if (Math.hypot(c.x - p0.x, c.y - p0.y) > 6 * korda + tolerans) return null;

  if (avvikelse(punkter, p0, c, p1) <= tolerans) return { typ: 'Q', c, p: p1 };
  return null;
}

/** Slår ihop segment girigt så länge avvikelsen håller sig under toleransen. */
function forenklaKontur(kontur, tolerans) {
  const segment = kontur.segment;
  const ut = [];
  let start = kontur.start;
  let i = 0;
  while (i < segment.length) {
    let basta = { till: i, seg: segment[i] };
    for (let j = i + 1; j < Math.min(segment.length, i + MAX_IHOP); j += 1) {
      const kandidat = slaIhop(start, segment.slice(i, j + 1), tolerans);
      if (!kandidat) break;
      basta = { till: j, seg: kandidat };
    }
    ut.push(basta.seg);
    start = basta.seg.p;
    i = basta.till + 1;
  }
  return { start: kontur.start, segment: ut, sluten: kontur.sluten };
}

function tal(n, decimaler) {
  let s = n.toFixed(decimaler);
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  s = s.replace(/^(-?)0\./, '$1.');
  if (s === '-0') s = '0';
  return s;
}

/** Skriver konturerna som d-attribut, med upprepade kommandobokstäver utelämnade. */
function skrivBana(lista, decimaler) {
  let ut = '';
  let forra = '';
  const lagg = (token) => {
    if (ut !== '' && !/[A-Za-z]$/.test(ut) && !token.startsWith('-')) ut += ' ';
    ut += token;
  };
  const kommando = (bokstav, ...varden) => {
    if (bokstav !== forra || bokstav === 'M') {
      ut += bokstav;
      forra = bokstav;
    }
    for (const v of varden) lagg(tal(v, decimaler));
  };
  for (const kontur of lista) {
    forra = '';
    kommando('M', kontur.start.x, kontur.start.y);
    for (const seg of kontur.segment) {
      if (seg.typ === 'L') kommando('L', seg.p.x, seg.p.y);
      else kommando('Q', seg.c.x, seg.c.y, seg.p.x, seg.p.y);
    }
    if (kontur.sluten) {
      ut += 'Z';
      forra = 'Z';
    }
  }
  return ut;
}

/** Banans d-attribut, förenklat när det går. */
function banData(bana) {
  const lista = konturer(bana.commands);
  if (!lista) return bana.toPathData(DECIMALER);
  return skrivBana(lista.map((k) => forenklaKontur(k, TOLERANS)), DECIMALER);
}

function avkoda(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(Number.parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number.parseInt(d, 10)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

/** xml:space="default": radbrytningar bort, tabbar till mellanslag, serier av mellanslag till ett. */
function normaliseraText(s) {
  return s.replace(/[\r\n]+/g, '').replace(/\t/g, ' ').replace(/ {2,}/g, ' ').trim();
}

function tolkaAttribut(text) {
  const attr = {};
  const re = /([A-Za-z_:][\w:.-]*)\s*=\s*("([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    attr[m[1]] = m[3] !== undefined ? m[3] : m[4];
  }
  return attr;
}

function serialiseraAttribut(namn, varde) {
  return `${namn}="${String(varde).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')}"`;
}

/**
 * Konverterar alla <text> i en SVG-källa till <path>. Allt annat i filen,
 * inklusive ordning, kommentarer och indrag, lämnas som det är.
 */
function konvertera(kalla, etikett) {
  const varningar = new Set();
  let antal = 0;
  let ut = '';
  let pos = 0;
  /** Stack med öppna elements attribut, för ärvda presentationsattribut. */
  const stack = [];

  const symbol = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>|<(\/?)([A-Za-z_][\w:.-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)(\/?)>/g;
  let m;
  while ((m = symbol.exec(kalla)) !== null) {
    const [hela, slut, namn, attributtext, sjalvstangd] = m;
    if (namn === undefined) continue; // kommentar, CDATA, PI eller DOCTYPE

    if (slut === '/') {
      stack.pop();
      continue;
    }

    if (namn !== 'text') {
      if (sjalvstangd !== '/') stack.push(tolkaAttribut(attributtext));
      continue;
    }

    // <text> hittad. Hela elementet ska bytas ut.
    const egna = tolkaAttribut(attributtext);
    let innehall = '';
    let elementSlut = m.index + hela.length;
    if (sjalvstangd !== '/') {
      const stangIndex = kalla.indexOf('</text>', elementSlut);
      if (stangIndex === -1) {
        console.warn(`  ! ${etikett}: <text> utan </text>, hoppar över`);
        continue;
      }
      innehall = kalla.slice(elementSlut, stangIndex);
      elementSlut = stangIndex + '</text>'.length;
      symbol.lastIndex = elementSlut;
    }

    if (/<[A-Za-z/]/.test(innehall)) {
      console.warn(`  ! ${etikett}: <text> med element inuti (tspan?) konverteras inte, skrivs oförändrad`);
      continue;
    }

    const text = normaliseraText(avkoda(innehall));
    const arvt = (attribut) => {
      if (egna[attribut] !== undefined) return egna[attribut];
      for (let i = stack.length - 1; i >= 0; i -= 1) {
        if (stack[i][attribut] !== undefined) return stack[i][attribut];
      }
      return undefined;
    };
    const varden = Object.fromEntries(ARVDA.map((a) => [a, arvt(a)]));

    const teckenstorlek = tolkaLangd(varden['font-size'], 16, 16);
    const vikt = tolkaVikt(varden['font-weight']);
    const familj = forstaFamiljen(varden['font-family']);
    const font = laddaTypsnitt(valjTypsnitt(familj, vikt, varningar));

    // opentype räknar letterSpacing som andel av teckenstorleken.
    const sparrning = tolkaLangd(varden['letter-spacing'], teckenstorlek, 0) / teckenstorlek;
    const flaggor = { kerning: true, letterSpacing: sparrning };

    let x = tolkaLangd(egna.x, teckenstorlek, 0) + tolkaLangd(egna.dx, teckenstorlek, 0);
    const y = tolkaLangd(egna.y, teckenstorlek, 0) + tolkaLangd(egna.dy, teckenstorlek, 0);

    const ankare = (varden['text-anchor'] || 'start').trim();
    if (text !== '' && (ankare === 'middle' || ankare === 'end')) {
      const bredd = font.getAdvanceWidth(text, teckenstorlek, flaggor);
      x -= ankare === 'middle' ? bredd / 2 : bredd;
    }

    if (text === '') {
      ut += kalla.slice(pos, m.index);
      pos = elementSlut;
      antal += 1;
      continue;
    }

    const d = banData(font.getPath(text, x, y, teckenstorlek, flaggor));

    const attributUt = [serialiseraAttribut('d', d)];
    if (varden.fill !== undefined) attributUt.push(serialiseraAttribut('fill', varden.fill));
    // Allt som inte är text- eller typsnittsspecifikt följer med (transform, id, class, opacity ⬦).
    for (const [namnPaAttribut, varde] of Object.entries(egna)) {
      if (TEXTATTRIBUT.has(namnPaAttribut)) continue;
      attributUt.push(serialiseraAttribut(namnPaAttribut, varde));
    }

    ut += kalla.slice(pos, m.index) + `<path ${attributUt.join(' ')}/>`;
    pos = elementSlut;
    antal += 1;
  }

  ut += kalla.slice(pos);
  for (const familj of varningar) {
    console.warn(`  ! ${etikett}: okänd font-family "${familj}", satt med Atkinson Hyperlegible 400`);
  }
  return { ut, antal };
}

function svgFiler(katalog) {
  if (!fs.existsSync(katalog)) return [];
  const resultat = [];
  const ga = (dir) => {
    for (const post of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, post.name);
      if (post.isDirectory()) ga(full);
      else if (post.isFile() && post.name.endsWith('.svg')) resultat.push(path.relative(katalog, full));
    }
  };
  ga(katalog);
  return resultat.sort();
}

function kB(byte) {
  return `${(byte / 1024).toFixed(1)} kB`;
}

/**
 * Typsnitten behövs bara när något faktiskt ska konverteras. Sedan 2026-09-17
 * följer scripts/typsnitt/ med deployen, eftersom delningsbilderna byggs på
 * Vercel, men kontrollen står kvar: illustrationerna är redan banor när de
 * committas, och bygget ska inte falla på en mapp som saknas.
 */
function typsnittFinns() {
  return fs.existsSync(TYPSNITT_KATALOG) && fs.readdirSync(TYPSNITT_KATALOG).some((f) => f.endsWith('.ttf'));
}

function main() {
  const relativa = new Set(svgFiler(KALL_KATALOG));
  const harTypsnitt = typsnittFinns();

  // Publicerade filer som ännu har <text> och saknar källa: spara källan först.
  for (const rel of svgFiler(MAL_KATALOG)) {
    if (relativa.has(rel)) continue;
    const mal = path.join(MAL_KATALOG, rel);
    if (!/<text[\s>]/.test(fs.readFileSync(mal, 'utf8'))) continue;
    const kalla = path.join(KALL_KATALOG, rel);
    fs.mkdirSync(path.dirname(kalla), { recursive: true });
    fs.copyFileSync(mal, kalla);
    console.log(`  + sparade källa: src/assets/illustrationer-kallor/${rel.replace(/\\/g, '/')}`);
    relativa.add(rel);
  }

  let totaltKonverterade = 0;
  let rorda = 0;

  for (const rel of [...relativa].sort()) {
    const visa = rel.replace(/\\/g, '/');
    const kallaFil = path.join(KALL_KATALOG, rel);
    const malFil = path.join(MAL_KATALOG, rel);
    const kalla = fs.readFileSync(kallaFil, 'utf8');

    if (!/<text[\s>]/.test(kalla)) {
      console.log(`  ${visa}: ingen <text>, orörd`);
      continue;
    }

    if (!harTypsnitt) {
      const redan = fs.existsSync(malFil) && !/<text[\s>]/.test(fs.readFileSync(malFil, 'utf8'));
      if (redan) {
        console.log(`  ${visa}: typsnitten finns inte i den här miljön, behåller den konverterade filen`);
        continue;
      }
      throw new Error(
        `${visa} har <text> men scripts/typsnitt/ är tom. Hämta typsnitten enligt docs/DESIGN.md bilaga B och kör om.`,
      );
    }

    const { ut, antal } = konvertera(kalla, visa);
    const fore = Buffer.byteLength(kalla, 'utf8');
    const efter = Buffer.byteLength(ut, 'utf8');
    const fanns = fs.existsSync(malFil) ? fs.readFileSync(malFil, 'utf8') : null;

    if (fanns === ut) {
      console.log(`  ${visa}: ${antal} textelement, oförändrad (${kB(efter)})`);
    } else {
      fs.mkdirSync(path.dirname(malFil), { recursive: true });
      fs.writeFileSync(malFil, ut, 'utf8');
      console.log(`  ${visa}: ${antal} textelement till banor, ${kB(fore)} → ${kB(efter)}`);
      rorda += 1;
    }
    totaltKonverterade += antal;
  }

  console.log(
    `Illustrationer: ${totaltKonverterade} textelement konverterade, ${rorda === 1 ? '1 fil skriven' : `${rorda} filer skrivna`}.`,
  );
}

main();
