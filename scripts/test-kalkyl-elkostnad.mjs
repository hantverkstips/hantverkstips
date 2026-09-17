/**
 * Kör elkostnadskalkylatorn mot de publicerade eltabellerna: köpguiden
 * src/content/guider/fukt/avfuktare-kallare.mdx och granskningen
 * src/content/tester/luftavfuktare/woods-sw39fw.mdx. Samma tal ska komma ut ur
 * formeln som står i tabellerna, annars säger sajten två saker på en gång.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-elkostnad.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import { ELPRIS_KR_PER_KWH } from '../src/lib/antaganden.ts';
import {
  GRANSER,
  produktForval,
  produktSlugFranQuery,
  raknaElkostnad,
  STANDARD,
  standardMedForval,
  tolkaQuery,
} from '../src/lib/kalkyl/elkostnad.ts';

const TOLERANS = 0.05;

function naraNog(fick, vantat, vad) {
  assert.ok(Math.abs(fick - vantat) <= TOLERANS, `${vad}: fick ${fick}, väntade ${vantat} plus minus ${TOLERANS}`);
}

/** Elpriset som tabellerna på sajten är räknade med. */
test('elpriset är SCB-talet ur antaganden.ts', () => {
  assert.equal(ELPRIS_KR_PER_KWH, 2.4);
  assert.equal(STANDARD.elprisKrPerKwh, 2.4);
  assert.equal(STANDARD.effektW, 320);
  assert.equal(STANDARD.timmarPerDygn, 8);
  assert.equal(STANDARD.dagar, 30);
});

/**
 * Åtta fall. De fyra första är rader ur köpguidens eltabell, de två därpå ur
 * granskningen av Wood's SW39FW, och de två sista är kr per liter.
 */
const FALL = [
  {
    namn: "Wood's MDK21, 240 W hygrostatstyrd, en månad",
    indata: { effektW: 240, timmarPerDygn: 8, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: null },
    kwhPerPeriod: 57.6,
    krPerPeriod: 138.24,
    dygnetRunt: false,
  },
  {
    namn: "Wood's SW39FW, 320 W hygrostatstyrd, en månad, köpguidens rad",
    indata: { effektW: 320, timmarPerDygn: 8, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: null },
    kwhPerPeriod: 76.8,
    krPerPeriod: 184.32,
    kwhPerDygn: 2.56,
    krPerDygn: 6.144,
    dygnetRunt: false,
  },
  {
    namn: 'Acetec EvoDry 6H 2.0, 530 W hygrostatstyrd, en månad',
    indata: { effektW: 530, timmarPerDygn: 8, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: null },
    kwhPerPeriod: 127.2,
    krPerPeriod: 305.28,
    dygnetRunt: false,
  },
  {
    namn: "Wood's SW59FM, 690 W hygrostatstyrd, en månad",
    indata: { effektW: 690, timmarPerDygn: 8, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: null },
    kwhPerPeriod: 165.6,
    krPerPeriod: 397.44,
    dygnetRunt: false,
  },
  {
    namn: "Wood's SW39FW, 320 W dygnet runt, en månad",
    indata: { effektW: 320, timmarPerDygn: 24, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: null },
    kwhPerPeriod: 230.4,
    krPerPeriod: 552.96,
    dygnetRunt: true,
  },
  {
    namn: "Wood's SW38FW, 510 W dygnet runt, en månad",
    indata: { effektW: 510, timmarPerDygn: 24, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: null },
    kwhPerPeriod: 367.2,
    krPerPeriod: 881.28,
    dygnetRunt: true,
  },
  {
    namn: 'Acetec EvoDry 6H 2.0, 530 W dygnet runt, 7,4 liter per dygn',
    indata: { effektW: 530, timmarPerDygn: 24, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: 7.4 },
    kwhPerPeriod: 381.6,
    krPerPeriod: 915.84,
    kwhPerLiter: 1.72,
    krPerLiter: 4.13,
    dygnetRunt: true,
  },
  {
    namn: "Wood's SW39FW, 320 W dygnet runt, 5,7 liter per dygn i en källare på 15 grader",
    indata: { effektW: 320, timmarPerDygn: 24, dagar: 30, elprisKrPerKwh: 2.4, literPerDygn: 5.7 },
    kwhPerPeriod: 230.4,
    krPerPeriod: 552.96,
    kwhPerLiter: 1.35,
    krPerLiter: 3.23,
    dygnetRunt: true,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaElkostnad(f.indata);
    assert.equal(r.status, 'ok');
    naraNog(r.kwhPerPeriod, f.kwhPerPeriod, 'kWh per period');
    naraNog(r.krPerPeriod, f.krPerPeriod, 'kr per period');
    if (f.kwhPerDygn !== undefined) naraNog(r.kwhPerDygn, f.kwhPerDygn, 'kWh per dygn');
    if (f.krPerDygn !== undefined) naraNog(r.krPerDygn, f.krPerDygn, 'kr per dygn');
    if (f.kwhPerLiter === undefined) {
      assert.equal(r.kwhPerLiter, null);
      assert.equal(r.krPerLiter, null);
    } else {
      naraNog(r.kwhPerLiter, f.kwhPerLiter, 'kWh per liter');
      naraNog(r.krPerLiter, f.krPerLiter, 'kr per liter');
    }
    assert.equal(r.gardygnetRunt, f.dygnetRunt);
    assert.equal(r.gorInteDetHar === null, !f.dygnetRunt);
    console.log(
      `${f.namn}\n  ${r.kwhPerDygn.toFixed(2)} kWh per dygn, ${r.kwhPerPeriod.toFixed(1)} kWh och ` +
        `${r.krPerPeriod.toFixed(0)} kr på perioden, ${r.krPerAr.toFixed(0)} kr per år` +
        (r.krPerLiter === null ? '' : `, ${r.kwhPerLiter.toFixed(2)} kWh och ${r.krPerLiter.toFixed(2)} kr per liter`),
    );
  });
}

test('året är samma räkning med 365 dagar', () => {
  const r = raknaElkostnad({ ...STANDARD });
  assert.equal(r.status, 'ok');
  naraNog(r.kwhPerAr, 2.56 * 365, 'kWh per år');
  naraNog(r.krPerAr, 2.56 * 365 * 2.4, 'kr per år');
  const helt = raknaElkostnad({ ...STANDARD, dagar: 365 });
  naraNog(helt.kwhPerPeriod, r.kwhPerAr, 'ett år som period ger samma tal som kr per år');
});

test('ogiltig indata ger fel per fält, och liter får lämnas tomt', () => {
  const r = raknaElkostnad({
    effektW: NaN,
    timmarPerDygn: 30,
    dagar: 0,
    elprisKrPerKwh: 99,
    literPerDygn: 500,
  });
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.effektW, /effekt/);
  assert.match(r.fel.timmarPerDygn, /gångtid/);
  assert.match(r.fel.dagar, /dagar/);
  assert.match(r.fel.elprisKrPerKwh, /elpris/);
  assert.match(r.fel.literPerDygn, /liter/);
  assert.deepEqual([...GRANSER.timmarPerDygn], [0.1, 24]);

  const utanLiter = raknaElkostnad({ ...STANDARD, literPerDygn: null });
  assert.equal(utanLiter.status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(new URLSearchParams('effekt=530&timmar=24&dagar=30&liter=7,4'));
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    effektW: 530,
    timmarPerDygn: 24,
    dagar: 30,
    elprisKrPerKwh: 2.4,
    literPerDygn: 7.4,
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  // Radioknappen "eget antal" skickar dagar=eget plus fältet bredvid.
  assert.equal(tolkaQuery(new URLSearchParams('dagar=eget&dagareget=90')).indata.dagar, 90);
  assert.equal(tolkaQuery(new URLSearchParams('dagar=365')).indata.dagar, 365);

  // Eget elpris slår SCB-talet, och ett tomt literfält är inte ett fel.
  assert.equal(tolkaQuery(new URLSearchParams('elpris=1,15')).indata.elprisKrPerKwh, 1.15);
  assert.equal(tolkaQuery(new URLSearchParams('liter=')).indata.literPerDygn, null);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('effekt=trehundra')).indata.effektW));
});

test('produkten i adressen fyller i effekten, men aldrig litern', () => {
  assert.equal(produktSlugFranQuery(new URLSearchParams('produkt=woods-sw39fw')), 'woods-sw39fw');
  assert.equal(produktSlugFranQuery(new URLSearchParams('produkt=../hemligt')), null);
  assert.equal(produktSlugFranQuery(new URLSearchParams('')), null);

  /*
   * Specs som de ligger i databasen för Wood's SW39FW och Acetec EvoDry 6H 2.0.
   * Kapaciteten står i båda raderna och ska ändå inte komma med: märkt kapacitet
   * är mätt vid 30 grader och 80 procent luftfuktighet, inte i en källare.
   */
  const sw39 = produktForval({ effekt_w: 320, kapacitet_liter_dygn: 19, typ: 'kondens' });
  assert.deepEqual(sw39, { effektW: 320 });
  const evodry = produktForval({ effekt_w: '530', kapacitet_liter_dygn: 7.4 });
  assert.deepEqual(evodry, { effektW: 530 });

  // Produkt utan effekt ger standardvärdena, inte en tom sida.
  assert.deepEqual(produktForval({ typ: 'kondens' }), { effektW: null });
  assert.deepEqual(produktForval(null), { effektW: null });
  assert.deepEqual(standardMedForval({ effektW: null }), STANDARD);

  const medProdukt = tolkaQuery(new URLSearchParams('produkt=acetec-evodry-6h-2'), evodry);
  assert.equal(medProdukt.indata.effektW, 530);
  assert.equal(medProdukt.indata.literPerDygn, null, 'literfältet ska stå tomt vid ?produkt=');
  assert.equal(medProdukt.indata.timmarPerDygn, 8);

  const andrad = tolkaQuery(new URLSearchParams('produkt=acetec-evodry-6h-2&effekt=300'), evodry);
  assert.equal(andrad.indata.effektW, 300, 'läsarens eget tal ska slå produktens');

  // Skriver läsaren själv ett tal räknas literpriset som vanligt.
  const medLiter = tolkaQuery(new URLSearchParams('produkt=acetec-evodry-6h-2&timmar=24&liter=7,4'), evodry);
  const r = raknaElkostnad(medLiter.indata);
  assert.equal(r.status, 'ok');
  naraNog(r.kwhPerLiter, 1.72, 'kWh per liter');
  naraNog(r.krPerLiter, 4.13, 'kr per liter');
});
