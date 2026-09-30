-- Drybox DryAttic till /fukt/avfuktare-vind/, vald av affiliateagenten 2026-09-30
-- (docs/briefer/affiliate-avfuktare-vind-2026-10.md, "DryAttic").
--   drybox-dryattic   styrd ventilation med värmekabel; kortet efter stycket
--                     som väljer mellan sorption och styrd ventilation
--
-- Underlag: docs/briefer/underlag-avfuktare-vind-2026-10.md, avsnittet
-- "Drybox DryAttic, 2026-09-30". Specs är tillverkarens uppgifter ur
-- produktbladet 2026-04 (drybox.se, nyare än Proffsmagasinets bilaga från 2023),
-- installationsmanualen och drybox.se. Inget är mätt av oss. Saknas ett värde
-- hos tillverkaren saknas nyckeln.
--
-- Kategorin vindsventilation har ingen kategorisida (AFFILIATE.md avsnitt 1:
-- en produkt som inte är en luftavfuktare läggs inte i luftavfuktare, eftersom
-- den då hamnar i tabellen på /luftavfuktare/).
--
-- Körs efter migrationerna och supabase/seed.sql. Idempotent: produkter på slug,
-- erbjudanden på (produkt_id, butik_id), prishistorik på (erbjudande_id, datum).
-- INTE körd mot databasen.
--
-- bild_url är null; leverantörsbilder hotlinkas aldrig.
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 1. Kategori utan kategorisida; raden finns för klick.kategori_slug och epi2.
insert into kategorier (slug, namn, beskrivning)
values
  ('vindsventilation', 'Styrd ventilation för vind', 'Styrd ventilation med fläkt och värmekabel för kallvindar.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkt.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'drybox-dryattic',
    'Drybox DryAttic',
    'Drybox',
    'DryAttic',
    (select id from kategorier where slug = 'vindsventilation'),
    null,
    '{"typ": "styrd ventilation med värmekabel", "flakt_m3h": 350, "effekt_max_w": 610, "energi_kwh_ar": "250–400 för en vind på 100 kvm enligt Drybox; produktbladet anger ca 400 och 4 kWh per kvm och år, villkor ej angivna", "yta_kvm": "10–100", "varmekabel_m": 50, "borvarde_rf": "≤ 60 %", "arbetstemp_min_c": -40, "styrning": "två styrenheter med lysdioder, tre givare; ingen display eller app", "el": "230 V; IP43, monteras inne på vinden", "garanti_ar": 2, "matt_flakt_mm": "750 × 300 × 300", "vikt_kg": 15, "kalla": "Drybox produktblad DryAttic (drybox.se, 2026-04-13); installationsmanual DryAttic (drybox.se, 2022-12, s. 2–11); drybox.se/produkter/dryattic/ (2026-04-20)", "anmarkning": "Proffsmagasinets artikelnummer 3137751; Drybox X3020. Inte en avfuktare i teknisk mening: fläkten blåser in uteluft när den är torrare än vindens, och värmekabeln höjer temperaturen när risken för påväxt är stor. Tröskelvärdena anges inte. Effekt för fläkt och kabel var för sig anges inte, inte heller ljud i dB, ventilstosens diameter, eller om anslutningen är stickpropp eller fast. Takfotsventilationen ska tätas (manualen s. 2–3; s. 5 tillåter takfot som utlopp i bortersta facket). Garanti 2 år, 5 år vid registrering enligt Drybox nyaste källor; butiken skriver 7 år, manualen 6. Proffsmagasinets produktblad (2023) skriver ljudlös och 15/19 kg; drybox.se:s blad från 2026 stryker ljudlös och anger 15 kg."}'::jsonb,
    '7350069720283',
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

-- 3. Erbjudande, läst på Proffsmagasinets produktsida 2026-09-30. Adressen
-- svarade 200 utan omdirigering. Beställningsvara, "Skickas om 9-14 dagar".
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
  ('drybox-dryattic', 14999.00, null, 'restnoterad', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-dryattic-avfuktare-for-vind-3137751')
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
select e.id, e.pris, date '2026-09-30'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug = 'drybox-dryattic'
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
