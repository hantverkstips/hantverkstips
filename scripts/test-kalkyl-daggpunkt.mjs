/**
 * Kör daggpunktskalkylatorn mot daggpunktstabellerna i kunskapsartikeln
 * src/content/kunskap/fukt/luftfuktighet-inomhus.mdx, som är räknade med samma
 * Magnus-konstanter (a = 17,625 och b = 243,04 efter Lawrence 2005).
 * Tolerans 0,1 grader, eftersom tabellen visar en decimal.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-daggpunkt.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ATGARDSTEXT,
  daggpunkt,
  GRANSER,
  KRITISKT_FUKTTILLSTAND_RF,
  mattnadsanghalt,
  raknaDaggpunkt,
  STANDARD,
  tolkaQuery,
} from '../src/lib/kalkyl/daggpunkt.ts';

const TOLERANS = 0.1;

function naraNog(fick, vantat, vad) {
  assert.ok(
    Math.abs(fick - vantat) <= TOLERANS,
    `${vad}: fick ${fick}, väntade ${vantat} plus minus ${TOLERANS}`,
  );
}

/** Raderna ur de två daggpunktstabellerna i artikeln. */
const TABELLEN = [
  { tempC: 22, rf: 30, daggpunkt: 3.6 },
  { tempC: 22, rf: 50, daggpunkt: 11.1 },
  { tempC: 22, rf: 70, daggpunkt: 16.3 },
  { tempC: 20, rf: 30, daggpunkt: 1.9 },
  { tempC: 20, rf: 50, daggpunkt: 9.3 },
  { tempC: 20, rf: 70, daggpunkt: 14.4 },
  { tempC: 20, rf: 80, daggpunkt: 16.4 },
  { tempC: 15, rf: 70, daggpunkt: 9.6 },
  { tempC: 12, rf: 60, daggpunkt: 4.5 },
  { tempC: 12, rf: 80, daggpunkt: 8.7 },
];

test('daggpunkten stämmer med tabellerna i luftfuktighetsartikeln', () => {
  for (const rad of TABELLEN) {
    naraNog(daggpunkt(rad.tempC, rad.rf), rad.daggpunkt, `${rad.tempC} °C och ${rad.rf} %`);
  }
});

test('mättnadsånghalten stämmer med tabellen över vad luften bär', () => {
  naraNog(mattnadsanghalt(0), 4.9, '0 °C');
  naraNog(mattnadsanghalt(12), 10.6, '12 °C');
  naraNog(mattnadsanghalt(20), 17.3, '20 °C');
  naraNog(mattnadsanghalt(30), 30.3, '30 °C');
});

/**
 * Sex fall som täcker de tre bedömningarna och de tre råden. Talen för daggpunkt
 * kommer ur tabellen ovan, resten ur samma formel.
 */
const FALL = [
  {
    namn: 'Standard, sovrum på 20 grader och 50 procent, yttervägg på 12',
    indata: STANDARD,
    daggpunktC: 9.3,
    rfVidYtan: 83,
    bedomning: 'mogelrisk',
    atgarder: ['vadra', 'sank_fuktproduktion', 'varm_eller_isolera_ytan'],
    visaAvfuktare: false,
    gorInteDetHar: /avfuktare till ett sovrum/,
  },
  {
    namn: 'Sovrum i januari, fönsterglas på 7 grader, kondens',
    indata: { luftTempC: 20, rfProcent: 50, ytTempC: 7, arstid: 'vinter', rum: 'bostad' },
    daggpunktC: 9.3,
    rfVidYtan: 100,
    bedomning: 'kondens',
    atgarder: ['vadra', 'sank_fuktproduktion', 'varm_eller_isolera_ytan'],
    visaAvfuktare: false,
    gorInteDetHar: /avfuktare till ett sovrum/,
  },
  {
    namn: 'Källare i augusti, 20 grader och 70 procent, vägg på 12',
    indata: { luftTempC: 20, rfProcent: 70, ytTempC: 12, arstid: 'sommar', rum: 'kallare' },
    daggpunktC: 14.4,
    rfVidYtan: 100,
    bedomning: 'kondens',
    atgarder: ['avfuktare', 'varm_eller_isolera_ytan'],
    visaAvfuktare: true,
    gorInteDetHar: /Vädra inte/,
  },
  {
    namn: 'Garage i augusti, 18 grader och 65 procent, betongvägg på 14',
    indata: { luftTempC: 18, rfProcent: 65, ytTempC: 14, arstid: 'sommar', rum: 'garage' },
    daggpunktC: 11.3,
    rfVidYtan: 84,
    bedomning: 'mogelrisk',
    atgarder: ['avfuktare', 'varm_eller_isolera_ytan'],
    visaAvfuktare: true,
    gorInteDetHar: /Vädra inte/,
  },
  {
    namn: 'Torr vinterluft, 21 grader och 35 procent, yttervägg på 14',
    indata: { luftTempC: 21, rfProcent: 35, ytTempC: 14, arstid: 'vinter', rum: 'bostad' },
    daggpunktC: 5.0,
    rfVidYtan: 54,
    bedomning: 'ingen_risk',
    atgarder: [],
    visaAvfuktare: false,
    gorInteDetHar: null,
  },
  {
    namn: 'Källare i januari, 12 grader och 80 procent, vägg på 10',
    indata: { luftTempC: 12, rfProcent: 80, ytTempC: 10, arstid: 'vinter', rum: 'kallare' },
    daggpunktC: 8.7,
    rfVidYtan: 91,
    bedomning: 'mogelrisk',
    atgarder: ['vadra', 'sank_fuktproduktion', 'varm_eller_isolera_ytan'],
    visaAvfuktare: false,
    gorInteDetHar: /kondensavfuktare/,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaDaggpunkt(f.indata);
    assert.equal(r.status, 'ok');
    naraNog(r.daggpunktC, f.daggpunktC, 'daggpunkt');
    assert.equal(Math.round(r.rfVidYtanProcent), f.rfVidYtan, 'luftfuktighet vid ytan');
    assert.equal(r.bedomning, f.bedomning);
    assert.deepEqual(r.atgarder, f.atgarder);
    assert.equal(r.visaAvfuktare, f.visaAvfuktare);
    if (f.gorInteDetHar === null) assert.equal(r.gorInteDetHar, null);
    else assert.match(r.gorInteDetHar, f.gorInteDetHar);
    for (const a of r.atgarder) assert.ok(ATGARDSTEXT[a], `åtgärden ${a} saknar text`);
    console.log(
      `${f.namn}\n  daggpunkt ${r.daggpunktC.toFixed(1)} °C, ${r.rfVidYtanProcent.toFixed(0)} % vid ytan, ` +
        `${r.bedomning}, klarar gränsen vid ${r.rfForGransenProcent} % inne eller ${r.ytTempForGransenC} °C på ytan`,
    );
  });
}

test('gränsen vid ytan är Boverkets 75 procent, och de två vägarna dit stämmer', () => {
  assert.equal(KRITISKT_FUKTTILLSTAND_RF, 75);
  const r = raknaDaggpunkt(STANDARD);
  assert.equal(r.status, 'ok');

  // Sänkt luftfuktighet inne: talet vi visar ska ligga under gränsen vid ytan.
  const torrare = raknaDaggpunkt({ ...STANDARD, rfProcent: r.rfForGransenProcent });
  assert.ok(torrare.rfVidYtanProcent <= 75, `${torrare.rfVidYtanProcent} % vid ytan är över gränsen`);
  const enHogre = raknaDaggpunkt({ ...STANDARD, rfProcent: r.rfForGransenProcent + 2 });
  assert.ok(enHogre.rfVidYtanProcent > 75, 'talet är onödigt lågt, gränsen klaras med mer fukt');

  // Varmare yta: samma kontroll åt andra hållet.
  const varmare = raknaDaggpunkt({ ...STANDARD, ytTempC: r.ytTempForGransenC });
  assert.ok(varmare.rfVidYtanProcent <= 75, `${varmare.rfVidYtanProcent} % vid ytan är över gränsen`);
  assert.equal(r.ytanMasteBliVarmare, false);
});

test('en yta långt under daggpunkten kräver en varmare yta, inte torrare luft', () => {
  const r = raknaDaggpunkt({ luftTempC: 22, rfProcent: 70, ytTempC: 2, arstid: 'vinter', rum: 'bostad' });
  assert.equal(r.status, 'ok');
  assert.equal(r.bedomning, 'kondens');
  assert.equal(r.ytanMasteBliVarmare, true);
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaDaggpunkt({ luftTempC: NaN, rfProcent: 120, ytTempC: -40, arstid: 'vinter', rum: 'bostad' });
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.luftTempC, /lufttemperatur/);
  assert.match(r.fel.rfProcent, /luftfuktighet/);
  assert.match(r.fel.ytTempC, /yttemperatur/);
  assert.deepEqual([...GRANSER.rfProcent], [5, 100]);
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(new URLSearchParams('temp=22&rf=65&ytatemp=9,5&arstid=sommar&rum=kallare'));
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    luftTempC: 22,
    rfProcent: 65,
    ytTempC: 9.5,
    arstid: 'sommar',
    rum: 'kallare',
  });
  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);
  assert.equal(tolkaQuery(new URLSearchParams('rum=slott')).indata.rum, STANDARD.rum);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('temp=tjugo')).indata.luftTempC));
});
