# Texter till /rakna/takbyte/ och /rakna/takavvattning/

UX och bygge-agenten, 2026-09-29. Detta är alla `TEXT SAKNAS` i de två takräknarna. Hantverkaren skriver dem i filerna, och platshållaren byts mot texten på samma rad. Specen är `docs/briefer/spec-kalkyl-tak-2026-09-29.md`. Kraven på title, description, H1, H2, längd och länkar står i `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnitten /rakna/takbyte/ och /rakna/takavvattning/, och i `tak.md` punkt 9.

Fyra filer:

- **MB** = `src/lib/kalkyl/takbyte.ts`, objektet `TEXT` (från rad 490 ungefär).
- **SB** = `src/pages/rakna/takbyte.astro`, konstanterna överst (rad 60 till 90) och brödtexten (rad 360 till 405).
- **MA** = `src/lib/kalkyl/takavvattning.ts`, objektet `TEXT` (från rad 457 ungefär).
- **SA** = `src/pages/rakna/takavvattning.astro`, konstanterna överst (rad 56 till 76) och brödtexten (rad 298 till 305).

En funktion får talen som parametrar eller som `v`. Använd dem i texten och skriv aldrig ett tal för hand.

Gäller all text:

- Förmedlarna (Takexperter, Hantverkskollen) **nämns inte vid namn** i publik text, utom i antagandetabellen, där sidan själv skriver deras namn ur källdata. Källan under en regel visas bara när den inte är en förmedlare.
- Ord med två betydelser byts ut. Rotavdragets gräns heter "gräns", aldrig "tak", och det gäller särskilt här där taket är ämnet.
- Inga tankstreck. Spann skrivs "1 080 till 2 500", och modulen levererar dem så.
- Räknaren dimensionerar inga takstolar och räknar ingen snölast. Texten får inte antyda något annat.

---

# Del 1. Takbytet

`v` (`BeskedVarden`, MB) har formaterade tal: `attBetalaLag`, `attBetalaHog`, `kostnadLag`, `kostnadHog`, `rotLag`, `rotHog`, `kapat`, `arbeteLag`, `arbeteHog`, `materialLag`, `materialHog`, `prisLag`, `prisHog`, `andelArbete` (procent, en decimal), `takarea`, `bottenyta`, `paslag` (procent), `vinkel`, `nock` (meter, två decimaler), `matt` ('vinkel' eller 'nock', det läsaren angav), `takfallslangd`, `takstolar`, `cc`, `min`, `max` (100 och 200), `sida` ('under', 'over' eller null), `agare` (1 eller 2), `ettTal` (sant för betong, tegel och papp), `tillagg` ("30 000"), `hamtat` ("28 september 2026") och `material` (etiketten ur `TEXT.material`). Beloppen är null vid utanför.

**Talen vid standard** (12 × 9 m, utsprång 0,5 och 0,4 m, 27°, betong, en ägare): takarea 143,7 m² mot bottenyta 108 m², påslag 12,2 procent, kostnad 161 471 kr, arbete 89 642, material 71 829, rotavdrag 26 893, **att betala 134 578 kr**, 11 takstolar vid 1 200 mm. Bandplåt ger 135 659 till 314 026 kr, tegel 183 422 kr, papp 93 684 kr och takpanneplåt 120 310 till 200 516 kr.

## 1. Sidans ram (SB)

| Nyckel | Längd | Vad den ska säga |
|---|---|---|
| `VERKTYGSNAMN` | kort, bär frasen | Namnet i brödsmulan och `WebApplication`. Samma som registernamnet senare, som bär "byta tak kostnad" |
| `titel` | högst 44 tecken | Börjar med "Byta tak, kostnad" eller "Vad kostar det att byta tak" (checklistan 3) |
| `BESKRIVNING` | 120 till 155 tecken | Checklistan 4 |
| `H1` | en fråga | Läsarens fråga. Delar inte de tre första orden med titeln |
| `INGRESS` | två till fyra meningar | Vad läsaren fyller i och vad hon får tillbaka |

## 2. Kortsvaret (MB `kortsvar`)

Funktionen får `KortsvarVarden`: `betong`, `tegel` och `bandplat`, var och en `{ prisKvm, attBetala }` ("1 124" och "134 578", "1 080 till 2 500" och "135 659 till 314 026"), samt `takarea` ("143,7"), `bottenyta` ("108"), `paslag27` ("12,2"), `hamtat` och `kallor`. Den returnerar `{ fore, markering, efter }`, där `markering` är det enda talet med gul markering. Tre till fem meningar: vad tre material kostar för standardhuset, att priserna kommer från förmedlare och en firma, hämtade `hamtat`, och att lutningen gör takytan större än bottenytan (checklistans H2 0).

## 3. Beskeden (MB `besked`)

En rubrik är en mening med ett verb som säger vad läsaren ska göra. Raden under säger något annat.

| Nyckel | Bär | Vad den ska säga |
|---|---|---|
| `besked.belopp.rubrik(v)` | `v.attBetalaLag`, och `v.attBetalaHog` när `v.ettTal` är falskt | Vad läsaren ska räkna med att betala för sitt material |
| `besked.belopp.rad(v)` | `v.takarea` | Något annat än rubriken, till exempel att offerten ska räkna på takytan, inte bottenytan |
| `besked.tak.rubrik(v)` | `v.attBetalaLag` | Som `belopp` |
| `besked.tak.rad(v)` | `v.kapat` | Att gränsen för rotavdraget stoppar `kapat` kr i den höga änden, och vad två ägare gör |
| `besked.utanfor.rubrik(v)` | `v.takarea` | Vad läsaren ska göra i stället: begära offert |
| `besked.utanfor.rad(v)` | `v.min`, `v.max`, `v.sida` | Att källornas priser gäller tak från 100 till 200 m², så räknaren visar inget belopp för ett så litet eller så stort tak. Kort |

## 4. Formuläret (MB `form`, `takform`, `material`, `cc`, `fel`)

| Nyckel | Vad den ska säga |
|---|---|
| `form.legend-huset` | Legend för husets mått |
| `form.langd`, `form.bredd` | Etiketter: längd gavel till gavel, gavelns bredd |
| `form.utsprang`, `form.gavel` | Etiketter: takfotsutsprång, gavelutsprång. Bara fullt format |
| `form.huset-hjalp` | Mät utvändigt, utsprången vågrätt ut från väggen |
| `form.legend-taket` | Legend för taket |
| `takform.sadel`, `takform.pulpet` | Radioetiketterna |
| `form.matt-vinkel`, `form.matt-nock` | Radioknapparna: jag vet vinkeln, jag vet nockhöjden |
| `form.vinkel`, `form.nock` | Etiketter |
| `form.nock-hjalp` | Nockhöjden mäts från takfoten vid väggen |
| `form.legend-material` | Legend för det nya taket |
| `material.bandplat` | Bär orden bandtäckt eller falsad plåt |
| `material.takpanneplat`, `material.betong`, `material.tegel`, `material.papp` | Radioetiketterna |
| `form.legend-takstolar` | Legend för takstolarnas centrumavstånd. Bara fullt format |
| `cc.600`, `cc.900`, `cc.1200` | Radioetiketterna med enheten, till exempel "1 200 mm" |
| `form.legend-agare` | Legend för ägare och rotavdrag |
| `form.agare-1`, `form.agare-2` | "En" och "Två", eller motsvarande |
| `form.rot` | Etikett: rotavdrag ni redan använt i år |
| `form.rot-hjalp` | Summan för alla ägare, och att gränsen är per person |
| `fel.langd(min, max)` … `fel.gavel(min, max)` | Feltexter med gränserna (längd 3 till 40, bredd 3 till 20, utsprång 0 till 1,5 m) |
| `fel.vinkel(min, max)` | Gränserna: sadel 5 till 60, pulpet 3 till 30 grader |
| `fel.nock(min, max)` | Nockhöjdens gränser för den bredden, med en decimal |
| `fel.nock-tal` | Nockhöjden är inget tal |
| `fel.cc`, `fel.agare` | Välj ett av valen |
| `fel.rot(max)` | Den högsta summan för antalet ägare |

## 5. Resultatspalten (MB `spalt`)

Spalten har högst 800 tecken vid standard. I dag ligger den på 430 tecken med platshållare, så 370 finns kvar.

| Nyckel | Vad den ska säga |
|---|---|
| `spalt.etikett-betala` | Etiketten över det stora talet, två till fyra ord |
| `spalt.till(v)` | Raden efter det stora talet när det är ett spann, "till `attBetalaHog` kr" |
| `spalt.rad-takarea(v)` | Takarean och påslaget mot bottenytan |
| `spalt.rad-delning(v)` | Arbete och material |
| `spalt.rad-rot(v)` | Rotavdraget |
| `spalt.rad-kallor(v)` | Att priserna är förmedlares och en firmas priser före rot, hämtade `hamtat`. En mening |
| `spalt.rad-geometri(v)` | Den av vinkel och nock som läsaren inte angav, takfallslängden och takstolarna vid `cc`. Länken `lank-takstolar` står direkt efter |
| `spalt.lank-takstolar` | Länktext till `/tak/takstolar/` |
| `spalt.etikett-takarea`, `spalt.enhet-takarea` | Vid utanför: etiketten över takarean och enheten efter den |
| `spalt.pekrad` | Länktext till "Därför blev svaret så" |
| `spalt.lank-sa-raknar-jag` | Länktext till "Så räknar jag" |
| `spalt.lank-rotavdrag` | Länktext till rotavdragsräknaren. Den får den höga ändens arbete och material, eftersom det är där gränsen kan nås |
| `spalt.lank-takavvattning` | Länktext till takavvattningen med huset ifyllt |
| `spalt.dela-etikett` | Etiketten över den delbara adressen |

## 6. "Därför blev svaret så" (MB `darfor`, `regel`)

| Nyckel | Vad den ska säga |
|---|---|
| `darfor.tabell-ande`, `darfor.tabell-lag`, `darfor.tabell-hog` | Kolumnrubrikerna i tabellen över ändarna |
| `darfor.rad-pris` … `darfor.rad-betala` | Radrubrikerna med enheten: pris per m², kostnad före rot, arbete, material, rotavdrag, att betala |
| `darfor.ett-tal(v)` | Stycket som ersätter tabellen för betong, tegel och papp, där det bara finns en källa och ett tal |
| `darfor.tillagg(v)` | Att cirka `tillagg` kr för resor, etablering och projektering kan tillkomma hos en av källorna, och att det inte är inräknat |
| `darfor.kallrad` | Raden som pekar ner till "Vad siffrorna vilar på" |
| `darfor.utanfor(v)` | Vid utanför: varför inget belopp visas |
| `regel.takarea(v)` | Att ytan mäts längs lutningen, och att offerten ska räkna på takytan |
| `regel.vinkel(v)` | Egen räkning: hur vinkeln eller nockhöjden ger takfallets längd |
| `regel.pris(v)` | Källornas pris per m² för materialet, lägsta och högsta |
| `regel.en-kalla(v)` | Bara för betong, tegel och papp: att priset har en enda källa |
| `regel.andel-arbete(v)` | Att räknaren tar den lägsta andelen arbete, så att avdraget inte lovar för mycket |
| `regel.tillagg(v)` | Tillägget som kan tillkomma |
| `regel.rot-arbete(v)` | Bara arbetet ger rotavdrag |
| `regel.rot-grans(v)` | 30 procent och högst 50 000 kr per person och år |
| `regel.rot-slog-i(v)` | Bara när gränsen slår i: att den stoppade `v.kapat` kr |
| `regel.intervall(v)` | Att priserna bara skalas från 100 till 200 m² |
| `regel.takstolar(v)` | Hur antalet räknas, och att leverantören bestämmer |

## 7. "Gör inte det här" (MB `gorInte`)

| Nyckel | Vad den ska säga |
|---|---|
| `gorInte.bottenyta` | Jämför aldrig ett pris per kvadratmeter mot bottenytan |
| `gorInte.rot-pa-allt` | Ställningshyra, container och material ger inget avdrag, men montering av ställningen gör det. Får inte ha samma meningar som rotavdrags- och badrumsräknaren |
| `gorInte.bestall-takstolar` | Beställ inte efter räknarens antal, eftersom leverantören räknar. Står också vid utanför |

## 8. "Så räknar jag" och brödtextens tabell (MB `steg`, `paslag`, `antagande`, `antagandeVarde`)

| Nyckel | Vad den ska säga |
|---|---|
| `steg(v)` | Fem punkter: takarean, priset, andelen arbete, rotavdraget och takstolarna. `v` har `rotProcent`, `rotGrans`, `cc`, `min`, `max`, `tillagg` och `hamtat` |
| `paslag.rubrik-lutning`, `paslag.rubrik-procent`, `paslag.rubrik-nock` | Kolumnrubrikerna i påslagstabellen, med enheten: lutning (°), takytan större än bottenytan (%), nockhöjd per meter halv bredd (m) |
| `paslag.rad` | Raden under tabellen |
| `antagande.<nyckel>` | Kolumnen Vad, några ord var: `takarea`, `langs-lutningen`, `utsprang-lika`, `pris-bandplat`, `pris-takpanneplat`, `pris-betong`, `pris-tegel`, `pris-papp`, `en-kalla`, `andel`, `tillagg`, `stallning-container`, `sadeltak-pris`, `intervall`, `rot-procent`, `rot-grans`, `rut-skatt`, `cc`, `takstol-gavel`, `ingen-valm` |
| `antagandeVarde.<nyckel>` | Kolumnen Värde där värdet är ord: `takarea`, `langs-lutningen`, `utsprang-lika`, `en-kalla`, `andel(andel, alla)`, `tillagg(kr)`, `stallning-container`, `sadeltak-pris`, `intervall(min, max)`, `rot-grans(kr)`, `rut-skatt`, `cc(cc, ovriga)`, `takstol-gavel`, `ingen-valm`. Kort, som en tabellcell |

## 9. Brödtext, Läs vidare och Faq (SB)

800 till 1 100 ord utöver formuläret.

| Nyckel | Vad den ska säga |
|---|---|
| `H2_TAKAREA`, `brodtext-takarea` | Takarean ur husets mått. Bär "beräkna takarea" och "takvinkel". Formeln i klartext och takutsprånget. Påslagstabellen står under texten och byggs av sidan |
| `H2_PRISET`, `brodtext-priset` | Vad som ingår i priset: rivning, underlag, läkt, material, plåtdetaljer, ställning och container, med arbete och material för sig. Länk till `/tak/plattak/` |
| `H2_ROT`, `brodtext-rot` | Rotavdraget på takbytet: två ägare och vad som räknas som arbete. Länk till `/rakna/rotavdrag/` |
| `las-vidare-plattak`, `las-vidare-takavvattning`, `las-vidare-rotavdrag`, `las-vidare-fasadyta` | Länktexterna i Läs vidare |
| `faq-1` till `faq-3` (fråga och svar) | Specen föreslår valmtak (inte med i första versionen), om takstolarna måste bytas vid ett takbyte, och varför räknaren inte räknar snölast |

---

# Del 2. Takavvattningen

`v` (`BeskedVarden`, MA) har: `satt` ('hus' eller 'yta'), `takfall` (1 eller 2), `yta` (ett takfalls yta längs lutningen), `ytaPerRannfall`, `stupror` (antal per takfall), `ranna` och `stuprorDim` (i mm, utan enhet), `lindab` (Lindabs ränna eller null), `rannlangd`, `rannfall` (m), `fallMin` och `fallSjalvrens` (mm över rännfallet), `fallSjalvrensPerM`, `krokar`, `flode` (l/s), `totaltStupror`, `totaltKrokar`, `totaltRannmeter`, `vagrattYta`, `vagrattRanna`, `vagrattStupror`, `ssStupror`, `max` ("250"), `fallMinPerM` ("2,5"), `fallPlast` ("2") och `rannlangdPerStupror` ("10"). Dimensionerna är null vid utanför.

**Talen vid standard** (samma hus som takbytet): två takfall om 71,8 m², två stuprör per långsida, 35,9 m² per rännfall, **ränna 100 mm och stuprör 75 mm**, fall 16 mm (minst) och 45 mm (självrensande) över 6,4 m, 22 krokar per takfall. Hela huset: 4 stuprör, 44 krokar och 25,6 m ränna. Räknaren visar inga kronor.

## 10. Sidans ram (SA)

| Nyckel | Längd | Vad den ska säga |
|---|---|---|
| `VERKTYGSNAMN` | kort | Bär "takavvattning". Samma som registernamnet senare |
| `titel` | högst 44 tecken | Börjar med "Takavvattning" eller "Hängränna och stuprör, dimension", aldrig med "Hängrännor" (checklistan 3) |
| `BESKRIVNING` | 120 till 155 tecken | Checklistan 4 |
| `H1` | en fråga | Delar inte de tre första orden med titeln |
| `INGRESS` | två till fyra meningar | Vad läsaren fyller i och vad hon får tillbaka |

## 11. Kortsvaret (MA `kortsvar`)

Funktionen får `KortsvarVarden`: `y75`, `y125` och `y200`, var och en `{ ranna, stupror }` (100 och 75, 125 och 90, 150 och 110), `fallMin` ("2,5"), `sjalvrens` (7, 6 och 5 per dimension), `rannlangdPerStupror` ("10") och `ar` ("RA Hus 21", "Plannja 2026"). Den returnerar `{ fore, markering, efter }`. Checklistans H2 0.

## 12. Beskeden (MA `besked`)

| Nyckel | Bär | Vad den ska säga |
|---|---|---|
| `besked.ok.rubrik(v)` | `v.ranna`, `v.stuprorDim` | Vilken ränna och vilket stuprör läsaren ska köpa |
| `besked.ok.rad(v)` | | Något annat än rubriken, till exempel antalet stuprör eller att svaret gäller ett takfall |
| `besked.utanfor.rubrik(v)` | `v.ytaPerRannfall` | Att läsaren ska fråga tillverkaren |
| `besked.utanfor.rad(v)` | `v.max` | Att tabellerna slutar vid 250 m² per rännfall. Kort |

## 13. Formuläret (MA `form`, `satt`, `takform`, `fel`)

| Nyckel | Vad den ska säga |
|---|---|
| `form.legend-satt` | Legend: så mäter du |
| `satt.hus`, `satt.yta` | Radioknapparna: ur husets mått, jag vet takfallets yta |
| `form.satt-hjalp` | Att radioknappen avgör vilken grupp som räknas |
| `form.legend-huset` | Legend för huset |
| `form.langd`, `form.bredd`, `form.utsprang`, `form.gavel` | Etiketter, samma sak som i takbytet |
| `form.matt-vinkel`, `form.matt-nock`, `form.vinkel`, `form.nock` | Som i takbytet |
| `takform.sadel`, `takform.pulpet` | Radioetiketterna |
| `form.huset-hjalp` | Att räknaren tar ytan längs lutningen, som tillverkarna |
| `form.legend-takfallet` | Legend för takfallet. Står ensam i kompakt form |
| `form.yta`, `form.ranna` | Etiketter: takfallets yta, rännans längd |
| `form.takfallet-hjalp` | Hur man mäter takfallet |
| `fel.langd` … `fel.nock-tal` | Som i takbytet |
| `fel.yta(min, max)` | Gränserna 5 och 500 m² |
| `fel.ranna(min, max)` | Gränserna 1 och 40 m |

## 14. Resultatspalten (MA `spalt`)

Högst 700 tecken vid standard. I dag 372 tecken med platshållare, så 328 finns kvar.

| Nyckel | Vad den ska säga |
|---|---|
| `spalt.etikett-ranna` | Etiketten över det stora talet (rännan) |
| `spalt.och-stupror(v)` | Raden under det stora talet: stupröret i mm |
| `spalt.rad-lindab(v)` | Bara när Lindab vill ha en större ränna: Lindabs ränna, och att läsaren väljer efter fabrikatet hon köper |
| `spalt.rad-antal(v)` | Antalet stuprör per takfall |
| `spalt.rad-fall(v)` | Minsta och självrensande fall i mm över rännfallets längd |
| `spalt.rad-krokar(v)` | Antalet krokar per takfall |
| `spalt.rad-yta(v)` | Arean för ett takfall, längs lutningen |
| `spalt.etikett-yta` | Vid utanför: etiketten över ytan per rännfall |
| `spalt.pekrad`, `spalt.lank-sa-raknar-jag` | Länktexterna till avsnitten |
| `spalt.lank-takbyte` | Länktext till takbytet med huset ifyllt. Visas bara när läsaren räknar på huset |
| `spalt.lank-hangrannor` | Länktext till `/tak/hangrannor/` |
| `spalt.dela-etikett` | Etiketten över den delbara adressen |

## 15. "Därför blev svaret så" (MA `darfor`, `regel`)

| Nyckel | Vad den ska säga |
|---|---|
| `darfor.totalt(v)` | Hela huset: stuprör, krokar och rännmeter, och att sadeltaket har två takfall |
| `darfor.utanfor(v)` | Vid utanför |
| `darfor.kallrad` | Raden som pekar ner till "Vad siffrorna vilar på" |
| `regel.yta-lutning(v)` | Ytan längs lutningen, som tillverkarna mäter |
| `regel.ranna(v)` | Rännan efter RA Hus 21 och Plannja 2026 |
| `regel.lindab(v)` | Bara när Lindab vill ha större: Lindabs egen gräns |
| `regel.stupror(v)` | Stupröret efter RA Hus |
| `regel.antal(v)` | 10 m ränna per stuprör |
| `regel.fall(v)` | 2,5 mm/m minst, och självrensande fall per dimension |
| `regel.krokar(v)` | 600 mm c/c, 100 mm från kanten |
| `regel.plast(v)` | Plast utan kronor, med Plastmos fall `v.fallPlast` mm/m |
| `regel.over-250(v)` | Vid utanför: tabellerna slutar vid 250 m² |

## 16. "Gör inte det här" (MA `gorInte`)

| Nyckel | Vad den ska säga |
|---|---|
| `gorInte.utan-fall` | Under 2,5 mm/m gäller inte Lindabs garanti |
| `gorInte.langre-an-10` | Mer än 10 m ränna till ett stuprör. Står också vid utanför |
| `gorInte.mindre-ror` | Välj inte det smalare röret som SS-tabellen tillåter, eftersom smala rör fryser lättare |

## 17. Tabellen bakom, "Så räknar jag" och antagandena (MA `tabell`, `jamforelse`, `steg`, `antagande`, `antagandeVarde`)

| Nyckel | Vad den ska säga |
|---|---|
| `tabell.ranna-dim`, `tabell.ranna-ra`, `tabell.ranna-p10`, `tabell.ranna-lindab` | Kolumnrubrikerna i rännans tabell: dimension (mm), RA Hus 21 och Plannja 2026, Plannja 2010 märkt äldre, Lindab 2022. Värdet är högsta takfallsyta i m² |
| `tabell.lindab-under(n)`, `tabell.lindab-mellan(a, b)`, `tabell.lindab-over(n)` | Lindabs intervall i cellen: under 50, 50 till 100, över 100 |
| `tabell.ranna-kalla` | Källraden under rännans tabell |
| `tabell.stupror-dim`, `tabell.stupror-ra` | Kolumnrubrikerna i stuprörets tabell |
| `tabell.stupror-kalla` | Källraden under stuprörets tabell |
| `jamforelse.ss(v)` | SS 82 40 31 som jämförelse, med `v.ssStupror`. Inget årtal förrän det har kontrollerats hos SIS |
| `jamforelse.vagratt(v)` | Den vågräta ytan enligt SS-EN 12056-3, som BMI sammanfattar den, med `v.vagrattYta`, `v.vagrattRanna` och `v.vagrattStupror`. Bara när läsaren räknar på huset |
| `steg(v)` | Fyra punkter. `v` har `rannlangdPerStupror`, `fallMin`, `krokCc`, `krokKant` och `max` |
| `antagande.<nyckel>` | Kolumnen Vad: `langs-lutningen`, `ranna-tabell`, `stupror-tabell`, `rannfall-lika`, `tio-meter`, `lage-ej`, `steg-87-90`, `fall-min`, `fall-sjalvrens`, `krokar`, `regn`, `ingen-valm`, `inga-kronor` |
| `antagandeVarde.<nyckel>` | Kolumnen Värde där värdet är ord: `langs-lutningen`, `rannfall-lika`, `lage-ej`, `steg-87-90`, `krokar(cc, kant)`, `ingen-valm`, `inga-kronor` |

## 18. Brödtext, Läs vidare och Faq (SA)

500 till 800 ord utöver formuläret.

| Nyckel | Vad den ska säga |
|---|---|
| `H2_TABELLEN`, `brodtext-tabellen` | Checklistans H2 1, "Tabellen bakom". Säger vilken tabell som är nyast och att den äldre står som jämförelse. Tabellerna byggs av sidan. SS 82 40 31 står inte här |
| `las-vidare-hangrannor`, `las-vidare-takbyte` | Länktexterna i Läs vidare |
| `faq-1` till `faq-3` (fråga och svar) | Tre till fem frågor |

---

## 19. Senare, i publiceringsomgången

- Registrets `namn` och `rad` för båda räknarna.
- Skissernas etiketter ordagrant, `skissAlt` (under 125 tecken; takbytet med orden takbyte och takarea, takavvattningen med orden takavvattning och dimension) och `skissBildtext`, i MB och MA.
