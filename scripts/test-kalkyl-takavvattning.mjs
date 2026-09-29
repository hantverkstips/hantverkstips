/**
 * Kör takavvattningen mot specens facit
 * (docs/briefer/spec-kalkyl-tak-2026-09-29.md avsnitt 7.3) och
 * räkneexemplen i docs/briefer/underlag-kalkyl-takavvattning-2026-09-28.md
 * avsnitt 4. Areor jämförs med toleransen 0,01.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-takavvattning.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ANTAGANDEN,
  antagandenFor,
  delbarQuery,
  FALL_MIN_MM_M,
  FALL_SJALVRENS_MM_M,
  KALLOR,
  kortsvarVarden,
  lindabRanna,
  RANNA_RA,
  RANNA_SS,
  RANNLANGD_PER_STUPROR_M,
  raknaTakavvattning,
  SS_AR,
  STANDARD,
  STUPROR_RA,
  STUPROR_SS,
  tabellRanna,
  tabellStupror,
  takbyteQuery,
  TEXT,
  tolkaQuery,
} from '../src/lib/kalkyl/takavvattning.ts';
import { raknaTakbyte, STANDARD as TAKBYTE_STANDARD } from '../src/lib/kalkyl/takbyte.ts';

const nara = (faktiskt, vantat, tol = 0.01) =>
  assert.ok(Math.abs(faktiskt - vantat) <= tol, `${faktiskt} är inte ${vantat} ± ${tol}`);

const rakna = (over = {}) => raknaTakavvattning({ ...STANDARD, ...over });
const yta = (ytaM2, rannaM = 10) => rakna({ satt: 'yta', ytaM2, rannaM });
const ok = (r) => {
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'ok');
  return r;
};

const A12 = { takform: 'pulpet', langdM: 10, breddM: 7, vinkelGrader: 18, utsprangM: 0.4, gavelM: 0.3 };

test('A1 standardhuset', () => {
  const r = ok(rakna());
  assert.equal(r.takfall, 2);
  nara(r.ytaTakfallM2, 71.83);
  assert.equal(r.stuprorPerTakfall, 2);
  nara(r.ytaPerRannfallM2, 35.91);
  nara(r.rannfallM, 6.4);
  assert.deepEqual(r.dim, { ranna: 100, stupror: 75 });
  assert.equal(r.lindab, null);
  assert.equal(r.fallMinMm, 16);
  assert.equal(r.fallSjalvrensMm, 45);
  assert.equal(r.fallSjalvrensMmPerM, 7);
  assert.equal(r.krokarPerTakfall, 22);
  assert.equal(r.totalt.stupror, 4);
  assert.equal(r.totalt.krokar, 44);
  nara(r.totalt.rannmeterM, 25.6);
});

test('A2 75 m², 10 m: 100, 75, Lindab 125', () => {
  const r = ok(yta(75));
  assert.deepEqual(r.dim, { ranna: 100, stupror: 75 });
  assert.equal(r.stuprorPerTakfall, 1);
  assert.equal(r.krokarPerTakfall, 18);
  assert.equal(r.fallMinMm, 25);
  assert.equal(r.fallSjalvrensMm, 70);
  assert.equal(r.lindab, 125);
  assert.ok(r.regler.includes('lindab'));
});

test('A3 90 m², 10 m: Plannjas exempel, 125 och 90', () => {
  const r = ok(yta(90));
  assert.deepEqual(r.dim, { ranna: 125, stupror: 90 });
  assert.equal(r.lindab, null);
  assert.ok(!r.regler.includes('lindab'));
});

test('A4 125 m², 12 m: två stuprör krymper rännan', () => {
  const r = ok(yta(125, 12));
  assert.equal(r.stuprorPerTakfall, 2);
  nara(r.ytaPerRannfallM2, 62.5);
  assert.deepEqual(r.dim, { ranna: 100, stupror: 75 });
  assert.equal(r.lindab, 125);
});

test('A5 200 m², 16 m', () => {
  const r = ok(yta(200, 16));
  assert.equal(r.stuprorPerTakfall, 2);
  nara(r.ytaPerRannfallM2, 100);
  assert.deepEqual(r.dim, { ranna: 125, stupror: 90 });
  assert.equal(r.lindab, null);
});

test('A6 162 m², 18 m: tabellsvaret', () => {
  const r = ok(yta(162, 18));
  assert.equal(r.stuprorPerTakfall, 2);
  nara(r.ytaPerRannfallM2, 81);
  assert.deepEqual(r.dim, { ranna: 125, stupror: 90 });
});

test('A7 260 m²: utanför', () => {
  const r = yta(260);
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'utanfor');
  assert.deepEqual(r.regler, ['yta-lutning', 'antal', 'over-250']);
  assert.deepEqual(r.gorInteDetHar, ['langre-an-10']);
});

test('A8 110 m²: 125, 90, Lindab 150', () => {
  const r = ok(yta(110));
  assert.deepEqual(r.dim, { ranna: 125, stupror: 90 });
  assert.equal(r.lindab, 150);
});

test('A9 250 och 250,1 m²', () => {
  assert.deepEqual(ok(yta(250)).dim, { ranna: 190, stupror: 120 });
  assert.equal(yta(250.1).utfall, 'utanfor');
});

test('A10 gränserna', () => {
  assert.equal(ok(yta(50)).lindab, 125);
  assert.equal(ok(yta(49.9)).lindab, null);
  assert.equal(ok(yta(75)).dim.ranna, 100);
  assert.equal(ok(yta(75.1)).dim.ranna, 125);
  assert.equal(ok(yta(80)).dim.stupror, 75);
  assert.equal(ok(yta(80.1)).dim.stupror, 90);
});

test('A11 hus 16 × 10, 30°', () => {
  const r = ok(rakna({ langdM: 16, breddM: 10, utsprangM: 0.5, gavelM: 0.4, vinkelGrader: 30 }));
  nara(r.ytaPerRannfallM2, 53.35);
  assert.equal(r.dim.ranna, 100);
  assert.equal(r.lindab, 125);
  assert.deepEqual(r.vagratt, { ranna: 100, stupror: 75 });
  nara(r.geometri.projektionPerTakfallM2 / r.stuprorPerTakfall, 46.2);
  assert.equal(r.krokarPerTakfall, 29);
});

test('A12 pulpet 10 × 7', () => {
  const r = ok(rakna(A12));
  assert.equal(r.takfall, 1);
  nara(r.ytaTakfallM2, 86.93);
  assert.equal(r.stuprorPerTakfall, 2);
  nara(r.ytaPerRannfallM2, 43.47);
  assert.deepEqual(r.dim, { ranna: 100, stupror: 75 });
  assert.equal(r.krokarPerTakfall, 19);
});

test('A13 krokar med 4 m ränna: 8', () => {
  assert.equal(ok(yta(20, 4)).krokarPerTakfall, 8);
});

test('A14 flödet vid 125 m²: 1,625 l/s', () => {
  nara(ok(yta(125)).flodeLs, 1.625, 1e-9);
});

test('A15 190-rännan har inget självrensande fall', () => {
  assert.equal(FALL_SJALVRENS_MM_M[190], undefined);
  const r = ok(yta(240));
  assert.equal(r.dim.ranna, 190);
  assert.equal(r.fallSjalvrensMmPerM, null);
  assert.equal(r.fallSjalvrensMm, null);
});

test('satt = yta ger ingen vågrät jämförelse och ingen geometri', () => {
  const r = ok(yta(75));
  assert.equal(r.vagratt, null);
  assert.equal(r.geometri, null);
});

test('tolkaQuery', () => {
  assert.equal(tolkaQuery(new URLSearchParams('ranna=12,5')).indata.rannaM, 12.5);
  assert.equal(tolkaQuery(new URLSearchParams('satt=x')).indata.satt, 'hus');
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(tom.indata, STANDARD);
  assert.equal(tom.harIndata, false);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('yta=')).indata.ytaM2));
  const r1 = raknaTakavvattning(tolkaQuery(new URLSearchParams('satt=yta&langd=abc')).indata);
  assert.equal(r1.status, 'ok');
  const r2 = raknaTakavvattning(tolkaQuery(new URLSearchParams('satt=hus&yta=abc')).indata);
  assert.equal(r2.status, 'ok');
});

test('ogiltigt: fel på rätt fält', () => {
  const fel = (over) => {
    const r = rakna({ satt: 'yta', ...over });
    assert.equal(r.status, 'ogiltig');
    return Object.keys(r.fel);
  };
  assert.deepEqual(fel({ ytaM2: 4 }), ['yta']);
  assert.deepEqual(fel({ ytaM2: 501 }), ['yta']);
  assert.deepEqual(fel({ rannaM: 0.5 }), ['ranna']);
  assert.deepEqual(fel({ rannaM: 41 }), ['ranna']);
  assert.deepEqual(fel({ ytaM2: NaN }), ['yta']);
  const bada = raknaTakavvattning(tolkaQuery(new URLSearchParams('satt=yta&yta=abc&ranna=0')).indata);
  assert.deepEqual(Object.keys(bada.fel).sort(), ['ranna', 'yta']);
});

test('ssStupror: 75 för A1 och för A6', () => {
  assert.equal(ok(rakna()).ssStupror, 75);
  assert.equal(ok(yta(162, 18)).ssStupror, 75);
});

test('konstanterna mot underlaget', () => {
  assert.deepEqual(RANNA_RA, [[100, 75], [125, 125], [150, 200], [190, 250]]);
  assert.deepEqual(STUPROR_RA, [[75, 80], [90, 125], [100, 180], [110, 230], [120, 300], [150, 375]]);
  assert.deepEqual(STUPROR_SS, [[75, 160], [90, 240], [100, 350], [110, 445], [120, 580]]);
  assert.deepEqual(RANNA_SS, [[100, 70], [125, 120], [150, 180]]);
  assert.equal(FALL_MIN_MM_M, 2.5);
  assert.deepEqual({ ...FALL_SJALVRENS_MM_M }, { 100: 7, 125: 6, 150: 5 });
  assert.equal(RANNLANGD_PER_STUPROR_M, 10);
  assert.equal(SS_AR, null);
  assert.equal(lindabRanna(49.9), 100);
  assert.equal(lindabRanna(100), 125);
  assert.equal(lindabRanna(100.1), 150);
});

test('samma yta som takbytet', () => {
  const r = ok(rakna());
  const t = raknaTakbyte(TAKBYTE_STANDARD);
  nara(r.ytaTakfallM2 * r.takfall, t.geometri.takareaM2, 1e-9);
});

test('kortsvarVarden och tabellerna', () => {
  const v = kortsvarVarden();
  assert.deepEqual(v.liten, { yta: '75', ranna: '100', stupror: '75' });
  assert.deepEqual(v.mellan, { yta: '125', ranna: '125', stupror: '90' });
  assert.deepEqual(v.stor, { yta: '200', ranna: '150', stupror: '110' });
  assert.equal(v.fallMin, '2,5');
  const rader = tabellRanna();
  assert.equal(rader.length, 4);
  assert.equal(rader.find((r) => r.dim === 190).p10, null);
  assert.equal(tabellStupror().length, 6);
});

test('rundtur: delbarQuery ger samma svar', () => {
  for (const over of [{}, { satt: 'yta', ytaM2: 110, rannaM: 10 }, A12, { matt: 'nock', nockM: 2.3 }]) {
    const i = { ...STANDARD, ...over };
    const r = raknaTakavvattning(i);
    const q = delbarQuery(i, r.geometri);
    assert.deepEqual(raknaTakavvattning(tolkaQuery(new URLSearchParams(q.toString())).indata), r);
  }
  assert.ok(delbarQuery(STANDARD, null).toString().startsWith('satt=hus'));
  assert.ok(takbyteQuery(STANDARD, null).toString().startsWith('langd=12'));
});

test('regler och gorInteDetHar', () => {
  assert.deepEqual(ok(rakna()).gorInteDetHar, ['utan-fall', 'langre-an-10', 'mindre-ror']);
  assert.deepEqual(ok(rakna()).regler, ['yta-lutning', 'ranna', 'stupror', 'antal', 'fall', 'krokar', 'plast']);
});

test('antagandenFor', () => {
  const n = (r, i) => antagandenFor(r, i).map((a) => a.nyckel);
  const ok1 = n(rakna(), STANDARD);
  assert.ok(ok1.includes('inga-kronor'));
  assert.ok(ok1.includes('ranna-tabell'));
  const ut = n(yta(260), { ...STANDARD, satt: 'yta', ytaM2: 260 });
  assert.ok(!ut.includes('ranna-tabell'));
  assert.ok(ut.includes('langs-lutningen'));
});

const harText = (v) => {
  if (typeof v === 'string') return v.trim().length > 0;
  if (typeof v === 'function') {
    const ut = v({}, {});
    if (typeof ut === 'string') return ut.trim().length > 0;
    if (Array.isArray(ut)) return ut.length > 0 && ut.every((s) => typeof s === 'string' && s.trim().length > 0);
    if (ut && typeof ut === 'object') return typeof ut.fore === 'string' && ut.fore.length > 0;
  }
  return false;
};

test('TEXT har en sträng för varje nyckel', () => {
  for (const u of ['ok', 'utanfor']) {
    assert.ok(harText(TEXT.besked[u].rubrik), u);
    assert.ok(harText(TEXT.besked[u].rad), u);
  }
  for (const g of ['utan-fall', 'langre-an-10', 'mindre-ror']) assert.ok(harText(TEXT.gorInte[g]), g);
  assert.equal(Object.keys(TEXT.regel).length, 9);
  for (const [k, r] of Object.entries(TEXT.regel)) assert.ok(harText(r.text), k);
  for (const s of ['hus', 'yta']) assert.ok(harText(TEXT.satt[s]), s);
  for (const t of ['sadel', 'pulpet']) assert.ok(harText(TEXT.takform[t]), t);
  for (const a of ANTAGANDEN) assert.ok(harText(TEXT.antagande[a.nyckel]), a.nyckel);
  for (const [k, v] of Object.entries({ ...TEXT.form, ...TEXT.spalt, ...TEXT.darfor, ...TEXT.tabell, ...TEXT.jamforelse })) {
    assert.ok(harText(v), k);
  }
  assert.ok(harText(TEXT.steg));
  assert.ok(harText(TEXT.kortsvar));
});

test('ANTAGANDEN: varje rad av typen Källa har en källa med https', () => {
  for (const a of ANTAGANDEN) {
    if (a.typ !== 'Källa') continue;
    assert.ok(a.kallor.length > 0, a.nyckel);
    for (const k of a.kallor) assert.ok(KALLOR[k].url.startsWith('https://'), `${a.nyckel}: ${k}`);
  }
});

test('retur 6: pulpettak med vinkeln angiven får vinkeln i beskedet och en varning', async () => {
  const { beskedVarden } = await import('../src/lib/kalkyl/takavvattning.ts');
  const varden = (over) => {
    const i = { ...STANDARD, ...over };
    return beskedVarden(raknaTakavvattning(i), i);
  };
  const pulpet = varden(A12);
  assert.equal(pulpet.takform, 'pulpet');
  assert.equal(pulpet.matt, 'vinkel');
  assert.equal(pulpet.vinkel, '18');
  /* 7 · tan 18° = 2,27 m. */
  assert.equal(pulpet.nock, '2,27');
  const varning = TEXT.varning['pulpet-vinkel'](pulpet);
  assert.ok(varning.trim().length > 0);
  assert.ok(TEXT.besked.ok.rad(pulpet).endsWith(varning));
  /* Sadeltak, pulpettak med nockhöjden och satt = yta får ingen varning. */
  for (const v of [varden({}), varden({ ...A12, matt: 'nock', nockM: 2.3 }), varden({ satt: 'yta', ytaM2: 90, rannaM: 10 })]) {
    assert.ok(!TEXT.besked[v.utfall].rad(v).includes(TEXT.varning['pulpet-vinkel'](v)));
  }
  const yt = varden({ satt: 'yta', ytaM2: 90, rannaM: 10 });
  assert.equal(yt.vinkel, null);
  assert.equal(yt.takform, null);
});
