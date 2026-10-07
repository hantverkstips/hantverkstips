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

/*
 * Förvalet produkt=[slug] i en inbäddning
 * (docs/briefer/spec-elkostnad-forval-2026-09-30.md avsnitt 1 och 3).
 * Effekten 275 W är ett provtal som skickas in; funktionen läser aldrig databasen.
 */
import { FORVAL_NYCKLAR } from '../src/lib/kalkyl/elkostnad.ts';

test('förval: produkten ger effekten och slugen', () => {
  const f = forvalFranAdress('produkt=woods-mdk21', { effektW: 275 });
  assert.equal(f.status, 'ok');
  assert.equal(f.indata.effektW, 275);
  assert.equal(f.produktSlug, 'woods-mdk21');
});

test('förval: effekt i förvalet vinner över produktens', () => {
  const f = forvalFranAdress('produkt=woods-mdk21&effekt=300', { effektW: 275 });
  assert.equal(f.status, 'ok');
  assert.equal(f.indata.effektW, 300);
});

test('förval: en ogiltig slug ger ingen produkt men standardeffekten', () => {
  const f = forvalFranAdress('produkt=Ogiltig slug!');
  assert.equal(f.status, 'ok');
  assert.equal(f.produktSlug, null);
  assert.equal(f.indata.effektW, EL_STANDARD.effektW);
});

test('förval: maskin är ingen nyckel', () => {
  assert.equal(forvalFranAdress('maskin=x').status, 'fel');
});

test('förval: nyckellistan innehåller produkt', () => {
  assert.ok(FORVAL_NYCKLAR.includes('produkt'));
});

/*
 * Förval per plats (docs/briefer/spec-elkostnad-forval-2026-09-30.md avsnitt 7.1
 * och 7.5). Kontrolltalen är specens tabell i 7.1: 8 h per dygn, 365 dagar och
 * 2,40 kr per kWh.
 */
import { AVFUKTARPLATSER, FORVAL_PER_PLATS, platsFranQuery } from '../src/lib/kalkyl/elkostnad.ts';

const PLATS_KONTROLL = {
  kallare: { effektW: 320, kwhPerDygn: 2.56, kwhPerAr: 934.4, krPerAr: 2242.56 },
  krypgrund: { effektW: 350, kwhPerDygn: 2.8, kwhPerAr: 1022, krPerAr: 2452.8 },
  vind: { effektW: 350, kwhPerDygn: 2.8, kwhPerAr: 1022, krPerAr: 2452.8 },
  garage: { effektW: 275, kwhPerDygn: 2.2, kwhPerAr: 803, krPerAr: 1927.2 },
};

test('plats: varje plats ger förvalet och kontrolltalen i 7.1', () => {
  assert.deepEqual(AVFUKTARPLATSER, Object.keys(PLATS_KONTROLL));
  assert.deepEqual(Object.keys(FORVAL_PER_PLATS), [...Object.keys(PLATS_KONTROLL), 'radonsug']);
  for (const [plats, k] of Object.entries(PLATS_KONTROLL)) {
    const q = new URLSearchParams(`plats=${plats}&dagar=365`);
    assert.equal(platsFranQuery(q), plats);
    const { indata, harIndata } = tolkaQuery(q);
    assert.equal(harIndata, true);
    assert.equal(indata.effektW, k.effektW, plats);
    assert.equal(indata.timmarPerDygn, 8, plats);
    assert.equal(indata.elprisKrPerKwh, 2.4);
    const r = raknaElkostnad(indata);
    assert.equal(r.status, 'ok');
    assert.ok(Math.abs(r.kwhPerDygn - k.kwhPerDygn) < 1e-9, `${plats} kWh per dygn ${r.kwhPerDygn}`);
    assert.ok(Math.abs(r.kwhPerAr - k.kwhPerAr) < 1e-9, `${plats} kWh per år ${r.kwhPerAr}`);
    assert.ok(Math.abs(r.krPerAr - k.krPerAr) < 1e-6, `${plats} kr per år ${r.krPerAr}`);
    const f = forvalFranAdress(`plats=${plats}`);
    assert.equal(f.status, 'ok');
    assert.equal(f.plats, plats);
    assert.equal(f.indata.effektW, k.effektW);
  }
});

test('plats: effekt och timmar i adressen vinner över platsen', () => {
  assert.equal(tolkaQuery(new URLSearchParams('plats=kallare&effekt=500')).indata.effektW, 500);
  assert.equal(tolkaQuery(new URLSearchParams('plats=kallare&timmar=24')).indata.timmarPerDygn, 24);
  assert.equal(forvalFranAdress('plats=kallare&effekt=500').indata.effektW, 500);
  assert.equal(forvalFranAdress('plats=kallare&timmar=24').indata.timmarPerDygn, 24);
  // Produkten går före platsen.
  assert.equal(tolkaQuery(new URLSearchParams('plats=krypgrund&produkt=woods-mdk21'), { effektW: 275 }).indata.effektW, 275);
});

/*
 * Radonsugen (docs/briefer/spec-elkostnad-radonsug-2026-10-07.md): Corroventa
 * RS 400 på 25 W, 24 timmar, 365 dagar. Kontrolltalen ur faktabladet
 * kunskap-radonsug.md 4.3: 0,6 kWh per dygn, 219 kWh och 525,60 kr per år.
 */
test('plats: radonsug ger 25 W, 24 timmar och 365 dagar, 219 kWh och 525,6 kr', () => {
  const q = new URLSearchParams('plats=radonsug');
  assert.equal(platsFranQuery(q), 'radonsug');
  const { indata, harIndata } = tolkaQuery(q);
  assert.equal(harIndata, true);
  assert.equal(indata.effektW, 25);
  assert.equal(indata.timmarPerDygn, 24);
  assert.equal(indata.dagar, 365);
  assert.equal(indata.elprisKrPerKwh, 2.4);
  const r = raknaElkostnad(indata);
  assert.equal(r.status, 'ok');
  assert.ok(Math.abs(r.kwhPerDygn - 0.6) < 1e-9, `kWh per dygn ${r.kwhPerDygn}`);
  assert.ok(Math.abs(r.kwhPerPeriod - 219) < 1e-9, `kWh för perioden ${r.kwhPerPeriod}`);
  assert.ok(Math.abs(r.kwhPerAr - 219) < 1e-9, `kWh per år ${r.kwhPerAr}`);
  assert.ok(Math.abs(r.krPerPeriod - 525.6) < 1e-6, `kr för perioden ${r.krPerPeriod}`);
  assert.ok(Math.abs(r.krPerAr - 525.6) < 1e-6, `kr per år ${r.krPerAr}`);
  // Samma i Kalkylator, forval="plats=radonsug".
  const f = forvalFranAdress('plats=radonsug');
  assert.equal(f.status, 'ok');
  assert.equal(f.plats, 'radonsug');
  assert.equal(f.indata.effektW, 25);
  assert.equal(f.indata.timmarPerDygn, 24);
  assert.equal(f.indata.dagar, 365);
  // Platser utan egna dagar behåller STANDARD:s.
  assert.equal(tolkaQuery(new URLSearchParams('plats=kallare')).indata.dagar, EL_STANDARD.dagar);
});

test('plats: en effekt i adressen vinner över radonsugens förval', () => {
  assert.equal(tolkaQuery(new URLSearchParams('plats=radonsug&effekt=60')).indata.effektW, 60);
  assert.equal(forvalFranAdress('plats=radonsug&effekt=60').indata.effektW, 60);
  assert.equal(tolkaQuery(new URLSearchParams('plats=radonsug&dagar=30')).indata.dagar, 30);
});

test('plats: tabellen över avfuktare har inte radonsugen', () => {
  assert.ok(!AVFUKTARPLATSER.includes('radonsug'));
  assert.equal(FORVAL_PER_PLATS.radonsug.typ, 'flakt');
  assert.equal(FORVAL_PER_PLATS.radonsug.villkor, undefined);
});

test('plats: nyckellistan har plats', () => {
  assert.ok(FORVAL_NYCKLAR.includes('plats'));
});

test('plats: FORVAL_PER_PLATS har villkor på varje avfuktare', () => {
  for (const plats of AVFUKTARPLATSER) {
    const p = FORVAL_PER_PLATS[plats];
    assert.ok(Number.isFinite(p.villkor.tempC), plats);
    assert.ok(Number.isFinite(p.villkor.rf), plats);
    assert.ok(p.maskin.length > 0, plats);
    assert.ok(p.typ === 'kondens' || p.typ === 'sorption', plats);
  }
  assert.deepEqual(FORVAL_PER_PLATS.kallare.villkor, { tempC: 20, rf: 70 });
  assert.deepEqual(FORVAL_PER_PLATS.krypgrund.villkor, { tempC: 27, rf: 60 });
  assert.deepEqual(FORVAL_PER_PLATS.garage.villkor, { tempC: 30, rf: 80 });
});

/*
 * Tvättläget (docs/briefer/spec-elkostnad-forval-2026-09-30.md avsnitt 8.1 och 8.5).
 * Kontrolltalen är specens tabell i 8.1: 7 kg, 1 torkning i veckan och 2,40 kr per
 * kWh ger 365 kg per år. Talen per kg är Energimyndighetens test, 2017-12-11, tabell 1.
 */
import {
  raknaTvatt,
  tolkaTvatt,
  TVATT_GRANSER,
  TVATT_KWH_PER_KG,
  TVATT_STANDARD,
  TVATT_TEST,
} from '../src/lib/kalkyl/elkostnad.ts';

const TVATT_KONTROLL = {
  avfuktare: { kwhPerAr: 116.8, krPerAr: 280.32, kwhPerTorkning: 2.24 },
  varmepumpstumlare: { kwhPerAr: 83.95, krPerAr: 201.48, kwhPerTorkning: 1.61 },
  kondenstumlare: { kwhPerAr: 98.55, krPerAr: 236.52, kwhPerTorkning: 1.89 },
};

test('tvätt: TVATT_KWH_PER_KG är testets tal, exakt', () => {
  assert.deepEqual(TVATT_KWH_PER_KG, { avfuktare: 0.32, varmepumpstumlare: 0.23, kondenstumlare: 0.27 });
  assert.equal(TVATT_TEST.kgPerTorkning, 7);
  assert.equal(TVATT_TEST.datum, '2017-12-11');
  assert.match(TVATT_TEST.url, /^https:\/\/www\.energimyndigheten\.se\//);
  assert.deepEqual(TVATT_STANDARD, { kgPerTorkning: 7, torkningarPerVecka: 1, elprisKrPerKwh: 2.4 });
});

test('tvätt: raknaTvatt(TVATT_STANDARD) ger kontrolltalen i 8.1', () => {
  const r = raknaTvatt(TVATT_STANDARD);
  assert.equal(r.status, 'ok');
  assert.ok(Math.abs(r.kgPerAr - 365) < 1e-9, `kg per år ${r.kgPerAr}`);
  for (const [metod, k] of Object.entries(TVATT_KONTROLL)) {
    const m = r.metoder[metod];
    assert.ok(Math.abs(m.kwhPerAr - k.kwhPerAr) < 1e-9, `${metod} kWh per år ${m.kwhPerAr}`);
    assert.ok(Math.abs(m.krPerAr - k.krPerAr) < 1e-6, `${metod} kr per år ${m.krPerAr}`);
    assert.ok(Math.abs(m.kwhPerTorkning - k.kwhPerTorkning) < 1e-9, `${metod} kWh per torkning ${m.kwhPerTorkning}`);
  }
  assert.deepEqual(Object.keys(r.metoder), Object.keys(TVATT_KONTROLL));
});

test('tvätt: decimalkomma, kg=3,5 ger halva talen per torkning', () => {
  const { indata, harIndata } = tolkaTvatt(new URLSearchParams('typ=tvatt&kg=3,5'));
  assert.equal(harIndata, true);
  assert.equal(indata.kgPerTorkning, 3.5);
  assert.equal(indata.torkningarPerVecka, 1);
  assert.equal(indata.elprisKrPerKwh, 2.4);
  const r = raknaTvatt(indata);
  assert.equal(r.status, 'ok');
  for (const [metod, k] of Object.entries(TVATT_KONTROLL)) {
    assert.ok(Math.abs(r.metoder[metod].kwhPerTorkning - k.kwhPerTorkning / 2) < 1e-9, metod);
    assert.ok(Math.abs(r.metoder[metod].krPerAr - k.krPerAr / 2) < 1e-6, metod);
  }
  assert.equal(tolkaTvatt(new URLSearchParams('torkningar=0,5')).indata.torkningarPerVecka, 0.5);
  assert.equal(tolkaTvatt(new URLSearchParams('elpris=1,15')).indata.elprisKrPerKwh, 1.15);
  assert.equal(tolkaTvatt(new URLSearchParams('typ=tvatt')).harIndata, false);
  assert.deepEqual(tolkaTvatt(new URLSearchParams('typ=tvatt')).indata, TVATT_STANDARD);
});

test('tvätt: gränserna ger fel per fält', () => {
  assert.deepEqual([...TVATT_GRANSER.kgPerTorkning], [1, 20]);
  assert.deepEqual([...TVATT_GRANSER.torkningarPerVecka], [0.1, 30]);
  assert.deepEqual([...TVATT_GRANSER.elprisKrPerKwh], [...GRANSER.elprisKrPerKwh]);
  const r = raknaTvatt({ kgPerTorkning: 21, torkningarPerVecka: 0, elprisKrPerKwh: 99 });
  assert.equal(r.status, 'ogiltig');
  assert.equal(typeof r.fel.kgPerTorkning, 'string');
  assert.equal(typeof r.fel.torkningarPerVecka, 'string');
  assert.equal(typeof r.fel.elprisKrPerKwh, 'string');
  const baraKg = raknaTvatt({ ...TVATT_STANDARD, kgPerTorkning: NaN });
  assert.equal(baraKg.status, 'ogiltig');
  assert.deepEqual(Object.keys(baraKg.fel), ['kgPerTorkning']);
  assert.equal(raknaTvatt({ ...TVATT_STANDARD, kgPerTorkning: 1, torkningarPerVecka: 30 }).status, 'ok');
  assert.equal(raknaTvatt({ ...TVATT_STANDARD, kgPerTorkning: 20, torkningarPerVecka: 0.1 }).status, 'ok');
});

test('tvätt: förvalet typ=tvatt är ok, kg=50 ger fel', () => {
  const f = forvalFranAdress('typ=tvatt');
  assert.equal(f.status, 'ok');
  assert.equal(f.typ, 'tvatt');
  assert.deepEqual(f.tvatt?.indata, TVATT_STANDARD);
  assert.deepEqual(f.tvatt?.varden, { kg: '7', torkningar: '1', elpris: '2,40' });
  const egen = forvalFranAdress('typ=tvatt&kg=5&torkningar=3');
  assert.equal(egen.status, 'ok');
  assert.equal(egen.tvatt?.indata.kgPerTorkning, 5);
  assert.equal(egen.tvatt?.indata.torkningarPerVecka, 3);
  assert.equal(forvalFranAdress('typ=tvatt&kg=50').status, 'fel');
  // Maskinens förval har inget tvättläge, och nycklarna blandas inte.
  assert.equal(forvalFranAdress('effekt=320').tvatt, null);
  assert.equal(forvalFranAdress('kg=7').status, 'fel');
  assert.equal(forvalFranAdress('typ=tvatt&effekt=300').status, 'fel');
});

test('tvätt: typFranQuery ger tvatt, och nyckellistan har kg och torkningar', () => {
  assert.equal(typFranQuery(new URLSearchParams('typ=tvatt')), 'tvatt');
  assert.equal(typFranQuery(new URLSearchParams('typ=golvvarme')), 'golvvarme');
  assert.ok(FORVAL_NYCKLAR.includes('kg'));
  assert.ok(FORVAL_NYCKLAR.includes('torkningar'));
});
