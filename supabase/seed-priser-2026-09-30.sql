-- Prisomläsning för /luftavfuktare/, affiliateagenten 2026-09-30.
-- De sju avfuktare vars pris var läst 2026-09-16, och Innova IGDHX-30 som
-- saknar knapp. Underlag: docs/briefer/underlag-avfuktare-vind-2026-10.md,
-- avsnittet "Prisomläsning /luftavfuktare/, 2026-09-30".
--
-- Utfall: inga priser har ändrats sedan 16/9, och ingen har kampanj eller
-- jämförpris. Alla åtta adresser svarade 200 utan omdirigering. Fröet flyttar
-- bara datumet för priset till 30/9, så att raden under knappen stämmer.
--
-- Innova IGDHX-30 är kvar i sortimentet med status Active men "Ej beställningsbar
-- för tillfället", samma läge som 16/9. aktiv ändras inte; lagerstatus
-- ej_bestallningsbar gör att den står utan knapp.
--
-- Körs efter seed-produkter-2026-09-16.sql. Idempotent. INTE körd mot databasen.
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-09-30.
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
  ('woods-sw23fw',    5496.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw23fw-i-ecodefrost-avfuktare-med-luftfilter-100-m-4058316'),
  ('woods-sw43fw',    7866.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw43fw-i-ecodefrost-avfuktare-med-luftfilter-190-m-4058319'),
  ('woods-dsc50fm',   6072.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-dsc50fm-avfuktare-vs57625'),
  ('woods-sw59fm',    8311.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw59fm-luftavfuktare-vs17696'),
  ('woods-ad20',      3999.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-ad20-hybrid-avfuktare-med-luftrening-vs57634'),
  ('woods-ad30',      5495.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-ad30-hybrid-avfuktare-upp-till-120-m-4028611'),
  ('eeese-adam-20',   2756.00, null, 'i_lager',            'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/eeese-adam-avfuktare-20-l-wifi-2920263'),
  ('innova-igdhx-30', 2341.00, null, 'ej_bestallningsbar', 'https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/innova-igdhx-30-avfuktare-30-l-3137762')
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
where p.slug in ('woods-sw23fw', 'woods-sw43fw', 'woods-dsc50fm', 'woods-sw59fm',
                 'woods-ad20', 'woods-ad30', 'eeese-adam-20', 'innova-igdhx-30')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
