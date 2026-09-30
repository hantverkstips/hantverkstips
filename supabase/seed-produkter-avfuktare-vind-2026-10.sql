-- Sorptionsavfuktare till /fukt/avfuktare-vind/, valda av affiliateagenten
-- 2026-09-30 (docs/briefer/affiliate-avfuktare-vind-2026-10.md).
--   fresh-d800                 finns, specs kompletteras för vinden
--   drybox-x4                  finns, specs kompletteras och rättas
--   fresh-d1200                ny
--   acetec-evodry-rcf-12-g1    ny
--   drybox-x685000             ny, tillbehörspaket till X4, bara bredvid X4
--
-- Underlag: docs/briefer/underlag-avfuktare-vind-2026-10.md, del A till C.
-- Specs är tillverkarens uppgifter ur bruksanvisningar och datablad. Inget är
-- mätt av oss. kwh_per_liter är egen räkning (effekt × 24 / kapacitet vid
-- samma villkor), som för fresh-d800 tidigare.
--
-- Nya spec-nycklar i kategorin luftavfuktare, för vindsguiden:
--   hygrostat, vatluft, vatluft_max_m, montering, kapacitet_kyla.
-- Om de ska visas i tabellen på /luftavfuktare/ är UX och bygge-agentens beslut.
--
-- OBS: kategorimallen visar varje aktiv produkt i kategorin. fresh-d1200 och
-- acetec-evodry-rcf-12-g1 kommer därför också in i tabellen på /luftavfuktare/.
-- Det är avsett; båda har tillverkarens datablad.
--
-- Körs efter migrationerna, supabase/seed.sql och seed-produkter-2026-09-16.sql
-- (fresh-d800 och drybox-x4 finns där). Idempotent: produkter på slug,
-- erbjudanden på (produkt_id, butik_id), prishistorik på (erbjudande_id, datum).
-- INTE körd mot databasen.
--
-- bild_url är null; leverantörsbilder hotlinkas aldrig.
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 1. Kategori för tillbehör. Ingen kategorisida i src/content/kategorier/;
-- raden finns för klick.kategori_slug och epi2, som sanksagar.
insert into kategorier (slug, namn, beskrivning)
values
  ('avfuktartillbehor', 'Tillbehör till avfuktare', 'Slangar och installationssatser som krävs för att en avfuktare ska kunna installeras.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Nya produkter.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'fresh-d1200',
    'Fresh D-1200',
    'Fresh',
    'D-1200',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 10, "kapacitet_villkor": "27 °C/60 % RF", "kapacitet_vid_35_90": 12, "typ": "sorption", "ljudniva_db": 44, "ljudniva_anm": "44 dB, avstånd ej angivet", "effekt_w": 500, "arbetstemp_min_c": -20, "slang": "125 mm in, 40 mm våtluft ut", "kwh_per_liter": 1.20, "kwh_per_liter_villkor": "27 °C/60 % RF", "hygrostat": "inbyggd, och uttag för extern 24 V-hygrostat (ingår ej)", "vatluft": "40 mm", "vatluft_max_m": 1.0, "montering": "golv, vägg eller tak, i alla riktningar; fästen ingår ej", "kapacitet_kyla": "ej angiven i liter; Fresh skriver 3–4 gånger kompressoravfuktarens prestanda under 10 °C", "kalla": "Fresh bruksanvisning D-800/D-1200, dokument 008634-A_200116 (Proffsmagasinets bilaga AssetDocument70505787), s. 4–14", "anmarkning": "Proffsmagasinets artikelnummer 3055561. Kanal in och torrluft ut högst 3,0 m. Fresh nämner vindar bland användningsområdena. Max yta anges inte. IP22, garanti 24 månader."}'::jsonb,
    '7318117200187',
    true
  ),
  (
    'acetec-evodry-rcf-12-g1',
    'Acetec EvoDry RCF 12 G1',
    'Acetec',
    'EvoDry RCF 12 G1',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 12, "kapacitet_villkor": "20 °C/60 % RF", "typ": "sorption", "ljudniva_db": 58, "ljudniva_anm": "58 dBA, avstånd ej angivet", "effekt_w": 665, "arbetstemp_min_c": -20, "slang": "våtluft 80 mm, 2 m ingår; torrluft 125 mm", "kwh_per_liter": 1.33, "kwh_per_liter_villkor": "20 °C/60 % RF", "hygrostat": "EDC-01 med manöverpanel och 15 m kabel, 20–80 %, läge som låter fukthalten stiga 1 % per grad under 15 °C", "vatluft": "80 mm, 2 m slang och utloppsenhet ingår", "vatluft_max_m": 2.0, "montering": "golv, upphöjt på lecablock eller isolerskiva", "kapacitet_kyla": "ca 6,7 l/dygn vid 0 °C och 60 % RF, avläst ur Acetecs kapacitetsdiagram", "kalla": "Acetec Dokumentation EvoDry RCF 12 G1, ref-20012, uppdaterad 2026-05-26 (docs.acetec.se/dokument/ref-20012/); kapacitetsdiagram kapacitetsdiagram-rcf-12-1.jpg", "anmarkning": "Proffsmagasinets artikelnummer 4043420; Acetec 20012. Acetec nämner kallvind uttryckligen. Slangen ska inte förlängas enligt Acetec. Manöverpanelen ska inte placeras på kallvinden. Acetec: installeras av kvalificerad person. IP21. Kapaciteten i kyla är vår avläsning ur ett diagram, inte ett tal i tabellen."}'::jsonb,
    '7350070006246',
    true
  ),
  (
    'drybox-x685000',
    'Drybox X685000 tillbehörspaket',
    'Drybox',
    'X685000',
    (select id from kategorier where slug = 'avfuktartillbehor'),
    null,
    '{"typ": "tillbehörspaket", "innehall": "2 torrluftsslangar, 1 våtluftsslang, 2 avstick, 1 utloppsplåt", "passar": "Drybox X2, X4 och X5", "kalla": "Drybox installationsmanual Krypgrund och Vind (Proffsmagasinets bilaga AssetDocument72013555); Proffsmagasinets produktsida för innehållet", "anmarkning": "Proffsmagasinets artikelnummer 2950005. Drybox skriver att installationen kräver DryBox installationskit och att våtluftsslangen är Ø 63 mm, 1,5 m; att kitet är X685000 bygger på butiken. Tillbehör över 1 500 kr. Får knapp bara bredvid drybox-x4, aldrig ensamt."}'::jsonb,
    '7350069720030',
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

-- 3. Befintliga produkter: specs kompletteras med vindsnycklarna. Nycklarna
-- som finns skrivs över bara där de står här (jsonb ||).
update produkter set
  specs = specs || '{"hygrostat": "inbyggd, och uttag för extern 24 V-hygrostat (ingår ej)", "vatluft": "40 mm", "vatluft_max_m": 0.6, "montering": "golv, vägg eller tak, i alla riktningar; fästen ingår ej", "kapacitet_kyla": "ej angiven i liter; Fresh skriver 3–4 gånger kompressoravfuktarens prestanda under 10 °C", "kalla": "Fresh bruksanvisning D-800/D-1200, dokument 008634-A_200116 (Proffsmagasinets bilaga AssetDocument70505787), s. 4–14", "anmarkning": "Proffsmagasinets artikelnummer 3055560. Våtluftskanalen högst 0,6 m, kanal in högst 1,0 m. Fresh nämner vindar bland användningsområdena. IP22, garanti 24 månader."}'::jsonb,
  uppdaterad = now()
where slug = 'fresh-d800';

update produkter set
  specs = specs || '{"hygrostat": "inbyggd, 55 eller 65 % RF, mögelläge som under 0 °C håller ca 70 eller 80 %; display upp till 10 m", "vatluft": "63 mm; slangen ingår inte", "montering": "golv, upphöjd på frigolitblock, vid husets ena kortsida", "kapacitet_kyla": "ej angiven; i program 1 avfuktar den bara över +4 °C", "slang": "våtluft 63 mm (drybox.se: 50 mm), torrluft 63 och 102 mm; slangar i tillbehörspaket X685000", "kalla": "Drybox Manual avfuktare X2/X4 (Proffsmagasinets bilaga AssetDocument29528728) s. 2–6; Drybox installationsmanual Krypgrund och Vind (AssetDocument72013555); drybox.se/produkter/drybox-x4/ (sammanfattning)", "anmarkning": "Proffsmagasinets artikelnummer 2950004. Arbetstemperaturen -20 till +40 °C står i Drybox manual. Kapaciteten 19 l/dygn saknar villkor. Effekt 850 W på drybox.se, 805 W i installationsbeskrivningen. Butiken skriver upp till 250 m utan enhet. Garanti 2 år, förlängd vid registrering (Drybox); butiken skriver 7 år. Drybox installationsmanual har ett eget avsnitt för vind: täta bjälklag, vindslucka och takfotsventilation först."}'::jsonb,
  uppdaterad = now()
where slug = 'drybox-x4';

-- 4. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-09-30. Alla fem
-- svarade 200 utan omdirigering samma dag (underlagsarbetaren och
-- affiliateagenten). Beställningsvaror lagras som restnoterad.
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  k.ord_pris,
  k.lagerstatus,
  k.url,
  k.url,
  timestamptz '2026-09-30 12:00:00+02'
from (values
  ('fresh-d800',               7250.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d800-sorptionsavfuktare-3055560'),
  ('fresh-d1200',             10995.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d1200-sorptionsavfuktare-3055561'),
  ('drybox-x4',               12763.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-x4-avfuktare-upp-till-250-m-2950004'),
  ('acetec-evodry-rcf-12-g1', 15455.00, null, 'restnoterad', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-rcf-12-g1-sorptionsavfuktare-4043420'),
  ('drybox-x685000',           2496.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/slangar/drybox-x685000-tillbehorspaket-6-delar-2950005')
) as k(slug, pris, ord_pris, lagerstatus, url)
join produkter p on p.slug = k.slug
on conflict (produkt_id, butik_id) do update set
  pris          = excluded.pris,
  ord_pris      = excluded.ord_pris,
  lagerstatus   = excluded.lagerstatus,
  butik_url     = excluded.butik_url,
  affiliate_url = excluded.affiliate_url,
  uppdaterad    = excluded.uppdaterad;

-- 5. Prishistorik, en rad per erbjudande med dagens datum.
insert into prishistorik (erbjudande_id, pris, datum)
select e.id, e.pris, date '2026-09-30'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('fresh-d800', 'fresh-d1200', 'drybox-x4',
                 'acetec-evodry-rcf-12-g1', 'drybox-x685000')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
