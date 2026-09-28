# Spec: skiss av takstolarna, sadeltak och pulpettak

UX och bygge, 2026-09-29. Beställd av koordinatorn för `src/content/kunskap/tak/takstolar.mdx` (utkast), där kommentaren på rad 68 väntar på `tak/takstol`. Checklistan är `docs/briefer/seo-checklista-2026-09-29/tak.md` rad 416 och 451, faktabladet `docs/briefer/faktablad/kunskap-takstolar.md` rad 12, 74 och 150–171. Måttens definitioner är desamma som i räknaren takbyte, `src/lib/kalkyl/tak.ts` rad 35 och 174, så att skissen och räknaren säger samma sak. Allt som inte står här gäller som i `docs/briefer/spec-skiss-fogar-badrum-2026-09-28.md` avsnitt 3 (ram, papper, tokens), 4 (darr, hörn), 5 (handskrift och ledare), 7 (kontroller) och 8 (tillstånd); läs den först.

## 1. Vad bilden ska säga

Överst: vilka mått fabriken och räknaren pratar om på en vanlig takstol till ett sadeltak. Nederst: att en pulpettakstol är låg, ungefär en femtondel av spännvidden. Den låga höjden är den enda saken som pekar, och talet får gul markering. Inga tal på sadeltakstolen: måtten är ord, eftersom läsaren ska mäta sina egna.

Definitionerna som ritas:

| Mått | Så ritas det | Källa |
|---|---|---|
| Spännvidd | mellan väggarnas utsidor | XL-Bygg, "Spännvidd avser mått utsida vägg" (faktabladet rad 150); sidan rad 92 |
| Tass | vågrätt från väggens utsida till överramens yttersta ände | Takstolsfabrikens beräkningssida, tasslängd (faktabladet rad 74); sidan rad 92 |
| Nockhöjd | lodrätt från överramen vid väggens utsida till nocken | `tak.ts` rad 35, "nockhöjd över takfoten vid fasadlivet" |
| Takfallslängd | längs överramen från tassens ände till nocken | `tak.ts` rad 174, (B/2 + utsprång)/cos |
| Lutning | vinkeln mellan överramen och vågrätt | sidan rad 86 |
| Konstruktionshöjd, pulpet | takstolens egen höjd från underkant till överkant | TräGuiden, "cirka 1/15 av spännvidden" (faktabladet rad 166); sidan rad 136 |

## 2. Beslut: staplade, inte sida vid sida, och pulpetstolen i rätt proportion

Kommentaren och koordinatorn säger sadeltak till vänster och pulpet till höger. På 600 enheters bredd blir då varje takstol under 300 enheter bred, och pulpetstolens höjd på en femtondel av det blir 10 enheter, sex pixlar på mobilen. Därför staplas de: sadeltakstolen överst i hela bredden, pulpetstolen nederst i hela bredden. Den läses i samma ordning som sidan, där pulpettaket kommer sist.

Pulpetstolen ritas med parallella över- och underramar som båda lutar, och höjden hålls på 1/15 av spännvidden inom 10 procent. Det är bildens poäng och får inte överdrivas. Skälet till parallella ramar: med vågrät underram och 10 graders lutning blir stolen i höga änden ungefär en sjättedel av spännvidden, inte en femtondel. Det är min tolkning av TräGuidens tal, och sidan säger detsamma ("höjden på själva fackverket och inte hur högt taket når", rad 136). Hittar utvecklaren en TräGuiden-figur som visar något annat: stanna och rapportera, rita inte om.

## 3. Filer

| Fil | Vad |
|---|---|
| `src/assets/illustrationer-kallor/tak/takstol.svg` | Ny källa med `<text>` |
| `src/assets/illustrationer/tak/takstol.svg` | Skrivs av `npm run illustrationer` |

Rör inga andra filer. Listan över förbjudna filer i fogspecen avsnitt 2 gäller, och dessutom allt under `src/content/`. Inbäddningen gör hantverkaren senare: `<Illustration namn="tak/takstol" alt="[ALT]" bildtext="[BILDTEXT]" />`.

## 4. Motivet, koordinater

Takstolarna ses rakt från gaveln. Virket ritas som enkla linjer i blyerts 2, en linje per del (ingen dubbellinje för virkets bredd), med små fyllda noder r 2 i blyerts där delarna möts, som spikplåtarna. Väggarna är korta stumpar, två linjer 12 enheter isär.

**Sadeltakstolen (W-takstol)**

| Del | Koordinater | Stil |
|---|---|---|
| Underram | (150,130) till (450,130) | blyerts 2 |
| Överramar | från vänster tassände (110,155) genom (150,130) till nocken (300,40), och speglat till höger tassände (490,155) | blyerts 2 |
| Diagonaler | (250,130)–(225,85), (250,130)–(300,40), (350,130)–(300,40), (350,130)–(375,85) | blyerts 2 |
| Väggar | vänster x 150–162, höger x 438–450, från y 130 ner till y 178 | blyerts 2; utsidorna är x 150 och x 450 |
| Spännvidd | bygel y 190 från x 150 till x 450, hjälplinjerna är väggarnas utsidor förlängda | blyerts-2 1,5 |
| Tass | bygel y 172 från x 110 till x 150, streckad hjälplinje lodrätt ner från tassänden | blyerts-2 1,5 |
| Nockhöjd | lodrät bygel x 520 från y 130 till y 40, streckade hjälplinjer vågrätt från nocken och från (450,130) ut till x 526 | blyerts-2 1,5 |
| Takfallslängd | bygel parallell med vänster överram, 20 enheter ovanför den, från (99,139) till (289,24), korta tvärstreck i ändarna | blyerts-2 1,5 |
| Lutning | streckad vågrät hjälplinje från tassänden (110,155) till (144,155) och en öppen båge r 28 med centrum i tassänden, från den vågräta linjen upp till överramen | blyerts-2 1,5 |

**Pulpettakstolen**

| Del | Koordinater | Stil |
|---|---|---|
| Underram | från (110,334) till (490,267), ungefär 10 grader | blyerts 2 |
| Överram | parallell, 25 enheter ovanför mätt vinkelrätt: från (114,309) till (494,242) | blyerts 2 |
| Ändstolpar och diagonaler | lodräta ändar i båda ändar, sicksack mellan ramarna med tio fack | blyerts 2 |
| Väggar | låg vägg x 110–122 från underramen ner till y 356; hög vägg x 478–490 från underramen ner till y 356 | blyerts 2 |
| Spännvidd | bygel y 350 från x 110 till x 490 | blyerts-2 1,5 |

**Snickarpennan, den enda saken som pekar:** konstruktionshöjden. En måttbygel i penna 2,5 px lodrätt vid x 96 från underramens vänstra ände (110,334) upp till överramens vänstra ände (114,309), med korta tvärstreck i båda ändarna och streckade hjälplinjer i penna 1,25 in till ramarna. Inget annat i penna utom marginallinjen och K1.

## 5. Handskriften

Caveat 500, 24 px, inget under. Ledare i blyerts-2 1,25 px.

Texten är hantverkarens. Ord som redan står på sidan eller i kommentaren anges.

| Nr | Namnger | Ord på sidan | Färg | Placering |
|---|---|---|---|---|
| S1 | takfallslängden | "takfallslängd" (kommentaren rad 68) | blyerts-2 | uppe till vänster, cirka (50,62), ovanför bygeln |
| S2 | nockhöjden | "nockhöjd" (kommentaren rad 68) | blyerts-2 | cirka (430,30), ledare till bygeln vid (520,85) |
| S3 | lutningen | "lutning" (kommentaren rad 68) | blyerts-2 | inne i huset under underramen, cirka (170,160), ledare till bågen |
| S4 | spännvidden, sadeltak | "spännvidd" (rad 92) | blyerts-2 | inne i huset ovanför bygeln, centrerad kring x 330, baslinje y 180 |
| S5 | tassen | "tass" eller "tasslängd" (rad 92) | blyerts-2 | till vänster under tassbygeln, cirka (48,196) |
| K1 | konstruktionshöjden, cirka 1/15 av spännvidden, en eller två rader | två rader: "cirka 1/15 av" / "spännvidden" (hantverkaren; sidan markerar "1/15 av spännvidden", rad 136) | blyerts på tumstock | ovanför pulpetstolens vänstra del, x 60–240, baslinjer y 236 och 262, ledare till pennans bygel |
| K2 | spännvidden, pulpet | "spännvidd" | blyerts-2 | ovanför bygeln mitt på, baslinje y 342, under underramen |

Hantverkaren 2026-09-29: S1–S4 och K2 bekräftas med orden som de står, och S5 blir "tass".

Tumstock `#e8b830` 65 procent bakom K1, roterad 1 till 2 grader. Ingen annan markering. Står etiketterna för tätt för 24 px: säg till, krymp inte.

## 6. Alt, aria-label och bildtext

- `[ALT]` (122 tecken): "Takstol till sadeltak med spännvidd, tass, nockhöjd, takfallslängd och lutning utsatta, och under den en pulpettakstol."
- `aria-label`: `[ALT]` ordagrant.
- `[BILDTEXT]`: "Överst står en fackverkstakstol till ett sadeltak och nederst en takstol till ett pulpettak. Spännvidden mäts mellan väggarnas utsidor, som XL-Bygg skriver i sina villkor, och tassen är den del som sticker ut utanför väggen. Nockhöjden räknas från takfoten vid väggens utsida och takfallslängden längs överramen från tassens ände upp till nocken, på samma sätt som i räknaren. Pulpettakstolens egen höjd är cirka 1/15 av spännvidden enligt TräGuiden."

## 7. Budget

Publicerad fil under 28 kB. Resten som fogspecen avsnitt 7, med `tak/takstol`. Vid granskningen på 343 px: känns sadeltakstolen igen som en takstol, går alla fem måtten att skilja, och syns det att pulpetstolen är låg?
