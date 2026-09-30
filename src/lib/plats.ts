/**
 * Platsregistret: hubben ordnad efter plats i huset i stället för efter typ.
 * Gäller bara pelare som har ett register här, i dag bara Fukt. Övriga hubbar
 * byggs som förut i fyra grupper. Spec: docs/briefer/spec-fukthubb-plats-2026-09-30.md.
 *
 * Ren TypeScript utan Astro-importer, så att scripts/kontrollera-innehall.ts och
 * scripts/test-plats.mjs kan läsa modulen med node ensamt.
 *
 * namn är H2 på hubben och kommer ur docs/SOKORDSANALYS.md 12.5. Hantverkaren
 * får byta ord i namn; slug är ankaret på sidan och byts inte.
 */
import type { PelareSlug } from './pelare';

export const PLATS_SLUGS = ['kallare', 'krypgrund', 'vind', 'garage', 'badrum', 'fonster', 'luften', 'hela-huset'] as const;
export type PlatsSlug = (typeof PLATS_SLUGS)[number];
export interface Plats {
  slug: PlatsSlug;
  namn: string;
}

/** Platsen en sida utan fältet hamnar under. */
export const STANDARD_PLATS: PlatsSlug = 'hela-huset';

/** Pelare som ordnar hubben efter plats, med platserna i visningsordning. Övriga hubbar har inget register. */
export const PLATSER: Partial<Record<PelareSlug, readonly Plats[]>> = {
  fukt: [
    { slug: 'kallare', namn: 'Källare' },
    { slug: 'krypgrund', namn: 'Krypgrund och grund' },
    { slug: 'vind', namn: 'Vind' },
    { slug: 'garage', namn: 'Garage och förråd' },
    { slug: 'badrum', namn: 'Badrum och tvättstuga' },
    { slug: 'fonster', namn: 'Fönster och väggar' },
    { slug: 'luften', namn: 'Luften inomhus' },
    { slug: 'hela-huset', namn: 'Hela huset' },
  ],
};

export const HUBGRUPPER = ['hitta-felet', 'valj-ratt', 'gor-det-sjalv', 'rakna'] as const;
export type Hubgrupp = (typeof HUBGRUPPER)[number];

export interface Platsrad {
  plats?: PlatsSlug;
  grupp: Hubgrupp;
  /**
   * 0 för kategorisidor, 1 för pelarens egna sidor och räknare, 2 för grannsidor
   * ur andra pelare. Kategorin står först i Välj rätt, och pelarens egna sidor
   * före grannarna i varje grupp.
   */
  forrang: 0 | 1 | 2;
  /** Millisekunder. Räknare 0; stabil sortering behåller registrets ordning. */
  datum: number;
}

/**
 * Ordnar raderna efter platsregistret. Rad utan plats hamnar under STANDARD_PLATS.
 * Plats som inte finns i registret: throw med platsens slug i meddelandet.
 * Inom plats: HUBGRUPPER-ordning, sedan forrang, sedan datum fallande, stabilt.
 * Platser utan rader tas inte med.
 */
export function ordnaEfterPlats<T extends Platsrad>(
  rader: readonly T[],
  platser: readonly Plats[],
): { plats: Plats; rader: T[] }[] {
  const perPlats = new Map<PlatsSlug, T[]>(platser.map((p) => [p.slug, []]));
  for (const rad of rader) {
    const slug = rad.plats ?? STANDARD_PLATS;
    const lista = perPlats.get(slug);
    if (!lista) {
      throw new Error(
        `[plats] Platsen "${slug}" finns inte i registret (${platser.map((p) => p.slug).join(', ')}). Se src/lib/plats.ts`,
      );
    }
    lista.push(rad);
  }

  const ordning = (a: T, b: T): number =>
    HUBGRUPPER.indexOf(a.grupp) - HUBGRUPPER.indexOf(b.grupp) || a.forrang - b.forrang || b.datum - a.datum;

  return platser
    .map((plats) => ({ plats, rader: [...(perPlats.get(plats.slug) ?? [])].sort(ordning) }))
    .filter((p) => p.rader.length > 0);
}

/** Grupp för en korttyp: problemguide|kunskap → hitta-felet, kopguide|jamforelse|kategori → valj-ratt, projektguide → gor-det-sjalv. */
export function gruppForTyp(typ: string): Hubgrupp {
  switch (typ) {
    case 'problemguide':
    case 'kunskap':
      return 'hitta-felet';
    case 'kopguide':
    case 'jamforelse':
    case 'kategori':
      return 'valj-ratt';
    case 'projektguide':
      return 'gor-det-sjalv';
    default:
      throw new Error(`[plats] Typen "${typ}" har ingen grupp på hubben`);
  }
}
