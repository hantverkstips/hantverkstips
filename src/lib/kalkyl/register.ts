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
    slug: 'dranering',
    namn: 'Vad kostar det att dränera om huset?',
    rad: 'Mått, djup och tejptest ger pris per löpmeter och om du behöver gräva.',
    /* Dräneringsjobb upphandlas på våren och utförs innan tjälen kommer, så
       frågan ställs från snösmältningen till oktober. */
    sasong: [3, 10],
    pelare: ['grund', 'fukt'],
  },
  {
    slug: 'kallare',
    namn: 'Vad är det för fukt i källaren?',
    rad: 'Vad du ser, tejptestet och hygrometern ger diagnosen och nästa steg.',
    /* "fukt i källaren" toppar i september (880 sökningar) och bottnar i
       december till januari (170), enligt docs/SOKORDSANALYS.md. Kondensen i en
       uppvärmd källare är dessutom ett sommarproblem, juli till september enligt
       guiden, så frågan ställs från högsommaren till dess källaren blir kall. */
    sasong: [7, 10],
    pelare: ['fukt', 'grund'],
  },
  {
    slug: 'rotavdrag',
    namn: 'Hur mycket blir rotavdraget?',
    rad: 'Arbetskostnad, ägare och tak ger avdraget och vad du betalar.',
    /* Frågan ställs hela året, men toppen är december: det är dagen du betalar
       fakturan som avgör vilket års tak avdraget hamnar på, så den som vill nå
       upp till taket betalar före nyår. Se ARET i src/lib/kalkyl/rotavdrag.ts. */
    sasong: [11, 1],
    /* Fyra pelare, inte åtta. Christians beslut 2026-09-20: rot gäller förvisso
       arbete i varje pelare där man anlitar någon, men ett verktyg som står i
       åtta hubbars grupp Räkna står ingenstans. De fyra är de där notan oftast
       är stor nog att taket biter: grunden, golvet, köket och badrummet, och
       el och energi. */
    pelare: ['grund', 'golv', 'kok', 'el'],
  },
  {
    slug: 'trappa',
    namn: 'Räkna steghöjd och stegdjup till trappan',
    rad: 'Våningshöjden ger antal steg, steghöjd, stegdjup och lutning.',
    /* Innetrappan byggs när det är kallt ute och utetrappan innan hösten, och
       "bygga trappa" toppar i september enligt docs/SOKORDSANALYS.md. */
    sasong: [8, 10],
    pelare: ['golv'],
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
