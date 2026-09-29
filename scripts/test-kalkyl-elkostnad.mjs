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

/*
 * Förvalet för <Kalkylator namn="elkostnad" forval="..." /> (svaret till SEO,
 * docs/briefer/seo-checklista-2026-09-29/raknare.md, tillägget för startlista 4):
 * golvvärmesidan och garagesidan bäddar in räknaren med sina egna värden.
 */
import {
  formVarden,
  forvalFranAdress,
  GOR_INTE_DYGNET_RUNT_GOLVVARME,
  gorInteText,
  STANDARD as EL_STANDARD,
  typFranQuery,
} from '../src/lib/kalkyl/elkostnad.ts';
import { readFileSync as lasFil } from 'node:fs';

test('förval: golvvärme skrivs som hela golvets effekt i watt, med typen', () => {
  // Faktabladet docs/briefer/faktablad/kunskap-golvvarme-badrum.md, avsnitt 1
  // och 2d: DEVImat 150T, "150 W/m²", gånger 4 m² fri yta är 600 W. Talet och
  // källan är artikelns; räknaren tar bara emot watten.
  const f = forvalFranAdress('effekt=600&dagar=365&typ=golvvarme');
  assert.equal(f.status, 'ok');
  assert.equal(f.typ, 'golvvarme');
  assert.equal(f.indata.effektW, 600);
  assert.equal(f.indata.dagar, 365);
  assert.equal(f.indata.timmarPerDygn, EL_STANDARD.timmarPerDygn);
  assert.equal(f.indata.elprisKrPerKwh, EL_STANDARD.elprisKrPerKwh);
  assert.equal(f.varden.effekt, '600');
  assert.equal(f.varden.dagar, '365');
  assert.equal(f.varden.liter, '');
  assert.equal(forvalFranAdress('effekt=320').typ, 'maskin');
  assert.equal(forvalFranAdress('effekt=600&typ=bastu').status, 'fel');
});

test('typ: golvvärme visar aldrig avfuktarens text vid 24 timmar', () => {
  assert.equal(typFranQuery(new URLSearchParams('typ=golvvarme')), 'golvvarme');
  assert.equal(typFranQuery(new URLSearchParams('typ=x')), 'maskin');
  assert.equal(typFranQuery(new URLSearchParams('')), 'maskin');
  const dygnet = raknaElkostnad({ ...EL_STANDARD, effektW: 600, timmarPerDygn: 24 });
  assert.equal(dygnet.status, 'ok');
  // Maskinen: avfuktarens text, som förut.
  assert.equal(gorInteText(dygnet, 'maskin'), dygnet.gorInteDetHar);
  assert.match(gorInteText(dygnet, 'maskin'), /avfuktare/);
  // Golvvärmen: golvvärmens egen text, eller ingen alls tills hantverkaren skrivit den.
  assert.equal(gorInteText(dygnet, 'golvvarme'), GOR_INTE_DYGNET_RUNT_GOLVVARME);
  assert.doesNotMatch(gorInteText(dygnet, 'golvvarme') ?? '', /avfuktare|hygrostat/);
  const atta = raknaElkostnad({ ...EL_STANDARD, effektW: 600 });
  assert.equal(gorInteText(atta, 'golvvarme'), null);
});

test('sidan: typen följer med i formuläret och den delbara adressen', () => {
  const sida = lasFil(new URL('../src/pages/rakna/elkostnad.astro', import.meta.url), 'utf8');
  assert.match(sida, /typFranQuery\(q\)/);
  assert.match(sida, /delaQuery\.set\('typ', typ\)/);
  assert.match(sida, /gorInteText\(visat, typ\)/);
  assert.doesNotMatch(sida, /\{visat\.gorInteDetHar\}/);
  const form = lasFil(new URL('../src/components/kalkyl/ElkostnadForm.astro', import.meta.url), 'utf8');
  assert.match(form, /name="typ" value="golvvarme"/);
});

test('förval: avfuktare med liter och decimalkomma', () => {
  const f = forvalFranAdress('effekt=320&timmar=8,5&liter=6&dagar=365');
  assert.equal(f.status, 'ok');
  assert.equal(f.indata.timmarPerDygn, 8.5);
  assert.equal(f.indata.literPerDygn, 6);
  assert.equal(f.varden.timmar, '8,5');
  assert.equal(f.varden.liter, '6');
  assert.equal(f.varden.dagar, '365');
});

test('förval: okänd nyckel eller ogiltigt värde ger fel', () => {
  assert.equal(forvalFranAdress('effekt=100&kvm=4').status, 'fel');
  assert.equal(forvalFranAdress('effekt=abc').status, 'fel');
  assert.equal(forvalFranAdress('timmar=25').status, 'fel');
});

test('formVarden(STANDARD) är formulärets standardvärden som förut', () => {
  const v = formVarden(EL_STANDARD);
  assert.equal(v.effekt, '320');
  assert.equal(v.timmar, '8');
  assert.equal(v.dagar, '30');
  assert.equal(v.elpris, EL_STANDARD.elprisKrPerKwh.toFixed(2).replace('.', ','));
  assert.equal(v.liter, '');
});

test('Kalkylator: förval för elkostnad går genom forvalFranAdress och fyller formuläret', () => {
  const k = lasFil(new URL('../src/components/ui/Kalkylator.astro', import.meta.url), 'utf8');
  assert.match(k, /namn !== 'grannemedgivande' && namn !== 'elkostnad'/);
  assert.match(k, /elkostnadForval\(forval\)/);
  assert.match(k, /<ElkostnadForm kompakt=\{true\} indata=\{elIndata\} varden=\{elVarden\} typ=\{elTyp\}/);
});
