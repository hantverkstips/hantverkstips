/**
 * Lagerlägena i src/lib/lagerlage.ts.
 *   node --experimental-strip-types --test scripts/test-lagerlage.mjs
 *
 * restnoterad är köpbar med längre leveranstid (beslut 2026-09-29): knappen är
 * en annonslänk, och Kopknapp och strukturdatan läser samma funktion.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { arEjBestallningsbar, arRestnoterad, arSlut, lagerlage } from '../src/lib/lagerlage.ts';

const e = (lagerstatus) => ({ lagerstatus });

test('okänt och tomt är köpbart', () => {
  assert.equal(lagerlage(null), 'kopbar');
  assert.equal(lagerlage(e(null)), 'kopbar');
  assert.equal(lagerlage(e('  ')), 'kopbar');
  assert.equal(lagerlage(e('i_lager')), 'kopbar');
  assert.equal(lagerlage(e('I lager')), 'kopbar');
});

test('restnoterad går att köpa', () => {
  for (const s of ['restnoterad', 'Restnoterad', 'restnoterad, 7–9 dagar', 'Beställningsvara']) {
    assert.equal(lagerlage(e(s)), 'restnoterad', s);
    assert.equal(arSlut(e(s)), false, s);
    assert.equal(arRestnoterad(e(s)), true, s);
  }
});

test('slut och utgått är inte köpbara', () => {
  for (const s of ['slut i lager', 'Tillfälligt slut', 'ej i lager', 'ej_i_lager', 'utgått']) {
    assert.equal(lagerlage(e(s)), 'slut', s);
    assert.equal(arSlut(e(s)), true, s);
    assert.equal(arRestnoterad(e(s)), false, s);
  }
});

test('ej beställningsbar går före allt annat', () => {
  for (const s of ['ej_bestallningsbar', 'Ej beställningsbar', 'icke beställningsbar']) {
    assert.equal(lagerlage(e(s)), 'ej_bestallningsbar', s);
    assert.equal(arSlut(e(s)), true, s);
    assert.equal(arEjBestallningsbar(e(s)), true, s);
  }
});

test('Kopknapp och strukturdatan behandlar restnoterad som köpbar', () => {
  const knapp = readFileSync(new URL('../src/components/ui/Kopknapp.astro', import.meta.url), 'utf8');
  assert.match(knapp, /const ejKopbar = lager === 'slut' \|\| lager === 'ej_bestallningsbar';/);
  const sd = readFileSync(new URL('../src/lib/strukturdata.ts', import.meta.url), 'utf8');
  assert.match(sd, /https:\/\/schema\.org\/BackOrder/);
  assert.match(sd, /arRestnoterad\(e\)/);
});
