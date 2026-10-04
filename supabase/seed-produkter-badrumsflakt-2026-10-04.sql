-- Badrumsfläktar till köpguiden /fukt/badrumsflakt/ (omgång D, D2), valda av
-- affiliateagenten 2026-10-04 (docs/briefer/affiliate-fukt-D-2026-10-04.md).
--   fresh-intellivent-p     badrum med fönster: ca 13 l/s vid 20 Pa
--   fresh-intellivent-sky   badrum utan fönster: ca 21 l/s vid 20 Pa
--
-- Underlag: docs/briefer/faktablad/guider-badrumsflakt.md (underlagsarbetaren
-- 2026-10-04), avsnitt 1 och 2. Specs ur tillverkarens produktblad, manualer
-- och ekodesignblad (EU 1253/2014). Inget är mätt av oss.
--
-- flode_20pa_ls är egen räkning ur ekodesignbladets punkt t:
--   maxflöde × (1 + t/100) ÷ 3,6. Sky: 140 × 0,55 = 77,0 m³/h = 21,4 l/s.
--   Intellivent P: 116,1 × 0,41 = 47,6 m³/h = 13,2 l/s. Tolkningen att +20 Pa
--   är ett mottryck är kontrollerad mot Freshs egna tryckkurvor (ca 77 och
--   ca 49 m³/h vid 20 Pa, avlästa). 20 Pa är förordningens provpunkt, inte
--   ett uppmätt kanaltryck.
--
-- Kategorin badrumsflakt har ingen kategorisida (AFFILIATE.md avsnitt 1).
-- Körs efter migrationerna och supabase/seed.sql. Idempotent. Körs med
-- scratchpad/kor-fro.mjs.
-- bild_url är null; affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 1. Kategori utan kategorisida.
insert into kategorier (slug, namn, beskrivning)
values
  ('badrumsflakt', 'Badrumsfläktar', 'Frånluftsfläktar för badrum och tvättstuga i bostad.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkter.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'fresh-intellivent-p',
    'Fresh Intellivent P',
    'Fresh',
    'Intellivent P',
    (select id from kategorier where slug = 'badrumsflakt'),
    null,
    '{"typ": "badrumsfläkt", "flode_max_ls": 37.2, "flode_max_anm": "134 m³/h friblåsande med Ø118-stos enligt produktbladet; ekodesignbladet 116,1 m³/h", "flode_20pa_ls": 13.2, "flode_20pa_anm": "egen räkning ur ekodesignbladet (116,1 m³/h, −59 % vid +20 Pa); kurvan ger ca 14 l/s med Ø118 och ca 11 l/s med Ø98", "maxtryck_pa": 33, "grundflode": "konstant 42 m³/h (Ø98) eller 55 m³/h (Ø118), justerbart", "fuktstyrning": "ja, självjusterande, silent eller max", "styrning": "timer med eftergång 5/15/30 min, dragsnöre, paus 1 h, vädring", "ljud": "12–13 dB(A) konstant, 21 dB(A) silent, 28–29 dB(A) max, avstånd enligt produktbladet", "effekt_w": "2,1–5,5", "kanal_mm": "Ø100 och Ø125, stos ingår; håltagning 105–130 mm", "ip_klass": "IP44", "anslutning": "fast, allpolig brytare", "kallrasskydd": "tillbehör", "app": "nej", "garanti_ar": 5, "kalla": "Fresh produktblad Intellivent P (Edition 2016, Proffsmagasinets bilaga 71612027); Fresh ekodesignblad 197303; fresh.se 197303", "anmarkning": "Vit, Proffsmagasinets artikelnummer 4059558; Fresh 197303. Svart variant 197304 (art.nr 2819283) har samma tal. Produktbladet listar 197302; att kurvan gäller 197303 är inte bekräftat, men maxflöde och maxtryck stämmer med fresh.se. Fast anslutning görs av registrerat elinstallationsföretag (Elsäkerhetsverket)."}'::jsonb,
    '7318111973032',
    true
  ),
  (
    'fresh-intellivent-sky',
    'Fresh Intellivent Sky',
    'Fresh',
    'Intellivent Sky',
    (select id from kategorier where slug = 'badrumsflakt'),
    null,
    '{"typ": "badrumsfläkt", "flode_max_ls": 38.9, "flode_max_anm": "140 m³/h friblåsande", "flode_20pa_ls": 21.4, "flode_20pa_anm": "egen räkning ur ekodesignbladet (140 m³/h, −45 % vid +20 Pa); kurvan för Ø125 ger ca 77 m³/h vid 20 Pa, Ø100 ca 61 m³/h (17 l/s)", "maxtryck_pa": 57, "grundflode": "ca 10 l/s friblåsande", "fuktstyrning": "ja, helautomatisk, fukt ca 28 l/s friblåsande", "styrning": "ljus- och luktsensor, timer ca 20 l/s i 15 min, vädring 1 h per dygn", "ljud": "19 dB(A) på 3 m, lägsta läget", "effekt_w": "2–5", "kanal_mm": "stos Ø98/Ø118 för Ø100/Ø125; håltagning 105–130 mm", "ip_klass": "IP44", "anslutning": "fast, 100–240 V, allpolig brytare inbyggd", "kallrasskydd": "tillbehör", "app": "ja, Bluetooth", "garanti_ar": 5, "kalla": "Fresh manual Intellivent SKY nordisk (s. 5 och 7, kapacitetskurva); Fresh ekodesignblad EKO00018-A; fresh.se 197402", "anmarkning": "Vit, Proffsmagasinets artikelnummer 2819285; Fresh 197402. 140 m³/h och 57 Pa är kurvans ändpunkter, inte en punkt. Kurvorna med designfront ger lägre flöde. Fast anslutning görs av registrerat elinstallationsföretag (Elsäkerhetsverket)."}'::jsonb,
    '7318111974022',
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

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-10-04. Båda
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
  ('fresh-intellivent-p',   1649.00, null, 'restnoterad', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/ventilation/flaktar/badrumsflaktar/fresh-intellivent-p-badrumsflakt-vit-202x152x64-mm-134-mh-4059558'),
  ('fresh-intellivent-sky', 1887.00, null, 'i_lager',     'https://www.proffsmagasinet.se/vvs-inomhusklimat/ventilation/flaktar/badrumsflaktar/fresh-intellivent-sky-badrumsflakt-vit-2819285')
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
where p.slug in ('fresh-intellivent-p', 'fresh-intellivent-sky')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
