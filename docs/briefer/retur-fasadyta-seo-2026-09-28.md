# Retur, SEO och GEO: /rakna/fasadyta/ med värdartikeln /fasad/mala-om-huset/, 2026-09-28

Steg 5 i `ny-sida`. Läst mot `docs/briefer/seo-checklista-2026-09-28/raknare.md`, avsnittet /rakna/fasadyta/, och renderat i en egen dev-server på port 4391 (stängd efteråt): standardadressen, `?fasad=slat` och `?fasad=tegel`, guiden och fasadhubben. Title, description, canonical, rubriker, JSON-LD, alt och länkar är lästa ur HTML:en. Bara sökningen; stil och röst är läsarens.

**Två punkter att ändra. Den första stoppar publiceringen av räknaren, den andra stoppar committen av guiden.**

## Att ändra

1. **`src/pages/rakna/fasadyta.astro`, efter rad 455 (slutet på `TEXT.steg`-listan i "Så räknar jag") och före H3:n "Vad siffrorna vilar på" på rad 457: en fast tabell över hur långt en liter räcker per färg och fall.** Det här stoppar publiceringen. Se "Punkt 6" nedan för varför. Kraven:
   - **Fast innehåll, samma på varje adress.** Tabellen får inte bero på indata. Canonical pekar alla varianter på `/rakna/fasadyta/`, så det Google och en AI läser är standardadressen (lockpanel, akrylat, ommålning). Allt som bara visas vid andra val finns inte för sökningen.
   - **Rader**, minst: akrylatfärg vid ommålning; akrylatfärg på nytt eller skrapat trä, med grundfärgen; oljefärg (oljealkyd) i samma två fall, eller på samma rader som akrylat om båda namnen står; kulörbyte, täckfärg plus en strykning grundfärg; slamfärg vid ommålning och på nytt virke; silikatfärg på puts, med silikatbindern utanför; omålat tegel, ingen färg.
   - **Kolumner med rubrikrad och enhet**: färg och underlag, m² per liter och strykning, strykningar, liter och burkar till typhuset på 98 m² slät panel, källa (tillverkarens namn). Puts får liter utan burkar, som räknaren. Tegel får "ingen färg" och Alcro och Wienerberger som källa.
   - **Talen byggs ur modulen**, inte skrivs för hand: `ATGANG`, `GRUND_ATGANG`, `STRYK_AUTO`, burkarna ur `raknaFasadyta` med `STANDARD` och `fasad: 'slat'` per rad. Då kan tabellen aldrig säga något annat än formuläret, och akrylatraden blir 28,06 liter, tre burkar om 9 och en om 2,7, samma som guiden.
   - **Rubriken är en H3** i "Så räknar jag"; mallens fasta H2 rörs inte. Hantverkaren skriver H3:n, radnamnen och en mening under tabellen om varifrån talen kommer. Talen står redan i `TEXT.regel.atgang`, `strykningar`, `grundfarg`, `silikat` och `tegel`, så inget nytt faktaunderlag behövs.
   - **Håll tabellen till åtgång.** Egenskaper, livslängd och val mellan färgtyperna hör till den kommande `/fasad/valja-fasadfarg/`, som får en egen typtabell (`fasad.md` punkt 10). Två tabeller som jämför samma sak vore två sidor om samma fråga.

2. **`src/components/ui/Kalkylator.astro` rad 95, `FOTRAD = 'TEXT SAKNAS: kalkylator-fotrad'`.** Syns två gånger i den renderade guiden, under inbäddningen av fasadräknaren och under måla ute, och därmed under varje `<Kalkylator>` på hela sajten. Guiden får inte committas med den raden. Antingen skriver hantverkaren fotraden (specen `spec-kalkyl-grannemedgivande-2026-09-28.md` 12.6 säger vad den ska vara sann för), eller så hålls ändringen i komponenten utanför committen tills den är skriven. Samma sak som stod i returen för grannemedgivandet, nu med fotraden i stället för registerposterna.

## Punkt 6, om den stoppar

Hantverkaren har rätt i att specen inte hade de fyra avsnitten. Läst mot vad som faktiskt står på standardadressen:

| Avsnitt i punkt 6 | På den indexerade sidan | Bedömning |
|---|---|---|
| 1. Formel per takform, bär gavelspets | `TEXT.steg` punkt 3 ger sadeltak, pulpettak, valmat och mansard i klartext, antagandetabellen ger formlerna i symboler, `regel.gavel-sadel` står vid standardvärdena. | Klarar kravet och Bättre än ettan 1. Ingen egen H2 behövs. |
| 2. Väggyta mot målad yta, bär lockpanel | Kortsvaret har båda talen, 98 och 118 m², med skälet. Besked, spalt och `regel.profil-lock` står på standardadressen, eftersom standarden är lockpanel. | Klarar kravet och Bättre än ettan 4. |
| 3. Tabell, liter per färgtyp och fall | Akrylat och olja 7 och 6, slamfärg 3 står i löptext. **Kulörbytet och grundfärgen syns inte alls på standardadressen**, silikat bara som en siffra i steg 7, och **burkar bara för standardfallet**. Ingen tabell. | **Stoppar.** Bättre än ettan 3 kräver liter per färgtyp *och fall*, med kulörbyte, omräknat till burkar. Formuläret gör det åt den som klickar, men sidan som indexeras visar ett fall av sju. Det är just den tabell en AI lyfter på "hur många liter fasadfärg". |
| 4. Tegel målas inte | Beskedet och `regel.tegel` med Alcro och Wienerberger står bara på `?fasad=tegel`, som canonicaliseras bort. Standardadressen har en halv mening i steg 5 utan källa. | Stoppar inte ensamt, men löses av tegelraden i tabellen i punkt 1. |

Slutsatsen: en tabell, inte fyra avsnitt. Punkt 1 och 2 finns redan, och punkt 3 och 4 ryms i samma fasta tabell.

## Checklistan punkt för punkt

| Punkt | Resultat |
|---|---|
| 1. Adress och sidtyp | Inget att ändra. Kalkylator, `pelare: ['fasad']`, syns i fasadhubbens Räkna-grupp. |
| 2. Fraser | Inget att ändra. beräkna fasadyta i title, description, brödsmula och `WebApplication`; "hur mycket färg går det åt till huset" i H1; gavelspets i kortsvaret, uträkningen och steg 3; lockpanel i kortsvar, besked och regel; "liter fasadfärg" i kortsvaret. |
| 3. Title | Inget att ändra. "Beräkna fasadyta och liter färg till huset", 42 tecken, suffixet läggs på (58). Börjar med frasen, färgen i andra halvan, inget årtal. Ingen annan title börjar med "Beräkna fasadyta"; u-värde delar bara första ordet. |
| 4. Description | Inget att ändra. 139 tecken, frasen först, gavlarna, fönstren, liter och burkar, "hur mycket färg" i naturlig form. |
| 5. H1 | Inget att ändra. Delar inga ord i början med title. |
| 6. H2-struktur | Se ovan. Tabellen i punkt 1 under Att ändra. Kortsvaret är citerbart utan resten av sidan: typhuset, talen, villkoret. |
| 7. Längd | Inget att ändra. Standardadressen har cirka 2 200 ord med formuläret, källistan och Faq; texten själv ligger inom målet. Tabellen lägger till några rader. |
| 8. Bilder | Inget att ändra. Skissens alt 105 tecken med gavelspetsen, fasadytan 98,2 m² i bildtexten, varumärkesbilden tom alt, delningsbilden sätts. |
| 9. Interna länkar | Inget att ändra nu. Ut: guiden, måla ute (med `?farg=` på träfärg), kvadratmeter. Inlänkar: guiden (`<Kalkylator namn="fasadyta" />` med registernamnet som ankare), `/rakna/kvadratmeter/` rad 813, `/rakna/mala-ute/` rad 667. `/fasad/tvatta-fasad/` och `/fasad/valja-fasadfarg/` finns inte ännu; länkarna åt båda hållen står som krav i `fasad.md` punkt 10 och kontrolleras när de sidorna granskas. |
| 10. Strukturerad data | Inget att ändra. `BreadcrumbList`, `WebApplication` med samma beskrivning som description, `FAQPage` med de fyra frågorna som syns. Inga produkter, `reklam={false}`. Färgnycklarna samma som måla ute. |
| 11. Bättre än ettan | 1 klarar. 2 klarar (verkliga mått, standard 1,2 × 1,2 och 1,0 × 2,1). **3 klarar inte på den indexerade sidan**, punkt 1 ovan. 4 klarar. 5 klarar: 98 m², 28,06 liter och tre burkar om 9 plus en om 2,7 på slät panel, 34 liter och fyra om 9 på lockpanel, samma som guiden. Checklistans "tre burkar om 10 liter" är ersatt av burkbeslutet (0,9, 2,7, 9 l); guiden nämner tioliterburkarna för den som köper färdigblandat, så talen går ihop. |
| 12. Fällor | Inget att ändra. K1 löst: guiden har en mening om lockpanelen och samma två tal. Profilfaktorn står som "min egen räkning ur Svenskt Träs mått". Dörrmåttet står som antagande. Tillverkarna står vid sina tal. |

## Title mot registrets namn

"Beräkna fasadyta och liter färg till huset" (title) och "Beräkna fasadyta och färg till huset" (registret) delar de tre första orden, men regeln i skillen gäller två *sidor*. Registrets namn är samma sidas namn: brödsmulan, `WebApplication.name`, rubriken i inbäddningen och ankartexten i guiden och i sidfoten. Att de säger samma fras stärker ägarskapet; ingen annan sida får den i en title eller rubrik. **Inget att ändra.** Det enda som hade varit fel är om guiden eller en annan sida fick "Beräkna fasadyta" i title eller H2, och det har ingen.

## Värdartikeln /fasad/mala-om-huset/

Inget att ändra på sidan, utöver fotraden i punkt 2.

- **Egen fras kvar.** Title "Måla om huset kostnad 2026, per kvm och hus" och description är orörda. Kostnadsavsnitten, typhustabellen och Faq-frågan om pris per kvadratmeter bär frasen som förut.
- **Ingen kannibalisering.** Guiden har inget "beräkna fasadyta" i title, H1 eller H2. H2:n "Fasadytan räknar du ut med omkrets, höjd och gavelspetsar" behåller metoden, som checklistan kräver, och inbäddningen direkt under den länkar till räknaren med registrets namn som ankare. Faq-frågan "Hur mycket färg går det åt till en fasad?" står kvar som checklistan tillät; svaret har nu samma tal som räknaren.
- **Stycket om kvadratmeterräknaren är borta** och `Verktygskort kalkylator="kvadratmeter"` likaså. Guiden länkar fortfarande till kvadratmeter bara i den automatiska listan, vilket är rätt: frasen "hur många liter färg per kvm" ägs av kvadratmeter och guiden ska inte tävla om den.
- **De nya talen stämmer inbördes**: 7 787 och 10 780 kronor ger 8 000 till 11 000 i kortsvar, brödtext, summering och Faq (80 till 110 kr/m²). Slamfärgens 33 och 40 liter och 2 600 till 2 800 kronor per strykning går ihop med 3 m² per liter. `uppdaterad: 2026-09-28` är satt, och de nya källorna står i `kallor`.
- 100 m² i guiden mot 98,2 i räknaren förklaras i guiden ("jag rundar till 100"). Litern skiljer med en (29 mot 28,06), burkarna är desamma.

## Efter publicering

Frågan "hur mycket färg går det åt till ett hus" och "beräkna fasadyta" ställs till en AI när sidan är indexerad; anteckning i SOKORDSANALYS.md om sajten nämns. Båda fraserna och sidofraserna (gavelspets, lockpanel, liter fasadfärg) ska med i nästa Keyword Planner-hämtning, som checklistan säger.

## Andra läsningen, samma dag

Läst direkt i filerna efter koordinatorns besked.

- **Punkt 1 är uppfylld.** H3:n "Färg och burkar till en fasad på 98 m²" står i "Så räknar jag" i `src/pages/rakna/fasadyta.astro` rad 496 till 519, utanför allt som beror på indata. Den har elva rader: täckfärg i fyra fall, grundfärg i tre, slamfärg i två, silikat och tegel. Kolumnerna har rubrikrad och enhet, och tillverkaren står per rad. Talen kommer ur `atgangstabell()` i `src/lib/kalkyl/fasadyta.ts` rad 1752, som anropar `raknaFasadyta` på guidens hus med slät panel. Bättre än ettan punkt 3 (liter per färgtyp och fall, med kulörbyte, omräknat till burkar) är uppfylld på den indexerade sidan, och tegelbeskedet står nu där med källa.
- **Punkt 2 är uppfylld.** `FOTRAD` i `src/components/ui/Kalkylator.astro` rad 95 är skriven, och ingen `TEXT SAKNAS` finns kvar i de granskade filerna.
- **Inget annat har ändrats för sökningen.** Title, description, H1, registrets namn, Faq-frågorna och guidens title är desamma. Kortsvaret och guiden har bytt formulering men har samma tal: 98 m², 28 liter på slät panel och 34 på lockpanel. Guidens brödtext och Faq räknar nu på 98 m², precis som räknaren.

**Godkänd av SEO och GEO.**
