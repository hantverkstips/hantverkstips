-- Seed för utveckling. Körs manuellt mot en tom databas efter migrationerna:
--   psql "$DATABAS_URL" -f supabase/seed.sql
-- eller via Supabase SQL-editorn. Aldrig mot produktion.
--
-- Alla specs och priser är PLATSHÅLLARE. Produktexperten ersätter dem med värden
-- från datablad innan något publiceras. Namn med "Platshållare" i är påhittade.

-- Butik. ANNONS_ID och KANAL_ID byts när Adtraction har godkänt kanalen.
insert into butiker (slug, namn, affiliate_natverk, cookie_dagar, provision_procent, lankmall)
values (
  'proffsmagasinet',
  'Proffsmagasinet',
  'adtraction',
  30,
  5.00,
  'https://track.adtraction.com/t/t?a=ANNONS_ID&as=KANAL_ID&t=2&tk=1&epi={epi}&epi2={epi2}&url={url}'
);

-- Kategorier. Slug ska matcha filen i src/content/kategorier/.
-- Krysslaser (2026-09-16) har ännu inga produkter; specs-nycklar enligt kategorifilen:
-- rackvidd_m, noggrannhet_mm_per_10m, linjer, sjalvnivellering_grader, laserklass, batteri.
insert into kategorier (slug, namn, beskrivning)
values
  ('luftavfuktare', 'Luftavfuktare', 'Avfuktare för källare, krypgrund och garage.'),
  ('krysslaser', 'Krysslaser', 'Kors- och linjelasrar för kök, undertak och plattsättning.');

-- Produkter. Specs enligt kategorifilens nycklar:
-- kapacitet_liter_dygn, typ, max_yta_kvm, ljudniva_db, effekt_w, arbetstemp_min_c.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'woods-mrd20',
    'Wood''s MRD20',
    'Wood''s',
    'MRD20',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 10, "typ": "kondens", "max_yta_kvm": 60, "ljudniva_db": 40, "effekt_w": 250, "arbetstemp_min_c": 5}'::jsonb,
    null,
    true
  ),
  (
    'platshallare-sorption',
    'Platshållare sorptionsavfuktare',
    'Platshållare',
    'Sorption 8',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 8, "typ": "sorption", "max_yta_kvm": 80, "ljudniva_db": 45, "effekt_w": 650, "arbetstemp_min_c": -20}'::jsonb,
    null,
    true
  ),
  (
    'platshallare-kondens-liten',
    'Platshållare liten kondensavfuktare',
    'Platshållare',
    'Kondens 6',
    (select id from kategorier where slug = 'luftavfuktare'),
    null,
    '{"kapacitet_liter_dygn": 6, "typ": "kondens", "max_yta_kvm": 35, "ljudniva_db": 42, "effekt_w": 180, "arbetstemp_min_c": 10}'::jsonb,
    null,
    true
  );

-- Erbjudanden. butik_url är butikens egen produktadress; /go/ bygger spårningslänken
-- från butiker.lankmall. affiliate_url är reservlänk om lankmall saknas.
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
values
  (
    (select id from produkter where slug = 'woods-mrd20'),
    (select id from butiker where slug = 'proffsmagasinet'),
    4990.00, null, 'i_lager',
    'https://www.proffsmagasinet.se/PLATSHALLARE/woods-mrd20',
    'https://www.proffsmagasinet.se/PLATSHALLARE/woods-mrd20',
    now()
  ),
  (
    (select id from produkter where slug = 'platshallare-sorption'),
    (select id from butiker where slug = 'proffsmagasinet'),
    7490.00, null, 'i_lager',
    'https://www.proffsmagasinet.se/PLATSHALLARE/sorption',
    'https://www.proffsmagasinet.se/PLATSHALLARE/sorption',
    now()
  ),
  (
    (select id from produkter where slug = 'platshallare-kondens-liten'),
    (select id from butiker where slug = 'proffsmagasinet'),
    2990.00, 3490.00, 'slut',
    'https://www.proffsmagasinet.se/PLATSHALLARE/kondens-liten',
    'https://www.proffsmagasinet.se/PLATSHALLARE/kondens-liten',
    now()
  );

-- En prisrad per erbjudande så att prishistoriken inte är tom.
insert into prishistorik (erbjudande_id, pris, datum)
select id, pris, current_date from erbjudanden where pris is not null;
