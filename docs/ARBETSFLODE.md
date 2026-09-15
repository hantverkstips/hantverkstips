# Arbetsflöde

Hur teamet av agenter arbetar. Christian är beställare och sista instans. Huvudsessionen (Claude i terminalen) är koordinator: tar emot uppdrag, väljer agenter, driver arbetet till klart.

## Två nivåer

**Seniorer** (körs på huvudmodellen): kravställer, granskar, säger nej. De skriver briefer och gör bedömningar, men producerar sällan slutmaterial själva.

**Utförare** (körs på Opus): skriver texter, bygger komponenter, kör analyser. Arbetar alltid från en skriftlig brief. Levererar aldrig direkt till publicering.

| Roll | Nivå | Fil |
|---|---|---|
| SEO-strateg | Senior | `.claude/agents/seo-strateg.md` |
| Teknisk ansvarig | Senior | `.claude/agents/teknisk-ansvarig.md` |
| Produktexpert | Senior | `.claude/agents/produktexpert.md` |
| UX- och designansvarig | Senior | `.claude/agents/designansvarig.md` |
| Affiliateansvarig | Senior | `.claude/agents/affiliateansvarig.md` |
| Chefredaktör | Senior | `.claude/agents/chefredaktor.md` |
| Analytiker | Senior | `.claude/agents/analytiker.md` |
| Skribent | Utförare | `.claude/agents/skribent.md` |
| Utvecklare | Utförare | `.claude/agents/utvecklare.md` |

Verktygsutveckling (kalkylatorer, feed) leds av teknisk ansvarig med utvecklaren som utförare.

## Grundloopen

1. **Brief.** En senior skriver en brief till en utförare. Briefen är konkret: vad som ska göras, vilka källor som gäller, vad som räknas som klart, vad som är förbjudet. Briefer sparas i `docs/briefer/` så de kan återanvändas.
2. **Utförande.** Utföraren levererar mot briefen. Om briefen är oklar frågar utföraren istället för att gissa.
3. **Granskning.** Senioren granskar med konkreta ändringskrav, inte allmänna omdömen. "Stryk stycke tre, det är fyllnad" slår "gör texten stramare".
4. **Nytt varv.** Utföraren rättar. Minst ett varv, ofta två. Efter tre varv utan godkännande går ärendet till koordinatorn; briefen var sannolikt fel.
5. **Tvärgranskning.** Andra seniorer granskar sin del (se checklistan nedan).
6. **Klart.** Bygget grönt, committat.

## Flöde för en ny innehållssida

```
SEO-strateg         → söker sökintention, väljer huvudfras, kluster, rubrikskiss
Produktexpert       → väljer produkter, samlar fakta och källor, egna mätningar om möjligt
Affiliateansvarig   → bekräftar produkterna finns i feed, provision, vilken som ska lyftas
Chefredaktör        → skriver briefen till skribenten utifrån ovanstående
Skribent            → utkast 1
Chefredaktör        → granskning, ändringskrav
Skribent            → utkast 2
Chefredaktör        → godkänner text (stil + fakta)
SEO-strateg         → godkänner struktur, metadata, interna länkar
Affiliateansvarig   → godkänner länkar, reklammärkning
Teknisk ansvarig    → bygget grönt, prestandabudget hålls
Koordinator         → commit
```

Skribenten ser hela kedjan ovanför sig i briefen. Ingen skriver utan att veta vilken sökfras, vilka produkter och vilken vinkel.

## Flöde för ett nytt verktyg (kalkylator)

```
Produktexpert       → vilken beräkning, vilka indata, vilka formler, källor för formlerna
SEO-strateg         → sökfras, hur verktyget länkas från guider
Designansvarig      → skiss av gränssnittet, tillstånd (tomt, ifyllt, fel)
Teknisk ansvarig    → teknisk spec: komponent, props, data från Supabase eller statiskt
Utvecklare          → implementation
Teknisk ansvarig    → kodgranskning, prestandabudget
Designansvarig      → visuell granskning mot skissen
Chefredaktör        → texten i och runt verktyget
Koordinator         → commit
```

## Checklista före commit

Koordinatorn bockar av. Alla punkter, varje gång.

- [ ] Text godkänd av chefredaktör (stil och fakta)
- [ ] Struktur och metadata godkänd av SEO-strateg
- [ ] Länkar och märkning godkänd av affiliateansvarig
- [ ] `npm run build` grönt
- [ ] Prestandabudget hålls (teknisk ansvarig)
- [ ] Nya komponenter visuellt godkända (designansvarig)
- [ ] Commit-meddelande på svenska, imperativ

## Hur koordinatorn anropar agenter

Seniorer anropas med ett uppdrag och läser själva `CLAUDE.md` och `docs/`. Utförare anropas med en färdig brief inklistrad i uppdraget. Utförare får aldrig uppdraget "skriv en artikel om X"; de får briefen.

När flera sidor produceras parallellt körs flera skribenter samtidigt, men granskningen sker en sida i taget.

## Eskalering

Oenighet mellan seniorer (SEO vill ha en rubrik, redaktören en annan) avgörs av koordinatorn, med lutning åt redaktören i textfrågor och SEO i strukturfrågor. Om det påverkar strategi (ny kategori, ändrad målgrupp) går det till Christian.
