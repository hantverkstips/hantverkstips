# Faktablad: rakna/mala-ute

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/mala-ute.astro`, `src/components/kalkyl/MalaUteForm.astro`, `src/lib/kalkyl/mala-ute.ts`, raden i `src/lib/kalkyl/register.ts`. Konstanter, källor, logik och tester rörs inte.

## Konstanter och källor

- Lägsta temperatur, yta och luft: akrylat 7 °C (Beckers Perfekt Fasad; Alcro och Svenskt Trä samma), oljealkyd 7 °C (Beckers Perfekt Oljefärg), slamfärg 5 °C lägsta dygnstemperatur (Falu Rödfärg), träolja 10 °C yta (Beckers Elit Träolja). Gränsen gäller dygnet tills färgen torkat (Beckers och Alcro forum).
- Luftfuktighet stopp över 80 procent (Nordsjö Tinova Exterior, enda tal i procent). Torktider vid 23 °C och 50 %: akrylat 1 h klibbfri, 4 h övermålningsbar, regn 1 h; oljealkyd 2/6/2; slamfärg 1/24/1 (torr på ytan en timme, genomtorr ett dygn); träolja 8/16/24.
- Oljefärg härdar minst 24 h (antagande). Torktid dubbel per 8 °C under 23 (Beckers forum: dubblera vid cirka 15; kurvan vårt antagande). Fuktfaktor 1,5 över 70 % (antagande). Daggmarginal 2 h klibbfri före solnedgång (Beckers Perfekt Fasad; Alcro 1–2). Daggpunkt Magnus-formeln (Lawrence 2005). Daggpunkten håller i kväll om samma luftmassa (antagande). Ytan 2 °C under luften i natt (antagande). Regn inget inom ett dygn (Beckers). Direkt sol varning, inte stopp (Alcro, Beckers). Fuktkvot högst 16 % (Svenskt Trä, TräGuiden).
- Standard: 15 °C, 65 %, natt 8, start 10, sol 20, akrylat, skugga, inget regn. Ger daggpunkt 8,5, yta 6, faktor 2, klibbfri 2 h, sluta senast kl 16. Gränser: temp −10 till 40, RF 10–100, natt −10 till 40, timmar 0–23.
- Exempel i text: dag 15 °C/65 % → daggpunkt 8,5; natt 8 → panel 6; akrylat övermålningsbar 4 h i värme, tolv timmar sval septemberdag; akrylat klibbfri på en timme i värme, närmare tre timmar vid 12 °C; sol ner klockan sju → sista penseldrag vid tvåtiden. Panel efter vinter ofta över 16 % fuktkvot i veckor; mät med resistansmätare på skuggsidan. Alcro: klibbig, blåsor, flammig kulör.

## Testlåsta strängar

- Regeltexter: /Daggpunkten är/; "ytan går ner till 1 grad i natt"; aldrig "1 grader". /Natten går ner/ med "Slamfärgen torkar igenom först nästa dag, så natten ingår alltid i torktiden", "Träoljan torkar igenom först nästa dag", "härdar med syre", "övermålningsbar först kl 20"; slamfärgsfallet får inte innehålla klockslag/i morgon/om N dygn. /Du börjar kl 13/ + "behöver 18,4 timmar till klibbfri" + "Det ryms inte i en dag. Börja i gryningen en varmare dag."; /Du börjar kl 17/ + "senaste klockslaget att sluta är redan kl 16".
- kalla: stoppregler med /kyla/ (natt), /Nordsjö/ (RF), /Rätt väder/ (regn), /Alcro/ (för sent), /datablad/ (temp).
- UTFALL_RUBRIK: 'Ja, måla', 'Ja, men sluta senast', 'Vänta'; stortTal 'Ja'/'Vänta'/klockslag. utfallRubrik = `Ja, men sluta senast ${klockslag}`.
- Fel: /temperaturen nu/, /luftfuktigheten/, /nattens lägsta/, /minus 10/, /hel timme/, /före du börjar/.
- Fem råd.

## Sidan

- H2 "Måla ute: temperatur, luftfuktighet och natten som avgör" har kolonform, skriv om; behåll måla ute och temperatur. Tre H3 behålls. Längd 1 409 → 1 100–1 300.
- Illustration `rakna/mala-ute`: panel som stryks med pensel medan solen går ner, 15 grader, 65 procent, daggpunkt 8,5. Alt 133 → under 125.
- Tfoot: "hämtade 17 september 2026" är vårt läsdatum.
- "vår kurva, vårt tal, vår erfarenhet, vår tolkning" → Christian.
- Interna länkar: /rakna/daggpunkt/, /fukt/luftfuktighet-inomhus/ (×2), /fasad/dreva-fonster/ (×2), /om/sa-testar-vi/. Inga inlänkar från innehåll (föräldralös).
- Pennstreck-id: darfor-blev-svaret-sa, gor-inte-det-har, mala-ute-temperatur, sa-raknar-vi, las-vidare.
- Faq tre: hur kallt; 80 procent; på kvällen.

## Formuläret

- Temperatur nu, luftfuktighet nu, lägsta i natt; klockslagen start och solnedgång (hela timmar); färgtyp fyra val; yta skugga/sol; regn inom 24 h.

## Metadata

- Title `Kan du måla ute i dag? Temperatur och dagg` (42) behålls. H1 ligger nära title, skriv om H1.
- Description 137, substantivuppräkning; skriv om med verb, behåll måla ute, temperatur, ja/nej för dagen.
- Register: namn "Kan du måla ute i dag?" behålls; rad blir mening med verb.
