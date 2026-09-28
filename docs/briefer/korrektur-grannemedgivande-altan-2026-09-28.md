# Korrektur: grannemedgivande och altanändringarna, 2026-09-28

Bara svensk grammatik, meningsbyggnad, idiom och kommatering. Mallarna är lästa med standardvärdena insatta (2 m, 12 m², 1,6 m och så vidare). Kodkommentarer är inte lästa.

## src/lib/kalkyl/grannemedgivande.ts (TEXT)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 316 | Deras byggnadsarea sammanlagt. | Räkna ihop deras byggnadsarea. | fragment |
| 321 | Det du redan byggt till på huset utan lov, sammanlagt. | Räkna ihop det du redan byggt till på huset utan lov. | fragment |
| 340 | Skriv ut blanketten längre ner och få underskrifterna innan du börjar bygga. | Skriv ut blanketten längre ner och samla in underskrifterna innan du börjar bygga. | idiom |
| 357 | Huvudmannen för gatan eller parken skriver under, oftast kommunen. | Huvudmannen för gatan eller parken, oftast kommunen, skriver under. | syftning |
| 423 | Det står 2 m från gränsen. Medgivande krävs bara när det kommer närmare än 4,5 m. | Bygget står 2 m från gränsen. Medgivande krävs bara när det kommer närmare än 4,5 m. | syftning |
| 428 | Där medger huvudmannen, oftast kommunen. Finns ingen huvudman utsedd kan ingen medge, och då krävs bygglov. | Där är det huvudmannen, oftast kommunen, som medger bygget. Finns ingen huvudman utsedd kan ingen medge det, och då krävs bygglov. | saknat ord (medge är transitivt) |
| 441 | Ligger fler gränser närmare än 4,5 m behövs ett medgivande från varje fastighet. | Ligger flera gränser närmare än 4,5 m behövs ett medgivande från varje fastighet. | ordval (fler/flera) |
| 455 | så blir bygget större eller hamnar det närmare gränsen gäller det inte längre. | så blir bygget större eller hamnar det närmare gränsen gäller medgivandet inte längre. | syftning |
| 538 | Skriv under två exemplar, så att båda parter sparar ett. | Skriv under två exemplar, så att var och en sparar ett. | idiom |
| 631 | Ett en- eller tvåbostadshus, så medgivandet verkar även mot detaljplanen, utom mot skyddsbestämmelser | Ett en- eller tvåbostadshus, så medgivandet gäller även där bygget strider mot detaljplanen, utom mot skyddsbestämmelser | idiom |
| 633 | Den närmaste. Ligger fler gränser inom 4,5 m behövs ett medgivande per fastighet | Den närmaste. Ligger flera gränser inom 4,5 m behövs ett medgivande per fastighet | ordval (fler/flera) |
| 641 | Krävs det får du en blankett med bygget och måtten förtryckta, som du skriver ut och tar med dig över till grannen. | Krävs det får du en blankett att skriva ut och ta med över till grannen, med bygget och måtten förtryckta. | syftning |
| 650 | Mot en gata eller en park är det huvudmannen för platsen som medger, och det är oftast kommunen. | Mot en gata eller en park är det huvudmannen för platsen som medger bygget, och det är oftast kommunen. | saknat ord |
| 668 | regeringen skriver i propositionen, sitt förslag till riksdagen, att den medvetet lät bli att ta med altaner. | regeringen skriver i propositionen, sitt förslag till riksdagen, att den själv medvetet lät bli att ta med altaner. | syftning |
| 674 | Nytt är också att lagen pekar ut vem som medger mot en gata eller park och mot ett järnvägsspår | Nytt är också att lagen pekar ut vem som ska medge bygget när gränsen går mot en gata eller park eller när ett järnvägsspår ligger nära | saknat ord |
| 679 | Äger ett företag, en förening eller kommunen fastigheten är det de som medger | Äger ett företag, en förening eller kommunen fastigheten är det ägaren som medger bygget | kongruens, saknat ord |
| 680 | Mot en gata, ett torg eller en park inom detaljplan medger huvudmannen, den som ansvarar för platsen. | Mot en gata, ett torg eller en park inom detaljplan är det huvudmannen, den som ansvarar för platsen, som medger bygget. | saknat ord |
| 680 | Lunds kommun skriver att den är mycket restriktiv närmare gränsen än en meter. | Lunds kommun skriver att den är mycket restriktiv med byggen närmare gränsen än en meter. | ihoptryckt |
| 703 | Är det kortare ska grannen medge när gränsen går mot en tomt, huvudmannen när den går mot en gata eller park | Är det kortare ska grannen medge bygget när gränsen går mot en tomt, och huvudmannen när den går mot en gata eller park | saknat ord |
| 721 | till skillnad från ett bygglov som måste användas inom några år. | till skillnad från ett bygglov, som måste användas inom några år. | kommatering |
| 725 | Lund och Skara har e-tjänster med BankID, men bara för när kommunen själv är granne. | Lund och Skara har e-tjänster med BankID, men bara för fall där kommunen själv är granne. | idiom |
| 751 | Grannar som gränsar till tomten eller bara skiljs av en gata | Grannar som gränsar till tomten eller bara skiljs från den av en gata | saknat ord |

Samma intransitiva "medger" står också i tabellcellerna på rad 582, 584, 623 och 624 ("huvudmannen medger", "förvaltaren medger", "Väghållaren kan inte medge"). I en tabellcell går det att låta det stå, men det blir bättre med ett objekt.

## src/pages/rakna/grannemedgivande.astro

Inga fel.

## src/components/kalkyl/GrannemedgivandeForm.astro

Inga fel. All synlig text kommer ur TEXT och står i tabellen ovan.

## src/components/kalkyl/GrannemedgivandeBlankett.astro

Inga fel. Texten kommer ur TEXT.blankett, och felet på rad 538 står ovan.

## src/lib/kalkyl/register.ts (posten grannemedgivande)

Inga fel.

## src/lib/kalkyl/bygglov-altan.ts (ändrade publika strängar)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 372 | Sätter du skärmtak eller glas över altanen, eller ett tätt plank som är högre än 1,2 m, krävs grannens skriftliga medgivande. | Sätter du skärmtak eller glas över altanen, eller ett tätt plank som är högre än 1,2 m på den, krävs grannens skriftliga medgivande. | ihoptryckt (plank "över" altanen) |
| 419 | Låt grannen skriva under en situationsplan, som är en enkel karta över tomten med tillbyggnaden och avståndet inritade, och äger flera personer grannfastigheten skriver alla under. | Låt grannen skriva under en situationsplan, som är en enkel karta över tomten med tillbyggnaden och avståndet inritade. Äger flera personer grannfastigheten skriver alla under. | satsradning |

## src/pages/rakna/bygglov-altan.astro (ändrade meningar)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 264 | Närmare än 4,5 meter går bra utan grannens medgivande, så länge altanen är öppen och håller sig under höjdmåtten. | Altanen får ligga närmare än 4,5 meter utan grannens medgivande, så länge den är öppen och håller sig under höjdmåtten. | meningsbyggnad |
| 264 | Går gränsen mot en gata eller en park skriver kommunen under, eller vägföreningen om det är den som sköter gatan, och det har gått sedan den 1 december 2025. | Går gränsen mot en gata eller en park skriver kommunen under, eller vägföreningen om det är den som sköter gatan. Så står det i lagen sedan den 1 december 2025. | syftning, oklart "det har gått" |

Utanför korrekturen: punkt 564 säger "Avståndet till tomtgränsen prövar jag sist" och punkt 570 "Byggsanktionsavgiften räknas sist". Båda kan inte vara sist.

## src/components/kalkyl/BygglovAltanForm.astro (ändrad mening)

Inga fel.

## src/content/kunskap/altan/bygglov-altan.mdx (ändrade meningar)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 84 | Regeringen skriver i propositionen till lagändringen att den medvetet lämnade dem utanför, och poolen med dem. | Regeringen skriver i propositionen till lagändringen att den medvetet lämnade altanerna utanför, och poolerna med dem. | syftning |
| 84 | Samma sak gäller ett tätt plank på altanen som är högre än 1,2 meter. | Samma sak gäller ett tätt plank som är högre än 1,2 meter och står på altanen. | syftning |

## src/content/guider/altan/bygga-altan.mdx (ändrade meningar)

Inga fel.

---

**28 fel**: 22 i grannemedgivande.ts, 2 i bygglov-altan.ts, 2 i bygglov-altan.astro, 2 i bygglov-altan.mdx och inga i de övriga filerna. Svenskan är i stort sett korrekt, men grannemedgivande.ts behöver ett varv till för "fler/flera", det objektlösa "medger" och syftningarna.
