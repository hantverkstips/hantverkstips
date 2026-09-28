# Texter till /rakna/badrum-kostnad/

UX och bygge-agenten, 2026-09-29. Detta är alla `TEXT SAKNAS` i räknaren. Hantverkaren skriver dem i filerna, och platshållaren byts mot texten på samma rad. Specen är `docs/briefer/spec-kalkyl-badrum-kostnad-2026-09-29.md`. Kraven på title, description, H1, H2, längd och länkar står i `docs/briefer/seo-checklista-2026-09-29/raknare.md`, avsnittet om badrum-kostnad.

Två filer:

- **M** = `src/lib/kalkyl/renovering.ts`, objektet `TEXT` (från rad 520 ungefär). En funktion får talen som parametrar eller som `BeskedVarden` (`v`). Använd dem i texten och skriv aldrig ett tal för hand.
- **S** = `src/pages/rakna/badrum-kostnad.astro`, konstanterna överst (rad 57 till 82) och brödtexten (rad 350 till 369).

`v` (`BeskedVarden`) har formaterade kronor och ytor: `attBetala`, `foreRot`, `rot`, `kapat`, `arbete`, `material`, `container`, `andelArbete`, `perKvm`, `yta`, `min`, `max`, `sida` ('under' eller 'over'), `agare` (1 eller 2) och `hamtat` ("28 september 2026").

**Talen vid standard** (5 kvm, enkel, en ägare): före rot 213 800 kr, arbete 118 800, material 90 000, container 5 000, rot 35 640, att betala 178 160, arbetets andel 56 procent, 30 120 kr per kvadratmeter till. Med mellannivå blir det 201 160 kr att betala. Vid 4 kvm blir det 154 016 kr (enkel) och 177 016 kr (mellan).

Gäller all text:

- Förmedlarna (Badrumsexperter, Byggstart, Hantverkskollen) **nämns inte vid namn** i publik text, utom i antagandetabellen, där sidan själv skriver deras namn ur källdata.
- Texten får inte antyda att läsaren lägger tätskiktet, kaklar, drar el eller gör VVS själv.
- Ord med två betydelser byts ut. Rotavdragets gräns heter "gräns", aldrig "tak".

---

## 1. Sidans ram (S)

| Nyckel | Längd | Vad den ska säga |
|---|---|---|
| `VERKTYGSNAMN` | kort, bär frasen | Namnet i brödsmulan och `WebApplication`. Samma som registernamnet senare (avsnitt 9) |
| `titel` | högst 44 tecken | Börjar med "Renovera badrum, kostnad" eller "Vad kostar det att renovera badrummet" (checklistan 3) |
| `BESKRIVNING` | 120 till 155 tecken | Lovar kostnaden per post, arbete och material för sig, och rotavdraget för två ägare (checklistan 4) |
| `H1` | en fråga | Läsarens fråga. Delar inte de tre första orden med titeln. "renovera badrum pris" här eller i beskedet (checklistan 2 och 5) |
| `INGRESS` | två till fyra meningar | Vad läsaren fyller i och vad hon får tillbaka |

## 2. Kortsvaret (M `kortsvar`)

Funktionen får `KortsvarVarden`: `enkel4`, `enkel5`, `mellan4` och `mellan5`, var och en `{ foreRot, rot, attBetala }`, samt `andelArbete5` och `hamtat`. Den returnerar `{ fore, markering, efter }`, där `markering` är det enda talet med gul markering. Tre till fem meningar: vad 4 till 5 kvm kostar i enkel och mellan, hur stor del som är arbete, vad rotavdraget blir, och att priserna kommer från förmedlare och en firma, hämtade `hamtat`.

## 3. Beskeden (M `besked`)

En rubrik är en mening med ett verb som säger vad läsaren ska göra. Raden under säger något annat än rubriken. Båda ska vara korta ("kort text i verktyget").

| Nyckel | Bär | Vad den ska säga |
|---|---|---|
| `besked.belopp.rubrik(v)` | `v.attBetala` | Vad läsaren ska räkna med att betala efter rotavdraget |
| `besked.belopp.rad(v)` | | Något annat än rubriken, till exempel arbetets andel (`v.andelArbete`) eller att offerten ska ha samma poster |
| `besked.tak.rubrik(v)` | `v.attBetala` | Som `belopp`, men gränsen för rotavdraget har slagit i |
| `besked.tak.rad(v)` | `v.kapat` | Att gränsen stoppar `kapat` kr, och vad två ägare eller betalning efter nyår gör |
| `besked.utanfor.rubrik(v)` | `v.yta`, `v.min`, `v.max` | Vad läsaren ska göra i stället: begära offert |
| `besked.utanfor.rad(v)` | `v.sida` | Att källorna bara räknar på badrum från `min` till `max` kvm, så räknaren visar inget belopp för ett så litet eller så stort rum |

## 4. Formuläret (M `form`, `niva`, `egen`, `fel`)

| Nyckel | Vad den ska säga |
|---|---|
| `form.legend-badrummet` | Legend för ytan |
| `form.yta` | Etikett: golvytan |
| `form.yta-hjalp` | Hur man mäter: golvet, med duschen |
| `form.legend-inredning` | Legend för nivån |
| `niva.enkel` | Etikett som säger vad som ingår: toalett, handfat, dusch och armatur i standardutförande. Inte bara "enkel" |
| `niva.mellan` | Som ovan, med badkar och möbler |
| `form.legend-egen` | Legend: det du gör själv |
| `egen.rivning` | Kryssruta: rivningen |
| `egen.montering` | Kryssruta: monteringen av inredningen |
| `form.egen-hjalp` | Att tätskikt, kakel, VVS och el inte går att välja, och varför, i en mening. Står också i kompakt form |
| `form.legend-agare` | Legend för ägare och rotavdrag |
| `form.agare-1`, `form.agare-2` | Radioetiketterna "En" och "Två", eller motsvarande |
| `form.rot` | Etikett: rotavdrag ni redan använt i år |
| `form.rot-hjalp` | Summan för alla ägare, och att gränsen är per person |
| `form.timpris` | Etikett: timpris |
| `form.timpris-hjalp` | Att timpriset går att ta från en offert, och vad räknaren annars använder |
| `fel.yta(min, max)` | Feltext med gränserna 1 och 30 kvm |
| `fel.agare` | Feltext: en eller två |
| `fel.rot(max)` | Feltext med den högsta summan för antalet ägare. Talet kommer som parameter |
| `fel.timpris(min, max)` | Feltext med gränserna 300 och 1 500 kr |

## 5. Resultatspalten (M `spalt`)

Spalten har högst 700 tecken totalt vid standard. I dag ligger den på 431 tecken med platshållare.

| Nyckel | Vad den ska säga |
|---|---|
| `spalt.etikett-betala` | Etiketten över det stora talet, två till fyra ord |
| `spalt.rad-summa(foreRot, rot)` | Summan före rot och rotavdraget, en rad |
| `spalt.rad-delning(arbete, material, container)` | Hur summan delar sig, en rad |
| `spalt.rad-kallor(hamtat)` | Att priserna är förmedlares och firmors snitt, att de hämtades `hamtat` och att byggstädningen tillkommer och huset kan avvika. En mening, högst två |
| `spalt.pekrad` | Länktext till "Därför blev svaret så" |
| `spalt.lank-sa-raknar-jag` | Länktext till "Så räknar jag" |
| `spalt.lank-rotavdrag` | Länktext till rotavdragsräknaren med värdena ifyllda, där rut och skatt också vägs |
| `spalt.dela-etikett` | Etiketten över den delbara adressen. Samma som på de andra räknarna, om de har en |

Standardvarningen och delatexten är gränssnitt och står redan ordagrant.

## 6. "Därför blev svaret så" (M `darfor`, `post`, `regel`)

| Nyckel | Vad den ska säga |
|---|---|
| `darfor.tabell-post`, `darfor.tabell-arbete`, `darfor.tabell-material` | Kolumnrubrikerna. Arbete och material bär enheten, "kr" |
| `post.rivning` … `post.container` | Postnamnen, sju stycken. `tatskikt-kakel` bär orden tätskikt och kakel |
| `postEgen` | Ett eller två ord i arbetscellen när läsaren gör posten själv |
| `postAntagande` | Ett ord efter containerns namn som säger att beloppet är vår uppskattning |
| `darfor.summa` | Summaradens namn |
| `darfor.kallrad` | Raden under tabellen som pekar ner till "Vad siffrorna vilar på" |
| `darfor.rot(v)` | Rotavdraget på arbetet, med `v.rot` |
| `darfor.betala(v)` | Vad som återstår att betala, med `v.attBetala` |
| `darfor.per-kvm(v)` | Vad en kvadratmeter till kostar, med `v.perKvm` (checklistan 11) |
| `darfor.utanfor(v)` | Vid utanför: varför inget belopp visas |
| `regel.poster(v)` | Vad posterna rymmer, och att tätskiktet ligger i förarbetena och plattsättningen |
| `regel.skalning(v)` | Att rivning, tätskikt och kakel och målning växer med golvytan, och att VVS, el och inredning inte gör det |
| `regel.niva(v)` | Att nivån bara ändrar inredningen |
| `regel.container(v)` | Containerns belopp är en uppskattning, och bortforsling ger inget rotavdrag |
| `regel.stad(v)` | Byggstädningen ingår inte, men den ger rotavdrag |
| `regel.rot-arbete(v)` | Bara arbetet ger rotavdrag, inte material eller container |
| `regel.rot-tak(v)` | 30 procent och högst 50 000 kr per person och år, och att två ägare dubblar gränsen |
| `regel.rot-slog-i(v)` | Bara vid tak: att gränsen stoppade `v.kapat` kr |
| `regel.egen-insats(v)` | Bara vid egen insats: att eget arbete inte ger rotavdrag, och varför tätskikt, kakel, VVS och el inte går att välja |

Källorna under varje regel är data och läggs till av sidan.

## 7. "Gör inte det här" (M `gorInte`)

| Nyckel | Visas | Vad den ska säga |
|---|---|---|
| `gorInte.tatskikt-sjalv` | alltid | Lägg inte tätskiktet själv. Ett eget arbete ger inget kvalitetsdokument (BBV § 1.5), och det står sämre vid en vattenskada. Pekar till `/badrum/tatskikt-badrum/` |
| `gorInte.rot-pa-allt` | alltid | Räkna inte rotavdraget på hela summan, eftersom material och container står utanför. Får inte ha samma meningar som rotavdragsräknaren |
| `gorInte.riva-sjalv` | vid egen rivning | Riv ytskikten, men lämna golvbrunn, rör och el åt firmorna (Säker Vatten 4.4.5, Elsäkerhetsverket) |

## 8. "Så räknar jag" (M `steg`, `antagande`, `antagandeVarde`)

| Nyckel | Vad den ska säga |
|---|---|
| `steg[0]` till `steg[3]` | Fyra punkter: ytan i förhållande till 5 kvm, timmar gånger timpris per post, summan, och rotavdraget på arbetet. Talen ur konstanterna i modulen |
| `antagande.<nyckel>` | Kolumnen Vad, 21 rader, några ord var: `post-rivning`, `post-tatskikt-kakel`, `post-vvs`, `post-el`, `post-malning`, `post-inredning`, `tatskikt-i-forarbeten`, `andel-arbete`, `timpris`, `timpris-moms`, `timpris-jamforelse`, `eget-timpris`, `skalning`, `intervall`, `container`, `stad`, `ingen-dyr-niva`, `rivning-rot`, `rot-procent`, `rot-grans`, `rut-skatt` |
| `antagandeVarde.<nyckel>` | Kolumnen Värde, där värdet är ord och inte bara tal: `tatskikt-i-forarbeten`, `andel-arbete`, `timpris-moms`, `eget-timpris(tim)`, `skalning(ref)`, `intervall(min, max)`, `container(kr)`, `stad`, `ingen-dyr-niva`, `rivning-rot`, `rot-grans(kr)`, `rut-skatt`. Kort, som en tabellcell |

## 9. Brödtext, Läs vidare och Faq (S)

700 till 1 000 ord totalt, utöver formuläret.

| Nyckel | Vad den ska säga |
|---|---|
| `H2_PRISET`, `brodtext-priset` | "Vad som gör priset": posterna, vilka som är arbete och vilka som är material. "badrumsrenovering kostnad" i texten |
| `H2_SJALV`, `brodtext-sjalv` | "Vad du kan göra själv och vad det sparar": rivning och montering av inredning, och gränsen enligt tabellen på tätskiktssidan. Bär "renovera badrum billigt". Länkar till `/badrum/tatskikt-badrum/` och `/badrum/fogar-badrum/`. Målat kakel nämns inte som alternativ |
| `H2_ROT`, `brodtext-rot` | "Rotavdraget för badrummet": två ägare, en gräns som redan är använd, att material inte ger avdrag. Länkar till `/rakna/rotavdrag/` |
| `las-vidare-tatskikt`, `las-vidare-rotavdrag`, `las-vidare-fogar` | Länktexterna i Läs vidare |
| `faq-1` till `faq-3` (fråga och svar) | Tre till fem frågor. Lägg till rader i listan om det blir fler. Frågor som tätskiktssidan besvarar ordagrant tas inte med |

Brödtexten skrivs direkt som `<p>` i sidans `<section>`. Länkarna får klassen från föräldern, så `<a href="…">` räcker.

## 10. Senare, i publiceringsomgången

- Registrets `namn` (bär "renovera badrum kostnad", samma som `VERKTYGSNAMN`) och `rad` (en mening med verb, som till en granne).
- Skissens etiketter ordagrant, `skissAlt` (under 125 tecken, med orden renovera badrum och kostnad) och `skissBildtext`.

---

## 11. Omskrivningar efter SEO-beslutet 2026-09-29 (4 till 8 kvm, spann, bortforsling)

Över 5 kvm är varje belopp ett spann, "A till B". `v.<fält>` är då en sträng med båda kanterna. Talen har hårt mellanslag inuti, så raden bryts bara vid "till". Det nya fältet `v.kapatMax` är den övre kanten av det som faller bort utanför rotgränsen.

| Nyckel | Fil | Vad som ska ändras |
|---|---|---|
| `besked.belopp.rad` | M | I dag står "Arbetet är 52 till 53 procent av summan". Ett spann på en procentsats läses illa. Skriv om så att meningen håller både med ett tal och med ett spann, eller säg det i ord ("drygt hälften"), när `v.andelArbete` innehåller "till" |
| `besked.tak.rad` | M | I dag blir det "0 till 3 000 kr av avdraget ryms inte". Använd `v.kapatMax`: upp till X kr ryms inte inom gränsen |
| `regel.rot-slog-i` | M | Samma sak: `v.kapatMax` i stället för `v.kapat` |
| `regel.container` | M | Säg att containern kostar också när du kör bort avfallet själv, och att beloppet därför står kvar när du kryssat i bortforslingen |
| `steg[2]` | M | Samma sak i en bisats: containern räknas med också vid egen bortforsling |
| `regel.intervall` | M | Säg tre saker: under 5 kvm är nedskalningen vårt antagande, över 5 kvm lägger jag till en förmedlares pris per extra kvadratmeter, och 8 kvm är vår egen gräns eftersom källan inte säger hur långt priset räcker. Förmedlaren nämns inte vid namn |
| `antagande.bs-tillagg` (ny) | M | Kolumnen Vad, några ord: pris per extra kvadratmeter över 5 kvm |
| `antagande.bs-fordelning` (ny) | M | Kolumnen Vad: hur tillägget delas på arbete och material |
| `antagandeVarde.bs-fordelning` (ny) | M | Kolumnen Värde, kort: som källans poster vid 5 kvm |
| `form.egen-hjalp` | M | Nämn att målningen inte heller går att välja: taket är våtzon och kräver ett godkänt system utfört av målare. Behåll en mening om det går |
| `egen.bortforsling` | M | Står i dag "Bortforslingen av avfallet". Hjälpraden eller etiketten bör säga att beloppet för containern står kvar, så att ingen tror att valet sparar pengar |

Kortsvaret och `steg[0]` stämmer redan med den nya räkningen.
