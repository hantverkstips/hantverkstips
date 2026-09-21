# Underlag: måla om huset, kostnad

Hämtat 2026-09-21 av hantverkaren inför projektguiden `src/content/guider/fasad/mala-om-huset.mdx` (`/fasad/mala-om-huset/`). Sidan är hemmet för verktyget `/rakna/mala-ute/`, och talen om väder är desamma som i `src/lib/kalkyl/mala-ute.ts` och `docs/briefer/underlag-kalkyl-mala-ute-2026-09-17.md`. Varje tal nedan bär sin källa eller är märkt **egen räkning**.

Huvudfras "måla om huset kostnad", 590 sökningar i månaden, vinnbarhet 4 enligt `docs/SOKORDSANALYS.md`. Sidofraser: måla fasad kostnad (170), måla fasad temperatur (140), måla ute temperatur (140), måla utomhus luftfuktighet (40), måla fasad själv (30).

## 1. De fem som rankar på huvudfrasen

| Plats | Sida | Typ | Vad den ger | Vad den saknar |
|---|---|---|---|---|
| 1 | sambla.se, Måla om huset | Låneförmedlare | Cirka 300 kr per kvm före rot med akrylat, 100 kvm fasad ≈ 30 000 kr; målerifirma cirka 500 kr i timmen | Ingen metod för fasadytan, inga nivåer på förarbetet, inget om väder, inga källor. Sidan svarade 429 på tre hämtningar 2026-09-21, talen kommer ur sökmotorns utdrag |
| 2 | colorama.se, Vad kostar det egentligen att måla om huset | Färgbutik | Åtgång akrylat 6 till 8 kvm per liter och strykning, slamfärg 3 kvm, linoljefärg upp till 15 kvm; livslängd per färgtyp; "mät fasaden och dra av fönster och dörrar" | Inte ett enda pris i kronor. Ingen metod för ytan, inga nivåer, inget rot, inget väder, inga källor, inget datum. Hänvisar till butikens fasadrådgivare |
| 3 | hemfixarna.se, Vad kostar det att måla om ett hus (2025-04-29) | Entreprenör | Normalvilla 35 000 till 70 000 kr, 200 till 300 kr per kvm före rot; själv 10 000 till 30 000 kr (färg 5 000 till 15 000, ställning 3 000 till 10 000, verktyg 2 000 till 5 000); akrylat 130 till 240 kr per liter, 8 kvm per liter; rot 30 procent; 1 till 2 veckor | Ingen metod för ytan, inga nivåer på förarbetet, inget om väder, inga källor |
| 4 | måleriexperter.se, Vad kostar det att måla om huset | Lead-sida | 230 till 300 kr per kvm exklusive rot och material; 100 kvm villa 20 000 till 23 000 kr på 4 dagar, 130 kvm 27 000 till 30 000 på 5 dagar, 160 kvm 35 000 till 37 000 på 6 dagar; akrylat 130 till 240 kr per liter och 5 till 8 kvm, slamfärg 40 till 50 kr per liter och 4 till 6 kvm; rot 30 procent | Kvadratmetertalen står färdiga utan att säga varifrån de kommer. Inga nivåer, inget väder, inga källor, inget datum |
| 5 | helphero.se, Måla om hus, kostnad och tid | Lead-sida | 350 till 500 kr i timmen, 2 till 4 kvm i timmen, 98 kvm fasad ≈ 53 000 kr på 60 timmar, 1 liter till 6 till 8 kvm | Ingen metod för ytan, inga nivåer, inget väder, inga källor, inget datum |

Ingen av de fem visar hur läsaren kommer från sitt eget hus till ett kvadratmetertal, och ingen skiljer på förarbetets nivåer med pris per nivå. Det stämmer med sökordsanalysens läsning.

## 2. Vad min sida har som de saknar

1. **Fasadytan från husets egna mått.** Omkretsen gånger höjden till takfoten, minus fönster och dörrar, plus gavelspetsarna. Ett räkneexempel som landar på 100 kvm, och `<Verktygskort kalkylator="kvadratmeter" />` som gör avdragen åt läsaren.
2. **Förarbetets tre nivåer med pris per nivå**, och att steget från lägsta till högsta är ungefär tre gånger. Nivå tre, borttagning till rent trä, står inte i någon publicerad prislista; den räknas här ur tillverkarens uppgift om vad en infravärmare hinner per timme och medianens timpris, och sidan säger att räkningen är min.
3. **Vädret med tillverkarnas tal**, 7 grader på yta och luft hela dygnet, 80 procent luftfuktighet som stopp, klibbfri två timmar före daggen, 16 procent fuktkvot i virket, och verktyget `/rakna/mala-ute/` inbäddat där resonemanget landar.
4. **Rotavdraget räknat rätt**: 30 procent av arbetskostnaden, 50 000 kr per person, "måla fasader" står i Skatteverkets lista för småhus men inte för bostadsrätt, ställningens hyra och transport ger inget avdrag, monteringen gör det. Länk till `/rakna/rotavdrag/`.
5. **Materialkostnaden räknad från databladen**, åtgång per strykning gånger två strykningar gånger literpriset, med Falu Rödfärg som jämförelse.
6. **Källa på varje tal**, med datum på prislistorna.

## 3. Vad målaren tar, per kvadratmeter arbete

Alla tal är arbetskostnad inklusive moms, exklusive färg och material, före rotavdrag, om inte annat sägs.

| Källa | Datum | Välskött fasad | Eftersatt fasad | Övrigt |
|---|---|---|---|---|
| Hantverkskollen, prisindex ur 147 måleriföretag | uppdaterad 2026-07-17 | 200 till 260 kr per kvm | 300 till 420 kr per kvm | Linoljefärg 320 till 480; högtryckstvätt 18 till 35; grundning 25 till 50; ställning hyra och montering 45 till 80; median timpris 600 kr, kvartilerna 500 och 667,50 kr |
| Bygghantverkarna (Jakub och Far AB), Stockholm | 2026-04-07 | 230 till 300 kr per kvm | 300 till 450 kr per kvm | Med ställning 400 till 600, mycket detaljer 450 till 700; villa 150 kvm 34 500 till 45 000 kr enkelt fall, 45 000 till 90 000 kr med mer arbete |
| Måleriexperter | odaterad | 230 till 300 kr per kvm | | Förarbete 32 till 48 timmar, målning 24 till 40 timmar på en normalvilla, 4 till 8 dagar för två målare |
| NLL Måleri AB, nordvästra Skåne | uppdaterad 2026-08-13 | 625 kr per kvm | 875 kr per kvm | Inklusive skrapning, grundolja och två strykningar; material 190 till 250 kr per kvm tillkommer |
| Antakus Måleri AB, Stockholm | 2025-08-28 | 90 till 150 kr per kvm | | Inklusive tvätt, skrapning, grundning och två strykningar |

Adresser: hantverkskollen.se/artiklar/malare/malare-mala-fasad-kostnad-2026-komplett-prisguide-per-kvadratmeter, sonochfar.se/blog/mala-fasad-pris-kvm/, xn--mleriexperter-pfb.se/vanliga-fragor/hur-lang-tid-tar-det-att-mala-ett-hus, nllmaleri.se/pris/trafasadmalning/, antakusmaleri.se/fasadmalning-pris-per-kvm.

Hantverkskollen har två sidor med något olika tal för samma sak: sidan "måla hus pris per kvm" anger 200 till 280 och 320 till 480 kr per kvm, tvätt 20 till 40, grundning 28 till 55, ställning 50 till 90. Artikeln använder talen från "måla fasad kostnad", som är den utförligare sidan, och skriver spannet som 200 till 420 kr per kvm.

Måleriföretagen i Sverige publicerar inget riktpris per kvadratmeter som gick att hitta. Byggahus svarade 403 på alla hämtningar, så inga forumofferter finns med.

## 4. Förarbetets tre nivåer

**Nivå 1, tvätt och lös färg.** Beckers datablad för Perfekt Fasad: tvätta med fasadtvätt, skrapa bort lös färg, slipa kanter. Nordsjö Tinova Exterior: "Tidigare målade ytor tvättas och eftersköljs. Löst sittande färg och gråträ skrapas/slipas bort." Pris: Hantverkskollens välskötta fasad, 200 till 260 kr per kvm.

**Nivå 2, skrapning, lagning och grundning.** Beckers: borsta eller skrapa till rent trä där det behövs, grundolja på ändträ och skarvar, grundfärg på hela fasaden vid nymålning eller dåligt skick. Alcro Måla träfasad: tvätta, borsta, skrapa vid behov, slipa hårda och blanka ytor, sedan grundolja, grundfärg och täckfärg. Pris: Hantverkskollens eftersatta fasad, 300 till 420 kr per kvm, som enligt sidan "målning fasad kostnad" omfattar "skrapning, spackling, möjlig rötlagning".

**Nivå 3, borttagning till rent trä.** Ingen målerifirma publicerar ett pris per kvadratmeter för det. **Egen räkning** ur två källor:

- Svenska byggnadsvårdsföreningen, frågespalten "Tidsåtgång för fasadskrapning med färgborttagningslampa": "Enligt tillverkaren klarar man mellan 1 till 3 kvm per timme" med en Speedheater 1100. Den större Twin Plus hyrs för 380 kr per dag plus moms. Jula och Leif Arvidsson anger 1,5 till 2 kvm per timme för samma verktyg.
- Hantverkskollens median timpris 600 kr inklusive moms.

Två kvadratmeter i timmen på 600 kr ger 300 kr per kvm bara för att få bort färgen. Ovanpå det kommer nivå 1 för själva målningen och grundfärg på hela ytan, 25 till 50 kr per kvm. Summan hamnar kring 550 till 650 kr per kvm, alltså ungefär tre gånger nivå 1. NLL Måleris 875 kr per kvm för "grånat virke som måste skrapas rent" pekar åt samma håll. Artikeln skriver nivå 3 som "kring 600 kr per kvadratmeter" och säger att räkningen är min.

Blästring: 100 till 400 kr per kvm enligt blästringsfirman Beve, men de och andra avråder från blästring på trä. Används inte i artikeln utom som varning.

## 5. Typhuset, egen räkning

Ett enplanshus 10 × 8 meter, 2,8 meter från sockel till takfot, sadeltak med 27 graders lutning, tio fönster på 1,2 × 1,2 meter och två dörrar på 1,0 × 2,1 meter.

- Väggarna: omkrets 36 m × 2,8 m = 100,8 kvm.
- Gavelspetsarna: höjd 4 m × tan 27° = 2,04 m; yta 8 × 2,04 / 2 = 8,2 kvm per gavel, 16,3 kvm för två.
- Fönster och dörrar: 10 × 1,44 + 2 × 2,1 = 14,4 + 4,2 = 18,6 kvm.
- Fasadyta: 100,8 + 16,3 − 18,6 = 98,5 kvm, avrundat 100 kvm.

Kostnad för arbetet på 100 kvm, före rot, ur avsnitt 3 och 4:

| Nivå | Per kvm | 100 kvm | Efter rot 30 procent |
|---|---|---|---|
| 1, tvätt och lös färg | 200 till 260 kr | 20 000 till 26 000 kr | 14 000 till 18 200 kr |
| 2, skrapning och grundning | 300 till 420 kr | 30 000 till 42 000 kr | 21 000 till 29 400 kr |
| 3, rent trä | kring 600 kr | kring 60 000 kr | kring 42 000 kr |

Rotavdraget räknas på arbetskostnaden, inte på färg, ställningshyra eller transport.

## 6. Färgen, åtgång och pris

| Färg | Åtgång per liter och strykning | Strykningar | Pris | Källa |
|---|---|---|---|---|
| Beckers Perfekt Fasad, akrylat | 6 till 8 kvm | 2 | 10 l 3 319 kr ordinarie hos K-Bygg (2 821,15 kr nedsatt) | beckers.se/produkter/perfekt-fasad, k-bygg.se |
| Alcro Bestå Täckfärg, akrylat | 6 till 8 kvm | 2 | 10 l 2 299 kr hos Lovely Home | lovelyhome.se |
| Nordsjö Tinova Exterior, akrylat | nymålning 4 till 6 kvm, ommålning 6 till 8 kvm | 2 | | nordsjo.se |
| Beckers Perfekt Oljefärg, oljealkyd | 6 till 8 kvm, sågat 6 till 7, hyvlat eller målat 7 till 8 | 2 | | beckers.se/produkter/perfekt-oljefarg-0 |
| Beckers Primex Trägrund Plus, grundfärg | sågat 6 till 7 kvm, hyvlat 7 till 8 kvm | 1 | | beckers.se/produkter/primex-tragrund-plus |
| Beckers Primex Grundolja Trä Plus | 6 till 12 kvm | 1 på ändträ och skarvar | | beckers.se/produkter/primex-grundolja-tra-plus |

Torktider för grundprodukterna, ur samma datablad, vid 23 °C och 50 procent: Primex Trägrund Plus "Klibbfri efter 4(h). Övermålningsbar efter 8(h)", lägst +7 °C yttemperatur. Primex Grundolja Trä Plus "Klibbfri efter 0(h). Övermålningsbar efter 0.50(h)", lägst +5 °C yttemperatur och relativ fuktighet under 80 procent. Tillagt 2026-09-21 efter returen.

Butikspriserna (K-Bygg 3 319 kr och 699 kr, Lovely Home 2 299 kr) är hämtade 2026-09-21, och sidan säger "september 2026".
| Falu Rödfärg Original, slamfärg | 3 till 4 kvm | 1 | 10 l 699 kr rekommenderat, K-Bygg 699 kr | falurodfarg.com/vanliga-fragor/malningen/hur-mycket-farg-gar-det-at/, k-bygg.se |

Alcro Bestås åtgång kommer från återförsäljaren Lovely Home, eftersom alcrostudio.se visar talen bara i ett faktablad som inte gick att läsa. Jotuns produktsidor omdirigerar till en inloggning och gick inte att läsa alls.

**Egen räkning** för 100 kvm täckfärg: 100 × 2 / 7 = 29 liter, alltså tre burkar om 10 liter, 6 900 till 10 000 kr beroende på märke och pris. Slamfärg på samma yta: 100 / 3,5 = 29 liter, tre burkar, cirka 2 100 kr.

## 7. Ställning och lift

| Källa | Datum | Uppgift |
|---|---|---|
| Hemställning, prislista | odaterad | Villa 1 till 1,5 plan, 9 × 4 m plus gavel, 6 m till nock: cirka 1 400 kr per vecka inklusive moms, 7 500 kr med transport och montering för en vecka. Villa 1,5 till 2 plan, 9 × 6 m plus gavel, 8 m till nock: cirka 2 200 kr per vecka, 9 500 kr med transport och montering. Rot på montering och demontering, inte på hyra och transport |
| Hantverkskollen | 2026-07-17 | Ställning, hyra och montering, 45 till 80 kr per kvm fasad, inte rotgrundande |
| Stureby Maskiner, Stockholm | 2025-01-15 | Släpvagnslift OMME Mini 12 m, arbetshöjd 11,9 m, "börjar från 1 245 kr, men den slutgiltiga kostnaden beror på hur länge du behöver den", ingen tidsenhet angiven. Talet används därför inte på sidan (retur punkt 6). Transport inom Stockholm från 440 kr per enkel resa |
| Hantverkskollen, måla huset själv | 2026-04-11, uppdaterad 2026-07-17 | Ställning en vecka 5 000 till 12 000 kr; högtryckstvätt hyra 400 till 800 kr per dag; skrapor och slipverktyg 300 till 600 kr; penslar, roller, tejp och skydd 400 till 900 kr; enplanshus 100 kvm i gott skick 4 till 6 helger plus en veckas semester; tvåplanshus 150 kvm 6 till 8 helger och två veckors semester |

**Egen räkning, gör det själv på enplanshuset i gott skick** (tillagd 2026-09-21 efter returen, punkt 7). Tiden enligt Hantverkskollen är 4 till 6 helger plus en veckas semester, alltså fem till sju veckor med ställningen stående. Ställning: 7 500 kr första veckan med transport och montering, plus 1 400 kr per vecka till, 4 till 6 veckor, ger 13 100 till 15 900 kr, avrundat 13 000 till 16 000. Färg 7 000 till 10 000 kr (avsnitt 6). Verktyg 1 100 till 2 300 kr (högtryckstvätt en dag, skrapor, penslar och tejp). Summa 21 200 till 28 300 kr, på sidan 21 000 till 28 000. Med målare: samma färg, ställning en vecka 7 500 kr, arbete efter rot 14 000 till 18 200 kr, summa 28 500 till 35 700 kr, på sidan 29 000 till 36 000. Speedheater Twin Plus 380 kr per dag plus moms blir 475 kr med moms.

Adresser: hemstallning.se/prislista/, sturebymaskiner.se/vad-kostar-det-att-hyra-en-skylift-har-ar-allt-du-behover-veta/, hantverkskollen.se/artiklar/malare/malare-mala-huset-sjalv-kostnad-komplett-guide-for-gor-det.

## 8. Vädret, samma tal som verktyget

| Uppgift | Tal | Källa |
|---|---|---|
| Lägsta temperatur, akrylat och oljealkyd | 7 °C på yta och luft, hela dygnet tills färgen torkat | Beckers, Rätt väder för målning; Beckers Perfekt Fasad; Alcro Måla träfasad; Svenskt Trä |
| Lägsta temperatur, slamfärg | 5 °C lägsta dygnstemperatur | Falu Rödfärg |
| Nordsjös gräns | Inte under 5 °C, inte över 80 procent relativ luftfuktighet, inte i direkt sol | Nordsjö Tinova Exterior |
| Dagg | Inte inom 2 timmar efter avslutad målning (Beckers), 1 till 2 timmar (Alcro) | Beckers Perfekt Fasad, Alcro Måla träfasad |
| Regn | Inte inom det närmaste dygnet (Beckers råd); databladen 1 timme (Perfekt Fasad), 8 timmar (Alcro) | Beckers, Alcro |
| Torktid akrylat | Klibbfri 1 h, övermålningsbar 4 h vid 23 °C och 50 procent | Beckers Perfekt Fasad |
| Torktid oljealkyd | Klibbfri 2 h, övermålningsbar 6 h vid 23 °C och 50 procent | Beckers Perfekt Oljefärg |
| Torktid i kyla | Dubbleras vid cirka 15 grader | Beckers forum, Måla i kyla |
| Fuktkvot i virket | Högst 16 procent | TräGuiden, Svenskt Trä, Beckers, Alcro |
| Årstid | "Maj, juni, juli och augusti är med andra ord årets målarmånader"; september och oktober "om det är torrt och varmt ute"; idealet 20 till 23 grader på dagen, ljumma kvällar | Beckers, Rätt väder för målning |
| Sol | Måla inte på solheta ytor, följ skuggan runt huset | Beckers, Alcro forum |

Verktyget `/rakna/mala-ute/` räknar med exakt de här talen: 7 °C, 80 procent, 2 timmar, fördubbling per 8 grader under 23 (Beckers punkt, kurvan är verktygets antagande) och gånger 1,5 över 70 procent (antagande). Artikeln nämner inga andra tal.

## 9. Rotavdraget

| Uppgift | Källa |
|---|---|
| "Företaget får dra av högst 30 procent av arbetskostnaden" | Skatteverket, Så fungerar rotavdraget |
| Högst 50 000 kr rotavdrag per person och år, högst 75 000 kr rot och rut tillsammans | Skatteverket, samma sida |
| "måla fasader" står under "Avdrag ges för" för småhus; för bostadsrätt står "måla eller olja fasader, balkonger, altaner eller takterrasser" under "Inget avdrag ges för" | Skatteverket, Ger arbetet rätt till rotavdrag (företagssidan) |
| Bara arbetskostnaden ger avdrag; material och maskinell utrustning gör det inte | Skatteverket, Så fungerar rotavdraget; se även `docs/briefer/underlag-kalkyl-rotavdrag-2026-09-20.md` |

## 10. Det som inte gick att bekräfta och som artikeln därför inte påstår

- **Bygglov för att byta kulör.** Vara kommun skriver att "Du behöver inte bygglov för att måla om, byta fasadbeklädnad eller taktäckningsmaterial på en- och tvåbostadshus" med hänvisning till nya regler från 2025-12-01, och Boverkets sökträffar säger detsamma med undantag för särskilt värdefulla områden. Boverkets egna sidor gick inte att läsa maskinellt (bara navigeringen kom med). Artikeln säger ingenting om bygglov. Strategen eller Christian bekräftar på boverket.se innan det läggs till.
- **Sambla, ettan.** Sidan svarade 429 tre gånger. Talen i avsnitt 1 kommer ur sökmotorns utdrag och ska kontrolleras i webbläsare.
- **Jotun.** Produktsidorna omdirigerar till en Microsoft-inloggning. Inga Jotun-tal i artikeln.
- **Alcro Bestå Täckfärg.** Åtgång och torktid från Lovely Home, inte från Alcros faktablad.
- **Livslängd per färgtyp.** Colorama anger 12 till 16 år för akrylat och 5 till 8 för slamfärg, men utan källa. Används inte.
- **Nivå 3 i kronor.** Ingen firma publicerar priset. Artikeln räknar det själv ur Speedheaters kapacitet och medianens timpris och säger det.
