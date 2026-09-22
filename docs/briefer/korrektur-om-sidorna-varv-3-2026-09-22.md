# Korrektur om-sidorna, varv 3, 2026-09-22

Läst: frontmatterns title och description samt brödtexten i tre filer. Markup är inte läst. Tidigare varvs rapporter ligger under docs/ och är inte lästa, eftersom korrekturläsaren inte läser docs/. Rapporten bygger därför bara på texten som den står i dag.

## src/content/sidor/om.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 22 | Räknarna använder samma tal och skriver ut varje antagande, med källa eller markerat som min gissning. | Räknarna använder samma tal och skriver ut varje antagande, antingen med källa eller markerat som min gissning. | parallellism: "med källa" och "markerat som" är olika led, och utan "antingen" läses "med källa" först som en bestämning till "skriver ut" |
| 24 | ...har jag skrivit ner på [så testar jag](/om/sa-testar-vi/). | ...har jag skrivit ner på sidan [Så testar jag](/om/sa-testar-vi/). | saknat ord: länktexten är en sidtitel och kan inte stå direkt efter "på" |
| 28 | ...går jag igenom på [så tjänar jag pengar](/om/sa-tjanar-vi-pengar/). | ...går jag igenom på sidan [Så tjänar jag pengar](/om/sa-tjanar-vi-pengar/). | saknat ord, samma fel som på rad 24 |

Antal fel: 3.

## src/content/sidor/sa-testar-vi.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 3 | Vad test och granskning betyder här, var talen kommer ifrån, hur kalkylatorerna räknar och vilka mätningar som står på tur. | Här står vad test och granskning betyder, var talen kommer ifrån, hur kalkylatorerna räknar och vilka mätningar som står på tur. | fragment: meningen saknar huvudsats |
| 19 | Där ligger skillnaden mellan ett tal på en låda och ett tal du kan använda. | Ett tal på kartongen säger inget om din källare förrän du vet villkoren. (Eller stryk meningen.) | slogan; "Där" pekar dessutom inte på något tydligt |
| 29 | I tabellen under [hur kalkylatorn räknar](/rakna/avfuktare/#sa-raknar-vi) är varje konstant... | I tabellen under rubriken [Hur kalkylatorn räknar](/rakna/avfuktare/#sa-raknar-vi) är varje konstant... | saknat ord: länktexten är en rubrik och kan inte stå direkt efter "under" |
| 35 | Hygrometern kontrollerar jag över mättad koksaltlösning, som... | Hygrometern kontrollerar jag över en mättad koksaltlösning, som... | saknat ord (artikeln) |
| 41 | På varje testsida fylls då kolumnen "Vi mätte" i, bredvid kolumnen "Tillverkaren uppger". | På varje testsida fyller jag då i kolumnen "Vi mätte", bredvid kolumnen "Tillverkaren uppger". | ordföljd: partikeln "i" hamnar ensam efter ett långt subjekt, och passiv form sticker ut i jag-texten |

Antal fel: 5.

## src/content/sidor/sa-tjanar-vi-pengar.mdx

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 13 | Jag skriver om den här sidan när det ändras. | Jag uppdaterar den här sidan när programmet godkänt sajten. | tvetydighet: "skriver om" kan läsas som "skriver om (ämnet)", och "det" har inget tydligt korrelat |
| 17 | Just därför gör jag urvalet på databladen innan det finns några länkar... | Just därför gör jag urvalet utifrån databladen innan det finns några länkar... | preposition |

Antal fel: 2.

## Noteringar som inte räknas som fel

- Citattecknen är raka ("testat", "köp inte", "Annonslänk"). Svensk typografi använder ”…” åt båda hållen. Om bygget gör om raka citattecken till engelska “…” blir det fel på sajten. Det bör kontrolleras i den byggda HTML-koden.
- Kolumnnamnet "Vi mätte" (sa-testar-vi.mdx, rad 41) är i vi-form medan resten av texten är i jag-form. Det är grammatiskt korrekt men sticker ut.
- Om-sidan säger "räknarna" och så-testar-jag-sidan säger "kalkylatorerna" om samma sak. Det är inget språkfel, men läsaren kan tro att det rör sig om två olika saker.
- sa-testar-vi.mdx, rad 31: daggpunkten används i meningen innan den definieras i nästa mening. Det är korrekt svenska men läses bättre om definitionen kommer först.

## Summa

10 fel: 3 i om.mdx, 5 i sa-testar-vi.mdx och 2 i sa-tjanar-vi-pengar.mdx. Texten är i huvudsak korrekt svenska, och felen är små: tre länktexter som står som satsdelar, en mening utan huvudsats, ett ord som saknas, en tvetydighet, en preposition och en slogan. Den behöver ett kort varv till för just de här raderna, inte en ny genomläsning.
