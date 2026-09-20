/**
 * Kör verktyget "Självbesiktning av källaren" mot symptomtabellen och
 * tejptestets tre utfall i src/content/guider/fukt/fukt-i-kallaren.mdx, och mot
 * underlaget docs/briefer/underlag-kalkyl-kallare-2026-09-19.md.
 *
 * Guiden läses från disk och parsas här i skriptet, så att en ändrad rad i
 * tabellen eller ett omskrivet tejptest bryter testet i stället för att tyst
 * glida ifrån verktyget. De tal artikeln redan publicerar är låsta: gränsen på
 * 75 procent relativ luftfuktighet (Boverket, BBR 6:52), avfuktaren på 5 948 kr
 * (Proffsmagasinet), fuktkontrollen på 5 355 kr (Ocab), dräneringens 3 000 kr
 * per löpmeter (Villaägarna) och de 3 000 liter ett regn på 20 mm ger på ett
 * tak på 150 kvm (Anticimex).
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-kallare.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  ANVANDNINGAR,
  ARSTIDER,
  AVFUKTARE_KR,
  bedomKallare,
  BESKED_RUBRIK,
  DRANERING_KR_PER_LOPMETER,
  FUKTUTREDNING_KR,
  GRANSER,
  GUIDE,
  HYGROSTAT_RF,
  KAN_HALLA_AR,
  KRITISK_RF,
  kronor,
  REGN_LITER,
  REGN_MM,
  STANDARD,
  SYMPTOM,
  TAK_KVM,
  TEJPTEST_DYGN,
  TEJPTESTER,
  tolkaQuery,
  VILLAGRUND_LOPMETER,
} from '../src/lib/kalkyl/kallare.ts';

const GUIDEN = readFileSync(new URL('../src/content/guider/fukt/fukt-i-kallaren.mdx', import.meta.url), 'utf8');

/** Symptomtabellens rader ur guiden: vad du ser, trolig orsak, nästa steg. */
function symptomtabellen() {
  const rader = [];
  let iTabell = false;
  for (const rad of GUIDEN.split('\n')) {
    if (rad.startsWith('| Det du ser |')) {
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
    rader.push({ ser: celler[0], trolig: celler[1], nastaSteg: celler[2] });
  }
  return rader;
}

/** Ett resultat som gick igenom, eller ett testfel med feltexterna. */
function ok(indata, vad) {
  const r = bedomKallare({ ...STANDARD, ...indata });
  assert.equal(r.status, 'ok', `${vad}: väntade ok, fick ${r.status} med ${JSON.stringify(r.fel ?? {})}`);
  return r;
}

function fraga(q) {
  return tolkaQuery(new URLSearchParams(q));
}

/** Hela svaret som en sträng, för att leta efter ett tal eller en formulering. */
function text(r) {
  return [r.beskedRubrik, r.beskedRad, r.nastaStegText, ...r.regler.map((x) => `${x.text} ${x.kalla}`)].join(' ');
}

// ---------------------------------------------------------------------------
// Guiden är facit

test('symptomtabellen i guiden har sex rader, och modulen har samma sex', () => {
  const tabell = symptomtabellen();
  assert.equal(tabell.length, 6, 'guidens symptomtabell ska ha sex rader');
  assert.equal(SYMPTOM.length, 6);
});

test('varje rad i modulen har guidens egen text, troliga orsak och nästa steg', () => {
  const tabell = symptomtabellen();
  for (let i = 0; i < tabell.length; i++) {
    // Kryssrutans etikett är guidens cell ord för ord, så att formuläret och
    // artikeln inte kan beskriva samma symptom på två olika sätt.
    assert.equal(SYMPTOM[i].etikett, tabell[i].ser, `rad ${i + 1}: vad du ser`);
    assert.equal(SYMPTOM[i].trolig, tabell[i].trolig, `rad ${i + 1}: trolig orsak`);
    assert.equal(SYMPTOM[i].nastaSteg, tabell[i].nastaSteg, `rad ${i + 1}: nästa steg`);
  }
});

test('radernas ordning är tabellens, och pekar på rätt av de tre vattnen', () => {
  assert.deepEqual(
    SYMPTOM.map((s) => s.varde),
    ['salt', 'flagnar', 'imma', 'horn', 'rinner', 'lukt'],
  );
  assert.deepEqual(
    SYMPTOM.map((s) => s.pekarPa),
    ['markfukt', 'markfukt', 'kondens', 'kondens', 'lackage', 'fuktig-luft'],
  );
});

test('tejptestets tre utfall står i guiden och har var sin rad i verktyget', () => {
  assert.match(GUIDEN, /Droppar på plastens utsida, mot rummet, betyder[\s\S]*?Det är kondens[.,]/);
  assert.match(GUIDEN, /Droppar på insidan, mot väggen, betyder[\s\S]*?Det är markfukt\./);
  assert.match(GUIDEN, /Torr plast på båda sidor betyder[^.]*inte att du är frisk\./);
  assert.deepEqual(
    TEJPTESTER.map((t) => t.varde),
    ['markfukt', 'kondens', 'torrt', 'inte-gjort'],
  );
});

test('talen i guidens kostnadstabell är modulens konstanter', () => {
  assert.match(GUIDEN, new RegExp(`${kronor(AVFUKTARE_KR)} kr för Wood's SW39FW`));
  assert.match(GUIDEN, new RegExp(`${kronor(FUKTUTREDNING_KR)} kr inklusive moms`));
  assert.match(GUIDEN, new RegExp(`Cirka ${kronor(DRANERING_KR_PER_LOPMETER)} kr per löpmeter husgrund`));
  assert.match(GUIDEN, new RegExp(`En villagrund på ${VILLAGRUND_LOPMETER} löpmeter`));
  assert.match(GUIDEN, new RegExp(`${kronor(DRANERING_KR_PER_LOPMETER * VILLAGRUND_LOPMETER)} kr i arbetskostnad`));
});

test('Boverkets gräns, Villaägarnas femtio år och Anticimex tal står i guiden', () => {
  assert.equal(KRITISK_RF, 75);
  assert.match(GUIDEN, new RegExp(`BBR 6:52[^.]*${KRITISK_RF} procent relativ luftfuktighet`));
  assert.equal(KAN_HALLA_AR, 50);
  assert.match(GUIDEN, /kan fungera i femtio år/);
  assert.equal(HYGROSTAT_RF, 60);
  assert.match(GUIDEN, new RegExp(`hygrostaten[^.]*${HYGROSTAT_RF} procent`));
  assert.equal(REGN_LITER, 3000);
  assert.match(GUIDEN, new RegExp(`tak på ${TAK_KVM} kvm[^.]*${kronor(REGN_LITER)} liter[^.]*${REGN_MM} mm regn`));
});

// ---------------------------------------------------------------------------
// Fall 1 till 12: varje diagnos och varje prioritetsregel

test('fall 1: tomt formulär ger vet inte än, och pekar på tejptestet', () => {
  const r = ok({}, 'standardvärdena');
  assert.equal(r.diagnos, 'oklart');
  assert.equal(r.beskedRubrik, BESKED_RUBRIK.oklart);
  assert.equal(r.nastaStegLank.href, `${GUIDE}#tejptestet-svarar-på-två-dygn`);
  assert.equal(r.visaAvfuktare, false);
  assert.equal(r.visaDranering, false);
  assert.equal(r.visaUtredning, true);
  assert.equal(r.overKritiskRf, null);
  // Utan kryss ska verktyget be läsaren titta först, som guiden gör.
  assert.match(text(r), /ficklampa och en torr trasa/);
});

test('fall 2: vita ränder på betongen ger markfukt, som tabellens första rad', () => {
  const r = ok({ symptom: ['salt'] }, 'saltutfällning');
  assert.equal(r.diagnos, 'markfukt');
  assert.equal(r.visaDranering, true);
  assert.match(text(r), /Villaägarna, saltutfällningar/);
  // Tejptestet är ogjort, så nästa steg är fortfarande plasten.
  assert.equal(r.nastaStegLank.href, `${GUIDE}#tejptestet-svarar-på-två-dygn`);
});

test('fall 3: färg som släpper nedersta halvmetern ger markfukt', () => {
  const r = ok({ symptom: ['flagnar'] }, 'flagnande färg');
  assert.equal(r.diagnos, 'markfukt');
  assert.equal(r.valdaSymptom.length, 1);
  assert.equal(r.valdaSymptom[0].trolig, 'Markfukt');
});

test('fall 4: imma på kallvattenrör ger kondens', () => {
  const r = ok({ symptom: ['imma'] }, 'imma på röret');
  assert.equal(r.diagnos, 'kondens');
  assert.equal(r.visaAvfuktare, true);
  assert.equal(r.visaDranering, false);
  assert.match(text(r), new RegExp(`${kronor(AVFUKTARE_KR)} kr`));
  assert.match(text(r), new RegExp(`hygrostaten[\\s\\S]*?${HYGROSTAT_RF} procent`));
});

test('fall 5: mörk fläck i hörnet bakom hyllan ger kondens', () => {
  const r = ok({ symptom: ['horn'] }, 'mörkt hörn');
  assert.equal(r.diagnos, 'kondens');
  assert.equal(r.valdaSymptom[0].nastaSteg, 'Flytta hyllan och mät igen om två veckor');
});

test('fall 6: pöl vid en rörgenomföring efter regn ger läckage', () => {
  const r = ok({ symptom: ['rinner'] }, 'pöl efter regn');
  assert.equal(r.diagnos, 'lackage');
  assert.equal(r.visaAvfuktare, false);
  assert.equal(r.visaDranering, false);
  assert.equal(r.visaUtredning, true);
  assert.equal(r.nastaStegLank.href, `${GUIDE}#läckage-kommer-med-regnet`);
  assert.match(text(r), /Följ vattnet uppåt och utåt/);
});

test('fall 7: tvätt som inte torkar ger hög luftfuktighet utan känd orsak', () => {
  const r = ok({ symptom: ['lukt'] }, 'lukt och blöt tvätt');
  assert.equal(r.diagnos, 'hog-luftfuktighet');
  assert.equal(r.visaUtredning, true);
  assert.match(text(r), /Folkhälsomyndigheten/);
});

test('fall 8: tejptestet säger markfukt, och då hjälper ingen maskin', () => {
  const r = ok({ tejptest: 'markfukt' }, 'plast våt på väggsidan');
  assert.equal(r.diagnos, 'markfukt');
  assert.equal(r.visaDranering, true);
  assert.equal(r.visaAvfuktare, false);
  assert.equal(r.nastaStegLank.href, `${GUIDE}#markfukt-i-källaren-kommer-genom-väggen`);
  assert.match(text(r), /skyddet mot den hör hemma på utsidan av väggen/i);
  assert.match(text(r), new RegExp(`${kronor(DRANERING_KR_PER_LOPMETER)} kr per löpmeter`));
});

test('fall 9: tejptestet säger kondens, och då är avfuktaren rätt maskin', () => {
  const r = ok({ tejptest: 'kondens' }, 'plast våt på rumssidan');
  assert.equal(r.diagnos, 'kondens');
  assert.equal(r.visaAvfuktare, true);
  assert.equal(r.nastaStegLank.href, `${GUIDE}#kondens-i-källaren-vädrar-du-in-själv`);
});

test('fall 10: torr plast på båda sidor betyder fel vägg, inte frisk källare', () => {
  const r = ok({ tejptest: 'torrt' }, 'torr plast');
  assert.equal(r.diagnos, 'oklart');
  assert.match(text(r), /betyder inte att du är frisk/);
  assert.match(text(r), /fel vägg/);
  assert.equal(r.nastaStegLank.href, `${GUIDE}#tejptestet-svarar-på-två-dygn`);
});

test('fall 11: tejptestet vinner över symptomen', () => {
  // Saltutfällning pekar på markfukt, men plasten är våt på rumssidan.
  const r = ok({ symptom: ['salt'], tejptest: 'kondens' }, 'salt plus kondens på plasten');
  assert.equal(r.diagnos, 'kondens');
  assert.equal(r.visaAvfuktare, true);
  // Raden om saltet står kvar i listan, den styr bara inte svaret.
  assert.equal(r.valdaSymptom.length, 1);
  assert.match(text(r), /Vita ränder eller kristaller/);
});

test('fall 12: symptomen vinner över hygrometern', () => {
  const r = ok({ symptom: ['salt'], luftfuktighet: 85 }, 'salt plus hög luftfuktighet');
  assert.equal(r.diagnos, 'markfukt');
  assert.equal(r.overKritiskRf, true);
  assert.match(text(r), new RegExp(`över Boverkets gräns`));
});

test('fall 13: läckage efter regn pekas ut oavsett vad plasten visade', () => {
  const medKondens = ok({ symptom: ['rinner'], tejptest: 'kondens' }, 'pöl plus kondens');
  assert.equal(medKondens.diagnos, 'lackage');
  const medMarkfukt = ok({ symptom: ['rinner', 'salt'], tejptest: 'markfukt' }, 'pöl plus markfukt');
  assert.equal(medMarkfukt.diagnos, 'lackage');
  assert.match(text(medMarkfukt), /väntar inte till helgen/);
});

test('fall 14: markfukt och kondens på en gång utan tejptest ger vet inte än', () => {
  const r = ok({ symptom: ['salt', 'imma'] }, 'två orsaker samtidigt');
  assert.equal(r.diagnos, 'oklart');
  assert.equal(r.valdaSymptom.length, 2);
});

test('fall 15: hygrometern ensam över gränsen ger hög luftfuktighet', () => {
  const over = ok({ luftfuktighet: KRITISK_RF }, 'exakt på gränsen');
  assert.equal(over.diagnos, 'hog-luftfuktighet');
  assert.equal(over.overKritiskRf, true);
  const under = ok({ luftfuktighet: KRITISK_RF - 1 }, 'strax under gränsen');
  assert.equal(under.diagnos, 'oklart');
  assert.equal(under.overKritiskRf, false);
});

// ---------------------------------------------------------------------------
// Årstid, användning, råden och ordningen

test('kondens sommartid och vintertid ger olika mätråd', () => {
  const sommar = ok({ tejptest: 'kondens', arstid: 'sommar' }, 'kondens i augusti');
  assert.match(text(sommar), /Vädra inte en varm eftermiddag/);
  const vinter = ok({ tejptest: 'kondens', arstid: 'vinter' }, 'kondens i januari');
  assert.match(text(vinter), /uteluften är torr på vintern/);
  assert.match(text(vinter), /tvätt som torkar inomhus/);
});

test('en inredd källare tappar Villaägarnas villkor för femtio år', () => {
  const kallare = ok({ anvandning: 'kallare' }, 'bara källare');
  assert.match(text(kallare), new RegExp(`kan fungera i ${KAN_HALLA_AR} år`));
  const bebodd = ok({ anvandning: 'bebodd' }, 'inredd källare');
  assert.match(text(bebodd), new RegExp(`${KAN_HALLA_AR} år för en dränering gäller uttryckligen`));
  assert.match(text(bebodd), /olägenhet för hälsan/);
});

test('reglerna kommer i guidens ordning: titta, tejpa, mät, åtgärda', () => {
  const r = ok({ symptom: ['salt', 'imma'], tejptest: 'markfukt', luftfuktighet: 80 }, 'allt ifyllt');
  const ordning = ['titta', 'tejpa', 'mat', 'atgarda'];
  const index = r.regler.map((regel) => ordning.indexOf(regel.steg));
  assert.ok(
    index.every((v, n) => n === 0 || v >= index[n - 1]),
    `reglerna ligger i fel ordning: ${r.regler.map((x) => x.steg).join(', ')}`,
  );
  // Varje regel bär en källa, annars får den inte stå på sidan.
  for (const regel of r.regler) assert.ok(regel.kalla.length > 0, `regeln "${regel.text}" saknar källa`);
});

test('gör inte det här är fyra rader, och de fyra guiden pekar ut', () => {
  const r = ok({}, 'standardvärdena');
  assert.equal(r.gorInteDetHar.length, 4);
  assert.match(r.gorInteDetHar[0], /avfuktare mot markfukt/);
  assert.match(r.gorInteDetHar[1], /torr plast/i);
  assert.match(r.gorInteDetHar[2], /fuktutredning med mätvärden/);
  assert.match(r.gorInteDetHar[3], /tät plastmatta mot källarväggens utsida/);
});

test('fuktutredningens pris står i svaret när verktyget inte kommer längre', () => {
  for (const fall of [{}, { symptom: ['rinner'] }, { symptom: ['lukt'] }]) {
    const r = ok(fall, JSON.stringify(fall));
    assert.equal(r.visaUtredning, true);
    assert.match(text(r), new RegExp(`${kronor(FUKTUTREDNING_KR)} kr inklusive moms`));
  }
  // Har plasten svarat pekar verktyget på åtgärden, inte på ett besök.
  assert.equal(ok({ tejptest: 'markfukt' }, 'markfukt').visaUtredning, false);
  assert.equal(ok({ tejptest: 'kondens' }, 'kondens').visaUtredning, false);
});

test('tejptestets tidsangivelse är samma två dygn som guiden skriver', () => {
  assert.equal(TEJPTEST_DYGN, 2);
  const r = ok({}, 'standardvärdena');
  assert.match(text(r), new RegExp(`vänta minst ${TEJPTEST_DYGN} dygn`));
});

// ---------------------------------------------------------------------------
// Gränser och tolkaQuery

test('hygrometern har gränser, och ett tomt fält är inte ett fel', () => {
  assert.deepEqual([...GRANSER.luftfuktighet], [1, 100]);
  assert.equal(bedomKallare({ ...STANDARD, luftfuktighet: 0 }).status, 'ogiltig');
  assert.equal(bedomKallare({ ...STANDARD, luftfuktighet: 101 }).status, 'ogiltig');
  assert.equal(bedomKallare({ ...STANDARD, luftfuktighet: NaN }).status, 'ogiltig');
  assert.equal(bedomKallare({ ...STANDARD, luftfuktighet: 1 }).status, 'ok');
  assert.equal(bedomKallare({ ...STANDARD, luftfuktighet: 100 }).status, 'ok');
  assert.equal(bedomKallare({ ...STANDARD, luftfuktighet: null }).status, 'ok');
  const trasig = bedomKallare({ ...STANDARD, luftfuktighet: 0 });
  assert.match(trasig.fel.luftfuktighet, /mellan 1 och 100 procent/);
});

test('tolkaQuery läser flera kryssrutor och behåller tabellens ordning', () => {
  const { indata, harIndata } = fraga('se=lukt&se=salt&se=imma');
  assert.equal(harIndata, true);
  assert.deepEqual(indata.symptom, ['salt', 'imma', 'lukt']);
});

test('tolkaQuery tål okända, dubblerade och saknade värden', () => {
  assert.deepEqual(fraga('se=kaffe&se=salt&se=salt').indata.symptom, ['salt']);
  assert.deepEqual(fraga('').indata, STANDARD);
  assert.equal(fraga('').harIndata, false);
  assert.equal(fraga('tejp=blött').indata.tejptest, STANDARD.tejptest);
  assert.equal(fraga('arstid=host').indata.arstid, STANDARD.arstid);
  assert.equal(fraga('bruk=garage').indata.anvandning, STANDARD.anvandning);
});

test('tolkaQuery tar decimalkomma, mellanslag och tomt fält i hygrometern', () => {
  assert.equal(fraga('rf=72,5').indata.luftfuktighet, 72.5);
  assert.equal(fraga('rf=72.5').indata.luftfuktighet, 72.5);
  assert.equal(fraga('rf=%201%2000').indata.luftfuktighet, 100);
  assert.equal(fraga('rf=').indata.luftfuktighet, null);
  assert.equal(fraga('rf=%20%20').indata.luftfuktighet, null);
  assert.ok(Number.isNaN(fraga('rf=fuktigt').indata.luftfuktighet));
  assert.equal(fraga('rf=').harIndata, true);
});

test('varje val i formuläret går att skriva i adressen och tillbaka', () => {
  for (const t of TEJPTESTER) assert.equal(fraga(`tejp=${t.varde}`).indata.tejptest, t.varde);
  for (const a of ARSTIDER) assert.equal(fraga(`arstid=${a.varde}`).indata.arstid, a.varde);
  for (const a of ANVANDNINGAR) assert.equal(fraga(`bruk=${a.varde}`).indata.anvandning, a.varde);
  for (const s of SYMPTOM) assert.deepEqual(fraga(`se=${s.varde}`).indata.symptom, [s.varde]);
});

test('kronor sätter mellanslag som tusentalsavgränsare', () => {
  assert.equal(kronor(5948), '5 948');
  assert.equal(kronor(120000), '120 000');
  assert.equal(kronor(999), '999');
});
