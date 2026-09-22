---
name: nytt-verktyg
description: Hur en räknare under /rakna/ byggs på hantverkstips.se, från formel och test till sida, kort, bilder och inbäddning, och hur den godkänns. Sex steg i fast ordning, textreglerna för besked och kort, bildreglerna, och vad som stoppar. Koordinatorn kör den; UX och bygge-agenten äger spec och godkännande.
---

# Nytt verktyg

En räknare är en egen delbar sida med egen sökfras, resultatet i adressen, en förhandsvisningsbild, och ett svar som en granne förstår utan att ha läst artikeln. Formeln byggs först och utseendet sist, och varje konstant har en källa. Mönstret i detalj står i `docs/SPEC-SIDMALLAR.md` avsnitt 4.7, bildreglerna i skillen stil-och-design, texten i `docs/ROST.md`. Verktygsplanen i `docs/VERKTYGSPLAN.md` säger vilket som byggs härnäst.

## Innan något byggs

- Frasen och volymen står i `docs/SOKORDSANALYS.md`, och SEO och GEO-agenten har sagt att verktyget svarar bättre än en text.
- Underlaget finns i `docs/briefer/underlag-kalkyl-[slug]-[datum].md`: varje formel, gräns och konstant med källa och datum, räkneexempel att testa mot, och vad som är eget antagande. Underlagsarbetaren hämtar, UX och bygge-agenten godkänner underlaget innan steg 1. Utan tal med källa byggs inget.
- UX och bygge-agenten skriver specen: fält, standardvärden, gränser, utfall, beskedens innebörd, vilka produkter som visas om några, och vilka artiklar som bäddar in eller länkar.

## De sex stegen (utvecklaren, Opus, från specen)

1. **Formeln.** `src/lib/kalkyl/[slug].ts`, ren modul utan Astro-importer. `STANDARD`, `GRANSER`, `tolkaQuery(q)` som tål decimalkomma, `rakna[Slug](indata)` med `status: 'ok'` eller `'ogiltig'` och feltext per fält. Varje konstant namngiven överst med kommentaren Källa eller ANTAGANDE. Ingen räkning i en `.astro`-fil.
2. **Testet.** `scripts/test-kalkyl-[slug].mjs`, `node --experimental-strip-types --test`. Minst sex fall som täcker varje utfall, plus `tolkaQuery` och gränserna, mot underlagets räkneexempel eller en tabell i en publicerad artikel (läses från disk, så artikeln blir facit). Grönt innan steg 3.
3. **Formuläret.** `src/components/kalkyl/[X]Form.astro` med props `indata`, `varden`, `fel`, `kompakt`, `idPrefix`, `knappText`. Klasser från `src/lib/kalkyl/stil.ts`. Etiketter ovanför, 48 px fält, feltext under fältet med `aria-describedby`.
4. **Sidan.** `src/pages/rakna/[slug].astro` med `prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, cache-header, `bred={true}`, brödsmulor Hantverkstips / Räkna själv / namnet. `SLUG`, `VERKTYGSNAMN`, `BESKRIVNING` och `titel` som konstanter överst. Ordning: H1 och ingress med varumärkesbilden till höger, `<Faktaruta variant="kortsvar">`, formulär och resultatspalt på linjerat papper, H2 "Därför blev svaret så" med reglerna och källa per rad, H2 "Gör inte det här", produktkort om räkningen pekar på en produkt (efter svaret, aldrig före), H2 "Så räknar jag" med skissen som `<Illustration namn="rakna/[slug]">`, stegen i ord, H3 "Vad siffrorna vilar på" med antagandetabellen i `<Tabellyta kolumner={3}>`, H2 "Läs vidare", `<Faq>` med tre till fem frågor. Strukturerad data `verktyg()` ger `WebApplication`. Delbar adress i ett skrivskyddat fält.
5. **Registret.** En rad i `src/lib/kalkyl/register.ts`: `slug`, `namn` (rubriken på kortet och ankartext i artiklarna, bär frasen), `rad` (en mening med verb som säger vad verktyget gör, som till en granne), `sasong`, `pelare` eller `kategori`.
6. **Inbäddningen.** Slugen i `MED_FORMULAR` i `src/components/ui/Kalkylator.astro`, `<Kalkylator namn="[slug]" />` i artikeln där läsaren just fått veta vad talet betyder, `<Verktygskort kalkylator="[slug]" />` (ett per sida) i syskonsidor. Ett verktyg utan artikel som bäddar in det är föräldralöst och publiceras inte utan beslut.

## Texten (hantverkaren)

Allt en användare läser skrivs av hantverkaren efter att stegen är byggda: `VERKTYGSNAMN`, `BESKRIVNING`, `titel`, H1, ingress, kortsvaret, beskeden och råden i formelmodulens strängar, formulärets etiketter och hjälptexter, "Därför blev svaret så", "Gör inte det här", "Så räknar jag", antagandetabellens texter, alt och bildtext, Faq, namn och rad i registret. Regler utöver ROST.md:

- Resultatspalten bär beskedet som en mening med verb som säger vad läsaren ska göra, det stora talet, en pekrad och länkarna. Uträkningen står under verktyget.
- Bestämd form bara om saker som förklarats: "tejptestet" står inte i kortet förrän testet är förklarat.
- Ord med två betydelser på en byggsajt byts ut: tak, regel, lag, rad, punkt, avdrag.
- Standardvarningen och delatexten är gränssnitt och får vara identiska på alla verktyg: "Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det." och "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar till samma svar."
- Inget internt arbete i publik text: ingen SERP-analys, inga träfflistor, inga datum då en konstant ändrades. Prisrader har däremot alltid datum.
- Testerna låser synliga strängar; när ett besked skrivs om uppdateras påståendet i testet. Tal rörs aldrig.

## Bilderna (UX och bygge-agenten specar, Opus ritar, agenten godkänner)

Tre filer med slugens namn. Skissen i `src/assets/illustrationer-kallor/rakna/[slug].svg` (600 × 360, blyerts på linjerat papper, situationen med mått, ett nyckeltal med gul markering som är det verktyget svarar med, handskrift 24 px) som `npm run illustrationer` konverterar. Varumärkesbilden i `src/assets/illustrationer/rakna/varumarke/[slug].svg` (samma mått, logotypens stil, ingen text, motivet förstås på en sekund, bbox-kvot 1,72 ± 0,05, fyller 90 till 94 procent). Delningsbilden `public/og/rakna-[slug].png` genereras av `npm run delningsbilder`. Alt på skissen under 125 tecken, varumärkesbilden har tom alt.

## Godkännande

1. Testet grönt, `npx astro check` 0 fel, `npm run kontrollera` 0 fel.
2. UX och bygge-agenten: fälten och utfallen mot specen, formuläret på 375 px, feltillstånd, tomt tillstånd, delad adress ger samma svar, bilderna mot reglerna, sidan under budgeten. "Godkänd av UX och bygge" eller lista.
3. Läsaren (Opus): kortet går att förstå utan sidan, beskedet säger vad man ska göra, inga mönster från de andra verktygen. Betyg.
4. Hantverkaren: godkänner texten efter läsarens retur.
5. SEO och GEO-agenten: title, description, `WebApplication`, länkar in och ut, kortets namn bär frasen.
6. Affiliateagenten om verktyget visar produkter: kort efter svaret, produkten klarar värdet, reklamband, märkning.
7. Koordinatorn: bygge, commit, push, live-koll med ett räkneexempel i adressen som ger väntat tal.

## Vad som stoppar

En konstant utan källa. Ett besked som inte säger vad läsaren ska göra. Ett kort som visar en produkt som inte klarar värdet. Ett verktyg utan artikel som bäddar in det. Ett test som inte täcker varje utfall. En skiss med `<text>` kvar eller över 40 kB.
