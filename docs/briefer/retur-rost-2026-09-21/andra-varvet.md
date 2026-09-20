# Andra varvet i rösten (2026-09-21)

Gäller alla hantverkare-agenter. Första varvet lyfte innehållet från 3,0 till 4,1 och verktygen från 3,1 till 3,6 i läsarnas betyg. Det som är kvar är mönster som syns först när man läser tio sidor i rad, plus strategernas punkter. Returerna ligger i den här mappen:

- `fukt-och-produkter.md`, `altan-grund-fasad.md`, `golv-inomhus-kok-el.md`, `verktyg-och-sidor.md`: strategernas punkter, ett H2 per sida. Varje punkt på dina sidor rättas som den står.
- `lasare-innehall.md` och `lasare-verktyg.md`: läsarnas citat per sida och avsnittet "Återkommande mönster". Varje citerad mening på dina sidor skrivs om. Läs mönsteravsnittet i sin helhet, det är det viktigaste.

## Mönstren som ska brytas i innehållet

1. **"X avgör Y."** Ordet avgör står 101 gånger och styr 44. Nästan varje avsnitt utser en avgörande faktor. Säg saken på annat sätt: "Titta på höjden först, för under 1,2 meter slipper du lovet." Högst ett par "avgör" per sida.
2. **"innan du"** står 106 gånger. Halvera på dina sidor.
3. **Samma inledning.** Platt påstående, sedan "alla tror fel"-vändningen, sedan en mening om vad sidan handlar om. Slipa-parkettgolv och slipa-bankskiva har ordagrant samma första mening med utbytta substantiv. Varje sida öppnar på sitt eget sätt: rakt på svaret, med situationen, med felet folk gör, med frågan, men inte alla likadant.
4. **Samma avslutning.** Tre meningar där den sista är kort och lägger en tidsbomb i framtiden ("Ett golv du stressat fram tittar du på i tio år"). Ta bort den på de flesta sidor. En sida kan sluta mitt i ett råd.
5. **Källformeln** "Branschorganisationen Svenskt Trä", "Gipstillverkaren Norgips", 118 gånger. Presentera källan första gången på sidan, sedan bara namnet. Variera formen: "Svenskt Trä, som är branschens egen organisation, skriver", "Norgips skriver i sin montagehandbok".
6. **Rubrikformerna** siffra plus substantiv, "Så ...", "Vad ...", "När ...", imperativ plus "innan du". Läs dina rubriker i följd och byt de som följer samma form som grannens.
7. **Dubbletter över sidor.** "Så granskade jag" som rubrik tre gånger, "Fyra lägen där jag själv skulle sluta hålla på" ordagrant på två sidor, samma bilder på flera sidor (växthuset i juli, värmefläkten i cirkel, "du har köpt en elräkning", hyllan med målarburkar, "papper utan siffror är ett säljbesök"). Behåll bilden på en sida, skriv annat på de andra.
8. **Språkfelen** i läsarens lista rättas: "med relativ luftfuktighet menad", "tre gånger mindre vatten", "slutar pengarna arbeta", "Så raden som nästan aldrig står med", kommasplitsen i bygglov-altan, "Maskinen gör samma U-värde av sextio procent så mycket ull".

## Mönstren som ska brytas i verktygen

1. **"Alltså" som förklaringsmekanik** står 168 gånger i verktygstexterna, 19 i dranering.ts, 15 i altan.ts, 13 var i trappa.ts och kallare.ts. Förklara fackordet i egen mening eller byt ut det. Högst ett par "alltså" per verktyg, och då som bindeord.
2. **En person, inte två.** Grupp ett säger "Jag räknar med", "Vad siffrorna vilar på"; grupp två säger "Verktyget räknar med", "Vad svaret vilar på". Alla fjorton använder från och med nu "Jag räknar med", "Vad siffrorna vilar på" och ankaret "Så testar jag". Grupp två har motiveringslistor med källa per rad och tabellfot som grupp ett saknar; det är bra, grupp ett lägger till en källrad per motivering där den saknas.
3. **Slutklämmen under "Så räknar jag"** är identisk i tre steg på alla fjorton: bekännelsen om svaga rader, "Tre saker kan verktyget inte se" numrerad, länken till metodsidan. Behåll innehållet, skriv det olika: på några sidor som ett stycke, på några som en rad per sak utan numrering, på några med det verktyget inte ser inbakat i "Därför blev svaret så".
4. **"Gör inte det här"** är samma mening 52 gånger: nekande imperativ, skäl, konsekvens. Variera: börja med situationen, med konsekvensen, med vad man gör i stället.
5. **Delningsrutan och standardvarningen** får vara identiska, de är gränssnitt.
6. **Rena fel:** gipsskruv.astro kör toLowerCase på beskedet så att C4, A2 och S-spets blir gemener; ta bort sänkningen eller bygg strängen så beteckningarna står rätt. Avfuktare.astro klistrar in hela radioknappens etikett i en mening ("Räknat på 96,0 m³ och 70 till 80 procent, det finns fuktfläckar och det luktar"); skriv meningen så att etiketten passar eller använd en kort form. Avfuktarens "utanför"-rutor säger "Läs guiden om krypgrunden först" men länken heter "Läs mer om fukt i huset" och går någon annanstans. Altans resultatspalt saknar besked helt; ge den en mening med verb som de andra. Källarkortet i registret ("vad plasten på väggen visade") går inte att förstå utan sidan; skriv det så att en granne fattar utan att ha hört talas om tejptestet. Sju verktyg länkar med ankaret "Så testar vi"; ska vara "Så testar jag".

## Innan du lämnar

`npm run kontrollera`, testerna för verktyg du rört, och en rad tillbaka till koordinatorn med vad du ändrat. Inget bygge.
