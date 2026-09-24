# Retur från SEO och GEO, pelaren El, 2026-09-24

Steg 5 i `ny-sida`. De tre sidorna är lästa punkt för punkt mot `docs/briefer/seo-checklista-2026-09-23/el.md`. Radnumren gäller filerna så som de låg 2026-09-24. `npm run kontrollera` ger 0 fel och inga varningar för de tre sidorna.

**Sju punkter, varav tre gäller bilder och en är en datumrutin till 1 oktober.** Ingen punkt i någon lista "Bättre än ettan" saknas, så ingen sida är stoppad av SEO. Punkterna 1, 2 och 5 (bilderna) stoppar inte publiceringen, eftersom huvudbilden inte står i listan "Bättre än ettan". Bilderna ska ändå beställas av UX och bygge och läggas in i nästa omgång.

---

## /el/jordfelsbrytare-loser-ut/

| Punkt | Utfall |
|---|---|
| 1. Adress och sidtyp | Inget att ändra. Problemguide, enkel, pelaren El. |
| 2. Huvudfras och sidofraser | Inget att ändra. Huvudfrasen står i seoTitle och i description ("jordfelsbrytaren löser ut"). "Slår ifrån" står i H1, "felsökning" i H2 rad 60, "när det regnar" i H2 rad 92, "testknappen" i H2 rad 118 och "jordfel" förklaras på rad 108. |
| 3. Title | Inget att ändra. 44 tecken, frasen först och obruten. |
| 4. Description | Inget att ändra. 150 tecken, med ordningen, Elsäkerhetsverket och elektrikern. |
| 5. H1 | Inget att ändra. Delar inte de tre första orden med title. |
| 6. H2-struktur | Inget att ändra. Kortsvaret kan citeras fristående, tabellen finns med rubrikrad, och gränsen mot behörig elinstallatör har egen H2. |
| 7. Längd | Inget att ändra. Cirka 2 130 ord med tabell och Faq, inom 1 500 till 2 200. |
| 8. Bilder | **Punkt 1**, se nedan. |
| 9. Interna länkar | Inget att ändra. Ut: `/el/byta-elcentral/` (rad 124), `/fukt/avfuktare-kallare/` och `/fukt/fukt-i-kallaren/` (rad 104), verktygskortet för rotavdrag (rad 151). In: avfuktare-kallare rad 209, avfuktare-krypgrund rad 258 och byta-elcentral rad 186. |
| 10. Strukturerad data och komponenter | Inget att ändra. En `<Varning>`, Faq med fem frågor som inte upprepar brödtexten. Den externa länken på rad 130 följer den nya konventionen (se beslut 1 nedan). |
| 11. Bättre än ettan | Alla fem finns: symptomtabellen (rad 82 till 88), fuktavsnittet med maskinerna och tumregeln (rad 92 till 104), lagen och ELSÄK-FS 2017:2 namngivna och länkade (rad 130 till 136), timpriserna dagtid och jour med datum (rad 142 till 147) och kortsvaret. Sidan har dessutom något ingen konkurrent har: att enbart felsökning inte ger rotavdrag (rad 140). |
| 12. Fällor | Inget att ändra. Allt görs med locket på (rad 62 och 136), inga konkurrentnamn i texten och ingen produkt. |

**Punkt 1. Huvudbilden saknas.** Frontmatter har varken `bild` eller `bildtext` (efter rad 13). Checklistan kräver en skiss av en elcentral med huvudbrytare, jordfelsbrytare med testknapp och grupper. När bilden finns ska den ha `bildAlt` på högst 125 tecken med orden "jordfelsbrytare" och "elcentral", och 30 mA och testknappen ska stå i `bildtext`. Beställs av UX och bygge. Stoppar inte publiceringen.

---

## /el/u-varde/

| Punkt | Utfall |
|---|---|
| 1. Adress och sidtyp | Inget att ändra. Kunskap, mellan, inga produkter. |
| 2. Huvudfras och sidofraser | Inget att ändra. "U-värde" står i seoTitle, H1 och kortsvar, "bra U-värde" i H2 rad 76, "Boverkets krav" i H2 rad 108, "räkna ut U-värdet" och lambdavärde i H2 rad 130 och rad 132, och "U-värdet på fönster" i H2 rad 207. |
| 3. Title | Inget att ändra. 44 tecken. Börjar varken med "Beräkna" eller med "Tilläggsisolera". |
| 4. Description | Inget att ändra nu. 148 tecken. Datumet står i **punkt 4**. |
| 5. H1 | Inget att ändra. |
| 6. H2-struktur | Inget att ändra. Räknaren `<Kalkylator namn="u-varde" />` ska läggas in efter rad 179, direkt efter det räknade exemplet, när `/rakna/u-varde/` är publicerad. Det finns ingen platshållare, vilket är rätt. |
| 7. Längd | Inget att ändra. Cirka 2 680 ord med sex tabeller och Faq. Utan tabellerna ligger brödtexten inom 1 800 till 2 600. Sidan ska inte växa mer innan räknaren tar över räknedelen. |
| 8. Bilder | **Punkt 2**, se nedan. |
| 9. Interna länkar | Inget att ändra. Ut: vindsidan (rad 187 och 244), elkostnadsräknaren (rad 203), krypgrundsidan (rad 205), dreva fönster (rad 236), källarväggen och daggpunktsräknaren (rad 248). In: tillaggsisolera-vind rad 77, isolera-krypgrund rad 111, isolera-kallarvagg rad 87 och dreva-fonster rad 156. |
| 10. Strukturerad data och komponenter | Inget att ändra. Alla tabeller har rubrikrad, enhet och en `Källa:`-rad. Formeln står i `<Markering>`. |
| 11. Bättre än ettan | Alla fem finns: formeln med tabeller för övergångsmotstånd och lambda och exemplet i sex steg med reglarna inräknade (rad 130 till 179), kWh och kronor med samma gradtimmar och samma elpris som grannsidorna (rad 181 till 205), BBR och BFS 2026:9 med beteckning, datum och övergångstid (rad 108 till 128), Uw, Ug och Uf med provstorleken (rad 207 till 213), och byggnadsdelarna i två tabeller (rad 82 och 96). Tegel saknas i lambdatabellen, och sidan säger varför (rad 164). Det godtar jag. |
| 12. Fällor | Inget att ändra. Ingen H2 om att tilläggsisolera vinden, inga kostnader för vind, ingen produkt med pris. |

**Punkt 2. Huvudbilden saknas.** Checklistan kräver ett snitt genom en yttervägg med skikten märkta och R-värdet per skikt, så att exemplet på rad 172 till 177 går att följa i bilden. `bildAlt` ska vara högst 125 tecken med "U-värde" och "vägg", och talen ska stå i `bildtext`. Beställs av UX och bygge. Stoppar inte publiceringen.

**Punkt 3. Ortstabellen ska ha ett tal per ort** (rad 189 till 199). Så som tabellen står nu är den inte begriplig. Stockholm har två tal i samma rad (81 357 och 89 280), och kolumnen "Jämfört med Stockholm" säger "samma" bredvid ett tal som inte är detsamma som det läsaren ska räkna med. En AI som lyfter tabellen kan lika gärna citera 81 357 som 89 280, och då säger sajten två saker om Stockholm. Så här ska det se ut:

- Två kolumner med tal: gradtimmar att räkna med (89 280, 79 300, 77 300, 121 100, 135 200) och jämfört med Stockholm (utgångspunkt, 11 procent färre, 13 procent färre, 36 procent fler, 51 procent fler).
- Kolumnen med den egna SMHI-räkningen stryks ur tabellen. Talet 81 357 får stå i stycket på rad 199, där sidan förklarar varför metoden med månadsmedel ger för få gradtimmar.
- Källraden (rad 197) säger att Stockholm är Rockwools 89 280 och att de andra orterna är det talet med ortens skillnad pålagd, där skillnaden är egen räkning ur SMHI:s normaltemperaturer 1991 till 2020 med gränsen 17 grader.

Talen och metoden ändras inte, bara hur de visas.

**Punkt 4. Datumrutin den 1 oktober 2026.** Görs inte före publiceringen, men sidan får inte stå kvar oförändrad efter den 30 september. Den dagen byter "i dag" betydelse på följande ställen:

- description (rad 4)
- kortsvaret (rad 13)
- rad 110
- tabellhuvudet på rad 116 ("BBR 9:92, i dag")
- rad 228
- Faq-svaren på rad 251 och 253

Sätt `uppdaterad: 2026-10-01` och skriv i texten att BFS 2026:9 gäller sedan den 1 oktober 2026 och att BBR gäller under övergångstiden till den 1 oktober 2027. Det är GEO-regeln om uppdaterat datum som stämmer (skillen avsnitt 5). Koordinatorn lägger in det som en uppgift med datum.

---

## /el/byta-elcentral/

| Punkt | Utfall |
|---|---|
| 1. Adress och sidtyp | Inget att ändra. Problemguide, enkel. |
| 2. Huvudfras och sidofraser | Inget att ändra. "Byta elcentral" står i seoTitle, description och H2 rad 109, "proppskåp" i H1 och H2 rad 76, "byta elcentral själv" i H2 rad 93 och "automatsäkringar" i H1 och på rad 157. |
| 3. Title | Inget att ändra. 42 tecken, utan årtal. |
| 4. Description | Inget att ändra. 155 tecken, precis på gränsen. Den får inte bli längre vid en rättning. |
| 5. H1 | Inget att ändra. Den tar "proppskåp" och title tar "byta elcentral", som checklistan föreslog. |
| 6. H2-struktur | Inget att ändra. Alla sex avsnitt finns, och Faq har fem frågor. |
| 7. Längd | Inget att ändra. Cirka 1 890 ord. |
| 8. Bilder | **Punkt 5**, se nedan. |
| 9. Interna länkar | Inget att ändra. Ut: inreda källare (rad 89), räknaren för rotavdrag (rad 148) och jordfelssidan (rad 186). In: jordfelssidan rad 124, bygga-innervagg rad 73 och inreda-kallare rad 247. |
| 10. Strukturerad data och komponenter | Inget att ändra. `<Kalkylator namn="rotavdrag" />` står direkt efter kostnadsavsnittet. Den externa länken på rad 101 följer konventionen. |
| 11. Bättre än ettan | Alla fem finns, men punkt 1 är löst på ett annat sätt än checklistan skrev. Se beslut 3 och **punkt 7**. Tillägg utöver fältet: grön teknik gäller inte centralbytet (rad 144), kontrollen av räkningen efter rotavdrag (rad 142) och nätbolagets avgift för högre huvudsäkring (rad 136). |
| 12. Fällor | Inget att ändra. Inga moment inne i centralen, priserna står med datum, och firmorna står som källa, inte som rekommendation (rad 111). |

**Punkt 5. Huvudbilden saknas.** Checklistan kräver ett proppskåp bredvid en ny central med automatsäkringar och jordfelsbrytare. `bildAlt` ska vara högst 125 tecken med "elcentral" och "proppskåp", och årtal och märkning ska stå i `bildtext`. Beställs av UX och bygge. Stoppar inte publiceringen.

**Punkt 6. Två källor i texten saknas i `kallor`.** Clas Fixare nämns på rad 134 och Vattenfall på rad 138, men ingen av dem står i källistan (rad 16 till 68). Lägg till clasfixare.se/byta-elcentral/ med läsdatum 2026-09-22. För Vattenfall läggs sidan till där uppgiften står, eller så stryks Vattenfall ur meningen om den inte går att belägga. Varje namngiven källa ska finnas i `kallor`, för det är den signal vi har mot ett fält där ingen anger källor.

**Punkt 7. Posttabellen ska ha en kolumn med belopp** (rad 128 till 136). Lägg till en tredje kolumn med kronor där sidan redan har ett tal:

- arbete 8 000 och material 4 000 för en villa, från El & Säkerhet Syd (rad 116)
- huvudsäkringen 12 825 kr, från Mälarenergi Elnät
- felsökning av jordfel efter bytet: elektrikerns timpris utan rotavdrag, med länk till jordfelssidans pristabell eller med talet därifrån

Där sidan saknar tal står "anges inte". Inga nya tal behöver tas fram. Kolumnen gör tabellen till det checklistan bad om, alltså ett pris per post, med de tal som faktiskt finns.

---

## Tre beslut

**1. Externa länkar i brödtext.** Beslutet står nu i skillen `seo-och-geo` avsnitt 4. I korthet:

- En extern länk läggs bara när läsaren ska göra något på den andra sidan. Målet ska vara en myndighet, lagtext eller ett offentligt register, aldrig en firma, en butik eller ett forum.
- Länken skrivs som vanlig Markdown, utan `rel` och utan `target`. Den följs och öppnas i samma flik.
- Högst en extern länk per H2, och samma adress ska också stå i `kallor`.
- Källistan i mallen behåller `rel="nofollow"`.
- Inget i mallen behöver ändras.

Båda länkarna på sidorna följer redan konventionen: "vad får jag göra själv med el" på jordfelssidan rad 130 och "Kolla elföretaget" på elcentralsidan rad 101.

**2. Ortstabellen.** Så som den står nu är den inte begriplig. Ett tal per ort, det tal läsaren ska räkna med, och SMHI-räkningen flyttas till texten och källraden. Se punkt 3. Talen och metoden står sig.

**3. Priser per post från tre firmor.** Sidans lösning uppfyller intentionen. Den som söker "byta elcentral" vill veta vad det kostar och varför firmornas spann skiljer sig tio gånger. Firmatabellen ger priserna med datum och med före och efter rotavdrag, och posttabellen förklarar spannet genom att visa vad som ingår och vad som tillkommer. Att bara en firma delar upp arbete och material är en uppgift om fältet, inte en brist hos oss, och sidan säger det rakt ut (rad 126). Kravet i checklistan var skrivet innan vi visste att uppdelningen inte finns hos firmorna. Jag godtar lösningen med punkt 7 som enda tillägg.
