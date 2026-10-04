-- Prisomläsning för /fuktmatare/, affiliateagenten 2026-10-04, samma dag som
-- omgång C publiceras (SEO:s villkor). Underlag:
-- docs/briefer/underlag-fukt-sortiment-2026-09-30.md, avsnittet
-- "Prisomläsning /fuktmatare/, 2026-10-04". En hämtning per produkt; alla åtta
-- svarade 200 utan omdirigering.
--
-- Ordinarie pris är oförändrat för alla åtta. Fem ligger i Proffsmagasinets
-- "Laser- & mätkampanj" med kampanjpris; kampanjens slutdatum anges inte, så
-- priserna läses om innan nästa publicering som visar dem.
--
-- pris = kampanjpriset när det finns, annars ordinarie pris.
-- ord_pris = det lägsta pris butiken själv redovisar som jämförelse
-- (LowestHistoricalPrice), inte bara listpriset: för fyra av fem är det samma
-- som listpriset, för Flir MR55 är det 2 727 kr, lägre än listpriset 2 990.
-- Mallen visar ord_pris som "tidigare" i blyerts-2, aldrig som rabatt.
--
-- Beställningsvaror (Flir MR55, Bosch GMM 1-15) lagras som restnoterad.
--
-- Körs efter seed-produkter-fuktmatare-2026-10.sql. Idempotent.
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-10-04.
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
  ('bosch-universalhumid',                428.00,  504.00, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-diy-universalhumid-fuktmatare-for-tra-med-batterier-4054182'),
  ('testo-606-1',                        1609.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/testo-606-1-fuktmatare-2850033'),
  ('elma-dt125',                         1428.00, 1680.00, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/eltestverktyg/installationstestare/elma-dt125-fuktmatare-med-batteri-for-tra-div-byggnadsmaterial-samt-rel-luftfuktighet-4065187'),
  ('bosch-gmp-2-15',                     2082.00, 2147.00, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-gmp-2-15-fuktmatare-4079909'),
  ('flir-mr55',                          2317.00, 2727.00, 'restnoterad', 'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/flir-mr55-fuktmatare-med-bluetooth-me13552'),
  ('bosch-gmm-1-15',                     3023.00, 3217.00, 'restnoterad', 'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-gmm-1-15-fuktmatare-med-batteri-och-laddare-4079903'),
  ('laserliner-dampmaster-compact-plus', 5236.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/laserliner-082321a-fuktmatare-med-vaska-och-batterier-4065101'),
  ('protimeter-surveymaster',            9695.00,    null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/protimeter-bld5375-surveymaster-fuktmatare-for-matning-och-sokning-4059208')
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
select e.id, e.pris, date '2026-10-04'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('bosch-universalhumid', 'testo-606-1', 'elma-dt125', 'bosch-gmp-2-15',
                 'flir-mr55', 'bosch-gmm-1-15', 'laserliner-dampmaster-compact-plus',
                 'protimeter-surveymaster')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
