/**
 * Register över kalkylatorer. Sidfoten, /rakna/ och Verktygskort läser listan.
 * En ny kalkylator läggs till här och som src/pages/rakna/[slug].astro.
 */
export interface Kalkylator {
  slug: string;
  namn: string;
  rad: string;
  /** Månad från och till, 1 till 12. Styr vilken startsidan visar. */
  sasong: [number, number];
  kategori?: string;
}

export const KALKYLATORER: Kalkylator[] = [
  {
    slug: 'avfuktare',
    namn: 'Hur stor avfuktare behöver du?',
    rad: 'Yta, takhöjd och fuktnivå ger liter per dygn, och maskinerna som klarar det.',
    sasong: [8, 11],
    kategori: 'luftavfuktare',
  },
];

export function hittaKalkylator(slug: string): Kalkylator | undefined {
  return KALKYLATORER.find((k) => k.slug === slug);
}

/** Första kalkylatorn vars säsong täcker månaden, annars den första i listan. */
export function sasongensKalkylator(manad: number): Kalkylator {
  const forsta = KALKYLATORER[0];
  if (!forsta) throw new Error('[register] KALKYLATORER är tom');
  const trafF = KALKYLATORER.find((k) => {
    const [fran, till] = k.sasong;
    // Säsonger som går över årsskiftet (12 till 2) hanteras också.
    return fran <= till ? manad >= fran && manad <= till : manad >= fran || manad <= till;
  });
  return trafF ?? forsta;
}
