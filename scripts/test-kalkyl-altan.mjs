/**
 * Kör trall-, regel- och plinträknaren mot underlaget
 * docs/briefer/underlag-kalkyl-altan-2026-09-17.md, som samlar Svenskt Träs och
 * TräGuidens tal med källa per rad. Samma tal ska komma ut ur formeln som står
 * i underlagets tabeller, annars säger sajten två saker på en gång.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-altan.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  bastaForpackning,
  bastaHandelslangd,
  GRANSER,
  HANDELSLANGDER_M,
  MAX_SPANNVIDD_M,
  PLINTAVSTAND_M,
  raknaAltan,
  SKRUV_PER_KORSNING,
  SPILL_TRALL,
  SPRINGA_MM,
  STANDARD,
  tolkaQuery,
  TRALL_TJOCKLEK_MM,
} from '../src/lib/kalkyl/altan.ts';

const TOLERANS = 0.05;

function naraNog(fick, vantat, vad, tolerans = TOLERANS) {
  assert.ok(Math.abs(fick - vantat) <= tolerans, `${vad}: fick ${fick}, väntade ${vantat} plus minus ${tolerans}`);
}

test('konstanterna är underlagets', () => {
  /* TräGuiden, Läggning av trall: 28 mm är tjockleken som får ligga på c 600. */
  assert.equal(TRALL_TJOCKLEK_MM, 28);
  /* Tabell 3: kant till kant 100, 126 och 152 mm minus brädbredden. */
  assert.deepEqual(SPRINGA_MM, { 95: 5, 120: 6, 145: 7 });
  /* Dubbel infästning för brädor från 95 mm. */
  assert.equal(SKRUV_PER_KORSNING, 2);
  /* Altanplaneraren, branschens tabell för villaaltan utan tak. */
  assert.equal(MAX_SPANNVIDD_M['45x145'][600], 2.3);
  assert.equal(MAX_SPANNVIDD_M['45x145'][450], 2.6);
  assert.equal(MAX_SPANNVIDD_M['45x195'][600], 3.1);
  /* Bärlina 45 × 170 har som mest 2,5 m mellan plintarna. */
  assert.equal(PLINTAVSTAND_M, 2.5);
  assert.deepEqual([...HANDELSLANGDER_M], [3.6, 4.2, 4.8]);
  assert.equal(SPILL_TRALL, 0.1);

  assert.deepEqual(STANDARD, {
    langdM: 4,
    breddM: 3,
    trallbreddMm: 120,
    riktning: 'langsida',
    ccMm: 600,
    regel: '45x145',
    grund: 'plintar',
  });
});

/**
 * Nio fall. Det första är standardaltanen, och de övriga byter ett antagande i
 * taget: riktning, brädbredd, c-mått, regeldimension, storlek och grund.
 */
const FALL = [
  {
    namn: 'Standardaltanen: 4 × 3 m, trall längs långsidan, 120 mm bräda, c 600, 45 × 145 på plintar',
    indata: STANDARD,
    /* 3 m delat på 126 mm delning ger 23,8 brädor, alltså 24. */
    antalBrador: 24,
    springaMm: 6,
    lopmeterTrall: 96,
    handelslangdM: 4.2,
    antalLangder: 24,
    spillProcent: 4.76,
    /* 4 m på c 600 ger sju fack, och en regel till stänger det sista. */
    antalReglar: 8,
    lopmeterReglar: 24,
    /* 45 × 145 klarar 2,3 m, altanen är 3 m djup, alltså två fack och tre rader. */
    antalBarlinor: 3,
    spannviddM: 1.5,
    antalPlintar: 9,
    antalSkruv: 384,
    forpackningStorlek: 500,
    antalForpackningar: 1,
    /* Spännvidden och fallet. Springan gäller först den breda brädan. */
    rad: 2,
  },
  {
    namn: 'Samma altan med trallen längs kortsidan, alltså reglarna längs långsidan',
    indata: { ...STANDARD, riktning: 'kortsida' },
    antalBrador: 32,
    springaMm: 6,
    /* Lika många löpmeter trall, men fler och kortare brädor. */
    lopmeterTrall: 96,
    handelslangdM: 3.6,
    antalLangder: 32,
    spillProcent: 16.67,
    antalReglar: 6,
    lopmeterReglar: 24,
    antalBarlinor: 3,
    spannviddM: 2,
    antalPlintar: 9,
    antalSkruv: 384,
    forpackningStorlek: 500,
    antalForpackningar: 1,
    rad: 2,
  },
  {
    namn: '145 mm trall på standardaltanen: färre brädor, färre skruv, bredare springa',
    indata: { ...STANDARD, trallbreddMm: 145 },
    antalBrador: 20,
    springaMm: 7,
    lopmeterTrall: 80,
    handelslangdM: 4.2,
    antalLangder: 20,
    spillProcent: 4.76,
    antalReglar: 8,
    lopmeterReglar: 24,
    antalBarlinor: 3,
    spannviddM: 1.5,
    antalPlintar: 9,
    antalSkruv: 320,
    forpackningStorlek: 500,
    antalForpackningar: 1,
    /* Spännvidden, springan och fallet. */
    rad: 3,
  },
  {
    namn: 'c 450 mm på standardaltanen, alltså det täta valet',
    indata: { ...STANDARD, ccMm: 450 },
    antalBrador: 24,
    springaMm: 6,
    lopmeterTrall: 96,
    handelslangdM: 4.2,
    antalLangder: 24,
    spillProcent: 4.76,
    /* 4 m på c 450 ger nio fack, alltså tio reglar. */
    antalReglar: 10,
    lopmeterReglar: 30,
    antalBarlinor: 3,
    spannviddM: 1.5,
    antalPlintar: 9,
    /* Tätare reglar ger fler korsningar och därmed fler skruv. */
    antalSkruv: 480,
    forpackningStorlek: 500,
    antalForpackningar: 1,
    rad: 2,
  },
  {
    namn: '45 × 195 på 6 × 3 m: dimensionen bär hela djupet, alltså två bärlinrader',
    indata: { ...STANDARD, langdM: 6, breddM: 3, regel: '45x195' },
    antalBrador: 24,
    springaMm: 6,
    lopmeterTrall: 144,
    /* Brädan är 6 m och längsta handelslängden 4,8 m, alltså skarv över regel. */
    handelslangdM: 4.8,
    bradorPerLangd: 0,
    antalLangder: 33,
    spillProcent: 9.09,
    antalReglar: 11,
    lopmeterReglar: 33,
    /* 3 m ryms under 3,1 m, så inget råd om spännvidd. */
    antalBarlinor: 2,
    spannviddM: 3,
    antalPlintar: 8,
    antalSkruv: 528,
    /* 250-pack gånger tre ger 750, mot 500-pack gånger två som ger 1 000. */
    forpackningStorlek: 250,
    antalForpackningar: 3,
    /* Skarven och fallet. */
    rad: 2,
  },
  {
    namn: '45 × 145 på 6 × 4 m: dimensionen räcker inte, verktyget säger det',
    indata: { ...STANDARD, langdM: 6, breddM: 4 },
    antalBrador: 32,
    springaMm: 6,
    lopmeterTrall: 192,
    handelslangdM: 4.8,
    bradorPerLangd: 0,
    antalLangder: 44,
    spillProcent: 9.09,
    antalReglar: 11,
    lopmeterReglar: 44,
    antalBarlinor: 3,
    spannviddM: 2,
    antalPlintar: 12,
    antalSkruv: 704,
    forpackningStorlek: 250,
    antalForpackningar: 3,
    /* Spännvidden, skarven och fallet. */
    rad: 3,
    spannviddRad: true,
  },
  {
    namn: 'Liten altan, 2 × 2 m med 95 mm trall',
    indata: { ...STANDARD, langdM: 2, breddM: 2, trallbreddMm: 95 },
    antalBrador: 20,
    springaMm: 5,
    lopmeterTrall: 40,
    /* Två brädor på 2 m går ur en längd på 4,2 m. */
    handelslangdM: 4.2,
    bradorPerLangd: 2,
    antalLangder: 10,
    spillProcent: 4.76,
    antalReglar: 5,
    lopmeterReglar: 10,
    antalBarlinor: 2,
    spannviddM: 2,
    antalPlintar: 4,
    antalSkruv: 200,
    forpackningStorlek: 250,
    antalForpackningar: 1,
    /* Bara fallet. */
    rad: 1,
  },
  {
    namn: 'Stor altan, 8 × 5 m med 145 mm trall på 45 × 195',
    indata: { langdM: 8, breddM: 5, trallbreddMm: 145, riktning: 'langsida', ccMm: 600, regel: '45x195', grund: 'plintar' },
    antalBrador: 33,
    springaMm: 7,
    lopmeterTrall: 264,
    handelslangdM: 4.8,
    bradorPerLangd: 0,
    antalLangder: 61,
    spillProcent: 9.84,
    antalReglar: 15,
    lopmeterReglar: 75,
    antalBarlinor: 3,
    spannviddM: 2.5,
    antalPlintar: 15,
    antalSkruv: 990,
    /* 500-pack gånger två ger 1 000, lika med 250-pack gånger fyra, och då
       vinner den större förpackningen. */
    forpackningStorlek: 500,
    antalForpackningar: 2,
    /* Spännvidden, springan, skarven och fallet. */
    rad: 4,
    spannviddRad: true,
  },
  {
    namn: 'Standardaltanen på befintlig grund: inga bärlinor och inga plintar',
    indata: { ...STANDARD, grund: 'befintlig' },
    antalBrador: 24,
    springaMm: 6,
    lopmeterTrall: 96,
    handelslangdM: 4.2,
    antalLangder: 24,
    spillProcent: 4.76,
    antalReglar: 8,
    lopmeterReglar: 24,
    antalBarlinor: 0,
    spannviddM: null,
    antalPlintar: 0,
    antalSkruv: 384,
    forpackningStorlek: 500,
    antalForpackningar: 1,
    /* Bara fallet: utan bärlinor finns ingen spännvidd att varna för. */
    rad: 1,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaAltan(f.indata);
    assert.equal(r.status, 'ok');
    assert.equal(r.antalBrador, f.antalBrador, 'antal trallbrädor');
    assert.equal(r.springaMm, f.springaMm, 'springan');
    naraNog(r.lopmeterTrall, f.lopmeterTrall, 'löpmeter trall');
    naraNog(r.lopmeterTrallMedSpill, f.lopmeterTrall * 1.1, 'löpmeter trall med spill');
    assert.equal(r.handelslangdM, f.handelslangdM, 'handelslängd med minst spill');
    if (f.bradorPerLangd !== undefined) assert.equal(r.bradorPerLangd, f.bradorPerLangd, 'brädor per längd');
    assert.equal(r.antalLangder, f.antalLangder, 'antal längder att köpa');
    naraNog(r.spillProcent, f.spillProcent, 'spill i procent', 0.01);
    assert.equal(r.antalReglar, f.antalReglar, 'antal reglar');
    naraNog(r.lopmeterReglar, f.lopmeterReglar, 'löpmeter reglar');
    assert.equal(r.antalBarlinor, f.antalBarlinor, 'antal bärlinor');
    assert.equal(r.spannviddM, f.spannviddM, 'spännvidd');
    assert.equal(r.antalPlintar, f.antalPlintar, 'antal plintar');
    assert.equal(r.antalSkruv, f.antalSkruv, 'antal trallskruv');
    assert.equal(r.antalSkruv, r.antalKorsningar * 2, 'två skruv per korsning');
    assert.equal(r.forpackningStorlek, f.forpackningStorlek, 'förpackningsstorlek');
    assert.equal(r.antalForpackningar, f.antalForpackningar, 'antal förpackningar');
    assert.ok(r.skruvAttKopa >= r.antalSkruv, 'köptalet är aldrig lägre än det räknade');
    assert.equal(r.skruvAttKopa, r.forpackningStorlek * r.antalForpackningar, 'köptalet är hela förpackningar');
    assert.equal(r.gorInteDetHar.length, f.rad, 'antal råd');
    /* Spännvidden får aldrig överskrida det dimensionen klarar. */
    if (r.spannviddM !== null) {
      assert.ok(r.spannviddM <= r.maxSpannviddM + 1e-9, 'spännvidden ligger under taket för dimensionen');
    }
    if (f.spannviddRad) {
      assert.ok(
        r.gorInteDetHar.some((rad) => rad.startsWith('Spänn inte')),
        'rådet om spännvidd står med',
      );
    }
    console.log(
      `${f.namn}\n  ${r.antalBrador} brädor, ${r.lopmeterTrall.toFixed(0)} lpm trall ` +
        `(${r.antalLangder} st à ${String(r.handelslangdM).replace('.', ',')} m, ${r.spillProcent.toFixed(0)} procent spill), ` +
        `${r.antalReglar} reglar à ${String(r.regelLangdM).replace('.', ',')} m, ` +
        `${r.antalBarlinor} bärlinor, ${r.antalPlintar} plintar, ` +
        `${r.antalSkruv} skruv (köp ${r.antalForpackningar} × ${r.forpackningStorlek})`,
    );
  });
}

test('standardaltanen räknas likadant oavsett hur sidorna skrivs in', () => {
  const a = raknaAltan(STANDARD);
  const b = raknaAltan({ ...STANDARD, langdM: 3, breddM: 4 });
  assert.equal(a.status, 'ok');
  assert.equal(b.status, 'ok');
  /* Långsidan är långsidan, vilken ruta läsaren än skrev den i. */
  assert.equal(a.trallLangdM, b.trallLangdM);
  assert.equal(a.antalBrador, b.antalBrador);
  assert.equal(a.antalPlintar, b.antalPlintar);
});

test('en grövre regel tar bort en rad plintar', () => {
  const klen = raknaAltan(STANDARD);
  const grov = raknaAltan({ ...STANDARD, regel: '45x195' });
  assert.equal(klen.status, 'ok');
  assert.equal(grov.status, 'ok');
  assert.equal(klen.antalBarlinor, 3);
  assert.equal(grov.antalBarlinor, 2);
  assert.equal(klen.antalPlintar, 9);
  assert.equal(grov.antalPlintar, 6);
  /* Rådet på den klena pekar ut den grövre dimensionen. */
  assert.ok(klen.gorInteDetHar.some((r) => r.includes('45 × 195 mm')));
  assert.ok(!grov.gorInteDetHar.some((r) => r.startsWith('Spänn inte')));
});

test('handelslängden är den som spiller minst', () => {
  /* En bräda på 4 m går en gång ur 4,2 m, och det spiller knappt fem procent. */
  const fyra = bastaHandelslangd(4);
  assert.equal(fyra.handelslangdM, 4.2);
  assert.equal(fyra.bradorPerLangd, 1);
  naraNog(fyra.spillProcent, 4.76, 'spill i procent', 0.01);

  /* Två korta brädor går ur en längd, och då vinner den som spiller minst. */
  const kort = bastaHandelslangd(1.8);
  assert.equal(kort.handelslangdM, 3.6);
  assert.equal(kort.bradorPerLangd, 2);
  naraNog(kort.spillProcent, 0, 'två brädor ur 3,6 m spiller ingenting');

  /* Längre än den längsta hyllvaran: brädan måste skarvas över en regel. */
  const lang = bastaHandelslangd(6);
  assert.equal(lang.handelslangdM, 4.8);
  assert.equal(lang.bradorPerLangd, 0);
});

test('förpackningen är den som ger minst överskott', () => {
  assert.deepEqual(bastaForpackning(200), { storlek: 250, antal: 1, totalt: 250 });
  /* Lika mycket skruv hem i båda fallen, och då vinner den större asken. */
  assert.deepEqual(bastaForpackning(384), { storlek: 500, antal: 1, totalt: 500 });
  assert.deepEqual(bastaForpackning(528), { storlek: 250, antal: 3, totalt: 750 });
  assert.deepEqual(bastaForpackning(990), { storlek: 500, antal: 2, totalt: 1000 });
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaAltan({ ...STANDARD, langdM: 0, breddM: 40 });
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.langdM, /längd/);
  assert.match(r.fel.breddM, /bredd/);
  assert.deepEqual([...GRANSER.langdM], [1, 20]);

  const text = raknaAltan({ ...STANDARD, langdM: NaN });
  assert.equal(text.status, 'ogiltig');

  const bra = raknaAltan(STANDARD);
  assert.equal(bra.status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(
    new URLSearchParams('langd=5,5&bredd=3&trallbredd=145&riktning=kortsida&cc=450&regel=45x195&grund=befintlig'),
  );
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    langdM: 5.5,
    breddM: 3,
    trallbreddMm: 145,
    riktning: 'kortsida',
    ccMm: 450,
    regel: '45x195',
    grund: 'befintlig',
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Skräp i adressen faller tillbaka på standardvärdet, inte på ett fel. */
  assert.equal(tolkaQuery(new URLSearchParams('trallbredd=100')).indata.trallbreddMm, 120);
  assert.equal(tolkaQuery(new URLSearchParams('cc=600')).indata.ccMm, 600);
  assert.equal(tolkaQuery(new URLSearchParams('cc=300')).indata.ccMm, 600);
  assert.equal(tolkaQuery(new URLSearchParams('regel=45x220')).indata.regel, '45x145');
  assert.equal(tolkaQuery(new URLSearchParams('riktning=snett')).indata.riktning, 'langsida');
  assert.equal(tolkaQuery(new URLSearchParams('grund=plintar')).indata.grund, 'plintar');
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('langd=fyra')).indata.langdM));
});
