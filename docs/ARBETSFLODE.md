# Arbetsflöde

Hur teamet arbetar sedan 2026-09-22. Christian är beställare och sista instans. Huvudsessionen (Claude i terminalen) är koordinator: tar emot uppdrag, kör kedjorna i skillsen, startar agenterna, bygger, committar, pushar och verifierar live. Det som gällde före 2026-09-22 (skribent, chefredaktör, seniorer och utförare) står i git-historiken och gäller inte.

## Principen

Tre nivåer. Christian delegerar till koordinatorn. Koordinatorn delegerar till fyra agenter på Fable som var och en äger ett område och ansvarar för kvaliteten i det. De delegerar det tunga till arbetare på Opus, med instruktioner så exakta att resultatet inte kan bli fel, och godkänner det innan det räknas som klart. En underagent kan inte starta agenter själv, så kedjan går genom koordinatorn: Fable-agenten skriver uppdraget och kraven, koordinatorn startar arbetaren, och resultatet går tillbaka till samma Fable-agent för ja eller retur.

Kunskapen bor i skills, inte i agenterna. En agent är kort och säger vem den är, vad den gör själv, vad den delegerar och hur den svarar. Skillen säger hur saken görs.

## Agenterna

| Agent | Modell | Äger | Delegerar till |
|---|---|---|---|
| `hantverkaren` | Fable | All publik text, i Christians röst. Skriver själv. | `underlag` (faktablad, sökanalys), `lasare` (läsning) |
| `seo-geo` | Fable | Sökordsanalys, kluster, en fras per sida, checklistan per sida, metadata, strukturerad data, intern länkning, GEO | `underlag` (SERP-läsning, volymer), arbetare för mekaniska kontroller |
| `ux-bygge` | Fable | Designsystem, sidmallar, räknarnas gränssnitt och formler, illustrationer, prestanda, teknisk kvalitet | `utvecklare` (kod, SVG), arbetare för mätningar |
| `affiliate` | Fable | Reklammärkning, länkar, produktplacering, produktval mot meriter, Adtraction och Proffsmagasinet, intäkt per sida | `underlag` (produktfakta), `utvecklare` (feed, import) |
| `utvecklare` | Opus | Bygger från spec: komponenter, sidor, formelmoduler, tester, skript, SVG | |
| `lasare` | Opus | Läser färdiga sidor som en husägare, utan regler, och rapporterar meningar och mönster | |
| `underlag` | Opus | Hämtar fakta med källa: faktablad, sökanalys, datablad, produktfakta, räknarunderlag | |

Fable där omdöme om röst, avvägning och kvalitet krävs. Opus där uppgiften är avgränsad och går att kontrollera med tester, checklistor eller läsning. Aldrig "inherit".

## Skillsen

| Skill | Vad den bär |
|---|---|
| `stil-och-design` | Rösten (pekar på ROST.md), designsystemet, sidmallarna, illustrationsreglerna, hur text och bild bedöms |
| `seo-och-geo` | Grundreglerna, metadata, strukturerad data, intern länkning, GEO, checklistmallen per sida |
| `affiliate` | Juridiken, var produkter får stå, produktval, recensionsriktlinjerna, nätverket, mätning, granskningspunkterna |
| `astro-och-prestanda` | Konventioner, prestandabudget och hur den mäts, rendering och cache, bilder och SVG, teknisk SEO i kod, kontroller före leverans |
| `ny-sida` | Kedjan för en ny eller omskriven sida, steg för steg, med vad som stoppar |
| `nytt-verktyg` | Kedjan för en räknare, de sex stegen, textreglerna, bildreglerna, godkännandet |

Dokumenten i `docs/` är källan för detaljer; skillsen är den korta sanningen som agenterna faktiskt läser. Ändras en regel ändras skillen och dokumentet i samma commit.

## Kedjorna

**Ny eller omskriven sida** (`ny-sida`): seo-geo skriver checklistan, underlag skriver faktabladet, hantverkaren skriver texten, lasare läser, seo-geo kontrollerar mot checklistan, hantverkaren rättar och godkänner, affiliate godkänner om sidan har produkter, koordinatorn bygger, committar, pushar och kollar live.

**Ny räknare** (`nytt-verktyg`): underlag hämtar formler och konstanter, ux-bygge godkänner underlaget och skriver specen, utvecklare bygger i sex steg med testet först, hantverkaren skriver all text, ux-bygge granskar mot spec och budget, lasare läser, seo-geo och affiliate godkänner sina delar, koordinatorn bygger och publicerar.

**Kodändring**: ux-bygge specar, utvecklare bygger, ux-bygge godkänner mot spec, budget och 375 px, koordinatorn bygger och publicerar.

**Efterläsning över flera sidor** (efter varje omgång): lasare läser alla nya sidor i följd mot sidor som redan är i rösten, hantverkaren rättar mönstren. Det är steget som hittade dialekten 2026-09-20 och det görs alltid.

## Det mekaniska görs av skript

`npm run kontrollera` (ingår i bygget) stoppar på tankstreck, förbjudna fraser, kortsvar som inte är i blockstil, tom alt, döda länkar, länkar till utkast, dubbla slugs och fel undermapp, och varnar för titel över 60, beskrivning utanför 120 till 155, alt och bildtext över 125, föräldralösa sidor, och räkneorden "alltså", "avgör" och "innan du" över gränsen per sida. Ingen agent räknar tecken. Räknarnas tester (`scripts/test-kalkyl-*.mjs`) låser tal och synliga strängar. Budgeten mäts med kommandona i skillen astro-och-prestanda.

## Regler för alla

- Varje agent får ett komplett uppdrag: vad, varifrån, i vilket format, vilka filer som får röras, vilka kontroller som ska köras. Ett uppdrag är aldrig "skriv en artikel om X".
- Agenter som arbetar parallellt äger var sin uppsättning filer. Ingen rör en annans fil; synpunkter går i rapporten.
- Bara koordinatorn kör `npm run build`; parallella byggen skriver över varandra.
- Ett resultat är klart när den Fable-agent som äger området har skrivit "Godkänd av ..." och koordinatorn har byggt grönt.
- Rapporter är korta: filer, resultat av kontroller, det som var osäkert, det nästa agent ska titta på. Inga sammanfattningar av innehållet; det läses.
- Christian vill inte få frågor om val; teamet beslutar och rapporterar. Rena uppgifter (nycklar, adresser, fakta om honom) meddelas som åtgärdspunkter.
- Commit på svenska i imperativ, små och ofta, push så att Christian kan se live. Live-koll efter varje push.

## Eskalering

Oenighet mellan agenter avgörs av koordinatorn: hantverkaren vinner i textfrågor, seo-geo i struktur, ux-bygge i prestanda och teknik, affiliate i juridik. Påverkar det strategi (ny pelare, ändrad målgrupp, ny butik) går det till Christian.
