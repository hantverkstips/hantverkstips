# Faktablad: /om/sa-testar-vi/

Ur `src/content/sidor/sa-testar-vi.mdx`, läst 2026-09-20. Varje tal, källa, påstående och länk. Inget här får ändras i sak.

## Frontmatter

- title: Så testar vi (får bli högst 44 tecken, ordet "testar" ska stå kvar)
- description: 120 till 155 tecken. Löftet: skillnaden test/granskning, hur kalkylatorerna räknar, vad som kommer att mätas
- uppdaterad: sätts till 2026-09-20
- strukturdata: Article (rörs inte)
- utkast: false

## Läget

- I september 2026 har inget mätts själv. Första meningen på sidan; datumet uppdateras, meningen tas aldrig bort.
- Varje siffra kommer ur ett datablad, en myndighetskälla eller egen räkning, och det står vid siffran varifrån den kommer.

## Test eller granskning

- Test = produkten har varit i handen och mätts.
- Granskning = (gammal lydelse) tillverkarens datablad jämfört med mätningar från namngivna tredje parter. **Det stämmer inte med sajten: ingen granskning har tredjepartsmätningar.** Ny lydelse enligt uppdraget: datablad läses och jämförs, luckor pekas ut, värde lånas från en systermodell bara när det skrivs ut.
- Etiketten står överst på varje sida och i den strukturerade datan.
- "Vi testade" skrivs aldrig om en granskning.
- I dag är allt på sajten granskning.

## Vad som görs med ett datablad

- Tillverkarens siffra återges tillsammans med villkoret. Exempel: en avfuktare på 20 liter per dygn står med 30 grader och 80 procent luftfuktighet, aldrig bara "20 liter". I en svensk källare i november ger samma maskin en bråkdel.
- Saknar produktsidan villkoret: "ej angivet".
- Saknar den siffran helt (exempel: ljudnivån för flera av Wood's maskiner): det skrivs också.
- Gammal lydelse "vi lånar inte ett värde från en systermodell" gäller **tabellvärden** (raden står tom). SW39FW-sidan hämtar mätvillkor, vikt och ljudvärde från systermodellen SW38FW i löptext med reservation utskriven. Nya lydelsen ska säga: tabellraden står tom, ett lånat värde står bara i löptext och bara med det utskrivet att det är lånat.
- Två källor som säger olika: går på tillverkaren, skriver ut båda. Exempel: Acetec anger 48 dBA, butiken 46 dBA.

## Kalkylatorerna

- Avfuktarkalkylatorn räknar belastningen i augusti (värsta månaden) i tre poster: vattnet som redan står i luften, det som kommer in med uteluften, det som avdunstar från golvet.
- Summan får marginal 1,3 och räknas om till siffran på lådan.
- Omräkningen använder en faktor för hur mycket maskinen tappar i kyla: gäller 15 grader för kondensmaskin, 10 grader för sorptionsmaskin (torkar luften med ett fuktsugande hjul i stället för kyla).
- Varje konstant är märkt som källa eller antagande i tabellen under "så räknar vi" (länk `/rakna/avfuktare/#sa-raknar-vi`). Svagaste leden: markfukten och faktorn vid 15 grader. Resultatet är ett intervall.
- Mättnadsånghalt och daggpunkt (temperaturen där luften börjar fälla ut vatten) räknas med Magnus-formeln enligt Lawrence 2005, osäkerhet 0,35 grader.
- Elkostnad = märkeffekt gånger timmar.
- Elpris: SCB:s för hushåll, 2,40 kr per kWh, juli till december 2025, inklusive nätavgift, skatt och moms. Datumet står alltid vid beloppet.

## Vad som kommer att mätas (fem punkter, i ordning)

1. Relativ fuktighet och temperatur i fyra rum i ett bostadshus, en vecka i vinter och en i sommar. Hygrometern kontrolleras i mättad koksaltlösning: 75,3 procent relativ fuktighet vid 25 grader enligt Greenspan 1977.
2. En avfuktare i en verklig källare i sju dygn: liter i tanken, gångtimmar, elmätarens värde per dygn. Avgör om marginalen 1,3 är rätt.
3. Kapacitet i kammare vid 10 och 20 grader, för maskinerna sajten pekar på.
4. Ljudnivå på 1 och 3 meters avstånd.
5. Gipspluggar belastade till brott i 13 mm gips.

- Instrumentens modell skrivs ut när mätningen publiceras.
- Tabellen "Vi mätte" mot "Tillverkaren uppger" fylls i på varje testsida.
- Sista meningarna: mätvärden som saknas i en tabell står tomma, de fylls inte i på känsla. Ska stå kvar.

## Länkar

- `/rakna/avfuktare/#sa-raknar-vi`, enda utgående länken, ska vara kvar.
- Förslag från strategen: länk till `/luftavfuktare/` vore rimlig. Föreslås i rapporten, läggs inte in utan beslut.

## Inlänkar att svara mot

- "Så hämtar vi värden från tillverkarna" (sju guider): kräver att H2 2 finns kvar som eget avsnitt.
- "så testar vi", "så mäter vi", "Så testar vi".

## Krav ur checklistan

- Fyra H2: test eller granskning; vad vi gör med ett datablad; så räknar vi i kalkylatorerna; vad som kommer att mätas.
- 500 till 800 ord.
- Inga bilder, inga komponenter.
