import type { IkonNamn } from '../components/ui/Ikon.astro';

/**
 * Register över pelare (ämnesområden). Enda källan för slug och namn.
 * content.config.ts bygger sitt enum härifrån, layouten bygger meny och sidfot härifrån.
 * Ordningen är den som visas i huvudmenyn, i "Börja här" och i sidfoten.
 * Se docs/INNEHALLSARKITEKTUR.md avsnitt 1 och 4.
 *
 * En pelare i registret har inte automatiskt en sida. Hubsidan /[pelare]/ finns bara
 * när det finns en fil i src/content/pelare/ med samma slug som inte är utkast, och
 * bara publicerade hubbar hamnar i menyn.
 *
 * Inomhus lades till 2026-09-16 (docs/SOKORDSANALYS.md avsnitt 5). Ikonen är isolering
 * tills designansvarig ritat en egen i spriten.
 */
export const PELARE = [
  { slug: 'fukt', namn: 'Fukt och inomhusklimat', kort: 'Fukt', ikon: 'fukt' },
  { slug: 'inomhus', namn: 'Inomhus och montering', kort: 'Inomhus', ikon: 'isolering' },
  { slug: 'altan', namn: 'Altan och uteplats', kort: 'Altan', ikon: 'altan' },
  { slug: 'tak', namn: 'Tak', kort: 'Tak', ikon: 'tak' },
  { slug: 'grund', namn: 'Grund och källare', kort: 'Grund', ikon: 'grund' },
  { slug: 'isolering', namn: 'Isolering och energi', kort: 'Isolering', ikon: 'isolering' },
  { slug: 'verktyg', namn: 'Verktyg och maskiner', kort: 'Verktyg', ikon: 'verktyg' },
  { slug: 'el', namn: 'El och säkerhet', kort: 'El', ikon: 'el' },
] as const satisfies readonly { slug: string; namn: string; kort: string; ikon: IkonNamn }[];

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
