# Korrektur: Boverkshänvisningen i fuktklustret, 2026-09-28

Läst: de meningar som ändrats i dag (`git diff`) i sitt stycke. Kodkommentarer är inte lästa. Källistor i frontmatter är bara kontrollerade för stavning.

## src/content/guider/fukt/fukt-i-kallaren.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 132 | I byggreglerna är 75 procent relativ luftfuktighet det högsta tillåtna fukttillståndet för ett material vars eget värde inte är väl undersökt. | I byggreglerna är 75 procent relativ fuktighet det högsta tillåtna fukttillståndet för ett material vars eget värde inte är väl undersökt. | ordval (luftfuktighet om ett material, och nästa mening säger att gränsen inte gäller luften) |
| 132 | Villaägarna säger samma sak på sitt sätt: en hygrometer över 75 procent under en längre period betyder stor skaderisk. | Villaägarna drar samma gräns för luften: visar hygrometern över 75 procent under en längre period är skaderisken stor. | syftning ("samma sak" pekar nu på definitionen av relativ luftfuktighet, inte på gränsen), ihoptryckt uttryck ("en hygrometer över 75 procent") |

Rad 172 är korrekt.

## src/content/guider/grund/inreda-kallare.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 87 | Gränsen gäller materialen och inte luften, men luften är det du kan mäta med hygrometern, och fuktig luft som ligger länge mot kalla väggar och golv gör att materialen når samma nivå. | Gränsen gäller materialen och inte luften. Men luften är det du kan mäta med hygrometern, och fuktig luft som ligger länge mot kalla väggar och golv gör att materialen når samma nivå. | meningsbyggnad (tre satser med "men" och "och" där tanken byter spår mitt i) |

## src/content/kunskap/fukt/luftfuktighet-inomhus.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 119 | Byggreglerna säger att <Markering>75 procent luftfuktighet</Markering> är det högsta tillåtna fukttillståndet i ett material vars eget värde inte är väl undersökt. | Byggreglerna säger att <Markering>75 procent relativ fuktighet</Markering> är det högsta tillåtna fukttillståndet i ett material vars eget värde inte är väl undersökt. | ordval (luftfuktighet i ett material, och nästa mening säger att talet inte gäller luften) |

Raderna 149 och 198 är korrekta.

## src/lib/kalkyl/kallare.ts (besked)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 527 | Gränsen gäller fukten i väggar och trä, men luft så fuktig som ligger länge mot kalla ytor gör att de når dit. | Gränsen gäller fukten i väggar och trä, men ligger så fuktig luft länge mot kalla ytor når väggarna och träet dit till slut. | grammatik ("så fuktig som" utan jämförelse), syftning ("de" kan peka på ytorna) |

Källsträngarna (`kalla`) på rad 528 och 534 är korrekta.

## src/pages/rakna/avfuktare.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 139 | Boverkets byggregler, BFS 2024:8, 7 kap. 1 §, sätter 75 % som högsta tillåtna fukttillstånd, och 55 ger marginal ner till det | Boverkets byggregler (BFS 2024:8, 7 kap. 1 §) sätter 75 % som högsta tillåtna fukttillstånd, och 55 ger marginal ner till det | kommatering (inskott med eget komma inuti mellan subjekt och verb, läses som en uppräkning) |

## src/pages/rakna/daggpunkt.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 468 | Boverkets byggregler sätter gränsen vid 75 procent relativ fuktighet i materialet, och den kallas högsta tillåtna fukttillstånd. | Boverkets byggregler sätter gränsen vid 75 procent relativ fuktighet i ett material, och den kallas högsta tillåtna fukttillstånd. | syftning (bestämd form utan något material nämnt i stycket; "just det materialet" i nästa mening fungerar sedan) |

Rad 140 (`stod`) och 377 är korrekta.

## Korrekta utan anmärkning

- src/content/guider/fukt/avfuktare-krypgrund.mdx, rad 92
- src/content/guider/grund/isolera-krypgrund.mdx, rad 95
- src/content/kunskap/altan/reglar-avstand-och-dimensioner.mdx, rad 70
- src/pages/rakna/kallare.astro, rad 192 och 195
- src/pages/rakna/altan.astro, rad 220

## Summa

7 fel i 6 filer. Texten är i övrigt korrekt svenska; de sju raderna behöver rättas, sedan räcker det utan ett varv till.
