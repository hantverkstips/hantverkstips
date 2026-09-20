# Faktablad: guider/altan/bygga-altan

Ur den publicerade sidan 2026-09-20, före omskrivningen. Talen och källorna nedan är det som ska stå kvar i den nya texten. Frontmatterfält jag inte rör: slug, pelare altan, niva mellan, typ projektguide, publicerad 2026-09-15, behover (verktyg och material), kallor, utkast.

## Konstruktionen

- Fyra lager: plintar i marken, bärlinor på plintarna, reglar tvärs bärlinorna, trall ovanpå reglarna.
- Bärlina = grov balk på en rad plintar. Regel = klenare bjälke som trallen skruvas i.
- Varje lager rättar sig efter det under. Plint kan flyttas samma dag den göts; fel i skruvat golv är permanent.

## Bygglov (hänvisning, källa Boverket och bygglovssidan)

- Två mått: golvets höjd över marken och avståndet från huset.
- Inom detaljplan: lovfri upp till 1,8 m höjd inom 3,6 m från en byggnad. Längre bort: 1,2 m.
- Närmare tomtgräns än 4,5 m: Boverket vill ha grannens skriftliga ja.
- Höjden mäts på altanens yttersida, från marken till golvets ovansida. Sluttande tomt: yttre hörnet räknas.
- Byggsanktionsavgift för olovlig altan på 20 kvm: över 20 000 kr (bygglovssidan säger 20 720 kr), tas ut även av den som inte visste.
- Komponent: `<Verktygskort kalkylator="bygglov-altan" />`.
- Länk: /altan/bygglov-altan/ (tak över altanen, prickad mark står där).

## Utsättning

- Pinne i varje hörn, murarsnöre emellan. Snöret är ytterkanten och mätreferensen.
- Räta hörn: mät diagonalerna, lika långa = räta hörn. Flytta pinne i sidled tills lika.
- Trallens riktning bestämmer stommen: reglar tvärs brädorna, bärlinor tvärs reglarna, plintrader parallellt med trallen.
- Höjdsnöre i golvets ovansida (från tröskeln vid altandörr). Dra av trallens tjocklek och regelns höjd = bärlinans ovansida.

## Plintar

- Plint = betongkloss som för tyngden till fast mark. Färdig med stolpsko, eller gjuten i pappform.
- Tjäldjup: cirka 1,1 m i Skåne till 2,5 m i övre Norrland, enligt TräGuiden (kunskapssajt driven av Svenskt Trä).
- Altan lättare än hus, kräver sällan fullt tjäldjup. Kravet som alltid gäller: fast botten, dränerande material (makadam eller grus) under plinten.
- Provhål med spade innan plintar beställs.
- Lera eller mark som satt sig: markskruv, skruvas ner med förlängningsskaft, justerbar i höjd efteråt.
- Trappan har eget fundament; tjällyft på ena sidan ger skev trappa. Länk: /golv/bygga-trappa/.
- Lågt däck på mark eller plattor är ett annat bygge. Länk: /altan/tradack-pa-mark/.
- Varning: TräGuidens principlösning för altanbjälklag räknar egentyngd cirka 0,60 kN per kvadratmeter och säger att bärförmåga och stabilisering ska dimensioneras av konstruktör. Gäller på allvar vid rum under, tak över eller golv flera meter upp.

## Stommen

- c 600 mm = 600 mm från mitten på en regel till mitten på nästa. cc och s i tabeller betyder samma sak.
- Regel 45 × 145 mm på c 600 mm spänner 2,3 m fritt mellan två bärlinor, enligt Lathunden (Svenskt Träs hjälpreda för byggare). Längre: grövre dimension eller en bärlinrad till.
- TräGuidens principlösning för altanbjälklag utgår från bjälke minst 45 × 170 mm på c 600 mm.
- Plintavståndet beror på bärlinans dimension och på hur långt reglarna ovanpå spänner. Två altaner med samma bärlina får olika många plintar om den ena är djupare.
- Bärlina 45 × 170 mm under reglar som spänner 3,6 m: Lathunden ger 1,47 m mellan plintarna. "Två och en halv meter som står på halva internet" förutsätter bärlina 45 × 220 mm och bara under de kortaste reglarna.
- Länk: /altan/reglar-avstand-och-dimensioner/ (båda tabellerna).
- Komponent: `<Kalkylator namn="altan" />` efter att spännvidd och dimension förklarats. Räknaren ger antal reglar, bärlinor, plintar, löpmeter virke, trallbrädor och skruv. Antar att bärlinan har samma dimension som reglarna; grövre bärlina tål längre plintavstånd, så räknarens plintantal är lika eller fler, aldrig färre.
- Reglar fästs i bärlinan med vinkelbeslag och ankarskruv, eller snedskruvas med två skruv per infästning. Beslag varmförzinkade eller rostfria. Beslaget får sin egen ankarskruv, inte trallskruv: rostfritt i varmförzinkat äter zinken i fukt. Länk: /altan/trallskruv/.
- Tryckimpregnerat: NTR A för virke mot mark eller svårt att byta (stolpar, bärlinor). NTR AB för virke fritt ovan mark (trallen). Källa Svenskt Trä.

## Fallet

- Svenskt Trä: cirka 1:100, en centimeter per meter, bort från huset. 4 m djup altan: ytterkant 4 cm lägre.
- Läggs när bärlinorna sätts: yttre bärlinan lägre än den inre. Hyvla reglar eller kila under trall efteråt blir aldrig jämnt.
- Rörelsefog 6 mm mot husvägg, grund och varje stolpe, enligt Svenskt Trä. Virket sväller vid regn.
- Illustration `altan/bygga-altan-fall`: genomskärning från husväggen och utåt, trall med springor lutar bort från huset, regel på två bärlinor (inre, yttre lägre), mått 6 mm rörelsefog mot väggen, gulmarkerat "en centimeter fall per meter", anteckning "fallet ligger i reglarna, inte i trallen", röd pil, två droppar över ytterkanten.

## Trallen

Tabell 1 (kolumnordning orörd):

| Tjocklek, mm | Största c-mått, mm | Skruvlängd, mm |
|---|---|---|
| 22 | 400 | 45 |
| 26 | 450 | 55 |
| 28 | 600 | 55 |
| 34 | 800 | 75 |

Källa: TräGuiden, läggning av trall, hämtad 19 september 2026. Måttet 26 mm gäller värmebehandlad trall.

- `<Markering>28 mm trall</Markering>` är hyllvaran. 22 mm tar reglarna ner till c 400 mm: hälften mer regelvirke, hälften fler reglar att kapa.
- Springa styrs av brädbredd (Svenskt Trä, minsta kant-till-kant-avstånd):

| Brädans bredd, mm | Springa, mm |
|---|---|
| 95 | 5 |
| 120 | 6 |
| 145 | 7 |

Källa: TräGuiden, samma sida. Talen gäller tryckimpregnerad furu i träskyddsklass NTR A eller NTR AB.

- Måtten gäller vid montering, brädan fuktig från impregneringen; springan krymper när virket torkar. Kant i kant ger bucklande golv första hösten. Två distansbitar.
- Skruv minst 4,2 mm ytterdiameter. 28 mm trall: 55 mm lång. Bräda 95 mm eller bredare: två skruv per regel, 30 mm från vardera kanten. Förborra 3 till 3,5 mm nära brädändar.
- Länk: /altan/trallskruv/ (stål, svarta ränder). Kortversion: rostfritt A4 för tryckimpregnerad altan.

## Första brädan och skarvar

- Första brädan efter snöre, inte efter fasaden (fasaden är sällan rak, felet vandrar ut som kil).
- Kontrollera var fjärde bräda mot mått från snöret. 2 mm fel per bräda = 6 cm på bräda trettio.
- Skarvar mitt över regel, varsin skruv i de två brädändarna, förskjutna mellan raderna. Skarv i luften sviktar och spricker efter en vinter.
- Fogsprång (bräda högre än grannen) högst 3 mm enligt Svenskt Trä. Sortera högen först.
- Fris = ram av brädor runt kanten, tvärs de andra. Döljer ändträet (suger vatten snabbast). Kräver extra regel under skarven, på plats innan trallen läggs.

## Felen

1. Golv lagt vågrätt. Svenskt Trä anger cirka 1:100; utan fall blir springan en ränna.
2. Brädor kant i kant. Buktar första hösten.
3. En skruv per korsning på bred bräda. TräGuiden: två från 95 mm.
4. Förzinkad skruv i tryckimpregnerat. TräGuiden: rostfritt A2 eller A4, eller härdat stål i korrosivitetsklass C4. Svart rand runt varje huvud.
5. Skarvar i luften mellan reglar.
6. Plintar på matjord. Vatten fryser, lyfter, går inte tillbaka.

## Interna länkar (alla ska finnas kvar)

- /altan/bygglov-altan/ (bygglovsavsnittet)
- /altan/tradack-pa-mark/ (plintavsnittet)
- /altan/reglar-avstand-och-dimensioner/ (stomavsnittet)
- /altan/trallskruv/ (två ställen: beslag och trall)
- /golv/bygga-trappa/ (trappan)

## Komponenter

- `<Verktygskort kalkylator="bygglov-altan" />`
- `<Varning rubrik="...">` om hög altan
- `<Kalkylator namn="altan" />`
- `<Illustration namn="altan/bygga-altan-fall" alt="..." bildtext="..." />`
- `<Markering>28 mm trall</Markering>`
- Ingen Faq.
