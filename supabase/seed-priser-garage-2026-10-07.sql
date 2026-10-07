-- Prisomläsning för /fukt/avfuktare-garage/ (omgång F, F5), affiliateagenten
-- 2026-10-07. Underlag: docs/briefer/faktablad/affiliate-garage-kalla-utrymmen-2026-10-07.md
-- del 1. En hämtning per produkt; alla sex svarade 200 utan omdirigering.
-- Ingen har kampanj eller jämförpris. Alla sex i lager, "Skickas inom 24 timmar!".
--
-- Ändrat sedan förra läsningen: acetec-evodry-6h-2 och acetec-evodry-rcf-12-g1
-- är i lager igen (var restnoterade). Priserna är oförändrade sedan 4/10.
--
-- Körs efter seed-produkter-2026-09-16.sql och seed-produkter-avfuktare-vind-2026-10.sql.
-- Idempotent. Körs med scratchpad/kor-fro.mjs.

begin;

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-10-07.
insert into erbjudanden (produkt_id, butik_id, pris, ord_pris, lagerstatus, butik_url, affiliate_url, uppdaterad)
select
  p.id,
  (select id from butiker where slug = 'proffsmagasinet'),
  k.pris,
  k.ord_pris,
  k.lagerstatus,
  k.url,
  k.url,
  timestamptz '2026-10-07 12:00:00+02'
from (values
  ('acetec-evodry-6h-2',      10588.00, null, 'i_lager', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-6h-20-sorptionsavfuktare-1150001'),
  ('woods-mdk21',              3118.00, null, 'i_lager', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-mdk21-avfuktare-upp-till-70-m-vs57632'),
  ('acetec-evodry-rcf-12-g1', 15455.00, null, 'i_lager', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/acetec-evodry-rcf-12-g1-sorptionsavfuktare-4043420'),
  ('fresh-d800',               7211.00, null, 'i_lager', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d800-sorptionsavfuktare-3055560'),
  ('fresh-d1200',             10995.00, null, 'i_lager', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/fresh-d1200-sorptionsavfuktare-3055561'),
  ('drybox-x4',               12763.00, null, 'i_lager', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/drybox-x4-avfuktare-upp-till-250-m-2950004')
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
select e.id, e.pris, date '2026-10-07'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('acetec-evodry-6h-2', 'woods-mdk21', 'acetec-evodry-rcf-12-g1',
                 'fresh-d800', 'fresh-d1200', 'drybox-x4')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
