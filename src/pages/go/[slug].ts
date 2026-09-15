import type { APIRoute } from 'astro';
import { serverKlient } from '../../lib/supabase';

// Körs på servern vid varje anrop. Loggar klicket och skickar vidare till butiken.
export const prerender = false;

export const GET: APIRoute = async ({ params, url, request, redirect }) => {
  const slug = params.slug;
  if (!slug) return new Response('Saknar produkt', { status: 400 });

  const db = serverKlient();
  if (!db) return new Response('Databas ej konfigurerad', { status: 503 });

  const butikSlug = url.searchParams.get('butik');

  // Hämta aktivt erbjudande för produkten, valfritt filtrerat på butik.
  let fraga = db
    .from('erbjudanden')
    .select('id, affiliate_url, produkt_id, butik_id, produkter!inner(slug), butiker!inner(slug)')
    .eq('produkter.slug', slug)
    .limit(1);
  if (butikSlug) fraga = fraga.eq('butiker.slug', butikSlug);

  const { data, error } = await fraga.maybeSingle();
  if (error || !data?.affiliate_url) return new Response('Produkten hittades inte', { status: 404 });

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

  await db.from('klick').insert({
    produkt_id: data.produkt_id,
    butik_id: data.butik_id,
    sida,
  });

  return redirect(data.affiliate_url, 302);
};
