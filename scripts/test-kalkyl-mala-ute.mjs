/**
 * Kör verktyget "Kan du måla ute i dag?" mot daggpunktstabellerna i
 * /fukt/luftfuktighet-inomhus/ och mot underlaget
 * docs/briefer/underlag-kalkyl-mala-ute-2026-09-17.md, som samlar Beckers,
 * Alcros, Nordsjös och Falu Rödfärgs gränser och torktider med källa per rad.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-mala-ute.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  DAGG_MARGINAL_H,
  daggpunkt,
  FARGER,
  FORDUBBLING_PER_C,
  FUKT_FAKTOR,
  FUKT_GRANS_RF,
  FUKTKVOT_MAX_PROCENT,
  gradEnhet,
  GRANSER,
  klockslag,
  OLJEFARG_MINST_H,
  raknaMalaUte,
  RF_STOPP_PROCENT,
  STANDARD,
  tolkaQuery,
  torktidsfaktor,
  YTAVDRAG_NATT_C,
} from '../src/lib/kalkyl/mala-ute.ts';

const TOLERANS = 0.1;

function naraNog(fick, vantat, vad, tolerans = TOLERANS) {
  assert.ok(Math.abs(fick - vantat) <= tolerans, `${vad}: fick ${fick}, väntade ${vantat} plus minus ${tolerans}`);
}

test('konstanterna är underlagets', () => {
  /* Nordsjö Tinova: inte över 80 procent relativ luftfuktighet. */
  assert.equal(RF_STOPP_PROCENT, 80);
  /* Beckers Perfekt Fasad: inte dagg inom 2 timmar efter målningens avslutande. */
  assert.equal(DAGG_MARGINAL_H, 2);
  /* Vårt antagande om ytan under klar himmel. */
  assert.equal(YTAVDRAG_NATT_C, 2);
  /* Beckers forum: dubblera torktiden vid cirka 15 grader, alltså per 8 grader. */
  assert.equal(FORDUBBLING_PER_C, 8);
  assert.equal(FUKT_GRANS_RF, 70);
  assert.equal(FUKT_FAKTOR, 1.5);
  assert.equal(OLJEFARG_MINST_H, 24);
  /* TräGuiden och Svenskt Trä. */
  assert.equal(FUKTKVOT_MAX_PROCENT, 16);

  /* Beckers Perfekt Fasad: 7 °C, klibbfri 1 h, övermålningsbar 4 h. */
  assert.equal(FARGER.akrylat.minTempC, 7);
  assert.equal(FARGER.akrylat.klibbfriH, 1);
  assert.equal(FARGER.akrylat.overmalningsbarH, 4);
  /* Beckers Perfekt Oljefärg: 7 °C, klibbfri 2 h, övermålningsbar 6 h. */
  assert.equal(FARGER.oljealkyd.minTempC, 7);
  assert.equal(FARGER.oljealkyd.klibbfriH, 2);
  assert.equal(FARGER.oljealkyd.overmalningsbarH, 6);
  /* Falu Rödfärg: lägsta dygnstemperatur omkring 5 °C, torr på ytan efter en timme. */
  assert.equal(FARGER.slamfarg.minTempC, 5);
  assert.equal(FARGER.slamfarg.klibbfriH, 1);
  /* Beckers Elit Träolja: 10 °C, klibbfri 8 h, övermålningsbar 16 h, regn inom ett dygn. */
  assert.equal(FARGER.traolja.minTempC, 10);
  assert.equal(FARGER.traolja.klibbfriH, 8);
  assert.equal(FARGER.traolja.overmalningsbarH, 16);
  assert.equal(FARGER.traolja.regnfriH, 24);

  assert.deepEqual(STANDARD, {
    luftTempC: 15,
    rfProcent: 65,
    nattMinC: 8,
    startTimme: 10,
    solnedgangTimme: 20,
    fargtyp: 'akrylat',
    yta: 'skugga',
    regn: false,
  });
});

/** Raderna ur de två daggpunktstabellerna i luftfuktighetsartikeln. */
const TABELL = [
  { tempC: 22, rf: 30, daggpunkt: 3.6 },
  { tempC: 22, rf: 50, daggpunkt: 11.1 },
  { tempC: 22, rf: 70, daggpunkt: 16.3 },
  { tempC: 20, rf: 30, daggpunkt: 1.9 },
  { tempC: 20, rf: 50, daggpunkt: 9.3 },
  { tempC: 20, rf: 70, daggpunkt: 14.4 },
  { tempC: 20, rf: 80, daggpunkt: 16.4 },
  { tempC: 15, rf: 70, daggpunkt: 9.6 },
  { tempC: 12, rf: 60, daggpunkt: 4.5 },
  { tempC: 12, rf: 80, daggpunkt: 8.7 },
];

test('daggpunkten stämmer med tabellerna i luftfuktighetsartikeln', () => {
  for (const rad of TABELL) {
    naraNog(daggpunkt(rad.tempC, rad.rf), rad.daggpunkt, `${rad.tempC} °C och ${rad.rf} %`, 0.05);
  }
});

test('torktidsfaktorn följer Beckers punkt och vår kurva', () => {
  /* Databladets villkor ger faktorn 1. */
  naraNog(torktidsfaktor(23, 50), 1, '23 °C och 50 %', 0.001);
  /* Beckers: dubblera vid cirka 15 grader. */
  naraNog(torktidsfaktor(15, 50), 2, '15 °C och 50 %', 0.001);
  /* Över 70 procent läggs hälften till. */
  naraNog(torktidsfaktor(15, 75), 3, '15 °C och 75 %', 0.001);
  naraNog(torktidsfaktor(23, 71), 1.5, '23 °C och 71 %', 0.001);
  /* Vår kurva: 7 grader är två fördubblingar. */
  naraNog(torktidsfaktor(7, 50), 4, '7 °C och 50 %', 0.001);
  naraNog(torktidsfaktor(5, 65), 4.76, '5 °C och 65 %', 0.01);
  /* Ingen förkortning över 23 grader. */
  naraNog(torktidsfaktor(30, 40), 1, '30 °C och 40 %', 0.001);
});

test('klockslag avrundas nedåt och tål midnatt', () => {
  assert.equal(klockslag(16.9), 'kl 16');
  assert.equal(klockslag(8), 'kl 8');
  assert.equal(klockslag(27.5), 'kl 3 i morgon');
  assert.equal(klockslag(58), 'kl 10 om 2 dygn');
  /* Ett klockslag före dagens början skrivs aldrig som "i går". */
  assert.equal(klockslag(-1.5), 'före dagens början');
  assert.doesNotMatch(klockslag(-30), /i går/);
});

test('grader skrivs i rätt numerus', () => {
  assert.equal(gradEnhet(1), '1 grad');
  assert.equal(gradEnhet(-1), 'minus 1 grad');
  assert.equal(gradEnhet(2), '2 grader');
  assert.equal(gradEnhet(0.5), '0,5 grader');
  assert.equal(gradEnhet(0), '0 grader');
  assert.equal(gradEnhet(-3.5), 'minus 3,5 grader');
});

test('retur 1: ytan på en grad skrivs "1 grad", inte "1 grader"', () => {
  const r = raknaMalaUte({ ...STANDARD, luftTempC: 8, rfProcent: 70, nattMinC: 3 });
  assert.equal(r.status, 'ok');
  naraNog(r.ytTempNattC, 1, 'ytan i natt');
  const dagg = r.regler.find((x) => /Daggpunkten är/.test(x.text));
  assert.ok(dagg, 'daggregeln finns');
  assert.match(dagg.text, /ytan går ner till 1 grad i natt/);
  for (const regel of r.regler) assert.doesNotMatch(regel.text, /\b1 grader/);
});

test('retur 2: slamfärg som torkar igenom först nästa dag får inget klockslag', () => {
  const r = raknaMalaUte({
    ...STANDARD,
    luftTempC: 5,
    rfProcent: 60,
    nattMinC: 4,
    startTimme: 9,
    solnedgangTimme: 16,
    fargtyp: 'slamfarg',
  });
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'vanta');
  assert.ok(r.overmalningsbarIdagH >= 24, 'torkar över natten');
  const natt = r.regler.find((x) => x.utfall === 'stopp' && /Natten går ner/.test(x.text));
  assert.ok(natt, 'nattregeln slog in');
  assert.match(natt.text, /Slamfärgen torkar igenom först nästa dag, så natten ingår alltid i torktiden/);
  assert.doesNotMatch(natt.text, /om \d+ dygn|i morgon|kl \d/);

  /* Träoljan och oljefärgen får också ord i stället för klockslag. */
  const olja = raknaMalaUte({ ...STANDARD, nattMinC: 5, fargtyp: 'traolja' });
  const oljaNatt = olja.regler.find((x) => x.utfall === 'stopp' && /Natten går ner/.test(x.text));
  assert.match(oljaNatt.text, /Träoljan torkar igenom först nästa dag/);
  const alkyd = raknaMalaUte({ ...STANDARD, nattMinC: 5, fargtyp: 'oljealkyd' });
  const alkydNatt = alkyd.regler.find((x) => x.utfall === 'stopp' && /Natten går ner/.test(x.text));
  assert.match(alkydNatt.text, /härdar med syre/);

  /* Akrylat som blir övermålningsbar under natten behåller klockslaget. */
  const akrylat = raknaMalaUte({ ...STANDARD, luftTempC: 12, rfProcent: 70, nattMinC: 3, solnedgangTimme: 19 });
  const akrylatNatt = akrylat.regler.find((x) => x.utfall === 'stopp' && /Natten går ner/.test(x.text));
  assert.match(akrylatNatt.text, /övermålningsbar först kl 20/);
});

test('retur 3: en dag som inte räcker till får ord, inte "kl 22 i går"', () => {
  const r = raknaMalaUte({
    ...STANDARD,
    luftTempC: 18,
    rfProcent: 75,
    nattMinC: 12,
    startTimme: 13,
    solnedgangTimme: 19,
    fargtyp: 'traolja',
  });
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'vanta');
  assert.ok(r.senasteSlutTimme < 0, 'sluttiden ligger före dagens början');
  naraNog(r.klibbfriIdagH, 18.4, 'klibbfri vid dagens väder');
  const sent = r.regler.find((x) => x.utfall === 'stopp' && /Du börjar kl 13/.test(x.text));
  assert.ok(sent, 'regeln för sent på dagen slog in');
  assert.match(sent.text, /behöver 18,4 timmar till klibbfri/);
  assert.match(sent.text, /Det ryms inte i en dag\. Börja i gryningen en varmare dag\./);
  for (const regel of r.regler) assert.doesNotMatch(regel.text, /i går/);
  assert.doesNotMatch(r.senasteSlutText, /i går/);

  /* Ligger sluttiden mellan noll och starten står den gamla formuleringen kvar. */
  const sen = raknaMalaUte({ ...STANDARD, startTimme: 17 });
  const senRegel = sen.regler.find((x) => x.utfall === 'stopp' && /Du börjar kl 17/.test(x.text));
  assert.match(senRegel.text, /senaste klockslaget att sluta är redan kl 16/);
});

/**
 * Elva fall som ger alla tre utfallen. Talen för daggpunkt och torktid är
 * räknade för hand ur konstanterna i underlaget.
 */
const FALL = [
  {
    namn: 'En fin junidag: 22 grader, 45 procent, ljummen natt på 14',
    indata: { ...STANDARD, luftTempC: 22, rfProcent: 45, nattMinC: 14, solnedgangTimme: 22 },
    utfall: 'mala',
    stortTal: 'Ja',
    daggpunktC: 9.5,
    ytTempNattC: 12,
    daggFaller: false,
    torktidFaktor: 1.1,
    /* 22 minus 2 minus 1,1: kl 18. */
    senasteSlutText: 'kl 18',
    stopp: 0,
  },
  {
    namn: 'En varm augustidag med fuktig kväll: 26 grader, 70 procent, natt på 15',
    indata: { ...STANDARD, luftTempC: 26, rfProcent: 70, nattMinC: 15, startTimme: 9 },
    utfall: 'mala_men',
    /* Daggpunkten ligger på 20 grader, och ytan går ner till 13. */
    daggpunktC: 20.1,
    ytTempNattC: 13,
    daggFaller: true,
    torktidFaktor: 1,
    stortTal: 'kl 17',
    senasteSlutText: 'kl 17',
    stopp: 0,
  },
  {
    namn: 'En septemberdag med kall natt: 12 grader, 70 procent, natt på 3',
    indata: { ...STANDARD, luftTempC: 12, rfProcent: 70, nattMinC: 3, solnedgangTimme: 19 },
    utfall: 'vanta',
    stortTal: 'Vänta',
    /* 4 timmar gånger 2,6 är 10,4: övermålningsbar efter solnedgången. */
    torktidFaktor: 2.6,
    overmalningsbarIdagH: 10.4,
    torkarOverNatten: true,
    stoppKalla: /kyla/,
  },
  {
    namn: 'Luftfuktighet på 85 procent',
    indata: { ...STANDARD, rfProcent: 85 },
    utfall: 'vanta',
    stortTal: 'Vänta',
    torktidFaktor: 3,
    stoppKalla: /Nordsjö/,
  },
  {
    namn: 'Oljealkyd med natt under gränsen: 14 grader, 60 procent, natt på 5',
    indata: { ...STANDARD, luftTempC: 14, rfProcent: 60, nattMinC: 5, startTimme: 9, solnedgangTimme: 19, fargtyp: 'oljealkyd' },
    utfall: 'vanta',
    stortTal: 'Vänta',
    torkarOverNatten: true,
    /* Minst ett dygn gånger 2,2. */
    overmalningsbarIdagH: 52.8,
    stoppKalla: /kyla/,
  },
  {
    namn: 'Akrylat samma dag klarar sig, med varning, eftersom torktiden hinner',
    indata: { ...STANDARD, luftTempC: 14, rfProcent: 60, nattMinC: 5, startTimme: 9, solnedgangTimme: 19 },
    utfall: 'mala_men',
    daggpunktC: 6.4,
    torktidFaktor: 2.2,
    overmalningsbarIdagH: 8.8,
    torkarOverNatten: false,
    stortTal: 'kl 14',
    varningar: 1,
    stopp: 0,
  },
  {
    namn: 'Slamfärg en sval dag: 12 grader, 65 procent, natt på 6',
    indata: { ...STANDARD, luftTempC: 12, rfProcent: 65, nattMinC: 6, startTimme: 9, solnedgangTimme: 19, fargtyp: 'slamfarg' },
    utfall: 'mala_men',
    daggpunktC: 5.6,
    ytTempNattC: 4,
    daggFaller: true,
    torktidFaktor: 2.6,
    stortTal: 'kl 14',
    stopp: 0,
  },
  {
    namn: 'Slamfärg med natt på 4, under Falu Rödfärgs gräns',
    indata: { ...STANDARD, luftTempC: 12, rfProcent: 65, nattMinC: 4, startTimme: 9, solnedgangTimme: 19, fargtyp: 'slamfarg' },
    utfall: 'vanta',
    stortTal: 'Vänta',
    torkarOverNatten: true,
  },
  {
    namn: 'Regn inom ett dygn på en annars fin dag',
    indata: { ...STANDARD, luftTempC: 22, rfProcent: 45, nattMinC: 14, solnedgangTimme: 22, regn: true },
    utfall: 'vanta',
    stortTal: 'Vänta',
    stoppKalla: /Rätt väder/,
  },
  {
    namn: 'Start sent på eftermiddagen: standarddagen med start kl 17',
    indata: { ...STANDARD, startTimme: 17 },
    utfall: 'vanta',
    stortTal: 'Vänta',
    /* 20 minus 2 minus 2 är 16, och 17 är senare. */
    senasteSlutText: 'kl 16',
    stoppKalla: /Alcro/,
  },
  {
    namn: 'Minusgrader: 3 minus, 80 procent, natt på 6 minus',
    indata: { ...STANDARD, luftTempC: -3, rfProcent: 80, nattMinC: -6 },
    utfall: 'vanta',
    stortTal: 'Vänta',
    stoppKalla: /datablad/,
  },
  {
    namn: 'Träolja en bra dag, men den måste börja tidigt: 20 grader, 50 procent, start kl 8',
    indata: { ...STANDARD, luftTempC: 20, rfProcent: 50, nattMinC: 12, startTimme: 8, solnedgangTimme: 21, fargtyp: 'traolja' },
    utfall: 'mala',
    stortTal: 'Ja',
    daggpunktC: 9.3,
    ytTempNattC: 10,
    daggFaller: false,
    torktidFaktor: 1.3,
    /* 21 minus 2 minus 10,4: kl 8. */
    senasteSlutText: 'kl 8',
    stopp: 0,
  },
  {
    namn: 'Samma träoljedag med start kl 9 är för sent',
    indata: { ...STANDARD, luftTempC: 20, rfProcent: 50, nattMinC: 12, startTimme: 9, solnedgangTimme: 21, fargtyp: 'traolja' },
    utfall: 'vanta',
    stortTal: 'Vänta',
  },
  {
    namn: 'Direkt sol ger varning men stoppar inte',
    indata: { ...STANDARD, luftTempC: 22, rfProcent: 45, nattMinC: 14, solnedgangTimme: 22, yta: 'sol' },
    utfall: 'mala',
    stortTal: 'Ja',
    varningar: 1,
    stopp: 0,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaMalaUte(f.indata);
    assert.equal(r.status, 'ok');
    assert.equal(r.utfall, f.utfall, 'utfall');
    assert.equal(r.stortTal, f.stortTal, 'det stora talet');
    const kolla = (nyckel, vad) => {
      if (f[nyckel] === undefined) return;
      if (typeof f[nyckel] === 'number') naraNog(r[nyckel], f[nyckel], vad);
      else assert.equal(r[nyckel], f[nyckel], vad);
    };
    kolla('daggpunktC', 'daggpunkt');
    kolla('ytTempNattC', 'ytans temperatur i natt');
    kolla('daggFaller', 'dagg faller');
    kolla('torktidFaktor', 'torktidsfaktor');
    kolla('overmalningsbarIdagH', 'övermålningsbar vid dagens väder');
    kolla('torkarOverNatten', 'torkar över natten');
    kolla('senasteSlutText', 'senaste sluttid');

    /* Marginalen och daggen ska alltid hänga ihop. */
    naraNog(r.marginalC, r.ytTempNattC - r.daggpunktC, 'marginalen är ytan minus daggpunkten', 0.11);
    assert.equal(r.daggFaller, r.ytTempNattC <= r.daggpunktC, 'dagg faller när ytan når daggpunkten');
    naraNog(r.ytTempNattC, f.indata.nattMinC - YTAVDRAG_NATT_C, 'ytavdraget');
    naraNog(r.klibbfriIdagH, r.farg.klibbfriH * r.torktidFaktor, 'klibbfri gånger faktorn', 0.15);
    naraNog(
      r.senasteSlutTimme,
      f.indata.solnedgangTimme - DAGG_MARGINAL_H - r.klibbfriIdagH,
      'senaste sluttid är solnedgång minus marginal minus klibbfri',
      0.11,
    );

    const stopp = r.regler.filter((x) => x.utfall === 'stopp');
    const varningar = r.regler.filter((x) => x.utfall === 'varning');
    if (f.stopp !== undefined) assert.equal(stopp.length, f.stopp, 'antal stopp');
    if (f.varningar !== undefined) assert.equal(varningar.length, f.varningar, 'antal varningar');
    if (f.stoppKalla !== undefined) {
      assert.ok(stopp.some((x) => f.stoppKalla.test(x.kalla)), `ett stopp med källan ${f.stoppKalla}`);
    }
    if (f.utfall === 'vanta') assert.ok(stopp.length > 0, 'vänta kräver minst ett stopp');
    if (f.utfall !== 'vanta') assert.equal(stopp.length, 0, 'inget stopp när svaret är ja');
    if (f.utfall === 'mala_men') assert.ok(r.regler.some((x) => x.utfall === 'sluta'), 'ett klockslag att sluta');
    if (f.utfall === 'mala_men') assert.equal(r.utfallRubrik, `Ja, men sluta senast ${r.senasteSlutText}`);

    /* Varje regel bär sin källa, och råden är alltid fem. */
    for (const regel of r.regler) {
      assert.ok(regel.kalla.length > 0, 'regeln har en källa');
      assert.ok(regel.text.length > 0, 'regeln har en text');
    }
    assert.equal(r.gorInteDetHar.length, 5, 'fem råd');

    console.log(
      `${f.namn}\n  ${r.utfallRubrik}: daggpunkt ${r.daggpunktC} °C, ytan ${r.ytTempNattC} °C i natt, ` +
        `faktor ${r.torktidFaktor}, klibbfri ${r.klibbfriIdagH} h, övermålningsbar ${r.overmalningsbarIdagH} h, ` +
        `sluta senast ${r.senasteSlutText}, ${stopp.length} stopp, ${varningar.length} varningar`,
    );
  });
}

test('standarddagen ger ett klockslag, och det är kl 16', () => {
  const r = raknaMalaUte(STANDARD);
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'mala_men');
  /* 15 °C och 65 % ger daggpunkten 8,5, och natten på 8 minus 2 ligger under. */
  naraNog(r.daggpunktC, 8.5, 'daggpunkt');
  assert.equal(r.daggFaller, true);
  /* Faktor 2 vid 15 grader: klibbfri 2 h, 20 minus 2 minus 2. */
  naraNog(r.torktidFaktor, 2, 'faktor');
  assert.equal(r.senasteSlutText, 'kl 16');
  assert.equal(r.stortTal, 'kl 16');
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaMalaUte({ ...STANDARD, luftTempC: 45, rfProcent: 5, nattMinC: -20 });
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.luftTempC, /temperaturen nu/);
  assert.match(r.fel.rfProcent, /luftfuktigheten/);
  assert.match(r.fel.nattMinC, /nattens lägsta/);
  assert.match(r.fel.nattMinC, /minus 10/);
  assert.deepEqual([...GRANSER.luftTempC], [-10, 40]);
  assert.deepEqual([...GRANSER.rfProcent], [10, 100]);
  assert.deepEqual([...GRANSER.startTimme], [0, 23]);

  const halv = raknaMalaUte({ ...STANDARD, startTimme: 10.5 });
  assert.equal(halv.status, 'ogiltig', 'en halv timme finns inte');
  assert.match(halv.fel.startTimme, /hel timme/);

  const bakvant = raknaMalaUte({ ...STANDARD, startTimme: 20, solnedgangTimme: 19 });
  assert.equal(bakvant.status, 'ogiltig', 'solnedgången kan inte ligga före starten');
  assert.match(bakvant.fel.solnedgangTimme, /före du börjar/);

  const text = raknaMalaUte({ ...STANDARD, rfProcent: NaN });
  assert.equal(text.status, 'ogiltig');

  /* Gränsvärdena själva är giltiga. */
  assert.equal(raknaMalaUte({ ...STANDARD, luftTempC: -10, nattMinC: -10 }).status, 'ok');
  assert.equal(raknaMalaUte({ ...STANDARD, rfProcent: 100 }).status, 'ok');
  assert.equal(raknaMalaUte(STANDARD).status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och minusgrader, och fyller på med standard', () => {
  const q = tolkaQuery(
    new URLSearchParams('temp=-3,5&rf=72&natt=-6&start=9&sol=19&farg=oljealkyd&yta=sol&regn=ja'),
  );
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    luftTempC: -3.5,
    rfProcent: 72,
    nattMinC: -6,
    startTimme: 9,
    solnedgangTimme: 19,
    fargtyp: 'oljealkyd',
    yta: 'sol',
    regn: true,
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Skräp i ett val faller tillbaka på standardvärdet, skräp i ett tal blir NaN. */
  assert.equal(tolkaQuery(new URLSearchParams('farg=linolja')).indata.fargtyp, 'akrylat');
  assert.equal(tolkaQuery(new URLSearchParams('yta=halvskugga')).indata.yta, 'skugga');
  assert.equal(tolkaQuery(new URLSearchParams('regn=nej')).indata.regn, false);
  assert.equal(tolkaQuery(new URLSearchParams('regn=kanske')).indata.regn, false);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('temp=kallt')).indata.luftTempC));
  /* Typografiskt minus tolkas också. */
  assert.equal(tolkaQuery(new URLSearchParams('natt=−4')).indata.nattMinC, -4);
});
