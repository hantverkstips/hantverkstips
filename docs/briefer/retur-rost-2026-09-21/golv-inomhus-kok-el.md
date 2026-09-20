# Retur efter röstomskrivningen, SEO, 2026-09-21

Fjorton sidor lästa mot `docs/briefer/seo-checklista-2026-09-20/golv-inomhus-kok-el.md`, punkt för punkt. Här står bara det som måste ändras för sökningen: saknad fras på angiven plats, title eller description utanför längd, borttagen intern länk eller ankare som inte längre säger vart det leder, alt-text över 125 tecken, avsnitt som saknas för intentionen, strukturerad data eller komponent som ändrats i form. Stil och röst granskas av någon annan och kommenteras inte här.

Tre saker som kontrollerats och som ligger rätt på samtliga fjorton sidor, och därför inte upprepas per sida: alla utgående interna länkar i checklistans punkt 9 finns kvar, alla inlänkar från grannsidor finns kvar med ankare som säger vart de leder, och antalet frågor i varje Faq-komponent är oförändrat (golv-i-kallare fyra, skruva-i-gipsvagg fem med `lank` kvar i första frågan, tillaggsisolera-vind fem). Tabellerna och deras `Källa:`-rader är lika många som före omskrivningen på varje sida.

En anmärkning om alt-texter: mallen sätter huvudbildens alt ur `bildtext`-fältet rakt av (`src/components/vyer/Artikel.astro`, `alt={d.bildtext ?? ''}`). Hela bildtexten blir alltså alt-text, och gränsen på 125 tecken gäller därför hela fältet.

Totalt elva punkter.

---

## /golv/bygga-trappa/

Inget att ändra.

---

## /golv/golv-i-kallare/

1. `src/content/guider/golv/golv-i-kallare.mdx` rad 4, `description`. Huvudfrasen saknas. Checklistans punkt 4 kräver "golv i källare" eller "källargolv" i texten, och nuvarande "Fyra golvtyper för källaren" är varken det ena eller det andra. Skriv frasen obruten, till exempel "Fyra golv i källare ställda mot mätvärdet i betongplattan, med tillverkarnas och branschens gränser, och när mätningen inte betyder något." (138 tecken). Löftet om när mätningen inte betyder något ska vara kvar, det är sidans differentiering mot hela topp fem.

2. `src/content/guider/golv/golv-i-kallare.mdx` rad 2, `title` (sidans H1). H1 och title säger samma sak med samma konstruktion: "fukten i plattan bestämmer" mot "fukten i betongplattan avgör valet". Punkt 5 kräver skild formulering från title. Behåll bestämd form "källaren" och byt andra ledet mot sidans tes, som redan står i brödtexten rad 41, till exempel "Golv i källaren, börja i betongen och inte i butiken" (52 tecken). `seoTitle` på rad 3 rörs inte, den ligger rätt på 50 tecken.

---

## /golv/lagga-klickgolv/

Inget att ändra.

---

## /golv/renovera-trappa/

Inget att ändra.

---

## /golv/slipa-parkettgolv/

1. `src/content/guider/golv/slipa-parkettgolv.mdx` rad 4, `description`. Huvudfrasen saknas helt, och ordet parkett står inte någonstans i taggen. Punkt 4 kräver huvudfrasen med. De fyra löftena är på plats och ska vara kvar, så byt ut ett led mot frasen, till exempel "Mät slitskiktet innan du hyr maskinen. Så slipar du parkettgolv själv, med kornnummer, hyrpriser på golvslip, torktider och golv som inte tål det." (146 tecken).

---

## /golv/ (pelarhub)

Inget att ändra.

---

## /inomhus/bygga-innervagg/

1. `src/content/guider/inomhus/bygga-innervagg.mdx` rad 10 till 13, `kortSvar`. Ordet regelavstånd står inte i kortsvaret. Punkt 2 kräver frasen både i H2:n om regelavståndet, där den finns, och i kortsvaret, där den inte finns. Kortsvaret säger i dag "ska reglarna stå på c 400 mm". Skriv i stället ut måttets namn i första meningen, till exempel "Sätter du ett lag gips ska regelavståndet vara c 400 mm", och låt förklaringen av c stå kvar oförändrad. Talen rörs inte.

---

## /inomhus/gipsskruv/

Sidan är sajtens näst största enskilda fras, och tre av de fem sidofraserna i punkt 2 ligger inte längre på sin angivna plats.

1. Rubriken "Grov eller fin gänga, det avgörs av regeln bakom skivan" har blivit "Gängan och spetsen väljs efter regeln". Sidofrasen "grov eller fin gänga" stod i H2:n före omskrivningen och gör det inte nu. Punkt 2 anger H2:n om gängan som frasens plats. Skriv tillbaka leden i rubriken, till exempel "Grov eller fin gänga, och vilken spets regeln kräver". Då bärs även "borrspets" av samma avsnitt som punkt 2 anger, och brödtexten på rad 109 till 113 med gränsen 0,9 mm rörs inte.

2. Rubriken "Längden räknas ur skivan plus regeln" saknar ordet gipsskruv. Sidofrasen "gipsskruv längd" ska enligt punkt 2 ligga i H2:n om längden och i längdtabellen. Skriv rubriken så att ordet står med, till exempel "Gipsskruvens längd räknas ur skivan plus regeln". Tabellen på rad 77 till 82 har i dag kolumnrubrikerna Skivor, Träregel och Stålregel, där ingen säger vad talen är längden på. Sätt enheten i tabellrubriken, till exempel "Gipsskruv i trä, mm" och "Gipsskruv i stål, mm". Talen ändras inte.

3. Rubriken "Så tätt ska skruvarna sitta" saknar sidofrasen "skruvavstånd gips", som punkt 2 lägger i just den H2:n. Skriv ut ordet, till exempel "Skruvavståndet i kant och i fält". Systersidan `/inomhus/bygga-innervagg/` har ordet i sin H2 medan den sida som äger frasen inte har det, och det ska vara tvärtom.

Allt annat på sidan ligger rätt: `<Kalkylator namn="gipsskruv" />` direkt under längdtabellen, `<Kalkylator namn="innervagg" />` i skruvavståndsavsnittet, `<Markering>20 mm</Markering>`, MDX-kommentaren om gipsplugg sist i filen, och båda produktslugsen i `behover.verktyg`.

---

## /inomhus/hanga-tavla-gipsvagg/

1. Rubriken "Mitten ska sitta 145 cm över golvet" bär inte höjdfrasen. Punkt 2 anger "höjd på tavla" eller "hur högt ska tavlan hänga" som sidofras i just den H2:n, och ingendera står där eller i avsnittet. Skriv rubriken så att frågan finns i den, till exempel "Hur högt tavlan ska hänga, mitten på 145 cm". `<Markering>145 cm</Markering>` på rad 109 och de två undantagen på rad 111 rörs inte.

---

## /inomhus/skruva-i-gipsvagg/

1. Rubriken "Tv-fästet är en hävarm" bär inte sidofrasen "montera tv på gipsvägg", som är en egen fras med 90 sökningar i månaden och enligt punkt 2 hör hemma i just den H2:n. Skriv in den, till exempel "Montera tv på gipsvägg, fästet är en hävarm". Avsnittet i övrigt, inklusive meningen om att ingen tillverkare anger hur mycket svängarmen ökar lasten, ska inte kortas.

Den inlänk från `/inomhus/bygga-innervagg/` som tidigare var H1:n ordagrant har blivit "guiden om att skruva i gipsvägg". Ankaret säger fortfarande vart det leder och pekar inte längre på en rubrik som inte finns, så det är inget att åtgärda.

---

## /inomhus/ (pelarhub)

Inget att ändra. Titeln "Väggar och innertak" står kvar ordagrant, så ankaret i `/golv/renovera-trappa/` rad 144 fortsätter att stämma.

---

## /kok/slipa-bankskiva/

1. `src/content/guider/kok/slipa-bankskiva.mdx` rad 15, `bildtext`. 140 tecken, och eftersom mallen gör hela fältet till huvudbildens alt-text ligger sidan över gränsen på 125. Korta till exempel till "Tre steg och stopp på korn 150. Går du vidare till 240 stänger du ytan så att oljan blir liggande ovanpå träet." (111 tecken). Båda talen 150 och 240 ska vara kvar, de är det bildtexten finns för. Sökvägen till `illustrationer/inomhus/slipa-bankskiva-korn.svg` rörs inte.

---

## /kok/ (pelarhub)

Inget att ändra. Beskrivningen har gått från 121 till 146 tecken, vilket är den marginal punkt 4 efterfrågade, och meningen i `ingress` om gränsen mot tätskikt och el står kvar.

---

## /el/tillaggsisolera-vind/

1. `src/content/guider/el/tillaggsisolera-vind.mdx` rad 15, `bildtext`. 236 tecken, alltså nästan dubbelt över gränsen på 125 för den alt-text mallen gör av fältet. Det var 200 tecken före omskrivningen och har blivit längre. Korta till exempel till "Snitt genom vindsbjälklaget: 300 millimeter ny lösull ovanpå 100 gamla, och de 400 millimetrarna gäller båda lagren ihop." (121 tecken). Talen 300, 100 och 400 är låsta och ska alla tre vara kvar. Meningen om rimfrosten hör hemma i brödtexten vid punkt tolv på rad 225 till 227, där den redan står, och behövs inte i bildtexten.

Alt-texten på `<Illustration namn="el/vind-takfot">` rad 198 ligger på 122 tecken och har kortats från 626 som checklistan krävde, med takfötterna, vindavledaren och talet 50 mm kvar. Den är klar.
