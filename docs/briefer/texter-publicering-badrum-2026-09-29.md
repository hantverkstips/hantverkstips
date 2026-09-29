# Texter till publiceringen av badrum, 2026-09-29

Hantverkaren har skrivit texterna. De läggs in ordagrant i publiceringscommiten enligt "Publicering badrum och kök" i `docs/briefer/seo-checklista-2026-09-29/badrum.md`.

## Registerposten för badrum-kostnad (`src/lib/kalkyl/register.ts`, steg 1)

```ts
namn: 'Vad kostar det att renovera badrummet?',
rad: 'Skriv in golvytan och hur påkostat det ska bli, så får du priset post för post, med arbete och material för sig, och vad du betalar efter rotavdraget.',
```

`namn` är inte samma som någon title eller H1 på sajten, vilket är kontrollerat med en sökning i `src`. `rad` har 150 tecken.

## Meningen på `/fukt/luftfuktighet-inomhus/` (rad 155, steg 5)

Meningen läggs direkt efter "… och det är frånluftens jobb att ta topparna.", i samma stycke:

```md
Hinner den inte, blir fukten kvar och ger [mögel på fogarna i badrummet](/badrum/fogar-badrum/).
```

Den ersätter korrekturens förslag "Det är fukten som blir kvar efter duschen som ger …", eftersom läsaren hörde två "det är" i rad och saknade kopplingen till frånluften. Ankaret är detsamma.

## Förslag till ny description på `/badrum/byta-toalettstol/` (SEO godkänner)

Följer kortsvaret, 153 tecken:

```
Du får byta toalettstolen själv, men försäkringen vill se ett intyg som bara en VVS-firma kan skriva. Se vad firman gör, vad den tar och hur sitsen byts.
```
