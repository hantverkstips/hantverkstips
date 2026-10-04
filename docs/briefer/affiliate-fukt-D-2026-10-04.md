# Affiliate, fukt omgång D, 2026-10-04

Beslut från affiliateagenten för de två sidorna i omgång D som bär produkter (`docs/SOKORDSANALYS.md` 12.7, D2 och D4). Underlag, båda från underlagsarbetaren 2026-10-04:

- `docs/briefer/faktablad/guider-badrumsflakt.md`
- `docs/briefer/faktablad/guider-avfuktare-tvattstuga.md`

Hantverkaren skriver från faktabladen; det här dokumentet säger vilka produkter som får kort och på vilka villkor.

Fröskript, båda körda 2026-10-04 med `scratchpad/kor-fro.mjs`:

- `supabase/seed-produkter-badrumsflakt-2026-10-04.sql`: 2 produkter, 2 erbjudanden.
- `supabase/seed-produkter-tvattstuga-2026-10-04.sql`: 1 ny produkt, 4 rättade, 5 erbjudanden.

## D2 `/fukt/badrumsflakt/`

### Kravet, och vad som saknas

- **Gällande regler har inget l/s-tal för badrum.** BFS 2024:8, 3 kap. 4–6 §§, kräver kontinuerlig luftväxling och 0,35 l/s per m² för hela bostaden. Folkhälsomyndigheten skriver att den "har inga riktvärden för frånluftsflöden i våtutrymmen".
- **Det enda talet från Boverket är ett upphävt allmänt råd**, BFS 1998:38, 6:232 tabell b (omtryck BFS 2002:19, s. 54):
  - 10 l/s med fönster;
  - utan fönster 15 l/s, eller 10 l/s med forcering till 30 l/s;
  - plus 1 l/s per m² över 5 m².
- Svensk Ventilations branschrekommendation (remiss 2026-06-16) anger 15 l/s.
- Sidan skriver 10 respektive 15 l/s som **Boverkets äldre råd och branschens rekommendation**, aldrig som gällande krav.
- **Saknas:** vilket tryck en verklig badrumskanal ger. Det enda jämförbara talet är ekodesignbladens provpunkt vid 20 Pa (EU 1253/2014, punkt t). Sidans tabell redovisar flödet där, med formeln, och säger att det är en provpunkt.

### Urval: två kort

| Slug | Fläkt | Pris 4/10 | Lager | Flöde vid 20 Pa (egen räkning ur ekodesignbladet) | Uppgift |
|---|---|---|---|---|---|
| `fresh-intellivent-p` | Fresh Intellivent P, vit | 1 649 kr | beställningsvara, "Skickas 2026-10-08" | 13,2 l/s; kurvan ca 14 l/s med Ø118, ca 11 l/s med Ø98 | badrum med fönster, 10 l/s |
| `fresh-intellivent-sky` | Fresh Intellivent Sky, vit | 1 887 kr | i lager (181) | 21,4 l/s; kurvan ca 21 l/s med Ø125, ca 17 l/s med Ø100 | badrum utan fönster, 15 l/s |

Varför bara de två: de är de enda av Proffsmagasinets tolv där tillverkaren visar att fläkten ger 10 l/s eller mer mot 20 Pa.

Utan kort, och varför:

| Fläkt | Pris | Flöde vid 20 Pa | Skäl |
|---|---|---|---|
| PAX Calima, Levante 40/50 och 00 | – | 2,4 l/s, maxtryck 25 Pa | Faller långt under rådet, fast de har 110 m³/h = 30,6 l/s friblåsande |
| PAX Passad 31 | – | 1,8 l/s | Samma skäl |
| Klimat K7 | – | 7,9 l/s | Under 10 l/s |
| Levante 00 | 1 076 kr | – | Har dessutom ingen fuktstyrning |

Sidan får förklara skillnaden mellan friblåsande flöde och flöde mot tryck med dem som exempel, utan kort och utan butikslänk. Calimapaketet och K7-paketet för yttervägg ändrar inte detta: punkt t gäller just väggmonterade fläktar.

Kategori `badrumsflakt` utan kategorisida. Specs i l/s, Pa, dB, styrning, IP, anslutning och garanti, med källa i `kalla`.

### Villkor för sidan

1. **Korten efter tabellen över flödena och efter avsnittet om installationen**, aldrig före. Etiketterna efter uppgiften (fönster eller inte, 10 eller 15 l/s). Hantverkaren skriver dem.
2. **Fast anslutning.** Alla tolv fläktar säljs för fast anslutning, och Elsäkerhetsverket skriver: "Fast anslutning av anordning såväl som installation av ett nytt vägguttag är arbete som endast får utföras av registrerat elinstallationsföretag."
   - Sidan säger det vid korten, och att elinstallatören är en del av kostnaden.
   - Elsäkerhetsverkets sida "Badrum och fläkt" är bara läst som sökmotorns utdrag. Inget om stickpropp skrivs förrän den är läst i en webbläsare.
3. **Talen vid 20 Pa är egen räkning.** Formeln står, och kurvavläsningarna märks som avlästa. "Klarar 15 l/s" skrivs bara om Sky vid 20 Pa, inte som ett löfte för läsarens kanal.
4. **Rättelse:** "140 m³/h vid 57 Pa" för Sky, som står i `underlag-fukt-sortiment-2026-09-30.md` del 5 och i `affiliate-fukt-2026-09-30.md` avsnitt 5, är fel. Det är kurvans två ändpunkter.
5. **Intellivent P vit är beställningsvara** till 8 oktober. Pris och lager läses om samma dag som sidan publiceras.
6. Inga produktbilder, inga nya skript. Proffsmagasinets "bäst i test" om badrumsfläktar bygger på Trustpilot och används inte som källa.

## D4 `/fukt/avfuktare-tvattstuga/`

### Varför urvalet görs nu

Planen sade december. Urvalet håller till 31 januari: maskinerna är etablerade modeller med tillverkarens manualer, och alla tre finns i lager i dag. Det som kan ändras före publicering är pris och lager, och de läses om samma dag som sidan går ut. Att välja nu ger hantverkaren faktabladet i god tid.

### Urval: tre kort

| Slug | Maskin | Pris 4/10 | Tvättläge enligt tillverkaren | Kapacitet med villkor | Uppgift |
|---|---|---|---|---|---|
| `woods-mdx14` | Wood's MDX14 | 1 690 kr | kompressorn kontinuerligt, hög fläkt, timer 1–24 h | 6,0 l vid 20 °C/70 %; 4,3 kWh per dygn vid samma villkor | liten tvättstuga; timern räcker en hel torkning |
| `eeese-adam-20` | eeese Adam 20 L | 2 756 kr | kontinuerligt, hög fläkt, 6 h, stängs sedan av | 11,5 l vid 27 °C/60 % | större tvättstuga |
| `woods-mdk21` | Wood's MDK21 | 3 118 kr | hög fläkt; kompressorn stannar vid ≤40 % RF och startar vid ≥45 % | 20 l vid 30 °C/80 %; vid 20–27 °C ej angivet | maskinen ska sluta avfukta när luften är torr |

Varför de tre:

- **MDX14** är den billigaste med tvättläge, och den enda med energiförbrukning vid tvättstugans temperatur. Med timern upp till 24 h kan den gå så länge som torkningen tog i Energimyndighetens test (snitt 8 h 34 min).
- **Adam** har störst kapacitet vid 27 °C bland maskinerna med tvättläge.
- **MDK21** är den enda vars tvättläge styrs av luftfuktigheten och inte av en fast tid. Det är just det Energimyndigheten pekar på: står avfuktaren på ett dygn ökar energianvändningen två till tre gånger.

Utelämnade, med skäl:

| Maskin | Skäl |
|---|---|
| eeese Emil och Otto 13 L | Samma 6-timmarsläge som Adam med mindre kapacitet. Otto 13 har en kampanj som slutar okänt datum |
| Frico SUN12 | 4 678 kr, beställningsvara, 4,2 l vid 20 °C och lägsta arbetstemperatur 8 °C. Bäst dokumenterad i kyla, men för en uppvärmd tvättstuga löser MDX14 samma uppgift för 2 988 kr mindre |
| Wood's AD20 och AD30 | Luftrenare som tillval till priset. Saknar kapacitet vid 20–27 °C hos tillverkaren |
| SW-serien | Inget tvättläge, och FW-modellerna saknar egna tillverkardokument |
| Sorptionsmaskiner | Ingen tillverkare nämner tvätt |

### Villkor för sidan

1. **Energin jämförs bara där villkoren är desamma.**
   - Energimyndighetens 0,32 kWh/kg för avfuktare och 0,23 för värmepumpstumlare (2017) gäller andra modeller.
   - Sidan ställer inte MDX14:s 4,3 kWh per dygn mot testets kWh per torkning som om de vore samma mätning.
   - Elkostnaden räknas med `/rakna/elkostnad/` i tvättläget, med förvalet.
2. **Sex timmar mot testets torktider.** Att eeese stänger av efter 6 h, medan testets torkningar tog 6 h 54 min till 10 h 24 min, är en egen jämförelse mellan olika maskiner. Sidan säger det så.
3. **Ventilationen.** Tillverkarna råder att stänga dörrar och ventiler. En tvättstuga ska ha frånluft. Sidan ger inte rådet att täppa till ventilen; konflikten löses inte av någon källa, och den får stå som just det.
4. **Rättelser i databasen, körda:**
   - `woods-mdk21`: effekt 275 W enligt manualen 2022, inte 240.
   - `woods-ad30`: kapaciteten gäller 30 °C/80 %.
   - `woods-ad20`: 14 l vid 27/60 är butikens uppgift.
   - Nya nyckeln `tvattlage` på alla tre val och på AD20/AD30.
   - Prisomläsningen gav `fresh-d800` 7 211 kr och `acetec-evodry-6h-2` 10 588 kr, beställningsvara.
5. **`/luftavfuktare/` får MDX14 i tabellen** (sexton produkter). Den har tillverkarens manual och produktblad och klarar knappen. Sidans byte-budget är UX:s.
6. Pris och lager läses om samma dag som sidan publiceras.

## Vad som saknas, båda sidorna

- Ett gällande l/s-krav per badrum, och vilket tryck en verklig kanal ger.
- Forceringsflödet i Svensk Ventilations tabell, som bara finns som bild.
- Elsäkerhetsverkets "Badrum och fläkt" läst i webbläsare.
- kWh per kg tvätt, torktid och DER för alla maskiner hos Proffsmagasinet.
- Hur många kilo tvätt ett tvättläge är tänkt för.
- Kampanjslutet för Otto 13 och Calimapaketet.

## Vad som kräver Christian

Inget.
