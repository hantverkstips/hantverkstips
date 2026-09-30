-- Krysslasrar till /krysslaser/, valda av affiliateagenten 2026-09-30
-- (docs/briefer/affiliate-krysslaser-2026-09-30.md). Tio modeller i
-- jämförelsetabellen; tre av dem är Våra val:
--   bosch-gll-2-10          kors på en vägg, billigaste som håller ±0,3 mm/m
--   bosch-advancedlevel-360 linje runt hela rummet
--   bosch-gcl-2-50-g        grön kors med lodpunkter och mottagare
--
-- Underlag: docs/briefer/underlag-krysslaser-2026-09-30.md, varv 1 och varv 2.
-- Specs är tillverkarens uppgifter ur datablad och bruksanvisningar. Inget är
-- mätt av oss. noggrannhet_mm_per_10m är tillverkarens mm/m gånger tio (egen
-- omräkning, den enda). Saknas ett värde hos tillverkaren saknas nyckeln, så
-- att rutan i tabellen står tom.
--
-- Spec-nycklar (kategorifilen plus de fyra nya från SEO-checklistan
-- docs/briefer/seo-checklista-2026-09-30/krysslaser.md punkt 10):
--   rackvidd_m, rackvidd_mottagare_m, noggrannhet_mm_per_10m, linjer, farg,
--   sjalvnivellering_grader, laserklass, batteri, ip_klass, leverans.
-- Övriga nycklar (pendellas, stativganga, vikt_kg, kalla, anmarkning) visas
-- inte i tabellen men bär underlaget.
--
-- Räckvidd: tillverkarna anger den olika (radie eller diameter, "beroende på
-- ljusförhållanden"). AdvancedLevel 360 anges som diameter och lagras därför
-- som text, så att den inte jämförs som tal. För GLL 3-80 säger Boschs
-- bruksanvisning 2022 inte om 120 m är radie eller diameter; produktbladet
-- 2017 säger diameter. Se briefen, "Öppet".
--
-- Körs efter migrationerna och supabase/seed.sql (kategorin krysslaser och
-- butiken proffsmagasinet finns där). Idempotent: produkter på slug,
-- erbjudanden på (produkt_id, butik_id), prishistorik på (erbjudande_id, datum).
-- INTE körd mot databasen.
--
-- bild_url är null; leverantörsbilder hotlinkas aldrig.
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 1. Kategorin finns i supabase/seed.sql. Upsert här så att fröet går att köra
-- mot en databas där seed.sql körts före 2026-09-16.
insert into kategorier (slug, namn, beskrivning)
values
  ('krysslaser', 'Krysslaser', 'Kors- och linjelasrar för kök, undertak och plattsättning.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkter.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'bosch-gll-2-10',
    'Bosch GLL 2-10 Professional',
    'Bosch',
    'GLL 2-10',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 10, "noggrannhet_mm_per_10m": 3, "linjer": "2 (kors)", "farg": "röd", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "3 × AA, 9 h med kors", "ip_klass": "IP54", "leverans": "AA-batterier och väska ingår", "pendellas": true, "stativganga": "1/4\" och 5/8\"", "vikt_kg": 0.49, "kalla": "Bosch bruksanvisning 1 609 92A 8M3 (2023-04-17); bosch-professional.com 0 601 063 L00", "anmarkning": "Proffsmagasinets artikelnummer CQ17000. Butikens drifttid (6 och 22 h) är GCL 2-15:s; Boschs 9 och 17 h gäller. Mottagare anges inte."}'::jsonb,
    '3165140850247',
    true
  ),
  (
    'geo-fennel-geo1x-green',
    'geo-FENNEL Geo1X-GREEN',
    'geo-FENNEL',
    'Geo1X-GREEN',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 30, "rackvidd_mottagare_m": 60, "noggrannhet_mm_per_10m": 3, "linjer": "2 (kors)", "farg": "grön", "sjalvnivellering_grader": 3, "laserklass": "2", "batteri": "4 × AA, 5 h", "ip_klass": "IP54", "leverans": "AA-batterier, väggfäste och väska ingår; mottagare tillval", "pendellas": null, "lutning": "manuellt läge", "stativganga": "1/4\" och 5/8\"", "kalla": "geo-FENNEL datablad 541250 och bruksanvisning Geo1X-GREEN (geo-fennel.de)", "anmarkning": "Proffsmagasinet kallar den GEO-X1, artikelnummer 3097806. Räckvidd med mottagare 60 m i databladet, 70 m i bruksanvisningen; det lägre talet lagras. Radie enligt tillverkaren. Vikt anges inte."}'::jsonb,
    '4045921015548',
    true
  ),
  (
    'ryobi-rb360gll',
    'Ryobi RB360GLL',
    'Ryobi',
    'RB360GLL',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 25, "noggrannhet_mm_per_10m": 5, "linjer": "360° + 1 vertikal", "farg": "grön", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "4 × AA, 5 h", "leverans": "AA-batterier och fodral ingår", "stativganga": "1/4\"", "vikt_kg": 0.5, "kalla": "Ryobi bruksanvisning RB360GLL (Proffsmagasinets bilaga 74933628); se.ryobitools.eu 5133005310", "anmarkning": "Proffsmagasinets artikelnummer 4048997. IP-klass och lutningsläge anges inte av Ryobi. Gör Det Själv 2026-03-12 mätte 0 mm/m men gav kvalitet 5 av 10 och funktioner 5 av 10."}'::jsonb,
    '4892210201874',
    true
  ),
  (
    'bosch-advancedlevel-360',
    'Bosch AdvancedLevel 360',
    'Bosch',
    'AdvancedLevel 360',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": "24 (diameter)", "noggrannhet_mm_per_10m": 4, "linjer": "360° + 2 vertikala + lodpunkt", "farg": "grön, lodpunkt röd", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "4 × AA, minst 4 h", "leverans": "AA-batterier och väska ingår", "lutning": "lutningsfunktion", "stativganga": "1/4\"", "vikt_kg": 0.52, "kalla": "Bosch bruksanvisning 1 609 92A 855 (2022-09-20); bosch-diy.com 0603663BZ0", "anmarkning": "Proffsmagasinets artikelnummer 4054173 = Bosch 0603663BZ0. Räckvidden anges som diameter och lagras som text. Lodpunkten ±1,0 mm/m. IP-klass anges inte av Bosch. 2 års garanti, 3 vid registrering inom fyra veckor."}'::jsonb,
    '4053423245165',
    true
  ),
  (
    'dewalt-dw088cg',
    'DeWalt DW088CG',
    'DeWalt',
    'DW088CG',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 15, "rackvidd_mottagare_m": 50, "noggrannhet_mm_per_10m": 3, "linjer": "2 (kors)", "farg": "grön", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "3 × AA, 16 h", "ip_klass": "IP54", "leverans": "AA-batterier, fäste och väska ingår; detektor säljs separat", "pendellas": null, "stativganga": "1/4\"", "vikt_kg": 0.75, "kalla": "dewalt.se DW088CG-XJ; DeWalt EU-bruksanvisning NA127863 (08/22); DeWalt UK-datablad (drifttid)", "anmarkning": "Proffsmagasinets artikelnummer CQ11809. DeWalts källor säger olika om räckvidd: dewalt.se 15/50 m, bruksanvisningen 30/100 m, UK-databladet 20/50 m; dewalt.se lagras. Bruksanvisningen beskriver varken pendellås eller manuellt läge."}'::jsonb,
    '5035048669600',
    true
  ),
  (
    'milwaukee-cll-c',
    'Milwaukee CLL-C',
    'Milwaukee',
    'CLL-C',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 30, "rackvidd_mottagare_m": 50, "noggrannhet_mm_per_10m": 3, "linjer": "2 (kors)", "farg": "grön", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "4 × AA, 8 h", "ip_klass": "IP54", "leverans": "AA-batterier, takfäste och väska ingår", "pendellas": true, "lutning": "manuellt läge", "stativganga": "1/4\"", "vikt_kg": 0.74, "kalla": "Milwaukee bruksanvisning CLL (Proffsmagasinets bilaga 72134069); se.milwaukeetool.eu CLL-C 4933478753", "anmarkning": "Proffsmagasinets artikelnummer 3139094. Vikten 740 g är med batterier. Priset 2026-09-30 är nedsatt från 3 391 kr."}'::jsonb,
    '4058546360351',
    true
  ),
  (
    'bosch-gcl-2-50-g',
    'Bosch GCL 2-50 G Professional',
    'Bosch',
    'GCL 2-50 G',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 15, "rackvidd_mottagare_m": 50, "noggrannhet_mm_per_10m": 3, "linjer": "2 (kors) + 2 lodpunkter", "farg": "grön", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "4 × AA", "ip_klass": "IP64", "leverans": "AA-batterier, vridbart fäste RM 10, måltavla och väska ingår", "lutning": "lutningsfunktion", "stativganga": "1/4\"", "vikt_kg": 0.58, "kalla": "Bosch bruksanvisning 1 609 92A 8M2 (2023-07-13); bosch-professional.com 0 601 066 M00", "anmarkning": "Proffsmagasinets artikelnummer 2930433 = Bosch 0 601 066 M00 (billigaste varianten). Lodpunkterna ±0,7 mm/m, 10 m. Mottagare LR 7 säljs separat. Drifttid anges inte av Bosch i någon läst källa."}'::jsonb,
    '4059952511085',
    true
  ),
  (
    'leica-lino-l2s',
    'Leica Lino L2s',
    'Leica',
    'Lino L2s',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 25, "rackvidd_mottagare_m": 80, "noggrannhet_mm_per_10m": 2, "linjer": "2 (kors)", "farg": "röd", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "3 × AA, 8 h med kors", "ip_klass": "IP54", "leverans": "AA-batterier, magnetfäste TWIST 250, måltavla och fodral ingår", "pendellas": true, "stativganga": "1/4\" (5/8\" med adapter)", "vikt_kg": 0.5, "kalla": "Leica Product Data Sheet Lino L2, 2201 V1.0, kolumnen Lino L2s (848435)", "anmarkning": "Proffsmagasinets artikelnummer CQ12200, rubrik Lino L2S-1. Att den är Leicas 848435 bygger på GTIN 7640110697511. Linjenoggrannhet ±0,3 mm/m; nivelleringen ±0,2 mm/m är det som lagras. Butikens 13 h gäller en linje."}'::jsonb,
    '7640110697511',
    true
  ),
  (
    'bosch-gll-3-80',
    'Bosch GLL 3-80 Professional',
    'Bosch',
    'GLL 3-80',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 30, "rackvidd_mottagare_m": 120, "noggrannhet_mm_per_10m": 3, "linjer": "3 × 360°", "farg": "röd", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "4 × AA, 4 h med tre linjer", "ip_klass": "IP54", "leverans": "AA-batterier, måltavla och väska ingår", "pendellas": true, "stativganga": "1/4\" och 5/8\"", "vikt_kg": 0.82, "kalla": "Bosch bruksanvisning 1 609 92A 8AT (2022-10-28); bosch-professional.com 0 601 063 S00", "anmarkning": "Proffsmagasinets artikelnummer CQ17021. 120 m med mottagare: bruksanvisningen säger inte radie eller diameter, produktbladet 2017 säger diameter. I mottagarläge syns linjerna sämre enligt Bosch."}'::jsonb,
    '3165140888356',
    true
  ),
  (
    'milwaukee-m12-3pl-401c',
    'Milwaukee M12 3PL-401C',
    'Milwaukee',
    'M12 3PL-401C',
    (select id from kategorier where slug = 'krysslaser'),
    null,
    '{"rackvidd_m": 38, "rackvidd_mottagare_m": 50, "noggrannhet_mm_per_10m": 3, "linjer": "3 × 360°", "farg": "grön", "sjalvnivellering_grader": 4, "laserklass": "2", "batteri": "M12 Li-ion 4,0 Ah, 15 h", "ip_klass": "IP54", "leverans": "batteri, laddare, takfäste, måltavla och väska ingår", "pendellas": true, "lutning": "manuellt läge", "stativganga": "1/4\" och 5/8\"", "kalla": "Milwaukee bruksanvisning M12 3PL 4931 4704 51 (01.21); se.milwaukeetool.eu M12 3PL 4933478102", "anmarkning": "Proffsmagasinets artikelnummer 2291046. 50 m med detektor LLD50, 100 m med LRD100. IP54 gäller inte batteri och batterifack. Vikt 1 607 g med 6 Ah-batteri; med 4 Ah anges ingen. Gör Det Själv 2026-03-12 mätte 0,2 mm/m. Priset 2026-09-30 är nedsatt från 8 822 kr. Över sidans prisläge; står i tabellen som proffsklassen."}'::jsonb,
    '4058546340353',
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

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-09-30. Alla tio
-- svarade 200 utan omdirigering samma dag.
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
  ('bosch-gll-2-10',          1250.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gll-2-10-korslaser-cq17000'),
  ('geo-fennel-geo1x-green',  1610.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/geo-fennel-geo-x1-korslaser-3097806'),
  ('ryobi-rb360gll',          2149.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/ryobi-rb360gll-linjelaser-gron-med-batterier-4048997'),
  ('bosch-advancedlevel-360', 2252.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-diy-advancedlevel-360-linjelaser-gron-laser-4054173'),
  ('dewalt-dw088cg',          2484.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/dewalt-dw088cg-korslaser-cq11809'),
  ('milwaukee-cll-c',         2543.00, 3391.00, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/milwaukee-cll-c-krysslaser-med-batteri-3139094'),
  ('bosch-gcl-2-50-g',        2863.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gcl-2-50rm10-kombilaser-gron-med-batterier-2930433'),
  ('leica-lino-l2s',          3825.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/leica-lino-l2s-1-korslaser-cq12200'),
  ('bosch-gll-3-80',          4501.00,    null, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/bosch-gll-3-80-korslaser-med-alkaliska-batterier-cq17021'),
  ('milwaukee-m12-3pl-401c',  7939.00, 8822.00, 'i_lager', 'https://www.proffsmagasinet.se/maskiner-verktyg/laserinstrument/linjelasrar-och-korslasrar/milwaukee-m12-3pl-401c-korslaser-gron-med-batteri-och-laddare-2291046')
) as k(slug, pris, ord_pris, lagerstatus, url)
join produkter p on p.slug = k.slug
on conflict (produkt_id, butik_id) do update set
  pris          = excluded.pris,
  ord_pris      = excluded.ord_pris,
  lagerstatus   = excluded.lagerstatus,
  butik_url     = excluded.butik_url,
  affiliate_url = excluded.affiliate_url,
  uppdaterad    = excluded.uppdaterad;

-- 4. Prishistorik, en rad per erbjudande med dagens datum.
insert into prishistorik (erbjudande_id, pris, datum)
select e.id, e.pris, date '2026-09-30'
from erbjudanden e
join produkter p on p.id = e.produkt_id
where p.slug in ('bosch-gll-2-10', 'geo-fennel-geo1x-green', 'ryobi-rb360gll',
                 'bosch-advancedlevel-360', 'dewalt-dw088cg', 'milwaukee-cll-c',
                 'bosch-gcl-2-50-g', 'leica-lino-l2s', 'bosch-gll-3-80',
                 'milwaukee-m12-3pl-401c')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
