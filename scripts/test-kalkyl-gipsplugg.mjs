/**
 * Kör pluggväljaren mot viktabellen i src/content/guider/inomhus/skruva-i-gipsvagg.mdx
 * och krokstabellen i src/content/guider/inomhus/hanga-tavla-gipsvagg.mdx, som i
 * sin tur vilar på docs/briefer/underlag-skruva-i-gipsvagg-2026-09-16.md. Samma
 * tal ska komma ur verktyget som står i artiklarna, annars säger sajten två
 * saker på en gång. Gränsen på 20 kg är klustrets gemensamma, fastställd i
 * docs/INNEHALLSARKITEKTUR.md avsnitt 2.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-gipsplugg.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  barandePunkter,
  GRANS_REGEL_KG,
  GRANSER,
  INFASTNINGAR,
  infastningarFor,
  lastPerPunkt,
  MAXLAST_AVSTAND_MM,
  MIN_AVSTAND_MM,
  NORGIPS_SKIVAN_KG,
  raknaGipsplugg,
  STANDARD,
  SVANGARM_FAKTOR,
  SVAR_RUBRIK,
  TAK_MAX_KG,
  tolkaQuery,
  XKROK_KG,
} from '../src/lib/kalkyl/gipsplugg.ts';

/** Standardfallet med ett eller flera fält utbytta. */
function fall(andringar = {}) {
  return { ...STANDARD, ...andringar };
}

/** Kapaciteten för en infästning i en skiva, som den står i modulen. */
function varde(id, skiva) {
  const inf = INFASTNINGAR.find((r) => r.id === id);
  assert.ok(inf, `infästningen ${id} finns i modulen`);
  return inf.kg[skiva];
}

test('tillverkarvärdena är artiklarnas', () => {
  /* Viktabellen i /inomhus/skruva-i-gipsvagg/, ett och två lag 12,5 mm. */
  assert.equal(varde('sjalvborrande', 'ett-lag'), 8); // fischer GK och GKM
  assert.equal(varde('sjalvborrande', 'tva-lag'), null); // fischer anger inget
  assert.equal(varde('sjalvborrande', 'tunn'), 7); // fischer, 9,5 mm
  assert.equal(varde('duoblade', 'ett-lag'), 10); // fischer DuoBlade
  assert.equal(varde('duoblade', 'tva-lag'), 20);
  assert.equal(varde('duoblade', 'tunn'), 8);
  assert.equal(varde('clips', 'ett-lag'), 10); // Essve Arrow Anchor via Gör Det Själv
  assert.equal(varde('clips', 'tva-lag'), 15);
  assert.equal(varde('halrumsplugg', 'ett-lag'), 18);
  assert.equal(varde('halrumsplugg', 'tva-lag'), 28);
  assert.equal(varde('gipsankare', 'ett-lag'), 25); // Duck Foot
  assert.equal(varde('gipsankare', 'tva-lag'), 40);
  assert.equal(varde('molly', 'ett-lag'), 38);
  assert.equal(varde('molly', 'tva-lag'), 70);
  assert.equal(varde('vipplugg', 'tva-lag'), 25); // bara tak

  /* Krokstabellen i /inomhus/hanga-tavla-gipsvagg/. */
  assert.equal(varde('xkrok', 'ett-lag'), 5); // BGA
  assert.equal(varde('klisterremsa', 'ett-lag'), 7); // 3M Command, 60 × 90 cm
  assert.equal(varde('klokrok', 'ett-lag'), 7); // 3M Claw
  assert.equal(varde('gipskrok', 'ett-lag'), 20); // Habo

  /* Norgips och klustrets gemensamma tal. */
  assert.equal(GRANS_REGEL_KG, 20);
  assert.equal(NORGIPS_SKIVAN_KG, 6);
  assert.equal(MIN_AVSTAND_MM, 50);
  assert.equal(MAXLAST_AVSTAND_MM, 300);
  assert.equal(TAK_MAX_KG, 20);
  assert.equal(XKROK_KG, 5);
  assert.equal(SVANGARM_FAKTOR, 1.5);

  /* Varje rad bär en källa med en presentation och en länk. */
  for (const inf of INFASTNINGAR) {
    assert.ok(inf.kalla.length > 4, `${inf.id} har en källa`);
    assert.match(inf.kallaUrl, /^https:\/\//, `${inf.id} har en länk`);
    assert.ok(Object.values(inf.kg).some((v) => v !== null), `${inf.id} har minst ett värde`);
  }

  /* Standardfallet är hyllan i en vanlig vägg. */
  assert.deepEqual(STANDARD, { viktKg: 8, sak: 'hylla', skiva: 'ett-lag', punkter: 2, regel: 'vet-inte' });
});

/** Tolv fall, ett per gren. Beskedet i kommentaren är det som ska stå i stort format. */
const FALL = [
  {
    namn: 'Tavla på 4 kg i två krokar, alltså 2 kg per punkt',
    indata: fall({ viktKg: 4, sak: 'tavla', regel: 'nej' }),
    svar: 'krok',
    last: 2,
    barande: 2,
  },
  {
    namn: 'Standardfallet, hylla på 8 kg i två punkter utan känd regel',
    indata: fall(),
    svar: 'plugg',
    last: 8,
    barande: 1,
    forsta: 'Självborrande gipsplugg',
  },
  {
    namn: 'Samma hylla, men med en regel bakom',
    indata: fall({ regel: 'ja' }),
    svar: 'regel',
    last: 8,
    barande: 1,
  },
  {
    namn: 'Hylla på 25 kg, över gränsen på 20 kg, regeln okänd',
    indata: fall({ viktKg: 25, punkter: 4 }),
    svar: 'regel',
    last: 12.5,
    barande: 2,
  },
  {
    namn: 'Hylla på 25 kg utan regel bakom',
    indata: fall({ viktKg: 25, punkter: 4, regel: 'nej' }),
    svar: 'kortling',
    last: 12.5,
    barande: 2,
  },
  {
    namn: 'Tv på 15 kg på fast fäste i fyra punkter',
    indata: fall({ viktKg: 15, sak: 'tv-fast', punkter: 4, regel: 'nej' }),
    svar: 'plugg',
    last: 3.8,
    barande: 4,
    forsta: 'Självborrande gipsplugg',
  },
  {
    namn: 'Samma tv på svängarm, med regel bakom',
    indata: fall({ viktKg: 15, sak: 'tv-svangarm', punkter: 4, regel: 'ja' }),
    svar: 'regel',
    last: 11.3,
    barande: 2,
  },
  {
    namn: 'Badrumsskåp på 18 kg i fyra punkter utan regel',
    indata: fall({ viktKg: 18, sak: 'skap', punkter: 4, regel: 'nej' }),
    svar: 'kortling',
    last: 9,
    barande: 2,
  },
  {
    namn: 'Handdukshängare på 6 kg i två skruvar',
    indata: fall({ viktKg: 6, sak: 'krok', regel: 'nej' }),
    svar: 'plugg',
    last: 3,
    barande: 2,
    forsta: 'Självborrande gipsplugg',
  },
  {
    namn: 'Lampa på 3 kg i tak med två lag gips',
    indata: fall({ viktKg: 3, sak: 'tak', skiva: 'tva-lag', punkter: 1, regel: 'nej' }),
    svar: 'plugg',
    last: 3,
    barande: 1,
    forsta: 'Självborrande med utvikande blad',
  },
  {
    namn: 'Hylla på 12 kg i den tunna skivan, där ingen infästning räcker',
    indata: fall({ viktKg: 12, skiva: 'tunn', regel: 'nej' }),
    svar: 'kortling',
    last: 12,
    barande: 1,
  },
  {
    namn: 'Spegel på 14 kg i två punkter, tyngre än en X-krok men lättare än gränsen',
    indata: fall({ viktKg: 14, sak: 'tavla', punkter: 2, regel: 'nej' }),
    svar: 'plugg',
    last: 7,
    barande: 2,
    forsta: 'Inslagen klokrok',
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaGipsplugg(f.indata);
    assert.equal(r.status, 'ok');
    assert.equal(r.svar, f.svar, 'beskedet');
    assert.equal(r.svarRubrik, SVAR_RUBRIK[f.svar], 'rubriken över beskedet');
    assert.equal(r.lastPerPunktKg, f.last, 'lasten per punkt');
    assert.equal(r.barandePunkter, f.barande, 'punkter som bär');
    assert.ok(r.svarText.length > 40, 'beskedet har en förklaring');
    assert.ok(r.lastText.length > 20, 'lasten per punkt är förklarad');
    if (f.forsta) {
      const forsta = r.infastningar.find((rad) => rad.klarar);
      assert.ok(forsta, 'någon infästning klarar lasten');
      assert.equal(forsta.namn, f.forsta, 'enklaste infästningen som klarar lasten');
    }
    /* Varje rad i tabellen bär ett tal och en källa. Tom rad är ett fel.
       Klisterremsan prövas mot hela vikten, alla andra mot lasten per punkt. */
    for (const rad of r.infastningar) {
      assert.equal(typeof rad.kapacitetKg, 'number', `${rad.id} har ett tal`);
      assert.ok(rad.kalla.length > 4, `${rad.id} har en källa`);
      const mot = rad.id === 'klisterremsa' ? f.indata.viktKg : r.lastPerPunktKg;
      assert.equal(rad.klarar, rad.kapacitetKg >= mot, `${rad.id} jämförs mot rätt last`);
    }
    assert.equal(
      r.ingenKlarar,
      !r.infastningar.some((rad) => rad.klarar),
      'flaggan för att ingen infästning räcker',
    );
    console.log(
      `${f.namn}\n  ${r.svarRubrik}, ${r.lastPerPunktKg} kg per punkt på ${r.barandePunkter} punkt(er), ` +
        `${r.infastningar.filter((rad) => rad.klarar).length} av ${r.infastningar.length} infästningar räcker`,
    );
  });
}

test('gränsen på 20 kg går vid 20, inte vid 21', () => {
  /* Klustrets tal: över 20 kg ska det i regel eller kortling. */
  assert.equal(raknaGipsplugg(fall({ viktKg: 20, punkter: 4, regel: 'nej' })).kraverRegel, false);
  assert.equal(raknaGipsplugg(fall({ viktKg: 20.1, punkter: 4, regel: 'nej' })).kraverRegel, true);
  assert.equal(raknaGipsplugg(fall({ viktKg: 20.1, punkter: 4, regel: 'nej' })).svar, 'kortling');
  assert.equal(raknaGipsplugg(fall({ viktKg: 20.1, punkter: 4, regel: 'ja' })).svar, 'regel');
});

test('svängarm och skåp går till regel eller kortling oavsett vikt', () => {
  /* docs/INNEHALLSARKITEKTUR.md avsnitt 2: lägre gräns när lasten sitter på en
     arm eller skiftar. Vi sätter ingen gräns alls för de två. */
  const arm = raknaGipsplugg(fall({ viktKg: 4, sak: 'tv-svangarm', punkter: 4, regel: 'nej' }));
  assert.equal(arm.kraverRegel, true);
  assert.equal(arm.svar, 'kortling');
  assert.match(arm.kraverRegelSkal, /arm/);

  const skap = raknaGipsplugg(fall({ viktKg: 5, sak: 'skap', punkter: 4, regel: 'ja' }));
  assert.equal(skap.kraverRegel, true);
  assert.equal(skap.svar, 'regel');
  assert.match(skap.kraverRegelSkal, /lucka/);
});

test('hävarmen och den övre raden räknas som modulen säger', () => {
  /* Svängarm: hela vikten gånger 1,5 på de övre punkterna. */
  assert.equal(barandePunkter('tv-svangarm', 4), 2);
  assert.equal(lastPerPunkt({ ...STANDARD, viktKg: 20, sak: 'tv-svangarm', punkter: 4 }), 15);
  /* Skåp och hylla: hela vikten på de övre punkterna, ingen faktor. */
  assert.equal(barandePunkter('skap', 4), 2);
  assert.equal(lastPerPunkt({ ...STANDARD, viktKg: 18, sak: 'skap', punkter: 4 }), 9);
  assert.equal(lastPerPunkt({ ...STANDARD, viktKg: 25, sak: 'hylla', punkter: 4 }), 12.5);
  /* Tavla, tv på fast fäste och krok delar jämnt på alla punkter. */
  assert.equal(barandePunkter('tavla', 2), 2);
  assert.equal(lastPerPunkt({ ...STANDARD, viktKg: 8, sak: 'tv-fast', punkter: 4 }), 2);
  /* En enda punkt bär allt, även när den övre raden ska bära. */
  assert.equal(barandePunkter('hylla', 1), 1);
});

test('taket kapar varje tillverkarvärde vid 20 kg per fästpunkt', () => {
  /* Norgips: högst cirka 20 kg per fästpunkt vid infästning direkt i skivorna. */
  const rader = infastningarFor({ ...STANDARD, sak: 'tak', skiva: 'tva-lag', punkter: 1 }, 3);
  assert.ok(rader.length >= 4, 'flera infästningar gäller i tak');
  for (const rad of rader) assert.ok(rad.kapacitetKg <= TAK_MAX_KG, `${rad.id} kapas vid takets gräns`);
  /* Mollyn står med 70 kg i väggen och med 20 kg i taket. */
  assert.equal(rader.find((r) => r.id === 'molly').kapacitetKg, 20);
  assert.equal(
    infastningarFor({ ...STANDARD, sak: 'hylla', skiva: 'tva-lag' }, 3).find((r) => r.id === 'molly').kapacitetKg,
    70,
  );
  /* Krokar och stift finns inte i tak, och vippluggen finns bara där. */
  assert.equal(rader.some((r) => r.id === 'xkrok'), false);
  assert.equal(rader.some((r) => r.id === 'vipplugg'), true);
  assert.equal(
    infastningarFor({ ...STANDARD, sak: 'tavla', skiva: 'tva-lag' }, 3).some((r) => r.id === 'vipplugg'),
    false,
  );
});

test('krokarna gäller bara tavlan, och raden säger vad som utelämnats', () => {
  const tavla = infastningarFor({ ...STANDARD, sak: 'tavla' }, 3);
  assert.ok(tavla.some((r) => r.id === 'xkrok'));
  assert.ok(tavla.some((r) => r.id === 'gipskrok'));

  const hylla = raknaGipsplugg(fall({ regel: 'nej' }));
  assert.equal(hylla.infastningar.some((r) => r.id === 'xkrok'), false);
  assert.match(hylla.utelamnade, /X-krokar/);

  /* Den tunna skivan saknar värden för de starka pluggarna, och det står. */
  const tunn = raknaGipsplugg(fall({ skiva: 'tunn', regel: 'nej' }));
  assert.equal(tunn.infastningar.some((r) => r.id === 'molly'), false);
  assert.match(tunn.utelamnade, /tunna skivan/);

  /* Två lag saknar värde för den självborrande pluggen. */
  const tva = raknaGipsplugg(fall({ skiva: 'tva-lag', regel: 'nej' }));
  assert.equal(tva.infastningar.some((r) => r.id === 'sjalvborrande'), false);
  assert.match(tva.utelamnade, /ø 8 mm/);
});

test('klisterremsans tal gäller hela tavlan, inte en punkt', () => {
  /* 3M anger vikten per tavla. Två remsor gör inte 14 kg av en sjukilosremsa. */
  const latt = raknaGipsplugg(fall({ viktKg: 6, sak: 'tavla', punkter: 2, regel: 'nej' }));
  assert.equal(latt.infastningar.find((r) => r.id === 'klisterremsa').klarar, true);
  const tung = raknaGipsplugg(fall({ viktKg: 14, sak: 'tavla', punkter: 2, regel: 'nej' }));
  assert.equal(tung.lastPerPunktKg, 7);
  assert.equal(tung.infastningar.find((r) => r.id === 'klisterremsa').klarar, false);
  /* X-kroken är per krok och klarar därför sju kilo fördelat på två. */
  assert.equal(tung.infastningar.find((r) => r.id === 'klokrok').klarar, true);
});

test('råden "gör inte det här" följer fallet', () => {
  const arm = raknaGipsplugg(fall({ viktKg: 15, sak: 'tv-svangarm', punkter: 4, regel: 'nej' }));
  assert.ok(arm.gorInteDetHar.some((rad) => rad.includes('svängarm')), 'plugg för svängarm');

  const tak = raknaGipsplugg(fall({ viktKg: 3, sak: 'tak', skiva: 'tva-lag', punkter: 1, regel: 'nej' }));
  assert.ok(tak.gorInteDetHar.some((rad) => rad.includes('X-krok')), 'X-krok i tak');

  const tva = raknaGipsplugg(fall({ regel: 'nej' }));
  assert.ok(tva.gorInteDetHar.some((rad) => rad.includes('50 mm')), 'två infästningar för tätt');

  const en = raknaGipsplugg(fall({ viktKg: 9, punkter: 1, regel: 'nej' }));
  assert.ok(en.gorInteDetHar.some((rad) => rad.includes('en enda punkt')), 'allt i en punkt');
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaGipsplugg(fall({ viktKg: 0, punkter: 0 }));
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.viktKg, /vikten/);
  assert.match(r.fel.punkter, /infästningspunkter/);

  assert.equal(raknaGipsplugg(fall({ viktKg: NaN })).status, 'ogiltig');
  assert.equal(raknaGipsplugg(fall({ punkter: 2.5 })).status, 'ogiltig');
  assert.equal(raknaGipsplugg(fall({ viktKg: 201 })).status, 'ogiltig');
  assert.deepEqual([...GRANSER.punkter], [1, 12]);
  assert.equal(raknaGipsplugg(STANDARD).status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(new URLSearchParams('vikt=12,5&sak=tv-svangarm&skiva=tva-lag&punkter=4&regel=nej'));
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    viktKg: 12.5,
    sak: 'tv-svangarm',
    skiva: 'tva-lag',
    punkter: 4,
    regel: 'nej',
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Skräp i ett val faller tillbaka på standardvärdet, inte på ett fel. */
  assert.equal(tolkaQuery(new URLSearchParams('sak=akvarium')).indata.sak, 'hylla');
  assert.equal(tolkaQuery(new URLSearchParams('skiva=20mm')).indata.skiva, 'ett-lag');
  assert.equal(tolkaQuery(new URLSearchParams('regel=kanske')).indata.regel, 'vet-inte');
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('vikt=tungt')).indata.viktKg));
});
