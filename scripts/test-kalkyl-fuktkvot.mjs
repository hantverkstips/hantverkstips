/**
 * Kör fuktkvoträknaren mot faktabladet docs/briefer/faktablad/rakna-fuktkvot.md.
 * Varje förväntat tal står här som det står i faktabladet, inte som modulen räknar
 * det. Fallnumren följer specen docs/briefer/spec-kalkyl-fuktkvot-2026-10-04.md
 * avsnitt 2.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-fuktkvot.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  delbarQuery,
  FORVAL,
  forvalFranAdress,
  formVarden,
  fuktkvotUrVikt,
  fukthaltUrVikt,
  haltTillKvot,
  jamviktsfuktkvot,
  jamviktsTabell,
  kvotTillHalt,
  raknaFuktkvot,
  rfForFuktkvot,
  STANDARD,
  TEXT,
  tolkaQuery,
  TRAGUIDEN_20C,
} from '../src/lib/kalkyl/fuktkvot.ts';

/** En decimal med punkt, som faktabladets tal skrivna med punkt. */
const en = (n) => Math.round(n * 10) / 10;

const ANVANDNINGAR = ['ved', 'malning', 'inbyggnad', 'golv', 'mogel', 'rota'];

/** Utfallet per användning, som objekt: { ved: 'ok', malning: 'varning', ... }. */
function utfall(r) {
  assert.equal(r.status, 'ok');
  assert.deepEqual(
    r.bedomningar.map((b) => b.anvandning),
    ANVANDNINGAR,
    'bedömningarna i specens ordning',
  );
  return Object.fromEntries(r.bedomningar.map((b) => [b.anvandning, b.utfall]));
}

function halt(tal, vilket) {
  return raknaFuktkvot({ ...STANDARD, lage: 'halt', tal, vilket });
}

// 1. Viktläget, faktabladet 2.4.
test('1: viktläget mot tabell 2.4, u och w på en decimal', () => {
  const rader = [
    // [våt, torr, u, w]
    [1100, 1000, 10.0, 9.1],
    [1150, 1000, 15.0, 13.0],
    [1200, 1000, 20.0, 16.7],
    [2000, 1000, 100.0, 50.0],
    [1000, 1000, 0.0, 0.0],
  ];
  for (const [vat, torr, u, w] of rader) {
    assert.equal(en(fuktkvotUrVikt(vat, torr)), u, `u vid ${vat}/${torr}`);
    assert.equal(en(fukthaltUrVikt(vat, torr)), w, `w vid ${vat}/${torr}`);
    const r = raknaFuktkvot({ ...STANDARD, lage: 'vikt', vatG: vat, torrG: torr });
    assert.equal(r.status, 'ok');
    assert.equal(en(r.fuktkvot), u);
    assert.equal(en(r.fukthalt), w);
  }
});

// 2. Omräkningen, faktabladet 3.
test('2: omräkningen mot tabellerna i avsnitt 3, nio rader på en decimal', () => {
  const haltTillKvotRader = [
    [10, 11.1],
    [15, 17.6],
    [20, 25.0],
    [50, 100.0],
  ];
  for (const [w, u] of haltTillKvotRader) {
    assert.equal(en(haltTillKvot(w)), u, `fukthalt ${w}`);
    assert.equal(en(halt(w, 'fukthalt').fuktkvot), u);
  }
  const kvotTillHaltRader = [
    [15, 13.0],
    [16, 13.8],
    [18, 15.3],
    [20, 16.7],
    [30, 23.1],
  ];
  for (const [u, w] of kvotTillHaltRader) {
    assert.equal(en(kvotTillHalt(u)), w, `fuktkvot ${u}`);
    assert.equal(en(halt(u, 'fuktkvot').fukthalt), w);
  }
});

// 3. Modellen mot Wood Handbooks tabell 4-2, faktabladet 4.3.
/*
 * Ekvationen ger 17,95 vid 21,1 °C och 85 %, som avrundas till 18,0 mot
 * tabellens 17,9, och faktabladet 4.3 skriver att den punkten avviker med 0,05
 * på grund av avrundningen. Testet låser därför båda kolumnerna: ekvationen på två
 * decimaler mot faktabladets kolumn, och en decimal mot tabell 4-2 i de nio
 * punkter där det går. Den tionde punkten får skillnaden högst 0,1
 * (spec-rester-2026-10-04.md, D1).
 */
test('3: ekvation (4-5) mot tabell 4-2, tio punkter', () => {
  const punkter = [
    // [°C, RF, faktabladets kolumn Ekvationen, tabell 4-2]
    [21.1, 5, 1.3, 1.3],
    [21.1, 30, 6.17, 6.2],
    [21.1, 50, 9.24, 9.2],
    [21.1, 75, 14.41, 14.4],
    [21.1, 85, 17.95, 17.9],
    [21.1, 95, 23.89, 23.9],
    [-1.1, 75, 14.91, 14.9],
    [-1.1, 95, 24.33, 24.3],
    [37.8, 50, 8.68, 8.7],
    [37.8, 90, 19.48, 19.5],
  ];
  for (const [t, rf, ekvationen, tabell] of punkter) {
    const fick = jamviktsfuktkvot(t, rf);
    assert.ok(Math.abs(fick - ekvationen) <= 0.01, `${t} °C, ${rf} %: fick ${fick}, faktabladet ${ekvationen}`);
    if (t === 21.1 && rf === 85) {
      assert.ok(Math.abs(en(fick) - tabell) <= 0.1 + 1e-9, `${t} °C, ${rf} %: undantaget, högst 0,1 från tabellen`);
    } else {
      assert.equal(en(fick), tabell, `${t} °C, ${rf} %`);
    }
  }
});

// 4. Testfallen i 4.8, två decimaler.
test('4: testfallen i 4.8, tolerans 0,01', () => {
  const fall = [
    [20, 50, 9.27],
    [20, 75, 14.45],
    [20, 85, 18.0],
    [20, 95, 23.94],
    [5, 85, 18.47],
    [2, 83, 17.66],
    [21.1, 75, 14.41],
  ];
  for (const [t, rf, u] of fall) {
    const fick = jamviktsfuktkvot(t, rf);
    assert.ok(Math.abs(fick - u) <= 0.01 + 1e-9, `${t} °C, ${rf} %: fick ${fick}, väntade ${u}`);
  }
});

// 5. Omvänt, RF som ger en viss fuktkvot vid 20 °C, 4.8.
test('5: rfForFuktkvot mot de omvända talen i 4.8, tolerans 0,2 RF', () => {
  const fall = [
    [8, 41.8],
    [12, 65.0],
    [15, 76.8],
    [16, 79.9],
    [18, 85.0],
    [20, 89.1],
    [23, 93.8],
  ];
  for (const [u, rf] of fall) {
    const fick = rfForFuktkvot(u, 20);
    assert.ok(Math.abs(fick - rf) <= 0.2, `${u} %: fick ${fick}, väntade ${rf}`);
  }
  assert.ok(Number.isNaN(rfForFuktkvot(40, 20)), 'en fuktkvot över fibermättnad nås inte');
});

// 6. Mot TräGuidens tabell 2 och TG-S vid 20 °C, 4.4.
test('6: modellen mot TräGuiden vid 20 °C, högst 0,6 procentenheter', () => {
  const traguiden = [
    // [RF, lägst, högst], ordagrant ur faktabladet 4.4 och 4.8
    [65, 12, 13],
    [75, 15, 15],
    [80, 16, 16],
    [85, 18, 18],
    [90, 21, 21],
    [95, 24, 24],
  ];
  for (const [rf, lagst, hogst] of traguiden) {
    const u = jamviktsfuktkvot(20, rf);
    const avvikelse = u < lagst ? lagst - u : u > hogst ? u - hogst : 0;
    assert.ok(avvikelse <= 0.6, `${rf} %: modellen ${u}, TräGuiden ${lagst}–${hogst}`);
    assert.deepEqual(TRAGUIDEN_20C[rf], { lagst, hogst }, `tabellens TräGuiden-tal vid ${rf} %`);
  }
  assert.equal(Object.keys(TRAGUIDEN_20C).length, traguiden.length);

  // Räknetabellen till sidan, faktabladet 4.8: modellen på en decimal.
  const modellen = [6.2, 7.7, 9.3, 11.0, 12.0, 13.1, 14.5, 16.0, 18.0, 20.5, 23.9];
  const rader = jamviktsTabell();
  assert.deepEqual(
    rader.map((r) => r.rf),
    [30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95],
  );
  assert.deepEqual(
    rader.map((r) => en(r.modell)),
    modellen,
  );
  assert.deepEqual(
    rader.filter((r) => r.traguiden).map((r) => r.rf),
    [65, 75, 80, 85, 90, 95],
  );
});

// 7. Gränserna.
test('7: gränserna, fibermättnad, extrapolation och ogiltiga vikter', () => {
  const fiber = raknaFuktkvot({ ...STANDARD, rfProcent: 96 });
  assert.equal(fiber.status, 'fibermattnad');
  assert.equal(fiber.over, 24);

  const vid95 = raknaFuktkvot({ ...STANDARD, rfProcent: 95 });
  assert.equal(vid95.status, 'ok', '95 % ger ett exakt tal');

  const kall = raknaFuktkvot({ ...STANDARD, tempC: -5 });
  assert.equal(kall.status, 'ok');
  assert.equal(kall.extrapolerad, true);
  assert.equal(raknaFuktkvot({ ...STANDARD, tempC: -1.1 }).extrapolerad, false);
  assert.equal(raknaFuktkvot({ ...STANDARD, tempC: -21 }).status, 'ogiltig');
  assert.equal(raknaFuktkvot({ ...STANDARD, rfProcent: 4 }).status, 'ogiltig');

  const forvaxlade = raknaFuktkvot({ ...STANDARD, lage: 'vikt', vatG: 900, torrG: 1000 });
  assert.equal(forvaxlade.status, 'ogiltig');
  assert.ok('vatG' in forvaxlade.fel, 'felet står på vat');
  assert.equal(forvaxlade.fel.vatG, TEXT.fel.forvaxlade);

  const nolltorr = raknaFuktkvot({ ...STANDARD, lage: 'vikt', torrG: 0 });
  assert.equal(nolltorr.status, 'ogiltig');
  assert.ok('torrG' in nolltorr.fel);

  assert.equal(halt(96, 'fukthalt').status, 'ogiltig', 'fukthalt högst 95');
  assert.equal(halt(301, 'fuktkvot').status, 'ogiltig', 'fuktkvot högst 300');
  assert.equal(halt(150, 'fuktkvot').status, 'ok');

  // Ett ogiltigt fält i ett annat läge stoppar inte räkningen.
  assert.equal(raknaFuktkvot({ ...STANDARD, lage: 'halt', tempC: NaN }).status, 'ok');
});

// 8. Bedömningarna, faktabladet 5.
test('8: bedömningarna vid gränserna', () => {
  const v = (u) => utfall(halt(u, 'fuktkvot'));

  assert.equal(v(15.9).malning, 'ok');
  assert.equal(v(16.0).malning, 'ok');
  assert.equal(v(16.1).malning, 'varning');

  assert.equal(v(17.9).inbyggnad, 'ok');
  assert.equal(v(18.0).inbyggnad, 'ok');
  assert.equal(v(19.9).inbyggnad, 'varning');

  assert.equal(v(19.9).rota, 'ok');
  assert.equal(v(20.0).rota, 'varning');
  assert.equal(v(30.1).rota, 'varning');
  assert.equal(halt(30.1, 'fuktkvot').rotaEtablerad, true);
  assert.equal(halt(30.0, 'fuktkvot').rotaEtablerad, false);

  // Mögel i lägena vikt och halt: under 15 % fuktkvot.
  assert.equal(v(15.9).mogel, 'varning');
  assert.equal(utfall(halt(14.9, 'fuktkvot')).mogel, 'ok');
  assert.equal(utfall(halt(15.0, 'fuktkvot')).mogel, 'varning');

  // Golv: 7,0 till 9,0.
  assert.equal(utfall(halt(6.9, 'fuktkvot')).golv, 'varning');
  assert.equal(utfall(halt(7.0, 'fuktkvot')).golv, 'ok');
  assert.equal(utfall(halt(9.0, 'fuktkvot')).golv, 'ok');
  assert.equal(utfall(halt(9.1, 'fuktkvot')).golv, 'varning');

  // Ved: fukthalt, ok bara 15 till 20, varning under 15 och över 20.
  const ved = (w) => utfall(halt(w, 'fukthalt')).ved;
  assert.equal(ved(9.9), 'varning');
  assert.equal(ved(10), 'varning');
  assert.equal(ved(15), 'ok');
  assert.equal(ved(20), 'ok');
  assert.equal(ved(20.1), 'varning');

  // Mögel i läge luft följer RF, inte fuktkvoten.
  assert.equal(utfall(raknaFuktkvot({ ...STANDARD, rfProcent: 74 })).mogel, 'ok');
  assert.equal(utfall(raknaFuktkvot({ ...STANDARD, rfProcent: 75 })).mogel, 'varning');

  // Gränserna som koden sätter, med hårt mellanslag före procenttecknet.
  const granser = Object.fromEntries(halt(12, 'fuktkvot').bedomningar.map((b) => [b.anvandning, b.grans]));
  assert.equal(granser.malning, 'högst 16 %');
  assert.equal(granser.golv, '7 till 9 %');
  assert.equal(granser.ved, 'fukthalt 15 till 20 %');
});

// 9. tolkaQuery och förvalen.
test('9: tolkaQuery med decimalkomma, okänt läge och varje förval', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(tom.indata, STANDARD);
  assert.equal(tom.harIndata, false);
  assert.equal(en(raknaFuktkvot(tom.indata).fuktkvot), 12.0, 'utan query visar sidan 12,0');

  const komma = tolkaQuery(new URLSearchParams('temp=20,5&rf=65,5'));
  assert.equal(komma.indata.tempC, 20.5);
  assert.equal(komma.indata.rfProcent, 65.5);
  assert.equal(komma.harIndata, true);

  assert.equal(tolkaQuery(new URLSearchParams('lage=grader')).indata.lage, 'luft');
  assert.equal(tolkaQuery(new URLSearchParams('lage=halt&vilket=okant')).indata.vilket, 'fukthalt');
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('lage=vikt&vat=tjugo')).indata.vatG));

  // [rum, arstid, °C, RF, fuktkvot på en decimal], fuktkvoten ur faktabladet 4.4, 4.10 och specen 6.2.
  const forval = [
    ['bostad', 'vinter', 20, 25, 5.4],
    ['bostad', 'sommar', 20, 60, 11.0],
    ['krypgrund', null, 15, 75, 14.6],
    ['kallare', null, 15, 75, 14.6],
    ['vind', null, 2, 83, 17.7],
    ['ute', 'sommar', 15, 75, 14.6],
    ['ute', 'vinter', 0, 95, 24.3],
  ];
  assert.equal(FORVAL.length, forval.length);
  for (const [rum, arstid, t, rf, u] of forval) {
    const q = new URLSearchParams({ lage: 'luft', rum, ...(arstid ? { arstid } : {}) });
    const { indata } = tolkaQuery(q);
    assert.equal(indata.tempC, t, `${rum} ${arstid}: temperatur`);
    assert.equal(indata.rfProcent, rf, `${rum} ${arstid}: RF`);
    assert.equal(indata.rum, rum);
    assert.equal(en(raknaFuktkvot(indata).fuktkvot), u, `${rum} ${arstid}: fuktkvot`);
  }
  // Ett tal i adressen vinner över förvalet.
  assert.equal(tolkaQuery(new URLSearchParams('rum=vind&rf=70')).indata.rfProcent, 70);
  // Bostad utan årstid har inget förval.
  assert.equal(tolkaQuery(new URLSearchParams('rum=bostad')).indata.rum, undefined);
});

test('9b: delbar adress och förval i inbäddningen', () => {
  const luft = tolkaQuery(new URLSearchParams('rum=ute&arstid=vinter')).indata;
  assert.equal(delbarQuery(luft).toString(), 'lage=luft&temp=0&rf=95&rum=ute&arstid=vinter');
  const vikt = { ...STANDARD, lage: 'vikt', vatG: 1150.5 };
  assert.equal(delbarQuery(vikt).toString(), 'lage=vikt&vat=1150%2C5&torr=1000');
  assert.equal(delbarQuery({ ...STANDARD, lage: 'halt' }).toString(), 'lage=halt&tal=18&vilket=fukthalt');
  // Den delade adressen ger samma svar.
  const igen = tolkaQuery(delbarQuery(vikt)).indata;
  assert.equal(raknaFuktkvot(igen).fuktkvot, raknaFuktkvot(vikt).fuktkvot);

  assert.deepEqual(formVarden(STANDARD), { temp: '20', rf: '65', vat: '1100', torr: '1000', tal: '18' });

  const ok = forvalFranAdress('lage=vikt');
  assert.equal(ok.status, 'ok');
  assert.equal(ok.indata.lage, 'vikt');
  assert.equal(forvalFranAdress('rum=krypgrund').status, 'ok');
  assert.equal(forvalFranAdress('rum=garage').status, 'fel', 'garaget har inget förval');
  assert.equal(forvalFranAdress('rum=bostad').status, 'fel', 'bostad kräver årstid');
  assert.equal(forvalFranAdress('lage=grader').status, 'fel');
  assert.equal(forvalFranAdress('farg=bla').status, 'fel');
  assert.equal(forvalFranAdress('lage=vikt&vat=900').status, 'fel');
  assert.equal(forvalFranAdress('rf=97').status, 'ok', 'fibermättnad är ett svar, inget fel');
});

test('10: feltexterna finns som strängar (TEXT SAKNAS tills hantverkaren skrivit dem)', () => {
  for (const [k, v] of Object.entries(TEXT.fel)) {
    assert.equal(typeof v, 'string', k);
    assert.ok(v.length > 0, k);
  }
});
