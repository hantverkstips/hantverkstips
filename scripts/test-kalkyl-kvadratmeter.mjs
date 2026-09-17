/**
 * Kör kvadratmeter- och åtgångsräknaren mot underlaget
 * docs/briefer/underlag-kalkyl-kvadratmeter-2026-09-17.md, som samlar Alcros,
 * Beckers, Nordsjös, Boråstapeters, Kährs och Kakelgigantens tal med källa per
 * rad. Samma tal ska komma ut ur formeln som står i underlagets tabeller,
 * annars säger sajten två saker på en gång.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-kvadratmeter.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  BURKAR_LITER,
  bastaBurkar,
  DORR_BREDD_M,
  DORR_HOJD_M,
  FARG_KVM_PER_LITER,
  FONSTER_BREDD_M,
  FONSTER_HOJD_M,
  GRANSER,
  GRUNDFARG_KVM_PER_LITER,
  OVERSKOTT_GRANS,
  raknaKvadratmeter,
  SPILL_GOLV,
  SPILL_KLINKER,
  STANDARD,
  TAKFARG_KVM_PER_LITER,
  TAPET_PASLAG_M,
  TAPET_RAPPORT_M,
  TAPETRULLE_BREDD_M,
  TAPETRULLE_LANGD_M,
  tolkaQuery,
} from '../src/lib/kalkyl/kvadratmeter.ts';

const TOLERANS = 0.01;

function naraNog(fick, vantat, vad, tolerans = TOLERANS) {
  assert.ok(Math.abs(fick - vantat) <= tolerans, `${vad}: fick ${fick}, väntade ${vantat} plus minus ${tolerans}`);
}

test('konstanterna är underlagets', () => {
  /* Beckers Scotte 7 anger 8 till 10 m²/l, Nordsjö Ambiance 8 till 10, Alcro
     Milltex 7 anger 8. Vi räknar med den nedre kanten. */
  assert.equal(FARG_KVM_PER_LITER, 8);
  /* Beckers Scotte R2 Takfärg och Alcro Milltex 2 RF anger båda 8 m²/l. */
  assert.equal(TAKFARG_KVM_PER_LITER, 8);
  /* Beckers Scotte Grund anger 6 till 8 m²/l, alltså mindre än täckfärgen. */
  assert.equal(GRUNDFARG_KVM_PER_LITER, 7);
  assert.ok(GRUNDFARG_KVM_PER_LITER < FARG_KVM_PER_LITER, 'grundmålning drar mer än täckfärg');
  assert.deepEqual([...BURKAR_LITER], [1, 2.5, 10]);

  /* Boråstapeter: rullbredd 53 cm, rullängd 10,05 m. */
  assert.equal(TAPETRULLE_BREDD_M, 0.53);
  assert.equal(TAPETRULLE_LANGD_M, 10.05);
  assert.equal(TAPET_PASLAG_M, 0.1);
  assert.equal(TAPET_RAPPORT_M, 0.53);

  /* Kährs och Pergo för trägolvet, Kakelgiganten för plattorna. */
  assert.deepEqual(SPILL_GOLV, { rak: 0.05, diagonal: 0.1 });
  assert.deepEqual(SPILL_KLINKER, { rak: 0.1, diagonal: 0.15 });

  /* Swedoor, modul 9x21, öppningsmått 910 × 2110 mm, avrundat till modulmåttet. */
  assert.equal(DORR_BREDD_M, 0.9);
  assert.equal(DORR_HOJD_M, 2.1);
  /* Elitfönsters modulsystem, modul 12x12. Antagande att det är typiskt. */
  assert.equal(FONSTER_BREDD_M, 1.2);
  assert.equal(FONSTER_HOJD_M, 1.2);

  assert.equal(STANDARD.langdM, 4);
  assert.equal(STANDARD.breddM, 3);
  assert.equal(STANDARD.takhojdM, 2.5);
  assert.equal(STANDARD.dorrar, 1);
  assert.equal(STANDARD.fonster, 1);
  assert.equal(STANDARD.strykningar, 2);
});

/**
 * Tolv fall. Det första är räkneexemplet i underlagets avsnitt 6, och de övriga
 * byter ett val i taget: material, strykningar, läggning, mått och antal.
 */
const FALL = [
  {
    namn: 'Rummet 4 × 3 m med en dörr och ett fönster, bara kvadratmeter',
    indata: STANDARD,
    golvKvm: 12,
    takKvm: 12,
    omkretsM: 14,
    vaggarBruttoKvm: 35,
    avdragDorrKvm: 1.89,
    avdragFonsterKvm: 1.44,
    vaggarNettoKvm: 31.67,
    valdKvm: 55.67,
    rad: 0,
  },
  {
    namn: 'Samma rum, väggarna målas med två strykningar',
    indata: { ...STANDARD, material: 'vaggfarg', raknar: 'vaggar' },
    golvKvm: 12,
    vaggarNettoKvm: 31.67,
    valdKvm: 31.67,
    /* 31,67 kvm gånger två strykningar delat på 8 kvm per liter. */
    fargLiter: 7.92,
    /* Färst burkar vinner: en burk om tio liter, inte fyra mindre. */
    fargLiterAttKopa: 10,
    fargBurkar: [{ literPerBurk: 10, antal: 1 }],
    /* Grundstrykningen på obehandlat underlag, en gång på 7 kvm per liter. */
    grundLiter: 4.52,
    /* Köp inte exakt ytan, blanda inte partier. */
    rad: 2,
  },
  {
    namn: 'Samma väggar med en enda strykning, vilket verktyget avråder från',
    indata: { ...STANDARD, material: 'vaggfarg', strykningar: 1 },
    vaggarNettoKvm: 31.67,
    fargLiter: 3.96,
    /* Tiolitersburken hade lämnat långt mer än 30 procent över, så två burkar om 2,5 vinner. */
    fargLiterAttKopa: 5,
    fargBurkar: [{ literPerBurk: 2.5, antal: 2 }],
    /* Köp inte exakt ytan, blanda inte partier, nöj dig inte med en strykning. */
    rad: 3,
  },
  {
    namn: 'Taket i samma rum, två strykningar takfärg',
    indata: { ...STANDARD, material: 'takfarg', raknar: 'tak' },
    takKvm: 12,
    valdKvm: 12,
    /* 12 kvm gånger två delat på 8 kvm per liter. */
    fargLiter: 3,
    /* Tio liter till ett tak på 12 kvm hade varit sju liter över, alltså utanför gränsen. */
    fargLiterAttKopa: 3.5,
    fargBurkar: [
      { literPerBurk: 2.5, antal: 1 },
      { literPerBurk: 1, antal: 1 },
    ],
    grundLiter: 1.71,
    rad: 2,
  },
  {
    namn: 'Tapet i samma rum, takhöjd 2,5 m',
    indata: { ...STANDARD, material: 'tapet' },
    vaggarNettoKvm: 31.67,
    /* Omkretsen 14 m minus dörrens bredd 0,9 m. */
    vaderBreddM: 13.1,
    antalVader: 25,
    vadLangdM: 2.6,
    vaderPerRulle: 3,
    rullar: 9,
    /* Vådlängden upp till hel rapport blir 2,65 m, och det ryms fortfarande tre
       gånger i rullen. Vid den här takhöjden kostar mönstret alltså ingenting. */
    vadLangdMonsterM: 2.65,
    rullarMonster: 9,
    rad: 1,
  },
  {
    namn: 'Tapet i ett rum med takhöjd 2,4 m, där mönstret kostar två rullar',
    indata: { ...STANDARD, takhojdM: 2.4, material: 'tapet' },
    vaderBreddM: 13.1,
    antalVader: 25,
    vadLangdM: 2.5,
    /* Den kända tumregeln: fyra våder ur en rulle utan mönsterpassning. */
    vaderPerRulle: 4,
    rullar: 7,
    /* Med mönster kapas våden vid hel rapport, och då blir det tre våder. */
    vadLangdMonsterM: 2.65,
    vaderPerRulleMonster: 3,
    rullarMonster: 9,
    rad: 1,
  },
  {
    namn: 'Parkett rakt lagd på golvet, fem procent spill',
    indata: { ...STANDARD, material: 'parkett', raknar: 'golv' },
    golvKvm: 12,
    valdKvm: 12,
    spillProcent: 5,
    kvmAttKopa: 12.6,
    antalPaket: null,
    /* Köp inte exakt ytan, spara några brädor. */
    rad: 2,
  },
  {
    namn: 'Parkett lagd diagonalt, tio procent spill',
    indata: { ...STANDARD, material: 'parkett', laggning: 'diagonal' },
    spillProcent: 10,
    kvmAttKopa: 13.2,
    rad: 2,
  },
  {
    namn: 'Parkett rakt lagd med paket om 2,2 kvm',
    indata: { ...STANDARD, material: 'parkett', paketKvm: 2.2 },
    spillProcent: 5,
    kvmAttKopa: 12.6,
    antalPaket: 6,
    kvmIPaketen: 13.2,
    rad: 2,
  },
  {
    namn: 'Klinker rakt lagd, tio procent spill',
    indata: { ...STANDARD, material: 'klinker' },
    spillProcent: 10,
    kvmAttKopa: 13.2,
    rad: 2,
  },
  {
    namn: 'Klinker lagd diagonalt, femton procent spill',
    indata: { ...STANDARD, material: 'klinker', laggning: 'diagonal' },
    spillProcent: 15,
    kvmAttKopa: 13.8,
    rad: 2,
  },
  {
    namn: 'Egna dörrmått: en pardörr på 1,2 × 2,1 m',
    indata: { ...STANDARD, dorrBreddM: 1.2, material: 'vaggfarg' },
    vaggarBruttoKvm: 35,
    avdragDorrKvm: 2.52,
    avdragFonsterKvm: 1.44,
    vaggarNettoKvm: 31.04,
    fargLiter: 7.76,
    rad: 2,
  },
  {
    namn: 'Rum utan dörr och utan fönster, alltså inga avdrag alls',
    indata: { ...STANDARD, dorrar: 0, fonster: 0 },
    vaggarBruttoKvm: 35,
    avdragDorrKvm: 0,
    avdragFonsterKvm: 0,
    vaggarNettoKvm: 35,
    valdKvm: 59,
    /* Bara rådet om att fylla i dörr och fönster. */
    rad: 1,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaKvadratmeter(f.indata);
    assert.equal(r.status, 'ok');
    const kolla = (nyckel, vad) => {
      if (f[nyckel] === undefined) return;
      naraNog(r[nyckel], f[nyckel], vad);
    };
    kolla('golvKvm', 'golvyta');
    kolla('takKvm', 'takyta');
    kolla('omkretsM', 'omkrets');
    kolla('vaggarBruttoKvm', 'väggyta före avdrag');
    kolla('avdragDorrKvm', 'avdrag för dörrar');
    kolla('avdragFonsterKvm', 'avdrag för fönster');
    kolla('vaggarNettoKvm', 'väggyta efter avdrag');
    kolla('valdKvm', 'det stora talet');

    /* Avdragen ska alltid gå ihop, oavsett vilket fall det är. */
    naraNog(
      r.vaggarNettoKvm,
      r.vaggarBruttoKvm - r.avdragDorrKvm - r.avdragFonsterKvm,
      'nettoytan är bruttoytan minus avdragen',
    );
    naraNog(r.takKvm, r.golvKvm, 'taket är lika stort som golvet');

    if (f.fargLiter !== undefined) {
      assert.ok(r.farg, 'färgsvaret finns');
      naraNog(r.farg.literRaknat, f.fargLiter, 'liter färg räknat');
      if (f.fargLiterAttKopa !== undefined) {
        naraNog(r.farg.literAttKopa, f.fargLiterAttKopa, 'liter färg att köpa');
      }
      if (f.fargBurkar !== undefined) assert.deepEqual(r.farg.burkar, f.fargBurkar, 'burkarna');
      if (f.grundLiter !== undefined) naraNog(r.farg.grundLiterRaknat, f.grundLiter, 'liter grundfärg');
      assert.ok(r.farg.literAttKopa + 1e-9 >= r.farg.literRaknat, 'köptalet är aldrig lägre än det räknade');
    }

    if (f.antalVader !== undefined) {
      assert.ok(r.tapet, 'tapetsvaret finns');
      naraNog(r.tapet.vaderBreddM, f.vaderBreddM, 'bredd att tapetsera');
      assert.equal(r.tapet.antalVader, f.antalVader, 'antal våder');
      naraNog(r.tapet.vadLangdM, f.vadLangdM, 'vådlängd');
      assert.equal(r.tapet.vaderPerRulle, f.vaderPerRulle, 'våder per rulle');
      assert.equal(r.tapet.rullar, f.rullar, 'antal rullar utan mönsterpassning');
      naraNog(r.tapet.vadLangdMonsterM, f.vadLangdMonsterM, 'vådlängd med mönsterpassning');
      assert.equal(r.tapet.rullarMonster, f.rullarMonster, 'antal rullar med mönsterpassning');
      assert.ok(r.tapet.rullarMonster >= r.tapet.rullar, 'mönstret kostar aldrig färre rullar');
    }

    if (f.spillProcent !== undefined) {
      assert.ok(r.golv, 'golvsvaret finns');
      assert.equal(r.golv.spillProcent, f.spillProcent, 'spill i procent');
      naraNog(r.golv.kvmAttKopa, f.kvmAttKopa, 'kvm att köpa');
      if (f.antalPaket !== undefined) assert.equal(r.golv.antalPaket, f.antalPaket, 'antal paket');
      if (f.kvmIPaketen !== undefined) naraNog(r.golv.kvmIPaketen, f.kvmIPaketen, 'kvm i paketen');
    }

    assert.equal(r.gorInteDetHar.length, f.rad, 'antal råd');

    console.log(
      `${f.namn}\n  golv ${r.golvKvm} kvm, väggar ${r.vaggarBruttoKvm} minus ${r.avdragKvm} = ${r.vaggarNettoKvm} kvm, tak ${r.takKvm} kvm` +
        (r.farg ? `, färg ${r.farg.literRaknat} l räknat, köp ${r.farg.literAttKopa} l` : '') +
        (r.tapet ? `, tapet ${r.tapet.antalVader} våder, ${r.tapet.rullar} rullar (${r.tapet.rullarMonster} med mönster)` : '') +
        (r.golv ? `, golv ${r.golv.kvmAttKopa} kvm inklusive ${r.golv.spillProcent} procent spill` : ''),
    );
  });
}

test('räkneexemplet i underlaget stämmer rad för rad', () => {
  const r = raknaKvadratmeter(STANDARD);
  assert.equal(r.status, 'ok');
  /* Underlagets tabell i avsnitt 6. */
  naraNog(r.golvKvm, 4 * 3, 'golv');
  naraNog(r.vaggarBruttoKvm, (4 + 3) * 2 * 2.5, 'väggar brutto');
  naraNog(r.avdragDorrKvm, 0.9 * 2.1, 'dörren');
  naraNog(r.avdragFonsterKvm, 1.2 * 1.2, 'fönstret');
  naraNog(r.vaggarNettoKvm, 35 - 1.89 - 1.44, 'väggar netto');
});

test('burkarna är färst möjliga inom överskottsgränsen', () => {
  /* Koordinatorns beslut 2026-09-17. Gränsen prövades först på 25 procent, men
     standardrummets 7,92 liter mot en tiolitersburk är 26 procent över, och det
     fallet är hela poängen med regeln. Gränsen är därför 30 procent. */
  assert.equal(OVERSKOTT_GRANS, 0.3);
  assert.ok((10 - 7.92) / 7.92 > 0.25, 'gränsfallet ligger utanför 25 procent');
  assert.ok((10 - 7.92) / 7.92 <= OVERSKOTT_GRANS, 'och innanför 30 procent');

  /* Knappt åtta liter är en burk om tio, inte fyra små. */
  assert.deepEqual(bastaBurkar(7.92).burkar, [{ literPerBurk: 10, antal: 1 }]);
  assert.equal(bastaBurkar(7.92).totalt, 10);
  assert.deepEqual(bastaBurkar(8).burkar, [{ literPerBurk: 10, antal: 1 }]);

  /* Tre liter är 2,5 plus 1: tiolitersburken hade lämnat sju liter över. */
  assert.deepEqual(bastaBurkar(3).burkar, [
    { literPerBurk: 2.5, antal: 1 },
    { literPerBurk: 1, antal: 1 },
  ]);
  assert.deepEqual(bastaBurkar(3.96).burkar, [{ literPerBurk: 2.5, antal: 2 }]);

  assert.deepEqual(bastaBurkar(10).burkar, [{ literPerBurk: 10, antal: 1 }]);
  /* Elva liter kräver två burkar, och då vinner den som spiller minst. */
  assert.deepEqual(bastaBurkar(11).burkar, [
    { literPerBurk: 10, antal: 1 },
    { literPerBurk: 1, antal: 1 },
  ]);
  assert.deepEqual(bastaBurkar(12).burkar, [
    { literPerBurk: 10, antal: 1 },
    { literPerBurk: 2.5, antal: 1 },
  ]);
  assert.deepEqual(bastaBurkar(21).burkar, [
    { literPerBurk: 10, antal: 2 },
    { literPerBurk: 1, antal: 1 },
  ]);

  /* Under en literburk finns ingen kombination inom gränsen, och då vinner
     den med minst liter totalt i stället. */
  assert.deepEqual(bastaBurkar(0.4).burkar, [{ literPerBurk: 1, antal: 1 }]);
  assert.deepEqual(bastaBurkar(2).burkar, [{ literPerBurk: 2.5, antal: 1 }]);

  for (const liter of [0.3, 1, 2.4, 2.6, 3.1, 6, 9.6, 14.2, 31]) {
    const r = bastaBurkar(liter);
    assert.ok(r.totalt + 1e-9 >= liter, `burkarna räcker till ${liter} liter`);
    /* Över en liter ska gränsen alltid gå att hålla. */
    if (liter >= 1) {
      assert.ok(
        r.totalt <= liter * (1 + OVERSKOTT_GRANS) + 1e-9,
        `${liter} liter lämnar högst ${OVERSKOTT_GRANS * 100} procent över, fick ${r.totalt}`,
      );
    }
  }
});

test('ett större rum ger proportionellt mer av allt', () => {
  const litet = raknaKvadratmeter({ ...STANDARD, material: 'parkett' });
  const stort = raknaKvadratmeter({ ...STANDARD, langdM: 8, breddM: 6, material: 'parkett' });
  assert.equal(litet.status, 'ok');
  assert.equal(stort.status, 'ok');
  naraNog(stort.golvKvm, 48, 'golvet i det stora rummet');
  naraNog(stort.golv.kvmAttKopa, 50.4, 'kvm att köpa i det stora rummet');
  assert.ok(stort.vaggarNettoKvm > litet.vaggarNettoKvm, 'större rum ger större väggyta');
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaKvadratmeter({ ...STANDARD, langdM: 0, takhojdM: 12 });
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.langdM, /längd/);
  assert.match(r.fel.takhojdM, /takhöjd/);
  assert.deepEqual([...GRANSER.takhojdM], [1.5, 6]);

  const halv = raknaKvadratmeter({ ...STANDARD, dorrar: 1.5 });
  assert.equal(halv.status, 'ogiltig', 'en halv dörr finns inte');

  /* Avdragen får inte äta upp hela väggen. */
  const forStora = raknaKvadratmeter({ ...STANDARD, dorrar: 12, fonster: 12 });
  assert.equal(forStora.status, 'ogiltig');
  assert.match(forStora.fel.dorrar, /hela väggytan/);

  const text = raknaKvadratmeter({ ...STANDARD, breddM: NaN });
  assert.equal(text.status, 'ogiltig');

  const bra = raknaKvadratmeter(STANDARD);
  assert.equal(bra.status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(
    new URLSearchParams(
      'langd=5,5&bredd=3&takhojd=2,7&dorrar=2&dorrbredd=0,8&dorrhojd=2&fonster=3&fonsterbredd=1&fonsterhojd=1,4&raknar=vaggar&material=tapet&strykningar=3&laggning=diagonal&paket=2,2',
    ),
  );
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    langdM: 5.5,
    breddM: 3,
    takhojdM: 2.7,
    dorrar: 2,
    dorrBreddM: 0.8,
    dorrHojdM: 2,
    fonster: 3,
    fonsterBreddM: 1,
    fonsterHojdM: 1.4,
    raknar: 'vaggar',
    material: 'tapet',
    strykningar: 3,
    laggning: 'diagonal',
    paketKvm: 2.2,
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Skräp i adressen faller tillbaka på standardvärdet, inte på ett fel. */
  assert.equal(tolkaQuery(new URLSearchParams('material=betong')).indata.material, 'inget');
  assert.equal(tolkaQuery(new URLSearchParams('raknar=vaggen')).indata.raknar, 'alla');
  assert.equal(tolkaQuery(new URLSearchParams('laggning=snett')).indata.laggning, 'rak');
  assert.equal(tolkaQuery(new URLSearchParams('paket=')).indata.paketKvm, null);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('langd=fyra')).indata.langdM));

  /* Utan eget val följer det stora talet materialet. */
  assert.equal(tolkaQuery(new URLSearchParams('material=takfarg')).indata.raknar, 'tak');
  assert.equal(tolkaQuery(new URLSearchParams('material=klinker')).indata.raknar, 'golv');
  assert.equal(tolkaQuery(new URLSearchParams('material=vaggfarg')).indata.raknar, 'vaggar');
  assert.equal(tolkaQuery(new URLSearchParams('material=takfarg&raknar=alla')).indata.raknar, 'alla');
});
