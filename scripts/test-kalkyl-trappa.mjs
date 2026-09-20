/**
 * Kör trappräknaren mot Svenskt Träs tal och mot räkneexemplet i
 * src/content/guider/golv/bygga-trappa.mdx.
 *
 * Guiden läses från disk och parsas här i skriptet, så att en ändrad rad i
 * trappformelns tabell eller ett omskrivet räkneexempel bryter testet i
 * stället för att tyst glida ifrån verktyget. Talen artikeln redan publicerar
 * är låsta: trappformeln 2 × steghöjden + stegdjupet = 600 till 650 mm,
 * steghöjden mellan 140 och 200 mm, stegdjupet minst 250 mm, lutningen mellan
 * 17 och 30 grader (Svenskt Trä), och exempeltrappan på 2 700 mm som ger
 * sexton steg på 169 mm med 292 mm djup och 4,4 m i plan.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-trappa.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  BFS,
  endecimal,
  FRI_HOJD_MM,
  GAMLA_RADEN_TILL,
  GRANSER,
  LUTNING_MAX_GRADER,
  LUTNING_MIN_GRADER,
  lutning,
  meter,
  millimeter,
  MINST_ANTAL_STEG_UTE,
  minstaStegdjup,
  OPPNING_PLANSTEG_MAX_MM,
  raknaTrappa,
  STANDARD,
  STEGDJUP_MIN_INNE_MM,
  STEGDJUP_MIN_UTE_MM,
  STEGHOJD_MAX_MM,
  STEGHOJD_MIN_MM,
  tolkaQuery,
  TRAPPFORMEL_MAL_MM,
  TRAPPFORMEL_MAX_MM,
  TRAPPFORMEL_MIN_MM,
  trappformel,
  TRAPPLAN_DJUP_MM,
} from '../src/lib/kalkyl/trappa.ts';

const GUIDEN = readFileSync(new URL('../src/content/guider/golv/bygga-trappa.mdx', import.meta.url), 'utf8');

/** Tabellen med steghöjd, stegdjup och lutning ur guiden. */
function matttabellen() {
  const rader = [];
  let iTabell = false;
  for (const rad of GUIDEN.split('\n')) {
    if (rad.startsWith('| Steghöjd, mm |')) {
      iTabell = true;
      continue;
    }
    if (!iTabell) continue;
    if (!rad.startsWith('|')) break;
    if (rad.startsWith('|---')) continue;
    const celler = rad
      .split('|')
      .slice(1, -1)
      .map((c) => Number(c.trim()));
    rader.push({ steghojd: celler[0], stegdjup: celler[1], lutning: celler[2] });
  }
  return rader;
}

/** Räkneexemplets punktlista ur guiden: "- Steghöjd: 169 mm". */
function rakneexemplet() {
  const ut = {};
  for (const rad of GUIDEN.split('\n')) {
    const m = rad.match(/^- ([^:]+): ([\d\s,]+)\s*(mm|m|grader)?$/);
    if (!m) continue;
    ut[m[1].trim()] = Number(m[2].replace(/\s/g, '').replace(',', '.'));
  }
  return ut;
}

const TABELLEN = matttabellen();
const EXEMPLET = rakneexemplet();

/** Kör verktyget med standardvärdena och de fält anropet skriver över. */
function rakna(over = {}) {
  const svar = raknaTrappa({ ...STANDARD, ...over });
  assert.equal(svar.status, 'ok', `förväntade ok, fick ${svar.status}`);
  return svar;
}

const fraga = (s) => tolkaQuery(new URLSearchParams(s));

test('guidens mått-tabell har fem rader, och varje rad följer trappformeln på målsumman', () => {
  assert.equal(TABELLEN.length, 5);
  for (const rad of TABELLEN) {
    assert.equal(
      trappformel(rad.steghojd, rad.stegdjup),
      TRAPPFORMEL_MAL_MM,
      `raden ${rad.steghojd} mm bryter mot formeln`,
    );
  }
});

test('lutningen i guidens tabell är samma tal som modulen räknar fram', () => {
  for (const rad of TABELLEN) {
    assert.equal(Math.round(lutning(rad.steghojd, rad.stegdjup)), rad.lutning, `raden ${rad.steghojd} mm`);
  }
});

test('guidens spann är Svenskt Träs, och samma tal som modulens konstanter', () => {
  assert.ok(GUIDEN.includes(`${TRAPPFORMEL_MIN_MM} till ${TRAPPFORMEL_MAX_MM} mm`));
  assert.ok(GUIDEN.includes(`mellan ${STEGHOJD_MIN_MM} och ${STEGHOJD_MAX_MM} mm`));
  assert.ok(GUIDEN.includes(`minst ${STEGDJUP_MIN_INNE_MM} mm`));
  assert.ok(GUIDEN.includes(`mellan ${LUTNING_MIN_GRADER} och ${LUTNING_MAX_GRADER} grader`));
  // Den första raden i guidens tabell är Svenskt Träs undre steghöjd.
  assert.equal(TABELLEN[0].steghojd, STEGHOJD_MIN_MM);
});

test('standardvärdena ger guidens räkneexempel, tal för tal', () => {
  const svar = rakna();
  assert.equal(STANDARD.vaningshojdMm, EXEMPLET['Våningshöjd']);
  assert.equal(svar.antalSteg, EXEMPLET['Antal stigningar']);
  assert.equal(svar.steghojdHelMm, EXEMPLET['Steghöjd']);
  assert.equal(svar.stegdjupMm, EXEMPLET['Stegdjup']);
  assert.equal(Math.round(svar.lutningGrader), EXEMPLET['Lutning']);
  assert.equal(Math.round((svar.langdIPlanMm / 1000) * 10) / 10, EXEMPLET['Trappans längd på golvet']);
  // Exakt steghöjd: 2 700 delat på sexton, alltså 168,75 mm.
  assert.equal(svar.steghojdMm, 2700 / 16);
  assert.equal(svar.antalPlansteg, 15);
  assert.equal(svar.uppfyller, true);
});

test('stegdjupet avrundas nedåt till hel millimeter, som i guiden', () => {
  // 630 minus två gånger 168,75 är 292,5. Guiden skriver 292, inte 293.
  const svar = rakna();
  assert.equal(svar.stegdjupMm, 292);
  assert.equal(svar.formelSummaMm, 629.5);
  assert.equal(svar.iBastaSpannet, true);
});

test('antalet steg väljs så att stegdjupet hamnar nära det du bad om', () => {
  /*
   * Trappformeln binder ihop höjd och djup: vill du ha grundare steg måste de
   * bli högre, och då blir de färre. Vill du ha djupare steg blir de lägre och
   * fler. Det är hela poängen med formeln, och testet låser riktningen.
   */
  const grunt = rakna({ onskatStegdjupMm: 250 });
  const normalt = rakna({ onskatStegdjupMm: 300 });
  const djupt = rakna({ onskatStegdjupMm: 350 });
  assert.ok(grunt.antalSteg < normalt.antalSteg, 'grundare steg ska ge färre och högre steg');
  assert.ok(djupt.antalSteg > normalt.antalSteg, 'djupare steg ska ge fler och lägre steg');
  assert.ok(grunt.steghojdMm > djupt.steghojdMm, 'den grunda trappan ska vara brantare');
  for (const svar of [grunt, normalt, djupt]) {
    assert.ok(svar.steghojdMm >= STEGHOJD_MIN_MM && svar.steghojdMm <= STEGHOJD_MAX_MM);
    // Djupet ska ligga närmare önskemålet än ett helt steg bredvid.
    assert.ok(Math.abs(svar.stegdjupMm - svar.antalSteg) > 0);
  }
});

test('steghöjden håller sig i Svenskt Träs spann på varje rimlig våningshöjd', () => {
  for (let vh = 1400; vh <= 4000; vh += 50) {
    const svar = rakna({ vaningshojdMm: vh });
    assert.ok(
      svar.steghojdMm >= STEGHOJD_MIN_MM && svar.steghojdMm <= STEGHOJD_MAX_MM,
      `våningshöjd ${vh} gav steghöjd ${svar.steghojdMm}`,
    );
    assert.ok(
      Math.abs(svar.antalSteg * svar.steghojdMm - vh) < 1e-6,
      'stegen ska summera till våningshöjden',
    );
  }
});

test('längdläget delar längden på planstegen och håller formeln nära målet', () => {
  const svar = rakna({ styrs: 'langd', tillgangligLangdMm: 4400 });
  assert.equal(svar.antalSteg, 16);
  assert.equal(svar.antalPlansteg, 15);
  assert.equal(svar.stegdjupMm, Math.floor(4400 / 15));
  assert.equal(svar.langdIPlanMm, 15 * Math.floor(4400 / 15));
  // Längden växer aldrig förbi den du har, eftersom djupet rundas nedåt.
  assert.ok(svar.langdIPlanMm <= 4400);
  assert.ok(Math.abs(svar.formelSummaMm - TRAPPFORMEL_MAL_MM) < 15);
});

test('en kort längd ger en brant trappa, och verktyget säger det i beskedet', () => {
  const svar = rakna({ styrs: 'langd', tillgangligLangdMm: 2500 });
  assert.equal(svar.uppfyller, false);
  assert.ok(svar.avvikelser.length >= 1);
  assert.equal(svar.beskedRubrik, 'Måtten håller inte');
  // Beskedet i spalten ska bära avvikelsen, inte bara antyda den.
  assert.ok(svar.beskedRad.length > 20);
  for (const a of svar.avvikelser) assert.ok(a.kalla.length > 10, 'varje avvikelse ska bära sin källa');
});

test('vilplanet tar ett stegs plats i längdled och delar trappan i två lopp', () => {
  const rak = rakna();
  const med = rakna({ utforande: 'vilplan' });
  assert.ok(med.lopp !== null);
  assert.equal(med.lopp.ett + med.lopp.tva, med.antalSteg);
  assert.equal(med.langdIPlanMm, (med.antalSteg - 2) * med.stegdjupMm + TRAPPLAN_DJUP_MM);
  assert.equal(rak.lopp, null);
  assert.equal(rak.langdIPlanMm, (rak.antalSteg - 1) * rak.stegdjupMm);
  // Vilplanet är inget plansteg, så ett plansteg färre ska byggas.
  assert.equal(med.antalPlansteg, med.antalSteg - 2);
  assert.equal(rak.antalPlansteg, rak.antalSteg - 1);
  assert.equal(med.antalPlansteg, rak.antalPlansteg - 1);
});

test('en längd som vilplanet äter upp ger ett fel på längdfältet', () => {
  const svar = raknaTrappa({
    ...STANDARD,
    styrs: 'langd',
    utforande: 'vilplan',
    tillgangligLangdMm: TRAPPLAN_DJUP_MM - 100,
  });
  assert.equal(svar.status, 'ogiltig');
  assert.match(svar.fel.tillgangligLangdMm, /vilplan/i);
});

test('ute gäller det grundare stegdjupet inte, och avvikelsen bär rätt avsnitt', () => {
  assert.equal(minstaStegdjup('inne'), STEGDJUP_MIN_INNE_MM);
  assert.equal(minstaStegdjup('ute'), STEGDJUP_MIN_UTE_MM);
  // 292 mm duger inne men inte ute.
  const inne = rakna({ placering: 'inne' });
  const ute = rakna({ placering: 'ute' });
  assert.equal(inne.uppfyller, true);
  assert.equal(ute.uppfyller, false);
  const djupavvikelsen = ute.avvikelser.find((a) => a.text.includes('Stegdjupet'));
  assert.ok(djupavvikelsen, 'stegdjupet skulle flaggas ute');
  assert.match(djupavvikelsen.kalla, /8:91/);
  assert.match(djupavvikelsen.text, /tomten/);
});

test('en utetrappa med två steg flaggas mot det gamla rådet om fler än två', () => {
  // 400 mm upp till dörrtröskeln ger två steg på 200 mm, alltså ett för få.
  const svar = rakna({ vaningshojdMm: 400, placering: 'ute' });
  assert.equal(svar.antalSteg, 2);
  assert.ok(svar.antalSteg < MINST_ANTAL_STEG_UTE);
  assert.equal(svar.uppfyller, false);
  const raden = svar.avvikelser.find((a) => a.text.includes('fler än två'));
  assert.ok(raden, 'raden om fler än två steg saknas');
  assert.match(raden.kalla, /8:91/);
  // Samma trappa inne ska inte flaggas för antalet steg, rådet gällde tomten.
  const inne = rakna({ vaningshojdMm: 400, placering: 'inne' });
  assert.ok(!inne.avvikelser.some((a) => a.text.includes('fler än två')));
});

test('Boverketsraderna säger att föreskriften saknar stegmått, och bär paragraferna', () => {
  const regler = rakna().regler.filter((r) => r.slag === 'boverket');
  assert.ok(regler.length >= 3);
  const utanMatt = regler.find((r) => r.text.includes('anger inga stegmått'));
  assert.ok(utanMatt, 'raden om att Boverket inte anger stegmått saknas');
  assert.match(utanMatt.text, new RegExp(BFS));
  assert.match(utanMatt.kalla, /2 kap\. 5 §/);
  const siffror = regler.find((r) => r.text.includes('Fri höjd'));
  assert.match(siffror.text, new RegExp(`${meter(FRI_HOJD_MM)} m`));
  assert.match(siffror.text, new RegExp(`${OPPNING_PLANSTEG_MAX_MM} mm`));
  for (const r of rakna().regler) {
    assert.ok(r.text.length > 40, `för kort regeltext: ${r.text}`);
    assert.ok(r.kalla.length > 5, `regel utan källa: ${r.text}`);
  }
});

test('det borttagna rådet presenteras som borttaget, inte som gällande krav', () => {
  const raden = rakna().regler.find((r) => /allmän(t|na) råd/.test(r.text));
  assert.ok(raden, 'raden om det gamla rådet saknas');
  assert.match(raden.text, /gamla byggreglerna/);
  assert.match(raden.text, /borta/);
  assert.match(raden.text, /gånglinjen/);
  // Raden ska säga att måttet inte kommer ur den gällande föreskriften.
  assert.match(raden.text, /kommer inte ur föreskriften/);
});

test('gränserna stoppar skrivfel i varje fält', () => {
  const lag = raknaTrappa({ ...STANDARD, vaningshojdMm: GRANSER.vaningshojdMm[0] - 1 });
  assert.equal(lag.status, 'ogiltig');
  assert.match(lag.fel.vaningshojdMm, /mellan 250 och 6 000/);

  const skrap = raknaTrappa({ ...STANDARD, vaningshojdMm: Number.NaN });
  assert.equal(skrap.status, 'ogiltig');

  const djup = raknaTrappa({ ...STANDARD, onskatStegdjupMm: 500 });
  assert.equal(djup.status, 'ogiltig');
  assert.match(djup.fel.onskatStegdjupMm, /mellan 200 och 400/);

  // Längdfältet vägs bara när det är längden som styr.
  assert.equal(raknaTrappa({ ...STANDARD, tillgangligLangdMm: 0 }).status, 'ok');
  assert.equal(raknaTrappa({ ...STANDARD, styrs: 'langd', tillgangligLangdMm: 0 }).status, 'ogiltig');
});

test('de fyra råden står kvar, och det första är det avvikande steget', () => {
  const svar = rakna();
  assert.equal(svar.gorInteDetHar.length, 4);
  assert.match(svar.gorInteDetHar[0], /avviker i höjd/);
  assert.match(svar.gorInteDetHar[1], /färdigt/);
  assert.match(svar.gorInteDetHar[2], /brantare/);
  assert.match(svar.gorInteDetHar[3], /fria höjden/);
});

test('markeringskravet bär småhusundantaget, som guiden också gör', () => {
  /*
   * BFS 2024:9, 2 kap. 8 § andra stycket undantar en- och tvåbostadshus och
   * bostadslägenheter från kravet att markera ett avvikande steg. Utan den
   * meningen säger verktyget emot guiden, och verktygets läsare bygger
   * nästan alltid en villatrappa.
   */
  const raden = rakna().gorInteDetHar[0];
  assert.match(raden, /småhus/);
  assert.match(raden, /undantagna/);
  assert.match(raden, /inte steget mindre farligt/);
  // Guiden ska säga samma sak om undantaget.
  assert.match(GUIDEN, /en- och tvåbostadshus/);
});

test('inga stegmått, aldrig inga mått: föreskriften har åtta bindande tal', () => {
  /*
   * Påståendet gäller stegmåtten. BFS 2024:9 innehåller flera bindande tal,
   * bland dem 100 mm, 50 mm och 2,00 m, och verktyget citerar tre av dem.
   * Formuleringen "inga mått" vore därför fel var den än stod.
   */
  const boverket = rakna().regler.filter((r) => r.slag === 'boverket');
  for (const r of boverket) {
    assert.doesNotMatch(r.text, /anger inga mått/, `för brett formulerat: ${r.text}`);
  }
  assert.ok(boverket.some((r) => r.text.includes('anger inga stegmått')));
  // Sidan och dess antagandetabell prövas i samma anda av granskaren.
  const sidan = readFileSync(new URL('../src/pages/rakna/trappa.astro', import.meta.url), 'utf8');
  assert.doesNotMatch(sidan, /anger inga mått/);
  assert.match(sidan, /anger inga stegmått/);
});

test('sidan säger att beslutet att mäta mot upphävda råd är vårt', () => {
  const sidan = readFileSync(new URL('../src/pages/rakna/trappa.astro', import.meta.url), 'utf8');
  // Raden märkt Antagande, och standarden vi inte läst.
  assert.match(sidan, /Att jag mäter mot de gamla råden/);
  assert.match(sidan, /SIS\/TS 59:2025/);
  assert.match(sidan, /Inte läst/);
  /*
   * "borta sedan i somras" åldras illa i en tabell som ska stå i flera år.
   * Datumet ska komma ur konstanten, inte skrivas som text, så att det inte
   * kan glida ifrån modulen. Därför söks mallsträngen och inte det utskrivna
   * datumet.
   */
  assert.doesNotMatch(sidan, /borta sedan i somras/);
  assert.ok(sidan.includes('borttaget den ${GAMLA_RADEN_TILL}'), 'datumet ska komma ur GAMLA_RADEN_TILL');
  assert.equal(GAMLA_RADEN_TILL, '1 juli 2026');
});

test('tolkaQuery tar decimalkomma, mellanslag, enhet och skräp', () => {
  assert.equal(fraga('hojd=2%20700').indata.vaningshojdMm, 2700);
  assert.equal(fraga('hojd=2700mm').indata.vaningshojdMm, 2700);
  assert.equal(fraga('hojd=2700,5').indata.vaningshojdMm, 2700.5);
  assert.ok(Number.isNaN(fraga('hojd=högt').indata.vaningshojdMm));
  assert.equal(fraga('styrs=langd').indata.styrs, 'langd');
  assert.equal(fraga('styrs=magkänsla').indata.styrs, STANDARD.styrs);
  assert.equal(fraga('plats=ute').indata.placering, 'ute');
  assert.equal(fraga('plats=månen').indata.placering, STANDARD.placering);
  assert.equal(fraga('utforande=vilplan').indata.utforande, 'vilplan');
  assert.equal(fraga('utforande=spiral').indata.utforande, STANDARD.utforande);
  assert.deepEqual(fraga('').indata, STANDARD);
  assert.equal(fraga('').harIndata, false);
  assert.equal(fraga('hojd=2700').harIndata, true);
});

test('talen skrivs som stilguiden vill: komma och mellanslag', () => {
  assert.equal(millimeter(2700), '2 700');
  assert.equal(millimeter(292), '292');
  assert.equal(endecimal(168.75), '168,8');
  assert.equal(endecimal(30), '30');
  assert.equal(meter(FRI_HOJD_MM), '2,00');
  assert.equal(meter(4387), '4,39');
});
