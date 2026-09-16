# Brief till skribenten, sorptionsavfuktare

Skriven 2026-09-16 av chefredaktören. Underlag: `underlag-seo-sorptionsavfuktare.md` och `underlag-fakta-sorptionsavfuktare.md`. Filen `src/content/kunskap/fukt/sorptionsavfuktare.mdx` finns som platshållare, du ersätter hela innehållet och frontmattern.

## 1. Sökfras, intention, sida

- Huvudfras "sorptionsavfuktare" (1 900 per månad, toppar september och november). Sekundär "sorptionsavfuktare eller kondensavfuktare" (10), ägs av sidan.
- Intention blandad med tyngd på kunskap. Läsaren har ett kallt utrymme (krypgrund, garage, ouppvärmd källare, vind) och vill veta om sorption krävs, vad den kostar i el och ljud, och vilken.
- URL `/fukt/sorptionsavfuktare/`. Sidtyp kunskap med köpråd. Nivå mellan. Målgrupp båda.
- Sidan äger inte "avfuktare krypgrund", "avfuktare källare" eller "avfuktare bäst i test".
- Två produktkort sist, en sorption och en kondens. Reklambandet visas därför.

## 2. Bättre än ettan

Ettan är Proffsmagasinets egen "Sorptionsavfuktare bäst i test 2026" (butik, cirka 850 ord), som jämför fyra maskiner och skriver själv att rangordningen bygger på Trustpilot. Tvåan är samma butiks guide om sorption mot kondens (cirka 1 200 ord, odaterad). Den ger gränserna: sorption ner till minus 20, kondens slutar vid minusgrader, kondens från cirka 30 dB mot sorption över 47, kondens 2 000 till 3 000 kronor mot flera gånger dyrare. Ingen tabell, ingen bild av rotorn och våtluftsslangen, inget om elkostnad, inget om att utrymmet måste tätas, och inget om vid vilken temperatur mellan 0 och 15 grader kondensavfuktaren tappar så mycket att sorption lönar sig.

Det läsaren har kvar: klarar kondens min källare på 8 grader, vart ska våtluften ut, vad kostar 300 W en vinter, är den för högljudd för garaget vid sovrummet.

Bindande lista:

1. Flödesskiss av sorption mot kondens, se avsnitt 6.
2. Tabell över kapacitet vid 30, 20, 10 och 5 grader för sorptions- och kondensavfuktare ur tillverkarnas datablad, kolumn "Tillverkaren uppger", källa per rad. SEO-strategen bad om 0 grader; ingen tillverkare anger det, så kolumnen är 5 grader och texten säger varför.
3. Elkostnad per månad för samma maskiner, räknad på märkeffekt, antagen drifttid och elpris med datum, antagandena under tabellen.
4. Ljud i dB(A) ur datablad med avstånd angivet där det finns, och "ej angivet" där det saknas.
5. Installationen ingen skriver om: våtluftsslangen ut genom vägg eller ventil, tätning, hygrostat, och när ett kallt utrymme ändå ska ha kondens.

## 3. Rubrikskiss

Title: Sorptionsavfuktare, när den behövs och när kondens räcker

H1: Sorptionsavfuktare, temperaturen avgör om du behöver en

Svaret i `kortSvar`. Nyckeltalet som markeras är 10 grader.

H2 i ordning:

1. Så torkar en sorptionsavfuktare luften
2. Temperaturen där kondensavfuktaren ger upp
3. Priset i el, och varför den drar mer
4. Ljudet, och var den inte kan stå
5. Våtluftsslangen, tätningen och hygrostaten
6. Krypgrund, garage, vind och källare, vad som gäller var
7. En sorption och en kondens vi rekommenderar

Korten under H2 7 kommer från frontmatterns `produkter`. Skriv texten om varför under rubriken; korten renderas av mallen sist. Mallen renderar i dag blocket bara för köpguider, teknisk ansvarig får låta kunskap med `produkter` göra samma sak (DESIGN 5.3 säger så). Skriv inte `<Produktkort>` i filen, det stoppar bygget.

## 4. Faktaunderlag

Märkning: [Tillverkare], [Tredje part], [Egen beräkning].

**Så fungerar det**

| Påstående | Källa | Märkning |
|---|---|---|
| En långsamt roterande rotor, uppbyggd av små kanaler som en bikaka, belagd med kiselgel. Rumsluften (processluften) dras genom rotorn, kiselgelen binder vattnet, torr luft blåses tillbaka. En mindre delström värms av ett elelement och drivs genom en sektor av rotorn; värmen driver ut vattnet som fuktig våtluft, som leds ut ur byggnaden via slang | ventilation.se, Drybox, Munters | Tredje part, Tillverkare |
| Kiselgel tar upp till 40 % av sin vikt i fukt; ett gram har 200 till 700 m² inre yta. Fungerar bättre i ouppvärmda miljöer 0 till 20 °C | Corroventa | Tillverkare |
| Kondens: luften dras över en kylslinga, kyls under daggpunkten, vattnet kondenserar och samlas i tank eller slang | Dantherm | Tredje part |
| Kondens bäst över 8 °C och 40 % RF, adsorption under det ner mot -18, kondens 3 till 4 gånger energieffektivare i varma fuktiga rum som badhus | Dantherm | Tredje part |
| Kondens behöver +15 °C för att fungera väl | Ljungby Fuktkontroll | Tredje part |
| Sorption arbetar -20 till +40 °C | Acetec, Fresh, Drybox via återförsäljare | Tillverkare |

Brytpunkten 10 till 15 grader i kortSvar är tillverkarnas och sanerarnas spann, inte vår mätning. Skriv det så.

**Kapacitet mot temperatur** (punkt 2), "Tillverkaren uppger" i kolumnrubriken:

| Maskin | Typ | 30 till 35 °C/80 % | 20 °C/60 till 70 % | 10 °C/60 % | 5 °C/60 % | Källa |
|---|---|---|---|---|---|---|
| Corroventa CTR STD-TT | sorption | ej angivet | 17 l | 13 l | 11 l | Corroventa [Tillverkare] |
| Wood's WP-200AP (utgången) | sorption | ej angivet | 22 l (20/70) | 9,6 l | ej angivet | Proffsmagasinet [Tillverkare] |
| Acetec EvoDry 6H 2.0 | sorption | ej angivet | 7,4 l (20/60), 9,7 max | ej angivet | ej angivet | Acetec [Tillverkare] |
| Fresh D-800 | sorption | 8 l (35/90) | 6 l (27/60) | ej angivet | ej angivet | Fresh folder [Tillverkare] |
| Wood's DSC50FM | kondens | 16,2 l (35/80) | 8,8 l (20/70) | ej angivet | ej angivet | Proffsmagasinet [Tillverkare] |
| Wood's SW59FM | kondens | 41 l | 25 l (20/70) | ej angivet | ej angivet | Proffsmagasinet [Tillverkare] |
| Meaco 10L ABC | kondens | 10 l | ej angivet | 1,09 l | 0,47 l | Elgiganten [Tredje part, butiksuppgift] |

Slutsatser du får dra [Egen beräkning ur tabellen]: sorption behåller 76 procent vid 10 grader och 65 procent vid 5 grader av värdet vid 20 (Corroventa). Kondens tappar 40 till 46 procent redan mellan 30 och 20 grader (Wood's egna par) och ligger vid 10 grader på en tiondel av märkvärdet (Meaco via Elgiganten).

**El per liter** [Egen beräkning ur tillverkarens effekt och kapacitet vid samma villkor, kontinuerlig drift]. Corroventas egna uppgifter (1,10, 1,44, 1,70) återges av LFS och stämmer:

| Maskin | Villkor | Effekt | kWh per liter |
|---|---|---|---|
| Corroventa CTR STD-TT | 20 °C/60 % | 775 W | 1,09 |
| Corroventa CTR STD-TT | 10 °C/60 % | 775 W | 1,43 |
| Corroventa CTR STD-TT | 5 °C/60 % | 775 W | 1,69 |
| Acetec EvoDry 6H 2.0 | 20 °C/60 % | 530 W | 1,72 |
| Fresh D-800 | 27 °C/60 % | 350 W | 1,40 |
| Wood's SW59FM (kondens) | 20 °C/70 % | 500 W | 0,48 |
| Wood's DSC50FM (kondens) | 20 °C/70 % | 231 W | 0,63 |
| Wood's MDK21 (kondens) | 30 °C/80 % | 240 W | 0,29 |

Slutsatsen: i varmt rum kostar kondens en tredjedel så mycket el per liter. I kallt rum finns ingen kondenssiffra att jämföra med, ingen tillverkare anger effekt vid 5 eller 10 grader. Elpriset bestämmer inte valet, temperaturen gör det.

**kWh per månad** (punkt 3) [Egen beräkning, märkeffekt × timmar × 30]. Dygnet runt är värsta fallet, 8 timmar per dygn vårt antagande för hygrostatstyrd drift, skriv det under tabellen:

| Maskin | Effekt | kWh/månad dygnet runt | kWh/månad 8 h | kr/månad |
|---|---|---|---|---|
| Drybox X4 | 850 W | 612 | 204 | [ELPRIS SAKNAS] |
| Acetec EvoDry 6H 2.0 | 530 W | 381,6 | 127,2 | [ELPRIS SAKNAS] |
| Fresh D-800 | 350 W | 252 | 84 | [ELPRIS SAKNAS] |
| Wood's SW59FM (kondens, 20/70) | 500 W | 360 | 120 | [ELPRIS SAKNAS] |
| Wood's DSC50FM (kondens, 20/70) | 231 W | 166,3 | 55,4 | [ELPRIS SAKNAS] |

Kronkolumnen: platshållaren ordagrant "[ELPRIS SAKNAS: kr per kWh inklusive nät och skatt, källa och datum från produktexperten]" i rubriken, tomma celler. Hitta inte på ett elpris. När `/rakna/elkostnad/` finns byts tabellen mot ett verktygskort.

**Ljud** (punkt 4):

| Maskin | Typ | dB | Avstånd | Källa |
|---|---|---|---|---|
| Drybox X4 | sorption | 52 | 3 m | Drybox [Tillverkare] |
| Acetec EvoDry 6H 2.0 | sorption | 48 dBA (Proffsmagasinet skriver 46) | ej angivet | Acetec [Tillverkare] |
| Fresh D-800 | sorption | 40 dB(A) | ej angivet | Fresh folder [Tillverkare] |
| Acetec EvoDry RCF 12 G1 | sorption | 58 | ej angivet | Proffsmagasinet [Tillverkare] |
| Wood's DSC50FM | kondens | 37 till 56 | ej angivet | Proffsmagasinet [Tillverkare] |
| Wood's MDK21 | kondens | högst 48 | ej angivet | Proffsmagasinet [Tillverkare] |
| eeese Adam 20 | kondens | 42 till 44 | ej angivet | Proffsmagasinet [Tillverkare] |

Under tabellen i H2 4, ordagrant: "[TEST SAKNAS, länk till sida 14: här kommer våra egna värden på 1 och 3 meter, mätta med ljudmätare i kallt utrymme]". Inga egna dB-siffror.

**Installation** (punkt 5)

| Påstående | Källa | Märkning |
|---|---|---|
| Täta ventiler och öppningar noggrant, plast på marken med minst 50 cm överlapp, städa bort organiskt material | Acetec, Optihus | Tillverkare, Tredje part |
| Upphöjt på lecablock eller isolerskiva, minst 50 cm fritt framför filtret | Acetec | Tillverkare |
| Våtluftsslang så kort som möjligt, med fall mot utloppsplåten eller isolerad, kondenshål 3 till 5 mm i lägsta punkt om det behövs, genomföringen tätad med silikon | Acetec | Tillverkare |
| Slang: Acetec 6H 50 mm, Corroventa 80 mm våtluft och 100 mm torrluft, Drybox X4 63 mm våtluft | Tillverkarna | Tillverkare |
| Manöverpanel i bostaden på modularkabel (Acetec), display på upp till 10 m kabel (Drybox) | Tillverkarna | Tillverkare |
| Målvärde 60 till 65 % RF med marginal till kritiska 75 utan att torka ut trä | Optihus | Tredje part |
| Drybox X4 levereras inställd på 65 %, kan sättas till 55 eller 65, med mögelindex tillåts 75 % vid 5 °C | ventilation.se | Tredje part |
| Jordat uttag, 230 V, 10 A trög säkring | Acetec | Tillverkare |
| Nordvästdelen av krypgrunden är fuktigast | Svag källa | Använd inte |
| Varning som ska stå på sidan i `<Varning>`: EvoDry 6H 2.0 är "inte avsedd för krypgrund eller kallvind" trots -20 °C som arbetsområde; till krypgrund hänvisar Acetec till andra modeller | Acetec docs | Tillverkare |
| Villkoren för Drybox X4:s 19 liter saknas. Kapacitet vid 5 och 10 °C saknas för Acetec, Fresh och Drybox. Effekt i kyla saknas för alla kondensmaskiner. Skriv att luckorna finns, skriv inte runt dem | Underlaget | Luckor |

## 5. Produkter

En per typ, sist, i frontmatterns `produkter`. Slugarna följer faktaunderlagets tabell (Acetec) och köpguidens (Wood's).

| Slug | Produkt | Etikett | För vem | Nackdelar som ska stå |
|---|---|---|---|---|
| acetec-evodry-6h-2 | Acetec EvoDry 6H 2.0 | Sorption till kall källare och garage | Ett kallt rum på upp till 100 m³ med en vägg mot det fria för slangen. Inte krypgrund | 1,7 kWh per liter, 48 dBA, våtluftsslangen måste ut, Acetec avråder själva från krypgrund och kallvind |
| woods-sw39fw | Wood's SW39FW I-EcoDefrost+ | Kondens när rummet håller 15 grader | En källare som håller 15 grader året om, där el och tystnad väger tyngre än kyla | Ingen ljudsiffra från tillverkaren, ingen kapacitet vid 20 °C angiven, slang ingår inte. Skriv inte att den är tyst |

SW39FW är samma maskin som köpguiden rekommenderar, så sidorna säger samma sak. Utan kort: Drybox X4 nämns i H2 6 som krypgrundsvalet (19 liter utan angivna villkor, 850 W, 52 dB på 3 m, display i huset) med platshållarlänk till krypgrundsguiden; Fresh D-800 nämns i H2 4 som den tystaste med tillverkarsiffra, 40 dB(A), med nackdelen 6 liter.

## 6. Illustrationer

Tre beställs, mappen `fukt/`.

1. Huvudbild via frontmatter `bild: ../../../assets/illustrationer/fukt/sorption-flode.svg`, bildtext "Sorption till vänster, kondens till höger. Den ena skickar ut vattnet som varm luft, den andra samlar det i en tank." Till designansvarig: två rektanglar sida vid sida i blyerts. Vänster: fuktig luft in med pil, rotorn som skrafferad cirkel, torr luft ut, regenereringsvärmaren som slinga, våtluftsslangen ut genom en väggkontur med handanteckning "ut genom väggen". Höger: fuktig luft in, kall slinga med droppar, tank under, torr luft ut. Under båda en termometer med gränsen i handskrift, "ner till -20" respektive "fungerar väl över 15". En sak i penna: pilen för våtluften ut genom väggen. Nyckeltalet "15 °C" gul markering.
2. Under H2 2: `<Illustration namn="fukt/kapacitet-kurva" alt="Kurvdiagram över liter per dygn mot temperatur 5 till 35 grader för Corroventa CTR (sorption) och Meaco 10L samt Wood's DSC50FM (kondens), ur tillverkarnas datablad." bildtext="Sorptionsmaskinen behåller två tredjedelar av kapaciteten vid 5 grader. Kondensmaskinerna faller mot noll. Tillverkarnas egna siffror." />`. Y-axel liter per dygn 0 till 20, X-axel 5 till 35 °C. Corroventa i penna (17, 13, 11 vid 20, 10, 5). Meaco i blyerts (10 vid 30, 1,09 vid 10, 0,47 vid 5) och DSC50FM i blyerts (16,2 vid 35, 8,8 vid 20). Bara punkter som finns, raka blyertslinjer emellan, extrapolera ingenting. Axeletiketter i Atkinson.
3. Under H2 5: `<Illustration namn="fukt/sorption-installation" alt="Ett kallt utrymme i genomskärning med sorptionsavfuktaren på block, våtluftsslangen med fall genom ytterväggen, hygrostaten på väggen och tätade ventiler markerade med kryss." bildtext="Slangen kort och med fall, ventilerna tätade, maskinen upp från marken. Annars torkar den utomhus." />`. Mark skrafferad, plast på marken som streckad linje med "50 cm överlapp", maskinen som rektangel på block med "50 cm fritt" framför filtret, slangen i penna ut genom väggen med "fall utåt", hygrostat som liten ruta med "60 till 65 %", ventiler med kryss i blyerts.

Inget verktygskort i fas 1. När `/rakna/elkostnad/` finns blir det sidans enda.

## 7. Intern länkning

- Första stycket under bilden (kortSvar tar inga länkar): [avfuktare till källaren](/fukt/avfuktare-kallare/).
- H2 1: [relativ luftfuktighet och daggpunkt](/fukt/luftfuktighet-inomhus/). Skrivs parallellt, adressen är beslutad.
- H2 4: platshållaren enligt avsnitt 4, dessutom "[LÄNK NÄR SIDAN FINNS: tester/acetec-evodry-6h-2]".
- H2 6: [avfuktare till källaren](/fukt/avfuktare-kallare/) vid källaren, och "[LÄNK NÄR SIDAN FINNS: fukt/avfuktare-krypgrund]" med ankaret "avfuktare i krypgrund".
- H2 7: [alla avfuktare vi testat](/luftavfuktare/). Finns.

## 8. Ton, vinkel, längd

Vinkeln är att sorptionsavfuktaren är en dyr, högljudd och elslukande maskin som ändå är det enda som fungerar under tio grader, och att det är temperaturen och inte elpriset som avgör. Börja i utrymmet, garaget i november med 85 procent på hygrometern, inte i tekniken. Tekniken kommer i H2 1 och ska förklaras så att läsaren förstår varför slangen måste ut. Ta ställning i H2 6 för varje utrymme.

Längd 1 400 till 1 900 ord. Efter läsningen ska läsaren veta om hennes utrymme kräver sorption, förstå att våtluften måste ut och utrymmet tätas, veta ungefär hur många kilowattimmar per månad det blir, och ha en maskin per typ att titta på.

Förbjudet: stilguidens lista. Dessutom: inga egna mätvärden, inga siffror för Drybox X4 vid någon temperatur (villkor saknas), inget påstående om att någon maskin är tyst utan dB-siffra med källa, ordet "krypgrund" ihop med Acetec 6H utan varningen, priser i löptext.

## 9. Frontmatter-skiss

```yaml
title: Sorptionsavfuktare, temperaturen avgör om du behöver en
description: Sorptionsavfuktare torkar luft även vid minusgrader, men drar mer el och låter mer. Tabell över kapacitet vid 5, 10 och 20 grader, elkostnad och ljud.
publicerad: 2026-09-DD
pelare: fukt
typ: kunskap
niva: mellan
kategori: luftavfuktare
kortSvar: >-
  Under 10 grader klarar bara en sorptionsavfuktare jobbet. Mellan 10 och 15 grader beror
  det på hur länge utrymmet ligger där, tabellen visar hur mycket kondensmaskinen tappar.
  Över 15 grader är en kondensavfuktare billigare, tystare och drar en tredjedel så mycket
  el per liter.
bild: ../../../assets/illustrationer/fukt/sorption-flode.svg
bildtext: Sorption till vänster, kondens till höger. Den ena skickar ut vattnet som varm luft, den andra samlar det i en tank.
produkter:
  - slug: acetec-evodry-6h-2
    etikett: Sorption till kall källare och garage
    forVem: Ett kallt rum på upp till 100 m³ med en vägg mot det fria för slangen. Inte krypgrund.
  - slug: woods-sw39fw
    etikett: Kondens när rummet håller 15 grader
    forVem: En källare som håller 15 grader året om, där el och tystnad väger tyngre än kyla.
forfattare: redaktionen
kallor:
  - titel: Corroventa, CTR STD-TT
    url: https://www.corroventa.se/produkter/krypgrundsavfuktare/krypgrundsavfuktare-ctr-std-tt/
  - titel: Corroventa, olika typer av avfuktare
    url: https://www.corroventa.se/artikel/olika-typer-av-avfuktare/
  - titel: Acetec, dokumentation EvoDry 6H 2.0
    url: https://docs.acetec.se/dokument/ref-20100/
  - titel: Acetec, installera avfuktare
    url: https://www.acetec.se/page/installera-avfuktare
  - titel: Fresh, folder avfuktare
    url: https://fresh.se/Image/GetDocument/fi/218/folder%20fresh%20avfuktare.pdf
  - titel: Drybox, X4
    url: https://drybox.se/produkter/drybox-x4/
  - titel: Dantherm, adsorption eller kondensation
    url: https://www.danthermgroup.com/se/artiklar/adsorption-eller-kondensation-vaelj-raett-avfuktare-foer-dina-behov
  - titel: Ljungby Fuktkontroll, välj rätt avfuktare
    url: https://www.lfs-web.se/avfuktare-valj-ratt-for-bast-ekonomi-och-sakrast-avfuktning/
  - titel: Optihus, avfuktare i krypgrund
    url: https://www.optihus.se/avfuktare-krypgrund
  - titel: ventilation.se, hur fungerar en sorptionsavfuktare
    url: https://ventilation.se/sv/post/hur-fungerar-en-sorptionsavfuktare-teknisk-genomgang
  - titel: Proffsmagasinet, Wood's DSC50FM
    url: https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-dsc50fm-avfuktare-vs57625
  - titel: Proffsmagasinet, Wood's SW59FM
    url: https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw59fm-luftavfuktare-vs17696
  - titel: Elgiganten, Meaco 10L ABC (butiksuppgift)
    url: https://www.elgiganten.se/product/hem-hushall-tradgard/inomhusklimat-uppvarmning/luftkvalitet/luftavfuktare/meaco-10l-abc-vit-avfuktare-10-liter-per-dag-hygrostat-kompressor/295839
utkast: false
```
