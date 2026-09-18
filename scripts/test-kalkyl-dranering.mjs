/**
 * Kör verktyget "Dränering och källare, kostnad och nytta" mot kostnadstabellen
 * och räkneexemplet i src/content/guider/fukt/fukt-i-kallaren.mdx, och mot
 * underlaget docs/briefer/underlag-kalkyl-dranering-2026-09-18.md.
 *
 * De tal artikeln redan publicerar är låsta här: cirka 3 000 kr per löpmeter
 * husgrund i arbetskostnad och upp till det dubbla (Villaägarna), villagrunden
 * på 40 löpmeter som ger 120 000 respektive 240 000 kr, avfuktaren på 5 948 kr
 * (Proffsmagasinet), fuktkontrollen på 5 355 kr (Ocab) och de 3 000 liter ett
 * regn på 20 mm ger på ett tak på 150 kvm (Anticimex). Ändras formeln så att
 * något av dem glider måste artikeln ändras i samma commit.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-dranering.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ARBETE_FAKTOR_OVRE,
  ARBETE_KR_PER_LOPMETER,
  ATERSTALLNING,
  ATKOMST_FAKTOR,
  AVFUKTARE_KR,
  DJUP_FAKTOR_MAX,
  DJUP_FAKTOR_MIN,
  djupfaktor,
  FUKTUTREDNING_KR,
  GRANSER,
  KAN_HALLA_AR,
  kronor,
  MATERIAL_HOG_KR_PER_M,
  MATERIAL_LAG_KR_PER_M,
  OVRE_DAMPNING,
  materialfaktor,
  raknaDranering,
  REGN_LITER,
  REGN_MM,
  ROT_ANDEL,
  ROT_GRUNDANDE_ANDEL,
  ROT_TAK_KR,
  rotavdrag,
  SPRANGNING_ETABLERING_KR,
  SCHAKTDJUP_REFERENS_M,
  STANDARD,
  TAK_KVM,
  tolkaQuery,
  TROLIGT_SLUT_AR,
} from '../src/lib/kalkyl/dranering.ts';

/** Ett resultat som gick igenom, eller ett testfel med feltexterna. */
function ok(indata, vad) {
  const r = raknaDranering(indata);
  assert.equal(r.status, 'ok', `${vad}: väntade ok, fick ${r.status} med ${JSON.stringify(r.fel ?? {})}`);
  return r;
}

function fraga(q) {
  return tolkaQuery(new URLSearchParams(q));
}

test('konstanterna är artikelns och underlagets', () => {
  /* Villaägarna: cirka 3 000 kr per löpmeter husgrund i arbetskostnad,
     "men det kan gå upp till det dubbla". Samma tal som kostnadstabellen i
     /fukt/fukt-i-kallaren/. */
  assert.equal(ARBETE_KR_PER_LOPMETER, 3000);
  assert.equal(ARBETE_FAKTOR_OVRE, 2);
  /* Villaägarna: en gammal dränering kan fungera i femtio år. */
  assert.equal(KAN_HALLA_AR, 50);
  /* Vår gräns för när markfukt gör det motiverat att gräva. */
  assert.equal(TROLIGT_SLUT_AR, 30);
  /* Proffsmagasinet, Wood's SW39FW, läst 16 september 2026. */
  assert.equal(AVFUKTARE_KR, 5948);
  /* Ocab, fuktkontroll av källarutrymme inklusive moms. */
  assert.equal(FUKTUTREDNING_KR, 5355);
  /* Anticimex: 20 mm regn på ett tak på 150 kvm ger 3 000 liter. */
  assert.equal(TAK_KVM, 150);
  assert.equal(REGN_MM, 20);
  assert.equal(REGN_LITER, 3000);
  /* Skatteverket 2026: högst 30 procent av arbetskostnaden, högst 50 000 kr
     per person och år. De 50 procenten gällde bara arbete betalt mellan
     12 maj och 31 december 2025. */
  assert.equal(ROT_ANDEL, 0.3);
  assert.equal(ROT_TAK_KR, 50000);
  /* Vår andel av arbetsposten som inte är maskinhyra. */
  assert.equal(ROT_GRUNDANDE_ANDEL, 0.6);
  /* Referensdjupet, alltså sulan på en full källare. Vårt antagande. */
  assert.equal(SCHAKTDJUP_REFERENS_M, 2);
});

test('standardhuset är artikelns villagrund på 40 löpmeter', () => {
  const r = ok(STANDARD, 'standardhuset');
  /* 12 gånger 8 meter ger omkretsen 2 × (12 + 8). */
  assert.equal(r.omkretsM, 40);
});

test('arbetet på villagrunden är artikelns 120 000 och 240 000 kr', () => {
  const r = ok(STANDARD, 'standardhuset');
  /* Räkneexemplet i /fukt/fukt-i-kallaren/: "En villagrund på 40 löpmeter
     hamnar alltså på 120 000 kr i arbetskostnad när förhållandena är
     gynnsamma. Är de inte det blir det 240 000 kr." */
  assert.equal(r.arbeteLagKrPerM, 3000);
  assert.equal(r.arbeteHogKrPerM, 6000);
  assert.equal(r.arbeteLagKr, 120000);
  assert.equal(r.arbeteHogKr, 240000);
  /* Arbetet är första posten, och de tre posterna summerar till helheten. */
  assert.equal(r.poster[0].namn, 'Arbete');
  assert.equal(r.poster[0].lagKr, 120000);
  assert.equal(r.summaLagKr, r.poster.reduce((s, p) => s + p.lagKr, 0));
  assert.equal(r.summaHogKr, r.poster.reduce((s, p) => s + p.hogKr, 0));
  /* Material och återställning ligger utanför Villaägarnas tal, som artikeln
     säger, och gör helheten dyrare än arbetet ensamt. */
  assert.ok(r.summaLagKr > r.arbeteLagKr, 'helheten ska vara dyrare än arbetet');
});

test('faktorn mot avfuktaren är artikelns tjugo', () => {
  const r = ok(STANDARD, 'standardhuset');
  /* Artikeln: "En felköpt avfuktare kostar sex tusen och löser ingenting. En
     dränering som inte behövdes kostar tjugo gånger så mycket." Artikelns tal
     är arbetskostnaden ensam. */
  assert.equal(Math.round(r.arbeteLagKr / AVFUKTARE_KR), 20);
  /* Verktyget jämför hela jobbet, alltså ett tal minst lika stort. */
  assert.ok(r.faktorMotAvfuktare >= 20, `faktorn mot avfuktaren blev ${r.faktorMotAvfuktare}`);
  assert.ok(r.faktorMotUtredning >= 20, `faktorn mot utredningen blev ${r.faktorMotUtredning}`);
  assert.equal(r.faktorMotAvfuktare, Math.round(r.summaLagKr / AVFUKTARE_KR));
  assert.equal(r.faktorMotUtredning, Math.round(r.summaLagKr / FUKTUTREDNING_KR));
});

test('schaktdjupet flyttar arbetet, och faktorn kläms i båda ändar', () => {
  /* Referensdjupet ger faktorn 1, alltså Villaägarnas eget tal. */
  assert.equal(djupfaktor(SCHAKTDJUP_REFERENS_M), 1);
  /* En meter djupare: 1 + 1 × 0,5, alltså BraByggares nedre kant på
     25 procent per halvmeter. */
  assert.equal(djupfaktor(3), 1.5);
  /* Klämningen håller ytterlägena på plats. */
  assert.equal(djupfaktor(0.5), DJUP_FAKTOR_MIN);
  assert.equal(djupfaktor(4), DJUP_FAKTOR_MAX);

  const djup = ok({ ...STANDARD, schaktDjupM: 3 }, 'tre meters schakt');
  assert.equal(djup.arbeteLagKrPerM, 4500);
  assert.equal(djup.arbeteHogKrPerM, 7500);
  assert.equal(djup.djupFaktor, 1.5);

  const grund = ok({ ...STANDARD, schaktDjupM: 1 }, 'en meters schakt');
  assert.equal(grund.arbeteLagKrPerM, 1800);
  assert.ok(grund.arbeteLagKrPerM < 3000, 'grundare schakt ska kosta mindre i arbete');
});

test('påslaget slår igenom halvt på den övre kanten', () => {
  /* Villaägarnas fördubbling är redan motiverad med grävdjup och
     bergsprängning. Räknades påslaget fullt ut i båda ändarna skulle samma
     svårighet räknas två gånger, och den övre kanten hamna långt över allt
     marknaden publicerar. Den undre kanten flyttas helt, den övre halvt. */
  const svar = ok({ ...STANDARD, schaktDjupM: 3, atkomst: 'berg' }, 'djupt schakt i berg');
  const faktor = 1.5 * ATKOMST_FAKTOR.berg;
  assert.equal(svar.arbeteLagKrPerM, Math.round(ARBETE_KR_PER_LOPMETER * faktor));
  assert.equal(
    svar.arbeteHogKrPerM,
    Math.round(ARBETE_KR_PER_LOPMETER * ARBETE_FAKTOR_OVRE * (1 + (faktor - 1) * OVRE_DAMPNING)),
  );
  /* Spannet blir smalare när läsaren berättat varför tomten är svår. */
  const referens = ok(STANDARD, 'fri tomt på referensdjup');
  const bredd = (r) => r.arbeteHogKrPerM / r.arbeteLagKrPerM;
  assert.ok(bredd(svar) < bredd(referens), 'spannet ska krympa när svårigheten är känd');
  /* Vid fri tomt på referensdjup är dämpningen verkningslös, och spannet är
     exakt Villaägarnas eget. */
  assert.equal(referens.arbeteHogKrPerM, ARBETE_KR_PER_LOPMETER * ARBETE_FAKTOR_OVRE);
  /* Utan dämpningen hade det värsta fallet, tre meters schakt i berg, landat
     på 13 500 kr per löpmeter bara i arbete. Med den stannar det på 9 750, som
     ligger i linje med BraByggares svåraste klass på 7 500 till 9 500 kr per
     löpmeter inklusive material. */
  assert.equal(Math.round(ARBETE_KR_PER_LOPMETER * ARBETE_FAKTOR_OVRE * faktor), 13500);
  assert.equal(svar.arbeteHogKrPerM, 9750);
});

test('materialet följer djupet rakare än arbetet gör', () => {
  assert.equal(materialfaktor(SCHAKTDJUP_REFERENS_M), 1);
  assert.equal(materialfaktor(4), 2);
  assert.equal(materialfaktor(1), 0.5);

  const r = ok(STANDARD, 'standardhuset');
  assert.equal(r.poster[1].namn, 'Material');
  assert.equal(r.poster[1].lagKrPerM, MATERIAL_LAG_KR_PER_M);
  assert.equal(r.poster[1].hogKrPerM, MATERIAL_HOG_KR_PER_M);

  const djup = ok({ ...STANDARD, schaktDjupM: 4 }, 'fyra meters schakt');
  assert.equal(djup.poster[1].lagKrPerM, MATERIAL_LAG_KR_PER_M * 2);
});

test('åtkomsten lyfter arbetet, berg mest', () => {
  assert.equal(ATKOMST_FAKTOR.fri, 1);

  const fri = ok(STANDARD, 'fri tomt');
  const trang = ok({ ...STANDARD, atkomst: 'trang' }, 'trång tomt');
  const berg = ok({ ...STANDARD, atkomst: 'berg' }, 'berg i schakten');

  assert.equal(fri.arbeteLagKrPerM, 3000);
  assert.equal(trang.arbeteLagKrPerM, 3750);
  assert.equal(berg.arbeteLagKrPerM, 4500);
  assert.ok(berg.summaLagKr > trang.summaLagKr && trang.summaLagKr > fri.summaLagKr);
  /* Åtkomsten rör bara arbetet, aldrig materialet. */
  assert.equal(berg.poster[1].lagKr, fri.poster[1].lagKr);
  /* En tomt som inte är Villaägarnas eget fall får en rad som säger varför. */
  assert.ok(berg.regler.some((g) => g.text.includes('Berg eller sten')), 'bergraden saknas');
  assert.ok(!fri.regler.some((g) => g.text.includes('Berg eller sten')), 'bergraden ska inte stå på en fri tomt');
  /* Sprängningens fasta kostnader står som en egen rad, aldrig i meterpriset. */
  assert.ok(
    berg.regler.some((g) => g.text.includes(kronor(SPRANGNING_ETABLERING_KR))),
    'etableringen för sprängning saknas',
  );
});

test('återställningen är sorterad från gräs till altan', () => {
  const ytor = ['gras', 'rabatt', 'asfalt', 'plattgang', 'altan'];
  for (let n = 1; n < ytor.length; n += 1) {
    const forra = ATERSTALLNING[ytor[n - 1]];
    const denna = ATERSTALLNING[ytor[n]];
    assert.ok(denna.lagKrPerM > forra.lagKrPerM, `${ytor[n]} ska kosta mer än ${ytor[n - 1]}`);
  }

  const gras = ok(STANDARD, 'gräs');
  const altan = ok({ ...STANDARD, aterstallning: 'altan' }, 'altan');
  assert.equal(altan.summaLagKr - gras.summaLagKr, (ATERSTALLNING.altan.lagKrPerM - ATERSTALLNING.gras.lagKrPerM) * 40);
  /* Återställningen rör inte arbetet: Villaägarnas tal står kvar. */
  assert.equal(altan.arbeteLagKr, gras.arbeteLagKr);
});

test('markfukt på en gammal dränering ger beskedet dränera om', () => {
  const r = ok({ ...STANDARD, tejptest: 'markfukt', alderAr: 50 }, 'markfukt, 50 år');
  assert.equal(r.besked, 'dranera');
  assert.equal(r.beskedRubrik, 'Dränera om');
  assert.equal(r.visaAvfuktare, false);
  assert.ok(r.regler.some((g) => g.utfall === 'grav'), 'ingen grävregel slog in');
  /* Boverket står bakom att skyddet hör hemma på utsidan. */
  assert.ok(r.regler.some((g) => g.kalla.includes('Boverket')), 'Boverket saknas som källa');
});

test('gränsen för gammal dränering ligger på trettio år', () => {
  const precis = ok({ ...STANDARD, tejptest: 'markfukt', alderAr: TROLIGT_SLUT_AR }, 'markfukt, 30 år');
  const under = ok({ ...STANDARD, tejptest: 'markfukt', alderAr: TROLIGT_SLUT_AR - 1 }, 'markfukt, 29 år');
  assert.equal(precis.besked, 'dranera');
  assert.equal(under.besked, 'billiga-forst');
});

test('kondens på plasten ger beskedet mät först och pekar på avfuktaren', () => {
  const r = ok({ ...STANDARD, tejptest: 'kondens', alderAr: 50 }, 'kondens');
  assert.equal(r.besked, 'mat-forst');
  assert.equal(r.beskedRubrik, 'Mät först');
  assert.equal(r.visaAvfuktare, true);
  /* Jämförelsen mot avfuktarens pris ska stå i svaret. */
  assert.ok(
    r.regler.some((g) => g.text.includes(kronor(AVFUKTARE_KR))),
    'avfuktarens pris saknas i reglerna',
  );
  /* Åldern ensam lyfter aldrig svaret till en grävning. */
  assert.ok(!r.regler.some((g) => g.utfall === 'grav'), 'en grävregel slog in på kondens');
});

test('markfukt på en ung dränering ger gör det billiga först', () => {
  const r = ok({ ...STANDARD, tejptest: 'markfukt', alderAr: 10 }, 'markfukt, 10 år');
  assert.equal(r.besked, 'billiga-forst');
  assert.equal(r.beskedRubrik, 'Gör det billiga först');
  assert.equal(r.visaAvfuktare, false);
});

test('torr plast och ogjort test ger båda gör det billiga först', () => {
  const torrt = ok({ ...STANDARD, tejptest: 'torrt' }, 'torr plast');
  const ogjort = ok({ ...STANDARD, tejptest: 'inte-gjort' }, 'inget test');
  assert.equal(torrt.besked, 'billiga-forst');
  assert.equal(ogjort.besked, 'billiga-forst');
  /* Torr plast betyder fel vägg, inte friskt hus. */
  assert.ok(torrt.regler.some((g) => g.text.includes('fel vägg')), 'raden om fel vägg saknas');
  /* Ett ogjort test ska säga i klartext varifrån vattnet kan komma, med samma
     tre ställen som /fukt/fukt-i-kallaren/ räknar upp. Raden får aldrig bli en
     bild läsaren måste tolka. */
  const treStallen = ogjort.regler.find((g) => g.text.includes('ett av tre ställen'));
  assert.ok(treStallen, 'raden om vattnets tre ursprung saknas');
  for (const ord of ['markfukt', 'kondens', 'läckage']) {
    assert.ok(treStallen.text.includes(ord), `${ord} saknas bland de tre ställena`);
  }
  /* Standardvärdet är ett ogjort test, alltså sajtens eget råd. */
  assert.equal(STANDARD.tejptest, 'inte-gjort');
});

test('Anticimex tal om taket står i varje svar', () => {
  for (const tejptest of ['markfukt', 'kondens', 'torrt', 'inte-gjort']) {
    const r = ok({ ...STANDARD, tejptest }, tejptest);
    const billigt = r.regler.find((g) => g.utfall === 'billigt' && g.text.includes('Stuprören'));
    assert.ok(billigt, `raden om stuprör saknas vid ${tejptest}`);
    assert.ok(billigt.text.includes(String(TAK_KVM)), 'takytan saknas');
    assert.ok(billigt.text.includes(kronor(REGN_LITER)), 'litermängden saknas');
    /* Fuktutredningen med mätvärden står också alltid. */
    assert.ok(
      r.regler.some((g) => g.text.includes(kronor(FUKTUTREDNING_KR))),
      `fuktutredningens pris saknas vid ${tejptest}`,
    );
    /* Fem råd, alltid. */
    assert.equal(r.gorInteDetHar.length, 5);
  }
});

test('rotavdraget gäller bara den del av arbetet som inte är maskinhyra', () => {
  /* 100 000 kr arbete, varav tre femtedelar är rotgrundande, ger 30 procent
     av 60 000 kr. Skatteverket undantar grävmaskinen. */
  assert.deepEqual(rotavdrag(100000), { grundandeKr: 60000, avdragKr: 18000, taketNas: false });
  /* Taket tar vid först runt 278 000 kr i arbete. Strax under går avdraget
     rakt på procenten. */
  assert.deepEqual(rotavdrag(277000), { grundandeKr: 166200, avdragKr: 49860, taketNas: false });
  /* Över taket: avdraget stannar. */
  const over = rotavdrag(1000000);
  assert.equal(over.avdragKr, ROT_TAK_KR);
  assert.equal(over.taketNas, true);

  const r = ok(STANDARD, 'standardhuset');
  assert.equal(r.rotGrundandeKr, 72000);
  assert.equal(r.rotavdragKr, 21600);
  assert.equal(r.rotTaketNas, false);
  assert.equal(r.efterRotLagKr, r.summaLagKr - 21600);
  /* Räknat rakt på hela arbetsposten hade avdraget blivit 36 000 kr, alltså
     ett löfte som Skatteverket inte infriar. Skillnaden är hela poängen. */
  assert.ok(r.rotavdragKr < r.arbeteLagKr * ROT_ANDEL);
  /* Raden om maskinhyran står i svaret. */
  assert.ok(r.regler.some((g) => g.text.includes('Maskinell utrustning') || g.text.includes('maskinell utrustning') || g.text.includes('maskinhyran')));

  /* Ett stort och svårt jobb slår i taket. */
  const stort = ok({ ...STANDARD, husLangdM: 15, husBreddM: 12, schaktDjupM: 3, atkomst: 'berg' }, 'stort hus i berg');
  assert.equal(stort.rotTaketNas, true);
  assert.equal(stort.rotavdragKr, ROT_TAK_KR);
});

test('tolkaQuery tål decimalkomma, skräp och tomma fält', () => {
  const tom = fraga('');
  assert.equal(tom.harIndata, false);
  assert.deepEqual(tom.indata, STANDARD);

  const full = fraga('langd=11,5&bredd=7,5&djup=2,5&atkomst=berg&aterstall=asfalt&alder=42&tejp=markfukt');
  assert.equal(full.harIndata, true);
  assert.equal(full.indata.husLangdM, 11.5);
  assert.equal(full.indata.husBreddM, 7.5);
  assert.equal(full.indata.schaktDjupM, 2.5);
  assert.equal(full.indata.atkomst, 'berg');
  assert.equal(full.indata.aterstallning, 'asfalt');
  assert.equal(full.indata.alderAr, 42);
  assert.equal(full.indata.tejptest, 'markfukt');

  /* Skräp i ett val faller tillbaka på standardvärdet. */
  const skrap = fraga('atkomst=vulkan&aterstall=lava&tejp=kanske');
  assert.equal(skrap.indata.atkomst, STANDARD.atkomst);
  assert.equal(skrap.indata.aterstallning, STANDARD.aterstallning);
  assert.equal(skrap.indata.tejptest, STANDARD.tejptest);
  assert.equal(skrap.harIndata, true);

  /* Skräp i ett tal blir NaN och ska ge ett fel på just det fältet. */
  const trasig = fraga('langd=lagom');
  assert.ok(Number.isNaN(trasig.indata.husLangdM));
  const r = raknaDranering(trasig.indata);
  assert.equal(r.status, 'ogiltig');
  assert.ok(r.fel.husLangdM, 'felet ska ligga på längdfältet');
  assert.equal(r.fel.husBreddM, undefined);

  /* Typografiskt minus och mellanslag i talet tolkas. */
  assert.equal(fraga('djup=2 ,5').indata.schaktDjupM, 2.5);
  assert.ok(fraga('alder=−5').indata.alderAr < 0);
});

test('gränserna ger ett fel per fält', () => {
  const forStort = raknaDranering({ ...STANDARD, husLangdM: GRANSER.husLangdM[1] + 1 });
  assert.equal(forStort.status, 'ogiltig');
  assert.ok(forStort.fel.husLangdM);

  const forDjupt = raknaDranering({ ...STANDARD, schaktDjupM: GRANSER.schaktDjupM[1] + 0.5 });
  assert.equal(forDjupt.status, 'ogiltig');
  assert.ok(forDjupt.fel.schaktDjupM);

  const halvtAr = raknaDranering({ ...STANDARD, alderAr: 12.5 });
  assert.equal(halvtAr.status, 'ogiltig');
  assert.ok(halvtAr.fel.alderAr, 'åldern ska vara hela år');

  const allt = raknaDranering({ ...STANDARD, husLangdM: 0, husBreddM: 0, schaktDjupM: 0, alderAr: -1 });
  assert.equal(allt.status, 'ogiltig');
  assert.equal(Object.keys(allt.fel).length, 4);

  /* Kanterna är giltiga. */
  ok({ ...STANDARD, husLangdM: GRANSER.husLangdM[0], husBreddM: GRANSER.husBreddM[0] }, 'minsta huset');
  ok({ ...STANDARD, schaktDjupM: GRANSER.schaktDjupM[0], alderAr: 0 }, 'grundaste schakten');
  ok({ ...STANDARD, alderAr: GRANSER.alderAr[1] }, 'äldsta dräneringen');
});

test('kronor skrivs med mellanrum som tusentalsavgränsare', () => {
  assert.equal(kronor(5948), '5 948');
  assert.equal(kronor(120000), '120 000');
  assert.equal(kronor(3000), '3 000');
  assert.equal(kronor(950), '950');
});
