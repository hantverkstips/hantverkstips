# Brief till skribenten, gipsskruv

Skriven 2026-09-16 av chefredaktören. Underlag: `underlag-seo-gipsskruv.md` och `underlag-fakta-gipsskruv.md`. Platshållaren ligger i dag i `src/content/kunskap/inomhus/gipsskruv.mdx`. Den ska bort och sidan skrivas som `src/content/guider/inomhus/gipsskruv.mdx` med `typ: projektguide`, eftersom listan "Det här behöver du" bara renderas för projektguider och kunskap-samlingen stoppar bygget vid en köpknapp. Adressen blir densamma. Teknisk ansvarig tar bort den gamla filen så att rutten inte kolliderar.

## 1. Sökfras, intention, sida

- Huvudfras "gipsskruv" (3 600 per månad, jämn året runt). Inga sekundära fraser.
- Intention blandad; vi tar den informativa delen. Snickaren eller den som gipsar själv vill veta vilken skruv som gäller för sin regel och sitt antal skivor. Butikerna äger köpdelen.
- URL `/inomhus/gipsskruv/`. Sidtyp guide (projektguide i mallen). Nivå enkel. Målgrupp proffs, skrivet så att hemmafixaren hänger med.
- Sidan äger inte "skruva i gipsvägg" (upphängning) eller "gipsplugg". Inget avsnitt om upphängning, bara en länk.
- Första sidan i pelaren Inomhus. Huben publiceras vid fem sidor.

## 2. Bättre än ettan

Ettan är Bauhaus, en kategorisida med 117 produkter och 35 ord text. Tvåan Beijer har ingen text alls. Enda guiden på första sidan är Gör Det Själv (2023, cirka 2 100 ord) med en tabell över sex skruvtyper. Den saknar det snickaren slår upp: skruvlängd per skivtjocklek och antal lag, skruvavstånd i kant och fält, vid vilken plåttjocklek nålspetsen inte räcker, och försänkningsdjup i millimeter. Den blandar dessutom in upphängning.

Det läsaren har kvar: 25 eller 41 för dubbel skiva på stål, hur tätt i taket, får jag använda träskruven i stålregel, varför går skruven genom pappen.

Bindande lista:

1. Längdtabell, skivtjocklek (12,5 och 15 mm) och antal lag (ett, två) mot träregel och stålregel, med minsta längd och vanlig handelslängd i varje cell, räknad ur Norgips regel med källa under tabellen.
2. Skruvavståndstabell, vägg mot tak, kant mot fält, i millimeter, med källa per rad.
3. Sektionsillustration av skruv genom skiva och regel, se avsnitt 6.
4. Rätt och fel försänkning i bild, med regeln att huvudet ska ligga 0,5 till 1 mm under ytan utan att kartongen går sönder, med källa.
5. Proffsråd: bandad skruv och skruvautomat, djupanslag på skruvdragaren, och att fingängad stålskruv är fel i trä.

## 3. Rubrikskiss

Title: Gipsskruv, rätt längd och gänga för trä och stål

H1: Rätt gipsskruv för regeln och skivan, längd och gänga på en sida

Svaret i `kortSvar`: tre längder i klartext och regeln bakom dem. Nyckeltalet som markeras är 20 mm (i regeln).

H2 i ordning:

1. Längden bestäms av skivorna och regeln
2. Grov eller fin gänga, regeln avgör
3. Så tätt ska skruvarna sitta
4. Försänk huvudet utan att gå genom kartongen
5. Våtrum, brandgips och utegips
6. Bandad skruv och skruvautomat, när det lönar sig
7. Ska du hänga något i väggen är det en annan skruv

Mallen lägger till H2 "Det här behöver du" sist från frontmatterfältet `behover`. Skriv inte den rubriken.

## 4. Faktaunderlag

Allt du får använda. [Tillverkare] är skiv- eller skruvtillverkare (Gyproc, Norgips, Essve), [Tredje part] är Svenskt Trä, Gör Det Själv, Beijer eller Proffsmagasinets produktsida, [Egen beräkning] räknat av oss. Gyprocs monteringshandbok kapitel 2 gick inte att läsa maskinellt, så Gyproc-värdena kommer från deras HTML-sidor; jag kontrollerar handboken före publicering.

**Gänga, spets, huvud**

| Påstående | Källa | Märkning |
|---|---|---|
| Gängan är gjord för regeln, inte för skivan. Trä: grov gänga eller Hi-Lo, S-spets eller nålspets. Stål: fin gänga eller Hi-Lo, nålspets för tunn plåt, borrspets för tjock. Ytbehandling: elförzinkad eller fosfaterad för trä, fosfaterad för stål | Gör Det Själv, 2023 | Tredje part |
| QS Quick, försänkt huvud, för standard- och brandgipsskivor mot stålprofiler "med maximal godstjocklek 0,9 mm". QT Quick samma mot trä | Gyproc | Tillverkare |
| Borrspets borrar 0,7 till 2,0 mm plåt, rekommenderat varvtal 2 000 till 2 800 för 25 till 55 mm | Essve | Tillverkare |
| Nålspets, Essve 522224, 3,5 × 25 mm, för plåt 0,4 till 0,9 mm | Proffsmagasinets produktsida | Tredje part |
| Huvudet är försänkt trumpetform | Essve | Tillverkare |
| Hi-Lo med 22 till 25 mm i trä finns bara på bloggar | Ingen | Använd inte |

**Längd.** Regeln: "Skruvlängden skall vara gipstjocklek + 20 mm in i träregel eller + 10 mm genom stålregel." Vid torr fogtätning cirka 7 mm till [Tillverkare, Norgips]. Svenskt Trä anger 30 mm för ett lag och 41 för två mot trä [Tredje part]. Essves längder går 25 till 75 mm [Tillverkare]. Minsta längd nedan är [Egen beräkning ur Norgips regel]. Svenskt Träs 30 mm ger 17,5 mm i regeln; texten säger att 20 mm är säkra sidan och 30 är vad många gör.

| Skivor | Minsta längd trä (t + 20) | Vanlig handelslängd trä | Minsta längd stål (t + 10) | Vanlig handelslängd stål |
|---|---|---|---|---|
| 1 × 12,5 mm | 32,5 mm | 35 eller 41 mm (Svenskt Trä: 30 mm) | 22,5 mm | 25 mm |
| 1 × 15 mm | 35 mm | 41 mm | 25 mm | 25 mm (knappt) eller 30 mm |
| 2 × 12,5 mm | 45 mm | 45 eller 51 mm (Svenskt Trä: 41 mm) | 35 mm | 38 eller 41 mm |
| 2 × 15 mm | 50 mm | 51 eller 55 mm | 40 mm | 41 mm |

**Avstånd** (punkt 2)

| Var | Kant | Fält | Källa | Märkning |
|---|---|---|---|---|
| Vägg, yttersta lag | c 200 | c 300 | Norgips, Svenskt Trä | Tillverkare, Tredje part |
| Vägg, innersta lag, ej brandklassad | s 750 | s 750 | Norgips | Tillverkare |
| Vägg, brandklassad, alla lag | c 200 | c 300 | Norgips | Tillverkare |
| Tak, yttersta lag | ca 200 | ca 300 | Gyproc GK, nedpendlat undertak | Tillverkare |
| Tak, innersta lag, ej brandklassad | s 500 | s 500 | Norgips | Tillverkare |
| Stålstomme c 450: första skruv max 100 mm från hörn, första lag c 200 mot kantprofil och c 600 mot regel, andra lag c 200 kant och c 300 fält | | | Gyproc | Tillverkare |
| Regelavstånd c 400 vid en skiva, c 600 vid två med förskjutna skarvar | | | Svenskt Trä | Tredje part |
| Kantavstånd minst 10 mm från kartongklädd kant, 12 till 15 från skuren (Norgips), 15 skuren och 10 kartong (Svenskt Trä). Springa 2 till 3 mm mellan skivor | | | Norgips, Svenskt Trä | Tillverkare, Tredje part |
| "150 kant, 200 fält i tak" | | | Bara byggfirmabloggar | Använd inte |

**Djup, våtrum, ute, bandat**

| Påstående | Källa | Märkning |
|---|---|---|
| Skruvdragare med djupanslag som sänker skruven 0,5 till 1,0 mm; kartongen får inte skadas | Norgips | Tillverkare |
| Djupanslag rekommenderas för alla gipsskruvar | Essve | Tillverkare |
| För djupt eller för grunt försvagar greppet | Gör Det Själv | Tredje part |
| Humidboard: lägre varvtal, försiktig försänkning | Norgips, våtrum | Tillverkare |
| Fosfaterad och blankförzinkad skruv är korrosivitetsklass C1, torra inomhusmiljöer | Essve | Tillverkare |
| Utegips: Essve GU Corrseal, C4, borrspets 0,7 till 2,0 mm. Rostfri A2 motsvarar C4 | Essve, Beijer | Tillverkare, Tredje part |
| Våtrum: Norgips Hård kräver specialskruv, 200 kant och 300 fält, innersta lag max 750. Regel c 450 och två skivlag vid kakel | Norgips | Tillverkare |
| Ingen källa kräver rostfri skruv bakom tätskikt. Texten säger att C1 räcker, inget mer | Underlaget | Skriv inte annat |
| Essve FZB 3,9 × 41 rakbandad, 1 000-pack, för träregel inomhus. Skruvautomater 18 modeller; Makita DFR550ZX1 tar 25 till 55 mm, DFR750Z 45 till 75 | Proffsmagasinet | Tredje part |

Sju fel att bygga H2 2 och 4 kring, alla med källa ovan: skruv genom kartongen, skruv över ytan, grovgängad träskruv i stål, nålspets i plåt över 0,9 mm, skruv närmare kant än 10 mm, skivor pressade utan springa, fosfaterad skruv i utegips.

Egna mätningar: inga behövs. Ingen platshållare på sidan. Priser skrivs inte i löptext, listan visar dem.

## 5. Produkter

Listan "Det här behöver du" sist, fem rader. Verktygen får köpknapp, materialet inte. Faktaunderlaget har ingen slugtabell, så slugarna är mina förslag i formen marke-modell; teknisk ansvarig bekräftar. Inga kompakta kort och inga köpknappar i löptext.

| Rad | Slug | Namn | Varför (raden i listan) | Nackdel som ska stå i H2 6 |
|---|---|---|---|---|
| Verktyg | makita-dfr550zx1 | Makita DFR550ZX1 skruvautomat | Tar 25 till 55 mm, alltså allt i längdtabellen utom dubbel 15-skiva, och sänker varje skruv lika djupt | Utan batteri och laddare |
| Verktyg | essve-fzb-39x41 | Essve FZB gipsskruv 3,9 × 41 bandad, 1 000-pack | Rätt längd för en 12,5-skiva på trä med marginal, och för två 12,5 enligt Svenskt Trä | Bara för trä, inte stål |
| Material | | Gipsskruv 3,9 × 41, grov gänga, lös | Samma skruv som i bandet, för den som skruvar för hand | |
| Material | | Gipsskruv 3,5 × 25, fin gänga, nålspets | En 12,5-skiva på stålregel upp till 0,9 mm | |
| Material | | Gipsskruv med borrspets | Stålregel över 0,9 mm, upp till 2,0 | |

## 6. Illustrationer

Fyra beställs, mappen `inomhus/`.

1. Huvudbild via frontmatter `bild: ../../../assets/illustrationer/inomhus/gipsskruv-sektion.svg`, bildtext "Skivtjockleken plus 20 mm i trä, plus 10 mm genom stål. Det är hela regeln." Till designansvarig: regel i genomskärning, trä till vänster (skrafferad), stålprofil till höger (tunn C-profil, "0,9 mm" noterat), en respektive två 12,5-skivor ovanpå varje, en skruv genom varje, i blyerts. Måttbyglar i blyerts-2: "12,5", "12,5 + 12,5", och delen av skruven i regeln noterad "minst 20 i trä" respektive "10 genom plåten". En sak i penna: ringen runt de 20 mm i träregeln. Nyckeltalet "20 mm" gul markering.
2. Under H2 2: `<Illustration namn="inomhus/gipsskruv-ganga" alt="Två gipsskruvar sida vid sida, grov gänga med nålspets för trä och fin gänga med borrspets för stål, trumpethuvudet inringat." bildtext="Grov gänga i trä, fin gänga i stål. Huvudet är detsamma." />`. Skruvarna i blyerts, handanteckningar "trä" och "stål", borrspetsen noterad "0,7 till 2,0 mm plåt". Pennan ringar trumpethuvudet på den ena.
3. Under H2 3: `<Illustration namn="inomhus/gipsskruv-avstand" alt="Gipsskiva framifrån med skruvpunkter c 200 längs kanterna och c 300 i fältet, och minst 10 mm från kanten." bildtext="c 200 i kant, c 300 i fält, aldrig närmare kanten än 10 mm." />`. Skivan som rektangel med "1 200 × 2 400", reglar c 600 streckade, skruvpunkter som prickar, måttbyglar "c 200", "c 300", "min 10". Pennan ringar en skruv för nära kanten med "den här spräcker kanten".
4. Under H2 4: `<Illustration namn="inomhus/gipsskruv-forsankning" alt="Tre försänkningar i genomskärning, för grunt med huvudet över ytan, rätt med huvudet 0,5 till 1 mm under, och för djupt med brusten kartong." bildtext="Mitten är rätt. Den högra håller inte, kartongen är av." />`. Tre rutor i rad, skiva i genomskärning med kartongen som tunn linje, skruvhuvud i tre lägen, måttbygel "0,5 till 1 mm" på den mittersta. Pennan ringar den högra med "den här håller inte".

Inget verktygskort. Tabellen svarar helt.

## 7. Intern länkning

- H2 7: "[LÄNK NÄR SIDAN FINNS: inomhus/skruva-i-gipsvagg]" med ankaret "skruva i gipsvägg för att hänga upp saker", och "[LÄNK NÄR SIDAN FINNS: inomhus/gipsplugg]" med ankaret "vilken gipsplugg som håller vad". Filerna finns som utkast och byggs inte, så platshållaren, inte länken.
- H2 3: "[LÄNK NÄR SIDAN FINNS: inomhus/bygga-innervagg]" med ankaret "regelavstånd när du bygger innervägg".
- Under längdtabellen: [så hämtar vi värden från tillverkarna](/om/sa-testar-vi/). Finns.

## 8. Ton, vinkel, längd

Vinkeln är kollegan som svarar över axeln: "41 på trä, 25 på stål, och byt bits om du går genom pappen." Nivån är enkel, så inga formler, men proffsets precision: millimeter, inte "lite längre". Korta stycken. Den som gipsat i tjugo år ska nicka, den som gör sitt första förråd ska klara sig utan att fråga i butiken.

Längd 1 000 till 1 400 ord plus tabellerna. Efter läsningen ska läsaren kunna ta rätt längd och gänga för sin regel och sitt antal skivor, veta avståndet i kant och fält, och känna på skruvhuvudet om det sitter rätt.

Förbjudet: stilguidens lista. Dessutom: inget om upphängning utöver länken, inga takavstånd utöver Gyprocs 200/300, inget om rostfri skruv i våtrum, ingen Hi-Lo-längd från bloggar, inga priser i löptext.

## 9. Frontmatter-skiss

```yaml
title: Rätt gipsskruv för regeln och skivan, längd och gänga på en sida
description: Vilken gipsskruv du ska ha, i längd och gänga, för en eller två skivor på trä eller stål. Tabell med skruvavstånd och rätt försänkning.
publicerad: 2026-09-DD
pelare: inomhus
typ: projektguide
niva: enkel
kortSvar: >-
  En 12,5-skiva på träregel tar 35 eller 41 mm grovgängad skruv, på stålregel 25 mm
  fingängad. Två skivor på trä tar 45 eller 51, på stål 38 eller 41. Regeln bakom
  siffrorna är Norgips egen, skivtjockleken plus 20 mm in i trä eller plus 10 mm genom
  plåten. Grov gänga i trä, fin i stål, aldrig tvärtom.
bild: ../../../assets/illustrationer/inomhus/gipsskruv-sektion.svg
bildtext: Skivtjockleken plus 20 mm i trä, plus 10 mm genom stål. Det är hela regeln.
produkter: []
behover:
  verktyg:
    - produkt: makita-dfr550zx1
      varfor: Tar 25 till 55 mm, alltså allt i längdtabellen utom dubbel 15-skiva, och sänker varje skruv lika djupt.
    - produkt: essve-fzb-39x41
      varfor: Rätt längd för en 12,5-skiva på trä med marginal, och för två 12,5 enligt Svenskt Trä.
  material:
    - namn: Gipsskruv 3,9 × 41, grov gänga, lös
      varfor: Samma skruv som i bandet, för den som skruvar för hand.
    - namn: Gipsskruv 3,5 × 25, fin gänga, nålspets
      varfor: En 12,5-skiva på stålregel upp till 0,9 mm.
    - namn: Gipsskruv med borrspets
      varfor: Stålregel över 0,9 mm, upp till 2,0.
forfattare: redaktionen
kallor:
  - titel: Norgips, att tänka på innan montering
    url: https://www.norgips.se/kunskapsbank/att-tanka-pa-innan-montering/
  - titel: Norgips, montera skivor för våtrum
    url: https://www.norgips.se/kunskapsbank/montera-skivor-for-vatrum/
  - titel: Gyproc, QS Quick
    url: https://www.gyproc.se/produkter/skruvar/skruv-mot-barverk-av-stal-och-tra-i-invandig-miljo/gyproc-qs-quick
  - titel: Gyproc, standardstålstomme c 450, montering
    url: https://www.gyproc.se/gyproc-standardstalstomme-c-450-mm-montering-av-profiler-och-gipsskivor
  - titel: Gyproc, nedpendlat undertak GK, montering av gipsskivor
    url: https://www.gyproc.se/nedpendlat-undertak-med-gyproc-gk-system-i-tva-nivaer-montering-av-gipsskivor
  - titel: Svenskt Trä, bygga innervägg
    url: https://www.byggbeskrivningar.se/renovering/bygga-innervagg/
  - titel: Essve, gipsskruv med borrspets för stålregel
    url: https://essve.com/sv/produkter/skivskruv/gipsskruv/gipsskruv-med-borrspets-for-stalregel/gipsskruv-med-borrspets-for-stalregel-fosfaterad
  - titel: Essve, gipsskruv GU Corrseal för utegips
    url: https://essve.com/en/products/board-screws/collated-drywall-screws/drywall-gu-outdoor-with-drilltip-for-steel-joist/drywall-screw-gu-outside-with-drillpoint-for-steel-joists-corrseal
  - titel: Beijer, skruvarnas ytbehandling och korrosivitetsklass
    url: https://www.beijerbygg.se/privat/sv/skruvarnas-namn-ytbehandling-korrosivitetsklass
  - titel: Gör Det Själv, så väljer du rätt gipsskruv (2023)
    url: https://gds.se/material/spik-och-skruv/gipsskruv-sa-har-valjer-du-ratt-gipsskruv
utkast: false
```

SEO-underlaget sa "ingen reklammärkning". Med verktygslistan visar mallen bandet automatiskt, och det är rätt: två köpknappar finns på sidan. SEO-strategen och affiliateansvarig får notera det.
