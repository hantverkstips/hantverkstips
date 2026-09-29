/**
 * Kör takbytet mot specens facit (docs/briefer/spec-kalkyl-tak-2026-09-29.md
 * avsnitt 7.2), som bygger på takbytesunderlaget
 * (docs/briefer/faktablad/rakna-takbyte.md avsnitt 4 och 7), kontrollräknat
 * med node 2026-09-29. Areor jämförs med toleransen 0,01 och kronor exakt.
 *
 * SEO-beslutet 2026-09-29 (docs/briefer/seo-checklista-2026-09-29/raknare.md,
 * "Beslut efter bygget" för takbytet) ändrade två saker, och facit är räknat om:
 * - Betong, tegel och papp har bara P1 som källa, och P1:s tillägg på 30 000 kr
 *   läggs på före rotavdraget, utan avdrag. Arbetet och rotavdraget är
 *   oförändrade, så beloppet att betala växer med exakt 30 000 kr:
 *   betong 134 578 + 30 000 = 164 578, tegel 183 422 + 30 000 = 213 422,
 *   papp 93 684 + 30 000 = 123 684.
 * - Bandplåt är 1 500 till 2 500 kr/m² (P5 lågt, P4 och P5 högt), utan P1:s
 *   uträknade 1 080. Låga änden vid standard: 143,658 m² × 1 500 = 215 487 kr,
 *   arbete × 0,41875 = 90 235 kr, material 125 252 kr, rot 30 % = 27 071 kr,
 *   att betala 188 416 kr. Den höga änden är oförändrad.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-takbyte.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  andelArbete,
  andelKallor,
  kallradRegel,
  ANTAGANDEN,
  antagandenFor,
  avvattningQuery,
  CC_VAL,
  delbarQuery,
  inomIntervall,
  KALLOR,
  kortsvarVarden,
  MATERIAL,
  MATERIAL_VAL,
  raknaTakbyte,
  regelKallor,
  rotavdragQuery,
  spann,
  STANDARD,
  TEXT,
  TILLAGG_ANDEL_ARBETE,
  TILLAGG_KR,
  beskedVarden,
  tillaggInraknat,
  tolkaQuery,
  YTA_INTERVALL,
} from '../src/lib/kalkyl/takbyte.ts';

const ROT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Mellanslagen i kronor och ytor kan vara hårda; testet jämför dem som vanliga. */
const plan = (s) => s.replace(/[\s  ]/g, ' ');
const nara = (faktiskt, vantat, tol = 0.01) =>
  assert.ok(Math.abs(faktiskt - vantat) <= tol, `${faktiskt} är inte ${vantat} ± ${tol}`);

const rakna = (over = {}) => raknaTakbyte({ ...STANDARD, ...over });
const belopp = (over = {}) => {
  const r = rakna(over);
  assert.equal(r.status, 'ok');
  assert.notEqual(r.utfall, 'utanfor');
  return r;
};
const ande = (a) => [a.kostnadKr, a.arbeteKr, a.materialKr, a.rotKr, a.attBetalaKr];

const F6 = { langdM: 14, breddM: 10, material: 'bandplat' };
const F9 = { matt: 'nock', nockM: 2.3 };
const F10 = { takform: 'pulpet', langdM: 10, breddM: 7, utsprangM: 0.4, gavelM: 0.3, vinkelGrader: 18 };

test('F1 standard, betong: 164 578 kr att betala, med tillägget', () => {
  const r = belopp();
  assert.equal(r.utfall, 'belopp');
  assert.equal(r.ettTal, true);
  assert.equal(r.tillaggInraknat, true);
  /* 161 471 lagt + 30 000 tillägg = 191 471 före rot; 191 471 − 26 893 = 164 578. */
  assert.equal(r.lag.lagtKr, 161471);
  assert.equal(r.lag.tillaggKr, 30000);
  assert.deepEqual(ande(r.lag), [191471, 89642, 71829, 26893, 164578]);
  assert.equal(r.lag.arbeteKr + r.lag.materialKr + r.lag.tillaggKr, r.lag.kostnadKr);
  assert.deepEqual(ande(r.hog), ande(r.lag));
  assert.equal(r.takstolar, 11);
  nara(r.geometri.takareaM2, 143.66);
});

test('F2 bandplåt: båda ändarna', () => {
  const r = belopp({ material: 'bandplat' });
  assert.equal(r.utfall, 'belopp');
  assert.equal(r.ettTal, false);
  assert.equal(r.tillaggInraknat, false);
  assert.equal(r.lag.tillaggKr, 0);
  assert.equal(r.hog.tillaggKr, 0);
  assert.deepEqual(ande(r.lag), [215487, 90235, 125252, 27071, 188416]);
  assert.deepEqual(ande(r.hog), [359144, 150392, 208752, 45118, 314026]);
});

test('F3 takpanneplåt', () => {
  const r = belopp({ material: 'takpanneplat' });
  assert.equal(r.tillaggInraknat, false);
  assert.equal(r.lag.kostnadKr, 129292);
  assert.equal(r.lag.attBetalaKr, 120310);
  assert.equal(r.hog.kostnadKr, 215487);
  assert.equal(r.hog.attBetalaKr, 200516);
});

test('F4 tegel', () => {
  const r = belopp({ material: 'tegel' });
  assert.equal(r.lag.lagtKr, 210315);
  assert.equal(r.lag.kostnadKr, 240315);
  assert.equal(r.lag.rotKr, 26893);
  assert.equal(r.lag.attBetalaKr, 213422);
});

test('F5 papp', () => {
  const r = belopp({ material: 'papp' });
  assert.equal(r.lag.lagtKr, 110233);
  assert.equal(r.lag.kostnadKr, 140233);
  assert.equal(r.lag.arbeteKr, 55164);
  assert.equal(r.lag.attBetalaKr, 123684);
});

test('F6 14 × 10 bandplåt: gränsen slår i den höga änden', () => {
  const r = belopp(F6);
  nara(r.geometri.takareaM2, 182.71);
  assert.equal(r.hog.rotKr, 50000);
  assert.equal(r.utfall, 'tak');
  assert.equal(r.hog.kapatKr, 7384);
  assert.equal(r.hog.attBetalaKr, 406787);
});

test('F7 F6 med två ägare', () => {
  const r = belopp({ ...F6, agare: 2 });
  assert.equal(r.hog.rotKr, 57384);
  assert.equal(r.utfall, 'belopp');
});

test('F8 takpanneplåt, 45 000 kr redan använt', () => {
  const r = belopp({ material: 'takpanneplat', rotKr: 45000 });
  assert.equal(r.lag.rotKr, 5000);
  assert.equal(r.hog.rotKr, 5000);
  assert.equal(r.utfall, 'tak');
});

test('F9 nockhöjd 2,3 m', () => {
  const r = belopp(F9);
  nara(r.geometri.vinkelGrader, 27.07, 0.005);
  nara(r.geometri.takareaM2, 143.75);
  assert.equal(r.lag.lagtKr, 161575);
  assert.equal(r.lag.kostnadKr, 191575);
});

test('F10 pulpet 10 × 7: utanför, under, inga belopp', () => {
  const r = rakna(F10);
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'utanfor');
  assert.equal(r.sida, 'under');
  assert.equal(r.takstolar, 10);
  assert.equal('lag' in r, false);
  assert.equal('hog' in r, false);
});

test('F11 16 × 12: 245,12 m², utanför, över', () => {
  const r = rakna({ langdM: 16, breddM: 12, utsprangM: 0.5, gavelM: 0.4 });
  assert.equal(r.utfall, 'utanfor');
  assert.equal(r.sida, 'over');
  nara(r.geometri.takareaM2, 245.12);
});

test('F12 inomIntervall, gränserna inräknade', () => {
  assert.equal(inomIntervall(100), true);
  assert.equal(inomIntervall(200), true);
  assert.equal(inomIntervall(99.99), false);
  assert.equal(inomIntervall(200.01), false);
});

test('konstanterna mot underlaget', () => {
  assert.deepEqual(spann('bandplat'), [1500, 2500]);
  assert.deepEqual(MATERIAL.find((m) => m.nyckel === 'bandplat').priser.map((p) => p.kalla), ['P4', 'P5']);
  assert.deepEqual(spann('takpanneplat'), [900, 1500]);
  assert.deepEqual(spann('betong'), [1124, 1124]);
  assert.deepEqual(spann('tegel'), [1464, 1464]);
  const [pl, ph] = spann('papp');
  nara(pl, 767.3333, 0.0001);
  assert.equal(pl, ph);
  assert.equal(andelArbete('bandplat'), 0.41875);
  assert.equal(andelArbete('takpanneplat'), 220 / 950);
  assert.equal(andelArbete('betong'), 93600 / 168600);
  assert.equal(andelArbete('tegel'), 93600 / 219600);
  assert.equal(andelArbete('papp'), 57600 / 115100);
  assert.equal(TILLAGG_KR, 30000);
  assert.equal(TILLAGG_ANDEL_ARBETE, 0);
  assert.deepEqual(
    MATERIAL_VAL.filter((m) => tillaggInraknat(m)),
    ['betong', 'tegel', 'papp'],
  );
  assert.deepEqual([...YTA_INTERVALL], [100, 200]);
  assert.ok(!MATERIAL.some((m) => m.nyckel === 'shingel'));
  assert.ok(!MATERIAL_VAL.includes('shingel'));
});

test('rotkonstanterna är importerade, inte inskrivna', () => {
  /*
   * 75 000 är också P1:s material för betong, (93600 + 75000) / 150, som specen
   * B3 kräver skrivet som uttryck. Det uttrycket tas bort före kontrollen.
   */
  const kod = readFileSync(join(ROT, 'src/lib/kalkyl/takbyte.ts'), 'utf8').replaceAll('93600 + 75000', '');
  assert.doesNotMatch(kod, /\b50000\b/);
  assert.doesNotMatch(kod, /\b75000\b/);
  assert.doesNotMatch(kod, /\b0\.3\b/);
  assert.match(kod, /raknaRotavdrag[\s\S]*?from '\.\/rotavdrag\.ts'/);
});

test('ogiltigt: ett fel per fält', () => {
  const fel = (over) => {
    const r = rakna(over);
    assert.equal(r.status, 'ogiltig');
    return r.fel;
  };
  assert.ok(fel({ langdM: NaN }).langd);
  assert.ok(fel({ breddM: 21 }).bredd);
  assert.ok(fel({ utsprangM: 1.6 }).utsprang);
  assert.ok(fel({ ccMm: 800 }).cc);
  assert.ok(fel({ agare: 3 }).agare);
  assert.ok(fel({ rotKr: -1 }).rot);
  assert.ok(fel({ rotKr: 50001 }).rot);
  assert.equal(rakna({ rotKr: 100000, agare: 2 }).status, 'ok');
  const tva = fel({ langdM: 2, vinkelGrader: 70 });
  assert.deepEqual(Object.keys(tva).sort(), ['langd', 'vinkel']);
});

test('ogiltigt: rot 50 001 med en ägare får gränsen 50 000 i texten', () => {
  const r = rakna({ rotKr: 50001 });
  assert.match(plan(r.fel.rot), /50 000/);
});

test('tolkaQuery', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(tom.indata, STANDARD);
  assert.equal(tom.harIndata, false);
  assert.equal(tolkaQuery(new URLSearchParams('material=shingel')).indata.material, 'betong');
  assert.equal(tolkaQuery(new URLSearchParams('cc=1 200')).indata.ccMm, 1200);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('cc=800')).indata.ccMm));
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('agare=3')).indata.agare));
  assert.equal(tolkaQuery(new URLSearchParams('rot=')).indata.rotKr, 0);
  assert.equal(tolkaQuery(new URLSearchParams('rot=')).harIndata, true);
  const fel = raknaTakbyte(tolkaQuery(new URLSearchParams('langd=abc&vinkel=70')).indata);
  assert.equal(fel.status, 'ogiltig');
  assert.deepEqual(Object.keys(fel.fel).sort(), ['langd', 'vinkel']);
});

test('rundtur: delbarQuery ger samma svar för F1, F2, F6, F9 och F10', () => {
  for (const over of [{}, { material: 'bandplat' }, F6, F9, F10]) {
    const i = { ...STANDARD, ...over };
    const r = raknaTakbyte(i);
    const q = delbarQuery(i, r.geometri);
    const tillbaka = raknaTakbyte(tolkaQuery(new URLSearchParams(q.toString())).indata);
    assert.deepEqual(tillbaka, r);
  }
});

test('rotavdragQuery(F2) tar den höga änden', () => {
  const i = { ...STANDARD, material: 'bandplat' };
  assert.equal(rotavdragQuery(raknaTakbyte(i), i).toString(), 'arbete=150392&material=208752&agare=1&rot=0');
});

test('rotavdragQuery(F1) lägger tillägget till det som inte är arbete', () => {
  assert.equal(rotavdragQuery(raknaTakbyte(STANDARD), STANDARD).toString(), 'arbete=89642&material=101829&agare=1&rot=0');
});

test('beskedVarden: takformen och tillägget', () => {
  const v = (over) => {
    const i = { ...STANDARD, ...over };
    return beskedVarden(raknaTakbyte(i), i);
  };
  const f1 = v({});
  assert.equal(f1.takform, 'sadel');
  assert.equal(f1.tillaggInraknat, true);
  assert.equal(plan(f1.lagtLag), '161 471');
  assert.equal(plan(f1.kostnadLag), '191 471');
  assert.equal(v({ material: 'bandplat' }).tillaggInraknat, false);
  const f10 = v(F10);
  assert.equal(f10.takform, 'pulpet');
  assert.doesNotMatch(TEXT.spalt['rad-geometri'](f10), /Nockhöjden/);
  assert.match(TEXT.spalt['rad-geometri'](f1), /Nockhöjden/);
});

test('avvattningQuery(STANDARD)', () => {
  const s = avvattningQuery(STANDARD, raknaTakbyte(STANDARD).geometri).toString();
  assert.ok(s.startsWith('satt=hus'));
  assert.ok(s.includes('langd=12'));
});

test('kortsvarVarden byggs av standardhuset', () => {
  const v = kortsvarVarden();
  assert.equal(plan(v.betong.prisKvm), '1 124');
  assert.equal(plan(v.betong.attBetala), '164 578');
  assert.equal(plan(v.tegel.attBetala), '213 422');
  assert.equal(plan(v.bandplat.prisKvm), '1 500 till 2 500');
  assert.equal(plan(v.bandplat.attBetala), '188 416 till 314 026');
  assert.equal(v.takarea, '143,7');
  assert.equal(v.paslag27, '12,2');
  assert.equal(v.bottenyta, '108');
});

test('kortsvarVarden säger vilken vinkel och vilka utsprång takytan gäller för', () => {
  const v = kortsvarVarden();
  // Standardhuset i tak.ts: 27°, 0,5 m vid takfoten, 0,4 m vid gaveln.
  assert.equal(v.vinkel, '27');
  assert.equal(v.utsprangTakfot, '0,50');
  assert.equal(v.utsprangGavel, '0,40');
  // Samma tal som takytan räknas med: 12,8 · 10 / cos 27° = 143,66 → "143,7".
  assert.equal(v.takarea, '143,7');
});

test('antagandenFor', () => {
  const nycklar = (over) => {
    const i = { ...STANDARD, ...over };
    return antagandenFor(raknaTakbyte(i), i).map((a) => a.nyckel);
  };
  const f1 = nycklar({});
  for (const n of ['en-kalla', 'tillagg', 'tillagg-utan-rot', 'intervall', 'pris-betong']) assert.ok(f1.includes(n), n);
  assert.ok(!f1.includes('utsprang-lika'));
  assert.ok(!nycklar({ material: 'bandplat' }).includes('en-kalla'));
  assert.ok(!nycklar({ material: 'bandplat' }).includes('tillagg-utan-rot'));
  const f10 = nycklar(F10);
  assert.ok(f10.includes('utsprang-lika'));
  assert.ok(!f10.some((n) => n.startsWith('pris-')));
});

test('gorInteDetHar och regler', () => {
  for (const over of [{}, { material: 'bandplat' }, F6]) {
    assert.deepEqual(rakna(over).gorInteDetHar, ['bottenyta', 'rot-pa-allt', 'bestall-takstolar']);
  }
  /* Vid utanfor räknas inget belopp, och rot-pa-allt faller bort (specen 3.5 steg 2). */
  assert.deepEqual(rakna(F10).gorInteDetHar, ['bottenyta', 'bestall-takstolar']);
  assert.ok(rakna(F6).regler.includes('rot-slog-i'));
  assert.ok(!rakna().regler.includes('rot-slog-i'));
  assert.ok(rakna().regler.includes('en-kalla'));
  assert.ok(!rakna({ material: 'bandplat' }).regler.includes('en-kalla'));
  assert.deepEqual(rakna().regler, [
    'takarea',
    'vinkel',
    'pris',
    'en-kalla',
    'andel-arbete',
    'tillagg',
    'rot-arbete',
    'rot-grans',
    'intervall',
    'takstolar',
  ]);
});

test('förmedlarna står aldrig under en regel', () => {
  const i = { ...STANDARD, material: 'bandplat' };
  for (const n of Object.keys(TEXT.regel)) {
    for (const k of regelKallor(n, i)) assert.notEqual(k.slag, 'förmedlare', `${n}: ${k.kod}`);
  }
});

/** En icke-tom sträng, eller en funktion som ger en. */
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
  for (const u of ['belopp', 'tak', 'utanfor']) {
    assert.ok(harText(TEXT.besked[u].rubrik), `besked.${u}.rubrik`);
    assert.ok(harText(TEXT.besked[u].rad), `besked.${u}.rad`);
  }
  for (const g of ['bottenyta', 'rot-pa-allt', 'bestall-takstolar']) assert.ok(harText(TEXT.gorInte[g]), g);
  for (const [n, r] of Object.entries(TEXT.regel)) assert.ok(harText(r.text), `regel.${n}`);
  assert.equal(Object.keys(TEXT.regel).length, 11);
  for (const m of MATERIAL_VAL) assert.ok(harText(TEXT.material[m]), m);
  for (const t of ['sadel', 'pulpet']) assert.ok(harText(TEXT.takform[t]), t);
  for (const c of CC_VAL) assert.ok(harText(TEXT.cc[c]), String(c));
  for (const a of ANTAGANDEN) assert.ok(harText(TEXT.antagande[a.nyckel]), `antagande.${a.nyckel}`);
  for (const [n, v] of Object.entries({ ...TEXT.form, ...TEXT.spalt, ...TEXT.darfor, ...TEXT.paslag })) {
    assert.ok(harText(v), n);
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

test('källraden står högst en gång: i stycket ovanför vid intervall, annars under sista förmedlarregeln', async () => {
  const { kallradEfterRegel } = await import('../src/lib/kalkyl/kallrad.ts');
  const kallor = [[{}], [], [{}], [], [{}]];
  assert.equal(kallradEfterRegel(kallor, true), -1);
  assert.equal(kallradEfterRegel(kallor, false), 3);
  assert.equal(kallradEfterRegel([[{}], [{}]], false), -1);
  assert.equal(kallradEfterRegel([], false), -1);
  const sida = readFileSync(join(ROT, 'src', 'pages', 'rakna', 'takbyte.astro'), 'utf8');
  assert.match(sida, /kallradRegel\(visat, visatIndata\)/);
  assert.equal(sida.split('TEXT.darfor.kallrad').length - 1, 2, 'raden finns i stycket ovanför och under reglerna, inget mer');
});

/* Hantverkarens retur 2026-09-29. */

test('retur 1: takpanneplåt under 14 grader ger utfallet lutning, utan belopp', () => {
  const r = rakna({ material: 'takpanneplat', vinkelGrader: 10 });
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'lutning');
  assert.equal('lag' in r, false);
  assert.deepEqual(r.regler, ['takarea', 'vinkel', 'takstolar']);
  assert.deepEqual(r.gorInteDetHar, ['bottenyta', 'bestall-takstolar']);
  assert.equal(r.takstolar, 11);
  /* Precis 14 grader går, och andra material har ingen gräns. */
  assert.equal(rakna({ material: 'takpanneplat', vinkelGrader: 14 }).utfall, 'belopp');
  assert.equal(rakna({ material: 'betong', vinkelGrader: 10 }).utfall, 'belopp');
  /* Vinkeln ur nockhöjden räknas också: 9 m bred, nock 1,1 m ger 13,7 grader. */
  assert.equal(rakna({ material: 'takpanneplat', matt: 'nock', nockM: 1.1 }).utfall, 'lutning');
  /* Utanför intervallet vinner, som förut. */
  assert.equal(rakna({ ...F10, material: 'takpanneplat', vinkelGrader: 10 }).utfall, 'utanfor');
  const i = { ...STANDARD, material: 'takpanneplat', vinkelGrader: 10 };
  const v = beskedVarden(raknaTakbyte(i), i);
  assert.equal(v.attBetalaLag, null);
  assert.equal(v.sida, null);
  assert.equal(v.minLutning, '14');
  assert.doesNotMatch(TEXT.besked.lutning.rubrik(v), /\d{3}/, 'rubriken bär inget belopp');
  assert.ok(!antagandenFor(raknaTakbyte(i), i).some((a) => a.nyckel.startsWith('pris-')));
  /* Beloppets rad bär inte längre varningen. */
  const b = { ...STANDARD, material: 'takpanneplat', vinkelGrader: 14 };
  assert.doesNotMatch(TEXT.besked.belopp.rad(beskedVarden(raknaTakbyte(b), b)), /14 grader/);
});

test('retur 2: källraden står under den sista förmedlarregeln vid utanfor, inte under vinkeln', () => {
  const betong = { ...STANDARD, ...F10 };
  const rb = raknaTakbyte(betong);
  assert.equal(rb.utfall, 'utanfor');
  assert.equal(rb.regler[kallradRegel(rb, betong)], 'intervall');
  /* Plåt: intervallet har en firma vid namn, så ingen regel får raden. */
  const plat = { ...STANDARD, ...F10, material: 'bandplat' };
  assert.equal(kallradRegel(raknaTakbyte(plat), plat), -1);
  /* Lutning: ingen förmedlarregel. Belopp: raden står ovanför. */
  const lut = { ...STANDARD, material: 'takpanneplat', vinkelGrader: 10 };
  assert.equal(kallradRegel(raknaTakbyte(lut), lut), -1);
  assert.equal(kallradRegel(raknaTakbyte(STANDARD), STANDARD), -1);
});

test('retur 3: regeln om intervallet har materialets källor', () => {
  const kallor = (material) => regelKallor('intervall', { ...STANDARD, material }).map((k) => k.kod);
  assert.deepEqual(kallor('betong'), []);
  assert.deepEqual(kallor('tegel'), []);
  assert.deepEqual(kallor('bandplat'), ['P5']);
});

test('retur 4: KALLOR har riktiga datum', () => {
  for (const k of Object.values(KALLOR)) assert.match(k.datum, /\d{4}-\d{2}-\d{2}/, k.kod);
  assert.equal(KALLOR.P1.datum, 'hämtad 2026-09-28');
});

test('retur 5: andelen arbete har materialets källor', () => {
  const rader = (material) => {
    const i = { ...STANDARD, material };
    return antagandenFor(raknaTakbyte(i), i).find((a) => a.nyckel === 'andel').kallor;
  };
  assert.deepEqual(rader('betong'), ['P1']);
  assert.deepEqual(rader('takpanneplat'), ['P4']);
  assert.deepEqual(rader('bandplat'), ['P4', 'P1']);
  assert.deepEqual(andelKallor('papp'), ['P1']);
});

test('retur 7: spalt har ingen rad-tillagg', () => {
  assert.equal('rad-tillagg' in TEXT.spalt, false);
});

/* UX retur 2 på /rakna/takbyte/: de 14 graderna har källa i antagandetabellen. */
test('UX retur 2: minsta-lutning står med Plannja och Lindab vid utfallet lutning, bara där', () => {
  const lut = { ...STANDARD, material: 'takpanneplat', vinkelGrader: 10 };
  const rad = antagandenFor(raknaTakbyte(lut), lut).find((a) => a.nyckel === 'minsta-lutning');
  assert.ok(rad, 'raden finns vid lutning');
  assert.equal(rad.typ, 'Källa');
  assert.deepEqual(rad.kallor, ['PL-ROYAL', 'LB-PANNA']);
  assert.equal(KALLOR['PL-ROYAL'].slag, 'tillverkare');
  assert.equal(KALLOR['LB-PANNA'].slag, 'tillverkare');
  assert.match(KALLOR['PL-ROYAL'].url, /se-plannja-montering-royal-regent-2026-2\.pdf/);
  assert.match(KALLOR['LB-PANNA'].url, /takpanna-torekov-norrviken-montering-se\.pdf/);
  assert.equal(KALLOR['LB-PANNA'].datum, '2024-09-20');
  /* Inte vid belopp eller utanför. */
  for (const i of [STANDARD, { ...STANDARD, material: 'takpanneplat', vinkelGrader: 14 }, { ...STANDARD, ...F10 }]) {
    assert.ok(!antagandenFor(raknaTakbyte(i), i).some((a) => a.nyckel === 'minsta-lutning'), JSON.stringify(i));
  }
});
