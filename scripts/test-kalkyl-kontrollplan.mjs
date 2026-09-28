/**
 * Kör kontrollplansgeneratorn mot specens fall T1 till T19
 * (docs/briefer/spec-kalkyl-kontrollplan-2026-09-28.md avsnitt 9) och mot
 * underlagets två exempelplaner (docs/briefer/underlag-kalkyl-kontrollplan-2026-09-28.md
 * avsnitt 7), rättade efter varv 2.
 *
 * Lagrummen i facit nedan är specens avsnitt 3 tecken för tecken. Ändras ett
 * lagrum i koden bryter testet; ändras det i specen ändras testet med den.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-kontrollplan.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  ANTAGANDEN,
  cssStrang,
  FORMULAR_NYCKEL,
  franBygglovAltan,
  KALLOR_FORFATTNINGAR,
  regelLagrum,
  ATGARD_ORDNING,
  DELADE,
  delbarQuery,
  ELDSTADSPLAN_M,
  FLODE_BOSTAD_L_S_M2,
  FLODE_PER_PERSON_L_S,
  genereraKontrollplan,
  GRANSER,
  KA_LAGRUM,
  KA_PER_ATGARD,
  KATALOG,
  KOMPLEMENT_BRANDUNDANTAG_M2,
  LOVGRUND,
  medLagrum,
  medTal,
  MYNNING_OVER_TAKTACKNING_M,
  PLAN_NYCKLAR,
  punktNyckel,
  SKALLNING_MAX_C,
  STANDARD,
  TEXT,
  tolkaQuery,
  VARMVATTEN_MIN_C,
} from '../src/lib/kalkyl/kontrollplan.ts';

const MODUL = 'src/lib/kalkyl/kontrollplan.ts';
const SIDA = 'src/pages/rakna/kontrollplan.astro';
const PLAN = 'src/components/kalkyl/KontrollplanPlan.astro';

/* ------------------------------------------------------------------ *
 * Facit: specens avsnitt 3 efter varv 2, tecken för tecken.
 * [nyckel, villkor, krav, vem, form]
 * ------------------------------------------------------------------ */

const E = 'egenkontroll';
const S = 'sakkunnig';
const RACKE_VID_HUSET = 'BFS 2024:9 2 kap. 10–11 §§';
const RACKE_FRISTAENDE = 'PBF 3 kap. 10 §';
/* Varv 3, K7 (D1): förkortningen BBR i kravet. */
const ENERGI_JULI_SEPT = 'BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92';
const ENERGI_FRAN_OKT = 'BFS 2026:9 3 kap. 1 § och bilaga 2 tabell 6';

const FACIT = {
  altan: [
    ['altan-lage', null, 'Bygglovet; PBL 10 kap. 34 § 1', 'B', E],
    ['altan-grund', null, 'BFS 2024:6 1 kap. 12 och 18 §§', 'B/E', E],
    ['altan-barformaga', null, 'BFS 2024:6 1 kap. 2 § femte st., 12 och 18 §§', 'B/E', E],
    ['altan-mottagning', null, 'BFS 2024:6 1 kap. 19 §', 'B/E', E],
    ['altan-racke', null, { 'vid-huset': RACKE_VID_HUSET, fristaende: RACKE_FRISTAENDE }, 'B/E', E],
    ['altan-trappa', null, 'BFS 2024:9 2 kap. 5 och 12–13 §§', 'B/E', E],
    ['altan-taktackning', { tak: 'skarmtak' }, 'BFS 2024:7 5 kap. 50 § andra st. 2', 'B/E', E],
    ['altan-brandspridning', { tak: 'skarmtak' }, 'BFS 2024:7 6 kap. 5 §', 'B/E', E],
    ['altan-dagvatten', { tak: 'skarmtak' }, 'BFS 2024:8 7 kap. 4 §', 'B/E', E],
  ],
  eldstad: [
    ['eld-egenskaper', null, 'BFS 2024:7 1 kap. 7 och 18 §§', 'B', E],
    ['eld-underlag', null, 'BFS 2024:7 4 kap. 13 §', 'B/E', E],
    ['eld-genomforing', { rok: 'ny' }, 'BFS 2024:6 1 kap. 12 och 18 §§; BFS 2024:7 4 kap. 19 §', 'B/E', E],
    ['eld-avstand', null, 'BFS 2024:7 4 kap. 8 och 14 §§', 'B/E', E],
    ['eld-eldstadsplan', null, 'BFS 2024:7 4 kap. 10 §', 'B/E', E],
    ['eld-forbranningsluft', null, 'BFS 2024:7 4 kap. 9 §', 'B/E', E],
    ['eld-mynning', { rok: 'ny' }, 'BFS 2024:7 4 kap. 16 §', 'B/E', E],
    ['eld-gaser', null, 'BFS 2024:8 9 kap. 4 §', 'B/E', E],
    ['eld-tathet', null, 'BFS 2024:7 4 kap. 17 och 21 §§; BFS 2024:9 2 kap. 38 §', 'sotare', E],
    ['eld-takskydd', { rok: 'ny' }, 'BFS 2024:9 2 kap. 15–21 §§', 'B/E', E],
  ],
  tillbyggnad: [
    ['till-lage', null, 'Bygglovet; PBL 10 kap. 34 § 1', 'B', E],
    ['till-grund', null, 'BFS 2024:6 1 kap. 12 och 18 §§', 'B/E', E],
    ['till-fukt', null, 'BFS 2024:8 7 kap. 1 §', 'B/E', E],
    ['till-barformaga', null, 'BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§', 'B/E', E],
    ['till-dimensionering', null, 'BFS 2024:6 1 kap. 17 §', 'konstruktor', E],
    ['till-mottagning', null, 'BFS 2024:6 1 kap. 19 §', 'B/E', E],
    ['till-brandspridning', null, 'BFS 2024:7 6 kap. 5 §', 'B/E', E],
    ['till-brandvarnare', null, 'BFS 2024:7 7 kap. 47 §; 2 kap. 34–35 §§', 'B/E', E],
    ['till-luftfloden', null, 'BFS 2024:8 3 kap. 4 och 5 §§', 'B/E', E],
    ['till-energi', null, { 'juli-sept-2026': ENERGI_JULI_SEPT, 'fran-okt-2026': ENERGI_FRAN_OKT }, 'B/E', E],
  ],
  komplement: [
    ['komp-lage', null, 'Bygglovet; PBL 10 kap. 34 § 1', 'B', E],
    ['komp-grund', null, 'BFS 2024:6 1 kap. 12 och 18 §§', 'B/E', E],
    ['komp-fukt', null, 'BFS 2024:8 7 kap. 1 §', 'B/E', E],
    ['komp-barformaga', null, 'BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§', 'B/E', E],
    ['komp-mottagning', null, 'BFS 2024:6 1 kap. 19 §', 'B/E', E],
    ['komp-brandspridning', null, 'BFS 2024:7 6 kap. 5 och 10 §§ i lydelse BFS 2025:10', 'B/E', E],
  ],
  rivning: [
    ['riv-inventering', null, 'PBL 10 kap. 8 a §; BFS 2024:4 9 § 2', 'B', E],
    ['riv-skadedjur', null, 'BFS 2024:4 9 § 1', 'B', E],
    ['riv-avfallsplan', null, 'PBL 10 kap. 5 a och 8 a §§', 'B/E', E],
  ],
  barande: [
    ['bar-befintligt', null, 'BFS 2024:6 1 kap. 13 §', 'B/E', E],
    ['bar-dimensionering', null, 'BFS 2024:6 1 kap. 17 §', 'konstruktor', E],
    ['bar-mottagning', null, 'BFS 2024:6 1 kap. 19 §', 'B/E', E],
    ['bar-utforande', null, 'BFS 2024:6 1 kap. 12 och 18 §§', 'B/E', E],
  ],
  ventilation: [
    ['vent-barverk', null, 'BFS 2024:6 1 kap. 13 §', 'B/E', E],
    ['vent-brandtatning', null, 'BFS 2024:7 5 kap. 29 och 42 §§', 'B/E', E],
    ['vent-floden', null, 'BFS 2024:8 3 kap. 4 och 5 §§', 'B/E', E],
    ['vent-funktionskontroll', null, 'PBL 8 kap. 25 §; PBF 5 kap. 1–2 §§', 'funktionskontrollant', S],
  ],
  va: [
    ['va-varmvatten', null, 'BFS 2024:8 8 kap. 6 §', 'B/E', E],
    ['va-aterstromning', null, 'BFS 2024:8 8 kap. 5 §', 'B/E', E],
    ['va-fall', null, 'BFS 2024:8 8 kap. 1 och 10 §§', 'B/E', E],
    ['va-tathet', null, 'BFS 2024:8 8 kap. 1 och 2 §§', 'B/E', E],
    ['va-skallning', null, 'BFS 2024:9 2 kap. 33 §', 'B/E', E],
  ],
};
const FACIT_DELADE = {
  vardefullt: ['PBL 8 kap. 13 och 17 §§', 'B', E],
  aktsamhet: ['BFS 2024:4 6–7 §§', 'B', E],
  overens: ['PBL 10 kap. 34 § 1', 'B', E],
};

/** Kravet i facit för en viss indata. */
function facitKrav(rad, i) {
  const k = rad[2];
  if (typeof k === 'string') return k;
  if ('vid-huset' in k) return k[i.plac];
  return i.inkom === 'juli-sept-2026' ? k['juli-sept-2026'] : k['fran-okt-2026'];
}

const med = (andring) => ({ ...STANDARD, ...andring });
const ok = (i) => {
  const r = genereraKontrollplan(i);
  assert.equal(r.status, 'ok', `väntade ok för ${JSON.stringify(i)}, fick ${JSON.stringify(r)}`);
  return r;
};
const nycklar = (r) => r.punkter.map((p) => p.nyckel);
const kravFor = (r, n) => r.punkter.find((p) => p.nyckel === n)?.krav;

/** Jämför raderna mot facit, lagrum för lagrum, och kontrollerar numreringen. */
function raderSomFacit(r, forvantat, i) {
  assert.deepEqual(nycklar(r), forvantat.map((f) => f[0]));
  r.punkter.forEach((p, n) => {
    assert.equal(p.nr, n + 1);
    const f = forvantat[n];
    assert.equal(p.krav, facitKrav(f, i), `krav för ${p.nyckel}`);
    assert.equal(p.vem, f[3], `vem för ${p.nyckel}`);
    assert.equal(p.form, f[4], `form för ${p.nyckel}`);
  });
}
const delad = (n) => [n, null, ...FACIT_DELADE[n]];

/* ------------------------------------------------------------------ *
 * Fallen T1 till T19
 * ------------------------------------------------------------------ */

test('T1: standard, altan utan tak, åtta punkter', () => {
  const r = ok(STANDARD);
  raderSomFacit(r, [...FACIT.altan.slice(0, 6), delad('aktsamhet'), delad('overens')], STANDARD);
  assert.equal(r.ka, 'nej');
  assert.equal(r.besked, 'plan');
  assert.deepEqual(r.anmalningar, ['slutbesked']);
  assert.equal(r.besok, 'inga-foreslas');
  assert.equal(r.avfall, 'bedom');
  assert.equal(r.tommaAvfallsrader, 3);
  assert.equal(kravFor(r, 'altan-racke'), RACKE_VID_HUSET);
});

test('T2: underlaget 7.1, altan med skärmtak, elva punkter', () => {
  const i = med({ tak: 'skarmtak' });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.altan, delad('aktsamhet'), delad('overens')], i);
  assert.equal(r.punkter.length, 11);
  assert.equal(r.ka, 'nej-skarmtak');
  assert.equal(r.besked, 'plan-ka-skarmtak');
  assert.deepEqual(r.forfattningar, [
    'PBL 10 kap. 6 § i lydelse Lag (2026:712)',
    'BFS 2024:4',
    'BFS 2024:6',
    'BFS 2024:7',
    'BFS 2024:8',
    'BFS 2024:9',
  ]);
});

test('T3: T2 med fristående altan', () => {
  const i = med({ tak: 'skarmtak', plac: 'fristaende' });
  const r = ok(i);
  assert.equal(r.punkter.length, 11);
  assert.equal(kravFor(r, 'altan-racke'), 'PBF 3 kap. 10 §');
  assert.ok(!kravFor(r, 'altan-racke').includes('BFS 2024:9 2 kap. 10'));
  assert.ok(r.forfattningar.includes('PBF (2011:338)'));
});

test('T4: underlaget 7.2, eldstad med ny rökkanal, elva punkter', () => {
  const i = med({ atgarder: ['eldstad'], rok: 'ny' });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.eldstad, delad('overens')], i);
  assert.equal(r.punkter.length, 11);
  assert.equal(r.punkter[6].nyckel, 'eld-mynning');
  assert.equal(r.punkter[6].krav, 'BFS 2024:7 4 kap. 16 §');
  assert.ok(!r.punkter[6].krav.includes('BFS 2024:8'));
  assert.ok(!nycklar(r).includes('aktsamhet'));
  assert.equal(r.ka, 'nej');
  assert.deepEqual(r.anmalningar, ['slutbesked', 'sotarprotokoll']);
  assert.ok(r.gorInteDetHar.includes('ta-i-bruk'));
  const tathet = r.punkter.find((p) => p.nyckel === 'eld-tathet');
  assert.equal(tathet.vem, 'sotare');
  assert.equal(tathet.form, 'egenkontroll');
});

test('T5: eldstad mot befintlig skorsten, åtta punkter', () => {
  const r = ok(med({ atgarder: ['eldstad'], rok: 'befintlig' }));
  assert.equal(r.punkter.length, 8);
  for (const n of ['eld-genomforing', 'eld-mynning', 'eld-takskydd']) assert.ok(!nycklar(r).includes(n), n);
});

test('T6: komplementbostadshus med eldstad, ventilation och VA, tjugo punkter', () => {
  const i = med({ hus: 'komplementbostadshus', atgarder: ['eldstad', 'ventilation', 'va'] });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.eldstad, ...FACIT.ventilation, ...FACIT.va, delad('overens')], i);
  assert.equal(r.punkter.length, 20);
  assert.ok(!nycklar(r).includes('aktsamhet'));
  assert.equal(r.ka, 'nej');
  assert.deepEqual(r.anmalningar, ['slutbesked', 'sotarprotokoll', 'funktionskontroll']);
  assert.equal(r.punkter.find((p) => p.nyckel === 'vent-funktionskontroll').form, 'sakkunnig');
});

test('T7: komplementbostadshus med altan ger fel på hus', () => {
  const r = genereraKontrollplan(med({ hus: 'komplementbostadshus', atgarder: ['altan'] }));
  assert.equal(r.status, 'ogiltig');
  assert.deepEqual(Object.keys(r.fel), ['hus']);
  assert.equal(r.fel.hus, TEXT['fel.hus-komplement']);
});

test('T8: a saknas men tak finns ger fel på a (tom)', () => {
  const { indata, harIndata } = tolkaQuery(new URLSearchParams('tak=nej'));
  assert.equal(harIndata, true);
  assert.deepEqual(indata.atgarder, []);
  const r = genereraKontrollplan(indata);
  assert.equal(r.status, 'ogiltig');
  assert.deepEqual(Object.keys(r.fel), ['a']);
  assert.equal(r.fel.a, TEXT['fel.a-tom']);
});

test('T9: fyra åtgärder ger fel på a (för många)', () => {
  const r = genereraKontrollplan(med({ atgarder: ['altan', 'tillbyggnad', 'eldstad', 'va'] }));
  assert.equal(r.status, 'ogiltig');
  assert.deepEqual(Object.keys(r.fel), ['a']);
  assert.equal(r.fel.a, TEXT['fel.a-for-manga']);
});

test('T10: T7 och T9 samtidigt ger båda nycklarna', () => {
  const r = genereraKontrollplan(
    med({ hus: 'komplementbostadshus', atgarder: ['altan', 'eldstad', 'ventilation', 'va'] }),
  );
  assert.equal(r.status, 'ogiltig');
  assert.deepEqual(Object.keys(r.fel).sort(), ['a', 'hus']);
});

test('T11: ansökan före 1 juli 2026 ger ingen plan', () => {
  const r = genereraKontrollplan(med({ inkom: 'fore-juli-2026' }));
  assert.equal(r.status, 'utanfor');
  assert.equal(r.orsak, 'aldre-regler');
  assert.deepEqual(r.regler, ['aldre-lydelse', 'aldre-byggregler']);
  assert.ok(!('punkter' in r));
});

test('T12: tillbyggnad, energiraden efter när ansökan kom in', () => {
  for (const inkom of ['juli-sept-2026', 'fran-okt-2026']) {
    const i = med({ atgarder: ['tillbyggnad'], inkom });
    const r = ok(i);
    raderSomFacit(r, [...FACIT.tillbyggnad, delad('aktsamhet'), delad('overens')], i);
    assert.equal(r.punkter.length, 12);
    assert.equal(kravFor(r, 'till-energi'), inkom === 'juli-sept-2026' ? ENERGI_JULI_SEPT : ENERGI_FRAN_OKT);
    assert.ok(kravFor(r, 'till-brandvarnare').startsWith('BFS 2024:7 7 kap. 47 §'));
    assert.equal(r.ka, 'huvudregel');
    assert.equal(r.besked, 'plan-ka');
    assert.equal(r.besok, 'namnden');
    assert.ok(r.regler.includes('energi'));
  }
  const juli = ok(med({ atgarder: ['tillbyggnad'], inkom: 'juli-sept-2026' }));
  assert.ok(juli.forfattningar.includes('BFS 2011:6 (BBR)'));
  assert.ok(!juli.forfattningar.includes('BFS 2026:9'));
  const okt = ok(med({ atgarder: ['tillbyggnad'], inkom: 'fran-okt-2026' }));
  assert.ok(okt.forfattningar.includes('BFS 2026:9'));
  assert.ok(!okt.forfattningar.includes('BFS 2011:6 (BBR)'));
});

test('T13: rivning, fem punkter och avfallsplanen med sex rader', () => {
  const i = med({ atgarder: ['rivning'] });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.rivning, delad('aktsamhet'), delad('overens')], i);
  assert.equal(r.ka, 'beror');
  assert.equal(r.besked, 'plan-ka-beror');
  assert.equal(r.besok, 'namnden');
  assert.equal(r.avfall, 'rivning');
  assert.equal(r.tommaAvfallsrader, 6);
});

test('T14: altan med skärmtak, tillbyggnad och eldstad, 31 punkter', () => {
  const i = med({ atgarder: ['eldstad', 'altan', 'tillbyggnad'], tak: 'skarmtak' });
  const r = ok(i);
  raderSomFacit(
    r,
    [...FACIT.altan, ...FACIT.tillbyggnad, ...FACIT.eldstad, delad('aktsamhet'), delad('overens')],
    i,
  );
  assert.equal(r.punkter.length, 31);
  const n = nycklar(r);
  assert.equal(n.filter((x) => x === 'aktsamhet').length, 1);
  assert.equal(n.filter((x) => x === 'overens').length, 1);
  assert.deepEqual(n.slice(-2), ['aktsamhet', 'overens']);
  assert.equal(r.ka, 'huvudregel');
});

test('T15: T1 med särskilt värdefullt hus, nio punkter med vardefullt först', () => {
  const i = med({ vardefullt: 'ja' });
  const r = ok(i);
  raderSomFacit(r, [delad('vardefullt'), ...FACIT.altan.slice(0, 6), delad('aktsamhet'), delad('overens')], i);
  assert.equal(r.punkter.length, 9);
});

test('T16: ändring i bärande konstruktion, sex punkter', () => {
  const i = med({ atgarder: ['barande'] });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.barande, delad('aktsamhet'), delad('overens')], i);
  assert.equal(r.ka, 'nej');
});

test('T17: komplementbyggnad, åtta punkter utan dimensioneringskontroll', () => {
  const i = med({ atgarder: ['komplement'] });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.komplement, delad('aktsamhet'), delad('overens')], i);
  assert.equal(r.punkter.length, 8);
  assert.ok(!nycklar(r).some((x) => x.endsWith('dimensionering')));
  assert.equal(kravFor(r, 'komp-brandspridning'), 'BFS 2024:7 6 kap. 5 och 10 §§ i lydelse BFS 2025:10');
  assert.ok(r.forfattningar.includes('BFS 2024:7 i lydelse BFS 2025:10'));
  assert.ok(!r.forfattningar.includes('BFS 2024:7'));
  assert.equal(r.ka, 'nej');
});

test('T18: ventilation, fem punkter och regeln om funktionskontroll', () => {
  const i = med({ atgarder: ['ventilation'] });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.ventilation, delad('overens')], i);
  assert.ok(r.regler.includes('funktionskontroll'));
  assert.deepEqual(r.anmalningar, ['slutbesked', 'funktionskontroll']);
});

test('T19: VA, sex punkter', () => {
  const i = med({ atgarder: ['va'] });
  const r = ok(i);
  raderSomFacit(r, [...FACIT.va, delad('overens')], i);
  assert.ok(r.gorInteDetHar.includes('ta-i-bruk'));
});

/* ------------------------------------------------------------------ *
 * Övrigt, specen 9.2
 * ------------------------------------------------------------------ */

/** Alla giltiga kombinationer av en till tre åtgärder med varje villkor. */
function allaFall() {
  const fall = [];
  const n = ATGARD_ORDNING.length;
  for (let m = 1; m < 1 << n; m++) {
    const a = ATGARD_ORDNING.filter((_, k) => m & (1 << k));
    if (a.length > 3) continue;
    for (const tak of ['nej', 'skarmtak'])
      for (const plac of ['vid-huset', 'fristaende'])
        for (const rok of ['ny', 'befintlig'])
          for (const inkom of ['juli-sept-2026', 'fran-okt-2026'])
            for (const vardefullt of ['ja', 'nej']) fall.push(med({ atgarder: a, tak, plac, rok, inkom, vardefullt }));
  }
  return fall;
}

test('Varje krav är icke-tomt och börjar med PBL, PBF, BFS eller Bygglovet; inget EKS, BBR bara i energiraden', () => {
  for (const i of allaFall()) {
    const r = ok(i);
    for (const p of r.punkter) {
      assert.match(p.krav, /^(PBL |PBF |BFS |Bygglovet)/, `${p.nyckel} i ${JSON.stringify(i)}`);
      assert.ok(!p.krav.includes('EKS'), p.nyckel);
      if (p.krav.includes('BBR') || p.krav.includes('BFS 2011:6')) {
        assert.equal(p.nyckel, 'till-energi');
        assert.equal(i.inkom, 'juli-sept-2026');
      }
    }
    // Delade rader högst en gång, overens alltid sist.
    const n = nycklar(r);
    for (const d of ['vardefullt', 'aktsamhet', 'overens']) assert.ok(n.filter((x) => x === d).length <= 1);
    assert.equal(n.at(-1), 'overens');
    assert.equal(r.forfattningar[0], 'PBL 10 kap. 6 § i lydelse Lag (2026:712)');
  }
});

test('KATALOG mot specens avsnitt 3: nycklar, ordning, villkor, kontrollant och form', () => {
  assert.deepEqual(Object.keys(KATALOG).sort(), Object.keys(FACIT).sort());
  for (const [atgard, facit] of Object.entries(FACIT)) {
    const rader = KATALOG[atgard];
    assert.equal(rader.length, facit.length, atgard);
    rader.forEach((r, n) => {
      const [nyckel, villkor, krav, vem, form] = facit[n];
      assert.equal(r.nyckel, nyckel);
      assert.deepEqual(r.villkor ?? null, villkor, `villkor för ${nyckel}`);
      assert.equal(r.vem, vem, nyckel);
      assert.equal(r.form, form, nyckel);
      if (typeof krav === 'string') assert.equal(r.krav, krav, nyckel);
      else assert.deepEqual(r.krav.lagrum, krav, nyckel);
    });
  }
  for (const [n, [krav, vem, form]] of Object.entries(FACIT_DELADE)) {
    assert.deepEqual(DELADE[n], { nyckel: n, krav, vem, form });
  }
});

test('Konstanterna mot underlaget och varv 2', () => {
  assert.deepEqual(ELDSTADSPLAN_M, { fram: 0.3, sida: 0.1, utanforOppning: 0.2 });
  assert.equal(MYNNING_OVER_TAKTACKNING_M, 1.0);
  assert.equal(FLODE_BOSTAD_L_S_M2, 0.35);
  assert.equal(FLODE_PER_PERSON_L_S, 4.0);
  assert.equal(VARMVATTEN_MIN_C, 50);
  assert.equal(SKALLNING_MAX_C, 60);
  assert.equal(KOMPLEMENT_BRANDUNDANTAG_M2, 15);
  assert.deepEqual(GRANSER, { atgarder: [1, 3] });
  assert.deepEqual(ATGARD_ORDNING, ['altan', 'tillbyggnad', 'komplement', 'rivning', 'barande', 'eldstad', 'ventilation', 'va']);
  assert.deepEqual(STANDARD, {
    atgarder: ['altan'],
    tak: 'nej',
    plac: 'vid-huset',
    rok: 'ny',
    hus: 'bostadshus',
    vardefullt: 'nej',
    inkom: 'fran-okt-2026',
  });
  assert.equal(
    medTal('{fram} {sida} {utanforOppning} {mynning} {flodeM2} {flodePerson} {varmvatten} {skallning} {komplementUndantag}'),
    '0,30 0,10 0,20 1,0 0,35 4,0 50 60 15',
  );
  assert.deepEqual(KA_PER_ATGARD, {
    altan: 'nej',
    tillbyggnad: 'huvudregel',
    komplement: 'nej',
    rivning: 'beror',
    barande: 'nej',
    eldstad: 'nej',
    ventilation: 'nej',
    va: 'nej',
  });
  assert.deepEqual(KA_LAGRUM, {
    nej: 'PBF 7 kap. 5 § första och andra st.',
    'nej-skarmtak': 'PBF 7 kap. 5 § första st. 6 och andra st.; PBL 10 kap. 10 § 1',
    beror: 'PBL 10 kap. 9 §; PBF 7 kap. 5 § första st. 2 och 9',
    huvudregel: 'PBL 10 kap. 9 och 10 §§',
  });
  assert.deepEqual(LOVGRUND, {
    altan: 'Bygglov, PBL 9 kap. 19 §',
    'altan-skarmtak': 'Bygglov, PBL 9 kap. 19 § eller 9 kap. 9 §',
    tillbyggnad: 'Bygglov, PBL 9 kap. 9 §',
    komplement: 'Bygglov, PBL 9 kap. 3 §',
    rivning: 'Rivningslov, PBL 9 kap. 43 §, eller anmälan, PBF 6 kap. 1 § 1',
    barande: 'Anmälan, PBF 6 kap. 1 § 2',
    eldstad: 'Anmälan, PBF 6 kap. 1 § 4',
    ventilation: 'Anmälan, PBF 6 kap. 1 § 4',
    va: 'Anmälan, PBF 6 kap. 1 § 5',
  });
});

test('tolkaQuery', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.equal(tom.harIndata, false);
  assert.deepEqual(tom.indata, STANDARD);

  assert.deepEqual(tolkaQuery(new URLSearchParams('a=va&a=altan&a=va')).indata.atgarder, ['altan', 'va']);
  assert.deepEqual(tolkaQuery(new URLSearchParams('a=garage&a=eldstad')).indata.atgarder, ['eldstad']);
  assert.equal(tolkaQuery(new URLSearchParams('a=altan&inkom=igar')).indata.inkom, STANDARD.inkom);
  assert.equal(tolkaQuery(new URLSearchParams('a=altan&tak=platt')).indata.tak, STANDARD.tak);

  const personuppgifter = tolkaQuery(new URLSearchParams('namn=Anna&fastighet=X'));
  assert.equal(personuppgifter.harIndata, false);
  assert.deepEqual(personuppgifter.indata, STANDARD);

  // Fler än tre giltiga behålls alla; felet kommer från genereraKontrollplan.
  const fyra = tolkaQuery(new URLSearchParams('a=va&a=altan&a=eldstad&a=rivning'));
  assert.deepEqual(fyra.indata.atgarder, ['altan', 'rivning', 'eldstad', 'va']);
  assert.equal(genereraKontrollplan(fyra.indata).status, 'ogiltig');
});

test('delbarQuery: standardsträngen, rundtur och bara de sju nycklarna', () => {
  assert.equal(
    delbarQuery(STANDARD),
    'a=altan&tak=nej&plac=vid-huset&rok=ny&hus=bostadshus&vardefullt=nej&inkom=fran-okt-2026',
  );
  const fall = [
    STANDARD,
    med({ tak: 'skarmtak' }),
    med({ hus: 'komplementbostadshus', atgarder: ['eldstad', 'ventilation', 'va'] }),
    med({ atgarder: ['altan', 'tillbyggnad', 'eldstad'], tak: 'skarmtak' }),
  ];
  for (const x of fall) assert.deepEqual(tolkaQuery(new URLSearchParams(delbarQuery(x))).indata, x);

  const smutsig = tolkaQuery(new URLSearchParams('namn=Anna&fastighet=X&a=va&diarienummer=1&utm_source=y'));
  const ut = new URLSearchParams(delbarQuery(smutsig.indata));
  for (const k of ut.keys()) assert.ok(['a', 'tak', 'plac', 'rok', 'hus', 'vardefullt', 'inkom'].includes(k), k);
  for (const i of allaFall()) {
    for (const k of new URLSearchParams(delbarQuery(i)).keys()) {
      assert.ok(['a', 'tak', 'plac', 'rok', 'hus', 'vardefullt', 'inkom'].includes(k), k);
    }
  }
});

/* ------------------------------------------------------------------ *
 * TEXT och beslut 3
 * ------------------------------------------------------------------ */

const PUNKTNYCKLAR = [...Object.values(FACIT).flat().map((f) => f[0]), 'vardefullt', 'aktsamhet', 'overens'];
/* Specen 16.6 punkt 4: bara antagandena är rader; författningarna står i KALLOR_FORFATTNINGAR. */
const ANTAGANDE_NR = Array.from({ length: 16 }, (_, n) => `A${n + 1}`);

/** Varje nyckel i specen 2.10. */
function forvantadeNycklar() {
  const n = [];
  for (const a of ATGARD_ORDNING) for (const f of ['etikett', 'hjalp', 'plan']) n.push(`atgard.${a}.${f}`);
  n.push('atgard.altan.plan-skarmtak', 'atgard.komplementbostadshus');
  n.push('falt.a', 'falt.tak', 'falt.tak.nej', 'falt.tak.skarmtak', 'falt.plac', 'falt.plac.vid-huset', 'falt.plac.fristaende');
  n.push('falt.rok', 'falt.rok.ny', 'falt.rok.befintlig', 'falt.hus', 'falt.hus.bostadshus', 'falt.hus.komplementbostadshus');
  n.push('falt.vardefullt', 'falt.vardefullt.ja', 'falt.vardefullt.nej');
  n.push('falt.inkom', 'falt.inkom.fore-juli-2026', 'falt.inkom.juli-sept-2026', 'falt.inkom.fran-okt-2026');
  n.push('falt.altan-hjalp', 'falt.eldstad-hjalp');
  n.push('fel.a-tom', 'fel.a-for-manga', 'fel.hus-komplement');
  for (const b of ['plan', 'plan-ka-skarmtak', 'plan-ka-beror', 'plan-ka', 'aldre-regler']) n.push(`besked.${b}`);
  for (const s of ['enhet', 'ansvar', 'pekrad', 'utskrift']) n.push(`spalt.${s}`);
  for (const k of ['nej', 'nej-skarmtak', 'beror', 'huvudregel']) n.push(`ka.${k}`);
  for (const p of PUNKTNYCKLAR) for (const f of ['vad', 'hur', 'mot', 'verifikat', 'nar']) n.push(`punkt.${p}.${f}`);
  for (const v of ['B', 'E', 'B/E', 'sotare', 'funktionskontrollant', 'konstruktor']) n.push(`vem.${v}`);
  n.push('form.egenkontroll', 'form.sakkunnig');
  for (const k of ['nr', 'kontroll', 'krav', 'hur', 'vem', 'verifikat', 'signatur', 'teckenforklaring']) n.push(`kolumn.${k}`);
  n.push('anmalan.slutbesked', 'anmalan.sotarprotokoll', 'anmalan.funktionskontroll', 'besok.inga-foreslas', 'besok.namnden');
  n.push('avfall.rubrik', 'avfall.ruta', 'avfall.tips.rivning', 'avfall.tips.bedom', 'avfall.del1', 'avfall.del2', 'avfall.del3');
  n.push('avfall.kolumn.sak', 'avfall.kolumn.hur', 'utskrift.titel', 'utskrift.ansvar');
  for (const f of ['fastighet', 'byggherre', 'entreprenor', 'diarienummer', 'upprattad', 'atgard', 'ka', 'regelverk']) n.push(`utskrift.falt.${f}`);
  for (const f of ['anmalningar', 'besok', 'intygande', 'datum', 'underskrift', 'namnfortydligande', 'skapad', 'handskrift']) n.push(`utskrift.${f}`);
  for (const r of [
    'innehall', 'anpassad', 'egen-sakkunnig', 'faststalls', 'slutbesked',
    'ka', 'funktionskontroll', 'energi', 'aldre-lydelse', 'aldre-byggregler',
  ]) n.push(`regel.${r}`);
  for (const g of ['bbr-eks', 'borja-fore-startbesked', 'ta-i-bruk']) n.push(`gorInte.${g}`);
  for (const a of ANTAGANDE_NR) n.push(`antagande.${a}`);
  /* Varv 3. */
  n.push('punkt.altan-barformaga.vad-skarmtak', 'punkt.altan-barformaga.nar-skarmtak');
  n.push('punkt.eld-egenskaper.vad-befintlig', 'punkt.eld-egenskaper.nar-befintlig');
  for (const k of ['nej', 'nej-skarmtak', 'beror', 'huvudregel']) n.push(`utskrift.ka.${k}`);
  n.push('utskrift.avfall.instruktion', 'utskrift.falt.ka-namn', 'skarm.handskrift', 'spalt.beskedsvarning');
  return n;
}

test('TEXT: varje nyckel i specen 2.10 finns och är icke-tom', () => {
  for (const k of forvantadeNycklar()) {
    assert.equal(typeof TEXT[k], 'string', k);
    assert.ok(TEXT[k].trim().length > 0, k);
  }
  assert.equal(PUNKTNYCKLAR.length, 54);
});

const FORBJUDNA = /godkän|godta|garanter|alla kommuner/i;

test('Beslut 3: inga löften om att planen godtas, i TEXT, sidan och planen', () => {
  for (const [k, v] of Object.entries(TEXT)) assert.doesNotMatch(v, FORBJUDNA, k);
  for (const fil of [SIDA, PLAN]) assert.doesNotMatch(readFileSync(fil, 'utf8'), FORBJUDNA, fil);
});

test('ANTAGANDEN: en rad per antagande, Källa med https-adress', () => {
  assert.deepEqual(
    ANTAGANDEN.map((a) => a.nr),
    ANTAGANDE_NR,
  );
  for (const a of ANTAGANDEN) {
    if (a.typ === 'Källa') {
      assert.ok(a.kallor.length > 0, a.nr);
      for (const k of a.kallor) assert.match(k.url, /^https:\/\//, a.nr);
    }
    for (const k of a.kallor) assert.match(k.last, /^\d{4}-\d{2}-\d{2}$/, a.nr);
    assert.ok(TEXT[`antagande.${a.nr}.varde`], a.nr);
  }
});

test('Modulen läser inte datum', () => {
  const kalla = readFileSync(MODUL, 'utf8');
  assert.ok(!kalla.includes('Date('), 'Date(');
  assert.ok(!kalla.includes('Date.now'), 'Date.now');
});

/* ------------------------------------------------------------------ *
 * Varv 3 (specen 16.2)
 * ------------------------------------------------------------------ */


test('K2: inget TEXT-värde är en platshållare', () => {
  for (const [k, v] of Object.entries(TEXT)) assert.ok(!v.startsWith('TEXT SAKNAS'), k);
});

test('K3: medLagrum sätter parentesen före punkten', () => {
  assert.equal(medLagrum('Krävs inte.', 'PBF 7 kap. 5 §'), 'Krävs inte (PBF 7 kap. 5 §).');
  assert.equal(medLagrum('Krävs inte!', 'PBL 10 kap. 3 §'), 'Krävs inte (PBL 10 kap. 3 §)!');
  assert.equal(medLagrum('Krävs inte?', 'PBL 10 kap. 3 §'), 'Krävs inte (PBL 10 kap. 3 §)?');
  assert.equal(medLagrum('Text', 'lagrum'), 'Text (lagrum)');
});

/** All planens text för ett fall, med talen insatta, som KontrollplanPlan.astro läser den. */
function planensText(i) {
  const r = ok(i);
  const falt = ['vad', 'hur', 'mot', 'verifikat', 'nar'];
  return r.punkter.flatMap((p) => falt.map((f) => medTal(TEXT[punktNyckel(p.nyckel, f, i)]))).join(' | ');
}

test('K4: bärförmågan byter text med skärmtaket', () => {
  assert.equal(punktNyckel('altan-barformaga', 'vad', STANDARD), 'punkt.altan-barformaga.vad');
  assert.equal(punktNyckel('altan-barformaga', 'nar', med({ tak: 'skarmtak' })), 'punkt.altan-barformaga.nar-skarmtak');
  assert.equal(punktNyckel('altan-barformaga', 'hur', med({ tak: 'skarmtak' })), 'punkt.altan-barformaga.hur');
});

test('K4: planens text i T1 nämner inte skärmtak', () => {
  assert.doesNotMatch(planensText(STANDARD), /skärmtak/i);
});

test('K5: egenskaperna mot befintlig skorsten (T5)', () => {
  const i = med({ atgarder: ['eldstad'], rok: 'befintlig' });
  assert.equal(punktNyckel('eld-egenskaper', 'vad', i), 'punkt.eld-egenskaper.vad-befintlig');
  assert.equal(punktNyckel('eld-egenskaper', 'nar', i), 'punkt.eld-egenskaper.nar-befintlig');
  assert.equal(punktNyckel('eld-egenskaper', 'vad', med({ atgarder: ['eldstad'] })), 'punkt.eld-egenskaper.vad');
  assert.ok(planensText(i).length > 0);
});

test('T20 (K6): tillbyggnad, eldstad och ventilation, 25 punkter utan tillbyggnadens luftflöden', () => {
  const i = med({ atgarder: ['tillbyggnad', 'eldstad', 'ventilation'] });
  const r = ok(i);
  raderSomFacit(
    r,
    [
      ...FACIT.tillbyggnad.filter((f) => f[0] !== 'till-luftfloden'),
      ...FACIT.eldstad,
      ...FACIT.ventilation,
      delad('aktsamhet'),
      delad('overens'),
    ],
    i,
  );
  assert.equal(r.punkter.length, 25);
  assert.ok(!nycklar(r).includes('till-luftfloden'));
  assert.equal(nycklar(r).filter((n) => n === 'vent-floden').length, 1);
});

test('K8: regelverksraden skriver PBF (2011:338)', () => {
  const r = ok(med({ tak: 'skarmtak', plac: 'fristaende' }));
  assert.ok(r.forfattningar.includes('PBF (2011:338)'));
  assert.ok(!r.forfattningar.includes('PBF'));
});

/** Nycklarna i TEXT som planen läser utanför kp-skarm. */
const planNycklar = () => Object.keys(TEXT).filter((k) => PLAN_NYCKLAR.some((m) => m.test(k)));

test('K10: PLAN_NYCKLAR täcker planens nycklar', () => {
  const n = planNycklar();
  for (const k of ['utskrift.ansvar', 'utskrift.handskrift', 'utskrift.ka.nej', 'utskrift.avfall.instruktion', 'utskrift.falt.ka-namn', 'kolumn.teckenforklaring', 'besok.inga-foreslas', 'anmalan.slutbesked', 'vem.sotare', 'atgard.altan.plan', 'atgard.altan.plan-skarmtak', 'avfall.ruta', 'punkt.overens.vad']) {
    assert.ok(n.includes(k), k);
  }
  for (const k of ['ka.nej', 'avfall.tips.bedom', 'skarm.handskrift', 'atgard.altan.etikett', 'spalt.ansvar']) assert.ok(!n.includes(k), k);
  const plan = readFileSync(PLAN, 'utf8');
  for (const m of plan.matchAll(/TEXT\['([^']+)'\]/g)) {
    if (m[1] === 'avfall.tips') continue;
    assert.ok(PLAN_NYCKLAR.some((re) => re.test(m[1])), m[1]);
  }
});

test('K10: planens handlingstext har inget tilltal', () => {
  const TILLTAL = /(?<![\p{L}])(du|dig|din|ditt|dina|jag)(?![\p{L}])/iu;
  for (const k of planNycklar()) assert.doesNotMatch(medTal(TEXT[k]), TILLTAL, k);
});

test('K17: mjuka bindestreck i de långa kontrollantnamnen', () => {
  assert.ok(TEXT['vem.sotare'].includes('\u00AD'));
  assert.ok(TEXT['vem.funktionskontrollant'].includes('\u00AD'));
  assert.equal(TEXT['vem.sotare'].replaceAll('\u00AD', ''), 'Skorstensfejarmästaren');
  assert.equal(TEXT['vem.funktionskontrollant'].replaceAll('\u00AD', ''), 'Certifierad funktionskontrollant');
});

test('K18: reglerna som flyttat till sidans sektioner står inte i något svar', () => {
  const borta = ['avsta', 'byggbedomare', 'avfall', 'nya-byggregler'];
  for (const i of allaFall()) {
    const r = ok(i);
    for (const n of borta) assert.ok(!r.regler.includes(n), n);
  }
  for (const n of borta) assert.equal(TEXT[`regel.${n}`], undefined, n);
  const sida = readFileSync(SIDA, 'utf8');
  for (const id of ['andrat-1-juli-2026', 'nar-behovs-ingen-kontrollplan', 'sa-stalls-planen-upp']) assert.ok(sida.includes(`"${id}"`), id);
});

/* ------------------------------------------------------------------ *
 * Returen efter varv 3 (specen 16.6) och läsarens retur varv 2
 * ------------------------------------------------------------------ */

test('16.6 punkt 3: regeln energi skriver samma lagrum som kravet i till-energi', () => {
  const i = med({ atgarder: ['tillbyggnad'], inkom: 'juli-sept-2026' });
  const r = ok(i);
  assert.equal(regelLagrum('energi', r.ka, 'juli-sept-2026'), kravFor(r, 'till-energi'));
  assert.equal(regelLagrum('energi', r.ka, 'juli-sept-2026'), ENERGI_JULI_SEPT);
});

test('16.6 punkt 4: varje antagande-nyckel hör till en rad, och källistan har sjutton adresser', () => {
  const nr = new Set(ANTAGANDEN.map((a) => a.nr));
  for (const k of Object.keys(TEXT).filter((k) => k.startsWith('antagande.'))) {
    const rad = k.replace(/^antagande\./, '').replace(/\.varde$/, '');
    assert.ok(nr.has(rad), k);
  }
  const adresser = new Set([...ANTAGANDEN.flatMap((a) => a.kallor), ...KALLOR_FORFATTNINGAR].map((k) => k.url));
  assert.equal(adresser.size, 17);
  for (const k of KALLOR_FORFATTNINGAR) {
    assert.match(k.url, /^https:\/\//, k.titel);
    assert.match(k.last, /^\d{4}-\d{2}-\d{2}$/, k.titel);
  }
});

test('16.6 punkt 2: cssStrang escapar citattecken och bakstreck', () => {
  assert.equal(cssStrang('Fastighetsbeteckning'), '"Fastighetsbeteckning"');
  assert.equal(cssStrang('a"b\\c\nd'), '"a\\"b\\\\c d"');
});

test('Formulärets dolda fält: inget kryss ger felet på a, en delad adress utan a ger standard', () => {
  const formular = tolkaQuery(new URLSearchParams(`${FORMULAR_NYCKEL}=1`));
  assert.equal(formular.harIndata, true);
  assert.deepEqual(formular.indata.atgarder, []);
  const r = genereraKontrollplan(formular.indata);
  assert.equal(r.status, 'ogiltig');
  assert.equal(r.fel.a, TEXT['fel.a-tom']);

  const med_a = tolkaQuery(new URLSearchParams(`${FORMULAR_NYCKEL}=1&a=va`));
  assert.deepEqual(med_a.indata.atgarder, ['va']);

  const delad = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(delad.indata, STANDARD);
  for (const i of [STANDARD, formular.indata, med_a.indata]) {
    assert.ok(!new URLSearchParams(delbarQuery(i)).has(FORMULAR_NYCKEL));
  }
});

test('16.7 punkt 1: länken från bygglovsräknaren, vid huset bara vid avstånd 0', () => {
  const b = { tak: 'nej', avstandByggnadM: 0, vardefullt: 'nej' };
  assert.equal(franBygglovAltan(b).plac, 'vid-huset');
  assert.equal(franBygglovAltan({ ...b, avstandByggnadM: 2 }).plac, 'fristaende');
  assert.deepEqual(franBygglovAltan({ ...b, tak: 'skarmtak', vardefullt: 'ja' }), {
    ...STANDARD,
    atgarder: ['altan'],
    tak: 'skarmtak',
    plac: 'vid-huset',
    vardefullt: 'ja',
  });
  assert.deepEqual(franBygglovAltan({ ...b, tak: 'vaggar' }).atgarder, ['tillbyggnad']);
  assert.equal(franBygglovAltan({ ...b, vardefullt: 'vet-inte' }).vardefullt, 'nej');
  assert.equal(ok(franBygglovAltan({ ...b, avstandByggnadM: 2 })).status, 'ok');
});

test('16.7 punkt 2: etiketten Övriga anmälningar står i planen', () => {
  assert.equal(TEXT['utskrift.falt.ovriga-anmalningar'], 'Övriga anmälningar');
  assert.ok(PLAN_NYCKLAR.some((m) => m.test('utskrift.falt.ovriga-anmalningar')));
  assert.ok(readFileSync(PLAN, 'utf8').includes("TEXT['utskrift.falt.ovriga-anmalningar']"));
});
