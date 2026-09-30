# Affiliate, /fukt/avfuktare-vind/, 2026-09-30

Beslut 6 i `docs/briefer/affiliate-fukt-2026-09-30.md`, för omgång B (deadline 30 november). Underlag: `docs/briefer/underlag-avfuktare-vind-2026-10.md` (underlagsarbetaren 2026-09-30, alla priser, lager och adresser lästa samma dag), `docs/briefer/seo-checklista-2026-09-30/avfuktare-vind.md`, skillen `affiliate`. Fröskript: `supabase/seed-produkter-avfuktare-vind-2026-10.sql`, inte körd. Inga innehållsfiler ändrade.

En rättelse till beslut 6: Wood's SW-serien är kondens, inte sorption, och var aldrig kandidat.

## Beslut

**Sidan blir köpguide.** Proffsmagasinet har 13 sorptionsavfuktare, och alla klarar de fyra kraven på papperet (sorption, drift under +5 °C, hygrostat, våtluftsutlopp). Efter att tillverkarens egna förbehåll prövats står fyra maskiner kvar, och tre av dem blir val. Det är fler än två, så gränsen för problemguide nås inte.

### Produkterna, fyra

| Slug | Maskin | Pris 30/9 | Lager 30/9 | Varför den står här |
|---|---|---|---|---|
| `fresh-d800` | Fresh D-800 | 7 250 kr | i lager | Billigaste sorptionsmaskinen. Fresh nämner vindar. −20 till +40 °C, inbyggd hygrostat och uttag för extern. Enda tillverkaren som tillåter montering på vägg eller tak, i alla riktningar. Våtluftskanalen får vara högst 0,6 m, så maskinen måste sitta intill gavelns ventil |
| `fresh-d1200` | Fresh D-1200 | 10 995 kr | i lager | Samma maskin i större storlek: 10 l/dygn mot 6 vid 27 °C och 60 %, våtluft högst 1,0 m och torrluft i kanal upp till 3 m. För vinden där maskinen inte kan sitta intill gaveln |
| `drybox-x4` | Drybox X4 | 12 763 kr, plus tillbehörspaket 2 496 kr | i lager | Den enda tillverkaren med en egen installationsanvisning för vind: täta bjälklag, vindslucka och takfotsventilation först, maskinen vid husets kortsida, våtluften ut genom ventil lägre än maskinen. Mögelläge som håller ungefär 70 eller 80 % under 0 °C. Slangarna ingår inte; tillbehörspaketet X685000 krävs |
| `acetec-evodry-rcf-12-g1` | Acetec EvoDry RCF 12 G1 | 15 455 kr | beställning, skickas 1/10 | Den enda i sortimentet där tillverkaren visar kapaciteten i kyla (ungefär 6,7 l/dygn vid 0 °C och 60 %, avläst ur Acetecs diagram). Acetec nämner kallvind. 2 m våtluftsslang ingår och ska enligt Acetec inte förlängas |

Priset för X4 skrivs som maskin plus tillbehörspaket, 15 259 kr, eftersom maskinen inte kan installeras utan slangarna. `drybox-x685000` får knapp bara bredvid X4 och aldrig ensam, som styrskenan bredvid sänksågen.

### Våra val, tre

| Slug | Uppgift för etiketten | forVem, sakinnehåll |
|---|---|---|
| `fresh-d800` | hängs intill gaveln | liten kallvind där maskinen kan sitta på gavelväggen eller i en takstol vid ventilen, eftersom våtluften får gå högst 0,6 m |
| `drybox-x4` | villavinden med tillverkarens vindsanvisning | vanlig villavind där bjälklag och takfot tätas enligt Drybox anvisning och maskinen står på bjälklaget vid kortsidan |
| `acetec-evodry-rcf-12-g1` | kapaciteten i kyla angiven | vinden som ligger under några plusgrader stora delar av vintern, där läsaren vill veta vad maskinen tar vid 0 °C |

Hantverkaren skriver etiketterna och `forVem` i Christians röst. Villkor: konkreta, aldrig "bäst", "budget", "test" eller "testvinnare" (SEO punkt 12). Ordningen är den ovan, billigast först. D-1200 får kort där texten nämner den, till exempel när 0,6 m inte räcker.

Varför de tre: var och en är den billigaste som löser sin uppgift fullt ut. D-800 är billigast och den enda som kan hängas. X4 är den billigaste med tillverkarens egen anvisning för vind. RCF 12 är den enda med kapacitet i kyla i tillverkarens underlag.

### Utelämnade, med skäl

- **Acetec EvoDry 6H 2.0** (9 995 kr): Acetec skriver att den "inte är avsedd för krypgrund eller kallvind". Inget kort, fast butiken listar den för kallvind. Samma sak som SEO punkt 12.
- **Drybox X2** (10 878 kr): X4 utan display och program. Hur X2 reglerar i kyla säger Drybox inte; programmen gäller "endast modell X4".
- **Drybox X5** (15 374 kr): 67 dB på 3 m mot X4:s 52, och kapaciteten 24 l saknar villkor. Står inte för en uppgift som X4 eller RCF 12 inte löser.
- **Acetec RCF 20 G1** (19 995 kr): ingen kapacitet i kyla, och Acetecs egna ljuduppgifter säger 48 och 56 dBA. RCF 12 är billigare och bättre belagd för just kylan.
- **El-Björn ASE 300** (27 801 kr): byggavfuktare, vind nämns inte, och att den är Aerials ASE 300 är inte bekräftat.
- **Acetec 30, 60, 120 och 180 Pro** (75 708–166 362 kr): 2–10,6 kW, industriformat.
- **Drybox DryAttic** (14 999 kr) och **Trygghetsvakten**: styrd ventilation med värmekabel, inte sorption. Trygghetsvakten säljs inte av Proffsmagasinet och beskrivs utan kort och utan butikslänk, som SEO säger. DryAttic säljs av Proffsmagasinet men är samma typ; den får inget kort i omgång B, eftersom beslut 6 gäller sorption. Om sidan beskriver styrd ventilation som ett likvärdigt alternativ prövar jag DryAttic på nytt, och då med samma krav på tillverkarens energiuppgift och anvisning.

## DryAttic, tillägg 2026-09-30

Sidan (utkastet 2026-09-30, H2 "Sorptionsavfuktare eller styrd ventilation", stycket på rad 133) rekommenderar styrd ventilation med värme som ett eget val. Enligt villkoret ovan prövades DryAttic på nytt, mot tillverkarens energiuppgift och anvisning. Underlag: `underlag-avfuktare-vind-2026-10.md`, avsnittet "Drybox DryAttic, 2026-09-30". Fröskript: `supabase/seed-produkter-dryattic-2026-10.sql`, inte körd.

**Beslut: kort.** `drybox-dryattic`, 14 999 kr, beställningsvara ("Skickas om 9-14 dagar") hos Proffsmagasinet 2026-09-30, lagras som `restnoterad`. Kortet står efter stycket som väljer mellan sorption och styrd ventilation, inte i H2:n om sorptionsavfuktarna. Kategori `vindsventilation`, utan kategorisida, så att den inte hamnar i tabellen på `/luftavfuktare/`. Den läggs i `produkter` i frontmatter.

Varför: Drybox har produktblad (2026-04), installationsmanual för vind och energiuppgift (250–400 kWh per år för 100 kvm). Den har samma delar som Trygghetsvakten Vind Classic (fläkt, 50 m värmekabel, backventil, ljuddämpare), som Proffsmagasinet inte säljer, och kostar 3 981 kr mindre än Vind Classics 18 980 kr i Trygghetsvaktens egen butik. För den läsare sidan själv skickar till styrd ventilation är den det köpbara svaret, och billigast.

Etikett efter uppgiften, till exempel att den håller elen nere på en vind utan påväxt. Hantverkaren skriver den.

Villkor:
1. Energin står som tillverkarens uppgift. Produktbladet anger ca 400 kWh och 4 kWh per kvm och år, drybox.se 250–400 kWh för 100 kvm, och Drybox säger själva att läckage från bostaden höjer förbrukningen. Inget oberoende mätvärde.
2. Ytan är 10–100 kvm enligt Drybox; större vindar kräver fler slingor eller fläktar. Inget tal i kubikmeter.
3. Ljud: inget dB-tal. Proffsmagasinets gamla produktblad skriver "ljudlös"; Drybox har strukit ordet. Sidan skriver inte att den är tyst.
4. Garanti: 2 år, 5 år vid registrering (Drybox nyaste källor). Inte butikens 7 år.
5. El: om anslutningen är stickpropp eller fast står inte. Sidan skriver inte att den kan kopplas in utan elinstallatör.
6. Tätningen: Drybox kräver tätad takfot (manualen s. 2–3), med ett utlopp mitt emot fläkten. Samma sak som sidan redan säger om X4.
7. Tröskelvärdena för fläkt och värme anges inte; börvärdet är "≤ 60 % RF".
8. Trygghetsvakten står kvar utan kort och utan butikslänk.

## Villkor för sidan

1. **Granskning på datablad.** Inga egna mätningar, inget "test", "mätt" eller "jag testade".
2. **Kapaciteten jämförs bara vid samma villkor.** D-800 och D-1200 anger 27 °C och 60 %, RCF 12 anger 20 °C och 60 %, Drybox anger inget villkor. Tabellen får inte ställa talen bredvid varandra som om de vore jämförbara; villkoret står i varje ruta.
3. **RCF 12:s värde vid 0 °C är vår avläsning ur Acetecs diagram**, ungefärligt, och sidan säger det.
4. **Drybox:** våtluftsstosen är 63 mm i tillverkarens PDF:er och 50 mm på drybox.se; garantin är 2 år med förlängning enligt Drybox, 7 år enligt butiken. Sidan följer tillverkarens PDF:er och skriver inte butikens 7 år.
5. **Tätningen först.** Korten står efter avsnittet om tätning och slang (SEO H2 4) och efter dimensioneringen. Drybox anvisning är tillverkarens, inte en oberoende källa, och ska stå så.
6. **Installation:** Acetec skriver att RCF ska installeras av kvalificerad person. Sidan säger det vid RCF-kortet.
7. **Kategorisidan `/luftavfuktare/`** får D-1200 och RCF 12 i tabellen när fröet körs, eftersom mallen visar alla aktiva produkter i kategorin. Båda har tillverkarens datablad och klarar det. Nya spec-nycklar (`hygrostat`, `vatluft`, `vatluft_max_m`, `montering`, `kapacitet_kyla`); om de visas i tabellen är UX och bygge-agentens beslut.
8. Reklambandet sätts av mallen. Inga nya skript, inga externa resurser, inga produktbilder.

## Öppet innan publicering

- Priser och lager läses om samma dag som sidan publiceras. RCF 12 var beställningsvara med två på väg in.
- Drybox kapacitet 19 l saknar villkor; X4:s effekt 850 eller 805 W.
- Fresh D-800: om 0,6 m räcker beror på vinden; Fresh säger inget om vind specifikt utöver användningslistan.
- Ingen oberoende källa (RISE, Svenskt Trä, försäkringsbolag) om sorptionsavfuktare på kallvind hittades. SBUF 10:05 (omkring 2010) gäller styrd ventilation.

## Vad som kräver Christian

Inget.
