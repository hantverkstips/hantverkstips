# Spec: vindens fuktvägar, med nattutstrålning och rimfrost

UX och bygge, 2026-09-30. Krav i `docs/briefer/seo-checklista-2026-09-30/fukt-pa-vinden.md` punkt 8, huvudbild för `/fukt/fukt-pa-vinden/`. Källorna är `faktablad/guider-fukt-pa-vinden.md` och `faktablad/fukt-gemensamma-tal.md` avsnitt 13.2.

**Status: specad, ritas inte ännu.** Illustratören börjar när hantverkarens rapport finns, med `bildAlt`, `bildtext` och etiketterna ordagrant.

## 1. Vad bilden ska säga

Fukten på en kallvind kommer oftast inifrån: fuktig inneluft läcker upp genom bjälklaget och vindsluckan. Så säger Boverket och Tobin och Samuelson i faktabladet, rad 206 och 294. En klar natt strålar råsponten ut värme mot himlen och blir kallare än luften, och då fäller fukten ut som rimfrost på undersidan. Det står hos TräGuiden och Boverket (rad 135, GT K2). Uteluften som kommer in vid takfoten och går ut vid nocken torkar inte bort det.

**Inneluftens väg upp genom vindsluckan är den enda saken i penna.** Uteluften och utstrålningen ritas i blyerts-2.

**Nyckeltal:** inget. Hantverkaren kan välja ett ur GT K8, till exempel "79–88 % RF oktober till februari". Då får det tumstock.

## 2. Skillnad mot sajtens andra vindbilder

`el/vind-takfot` visar två takfötter i närbild. `el/vind-bjalklag` och `tak/takfot-snitt` är snitt genom en detalj. Den här bilden ska vara **hela vinden sedd från gaveln**: en triangel med takstolen, hela bjälklaget och himlen ovanför. Ingen takfot i närbild, och ingen isolering ritad som skikt.

## 3. Motivet (600 × 360)

- **Vinden.** Taket är en triangel, med nock i x 300, y 60 och takfötter i x 70 och x 530, y 230. Råsponten ritas som en dubbellinje innanför yttertaket. Bjälklaget är en tjock horisontell linje vid y 250.
- **Rummet under.** Rummet under bjälklaget syns från y 250 till y 340, utan möbler.
- **Vindsluckan.** Luckan sitter i bjälklaget, cirka x 250–300. Genom den går inneluften i **penna** 2,5 som två vågiga pilar upp mot råsponten. En tredje, kortare pil går upp vid en genomföring, ett rör genom bjälklaget.
- **Uteluften.** Korta raka pilar in vid båda takfötterna och ut vid nocken, i blyerts-2 1,5.
- **Utstrålningen.** Himlen är två stjärnor och en båge ovanför taket. Två vågiga pilar går från yttertaket upp mot himlen, i blyerts-2 1,5.
- **Rimfrosten.** Korta taggiga streck (små kors) på råspontens undersida mitt emot pennpilarna, i blyerts.

## 4. Handskriften

Caveat 500, 24 px, högst 60 tecken. Orden tas ur hantverkarens kommentar:

| Nr | Säger | Färg | Placering |
|---|---|---|---|
| T1 | fuktig inneluft | penna | vid pilarna under luckan |
| T2 | rimfrost | blyerts | vid korsen under råsponten |
| T3 | klar natt | blyerts-2 | vid himlen |
| T4 | uteluft | blyerts-2 | vid pilen vid en av takfötterna |

## 5. Filer, budget och kontroller

- Källa: `src/assets/illustrationer-kallor/fukt/vind-fuktvagar.svg`, under 12 288 byte.
- Publicerad fil: `src/assets/illustrationer/fukt/vind-fuktvagar.svg`, under 30 720 byte, utan `<text>`.
- Rendera på 343 och 1200 px och kontrollera:
  - att det på 343 px syns att fukten kommer underifrån genom luckan
  - att rimfrosten sitter under råsponten
  - att bilden inte kan förväxlas med takfotsbilderna
- `aria-label` är hantverkarens `bildAlt`, med "vinden".

## 6. Godkännande

Ej ritad.
