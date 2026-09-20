# hantverkstips.se

Affiliate-hub för hantverksverktyg. Organisk trafik via guider, tester, jämförelser och egna verktyg (kalkylatorer). Intäkter via affiliatelänkar till proffsmagasinet.se. Fokus på dyrare produkter: luftavfuktare, lasermätare, kap- och gersågar, proffsmaskiner. Inte småsaker.

## Läs först

- [docs/PROJEKTBRIEF.md](docs/PROJEKTBRIEF.md) – vad vi bygger, för vem, varför, och vad som räknas som klart
- [docs/ROST.md](docs/ROST.md) – vem som talar och hur det låter. Bindande för allt publikt innehåll sedan 2026-09-20. STILGUIDE.md är ersatt och läses inte av den som skriver
- [docs/ARKITEKTUR.md](docs/ARKITEKTUR.md) – stack, mappstruktur, datamodell, konventioner
- [docs/ARBETSFLODE.md](docs/ARBETSFLODE.md) – hur teamet av agenter samarbetar och validerar

## Stack

Astro (content collections, MDX) · React-öar för interaktiva verktyg · Tailwind · Supabase (Postgres + Auth) · Vercel. Språk i kod: TypeScript. Språk i innehåll, dokumentation och commit-meddelanden: svenska.

## Regler som gäller alla agenter

1. Publikt innehåll skrivs i Christians röst enligt ROST.md. Text som låter maskinskriven publiceras inte.
2. Inga påståenden om produkter utan källa eller egen mätning. Osäkert = skriv inte.
3. Alla affiliatelänkar går via `/go/[slug]`, aldrig direkt till butiken. Attribut `rel="sponsored nofollow"`.
4. Varje sida med affiliatelänkar har synlig reklammärkning ovanför första länken.
5. Inget JavaScript till klienten utan att en React-ö faktiskt behövs. Statisk HTML är standard.
6. Kör `npm run build` innan något räknas som klart. Bygget ska vara grönt.
7. Commit ofta, små commits, på svenska, i imperativ: "Lägg till guide om avfuktare i källare".
8. Varje sida ska vara bättre än den som rankar högst på frasen just nu. Briefen innehåller SEO-strategens analys av ettan och en lista över vad vår sida har som ettan saknar. Saknas en punkt i den färdiga sidan publiceras den inte.
9. Sidor planeras i kluster, aldrig en och en. Illustrationer görs när de hjälper läsaren. Verktyg byggs som egna delbara sidor under /rakna/ med egen sökfras, förhandsvisningsbild och resultat i länken.

## Kommandon

```
npm run dev         # lokal utveckling
npm run kontrollera # innehållskontroll: slugs, undermappar, länkar, inlänkar (ingår i build)
npm run illustrationer # <text> i illustrationerna till banor, från illustrationer-kallor/ (ingår i build)
npm run delningsbilder # public/og/[samling]-[slug].png, en per publicerad sida (ingår i build)
npm run build       # produktionsbygge, måste vara grönt
npm run preview     # förhandsgranska bygget
```
