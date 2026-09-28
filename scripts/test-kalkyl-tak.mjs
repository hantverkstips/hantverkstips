/**
 * Kör takets geometri mot specens facit
 * (docs/briefer/spec-kalkyl-tak-2026-09-29.md avsnitt 7.1) och räkneexemplen
 * i docs/briefer/faktablad/rakna-takbyte.md avsnitt 2, 3 och 7.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-tak.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  antalTakstolar,
  lasTak,
  m2Text,
  meterText,
  nockGranser,
  nockUrVinkel,
  paslagstabell,
  procentText,
  raknaTak,
  TAK_STANDARD,
  takQuery,
  tillTal,
  valideraTak,
  VINKELGRANSER,
  vinkelText,
} from '../src/lib/kalkyl/tak.ts';
import {
  raknaFasadyta,
  STANDARD as FASAD_STANDARD,
  VINKELGRANSER as FASAD_VINKELGRANSER,
} from '../src/lib/kalkyl/fasadyta.ts';

const nara = (faktiskt, vantat, tol = 0.01, namn = '') =>
  assert.ok(Math.abs(faktiskt - vantat) <= tol, `${namn}: ${faktiskt} är inte ${vantat} ± ${tol}`);

const hus = (over) => ({ ...TAK_STANDARD, ...over });

/** Feltexter med gränserna i, så att testet ser vilka tal som kom in. */
const TEXT = {
  langd: (a, b) => `langd ${a} ${b}`,
  bredd: (a, b) => `bredd ${a} ${b}`,
  utsprang: (a, b) => `utsprang ${a} ${b}`,
  gavel: (a, b) => `gavel ${a} ${b}`,
  vinkel: (a, b) => `vinkel ${a} ${b}`,
  nock: (a, b) => `nock ${a} ${b}`,
  'nock-tal': 'nock-tal',
};

test('G1 standardhuset: 143,66 m², takfallslängd 5,612, nock 2,293', () => {
  const g = raknaTak(TAK_STANDARD);
  nara(g.takareaM2, 143.66, 0.01, 'takarea');
  nara(g.projektionM2, 128, 1e-9, 'projektion');
  nara(g.takfallslangdM, 5.612, 0.001, 'takfallslängd');
  nara(g.nockM, 2.293, 0.001, 'nock');
  nara(g.paslagProcent, 12.2, 0.05, 'påslag');
  assert.equal(g.takfall, 2);
  nara(g.takareaPerTakfallM2, 71.83, 0.01, 'per takfall');
  nara(g.rannlangdM, 12.8, 1e-9, 'rännlängd');
  assert.equal(g.bottenytaM2, 108);
});

test('G2 utan utsprång: 121,21 m², bottenyta 108', () => {
  const g = raknaTak(hus({ utsprangM: 0, gavelM: 0 }));
  nara(g.takareaM2, 121.21);
  assert.equal(g.bottenytaM2, 108);
});

test('G3 brant: 123,75 m², 5,837 m, nock 3,125', () => {
  const g = raknaTak(hus({ langdM: 10, breddM: 8, utsprangM: 0.6, gavelM: 0.3, vinkelGrader: 38 }));
  nara(g.takareaM2, 123.75);
  nara(g.takfallslangdM, 5.837, 0.001);
  nara(g.nockM, 3.125, 0.001);
});

test('G4 pulpet: 30,83 m², 4,671 m, nock 0,705, ett takfall', () => {
  const g = raknaTak(hus({ takform: 'pulpet', langdM: 6, breddM: 4, utsprangM: 0.3, gavelM: 0.3, vinkelGrader: 10 }));
  nara(g.takareaM2, 30.83);
  nara(g.takfallslangdM, 4.671, 0.001);
  nara(g.nockM, 0.705, 0.001);
  assert.equal(g.takfall, 1);
});

test('G5 vinkel ur nockhöjd: 27,07°', () => {
  const g = raknaTak(hus({ matt: 'nock', nockM: 2.3 }));
  nara(g.vinkelGrader, 27.07, 0.005);
});

test('G6 pulpet 10 × 7: 86,93 m², nock 2,274, takfallslängd 8,201', () => {
  const g = raknaTak(hus({ takform: 'pulpet', langdM: 10, breddM: 7, utsprangM: 0.4, gavelM: 0.3, vinkelGrader: 18 }));
  nara(g.takareaM2, 86.93);
  nara(g.nockM, 2.274, 0.001);
  nara(g.takfallslangdM, 8.201, 0.001);
});

test('T1 takstolar 12 m vid 1 200, 900, 600: 11, 15, 21', () => {
  assert.equal(antalTakstolar(12, 1200), 11);
  assert.equal(antalTakstolar(12, 900), 15);
  assert.equal(antalTakstolar(12, 600), 21);
});

test('T2 takstolar 10 m och 12,6 m vid 1 200: 10 och 12', () => {
  assert.equal(antalTakstolar(10, 1200), 10);
  assert.equal(antalTakstolar(12.6, 1200), 12);
});

test('paslagstabell mot takbytesunderlaget 2.3, alla tio raderna', () => {
  const facit = [
    [6, 1.0055, 0.6, 0.1051],
    [10, 1.0154, 1.5, 0.1763],
    [14, 1.0306, 3.1, 0.2493],
    [18, 1.0515, 5.1, 0.3249],
    [22, 1.0785, 7.9, 0.404],
    [27, 1.1223, 12.2, 0.5095],
    [30, 1.1547, 15.5, 0.5774],
    [34, 1.2062, 20.6, 0.6745],
    [38, 1.269, 26.9, 0.7813],
    [45, 1.4142, 41.4, 1.0],
  ];
  const rader = paslagstabell();
  assert.equal(rader.length, 10);
  rader.forEach((r, n) => {
    const [grader, faktor, procent, tan] = facit[n];
    assert.equal(r.grader, grader);
    assert.equal(Number(r.faktor.toFixed(4)), faktor, `faktor ${grader}°`);
    assert.equal(Number(r.procent.toFixed(1)), procent, `procent ${grader}°`);
    assert.equal(Number(r.nockPerMeter.toFixed(4)), tan, `tan ${grader}°`);
  });
});

test('samma nock som fasadytan, och VINKELGRANSER är samma objekt', () => {
  /* fasadyta.ts exporterar inte nockUrVinkel (specen 2.6); dess räknade nock tM jämförs i stället. */
  const f = raknaFasadyta({ ...FASAD_STANDARD, takform: 'sadel', matt: 'vinkel' });
  assert.equal(f.status, 'ok');
  assert.equal(f.tM, nockUrVinkel('sadel', FASAD_STANDARD.vinkelGrader, FASAD_STANDARD.breddM));
  assert.equal(FASAD_VINKELGRANSER, VINKELGRANSER);
});

test("nockGranser('sadel', 9) ger [0,4, 7,7]", () => {
  assert.deepEqual(nockGranser('sadel', 9), [0.4, 7.7]);
});

test('tillTal', () => {
  assert.equal(tillTal('12,5'), 12.5);
  assert.equal(tillTal('12,5 m'), 12.5);
  assert.equal(tillTal('27°'), 27);
  assert.equal(tillTal('1 200'), 1200);
  assert.equal(tillTal('1 200'), 1200);
  assert.equal(tillTal('1 200'), 1200);
  assert.equal(tillTal('2,3m'), 2.3);
  assert.equal(tillTal('143 m²'), 143);
  assert.equal(tillTal('90 kvm'), 90);
  assert.equal(tillTal('27 grader'), 27);
  assert.equal(tillTal('1200 mm'), 1200);
  assert.ok(Number.isNaN(tillTal('')));
  assert.ok(Number.isNaN(tillTal('abc')));
  assert.ok(Number.isNaN(tillTal(null)));
  assert.ok(Number.isNaN(tillTal('Infinity')));
});

test('lasTak', () => {
  assert.deepEqual(lasTak(new URLSearchParams(''), TAK_STANDARD), TAK_STANDARD);
  assert.equal(lasTak(new URLSearchParams('utsprang='), TAK_STANDARD).utsprangM, 0);
  assert.equal(lasTak(new URLSearchParams('gavel='), TAK_STANDARD).gavelM, 0);
  assert.ok(Number.isNaN(lasTak(new URLSearchParams('utsprang=x'), TAK_STANDARD).utsprangM));
  assert.ok(Number.isNaN(lasTak(new URLSearchParams('langd='), TAK_STANDARD).langdM));
  assert.equal(lasTak(new URLSearchParams('takform=valmat'), TAK_STANDARD).takform, 'sadel');
  assert.equal(lasTak(new URLSearchParams('matt=x'), TAK_STANDARD).matt, 'vinkel');
});

test('takQuery: nock skrivs uträknad, och rundturen ger samma tak', () => {
  const q = takQuery(TAK_STANDARD, raknaTak(TAK_STANDARD));
  assert.equal(q.get('nock'), '2,29');
  assert.deepEqual([...q.keys()], ['langd', 'bredd', 'utsprang', 'gavel', 'takform', 'matt', 'vinkel', 'nock']);
  const g4 = hus({ takform: 'pulpet', langdM: 6, breddM: 4, utsprangM: 0.3, gavelM: 0.3, vinkelGrader: 10 });
  const g5 = hus({ matt: 'nock', nockM: 2.3 });
  for (const i of [TAK_STANDARD, g4, g5]) {
    const tillbaka = lasTak(takQuery(i, raknaTak(i)), TAK_STANDARD);
    assert.deepEqual(raknaTak(tillbaka), raknaTak(i));
  }
  assert.equal(takQuery(g5, raknaTak(g5)).get('vinkel'), '27,1');
});

test('valideraTak', () => {
  assert.ok(valideraTak(hus({ langdM: 2.9 }), TEXT).langd);
  assert.equal(valideraTak(hus({ langdM: 40 }), TEXT).langd, undefined);
  assert.ok(valideraTak(hus({ langdM: 40.1 }), TEXT).langd);
  assert.ok(valideraTak(hus({ vinkelGrader: 4.9 }), TEXT).vinkel);
  assert.equal(valideraTak(hus({ vinkelGrader: 60 }), TEXT).vinkel, undefined);
  assert.ok(valideraTak(hus({ takform: 'pulpet', vinkelGrader: 31 }), TEXT).vinkel);
  assert.equal(valideraTak(hus({ matt: 'nock', nockM: 0.3 }), TEXT).nock, 'nock 0.4 7.7');
  assert.equal(valideraTak(hus({ matt: 'nock', nockM: NaN }), TEXT).nock, 'nock-tal');
  assert.equal(valideraTak(hus({ matt: 'vinkel', nockM: NaN }), TEXT).nock, undefined);
  assert.deepEqual(valideraTak(TAK_STANDARD, TEXT), {});
});

test('visningen', () => {
  assert.equal(m2Text(143.66), '143,7');
  assert.equal(m2Text(128), '128');
  assert.equal(meterText(5.6116), '5,61');
  assert.equal(meterText(2.3), '2,30');
  assert.equal(vinkelText(27), '27');
  assert.equal(vinkelText(27.07), '27,1');
  assert.equal(procentText(12.23), '12,2');
});
