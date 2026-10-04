# Texter: /rakna/fuktkvot/

Utvecklaren, 2026-10-04. Nycklarna till `docs/briefer/spec-kalkyl-fuktkvot-2026-10-04.md` avsnitt 9. Varje nyckel står som `TEXT SAKNAS` i koden, med nyckeln i en kommentar på raden. Hantverkaren skriver texten och utvecklaren byter in den.

Platshållare inom klamrar byts mot tal av koden. Längden är en riktlinje ur mallens mönster, inte ett krav i specen.

Följande är publik text som koden sätter. Den har ingen nyckel, men hantverkaren behöver godkänna den:

- gränserna i bedömningslistan: "högst 16 %", "högst 18 %", "7–9 %", "fukthalt 15–20 %", "RF under 75 %" (läge luft), "under 15 %" (vikt och halt) och "under 20 %", i `bedom()` i `src/lib/kalkyl/fuktkvot.ts`
- talet "över 24" och mätarens "över 24 %" i `src/pages/rakna/fuktkvot.astro`
- orden Källa och Antagande, och källornas titlar ur faktabladet 1, i antagandetabellen

Gränssnittstext som är densamma på alla räknare: standardvarningen, Räkna ut, Läs vidare och Räkna själv.

| Nyckel | Fil | Rad | Var | Platshållare | Längd |
|---|---|---|---|---|---|
| `fuktkvot.fel.temp` | `src/lib/kalkyl/fuktkvot.ts` | 247 | feltext under fältet för temperaturen | {min}, {max} | en mening, under 70 tecken |
| `fuktkvot.fel.rf` | `src/lib/kalkyl/fuktkvot.ts` | 248 | feltext under fältet för RF | {min}, {max} | en mening, under 70 tecken |
| `fuktkvot.fel.torr` | `src/lib/kalkyl/fuktkvot.ts` | 249 | feltext under torrvikten (också vid 0 eller tomt) | {min}, {max} | en mening, under 70 tecken |
| `fuktkvot.fel.vat` | `src/lib/kalkyl/fuktkvot.ts` | 250 | feltext under våtvikten, utanför gränserna | {min}, {max} | en mening, under 70 tecken |
| `fuktkvot.fel.forvaxlade` | `src/lib/kalkyl/fuktkvot.ts` | 251 | feltext under våtvikten när den är mindre än torrvikten |  | en mening, under 90 tecken |
| `fuktkvot.fel.fukthalt` | `src/lib/kalkyl/fuktkvot.ts` | 252 | feltext under talet i läge halt, fukthalt | {min}, {max} | en mening, under 70 tecken |
| `fuktkvot.fel.fuktkvot` | `src/lib/kalkyl/fuktkvot.ts` | 253 | feltext under talet i läge halt, fuktkvot | {min}, {max} | en mening, under 70 tecken |
| `fuktkvot.lage.legend` | `src/components/kalkyl/FuktkvotForm.astro` | 44 | legend över lägesknapparna |  | 2–5 ord |
| `fuktkvot.lage.luft` | `src/components/kalkyl/FuktkvotForm.astro` | 46 | lägesknapp, och sr-only legend runt lägets fält |  | 2–5 ord |
| `fuktkvot.lage.vikt` | `src/components/kalkyl/FuktkvotForm.astro` | 47 | lägesknapp, och sr-only legend runt lägets fält |  | 2–5 ord |
| `fuktkvot.lage.halt` | `src/components/kalkyl/FuktkvotForm.astro` | 48 | lägesknapp, och sr-only legend runt lägets fält |  | 2–5 ord |
| `fuktkvot.vilket.legend` | `src/components/kalkyl/FuktkvotForm.astro` | 50 | legend över radioknapparna vilket, läge halt |  | 2–6 ord |
| `fuktkvot.vilket.fukthalt` | `src/components/kalkyl/FuktkvotForm.astro` | 52 | radioknapp: talet är en fukthalt |  | 1–4 ord |
| `fuktkvot.vilket.fuktkvot` | `src/components/kalkyl/FuktkvotForm.astro` | 53 | radioknapp: talet är en fuktkvot |  | 1–4 ord |
| `fuktkvot.hjalp.vikt` | `src/components/kalkyl/FuktkvotForm.astro` | 55 | hjälpraden under vikterna, om torrviktsmetoden (faktabladet 2.2) |  | 1–2 meningar |
| `fuktkvot.falt.temp` | `src/components/kalkyl/FuktkvotForm.astro` | 69 | etikett, fältet temp (°C) |  | 2–4 ord |
| `fuktkvot.falt.rf` | `src/components/kalkyl/FuktkvotForm.astro` | 70 | etikett, fältet rf (%) |  | 2–4 ord |
| `fuktkvot.falt.vat` | `src/components/kalkyl/FuktkvotForm.astro` | 73 | etikett, fältet vat (g) |  | 2–4 ord |
| `fuktkvot.falt.torr` | `src/components/kalkyl/FuktkvotForm.astro` | 74 | etikett, fältet torr (g) |  | 2–4 ord |
| `fuktkvot.falt.tal` | `src/components/kalkyl/FuktkvotForm.astro` | 76 | etikett, fältet tal (%) |  | 1–4 ord |
| `fuktkvot.verktygsnamn` | `src/pages/rakna/fuktkvot.astro` | 70 | brödsmulan och WebApplication |  | 1–3 ord |
| `fuktkvot.beskrivning` | `src/pages/rakna/fuktkvot.astro` | 71 | meta description och WebApplication |  | 120–155 tecken |
| `fuktkvot.titel` | `src/pages/rakna/fuktkvot.astro` | 72 | <title> |  | högst 60 tecken |
| `fuktkvot.h1` | `src/pages/rakna/fuktkvot.astro` | 73 | H1 |  | en rad |
| `fuktkvot.svar.vad.luft` | `src/pages/rakna/fuktkvot.astro` | 114 | under enheten i det stora talet, läge luft |  | 2–6 ord |
| `fuktkvot.svar.vad.vikt` | `src/pages/rakna/fuktkvot.astro` | 115 | under enheten, läge vikt |  | 2–6 ord |
| `fuktkvot.svar.vad.halt` | `src/pages/rakna/fuktkvot.astro` | 116 | under enheten, läge halt när talet är en fuktkvot (läsaren skrev en fukthalt) |  | 2–6 ord |
| `fuktkvot.svar.vad.halt-fukthalt` | `src/pages/rakna/fuktkvot.astro` | 117 | under enheten, läge halt när talet är en fukthalt (läsaren skrev en fuktkvot); nyckel tillagd av utvecklaren |  | 2–6 ord |
| `fuktkvot.svar.andra` | `src/pages/rakna/fuktkvot.astro` | 119 | raden under talet i lägena vikt och halt: det tal som inte står stort | {tal} | en kort mening |
| `fuktkvot.besked.fibermattnad` | `src/pages/rakna/fuktkvot.astro` | 120 | beskedet under "över 24" när RF är över 95 % |  | 1–2 meningar |
| `fuktkvot.besked.extrapolerad` | `src/pages/rakna/fuktkvot.astro` | 121 | raden när temperaturen är under −1,1 °C |  | en mening |
| `fuktkvot.matare.etikett` | `src/pages/rakna/fuktkvot.astro` | 122 | mätarens etikett, mätaren går mot röta vid 20 % |  | 1–4 ord |
| `fuktkvot.anv.ved` | `src/pages/rakna/fuktkvot.astro` | 124 | bedömningslistan, etikett |  | 1–2 ord |
| `fuktkvot.anv.malning` | `src/pages/rakna/fuktkvot.astro` | 125 | bedömningslistan, etikett |  | 1–2 ord |
| `fuktkvot.anv.inbyggnad` | `src/pages/rakna/fuktkvot.astro` | 126 | bedömningslistan, etikett |  | 1–2 ord |
| `fuktkvot.anv.golv` | `src/pages/rakna/fuktkvot.astro` | 127 | bedömningslistan, etikett |  | 1–2 ord |
| `fuktkvot.anv.mogel` | `src/pages/rakna/fuktkvot.astro` | 128 | bedömningslistan, etikett |  | 1–2 ord |
| `fuktkvot.anv.rota` | `src/pages/rakna/fuktkvot.astro` | 129 | bedömningslistan, etikett |  | 1–2 ord |
| `fuktkvot.utfall.ok` | `src/pages/rakna/fuktkvot.astro` | 132 | bedömningslistan, utfall ok (ikonen check) |  | 1–2 ord |
| `fuktkvot.utfall.varning` | `src/pages/rakna/fuktkvot.astro` | 133 | bedömningslistan, utfall varning (ikonen varning) |  | 1–2 ord |
| `fuktkvot.klartext.luft` | `src/pages/rakna/fuktkvot.astro` | 136 | klartextmeningen sist i svarsytan, läge luft, med "ungefär" och källan | {fuktkvot}, {temp}, {rf} | 1–2 meningar |
| `fuktkvot.klartext.vikt` | `src/pages/rakna/fuktkvot.astro` | 137 | klartextmeningen, läge vikt | {fuktkvot}, {fukthalt}, {vat}, {torr} | 1–2 meningar |
| `fuktkvot.klartext.halt` | `src/pages/rakna/fuktkvot.astro` | 138 | klartextmeningen, läge halt | {tal}, {vilket} (ordet fukthalt eller fuktkvot ur adressen), {annat} (det andra talet, en decimal) | 1–2 meningar |
| `fuktkvot.darfor.rubrik` | `src/pages/rakna/fuktkvot.astro` | 142 | H2 Därför blev svaret så |  | en rad |
| `fuktkvot.darfor.text.luft` | `src/pages/rakna/fuktkvot.astro` | 144 | stycket under H2 i läge luft, också vid fibermättnad | {rf16}, {rf18} (RF i heltal vid läsarens temperatur) | ett stycke |
| `fuktkvot.darfor.text.vikt` | `src/pages/rakna/fuktkvot.astro` | 145 | stycket under H2, läge vikt; nyckel tillagd av utvecklaren |  | ett stycke |
| `fuktkvot.darfor.text.halt` | `src/pages/rakna/fuktkvot.astro` | 146 | stycket under H2, läge halt; nyckel tillagd av utvecklaren |  | ett stycke |
| `fuktkvot.darfor.kalla` | `src/pages/rakna/fuktkvot.astro` | 148 | källraden under stycket, i mindre text; nyckel tillagd av utvecklaren |  | 1–2 meningar |
| `fuktkvot.gorinte` | `src/pages/rakna/fuktkvot.astro` | 149 | texten efter "Gör inte det här." |  | 1–3 meningar |
| `fuktkvot.skiss.alt` | `src/pages/rakna/fuktkvot.astro` | 150 | alt på skissen |  | under 125 tecken |
| `fuktkvot.skiss.bildtext` | `src/pages/rakna/fuktkvot.astro` | 151 | bildtexten under skissen |  | 1–2 meningar |
| `fuktkvot.steg.1` | `src/pages/rakna/fuktkvot.astro` | 153 | Så räknar jag, steg 1: formeln för vikten (formeln står utskriven ovanför listan) |  | 1–2 meningar |
| `fuktkvot.steg.2` | `src/pages/rakna/fuktkvot.astro` | 154 | steg 2: omräkningen |  | 1–2 meningar |
| `fuktkvot.steg.3` | `src/pages/rakna/fuktkvot.astro` | 155 | steg 3: ekvationen i Wood Handbook |  | 1–2 meningar |
| `fuktkvot.steg.4` | `src/pages/rakna/fuktkvot.astro` | 156 | steg 4: gränserna |  | 1–2 meningar |
| `fuktkvot.forval.etikett` | `src/pages/rakna/fuktkvot.astro` | 160 | etiketten över förvalens chips, bara i läge luft |  | 1–3 ord |
| `fuktkvot.forval.aria` | `src/pages/rakna/fuktkvot.astro` | 161 | aria-label på <nav> runt chipsen; nyckel tillagd av utvecklaren |  | en kort fras |
| `fuktkvot.forval.bostad-vinter` | `src/pages/rakna/fuktkvot.astro` | 163 | chip, 20 °C och 25 % |  | 1–2 ord |
| `fuktkvot.forval.bostad-sommar` | `src/pages/rakna/fuktkvot.astro` | 164 | chip, 20 °C och 60 % |  | 1–2 ord |
| `fuktkvot.forval.krypgrund` | `src/pages/rakna/fuktkvot.astro` | 165 | chip, 15 °C och 75 %, ingen årstid |  | 1–2 ord |
| `fuktkvot.forval.kallare` | `src/pages/rakna/fuktkvot.astro` | 166 | chip, 15 °C och 75 %, ingen årstid |  | 1–2 ord |
| `fuktkvot.forval.vind` | `src/pages/rakna/fuktkvot.astro` | 167 | chip, 2 °C och 83 %, ingen årstid |  | 1–2 ord |
| `fuktkvot.forval.ute-sommar` | `src/pages/rakna/fuktkvot.astro` | 168 | chip, 15 °C och 75 % |  | 1–2 ord |
| `fuktkvot.forval.ute-vinter` | `src/pages/rakna/fuktkvot.astro` | 169 | chip, 0 °C och 95 % |  | 1–2 ord |
| `fuktkvot.antaganden.kol.vad` | `src/pages/rakna/fuktkvot.astro` | 265 | antagandetabellen, kolumnrubrik 1 |  | 1–2 ord |
| `fuktkvot.antaganden.kol.varde` | `src/pages/rakna/fuktkvot.astro` | 266 | kolumnrubrik 2, värdet |  | 1–3 ord |
| `fuktkvot.antaganden.kol.grund` | `src/pages/rakna/fuktkvot.astro` | 267 | kolumnrubrik 3, Källa eller Antagande med titel |  | 1–3 ord |
| `fuktkvot.antaganden.rubrik` | `src/pages/rakna/fuktkvot.astro` | 269 | H3 över antagandetabellen |  | en rad |
| `fuktkvot.antaganden.caption` | `src/pages/rakna/fuktkvot.astro` | 270 | sr-only caption; nyckel tillagd av utvecklaren |  | en fras |
| `fuktkvot.antaganden.rad.ekvation` | `src/pages/rakna/fuktkvot.astro` | 284 | raden W, K, K1 och K2 i ekvation (4-5), Källa WH4 |  | en fras |
| `fuktkvot.antaganden.rad.lagsta-temp` | `src/pages/rakna/fuktkvot.astro` | 290 | raden −1,1 °C, lägsta temperatur i tabell 4-2, Källa WH4 |  | en fras |
| `fuktkvot.antaganden.rad.hogsta-rf` | `src/pages/rakna/fuktkvot.astro` | 296 | raden 95 % RF, högsta i tabell 4-2, Källa WH4 |  | en fras |
| `fuktkvot.antaganden.rad.over-24` | `src/pages/rakna/fuktkvot.astro` | 302 | raden svaret "över 24 %", Antagande |  | en fras |
| `fuktkvot.antaganden.rad.fuktkvot-formel` | `src/pages/rakna/fuktkvot.astro` | 307 | raden u-formeln, Källa WH4 ekvation (4-2) |  | en fras |
| `fuktkvot.antaganden.rad.fukthalt-formel` | `src/pages/rakna/fuktkvot.astro` | 313 | raden w-formeln, Källa TG-TF |  | en fras |
| `fuktkvot.antaganden.rad.omrakning` | `src/pages/rakna/fuktkvot.astro` | 319 | raden u = w / (1 − w), Källa TG-TF (härledd ur definitionerna) |  | en fras |
| `fuktkvot.antaganden.rad.malning` | `src/pages/rakna/fuktkvot.astro` | 325 | raden 16 %, Källa TG-FM |  | en fras |
| `fuktkvot.antaganden.rad.inbyggnad` | `src/pages/rakna/fuktkvot.astro` | 331 | raden 18 %, Källa TG-FM |  | en fras |
| `fuktkvot.antaganden.rad.golv` | `src/pages/rakna/fuktkvot.astro` | 337 | raden 7,0–9,0 %, Källa TG-S |  | en fras |
| `fuktkvot.antaganden.rad.mogel-rf` | `src/pages/rakna/fuktkvot.astro` | 343 | raden 75 % RF, Källa TG-M |  | en fras |
| `fuktkvot.antaganden.rad.mogel-fuktkvot` | `src/pages/rakna/fuktkvot.astro` | 349 | raden 15 %, Källa TG-M |  | en fras |
| `fuktkvot.antaganden.rad.rota` | `src/pages/rakna/fuktkvot.astro` | 355 | raden 20 %, Källa TG-M |  | en fras |
| `fuktkvot.antaganden.rad.rota-etablerad` | `src/pages/rakna/fuktkvot.astro` | 361 | raden 30 %, Källa TG-M |  | en fras |
| `fuktkvot.antaganden.rad.ved` | `src/pages/rakna/fuktkvot.astro` | 367 | raden fukthalt 15–20 %, Källa NV |  | en fras |
| `fuktkvot.antaganden.rad.ved-for-torr` | `src/pages/rakna/fuktkvot.astro` | 373 | raden fukthalt 10 %, Källa NV |  | en fras |
| `fuktkvot.antaganden.rad.forval-bostad` | `src/pages/rakna/fuktkvot.astro` | 379 | raden förvalen bostad, 25 % och 60 %, Källa TG-TF |  | en fras |
| `fuktkvot.antaganden.rad.forval-ute` | `src/pages/rakna/fuktkvot.astro` | 385 | raden förvalen ute, 75 % och 95 %, Källa TG-TF |  | en fras |
| `fuktkvot.antaganden.rad.forval-krypgrund` | `src/pages/rakna/fuktkvot.astro` | 391 | raden förvalet krypgrund, 75 %, Källa Olsson SP |  | en fras |
| `fuktkvot.antaganden.rad.forval-kallare` | `src/pages/rakna/fuktkvot.astro` | 397 | raden förvalet källare, 75 %, Källa Villaägarna |  | en fras |
| `fuktkvot.antaganden.rad.forval-vind` | `src/pages/rakna/fuktkvot.astro` | 403 | raden förvalet vind, 83 %, Källa LTH |  | en fras |
| `fuktkvot.antaganden.rad.forval-temp` | `src/pages/rakna/fuktkvot.astro` | 409 | raden förvalens temperaturer, Antagande |  | en fras |
| `fuktkvot.tabell.rubrik` | `src/pages/rakna/fuktkvot.astro` | 416 | H2 över tabellen vid 20 °C |  | en rad |
| `fuktkvot.tabell.caption` | `src/pages/rakna/fuktkvot.astro` | 417 | sr-only caption; nyckel tillagd av utvecklaren |  | en fras |
| `fuktkvot.tabell.kol.rf` | `src/pages/rakna/fuktkvot.astro` | 419 | kolumnrubrik RF |  | med enhet |
| `fuktkvot.tabell.kol.wh` | `src/pages/rakna/fuktkvot.astro` | 420 | kolumnrubrik modellen, Wood Handbook |  | 1–3 ord, med enhet |
| `fuktkvot.tabell.kol.tg` | `src/pages/rakna/fuktkvot.astro` | 421 | kolumnrubrik TräGuiden |  | 1–3 ord, med enhet |
| `fuktkvot.tabell.kalla` | `src/pages/rakna/fuktkvot.astro` | 423 | källraden under tabellen |  | 1–2 meningar |
| `fuktkvot.ingress` | `src/pages/rakna/fuktkvot.astro` | 476 | ingressen under H1 |  | 2–4 meningar |
| `register.fuktkvot.svar` | `src/lib/kalkyl/register.ts` | 57 | registrets svar, i räkna-indexets lista |  | 2–4 ord, gemener, utan punkt |
| `register.fuktkvot.namn` | `src/lib/kalkyl/register.ts` | 58 | kortets rubrik och ankartext |  | en rad |
| `register.fuktkvot.rad` | `src/lib/kalkyl/register.ts` | 59 | kortets rad, en mening med verb |  | högst tolv ord |
| `korttal.fuktkvot` | `src/lib/kalkyl/korttal.ts` | 76 | villkoret under talet 12,0 % på talkortet (20 °C och 65 %) |  | under 45 tecken |

102 nycklar.

---

## Skrivet av hantverkaren 2026-10-04

Alla 102 nycklar står i koden på nyckelns rad. Därtill:

- **Skissen** (`src/assets/illustrationer-kallor/rakna/fuktkvot.svg`): `skiss.fuktkvot.luft` "luften 20 °C, 65 %", `skiss.fuktkvot.tal` "12 % fuktkvot" (gul markering), `skiss.fuktkvot.tra` "i brädan", aria-label "Skiss av en bräda och en hygrometer i luft med 20 grader och 65 procent luftfuktighet, där brädan går mot 12 procent fuktkvot." `npm run illustrationer` är kört; UX breddar markeringen och kör om.
- **Kod, liten:** `SVAR_ANDRA_KVOT` ("Fuktkvoten är {tal} %.") för raden under talet när det stora talet är fukthalten, och platshållaren `{andra}` (ordet för det andra talet) i `fuktkvot.klartext.halt`.
- **Godkänt utan nyckel:** gränserna i `bedom()` ("högst 16 %", "högst 18 %", "7 till 9 %", "fukthalt 15 till 20 %", "RF under 75 %", "under 15 %", "under 20 %") och "över 24".
- **Elkostnad:** produktraden säger "enligt tillverkaren", eltabellens källrad "ur tillverkarnas datablad och bruksanvisningar, för Wood's maskiner ur Wood's egen bruksanvisning".
