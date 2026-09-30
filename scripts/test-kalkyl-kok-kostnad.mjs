/**
 * Kör köksräknaren mot värdartikeln /kok/byta-koksluckor/ (läst från disk,
 * artikeln är facit), underlagets räkneexempel i
 * docs/briefer/faktablad/rakna-kok-kostnad.md avsnitt 5 och specens tabell
 * (docs/briefer/spec-kalkyl-kok-kostnad-2026-09-29.md avsnitt 6).
 *
 * Facit räknat för hand med formlerna i specen 2.6:
 *   luckor: antal · pris per lucka; montering 7 500 upp till 20 luckor,
 *     annars Math.round(7 500 · antal / 20)
 *   gångjärn: antal · 2 · 169
 *   bänkskiva: meter · kr per lm i varje kant; montering meter · 500 eller 2 000
 *   nytt kök: stommar meter · 3 840, montering 15 000 eller 40 000, vitvaror
 *     15 000 eller 25 000, rivning 8 000 eller 18 000, el 5 000 eller 15 000,
 *     VVS 5 000 eller 20 000
 *   rot per kant: min(Math.round(0,3 · arbete), gränsen − använt)
 *
 * Påståenden om ordalydelsen står som todo tills hantverkaren har skrivit
 * texten. Talen rörs aldrig.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-kok-kostnad.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  KALLOR,
  KOK_ANTAGANDEN,
  KOK_BANKSKIVA_KR_PER_LM,
  KOK_BANKSKIVA_MONTERING_KR_PER_LM,
  KOK_EGEN_VAL,
  KOK_EL_KR,
  KOK_FLYTT_VAL,
  KOK_GANGJARN_KR,
  KOK_GANGJARN_PER_LUCKA,
  KOK_GANGJARN_VAL,
  KOK_GRANSER,
  KOK_IKEA_MODUL_KR,
  KOK_LUCKA_KR,
  KOK_LUCKA_PRISGRUPP,
  KOK_LUCKOR_FAST_MAX,
  KOK_LUCKOR_MONTERING_KR,
  KOK_MATERIAL_VAL,
  KOK_MONTERING_KR,
  KOK_NIVA_VAL,
  KOK_RIVNING_KR,
  KOK_STANDARD,
  KOK_STOMMAR_KR_PER_M,
  KOK_TEXT,
  KOK_VAG_VAL,
  KOK_VITVAROR_KR,
  KOK_VVS_KR,
  kokAntagandenFor,
  kokBeskedVarden,
  kokDelbarQuery,
  kokKortsvarVarden,
  kokLuckorMonteringKr,
  kokRegelKallor,
  kokRotavdragQuery,
  krText,
  raknaKokKostnad,
  spannText,
  tolkaKokQuery,
} from '../src/lib/kalkyl/renovering.ts';
import { ROT_PROCENT, tolkaQuery as tolkaRotavdrag } from '../src/lib/kalkyl/rotavdrag.ts';

const ROT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ARTIKEL = join(ROT, 'src', 'content', 'guider', 'kok', 'byta-koksluckor.mdx');
const BANKSKIVA = join(ROT, 'src', 'content', 'guider', 'kok', 'byta-bankskiva.mdx');
const SIDA = join(ROT, 'src', 'pages', 'rakna', 'kok-kostnad.astro');

const TODO_TEXT = { todo: 'text' };

/** Facit med hårt mellanslag mellan siffror, som krText skriver. "till" behåller vanliga mellanslag. */
const nb = (t) => t.replace(/(\d) (?=\d)/g, '$1 ');

/** Ett giltigt svar, eller ett misslyckat test. */
function ok(i) {
  const r = raknaKokKostnad(i);
  assert.equal(r.status, 'ok', JSON.stringify(r));
  return r;
}

/** [nedre, övre] för ett fält på båda kanterna. */
const kanter = (r, falt) => [r[falt], r.hog[falt]];
const post = (r, nyckel) => r.poster.find((p) => p.nyckel === nyckel);

/* Fallen i specen 6. Resten KOK_STANDARD. */
const K1 = { ...KOK_STANDARD };
const K2 = { ...KOK_STANDARD, gangjarn: 'behall' };
const K3 = { ...KOK_STANDARD, niva: 'mellan' };
const K3b = { ...KOK_STANDARD, niva: 'hog' };
const K4 = { ...KOK_STANDARD, antalLuckor: 30 };
const K5 = { ...KOK_STANDARD, vag: 'bankskiva', meter: 4, material: 'laminat' };
const K6 = { ...KOK_STANDARD, vag: 'bankskiva', meter: 3.5, material: 'komposit' };
const K7 = { ...KOK_STANDARD, vag: 'luckor-bankskiva' };
const K8 = { ...KOK_STANDARD, vag: 'nytt', meter: 4.8, egen: ['rivning'] };
const K9 = { ...KOK_STANDARD, vag: 'nytt', meter: 4 };
const K10 = { ...K9, flytt: ['el', 'diskbank'] };
const K11 = { ...K10, rotKr: 30000 };
const K12 = { ...K11, agare: 2 };
const K13 = { ...KOK_STANDARD, egen: ['montering'] };
const K14 = { ...KOK_STANDARD, egen: ['rivning'], flytt: ['el', 'diskbank'] };
const K15 = { ...K9, niva: 'hog' };

/* ------------------------------------------------------------------ *
 * Artikeln är facit
 * ------------------------------------------------------------------ */

test('K1: standard är värdartikelns kök, rad för rad', () => {
  const r = ok(K1);
  assert.equal(r.utfall, 'belopp');
  assert.equal(r.spann, false);
  assert.deepEqual(
    r.poster.map((p) => [p.nyckel, p.arbeteKr, p.materialKr, p.arbete]),
    [
      ['luckor', 7500, 6240, 'belopp'],
      ['gangjarn', 0, 5408, 'ingar'],
    ],
  );
  assert.equal(r.arbeteKr, 7500);
  assert.equal(r.materialKr, 11648);
  assert.equal(r.foreRotKr, 19148);
  assert.equal(r.rotKr, 2250);
  assert.equal(r.attBetalaKr, 16898);
  assert.equal(r.andelArbeteProcent, 39);
  assert.deepEqual(kanter(r, 'attBetalaKr'), [16898, 16898]);

  // Tabellen i /kok/byta-koksluckor/, "Så här blir kostnaden för ett kök med 16 luckor".
  const artikel = readFileSync(ARTIKEL, 'utf8');
  const cell = (rubrik) => {
    const m = new RegExp(`^\\|\\s*${rubrik}[^|]*\\|\\s*([\\d  ]+)`, 'm').exec(artikel);
    assert.ok(m, `raden ${rubrik} saknas i artikeln`);
    return Number(m[1].replace(/\D/g, ''));
  };
  assert.equal(cell('16 luckor'), post(r, 'luckor').materialKr);
  assert.equal(cell('32 gångjärn'), post(r, 'gangjarn').materialKr);
  assert.equal(cell('Montering före rotavdraget'), r.arbeteKr);
  assert.equal(cell('Rotavdrag'), r.rotKr);
  assert.equal(cell('Att betala'), r.attBetalaKr);
  // Stycket om när ett byte är värt pengarna: priset före rot och avdraget, samma kök.
  const stycke = /kostar nya luckor ([\d  ]+) kronor före rotavdraget.*?avdraget på monteringen är ([\d  ]+) kronor/.exec(artikel);
  assert.ok(stycke, 'meningen om nya luckor före rotavdraget saknas i artikeln');
  assert.equal(Number(stycke[1].replace(/\D/g, '')), r.foreRotKr);
  assert.equal(Number(stycke[2].replace(/\D/g, '')), r.rotKr);
});

test('K2: behåll gångjärnen, 5 408 kr mindre som artikeln säger', () => {
  const r = ok(K2);
  assert.equal(post(r, 'gangjarn'), undefined);
  assert.equal(r.attBetalaKr, 11490);
  assert.equal(ok(K1).attBetalaKr - r.attBetalaKr, 5408);
  const artikel = readFileSync(ARTIKEL, 'utf8');
  assert.match(artikel, /blir det 5 408 kronor mindre/);
});

test('K3: mellan- och högnivå', () => {
  assert.equal(ok(K3).attBetalaKr, 33762);
  assert.equal(ok(K3b).attBetalaKr, 69426);
  assert.equal(post(ok(K3b), 'luckor').materialKr, 16 * 3673);
});

test('K4: montering upp till 20 luckor fast, sedan i proportion', () => {
  assert.equal(kokLuckorMonteringKr(1), 7500);
  assert.equal(kokLuckorMonteringKr(20), 7500);
  assert.equal(kokLuckorMonteringKr(21), 7875);
  assert.equal(kokLuckorMonteringKr(30), 11250);
  const r = ok(K4);
  assert.equal(r.arbeteKr, 11250);
  assert.equal(r.materialKr, 21840);
  assert.equal(r.attBetalaKr, 29715);
});

/* ------------------------------------------------------------------ *
 * Bänkskivan
 * ------------------------------------------------------------------ */

test('K5: bänkskiva 4 m laminat, underlagets exempel 3', () => {
  const r = ok(K5);
  assert.equal(r.spann, true);
  assert.deepEqual(kanter(r, 'materialKr'), [2000, 6000]);
  assert.deepEqual(kanter(r, 'arbeteKr'), [2000, 8000]);
  // Specen K10: svaret utan avdrag, villkoret med.
  assert.deepEqual(kanter(r, 'rotKr'), [0, 0]);
  assert.deepEqual(kanter(r, 'attBetalaKr'), [4000, 14000]);
  assert.deepEqual(kanter(r, 'attBetalaKr'), kanter(r, 'foreRotKr'));
  assert.deepEqual([r.villkor.rotKr, r.hog.villkor.rotKr], [600, 2400]);
  assert.deepEqual([r.villkor.attBetalaKr, r.hog.villkor.attBetalaKr], [3400, 11600]);
  assert.deepEqual(
    r.poster.map((p) => p.nyckel),
    ['bankskiva'],
  );
});

test('K6: bänkskiva 3,5 m komposit', () => {
  const r = ok(K6);
  assert.deepEqual(kanter(r, 'materialKr'), [7000, 17500]);
  assert.deepEqual(kanter(r, 'arbeteKr'), [1750, 7000]);
  assert.deepEqual(kanter(r, 'rotKr'), [0, 0]);
  assert.deepEqual(kanter(r, 'attBetalaKr'), kanter(r, 'foreRotKr'));
  assert.deepEqual([r.villkor.attBetalaKr, r.hog.villkor.attBetalaKr], [8225, 22400]);
});

test('K7: luckor och bänkskiva summeras', () => {
  const r = ok(K7);
  assert.deepEqual(
    r.poster.map((p) => p.nyckel),
    ['luckor', 'gangjarn', 'bankskiva'],
  );
  assert.deepEqual(kanter(r, 'foreRotKr'), [23148, 33148]);
  // Specen K10: rot 2 250 på luckornas 7 500, bänkskivans montering villkorad.
  assert.deepEqual(kanter(r, 'arbeteSakertKr'), [7500, 7500]);
  assert.deepEqual(kanter(r, 'rotKr'), [2250, 2250]);
  assert.deepEqual(kanter(r, 'attBetalaKr'), [23148 - 2250, 33148 - 2250]);
  assert.deepEqual([r.villkor.attBetalaKr, r.hog.villkor.attBetalaKr], [20298, 28498]);
});

/* ------------------------------------------------------------------ *
 * Nytt kök
 * ------------------------------------------------------------------ */

test('K8: nytt kök 4,8 m med egen rivning, materialet som underlagets exempel 4', () => {
  const r = ok(K8);
  assert.equal(post(r, 'stommar').materialKr, 18432); // 8 moduler · 2 304
  assert.deepEqual(kanter(r, 'materialKr'), [35832, 50632]);
  // Arbetet: hela Totalbyggarnas spann, inte exemplets "mellan" (specen K5).
  assert.deepEqual(kanter(r, 'arbeteKr'), [15000, 40000]);
  assert.deepEqual(kanter(r, 'attBetalaKr'), [46332, 78632]);
  assert.equal(post(r, 'rivning').arbete, 'egen');
  assert.equal(post(r, 'bankskiva').arbete, 'ingar');
  assert.equal(post(r, 'vitvaror').arbete, 'inget');
});

test('K9: nytt kök 4 m', () => {
  const r = ok(K9);
  assert.deepEqual(
    r.poster.map((p) => p.nyckel),
    ['rivning', 'stommar', 'bankskiva', 'vitvaror'],
  );
  assert.deepEqual(kanter(r, 'foreRotKr'), [55360, 104360]);
  assert.deepEqual(kanter(r, 'rotKr'), [6900, 17400]);
  assert.deepEqual(kanter(r, 'attBetalaKr'), [48460, 86960]);
});

test('K10: flytt av el och diskbänk, underlagets exempel 6', () => {
  const a = ok(K9);
  const b = ok(K10);
  assert.deepEqual(
    [b.arbeteKr - a.arbeteKr, b.hog.arbeteKr - a.hog.arbeteKr],
    [10000, 35000],
  );
  assert.deepEqual(
    [b.rotKr - a.rotKr, b.hog.rotKr - a.hog.rotKr],
    [3000, 10500],
  );
  assert.deepEqual(kanter(b, 'attBetalaKr'), [55460, 111460]);
  assert.equal(post(b, 'el').materialKr, 0);
  assert.equal(post(b, 'vvs').materialKr, 0);
});

test('K11: 30 000 redan använt ger tak i den övre kanten', () => {
  const r = ok(K11);
  assert.equal(r.utfall, 'tak');
  assert.equal(r.rotKr, 9900);
  assert.equal(r.kapatKr, 0);
  assert.equal(r.hog.rotKr, 20000);
  assert.equal(r.hog.kapatKr, 7900);
  assert.ok(r.regler.includes('rot-slog-i'));
});

test('K12: samma med två ägare ryms', () => {
  const r = ok(K12);
  assert.equal(r.utfall, 'belopp');
  assert.equal(r.hog.rotKr, 27900);
});

test('K13: egen montering av luckorna', () => {
  const r = ok(K13);
  assert.equal(r.arbeteKr, 0);
  assert.equal(r.rotKr, 0);
  assert.equal(r.attBetalaKr, 11648);
  assert.equal(post(r, 'luckor').arbete, 'egen');
  assert.equal(r.regler.at(-1), 'egen-insats');
  // Inget arbete: gränsen och procenten på hela priset gäller inte.
  assert.ok(!r.regler.includes('rot-tak'));
  assert.ok(r.regler.includes('rot-arbete'));
  assert.deepEqual(r.gorInteDetHar, ['verkstad-rot']);
});

test('nollfallen: allt arbete själv i varje väg ger varken rot-tak eller rot-pa-allt', () => {
  const nollfall = [
    { ...KOK_STANDARD, egen: ['montering'] },
    { ...KOK_STANDARD, vag: 'bankskiva', egen: ['montering'] },
    { ...KOK_STANDARD, vag: 'luckor-bankskiva', egen: ['montering'] },
    { ...KOK_STANDARD, vag: 'nytt', egen: ['montering', 'rivning'] },
    // Rotavdraget redan fullt använt ändrar inget när arbetet är 0.
    { ...KOK_STANDARD, egen: ['montering'], rotKr: KOK_GRANSER.rotKr[1] },
  ];
  for (const i of nollfall) {
    const r = ok(i);
    assert.equal(r.hog.arbeteKr, 0, JSON.stringify(i));
    assert.ok(!r.regler.includes('rot-tak'), JSON.stringify(i));
    assert.ok(!r.regler.includes('rot-slog-i'), JSON.stringify(i));
    assert.ok(!r.gorInteDetHar.includes('rot-pa-allt'), JSON.stringify(i));
  }
  // Nytt kök med flytt har arbete kvar trots egen montering och rivning.
  const r = ok({ ...KOK_STANDARD, vag: 'nytt', egen: ['montering', 'rivning'], flytt: ['el'] });
  assert.ok(r.regler.includes('rot-tak'));
  assert.equal(r.gorInteDetHar[0], 'rot-pa-allt');
});

test('K14: rivning och flytt ändrar inget utanför nytt kök', () => {
  const a = ok(K1);
  const b = ok(K14);
  assert.equal(b.attBetalaKr, a.attBetalaKr);
  assert.deepEqual(b.regler, a.regler);
  assert.ok(!b.regler.includes('egen-insats'));
  assert.deepEqual(b.gorInteDetHar, a.gorInteDetHar);
});

test('K15: nytt kök räknas alltid i enkel nivå', () => {
  const a = ok(K9);
  const b = ok(K15);
  assert.deepEqual(kanter(b, 'attBetalaKr'), kanter(a, 'attBetalaKr'));
  assert.ok(b.regler.includes('nytt-enkel'));
});

/* ------------------------------------------------------------------ *
 * Ogiltigt
 * ------------------------------------------------------------------ */

const felPa = (andring) => {
  const r = raknaKokKostnad({ ...KOK_STANDARD, ...andring });
  assert.equal(r.status, 'ogiltig', JSON.stringify(andring));
  return Object.keys(r.fel).sort();
};

test('ogiltigt: luckor', () => {
  for (const antalLuckor of [0, 61, 2.5, NaN]) assert.deepEqual(felPa({ antalLuckor }), ['luckor']);
  assert.deepEqual(felPa({ antalLuckor: tolkaKokQuery(new URLSearchParams('luckor=')).indata.antalLuckor }), [
    'luckor',
  ]);
  assert.deepEqual(felPa({ antalLuckor: tolkaKokQuery(new URLSearchParams('luckor=abc')).indata.antalLuckor }), [
    'luckor',
  ]);
});

test('ogiltigt: meter', () => {
  for (const meter of [0.4, 15.1, NaN]) assert.deepEqual(felPa({ meter }), ['meter']);
  assert.equal(ok({ ...KOK_STANDARD, meter: 0.5 }).status, 'ok');
  assert.equal(ok({ ...KOK_STANDARD, meter: 15 }).status, 'ok');
});

test('ogiltigt: ägare och rot', () => {
  assert.deepEqual(felPa({ agare: 3 }), ['agare']);
  assert.deepEqual(felPa({ rotKr: -1 }), ['rot']);
  assert.deepEqual(felPa({ rotKr: KOK_GRANSER.rotKr[1] + 1 }), ['rot']);
  assert.equal(ok({ ...KOK_STANDARD, agare: 2, rotKr: 2 * KOK_GRANSER.rotKr[1] }).status, 'ok');
  assert.deepEqual(felPa({ antalLuckor: 0, meter: 20 }), ['luckor', 'meter']);
});

/* ------------------------------------------------------------------ *
 * Konstanterna
 * ------------------------------------------------------------------ */

test('konstanterna mot underlaget', () => {
  assert.deepEqual(KOK_LUCKA_KR, { enkel: 390, mellan: 1444, hog: 3673 });
  assert.equal(KOK_GANGJARN_KR, 169);
  assert.equal(KOK_GANGJARN_PER_LUCKA, 2);
  assert.equal(KOK_LUCKOR_MONTERING_KR, 7500);
  // Totalbyggarnas 5 250 kr efter rotavdraget, före avdraget.
  assert.equal(Math.round(5250 / (1 - ROT_PROCENT / 100)), KOK_LUCKOR_MONTERING_KR);
  assert.equal(KOK_LUCKOR_FAST_MAX, 20);
  assert.deepEqual(KOK_BANKSKIVA_KR_PER_LM, { laminat: [500, 1500], tra: [1200, 3500], komposit: [2000, 5000] });
  assert.deepEqual([...KOK_BANKSKIVA_MONTERING_KR_PER_LM], [500, 2000]);
  assert.equal(KOK_IKEA_MODUL_KR, 2304);
  assert.equal(KOK_STOMMAR_KR_PER_M, 3840);
  assert.deepEqual([...KOK_MONTERING_KR], [15000, 40000]);
  assert.deepEqual([...KOK_VITVAROR_KR], [15000, 25000]);
  assert.deepEqual([...KOK_RIVNING_KR], [8000, 18000]);
  assert.deepEqual([...KOK_EL_KR], [5000, 15000]);
  assert.deepEqual([...KOK_VVS_KR], [5000, 20000]);
  assert.deepEqual([...KOK_EGEN_VAL], ['montering', 'rivning']);
  assert.deepEqual([...KOK_FLYTT_VAL], ['el', 'diskbank']);
});

/* ------------------------------------------------------------------ *
 * Adressen
 * ------------------------------------------------------------------ */

test('tolkaKokQuery: tom adress ger standard och harIndata false', () => {
  const { indata, harIndata } = tolkaKokQuery(new URLSearchParams(''));
  assert.deepEqual(indata, KOK_STANDARD);
  assert.equal(harIndata, false);
});

test('tolkaKokQuery: enheter, decimalkomma och hårda mellanslag', () => {
  const { indata } = tolkaKokQuery(new URLSearchParams('luckor=16 st&meter=4,5 m&rot=12 000 kr'));
  assert.equal(indata.antalLuckor, 16);
  assert.equal(indata.meter, 4.5);
  assert.equal(indata.rotKr, 12000);
  assert.equal(tolkaKokQuery(new URLSearchParams('meter=3,2lm')).indata.meter, 3.2);
});

test('tolkaKokQuery: okända val ger standard, dubbletter tas bort och ordningen följer valen', () => {
  const { indata } = tolkaKokQuery(
    new URLSearchParams('vag=lyx&niva=guld&gangjarn=x&material=marmor&flytt=diskbank&flytt=el&flytt=el&flytt=tak&egen=rivning&egen=el&egen=montering'),
  );
  assert.equal(indata.vag, 'luckor');
  assert.equal(indata.niva, 'enkel');
  assert.equal(indata.gangjarn, 'nya');
  assert.equal(indata.material, 'laminat');
  assert.deepEqual(indata.flytt, ['el', 'diskbank']);
  assert.deepEqual(indata.egen, ['montering', 'rivning']);
});

test('tolkaKokQuery: agare 3 ger fel, tom rot ger 0', () => {
  assert.ok(Number.isNaN(tolkaKokQuery(new URLSearchParams('agare=3')).indata.agare));
  assert.equal(tolkaKokQuery(new URLSearchParams('agare=')).indata.agare, 1);
  assert.equal(tolkaKokQuery(new URLSearchParams('rot=')).indata.rotKr, 0);
});

test('rundtur: tolkaKokQuery(kokDelbarQuery(x)) ger samma indata', () => {
  for (const i of [K1, K3, K6, K8, K10, K12]) {
    assert.deepEqual(tolkaKokQuery(kokDelbarQuery(i)).indata, i, JSON.stringify(i));
  }
});

test('kokDelbarQuery: nycklarna i ordning, talen med komma', () => {
  assert.equal(
    kokDelbarQuery(K8).toString(),
    'vag=nytt&luckor=16&niva=enkel&gangjarn=nya&meter=4%2C8&material=laminat&egen=rivning&agare=1&rot=0',
  );
});

test('kokRotavdragQuery: övre kanten, och rotavdragsräknaren läser samma tal', () => {
  const r = ok(K9);
  const q = kokRotavdragQuery(r, K9);
  assert.equal(q.toString(), 'arbete=58000&material=46360&agare=1&rot=0');
  const { indata } = tolkaRotavdrag(q);
  assert.equal(indata.arbetskostnadKr, 58000);
  assert.equal(indata.materialkostnadKr, 46360);
});

/* ------------------------------------------------------------------ *
 * Texterna och värdena till dem
 * ------------------------------------------------------------------ */

test('kokKortsvarVarden: talen för de tre vägarna', () => {
  const v = kokKortsvarVarden();
  assert.equal(v.luckor.attBetala, nb('16 898'));
  // Specen K10: bänkskivans svar är priset före rot.
  assert.equal(v.bankskiva4.attBetala, nb('4 000 till 14 000'));
  assert.equal(v.bankskiva4.attBetala, v.bankskiva4.foreRot);
  assert.equal(v.nytt4.attBetala, nb('48 460 till 86 960'));
  assert.equal(v.nytt5.foreRot, spannText(ok({ ...K9, meter: 5 }).foreRotKr, ok({ ...K9, meter: 5 }).hog.foreRotKr));
  assert.equal(v.hamtat, '28 september 2026');
});

test('kokBeskedVarden: formaterade tal, spann med hårda mellanslag', () => {
  const v = kokBeskedVarden(ok(K1), K1);
  assert.equal(v.attBetala, nb('16 898'));
  assert.equal(v.andelArbete, '39');
  const w = kokBeskedVarden(ok(K10), K10);
  assert.equal(w.attBetala, nb('55 460 till 111 460'));
  assert.equal(w.meter, '4');
  assert.equal(kokBeskedVarden(ok(K8), K8).meter, '4,8');
  assert.equal(kokBeskedVarden(ok(K11), K11).kapatMax, krText(7900));
  for (const t of [v.attBetala, w.attBetala, w.foreRot, w.material]) assert.doesNotMatch(t, /\d \d/);
});

/** Ett värde i KOK_TEXT är en icke-tom sträng, eller en funktion som ger en. */
function textOk(v, namn) {
  const ut = typeof v === 'function' ? v(kokBeskedVarden(ok(K1), K1), 1, 2) : v;
  assert.equal(typeof ut, 'string', namn);
  assert.ok(ut.length > 0, namn);
}

test('KOK_TEXT: varje nyckel har en icke-tom sträng', () => {
  for (const u of ['belopp', 'tak']) {
    textOk(KOK_TEXT.besked[u].rubrik, `besked.${u}.rubrik`);
    textOk(KOK_TEXT.besked[u].rad, `besked.${u}.rad`);
  }
  for (const [k, v] of Object.entries(KOK_TEXT.form)) textOk(v, `form.${k}`);
  for (const n of KOK_VAG_VAL) textOk(KOK_TEXT.vag[n], `vag.${n}`);
  for (const n of KOK_NIVA_VAL) textOk(KOK_TEXT.niva[n], `niva.${n}`);
  for (const n of KOK_GANGJARN_VAL) textOk(KOK_TEXT.gangjarn[n], `gangjarn.${n}`);
  for (const n of KOK_MATERIAL_VAL) textOk(KOK_TEXT.material[n], `material.${n}`);
  for (const n of KOK_FLYTT_VAL) textOk(KOK_TEXT.flytt[n], `flytt.${n}`);
  for (const n of KOK_EGEN_VAL) textOk(KOK_TEXT.egen[n], `egen.${n}`);
  for (const n of ['rivning', 'stommar', 'luckor', 'gangjarn', 'bankskiva', 'vitvaror', 'el', 'vvs']) {
    textOk(KOK_TEXT.post[n], `post.${n}`);
  }
  for (const n of ['postEgen', 'postIngar', 'postInget', 'skissAlt', 'skissBildtext']) textOk(KOK_TEXT[n], n);
  textOk(KOK_TEXT.beskedVillkor.rubrik, 'beskedVillkor.rubrik');
  textOk(KOK_TEXT.beskedVillkor.rad, 'beskedVillkor.rad');
  for (const [k, v] of Object.entries(KOK_TEXT.fel)) textOk(v, `fel.${k}`);
  for (const [k, v] of Object.entries(KOK_TEXT.spalt)) textOk(v, `spalt.${k}`);
  for (const [k, v] of Object.entries(KOK_TEXT.darfor)) textOk(v, `darfor.${k}`);
  for (const [k, v] of Object.entries(KOK_TEXT.regel)) {
    textOk(v.text, `regel.${k}`);
    assert.ok(v.kallor.length > 0, `regel.${k}.kallor`);
    for (const kod of v.kallor) assert.ok(kod in KALLOR, `regel.${k}: ${kod}`);
  }
  for (const [k, v] of Object.entries(KOK_TEXT.gorInte)) textOk(v, `gorInte.${k}`);
  for (const a of KOK_ANTAGANDEN) textOk(KOK_TEXT.antagande[a.nyckel], `antagande.${a.nyckel}`);
  assert.equal(KOK_TEXT.steg.length, 4);
  for (const s of KOK_TEXT.steg) textOk(s, 'steg');
  const ks = KOK_TEXT.kortsvar(kokKortsvarVarden());
  textOk(ks.fore, 'kortsvar.fore');
  textOk(ks.markering, 'kortsvar.markering');
  textOk(ks.efter, 'kortsvar.efter');
});

test('KOK_TEXT: rubriken bär attBetala', () => {
  for (const i of [K1, K11]) {
    const r = ok(i);
    const v = kokBeskedVarden(r, i);
    assert.ok(KOK_TEXT.besked[r.utfall].rubrik(v).includes(v.attBetala));
  }
});

test("KOK_TEXT: spalt['rad-kallor'] bär datumet", () => {
  assert.match(KOK_TEXT.spalt['rad-kallor'](kokKortsvarVarden().hamtat), /2026/);
});

test('KOK_TEXT: kortsvaret markerar ett tal ur kokKortsvarVarden', () => {
  const v = kokKortsvarVarden();
  const ks = KOK_TEXT.kortsvar(v);
  assert.ok([v.luckor, v.bankskiva4, v.nytt4, v.nytt5].some((b) => ks.markering.includes(b.attBetala)));
});

/* ------------------------------------------------------------------ *
 * Regler, gör inte det här och antagandetabellen per väg
 * ------------------------------------------------------------------ */

test('regler per väg', () => {
  assert.deepEqual(ok(K1).regler, ['luckor-pris', 'luckor-montering', 'gangjarn', 'tillkommer', 'rot-luckor', 'rot-arbete', 'rot-tak']);
  assert.deepEqual(ok(K5).regler, ['bankskiva', 'spann', 'tillkommer', 'rot-villkor', 'rot-tak']);
  assert.deepEqual(ok(K7).regler, [
    'luckor-pris',
    'luckor-montering',
    'gangjarn',
    'bankskiva',
    'spann',
    'tillkommer',
    'rot-delat',
    'rot-villkor',
    'rot-tak',
  ]);
  assert.deepEqual(ok(K9).regler, ['bankskiva', 'nytt-enkel', 'flytt', 'spann', 'tillkommer', 'rot-arbete', 'rot-tak']);
  assert.ok(ok(K8).regler.includes('egen-insats'));
});

test('gör inte det här per väg', () => {
  assert.deepEqual(ok(K1).gorInteDetHar, ['rot-pa-allt', 'verkstad-rot']);
  assert.deepEqual(ok(K5).gorInteDetHar, ['rot-villkor']);
  assert.deepEqual(ok(K7).gorInteDetHar, ['rot-pa-allt', 'verkstad-rot']);
  assert.deepEqual(ok(K9).gorInteDetHar, ['rot-pa-allt', 'el-sjalv']);
  assert.deepEqual(ok(K10).gorInteDetHar, ['rot-pa-allt', 'el-sjalv', 'vvs-intyg']);
  assert.deepEqual(ok(K8).gorInteDetHar, ['rot-pa-allt', 'el-sjalv', 'riva-sjalv']);
});

test('antagandetabellen per väg, i tabellens ordning', () => {
  const nycklar = (i) => kokAntagandenFor(i).map((a) => a.nyckel);
  assert.deepEqual(nycklar(K1), [
    'lucka-pris',
    'gangjarn',
    'luckor-montering',
    'luckor-fast-max',
    'ej-med',
    'rot-procent',
    'rot-grans',
    'rut-skatt',
  ]);
  assert.ok(!nycklar(K2).includes('gangjarn'));
  assert.deepEqual(nycklar(K5).slice(0, 2), ['bankskiva-material', 'bankskiva-montering']);
  const nytt = nycklar(K10);
  for (const n of ['bankskiva-i-kok', 'stommar', 'stommar-modul', 'montering-kok', 'montering-storlek', 'vitvaror', 'rivning', 'el', 'vvs', 'el-vvs-arbete', 'ingen-dyr-niva']) {
    assert.ok(nytt.includes(n), n);
  }
  assert.ok(!nytt.includes('bankskiva-montering'));
  assert.ok(!nycklar(K9).includes('el-vvs-arbete'));
  const ordning = KOK_ANTAGANDEN.map((a) => a.nyckel);
  assert.deepEqual(
    nytt,
    ordning.filter((n) => nytt.includes(n)),
  );
  // Värdena byggs av konstanterna.
  const rad = (i, n) => kokAntagandenFor(i).find((a) => a.nyckel === n).varde;
  assert.equal(rad(K9, 'montering-kok'), `${nb('15 000 till 40 000')} kr`);
  assert.equal(rad(K1, 'luckor-montering'), `${nb('7 500')} kr`);
  assert.equal(rad(K1, 'rot-procent'), '30 procent');
});

test('källorna: finns, har https, ingen regel namnger en förmedlare, en källa per post', () => {
  for (const k of Object.values(KALLOR)) assert.ok(k.url.startsWith('https://'), k.kod);
  for (const a of KOK_ANTAGANDEN) {
    for (const k of a.kallor) assert.ok(k in KALLOR, `${a.nyckel}: ${k}`);
    if (a.typ === 'Källa') assert.ok(a.kallor.length > 0, `${a.nyckel} saknar källa`);
  }
  for (const n of Object.keys(KOK_TEXT.regel)) {
    for (const k of kokRegelKallor(n)) assert.notEqual(k.slag, 'förmedlare', `${n}: ${k.kod}`);
  }
  // En källa per post: varje prisrad av typen Källa pekar på exakt en utgivare,
  // utom gångjärnen, där priset är Vedums och antalet per lucka Ikeas.
  for (const a of KOK_ANTAGANDEN.filter((x) => x.typ === 'Källa' && x.nyckel !== 'gangjarn')) {
    assert.equal(a.kallor.length, 1, a.nyckel);
  }
  // Brödtextens Säker Vatten-stycke citerar Ifs villkor.
  assert.equal(KALLOR.IF.slag, 'försäkringsbolag');
  assert.match(KALLOR.IF.url, /if\.se\/.*villaforsakring-villkor\.pdf$/);
});

test('lucka-pris får prisgruppen som parameter', () => {
  assert.deepEqual(KOK_LUCKA_PRISGRUPP, { enkel: 1, mellan: 5, hog: 10 });
  assert.equal(KOK_TEXT.antagandeVarde['lucka-pris'].length, 2);
});

test('sidan: brödtextens källor står i listan, rotavdragslänken bara när arbetet ger avdrag', () => {
  const sida = readFileSync(SIDA, 'utf8');
  assert.match(sida, /BRODTEXT_KALLOR: KallKod\[\] = \['ELSAK-SJALV', 'SV', 'IF'\]/);
  assert.ok(sida.includes("harArbete && lage !== 'villkor' && ("));
});

test('sidan: källorna under reglerna går genom kokRegelKallor, UTKAST är false', () => {
  const sida = readFileSync(SIDA, 'utf8');
  assert.ok(sida.includes('kokRegelKallor(nyckel, visatIndata.vag)'));
  assert.match(sida, /const UTKAST = false;/);
  assert.match(sida, /\[&_td_span\]:whitespace-nowrap/);
});

/* ------------------------------------------------------------------ *
 * Samma tal på /kok/byta-bankskiva/ (checklistans tillägg 4)
 * ------------------------------------------------------------------ */

test('bänkskivans pris per löpmeter och montering står på /kok/byta-bankskiva/', { skip: !existsSync(BANKSKIVA) && 'sidan finns inte än' }, () => {
  const text = readFileSync(BANKSKIVA, 'utf8').replace(/[  ]/g, ' ');
  const spann = (s) => `${s[0].toLocaleString('sv-SE').replace(/\s/g, ' ')} till ${s[1].toLocaleString('sv-SE').replace(/\s/g, ' ')}`;
  for (const s of [...Object.values(KOK_BANKSKIVA_KR_PER_LM), KOK_BANKSKIVA_MONTERING_KR_PER_LM]) {
    assert.ok(text.includes(spann(s)), `${spann(s)} saknas på /kok/byta-bankskiva/`);
  }
});

/* ------------------------------------------------------------------ *
 * K10: rotavdraget per post, säkert för luckorna och ett villkor för
 * bänkskivan (checklistan kok-4, SEO:s kontroll punkt 1, och raknare.md
 * tillägg 2; specen K10, rättad 2026-09-29)
 * ------------------------------------------------------------------ */

const NOLLFALL = [
  { ...KOK_STANDARD, egen: ['montering'] },
  { ...KOK_STANDARD, vag: 'bankskiva', egen: ['montering'] },
  { ...KOK_STANDARD, vag: 'luckor-bankskiva', egen: ['montering'] },
  { ...KOK_STANDARD, vag: 'nytt', egen: ['montering', 'rivning'] },
];

test('K10: rotLage per väg', () => {
  for (const i of [K1, K2, K3, K3b, K4, K13, ...NOLLFALL]) assert.equal(ok(i).rotLage, 'saker', JSON.stringify(i));
  for (const i of [K5, K6]) assert.equal(ok(i).rotLage, 'villkor', JSON.stringify(i));
  assert.equal(ok(K7).rotLage, 'delat');
  for (const i of [K8, K9, K10, K11, K12, K15]) assert.equal(ok(i).rotLage, 'saker', JSON.stringify(i));
});

test('K10: säkert och villkorat arbete är tillsammans hela arbetet', () => {
  for (const i of [K1, K5, K7, K9, K13]) {
    const r = ok(i);
    for (const s of [r, r.hog]) assert.equal(s.arbeteSakertKr + s.arbeteVillkorKr, s.arbeteKr, JSON.stringify(i));
  }
  // Villkorat är bara bänkskivans montering utanför nytt kök.
  assert.deepEqual(kanter(ok(K5), 'arbeteVillkorKr'), [2000, 8000]);
  assert.deepEqual(kanter(ok(K7), 'arbeteVillkorKr'), [2000, 8000]);
  assert.deepEqual(kanter(ok(K9), 'arbeteVillkorKr'), [0, 0]);
});

test('K10: villkor är null när det villkorade arbetet är 0', () => {
  for (const i of [K1, K9, K10, K11, K12, K13, ...NOLLFALL]) {
    const r = ok(i);
    assert.equal(r.villkor, null, JSON.stringify(i));
    assert.equal(r.hog.villkor, null, JSON.stringify(i));
    const v = kokBeskedVarden(r, i);
    assert.equal(v.villkorRot, '');
    assert.equal(v.villkorAttBetala, '');
  }
  for (const i of [K5, K6, K7]) assert.notEqual(ok(i).villkor, null, JSON.stringify(i));
});

test('K10: svaret för luckor och nytt kök är som förut', () => {
  const r = ok(K1);
  assert.equal(r.foreRotKr, 19148);
  assert.equal(r.rotKr, 2250);
  assert.equal(r.attBetalaKr, 16898);
  for (const i of [K9, K10, K11, K12]) {
    const n = ok(i);
    assert.ok(n.regler.includes('rot-arbete') && !n.regler.includes('rot-villkor') && !n.regler.includes('rot-delat'));
    assert.equal(n.gorInteDetHar[0], 'rot-pa-allt');
  }
  assert.deepEqual(kanter(ok(K9), 'attBetalaKr'), [48460, 86960]);
});

test('K10: beskedvärdena för villkoret', () => {
  const v5 = kokBeskedVarden(ok(K5), K5);
  assert.equal(v5.rot, '0');
  assert.equal(v5.attBetala, v5.foreRot);
  assert.equal(v5.villkorRot, nb('600 till 2 400'));
  assert.equal(v5.villkorAttBetala, nb('3 400 till 11 600'));
  assert.equal(v5.arbeteSakert, '0');
  assert.equal(v5.arbeteVillkor, nb('2 000 till 8 000'));
  const v7 = kokBeskedVarden(ok(K7), K7);
  assert.equal(v7.rot, nb('2 250'));
  assert.equal(v7.attBetala, nb('20 898 till 30 898'));
  assert.equal(v7.arbeteSakert, nb('7 500'));
  assert.equal(v7.villkorAttBetala, nb('20 298 till 28 498'));
});

test('K10: regler och gör inte per läge, som tabellen', () => {
  const rot = (r) => r.regler.filter((n) => n.startsWith('rot-') && n !== 'rot-tak' && n !== 'rot-slog-i');
  assert.deepEqual(rot(ok(K1)), ['rot-luckor', 'rot-arbete']);
  assert.deepEqual(rot(ok(K5)), ['rot-villkor']);
  assert.deepEqual(rot(ok(K7)), ['rot-delat', 'rot-villkor']);
  assert.ok(ok(K1).gorInteDetHar.includes('rot-pa-allt'));
  assert.deepEqual(ok(K5).gorInteDetHar, ['rot-villkor']);
  assert.ok(ok(K7).gorInteDetHar.includes('rot-pa-allt') && !ok(K7).gorInteDetHar.includes('rot-villkor'));
  // rot-tak när något arbete finns, också bara villkorat.
  for (const i of [K1, K5, K7]) assert.ok(ok(i).regler.includes('rot-tak'), JSON.stringify(i));
  // Nollfallen: inget om rotavdraget under Gör inte.
  for (const i of NOLLFALL) {
    const g = ok(i).gorInteDetHar;
    assert.ok(!g.includes('rot-pa-allt') && !g.includes('rot-villkor'), JSON.stringify(i));
  }
});

test('K10: utfallet följer svarets rot', () => {
  // Bänkskivan med gränsen redan nådd: svaret har inget avdrag att begränsa.
  const r = ok({ ...K5, rotKr: KOK_GRANSER.rotKr[1] });
  assert.equal(r.utfall, 'belopp');
  assert.equal(r.hog.villkor.rotKr, 0);
  // Luckor och bänkskiva med gränsen nådd: luckornas avdrag begränsas.
  assert.equal(ok({ ...K7, rotKr: KOK_GRANSER.rotKr[1] }).utfall, 'tak');
});

test('K10: reglerna rot-villkor och rot-delat har Skatteverket som källa', () => {
  assert.deepEqual(KOK_TEXT.regel['rot-villkor'].kallor, ['SKV-ROT', 'SKV-RATT']);
  assert.deepEqual(KOK_TEXT.regel['rot-delat'].kallor, ['SKV-RATT', 'SKV-ROT']);
  for (const n of ['rot-villkor', 'rot-delat']) {
    for (const k of kokRegelKallor(n)) assert.equal(k.slag, 'myndighet');
  }
});

test('K10: texterna finns som strängar (TEXT SAKNAS tills hantverkaren skrivit dem)', () => {
  const v = kokBeskedVarden(ok(K7), K7);
  for (const [namn, t] of [
    ['beskedVillkor.rubrik', KOK_TEXT.beskedVillkor.rubrik(v)],
    ['beskedVillkor.rad', KOK_TEXT.beskedVillkor.rad(v)],
    ['spalt.etikett-villkor', KOK_TEXT.spalt['etikett-villkor']],
    ['spalt.rad-villkor', KOK_TEXT.spalt['rad-villkor'](v)],
    ['spalt.rad-villkor-delat', KOK_TEXT.spalt['rad-villkor-delat'](v)],
    ['darfor.rot-villkor', KOK_TEXT.darfor['rot-villkor'](v)],
    ['darfor.rot-delat', KOK_TEXT.darfor['rot-delat'](v)],
    ['regel.rot-villkor', KOK_TEXT.regel['rot-villkor'].text(v)],
    ['regel.rot-delat', KOK_TEXT.regel['rot-delat'].text(v)],
    ['gorInte.rot-villkor', KOK_TEXT.gorInte['rot-villkor']],
  ]) {
    assert.equal(typeof t, 'string', namn);
    assert.ok(t.length > 0, namn);
  }
});

test('K10: beskedVillkor.rubrik bär foreRot och spalt.rad-villkor bär villkorRot och villkorAttBetala', () => {
  const v = kokBeskedVarden(ok(K5), K5);
  assert.ok(KOK_TEXT.beskedVillkor.rubrik(v).includes(v.foreRot));
  const rad = KOK_TEXT.spalt['rad-villkor'](v);
  assert.ok(rad.includes(v.villkorRot) && rad.includes(v.villkorAttBetala));
  assert.match(rad, /Skatteverket/);
  const darfor = KOK_TEXT.darfor['rot-villkor'](v);
  assert.ok(darfor.includes(v.villkorRot) && darfor.includes(v.villkorAttBetala));
});

test('K10: sidan visar lägena och länkar till /kok/byta-bankskiva/', () => {
  const sida = readFileSync(SIDA, 'utf8');
  for (const s of [
    'visat.rotLage',
    'T.beskedVillkor',
    "T.spalt['etikett-villkor']",
    "T.spalt['rad-villkor'](bv)",
    "T.spalt['rad-villkor-delat'](bv)",
    "T.darfor['rot-villkor'](bv)",
    "T.darfor['rot-delat'](bv)",
    "href: '/kok/byta-bankskiva/'",
  ]) {
    assert.ok(sida.includes(s), s);
  }
  assert.ok(!sida.includes('rotVillkor'), 'rotVillkor');
});

/* ------------------------------------------------------------------ *
 * Granskningen 2026-09-29: länken, skissen, källan och regeln för luckorna
 * ------------------------------------------------------------------ */

test('granskningen: rot-luckor bara på vägen luckor med arbete, med Skatteverket som källa', () => {
  assert.ok(ok(K1).regler.includes('rot-luckor'));
  for (const i of [K5, K7, K9, K13]) assert.ok(!ok(i).regler.includes('rot-luckor'), JSON.stringify(i));
  assert.deepEqual(KOK_TEXT.regel['rot-luckor'].kallor, ['SKV-RATT']);
  assert.ok(KOK_TEXT.regel['rot-luckor'].text(kokBeskedVarden(ok(K1), K1)).length > 0);
});

test('granskningen: tillkommer har rätt källa per väg, ingen för bänkskivan', () => {
  const koder = (vag) => kokRegelKallor('tillkommer', vag).map((k) => k.kod);
  assert.deepEqual(koder('luckor'), ['VED']);
  assert.deepEqual(koder('luckor-bankskiva'), ['VED']);
  assert.deepEqual(koder('bankskiva'), []);
  assert.deepEqual(koder('nytt'), ['IKEA']);
});

test('granskningen: skissen bara på vägen luckor', () => {
  const sida = readFileSync(SIDA, 'utf8');
  assert.match(sida, /varumarke && illustration && visatIndata\.vag === 'luckor' && \(/);
});
