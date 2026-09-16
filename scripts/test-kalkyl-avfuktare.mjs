/**
 * Kör de tre räkneexemplen ur docs/briefer/underlag-kalkyl-avfuktare.md avsnitt 5
 * mot src/lib/kalkyl/avfuktare.ts. Tolerans 1 liter, eftersom underlaget räknar
 * med avrundade mättnadsånghalter (9,38 och 12,80) och koden med Magnus-formeln.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-avfuktare.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  GRANSER,
  mattnadsanghalt,
  raknaAvfuktare,
  STANDARD,
  tolkaQuery,
} from '../src/lib/kalkyl/avfuktare.ts';

const TOLERANS = 1;

function naraNog(fick, vantat, vad) {
  assert.ok(
    Math.abs(fick - vantat) <= TOLERANS,
    `${vad}: fick ${fick}, väntade ${vantat} plus minus ${TOLERANS}`,
  );
}

test('mättnadsånghalten stämmer med tabellen i underlaget', () => {
  assert.equal(mattnadsanghalt(10).toFixed(2), '9.38');
  assert.equal(mattnadsanghalt(15).toFixed(2), '12.80');
});

const EXEMPEL = [
  {
    namn: 'Ex 1, källare 40 kvm, 2,4 m, hög fukt, uppvärmt',
    indata: { ytaKvm: 40, takhojdM: 2.4, fuktniva: 'hog', temperatur: 'over_15' },
    volymM3: 96,
    verklig: 7,
    markt: 23,
    typ: 'kondens',
    temperaturC: 15,
  },
  {
    namn: 'Ex 2, krypgrund 60 kvm, 1,8 m, mycket hög fukt, ouppvärmt',
    indata: { ytaKvm: 60, takhojdM: 1.8, fuktniva: 'mycket_hog', temperatur: 'fem_till_15' },
    volymM3: 108,
    verklig: 17,
    markt: 21,
    typ: 'sorption',
    temperaturC: 10,
  },
  {
    namn: 'Ex 3, förråd 20 kvm, 2,4 m, medelfukt, ouppvärmt',
    indata: { ytaKvm: 20, takhojdM: 2.4, fuktniva: 'medel', temperatur: 'fem_till_15' },
    volymM3: 48,
    verklig: 4,
    markt: 5,
    typ: 'sorption',
    temperaturC: 10,
  },
];

for (const e of EXEMPEL) {
  test(e.namn, () => {
    const r = raknaAvfuktare(e.indata);
    assert.equal(r.status, 'ok');
    assert.equal(r.volymM3, e.volymM3);
    assert.equal(r.typ, e.typ);
    assert.equal(r.temperaturC, e.temperaturC);
    naraNog(r.literPerDygnVerklig, e.verklig, 'verklig avfuktning');
    naraNog(r.marktKapacitetLiter, e.markt, 'märkt kapacitet');
    assert.ok(
      r.marktIntervall[0] <= r.marktKapacitetLiter && r.marktKapacitetLiter <= r.marktIntervall[1],
      `intervallet ${r.marktIntervall.join(' till ')} rymmer inte ${r.marktKapacitetLiter}`,
    );
    console.log(
      `${e.namn}\n  ${r.literPerDygnVerklig} l/dygn verkligt, ${r.marktKapacitetLiter} l märkt ` +
        `(${r.marktIntervall[0]} till ${r.marktIntervall[1]}), ${r.typ} vid ${r.temperaturC} grader`,
    );
  });
}

test('under 5 grader ger status utanför intervall', () => {
  const r = raknaAvfuktare({ ...STANDARD, temperatur: 'under_5' });
  assert.equal(r.status, 'utanfor');
  assert.match(r.text, /Under 5 grader/);
});

test('takhöjd från 0,5 m går igenom, under och över gränsen faller', () => {
  assert.deepEqual([...GRANSER.takhojdM], [0.5, 4]);
  assert.equal(raknaAvfuktare({ ...STANDARD, takhojdM: 0.5 }).status, 'ok');
  assert.equal(raknaAvfuktare({ ...STANDARD, takhojdM: 0.4 }).status, 'ogiltig');
  assert.equal(raknaAvfuktare({ ...STANDARD, takhojdM: 4.1 }).status, 'ogiltig');
});

test('yta över 300 kvm ger hänvisning till två maskiner', () => {
  const r = raknaAvfuktare({ ...STANDARD, ytaKvm: 320 });
  assert.equal(r.status, 'utanfor');
  assert.match(r.text, /två maskiner/);
});

test('tolkaQuery läser temperaturen och tål gamla länkar med uppvarmt', () => {
  assert.equal(tolkaQuery(new URLSearchParams('temp=over_15')).indata.temperatur, 'over_15');
  assert.equal(tolkaQuery(new URLSearchParams('yta=40&uppvarmt=1')).indata.temperatur, 'over_15');
  assert.equal(tolkaQuery(new URLSearchParams('yta=40')).indata.temperatur, 'fem_till_15');
  assert.equal(tolkaQuery(new URLSearchParams('')).indata.temperatur, STANDARD.temperatur);
  assert.equal(tolkaQuery(new URLSearchParams('takhojd=0,8')).indata.takhojdM, 0.8);
});
