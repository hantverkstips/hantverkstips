# Butikskällor i `kallor`, del A (2026-09-30)

Underlag till svepet enligt AFFILIATE.md, "/go/-rutten", beslut 2026-09-30. 19 rader ur listan A.txt. Allt läst 2026-09-30 om inget annat står. Radnummer avser filen i `src/content/` som den låg 2026-09-30.

Grupper: **P** = butiken är källa bara för pris, lager eller artikelnummer. **S** = butikssida är källa för prestanda, specifikation, mått eller råd. **D** = tillverkarens dokument på butikens server.

Obs om grupp D: ingen av de fem D-raderna ligger på en väg i undantagslistan. `beijerbygg.se/wcsstore/...` och `bauhaus.se/media/pdf/...` finns inte med (listan är `pm-asset.azureedge.net/api/asset-download`, `media.hornbach.se`, `img.bygghemma.se`). De faller alltså under kontrollen om inte tillverkarens adress ersätter dem eller UX lägger till vägen.

Sammanfattning: P 4 rader, P och S på samma rad 1 (Rockwool Vindsull), S 9 rader (varav 3 rena referat av butikens egen guide och 1 delvis), D 5 rader. Fyra fynd där tillverkarens nyare dokument säger annat än sidan: Rockwool Vindsull (45, inte 42 kg/m³), Pergo (version 05.2024 ändrar planhet, rörelsefog, golvvärmetemperatur, sista radens bredd och ger ett fuktvärde), Isover (anvisningen börjar på insidan) och TräGuiden mot Bauhaus om skruvdjupet.

---

## guider/altan/tradack-pa-mark.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 65 (Bygghemma, bygga trädäck i sju steg) | S, referat | Rad 94: "Bolist, Proffsmagasinet och Bygghemma säger alla tre att du lägger ut betongplattor med ungefär två meters mellanrum och bygger stommen på dem." Rad 102: "Själva plattavståndet på två meter kommer från handelns guider och inte från någon branschkälla." Rad 71: "ingen av dem nämner träskyddsklass, fall eller vilken regel som klarar avståndet mellan stöden." Rad 84 (och rad 39): "Byggvaruhusens guider lägger i stället duken i botten av gropen". | Referat av butikens egen guide. Ingen tillverkar- eller myndighetskälla finns för ett plattavstånd på 2 m; sidan säger själv att talet kommer från handeln. Kontroll mot Bygghemmas sida (daterad 2026-06-01, läst 2026-09-30): "Lägg plattorna runt om vid kanterna med max två meters mellanrum." Stämmer med rad 94. NTR, fall och regeldimension nämns inte, bara att reglarna har "max 60 cm" mellanrum; rad 71 stämmer. **Avvikelse på rad 84/39:** Bygghemma lägger inte duken i botten av gropen: "Gräv bort det översta gräs- och jordlagret och fyll på med ett lager av grus. Platta till gruset ordentligt. Lägg på en markduk och fyll sen på med ett lager av sättsand upp till marknivå." Duken ligger alltså på gruset, under sättsanden. Påståendet om "byggvaruhusens guider" stämmer inte för Bygghemma; Bolist och Proffsmagasinet har jag inte läst om. |

## guider/altan/trallskruv.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 38 (Bauhaus, välj rätt trallskruv) | S | (a) Rad 76: "Byggvaruhusen Bauhaus och Bolist anger 55 mm till 28 mm trall, precis som TräGuiden." (b) Rad 168: "Sänk huvudet ungefär en millimeter under brädans yta, skriver Bauhaus." (c) Rad 176–185, tabellen skruv per kvm, med raden "Källa: Essve och Bauhaus, som anger samma tal." (d) Rad 197: "Det är exakt talet Essve och Bauhaus anger för samma bräda". | (a) Referat. Längden har redan tillverkarkälla: TräGuiden (rad 59) och Essve. Essves tabell, "Bygga trall - välj rätt skruv och köp rätt mängd", https://essve.com/sv/bygguider/allt-om-trall/bygginstruktioner/valj-ratt-skruvkvalitet (inget datum på sidan, läst 2026-09-30): 28x95 och 28x120 → skruvlängd 55 mm. Stämmer. (c, d) Essve samma sida, tabellen ordagrant: "22x95 / 42 / 58 st / 40 cm", "28x95 / 55 / 40 st / 60 cm", "28x120 / 55 / 32 st / 60 cm", "34x145 / 75 / 28 st / 60 cm", och "Observera att tabellen är vägledande. Följ alltid virkesleverantörens rekommendationer." Alla fyra talen stämmer med sidans tabell. Essve räcker ensam. (b) **Ingen tillverkarkälla.** Sökt hos Essve, Gunnebo och TräGuiden. Bauhaus ordagrant: "Försök istället att skruva ner skruven en mm under brädans yta så att skallen fortfarande syns." **TräGuiden säger emot**: https://www.traguiden.se/konstruktion/konstruktiv-utformning/tradack/tradack/laggning-av-trall/ (publicerad 2020-04-17, läst 2026-09-30): skruvhuvuden ska "komma i exakt nivå med träytan, inte djupare", och "Eventuella utstickande skruvhuvuden respektive spikskallar drivs i efterhand in manuellt tills de är i exakt nivå med träytan." TräGuiden är branschorganisationens och väger tyngre. |

## guider/badrum/fogar-badrum.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 62 (Weber, weber neutral silicone, produktspecifikation 2021-05-07) | D, utanför undantaget (beijerbygg.se) | Tabellen rad 149–155: "weber neutral silicone \| Alkoxi \| 5 till 30 minuter \| Anges inte", "Källa: datablad från … Weber (2021)". Rad 169: märkning "Anges inte". Rad 175: "för varken Casco eller Weber skriver ut den" (klass XS1). Rad 141, steg 4: "Ligger silikonen mot en cementfog ska cementfogen vara torr i ytan" (faktabladet rad 82 citerar Weber: "Vid fogning mot fogmassa, ska fogmassans yta ha torkat innan fogning med silikon."). | **Inte läsbart hos tillverkaren.** Produktsidan https://www.se.weber/tatskikt/fog/weber-neutral-silicone ger 403 både med WebFetch och curl; weber-marine.com (Webers marinsajt, TDS_weber neutral silicone, 2025-05) ger också 403. Sökmotorns utdrag, märkt utdrag: "Skin formation between 5-30 minutes depending on temperature and humidity", "alkoxy-based", "antimold-treated for use in wet rooms". Utdraget stämmer med sidans tal men är inte ett läst dokument. Datum och version hos tillverkaren okänt. |
| 64 (Weber, weber rapid grout, produktspecifikation 2019-09-05) | D, utanför undantaget (beijerbygg.se) | Rad 183: "En ny cementfog av weber rapid grout går att gå på efter cirka 2 dygn och tål full belastning efter cirka 7 dygn. Under de första dagarna fuktar du den lätt 1 till 3 gånger sammanlagt, men under hela första veckan får den inte stå under vatten." Tabellen rad 109–115: "Ny cementfog \| Inget de första 7 dygnen \| Sedan vatten, rengöringsmedel först efter några veckor", "Källa: … Weber (2019)". | **Inte läsbart hos tillverkaren.** https://www.se.weber/tatskikt/fog/weber-rapid-grout och se.weber/files/… ger 403; weber-marine.com/files/marine/2025-05/TDS_weber_rapid_grout.pdf ger 403. Sökmotorns utdrag, märkt utdrag: "före gångtrafik ca 2 dygn", "före full belastning ca 7 dygn" (utdraget kom från Beijers kopia, inte från Weber). En annan kopia finns på media-prod.beijerflow.com, också Beijer. Estnisk Weber-version finns (ee.weber/files/ee/2021-04/weber-rapid-grout-Tile-Grout-Product-Datasheet.pdf), inte läst, annat land och språk. |
| 78 (Bauhaus, Casco Sanitary Silicone vit 300 ml) | P | Rad 167: "Casco Sanitary Silicone, 300 ml \| EN 15651-3, S \| 109 kr hos Bauhaus". Märkningen kommer från Cascos produktblad (egen källa i `kallor`). | Bauhaus, Casco Sanitary Silicone vit 300 ml, pris 28 september 2026 (109 kr enligt faktabladet). |
| 80 (Bauhaus, fogspruta skelett 300 ml) | P | Rad 25: "En enkel spruta för patroner på 300 ml räcker, och den kostar under 50 kronor." | Bauhaus, fogspruta skelett Alpha Tools 300 ml, pris 28 september 2026 (49,95 kr enligt faktabladet). |
| 82 (Bauhaus, silikonborttagare Tebo Softgrip) | S, referat | Rad 23: "Den tar bort resterna utan kemikalier. Bauhaus säljer den under namnet silikonborttagare, men det är en skrapa och inget medel." Priset (79,96 kr) står bara i faktabladet, inte på sidan. | Tillverkaren: Tebo Byggtillbehör AB, https://tebo.se/Silikonborttagare-Softgrip-r7/article (inget datum, © 2024, läst 2026-09-30): "Silikonborttagare med tvåsidigt, rostfritt, skärblad med softgriphandtag." Att den är ett verktyg och inte ett medel stämmer. Att Bauhaus säljer den under namnet är ett referat; tillverkaren använder samma namn, så meningen går att ha med Tebo som källa. |
| 84 (Bauhaus, fogkrats Boxer) | S | Rad 29: "Spetsen är av hårdmetall och biter i cementen." | **Ingen läst tillverkarkälla.** Boxer är ett märke hos Millarco (Danmark). millarco.se omdirigerar till millarco.dk; produktsidan gav ingen produkttext vid läsning. Sökmotorns utdrag, märkt utdrag, sidtitel på millarco.se: "Boxer® fogskrapa i tungsten med karbidspets", och "blade made of tungsten with carbide tips … a length of 21 cm". Hårdmetall = karbid, så utdraget stämmer med sidan. |

## guider/el/tillaggsisolera-vind.mdx (bara läst, inget skrivet där)

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 59 (Bauhaus, produktdata och pris för Rockwool Vindsull 20 kg) | P och S | P, rad 133–136: "Priset är hämtat hos byggvaruhuset Bauhaus den 20 september 2026", "Rockwool Vindsull kostar 19,95 kr per kilo, och på nätet säljs den tolv säckar åt gången", "Tolv säckar väger 240 kg och går på 4 788 kr". S, rad 137: "Tillverkarens produktdata anger att ullen löst utlagd väger minst 42 kg per kubikmeter, och jag räknar på det lägsta talet". Följdtal rad 138–139 (5,7 m³, 19 m², 252 kr/m²) och Faq rad 241 ("drygt 250 kronor per kvadratmeter"). | P: Bauhaus, Rockwool Vindsull 20 kg, pris 20 september 2026 (19,95 kr/kg, säljs online i antal om 12). S: **Tillverkaren säger 45, inte 42.** Rockwool, produktsidan Vindsull, https://www.rockwool.com/se/produkter/vindsull/ (inget datum, © 2026, läst 2026-09-30): "ρ ≥ 45 kg/m³", "λD = 0,042 W/m∙K". Rockwools produktdatablad, https://brandportal.rockwool.com/original/gallery/39052/files/original/1a730595-e64a-48c8-afe1-1b5eab1d4d6e.pdf (inget datum i dokumentet, läst 2026-09-30): "Löst upplagd: λD = 42 mW/mK, 45 kg/m³, sättning 5%" och "Densitet (ca.) Löst utlagd 45 kg/m³"; säcken 20 kg, artikel 88199. Bauhaus sida anger "Löst utlagd ≥ 42 kg/m³", troligen en sammanblandning med lambdavärdet 42 mW/mK. Egen räkning med tillverkarens 45: 240 kg / 45 kg/m³ = 5,33 m³; 5,33 / 0,30 m = 17,8 m²; 4 788 kr / 17,8 m² = 269 kr/m². Sidan har 5,7 m³, 19 m² och 252 kr/m². |

## guider/fasad/dreva-fonster.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 51 (Bauhaus, dreva fönster och dörrar, Isovers anvisning) | S | Rad 100: "isolertillverkaren Isover för mineralullen" (tabellraden "Löst, dubbelvikt \| Ja"). Rad 102: "Isover säljer den i par. En oplastad remsa går längst in i spalten, och en remsa klädd med plastfolie sätts innerst och blir själva lufttätningen." Rad 128: "Börja på utsidan … Starta en bit upp på karmens sida, cirka 20 cm från ett hörn enligt Isover". Rad 131: "Bolist säger 10 cm, Isover 15 cm." Rad 142: "Isover varnar för en sak. Folien får inte haka upp sig på karmens hörn". | Saint-Gobain ISOVER AB, Arbetsanvisning (ISOVER Oplastat Drev och Easy Dreva, ISOVER Easy Foga och Fogfiber m.fl.), 2015-02, https://dam.pim-cps.saint-gobain.com/MAM/assets/1/3B62981E2F1545C6BDCA662FD96434C3/doc/F87011C172C14775AAD3FBA2CA209FFE/arbetsanvisningar_lufttathet_o_fuktsakerhet.pdf (läst 2026-09-30). Ordagrant: "Remsorna viks dubbla och pressas in i fogen med en drevspade så att god utfyllnad av hela fogen erhålls." "ISOVER Easy Foga/ISOVER Fogfiber är ett tvåstegs tätningssystem. Det består av två glasullsremsor, en oklädd och en klädd med en tunn polyetenfolie." "1. Börja fogning från insidan. Börja monteringen ca 20 cm från ett hörn med den oklädda remsan." "Tryck in remsan så att det finns ca 3 cm fogdjup för den klädda remsan." "4. Skarva remsan där drevningen började med ett överlapp på ca 15 cm." "OBS! Den klädda remsans folie får ej hakas upp på karmhörnen." Talen 20 cm och 15 cm och varningen stämmer. **Avvikelse:** Isovers 20 cm gäller starten på insidan; sidan lägger det i steget på utsidan (rad 128). Isovers egna sidor isover.se/supporten-tipsar/dreva-fonster och isover.se/produkter/isover-easy-foga ger 403; sökmotorns utdrag av dem återger samma steg. |
| 53 (Bauhaus, drevremsa Isover glasull Easy fogtätningssystem 60 mm 10 m) | S | Rad 26–27: "Drevremsa av mineralull, 60 mm bred", "En rulle på 10 meter räcker till ett fönster på 1,2 × 1,2 meter, enligt min egen räkning." Rad 102: "oftast 60 mm bred och 20 eller 30 mm tjock". | Samma Isover-dokument 2015-02: "Fogtätningssystem … fullgod funktion i fogbredder från 7 mm till 15 mm" (Easy Foga); Oplastat Drev/Easy Dreva: "Remsan är 30 mm tjock och finns i bredderna 50 mm och 100 mm." **Bredden 60 mm, tjockleken 20 mm på den plastade remsan och rullängden 10 m står inte i Isovers dokument**; de finns bara på Bauhaus produktsida ("en glasullsremsa plastad med 20 mm polyetenfolie och en oplastad glasullsremsa som är 30 mm tjock", 60 mm, 10 m). Isovers produktsida för Easy Foga ger 403. Längd och bredd är förpackningsuppgift; om den räknas som artikeluppgift (P) avgör du. |

## guider/golv/golv-i-kallare.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 27 (Pergo, installationsinformation, distribuerad av Bauhaus, maj 2016) | D, utanför undantaget (bauhaus.se/media/pdf) | Rad 76: "Pergo anger inget tal för laminat utan kräver fuktspärr på allt mineraliskt underlag". Rad 108: "En fuktspärr ska användas när golvet läggs på ett mineraliskt underlag, oavsett hur gammalt underlaget är." Rad 112: "Pergo kräver att avvikelsen håller sig under 2 mm på en meters mätlängd." Rad 142: "Pergo anger 5 mm i ett normalstort rum" och "ingen fogmassa och ingen silikon i springan". Faq rad 156: "Pergos anvisning gör ingen skillnad på en nygjuten platta och en från femtiotalet." | **Nyare version hos tillverkaren:** Pergo, Installationsinstruktioner Pergo Laminat, Original Laminate, VERSION 05.2024, svenska, https://www.pergogolv.se/-/media/imported%20assets/flooring/5/9/d/pginstallationlmpgeneralsvpdf108456.ashx (samma fil på cdn2.pergo.com; cdn.pergo.com gav 504; läst 2026-09-30). Talen **ändrade** mot 2016: (1) Fukt: "Läggning på undergolv av cement kräver CM på < 2,5% (75% relativ luftfuktighet)", med golvvärme "CM på < 1,5% (60% relativ luftfuktighet)", och "Jordnära mineraliska undergolv måste ha ett effektivt fuktsäkert membran (DPM) i enlighet med nationella standarder". Pergo anger alltså ett tal nu, och meningen "oavsett hur gammalt undergolvet är" finns inte i 05.2024. (2) Planhet: "Ojämnheter över 4 mm på 2 meter måste jämnas ut. Detsamma gäller för ojämnhet över 1 mm på längd av 20 cm." (3) Rörelsefog: "bör utrymmet till väggen kortas ner till 3 mm", "bör utrymmet utökas till 10 mm"; bilden visar x = 8 mm vid 50 % RF. (4) Fogen: "Glipan måste hållas öppen och får INTE fyllas med tätningsmedel, silikon eller annat bindemedel." Stämmer. 2016-versionen (Bauhaus kopia) sade "Fuktspärr ska användas om Pergo läggs på ett undergolv som innehåller mineral, oavsett hur gammalt undergolvet är", "< 2 mm" per 1 000 mm, 5 mm normalt och 3/8 mm. |
| 37 (Isola, System Platon Golv, systembroschyr, distribuerad av Beijer Bygg) | D, utanför undantaget (beijerbygg.se) | Rad 144: "En fläkt suger luft genom spalten, luften kommer in genom öppningar vid väggarna och oftast genom en ventilerad golvsockel, och frånluften leds ut ur huset. Systemet ska kopplas till en fungerande frånluftsventilation, och tillverkaren skriver att luftmängden och intagens placering dimensioneras i varje enskilt projekt." | **Nyare version hos tillverkaren:** Isola, System Platon Mekaniskt ventilerat Golv, 12.2024 V-1.3, https://media.isola.se/571075b9-1b51-47ff-b416-bc99a7eef69d/994a1738-a2fc-49de-8a85-7f1b7814e254/KiiJAZFFMjiXXBnq8GtEQcc8h/P6W7nTMb0DWj0LFXGJThU95d6.pdf?targetFileName=platon+-+ventilerat+gulv.pdf (läst 2026-09-30). Ordagrant: "En fläkt ansluts och suger luften genom spalten. Spalten har förbindelse med inneluften genom Platon Uppvik och ett antal anpassade öppningar vid väggarna, vanligtvis luftdon och i förekommande fall ventilerad sockel. Luftmängd och placering av intagen dimensioneras fram i varje enskilt projekt." "Ventilationsluften från golvet leds ut ur huset." "Ett Mekaniskt Ventilerat Platongolv måste anslutas till en fungerande frånluftsventilation." Allt stämmer utom en detalj: 2024 säger "vanligtvis luftdon och i förekommande fall ventilerad sockel", Beijers kopia (04.2013) sade "vanligtvis en ventilerad golvsockel". Sidans "oftast genom en ventilerad golvsockel" följer den gamla. |

## guider/golv/lagga-klickgolv.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 49 (Pergo, installation information, distribuerad av Bauhaus) | D, utanför undantaget | Rad 72: "Pergo, laminat \| 48 timmar \| oöppnade, fritt från vägg". Rad 95: "Pergo anger 2 mm på en meter … inga toppar får vara högre än 1,2 mm inom en radie på 250 mm." Rad 123: 0,2 mm folie, "200 mm", "Kährs, Bjelin och Pergo anger alla samma tjocklek och samma överlapp." Rad 135 och 140: "Pergo \| 5 mm", "Pergo anger 3 mm … och 8 mm". Rad 142: "Pergos 5 mm". Rad 158: "Pergo skriver med versaler att den inte får fyllas med fogmassa, silikon eller något annat bindemedel". Rad 176: "13 gånger 13 m". Rad 184: rörelsefogar i L-, T- och U-rum. Rad 190: "Pergo är ensam om att skriva 28 grader". Rad 214: "Pergo och Bjelin anger båda 40 mm." Rad 226: "Pergo anger 300 mm i den version jag kunnat läsa." Rad 248: "Pergo lägger till alla rum med golvbrunn." | Samma nyare dokument, Pergo VERSION 05.2024 (adress ovan). **Stämmer:** "Låt plankorna acklimatisera i 48 timmar i oöppnad förpackning … i mitten av rummet" (bilden 500 mm från vägg); "får INTE fyllas med tätningsmedel, silikon eller annat bindemedel"; "För längder som är längre än 13 m och bredare än 13 m en mellanliggande expansionsskarv"; "I vanliga T-, L- eller U-formade rum kanske även en delningsfog måste installeras"; "skarvarna är förskjutna med minst 30 cm"; golvet passar inte "rum med inbyggda golvbrunnar". **Ändrat:** planhet 4 mm på 2 m och 1 mm på 20 cm (rad 95); spelrum 3 mm vid låg RF, 10 mm vid hög, bilden 8 mm vid 50 % (rad 135, 140, 142); golvvärme "golvets yttemperatur är som högst 27°C" (rad 190, alltså inte längre 28 och inte längre ensam); sista raden "Om den sista raden är mindre än 50 mm" (rad 214). **Saknas i 05.2024:** överlappet 200 mm för plastfolien (bilden visar bara "0,20 mm PE foil"); rad 123 bär då bara Kährs och Bjelin för överlappet. |

## guider/golv/renovera-trappa.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 65 (Hornbach, trappsteg och trapprenovering) | P | Rad 89: "stegpriserna hos byggvaruhuset Hornbach, båda hämtade 20 september 2026". Tabellen rad 166–172: 695, 399 och 249 kr per del, "Källa: Hornbachs prislista, hämtad 20 september 2026, på Duris steg i ek med måtten 1 000 gånger 294 gånger 8 mm. Summan blir 18 802 kr." Kortsvaret rad 11: "ungefär 19 000 kr". | Hornbach, Duri plansteg, sättsteg och bakkantslist i ek 1 000 × 294 × 8 mm, pris 20 september 2026. Stegens mått och nos står med Duri som källa (rad 162). |
| 67 (Bauhaus, trapprenovering) | P | Rad 172: "ett sådant i 1 300 mm bredd kostade 2 095 kr hos byggvaruhuset Bauhaus samma dag." Rad 182: trappstegsmätare "kostade 599 kr i plast hos Bauhaus den 20 september 2026. Stålvarianten låg på 1 995 kr." | Bauhaus, dubbelsteg 1 300 mm och trappstegsmätare i plast och stål, pris 20 september 2026. |

## guider/inomhus/bygga-innervagg.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 55 (Bygghemma, bygga innervägg med reglar) | S, referat | Rad 137: "Svenskt Trä vill ha öppningen cirka 10 till 20 mm större än karmens yttermått … Hos Bygghemma står cirka 20 mm och hos Bolist 30 till 40 mm, båda byggvaruhus. Jag går på Svenskt Trä." | Referat av butikens guide; rådet självt bärs av Svenskt Trä. Kontroll mot Bygghemma (daterad 2026-02-10, läst 2026-09-30): "Öppningen ska minst vara lika stor som dörrens modulmått. Om du har en gammal dörr kan du använda karmyttermåttet plus ca 20 mm." Stämmer. |

## guider/inomhus/gipsskruv.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 51 (Beijer, skruvarnas ytbehandling och korrosivitetsklass) | S | Rad 167: "Rostfri A2 motsvarar C4 enligt byggvaruhuset Beijer." Beijers sida (läst 2026-09-30): "Rostfritt stål A2: Motsvarar korrosivitetsklass C4." | Essve, "Välja rostfri skruv till din altan", https://essve.com/sv/bygguider/allt-om-trall/tips-och-inspiration/bygga-altan-med-rostfri-skruv (inget datum, läst 2026-09-30): "A2-skruv har något lägre rostskydd (C4) och något mindre flexibelt stål." Stämmer. Samma sida står redan i trallskruv.mdx:s `kallor`. |

## guider/inomhus/hanga-tavla-gipsvagg.mdx

| Rad | Grupp | Vad källan bär | Ny källa |
|---|---|---|---|
| 49 (Clas Ohlson, 3M Claw tavelkrok för gipsvägg) | S | Tabellen rad 76: "Upp till 7 \| Inslagen klokrok \| 7". Rad 81: "3M för både klisterremsan Command och klokroken Claw". | 3M Sverige, produktsidan "3M CLAW™ Tavelkrok för gipsvägg 7 kg, 3PH7-2UKN, 2 krokar", https://www.3msverige.se/3M/sv_SE/p/d/v101362008/ (även 4-pack: …/v101362010/). **Sidan gick inte att läsa**: timeout efter 60 s två gånger och ingen svar med curl. Sökmotorns utdrag, märkt utdrag: sidtiteln ovan och "load capacity of up to 7 kg", "can only be used on drywall". Stämmer med tabellen men är inte läst. |

---

## Nya källor, `kallor` i YAML

Bara tillverkare. Utdrag är märkta i titeln så att du kan välja att vänta med dem.

```yaml
# guider/altan/trallskruv.mdx — Essve och TräGuiden finns redan i kallor; Bauhaus-raden kan strykas om rad 168 skrivs om efter TräGuiden

# guider/badrum/fogar-badrum.mdx
  - titel: Tebo Byggtillbehör, Silikonborttagare Softgrip (läst 30 september 2026)
    url: https://tebo.se/Silikonborttagare-Softgrip-r7/article
  - titel: Millarco, Boxer fogskrapa i tungsten med karbidspets (sökmotorns utdrag, sidan inte läst)
    url: https://millarco.se/produkter/goer-det-selv/murarverktyg/fogskrapa/boxer-fogskrapa-i-tungsten-med-karbidspets
# Weber: ingen tillverkaradress gick att läsa (se.weber och weber-marine.com svarar 403)

# guider/el/tillaggsisolera-vind.mdx (skrivs av den som äger filen)
  - titel: Rockwool, Vindsull, produktsida (läst 30 september 2026)
    url: https://www.rockwool.com/se/produkter/vindsull/
  - titel: Rockwool, Vindsull, produktdatablad (läst 30 september 2026)
    url: https://brandportal.rockwool.com/original/gallery/39052/files/original/1a730595-e64a-48c8-afe1-1b5eab1d4d6e.pdf

# guider/fasad/dreva-fonster.mdx
  - titel: Saint-Gobain Isover, arbetsanvisning Oplastat Drev, Easy Dreva, Easy Foga och Fogfiber (2015-02)
    url: https://dam.pim-cps.saint-gobain.com/MAM/assets/1/3B62981E2F1545C6BDCA662FD96434C3/doc/F87011C172C14775AAD3FBA2CA209FFE/arbetsanvisningar_lufttathet_o_fuktsakerhet.pdf

# guider/golv/golv-i-kallare.mdx och guider/golv/lagga-klickgolv.mdx
  - titel: Pergo, installationsinstruktioner Pergo laminat, Original Laminate, version 05.2024
    url: https://www.pergogolv.se/-/media/imported%20assets/flooring/5/9/d/pginstallationlmpgeneralsvpdf108456.ashx

# guider/golv/golv-i-kallare.mdx
  - titel: Isola, System Platon mekaniskt ventilerat golv, broschyr 12.2024 V-1.3
    url: https://media.isola.se/571075b9-1b51-47ff-b416-bc99a7eef69d/994a1738-a2fc-49de-8a85-7f1b7814e254/KiiJAZFFMjiXXBnq8GtEQcc8h/P6W7nTMb0DWj0LFXGJThU95d6.pdf?targetFileName=platon+-+ventilerat+gulv.pdf

# guider/inomhus/gipsskruv.mdx
  - titel: Essve, välja rostfri skruv till din altan
    url: https://essve.com/sv/bygguider/allt-om-trall/tips-och-inspiration/bygga-altan-med-rostfri-skruv

# guider/inomhus/hanga-tavla-gipsvagg.mdx
  - titel: 3M Sverige, 3M Claw tavelkrok för gipsvägg 7 kg (sökmotorns utdrag, sidan svarade inte)
    url: https://www.3msverige.se/3M/sv_SE/p/d/v101362008/
```

Grupp P, poster utan `url` enligt regeln (produkt, butik, läsdatum):

```yaml
# guider/badrum/fogar-badrum.mdx
  - titel: Bauhaus, Casco Sanitary Silicone vit 300 ml, pris 28 september 2026
  - titel: Bauhaus, fogspruta skelett 300 ml, pris 28 september 2026
# guider/el/tillaggsisolera-vind.mdx
  - titel: Bauhaus, Rockwool Vindsull 20 kg, pris 20 september 2026
# guider/golv/renovera-trappa.mdx
  - titel: Hornbach, Duri plansteg, sättsteg och bakkantslist i ek, pris 20 september 2026
  - titel: Bauhaus, dubbelsteg och trappstegsmätare, pris 20 september 2026
```

Referaten (S-referat) av butikernas egna guider: tradack-pa-mark rad 65 (Bygghemma), trallskruv rad 38 del (a), fogar-badrum rad 82 (Tebo har en egen källa), bygga-innervagg rad 55 (Bygghemma). Om de ska stå utan url eller strykas avgör du.
