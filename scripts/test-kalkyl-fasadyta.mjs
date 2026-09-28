/**
 * Kör fasadräknaren mot underlagets räkneexempel och specens facit
 * (docs/briefer/spec-kalkyl-fasadyta-2026-09-28.md avsnitt 6), och mot guiden
 * /fasad/mala-om-huset/, som läses från disk. Samma tal ska komma ut ur
 * formeln som står i guiden.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-fasadyta.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { performance } from 'node:perf_hooks';

import { bastaBurkar, BURKAR_LITER, OVERSKOTT_GRANS } from '../src/lib/kalkyl/kvadratmeter.ts';
import {
  ANTAGANDEN,
  antagandenFor,
  ATGANG,
  ATGANG_YTA,
  atgangstabell,
  beskedVarden,
  burkText,
  BURKAR_FARG,
  delbarQuery,
  DORR_BREDD_M,
  DORR_HOJD_M,
  FONSTER_BREDD_M,
  FONSTER_HOJD_M,
  gavelyta,
  GRUND_ATGANG,
  literGarAtText,
  literText,
  m2Text,
  vinkelText,
  PROFILFAKTOR,
  raknaFasadyta,
  STANDARD,
  TEXT,
  tolkaQuery,
  VINKELGRANSER,
} from '../src/lib/kalkyl/fasadyta.ts';

const ROT = join(dirname(fileURLToPath(import.meta.url)), '..');
const GUIDE = join(ROT, 'src', 'content', 'guider', 'fasad', 'mala-om-huset.mdx');

const M2 = 0.005;
const GRAD = 0.001;

/** Hus A: 10 × 8 m, höjd 2,5, 10 fönster, 2 dörrar. */
const HUS_A = { ...STANDARD, langdM: 10, breddM: 8, hojdM: 2.5, fonster: 10, dorrar: 2 };
/** Hus G: guidens hus, 10 × 8, höjd 2,8, samma avdrag. */
const HUS_G = { ...STANDARD };

const E1 = { ...HUS_A, takform: 'sadel', matt: 'vinkel', vinkelGrader: 27, fasad: 'lock', farg: 'oljealkyd', skick: 'ommalning' };
const E5 = { ...HUS_A, takform: 'pulpet', matt: 'vinkel', vinkelGrader: 15, fasad: 'slat', farg: 'akrylat', skick: 'ommalning' };
const E6 = { ...HUS_A, takform: 'valmat', fasad: 'lock', farg: 'slamfarg', skick: 'ommalning' };
const E7 = { ...HUS_A, takform: 'sadel', matt: 'vinkel', vinkelGrader: 27, fasad: 'puts' };
const E8 = { ...HUS_A, takform: 'mansard', matt: 'nock', nockM: 3.4641, brytM: 1.7321, indragM: 1.0 };

function ok(indata) {
  const r = raknaFasadyta(indata);
  assert.equal(r.status, 'ok', `väntade ok, fick ${JSON.stringify(r)}`);
  return r;
}
function nara(faktiskt, vantat, tol, namn) {
  assert.ok(Math.abs(faktiskt - vantat) <= tol, `${namn}: ${faktiskt} skulle vara ${vantat} ± ${tol}`);
}
const burkar = (...par) => par.map(([antal, literPerBurk]) => ({ literPerBurk, antal }));

/* ------------------------------------------------------------------ *
 * 6.1 Fallen
 * ------------------------------------------------------------------ */

test('E1: hus A, sadel 27°, lock, oljealkyd, ommålning', () => {
  const r = ok(E1);
  nara(r.tM, 2.0381, 0.00005, 't');
  nara(r.gavelM2, 16.305, M2, 'gavel');
  nara(r.bruttoM2, 106.305, M2, 'brutto');
  nara(r.avdragM2, 18.6, M2, 'avdrag');
  nara(r.fasadytaM2, 87.705, M2, 'fasadyta');
  nara(r.maladYtaM2, 105.246, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 30.07);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
  assert.equal(r.tackfarg.literAttKopa, 36);
  assert.equal(r.utfall, 'farg');
  assert.equal(r.grundfarg, null);
});

test('E1b: E1 med slät panel', () => {
  const r = ok({ ...E1, fasad: 'slat' });
  nara(r.maladYtaM2, 87.705, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 25.06);
  assert.deepEqual(r.tackfarg.burkar, burkar([3, 9]));
});

test('E2: guidens hus, nock 2,0, slät, akrylat', () => {
  const r = ok({ ...HUS_G, fasad: 'slat' });
  nara(r.vaggarBruttoM2, 100.8, M2, 'väggar');
  nara(r.gavelM2, 16, M2, 'gavel');
  nara(r.fasadytaM2, 98.2, M2, 'fasadyta');
  nara(r.vinkelGrader, 26.565, GRAD, 'vinkel');
  assert.equal(r.tackfarg.literRaknat, 28.06);
  assert.deepEqual(r.tackfarg.burkar, burkar([3, 9], [1, 2.7]));
});

test('E2b: STANDARD, tom adress', () => {
  const { indata } = tolkaQuery(new URLSearchParams(''));
  const r = ok(indata);
  nara(r.fasadytaM2, 98.2, M2, 'fasadyta');
  nara(r.maladYtaM2, 117.84, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 33.67);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
  assert.equal(r.utfall, 'farg');
  assert.deepEqual(r.gorInteDetHar, ['blanda-partier']);
});

test('E2c: STANDARD med stryk=3', () => {
  const r = ok(tolkaQuery(new URLSearchParams('stryk=3')).indata);
  assert.equal(r.tackfarg.literRaknat, 50.5);
  assert.deepEqual(r.tackfarg.burkar, burkar([6, 9]));
  assert.equal(r.tackfarg.literAttKopa, 54);
  assert.equal(r.tackfarg.strykningarValda, true);
});

test('E2d: STANDARD med vinkel 27 och matt=vinkel', () => {
  const r = ok({ ...STANDARD, matt: 'vinkel', vinkelGrader: 27 });
  nara(r.gavelM2, 16.305, M2, 'gavel');
  nara(r.fasadytaM2, 98.505, M2, 'fasadyta');
  nara(r.maladYtaM2, 118.21, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 33.77);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
});

test('E3: E1 med skick rent, grundfärg och täckfärg på sågat', () => {
  const r = ok({ ...E1, skick: 'rent' });
  assert.equal(r.grundfarg.m2PerLiter, 6);
  assert.equal(r.grundfarg.literRaknat, 17.54);
  assert.deepEqual(r.grundfarg.burkar, burkar([2, 9]));
  assert.equal(r.tackfarg.m2PerLiter, 6);
  assert.equal(r.tackfarg.literRaknat, 35.08);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
});

test('E3b: E1 med skick skrapat', () => {
  const r = ok({ ...E1, skick: 'skrapat' });
  /* Grundfärgen per 10 m² bart trä, inte på hela fasaden (specen 14.3 B2). */
  assert.equal(r.grundfarg, null);
  assert.equal(r.grundPer10M2, 1.67);
  assert.ok(r.regler.includes('grundfarg'));
  assert.ok(antagandenFor(r, { ...E1, skick: 'skrapat' }).some((a) => a.nyckel === 'grund-sagat'));
  assert.equal(r.tackfarg.m2PerLiter, 7);
  assert.equal(r.tackfarg.literRaknat, 30.07);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
});

test('E4: E1 med kulörbyte', () => {
  const r = ok({ ...E1, skick: 'kulor' });
  assert.equal(r.grundfarg.m2PerLiter, 7);
  assert.equal(r.grundfarg.literRaknat, 15.04);
  assert.deepEqual(r.grundfarg.burkar, burkar([2, 9]));
  assert.equal(r.grundfarg.literAttKopa, 18);
  assert.equal(r.tackfarg.literRaknat, 30.07);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
});

test('E5: hus A, pulpet 15°, slät, akrylat', () => {
  const r = ok(E5);
  nara(r.tM, 2.1436, 0.00005, 't');
  nara(r.gavelM2, 38.585, M2, 'gavel');
  nara(r.fasadytaM2, 109.985, M2, 'fasadyta');
  assert.equal(r.tackfarg.literRaknat, 31.42);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9]));
  assert.equal(r.tackfarg.literAttKopa, 36);
});

test('E5b: E5 med längd 8 och bredd 10, taket lutar över B', () => {
  const r = ok({ ...E5, langdM: 8, breddM: 10 });
  nara(r.tM, 2.6795, 0.00005, 't');
  nara(r.gavelM2, 48.231, M2, 'gavel');
  nara(r.fasadytaM2, 119.631, M2, 'fasadyta');
});

test('E6: hus A, valmat, lock, slamfärg, ommålning', () => {
  const r = ok(E6);
  assert.equal(r.gavelM2, 0);
  nara(r.fasadytaM2, 71.4, M2, 'fasadyta');
  nara(r.maladYtaM2, 85.68, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 28.56);
  assert.deepEqual(r.tackfarg.burkar, burkar([3, 10]));
  assert.equal(r.tackfarg.strykningar, 1);
});

test('E6b: E6 med skick rent', () => {
  const r = ok({ ...E6, skick: 'rent' });
  assert.equal(r.tackfarg.strykningar, 2);
  assert.equal(r.tackfarg.literRaknat, 57.12);
  assert.deepEqual(r.tackfarg.burkar, burkar([6, 10]));
});

test('E6c: valmat läser inte taket', () => {
  const a = ok(E6);
  const b = ok({ ...E6, matt: 'vinkel', vinkelGrader: 45 });
  assert.equal(b.gavelM2, 0);
  assert.deepEqual(b, a);
});

test('E7: puts med silikatfärg', () => {
  const r = ok(E7);
  assert.equal(r.utfall, 'puts');
  nara(r.maladYtaM2, 87.705, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 58.47);
  assert.equal(r.tackfarg.burkar, null);
  /* Puts: heltal uppåt, inga burkar (specen 14.3 B3). */
  assert.equal(r.tackfarg.literAttKopa, 59);
  assert.equal(ok({ ...STANDARD, fasad: 'puts' }).tackfarg.literAttKopa, 66);
});

test('E8: mansard med höjder', () => {
  const r = ok(E8);
  nara(r.gavelM2, 34.641, M2, 'gavel');
  nara(r.fasadytaM2, 106.041, M2, 'fasadyta');
  assert.equal(r.tM, null);
  assert.equal(r.vinkelGrader, null);
});

test('E9: E1 utan fönster och dörrar', () => {
  const r = ok({ ...E1, fonster: 0, dorrar: 0 });
  nara(r.fasadytaM2, 106.305, M2, 'fasadyta');
  nara(r.maladYtaM2, 127.566, M2, 'målad');
  assert.equal(r.tackfarg.literRaknat, 36.45);
  assert.deepEqual(r.tackfarg.burkar, burkar([4, 9], [1, 0.9]));
  assert.ok(r.gorInteDetHar.includes('utan-avdrag'));
});

test('E10: hus A, sadel 45°', () => {
  const r = ok({ ...HUS_A, matt: 'vinkel', vinkelGrader: 45 });
  nara(r.tM, 4.0, 0.00005, 't');
  nara(r.gavelM2, 32, M2, 'gavel');
  nara(r.fasadytaM2, 103.4, M2, 'fasadyta');
});

test('E11: tegel', () => {
  const r = ok({ ...E1, fasad: 'tegel' });
  assert.equal(r.utfall, 'tegel');
  nara(r.fasadytaM2, 87.705, M2, 'fasadyta');
  assert.equal(r.tackfarg, null);
  assert.equal(r.maladYtaM2, null);
  assert.ok(r.regler.includes('tegel'));
});

test('E12: byte av färgtyp', () => {
  const r = ok({ ...E1, skick: 'byte' });
  assert.equal(r.utfall, 'byte');
  assert.equal(r.tackfarg, null);
  assert.ok(r.regler.includes('byte'));
});

test('E13: slamfärg på täckfärg ger besked, inte liter', () => {
  const r = ok({ ...E1, farg: 'slamfarg', skick: 'byte' });
  assert.equal(r.utfall, 'byte');
  assert.equal(r.tackfarg, null);
});

test('E14: ny puts ska härda', () => {
  const r = ok({ ...E7, skick: 'rent' });
  assert.ok(r.gorInteDetHar.includes('ny-puts'));
});

test('E15: en strykning täckfärg, men inte slamfärg och inte puts', () => {
  assert.ok(ok({ ...E1, stryk: 1 }).gorInteDetHar.includes('en-strykning'));
  assert.ok(!ok({ ...E6, stryk: 1 }).gorInteDetHar.includes('en-strykning'));
  assert.ok(!ok({ ...E7, stryk: 1 }).gorInteDetHar.includes('en-strykning'));
});

test('E7: silikatfärgens strykningar står i regeln silikat, inte i strykningar', () => {
  const r = ok(E7);
  assert.ok(r.regler.includes('silikat'));
  assert.ok(!r.regler.includes('strykningar'));
});

test('nock och vinkel ger samma svar', () => {
  const nock = ok({ ...HUS_G, matt: 'nock', nockM: 2.0 });
  const vinkel = ok({ ...HUS_G, matt: 'vinkel', vinkelGrader: 26.56505 });
  nara(nock.gavelM2, 16, M2, 'gavel ur nock');
  nara(vinkel.gavelM2, 16, M2, 'gavel ur vinkel');
});

test('valmat ger gavelyta 0 för varje vinkel', () => {
  for (const v of [5, 20, 27, 45, 60, 89]) {
    const t = 4 * Math.tan((v * Math.PI) / 180);
    assert.equal(gavelyta('valmat', 10, 8, t), 0);
  }
});

/* ------------------------------------------------------------------ *
 * 6.2 Ogiltigt
 * ------------------------------------------------------------------ */

function fel(indata) {
  const r = raknaFasadyta(indata);
  assert.equal(r.status, 'ogiltig', `väntade ogiltig, fick ${r.status}`);
  return r.fel;
}

test('längd 1, 51 och "abc" ger fel på längden', () => {
  assert.ok(fel({ ...HUS_A, langdM: 1 }).langd);
  assert.ok(fel({ ...HUS_A, langdM: 51 }).langd);
  assert.ok(fel(tolkaQuery(new URLSearchParams('langd=abc')).indata).langd);
});

test('höjd 13 ger fel på höjden', () => {
  assert.ok(fel({ ...HUS_A, hojdM: 13 }).hojd);
});

test('vinkeln utanför gränsen per takform', () => {
  assert.ok(fel({ ...HUS_A, takform: 'sadel', matt: 'vinkel', vinkelGrader: 61 }).vinkel);
  assert.ok(fel({ ...HUS_A, takform: 'pulpet', matt: 'vinkel', vinkelGrader: 31 }).vinkel);
  assert.ok(fel({ ...HUS_A, takform: 'pulpet', matt: 'vinkel', vinkelGrader: 2 }).vinkel);
});

test('nock 7,0 på sadel med B 8 ger fel med de tillåtna höjderna', () => {
  const f = fel({ ...HUS_A, takform: 'sadel', matt: 'nock', nockM: 7.0 });
  assert.ok(f.nock);
  /* En decimal, avrundade inåt (specen 14.3 B3). */
  assert.ok(f.nock.includes('6,9'), f.nock);
  assert.ok(!f.nock.includes('6,93'), f.nock);
  assert.ok(f.nock.includes('0,4'), f.nock);
});

test('nock med bokstäver ger nock-tal, inte intervallet', () => {
  const f = fel(tolkaQuery(new URLSearchParams('nock=abc')).indata);
  assert.equal(f.nock, TEXT.fel['nock-tal']);
});

test('nock 0 ger fel', () => {
  assert.ok(fel({ ...HUS_A, matt: 'nock', nockM: 0 }).nock);
});

test('valmat med vinkel 90 valideras inte', () => {
  ok({ ...HUS_A, takform: 'valmat', matt: 'vinkel', vinkelGrader: 90 });
});

test('mansard med vinkel ger fel på måttet', () => {
  assert.ok(fel({ ...E8, matt: 'vinkel' }).matt);
});

test('mansard utan brytpunkt', () => {
  assert.ok(fel({ ...E8, brytM: NaN }).bryt);
});

test('mansard med brytpunkten över nocken', () => {
  assert.ok(fel({ ...E8, brytM: 3.5, nockM: 3.4641 }).bryt);
});

test('mansard med indrag 4 på B 8', () => {
  assert.ok(fel({ ...E8, indragM: 4 }).indrag);
});

test('fönster 2,5 och 61 ger fel', () => {
  assert.ok(fel({ ...HUS_A, fonster: 2.5 }).fonster);
  assert.ok(fel({ ...HUS_A, fonster: 61 }).fonster);
});

test('60 fönster 3 × 3 m ger fel på fönster och dörrar', () => {
  const f = fel({ ...HUS_A, fonster: 60, fonsterBreddM: 3, fonsterHojdM: 3 });
  assert.ok(f.fonster);
  assert.ok(f.dorrar);
  assert.equal(f.fonster, f.dorrar);
});

test('fönsterbredd 0,1 ger fel', () => {
  assert.ok(fel({ ...HUS_A, fonsterBreddM: 0.1 }).fonsterbredd);
});

test('längd 1 och vinkel 61 samtidigt ger båda felen', () => {
  const f = fel({ ...HUS_A, langdM: 1, matt: 'vinkel', vinkelGrader: 61 });
  assert.ok(f.langd);
  assert.ok(f.vinkel);
});

/* ------------------------------------------------------------------ *
 * 6.3 Guiden som facit
 * ------------------------------------------------------------------ */

const guide = readFileSync(GUIDE, 'utf8');

test('guiden: väggarna, gavelspetsarna och summan är E2:s tal', () => {
  const r = ok({ ...HUS_G, fasad: 'slat' });
  assert.ok(guide.includes(`är ${m2Text(r.vaggarBruttoM2)} kvadratmeter`), 'steg 2: 100,8');
  assert.equal(m2Text(r.vaggarBruttoM2), '100,8');
  assert.ok(
    guide.includes(`varje gavelspets ${Math.round(r.gavelM2 / 2)} kvadratmeter, ${Math.round(r.gavelM2)} för båda`),
    'steg 3: 8 och 16',
  );
  assert.ok(guide.includes(`Det är ${Math.round(r.fasadytaM2)} kvadratmeter`), 'summan: 98');
});

test('guiden: Faq om färgen ger 28 liter på husets 98 kvadratmeter', () => {
  const faq = guide.split('\n').find((rad) => rad.includes('Hur mycket färg går det åt till en fasad?'));
  assert.ok(faq, 'Faq-frågan finns');
  assert.ok(faq.includes(`${Math.round((98.2 * 2) / ATGANG.akrylat.malat)} liter`));
});

test('guiden efter K1: 34 liter och fyra burkar med lockpanel, 2,7 liter på slät panel', () => {
  assert.ok(guide.includes(`${Math.round((100 * PROFILFAKTOR.lock * 2) / 7)} liter`));
  assert.ok(guide.includes('fyra burkar'));
  /* Specen 13.2: slät panel blir tre burkar om 9 liter och en om 2,7. */
  assert.ok(guide.includes('en om 2,7'));
});

test('guiden efter K3: slamfärgen blir tre om 10 och en om 5', () => {
  assert.ok(guide.includes('en om 5'));
});

test('guiden bäddar in räknaren i stället för kvadratmeterkortet', () => {
  assert.ok(guide.includes('<Kalkylator namn="fasadyta" />'));
  assert.ok(!guide.includes('<Verktygskort kalkylator="kvadratmeter" />'));
});

/* ------------------------------------------------------------------ *
 * 6.4 Övrigt
 * ------------------------------------------------------------------ */

test('konstanterna stämmer med underlaget', () => {
  assert.deepEqual(PROFILFAKTOR, { lock: 1.2, slat: 1.0, puts: 1.0 });
  assert.deepEqual(ATGANG, { akrylat: { malat: 7, sagat: 6 }, oljealkyd: { malat: 7, sagat: 6 }, slamfarg: 3, silikat: 3 });
  assert.deepEqual(GRUND_ATGANG, { sagat: 6, malat: 7 });
  assert.deepEqual(BURKAR_FARG, { akrylat: [0.9, 2.7, 9], oljealkyd: [0.9, 2.7, 9], grund: [0.9, 2.7, 9], slamfarg: [5, 10] });
  assert.equal(FONSTER_BREDD_M, 1.2);
  assert.equal(FONSTER_HOJD_M, 1.2);
  assert.equal(DORR_BREDD_M, 1.0);
  assert.equal(DORR_HOJD_M, 2.1);
  assert.deepEqual(VINKELGRANSER, { sadel: [5, 60], pulpet: [3, 30] });
});

/**
 * KOPIA av bastaBurkar i src/lib/kalkyl/kvadratmeter.ts som den såg ut före
 * 2026-09-28, med BURKAR_LITER och OVERSKOTT_GRANS importerade. Referens för
 * regressionstestet; ändras inte.
 */
function gamlaBastaBurkar(liter) {
  if (!(liter > 0)) return { burkar: [], totalt: 0 };
  const [sma, mellan, stora] = BURKAR_LITER;
  const maxStora = Math.ceil(liter / stora);
  const maxMellan = Math.ceil(liter / mellan);
  const maxSma = Math.min(Math.ceil(liter / sma), 20);
  const tak = liter * (1 + OVERSKOTT_GRANS);
  let inomGransen = null;
  let minstTotalt = null;
  for (let antalStora = 0; antalStora <= maxStora; antalStora++) {
    for (let antalMellan = 0; antalMellan <= maxMellan; antalMellan++) {
      for (let antalSma = 0; antalSma <= maxSma; antalSma++) {
        const totalt = antalStora * stora + antalMellan * mellan + antalSma * sma;
        if (totalt + 1e-9 < liter) continue;
        const antal = antalStora + antalMellan + antalSma;
        if (antal === 0) continue;
        const kandidat = () => {
          const burkar = [];
          if (antalStora > 0) burkar.push({ literPerBurk: stora, antal: antalStora });
          if (antalMellan > 0) burkar.push({ literPerBurk: mellan, antal: antalMellan });
          if (antalSma > 0) burkar.push({ literPerBurk: sma, antal: antalSma });
          return { burkar, totalt, antal };
        };
        if (totalt <= tak + 1e-9) {
          const battre =
            inomGransen === null ||
            antal < inomGransen.antal ||
            (antal === inomGransen.antal && totalt < inomGransen.totalt - 1e-9);
          if (battre) inomGransen = kandidat();
        }
        const billigare =
          minstTotalt === null ||
          totalt < minstTotalt.totalt - 1e-9 ||
          (Math.abs(totalt - minstTotalt.totalt) < 1e-9 && antal < minstTotalt.antal);
        if (billigare) minstTotalt = kandidat();
      }
    }
  }
  const bast = inomGransen ?? minstTotalt;
  if (bast === null) return { burkar: [{ literPerBurk: sma, antal: 1 }], totalt: sma };
  return { burkar: bast.burkar, totalt: Math.round(bast.totalt * 100) / 100 };
}

/**
 * Råsökning utan tak på antalet av någon storlek: alla kombinationer upp till
 * behovet, samma regel. Storlekarna största först, som i utdata.
 */
function rasok(liter, storlekar) {
  const stor = [...storlekar].sort((a, b) => b - a);
  const max = stor.map((s) => Math.ceil(liter / s));
  const tak = liter * (1 + OVERSKOTT_GRANS);
  let inom = null;
  let minst = null;
  const antal = new Array(stor.length).fill(0);
  const steg = (k) => {
    if (k === stor.length) {
      let totalt = 0;
      let n = 0;
      for (let j = 0; j < stor.length; j++) {
        totalt = totalt + antal[j] * stor[j];
        n += antal[j];
      }
      if (totalt + 1e-9 < liter || n === 0) return;
      if (totalt <= tak + 1e-9 && (inom === null || n < inom.n || (n === inom.n && totalt < inom.totalt - 1e-9))) {
        inom = { antal: [...antal], totalt, n };
      }
      if (minst === null || totalt < minst.totalt - 1e-9 || (Math.abs(totalt - minst.totalt) < 1e-9 && n < minst.n)) {
        minst = { antal: [...antal], totalt, n };
      }
      return;
    }
    for (let a = 0; a <= max[k]; a++) {
      antal[k] = a;
      steg(k + 1);
    }
    antal[k] = 0;
  };
  steg(0);
  const bast = inom ?? minst;
  const burkar = [];
  stor.forEach((s, j) => {
    if (bast.antal[j] > 0) burkar.push({ literPerBurk: s, antal: bast.antal[j] });
  });
  return { burkar, totalt: Math.round(bast.totalt * 100) / 100 };
}

test('bastaBurkar: samma svar som den gamla funktionen, 0,01 till 120 liter', () => {
  for (let c = 1; c <= 12000; c++) {
    const liter = c / 100;
    assert.deepEqual(bastaBurkar(liter), gamlaBastaBurkar(liter), `${liter} liter`);
  }
});

test('bastaBurkar: samma svar som råsökningen med [1, 3, 10], [5, 10] och [0,9, 2,7, 9]', () => {
  for (const [storlekar, maxLiter] of [[[1, 3, 10], 100], [[5, 10], 100], [[0.9, 2.7, 9], 60]]) {
    for (let c = 1; c <= maxLiter * 100; c++) {
      const liter = c / 100;
      assert.deepEqual(bastaBurkar(liter, storlekar), rasok(liter, storlekar), `${liter} liter, ${storlekar}`);
    }
  }
});

test('bastaBurkar: fasadens största behov under 50 ms', () => {
  const storst = {
    ...STANDARD,
    langdM: 50,
    breddM: 50,
    hojdM: 12,
    takform: 'pulpet',
    matt: 'vinkel',
    vinkelGrader: 30,
    fonster: 0,
    dorrar: 0,
    fasad: 'lock',
  };
  for (const [farg, storlekar] of [
    ['slamfarg', BURKAR_FARG.slamfarg],
    ['akrylat', BURKAR_FARG.akrylat],
  ]) {
    const r = ok({ ...storst, farg, skick: 'rent', stryk: 3 });
    const liter = r.tackfarg.literRaknat;
    bastaBurkar(liter, storlekar);
    const start = performance.now();
    bastaBurkar(liter, storlekar);
    const tid = performance.now() - start;
    assert.ok(tid < 50, `${farg}: ${liter} liter tog ${tid.toFixed(1)} ms`);
  }
});

test('tolkaQuery läser adressen och faller tillbaka på standard', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(tom.indata, STANDARD);
  assert.equal(tom.harIndata, false);
  assert.equal(tolkaQuery(new URLSearchParams('hojd=2,8 m')).indata.hojdM, 2.8);
  assert.equal(tolkaQuery(new URLSearchParams('hojd=2,8 m')).harIndata, true);
  assert.equal(tolkaQuery(new URLSearchParams('takform=kupol')).indata.takform, 'sadel');
  assert.equal(tolkaQuery(new URLSearchParams('farg=traolja')).indata.farg, 'akrylat');
  assert.equal(tolkaQuery(new URLSearchParams('stryk=4')).indata.stryk, 'auto');
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('takform=mansard')).indata.brytM));
});

test('rundtur: delbarQuery och tolkaQuery ger samma indata', () => {
  const E2c = tolkaQuery(new URLSearchParams('stryk=3')).indata;
  for (const x of [STANDARD, E5, { ...E6, skick: 'rent' }, E8, E2c]) {
    assert.deepEqual(tolkaQuery(delbarQuery(x)).indata, x);
  }
  assert.ok(!delbarQuery(STANDARD).has('bryt'));
  assert.equal(delbarQuery(STANDARD).get('stryk'), 'auto');
});

test('formateringen', () => {
  assert.equal(m2Text(98.2), '98,2');
  assert.equal(m2Text(1234.56), '1 234,6');
  assert.equal(m2Text(36), '36');
  assert.equal(m2Text(16), '16');
  assert.equal(vinkelText(15), '15');
  assert.equal(vinkelText(26.565), '26,6');
  assert.equal(literGarAtText(33.67), '33,7');
  assert.equal(literText(33.67), '33,67');
  assert.equal(literText(40), '40');
  /* Samma sträng som burkRad i kvadratmeter.astro ger för samma burkar. */
  assert.equal(burkText(burkar([3, 10], [1, 1])), 'tre burkar om 10 liter och en om 1 liter');
});

const icketom = (v) => (typeof v === 'function' ? v : () => v);
function textFinns(varde, namn, ...arg) {
  assert.ok(varde !== undefined, `${namn} saknas i TEXT`);
  const s = icketom(varde)(...arg);
  assert.equal(typeof s, 'string', namn);
  assert.ok(s.trim().length > 0, `${namn} är tom`);
}

test('TEXT har en icke-tom sträng för varje nyckel', () => {
  const v = beskedVarden(ok(STANDARD), STANDARD);
  for (const u of ['farg', 'puts', 'tegel', 'byte']) {
    textFinns(TEXT.besked[u].rubrik, `besked.${u}.rubrik`, v);
    textFinns(TEXT.besked[u].rad, `besked.${u}.rad`, v);
  }
  for (const g of ['utan-avdrag', 'en-strykning', 'blanda-partier', 'ny-puts']) textFinns(TEXT.gorInte[g], `gorInte.${g}`);
  for (const r of [
    'vaggar', 'gavel-sadel', 'gavel-pulpet', 'gavel-valmat', 'gavel-mansard', 'avdrag', 'profil-lock', 'profil-slat',
    'atgang', 'kanten', 'strykningar', 'grundfarg', 'grundolja', 'slam-underlag', 'burkar', 'spill', 'tegel', 'byte', 'silikat',
  ]) {
    textFinns(TEXT.regel[r]?.text, `regel.${r}`);
  }
  for (const f of ['lock', 'slat', 'puts', 'tegel']) textFinns(TEXT.fasad[f], `fasad.${f}`);
  for (const s of ['ommalning', 'skrapat', 'rent', 'kulor', 'byte']) textFinns(TEXT.skick[s], `skick.${s}`);
  for (const t of ['sadel', 'pulpet', 'valmat', 'mansard']) textFinns(TEXT.takform[t], `takform.${t}`);
  for (const a of ANTAGANDEN) {
    textFinns(TEXT.antagande[a.nyckel], `antagande.${a.nyckel}`);
    assert.ok(a.varde.trim().length > 0, `värdet för ${a.nyckel}`);
  }
});

test('rubrikerna bär tal', () => {
  const fall = [STANDARD, E7, { ...E1, fasad: 'tegel' }, { ...E1, skick: 'byte' }];
  for (const x of fall) {
    const r = ok(x);
    const rubrik = TEXT.besked[r.utfall].rubrik(beskedVarden(r, x));
    assert.match(rubrik, /\d/, `${r.utfall}: ${rubrik}`);
  }
});

test('antagandenFor visar raderna svaret vilar på', () => {
  const nycklar = (x) => antagandenFor(ok(x), x).map((a) => a.nyckel);
  const e2b = nycklar(STANDARD);
  for (const n of ['profil-lock', 'atgang-akrylat-malat', 'kanten', 'fonster-matt', 'dorr-matt', 'halvvalm']) {
    assert.ok(e2b.includes(n), `E2b saknar ${n}`);
  }
  assert.ok(!e2b.includes('atgang-slamfarg'));
  assert.ok(!e2b.includes('tegel'));
  const e11 = nycklar({ ...E1, fasad: 'tegel' });
  assert.ok(e11.includes('tegel'));
  assert.ok(!e11.some((n) => n.startsWith('atgang-')));
  const e8 = nycklar(E8);
  assert.ok(e8.includes('mansard-matt'));
  assert.ok(!e8.includes('halvvalm'));
  assert.ok(nycklar(E7).includes('silikatbinder'));
  assert.ok(!nycklar({ ...E6, skick: 'rent' }).includes('nytt-sagat'), 'E6b');
  assert.ok(nycklar({ ...E1, skick: 'rent' }).includes('nytt-sagat'), 'E3');
  assert.ok(!nycklar({ ...E7, skick: 'kulor' }).includes('kulor-grans'));
});

test('ANTAGANDEN: en rad per konstant, och varje källa har en https-adress', () => {
  const nycklar = ANTAGANDEN.map((a) => a.nyckel);
  for (const n of [
    'profil-lock', 'profil-slat',
    'atgang-akrylat-malat', 'atgang-akrylat-sagat', 'atgang-oljealkyd-malat', 'atgang-oljealkyd-sagat',
    'atgang-slamfarg', 'atgang-silikat', 'grund-sagat', 'grund-malat',
    'strykningar-tackfarg', 'strykningar-slam', 'puts-strykningar',
    'burkar-storlekar', 'fonster-matt', 'dorr-matt', 'vinkelgranser',
  ]) {
    assert.ok(nycklar.includes(n), `${n} saknas`);
  }
  assert.equal(new Set(nycklar).size, nycklar.length, 'dubbla nycklar');
  for (const a of ANTAGANDEN.filter((x) => x.typ === 'Källa')) {
    assert.ok(a.kallor.length > 0, `${a.nyckel} har ingen källa`);
    for (const k of a.kallor) assert.match(k.url, /^https:\/\//, `${a.nyckel}: ${k.url}`);
  }
});

/* ------------------------------------------------------------------ *
 * 14.4 Åtgångstabellen
 * ------------------------------------------------------------------ */

test('atgangstabell: elva rader i ordning med facit', () => {
  const t = atgangstabell();
  const facit = [
    ['tack-ommalning', 7, 2, 28.06, 29.7, burkar([3, 9], [1, 2.7])],
    ['tack-skrapat', 7, 2, 28.06, 29.7, burkar([3, 9], [1, 2.7])],
    ['grund-skrapat', 6, 1, 1.67, null, null],
    ['tack-nytt', 6, 2, 32.73, 36, burkar([4, 9])],
    ['grund-nytt', 6, 1, 16.37, 18, burkar([2, 9])],
    ['tack-kulor', 7, 2, 28.06, 29.7, burkar([3, 9], [1, 2.7])],
    ['grund-kulor', 7, 1, 14.03, 18, burkar([2, 9])],
    ['slam-ommalning', 3, 1, 32.73, 35, burkar([3, 10], [1, 5])],
    ['slam-nytt', 3, 2, 65.47, 70, burkar([7, 10])],
    ['silikat', 3, 2, 65.47, 66, null],
    ['tegel', null, null, null, null, null],
  ];
  assert.equal(t.length, 11);
  facit.forEach(([nyckel, m2PerLiter, strykningar, literGarAt, literAttKopa, b], k) => {
    assert.deepEqual(t[k], { nyckel, m2PerLiter, strykningar, literGarAt, literAttKopa, burkar: b }, nyckel);
  });
});

test('atgangstabell: akrylat och oljefärg har samma åtgång, annars ska raderna delas', () => {
  assert.deepEqual(ATGANG.akrylat, ATGANG.oljealkyd);
});

test('atgangstabell: läser inga indata och bygger på ATGANG_YTA', () => {
  assert.deepEqual(atgangstabell(), atgangstabell());
  assert.equal(ATGANG_YTA.fasad, 'slat');
  assert.equal(ATGANG_YTA.stryk, 'auto');
  /* Två olika uträkningar före anropet ändrar inte tabellen. */
  const a = atgangstabell();
  raknaFasadyta({ ...STANDARD, langdM: 20, fasad: 'puts' });
  assert.deepEqual(atgangstabell(), a);
});

test('TEXT.atgangstabell har en icke-tom sträng per nyckel', () => {
  const t = TEXT.atgangstabell;
  textFinns(t.rubrik, 'atgangstabell.rubrik');
  assert.equal(t.kolumner.length, 5);
  t.kolumner.forEach((k, n) => textFinns(k, `atgangstabell.kolumner ${n + 1}`));
  for (const rad of atgangstabell()) {
    textFinns(t.rad[rad.nyckel], `atgangstabell.rad.${rad.nyckel}`);
    textFinns(t.kalla[rad.nyckel], `atgangstabell.kalla.${rad.nyckel}`);
  }
  textFinns(t.liter, 'atgangstabell.liter', '28,1', '29,7', 'tre burkar om 9 liter');
  textFinns(t.grundBart, 'atgangstabell.grundBart', '1,7');
  textFinns(t.putsUtanBinder, 'atgangstabell.putsUtanBinder', '65,5', '66');
  for (const k of ['m2', 'strykningar', 'liter']) textFinns(t.tegel[k], `atgangstabell.tegel.${k}`);
  textFinns(t.under, 'atgangstabell.under');
});
