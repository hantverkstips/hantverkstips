/**
 * Kör bygglovsverktyget mot beslutstabellen och avgiftstabellen i den
 * publicerade artikeln src/content/kunskap/altan/bygglov-altan.mdx, som i sin
 * tur vilar på plan- och bygglagen efter lag 2025:974 och på
 * docs/briefer/underlag-bygglov-altan-2026-09-16.md. Samma svar ska komma ur
 * verktyget som står i tabellen, annars säger sajten två saker på en gång.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-bygglov-altan.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  AVGIFT_GRUND_PBB,
  AVGIFT_PER_KVM_PBB,
  bedomFall,
  GRANS_M,
  GRANSER,
  HOJD_LANGRE_BORT_M,
  HOJD_NARA_BYGGNAD_M,
  LOVFRI_TILLBYGGNAD_KVM,
  NARA_BYGGNAD_M,
  PRISBASBELOPP_KR,
  raknaBygglovAltan,
  sanktionsavgift,
  STANDARD,
  SVAR_RUBRIK,
  tolkaQuery,
} from '../src/lib/kalkyl/bygglov-altan.ts';

/** Standardaltanen med ett eller flera fält utbytta. */
function altan(andringar = {}) {
  return { ...STANDARD, ...andringar };
}

test('konstanterna är lagens och artikelns', () => {
  /* Plan- och bygglagen 9 kap. 19 §, i lydelse efter lag 2025:974. */
  assert.equal(HOJD_NARA_BYGGNAD_M, 1.8);
  assert.equal(HOJD_LANGRE_BORT_M, 1.2);
  assert.equal(NARA_BYGGNAD_M, 3.6);
  /* Boverkets råd om grannmedgivande, och 9 kap. 34 och 35 §§. */
  assert.equal(GRANS_M, 4.5);
  /* Plan- och bygglagen 9 kap. 10 §, lovfri tillbyggnad. */
  assert.equal(LOVFRI_TILLBYGGNAD_KVM, 30);
  /* Prisbasbeloppet för 2026 och plan- och byggförordningen 9 kap. 12 § 3. */
  assert.equal(PRISBASBELOPP_KR, 59200);
  assert.equal(AVGIFT_GRUND_PBB, 0.25);
  assert.equal(AVGIFT_PER_KVM_PBB, 0.005);
  /* Standardvärdena är den vanliga altanen på plintar intill huset. */
  assert.equal(STANDARD.detaljplan, 'ja');
  assert.equal(STANDARD.hojdM, 0.8);
  assert.equal(STANDARD.avstandByggnadM, 0);
  assert.equal(STANDARD.avstandGransM, 4.5);
  assert.equal(STANDARD.tak, 'nej');
  assert.equal(STANDARD.paTak, false);
  assert.equal(STANDARD.ytaKvm, 20);
  assert.equal(STANDARD.vardefullt, 'nej');
});

/**
 * Tio fall, ett per gren i beslutstabellen. Lagrummet i kommentaren är det som
 * ska stå på raden verktyget skriver ut.
 */
const FALL = [
  {
    namn: 'Låg altan intill huset inom detaljplan, 0,8 m över marken',
    indata: altan(),
    svar: 'nej',
    antalRegler: 1,
    lagrum: '9 kap. 19 §',
    grannmedgivande: false,
  },
  {
    namn: '1,5 m hög altan inom 3,6 m från huset, alltså under 1,8 m',
    indata: altan({ hojdM: 1.5, avstandByggnadM: 2 }),
    svar: 'nej',
    antalRegler: 1,
    lagrum: '9 kap. 19 §',
    grannmedgivande: false,
  },
  {
    namn: '1,5 m hög altan längre bort än 3,6 m, alltså över 1,2 m',
    indata: altan({ hojdM: 1.5, avstandByggnadM: 5, avstandGransM: 10 }),
    svar: 'ja',
    antalRegler: 1,
    lagrum: '9 kap. 19 §',
    grannmedgivande: false,
  },
  {
    namn: '2 m hög altan på landet, utanför detaljplan',
    indata: altan({ detaljplan: 'nej', hojdM: 2, avstandGransM: 20 }),
    svar: 'nej',
    antalRegler: 1,
    lagrum: 'Boverket',
    grannmedgivande: false,
  },
  {
    namn: 'Inglasad altan på 25 kvm, under gränsen för lovfri tillbyggnad',
    indata: altan({ tak: 'vaggar', ytaKvm: 25 }),
    svar: 'nej',
    antalRegler: 2,
    lagrum: '9 kap. 10 §',
    grannmedgivande: false,
  },
  {
    namn: 'Inglasad altan på 40 kvm, över gränsen för lovfri tillbyggnad',
    indata: altan({ tak: 'vaggar', ytaKvm: 40 }),
    svar: 'ja',
    antalRegler: 2,
    lagrum: '9 kap. 10 §',
    grannmedgivande: false,
  },
  {
    namn: 'Skärmtak utan väggar på 20 kvm, samma gräns som inglasningen',
    indata: altan({ tak: 'skarmtak' }),
    svar: 'nej',
    antalRegler: 2,
    lagrum: '9 kap. 10 §',
    grannmedgivande: false,
  },
  {
    namn: 'Altan ovanpå garaget inom detaljplan',
    indata: altan({ paTak: true, hojdM: 2.6 }),
    svar: 'ja',
    antalRegler: 1,
    lagrum: 'P 5608-13',
    grannmedgivande: false,
  },
  {
    namn: 'Låg altan 2 m från tomtgränsen, alltså närmare än 4,5 m',
    indata: altan({ avstandGransM: 2 }),
    svar: 'nej',
    antalRegler: 2,
    lagrum: '9 kap. 34 och 35 §§',
    grannmedgivande: true,
  },
  {
    namn: 'Låg altan på ett hus som är utpekat som särskilt värdefullt',
    indata: altan({ vardefullt: 'ja' }),
    svar: 'ja',
    antalRegler: 2,
    lagrum: '9 kap. 37 och 38 §§',
    grannmedgivande: false,
  },
];

for (const f of FALL) {
  test(f.namn, () => {
    const r = raknaBygglovAltan(f.indata);
    assert.equal(r.status, 'ok');
    assert.equal(r.svar, f.svar, 'svaret');
    assert.equal(r.svarRubrik, SVAR_RUBRIK[f.svar], 'rubriken över svaret');
    assert.equal(r.bedomningar.length, 1, 'ett fall när detaljplanen är känd');
    assert.equal(r.bedomningar[0].regler.length, f.antalRegler, 'antal regler som slog in');
    assert.ok(
      r.bedomningar[0].regler.some((regel) => regel.lagrum.includes(f.lagrum)),
      `lagrummet ${f.lagrum} står på någon rad`,
    );
    assert.equal(r.kravGrannmedgivande, f.grannmedgivande, 'grannmedgivande');
    /* Varje regel bär ett lagrum och en text. Tom rad är ett fel. */
    for (const regel of r.bedomningar[0].regler) {
      assert.ok(regel.text.length > 20, 'regeln har en text');
      assert.ok(regel.lagrum.length > 5, 'regeln har ett lagrum');
    }
    /* Avgiften står alltid, och rådet att inte bygga först står alltid. */
    assert.ok(r.avgiftKr > 0, 'avgiften räknas alltid ut');
    assert.ok(r.gorInteDetHar.length >= 1, 'minst ett råd');
    console.log(
      `${f.namn}\n  ${r.svarRubrik}, ${r.bedomningar[0].regler.length} regel(er), ` +
        `avgift ${r.avgiftKr} kr${r.kravGrannmedgivande ? ', grannens ja krävs' : ''}`,
    );
  });
}

test('vet inte om tomten ligger inom detaljplan ger svaret för båda fallen', () => {
  /* 1,5 m hög altan 5 m från huset: bygglov inom plan, inget lov utanför. */
  const r = raknaBygglovAltan(altan({ detaljplan: 'vet-inte', hojdM: 1.5, avstandByggnadM: 5, avstandGransM: 10 }));
  assert.equal(r.status, 'ok');
  assert.equal(r.bedomningar.length, 2);
  assert.equal(r.bedomningar[0].fall, 'Inom detaljplan');
  assert.equal(r.bedomningar[0].svar, 'ja');
  assert.equal(r.bedomningar[1].fall, 'Utanför detaljplan');
  assert.equal(r.bedomningar[1].svar, 'nej');
  assert.equal(r.olikaFall, true);
  assert.equal(r.svar, 'kanske');
  assert.equal(r.svarRubrik, 'Troligen, fråga kommunen');

  /* Samma svar i båda fallen ger det svaret rakt av, inte ett kanske. */
  const lag = raknaBygglovAltan(altan({ detaljplan: 'vet-inte' }));
  assert.equal(lag.olikaFall, false);
  assert.equal(lag.svar, 'nej');
});

test('vet inte om huset är värdefullt lyfter svaret till ett kanske', () => {
  const r = raknaBygglovAltan(altan({ vardefullt: 'vet-inte' }));
  assert.equal(r.svar, 'kanske');
  assert.ok(r.bedomningar[0].regler.some((regel) => regel.lagrum.includes('37 och 38 §§')));
});

test('altan på tak utanför detaljplan blir ett kanske, inte ett ja', () => {
  const r = raknaBygglovAltan(altan({ detaljplan: 'nej', paTak: true, hojdM: 2.6, avstandGransM: 20 }));
  assert.equal(r.svar, 'kanske');
  const inom = bedomFall(true, altan({ paTak: true, hojdM: 2.6 }));
  assert.equal(inom.svar, 'ja');
});

test('gränsen mellan 1,8 och 1,2 m går vid 3,6 m från byggnaden', () => {
  /* Exakt på gränserna: lagen kräver lov först när måttet överstiger dem. */
  assert.equal(raknaBygglovAltan(altan({ hojdM: 1.8, avstandByggnadM: 3.6 })).svar, 'nej');
  assert.equal(raknaBygglovAltan(altan({ hojdM: 1.81, avstandByggnadM: 3.6 })).svar, 'ja');
  assert.equal(raknaBygglovAltan(altan({ hojdM: 1.2, avstandByggnadM: 3.7, avstandGransM: 10 })).svar, 'nej');
  assert.equal(raknaBygglovAltan(altan({ hojdM: 1.21, avstandByggnadM: 3.7, avstandGransM: 10 })).svar, 'ja');
  /* Grannmedgivandet slår in först under 4,5 m, inte på måttet. */
  assert.equal(raknaBygglovAltan(altan({ avstandGransM: 4.5 })).kravGrannmedgivande, false);
  assert.equal(raknaBygglovAltan(altan({ avstandGransM: 4.49 })).kravGrannmedgivande, true);
});

test('sanktionsavgiften stämmer mot tabellen i artikeln', () => {
  /* 0,25 prisbasbelopp i grunden, 0,005 per kvm, prisbasbeloppet 59 200 kr. */
  assert.equal(sanktionsavgift(20).grundKr, 14800);
  assert.equal(sanktionsavgift(20).tillaggKr, 5920);
  assert.equal(sanktionsavgift(20).summaKr, 20720);
  assert.equal(sanktionsavgift(30).summaKr, 23680);
  assert.equal(sanktionsavgift(40).summaKr, 26640);

  const r = raknaBygglovAltan(altan({ ytaKvm: 30 }));
  assert.equal(r.avgiftKr, 23680);
  assert.equal(r.avgiftHalvKr, 11840);
  assert.equal(r.avgiftFjardedelKr, 5920);
});

test('ogiltig indata ger fel per fält', () => {
  const r = raknaBygglovAltan(altan({ hojdM: 99, avstandByggnadM: -1, avstandGransM: NaN, ytaKvm: 0 }));
  assert.equal(r.status, 'ogiltig');
  assert.match(r.fel.hojdM, /höjd/);
  assert.match(r.fel.avstandByggnadM, /byggnad/);
  assert.match(r.fel.avstandGransM, /tomtgränsen/);
  assert.match(r.fel.ytaKvm, /yta/);
  assert.deepEqual([...GRANSER.ytaKvm], [1, 500]);

  assert.equal(raknaBygglovAltan(STANDARD).status, 'ok');
});

test('tolkaQuery läser adressen, tål decimalkomma och fyller på med standard', () => {
  const q = tolkaQuery(
    new URLSearchParams('plan=ja&hojd=1,5&avstand=5&grans=2,5&tak=vaggar&patak=nej&yta=25&vardefullt=nej'),
  );
  assert.equal(q.harIndata, true);
  assert.deepEqual(q.indata, {
    detaljplan: 'ja',
    hojdM: 1.5,
    avstandByggnadM: 5,
    avstandGransM: 2.5,
    tak: 'vaggar',
    paTak: false,
    ytaKvm: 25,
    vardefullt: 'nej',
  });

  assert.equal(tolkaQuery(new URLSearchParams('')).harIndata, false);
  assert.deepEqual(tolkaQuery(new URLSearchParams('')).indata, STANDARD);

  /* Skräp i ett val faller tillbaka på standardvärdet, inte på ett fel. */
  assert.equal(tolkaQuery(new URLSearchParams('plan=kanske')).indata.detaljplan, 'ja');
  assert.equal(tolkaQuery(new URLSearchParams('tak=pergola')).indata.tak, 'nej');
  assert.equal(tolkaQuery(new URLSearchParams('vardefullt=vet-inte')).indata.vardefullt, 'vet-inte');
  assert.equal(tolkaQuery(new URLSearchParams('patak=ja')).indata.paTak, true);
  assert.ok(Number.isNaN(tolkaQuery(new URLSearchParams('hojd=en+meter')).indata.hojdM));
});
