# Läsbarhetsutredning: fjorton räkneverktyg

Jag är husägare, inte hantverkare. Jag har läst korten i galleriet först, kallt, innan jag öppnade en enda verktygssida. Sedan sidan, formuläret och beskeden. Jag skriver ner det jag inte fattade vid första läsningen, inte det jag fattade på andra försöket.

En sak ska sägas direkt: det här är inte dålig text. Det finns meningar här som är bland det bästa jag läst på en byggsajt. Problemet är ett annat, och det är att någon har hittat en mall som fungerar och sedan kört den fjorton gånger. Jag hör samma röst, samma satsmelodi och samma knep om och om igen, och efter tre verktyg slutar jag höra en människa och börjar höra en maskin som är väldigt bra på att låta som en människa. Det är värre än att låta maskinskriven, för det går inte att peka på.

---

## Kortens rader, lästa kallt

Innan jag går verktyg för verktyg: det som ägaren reagerade på är inte ett undantag. Det är **mallen**. Tretton av fjorton rader i `C:\Hantverkstips\src\lib\kalkyl\register.ts` är byggda på exakt samma form:

> substantiv, substantiv och substantiv **ger** resultat och resultat

Ingen människa säger så. Det är en formel, inte en mening, och den är dessutom den mest ambitiösa formen man kan välja: den kräver att varje substantiv är entydigt, för det finns inget verb och ingen preposition som hjälper mig att gissa. När ett av orden har två betydelser rasar hela raden. Jag går igenom dem i respektive avsnitt, men här är de fyra värsta i klump:

- `'Arbetskostnad, ägare och tak ger avdraget och vad du betalar.'` — **ägare** kan vara jag, firman eller den som äger jobbet. **Tak** är det första jag ser på ett hus. Att raden handlar om ett beloppstak går inte att veta. Att "arbetskostnad" är en post på en faktura och inte "vad arbetet kostar totalt" går heller inte att veta.
- `'Skivtjocklek, antal lag och regel ger längd, gänga och spets.'` — **lag** är först ett fotbollslag, sedan en lag i lagboken, och först i tredje hand ett skikt. **Regel** är en föreskrift innan den är en träbit. **Spets** är en spetsig ände eller en sorts textil. Tre tvetydiga ord i en rad på åtta.
- `'Vikt, skivtjocklek och antal punkter ger plugg, regel eller kortling.'` — **punkter** är interpunktion eller poäng, inte hål i en vägg. **Kortling** har jag aldrig hört. **Plugg** är också en kontakt man stoppar i väggen, vilket gör det roligt på fel sätt.
- `'Temperatur, luftfuktighet, natt och klockslag ger om färgen hinner torka före daggen.'` — **natt** står som ett ensamt substantiv i en uppräkning av mätvärden, som om natt vore en storhet jag ska fylla i. "ger om" är inte svenska.

Det finns en rad som fungerar helt, och det är trappan: `'Våningshöjden ger antal steg, steghöjd, stegdjup och lutning.'` Ett ingångsvärde, fyra svar, inga dubbeltydiga ord. Det är bevis för att formeln kan bära, men bara när det bara finns ett ingångsvärde.

---

## daggpunkt

**Kortet.** Rubriken `'Blir väggen våt? Räkna ut daggpunkten'` är den bästa i hela galleriet: den ställer min fråga och säger vad verktyget heter. Raden `'Temperatur, luftfuktighet och kallaste ytan ger kondensrisken.'` klarar sig hyfsat, men "kallaste ytan" i bestämd form förutsätter att jag vet att det finns en kallaste yta som betyder något. Jag skulle skrivit "den kallaste ytan i rummet".

**Meningar jag inte förstod.**

> "Luften närmast ytan hamnar på 92 procent luftfuktighet, mot Boverkets gräns på 75 procent."

Faktarutan, alltså det första jag läser. "Luften närmast ytan" är ett begrepp verktyget uppfinner i samma mening som det använder det, och Boverket dyker upp utan att jag fått veta varför en myndighet har en gräns för luften bredvid min vägg.

> "Ytan klarar sig undan med 1,4 grader till godo, men luftskiktet närmast den ligger över Boverkets gräns."

"klarar sig undan med ... till godo" är två uttryck ihopslagna till ett som inte finns. Och "den" syftar på ytan, tre substantiv bort.

> "Vid den kalla ytan är vattnet detsamma, men taket är lägre. Kvoten mellan dem är luftfuktigheten i skiktet närmast väggen"

"Taket" används här om mättnadsånghalten, alltså ett tak i överförd bemärkelse, på en sajt där tak är något man spikar papp på. "Kvoten mellan dem" — mellan vattnet och taket? Det är matematik utskriven i bildspråk och blir svårare än formeln.

> "plus minus 0,35 grader i formeln"

Står som en egen liten rad under det stora talet. Jag vet inte vad "i formeln" betyder där. Är osäkerheten i formeln eller i mitt svar?

> "vid 20 °C och 50 % RF inne"

RF förklaras först långt ner i brödtexten. I resultatspalten är det tre bokstäver som inte betyder något.

> "Ett ouppvärmt garage följer uteluften med ett dygns fördröjning, och det är fördröjningen som ställer till det."

Den här är bra, och jag tar upp den för att visa att jag ser skillnaden.

**Helhet.** Brödtexten är skriven av en människa som kan sin sak och har sett en källarvägg i augusti. De tre exemplen — sovrummet, källaren, garaget — är konkreta, har årstider och väderlek i sig, och förklarar varför rådet vänder. Resultatspalten är däremot skriven för någon som redan läst brödtexten, och den ligger ovanför brödtexten.

**Betyg: 4.**

---

## avfuktare

**Kortet.** `'Hur stor avfuktare behöver du?'` är rakt och bra. Raden `'Yta, takhöjd och fuktnivå ger liter per dygn, och maskinerna som klarar det.'` — "fuktnivå" låter som något jag måste mäta med instrument, och "liter per dygn" utan sammanhang låter som hur mycket jag ska dricka. Kommat före "och maskinerna" hänger löst: ger ytan maskinerna?

**Meningar jag inte förstod.**

> "märkt kapacitet, uppgiven vid 20 °C och 60 % RF, motsvarar cirka 14 liter i din källare vid 10 grader"

Det här är den enskilt värsta raden i något av verktygen, och den står direkt under det stora talet. "Märkt kapacitet" är ett fackord som inte förklaras förrän steg sju i "Så räknar vi". Det står två temperaturer och två procenttal i samma rad, varav den ena temperaturen är ett labbvärde och den andra är min källare, och ingenting skiljer dem åt. Och "din källare" — jag sa aldrig att jag har en källare. Jag kanske räknar på ett garage.

> "Omräkningen mellan lådans siffra och verkligheten är det osäkraste i kalkylen, så läs talet som 12 till 17 liter."

"Lådans siffra" är charmigt men står oförberett; jag har inte fått veta att det finns en siffra på lådan. Och meningen erkänner mitt i resultatet att svaret är osäkert utan att först ha gett mig något att vara säker på.

> "70 till 80 procent, fuktfläckar och lukt"

Ett av tre val under "Fuktnivå". Jag ska alltså välja mellan ett mätvärde jag inte har och två symptom, i samma alternativ, utan att veta vilket som väger tyngst om bara det ena stämmer.

> "Krypgrund räknas också, ner till 0,5 m."

Ner till 0,5 m vad? Takhöjd, står det ovanför, men "ner till" om takhöjd i en krypgrund där man inte kan stå är en märklig konstruktion.

> "Vi tar först ut det vatten som redan står i luften, skillnaden mellan din fuktnivå och 55 procent. Det är ett par deciliter, en engångspost."

"Engångspost" är ett bokföringsord. Här blir det en fackterm i en text som annars vill vara enkel.

> "Vi verifierar formeln med egna mätningar under hösten."

Det här är ett internt löfte till redaktionen, inte information till mig. Jag vet inte vilken höst, och jag vet inte om jag ska vänta.

**Helhet.** Brödtexten under "Så räknar vi" är riktigt bra pedagogik: "En källare på 96 m³ ... bär 0,9 liter vatten, och att ta ner den till 55 procent kostar ett kvarts glas" är en bild jag minns. Resultatspalten är däremot den tätaste i hela galleriet och förutsätter hela artikeln.

**Betyg: 3.**

---

## elkostnad

**Kortet.** `'Vad kostar maskinen i el?'` — bra, men "maskinen" i bestämd form, vilken maskin? Raden `'Effekt, gångtid och elpris ger kilowattimmar och kronor.'` är den minst dåliga av de tretton formelraderna, för de tre orden betyder bara en sak var. "Gångtid" är gränsfall; jag hade sagt "hur länge den går".

**Meningar jag inte förstod.**

> "Här kan du räkna ut elkostnad för en maskin som står och går"

"räkna ut elkostnad" utan artikel. Ingen säger så. Antingen "elkostnaden" eller "vad elen kostar". Det ser ut som en sökfras som klistrats in mitt i en mening, och det är precis vad det är.

> "Kilowatten gångras med gångtiden per dygn och blir kilowattimmar per dygn."

"Gångras" tre gånger i samma lista. Ordet finns, men ingen använder det utanför en mattebok från 1974. "Multiplicera" står i brödtexten ovanför; välj ett.

> "320 W i 8 timmar per dygn och 2,40 kr per kWh"

Under det stora talet. Tre enheter, ingen mening, inget verb. Jag ska själv lista ut att det är en sammanfattning av vad jag fyllt i.

> "1 848 kr per år vid samma gångtid, alltså 770 kWh"

"alltså" kopplar ihop kronor med kilowattimmar som om det ena följde av det andra. Det gör det, men "alltså" säger att det är samma sak.

> "Talet på typskylten eller i databladet, alltså märkeffekten."

Hjälptext till fältet Effekt. Tre fackord i en rad, och det sista förklarar inte de två första. Typskylt förklaras faktiskt längre ner i brödtexten ("den lilla metallbrickan på maskinens baksida") — alltså efter att jag behövt den.

**Helhet.** Det här är det verktyg där brödtexten närmast lyckas låta som en person som pratar: de tre exemplen med avfuktaren, värmefläkten och byggfläkten har riktiga tal, riktiga månader och en poäng i varje. "Räkna på den innan du hyr, inte efter" är en mening jag skulle sagt själv. Formuläret är också det tydligaste i hela galleriet.

**Betyg: 4.**

---

## innervagg

**Kortet.** `'Räkna reglar, gips och skruv till väggen'` funkar. Raden `'Längd, höjd och regelavstånd ger virke, skivor, skruv och ull.'` slutar på **ull**, och ull är får. Att det är mineralull står ingenstans på kortet. "Regelavstånd" är dessutom ett ord jag behöver veta vad en regel är för att förstå, och det står inte på kortet heller.

**Meningar jag inte förstod.**

> "Virket går på 46,8 löpmeter, syll och hammarband inräknade."

Faktarutan, tredje raden på sidan. **Syll** och **hammarband** är två fackord som får sin förklaring först i ett stycke långt ner, och där står den i förbigående. Jag vet inte om de är material jag ska köpa eller moment jag ska utföra.

> "22,8 m syll och hammarband plus reglarna och 1,98 m avväxling"

Resultatspalten. **Avväxling** förklaras i hjälptexten till fältet Dörröppningar, alltså i vänsterspalten, som jag redan scrollat förbi. I resultatet står ordet naket.

> "13 reglar à 2,7 m ger minst spill, 8 procent"

"ger minst spill" hoppar i syftningen: det är inte reglarna som ger minst spill, det är valet av handelslängd. Och "à" är franska i en text som annars låtsas vara pratspråk.

> "78 gipsskruv räknat, köp 100"

Verblös, och "räknat" hänger fritt i slutet. Jag antar att det betyder "framräknat", men det kan lika gärna betyda "inräknat".

> "Skruven är 3,9 × 41 mm med grov gänga"

Jag vet inte vad grov gänga är eller varför jag ska bry mig. Att det är regeln bakom som avgör står på en helt annan sida.

> "10 kvm mineralull 45 mm, som du får kapa själv"

"som du får kapa själv" är ett besked om att något är besvärligt, levererat som om det vore en upplysning om mått.

> "Kalkylatorn väljer därför c 400 mm åt dig så länge du står på ett lag."

"så länge du står på ett lag" — står på? Jag står inte på gipset, jag skruvar upp det. Det är en byggarens formulering ("du står på ett lag gips") som inte går att läsa för någon utanför yrket.

> "Materiallistan i innerväggsguiden räknar per löpmeter vägg och landar på 6,2 löpmeter virke per meter. Talet är en täthet, och den rymmer inte regeln i den sista väggänden."

Här förklaras varför sajtens egen guide säger ett annat tal än sajtens eget verktyg. Det är redaktionens problem, inte mitt, och det står mitt i det jag ska läsa.

**Helhet.** Stycket som börjar "Grundtanken är att en vägg är samma sak om och om igen" är riktigt bra skrivet, och exemplet med fyra meter och sju fack sitter. Men verktyget pratar konsekvent byggarsvenska i resultatet och gör-det-själv-svenska i brödtexten, och den som läser uppifrån och ner möter byggarsvenskan först.

**Betyg: 3.**

---

## gipsplugg

**Kortet.** `'Vad håller i gipsväggen?'` är en utmärkt rubrik. Raden `'Vikt, skivtjocklek och antal punkter ger plugg, regel eller kortling.'` är däremot bland de mest obegripliga i galleriet: **punkter** utan sammanhang, **kortling** som ingen utanför byggbranschen känner till, och **regel** som jag läser som en föreskrift. Ett svar som är "regel eller kortling" låter som ett juridiskt alternativ.

**Meningar jag inte förstod.**

> "Under 5 kg per punkt räcker en X-krok eller en klisterremsa."

Faktarutan igen, innan jag fått veta vad "per punkt" är. Begreppet introduceras i raden ovanför ("dela vikten på antalet infästningar"), men ordet byts från *infästning* till *punkt* mellan raderna, och jag hinner inte förstå att det är samma sak.

> "Plugg, en plugg i skivan räcker"

Så ser beskedet ut i resultatspalten: ett stort ord, sedan en förklarande svans. Konstruktionen upprepas i alla fyra svaren ("Kortling, öppna väggen och sätt en kortling") och blir en tautologi med kommatecken.

> "Vi räknar den raden som halva antalet punkter, avrundat nedåt."

"Den raden" är den övre skruvraden, nämnd i meningen före. Men "raden" används i samma text också om rader i tabellen, och jag tappar bort vilken rad som är vilken.

> "Ingen rad i tabellen är märkt för lasten per punkt."

"märkt för" en last är fackspråk. Och "ingen rad i tabellen" gör mig till läsare av en tabell i stället för en person med en hylla.

> "hela tavlan vid ram 60 × 90 cm, mindre ram bär mindre"

En anmärkning i tabellen. "hela tavlan" mot "per punkt" i kolumnen bredvid — två olika måttsystem i samma tabell utan att det sägs rakt ut. "mindre ram bär mindre" är telegram.

> "Armen gör vikten till en hävarm."

Det är fysikaliskt slarv som låter klokt: armen gör inte vikten till en hävarm, armen *är* hävarmen. Jag fastnade och läste om.

> "Ska du hänga tungt i gipsvägg, eller sätta upp ett tv-fäste på gipsvägg med svängarm, går vår gräns vid 20 kg."

Två sökfraser inbakade i en mening, och "på gipsvägg med svängarm" läser jag först som att väggen har en svängarm.

> "Faller en tv framåt gör den det över soffan."

Den här är bra. Kort, kylig, och jag ser den framför mig.

**Helhet.** Det här verktyget har den bästa hjälptexten på hela sajten: "Väg den, gissa inte. Ställ dig på badrumsvågen med saken i famnen och dra bort din egen vikt. En hylla räknas fylld, inte tom." Där hör jag en människa. Gränsdragningen där redaktionen säger "gränsen är vår, den är medvetet försiktig" är också hederlig på ett sätt jag inte är van vid.

**Betyg: 4.**

---

## gipsskruv

**Kortet.** `'Vilken gipsskruv ska du ha?'` är bra. Raden `'Skivtjocklek, antal lag och regel ger längd, gänga och spets.'` är den sämsta raden i hela registret, ägarens exempel inräknat. **Lag** läser jag som lag, **regel** som regel, **spets** som spetsig ände i bästa fall. Sex substantiv, noll verb, tre dubbeltydigheter. Jag kan inte av raden avgöra om verktyget handlar om skruv eller om byggregler.

**Meningar jag inte förstod.**

> "Ett lag gips på träregel tar 41 mm med grov gänga."

Faktarutan. "tar" om en skruvlängd. Jag förstår det efter ett par sekunder, men det är ett par sekunder på rad fyra på sidan.

> "I plåt över 0,9 mm ska skruven ha borrspets."

Här dyker "plåt" upp för första gången utan att någon sagt att en regel kan vara av plåt.

> "Grov gänga är gjord för trä och snurrar runt i en stålprofil utan att ta"

"utan att ta" är yrkesspråk. Ta vad? Jag saknar ett objekt.

> "S-spets eller nålspets" / "I trä går både S-spets och nålspets rakt in i virket."

S-spets förklaras aldrig. Nålspets och borrspets får var sitt stycke, men S-spets står där som en bokstav.

> "Torrt rum ger korrosivitetsklass C1, utomhus ger C4, och våtrum får C4 av oss fastän källorna nöjer sig med C1 bakom ett färdigt tätskikt."

En mening med tre klassbeteckningar, en källkritisk invändning och ett fackord (tätskikt) som förklaras först längre ner. Och "får C4 av oss" — som om klassen vore ett betyg redaktionen delar ut.

> "Två rader avviker med flit, och båda säger det på skärmen"

"på skärmen" pekar på verktyget ovanför, men jag läser en punktlista om hur de räknar, och "raden" har redan använts om tabellrader och om skruvrader.

> "Den här längden finns lös i påse. Bandet i butiken är 41 mm för träregel, alltså inte den skruv du fick, men maskinen matar hela spannet."

Det här är en annonstext förklädd till information, och den gör en kullerbytta: jag får veta att produkten inte passar mitt svar, men att jag ändå ska titta på den.

> "Gyprocs monteringshandbok och Norgips montagehandbok ligger som PDF-filer vi inte kunnat läsa maskinellt."

Det här är ett internt arbetsproblem. Jag bryr mig inte om hur redaktionen läser sina PDF-filer, och "maskinellt" antyder att sidan är skriven av en maskin, vilket är exakt det intryck man inte vill ge.

**Helhet.** Brödtexten är tydlig och stycket "Två lag ändrar allt" är effektivt. Men verktyget serverar sex fackord i resultatspalten (gänga, spets, godstjocklek, korrosivitetsklass, fosfaterad, fogtätning) och förklarar dem i en annan ordning än den jag läser dem.

**Betyg: 3.**

---

## kvadratmeter

**Kortet.** `'Räkna ut kvadratmeter och åtgång'` — **åtgång** av vad? Ordet står ensamt och kan betyda nästan vad som helst. Raden `'Mått, dörrar och fönster ger kvadratmeter, färg, tapetrullar och spill.'` säger att dörrar ger färg, vilket de inte gör. Och **spill** som ett resultat man får ut är bakvänt; spill är något man drabbas av.

**Meningar jag inte förstod.**

> "Hur mycket färg behöver jag, hur många tapetrullar går det åt och hur räknar jag ut golv med spill: alla tre svaren står under kvadratmetertalet."

Tre sökfraser radade efter varandra med kolon. Ingen skriver så, och jag ser vad det är.

> "25 våder täcker de 13,1 m vägg som ska tapetseras, alltså omkretsen utan dörröppningarna"

**Våd** är ett ord jag aldrig använt. Det förklaras i brödtexten ("Tapet räknas i våder, inte i kvadratmeter") som ligger under resultatet.

> "Med mönsterpassning blir våden 2,65 m, och då behövs 8 rullar"

Mönsterpassning och mönsterrapport används båda, som synonymer, utan att något av orden definieras på det ställe där det först dyker upp.

> "Färst burkar vinner, men bara bland dem som lämnar högst 30 procent över."

"Färst" är korrekt svenska men sällsynt nog att det hackar. "Vinner" om burkar är en tävlingsmetafor som inte hör hemma. Och "lämnar över" betyder här blir kvar, vilket är en annan betydelse än den vanliga.

> "På obehandlat underlag går det 4,5 liter grundfärg till, alltså 1 burk om 2,5 liter och 2 burkar om 1 liter"

"går det till" om åtgång. Och underlaget dök upp utan att jag fått frågan om mitt underlag är obehandlat — det finns inget sådant fält i formuläret.

> "Ingen dörr ifylld, alltså inget avdrag"

Verblös. Och "avdrag" är samma ord som rotavdraget använder om skatt, här om kvadratmeter.

> "Är rummet vinklat delar du upp det i två rektanglar och räknar varje för sig."

Bra hjälptext, och exakt så jag hade tänkt.

> "Där stannar marknadens räknare."

Det här är en mening om konkurrenter, inte om mitt rum. Jag vet inte vilka "marknadens räknare" är och har inte bett om en jämförelse.

**Helhet.** Genomgången med rummet på fyra gånger tre meter är föredömlig: jag kan följa varje steg och känner igen mitt eget rum. Men verktyget försöker vara fyra verktyg (kvadratmeter, färg, tapet, golv) och resultatspalten blir en lista med tolv rader där jag måste leta upp min egen.

**Betyg: 3.**

---

## bygglov-altan

**Kortet.** `'Behöver altanen bygglov?'` är rakt. Raden `'Höjd, avstånd och detaljplan ger svaret med lagrum.'` — **lagrum** är ett juristord. Jag gissade "ett rum där lagen finns". **Avstånd** till vad? Det finns tre avstånd i verktyget och raden säger inte vilket.

**Meningar jag inte förstod.**

> "Verktyget svarar nej, inget bygglov för altanen du fyllt i."

Faktarutans första rad, genererad av koden. "svarar nej, inget bygglov" är två negationer efter varandra och jag måste läsa om för att veta om jag behöver lov eller inte. Formuleringen "för altanen du fyllt i" gör dessutom altanen till något jag fyllt i, inte byggt.

> "Troligen, fråga kommunen"

Ett av tre möjliga svar, och det står som stort tal i resultatspalten. "Troligen" vad? Troligen bygglov, eller troligen inte?

> "golvet ligger 0,8 m över marken, mot en byggnad"

Verblös rad med två påståenden hoplimmade av ett komma. "mot en byggnad" är dessutom ofullständigt; altanen ligger mot en byggnad, inte golvet.

> "Bygger du utan lov när lov krävs — 24 800 kr i byggsanktionsavgift"

Rubriken är en villkorssats utan huvudsats, och under den står ett belopp. **Byggsanktionsavgift** förklaras aldrig i klartext; jag får veta hur den räknas ut men inte att det är en bot.

> "räknat på prisbasbeloppet 59 200 kr"

**Prisbasbelopp** är ett av de där orden som alla på Skatteverket känner till och ingen annan. Det förklaras nio stycken ner.

> "Avståndet till tomtgränsen ger aldrig ett bygglovskrav i sig. Det ger raden om grannens skriftliga medgivande."

"Det ger raden om" — ett avstånd som ger en rad. Det är redaktionens interna språk om sitt eget gränssnitt, satt i en punktlista jag ska läsa som fakta om lagen.

> "Lagen säger en byggnad, inte bostadshuset, så en altan intill garaget eller förrådet räknas som nära den byggnaden."

Den här är faktiskt lysande. Den fångar exakt den sorts detalj som avgör och som ingen annan skriver ut.

> "Med dem försvann kravet på anmälan och startbesked för det som är lovfritt."

"Med dem" syftar på orden friggebod, attefallshus och attefallsaltan, nämnda i meningen före. Att ord försvinner ur en lagtext och att ett krav försvinner är två helt olika saker, och meningen buntar ihop dem.

**Helhet.** Det här är ett verktyg som har en riktig nyhet att berätta — att lagen skrevs om i december 2025 — och som berättar den bra. Men språket glider mellan myndighet och kompis utan förvarning, och beskeden i resultatspalten är de mest tvetydiga på sajten, vilket är illa i ett verktyg vars hela poäng är att svara ja eller nej.

**Betyg: 3.**

---

## altan

**Kortet.** `'Räkna trall, reglar och plintar'` — tre fackord i rad, men alla tre är ord man snappar upp om man tänkt bygga altan, så det går. Raden `'Yta, riktning och regeldimension ger trall, reglar, plintar och skruv.'` — **riktning** på vad? Min riktning? Altanens? **Regeldimension** är ett ord från en offert, inte från ett kort.

**Meningar jag inte förstod.**

> "Stommen blir 9 reglar tvärs brädorna."

Faktarutan. "tvärs brädorna" utan preposition. Man säger "tvärs över" eller "på tvären mot". Så här låter det som en byggnotering.

> "Trallskruven går på 468 stycken, två per korsning."

**Korsning** är ett ord för vägar och för det man gör med hundraser. Att det betyder "där en bräda ligger över en regel" står inte förrän i brödtexten.

> "Längderna lämnar 7 procent kap i högen"

Resultatspalten. "kap" som substantiv, i obestämd form, om spill. Och "i högen" antyder en hög jag inte vet att jag har. Det här är byggplatsspråk rakt av.

> "Reglarna spänner 3,0 m mellan bärlinorna, och dimensionen klarar 2,31 m"

En regel som **spänner**, en **bärlina**, och en **dimension** som **klarar** något. Fyra begrepp jag måste ta på tro, och meningen säger dessutom rakt ut att mitt bygge inte håller, som en tabellrad, utan att flagga det.

> "Spänn inte 45 × 145 mm längre än 2,31 m mellan bärlinorna. Reglarna ska gå 3,0 m här. Altanen får därför två bärlinrader, och plintarna under dem är inräknade i talet."

Detta är staccato i ren form: tre korta satser efter varandra, ingen av dem kopplad till den föregående med annat än ett "därför". "Reglarna ska gå 3,0 m här" — här var? Och "inräknade i talet", vilket tal?

> "8 plintar, alltså 4 i varje rad, med högst 1,64 m mellan två plintar"

"mellan två plintar" i stället för "mellan plintarna" gör det till en abstrakt regel i stället för ett mått på min altan.

> "Reglarna fästs i bärlinan med vinkelbeslag och ankarskruv, eller snedskruvas med två skruv per infästning."

**Snedskruvas** är ett verb jag aldrig sett. Ingen förklaring.

> "Det är därför valet av regeldimension är dyrare eller billigare än det ser ut i prislistan."

Ett val kan inte vara dyrare eller billigare; det är konsekvensen som är det. Och "än det ser ut i prislistan" — vilket "det"?

> "tabellen sätter plintavståndet lägre än de 2,5 m verktyget räknade med fram till den 19 september 2026"

Ett ändringsmeddelande till redaktionen, publicerat som text till mig. Jag har aldrig använt verktyget förut och vet inte vad det räknade med i somras.

> "Ett golv på fyra meter ska ha fyra meter långa brädor ur längden på 4,2 m, inte ur den längsta i hyllan."

Den här är däremot precis rätt: konkret, motiverad, och den sparar mig pengar.

**Helhet.** Här finns verkligt kunnande — resonemanget om att springan växer när virket torkar, och att plintarna följer regeln och inte ytan, är bättre än något jag hittat på nätet. Men resultatspalten är skriven av en snickare till en annan snickare, och jag är varken.

**Betyg: 3.**

---

## dranering

**Kortet.** `'Vad kostar det att dränera om huset?'` — mycket bra, precis min fråga. Raden `'Mått, djup och tejptest ger pris per löpmeter och om du behöver gräva.'` faller på **tejptest**, ett ord som inte finns utanför den här sajten och som här står som om det vore allmängods. **Löpmeter** vet jag ungefär vad det är, men inte varför en husgrund mäts i det.

**Meningar jag inte förstod.**

> "Tejpa plast på källarväggen innan du beställer något."

Faktarutan, fjärde raden. Nu vet jag att det finns tejp och plast inblandat, men inte varför, och "beställer något" är så vagt att det kunde handla om pizza.

> "Räknat på 2,5 m schaktdjup och att du inte gjort testet."

En underrad till priset. Den säger mig att priset bygger på att jag *inte* gjort något, vilket låter som om jag blir straffad. Och **schaktdjup** har inte förklarats vid den punkten.

> "Rotavdrag 21 600 kr på den undre kanten, räknat utan maskinhyran"

"den undre kanten" av vad? Prisspannet, men ordet "kant" har inte etablerats. Och "räknat utan maskinhyran" är ett villkor som helt ändrar talets innebörd, gömt i en bisats sist.

> "En avfuktare kostar 5 948 kr, grävningen 20 gånger mer"

Verblös andra sats. Och jämförelsen mellan en maskin jag kan bära och ett markarbete är visserligen poängen, men den serveras som en tabellrad utan att någon sagt varför de två ens jämförs.

> "Gör det billiga först, mät sedan, gräv sist."

Tre imperativ i rad. Det är effektivt en gång, men samma trekolonnsrytm dyker upp i minst fem av de fjorton verktygen och börjar låta som en slogan.

> "Schakten går ner till 3,0 m, inte till de 2,5 m vi räknar som normalt djup. Därför ligger arbetet på 3 750 kr per löpmeter i stället för 3 000."

Bra, tydligt och motiverat. Så här borde resten se ut.

> "Påslaget slår igenom helt på den undre kanten och halvt på den övre. Fördubblingen är redan motiverad med djup och berg, så att räkna påslaget fullt ut i båda ändarna vore att ta samma svårighet två gånger."

Det här är intern metodologi. Den är hederlig, men den ligger i en punktlista som heter "Så räknar vi" och som en vanlig läsare öppnar för att förstå sitt eget pris, inte för att granska metoden.

> "Ett papper utan en enda siffra är ett säljbesök."

Bäst i hela galleriet. Den meningen är värd hela sidan.

**Helhet.** Det här verktyget har ett ärende: att hindra mig från att gräva i onödan, och det ärendet bär hela texten. Tejptestet är förklarat två gånger i brödtexten och förtjänar det. Men i faktarutan, formuläret och resultatspalten används "tejptestet" i bestämd form som om jag redan visste, och det är en sak som återkommer.

**Betyg: 4.**

---

## kallare

**Kortet.** `'Vad är det för fukt i källaren?'` är en riktig fråga som jag känner igen. Raden `'Vad du ser, tejptestet och hygrometern ger diagnosen och nästa steg.'` har två bestämda former av saker jag aldrig hört talas om — **tejptestet** och **hygrometern** — och en **diagnos**, som är ett läkarord om ett hus. "Vad du ser" i en uppräkning bredvid två instrument är dessutom grammatiskt ojämnt.

**Meningar jag inte förstod.**

> "Vattnet kommer från marken, luften eller ett läckage."

Två av tre är platser, den tredje är en händelse. Uppräkningen haltar och jag hakar upp mig.

> "Vått mot väggen är markfukt, vått mot rummet är kondens."

Faktarutan. Två verblösa halvor. Jag har ingen aning om vad som är "mot väggen" — plasten, som nämns i raden före, men "vått mot väggen" skulle lika gärna kunna vara golvet.

> "Fukt på plastens insida, mot väggen"

Ett av fyra svarsalternativ i formuläret. "Insida" på en bit plast som sitter platt på en vägg är inte ett begrepp jag har. Utsida och insida av en tejpad lapp kräver att jag tänker efter i flera sekunder, och det är ett formulärval.

> "Fuktig luft, orsaken oklar"

Ett av fem besked, satt som det stora ordet i resultatspalten. Halva beskedet är alltså att de inte vet.

> "Vet inte än"

Samma sak, ännu tydligare. Som stort besked i ett verktyg jag just fyllt i är det hårt.

> "Vita ränder eller kristaller på betongen. Det pekar mot markfukt. Härnäst: tejptestet."

Tre meningar av telegramtyp, varav den sista är ett kolon och ett substantiv. Det är inte en mening, det är en post-it-lapp.

> "Av samma skäl ska ytskiktet inne i källaren vara diffusionsöppet, alltså släppa igenom vattenånga."

**Diffusionsöppet** förklaras direkt efter, vilket är bra, men det är ändå ett ord jag inte kommer minnas fem rader senare när "ytskikt" också behöver förklaras och inte får det.

> "Tejpa gärna två lappar på samma vägg, en vid golvet och en i brösthöjd. Vatten stiger högre i finporösa material än i grova, så är den nedre våt på väggsidan och den övre torr har du hittat gränsen där vattnet slutar orka uppåt."

Den här älskar jag. "Där vattnet slutar orka uppåt" är precis rätt bild.

> "radon syns inte på plasten och bryr sig inte om din avfuktare"

Också bra. Rolig och skrämmande samtidigt.

**Helhet.** Det här är det mest genomtänkta verktyget på sajten: det vet vad det vill hindra mig från att göra och säger det utan att bli mästrande. Men beskedet "Vet inte än" i stor stil, plus fyra fackord i formuläret som förklaras först i svaret, gör att vägen fram till det goda är onödigt brant.

**Betyg: 4.**

---

## rotavdrag

**Kortet.** Det här är det som fick ägaren att fråga vad det betyder, och han har rätt. `'Hur mycket blir rotavdraget?'` är däremot en bra rubrik. Raden `'Arbetskostnad, ägare och tak ger avdraget och vad du betalar.'`: **ägare** kan vara husägaren, hantverkarfirmans ägare eller den som äger arbetet, **tak** är först och främst det som sitter på huset, och **arbetskostnad** är bara begripligt för den som redan sett en faktura uppdelad i arbete och material. Tre ord, tre missförstånd, och inget verb som räddar mig. Raden lyder i praktiken "tre substantiv ger två resultat" och kunde stå på vilket verktyg som helst.

**Meningar jag inte förstod.**

> "Det gemensamma taket slog i"

Beskedets rubrik i resultatspalten, i fetstil. "slog i" om ett tak låter som att någon slagit huvudet i det. Att det betyder "vi nådde gränsen" är en bild som kräver att man redan tänker i tak som gränser.

> "Rot-taket slog i"

Samma sak, och nu med bindestreck, vilket gör "rot" till något jag läser som växtrot först.

> "Arbetskostnaden är större än taket bär, så 15 000 kr av avdraget föll bort."

Ett tak som **bär** en arbetskostnad. Taket har på tre rader varit något man slår i och något som bär. Det är två motsatta bilder av samma sak.

> "Kvar av rot-taket 12 000 kr i år, av 50 000 kr"

Verblös rad med två belopp och två prepositioner. "av 50 000 kr" hänger på slutet utan att jag vet om det är takets totala storlek eller något jag använt.

> "Utan avdrag på fakturan 50 000 kr, alltså 33 procent av den"

"av den" — av fakturan, men närmaste substantiv är avdrag. Jag läser fel varje gång.

> "Räkna bara dem som står på bostaden och betalar för arbetet."

Hjälptext under "Så många äger bostaden". Man **står på** en bostad? Man står på ett kontrakt eller äger en bostad. Konstruktionen finns inte.

> "Den äter både av rot-taket och av det gemensamma taket på 75 000 kr."

"Den" är summan för alla ägare, nämnd i meningen före. **Äter av** ett tak är tredje bilden för samma tak i samma formulär.

> "därför står det i svaret när fältet är tomt att den gränsen inte är vägd"

Syftningen hoppar tre gånger i en mening, och "vägd" om en gräns är ett ord redaktionen uppfunnit. Jag läser "vägd" som att någon ställt den på en våg.

> "Den sida som i dag rankar högst på 'renovera kök kostnad' anger rot-taket till just 75 000 kr."

Det här är SEO-arbete publicerat som brödtext. Jag är en husägare som vill veta mitt avdrag. Att en konkurrent har fel på en sökfras jag inte sökt på är inte min sak, och ordet "rankar" avslöjar exakt vilket rum texten skrevs i.

> "Alla tal om procentsats, tak och datum kommer från Skatteverket"

Efter det här har jag räknat ordet "tak" elva gånger på sidan, i minst fyra olika betydelser.

> "Det är dagen du betalar som avgör, inte fakturans datum."

Den här är perfekt, och det är sidans bästa insikt. Den drunknar i taken.

**Helhet.** Innehållsligt är det här förmodligen det mest värdefulla verktyget på sajten, och det finns riktigt bra stycken i det ("Är du pensionär, studerande eller föräldraledig är det ofta den här raden och inte taket som sätter gränsen"). Men ordet "tak" bär tre olika bilder samtidigt, beskeden i resultatspalten är metaforer i stället för besked, och SEO-analysen ligger öppet i texten. Det är det verktyg där avståndet mellan hur bra innehållet är och hur illa det går att läsa är störst.

**Betyg: 2.**

---

## trappa

**Kortet.** `'Räkna steghöjd och stegdjup till trappan'` — två fackord, men båda går att gissa. Raden `'Våningshöjden ger antal steg, steghöjd, stegdjup och lutning.'` är galleriets enda rad som fungerar fullt ut: ett ingångsvärde, fyra svar, inga tvetydigheter. Den är beviset för att formeln kan bära när underlaget är enkelt.

**Meningar jag inte förstod.**

> "Stegdjupet följer av steghöjden genom trappformeln."

Faktarutans första rad, alltså det första jag läser på sidan. **Trappformeln** i bestämd form, som om den vore lika känd som Pythagoras sats. Nästa rad förklarar den ("Två gånger steghöjden plus stegdjupet ska bli 600 till 650 mm"), men i fel ordning, och den förklarar inte varför summan ska bli det.

> "Måtten håller inte"

Beskedet i resultatspalten. "Håller" om mått är byggarspråk för "uppfyller kravet". Jag läser det först som att måtten inte håller fysiskt, alltså att trappan rasar.

> "Boverket anger inga stegmått, måtten kommer från branschen."

Faktarutans femte rad. Det är en källkritisk brasklapp placerad bland fyra byggråd, och den tar bort auktoriteten från de fyra raderna ovanför innan jag ens hunnit använda dem.

> "Exakt 168,8 mm. Stegen ska summera till våningshöjden, så måttet får inte rundas av."

**Summera** som intransitivt verb ("stegen ska summera till") är fel svenska. Stegen ska summeras till, eller summan av stegen ska bli.

> "Stegdjup 292 mm, och 13 plansteg att bygga plus vilplanet"

**Plansteg** och **vilplan** står oförklarade i resultatspalten. Vilplan har en hjälptext i formuläret; plansteg har ingen någonstans.

> "Trappformeln landar på 630 mm"

Ett tal utan enhetsförklaring och utan att jag vet om 630 är bra eller dåligt. Att det är bra får jag veta först i "Därför blev svaret så", långt nedanför.

> "Den enda svenska trappräknaren där är en artikel från 2012 med en app uppdaterad 2020, och varken den eller någon av artiklarna omkring nämner Boverket."

Konkurrensanalys publicerad som text till mig. "Vi läste igenom träfflistan på trappa steghöjd i september 2026" i meningen före är ännu tydligare: det är en anteckning från ett SEO-möte.

> "Den som skrevs för ändamålet ligger bakom betalvägg och vi har inte läst den, så vi kan inte mäta mot den heller."

Hederligt, men det är tre meningar i rad om vad redaktionen inte gjort, i det stycke som ska förklara vad verktyget gör.

> "Det andra är två allmänna råd om stegdjup ur de gamla byggreglerna, som gällde till 1 juli 2025 och inte längre går att hänvisa till. Alternativet vore att inte pröva stegdjupet alls, och det hjälper ingen som står med ett måttband i handen."

Andra halvan är bra. Första halvan är en juridisk brasklapp som ligger före den.

> "Efter tre steg går du på minnet och slutar titta ner, och då är det avvikande steget det som fäller dig."

Utmärkt. Konkret, sann och skrämmande på rätt sätt.

**Helhet.** Det här verktyget har ett rejält problem som inte är språkligt utan redaktionellt: det ägnar mer plats åt att förklara att Boverket inte har några mått, att den gamla regeln är upphävd, att standarden ligger bakom betalvägg och att konkurrenten är från 2012, än åt att förklara min trappa. Jag kom hit för att veta hur höga stegen ska vara, och fick en källkritisk essä. Beskeden "Måtten håller" och "Måtten håller inte" är dessutom tvetydiga i ett verktyg som handlar om en konstruktion som ska hålla.

**Betyg: 2.**

---

## mala-ute

**Kortet.** `'Kan du måla ute i dag?'` är sajtens bästa rubrik. Raden `'Temperatur, luftfuktighet, natt och klockslag ger om färgen hinner torka före daggen.'` är däremot sajtens längsta och nästan sämsta: **natt** står som en storhet bland mätvärden, **klockslag** i obestämd form singular om två klockslag, och "**ger om**" är inte en konstruktion som finns i svenskan. Man ger inte om något. Raden skulle behövt vara "Vädret i dag och i natt säger om färgen hinner torka."

**Meningar jag inte förstod.**

> "Titta på natten först, inte på dagen."

Faktarutans första rad. Jag läser den bokstavligt och blir stående: ska jag gå ut på natten och titta? Poängen är nattens *prognos*, men det ordet saknas.

> "Fasadfärg vill ha minst 7 grader på yta och luft tills den torkat."

En färg som **vill ha** något är en bild som används i minst fyra verktyg ("tunnare brädor vill ha tätare reglar", "stål vill ha fin gänga", "en spacklad vägg suger mer"). Första gången är den charmig. Femte gången är den en tic.

> "Ja, men sluta senast 14"

Beskedet i resultatspalten, som stort tal. Ett klockslag i egenskap av svar, utan "kl" och utan minuter. Jag läste först 14 som en temperatur.

> "är senaste klockslaget att sluta, sedan faller daggen"

Svansen bredvid det stora talet. Meningen saknar subjekt, för subjektet är siffran bredvid. Konstruktionen upprepas i gipsplugg och bygglov och fungerar inte i något av dem.

> "Ytan går ner till 6 °C i natt, alltså 2,5 °C under daggpunkten"

**Ytan** i bestämd form utan att jag valt någon yta. Jag valde "I skugga", inte en yta.

> "Klibbfri på 3 tim i dag, mot 1 tim i databladet vid 15 °C och 65 %"

Fyra tal, två enheter, ett fackord (**databladet**) och en jämförelse, i en rad. Och "klibbfri" är ett ord som används fjorton gånger på sidan utan att någonsin sägas rakt ut vad det innebär att göra eller inte göra när färgen är det.

> "Övermålningsbar på 8 tim, alltså kl 18"

**Övermålningsbar** är ett ord från en burk, inte från ett samtal.

> "Senaste klockslaget att sluta måla är 14: solnedgången minus 2 timmar minus torktiden till klibbfri"

En uträkning utskriven som en mening, med kolon i mitten. Det är kod som blivit text.

> "Ett stopp ger vänta. Dagg utan stopp ger ett klockslag att sluta senast. Ingetdera ger ja, med klockslaget som råd."

Tre meningar i punktlistan "Så räknar vi". Ingen av dem har ett riktigt subjekt, "ger" används i alla tre i samma formelmening som på korten, och den sista är obegriplig: "Ingetdera ger ja" läser jag som att ingendera ger ja, alltså tvärtom mot vad som menas.

> "Går solen ner klockan sju är sista penseldraget vid tvåtiden."

Den här är perfekt. Så borde hela resultatspalten skrivas.

> "att ytan ligger två grader under luften på kvällen är vår erfarenhet av dagg på bilar och tak"

Också bra. Jag tror på den, för jag har sett dimman på bilrutan.

**Helhet.** Underlaget är ovanligt bra genomarbetat och de tre brödtextstyckena om våren, hösten och daggen är riktigt läsvärda. Men resultatspalten är verktygets hela poäng, och den är en lista av sex rader där varje rad är en uträkning i stället för ett besked. Det stora ordet är ett klockslag utan sammanhang.

**Betyg: 3.**

---

# Mönstren som går igen

Det här är det viktigaste i rapporten. Varje enskild mening jag citerat ovan går att rätta på tio sekunder. Mönstren gör det inte, för de sitter i mallen.

## 1. Substantivformeln "A, B och C ger X och Y"

Tretton av fjorton kortrader. Ingen av dem har ett verb annat än "ger", inget av substantiven är böjt in i en mening, och varje substantiv måste bära sin betydelse ensamt. Det är den formulering som är minst tålig mot tvetydiga ord, och sajten är full av tvetydiga ord.

- `'Arbetskostnad, ägare och tak ger avdraget och vad du betalar.'`
- `'Skivtjocklek, antal lag och regel ger längd, gänga och spets.'`
- `'Vikt, skivtjocklek och antal punkter ger plugg, regel eller kortling.'`
- `'Temperatur, luftfuktighet, natt och klockslag ger om färgen hinner torka före daggen.'` (här blir det till och med ogrammatiskt: *ger om*)

Formeln läcker dessutom ut i sidorna: "Ett stopp ger vänta", "Kondens ger mät först", "Avståndet till tomtgränsen ... ger raden om grannens skriftliga medgivande", "Temperaturen du valt sätter den dimensionerande temperaturen".

## 2. Bestämd form om saker jag aldrig fått höra talas om

Sajten skriver genomgående **tejptestet**, **hygrometern**, **trappformeln**, **gångtiden**, **kapmånen**, **databladet**, **märkeffekten**, **kallaste ytan**, **löpmetern** — bestämd form, som om vi redan pratat om dem. Det är en röst som förutsätter en läsare som läst artikeln, och den ligger på korten och i faktarutorna, alltså före artikeln.

- Kortet: `'Vad du ser, tejptestet och hygrometern ger diagnosen och nästa steg.'`
- Faktarutan i trappan: "Stegdjupet följer av steghöjden genom **trappformeln**."
- Faktarutan i dräneringen: "Tejpa plast på källarväggen innan du beställer något." (och två rader senare "Plasten säger om du ska gräva")

## 3. Resultatspalten är en tabell, inte ett besked

I alla fjorton verktyg är högerspalten en lista av kompakta rader utan verb, där varje rad är en uträkning som bara går att läsa om man redan vet vad posterna heter. Det är exakt tvärtemot vad en resultatspalt ska göra.

- "78 gipsskruv räknat, köp 100"
- "Längderna lämnar 7 procent kap i högen"
- "Kvar av rot-taket 12 000 kr i år, av 50 000 kr"
- "märkt kapacitet, uppgiven vid 20 °C och 60 % RF, motsvarar cirka 14 liter i din källare vid 10 grader"
- "Klibbfri på 3 tim i dag, mot 1 tim i databladet vid 15 °C och 65 %"
- "Ingen dörr ifylld, alltså inget avdrag"

## 4. Ett ord, tre bilder, samma sida

Värst i rotavdraget, där **taket** slår i, bär en arbetskostnad och blir uppätet — tre oförenliga metaforer för samma sak på fyra rader, på en sajt där tak dessutom är något man lägger papp på. Samma sak med **regel** (träbit vs. föreskrift), **lag** (skikt vs. lagbok vs. fotbollslag), **rad** (tabellrad vs. skruvrad vs. bärlinrad vs. textrad), **avdrag** (skatt vs. kvadratmeter) och **punkt** (skruvhål vs. mätpunkt vs. plats).

## 5. Fackordet kommer före sin förklaring

Ordningen är nästan alltid fel: ordet står i kortet eller faktarutan eller resultatspalten, och förklaringen står i brödtexten under. **Syll**, **hammarband**, **avväxling**, **kortling**, **bärlina**, **spännvidd**, **plansteg**, **våd**, **kap**, **gänga**, **spets**, **godstjocklek**, **korrosivitetsklass**, **fuktkvot**, **klibbfri**, **övermålningsbar**, **lagrum**, **prisbasbelopp**, **byggsanktionsavgift**, **märkt kapacitet**, **diffusionsöppet**. Några av dem får aldrig någon förklaring alls (S-spets, snedskruvas, plansteg).

## 6. Staccato som ersätter resonemang

Korta huvudsatser efter varandra, utan bindeord, som ska låta beslutsamma men bara blir hackiga. En gång per sida är effektivt. Sajten gör det i varje avsnitt.

- "Spänn inte 45 × 145 mm längre än 2,31 m mellan bärlinorna. Reglarna ska gå 3,0 m här. Altanen får därför två bärlinrader."
- "Vita ränder eller kristaller på betongen. Det pekar mot markfukt. Härnäst: tejptestet."
- "Gör det billiga först, mät sedan, gräv sist."
- "Två lag ändrar allt." / "Här vänder allt." / "Nio rullar." / "Plintarna är det som förvånar flest."
- "Ett stopp ger vänta. Dagg utan stopp ger ett klockslag att sluta senast. Ingetdera ger ja, med klockslaget som råd."

## 7. Aforismen i slutet av varje stycke

Det finns en tic: varje stycke ska sluta med en kort, kärnfull mening som sätter punkt. Enskilt är flera av dem utmärkta — "Ett papper utan en enda siffra är ett säljbesök", "Faller en tv framåt gör den det över soffan", "Räkna på den innan du hyr, inte efter". Men när samma rytm kommer i varje stycke i fjorton verktyg slutar den vara en människas infall och blir en mall, och jag börjar höra den komma innan jag läst den.

## 8. Redaktionens interna arbete publicerat som text till mig

Det här är det som mest av allt avslöjar att texten inte skrevs för mig.

- "Den sida som i dag rankar högst på 'renovera kök kostnad' anger rot-taket till just 75 000 kr."
- "Vi läste igenom träfflistan på trappa steghöjd i september 2026. Den enda svenska trappräknaren där är en artikel från 2012..."
- "tabellen sätter plintavståndet lägre än de 2,5 m verktyget räknade med fram till den 19 september 2026"
- "Gyprocs monteringshandbok och Norgips montagehandbok ligger som PDF-filer vi inte kunnat läsa maskinellt."
- "Vi verifierar formeln med egna mätningar under hösten."
- "Vi bygger en vägg med 13 mm skiva och drar åtta pluggtyper till brott med hängvåg i vinter."
- "Där stannar marknadens räknare."
- "Materiallistan i innerväggsguiden räknar per löpmeter vägg och landar på 6,2 ... Kalkylatorn räknar reglarna en och en och hamnar därför någon regel högre."

## 9. Sökfraser inklistrade i meningar

- "Här kan du räkna ut **elkostnad för en maskin**" (utan artikel, mitt i en mening)
- "**Hur mycket färg behöver jag, hur många tapetrullar går det åt och hur räknar jag ut golv med spill**: alla tre svaren står under kvadratmetertalet."
- "Ska du **hänga tungt i gipsvägg**, eller sätta upp ett **tv-fäste på gipsvägg med svängarm**, går vår gräns vid 20 kg."
- "**Hur mycket trall behöver jag** är frågan de flesta står med mitt i bygghandeln, och här kan du **räkna trall** innan du kör dit."

## 10. Samma tre meningar i alla fjorton

"Adressen innehåller dina värden. Markera och kopiera." / "Visar standardvärden tills indatan är rättad." / "står under verktyget" / "Metoden bakom våra siffror står på Så testar vi." / "Vad siffrorna vilar på". Ordagrant identiska, fjorton gånger. **Indatan** är dessutom ett datavetenskapligt ord i ett felmeddelande riktat till en husägare, och det står i ett varningsfält där jag är som mest stressad.

## 11. Personifierade material

"Tunnare brädor **vill ha** tätare reglar", "stål **vill ha** fin gänga", "Fasadfärg **vill ha** minst 7 grader", "En spacklad vägg **suger** mer", "väggen **suger efter** mer vatten", "hylla **vill vrida sig** ut från väggen", "en regel som **spänner**", "skarvarna **jobbar** mer än de borde", "En hylla räknas **fylld**". Trevligt i små doser. Här är det systematiskt och gör att jag aldrig får ett rakt påstående om fysik.

---

# Vad jag skulle gjort

1. **Skriv om alla fjorton kortrader till meningar med verb**, där varje fackord antingen förklaras eller byts ut. Rotavdragsraden är inte ett undantag, den är mallen.
2. **Flytta förklaringarna före orden.** Om ett ord står i faktarutan eller i resultatspalten måste det förklaras där, inte i brödtexten under.
3. **Gör resultatspalten till meningar.** Ett besked ska vara en mening med ett verb som säger vad jag ska göra. Uträkningen kan ligga under.
4. **Ta bort redaktionens interna arbete ur den publika texten.** SEO-analyser, PDF-problem, ändringsdatum för verktygets egna konstanter och konkurrentjämförelser hör hemma i dokumentationen.
5. **Ransonera aforismerna.** Max en per sida. De är bra; det är att de är många som förstör dem.
