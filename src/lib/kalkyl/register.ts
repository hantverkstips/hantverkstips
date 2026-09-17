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
   * kalkylator som anger antingen en av pelarna eller en kategori i pelaren.
   *
   * Fältet blev en lista 2026-09-17 med elkostnadskalkylatorn, som hör hemma i
   * både El och energi och Fukt: den räknar på vilken maskin som helst, men
   * frågan ställs oftast om en avfuktare.
   */
  pelare?: readonly string[];
}

export const KALKYLATORER: Kalkylator[] = [
  {
    slug: 'daggpunkt',
    namn: 'Blir väggen våt? Räkna ut daggpunkten',
    rad: 'Temperatur, luftfuktighet och kallaste ytan ger kondensrisken.',
    sasong: [11, 2],
    pelare: ['fukt'],
  },
  {
    slug: 'avfuktare',
    namn: 'Hur stor avfuktare behöver du?',
    rad: 'Yta, takhöjd och fuktnivå ger liter per dygn, och maskinerna som klarar det.',
    sasong: [8, 11],
    kategori: 'luftavfuktare',
    pelare: ['fukt'],
  },
  {
    slug: 'elkostnad',
    namn: 'Vad kostar maskinen i el?',
    rad: 'Effekt, gångtid och elpris ger kilowattimmar och kronor.',
    sasong: [10, 3],
    pelare: ['el', 'fukt'],
  },
  {
    slug: 'innervagg',
    namn: 'Räkna reglar, gips och skruv till väggen',
    rad: 'Längd, höjd och regelavstånd ger virke, skivor, skruv och ull.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'gipsplugg',
    namn: 'Vad håller i gipsväggen?',
    rad: 'Vikt, skivtjocklek och antal punkter ger plugg, regel eller kortling.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'gipsskruv',
    namn: 'Vilken gipsskruv ska du ha?',
    rad: 'Skivtjocklek, antal lag och regel ger längd, gänga och spets.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'kvadratmeter',
    namn: 'Räkna ut kvadratmeter och åtgång',
    rad: 'Mått, dörrar och fönster ger kvadratmeter, färg, tapetrullar och spill.',
    sasong: [1, 12],
    pelare: ['golv', 'inomhus', 'kok'],
  },
  {
    slug: 'bygglov-altan',
    namn: 'Behöver altanen bygglov?',
    rad: 'Höjd, avstånd och detaljplan ger svaret med lagrum.',
    sasong: [2, 6],
    pelare: ['altan'],
  },
  {
    slug: 'altan',
    namn: 'Räkna trall, reglar och plintar',
    rad: 'Yta, riktning och regeldimension ger trall, reglar, plintar och skruv.',
    sasong: [3, 6],
    pelare: ['altan'],
  },
  {
    slug: 'mala-ute',
    namn: 'Kan du måla ute i dag?',
    rad: 'Temperatur, luftfuktighet, natt och klockslag ger om färgen hinner torka före daggen.',
    sasong: [4, 10],
    pelare: ['fasad', 'altan'],
  },
];

export function hittaKalkylator(slug: string): Kalkylator | undefined {
  return KALKYLATORER.find((k) => k.slug === slug);
}
