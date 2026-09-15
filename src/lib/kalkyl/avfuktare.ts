/**
 * Avfuktarkalkylatorn. Ren funktion utan importer från Astro, testbar utan bygge.
 * Sidan /rakna/avfuktare/ skickar formuläret som GET och räknar på servern,
 * så ingen rad av den här filen når klienten.
 */

export type Fuktniva = 'medel' | 'hog' | 'mycket_hog';

export interface AvfuktareIndata {
  ytaKvm: number;
  takhojdM: number;
  fuktniva: Fuktniva;
  uppvarmt: boolean;
}

export type AvfuktareResultat =
  | { status: 'ok'; literPerDygn: number; volymM3: number; typ: 'kondens' | 'sorption' }
  | { status: 'ogiltig'; fel: Partial<Record<keyof AvfuktareIndata, string>> }
  | { status: 'utanfor'; text: string };

export const STANDARD: AvfuktareIndata = { ytaKvm: 40, takhojdM: 2.4, fuktniva: 'hog', uppvarmt: true };

export const GRANSER = { ytaKvm: [5, 300], takhojdM: [1.8, 4] } as const;

export const FUKTNIVAER: { varde: Fuktniva; etikett: string }[] = [
  { varde: 'medel', etikett: '60 till 70 procent, lite unket' },
  { varde: 'hog', etikett: '70 till 80 procent, fuktfläckar och lukt' },
  { varde: 'mycket_hog', etikett: 'över 80 procent, synligt mögel' },
];

export function fuktnivaEtikett(n: Fuktniva): string {
  return FUKTNIVAER.find((f) => f.varde === n)?.etikett ?? n;
}

function arFuktniva(v: string | null): v is Fuktniva {
  return v === 'medel' || v === 'hog' || v === 'mycket_hog';
}

/** Decimalkomma accepteras: '2,4' blir 2.4. Tomt eller skräp ger NaN. */
function tillTal(v: string | null): number {
  if (v === null) return NaN;
  const rensad = v.trim().replace(',', '.');
  if (rensad === '') return NaN;
  return Number(rensad);
}

export function tolkaQuery(q: URLSearchParams): { indata: AvfuktareIndata; harIndata: boolean } {
  const harIndata = q.has('yta') || q.has('takhojd') || q.has('fukt') || q.has('uppvarmt');

  const yta = tillTal(q.get('yta'));
  const takhojd = tillTal(q.get('takhojd'));
  const fukt = q.get('fukt');

  return {
    harIndata,
    indata: {
      ytaKvm: q.has('yta') ? yta : STANDARD.ytaKvm,
      takhojdM: q.has('takhojd') ? takhojd : STANDARD.takhojdM,
      fuktniva: arFuktniva(fukt) ? fukt : STANDARD.fuktniva,
      // Kryssrutan skickar bara ett värde när den är ikryssad. Finns indata alls
      // betyder en saknad parameter att läsaren bockade av den.
      uppvarmt: harIndata ? q.get('uppvarmt') === '1' : STANDARD.uppvarmt,
    },
  };
}

export function raknaAvfuktare(i: AvfuktareIndata): AvfuktareResultat {
  const fel: Partial<Record<keyof AvfuktareIndata, string>> = {};
  const [ytaMin, ytaMax] = GRANSER.ytaKvm;
  const [takMin, takMax] = GRANSER.takhojdM;

  if (Number.isFinite(i.ytaKvm) && i.ytaKvm > ytaMax) {
    return {
      status: 'utanfor',
      text: 'Över 300 kvm rekommenderar vi två maskiner eller en fast installation. Läs guiden om krypgrund.',
    };
  }

  if (!Number.isFinite(i.ytaKvm) || i.ytaKvm < ytaMin) {
    fel.ytaKvm = `Ange yta mellan ${ytaMin} och ${ytaMax} kvm`;
  }
  if (!Number.isFinite(i.takhojdM) || i.takhojdM < takMin || i.takhojdM > takMax) {
    fel.takhojdM = `Ange takhöjd mellan ${String(takMin).replace('.', ',')} och ${takMax} m`;
  }
  if (Object.keys(fel).length > 0) return { status: 'ogiltig', fel };

  // PLATSHÅLLARFORMEL. Produktexperten levererar den riktiga med källa innan sidan
  // publiceras. Byt bara konstanterna och den här kommentaren; signaturen behålls.
  const FAKTOR: Record<Fuktniva, number> = { medel: 0.08, hog: 0.1, mycket_hog: 0.13 }; // liter per dygn och m3
  const volymM3 = i.ytaKvm * i.takhojdM;
  const ra = volymM3 * FAKTOR[i.fuktniva] * (i.uppvarmt ? 1 : 1.4);
  const literPerDygn = Math.max(1, Math.ceil(ra));
  const typ = i.uppvarmt ? 'kondens' : 'sorption';

  return { status: 'ok', literPerDygn, volymM3, typ };
}
