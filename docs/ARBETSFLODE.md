# Arbetsflöde

Hur teamet av agenter arbetar. Christian är beställare och sista instans. Huvudsessionen (Claude i terminalen) är koordinator: tar emot uppdrag, väljer agenter, driver arbetet till klart.

## Två nivåer

**Seniorer** (körs på huvudmodellen): kravställer, granskar, säger nej. De skriver briefer och gör bedömningar, men producerar sällan slutmaterial själva.

**Utförare**: bygger komponenter och kör analyser (utvecklaren, på Opus) eller skriver sidor (skribenten, på huvudmodellen sedan 2026-09-16, eftersom rösten är sajtens viktigaste tillgång). Arbetar alltid från ett komplett uppdrag. Levererar aldrig direkt till publicering.

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

Två granskningspunkter per leverans, aldrig fler. Beslutat av Christian 2026-09-16 efter att första omgången tog timmar för små saker.

1. **Uppdrag.** Koordinatorn ger utföraren hela uppdraget från start, med alla krav (STILGUIDE, SEO-regler, design, källor, vad som är förbjudet). Inga mellanled, inga separata underlagsagenter.
2. **Utförande.** Utföraren levererar komplett arbete i ett svep och kontrollerar det själv innan rapport.
3. **En granskning.** Koordinatorn, eller en granskare med alla hattar, granskar allt på en gång och samlar alla anmärkningar i en enda retur med konkreta ändringskrav. "Stryk stycke tre, det är fyllnad" slår "gör texten stramare".
4. **Rättning.** Utföraren rättar allt i returen.
5. **Slutgranskning.** Bygget grönt, en sista titt, commit. Kvarstår fel efter slutgranskningen var uppdraget fel skrivet; koordinatorn skriver om det i stället för att starta ett tredje varv.

## Rösten sedan 2026-09-20

Beslutat av Christian efter läsbarhetsutredningen (`docs/briefer/utredning-lasbarhet-2026-09-20.md`). All publik text skrivs av **hantverkaren** (`.claude/agents/hantverkaren.md`, alltid Fable) i Christians egen röst enligt `docs/ROST.md`. Skribenten och chefredaktörens stilgranskning är ersatta; STILGUIDE.md läses inte längre av den som skriver. Kvar som stöd: SEO-strategen ger en checklista per sida före skrivningen och läser den färdiga sidan mot samma lista efteråt, produktexperten när ett nytt faktum behövs, och en läsare efteråt som jämför sidan med de sidor som redan är skrivna i den nya rösten (aldrig med gamla sidor). Hantverkaren skriver från ett faktablad, inte från den gamla prosan, så att den gamla dialekten inte härmas.

```
SEO-strateg         → checklista per sida i docs/briefer/seo-checklista-[datum]/
Hantverkaren (Fable)→ faktablad ur den gamla sidan, ny text, högläsning, npm run kontrollera
Läsare              → jämför mot redan omskrivna sidor, retur per sida
SEO-strateg         → läser den färdiga sidan mot checklistan
Koordinator         → npm run build, commit, push
```

## Flöde för en innehållsomgång (till 2026-09-20)

Sidor produceras i omgångar om fyra till åtta, en skribent per sida, alla parallellt. Skribenten gör hela kedjan själv.

```
Koordinator         → uppdrag per sida: sökord, typ, pelare, nivå, produkter i databasen, källor att
                      utgå från, vilka andra sidor i omgången som skrivs samtidigt (för länkar och
                      gränsdragning)
Skribent (huvudmod.)→ sökanalys av ettan (WebSearch, WebFetch), listan "bättre än ettan" (minst tre
                      punkter), faktaunderlag med källa per påstående, texten, illustrationerna som
                      SVG-källor, npm run illustrationer, npm run kontrollera. Allt i ett svep.
                      Rör bara sina egna filer och föreslår inlänkar från hubbar i rapporten.
Granskare           → EN agent med alla fyra hattar (redaktion, SEO, affiliate, design) läser alla
                      sidor i omgången samtidigt och skriver en retur per sida i docs/briefer/
Skribenter          → rättar sin sida
Koordinator         → lägger in inlänkar från hubbar, npm run build, skärmdumpar, commit, push
```

Underlaget (sökanalys och fakta) sparas som `docs/briefer/underlag-[slug]-[datum].md` så att nästa uppdatering av sidan kan utgå från det.

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
- [ ] Bättre än ettan: varje punkt i briefens lista finns i sidan (chefredaktör + SEO-strateg)
- [ ] Beställda illustrationer och verktyg finns på plats
- [ ] Struktur och metadata godkänd av SEO-strateg
- [ ] Länkar och märkning godkänd av affiliateansvarig
- [ ] `npm run build` grönt
- [ ] Prestandabudget hålls (teknisk ansvarig)
- [ ] Nya komponenter visuellt godkända (designansvarig)
- [ ] Commit-meddelande på svenska, imperativ

## Hur koordinatorn anropar agenter

Alla agenter anropas med ett komplett uppdrag och läser själva `CLAUDE.md`, `docs/ROST.md` och de dokument uppdraget pekar på. Ett uppdrag är aldrig "skriv en artikel om X"; det innehåller sökord, typ, nivå, produkter, källor och gränsdragning mot andra sidor.

Agenter som arbetar parallellt äger var sin uppsättning filer. Ingen rör en annans fil. Bygget (`npm run build`) körs bara av koordinatorn, eftersom parallella byggen skriver över varandra.

Christian vill inte få frågor om val; teamet beslutar och rapporterar. Rena uppgifter (nycklar, adresser) meddelas som åtgärdspunkter.

## Eskalering

Oenighet mellan seniorer (SEO vill ha en rubrik, redaktören en annan) avgörs av koordinatorn, med lutning åt redaktören i textfrågor och SEO i strukturfrågor. Om det påverkar strategi (ny kategori, ändrad målgrupp) går det till Christian.
