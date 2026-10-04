-- Avfuktare till köpguiden /fukt/avfuktare-tvattstuga/ (omgång D, D4), valda av
-- affiliateagenten 2026-10-04 (docs/briefer/affiliate-fukt-D-2026-10-04.md).
--   woods-mdx14      ny; tvättläge med timer 1–24 h, energital vid 20 °C
--   woods-mdk21      finns; tvättstugeläge som stannar kompressorn vid 40 % RF
--   eeese-adam-20    finns; tvättläge 6 h, 11,5 l/dygn vid 27 °C
-- Rättelser av befintliga produkter enligt faktabladet: woods-mdk21 (effekt),
-- woods-ad30 (kapacitetsvillkor), woods-ad20 (27/60-talet är butikens).
-- Prisomläsning för fresh-d800 och acetec-evodry-6h-2, som står på
-- /luftavfuktare/ och har ändrats sedan 30/9.
--
-- Underlag: docs/briefer/faktablad/guider-avfuktare-tvattstuga.md
-- (underlagsarbetaren 2026-10-04), avsnitt 0, 1A, 1B och 1F. Specs ur
-- tillverkarens manualer och produktblad. Inget är mätt av oss.
--
-- Ny spec-nyckel i luftavfuktare: tvattlage (text, vad läget gör enligt
-- tillverkaren). woods-mdx14 hamnar i tabellen på /luftavfuktare/; den har
-- tillverkarens manual och produktblad (AFFILIATE.md avsnitt 1).
--
-- Körs efter seed-produkter-2026-09-16.sql. Idempotent. Körs med
-- scratchpad/kor-fro.mjs. affiliate_url = butik_url tills Adtraction godkänt.

begin;

-- 2. Ny produkt.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'woods-mdx14',
    'Wood''s MDX14',
    'Wood''s',
    'MDX14',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 6, "kapacitet_villkor": "20 °C/70 % RF", "kapacitet_vid_30_80": 10, "typ": "kondens", "ljudniva_db": 43, "ljudniva_anm": "43 dB i manualen, 40–42 dB i produktbladet, avstånd ej angivet", "effekt_w": 180, "effekt_villkor": "20 °C/70 % RF", "energi_kwh_dygn": 4.3, "energi_villkor": "20 °C/70 % RF", "arbetstemp_min_c": 5, "tank_liter": 1.5, "slang": "10 mm, ingår", "hygrostat": "ja, 35–85 % (inte i tvättläget)", "tvattlage": "Klädtorkningsläge: kompressorn går kontinuerligt och fläkten på hög hastighet oavsett luftfuktighet; timer 1–24 h", "garanti_ar": 2, "kalla": "Wood''s bruksanvisning MDX14, revision 2020-01-20 (woods.se); Wood''s produktblad id 42328", "anmarkning": "Proffsmagasinets artikelnummer 4063682. Enda maskinen med tvättläge där tillverkaren anger energi vid 20 °C: 4,3 kWh per dygn, alltså ca 1,40 l/kWh (egen räkning). Garanti upp till 3 år vid registrering. R290: golvyta större än 2 m²."}'::jsonb,
    '7332857501113',
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

-- 2b. Befintliga produkter: tvättläget och rättelser (jsonb ||).
update produkter set
  specs = specs || '{"effekt_w": 275, "effekt_anm": "275 W vid 30 °C/80 % i manualen rev. 2022-05-02 och woods.se; Proffsmagasinets äldre produktblad anger 240 W", "slang": "15 mm enligt manualen; produktbladet anger 17,4 mm (ingår)", "hygrostat": "ja, 40–70 %", "tvattlage": "Tvättstugeläge: hög fläkt; kompressorn stannar vid ≤40 % RF och startar vid ≥45 %; timer 1/2/4/8 h", "kapacitet_kyla": "ej angiven vid 20 eller 27 °C"}'::jsonb,
  uppdaterad = now()
where slug = 'woods-mdk21';

update produkter set
  specs = specs || '{"hygrostat": "ja", "tvattlage": "Tvättorkningsläge: kontinuerlig avfuktning med hög fläkt i 6 h, stängs sedan av", "slang": "Ø 14 mm, ingår inte", "garanti_ar": 2, "kalla": "eeese User manual Adam Art. 2509, MV-2509-08-2026"}'::jsonb,
  uppdaterad = now()
where slug = 'eeese-adam-20';

update produkter set
  specs = specs || '{"kapacitet_villkor": "30 °C/80 % RF", "kapacitet_anm": "Wood''s produktblad id 42827: 26 l vid 30 °C/80 % i tabellen; punktlistan säger upp till 12 l", "tvattlage": "torka-tvätt läge: högsta fläkt kontinuerligt"}'::jsonb,
  uppdaterad = now()
where slug = 'woods-ad30';

update produkter set
  specs = specs || '{"kapacitet_vid_27_60_anm": "14 l vid 27 °C/60 % är Proffsmagasinets uppgift, inte tillverkarens", "tvattlage": "torka-tvätt läge: högsta fläkt kontinuerligt"}'::jsonb,
  uppdaterad = now()
where slug = 'woods-ad20';

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-10-04. Alla
-- svarade 200 utan omdirigering.
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  k.ord_pris,
  k.lagerstatus,
  k.url,
  k.url,
  timestamptz '2026-10-04 12:00:00+02'
from (values
  ('woods-mdx14',         1690.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-mdx14-avfuktare-for-badrum-och-andra-mindre-utrymmen-4063682'),
  ('woods-mdk21',         3118.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-mdk21-avfuktare-upp-till-70-m-vs57632'),
  ('eeese-adam-20',       2756.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/eeese-adam-avfuktare-20-l-wifi-2920263'),
  ('fresh-d800',          7211.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d800-sorptionsavfuktare-3055560'),
  ('acetec-evodry-6h-2', 10588.00, null, 'restnoterad', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-6h-20-sorptionsavfuktare-1150001')
) as k(slug, pris, ord_pris, lagerstatus, url)
join produkter p on p.slug = k.slug
on conflict (produkt_id, butik_id) do update set
  pris          = excluded.pris,
  ord_pris      = excluded.ord_pris,
  lagerstatus   = excluded.lagerstatus,
  butik_url     = excluded.butik_url,
  affiliate_url = excluded.affiliate_url,
  uppdaterad    = excluded.uppdaterad;

-- 4. Prishistorik.
insert into prishistorik (erbjudande_id, pris, datum)
select e.id, e.pris, date '2026-10-04'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('woods-mdx14', 'woods-mdk21', 'eeese-adam-20', 'fresh-d800', 'acetec-evodry-6h-2')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
