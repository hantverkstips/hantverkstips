# Affiliate, fukt omgång F, 2026-10-07

Affiliateagentens beslut för F1 och F5 (`docs/SOKORDSANALYS.md` 12.7). Underlag från underlagsarbetaren 2026-10-07:

- `docs/briefer/faktablad/affiliate-draneringsror-2026-10-07.md`
- `docs/briefer/faktablad/affiliate-garage-kalla-utrymmen-2026-10-07.md`

Prisfrö: `supabase/seed-priser-garage-2026-10-07.sql`, kört med `scratchpad/kor-fro.mjs` (6 erbjudanden).

## F1 `/grund/draneringsror/`: nej

Inga kort, ingen annonslänk, inget reklamband. Sidan är kunskap med köpråd i text.

Varför inget kort:

- **Proffsmagasinet har inget rör för husdränering.**
  - Det enda dräneringsröret är Pipelife PVC 92/80 i 10-metersring, 1 820 kr per ring. Pipelife listar det under "Jordbruksdränering".
  - Butikens egen text säger att byggdräneringsrör rekommenderas runt hus.
  - Byggdräneringsrör (Pipelife BDR 110, Uponor, Wavin), dräneringsbrunnar, spolbrunnar, grundskivor och makadam finns inte i sortimentet.
  - Att länka jordbruksröret till en husägare som ska dränera runt huset vore att sälja fel vara.
- **Fiberduken klarar inte kraven.** Gelia fiberduk 1,4 × 50 m kostar 1 285 kr och ligger alltså under ordervärdesgränsen. Den saknar tillverkarblad; klassen N1 är bara butikens uppgift.
- **Regeln om förbrukningsvara är inte uppfylld.** Räknaren `/rakna/dranering/` räknar kronor och löpmeter, inte mängder rör eller duk (skillen avsnitt 2). Räknarens materialpost för en grund på 40 löpmeter är 12 000–36 000 kr, men inget av det går att köpa hos Proffsmagasinet som rätt vara.

Villkor för sidan:

1. Rörtyper, dimensioner, fiberdukens klass och brunnarna beskrivs med tillverkarnas egna dokument som källa. Pipelife BDR är läst för jämförelse. Märken får nämnas utan länk.
2. Inga butikssidor länkas, och inga priser anges med butiksnamn. Priser i text tas från tillverkarens prislista eller anges som räknarens antagande.
3. Omprövas om Proffsmagasinet tar in byggdräneringsrör eller dräneringsbrunnar med tillverkarblad. Det kontrolleras vid nästa vårsäsong (frasen toppar i april); jag beställer.

## F5 `/fukt/avfuktare-garage/`, utbyggnad med förråd, sommarstuga och jordkällare

### Pris och lager 7 oktober

| Produkt | Pris | Lager | Kommentar |
|---|---|---|---|
| Acetec EvoDry 6H 2.0 | 10 588 kr | i lager | var restnoterad |
| Acetec RCF 12 G1 | 15 455 kr | i lager | var restnoterad |
| Wood's MDK21 | 3 118 kr | i lager | |
| Fresh D-800 | 7 211 kr | i lager | |
| Fresh D-1200 | 10 995 kr | i lager | |
| Drybox X4 | 12 763 kr | i lager | |

Ingen av produkterna har kampanj.

### Urvalet: ett kort tillkommer, inget byts

| Slug | Uppgift på sidan | Förändring |
|---|---|---|
| `acetec-evodry-6h-2` | det kalla enkelgaraget | står kvar |
| `woods-mdk21` | det uppvärmda enkelgaraget | står kvar |
| `fresh-d800` | ouppvärmt förråd eller sommarstuga | **nytt kort** |

**Acetec EvoDry 6H 2.0 står kvar.** Acetec skriver att den "lämpar sig väl för ouppvärmda eller periodvis kalla miljöer" och nämner förråd och fritidshus. Kapaciteten ur Acetecs diagram är ungefär 3,8–4,6 l/dygn vid 5 °C och 4,7–5,5 vid 10 °C (avläst). Avrådan för krypgrund och kallvind gäller inte de här utrymmena.

**Wood's MDK21 står kvar, men bara för det uppvärmda garaget.** Den stänger av under +5 °C ("Vid lägre temperatur stänger avfuktaren av automatiskt"). Wood's råder frostvakt eller värmeelement, medan samma manual förbjuder förvaring i rum med ständigt använda elektriska värmare (R290). MDK21 får alltså inget kort vid förråd, sommarstuga eller jordkällare, och sidan säger varför.

**Fresh D-800 får ett nytt kort för ouppvärmt förråd och sommarstuga.**
- Fresh skriver att maskinerna är "idealiska för ouppvärmda rum och uthus" och nämner fritidshus, med arbetsområde −20 till +40 °C.
- Den är billigast av sorptionsmaskinerna, 7 211 kr. Är två lika bra står den billigare först.
- Fresh anger ingen kapacitet vid 5–10 °C, och det ska stå på kortet eller intill.
- Fresh skriver "avsedd för inomhusbruk", och våtluftskanalen får vara högst 0,6 m.
- Kortet står i H2:n om förråd och sommarstuga, efter resonemanget om temperaturen. Etiketten följer uppgiften; hantverkaren skriver den. `produkter` i frontmatter får `fresh-d800`.

**Jordkällare: inget kort.** Länsstyrelsen Västra Götaland ("Ta hand om din jordkällare", 2015) vill ha en fuktig jordkällare:
- rotfrukter vid "+1-3 grader C och en relativ luftfuktighet 90-95 procent";
- potatis vid "+3-7 grader C och en relativ luftfuktighet 85-90 procent".

En avfuktare i en jordkällare med mat motverkar förvaringen; det är vår slutsats ur Länsstyrelsens text, och sidan säger det så. För en jordkällare som bara förvarar saker gäller samma resonemang som för förrådet, med 6H 2.0:s kapacitet vid 5–10 °C ur diagrammet. Inget eget kort.

### Villkor för sidan

1. Kapacitet i kyla anges bara där tillverkaren ger den. För 6H 2.0 och RCF 12 är talen avlästa ur diagram och märks så. För Fresh, Drybox och Wood's finns inga tal.
2. Ingen tillverkare skriver om vatten som fryser i tank eller slang. Sidan påstår inget om det.
3. Drybox X4 nämner sommarstuga och "alla utrymmen som är kallställda", men avfuktar bara oavsett temperatur i program 2 och 4. Om X4 nämns i text ska programmet stå med. X4 får inget kort på garagesidan.
4. Pris och lager läses om samma dag som utbyggnaden publiceras.

## Vad som kräver Christian

Inget.
