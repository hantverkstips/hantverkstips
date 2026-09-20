# Faktablad: rakna/dranering

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/dranering.astro`, `src/components/kalkyl/DraneringForm.astro`, `src/lib/kalkyl/dranering.ts`, raden i `src/lib/kalkyl/register.ts`. Konstanter, källor, logik och tester rörs inte.

## Konstanter

- Arbete 3 000 kr per löpmeter husgrund (Villaägarna), upp till det dubbla. Löpmeter = husets omkrets. Standardhus 12 × 8 m = 40 löpmeter, 120 000 till 240 000 kr i arbete.
- Referensdjup 2 m (antagande). Djupets påslag 50 procent per meter (BraByggare 25 till 50 per halvmeter, nedre kanten; rak kurva är vårt antagande). Faktor klämd 0,6 till 2. Övre kanten flyttas halvt (OVRE_DAMPNING 0,5, antagande).
- Åtkomst: fri 1, trång 1,25 (BraByggare 10 till 25 procent, övre kanten), berg 1,5 (antagande; BraByggares svåraste klass 1,7 gånger). Sprängning etablering 10 000 kr, täckning 15 000 kr (HelpHero), egna rader.
- Material 300 till 900 kr per löpmeter (summan vår; hyllpriser 18 september 2026: slang 56 kr/m Bauhaus, noppmatta 80 kr/kvm Bauhaus, Isodrän 100 mm 320 kr/kvm Markgrossen, makadam 100 kr/ton och fiberduk 5 kr/kvm Mark och Anläggning exkl. moms). Skalar rakt mot djupet, klämd 0,5 till 2.
- Schaktbredd cirka 1 m (GarBo). Återställning per löpmeter: gräs 100–300 (rullgräs 36–51 kr/kvm Upplands Gräsmattor), rabatt 200–600 (antagande), asfalt 300–700 (BraByggare 250–500/kvm), plattgång 500–900 (BraByggare), altan 800–2 000 (antagande).
- Rot 30 procent, tak 50 000 kr per person (Skatteverket). Dränera husgrunder står i listan. Maskinell utrustning undantagen (grävmaskiner, borraggregat). Rotgrundande andel tre femtedelar (antagande). Nivån var 50 procent för betalning 12 maj till 31 december 2025.
- KAN_HALLA_AR 50 (Villaägarna, källare som källare). TROLIGT_SLUT_AR 30 (Husgrunder 25 till 30; vårt val), gäller bara med markfukt på plasten. GarBo 20 år teknisk livslängd; branschen 30 till 50.
- Avfuktare 5 948 kr (Wood's SW39FW, Proffsmagasinet, 16 september 2026). Fuktutredning 5 355 kr inkl. moms (Ocab; Polygon 6 230). Mögelprov 3 190 kr. Tak 150 kvm, 20 mm regn, 3 000 liter (Anticimex).
- Standard: 12 × 8 m, djup 2 m, fri, gräs, 50 år, tejptest inte gjort. Gränser: längd/bredd 3–60 m, djup 0,5–4 m, ålder 0–150 hela år.
- Besked: markfukt + ålder ≥ 30 → 'Dränera om'; kondens → 'Mät först'; annat → 'Gör det billiga först'. Faktor mot avfuktare/utredning = summaLag / pris, ≥ 20.

## Testlåsta strängar

- beskedRubrik exakt: 'Dränera om', 'Mät först', 'Gör det billiga först'.
- Regler: berg: text innehåller 'Berg eller sten' och '10 000' (kronor(SPRANGNING_ETABLERING_KR)); markfukt: någon kalla innehåller 'Boverket'; kondens: '5 948' i någon regel; torrt: 'fel vägg'; ogjort: 'ett av tre ställen' med markfukt, kondens, läckage; alltid: en 'billigt'-regel med 'Stuprören', '150', '3 000'; alltid '5 355' i någon regel; 5 råd; någon regel med 'maskinhyran' eller 'maskinell utrustning'.
- poster[0].namn 'Arbete', poster[1].namn 'Material'.

## Sidan

- Ingress: omdränering kostar som en begagnad bil, många behöver aldrig gräva; två mått, djup, vad som ligger ovanpå; ska du gräva eller räcker avfuktare.
- Kortsvar: 3 000 kr/lm, dubbla, 40 lm, tejpa plast, plasten avgör.
- Resultatspalt: besked, arbete undre till övre, per löpmeter, räknat på djup och tejptest; tabell tre poster + Allt; rot på undre kanten utan maskinhyra; kvar att betala; avfuktare 5 948 kr, grävningen X gånger mer; utredning 5 355, X gånger.
- H2 "Dränering, kostnad per löpmeter och om du behöver gräva alls" nästan samma som H1, skriv om en. Fyra H3: hur länge håller; vad som gör priset dubbelt; rotavdraget och fällan; avfuktare eller dränering. Alla kvar.
- Brödtext fakta: Villaägarna 3 000, dubbla, 40 lm 120 000; det billiga först, Anticimex 150 kvm/20 mm/3 000 l; Villaägarna femtio år, "roligare saker att lägga pengarna på", branschen 30–50, GarBo 20; gräns 30 med markfukt; sjuttiotalet; inreda till sovrum → andra krav; Villaägarna: grävdjup, bergsprängning, markförhållanden utan siffra; BraByggare 25–50 per halvmeter, trång 10–25; nedre kanten på djup, övre på trång; berg vårt; sprängning egna rader; rot 30 procent, 50 000, maskinell utrustning undantagen, tre femtedelar vårt, ägare två tak; tejptest 50 × 50 cm två dygn; Boverket kapillär, skydd utsidan; avfuktare mot markfukt ökar avdunstning.
- Intern text bort: "ingen annan svensk kostnadssida skriver ut", "den enda svenska källa vi hittat" (får stå som källpresentation), "Byggkedjornas egna guider anger 2 500 till 7 500 kr per meter ... ingen av dem frågar om du behöver gräva" (marknadens andra räknare), tfoot-datum för vår hämtning.
- Så räknar vi: nio steg (omkrets; Villaägarna; djup 50 procent per meter med gränser; åtkomst; halvt på övre kanten; material 300–900 följer djupet; återställning, schakt 1 m bred; rot bara icke-maskin, tak; besked).
- Illustration `rakna/dranering`: grundmur i genomskärning, schakt längs väggen, dräneringsrör i botten, markfukt in genom väggen. Alt 129 → under 125.
- Två saker verktyget inte ser: vad som ligger i marken; krypgrunden. Talen är storleksordningar, inte offert.
- Antagandetabell 31 rader (bara text).
- Faq tre: vad kostar; hur länge håller; räcker avfuktare.
- Interna länkar: /grund/dranera-hus/ (×2), /fukt/fukt-i-kallaren/ (×2 + formulär), /rakna/avfuktare/, /rakna/daggpunkt/, /fukt/avfuktare-kallare/, /om/sa-testar-vi/. Rotfällan ska länka till /rakna/rotavdrag/ (checklistan), finns inte i dag; lägg till.
- Pennstreck-id: darfor-blev-svaret-sa, gor-inte-det-har, dranering-kostnad, sa-raknar-vi, las-vidare.

## Formuläret

- Husets mått utvändigt (längd, bredd), omkretsen räknas. Schaktdjup: ner till dräneringsledningen vid sulan, full källare runt 2 m, souterräng grundare. Åtkomst tre val med hjälp. Ovanpå schakten fem val; välj det dyraste längs mer än en vägg. Ålder: skriv husets ålder om du inte vet. Tejptest fyra val + länk till guiden.

## Metadata

- Title `Dränering, kostnad per meter och om du behöver gräva` (52), ordningen låst. Behåll.
- Description 145, håller. H1 behålls (frågeform).
- Register: namn "Vad kostar det att dränera om huset?" behålls; rad blir mening med verb.
