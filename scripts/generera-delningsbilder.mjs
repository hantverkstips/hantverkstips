#!/usr/bin/env node
/**
 * Genererar de två rasterbilderna som måste ligga som riktiga filer under public/:
 *
 *   public/og-standard.png   1200 × 630, sajtgemensam delningsbild (og:image)
 *   public/brand/logga.png     512 × 512, publisher.logo i Article-markupen
 *
 * Google vill ha en rasterbild på minst 112 × 112 px som logotyp, och Facebook,
 * LinkedIn och Slack hämtar ingen SVG. Båda byggs ur ordmärket och symbolen i
 * src/assets/brand/riktning-1/, med texten konverterad till banor på samma sätt
 * som illustrationerna (DESIGN.md avsnitt 2 och 7): ingen webbfont behövs.
 *
 * Körs för hand med `node scripts/generera-delningsbilder.mjs` när märket ändras.
 * Ingår inte i npm run build: typsnitten under scripts/typsnitt/ deployas inte,
 * och de färdiga PNG-filerna är committade.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';

const HAR = path.dirname(fileURLToPath(import.meta.url));
const ROT = path.resolve(HAR, '..');
const TYPSNITT = path.join(HAR, 'typsnitt', 'zilla-slab-600.ttf');
const SYMBOL = path.join(ROT, 'src', 'assets', 'brand', 'riktning-1', 'symbol.svg');

// Tokens ur src/styles/global.css. Hårdkodade här för att sharp inte läser CSS.
const PAPPER = '#f5efe3';
const BLYERTS = '#2a2521';
const PENNA = '#ad3519';

/** Symbolens innehåll utan <svg>-höljet, så att den kan placeras i en <g>. */
function symbolInnehall() {
  const svg = fs.readFileSync(SYMBOL, 'utf8');
  const start = svg.indexOf('>', svg.indexOf('<svg')) + 1;
  const slut = svg.lastIndexOf('</svg>');
  return svg.slice(start, slut).trim();
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
console.log('Delningsbilder klara.');
