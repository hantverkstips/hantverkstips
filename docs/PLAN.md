# Plan: från tom sajt till lansering

Senast uppdaterad: 2026-09-15. Kompletterar PROJEKTBRIEF.md med ordning och tidsuppskattning. Tider är arbetsinsats för agentteamet plus Christians granskning, inte kalendertid.

## Läget nu

Klart: repo, stack, dokument, agenter, databasschema, Supabase-projekt på gratisplanen, baslayout och /go/-rutt. Bygget är grönt.

Väntar på: Tradedoubler-godkännande (villkor och feed), service role-nyckel i .env, GitHub-repo och Vercel-koppling, egna produktbilder.

## Steg 1: Design och sidmallar

Mål: alla sidtyper finns som fungerande Astro-mallar med riktig typografi och riktiga komponenter, fyllda med platshållarinnehåll.

1. Designriktning godkänd av Christian (det här artifactet).
2. Typsnitt hämtas och self-hostas. Tokens in i global.css.
3. Utvecklaren bygger komponenter: Köpknapp, Produktkort, Jämförelsetabell, Faktaruta, Varning, Innehållsförteckning, Författarruta.
4. Utvecklaren bygger sidmallar: startsida, kategorisida, guide, test, verktygssida.
5. Teknisk ansvarig kör Lighthouse på varje mall. Alla gröna innan vi går vidare.
6. Designansvarig granskar visuellt mot skisserna.

Beroenden: inga externa. Kan börja direkt efter godkännande.

## Steg 2: Databas fylls och produktdata visas

Mål: produkter, erbjudanden och priser i Supabase, visade på sidorna.

1. Affiliateansvarig dokumenterar Tradedoublers feedformat när godkännandet kommit.
2. Utvecklaren bygger importskript: feed till produkter, erbjudanden, prishistorik.
3. Produktexpert fyller specs för första kategorin (luftavfuktare), cirka 12 till 15 produkter.
4. Kategorisidan och produktkorten läser från databasen.
5. Ombyggnad på Vercel triggas vid feed-uppdatering.

Beroenden: Tradedoubler-godkännande. Punkt 3 kan göras manuellt innan feeden finns, med länkar som byts när feeden kommer.

## Steg 3: Första kalkylatorn

Mål: avfuktarkalkylatorn live. Den blir vår första länkbara tillgång.

1. Produktexpert levererar formler med källor: kapacitet utifrån yta, takhöjd, fuktnivå, temperatur och typ av utrymme.
2. Designansvarig skissar gränssnittet.
3. Teknisk ansvarig specar React-ön.
4. Utvecklaren bygger. Resultatet kopplas till produkter i databasen.
5. Chefredaktören skriver texten runt verktyget.

Beroenden: steg 1 klart, steg 2 punkt 3 klar.

## Steg 4: Testartikeln, hela kedjan

Mål: en köpguide om luftavfuktare i källare går från SEO-analys till godkänd publicerad sida. Det bevisar att arbetsflödet håller.

1. SEO-strateg: sökintention, huvudfras, rubrikskiss, intern länkning.
2. Produktexpert: produkturval och faktaunderlag.
3. Affiliateansvarig: bekräftar produkter och länkar.
4. Chefredaktör: brief.
5. Skribent: utkast 1.
6. Chefredaktör: retur med ändringskrav.
7. Skribent: utkast 2.
8. Alla seniorer godkänner sin del.
9. Christian läser och avgör om texten håller.

Om texten inte håller i punkt 9 justeras stilguiden och briefmallen innan fler texter skrivs. Det är det viktigaste beslutet i hela planen.

## Steg 5: Första kategorin fullt utbyggd

Mål: luftavfuktare komplett. Bäst i test-sida, fem till åtta guider, tre till fem tester, kalkylatorn, tre till fyra kunskapsartiklar. Cirka 15 sidor.

Samma flöde som steg 4 för varje sida, flera skribenter parallellt, granskning en i taget.

## Steg 6: Lansering

1. GitHub-repo och Vercel-koppling.
2. Domän pekas mot Vercel.
3. Search Console verifieras, sitemap skickas in.
4. Vercel Analytics på.
5. Reklammärkning och integritetssida kontrollerade av affiliateansvarig.
6. Lighthouse på alla sidor.

Kan ske innan steg 5 är helt klart. Tio bra sidor räcker för att börja indexeras.

## Steg 7: Andra kategorin och mätning

Lasermätare byggs ut enligt samma mönster. Analytikern kopplar Search Console och klickdata, första dashboardvyn i /admin byggs. Från och med nu prioriteras innehåll efter data.

## Beslut som behövs från Christian

| När | Beslut |
|---|---|
| Nu | Designriktning: godkänn eller justera |
| Nu | Service role-nyckel läggs i .env |
| Steg 2 | Tradedoubler: vidarebefordra villkor och feed när godkännandet kommer |
| Steg 4 | Håller testtexten? Detta avgör om vi skalar eller justerar |
| Steg 6 | Domän och GitHub-organisation |
