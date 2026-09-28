# Korrektur, varv 2: grannemedgivande och altansidorna, 2026-09-28

Bara svensk grammatik, meningsbyggnad, idiom och kommatering. Mallarna är lästa med standardvärdena insatta (2 m, 12 m², 4,5 m, 1,2 m och så vidare). Kodkommentarer är inte lästa. grannemedgivande.ts, grannemedgivande.astro och GrannemedgivandeBlankett.astro är ospårade i git, så där finns ingen diff. De är lästa i sin helhet.

## Rättelserna från första varvet

Alla 28 är införda. I grannemedgivande.ts har de nya radnummer (325, 330, 349, 366, 432, 437, 450, 468, 565, 666, 668, 676, 685, 707, 713, 718, 719, 742, 760, 764, 790). Tabellcellerna med objektlöst "medger" har fått "bygget" (617, 619, 658, 659). bygglov-altan.ts, rad 372 och 419 är införda. bygglov-altan.mdx, rad 84 är införd på båda ställena.

De två avvikelserna i Faq-svaret i bygglov-altan.astro (nu rad 288) är språkligt i ordning:
- "Altanen får ligga närmare än 4,5 meter utan grannens medgivande, så länge den är öppen." Det saknas "och håller sig under höjdmåtten", men meningen är korrekt.
- "Så står det i lagen sedan den skrevs om." Här syftar "den" på lagen, och det fungerar.

Punkten om två saker som prövas "sist" är också löst, eftersom steget om avståndet nu säger "efter de andra reglerna".

## src/lib/kalkyl/grannemedgivande.ts (TEXT)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 473 | Står bygget nära 4,5 m ska du mäta från takfoten och inte från väggen. | Står bygget nära 4,5 m från gränsen ska du mäta från takfoten och inte från väggen. | ihoptryckt |
| 744 | Finns det någon som ska medge blir svaret ja, och du får en blankett för var och en. | Finns det någon som ska medge bygget blir svaret ja, och du får en blankett för var och en. | saknat ord (medge är transitivt) |
| 772 | Kommunen kan ta ut en byggsanktionsavgift och kräva att du rättar eller river, enligt 11 kap. i plan- och bygglagen. | Kommunen kan ta ut en byggsanktionsavgift och kräva att du rättar till bygget eller river det, enligt 11 kap. i plan- och bygglagen. | saknat ord |

Rad 473 och 772 kan ha funnits redan i första varvet, eftersom filen inte går att diffa. De är fel i vilket fall som helst.

## src/pages/rakna/grannemedgivande.astro

Inga fel. Det gäller BESKEDSVARNING, DELATEXT, BESKRIVNING, titeln och de fasta rubrikerna.

## src/components/kalkyl/GrannemedgivandeBlankett.astro

Inga fel. All text kommer ur TEXT.blankett, och där finns inga fel.

## src/lib/kalkyl/bygglov-altan.ts (ändrade publika strängar)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 430 | Beviljas inte lovet kan nämnden kräva att du river. | Beviljas inte lovet kan nämnden kräva att du river altanen. | saknat ord |

## src/pages/rakna/bygglov-altan.astro (ändrade meningar)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 202 | Plan- och bygglagen 9 kap. 34 och 35 §§ räknar upp tillbyggnader, murar och plank men inte altaner, och regeringen lämnade dem utanför med avsikt, prop. 2024/25:169 s. 162 | Plan- och bygglagen 9 kap. 34 och 35 §§ räknar upp tillbyggnader, murar och plank men inte altaner, och regeringen lämnade altanerna utanför med avsikt, prop. 2024/25:169 s. 162 | syftning |
| 592 | Skärmtak, väggar och inglasning gör alla altanen till en tillbyggnad, eftersom ytan under taket räknas med. | Altanen blir en tillbyggnad oavsett om den får skärmtak, väggar eller inglasning, eftersom ytan under taket räknas med. | ordföljd ("alla altanen") |
| 605 | Står en altan med tak närmare än 4,5 meter och kräver inget annat lov, blir svaret att grannen ska skriva under, och annars krävs bygglov. | Står en altan med tak närmare gränsen än 4,5 meter och kräver inget annat lov, blir svaret att grannen ska skriva under, och utan underskriften krävs bygglov. | ihoptryckt, syftning ("annars") |

## src/content/kunskap/altan/bygglov-altan.mdx (ändrade meningar)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 15 | Höjden mäts från marken till golvet, avståndet från fasaden. | Höjden mäts från marken till golvet, avståndet från fasaden till altanens ytterkant. | ihoptryckt |
| 84 | räknar upp byggnader, tillbyggnader och murar och plank som är högre än 1,2 meter över marken, men inte altaner. | räknar upp byggnader, tillbyggnader samt murar och plank som är högre än 1,2 meter över marken, men inte altaner. | syftning (relativsatsen kan läsas som att den gäller alla fyra) |
| 88 | När en sammanfattning för privatpersoner säger emot både lagen och myndighetens egen kunskapsbank går jag på lagen. | När en sammanfattning för privatpersoner motsäger både lagen och myndighetens egen kunskapsbank går jag på lagen. | idiom (man säger emot en person, inte en text) |
| 108 | Fram till den 1 december 2025 kallades den lovfria altanen ofta attefallsaltan, efter reglerna från 2019 som gällde en- och tvåbostadshus. Då försvann orden friggebod, attefallshus, attefallstillbyggnad och attefallsaltan ur lagen. | Fram till den 1 december 2025 kallades den lovfria altanen ofta attefallsaltan, efter reglerna från 2019 som gällde en- och tvåbostadshus. Den 1 december 2025 försvann orden friggebod, attefallshus, attefallstillbyggnad och attefallsaltan ur lagen. | syftning ("Då" kan peka på 2019) |

## src/content/guider/altan/bygga-altan.mdx (ändrat stycke, rad 78)

Inga fel.

## src/components/ui/Kalkylator.astro (fotraden)

Inga fel: "Knappen tar dig till räknaren med dina värden ifyllda. Där får du hela svaret och ser vad det bygger på." Knapptexterna "Se om grannen ska skriva under", "Räkna ut ytan och färgen" och "Gör kontrollplanen" är också korrekta.

## src/components/ui/Verktygskort.astro (knapptexten)

Inga fel: "Till räknaren".

## src/lib/kalkyl/kontrollplan.ts (spalt.beskedsvarning, rad 811)

Inga fel: "Ett av fälten gick inte att läsa. Rätta värdet där felet står, så visar jag svaret."

---

**11 fel**: 3 i grannemedgivande.ts, 1 i bygglov-altan.ts, 3 i bygglov-altan.astro, 4 i bygglov-altan.mdx och inga i de övriga filerna. Svenskan är korrekt som helhet. Det som återstår är enstaka rättelser på en rad var och kräver inget helt varv till. Två mönster finns kvar sedan första varvet: verb som står utan objekt ("medge", "river", "rättar") och "närmare än 4,5 m" utan att det står vad avståndet mäts till.
