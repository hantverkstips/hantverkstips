# Faktablad: /golv/bygga-trappa/

Ur `src/content/guider/golv/bygga-trappa.mdx` 2026-09-20, före omskrivningen. Allt här är låst utom formen.

## Frontmatter som rörs inte

slug bygga-trappa · pelare golv · niva mellan · typ projektguide · produkter [] · publicerad 2026-09-20 · forfattare redaktionen · bild trappa-vangstycke.svg · kallor (9 st) · utkast false.

## Testet läser sidan

`scripts/test-kalkyl-trappa.mjs` läser filen från disk och kräver:

- Tabell som börjar med raden `| Steghöjd, mm |`, fem rader med tre tal i ordningen steghöjd, stegdjup, lutning.
- Punktlista med exakt dessa etiketter och värden: `- Våningshöjd: 2 700 mm`, `- Antal stigningar: 16`, `- Steghöjd: 169 mm`, `- Stegdjup: 292 mm`, `- Trappans längd på golvet: 4,4 m`, `- Lutning: 30 grader`.
- Strängarna `600 till 650 mm`, `mellan 140 och 200 mm`, `minst 250 mm`, `mellan 17 och 30 grader`, `en- och tvåbostadshus`.

## Ordlistan (måste finnas i ingressen)

- Våningshöjd: färdigt golv nere till färdigt golv uppe.
- Vangstycke: trappans sida, den sneda balken som bär stegen.
- Plansteg: det du sätter foten på.
- Sättsteg: den lodräta delen mellan två plansteg.
- Stegnos: planstegets framkant, skjuter ut över sättsteget.
- Stigning: en steghöjd. Antal stigningar = antal plansteg + 1 (översta är övervåningens golv).
- Gånglinje: linjen där foten går, mitt i en rak trappa.
- Vilplan: litet plan mitt i trappan.
- Växel: tvärbalk som tar upp lasten från kapade bjälkar.
- Fuktkvot: vatten i virket i förhållande till torrvikten.

## Trappformeln (Svenskt Trä, byggbeskrivningen Bygg en trappa)

- 2 × steghöjden + stegdjupet = 600 till 650 mm. Står i `<Markering>`.
- Normal lutning: plansteg cirka 300 mm, sättsteg 150 mm.
- Steghöjd mellan 140 och 200 mm. Stegdjup minst 250 mm. Stigningsvinkel mellan 17 och 30 grader. Utomhus flackare än inne.

Tabell (låst, kolumnordning låst):

| Steghöjd, mm | Stegdjup, mm | Lutning, grader |
| 140 | 350 | 22 |
| 150 | 330 | 24 |
| 160 | 310 | 27 |
| 170 | 290 | 30 |
| 180 | 270 | 34 |

Källrad: steghöjderna är Svenskt Träs spann; stegdjupet räknat av oss med trappformeln och summan 630 mm; lutningen vår uträkning. Sista raden (180) ligger utanför Svenskt Träs tak på 30 grader och förklaras i texten: får plats på mindre golv, märks i låren.

`<Kalkylator namn="trappa" />` står efter tabellen.

## Räkna stegen ur höjden

- Svenskt Trä räknar tvärtom: djupet delas med 300 → antal plansteg, höjden delas med antalet. Fungerar när djupet är låst (altan). I ett hus är höjden låst, så jag vänder på det.
- Ordning: 1) mät våningshöjden på tre ställen, räkna med nytt golv. 2) dela höjden med önskad steghöjd, avrunda till heltal = antal stigningar. 3) dela höjden med antalet → exakt steghöjd. 4) stegdjup ur formeln. 5) stegdjup × (stigningar − 1) = längd på golvet.
- Räkneexempel (våra tal, formelsumma 630): våningshöjd 2 700 mm, 16 stigningar, steghöjd 169 mm (exakt 168,75), stegdjup 292 mm (292,5 avrundat nedåt), längd på golvet 4,4 m, lutning 30 grader.
- Flackare = längre. Brantare = utanför branschens rekommendation, medvetet beslut.
- Lika höga steg: foten lär sig höjden på tre steg. Boverket kräver tydlig markering av avvikande steg när det inte går att undvika: BFS 2024:9 2 kap. 8 §, som undantar en- och tvåbostadshus. Undantaget gör inte steget mindre farligt.

## Boverket (BFS 2024:9, 2 kap.)

- Föreskrifter om säkerhet vid användning av byggnader. Trädde i kraft 1 juli 2025; möjligheten att följa gamla byggregler upphörde 1 juli 2026.
- 5 §: "Trappor och ramper ska vara utformade så att personer kan förflytta sig säkert." Föreskriften anger inte ett enda stegmått.
- Boverkets vägledning (PBL kunskapsbanken): "Kravet anger inga mått, eftersom det behövs en riskanalys av det enskilda fallet."
- Hänvisar till standarder/handböcker. SIS/TS 59:2025, maj 2025, ersätter de allmänna råden. Kostar 1 250 kr, inte läst av oss.
- Paragraftabell (låst):

| Det du bygger | Måttet | Paragrafen |
| Öppning mellan plansteg | högst 100 mm | 2 kap. 6 § |
| Plan mellan dörr och trappa | ska finnas | 2 kap. 7 § |
| Räckets underkant till stegnosen | högst 50 mm | 2 kap. 11 § |
| Klätterskydd i räcket | 0,8 m av höjden | 2 kap. 11 § |
| Ledstänger | på båda sidor | 2 kap. 12 § |
| Fri höjd i trappan | minst 2,00 m | 2 kap. 25 § |

Källrad: BFS 2024:9 2 kap., hämtade 20 september 2026. Barnkraven i 11 § gäller utrymmen där yngre barn kan vistas, dit räknar Boverket varje bostad. En ledstång räcker om två är obehövligt med hänsyn till användningen.

- 7 §: plan framför dörr med nedåtgående trappa direkt innanför (källardörren), om inte obehövligt.
- Kraven gäller nya byggnader; vid ändring får de anpassas om det finns skäl.
- Stegdjup minst 0,25 m i gånglinjen = allmänt råd ur gamla BBR avsnitt 8, inte ur föreskriften. Trappa på tomt: 0,30 m. Bör ha fler än två steg. Gick att luta sig mot till 1 juli 2026.
- AFS 2023:12 (Arbetsmiljöverket), 25 § allmänt råd: stegdjup normalt minst 0,25 m, steghöjd högst 0,18 m, ledstång 0,9 m vid stegnosen. Gäller arbetsplatser, inte villan.
- Gränsen vid huskroppen: entrétrappa = del av byggnaden (föreskriften ovan); trappa i gångväg mellan entré och parkering = föreskrifterna om krav på tomter.
- 12 §: ledstänger på båda sidor, en räcker när den andra är obehövlig (mot vägg). 13 §: lätt att gripa om, löpa kontinuerligt, stöd före och efter.
- Ingen höjd i föreskriften. Svenskt Trä: ledstång 900 mm över planstegsnosen mot vägg, samma som gamla rådet. Christian sätter den höjden.
- 6 §: öppning mellan plansteg högst 100 mm. 11 §: vertikala öppningar i räcket högst 100 mm; räckets underkant till stegnos högst 50 mm.

## Innetrappan och bjälklaget

- Fri höjd 2,00 m mellan stegyta och det ovanför, hela vägen.
- Exempel (låsta tal): våningshöjd 2 700 mm, bjälklag 300 mm, steghöjd 169 mm, stegdjup 292 mm. Taket i nedre rummet 2 400 mm över golvet. 400 mm stigning innan fria höjden är slut, avklarad 693 mm in i trappan. Hålet i bjälklaget 3,7 m långt, räknat av oss.
- Bredd: TMF:s handledning för trätrappor anger 900 mm fri bredd i enfamiljshus. Samma mått på trappor Christian byggt. Smal trappa går aldrig att bredda, lång kan brytas med vilplan.
- `<Varning rubrik=...>` om ingrepp i stommen: Boverket listar mellanbjälklaget bland bärande delar i småhus. Kapa bjälkar = anmälan till byggnadsnämnden när bärande delar påverkas väsentligt, invänta startbesked. Plan- och byggförordningen 6 kap. 1 §. Boverket rekommenderar konstruktör. Växel = tvärbalk som tar lasten. Fel märks när golvet ovanför fjädrar.
- Länk `/golv/renovera-trappa/` (nya steg eller räcke på befintlig trappa).

## Utetrappan

- Två alternativ: gjutna plintar, eller dränerad avjämnad mark med betongplattor där lasten är störst.
- Plintar: Svenskt Trä anger hål 500 till 700 mm om marken är stadig, annars frostfritt djup. Talen per landsdel står i `/altan/bygga-altan/`. Tjälen lyfter ojämnt, trappan stannar skev.
- Bygglov: normalt inte för entrétrappa. Boverket: varken bygglov eller anmälan för fasadändring, bygglovsreformen 1 december 2025. Inom detaljplan kan kommunen ha egna bestämmelser; närmare tomtgräns än 4,5 m kan utökad lovplikt gälla. Ring byggnadsnämnden.
- `<Illustration namn="golv/trappa-utetrappa">`: genomskärning, tre plansteg lutar utåt, plint till frostfritt djup avbruten i bild, stegdjup 300 mm, fall 1 på 50. Alt ska under 125 tecken; bildtext: plinten går ner till frostfritt djup, fallet läggs vid montering.
- Virke (Svenskt Trä): markkontakt, svårbytta delar och personsäkerhetskritiska delar i NTR A; övriga ovan mark NTR AB. Bärande i lägst C14. Beslag, spik, skruv, bult rostfria eller varmförzinkade. Blandade metaller → svarta ränder, förklaras i `/altan/trallskruv/`.
- Fall på planstegen cirka 1:50 (två centimeter på en meter), läggs vid montering, inte efteråt. Annars is i februari.
- Ytbehandling: alkydfärg täckt men hal vid fukt/frost; olja eller lasyr behåller strukturen; halkstopp finns att blanda i. Måla inte över 16 procent fuktkvot (Svenskt Trä), gäller även impregnerat. Sågat virke billigaste halkgreppet.
- Nedersta steget: i Svenskt Träs låga yttertrappa blir första steget 123 mm när övriga är 145, på grund av stegens tjocklek. Rita hela trappan i snitt med golvbeläggning inritad.

## Vangstycke eller stödkonsol

- Infällda steg: spår per steg i vangstyckets insida, trångt, döljs av stegnosen. Snyggast och starkast. Kräver millimeterprecision och handöverfräs mot fastspänd ribba.
- Stödkonsoler 34 × 45 mm skruvlimmas på insidan; planstegen vilar på dem, skruvas uppifrån/utifrån. Svenskt Träs lösning för höga yttertrappan. Går att rätta.
- Första trappan: ta konsolerna. Utomhus gängstång 10 mm tvärs igenom med brickor och muttrar; lim ensamt klarar inte 20 år.

## Fyra fel som inte går att rätta

1. Steg med olika höjd, oftast nedersta (golvtjocklek räknad i ena änden).
2. Trapphål ritat efter trappan i stället för tvärtom (fria höjden tar slut).
3. Fundament på lös återfyllning (sjunker första året).
4. Utetrappa utan fall.

Provmontering: kapa vangstyckena, lägg upp, skruva fast två tre lösa steg, gå tio gånger innan lim.

## Behover (verktyg och material, varfor får skrivas om)

Verktyg: måttband 5 m (mät i ett drag), vattenpass minst 1,2 m, smygvinkel, anslagsvinkel och vass penna (1 mm per steg × 15 = 1 cm), cirkelsåg eller kap- och gersåg, handöverfräs eller stämjärn och klubba, limknektar minst två per steg (Svenskt Trä anger två per plansteg), spade och spett eller jordborr.

Material: vangstycken 45 mm (Svenskt Trä 45 × 195 till 220 mm till hög yttertrappa, NTR A), plansteg två bitar 45 × 145 per steg med 10 mm springa = 300 mm, stödkonsoler 34 × 45, gängstång 10 mm, betongplintar eller pappform 150 mm diameter på bottenplatta, skruv/beslag rostfritt eller varmförzinkat, syllisolering av grundpapp, ledstång och räckesspjälor 28 till 34 × 45 till 70 mm, öppning aldrig över 100 mm.

## Interna länkar (måste finnas kvar)

- `/altan/bygga-altan/` (frostdjupstalen)
- `/altan/trallskruv/` (svarta ränder)
- `/golv/renovera-trappa/`

## Mätvärden till title/description

seoTitle 40 till 55 tecken, "Bygga trappa" först, inne och ute ska synas. Description 120 till 155: formeln, antal steg ur våningshöjden, inne mot ute. H1 skild från title, ingen fråga, inget kolon. Sidofraser: trappformeln (H2 + brödtext), steghöjd och stegdjup (brödtext), utetrappa/trappa utomhus (H2), innertrappa/trappan inomhus (H2), våningshöjd (första skärmen och exemplet).
