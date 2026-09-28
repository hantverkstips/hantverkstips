# Faktablad: /badrum/mala-kakel/

Ny projektguide. Allt hämtat och läst 2026-09-28 om inget annat står. Egen räkning är märkt med formel. **Utdrag** = uppgiften kommer ur sökmotorns utdrag, sidan är inte läst. Checklista: `docs/briefer/seo-checklista-2026-09-29/badrum.md`, avsnittet /badrum/mala-kakel/. Delar källor med `kunskap-vatrumsfarg.md`.

- Huvudfras: **måla kakel**, 2 400/mån (−33 % på ett år, topp sep–okt 3 600). Sidofraser: måla kakel badrum 1 000, måla kakel kök 880, måla kakel i dusch 140, måla kakelfogar 90.
- Sidtyp: guider, `typ: projektguide`, `pelare: kok`, `niva: enkel`, `src/content/guider/kok/mala-kakel.mdx` (SEO-beslut 2026-09-29, SOKORDSANALYS 8.9 beslut 5). Hubgrupp: Gör det själv.
- Beslut som styr: SOKORDSANALYS 8.9 beslut 4, **nej till målat kakel i duschen**. Proffsmagasinet nämns inte och länkas inte, inte heller i `kallor`.
- Produkter med slug: **ingen slug finns ännu** för excenterslip (ingen rad i `supabase/seed-*.sql`). Kandidater i avsnitt 9. Kortet kräver affiliateagentens godkännande.

---

## 1. Branschreglerna: MVK, gällande version

**Källa:** Måleribranschens Våtrumskontroll (MVK), *Måleribranschens regler för våtrum*, "Gäller från och med 2026-01-01", 22 s. https://www.vatrumsmalning.se/s/MVK-BR-2026-01-01-lcaf.pdf (länkad från startsidan; samma dokument listas på https://www.vatrumsmalning.se/dokument-och-lankar som "Måleribranschens regler för våtrum (2026-01-01)", fil `/s/MVK-BR-2026-01-01.pdf`). Hämtad och läst i sin helhet.

- **Det finns en nyare text än 2013.** Ikraftträdande (s. 4): "Måleribranschens regler för våtrum gäller fr o m 2026-01-01 och ersätter tidigare regler (Utgåva 2021)." 2013-utgåvan ligger kvar på dokumentsidan som historik ("senast reviderad 2013"). Teknos anvisning "enligt 2013" i checklistan är alltså två utgåvor gammal.
- Vem: MVK är ett samarbete mellan SVEFF (Sveriges Färg och Lim Företagare) och Måleriföretagen i Sverige (reglerna s. 2; https://www.vatrumsmalning.se/startsida/om-mvk).
- Grund i lag (s. 2): "Branschreglerna är en praktisk tillämpning av Boverkets Byggregler. Reglerna bygger på funktionskrav på ytskikt i våtrum enligt gällande Plan- och Bygglag (PBL) Boverkets byggregler – BFS 2024:2–8." (MVK:s egen beteckning, ordagrant.)
- Nyheter 2026 (s. 4): överlapp mellan system "minst 30 mm" ändrat till "cirka 30 mm"; bilderna är "informativa och inte styrande"; MVK har tolkningsföreträde.
- Teknisk livslängd (s. 2): ett MVK-godkänt system har "en teknisk livslängd om minst 10 år", förutsatt skötsel och underhåll av tätningar och genomföringar.

### 1a. Klasser och zoner (s. 7–9)

| Klass | Betyder | Zon |
|---|---|---|
| VT | "Vattentätt ytskikt" | Våtzon 1 |
| VA | "Vattenavvisande ytskikt" | Våtzon 2 |

- "System som uppfyller kraven för klass VT uppfyller även kraven för klass VA."
- "Beställaren ansvarar för att klassning av våtzoner görs. Nedanstående krav är minimirekommendationer för att uppfylla Boverkets krav".
- **Våtzon 1, exempel:** "Väggar från golv till tak vid badkar och duschplats samt minst 1 meter utanför dessa"; insida och gavel av fast monterad skärmvägg mot bad- och duschplats (minst 2 m hög; når den inte taket är ovansidan våtzon 1); "Väggar i övriga utrymmen som ska kunna rengöras med vattenspolning eller utsättas för vattenspill till exempel bakom vägghängd WC." Regeltext: **"Ytor i våtzon 1 ska målas med VT system."**
- **Våtzon 2, exempel:** övriga väggar i bad- och duschrum; väggar i tvättstugor och utrymmen för varmvattenberedare; väggar som utsätts för vattenstänk, våtrengöring, kondensvatten eller hög luftfuktighet; **"Tak i alla våtutrymmen"**; utsida av fast vägg mot duschhörna (till tak eller minst 2 m). Regeltext: "Ytor i våtzon 2 ska målas med minst VA system men får också målas med VT system. Vid tveksamhet välj VT system."
- Takhöjd (MVK FAQ): "MVK menar att våtzon 1 går ända upp till tak." Undantag över 2 m bara genom avvikelserapport med beställaren. https://www.vatrumsmalning.se/faq-tolkningar-fragor-och-svar

**Obs, zondefinitionen skiljer sig.** Checklistans gemensamma begrepp (BBV 26:1 § 3.2, GVK 2026) har "hela ytterväggen om en del av den ligger i zonen" och "hela golvet" i våtzon 1. MVK 2026 har inget av dem: ingen ytterväggsregel, och golv ingår inte alls. Kakelsidan länkar till tätskiktssidan för definitionen; om sidan skriver MVK:s zoner ska de stå som MVK:s.

### 1b. Golvet

- MVK FAQ, fråga "Kan jag måla betonggolv i ett duschrum?", svar ordagrant: **"Golv omfattas inte av MVKs branschregler."** https://www.vatrumsmalning.se/faq-tolkningar-fragor-och-svar (FAQ-sidan odaterad; dokumentsidan listar "FAQ Tolkningar frågor och svar 2023").
- Reglerna 2026 nämner golv bara som anslutning (plastmatta, klinker); zonexemplen gäller väggar och tak.

### 1c. Kaklet tas bort före ett målat system

Tre ställen i reglerna 2026, ordagrant:

- Ommålning, s. 19: "Underlagets tätskikt ska vara oskadat och bestå av tidigare för ändamålet MVK-godkänt våtrumssystem (VT resp. VA)." … "Om underlaget är okänt, ej avsett för att måla på* eller inte är reparerbart så ska det avlägsnas helt, de nya underlaget ska sedan behandlas som nymålning. **\* t.ex. våtrumstapet, väggmatta eller kakel.**"
- Anslutningar, s. 14: "Målade våtrumssystem appliceras alltid efter eventuellt system för matta eller kakel."
- Beckers godkända utförandeanvisning (avsnitt 4) har samma mening med tillägget "Dvs all befintlig klädsel tas ned och underlaget (dvs skivan under) återställas till nyskick. Därefter behandlas väggen som vid nymålning."

**Gäller båda klasserna.** Ommålningsregeln skiljer inte på VT och VA. Målning på kakel i våtzon 2 är alltså inte heller ett MVK-system (VA). Det är kosmetik, inte ett ytskikt enligt reglerna. SEO och GEO-agenten bör se på raden "våtzon 2 ja med villkor" i tabellen: villkoret är att det inte är ett MVK-system.

**Kakel och målat system får mötas på samma vägg** (så att sidan inte säger att allt kakel måste bort):
- MVK FAQ, "Kan man ha kaklat till brösthöjd och sedan målat i duschhörnan?": "Det går att blanda kakel och målade våtrumssystem även i våtzon 1. Det är dock viktigt att systemen möts på rätt sätt. … MVK rekommenderar att du använder dig av en auktoriserad entreprenör här."
- Reglerna s. 16–17: målningsbehandlingen ska överlappa det keramiska materialets tätskikt "cirka 30 mm"; det målade systemet "måste avslutas minst 70 mm från golvet". Det målade systemet ligger alltså på skivan ovanför kaklet, inte på kaklet.
- MVK FAQ: "Kan jag använda samma tätskikt som jag har under kakelplattorna när jag ska måla." Svar: "Nej, använd inga material som inte ingår i det målade våtrumssystemet."

### 1d. Fackmässighet, auktorisation, eget arbete

- Reglerna s. 3, för fackmässighet krävs: arbete enligt MVK:s regler; godkänt system och godkänd utförandeanvisning; MVK-auktoriserat företag; behöriga utförare; "Kvalitetsdokument och skötselråd överlämnas till beställaren".
- MVK FAQ om privatpersoner, ordagrant: "MVK rekommenderar att man alltid anlitar MVK-auktoriserat företag vid våtrumsmålning. För privatpersoner som trots det önskar utföra våtrumsmålning själva rekommenderar MVK att man tar kontakt med sitt försäkringbolag för att undersöka om bolaget accepterar eget utförande i våtrummet." [stavningen "försäkringbolag" är MVK:s]
- Avvikelse (s. 6): om beställaren väljer ett utförande utanför reglerna ska en avvikelse dokumenteras och signeras; "En avvikelse kan få betydelse vid slutbesiktning, vid eventuell skada, vid värdering av byggnaden".

---

## 2. Lagkravet bakom: BFS 2024:8 7 kap.

**Källa:** Boverket, BFS 2024:8, *Boverkets föreskrifter om skydd med hänsyn till hygien, hälsa och miljö samt hushållning med vatten och avfall*, beslutade 2024-11-19, https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf

- 7 kap. 7 §: "Ytor inomhus, som kan förväntas utsättas för vatten i vätskefas, ska ha ett vattentätt skikt om det inte är obehövligt. Skiktet ska hindra fukt från att ta sig in i byggnadsdelar i oacceptabel mängd. Utformningen ska särskilt ta hänsyn till 1. täthet mot vatten i vätskefas, 2. täthet i skarvar, anslutningar, infästningar och genomföringar, och 3. ånggenomgångsmotstånd. I golvytor, som ofta kommer att utsättas för vatten i vätskefas, får genomföringar göras endast för golvavlopp."
- 7 kap. 9 §: "Ytor inomhus, som kan förväntas utsättas för vattenstänk, våtrengöring eller kondensvatten, ska ha ett vattenavvisande ytskikt. Kravet i första stycket gäller inte om det är uppenbart obehövligt."
- Ikraftträdande: "Denna författning träder i kraft den 1 juli 2025." Äldre BBR (2011:6) fick tillämpas enligt övergångsbestämmelserna i BFS 2024:14 (checklistan: till och med 30 juni 2026; övergångstexten i BFS 2024:14 är **inte** läst här).
- Osäkert: ändringsförfattningar till BFS 2024:8 efter 2024 är inte kontrollerade (Boverkets författningslista gav 404).

---

## 3. Färgtillverkarna om kakel i våtrum

Fem tillverkare, alla säger nej till kakel i våtrum. Andra stödet för beskedet.

| Tillverkare | Vad de säger, ordagrant | Källa och datum |
|---|---|---|
| Beckers | "Vi avråder från målning på kakel och klinker i våtutrymmen. Ur försäkringsmässig synvinkel är det inte ett godkänt målningssystem att måla på kakel eller klinker i våtrum, detta kan även kan räknas som dubbla tätskikt, vilket alltid bör undvikas." … "Det finns inget godkänt målningssystem för kakel /klinker i våta utrymmen. Vilket kan skapa problem vid ett framtida försäkringsärende." | Beckers kundforum, svar av Christina, Beckers Kundcenter. https://forum.beckers.se/org/beckers/d/mala-kakelgolv-i-badrum/ (tråden daterad 2018-10-21 i sidans metadata) |
| Beckers | "Vår kakelfärg Ceramic Tiles är enbart avsedd för kakel i torra utrymmen. Vi avråder från målning i våtutrymmen. Konstruktionen i kaklade våtutrymmen gör att där ofta finns fukt under plattorna mot tätskiktet. Det är inte bra att stänga in denna genom att måla plattorna och den öppna fogen." | https://forum.beckers.se/org/beckers/d/mala-kakel/ (metadata 2025-03-20) |
| Beckers | Produktbladet: "färg för kakelbelagda väggar i torra utrymmen t.ex. kök och gästtoalett" | Ceramic Tile PDS, version 250422, https://www.xlbygg.se/media/page_attachments/Ceramic_Tile_Kakelfrg_SV_PDS_Beckers.pdf och https://beckers.se/produkter/ceramic-tile |
| Alcro | "Vi avråder helt från målning av kakel i våtutrymmen. I våtutrymmen krävs att regler för tätskikt följs och detat regelverk tillåter inte målning på kakel eller klinker. Den fukt som finns under plattorna bör ej målas in." Och: "Vi avråder från målning av Klinkergolv." | Alcro Studio forum, svar av Christina, https://forum.alcrostudio.se/org/alcro/d/mala-kakel-f71k/ (metadata 2019-10-17) |
| Flügger | "När man målar ovanpå kakel i våtrum finns det risk att man skapar ett så kallat dubbelt tätskikt – något som inte är tillåtet enligt branschreglerna för våtrum. Det kan påverka både hållbarheten och försäkringen." "Vi rekommenderar inte att du målar på kakel i våtrum, som badrum, WC eller i duschutrymmen!" | Flügger kategorisida Kakelfärg, https://www.flugger.se/inomhus/kakelfarg/c-913228/ (odaterad) |
| Caparol | "När det gäller våtutrymmen som badrum, så rekommenderar vi inte att måla över kaklet p.g.a. att det kan förstaöra existerande tätskiktssystem." [stavfelet är Caparols] | Caparol webbshop, Häftprimer, https://www.caparolfarg.se/webbshop/inomhusfarger/mobler-snickeri/haftprimer-1193 (odaterad) |
| Nordsjö | **Saknas.** Ingen Nordsjö-text om kakel i våtrum hittad. Häftgrunden nämner "keramiska plattor" som underlag utan rumsbegränsning i produkttexten, men databladet anger användningsområde "panel och snickerier inomhus" | https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-original-h%C3%A4ftgrund-snickeri |

Forumsvaren är tillverkarnas kundtjänst, inte datablad. Beckers datablad (torra utrymmen) och Flüggers kategorisida är starkast.

---

## 4. Tillverkarnas system för kakel i torra rum

| | Beckers Ceramic Tile | Alcro Milltex Häfta Grundfärg + täckfärg | Nordsjö Original Häftgrund Snickeri + täckfärg | Flügger Interior Fix Primer + inomhusfärg | Caparol Häftprimer + täckfärg |
|---|---|---|---|---|---|
| Datablad | PDS version 250422 | PDS (PPG/Tikkurila-mall), ingen version synlig | TDS "Rev. januari 2026" | Produktsida flugger.se (inget PDF-datablad publicerat) | TI "utgåva: februari 2025" |
| Var | "kakelbelagda väggar i torra utrymmen t.ex. kök och gästtoalett" | kakel bland underlagen; "trä- och metallytor i torra utrymmen inomhus" | "keramiska plattor" bland svåra underlag; inomhus | "primer på kakel och laminat"; ej våtrum (kategorisidan) | kakel bland underlagen; ej våtrum |
| Tvätt | Beckers Inomhustvätt, "Använd inte diskmedel", ta bort gammal silikon, skölj, låt fogarna torka | Alcro Målartvätt | (Nordsjö-guide för luckor: Målartvätt; ej kakelspecifikt) | Flügger Fluren 37; kalkborttagning vid behov | "torra, fasta och väl rengjorda från smuts och fett"; tvållösningsytor även kalklösande medel |
| Slipning | Nämns inte i databladet | "Vissa ytor kan behöva mattslipas … provmåla" (datablad); forumsvaret: "matta ned ytan med fint våtslip-papper" | "Blanka hårda ytor mattslipas" | "Slipa ytan lätt med sandpapper"; "Mattslipa underlaget efter behov" | "provyta … med och utan slipning … Efter tre dagar kontrolleras vidhäftningen" |
| Grund | Ingen: "Kombinerad grund- och täckfärg", "ingen grundfärg behövs" | 1 strykning Häfta | 1 strykning Häftgrund ("Strykningar 1") | 1 strykning Fix Primer | 1 strykning Häftprimer |
| Täckfärg | Ceramic Tile, 2 strykningar | Forumsvaret: 2 varv Servalac, eller Alcro Tät* | "Färdigstryk 2 gånger med vald färdigstrykningsfärg" | "som vanligt måla med inomhusfärg" | "vattentålig" täckfärg i kök |
| Övermålningsbar | 16 h (+23 °C, 50 % RF) | 5 h (+23 °C, 50 % RF) | 16 h (23 °C, 50 % RF); "torka över natt innan färdigstrykning" | 12 h (20 °C, 60 % RF) | 7 h med vattenspädbar färg, 48 h med lacknaftalöslig (+23 °C, 50 % RF) |
| Härdning | "slutliga hårdhet och slitstyrka efter 28 dagar"; rengöring "tidigast 1 månad från målning" | Saknas | Saknas | "Genomhärdad … 28 Dygn" | "Genomtorr: flera dygn" |
| Åtgång | 10–12 m²/l | 8–10 m²/l | 5–8 m²/l | 8 m²/l | 8–10 m²/l |
| Temperatur | +5 till ca +25 °C | inte under +10 °C | min +5 °C | sprutning: material minst 12 °C | min +8 °C |

\* Alcro Tät finns på MVK:s lista "Tidigare MVK godkända system som utgått": "Alcro Tät utgick januari 2025" (https://www.vatrumsmalning.se/godkanda-system/tidigare-mvk-godknda-system-som-utgtt). Forumsvaret är från 2019. Nämn inte Tät som val.

Källor:
- Beckers: https://www.xlbygg.se/media/page_attachments/Ceramic_Tile_Kakelfrg_SV_PDS_Beckers.pdf ; https://beckers.se/produkter/ceramic-tile
- Alcro: https://max.ppg.com/adaptivemedia/rendition?id=616fdd6001469e04cdf19d33537e9b70e81fb562 ; https://alcro.se/produkter/milltex-hafta-grundfarg ; forum https://forum.alcrostudio.se/org/alcro/d/mala-kakel-f71k/
- Nordsjö: https://msp.images.akzonobel.com/prd/dh/eseexp/documents/7d/dc/2c/43/original_haftgrund_snickeri_tds.se.pdf ; https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-original-h%C3%A4ftgrund-snickeri
- Flügger: https://www.flugger.se/inomhus/kakelfarg/interior-fix-primer/p-INT%20FIX/ ; https://www.flugger.se/inomhus/kakelfarg/c-913228/
- Caparol: https://www.caparol.se/caparol_pim_import/caparol_se/products/ti/122260/TI_Haftprimer_SE.pdf ; https://www.caparolfarg.se/webbshop/inomhusfarger/mobler-snickeri/haftprimer-1193

**Härdningstid innan vatten:** inget av de fem databladen anger en tid "innan vattenstänk". Det som finns: Beckers 28 dagar till full hårdhet och första rengöring tidigast efter en månad; Flügger Fix Primer 28 dygn genomhärdad. Checklistans krav "härdningstid innan vatten ur datablad" kan bara uppfyllas med Beckers formulering (rengöring tidigast efter en månad). 48 timmar innan vattenstänk står bara hos Proffsmagasinet, som inte får användas.

**Korn:** ingen tillverkare anger korn. Alcro: "fint våtslip-papper"; Flügger och Nordsjö: "mattslipa"/"slipa lätt". Korn 180–240 står bara på en måleriblogg (paintpro.se, utdrag), inte källa. Skriv inte ett kornnummer med källa; skriv tillverkarens ord.

**Ta bort färgen igen / hur länge den håller:** Alcro (forumet): "får man problem så går det inte att återställa kaklet till ursprungligt skick när man väl börjat måla." Ingen tillverkare anger livslängd för målat kakel. **Saknas.**

---

## 5. Köket

- Värme bakom hällen, Beckers kundforum (svar av Christina, tråden 2024-01-02): "Våra produkter och här Ceramic Tiles klarar en temperatur på ca 60-70 rader [grader]. Det kan liknas med en temperatur där vi klarar av att hålla handen kvar mot ytan när den är som allra varmast." https://forum.beckers.se/org/beckers/d/kakel-z34q/
- Fett: samma svar, "Det är viktigt att allt fett och att alla sedan tidigare använda rengöringsmedel tas bort från ytan innan målning." Alcro: "Tensider i skurmedel kan annars reagera med färgen", och fogarna är svåra att få helt rena, "det går inte att garantera ett bra resultat".
- Caparol: i kök "tänka på att använda en täckfärg som är vattentålig".
- Rengöring efter målning (Beckers PDS): tidigast efter ca 1 månad, mjuk borste eller svamp, neutral tvättlösning pH 6–8, mycket smutsigt svagt alkaliskt pH 8–10, undvik slipande rengöringsmedel och grova svampar.
- Gasspis, öppen låga, hällens avstånd: **saknas**, ingen tillverkare anger det.

---

## 6. Fogarna

- Beckers PDS: måla "hörn, kakelfogar och ställen du inte når med en roller" med pensel först; "Ta bort gammal silikon" före målning; "Ersätt borttagen silikon mot ny" efter.
- MVK reglerna 2026, Tabell 3 (rekommendation för fogmassa i målade system): "Övermålningsbar", "Ej silikon". Silikon går inte att måla över; det är skälet att silikonfogen byts i stället.
- Byta silikonfog i våtrum: se `/badrum/fogar-badrum/` (SOKORDSANALYS 8.3: skär inte in i tätskiktet, gds 2026-09-15, Villaägarna 2025-11-28; inte omlästa här).
- Måla fogarna i våtrum: Beckers, "Det är inte bra att stänga in denna [fukten] genom att måla plattorna och den öppna fogen."

---

## 7. Försäkringen

Inget av bolagen skriver om målat kakel. Det bolagen skriver är kravet på branschregler, och målat kakel i våtzon 1 följer inte MVK (avsnitt 1c). Kopplingen är vår slutsats, och den ska märkas som det.

| Bolag | Ordagrant | Källa, datum |
|---|---|---|
| Folksam | "En förutsättning för ersättning för skadade ytskikt och tätskikt i våtutrymmen är att det är byggt enligt gällande byggnormer och branschregler." Och: "Skador på badrummets ytskikt (kakel, mattor) och tätskikt ersätts dock inte om det är genom dessa som vattnet läckt ut i villaförsäkring bas. I villaförsäkring stor finns skydd även för det läckande yt- och tätskiktet. En förutsättning är att badrummet är korrekt byggt enligt gällande byggnormer och branschregler och underhållet." | https://www.folksam.se/forsakringar/hemforsakring/vattenskada , inget datum på sidan |
| If | Ersätter läckage från "badrum, duschrum eller annat våtutrymme som har golvbrunn och som är byggt enligt den byggnorm och de branschregler samt branschens råd och anvisningar som gällde vid byggnads- eller installationstillfället." | https://www.if.se/privat/forsakringar/hemforsakring/skadeforebyggande/vattenskada , "Uppdaterad 2026-08-31" |
| Trygg-Hansa | "Tänk på att badrumsrenovering eller installation av en tvättmaskin ska vara fackmannamässigt utfört – annars kan du få minskad ersättning." | https://www.trygghansa.se/forsakringar/hemforsakring/vattenskada , "Publicerad: 2024-06-12" |
| Trygg-Hansa, självrisk | "För bostadsrätt och villa är självrisken 2 000 kronor för vatten- och läckageskador, och 4 000 kronor för läckage från våtrum, badrum och duschrum." | https://www.trygghansa.se/forsakringar/hemforsakring/sjalvrisk , "Publicerad: 2024-06-12" |
| Konsumenternas | "Vissa försäkringbolag kan ersätta vattenskador även om våtrummet inte har byggts enligt branschregler, men ofta mot en förhöjd självrisk." Och för ersättning gäller oftast att branschreglerna följts och att "du kan visa kvalitetsdokument eller våtrumsintyg från behörig hantverkare". | https://www.konsumenternas.se/forsakringar/boendeforsakringar/villaforsakringar/vattenskador/ , inget datum hittat |

- Folksams självrisk 3 000 kr (bas) / 0 kr (stor) för vattenskada i badrum: **bara utdrag**, inte på den lästa sidan. Skriv inte.
- Åldersavdrag i procent: inte hämtat, enligt checklistan ska det inte stå.
- Vad folk läser (inte källor): flera lead-sidor (bostadsaffarer.se, sparapengarna.se, hemkunskapen.se) påstår att målat kakel i badrum "inte påverkar tätskiktet" och att försäkringen gäller som vanligt. Ingen av dem har en källa. Det är påståendet sidan svarar på.

---

## 8. Tabellen: besked per rum och zon

Som den kan stå. Kolumnen Källa är för `kallor` och fotnot, inte för löptext.

| Yta | Besked | Villkor | Källa |
|---|---|---|---|
| Kök, stänkskydd | Ja | Tvätta fett och skurmedel bort, matta, grunda om färgen kräver det, två strykningar. Värmen vid hällen högst ca 60–70 °C för Beckers Ceramic Tile | Beckers PDS 250422; Beckers forum 2024-01-02; Alcro forum |
| Gästtoalett utan dusch, torra rum | Ja | Samma | Beckers PDS ("gästtoalett") |
| Badrum, våtzon 2 (väggar utanför duschen) | Nej (SEO-beslut 8.9) | Inte ett MVK-system: MVK kräver att kakel tas bort före ett målat system (gäller VT och VA). Tätskiktet bakom ska vara helt; tillverkarna avråder från kakel i våtrum | MVK 2026 s. 19; Beckers, Alcro, Flügger, Caparol (avsnitt 3). Villkoret om tätskiktet är vår slutsats (SOKORDSANALYS 8.3) |
| Badrum, våtzon 1 (dusch, badkar, 1 m ut, golv till tak) | Nej | MVK: "Ytor i våtzon 1 ska målas med VT system", och kakel ska bort före ett målat system. Försäkringsbolagen kräver branschreglerna | MVK 2026 s. 8 och 19; Folksam, If, Trygg-Hansa |
| Golv, klinker | Nej | "Golv omfattas inte av MVKs branschregler"; Alcro avråder från klinkergolv (slitage, vidhäftning) | MVK FAQ; Alcro forum |

Osäkert: våtzon 2 i badrum. Beckers och Flügger avråder från kakel i "våtutrymmen"/"våtrum" utan zonindelning. Beckers godkänner "gästtoalett" men inte badrum. Sidan kan skriva "ja" för våtzon 2 bara med villkoret utskrivet och med att tillverkarna själva avråder. SEO och GEO-agenten avgör.

---

## 9. Produktkandidater: excenterslip

Alla priser: Proffsmagasinet, lästa 2026-09-28. Butiken är källa för pris och specifikation, aldrig för prestanda. Ingen slug finns; förslag till slug står i kolumnen och skapas av affiliateagenten.

| Produkt | Pris | Specifikation | Källa för spec | Slug-förslag |
|---|---|---|---|---|
| Bosch Professional GEX 125 (06013A8020), nät | 1 227 kr | 290 W, rondell 125 mm, 7 500–12 000 varv/min tomgång, 15 000–24 000 slag/min, svängningsdiameter 2,6 mm, 1,4 kg, vibration 3,8 m/s² (K 1,5) vid slipning av massivt trä | Bosch, https://www.bosch-professional.com/se/sv/products/gex-125-06013A8020 ; pris https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/slipmaskiner/excenterslipar/bosch-gex-125-excenterslip-290-w-06013a8020-4066345 | bosch-gex-125 |
| DeWalt DWE6423, nät | 1 193 kr | 280 W, 125 mm, 8 000–12 000 svängningar/min, 1,28 kg, dammpåse eller AirLock | **Bara butiken**; DeWalts produktsida gick inte att läsa (omdirigerades till startsidan). https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/slipmaskiner/excenterslipar/dewalt-dwe6423-excenterslip-280-w-hn11806 | dewalt-dwe6423 |
| Makita BO5041, nät | 1 933 kr | 300 W, rondell 123 mm, 1,4 kg, 218 × 123 × 153 mm, dammpåse medföljer ej | Bara butiken; Makitas datablad inte hämtat. https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/slipmaskiner/excenterslipar/makita-bo5041-excenterslip-300-w-hn14547 | makita-bo5041 |
| Metabo SXE 425 TurboTec, nät | 2 242 kr | 320 W, 125 mm, svängningskrets 5 mm, 4 200–11 000 varv/min, 2,3 kg | Bara butiken. https://www.proffsmagasinet.se/maskiner-verktyg/maskiner/slipmaskiner/excenterslipar/metabo-sxe-425-turbotec-excenterslip-320-w-1110235 | metabo-sxe-425-turbotec |

- **Viktigt för affiliateagenten:** ingen färgtillverkare nämner maskin för kakel. Beckers kräver ingen slipning alls; Alcro säger "fint våtslip-papper", Flügger "slipa lätt med sandpapper", Nordsjö "mattslipas". Texten kan motivera en excenterslip bara som snabbare sätt att matta en stor kakelyta. Det stöds inte av någon källa, det är vårt eget resonemang. Glaserat kakel och korn: ingen tillverkare anger korn.
- Kända svagheter, jämförande test, vem den passar enligt tillverkaren: **inte hämtat** för någon av de fyra.
- Proffsmagasinets eget "Excenterslip bäst i test 2025" finns men är partnerns sida och används inte.

---

## 10. Pris och åtgång

| Produkt | Förpackning | Pris | Per liter | Butik, datum |
|---|---|---|---|---|
| Beckers Ceramic Tile, valfri kulör | 1 l | 375 kr | 375 kr/l | Proffsmagasinet 2026-09-28, https://www.proffsmagasinet.se/bygg-interior/farg-tapeter/inomhusfarg/vaggfarg/beckers-ceramic-tile-kakelfarg-halvmatt-valfri-kulor-3136471 |
| Flügger Interior Fix Primer | 0,38 l | 189 kr | 497,37 kr/l | flugger.se 2026-09-28 |
| Flügger Interior Fix Primer | 0,75 l | 289 kr | 385,33 kr/l | flugger.se 2026-09-28 |

Saknas: pris på Alcro Milltex Häfta, Nordsjö Häftgrund, Caparol Häftprimer (Caparols webbshop: "Kan ej köpas i webshop").

Räkneexempel (egen räkning):
- Stänkskydd 3,0 × 0,6 m = 1,8 m². Beckers Ceramic Tile 2 strykningar, 10 m²/l: 2 × 1,8 / 10 = 0,36 l → en 1-litersburk räcker. Formel: liter = strykningar × yta / åtgång (m²/l).
- Kakelvägg i gästtoalett 2,4 × 3,0 m = 7,2 m². Ceramic Tile 2 × 7,2 / 10 = 1,44 l → två 1-litersburkar. Vid 12 m²/l: 1,2 l.
- Kvadratmeterräknaren `/rakna/kvadratmeter/` har materialvalet "Klinker eller kakel" för ytan men räknar färgåtgång för väggfärg och takfärg; kakelfärgens 10–12 m²/l finns inte som val (ur `docs/briefer/faktablad/rakna-kvadratmeter.md`). Verktygskortet kan stå där färgmängden nämns, men räknaren ger inte kakelfärgens åtgång.

---

## 11. Interna länkar

Ut (krav):
- `/badrum/tatskikt-badrum/` i tabellen (avsnitt 1 på sidan) och i duschavsnittet.
- `/badrum/vatrumsfarg/` i duschavsnittet.
- `/badrum/fogar-badrum/` i fogavsnittet.
- `/rakna/kvadratmeter/` som `<Verktygskort kalkylator="kvadratmeter" />` där färgmängden nämns.

In (krav): från `/badrum/tatskikt-badrum/`, `/badrum/vatrumsfarg/`, `/kok/mala-koksluckor/`.

---

## 12. Sökanalys: måla kakel

Topp 5 enligt SOKORDSANALYS 8.2 (läst 2026-09-16). Ordningen i google.se är **inte kontrollerad**; mitt sökverktyg svarar från USA och gav 2026-09-28 en annan lista (Hornbach, Proffsmagasinet, Flügger, Byggmax, Happy Homes).

1. **clasfixare.se/mala-kakel-badrum/** (2024-02, ingen författare). Har: tvätt, fint sandpapper, grundfärg, maskering. Saknar: zoner, MVK, försäkring, torktider, korn. Fel: föreslår "transparent ytbehandling"/försegling på badrumskakel utan att skilja på duschen.
2. **bygg.se**: oläst (403).
3. **hornbach.se/projekt/mala-kakel/**: bara menyer vid läsning 2026-09-16.
4. **stuvbutiken.com**: butiksguide; inte omläst.
5. **proffsmagasinet.se** ("Henrik, testchef", odaterad): tider 6–12 h mellan strykningar, 48 h innan vattenstänk, utan fabrikat; föreslår klarlack i duschen, mot MVK. Nämns inte.

Frågor läsaren har kvar: får jag måla i duschen, vad händer med försäkringen, hur länge innan jag får duscha/torka av, vilket korn, håller det bakom spisen, kan jag ta bort färgen igen, klinkergolvet.

Det vår sida kan ha som ettan saknar:
- Besked per zon i en tabell med MVK 2026 som källa.
- MVK:s regel att kakel tas bort före ett målat system, ordagrant, och att golv inte omfattas.
- Fem tillverkare som själva avråder från kakel i våtrum.
- Torktider och härdning per fabrikat ur datablad.
- Värmegränsen bakom hällen (Beckers 60–70 °C).
- Försäkringsbolagens villkor med datum.

---

## Källor för `kallor`

- MVK, Måleribranschens regler för våtrum, gäller från 2026-01-01: https://www.vatrumsmalning.se/s/MVK-BR-2026-01-01-lcaf.pdf
- MVK, FAQ tolkningar frågor och svar: https://www.vatrumsmalning.se/faq-tolkningar-fragor-och-svar
- BFS 2024:8: https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf
- Beckers Ceramic Tile, produktblad version 250422: https://beckers.se/produkter/ceramic-tile
- Flügger, Kakelfärg: https://www.flugger.se/inomhus/kakelfarg/c-913228/
- Alcro Milltex Häfta Grundfärg, produktblad: https://alcro.se/produkter/milltex-hafta-grundfarg
- Folksam, If (2026-08-31), Trygg-Hansa (2024-06-12), Konsumenternas, adresser i avsnitt 7.

## Det som saknas eller är osäkert

- Härdningstid "innan vatten" i datablad för kakelfärg: finns inte hos någon av fem tillverkare. Närmast: Beckers, rengöring tidigast efter en månad, full hårdhet 28 dagar.
- Kornnummer från tillverkare: finns inte.
- Nordsjös hållning till kakel i våtrum: inte hittad.
- Något försäkringsbolag som nämner målat kakel: inte hittat.
- Folksams självrisk i badrum: bara utdrag.
- Ändringar i BFS 2024:8 efter 2024 och övergångstexten i BFS 2024:14: inte lästa.
- Excenterslipar: bara Bosch har tillverkarens datablad; DeWalt, Makita och Metabo bara butiksspecifikation. Tester och kända svagheter inte hämtade.
- Priser på fyra av fem grundfärger för kakel.
- Zondefinitionen: MVK skiljer sig från BBV/GVK (ytterväggen, golvet), se avsnitt 1a.
