---
name: ny-sida
description: Hela kedjan för en ny eller omskriven sida på hantverkstips.se, från checklista till live. Vem gör vad, i vilken ordning, vad som ska finnas innan nästa steg får börja, och hur det godkänns. Koordinatorn kör den; agenterna får sina delar.
---

# Ny sida

En sida räknas som klar när den är bättre än ettan på minst tre konkreta punkter, låter som Christian, klarar SEO-checklistan, har sina länkar, bygger grönt och svarar 200 i produktion. Kedjan nedan är den som tog sajten från 3,0 till 4,1 i läsarnas betyg, och ordningen är avsiktlig: faktan innan texten, texten innan bedömningen, bedömningen innan bygget.

Sidor planeras i kluster, aldrig en och en. Innan kedjan startar ska sidan stå i en startlista i `docs/SOKORDSANALYS.md` med fras, volym och vinnbarhet, och pelaren ska ha en hubfil.

## Steg 1. Checklista (SEO och GEO-agenten, Fable)

Skriver checklistan per sida enligt skillen seo-och-geo avsnitt 6 till `docs/briefer/seo-checklista-[datum]/[grupp].md`. Får delegera SERP-läsningen och teckenräkningen till en Opus-arbetare, men skriver kraven själv. Klart när varje sida har alla tolv punkter och listan "bättre än ettan" har minst tre punkter.

## Steg 2. Faktablad (Opus-arbetaren underlag, beställd av hantverkaren)

Ett faktablad per sida i `docs/briefer/faktablad/[samling]-[slug].md`: varje tal med källa, adress och hämtningsdatum, varje tabell, varje intern länk, produkter med slug, och för en ny sida sökanalysen av de fem som rankar. Egen räkning märkt som egen. Ingen prosa från en gammal sida följer med; faktabladet är det enda hantverkaren skriver från. Klart när inget tal saknar källa.

## Steg 3. Texten (hantverkaren, Fable, skriver själv)

Läser `docs/ROST.md`, checklistan och faktabladet. Skriver hela sidan: frontmatter, kort svar i blockstil, brödtext, alt och bildtext, Faq. Bäddar in räknare där läsaren just förstått talet. Läser sidan högt och mot två sidor som redan är skrivna i rösten. Kör `npm run kontrollera`. Klart när ROST.md avsnitt 3 till 5 håller och kontrollen är grön.

Regler för filen: bara de fält skillen stil-och-design och `docs/ARKITEKTUR.md` tillåter; komponenter med sina props; tabellvärden och källrader orörda om sidan är en omskrivning; `uppdaterad` satt.

## Steg 4. Läsning (Opus-arbetaren läsare)

Läser sidan som en husägare som landat från Google, utan tillgång till docs, tillsammans med tre till fem sidor som redan är skrivna i rösten. Citerar varje mening som inte går att förstå vid första läsningen, varje mönster som återkommer mellan sidorna, varje tankstreck, och betygsätter 1 till 5. Skriver till `docs/briefer/retur-[slug]-[datum].md`. Klart när rapporten är skriven. Läsaren ändrar aldrig i sidan.

## Steg 5. Kontroll mot checklistan (SEO och GEO-agenten)

Läser den färdiga sidan mot sin egen checklista, punkt för punkt, och lägger returen i samma fil som läsarens. Bara det som spelar roll för sökningen; stil är läsarens sak. "Inget att ändra" där det stämmer.

## Steg 6. Rättning och godkännande (hantverkaren)

Rättar varje punkt i returen, eller skriver varför en punkt inte ska rättas. Läser om sidan högt. Godkänner med en rad: "Godkänd av hantverkaren" plus vad som ändrats. Sidan är inte klar förrän den raden finns, och den skrivs av hantverkaren, inte av arbetaren.

Har sidan produkter eller reklam går den till affiliateagenten för punkt 1 till 7 i skillen affiliate innan steg 7.

## Steg 7. Bygge, commit, push, live (koordinatorn)

1. Alla räknartester gröna, `npm run kontrollera` 0 fel.
2. `npm run build` grönt utan komponentvarningar. Bara koordinatorn bygger.
3. Inlänkar från minst två andra innehållsfiler finns; hubben publiceras när pelaren når fem sidor.
4. Commit på svenska i imperativ, push till main.
5. Live-koll: adressen svarar 200 och en mening ur den nya texten finns i svaret. Vänta in Vercel, cirka 60 sekunder.
6. Rapport till Christian med länken, vad granskningen fångade, och vad som väntar.

## Vad som stoppar

- En punkt i "bättre än ettan" saknas i den färdiga sidan.
- Ett tal utan källa, eller en källa som säger något annat än sidan.
- Läsarens betyg under 4 utan att rättning gjorts.
- Ett test som läser artikeln från disk och faller.
- Röd byggkontroll, rött bygge, eller en sida som länkar till ett utkast.

## Omskrivning av en befintlig sida

Samma kedja. Skillnaden är steg 2: faktabladet kokas ur den gamla sidan, och den gamla prosan stängs innan steg 3 börjar. Den är inte en förlaga, den är anledningen till omskrivningen. Jämförelsen i steg 4 görs bara mot sidor som redan är i den nya rösten.
