# Retur efter röstomskrivningen: fukt och produkter

Läst 2026-09-21 av SEO-strategen mot `docs/briefer/seo-checklista-2026-09-20/fukt-och-produkter.md`, avsnitt för avsnitt.
Bara sökrelaterade fel står här: saknad fras på angiven plats, title eller description utanför längd, borttagen länk eller ankare som inte längre säger vart det leder, alt-text över 125 tecken, avsnitt som saknas för intentionen, strukturerad data eller komponent som ändrats i form. Röst och stil kommenterar jag inte.

Kontrollerat och godkänt för alla elva sidorna: titel- och beskrivningslängder, att inga två titlar delar de tre första orden, samtliga elva alt-texter (nu 98 till 118 tecken, mot 144 till 255 före omskrivningen), H2-ordningen, alla utgående länkar i listorna, antalet Faq-frågor och `lank`-fälten, `matningar`, `alternativ`, `specs` och `val` i frontmatter, `kortSvar`, `omdome`, `kopOm` och `kopInteOm` som svar i första skärmen, samt de uppräknade fällorna i avsnitt 12. `npm run kontrollera` ger 45 publicerade sidor, 0 fel, 0 varningar.

Åtta punkter totalt.

## /fukt/avfuktare-kallare/

1. **Sidofrasen "luftavfuktare källare" (590/mån) saknas.** Checklistan avsnitt 2 lägger den i brödtext, en gång, i naturlig svenska. På rad 61 står "luftavfuktare" ensamt och "källare" först i nästa mening, så paret finns inte någonstans på sidan. Skriv om en av de två första meningarna i ingressen på rad 61 så att formen "en luftavfuktare i källaren" står där, eller lägg den i första meningen under H2 1 "Hur stor avfuktare källaren behöver". Övriga tre sidofraser sitter rätt: "hur stor avfuktare" i H2 1, "kondensavfuktare" i H2 2, "avfuktare källare el" i H2 4.

## /fukt/avfuktare-krypgrund/

Inget att ändra.

## /fukt/fukt-i-kallaren/

Inget att ändra. H2 6 bär nu "lukt i källaren" i rubriken, vilket den inte gjorde före omskrivningen, och H1 säger "tre orsaker", vilket är vad `/grund/isolera-kallarvagg/` lovar med ankaret "plasttestet och de tre orsakerna".

## /fukt/luftfuktighet-inomhus/

Inget att ändra. `seoTitle` ligger kvar på 42 tecken, så varumärket följer med. Huvudfrasen står nu ordagrant i description, vilket den inte gjorde före, och H2 3 bär "normal luftfuktighet inomhus" i rubriken.

## /fukt/sorptionsavfuktare/

Inget att ändra. Description ligger på 155 tecken, alltså i övre kanten av spannet men innanför. Växer den med ett tecken faller den ur.

## /fukt/ (pelarhubben)

2. **Ingressen på rad 4 har tappat orden som säger vad klustret täcker.** Checklistan avsnitt 2 kräver luftfuktighet, avfuktare, mögel, ventilation, källare, krypgrund och vind i `description` **och** `ingress`. Alla sju finns i description (153 tecken, rätt), men ingressen innehåller bara "avfuktaren". Ingressen är hubbens enda egna text, resten är galleri byggt av mallen, så orden har ingen annan plats att stå på. Skriv om ingressen så att åtminstone utrymmena (källare, krypgrund, vind) och mögel och ventilation nämns, och håll den under 140 tecken. `title`, `utkast: false`, filändelsen och kommentaren i frontmatter är oförändrade och rätt.

## /tester/acetec-evodry-6h-2/

3. **Sidofrasen "sorptionsavfuktare källare" saknas i avsnittet om vem som ska köpa.** Checklistan avsnitt 2 lägger den i brödtexten i just det avsnittet. H2 på rad 162, "Vilka utrymmen den passar och vilka den inte passar", säger "en källare eller ett garage" utan att ordet sorptionsavfuktare står i samma stycke. Ordet finns bara i det inledande stycket på rad 89 och då utan "källare". Skriv in det i första eller andra meningen efter rad 162.

4. **Ankaret "Så testar vi" på rad 183 namnger inte längre sidan det leder till.** `/om/sa-testar-vi/` heter sedan omskrivningen "Så testar jag" i både `title` och H1. Ändra ankartexten till "Så testar jag".

## /tester/woods-sw39fw/

5. **Ankaret "Så testar vi" på rad 180 namnger inte längre sidan det leder till.** Samma sak som ovan. Ändra till "Så testar jag". Resten av sidan är intakt: fem `matningar` med den tomma ljudraden kvar, fem punkter under "Det jag inte vet", omräkningsfaktorn 0,30 med intervallet 0,25 till 0,35 och reservationen om att den är interpolerad, båda effekterna 320 och 510 W, och I-EcoDefrost i första meningen under H2 3.

## /jamforelser/woods-sw39fw-vs-acetec-evodry-6h-2/

Inget att ändra. Sidofrasen "kondens eller sorption" finns nu i brödtexten, vilket den inte gjorde före omskrivningen. Fetstilen på 10 grader i `kortSvar` är kvar.

## /luftavfuktare/ (kategorisidan)

6. **Ankaret "så testar vi" på rad 87 namnger inte längre sidan det leder till.** Ändra till "så testar jag". Ankaret "hur kalkylatorn räknar" till `/rakna/avfuktare/#sa-raknar-vi` godkänns: id:t finns kvar och rubriken där heter numera "Så räknar jag om märkt kapacitet till verklig", så det gamla ankaret "så räknar vi" hade varit det felaktiga.

Noterat utan åtgärd: huvudfrasen "avfuktare bäst i test" och sidofrasen "luftavfuktare bäst i test" står varken i `seoTitle` eller H1. Det är avsiktligt så länge sidan skriver "Bäst i test kan jag inte skriva om någon luftavfuktare förrän jag mätt dem". `seoTitle` är mitt fält och jag ändrar det inte förrän kammartestet är gjort.

## /om/sa-testar-vi/

7. **`title` på rad 2 är "Så testar jag", men huvudmenyn och författarrutan säger "Så testar vi".** Checklistan avsnitt 5 kräver att H1 och ankartexten från andra sidor är igenkännbart samma sak, och avsnitt 3 att ordet står kvar eftersom det är ankartexten från tretton sidor. Sidan ska inte byta namn tillbaka. Rätta i stället de två malltexterna: `src/layouts/Bas.astro` rad 141 (`OM_SAJTEN`) och `src/components/ui/Forfattarruta.astro` rad 85. Startsidan (`src/pages/index.astro` rad 187) säger redan "Så testar jag".

8. **H2 2 heter "Så hämtar jag värden från tillverkarna", men fem av de sju guiderna utanför fuktklustret länkar hit med en annan lydelse.** Checklistan avsnitt 9: sju sidor lovar uttryckligen det avsnittet, och ankartexten är det löftet. I dag står det "Så hämtar jag värdena från tillverkarna" i `guider/golv/renovera-trappa.mdx` rad 152 och `guider/golv/slipa-parkettgolv.mdx` rad 188, "Så här läser jag tillverkarnas datablad" i `guider/inomhus/gipsskruv.mdx` rad 86, och "Vad jag gör med ett datablad, och vad jag inte gör" i `guider/inomhus/hanga-tavla-gipsvagg.mdx` rad 67. Tre guider har rätt lydelse. Lägg de fyra på samma formulering som H2 2. Ändringen görs i den andra gruppens retur, men målsidan är den här och H2 2 ska stå kvar ordagrant som den är.

Godkänt i övrigt på den här sidan: första meningen "I september 2026 har jag inte mätt något själv", exemplet 48 mot 46 dBA, de fem punkterna under "Det jag ska mäta" med gipspluggen kvar, Greenspan 1977 och de 75,3 procenten, och sista meningen om tomma mätvärden. Skrivningen om systermodellen är dessutom rättad i sak: den säger nu att ett lånat värde får stå i löptexten med källa men aldrig i tabellen, vilket löser motsättningen mot Wood's-granskningen som checklistan pekade ut.
