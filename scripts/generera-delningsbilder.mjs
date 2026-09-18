#!/usr/bin/env node
/**
 * Genererar de rasterbilder som måste ligga som riktiga filer under public/:
 *
 *   public/og-standard.png          1200 × 630, sajtgemensam delningsbild (og:image)
 *   public/brand/logga.png            512 × 512, publisher.logo i Article-markupen
 *   public/og/rakna-[slug].png      1200 × 630, en per kalkylator i registret
 *   public/og/[samling]-[slug].png  1200 × 630, en per publicerad innehållssida
 *                                   i guider, kunskap, tester, jamforelser och pelare
 *
 * Google vill ha en rasterbild på minst 112 × 112 px som logotyp, och Facebook,
 * LinkedIn och Slack hämtar ingen SVG. Allt byggs ur ordmärket och symbolen i
 * src/assets/brand/riktning-1/, med texten konverterad till banor på samma sätt
 * som illustrationerna (DESIGN.md avsnitt 2 och 7): ingen webbfont behövs i
 * webbläsaren, och sharp behöver ingen font installerad för att rendera.
 *
 * Alla 1200 × 630-bilder ser ut som ett uppslag i anteckningsboken (DESIGN.md
 * avsnitt 7): papper som yta, sidans namn till vänster i Zilla Slab 600 med ett
 * pennstreck under, ordmärket nere till vänster, och sidans egen bild inklistrad
 * till höger. Texten är alltid banor, aldrig <text>.
 *
 * Vilken bild som hamnar till höger, i tur och ordning:
 *   1. frontmatterfältet `bild`, när det pekar på en SVG under
 *      src/assets/illustrationer/ (alltså den konverterade filen, utan <text>)
 *   2. den första <Illustration namn="..." /> i brödtexten. Tester, jämförelser
 *      och pelarhubbar har ingen bild i frontmatter och får sin bild härifrån
 *   3. ingen bild alls: då sätts titeln större och tumstockssymbolen står till
 *      höger i stället
 *
 * Idempotent: en bild skrivs om bara när någon av dess källor är nyare än
 * PNG-filen, alltså när innehållsfilen (och därmed titeln), illustrationen,
 * symbolen, typsnittet eller det här skriptet har ändrats. `--alla` bygger om
 * allt oavsett tidsstämplar.
 *
 * Registret importeras direkt som TypeScript. Node 24 avlägsnar typerna själv,
 * äldre Node behöver `node --experimental-strip-types`, som npm-skriptet sätter.
 *
 *   npm run delningsbilder        bygger det som ändrats
 *   npm run delningsbilder -- --alla   bygger om allt
 *
 * Ingår i `npm run build` före astro build, efter npm run illustrationer.
 * En ny artikel får alltså sin delningsbild i samma bygge som den publiceras i,
 * också på Vercel: typsnitten under scripts/typsnitt/ följer med deployen sedan
 * undantaget för dem togs bort ur .vercelignore 2026-09-17. PNG-filerna är
 * fortfarande committade, så bygget bygger normalt om ingenting.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';
import { lasFrontmatter, strang } from './frontmatter.ts';
import { KALKYLATORER } from '../src/lib/kalkyl/register.ts';

const HAR = path.dirname(fileURLToPath(import.meta.url));
const ROT = path.resolve(HAR, '..');
const SKRIPT = fileURLToPath(import.meta.url);
const TYPSNITT = path.join(HAR, 'typsnitt', 'zilla-slab-600.ttf');
const REGISTER = path.join(ROT, 'src', 'lib', 'kalkyl', 'register.ts');
const SYMBOL = path.join(ROT, 'src', 'assets', 'brand', 'riktning-1', 'symbol.svg');
const ILLUSTRATIONER = path.join(ROT, 'src', 'assets', 'illustrationer');
const SKISSER = path.join(ILLUSTRATIONER, 'rakna');
const INNEHALL = path.join(ROT, 'src', 'content');

/** Samlingar som får en delningsbild per publicerad fil. */
const SAMLINGAR = ['guider', 'kunskap', 'tester', 'jamforelser', 'pelare'];

const TVINGA = process.argv.slice(2).some((a) => a === '--alla' || a === '--tvinga');

// Tokens ur src/styles/global.css. Hårdkodade här för att sharp inte läser CSS.
const PAPPER = '#f5efe3';
const LINJE = '#c9bca3';
const BLYERTS = '#2a2521';
const PENNA = '#ad3519';

const varningar = [];
function varna(text) {
  varningar.push(text);
}

/** Innehållet i en SVG utan <svg>-höljet, så att den kan placeras i en <g>. */
function utanHolje(svg) {
  const start = svg.indexOf('>', svg.indexOf('<svg')) + 1;
  const slut = svg.lastIndexOf('</svg>');
  return svg.slice(start, slut).trim();
}

function symbolInnehall() {
  return utanHolje(fs.readFileSync(SYMBOL, 'utf8'));
}

/**
 * Den konverterade skissen för ett verktyg, 600 × 360 och utan <text>.
 * Saknas filen returneras null: ett nytt verktyg ska gå att bygga innan
 * designansvarig hunnit rita skissen, precis som src/lib/verktygsbild.ts är
 * byggd för. Delningsbilden får då tumstocken till höger, som en innehållssida
 * utan egen bild, och varningen säger vilken fil som fattas.
 */
function skissInnehall(slug) {
  const fil = path.join(SKISSER, `${slug}.svg`);
  if (!fs.existsSync(fil)) {
    varna(
      `Skissen saknas: ${path.relative(ROT, fil)}. Delningsbilden får tumstocken så länge. Rita källan i src/assets/illustrationer-kallor/rakna/ och kör npm run illustrationer.`,
    );
    return null;
  }
  const svg = fs.readFileSync(fil, 'utf8');
  if (/<text[\s>]/.test(svg)) {
    throw new Error(
      `${path.relative(ROT, fil)} har <text> kvar. Kör npm run illustrationer innan delningsbilderna byggs.`,
    );
  }
  return utanHolje(svg);
}

function textBana(font, text, x, y, storlek, sparrningPx) {
  const flaggor = { kerning: true, letterSpacing: sparrningPx / storlek };
  return {
    d: font.getPath(text, x, y, storlek, flaggor).toPathData(1),
    bredd: font.getAdvanceWidth(text, storlek, flaggor),
  };
}

function laddaFont() {
  if (!fs.existsSync(TYPSNITT)) {
    throw new Error(
      `Typsnittet saknas: ${path.relative(ROT, TYPSNITT)}. Hämta filerna enligt docs/DESIGN.md bilaga B.`,
    );
  }
  const buf = fs.readFileSync(TYPSNITT);
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}

/** 1200 × 630 med symbolen, ordet och pennstrecket centrerade på papper. */
function ogSvg(font) {
  const B = 1200;
  const H = 630;
  const storlek = 104;
  const symbolSkala = 5.2; // 32 × 5,2 = 166 px hög symbol
  const symbolBredd = 32 * symbolSkala;
  const mellanrum = 40;

  const { d, bredd } = textBana(font, 'Hantverkstips', 0, 0, storlek, -1.4);
  const total = symbolBredd + mellanrum + bredd;
  const vanster = (B - total) / 2;
  const mitt = H / 2 - 20;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">
  <rect width="${B}" height="${H}" fill="${PAPPER}"/>
  <g transform="translate(${vanster.toFixed(1)} ${(mitt - (32 * symbolSkala) / 2).toFixed(1)}) scale(${symbolSkala})">
    ${symbolInnehall()}
  </g>
  <g transform="translate(${(vanster + symbolBredd + mellanrum).toFixed(1)} ${(mitt + storlek * 0.36).toFixed(1)})">
    <path d="${d}" fill="${BLYERTS}"/>
    <path d="M2,${(storlek * 0.3).toFixed(1)} Q${(bredd * 0.35).toFixed(1)},${(storlek * 0.24).toFixed(1)} ${(bredd * 0.7).toFixed(1)},${(storlek * 0.29).toFixed(1)} T${(bredd - 2).toFixed(1)},${(storlek * 0.27).toFixed(1)}" fill="none" stroke="${PENNA}" stroke-width="8" stroke-linecap="round"/>
  </g>
</svg>`;
}

// ---------------------------------------------------------------------------
// Gemensam mall för 1200 × 630
// ---------------------------------------------------------------------------

const B = 1200;
const H = 630;
const MARGINAL = 72;
/** Baslinje och storlek för ordmärket nere till vänster. */
const ORDMARKE_BASLINJE = 552;
const ORDMARKE_STORLEK = 30;
/** Lodrät mitt för titelblocket, alltså mitt i ytan ovanför ordmärket. */
const TEXT_MITT = 278;
/** Titeln får aldrig gå på fler rader än så. Krymper i stället. */
const MAX_RADER = 3;

/** Bredden på namnets spalt, alltså från vänstermarginalen till skissens kant. */
const NAMN_BREDD = 452;
/** Största teckenstorlek för namnet. Längre namn krymper tills båda raderna får plats. */
const NAMN_MAX = 54;

/** Spärrning som andel av teckenstorleken, samma optiska täthet som i ordmärket. */
const SPARRNING = -0.013;

/** Sidor med bild: smal titelspalt, bilden till höger i 560 px. */
const MED_BILD = { titelBredd: 452, max: 52, min: 26, bildX: B - MARGINAL - 560, bildBredd: 560, bildHojd: 470 };
/** Sidor utan bild: bred titelspalt, större titel, tumstocken till höger. */
const UTAN_BILD = { titelBredd: 740, max: 78, min: 34, symbolPx: 260 };

/**
 * Bryter titeln på rader som var och en ryms i maxBredd. Girigt, ord för ord:
 * titlarna är korta och en rad blir aldrig så lång att girigheten syns.
 */
function bryt(font, text, storlek, maxBredd) {
  const flaggor = { kerning: true, letterSpacing: SPARRNING };
  const rader = [];
  let aktuell = '';
  for (const ord of text.split(/\s+/).filter(Boolean)) {
    const prov = aktuell ? `${aktuell} ${ord}` : ord;
    if (aktuell && font.getAdvanceWidth(prov, storlek, flaggor) > maxBredd) {
      rader.push(aktuell);
      aktuell = ord;
    } else {
      aktuell = prov;
    }
  }
  if (aktuell) rader.push(aktuell);
  return rader;
}

/**
 * Samma antal rader, men så jämnt fördelade som möjligt: spalten krymps tills
 * en rad till skulle behövas, och den smalaste brytningen med oförändrat
 * radantal vinner. Utan det får en tvåradig titel gärna sex ord på första raden
 * och ett på andra.
 */
function balansera(font, text, storlek, maxBredd) {
  const bas = bryt(font, text, storlek, maxBredd);
  let basta = bas;
  for (let b = maxBredd - 8; b > 120; b -= 8) {
    const prov = bryt(font, text, storlek, b);
    if (prov.length !== bas.length) break;
    basta = prov;
  }
  return basta;
}

/** Största storlek där titeln ryms i spalten på högst tre rader. */
function valjStorlek(font, text, maxBredd, max, min) {
  for (let storlek = max; storlek >= min; storlek -= 1) {
    const rader = bryt(font, text, storlek, maxBredd);
    if (rader.length <= MAX_RADER) return { storlek, rader: balansera(font, text, storlek, maxBredd) };
  }
  return { storlek: min, rader: balansera(font, text, min, maxBredd) };
}

/** Ordmärket: symbolen, ordet i Zilla Slab och pennstrecket, med baslinjen i y. */
function ordmarke(font, x, baslinje, storlek) {
  const symbolSkala = (storlek * 1.35) / 32;
  const symbolBredd = 32 * symbolSkala;
  const mellanrum = storlek * 0.46;
  const { d, bredd } = textBana(font, 'Hantverkstips', 0, 0, storlek, storlek * SPARRNING);
  const mitt = baslinje - storlek * 0.36;
  const textX = x + symbolBredd + mellanrum;
  return `<g transform="translate(${x} ${(mitt - symbolBredd / 2).toFixed(1)}) scale(${symbolSkala.toFixed(4)})">
    ${symbolInnehall()}
  </g>
  <g transform="translate(${textX.toFixed(1)} ${baslinje.toFixed(1)})">
    <path d="${d}" fill="${BLYERTS}"/>
    <path d="M1,${(storlek * 0.3).toFixed(1)} Q${(bredd * 0.35).toFixed(1)},${(storlek * 0.24).toFixed(1)} ${(bredd * 0.7).toFixed(1)},${(storlek * 0.29).toFixed(1)} T${(bredd - 1).toFixed(1)},${(storlek * 0.27).toFixed(1)}" fill="none" stroke="${PENNA}" stroke-width="${(storlek * 0.077).toFixed(2)}" stroke-linecap="round"/>
  </g>`;
}

/** Pennstrecket under sista raden, lika brett som den men aldrig smalare än 200. */
function pennstreck(bredd, y, storlek, maxBredd) {
  const b = Math.max(200, Math.min(bredd, maxBredd));
  return `<path d="M${MARGINAL},${y.toFixed(1)} Q${(MARGINAL + b * 0.35).toFixed(1)},${(y - storlek * 0.13).toFixed(1)} ${(MARGINAL + b * 0.7).toFixed(1)},${(y - storlek * 0.04).toFixed(1)} T${(MARGINAL + b).toFixed(1)},${(y - storlek * 0.09).toFixed(1)}" fill="none" stroke="${PENNA}" stroke-width="${(storlek * 0.115).toFixed(2)}" stroke-linecap="round"/>`;
}

/**
 * Titelblocket: raderna vänsterställda från marginalen, blocket optiskt
 * centrerat i ytan ovanför ordmärket, med pennstrecket under sista raden.
 */
function titelBlock(font, titel, maxBredd, max, min) {
  const { storlek, rader } = valjStorlek(font, titel, maxBredd, max, min);
  const radavstand = storlek * 1.16;
  const forsta = TEXT_MITT - ((rader.length - 1) * radavstand) / 2 + storlek * 0.36;
  const banor = rader.map((rad, i) =>
    textBana(font, rad, MARGINAL, forsta + i * radavstand, storlek, storlek * SPARRNING),
  );
  const sista = banor[banor.length - 1];
  const streckY = forsta + (rader.length - 1) * radavstand + storlek * 0.52;
  return [
    ...banor.map((b) => `<path d="${b.d}" fill="${BLYERTS}"/>`),
    pennstreck(sista.bredd, streckY, storlek, maxBredd),
  ].join('\n  ');
}

/** Rotens attribut och innehållet, för en SVG som ska klistras in i en <g>. */
function svgDelar(fil) {
  const svg = fs.readFileSync(fil, 'utf8');
  const rot = svg.match(/<svg\b([^>]*)>/);
  const viewBox = rot?.[1]?.match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) return null;
  const [, , bredd, hojd] = viewBox.trim().split(/[\s,]+/).map(Number);
  if (!bredd || !hojd) return null;
  return { inre: utanHolje(svg), bredd, hojd, harText: /<text[\s>]/.test(svg) };
}

/**
 * Bilden till höger. Skalas in i rutan med behållet sidförhållande, centrerad,
 * och ramas in med en linje som skisserna på verktygssidorna.
 */
function bildFragment(bild) {
  const { bildX, bildBredd, bildHojd } = MED_BILD;
  const skala = Math.min(bildBredd / bild.bredd, bildHojd / bild.hojd);
  const b = bild.bredd * skala;
  const h = bild.hojd * skala;
  const x = bildX + (bildBredd - b) / 2;
  const y = (H - h) / 2;
  return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${skala.toFixed(5)})">
    ${bild.inre}
  </g>
  <rect x="${(x + 0.5).toFixed(1)}" y="${(y + 0.5).toFixed(1)}" width="${(b - 1).toFixed(1)}" height="${(h - 1).toFixed(1)}" rx="2" fill="none" stroke="${LINJE}" stroke-width="1"/>`;
}

/** Tumstocken till höger, på sidor som saknar egen bild. */
function symbolFragment() {
  const skala = UTAN_BILD.symbolPx / 32;
  const x = B - MARGINAL - UTAN_BILD.symbolPx;
  const y = (H - UTAN_BILD.symbolPx) / 2;
  return `<g transform="translate(${x} ${y}) scale(${skala.toFixed(4)})">
    ${symbolInnehall()}
  </g>`;
}

/** 1200 × 630 för en innehållssida: titeln till vänster, sidans bild till höger. */
function sidSvg(font, titel, bild) {
  const form = bild ? MED_BILD : UTAN_BILD;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">
  <rect width="${B}" height="${H}" fill="${PAPPER}"/>
  ${bild ? bildFragment(bild) : symbolFragment()}
  ${titelBlock(font, titel, form.titelBredd, form.max, form.min)}
  ${ordmarke(font, MARGINAL, ORDMARKE_BASLINJE, ORDMARKE_STORLEK)}
</svg>`;
}

/**
 * Delar namnet på två rader vid det ordmellanrum som ger den smalaste bredaste
 * raden, med den jämnaste fördelningen som avgörande vid lika bredd. Namn i
 * registret är frågor på fyra till åtta ord, så ett ordmellanrum finns alltid.
 */
function delaITvaRader(font, text, storlek) {
  const flaggor = { kerning: true, letterSpacing: SPARRNING };
  const ord = text.split(' ');
  let basta = null;
  for (let i = 1; i < ord.length; i += 1) {
    const rad1 = ord.slice(0, i).join(' ');
    const rad2 = ord.slice(i).join(' ');
    const b1 = font.getAdvanceWidth(rad1, storlek, flaggor);
    const b2 = font.getAdvanceWidth(rad2, storlek, flaggor);
    const bredd = Math.max(b1, b2);
    const varde = bredd * 1000 + Math.abs(b1 - b2);
    if (basta === null || varde < basta.varde) basta = { rad1, rad2, bredd, varde };
  }
  if (basta === null) throw new Error(`Namnet "${text}" går inte att dela på två rader.`);
  return basta;
}

/**
 * 1200 × 630 för ett verktyg: namnet till vänster med pennstreck under, ordmärket
 * nere till vänster och verktygets skiss inklistrad till höger. Namnen i registret
 * är frågor på fyra till åtta ord och sätts alltid på exakt två rader, till
 * skillnad från artikeltitlarna som får gå på upp till tre.
 */
function verktygSvg(font, kalkylator) {
  const skiss = skissInnehall(kalkylator.slug);

  // Skissen: 600 × 360 skalad till 560 px bredd, lodrätt centrerad.
  const skissBredd = 560;
  const skissSkala = skissBredd / 600;
  const skissHojd = 360 * skissSkala;
  const skissX = B - MARGINAL - skissBredd;
  const skissY = Math.round((H - skissHojd) / 2);

  // Namnet krymper tills den bredaste av de två raderna får plats i spalten.
  const prov = delaITvaRader(font, kalkylator.namn, 100);
  const storlek = Math.min(NAMN_MAX, (NAMN_BREDD / prov.bredd) * 100);
  const rader = delaITvaRader(font, kalkylator.namn, storlek);
  const radavstand = storlek * 1.16;

  // Blocket med de två raderna optiskt centrerat över ordmärket.
  const rad1 = 285 - 0.215 * storlek;
  const rad2 = rad1 + radavstand;
  const bana1 = textBana(font, rader.rad1, MARGINAL, rad1, storlek, storlek * SPARRNING);
  const bana2 = textBana(font, rader.rad2, MARGINAL, rad2, storlek, storlek * SPARRNING);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">
  <rect width="${B}" height="${H}" fill="${PAPPER}"/>
  ${
    skiss === null
      ? symbolFragment()
      : `<g transform="translate(${skissX} ${skissY}) scale(${skissSkala.toFixed(5)})">
    ${skiss}
  </g>
  <rect x="${skissX + 0.5}" y="${skissY + 0.5}" width="${skissBredd - 1}" height="${(skissHojd - 1).toFixed(1)}" rx="2" fill="none" stroke="${LINJE}" stroke-width="1"/>`
  }
  <path d="${bana1.d}" fill="${BLYERTS}"/>
  <path d="${bana2.d}" fill="${BLYERTS}"/>
  ${pennstreck(bana2.bredd, rad2 + storlek * 0.52, storlek, NAMN_BREDD)}
  ${ordmarke(font, MARGINAL, ORDMARKE_BASLINJE, ORDMARKE_STORLEK)}
</svg>`;
}

/** 512 × 512, symbolen centrerad på papper med marginal. */
function loggaSvg() {
  const S = 512;
  const skala = 12; // 32 × 12 = 384 px, 64 px marginal runt om
  const forskjutning = (S - 32 * skala) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <rect width="${S}" height="${S}" fill="${PAPPER}"/>
  <g transform="translate(${forskjutning} ${forskjutning}) scale(${skala})">
    ${symbolInnehall()}
  </g>
</svg>`;
}

// ---------------------------------------------------------------------------
// Innehållssidorna
// ---------------------------------------------------------------------------

function mdFiler(mapp) {
  if (!fs.existsSync(mapp)) return [];
  const ut = [];
  for (const namn of fs.readdirSync(mapp)) {
    const hel = path.join(mapp, namn);
    if (fs.statSync(hel).isDirectory()) ut.push(...mdFiler(hel));
    else if (/\.(md|mdx)$/.test(namn)) ut.push(hel);
  }
  return ut;
}

/**
 * Sidans bild, i ordningen frontmatter, första illustrationen i brödtexten,
 * ingen. Bara SVG under src/assets/illustrationer/ duger: de är konverterade
 * till banor och renderas utan att någon font är installerad.
 */
function hittaBildfil(fil, data, body) {
  const frontmatter = strang(data.bild);
  if (frontmatter) {
    const abs = path.resolve(path.dirname(fil), frontmatter);
    if (abs.startsWith(ILLUSTRATIONER + path.sep) && abs.toLowerCase().endsWith('.svg') && fs.existsSync(abs)) {
      return abs;
    }
  }
  const m = body.match(/<Illustration\s[^>]*\bnamn="([^"]+)"/);
  if (m) {
    const abs = path.join(ILLUSTRATIONER, `${m[1]}.svg`);
    if (fs.existsSync(abs)) return abs;
  }
  return null;
}

/** Alla publicerade sidor som ska ha en delningsbild. */
function innehallssidor() {
  const sidor = [];
  for (const samling of SAMLINGAR) {
    for (const fil of mdFiler(path.join(INNEHALL, samling))) {
      const rel = path.relative(ROT, fil).split('\\').join('/');
      const { data, body, fel } = lasFrontmatter(fs.readFileSync(fil, 'utf8'));
      if (fel) {
        varna(`${rel}: ${fel}. Ingen delningsbild byggd`);
        continue;
      }
      if (data.utkast === true) continue;
      const titel = strang(data.title);
      if (!titel) {
        varna(`${rel}: saknar title. Ingen delningsbild byggd`);
        continue;
      }
      const id = path.basename(fil).replace(/\.(md|mdx)$/, '');
      sidor.push({ samling, id, titel, fil, rel, bildfil: hittaBildfil(fil, data, body) });
    }
  }
  return sidor;
}

// ---------------------------------------------------------------------------
// Skrivning
// ---------------------------------------------------------------------------

let skrivna = 0;
let hoppade = 0;

/** Sant när målet saknas, när --alla gäller, eller när en källa är nyare. */
function behoverByggas(mal, kallor) {
  if (TVINGA || !fs.existsSync(mal)) return true;
  const ut = fs.statSync(mal).mtimeMs;
  return kallor.some((k) => k && fs.existsSync(k) && fs.statSync(k).mtimeMs > ut);
}

async function skriv(byggSvg, relativ, kallor) {
  const mal = path.join(ROT, 'public', relativ);
  if (!behoverByggas(mal, [SKRIPT, SYMBOL, ...kallor])) {
    hoppade += 1;
    return;
  }
  fs.mkdirSync(path.dirname(mal), { recursive: true });
  await sharp(Buffer.from(byggSvg())).png({ compressionLevel: 9 }).toFile(mal);
  skrivna += 1;
  const { size } = fs.statSync(mal);
  console.log(`  public/${relativ}: ${(size / 1024).toFixed(1)} kB`);
}

const font = laddaFont();

await skriv(() => ogSvg(font), 'og-standard.png', [TYPSNITT]);
await skriv(() => loggaSvg(), 'brand/logga.png', []);

for (const kalkylator of KALKYLATORER) {
  await skriv(() => verktygSvg(font, kalkylator), `og/rakna-${kalkylator.slug}.png`, [
    TYPSNITT,
    REGISTER,
    path.join(SKISSER, `${kalkylator.slug}.svg`),
  ]);
}

const sidor = innehallssidor();
for (const sida of sidor) {
  await skriv(
    () => {
      let bild = null;
      if (sida.bildfil) {
        const delar = svgDelar(sida.bildfil);
        if (!delar) {
          varna(`${sida.rel}: ${path.relative(ROT, sida.bildfil)} saknar läsbar viewBox, bilden utelämnas`);
        } else if (delar.harText) {
          varna(
            `${sida.rel}: ${path.relative(ROT, sida.bildfil)} har <text> kvar och kan inte renderas utan font. ` +
              'Kör npm run illustrationer. Delningsbilden byggs utan bild så länge',
          );
        } else {
          bild = delar;
        }
      }
      return sidSvg(font, sida.titel, bild);
    },
    `og/${sida.samling}-${sida.id}.png`,
    [TYPSNITT, sida.fil, sida.bildfil],
  );
}

// Filer i public/og/ som ingen sida eller kalkylator längre äger. Tas inte bort
// automatiskt: en avpublicerad sida kan komma tillbaka, och en delad länk lever
// vidare i flödena. Raderas för hand när sidan är borta för gott.
const vantade = new Set([
  ...KALKYLATORER.map((k) => `rakna-${k.slug}.png`),
  ...sidor.map((s) => `${s.samling}-${s.id}.png`),
]);
const ogKatalog = path.join(ROT, 'public', 'og');
for (const namn of fs.existsSync(ogKatalog) ? fs.readdirSync(ogKatalog) : []) {
  if (namn.endsWith('.png') && !vantade.has(namn)) {
    varna(`public/og/${namn} hör inte till någon publicerad sida längre. Ta bort filen när sidan är borta för gott`);
  }
}

for (const v of varningar) console.warn(`VARNING  ${v}`);
const utanBild = sidor.filter((s) => !s.bildfil).length;
console.log(
  `Delningsbilder: ${sidor.length} innehållssidor (${utanBild} utan egen bild), ${KALKYLATORER.length} verktyg, ` +
    `${skrivna} skrivna, ${hoppade} oförändrade, ${varningar.length} varningar.`,
);
