# Brief till skribenten, avfuktare till källaren

Skriven 2026-09-16 av chefredaktören. Underlag: `underlag-seo-avfuktare-kallare.md` och `underlag-fakta-avfuktare-kallare.md`. Filen `src/content/guider/fukt/avfuktare-kallare.mdx` finns som platshållare; du ersätter hela innehållet och byter produktlistan i frontmatter (den pekar i dag på woods-mrd20 och två platshållarslugs som inte ska vara kvar).

## 1. Sökfras, intention, sida

- Huvudfras "avfuktare källare" (2 900 per månad, topp augusti 5 400). Sekundär "luftavfuktare källare" (590), ägs av sidan.
- Intention kommersiell. Läsaren har en fuktig källare, vet att en avfuktare är lösningen, vill veta vilken och hur stor. Svaret är en rekommendation med liter per dygn i första skärmen.
- URL `/fukt/avfuktare-kallare/`. Sidtyp köpguide. Nivå mellan. Målgrupp hemmafixaren, skrivet med hantverkarens trovärdighet.
- Sidan äger inte "avfuktare bäst i test", "sorptionsavfuktare", "fukt i källaren" eller "hur stor avfuktare". Länka, skriv inte om.
- Måste ut i september. Säsongen tar slut i oktober.

## 2. Bättre än ettan

Ettan är Elon, en butiksguide daterad augusti 2024. Den säger att en typisk källare ligger på 75 till 85 procent och att målet är 50 till 55, ger 10 till 30 liter per dygn ur Wood's datablad, och listar fyra maskiner för 1 990 till 6 990 kronor. Den skiljer inte kondens från sorption, säger inget om vid vilken temperatur kondensavfuktaren tappar kapacitet, inget om el, har ingen tabell, ingen dimensionering läsaren kan räkna själv, och priserna är två år gamla. Bygghemma skiljer typerna men utan tal.

Det läsaren har kvar: hur stor för min källare, klarar den 8 grader på vintern, vad kostar den i el per månad, var ska den stå, måste jag tömma tanken varje dag.

Bindande lista, bockas av vid granskning:

1. Dimensioneringstabell, yta gånger takhöjd mot fuktnivå, som ger liter per dygn, med antagandena under tabellen. Samma formel som `/rakna/avfuktare/`, verktygskortet direkt intill.
2. Temperaturtabell ur tillverkarnas datablad, kapacitet vid 30 grader och 80 procent mot 20 grader och 70 procent (och 10 grader där något värde finns), kolumnen "Tillverkaren uppger", källa per rad. Att kolumnen för 10 grader nästan bara innehåller "ej angivet" är poängen; skriv det.
3. Elkostnad per månad, räknad på märkeffekt, drifttid och elpris med datum, i tabell.
4. Källaren i genomskärning med fuktkällor och rätt placering, se avsnitt 6.
5. Minst en maskin vi avråder från i källare, med skälet. Två finns i avsnitt 5.

## 3. Rubrikskiss

Title: Avfuktare till källaren, rätt typ och rätt storlek

H1: Rätt avfuktare till källaren, och hur stor den behöver vara

Svaret kommer i `kortSvar` i frontmatter, mallen lägger det under metaraden. Nyckeltalet som markeras är 9 liter per dygn.

H2 i ordning:

1. Så stor behöver den vara
2. Temperaturen i källaren avgör typen
3. Var den ska stå, och vart vattnet ska ta vägen
4. Vad den kostar i drift
5. Maskinerna vi rekommenderar, och två vi inte gör
6. När avfuktaren inte räcker

Mallen lägger själv till H2 "Produkterna vi nämner" sist från frontmatterns `produkter`. Skriv inte den rubriken.

## 4. Faktaunderlag

Allt du får använda. [Tillverkare] är tillverkarens uppgift via Proffsmagasinets produktsida eller tillverkarens egen sida, [Tredje part] namngiven annan källa, [Egen beräkning] räknat av oss med angiven formel. Priser lästa 2026-09-16; skriv aldrig ett pris i löptext, kortet visar det.

**Varför 20 liter inte är 20 liter**

| Påstående | Källa | Märkning |
|---|---|---|
| Branschen anger kapacitet vid 30 °C och 80 % RF, ibland 27/60 eller 20/70 | Produktsidorna | Tillverkare |
| DSC50FM 16,2 l vid 35/80 men 8,8 vid 20/70; SW59FM 41 l vid 30/80 men 25 vid 20/70; AD20 23 l vid 30/80 men 14 vid 27/60 | Proffsmagasinet, woods.se | Tillverkare |
| Vid 12 °C och 75 % innehåller luften 8,0 g vatten per m³, vid 30 °C och 80 % 24,2 g/m³. Daggpunkten vid 12/75 är 7,7 °C, så kylslingan går nära frost och maskinen avfrostar i stället för att avfukta | Magnus-formeln, Lawrence 2005 | Egen beräkning |
| Kondens behöver minst +15 °C för att fungera väl, därunder faller kapaciteten "mer markant och successivt" | Ljungby Fuktkontroll | Tredje part |
| Kondens bäst över 8 °C och 40 % RF, sorption under det | Dantherm | Tredje part |
| Sorption tappar mindre: Corroventa CTR STD-TT ger 17 l vid 20/60, 13 vid 10 °C, 11 vid 5 °C | Corroventa | Tillverkare |
| Ingen tillverkare i Proffsmagasinets sortiment anger kapacitet under 20 °C. Den mätningen gör vi själva i kammartestet. Skriv det under temperaturtabellen | Underlaget | Skriv ut luckan |

**Temperaturtabellen** (punkt 2), tomma celler skrivs "ej angivet":

| Maskin | Typ | 30 till 35 °C/80 % | 20 °C/70 % | 10 °C | Källa |
|---|---|---|---|---|---|
| Wood's SW39FW | kondens | 19 l (villkor ej angivet) | ej angivet | ej angivet | Proffsmagasinet [Tillverkare] |
| Wood's MDK21 | kondens | 20 l | ej angivet | ej angivet | Proffsmagasinet [Tillverkare] |
| Wood's DSC50FM | kondens | 16,2 l (35/80) | 8,8 l | ej angivet | Proffsmagasinet [Tillverkare] |
| Wood's SW59FM | kondens | 41 l | 25 l | ej angivet | Proffsmagasinet, woods.se [Tillverkare] |
| Meaco 10L ABC | kondens | 10 l | ej angivet | 1,09 l (10/60), 0,47 l (5/60) | Elgiganten [Tredje part, butiksuppgift] |
| Acetec EvoDry 6H 2.0 | sorption | ej angivet | 7,4 l (20/60), 9,7 max | ej angivet | Acetec datablad [Tillverkare] |
| Corroventa CTR STD-TT | sorption | ej angivet | 17 l (20/60) | 13 l (10/60), 11 l (5/60) | Corroventa [Tillverkare] |

**Dimensioneringstabellen** (punkt 1). Kalkylatorn räknar volym gånger en faktor per fuktnivå: 0,08 l per dygn och m³ vid 60 till 70 %, 0,10 vid 70 till 80, 0,13 över 80, gånger 1,4 om utrymmet är ouppvärmt, avrundat uppåt. Uppvärmd källare med 2,2 m i tak [Egen beräkning, kalkylatorns formel]:

| Yta | 60 till 70 % | 70 till 80 % | Över 80 % |
|---|---|---|---|
| 20 kvm (44 m³) | 4 l/dygn | 5 l/dygn | 6 l/dygn |
| 40 kvm (88 m³) | 8 l/dygn | 9 l/dygn | 12 l/dygn |
| 60 kvm (132 m³) | 11 l/dygn | 14 l/dygn | 18 l/dygn |
| 80 kvm (176 m³) | 15 l/dygn | 18 l/dygn | 23 l/dygn |

Ouppvärmd källare gånger 1,4. Antagandena står under tabellen, och därunder ordagrant "Räknat med samma formel som vår kalkylator." Viktigt: formeln i `src/lib/kalkyl/avfuktare.ts` är märkt platshållare tills produktexperten levererat den riktiga med källa. Sidan publiceras inte förrän det är gjort; då räknas tabellen och kortSvar om.

**Elkostnad** (punkt 3). kWh per månad = märkeffekt × timmar per dygn × 30 / 1 000. Dygnet runt är värsta fallet, 8 timmar per dygn är vårt antagande för hygrostatstyrd drift, skriv det under tabellen [Egen beräkning ur tillverkarens märkeffekt]:

| Maskin | Effekt | kWh/månad dygnet runt | kWh/månad 8 h | kr/månad |
|---|---|---|---|---|
| Wood's MDK21 | 240 W | 172,8 | 57,6 | [ELPRIS SAKNAS] |
| Wood's SW39FW | 320 W | 230,4 | 76,8 | [ELPRIS SAKNAS] |
| Acetec EvoDry 6H 2.0 | 530 W | 381,6 | 127,2 | [ELPRIS SAKNAS] |
| Wood's SW59FM | 690 W (500 vid 20/70) | 496,8 (360 vid 20/70) | 165,6 | [ELPRIS SAKNAS] |

Kronkolumnen: underlaget har inget elpris med källa och datum. Skriv platshållaren ordagrant "[ELPRIS SAKNAS: kr per kWh inklusive nät och skatt, källa och datum från produktexperten]" i kolumnrubriken och lämna cellerna tomma. Hitta inte på 1,50 eller 2 kronor. EvoDry 6H drar 1,7 kWh per liter vid 20/60 [Egen beräkning ur 530 W och 7,4 l].

**Placering, vatten, mätningar**

| Påstående | Källa | Märkning |
|---|---|---|
| MDK21 har 4 l tank som blir full på ett dygn i augusti, slang till golvbrunn är i praktiken ett krav. SW39FW har 11,4 l tank och slanganslutning, slangen ingår inte. DSC50FM har ingen tank, bara fast slang | Proffsmagasinet | Tillverkare |
| Fritt runt maskinen, inte bakom hyllan. Skriv "så ställer vi den" | Ingen | Vår praxis |
| Minst 50 cm fritt framför filtret, våtluftsslang så kort som möjligt med fall, genomföring tätad med silikon | Acetec, installationsanvisning | Tillverkare |
| Hygrostat på 60 till 65 % med marginal till 75 | Optihus | Tredje part |
| I H2 5, efter rekommendationerna, ordagrant: "[MÄTNING SAKNAS: här kommer RF och temperatur i vår egen källare en vecka före och en vecka efter avfuktarstart, plus elmätarens värde]". Skriv aldrig "vi mätte" eller "i vårt test" | | Platshållare |
| Ljud för SW23FW, SW39FW, SW43FW saknas (butiken anger inget, Wood's sida gav 404). Kapacitet vid 10 eller 12 °C saknas för alla kondensmaskiner i sortimentet. Wood's sexårsgaranti för MDK-serien okänd. Innova IGDHX-30 nämns inte | Underlaget | Skriv inte |

## 5. Produkter

Slugarna matchar tabellen i faktaunderlaget. Teknisk ansvarig lägger in dem i databasen. Max ett kompakt kort per H2.

| Slug | Produkt | Etikett | För vem | Fakta att använda [Tillverkare] | Nackdelar som ska stå | Kort i |
|---|---|---|---|---|---|---|
| woods-sw39fw | Wood's SW39FW I-EcoDefrost+ | Bäst totalt | En källare på 30 till 60 kvm som kallnar ner mot 5 grader i november | 19 l uppgivet, ner till 2 °C, 11,4 l tank, slanganslutning, 320 W, 140 kvm | Ljudnivå saknas på produktsidan (systermodellen SW42FW anges 37 till 56 dB av återförsäljare, alltså inte tyst på hög fläkt); slang ingår inte; ingen siffra vid 20 °C; allt är butikens återgivning. Inte i sovrum | H2 5 |
| acetec-evodry-6h-2 | Acetec EvoDry 6H 2.0 | Bäst till kall källare | En källare under 10 grader med en vägg mot det fria för våtluftsslangen | Sorption, -20 till +40 °C, 7,4 l vid 20/60, 100 m³, 530 W, 48 dBA enligt Acetec (46 hos butiken, skriv Acetecs), slang 50 mm 1,5 m ingår | 530 W kontinuerligt, 1,7 kWh per liter, slangen måste ut genom vägg eller fönster, Acetec skriver själva "inte avsedd för krypgrund eller kallvind". Inte om källaren håller 15 °C och elräkningen är huvudfrågan | H2 2 |
| woods-mdk21 | Wood's MDK21 | Bäst för pengarna | En källare som håller 15 grader året om och har golvbrunn | 20 l vid 30/80, 240 W, högst 48 dB, 70 kvm, slanganslutning | Lägsta arbetstemperatur +5 °C, 4 l tank, ingen siffra vid 20 °C. Inte en källare som går under 10 °C på vintern | H2 4 |

Avråder, utan kort (punkt 5). En liten kondensmaskin i ouppvärmd källare: Meaco 10L ABC anges till 1,09 l per dygn vid 10 grader och 0,47 vid 5, en tjugondel av märkvärdet [Tredje part, butiksuppgift, säg det]. Den säljs inte hos Proffsmagasinet och är exemplet, inte en produkt. eeese Adam 20 (42 till 44 dB) är billigare och tystare än MDK21 men saknar svenskt datablad, så vi rekommenderar den inte förrän vi haft den i handen. Skriv exakt det.

## 6. Illustrationer

Tre beställs, mappen `fukt/`.

1. Huvudbild via frontmatter `bild: ../../../assets/illustrationer/fukt/kallare-avfuktare.svg`, bildtext "En källare på 40 kvm i augusti. Markfukt genom väggen, sommarluft genom fönstret, tvättmaskinen som tredje källa." Till designansvarig: förebild `fukt/kallare.svg`, 600 × 360. Mark utanför väggen skrafferad, pil i penna för markfukt genom väggen (enda pennsaken), kallt golv med droppar i blyerts där sommarluft kommer in via ett öppet källarfönster, tvättmaskin som rektangel, avfuktaren som rektangel mitt i rummet med luftpilar i blyerts och slang till golvbrunn. Mått i blyerts-2: "40 kvm", "2,2 m i tak". Handanteckning vid fönstret: "fönstret stängt i juli". Nyckeltalet "75 %" gul markering.
2. Under H2 2: `<Illustration namn="fukt/kapacitet-temperatur" alt="Stapeldiagram över liter per dygn vid 30 och 20 grader för Wood's DSC50FM, SW59FM och AD20, med Corroventa CTR som sorptionsreferens vid 20, 10 och 5 grader." bildtext="Tillverkarnas egna par. Kondensmaskinerna tappar fyra till sex tiondelar mellan 30 och 20 grader, sorptionsmaskinen en fjärdedel mellan 20 och 10." />`. Staplar i blyerts, Corroventas i penna. Värden exakt ur temperaturtabellen: 16,2/8,8; 41/25; 23/14; 17/13/11. Inga andra maskiner, de saknar par.
3. Under H2 3: `<Illustration namn="fukt/placering-ratt-fel" alt="Två skisser av avfuktaren i en källare, fritt placerad mitt i rummet mot instängd i hörnet bakom en hylla." bildtext="Till vänster får luften cirkulera. Till höger torkar den hörnet och inget annat." />`. Två rutor sida vid sida, avfuktaren som rektangel med luftpilar, ring i penna runt den felaktiga, handanteckning "här står den hos de flesta".

Verktygskort: `<Verktygskort kalkylator="avfuktare" />` direkt efter dimensioneringstabellen i H2 1. Sidans enda.

## 7. Intern länkning

- Mallen tar inte länkar i kortSvar, så i första stycket under bilden: [räkna på din källare](/rakna/avfuktare/) och "[LÄNK NÄR SIDAN FINNS: tester/woods-sw39fw]".
- H2 1: [vad som är normal luftfuktighet inomhus](/fukt/luftfuktighet-inomhus/). Skrivs parallellt, adressen är beslutad.
- H2 2: [sorptionsavfuktare för källare under 15 grader](/fukt/sorptionsavfuktare/).
- H2 5: [alla avfuktare vi testat](/luftavfuktare/). Kategorisidan finns.
- H2 6: [ta reda på varifrån fukten kommer](/fukt/fukt-i-kallaren/). Finns.

## 8. Ton, vinkel, längd

Vinkeln: det står "20 liter" på kartongen och det är sant i Bangkok. Hela sidan bygger på att läsaren ska förstå varför hennes källare i november är ett annat rum än det tillverkaren räknat på, och sedan få tre konkreta val. Ta ställning i varje avsnitt: den här om källaren är varm, den här om den är kall, den här om golvbrunnen finns. Nackdelarna står i avsnitt 5 och ska skrivas lika tydligt som fördelarna, i löptext.

Längd 1 600 till 2 200 ord. Efter läsningen ska läsaren veta hur många liter per dygn hennes källare behöver, vilken av de tre maskinerna som passar hennes temperatur, var den ska stå, och ungefär hur många kilowattimmar den drar per månad.

Förbjudet: stilguidens lista. Dessutom: priser i löptext, "vi testade", "Fördelar" och "Nackdelar" som rubriker, siffror på kapacitet vid 10 grader som inte står i tabellen, ord om tystnad för SW39FW.

## 9. Frontmatter-skiss

```yaml
title: Rätt avfuktare till källaren, och hur stor den behöver vara
description: Så stor avfuktare behöver din källare, i liter per dygn. Tabell för storlek och temperatur, elkostnad per månad, och maskinerna vi rekommenderar.
publicerad: 2026-09-DD
pelare: fukt
typ: kopguide
niva: mellan
kategori: luftavfuktare
kortSvar: >-
  En källare på 40 kvm med 2,2 meter i tak och 75 procent i augusti behöver minst 9 liter
  per dygn, räknat vid källarens temperatur, inte kartongens. Håller källaren 15 grader
  året om, köp Wood's SW39FW. Går den under 10 grader på vintern, läs avsnittet om
  sorption innan du köper något.
bild: ../../../assets/illustrationer/fukt/kallare-avfuktare.svg
bildtext: En källare på 40 kvm i augusti. Markfukt genom väggen, sommarluft genom fönstret, tvättmaskinen som tredje källa.
produkter:
  - slug: woods-sw39fw
    etikett: Bäst totalt
    forVem: En källare på 30 till 60 kvm som kallnar ner mot 5 grader i november.
  - slug: acetec-evodry-6h-2
    etikett: Bäst till kall källare
    forVem: En källare under 10 grader med en vägg mot det fria för våtluftsslangen.
  - slug: woods-mdk21
    etikett: Bäst för pengarna
    forVem: En källare som håller 15 grader året om och har golvbrunn.
forfattare: redaktionen
kallor:
  - titel: Proffsmagasinet, Wood's SW39FW I-EcoDefrost+
    url: https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-sw39fw-i-ecodefrost-avfuktare-med-luftfilter-140-m-4058317
  - titel: Proffsmagasinet, Wood's MDK21
    url: https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-mdk21-avfuktare-upp-till-70-m-vs57632
  - titel: Proffsmagasinet, Wood's DSC50FM
    url: https://www.proffsmagasinet.se/vvs-inomhusklimat/inomhusklimat/avfuktare/avfuktare/woods-dsc50fm-avfuktare-vs57625
  - titel: Wood's, SW59FM
    url: https://woods.se/en/products/dehumidifiers/woods-sw59fm/
  - titel: Acetec, dokumentation EvoDry 6H 2.0
    url: https://docs.acetec.se/dokument/ref-20100/
  - titel: Corroventa, CTR STD-TT
    url: https://www.corroventa.se/produkter/krypgrundsavfuktare/krypgrundsavfuktare-ctr-std-tt/
  - titel: Elgiganten, Meaco 10L ABC (butiksuppgift)
    url: https://www.elgiganten.se/product/hem-hushall-tradgard/inomhusklimat-uppvarmning/luftkvalitet/luftavfuktare/meaco-10l-abc-vit-avfuktare-10-liter-per-dag-hygrostat-kompressor/295839
  - titel: Ljungby Fuktkontroll, välj rätt avfuktare
    url: https://www.lfs-web.se/avfuktare-valj-ratt-for-bast-ekonomi-och-sakrast-avfuktning/
  - titel: Dantherm, adsorption eller kondensation
    url: https://www.danthermgroup.com/se/artiklar/adsorption-eller-kondensation-vaelj-raett-avfuktare-foer-dina-behov
  - titel: Lawrence, BAMS 86(2), 2005, Magnus-formeln
    url: https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml
utkast: false
```
