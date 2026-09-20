/**
 * Kör rotavdragskalkylatorn mot Skatteverkets egna tal, så som de står
 * nedskrivna i docs/briefer/underlag-kalkyl-rotavdrag-2026-09-20.md.
 *
 * Underlaget läses från disk och båda tabellerna parsas här i skriptet, så att
 * en ändrad procentsats eller ett ändrat takbelopp bryter testet i stället för
 * att tyst glida ifrån verktyget. Talen är Skatteverkets: 30 procent av
 * arbetskostnaden, 50 000 kr i tak per person och år, 75 000 kr gemensamt tak
 * för rot och rut, femårsregeln, och räkneexemplet på företagssidan där
 * 10 000 kr i arbete exklusive moms, alltså 12 500 kr med moms, ger 3 750 kr.
 *
 * RÄTTAT 2026-09-20. Fram till dess påstod det här skriptet att talen 10 000,
 * 3 000 och 7 000 kr var Skatteverkets eget räkneexempel på fakturamodellen.
 * De står inte hos Skatteverket. De är våra egna, räknade på procentsatsen,
 * och de parsas nu ur underlagets andra tabell, som säger just det. Formeln
 * låses i stället mot myndighetens verkliga exempel, som skiljer sig från vårt
 * bara genom att det utgår från arbetskostnaden utan moms.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-rotavdrag.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  ANSOKAN_SENAST,
  ARET,
  avdragRakt,
  EXEMPEL_ARBETE_KR,
  EXEMPEL_AVDRAG_KR,
  EXEMPEL_BETALA_KR,
  GEMENSAMT_TAK_KR,
  GRANSER,
  kronor,
  NYBYGGT_SPARRAR_AR,
  raknaRotavdrag,
  ROT_PROCENT,
  ROT_PROCENT_HOJT,
  ROT_TAK_KR,
  SKATTEVERKET_HOJNINGEN,
  SKATTEVERKET_ROTAVDRAGET,
  SKV_EXEMPEL_ARBETE_EXKL_MOMS_KR,
  SKV_EXEMPEL_ARBETE_INKL_MOMS_KR,
  SKV_EXEMPEL_AVDRAG_KR,
  STANDARD,
  tolkaQuery,
} from '../src/lib/kalkyl/rotavdrag.ts';

const UNDERLAG = readFileSync(
  new URL('../docs/briefer/underlag-kalkyl-rotavdrag-2026-09-20.md', import.meta.url),
  'utf8',
);

/** Plockar en markdowntabell ur underlaget, från den rubrikrad som anges. */
function tabell(rubrikrad) {
  const rader = new Map();
  let iTabell = false;
  for (const rad of UNDERLAG.split('\n')) {
    if (rad.startsWith(rubrikrad)) {
      iTabell = true;
      continue;
    }
    if (!iTabell) continue;
    if (!rad.startsWith('|')) break;
    if (rad.startsWith('|---')) continue;
    const celler = rad
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    rader.set(celler[0], { varde: Number(celler[1]), kalla: celler[2], url: celler[3] });
  }
  return rader;
}

/** Talen som kommer från Skatteverket, en per rad med adress. */
const UNDERLAGETS_TAL = tabell('| Konstant |');
/** Talen som är våra egna, och som alltså inte ska ha någon myndighetsadress. */
const VARA_EGNA_TAL = tabell('| Vårt tal |');

/** Kör verktyget med standardvärdena och de fält anropet skriver över. */
function rakna(over = {}) {
  const svar = raknaRotavdrag({ ...STANDARD, ...over });
  assert.equal(svar.status, 'ok', `förväntade ok, fick ${svar.status}`);
  return svar;
}

const fraga = (s) => tolkaQuery(new URLSearchParams(s));

test('underlagets Skatteverkstabell bär alla nio tal, och modulen säger samma sak', () => {
  assert.equal(UNDERLAGETS_TAL.size, 9);
  assert.equal(UNDERLAGETS_TAL.get('ROT_PROCENT').varde, ROT_PROCENT);
  assert.equal(UNDERLAGETS_TAL.get('ROT_PROCENT_HOJT').varde, ROT_PROCENT_HOJT);
  assert.equal(UNDERLAGETS_TAL.get('ROT_TAK_KR').varde, ROT_TAK_KR);
  assert.equal(UNDERLAGETS_TAL.get('GEMENSAMT_TAK_KR').varde, GEMENSAMT_TAK_KR);
  assert.equal(UNDERLAGETS_TAL.get('NYBYGGT_SPARRAR_AR').varde, NYBYGGT_SPARRAR_AR);
  assert.equal(UNDERLAGETS_TAL.get('SKV_EXEMPEL_ARBETE_EXKL_MOMS_KR').varde, SKV_EXEMPEL_ARBETE_EXKL_MOMS_KR);
  assert.equal(UNDERLAGETS_TAL.get('SKV_EXEMPEL_ARBETE_INKL_MOMS_KR').varde, SKV_EXEMPEL_ARBETE_INKL_MOMS_KR);
  assert.equal(UNDERLAGETS_TAL.get('SKV_EXEMPEL_AVDRAG_KR').varde, SKV_EXEMPEL_AVDRAG_KR);
  assert.equal(UNDERLAGETS_TAL.get('ARET').varde, ARET);
  // Varje rad ska peka på en adress hos Skatteverket, inte på en bank.
  for (const [namn, rad] of UNDERLAGETS_TAL) {
    assert.match(rad.url, /^https:\/\/www7?\.skatteverket\.se\//, `${namn} saknar Skatteverksadress`);
  }
});

test('formeln låses mot Skatteverkets verkliga räkneexempel, det med momsen', () => {
  /*
   * Myndighetens enda räkneexempel av den här sorten ligger på företagssidan
   * och utgår från arbetskostnaden utan moms. Vårt fält frågar efter beloppet
   * med moms, så det är det större talet som ska in i formeln. Går det in ska
   * exakt 3 750 kr komma ut, annars har vi glidit ifrån källan.
   */
  assert.equal(SKV_EXEMPEL_ARBETE_INKL_MOMS_KR, SKV_EXEMPEL_ARBETE_EXKL_MOMS_KR * 1.25);
  assert.equal(avdragRakt(SKV_EXEMPEL_ARBETE_INKL_MOMS_KR), SKV_EXEMPEL_AVDRAG_KR);

  const svar = rakna({ arbetskostnadKr: SKV_EXEMPEL_ARBETE_INKL_MOMS_KR, materialkostnadKr: 0 });
  assert.equal(svar.avdragKr, SKV_EXEMPEL_AVDRAG_KR);
  assert.equal(svar.begransatAv, 'procent');
});

test('våra egna räknetal står som våra i underlaget, utan myndighetsadress', () => {
  /*
   * Rättat 2026-09-20: talen 10 000, 3 000 och 7 000 kr tillskrevs tidigare
   * Skatteverket och står inte där. De ligger nu i underlagets andra tabell,
   * som säger att de är våra, och testet vaktar att ingen skriver tillbaka en
   * källhänvisning på dem.
   */
  assert.equal(VARA_EGNA_TAL.size, 3);
  assert.equal(VARA_EGNA_TAL.get('EXEMPEL_ARBETE_KR').varde, EXEMPEL_ARBETE_KR);
  assert.equal(VARA_EGNA_TAL.get('EXEMPEL_AVDRAG_KR').varde, EXEMPEL_AVDRAG_KR);
  assert.equal(VARA_EGNA_TAL.get('EXEMPEL_BETALA_KR').varde, EXEMPEL_BETALA_KR);
  for (const [namn, rad] of VARA_EGNA_TAL) {
    assert.doesNotMatch(rad.kalla ?? '', /skatteverket/i, `${namn} tillskrivs Skatteverket igen`);
    assert.equal(rad.url, undefined, `${namn} har fått en adress den inte ska ha`);
  }
  // Och underlaget ska säga rakt ut att talen inte står hos myndigheten.
  assert.match(UNDERLAG, /talen står inte där/i);
});

test('vårt eget räkneexempel: 10 000 kr med moms ger 3 000 kr i avdrag och 7 000 kr att betala', () => {
  const svar = rakna({ arbetskostnadKr: EXEMPEL_ARBETE_KR, materialkostnadKr: 0 });
  assert.equal(svar.raktAvdragKr, EXEMPEL_AVDRAG_KR);
  assert.equal(svar.avdragKr, EXEMPEL_AVDRAG_KR);
  assert.equal(svar.attBetalaKr, EXEMPEL_BETALA_KR);
  assert.equal(svar.begransatAv, 'procent');
  assert.equal(svar.kapatKr, 0);
  // Samma tal ur den fristående funktionen, som formeln vilar på.
  assert.equal(avdragRakt(EXEMPEL_ARBETE_KR), EXEMPEL_AVDRAG_KR);
});

test('materialet ligger utanför avdraget och räknas som andel av fakturan', () => {
  const svar = rakna({ arbetskostnadKr: 100000, materialkostnadKr: 50000 });
  assert.equal(svar.fakturaKr, 150000);
  assert.equal(svar.avdragKr, 30000);
  assert.equal(svar.utanAvdragKr, 50000);
  assert.equal(svar.andelUtanAvdragProcent, 33);
  assert.equal(svar.attBetalaKr, 120000);
  // Fällan hela fältet går i: procentsatsen på hela fakturan hade gett 45 000 kr.
  assert.notEqual(svar.avdragKr, Math.round((svar.fakturaKr * ROT_PROCENT) / 100));
});

test('rot-taket slår i vid en arbetskostnad över gränsen, med en ägare', () => {
  // 30 procent av 200 000 kr är 60 000 kr, alltså 10 000 kr över taket.
  const svar = rakna({ arbetskostnadKr: 200000, materialkostnadKr: 0 });
  assert.equal(svar.raktAvdragKr, 60000);
  assert.equal(svar.avdragKr, ROT_TAK_KR);
  assert.equal(svar.kapatKr, 10000);
  assert.equal(svar.begransatAv, 'rot-tak');
  assert.equal(svar.kvarRotTakKr, 0);
  assert.equal(svar.attBetalaKr, 150000);
});

test('två ägare dubblar rot-taket och det gemensamma taket', () => {
  const en = rakna({ arbetskostnadKr: 200000, antalAgare: 1 });
  const tva = rakna({ arbetskostnadKr: 200000, antalAgare: 2 });
  assert.equal(en.rotTakTotaltKr, ROT_TAK_KR);
  assert.equal(tva.rotTakTotaltKr, ROT_TAK_KR * 2);
  assert.equal(tva.gemensamtTakTotaltKr, GEMENSAMT_TAK_KR * 2);
  // Med två ägare ryms hela avdraget, och inget tak binder längre.
  assert.equal(tva.avdragKr, 60000);
  assert.equal(tva.begransatAv, 'procent');
});

test('det gemensamma taket binder när rutavdraget redan ätit av det', () => {
  // Rot-taket är orört, men rut har tagit 60 000 kr av de 75 000 gemensamma.
  const svar = rakna({ arbetskostnadKr: 200000, utnyttjatRutKr: 60000 });
  assert.equal(svar.begransatAv, 'gemensamt-tak');
  assert.equal(svar.avdragKr, GEMENSAMT_TAK_KR - 60000);
  assert.equal(svar.kvarGemensamtKr, 0);
});

test('utnyttjat rotavdrag äter av båda taken, utnyttjat rutavdrag bara av det gemensamma', () => {
  const medRot = rakna({ arbetskostnadKr: 200000, utnyttjatRotKr: 20000 });
  assert.equal(medRot.avdragKr, ROT_TAK_KR - 20000);
  assert.equal(medRot.begransatAv, 'rot-tak');

  const medRut = rakna({ arbetskostnadKr: 200000, utnyttjatRutKr: 20000 });
  // 75 000 minus 20 000 är 55 000, alltså mer än rot-taket: rot-taket binder ändå.
  assert.equal(medRut.avdragKr, ROT_TAK_KR);
  assert.equal(medRut.begransatAv, 'rot-tak');
});

test('ett fullt utnyttjat rotavdrag ger noll kvar, aldrig ett negativt tal', () => {
  const svar = rakna({ arbetskostnadKr: 100000, utnyttjatRotKr: 60000 });
  assert.equal(svar.avdragKr, 0);
  assert.equal(svar.kvarRotTakKr, 0);
  assert.equal(svar.attBetalaKr, svar.fakturaKr);
});

test('skatten sätter taket när den är lägre än allt annat', () => {
  const svar = rakna({ arbetskostnadKr: 100000, materialkostnadKr: 0, skattKr: 18000 });
  assert.equal(svar.raktAvdragKr, 30000);
  assert.equal(svar.avdragKr, 18000);
  assert.equal(svar.begransatAv, 'skatt');
  assert.equal(svar.kapatKr, 12000);
  assert.equal(svar.attBetalaKr, 82000);
});

test('tomt skattefält vägs inte, och svaret säger det i klartext', () => {
  const utan = rakna({ arbetskostnadKr: 100000, skattKr: null });
  assert.equal(utan.avdragKr, 30000);
  assert.equal(utan.begransatAv, 'procent');
  const skatteregeln = utan.regler.find((r) => r.slag === 'skatt');
  assert.match(skatteregeln.text, /inte fyllt i någon skatt/);
  assert.match(skatteregeln.text, /inte vägd/);

  const med = rakna({ arbetskostnadKr: 100000, skattKr: 40000 });
  assert.doesNotMatch(med.regler.find((r) => r.slag === 'skatt').text, /inte vägd/);
});

test('varje regel bär en källa och en adress hos Skatteverket, och de fem slagen finns', () => {
  const svar = rakna();
  assert.ok(svar.regler.length >= 7);
  for (const regel of svar.regler) {
    assert.ok(regel.text.length > 40, `för kort regeltext: ${regel.text}`);
    assert.match(regel.kalla, /Skatteverket/);
    assert.match(regel.url, /^https:\/\/www7?\.skatteverket\.se\//);
  }
  const slag = new Set(svar.regler.map((r) => r.slag));
  for (const s of ['arbete', 'procent', 'datum', 'tak', 'skatt']) {
    assert.ok(slag.has(s), `slaget ${s} saknas bland reglerna`);
  }
});

test('betalningsdatumet står i svaret med båda datumen och båda procentsatserna', () => {
  const datumregeln = rakna().regler.find((r) => r.slag === 'datum');
  assert.match(datumregeln.text, /12 maj 2025/);
  assert.match(datumregeln.text, /31 december 2025/);
  assert.match(datumregeln.text, new RegExp(`${ROT_PROCENT_HOJT} procent`));
  assert.match(datumregeln.text, new RegExp(`${ROT_PROCENT} procent`));
  assert.match(datumregeln.text, /dagen du betalar/);
});

test('maskinell utrustning nämns vid namn i svaret, och de fem råden står kvar', () => {
  const svar = rakna();
  const arbetsregeln = svar.regler.find((r) => r.slag === 'arbete');
  assert.match(arbetsregeln.text, /grävmaskiner/);
  assert.match(arbetsregeln.text, /borraggregat/);
  assert.equal(svar.gorInteDetHar.length, 5);
  assert.match(svar.gorInteDetHar[0], /hela fakturan/);
  assert.match(svar.gorInteDetHar[1], /maskinhyran/);
  assert.match(svar.gorInteDetHar[2], /dagen du betalar/);
  assert.match(svar.gorInteDetHar[3], /nybyggt hus/i);
  assert.match(svar.gorInteDetHar[4], /äger och bor/);
});

test('maskinistens arbetade tid ger avdrag, och rådet säger det', () => {
  /*
   * Bara maskinen är undantagen. Skatteverket skriver uttryckligen att arbete
   * som kranskötare eller grävmaskinist på tomten ger rotavdrag, och utan den
   * meningen går rådet att läsa som att markjobb med maskin inte ger rot alls.
   */
  const maskinraden = rakna().gorInteDetHar[1];
  assert.match(maskinraden, /Maskinistens arbetade tid ger däremot avdrag/);
  assert.match(maskinraden, /var sin rad/);
});

test('femårsregeln står både som regel och som råd, med värdeåret utskrivet', () => {
  const svar = rakna();
  const regeln = svar.regler.find((r) => r.text.includes('värdeåret'));
  assert.ok(regeln, 'regeln om femårsregeln saknas');
  assert.match(regeln.text, new RegExp(`yngre än ${NYBYGGT_SPARRAR_AR} år`));
  assert.match(regeln.text, /[Rr]eparation och underhåll/);
  assert.match(regeln.url, /^https:\/\/www\.skatteverket\.se\//);
  assert.match(svar.gorInteDetHar[3], new RegExp(`${NYBYGGT_SPARRAR_AR} år`));
  assert.match(svar.gorInteDetHar[3], /värdeåret/);
});

test('dateringsregeln pekar på regelsidan, inte på nyheten som kan tas bort', () => {
  const datumregeln = rakna().regler.find((r) => r.slag === 'datum');
  assert.equal(datumregeln.url, SKATTEVERKET_ROTAVDRAGET);
  assert.notEqual(datumregeln.url, SKATTEVERKET_HOJNINGEN);
  // Ansökningsfristen hör ihop med betalningsdatumet och ska stå på samma rad.
  assert.match(datumregeln.text, new RegExp(ANSOKAN_SENAST));
  // "Inte när arbetet gjordes" var vår tolkning och är delvis fel. Den ska bort.
  assert.doesNotMatch(datumregeln.text, /när hantverkaren/);
  assert.doesNotMatch(datumregeln.text, /när arbetet gjordes/);
});

test('villkorsregeln har alla sex villkoren, inklusive hyresrätten', () => {
  const villkoren = rakna().regler.filter((r) => r.slag === 'arbete');
  const raden = villkoren.find((r) => r.text.includes('18 år'));
  assert.ok(raden, 'villkorsraden saknas');
  assert.match(raden.text, /äga bostaden/);
  assert.match(raden.text, /bo i den/);
  assert.match(raden.text, /obegränsat skattskyldig/);
  assert.match(raden.text, /hyrd bostad ger inget rotavdrag/);
  assert.match(raden.text, /kort eller överföring/);
  assert.match(raden.text, /närstående/);
});

test('gränserna stoppar skrivfel i varje fält', () => {
  const overGransen = raknaRotavdrag({ ...STANDARD, arbetskostnadKr: GRANSER.arbetskostnadKr[1] + 1 });
  assert.equal(overGransen.status, 'ogiltig');
  assert.match(overGransen.fel.arbetskostnadKr, /mellan 0 och 5 000 000/);

  const negativ = raknaRotavdrag({ ...STANDARD, materialkostnadKr: -1 });
  assert.equal(negativ.status, 'ogiltig');

  const halvAgare = raknaRotavdrag({ ...STANDARD, antalAgare: 1.5 });
  assert.equal(halvAgare.status, 'ogiltig');
  assert.match(halvAgare.fel.antalAgare, /helt tal/);

  const nollAgare = raknaRotavdrag({ ...STANDARD, antalAgare: 0 });
  assert.equal(nollAgare.status, 'ogiltig');

  const skrapISkatten = raknaRotavdrag({ ...STANDARD, skattKr: Number.NaN });
  assert.equal(skrapISkatten.status, 'ogiltig');
  assert.match(skrapISkatten.fel.skattKr, /lämna fältet tomt/);
});

test('tolkaQuery tar decimalkomma, mellanslag, kronor och skräp', () => {
  assert.equal(fraga('arbete=120%20000').indata.arbetskostnadKr, 120000);
  assert.equal(fraga('arbete=12%20500,50').indata.arbetskostnadKr, 12500.5);
  assert.equal(fraga('arbete=12500.50').indata.arbetskostnadKr, 12500.5);
  assert.equal(fraga('material=40000kr').indata.materialkostnadKr, 40000);
  assert.equal(fraga('material=').indata.materialkostnadKr, 0);
  assert.equal(fraga('skatt=').indata.skattKr, null);
  assert.equal(fraga('skatt=40000').indata.skattKr, 40000);
  assert.ok(Number.isNaN(fraga('arbete=mycket').indata.arbetskostnadKr));
  assert.deepEqual(fraga('').indata, STANDARD);
  assert.equal(fraga('').harIndata, false);
  assert.equal(fraga('skatt=').harIndata, true);
  assert.equal(fraga('agare=3').indata.antalAgare, 3);
  assert.equal(fraga('rot=20000&rut=5000').indata.utnyttjatRotKr, 20000);
  assert.equal(fraga('rot=20000&rut=5000').indata.utnyttjatRutKr, 5000);
});

test('kronor sätter mellanslag som tusentalsavgränsare', () => {
  assert.equal(kronor(ROT_TAK_KR), '50 000');
  assert.equal(kronor(GEMENSAMT_TAK_KR), '75 000');
  assert.equal(kronor(EXEMPEL_AVDRAG_KR), '3 000');
  assert.equal(kronor(999), '999');
  assert.equal(kronor(1234567), '1 234 567');
});

test('beskedet säger vilket av de fyra taken som band svaret', () => {
  assert.match(rakna({ arbetskostnadKr: 100000 }).beskedRubrik, new RegExp(`${ROT_PROCENT} procent`));
  assert.equal(rakna({ arbetskostnadKr: 300000 }).beskedRubrik, 'Gränsen per person stoppar en del av avdraget');
  assert.equal(
    rakna({ arbetskostnadKr: 300000, utnyttjatRutKr: 60000 }).beskedRubrik,
    'Rutavdraget har redan tagit sin del',
  );
  assert.equal(rakna({ arbetskostnadKr: 100000, skattKr: 5000 }).beskedRubrik, 'Skatten räcker inte till hela avdraget');
  for (const fall of [{}, { arbetskostnadKr: 300000 }, { arbetskostnadKr: 100000, skattKr: 5000 }]) {
    assert.ok(rakna(fall).beskedRad.length < 120, 'beskedet i spalten ska vara en rad');
  }
});

test('en faktura utan arbete ger inget avdrag och inget delat med noll', () => {
  const svar = rakna({ arbetskostnadKr: 0, materialkostnadKr: 0 });
  assert.equal(svar.avdragKr, 0);
  assert.equal(svar.fakturaKr, 0);
  assert.equal(svar.attBetalaKr, 0);
  assert.equal(svar.andelUtanAvdragProcent, 0);
});
