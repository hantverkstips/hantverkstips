#!/usr/bin/env node
/**
 * Genererar de rasterbilder som måste ligga som riktiga filer under public/:
 *
 *   public/og-standard.png        1200 × 630, sajtgemensam delningsbild (og:image)
 *   public/brand/logga.png          512 × 512, publisher.logo i Article-markupen
 *   public/og/rakna-[slug].png    1200 × 630, en per kalkylator i registret
 *
 * Google vill ha en rasterbild på minst 112 × 112 px som logotyp, och Facebook,
 * LinkedIn och Slack hämtar ingen SVG. Allt byggs ur ordmärket och symbolen i
 * src/assets/brand/riktning-1/, med texten konverterad till banor på samma sätt
 * som illustrationerna (DESIGN.md avsnitt 2 och 7): ingen webbfont behövs.
 *
 * Verktygsbilderna (DESIGN.md avsnitt 7, "Illustrationer för verktygen") ser ut
 * som ett uppslag i anteckningsboken: papper som yta, verktygets namn ur
 * src/lib/kalkyl/register.ts till vänster i Zilla Slab 600 på två rader med ett
 * pennstreck under, ordmärket nere till vänster, och verktygets skiss inklistrad
 * till höger i 560 px bredd. Skissen hämtas från den konverterade filen under
 * src/assets/illustrationer/rakna/, alltså den som redan är banor: ingen <text>
 * följer med, så ingen font behöver finnas när sharp renderar.
 *
 * Registret importeras direkt som TypeScript. Node 24 avlägsnar typerna själv,
 * äldre Node behöver `node --experimental-strip-types`.
 *
 * Körs för hand med `node scripts/generera-delningsbilder.mjs` när märket, en
 * skiss eller ett verktygsnamn ändras. Ingår inte i npm run build: typsnitten
 * under scripts/typsnitt/ deployas inte, och PNG-filerna är committade.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';
import { KALKYLATORER } from '../src/lib/kalkyl/register.ts';

const HAR = path.dirname(fileURLToPath(import.meta.url));
const ROT = path.resolve(HAR, '..');
const TYPSNITT = path.join(HAR, 'typsnitt', 'zilla-slab-600.ttf');
const SYMBOL = path.join(ROT, 'src', 'assets', 'brand', 'riktning-1', 'symbol.svg');
const SKISSER = path.join(ROT, 'src', 'assets', 'illustrationer', 'rakna');

// Tokens ur src/styles/global.css. Hårdkodade här för att sharp inte läser CSS.
const PAPPER = '#f5efe3';
const LINJE = '#c9bca3';
const BLYERTS = '#2a2521';
const PENNA = '#ad3519';

/** Innehållet i en SVG utan <svg>-höljet, så att den kan placeras i en <g>. */
function utanHolje(svg) {
  const start = svg.indexOf('>', svg.indexOf('<svg')) + 1;
  const slut = svg.lastIndexOf('</svg>');
  return svg.slice(start, slut).trim();
}

function symbolInnehall() {
  return utanHolje(fs.readFileSync(SYMBOL, 'utf8'));
}

/** Den konverterade skissen för ett verktyg, 600 × 360 och utan <text>. */
function skissInnehall(slug) {
  const fil = path.join(SKISSER, `${slug}.svg`);
  if (!fs.existsSync(fil)) {
    throw new Error(
      `Skissen saknas: ${path.relative(ROT, fil)}. Rita källan i src/assets/illustrationer-kallor/rakna/ och kör npm run illustrationer.`,
    );
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
// Delningsbild per kalkylator
// ---------------------------------------------------------------------------

/** Bredden på namnets spalt, alltså från vänstermarginalen till skissens kant. */
const NAMN_BREDD = 452;
/** Största teckenstorlek för namnet. Längre namn krymper tills båda raderna får plats. */
const NAMN_MAX = 54;

/** Spärrning som andel av teckenstorleken, samma optiska täthet som i ordmärket. */
const SPARRNING = -0.013;

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

/**
 * 1200 × 630 för ett verktyg: namnet till vänster med pennstreck under, ordmärket
 * nere till vänster och verktygets skiss inklistrad till höger.
 */
function verktygSvg(font, kalkylator) {
  const B = 1200;
  const H = 630;
  const MARGINAL = 72;

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

  // Pennstrecket ligger under andra raden och är lika brett som den, dock minst 200.
  const streckBredd = Math.max(200, Math.min(bana2.bredd, NAMN_BREDD));
  const streckY = rad2 + storlek * 0.52;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">
  <rect width="${B}" height="${H}" fill="${PAPPER}"/>
  <g transform="translate(${skissX} ${skissY}) scale(${skissSkala.toFixed(5)})">
    ${skissInnehall(kalkylator.slug)}
  </g>
  <rect x="${skissX + 0.5}" y="${skissY + 0.5}" width="${skissBredd - 1}" height="${(skissHojd - 1).toFixed(1)}" rx="2" fill="none" stroke="${LINJE}" stroke-width="1"/>
  <path d="${bana1.d}" fill="${BLYERTS}"/>
  <path d="${bana2.d}" fill="${BLYERTS}"/>
  <path d="M${MARGINAL},${streckY.toFixed(1)} Q${(MARGINAL + streckBredd * 0.35).toFixed(1)},${(streckY - storlek * 0.13).toFixed(1)} ${(MARGINAL + streckBredd * 0.7).toFixed(1)},${(streckY - storlek * 0.04).toFixed(1)} T${(MARGINAL + streckBredd).toFixed(1)},${(streckY - storlek * 0.09).toFixed(1)}" fill="none" stroke="${PENNA}" stroke-width="${(storlek * 0.115).toFixed(2)}" stroke-linecap="round"/>
  ${ordmarke(font, MARGINAL, 552, 30)}
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

async function skriv(svg, relativ) {
  const mal = path.join(ROT, 'public', relativ);
  fs.mkdirSync(path.dirname(mal), { recursive: true });
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(mal);
  const { size } = fs.statSync(mal);
  console.log(`  public/${relativ}: ${(size / 1024).toFixed(1)} kB`);
}

const font = laddaFont();
await skriv(ogSvg(font), 'og-standard.png');
await skriv(loggaSvg(), 'brand/logga.png');
for (const kalkylator of KALKYLATORER) {
  await skriv(verktygSvg(font, kalkylator), `og/rakna-${kalkylator.slug}.png`);
}
console.log(`Delningsbilder klara, varav ${KALKYLATORER.length} för verktygen.`);
