# Faktablad: /rakna/elkostnad/

Ur `src/pages/rakna/elkostnad.astro`, `ElkostnadForm.astro`, `src/lib/kalkyl/elkostnad.ts` och registret, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG elkostnad, VERKTYGSNAMN "Elkostnadskalkylator". Inga produktkort, inget reklamband. Tar ?produkt= och förifyller effekten ur produktens specs (aldrig litern, koordinatorns beslut 2026-09-17).
- Title i dag 50 tecken. Krav: elkostnad eller el + kostar, högst 60, gärna under 44 (ordet kalkylator får gå).
- Description i dag 154. Krav: behåll elkostnad, kilowattimmar, kronor. "antagandena utskrivna" får gå.
- H1 "Vad kostar maskinen i el? Räkna ut kWh och kronor". Behåll el och kronor; kilowattimmar utskrivet i ingressen.
- Registret: namn "Vad kostar maskinen i el?" (bär el + kostar). rad substantivramsa, skrivs om.

## Formuläret

- effekt: Effekt, W, hjälp "Talet på typskylten eller i databladet, alltså märkeffekten."
- timmar: Gångtid per dygn, timmar, hjälp "Vet du inte, gissa efter den här listan." + GANGTIDER: hygrostatstyrd avfuktare cirka 8 timmar; värmefläkt på termostat 4 till 6; en maskin som aldrig stängs av 24.
- dagar: radio PERIODER 30 "30 dagar, en månad", 365 "365 dagar, ett år", "Eget antal" + fält dagareget (aria-label "Eget antal dagar").
- elpris: Elpris, kr per kWh, hjälp: standardvärdet är SCB:s genomsnitt för hushåll med nätavgift, energiskatt och moms; skriv in fakturans pris i stället.
- liter: "Liter vatten per dygn, om det är en avfuktare", placeholder "lämna tomt", hjälp: ger vad varje liter vatten kostar, enda måttet som går att jämföra mellan kondens och sorption. Märkt kapacitet gäller vid 30 grader och 80 procent; i källare på 15 grader ger kondens ungefär en tredjedel, länk /fukt/avfuktare-kallare/ ("köpguiden").
- produktRad: "Räknar på [namn], [X] W enligt butiken. Ändra talen om du har egna." / "Maskinen i länken finns inte i vår produktdatabas, eller saknar uppgift om effekt. Fälten står därför på standardvärden."
- Knapp Räkna ut.

## Konstanter (rörs inte)

- ELPRIS_KR_PER_KWH 2,40 ur antaganden.ts, ELPRIS_KALLA med omfattar, period, url (SCB, hushåll, juli till december 2025 enligt Så testar vi).
- STANDARD 320 W (Wood's SW39FW enligt Proffsmagasinet), 8 timmar (antagande hygrostatstyrd i källare som inte är genomblöt), 30 dagar, elpris 2,40, liter null.
- GRANSER effekt 1 till 10 000 W, timmar 0,1 till 24, dagar 1 till 3 650, elpris 0,1 till 20, liter 0,1 till 200.
- DAGAR_PER_AR 365.
- GOR_INTE_DYGNET_RUNT (när timmar ≥ 24): låt inte avfuktaren gå dygnet runt utan hygrostat (givaren som stoppar när luften nått rätt fuktighet); maskin som aldrig slår av kostar tre gånger så mycket som hygrostatstyrd och torkar källaren torrare än den behöver; sitter givaren i maskinen räcker 55 procent.
- Felsträngar med /effekt/, /gångtid/, /dagar/, /elpris/, /liter/ (testet).

## Räkningen

1. Watt / 1 000 = kilowatt. 2. × timmar per dygn = kWh per dygn. 3. × dagar = perioden. 4. × elpris = kronor. 5. Året = 365 dagar vid samma gångtid. 6. Liter: kWh per dygn / liter = kWh per liter, × elpris = kr per liter.
- Antagandetabell: Elpriset 2,40 kr per kWh, Källa SCB genomsnitt [omfattar], [period] (url). Effekten under gångtiden: märkeffekten hela tiden, Antagande, kompressor pendlar, övre gräns. Gångtiden 8 timmar, Antagande, gissning för hygrostatstyrd avfuktare, ingen uppmätt drifttid, påverkar svaret mest. Året 365 dagar, Antagande, skottår under tre promille.
- Efter tabellen: formeln säker, gångtiden inte; en timme för mycket per dygn flyttar årssiffran mer än man tror; läs som spann. Länk /om/sa-testar-vi/.

## Resultatspalten i dag

- Etikett "På X dagar", stort tal kWh, stort tal kr. Rad "vid X W i Y timmar per dygn och Z kr per kWh". Lista: kWh per dygn, kr per dygn, kr per år (kWh per år), kWh och kr per liter. Gör inte det här (vid 24 timmar). Länk. Dela.
- Kortsvar: maskinen drar X kWh per dygn. På N dagar Y kWh. Kostar Z. Hela året W. Varje liter kostar V kr.

## Brödtext

- H2 id watt-till-kwh "Räkna elförbrukning från watt till kWh själv": typskylten = metallbrickan på baksidan; dela med 1 000 = kW; × timmar = kWh; elbolaget tar betalt per kWh; 1 000 W en timme = 1 kWh; × pris. Märkeffekten är inte förbrukningen: kompressorn startar när hygrostaten (fuktgivaren) säger till; värmefläkt på termostat samma; verktyget antar märkeffekt hela gångtiden = övre gräns; energimätare mellan maskin och uttag, läs av efter en vecka.
- H3 Avfuktaren i källaren: 320 W, hygrostat, 8 timmar: 2,56 kWh per dygn, 76,8 kWh per månad, 184 kr. Literpris: dela kWh per dygn med liter.
- H3 Värmefläkten i garaget: 2 000 W termostat, frostfritt i november, 5 timmar: 10 kWh per dygn, 300 kWh per månad, 720 kr. Dyrare än avfuktaren trots kortare tid, effekten mer än dubbelt.
- H3 Byggfläkten dygnet runt: 3 000 W torkar golv utan uppehåll: 72 kWh per dygn, en vecka 504 kWh och 1 210 kr, storleksordning för uttorkning efter vattenskada. Räkna innan du hyr.
- H2 Så räknar vi (id sa-raknar-vi): skiss rakna/elkostnad, alt 123 tecken (maskin på 300 watt, sladd till vägguttag, elmätare ovanför). Sex steg. Tabell. Länk sa-testar-vi.
- Läs vidare: /fukt/avfuktare-kallare/ (eltabell fyra maskiner), /fukt/sorptionsavfuktare/. Får lägga till /luftavfuktare/.
- Faq: Hur räknar jag om watt till kWh? (dela med 1 000, gångra med timmar, 1 000 W en timme = 1 kWh, elbolagets enhet). Drar en avfuktare mycket el? (320 W, hygrostat = fuktgivare, ca 8 timmar, 184 kr per månad; värmefläkt dyrare trots kortare tid; lank /fukt/avfuktare-kallare/). Vad kostar en kWh 2026? (2,40 om inget annat, SCB hushåll, period, elhandel nätavgift energiskatt moms; fakturan; byt talet).

## Krav ur checklistan

- Sidofraser: räkna om watt till kilowattimmar (H2), kronor per månad och år (ingress), elpriset just nu (tabellinledning eller brödtext), vad en avfuktare drar (exempel + Faq).
- Behåll: formeln utskriven, elpris med källa och period, månad och år, exempel med maskin, byggfläkten, enheten i resultatet.
- Längd 850 till 1 050 plus Faq. Skissen alt under 125, behåll maskin, sladd, elmätare.
