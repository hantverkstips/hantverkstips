/**
 * Produktdata från Supabase, hämtad vid byggtid med anon-nyckeln.
 *
 * En enda fråga per bygge, memoiserad i en modulvariabel med tidsstämpel.
 * Kalkylatorn körs på servern (prerender = false) och får därför en cache som
 * går ut efter 60 minuter, så att nya priser syns utan att varje anrop frågar.
 *
 * Utan miljövariabler returnerar allt tomt och komponenterna visar sina
 * platshållartillstånd. Se docs/SPEC-SIDMALLAR.md avsnitt 3.1 och 9.
 */
import { publikKlient } from './supabase';

export interface Erbjudande {
  butikSlug: string;
  butikNamn: string;
  pris: number | null;
  ordPris: number | null;
  lagerstatus: string | null;
  uppdaterad: Date;
}

export interface Produkt {
  id: number;
  slug: string;
  namn: string;
  marke: string | null;
  modell: string | null;
  kategoriSlug: string | null;
  bildUrl: string | null;
  specs: Record<string, string | number | boolean | null>;
  erbjudanden: Erbjudande[];
}

export interface Butik {
  slug: string;
  namn: string;
}

const CACHE_MS = 60 * 60 * 1000;
const VALJ =
  'id, slug, namn, marke, modell, bild_url, specs, kategorier(slug), erbjudanden(pris, ord_pris, lagerstatus, uppdaterad, butiker(slug, namn))';

interface ButikRad {
  slug: string | null;
  namn: string | null;
}

interface ErbjudandeRad {
  pris: number | null;
  ord_pris: number | null;
  lagerstatus: string | null;
  uppdaterad: string | null;
  butiker: ButikRad | ButikRad[] | null;
}

interface ProduktRad {
  id: number;
  slug: string;
  namn: string;
  marke: string | null;
  modell: string | null;
  bild_url: string | null;
  specs: Record<string, string | number | boolean | null> | null;
  kategorier: { slug: string | null } | { slug: string | null }[] | null;
  erbjudanden: ErbjudandeRad[] | null;
}

let cache: { tid: number; produkter: Map<string, Produkt> } | null = null;
let butikCache: { tid: number; butiker: Map<string, Butik> } | null = null;
let varnatOmDatabas = false;
const varnadeSlugs = new Set<string>();

function forst<T>(v: T | T[] | null | undefined): T | null {
  if (Array.isArray(v)) return v[0] ?? null;
  return v ?? null;
}

function varnaEnGang(): void {
  if (varnatOmDatabas) return;
  varnatOmDatabas = true;
  console.warn('[produkter] Databas saknas, produktkort visar platshållare');
}

/**
 * Ett Supabase-fel som betyder att schemat inte finns behandlas som "ingen databas":
 * bygget ska gå igenom mot en tom projektinstans. Andra fel stoppar bygget.
 */
function schematSaknas(fel: { code?: string; message?: string }): boolean {
  const kod = fel.code ?? '';
  const text = fel.message ?? '';
  return (
    kod === '42P01' ||
    kod === 'PGRST205' ||
    kod === 'PGRST202' ||
    /Could not find the table|does not exist|schema cache/i.test(text)
  );
}

export function databasFinns(): boolean {
  return publikKlient() !== null;
}

/** Varning en gång per slug när en produkt saknas i databasen. */
export function varnaSaknadProdukt(slug: string, plats?: string): void {
  if (varnadeSlugs.has(slug)) return;
  varnadeSlugs.add(slug);
  console.warn(`[produkter] Produkten ${slug} saknas i databasen${plats ? ` (${plats})` : ''}`);
}

function tillProdukt(rad: ProduktRad): Produkt {
  const erbjudanden: Erbjudande[] = (rad.erbjudanden ?? []).map((e) => {
    const butik = forst(e.butiker);
    return {
      butikSlug: butik?.slug ?? '',
      butikNamn: butik?.namn ?? 'butiken',
      pris: typeof e.pris === 'number' ? e.pris : null,
      ordPris: typeof e.ord_pris === 'number' ? e.ord_pris : null,
      lagerstatus: e.lagerstatus ?? null,
      uppdaterad: e.uppdaterad ? new Date(e.uppdaterad) : new Date(0),
    };
  });
  return {
    id: rad.id,
    slug: rad.slug,
    namn: rad.namn,
    marke: rad.marke,
    modell: rad.modell,
    kategoriSlug: forst(rad.kategorier)?.slug ?? null,
    bildUrl: rad.bild_url,
    specs: rad.specs ?? {},
    erbjudanden,
  };
}

export async function allaProdukter(): Promise<Map<string, Produkt>> {
  if (cache && Date.now() - cache.tid < CACHE_MS) return cache.produkter;

  const db = publikKlient();
  if (!db) {
    varnaEnGang();
    cache = { tid: Date.now(), produkter: new Map() };
    return cache.produkter;
  }

  const { data, error } = await db.from('produkter').select(VALJ).eq('aktiv', true);
  if (error) {
    if (schematSaknas(error)) {
      varnaEnGang();
      cache = { tid: Date.now(), produkter: new Map() };
      return cache.produkter;
    }
    throw new Error(`[produkter] Supabase svarade med fel: ${error.message}`);
  }

  const produkter = new Map<string, Produkt>();
  for (const rad of (data ?? []) as unknown as ProduktRad[]) {
    produkter.set(rad.slug, tillProdukt(rad));
  }
  cache = { tid: Date.now(), produkter };
  return produkter;
}

export async function hamtaProdukt(slug: string): Promise<Produkt | null> {
  const alla = await allaProdukter();
  return alla.get(slug) ?? null;
}

/** Produkterna i angiven ordning. Slugs som saknas utelämnas. */
export async function hamtaProdukter(slugs: string[]): Promise<Produkt[]> {
  const alla = await allaProdukter();
  const ut: Produkt[] = [];
  for (const slug of slugs) {
    const p = alla.get(slug);
    if (p) ut.push(p);
  }
  return ut;
}

export function billigasteErbjudande(p: Produkt): Erbjudande | null {
  if (p.erbjudanden.length === 0) return null;
  const medPris = p.erbjudanden.filter((e) => typeof e.pris === 'number' && e.pris > 0);
  if (medPris.length === 0) return p.erbjudanden[0] ?? null;
  return medPris.reduce((a, b) => ((b.pris ?? Infinity) < (a.pris ?? Infinity) ? b : a));
}

/** Lägsta pris, eller null. Används för sortering och AggregateOffer. */
export function lagstaPris(p: Produkt): number | null {
  const priser = p.erbjudanden.map((e) => e.pris).filter((v): v is number => typeof v === 'number' && v > 0);
  return priser.length ? Math.min(...priser) : null;
}

export function hogstaPris(p: Produkt): number | null {
  const priser = p.erbjudanden.map((e) => e.pris).filter((v): v is number => typeof v === 'number' && v > 0);
  return priser.length ? Math.max(...priser) : null;
}

/** Sorterade på billigaste pris, produkter utan pris sist. */
export async function produkterIKategori(kategoriSlug: string): Promise<Produkt[]> {
  const alla = await allaProdukter();
  const i = [...alla.values()].filter((p) => p.kategoriSlug === kategoriSlug);
  return i.sort((a, b) => {
    const pa = lagstaPris(a);
    const pb = lagstaPris(b);
    if (pa === null && pb === null) return a.namn.localeCompare(b.namn, 'sv');
    if (pa === null) return 1;
    if (pb === null) return -1;
    return pa - pb;
  });
}

export async function hamtaButik(slug = 'proffsmagasinet'): Promise<Butik | null> {
  if (butikCache && Date.now() - butikCache.tid < CACHE_MS) {
    return butikCache.butiker.get(slug) ?? null;
  }

  const db = publikKlient();
  if (!db) {
    varnaEnGang();
    butikCache = { tid: Date.now(), butiker: new Map() };
    return null;
  }

  const { data, error } = await db.from('butiker').select('slug, namn');
  if (error) {
    if (schematSaknas(error)) {
      varnaEnGang();
      butikCache = { tid: Date.now(), butiker: new Map() };
      return null;
    }
    throw new Error(`[produkter] Supabase svarade med fel: ${error.message}`);
  }

  const butiker = new Map<string, Butik>();
  for (const rad of (data ?? []) as ButikRad[]) {
    if (rad.slug) butiker.set(rad.slug, { slug: rad.slug, namn: rad.namn ?? rad.slug });
  }
  butikCache = { tid: Date.now(), butiker };
  return butiker.get(slug) ?? null;
}

/** Namn som visas i kort och tabeller: märke och modell, annars namn. */
export function produktNamn(p: Produkt): string {
  const sammansatt = [p.marke, p.modell].filter(Boolean).join(' ').trim();
  return sammansatt || p.namn;
}

/** Leverantörsbilder hotlinkas aldrig. Bara lokala filer under /bilder/ renderas. */
export function lokalBild(p: Produkt): string | null {
  return p.bildUrl && p.bildUrl.startsWith('/') ? p.bildUrl : null;
}

export function arSlut(e: Erbjudande | null): boolean {
  if (!e || !e.lagerstatus) return false;
  return /slut|ej i lager|restnot|utg/i.test(e.lagerstatus);
}
