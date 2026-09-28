# Underlag: /rakna/fasadyta/

Verktyg 18 i `docs/VERKTYGSPLAN.md`. Hämtat 2026-09-28 av underlagsarbetaren. Alla adresser lästa 2026-09-28 om inget annat står. Ingen publik prosa; hantverkaren skriver från detta.

Läst först, så att verktyget inte säger emot:
- `src/content/guider/fasad/mala-om-huset.mdx` (publicerad 2026-09-21)
- `src/lib/kalkyl/kvadratmeter.ts`, `src/lib/kalkyl/mala-ute.ts`
- `docs/briefer/faktablad/rakna-kvadratmeter.md`
- `.claude/skills/nytt-verktyg/SKILL.md`, avsnittet "Innan något byggs"

Märkning: **Källa** = hämtat med adress. **Utdrag** = sidan gick inte att läsa, talet kommer ur sökmotorns utdrag. **Egen räkning** = formel står bredvid. **ANTAGANDE** = vårt val, ingen källa.

---

## 0. Vad verktyget måste stämma med

| Befintlig uppgift | Var | Vad det betyder för fasadyta |
|---|---|---|
| Mät vid sockeln, höjd sockel till takfot | guiden, steg 1 och 2 | Samma mätpunkter i fälten. H = sockel till takfot. |
| Gavelspets = bredd × höjd takfot–nock / 2 | guiden, steg 3 | Samma formel som sadeltaket nedan (egen räkning ger samma sak). |
| Guidens hus: 10 × 8, 2,8 m, spetsen stiger 2 m, 10 fönster 1,2 × 1,2, 2 dörrar 1 × 2,1 → 98 m², "rundar till 100" | guiden | Räkneexempel E2 återskapar 98,2 m². Testet kan läsa guiden som facit. |
| Dörr i guiden 1,0 × 2,1 m (ytterdörr) | guiden | Kvadratmeterräknaren har 0,9 × 2,1 (innerdörr, Swedoor). Fasadverktyget ska använda 1,0 × 2,1 som guiden. Ytterdörrens mått saknar källa i båda; se "Att verifiera". |
| Fönster 1,2 × 1,2 m | guiden, `kvadratmeter.ts` (ANTAGANDE, Elitfönsters modulsystem) | Samma antagande, samma kommentar. |
| Täckfärg 6 till 8 m²/l per strykning (Beckers Perfekt Fasad, Alcro Bestå via Lovely Home) | guiden | Verktyget får inte ge ett tal utanför 6 till 8 för akrylat på trä. |
| 100 m² × 2 strykningar = 29 liter, tre burkar om 10 | guiden, två ställen (brödtext och Faq) | 200 / 29 = 6,9, alltså räknat med 7 m²/l utan paneltillägg. Se konflikt K1 nedan. |
| Slamfärg 3 till 4 m²/l, Falu Rödfärg | guiden | Samma källa nedan. |
| Grundfärgen räcker "ungefär lika långt per liter som täckfärgen" | guiden | Stämmer med Beckers Primex Trägrund nedan. |
| Burkar 1, 2,5, 10 l (ANTAGANDE), överskottsgräns 30 procent, färst burkar | `kvadratmeter.ts`, `bastaBurkar` | Samma regel kan återanvändas med andra storlekar per färg (avsnitt 6). |
| Fuktkvot högst 16 procent, 7 grader, 80 procent | `mala-ute.ts` | Verktyget länkar dit, räknar inte väder. |
| Färgtyperna akrylat, oljealkyd, slamfärg | `mala-ute.ts` `Fargtyp` | Använd samma nycklar i adressen (`akrylat`, `oljealkyd`, `slamfarg`) och lägg till `puts` och `tegel`. |

### Konflikter att besluta (UX och bygge-agenten)

- **K1. Paneltillägget mot guidens 29 liter.** Guiden räknar 100 m² plan väggyta rakt av. Lockpanel ger enligt egen räkning 20 procent mer målad yta (avsnitt 2). Med tillägget blir guidens hus 33,67 liter, fyra burkar om 10, inte tre. Antingen visar verktyget tillägget och guiden får en rad om det, eller så räknar verktyget utan tillägg. Förslag: verktyget visar **två tal**, väggytan (den målaren tar betalt för och som guiden räknar) och den målade ytan (den färgen räcker till). Guidens pris per kvadratmeter gäller väggytan.
- **K2. Åtgångens kant.** `kvadratmeter.ts` räknar med nedre kanten av tillverkarnas intervall. För fasad ger tillverkarna delade tal för sågat/nytt och hyvlat/tidigare målat (avsnitt 3). Förslag: nedre kanten inom rätt delintervall, alltså 7 för tidigare målat och 6 för nytt sågat trä. Då stämmer guidens 29 liter (7 m²/l, ommålning).

---

## 1. Geometrin (egen räkning)

Beteckningar: L = husets längd (långsidan, takfotens riktning på sadeltak), B = gavelns bredd, H = höjd sockel till takfot, v = takvinkel i grader, t = höjd från takfot till nock. Alla mått i meter.

Formlerna är egen räkning, plan geometri. Ingen extern källa behövs; guiden använder sadeltakets formel i steg 3.

| Takform | t ur vinkel | Vinkel ur t | Gavelyta utöver väggarna (båda gavlar) | Anmärkning |
|---|---|---|---|---|
| Sadeltak | t = (B / 2) · tan v | v = atan(2t / B) | B · t (två trianglar à B · t / 2) | Samma som guidens steg 3. |
| Pulpettak | t = B · tan v | v = atan(t / B) | t · (B + L): två trianglar à B · t / 2 plus den höga långsidan L · t | H = låga sidans höjd till takfot. Taket lutar tvärs över B. |
| Valmat tak | ingen | ingen | 0 | Alla fyra sidor slutar vid takfoten. |
| Halvvalmat | se "Att verifiera" | | Delvis spets | Ej räknat; kräver valmens höjd. Förslag: utelämnas i version ett. |
| Mansardtak | t1 = a · tan v1, t2 = (B / 2 − a) · tan v2 | | 2 · [ (B + (B − 2a)) / 2 · t1 + (B − 2a) · t2 / 2 ] | a = vågrätt avstånd från fasadliv till brytpunkten, v1 nedre (branta) vinkeln, v2 övre. Tre fält till. Förslag: version två, eller bara med nockhöjd och brytpunkt som mått. |

Hela ytan:

```
omkrets        = 2 · (L + B)
väggar brutto  = omkrets · H
gavelyta       = enligt takform ovan
brutto         = väggar brutto + gavelyta
avdrag         = antal fönster · fb · fh + antal dörrar · db · dh
väggyta netto  = brutto − avdrag
målad yta      = väggyta netto · profilfaktor          (avsnitt 2)
liter täckfärg = målad yta · strykningar / åtgång      (avsnitt 3, 4)
liter grundfärg= målad yta · 1 / grundfärgens åtgång  (när fallet kräver grundfärg, avsnitt 4)
```

Nockhöjd som fält: om läsaren mäter nockhöjden från sockeln blir t = nockhöjd − H. Gränsfel om nockhöjd ≤ H.

Kontrolltal: tan 27° = 0,50953. t = 2,0 m på B = 8 m ger v = 26,565°.

Gränser, förslag (ANTAGANDE, i linje med `kvadratmeter.ts`): L och B 2 till 50 m, H 1,5 till 12 m (tre våningar), v 5 till 60 grader (sadel), 3 till 30 (pulpet), fönster och dörrar 0 till 60 st, avdraget får inte bli ≥ brutto (samma felregel som kvadratmeterräknaren).

---

## 2. Tillägg för träpanelens profil

### Vad källorna säger

| Källa | Vad den anger | Faktor? |
|---|---|---|
| Beckers, Perfekt Fasad och Perfekt Oljefärg, datablad, https://beckers.se/produkter/perfekt-fasad, https://beckers.se/produkter/perfekt-oljefarg-0 | Åtgång per m², ingen profilfaktor | Nej |
| Alcro, Måla träfasad, https://alcro.se/tips-rad/mala-utomhus/mala-trafasad (utdrag) | "Mät fasadens yta", åtgång ur databladet | Nej |
| Nordsjö, Beräkna hur mycket färg du behöver, https://www.nordsjo.se/sv/inredningstips-och-r%C3%A5d/ber%C3%A4kna-hur-mycket-f%C3%A4rg-du-beh%C3%B6ver | Bredd × höjd, dra av fönster och dörrar, minst två strykningar | Nej |
| Falu Rödfärg, Hur mycket färg går det åt, https://falurodfarg.com/vanliga-fragor/malningen/hur-mycket-farg-gar-det-at/ | Sågat drar mer än hyvlat, ingen faktor | Nej |
| Jotun | Svenska produktsidan kräver inloggning (302 till login.microsoftonline.com); ej läst | Okänt |
| Svenskt Trä, Byggbeskrivningar, Utvändiga träpaneler, uppdaterad 2021-12-27, https://www.byggbeskrivningar.se/utvandigt/utvandiga-trapaneler/, och broschyren SKI-0142 via https://www.xlbyggstenvalls.se/umea/api/artikel/artikelgruppfil/559a8076e95ae/SKI-0142-Utv%C3%A4ndiga%20tr%C3%A4paneler-tryck_XL_Ny.pdf | Panelmått och virkesåtgång, ingen målningsfaktor. Lockpanel: bottenbräda 22 × 145, lockbräda 22 × 120, minst 20 mm överlapp, 4,44 lm/m² av varje. Lockläkt 16 × 45. Spontad ytterpanel 22 × 95/120/145 med täckande bredd 85/102/130. | Nej, men måtten räcker för egen räkning |
| Sökutdrag som tillskriver Fasadum "cirka 20 % högre" för lockpanel och "cirka 12 %" för läkt | Fasadums artikel (2025-06-02, https://fasadum.se/blogg/fargatgang-vid-fasadmalning-sa-mycket-farg-behover-du-nar-du-ska-mala-om-huset/) innehåller **inte** talen när den läses. Källan till utdraget är okänd. | Används inte |

**Ingen färgtillverkare och inte Svenskt Trä anger en profilfaktor.** Faktorn nedan är därför egen räkning ur Svenskt Träs mått, märkt så.

### Egen räkning per profil

Princip: på en meter vägg räknas den plana ytan (framsidor) som väggytan. Utöver den målas de kanter som står ut ur planet och syns. Faktor = 1 + synlig kanthöjd per centrumavstånd.

| Profil | Mått (källa) | Formel | Faktor | Märkning |
|---|---|---|---|---|
| Stående lockpanel (lock-på-bräd) | Bottenbräda 22 × 145, lockbräda 22 × 120, 4,44 lm/m² → c/c 225 mm (Svenskt Trä) | 1 + 2 · 22 / 225 | 1,195, **avrundat 1,20** | Egen räkning |
| Stående lockläktspanel (bräda med locklist/lockläkt) | Lockläkt 16 × 45 (Svenskt Trä); brädbredd ej fastlagd | 1 + 2 · 16 / brädbredd | 1,22 vid 145 mm, 1,16 vid 195 mm; **förslag 1,20** | Egen räkning, brädbredden ANTAGANDE |
| Stående spontad panel, slät | Täckande bredd 85 till 130 (Svenskt Trä) | Inga utstående kanter | **1,00** | Egen räkning; faser och spår försummas (ANTAGANDE) |
| Liggande fasspont (enkelfasspont) | 22 × 95/120/145 (Svenskt Trä); fasens mått anges inte | Fasen ger en liten sned yta | **1,00**, möjligen 1,05 | ANTAGANDE, fasmåttet saknas |
| Spontad panel med lockläkt | Som lockläktspanel | 1 + 2 · 16 / c/c | se lockläkt | Egen räkning |
| Fjällpanel, stockpanel | Svenskt Trä listar dem | Ej räknat | Utelämnas | Saknas |
| Puts, tegel | | | 1,00 | Ingen profil |

Vad som gäller när ingen källa anger en faktor: verktyget räknar faktorn ur Svenskt Träs mått och skriver att det är egen räkning. Profilen ska vara ett eget val med "slät" som standardvärde om UX-agenten vill undvika ett okällat påslag som default; annars lockpanel (vanligaste panelen enligt Svenskt Trä: "Lockpanel är den i dag vanligaste panelen i Sverige").

Utöver profilen: Falu Rödfärg och Beckers skiljer på sågat och hyvlat i **åtgången**, inte i ytan. Det hanteras i avsnitt 3, inte som faktor. Dubbelräkna inte.

---

## 3. Färgåtgång per strykning

Alla tal m²/liter per strykning enligt produktens datablad eller produktsida, lästa 2026-09-28.

### Täckfärg på trä

| Färgtyp | Produkt | Sågat/nytt | Hyvlat/tidigare målat | Källa |
|---|---|---|---|---|
| Akrylat | Beckers Perfekt Fasad | 6 till 8 (ingen uppdelning) | 6 till 8 | https://beckers.se/produkter/perfekt-fasad |
| Akrylat | Alcro Bestå Täckfärg | 6 till 7 | 7 till 8 | **Utdrag** ur alcro.se/produkter/besta-tackfarg (sidan omdirigerar till alcrostudio.se som inte visar talen). Lovely Home anger 6 till 8, https://www.lovelyhome.se/farg/alcro-besta-tackfarg |
| Akrylat | Nordsjö Tinova Exterior | 4 till 6 (nymålning) | 6 till 8 (ommålning) | https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-exterior |
| Akrylat | Nordsjö Tinova Premium Exterior+ | 4 till 6 (nymålning) | 6 till 8 (ommålning) | https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-premium-exterior |
| Akryl-alkyd | Jotun Drygolin Nordic Extreme | 6 till 8 (ohyvlat) | 8 till 12 (hyvlat) | Butik: Bauhaus, https://www.bauhaus.se/fasadfarg-jotun-drygolin-nordic-extreme-halvblank-vit-9-l. Jotun.no anger "10 m²/l", https://www.jotun.com/no-no/jotun/decorative/exterior/products/drygolin-nordic-extreme. Svenska sidan kräver inloggning. |
| Oljealkyd (täckande oljefärg) | Beckers Perfekt Oljefärg | 6 till 7 (sågade paneler) | 7 till 8 (hyvlade/tidigare målade) | https://beckers.se/produkter/perfekt-oljefarg-0 |
| Linoljefärg | Engwall o. Claesson utvändig | 12 till 15 | | **Utdrag**; produktsidan gav 404. Colorama anger "upp till 15", https://www.colorama.se/inspiration/mala/mala-utomhus/vad-kostar-det-egentligen-att-mala-om-huset. Ej förslag för version ett. |
| Slamfärg | Falu Rödfärg Original | ca 3 (folder), 3 till 4 (FAQ), 3 (produktsida) | Ska inte målas på hyvlat | Folder 2023, https://falurodfarg.com/wp-content/uploads/2023/05/tips-och-rad-folder-2023.pdf; https://falurodfarg.com/vanliga-fragor/malningen/hur-mycket-farg-gar-det-at/; https://falurodfarg.com/farger/falu-rodfarg-original/ |
| Slamfärg, sprutad | Falu Rödfärg Original sprutfärg | ca 2,5 | | https://falurodfarg.com/vanliga-fragor/falu-rodfarg-original/hur-manga-kvadratmeter-per-liter-falu-rodfarg/ |
| Modern "slamlik" | Falu Rödfärg Träfasad, Knut & Foder | 6 till 7 (FAQ), ca 6 (folder) | | Samma två Falu-källor |

Hur skicket ändrar åtgången enligt databladen:
- Sågat drar mer än hyvlat: Beckers Perfekt Oljefärg 6–7 mot 7–8; Alcro Bestå 6–7 mot 7–8 (utdrag); Jotun 6–8 mot 8–12; Falu: "Hyvlade snickerier och jämna ytor suger upp mindre färg".
- Ny yta drar mer än ommålning: Nordsjö Tinova 4–6 mot 6–8.
- Torrt eller väderbitet trä: Falu, "kan suga upp mer färg" utöver tabellen (inget tal).
- Alcro Bestå, hyvlat: svårt att få tillräcklig skikttjocklek; tunnare skikt än rekommenderat kräver ett skikt till (utdrag).

### Grundolja och grundfärg

| Produkt | Åtgång m²/l | Var den ska | Källa |
|---|---|---|---|
| Beckers Primex Grundolja Trä Plus | 6 till 12 | Ändträ, skarvar, spikhål på nytt trä; kan inte läggas på hel färg | https://beckers.se/produkter/primex-grundolja-tra-plus |
| Beckers Primex Trägrund Plus | 6 till 7 sågat, 7 till 8 hyvlat/tidigare målat | Hela fasaden på nytt trä, dåligt skick, stort kulörbyte | https://beckers.se/produkter/primex-tragrund-plus |
| Nordsjö Tinova Primer Exterior | 4 till 8 | "1 coat primer + 2 coats" | https://www.nordsjo.se/sv/produkter/nordsj%C3%B6-tinova-primer-exterior |
| Alcro Grundfärg (trä, utomhus) | 6 till 8; sågat 6 till 7 | Omålade ytor; hela fasaden om skicket är dåligt | **Utdrag**; alcro.se omdirigerar, Lovely Homes PDF är en bild och gick inte att läsa |
| Falu Rödfärg Original, grundstrykning | ca 3 (samma färg förtunnad 10–15 % med vatten) | Nytt obehandlat virke | Folder 2023 |

Grundoljans liter går inte att räkna på väggytan: den ska bara på ändträ och skarvar, och ingen källa anger andelen av ytan. **Förslag:** grundolja räknas inte i liter; verktyget säger att den behövs på nytt trä och på bart trä, och var. Saknas: tal för andel ändträ och skarvar.

### Puts och tegel

| Underlag | Produkt | Åtgång m²/l | Strykningar | Källa |
|---|---|---|---|---|
| Puts, silikat | Beckers Mineral Silikatfärg | 3 till 5 | Porös yta: grund + mellan + slut; tät yta: grund + en (se "Att verifiera"). Ny puts ska härda 6 till 8 veckor. | https://beckers.se/produkter/mineral-silikatfarg |
| Puts, akrylat | Beckers Putsfärg | 5 till 8 | ej läst | **Utdrag**, sidan gav 403: https://beckers.se/produkter/putsfarg |
| Puts, akrylat | Alcro Puts Täckfärg | ej läst | ej läst | Omdirigering till alcrostudio.se, ej hämtad |
| Tegel slammat | Caparol Capatect Tegelslamning + ThermoSan eller Sylitol | ej angivet i m²/l i broschyren | ThermoSan "två strykningar"; färdigstrykning "1-2 ggr" beroende på kulör och underlag; Sylitol "En till två strykningar" | https://www.caparol.se/fileadmin/data_se/images/fasadsystem/broschyrer/ct-tegelslamning-broschyr.pdf (daterad 2023-01-01) |

### Förslag till konstanter (ANTAGANDE om val, källan per tal ovan)

| Nyckel | Fall | m²/l | Grund |
|---|---|---|---|
| `akrylat` | tidigare målat | 7 | Nedre kanten av hyvlat/tidigare målat (Alcro 7–8, Nordsjö 6–8 ommålning; Beckers 6–8). Ger guidens 29 l. |
| `akrylat` | nytt, sågat | 6 | Nedre kanten av Alcro sågat 6–7 och Beckers 6–8. Nordsjö anger 4–6 för nymålning; se "Att verifiera". |
| `oljealkyd` | tidigare målat | 7 | Beckers Perfekt Oljefärg 7–8 |
| `oljealkyd` | nytt, sågat | 6 | Beckers Perfekt Oljefärg 6–7 |
| `slamfarg` | alla | 3 | Falu Rödfärg Original, "ca 3" (folder), nedre kanten av 3–4 |
| `grundfarg` | sågat | 6 | Beckers Primex Trägrund Plus 6–7 |
| `grundfarg` | hyvlat/tidigare målat | 7 | Beckers Primex Trägrund Plus 7–8 |
| `puts` | silikat | 3 | Beckers Mineral Silikatfärg, nedre kanten av 3–5 |
| `tegel` | | ingen | Verktyget räknar inte liter (avsnitt 5) |

---

## 4. Antal strykningar per fall

| Fall | Grundolja | Grundfärg | Täckfärg | Källa |
|---|---|---|---|---|
| Ommålning, samma färgtyp och kulör, färgen sitter | Bara på bart trä | Fläckgrundning på bart trä | 2 | Beckers Perfekt Fasad datablad ("två strykningar"); Beckers forum, https://forum.beckers.se/org/beckers/d/mala-husfasad/ ("ett varv Grundfärg till ytor som behöver grundmålas och två varv Täckfärg"); Alcro, måla träfasad ("Måla alltid två gånger", utdrag); Nordsjö ("minst två strykningar") |
| Ommålning, dåligt skick | Bart trä | Hela fasaden, 1 | 2 | Beckers Perfekt Fasad datablad; Alcro måla träfasad (utdrag) |
| Kulörbyte med stor skillnad i ljushet | Bart trä | Hela fasaden, 1 | 2 | Beckers forum, https://forum.beckers.se/org/beckers/d/fran-morkgra-fasad-till-utevit/ ("grundmåla hela fasaden"); Alcro forum, https://forum.alcrostudio.se/org/alcro/d/ommalningkulorsattning-fasad-60-talshus/ ("grundmålar hela er fasad ett varv"). Inget datum på forumsvaren. |
| Nytt trä, sågat | Ändträ och skarvar | Hela fasaden, 1 | 2 | Beckers Perfekt Fasad och Perfekt Oljefärg, datablad; Nordsjö Tinova Primer ("1 coat primer + 2 coats"); Svenskt Trä, byggbeskrivningar ("täckande färg som ska strykas två gånger, om inget annat anges av färgtillverkaren") |
| Nytt trä, hyvlat | Som sågat | 1 | 2, ev. 3 | Alcro Bestå: extra skikt om skikten blir tunna (utdrag); Jotun Drygolin Nordic Extreme "2-3" (Bauhaus) |
| Slamfärg, nytt virke | | Första strykningen förtunnad 10–15 % | 1 till (totalt 2) | Falu Rödfärg folder 2023: "Två tunna stryk med färg vid nymålning" |
| Slamfärg, ommålning | | | 1 | Falu Rödfärg folder 2023: "Ett tunt stryk med färg vid ommålning" |
| Falu Träfasad / Knut & Foder, ommålning samma typ | | | Vanligen 1 | https://falurodfarg.com/vanliga-fragor/falu-rodfarg-original/hur-manga-kvadratmeter-per-liter-falu-rodfarg/ |
| Byte av färgtyp | | | | Beckers, välj rätt fasadfärg, https://beckers.se/tips-och-rad/fasad/farg-till-fasad: fortsätt med samma typ; byte "krångligt och onödigt". Verktyget räknar inte fallet; pekar till guiden. |
| Slamfärg ovanpå täckfärg | | | | Falu Original "kan bara målas på omålat eller slamfärgat trä" (folder). Verktyget ska säga nej. |
| Sågat mot hyvlat | | | Samma antal | Påverkar åtgången, inte antalet (avsnitt 3). Falu Original ska inte på hyvlat. |

Kulörbyte "stor skillnad" saknar mått hos båda tillverkarna. ANTAGANDE: läsaren väljer själv "byter till en mycket ljusare eller mörkare kulör".

---

## 5. Tegel

| Påstående | Källa | Adress |
|---|---|---|
| "Tegelfasader är när de är omålade i regel underhållsfria och mår bäst av att inte målas" | Alcro kundforum (inget datum) | https://forum.alcrostudio.se/org/alcro/d/kan-man-mala-en-tegelfasad/ |
| "Målar man direkt på tegel finns ökad risk för Frost-sprängning" (fukt samlas i fogarna) | Alcro kundforum | samma |
| Vill man ändå: utjämnande puts (slamning) först, sedan silikatfärg | Alcro kundforum | samma |
| "Det råa teglet kräver heller inget underhåll, och det håller mer än hundra år." | Wienerberger, 2019-05-01 | https://www.wienerberger.se/om-oss/nyheter/tegelfasaden-aar-den-mest-haallbara-loesningen.html |
| Behandlas fasaden med färg eller puts blir underhållsbehovet större | **Utdrag** ur wienerberger.se (sidan "Om fasadtegel" läst, meningen fanns inte där; utdraget pekar på wienerberger.se utan exakt sida) | https://www.wienerberger.se/produkter/fasadtegel/om-fasadtegel.html |
| Wienerbergers skötselsida tar inte upp målning alls, bara rengöring, saltutslag, klotterskydd | Wienerberger | https://www.wienerberger.se/produkter/fasadtegel/fasadtegel_skoetsel-och-underhaall-av-fasadtegel.html |
| Tegelslamning används på sönderfruset tegel och för att få en torr fasad; system: slamning, mellanstrykning, 1–2 färdigstrykningar | Caparol, broschyr 2023-01-01 | https://www.caparol.se/fileadmin/data_se/images/fasadsystem/broschyrer/ct-tegelslamning-broschyr.pdf |
| Målning av tegel är i praktiken oåterkallelig och ger ett nytt underhållsmoment | **Utdrag** tillskrivet Hålla hus (Skellefteå museum m.fl.); sidan lästes men meningen fanns inte i den del som hämtades | https://hallahus.se/renovera/fasaden/tegelfasader/ |
| Byggfaktadokumentation | Ej sökt | |

Slutsats för verktyget (stöds av Alcro och Wienerberger): väljer läsaren tegel svarar verktyget att omålat tegel inte ska målas, visar fasadytan i kvadratmeter men ingen liter, och pekar på slamning plus silikatfärg som systemet om huset redan är målat eller teglet är skadat. Slamningens åtgång (kg/m²) saknas.

---

## 6. Burkstorlekar

| Produkt | Storlekar som hittats | Källa, datum 2026-09-28 |
|---|---|---|
| Beckers Perfekt Fasad | 0,9 l (Happy Homes, 499 kr); 10 l vit färdigblandad "200 Vit" (K-Bygg, 2 695 kr); 10 l "Plus" (K-Bygg, 3 319 kr, utgående) | https://www.happyhomes.se/farg/varumarke/beckers/perfekt-fasad-base-a; https://k-bygg.se/produkt/fasadfarg-beckers-perfekt-fasad-200-vit-10l/7311231808291; https://k-bygg.se/produkt/fasadfarg-beckers-perfekt-fasad-plus-10l/7311231800851 |
| Beckers Perfekt Fasad, 2,7 och 9 l | **Utdrag** (Bauhaus i sökresultat); Bauhaus sida visar bara 0,9 och 1 l för Fasad Plus Helmatt | https://www.bauhaus.se/farg-tapet/farg-utomhus/fargsystem-utomhus/beckers-perfekt-plus |
| Beckers Perfekt Oljefärg | 3 l (bilden på produktsidan) | https://beckers.se/produkter/perfekt-oljefarg-0 |
| Alcro Bestå Täckfärg | 1, 3, 10 l; 2 299 kr (10 l) | https://www.lovelyhome.se/farg/alcro-besta-tackfarg |
| Nordsjö Tinova Exterior | 1, 2,5, 10 l; 1 699 kr (10 l vit) | https://www.hornbach.se/p/fasadfarg-nordsjo-tinova-exterior-vit-10l/5492079/ |
| Jotun Drygolin Nordic Extreme | 2,7, 9 l; 3 495 kr (9 l) | https://www.bauhaus.se/fasadfarg-jotun-drygolin-nordic-extreme-halvblank-vit-9-l |
| Falu Rödfärg Original | 5 l (Happy Homes, 499 kr), 10 l (K-Bygg 699 kr enligt guiden) | https://www.happyhomes.se/farg/utomhusfarg/fasadfarg/falu-rodfarg-rod-5l |

Hur tillverkarna avrundar: **saknas**. Nordsjö och Alcro hänvisar till färgräknare på produktsidorna, som inte gick att läsa (skriptade). Ingen tillverkare anger en regel.

Förslag (ANTAGANDE): burkstorlekar per färgtyp, samma `bastaBurkar`-regel som kvadratmeterräknaren (färst burkar inom 30 procent överskott, annars minst liter).
- `akrylat`, `oljealkyd`, `grundfarg`: 1, 3, 10 l (Alcro Bestå). Burkar på 0,9/2,7/9 finns hos Jotun och i brytbaser; nämns i texten, räknas inte.
- `slamfarg`: 5, 10 l (Falu Original).
- `puts`: 1, 5, 10 l (ANTAGANDE, ingen källa hämtad).

---

## 7. Spill, marginal och avdrag

| Fråga | Svar | Källa |
|---|---|---|
| Marginal enligt tillverkarna | **Saknas.** Ingen av Beckers, Alcro, Nordsjö, Jotun eller Falu anger en procentsats. | Sidorna i avsnitt 3 |
| Marginal enligt firma | "Köp alltid 10–15 % extra för bättringar" | Fasadum (målerifirma), 2025-06-02, https://fasadum.se/blogg/fargatgang-vid-fasadmalning-sa-mycket-farg-behover-du-nar-du-ska-mala-om-huset/ |
| Sprutmålning | Spillfaktor 1,2 till 1,4 | Färgspruta.com, uppdaterad 2026-09-22, ingen namngiven avsändare, https://fargspruta.com/fargatgang/. Svag källa. Falu anger 2,5 m²/l sprutad mot 3 penslad, alltså cirka 20 % mer (egen räkning 3 / 2,5 = 1,2). |
| Fönster och dörrar: verklig yta eller schablon | Verklig yta. Nordsjö: dra av fönster och dörrar; Lovely Home: räkna fönster och dörrar och dra av; Proffsmagasinet (2024-06-04): "Räkna bort de ytor som inte ska målas". Ingen källa ger schablon. | Nordsjö-sidan ovan; https://www.lovelyhome.se/blogg/fasadfarg-atgang; https://www.proffsmagasinet.se/kunskapsportalen/guider/fargmangd-guide |
| Standardmått när läsaren inte mätt | Fönster 1,2 × 1,2 (ANTAGANDE, samma som guiden och kvadratmeterräknaren), dörr 1,0 × 2,1 (guidens tal, källa saknas) | |

Förslag: ingen spillprocent i talet (burkregeln ger redan upp till 30 procent över), men en rad om Fasadums 10–15 procent. Kvadratmeterräknarens "köp inte exakt"-regel gäller även här.

---

## 8. Räkneexempel att testa mot

Räknade med skriptet i scratchpad (Node), formlerna i avsnitt 1. Fönster 1,2 × 1,2, dörr 1,0 × 2,1. Burkregeln = `bastaBurkar` med storlekarna i avsnitt 6. Liter avrundade till två decimaler före burkvalet, som i `kvadratmeter.ts`. Lockfaktor 1,20.

| # | Hus | Tak | Avdrag | Profil | Färg, fall | m²/l | Stryk | Väggar brutto | Gavelyta | Brutto | Netto väggyta | Målad yta | Liter | Burkar |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E1 | 10 × 8, H 2,5 | Sadel 27°, t = 2,038 | 10 fönster, 2 dörrar = 18,6 | Lock 1,20 | Oljealkyd, ommålning | 7 | 2 | 90 | 16,305 | 106,305 | 87,705 → **87,71** | 105,25 | **30,07** | 3 × 10 + 1 × 1 = 31 l |
| E1b | som E1 | | | Slät 1,00 | Oljealkyd, ommålning | 7 | 2 | 90 | 16,305 | 106,305 | 87,71 | 87,71 | 25,06 | 3 × 10 = 30 l |
| E2 | Guidens hus 10 × 8, H 2,8 | Sadel, t = 2,0 (v = 26,57°) | 18,6 | Slät 1,00 | Akrylat, ommålning | 7 | 2 | 100,8 | 16 | 116,8 | **98,2** (guiden: 98) | 98,2 | 28,06 (guiden: 29 på 100 m²) | 3 × 10 = 30 l (guiden: tre burkar om 10) |
| E2b | som E2 | | | Lock 1,20 | Akrylat, ommålning | 7 | 2 | | | | 98,2 | 117,84 | 33,67 | 4 × 10 = 40 l (konflikt K1) |
| E3 | som E1 | Sadel 27° | 18,6 | Lock 1,20 | Nytt sågat trä: grundfärg 1 + oljealkyd 2 | 6 / 6 | 1 + 2 | | | | 87,71 | 105,25 | grund 17,54; täck 35,08 | grund 2 × 10; täck 4 × 10 |
| E4 | som E1 | Sadel 27° | 18,6 | Lock 1,20 | Kulörbyte: grundfärg 1 + täck 2, tidigare målat | 7 / 7 | 1 + 2 | | | | 87,71 | 105,25 | grund 15,04; täck 30,07 | grund 1 × 10 + 2 × 3 = 16 l; täck 31 l |
| E5 | 10 × 8, H 2,5 (låga sidan) | Pulpet 15°, t = 2,144 | 18,6 | Slät 1,00 | Akrylat, ommålning | 7 | 2 | 90 | 38,585 (= 2,144 × 18) | 128,585 | 109,985 → **109,99** | 109,98 | 31,42 | 3 × 10 + 1 × 3 = 33 l |
| E6 | 10 × 8, H 2,5 | Valmat | 18,6 | Lock 1,20 | Slamfärg, ommålning | 3 | 1 | 90 | 0 | 90 | **71,4** | 85,68 | 28,56 | 3 × 10 = 30 l |
| E6b | som E6 | Valmat | 18,6 | Lock 1,20 | Slamfärg, nytt virke | 3 | 2 | | | | 71,4 | 85,68 | 57,12 | 6 × 10 = 60 l |
| E7 | som E1, puts | Sadel 27° | 18,6 | 1,00 | Silikatfärg | 3 | 2 | 90 | 16,305 | 106,305 | 87,71 | 87,71 | 58,47 | 6 × 10 = 60 l (burkar 1/5/10 ANTAGANDE) |
| E8 | 10 × 8, H 2,5 | Mansard a = 1,0, v1 = 60°, v2 = 30° (t1 = 1,732, t2 = 1,732) | 18,6 | | | | | 90 | 34,641 (17,321 per gavel) | 124,641 | 106,041 | | | |
| E9 | som E1 utan fönster och dörrar | Sadel 27° | 0 | Lock 1,20 | Oljealkyd, ommålning | 7 | 2 | 90 | 16,305 | 106,305 | 106,305 | 127,57 | 36,45 | 4 × 10 = 40 l. Ska ge rådet om att fylla i avdrag, som kvadratmeterräknaren. |
| E10 | 10 × 8, H 2,5 | Sadel 45°, t = 4 | 18,6 | | | | | 90 | 32 | 122 | 103,4 | | | |
| E11 | Tegel, 10 × 8, H 2,5, sadel 27° | | 18,6 | | Tegel | | | 90 | 16,305 | 106,305 | 87,71 | | ingen | Besked: målas inte (Alcro, Wienerberger) |

Kontroller för testet:
- Vinkel och nockhöjd ger samma svar: sadel, B = 8, t = 2,0 ↔ v = 26,565°; gavelyta 16,00 båda vägar.
- Valmat ger gavelyta 0 oavsett vinkel.
- Pulpet: gavelyta = t · (B + L); byter man L och B ändras svaret (taket lutar över B). Fältet måste säga vilken sida som är gavel.
- Avdrag ≥ brutto ger fel på fönster- och dörrfälten (samma som `kvadratmeter.ts`).
- Slamfärg + "tidigare målat med täckfärg" ger besked, inte liter (Falu folder).

---

## Att verifiera

1. **Profilfaktorn** har ingen tillverkarkälla. 1,20 för lockpanel är egen räkning ur Svenskt Träs mått (22 mm lockbräda, c/c 225 mm). Fråga Beckers eller Alcro kundtjänst om de räknar med ett påslag. Sökutdragets "20 % lockpanel, 12 % läkt" tillskrivet Fasadum finns inte i Fasadums artikel och används inte.
2. **Fasspont och spontad panel** 1,00 är ANTAGANDE; fasens mått saknas hos Svenskt Trä.
3. **Alcro Bestå sågat 6–7 / hyvlat 7–8** och **Alcro Grundfärg** är utdrag; databladet (PDF hos Lovely Home) är en inskannad bild. Läs databladet i webbläsare eller be Alcro om PDS.
4. **Nordsjö 4–6 m²/l för nymålning** ligger under förslaget 6 för nytt sågat trä. Beslut: räkna nytt trä med 6 (Beckers, Alcro) eller 5 (egen mitt) eller låt Nordsjö styra? Idag följer förslaget Beckers och Alcro.
5. **Jotun** svenska produktsidor kräver inloggning; bara butikens och den norska sidans tal är lästa.
6. **Beckers Putsfärg 5–8 m²/l** är utdrag (403). **Beckers Mineral Silikatfärg**: strykningarna ("två på porös yta med grund och mellanstrykning, en på tät med grund") är en sammanfattning, läs databladets exakta ordalydelse.
7. **Tegel**: Wienerbergers mening om att färg och puts ökar underhållet är utdrag; exakt sida saknas. Hålla hus-citatet är utdrag. Byggfaktadokumentation ej sökt. Slamningens åtgång i kg/m² saknas.
8. **Burkstorlekar**: Beckers Perfekt Fasad i 2,7 och 9 l är utdrag; Falu Original i 1 l okänt. Tillverkarnas avrundning saknas helt.
9. **Ytterdörrens mått 1,0 × 2,1** står i guiden utan källa. Fönstret 1,2 × 1,2 är ANTAGANDE i både guiden och kvadratmeterräknaren.
10. **Mansard och halvvalmat**: formeln för mansard står; halvvalmat är inte räknat. Beslut om version ett.
11. **Grundoljans mängd**: ingen källa för andel ändträ och skarvar; förslaget är att inte räkna liter.
12. **Kulörbyte "stor skillnad"**: Beckers och Alcro säger inte var gränsen går.
13. Beckers forumsvar och Alcros forumsvar saknar datum.

## Sidor som inte gick att läsa

- https://www.sambla.se/bolan/renovering/mala-om-huset-kostnad/ (429)
- https://beckers.se/produkter/putsfarg (403)
- https://www.jula.se/catalog/bygg-och-farg/farg-och-fog/utomhusfarg/fasadfarg/falu-rodfarg-500349/ (403)
- https://www.jotun.com/se-se/jotun/decorative/exterior/products/drygolin-pluss-oljemaling (omdirigering till inloggning)
- https://www.eoc.se/webshop/utomhus/utvandig-linoljefarg (404)
- Alcros produktsidor på alcrostudio.se visar inte åtgång; Lovely Homes Alcro-PDF (Grundfärg) är en bild; Bestå-PDF gav 404
- Alcros sida om puts täckfärg (omdirigering, ej hämtad)

---

## Vad ettan på "måla om huset kostnad" saknar

Sökning 2026-09-28. Plats 1 är Sambla (https://www.sambla.se/bolan/renovering/mala-om-huset-kostnad/), som inte gick att läsa (429). Utdraget: 230–300 kr/kvm exklusive rot och färg, ett räkneexempel på 100 m² fasad, 500 kr/timme. Plats 2 Colorama (läst): säger "räkna ut den totala fasadytan och dra av dörrar och fönster", nämner trigonometri men visar ingen formel; akrylat 6–8, slamfärg 3, linolja upp till 15 m²/l; två strykningar, linolja tre, slamfärg ofta en; inga datum.

Vad vår sida med verktyget kan ha som ettan (och tvåan) saknar:
- Formeln från husets mått till kvadratmeter, med gavelspetsar per takform, räknad åt läsaren.
- Takvinkel eller nockhöjd som indata; valmat tak utan spetsar, pulpet med hög långsida.
- Fönster- och dörravdrag med verkliga mått, inte bara "dra av".
- Skillnaden mellan väggytan (som målaren tar betalt för) och den målade ytan (lockpanelens kanter, cirka 20 procent mer enligt egen räkning ur Svenskt Träs mått).
- Åtgång per färgtyp och skick (sågat/nytt mot hyvlat/tidigare målat) med produktnamn och datablad.
- Antal strykningar och grundfärg per fall: ommålning, kulörbyte, nytt trä, slamfärg.
- Liter omräknat till burkar i storlekar som finns i butik.
- Besked om att omålat tegel inte ska målas, med källa.
- Länk vidare till kostnaden (guiden) och vädret (/rakna/mala-ute/) med samma tal.

---

## Kontroll 2026-09-28

Underlagsarbetaren, beställt enligt specens avsnitt "Före publicering" (Att verifiera 3 och 6). Båda databladen lästa ordagrant i tillverkarens egen PDF, hämtade 2026-09-28.

### Källor

| Dokument | Adress | Version |
|---|---|---|
| Beckers Mineral Silikatfärg, produktsida | https://beckers.se/produkter/mineral-silikatfarg | |
| Beckers Mineral Silikatfärg, produktdatablad (PDF) | https://beckers.se/sites/default/files/pim/documents/Mineral_Silikatf%C3%A4rg_SV_PDS_Beckers_0.pdf | "Version 20240708" |
| Alcro Bestå Täckfärg, produktsida | https://alcro.se/produkter/besta-tackfarg, omdirigerar till https://www.alcrostudio.se/sv-SE/product/besta-tackfarg/221002ASE14349 | |
| Alcro Bestå Täckfärg, produktfaktablad (PDF, länkad från produktsidan som "Data Sheet") | https://dam-cdn.ppg.com/adaptivemedia/rendition?id=4db5407f1a3c9ee8e3a4838cb0fc20fe14307bb4 | "Version 100724" |

### Beckers Mineral Silikatfärg, ordagrant ur databladet

- Materialåtgång: "3-5 m²/l". Samma tal på produktsidan.
- Nya ytor: "Nyputsade ytor behandlas tidigast efter 6-8 veckors härdning."
- Tidigare målade ytor: "Måla ej på organiska underlag. Organiska färger och beläggningar avlägsnas helt med lämplig metod". Produkten är enligt ingressen "en täckfärg för tidigare silikatmålade ytor eller omålade ytor".
- "TÄTA YTOR, GRUNDNING: Täta, fasta och hårda ytor grundas en gång med en blandning av Primex Silikatbinder och Mineral Silikatfärg i proportion 1:2."
- "TÄTA YTOR, YTMÅLNING: Ytmålningen utförs då grundmålningen torkat minst 12 timmar med Mineral Silikatfärg, vilken kan förtunnas max 10% med Primex Silikatbinder."
- "PORÖSA YTOR, GRUNDNING: Porösa, sugande underlag grundas med en blandning av Primex Silikatbinder och vatten i proportion 1:1."
- "PORÖSA YTOR, MELLANSTRYKNING: … kan Mineral Silikatfärg förtunnas max 10% med Primex Silikatbinder."
- "PORÖSA YTOR, YTMÅLNING: Ytmålningen utförs då mellanstrykningen torkat minst 12 timmar."
- Antal strykningar på tidigare silikatmålad yta: **saknas** i databladet.
- Primex Silikatbinders åtgång: **saknas** (inte i databladet, binderns datablad inte läst).
- Burkstorlekar: **saknas i text**. Produktsidans tre produktbilder heter `Mineral_Silikatf%C3%A4rg_1L_HR.jpg`, `Mineral_Silikatf%C3%A4rg_3L_HR.jpg` och `Mineral_silikatf%C3%A4rg_10L_HR.jpg`, alltså 1, 3 och 10 l. Svag källa: bildernas filnamn.

Vad det betyder i liter färg (egen räkning ur ordalydelsen): porös yta får **två** strykningar silikatfärg (mellan och yta); grunden är binder och vatten utan färg. Tät yta får **en** ytstrykning färg plus en grund som till två tredjedelar är färg (1:2). Räcker grundblandningen lika långt som färgen blir tät yta 1 + 2/3 = 1,67 strykningar färg; att den räcker lika långt är ANTAGANDE, databladet anger ingen åtgång för blandningen.

### Alcro Bestå Täckfärg, ordagrant ur produktfaktabladet

- Teknisk information: "MATERIALÅTGÅNG 6 - 8 m²/l".
- "Rekommenderad förbrukning: SÅGADE PANELER: 6-7m²/l (våt filmtjocklek: 140-160 mym; torr filmtjocklek: 50-60 mym) HYVLADE/TIDIGARE MÅLADE PANELER: 7-8 m²/l (våt filmtjocklek: 110-140mym; torr filmtjocklek: 40-50mym)."
- "På hyvlade paneler eller tidigare målade ytor kan det vara svårt att få tillräckligt med färg. Om lagren är tunnare än rekommenderat bör ytterligare ett lager målas för att uppnå bästa hållbarhet."
- "Måla 2 gånger flödigt med Bestå Täckfärg. 2 strykningar ger alltid ett bättre skydd."
- "På industrigrundad panel som är grundmålad enligt CMP rekommenderas 2 strykningar Bestå Täckfärg." "Industrigrundad panel som har utsatts för väder och vind i mer än 10 månader behöver tvättas och grundmålas för ett fullgott skydd."
- "TIDIGARE MÅLADE YTOR: Tjocka, spruckna eller lösa färgskikt skrapas bort helt. Trärena partier och ytor i dåligt skick grundmålas med Alcros Grundfärg Trä. Gamla alkyd- och oljefärgsytor bör alltid grundmålas med Grundfärg Trä."
- "NYMÅLNING: Alcros Grundolja Trä stryks flödigt på ändträ, skarvar och spikhuvuden. … Hela ytan, fasad samt ändträ, grundmålas med Grundfärg Trä."
- "Grånat och poröst trä bör bytas ut eller borstas/skrapas ner till rent, friskt trä."
- "Ytor som tidigare målats med slamfärg eller linoljefärg bör målas med samma färgtyp som använts innan."
- "Kontrollera att underlaget är torrt före målning, maximalt 16 % fuktkvot. Måla inte när yttemperaturen är under +7°C."
- Burkstorlekar: faktabladet anger inga. Produktsidans inbäddade produktdata (artiklarna i sidans källkod, inte synlig text) listar: "Bestå Täckfärg Trä 313 Tonad Vit" 1 l, 3 l, 10 l; "Base A" och "Base C" (brytbaser för kulör) 0,9 l, 2,7 l, 9 l.

Butik som säger annat: Färghuset anger "Åtgång: 6-9 m2/L" och 9 liter för 2 499 kr (https://farghuset.com/produkter/utomhusfarg/fasadfarg-tra/besta-tackfarg-fasadfarg-120571, 2026-09-28). Tillverkarens 6–8 väger tyngst; butikens 9 används inte.

### Rad för rad mot underlaget och specen

| Tal | Var | Står i dag | Besked |
|---|---|---|---|
| Silikatfärg 3–5 m²/l, konstant 3 | underlaget avsnitt 3; spec K2 och `ATGANG.silikat` | 3 | **Stämmer.** Nedre kanten av "3-5 m²/l" (datablad version 20240708) |
| Ny puts härdar 6–8 veckor | underlaget avsnitt 3; spec `gorInte.ny-puts` | 6–8 veckor | **Stämmer**, ordagrant "tidigast efter 6-8 veckors härdning" |
| Silikatfärgens strykningar, porös yta | underlaget avsnitt 3 ("grund + mellan + slut") och Att verifiera 6; spec "Det som saknar källa" ("Porös puts tar en till") | porös = en strykning mer än 2 | **Ska ändras till:** porös yta = 2 strykningar silikatfärg (mellan och yta) plus en grund av Primex Silikatbinder och vatten 1:1 utan färg. Porös puts tar alltså inte en strykning färg till |
| Silikatfärgens strykningar, tät yta | spec 2.2 puts-raden "2 (ANTAGANDE, tät yta)" och `puts-strykningar` | 2 | **Ska ändras till:** tät yta = 1 ytstrykning plus grund av Silikatbinder och Silikatfärg 1:2. Talet 2 i `STRYK_AUTO` kan stå kvar (exakt för porös, något för mycket för tät, egen räkning 1,67), men märkningen ändras från "ANTAGANDE, tät yta" till "Källa: Beckers datablad; exakt för porös yta, tät yta 1 + grund 1:2". Ingen kodändring |
| Silikatfärg på tidigare målad puts | spec, skicken för puts | inte behandlat | **Tillägg:** "Måla ej på organiska underlag"; organisk färg ska tas bort helt. Passar skicket `byte` |
| Burkstorlekar puts | underlaget avsnitt 6 (1, 5, 10 l ANTAGANDE); spec "Bort, ingen källa" | 1/5/10, bortvalt | **Ska ändras till** 1, 3, 10 l om burkar ska räknas, källa bara produktbildernas filnamn på beckers.se. Specens beslut att visa liter utan burkar håller också; UX-agenten väljer |
| Bestå sågat 6–7 m²/l, konstant 6 för nytt sågat | underlaget avsnitt 3 och 4 (utdrag); spec K2 "Alcro Bestå 6–7 (utdrag)" | 6, utdrag | **Stämmer.** Märkningen "utdrag" ändras till "läst, produktfaktablad version 100724" |
| Bestå hyvlat/tidigare målat 7–8 m²/l, konstant 7 | samma; spec K2 "Alcro Bestå 7–8 (utdrag)" | 7, utdrag | **Stämmer.** Samma märkningsändring |
| Bestå odelat 6–8 m²/l | underlaget avsnitt 0 och 3 (Lovely Home) | 6–8 via butik | **Stämmer** med tillverkarens "MATERIALÅTGÅNG 6 - 8 m²/l"; källan kan bytas från Lovely Home till faktabladet |
| Bestå två strykningar | underlaget avsnitt 4; spec 2.2 (2 på trä) | 2 | **Stämmer**, "Måla 2 gånger flödigt" |
| Bestå hyvlat: ett lager till vid tunna skikt | underlaget avsnitt 3 och 4 (utdrag) | utdrag | **Stämmer**, nu läst ordagrant |
| Grundfärg på nytt trä, hela ytan | underlaget avsnitt 4; spec 2.2 (rent: en grund) | 1 | **Stämmer**, "Hela ytan, fasad samt ändträ, grundmålas med Grundfärg Trä" |
| Grundolja på ändträ, skarvar, spik | underlaget avsnitt 3; spec regel `grundolja` | Beckers som källa | **Stämmer**, Alcro säger samma ("ändträ, skarvar och spikhuvuden"); kan läggas till som andra källa |
| Grundfärg vid ommålning | spec 2.2 ommalning: ingen grund | ingen | **Stämmer** för hel färg; Alcro vill ha grund på "trärena partier och ytor i dåligt skick", vilket är specens skrapat. Obs: "Gamla alkyd- och oljefärgsytor bör alltid grundmålas" när Bestå (akrylat) går på oljefärg, alltså skicket `byte` |
| Slamfärg eller linolja under | spec `byte` | besked, ingen liter | **Stämmer**, Alcro: "bör målas med samma färgtyp som använts innan" |
| Bestå burkar 1, 3, 10 l | underlaget avsnitt 6; spec `BURKAR_FARG` akrylat, oljealkyd, grund | 1, 3, 10 | **Ska ändras eller märkas:** 1, 3, 10 l gäller bara färdigtonad vit (313). Brytbaserna för kulör finns i 0,9, 2,7, 9 l enligt Alcros produktdata. Antingen står 1/3/10 kvar med märkningen "vit 313; kulörer bryts i 0,9/2,7/9", eller så räknar verktyget kulör med 0,9/2,7/9. Egen räkning, E2b 33,67 l: 1/3/10 ger 4 × 10 = 40 l, 0,9/2,7/9 ger 4 × 9 = 36 l. Källan byts från Lovely Home till Alcros produktsida |
| Bestå 10 l, 2 299 kr | underlaget avsnitt 6; spec K1 | 2 299 | **Ej kontrollerat mot tillverkaren** (Alcro anger inget pris). Lovely Home 2026-09-28 (sammanfattning av sidan, inte ordagrant) visar 2 299 kr men storlekarna "3 liter" (2,7–3) och "10 liter" (9–10), alltså säljer butiken troligen brytbasen 9 l under namnet 10 l |

### Kvar att verifiera

- Primex Silikatbinders åtgång och burkstorlek (grunden på både tät och porös puts köps separat och ingår inte i litern).
- Antal strykningar silikatfärg på tidigare silikatmålad puts; databladet säger inget.
- Beckers Silikatfärgs burkstorlekar ur text i stället för bildnamn.

### Sidor som inte gick att läsa

- https://fixmaleri.se/products/besta-tackfarg-10-liter (butiken under ombyggnad)
- Alcros produkt-API (https://api.ppg.com/external/enterprise/pim/…) svarar 401; artiklarna lästes i stället ur produktsidans inbäddade data
- Alcrostudio.se visar inte åtgång eller storlekar som synlig text utan JavaScript

## Priskontroll 2026-09-28

Alla priser inkl. moms, lästa 2026-09-28.

| Butik | Produkt | Storlek | Pris | Adress |
|---|---|---|---|---|
| Lovely Home | Alcro Bestå Täckfärg, valfri kulör (art. 710018176) | "10 liter" (sidan: "10 liter 9-10 liter", beroende på pastamängd för vald kulör) | 2 299 kr | https://www.lovelyhome.se/farg/alcro-besta-tackfarg |
| Lovely Home | Alcro Bestå Täckfärg, valfri kulör (art. 710018175) | "3 liter" (sidan: "3 liter 2,7-3 liter") | 890 kr | https://www.lovelyhome.se/farg/alcro-besta-tackfarg |
| Färghuset | Alcro BESTÅ Täckfärg Fasadfärg, förval "Tonad vit", valfri kulör möjlig | 2,7 l | 999 kr | https://farghuset.com/produkter/utomhusfarg/fasadfarg-tra/besta-tackfarg-fasadfarg-120570 |
| Färghuset | Alcro BESTÅ Täckfärg Fasadfärg, förval "Tonad vit", valfri kulör möjlig | 9 l | 2 499 kr kampanj, ordinarie 2 699 kr | https://farghuset.com/produkter/utomhusfarg/fasadfarg-tra/besta-tackfarg-fasadfarg-120571 |
| Proffsmagasinet | Beckers Perfekt Fasad, halvmatt faluröd | 10 l | 2 595 kr | https://www.proffsmagasinet.se/bygg-interior/farg-tapeter/utomhusfarg/fasadfarg/beckers-perfekt-fasad-fasadfarg-halvmatt-falurod-3141021 |
| Bauhaus | Beckers Perfekt Fasad 2, utevit | 10 l | 2 495 kr | https://www.bauhaus.se/akrylatfarg-beckers-perfekt-fasad-2-utevit-10-l |
| K-Bygg | Beckers Perfekt Fasad 200 Vit | 10 l | 2 695 kr | https://k-bygg.se/produkt/fasadfarg-beckers-perfekt-fasad-200-vit-10l/7311231808291 |
| K-Rauta/K-Bygg | Beckers Perfekt Bas A | 9 l | **Utdrag**: 2 395 kr (K-Bygg), lägsta 30 dagar 2 499 kr (K-Rauta); sidan omdirigerar till kategorisidan, alltså ej läst och troligen utgången | https://www.k-rauta.se/produkt/fasadfarg-beckers-perfekt-bas-a-9l/7311237055286 |

Slutsatser:

- 2 299 kr gäller Lovely Homes storlek "10 liter". Butiken skiljer inte mellan färdigtonad vit 313 i 10 l och brytbas i 9 l; varianten heter "10 liter" oavsett kulör och fyllnaden anges som 9–10 l. För en bruten kulör är det alltså en 9-litersburk. Priset är detsamma för alla kulörer.
- Färghuset säljer Bestå bara i 2,7 och 9 l, även med förvalet tonad vit. Deras 9 l kostar 2 499 kr (kampanj) eller 2 699 kr.
- Proffsmagasinets 2 595 kr för Perfekt Fasad 10 l stämmer 2026-09-28. Butiken anger också "32,44 kr per m²", vilket motsvarar 2 595 / 80 m², alltså 8 m²/l (egen räkning).
- Perfekt Fasad i 9 l gick inte att läsa hos någon butik. Bauhaus har ingen 9-liters Perfekt Fasad 2 (gissade adresser gav 404). Färgvaruhusets "Perfekt Fasad 10 L Valfri kulör" visar "0 SEK" tills en kulör har valts.

Sidor som inte gick att läsa i priskontrollen:

- https://www.tapetkompaniet.se/farg/utomhus/trafasad/besta-tackfarg-10l (priset laddas med JavaScript)
- https://www.fargvaruhuset.se/farg/utomhusfarg/fasadfarg/perfekt-fasad-10-l-valfri-kulor (pris först efter kulörval)
- https://k-bygg.se/produkt/fasadfarg-beckers-perfekt-100-vit-10l/7311237055163 och Bas A 9 l (omdirigerar till kategorisidan)
- Colorama: hittade ingen produktsida för Bestå Täckfärg, bara Bestå Briljant och Grundfärg
- Sökmotorns rubrik för Lovely Home, "från 275 kr till 1790 kr", är gammal och stämmer inte med sidan i dag
