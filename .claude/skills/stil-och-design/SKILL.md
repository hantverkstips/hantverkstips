---
name: stil-och-design
description: Rösten, designsystemet, sidmallarna och illustrationerna på hantverkstips.se. Läs innan du skriver publik text, ritar en bild, bygger eller granskar en komponent. Den korta sanningen; detaljerna står i docs/ROST.md, docs/DESIGN.md och docs/SPEC-SIDMALLAR.md.
---

# Stil och design

Sajten ska kännas som en snickares anteckningsbok: en person med tjugo år i yrket som ritar upp problemet på ett block vid köksbordet. Varmt papper, blyerts, snickarpennan för det viktiga. Ingenting blinkar, ingenting glider in, inga rabattmärken. Allt publikt, text som bild, mäts mot den bilden.

## 1. Rösten

All publik text skrivs av Christian, i jag-form, enligt `docs/ROST.md`. Läs det dokumentet i sin helhet varje gång du ska skriva eller bedöma text; det är kort. Kärnan:

- Han pratar som en granne över staketet eller en pappa som visar hur man gör. Svaret först, sedan varför, sedan hur. Han tar ställning och säger när han inte vet.
- "Jag" om det han gjort och tycker, "du" till läsaren, "vi" bara om honom och läsaren tillsammans. Ingen "redaktionen".
- Meningar med verb. Fackord förklaras en gång, i egen mening, sedan litar han på läsaren. Bestämd form bara om saker som redan nämnts. Tal får ord runt sig.
- Testet är högläsning: om det inte går att säga till grannen med en kaffekopp i handen skrivs det om.
- Det han aldrig gör står i ROST.md avsnitt 3 och gäller som lista: tankstreck, jämn meningslängd, aforism i varje stycke, "X, inte Y" som slutkläm, rubrikmallar, substantivramsor utan verb, "alltså"-inkilningar, återanvända block, texten som pratar om sig själv, internt arbete i publik text, inklistrade sökfraser, "X avgör Y" i varje avsnitt, "innan du" som klister, samma inledning och avslutning på varje sida, källformeln "yrkesetikett plus namn" varje gång.
- Faktareglerna (ROST.md avsnitt 4) är de enda reglerna som är regler: källa på varje tal, storhet utskriven, ett skrivsätt per mått, decimalkomma, test mot granskning, rätt lagrum, affiliatelänkar via `/go/`, tabellvärden och konstanter rörs aldrig av den som skriver.

Kort svar (`kortSvar` i frontmatter): tre till fem hela meningar som svarar på frågan i rubriken, blockstil `|` med blankrad mellan stycken, högst en `**markering**` runt nyckeltalet. Ingressen och beskrivningen (`description`) är meningar, inte uppräkningar.

### Källan står kvar men bär inte meningen

Tillagt 2026-09-29 efter startlista 3. Läsaren gav sidorna 4 var för sig men hörde en dialekt när de lästes i följd, och den kom inte ur förbjudna ord utan ur gester som är rätt en gång och upprepades på varje sida. Kravet på källa för varje tal står kvar. Så här gör du:

- Saken först, källan efter. Meningen börjar med vad som gäller eller vad läsaren gör. Källan nämns en gång per stycke, efter saken, eller i raden under tabellen. Säger tre källor samma sak räcker en mening om att de är överens. Räkna på din egen sida hur många meningar som har en tillverkare eller myndighet som subjekt eller slutar med "enligt X"; är det fler än några stycken skriver du om dem.
- Egen bedömning märks en gång, där den ändrar vad läsaren gör, och sägs som ett råd med skäl. "Trappan är min" låter som en person; "Omräkningen är min", "som jag läser det" och "mitt råd och ingen regel" som slutkläm låter som en friskrivning. En uträkning ur källans tal behöver ingen märkning i löptexten; behövs den står den i källraden.
- Det källorna inte säger skrivs bara när läsaren annars skulle leta efter talet eller gissa fel, och då följt av vad hon gör i stället. Annars stryks meningen, och i en tabell får cellen vara tom eller raden gå bort i stället för "anges inte".
- När källorna är oense tar du upp det bara om skillnaden ändrar vad läsaren köper eller gör. Då väljer du en och säger vad som händer med huset om man väljer fel. Skälet "det är den strängare gränsen" räcker inte, och "säger olika ... jag väljer X, eftersom" ska inte gå att hitta på två syskonsidor.
- Det som redan står på en syskonsida skrivs inte om: rotavdragets tal, c-förklaringen, EKS-historiken, pristabellen, friskrivningen om att köket inte är renoverat. Skriv det som gäller för just det här jobbet i en mening och länka. c förklaras med delen på den här sidan och i egna ord; regelhistoria står bara där regeln är frågan.
- Normal ordföljd. "Takytan multiplicerar jag" och "Rännan delar jag" blir meningar där saken eller du är subjekt. När den omvända ordföljden rättas får inte "Jag tar, jag delar, jag multiplicerar" ta dess plats; växla mellan saken, du och jag.
- Länktexten säger vad läsaren hittar där, med nya ord varje gång. Inte "det går jag igenom i [...]", inte "står i guiden om".
- I räknarna står hänvisningen till källtabellen en gång, eller inte alls om tabellen syns under rubriken, aldrig efter varje regel. Beskedet och spalten skrivs ur räknarens eget jobb: lägg syskonräknarens spalt bredvid din och bygg om varje rad som följer samma ordning och form.

Före och efter, ur sidorna:

- Före: "Rännan ska luta mot stupröret med minst 2,5 mm per meter. Det skriver Plannja, Lindab och Teknikhandboken, och både standarden och AMA Hus, som beskriver hur byggarbeten ska utföras, räknar med det fallet." Efter: "Låt rännan luta minst 2,5 mm per meter mot stupröret, så sjunker den 25 millimeter på tio meter. Plannja, Lindab och Teknikhandboken anger samma fall." (hängrännor)
- Före: "Totalbyggarna tar 350 kronor i timmen efter rotavdraget för att byta luckor, och före avdraget blir det 500 kronor. Omräkningen är min." Efter: "Totalbyggarna tar 500 kronor i timmen för att byta luckor, och efter rotavdraget betalar du 350." (byta köksluckor)
- Före: "Kilowatten multiplicerar jag med gångtiden per dygn och får kilowattimmar per dygn." Efter: "Effekten i kilowatt gånger timmarna maskinen går per dygn ger kilowattimmar per dygn." (elkostnad)

Granska alltid tre sidor i följd, inte en: räkna källsubjekten, förbehållen och tystnaderna, och läs de stycken som handlar om samma sak på syskonsidorna bredvid varandra.

## 2. Designsystemet

Allt byggs av tokens i `src/styles/global.css`. Ingen komponent uppfinner en färg, en storlek eller en radie.

**Färger.** `papper` (#f5efe3, bakgrund), `papper-2` (kort och fält), `linje` (ramar och linjerat papper), `blyerts` (all text och alla konturer), `blyerts-2` (sekundär text, mått, skraffering), `penna` (#ad3519, den enda färg som skriver: länkar, knappar, pennstrecket under rubriker, det som pekar i en bild), `tumstock` (#e8b830, överstrykningspennan bakom ett tal, aldrig bakom en rad, aldrig som knapp), `ok`, `varning`, `vit` (bara bakom produktbilder). `--color-*: initial` gör att inget annat går att använda.

**Typografi.** Zilla Slab 600 för rubriker, Atkinson Hyperlegible 400 och 700 för allt annat, tre self-hostade woff2 under 64 kB totalt. Caveat är handskriften i illustrationerna och finns aldrig som webbfont; den konverteras till banor. Typskalan är tokens: `text-brod`, `text-ingress`, `text-h1` till `text-h3`, `text-kortrubrik`, `text-etikett`, `text-liten`, `text-finstilt`, `text-siffra` för det stora talet i en räknare. Mobil först, alla skisser ritas för 375 px.

**Signaturelement.** Pennstrecket under varje H2 (`Pennstreck.astro`), ett per rubrik, aldrig under H3 eller länkar. Markeringen (`Markering.astro`) bakom ett nyckeltal per block. Det linjerade papperet bakom kortsvar och räknarens resultatspalt, aldrig som sidbakgrund. Ikoner bara ur spriten `src/assets/brand/riktning-1/ikoner.svg`, samma streckstil, aldrig i löptext eller framför rubriker.

**Radier och skuggor.** Bara `sm` och `md`. Skugga bara på mobilmenyn (`lyft`). Inga kort med skugga.

**Mallsignaler som aldrig byggs** (DESIGN.md avsnitt 8): hero med bakgrundsbild, tre kolumner med ikon och påstående om sajten, gradienter, piller-knappar, stjärnbetyg, rabattmärken, grönt "i lager", fasta köpknappar, popup och banderoller, animationer utöver 150 ms färgövergång, karuseller och dragspel som döljer innehåll, runda författarbilder, "Läs mer"-knappar, text på bild, rubriker i formen "X: Y".

## 3. Sidmallarna

Varje sidtyp har en mall i `src/components/vyer/` och en beskrivning i DESIGN.md avsnitt 5 och SPEC-SIDMALLAR.md avsnitt 4. Innehållsfiler importerar ingenting; mallen skickar de tillåtna komponenterna (`Faktaruta`, `Varning`, `Verktygskort`, `Kalkylator`, `Markering`, `Illustration`, `Faq`, `Tabellyta`, och i guider även `Produktkort`, `Kopknapp`, `Jamforelsetabell`).

- **Artikel** (guider, kunskap): brödsmulor, etikett med typ och nivå, H1, ingress, kort svar på linjerat papper, huvudbild, brödtext med H2 som pennstreck, källförteckning, Faq sist om den finns, författarruta. Svaret ska stå i första skärmen på mobil.
- **Pelarhub**: H1, ingress, sedan grupperna Hitta felet, Välj rätt, Gör det själv och Räkna som mallen bygger själv. Ingen brödtext i hubfilen. Publiceras vid minst fem sidor.
- **Kategorisida** (bäst i test): våra val med tre konkreta etiketter, jämförelsetabell från databasen med köpknapp i sista raden, "Så väljer du" som länkar till köpguiden, alla tester och jämförelser i kategorin.
- **Test**: etiketten Test eller Granskning i H1-blocket, omdömesblock med första köpknappen, mätningar "vi mätte" mot "tillverkaren uppger", "Så testade jag" med sista knappen.
- **Räknare** (`/rakna/`): H1 och ingress med varumärkesbilden till höger, kort svar i faktaruta, formulär och resultatspalt på linjerat papper. Spalten bär bara beskedet (en mening med verb), det stora talet, en pekrad och länkarna. Reglerna med källa står under H2 "Därför blev svaret så", "Gör inte det här" som egen rubrik, "Så räknar jag" med skissen och antagandetabellen i `<Tabellyta>`, "Läs vidare", Faq.
- **Tabeller** i brödtext: talen i raka kolumner, bästa värdet markerat, enheten i radrubriken, källan på en rad under tabellen, aldrig som kolumn. Breda tabeller läggs i `<Tabellyta kolumner={n}>` som ger raden "Dra i sidled" på mobil.

## 4. Illustrationerna

Två sorters bilder, med olika regler. Detaljerna står i DESIGN.md avsnitt 7 och skall följas ordagrant; det här är vad som skiljer dem.

**Skissen** förklarar något. Blyerts på linjerat papper, 600 × 360, en linjebredd per lager, raka linjer som aldrig är helt raka, skraffering för mark och betong, snickarpennan i `penna` för det enda som pekar, handskrift i Caveat 500 minst 24 px i skalan (22 som absolut minimum), ett nyckeltal med gul markering, mått som byglar. Inga människor, inga verktyg i drift, inga produktbilder. Källan med `<text>` ligger i `src/assets/illustrationer-kallor/[pelare]/[namn].svg`; `npm run illustrationer` konverterar handskriften till banor och skriver den publicerade filen i `src/assets/illustrationer/[pelare]/`. Under 40 kB. I MDX: `<Illustration namn="fukt/tejptest" alt="..." bildtext="..." />`. `alt` under 125 tecken och säger vad bilden visar; måtten och detaljerna går i `bildtext`. `namn` rörs aldrig.

**Varumärkesbilden** säger vem vi är och står bredvid en H1. Logotypens stil: konturer i `blyerts` 2 px med runda ändar, `tumstock` som enda fyllda färg, ingen text, inga läsbara tal, ett pennstreck som signatur, transparent bakgrund, inga pyttedetaljer. Motivet ska förstås på en sekund av en sjuåring, fyller 90 till 94 procent av bredden, och tumstocken får finnas med som accent men är inte obligatorisk. Varje räknare har en i `src/assets/illustrationer/rakna/varumarke/[slug].svg`. Startsidans hero är förebilden.

**Huvudbilden** i frontmatter (`bild`, `bildtext`) renderas efter kortsvaret. Mallen använder hela `bildtext` som alt, så håll den under 125 tecken tills schemat får ett eget alt-fält.

**Delningsbilder** (`public/og/`) genereras av `npm run delningsbilder` ur skissen och namnet i registret. Rita aldrig en för hand.

**Diagram** följer skissernas hand: axlar i `blyerts-2`, en serie i `penna`, nyckeltalet markerat, `role="img"` med `aria-label`, max 343 px på mobil utan scroll, ingen hover, inga tårtor.

## 5. Att bedöma text och bild

Text bedöms med örat, mot ROST.md avsnitt 3 och mot två syskonsidor i den nya rösten: samma inledning, samma slutkläm eller samma förklaring på båda är retur. Aldrig mot gamla sidor, de är anledningen till att sajten skrevs om. Det mekaniska (längder, tankstreck, alt, förbjudna fraser, räkneord) kontrolleras av `npm run kontrollera`, inte av en agent.

Bild bedöms mot listan i DESIGN.md avsnitt 7 och bilaga A, på 375 px först. Frågan är alltid: förstår en läsare motivet innan rubriken är läst, och är det en sak som pekar?
