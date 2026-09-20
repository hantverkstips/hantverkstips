# Faktablad: /rakna/daggpunkt/

Ur `src/pages/rakna/daggpunkt.astro`, `src/components/kalkyl/DaggpunktForm.astro`, `src/lib/kalkyl/daggpunkt.ts` och `src/lib/kalkyl/register.ts`, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG daggpunkt, VERKTYGSNAMN "Daggpunktskalkylator" (går till brödsmula och WebApplication name, ska vara ett namn).
- Title i dag 50 tecken. Krav: ordet daggpunkt först, högst 60, helst 44 så varumärket följer med.
- Description i dag 142 tecken. Krav: daggpunkt, kondens, löftet att sidan säger om väggen blir våt. "Källa på varje tal" får gå.
- H1 i dag "Blir väggen våt? Räkna ut daggpunkten". Måste innehålla daggpunkt, inte samma som title.
- Registret: namn "Blir väggen våt? Räkna ut daggpunkten" (bär ordet daggpunkt, ankare i tre inbäddningar), rad "Temperatur, luftfuktighet och kallaste ytan ger kondensrisken." (substantivramsa, ska bli mening med verb). sasong och pelare rörs inte.

## Formuläret (fält, name-attribut rörs inte)

- temp: Lufttemperatur inne, °C. Ingen hjälptext.
- rf: Relativ luftfuktighet, %. Hjälp: talet hygrometern visar mitt i rummet.
- ytatemp: Kallaste ytans temperatur, °C. Hjälp: lista TYPISKA_YTOR + "Talen är vår erfarenhet från äldre hus, inte en publicerad tabell. Mät med en IR-termometer."
- arstid: radio, ARSTIDER: vinter "Vinter, oktober till mars", sommar "Sommar, april till september".
- rum: radio, RUMSVAL: bostad "Uppvärmt rum i bostaden", kallare "Källare eller krypgrund", garage "Garage, förråd eller uthus".
- Knapp "Räkna ut".

## Konstanter och standard (rörs inte)

- Magnus: a 6,1094 hPa, b 17,625, c 243,04. Källa Lawrence 2005, BAMS 86(2). Osäkerhet 0,35 grader.
- Ånghaltkonstant 216,68. Källa SMHI kunskapsbanken om olika mått på luftfuktighet (allmänna gaslagen).
- KRITISKT_FUKTTILLSTAND_RF 75. Källa Boverket BBR 6:52, gäller när materialets eget värde inte är undersökt.
- LAGSTA_RIMLIGA_RF 25 (antagande: under det blir bostaden obehagligt torr vintertid, då ska ytan bli varmare i stället).
- STANDARD: 20 grader, 50 procent, yta 12 grader, vinter, bostad.
- GRANSER: temp 0 till 40, rf 5 till 100, yta minus 20 till 40.
- TYPISKA_YTOR (vår erfarenhet, inte publicerad tabell): yttervägg i äldre hus 12 till 15 grader, fönsterglas i januari 5 till 10, källarvägg 8 till 12.
- Kontrolltal: mättnadsångtryck 23,3 hPa vid 20 grader, 14,0 vid 12. Mättnadsånghalt 17,25 g/m³ vid 20 och 10,64 vid 12. Halva taket vid 20 grader = 8,6 g/m³. Daggpunkt 9,3 vid 20/50, 14,4 vid 20/70, 11,1 vid 22/50.

## Räkningen (sex steg i "Så räknar vi")

1. Temperaturen inne ger mättnadsångtrycket (hur mycket ånga luften orkar bära). Magnus-formeln.
2. Luftfuktigheten säger hur stor del av taket som är använt. Halva taket vid 20 grader är 8,6 g vatten per kubikmeter.
3. Daggpunkten är formeln baklänges: temperaturen där just den mängden fyller taket.
4. Vid kalla ytan är vattnet detsamma, taket lägre. Kvoten är luftfuktigheten i skiktet närmast väggen, alltid högre än mitt i rummet. Kvoten räknas på ångtryck så 100 procent infaller exakt vid daggpunkten.
5. Yta under daggpunkten = våt (kondens). Luft vid ytan över 75 procent = mögelrisk även utan droppe.
6. Två vägar under gränsen: vilken RF inne som ger 75 vid ytan (avrundad nedåt), vilken yttemp som ger 75 vid dagens RF (avrundad uppåt till en decimal). Är RF-kravet under 25 måste ytan bli varmare (ytanMasteBliVarmare).

## Bedömningar och råd (logik rörs inte)

- kondens: yta ≤ daggpunkt. mogelrisk: RF vid ytan > 75. ingen_risk annars.
- Vinter (alla rum): åtgärder vädra, sänk fuktproduktion, värm/isolera ytan. Gör inte: bostad: köp ingen avfuktare till sovrum som immar i januari, uteluften är torr, fönster på vid gavel fem minuter gör jobbet gratis. Kallt rum: ställ inte kondensavfuktare i kallt utrymme på vintern, den avfrostar mer än avfuktar, sorptionsavfuktare är rätt.
- Sommar, källare/garage: avfuktare, värm/isolera ytan. visaAvfuktare = true. Gör inte: vädra inte en fuktig sommardag, uteluft på 20 grader bär mer vatten än kalla luften inne.
- Sommar, bostad: sänk fuktproduktion, värm/isolera ytan. Inget gör-inte.
- ATGARDSTEXT: vädra kort med genomdrag ett par gånger om dagen (vinterluft bär nästan inget vatten, torrare när den värmts). Sänk fuktproduktion: lock på grytor, frånluft under och efter dusch, tvätt torkad annanstans än sovrummet. Värm eller isolera ytan: vägg närmare rumstemp ligger längre från daggpunkten, luftspalt bakom garderob kostar inget. Avfuktare: i kallt utrymme på sommaren enda åtgärden som tar bort vatten, uteluften bär mer än inne.
- Felsträngar: "Ange lufttemperatur mellan 0 och 40 grader", "Ange luftfuktighet mellan 5 och 100 procent", "Ange yttemperatur mellan minus 20 och 40 grader". Testet matchar /lufttemperatur/, /luftfuktighet/, /yttemperatur/, /avfuktare till ett sovrum/, /Vädra inte/, /kondensavfuktare/.

## Resultatspalten i dag

- Standardvarning. Etikett Daggpunkt, stort tal i grader, rad "vid X °C och Y % RF inne, plus minus 0,35 grader i formeln", rad "Z g/m³ vatten i luften, W % RF vid ytan på V °C".
- Dom: kondens "Ja, ytan blir våt", mogelrisk "Nej, men det är för fuktigt vid ytan", ingen_risk "Nej, ytan håller sig torr".
- Förklaring per bedömning med marginalen i grader. Kondens: syns som imma på glas, mörk fläck på tapet. Mögelrisk: över Boverkets gräns vecka efter vecka växer mögel utan att ytan varit blöt. Ingen risk: ingen åtgärd för fuktens skull.
- Två vägar (rfKrav procent inne eller ytTempKrav grader på ytan), eller bara ytan när ytanMasteBliVarmare.
- Åtgärdslista, gör inte, länk #sa-raknar-vi, delafält.
- Kortsvar i faktarutan: daggpunkt X grader, ytan kallare/varmare än så, luften vid ytan Y procent mot Boverkets 75, åtgärdsrad.

## Brödtext under verktyget

- Villkorligt (visaAvfuktare): H2 id avfuktaren, för liten avfuktare går dygnet runt och kommer inte ner till 55 procent, räkna liter per dygn före köp. Verktygskort avfuktare.
- H2 id vad-daggpunkten-ar: definition (luft bär vatten som ånga, mängden beror på temperaturen, kyls den fälls vatten ut, det är daggpunkten; kallaste ytan tar emot). Kondens på vägg syns sällan som droppar: väggen suger, tapeten mörknar, luktar källare. Luftskiktet närmast väggen på hög RF i veckor räcker. Boverket BBR 6:52: 75 procent gräns för material utan undersökt värde. Mögel växer på yta ingen kallar våt.
- H3 Sovrummet i januari: två sover, 20 grader, 50 procent, daggpunkt 9,3. Gammalt tvåglasfönster håller inte ens hälften av det en kall natt, imma given. Yttervägg bakom garderob andra kandidaten, stilla luft, några grader kallare. Vädra kort med genomdrag morgon och kväll; uteluft på minusgrader bär nästan inget vatten, torrare när den värmts. Flytta ut garderoben några centimeter.
- H3 Källaren i augusti: källarluft kanske 18 grader, väggar mot mark 12. Uteluft varm och full av vatten följer in genom öppet fönster, fälls ut på kalla väggen. Ju mer du vädrar desto blötare (kontraintuitivt, ska vara tydligt). Stäng fönstret, avfuktare med hygrostat. Fukt upp genom golvet = dräneringen, ingen maskin hjälper i längden.
- H3 Garaget: ouppvärmt garage följer uteluften med ett dygns fördröjning. Vårdag kallt till milt: betongplattan på gårdagens temperatur, daggpunkten i nya luften över plattan, vatten på golvet fast taket är helt. Samma med blöt bil. Ventilera när det är kallare ute än inne. Verktyg på hylla, inte på betongen.
- H2 id sa-raknar-vi: skiss namn rakna/daggpunkt (alt i dag 143 tecken: ytterhörn i genomskärning, 2 grader ute, 21 inne vid 55 procent, droppar på kall yta på 11 grader). Sex steg. H3 Vad siffrorna vilar på + tabell. Efter tabellen: formeln säker, indatan inte; hygrometern kan visa några procentenheter fel, yttemperaturen gissning tills mätt; läs som spann. Länk /om/sa-testar-vi/.
- Antagandetabell: Daggpunkten ur temp och RF, Magnus a 17,625 b 243,04, Källa Lawrence 2005 BAMS 86(2) osäkerhet 0,35 (url). Gräns mögel vid ytan 75 % RF, Källa Boverket BBR 6:52 (url). Ånghalten 216,68 × ångtrycket / temp i kelvin, Källa gaslagen, SMHI (url). RF vid kalla ytan = ångtrycket inne / mättnadsångtrycket vid ytan, Antagande: luftskiktet bär lika mycket som rummet, garderob tätt mot vägg ger högre. Typiska yttemperaturer 12 till 15, 5 till 10, 8 till 12, Antagande, egen erfarenhet från äldre hus, mät med IR-termometer. Gräns där ytan måste bli varmare 25 % RF inne, Antagande, under det obehagligt torrt.
- Läs vidare: /fukt/luftfuktighet-inomhus/, /fukt/fukt-i-kallaren/, /fukt/sorptionsavfuktare/. Ska lägga till /grund/isolera-kallarvagg/ (länkar hit).
- Faq (3): Vad är daggpunkt? (temp där luften inte bär mer, kyls yta under fälls vatten ut, kallaste ytan först, fönsterruta eller yttervägg bakom garderob). Vilken luftfuktighet är normal inomhus? (30 till 45 procent vintertid, högre sommar, hygrometern mitt i rummet, vid kall yta högre, där börjar mögel; lank /fukt/luftfuktighet-inomhus/). Hjälper avfuktare mot kondens på fönster? (ja när fuktig luft inne, daggpunkten sjunker under rutans temp; gammalt tvåglas kan kräva obehagligt torr luft, byt rutan; kort vädring med genomdrag morgon och kväll gör ofta samma nytta på vintern).

## Sidofraser att ha med

kondens på väggen (H1 eller ingress), relativ luftfuktighet (ingress eller så räknar vi), kritiskt fukttillstånd 75 procent (H2 om vad daggpunkten är), kondens på insidan av fönstret (ett exempel), mögel i H2:n. Längd 1 100 till 1 400 ord plus Faq.
