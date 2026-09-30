-- Fuktmätare till /fuktmatare/, valda av affiliateagenten 2026-09-30
-- (docs/briefer/affiliate-fukt-2026-09-30.md). Granskning på datablad; inget
-- är mätt av oss. Åtta modeller i jämförelsetabellen; tre av dem är Våra val:
--   bosch-universalhumid  ved och virke
--   elma-dt125            kalla utrymmen, trä, puts och luften i ett instrument
--   bosch-gmm-1-15        utan stifthål i ytan
--
-- Underlag: docs/briefer/underlag-fukt-sortiment-2026-09-30.md, del 2 och
-- "Varv 2, fuktmätarna till fröet". Specs är tillverkarens uppgifter ur
-- datablad och bruksanvisningar. Saknas ett värde hos tillverkaren saknas
-- nyckeln, så att rutan i tabellen står tom.
--
-- Spec-nycklar (briefen, avsnitt 4). Ingen av dem får `bast` i kategorifilen:
--   typ, matomrade_tra, noggrannhet_tra, traslag, byggmaterial, rf_luft,
--   temperaturkompensering, matdjup_mm, stift_mm, hammarelektrod, kontroll,
--   app, batteri, ip_klass, garanti_ar.
-- Övriga nycklar (kalla, anmarkning) visas inte i tabellen men bär underlaget.
--
-- Noggrannhet: Bosch och Testo anger "±1 %" utan att säga om det är
-- procentenheter fuktkvot eller procent av avläsningen. Det lagras som text
-- med förbehållet, aldrig som tal.
--
-- Temperaturkompensering: Elma, Flir och Laserliner kompenserar med
-- omgivningens temperatur; Elma och Laserliner låter också temperaturen
-- ställas in för hand. Bosch anger ingen kompensering och säger att
-- mätobjektet ska ha samma temperatur som omgivningen. Testo och Protimeter
-- nämner inget, och nyckeln saknas.
--
-- Körs efter migrationerna och supabase/seed.sql (butiken proffsmagasinet
-- finns där). Kategorin fuktmatare skapas här. Idempotent: produkter på slug,
-- erbjudanden på (produkt_id, butik_id), prishistorik på (erbjudande_id, datum).
-- INTE körd mot databasen.
--
-- bild_url är null; leverantörsbilder hotlinkas aldrig.
-- affiliate_url = butik_url tills Adtraction godkänt kanalen.

begin;

-- 1. Kategorin. Slug ska matcha filen src/content/kategorier/fuktmatare.md
-- när UX och bygge skapar den.
insert into kategorier (slug, namn, beskrivning)
values
  ('fuktmatare', 'Fuktmätare', 'Fuktmätare för trä och byggmaterial: ved, virke, krypgrund, vind och källare.')
on conflict (slug) do update set
  namn        = excluded.namn,
  beskrivning = excluded.beskrivning;

-- 2. Produkter.
insert into produkter (slug, namn, marke, modell, kategori_id, bild_url, specs, ean, aktiv)
values
  (
    'bosch-universalhumid',
    'Bosch UniversalHumid',
    'Bosch',
    'UniversalHumid',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift", "matomrade_tra": "7,1–74,7 (trägrupp A), 6,4–61,9 (trägrupp B)", "noggrannhet_tra": "±1 % ledningsförmåga vid 25 °C; Bosch anger inte om det är procentenheter", "traslag": "2 trägrupper", "temperaturkompensering": "nej, mätobjektet ska ha omgivningens temperatur", "batteri": "3 × AAA, ca 10 h", "ip_klass": "ingen, inte stänk- och dammskyddad", "garanti_ar": 2, "kalla": "Bosch bruksanvisning 1 609 92A 7M9 (2022-04-29), svensk del s. 100–103; Bosch tillverkargaranti 1 600 A02 CK4 (2021-12-01)", "anmarkning": "Proffsmagasinet säljer den som Bosch DIY UniversalHumid, artikelnummer 4054182; Bosch 3 603 F88 000. Stiften ska in 4–5 mm, markering på stiften; längd i mm anges inte. Garanti 2 år, 3 år vid registrering, 12 månader vid yrkesmässig användning. Luftens RF och byggmaterial anges inte."}'::jsonb,
    '4053423245271',
    true
  ),
  (
    'testo-606-1',
    'Testo 606-1',
    'Testo',
    '606-1',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift", "matomrade_tra": "7,0–47,9 eller 8,8–54,8 beroende på träslag", "noggrannhet_tra": "±1 %; Testo anger inte om det är procentenheter", "traslag": "12 träslag i två kurvor", "byggmaterial": "7 (cementputs, betong, gips, anhydrit, cementbruk, kalkbruk, tegel)", "rf_luft": "nej", "kontroll": "självtest, kalibreringsprotokoll ingår", "app": "nej", "batteri": "2 × AAA, 200 h", "ip_klass": "IP20", "kalla": "Testo datablad testo 606, 0981 9684/msp/01.2023, s. 2; byggmaterial och kontroll ur Testo/Nordtec PocketLine produktblad 02.2007 (Proffsmagasinets bilaga 28825974)", "anmarkning": "Proffsmagasinets artikelnummer 2850033; Testo 0560 6060. Kurva 1: bok, gran, lärk, björk, körsbär, valnöt. Kurva 2: ek, tall, lönn, ask, douglasgran, meranti. Produktbladet 2007 anger 0–90 %; databladet 2023 väger tyngst. Garanti, stiftlängd och hammarelektrod anges inte i de lästa källorna. SP Trä 2012 (PX21326) testade 606-2, inte 606-1."}'::jsonb,
    '4029547008290',
    true
  ),
  (
    'elma-dt125',
    'Elma DT125',
    'Elma',
    'DT125',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift", "matomrade_tra": "1–75", "noggrannhet_tra": "±1 inom 0–30 %, ±2 inom 30–60 %, ±4 inom 60–75 %", "traslag": "3 trägrupper", "byggmaterial": "4 grupper, 0,1–24 %", "rf_luft": "ja, 0–100 %, ±3,5 inom 20–80 %", "temperaturkompensering": "automatisk och manuell", "stift_mm": 8, "hammarelektrod": "tillval", "kontroll": "kontrollpunkter i skyddslocket", "app": "nej", "batteri": "3 × CR2032", "garanti_ar": 1, "kalla": "Elma bruksanvisning SE/NO/DK/EN (Proffsmagasinets bilaga AssetDocument81306978), svenska avsnitt 4 och 6.1, danska tekniska data; elma.dk/produkter/elma-dt125-fugtmaaler-m-naaleelektroder", "anmarkning": "Proffsmagasinets artikelnummer 4065187, ligger under installationstestare hos butiken. Den automatiska kompenseringen använder omgivningens temperatur; den manuella inställningen sparas inte mellan starterna. Hammarelektroden bara ur elma.dk (sammanfattning). IP-klass anges inte."}'::jsonb,
    '5706445840168',
    true
  ),
  (
    'bosch-gmp-2-15',
    'Bosch GMP 2-15 Professional',
    'Bosch',
    'GMP 2-15',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift", "matomrade_tra": "byggträ 6,7–100, gran 8,0–97,3, tall 7,3–97,4; över 80 visas som > 80", "noggrannhet_tra": "±1 % ledningsförmåga vid 25 °C; Bosch anger inte om det är procentenheter", "traslag": "37", "byggmaterial": "10", "rf_luft": "ja, 5–95 %, ±3 inom 5–90 %", "temperaturkompensering": "nej, mätobjektet ska ha omgivningens temperatur", "kontroll": "automatiskt självtest", "batteri": "2 × AA, 40 h, eller Li-jon 3,7 V, 25 h", "ip_klass": "IP65", "garanti_ar": 1, "kalla": "Bosch bruksanvisning 1 609 92A F7L (2025-11-10), svensk del s. 104–106 och 110; Bosch tillverkargaranti 1 600 A02 CK4 (2021-12-01)", "anmarkning": "Proffsmagasinets artikelnummer 4079909; Bosch 0 601 078 100. Stiften ska in 4–5 mm; längd i mm anges inte. Garanti 12 månader vid yrkesmässig användning, 2 år privat, 3 år vid registrering; 1 lagras eftersom instrumentet är ett proffsverktyg. App nämns inte."}'::jsonb,
    '4053423340044',
    true
  ),
  (
    'flir-mr55',
    'Flir MR55',
    'Flir',
    'MR55',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift", "matomrade_tra": "7–29; 30–99 bara som referens", "noggrannhet_tra": "±2 procentenheter inom 7–29 %", "traslag": "9 trägrupper", "byggmaterial": "2 grupper, 1–35 %", "rf_luft": "ja, ±2 inom 10–85 %, ±4 under 10 %", "temperaturkompensering": "automatisk", "stift_mm": 10, "kontroll": "kalibreringstest i instrumentet", "app": "ja", "batteri": "2 × AA, 70 h", "ip_klass": "IP40", "garanti_ar": 3, "kalla": "Flir manual MR55-en-US_AB (2018-08), avsnitt 4.2, 9 och 12 (Proffsmagasinets bilaga 28830159); Flir produktblad 07/18 (bilaga 28830161)", "anmarkning": "Proffsmagasinets artikelnummer ME13552. Kompenserar med omgivningens temperatur; manuell inställning nämns inte. RF-noggrannheten ur manualen; produktbladet går inte att läsa entydigt. Garantin förlängs ett år vid registrering. Hammarelektrod nämns inte."}'::jsonb,
    '5706445881734',
    true
  ),
  (
    'bosch-gmm-1-15',
    'Bosch GMM 1-15 Professional',
    'Bosch',
    'GMM 1-15',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stiftlös", "matomrade_tra": "4–32", "noggrannhet_tra": "±4 % vid 25 °C; Bosch anger inte om det är procentenheter", "traslag": "37", "rf_luft": "nej", "matdjup_mm": 30, "batteri": "2 × AA eller Li-jon 3,7 V, ca 10 h", "ip_klass": "IP65", "garanti_ar": 1, "kalla": "Bosch bruksanvisning 1 609 92A B3E (2025-03-27), svensk del s. 127–129; bosch-professional.com 0 601 078 200 (sammanfattning, för antalet träslag); Bosch tillverkargaranti 1 600 A02 CK4 (2021-12-01)", "anmarkning": "Proffsmagasinets artikelnummer 4079903; Bosch 0 601 078 200. Mätdjup 0–30 mm. Bruksanvisningen anger ett mätområde för alla trämaterial; 37 träslag står bara på Boschs produktsida. Värden för byggmaterial är enligt Bosch bara referens. Temperaturkompensering anges inte. Garanti som GMP 2-15."}'::jsonb,
    '4053423340051',
    true
  ),
  (
    'laserliner-dampmaster-compact-plus',
    'Laserliner DampMaster Compact Plus',
    'Laserliner',
    '082.321A',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift", "matomrade_tra": "4,6–91,6 (grupp A), 6,1–103,6 (B), 3,0–79,2 (C)", "noggrannhet_tra": "±1 inom 5–30 %, ±2 utanför", "traslag": "3 trägrupper", "byggmaterial": "8", "rf_luft": "nej", "temperaturkompensering": "automatisk och manuell", "kontroll": "kontroll mot skyddslocket", "app": "ja", "batteri": "4 × AAA", "kalla": "Laserliner datablad 082.321A (laserliner.com/export/assets/082.321A_en_60_17.pdf); batteri ur bruksanvisning återpublicerad av manuals.plus", "anmarkning": "Proffsmagasinets artikelnummer 4065101. Bruksanvisningen anger noggrannheten annorlunda än databladet; databladet väger tyngst. Den automatiska kompenseringen använder omgivningens temperatur. Stiftlängd, hammarelektrod, IP-klass och garanti anges inte."}'::jsonb,
    '4021563699858',
    true
  ),
  (
    'protimeter-surveymaster',
    'Protimeter SurveyMaster',
    'Protimeter',
    'BLD5375',
    (select id from kategorier where slug = 'fuktmatare'),
    null,
    '{"typ": "stift och stiftlös", "matomrade_tra": "stift 6–99 % WME, över 30 relativt; stiftlöst relativ skala 60–999", "traslag": "korrektionstabell för träslag medföljer", "byggmaterial": "WME-skala (trä-ekvivalent)", "rf_luft": "nej", "matdjup_mm": 19, "stift_mm": 10, "hammarelektrod": "tillval", "kontroll": "inbyggd WME-kontroll", "app": "ja", "batteri": "2 × AA, över 20 h", "garanti_ar": 2, "kalla": "Protimeter datablad AAS-920-085G-EN (07/2024); manual INS5375 Rev. A (2023-06)", "anmarkning": "Proffsmagasinets artikelnummer 4059208. Inte samma instrument som Surveymaster SM i SP Träs test 2012. Noggrannhet, temperaturkompensering och IP-klass anges inte. Garantin gäller tillverkningsfel, inte slitdelar."}'::jsonb,
    '1976449879004',
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

-- 3. Erbjudanden, lästa på Proffsmagasinets produktsidor 2026-09-30. Alla åtta
-- svarade 200 utan omdirigering samma dag (underlagsarbetaren och
-- affiliateagenten). Beställningsvarorna lagras som restnoterad.
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
  ('bosch-universalhumid',                504.00, null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-diy-universalhumid-fuktmatare-for-tra-med-batterier-4054182'),
  ('testo-606-1',                        1609.00, null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/testo-606-1-fuktmatare-2850033'),
  ('elma-dt125',                         1680.00, null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/eltestverktyg/installationstestare/elma-dt125-fuktmatare-med-batteri-for-tra-div-byggnadsmaterial-samt-rel-luftfuktighet-4065187'),
  ('bosch-gmp-2-15',                     2147.00, null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-gmp-2-15-fuktmatare-4079909'),
  ('flir-mr55',                          2990.00, null, 'restnoterad', 'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/flir-mr55-fuktmatare-med-bluetooth-me13552'),
  ('bosch-gmm-1-15',                     3217.00, null, 'restnoterad', 'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/bosch-gmm-1-15-fuktmatare-med-batteri-och-laddare-4079903'),
  ('laserliner-dampmaster-compact-plus', 5236.00, null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/laserliner-082321a-fuktmatare-med-vaska-och-batterier-4065101'),
  ('protimeter-surveymaster',            9695.00, null, 'i_lager',     'https://www.proffsmagasinet.se/maskiner-verktyg/matinstrument/fuktmatare/fuktmatare/protimeter-bld5375-surveymaster-fuktmatare-for-matning-och-sokning-4059208')
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
where p.slug in ('bosch-universalhumid', 'testo-606-1', 'elma-dt125',
                 'bosch-gmp-2-15', 'flir-mr55', 'bosch-gmm-1-15',
                 'laserliner-dampmaster-compact-plus', 'protimeter-surveymaster')
  and e.butik_id = (select id from butiker where slug = 'proffsmagasinet')
  and e.pris is not null
on conflict (erbjudande_id, datum) do update set
  pris = excluded.pris;

commit;
