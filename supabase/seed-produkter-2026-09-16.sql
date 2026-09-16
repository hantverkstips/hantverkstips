-- Verkliga produkter i kategorin luftavfuktare, hämtade ur produktexpertens underlag
--   docs/briefer/underlag-fakta-avfuktare-kallare.md  (avsnitt 1, tio maskiner)
--   docs/briefer/underlag-fakta-sorptionsavfuktare.md (avsnitt 6, tre sorptionsmaskiner)
-- Priser, lagerstatus och butiksadresser lästa på proffsmagasinet.se 2026-09-16.
-- Specs är tillverkarens uppgifter via Proffsmagasinets produktsida om inget annat
-- anges i nyckeln *_anm. Inget är mätt av oss.
--
-- Körs efter migrationerna och supabase/seed.sql (butiken proffsmagasinet och
-- kategorin luftavfuktare måste finnas). Skriptet är idempotent och kan köras om:
-- produkter uppdateras på slug, erbjudanden på (produkt_id, butik_id), prishistorik
-- på (erbjudande_id, datum).
--
-- affiliate_url = butik_url tills Adtraction godkänt kanalen. /go/ bygger
-- spårningslänken ur butiker.lankmall och använder affiliate_url bara som reserv.
--
-- Saknad uppgift utelämnas ur specs, den skrivs aldrig som 0.
-- Extra nycklar utöver kategorifilens sex:
--   kapacitet_villkor, kapacitet_max_liter_dygn, kapacitet_vid_20_70,
--   kapacitet_vid_27_60, kapacitet_vid_35_90 (liter per dygn vid andra villkor),
--   effekt_vid_20_70_w, effekt_vid_27_60_w, ljudniva_anm, tank_liter, tank_anm,
--   slang, max_volym_kubikmeter, kwh_per_liter, kwh_per_liter_villkor (räknat av
--   produktexperten ur effekt och kapacitet vid samma villkor), anmarkning.

begin;

-- 1. Platshållarna ur seed.sql bort. woods-mrd20 tas också bort: modellen finns
-- inte i Proffsmagasinets sortiment enligt underlaget (deras Wood's-modeller är
-- MDK21, SW23FW, SW39FW, SW43FW, DSC50FM, SW59FM, AD20 och AD30).
delete from prishistorik
where erbjudande_id in (
  select e.id
  from erbjudanden e
  join produkter p on p.id = e.produkt_id
  where p.slug in ('woods-mrd20', 'platshallare-sorption', 'platshallare-kondens-liten')
);

delete from erbjudanden
where produkt_id in (
  select id from produkter
  where slug in ('woods-mrd20', 'platshallare-sorption', 'platshallare-kondens-liten')
);

delete from produkter
where slug in ('woods-mrd20', 'platshallare-sorption', 'platshallare-kondens-liten');

-- 2. Produkter. bild_url är null tills bildimporten finns; leverantörsbilder
-- hotlinkas aldrig.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'woods-mdk21',
    'Wood''s MDK21',
    'Wood''s',
    'MDK21',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 20, "kapacitet_villkor": "30 °C/80 % RF", "typ": "kondens", "max_yta_kvm": 70, "ljudniva_db": 48, "ljudniva_anm": "högst 48 dB", "effekt_w": 240, "arbetstemp_min_c": 5, "tank_liter": 4, "slang": "ja", "kwh_per_liter": 0.29, "kwh_per_liter_villkor": "30 °C/80 % RF"}'::jsonb,
    null,
    true
  ),
  (
    'woods-sw23fw',
    'Wood''s SW23FW I-EcoDefrost+',
    'Wood''s',
    'SW23FW I-EcoDefrost+',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 13.5, "kapacitet_villkor": "ej angivet", "typ": "kondens", "max_yta_kvm": 100, "effekt_w": 145, "arbetstemp_min_c": 2, "tank_liter": 11.4, "slang": "ja, ingår ej"}'::jsonb,
    null,
    true
  ),
  (
    'woods-sw39fw',
    'Wood''s SW39FW I-EcoDefrost+',
    'Wood''s',
    'SW39FW I-EcoDefrost+',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 19, "kapacitet_villkor": "ej angivet", "typ": "kondens", "max_yta_kvm": 140, "effekt_w": 320, "arbetstemp_min_c": 2, "tank_liter": 11.4, "slang": "ja, ingår ej"}'::jsonb,
    null,
    true
  ),
  (
    'woods-sw43fw',
    'Wood''s SW43FW I-EcoDefrost+',
    'Wood''s',
    'SW43FW I-EcoDefrost+',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 25.5, "kapacitet_villkor": "ej angivet", "typ": "kondens", "max_yta_kvm": 190, "effekt_w": 420, "arbetstemp_min_c": 2, "tank_liter": 11.4, "slang": "ja, ingår ej"}'::jsonb,
    null,
    true
  ),
  (
    'woods-dsc50fm',
    'Wood''s DSC50FM',
    'Wood''s',
    'DSC50FM',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 16.2, "kapacitet_villkor": "35 °C/80 % RF", "kapacitet_vid_20_70": 8.8, "typ": "kondens", "max_yta_kvm": 100, "ljudniva_db": "37 till 56", "effekt_w": 308, "effekt_vid_20_70_w": 231, "arbetstemp_min_c": 2, "tank_anm": "ingen tank, bara slang", "slang": "ja, fast anslutning", "kwh_per_liter": 0.63, "kwh_per_liter_villkor": "20 °C/70 % RF"}'::jsonb,
    null,
    true
  ),
  (
    'woods-sw59fm',
    'Wood''s SW59FM',
    'Wood''s',
    'SW59FM',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 41, "kapacitet_villkor": "30 °C/80 % RF", "kapacitet_vid_20_70": 25, "typ": "kondens", "max_yta_kvm": 230, "ljudniva_db": "37 till 58", "effekt_w": 690, "effekt_vid_20_70_w": 500, "arbetstemp_min_c": 2, "tank_liter": 11.4, "slang": "ja", "kwh_per_liter": 0.48, "kwh_per_liter_villkor": "20 °C/70 % RF"}'::jsonb,
    null,
    true
  ),
  (
    'woods-ad20',
    'Wood''s AD20 Hybrid',
    'Wood''s',
    'AD20 Hybrid',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 23, "kapacitet_villkor": "30 °C/80 % RF", "kapacitet_vid_27_60": 14, "typ": "kondens + luftrenare", "max_yta_kvm": 100, "ljudniva_db": 52, "ljudniva_anm": "cirka 52 dB", "effekt_w": 290, "effekt_vid_27_60_w": 240, "arbetstemp_min_c": 5, "tank_liter": 4, "slang": "ja"}'::jsonb,
    null,
    true
  ),
  (
    'woods-ad30',
    'Wood''s AD30 Hybrid',
    'Wood''s',
    'AD30 Hybrid',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 26, "kapacitet_villkor": "ej angivet", "typ": "kondens + luftrenare", "max_yta_kvm": 120, "ljudniva_db": 52, "effekt_w": 320, "arbetstemp_min_c": 5, "tank_liter": 4, "slang": "ja, 17,4 mm ingår"}'::jsonb,
    null,
    true
  ),
  (
    'eeese-adam-20',
    'eeese Adam 20 L wifi',
    'eeese',
    'Adam 20 L wifi',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 20, "kapacitet_villkor": "30 °C/80 % RF", "kapacitet_vid_27_60": 11.5, "typ": "kondens", "max_yta_kvm": 100, "ljudniva_db": "42 till 44", "effekt_w": 255, "arbetstemp_min_c": 5, "tank_liter": 5, "slang": "ja, 14 mm"}'::jsonb,
    null,
    true
  ),
  (
    'innova-igdhx-30',
    'Innova IGDHX-30',
    'Innova',
    'IGDHX-30',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 30, "kapacitet_villkor": "30 °C, RF ej angiven", "typ": "kondens", "ljudniva_db": "39 till 43", "effekt_w": 570, "tank_liter": 4.5, "slang": "ja", "anmarkning": "Ej beställningsbar hos Proffsmagasinet 2026-09-16. Max yta och lägsta arbetstemperatur saknas på produktsidan."}'::jsonb,
    null,
    true
  ),
  (
    'acetec-evodry-6h-2',
    'Acetec EvoDry 6H 2.0',
    'Acetec',
    'EvoDry 6H 2.0',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 7.4, "kapacitet_villkor": "20 °C/60 % RF", "kapacitet_max_liter_dygn": 9.7, "typ": "sorption", "max_volym_kubikmeter": 100, "max_yta_kvm": 40, "ljudniva_db": 48, "ljudniva_anm": "48 dB(A) enligt Acetecs datablad, 46 dB enligt Proffsmagasinet", "effekt_w": 530, "arbetstemp_min_c": -20, "tank_anm": "ingen tank, våtluften leds ut med slang", "slang": "våtluftsslang 50 mm, 1,5 m ingår", "kwh_per_liter": 1.72, "kwh_per_liter_villkor": "20 °C/60 % RF", "anmarkning": "Tillverkaren anger 100 m³; max_yta_kvm är produktexpertens omräkning. Acetec skriver att modellen inte är avsedd för krypgrund eller kallvind."}'::jsonb,
    null,
    true
  ),
  (
    'drybox-x4',
    'Drybox X4',
    'Drybox',
    'X4',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 19, "kapacitet_villkor": "ej angivet", "typ": "sorption", "max_yta_kvm": 250, "ljudniva_db": 52, "ljudniva_anm": "52 dB vid 3 meter", "effekt_w": 850, "arbetstemp_min_c": -20, "slang": "våtluft 63 mm, torrluft 63 och 102 mm", "anmarkning": "Butiken skriver upp till 250 m utan enhet; arbetstemperaturen -20 till +40 °C kommer från återförsäljare, den saknas på Drybox egen sida."}'::jsonb,
    null,
    true
  ),
  (
    'fresh-d800',
    'Fresh D-800',
    'Fresh',
    'D-800',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 6, "kapacitet_villkor": "27 °C/60 % RF", "kapacitet_vid_35_90": 8, "typ": "sorption", "max_yta_kvm": 80, "ljudniva_db": 40, "ljudniva_anm": "40 dB(A)", "effekt_w": 350, "arbetstemp_min_c": -20, "slang": "125 mm in, 40 mm våtluft ut", "kwh_per_liter": 1.40, "kwh_per_liter_villkor": "27 °C/60 % RF"}'::jsonb,
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

-- 3. Erbjudanden. butik_url är Proffsmagasinets egen produktadress och det som
-- läggs i {url} i spårningslänken. uppdaterad är dagen priset lästes, den visas
-- under köpknappen som "pris 16 sep".
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  null,
  k.lagerstatus,
  k.url,
  k.url,
  timestamptz '2026-09-16 12:00:00+02'
from (values
  ('woods-mdk21',          3118.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-mdk21-avfuktare-upp-till-70-m-vs57632'),
  ('woods-sw23fw',         5496.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw23fw-i-ecodefrost-avfuktare-med-luftfilter-100-m-4058316'),
  ('woods-sw39fw',         5948.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw39fw-i-ecodefrost-avfuktare-med-luftfilter-140-m-4058317'),
  ('woods-sw43fw',         7866.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw43fw-i-ecodefrost-avfuktare-med-luftfilter-190-m-4058319'),
  ('woods-dsc50fm',        6072.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-dsc50fm-avfuktare-vs57625'),
  ('woods-sw59fm',         8311.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw59fm-luftavfuktare-vs17696'),
  ('woods-ad20',           3999.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-ad20-hybrid-avfuktare-med-luftrening-vs57634'),
  ('woods-ad30',           5495.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-ad30-hybrid-avfuktare-upp-till-120-m-4028611'),
  ('eeese-adam-20',        2756.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/eeese-adam-avfuktare-20-l-wifi-2920263'),
  ('innova-igdhx-30',      2341.00, 'ej_bestallningsbar', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/innova-igdhx-30-avfuktare-30-l-3137762'),
  ('acetec-evodry-6h-2', 9995.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-6h-20-sorptionsavfuktare-1150001'),
  ('drybox-x4',           12763.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-x4-avfuktare-upp-till-250-m-2950004'),
  ('fresh-d800',           7250.00, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d800-sorptionsavfuktare-3055560')
) as k(slug, pris, lagerstatus, url)
join produkter p on p.slug = k.slug
on conflict (produkt_id, butik_id) do update set
  pris          = excluded.pris,
  ord_pris      = excluded.ord_pris,
  lagerstatus   = excluded.lagerstatus,
  butik_url     = excluded.butik_url,
  affiliate_url = excluded.affiliate_url,
  uppdaterad    = excluded.uppdaterad;

-- 4. Prishistorik, en rad per erbjudande med dagens datum. Feed-importen skriver
-- sedan en ny rad bara när priset ändrats.
insert into prishistorik (erbjudande_id, pris, datum)
select e.id, e.pris, date '2026-09-16'
from erbjudanden e
join produkter p on p.id = e.produkt_id
join kategorier kat on kat.id = p.kategori_id
where kat.slug = 'luftavfuktare'
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
