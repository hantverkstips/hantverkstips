import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Serverklient med service role. Får BARA användas i serverkod:
 * /go/-rutten, /admin, skript. Aldrig i en komponent som hydreras.
 * Returnerar null om miljövariabler saknas, så att bygget fungerar utan databas.
 */
export function serverKlient(): SupabaseClient | null {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const nyckel = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !nyckel) return null;
  return createClient(url, nyckel, { auth: { persistSession: false } });
}

/**
 * Publik klient med anon-nyckel. Läser bara det RLS tillåter.
 * Används vid byggtid för att hämta produkter till statiska sidor.
 */
export function publikKlient(): SupabaseClient | null {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const nyckel = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !nyckel) return null;
  return createClient(url, nyckel, { auth: { persistSession: false } });
}
