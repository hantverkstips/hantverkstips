# Texter till /rakna/kok-kostnad/

UX och bygge-agenten, 2026-09-29. Detta är alla `TEXT SAKNAS` i köksräknaren. Hantverkaren skriver dem i filerna, och platshållaren byts mot texten på samma ställe. Specen är `docs/briefer/spec-kalkyl-kok-kostnad-2026-09-29.md`. Kraven på title, description, H1, H2, längd och länkar står i `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnittet /rakna/kok-kostnad/ med tillägget för startlista 4.

Två filer:

- **M** = `src/lib/kalkyl/renovering.ts`, objektet `KOK_TEXT` under rubriken "Köket" (sök på `export const KOK_TEXT`). Badrummets `TEXT` längre upp i samma fil rörs inte. En funktion får talen som parametrar eller som `KokBeskedVarden` (`v`). Använd dem och skriv aldrig ett tal för hand; parametrarna heter `_v`, `_kr` och så vidare tills de används, och understrecket tas bort när texten skrivs.
- **S** = `src/pages/rakna/kok-kostnad.astro`: konstanterna överst, brödtexten i de tre H2-sektionerna, Läs vidare och Faq.

`v` (`KokBeskedVarden`) har färdiga strängar: `attBetala`, `foreRot`, `rot`, `kapat`, `kapatMax`, `arbete`, `material`, `andelArbete`, `luckor` (antal), `meter` ("4" eller "4,8"), `agare` (1 eller 2), `hamtat` ("28 september 2026"), `vag` (`luckor`, `bankskiva`, `luckor-bankskiva`, `nytt`) och `spann` (sant när talen är "A till B"). Ett spann skrivs redan "48 460 till 86 960"; skriv inte "mellan" framför.

**Talen vid standard** (16 luckor, billigaste prisgruppen, nya gångjärn, en ägare): luckor 6 240 kr, gångjärn 5 408 kr, montering 7 500 kr, före rot 19 148 kr, rotavdrag 2 250 kr, **att betala 16 898 kr**, arbetet 39 procent. Samma tal som tabellen i `/kok/byta-koksluckor/`.

**Talen för kortsvaret** (`kokKortsvarVarden()`): luckor 16 898 kr; bänkskiva i laminat 4 m 3 400 till 11 600 kr och 5 m 4 250 till 14 500 kr; nytt kök 4 m 48 460 till 86 960 kr och 5 m 52 800 till 92 300 kr efter rotavdraget.

Gäller all text:

- Förmedlarna (Hantverkskollen) **nämns inte vid namn** i publik text. Sidan skriver deras namn själv i antagandetabellen.
- Texten får inte antyda att läsaren drar el eller gör VVS själv. Att hällens anslutning är elinstallation är **vår slutsats** ur Elsäkerhetsverkets text, och det ska märkas som det. Säker Vatten är branschregler och **förbjuder ingen privatperson** något; det som stämmer är att bara ett auktoriserat VVS-företag kan utfärda intyg.
- Nytt kök räknas **bara i enkel nivå**. Dyrare stommar finns inte med, eftersom källor saknas.
- "byta köksluckor pris" ägs av `/kok/byta-koksluckor/`, och "byta bänkskiva kök kostnad" av `/kok/byta-bankskiva/`. I räknaren är de val i formuläret och poster i tabellen, inte rubriker och inte ord i titeln.
- Rotavdragets gräns heter "gräns", aldrig "tak". Ordet "lucka" betyder köksluckan; "stomme" är skåpet.
- Rotavdragets tal, c-förklaringar och femårsregeln står redan på syskonsidorna; skriv det som gäller köket i en mening och länka (stil-och-design 1).

---

## 1. Sidans ram (S)

| Nyckel | Längd | Vad den ska säga |
|---|---|---|
| `VERKTYGSNAMN` | kort, bär frasen | Namnet i brödsmulan och `WebApplication`. Samma som registernamnet (avsnitt 10) |
| `titel` | högst 44 tecken | Börjar med "Renovera kök, kostnad" eller "Vad kostar det att renovera köket" (checklistan 3) |
| `BESKRIVNING` | 120 till 155 tecken | Lovar kostnaden för tre vägar (luckor, bänkskiva, nytt kök), arbete och material för sig, och rotavdraget (checklistan 4) |
| `H1` | en fråga | Läsarens fråga. Delar inte de tre första orden med titeln. "köksrenovering pris" här eller i beskedet (checklistan 2 och 5) |
| `INGRESS` | två till fyra meningar | Vad läsaren väljer och fyller i och vad hon får tillbaka |
| `H2_VAGAR` | rubrik | Checklistans H2 1: tre vägar och vad de kostar |
| `H2_SJALV` | rubrik | Checklistans H2 2: vad du kan göra själv. **Bär "renovera kök billigt"** |
| `H2_ROT` | rubrik | Checklistans H2 3: rotavdraget för köket |

## 2. Brödtexten (S), 700 till 1 000 ord utöver formuläret

Varje sektion har platshållarstycken (`h2-vagar.stycke-1` med flera). Skriv så många stycken som behövs; länkarna skrivs som vanliga `<a href>` utan klass.

| Sektion | Vad den ska säga | Länkar som krävs |
|---|---|---|
| `h2-vagar` | Byta luckor, byta bänkskiva, nytt kök, och vad de kostar ungefär. Varför el och VVS blir den stora överraskningen när planlösningen ändras. "renovera kök" i löptexten | `/kok/byta-koksluckor/` och `/kok/mala-koksluckor/` |
| `h2-sjalv` | Montera luckor, bänkskiva och stommar själv, måla luckorna i stället för att byta. El: fast installation görs av ett registrerat elinstallationsföretag; att det gäller hällen är vår slutsats. Vatten: branschreglerna och intyget, inget förbud. **Bär "renovera kök billigt".** | `/kok/mala-koksluckor/` |
| `h2-rot` | Två ägare, att material aldrig ger avdrag, att lackering i verkstad inte ger avdrag | `/rakna/rotavdrag/` |

## 3. Kortsvaret (M `kortsvar`)

Funktionen får `KokKortsvarVarden`: `luckor`, `bankskiva4`, `bankskiva5`, `nytt4`, `nytt5`, var och en `{ foreRot, rot, attBetala }`, och `hamtat`. Den returnerar `{ fore, markering, efter }`, där `markering` är det enda talet med gul markering och ska vara ett av `attBetala`-talen. Tre till fem meningar: vad de tre vägarna kostar i ett kök med 4 till 5 meter skåp, vad rotavdraget blir, och varifrån priserna kommer, hämtade `hamtat`.

## 4. Beskeden (M `besked`)

En rubrik är en mening med ett verb som säger vad läsaren ska göra. Raden under säger något annat. Båda korta.

| Nyckel | Bär | Vad den ska säga |
|---|---|---|
| `besked.belopp.rubrik(v)` | `v.attBetala` | Vad läsaren ska räkna med att betala efter rotavdraget. Ska fungera både med ett tal och med ett spann |
| `besked.belopp.rad(v)` | | Något annat än rubriken, till exempel arbetets andel (`v.andelArbete`) eller att offerten ska ha samma poster |
| `besked.tak.rubrik(v)` | `v.attBetala` | Som `belopp`, men gränsen för rotavdraget har nåtts |
| `besked.tak.rad(v)` | `v.kapatMax` | Att gränsen stoppar upp till `kapatMax` kr, och vad två ägare eller betalning efter nyår gör. Skrivs inte som badrummets rad |

## 5. Formuläret (M `form`, `vag`, `niva`, `gangjarn`, `material`, `flytt`, `egen`, `fel`)

| Nyckel | Vad den ska säga |
|---|---|
| `form.legend-vag` | Legend: vad som ska göras |
| `vag.luckor` | Nya luckor på stommarna du har |
| `vag.bankskiva` | Ny bänkskiva |
| `vag.luckor-bankskiva` | Båda |
| `vag.nytt` | Nytt kök, med stommar och vitvaror |
| `form.legend-luckor` | Legend för luckorna |
| `form.luckor` | Etikett: antal luckor |
| `form.luckor-hjalp` | Räkna luckorna, inte lådfronterna (bara fullt format) |
| `form.legend-niva` | Legend: luckornas prisnivå |
| `niva.enkel`, `niva.mellan`, `niva.hog` | Vad man får i varje nivå, inte bara "enkel". Talen är Vedums prisgrupp 1, 5 och 10 |
| `form.niva-hjalp` | Att nytt kök alltid räknas i den enklaste nivån (bara fullt format) |
| `form.legend-gangjarn` | Legend: gångjärnen |
| `gangjarn.nya`, `gangjarn.behall` | Nya gångjärn, eller behåll de gamla |
| `form.legend-bankskiva` | Legend för bänkskivan |
| `form.meter` | Etikett: längd i meter |
| `form.meter-hjalp` | Bänkskivans längd, och vid nytt kök skåpradens (bara fullt format) |
| `form.legend-material` | Legend: bänkskivans material |
| `material.laminat`, `material.tra`, `material.komposit` | Laminat, massivt trä, kvartskomposit |
| `form.legend-flytt` | Legend: när planlösningen ändras |
| `flytt.el` | Spisen flyttas eller köket får en ny elgrupp |
| `flytt.diskbank` | Diskbänken flyttas |
| `form.flytt-hjalp` | Att valen bara gäller nytt kök. Står också i kompakt form |
| `form.legend-egen` | Legend: det du gör själv |
| `egen.montering` | Monteringen (luckorna, skivan eller köket, efter vägen) |
| `egen.rivning` | Rivningen av det gamla köket |
| `form.egen-hjalp` | Att el och VVS inte går att välja och varför, och att rivningen bara gäller nytt kök. En eller två meningar. Står också i kompakt form |
| `form.legend-agare` | Legend för ägare och rotavdrag |
| `form.agare-1`, `form.agare-2` | Radioetiketterna (badrummet har "En ägare" och "Två ägare") |
| `form.rot` | Etikett: rotavdrag som redan är använt i år |
| `form.rot-hjalp` | Summan för alla som äger bostaden |
| `fel.luckor(min, max)` | Feltext med gränserna 1 och 60, hela luckor |
| `fel.meter(min, max)` | Feltext med gränserna 0,5 och 15 meter. `min` kommer som 0.5; skriv det med `kvmText(min)` så att det blir "0,5" |
| `fel.agare` | En eller två |
| `fel.rot(max)` | Den högsta summan för antalet ägare. Talet kommer som parameter; skriv det med `krText(max)` |

## 6. Resultatspalten (M `spalt`)

Högst 700 tecken synlig text vid standard. I dag 323 tecken med platshållare.

| Nyckel | Vad den ska säga |
|---|---|
| `spalt.etikett-betala` | Etiketten över det stora talet, två till fyra ord |
| `spalt.rad-summa(foreRot, rot)` | Före rotavdraget och avdraget, en mening |
| `spalt.rad-delning(arbete, material)` | Arbete och material, en mening. Inga containrar i köket |
| `spalt.rad-kallor(hamtat)` | Att priserna är tillverkares, firmors och förmedlares, hämtade `hamtat`, och att handtag, lådfronter och frakt inte är med. Förmedlarna nämns inte vid namn |
| `spalt.pekrad` | Länk till tabellen post för post |
| `spalt.lank-rotavdrag` | Länk till rotavdragsräknaren med värdena ifyllda |
| `spalt.lank-sa-raknar-jag` | Länk till källorna och antagandena |

`spalt.dela-etikett` är gränssnitt och står redan ("Länk till ditt svar").

## 7. "Därför blev svaret så" (M `darfor`, `post`, `regel`, `gorInte`)

| Nyckel | Vad den ska säga |
|---|---|
| `darfor.tabell-post`, `-arbete`, `-material` | Kolumnrubrikerna, enheten "kr" i rubriken |
| `darfor.summa` | Summaradens rubrik |
| `darfor.rot(v)` | Rotavdraget, ett kort stycke. Vid `tak` räcker inte procentsatsen |
| `darfor.betala(v)` | Summan minus avdraget |
| `darfor.kallrad` | Länken ner till "Vad siffrorna vilar på" |
| `post.*` | Postens namn: `rivning`, `stommar` (stommar och luckor i nytt kök), `luckor`, `gangjarn`, `bankskiva`, `vitvaror`, `el` (ny elgrupp), `vvs` (flytt av diskbänken) |
| `postEgen` | I arbetscellen när läsaren gör det själv, ett eller två ord |
| `postIngar` | När arbetet ingår i en annan post (gångjärnen i luckornas montering, skivan i köksmonteringen) |
| `postInget` | När arbetet inte räknas (vitvarornas installation) |

Reglerna. Källorna står under regeln av sig själva; texten ska inte upprepa dem, och ingen regel ska sluta med "enligt X". Förmedlarnas regler får i stället en länk ner till tabellen, en gång.

| Regel | Visas när | Vad den ska säga |
|---|---|---|
| `regel.luckor-pris` | luckor | Pris per lucka i vald prisgrupp, 60 cm bred lucka, gångjärn ingår inte |
| `regel.luckor-montering` | luckor | Fast pris för monteringen upp till 20 luckor, därefter i proportion, och att det fasta priset gör att ett litet kök inte blir för billigt |
| `regel.gangjarn` | luckor | Två gångjärn per lucka, och att de gamla kan sitta kvar om de passar |
| `regel.bankskiva` | bänkskiva | Pris per löpmeter för materialet och monteringen, som spann |
| `regel.nytt-enkel` | nytt kök | Bara den enklaste nivån, dyrare stommar saknar priser med källa och ligger över räknarens gräns |
| `regel.flytt` | nytt kök | El och VVS som egna poster när planlösningen ändras, och att det är där budgeten brukar spricka |
| `regel.spann` | spann | Varför svaret är "A till B": källornas eget spann, ingen medelväg |
| `regel.tillkommer` | alltid | Handtag, lådfronter, frakt och vitvarornas installation är inte med |
| `regel.rot-arbete` | alltid | Rotavdraget räknas på arbetet (`v.arbete`); luckor, skiva och vitvaror ger inget |
| `regel.rot-tak` | alltid | Gränsen per person och år, och att två ägare har var sin |
| `regel.rot-slog-i` | tak | Att gränsen nås och upp till `v.kapatMax` kr hamnar utanför |
| `regel.egen-insats` | egen insats | Det du gör själv ger inget rotavdrag; elen och VVS står kvar som firmans |

Gör inte det här:

| Nyckel | Visas när | Vad den ska säga |
|---|---|---|
| `gorInte.rot-pa-allt` | alltid | Dra inte av procenten på hela summan. Andra meningar än badrummets rad |
| `gorInte.verkstad-rot` | luckor | Räkna inte med rotavdrag för lackering i verkstad (Skatteverket: "i företagets lokaler") |
| `gorInte.el-sjalv` | nytt kök | Koppla inte in hällen eller dra nya uttag själv; fast installation är registrerat elinstallationsföretags jobb, och hällen är vår slutsats |
| `gorInte.vvs-intyg` | nytt kök med flyttad diskbänk | Varför en auktoriserad VVS-firma ska flytta diskbänken: intyget, och vad försäkringen frågar efter. Inget förbud |
| `gorInte.riva-sjalv` | nytt kök med egen rivning | Riv skåpen men lämna el och vatten åt firmorna |

## 8. "Så räknar jag" (M `steg`, `antagande`, `antagandeVarde`)

`steg`: fyra punkter. 1) posterna efter vägen, 2) två kanter med alla nedre och alla övre tal, 3) summan, 4) rotavdraget så långt gränsen räcker.

`antagande.*` är kolumnen Vad, en kort benämning per rad: `lucka-pris`, `gangjarn`, `luckor-montering`, `luckor-fast-max`, `bankskiva-material`, `bankskiva-montering`, `bankskiva-i-kok`, `stommar`, `stommar-modul`, `montering-kok`, `montering-storlek`, `vitvaror`, `rivning`, `el`, `vvs`, `el-vvs-arbete`, `ingen-dyr-niva`, `ej-med`, `rot-procent`, `rot-grans`, `rut-skatt`.

`antagandeVarde.*` är kolumnen Värde där värdet är ord. Talen kommer som parametrar:

| Nyckel | Parametrar | Vad den ska säga |
|---|---|---|
| `lucka-pris(kr)` | kr per lucka | "{kr} kr per lucka" och prisgruppen |
| `gangjarn(kr, antal)` | kr styck, antal per lucka | "{kr} kr styck, {antal} per lucka" |
| `luckor-fast-max(max)` | 20 | Fasta priset upp till {max} luckor, sedan i proportion |
| `bankskiva-material(spann)` | "500 till 1 500 kr" | Per löpmeter |
| `bankskiva-montering(spann)` | "500 till 2 000 kr" | Per löpmeter |
| `bankskiva-i-kok` | | Ingår i köksmonteringen, och skivan är lika lång som skåpraden |
| `stommar(kr)` | 3 840 | Per meter kök |
| `stommar-modul` | | Ett bänkskåp och ett väggskåp med två luckor per 60 cm |
| `montering-storlek` | | Hela spannet, eftersom källan anger köksstorleken utan mått |
| `el-vvs-arbete` | | Allt räknas som arbete |
| `ingen-dyr-niva` | | Räknas inte, källa saknas |
| `ej-med` | | Handtag, lådfronter, frakt, vitvarornas installation, container |
| `rot-grans(kr)` | 50 000 | Per person och år |
| `rut-skatt` | | Räknas inte in här |

## 9. Läs vidare och Faq (S)

- `las-vidare.byta-koksluckor`, `las-vidare.mala-koksluckor`, `las-vidare.rotavdrag`: länktexterna, med nya ord och inte "läs mer". `/kok/byta-bankskiva/` läggs till när den är publicerad.
- Faq, tre till fem frågor (`faq.1` till `faq.3`, fler får läggas till). Förslag som inte står i brödtexten: om IKEA:s kök och andra stommar, om luckbyte i en bostad yngre än fem år, om vitvarorna ingår.

## 10. Registret och bilderna (publiceringsomgången)

- `namn` (bär "renovera kök kostnad", samma som `VERKTYGSNAMN`) och `rad` (en mening med verb, som till en granne) i `src/lib/kalkyl/register.ts`.
- Skissens etiketter (köksväggen i elevation med skåprad, lucka, gångjärn, bänkskiva, stomme, "4 m" och "16 898 kr"), `skissAlt` (under 125 tecken, med orden renovera kök och kostnad) och `skissBildtext` (M). UX och bygge specar skissen ordagrant när etiketterna finns.

---

## 11. Elkostnaden: golvvärmens text (M = `src/lib/kalkyl/elkostnad.ts`)

Golvvärmesidan bäddar in `/rakna/elkostnad/` med `typ=golvvarme` i förvalet. Då visar räknaren aldrig avfuktarens text om hygrostaten.

| Nyckel | Vad den ska säga |
|---|---|
| `GOR_INTE_DYGNET_RUNT_GOLVVARME` | "Gör inte det här" när golvvärmen räknas med 24 timmar per dygn: att termostaten slår av och på, så 24 timmar med full effekt ger ett för högt tal, och vad läsaren skriver i stället. Underlaget är `docs/briefer/faktablad/kunskap-golvvarme-badrum.md` avsnitt 2c. I dag `null`, och då står ingen text alls |

---

## 12. Rotavdraget som villkor på luckor och bänkskiva (M = `src/lib/kalkyl/renovering.ts`, S = sidan), 2026-09-29

SEO:s kontroll (`seo-checklista-2026-09-29/kok-4.md`, räknaren punkt 1) och specen K10. På vägarna nya luckor, ny bänkskiva och båda är priset utan rotavdrag svaret, eftersom Skatteverket nämner montering av fast köksinredning bara i samband med en omfattande renovering. Ett helt nytt kök räknas som förut. Räknaren ska säga samma sak som `/kok/byta-koksluckor/` och `/kok/byta-bankskiva/`. Talen kommer in som parametrar och skrivs aldrig för hand. Varje värde står som `TEXT SAKNAS` tills det är skrivet.

| Nyckel | Var | Vad den ska säga |
|---|---|---|
| `beskedVillkor.rubrik(v)` | M, spaltens rubrik | Vad läsaren lägger i budgeten, utan rotavdrag. Bär `v.foreRot` (spann "A till B" på bänkskivan). Inte samma form som `besked.belopp.rubrik`. |
| `beskedVillkor.rad(v)` | M, raden under rubriken | Vad läsaren gör härnäst, efter vägen (`v.vag`). Inte om rotavdraget, det står i `spalt.rad-villkor`. Får bygga på de tre raderna i `besked.belopp.rad`, men bara om de fortfarande stämmer utan avdrag. |
| `spalt['etikett-villkor']` | M, över det stora talet | Två till fyra ord, att talet är priset utan rotavdrag. |
| `spalt['rad-villkor'](v)` | M, spalten efter pekraden | Om bytet ingår i en större renovering av köket blir avdraget `v.rot` kr och priset `v.attBetala` kr, och att det är Skatteverket som avgör. En eller två meningar. Testet (todo) kräver `v.rot`, `v.attBetala` och ordet Skatteverket. |
| `darfor['rot-villkor'](v)` | M, under posttabellen | Ersätter `darfor.rot` och `darfor.betala` på de tre vägarna: summan i tabellen är priset utan avdrag. Arbetet (`v.arbete`) ger 30 procent i avdrag bara om det ingår i en större renovering, och då blir priset `v.attBetala`. |
| `regel['rot-villkor'].text(v)` | M, "Därför blev svaret så" | Ersätter `rot-arbete`: Skatteverket nämner montering av fast köksinredning bara i samband med en omfattande renovering, och bara arbetet ger avdrag, aldrig luckorna, gångjärnen eller skivan. Källraden (Skatteverket två gånger) sätts av sidan. |
| `gorInte['rot-villkor']` | M, "Gör inte det här" | Ersätter `rot-pa-allt` på de tre vägarna: räkna inte med rotavdraget i budgeten för ett luckbyte eller skivbyte förrän det är klart att det gäller, och hur läsaren tar reda på det (fråga firman, Skatteverket). |
| `las-vidare.byta-bankskiva` | S, `LAS_VIDARE` i `src/pages/rakna/kok-kostnad.astro` | Länktext till `/kok/byta-bankskiva/`, med nya ord och inte samma form som de tre andra. |

Texter som redan finns och som räknar med avdraget på luckorna. Jag har inte rört dem, men de säger emot det nya beskedet, och det är hantverkarens att avgöra om de ska skrivas om:
- `kortsvar`: "betalar du 16 898 kr efter ett rotavdrag på 2 250 kr" och bänkskivans pris "efter avdraget"
- `gorInte['verkstad-rot']`, som jämför med nya luckor med avdrag
- H2_ROT:s första stycke: "På ett luckbyte blir rotavdraget drygt en tiondel av priset"
- `skissBildtext`: "efter rotavdraget"
- skissens nyckeltal "16 898 kr"

Blir svaret 19 148 kr ritas skissen om när bildtexten är ändrad.

### 12b. Rättelse samma dag: luckorna ger avdrag, och luckor med bänkskiva delas (specen K10, rättad)

Skatteverket ger avdrag för att "byta och reparera köksluckor …" utan villkor. Villkoret "i samband med omfattande byggarbete eller renovering" gäller bara montering av fast köksinredning, och bänkskivan räknas dit. Räknaren gör nu så här:
- **Nya luckor:** avdrag som före K10, och svaret är efter avdraget (16 898 kr).
- **Ny bänkskiva:** priset utan avdrag, och villkoret på en egen rad. Det är texterna i avsnitt 12, som redan är skrivna.
- **Luckor och bänkskiva:** arbetet delas. Luckornas montering får avdrag i svaret, och bänkskivans montering får villkoret. Huvudbeskedet, etiketten, raden om summan och `darfor.betala` är de vanliga (`besked`, `etikett-betala`, `rad-summa`). Tre texter är nya:

| Nyckel | Var | Vad den ska säga |
|---|---|---|
| `spalt['rad-villkor-delat'](v)` | M, spalten efter pekraden | Avdraget i svaret (`v.rot`) gäller luckornas montering (`v.arbeteSakert`). Bänkskivans montering (`v.arbeteVillkor`) ger avdrag bara om bytet ingår i en större renovering, och då blir avdraget `v.villkorRot` och priset `v.villkorAttBetala`. Skatteverket avgör. En eller två meningar. |
| `darfor['rot-delat'](v)` | M, under posttabellen, före `darfor.betala` | Ersätter `darfor.rot` på den här vägen: avdraget `v.rot` är 30 procent av luckornas montering `v.arbeteSakert`. Skivans montering `v.arbeteVillkor` är inte med, och vad avdraget blir om den räknas in. |
| `regel['rot-delat'].text(v)` | M, "Därför blev svaret så", före `rot-villkor` | Att Skatteverket nämner byte av köksluckor bland arbetena som ger avdrag, medan montering av fast inredning bara gör det vid en större renovering. Därför räknas avdraget på luckorna men inte på skivan. Källraden sätts av sidan. |

Två små saker till:
- I avsnitt 12 gällde `beskedVillkor`, `rad-villkor`, `darfor['rot-villkor']` och `gorInte['rot-villkor']` först också luckorna. Nu visas de bara för bänkskivan, och grenen för luckor i `beskedVillkor.rad` visas aldrig och kan strykas.
- I `rad-villkor` och `darfor['rot-villkor']` heter talen nu `v.villkorRot` och `v.villkorAttBetala`. Orden är desamma.

### 12c. Granskningen av gränssnittet, 2026-09-29 (UX och bygge)

Ändrat i koden, ingen ny text:
- Länken till rotavdragsräknaren visas inte på bänkskivan, där svaret är utan avdrag.
- Skissen med luckbytet och 16 898 kr står bara på vägen luckor.
- Regeln `tillkommer` har en källa per väg: Vedum för luckorna, Ikea för nytt kök och ingen för bänkskivan.
- Regeln `rot-luckor` visas på vägen luckor, med källan Skatteverket, ger arbetet rätt till rotavdrag. Texten är redan skriven.

Till hantverkaren:
- **Kontrollera före publicering:** `regel['rot-luckor']` säger "både i småhus och i bostadsrätt". Faktabladet (`faktablad/rakna-kok-kostnad.md` rad 22) citerar byte av köksluckor bara ur Skatteverkets avsnitt om småhus. Stryk bostadsrätten, eller be underlagsarbetaren om citatet.
- **Kan vänta, önskemål och ingen TEXT SAKNAS:** `spalt['rad-summa']` kan säga att summan är före avdraget, till exempel "Före avdraget är summan …". `form['rot-hjalp']` och den tredje raden i `besked.tak.rad` kan säga tydligare vad två ägare betyder: var och en har sin egen gräns.
- **Ingen ändring:** kortsvaret räknar 4 till 5 meter, och formulärets 4 meter ger ett tal inom det spannet (86 960 kr ligger inom 48 460 till 92 300 kr).
