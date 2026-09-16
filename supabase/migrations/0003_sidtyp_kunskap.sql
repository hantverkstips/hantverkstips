-- Sidtypen kunskap i klickspårningen. Kunskapsartiklar fick 2026-09-16 blocket
-- "Produkterna vi nämner" sist ("en produkt per typ, sist", docs/DESIGN.md 5.3),
-- och köpknapparna där skickar sidtyp=kunskap till /go/. Listan speglar SIDTYPER
-- i src/lib/affiliate.ts; ändras den ena ändras den andra.

alter table klick
  drop constraint klick_sidtyp_check;

alter table klick
  add constraint klick_sidtyp_check
    check (sidtyp in ('guide', 'problemguide', 'projektguide', 'test', 'kategori', 'verktyg', 'jamforelse', 'kunskap'));
