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
  FORVAL_PER_RUM,
  forvalFranAdress,
  glasTemperatur,
  GRANSER,
  NORMALT_PER_RUM,
  RUM_MED_FORVAL,
  RUMSVAL,
  TEXT,
  TYPISKA_U,
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
    uVarde: 3,
    uteTempC: -5,
  });
  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);
  assert.equal(tolkaQuery(new URLSearchParams('rum=slott')).indata.rum, STANDARD.rum);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('temp=tjugo')).indata.luftTempC));
});

/* ------------------------------------------------------------------ *
 * Förvalen per rum, docs/briefer/spec-daggpunkt-rum-2026-09-30.md 10
 * ------------------------------------------------------------------ */

test('R1: glasets temperatur stämmer med tabellen på /fukt/kondens-pa-fonster/', () => {
  for (const [u, ute, glas] of [
    [3.0, -5, 10.9],
    [3.0, -10, 8.9],
    [3.0, -20, 5.0],
    [2.8, -20, 6.1],
    [1.4, -20, 13.5],
    [0.8, -20, 16.7],
  ]) {
    naraNog(glasTemperatur(21, ute, u), glas, `U ${u} vid ${ute} ute`);
  }
});

/** Kontrolltalen i specens avsnitt 1. */
const KONTROLL = {
  sovrum: { daggpunkt: 8.6, yta: 12, rfYta: 80, bedomning: 'mogelrisk' },
  fonster: { daggpunkt: 8.6, yta: 10.9, rfYta: 86, bedomning: 'mogelrisk' },
  kallare: { daggpunkt: 14.4, yta: 12, rfYta: 100, bedomning: 'kondens' },
  krypgrund: { daggpunkt: 14.4, yta: 10, rfYta: 100, bedomning: 'kondens' },
  garage: { daggpunkt: 14.4, yta: 10, rfYta: 100, bedomning: 'kondens' },
};

test('R2: varje förval fyller indata och ger kontrolltalen', () => {
  assert.deepEqual(RUM_MED_FORVAL, ['sovrum', 'fonster', 'kallare', 'krypgrund', 'garage']);
  for (const rum of RUM_MED_FORVAL) {
    const f = FORVAL_PER_RUM[rum];
    const { indata, harIndata } = tolkaQuery(new URLSearchParams(`rum=${rum}`));
    assert.equal(harIndata, true, rum);
    assert.equal(indata.rum, rum);
    for (const [k, v] of Object.entries(f)) assert.equal(indata[k], v, `${rum} ${k}`);
    const r = raknaDaggpunkt(indata);
    assert.equal(r.status, 'ok', rum);
    const k = KONTROLL[rum];
    naraNog(r.daggpunktC, k.daggpunkt, `${rum} daggpunkt`);
    naraNog(r.ytTempC, k.yta, `${rum} yta`);
    assert.equal(Math.round(r.rfVidYtanProcent), k.rfYta, `${rum} luftfuktighet vid ytan`);
    assert.equal(r.bedomning, k.bedomning, rum);
    console.log(
      `${rum}: daggpunkt ${r.daggpunktC.toFixed(1)}, yta ${r.ytTempC.toFixed(1)}, ${r.rfVidYtanProcent.toFixed(0)} % vid ytan, ${r.bedomning}`,
    );
  }
});

test('R2: källaren, krypgrunden och garaget får rådet för kalla utrymmen, sovrummet och fönstret bostadens', () => {
  for (const rum of ['kallare', 'krypgrund', 'garage']) {
    const r = raknaDaggpunkt(tolkaQuery(new URLSearchParams(`rum=${rum}`)).indata);
    assert.deepEqual(r.atgarder, ['avfuktare', 'varm_eller_isolera_ytan'], rum);
    assert.equal(r.visaAvfuktare, true, rum);
    assert.match(r.gorInteDetHar, /Vädra inte/, rum);
  }
  for (const rum of ['sovrum', 'fonster']) {
    const r = raknaDaggpunkt(tolkaQuery(new URLSearchParams(`rum=${rum}`)).indata);
    assert.deepEqual(r.atgarder, ['vadra', 'sank_fuktproduktion', 'varm_eller_isolera_ytan'], rum);
    assert.match(r.gorInteDetHar, /avfuktare till ett sovrum/, rum);
  }
});

test('R3: tal i adressen vinner över förvalet', () => {
  const { indata } = tolkaQuery(new URLSearchParams('rum=kallare&temp=15'));
  assert.equal(indata.luftTempC, 15);
  assert.equal(indata.rfProcent, 70);
  assert.equal(indata.ytTempC, 12);
  assert.equal(indata.arstid, 'sommar');
  assert.equal(indata.rum, 'kallare');
});

test('R4: rum=bostad och inget rum ger STANDARD', () => {
  assert.deepEqual(tolkaQuery(new URLSearchParams('rum=bostad')).indata, STANDARD);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);
});

test('R5: fönstret räknar glaset och bryr sig inte om ytatemp', () => {
  const { indata } = tolkaQuery(new URLSearchParams('rum=fonster&u=1,4&ute=-20'));
  assert.equal(indata.uVarde, 1.4);
  assert.equal(indata.uteTempC, -20);
  const r = raknaDaggpunkt(indata);
  assert.equal(r.status, 'ok');
  naraNog(r.ytTempC, 13.5, 'glaset');
  assert.notEqual(r.bedomning, 'kondens');

  const medYta = raknaDaggpunkt(tolkaQuery(new URLSearchParams('rum=fonster&u=1,4&ute=-20&ytatemp=2')).indata);
  assert.deepEqual(medYta, r);
  const skrapYta = raknaDaggpunkt(tolkaQuery(new URLSearchParams('rum=fonster&ytatemp=tjugo')).indata);
  assert.equal(skrapYta.status, 'ok');

  const fel = raknaDaggpunkt(tolkaQuery(new URLSearchParams('rum=fonster&u=9&ute=tjugo')).indata);
  assert.equal(fel.status, 'ogiltig');
  assert.equal(typeof fel.fel.uVarde, 'string');
  assert.equal(typeof fel.fel.uteTempC, 'string');
  assert.equal(fel.fel.ytTempC, undefined);
  assert.deepEqual([...GRANSER.uVarde], [0.5, 6]);
  assert.deepEqual([...GRANSER.uteTempC], [-40, 15]);

  // Utan fönster ignoreras u och ute.
  const kallare = raknaDaggpunkt(tolkaQuery(new URLSearchParams('rum=kallare&u=9&ute=tjugo')).indata);
  assert.equal(kallare.status, 'ok');
  assert.equal(kallare.ytTempC, 12);
});

test('R6: rummets normala luftfuktighet och var talet ligger', () => {
  const normalt = (q) => raknaDaggpunkt(tolkaQuery(new URLSearchParams(q)).indata).normalt;
  assert.equal(normalt('rum=garage&rf=70').lage, 'over');
  assert.equal(normalt('rum=sovrum&arstid=vinter&rf=45').lage, 'inom');
  assert.equal(normalt('rum=bostad&arstid=vinter&rf=30').lage, 'over');
  assert.equal(normalt('rum=bostad&arstid=sommar&rf=40').lage, 'under');
  assert.deepEqual(normalt('rum=garage&rf=70'), { lagst: null, hogst: 60, kalla: 'sbi', lage: 'over' });
  for (const r of RUMSVAL) {
    for (const a of ['vinter', 'sommar']) assert.ok(NORMALT_PER_RUM[r.varde][a], `${r.varde} ${a}`);
  }
});

test('R7: forvalFranAdress godtar rummen och stoppar allt annat', () => {
  const ok = forvalFranAdress('rum=fonster');
  assert.equal(ok.status, 'ok');
  assert.equal(ok.indata.rum, 'fonster');
  assert.deepEqual(ok.varden, { temp: '21', rf: '45', ytatemp: '12', u: '3', ute: '-5' });
  assert.equal(forvalFranAdress('rum=vind').status, 'fel');
  assert.equal(forvalFranAdress('farg=bla').status, 'fel');
  assert.equal(forvalFranAdress('rum=kallare&rf=120').status, 'fel');
});

test('R8: texterna finns som strängar (TEXT SAKNAS tills hantverkaren skrivit dem)', () => {
  const strangar = [
    ...RUM_MED_FORVAL.map((r) => [`rumKort.${r}`, TEXT.rumKort[r]]),
    ...RUMSVAL.map((r) => [`RUMSVAL.${r.varde}`, r.etikett]),
    ...TYPISKA_U.map((t, n) => [`TYPISKA_U[${n}]`, t.typ]),
    ['fel.uVarde', TEXT.fel.uVarde(0.5, 6)],
    ['fel.uteTempC', TEXT.fel.uteTempC(-40, 15)],
    ...Object.entries(TEXT.normaltKalla).map(([k, v]) => [`normaltKalla.${k}`, v]),
  ];
  for (const [namn, t] of strangar) {
    assert.equal(typeof t, 'string', namn);
    assert.ok(t.length > 0, namn);
  }
  assert.deepEqual(RUMSVAL.map((r) => r.varde), ['bostad', 'sovrum', 'fonster', 'kallare', 'krypgrund', 'garage']);
  assert.deepEqual(Object.keys(TEXT.normaltKalla).sort(), [
    'astma-allergi',
    'fohm',
    'olsson-sp',
    'sbi',
    'traguiden',
    'villaagarna',
  ]);
  assert.deepEqual(
    TYPISKA_U.map((t) => t.spann),
    [
      [2.8, 3.0],
      [1.4, 1.8],
      [0.6, 0.9],
    ],
  );
});
