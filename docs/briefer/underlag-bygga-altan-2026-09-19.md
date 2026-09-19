# Underlag: Bygga altan

Sökanalys och faktaunderlag till `src/content/guider/altan/bygga-altan.mdx`, adress `/altan/bygga-altan/`. Skrivet av skribenten 2026-09-19. Huvudfras "bygga altan", 3 600 sökningar per månad, topp april till maj. Typ projektguide, pelare altan, nivå mellan, målgrupp båda.

Kompletterar `docs/briefer/underlag-kalkyl-altan-2026-09-17.md`, som är faktakällan bakom `src/lib/kalkyl/altan.ts`. Avsnitt 5 nedan redovisar de fem verifieringspunkterna i det dokumentets avsnitt 7, gjorda i webbläsare 2026-09-19.

## 1. Sökintention

Frasen är informativ och projektorienterad. Den som söker har bestämt sig för att bygga och vill veta ordningen, måtten och vad som ska köpas. Två frågor ligger under ytan utan att stå i frasen:

- Behöver jag bygglov? Den frågan ställs efter att virket är köpt hos nästan alla som ställer den för sent.
- Hur mycket virke går det åt? Den frågan skickar folk till kalkylatorer på byggvaruhusens sidor.

Sekundära fraser som samma sida rimligen fångar: "bygga altan på plintar", "avstånd mellan reglar altan", "hur bygger man altan steg för steg", "altan trall tjocklek".

## 2. De tre översta organiska resultaten

Lästa 2026-09-19.

**1. K-Bygg, Snickarskola: Bygg altan** (`k-bygg.se/rad-och-guider/altan/snickarskola-bygg-altan`, uppdaterad 2026-06-15). Sju steg: planering och mätning, trall, val av grund, sätt grunden, montera trall, bygg fris, ut och njut. Namngiven snickare (Oskar Boström) i bild genom hela guiden, vilket ger den trovärdighet ingen av de andra har. Tal den anger: maxavstånd mellan plintar bör inte överstiga 2 m, gräv 50 till 70 cm ner i grusjord, bärlina minst 45 × 170 mm, spännvidd mellan bärlinor bör inte överstiga 2 m, avstånd mellan åsar 60 till 70 cm, trall 28 × 120 har högre bärighet, standardstorlekar 28 × 120, 22 × 95 och 34 × 145, springa "ca ett tumstocksblad", minst C4 trallskruv, trallklass G4-2 eller G4-3. Ingen tabell, ingen källhänvisning till ett enda av talen, ingen kalkylator, inget om bygglov, ingen samlad verktygslista (sågar och skruvdragare nämns i löptexten).

**2. Byggmax, Bygga altan** (`byggmax.se/bygga-altan`). Sidan är i praktiken en produktnavigation med en kort guide i. Talen som går att läsa: stödpunkter högst 2 m isär, bärlina 45 × 170 mm. Ingen tabell, ingen källa, inget bygglov.

**3. Hornbach, Bygg trädäck och altan på plintar** (`hornbach.se/projekt/bygga-altan-pa-plintar/`). Projektsida med steglista och materialräknare knuten till sortimentet. Innehållet gick inte att läsa maskinellt, bara navigationen; bedömningen bygger på sökträffens text och på sidans uppbyggnad.

Bakom dem ligger Bolist (reglar c 600 mm mellan bärlinorna), husgrunder.com (reglar, stolpar och plintar) och en rad byggfirmor som skriver altantext som lead-generering.

**Sammanfattning av vad ettan faktiskt äger.** Den äger hantverkaren. Oskar Boström står i bild och gör momenten, och det är därför sidan känns rätt. Ordningen är riktig och stegen är de rätta. Vi slår den inte på stämning, och vi ska inte försöka.

## 3. Bättre än ettan

Sex punkter, alla mätbara i den färdiga texten.

1. **Dimensionstabell med källa.** Ettan har inte en enda tabell och inte en enda källhänvisning. Vår sida har trallens tjocklek mot största centrumavstånd och skruvlängd, hämtad ur TräGuidens tabell 1, med källraden under. Den tabellen är hela skälet till att c 600 mm är c 600 mm, och ettan säger "60 till 70 cm" utan att säga varför. 70 cm är dessutom för långt för 28 mm trall enligt samma tabell.
2. **Springan som ett mått, inte som ett tumstocksblad.** Ettan skriver "ca ett tumstocksblad emellan". TräGuidens tabell 3 anger kant-till-kant-avstånd per brädbredd, alltså 5 mm för en bräda på 95 mm, 6 mm för 120 mm och 7 mm för 145 mm. Vår sida ger talet för den bredd läsaren köpt.
3. **Bygglovsfrågan före första spadtaget.** Ettan nämner inte bygglov. Vår sida tar höjdregeln i det första avsnittet, bäddar in `bygglov-altan`-verktyget där, och länkar till kunskapsartikeln för hela regelverket. Det är den enda punkten på hela sidan som kan kosta läsaren en byggsanktionsavgift.
4. **Kalkylatorn inbäddad där talen förklaras.** Ettan har ingen räknare. Vår sida har `<Kalkylator namn="altan" />` i avsnittet om bärlinor och reglar, alltså exakt där läsaren just fått veta vad regeldimension och spännvidd betyder, och den räknar trall, reglar, bärlinor, plintar och skruv på läsarens egna mått.
5. **Plintavståndet som ett räknat tal, inte en tumregel.** Ettan skriver att avståndet mellan plintar "inte bör överstiga 2 meter", Byggmax skriver samma sak, och ingen av dem säger vad talet hänger på. Svenskt Träs Lathunden ger plintavståndet per bärlinedimension och per reglarnas fria längd, och det landar ofta under en och en halv meter. Vår sida säger det rakt ut och pekar på tabellen. Den som bygger efter ettans tumregel gräver för få hål.
6. **Ordningen som gör altanen rak.** Ettan bygger rätt men säger aldrig varför ordningen är ordningen. Vår sida säger vilket moment som låser vilket: diagonalerna före plintarna, fallet i reglarna före trallen, första brädan före resten. Det är de tre ställen där en hemmabyggd altan går fel, och alla tre är omöjliga att rätta efteråt.

## 4. Rubrikstruktur och interna länkar

H1: Bygga altan, från plint till sista trallskruven.

H2-ordning: bygglovet först, sedan utsättningen, plintarna, stommen med kalkylatorn, fallet, trallen med dimensionstabellen, frisen och avslutet, felen.

Länkar ut:
- `/altan/bygglov-altan/` i första avsnittet. Kunskapsartikeln saknade inlänk från någon annan innehållsfil före den här sidan.
- `/altan/tradack-pa-mark/` i plintavsnittet, för det låga däcket direkt på mark eller plattor.
- `/altan/reglar-avstand-och-dimensioner/` i stomavsnittet, för hela spännviddstabellen.
- `/altan/trallskruv/` i trallavsnittet, för valet av skruv.
- `/rakna/altan/` och `/rakna/bygglov-altan/` via komponenterna.

Länkar in som saknas, med förslag i rapporten: bygglovsartikeln, trallskruvsidan, trädäckssidan och regelsidan bör alla peka hit.

## 5. De fem verifieringspunkterna

Från `underlag-kalkyl-altan-2026-09-17.md` avsnitt 7. Kontrollerade 2026-09-19.

**1. Tabell 1 och 2, tjocklek mot c-mått och skruvlängd. Bekräftad.** TräGuiden, Läggning av trall, läst i sin helhet: 22 mm på under 400 mm med 45 mm skruv, 26 mm på under 450 mm med 55 mm skruv, 28 mm på under 600 mm med 55 mm skruv, 34 mm på under 800 mm med 75 mm skruv. Halslängderna 22, 28, 28 och 34 mm. Tabell 2 ger samma trappa för kamspik. Svenskt Träs broschyr på byggbeskrivningar.se ligger fortfarande som bilder och gick inte att läsa; kontrollen är alltså gjord mot TräGuiden, som drivs av samma organisation.

**2. Tabell 3, kant-till-kant-avstånd. Bekräftad, alla fem rader.** Impregnerad furu i NTR A eller NTR AB: 45 mm bred bräda ger 48 mm, 70 ger 74, 95 ger 100, 120 ger 126 och 145 ger 152 mm. Alltså springor på 3, 4, 5, 6 och 7 mm. Samma sida anger minst 4,2 mm skruvdiameter, förborrning 3 till 3,5 mm, infästning 30 mm från kanten för brädor bredare än 70 mm och högst 3 mm fogsprång i den färdiga beläggningen.

**3. Spännvidd för 45 × 170 och 45 × 195 mm vid c 600 mm. Bekräftad, men inte av mig.** Mina egna försök gick i stå: Altanplaneraren visar bara raden för 45 × 145 mm (2,60 m vid c 400 mm och 2,30 m vid c 600 mm), Peters Projekt säljer Svenskt Träs tabell som PDF utan att visa den, och Byggahus svarade 403. Under tiden landade systersidan `/altan/reglar-avstand-och-dimensioner/`, som hittade tabellen i Svenskt Träs Lathunden, utgåva 8:2021, sid. 30: 2,31 m för 45 × 145 mm, 2,71 m för 45 × 170 mm och 3,11 m för 45 × 195 mm vid c 600 mm. Det bekräftar kalkylatorns tal på centimetern, och `src/lib/kalkyl/altan.ts` är sedan 2026-09-19 ändrad så att raderna inte längre är märkta antagande. **Följd för texten:** artikeln anger bara raden för 45 × 145 mm, nu med Lathunden som källa, och skickar läsaren till systersidan för hela tabellen.

Samma find vände upp och ner på plintavståndet. Lathunden sid. 24 ger plintavstånd per bärlinedimension och per reglarnas fria längd, och talen är betydligt tätare än den tumregel på 2,5 m som både TräGuiden i ord och vår egen kalkylator utgick från. En bärlina på 45 × 170 mm under reglar som spänner 3,6 m tål 1,47 m mellan plintarna. Kalkylatorns `PLINTAVSTAND_M` är därför ändrad från en fast konstant till Lathundens tabell. Artikeln är skriven mot den nya läsningen och säger uttryckligen att 2,5 m kräver en bärlina på 45 × 220 mm.

**4. Förpackningsstorlekar på trallskruv 4,2 × 55 mm i A4. Bekräftad, och kalkylatorn är rättad.** De storlekar som faktiskt säljs är 250 och 1 000. Biltema, Beijer, Bauhaus, K-Bygg, Byggmax och Essve själva listar alla 250-pack, och K-Bygg, Byggvaror och Essve listar hink om 1 000. Ingen av dem hade ett 500-pack. `FORPACKNINGAR` stod som `[250, 500]` och är sedan 2026-09-19 `[250, 1000]`, efter samma butikskontroll från trallskruvsidan. **Följd för texten:** artikeln skriver ändå inget förpackningstal, eftersom det är den inbäddade räknaren som ska svara på hur många skruv just din altan kräver.

**5. Fallet 1:100. Bekräftad.** Byggbeskrivningen Montering av trall anger cirka 1:100, alltså ungefär 0,5 grader, och 6 mm rörelsefog mot vägg, grund och stolpe. Svenskt Trä anger inget eget minsta fall för altaner mot husvägg utöver det.

## 6. Fakta som används i texten, med källa

| Uppgift | Värde | Källa |
|---|---|---|
| Trall 28 mm | c 600 mm, skruv 55 mm | TräGuiden, tabell 1 |
| Trall 22 mm | c 400 mm, skruv 45 mm | TräGuiden, tabell 1 |
| Trall 34 mm | c 800 mm, skruv 75 mm | TräGuiden, tabell 1 |
| Springa, 120 mm bräda | 6 mm | TräGuiden, tabell 3 |
| Skruv per korsning | Två, 30 mm från kant | TräGuiden |
| Skruvdiameter | Minst 4,2 mm | TräGuiden |
| Förborrning | 3 till 3,5 mm | TräGuiden |
| Fogsprång, färdigt golv | Högst 3 mm | TräGuiden |
| Regel 45 × 145 mm vid c 600 mm | 2,31 m fri längd | Svenskt Trä, Lathunden 8:2021 |
| Bärlina 45 × 170 mm, reglar 3,6 m | 1,47 m mellan plintar | Svenskt Trä, Lathunden 8:2021 |
| Bjälke i principlösningen | Minst 45 × 170 mm på c 600 mm | TräGuiden, Altanbjälklag |
| Egentyngd altanbjälklag | Cirka 0,60 kN/m² | TräGuiden, Altanbjälklag |
| Träskyddsklass | NTR A mot mark, NTR AB ovan mark | Svenskt Trä, byggbeskrivningen Altan |
| Fall ut från huset | Cirka 1:100 | Svenskt Trä, Montering av trall |
| Rörelsefog mot vägg | 6 mm | Svenskt Trä, Montering av trall |
| Tjäldjup | 1,1 m i Skåne till 2,5 m i övre Norrland | TräGuiden, Grundläggningsdjup |
| Bygglovsgräns, höjd | 1,8 m inom 3,6 m från byggnad | Boverket och PBL, via vår egen kunskapsartikel |

Källraden i artikeln presenterar TräGuiden och Svenskt Trä som branschorganisation första gången, enligt stilguidens regel 8.

## 7. Det vi inte kunde hämta

- **byggbeskrivningar.se, Montering av trall.** Tabell 1 till 3 ligger som bilder. En maskinell läsning gav tal som inte stämmer med TräGuidens (till exempel "32 mm bräda, 70 mm skruv"), alltså en feltolkning av bilderna. Talen i artikeln är därför TräGuidens, som publicerar samma tabeller som text. Chefredaktören bör ändå öppna sidan med ögonen en gång.
- **byggahus.se.** Svarar 403 på både `/bygga/` och `/forum/`. Både plintartikeln och forumtråden om spännvidd är oläsbara för oss.
- **hornbach.se/projekt/bygga-altan-pa-plintar/.** Bara navigation, inget projektinnehåll.
- **byggmax.se/bygga-altan.** Bara navigation.
- **petersprojekt.se, spännviddstabell.** Tabellen säljs som PDF och visas inte på sidan.
- **Svenskt Träs egen spännviddstabell för altanbjälklag.** Hittad som hänvisning på tre ställen, aldrig som läsbar tabell. Det är den som ska stänga verifieringspunkt 3, och den hör hemma på `/altan/reglar-avstand-och-dimensioner/`, som äger tabellen.
- **Frostfritt djup för just altanplintar.** De sidor som anger tal (0,9 till 1,2 m i söder, 1,6 m i norra inlandet, grusbädd 100 till 150 mm) är markfirmors bloggar utan källa. Artikeln använder därför TräGuidens tjäldjup och säger rakt ut att plintens djup är en fråga för kommunen och för marken, inte ett tal vi kan ge.
