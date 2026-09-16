# Granskning 2026-09-16, fyra texter

Granskad av chefredaktören enligt rollbeskrivningens tre pass: mekaniskt mot stilguidens förbudslista, som läsare, som hantverkare och faktagranskare. Varje text är dessutom avbockad mot briefens bindande lista "Bättre än ettan", frontmattern är kontrollerad, och alla interna länkar är kontrollerade mot filer som byggs.

Beslut från koordinatorn som gällt över briefen: elpriset är 2,40 kr/kWh med SCB som källa (hushåll 5 000 till 14 999 kWh/år, juli till december 2025, inklusive nätavgift, skatt och moms). Gipsskruv är projektguide under `/inomhus/` med verktygslista. Rubriken "Så här såg det ut hemma hos oss i [månad]" och mätplatshållarna får stå tills Christian mätt, förutsatt att läsaren förstår att mätningen pågår.

Ingen text är ändrad av mig. Inga stavfel hittades som krävde rättning.

## Gemensamt för alla fyra

**Pass 1, mekaniskt.** Sökning i alla fyra filer efter tankstreck (– och —), emojis, fetstil först i punkter, rubriker i formen "X: Y", frågerubriker, "man" som tilltal, "Detta" i meningsbörjan, samtliga förbjudna fraser och inledningar, och hedgingfraserna. Noll träffar. Enda gränsfallet är "mögel och inte bara vått" i luftfuktighetstexten, som inte är konstruktionen "inte bara X, utan också Y" och därför går. Treklanger: de som finns är faktiska uppräkningar (tre fuktkällor i bildtexten, tre steg i H2-rubriken vädra, värma, avfukta) och kommer ur briefen, inte slentrian.

**Platshållare.** Fyra sorters platshållare finns i texterna. Mätplatshållarna "[MÄTNING SAKNAS: ...]" är formulerade så att läsaren förstår att det är en pågående mätning, men på två ställen står de utan inledande mening (se krav nedan). Länkplatshållarna "[LÄNK NÄR SIDAN FINNS: ...]" ligger som synlig text i tre av fyra texter; de ska vara MDX-kommentarer, eftersom en läsare annars ser en trasig länk. "[TEST SAKNAS, länk till sida 14: ...]" innehåller intern jargong som ingen läsare förstår.

**Länkmål.** Alla länkar går till sidor som byggs: `/fukt/luftfuktighet-inomhus/`, `/fukt/avfuktare-kallare/`, `/fukt/sorptionsavfuktare/`, `/fukt/fukt-i-kallaren/` (utkast: false), `/luftavfuktare/`, `/rakna/avfuktare/`, `/om/sa-testar-vi/` (utkast: false). Filerna `skruva-i-gipsvagg.mdx` och `gipsplugg.mdx` har `utkast: true` och byggs inte, så platshållare är rätt där. Tejptestet som två texter hänvisar till finns i `fukt-i-kallaren.mdx` och tar två dygn med plastfolie, så hänvisningarna stämmer.

**Description.** Alla fyra är under 155 tecken: 145, 145, 135 och 150.

**Längd** (ord i löptext, exklusive tabeller och komponenter): luftfuktighet 1 348 (brief 1 100 till 1 500), avfuktare 1 603 (1 600 till 2 200), gipsskruv 1 182 (1 000 till 1 400), sorption 1 882 (1 400 till 1 900). Alla inom ramen.

**SCB-källan.** URL:en `https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris` står i två texter. Produktexperten kontrollerar att den leder till rätt tabell innan publicering. Beloppen är räknade rätt i båda texterna (kontrollerat rad för rad).

---

## 1. Luftfuktighet inomhus

Fil: `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`

**Pass 2, som läsare.** Svaret finns i kortSvar med 75 procent markerat. Texten börjar i situationen (grannen med hygrometern, imma på sovrumsfönstret) och tar ställning direkt: 65 i juli är ingenting, 65 i januari är det. Konkreta situationer hela vägen: källartrappan, garderoben mot ytterväggen, saltburken på köksbordet. Rytmen varierar, "Nu det jobbiga"-greppet finns inte här men "Läs det sista en gång till" och "Och 75,3 är ju precis den siffra du bryr dig om i källaren" gör samma jobb. Ingen mening som kunde stå på vilken sajt som helst.

**Pass 3, hantverkare och fakta.** Varje siffra är kontrollerad mot faktaunderlaget: mättnadstabellen (nio rader), daggpunktstabellen (fyra rader, tomma celler bevarade), Magnus-konstanterna, 0,35 °C, tumregeln, Alingsås tre kontrollvärden, Intabs fyra värden, FoHM:s 7 g/kg, 45 procent vid 21 °C, 3 g/m³, -5 °C, Astma- och Allergiförbundets 45 procent, BBR 6:52 och 75 procent, 75,3 procent vid 25 °C, testsajternas 3 respektive 3 till 4 procentenheter. Alla rätt, rätt villkor, rätt källa. Riktvärdestabellen är ordagrann ur briefen med platshållarna oförändrade. Tre saker avslöjar sig ändå, se kraven.

**Briefens lista.**
1. Daggpunktstabell med Magnus, källa under, förklaring om kall yta. Finns.
2. 75 procent med Boverket BBR 6:52 och Folkhälsomyndigheten. Finns.
3. Riktvärdestabell per rum med egna kolumner och platshållare. Finns, ordagrant.
4. För hög fuktighet i ordningen vädra, värma, avfukta med länk till köpguiden. Finns.
5. Egna mätvärden som platshållare enligt avsnitt 4. Finns, med inledande mening om att mätningen pågår.

**Frontmatter.** Title, description, kortSvar, produkter: [] och H2-ordningen följer briefen exakt. Illustrationen `fukt/daggpunkt` står under H2 2 med rätt alt och bildtext, kommentaren för `fukt/hus-rf-per-rum` under tabellen, verktygskortet i H2 5 vid avfuktarmeningen. Inga externa länkar i löptext. Kallor saknar tre poster, se krav 3.

**Ändringskrav**

1. Rad 117: "Det sista låter bakvänt tills du tänker på att du då drar in kall uteluft, värmer den, och låter den suga upp tvättens vatten som sedan stannar i huset." Förklaringen är skribentens egen och finns inte i underlaget. Den är dessutom tveksam som fysik, eftersom vädring byter ut luften och tar vattnet med sig ut. Stryk hela meningen. Rådet står kvar med källan: "och vädra inte samtidigt som tvätten torkar (Astma- och Allergiförbundet)."

2. Rad 80: "Imma på insidan varje morgon hela vintern är en indikation på fuktskada." Folkhälsomyndighetens indikation har ett villkor som försvunnit: omfattande kondens vid cirka -5 °C ute eller kallare. Utan det blir en mild vinter med imma vid plusgrader en fuktskada enligt oss, inte enligt myndigheten. Ersätt med: "Omfattande imma på insidan när det är minus fem ute eller kallare är en av Folkhälsomyndighetens indikationer på fuktskada."

3. Frontmatter `kallor`: tre källor citeras i texten men saknas i listan. Rad 78 nämner "RISE provmetod i rapport 2022:69", rad 131 "två testsajter". Lägg till RISE (URL i faktaunderlaget avsnitt 3), Testkollen och Tryggt och säkert hem (URL:er i avsnitt 5), så att "två testsajter" går att kontrollera. Alternativet för RISE är att stryka meningen "Vill du ha ett materialspecifikt värde i stället mäts det enligt RISE provmetod i rapport 2022:69", som inte bär något för läsaren.

4. Rad 119: "En källare på 12 grader är svår att rädda med vädring i augusti eftersom uteluften är varmare och fuktigare än ytorna därinne." Påståendet är rätt men står utan stöd. Knyt det till tabellen två avsnitt upp: "Sommarluft på 20 grader och 70 procent har daggpunkten 14,4 grader enligt tabellen ovan, och väggen är 12. Du vädrar in vatten." Då är det egen beräkning med redovisad källa.

**Retur.** Fyra krav, varav krav 1 (påhittad förklaring) ensamt räcker för retur. Texten är i övrigt den bästa av de fyra och klarar nästa varv om kraven ovan görs ordagrant.

### Andra passet, luftfuktighet inomhus

Andra utkastet kontrollerat punkt för punkt.

1. Förklaringen om tvätt och vädring är struken; rådet står kvar med källan (rad 123). Åtgärdat.
2. Rad 86 har nu Folkhälsomyndighetens villkor, minus fem ute eller kallare. Åtgärdat.
3. RISE, Testkollen och Tryggt och säkert hem finns i kallor med de URL:er faktaunderlaget anger. Åtgärdat.
4. Rad 125 knyter augustiexemplet till daggpunktstabellen (20 grader och 70 procent ger 14,4, tabellvärdet stämmer). Åtgärdat.

Nytt sedan förra varvet: rad 113 har tappat "och människor" i uppräkningen, rad 117 har tappat bisatsen om januarifönstret. Inga nya siffror, inga nya påståenden utan källa. Mekaniska passet: noll träffar. Description 145 tecken, 1 318 ord.

En småjustering som inte kräver nytt varv: rad 125 "och väggen är 12" står utan att säga vilken vägg, eftersom meningen om källaren i augusti ströks. Skriv "och källarväggen är 12". Kan göras vid commit.

**Godkänd av redaktionen.**

---

## 2. Avfuktare till källaren

Fil: `src/content/guider/fukt/avfuktare-kallare.mdx`

**Pass 2, som läsare.** Svaret finns i kortSvar med 9 liter markerat, kalkylatorlänken i första stycket. Vinkeln "20 liter är sant i Bangkok" bär hela sidan och skribenten tar ställning i varje avsnitt. Nackdelarna står i löptext lika tydligt som fördelarna, "Nu det jobbiga" och "Invändningarna då" är rätt ton. Rytmen är bra: "Den låter som om den jobbar. Den gör det inte." Men rådet i kortSvar och rådet i H2 5 säger olika saker om samma källare, och det är det första en läsare som skummar kommer att märka. Se krav 2.

**Pass 3, hantverkare och fakta.** Kontrollerat: dimensioneringstabellen (tolv celler, räknade om med faktorerna 0,08, 0,10, 0,13 och avrundning uppåt, alla rätt, och 12,32 för ouppvärmd 40 kvm ger "över tolv liter" korrekt), 24,2 och 8,0 g/m³, daggpunkten 7,7 °C, LFS 15 °C, Dantherm 8 °C/40 procent, temperaturtabellen (sju rader mot briefen, alla rätt inklusive villkor och källa), DSC50FM 16,2/8,8, SW59FM 41/25, AD20 23/14, Corroventa 17/13/11, Acetecs sju uppgifter, MDK21:s sex uppgifter, SW39FW:s sex uppgifter, eltabellen (fyra rader kWh, fyra rader kronor vid 2,40, alla rätt), Meaco 1,09/0,47 och "en tjugondel", eeese 42 till 44 dB. Placering och tankar stämmer med underlaget. Två påståenden saknar täckning och ett motsäger tabellen två rader ner, se krav 3 till 6.

**Briefens lista.**
1. Dimensioneringstabell med antaganden under och "Räknat med samma formel som vår kalkylator", verktygskortet direkt intill. Finns. Men formeln i `src/lib/kalkyl/avfuktare.ts` rad 87 till 89 är fortfarande märkt PLATSHÅLLARFORMEL utan källa, och briefen säger att sidan inte publiceras förrän produktexperten levererat den riktiga. Se krav 1.
2. Temperaturtabell med "Tillverkaren uppger" i kolumnrubriken, källa per rad, och luckan vid 10 grader utskriven. Finns.
3. Elkostnad per månad med märkeffekt, drifttid och elpris med datum i tabell. Finns, med SCB-källan och datumet i löptext under tabellen.
4. Källaren i genomskärning via frontmatterns bild och bildtext. Finns.
5. Minst en maskin vi avråder från, med skälet. Finns, två maskiner med exakt den formulering briefen krävde.

**Frontmatter.** Title, description, kortSvar (ordagrant ur briefen, vilket är problemet i krav 2), tre produkter med rätt slugs (woods-sw39fw, acetec-evodry-6h-2, woods-mdk21, alla i databasen), rätt etiketter och forVem. Gamla woods-mrd20 och platshållarslugarna är borta. Produktkorten ligger ett per H2 på de platser briefen angav (EvoDry i H2 2, MDK21 i H2 4, SW39FW i H2 5) och komponenten tar exakt de props som används. Båda illustrationerna står under rätt H2 med rätt alt och bildtext. Kallor saknar två poster, se krav 6 och 7.

**Ändringskrav**

1. Blockerar publicering, inte skribentens fel: kalkylatorns faktorer 0,08, 0,10 och 0,13 liter per dygn och kubikmeter samt 1,4 för ouppvärmt saknar källa och är märkta platshållare i koden. Produktexperten levererar formel med källa, teknisk ansvarig byter konstanterna, och därefter räknas tabellen i H2 1, meningen "landar behovet på 9 liter per dygn", stycket om ouppvärmd källare och kortSvar om. Texten går inte till publicering förrän det är gjort, oavsett övriga krav.

2. kortSvar rad 11 till 12: "Håller källaren 15 grader året om, köp Wood's SW39FW." Rad 157: "Håller källaren 15 grader året om och har golvbrunn, ta MDK21. Ligger den mellan 5 och 15 grader, ta SW39FW. Går den under 10 grader, ta EvoDry 6H 2.0". Samma källare får två olika maskiner beroende på var på sidan läsaren tittar, och intervallen 5 till 15 och under 10 överlappar så att en källare på 7 grader får två svar. Felet kommer ur briefen, som jag skrev, men det ska rättas här. Ersätt kortSvar-meningen med: "Håller källaren 15 grader året om räcker kondens: Wood's SW39FW är förstavalet, MDK21 den billiga vägen om det finns golvbrunn." Ersätt stycket på rad 157 med: "Valet blir alltså kort. Håller källaren 15 grader året om, ta SW39FW, eller MDK21 om det finns golvbrunn och priset avgör. Kallnar den ner mot 5 grader några veckor i november men ligger över 10 resten av året, ta SW39FW. Ligger den under 10 grader hela vintern, ta EvoDry 6H 2.0 och acceptera elräkningen."

3. Rad 98: "alltså finns det inget datablad i världen som svarar på vad din källare får ut av maskinen i november." Två rader längre ner i samma tabell står Corroventas datablad med 13 liter vid 10 grader. Ersätt med: "alltså finns det inget datablad för någon av kondensmaskinerna i sortimentet som svarar på vad din källare får ut av maskinen i november."

4. Rad 122: "så lägg en meter halvtumsslang i kundvagnen med en gång." Slangdimensionen för SW39FW finns inte i underlaget (bara AD30 17,4 mm och eeese 14 mm är angivna). Skriv "så lägg en slang i kundvagnen med en gång" eller be produktexperten om dimensionen från produktsidan.

5. Rad 153: "den slutar inte fungera när termometern faller." Butiken anger drift ner till 2 grader, men sidan har just ägnat ett helt avsnitt åt att ingen vet hur många liter en kondensmaskin ger under 20 grader. Meningen lovar mer än tabellen. Ersätt med: "och den stannar inte förrän vid 2 grader enligt butiken, även om ingen kan säga hur många liter den ger där."

6. Rad 155: "systermodellen SW42FW anges till 37 till 56 dB av en återförsäljare". Återförsäljaren namnges inte och finns inte i kallor. Produktexperten levererar namn och URL till kallor, annars stryks meningen och stycket börjar "Ljudnivån finns inte angiven på produktsidan, så räkna inte med en tyst maskin på hög fläkt."

7. Rad 100: AD20:s 23 och 14 liter citeras men Proffsmagasinets AD20-sida saknas i kallor. Lägg till (URL i faktaunderlaget, tabellen i avsnitt 1).

8. Rad 57: "[LÄNK NÄR SIDAN FINNS: tester/woods-sw39fw]" är synlig text efter ett kolon. Avsluta meningen med punkt ("...när vi haft den i handen.") och lägg platshållaren som MDX-kommentar `{/* LÄNK NÄR SIDAN FINNS: tester/woods-sw39fw */}` på raden under.

9. Rad 159: mätplatshållaren står ensam utan inledning, så en läsare ser en hakparentes mitt i texten. Lägg en mening före, behåll platshållaren ordagrant: "Vår egen källare mäts just nu, och siffrorna kommer här:"

10. Rad 124: "Kommer du från 75 procent har du marginal nog att maskinen hinner slå av innan väggarna hunnit torka ojämnt." Optihus skäl är att inte torka ut trä, inte ojämn torkning av väggar. Ersätt bisatsen med "innan virket i källaren torkar ut i onödan" eller stryk den.

**Retur.** Tio krav. Krav 1 blockerar oavsett, krav 2 är det allvarligaste i texten: sidans rekommendation motsäger sig själv.

### Andra passet, avfuktare till källaren

Koordinatorns beslut som gällt: liter-siffran är borttagen tills kalkylatorformeln finns, description omskriven, temperaturregeln "över 10 grader kondens, under sorption", elpris 2,40 med SCB.

1. Dimensioneringstabellen, "9 liter" i kortSvar och stycket om ouppvärmd källare är borta. I stället står tillverkarnas egna maxytor i en ny tabell (rad 76 till 80), och varje cell är kontrollerad mot faktaunderlaget: MDK21 70 kvm, 20 l vid 30/80, plus 5; SW39FW 140 kvm, 19 l utan villkor, plus 2; EvoDry 100 m³ (cirka 40 kvm), 7,4 l vid 20/60, minus 20. Alla rätt, rätt källa. MDX-kommentaren på rad 72 markerar var tabellen ska in. Åtgärdat enligt beslutet. Briefens punkt 1 är därmed inte levererad, på koordinatorns beslut; när formeln finns ska tabellen, kortSvar och H2 1 tillbaka och sidan tas ett nytt varv.
2. kortSvar och rad 167 säger nu samma sak: över 10 grader kondens med SW39FW som förstaval och MDK21 som billig väg vid golvbrunn, under 10 grader en längre period sorption med EvoDry. Överlappet 5 till 15 mot under 10 är borta. Åtgärdat.
3. Rad 108 säger "inget datablad för någon av kondensmaskinerna i sortimentet". Åtgärdat.
4. "halvtumsslang" är "en slang" (rad 132). Åtgärdat.
5. Rad 163 säger att den stannar först vid 2 grader enligt butiken, men att ingen kan säga hur många liter den ger där. Åtgärdat.
6. SW42FW-uppgiften är struken, ersättningsmeningen står på rad 165. Åtgärdat.
7. Proffsmagasinets AD20-sida finns i kallor, dessutom Proffsmagasinets Acetec-sida för "butiken skriver 46". Åtgärdat.
8. Länkplatshållaren är MDX-kommentar (rad 64), meningen slutar med punkt. Åtgärdat.
9. Mätplatshållaren har inledning (rad 169). Åtgärdat.
10. Hygrostatmeningen använder Optihus skäl, virket (rad 134). Åtgärdat.

Nytt sedan förra varvet: rad 94 med temperaturregeln och maskinernas lägsta arbetstemperatur (MDK21 plus 5, SW-serien plus 2, EvoDry minus 20, alla ur underlaget) samt den ärliga meningen att start vid 2 grader inte är samma sak som avfuktning där. Markeringen är nu "över 10 grader" i stället för 9 liter. Rad 82 om att 40 kvm mot 70 kvm inte betyder dubbel styrka följer av tabellens egna villkor. Ny description 122 tecken. 1 712 ord. Mekaniska passet: noll träffar. Elkostnaderna oförändrade och rätt.

Två noteringar utan retur. MDK21:s forVem säger "15 grader året om" medan kortSvar erbjuder den för "över 10 grader"; det är inte en motsägelse (kortet är snävare än regeln, och lägsta arbetstemperatur är plus 5) men kan harmoniseras vid commit genom "MDK21 den billiga vägen om det finns golvbrunn och källaren håller 15". Verktygskortet leder till kalkylatorn som fortfarande räknar med platshållarformeln; det är teknisk ansvarigs och koordinatorns fråga, inte textens.

**Godkänd av redaktionen**, med förbehållet i punkt 1: nytt varv när kalkylatorformeln finns och tabellen kommer tillbaka.

---

## 3. Gipsskruv

Fil: `src/content/guider/inomhus/gipsskruv.mdx`

**Pass 2, som läsare.** "Gipset håller ingenting" är en öppning som säger vem som skriver. Svaret står i kortSvar med 20 mm markerat och tabellen kommer på andra skärmen. Skribenten tar ställning ("Jag tar ändå 41, och i tak tar jag aldrig något annat", "Håll 15 hela vägen runt"), situationerna är konkreta (batteriet som "är slut", sista raden vid golvet när ryggen värker, kartongfibrer som reser sig). Korta stycken som briefen bad om. Kollegan över axeln finns i texten.

**Pass 3, hantverkare och fakta.** Kontrollerat: Norgips regel och 32,5/22,5, längdtabellen (sexton celler mot underlaget, alla rätt), Svenskt Trä 30/41 och 17,5 mm, 7 mm fogtätning, Essve 25 till 75, Gyproc 0,9 mm, Essve 522224 0,4 till 0,9, borrspets 0,7 till 2,0 och 2 000 till 2 800 varv för 25 till 55, avståndstabellen (fem rader, alla rätt inklusive c/s/ca som källan skriver), kantavstånd 10/12 till 15/15, springa 2 till 3 mm, Gyproc c 450-reglerna, Svenskt Trä c 400/600, 0,5 till 1,0 mm, Norgips Hård 200/300/750/c 450, C1, C4, A2, brandklassad 200/300, FZB 3,9 × 41, 18 modeller, DFR550ZX1 25 till 55, DFR750Z 45 till 75. Inga bloggvärden (150/200 i tak, Hi-Lo 22 till 25) har smugit sig in. Inget om rostfritt i våtrum. Inga priser i löptext. Ett räknefel som kommer ur briefen, se krav 2.

**Briefens lista.**
1. Längdtabell med minsta längd och handelslängd, räknad ur Norgips med källa under. Finns.
2. Skruvavståndstabell vägg mot tak, kant mot fält, källa per rad. Finns.
3. Sektionsillustration via frontmatterns bild. Finns.
4. Rätt och fel försänkning i bild, regeln 0,5 till 1 mm med källa Norgips. Finns.
5. Proffsråd: bandad skruv, skruvautomat, djupanslag, fingängad stålskruv fel i trä. Finns, alla fyra.

**Frontmatter.** Title, description, kortSvar, typ projektguide, pelare inomhus, bild och bildtext följer briefen. H2-ordningen är exakt briefens sju. Illustrationerna 2, 3 och 4 står under rätt H2 med rätt alt och bildtext. Inget verktygskort. Gamla filen i `kunskap/inomhus/` är borta, så rutten kolliderar inte. Verktygslistans slugs finns inte i databasen, se krav 1.

**Ändringskrav**

1. Frontmatter `behover.verktyg`: slugarna `makita-dfr550zx1` och `essve-fzb-39x41` finns inte i databasen (databasen har bara avfuktare). Komponenten stoppar inte bygget, men den renderar då slugen som produktnamn, utan köpknapp, och bygget varnar. Läsaren skulle se "makita-dfr550zx1" som rubrik i listan. Två åtgärder: skribenten lägger till `namn: Makita DFR550ZX1 skruvautomat` respektive `namn: Essve FZB gipsskruv 3,9 × 41 bandad, 1 000-pack` på raderna nu, så att listan blir läsbar även utan databasen, och teknisk ansvarig importerar de två produkterna (URL:er i faktaunderlaget avsnitt 5) före publicering, annars saknas de två köpknappar som är sidans intäkt.

2. Rad 137 och frontmatter rad 19: "tar 25 till 55 mm, alltså allt i längdtabellen utom dubbla 15-skivor". Fel: dubbla 15-skivor på trä tar 51 eller 55 mm och på stål 41, och alla tre ligger inom 25 till 55. Felet kommer ur briefen. Ersätt på båda ställena med: "tar 25 till 55 mm, alltså varje längd i tabellen; 55 mm för dubbla 15-skivor på trä är dess övre gräns."

3. Frontmatter `kallor` saknar fem källor som citeras: Proffsmagasinets sida för Essve 522224 (rad 81, "angiven för plåt 0,4 till 0,9 mm"), Essves översiktssida för gipsskruv (rad 85, "försänkt trumpetform enligt Essve"; posten som finns är borrspetssidan), Proffsmagasinets sida för Essve FZB bandad (rad 135), Proffsmagasinets kategorisida skruvautomater (rad 137, "18 modeller") och produktsidorna för Makita DFR550ZX1 och DFR750Z (rad 137). Alla URL:er finns i faktaunderlaget avsnitt 1 och 5.

4. Rad 99: "Beteckningarna c och s står som källan skriver dem." Facktermer förklaras första gången, och c är den beteckning läsaren kommer att möta i butiken. Ersätt med: "c 200 betyder 200 mm från skruvmitt till skruvmitt. Norgips skriver s för det innersta laget, och vi återger det som de skriver." Produktexperten bekräftar till nästa varv vad Norgips s står för, så att vi kan förklara det också.

5. Rad 107 och rad 149: tre synliga "[LÄNK NÄR SIDAN FINNS: ...]" i löptext. Skriv om meningarna så de står utan länk och lägg platshållarna som MDX-kommentarer under. Rad 107: "Regelavståndet när du bygger innervägg får en egen sida." följt av `{/* LÄNK NÄR SIDAN FINNS: inomhus/bygga-innervagg */}`. Rad 149: "Hur du skruvar i gipsvägg för att hänga upp saker, och vilken gipsplugg som håller vad, får egna sidor." följt av två kommentarer.

**Retur.** Fem krav. Allvarligast är krav 1: verktygslistan, sidans enda köpknappar, pekar på produkter som inte finns.

### Andra passet, gipsskruv

1. Båda verktygsraderna har `namn:` (rad 19 och 22), så listan är läsbar även utan databasen. Textdelen åtgärdad. Kvarstår utanför texten: teknisk ansvarig importerar `makita-dfr550zx1` och `essve-fzb-39x41` i databasen, annars saknas köpknapparna och bygget varnar. Det stoppar inte bygget och är inte skribentens sak.
2. "utom dubbla 15-skivor" är rättat på båda ställena (rad 20 och 153) med den formulering jag angav. Åtgärdat.
3. Alla sex saknade källor finns i kallor: Essve översikt, Proffsmagasinet 522224, FZB bandad, skruvautomater, DFR550ZX1, DFR750Z. Åtgärdat.
4. Rad 113 förklarar c som skruvmitt till skruvmitt och återger s som Norgips skriver. Åtgärdat. Produktexperten bekräftar fortfarande vad s står för, till nästa uppdatering av sidan.
5. Alla tre länkplatshållare är MDX-kommentarer, meningarna står utan länk (rad 121 till 123 och 165 till 168). Åtgärdat.

Nytt sedan förra varvet: rad 85 "Jag tar ändå 41 på ett lag" (förtydligande), rad 95 nämner Proffsmagasinets produktsida som källa i löptext. Inga nya siffror. Mekaniska passet: noll träffar. Description 135 tecken, 1 190 ord.

**Godkänd av redaktionen.** Publicering förutsätter att teknisk ansvarig importerat de två verktygen.

---

## 4. Sorptionsavfuktare

Fil: `src/content/kunskap/fukt/sorptionsavfuktare.mdx`

**Pass 2, som läsare.** Garaget i november med 85 procent och 8 grader är exakt den start briefen bad om. kortSvar har 10 grader markerat och undviker briefens egen treklang och hedging ("beror det på" har blivit "avgör hur länge utrymmet ligger kvar där nere"), vilket är rätt. Vinkeln att sorption är dyr, högljudd och elslukande men det enda som fungerar bär hela vägen. "En sorptionsavfuktare i ett otätat utrymme torkar hela Sverige, en kubikmeter i taget" och "en värmefläkt som flyttar fukten i en cirkel" är meningar bara den här sajten kan ha. Ställning tas per utrymme i H2 6. Ett problem: sidans huvudpåstående om el per liter, "en tredjedel", stämmer inte med sidans egen tabell. Se krav 1.

**Pass 3, hantverkare och fakta.** Kontrollerat: rotorbeskrivningen, kiselgelens 40 procent och 200 till 700 m², 0 till 20 °C, Dantherm 8 °C/40 procent och -18, LFS 15 °C, kapacitetstabellen (sju rader mot underlaget, alla rätt), 76/65/40 till 46/en tiondel, eltabellen per liter (åtta rader, alla rätt), Corroventas 1,10/1,44/1,70, kWh-tabellen (fem rader kWh och fem rader kronor vid 2,40, alla rätt, avrundat till hela kronor som texten säger), ljudtabellen (sju rader, alla rätt), Freshs 6 liter vid 27/60, installationens alla tal (50 cm, 3 till 5 mm, slangdimensioner, 10 m, 230 V, 10 A trög), Optihus 60 till 65, Drybox 65/55/75 vid 5 °C, Drybox X4 19 liter utan villkor, 850 W, 52 dB vid 3 m, Acetecs varning ordagrant. Inga Drybox-siffror vid någon temperatur. Ingen maskin kallas tyst utan dB-siffra. Fyra påståenden håller inte, se krav 1 till 3 och 6.

**Briefens lista.**
1. Flödesskiss via frontmatterns bild. Finns.
2. Kapacitetstabell vid 30, 20, 10 och 5 grader med "Tillverkaren uppger", källa per rad, och förklaringen varför 0 grader saknas. Finns.
3. Elkostnad per månad med märkeffekt, drifttid och elpris med datum, antagandena under. Finns.
4. Ljud i dB(A) med avstånd där det finns och "ej angivet" annars. Finns.
5. Installationen: slang, tätning, hygrostat, och när ett kallt utrymme ändå ska ha kondens. Slang, tätning och hygrostat finns. Fallet "kallt utrymme som ändå får kondens" är bara halvt levererat, en princip på rad 183 utan ett konkret exempel. Se krav 10.

**Frontmatter.** Title, description, kortSvar, två produkter med rätt slugs (acetec-evodry-6h-2, woods-sw39fw), etiketter och forVem ur briefen. Ingen `<Produktkort>` i filen, korrekt. `<Varning rubrik="...">` matchar komponenten. Illustrationerna 2 och 3 under rätt H2 med rätt alt och bildtext. Kallor saknar åtta poster, se krav 7.

**Ändringskrav**

1. kortSvar rad 12 till 13 "drar en tredjedel så mycket el per liter", rad 113 "Kondensen kostar alltså ungefär en tredjedel så mycket el per liter, så länge rummet är varmt", rad 183 "för elen per liter är en tredjedel". Sidans egen tabell säger något annat vid 20 grader: SW59FM 0,48 mot Corroventa 1,09 är 44 procent, DSC50FM 0,63 mot 1,09 är 58 procent. En tredjedel får man bara genom att ställa MDK21 vid 30 grader och 80 procent mot sorption vid 20 grader och 60 procent, alltså olika villkor, vilket sidan själv förklarar att man inte får göra. Felet kommer ur briefen. Ersätt på alla tre ställen med innebörden: "ungefär hälften så mycket el per liter vid 20 grader, och en tredjedel eller mindre i ett riktigt varmt rum (Dantherm: 3 till 4 gånger i badhus)". På rad 113 byts jämförelsen till SW59FM och DSC50FM mot Corroventa vid 20 grader; MDK21-raden får stå kvar i tabellen som varmrumsexemplet.

2. Rad 115: "En maskin som drar 231 W och tar upp en halv liter per dygn blir dyrare per liter än vad som helst i tabellen ovan." Meningen blandar DSC50FM:s effekt vid 20 grader med Meacos kapacitet vid 5 grader, direkt efter meningen som säger att just den siffran inte finns. Stryk. Stycket slutar då med "av det enkla skälet att maskinen knappt gör något där. Elpriset avgör inte valet. Temperaturen gör det."

3. Rad 56: "kommer tillbaka till en tank som är nästan tom." Den enda uppgiften vi har i kyla (Meaco via Elgiganten) är 0,47 till 1,09 liter per dygn, vilket på två veckor är 7 till 15 liter. En tank på fyra liter hade fyllts flera gånger. Scenariot ska stämma med de siffror sidan sedan visar. Ersätt med: "och kommer tillbaka till en tank som fyllts två gånger på två veckor, när kartongen lovar att den ska vara full varje morgon."

4. Rad 147: "[TEST SAKNAS, länk till sida 14: här kommer våra egna värden på 1 och 3 meter, mätta med ljudmätare i kallt utrymme]". "länk till sida 14" är intern jargong. Lägg en mening före: "Vår egen ljudmätning pågår:" och flytta "länk till sida 14" till en MDX-kommentar på raden under. Resten av platshållaren behålls ordagrant.

5. Rad 149 "Vår genomgång av Acetec EvoDry 6H 2.0 [LÄNK NÄR SIDAN FINNS: tester/acetec-evodry-6h-2]" och rad 173 "Mer om val och placering kommer i avfuktare i krypgrund [LÄNK NÄR SIDAN FINNS: fukt/avfuktare-krypgrund]". Synliga platshållare. Rad 149: "Acetec EvoDry 6H 2.0 får en egen genomgång när vi haft den i handen." följt av kommentar. Rad 173: "Val och placering i krypgrund får en egen guide." följt av kommentar.

6. Rad 176 i varningen: "Arbetstemperatur och användningsområde är inte samma sak, och garantin bryr sig om det senare." Ingen källa säger något om garantin. Stryk bisatsen; meningen slutar "inte samma sak."

7. Frontmatter `kallor` saknar åtta källor som citeras: Munters användarhandbok M120 (rad 68), Proffsmagasinets sida för Wood's WP-200AP (tabellrad 83), Proffsmagasinets sida för Acetec EvoDry 6H 2.0 (rad 136 och 145, "Proffsmagasinet skriver 46"), Proffsmagasinets sidor för Wood's MDK21, eeese Adam 20 och Acetec EvoDry RCF 12 G1 (ljudtabellen), LFS produktsida för CTR STD-TT (rad 111, "återgivet av Ljungby Fuktkontroll"; posten som finns är artikeln "välj rätt avfuktare") och ventilation.se:s produktsida för Drybox X4 (rad 165, mögelindex). Alla URL:er finns i faktaunderlaget.

8. Rad 58: "den arbetar enligt Acetec, Fresh och Drybox mellan minus 20 och plus 40 grader." Drybox anger inte arbetstemperatur på sin egen sida, uppgiften är återförsäljarens. Ersätt med: "den arbetar mellan minus 20 och plus 40 grader enligt Acetec och Fresh, och enligt återförsäljaren även Drybox X4."

9. Rad 76: "Spannet 10 till 15 grader är alltså deras, inte vår mätning." Källorna säger 8 (Dantherm) och 15 (LFS). Ersätt med: "Spannet 8 till 15 grader är alltså deras, inte vår mätning. Vi säger 10, för det är där Meacos kondensmaskin i tabellen nedan ligger på en tiondel av märkvärdet."

10. Briefens punkt 5, "när ett kallt utrymme ändå ska ha kondens": rad 183 ger principen ("utrymmets faktiska temperatur under de fuktigaste månaderna") men inget fall. Lägg till efter den meningen: "Ett garage som fryser i januari men håller 15 grader i augusti och september, när luften bär mest vatten, klarar sig med kondens och en hygrostat. Det är de fuktiga månaderna som räknas, inte de kalla."

11. Rad 189: "Wood's anger ingen ljudsiffra för den". Underlaget säger att butiken inte anger någon och att Wood's egen sida inte gick att nå, vilket är något annat än att Wood's inte anger. Ersätt med: "Varken butiken eller Wood's, vars produktsida inte gick att nå, ger en ljudsiffra för den".

**Retur.** Elva krav. Allvarligast är krav 1: huvudpåståendet om el per liter motsäger sidans egen tabell, och det står i kortSvar.

### Andra passet, sorptionsavfuktare

1. "En tredjedel" är ersatt på alla tre ställen. kortSvar säger ungefär hälften vid 20 grader och en tredjedel eller mindre i ett riktigt varmt rum. Rad 129 jämför vid samma villkor: 0,48 och 0,63 mot 1,09 ger 44 respektive 58 procent, räknat om av mig, stämmer. MDK21:s 0,29 vid 30/80 står som varmrumsexemplet. Rad 204 säger ungefär hälften vid 20 grader. Åtgärdat.
2. Meningen om 231 W och en halv liter är struken (rad 131). Åtgärdat.
3. Garagescenariot säger nu att tanken fyllts två gånger på två veckor mot kartongens löfte om full varje morgon (rad 72), vilket stämmer med Meacos 0,47 till 1,09 liter per dygn. Åtgärdat.
4. Ljudplatshållaren har inledningen "Vår egen ljudmätning pågår:", och "länk till sida 14" ligger i en MDX-kommentar (rad 163 till 166). Åtgärdat.
5. Båda länkplatshållarna är kommentarer och meningarna står utan länk (rad 168 till 169, 193 till 194). Åtgärdat.
6. Bisatsen om garantin är struken ur varningen (rad 197). Åtgärdat.
7. Alla åtta källor finns i kallor: Munters, WP-200AP, Proffsmagasinet Acetec, MDK21, eeese, produkttypssidan för RCF 12 G1, LFS produktsida för CTR, ventilation.se Drybox X4. Åtgärdat.
8. Rad 74 skiljer Acetec och Fresh från återförsäljarens uppgift om Drybox X4. Åtgärdat.
9. Rad 92 säger 8 till 15 grader och motiverar 10 med Meacos tiondel. Åtgärdat.
10. Rad 204 har garageexemplet med de fuktiga månaderna. Åtgärdat. Rad 202 är följdriktigt ändrad till "kallt året runt".
11. Rad 210 säger att varken butiken eller Wood's (vars sida inte gick att nå) ger en ljudsiffra. Åtgärdat.

Nytt sedan förra varvet: rad 161 "Två decibel hörs inte" har blivit ett faktapåstående där det förut var en bedömning. Ingen källa, men två decibel ligger vid gränsen för vad ett öra skiljer på och påståendet är ofarligt. Skriv hellre "Två decibel märker du knappt" vid commit. Inga nya siffror i övrigt. Mekaniska passet: noll träffar. Description 150 tecken, 1 873 ord.

Teknisk notering till teknisk ansvarig, inte retur: MDX-kommentarerna på rad 166, 169 och 194 ligger direkt under en textrad utan blankrad emellan. Det renderar som en tom expression inne i stycket och ska fungera, men en blankrad före kommentaren är säkrare om bygget klagar.

**Godkänd av redaktionen.**

---

## Sammanfattning

| Text | Status | Krav | Allvarligast |
|---|---|---|---|
| Luftfuktighet inomhus | Retur | 4 | Påhittad fysikförklaring till rådet om tvätt och vädring (rad 117) |
| Avfuktare till källaren | Retur | 10 | kortSvar och H2 5 rekommenderar olika maskiner för samma källare; dessutom blockerar kalkylatorns platshållarformel publicering |
| Gipsskruv | Retur | 5 | Verktygslistans två slugs finns inte i databasen, listan skulle visa slugen som namn utan köpknapp |
| Sorptionsavfuktare | Retur | 11 | "En tredjedel så mycket el per liter" i kortSvar motsägs av sidans egen tabell (44 till 58 procent vid 20 grader) |

Tre av de allvarligaste felen (kortSvar i köpguiden, "utom dubbla 15-skivor", "en tredjedel") kommer ur mina egna briefer. Skribenterna har följt dem lojalt. Rättningarna ovan gäller ändå. Brieferna bör rättas på samma tre punkter innan nästa varv, så att nästa utkast inte ärver felen; det är inte gjort i den här granskningen.

Nästa utkast går till samma tre pass. Kraven är ordagranna där de kan vara det, så inget behöver gissas.

## Sammanfattning efter andra passet

| Text | Status | Åtgärdat | Kvarstår |
|---|---|---|---|
| Luftfuktighet inomhus | Godkänd av redaktionen | 4 av 4 | Småjustering "källarväggen är 12" vid commit |
| Avfuktare till källaren | Godkänd av redaktionen | 10 av 10, punkt 1 enligt koordinatorns beslut | Nytt varv när kalkylatorformeln finns och dimensioneringstabellen kommer tillbaka; MDK21:s forVem kan harmoniseras vid commit |
| Gipsskruv | Godkänd av redaktionen | 5 av 5 | Teknisk ansvarig importerar de två verktygen i databasen före publicering; produktexperten bekräftar vad Norgips s betyder |
| Sorptionsavfuktare | Godkänd av redaktionen | 11 av 11 | "Två decibel hörs inte" bör bli "märker du knappt" vid commit |

Inga nya fel har smugit in i andra utkasten: alla nya siffror (maxytatabellen i köpguiden, lägsta arbetstemperaturer, 44 och 58 procent) är kontrollerade mot faktaunderlaget, och det mekaniska passet ger noll träffar i alla fyra. Elpriset 2,40 kr med SCB står i båda eltabellerna med rätt villkor och rätt belopp. SCB-URL:en är fortfarande produktexpertens att kontrollera.
