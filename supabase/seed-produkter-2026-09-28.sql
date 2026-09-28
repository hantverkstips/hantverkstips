-- Två produkter för fasadklustret, valda av affiliateagenten 2026-09-28
-- (docs/briefer/affiliate-fasad-2026-09-28.md avsnitt 3):
--   nilfisk-core-125-5             kortet i /fasad/tvatta-fasad/
--   speedheater-rapid-slim-3-9120  kortet i /fasad/renovera-fonster/
-- Underlag: docs/briefer/faktablad/guider-tvatta-fasad.md avsnitt B och J,
--           docs/briefer/faktablad/guider-renovera-fonster.md avsnitt 5 och 11.
-- Pris, lager, specs och EAN omlästa på Proffsmagasinets produktsidor 2026-09-28.
-- Nilfisks tryckreglering och breda stråle ur tillverkarens egna sidor samma dag:
--   https://www.nilfisk.com/global/consumer/products/pressure-washers/core-compact/core-125+128471289/
--   https://shop.nilfisk.com/en-en/products/uk-gentle-pr-nozzle-c-c
-- Specs är tillverkarens eller butikens uppgifter. Inget är mätt av oss.
--
-- Körs efter migrationerna och supabase/seed.sql (butiken proffsmagasinet måste
-- finnas). Idempotent: kategorier på slug, produkter på slug, erbjudanden på
-- (produkt_id, butik_id), prishistorik på (erbjudande_id, datum).
--
-- Ingen kategorifil finns i src/content/kategorier/ för de två kategorierna, så
-- ingen bäst i test-sida byggs. Kategorierna finns för klickspårningen
-- (klick.kategori_slug) och för att produkterna ska gå att gruppera senare.
--
-- affiliate_url = butik_url tills Adtraction godkänt kanalen. /go/ bygger
-- spårningslänken ur butiker.lankmall och använder affiliate_url bara som reserv.

begin;

-- 1. Kategorier.
insert into kategorier (slug, namn, beskrivning)
values
  ('hogtryckstvattar', 'Högtryckstvättar', 'Högtryckstvättar för fasad, altan och uppfart.'),
  ('fargborttagare', 'Färgborttagare', 'Infraröda färgborttagare för fönster, panel och fasad.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkter. bild_url är null; leverantörsbilder hotlinkas aldrig.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'nilfisk-core-125-5',
    'Nilfisk CORE 125-5',
    'Nilfisk',
    'CORE 125-5',
    (select id from kategorier where slug = 'hogtryckstvattar'),
    null,
    '{"max_tryck_bar": 125, "flode_hogtryck_l_h": 312, "flode_lagtryck_l_h": 438, "slang_m": 5, "effekt_w": 1400, "vikt_kg": 6.4, "munstycken": "Gentle PR med bred stråle och tryckreglering, Rough (Powerspeed)", "tryckreglering": "ja, i Gentle PR-munstycket enligt Nilfisk", "skum": "skumspruta 450 ml", "anmarkning": "Tryckregleringen och den breda strålen står på Nilfisks egna sidor 2026-09-28. Att Rough är ett roterande munstycke är bara återförsäljares uppgift. Proffsmagasinets artikelnummer 3058390, Nilfisks 128471289."}'::jsonb,
    '5715492223992',
    true
  ),
  (
    'speedheater-rapid-slim-3-9120',
    'Speedheater Rapid Slim 3-9120 renoveringskit',
    'Speedheater',
    'Rapid Slim 3-9120',
    (select id from kategorier where slug = 'fargborttagare'),
    null,
    '{"typ": "infraröd", "effekt_w": 1100, "ir_ror": "2 × 550 W", "arbetsyta_mm": "300 × 80", "vikt_g": 1400, "yttemperatur_c": "110 till 160", "yttemperatur_anm": "beroende på tid och avstånd, tillverkarens uppgift via Leif Arvidssons produktsida", "spanning_v": "220 till 240", "kabel": "2,5 m gummikabel", "overhettningsskydd": true, "ingar": "värmaren, bumerangskrapa, kittskrapa, kittstämjärn, vinkelstöd, förvaringslåda", "anmarkning": "CE enligt EN 60335-1 och EN 60335-2-45. Proffsmagasinets artikelnummer 4014065."}'::jsonb,
    '892015000478',
    true
  )
on conflict (slug) do update set
  namn        = excluded.namn,
  marke       = excluded.marke,
  modell      = excluded.modell,
  kategori_id = excluded.kategori_id,
  bild_url    = excluded.bild_url,
  specs       = excluded.specs,
  ean         = excluded.ean,
  aktiv       = excluded.aktiv,
  uppdaterad  = now();

-- 3. Erbjudanden. uppdaterad är dagen priset lästes; den visas under köpknappen
-- som "pris 28 sep".
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  null,
  k.lagerstatus,
  k.url,
  k.url,
  timestamptz '2026-09-28 12:00:00+02'
from (values
  ('nilfisk-core-125-5',            1495.00, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/stad-rengoringsmaskiner/hogtryckstvattar/nilfisk-core-125-5-hogtryckstvatt-3058390'),
  ('speedheater-rapid-slim-3-9120', 5848.00, 'i_lager', 'https://www.proffsmagasinet.se/bygg-interior/malarredskap-tillbehor/fargborttagning/fargborttagningsmaskiner/speedheater-rapid-slim-3-9120-renoveringskit-med-ir-varmare-skrapor-och-tillbehor-4014065')
) as k(slug, pris, lagerstatus, url)
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
select e.id, e.pris, date '2026-09-28'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('nilfisk-core-125-5', 'speedheater-rapid-slim-3-9120')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
