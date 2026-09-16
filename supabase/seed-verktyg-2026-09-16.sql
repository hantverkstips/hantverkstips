-- Kategorin skruvautomater och de två produkterna i gipsskruvguidens verktygslista
-- (docs/briefer/brief-gipsskruv.md avsnitt 5). Uppgifterna är produktexpertens ur
--   docs/briefer/underlag-fakta-gipsskruv.md (avsnitt 5), priser och butiksadresser
--   lästa på proffsmagasinet.se 2026-09-16.
-- Inget är mätt av oss.
--
-- Körs efter migrationerna och supabase/seed.sql (butiken proffsmagasinet måste
-- finnas). Skriptet är idempotent och kan köras om: kategorin uppdateras på slug,
-- produkter på slug, erbjudanden på (produkt_id, butik_id), prishistorik på
-- (erbjudande_id, datum). Har inte körts mot någon databas (2026-09-16).
--
-- Det som saknas i underlaget och därför är null eller utelämnat:
--   - lagerstatus: underlaget anger inte lagerstatus för någon av produkterna.
--     Köpknappen visar därför "Till Proffsmagasinet", aldrig "Slut i lager".
--   - ean, ord_pris, bild_url (leverantörsbilder hotlinkas aldrig).
--   - specs utöver skruvlängd: effekt, varvtal, vikt och batterisystem för Makita
--     står inte i underlaget. Ingen kategorifil finns i src/content/kategorier/,
--     så ingen /skruvautomater/-sida byggs och produktkortet visar inga specs.
--   - Essve FZB 3,9 × 41 är bandad skruv, inte en maskin. Den ligger här i
--     skruvautomater eftersom den bara används i automaten; får en egen kategori
--     (bandad skruv) den dagen fler förbrukningsartiklar tillkommer.
--
-- affiliate_url = butik_url tills Adtraction godkänt kanalen. /go/ bygger
-- spårningslänken ur butiker.lankmall och använder affiliate_url bara som reserv.

begin;

-- 1. Kategori. Ingen kategorifil än; specs-nycklarna nedan är förslag som
-- kategorifilen får fastställa när den skrivs: skruvlangd_min_mm, skruvlangd_max_mm,
-- batteri_ingar, varvtal_per_min.
insert into kategorier (slug, namn, beskrivning)
values ('skruvautomater', 'Skruvautomater', 'Skruvautomater och bandad skruv för gipsskivor.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkter.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'makita-dfr550zx1',
    'Makita DFR550ZX1 skruvautomat',
    'Makita',
    'DFR550ZX1',
    (select id from kategorier where slug = 'skruvautomater'),
    null,
    '{"typ": "skruvautomat", "skruvlangd_min_mm": 25, "skruvlangd_max_mm": 55, "batteri_ingar": false, "anmarkning": "Utan batteri och laddare. Skruvlängd 25 till 55 mm enligt Proffsmagasinets produktsida."}'::jsonb,
    null,
    true
  ),
  (
    'essve-fzb-39x41',
    'Essve FZB gipsskruv 3,9 × 41 bandad, 1 000-pack',
    'Essve',
    'FZB 3,9 × 41 bandad, 1 000-pack',
    (select id from kategorier where slug = 'skruvautomater'),
    null,
    '{"typ": "bandad skruv", "diameter_mm": 3.9, "langd_mm": 41, "antal": 1000, "korrosivitetsklass": "C1", "anmarkning": "Rakbandad för automater (Makita, Hilti, Kartro). För träregel inomhus, inte stål."}'::jsonb,
    null,
    true
  )
on conflict (slug) do update set
  namn        = excluded.namn,
  marke       = excluded.marke,
  modell      = excluded.modell,
  kategori_id = excluded.kategori_id,
  bild_url    = excluded.bild_url,
  specs       = excluded.specs,
  aktiv       = excluded.aktiv,
  uppdaterad  = now();

-- 3. Erbjudanden. Lagerstatus saknas i underlaget, därför null.
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  null,
  null,
  k.url,
  k.url,
  timestamptz '2026-09-16 12:00:00+02'
from (values
  ('makita-dfr550zx1', 3212.00, 'https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/skruvautomater/makita-dfr550zx1-skruvautomat-utan-batteri-och-laddare-jj14551-2'),
  ('essve-fzb-39x41',   306.00, 'https://www.proffsmagasinet.se/bygg-interior/infastning/skruv/bandad-skruv/essve-fzb-gipsskruv-1000-pack-39x41mm-1530126')
) as k(slug, pris, url)
join produkter p on p.slug = k.slug
on conflict (produkt_id, butik_id) do update set
  pris          = excluded.pris,
  ord_pris      = excluded.ord_pris,
  lagerstatus   = excluded.lagerstatus,
  butik_url     = excluded.butik_url,
  affiliate_url = excluded.affiliate_url,
  uppdaterad    = excluded.uppdaterad;

-- 4. Prishistorik, en rad per erbjudande med dagens datum.
insert into prishistorik (erbjudande_id, pris, datum)
select e.id, e.pris, date '2026-09-16'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('makita-dfr550zx1', 'essve-fzb-39x41')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
