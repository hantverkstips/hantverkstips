# Faktablad: rakna/bygglov-altan

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/bygglov-altan.astro`, `src/components/kalkyl/BygglovAltanForm.astro`, `src/lib/kalkyl/bygglov-altan.ts`, raden i `src/lib/kalkyl/register.ts`. Lagrum, konstanter, logik och tester rörs inte.

## Lagrum och tal

- Plan- och bygglagen 9 kap. 19 §, i lydelse efter lag 2025:974, i kraft 1 december 2025 (REGLERNA_GALLER_FRAN). Bygglov inom detaljplan när golvet är över 1,8 m inom 3,6 m från en byggnad, eller över 1,2 m längre bort. Lagen säger "en byggnad", så garage och förråd räknas. Gamla 9 kap. 4 f § finns inte kvar. Friggebod, attefallshus, attefallsaltan borta ur lagtexten; anmälan och startbesked borta för lovfritt.
- Höjd mäts vid altanens yttersida från marken till golvets ovansida; sluttande tomt på nedsidan. Glest räcke räknas inte, tätt plank räknas (Länsstyrelsens handläggarstöd, räcke som plank över cirka 1,1 m när mindre än hälften är luft; antagande).
- Utanför detaljplan: inga mått (Boverket). Kvar: passa in i omgivningen, inte betydande olägenhet.
- Tomtgräns 4,5 m: Boverket vill ha skriftligt medgivande; PBL 9 kap. 34 och 35 §§ räknar upp murar och plank, inte altaner. Gata eller park: kommunen är grannen.
- Tak/väggar/inglasning = tillbyggnad, lovfri upp till 30 kvm på en- eller tvåbostadshus, alla lovfria tillbyggnader tillsammans, inte över taknock (PBL 9 kap. 10 §). Skärmtak 15 kvm-regeln borta.
- Altan ovanpå byggnad: räkna med lov (Mark- och miljööverdomstolen P 5608-13, ändring av fasaden). Utanför plan: kanske.
- Värdefullt hus/område: lov även för det som annars är fritt (PBL 9 kap. 37 och 38 §§).
- Byggsanktionsavgift: 0,25 prisbasbelopp + 0,005 per kvm (PBF 9 kap. 12 §). Prisbasbelopp 2026 59 200 kr (regeringen). 20 kvm: 14 800 + 5 920 = 20 720 kr. Nedsättning hälften, fjärdedel eller ingen om rättat innan nämnden tagit upp ärendet (PBL 11 kap. 51 till 58 §§). Tas ut även om du inte visste. Bygglovsavgift i efterhand tillkommer.
- Ingen anmälan för altan på plintar (PBF 6 kap. 1 §).
- Huset: en- eller tvåbostadshus (antagande). Standard: inom plan, 0,8 m, 0 m från hus, 4,5 m till gräns, inget tak, ej på tak, 20 kvm, ej värdefullt. Gränser: höjd 0–10, byggnad 0–100, gräns 0–200, yta 1–500.
- RAD_KOMMUNEN: kommunen har sista ordet; detaljplan eller områdesbestämmelser kan lägga till lovplikt (PBL 9 kap. 2 §).

## Testlåsta strängar

- SVAR_RUBRIK används av sidan med split(', '), och testet jämför mot konstanten; 'Troligen, fråga kommunen' asserteras ordagrant. Behåll de tre.
- lagrum innehåller: '9 kap. 19 §', 'Boverket', '9 kap. 10 §', 'P 5608-13', '9 kap. 34 och 35 §§', '9 kap. 37 och 38 §§'.
- Fel matchar /höjd/, /byggnad/, /tomtgränsen/, /yta/.

## Sidan

- Ingress: "Söker du på altan, höjd och bygglov är det plan- och bygglagen 9 kap. 19 § du landar i" ska bort (sökfras). "vägledning, inte ett myndighetsbeslut" ska överleva i annan form.
- Description: ordet regel tvetydigt, byt.
- H2 "Bygglov altan, de tre måtten och vad som ändrades 1 december 2025" bär huvudfrasen; datumet ska stå kvar i rubriken eller direkt under. Sidofraser 1,8 m och 3,6 m i ingress eller H2, PBL 9 kap. 19 § i H2 och tabellen, "vad ett bygge utan lov kostar" i brödtext under H2.
- Längd 1 304 + 62 (Faq). Mål 1 200–1 450. Faq: skriv ut svaren, lägg till tredje fråga om anmälan och startbesked.
- Illustration `rakna/bygglov-altan`: hus i sidovy, altan på plintar, 1,8 m upp, 3,6 m ut, 4,5 m till gräns. Alt 143 → under 125 med måtten kvar.
- Interna länkar: /altan/bygglov-altan/ (×2), /guider/altan/ (filtersida, kontrollera avsikt), /om/sa-testar-vi/. Faq-lank till /altan/bygglov-altan/.
- Pennstreck-id: darfor-blev-svaret-sa, gor-inte-det-har, bygglov-altan-2025, sa-bedomer-vi, las-vidare.

## Formuläret

- Detaljplan ja/nej/vet inte + hjälp. Höjd, avstånd byggnad, avstånd gräns, yta med hjälp. Tak tre val. På tak ja/nej. Värdefullt tre val + hjälp.

## Metadata

- Title `Behöver altanen bygglov? Svar med lagrum` (40) behålls. H1 `Behöver din altan bygglov? Fyll i måtten och få svar` behålls.
- Register: namn "Behöver altanen bygglov?" behålls; rad blir mening med verb.
