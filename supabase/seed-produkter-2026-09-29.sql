-- Startlista 4, valda av affiliateagenten 2026-09-29
-- (docs/briefer/affiliate-startlista-4-2026-09-29.md, "Slutliga beslut"):
--   makita-sp6000j      kortet i /kok/byta-bankskiva/, H2 om kapningen
--   makita-199141-8     styrskenan till sågen, bara i "Det här behöver du"
-- Prisuppdatering samma dag för avfuktarna som /fukt/avfuktare-garage/ och
-- granskningarna visar: acetec-evodry-6h-2 (9 995 -> 10 588 kr, restnoterad),
-- woods-mdk21, woods-sw39fw, fresh-d800, drybox-x4 (oförändrade priser).
--
-- Underlag: docs/briefer/underlag-sagar-bankskiva-2026-09-29.md avsnitt 3 och 4,
--           docs/briefer/underlag-avfuktare-garage-2026-09-29.md avsnitt 3 och 4.
-- Specs är tillverkarens uppgifter där de finns (Makitas bruksanvisning för
-- SP6000), annars butikens. Inget är mätt av oss.
--
-- Överfräs läggs inte in: kortet är struket, se briefen.
--
-- Körs efter migrationerna och supabase/seed.sql. Idempotent som
-- seed-produkter-2026-09-28.sql. INTE körd mot databasen.
--
-- Öppet innan körning:
--   * EAN för SP6000J och 199141-8 saknas på butikens sida; null tills
--     underlag hämtat dem från Makita.
--   * Adressen till SP6000J är byggd ur underlagets förkortade sökväg
--     (".../sanksagar/makita-sp6000j-sanksag-1300-w-hf27231") och ska öppnas en
--     gång innan körning.
--   * 'restnoterad' visas av lagerlage() som slut. Butiken tar beställningar
--     med 7-9 dagars leverans. Om knapptexten ska skilja på det är UX och
--     bygge-agentens beslut.
--
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 1. Kategori. Ingen kategorisida i src/content/kategorier/; raden finns för
-- klick.kategori_slug och epi2.
insert into kategorier (slug, namn, beskrivning)
values
  ('sanksagar', 'Sänksågar och cirkelsågar', 'Sänksågar och cirkelsågar med styrskena för skivmaterial, bänkskiva och altan.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkter. bild_url är null; leverantörsbilder hotlinkas aldrig.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'makita-sp6000j',
    'Makita SP6000J sänksåg',
    'Makita',
    'SP6000J',
    (select id from kategorier where slug = 'sanksagar'),
    null,
    '{"typ": "sänksåg", "effekt_w": 1300, "kapdjup_90_mm": 56, "kapdjup_45_mm": 40, "kapdjup_anm": "utan skena enligt Makitas bruksanvisning; GDS anger 59 mm", "klinga": "165 × 20 mm, 48 tänder", "drift": "sladd", "dammutsug": "dammport för dammsugarslang", "styrskena_ingar": false, "styrskena": "Makita 199141-8, 1 500 mm, köps separat", "anmarkning": "Proffsmagasinets artikelnummer HF27231 (utan skena). Paketet med skena, HF27230, kostar 5 991 kr och är dyrare än såg och skena var för sig. Testvinnare 9,3 av 10 i Gör Det Själv 2026-03-17."}'::jsonb,
    null,
    true
  ),
  (
    'makita-199141-8',
    'Makita 199141-8 styrskena 1 500 mm',
    'Makita',
    '199141-8',
    (select id from kategorier where slug = 'sanksagar'),
    null,
    '{"typ": "styrskena", "langd_mm": 1500, "passar": "Makita SP6000; HS7601 med adapter 197005-0 enligt butiken", "splitterskydd": "skärs till vid första snittet enligt Makitas bruksanvisning för SP6000", "anmarkning": "Tillbehör under 1 500 kr. Får knapp bara i behovslistan bredvid makita-sp6000j, aldrig eget kort. Se docs/AFFILIATE.md avsnitt 1."}'::jsonb,
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
  ean         = excluded.ean,
  aktiv       = excluded.aktiv,
  uppdaterad  = now();

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-09-29.
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  k.ord_pris,
  k.lagerstatus,
  k.url,
  k.url,
  timestamptz '2026-09-29 12:00:00+02'
from (values
  ('makita-sp6000j',      3501.00, 4668.00, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/sagverktyg/sanksagar/makita-sp6000j-sanksag-1300-w-hf27231'),
  ('makita-199141-8',      784.00,  872.00, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/maskintillbehor-forbrukning/styrskenor-och-tillsatser/styrskenor/makita-199141-8-styrskena-1500-mm-jz14590'),
  ('acetec-evodry-6h-2', 10588.00,    null, 'restnoterad', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-6h-20-sorptionsavfuktare-1150001'),
  ('woods-mdk21',         3118.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-mdk21-avfuktare-upp-till-70-m-vs57632'),
  ('woods-sw39fw',        5948.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw39fw-i-ecodefrost-avfuktare-med-luftfilter-140-m-4058317'),
  ('fresh-d800',          7250.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d800-sorptionsavfuktare-3055560'),
  ('drybox-x4',          12763.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-x4-avfuktare-upp-till-250-m-2950004')
) as k(slug, pris, ord_pris, lagerstatus, url)
join produkter p on p.slug = k.slug
on conflict (produkt_id, butik_id) do update set
  pris          = excluded.pris,
  ord_pris      = excluded.ord_pris,
  lagerstatus   = excluded.lagerstatus,
  butik_url     = excluded.butik_url,
  affiliate_url = excluded.affiliate_url,
  uppdaterad    = excluded.uppdaterad;

-- 4. EAN för avfuktare som saknade det, ur produktsidornas GTIN 2026-09-29.
update produkter set ean = '7350072460732' where slug = 'acetec-evodry-6h-2' and ean is null;
update produkter set ean = '7332857500383' where slug = 'woods-mdk21'        and ean is null;
update produkter set ean = '7332857502806' where slug = 'woods-sw39fw'       and ean is null;
update produkter set ean = '7318117200163' where slug = 'fresh-d800'         and ean is null;
update produkter set ean = '7350069720047' where slug = 'drybox-x4'          and ean is null;

-- 5. Prishistorik, en rad per erbjudande med dagens datum.
insert into prishistorik (erbjudande_id, pris, datum)
select e.id, e.pris, date '2026-09-29'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('makita-sp6000j', 'makita-199141-8', 'acetec-evodry-6h-2',
                 'woods-mdk21', 'woods-sw39fw', 'fresh-d800', 'drybox-x4')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
