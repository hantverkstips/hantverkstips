/**
 * Kör strängarbetet bakom <Illustration> mot skisserna som ligger på disk.
 * Läget väljs på filens innehåll, så testet måste se samma filer som bygget:
 * en skiss ritad i färdiga färger ska bli <img> och cachas, en som behöver
 * sidans färger ska inlineas. Se docs/briefer/spec-skisser-som-img-2026-09-22.md.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-illustration.mjs
 */
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { inlineMarkup, lasViewBox, valjLage } from '../src/lib/illustration.ts';

const ROT = fileURLToPath(new URL('../src/assets/illustrationer/', import.meta.url));

/** Alla publicerade skisser, rekursivt, med sökvägen relativt ROT. */
function allaSkisser() {
  return readdirSync(ROT, { recursive: true, encoding: 'utf8' })
    .filter((f) => f.endsWith('.svg'))
    .map((f) => f.split('\\').join('/'));
}

/** Filens innehåll som sträng. */
function las(relativ) {
  return readFileSync(join(ROT, relativ), 'utf8');
}

test('en skiss i färdiga färger går som bild', () => {
  assert.equal(valjLage(las('fukt/tejptest.svg')), 'img');
});

test('currentColor tvingar inline', () => {
  assert.equal(valjLage('<svg viewBox="0 0 600 360"><path stroke="currentColor" d="M0 0" /></svg>'), 'inline');
});

test('en token tvingar inline', () => {
  assert.equal(valjLage('<svg viewBox="0 0 600 360"><rect fill="var(--color-penna)" /></svg>'), 'inline');
});

test('currentColor i en kommentar räknas inte', () => {
  const svg =
    '<svg viewBox="0 0 600 360"><!-- Tokens: penna #2a2521, inte currentColor och inte var(--color-penna) -->' +
    '<rect fill="#2a2521" /></svg>';
  assert.equal(valjLage(svg), 'img');
});

test('ingen publicerad skiss behöver inline-läget', () => {
  const skisser = allaSkisser();
  assert.ok(skisser.length >= 80, `hittade bara ${skisser.length} skisser under src/assets/illustrationer/`);
  const inline = skisser.filter((f) => valjLage(las(f)) === 'inline');
  assert.deepEqual(inline, []);
});

test('måtten kommer ur viewBox, och en fil utan viewBox stoppar bygget', () => {
  assert.deepEqual(lasViewBox(las('fukt/tejptest.svg')), { bredd: 600, hojd: 360 });
  assert.throws(() => lasViewBox('<svg width="600" height="360"></svg>'), /saknar viewBox/);
  assert.throws(() => lasViewBox('<b>ingen skiss</b>'), /saknar ett <svg>-element/);
});

test('inline-läget suffixar idn och sätter en egen rot', () => {
  const svg =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="600" height="360">' +
    '<!-- Tokens: papper #f5efe3 -->' +
    '<pattern id="linjerat"><path id="pil" d="M0 0" /></pattern>' +
    '<rect fill="url(#linjerat)" /><use href="#pil" />' +
    '</svg>';
  const ut = inlineMarkup(svg, 'Skiss med "citat"', 'fukt-tejptest');

  assert.match(ut, /id="linjerat-fukt-tejptest"/);
  assert.match(ut, /id="pil-fukt-tejptest"/);
  assert.match(ut, /url\(#linjerat-fukt-tejptest\)/);
  assert.match(ut, /href="#pil-fukt-tejptest"/);
  assert.ok(!ut.includes('<?xml'), 'XML-deklarationen ska vara borta');
  assert.ok(!ut.includes('<!--'), 'kommentarerna ska vara borta');
  assert.ok(
    ut.startsWith(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="600" height="360" ' +
        'role="img" aria-label="Skiss med &quot;citat&quot;" class="block w-full h-auto rounded-sm border border-linje">',
    ),
    `roten blev: ${ut.slice(0, 220)}`,
  );
  assert.ok(ut.endsWith('</svg>'));
});
