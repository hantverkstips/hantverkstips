import type { APIRoute } from 'astro';
import { serverKlient } from '../../lib/supabase';
import { arKlickModul, arSidtyp, byggSparlank, tillBas36 } from '../../lib/affiliate';

// Körs på servern vid varje anrop. Loggar klicket, bygger spårningslänken
// från butiker.lankmall med klickets id som EPI, och skickar vidare med 302.
// Se docs/AFFILIATE.md avsnitt 2 och 6.
export const prerender = false;

interface ErbjudandeRad {
  id: number;
  butik_url: string | null;
  affiliate_url: string | null;
  produkt_id: number;
  butik_id: number;
  produkter: { slug: string; kategorier: { slug: string } | null };
  butiker: { slug: string; lankmall: string | null };
}

const INGEN_CACHE = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };

export const GET: APIRoute = async ({ params, url, request, redirect }) => {
  const slug = params.slug;
  if (!slug) return new Response('Saknar produkt', { status: 400, headers: INGEN_CACHE });

  const db = serverKlient();
  if (!db) return new Response('Databas ej konfigurerad', { status: 503, headers: INGEN_CACHE });

  const butikSlug = url.searchParams.get('butik');
  const modulParam = url.searchParams.get('modul');
  const sidtypParam = url.searchParams.get('sidtyp');
  const positionParam = Number(url.searchParams.get('position'));

  // Okända värden loggas som null, aldrig som text från query-strängen.
  const modul = arKlickModul(modulParam) ? modulParam : null;
  const sidtyp = arSidtyp(sidtypParam) ? sidtypParam : null;
  const position = Number.isInteger(positionParam) && positionParam > 0 && positionParam < 1000 ? positionParam : null;

  // Aktivt erbjudande för produkten, valfritt filtrerat på butik.
  let fraga = db
    .from('erbjudanden')
    .select(
      'id, butik_url, affiliate_url, produkt_id, butik_id, produkter!inner(slug, kategorier(slug)), butiker!inner(slug, lankmall)',
    )
    .eq('produkter.slug', slug)
    .order('pris', { ascending: true, nullsFirst: false })
    .limit(1);
  if (butikSlug) fraga = fraga.eq('butiker.slug', butikSlug);

  const { data, error } = await fraga.maybeSingle();
  const rad = data as unknown as ErbjudandeRad | null;
  if (error || !rad) return new Response('Produkten hittades inte', { status: 404, headers: INGEN_CACHE });

  const kanSpara = Boolean(rad.butiker.lankmall && rad.butik_url);
  if (!kanSpara && !rad.affiliate_url) {
    return new Response('Erbjudandet saknar länk', { status: 404, headers: INGEN_CACHE });
  }

  // Logga utan personuppgifter. Ingen IP. Referrer bara som sökväg på vår egen sajt.
  const referrer = request.headers.get('referer');
  let sida: string | null = null;
  try {
    if (referrer) {
      const r = new URL(referrer);
      sida = r.hostname.endsWith('hantverkstips.se') || r.hostname === 'localhost' ? r.pathname : null;
    }
  } catch {
    sida = null;
  }

  const kategoriSlug = rad.produkter.kategorier?.slug ?? null;

  // 1. Insert klick, hämta id. 2. epi = id i bas 36, skriv tillbaka. 3. Bygg länken.
  let epi: string | null = null;
  const { data: klick, error: klickFel } = await db
    .from('klick')
    .insert({
      produkt_id: rad.produkt_id,
      butik_id: rad.butik_id,
      sida,
      modul,
      sidtyp,
      position,
      kategori_slug: kategoriSlug,
    })
    .select('id')
    .single();

  if (!klickFel && klick && typeof klick.id === 'number') {
    epi = tillBas36(klick.id);
    await db.from('klick').update({ epi }).eq('id', klick.id);
  }

  // Loggningen får aldrig stoppa läsaren. Utan epi går klicket ospårat men länken fungerar.
  let mal: string;
  if (kanSpara) {
    mal = byggSparlank(rad.butiker.lankmall!, {
      epi: epi ?? 'x',
      epi2: kategoriSlug ?? undefined,
      url: rad.butik_url!,
    });
  } else {
    mal = rad.affiliate_url!;
  }

  const svar = redirect(mal, 302);
  svar.headers.set('Cache-Control', 'no-store');
  svar.headers.set('X-Robots-Tag', 'noindex');
  return svar;
};
