# Korrektur, fasadyta, varv 3, 2026-09-28

Jag har bara läst de meningar som ändrats efter varv 2, med mallarna ifyllda med verkliga tal (98,2 m², slät panel, två strykningar akrylatfärg, 7 m² per liter).

## src/lib/kalkyl/fasadyta.ts

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 944 | `Går åt ${literGarAt} l, köp ${literAttKopa} l i ${burkar}` (ifyllt: "Går åt 28,1 l, köp 29,7 l i tre burkar om 9 liter och en om 2,7 liter") | `Det går åt ${literGarAt} liter. Köp ${literAttKopa} liter i ${burkar}.` ("Det går åt 28,1 liter. Köp 29,7 liter i tre burkar om 9 liter och en om 2,7 liter.") | fragment (satsen saknar subjekt, och "l" och "liter" blandas i samma cell; putsUtanBinder i samma kolumn har redan den hela formen) |

1 fel.

Korrekt: atgangstabell.rubrik, kolumner, putsUtanBinder, under; regel.atgang; regel.kanten; gorInte en-strykning; spalt rad-malad-yta; besked.farg.rad vid skrapat; steg 7 och 8; antagandeVarde.kanten och antagandeetiketten kanten.

## src/pages/rakna/fasadyta.astro, kortsvaret

Inga fel. Rättelsen från varv 2 ("alltså 36 liter") är införd.

## src/content/guider/fasad/mala-om-huset.mdx, ändringarna

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 125 | Beckers vill ha grundfärg på hela fasaden när skicket är dåligt, men Alcro nöjer sig med att grunda de partier där träet är rent, och där går jag på Alcro, som räknaren gör. | Beckers vill ha grundfärg på hela fasaden när skicket är dåligt, men Alcro nöjer sig med att grunda de partier där träet är rent. Jag följer Alcro, och det gör räknaren också. | syftning ("där" pekar tillbaka på "de partier", och meningen läses som att jag följer Alcro just på de partierna) |

1 fel.

Korrekt: materiallistans rad om grundfärg, resten av stycket om nivå två, tvåplanshuset, fönsterfoder och knutbrädor, meningen om kulörbyte i stycket Färgen, meningen om Beckers tiolitersburkar, slamfärg per liter, steg 5, samma typ av färg, byta typ, september och målaren, och "Ring också".

## Summa

2 fel: 1 i fasadyta.ts och 1 i mala-om-huset.mdx. Svenskan är korrekt som helhet. Det räcker att rätta de två raderna ovan, och något nytt varv behövs inte.
