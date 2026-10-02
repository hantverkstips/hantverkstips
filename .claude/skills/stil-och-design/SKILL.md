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

Sedan 2026-10-02 följer sajten fem skisser som Christian godkände rakt av ("exakt så här ska alla sidor se ut"). Formen i en mening: **block på linjerat papper med ram och hård skugga, pappersrutor runt bilderna, gula runda symboler, chips, knappar i fylld penna, svaret som färgad yta och det stora talet som bild.** Den äldre formen (urklipp utan skugga, linjerat papper med röd marginallinje) står inte kvar som alternativ. Allt byggs av tokens och komponentklasser i `src/styles/global.css`. Ingen komponent uppfinner en färg, en storlek, en radie eller en skugga, och ett utseende som står på tre element eller fler på samma sida är en komponentklass, inte en rad verktyg (budgeten).

**Färger.** `papper` (#f5efe3, sidbakgrund och kortens yta), `papper-2` (band, färgade ytor, chips, kortens skugga), `ruta` (#faf6ec, pappersrutan runt en bild och blockens papper), `linje` (ramar, papperets linjer), `blyerts` (all text), `blyerts-2` (sekundär text, fältens ram), `penna` (#ad3519, skriver: länkar, knappar, pennstrecket, etiketten som pekar), `tumstock` (#e8b830, markerar: bakom ett tal, i etikett-chips, i den runda symbolen, i numrerade steg, i mätarens fyllning, aktuell pelare), `ok`, `varning`, `vit` (bakom produktbilder och i formulärfält). Text på gult är alltid blyerts. `--color-*: initial` gör att inget annat går att använda.

**Typografi.** Zilla Slab 600 för rubriker och stora tal, Atkinson Hyperlegible 400 och 700 för allt annat, tre self-hostade woff2 under 64 kB totalt. Typskalan är tokens, med `text-h1-xl` (54 px) bara för startsidans H1, `text-kortrubrik-xl` (32 px) för det stora kortet och `text-siffra-xl` (84 px) för räknarens svar. Handskrift (Caveat) finns bara inne i illustrationerna, konverterad till banor; i gränssnittet aldrig, och skissernas handskrivna rader blir en etikett eller stryks. Mobil först, allt ritas för 375 px.

**Byggstenarna** (DESIGN.md avsnitt 4 och 6). *Kort* (`.kort`): papper, 1 px linje, radie 4 px, skugga `2px 3px 0 papper-2`, som byter till linje vid hover när hela kortet är en länk. *Pappersruta* (`.pappersruta`): ruta med 12 px luft runt bilden i ett kort. *Block* (`.blad`): ett kort på linjerat papper, ruta med linjer var 28:e px, för det man fyller i eller tittar på (startsidans hero, räknarens formulär, inbäddad räknare, hubbens bild). *Färgad yta* (`.yta`): papper-2 med ram utan skugga, för Kort svar, räknarens svar, Gör inte det här. *Band* (`.band`): papper-2 i full bredd mellan sektioner. *Chip* (`.chip`, rund, minst 44 px hög) och *gul chip* (`.chip-gul`, produktens roll, aldrig en länk). *Knapp* (`.knapp` kontur, `.knapp-fylld` fylld penna; hover blyerts). *Symbol* (gul rund stämpel med pelarikonen i ämneskortet) och *steg* (gul rund siffra i en numrerad lista). *Kompakt lista* när posterna är många. *Mätare* i räknaren när den har en gräns.

**Signaturelement.** Pennstrecket under varje H2 (`Pennstreck.astro`), aldrig under H3, länkar eller Källor. Markeringen bakom ett nyckeltal, högst två per skärm. Ikoner bara ur spriten, med text bredvid, aldrig i löptext eller framför rubriker.

**Mallsignaler som aldrig byggs** (DESIGN.md avsnitt 8): hero med bakgrundsbild, påståenden om sajten i kolumner (utom startsidans Så jobbar jag: tre kontrollerbara arbetssätt, en gång), gradienter, mjuka skuggor på annat än mobilmenyn, kort som lyfter vid hover, piller-knappar (chips är inte knappar), stjärnbetyg, rabattmärken, grönt "i lager", fasta köpknappar, popup och banderoller, animationer utöver 150 ms färgövergång, karuseller och flikar, runda porträtt utom porträttplatsen, handskrift som HTML, "Läs mer"-knappar, text på bild, rubriker i formen "X: Y".

## 3. Sidmallarna

Varje sidtyp har en mall i `src/components/vyer/` (eller en sida i `src/pages/`) och en beskrivning i DESIGN.md avsnitt 5 och SPEC-SIDMALLAR.md avsnitt 4. Innehållsfiler importerar ingenting; mallen skickar de tillåtna komponenterna.

- **Startsidan** (5.1): heroblock med säsongsetikett, H1, stycke, säsongsrad ur `src/lib/sasong.ts`, tre knappar och sifferrad; ämneskorten som band (den största pelaren två kolumner); Börja här med ett stort kort och fyra i rad; Granskat på datablad med valen och priserna med datum; Räkna själv som band med tre talkort och en kompakt lista; Så jobbar jag.
- **Pelarhubben** (5.2): rubrikband med brödsmulor, etikett, H1, ingress, chips till grupperna och hubbens bild i ett block; Börja här; Hitta felet, Välj rätt, Gör det själv med kort; Räkna som band; Läs i ordning och grannar när hubfilen har dem. Fukt ordnas efter plats, med den kompakta listan i ett kort.
- **Artikeln** (5.3 till 5.5): huvud med etikett i penna, H1 och byline med porträttplats; smalt reklamband när sidan har köpknappar; huvudbilden i ett kort med pappersruta; Kort svar som färgad yta; högerspalt från 1024 px med innehåll, produkterna jag nämner, verktygskort och Så jobbar jag; produktkort med gul chip, tre fakta, svagheten, pris med datum och knapp; räknaren inbäddad som block; Vanliga frågor som details; Källor som numrerad lista; Läs vidare som band med kort.
- **Kategorisidan** (5.6): artikelns form, med valen som band och jämförelsetabellen i sidbredd.
- **Räknaren** (5.8): huvud utan bild; formuläret som block och svaret som färgad yta sida vid sida från 1024 px (svaret först på mobil); stort tal, mätare vid gräns, statusrad, råden som numrerade steg i ett kort, delningsraden med markerbar adress; Därför blev svaret så och Gör inte det här till vänster, Så räknar jag med skiss och tabell i ett kort till höger. Fälten vita med blyerts-2-ram och enheten i fältet, radioknappar som knappar, förval som chips.
- **Räkna själv-indexet** (5.8.1): rubrikband med "Prova direkt" (daggpunkten inbäddad), grupperna ur `src/lib/kalkyl/grupper.ts` som kort med varumärkesbild eller kompakt lista.
- **Tabeller**: ram runt varje cell, tabellhuvud i papper-2, talen i raka kolumner, enheten i radrubriken, källan på en rad under. Breda tabeller i `<Tabellyta kolumner={n}>`.

## 4. Illustrationerna

Två sorters bilder, med olika regler. Detaljerna står i DESIGN.md avsnitt 7 och skall följas ordagrant; det här är vad som skiljer dem.

**Skissen** förklarar något. Blyerts på linjerat papper, 600 × 360, en linjebredd per lager, raka linjer som aldrig är helt raka, skraffering för mark och betong, snickarpennan i `penna` för det enda som pekar, handskrift i Caveat 500 minst 24 px i skalan (22 som absolut minimum), ett nyckeltal med gul markering, mått som byglar. Inga människor, inga verktyg i drift, inga produktbilder. Källan med `<text>` ligger i `src/assets/illustrationer-kallor/[pelare]/[namn].svg`; `npm run illustrationer` konverterar handskriften till banor och skriver den publicerade filen i `src/assets/illustrationer/[pelare]/`. Under 40 kB. I MDX: `<Illustration namn="fukt/tejptest" alt="..." bildtext="..." />`. `alt` under 125 tecken och säger vad bilden visar; måtten och detaljerna går i `bildtext`. `namn` rörs aldrig.

**Varumärkesbilden** säger vem vi är: startsidans hero, och räknarens bild i Verktygskortet och på räkna-indexet. Logotypens stil: konturer i `blyerts` 2 px med runda ändar, `tumstock` som enda fyllda färg, ingen text, inga läsbara tal, ett pennstreck som signatur, transparent bakgrund, inga pyttedetaljer. Motivet ska förstås på en sekund av en sjuåring, fyller 90 till 94 procent av bredden, och tumstocken får finnas med som accent men är inte obligatorisk. Varje räknare har en i `src/assets/illustrationer/rakna/varumarke/[slug].svg`. Startsidans hero är förebilden. Räknarsidans huvud har sedan 2026-10-02 ingen bild.

**Huvudbilden** i frontmatter (`bild`, `bildtext`) renderas i ett kort med pappersruta, efter Kort svar på mobil och före från 1024 px. Mallen använder hela `bildtext` som alt, så håll den under 125 tecken tills schemat får ett eget alt-fält.

**Delningsbilder** (`public/og/`) genereras av `npm run delningsbilder` ur skissen och namnet i registret. Rita aldrig en för hand.

**Diagram** följer skissernas hand: axlar i `blyerts-2`, en serie i `penna`, nyckeltalet markerat, `role="img"` med `aria-label`, max 343 px på mobil utan scroll, ingen hover, inga tårtor.

## 5. Att bedöma text och bild

Text bedöms med örat, mot ROST.md avsnitt 3 och mot två syskonsidor i den nya rösten: samma inledning, samma slutkläm eller samma förklaring på båda är retur. Aldrig mot gamla sidor, de är anledningen till att sajten skrevs om. Det mekaniska (längder, tankstreck, alt, förbjudna fraser, räkneord) kontrolleras av `npm run kontrollera`, inte av en agent.

Bild och sida bedöms mot listan i DESIGN.md avsnitt 7 och bilaga A, på 375 px först, och mot skisserna som DESIGN.md avsnitt 5 beskriver. Frågan är alltid: förstår en läsare motivet innan rubriken är läst, och är det en sak som pekar?
