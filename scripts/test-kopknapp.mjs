/**
 * Köpknappens text i src/lib/affiliate.ts.
 *   node --experimental-strip-types --test scripts/test-kopknapp.mjs
 *
 * Saknas butikens namn ska knappen säga Proffsmagasinet, aldrig "undefined".
 * Utan position skriver knappen position=KPOS, som numreraKopknappar fyller i.
 */
import assert from 'node:assert/strict';
import test from 'node:test';

import {
  butikNamnEllerReserv,
  goLank,
  kopknappHamtarSjalv,
  kopknappModul,
  kopknappText,
  numreraKopknappar,
  POSITION_PLATSHALLARE,
} from '../src/lib/affiliate.ts';

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

// Position i sidans ordning: docs/briefer/spec-kopknapp-position-2026-09-30.md avsnitt 2.

test('numreraKopknappar numrerar platshållarna i textens ordning, med &amp; och &', () => {
  const in_ =
    '<a href="/go/a/?modul=avslut&amp;position=KPOS">A</a>' +
    '<a href="/go/b/?modul=tabell&position=KPOS">B</a>' +
    '<a href="/go/c/?position=KPOS">C</a>';
  const ut =
    '<a href="/go/a/?modul=avslut&amp;position=1">A</a>' +
    '<a href="/go/b/?modul=tabell&position=2">B</a>' +
    '<a href="/go/c/?position=3">C</a>';
  assert.equal(numreraKopknappar(in_), ut);
});

test('text utan platshållare kommer tillbaka oförändrad', () => {
  const t = '<p>Ingen knapp här, bara KPOS som ord.</p><a href="/go/a/?modul=avslut">A</a>';
  assert.equal(numreraKopknappar(t), t);
});

test('en uttryckligen skriven position rörs inte', () => {
  const t =
    '<a href="/go/a/?modul=avslut&amp;position=7">A</a><a href="/go/b/?modul=avslut&amp;position=KPOS">B</a>';
  assert.equal(
    numreraKopknappar(t),
    '<a href="/go/a/?modul=avslut&amp;position=7">A</a><a href="/go/b/?modul=avslut&amp;position=1">B</a>',
  );
});

test("goLank med position 'auto' ger platshållaren", () => {
  assert.equal(POSITION_PLATSHALLARE, 'KPOS');
  assert.ok(goLank('x', { position: 'auto' }).includes('position=KPOS'));
  assert.equal(goLank('x', { modul: 'avslut', position: 'auto' }), '/go/x/?modul=avslut&position=KPOS');
});

test('goLank med tal eller utan position som förut', () => {
  assert.equal(goLank('x'), '/go/x/');
  assert.equal(goLank('x', { position: 3 }), '/go/x/?position=3');
  assert.equal(goLank('x', { position: 0 }), '/go/x/');
  assert.equal(goLank('x', { butik: 'pm', modul: 'tabell', sidtyp: 'guide', position: 2 }), '/go/x/?butik=pm&modul=tabell&sidtyp=guide&position=2');
});
