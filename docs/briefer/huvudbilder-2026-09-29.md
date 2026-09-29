# Huvudbilder till publicerade sidor utan `bild`

UX och bygge, 2026-09-29. Beställd av koordinatorn. Korten i hubbarna och listorna hämtar frontmatterns `bild` (`src/lib/kort.ts`), och utan den visar kortet det blanka bladet med pelarens ikon (DESIGN.md avsnitt 6). Artikelmallen renderar `bild` efter kortsvaret med `bildAlt` som alt och `bildtext` som figurtext (`src/components/vyer/Artikel.astro`); test- och jämförelsemallen renderar den inte alls.

(a) betyder att sidans skiss flyttas från `<Illustration>` i texten till `bild`, `bildAlt` och `bildtext`, med samma alt och bildtext ordagrant. (b) betyder en ny skiss som huvudbild, med spec. (c) betyder att `bild` sätts bara för kortet och skissen står kvar i texten.

| Sida | Beslut | Skäl |
|---|---|---|
| `guider/badrum/fogar-badrum.mdx` | (a) `badrum/fogar-badrum-snitt` | Snittet står under första H2 och visar guidens kärna, att kniven stannar före tätskiktet. Alt 114 tecken |
| `kunskap/badrum/tatskikt-badrum.mdx` | (a) `badrum/vatzoner` | Våtzonerna är sidans fråga ("var våtzonerna går" i description). Avsnittet om golvet behåller tabellen. Alt 119 |
| `kunskap/badrum/vatrumsfarg.mdx` | (a) `badrum/vatzoner-vatrumsfarg` | Stod redan före första H2 och svarar på var VT och VA gäller. Alt 105 |
| `kunskap/badrum/byta-toalettstol.mdx` | (a) `badrum/toalettstol-fot` | Foten på tätskiktet är skälet till att bytet räknas som våtrumsarbete (rad 79), som kortsvaret handlar om. Alt 119 |
| `guider/kok/mala-koksluckor.mdx` | (a) `kok/mala-koksluckor-ordning` | Arbetsordningen är guiden. Alt 104 |
| `guider/kok/byta-koksluckor.mdx` | (a) `kok/byta-koksluckor-matt` | Måtten är det första jobbet och det som oftast blir fel. Stegen under "Mät luckan" läses nu mot bilden högre upp, som i dreva-fonster. Alt 115 |
| `guider/tak/hangrannor.mdx` | (a) `tak/hangranna-takfot` | Stod redan före första H2 och visar fallet mot stupröret. Alt 107 |
| `kunskap/tak/plattak.mdx` | (b) ny `tak/plattak-profiler` | Snittet visar läkt och papp och svarar inte på rubrikens fråga om vilken plåt som passar. Det hör hemma i sitt avsnitt, och det väger 39,7 kB, för mycket för en bild som laddas med hög prioritet ovanför vecket. Spec: `spec-skiss-plattak-profiler-2026-09-29.md` |
| `kunskap/tak/takstolar.mdx` | (a) `tak/takstol` | Stod redan före första H2, måtten fabriken frågar efter. Alt 119 |
| `kunskap/tak/snorasskydd.mdx` | (a) `tak/snorasskydd-entre` | Stod redan före första H2 och bär sidans råd, skyddet längs hela takfoten. Alt 93 |
| `guider/fasad/mala-om-huset.mdx` | (b) ny `fasad/mala-om-huset-forarbete` | Ingen skiss finns. Priset hänger på förarbetet, så bilden visar de tre nivåerna med priset under. Spec: `spec-skiss-mala-om-huset-forarbete-2026-09-29.md` |
| `kunskap/fukt/luftfuktighet-inomhus.mdx` | (b) ny `fukt/luftfuktighet-rum` | Sidan har diagrammet `fukt/daggpunkt`, men det hör till räknaren i sitt avsnitt och säger inget om rummen. Mallen `hus-rf-per-rum` väntar på egen mätning och rörs inte. Den nya bilden bygger på tabellens källor och kortsvarets kalla vägg. Spec: `spec-skiss-luftfuktighet-rum-2026-09-29.md` |
| `tester/luftavfuktare/acetec-evodry-6h-2.mdx` | (c) `fukt/evodry-6h-installation` | Sidan har en skiss i texten; kortet visade ändå det blanka bladet, eftersom `bild` saknades. Produktbilden får aldrig bli kortets bild (DESIGN.md 6). Testmallen renderar inte `bild`, så skissen syns en gång |
| `tester/luftavfuktare/woods-sw39fw.mdx` | (c) `fukt/sw39fw-kapacitet` | Som ovan. Staplarna 19 mot 5,7 liter är sidans poäng |
| `jamforelser/luftavfuktare/woods-sw39fw-vs-acetec-evodry-6h-2.mdx` | (c) `fukt/sw39fw-vs-evodry-kapacitet` | Som ovan |

Regeln för (c) står sedan i dag i DESIGN.md avsnitt 6 (Artikelkort, Tester och jämförelser) och ARKITEKTUR.md (Illustrationer, Huvudbild).

## Till hantverkaren

- Ingen flyttad alt är över 125 tecken, så ingen behöver kortas.
- De tre nya skisserna behöver etiketter ([A1]–[A9], [M1]–[M8], [L1]–[L6]), alt och bildtext innan utvecklaren ritar.
- `tatskikt-badrum` och `vatrumsfarg` står bredvid varandra i badrumshubben med två nästan likadana badrumsskisser. Det är samma rum med olika zonregler, och det stämmer, men bildtexterna får gärna säga vad som skiljer.

## Vikt

De flyttade skisserna laddas nu med `fetchpriority="high"` som LCP-bild: 20 till 35 kB (toalettstol-fot 34,7, byta-koksluckor-matt 33,0, fogar-badrum-snitt 32,2). Det håller inom sajtens 40 kB, men nya huvudbilder specas under 28 kB.
