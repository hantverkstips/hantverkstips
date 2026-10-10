# Sökord att hämta volym för, Altan och uteplats (2026-10-10)

Underlag till körning 5 i Keyword Planner, 565 fraser i 12 grupper. Beställt av SEO och GEO-agenten för pelaren `/altan/`. Listan täcker hela pelaren: bygget som helhet, grund och stomme, trall, skruv och beslag, bygglov och grannar, räcke, trappa och tak, underhåll, problem, kostnad, uteplats i sten, plank och staket, och verktygen som är kanten mot verktygshubben. Inga volymer är gissade; listan är bara fraser.

Fraserna kommer från fyra källor, hämtade 2026-10-10:

- **Googles autocomplete** (svensk Google, `hl=sv`, `gl=se`): 891 förfrågningar, 25 kärnord med a till ö (bland andra altan, bygga altan, trall, altantak, uteplats, plintar, plank, staket, altanräcke, olja altan, trädäck, pergola, marksten, insynsskydd, attefall, altantrappa, markskruv, komposittrall, tvätta altan, inglasad altan, altan bygglov, reglar altan, lägga plattor) och 143 fröord utan bokstav (frågor, kostnad, material, regler, problem, verktyg, märken). 9 136 unika förslag. 463 av fraserna nedan är ordagranna förslag.
- **Sajtens egna sidor och planer**: `src/content/guider/altan/` (bygga altan, trädäck på mark, trallskruv), `src/content/kunskap/altan/` (bygglov altan, reglar avstånd och dimensioner), räknarna med pelare altan i `src/lib/kalkyl/register.ts` (altan, bygglov altan) och de planerade sidorna i `docs/INNEHALLSARKITEKTUR.md` (plintar eller markskruv, välja trall, vad kostar altan, olja och underhåll, altanräcke, verktyg för altanbygge, kapsåg, sänksåg eller cirkelsåg, batteriplattform).
- **Rubriker och frågor hos dem som syns på fraserna**, via sökmotorns utdrag: byggahus.se (välja trall, trätest efter elva år, forumtrådar om dimensionering, alger och olja), Hornbach (bygga altan på plintar), Bygghemma (bygga altan, olja altan), Boverkets nyhet om vägledningen till bygglovsreglerna från 1 december 2025 och Villaägarnas pdf om bygglov 2026. Boverkets sida om bygglovsbefriade åtgärder (404), Villaägarnas rådgivningssida (500) och Byggmax guidesida (404) gick inte att läsa direkt; där användes bara utdragen.
- **Egna tillägg**, cirka 100 fraser som inte kom ordagrant ur autocomplete: själva fröorden (kapsåg, cirkelsåg, balksko, fogsand), uppdragets avsikter som källorna formulerade på annat sätt ("behöver man bygglov för altan", "när behövs räcke på altan") och problemfraser byggda på symptomen i forumtrådarna ("plintar sätter sig", "altan gungar", "altan mot fasad fukt"). De är de mest osäkra; noll volym på dem är ett svar i sig.

**Rensning.** Av 9 136 förslag kom 463 med. Bort föll turkiska och engelska träffar på "altan", "plank" och "ute" (personnamn, träningsövningen plank, utländska hotell), korsordsfraser, ortnamn ("bygglov altan västerås" och sextio till), bilmodeller under insynsskydd, inomhusfraser (klinker, trappräcke inomhus, balkong i lägenhet), butikskombinationer utan avsikt utöver butiken ("trall jula", "staket xl bygg"), produktnummer och nära varianter av samma fras. Märken som är kvar säljs i Sverige och syns i förslagen och hos butikerna: Stavrex, Essve, Moelven, Cuprinol, Makita, DeWalt.

**Dubbletter.** Kontrollen är gjord med skript mot alla 1 039 mätta fraser i `docs/data/keyword-stats-*.csv` (körning 1 till 4, UTF-16 med tabbar). Skriptet jämför efter att ha tagit bort "en" och "ett" och kapat böjningsändelser, så att singular och plural och "altan" mot "altanen" räknas som samma fras. **22 fraser är strukna**: 20 förslag som redan är mätta eller nära varianter av mätta ("bygga altan", "bygga en altan", "bygga en altan kostnad", "altan utan bygglov", "trädäck på plattor", "avstånd mellan reglar altan", "reglar altan dimension", "bärlina altan dimension", "markskruv eller plint", "kap och gersåg bäst i test", "kontrollplan mall" med flera) och 2 som var dubbletter inom listan ("gjuta plintar" mot "gjuta plint", "plint altan djup" mot "plintar altan djup"). Efter strykningen ger skriptet noll träffar.

## Så körs listan

1. Keyword Planner, **Hämta sökvolym och prognoser**. Sverige, svenska, Google, senaste tolv månaderna, samma inställningar som körning 1 till 4.
2. Klistra in fraserna. Samma fraser utan rubriker, en per rad, finns i `docs/data/keyword-planner-lista-2026-10-10-altan.txt`, så att hela filen kan kopieras på en gång. Om rutan inte tar alla på en gång, klistra in i omgångar om högst 250 rader: rad 1 till 250, 251 till 500 och sedan 501 till slutet. Varje omgång exporteras för sig.
3. Exportera fliken med historiska mätvärden som **Keyword Stats (CSV)**, samma format som tidigare (UTF-16 med tabbar).
4. Spara exporten som `docs/data/keyword-stats-2026-10-10-altan.csv`, eller `-altan-1.csv` och `-altan-2.csv` vid två omgångar (`-altan-3.csv` om en tredje behövs). Säg till SEO och GEO-agenten när den ligger där. Volymerna läses då in, sorteras på gruppen i den här filen och blir underlaget till klusterplanen för Altan.

Grupperna är ordnade per delområde och avsikt, så att volymen per grupp går att summera direkt. Avsikterna är **projekt** (bygget eller åtgärden), **kunskap** (mått, dimensioner, hur det fungerar), **köp** (material, beslag, maskin, märke), **regel** (bygglov, grannar, räcken, kostnad, avdrag), **problem** (symptom och "vad göra") och **säsong** (underhåll som styrs av årstiden). Säsongen för pelaren toppar april till maj, så volymerna i oktober speglar inte toppen; titta på månadskolumnerna.

## 1. Bygga altan, helheten (projekt)

### 1.1 Bygga altan, projekt

bygga altan själv
bygga altan steg för steg
bygga altan nybörjare
hur bygger man altan
bygga altan att tänka på
bygga enkel altan
bygga altan på plintar
bygga altan på mark
bygga altan på plattor
bygga altan på stenplattor
bygga altan på gräsmatta
bygga altan på berg
bygga altan i sluttning
bygga altan ojämn mark
bygga altan mot husvägg
fristående altan
bygga altan utan plintar
bygga altan med markskruv
altan med fris
bygga altan med trappa
bygga altan med tak
bygga altan i vinkel
bygga altan runt hörn
bygga altan över källarfönster
bygga altan på hösten
förlänga altan
renovera altan
riva altan

### 1.2 Planera, ritning och storlek

altan ritning
bygga altan ritning
ritning altan på plintar
ritning altan med tak
altan planerare
altan storlek
lagom storlek altan
altan höjd
altan höjd över mark
altan lutning från hus
fall på altan
altan konstruktion
beräkna virke altan
altan kalkylator

### 1.3 Altantyper

altan på mark
altan i marknivå
låg altan
upphöjd altan
bygga upphöjd altan
upphöjd altan på plattor
hög altan
altan i flera nivåer
altan i två nivåer
nedsänkt altan
altan pool
altan runt pool
altan pool ovan mark
bygga altan runt ovanmarkspool
altan runt spabad
altan vid entre
altan i vinkel
altan runt huset
inglasad altan
inglasad altan pris
bygga inglasad altan
glasa in altan själv
inglasad altan eller uterum
altan eller trädäck

## 2. Grund och stomme (projekt och kunskap)

### 2.1 Plintar och markskruv

plintar altan
sätta plintar altan
plintar altan djup
plintar frostfritt djup
plintar höjd över mark
gjuta plint
gjuta plint till altan
gjuta plint i rör
gjuta plint på berg
gjuta plint armering
gjuta plint torktid
gjuta plintar åtgång betong
betongplint
betongplint altan
betongplint med stolpsko
justerbara plintar altan
plintar på berg
plintar i lerjord
plintar i sluttning
plintar eller plattor altan
isolera plintar mot tjäle
markskruv altan
markskruv altan avstånd
markskruv pris
markskruv hur djupt
markskruv i lera
markskruv i stenig mark
markskruv nackdelar
markskruv tjäle
markskruv stavrex
markskruv eller jordankare
skruva ner markskruv för hand

### 2.2 Bärlinor, reglar och spännvidd

bärlina altan
bärlina altan avstånd
bärlina altan 45x145
bärlina altan på plattor
skarva bärlina
altan bjälklag
bjälklag altan dimension
reglar altan
reglar altan avstånd
reglar altan cc
reglar altan på mark
skarva reglar altan
tejp reglar altan
regelverk altan
regla altan för fris
kortlingar altan
altan överhäng
spännvidd 45x145
spännvidd 45x195
spännvidd 45x170
spännvidd bjälklag tabell
spännvidd trall

### 2.3 Virke och dimensioner

altan virke
dimension virke altan
tryckimpregnerat virke
tryckimpregnerat virke dimensioner
regel 45x145
45x195 tryckimpregnerat
ntr a virke
ntr ab virke
ntr a eller ab
ntr ab giftigt
otryckt virke altan
stolpsko
stolpsko justerbar
plintsko justerbar

### 2.4 Mark, markduk och dränering

markduk altan
markduk under altan eller inte
makadam under altan
altan dränering
dränering under altan
avrinning under altan
plast under altan

## 3. Trall och material (köp och kunskap)

### 3.1 Välja trall

vilken trall ska man välja
vilken trall är bäst för altan
trall material
trall test
trall livslängd
tryckimpregnerad trall
ntr ab trall
trall g4-2 eller g4-3
kärnfuru trall
lärk trall
sibirisk lärk trall
trall lärk eller tryckimpregnerat
ädelträ trall
trall hårdträ
värmebehandlad trall
moelven thermowood trall
komposittrall
komposittrall bäst i test
komposittrall pris
komposittrall nackdelar
komposittrall eller tryckimpregnerat
komposittrall vs trätrall
komposittrall problem
komposittrall livslängd
komposittrall varmt
komposittrall regelavstånd
komposittrall clips
grå trall

### 3.2 Dimension och utförande

trall 28x120
trall 28x145
trall 34x145
trall 22x95
trall dimensioner
trall tjocklek
trallbredd
räfflad trall
räfflad eller slät trall
trall vilken sida upp
trall kärnsida upp eller ner
trall glad eller ledsen gubbe
trall åt vilket håll
trall mellanrum
trall avstånd mellan brädor
trall skarv

### 3.3 Pris och åtgång

trall pris
trall pris per kvm
trall pris löpmeter
trall åtgång
trall åtgång m2
åtgång trall 28x120
trall räknare
trall byggmax
trall bauhaus

## 4. Skruv, beslag och infästning (köp)

### 4.1 Trallskruv

trallskruv rostfri
trallskruv a4
trallskruv a2
trallskruv c4
trallskruv längd
trallskruv 55 mm
trallskruv till 28x120
trallskruv åtgång
trallskruv per kvm
trallskruv essve
trall eller träskruv

### 4.2 Dold infästning och förborrning

dold infästning trall
trall dold skruv
trall dold skruv eller inte
trall clips
förborra trall
behöver man förborra trall
lägga trall
lägga trall avstånd
trall jigg
trall avstånd verktyg

### 4.3 Beslag

balksko
balksko 45x145
vinkeljärn
vinkeljärn rostfritt
spikplåt
stolpsko till altanräcke
beslag altan
skråskruva reglar altan

## 5. Regler och bygglov (regel)

### 5.1 Bygglov för altan

behöver man bygglov för altan
bygglov altan regler
bygglov altan nya regler
bygga altan regler 2026
bygglov altan höjd över mark
altan höjd utan bygglov
är altan bygglovspliktig
bygglovsbefriad altan
bygglov altan boverket
bygglov altan med tak
bygglov altan utanför detaljplan
bygglov altan strandskydd
bygga altan på prickad mark
bygglov altan radhus
bygglov altan kostnad
bygga altan utan bygglov straff
altan utan bygglov preskribering
altan bygganmälan
är altan en tillbyggnad
är altan biarea

### 5.2 Tomtgräns och granne

altan nära tomtgräns
avstånd altan tomtgräns
altan närmare än 4,5 meter
bygga altan nära grannen
grannemedgivande altan
grannemedgivande blankett
trädäck nära tomtgräns
trädäck vid tomtgräns

### 5.3 Tak, inglasning och komplementbyggnad

altantak bygglov
altantak utan bygglov
inglasad altan bygglov
inglasad altan utan bygglov
inglasning bygglov
uterum bygglov
uterum utan bygglov
pergola bygglov
pergola utan bygglov
skärmtak bygglov
skärmtak utan bygglov
attefall altan
attefall nya regler 2026
bygglovsbefriad tillbyggnad
nya bygglovsregler
kontrollplan bygglov

### 5.4 Räcke och trappa, regler

räcke höjd altan
altanräcke höjd regler
altanräcke regler
räcke höjd bbr
höjd räcke altan boverket
när behövs räcke på altan
höjd altan utan räcke
räcke höjd trappa utomhus

## 6. Räcke, trappa och tak (projekt)

### 6.1 Altanräcke

altanräcke
altanräcke trä
bygga altanräcke
altanräcke stående ribbor
altanräcke liggande ribbor
altanräcke kryss
altanräcke med överliggare
altanräcke avstånd stolpar
altanräcke infästning
altanräcke ritning
altanräcke kostnad
altanräcke metall
glasräcke altan
glasräcke altan pris

### 6.2 Altantrappa

altantrappa
bygga altantrappa
altantrappa ritning
altantrappa mått
altantrappa steghöjd
altantrappa stegdjup
altantrappa hörn
altantrappa i vinkel
altantrappa 2 steg
altantrappa utan vangstycke
steghöjd trappa utomhus
steghöjd och stegdjup trappa

### 6.3 Altantak

altantak
bygga altantak
altantak mot husvägg
fästa altantak i fasad
ansluta altantak mot befintligt tak
altantak lutning
altantak dimensionering
altantak kanalplast
altantak plast eller plåt
altantak kostnad
altantak snölast

### 6.4 Pergola, markis och skydd

bygga pergola
pergola trä
pergola ritning
pergola mot husvägg
pergola på altan
pergola med tak
markis altan
skärmtak altan
solskydd altan
vindskydd altan
insynsskydd altan
insynsskydd altan trä
spaljé altan
altanbelysning

## 7. Underhåll och säsong (projekt, säsong)

### 7.1 Olja altan

olja altan
när olja altan
olja ny altan
olja altan första gången
olja altan hur ofta
olja altan temperatur
olja altan i sol
olja altan regn
olja altan torktid
olja altan hur många lager
olja altan med roller
olja altan steg för steg
olja altan efter tvätt
olja altan efter högtryckstvätt
olja altan eller inte
olja altan på hösten
olja altan med pigment
olja altan tryckimpregnerat
olja altan klibbig
olja altan åtgång
bästa olja altan
olja altan bäst i test
träolja altan
olja trädäck
olja altan cuprinol
olja eller lasera altan

### 7.2 Tvätta altan

tvätta altan
altantvätt
tvätta altan innan oljning
tvätta altan med såpa
högtryckstvätta altan
högtryckstvätta trall
tvätta altan utan högtryckstvätt
tvätta altan med ättika
tvätta altan med bikarbonat
linoljesåpa altan
såpa eller olja altan
altantvätt maskin
altantvätt bäst i test
rengöra altan
alger på altan
grön påväxt altan
tvätta komposittrall

### 7.3 Slipa, måla och lasera

slipa altan
slipa altan maskin
slipa altan hyra maskin
slipa altan för hand
måla altan
måla altan med täckfärg
måla altangolv
måla altanräcke
laserande färg
lasyr altan

### 7.4 Grått trä och säsong

grå trall behandling
göra trall grå
obehandlad altan
järnvitriol trall
altan vinter
skydda altan vinter
snö på altan
hal altan vinter
halkskydd altan

## 8. Problem (problem)

### 8.1 Trall och virke

trall spricker
varför spricker trall
nylagd trall spricker
kupad trall
trall slår sig
trall spottar
trallen är hal
mögel på trall
mögel på ny trall
svartmögel altan
ruttna reglar altan
byta ruttna reglar
röta i altan
byta trall
byta trall på gammal altan
ändträ trall
olja altan flagnar
trallen är grön

### 8.2 Stomme och grund

sviktande altan
altan sviktar
altan gungar
altan har sjunkit
altan lutar
plint har sjunkit
plintar sätter sig
tjäle plintar
röta i plint
altan rör sig
altan mot fasad fukt
vatten under altan

## 9. Kostnad (regel och kostnad)

### 9.1 Vad kostar en altan

bygga altan kostnad material
bygga altan pris
bygga altan pris per kvm
altan kostnad per kvm
altan pris per kvm material
materialkostnad altan per kvm
kostnad altan 20 kvm
kostnad altan 30 kvm
kostnad altan 50 kvm
kostnad altan med tak
bygga altan själv kostnad
bygga altan billigt
trädäck kostnad per m2

### 9.2 Snickare och rotavdrag

snickare altan
snickare altan pris
bygga altan pris hantverkare
anlita snickare altan
rotavdrag altan
rotavdrag bygga altan
rotavdrag 2026 altan
rotavdrag altantvätt
rotavdrag inglasning altan

## 10. Uteplats och marksten (projekt)

### 10.1 Bygga uteplats

bygga uteplats
anlägga uteplats
anlägga uteplats sten
uteplats sten
uteplats sten eller trä
uteplats marksten
uteplats stenplattor
uteplats grus
uteplats med grus underarbete
uteplats natursten
uteplats med tak
uteplats bygglov
uteplats i sluttning

### 10.2 Lägga marksten och plattor

lägga marksten
lägga marksten själv
lägga marksten steg för steg
marksten underlag
marksten bärlager
lägga marksten djup
lägga marksten lutning
lägga marksten mot husgrund
lägga marksten pris per kvm
lägga marksten verktyg
marksten åtgång
lägga plattor uteplats
lägga plattor på grus
lägga plattor i stenmjöl
lägga plattor direkt på jord
lägga plattor med fall
betongplattor uteplats
plattsättning pris

### 10.3 Bärlager, sand och fog

stenmjöl 0-8
stenmjöl eller sättsand
stenmjöl mellan plattor
bärlager uteplats
makadam 8-16
makadam 16-32
markduk under plattor
fogsand
fogsand ogräshämmande
fogsand som härdar
kantsten
vibratorplatta

### 10.4 Trädäck på mark och plattor

trädäck på mark reglar
bygga trädäck på plattor
trädäck på marksten
trädäck på stenplattor
trädäck på mark utan grus
trädäck på mark bygglov
trädäck i marknivå
trädäck konstruktion
trädäck eller stenplattor
marksten eller trall

## 11. Plank, staket och insynsskydd (projekt och regel)

### 11.1 Plank

plank bygglov
plank bygglov boverket
plank utan bygglov
plank höjd utan bygglov
plank höjd
plank mot granne
plank tomtgräns
plank vid uteplats
plank till altan
bygga plank
plank konstruktion
plank avstånd mellan stolpar
plank kostnad per meter
plank liggande brädor
plank eller staket

### 11.2 Staket och spjälstaket

staket bygglov
staket utan bygglov
staket höjd
staket mot grannen regler
staket till altan
staket runt altan
bygga staket
staket stolpar
staket avstånd mellan stolpar
staket kostnad per meter
spjälstaket
bygga spjälstaket

### 11.3 Insynsskydd

insynsskydd uteplats
insynsskydd uteplats trä
insynsskydd altan bygga själv
insynsskydd mot granne
insynsskydd regler
insynsskydd utan bygglov
insynsskydd tomtgräns

## 12. Verktyg för altanbygget (köp, kant mot verktygshubben)

### 12.1 Sågar

verktyg bygga altan
kapsåg
kapsåg bäst i test
kapsåg med bord
kapsåg med stativ
kapsåg batteri
kapsåg makita
kap och gersåg batteri
kap och gersåg makita
kap och gersåg dewalt
gersåg med bord
cirkelsåg
cirkelsåg batteri
cirkelsåg bäst i test
cirkelsåg med skena
sänksåg
sänksåg med skena
såga trall

### 12.2 Skruvdragare och batteri

skruvdragare trallskruv
slagskruvdragare
slagskruvdragare bäst i test
slagskruvdragare vs skruvdragare
slagskruvdragare makita
skruvdragare makita
skruvautomat trall
batteripaket
batterisystem verktyg

### 12.3 Mäta, väga och borra

rotationslaser
rotationslaser med mottagare
rotationslaser bäst i test
rotationslaser utomhus
rotationslaser hyra
vattenpass
plintborr
plintborr hyra
jordborr
jordborr till skruvdragare
markskruvmaskin
