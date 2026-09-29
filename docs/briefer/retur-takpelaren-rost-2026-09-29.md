# Retur: takpelaren, röstvarv 2026-09-29

Läst i följd som en husägare från Google: snörasskydd, hängrännor, plåttak, takstolar, räknaren för takbyte och räknaren för takavvattning. Räknarna är renderade på dev-servern som redan körde på port 4398 (pid 5052). Min egen start på 4391 avbröts av Astro eftersom en server redan var igång, så det fanns ingen egen server att stänga. Jag stängde inte den som redan körde, eftersom den inte var min.

Körda lägen, takbyte: standard (betong), bandplåt, pulpet 27° med vinkel, pulpet med nockhöjd 1 m, bandplåt 15 x 10 m (195 m², gränsen nås), samma med två ägare, 6 x 6 m (53 m²) och 20 x 12 m (303 m²). Takavvattning: standard, "takfallets yta" (90 m²/10 m), 60 m²/10 m (Lindabraden), 300 m²/10 m, 300 m²/20 m, 22 x 10 m och pulpet 27°.

| Sida | Betyg |
|---|---|
| /tak/snorasskydd/ | 4 |
| /tak/hangrannor/ | 3 |
| /tak/plattak/ | 3 |
| /tak/takstolar/ | 3 |
| /rakna/takbyte/ | 3 |
| /rakna/takavvattning/ | 4 |
| **Medel** | **3,3** |

---

## /tak/snorasskydd/ (publicerad), betyg 4

Den bästa sidan i pelaren. Den börjar med saken ("Snön på ett plåttak kan ligga still länge och sedan glida ner i ett enda stycke"), tabellerna går att använda, och exemplet Stockholm mot Umeå (rad 207) är precis vad en läsare behöver. Det som drar ner är att tillverkarna fortfarande bär väldigt många meningar, och att två ämnen som andra sidor äger förklaras här igen.

Meningar:

- Rad 88: "Boverkets vägledning nämner "fasadens höjd, takets lutning eller friktionen i takmaterialet som innebär en särskild risk"." Citatet är ett lösryckt fragment. "som innebär" ser ut att bara höra till friktionen.
- Rad 102 till 104: "Så förklarar Lindab det, och Benders och BMI vill också ha skyddet längs hela taket. Även Boverket skriver att det kan behöva vara längre än sträckan över entrén. / Jag håller med dem." Det här är mallen "X säger, Y säger, jag väljer" i ren form. Meningen om snön från altanen och soptunnan räcker som skäl.
- Rad 110: "Så står det i Plannjas anvisning." En fristående källmening sist i ett stycke på sex meningar. Det är den nya tics som återkommer på alla fyra sidorna (se mönstren).
- Rad 122: "Benders säljer två per konsol för betongpannorna Palema, Exklusiv och Carisma, och en per konsol för lertegelpannorna Hansa och Tvilling". Två vad? Man måste backa till "spårpannorna" i meningen innan.
- Rad 128: "Det betyder 1 200 mm från mitten av en konsol till mitten av nästa, och c står för centrumavstånd." Takstolarna äger förklaringen av c, och ändå står den här. Bildtexten på rad 78 använder dessutom "c 1 200 mm" redan innan den förklaras.
- Rad 162: "Tillverkarnas tabeller är räknade mot snözonerna i EKS, de konstruktionsregler som upphörde den 1 juli 2026." EKS-historiken ägs av takstolarna. Rådet om att läsa i rätt kolumn behövs här, men inte historiken. Den kommer tillbaka på rad 224 ("Båda är räknade mot snözonerna i EKS").
- Rad 183: "Köper du Plannjas skydd finns ingen tabell, utan anvisningen hänvisar till en beräkning före monteringen." Läsaren blir stående. Vem gör beräkningen, och vad kostar den?
- Rad 213: "Tabellen gäller hinder längs hela taket med 6 meter tak ovanför". Är det 6 meter takfall? Jag förstod det inte vid första läsningen.
- Rad 226: "Har du andra pannor använder du Benders tabell som riktlinje och går ned till närmaste mått som pannans bredd går jämnt upp i: 250, 500 eller 750 mm för Exklusiv, 210, 420 eller 630 mm för Hansa, och 346 eller 692 mm för Tvilling." Den svåraste meningen på sidan. "Andra pannor" än vad? Exklusiv är ju också en betongpanna. "Går jämnt upp i" måste läsas två gånger.
- Rad 226: "På korta sträckor upp till ungefär 3 meter är rådet 600 mm." Vems råd?
- Rad 242: "Vad montering kostar per meter har jag inte hittat." Friskrivning. Stryk den och börja med rotmeningen.
- Rad 253 (FAQ): "Finns det särskild risk vid entrén skulle jag sätta skydd där." Samma råd och samma skäl som på rad 90, nästan ordagrant.
- Rad 252 (FAQ): "Lindab skriver att snön ska skottas bort när lasten på snörasskyddet blir för hög, men anger ingen gräns." Källan som subjekt och en friskrivning som slutkläm.

Röst: För det mesta låter det som en människa som förklarar ("en konsol för mycket kostar mindre än en extra resa till bygghandeln", "Saknas det är det här ett jobb att lämna bort"). Mitt på sidan tar tillverkarna över, och då låter det som en sammanställning av datablad.

## /tak/hangrannor/ (utkast), betyg 3

Den tätaste källsidan i pelaren. Ungefär 40 av runt 100 meningar har en tillverkare, en handbok, en kommun eller en firma som subjekt eller slutar med "skriver X"/"anger X". Det allvarligaste är ändå sakligt: guiden och räknaren säger olika saker om vad tabellen gäller.

Kan få läsaren att köpa fel:

- Rad 11 (kort svar): "Är takytan på varje sida av taket högst 75 kvadratmeter räcker en hängränna på 100 mm, och upp till 125 kvadratmeter behöver du **125 mm**." Tabellen på rad 78 heter "Högsta takyta per takfall". Räknaren säger i stället "Talen är den största takyta som rännan klarar till ett stuprör" (takavvattning.ts rad 708) och delar ytan mellan rören. Ett takfall på 90 m² med 12 m ränna ger alltså 125 mm i guiden men 100 mm i räknaren, som sätter två rör. Guiden säger bara att röret blir klenare med ett rör i varje ände (rad 118), aldrig att rännan blir det. Samma läsare får två svar på samma fråga.
- Rad 170 och 184: BraByggares "8 000 till 14 000 kronor" mot Jakub och Fars "12 000 till 20 000 kronor" för en enplansvilla, och sedan "de två spannen går inte att jämföra rakt av". Med tabellen på rad 174 blir 35 meter lackerad plåt 15 750 till 22 750 kr. Läsaren vet inte vilket tal hen ska budgetera efter, och det låga talet står i kortsvaret.

Frågorna i uppdraget:

- **Lindabs rör på 87 mm** (rad 102): Nu går det att förstå. "Lindabs stuprör heter 87 mm och står inte i tabellen" är bra. "Röret har samma tvärsnitt, 5 900 kvadratmillimeter, som 90-röret" väcker ändå frågan hur 87 och 90 kan ha samma yta. Stryk kvadratmillimetrarna och säg bara "läs det som 90".
- **10 m mot 20 m** (rad 116 till 118): Går att förstå. "AMA Hus och Plannjas tabell från 2010 godtar i stället ett enda rör mitt på en ränna som är 20 meter lång" följt av skälet är tydligt. Men det är mallen "X säger, Y säger, jag väljer" ("och det är den lösningen jag skulle välja"), och stycket står nästan ordagrant i räknarens "Gör inte det här".
- **"Går fri"/överliggare** (rad 160): Överliggaren förklaras bra. "sätt krokarna så att snön som rasar går förbi rännan" säger inte hur. Läsaren får "sätt krokarna som monteringsbilden visar", alltså en bild som inte finns på sidan, och innan dess friskrivningen "Något mått för det ger Plannja inte".
- **Expansionsstycke** (rad 138): Går att förstå, men första meningen blandar två saker: rörelsefog i rännan och rörsvep på aluminiumrör. "De måtten är Plannjas." är en fristående källmening.
- **Renstratt** (rad 194): Förklaras ("en tratt med sil som sitter på stupröret"). Sedan "då en öppen sil vid sockelns överkant", medan FAQ:n (rad 199) säger "låt det gå ner i en ledning utan öppen sil". Är en öppen sil bra eller dålig? Det krockar.
- **Vinkelslipen** (rad 158): "Kapa rännor och rör med en bågfil." Tydligt. Men samma förbud står på plåttaket med ett annat verktyg och ett annat skäl (se mönstren).

Fler meningar:

- Rad 74: "Mät takets längd och takfallets bredd från takfoten till nocken". "Bredd" för sträckan upp längs taket är förvirrande, eftersom bredd annars betyder gaveln.
- Rad 74: "Så beskriver Plannja, Plastmo och Lindab mätningen i sina monteringsanvisningar." En fristående källmening med tre tillverkare.
- Rad 87: "Plåt & Ventföretagen återger tabellen i sin Teknikhandbok, och Plannjas anvisning från 2026 har samma gränser, liksom deras äldre tabell från mars 2010 för rännorna upp till 150 mm." En hel mening om vem som återger vad. Läsaren bryr sig inte.
- Rad 89: "låter ett stuprör ta ungefär dubbelt så stor yta". Dubbelt mot vad? Tabellen kommer först efter stycket. "0,013 liter per sekund och kvadratmeter" är brus för en husägare.
- Rad 110: "Plannja, Lindab och Teknikhandboken anger samma fall, och det gör också AMA Hus, som beskriver hur byggarbeten ska utföras." Fyra källor i en mening som bara bekräftar meningen innan.
- Rad 116: "Så räknar både Plannjas anvisning från 2026 och Lindab." En fristående källmening.
- Rad 134: "Stuprör i plast finns också." En lös mening utan poäng.
- Rad 136: "Hur många år en ränna håller anger ingen av tillverkarna, så garantin är det närmaste du kommer." En friskrivning som styckesöppning.
- Rad 154: "sätter du i stället en brunnsutkastare mellan röret och ledningen". Ordet förklaras inte, och "i stället" för en utkastare låter som motsats.
- Rad 162: "På ett tvåplanshus räknar byggföretaget Bygghantverkarna Jakub och Far med ställning". Firmans långa namn står som subjekt tre gånger på sidan.
- Rad 166: "Lutningen är 2 till 3 centimeter per meter i Ystads råd och ungefär 5 centimeter i Umeås, så följ din egen kommuns råd om den har något." Mallen "X säger, Y säger" igen.
- Rad 186: "Hur högt avdraget kan bli och vad två ägare får tillsammans står bland kostnaderna för ett plåttak." Ägarskapet följs, men för läsaren är det konstigt att skickas till plåttaket för att få veta rotavdraget på rännor.
- Rad 192: "Så ofta rekommenderar Plastmo." En fristående källmening.
- Rad 199 (FAQ): "Det skriver Teknikhandboken och Plannja, och för ett nytt hus kräver Boverkets föreskrift BFS 2024:8 att risken för frysning beaktas när vattnet leds bort." Upprepar rad 164.

Röst: Stegen, snöret mellan första och sista kroken, "Flytta den hellre en gång för mycket än att luta dig ut åt sidan" och krokarna som största posten (rad 188) är riktig hantverkarröst. Resten läses som en källgenomgång där Plannja är huvudperson. "Skulle jag välja" står tre gånger (rad 118, 140, 198).

## /tak/plattak/ (utkast), betyg 3

Innehållet är starkt: tabellen per plåtsort, kostnadsuppdelningen och exemplet på 150 m². Rösten sviker redan i andra stycket och i bygglovsavsnittet.

- Rad 72: "Jag har inte mätt något av det här själv. Lutningar, läktavstånd och skruv kommer ur Plannjas och Lindabs monteringsanvisningar, och priserna från offertförmedlaren Hantverkskollen och byggfirman Totalbyggarna." Ett helt stycke friskrivning och källförteckning som sidans andra stycke. Det sänker förtroendet innan läsaren fått något.
- Rad 4 (description) mot rad 87: I beskrivningen står "950 till 1 300 kr per kvm med takpanneplåt", i tabellen "900 till 1 500". Läsaren som kommer från Google ser ett tal och möter ett annat.
- Rad 76: "Trapetsplåt på ett tak som lutar mindre än 14 grader behöver längre överlapp och en tätningsremsa i skarven, skriver Lindab." Slutar på "skriver X".
- Rad 80: "Vill du ha bandtäckning ska du anlita en plåtslagare, och det säger Plannja rakt ut." Slutar på källan.
- Rad 91: "Totalbyggarna ger båda ändarna för takpanneplåt och den låga änden för bandtäckning, Hantverkskollen resten." Jag förstod den inte vid första läsningen.
- Rad 95: "Livslängden per sorts plåt anger ingen tillverkare." Friskrivning. Nästa mening slutar med ", skriver Plannja."
- Rad 114: "Totalbyggarna ligger nära. I mars 2026 angav de 700 till 1 200 ..., medan Hantverkskollen anger 950 till 1 300 ...". Två förmedlare jämförs med varandra, och läsaren får inget att göra med det.
- Rad 132: "Talen är Skatteverkets." En fristående källmening. Rotstycket är annars bra och är rätt ägare.
- Rad 142: "Paragrafen kräver bygglov för en fasadändring bara när tre saker gäller samtidigt: huset ligger inom detaljplan, det är inte ett en- eller tvåbostadshus eller en komplementbyggnad som ett garage eller ett förråd, och ändringen görs på en fasad eller ett tak mot en gata eller en annan allmän plats." Ett villkor som är en negation mitt i en lista av villkor. Jag läste det först som att villor kräver lov. Säg det rakt ut: villor och garage kräver inget lov.
- Rad 146: "Är du osäker på vad detaljplanen säger om ditt hus frågar du byggnadsnämnden i kommunen, vilket Boverket också råder dig till." Myndigheten som slutkläm.
- Rad 150: "medan Benders betongpannor väger 36 till 51 kilo". Takstolssidan (rad 94) säger "takpannor 46 till 61 kilo". Båda stämmer i sitt sammanhang (med och utan underlag), men den som klickar mellan sidorna ser två olika tal för samma pannor.
- Rad 154: "Ska takstolarna också bytas eller förstärkas kan det krävas en anmälan till kommunen ..." Takstolarna äger det, och där står det i FAQ:n. Här räcker en mening och en länk.
- Rad 158: "Sponten eller plywooden ska vara minst 17 millimeter tjock". Snörasskyddssidan säger att Lindabs vippbult på falsat tak kräver råspont på minst 22 mm eller plywood på minst 18 mm. Den som lägger falsat plåttak på 17 mm efter den här sidan kan inte sätta Lindabs snörasskydd. **Kan få läsaren att göra fel.**
- Rad 177 (bildtext): sex meningar, varav en är en källhänvisning ("ritade efter Plannjas monteringsanvisning för Royal och Regent 2026-2"). Den är för lång för en bildtext.
- Rad 183: "Allt det skriver Plannja, som också är tydliga om kapningen". "Allt det skriver Plannja" låter översatt. "följ Arbetsmiljöverkets anvisningar för arbete på tak" förutsätter att läsaren vet vilka anvisningar det gäller.
- Rad 183: "En rondell är en vinkelslip med kapskiva, och gnistorna från den kan skada plåtens ytskikt." Samma förbud som på hängrännorna (rad 158), med ett annat skäl ("värmen och gnistorna förstör").
- Rad 195 till 197: en hel H2, "Nytt tak betyder nya fästen för snörasskyddet", som återberättar hur konsolerna sitter på pannor och på plåt. Snörasskyddssidan äger det. Här räcker en mening och en länk.
- Rad 203 (FAQ): "Anvisningen säger inte vilket slags gammalt tak de menar, så lägg inte plåten direkt på pannor ..." Friskrivning som slutkläm.

Röst: Öppningen ("Säger en takläggare plåttak kan han mena fyra ganska olika tak") och myntet mot färgen i FAQ:n är mänskliga. Bygglovsavsnittet läses som en juridisk promemoria med fyra paragrafhänvisningar i rad.

## /tak/takstolar/ (utkast), betyg 3

Den har pelarens bästa enskilda meningar ("Men fabrikens ansvar slutar vid takstolen", lastbilen med släp på 24 meter). Den har också pelarens sämsta block av friskrivningar.

- Rad 13 (kort svar): "på sidor som jag läste den 28 september 2026 och där moms inte anges". En friskrivning i kortsvaret. Den upprepas ordagrant på rad 112.
- Rad 68 (bildtext): "på samma sätt som i räknaren". Vilken räknare? Den förutsätter något som inte står på sidan. "som XL-Bygg skriver i sina villkor" gör källan till en del av bildtexten.
- Rad 72: "Så beskriver TräGuiden, Svenskt Träs handbok på nätet, arbetsfördelningen." En fristående källmening.
- Rad 100: "Du mäter på samma sätt som [c-avståndet mellan reglarna under en altan]." Varför skickas en takläsare till altanen? Det låter som en länk för länkens skull.
- Rad 108: "På c 600 mm är det 60 centimeter från mitten av en takstol till mitten av nästa". Tredje gången på sidan som c förklaras (kortsvaret, rad 100, rad 108).
- Rad 112: "Sidorna har inget datum, och jag läste dem den 28 september 2026. Moms anges inte, så du vet inte om den ingår. Riktigt små takstolar kan gå under 1 000 kr, men Takstolsfabriken säger inte var gränsen går, så räkna inte med det för ett garage förrän offerten visar det. Någon prislista per spännvidd har jag inte sett hos någon tillverkare, så priset för ditt tak får du i leverantörens offert." Fyra friskrivningar i ett stycke. Här skulle jag som läsare sluta lita på sidan.
- Rad 116: "Måste ritningarna göras om helt tar fabriken betalt för det, men beloppet står inte på sidan." Friskrivning som slutkläm.
- Rad 118 till 128: "För de andra posterna har jag bara hittat siffror hos byggmagasinet DittBygg, som ... inte skriver var talen kommer ifrån. Se dem som en fingervisning" och under tabellen "Posterna går inte heller ihop med totalen på sista raden, och DittBygg förklarar inte varför." Sidan visar en tabell och säger sedan att den inte går ihop. Den sista raden, "60 000 till 150 000" kr för takstolarna till en villa, står mot sidans egen uträkning, 11 000 till 33 000 kr. **Kan få läsaren att budgetera fel åt båda hållen.** Antingen förklaras gapet (montering, kran, ritning) eller så stryks tabellen.
- Rad 132: "Villkoren är att huset är äldre än fem år och att större delen av den ursprungliga stommen står kvar, och det gäller hela huset och inte bara taket." Vad är det som gäller hela huset? Villkoret eller avdraget? Det är tvetydigt.
- Rad 132: "Så står det hos Skatteverket, och hur stort avdraget blir, också för två ägare, finns bland kostnaderna för ett plåttak." Två saker hopklistrade med inskott. Den måste läsas två gånger.
- Rad 136: "Alla de måtten kommer ur TräGuiden." En fristående källmening.
- Rad 144 (FAQ om bygglov): runt tolv meningar med tre gränsvärden för garage inom detaljplan och tre utanför. Det är en egen sida, inte ett FAQ-svar.

Röst: Första halvan är en människa som vet vad hen pratar om och som säger "det är du" om byggherren. Från prisavsnittet låter det som någon som skyddar sig.

## /rakna/takbyte/, betyg 3

**Går kortet att förstå utan sidan?** Kortsvaret (takbyte.ts rad 1033) börjar med en mening på ungefär 50 ord: "Ett tak som lutar 27 grader och sticker ut 0,50 m över långsidorna och 0,40 m över gavlarna blir ungefär 143,7 m² på en villa med 108 m² bottenyta, eftersom utsprången gör ytan större och lutningen lägger på ytterligare 12,2 procent." Jag tappade tråden innan beloppet kom. Priserna efter det är begripliga.

**Säger beskedet vad jag ska göra?** Ja. "Budgetera runt 165 000 kr för ett tak med betongpannor" är ett tydligt besked.

**Rätt jämförelsetal när tillägget är inräknat?** Ja, vid betong: "Med resor och etablering inräknade blir beloppet här ungefär 1 333 kr per kvadratmeter, och det är det talet du jämför firmans kvadratmeterpris med." 191 471 delat med 143,66 är 1 333, så talet stämmer. Men:
- Om firmans offert har etableringen på en egen rad ska läsaren jämföra med 1 124, inte 1 333. Det säger meningen inte.
- När gränsen nås (bandplåt, 195 m², en ägare) byts hela raden ut mot "Vid det högre priset når du gränsen, så avdraget blir 11 261 kr mindre än 30 procent av arbetet. Det är redan inräknat i beloppet, och är ni två som står på lagfarten och båda betalar har ni en gräns var." Jämförelsetalet försvinner alltså helt just för det dyraste taket. Med två ägare kommer det tillbaka.

**Varnar sidan för pulpettak med orimlig vinkel?** Delvis. Med vinkel 27°: "Priserna gäller sadeltak, så för ett pulpettak är beloppet bara en fingervisning. Kontrollera också vinkeln: med 27 grader står den höga väggen 4,59 m högre än den låga." Varningen säger ett faktum men inte att det är orimligt. Den som inte vet att pulpettak brukar luta 3 till 14 grader (takstolssidan) ser ingen fara. Rubriken ovanför är lika säker som förut: "Budgetera runt 165 000 kr".
- Pulpettak med nockhöjd 1 m ger 6,3° och "Budgetera runt 151 000 kr för ett tak med betongpannor", utan någon varning. Pannor på 6 grader går inte, och plåttaket säger att även takpanneplåt kräver 14°. **Kan få läsaren att budgetera för ett tak som inte går att lägga.**

**Säger spalten och "Därför blev svaret så" samma sak om tillägget för plåt?** Inte tydligt.
- Spalten: "Resor och etablering ingår redan i plåtpriserna, så lägg inte till något för dem."
- Därför: "Tar en firma betalt för dem på en egen rad, som i källan till pannpriserna där det blir ungefär 30 000 kr, räknar du med den raden när du jämför offertens summa med beloppet här."
"Lägg inte till" och "räknar du med den raden" kan läsas som motsägelser. "Räkna med" betyder både "ta med" och "vänta dig". "Källan till pannpriserna" förutsätter att den som valt plåt vet vad det är. Vid plåt sägs att etableringen redan ingår fem gånger på sidan: i beskedet, i spaltraden, i Därför, i regeln "tillagg" och i brödtexten under "Arbetet och materialet i ett takbyte". Vid betong nämns tillägget på 30 000 kr ungefär elva gånger.

**Låter spalten som badrumsräknaren?** Skelettet är detsamma: ett imperativ med belopp ("Budgetera ... kr för ett tak med" mot "Räkna med att betala ... kr för badrummet"), en etikett över det stora talet ("Ditt pris efter rotavdraget" mot "Att betala efter rotavdrag"), fyra grå rader som slutar med källor och datum ("Kvadratmeterpriset är räknat ur en offertförmedlares exempel ..., läst den" mot "Priserna kommer från förmedlare och en firma och hämtades den"), sedan en rotlänk och en delningsruta. Meningarna är nu egna, men ordningen och tonen känns igen. Beloppet står också två gånger tre rader ifrån varandra: "runt 165 000" i rubriken och "164 578" under etiketten.

**Står källhänvisningen bara en gång?** Pekaren "Källorna står i tabellen längre ner" står en gång. Själva källorna står tre gånger: under varje regel, i kolumnen i antagandetabellen och i listan under tabellen. I läget utanför (303 m²) hänger pekaren under regeln om vinkeln ("med vanlig trigonometri. Källorna står i tabellen längre ner"), som inte har någon källa alls. Regeln om intervallet visar Totalbyggarna som enda källa, också för betong, där priset inte kommer därifrån.

Fler meningar:

- Utanför, rad 623: "Hur mycket billigare varje kvadratmeter blir på ett större tak vet jag inte, så jag visar inget belopp." En friskrivning i beskedet, men den säger ärligt varför. Den kan stå kvar.
- Regeln takstolar, rad 903: "Enligt TräGuiden från Svenskt Trä dimensioneras fabrikstillverkade takstolar oftast för 1 200 mm". Källan står både i meningen och på raden under.
- Gör inte, rad 919: "Ställningen är två poster för Skatteverket." En bra mening. Men regeln om ställningen står också på plåttaket och hängrännorna.

Röst: Brödtexten under "Beräkna takarea" är utmärkt, som en granne med miniräknare. Spalten och Därför förklarar samma tillägg om och om igen, och då låter det som en mall som är rädd att missa ett fall.

## /rakna/takavvattning/, betyg 4

**Går kortet att förstå utan sidan?** Ja. "Ett takfall på 75 m² med ett stuprör i änden av rännan klarar sig med en hängränna på 100 mm och ett stuprör på 75 mm." "Rännan ska luta minst 2,5 mm per meter mot röret, och mer om den ska spola sig ren." Det är konkret. Men "med ett stuprör i änden" gör kortet till en regel per rör, medan guidens kortsvar säger "takytan på varje sida av taket". Se hängrännorna.

**Säger beskedet vad jag ska göra?** Ja. "Köp hängränna på 100 mm och stuprör på 75 mm" och "Svaret gäller ett takfall. Sadeltaket har två, så samma ränna och samma rör sitter på båda långsidorna." Det är pelarens tydligaste besked. I läget "takfallets yta" står "Har huset fler takfall räknar du på vart och ett för sig." Det är bra.

**300 m²:** Med 10 m ränna blir det "Fråga tillverkaren av det rännsystem du vill köpa vad som gäller för 300 m² till ett stuprör". Det är ett tydligt besked. Att ett takfall på 300 m² med 10 m ränna betyder 30 meter upp till nocken varnar räknaren inte för. Med 20 m ränna blir det 150 och 100 mm med två rör, och det stämmer.

**Pulpettak 27°:** Räknaren ger ingen varning alls. Den säger bara "Pulpettaket har ett enda takfall", fast vinkeln ger 4,59 m mellan väggarna.

Meningar som kan få läsaren att göra fel:

- Regeln antal, rad 638, vid 22 m ränna: "Varje rör får en lika lång del av rännan, 7,6 m, som lutar mot just det röret." Med tre rör går det inte att förstå var de ska sitta, eller hur tre delar kan luta mot var sitt rör utan att två rör hamnar intill varandra. Antagandet "Frågas inte efter, så rännans delar antas vara lika långa" står långt ner.
- Tabellkällan, rad 708: "Talen är den största takyta som rännan klarar till ett stuprör." Guiden säger "per takfall". Se hängrännorna.
- Spalten, rad 578: "Lindab vill ha en ränna på 125 mm för den här ytan, och det gäller om du köper deras system." Bra, men Lindabs regel gäller också röret (87 mm), och det säger raden inte. Den som köper Lindab får rännan rätt och röret från RA Hus.

**Står källhänvisningen bara en gång?** Pekaren står en gång. Källorna står fyra gånger: under varje regel, i två stycken som börjar "Källor:" under tabellerna, i antagandetabellen och i listan. Regeltexterna nämner dessutom källan i själva meningen, direkt ovanför raden som nämner den igen: "Den tabellen har marginal, skriver Teknikhandboken från Plåt & Ventföretagen." (rad 629), "enligt Teknikhandboken" (rad 662) och "som Lindab och Plannja vill" (rad 671).

Gör inte, rad 671: "Sätt ett rör i varje ände och låt rännan luta åt båda hållen från mitten, som Lindab och Plannja vill. AMA Hus godtar i stället ett rör mitt på rännan ..." står nästan ordagrant som hängrännor rad 116 till 118. Rad 674 ("Låt bli, för ett klent rör fryser lättare sönder, och det varnar Teknikhandboken för") upprepar hängrännor rad 89.

Röst: Spalten är kort och säger vad jag ska köpa. Den låter inte som badrumsräknaren. Därför-delen blir en källförteckning med en mening före varje källa.

---

## Återkommande mönster

### 1. Källan har fått en egen slutmening

Regeln "saken först, källan efter" har gett en ny tic: en kort fristående mening sist i stycket som bara säger var det kommer ifrån. Räknat i de fyra artiklarna:

| Sida | Fristående källmeningar | Exempel |
|---|---|---|
| snörasskydd | 3 | "Så står det i Plannjas anvisning." (110), "Det är BMI:s krav för deras konsol." (120), "Så förklarar Lindab det" (102) |
| hängrännor | 6 | "Så beskriver Plannja, Plastmo och Lindab mätningen i sina monteringsanvisningar." (74), "Så räknar både Plannjas anvisning från 2026 och Lindab." (116), "De måtten är Plannjas." (138), "Båda råden står i Plannjas anvisning." (158), "Så ofta rekommenderar Plastmo." (192), "Ordningen i listan är den i Plannjas monteringsanvisning" (146) |
| plåttak | 2 | "Talen är Skatteverkets." (132), "Allt det skriver Plannja" (183) |
| takstolar | 4 | "Så beskriver TräGuiden ... arbetsfördelningen." (72), "Talen kommer ur TräGuidens tabell" (94), "Så står det hos Skatteverket" (132), "Alla de måtten kommer ur TräGuiden." (136) |

"Så + verb + källa" står sex gånger. Det låter som en mall.

Meningar med en tillverkare, myndighet, handbok eller firma som subjekt, eller som slutar med "enligt X", "skriver X" eller "anger X", räknade med örat i brödtext och FAQ: snörasskydd omkring 25, hängrännor omkring 40, plåttak omkring 40 och takstolar omkring 35. Med grep i brödtexten (utan frontmatter) blev det "enligt" 4/2/6/9 och "skriver" 3/6/8/5. Plannja är subjekt i över 15 meningar bara på plåttaket och FAQ:n där.

### 2. Friskrivningar och "har jag inte hittat"

| Sida | Antal | Exempel |
|---|---|---|
| snörasskydd | 4 | "Vad montering kostar per meter har jag inte hittat." (242), "men anger ingen gräns" (252), "finns ingen tabell" (183), "När risken räknas som särskild står inte i siffror" (88) |
| hängrännor | 4 | "Hur många år en ränna håller anger ingen av tillverkarna" (136), "Något mått för det ger Plannja inte" (160), "Ingen av firmorna skriver hur stor del av priset som är arbete" (186), "går inte att jämföra rakt av" (184) |
| plåttak | 4 | "Jag har inte mätt något av det här själv." (72), "Livslängden per sorts plåt anger ingen tillverkare." (95), "Anvisningen säger inte vilket slags gammalt tak de menar" (203), "garantivillkoren kan ändras ... så fråga tillverkaren först" (200) |
| takstolar | 8 | Hela rad 112 (fyra stycken), "beloppet står inte på sidan" (116), "inte skriver var talen kommer ifrån" (118), "säger DittBygg inget om momsen", "DittBygg förklarar inte varför" (128) |
| takbyte | 2 | "vet jag inte, så jag visar inget belopp" (623), FAQ "men inte hur mycket" |
| takavvattning | 1 | FAQ "jag har inte priser med källa för alla dimensioner" |

Slutkläm i form av en friskrivning: plåttaket i två FAQ-svar, snörasskyddet i FAQ:n om skottning, takstolarna på rad 116 och 128.

### 3. "X säger, Y säger, jag väljer/följ"

Sju ställen: snörasskydd 102 till 104 ("Jag håller med dem"), snörasskydd 205 ("På branta tak skiljer sig tabellerna ... Läs i tabellen till det skydd du sätter upp"), hängrännor 89 ("Även Teknikhandboken medger ... Välj ändå"), hängrännor 118 ("och det är den lösningen jag skulle välja"), hängrännor 166 (Ystad mot Umeå, "följ din egen kommuns råd"), plåttak 181 ("Plannja skriver ... Lindab är försiktigare ... tycker jag") och räknaren takavvattning ("SS ... räknar annorlunda ... Räknaren följer RA Hus").

"Skulle jag välja" står fyra gånger: hängrännor 118, 140 och 198 och plåttak 82. Egna råd står dubbelt på snörasskyddet (rad 90 och 253) och mellan takstolarna (rad 94) och takbytets FAQ ("skulle jag låta en konstruktör eller takstolsleverantören titta").

### 4. Samma sak på flera sidor, bredvid varandra

**Rotavdraget** (ägare: plåttak 132 till 134)
- snörasskydd 242: "Gör ett företag jobbet får du rotavdrag på arbetet, 30 procent av arbetskostnaden, och företaget drar av det direkt på fakturan." En mening. Bra.
- hängrännor 13 och 186: kortsvaret plus fyra meningar, varav ställningsregeln ("och det gör också arbetet med att sätta upp och ta ner ställningen") upprepar plåttaket.
- takstolar 132: fyra meningar med villkoren (fem år, stommen). Det är jobbets egna villkor och är rimligt, men meningarna är tunga.
- takbyte: "Ställningen är två poster för Skatteverket. Arbetet med att resa den ... men hyran ... gör det inte". Det är tredje gången ställningsregeln står i pelaren.

**c-avståndet** (ägare: takstolar 100)
- snörasskydd 128: "c står för centrumavstånd"
- hängrännor 156: "mätt mitt i varje krok, och det skrivs c 600 mm"
- plåttak 160: "Talet efter c är avståndet mellan läktarnas mittlinjer."
- takstolar 13, 100 och 108: tre gånger på samma sida
- takbyte: "mätt från mitt till mitt"
Sammanlagt fem förklaringar på fyra sidor och i räknaren.

**EKS** (ägare: takstolar 76)
- snörasskydd 162 och 224: "de konstruktionsregler som upphörde den 1 juli 2026", "Båda är räknade mot snözonerna i EKS". Två gånger på en sida som inte äger EKS.

**Snörasskydd på plåt** (ägare: snörasskydd 108 till 116)
- plåttak 195 till 197: en hel H2 som återberättar fästet ("på plåt skruvas de genom plåten med en tätning under").
- snörasskydd FAQ 253: "Konsolerna fästs olika på plåt och på pannor". En upprepning inne på den egna sidan.
- hängrännor 160: en mening och en länk. Så ska det göras.

**10 m ränna per stuprör** (ägare: hängrännor 116 till 118)
- hängrännor: kortsvaret, bildtexten (rad 70), 116 och 118.
- takavvattning: kortsvaret, spaltraden, regeln antal, steg 2 och antagandet. "Gör inte" upprepar guidens stycke om AMA nästan ordagrant ("Sätt ett rör i varje ände och låt rännan luta åt båda hållen från mitten").

**Vinkelslip och kapning**
- hängrännor 158: "Kapa rännor och rör med en bågfil. Använd aldrig vinkelslip, för värmen och gnistorna förstör plåtens ytskikt."
- plåttak 183: "Plåten klipps med plåtsax, nibblingsmaskin eller cirkelsåg. Använd aldrig rondell." En rondell är en vinkelslip med kapskiva, och gnistorna från den kan skada plåtens ytskikt."
Samma förbud med olika skäl. Det är inte fel, men det låter som samma mening som skrivits två gånger.

### 5. Definition som inskott

Nästan varje fackord förklaras med ett inskott mellan kommatecken: "takfoten, takets nedre kant" (snö 76), "takfoten, där taket slutar nedtill" (häng 68), "falsar, kanter som griper i varandra" (snö 122), "takfallet, den sluttande ytan från takfoten till nocken" (snö 141), "rörelsefog, en skarv där rännan får röra sig" (häng 138), "överliggare, en extra del som" (häng 160), "renstratt, en tratt med sil" (häng 194), "ränndal, en öppen ränna i marken" (häng 166), "råspont, brädor med not och fjäder" (plåt 158), "takfotsbeslaget, plåtvinkeln längst ner" (plåt 158), "pannsteget, avståndet mellan" (plåt 175), "profilbotten, den låga delen av vågen" (plåt 185), "spikplåtar, plåtar som pressas in" (takst 66), "förband, fogarna mellan delarna" (takst 72), "TräGuiden, Svenskt Träs handbok på nätet" (takst 72), "startbesked, klartecknet att börja bygga" (takst 144). Det blir över 25 inskott på fyra sidor. Var för sig hjälper de. Tillsammans ger de rytmen "ord, förklaring, fortsättning" i vartannat stycke. Takfoten definieras på två olika sätt, och AMA förklaras både på hängrännorna och på plåttaket.

Varje sida har också en "X är Y"-definition i första eller andra stycket: "Ett snörasskydd är ett räcke", "Hängrännan är rännan längs takfoten", "En takstol är en av de ramar av virke", och plåttakets fyra sorter.

### 6. Övrigt

- Inledningar: hängrännor och takstolar börjar båda med en villkorsbisats ("Ska rännorna bytas ...", "Ska det bli ett garage ..."). Det är ingen stor sak.
- Inga tankstreck hittade.
- Bilderna är olika på varje sida (entrén, takfoten, snittet, takstolen). Det är bra.
- Rubrikerna är varierade. Hängrännornas rubriker har "rätt" två gånger ("med rätt fall och på rätt avstånd", "i rätt ordning") och "hängrännor" i fyra av sex.
- Källraderna under tabellerna ("Källa: ...") är långa men fungerar som konvention. Den på snörasskydd 224 är en hel liten paragraf.

## De tre värsta mönstren

1. Tillverkaren är huvudperson: på hängrännorna och plåttaket bär en tillverkare eller handbok var tredje till var annan mening, och den nya regeln har gett en egen slutmening av typen "Så står det i Plannjas anvisning.", 15 gånger på fyra sidor.
2. Friskrivningar som slutkläm och som hela stycken: 20 i artiklarna och 3 i räknarna, varav 8 på takstolarna, där rad 112 till 128 visar en tabell som sidan själv säger inte går ihop, och plåttaket börjar med "Jag har inte mätt något av det här själv."
3. Samma förklaring på syskonsidan: c-avståndet förklaras fem gånger, ställningsregeln för rot tre gånger, snörasskyddets fästen får en egen H2 på plåttaket, stycket om AMA:s 20 m står nästan ordagrant i både guiden och räknaren, och takbytet nämner tillägget på 30 000 kr ungefär elva gånger.

Utanför rösten finns tre saker som kan få läsaren att göra fel och som bör rättas först: guiden och räknaren säger olika saker om vad rännans tabell gäller (per takfall eller per stuprör), takbytet låter läsaren budgetera betongpannor på 6 graders lutning utan varning, och plåttaket säger 17 mm råspont medan snörasskyddet kräver 22 mm för Lindabs vippbult på falsat tak.

---

# Varv 2

Jag har läst om de fyra artiklarna i källfilerna och renderat båda räknarna på dev-servern på port 4398, i samma lägen som i varv 1. För takbytet körde jag också ett läge till: pulpettak med nockhöjd 1 m och takpanneplåt. Radnumren nedan gäller brödtexten räknat från raden efter frontmatter. Kortsvar och description citeras från frontmatter.

| Sida | Varv 1 | Varv 2 |
|---|---|---|
| /tak/snorasskydd/ | 4 | 4 |
| /tak/hangrannor/ | 3 | 4 |
| /tak/plattak/ | 3 | 4 |
| /tak/takstolar/ | 3 | 3 |
| /rakna/takbyte/ | 3 | 4 |
| /rakna/takavvattning/ | 4 | 4 |
| **Medel** | **3,3** | **3,8** |

## Det som fortfarande kan få läsaren att göra fel

1. **Takbytet på 6 graders pulpettak.** Nockhöjd 1 m ger 6,3° och beskedet "Budgetera runt 151 000 kr för ett tak med betongpannor". Med takpanneplåt blir det "Budgetera 108 000 till 180 000 kr för ett tak med takpanneplåt". Under står nu "Pannor och plåt har dessutom en minsta lutning, så se efter i tillverkarens anvisning att materialet får ligga på 6,3 grader." Det är bättre än tystnad. Men sajten vet redan svaret för takpanneplåt, som enligt plåttaket kräver minst 14°, och skickar ändå läsaren till en anvisning hen inte har. Beloppet står kvar i fetstil ovanför. Säg rakt ut att takpanneplåt inte får ligga under 14 grader, eller visa inget belopp när vinkeln ligger under materialets gräns.
2. **Takstolarna: DittBygg-tabellen säger emot sig själv.** Källraden under tabellen säger "Posterna går inte heller ihop med totalen på sista raden, och DittBygg förklarar inte varför." Två rader längre ner säger brödtexten (rad 66) "Den sista raden gäller takstolarna till en hel villa med frakt, kran och montering, och därför ligger den så långt över de 11 000 till 33 000 kr". Brödtexten förklarar alltså något som källraden säger inte går att förklara. Posterna går inte heller ihop: 11 takstolar à 3 500 kr plus de högsta beloppen för ritning, kran och montering blir runt 113 000 kr, inte 150 000. Läsaren vet inte om det är 60 000 till 150 000 kr hen ska budgetera. Källraden är inte er att rätta, men brödtexten borde inte lova att det går ihop.
3. **Hängrännorna: kortsvaret och budgetrådet pekar på olika tal.** Kortsvaret säger "12 000 till 20 000 kronor" för 35 till 40 meter. Rad 120 säger "Budgetera därför efter byggföretagets pris per meter". Enligt tabellen per meter kostar 35 till 40 meter lackerad plåt 15 750 till 26 000 kr, alltså mer än paketpriset i kortsvaret. Den som följer rådet i brödtexten får ett högre tal än den som bara läser kortsvaret. Välj ett av talen och sätt det i kortsvaret.
4. **Takavvattningen med tre stuprör.** Huset på 22 x 10 m ger "Takfallet behöver 3 stuprör" och "Varje rör får en lika lång del av rännan, 7,6 m, som lutar mot just det röret." Det går fortfarande inte att förstå var det tredje röret ska sitta eller hur tre delar lutar mot var sitt rör. "Gör inte" säger samtidigt "med två rör får varje rör bara hälften av takytan", vilket inte stämmer för tre rör. En mening om var rören sitter (en i varje ände och en i mitten, med fall från två högpunkter) skulle lösa det.

Det som var farligt i varv 1 är rättat:
- **Rännans tabell:** den gäller nu per stuprör i både guiden och räknaren. Plannjas exempel (90 m², ett rör) ger 125 mm i båda.
- **Råsponten:** plåttaket varnar nu för att snörasskyddet kan kräva tjockare underlag (rad 86).
- **Jämförelsetalet:** det står kvar när gränsen nås, och det säger vad du jämför med om offerten har etableringen på en egen rad.

## /tak/snorasskydd/, betyg 4

Nästan en femma. "Jag håller med dem" är borta, och "Tänk också på var ni går" (rad 30) är en bättre övergång. Stycket om Plannja slutar nu med något läsaren kan göra: "fråga återförsäljaren vem som gör den innan du handlar". Spårpannorna, de 6 metrarna takfall och FAQ:n om takbyte går att förstå vid första läsningen.

Kvar:
- **EKS två gånger (rad 88 och rad 150).** Sidan äger inte EKS. Rådet på rad 88 om att läsa i kolumnen för ortens tal behövs, men halvmeningen om att reglerna upphörde och källradens "Båda är räknade mot snözonerna i EKS" är historik som takstolarna äger.
- **Rad 54:** "Måttet gäller från mitten av en konsol till mitten av nästa." Det är fortfarande en c-förklaring, fast kort.
- **Rad 152:** "Ligger det andra pannor på taket än tabellen är räknad för ...: 250, 500 eller 750 mm för Exklusiv". Tabellen är räknad för tvåkupiga betongpannor, och Exklusiv är en betongpanna från Benders. Är Exklusiv då en "annan" panna? Jag tvekade fortfarande.
- **FAQ om skottning:** "Skyddet är en annan sak, för där ska snön skottas bort när lasten blir för hög, skriver Lindab." Meningen slutar på källan. Vad "för hög" betyder står inte, men den friskrivningen är borta.

## /tak/hangrannor/, betyg 4

Det största lyftet. Tabellrubriken "Högsta takyta till ett stuprör", kortsvarets "Leder rännan till ett enda stuprör" och stycket på rad 23 om att två rör delar takfallet hänger nu ihop med räknaren. Silen och isen säger samma sak på rad 130 och i FAQ:n. 87-röret ("Läs det som ett 90-rör, eftersom öppningen är lika stor") går att förstå direkt. Kapningen på rad 94 är en mening med skäl. Rörsvep definieras i listan, där de behövs.

Kvar:
- **Rad 72:** "Garantin är det närmaste en livslängd du kommer." Den haltar. Det ska vara "det närmaste du kommer en livslängd", eller helst "Ingen tillverkare anger hur länge en ränna håller, men garantin ger en fingervisning".
- **Rad 98:** "Ett tvåplanshus behöver ställning i firmornas kalkyler". Det låter som att huset behöver ställning i kalkylen. Skriv "Firmorna räknar med ställning på ett tvåplanshus".
- **Rad 96:** "hur det ser ut visar monteringsbilden i anvisningen till de krokar du köper". Läsaren får fortfarande inte veta hur krokarna sitter så att snön går förbi. En halv mening om vad man ska titta efter hade räckt.
- **Rad 102:** "Ystads kommun vill ... Umeå kommun anger ..., så följ din egen kommuns råd". Det är mallen "X säger, Y säger, följ" som är kvar.
- **Rad 25:** "0,013 liter per sekund på varje kvadratmeter tak". Det är fortfarande brus för en husägare, men meningen fungerar nu.
- Punkt 3 ovan om budgeten.

Tillverkarna som subjekt har gått ner från omkring 40 till omkring 15 meningar. De flesta källor står nu efter saken.

## /tak/plattak/, betyg 4

Nu börjar sidan med saken. Bygglovsparagrafen går att läsa: "En villa klarar sig därför utan bygglov för bytet" är meningen läsaren letar efter. Snörasskyddets H2 är nu två meningar och en länk, och varningen om underlaget sitter där den behövs. Pannvikten ("själva pannorna") förklarar nu skillnaden mot takstolarnas 46 till 61 kilo.

Kvar:
- **Description:** "Plåttak kostar 950 till 1 300 kr per kvm med takpanneplåt". Tabellen och kortsvaret säger 900 till 1 500. Den som kommer från Google ser fortfarande ett annat tal än i tabellen.
- **Fyra meningar slutar med ", skriver X":**
  - rad 6: "skriver Lindab"
  - rad 25: "skriver Plannja"
  - rad 82: "skriver Boverket"
  - FAQ om regn: "skriver Plannja, men"

  Dessutom "det säger Plannja rakt ut" (rad 10). Plannja är fortfarande sidans huvudperson i garantin, läggningen och tre av fyra FAQ-svar.
- **Rad 109:** "Plannja skriver ... Lindab är försiktigare ... tycker jag". Det är mallen "X säger, Y säger, jag" som är kvar. Här fungerar den, eftersom rådet har ett skäl.
- **Rad 44:** "För takpanneplåt ligger Hantverkskollens 950 till 1 300 kronor inom Totalbyggarnas spann." Det är en mening om två källor och inget läsaren kan göra något med.
- **Bygglovsavsnittet:** det är fortfarande fyra stycken med paragrafnummer. Stycket om reglerna före december 2025 (rad 78) kan kortas till en mening.

## /tak/takstolar/, betyg 3

Prisstycket är mycket bättre: "Räkna med att momsen kan komma ovanpå, eftersom ingen av dem skriver om den ingår" är ett råd och inte en friskrivning. Rotstycket går att förstå vid första läsningen. Bildtexten säger nu "räknaren för takbyte". Betyget stannar ändå på 3 av tre skäl.

- **TräGuiden har blivit sidans refräng.** "enligt TräGuiden" står fem gånger, plus "Talen kommer ur TräGuidens tabell" och "skriver TräGuiden":
  - rad 8: "som då också ansvarar för att takstolen fungerar som konstruktion, enligt TräGuiden, Svenskt Träs handbok på nätet."
  - rad 10: "ingår normalt inte i tillverkarens ansvar enligt TräGuiden."

  Två stycken i rad slutar med samma källa.
  - rad 30: "Talen kommer ur TräGuidens tabell över takens egenvikt."
  - rad 36: "normalt upp på c 1 200 mm, skriver TräGuiden."
  - rad 72: "Enligt TräGuiden kan takstolar ..."
  - bildtexten: "enligt TräGuiden"
  - FAQ: "enligt TräGuiden".
- **Motsägelsen i DittBygg-tabellen,** se punkt 2 ovan.
- **FAQ:n om bygglov** har fortfarande omkring tolv meningar med sex gränsvärden för garage. Det är en egen sida och inget svar. Här slutar en läsare att läsa.

Mindre:
- Kortsvaret har kvar "i priser som jag läste den 28 september 2026 och som inte säger något om moms". Den friskrivningen i kortsvaret kan kortas till "moms oklar".
- Rad 36 skickar fortfarande takläsaren till altanens reglar för c-avståndet.

## /rakna/takbyte/, betyg 4

- **Kortsvaret:** första meningen är delad och går nu att läsa.
- **Beskedet vid betong:** "Med resor och etablering inräknade blir beloppet här ungefär 1 333 kr per kvadratmeter, och det jämför du med firmans kvadratmeterpris. Tar firman betalt för resor och etablering på en egen rad jämför du i stället med 1 124 kr." Det är precis rätt.
- **När gränsen nås:** beskedet får nu både gränsen och jämförelsen. Raden blir tre meningar, men den är begriplig.
- **Pulpet 27°:** "stämmer inte det med ditt hus blir också takytan fel" säger vad som står på spel.
- **Plåt:** spalten och "Därför blev svaret så" säger nu samma sak ("lägger du ihop den raden med resten av offerten innan du jämför"). Spaltraden om tillägget är borta, och det gör spalten lugnare.

Kvar:
- Pulpettaket på 6,3°, punkt 1 ovan.
- Beloppet står två gånger tre rader från varandra ("runt 165 000" och "164 578"). Det är ett medvetet val, men för ögat är det dubbelt.
- Tillägget på 30 000 kr nämns fortfarande omkring nio gånger i betongläget, till exempel i kortsvaret, spaltraden, "Därför", regeln, steg 3, två antaganden och brödtexten. Det är inte fel, men det är mycket.

Inte er att rätta, men jag såg det:
- **Källpekaren vid utanför:** den hänger fortfarande under regeln om vinkeln ("med vanlig trigonometri.Källorna står i tabellen längre ner").
- **Regeln om intervallet:** den visar bara Totalbyggarna som källa, också för betong.

Spalten låter inte längre som badrumsräknaren på något sätt som stör.

## /rakna/takavvattning/, betyg 4

- **Lindabraden:** den nämner nu röret ("Lindab vill ha en ränna på 125 mm och ett stuprör på 87 mm för den här ytan"). Den som köper Lindab får hela systemet rätt.
- **Regeltexterna:** de upprepar inte källan som står på raden under. "den tabellen är räknad med marginal" är bättre än förut.
- **"Gör inte" om 10 m:** den står nu för sig själv och säger vad räknaren gör.
- **300 m² med 10 m ränna:** läget ger ett tydligt besked om att fråga tillverkaren.

Kvar:
- Tre stuprör, punkt 4 ovan.
- Pulpettaket på 27° ger fortfarande ingen varning, fast takbytet nu har en. Samma hus i de två räknarna får en varning i den ena och inte i den andra.
- "Gör inte" om SS 82 40 31 slutar fortfarande "och det varnar Teknikhandboken för". Där finns ingen källrad under, så det är rimligt att den står kvar.

## Mönstren efter varv 2

Räknat i brödtext och FAQ med samma sökning som i varv 1:

| Sida | Slutar med "enligt X"/", skriver X" eller fristående källmening | Friskrivningar | "skulle jag"/"tycker jag"/"mitt råd" |
|---|---|---|---|
| snörasskydd | 3 (var 5 till 6) | 0 (var 4) | 2 (var 3) |
| hängrännor | 3 (var 8 till 10) | 0 (var 4) | 1 (var 3) |
| plåttak | 6 (var 8 till 10) | 0 (var 4) | 2 (oförändrat) |
| takstolar | 8 (var 9 till 10) | 1 (var 8) | 2 (oförändrat) |

- **Tillverkaren bär meningen:** kvar mest på takstolarna, där TräGuiden står sju gånger, och på plåttaket, där Plannja är subjekt i garantin, läggningen och tre av fyra FAQ-svar.
- **Friskrivningarna:** nästan borta. Den enda som är kvar i brödtext och kortsvar är takstolarnas momsrad i kortsvaret. Källraden under DittBygg-tabellen är inte er.
- **Syskonsidornas ämnen:**
  - EKS står kvar två gånger på snörasskyddet.
  - c förklaras på snörasskyddet (kort), på plåttaket ("Talet efter c är avståndet mellan läktarnas mittlinjer", rad 88) och på takstolarna, två gånger.
  - Rotavdraget, snörasskydd på plåt, 10 m ränna per stuprör och vinkelslipen säger nu en mening och länkar. Det fungerar.
- **"X säger, Y säger, följ/jag":** kvar på tre ställen: snörasskydd rad 131 (tabellerna på branta tak), hängrännor rad 102 (Ystad mot Umeå) och plåttak rad 109 (Plannja mot Lindab). Alla tre har ett skäl och läses inte längre som mall.

---

# Varv 3

Läst om: takstolar och hängrännor i källfilerna, plus snörasskyddets pannmening och plåttakets skriver-meningar. Takbytet renderat med pulpettak 1 m nockhöjd med betong och takpanneplåt, pulpet 27°, pulpet 10° med takpanneplåt, och för kontroll sadeltak 10° med takpanneplåt och betong. Takavvattningen renderad med 22 x 10 m.

| Sida | Varv 1 | Varv 2 | Varv 3 |
|---|---|---|---|
| /tak/snorasskydd/ | 4 | 4 | 4 |
| /tak/hangrannor/ | 3 | 4 | 4 |
| /tak/plattak/ | 3 | 4 | 4 |
| /tak/takstolar/ | 3 | 3 | 4 |
| /rakna/takbyte/ | 3 | 4 | 4 |
| /rakna/takavvattning/ | 4 | 4 | 4 |
| **Medel** | **3,3** | **3,8** | **4,0** |

## Det som fortfarande kan få läsaren att göra fel

1. **Takbytet varnar bara för låg lutning på pulpettak.** Ett sadeltak med 10 graders lutning och takpanneplåt ger "Budgetera 109 000 till 181 000 kr för ett tak med takpanneplåt" utan en enda varning. Raden under handlar bara om jämförelsetalet. Varningen om 14 grader finns bara när takformen är pulpet, men gränsen gäller materialet och inte takformen. Samma sak gäller betong på 10 grader ("Budgetera runt 152 000 kr"). Det är den kvarvarande risken i pelaren.
2. **Takbytets rubrik och rad säger emot varandra under 14 grader.** Pulpettak med 6,3° och takpanneplåt:
   - Rubriken säger "Budgetera 108 000 till 180 000 kr för ett tak med takpanneplåt".
   - Raden säger "Under 14 grader går det inte att lägga takpanneplåt, och pannor har också en minsta lutning, så räkna inte med beloppet förrän tillverkarens anvisning säger att materialet får ligga på 6,3 grader".

   Rubriken säger alltså budgetera, medan raden säger att takpanneplåt inte går och att beloppet inte ska räknas med. Andra halvan av raden säger dessutom emot första halvan: det har just sagts att takpanneplåt inte går, och sedan ska läsaren ändå vänta på anvisningen. När materialet ligger under sin kända gräns ska rubriken byta till något annat, till exempel "Välj ett material som får ligga på 6,3 grader", och inget belopp visas.
3. **Takbytet med betong på 6,3° nämner takpanneplåt.** Den som valt betongpannor läser "Under 14 grader går det inte att lägga takpanneplåt", som gäller ett material hen inte valt. Säg det som gäller det valda materialet. Pulpet 27° får dessutom "se efter i tillverkarens anvisning att materialet får ligga på 27 grader". Det är brus på en vanlig lutning, och det gör varningen svagare där den behövs.

Rättat sedan varv 2:
- **Takstolarna:** sidan säger nu att DittByggs total inte går att bygga upp av posterna och råder att budgetera post för post (rad 66). Källraden och brödtexten säger samma sak.
- **Hängrännorna:** kortsvaret ("12 000 till 20 000 kronor ... och med lackerad plåt upp mot 26 000 kronor") och budgetrådet ("För 35 till 40 meter lackerad plåt blir det ungefär 16 000 till 26 000 kronor") hänger ihop.
- **Takavvattningen med tre rör:** "Var rören sitter bestämmer du, men räknaren utgår från att ingen del av rännan är längre än så." Det går att förstå och att följa. "Gör inte" säger nu att takytan delas lika mellan rören, vilket stämmer också för tre.

## Per sida

**/tak/snorasskydd/, 4.** Pannmeningen säger nu "andra pannor än de tvåkupiga som tabellen är räknad för", men listan börjar med "250, 500 eller 750 mm för Exklusiv". Om Exklusiv själv är en tvåkupig betongpanna, vilket jag som läsare tror, är den inte en "annan" panna. Då står den fel i listan eller behöver en halv mening om varför den ändå står där. EKS nämns kvar två gånger.

**/tak/hangrannor/, 4.** De haltande meningarna är borta. "Ett löfte om livslängd ger ingen av tillverkarna, men garantierna säger något." fungerar, och "För ett tvåplanshus räknar byggföretaget Bygghantverkarna Jakub och Far med ställning" är begriplig. Kvar:
- **Kortsvaret:** "hos ett byggföretag som publicerar sina priser" låter som ett inskott för att slippa namnet. Säg "hos en byggfirma" eller ingenting.
- **Monteringsbilden (rad 96):** läsaren skickas fortfarande till monteringsbilden för att se hur snön går förbi rännan.
- **Ystad och Umeå:** stycket är kvar.

Ingenting av det kan få någon att göra fel, men sidan är inte en femma förrän snöraden säger vad man tittar efter.

**/tak/plattak/, 4.** Två ", skriver X" färre. Kvar är "skriver Lindab" (rad 6), "skriver Plannja" (rad 25) och Plannja som subjekt i tre FAQ-svar. Description säger fortfarande 950 till 1 300 kr mot tabellens 900 till 1 500.

**/tak/takstolar/, 4.** Budgetfällan är borta, och stycket om fabrikens ansvar börjar nu "Men enligt TräGuiden, Svenskt Träs handbok på nätet, slutar fabrikens ansvar vid takstolen". Det låter bättre än två slutklämmar i rad. TräGuiden står fortfarande sex gånger, i bildtexten, på rad 10, rad 30, rad 36, rad 72 och i FAQ:n. FAQ-svaret om bygglov på omkring tolv meningar är det som skiljer sidan från en femma. Momsraden i kortsvaret förstår jag är ett krav, och den läses nu som ett faktum och inte som en ursäkt.

**/rakna/takbyte/, 4.** Pulpetvarningen har rätt innehåll men sitter på fel ställe och är fel riktad, se punkt 1 till 3 ovan. Rättar ni det så att gränsen följer materialet och rubriken byter besked under gränsen, blir sidan en femma.

**/rakna/takavvattning/, 4.** Tre rör går att förstå nu. Kvar sedan varv 2: pulpettak på 27° får ingen varning om höjden mellan väggarna, fast takbytet ger en för samma hus.

## Mönstren efter varv 3

- **Källan som slutkläm:** snörasskydd 3, hängrännor 3, plåttak omkring 4, takstolar omkring 5. Det hörs inte längre som en mall, utom TräGuiden på takstolarna.
- **Friskrivningar:** i praktiken borta i alla fyra artiklarna.
- **Syskonsidornas ämnen:** oförändrat sedan varv 2. EKS står två gånger på snörasskyddet, och c förklaras på tre sidor.

## Spalten, 2026-09-29

Läst på /rakna/takbyte/ i fyra lägen: standard, `material=bandplat&langd=15`, `takform=pulpet&matt=vinkel&vinkel=27` och `material=takpanneplat&vinkel=10`. Som kontroll också `material=betong&vinkel=10`.

### 1. Förstår jag varje mening i spalten vid första läsningen?

Nästan. Rubrikerna ("Budgetera runt 165 000 kr för ett tak med betongpannor", "Välj ett annat material än takpanneplåt för ett tak som lutar 10 grader") är tydliga och säger vad jag ska göra. De här meningarna fick jag läsa två gånger:

- "Be firman räkna på takytan, så går offerten att lägga bredvid talen här." Vilka "talen här"? Det står fem tal under, och det enda som går att lägga bredvid ett kvadratmeterpris i en offert (1 333 kr) står inte i spalten längre.
- "Nockhöjden är 2,29 m och takfallet 5,61 m långt, och med 1 200 mm mellan takstolarna ryms ungefär 11." Tre fakta i en mening, och "ryms ungefär 11" slutar innan jag hunnit fatta att det är takstolar som räknas. "ungefär 11 takstolar" hade räckt.
- "Den höga väggen är 4,59 m högre än den låga och takfallet 11,22 m långt, och med 1 200 mm mellan takstolarna ryms ungefär 11." Samma sak, och ännu längre. Det bra är att 4,59 m sticker ut, så jag ser själv att 27 grader är fel för mitt pulpettak.
- "Stämmer inte höjdskillnaden mellan väggarna nedan med ditt hus är vinkeln fel." Den förstår jag, men "är vinkeln fel" låter som att räknaren har fel. "har du skrivit in fel vinkel" hade varit rakare.
- "Är ni två ägare som båda betalar har ni en gräns var." Det är rätt, men jag får själv lista ut att jag ska klicka i "Två ägare" längre upp. Säg det.

Beskedet vid gränsen ("Vid det högre priset når du gränsen för rotavdraget, och det är redan inräknat.") är kort och bra. Beskedet på takpanneplåt ("Takpanneplåt kräver minst 14 grader, så räknaren visar inget belopp.") är det bästa i hela spalten.

### 2. Saknar jag något i spalten som gör att jag budgeterar eller jämför en offert fel?

Budgeten blir rätt. Jämförelsen kan bli fel.

- **Betong och tegel:** spalten säger "Med 1 124 kr per kvadratmeter och 30 000 kr för resor och etablering kostar taket 191 471 kr före avdraget." Har jag en offert på 1 300 kr per m² med allt inräknat, så jämför jag med 1 124, det enda kvadratmeterpriset jag ser, och tror att firman tar 16 procent för mycket. Att rätt tal är 1 333 kr står först under "Därför blev svaret så", och dit scrollar inte alla. Den gamla uppmaningen "Be firman räkna på takytan ..." pekar mig dessutom rakt mot kvadratmeterpriset. Den meningen borde bytas mot en som räcker till jämförelsen, till exempel: "Jämför med 1 333 kr per m² om offerten har resor och etablering inräknade, annars med 1 124 kr."
- **Plåt:** spalten nämner inte etableringen alls: "Med 1 500 till 2 500 kr per kvadratmeter kostar taket 265 991 till 443 319 kr före avdraget." Den som nyss har räknat på betong och sett "och 30 000 kr för resor och etablering" kan tro att plåten saknar posten och lägga på 30 000 själv. Tre ord i spalten, "etableringen inräknad", som i det korta svaret högst upp, hade tagit bort risken.
- **"beloppet här"** i Därför-delen för plåt: "lägger du ihop den raden med resten innan du jämför summan med beloppet här." Det stora talet i spalten är priset efter rotavdraget. Offerten visar oftast priset före. Skriv "med beloppet före rotavdraget", annars jämför jag 443 000 i offerten med 393 000 här och tror att firman är 50 000 kr dyrare.
- **Betongpannor på 10 grader** ger ett belopp utan en enda varning ("Budgetera runt 152 000 kr för ett tak med betongpannor"), medan takpanneplåt stoppas vid 14 grader. Som läsare undrar jag om pannor verkligen går att lägga så flackt. Går de inte det, då budgeterar jag för ett tak som inte kan byggas. Någon bör kontrollera det mot tillverkarnas minsta lutning för pannor.

### 3. Säger spalten och Därför-delen samma sak om tillägget för resor och etablering?

- **Betong:** ja. Spalten och första stycket i Därför-delen har samma tal (30 000 kr, 191 471 kr). Punkten längre ner lägger till "projektering" ("ungefär 30 000 kr för resor, etablering och projektering"). Det ordet finns inte i spalten och inte i tabellen. Det är ingen motsägelse, men varför heter posten olika saker på samma sida?
- **Plåt:** de motsäger inte varandra, men spalten är tyst. Därför-delen säger två gånger att etableringen ingår ("där resor och etablering redan ingår", "så här läggs inget tillägg till"). Det räcker för den som läser Därför, men inte för den som läser spalten.
- **Olika metoder:** för betong säger sidan att jag ska jämföra kvadratmeterpriser (1 333 eller 1 124). För plåt ska jag jämföra totalsummor när offerten har en egen rad. Båda sätten stämmer, men att sidan byter sätt mellan materialen gör att jag tvekar. Samma sorts mening för båda hade varit lugnare.

### 4. Går det att förstå varför det inte blir något belopp för takpanneplåt på 10 grader?

Ja, direkt. Rubriken, meningen under och Därför-delen säger samma sak: gränsen är 14 grader, mitt tak lutar 10, och därför blir det inget belopp. Två saker saknas:

- "Den gränsen anger både Plannja och Lindab" förutsätter att jag vet vilka de är. "plåttillverkarna Plannja och Lindab" räcker.
- Spalten säger "Välj ett annat material" men inte vilket. Jag vill få veta att bandtäckt plåt eller papp klarar 10 grader, eller åtminstone få en länk dit. Nu ligger hänvisningen till plåttaket långt ner i brödtexten.
- En mindre sak: punkten "Priset räknas på takytan längs lutningen, 130 m² i ditt fall" står kvar fast det inte finns något pris.

### Betyg för takbytet: 4

Spalten är kortare och rubrikerna säger vad jag ska göra. Beskedet vid gränsen och beskedet på takpanneplåt är bra. Att den inte får en femma beror på meningen "Be firman räkna på takytan, så går offerten att lägga bredvid talen här.". Den står på platsen där jämförelsetalet borde stå, och därför kan den som jämför en betongoffert komma fram till fel slutsats. Det rättas med en enda mening.
