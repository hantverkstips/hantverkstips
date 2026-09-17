/**
 * Kör regel- och skruvräknaren mot räkneexemplet i den publicerade guiden
 * src/content/guider/inomhus/bygga-innervagg.mdx, avsnittet "Så räknar du
 * material per löpmeter vägg". Samma tal ska komma ut ur formeln som står i
 * tabellen, annars säger sajten två saker på en gång.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-innervagg.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  AVVAXLING_M,
  bastaHandelslangd,
  ccStandardForLag,
  GRANSER,
  HANDELSLANGDER_M,
  raknaInnervagg,
  SKIVA_KVM,
  skruvPerKvm,
  STANDARD,
  tolkaQuery,
} from '../src/lib/kalkyl/innervagg.ts';

const TOLERANS = 0.05;

function naraNog(fick, vantat, vad, tolerans = TOLERANS) {
  assert.ok(Math.abs(fick - vantat) <= tolerans, `${vad}: fick ${fick}, väntade ${vantat} plus minus ${tolerans}`);
}

test('konstanterna är guidens', () => {
  assert.equal(SKIVA_KVM, 3);
  assert.deepEqual([...HANDELSLANGDER_M], [2.4, 2.7, 3.0, 3.6, 4.2, 4.8]);
  assert.equal(STANDARD.langdM, 4);
  assert.equal(STANDARD.hojdM, 2.5);
  assert.equal(STANDARD.regel, '45x70');
  assert.equal(STANDARD.lag, 1);
  assert.equal(STANDARD.dorrar, 0);
  assert.equal(STANDARD.ull, true);
  /* Svenskt Trä: c 400 mm under ett lag 1 200-skivor, c 600 mm först vid två lag. */
  assert.equal(ccStandardForLag(1), 400);
  assert.equal(ccStandardForLag(2), 600);
  assert.equal(STANDARD.ccMm, 400);
  naraNog(AVVAXLING_M, 0.99, 'avväxlingen är öppningen plus två regelbredder');
});

/**
 * Skruvtätheten. Guiden kontrollräknar 35 skruv på 5,0 kvm skivyta, alltså
 * 7 skruv per kvadratmeter vid c 600 mm, och det är c 200 i kant och c 300 i
 * fält när varannan regel är skivkant.
 */
test('skruvtätheten stämmer mot guidens kontrollräkning', () => {
  naraNog(skruvPerKvm(600), 7, 'skruv per kvadratmeter vid c 600 mm', 0.1);
  assert.ok(skruvPerKvm(400) > skruvPerKvm(600), 'tätare reglar ger fler skruv per kvadratmeter');
  assert.ok(skruvPerKvm(450) > skruvPerKvm(600), 'c 450 ger fler skruv än c 600');
});

/**
 * Sex fall. Det första är guidens räkneexempel, de fem därpå byter ett
 * antagande i taget: regelavstånd, skivlag, dörröppning, dimension och höjd,
 * samt en vägg utan isolering.
 */
const FALL = [
  {
    namn: 'Guidens räkneexempel: 4 m vägg, 2,50 m höjd, c 600, 45 × 70, ett lag',
    indata: { langdM: 4, hojdM: 2.5, regel: '45x70', lag: 1, ccMm: 600, dorrar: 0, ull: true },
    antalReglar: 8,
    /*
     * Guiden räknar per löpmeter och landar på 6,2 löpmeter virke per meter
     * vägg, alltså cirka 25 m på den här väggen. Talet är en täthet: 1,67
     * reglar per meter gånger rumshöjden, plus syll och hammarband. Den regel
     * guiden nämner i ord, "plus en hel regel i vardera väggänden", ryms inte
     * i tätheten. Kalkylatorn räknar reglarna en och en och får därför med den
     * åttonde regeln i den sista väggänden, vilket är 2,5 m mer virke.
     */
    lopmeterVirke: 27.88,
    guidensLopmeter: 24.8,
    antalSkivor: 7,
    antalSkruv: 139,
    skruvAttKopa: 200,
    ullKvm: 10,
    ullBreddMm: 610,
    handelslangdM: 2.7,
    /* Cc 600 under ett enda lag gips är felet Svenskt Trä varnar för. */
    rad: 1,
  },
  {
    namn: 'Samma vägg på c 400, alltså det Svenskt Trä anger för ett lag',
    indata: { langdM: 4, hojdM: 2.5, regel: '45x70', lag: 1, ccMm: 400, dorrar: 0, ull: true },
    antalReglar: 11,
    lopmeterVirke: 35.33,
    antalSkivor: 7,
    antalSkruv: 195,
    skruvAttKopa: 200,
    ullKvm: 10,
    /* Norgips anger 455 och 610 mm bred ull. För c 400 finns ingen bredd. */
    ullBreddMm: null,
    handelslangdM: 2.7,
    rad: 0,
  },
  {
    namn: 'Två lag gips på c 600, samma vägg',
    indata: { langdM: 4, hojdM: 2.5, regel: '45x70', lag: 2, ccMm: 600, dorrar: 0, ull: true },
    antalReglar: 8,
    lopmeterVirke: 27.88,
    /* Dubbla skivor: 40 kvm skivyta, och en skiva är 3,0 kvm. */
    antalSkivor: 14,
    /* Yttersta laget c 200 och c 300, innersta laget c 750 enligt Norgips. */
    antalSkruv: 184,
    skruvAttKopa: 200,
    ullKvm: 10,
    ullBreddMm: 610,
    handelslangdM: 2.7,
    rad: 0,
  },
  {
    namn: 'Samma vägg med en dörröppning',
    indata: { langdM: 4, hojdM: 2.5, regel: '45x70', lag: 1, ccMm: 600, dorrar: 1, ull: true },
    /* Två extra reglar vid öppningen, och en avväxling över den. */
    antalReglar: 10,
    lopmeterVirke: 33.84,
    antalSkivor: 7,
    antalSkruv: 139,
    skruvAttKopa: 200,
    ullKvm: 10,
    ullBreddMm: 610,
    handelslangdM: 2.7,
    /* Två råd: c 600 under ett lag, och skivskarven vid dörrkanten. */
    rad: 2,
  },
  {
    namn: '45 × 95 på c 450, 6 m vägg med 2,70 m i tak och en dörr, utan isolering',
    indata: { langdM: 6, hojdM: 2.7, regel: '45x95', lag: 1, ccMm: 450, dorrar: 1, ull: false },
    antalReglar: 17,
    lopmeterVirke: 58.64,
    antalSkivor: 11,
    antalSkruv: 285,
    skruvAttKopa: 300,
    ullKvm: null,
    ullBreddMm: null,
    /* Kaplängden blir 2,685 m och 2,7 m är handelslängden som spiller minst. */
    handelslangdM: 2.7,
    rad: 1,
  },
  {
    namn: 'Kort vägg, 2,40 m lång och 2,40 m hög, c 400, ett lag',
    indata: { langdM: 2.4, hojdM: 2.4, regel: '45x70', lag: 1, ccMm: 400, dorrar: 0, ull: true },
    antalReglar: 7,
    lopmeterVirke: 21.5,
    antalSkivor: 4,
    antalSkruv: 112,
    skruvAttKopa: 200,
    ullKvm: 5.76,
    ullBreddMm: null,
    handelslangdM: 2.4,
    rad: 0,
  },
  {
    namn: 'Hög vägg, 3,20 m i tak på 45 × 70, som Gyproc inte anger någon höjd för',
    indata: { langdM: 4, hojdM: 3.2, regel: '45x70', lag: 1, ccMm: 400, dorrar: 0, ull: true },
    antalReglar: 11,
    lopmeterVirke: 43.04,
    antalSkivor: 9,
    antalSkruv: 249,
    skruvAttKopa: 300,
    ullKvm: 12.8,
    ullBreddMm: null,
    handelslangdM: 3.6,
    rad: 1,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaInnervagg(f.indata);
    assert.equal(r.status, 'ok');
    assert.equal(r.antalReglar, f.antalReglar, 'antal reglar');
    naraNog(r.lopmeterVirke, f.lopmeterVirke, 'löpmeter virke');
    assert.equal(r.antalSkivor, f.antalSkivor, 'antal skivor');
    assert.equal(r.antalSkruv, f.antalSkruv, 'antal skruv');
    assert.equal(r.skruvAttKopa, f.skruvAttKopa, 'skruv att köpa');
    assert.equal(r.ullKvm === null ? null : Math.round(r.ullKvm * 100) / 100, f.ullKvm, 'kvadratmeter ull');
    assert.equal(r.ullBreddMm, f.ullBreddMm, 'ullens bredd');
    assert.equal(r.handelslangdM, f.handelslangdM, 'handelslängd med minst spill');
    assert.equal(r.gorInteDetHar.length, f.rad, 'antal råd');
    assert.ok(r.skruvAttKopa % 100 === 0, 'skruven avrundas uppåt till hela hundratal');
    assert.ok(r.skruvAttKopa >= r.antalSkruv, 'köptalet är aldrig lägre än det räknade');
    if (f.guidensLopmeter !== undefined) {
      naraNog(
        r.lopmeterVirke - r.kapLangdM,
        f.guidensLopmeter,
        'guidens tal plus en regel i den sista väggänden',
        0.6,
      );
    }
    console.log(
      `${f.namn}\n  ${r.antalReglar} reglar, ${r.lopmeterVirke.toFixed(1)} lpm virke ` +
        `(${r.lopmeterVirkeMedSpill.toFixed(1)} med spill, ${r.antalLangder} st à ${String(r.handelslangdM).replace('.', ',')} m), ` +
        `${r.antalSkivor} skivor, ${r.antalSkruv} skruv (köp ${r.skruvAttKopa}), ` +
        `${r.ullKvm === null ? 'ingen ull' : `${r.ullKvm.toFixed(1)} kvm ull`}`,
    );
  });
}

test('guidens rader per löpmeter går att läsa ur resultatet', () => {
  const r = raknaInnervagg({ langdM: 4, hojdM: 2.5, regel: '45x70', lag: 1, ccMm: 600, dorrar: 0, ull: true });
  assert.equal(r.status, 'ok');
  /* Syll och hammarband, 2,0 löpmeter per löpmeter vägg. */
  naraNog(r.syllHammarbandM / 4, 2, 'syll och hammarband per löpmeter');
  /* Gipsskivor, 1,7 skivor per löpmeter vägg. */
  naraNog(r.skivytaKvm / SKIVA_KVM / 4, 1.7, 'skivor per löpmeter', 0.05);
  /* Gipsskruv, 35 stycken per löpmeter vägg. */
  naraNog(r.antalSkruv / 4, 35, 'skruv per löpmeter', 0.5);
  /* Mineralull, 2,5 kvm per löpmeter vägg. */
  naraNog(r.ullKvm / 4, 2.5, 'kvadratmeter ull per löpmeter');
  /* Ett band på 1 000 skruv räcker till ungefär 28 löpmeter vägg. */
  naraNog(r.packRackerTillMeter, 28.8, 'löpmeter per 1 000-pack', 0.5);
  assert.equal(r.antalPack, 1);
});

test('handelslängden är den som spiller minst', () => {
  /* En regel på 2,485 m går en gång ur 2,7 m, och det spiller 8 procent. */
  const h = bastaHandelslangd(2.485);
  assert.equal(h.handelslangdM, 2.7);
  assert.equal(h.reglarPerLangd, 1);
  naraNog(h.spillProcent, 7.96, 'spill i procent', 0.1);

  /* En kort kortling går flera gånger ur en längd, och då vinner den korta. */
  const kort = bastaHandelslangd(1.2);
  assert.equal(kort.handelslangdM, 2.4);
  assert.equal(kort.reglarPerLangd, 2);
  naraNog(kort.spillProcent, 0, 'två reglar ur 2,4 m spiller ingenting');

  /* 2,385 m ryms i 2,4 m med 0,6 procents spill, alltså före 2,7. */
  assert.equal(bastaHandelslangd(2.385).handelslangdM, 2.4);
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaInnervagg({ langdM: 0, hojdM: 9, regel: '45x70', lag: 1, ccMm: 400, dorrar: 2.5, ull: true });
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.langdM, /längd/);
  assert.match(r.fel.hojdM, /rumshöjd/);
  assert.match(r.fel.dorrar, /dörröppningar/);
  assert.deepEqual([...GRANSER.hojdM], [2, 4]);

  /* Fler dörrar än väggen rymmer är också ett fel, och det står på dörrfältet. */
  const trangt = raknaInnervagg({ langdM: 1.5, hojdM: 2.5, regel: '45x70', lag: 1, ccMm: 400, dorrar: 2, ull: true });
  assert.equal(trangt.status, 'ogiltig');
  assert.match(trangt.fel.dorrar, /kortare/);

  const bra = raknaInnervagg(STANDARD);
  assert.equal(bra.status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(new URLSearchParams('langd=4&hojd=2,5&regel=45x70&lag=1&cc=600&dorrar=1&ull=ja'));
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    langdM: 4,
    hojdM: 2.5,
    regel: '45x70',
    lag: 1,
    ccMm: 600,
    dorrar: 1,
    ull: true,
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Utan cc i adressen följer regelavståndet Svenskt Träs val för antalet lag. */
  assert.equal(tolkaQuery(new URLSearchParams('lag=1')).indata.ccMm, 400);
  assert.equal(tolkaQuery(new URLSearchParams('lag=2')).indata.ccMm, 600);
  assert.equal(tolkaQuery(new URLSearchParams('lag=2&cc=450')).indata.ccMm, 450);

  /* Skräp i adressen faller tillbaka på standardvärdet, inte på ett fel. */
  assert.equal(tolkaQuery(new URLSearchParams('cc=500')).indata.ccMm, 400);
  assert.equal(tolkaQuery(new URLSearchParams('regel=45x120')).indata.regel, '45x70');
  assert.equal(tolkaQuery(new URLSearchParams('ull=nej')).indata.ull, false);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('langd=fyra')).indata.langdM));
});
