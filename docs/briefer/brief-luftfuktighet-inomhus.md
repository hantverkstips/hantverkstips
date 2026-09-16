# Brief till skribenten, luftfuktighet inomhus

Skriven 2026-09-16 av chefredaktören. Underlag: `underlag-seo-luftfuktighet-inomhus.md` och `underlag-fakta-luftfuktighet-inomhus.md`. Filen är ny: `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx`. Sidan är sajtens testartikel, den första som går hela vägen, så allt ska vara rätt första gången.

## 1. Sökfras, intention, sida

- Huvudfras "luftfuktighet inomhus" (3 600 per månad). Sekundär "normal luftfuktighet inomhus" (720), ägs av sidan.
- Intention informativ. Läsaren har en hygrometer som visar 65 procent eller imma på fönstren och vill veta om det är fel, varför, och vad hon gör.
- URL `/fukt/luftfuktighet-inomhus/`. Sidtyp kunskap. Nivå mellan. Målgrupp båda, husägaren som frågar och hantverkaren som vill kunna svara.
- Sidan äger inte "kondens på fönster insida", "avfuktare källare" eller elförbrukning. Länka dit, skriv inte om det.
- Inga produktkort, ingen köpknapp, inget reklamband. Bygget stoppar om du försöker.

## 2. Bättre än ettan

Ettan är Alingsås kommun (cirka 1 400 ord, uppdaterad augusti 2026). Den har ett riktigt resonemang om torr luft: två tabeller över luftens vattenkapacitet, exemplet att luft på minus 20 grader som värms till 20 landar på 6 procent, rådet att köpa en termohygrometer. Men den handlar bara om torr luft. Hög luftfuktighet, sommarens och källarens problem, saknas helt. Daggpunkt nämns inte, ingen mätning per rum eller årstid, inga källor. Tvåan Polarpumpen är 180 ord och länkar till egna avfuktare.

Det läsaren har kvar: är 65 procent för mycket i sovrummet, vid vilken procent växer mögel på en kall yttervägg, varför visar hygrometern olika i olika rum, och vad gör jag.

Bindande lista. Jag bockar av varje punkt vid granskningen, saknas en är det retur.

1. Daggpunktstabell, rumstemperatur mot RF med daggpunkten i cellerna, räknad med Magnus-formeln (Lawrence 2005), källa under tabellen, och förklaringen att en yta kallare än daggpunkten blir våt.
2. Gränsen för mögel på ytor, 75 procent RF som kritiskt fukttillstånd, med källa Boverket (BBR 6:52) och Folkhälsomyndighetens vägledning.
3. Tabell över riktvärden per rum, med kolumner för våra egna mätningar vinter och sommar. Cellerna för egna värden har platshållare tills mätningen finns.
4. Svar på för hög luftfuktighet, inte bara torr, i ordningen vädra, värma, avfukta, med länk till köpguiden.
5. Egna mätvärden. Tills de finns står platshållaren ordagrant enligt avsnitt 4. Sidan publiceras med platshållaren och uppdateras när mätningen är gjord.

## 3. Rubrikskiss

Title: Luftfuktighet inomhus, vad som är normalt och när det blir fel

H1: Rätt luftfuktighet inomhus, och vad du gör när hygrometern visar fel

Svaret kommer i första skärmen, i frontmatterfältet `kortSvar` (mallen renderar det på linjerat papper under metaraden). Nyckeltalet som ska markeras är 75 procent.

H2 i ordning, exakt så här, inga frågor som rubriker:

1. Vad hygrometern faktiskt mäter
2. Daggpunkten avgör om väggen blir våt
3. Normalt per rum och årstid
4. Så torr blir luften på vintern, och när det är ett problem
5. För fuktigt, vädra först, värm sedan, avfukta sist
6. Mät rätt, och kolla att hygrometern visar rätt

SEO-skissen hade en sjunde H2 om vid vilken RF man kan lägga golv och måla. Faktaunderlaget innehåller ingenting om det, så avsnittet utgår tills produktexperten levererat källa. Skriv det inte.

## 4. Faktaunderlag

Det här är allt du får använda. Ingen siffra utanför tabellerna. Märkning: [Myndighet], [Tredje part], [Egen beräkning], [Vår praxis].

**Begrepp och formler**

| Påstående | Källa | Märkning |
|---|---|---|
| Relativ fuktighet är hur mycket vattenånga luften bär i procent av vad den kan bära vid sin temperatur. Absolut fuktighet är gram vatten per kubikmeter. Samma luft får högre RF när den kyls och lägre när den värms | Alingsås kommun | Tredje part |
| Uteluft vid -20 °C och 100 % RF som värms till 20 °C hamnar på cirka 6 % | Alingsås kommun | Tredje part |
| Daggpunkt är temperaturen där luften når 100 % och vatten fälls ut på ytor kallare än så | Lawrence 2005 | Tredje part |
| Magnus-formeln med a = 17,625 och b = 243,04, osäkerhet 0,35 °C. Tumregel över 50 % RF: daggpunkten sjunker cirka 1 °C per 5 procentenheter lägre RF | Lawrence 2005, BAMS | Tredje part |

Mättnadsånghalt (Alingsås anger 30, 17 och 5 g/m³ vid 30, 20 och 0 °C, vilket stämmer):

| Temperatur | Max vatteninnehåll | Märkning |
|---|---|---|
| -10 °C | 2,4 g/m³ | Egen beräkning, Magnus |
| 0 °C | 4,9 g/m³ | Egen beräkning |
| 5 °C | 6,8 g/m³ | Egen beräkning |
| 10 °C | 9,4 g/m³ | Egen beräkning |
| 12 °C | 10,6 g/m³ | Egen beräkning |
| 15 °C | 12,8 g/m³ | Egen beräkning |
| 20 °C | 17,3 g/m³ | Egen beräkning |
| 25 °C | 23,0 g/m³ | Egen beräkning |
| 30 °C | 30,3 g/m³ | Egen beräkning |

Daggpunkt, egen beräkning med Lawrence 2005. Tomma celler lämnas tomma i texten också, räkna inte fram nya:

| Rumstemp | 30 % | 40 % | 50 % | 60 % | 70 % | 80 % |
|---|---|---|---|---|---|---|
| 20 °C | 1,9 °C | 6,0 °C | 9,3 °C | 12,0 °C | 14,4 °C | 16,4 °C |
| 22 °C | 3,6 °C | 7,8 °C | 11,1 °C | 13,9 °C | 16,3 °C | 18,3 °C |
| 12 °C (källare) | | | | 4,5 °C | 6,7 °C | 8,7 °C |
| 15 °C (källare) | | | | | 9,6 °C | 11,6 °C |

**Normalt, gränser, symtom**

| Påstående | Källa | Märkning |
|---|---|---|
| "Vi mår bäst när den relativa luftfuktigheten är runt 50 %. Det är inte jättenoga, mellan 30 och 70 % går bra." (citat) | Alingsås kommun | Tredje part |
| Allmän rekommendation 30 till 60 %; vintertid vanligen under 40, ibland under 15; 20 till 40 är vanligt inomhus | Intab (instrumentbutik, ingen egen mätserie) | Tredje part |
| Gräns för utredning: medelvärde över eldningssäsongen över 7 g vatten per kg torr luft, "vilket motsvarar cirka 45 % relativ luftfuktighet vid 21 °C", eller fukttillskott vintertid regelmässigt över 3 g/m³ | Folkhälsomyndigheten, tillsynsvägledning (FoHMFS 2014:14) | Myndighet |
| Kvalster: "gärna under 45 procent vintertid". Kondens på fönstren är tecken på för hög fuktighet. Vädra inte samtidigt som tvätt torkar inne | Astma- och Allergiförbundet | Tredje part |
| Om det kritiska fukttillståndet för ett material inte är väl undersökt ska 75 % RF användas; RF vid rumstemperatur bör inte överstiga 75 % under längre tid | Boverket, BBR 6:52 via PBL kunskapsbanken | Myndighet |
| Provmetod för materialspecifika värden, rapport 2022:69 | RISE | Tredje part |
| Indikationer på fuktskada: fuktfläckar, missfärgningar eller bubblor i golvmattor och tapeter, mikrobiell växt eller lukt, "omfattande kondens på fönstrens insida vid en utetemperatur av cirka -5 °C eller lägre" | Folkhälsomyndigheten | Myndighet |
| Torr luft saknar svenskt gränsvärde; Arbetsmiljöverket har aldrig haft ett överklagat krav om torr luft | Arbetet 2019-02-01 | Tredje part |
| Symtom vid torr luft: irriterade ögon, torr hud, statisk elektricitet, halsont, nästäppa nattetid, spruckna läppar | Alingsås kommun | Tredje part |
| Fönstret immar när glasets insida är kallare än daggpunkten. Vid 22 °C och 50 % räcker en glasyta på 11 °C | Daggpunktstabellen | Egen beräkning |
| Kondens mellan glasen i en isolerruta är ett annat fel | Ingen källa | Nämn det inte |

**Mäta och åtgärda**

| Påstående | Källa | Märkning |
|---|---|---|
| Bästa hygrometern i ett test avvek max 3 procentenheter mot referens, ett annat test anger 3 till 4. Skriv "enligt två testsajter", inte mer | Testkollen, Tryggt och säkert hem (tunna sajter) | Tredje part |
| Mättad koksaltlösning i sluten burk ger 75,3 % RF vid 25 °C. Visar instrumentet 70 eller 80 vet du felet | Greenspan 1977 via OIML R121 | Tredje part |
| Medelvärde över en längre period, inte enstaka avläsningar; mät där problem befaras | Folkhälsomyndigheten | Myndighet |
| Mitt i rummet eller 1 m från yttervägg, inte i sol, inte ovanför element, minst en vecka, avläst morgon och kväll. Skriv "så gör vi", inte "experter rekommenderar" | Ingen extern källa | Vår praxis |
| För högt: vädra kort och ofta, frånluft vid dusch och matlagning, torka inte tvätt inne utan ventilation | Astma- och Allergiförbundet | Tredje part |
| Är källaren över 75 % i medel över veckan är det avfuktare | BBR 6:52 plus köpguiden | Myndighet |
| För lågt: sänk temperaturen en grad (RF stiger utan att vatten tillförs), stäng inte ventilationen | Alingsås (fysiken), Folkhälsomyndigheten (fukttillskottet är ett tak) | Tredje part, Myndighet |
| Luftfuktare: ingen svensk myndighet rekommenderar. Ta inte ställning | Underlaget | Skriv inte |

**Riktvärden per rum.** Det finns ingen svensk mätserie per rumstyp. Tabellen i texten ska se ut så här, rubrik "Så här såg det ut hemma hos oss i [månad]", en mening ovanför om att mätningen pågår, instrumentets modell när den finns. Platshållarna ordagrant, ingen påhittad siffra i någon cell:

| Rum | Riktvärde och källa | Vinter hos oss | Sommar hos oss |
|---|---|---|---|
| Sovrum | Under 45 % vintertid för kvalster (Astma- och Allergiförbundet) | [MÄTNING SAKNAS: här kommer våra egna värden från fyra rum, mätta i december] | [MÄTNING SAKNAS: här kommer våra egna värden från fyra rum, mätta i augusti] |
| Vardagsrum | Runt 50 %, 30 till 70 går bra (Alingsås kommun) | [MÄTNING SAKNAS: se ovan] | [MÄTNING SAKNAS: se ovan] |
| Badrum | Ingen källa har ett riktvärde. Frånluften ska ta topparna efter dusch | [MÄTNING SAKNAS: se ovan] | [MÄTNING SAKNAS: se ovan] |
| Källare | Under 75 % i medel över längre tid, annars mögelrisk (Boverket, BBR 6:52) | [MÄTNING SAKNAS: se ovan] | [MÄTNING SAKNAS: se ovan] |

## 5. Produkter

Inga. Nämn inget märke på hygrometrar, vi har inte testat någon.

## 6. Illustrationer

Två beställs. Referera exakt så här i MDX.

1. Under H2 2: `<Illustration namn="fukt/daggpunkt" alt="Diagram över daggpunkt, rumstemperatur 10 till 25 grader mot relativ fuktighet 30 till 90 procent, med kurvor för daggpunkt 5, 10 och 15 grader." bildtext="En yttervägg på 12 grader blir våt i det skrafferade fältet. Räknat med Magnus-formeln." />`. Till designansvarig: X-axel rumstemperatur 10 till 25 °C, Y-axel RF 30 till 90 %, tre kurvor i blyerts för daggpunkt 5, 10 och 15 °C (värden ur tabellen, interpolera inte utanför dem). Fältet ovanför 12-graderskurvan skrafferas i blyerts-2. En sak i penna: ringen runt punkten 20 °C och 60 % med handanteckningen "här börjar imman". Nyckeltalet 12 °C får gul markering. Axeletiketter i Atkinson, inte handskrift.
2. Under H2 3: `<Illustration namn="fukt/hus-rf-per-rum" alt="Hus i genomskärning med relativ fuktighet per rum, vinter till vänster och sommar till höger." />`. Ritas först när mätningen finns, talen kommer från tabellen. Till dess utgår bilden och skribenten lämnar `{/* ILLUSTRATION NÄR MÄTNINGEN FINNS: fukt/hus-rf-per-rum */}` på platsen.

Verktygskort, sidans enda. SEO-strategen beställde en daggpunktsräknare på `/rakna/daggpunkt/`, men den finns inte i registret och ett okänt kalkylatornamn stoppar bygget. Tills den finns: `<Verktygskort kalkylator="avfuktare" />` i H2 5, vid meningen om att avfukta. När daggpunktsräknaren finns flyttas kortet till H2 2 med `kalkylator="daggpunkt"` och avfuktarkalkylatorn blir en textlänk i H2 5. Aldrig två kort.

## 7. Intern länkning

- H2 5: [vilken avfuktare som passar i källaren](/fukt/avfuktare-kallare/) och [sorptionsavfuktare i kalla utrymmen](/fukt/sorptionsavfuktare/).
- H2 5, vid källaren: [hitta varifrån fukten i källaren kommer](/fukt/fukt-i-kallaren/). Sidan finns.
- H2 6: [så mäter vi](/om/sa-testar-vi/).
- Inga andra länkar. Inga externa länkar i löptext, källorna ligger i frontmatter.

## 8. Ton, vinkel, längd

Vinkeln är hantverkaren som får frågan av grannen med hygrometern i handen. Börja i situationen (siffran på displayen, imman på sovrumsfönstret en morgon i januari), inte i en definition. Ta ställning: 65 procent i sovrummet i juli är inget att göra åt, 65 procent i januari är det. Förklara relativ mot absolut fuktighet en gång, kort, och använd sedan bara "fuktighet" och "procent".

Längd 1 100 till 1 500 ord. Efter läsningen ska läsaren kunna avgöra om hennes värde är ett problem, veta vilken yta i huset som är kallast och därför blir våt först, och veta om nästa steg är att vädra, värma eller läsa om avfuktare.

Förbjudet: allt i stilguidens avsnitt "Förbjudet". Dessutom för den här sidan: inga påhittade rumsvärden, ingen mening om att "luftfuktighet påverkar hälsan" utan att säga hur och med källa, inga råd om luftfuktare, ingen produkt.

## 9. Frontmatter-skiss

```yaml
title: Rätt luftfuktighet inomhus, och vad du gör när hygrometern visar fel
description: Runt 50 procent är bra, 30 till 70 går an. Tabell per rum och årstid, daggpunkt förklarad, och vad du gör när det är för fuktigt eller för torrt.
publicerad: 2026-09-DD   # sätts vid commit
pelare: fukt
typ: kunskap
niva: mellan
kategori: luftavfuktare
kortSvar: >-
  Runt 50 procent är bäst, och mellan 30 och 70 går bra. Över 75 procent vid en kall yta,
  som en yttervägg bakom en garderob, börjar mögel växa. Under 30 procent i januari är
  normalt när det är minus ute, luften kommer in torr och blir torrare av att värmas.
produkter: []
forfattare: redaktionen   # SEO vill ha /forfattare/christian/, den filen finns inte ännu
kallor:
  - titel: Alingsås kommun, luftfuktighet inomhus
    url: https://www.alingsas.se/bygga-bo-och-miljo/boende/luftfuktighet-inomhus/
  - titel: Lawrence, The relationship between relative humidity and the dewpoint temperature, BAMS 86(2), 2005
    url: https://journals.ametsoc.org/view/journals/bams/86/2/bams-86-2-225.xml
  - titel: Boverket, PBL kunskapsbanken, högsta tillåtna fukttillstånd (BBR 6:52)
    url: https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/
  - titel: Folkhälsomyndigheten, tillsynsvägledning om fukt och mikroorganismer
    url: https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/halsoskydd-vagledning-och-tillsyn/tillsynsvagledning-om-fukt-och-mikroorganismer/
  - titel: Astma- och Allergiförbundet, kvalsterallergi
    url: https://astmaoallergiforbundet.se/allergi/kvalsterallergi/
  - titel: Intab, inomhusklimat
    url: https://intab.se/radgivning/inomhusklimat
  - titel: Greenspan 1977 via OIML R121, mättade saltlösningar
    url: https://www.gso.org.sa/store/standards/GSO:484863/GSO%20OIML%20R121:2007?lang=en
  - titel: Arbetet, torr luft ger dålig arbetsmiljö, 2019-02-01
    url: https://arbetet.se/2019/02/01/torr-luft-ger-dalig-arbetsmiljo-att-vadra-hjalper-inte/
utkast: false
```

SEO-strategens description sa "40 till 60 procent". Den siffran finns inte i faktaunderlaget, så jag har bytt till Alingsås värden. SEO-strategen får invända.
