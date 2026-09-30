# Spec: avfuktaren upphängd på kallvinden

UX och bygge, 2026-09-30. Rekommenderad bild i `docs/briefer/seo-checklista-2026-09-30/avfuktare-vind.md` punkt 8, huvudbild för `/fukt/avfuktare-vind/`. Underlaget är `docs/briefer/affiliate-avfuktare-vind-2026-10.md` rad 15 och 26: Fresh D-800 får hängas på vägg eller tak, och våtluftskanalen får vara högst 0,6 m, så maskinen måste sitta intill gavelns ventil.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport finns, med `bildAlt`, `bildtext` och etiketterna ordagrant.

## 1. Vad bilden ska säga

En sorptionsavfuktare hänger på gavelväggen på kallvinden, intill gavelventilen. Torrluften går ut i vinden. Våtluftsslangen är kort och går rakt ut genom gaveln. **Våtluftsslangen med måttet är den enda saken i penna.**

**Nyckeltal:** 0,6 m, den längsta våtluftskanalen tillverkaren tillåter (affiliate-underlaget, Fresh), med gul markering.

Maskinen ritas som en rektangel med två stosar, inte som en produktbild. Den får inget märke.

## 2. Motivet (600 × 360), vinden från sidan med gaveln till höger

- **Taket och vinden.** Taket sluttar från vänster upp mot gaveln. Gaveln är en lodrät vägg vid x 480–500, y 60–300, och bjälklaget en horisontell linje vid y 300.
- **Gavelventilen.** En liten galler-rektangel i gaveln, cirka y 110–140.
- **Maskinen.** En rektangel, 90 × 60, upphängd på gaveln med två korta beslag till vänster om ventilen, cirka x 360–450, y 150–210.
- **Torrluften.** Två raka pilar i blyerts-2 1,5 från maskinens vänstra sida ut i vinden.
- **Våtluftsslangen, i penna 2,5.** Från maskinens ovansida upp till ventilen, kort och lätt böjd. Bredvid den står en måttbygel i blyerts-2 1,5 med V1.

## 3. Handskriften

Caveat 500, 24 px, högst 55 tecken. Orden tas ur hantverkarens kommentar:

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| V1 | högst 0,6 m | blyerts på tumstock | vid måttbygeln |
| T1 | våtluft ut genom gaveln | penna | utanför gaveln, till höger |
| T2 | torr luft | blyerts-2 | vid torrluftspilarna |
| T3 | sorptionsavfuktare | blyerts | under maskinen |

## 4. Filer, budget och kontroller

- Källa: `src/assets/illustrationer-kallor/fukt/avfuktare-vind.svg`, under 10 240 byte.
- Publicerad fil: `src/assets/illustrationer/fukt/avfuktare-vind.svg`, under 28 672 byte, utan `<text>`.
- Rendera på 343 och 1200 px. På 343 px ska två saker synas:
  - att maskinen hänger vid gaveln
  - att slangen är kort och går ut genom ventilen
- `aria-label` är hantverkarens `bildAlt`, med "avfuktare" och "vinden".

## 5. Godkännande

Ej ritad.
