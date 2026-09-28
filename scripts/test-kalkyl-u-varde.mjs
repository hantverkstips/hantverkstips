/**
 * Kör U-värdesräknaren mot underlagets räkneexempel och specens facit
 * (docs/briefer/spec-kalkyl-u-varde-2026-09-24.md avsnitt 6), och mot de två
 * publicerade sidorna /el/u-varde/ och /el/tillaggsisolera-vind/, som läses
 * från disk. Samma tal ska komma ut ur formeln som står i artiklarna.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-u-varde.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { ELPRIS_KR_PER_KWH } from '../src/lib/antaganden.ts';
import {
  ANTAGANDEN,
  antagandenFor,
  avrundaU,
  BOVERKET,
  beskedKontext,
  beskedVarden,
  besparingKwh,
  bytLageQuery,
  delbarQuery,
  endecimal,
  extraForGrans,
  FLEXIBATTS_GRANS_MM,
  GRADTIMMAR,
  GRANSER,
  heltal,
  LAMBDA_REGEL,
  MATERIAL,
  MATERIAL_GRUPPER,
  MATERIAL_ORDNING,
  materialprisKrM2Mm,
  PRIS_FLEXIBATTS_45_KR_M2_MM,
  PRIS_FLEXIBATTS_95_KR_M2_MM,
  PRIS_VINDSULL_KR_M2_MM,
  raknaUVarde,
  REGELANDEL,
  RSE,
  RSE_LUFTSPALT,
  RSI,
  STANDARD,
  STANDARD_PER_DEL,
  STANDARD_SKIKT_PER_DEL,
  TEXT,
  tolkaQuery,
  treDecimaler,
  uForSkikt,
  uText,
  VP_TYPER,
} from '../src/lib/kalkyl/u-varde.ts';

const ROT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MODUL = join(ROT, 'src', 'lib', 'kalkyl', 'u-varde.ts');
const ARTIKEL = join(ROT, 'src', 'content', 'kunskap', 'el', 'u-varde.mdx');
const VINDGUIDE = join(ROT, 'src', 'content', 'guider', 'el', 'tillaggsisolera-vind.mdx');

/* Toleranserna i specen avsnitt 6. */
function uNara(fick, vantat, vad) {
  assert.ok(Math.abs(fick - vantat) <= 0.0005, `${vad}: fick ${fick}, väntade ${vantat} ± 0,0005`);
}
function nara(fick, vantat, tol, vad) {
  assert.ok(Math.abs(fick - vantat) <= tol, `${vad}: fick ${fick}, väntade ${vantat} ± ${tol}`);
}
const kwhNara = (f, v, vad) => nara(f, v, 0.5, vad);
const krNara = (f, v, vad) => nara(f, v, 0.5, vad);
const arNara = (f, v, vad) => nara(f, v, 0.05, vad);
const rNara = (f, v, vad) => nara(f, v, 0.0005, vad);

function ok(indata) {
  const r = raknaUVarde(indata);
  assert.equal(r.status, 'ok', `väntade ok, fick ${JSON.stringify(r)}`);
  return r;
}

/* Byggstenar för fallen. */
const skikt = (rad, material, tjocklekMm, reglar = false) => ({ rad, material, tjocklekMm, reglar });
const tillagg = (rad, material, tjocklekMm) => ({ rad, material, tjocklekMm });
/* Skikten följer delen (specen 12.30), så att rundturen genom adressen ger samma objekt. */
const uvarde = (del, uFore, uEfter, ytaM2 = 100, region = 'mitt') => ({
  ...STANDARD,
  ...(STANDARD_SKIKT_PER_DEL[del] ?? {}),
  lage: 'uvarde',
  del,
  uFore,
  uEfter,
  ytaM2,
  region,
});

/* Alla kontexter raden under beskedet kan få (specen 12.28). */
const LAGEN = ['skikt', 'uvarde'];
const DELAR = ['vagg', 'tak', 'golv', 'fonster', 'dorr'];
const BESKEDEN = ['bara-u-klarar', 'bara-u-over', 'ingen-forbattring', 'klarar', 'klarar-gamla', 'battre-men-over'];
const ALLA_KONTEXTER = LAGEN.flatMap((lage) =>
  DELAR.flatMap((del) =>
    [true, false].flatMap((klaradeFore) =>
      [true, false].map((aterbetalning) => ({
        lage,
        del,
        klaradeFore,
        harTillagg: lage === 'skikt',
        aterbetalning,
        aterbetalningSaknas: aterbetalning
          ? null
          : lage === 'uvarde'
            ? 'uvarde-lage'
            : del === 'vagg' || del === 'golv'
              ? 'bara-vind'
              : 'inget-pris',
      })),
    ),
  ),
);
const KONTEXT_EXEMPEL = ALLA_KONTEXTER[0];
const PLATSHALLARE = 'TEXT SAKNAS';

/*
 * Sjuttiotalsväggen i /el/u-varde/, som var standardvärdena fram till specen
 * 12.18: gips 13, Flexibatts 120 mellan reglar, ventilerad luftspalt, panel 22,
 * och 50 mm Flexibatts som tillägg, 100 m² i Mellansverige.
 */
const VAGG_EXEMPEL = {
  lage: 'skikt',
  del: 'vagg',
  ytaM2: 100,
  region: 'mitt',
  skikt: [
    skikt(1, 'gips', 13),
    skikt(2, 'stenull-flexibatts', 120, true),
    skikt(3, 'luftspalt', NaN),
    skikt(4, 'tra', 22),
  ],
  tillagg: [tillagg(1, 'stenull-flexibatts', 50)],
  /* Läses inte i skiktläget. Väggens standard (specen 12.27), så att rundturen genom adressen ger samma objekt. */
  uFore: STANDARD_PER_DEL.vagg.uFore,
  uEfter: STANDARD_PER_DEL.vagg.uEfter,
};

// ---------------------------------------------------------------------------
// 6.1 Fallen

test('fall 1: artikelns vägg utan tillägg ger 0,357 och inget att spara', () => {
  const r = ok({ ...VAGG_EXEMPEL, tillagg: [] });
  uNara(r.uFore, 0.35689, 'uFore');
  assert.equal(treDecimaler(r.uFore), '0,357');
  assert.equal(r.uEfter, null);
  assert.equal(r.uSlut, r.uFore);
  assert.equal(r.besked, 'bara-u-over');
  assert.equal(r.besparing, null);
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'ingen-besparing');
  rNara(r.detaljer.fore.rOvre, 2.85861, 'rOvre');
  rNara(r.detaljer.fore.rUndre, 2.74528, 'rUndre');
  rNara(r.detaljer.fore.rTotal, 2.80195, 'rTotal');
  assert.equal(r.detaljer.fore.rse, 0.13);
  assert.equal(r.detaljer.efter, null);
  /* Specen 12.20: utan valt tillägg är förslaget märkeslöst. */
  assert.deepEqual(r.saknas, { mm: 120, material: 'mineralull-okand', grans: 0.18 });
  uNara(ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'mineralull-okand', 120)] }).uEfter, 0.17851, 'U med förslaget');
});

test('fall 2: väggexemplet, 50 mm Flexibatts på insidan ger 0,235', () => {
  const r = ok(VAGG_EXEMPEL);
  uNara(r.uFore, 0.35689, 'uFore');
  uNara(r.uEfter, 0.23516, 'uEfter');
  assert.equal(treDecimaler(r.uEfter), '0,235');
  rNara(r.detaljer.efter.rTotal, 4.25251, 'rTotal efter');
  rNara(r.detaljer.efter.rOvre, 4.40839, 'rOvre efter');
  rNara(r.detaljer.efter.rUndre, 4.09664, 'rUndre efter');
  assert.equal(r.besked, 'battre-men-over');
  kwhNara(r.besparing.kwhPerAr, 1086.89, 'kWh');
  krNara(r.besparing.krPerAr, 2608.54, 'kr');
  /* Specen 12.45: väggen får ingen återbetalningstid. Skivpriset räknas ändå som i underlaget. */
  krNara(100 * 50 * materialprisKrM2Mm('stenull-flexibatts', 50), 4994.44, 'kostnad');
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'bara-vind');
  assert.deepEqual(r.gorInteDetHar, ['inifran-utan-daggpunkt', 'glom-termostaten']);
  const ll = r.besparing.varmepump[0];
  assert.equal(ll.typ, 'luft-luft');
  krNara(ll.krMin, 521.71, 'luft-luft min');
  krNara(ll.krMax, 745.3, 'luft-luft max');
  /* Specen 12.46: 50 + 50 räcker, men 100 mm skiva finns inte; 135 är den minsta summa av 45 och 95 som når kravet. */
  assert.deepEqual(r.saknas, { mm: 85, material: 'stenull-flexibatts', grans: 0.18 });
});

test('12.9: 50 mm Flexibatts till på väggexemplet ger 0,17735', () => {
  const r = ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'stenull-flexibatts', 100)] });
  uNara(r.uEfter, 0.17735, 'uEfter');
  const f = r.detaljer.fore;
  const lambda = MATERIAL['stenull-flexibatts'].lambda;
  const homogena = 0.013 / 0.24 + 0.05 / lambda;
  assert.equal(extraForGrans(f.rsi, f.rse, homogena, { tjocklekMm: 120, lambda }, lambda, 0.18, 'vagg'), 50);
  assert.equal(extraForGrans(f.rsi, f.rse, homogena, { tjocklekMm: 120, lambda }, lambda, 0.001, 'vagg'), null);
});

test('fall 3: artikelns fasad 0,40 till 0,18 på 100 m²', () => {
  const r = ok(uvarde('vagg', 0.4, 0.18));
  kwhNara(r.besparing.kwhPerAr, 1964.16, 'kWh');
  krNara(r.besparing.krPerAr, 4713.98, 'kr');
  assert.equal(r.besked, 'klarar');
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'uvarde-lage');
  assert.equal(r.detaljer, null);
  assert.equal(r.saknas, null);
});

test('fall 4a: vinden 0,184 till 0,078, Mellansverige, med värmepumparna', () => {
  const r = ok(uvarde('tak', 0.184, 0.078));
  kwhNara(r.besparing.kwhPerAr, 946.37, 'kWh');
  krNara(r.besparing.krPerAr, 2271.28, 'kr');
  assert.equal(r.besked, 'klarar');
  const vantat = {
    'luft-luft': [454.26, 648.94],
    'luft-vatten': [504.73, 757.09],
    'jord-sjo': [454.26, 567.82],
    berg: [412.96, 567.82],
    franluft: [567.82, 908.51],
  };
  assert.deepEqual(
    r.besparing.varmepump.map((v) => v.typ),
    ['luft-luft', 'luft-vatten', 'jord-sjo', 'berg', 'franluft'],
  );
  for (const v of r.besparing.varmepump) {
    krNara(v.krMin, vantat[v.typ][0], `${v.typ} min`);
    krNara(v.krMax, vantat[v.typ][1], `${v.typ} max`);
  }
});

test('fall 4b och 4c: samma vind i söder och norr', () => {
  const syd = ok(uvarde('tak', 0.184, 0.078, 100, 'syd'));
  kwhNara(syd.besparing.kwhPerAr, 757.09, 'kWh syd');
  krNara(syd.besparing.krPerAr, 1817.03, 'kr syd');
  const norr = ok(uvarde('tak', 0.184, 0.078, 100, 'norr'));
  kwhNara(norr.besparing.kwhPerAr, 1277.6, 'kWh norr');
  krNara(norr.besparing.krPerAr, 3066.23, 'kr norr');
});

test('fall 5: vinden 0,357 till 0,099 i alla tre delarna av landet', () => {
  const facit = { mitt: [2303.42, 5528.22], syd: [1842.74, 4422.57], norr: [3109.62, 7463.09] };
  for (const [region, [kwh, kr]] of Object.entries(facit)) {
    const r = ok(uvarde('tak', 0.357, 0.099, 100, region));
    kwhNara(r.besparing.kwhPerAr, kwh, `kWh ${region}`);
    krNara(r.besparing.krPerAr, kr, `kr ${region}`);
  }
});

const FALL_6A = {
  ...VAGG_EXEMPEL,
  del: 'tak',
  /* Läses inte i skiktläget. Vindens standard, så att rundturen genom adressen ger samma objekt. */
  uFore: STANDARD_PER_DEL.tak.uFore,
  uEfter: STANDARD_PER_DEL.tak.uEfter,
  skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 200)],
  tillagg: [tillagg(1, 'stenull-vindsull', 300)],
};

test('fall 6a: skiktläge, vind med 300 mm Vindsull', () => {
  const r = ok(FALL_6A);
  uNara(r.uFore, 0.17859, 'uFore');
  uNara(r.uEfter, 0.07848, 'uEfter');
  kwhNara(r.besparing.kwhPerAr, 893.76, 'kWh');
  krNara(r.besparing.krPerAr, 2145.01, 'kr');
  krNara(r.aterbetalning.kostnadKr, 25137, 'kostnad');
  arNara(r.aterbetalning.ar, 11.7, 'år');
  assert.equal(r.besked, 'klarar');
  assert.equal(r.detaljer.fore.rsi, 0.1);
  assert.equal(r.detaljer.fore.rse, 0.04);
  assert.ok(r.regler.includes('tak-kallvind'));
  assert.ok(r.regler.includes('aterbetalning-bara-ull'));
  assert.equal(r.saknas, null);
});

test('fall 6b: samma med Granulate, som saknar pris', () => {
  const r = ok({ ...FALL_6A, tillagg: [tillagg(1, 'stenull-granulate', 300)] });
  uNara(r.uEfter, 0.07742, 'uEfter');
  kwhNara(r.besparing.kwhPerAr, 903.21, 'kWh');
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'inget-pris');
  assert.ok(!r.regler.includes('aterbetalning-bara-ull'));
});

test('fall 7a: fönstret 2,8 till 0,9 på 1,5 m²', () => {
  const r = ok(uvarde('fonster', 2.8, 0.9, 1.5));
  kwhNara(r.besparing.kwhPerAr, 254.45, 'kWh');
  krNara(r.besparing.krPerAr, 610.68, 'kr');
  assert.equal(r.besked, 'klarar');
  assert.ok(r.gorInteDetHar.includes('ug-mot-kravet'));
  assert.ok(r.regler.includes('fonster-uw'));
});

test('fall 7b: Energimyndighetens fönster, U 1,0 på 1,5 m²', () => {
  nara(besparingKwh(1.0, 1.5, 'mitt'), 133.92, 0.5, 'kWh');
});

test('fall 7c: fönstret 1,15 klarar det gamla talet men inte det nya', () => {
  const r = ok(uvarde('fonster', 2.8, 1.15, 1.5));
  assert.equal(r.besked, 'klarar-gamla');
  assert.deepEqual(
    r.jamforelse.map((j) => j.klarar),
    [true, false],
  );
  assert.deepEqual(
    r.jamforelse.map((j) => j.kolumn),
    ['till-2026-09-30', 'fran-2026-10-01'],
  );
});

test('12.3: fönstret jämförs med två decimaler, som det visas', () => {
  assert.equal(ok(uvarde('fonster', 2.8, 1.104, 1.5)).besked, 'klarar');
  assert.equal(ok(uvarde('fonster', 2.8, 1.106, 1.5)).besked, 'klarar-gamla');
  assert.equal(uText(1.15, 'fonster'), '1,15');
  assert.equal(uText(2.8, 'fonster'), '2,80');
  assert.equal(uText(0.35689, 'vagg'), '0,357');
  assert.equal(uText(0.4, 'vagg'), '0,400');
  assert.equal(avrundaU(1.106, 'dorr'), 1.11);
});

test('fall 8: golvet med 50 mm Flexibatts', () => {
  const r = ok({
    ...VAGG_EXEMPEL,
    del: 'golv',
    ytaM2: 80,
    skikt: [skikt(1, 'tra', 22), skikt(2, 'stenull-flexibatts', 145)],
    tillagg: [tillagg(1, 'stenull-flexibatts', 50)],
  });
  uNara(r.uFore, 0.23331, 'uFore');
  uNara(r.uEfter, 0.17739, 'uEfter');
  kwhNara(r.besparing.kwhPerAr, 399.46, 'kWh');
  krNara(r.besparing.krPerAr, 958.71, 'kr');
  /* Specen 12.45: golvet får ingen återbetalningstid. Skivpriset räknas ändå som i underlaget. */
  krNara(80 * 50 * materialprisKrM2Mm('stenull-flexibatts', 50), 3995.56, 'kostnad');
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'bara-vind');
  assert.equal(r.besked, 'battre-men-over');
  assert.equal(r.detaljer.fore.rsi, 0.17);
  assert.ok(r.regler.includes('golv-uteluft'));
  /* Specen 12.46: totalen 90 mm är två skivor på 45. */
  assert.equal(r.saknas?.mm, 40);
  assert.equal(r.saknas?.grans, 0.15);
  assert.equal(beskedVarden(r).mmTotalt, '90');
});

const VAGG_9 = {
  ...VAGG_EXEMPEL,
  tillagg: [],
  skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 120), skikt(3, 'luftspalt', NaN), skikt(4, 'tra', 22)],
};

test('fall 9a: luftspalten slår bort panelen och byter Rse', () => {
  const r = ok(VAGG_9);
  uNara(r.uFore, 0.2811, 'U');
  assert.equal(r.detaljer.fore.rse, 0.13);
  const tra = r.detaljer.rader.find((x) => x.material === 'tra');
  assert.equal(tra.raknas, false);
  const luft = r.detaljer.rader.find((x) => x.material === 'luftspalt');
  assert.equal(luft.raknas, false);
  assert.equal(luft.r, null);
  assert.ok(r.regler.includes('luftspalt'));
  assert.ok(!r.regler.includes('reglar'));
});

test('fall 9b: samma utan panelen ger exakt samma U', () => {
  const a = ok(VAGG_9);
  const b = ok({ ...VAGG_9, skikt: VAGG_9.skikt.slice(0, 3) });
  assert.equal(b.uFore, a.uFore);
});

test('fall 9c: utan luftspalt räknas panelen och Rse är 0,04', () => {
  const r = ok({ ...VAGG_9, skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 120), skikt(3, 'tra', 22)] });
  uNara(r.uFore, 0.2759, 'U');
  assert.equal(r.detaljer.fore.rse, 0.04);
});

test('fall 10: U efter högre än före ger ingen besparing', () => {
  const r = ok(uvarde('tak', 0.078, 0.184));
  assert.equal(r.besked, 'ingen-forbattring');
  assert.equal(r.besparing, null);
  assert.equal(r.aterbetalningSaknas, 'ingen-besparing');
  assert.ok(!r.gorInteDetHar.includes('glom-termostaten'));
  assert.ok(!r.regler.includes('gradtimmar'));
  assert.equal(r.saknas, null);
});

test('fall 11: gips 12,5 ur adressen', () => {
  const { indata } = tolkaQuery(new URLSearchParams('del=vagg&m1=gips&d1=12,5&m2=stenull-flexibatts&d2=120&tm1='));
  assert.equal(indata.skikt[0].tjocklekMm, 12.5);
  const r = ok(indata);
  uNara(r.uFore, 0.28857, 'U');
});

test('fall 12: 95 mm Flexibatts räknas med 95-priset', () => {
  const r = ok({
    ...VAGG_EXEMPEL,
    ytaM2: 20,
    skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 95)],
    tillagg: [tillagg(1, 'stenull-flexibatts', 95)],
  });
  uNara(r.uFore, 0.3582, 'uFore');
  uNara(r.uEfter, 0.18659, 'uEfter');
  kwhNara(r.besparing.kwhPerAr, 306.42, 'kWh');
  krNara(r.besparing.krPerAr, 735.42, 'kr');
  /* Specen 12.45: väggen får ingen återbetalningstid; 95-priset prövas direkt och på vinden. */
  assert.equal(r.aterbetalning, null);
  krNara(20 * 95 * materialprisKrM2Mm('stenull-flexibatts', 95), 1699.0, 'kostnad');
  const vind = ok({ ...FALL_6A, ytaM2: 20, tillagg: [tillagg(1, 'stenull-flexibatts', 95)] });
  krNara(vind.aterbetalning.kostnadKr, 1699.0, 'kostnad på vinden');
});

test('fall 13: Paroc saknar pris', () => {
  /* På vinden, eftersom vägg och golv aldrig får återbetalningstid (specen 12.45). */
  const r = ok({ ...FALL_6A, tillagg: [tillagg(1, 'stenull-paroc', 50)] });
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'inget-pris');
  assert.equal(ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'stenull-paroc', 50)] }).aterbetalningSaknas, 'bara-vind');
});

test('bara-u-klarar: en vind som redan klarar', () => {
  const r = ok({ ...FALL_6A, tillagg: [], skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 500)] });
  assert.equal(r.besked, 'bara-u-klarar');
  assert.equal(r.besparing, null);
});

// ---------------------------------------------------------------------------
// 6.2 Ogiltigt

function felNycklar(indata) {
  const r = raknaUVarde(indata);
  assert.equal(r.status, 'ogiltig');
  for (const v of Object.values(r.fel)) assert.ok(typeof v === 'string' && v.length > 0);
  return Object.keys(r.fel).sort();
}
const BAS = { ...VAGG_EXEMPEL, tillagg: [], skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 120)] };

test('ogiltigt: tjocklek 700 och 5 ger fel på raden', () => {
  assert.deepEqual(felNycklar({ ...BAS, skikt: [skikt(1, 'gips', 13), skikt(2, 'stenull-flexibatts', 700)] }), ['s2']);
  assert.deepEqual(felNycklar({ ...BAS, skikt: [skikt(1, 'gips', 5), skikt(2, 'stenull-flexibatts', 120)] }), ['s1']);
});

test('ogiltigt: sju skikt och inga skikt', () => {
  const sju = Array.from({ length: 7 }, (_, i) => skikt(i + 1, 'gips', 13));
  assert.deepEqual(felNycklar({ ...BAS, skikt: sju }), ['skikt']);
  assert.deepEqual(felNycklar({ ...BAS, skikt: [] }), ['skikt']);
});

test('ogiltigt: yta 0, 600 och NaN', () => {
  for (const yta of [0, 600, NaN]) assert.deepEqual(felNycklar({ ...BAS, ytaM2: yta }), ['yta']);
});

test('ogiltigt: luftspalterna', () => {
  assert.deepEqual(
    felNycklar({
      ...BAS,
      skikt: [skikt(1, 'gips', 13), skikt(2, 'luftspalt', NaN), skikt(3, 'luftspalt', NaN)],
    }),
    ['skikt'],
  );
  assert.deepEqual(
    felNycklar({ ...BAS, del: 'tak', skikt: [skikt(1, 'gips', 13), skikt(2, 'luftspalt', NaN)] }),
    ['s2'],
  );
  assert.deepEqual(felNycklar({ ...BAS, skikt: [skikt(1, 'luftspalt', NaN), skikt(2, 'gips', 13)] }), ['skikt']);
});

test('ogiltigt: reglarna väljs bara på isolering och på en rad som finns (12.12)', () => {
  const ur = (adress) => tolkaQuery(new URLSearchParams(adress)).indata;
  const rg2 = ur('m1=gips&d1=13&m2=stenull-flexibatts&d2=120&rg=2');
  assert.deepEqual(
    rg2.skikt.map((s) => s.reglar),
    [false, true],
  );
  ok(rg2);
  assert.deepEqual(felNycklar(ur('m1=gips&d1=13&m2=stenull-flexibatts&d2=120&rg=1')), ['reglar']);
  assert.deepEqual(felNycklar(ur('del=vagg&m1=gips&d1=13&m2=stenull-flexibatts&d2=120&m3=luftspalt&rg=3')), ['reglar']);
  const rg5 = ur('m1=gips&d1=13&m2=stenull-flexibatts&d2=120&rg=5');
  assert.equal(rg5.reglarPaTomRad, 5);
  assert.ok(rg5.skikt.every((s) => !s.reglar));
  assert.deepEqual(felNycklar(rg5), ['reglar']);
  // Utan rg har inget skikt reglar, och tomt rg betyder detsamma.
  assert.ok(ur('m1=gips&d1=13&m2=stenull-flexibatts&d2=120').skikt.every((s) => !s.reglar));
  assert.ok(ur('rg=').skikt.every((s) => !s.reglar));
  // rg utan skikt i adressen flyttar reglarna i standardskikten.
  assert.deepEqual(
    ur('rg=2').skikt,
    STANDARD.skikt.map((s) => ({ ...s, reglar: s.rad === 2 })),
  );
  // r1 till r6 läses inte längre.
  assert.ok(ur('m1=gips&d1=13&m2=stenull-flexibatts&d2=120&r2=1').skikt.every((s) => !s.reglar));
  // Mineralull utan märke är isolering.
  ok(ur('m1=gips&d1=13&m2=mineralull-okand&d2=120&rg=2'));
});

test('ogiltigt: okänt material, fönster i skiktläget, tilläggen', () => {
  assert.deepEqual(felNycklar({ ...BAS, skikt: [skikt(1, null, 13)] }), ['s1']);
  assert.deepEqual(felNycklar({ ...BAS, del: 'fonster' }), ['del']);
  const tre = [tillagg(1, 'eps', 50), tillagg(2, 'eps', 50), tillagg(3, 'eps', 50)];
  assert.deepEqual(felNycklar({ ...BAS, tillagg: tre }), ['tillagg']);
  assert.deepEqual(felNycklar({ ...BAS, tillagg: [tillagg(1, 'eps', 5)] }), ['t1']);
});

test('ogiltigt: U-värdena i läget uvarde, gränserna inklusive', () => {
  assert.deepEqual(felNycklar(uvarde('vagg', 3.5, 0.18)), ['uFore']);
  assert.deepEqual(felNycklar(uvarde('fonster', 2.8, 0.4)), ['uEfter']);
  ok(uvarde('fonster', 6.0, 0.5));
  // Skikten valideras inte i läget uvarde.
  ok({ ...uvarde('vagg', 0.4, 0.18), skikt: [], tillagg: [tillagg(1, 'eps', 5)] });
});

test('ogiltigt: flera fel samtidigt', () => {
  assert.deepEqual(felNycklar({ ...BAS, ytaM2: 0, skikt: [skikt(1, 'gips', 5)] }), ['s1', 'yta']);
});

// ---------------------------------------------------------------------------
// 6.3 Artikeln och vindguiden som facit

const artikel = readFileSync(ARTIKEL, 'utf8');
const vindguide = readFileSync(VINDGUIDE, 'utf8');

/** Raderna i tabellen som börjar med rubrikraden `rubrik`. */
function tabell(text, rubrik) {
  const rader = text.split(/\r?\n/);
  const start = rader.findIndex((r) => r.trim().startsWith(rubrik));
  assert.ok(start >= 0, `hittade inte tabellen ${rubrik}`);
  const ut = [];
  for (let i = start + 2; i < rader.length && rader[i].trim().startsWith('|'); i++) {
    ut.push(
      rader[i]
        .trim()
        .replace(/^\||\|$/g, '')
        .split('|')
        .map((c) => c.trim()),
    );
  }
  return ut;
}
const tal = (s) => Number(s.replace(/\s/g, '').replace(',', '.'));

test('artikeln: lambdatabellen har samma λ som räknaren', () => {
  const rader = tabell(artikel, '| Material | λ, W/mK |');
  assert.ok(rader.length >= 11);
  for (const [namn, varde] of rader) {
    const delar = varde.split(' till ');
    const lambda = tal(delar[delar.length - 1]);
    const traff = MATERIAL_ORDNING.find((m) => MATERIAL[m].etikett === namn);
    if (traff) assert.equal(MATERIAL[traff].lambda, lambda, namn);
    assert.ok(
      MATERIAL_ORDNING.some((m) => MATERIAL[m].lambda === lambda),
      `${namn}: inget material med λ ${lambda}`,
    );
  }
});

/* Rättning 2 är gjord i artikeln 2026-09-24, så testet är ett vanligt test. */
test('artikeln: Vindsull står i lambdatabellen', () => {
  const rader = tabell(artikel, '| Material | λ, W/mK |');
  const rad = rader.find(([namn]) => namn === MATERIAL['stenull-vindsull'].etikett);
  assert.ok(rad);
  assert.equal(tal(rad[1]), 0.042);
});

/* Rättning 3 är gjord i artikeln 2026-09-24, så testet är ett vanligt test. */
test('artikeln: mineralull utan märke står i lambdatabellen', () => {
  const rader = tabell(artikel, '| Material | λ, W/mK |');
  const rad = rader.find(([namn]) => namn === MATERIAL['mineralull-okand'].etikett);
  assert.ok(rad);
  assert.equal(tal(rad[1]), 0.045);
});

test('artikeln: Boverkstabellen är BOVERKET', () => {
  const nyckel = { Tak: 'tak', Vägg: 'vagg', Golv: 'golv', Fönster: 'fonster', Ytterdörr: 'dorr' };
  const rader = tabell(artikel, '| Byggnadsdel | Till och med 30 september 2026');
  assert.equal(rader.length, 5);
  for (const [del, fore, efter] of rader) {
    assert.equal(tal(fore), BOVERKET['till-2026-09-30'][nyckel[del]], del);
    assert.equal(tal(efter), BOVERKET['fran-2026-10-01'][nyckel[del]], del);
  }
});

test('artikeln: gradtimmarna för Mellansverige', () => {
  const rader = tabell(artikel, '| Del av landet | Gradtimmar per år');
  const mitt = rader.find(([namn]) => namn.startsWith('Mellansverige'));
  assert.equal(mitt[1], heltal(GRADTIMMAR.mitt));
  assert.equal(heltal(GRADTIMMAR.mitt), '89 280');
});

test('artikeln: stegen, fasaden och fönstret', () => {
  assert.ok(artikel.includes(`blir 1 delat med 3,557, det vill säga ${treDecimaler(ok(VAGG_9).uFore)}`));
  assert.ok(artikel.includes(`det vill säga ${treDecimaler(ok({ ...VAGG_EXEMPEL, tillagg: [] }).uFore)}`));
  assert.ok(artikel.includes(`${heltal(ok(uvarde('vagg', 0.4, 0.18)).besparing.kwhPerAr)} kilowattimmar om året`));
  assert.ok(artikel.includes(`mot ${heltal(besparingKwh(1.0, 1.5, 'mitt'))} med gradtimmarna`));
});

test('artikeln: meningen om 50 mm på insidan säger fall 2 avrundat', () => {
  const mening = artikel.split(/\r?\n/).find((r) => r.startsWith('Ett lager på 50 mm ull på insidan'));
  assert.ok(mening);
  const tva = ok(VAGG_EXEMPEL).uEfter.toFixed(2).replace('.', ',');
  assert.ok(mening.includes(tva), `väntade ${tva} i meningen`);
  const tre = treDecimaler(ok(VAGG_EXEMPEL).uEfter);
  assert.ok(mening.includes(`det vill säga ${tre}`), `väntade ${tre} i meningen`);
});

/* Rättning 1 är gjord i artikeln 2026-09-24, så testet är ett vanligt test. */
test('artikeln: summan 4,151 är borta', () => {
  assert.ok(!artikel.includes('4,151'));
});

test('vindguiden: Rockwoolraderna ger fall 4a och 5', () => {
  const rader = tabell(vindguide, '| Ligger där nu, mm |');
  const tvaHundra = rader.find(([namn]) => namn === 'mineralull 200');
  const hundra = rader.find(([namn]) => namn === 'mineralull 100');
  const a = ok(uvarde('tak', tal(tvaHundra[1]), tal(tvaHundra[2])));
  const b = ok(uvarde('tak', tal(hundra[1]), tal(hundra[2])));
  kwhNara(a.besparing.kwhPerAr, 946.37, 'fall 4a');
  kwhNara(b.besparing.kwhPerAr, 2303.42, 'fall 5');
  const tiotal = Math.round(a.besparing.kwhPerAr / 10) * 10;
  assert.ok(vindguide.includes(`${tiotal} kilowattimmar om året`), `${tiotal} kilowattimmar`);
  const hundratal = heltal(Math.floor(b.besparing.kwhPerAr / 100) * 100);
  assert.ok(vindguide.includes(`drygt ${hundratal} kilowattimmar`), `drygt ${hundratal}`);
});

// ---------------------------------------------------------------------------
// 6.4 Övrigt

test('konstanterna mot underlaget', () => {
  assert.deepEqual({ ...RSI }, { vagg: 0.13, tak: 0.1, golv: 0.17 });
  assert.equal(RSE, 0.04);
  assert.equal(RSE_LUFTSPALT, 0.13);
  assert.equal(REGELANDEL, 0.12);
  assert.equal(LAMBDA_REGEL, 0.14);
  const lambda = Object.fromEntries(MATERIAL_ORDNING.map((m) => [m, MATERIAL[m].lambda]));
  assert.deepEqual(lambda, {
    'mineralull-okand': 0.045,
    'stenull-paroc': 0.036,
    'stenull-flexibatts': 0.037,
    'stenull-granulate': 0.041,
    'stenull-vindsull': 0.042,
    'glasull-fyllupp': 0.045,
    cellulosa: 0.04,
    'cellplast-okand': 0.038,
    eps: 0.038,
    pir: 0.022,
    tra: 0.14,
    gips: 0.24,
    lattbetong: 0.14,
    betong: 1.7,
    luftspalt: null,
  });
  nara(GRADTIMMAR.mitt, 89280, 1e-9, 'mitt');
  nara(GRADTIMMAR.syd, 71424, 1e-9, 'syd');
  nara(GRADTIMMAR.norr, 120528, 1e-9, 'norr');
  assert.deepEqual(VP_TYPER, [
    { typ: 'luft-luft', scopMin: 3.5, scopMax: 5.0 },
    { typ: 'luft-vatten', scopMin: 3.0, scopMax: 4.5 },
    { typ: 'jord-sjo', scopMin: 4.0, scopMax: 5.0 },
    { typ: 'berg', scopMin: 4.0, scopMax: 5.5 },
    { typ: 'franluft', scopMin: 2.5, scopMax: 4.0 },
  ]);
  assert.deepEqual(BOVERKET, {
    'till-2026-09-30': { tak: 0.13, vagg: 0.18, golv: 0.15, fonster: 1.2, dorr: 1.2 },
    'fran-2026-10-01': { tak: 0.13, vagg: 0.18, golv: 0.15, fonster: 1.1, dorr: 1.1 },
  });
  nara(PRIS_VINDSULL_KR_M2_MM, 0.8379, 1e-9, 'Vindsull');
  nara(PRIS_FLEXIBATTS_45_KR_M2_MM, 0.99889, 0.000005, 'Flexibatts 45');
  nara(PRIS_FLEXIBATTS_95_KR_M2_MM, 0.89421, 0.000005, 'Flexibatts 95');
  assert.equal(FLEXIBATTS_GRANS_MM, 70);
  assert.equal(materialprisKrM2Mm('stenull-flexibatts', 70), PRIS_FLEXIBATTS_45_KR_M2_MM);
  assert.equal(materialprisKrM2Mm('stenull-flexibatts', 71), PRIS_FLEXIBATTS_95_KR_M2_MM);
  assert.equal(materialprisKrM2Mm('stenull-granulate', 300), null);
  assert.deepEqual([...GRANSER.ytaM2], [1, 500]);
  assert.deepEqual([...GRANSER.tjocklekMm], [10, 600]);
  assert.equal(MATERIAL_ORDNING[0], 'mineralull-okand');
  /* Ordningen i grupperna, specen 12.40. */
  assert.deepEqual(
    MATERIAL_ORDNING.filter((m) => MATERIAL[m].isolering),
    ['mineralull-okand', 'cellplast-okand', 'stenull-vindsull', 'glasull-fyllupp', 'stenull-granulate', 'cellulosa', 'stenull-flexibatts', 'stenull-paroc', 'eps', 'pir'],
  );
  assert.equal(MATERIAL['mineralull-okand'].pris, null);
});

test('uForSkikt utan reglar är 1 genom summan', () => {
  const m = uForSkikt(0.13, 0.04, 3, null);
  assert.equal(m.rTotal, 3.17);
  assert.equal(m.rOvre, null);
});

test('elpriset importeras och står inte i modulen', () => {
  assert.equal(ELPRIS_KR_PER_KWH, 2.4);
  const kod = readFileSync(MODUL, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');
  assert.ok(!/(^|[^\d.])2\.4(?!\d)/.test(kod), 'modulen skriver elpriset 2.4 själv');
});

test('tolkaQuery', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.equal(tom.harIndata, false);
  assert.deepEqual(tom.indata, STANDARD);

  const u = tolkaQuery(new URLSearchParams('lage=uvarde&uf=0,4&ue=0,18'));
  assert.equal(u.harIndata, true);
  assert.equal(u.indata.lage, 'uvarde');
  assert.equal(u.indata.uFore, 0.4);
  assert.equal(u.indata.uEfter, 0.18);

  assert.equal(tolkaQuery(new URLSearchParams('m1=gips&d1=12,5 mm')).indata.skikt[0].tjocklekMm, 12.5);
  assert.equal(tolkaQuery(new URLSearchParams('yta=1 200')).indata.ytaM2, 1200);
  assert.equal(tolkaQuery(new URLSearchParams('del=kallare')).indata.del, STANDARD.del);
  assert.equal(tolkaQuery(new URLSearchParams('lage=annat&region=mars')).indata.region, STANDARD.region);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('yta=abc')).indata.ytaM2));

  const hopp = tolkaQuery(new URLSearchParams('m1=gips&d1=13&m2=&m3=tra&d3=22')).indata.skikt;
  assert.deepEqual(
    hopp.map((s) => s.rad),
    [1, 3],
  );
  assert.equal(tolkaQuery(new URLSearchParams('m1=tegel&d1=100')).indata.skikt[0].material, null);
  assert.deepEqual(tolkaQuery(new URLSearchParams('tm1=&tm2=')).indata.tillagg, []);
  assert.equal(tolkaQuery(new URLSearchParams('tm1=luftspalt')).indata.tillagg[0].material, null);
  assert.equal(tolkaQuery(new URLSearchParams('m2=eps&d2=13&rg=2')).indata.skikt[0].reglar, true);
  assert.equal(tolkaQuery(new URLSearchParams('m2=eps&d2=13&rg=ja')).indata.skikt[0].reglar, false);
  assert.equal(tolkaQuery(new URLSearchParams('rg=2')).harIndata, true);
  assert.equal(tolkaQuery(new URLSearchParams('m7=gips&d7=13')).indata.skikt, STANDARD.skikt);
});

test('delbarQuery tolkad igen ger samma indata', () => {
  const regelFall8 = {
    ...VAGG_EXEMPEL,
    del: 'golv',
    uFore: STANDARD_PER_DEL.golv.uFore,
    uEfter: STANDARD_PER_DEL.golv.uEfter,
    skikt: [skikt(1, 'tra', 22), skikt(2, 'stenull-flexibatts', 145, true)],
  };
  for (const indata of [STANDARD, VAGG_EXEMPEL, uvarde('vagg', 0.4, 0.18), FALL_6A, { ...VAGG_EXEMPEL, tillagg: [] }, regelFall8]) {
    const igen = tolkaQuery(delbarQuery(indata)).indata;
    assert.deepEqual(igen, indata);
    assert.deepEqual(raknaUVarde(igen), raknaUVarde(indata));
  }
  assert.equal(delbarQuery(uvarde('vagg', 0.4, 0.18)).get('uf'), '0,4');
  assert.equal(delbarQuery(VAGG_EXEMPEL).has('d3'), false);
  assert.equal(delbarQuery(VAGG_EXEMPEL).get('rg'), '2');
  assert.equal(delbarQuery(VAGG_EXEMPEL).has('r2'), false);
  assert.equal(delbarQuery(FALL_6A).has('rg'), false);
  assert.equal(delbarQuery(VAGG_EXEMPEL).has('uf'), false);
});

test('formateringen', () => {
  assert.equal(treDecimaler(0.35689), '0,357');
  assert.equal(heltal(2271.28), '2 271');
  assert.equal(endecimal(11.7188), '11,7');
});

test('TEXT har en icke-tom sträng för varje nyckel', () => {
  const ickeTom = (v, vad) => assert.ok(typeof v === 'string' && v.trim().length > 0, vad);
  const varden = {
    u: '0,235', grans: '0,18', uFore: '0,357', kr: '2 609', mm: '50', material: 'Flexibatts', mmValt: '50', materialValt: null, mmTotalt: '100',
    klaradeFore: false, del: 'vagg', forval: false, tillaggNamn: 'Rockwool Flexibatts', forslagNamn: 'Rockwool Flexibatts',
  };
  for (const b of ['bara-u-klarar', 'bara-u-over', 'ingen-forbattring', 'klarar', 'klarar-gamla', 'battre-men-over']) {
    ickeTom(TEXT.besked[b]?.rubrik(varden), `besked ${b} rubrik`);
    ickeTom(TEXT.besked[b]?.rad(KONTEXT_EXEMPEL), `besked ${b} rad`);
  }
  for (const g of ['ug-mot-kravet', 'glom-termostaten', 'inifran-utan-daggpunkt']) ickeTom(TEXT.gorInte[g]?.text, g);
  const regler = [
    'formel', 'luftspalt', 'reglar', 'delta-u', 'tak-kallvind', 'golv-uteluft', 'cellulosa',
    'boverket-andring', 'boverket-overgang', 'boverket-anpassning', 'boverket-50', 'fonster-uw',
    'gradtimmar', 'elpris', 'scop', 'energi-inte-matare', 'aterbetalning-bara-ull',
  ];
  for (const r of regler) {
    ickeTom(TEXT.regel[r]?.text, `regel ${r}`);
    assert.match(TEXT.regel[r].kalla.url, /^https:\/\//, `regel ${r} källa`);
    ickeTom(TEXT.regel[r].kalla.titel, `regel ${r} källans titel`);
  }
  for (const k of ['till-2026-09-30', 'fran-2026-10-01', 'bada']) ickeTom(TEXT.kolumn[k], k);
  for (const r of ['mitt', 'syd', 'norr']) ickeTom(TEXT.region[r], r);
  for (const d of ['vagg', 'tak', 'golv', 'fonster', 'dorr']) ickeTom(TEXT.del[d], d);
  for (const v of ['luft-luft', 'luft-vatten', 'jord-sjo', 'berg', 'franluft']) ickeTom(TEXT.vp[v], v);
  for (const o of ['uvarde-lage', 'fonster-dorr', 'bara-vind', 'inget-pris', 'ingen-besparing']) ickeTom(TEXT.aterbetalningSaknas[o], o);
  ickeTom(TEXT.klarar, 'klarar');
  ickeTom(TEXT.klararInte, 'klararInte');
  for (const a of ANTAGANDEN) ickeTom(TEXT.antagande[a.nyckel], `antagande ${a.nyckel}`);
  for (const m of MATERIAL_ORDNING) ickeTom(MATERIAL[m].etikett, `material ${m}`);
  for (const m of MATERIAL_ORDNING) ickeTom(MATERIAL[m].kort, `kort ${m}`);
  for (const k of ['reglar-etikett', 'reglar-inga', 'hjalp-reglar', 'hjalp-skikt']) ickeTom(TEXT.form[k], k);
  ickeTom(TEXT.fel['reglar-inte-isolering'], 'fel reglar-inte-isolering');
});

/* Specen 12.4: högst 26 tecken. */
test('korta materialnamn är högst 26 tecken', () => {
  for (const m of MATERIAL_ORDNING) {
    const kort = MATERIAL[m].kort;
    assert.ok(kort.length <= 26, `${m}: "${kort}" är ${kort.length} tecken`);
  }
});

test('beskedens rubriker bär talen (12.10)', () => {
  const rubrik = (r) => TEXT.besked[r.besked].rubrik(beskedVarden(r));
  const f1 = ok({ ...VAGG_EXEMPEL, tillagg: [] });
  const f2 = ok(VAGG_EXEMPEL);
  const f3 = ok(uvarde('vagg', 0.4, 0.18));
  const f7c = ok(uvarde('fonster', 2.8, 1.15, 1.5));
  const f10 = ok(uvarde('tak', 0.078, 0.184));
  assert.ok(rubrik(f2).includes('50'), rubrik(f2));
  assert.ok(rubrik(f2).includes(MATERIAL['stenull-flexibatts'].kort), rubrik(f2));
  assert.ok(rubrik(f1).includes('120'), rubrik(f1));
  assert.ok(rubrik(f3).includes(heltal(f3.besparing.krPerAr)), rubrik(f3));
  for (const r of [f1, f2, f3, f7c, f10]) assert.match(rubrik(r), /\d/, `${r.besked}: ${rubrik(r)}`);
  assert.ok(rubrik(f7c).includes('1,15') && rubrik(f7c).includes('1,1'), rubrik(f7c));
  assert.ok(rubrik(f7c).includes('gamla reglerna'), rubrik(f7c));
  /* Fälten från 12.35 till 12.37 är tillagda. */
  assert.deepEqual(beskedVarden(f7c), {
    u: '1,15', grans: '1,1', uFore: '2,80', kr: heltal(f7c.besparing.krPerAr), mm: null, material: null, mmValt: null, materialValt: null, mmTotalt: null,
    klaradeFore: false, del: 'fonster', forval: false, tillaggNamn: null, forslagNamn: null,
  });
});

test('texterna: beskeden är hela meningar och talen i dem kommer ur konstanterna', () => {
  /* Raderna som inte längre är platshållare (specen 12.28) ska vara hela meningar. */
  for (const [nyckel, b] of Object.entries(TEXT.besked)) {
    for (const k of ALLA_KONTEXTER) {
      const rad = b.rad(k);
      if (rad.includes(PLATSHALLARE)) continue;
      assert.match(rad, /^[A-ZÅÄÖ].*\.$/, `besked ${nyckel} rad`);
    }
  }
  assert.ok(MATERIAL.cellulosa.etikett.includes('0,040'));
  assert.ok(TEXT.regel.cellulosa.text.includes('0,040'));
  assert.ok(TEXT.regel.gradtimmar.text.includes(heltal(GRADTIMMAR.mitt)));
  assert.ok(TEXT.regel.elpris.text.includes(ELPRIS_KR_PER_KWH.toFixed(2).replace('.', ',')));
  assert.equal(TEXT.fel.tjocklek(...GRANSER.tjocklekMm), 'Skriv en tjocklek mellan 10 och 600 mm.');
  for (const v of [...Object.values(TEXT.gorInte).map((g) => g.text), ...Object.values(TEXT.regel).map((r) => r.text)]) {
    assert.ok(!/[–—]/.test(v), `tankstreck i ${v}`);
  }
});

test('ANTAGANDEN har en rad per konstant och https på varje källa', () => {
  const nycklar = new Set(ANTAGANDEN.map((a) => a.nyckel));
  assert.equal(nycklar.size, ANTAGANDEN.length, 'dubbla nycklar');
  const kravda = [
    'formel', 'rsi-vagg', 'rsi-tak', 'rsi-golv', 'rse', 'rse-luftspalt', 'regelandel', 'lambda-regel',
    ...MATERIAL_ORDNING.filter((m) => m !== 'luftspalt').map((m) => `material-${m}`),
    'gradtimmar-mitt', 'gradtimmar-syd', 'gradtimmar-norr', 'elpris',
    ...VP_TYPER.map((v) => `scop-${v.typ}`),
    'boverket-tak', 'boverket-vagg', 'boverket-golv', 'boverket-fonster', 'boverket-dorr',
    'pris-vindsull', 'pris-flexibatts-45', 'pris-flexibatts-95',
    'delta-u', 'tillagg-utan-reglar', 'skivpris-narmaste', 'exakt-atgang', 'aterbetalning-direktel',
    'hela-besparingen-vp', 'tak-kallvind', 'golv-uteluft', 'granser-u',
  ];
  for (const k of kravda) assert.ok(nycklar.has(k), `rad saknas: ${k}`);
  assert.deepEqual([...nycklar], kravda, 'ordningen i specen 4.6');
  for (const a of ANTAGANDEN) {
    if (a.typ === 'Källa') assert.ok(a.kallor.length > 0, `${a.nyckel} saknar källa`);
    for (const k of a.kallor) assert.match(k.url, /^https:\/\//, a.nyckel);
  }
  for (const p of ['pris-vindsull', 'pris-flexibatts-45', 'pris-flexibatts-95']) {
    const rad = ANTAGANDEN.find((a) => a.nyckel === p);
    assert.match(rad.kallor[0].last, /^\d{4}-\d{2}-\d{2}$/, `${p} har datum`);
  }
  const rad = (k) => ANTAGANDEN.find((a) => a.nyckel === k);
  assert.equal(rad('boverket-tak').varde, '0,13 W/m²K');
  assert.equal(rad('boverket-vagg').varde, '0,18 W/m²K');
  assert.equal(rad('boverket-fonster').varde, '1,2 och 1,1 W/m²K');
  assert.deepEqual(
    rad('boverket-vagg').kallor.map((k) => k.titel),
    ['Boverket, BFS 2011:6 i lydelse BFS 2024:14, avsnitt 9:92', 'Boverket, BFS 2026:9, bilaga 2 tabell 6'],
  );
  assert.equal(rad('material-cellulosa').typ, 'Antagande');
  assert.match(rad('material-cellulosa').kallor[0].titel, /Energimyndigheten/);
  assert.equal(rad('material-mineralull-okand').typ, 'Antagande');
  assert.match(rad('material-mineralull-okand').kallor[0].titel, /Energimyndigheten/);
  assert.equal(rad('material-mineralull-okand').varde, '0,045 W/mK');
});

test('antagandenFor visar bara det svaret vilar på (12.2)', () => {
  const nycklar = (r) => antagandenFor(r).map((a) => a.nyckel);
  const ordning = ANTAGANDEN.map((a) => a.nyckel);
  const fall2 = nycklar(ok(VAGG_EXEMPEL));
  const vantat = [
    'formel', 'rsi-vagg', 'rse-luftspalt', 'regelandel', 'lambda-regel', 'material-stenull-flexibatts', 'material-gips',
    'gradtimmar-mitt', 'elpris', 'scop-luft-luft', 'scop-luft-vatten', 'scop-jord-sjo', 'scop-berg', 'scop-franluft',
    'boverket-vagg', 'delta-u', 'tillagg-utan-reglar', 'hela-besparingen-vp',
  ];
  assert.deepEqual(new Set(fall2), new Set(vantat));
  assert.deepEqual(fall2, ordning.filter((k) => vantat.includes(k)), 'i ANTAGANDENs ordning');
  const fall3 = nycklar(ok(uvarde('vagg', 0.4, 0.18)));
  assert.ok(fall3.includes('granser-u'));
  assert.ok(!fall3.includes('formel'));
  assert.ok(!fall3.some((k) => k.startsWith('material-')));
  const fall7a = nycklar(ok(uvarde('fonster', 2.8, 0.9, 1.5)));
  assert.deepEqual(fall7a.filter((k) => k.startsWith('boverket-')), ['boverket-fonster']);
  const fall6a = nycklar(ok(FALL_6A));
  for (const k of ['pris-vindsull', 'material-stenull-vindsull', 'rsi-tak', 'tak-kallvind']) assert.ok(fall6a.includes(k), k);
  assert.ok(!fall6a.includes('pris-flexibatts-45'));
  assert.ok(!fall6a.includes('skivpris-narmaste'));
  /* Specen 12.45: skivpriset och återbetalningens antaganden står bara där återbetalningen visas, alltså på vinden. */
  const vindFlexibatts = nycklar(ok({ ...FALL_6A, tillagg: [tillagg(1, 'stenull-flexibatts', 45)] }));
  for (const k of ['pris-flexibatts-45', 'skivpris-narmaste', 'exakt-atgang', 'aterbetalning-direktel']) {
    assert.ok(vindFlexibatts.includes(k), k);
    assert.ok(!fall2.includes(k), k);
  }
});

/* Specen 12.11: förbehållet står på samma rad som återbetalningstiden. */
test('återbetalningsraden säger att bara ullen är med (12.11)', () => {
  const f2 = ok(FALL_6A);
  const rad = TEXT.spalt['rad-aterbetalning'](endecimal(f2.aterbetalning.ar), heltal(f2.aterbetalning.kostnadKr));
  assert.ok(rad.includes('om du lägger den själv'), rad);
  assert.ok(rad.includes(heltal(f2.aterbetalning.kostnadKr)), rad);
});

// ---------------------------------------------------------------------------
// 12 C. Granskning 2 och läsarens andra läsning

test('12.17: SCOP-raderna har en decimal på båda talen', () => {
  const rad = (k) => ANTAGANDEN.find((a) => a.nyckel === k);
  assert.equal(rad('scop-luft-vatten').varde, '3,0 till 4,5');
  assert.equal(rad('scop-luft-luft').varde, '3,5 till 5,0');
  assert.equal(rad('scop-jord-sjo').varde, '4,0 till 5,0');
});

/* Specen 12.24: standardfallet har inga reglar. Facit ersätter 12.18. */
test('fall 14 (12.18, 12.24): standardvärdena är vindsbjälklaget utan reglar med 300 mm Vindsull', () => {
  assert.equal(STANDARD.del, 'tak');
  assert.ok(STANDARD.skikt.every((s) => !s.reglar));
  assert.equal(delbarQuery(STANDARD).has('rg'), false);
  const r = ok(STANDARD);
  uNara(r.uFore, 0.21558, 'uFore');
  assert.equal(treDecimaler(r.uFore), '0,216');
  uNara(r.uEfter, 0.08488, 'uEfter');
  assert.equal(treDecimaler(r.uEfter), '0,085');
  rNara(r.detaljer.fore.rTotal, 4.63861, 'rTotal före');
  rNara(r.detaljer.efter.rTotal, 11.78147, 'rTotal efter');
  assert.equal(r.detaljer.fore.rsi, 0.1);
  assert.equal(r.detaljer.fore.rse, 0.04);
  assert.equal(r.detaljer.fore.rOvre, null);
  assert.equal(r.detaljer.fore.rUndre, null);
  assert.equal(r.detaljer.efter.rOvre, null);
  assert.equal(r.detaljer.efter.rUndre, null);
  assert.equal(r.besked, 'klarar');
  assert.equal(r.saknas, null);
  kwhNara(r.besparing.kwhPerAr, 1166.91, 'kWh');
  assert.equal(heltal(r.besparing.kwhPerAr), '1 167');
  krNara(r.besparing.krPerAr, 2800.59, 'kr');
  assert.equal(heltal(r.besparing.krPerAr), '2 801');
  const vantat = {
    'luft-luft': [560.12, 800.17],
    'luft-vatten': [622.35, 933.53],
    'jord-sjo': [560.12, 700.15],
    berg: [509.2, 700.15],
    franluft: [700.15, 1120.24],
  };
  for (const v of r.besparing.varmepump) {
    krNara(v.krMin, vantat[v.typ][0], `${v.typ} min`);
    krNara(v.krMax, vantat[v.typ][1], `${v.typ} max`);
  }
  krNara(r.aterbetalning.kostnadKr, 25137, 'kostnad');
  nara(r.aterbetalning.ar, 8.976, 0.0005, 'år');
  assert.equal(endecimal(r.aterbetalning.ar), '9');
  assert.deepEqual(r.gorInteDetHar, ['glom-termostaten']);
  const antaganden = antagandenFor(r).map((a) => a.nyckel);
  assert.ok(!antaganden.includes('regelandel'));
  assert.ok(!antaganden.includes('lambda-regel'));
  assert.ok(!r.regler.includes('reglar'));
});

test('12.18: läget uvarde med standardvärdena ger fall 4a', () => {
  const { indata } = tolkaQuery(new URLSearchParams('lage=uvarde'));
  const r = ok(indata);
  kwhNara(r.besparing.kwhPerAr, 946.37, 'kWh');
  krNara(r.besparing.krPerAr, 2271.28, 'kr');
});

test('12.19: tilläggslistan tar bara isolering', () => {
  assert.equal(tolkaQuery(new URLSearchParams('tm1=gips&td1=13')).indata.tillagg[0].material, null);
  assert.equal(tolkaQuery(new URLSearchParams('tm1=betong&td1=50')).indata.tillagg[0].material, null);
  assert.deepEqual(felNycklar(tolkaQuery(new URLSearchParams('tm1=gips&td1=13')).indata), ['t1']);
  assert.equal(tolkaQuery(new URLSearchParams('tm1=eps&td1=50')).indata.tillagg[0].material, 'eps');
});

test('12.20: förslaget utan valt tillägg är märkeslöst', () => {
  const rubrik = (r) => TEXT.besked[r.besked].rubrik(beskedVarden(r));
  const marken = ['Rockwool', 'Paroc', 'Isover', 'Sundolitt', 'Kingspan', 'Flexibatts', 'Vindsull', 'Granulate'];

  const vagg = ok({ ...VAGG_EXEMPEL, tillagg: [] });
  assert.deepEqual(vagg.saknas, { mm: 120, material: 'mineralull-okand', grans: 0.18 });
  uNara(ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'mineralull-okand', 120)] }).uEfter, 0.17851, 'vägg med förslaget');

  /* Specen 12.24: utan reglar räcker 140 mm, inte 170. */
  const vind = ok({ ...STANDARD, tillagg: [] });
  assert.equal(vind.besked, 'bara-u-over');
  assert.deepEqual(vind.saknas, { mm: 140, material: 'mineralull-okand', grans: 0.13 });
  const medForslag = ok({ ...STANDARD, tillagg: [tillagg(1, 'mineralull-okand', 140)] });
  assert.ok(avrundaU(medForslag.uEfter, 'tak') <= 0.13, 'vind med förslaget');
  assert.ok(avrundaU(ok({ ...STANDARD, tillagg: [tillagg(1, 'mineralull-okand', 130)] }).uEfter, 'tak') > 0.13, '130 mm räcker inte');

  for (const r of [vagg, vind]) {
    for (const m of marken) assert.ok(!rubrik(r).includes(m), `${m} i ${rubrik(r)}`);
  }
});

test('12.21: beskedet säger hela tjockleken', () => {
  /* Paroc eXtra har λ nära Flexibatts men inget pris, så förslaget går i steg om 10 mm som förut (specen 12.46). */
  const f2 = ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'stenull-paroc', 50)] });
  const v = beskedVarden(f2);
  assert.equal(v.mmValt, '50');
  assert.equal(v.mmTotalt, String(50 + f2.saknas.mm));
  assert.ok(TEXT.besked[f2.besked].rubrik(v).includes(v.mmTotalt), TEXT.besked[f2.besked].rubrik(v));
  /* Flexibatts: totalen är en summa av skivorna, 135 = 3 × 45 (specen 12.46). */
  const vf = beskedVarden(ok(VAGG_EXEMPEL));
  assert.equal(vf.mm, '85');
  assert.equal(vf.mmValt, '50');
  assert.equal(vf.mmTotalt, '135');
  // Utan tillägg är totalen det som saknas.
  const f1 = beskedVarden(ok({ ...VAGG_EXEMPEL, tillagg: [] }));
  assert.equal(f1.mmValt, null);
  assert.equal(f1.mmTotalt, f1.mm);
  // Totalen blir aldrig tjockare än formuläret tar: med 590 mm valt räcker 10 mm inte, och mer prövas inte.
  const tjock = ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'eps', 590)] });
  if (tjock.saknas) assert.ok(tjock.saknas.mm + 590 <= GRANSER.tjocklekMm[1]);
  const f = f2.detaljer.fore;
  const lambda = MATERIAL['stenull-flexibatts'].lambda;
  const homogena = 0.013 / 0.24 + 0.05 / lambda;
  assert.equal(extraForGrans(f.rsi, f.rse, homogena, { tjocklekMm: 120, lambda }, lambda, 0.18, 'vagg', 40), null);
  assert.equal(extraForGrans(f.rsi, f.rse, homogena, { tjocklekMm: 120, lambda }, lambda, 0.18, 'vagg', 550), 50);
});

/** Alla strängar i TEXT, med funktionernas källkod. */
function allText(v) {
  if (typeof v === 'string') return [v];
  if (typeof v === 'function') return [v.toString()];
  if (v && typeof v === 'object') return Object.values(v).flatMap(allText);
  return [];
}

test('12.22: inget löfte om eget elpris', () => {
  for (const t of allText(TEXT)) assert.ok(!t.includes('elkostnadsräknaren'), t);
  assert.equal(TEXT.spalt['rad-eget-elpris'], undefined);
});

/* Specen 12.23. Raden är omskriven, så skyddsraden är borta (12 D). */
test('12.23: återbetalningsraden säger att den blir längre med värmepump', () => {
  const r = ok(STANDARD);
  const rad = TEXT.spalt['rad-aterbetalning'](endecimal(r.aterbetalning.ar), heltal(r.aterbetalning.kostnadKr));
  assert.match(rad, /värmepump/i);
  assert.match(rad, /direktverkande el/);
});

// ---------------------------------------------------------------------------
// 12 D. Beslut efter granskning 3

test('12.25: beskedet vet alltid vad som lagts till', () => {
  const standard = beskedVarden(ok(STANDARD));
  assert.equal(standard.mmValt, '300');
  assert.equal(standard.materialValt, MATERIAL['stenull-vindsull'].kort);
  assert.equal(standard.mm, null);
  assert.equal(standard.material, null);
  assert.equal(standard.mmTotalt, null);
  const fall3 = beskedVarden(ok(uvarde('vagg', 0.4, 0.18)));
  assert.equal(fall3.mmValt, null);
  assert.equal(fall3.materialValt, null);
  // Förslaget (material) och tillägget (materialValt) hålls isär.
  const f2 = beskedVarden(ok(VAGG_EXEMPEL));
  assert.equal(f2.materialValt, MATERIAL['stenull-flexibatts'].kort);
  assert.equal(f2.mmValt, '50');
});

test('12.26: cellplast utan märke räknas med 0,038 och är ett antagande', () => {
  assert.equal(MATERIAL['cellplast-okand'].lambda, 0.038);
  assert.equal(MATERIAL['cellplast-okand'].isolering, true);
  assert.equal(MATERIAL['cellplast-okand'].pris, null);
  assert.match(MATERIAL['cellplast-okand'].kalla.titel, /Energimyndigheten/);
  /* Specen 12.40 ersätter platsen före EPS: cellplasten står bland materialen utan märke. */
  assert.deepEqual(MATERIAL_GRUPPER.find((g) => g.grupp === 'okand').material, ['mineralull-okand', 'cellplast-okand']);
  const rad = ANTAGANDEN.find((a) => a.nyckel === 'material-cellplast-okand');
  assert.equal(rad.typ, 'Antagande');
  assert.equal(rad.varde, '0,038 W/mK');
  assert.match(rad.kallor[0].titel, /Energimyndigheten/);
  assert.equal(tolkaQuery(new URLSearchParams('tm1=cellplast-okand&td1=50')).indata.tillagg[0].material, 'cellplast-okand');
});

test('12.26: cellplast utan märke står i lambdatabellen', () => {
  const cellplastRad = tabell(artikel, '| Material | λ, W/mK |').find(([namn]) => namn === MATERIAL['cellplast-okand'].etikett);
  assert.ok(cellplastRad, `hittade inte ${MATERIAL['cellplast-okand'].etikett} i lambdatabellen`);
  assert.equal(tal(cellplastRad[1]), 0.038);
});

test('12.25: beskedet klarar säger vad som lagts till, och Vindsull heter lösull', () => {
  const rubrik = TEXT.besked.klarar.rubrik(beskedVarden(ok(STANDARD)));
  assert.ok(rubrik.includes('300 mm lösull'), rubrik);
  assert.ok(!rubrik.includes('Vindsull'), rubrik);
});

// ---------------------------------------------------------------------------
// 12.27 Standardvärden per byggnadsdel

test('12.27: fönstret med standardvärden ger fall 7a och en rimlig summa', () => {
  const { indata, bytta } = tolkaQuery(new URLSearchParams('lage=uvarde&del=fonster'));
  assert.equal(indata.ytaM2, 1.5);
  assert.equal(indata.uFore, 2.8);
  assert.equal(indata.uEfter, 0.9);
  assert.deepEqual(bytta, { yta: true, uf: true, ue: true, skikt: true, tillagg: true });
  const r = ok(indata);
  kwhNara(r.besparing.kwhPerAr, 254.45, 'kWh');
  krNara(r.besparing.krPerAr, 610.68, 'kr');
  assert.ok(r.besparing.krPerAr < 2000, `fönstret ger ${r.besparing.krPerAr} kr`);
});

test('12.27: vindens standardvärden byts mot fönstrets när delen byts (läsarens fall)', () => {
  const utan = tolkaQuery(new URLSearchParams('lage=uvarde&del=fonster')).indata;
  const byte = tolkaQuery(new URLSearchParams('lage=uvarde&del=fonster&sd=tak&yta=100&uf=0,184&ue=0,078'));
  assert.deepEqual(byte.indata, utan);
  assert.deepEqual(byte.bytta, { yta: true, uf: true, ue: true, skikt: true, tillagg: true });
});

test('12.27: ett värde läsaren skrivit står kvar när delen byts', () => {
  const { indata, bytta } = tolkaQuery(new URLSearchParams('lage=uvarde&del=fonster&sd=tak&yta=12&uf=0,184&ue=0,078'));
  assert.equal(indata.ytaM2, 12);
  assert.equal(indata.uFore, 2.8);
  assert.equal(indata.uEfter, 0.9);
  assert.deepEqual(bytta, { yta: false, uf: true, ue: true, skikt: true, tillagg: true });
});

test('12.27: väggen, golvet och dörren med standardvärden', () => {
  const ur = (adress) => ok(tolkaQuery(new URLSearchParams(adress)).indata);
  kwhNara(ur('lage=uvarde&del=vagg').besparing.kwhPerAr, 1964.16, 'kWh vägg');
  const golv = ur('lage=uvarde&del=golv');
  kwhNara(golv.besparing.kwhPerAr, 399.97, 'kWh golv');
  krNara(golv.besparing.krPerAr, 959.94, 'kr golv');
  const dorr = ur('lage=uvarde&del=dorr');
  kwhNara(dorr.besparing.kwhPerAr, 160.7, 'kWh dörr');
  krNara(dorr.besparing.krPerAr, 385.69, 'kr dörr');
});

test('12.27: ett ogiltigt sd läses inte, och samma del byter inget', () => {
  const mars = tolkaQuery(new URLSearchParams('lage=uvarde&del=fonster&sd=mars&yta=100&uf=0,184&ue=0,078'));
  assert.equal(mars.indata.ytaM2, 100);
  assert.equal(mars.indata.uFore, 0.184);
  assert.equal(mars.indata.uEfter, 0.078);
  assert.deepEqual(mars.bytta, { yta: false, uf: false, ue: false, skikt: true, tillagg: true });
  const samma = tolkaQuery(new URLSearchParams('lage=uvarde&del=tak&sd=tak&yta=100&uf=0,184&ue=0,078'));
  assert.deepEqual(samma.bytta, { yta: false, uf: false, ue: false, skikt: true, tillagg: true });
});

test('12.27: STANDARD läser vindens rad i STANDARD_PER_DEL', () => {
  assert.equal(STANDARD.ytaM2, STANDARD_PER_DEL.tak.ytaM2);
  assert.equal(STANDARD.uFore, STANDARD_PER_DEL.tak.uFore);
  assert.equal(STANDARD.uEfter, STANDARD_PER_DEL.tak.uEfter);
});

test('12.27: rundturen håller och den delade adressen har inget sd', () => {
  for (const del of Object.keys(STANDARD_PER_DEL)) {
    const indata = tolkaQuery(new URLSearchParams(`lage=uvarde&del=${del}&sd=tak`)).indata;
    const adress = delbarQuery(indata);
    assert.equal(adress.has('sd'), false, del);
    assert.deepEqual(tolkaQuery(adress).indata, indata, del);
  }
  assert.equal(delbarQuery(STANDARD).has('sd'), false);
});

test('12.27: standardvärdena ger ett svar med förbättring för varje del', () => {
  for (const del of Object.keys(STANDARD_PER_DEL)) {
    const r = raknaUVarde(tolkaQuery(new URLSearchParams(`lage=uvarde&del=${del}`)).indata);
    assert.equal(r.status, 'ok', del);
    assert.notEqual(r.besked, 'ingen-forbattring', del);
  }
});

// ---------------------------------------------------------------------------
// 12 E. Läsarens femte läsning

test('12.28: raden under beskedet ger en sträng i varje fall', () => {
  for (const b of BESKEDEN) {
    for (const k of ALLA_KONTEXTER) {
      const rad = TEXT.besked[b].rad(k);
      assert.ok(typeof rad === 'string' && rad.trim().length > 0, `${b} ${JSON.stringify(k)}`);
    }
  }
});

test('12.28: fönster och dörr skickas inte till Skikt för skikt', () => {
  const skiktlage = TEXT.form['lage-skikt'];
  for (const b of BESKEDEN) {
    for (const k of ALLA_KONTEXTER.filter((x) => x.del === 'fonster' || x.del === 'dorr')) {
      assert.ok(!TEXT.besked[b].rad(k).includes(skiktlage), `${b} ${k.del}`);
    }
  }
  assert.ok(!TEXT.aterbetalningSaknas['fonster-dorr'].includes(skiktlage));
});

test('12.28: fönstret har en egen orsak till att återbetalningen saknas', () => {
  const f7a = ok(uvarde('fonster', 2.8, 0.9, 1.5));
  assert.equal(f7a.aterbetalningSaknas, 'fonster-dorr');
  assert.equal(ok(uvarde('dorr', 2.0, 1.1, 2)).aterbetalningSaknas, 'fonster-dorr');
  assert.equal(ok(uvarde('vagg', 0.4, 0.18)).aterbetalningSaknas, 'uvarde-lage');
  // ingen-besparing går först.
  assert.equal(ok(uvarde('fonster', 0.9, 2.8, 1.5)).aterbetalningSaknas, 'ingen-besparing');
});

test('12.28: beskedKontext läser läge, del, före, tillägg och återbetalning', () => {
  assert.deepEqual(beskedKontext(ok(STANDARD)), {
    lage: 'skikt',
    del: 'tak',
    klaradeFore: false,
    harTillagg: true,
    forval: true,
    aterbetalning: true,
    aterbetalningSaknas: null,
  });
  assert.deepEqual(beskedKontext(ok(uvarde('fonster', 2.8, 0.9, 1.5))), {
    lage: 'uvarde',
    del: 'fonster',
    klaradeFore: false,
    harTillagg: false,
    forval: false,
    aterbetalning: false,
    aterbetalningSaknas: 'fonster-dorr',
  });
  // Ett U-värde som redan klarade kravet före.
  const klarade = beskedKontext(ok(uvarde('tak', 0.12, 0.1)));
  assert.equal(klarade.klaradeFore, true);
  assert.equal(beskedKontext(ok({ ...STANDARD, tillagg: [] })).harTillagg, false);
});

test('12.29: fönster och dörr räknas alltid med känt U-värde', () => {
  assert.equal(tolkaQuery(new URLSearchParams('del=fonster')).indata.lage, 'uvarde');
  const fonster = raknaUVarde(tolkaQuery(new URLSearchParams('del=fonster')).indata);
  assert.equal(fonster.status, 'ok');
  const dorr = tolkaQuery(new URLSearchParams('lage=skikt&del=dorr')).indata;
  assert.equal(dorr.lage, 'uvarde');
  assert.equal(raknaUVarde(dorr).status, 'ok');
  // Vägg, vind och golv behåller läget ur adressen.
  assert.equal(tolkaQuery(new URLSearchParams('lage=skikt&del=vagg')).indata.lage, 'skikt');
});

const VIND_I_ADRESSEN = 'm1=gips&d1=13&m2=mineralull-okand&d2=200&tm1=stenull-vindsull&td1=300';
/* Specen 12.34: väggens förval är 95 mm Flexibatts. */
const VAGG_I_ADRESSEN = 'm1=gips&d1=13&m2=mineralull-okand&d2=120&rg=2&m3=luftspalt&d3=&m4=tra&d4=22&tm1=stenull-flexibatts&td1=95';

test('12.30: STANDARD läser vindens skikt', () => {
  assert.equal(STANDARD.skikt, STANDARD_SKIKT_PER_DEL.tak.skikt);
  assert.equal(STANDARD.tillagg, STANDARD_SKIKT_PER_DEL.tak.tillagg);
  for (const del of Object.keys(STANDARD_SKIKT_PER_DEL)) {
    for (const t of STANDARD_SKIKT_PER_DEL[del].tillagg) assert.ok(MATERIAL[t.material].isolering, del);
  }
});

/*
 * Facit från specen 12.34, som ersätter facit för vägg och golv i 12.30. Specen
 * 12.45 tar bort återbetalningen för vägg och golv, och 12.46 gör förslaget till
 * en total som går att köpa: 135 mm, tre skivor på 45 (115 räcker, men 115 och
 * 130 går inte att lägga ihop av 45 och 95).
 */
const MED_FLEXIBATTS_95 = ['pris-flexibatts-95', 'skivpris-narmaste', 'exakt-atgang', 'aterbetalning-direktel'];

test('12.30: väggen med sina standardskikt', () => {
  const { indata, bytta } = tolkaQuery(new URLSearchParams('del=vagg'));
  assert.deepEqual(indata.skikt, STANDARD_SKIKT_PER_DEL.vagg.skikt);
  assert.deepEqual(indata.tillagg, STANDARD_SKIKT_PER_DEL.vagg.tillagg);
  assert.equal(bytta.skikt, true);
  assert.equal(bytta.tillagg, true);
  const r = ok(indata);
  nara(r.uFore, 0.40351, 0.00001, 'uFore');
  nara(r.uEfter, 0.19506, 0.00001, 'uEfter');
  assert.equal(r.besked, 'battre-men-over');
  kwhNara(r.besparing.kwhPerAr, 1861.06, 'kWh');
  krNara(r.besparing.krPerAr, 4466.54, 'kr');
  krNara(r.besparing.varmepump[0].krMin, 893.31, 'luft-luft min');
  krNara(r.besparing.varmepump[0].krMax, 1276.15, 'luft-luft max');
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'bara-vind');
  assert.deepEqual(r.saknas, { mm: 40, material: 'stenull-flexibatts', grans: 0.18 });
  assert.equal(beskedVarden(r).mmTotalt, '135');
  /* 135 räcker, och 115 räcker också, så 135 är den minsta köpbara totalen som gör det. */
  assert.ok(avrundaU(ok({ ...indata, tillagg: [tillagg(1, 'stenull-flexibatts', 135)] }).uEfter, 'vagg') <= 0.18);
  const antaganden = antagandenFor(r).map((a) => a.nyckel);
  for (const k of MED_FLEXIBATTS_95) assert.ok(!antaganden.includes(k), k);
});

test('12.30: golvet med sina standardskikt', () => {
  const { indata } = tolkaQuery(new URLSearchParams('del=golv'));
  assert.deepEqual(indata.skikt, STANDARD_SKIKT_PER_DEL.golv.skikt);
  assert.deepEqual(indata.tillagg, STANDARD_SKIKT_PER_DEL.golv.tillagg);
  const r = ok(indata);
  nara(r.uFore, 0.2786, 0.00001, 'uFore');
  nara(r.uEfter, 0.16242, 0.00001, 'uEfter');
  assert.equal(r.besked, 'battre-men-over');
  kwhNara(r.besparing.kwhPerAr, 829.82, 'kWh');
  krNara(r.besparing.krPerAr, 1991.57, 'kr');
  krNara(r.besparing.varmepump[0].krMin, 398.31, 'luft-luft min');
  krNara(r.besparing.varmepump[0].krMax, 569.02, 'luft-luft max');
  assert.equal(r.aterbetalning, null);
  assert.equal(r.aterbetalningSaknas, 'bara-vind');
  assert.deepEqual(r.saknas, { mm: 40, material: 'stenull-flexibatts', grans: 0.15 });
  assert.equal(beskedVarden(r).mmTotalt, '135');
  assert.ok(avrundaU(ok({ ...indata, tillagg: [tillagg(1, 'stenull-flexibatts', 135)] }).uEfter, 'golv') <= 0.15);
  const antaganden = antagandenFor(r).map((a) => a.nyckel);
  for (const k of MED_FLEXIBATTS_95) assert.ok(!antaganden.includes(k), k);
});

test('12.30: vindens standardskikt byts mot golvets när delen byts', () => {
  const { indata, bytta } = tolkaQuery(new URLSearchParams(`del=golv&sd=tak&${VIND_I_ADRESSEN}`));
  assert.deepEqual(indata.skikt, STANDARD_SKIKT_PER_DEL.golv.skikt);
  assert.deepEqual(indata.tillagg, STANDARD_SKIKT_PER_DEL.golv.tillagg);
  assert.equal(bytta.skikt, true);
  assert.equal(bytta.tillagg, true);
});

test('12.30: skikt läsaren ändrat står kvar, tillägget byts för sig', () => {
  const { indata, bytta } = tolkaQuery(new URLSearchParams(`del=golv&sd=tak&${VIND_I_ADRESSEN.replace('d2=200', 'd2=250')}`));
  assert.equal(indata.skikt[1].tjocklekMm, 250);
  assert.equal(indata.skikt[0].material, 'gips');
  assert.equal(bytta.skikt, false);
  assert.deepEqual(indata.tillagg, STANDARD_SKIKT_PER_DEL.golv.tillagg);
  assert.equal(bytta.tillagg, true);
});

test('12.30: väggens luftspalt följer inte med till vinden', () => {
  const { indata, bytta } = tolkaQuery(new URLSearchParams(`del=tak&sd=vagg&${VAGG_I_ADRESSEN}`));
  assert.equal(bytta.skikt, true);
  assert.deepEqual(indata.skikt, STANDARD_SKIKT_PER_DEL.tak.skikt);
  assert.deepEqual(indata.tillagg, STANDARD_SKIKT_PER_DEL.tak.tillagg);
  assert.equal(indata.reglarPaTomRad, undefined);
  assert.equal(raknaUVarde(indata).status, 'ok');
  // Utan sd står väggens skikt kvar, och luftspalten ger felet på vinden.
  const utanSd = tolkaQuery(new URLSearchParams(`del=tak&${VAGG_I_ADRESSEN}`)).indata;
  assert.equal(raknaUVarde(utanSd).status, 'ogiltig');
});

test('12.30: rundturen håller för vind, vägg och golv', () => {
  for (const del of Object.keys(STANDARD_SKIKT_PER_DEL)) {
    const indata = tolkaQuery(new URLSearchParams(`del=${del}`)).indata;
    const adress = delbarQuery(indata);
    assert.equal(adress.has('sd'), false, del);
    assert.deepEqual(tolkaQuery(adress).indata, indata, del);
    assert.deepEqual(raknaUVarde(tolkaQuery(adress).indata), raknaUVarde(indata), del);
  }
});

test('12.31: kolumnrubrikerna har inget slutdatum på de gamla reglerna', () => {
  assert.ok(!TEXT.kolumn['till-2026-09-30'].includes('30 september'));
  assert.ok(!TEXT.kolumn['fran-2026-10-01'].includes('30 september'));
  assert.ok(TEXT.regel['boverket-overgang'].text.includes('2027'));
  assert.equal(TEXT.kolumn.bada, 'Boverket, gamla och nya regler');
});

// ---------------------------------------------------------------------------
// 12 F. Granskning av 12 E och läsarens sjätte läsning

/* Rubriken för ett svar. */
const rubrikFor = (r) => TEXT.besked[r.besked].rubrik(beskedVarden(r));
/* Adressen genom tolkaQuery till ett svar. */
const urAdress = (adress) => tolkaQuery(new URLSearchParams(adress)).indata;

test('12.32: från fönster till skikt för skikt ger väggens standardskikt', () => {
  const skiktnycklar = /^t?[md][1-6]$/;
  const fran = new URLSearchParams(`lage=uvarde&del=fonster&${VIND_I_ADRESSEN}`);
  const byt = bytLageQuery(fran, tolkaQuery(fran).indata);
  assert.equal(byt.get('sd'), 'fonster');
  assert.ok(![...byt.keys()].some((k) => skiktnycklar.test(k) || k === 'rg'), byt.toString());
  const { indata } = tolkaQuery(byt);
  assert.equal(indata.lage, 'skikt');
  assert.equal(indata.del, 'vagg');
  assert.deepEqual(indata.skikt, STANDARD_SKIKT_PER_DEL.vagg.skikt);
  assert.deepEqual(indata.tillagg, STANDARD_SKIKT_PER_DEL.vagg.tillagg);
  assert.equal(raknaUVarde(indata).status, 'ok');
  // Dörren utan m-nycklar ger samma sak.
  const dorr = new URLSearchParams('lage=uvarde&del=dorr');
  const franDorr = tolkaQuery(bytLageQuery(dorr, tolkaQuery(dorr).indata)).indata;
  assert.equal(franDorr.lage, 'skikt');
  assert.equal(franDorr.del, 'vagg');
  assert.deepEqual(franDorr.skikt, STANDARD_SKIKT_PER_DEL.vagg.skikt);
  assert.deepEqual(franDorr.tillagg, STANDARD_SKIKT_PER_DEL.vagg.tillagg);
  assert.equal(raknaUVarde(franDorr).status, 'ok');
});

test('12.32: från standardvinden till läget uvarde följer skikten med oförändrade', () => {
  const fran = delbarQuery(STANDARD);
  const byt = bytLageQuery(fran, STANDARD);
  assert.equal(byt.get('lage'), 'uvarde');
  assert.equal(byt.get('sd'), 'tak');
  assert.equal(byt.get('del'), 'tak');
  const nycklar = (q) => [...q.entries()].filter(([k]) => /^t?[md][1-6]$/.test(k));
  assert.deepEqual(nycklar(byt), nycklar(fran));
  assert.ok(nycklar(fran).length > 0);
});

/* Specen 12.45 ersätter 12.34 här: bara vinden får återbetalningstid, vägg och golv får orsaken bara-vind. */
test('12.34 och 12.45: återbetalning för vinden, orsaken bara-vind för vägg och golv', () => {
  const vind = ok(urAdress('del=tak'));
  assert.notEqual(vind.aterbetalning, null);
  assert.equal(endecimal(vind.aterbetalning.ar), '9');
  for (const del of ['vagg', 'golv']) {
    const r = ok(urAdress(`del=${del}`));
    assert.equal(r.aterbetalning, null, del);
    assert.equal(r.aterbetalningSaknas, 'bara-vind', del);
    assert.notEqual(r.besparing, null, `${del}: kronorna om året visas som förut`);
    assert.ok(!r.regler.includes('aterbetalning-bara-ull'), del);
    assert.equal(beskedKontext(r).aterbetalning, false, del);
  }
  for (const del of ['vagg', 'golv']) {
    assert.deepEqual(STANDARD_SKIKT_PER_DEL[del].tillagg, [{ rad: 1, material: 'stenull-flexibatts', tjocklekMm: 95 }], del);
  }
});

/* Specen 12.35, egen räkning 2026-09-28. */
const KLARADE_SKIKT = {
  ...STANDARD,
  skikt: [skikt(1, 'gips', 13), skikt(2, 'mineralull-okand', 400)],
  tillagg: [tillagg(1, 'stenull-vindsull', 100)],
};

test('12.35: det som sitter där klarade redan, skiktläget', () => {
  const r = ok(KLARADE_SKIKT);
  uNara(r.uFore, 0.1101, 'uFore');
  uNara(r.uEfter, 0.08723, 'uEfter');
  assert.equal(r.besked, 'klarar');
  krNara(r.besparing.krPerAr, 489.95, 'kr');
  assert.equal(heltal(r.besparing.krPerAr), '490');
  arNara(r.aterbetalning.ar, 17.1, 'år');
  const v = beskedVarden(r);
  assert.equal(v.klaradeFore, true);
  const rubrik = TEXT.besked.klarar.rubrik(v);
  assert.ok(typeof rubrik === 'string' && rubrik.trim().length > 0);
});

test('12.35: det som sitter där klarade redan, läget uvarde', () => {
  const r = ok(uvarde('tak', 0.11, 0.08));
  assert.equal(r.besked, 'klarar');
  krNara(r.besparing.krPerAr, 642.82, 'kr');
  assert.equal(heltal(r.besparing.krPerAr), '643');
  const v = beskedVarden(r);
  assert.equal(v.klaradeFore, true);
  const rubrik = TEXT.besked.klarar.rubrik(v);
  assert.ok(typeof rubrik === 'string' && rubrik.trim().length > 0);
});

test('12.35: STANDARD klarade inte före och har samma rubrik som förut', () => {
  const r = ok(STANDARD);
  assert.equal(beskedVarden(r).klaradeFore, false);
  assert.equal(rubrikFor(r), 'Lägger du på 300 mm lösull klarar du kravet på 0,13 och sparar 2 801 kr om året');
});

test('12.35: rubrikerna säger att det redan klarade', () => {
  const skiktV = beskedVarden(ok(KLARADE_SKIKT));
  const skiktRubrik = TEXT.besked.klarar.rubrik(skiktV);
  assert.ok(skiktRubrik.includes('490'), skiktRubrik);
  assert.notEqual(skiktRubrik, TEXT.besked.klarar.rubrik({ ...skiktV, klaradeFore: false }));
  const uV = beskedVarden(ok(uvarde('tak', 0.11, 0.08)));
  const uRubrik = TEXT.besked.klarar.rubrik(uV);
  assert.ok(uRubrik.includes('643'), uRubrik);
  assert.notEqual(uRubrik, TEXT.besked.klarar.rubrik({ ...uV, klaradeFore: false }));
  for (const t of [skiktRubrik, uRubrik]) assert.ok(!t.includes(PLATSHALLARE), t);
});

test('12.36: förvalet känns igen, också i den delade adressen', () => {
  for (const indata of [STANDARD, urAdress('del=vagg'), urAdress('del=golv')]) {
    assert.equal(beskedVarden(ok(indata)).forval, true, indata.del);
    assert.equal(beskedVarden(ok(tolkaQuery(delbarQuery(indata)).indata)).forval, true, `${indata.del} delad`);
  }
  assert.equal(beskedVarden(ok({ ...STANDARD, tillagg: [tillagg(1, 'stenull-vindsull', 250)] })).forval, false);
  assert.equal(beskedVarden(ok(urAdress('del=vagg&tm1=stenull-paroc&td1=95'))).forval, false);
  for (const del of DELAR) {
    assert.equal(beskedVarden(ok(urAdress(`lage=uvarde&del=${del}`))).forval, false, del);
  }
});

test('12.36: väggens förval nämner inte märket, läsarens val gör det', () => {
  assert.ok(!rubrikFor(ok(urAdress('del=vagg'))).includes('Rockwool'));
  const valt = ok(urAdress('del=vagg&tm1=stenull-flexibatts&td1=45'));
  uNara(valt.uEfter, 0.26648, 'uEfter');
  /* Specen 12.46: 45 + 70 = 115 räcker, men den minsta köpbara totalen är 135, alltså 90 mm till. */
  assert.equal(valt.saknas.mm, 90);
  assert.equal(beskedVarden(valt).forval, false);
  const rubrik = rubrikFor(valt);
  for (const del of ['135', '90', '45', 'Rockwool Flexibatts']) assert.ok(rubrik.includes(del), `${del} i ${rubrik}`);
});

test('12.36: väggens förval säger totalen', () => {
  const rubrik = rubrikFor(ok(urAdress('del=vagg')));
  assert.ok(rubrik.includes('135'), rubrik);
  assert.ok(!rubrik.includes('du lagt in'), rubrik);
  assert.ok(!rubrik.includes(PLATSHALLARE), rubrik);
});

test('12.37: lösull heter lösull i rubriken, utan stenull', () => {
  const r = ok({
    ...STANDARD,
    skikt: [skikt(1, 'gips', 13), skikt(2, 'mineralull-okand', 50)],
    tillagg: [tillagg(1, 'stenull-vindsull', 100)],
  });
  assert.equal(r.besked, 'battre-men-over');
  assert.deepEqual(r.saknas, { mm: 170, material: 'stenull-vindsull', grans: 0.13 });
  const rubrik = rubrikFor(r);
  assert.ok(rubrik.includes('270 mm lösull'), rubrik);
  assert.ok(!rubrik.includes('Lösull, stenull') && !rubrik.includes('lösull, stenull'), rubrik);
  assert.ok(rubrikFor(ok(STANDARD)).includes('300 mm lösull'));
});

test('12.40: materialen i grupper', () => {
  const alla = [
    'mineralull-okand', 'cellplast-okand', 'stenull-paroc', 'stenull-flexibatts', 'stenull-granulate',
    'stenull-vindsull', 'glasull-fyllupp', 'cellulosa', 'eps', 'pir', 'tra', 'gips', 'lattbetong', 'betong', 'luftspalt',
  ];
  assert.equal(MATERIAL_ORDNING.length, alla.length);
  for (const m of alla) assert.equal(MATERIAL_ORDNING.filter((x) => x === m).length, 1, m);
  assert.deepEqual(MATERIAL_GRUPPER.map((g) => g.grupp), ['okand', 'losull', 'skivor', 'ovrigt']);
  assert.deepEqual(MATERIAL_ORDNING, MATERIAL_GRUPPER.flatMap((g) => g.material));
  const korta = MATERIAL_ORDNING.map((m) => MATERIAL[m].kort);
  assert.equal(new Set(korta).size, korta.length, 'dubbla korta namn');
  for (const k of korta) assert.ok(k.length <= 26, k);
  for (const g of ['grupp-okand', 'grupp-losull', 'grupp-skivor', 'grupp-ovrigt']) {
    assert.ok(typeof TEXT.form[g] === 'string' && TEXT.form[g].trim().length > 0, g);
  }
});

test('12.40: Vindsull heter lösull i listan och i tabellen', () => {
  assert.ok(MATERIAL['stenull-vindsull'].kort.includes('lösull'), MATERIAL['stenull-vindsull'].kort);
  assert.ok(MATERIAL['stenull-vindsull'].etikett.includes('lösull'), MATERIAL['stenull-vindsull'].etikett);
});

test('12.41: länkarna i ”Gör inte det här” går till räknarna', () => {
  const medLank = Object.values(TEXT.gorInte).filter((g) => g.lank);
  assert.ok(medLank.length > 0);
  for (const g of medLank) assert.ok(g.lank.href.startsWith('/rakna/'), g.lank.href);
  assert.equal(TEXT.gorInte['inifran-utan-daggpunkt'].lank.href, '/rakna/daggpunkt/');
  assert.ok(typeof TEXT.form['hjalp-region'] === 'string' && TEXT.form['hjalp-region'].trim().length > 0);
});

test('12.41: länktexten står exakt en gång i rådet', () => {
  for (const g of Object.values(TEXT.gorInte).filter((x) => x.lank)) {
    assert.equal(g.text.split(g.lank.text).length - 1, 1, g.lank.text);
  }
});

// ---------------------------------------------------------------------------
// 12 G. Koordinatorns punkter efter korrektur och läsare, varv 7

/* Vinden med 50 mm gammal ull och 100 mm tillägg, som i 12.37. */
const TUNN_VIND = (material) =>
  ok({ ...STANDARD, skikt: [skikt(1, 'gips', 13), skikt(2, 'mineralull-okand', 50)], tillagg: [tillagg(1, material, 100)] });

test('12.42: källistan har kommat direkt efter länken', () => {
  const sida = readFileSync(join(ROT, 'src', 'pages', 'rakna', 'u-varde.astro'), 'utf8');
  assert.ok(sida.includes('{k.titel}</a>, {k.last}'), 'kommat på samma rad som </a>');
});

test('12.43: rubrikorden för cellplast utan märke och lösullen', () => {
  const facit = {
    'cellplast-okand': '250 mm cellplast totalt',
    'stenull-granulate': '270 mm lösull av stenull totalt',
    'glasull-fyllupp': '290 mm lösull av glasull totalt',
    cellulosa: '260 mm cellulosa totalt',
    'stenull-vindsull': '270 mm lösull totalt',
  };
  for (const [m, vantat] of Object.entries(facit)) {
    const r = TUNN_VIND(m);
    assert.equal(r.besked, 'battre-men-over', m);
    const rubrik = rubrikFor(r);
    assert.ok(rubrik.includes(vantat), `${vantat} i ${rubrik}`);
    assert.ok(!rubrik.includes('(') && !rubrik.includes('utan märke'), rubrik);
    assert.equal(beskedVarden(r).tillaggNamn, beskedVarden(r).forslagNamn, m);
  }
  /* Klarar-rubriken tar samma ord. */
  const klarar = ok({ ...STANDARD, tillagg: [tillagg(1, 'stenull-granulate', 300)] });
  assert.equal(klarar.besked, 'klarar');
  assert.ok(rubrikFor(klarar).includes('300 mm lösull av stenull'), rubrikFor(klarar));
  const plast = ok({ ...STANDARD, tillagg: [tillagg(1, 'cellplast-okand', 300)] });
  assert.ok(rubrikFor(plast).includes('300 mm cellplast klarar'), rubrikFor(plast));
});

test('12.44: antalen i felen står med bokstäver', () => {
  assert.equal(TEXT.fel['skikt-for-manga'](GRANSER.antalSkikt[1]), 'Räknaren tar högst sex skikt. Slå ihop två skikt av samma material.');
  assert.equal(TEXT.fel['tillagg-for-manga'](GRANSER.antalTillagg[1]), 'Räknaren tar högst två lager att lägga till.');
  const sju = { ...BAS, skikt: [1, 2, 3, 4, 5, 6, 7].map((n) => skikt(n, 'gips', 13)) };
  const r = raknaUVarde(sju);
  assert.equal(r.status, 'ogiltig');
  assert.ok(r.fel.skikt.includes('sex skikt'), r.fel.skikt);
  assert.ok(!/d/.test(r.fel.skikt), r.fel.skikt);
});

test('12.45: ny orsak bara-vind för vägg och golv i läget skikt, med egen text', () => {
  assert.ok(!TEXT.aterbetalningSaknas['bara-vind'].includes(PLATSHALLARE));
  assert.ok(TEXT.aterbetalningSaknas['bara-vind'].startsWith('Återbetalningstid saknas, '));
  /* Oavsett material: också lösull med pris på en vägg får orsaken. */
  assert.equal(ok({ ...VAGG_EXEMPEL, tillagg: [tillagg(1, 'stenull-vindsull', 100)] }).aterbetalningSaknas, 'bara-vind');
  /* Läget uvarde och fönstret behåller sina orsaker. */
  assert.equal(ok(uvarde('vagg', 0.4, 0.18)).aterbetalningSaknas, 'uvarde-lage');
  assert.equal(ok(uvarde('golv', 0.233, 0.177, 80)).aterbetalningSaknas, 'uvarde-lage');
  assert.equal(ok(uvarde('fonster', 2.8, 0.9, 1.5)).aterbetalningSaknas, 'fonster-dorr');
  /* Utan besparing är orsaken fortfarande ingen-besparing. */
  assert.equal(ok({ ...VAGG_EXEMPEL, tillagg: [] }).aterbetalningSaknas, 'ingen-besparing');
});

test('12.46: Flexibatts föreslås i en total som går att köpa, annat i steg om 10 mm', () => {
  const summor = new Set([45, 90, 95, 135, 140, 180, 185, 190, 225, 230, 235, 270, 275, 280, 285]);
  for (const q of ['del=vagg', 'del=golv', 'del=vagg&tm1=stenull-flexibatts&td1=45', 'del=tak&tm1=stenull-flexibatts&td1=45']) {
    const r = ok(urAdress(q));
    if (r.saknas === null) continue;
    const total = Number(beskedVarden(r).mmTotalt);
    assert.ok(summor.has(total) || total > 285, `${q}: ${total}`);
    assert.ok(avrundaU(ok({ ...urAdress(q), tillagg: [tillagg(1, 'stenull-flexibatts', total)] }).uEfter, r.del) <= r.saknas.grans, q);
  }
  /* Lösull avrundas som förut. */
  assert.deepEqual(TUNN_VIND('stenull-vindsull').saknas.mm % 10, 0);
});

test('12.47: regeln delta-u bara för väggen, och Förenklingarna finns kvar för vind och golv', () => {
  const vagg = ok(urAdress('del=vagg'));
  const vind = ok(urAdress('del=tak'));
  const golv = ok(urAdress('del=golv'));
  assert.ok(vagg.regler.includes('delta-u'));
  assert.ok(!vind.regler.includes('delta-u'));
  assert.ok(!golv.regler.includes('delta-u'));
  assert.ok(vind.regler.includes('tak-kallvind') && vind.regler.includes('energi-inte-matare'));
  assert.ok(golv.regler.includes('golv-uteluft') && golv.regler.includes('energi-inte-matare'));
  /* Gruppen står i sidans SLAG; de tre reglerna hör till begransning, vars etikett är Förenklingarna. */
  const sida = readFileSync(join(ROT, 'src', 'pages', 'rakna', 'u-varde.astro'), 'utf8');
  for (const k of ['tak-kallvind', 'golv-uteluft', 'energi-inte-matare']) {
    assert.ok(sida.includes(`'${k}': 'begransning'`), k);
  }
  assert.equal(TEXT.darfor['slag-begransning'], 'Förenklingarna');
});
