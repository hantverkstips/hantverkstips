import type { IkonNamn } from '../components/ui/Ikon.astro';

/**
 * Register över pelare (ämnesområden). Enda källan för slug och namn.
 * content.config.ts bygger sitt enum härifrån, layouten bygger meny och sidfot härifrån.
 * Ordningen är den som visas i huvudmenyn, i ämnesraden på startsidan och i sidfoten.
 * Se docs/INNEHALLSARKITEKTUR.md avsnitt 1 och 4.
 *
 * rad är kortets enda mening i ämnesraden (Amnesrad.astro), högst åtta ord.
 * Chefredaktören skriver den och äger ordvalet.
 *
 * En pelare i registret har inte automatiskt en sida. Hubsidan /[pelare]/ finns bara
 * när det finns en fil i src/content/pelare/ med samma slug som inte är utkast, och
 * bara publicerade hubbar hamnar i menyn.
 *
 * Inomhus lades till 2026-09-16 (docs/SOKORDSANALYS.md avsnitt 5) med en egen
 * skruvikon i spriten.
 */
export const PELARE = [
  {
    slug: 'fukt',
    namn: 'Fukt och inomhusklimat',
    kort: 'Fukt',
    ikon: 'fukt',
    rad: 'Hitta varifrån vattnet kommer innan du köper något.',
  },
  {
    slug: 'inomhus',
    namn: 'Inomhus och montering',
    kort: 'Inomhus',
    ikon: 'inomhus',
    rad: 'Rätt skruv och plugg för varje vägg.',
  },
  {
    slug: 'altan',
    namn: 'Altan och uteplats',
    kort: 'Altan',
    ikon: 'altan',
    rad: 'Bygg ett trädäck som håller i tjugo år.',
  },
  {
    slug: 'tak',
    namn: 'Tak',
    kort: 'Tak',
    ikon: 'tak',
    rad: 'Hitta läckan, och veta när taket ska bytas.',
  },
  {
    slug: 'grund',
    namn: 'Grund och källare',
    kort: 'Grund',
    ikon: 'grund',
    rad: 'Krypgrund och källarvägg utan fukt och sättningar.',
  },
  {
    slug: 'isolering',
    namn: 'Isolering och energi',
    kort: 'Isolering',
    ikon: 'isolering',
    rad: 'Isolera rätt och sänk elräkningen utan mögel.',
  },
  {
    slug: 'verktyg',
    namn: 'Verktyg och maskiner',
    kort: 'Verktyg',
    ikon: 'verktyg',
    rad: 'Testade maskiner, med egna mätningar och ärliga nackdelar.',
  },
  {
    slug: 'el',
    namn: 'El och säkerhet',
    kort: 'El',
    ikon: 'el',
    rad: 'Det en lekman får göra själv, och inte.',
  },
] as const satisfies readonly { slug: string; namn: string; kort: string; ikon: IkonNamn; rad: string }[];

export type PelareSlug = (typeof PELARE)[number]['slug'];

export const PELARE_SLUGS = PELARE.map((p) => p.slug) as [PelareSlug, ...PelareSlug[]];

/**
 * Högst så många hubbar i huvudmenyn, före Ämnen, Guider, Räkna själv och
 * Så testar vi. Sänkt från fem till tre 2026-09-16: med två nya poster i menyn
 * blev sju det som får plats vid 1024 px, och resten av pelarna finns under
 * Ämnen. Se docs/DESIGN.md avsnitt 5 och designbriefen avsnitt 7.
 */
export const MAX_HUBBAR_I_MENY = 3;

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
