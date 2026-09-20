# Fraser till Keyword Planner, körning 2 (2026-09-20)

Listan att klistra in ligger i `docs/data/keyword-planner-lista-2026-09-20.txt`, en fras per rad, 178 fraser. Det här dokumentet säger varför varje grupp är med och vad svaret ska användas till. Första körningen 2026-09-16 (56 fraser, `docs/data/keyword-stats-2026-09-16.csv`) är inte upprepad; ingen fras i listan finns där.

## Så körs den

1. Google Ads, Verktyg, Keyword Planner, **Hämta sökvolym och prognoser**. Klistra in hela textfilen.
2. Plats Sverige, språk svenska, period de senaste 24 månaderna, så att säsongen syns som förra gången.
3. Exportera som CSV till `docs/data/keyword-stats-2026-09-20.csv`. Filen blir UTF-16 med tabbar precis som den förra; koordinatorn läser in den och uppdaterar `docs/SOKORDSANALYS.md` med volym, YoY och toppmånad per fras.
4. Andra passet, frivilligt: **Upptäck nya sökord** med tio startord (dränering, källare, altan, tak, fasad, isolera, renovera, golv, gipsvägg, avfuktare). Det hittar fraserna vi inte tänkt på. Exportera till en egen fil.

## Grupperna, och vad svaret avgör

**1. Helgens sidor, uppskattade volymer (rad 1 till 80).** Nio sidor och tre verktyg gick ut 2026-09-19 och 20 med volymer som skribenterna uppskattade, eftersom Keyword Planner kräver annonskonto. Dränering, källarbesiktning, krypgrund, sprickor, källarväggen, inreda källaren, trädäck, måla ute, daggpunkt, elkostnad, kvadratmeter, gipsskruv, gipsplugg, bygglov och regeltabellen. Svaret säger om huvudfraserna valdes rätt och vilka sidofraser som är större än huvudfrasen, som hände med "avfuktare" mot "luftavfuktare" i första körningen.

**2. Renovering som tema (rad 81 till 92).** Christians fråga. De breda fraserna "renovera hus", "renovering kostnad", "renovera i vilken ordning" och rotavdraget. Svaret avgör om sajten ska ha en övergripande sida om renoveringsordning, alltså vilken pelare som kommer först i ett helt hus, och om rotavdragsverktyget (verktygsplanens rad 15) är värt att bygga.

**3. Kök och badrum, fasad och fönster, tak (rad 93 till 118).** Pelare som finns i registret men saknar innehåll: kök och badrum har en sida, fasad en, tak ingen. Fraserna är projekt som verb med "själv" och "kostnad", eftersom det är så svenskar söker enligt `docs/INNEHALLSARKITEKTUR.md`. Svaret rangordnar vilken pelare som byggs härnäst.

**4. Isolering och energi (rad 119 till 126).** Verktygsplanens rad 9, isolering och U-värde, plus tilläggsisolering som projekt. Pelaren el och energi är tom. Svaret avgör om verktyget byggs och om det får en artikel att bo i.

**5. Övriga verktyg i planen (rad 127 till 136).** Takvinkel och snölast (rad 11), kapoptimering (rad 12), trappa (rad 13), betong (rad 14). Alla utan mätt volym i dag.

**6. Golv och el (rad 137 till 152).** Två pelare utan innehåll. Golvfraserna är stora och kommersiella men utan dyra produkter; elfraserna är små men ofta besvarade fel på nätet.

**7. Vädra eller avfukta (rad 153 till 155).** Verktygsidén från 2026-09-19 som ingen svensk sida har. Tre fraser räcker för att se om någon söker på frågan.

**8. Verktyg och maskiner (rad 156 till 172).** Dyra produkter, alltså sajtens intäkt. Lasermätare och krysslaser är körda som "bäst i test", här står de nakna produktorden. Nytt: skruvautomat (trallskruvsidan pekar dit), fuktmätare och hygrometer (fyra sidor uppmanar läsaren att köpa en), byggfläkt och byggavfuktare, och tre sågar. Svaret säger vilka produktkategorier affiliateansvarig ska beställa först.

**9. Blanketter och beställning (rad 173 till 178).** Grannemedgivande, kontrollplan och frågor till hantverkaren, alltså verktygsidéerna som inte är kalkylatorer. Små fraser troligen, men billiga att bygga.

## Vad som inte är med

- Fraser som redan är körda (56 stycken).
- Laserklustrets "bäst i test"-fraser, som väntar på mätningar.
- Produktnamn och märken. De söks på men vi rankar inte på dem utan test.
- "Bäst i test" för kategorier utan dyra produkter.
