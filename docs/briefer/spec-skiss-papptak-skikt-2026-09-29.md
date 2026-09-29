# Spec: papptakets skikt i genomskärning, med skarven och spiken

UX och bygge, 2026-09-29. Beställd av koordinatorn som huvudbild för `src/content/kunskap/tak/papptak.mdx` (utkast), där platshållaren väntar på `tak/papptak-skikt`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak-4.md` rad 359 och 391 ("råspont, underlagspapp, ytpapp med överlapp och spikrad ... Mått i bildtexten"). Faktabladet är `docs/briefer/faktablad/kunskap-papptak.md` rad 57–63; sidans steg står på rad 109–119.

Handen och papperet som i `src/assets/illustrationer-kallor/tak/takfot-snitt.svg`. Läs `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3, 5, 7 och 8; allt som inte står här gäller som där.

## 1. Vad bilden ska säga

Ytpappen ligger i våder på underlagspapp och råspont, och varje skarv spikas där nästa våd täcker den, så att inget spikhuvud syns. Taket lutar lite, minst 3 grader. Skarven med spiken i penna är den enda saken som pekar.

Källorna: BMI TopSafe 3°, faktabladet rad 59 ("Skarvarna sicksackspikas med 6 cm avstånd"; klisterkant 10 cm; "aldrig finnas några synliga spikhuvuden"), rad 62 (första våden "ska nå ned till fotplåtens nedvikning"), sidans steg 1–5 (råspont minst 23 mm, underlagspapp, fotplåt, våderna tvärs över takfallet) och sidans tabell (minsta lutning 3°, BMI och Mataki). **Nyckeltalet är minst 3°**, och det får gul markering en gång.

## 2. Beslut

- Snittet går längs takfallet, från nocken till vänster ner till takfoten till höger. Då syns våderna som band som överlappar, och skarvarna längs våderna syns i snitt.
- **Lutningen ritas i verklig vinkel, 3°**, eftersom skikten redan är förstorade och en brantare linje skulle säga att taket lutar mer än det behöver. 3° över 496 enheter är 26 enheter.
- Ordningen följer BMI, som sidans steg: underlagspapp, sedan fotplåt ovanpå, sedan ytpappen. Matakis omvända ordning står på sidan och ritas inte.
- Överlappets bredd får ingen bygel. BMI anger klisterkantens bredd, men faktabladet säger inte att överlappet är lika brett; 10 cm står därför bara i bildtexten som klisterkantens bredd.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/papptak-skikt.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/papptak-skikt.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer, inte heller sidan.

## 4. Motivet, koordinater

**Inte skalenligt** i tjocklek; lutningen är sann. Koordinaterna är en startpunkt; flytta högst 8 enheter om en etikett kräver det.

Linjen `S(x) = 200 + 0,0524 × (x − 44)` är råspontens undersida (y 200 vid x 44, y 226 vid x 540). Allt ritas parallellt med den.

| Del | Form och läge | Stil |
|---|---|---|
| Råspont | band 24 tjockt ovanpå S(x), x 44–540, avslutat lodrätt vid x 540. Brädornas skarvar som korta sneda spontmarkeringar genom bandet var 96:e enhet | blyerts 2 |
| Underlagspapp | tunt band 4 ovanpå råsponten, x 44–544 | blyerts 2 |
| Fotplåt | ligger på underlagspappen från x 468 ut till x 548, viks ner över råspontens ände till y 262 med en liten utåtknäck nederst | blyerts 2 |
| Ytpapp, våd 1 (nederst) | band 6 ovanpå underlagspappen och fotplåten, från fotplåtens nedvikning vid x 548 upp till övre kanten vid x 330 | blyerts 2 |
| Ytpapp, våd 2 | band 6, nedre kant vid x 382, ligger ovanpå våd 1 mellan x 330 och x 382 och på underlagspappen därifrån, upp till x 112 | blyerts 2 |
| Ytpapp, våd 3 | band 6, nedre kant vid x 164, ligger ovanpå våd 2 mellan x 112 och x 164, fortsätter ut ur bilden till vänster | blyerts 2 |
| Spik | två pappspikar i varje skarv, lodräta genom den undre vådens övre kant, underlagspappen och ner i råsponten: vid x 344 och x 366, och vid x 126 och x 148. Huvudet ligger under den övre våden, skaftet 30 långt | blyerts 2 |
| Hjälplinje för lutningen | vågrät, streckad (6 och 5), från (540, 226) åt vänster till (120, 226), under råsponten, så att en kil öppnar sig mot vänster | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar.** En öppen ring i penna 2,5, som när man ringar in för hand, kring den högra skarven x 322–390, från våd 2:s ovansida till spikarnas spetsar i råsponten. Den vänstra skarven ritas likadant men ringas inte in.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px, raka. **Högst 56 tecken etikettext**, orden är sidans egna.

| Nr | Text | Färg | Placering |
|---|---|---|---|
| T1 | ytpapp | blyerts-2 | ovanför taket, cirka (220, 150), ledare till våd 2 vid (240, 206) |
| T2 | underlagspapp | blyerts-2 | ovanför taket till vänster, cirka (60, 120), ledare till underlagspappen vid (90, 199) |
| T3 | råspont | blyerts-2 | under taket, cirka (300, 290), ledare till råsponten vid (300, 205) |
| T4 | fotplåt | blyerts-2 | nere till höger, cirka (480, 300), ledare till nedvikningen vid (546, 250) |
| T5 | spik i skarven | penna | ovanför taket till höger, cirka (400, 130), ledare i penna 1,25 till ringen |
| V1 | minst 3° | blyerts på tumstock | under kilen till vänster, cirka (130, 270), ledare till kilens öppning vid (150, 214) |

Tecken: 6 + 13 + 7 + 7 + 14 + 8 = 55. Tumstock `#e8b830` 65 procent bakom V1, roterad 1 till 2 grader; ingen annan markering. T3:s ledare får inte gå genom kilen på ett sätt som gör att den läses som lutningens mått; korsar den hjälplinjen, låt den korsa rakt. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `aria-label` och `bildAlt`: "Ett papptak i genomskärning, med råspont, underlagspapp och våder av ytpapp som spikas i skarven där nästa våd täcker."
- `bildtext`: "Underlagspappen ligger på råsponten, och ytpappen läggs i våder tvärs över takfallet, med den första nere vid fotplåten. Skarven längs våden spikas i sicksack med 6 centimeter mellan spikarna, och klisterkanten är 10 centimeter bred. På det färdiga taket syns inget spikhuvud. Taket ska luta minst 3 grader, och råsponten ska vara minst 23 millimeter. Skikten är förstorade, men lutningen är ritad i verklig vinkel. Källa: BMI, Icopal TopSafe 3°, monteringsanvisning 2022."

Hantverkaren har inte lämnat ordagrann alt eller bildtext för den här bilden; texterna är byggda av sidans egna meningar.

## 7. Budget och kontroller

Publicerad fil **under 28 kB, 28 672 byte**. Källan under 10 kB. Kontrollerna som i `spec-skiss-takfot-snitt-2026-09-29.md` avsnitt 7, med `tak/papptak-skikt`. Vid granskningen på 343 px: går de tre skikten att skilja åt, syns det att spiken sitter under nästa våd, syns lutningen som en kil och inte som ett ritfel.

## 8. Tillstånd

Som takfotsspecen avsnitt 8.

## 9. Godkännande

Godkänd av UX och bygge 2026-09-29, publicerad fil 20 407 byte. Godkända avvikelser: underlagspappen 6 och våderna 8 tjocka, så att skikten skiljs åt på 343 px; ledarna till T1 och T2 slutar i sina skikt ovanför råsponten; våd 1 slutar rakt ovanpå plåtens nedvikning; spontmarkeringen vid x 380 struken, eftersom den lästes som en tredje spik. Inlagd i `papptak.mdx` med alt och bildtext enligt avsnitt 6.
