# Faktablad: /badrum/golvvarme-badrum/ (+ underlag för inbäddad /rakna/elkostnad/)

Hämtat 2026-09-29 av underlagsarbetaren. Beställt av koordinatorn, startlista 4. Checklista: `docs/briefer/seo-checklista-2026-09-29/badrum-4.md`, avsnittet /badrum/golvvarme-badrum/, punkt 11.

- Huvudfras: **golvvärme badrum** (320/mån, avsikt 1 050). Största variant: golvvärme badrum el (480) i H1 eller kortsvaret. Sidofraser: golvvärme badrum vattenburen (140), golvvärme badrum kostnad (30), golvvärme badrum temperatur (30), golvvärme badrum regler (40), golvvärme el kostnad (50).
- Sidtyp: kunskap, `pelare: badrum`, `niva: mellan`, `src/content/kunskap/badrum/golvvarme-badrum.mdx`. Hubgrupp: Välj rätt.
- **Produkter med slug: inga.** Ebeco och DEVI (Danfoss) nämns bara som datablad, inte som urval.
- **Hänvisas, upprepas inte:** BBV 26:1, GVK 2026, Säker Vatten 2026:1, MVK, försäkringsvillkoren, eget arbete i våtrum och rotkonstanterna står i `kunskap-tatskikt-badrum.md` avsnitt 1–5 och 9. Där står också redan GVK:s golvvärmerader (28 dygn, 27 °C) och Elsäkerhetsverkets mening om registrerat elinstallationsföretag.
- Ingen installationsguide (checklistan punkt 12). Ingen ny räknare.

---

## 1. Effekt per kvadratmeter, två tillverkare

### 1a. Ebeco Cable Kit 500 (värmekabel för inspackling)

Källor: [produktblad Cable Kit 500](https://www.ebeco.com/sv/product-sheet/599), utskrivet 2026-09-29; [manual Cableflex 11/Cable Kit](https://www.ebeco.com/sv/dokument/cable-kit-manual-cableflex-11-cable-kit-1033.pdf) (48 sidor, ekodesigndelen säger "Project time: 7 Nov – 1 May 2025"), läst 2026-09-29.

| Uppgift | Värde | Var |
|---|---|---|
| Användning | "Golvvärme för både våtrum och torra utrymmen"; "Förläggs i avjämningsmassa" | produktbladet |
| Effekt per m² | "80-160 W/m²" | produktbladet |
| Kabelns effekt | 11 W/m, "c/c 7–15 cm" | manualen s. 4 |
| Max effekt, klinker/natursten på betong | "Max 160 W/m²", styrning "Rum + golv" | manualen s. 4 |
| Max effekt, brännbart underlag | "Max 120 W/m²" | manualen s. 4 |
| Max effekt, trä/laminat/plastmatta | "Max 75 W/m²" | manualen s. 4 |
| Max yttemperatur (trä, laminat, plastgolv) | "Maximalt tillåten yttemperatur är 27 °C. Detta gäller även under mattor och möbler." | manualen s. 4, "Branschriktlinjer för trä/laminat och plastgolv på golvvärme" |
| Spackelskikt över kabeln | klinker/natursten 5 mm, trä/laminat 10 mm, plastmatta 15 mm | manualen s. 4 |
| Termostat | EB-Therm 500 med givarkabel och givarslang ingår; "Golvvärmen skall styras med en termostat" | produktbladet, manualen s. 4 |
| Kapslingsklass | termostat IP21, kabel IP67 | produktbladet |
| I våtrum | "I våtrum skall värmekabeln förläggas under tätskikt." | manualen s. 4 |
| Innan värmen slås på | "Vänta 4 veckor efter inspackling innan värmen kopplas in." | manualen s. 4 |
| Jordfelsbrytare | "Systemet ska anslutas till 230 V via jordfelsbrytare 30 mA." | manualen s. 4 |
| Vem installerar | "Golvvärmesystemet är en starkströmsanläggning och skall därför installeras enligt gällande föreskrifter och av en auktoriserad elinstallatör." | manualen s. 4 |
| Garanti | 12 år, 25 år om "installationen är utförd av en auktoriserad elinstallatör och dokumenterad i Ebecos tjänst Garantera" | produktbladet |
| Betong mot mark | "rekommenderas alltid tilläggsisolering samt att värmen inte stänges av helt under sommaren för att motverka så kallad omvänd fuktvandring" | manualen s. 4 |

Egen räkning (märkt), W/m² ur kabelns 11 W/m: W/m² = 11 × 100 / c/c (cm). c/c 7 cm → 157 W/m²; c/c 15 cm → 73 W/m². Stämmer med bladets 80–160 W/m² inom avrundning. Manualens formel för c/c: c/c (cm) = fri golvyta (m²) × 100 / kabellängd (m).

### 1b. DEVI (Danfoss) DEVImat 150T (värmematta)

Källor: [DEVI, DEVIcomfort 150T, svensk produktsida](https://www.devi.com/sv/produkter/uppvaermningsmattor/applikationer-inomhus/devicomfort-150t) (WebFetch 2026-09-29); [datablad DEVImat 150T](https://assets.danfoss.com/documents/latest/366717/AI164886462617en-010108.pdf) (engelska, kod AI164886462617en-010113); [Installation Guide Indoor Heating Applications](https://assets.danfoss.com/documents/latest/230381/AQ097586460984en-020503.pdf) ("Produced by Danfoss © | 2022.12"); [DEVI vanliga frågor](https://www.devi.com/sv/service-och-support/vanliga-fraagor-och-svar), odaterad. Alla lästa 2026-09-29.

| Uppgift | Värde | Var |
|---|---|---|
| Effekt | "150 W/m² @ 230 V~" | datablad |
| Mattstorlekar | 0,5 m² 75 W till 10 m²; 4,0 m² = 600 W (0,5 × 8 m) | datablad, typtabell |
| Bygghöjd | 3,5 mm | datablad |
| Kapslingsklass | IPX7 | datablad |
| Rekommenderad effekt, klinker i badrum, tunn bädd | "Tiled floors in bathrooms": 100–200 W/m² | Installation Guide s. 9, tabell 3.3 |
| Vinyl, linoleum m.m. i tunn bädd | "Max. 100 W/m" (²) | samma |
| Behov generellt | "Den erforderliga utgående värmen kan vara allt från 40-150 W/m²", ska bygga på beräkning av rummets värmeförlust | DEVI FAQ |
| Typbadrum | "Ett badrum på 5m² med dusch kräver normalt 4 m² DEVImat™ och DEVIreg™ termostat." | DEVI FAQ |
| Golvgivare | "Always install a floor sensor to limit the max. floor temperature." "Utan golvgivare kan den maximala golvtemperaturen inte styras. En golvgivare är nödvändig med golvbeläggningar av trä, vinyl eller matta." | Installation Guide s. 10; FAQ |
| Inbäddning | "Mats shall be fully embedded in at least 5 mm concrete, screed, tile adhesive or similar." | Installation Guide s. 3 |
| I våtrum | ångspärr "In wet rooms apply only above the heating elements." | Installation Guide s. 10 |
| Jordfelsbrytare | "connected to a residual current device (RCD)", "RCD trip rating is max. 30 mA" | Installation Guide s. 4 |
| Vem ansluter | "Elements must always be connected by an authorised electrician using a fixed connection." "Any application using heating elements or thermostats purchased by end user must be approved by an authorized electrician prior to commissioning." | Installation Guide s. 3–4 |
| Under badkar och skåp | "DEVI rekommenderar inte att DEVImat™ installeras under sådana armaturer" | FAQ |

### 1c. Källkonflikt: vem som får lägga mattan (viktigt för avsnitt 4)

- DEVI FAQ, ordagrant: "Det är enkelt att montera en DEVI värmematta själv, om du väljer att installera den. Observera dock att alla elektriska anslutningar alltid måste utföras av en behörig elektriker."
- Elsäkerhetsverket (avsnitt 3): "Många tror också att man kan lägga ledningarna själv och sedan få installationen kontrollerad av en elinstallatör. Men det stämmer inte."
- **Myndigheten väger tyngst.** DEVI:s svenska FAQ-text strider mot Elsäkerhetsverket och ska inte återges som råd. DEVI:s egen installationsguide säger "authorized installer" för hela installationen.

### 1d. Temperaturen (H2 3, "golvvärme badrum temperatur")

| Källa | Regel | Datum |
|---|---|---|
| GVK Säkra Våtrum 2026 § 5.3 (s. 18) | "Golvytans temperatur får inte överstiga 27 °C." "Temperaturen ska höjas jämnt, max 3 °C per dygn, eller enligt leverantörens anvisning." "Golvvärmen får slås på tidigast 28 dygn efter monteringen av keramiskt ytskikt." "Golvvärmesystemet ska placeras under tätskiktet." "De keramiska plattornas fuktupptagning får vara högst 6 procent." | 2026-01-01 |
| Ebeco manual s. 4 | 27 °C max yttemperatur (trä, laminat, plastgolv); 4 veckor efter inspackling | 2025 |
| DEVI | golvgivare begränsar maxtemperaturen; ingen gradsiffra för klinker hittad | 2022.12 |

- GVK:s rader 28 dygn och 27 °C står redan i tätskiktsbladet avsnitt 3; "max 3 °C per dygn" och "6 procent" är nya här.
- BBV 26:1 § 4.7.3 (tryckt s. 18, avläst i sidfoten): "Vid installation av golvvärme med keramiskt ytskikt i våtrum ... finns särskilda krav och riktlinjer som måste följas – dessa beskrivs närmare i en separat skrivelse på www.bkr.se." **Skrivelsen inte hämtad.**
- Vilken temperatur som är "rätt" för komfort eller sparande: **ingen källa hittad.** 27 °C är ett tak, inte en rekommendation.

---

## 2. Driftkostnad per år (H2 2), underlag för `/rakna/elkostnad/`

### 2a. Räknarens formel och konstanter (läst i `src/lib/kalkyl/elkostnad.ts` och `src/lib/antaganden.ts` 2026-09-29)

- kWh per dygn = effekt (W) / 1 000 × gångtid (h/dygn). kWh per år = kWh per dygn × 365. Kronor = kWh × elpris.
- Elpris: `ELPRIS_KR_PER_KWH = 2.4` kr/kWh. Källa i modulen: SCB, Priser på elenergi och på överföring av el, https://www.statistikdatabasen.scb.se/goto/sv/ssd/SSDManadElhandelpris , period "juli till december 2025", hushåll 5 000–14 999 kWh/år, inklusive elhandel, nätavgift, energiskatt och moms. **Sidan ska använda 2,40 kr/kWh och skriva perioden intill** (checklistan punkt 12).
- Gränser: effekt 1–10 000 W, gångtid 0,1–24 h, dagar 1–3 650, elpris 0,1–20 kr/kWh.

### 2b. Effekt för ett typbadrum

- DEVI: 5 m² badrum med dusch → 4 m² matta. DEVImat 150T 4,0 m² = **600 W** (datablad).
- Ebeco: 80–160 W/m². Egen räkning, 4 m² fri yta: 4 × 80 = 320 W till 4 × 160 = 640 W.
- Två tillverkare, spannet 320–640 W för 4 m² fri yta. 600 W är ett datablads tal, inte ett medelvärde.

### 2c. Gångtid

- **Ingen oberoende källa hittad** för gångtid eller årsförbrukning för golvvärme i badrum. Sökt: Energimyndigheten (ingen siffra; sidan "Golvvärme" under lättläst ger 404), Clas Fixare ("mellan 150 kwh – 300 kwh /m2 per år", ingen källa, inget datum, firma), elbolag och butiker (inte källor).
- Gångtiden är **vårt antagande** och ska märkas så. Den betyder tid då kabeln är strömsatt, inte tid då termostaten är på; termostaten slår av och på.
- Energimyndigheten, [Svalt inomhus](https://www.energimyndigheten.se/effektiv-energianvandning/hushall/tips-i-sommarhettan/), senast uppdaterad 2026-09-14: "Stäng av värmen. Även golvvärme och handdukstork, om det går."
- Energimyndigheten, [Isolering av ytterväggar, golv och källare](https://www.energimyndigheten.se/effektiv-energianvandning/guider/husguiden-for-dig-som-vill-energieffektivisera-ditt-hus/minska-behovet-av-varme-och-varmvatten/tillaggsisolering/isolering-av-yttervaggar-golv-och-kallare/), senast uppdaterad 2022-07-08: "Elektrisk golvvärme med otillräcklig underliggande isolering har betydande energiförluster."
- Källkonflikt om sommaren: Energimyndigheten säger stäng av "om det går"; Ebeco rekommenderar att värmen "inte stänges av helt under sommaren" på oisolerad betong mot mark (omvänd fuktvandring). Båda gäller; Ebecos förbehåll gäller bara platta mot mark utan isolering.

### 2d. Räkneexempel att testa mot räknaren (egen räkning, märkt)

600 W, 365 dagar, 2,40 kr/kWh. Gångtiden är antagande.

| Gångtid h/dygn (antagande) | kWh/dygn | kWh/år | kr/år |
|---|---|---|---|
| 4 | 2,4 | 876 | 2 102,40 |
| 8 | 4,8 | 1 752 | 4 204,80 |
| 12 | 7,2 | 2 628 | 6 307,20 |
| 24 (övre gräns, aldrig avslagen) | 14,4 | 5 256 | 12 614,40 |

Formel: kWh/år = 0,6 × t × 365; kr/år = kWh/år × 2,40.

Adress som ger rad 2 i räknaren (tolkaQuery läser `effekt`, `timmar`, `dagar`, `elpris`): `/rakna/elkostnad/?effekt=600&timmar=8&dagar=365`

### 2e. Frågan till UX och bygge (checklistan: förval via adressen)

- **Ja via adressen:** `/rakna/elkostnad/` läser `effekt`, `timmar`, `dagar` och `elpris` ur query-strängen (`tolkaQuery` i `src/lib/kalkyl/elkostnad.ts`). En länk eller ett verktygskort med adressen ovan fungerar i dag.
- **I den inbäddade komponenten: på väg.** I senaste commit ger `<Kalkylator namn="elkostnad" forval="..." />` byggfel (förval bara för grannemedgivandet). I arbetskopian 2026-09-29, ej committat, har någon lagt till förval för elkostnaden med samma nycklar som adressen (`forvalFranAdress` i `elkostnad.ts`, `Kalkylator.astro`; kommentaren exemplifierar "effekt=400&timmar=6" för golvvärme på 4 kvm à 100 W och hänvisar till `spec-kalkyl-kok-kostnad-2026-09-29.md`). UX och bygge bekräftar när det är committat. Obs: exemplets 100 W/m² ligger inom DEVI:s 40–150 W/m² men under DEVI:s 100–200 för klinker i badrum och under DEVImat 150T:s 150 W/m²; exemplet ska inte bli sidans tal utan källa.
- **Två saker i räknaren som krockar med golvvärme:** (1) hjälptexten `GANGTIDER` nämner avfuktare, värmefläkt och "maskin som aldrig stängs av", inte golvvärme; (2) vid `timmar=24` visar räknaren `GOR_INTE_DYGNET_RUNT`, som handlar om avfuktare och hygrostat. En läsare som skriver 24 timmar för golvvärme får avfuktartexten. Standardeffekten är 320 W (avfuktare).

---

## 3. Elsäkerhetsverket: vem som får installera (H2 4, "golvvärme badrum regler")

Källa: [Elsäkerhetsverket, Installation av golvvärme](https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-golvvarme), "Senast granskad: 2026-02-03", HTML läst 2026-09-29. Ordagrant:

- "Som privatperson kan du idag enkelt köpa ett komplett 230 volts golvvärmepaket i butik. Många tror också att man kan lägga ledningarna själv och sedan få installationen kontrollerad av en elinstallatör. Men det stämmer inte. Arbetet ska göras av ett registrerat elinstallationsföretag."
- "Golvvärme är elektrisk utrustning som är avsedd att anslutas till en starkströmsanläggning. Det är inte bara själva anslutningen som definieras som elinstallationsarbete. Även värmekablar, värmefolier och andra elektriska system är en del av den elektriska starkströmsanläggningen och omfattas därför av reglerna som gäller vid utförande av elinstallationsarbete."
- "När du ska installera golvvärme, ta alltid hjälp av ett elinstallationsföretag som är registrerat hos Elsäkerhetsverket för relevant verksamhetstyp, exempelvis bostäder eller allmänna och offentliga utrymmen. Det är inte praktiskt möjligt att dela upp arbetet och göra en del själv för att sedan få hjälp med att kontrollera och koppla in golvvärmen, eftersom en elinstallatör måste göra en del av inspektionen innan att golvläggaren spacklat golvet eller lagt på matta."
- Inspektionen ska bekräfta att elmaterielen "överensstämmer med säkerhetsfordringarna enligt relevant produktstandard", "är för ändamålet riktigt vald och monterad enligt standard och/eller tillverkarens anvisningar" och "inte har synliga skador".
- "Köp därför aldrig en produkt som saknar märkning och installationsanvisning."

Källa 2: [Elsäkerhetsverket, Installation av el i bad- och duschrum](https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-el-i-bad-och-duschrum/), "Senast granskad: 2026-02-03", läst 2026-09-29:
- Kontrollera att företaget finns i Elsäkerhetsverkets register och "är registrerat för verksamhetstypen bostäder, alternativt för typen 'begränsad lågspänning'". E-tjänsten heter "Kolla elföretaget".
- "Elmateriel och elprodukter som ska användas i bad- eller duschrum ska vara märkta med rätt IP-klass." Badrummet är indelat i områden; "Principen är: Ju fuktigare eller blötare, desto högre fuktskydd (IP-klass)."
- "Uttag i bad- och duschrum ska skyddas av jordfelsbrytare".
- Obs: Elsäkerhetsverkets "områden" är elinstallationens zoner, inte GVK:s våtzoner. Blanda inte ihop dem.

GVK 2026 § 7.3.1 (s. 32): "Installationer av el i våtrum ska alltid ske i samråd med elinstallationsföretag." "Elinstallationer ska utföras enligt Elsäkerhetsverkets föreskrifter". Genomföring för el: installationsrör minst 16 mm, högst 2 mm mellanrum mot skivan.

Golvvärmens plats i tätskiktet: GVK § 5.3 (s. 18) "Golvvärmesystemet ska placeras under tätskiktet"; Figur 7: "Avjämningsmassa och golvvärme ska placeras under tätskikt." Ebeco och DEVI säger samma (avsnitt 1). Länk `/badrum/tatskikt-badrum/`.

Jordfelsbrytare: 30 mA i båda tillverkarnas anvisningar. Länk `/el/jordfelsbrytare-loser-ut/` passar där (checklistan punkt 9).

Ekodesign: Energimyndigheten, [Rumsvärmare](https://www.energimyndigheten.se/effektiv-energianvandning/saljare-och-tillverkare-av-produkter/produktgrupper-a-o/produkter/rumsvarmare/), senast uppdaterad 2026-04-21: omfattar "elektrisk golvvärme"; "Kraven i förordningen gäller från och med den 1 juli 2025" (EU 2024/1103). Ebeco: golvvärmen ska styras av termostat som uppfyller förordningen. Bara bakgrund; behöver inte stå på sidan.

---

## 4. El eller vattenburen (H2 1, tabellen)

| | El | Vattenburen | Källa |
|---|---|---|---|
| Förutsättning | el finns i huset; kabel eller matta under tätskiktet | värmekälla med vatten i huset, rör dras till badrummet | Ebeco, [golvvärme för badrummet](https://www.ebeco.com/en/solutions/underfloor-heating/underfloor-heating-bathroom), odaterad (tillverkare av elgolvvärme, partisk); Byggstart (nedan) om värmekälla |
| Material, 8 kvm badrum | 9 600 kr | 12 000 kr | [Hantverkarpriser, golvvärme i badrum](https://www.hantverkarpriser.se/sida/hur-mycket-kostar-det-att-installera-golvvarme-i-badrum-0daf12), odaterad, "Redaktör", läst 2026-09-29 |
| Arbete, 8 kvm | "cirka 5 600 kronor, för 8 kvm" (inte uppdelat per typ) | samma | samma; rot 1 680 kr = 0,30 × 5 600 (egen kontroll) |
| Livslängd | 25 år | "cirka 40 år" | samma, offertförmedlare utan primärkälla |
| Vem installerar | registrerat elinstallationsföretag | VVS (ingen myndighetskälla hämtad för vattenburen) | Elsäkerhetsverket |
| Regleringstid (hur snabbt golvet blir varmt) | **ingen källa** | **ingen källa** | – |
| Drift | effekt × tid × elpris (avsnitt 2) | beror på värmekällan; **ingen källa med tal hämtad** | – |

- Byggstart, [vattenburen golvvärme](https://www.byggstart.se/pris/vattenburen-golvvarme), odaterad ("Pris i 2026"): "Installation av rörsystem för vattenburen värme kostar mellan 1.200 kr och 2.400 kr per kvadratmeter", och priset omfattar "värmekällans köp och installation". Gäller helt hus, inte badrum; använd inte som badrumspris.
- Energimyndigheten om värmepump och vattenburen golvvärme: bara sökutdrag ("Most heat pumps become even more efficient when connected to water-based floor heating"), sidan inte läst. **Skriv inte utan att läsa.**
- Hantverkarpriser har samma kalkylmotor som Badrumsexperter (tätskiktsbladet, räknarunderlag A). Räknas som en källa.
- `/rakna/badrum-kostnad/` har posten `el` = 12 timmar × 600 kr + 8 000 kr material, fast belopp (renovering.ts). Golvvärme är inte en egen post. Egen räkning: 7 200 + 8 000 = 15 200 kr för hela elposten vid 5 kvm. Hantverkarpriser 9 600 + 5 600 = 15 200 kr för golvvärme i 8 kvm (samma belopp av en slump, olika poster; ställ inte bredvid varandra utan förklaring).

---

## 5. Faq-underlag

| Fråga | Underlag | Status |
|---|---|---|
| Stänga av på sommaren? | Energimyndigheten "Stäng av värmen. Även golvvärme ... om det går." Ebeco: inte helt av på oisolerad betong mot mark. | två källor, båda med |
| Golvvärme under befintligt kakel? | DEVI FAQ: DEVImat kan monteras på "en gammal kaklad eller terrazzo yta". Men i våtrum: GVK § 5.3 golvvärmen under tätskiktet; BBV § 4.1.3 huvudregel att befintliga ytskikt tas bort; ett nytt tätskikt krävs ovanpå värmen. Egen slutsats (märkt): i duschrum blir det ett nytt golv med nytt tätskikt. | källkonflikt, BBV/GVK väger tyngst |
| Varför blir golvet inte varmt? | DEVI FAQ: kontrollera matning, termostat, inställningar, mattans motstånd; "Dessa kontroller bör utföras av en behörig elektriker." Ebeco: max effekt beror på underlag; 4 veckor innan påslag. | tillverkare |

---

## 6. Interna länkar

Ut: `/rakna/elkostnad/` inbäddad eller verktygskort i avsnitt 2 (se 2e); `/badrum/tatskikt-badrum/` i avsnitt 4; `/rakna/badrum-kostnad/` i avsnitt 1 eller 4; `/el/jordfelsbrytare-loser-ut/` där 30 mA nämns. In: `/badrum/tatskikt-badrum/` (golvvärmeraden), `/badrum/vatrumsmatta/` eller `/rakna/badrum-kostnad/`.

## 7. `kallor`

- Elsäkerhetsverket, installation av golvvärme (granskad 2026-02-03)
- Elsäkerhetsverket, el i bad- och duschrum (granskad 2026-02-03)
- GVK Säkra Våtrum 2026, § 5.3 och 7.3: https://www.gvk.se/siteassets/gvk/dokument/sakra-vatrum-2026.pdf
- Ebeco, Cable Kit 500 och manual Cableflex 11/Cable Kit
- DEVI, DEVImat 150T datablad och Installation Guide
- SCB, elpriset som räknaren använder (period juli–december 2025)
- Energimyndigheten, Svalt inomhus (2026-09-14) och Isolering av golv (2022-07-08)

---

## 8. Sökanalys: golvvärme badrum

Topp 5 enligt SOKORDSANALYS 8.2 (ordningen i google.se inte kontrollerad; inte omlästa 2026-09-29): hornbach.se, bauhaus.se, eon.se (403), vvsochbad.se.

1. **hornbach.se** (butik, ettan). Enligt 8.2: saknar W per kvm och driftkostnad med källa. Oläst i detalj.
2. **bauhaus.se** (butik). Samma.
3. **eon.se** (elbolag). 403, oläst.
4. **vvsochbad.se** (butik). Samma som 1.
- Högt i sökverktyget 2026-09-29: sonochfar.se och totalbyggarna.se (samma avsändare, titel nu "Golonka Renovering"), hantverkarpriser.se, svenskaeljouren.se. Clas Fixare: "150 kwh – 300 kwh /m2 per år" utan källa.

Läsarens frågor kvar: vad drar den i kronor, vilken temperatur, får jag lägga mattan själv (svaret nej, som DEVI:s egen FAQ säger emot), el eller vatten.

**Vad vår sida kan ha som ettan saknar:** (1) W/m² ur två datablad (Ebeco 80–160, DEVI 150; klinker i badrum 100–200 enligt DEVI); (2) driftkostnad räknad med formel, SCB:s pris med period och inbäddad räknare; (3) Elsäkerhetsverkets text ordagrant om att även kabeln är elinstallation; (4) GVK:s 27 °C, 28 dygn och 3 °C per dygn; (5) tabellen el mot vattenburen med källa per rad.

---

## 9. Osäkert eller saknas

- **Gångtid:** ingen oberoende källa. Märks som vårt antagande.
- **Vattenburen:** drift, regleringstid och vem som installerar saknar myndighetskälla. Pris bara från en förmedlare.
- **Regleringstid el mot vatten:** ingen källa.
- **BKR:s separata skrivelse om golvvärme** (BBV § 4.7.3) inte hämtad.
- **DEVI:s svenska FAQ** motsäger Elsäkerhetsverket om att lägga mattan själv; får inte användas som råd.
- **SCB-priset** är från juli–december 2025. Om SCB publicerat januari–juni 2026 ska `antaganden.ts` uppdateras innan sidan skrivs, annars står ett gammalt pris. Inte kontrollerat i denna körning.
- **Räknaren:** förval i `<Kalkylator>` finns bara i arbetskopian, inte committat; 24 timmar ger fortfarande avfuktartexten och hjälptexten nämner inte golvvärme (avsnitt 2e). Fråga till UX och bygge.
- **eon.se** 403; hornbach och bauhaus inte omlästa.
