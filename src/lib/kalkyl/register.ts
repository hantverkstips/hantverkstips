/**
 * Register över kalkylatorer. Sidfoten, /rakna/, /amnen/, hubbens grupp Räkna,
 * Verktygskort och Kalkylator läser listan.
 * En ny kalkylator läggs till här och som src/pages/rakna/[slug].astro.
 * Hela mönstret står i docs/SPEC-SIDMALLAR.md avsnitt 4.7.
 */
import type { PlatsSlug } from '../plats';

export interface Kalkylator {
  slug: string;
  namn: string;
  rad: string;
  /**
   * Svarets form i två till fyra ord, gemener, utan punkt: "inköpslista", "ja, nej
   * eller anmälan". Står i räkna-indexets kompakta lista och i startsidans
   * talkort när räknaren inte svarar med ett tal (src/lib/kalkyl/korttal.ts).
   */
  svar: string;
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
  /**
   * Plats i huset, src/lib/plats.ts. Gäller i en pelare som har platsregister,
   * och i dag bara Fukt. Utelämnad: Hela huset.
   */
  plats?: PlatsSlug;
}

export const KALKYLATORER: Kalkylator[] = [
  {
    slug: 'daggpunkt',
    svar: 'grader och mögelrisk', // register.daggpunkt.svar
    namn: 'Blir väggen våt? Räkna ut daggpunkten',
    rad: 'Temperaturen inne och hygrometerns tal räcker, och väggens temperatur gissar du ur en lista om du inte mätt. Svaret säger om det blir kondens eller mögel.',
    sasong: [11, 2],
    pelare: ['fukt'],
    plats: 'luften',
  },
  {
    // Spec: docs/briefer/spec-kalkyl-fuktkvot-2026-10-04.md avsnitt 5. Utan plats: Hela huset på hubben.
    slug: 'fuktkvot',
    svar: 'TEXT SAKNAS', // register.fuktkvot.svar
    namn: 'TEXT SAKNAS', // register.fuktkvot.namn
    rad: 'TEXT SAKNAS', // register.fuktkvot.rad
    sasong: [9, 10],
    pelare: ['fukt'],
  },
  {
    slug: 'avfuktare',
    svar: 'liter per dygn', // register.avfuktare.svar
    namn: 'Hur stor avfuktare behöver du?',
    rad: 'Hur stor maskinen ska vara beror på rummets storlek och hur fuktigt det är. Här får du svaret i liter per dygn, och maskinerna som klarar det.',
    sasong: [8, 11],
    kategori: 'luftavfuktare',
    pelare: ['fukt'],
  },
  {
    slug: 'elkostnad',
    svar: 'kronor per månad', // register.elkostnad.svar
    namn: 'Vad kostar maskinen i el?',
    rad: 'Effekten, gångtiden och ditt elpris räcker för att se vad avfuktaren, värmefläkten eller frysen kostar per månad och år.',
    sasong: [10, 3],
    pelare: ['el', 'fukt'],
  },
  {
    slug: 'u-varde',
    svar: 'värmeförlust och besparing', // register.u-varde.svar
    namn: 'Beräkna U-värde och vad mer isolering sparar',
    rad: 'Fyll i vad vinden eller väggen består av, så ser du om den klarar Boverkets krav och hur många kronor om året du sparar genom att isolera mer.',
    /* Eldningssäsongen. "tilläggsisolera vind" toppar i februari enligt
       docs/SOKORDSANALYS.md, och frågan om vad isoleringen sparar ställs när
       elräkningen kommer. */
    sasong: [10, 3],
    pelare: ['el'],
  },
  {
    slug: 'innervagg',
    svar: 'inköpslista', // register.innervagg.svar
    namn: 'Räkna reglar, gips och skruv till väggen',
    rad: 'Väggens längd och höjd räcker för en inköpslista med virke, skivor, skruv och ull, spillet inräknat.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'gipsplugg',
    svar: 'plugg eller regel', // register.gipsplugg.svar
    namn: 'Vad håller i gipsväggen?',
    rad: 'Väg saken och säg hur tjock skivan är, så får du veta om en plugg räcker eller om den ska skruvas i regeln eller i en träbit bakom gipset.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'gipsskruv',
    svar: 'längd och gänga', // register.gipsskruv.svar
    namn: 'Vilken gipsskruv ska du ha?',
    rad: 'Säg hur tjock skivan är, hur många lag du sätter och om regeln bakom är av trä eller stål. Svaret är en skruvlängd som går att köpa, med rätt gänga.',
    sasong: [1, 12],
    pelare: ['inomhus'],
  },
  {
    slug: 'kvadratmeter',
    svar: 'färg, tapet eller golv', // register.kvadratmeter.svar
    namn: 'Räkna ut kvadratmeter och vad som går åt',
    rad: 'Rummets tre mått räcker. Du får kvadratmeter med dörren och fönstret avdragna, och hur mycket färg, tapet eller golv du ska köpa.',
    sasong: [1, 12],
    pelare: ['golv', 'inomhus', 'kok'],
  },
  {
    slug: 'bygglov-altan',
    svar: 'lov eller grannens underskrift', // register.bygglov-altan.svar
    namn: 'Behöver altanen bygglov?',
    rad: 'Säg hur hög altanen är och hur nära huset och tomtgränsen den står. Svaret visar om den behöver bygglov eller grannens underskrift, med paragrafen bakom.',
    sasong: [2, 6],
    pelare: ['altan'],
  },
  {
    slug: 'grannemedgivande',
    svar: 'svar och blankett', // register.grannemedgivande.svar
    namn: 'Behöver du grannemedgivande?', // bär "grannemedgivande"; ankartext i artiklarna
    rad: 'Se om grannen måste skriva under, och skriv ut ett färdigt medgivande.', // högst tolv ord, en mening med verb
    /* Byggsäsongen. "grannemedgivande" toppar i mars enligt
       docs/data/keyword-stats-2026-09-20-sorterad.tsv. */
    sasong: [2, 6],
    pelare: ['altan'],
  },
  {
    slug: 'altan',
    svar: 'virke och plintar', // register.altan.svar
    namn: 'Räkna trall, reglar och plintar',
    rad: 'Skriv in altanens mått, så får du en inköpslista med trall, reglar, plintar och skruv att ta med till bygghandeln.',
    sasong: [3, 6],
    pelare: ['altan'],
  },
  {
    slug: 'dranering',
    svar: 'prisspann i kronor', // register.dranering.svar
    namn: 'Vad kostar det att dränera om huset?',
    rad: 'Räkna ut vad grävningen kostar för just din grund, och läs först om du behöver gräva över huvud taget.',
    /* Dräneringsjobb upphandlas på våren och utförs innan tjälen kommer, så
       frågan ställs från snösmältningen till oktober. */
    sasong: [3, 10],
    pelare: ['grund', 'fukt'],
    plats: 'kallare',
  },
  {
    slug: 'kallare',
    svar: 'var fukten kommer ifrån', // register.kallare.svar
    namn: 'Gå igenom källaren själv och hitta fukten',
    rad: 'Beskriv vad du ser där nere, och jag säger om vattnet kommer ur marken, ur luften eller in genom en otäthet, och vad du gör åt det.',
    /* "fukt i källaren" toppar i september (880 sökningar) och bottnar i
       december till januari (170), enligt docs/SOKORDSANALYS.md. Kondensen i en
       uppvärmd källare är dessutom ett sommarproblem, juli till september enligt
       guiden, så frågan ställs från högsommaren till dess källaren blir kall. */
    sasong: [7, 10],
    pelare: ['fukt', 'grund'],
    plats: 'kallare',
  },
  {
    slug: 'rotavdrag',
    svar: 'avdrag i kronor', // register.rotavdrag.svar
    namn: 'Hur mycket blir rotavdraget?',
    rad: 'Fyll i vad hantverkaren tar för själva jobbet, så ser du hur mycket som dras av och vad du betalar sedan.',
    /* Frågan ställs hela året, men toppen är december: det är dagen du betalar
       fakturan som avgör vilket års tak avdraget hamnar på, så den som vill nå
       upp till taket betalar före nyår. Se ARET i src/lib/kalkyl/rotavdrag.ts. */
    sasong: [11, 1],
    /* Fem pelare, inte åtta. Christians beslut 2026-09-20: rot gäller förvisso
       arbete i varje pelare där man anlitar någon, men ett verktyg som står i
       åtta hubbars grupp Räkna står ingenstans. De som valdes är de där notan
       oftast är stor nog att taket biter: grunden, golvet, köket och badrummet,
       och el och energi. Badrummet låg då i kok och flyttade till egen pelare
       2026-09-28 (docs/SOKORDSANALYS.md 8.9 beslut 2); beslutet följde med.
       Tak läggs inte till: takbytesräknaren räknar rot själv. */
    pelare: ['grund', 'golv', 'kok', 'badrum', 'el'],
  },
  {
    slug: 'trappa',
    svar: 'mått på varje steg', // register.trappa.svar
    namn: 'Räkna steghöjd och stegdjup till trappan',
    rad: 'Du mäter våningshöjden, jag räknar ut stegen och säger till om något mått inte håller.',
    /* Innetrappan byggs när det är kallt ute och utetrappan innan hösten, och
       "bygga trappa" toppar i september enligt docs/SOKORDSANALYS.md. */
    sasong: [8, 10],
    pelare: ['golv'],
  },
  {
    slug: 'mala-ute',
    svar: 'när du ska sluta', // register.mala-ute.svar
    namn: 'Kan du måla ute i dag?',
    rad: 'Skriv in dagens väder och nattens prognos, så får du veta om färgen hinner torka före daggen och när du senast ska sluta.',
    sasong: [4, 10],
    pelare: ['fasad', 'altan'],
  },
  {
    slug: 'badrum-kostnad',
    svar: 'pris post för post', // register.badrum-kostnad.svar
    /* Bär "renovera badrum" och "kostar"; ankartext i korten och hubben. */
    namn: 'Vad kostar det att renovera badrummet?',
    rad: 'Skriv in golvytan och hur påkostat det ska bli, så får du priset post för post, med arbete och material för sig, och vad du betalar efter rotavdraget.',
    /* "renovera badrum kostnad" toppar september till oktober (SOKORDSANALYS 8.2),
       och badrummen planeras över vintern. raknare.md punkt 1. */
    sasong: [9, 3],
    pelare: ['badrum'],
  },
  {
    slug: 'kok-kostnad',
    svar: 'pris efter rotavdrag', // register.kok-kostnad.svar
    /* Bär "renovera kök" och "kostar"; ankartext i korten och hubben. */
    namn: 'Vad kostar det att renovera köket?',
    rad: 'Välj om luckorna, bänkskivan eller hela köket ska bytas, så får du priset med arbete och material för sig och ser vad rotavdraget drar av.',
    /* "renovera kök kostnad" toppar i september (SOKORDSANALYS 8.2),
       och köken planeras över vintern. kok-4.md, Publiceringen. */
    sasong: [9, 3],
    pelare: ['kok'],
  },
  {
    slug: 'takbyte',
    svar: 'takyta och pris', // register.takbyte.svar
    /* Bär "byta tak" och "kostar"; ankartext i korten och hubben. */
    namn: 'Räkna ut vad det kostar att byta tak',
    rad: 'Skriv in husets mått och takvinkel, så räknar jag ut takytan och vad ett nytt tak kostar efter rotavdraget.',
    /* Tak byts mellan vår och höst. SEO, raknare.md "Kontroll efter röstvarvet". */
    sasong: [3, 10],
    pelare: ['tak'],
  },
  {
    slug: 'takavvattning',
    svar: 'rännor och stuprör', // register.takavvattning.svar
    /* Bär "takavvattning"; börjar inte med Hängrännor, som är guidens fras. */
    namn: 'Räkna ut takavvattningen för ditt tak',
    rad: 'Mät huset eller takfallet, så får du hängrännans bredd, stuprörets storlek och hur många rör och krokar som går åt.',
    /* Rännor byts under den frostfria delen av året. SEO, raknare.md. */
    sasong: [4, 9],
    pelare: ['tak'],
  },
  {
    slug: 'fasadyta',
    svar: 'antal burkar färg', // register.fasadyta.svar
    /* Bär SEO:s fras; ankartext i guiden. */
    namn: 'Beräkna fasadyta och färg till huset',
    /* En mening med verb, som till en granne. */
    rad: 'Mät huset runt om och upp till takfoten, så räknar jag ut väggytan med gavlarna och hur många burkar färg den tar.',
    /* Fasaden mäts och färgen köps innan målarsäsongen; mala-ute går från april.
       ANTAGANDE tills SEO har säsongsdata för frasen. */
    sasong: [3, 9],
    pelare: ['fasad'],
  },
  {
    slug: 'kontrollplan',
    svar: 'plan att skriva ut', // register.kontrollplan.svar
    /* Bär ordet kontrollplan; ankartext i artiklarna. */
    namn: 'Skriv ut en kontrollplan för ditt bygge',
    /* En mening med verb, högst tolv ord. */
    rad: 'Välj vad du bygger, så får du planen med kontrollerna ifyllda.',
    /* Samma som bygglov-altan: ansökningarna görs före byggsäsongen. */
    sasong: [2, 6],
    pelare: ['altan', 'grund'],
  },
];

export function hittaKalkylator(slug: string): Kalkylator | undefined {
  return KALKYLATORER.find((k) => k.slug === slug);
}
