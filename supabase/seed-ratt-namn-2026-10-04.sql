-- Rättelse av produktnamn, affiliateagenten 2026-10-04, på SEO:s regel.
--
-- Regel (SEO och GEO-agenten): kategorimallen använder namn-fältet i
-- tabeller, kort, Product och ItemList. Ett sista ord som bara upprepar
-- sidans kategori stryks ("Makita SP6000J sänksåg" -> "Makita SP6000J").
-- Kvar står "Professional", serienamn (I-EcoDefrost+, Hybrid, EvoDry) och ord
-- som säger att produkten är något annat än kategorin ("Drybox X685000
-- tillbehörspaket", "Makita 199141-8 styrskena 1 500 mm", "Speedheater Rapid
-- Slim 3-9120 renoveringskit", "Essve FZB gipsskruv …").
--
-- Genomgånget: alla aktiva produkter i luftavfuktare, krysslaser, fuktmatare,
-- sanksagar, vindsventilation, avfuktartillbehor, hogtryckstvattar,
-- fargborttagare och skruvautomater (namnen ur fröskripten i supabase/).
-- Två namn upprepar sin kategori; övriga står kvar.
--
-- Idempotent. INTE körd mot databasen.

begin;

update produkter set namn = 'Makita SP6000J',    uppdaterad = now() where slug = 'makita-sp6000j'    and namn = 'Makita SP6000J sänksåg';
update produkter set namn = 'Makita DFR550ZX1',  uppdaterad = now() where slug = 'makita-dfr550zx1'  and namn = 'Makita DFR550ZX1 skruvautomat';

commit;
