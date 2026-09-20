# Faktablad: rakna/rotavdrag

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/rotavdrag.astro`, `src/components/kalkyl/RotavdragForm.astro`, `src/lib/kalkyl/rotavdrag.ts`, raden i `src/lib/kalkyl/register.ts`. Konstanterna, källorna, testerna och logiken rörs inte.

## Konstanter (renderas in, skrivs aldrig ut för hand)

- `ARET` = 2026. Bärs av VERKTYGSNAMN, titel, H1. Döps om varje december.
- `ROT_PROCENT` = 30. Källa Skatteverket, så fungerar rotavdraget: "Företaget får dra av högst 30 procent av arbetskostnaden."
- `ROT_PROCENT_HOJT` = 50, gällde färdiga arbeten där kunden betalade fakturan mellan `HOJNINGEN_FRAN` (12 maj 2025) och `HOJNINGEN_TILL` (31 december 2025). Källa Skatteverkets nyhet om höjningen.
- `ROT_TAK_KR` = 50 000 per person och år. `GEMENSAMT_TAK_KR` = 75 000 per person och år för rot och rut tillsammans. Källa Skatteverket: "Du kan få högst 75 000 kronor per år i rotavdrag och rutavdrag. Av den summan får högst 50 000 kronor vara rotavdrag."
- `SKATTER_SOM_RAKNAS_AV`: kommunal och statlig inkomstskatt, statlig fastighetsskatt och kommunal fastighetsavgift. Inte allmän pensionsavgift, begravningsavgift eller kyrkoavgift. Källa Skatteverkets FAQ-svar om hur mycket man måste tjäna.
- Vårt eget räkneexempel: 10 000 kr i arbete inkl. moms ger 3 000 kr avdrag och 7 000 kr att betala. Talen är våra, inte Skatteverkets. Testet förbjuder att de tillskrivs Skatteverket.
- Skatteverkets eget exempel (företagssidan): 10 000 kr exkl. moms = 12 500 kr med moms ger 3 750 kr avdrag. Vårt fält frågar efter beloppet med moms.
- `NYBYGGT_SPARRAR_AR` = 5: ombyggnad och tillbyggnad ger inget avdrag de första fem åren räknat från värdeåret (året huset byggdes färdigt). Reparation och underhåll ger avdrag oavsett ålder.
- `ANSOKAN_SENAST` = "31 januari året efter att du betalade". Företagets ansökan om utbetalning. Arbetet ska vara utfört.
- Standardvärden: 100 000 kr arbete, 50 000 kr material, en ägare, inget utnyttjat, ingen skatt angiven. En ägare är det försiktiga valet.
- Gränser: 0 till 5 000 000 kr på arbete, material och skatt; 1 till 4 ägare; 0 till 500 000 kr utnyttjat. Rimlighetskontroll, inte Skatteverkets regler. Skatteverket sätter ingen gräns för antalet ägare.
- Ägarval: En, Två, Tre, Fyra.

## Regler i "Därför blev svaret så" (slag och innehåll, sju rader)

1. arbete: bara arbetskostnaden ger avdrag; material utanför (med belopp om material > 0); maskinell utrustning undantagen med namn: grävmaskiner, borraggregat. Källa: Skatteverket, ger arbetet rätt till rotavdrag.
2. procent: högst 30 % av arbetskostnaden; på X kr blir det Y kr innan tak. Källa: så fungerar rotavdraget.
3. datum: dagen du betalar avgör, inte fakturans datum. 50 procent gällde 12 maj 2025 till 31 december 2025. Betalar du i dag gäller 30 procent. Arbetet utfört, ansökan senast 31 januari året efter. Källa: regelsidan (SKATTEVERKET_ROTAVDRAGET), inte nyheten. Testet kräver: "12 maj 2025", "31 december 2025", "50 procent", "30 procent", "dagen du betalar", ANSOKAN_SENAST-strängen, inte "när hantverkaren" eller "när arbetet gjordes".
4. arbete (femårsregeln): yngre än 5 år, värdeåret, reparation och underhåll. Testet kräver: "yngre än 5 år", "värdeåret", "[Rr]eparation och underhåll".
5. tak: 50 000 kr per person och år, antal ägare, totalt tak, ev. utnyttjat. Källa: så fungerar rotavdraget.
6. tak: rot och rut tillsammans 75 000 kr per person och år, varav rot 50 000. Totalt med ägare. Ev. utnyttjat rut. Källa: rot och rut.
7. skatt: aldrig större än skatten; räknas av mot SKATTER_SOM_RAKNAS_AV. Utan ifylld skatt: testet kräver "inte fyllt i någon skatt" och "inte vägd"; med skatt får "inte vägd" inte förekomma.
8. arbete (villkor): äga bostaden under perioden, bo i den eller förälder, 18 år vid årets slut, obegränsat skattskyldig, kort eller överföring; hyrd bostad ger inget rotavdrag; kontanter, eget arbete, närstående ger inget. Testet kräver: "äga bostaden", "bo i den", "obegränsat skattskyldig", "hyrd bostad ger inget rotavdrag", "kort eller överföring", "närstående", "18 år".

Alla regler: kalla matchar /Skatteverket/, url på skatteverket.se, text > 40 tecken. Slagen arbete, procent, datum, tak, skatt ska alla finnas.

## Gör inte det här (fem råd, ordning låst av testet)

0. /hela fakturan/: räkna inte procent på hela fakturan; material och resor utanför; halva notan material ger halva avdraget.
1. /maskinhyran/, "Maskinistens arbetade tid ger däremot avdrag", "var sin rad": maskinhyra ej i arbetsposten; grävmaskiner, borraggregat; be om faktura med två rader.
2. /dagen du betalar/: betala inte gammal faktura nu och räkna med högre sats; arbetet utfört; ansökan senast 31 januari året efter.
3. /nybyggt hus/i, "5 år", "värdeåret": inget rot på ombyggnad av hus yngre än fem år; reparation och underhåll går.
4. /äger och bor/: dela inte med icke-ägare; Skatteverket kräver båda; sambo utan andel hjälper inte.

## Besked i spalten (testet)

- begransatAv procent: rubriken matchar `${ROT_PROCENT} procent`.
- rot-tak: rubriken exakt 'Rot-taket slog i' (får skrivas om, då ändras testet).
- gemensamt-tak: exakt 'Det gemensamma taket slog i'.
- skatt: exakt 'Skatten sätter gränsen'.
- beskedRad < 120 tecken.

## Fel (testet)

- arbetskostnad: /mellan 0 och 5 000 000/.
- antalAgare: /hela år/.
- skatt: /lämna fältet tomt/.

## Antagandetabellen (16 rader, storhet, värde, grund, källa/url)

Procentsats 30 % (Källa, ROTAVDRAGET); tillfälliga nivån 50 % (HOJNINGEN); vad som daterar avdraget: betalningen (ROTAVDRAGET); momsen i räkneexemplen 3 750 kr inte 3 000 kr (FORETAG); nybyggt hus 5 år (ROTAVDRAGET); tak per person 50 000 (ROTAVDRAGET); gemensamt tak 75 000 (ROT_OCH_RUT); flera ägare ett tak var, aldrig över procentsatsen på totala arbetskostnaden (ROTAVDRAGET); skatten som tak, årets skatt (SKATTEN); material och resor inget avdrag (ROTAVDRAGET); maskinell utrustning undantagen (GER_RATT); krav på dig, äga och bo, betala elektroniskt (ROTAVDRAGET); skattefältet en förenkling (Antagande, RAKNA): Skatteverkets gräns är slutlig skatt efter jobbskatteavdrag, allmän pensionsavgift och underskott av kapital, vi frågar efter preliminär skatt, svaret något generöst; standardvärde en ägare (Antagande); utnyttjat belopp för alla ägare (Antagande); gränser fem miljoner, fyra ägare (Antagande); din egen uträkning, Skatteverkets e-tjänst (Källa, RAKNA).

Tabellfoten: innehåller "lästa 20 september 2026", ska bort som datum för vår kontroll. Behåll att procentsats och tak är årsberoende och att Antagande-raderna är våra.

## Brödtext, fakta

- Fakturamodellen: företaget drar av på fakturan, du betalar resten, företaget begär pengarna av Skatteverket. Därför syns avdraget på notan, inte i deklarationen.
- Sidan som rankar högst på "renovera kök kostnad" anger rot-taket till 75 000. Fel för 2026: det är rot plus rut. Under 2024 fanns ett tillfälligt eget rottak på 75 000 kr (det står så i texten; kalla det osäkert, det är sannolikt förklaringen, texten säger "förmodligen"). INTERN SEO-ANALYS i publik text, ska bort. Innehållet "75 000 är rot plus rut, inte rot" ska stå kvar.
- Utnyttjat rot äter av båda taken, rut bara av det gemensamma. Därför två fält.
- Två ägare bär 100 000 kr i rot (ROT_TAK_KR * 2). Villkor: båda äger när arbetet utförs och båda betalar.
- Skattereduktion: avräkning mot skatt. Skatteverket säger att det är omöjligt att ange exakt vilken inkomst som krävs (inkomstslag, kommunalskatt, underskott av kapital). Pensionär, studerande, föräldraledig: ofta skatten som sätter gränsen.
- Samma datumregel varje årsskifte: betala i januari = nya årets tak, december = gamla.
- Länk till Skatteverkets e-tjänst (SKATTEVERKET_RAKNA, rel nofollow).
- Så räknar vi, sex steg: 30 % av arbetet avrundat till hel krona; rot-tak = 50 000 × ägare minus utnyttjat rot; gemensamt tak = 75 000 × ägare minus utnyttjat rot och rut; skatt minus utnyttjat, tomt = vägs inte; avdraget = minsta av de fyra; att betala = arbete + material minus avdrag.
- Två saker verktyget inte ser: fakturans uppdelning (maskinhyra i arbetsposten), den verkliga slutskatten.
- Illustration `rakna/rotavdrag`: faktura med rader arbete, material, maskinhyra; belopp som våglinjer, summalinje; material och maskinhyra inringade "räknas inte"; arbetsraden gulmarkerad 30 procent, "bara arbetet ger avdrag".

## Interna länkar (alla kvar)

/rakna/dranering/, /grund/dranera-hus/, /golv/renovera-trappa/, /el/tillaggsisolera-vind/, /golv/bygga-trappa/, /rakna/kvadratmeter/, /om/sa-testar-vi/. Hoppankare #darfor-blev-svaret-sa och #sa-raknar-vi. Pennstreck-id: darfor-blev-svaret-sa, gor-inte-det-har, tre-tak, sa-raknar-vi, las-vidare.

## Faq (tre frågor i dag, checklistan vill ha tre till fyra med fulla svar)

1. Hur mycket är rotavdraget [år]? 30 %, 50 000, 75 000 gemensamt, skatten, material utanför, fem år.
2. Varför får jag inte 50 procent? Tillfällig, 12 maj till 31 december 2025, betalningen avgör.
3. Räknas material med? Nej. Olika rader. Maskinell utrustning.
Kandidater: kan båda ägarna dela, vad händer om skatten inte räcker.

## Formuläret

- Fakturafält: arbete (inkl. moms, bara arbetet; maskinhyra på egen rad), material (frivilligt; maskinhyra och resor hör hit).
- Ägare: räkna bara dem som står på bostaden och betalar; 50 000 var.
- Utnyttjat rot (summan för alla ägare; äter av båda taken), utnyttjat rut (städ, flytt, trädgård; bara gemensamma), preliminär skatt (frivilligt; platshållare "Vet inte").
- Knapp: Räkna ut.

## Metadata i dag

- Title: `Rotavdrag ${ARET}, räkna ut avdraget och vad du betalar` (52). OK.
- Description 172 tecken, ska ner till 120 till 155, Skatteverksmeningen får gå.
- H1: `Rotavdrag ${ARET}, vad du drar av och vad du faktiskt betalar`.
- Registret: namn "Hur mycket blir rotavdraget?", rad "Arbetskostnad, ägare och tak ger avdraget och vad du betalar." Rad ska bli mening med verb.
