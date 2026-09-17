/**
 * Kör skruvväljaren mot längdtabellen i src/content/guider/inomhus/gipsskruv.mdx,
 * som i sin tur vilar på docs/briefer/underlag-fakta-gipsskruv.md. Samma tal ska
 * komma ur verktyget som står i artikeln, annars säger sajten två saker på en
 * gång. Tumregeln är Norgips: skivtjockleken plus 20 mm in i träregel, plus
 * 10 mm genom stålregel, och cirka 7 mm till vid torr fogtätning.
 *
 * Körs med:
 *   node --experimental-strip-types --test scripts/test-kalkyl-gipsskruv.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  BORRSPETS_PLAT_MM,
  FALT_CC_MM,
  FOGTATNING_MM,
  HANDELSLANGDER_MM,
  KANT_CC_MM,
  LANGDER,
  langdrad,
  minstaLangd,
  mm,
  NALSPETS_PLAT_MM,
  narmastOver,
  PLAT_GRANS_MM,
  raknaGipsskruv,
  SKIVA_MM,
  STAL_GENOM_MM,
  STANDARD,
  tolkaQuery,
  TRA_IN_I_REGEL_MM,
  ytbehandlingFor,
} from '../src/lib/kalkyl/gipsskruv.ts';

/** Standardfallet med ett eller flera fält utbytta. */
function fall(andringar = {}) {
  return { ...STANDARD, ...andringar };
}

/** Kör kalkylatorn och kräver ett svar. */
function svar(andringar = {}) {
  const r = raknaGipsskruv(fall(andringar));
  assert.equal(r.status, 'ok');
  return r;
}

test('tumregeln och konstanterna är Norgips och Essves', () => {
  assert.equal(TRA_IN_I_REGEL_MM, 20); // Norgips, att tänka på innan montering
  assert.equal(STAL_GENOM_MM, 10);
  assert.equal(FOGTATNING_MM, 7);
  assert.equal(PLAT_GRANS_MM, 0.9); // Gyproc QS Quick, maximal godstjocklek
  assert.deepEqual([...NALSPETS_PLAT_MM], [0.4, 0.9]); // Essve 522224
  assert.deepEqual([...BORRSPETS_PLAT_MM], [0.7, 2.0]); // Essve, borrspets
  assert.equal(KANT_CC_MM, 200); // Norgips och Svenskt Trä
  assert.equal(FALT_CC_MM, 300);
  assert.equal(SKIVA_MM['9'], 9.5); // den som kallas 9 mm mäter 9,5
  assert.equal(SKIVA_MM['12.5'], 12.5);
  assert.equal(SKIVA_MM['15'], 15);

  /* Handelslängderna: artikelns tabell håller sig till 55 mm och uppåt ligger
     Essves spann, som slutar på 75 mm. */
  for (const l of [25, 30, 35, 38, 41, 45, 51, 55]) {
    assert.ok(HANDELSLANGDER_MM.includes(l), `${l} mm är en handelslängd`);
  }
  assert.equal(HANDELSLANGDER_MM[0], 25);
  assert.equal(HANDELSLANGDER_MM[HANDELSLANGDER_MM.length - 1], 75);
});

test('minsta längd är artikelns punktlista', () => {
  /* Punktlistan under längdtabellen i /inomhus/gipsskruv/. */
  assert.equal(minstaLangd(fall({ skiva: '12.5', lag: 1, regel: 'tra' })), 32.5);
  assert.equal(minstaLangd(fall({ skiva: '12.5', lag: 1, regel: 'stal-tunn' })), 22.5);
  assert.equal(minstaLangd(fall({ skiva: '15', lag: 1, regel: 'tra' })), 35);
  assert.equal(minstaLangd(fall({ skiva: '15', lag: 1, regel: 'stal-tunn' })), 25);
  assert.equal(minstaLangd(fall({ skiva: '12.5', lag: 2, regel: 'tra' })), 45);
  assert.equal(minstaLangd(fall({ skiva: '12.5', lag: 2, regel: 'stal-tjock' })), 35);
  assert.equal(minstaLangd(fall({ skiva: '15', lag: 2, regel: 'tra' })), 50);
  assert.equal(minstaLangd(fall({ skiva: '15', lag: 2, regel: 'stal-tunn' })), 40);
});

test('längdtabellen är artikelns tabell', () => {
  /* | Skivor | Träregel | Stålregel | i /inomhus/gipsskruv/. Raden anger en
     eller två längder, och den vi skriver ut är den första. */
  assert.deepEqual([LANGDER.tra['12.5-1'].langdMm, LANGDER.tra['12.5-1'].alternativMm], [41, 35]);
  assert.deepEqual([LANGDER.tra['15-1'].langdMm, LANGDER.tra['15-1'].alternativMm], [41, null]);
  assert.deepEqual([LANGDER.tra['12.5-2'].langdMm, LANGDER.tra['12.5-2'].alternativMm], [45, 51]);
  assert.deepEqual([LANGDER.tra['15-2'].langdMm, LANGDER.tra['15-2'].alternativMm], [51, 55]);
  assert.deepEqual([LANGDER.stal['12.5-1'].langdMm, LANGDER.stal['12.5-1'].alternativMm], [25, null]);
  assert.deepEqual([LANGDER.stal['15-1'].langdMm, LANGDER.stal['15-1'].alternativMm], [30, 25]);
  assert.deepEqual([LANGDER.stal['12.5-2'].langdMm, LANGDER.stal['12.5-2'].alternativMm], [38, 41]);
  assert.deepEqual([LANGDER.stal['15-2'].langdMm, LANGDER.stal['15-2'].alternativMm], [41, null]);

  /* Varje rad i tabellen räcker till tumregeln, och de raderna som inte står i
     artikeln är märkta som våra egna. */
  for (const familj of ['tra', 'stal']) {
    for (const [nyckel, rad] of Object.entries(LANGDER[familj])) {
      const [skiva, lag] = nyckel.split('-');
      const indata = fall({
        skiva,
        lag: Number(lag),
        regel: familj === 'tra' ? 'tra' : 'stal-tunn',
      });
      const minsta = minstaLangd(indata);
      if (rad.langdMm >= minsta) continue;
      assert.fail(`${familj} ${nyckel}: ${rad.langdMm} mm når inte tumregelns ${minsta} mm`);
    }
  }
  assert.equal(LANGDER.tra['9-1'].iTabellen, false);
  assert.equal(LANGDER.tra['12.5-1'].iTabellen, true);
});

test('ett lag 12,5 mm på träregel ger 41 mm med grov gänga', () => {
  const r = svar();
  assert.equal(r.langdMm, 41);
  assert.equal(r.langdText, mm(41));
  assert.equal(r.ganga, 'grov');
  assert.equal(r.spets, 's-eller-nal');
  assert.equal(r.minstaLangdMm, 32.5);
  assert.equal(r.narmastOverMm, 35);
  assert.equal(r.alternativMm, 35);
  assert.equal(r.iRegelnMm, 28.5); // 41 minus skivan
  assert.ok(r.iRegelnMm >= r.kravIRegelnMm);
  assert.equal(r.ytbehandling.klass, 'C1');
  assert.equal(r.visaBandadSkruv, true); // essve-fzb-39x41
  assert.ok(r.anm && r.anm.includes('35'));
});

test('två lag 12,5 mm på träregel ger 45 eller 51 mm', () => {
  const r = svar({ lag: 2 });
  assert.ok([45, 51].includes(r.langdMm), `fick ${r.langdMm} mm`);
  assert.equal(r.langdMm, 45);
  assert.equal(r.alternativMm, 51);
  assert.equal(r.minstaLangdMm, 45); // 25 mm gips plus 20 mm i regeln
  assert.equal(r.iRegelnMm, 20);
  assert.equal(r.ganga, 'grov');
  assert.equal(r.visaBandadSkruv, false); // bandet är 41 mm
});

test('ett lag 12,5 mm på tunn stålregel ger 25 mm med fin gänga och nålspets', () => {
  const r = svar({ regel: 'stal-tunn' });
  assert.equal(r.langdMm, 25);
  assert.equal(r.ganga, 'fin');
  assert.equal(r.spets, 'nal');
  assert.equal(r.minstaLangdMm, 22.5);
  assert.equal(r.narmastOverMm, 25);
  assert.equal(r.iRegelnMm, 12.5);
  assert.equal(r.ytbehandling.kort, 'Fosfaterad');
  assert.ok(r.gorInteDetHar.some((rad) => rad.includes('grovgängad')));
});

test('ett lag 15 mm på stålregel ger 30 mm och rådet om marginal', () => {
  const r = svar({ skiva: '15', regel: 'stal-tunn' });
  assert.equal(r.langdMm, 30);
  assert.equal(r.minstaLangdMm, 25);
  assert.equal(r.narmastOverMm, 25);
  assert.equal(r.alternativMm, 25);
  assert.ok(r.anm && r.anm.includes('25'), 'raden säger att 25 mm ligger på gränsen');
  assert.equal(r.ganga, 'fin');
});

test('den tunna skivan räknas som 9,5 mm', () => {
  const ett = svar({ skiva: '9' });
  assert.equal(ett.minstaLangdMm, 29.5); // 9,5 plus 20
  assert.equal(ett.langdMm, 30);
  assert.equal(ett.iRegelnMm, 20.5);
  assert.equal(ett.iTabellen, false);

  const tva = svar({ skiva: '9', lag: 2 });
  assert.equal(tva.minstaLangdMm, 39); // 19 plus 20
  assert.equal(tva.langdMm, 41);

  const stal = svar({ skiva: '9', regel: 'stal-tjock' });
  assert.equal(stal.minstaLangdMm, 19.5);
  assert.equal(stal.langdMm, 25); // ingen kortare säljs
  assert.equal(stal.spets, 'borr');
});

test('torr fogtätning lägger på 7 mm och tar nästa längd upp', () => {
  const r = svar({ fogtatning: true });
  assert.equal(r.fogtatningMm, 7);
  assert.equal(r.minstaLangdMm, 39.5); // 12,5 plus 20 plus 7
  assert.equal(r.langdMm, 45); // nästa längd över radens 41
  assert.ok(r.langdMm >= r.minstaLangdMm);
  assert.equal(r.iRegelnMm, 25.5); // 45 minus skivan minus tätningen
  assert.ok(r.fogtatningText && r.fogtatningText.includes('41'));

  /* Det tjockaste fallet: två lag 15 mm på trä med fogtätning bakom. */
  const tjockast = svar({ skiva: '15', lag: 2, fogtatning: true });
  assert.equal(tjockast.minstaLangdMm, 57);
  assert.equal(tjockast.langdMm, 60);
  assert.ok(tjockast.langdMm >= tjockast.minstaLangdMm);
});

test('plåt över 0,9 mm ger borrspets och två råd', () => {
  const r = svar({ regel: 'stal-tjock' });
  assert.equal(r.spets, 'borr');
  assert.equal(r.ganga, 'fin');
  assert.equal(r.langdMm, 25); // längden är densamma i tunn och tjock plåt
  assert.ok(r.spetsSkal.includes('2') && r.spetsSkal.includes('0,7'));
  assert.ok(r.gorInteDetHar.some((rad) => rad.includes('nålspets') || rad.includes('Nålspets')));
  assert.ok(r.gorInteDetHar.some((rad) => rad.includes('grovgängad')));
});

test('våtrum och utomhus ger C4, torrt rum ger C1', () => {
  const vat = svar({ miljo: 'vatrum' });
  assert.equal(vat.ytbehandling.klass, 'C4');
  assert.ok(vat.ytbehandling.kort.includes('C4'));
  assert.ok(vat.ytbehandling.kort.includes('A2'));
  assert.ok(vat.ytbehandling.text.includes('tätskikt'));
  assert.equal(vat.langdMm, 41); // miljön ändrar inte längden

  const ute = svar({ miljo: 'ute' });
  assert.equal(ute.ytbehandling.klass, 'C4');
  assert.ok(ute.ytbehandling.text.includes('Corrseal'));
  assert.ok(ute.gorInteDetHar.some((rad) => rad.includes('utegips')));

  const torrTra = ytbehandlingFor('torrt', 'tra');
  assert.equal(torrTra.kort, 'Elförzinkad eller fosfaterad');
  assert.equal(torrTra.klass, 'C1');
  assert.equal(ytbehandlingFor('torrt', 'stal-tunn').kort, 'Fosfaterad');
});

test('rådet om tak står på varje svar, och skruvavståndet är c 200 och c 300', () => {
  for (const regel of ['tra', 'stal-tunn', 'stal-tjock']) {
    const r = svar({ regel });
    assert.ok(r.gorInteDetHar.some((rad) => rad.includes('tak')), `${regel} saknar takrådet`);
    assert.ok(r.skruvavstandText.includes('c 200') && r.skruvavstandText.includes('c 300'));
  }
});

test('närmast över tar första längden som räcker', () => {
  assert.equal(narmastOver(32.5), 35);
  assert.equal(narmastOver(25), 25);
  assert.equal(narmastOver(22.5), 25);
  assert.equal(narmastOver(45), 45);
  assert.equal(narmastOver(50), 51);
  assert.equal(langdrad(fall()).langdMm, 41);
});

test('ogiltig indata ger fel på fältet', () => {
  const r = raknaGipsskruv({ ...STANDARD, skiva: '13' });
  assert.equal(r.status, 'ogiltig');
  assert.ok(r.fel.skiva);

  const lag = raknaGipsskruv({ ...STANDARD, lag: 3 });
  assert.equal(lag.status, 'ogiltig');
  assert.ok(lag.fel.lag);

  const miljo = raknaGipsskruv({ ...STANDARD, miljo: 'bastu' });
  assert.equal(miljo.status, 'ogiltig');
  assert.ok(miljo.fel.miljo);
});

test('tolkaQuery fyller på med standard och tål komma i skivan', () => {
  const tom = tolkaQuery(new URLSearchParams(''));
  assert.equal(tom.harIndata, false);
  assert.deepEqual(tom.indata, STANDARD);

  const hel = tolkaQuery(new URLSearchParams('skiva=12,5&lag=2&regel=stal-tjock&fog=ja&miljo=vatrum'));
  assert.equal(hel.harIndata, true);
  assert.deepEqual(hel.indata, {
    skiva: '12.5',
    lag: 2,
    regel: 'stal-tjock',
    fogtatning: true,
    miljo: 'vatrum',
  });

  const skrap = tolkaQuery(new URLSearchParams('skiva=tjock&lag=sju&regel=betong&miljo=rymden&fog=kanske'));
  assert.equal(skrap.indata.skiva, STANDARD.skiva);
  assert.equal(skrap.indata.lag, STANDARD.lag);
  assert.equal(skrap.indata.regel, STANDARD.regel);
  assert.equal(skrap.indata.miljo, STANDARD.miljo);
  assert.equal(skrap.indata.fogtatning, false);
});
