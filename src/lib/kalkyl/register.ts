/**
 * Register över kalkylatorer. Sidfoten, /rakna/, /amnen/, hubbens grupp Räkna,
 * Verktygskort och Kalkylator läser listan.
 * En ny kalkylator läggs till här och som src/pages/rakna/[slug].astro.
 * Hela mönstret står i docs/SPEC-SIDMALLAR.md avsnitt 4.7.
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
  /** Kategori i src/content/kategorier/, när räkningen pekar på produkter. */
  kategori?: string;
  /**
   * Pelare i src/lib/pelare.ts. Sätts när kalkylatorn hör hemma i ett ämne utan
   * att peka på en produktkategori. Hubbens grupp Räkna och /amnen/ visar en
   * kalkylator som anger antingen pelaren eller en kategori i pelaren.
   */
  pelare?: string;
}

export const KALKYLATORER: Kalkylator[] = [
  {
    slug: 'daggpunkt',
    namn: 'Blir väggen våt? Räkna ut daggpunkten',
    rad: 'Temperatur, luftfuktighet och kallaste ytan ger kondensrisken.',
    sasong: [11, 2],
    pelare: 'fukt',
  },
  {
    slug: 'avfuktare',
    namn: 'Hur stor avfuktare behöver du?',
    rad: 'Yta, takhöjd och fuktnivå ger liter per dygn, och maskinerna som klarar det.',
    sasong: [8, 11],
    kategori: 'luftavfuktare',
    pelare: 'fukt',
  },
];

export function hittaKalkylator(slug: string): Kalkylator | undefined {
  return KALKYLATORER.find((k) => k.slug === slug);
}
