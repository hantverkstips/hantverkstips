# Spec: rester efter fuktmätarläsningen, Wood's-varvet och fuktkvoten, 2026-10-04

UX och bygge. Fem delar som tre arbetare tar parallellt. Del A rör kategorimallen och de delade komponenterna. Del C och D rör formelmodulerna. Del B och E rör skisserna. Reglerna är desamma som förut: noll klient-JS, inga nya beroenden och texter ordagrant ur specen. `npx astro check`, alla räknartester och `npm run kontrollera` körs efter varje del. Ingen arbetare bygger eller committar.

## A. Kategorimallen och produktkortet (läsaren av /fuktmatare/)

1. **Tabellraden "Vårt omdöme"** i `src/components/ui/Jamforelsetabell.astro` (rad 132) får rubriken "Mitt val". Cellen visar valets `etikett` för produkter som står i kategorifilens `val`. För de övriga är cellen tom, utan "ej angivet" och utan tankstreck.
2. **Granskningsmeningen i kortet.** "Jag har läst databladet men inte provat den." tas bort ur `src/components/ui/Produktkort.astro` (rad 74). Kortet visar bara `svaghet`, eller inget stycke alls när den saknas. Meningen står redan i sak i sidospaltens Så jobbar jag, och där står den en gång per sida.
3. **Så jobbar jag-rutan** i `src/components/ui/Sidospalt.astro` (rad 77) och `src/components/vyer/Kategorisida.astro` (rad 66) får texten "Siffrorna för produkterna kommer från tillverkarna, och jag har läst databladen men inte haft dem hos mig. Reklamen på sidan är märkt och styr inte vilka produkter jag väljer." (koordinatorns beslut: ett ord som täcker alla kategorier). Kategorisidan använder `Sidospalt`, eller samma konstant, så att texten bara står på ett ställe.
4. **Produktnamnet.** `produktNamn()` i `src/lib/produkter.ts` ger produktens `namn` när fältet har ett värde, och märke plus modell bara när `namn` saknas. Lista alla ställen där namnet byts, och om namnet i `Product`- eller `ItemList`-markupen ändras. Det beslutet tar SEO och GEO-agenten efteråt.
5. **Fuktmätarna får räknaren.** `kalkylator: fuktkvot` läggs i `src/content/kategorier/fuktmatare.md`. Bara den raden ändras i filen; hantverkaren arbetar i resten.

Kontroller: mät `/luftavfuktare/`, `/krysslaser/` och `/fuktmatare/` i dev före och efter. Ta en skärmdump av jämförelsetabellen på 375 px för `/fuktmatare/`. Kör `scripts/test-kopknapp.mjs` och `test-lagerlage.mjs`.

## B. Skissen `fukt/kapacitet-temperatur`

AD20-staplarna och deras etiketter ("23", "14", "30°", "27°", "AD20") tas bort ur källan `src/assets/illustrationer-kallor/fukt/kapacitet-temperatur.svg`. Wood's anger inte 14 liter vid 27 grader och 60 procent. De andra staplarna flyttas så att grupperna står jämnt fördelade. Allt annat ändras inte. Ny aria-label: "Stapeldiagram över liter per dygn enligt tillverkarna. Wood's DSC50FM 13,5 liter vid 30 grader mot 8,0 vid 20. SW59FM 41 mot 25. Corroventa CTR, sorption, 17 liter vid 20 grader, 13 vid 10 och 11 vid 5." Kör `npm run illustrationer`. Filen ska vara under 40 960 byte och sakna `<text>`. Rendera den på 343 px.

## C. Källraderna i formelmodulerna (Wood's-varvet)

Kommentarer och källrader som anger Proffsmagasinet som källa för prestanda byts mot tillverkarens dokument. Talen ändras inte.

- **`src/lib/kalkyl/elkostnad.ts` rad 71 och 188:** talet 320 W för SW39FW stämmer. Källan blir Wood's datablad för SW38FW vid 20 °C och 70 % (systermodellen, med samma tal). Titel och adress tar du ur underlaget i `docs/briefer/` (sök på SW38FW). Finns ingen adress där, skriv titeln utan adress och skriv det i leveransen.
- **`src/lib/kalkyl/avfuktare.ts` rad 105, `kallare.ts` rad 147 och `dranering.ts` rad 342:** byt till tillverkarens dokument när det finns i ett faktablad eller underlag under `docs/briefer/`. Annars märks raden `ANTAGANDE:` med en mening om vad talet bygger på.
- **`src/lib/kalkyl/fasadyta.ts`:** där Proffsmagasinets guide är källa för färgåtgången byts källan mot färgtillverkarens åtgång om den finns i faktabladet för fasadytan. Annars märks raden `ANTAGANDE`.
- **`altan.ts` rad 261** är en priskälla och står kvar.
- Syns källraderna på en sida, i en antagandetabell, lista vilka sidor och rader som ändras.

## D. Fuktkvoten, efter granskningen

1. **Undantaget i testet godkänns:** vid 21,1 °C och 85 % ger ekvationen 17,95, som avrundas till 18,0, mot tabellens 17,9. Testet får skillnaden högst 0,1 i den punkten. Rätta också faktabladet 4.3, raden för 21,1 °C och 85 %: kolumnen "Stämmer" eller meningen "Alla stämmer på avrundningen" ska säga att just den punkten avviker med 0,05 på grund av avrundningen. Underlaget är en text i `docs/briefer/faktablad/rakna-fuktkvot.md`. Ändra bara den meningen.
2. **Tankstreck i gränserna.** Gränstexterna i `src/lib/kalkyl/fuktkvot.ts` skrivs med "till": "7 till 9 %" och "fukthalt 15 till 20 %". Inga tankstreck i strängar som visas.
3. **Förvalens källor.** Olsson (SP), Villaägarna och LTH får samma titel och adress som i `src/lib/kalkyl/daggpunkt.ts`. Importera konstanterna därifrån om de är exporterade, annars kopiera dem med en kommentar om varifrån de kommer.

## E. Skissen `fukt/fuktkvot-brada`

Ny skiss, 600 × 360: källan `src/assets/illustrationer-kallor/fukt/fuktkvot-brada.svg` och den konverterade `src/assets/illustrationer/fukt/fuktkvot-brada.svg`. Motivet och etiketterna står i YAML-kommentaren i `src/content/kunskap/fukt/fuktkvot.mdx` rad 15–21 och tas ordagrant därifrån:

- En hyvlad bräda, sedd snett från sidan, med änden till vänster.
- En måttbygel i blyerts-2 från änden till mätstället med "300 mm", gult markerad (nyckeltalet).
- Tre stiftpar tätt intill varandra på mätstället, utan mått mellan dem. Ett par står tvärs över fibrerna, grunt i ytan, med etiketten "ytan". Ett par står längs fibrerna, djupare in, med etiketten "längs fibrerna".
- Pennan (penna, 2,5 px) pekar på stiftparen. Det är det enda som pekar.
- Till höger ett tvärsnitt av brädan med ett tunt ytskikt märkt "ytan" och mitten märkt "kärnan". Inga tal i snittet.

Handskriften ska vara minst 24 px och filen under 28 kB (28 672 byte). Den ska gå att läsa på 375 px: rendera på 343 och 600 px. Rör inte mdx-filen. Hantverkaren byter kommentaren mot `bild:` när skissen finns.
