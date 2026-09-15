/**
 * Hjälpfunktioner för content collections: utkast, adresser, brödsmulor.
 *
 * Utkast: en fil med utkast: true visas i npm run dev så att skribent och redaktör
 * kan se sidan, men utesluts i npm run build. Alla getStaticPaths och listor går
 * genom publicerade() så att regeln sitter på ett ställe.
 */
import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import { hittaPelare } from './pelare';

type MedUtkast = { data: { utkast: boolean } };

export function arPublicerad(entry: MedUtkast): boolean {
  return import.meta.env.DEV || !entry.data.utkast;
}

export async function publicerade<K extends CollectionKey>(samling: K): Promise<CollectionEntry<K>[]> {
  const alla = await getCollection(samling);
  return alla.filter((e) => arPublicerad(e as unknown as MedUtkast));
}

export type Artikel = CollectionEntry<'guider'> | CollectionEntry<'kunskap'>;

/** Guider och kunskap ligger under pelaren: /fukt/fukt-i-kallaren/ */
export function artikelUrl(entry: Artikel): string {
  return `/${entry.data.pelare}/${entry.id}/`;
}

export function testUrl(entry: CollectionEntry<'tester'>): string {
  return `/tester/${entry.id}/`;
}

export function jamforelseUrl(entry: CollectionEntry<'jamforelser'>): string {
  return `/jamforelser/${entry.id}/`;
}

export function kategoriUrl(slug: string): string {
  return `/${slug}/`;
}

export function pelareUrl(slug: string): string {
  return `/${slug}/`;
}

export interface Brodsmula {
  namn: string;
  href?: string;
}

/** Brödsmulor följer URL:en. Första nivån är alltid Hantverkstips. Sista saknar länk. */
export function brodsmulorForArtikel(entry: Artikel): Brodsmula[] {
  const p = hittaPelare(entry.data.pelare);
  return [
    { namn: 'Hantverkstips', href: '/' },
    { namn: p?.kort ?? entry.data.pelare, href: pelareUrl(entry.data.pelare) },
    { namn: entry.data.title },
  ];
}

/** Produktreferenser i frontmatter kan vara slug eller objekt. Normalisera till objekt. */
export interface ProduktRef {
  slug: string;
  forVem?: string;
  etikett?: string;
}

export function normaliseraProdukter(lista: (string | ProduktRef)[]): ProduktRef[] {
  return lista.map((p) => (typeof p === 'string' ? { slug: p } : p));
}

/**
 * Ankare för rubriker som mallen själv renderar, så att innehållsförteckningen
 * kan länka till dem. Astros egna slugs från MDX behåller å, ä och ö; de här
 * skrivs om till a och o eftersom de blir en del av adressen i länkar vi bygger.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Etikett som visas i listor: "Köpguide", "Test", osv. */
export function typEtikett(typ: string, testEtikett?: 'test' | 'granskning'): string {
  switch (typ) {
    case 'projektguide':
      return 'Projektguide';
    case 'problemguide':
      return 'Problemguide';
    case 'kopguide':
      return 'Köpguide';
    case 'kunskap':
      return 'Kunskap';
    case 'test':
      return testEtikett === 'granskning' ? 'Granskning' : 'Test';
    case 'jamforelse':
      return 'Jämförelse';
    default:
      return typ;
  }
}
