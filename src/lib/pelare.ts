import type { IkonNamn } from '../components/ui/Ikon.astro';

/**
 * Register över pelare (ämnesområden). Enda källan för slug, namn och ordning.
 * content.config.ts bygger sitt enum härifrån, layouten bygger sidhuvudets
 * ämnesrad och sidfoten härifrån, startsidan och /amnen/ sina kort.
 *
 * Strukturen gjordes om 2026-09-17 efter Christians krav: kategorierna ska
 * täcka en fastighet från tak till grund, både utsida och insida, och vara
 * byggda för det vi fyller på framåt, inte för det som råkar finnas i dag.
 * Tre grupper, i den ordning de visas:
 *   ute    tak, fasad, altan, grund       (uppifrån och ner)
 *   inne   väggar, golv, kök och bad
 *   huset  tvärgående ämnen: fukt, el och energi, verktyg
 *
 * rad är kortets enda mening i ämnesraden och på /amnen/, högst åtta ord.
 * En pelare i registret har inte automatiskt en sida. Hubsidan /[pelare]/ finns
 * bara när det finns en fil i src/content/pelare/ med samma slug som inte är
 * utkast. Slugen är permanent, den står i varje artikeladress; namnet får ändras.
 */
export const PELAREGRUPPER = [
  { slug: 'ute', namn: 'Utsidan', rad: 'Från taknocken ner till grunden.' },
  { slug: 'inne', namn: 'Insidan', rad: 'Väggar, golv, kök och badrum.' },
  { slug: 'huset', namn: 'Hela huset', rad: 'Det som går genom alla rum.' },
] as const;

export type PelareGrupp = (typeof PELAREGRUPPER)[number]['slug'];

export const PELARE = [
  {
    slug: 'tak',
    namn: 'Tak och vind',
    kort: 'Tak',
    ikon: 'tak',
    grupp: 'ute',
    rad: 'Yttertak, hängrännor, vind och läckor.',
  },
  {
    slug: 'fasad',
    namn: 'Fasad, fönster och dörrar',
    kort: 'Fasad',
    ikon: 'fasad',
    grupp: 'ute',
    rad: 'Panel, puts, fönster, dörrar och drevning.',
  },
  {
    slug: 'altan',
    namn: 'Altan och trädgård',
    kort: 'Altan',
    ikon: 'altan',
    grupp: 'ute',
    rad: 'Altan, trädäck, staket och bygglov.',
  },
  {
    slug: 'grund',
    namn: 'Grund, källare och dränering',
    kort: 'Grund',
    ikon: 'grund',
    grupp: 'ute',
    rad: 'Krypgrund, källarvägg, dränering och sättningar.',
  },
  {
    slug: 'inomhus',
    namn: 'Väggar och innertak',
    kort: 'Väggar',
    ikon: 'inomhus',
    grupp: 'inne',
    rad: 'Reglar, gips, infästning och målning inne.',
  },
  {
    slug: 'golv',
    namn: 'Golv och trappor',
    kort: 'Golv',
    ikon: 'golv',
    grupp: 'inne',
    rad: 'Trägolv, klinker, laminat och trappor.',
  },
  {
    slug: 'kok',
    namn: 'Kök och badrum',
    kort: 'Kök och bad',
    ikon: 'kok',
    grupp: 'inne',
    rad: 'Bänkskivor, våtrum, kakel och vitvaror.',
  },
  {
    slug: 'fukt',
    namn: 'Fukt och inomhusklimat',
    kort: 'Fukt',
    ikon: 'fukt',
    grupp: 'huset',
    rad: 'Luftfuktighet, avfuktare, mögel och ventilation.',
  },
  {
    slug: 'el',
    namn: 'El, värme och energi',
    kort: 'El och energi',
    ikon: 'el',
    grupp: 'huset',
    rad: 'Vad du får göra själv, värme och isolering.',
  },
  {
    slug: 'verktyg',
    namn: 'Verktyg och maskiner',
    kort: 'Verktyg',
    ikon: 'verktyg',
    grupp: 'huset',
    rad: 'Granskade maskiner, med ärliga nackdelar.',
  },
] as const satisfies readonly {
  slug: string;
  namn: string;
  kort: string;
  ikon: IkonNamn;
  grupp: PelareGrupp;
  rad: string;
}[];

export type PelareSlug = (typeof PELARE)[number]['slug'];

export const PELARE_SLUGS = PELARE.map((p) => p.slug) as [PelareSlug, ...PelareSlug[]];

/**
 * Sökvägar i roten som varken en pelare eller en kategori får använda.
 * Kontrolleras vid bygget i src/pages/[rot]/index.astro.
 */
export const RESERVERADE_ROTSLUGS = [
  'tester',
  'jamforelser',
  'rakna',
  // Översiktssidorna, src/pages/amnen/ och src/pages/guider/. Statiska mappar
  // vinner över [rot], så en pelare eller kategori med den slugen hade blivit
  // en sida som aldrig byggs.
  'amnen',
  'guider',
  'om',
  'forfattare',
  'go',
  'admin',
  'fonts',
  'brand',
  '404',
] as const;

export function hittaPelare(slug: string) {
  return PELARE.find((p) => p.slug === slug);
}

export function arPelare(slug: string): slug is PelareSlug {
  return PELARE.some((p) => p.slug === slug);
}

export function hittaGrupp(slug: PelareGrupp) {
  return PELAREGRUPPER.find((g) => g.slug === slug)!;
}
