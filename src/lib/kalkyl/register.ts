/**
 * Register över kalkylatorer. Sidfoten, /rakna/ och Verktygskort läser listan.
 * En ny kalkylator läggs till här och som src/pages/rakna/[slug].astro.
 */
export interface Kalkylator {
  slug: string;
  namn: string;
  rad: string;
  /**
   * Månad från och till, 1 till 12. Säsongen som kalkylatorn hör till, underlag
   * för chefredaktörens val av "Just nu" på startsidan. Startsidan läser inte
   * fältet själv sedan säsongsblocket togs bort 2026-09-16.
   */
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
