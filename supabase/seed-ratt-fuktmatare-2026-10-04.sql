-- Rättelse av fuktmätardatan, affiliateagenten 2026-10-04. Hittat av
-- hantverkaren när /fuktmatare/ skrevs. Kompletterar
-- supabase/seed-produkter-fuktmatare-2026-10.sql (redan körd).
--
-- bosch-universalhumid: rf_luft och byggmaterial saknades, så tabellen visade
--   "ej angivet". Bosch bruksanvisning 1 609 92A 7M9 (2022-04-29), svensk del
--   s. 100, "Ändamålsenlig användning": "Mätinstrumentet är till för
--   tillnärmande fastställande av träfukt." Tekniska data (s. 101) har bara
--   träfukt i två trägrupper. Alltså nej på båda. Trägrupperna fylls i med
--   Boschs lista (s. 101).
--
-- bosch-gmm-1-15: "37" träslag kom ur en sammanfattning av Boschs produktsida.
--   Bruksanvisningen 1 609 92A B3E (2025-03-27), svensk del s. 127–129 och
--   menyöversikten, anger "Alla trämaterial 4 % ... 32 %", en meny
--   <Materialalternativ> med undermenyn <Trä> och valet <Byggträ> när träslaget
--   är okänt, men inget antal. Beslut: nyckeln står kvar med bruksanvisningens
--   uppgift i stället för talet. byggmaterial saknades och fylls i ur samma
--   tekniska data (tio material, enligt Bosch bara referensvärden).
--
-- Körs efter seed-produkter-fuktmatare-2026-10.sql. Idempotent (jsonb ||).
-- INTE körd mot databasen.

begin;

update produkter set
  specs = specs || '{"rf_luft": "nej", "byggmaterial": "nej, bara trä enligt Bosch", "traslag": "2 trägrupper: A lönn, björk, lärk, douglasgran, körsbär, gran; B ask, furu, ek, valnöt, bok", "anmarkning": "Proffsmagasinet säljer den som Bosch DIY UniversalHumid, artikelnummer 4054182; Bosch 3 603 F88 000. Bosch: till för att bestämma träfukt, inte byggmaterial eller luftens fuktighet. Stiften ska in 4–5 mm, markering på stiften; längd i mm anges inte. Garanti 2 år, 3 år vid registrering, 12 månader vid yrkesmässig användning."}'::jsonb,
  uppdaterad = now()
where slug = 'bosch-universalhumid';

update produkter set
  specs = specs || '{"traslag": "val av träslag i menyn, och Byggträ när träslaget är okänt; antalet anges inte i bruksanvisningen", "byggmaterial": "10, bara som referens enligt Bosch", "kalla": "Bosch bruksanvisning 1 609 92A B3E (2025-03-27), svensk del s. 124–129 och menyöversikten; Bosch tillverkargaranti 1 600 A02 CK4 (2021-12-01)", "anmarkning": "Proffsmagasinets artikelnummer 4079903; Bosch 0 601 078 200. Mätdjup 0–30 mm. Bruksanvisningen anger 4–32 % för alla trämaterial. Boschs produktsida säger 37 träslag, men talet står inte i bruksanvisningen och används inte. Byggmaterialen: lagningsmassa och avjämningsmassa för betong, anhydrit, cement (golv), cement, murstenar, kalkmurbruk, gipsskiva, gips och lättbetong. Lämplig för mätning inomhus. Temperaturkompensering anges inte. Garanti som GMP 2-15."}'::jsonb,
  uppdaterad = now()
where slug = 'bosch-gmm-1-15';

commit;
