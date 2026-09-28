# Korrektur /rakna/u-varde/, varv 8 (2026-09-28)

Kontrollvarv: bara raderna som ändrats sedan varv 7. Grammatik, meningsbyggnad, idiom och kommatering.

## Beskedet (verkliga värden insatta)

Rad 1, 2, 3, 4 och 7 är korrekt svenska. Rubrikorden (lösull, lösull av stenull, lösull av glasull, cellulosa) passar i båda mallarna.

## src/lib/kalkyl/u-varde.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 1014 (tak-kallvind) | Bjälkarna eller takstolarna som går genom ullen räknas bara med om du väljer skiktet med ullen under ”Vilket skikt sitter mellan reglar?” | Bjälkarna eller takstolarna som går genom ullen räknas bara med om du under ”Vilket skikt sitter mellan reglar?” väljer skiktet med ullen. | syftning ("ullen under" läses först som ull som ligger under) |

Felmeddelandena på rad 966 och 978 blir "högst sex skikt" och "högst två lager". Båda är korrekta.

## src/pages/rakna/u-varde.astro

Rad 598: `</a>, {k.last}` står på samma rad, så inget mellanslag hamnar före kommat. Korrekt.

## src/content/guider/el/tillaggsisolera-vind.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 117 | Ändra den till 100 millimeter, så har du samma vind som i exemplet, och då blir besparingen högre än i exemplet, eftersom räknaren utgår från att den gamla ullen isolerar sämre än Rockwool räknar med. | Ändra den till 100 millimeter, så har du samma vind som i exemplet. Då blir besparingen högre än där, eftersom räknaren utgår från att den gamla ullen isolerar sämre än Rockwool räknar med. | meningsbyggnad (fyra satser i kommakedja, "i exemplet" två gånger) |
| 117 | Den visar också hur snart ullen är betald | Räknaren visar också hur snart ullen har betalat sig | syftning ("Den" pekade nyss på ullen) |
| 117 | hur snart ullen är betald | hur snart ullen har betalat sig | idiom ("är betald" betyder att räkningen är betald) |

Rad 2 och 3 i tabellen gäller samma fras och rättas tillsammans med lydelsen i rad 2.

## Anmärkning, inget fel

Rad 4 i beskedet, "Återbetalningstid saknas, eftersom …", är korrekt men låter som ett systemmeddelande. "Jag kan inte räkna ut återbetalningstiden, eftersom …" ligger närmare jag-formen. Inte räknat som fel.

**4 fel.** Beskedet, felmeddelandena och källistan är korrekt svenska. Regeltexten tak-kallvind och stycket i guiden behöver ett varv till.
