# Granskning: hänvisningar till BBR och EKS efter övergången

Gjord 2026-09-28 av underlagsarbetaren. Sökt i `src/content`, `src/pages`, `src/lib/kalkyl` efter "BBR", "EKS", "Boverkets byggregler", "BFS 2011:6" (skiftlägeskänsligt). Ingen innehållsfil ändrad.

## Sammanfattning

- **46 träffar.** 19 fel (a), 23 rätt (b), 4 med tal ur upphävd regel som behöver ny hänvisning eller komplettering (c). De 19 felen är alla samma sak: BBR 6:52 anges som gällande källa för 75 % RF.
- **Filer med fel (a):**
  - `src/lib/kalkyl/daggpunkt.ts` (1), `src/lib/kalkyl/avfuktare.ts` (1), `src/lib/kalkyl/kallare.ts` (3)
  - `src/pages/rakna/daggpunkt.astro` (3), `src/pages/rakna/kallare.astro` (1), `src/pages/rakna/avfuktare.astro` (1)
  - `src/content/kunskap/fukt/luftfuktighet-inomhus.mdx` (4), `src/content/guider/fukt/fukt-i-kallaren.mdx` (2), `src/content/guider/fukt/avfuktare-krypgrund.mdx` (2), `src/content/guider/grund/isolera-krypgrund.mdx` (1)
- **Filer med (c):** `src/lib/kalkyl/altan.ts` (2), `src/pages/rakna/altan.astro` (1), `src/content/kunskap/altan/reglar-avstand-och-dimensioner.mdx` (1). EKS 11 är upphävd; tabellerna är Svenskt Träs och deras giltighet mot BFS 2024:6 är inte kontrollerad.
- **Talet 75 % är detsamma** i de nya reglerna. Ny hänvisning, föreskrift: **BFS 2024:8, 7 kap. 1 § andra stycket**: "Om det inte finns något väl undersökt och dokumenterat högsta tillåtna fukttillstånd för ett material eller en produkt, ska en relativ fuktighet på 75 procent anses vara högsta tillåtna fukttillstånd." Boverkets jämförelsetabell för BFS 2024:8 (december 2024): BBR 6:52 → 7 kap. 1 §.
- **Termen har bytts.** BFS 2024:8 använder "högsta tillåtna fukttillstånd" (definierat i 1 kap. 5 §). "Kritiskt fukttillstånd" finns inte i BFS 2024:8 (sökt i hela texten). Används på 10 av de 19 raderna.
- **Döda länkar.** Boverkets sida `…/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/` ger 404 (kontrollerat 2026-09-28). Den finns på 8 ställen: `daggpunkt.ts:93`, `kallare.ts:109`, `daggpunkt.astro:141`, `kallare.astro:110`, `luftfuktighet-inomhus.mdx:23`, `fukt-i-kallaren.mdx:23`, `avfuktare-krypgrund.mdx:29`, `isolera-krypgrund.mdx:47`. Även `avfuktare.astro:140` (`…/risker-fuktskador/fuktrisker-for-grund/krypgrund/risk-med-fukt-fran-uteluft-i-krypgrund/`) ger 404.
- **Påstående utan källa i de nya reglerna.** "Luften bör inte ligga över 75 procent under längre tid" (`kallare.ts:108`, `luftfuktighet-inomhus.mdx:117`, `fukt-i-kallaren.mdx:132`, liknande i `kallare.ts:523`) står inte i BFS 2024:8 7 kap. 1 §. Paragrafen gäller fukttillståndet i byggnadsdelar, alltså material och produkter, inte rumsluften. Källan var troligen den gamla kunskapsbankssidan, som nu ger 404. Den gick inte att läsa.
- **Utanför sökområdet, samma fel:** `src/assets/illustrationer-kallor/rakna/kallare.svg:13` och `src/assets/illustrationer/rakna/kallare.svg:13` ("Boverket anger det i BBR 6:52 som kritiskt fukttillstånd").

### Förslag på rättad hänvisning

| Nu | Rättad hänvisning | Adress |
|---|---|---|
| BBR 6:52 (källtitel, källrad, kodkommentar) | Boverkets föreskrifter (BFS 2024:8), 7 kap. 1 § andra st. | https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf |
| "Boverket, PBL kunskapsbanken, högsta tillåtna fukttillstånd (BBR 6:52)" (källista) | Boverket, PBL kunskapsbanken, Fuktsäkerhet (BFS 2024:8, 7 kap.) | https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/hygien-halsa-och-miljo/fuktsakerhet/ (200 den 2026-09-28; citerar 7 kap. 1 § ordagrant; sidans datum ej utläst) |
| "kritiskt fukttillstånd" | "högsta tillåtna fukttillstånd" (BFS 2024:8 1 kap. 5 §) | samma pdf |
| "luften bör inte ligga över 75 % under längre tid" som Boverkets ord | stryk som Boverkets ord eller hitta ny källa (saknas) | – |
| "EKS 11" som förutsättning i Lathundens tabeller | behåll som beskrivning av källan, lägg till: EKS upphävd 1 juli 2025 genom BFS 2024:6 (valfrihet till 30 juni 2026); gällande: BFS 2024:6 | https://rinfo.boverket.se/BFS2024-6/pdf/BFS2024-6.pdf |
| BBR 9:92 (U-värde) | ingen ändring nu; från 2026-10-01 anges BBR som "upphävd, får tillämpas om ansökan/anmälan kommer in före 1 okt 2027 och samtliga äldre bestämmelser tillämpas (BFS 2026:9 övergångsbest. p. 3–4)" | https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf |

## Regelläget, läst 2026-09-28

| Påstående | Källa |
|---|---|
| BFS 2024:14 (BBR 31) trädde i kraft 1 juli 2025; BBR avsnitt 2:52, 3 och 5–8 upphörde då | BFS 2024:14, inledningen och övergångsbest. p. 1, https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf |
| Äldre bestämmelser fick tillämpas om lovansökan/anmälan kom in före 1 juli 2026, eller arbeten utan lov/anmälan påbörjades före 1 juli 2026; förutsättning att samtliga äldre bestämmelser tillämpas | BFS 2024:14 övergångsbest. p. 3 |
| BFS 2024:6 i kraft 1 juli 2025; upphäver BFS 2011:10 (EKS); äldre bestämmelser enligt BFS 2024:14 p. 3 | BFS 2024:6 övergångsbest. p. 1–3, https://rinfo.boverket.se/BFS2024-6/pdf/BFS2024-6.pdf |
| BFS 2026:9 i kraft 1 okt 2026; upphäver BBR (BFS 2011:6) | BFS 2026:9 övergångsbest. p. 1–2, https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf |
| BBR får tillämpas på lov/anmälan som kommer in före 1 okt 2027, eller arbeten som påbörjas före 1 okt 2027, om samtliga äldre bestämmelser tillämpas; gäller inte 2 kap. 8 § 1–3 | BFS 2026:9 övergångsbest. p. 3–5 |
| BBR 6:52 → BFS 2024:8 7 kap. 1 §; BBR 3:31, 3:311, 3:312 → BFS 2024:8 5 kap. 1 § | Boverket, Jämförelsetabeller BFS 2024:8, december 2024, https://www.boverket.se/globalassets/vagledningar/kunskapsbanken/nya-byggregler/jamforelsetabeller/jamforelsetabeller-bfs-2024-8/ |

Egen notering: uppdraget skriver att BBR upphörde 1 juli 2026. BBR avsnitt 9 (energi) gäller till och med 2026-09-30. Det som upphörde 1 juli 2026 var valfriheten att tillämpa de äldre tekniska reglerna utanför energin.

Ändringsförfattningar till BFS 2024:8, 2024:6 och 2024:9 är inte lästa. Paragraferna ovan är lästa i grundförfattningarna, se kontrollplansunderlaget, avsnitt 8 punkt 1.

## Alla träffar

Kategori: **a** = anger BBR/EKS som gällande i dag (fel), **b** = historiskt korrekt eller hänvisar till övergången (rätt), **c** = tal ur BBR/EKS som finns i ny form.

| # | Fil:rad | Meningen (utdrag) | Kat. | Ny hänvisning | Talet i nya reglerna |
|---|---|---|---|---|---|
| 1 | src/lib/kalkyl/daggpunkt.ts:91 | "Källa: Boverket, BBR 6:52, högsta tillåtna fukttillstånd. 75 procent gäller när materialets eget värde inte är väl undersökt." | a | BFS 2024:8 7 kap. 1 § andra st.; ny URL | 75 % samma |
| 2 | src/lib/kalkyl/avfuktare.ts:60 | "Källa: BBR 6:52 via Boverket sätter 75 % RF som kritiskt fukttillstånd, 55 % ger marginal ner till det." | a | BFS 2024:8 7 kap. 1 § andra st.; "högsta tillåtna" | 75 % samma; 55 % är eget val |
| 3 | src/lib/kalkyl/kallare.ts:108 | "…och den nivå luften inte bör ligga över under längre tid. Boverkets byggregler, BBR 6:52." | a | BFS 2024:8 7 kap. 1 § andra st. | 75 % samma; "under längre tid" saknar källa i BFS 2024:8 |
| 4 | src/lib/kalkyl/kallare.ts:523 | kalla: "Boverket, högsta tillåtna fukttillstånd (BBR 6:52). Villaägarna säger samma sak i praktisk form" (publik) | a | BFS 2024:8 7 kap. 1 § | 75 % samma |
| 5 | src/lib/kalkyl/kallare.ts:529 | kalla: "Boverket, högsta tillåtna fukttillstånd (BBR 6:52)" (publik) | a | BFS 2024:8 7 kap. 1 § | 75 % samma |
| 6 | src/pages/rakna/kallare.astro:195 | stod: "Boverket, BBR 6:52, när materialets eget värde inte är väl undersökt…" (storhet "Kritiskt fukttillstånd") | a | BFS 2024:8 7 kap. 1 § andra st.; storhet "Högsta tillåtna fukttillstånd"; URL rad 110 död | 75 % samma |
| 7 | src/pages/rakna/avfuktare.astro:139 | stod: "BBR 6:52 via Boverket sätter 75 % som kritiskt fukttillstånd, och 55 ger marginal ner till det" | a | BFS 2024:8 7 kap. 1 § andra st.; URL rad 140 död | 75 % samma |
| 8 | src/pages/rakna/daggpunkt.astro:140 | stod: "Boverket, BBR 6:52, kritiskt fukttillstånd när materialets eget värde inte är undersökt" | a | BFS 2024:8 7 kap. 1 § andra st.; URL rad 141 död | 75 % samma |
| 9 | src/pages/rakna/daggpunkt.astro:377 | "Gränsen 75 procent är Boverkets, BBR 6:52." | a | BFS 2024:8 7 kap. 1 § | 75 % samma |
| 10 | src/pages/rakna/daggpunkt.astro:468 | "Boverket sätter gränsen vid 75 procent relativ luftfuktighet i byggreglerna BBR 6:52, och det kallas kritiskt fukttillstånd." | a | BFS 2024:8 7 kap. 1 §; term "högsta tillåtna fukttillstånd" | 75 % samma |
| 11 | src/content/guider/grund/isolera-krypgrund.mdx:46 | källtitel "Boverket, PBL kunskapsbanken, högsta tillåtna fukttillstånd (BBR 6:52)" | a | "Boverket, PBL kunskapsbanken, Fuktsäkerhet (BFS 2024:8, 7 kap.)"; URL rad 47 död | – |
| 12 | src/content/kunskap/fukt/luftfuktighet-inomhus.mdx:22 | källtitel, samma som #11 | a | som #11; URL rad 23 död | – |
| 13 | src/content/kunskap/fukt/luftfuktighet-inomhus.mdx:117 | "I BBR 6:52 står att 75 procent luftfuktighet ska användas som kritiskt fukttillstånd … så luftfuktigheten vid rumstemperatur bör inte överstiga 75 procent under längre tid." | a | BFS 2024:8 7 kap. 1 § andra st. | 75 % samma; "rumstemperatur … under längre tid" saknar källa i BFS 2024:8 |
| 14 | src/content/kunskap/fukt/luftfuktighet-inomhus.mdx:147 | "…källarens är Boverkets kritiska fukttillstånd i BBR 6:52." | a | BFS 2024:8 7 kap. 1 §; "högsta tillåtna fukttillstånd" | 75 % samma |
| 15 | src/content/kunskap/fukt/luftfuktighet-inomhus.mdx:196 | "Talet för den färdiga byggnaden är Boverkets (BBR 6:52)…" | a | BFS 2024:8 7 kap. 1 § | 75 % samma |
| 16 | src/content/guider/fukt/fukt-i-kallaren.mdx:22 | källtitel, samma som #11 | a | som #11; URL rad 23 död | – |
| 17 | src/content/guider/fukt/fukt-i-kallaren.mdx:132 | "I BBR 6:52 står 75 procent relativ luftfuktighet som kritiskt fukttillstånd … och luftfuktigheten bör inte ligga över det under längre tid." | a | BFS 2024:8 7 kap. 1 § andra st. | 75 % samma; "under längre tid" saknar källa |
| 18 | src/content/guider/fukt/avfuktare-krypgrund.mdx:28 | källtitel, samma som #11 | a | som #11; URL rad 29 död | – |
| 19 | src/content/guider/fukt/avfuktare-krypgrund.mdx:92 | "Boverket sätter 75 procent som kritiskt fukttillstånd … i BBR 6:52" | a | BFS 2024:8 7 kap. 1 § andra st. | 75 % samma |
| 20 | src/lib/kalkyl/altan.ts:171 | "Tabellhuvudets förutsättningar: konstruktionsvirke C24 … EKS 11, säkerhetsklass 1, klimatklass 3, nedböjning begränsad till 1/200" | c | Beskriver Lathunden 8:2021 korrekt. EKS upphävd (BFS 2024:6 övergångsbest. p. 2). Gällande: BFS 2024:6; säkerhetsklass 1 i 2 kap. 4 och 7 §§, γd = 0,83 i 3 kap. 2 § | Om tabellens spännvidder håller enligt BFS 2024:6: ej kontrollerat. "Klimatklass" och nedböjningsgränser står inte i BFS 2024:6 (sökt); de hör till SS-EN 1995-1-1, som 2 kap. hänvisar till |
| 21 | src/lib/kalkyl/altan.ts:202 | "…C24, EKS 11, säkerhetsklass 1, klimatklass 3, nedböjning 1/300." | c | som #20 | som #20 |
| 22 | src/pages/rakna/altan.astro:220 | varde: "C24, EKS 11" (publik tabell "Tabellens förutsättningar") | c | Komplettera: "EKS 11 (upphävd, ersatt av BFS 2024:6)" | som #20 |
| 23 | src/content/kunskap/altan/reglar-avstand-och-dimensioner.mdx:70 | "Dimensionerad enligt Boverkets konstruktionsregler EKS 11 i säkerhetsklass 1 och klimatklass 3…" | c | Komplettera som #22. En altan står inte uttryckligen bland exemplen för säkerhetsklass 1 i BFS 2024:6 2 kap. 7 § ("små byggnader … såsom komplementbyggnader"); tillämpligheten är osäker | som #20 |
| 24 | src/lib/kalkyl/u-varde.ts:321 | `const BBR_9_92: KallaRef` (namn i kod) | b | – | – |
| 25 | src/lib/kalkyl/u-varde.ts:322 | titel: "Boverket, BFS 2011:6 i lydelse BFS 2024:14, avsnitt 9:92" | b | Ny motsvarighet redan angiven: BFS 2026:9 3 kap. 1 § fjärde st., bilaga 2 tabell 6 | BBR tabell 9:92 (eftersträvas): tak 0,13, vägg 0,18, golv 0,15, fönster 1,2, dörr 1,2. BFS 2026:9 tabell 6 (högsta tillåtna): 0,13 / 0,18 / 0,15 / 1,1 / 1,1. Stämmer med `BOVERKET` i koden |
| 26 | src/lib/kalkyl/u-varde.ts:580 | "Källa: BFS 2011:6 i lydelse BFS 2024:14, 9:92, tabell 9:92…" ("övergången låter båda gälla till 2027-10-01") | b | Övergången stämmer: BFS 2026:9 övergångsbest. p. 3–4 (ansökan/anmälan före 1 okt 2027) | som #25 |
| 27 | src/lib/kalkyl/u-varde.ts:1376 | `kallor: [BBR_9_92, BFS_2026_9]` | b | – | som #25 |
| 28 | src/content/kunskap/el/u-varde.mdx:38 | källtitel "…BBR 31, omtryck, avsnitt 9 (gäller till och med 2026-09-30)" | b | Från 2026-10-01: lägg till övergångsregeln (BFS 2026:9 p. 3–4) | – |
| 29 | src/content/kunskap/el/u-varde.mdx:40 | källtitel "Boverket, BFS 2020:4, BBR 29, tabell 9:2a och 9:92" | b | historisk källa | ej kontrollerat mot BBR 29 |
| 30 | src/content/kunskap/el/u-varde.mdx:113 | "Källa: Boverkets byggregler, BBR, avsnitt 9:92, som gäller till och med den 30 september 2026, och de nya reglerna i BFS 2026:9." | b | som #28 | Tabellen på raderna 103–111 stämmer med #25 |
| 31 | src/lib/kalkyl/trappa.ts:115 | "…övergångsbestämmelserna till Boverkets föreskrifter (2024:14) om ändring av Boverkets byggregler (2011:6), punkt 3." | b | Stämmer med BFS 2024:14 övergångsbest. p. 3 | – |
| 32 | src/lib/kalkyl/trappa.ts:122 | "ALLMÄNT RÅD SOM ÄR BORTA. Källa: Boverkets byggregler (BFS 2011:6 ändrad t.o.m. BFS 2014:3) avsnitt 8:232…" | b | Saknar ny motsvarighet: BFS 2024:9 har inget stegdjup (sökt "stegdjup", "0,25", "0,30 meter"). Anm.: citerad lydelse är från 2014, inte den sista före upphörandet; om rådet fanns kvar oförändrat till 2025 är inte kontrollerat | 0,25 m saknas i nya reglerna |
| 33 | src/lib/kalkyl/trappa.ts:155 | "…samma mått stod i det gamla allmänna rådet i BBR 8:2322: 'Ledstänger bör sitta på 0,9 meters höjd.'" | b | BFS 2024:9 2 kap. 12–13 §§ anger ingen höjd (läst) | 0,9 m saknas |
| 34 | src/lib/kalkyl/trappa.ts:161 | "Räckeshöjder ur det gamla allmänna rådet, BBR 8:2321." | b | BFS 2024:9 2 kap. 11 § utan fast räckeshöjd (kontrollplansunderlaget 4.2) | 0,9/1,1 m saknas |
| 35 | src/lib/kalkyl/trappa.ts:567 | kalla: "Borttaget allmänt råd i de gamla byggreglerna, BBR 8:91 / 8:232" | b | – | saknas |
| 36 | src/lib/kalkyl/trappa.ts:585 | kalla: "Borttaget allmänt råd i de gamla byggreglerna, BBR 8:91" | b | – | saknas |
| 37 | src/lib/kalkyl/trappa.ts:636 | kalla: "Boverkets byggregler, BBR 8:91 / 8:232, och övergångsbestämmelserna till BFS 2024:14" | b | – | saknas |
| 38 | src/lib/kalkyl/trappa.ts:655 | "Trapplanets djup ur det gamla allmänna rådet i BBR 8:232…" | b | – | 1,3 m saknas |
| 39 | src/pages/rakna/trappa.astro:149 | `const BBR_URL =` (pdf, BFS 2011:6 t.o.m. 2014:3; 200 den 2026-09-28) | b | – | – |
| 40 | src/pages/rakna/trappa.astro:227 | "Borttaget allmänt råd i de gamla byggreglerna, BBR 8:232 … borttaget den 1 juli 2026" | b | – | saknas |
| 41 | src/pages/rakna/trappa.astro:240 | "Borttaget allmänt råd, BBR 8:91…" | b | – | saknas |
| 42 | src/pages/rakna/trappa.astro:247 | "Borttaget allmänt råd, BBR 8:232 … Inget nyare mått finns" | b | – | saknas |
| 43 | src/pages/rakna/trappa.astro:260 | "Föreskriften anger ingen höjd … samma tal stod i det gamla allmänna rådet i BBR 8:2322" | b | – | saknas |
| 44 | src/content/guider/golv/bygga-trappa.mdx:62 | källtitel "Boverkets byggregler, BBR, avsnitt 8, BFS 2011:6 ändrad t.o.m. BFS 2014:3 (de gamla råden…)" | b | Anm. som #32 | – |
| 45 | src/content/guider/grund/inreda-kallare.mdx:183 | "Det gamla kravet stod i Boverkets byggregler, minst 2,40 meter … De talen gäller inte längre." | b | Ny: BFS 2024:8 5 kap. 1 §: "Rumshöjden ska vara tillräcklig för att undvika olägenheter för människors hälsa och vara anpassad till rummets avsedda användning." Sidans återgivning stämmer | 2,40/2,30 m saknas i nya reglerna |
| 46 | src/content/guider/grund/inreda-kallare.mdx:253 | FAQ: "De gamla talen 2,40 meter och 2,30 meter kommer ur Boverkets byggregler, som slutade gälla då." | b | som #45 | som #45 |

## Källor lästa 2026-09-28

| Källa | Adress | Status |
|---|---|---|
| BFS 2024:8, grundförfattning | https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf | läst (1 kap. 5 §, 5 kap. 1 §, 7 kap. 1–2 §§) |
| BFS 2024:6, grundförfattning | https://rinfo.boverket.se/BFS2024-6/pdf/BFS2024-6.pdf | läst (2 kap. 4–7 §§, 3 kap. 2 §, övergångsbest.) |
| BFS 2024:9, grundförfattning | https://rinfo.boverket.se/BFS2024-9/pdf/BFS2024-9.pdf | sökt på stegdjup, ledstång |
| BFS 2024:14 (BBR 31) | https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf | läst (inledning, 9:92, övergångsbest.) |
| BFS 2026:9 | https://rinfo.boverket.se/BFS2026-9/pdf/BFS2026-9.pdf | läst (3 kap. 1 §, bilaga 2 tabell 6, övergångsbest.) |
| Jämförelsetabeller BFS 2024:8, Boverket dec 2024 | https://www.boverket.se/globalassets/vagledningar/kunskapsbanken/nya-byggregler/jamforelsetabeller/jamforelsetabeller-bfs-2024-8/ | läst |
| PBL kunskapsbanken, Fuktsäkerhet | https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/hygien-halsa-och-miljo/fuktsakerhet/ | 200, citerar 7 kap. 1 §; datum ej utläst |
| PBL kunskapsbanken, Högsta tillåtna fukttillstånd (gammal) | https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/boverkets-byggregler/fuktsakerhet/hogsta-tillatna-fukttillstand/ | **404** |
| Boverket, Risk med fukt från uteluft i krypgrund | https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/risker/risker-fuktskador/fuktrisker-for-grund/krypgrund/risk-med-fukt-fran-uteluft-i-krypgrund/ | **404** |

**Inte kontrollerat:** Svenskt Trä, Lathunden, om det finns en utgåva efter BFS 2024:6; EKS 11 (BFS 2011:10 i den lydelsen) är inte läst, så γd och lastvärden är inte jämförda mellan EKS 11 och BFS 2024:6; ändringsförfattningar till BFS 2024:6, 2024:8 och 2024:9.
