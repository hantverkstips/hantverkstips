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
    rad: 'Temperaturen inne och hygrometerns tal räcker, och väggens temperatur gissar du ur en lista om du inte mätt. Svaret säger om det blir kondens eller mögel.',
    sasong: [11, 2],
    pelare: ['fukt'],
  },
  {
    slug: 'avfuktare',
    namn: 'Hur stor avfuktare behöver du?',
    rad: 'Hur stor maskinen ska vara beror på rummets storlek och hur fuktigt det är. Här får du svaret i liter per dygn, och maskinerna som klarar det.',
    sasong: [8, 11],
    kategori: 'luftavfuktare',
    pelare: ['fukt'],
  },
  {
    slug: 'elkostnad',
    namn: 'Vad kostar maskinen i el?',
    rad: 'Effekten, gångtiden och ditt elpris räcker för att se vad avfuktaren, värmefläkten eller frysen kostar per månad och år.',
    sasong: [10, 3],
    pelare: ['el', 'fukt'],
  },
  {
    slug: 'innervagg',
    namn: 'Räkna reglar, gips och skruv till väggen',
    rad: 'Väggens längd och höjd räcker för en inköpslista med virke, skivor, skruv och ull, spillet inräknat.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'gipsplugg',
    namn: 'Vad håller i gipsväggen?',
    rad: 'Väg saken och säg hur tjock skivan är, så får du veta om en plugg räcker eller om den ska skruvas i regeln eller i en träbit bakom gipset.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'gipsskruv',
    namn: 'Vilken gipsskruv ska du ha?',
    rad: 'Säg hur tjock skivan är, hur många lag du sätter och om regeln bakom är av trä eller stål. Svaret är en skruvlängd som går att köpa, med rätt gänga.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'kvadratmeter',
    namn: 'Räkna ut kvadratmeter och vad som går åt',
    rad: 'Rummets tre mått räcker. Du får kvadratmeter med dörren och fönstret avdragna, och hur mycket färg, tapet eller golv du ska köpa.',
    sasong: [1, 12],
    pelare: ['golv', 'inomhus', 'kok'],
  },
  {
    slug: 'bygglov-altan',
    namn: 'Behöver altanen bygglov?',
    rad: 'Fyll i hur högt golvet ligger och hur nära huset altanen står, så får du ett ja eller nej med paragrafen bakom.',
    sasong: [2, 6],
    pelare: ['altan'],
  },
  {
    slug: 'altan',
    namn: 'Räkna trall, reglar och plintar',
    rad: 'Skriv in altanens mått, så får du en inköpslista med trall, reglar, plintar och skruv att ta med till bygghandeln.',
    sasong: [3, 6],
    pelare: ['altan'],
  },
  {
    slug: 'dranering',
    namn: 'Vad kostar det att dränera om huset?',
    rad: 'Räkna ut vad grävningen kostar för just din grund, och läs först om du behöver gräva över huvud taget.',
    /* Dräneringsjobb upphandlas på våren och utförs innan tjälen kommer, så
       frågan ställs från snösmältningen till oktober. */
    sasong: [3, 10],
    pelare: ['grund', 'fukt'],
  },
  {
    slug: 'kallare',
    namn: 'Gå igenom källaren själv och hitta fukten',
    rad: 'Beskriv vad du ser där nere, och jag säger om vattnet kommer ur marken, ur luften eller in genom en otäthet, och vad du gör åt det.',
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
    rad: 'Fyll i vad hantverkaren tar för själva jobbet, så ser du hur mycket som dras av och vad du betalar sedan.',
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
    rad: 'Du mäter våningshöjden, jag räknar ut stegen och säger till om något mått inte håller.',
    /* Innetrappan byggs när det är kallt ute och utetrappan innan hösten, och
       "bygga trappa" toppar i september enligt docs/SOKORDSANALYS.md. */
    sasong: [8, 10],
    pelare: ['golv'],
  },
  {
    slug: 'mala-ute',
    namn: 'Kan du måla ute i dag?',
    rad: 'Skriv in dagens väder och nattens prognos, så får du veta om färgen hinner torka före daggen och när du senast ska sluta.',
    sasong: [4, 10],
    pelare: ['fasad', 'altan'],
  },
];

export function hittaKalkylator(slug: string): Kalkylator | undefined {
  return KALKYLATORER.find((k) => k.slug === slug);
}
