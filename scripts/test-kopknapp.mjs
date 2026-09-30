/**
 * Köpknappens text i src/lib/affiliate.ts.
 *   node --experimental-strip-types --test scripts/test-kopknapp.mjs
 *
 * Saknas butikens namn ska knappen säga Proffsmagasinet, aldrig "undefined".
 */
import assert from 'node:assert/strict';
import test from 'node:test';

import { butikNamnEllerReserv, kopknappHamtarSjalv, kopknappModul, kopknappText } from '../src/lib/affiliate.ts';

test('saknat eller trasigt namn ger Proffsmagasinet', () => {
  for (const v of [undefined, null, '', '  ', 'undefined', 'null', 'Undefined', ' NULL ', 42, {}]) {
    assert.equal(butikNamnEllerReserv(v), 'Proffsmagasinet', String(v));
  }
});

test('ett riktigt namn trimmas', () => {
  assert.equal(butikNamnEllerReserv('Proffsmagasinet'), 'Proffsmagasinet');
  assert.equal(butikNamnEllerReserv(' Bygghemma '), 'Bygghemma');
});

const VANTAT = {
  ej_bestallningsbar: { true: 'Ej beställningsbar hos X', false: 'Ej beställningsbar hos X' },
  slut: { true: 'Slut i lager hos X', false: 'Slut i lager hos X' },
  kopbar: { true: 'Till X', false: 'Se pris hos X' },
  restnoterad: { true: 'Till X', false: 'Se pris hos X' },
};

test('alla fyra lägen gånger pris ger dagens texter', () => {
  for (const [lager, perPris] of Object.entries(VANTAT)) {
    for (const harPris of [true, false]) {
      assert.equal(
        kopknappText(lager, harPris, 'Bygghemma'),
        perPris[String(harPris)].replace('X', 'Bygghemma'),
        `${lager} ${harPris}`,
      );
      for (const namn of [undefined, null, '', 'undefined', 'null']) {
        const t = kopknappText(lager, harPris, namn);
        assert.equal(t, perPris[String(harPris)].replace('X', 'Proffsmagasinet'), `${lager} ${harPris} ${namn}`);
        assert.ok(!/undefined|null/i.test(t), t);
      }
    }
  }
});

test('hämtar själv bara när inget erbjudandefält finns bland props', () => {
  assert.equal(kopknappHamtarSjalv({ produkt: 'x' }), true);
  assert.equal(kopknappHamtarSjalv({ produkt: 'x', text: 'Slangpaketet', modul: 'avslut' }), true);
  for (const nyckel of ['pris', 'prisDatum', 'butikNamn', 'lager']) {
    assert.equal(kopknappHamtarSjalv({ produkt: 'x', [nyckel]: null }), false, `${nyckel}: null`);
    assert.equal(kopknappHamtarSjalv({ produkt: 'x', [nyckel]: undefined }), false, `${nyckel}: undefined`);
  }
});

test('modulstandard: kort_kompakt när knappen hämtat själv, annars avslut', () => {
  assert.equal(kopknappModul(undefined, true), 'kort_kompakt');
  assert.equal(kopknappModul(undefined, false), 'avslut');
  assert.equal(kopknappModul('tabell', true), 'tabell');
  assert.equal(kopknappModul('tabell', false), 'tabell');
});
