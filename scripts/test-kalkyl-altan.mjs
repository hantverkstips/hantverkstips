/**
 * Kör trall-, regel- och plinträknaren mot underlaget
 * docs/briefer/underlag-kalkyl-altan-2026-09-17.md, som samlar Svenskt Träs och
 * TräGuidens tal med källa per rad. Samma tal ska komma ut ur formeln som står
 * i underlagets tabeller, annars säger sajten två saker på en gång.
 *
 * Spännvidderna och plintavstånden låses sedan 2026-09-19 mot primärkällan:
 * Svenskt Trä, Lathunden, hjälpreda för byggare, utgåva 8:2021, sid. 30 och 24,
 * radade upp i docs/briefer/underlag-reglar-avstand-2026-09-19.md avsnitt 2.2
 * och 2.3. Talen står där i tabellform och här som assertioner, så att en
 * ändrad konstant bryter testet i stället för att tyst glida från källan.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-altan.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  barlinaFor,
  bastaForpackning,
  bastaHandelslangd,
  CC_ANDEL_AV_PLINTAVSTAND,
  FRI_LANGD_TABELL_M,
  GRANSER,
  HANDELSLANGDER_M,
  MAX_SPANNVIDD_M,
  plintavstand,
  PLINTAVSTAND_M,
  raknaAltan,
  SKRUV_PER_KORSNING,
  SPILL_TRALL,
  SPRINGA_MM,
  STANDARD,
  tabelleradFriLangd,
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
    /* 45 × 145 klarar 2,31 m, altanen är 3 m djup, alltså två fack och tre rader. */
    antalBarlinor: 3,
    spannviddM: 1.5,
    /* Lathunden sid. 24: bärlina 45 × 145 vid fri längd 2,4 m ger 1,64 m mellan
       plintarna, alltså fyra plintar i var och en av de tre raderna. Före
       2026-09-19 räknade modulen med 2,5 m rakt av och gav nio plintar. */
    plintavstandM: 1.64,
    plintarPerRad: 4,
    antalPlintar: 12,
    antalSkruv: 384,
    forpackningStorlek: 250,
    antalForpackningar: 2,
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
    /* Bärlinan är 3 m här, alltså tre plintar i raden i stället för fyra. */
    plintavstandM: 1.64,
    plintarPerRad: 3,
    antalPlintar: 9,
    antalSkruv: 384,
    forpackningStorlek: 250,
    antalForpackningar: 2,
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
    plintavstandM: 1.64,
    plintarPerRad: 4,
    antalPlintar: 12,
    antalSkruv: 320,
    forpackningStorlek: 250,
    antalForpackningar: 2,
    /* Spännvidden, springan och fallet. */
    rad: 3,
  },
  {
    namn: 'c 400 mm på standardaltanen, alltså det täta valet i Lathundens tabell',
    indata: { ...STANDARD, ccMm: 400 },
    antalBrador: 24,
    springaMm: 6,
    lopmeterTrall: 96,
    handelslangdM: 4.2,
    antalLangder: 24,
    spillProcent: 4.76,
    /* 4 m på c 400 ger tio fack, alltså elva reglar. */
    antalReglar: 11,
    lopmeterReglar: 33,
    antalBarlinor: 3,
    spannviddM: 1.5,
    /* Tabellen ger 1,64 m, men förhållandet till c-måttet kapar det till 1,60 m. */
    plintavstandM: 1.6,
    plintarPerRad: 4,
    antalPlintar: 12,
    /* Tätare reglar ger fler korsningar och därmed fler skruv. */
    antalSkruv: 528,
    forpackningStorlek: 250,
    antalForpackningar: 3,
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
    /* 3 m ryms under 3,11 m, så inget råd om spännvidd. */
    antalBarlinor: 2,
    spannviddM: 3,
    /* Fri längd 3 m läses på tabellens rad för 3,6 m: 45 × 195 ger 1,68 m. */
    plintavstandM: 1.68,
    plintarPerRad: 5,
    antalPlintar: 10,
    antalSkruv: 528,
    /* 250-pack gånger tre ger 750, mot hinken om 1 000. */
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
    plintavstandM: 1.64,
    plintarPerRad: 5,
    antalPlintar: 15,
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
    plintavstandM: 1.64,
    plintarPerRad: 3,
    antalPlintar: 6,
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
    plintavstandM: 1.68,
    plintarPerRad: 6,
    antalPlintar: 18,
    antalSkruv: 990,
    /* Hinken om 1 000 ger lika mycket hem som 250-pack gånger fyra, och då
       vinner den större förpackningen. */
    forpackningStorlek: 1000,
    antalForpackningar: 1,
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
    plintavstandM: 0,
    plintarPerRad: 0,
    antalPlintar: 0,
    antalSkruv: 384,
    forpackningStorlek: 250,
    antalForpackningar: 2,
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
    naraNog(r.plintavstandM, f.plintavstandM, 'plintavstånd', 0.001);
    assert.equal(r.plintarPerRad, f.plintarPerRad, 'plintar per rad');
    assert.equal(r.antalPlintar, f.antalPlintar, 'antal plintar');
    assert.equal(r.antalPlintar, r.antalBarlinor * r.plintarPerRad, 'plintarna är rader gånger plintar per rad');
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
    /* Plintavståndet får aldrig överskrida Lathundens rad, och det faktiska
       avståndet mellan två plintar aldrig det uträknade taket. */
    if (r.antalPlintar > 0) {
      assert.ok(
        r.plintavstandM <= PLINTAVSTAND_M[r.barlina][r.friLangdTabellM] + 1e-9,
        'plintavståndet ligger under tabellens rad',
      );
      const faktiskt = r.trallLangdM / (r.plintarPerRad - 1);
      assert.ok(faktiskt <= r.plintavstandM + 1e-9, 'plintarna står inte glesare än taket');
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
  assert.equal(klen.antalPlintar, 12);
  assert.equal(grov.antalPlintar, 8);
  /* Rådet på den klena pekar ut den grövre dimensionen. */
  assert.ok(klen.gorInteDetHar.some((r) => r.includes('45 × 195 mm')));
  assert.ok(!grov.gorInteDetHar.some((r) => r.startsWith('Spänn inte')));
});

test('spännvidderna är Lathundens egna tal, sid. 30, C24', () => {
  /* Underlaget 2026-09-19 avsnitt 2.2, kolumnerna c 600 och c 400 mm. */
  assert.deepEqual(MAX_SPANNVIDD_M, {
    '45x120': { 400: 2.19, 600: 1.91 },
    '45x145': { 400: 2.64, 600: 2.31 },
    '45x170': { 400: 3.1, 600: 2.71 },
    '45x195': { 400: 3.56, 600: 3.11 },
    '45x220': { 400: 4.01, 600: 3.51 },
  });
  /* Svenskt Träs egen byggbeskrivning lägger 45 × 145 C24 på c 600 mm med
     2 400 mm fri längd. Tabellraden ska ligga inom tre centimeter från det. */
  naraNog(MAX_SPANNVIDD_M['45x145'][600], 2.4, 'byggbeskrivningens altanexempel', 0.1);
});

test('plintavstånden är Lathundens egna tal, sid. 24, C24', () => {
  /* Underlaget 2026-09-19 avsnitt 2.3, kolumnerna för fri längd 2,4, 3,6 och 4,8 m. */
  assert.deepEqual(PLINTAVSTAND_M, {
    '45x120': { 2.4: 1.38, 3.6: 1.03, 4.8: 0.83 },
    '45x145': { 2.4: 1.64, 3.6: 1.25, 4.8: 1.0 },
    '45x170': { 2.4: 1.92, 3.6: 1.47, 4.8: 1.18 },
    '45x195': { 2.4: 2.2, 3.6: 1.68, 4.8: 1.35 },
    '45x220': { 2.4: 2.49, 3.6: 1.9, 4.8: 1.53 },
    '70x220': { 2.4: 3.1, 3.6: 2.56, 4.8: 2.18 },
  });
  assert.deepEqual([...FRI_LANGD_TABELL_M], [2.4, 3.6, 4.8]);
  /* Den gamla konstanten var 2,5 m rakt av. Ingen 45-dimension når dit ens vid
     den kortaste fria längden, vilket var hela felet. */
  for (const regel of ['45x120', '45x145', '45x170', '45x195', '45x220']) {
    assert.ok(PLINTAVSTAND_M[regel][2.4] < 2.5, `${regel} når inte 2,5 m`);
  }
});

test('den fria längden rundas uppåt till närmaste rad i tabellen', () => {
  assert.equal(tabelleradFriLangd(1.5), 2.4);
  assert.equal(tabelleradFriLangd(2.4), 2.4);
  assert.equal(tabelleradFriLangd(2.41), 3.6);
  assert.equal(tabelleradFriLangd(3.6), 3.6);
  assert.equal(tabelleradFriLangd(4.0), 4.8);
  /* Vår längsta spännvidd är 4,01 m, så tabellen räcker alltid till. */
  assert.ok(Math.max(...Object.values(MAX_SPANNVIDD_M).flatMap((r) => Object.values(r))) <= 4.8);
});

test('bärlinan antas ha samma dimension som regeln', () => {
  for (const regel of ['45x120', '45x145', '45x170', '45x195', '45x220']) {
    assert.equal(barlinaFor(regel), regel);
  }
  const r = raknaAltan(STANDARD);
  assert.equal(r.status, 'ok');
  assert.equal(r.barlina, '45x145');
  assert.equal(r.barlinaText, '45 × 145 mm');
});

test('förhållandet till c-måttet kapar plintavståndet', () => {
  assert.equal(CC_ANDEL_AV_PLINTAVSTAND, 4);
  /* Vid c 600 mm är taket 2,4 m, och ingen 45-rad ligger över det vid fri
     längd 2,4 m, så tabellen får bestämma. */
  assert.equal(plintavstand('45x195', 1.5, 600), 2.2);
  /* 70 × 220 ligger på 3,10 m och kapas därför till 2,4 m vid c 600 mm, om den
     dimensionen någon gång blir valbar. */
  naraNog(Math.min(PLINTAVSTAND_M['70x220'][2.4], 4 * 0.6), 2.4, 'taket vid c 600 mm', 0.001);
  /* Vid c 400 mm är taket 1,6 m, och där kapas fyra av fem rader. */
  assert.equal(plintavstand('45x145', 1.5, 400), 1.6);
  assert.equal(plintavstand('45x220', 1.5, 400), 1.6);
  /* Den klenaste ligger under taket och får stå kvar på sitt tabellvärde. */
  assert.equal(plintavstand('45x120', 1.5, 400), 1.38);
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
  assert.deepEqual(bastaForpackning(384), { storlek: 250, antal: 2, totalt: 500 });
  assert.deepEqual(bastaForpackning(528), { storlek: 250, antal: 3, totalt: 750 });
  /* Lika mycket skruv hem båda vägarna, och då vinner den större förpackningen. */
  assert.deepEqual(bastaForpackning(990), { storlek: 1000, antal: 1, totalt: 1000 });
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
    new URLSearchParams('langd=5,5&bredd=3&trallbredd=145&riktning=kortsida&cc=400&regel=45x195&grund=befintlig'),
  );
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    langdM: 5.5,
    breddM: 3,
    trallbreddMm: 145,
    riktning: 'kortsida',
    ccMm: 400,
    regel: '45x195',
    grund: 'befintlig',
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Skräp i adressen faller tillbaka på standardvärdet, inte på ett fel. */
  assert.equal(tolkaQuery(new URLSearchParams('trallbredd=100')).indata.trallbreddMm, 120);
  assert.equal(tolkaQuery(new URLSearchParams('cc=600')).indata.ccMm, 600);
  assert.equal(tolkaQuery(new URLSearchParams('cc=300')).indata.ccMm, 600);
  /* Delade länkar från före 2026-09-19 bär cc=450, och det läses som c 400 mm,
     alltså tätare än läsaren skrev och därmed på säkra sidan. */
  assert.equal(tolkaQuery(new URLSearchParams('cc=450')).indata.ccMm, 400);
  /* De två dimensionerna som tillkom 2026-09-19 läses nu ur adressen. */
  assert.equal(tolkaQuery(new URLSearchParams('regel=45x220')).indata.regel, '45x220');
  assert.equal(tolkaQuery(new URLSearchParams('regel=45x120')).indata.regel, '45x120');
  assert.equal(tolkaQuery(new URLSearchParams('regel=45x95')).indata.regel, '45x145');
  assert.equal(tolkaQuery(new URLSearchParams('riktning=snett')).indata.riktning, 'langsida');
  assert.equal(tolkaQuery(new URLSearchParams('grund=plintar')).indata.grund, 'plintar');
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('langd=fyra')).indata.langdM));
});
