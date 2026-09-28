/**
 * Kör grannemedgivandet mot underlagets testfall (avsnitt 6), egen kontroll
 * mot lagtexten 2026-09-28: plan- och bygglagen 9 kap. 4, 5, 10, 19, 34, 35,
 * 37 och 38 §§ i lydelse Lag (2025:974), lagen.nu/2010:900. Fallen står i
 * docs/briefer/spec-kalkyl-grannemedgivande-2026-09-28.md avsnitt 6.
 *
 * Kör också altanräknaren på samma altaner (specen 6.3), så att de två
 * verktygen inte kan säga olika saker om samma altan.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-grannemedgivande.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ANTAGANDEN,
  ATGARDSTABELL,
  altanraknarQuery,
  avgorandeRegel,
  blankettFakta,
  bytAtgardQuery,
  delbarQuery,
  GRANS_M,
  GRANSER,
  harTakfot,
  HOJD_LANGRE_BORT_M,
  HOJD_NARA_BYGGNAD_M,
  JARNVAG_M,
  KOMPLEMENT,
  LOVFRI_TILLBYGGNAD_KVM,
  NARA_BYGGNAD_M,
  NYCKLAR,
  PLANK_HOJD_GRANS_M,
  raknaGrannemedgivande,
  STANDARD,
  talText,
  TEXT,
  tolkaQuery,
} from '../src/lib/kalkyl/grannemedgivande.ts';
import {
  GRANS_M as ALTAN_GRANS_M,
  raknaBygglovAltan,
  STANDARD as ALTAN,
} from '../src/lib/kalkyl/bygglov-altan.ts';

/** Standardfallet med ett eller flera fält utbytta. */
const gm = (andringar = {}) => ({ ...STANDARD, ...andringar });

function ok(r) {
  assert.equal(r.status, 'ok', JSON.stringify(r));
  return r;
}

const nycklar = (r) => r.regler.map((x) => x.nyckel);
const regel = (r, nyckel) => r.regler.find((x) => x.nyckel === nyckel);

/* ------------------------------------------------------------------ *
 * 6.1 Fallen
 * ------------------------------------------------------------------ */

const FALL = [
  { id: '1', indata: gm(), utfall: 'kravs', mottagare: ['grannar'], avgor: 'grans-tomt', lagrum: '34 § 1 och 35 § första stycket 3' },
  { id: '2', indata: gm({ gransM: 5.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'langt-fran-grans' },
  { id: '3', indata: gm({ byaKvm: 35, nockM: 3.5 }), utfall: 'bygglov', mottagare: [], avgor: 'bya', slag: 'bygglov', lagrum: '4 § 1' },
  { id: '4', indata: gm({ atgard: 'tillbyggnad', areaKvm: 20, gransM: 3.0 }), utfall: 'kravs', mottagare: ['grannar'], avgor: 'grans-tomt', lagrum: '34 § 1' },
  { id: '5', indata: gm({ atgard: 'plank', plankHojdM: 1.6, plankAvstandM: 2.0, gransM: 1.0 }), utfall: 'kravs', mottagare: ['grannar'], avgor: 'grans-tomt', lagrum: '34 § 3' },
  { id: '6', indata: gm({ atgard: 'altan', golvM: 0.6, altanAvstandM: 0, gransM: 1.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'altan-inte-34', lagrum: 'prop. 2024/25:169 s. 162' },
  { id: 'K1', indata: gm({ gransM: 4.5 }), utfall: 'kravs-inte', mottagare: [], avgor: 'langt-fran-grans' },
  { id: 'K1b', indata: gm({ gransM: 4.49 }), utfall: 'kravs', mottagare: ['grannar'] },
  { id: 'K2', indata: gm({ atgard: 'plank', plankHojdM: 1.2, plankAvstandM: 2.0, gransM: 1.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'plank-lagt' },
  { id: 'K2b', indata: gm({ atgard: 'plank', plankHojdM: 1.21, plankAvstandM: 2.0, gransM: 1.0 }), utfall: 'kravs', mottagare: ['grannar'] },
  { id: 'K3', indata: gm({ atgard: 'plank', plankHojdM: 2.0, plankAvstandM: 5.0, gransM: 1.0 }), utfall: 'bygglov', mottagare: [], avgor: 'hojd-19', lagrum: '19 §' },
  { id: 'K4', indata: gm({ atgard: 'plank', plankHojdM: 2.0, plankAvstandM: 5.0, gransM: 1.0, plan: 'nej' }), utfall: 'kravs', mottagare: ['grannar'], avgor: 'grans-tomt', finns: ['utanfor-plan-19'] },
  { id: 'K5', indata: gm({ plan: 'nej', byaKvm: 45, nockM: 4.2, gransM: 3.0 }), utfall: 'kravs', mottagare: ['grannar'], avgor: 'bya', slag: 'inom', lagrum: '5 § 1' },
  { id: 'K6', indata: gm({ atgard: 'ekonomi', plan: 'nej', gransM: 1.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'ekonomi', lagrum: '35 § 1' },
  { id: 'K7', indata: gm({ mot: 'gata', gransM: 3.0 }), utfall: 'kravs', mottagare: ['huvudman'], avgor: 'grans-gata', lagrum: '35 § andra stycket' },
  { id: 'K8', indata: gm({ byaKvm: 20, ovrigaKvm: 30, gransM: 3.0 }), utfall: 'bygglov', mottagare: [], avgor: 'summa', slag: 'bygglov', lagrum: '4 § 5' },
  { id: 'K10', indata: gm({ vardefullt: true }), utfall: 'bygglov', mottagare: [], avgor: 'varde', lagrum: '37 §' },
  { id: 'K10b', indata: gm({ atgard: 'plank', plankHojdM: 1.6, plankAvstandM: 2.0, vardefullt: true }), utfall: 'bygglov', mottagare: [], avgor: 'varde', lagrum: '38 §' },
  { id: 'K10c', indata: gm({ atgard: 'staket', vardefullt: true, gransM: 1.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'staket-inte-34' },
  { id: 'J1', indata: gm({ gransM: 10, jarnvag: true }), utfall: 'kravs', mottagare: ['jarnvag'], avgor: 'jarnvag', lagrum: '35 § andra stycket' },
  { id: 'J2', indata: gm({ gransM: 2.0, jarnvag: true }), utfall: 'kravs', mottagare: ['grannar', 'jarnvag'], ordning: ['grans-tomt', 'jarnvag'] },
  { id: 'J3', indata: gm({ atgard: 'plank', plankHojdM: 1.0, plankAvstandM: 2.0, gransM: 10, jarnvag: true }), utfall: 'kravs-inte', mottagare: [], avgor: 'plank-lagt' },
  { id: 'V1', indata: gm({ plan: 'nej', mot: 'vag', gransM: 2.0 }), utfall: 'bygglov', mottagare: [], avgor: 'grans-vag', lagrum: 'prop. 2024/25:169 s. 170' },
  { id: 'V2', indata: gm({ plan: 'nej', mot: 'vag', gransM: 6.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'langt-fran-grans' },
  { id: 'G1', indata: gm({ nockM: 4.0 }), utfall: 'kravs', avgor: 'nock', slag: 'inom' },
  { id: 'G2', indata: gm({ nockM: 4.01 }), utfall: 'bygglov', mottagare: [], avgor: 'nock', slag: 'bygglov' },
  { id: 'G3', indata: gm({ byaKvm: 30, ovrigaKvm: 15 }), utfall: 'kravs', avgor: 'summa', slag: 'inom' },
  { id: 'G4', indata: gm({ atgard: 'tillbyggnad', areaKvm: 25, ovrigaTbKvm: 10 }), utfall: 'bygglov', mottagare: [], avgor: 'area', slag: 'bygglov' },
  { id: 'G5', indata: gm({ atgard: 'tillbyggnad', areaKvm: 30, ovrigaTbKvm: 0 }), utfall: 'kravs', avgor: 'area', slag: 'inom' },
  { id: 'G6', indata: gm({ atgard: 'altan', golvM: 1.8, altanAvstandM: 3.6, gransM: 1.0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'altan-inte-34' },
  { id: 'G7', indata: gm({ atgard: 'altan', golvM: 1.81, altanAvstandM: 3.6 }), utfall: 'bygglov', mottagare: [], avgor: 'hojd-19' },
  { id: 'G8', indata: gm({ atgard: 'altan', golvM: 1.3, altanAvstandM: 3.7 }), utfall: 'bygglov', mottagare: [], avgor: 'hojd-19' },
  { id: 'S1', indata: gm({ atgard: 'staket', gransM: 0 }), utfall: 'kravs-inte', mottagare: [], avgor: 'staket-inte-34' },
];

/** gorInteDetHar enligt specen 2.7, räknat oberoende av modulen. */
function vantadeRad(indata, utfall, mottagare) {
  const ut = [];
  if (utfall === 'kravs') {
    /* muntligt när grannar skriver under, annars muntligt-myndighet (specen 12.10). */
    ut.push(mottagare.includes('grannar') ? 'muntligt' : 'muntligt-myndighet', 'tystnad', 'bygga-annat', 'lita-pa-pappret');
  }
  if ((indata.atgard === 'komplement' || indata.atgard === 'tillbyggnad') && utfall !== 'bygglov') ut.push('mata-fran-vaggen');
  if (utfall === 'bygglov') ut.push('medgivande-mot-lov');
  return ut;
}

for (const f of FALL) {
  test(`fall ${f.id}: ${f.utfall}`, () => {
    const r = ok(raknaGrannemedgivande(f.indata));
    assert.equal(r.utfall, f.utfall, 'utfallet');
    if (f.mottagare) assert.deepEqual(r.mottagare, f.mottagare, 'mottagarna');
    if (r.utfall !== 'kravs') assert.deepEqual(r.mottagare, [], 'mottagare bara vid kravs');
    if (f.avgor) {
      const x = regel(r, f.avgor);
      assert.ok(x, `regeln ${f.avgor} finns: ${nycklar(r).join(', ')}`);
      if (f.slag) assert.equal(x.slag, f.slag, `slaget på ${f.avgor}`);
      if (f.lagrum) assert.ok(x.lagrum.includes(f.lagrum), `lagrummet "${x.lagrum}" innehåller "${f.lagrum}"`);
    }
    for (const n of f.finns ?? []) assert.ok(regel(r, n), `regeln ${n} finns`);
    if (f.ordning) {
      const idx = f.ordning.map((n) => nycklar(r).indexOf(n));
      assert.ok(idx.every((v) => v >= 0), 'båda reglerna finns');
      assert.deepEqual(idx, [...idx].sort((a, b) => a - b), 'i den ordningen');
    }

    /* Per fall: regler, lagrum, villkoren sist, råden. */
    assert.ok(r.regler.length > 0, 'regler är inte tom');
    for (const x of r.regler) {
      assert.ok(/^(Plan- och bygglagen|Prop\.)/.test(x.lagrum), `lagrummet börjar rätt: ${x.lagrum}`);
    }
    const forstaVillkor = r.regler.findIndex((x) => x.slag === 'villkor');
    if (forstaVillkor >= 0) {
      assert.ok(r.regler.slice(forstaVillkor).every((x) => x.slag === 'villkor'), 'villkoren står sist');
    }
    assert.deepEqual(r.gorInteDetHar, vantadeRad(f.indata, r.utfall, r.mottagare), 'gorInteDetHar');
  });
}

test('råden i fall 1, 3 och 6 står ordagrant som i specen', () => {
  assert.deepEqual(ok(raknaGrannemedgivande(gm())).gorInteDetHar, ['muntligt', 'tystnad', 'bygga-annat', 'lita-pa-pappret', 'mata-fran-vaggen']);
  assert.deepEqual(ok(raknaGrannemedgivande(gm({ byaKvm: 35, nockM: 3.5 }))).gorInteDetHar, ['medgivande-mot-lov']);
  assert.deepEqual(ok(raknaGrannemedgivande(gm({ atgard: 'altan', golvM: 0.6, altanAvstandM: 0, gransM: 1.0 }))).gorInteDetHar, []);
});

test('huvudman och järnväg ensamma får muntligt-myndighet i stället för muntligt (specen 12.10)', () => {
  for (const indata of [gm({ gransM: 10, jarnvag: true }), gm({ mot: 'gata', gransM: 3.0 })]) {
    const r = ok(raknaGrannemedgivande(indata));
    assert.equal(r.gorInteDetHar[0], 'muntligt-myndighet');
    assert.ok(!r.gorInteDetHar.includes('muntligt'));
  }
  const j2 = ok(raknaGrannemedgivande(gm({ gransM: 2.0, jarnvag: true })));
  assert.equal(j2.gorInteDetHar[0], 'muntligt');
});

test('harTakfot gäller komplementbyggnad och tillbyggnad, inget annat (specen 12.5)', () => {
  assert.deepEqual(
    Object.fromEntries(['komplement', 'tillbyggnad', 'altan', 'plank', 'staket', 'ekonomi'].map((a) => [a, harTakfot(a)])),
    { komplement: true, tillbyggnad: true, altan: false, plank: false, staket: false, ekonomi: false },
  );
});

test('blankettens inledning och sidans ledtext finns för varje mottagare (specen 12.4)', () => {
  for (const m of ['grannar', 'huvudman', 'jarnvag']) {
    assert.ok(ICKE_TOM(TEXT.blankett.inledning(m)), m);
  }
  assert.ok(ICKE_TOM(TEXT.sida.ledtext(['grannar'])));
  assert.ok(ICKE_TOM(TEXT.sida.ledtext(['huvudman'])));
  assert.notEqual(TEXT.sida.ledtext(['grannar', 'jarnvag']), TEXT.sida.ledtext(['jarnvag']));
  for (const p of ['ja', 'nej']) assert.ok(ICKE_TOM(TEXT.blankett['plan-ensam'][p]), p);
  assert.ok(ICKE_TOM(TEXT.falt.grans.hjalp.byggnad) && ICKE_TOM(TEXT.falt.grans.hjalp.annat));
});

test('villkoren vid kravs inom plan: huvudbyggnad, tomten, flera gränser, planstrid', () => {
  const r = ok(raknaGrannemedgivande(gm()));
  assert.deepEqual(nycklar(r), [
    'bya', 'nock', 'summa', 'grans-tomt', 'skriftligt',
    'villkor-huvudbyggnad', 'villkor-tomten', 'villkor-flera-granser', 'villkor-planstrid',
  ]);
  const altan = ok(raknaGrannemedgivande(gm({ atgard: 'altan' })));
  assert.deepEqual(nycklar(altan), ['hojd-19', 'altan-inte-34', 'villkor-tatt-plank']);
  const tb = ok(raknaGrannemedgivande(gm({ atgard: 'tillbyggnad', gransM: 6 })));
  assert.deepEqual(nycklar(tb), ['area', 'langt-fran-grans', 'villkor-taknock']);
});

/* ------------------------------------------------------------------ *
 * 6.2 Ogiltigt
 * ------------------------------------------------------------------ */

const OGILTIGA = [
  { namn: 'ekonomi inom plan', indata: gm({ atgard: 'ekonomi', plan: 'ja' }), fel: ['atgard'] },
  { namn: 'gata utanför plan', indata: gm({ mot: 'gata', plan: 'nej' }), fel: ['mot'] },
  { namn: 'väg inom plan', indata: gm({ mot: 'vag', plan: 'ja' }), fel: ['mot'] },
  { namn: 'gräns -1', indata: gm({ gransM: -1 }), fel: ['grans'] },
  { namn: 'gräns 101', indata: gm({ gransM: 101 }), fel: ['grans'] },
  { namn: 'gräns NaN', indata: gm({ gransM: NaN }), fel: ['grans'] },
  { namn: 'bya 0', indata: gm({ byaKvm: 0 }), fel: ['bya'] },
  { namn: 'bya 201', indata: gm({ byaKvm: 201 }), fel: ['bya'] },
  { namn: 'bya NaN', indata: gm({ byaKvm: NaN }), fel: ['bya'] },
  { namn: 'nock 0,4', indata: gm({ nockM: 0.4 }), fel: ['nock'] },
  { namn: 'tillbyggnad area 0', indata: gm({ atgard: 'tillbyggnad', areaKvm: 0 }), fel: ['area'] },
  { namn: 'plank höjd 0', indata: gm({ atgard: 'plank', plankHojdM: 0 }), fel: ['plankhojd'] },
  { namn: 'altan golv 11', indata: gm({ atgard: 'altan', golvM: 11 }), fel: ['golv'] },
  { namn: 'bya 0 och gräns NaN', indata: gm({ byaKvm: 0, gransM: NaN }), fel: ['bya', 'grans'] },
];

for (const o of OGILTIGA) {
  test(`ogiltigt: ${o.namn}`, () => {
    const r = raknaGrannemedgivande(o.indata);
    assert.equal(r.status, 'ogiltig');
    assert.deepEqual(Object.keys(r.fel).sort(), [...o.fel].sort());
    for (const k of o.fel) assert.ok(typeof r.fel[k] === 'string' && r.fel[k].length > 0);
  });
}

test('andra åtgärders fält valideras inte', () => {
  ok(raknaGrannemedgivande(gm({ plankHojdM: NaN })));
  ok(raknaGrannemedgivande(gm({ atgard: 'staket', byaKvm: NaN, areaKvm: -5 })));
});

test('gränserna är specens, inklusive', () => {
  assert.deepEqual(
    Object.fromEntries(Object.entries(GRANSER).map(([k, v]) => [k, [...v]])),
    {
      gransM: [0, 100], byaKvm: [1, 200], nockM: [0.5, 15], ovrigaKvm: [0, 500], areaKvm: [1, 200],
      ovrigaTbKvm: [0, 200], plankHojdM: [0.1, 5], plankAvstandM: [0, 100], golvM: [0, 10], altanAvstandM: [0, 100],
    },
  );
  ok(raknaGrannemedgivande(gm({ gransM: 100 })));
  ok(raknaGrannemedgivande(gm({ gransM: 0 })));
  ok(raknaGrannemedgivande(gm({ byaKvm: 1 })));
});

/* ------------------------------------------------------------------ *
 * 6.3 De två räknarna säger samma sak
 * ------------------------------------------------------------------ */

const SAMMA = [
  {
    altan: { ...ALTAN, avstandGransM: 1.0 },
    krav: false,
    gm: gm({ atgard: 'altan', golvM: 0.8, altanAvstandM: 0, gransM: 1.0 }),
    utfall: 'kravs-inte',
  },
  {
    altan: { ...ALTAN, tak: 'skarmtak', ytaKvm: 20, avstandGransM: 2.0 },
    krav: true,
    gm: gm({ atgard: 'tillbyggnad', areaKvm: 20, gransM: 2.0 }),
    utfall: 'kravs',
  },
  {
    altan: { ...ALTAN, tak: 'vaggar', ytaKvm: 40, avstandGransM: 2.0 },
    krav: false,
    gm: gm({ atgard: 'tillbyggnad', areaKvm: 40, gransM: 2.0 }),
    utfall: 'bygglov',
  },
  {
    altan: { ...ALTAN, tak: 'skarmtak', ytaKvm: 20, avstandGransM: 4.5 },
    krav: false,
    gm: gm({ atgard: 'tillbyggnad', areaKvm: 20, gransM: 4.5 }),
    utfall: 'kravs-inte',
  },
  {
    altan: { ...ALTAN, hojdM: 1.9, avstandGransM: 1.0 },
    krav: false,
    gm: gm({ atgard: 'altan', golvM: 1.9, altanAvstandM: 0, gransM: 1.0 }),
    utfall: 'bygglov',
  },
];

for (const [n, s] of SAMMA.entries()) {
  test(`samma altan i båda räknarna, rad ${n + 1}: ${s.utfall}`, () => {
    const a = raknaBygglovAltan(s.altan);
    assert.equal(a.status, 'ok');
    assert.equal(a.kravGrannmedgivande, s.krav, 'altanräknarens kravGrannmedgivande');
    const g = ok(raknaGrannemedgivande(s.gm));
    assert.equal(g.utfall, s.utfall, 'grannemedgivandets utfall');
    /* Samma sak: altanräknaren kräver medgivande exakt när grannemedgivandet säger kravs. */
    assert.equal(a.kravGrannmedgivande, g.utfall === 'kravs');
    /* Altanräknaren svarar granne när grannen måste skriva under (specen 12.1). */
    if (a.kravGrannmedgivande) assert.equal(a.svar, 'granne');
  });
}

test('GRANS_M är samma värde i båda modulerna, importerat', () => {
  assert.equal(GRANS_M, ALTAN_GRANS_M);
  assert.equal(GRANS_M, 4.5);
});

/* ------------------------------------------------------------------ *
 * 6.4 Övrigt
 * ------------------------------------------------------------------ */

test('konstanterna', () => {
  assert.deepEqual(KOMPLEMENT, {
    ja: { byaKvm: 30, nockM: 4.0, summaKvm: 45 },
    nej: { byaKvm: 50, nockM: 4.5, summaKvm: 65 },
  });
  assert.equal(JARNVAG_M, 30);
  assert.equal(PLANK_HOJD_GRANS_M, 1.2);
  assert.equal(GRANS_M, 4.5);
  assert.equal(HOJD_NARA_BYGGNAD_M, 1.8);
  assert.equal(HOJD_LANGRE_BORT_M, 1.2);
  assert.equal(NARA_BYGGNAD_M, 3.6);
  assert.equal(LOVFRI_TILLBYGGNAD_KVM, 30);
});

test('tolkaQuery', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(tom.indata, STANDARD);
  assert.equal(tom.harIndata, false);
  assert.equal(tolkaQuery(new URLSearchParams('grans=2,5')).indata.gransM, 2.5);
  assert.equal(tolkaQuery(new URLSearchParams('grans=2,5 m')).indata.gransM, 2.5);
  assert.equal(tolkaQuery(new URLSearchParams('bya=12 m²')).indata.byaKvm, 12);
  assert.equal(tolkaQuery(new URLSearchParams('bya=12m2')).indata.byaKvm, 12);
  assert.equal(tolkaQuery(new URLSearchParams('atgard=pool')).indata.atgard, STANDARD.atgard);
  assert.equal(tolkaQuery(new URLSearchParams('jarnvag=1')).indata.jarnvag, true);
  assert.equal(tolkaQuery(new URLSearchParams('jarnvag=ja')).indata.jarnvag, false);
  assert.equal(tolkaQuery(new URLSearchParams('varde=1')).indata.vardefullt, true);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('bya=tolv')).indata.byaKvm));
  assert.equal(tolkaQuery(new URLSearchParams('plan=kanske')).indata.plan, 'ja');
  assert.equal(tolkaQuery(new URLSearchParams('mot=sjo')).indata.mot, 'tomt');
  assert.equal(tolkaQuery(new URLSearchParams('plan=nej')).harIndata, true);
});

test('integriteten: okända nycklar läses inte och skrivs aldrig', () => {
  const q = tolkaQuery(new URLSearchParams('namn=Anna&fb=Ekeby+1:2&adress=Storgatan+1'));
  assert.deepEqual(q.indata, STANDARD);
  assert.equal(q.harIndata, false);

  const tillatna = new Set(NYCKLAR);
  for (const f of FALL) {
    for (const k of delbarQuery(f.indata).keys()) assert.ok(tillatna.has(k), `okänd nyckel ${k}`);
  }
  /* Även om indata bär fler fält än modellen känner till. */
  const skrap = { ...STANDARD, namn: 'Anna', fb: 'Ekeby 1:2' };
  assert.ok(![...delbarQuery(skrap).keys()].some((k) => !tillatna.has(k)));
  assert.ok(!delbarQuery(skrap).toString().includes('Anna'));

  assert.equal(delbarQuery(STANDARD).toString(), 'atgard=komplement&plan=ja&grans=2&mot=tomt&bya=12&nock=3&ovriga=0');
});

test('delbarQuery skriver bara den valda åtgärdens nycklar, och jarnvag och varde bara när sanna', () => {
  const p = delbarQuery(gm({ atgard: 'plank', plankHojdM: 1.6, plankAvstandM: 2.5, jarnvag: true, vardefullt: true }));
  assert.deepEqual([...p.keys()], ['atgard', 'plan', 'grans', 'mot', 'jarnvag', 'varde', 'plankhojd', 'plankavstand']);
  assert.equal(p.get('plankavstand'), '2,5');
  assert.deepEqual([...delbarQuery(gm({ atgard: 'staket' })).keys()], ['atgard', 'plan', 'grans', 'mot']);
});

test('rundtur: delbarQuery tolkad igen ger samma svar', () => {
  for (const id of ['1', '4', '5', '6', 'K7', 'J2']) {
    const f = FALL.find((x) => x.id === id);
    const igen = tolkaQuery(delbarQuery(f.indata)).indata;
    assert.deepEqual(raknaGrannemedgivande(igen), raknaGrannemedgivande(f.indata), `fall ${id}`);
  }
});

test('bytAtgardQuery', () => {
  const eko = bytAtgardQuery(STANDARD, 'ekonomi');
  assert.equal(eko.get('atgard'), 'ekonomi');
  assert.equal(eko.get('plan'), 'nej');
  assert.ok(!['bya', 'nock', 'ovriga'].some((k) => eko.has(k)));
  assert.equal(bytAtgardQuery({ ...STANDARD, mot: 'gata' }, 'ekonomi').get('mot'), 'tomt');
  /* Från ekonomi behålls planen nej. */
  const fran = bytAtgardQuery(gm({ atgard: 'ekonomi', plan: 'nej' }), 'plank');
  assert.equal(fran.get('plan'), 'nej');
  assert.equal(fran.get('atgard'), 'plank');
  /* De gemensamma värdena följer med, och den nya åtgärden får sina standardmått. */
  const tb = bytAtgardQuery(gm({ gransM: 3.5, jarnvag: true }), 'tillbyggnad');
  assert.equal(tb.get('grans'), '3,5');
  assert.equal(tb.get('jarnvag'), '1');
  assert.ok(!tb.has('area'));
  assert.equal(tolkaQuery(tb).indata.areaKvm, STANDARD.areaKvm);
});

test('blankettFakta', () => {
  const f1 = blankettFakta(STANDARD, 'grannar');
  assert.equal(f1.gransM, 2);
  assert.equal(f1.atgard, 'komplement');
  assert.equal(f1.plan, 'ja');
  assert.ok(f1.lagrum.includes('9 kap. 34 § 1 och 35 § första stycket 3'), f1.lagrum);
  assert.ok(f1.matt.length > 0);
  const j1 = blankettFakta(gm({ gransM: 10, jarnvag: true }), 'jarnvag');
  assert.equal(j1.gransM, null);
  assert.ok(j1.lagrum.includes('35 § andra stycket'), j1.lagrum);
  const f5 = blankettFakta(gm({ atgard: 'plank', plankHojdM: 1.6, plankAvstandM: 2.0, gransM: 1.0 }), 'grannar');
  assert.ok(f5.lagrum.includes('34 § 3'), f5.lagrum);
});

test('altanraknarQuery', () => {
  const q = altanraknarQuery(gm({ atgard: 'altan', golvM: 0.6, altanAvstandM: 0, gransM: 1.0 }));
  assert.equal(decodeURIComponent(q.toString()), 'plan=ja&hojd=0,6&avstand=0&grans=1&tak=nej');
  assert.equal(altanraknarQuery(STANDARD), null);
});

test('ATGARDSTABELL ger utfallen i specen 2.9', () => {
  const vantat = {
    komplement: 'kravs', tillbyggnad: 'kravs', 'plank-hog': 'kravs', 'plank-lag': 'kravs-inte', altan: 'kravs-inte',
    staket: 'kravs-inte', ekonomi: 'kravs-inte', 'pa-gransen-45': 'kravs-inte', 'for-stor': 'bygglov',
    gata: 'kravs', vag: 'bygglov', jarnvag: 'kravs',
  };
  assert.deepEqual(ATGARDSTABELL.map((r) => r.nyckel), Object.keys(vantat));
  for (const rad of ATGARDSTABELL) {
    const r = ok(raknaGrannemedgivande(rad.indata));
    assert.equal(r.utfall, vantat[rad.nyckel], rad.nyckel);
    assert.ok(avgorandeRegel(r).lagrum.startsWith('Plan- och bygglagen'), rad.nyckel);
  }
  const gata = ok(raknaGrannemedgivande(ATGARDSTABELL.find((r) => r.nyckel === 'gata').indata));
  assert.deepEqual(gata.mottagare, ['huvudman']);
  const jv = ok(raknaGrannemedgivande(ATGARDSTABELL.find((r) => r.nyckel === 'jarnvag').indata));
  assert.deepEqual(jv.mottagare, ['jarnvag']);
});

/* ------------------------------------------------------------------ *
 * TEXT: nycklarna finns, och beslut 3
 * ------------------------------------------------------------------ */

/** Alla strängar i ett värde; funktioner anropas med indata, tal eller KOMPLEMENT efter namnet. */
function strangar(v, indata) {
  if (typeof v === 'string') return [v];
  if (typeof v === 'function') {
    const prova = (...arg) => {
      try {
        return v(...arg);
      } catch {
        return undefined;
      }
    };
    const dalig = (x) => typeof x !== 'string' || x.includes('NaN') || x.includes('undefined');
    /* Indata först, sedan KOMPLEMENT och tal, och sist en mottagarlista. */
    let ut = prova(indata, indata, indata);
    if (dalig(ut)) ut = prova(KOMPLEMENT, 1, 2);
    if (dalig(ut)) ut = prova(1, 2, 3);
    if (dalig(ut)) ut = prova(['grannar']);
    return [ut];
  }
  if (Array.isArray(v)) return v.flatMap((x) => strangar(x, indata));
  if (v && typeof v === 'object') return Object.values(v).flatMap((x) => strangar(x, indata));
  return [String(v)];
}

const ICKE_TOM = (s) => typeof s === 'string' && s.trim().length > 0;

test('TEXT har ett icke-tomt värde för varje nyckel', () => {
  for (const a of ['komplement', 'tillbyggnad', 'altan', 'plank', 'staket', 'ekonomi']) {
    assert.ok(ICKE_TOM(TEXT.atgard[a].namn) && ICKE_TOM(TEXT.atgard[a].hint), a);
    assert.ok(ICKE_TOM(TEXT.meta[a](STANDARD)), `meta ${a}`);
    assert.ok(ICKE_TOM(TEXT.blankett.matt[a](STANDARD)), `matt ${a}`);
  }
  for (const u of ['kravs', 'kravs-inte', 'bygglov']) {
    for (const k of ['ord', 'rest', 'besked']) assert.ok(ICKE_TOM(TEXT.utfall[u][k]), `${u}.${k}`);
    assert.ok(ICKE_TOM(TEXT.tabell.utfall[u]));
  }
  for (const m of ['grannar', 'huvudman', 'jarnvag']) {
    assert.ok(ICKE_TOM(TEXT.mottagare[m]), m);
    assert.ok(ICKE_TOM(TEXT.blankett['del-granne'][m]), m);
    assert.equal(TEXT.blankett['falt-granne'][m].length, 2);
  }
  for (const s of ['bygglov', 'inom', 'kravs', 'kravs-inte', 'villkor']) assert.ok(ICKE_TOM(TEXT.slag[s]), s);
  const regelnycklar = [
    'varde', 'bya', 'nock', 'summa', 'area', 'hojd-19', 'utanfor-plan-19', 'ekonomi', 'altan-inte-34',
    'staket-inte-34', 'plank-lagt', 'langt-fran-grans', 'grans-tomt', 'grans-gata', 'grans-vag', 'jarnvag',
    'skriftligt', 'villkor-huvudbyggnad', 'villkor-tomten', 'villkor-taknock', 'villkor-flera-granser',
    'villkor-planstrid', 'villkor-tatt-plank',
  ];
  assert.deepEqual(Object.keys(TEXT.regel).sort(), [...regelnycklar].sort());
  for (const n of regelnycklar) assert.ok(ICKE_TOM(TEXT.regel[n](STANDARD)), n);
  for (const g of ['muntligt', 'tystnad', 'bygga-annat', 'lita-pa-pappret', 'mata-fran-vaggen', 'medgivande-mot-lov']) {
    assert.ok(ICKE_TOM(TEXT.gorInte[g]), g);
  }
  for (const a of ANTAGANDEN) {
    assert.ok(ICKE_TOM(TEXT.antagande[a.nyckel]), a.nyckel);
    assert.ok(ICKE_TOM(a.varde), a.nyckel);
  }
  const blankettnycklar = [
    'rubrik', 'del-byggherre', 'del-atgard', 'falt-fastighetsbeteckning', 'falt-adress', 'falt-namn',
    'falt-beskrivning', 'falt-ritningar', 'ritning-situationsplan', 'ritning-fasad', 'ritning-plan', 'falt-daterade',
    'falt-avstand-spar', 'falt-ort-datum', 'falt-namnteckning', 'falt-namnfortydligande', 'medgivandemening',
    'omfattning', 'alla-agare', 'exemplar',
  ];
  for (const b of blankettnycklar) assert.ok(ICKE_TOM(TEXT.blankett[b]), b);
  assert.ok(ICKE_TOM(TEXT.blankett['del-underskrift'](1)));
  assert.ok(ICKE_TOM(TEXT.blankett.kalla('https://www.hantverkstips.se/rakna/grannemedgivande/')));
  for (const s of strangar(TEXT, STANDARD)) assert.ok(ICKE_TOM(s), 'varje sträng i TEXT');
});

test('beslut 3: inget i TEXT säger att medgivandet inte kan återkallas', () => {
  const forbjudet = /bindande|oåterkallel|kan inte (ångra|återkalla|dra tillbaka)/i;
  const fall4 = gm({ atgard: 'tillbyggnad', areaKvm: 20, gransM: 3.0 });
  for (const indata of [STANDARD, fall4]) {
    for (const s of strangar(TEXT, indata)) assert.ok(!forbjudet.test(s), s);
  }
});

test('ANTAGANDEN har raderna i specen 4.7, och varje källa har en https-adress', () => {
  assert.deepEqual(ANTAGANDEN.map((a) => a.nyckel), [
    'grans', 'jarnvag', 'plank', 'hojd-19', 'komplement', 'tillbyggnad', 'skriftligt', 'huvudman',
    'vag-utanfor-plan', 'altan', 'ekonomi', 'vardefullt', 'frivilligt-lov', 'aterkallelse',
    'G1', 'G2', 'G3', 'G4', 'G5',
  ]);
  for (const a of ANTAGANDEN) {
    if (a.typ === 'Källa') assert.ok(a.kalla?.url.startsWith('https://'), a.nyckel);
    else assert.equal(a.typ, 'Antagande');
  }
  assert.ok(ANTAGANDEN.find((a) => a.nyckel === 'grans').varde.startsWith(`${talText(GRANS_M)}`));
});

test('talText', () => {
  assert.equal(talText(2), '2');
  assert.equal(talText(2.5), '2,5');
  assert.equal(talText(0.6), '0,6');
});
