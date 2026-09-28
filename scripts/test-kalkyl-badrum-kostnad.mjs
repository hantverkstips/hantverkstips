/**
 * Kör badrumsräknaren mot underlagets räkneexempel och specens facit
 * (docs/briefer/spec-kalkyl-badrum-kostnad-2026-09-29.md avsnitt 6). Kronor
 * stämmer exakt, eftersom varje post avrundas för sig.
 *
 * Påståenden om ordalydelsen står som todo tills hantverkaren har skrivit
 * texten (specen 2.8). Talen rörs aldrig.
 *
 * Facit för 4, 5, 6 och 8 kvm och för F4, F4b och F6 räknades om 2026-09-29
 * efter SEO-beslutet (4 till 8 kvm, BS:s 8 000 till 16 000 kr per extra kvm,
 * egen insats rivning och bortforsling). Räknat med node utan modulen, med
 * formeln skriven för hand:
 *   f(yta, k) = yta <= 5 ? yta / 5 : 1 + (yta − 5) · k / 150 600
 *     där 150 600 = BE:s skalande poster vid 5 kvm, (32 + 118 + 16) h · 600
 *     + 48 000 + 3 000 kr, och k = 8 000 (nedre kant) eller 16 000 (övre)
 *   arbete per post = Math.round(timmar · f · timpris), 0 vid egen insats
 *   material per post = Math.round(material · f), fasta poster med f = 1,
 *     containern alltid 5 000
 *   rot = min(Math.round(0,3 · arbete), 50 000 · ägare − använt)
 *   per kvm = under 5 kvm: skalande vid 5 kvm / 5; annars k · skalande vid
 *     5 kvm med läsarens val / 150 600
 * Exempel: node -e "const f=(y,k)=>y<=5?y/5:1+(y-5)*k/150600; …" för varje
 * yta och kant, se rapporten till koordinatorn.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-badrum-kostnad.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  ANTAGANDEN,
  antagandenFor,
  beskedVarden,
  BS_PER_EXTRA_KVM_KR,
  CONTAINER_KR,
  delbarQuery,
  EGEN_VAL,
  INREDNING_KR,
  KALLOR,
  kortsvarVarden,
  krText,
  kvmText,
  NIVA_VAL,
  POSTER,
  raknaBadrumKostnad,
  raknaPoster,
  regelKallor,
  REFERENSYTA_KVM,
  rotavdragQuery,
  spannDelar,
  spannText,
  STANDARD,
  TEXT,
  TIMPRIS_KR,
  tolkaQuery,
  YTA_INTERVALL,
} from '../src/lib/kalkyl/renovering.ts';
import { tolkaQuery as tolkaRotavdrag } from '../src/lib/kalkyl/rotavdrag.ts';

const ROT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MODUL = join(ROT, 'src', 'lib', 'kalkyl', 'renovering.ts');

const TODO_TEXT = { todo: 'text' };

/** Facit med hårt mellanslag mellan siffror, som krText skriver. "till" behåller vanliga mellanslag. */
const nb = (t) => t.replace(/(\d) (?=\d)/g, '$1\u00a0');

/* Fallen i specen 6.1. Resten STANDARD. */
const F1 = { ...STANDARD };
const F2 = { ...STANDARD, agare: 2 };
const F3 = { ...STANDARD, rotKr: 30000 };
const F4 = { ...STANDARD, ytaKvm: 6, timprisKr: 1000 };
const F4b = { ...F4, agare: 2 };
const F5 = { ...STANDARD, niva: 'mellan' };
const F6 = { ...STANDARD, egen: ['rivning', 'bortforsling'] };
const F7 = { ...STANDARD, ytaKvm: 6 };
const F8 = { ...STANDARD, ytaKvm: 4 };
const F8b = { ...STANDARD, ytaKvm: 8 };
const F9 = { ...STANDARD, ytaKvm: 4.5 };
const F10 = { ...STANDARD, ytaKvm: 3.9 };
const F11 = { ...STANDARD, ytaKvm: 9 };
const F13 = { ...STANDARD, timprisKr: 687.5 };

/** Räknar och kräver ett belopp (belopp eller tak). */
function belopp(i) {
  const r = raknaBadrumKostnad(i);
  assert.equal(r.status, 'ok', JSON.stringify(r));
  assert.notEqual(r.utfall, 'utanfor');
  return r;
}
const post = (r, nyckel) => r.poster.find((p) => p.nyckel === nyckel);

/* ------------------------------------------------------------------ *
 * 6.1 Fallen
 * ------------------------------------------------------------------ */

test('F1: standard (tom adress)', () => {
  const r = belopp(tolkaQuery(new URLSearchParams('')).indata);
  assert.equal(r.utfall, 'belopp');
  assert.equal(r.arbeteKr, 118800);
  assert.equal(r.materialKr, 90000);
  assert.equal(r.containerKr, 5000);
  assert.equal(r.foreRotKr, 213800);
  assert.equal(r.rotKr, 35640);
  assert.equal(r.attBetalaKr, 178160);
  assert.equal(r.andelArbeteProcent, 56);
  // Vid 5 kvm är totalerna lika i båda kanterna, men en kvm till är BS:s tillägg.
  assert.equal(r.spann, false);
  assert.equal(r.hog.attBetalaKr, 178160);
  assert.equal(r.perKvmKr, 8000);
  assert.equal(r.hog.perKvmKr, 16000);
});

test('F1b: utan container blir det BE:s egen totalkostnad', () => {
  const r = belopp(F1);
  assert.equal(r.arbeteKr + r.materialKr, 208800);
  assert.equal(r.rotKr, 35640);
  assert.equal(r.foreRotKr - r.containerKr - r.rotKr, 173160);
});

test('F1c: posterna, arbete / material', () => {
  const r = belopp(F1);
  const facit = {
    rivning: [19200, 0],
    'tatskikt-kakel': [70800, 48000],
    vvs: [7200, 6000],
    el: [7200, 8000],
    malning: [9600, 3000],
    inredning: [4800, 25000],
    container: [0, 5000],
  };
  assert.deepEqual(
    r.poster.map((p) => p.nyckel),
    ['rivning', 'tatskikt-kakel', 'vvs', 'el', 'malning', 'inredning', 'container'],
  );
  for (const [nyckel, [arbete, material]] of Object.entries(facit)) {
    assert.equal(post(r, nyckel).arbeteKr, arbete, `${nyckel} arbete`);
    assert.equal(post(r, nyckel).materialKr, material, `${nyckel} material`);
  }
});

test('F2: två ägare, samma rot under en gräns', () => {
  assert.equal(belopp(F2).rotKr, 35640);
});

test('F3: 30 000 redan använt ger tak', () => {
  const r = belopp(F3);
  assert.equal(r.rotKr, 20000);
  assert.equal(r.utfall, 'tak');
  assert.equal(r.kapatKr, 15640);
});

test('F4: 6 kvm och 1 000 kr/h ger tak i båda kanterna', () => {
  const r = belopp(F4);
  assert.equal(r.arbeteKr, 206818);
  assert.equal(r.hog.arbeteKr, 215637);
  assert.equal(r.rotKr, 50000);
  assert.equal(r.hog.rotKr, 50000);
  assert.equal(r.utfall, 'tak');
  assert.equal(r.kapatKr, 12045);
  assert.equal(r.hog.kapatKr, 14691);
});

test('F4b: samma med två ägare, två gränser', () => {
  const r = belopp(F4b);
  assert.equal(r.rotKr, 62045);
  assert.equal(r.hog.rotKr, 64691);
  assert.equal(r.utfall, 'belopp');
});

test('F5: mellannivå', () => {
  const r = belopp(F5);
  assert.equal(r.materialKr, 113000);
  assert.equal(r.foreRotKr, 236800);
  assert.equal(r.attBetalaKr, 201160);
});

test('F6: egen rivning och bortforsling', () => {
  const r = belopp(F6);
  assert.equal(r.arbeteKr, 99600);
  assert.equal(r.rotKr, 29880);
  assert.equal(r.foreRotKr, 194600);
  assert.equal(r.attBetalaKr, 164720);
  assert.equal(r.perKvmKr, 6980);
  assert.equal(r.hog.perKvmKr, 13960);
  for (const nyckel of ['rivning', 'container']) {
    assert.equal(post(r, nyckel).egenInsats, true, nyckel);
    assert.equal(post(r, nyckel).arbeteKr, 0, nyckel);
  }
  assert.equal(post(r, 'rivning').materialKr, 0);
  // Containern står kvar: tipp, släp eller storsäck kostar också (koordinatorn 2026-09-29).
  assert.equal(post(r, 'container').materialKr, 5000);
  assert.equal(r.containerKr, 5000);
  // Monteringen är inte egen insats längre.
  assert.equal(post(r, 'inredning').egenInsats, false);
  assert.equal(post(r, 'inredning').arbeteKr, 4800);
});

test('F6: egen bortforsling ensam ändrar varken summan eller rotavdraget', () => {
  const r = belopp({ ...STANDARD, egen: ['bortforsling'] });
  assert.equal(r.foreRotKr, 213800);
  assert.equal(r.rotKr, 35640);
  assert.equal(r.attBetalaKr, 178160);
});

test('F7: 6 kvm, spann', () => {
  const r = belopp(F7);
  assert.equal(r.spann, true);
  assert.equal(r.arbeteKr, 124091);
  assert.equal(r.materialKr, 92709);
  assert.equal(r.foreRotKr, 221800);
  assert.equal(r.rotKr, 37227);
  assert.equal(r.attBetalaKr, 184573);
  assert.equal(r.hog.arbeteKr, 129382);
  assert.equal(r.hog.materialKr, 95419);
  assert.equal(r.hog.foreRotKr, 229801);
  assert.equal(r.hog.rotKr, 38815);
  assert.equal(r.hog.attBetalaKr, 190986);
  assert.equal(r.perKvmKr, 8000);
  assert.equal(r.hog.perKvmKr, 16000);
});

test('F8: 4 kvm, linjärt nedåt, inget spann', () => {
  const r = belopp(F8);
  assert.equal(r.spann, false);
  assert.equal(r.arbeteKr, 98880);
  assert.equal(r.materialKr, 79800);
  assert.equal(r.foreRotKr, 183680);
  assert.equal(r.rotKr, 29664);
  assert.equal(r.attBetalaKr, 154016);
  assert.equal(r.hog.attBetalaKr, 154016);
  assert.equal(r.perKvmKr, 30120);
  assert.equal(r.hog.perKvmKr, 30120);
});

test('F8b: 8 kvm, spann', () => {
  const r = belopp(F8b);
  assert.equal(r.arbeteKr, 134673);
  assert.equal(r.materialKr, 98127);
  assert.equal(r.foreRotKr, 237800);
  assert.equal(r.rotKr, 40402);
  assert.equal(r.attBetalaKr, 197398);
  assert.equal(r.hog.arbeteKr, 150546);
  assert.equal(r.hog.materialKr, 106255);
  assert.equal(r.hog.foreRotKr, 261801);
  assert.equal(r.hog.rotKr, 45164);
  assert.equal(r.hog.attBetalaKr, 216637);
});

test('F9: 4,5 kvm, tätskikt och kakel', () => {
  const r = belopp(F9);
  assert.equal(post(r, 'tatskikt-kakel').arbeteKr, Math.round(106.2 * 600));
  assert.equal(post(r, 'tatskikt-kakel').arbeteKr, 63720);
  assert.equal(post(r, 'tatskikt-kakel').materialKr, 43200);
});

test('F10: 3,9 kvm är utanför, under', () => {
  const r = raknaBadrumKostnad(F10);
  assert.equal(r.status, 'ok');
  assert.equal(r.utfall, 'utanfor');
  assert.equal(r.sida, 'under');
  assert.equal('foreRotKr' in r, false);
  assert.equal('poster' in r, false);
  assert.deepEqual(r.regler, ['intervall', 'skalning']);
  assert.deepEqual(r.gorInteDetHar, ['tatskikt-sjalv']);
});

test('F11: 9 kvm är utanför, över', () => {
  const r = raknaBadrumKostnad(F11);
  assert.equal(r.utfall, 'utanfor');
  assert.equal(r.sida, 'over');
  assert.equal('foreRotKr' in r, false);
  assert.equal(raknaBadrumKostnad({ ...STANDARD, ytaKvm: 8.1 }).utfall, 'utanfor');
});

test('F12: 4 och 8 kvm är inom (gränserna inräknade)', () => {
  assert.notEqual(raknaBadrumKostnad({ ...STANDARD, ytaKvm: 4 }).utfall, 'utanfor');
  assert.notEqual(raknaBadrumKostnad({ ...STANDARD, ytaKvm: 8 }).utfall, 'utanfor');
});

test('F13: SF:s timpris före rot, 687,5 kr/h', () => {
  assert.equal(belopp(F13).arbeteKr, 136125);
});

/* ------------------------------------------------------------------ *
 * 6.2 Ogiltigt, ett test per rad
 * ------------------------------------------------------------------ */

const felPa = (i) => {
  const r = raknaBadrumKostnad(i);
  assert.equal(r.status, 'ogiltig', JSON.stringify(r));
  return r.fel;
};

for (const [namn, varde] of [
  ['0,5', 0.5],
  ['31', 31],
  ['"abc"', tolkaQuery(new URLSearchParams('yta=abc')).indata.ytaKvm],
  ['tom', tolkaQuery(new URLSearchParams('yta=')).indata.ytaKvm],
]) {
  test(`ogiltig: yta ${namn}`, () => {
    const fel = felPa({ ...STANDARD, ytaKvm: varde });
    assert.deepEqual(Object.keys(fel), ['yta']);
    assert.equal(typeof fel.yta, 'string');
    assert.ok(fel.yta.length > 0);
  });
}

test('ogiltig: agare 3', () => {
  assert.deepEqual(Object.keys(felPa({ ...STANDARD, agare: 3 })), ['agare']);
});

test('ogiltig: rot −1', () => {
  assert.deepEqual(Object.keys(felPa({ ...STANDARD, rotKr: -1 })), ['rot']);
});

test('ogiltig: rot 50 001 med en ägare', () => {
  assert.deepEqual(Object.keys(felPa({ ...STANDARD, rotKr: 50001 })), ['rot']);
});

test('ogiltig: rot 50 001, texten innehåller "50 000"', () => {
  assert.ok(felPa({ ...STANDARD, rotKr: 50001 }).rot.includes(nb('50 000')));
});

test('rot 100 000 med två ägare är ok', () => {
  assert.equal(raknaBadrumKostnad({ ...STANDARD, agare: 2, rotKr: 100000 }).status, 'ok');
});

test('ogiltig: timpris 299', () => {
  assert.deepEqual(Object.keys(felPa({ ...STANDARD, timprisKr: 299 })), ['timpris']);
});

test('ogiltig: timpris 1 501', () => {
  assert.deepEqual(Object.keys(felPa({ ...STANDARD, timprisKr: 1501 })), ['timpris']);
});

test('ogiltig: yta 31 och timpris 2 000 samtidigt ger båda', () => {
  assert.deepEqual(Object.keys(felPa({ ...STANDARD, ytaKvm: 31, timprisKr: 2000 })).sort(), ['timpris', 'yta']);
});

/* ------------------------------------------------------------------ *
 * 6.3 Skalningen mot BS (specen B3)
 * ------------------------------------------------------------------ */

test('skalningen över 5 kvm: BE vid 5 kvm plus BS:s tillägg per extra kvm, på ett par kronor', () => {
  // Avrundningen per post ger högst någon krona per skalande post.
  for (const yta of [5.5, 6, 7, 8]) {
    const r = raknaPoster({ ...STANDARD, ytaKvm: yta });
    assert.ok(Math.abs(r.foreRotKr - (213800 + 8000 * (yta - 5))) <= 3, `${yta} nedre: ${r.foreRotKr}`);
    assert.ok(Math.abs(r.hog.foreRotKr - (213800 + 16000 * (yta - 5))) <= 3, `${yta} övre: ${r.hog.foreRotKr}`);
  }
});

test('skalningen under 5 kvm: linjärt, samma i båda kanterna', () => {
  const r = raknaPoster({ ...STANDARD, ytaKvm: 4.5 });
  assert.equal(r.foreRotKr, r.hog.foreRotKr);
  assert.equal(r.spann, false);
});

/* ------------------------------------------------------------------ *
 * 6.4 Övrigt
 * ------------------------------------------------------------------ */

test('konstanterna mot underlaget', () => {
  assert.equal(TIMPRIS_KR, 600);
  assert.equal(CONTAINER_KR, 5000);
  assert.deepEqual(INREDNING_KR, { enkel: 25000, mellan: 48000 });
  assert.equal(REFERENSYTA_KVM, 5);
  assert.deepEqual([...YTA_INTERVALL], [4, 8]);
  assert.deepEqual([...BS_PER_EXTRA_KVM_KR], [8000, 16000]);
  assert.deepEqual([...EGEN_VAL], ['rivning', 'bortforsling']);
  assert.equal(
    POSTER.reduce((s, p) => s + p.timmarVidRef, 0),
    198,
  );
  const materialEnkel = POSTER.filter((p) => p.nyckel !== 'container').reduce(
    (s, p) => s + (typeof p.materialVidRef === 'number' ? p.materialVidRef : p.materialVidRef.enkel),
    0,
  );
  assert.equal(materialEnkel, 90000);
});

test('rotkonstanterna är importerade, inte kopierade', () => {
  const kalla = readFileSync(MODUL, 'utf8');
  assert.doesNotMatch(kalla, /\b50000\b/);
  assert.doesNotMatch(kalla, /\b50[  ]000\b/);
  assert.doesNotMatch(kalla, /\b0\.30?\b/);
  assert.doesNotMatch(kalla, /\b30\s*\/\s*100\b/);
  assert.doesNotMatch(kalla, /[*·]\s*30\b(?![  ]\d)/);
  assert.doesNotMatch(kalla, /\b30\s*\*/);
  const importen = /import\s*\{([^}]*)\}\s*from\s*'\.\/rotavdrag\.ts'/.exec(kalla);
  assert.ok(importen, 'importen från ./rotavdrag.ts saknas');
  assert.match(importen[1], /\bROT_TAK_KR\b/);
  assert.match(importen[1], /\braknaRotavdrag\b/);
  assert.match(importen[1], /\bROT_PROCENT\b/);
});

test('tolkaQuery: tom adress ger STANDARD och harIndata false', () => {
  const { indata, harIndata } = tolkaQuery(new URLSearchParams(''));
  assert.deepEqual(indata, STANDARD);
  assert.equal(harIndata, false);
});

test('tolkaQuery: "4,5 kvm" tolkas', () => {
  assert.equal(tolkaQuery(new URLSearchParams({ yta: '4,5 kvm' })).indata.ytaKvm, 4.5);
});

test('tolkaQuery: "1 000 kr/h" tolkas, också med hårt mellanslag', () => {
  assert.equal(tolkaQuery(new URLSearchParams({ timpris: '1 000 kr/h' })).indata.timprisKr, 1000);
  assert.equal(tolkaQuery(new URLSearchParams({ timpris: '1 000 kr/h' })).indata.timprisKr, 1000);
  assert.equal(tolkaQuery(new URLSearchParams({ rot: '10 000 kr' })).indata.rotKr, 10000);
  assert.equal(tolkaQuery(new URLSearchParams({ yta: '5 m²' })).indata.ytaKvm, 5);
  assert.equal(tolkaQuery(new URLSearchParams({ yta: '5m2' })).indata.ytaKvm, 5);
});

test('tolkaQuery: niva=lyx ger enkel', () => {
  assert.equal(tolkaQuery(new URLSearchParams('niva=lyx')).indata.niva, 'enkel');
  assert.equal(tolkaQuery(new URLSearchParams('niva=')).indata.niva, 'enkel');
  assert.equal(tolkaQuery(new URLSearchParams('niva=mellan')).indata.niva, 'mellan');
});

test('tolkaQuery: egen=tatskikt och egen=montering ignoreras', () => {
  assert.deepEqual(tolkaQuery(new URLSearchParams('egen=tatskikt')).indata.egen, []);
  assert.deepEqual(tolkaQuery(new URLSearchParams('egen=montering')).indata.egen, []);
  assert.deepEqual(tolkaQuery(new URLSearchParams('egen=')).indata.egen, []);
});

test('tolkaQuery: egen dedupliceras och sorteras i EGEN_VAL:s ordning', () => {
  assert.deepEqual(
    tolkaQuery(new URLSearchParams('egen=bortforsling&egen=rivning&egen=rivning')).indata.egen,
    ['rivning', 'bortforsling'],
  );
});

test('tolkaQuery: agare=3 ger fel, tom agare ger standard', () => {
  const { indata } = tolkaQuery(new URLSearchParams('agare=3'));
  assert.equal(raknaBadrumKostnad(indata).status, 'ogiltig');
  assert.ok('agare' in raknaBadrumKostnad(indata).fel);
  assert.equal(tolkaQuery(new URLSearchParams('agare=')).indata.agare, 1);
  assert.equal(tolkaQuery(new URLSearchParams('agare=2')).indata.agare, 2);
});

test('tolkaQuery: tom rot ger 0 och tom timpris ger 600', () => {
  const { indata, harIndata } = tolkaQuery(new URLSearchParams('rot=&timpris='));
  assert.equal(indata.rotKr, 0);
  assert.equal(indata.timprisKr, 600);
  assert.equal(harIndata, true);
});

test('rundtur: tolkaQuery(delbarQuery(x)) ger samma indata', () => {
  for (const [namn, x] of Object.entries({ STANDARD, F3, F5, F6, F8b, F9, F13 })) {
    const q = new URLSearchParams(delbarQuery(x).toString());
    assert.deepEqual(tolkaQuery(q).indata, x, namn);
  }
});

test('delbarQuery: nycklarna i ordning, talen med komma, rot och timpris alltid med', () => {
  assert.equal(delbarQuery(STANDARD).toString(), 'yta=5&niva=enkel&agare=1&rot=0&timpris=600');
  assert.equal(
    delbarQuery({ ...F9, egen: ['rivning', 'bortforsling'], timprisKr: 687.5 }).toString(),
    'yta=4%2C5&niva=enkel&egen=rivning&egen=bortforsling&agare=1&rot=0&timpris=687%2C5',
  );
});

test('rotavdragQuery(F1) och rotavdragsräknarens tolkning', () => {
  const r = belopp(F1);
  const q = rotavdragQuery(r, F1);
  assert.equal(q.toString(), 'arbete=118800&material=95000&agare=1&rot=0');
  const { indata } = tolkaRotavdrag(new URLSearchParams(q.toString()));
  assert.equal(indata.arbetskostnadKr, 118800);
  assert.equal(indata.materialkostnadKr, 95000);
  assert.equal(indata.antalAgare, 1);
  assert.equal(indata.utnyttjatRotKr, 0);
});

test('rotavdragQuery vid ett spann skickar den övre kanten', () => {
  const r = belopp(F7);
  assert.equal(rotavdragQuery(r, F7).toString(), 'arbete=129382&material=100419&agare=1&rot=0');
});

test('kortsvarVarden', () => {
  const v = kortsvarVarden();
  assert.equal(v.enkel5.attBetala, nb('178 160'));
  assert.equal(v.mellan5.attBetala, nb('201 160'));
  assert.equal(v.enkel4.attBetala, nb('154 016'));
  assert.equal(v.mellan4.attBetala, nb('177 016'));
  assert.equal(v.andelArbete5, 56);
  assert.equal(v.enkel5.foreRot, nb('213 800'));
  assert.equal(v.enkel5.rot, nb('35 640'));
});

test('kvmText: högst två decimaler, inga nollor på slutet', () => {
  assert.equal(kvmText(5), '5');
  assert.equal(kvmText(4.5), '4,5');
  assert.equal(kvmText(3.95), '3,95');
  assert.equal(kvmText(4.125), '4,13');
  assert.equal(kvmText(4.1), '4,1');
  assert.equal(kvmText(6.001), '6');
});

test('beskedVarden: 3,95 kvm visas som 3,95, inte 4', () => {
  const i = { ...STANDARD, ytaKvm: 3.95 };
  assert.equal(beskedVarden(raknaBadrumKostnad(i), i).yta, '3,95');
});

test('regelKallor: ingen regel namnger en förmedlare', () => {
  for (const nyckel of Object.keys(TEXT.regel)) {
    for (const k of regelKallor(nyckel)) assert.notEqual(k.slag, 'förmedlare', `${nyckel}: ${k.kod}`);
  }
  for (const nyckel of ['poster', 'skalning', 'niva', 'intervall']) {
    assert.deepEqual(regelKallor(nyckel), [], nyckel);
  }
  assert.deepEqual(
    regelKallor('container').map((k) => k.kod),
    ['TB', 'SKV-RATT'],
  );
});

test('sidan: källorna under reglerna går genom regelKallor', () => {
  const sida = readFileSync(join(ROT, 'src', 'pages', 'rakna', 'badrum-kostnad.astro'), 'utf8');
  assert.match(sida, /regelKallor\(nyckel\)/);
  assert.doesNotMatch(sida, /regel\.kallor\.map/);
});

/** Ett värde i TEXT är en icke-tom sträng, eller en funktion som ger en. */
function textOk(v, namn) {
  if (typeof v === 'function') {
    const ut = v(beskedVarden(belopp(F1), F1), 1, 2);
    assert.equal(typeof ut, 'string', namn);
    assert.ok(ut.length > 0, namn);
  } else {
    assert.equal(typeof v, 'string', namn);
    assert.ok(v.length > 0, namn);
  }
}

test('TEXT: varje nyckel har en icke-tom sträng', () => {
  for (const u of ['belopp', 'tak', 'utanfor']) {
    textOk(TEXT.besked[u].rubrik, `besked.${u}.rubrik`);
    textOk(TEXT.besked[u].rad, `besked.${u}.rad`);
  }
  for (const g of ['tatskikt-sjalv', 'rot-pa-allt', 'riva-sjalv']) textOk(TEXT.gorInte[g], `gorInte.${g}`);
  for (const n of [
    'poster',
    'skalning',
    'niva',
    'container',
    'stad',
    'rot-arbete',
    'rot-tak',
    'rot-slog-i',
    'egen-insats',
    'intervall',
  ]) {
    textOk(TEXT.regel[n].text, `regel.${n}`);
    assert.ok(TEXT.regel[n].kallor.length > 0, `regel.${n}.kallor`);
    for (const k of TEXT.regel[n].kallor) assert.ok(k in KALLOR, `regel.${n}: ${k}`);
  }
  for (const p of POSTER) textOk(TEXT.post[p.nyckel], `post.${p.nyckel}`);
  for (const n of NIVA_VAL) textOk(TEXT.niva[n], `niva.${n}`);
  for (const e of EGEN_VAL) textOk(TEXT.egen[e], `egen.${e}`);
  for (const a of ANTAGANDEN) textOk(TEXT.antagande[a.nyckel], `antagande.${a.nyckel}`);
  for (const [k, v] of Object.entries(TEXT.form)) textOk(v, `form.${k}`);
  for (const [k, v] of Object.entries(TEXT.spalt)) textOk(v, `spalt.${k}`);
  for (const [k, v] of Object.entries(TEXT.darfor)) textOk(v, `darfor.${k}`);
  for (const [k, v] of Object.entries(TEXT.fel)) textOk(v, `fel.${k}`);
  textOk(TEXT.postEgen, 'postEgen');
  textOk(TEXT.postAntagande, 'postAntagande');
  assert.ok(TEXT.steg.length > 0);
  for (const s of TEXT.steg) textOk(s, 'steg');
  const ks = TEXT.kortsvar(kortsvarVarden());
  textOk(ks.fore, 'kortsvar.fore');
  textOk(ks.markering, 'kortsvar.markering');
});

test('TEXT: rubriken för F1 och F4 bär attBetala', () => {
  for (const i of [F1, F4]) {
    const r = belopp(i);
    const v = beskedVarden(r, i);
    assert.ok(TEXT.besked[r.utfall].rubrik(v).includes(v.attBetala), JSON.stringify(i));
  }
});

test("TEXT: spalt['rad-kallor'] bär datumet", () => {
  assert.match(TEXT.spalt['rad-kallor'](kortsvarVarden().hamtat), /2026/);
});

test('antagandenFor', () => {
  const nycklar = (i) => {
    const r = raknaBadrumKostnad(i);
    assert.equal(r.status, 'ok');
    return antagandenFor(r, i).map((a) => a.nyckel);
  };
  const f1 = nycklar(F1);
  for (const n of ['container', 'stad', 'timpris', 'intervall', 'rivning-rot']) assert.ok(f1.includes(n), `F1 ${n}`);
  assert.ok(!f1.includes('eget-timpris'));
  const f13 = nycklar(F13);
  assert.ok(f13.includes('eget-timpris'));
  assert.ok(!f13.includes('timpris'));
  assert.ok(!nycklar(F6).includes('rivning-rot'));
  const f10 = nycklar(F10);
  assert.ok(f10.includes('skalning') && f10.includes('intervall'));
  assert.ok(!f10.some((n) => n.startsWith('post-')));
  // I ANTAGANDEN:s ordning.
  const ordning = ANTAGANDEN.map((a) => a.nyckel);
  assert.deepEqual(
    f1,
    ordning.filter((n) => f1.includes(n)),
  );
  // Inredningen pekar på den källa som gäller nivån.
  const inredning = (i) => antagandenFor(belopp(i), i).find((a) => a.nyckel === 'post-inredning');
  assert.deepEqual(inredning(F1).kallor, ['BE']);
  assert.deepEqual(inredning(F5).kallor, ['BS']);
  assert.equal(inredning(F5).varde, nb('8 h, 48 000 kr'));
  // Delningen per post är egen räkning ur källan (SEO-beslutet 2026-09-29).
  assert.equal(ANTAGANDEN.find((a) => a.nyckel === 'andel-arbete').typ, 'Antagande');
  assert.equal(ANTAGANDEN.find((a) => a.nyckel === 'skalning').typ, 'Antagande');
  assert.equal(ANTAGANDEN.find((a) => a.nyckel === 'intervall').varde(STANDARD), '4 till 8 kvm');
});

test('ANTAGANDEN och POSTER: källorna finns och Källa-rader har https', () => {
  for (const a of ANTAGANDEN) {
    for (const k of a.kallor) assert.ok(k in KALLOR, `${a.nyckel}: ${k}`);
    if (a.typ === 'Källa') {
      assert.ok(
        a.kallor.some((k) => KALLOR[k].url.startsWith('https://')),
        `${a.nyckel} saknar källa med https`,
      );
    }
    assert.equal(typeof a.varde(STANDARD), 'string');
  }
  for (const p of POSTER) {
    assert.ok(p.kallor.length > 0, p.nyckel);
    for (const k of p.kallor) assert.ok(k in KALLOR, `${p.nyckel}: ${k}`);
  }
  for (const k of Object.values(KALLOR)) assert.ok(k.url.startsWith('https://'), k.kod);
  assert.deepEqual(
    POSTER.filter((p) => p.antagande).map((p) => p.nyckel),
    ['container'],
  );
});

test('gorInteDetHar och regler', () => {
  assert.deepEqual(belopp(F1).gorInteDetHar, ['tatskikt-sjalv', 'rot-pa-allt']);
  assert.deepEqual(belopp(F6).gorInteDetHar, ['tatskikt-sjalv', 'rot-pa-allt', 'riva-sjalv']);
  assert.ok(belopp(F3).regler.includes('rot-slog-i'));
  assert.ok(!belopp(F1).regler.includes('rot-slog-i'));
  assert.deepEqual(belopp(F1).regler, ['poster', 'skalning', 'niva', 'container', 'stad', 'rot-arbete', 'rot-tak']);
  assert.deepEqual(belopp(F6).regler.at(-1), 'egen-insats');
});

test('beskedVarden: formaterade tal och intervallet', () => {
  const v = beskedVarden(belopp(F1), F1);
  assert.equal(v.attBetala, nb('178 160'));
  assert.equal(v.foreRot, nb('213 800'));
  assert.equal(v.rot, nb('35 640'));
  assert.equal(v.min, '4');
  assert.equal(v.max, '8');
  assert.equal(v.perKvm, nb('8 000 till 16 000'));
  const s = beskedVarden(belopp(F7), F7);
  assert.equal(s.attBetala, nb('184 573 till 190 986'));
  assert.equal(s.foreRot, nb('221 800 till 229 801'));
  assert.equal(s.rot, nb('37 227 till 38 815'));
  assert.equal(s.container, nb('5 000'));
  assert.equal(s.perKvm, nb('8 000 till 16 000'));
  assert.equal(beskedVarden(belopp(F8), F8).perKvm, nb('30 120'));
  const u = beskedVarden(raknaBadrumKostnad(F10), F10);
  assert.equal(u.yta, '3,9');
  assert.equal(u.sida, 'under');
  assert.equal(u.attBetala, null);
});

/* ------------------------------------------------------------------ *
 * Retur 2026-09-29: tal bryts aldrig mitt i, BS-tillägget, kapatMax
 * ------------------------------------------------------------------ */

const NBSP = String.fromCharCode(160);
/** Ett vanligt mellanslag mellan två siffror, alltså ett tal som kan brytas mitt i. */
const brytsMittI = /\d \d/;

test('krText: hårt mellanslag som tusentalsavgränsare', () => {
  assert.equal(krText(258596), `258${NBSP}596`);
  assert.equal(krText(1234567), `1${NBSP}234${NBSP}567`);
  assert.equal(krText(600), '600');
});

test('spannText: hårda mellanslag i talen, vanliga runt "till"', () => {
  assert.equal(spannText(258596, 274691), `258${NBSP}596 till 274${NBSP}691`);
  assert.equal(spannText(258596, 274691), nb('258 596 till 274 691'));
  assert.equal(spannText(274691, 258596), nb('258 596 till 274 691'));
  assert.equal(spannText(5000, 5000), nb('5 000'));
});

test('spannDelar: två delar, hog null när kanterna är lika', () => {
  assert.deepEqual(spannDelar(107305, 97902), { lag: nb('97 902'), hog: nb('107 305') });
  assert.deepEqual(spannDelar(5000, 5000), { lag: nb('5 000'), hog: null });
});

test('beskedVarden yta 7: inget kronbelopp kan brytas mitt i ett tal', () => {
  const i = { ...STANDARD, ytaKvm: 7 };
  const v = beskedVarden(belopp(i), i);
  for (const nyckel of ['attBetala', 'foreRot', 'rot', 'kapat', 'kapatMax', 'arbete', 'material', 'container', 'perKvm']) {
    assert.equal(typeof v[nyckel], 'string', nyckel);
    assert.doesNotMatch(v[nyckel], brytsMittI, `${nyckel}: ${v[nyckel]}`);
  }
});

test('kortsvarVarden och antagandetabellen: inga tal som bryts mitt i', () => {
  for (const b of Object.values(kortsvarVarden()).filter((x) => typeof x === 'object')) {
    for (const t of Object.values(b)) assert.doesNotMatch(t, brytsMittI, t);
  }
  for (const i of [STANDARD, { ...STANDARD, ytaKvm: 7, niva: 'mellan' }, F13]) {
    for (const a of antagandenFor(raknaBadrumKostnad(i), i)) assert.doesNotMatch(a.varde, brytsMittI, a.nyckel);
  }
});

test('antagandenFor: BS-tillägget bara över 5 kvm', () => {
  const nycklar = (i) => antagandenFor(raknaBadrumKostnad(i), i).map((a) => a.nyckel);
  const sju = nycklar({ ...STANDARD, ytaKvm: 7 });
  assert.ok(sju.includes('bs-tillagg') && sju.includes('bs-fordelning'));
  assert.equal(sju.indexOf('bs-tillagg'), sju.indexOf('skalning') + 1);
  assert.equal(sju.indexOf('bs-fordelning'), sju.indexOf('bs-tillagg') + 1);
  for (const yta of [5, 4.5]) {
    const n = nycklar({ ...STANDARD, ytaKvm: yta });
    assert.ok(!n.includes('bs-tillagg') && !n.includes('bs-fordelning'), String(yta));
  }
  const i = { ...STANDARD, ytaKvm: 7 };
  const rad = antagandenFor(raknaBadrumKostnad(i), i).find((a) => a.nyckel === 'bs-tillagg');
  assert.equal(rad.varde, nb('8 000 till 16 000 kr per kvm över 5 kvm'));
  assert.equal(rad.typ, 'Källa');
  assert.deepEqual(rad.kallor, ['BS']);
  const ford = antagandenFor(raknaBadrumKostnad(i), i).find((a) => a.nyckel === 'bs-fordelning');
  assert.equal(ford.typ, 'Antagande');
  assert.deepEqual(ford.kallor, ['BE', 'BS']);
});

test('beskedVarden: kapatMax är den övre kanten, null vid utanför', () => {
  const i = { ...STANDARD, ytaKvm: 7 };
  const r = belopp(i);
  assert.equal(beskedVarden(r, i).kapatMax, krText(r.hog.kapatKr));
  assert.equal(beskedVarden(raknaBadrumKostnad(F10), F10).kapatMax, null);
});

test('sidan: posttabellens celler bryts före "till", aldrig inne i ett tal', () => {
  const sida = readFileSync(join(ROT, 'src', 'pages', 'rakna', 'badrum-kostnad.astro'), 'utf8');
  assert.doesNotMatch(sida, /\[&_td\]:whitespace-nowrap/);
  assert.match(sida, /\[&_td_span\]:whitespace-nowrap/);
  assert.match(sida, /<span>till \{c\.hog\}<\/span>/);
});
