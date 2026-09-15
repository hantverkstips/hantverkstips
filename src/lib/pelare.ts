/**
 * Register över pelare (ämnesområden). Enda källan för slug och namn.
 * content.config.ts bygger sitt enum härifrån, layouten bygger meny och sidfot härifrån.
 * Ordningen är den som visas i "Börja här" och sidfoten. Se docs/INNEHALLSARKITEKTUR.md avsnitt 1.
 *
 * En pelare i registret har inte automatiskt en sida. Hubsidan /[pelare]/ finns bara
 * när det finns en fil i src/content/pelare/ med samma slug som inte är utkast.
 */
export const PELARE = [
  { slug: 'fukt', namn: 'Fukt och inomhusklimat', kort: 'Fukt', ikon: 'fukt' },
  { slug: 'altan', namn: 'Altan och uteplats', kort: 'Altan', ikon: 'altan' },
  { slug: 'tak', namn: 'Tak', kort: 'Tak', ikon: 'tak' },
  { slug: 'grund', namn: 'Grund och källare', kort: 'Grund', ikon: 'grund' },
  { slug: 'isolering', namn: 'Isolering och energi', kort: 'Isolering', ikon: 'isolering' },
  { slug: 'verktyg', namn: 'Verktyg och maskiner', kort: 'Verktyg', ikon: 'verktyg' },
  { slug: 'el', namn: 'El och säkerhet', kort: 'El', ikon: 'el' },
] as const;

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
