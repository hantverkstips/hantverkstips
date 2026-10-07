# Affiliate, fukt omgång E, 2026-10-07

Affiliateagentens beslut för omgång E (`docs/SOKORDSANALYS.md` 12.7, E1 och E5) och elkostnadsräknarens förval för radonsug.

Underlag, båda från underlagsarbetaren 2026-10-07:

- `docs/briefer/faktablad/affiliate-radonsug-matare-2026-10-07.md`, uppgifterna RS1–RS48. Bladet skrevs om och kontrollerades punkt för punkt 2026-10-07, eftersom det ursprungliga (samma namn som hantverkarens `kunskap-radonsug.md`) skrevs över; avsnitt 7 där visar vad som ändrades.
- `docs/briefer/faktablad/affiliate-rf-givare-betong-2026-10-07.md`. Omskrivet och kontrollerat av samma skäl; hantverkarens blad heter `kunskap-fuktmatning-betong.md`.

Hantverkarna skriver från faktabladen. Inga frön behövs, eftersom ingen produkt tillkommer.

## Sammanfattning

| # | Fråga | Besked |
|---|---|---|
| 1 | Radonmätare på `/fukt/radonsug/` | **Nej.** Inget kort, inget reklamband. Prövas inte igen förrän en mätare hos Proffsmagasinet visar att den klarar SSM:s krav |
| 1b | Radonsugar eller radonfläktar | **Inga hos Proffsmagasinet.** Sidan har inga produkter |
| 2 | Effekt för elkostnadens förval | Corroventa RS 400, 25 W, är mitt förslag till förval; källorna nedan. UX beslutar |
| 3 | RF-givare för betong på `/fukt/fuktmatning-betong/` | **Nej.** Inget kort, inget reklamband |

Båda sidorna blir kunskap utan produkter, i linje med att kunskap och problemguider ska vara majoriteten (skillen avsnitt 4).

## 1. Radonmätare på `/fukt/radonsug/`: nej

### Vad SSM kräver efter en åtgärd

SSM:s metodbeskrivning för bostäder gäller från 1 oktober 2026 (RS-uppgifterna i faktabladet).

- En korttidsmätning ger "en snabb indikation". Det krävs ändå "en förnyad långtidsmätning", alltså minst 60 dygn under eldningssäsong eller ett helt år.
- Ett kontinuerligt instrument ska vara kalibrerat (metodbeskrivningen 4.1) och ha högst 20 % utvidgad mätosäkerhet (k=2) vid 200 Bq/m³. SSM "rekommenderar" ett kalibreringsintervall på ett år; intervallet får vara längre om man kontrollerar att instrumentet inte driver (RS6–RS9).

### Mätarna hos Proffsmagasinet mot kraven

| Mätare | Pris 7/10 | Lager | Mätosäkerhet (tillverkaren) | Kalibrering | Klarar SSM:s krav? |
|---|---|---|---|---|---|
| Airthings Home | 1 911 kr | i lager | butikens bilagor: σ < 20 % vid 100 Bq/m³ efter 7 dygn. Airthings hjälpartikel mars 2026, som gäller även Corentium Home: ~±10 % efter 7 dygn och ~±5 % efter 2 månader vid 200 Bq/m³ | "kalibreras automatiskt"; inget intyg, inget intervall | **Inte belagt.** Egen räkning: 2σ ≈ 20 %, precis på gränsen; inget kalibreringsintyg |
| Airthings Wave | 2 181 kr | beställningsvara | Airthings i dag: σ ~10 % vid 200 Bq/m³ efter 7 dygn | Airthings får årligen ett kalibreringscertifikat från tyska BfS; inget intyg per mätare | **Inte belagt.** Egen räkning: 2σ ≈ 20 %, precis på gränsen |
| Sarad Radon Scout | 39 886 kr | beställningsvara | 20 % (1σ) vid 200 Bq/m³ med 1 h intervall | DAkkS-intyg enligt ISO/IEC 17025 | Närmast, men proffsinstrument |
| Sarad Radon Scout Plus | 42 910 kr | beställningsvara | som Radon Scout | som Radon Scout | som Radon Scout |

Om Wave: vilken generation Proffsmagasinet levererar går inte att fastställa. Butikens bilaga är dokument 1-MAN-2900-B. Airthings egen sida för Wave Radon visar både sin EAN och butikens, så att butiken säljer en annan produkt är inte belagt.

### Varför inget kort

- **Mätningen som räknas är spårfilm**, eller ett kalibrerat instrument med intyg som är högst ett år gammalt. Spårfilm från ett ackrediterat laboratorium säljs inte av Proffsmagasinet.
- **Airthings är inte belagt mot SSM:s krav.** Airthings anger ungefär ±10 % vid 200 Bq/m³ efter 7 dygn, vilket med k=2 ligger på gränsen, och ingen av mätarna har kalibreringsintyg eller kalibreringsintervall i Airthings egna dokument. Ett kort för en Airthings bredvid "så kontrollerar du att sugen verkar" skulle sälja något sidan inte kan stå för.
- **Sarad är fel köp för läsaren.** Den är kalibrerad och närmast kraven, men kostar 40 000 kr och är ett instrument för mätföretag. Att länka den till en husägare vore val på provision.

### Villkor för sidan

1. Sidan beskriver typerna med SSM som källa: spårfilm, och kontinuerligt instrument med kalibreringskrav. Airthings får nämnas utan länk som exempel på en digital mätare, på samma villkor som på `/fukt/radon/`:
   - noggrannheten ur Airthings eget dokument;
   - inget om att den räcker för årsmedelvärdet;
   - i samma stycke att långtidsmätningen enligt SSM är det som gäller.
2. **Rättelse till hantverkaren och SEO:** SSM har flyttat metodbeskrivningen. Den gamla `.pdf`-adressen ger SSM:s 404-sida med HTTP 200. Den nya slutar på `…/metodbeskrivning--matning-av-radon-i-bostader-pdf`, utan punkt före "pdf", med utgivningsdatum 2026-10-01. Den gamla adressen står i `src/content/kunskap/fukt/radon.mdx` och i `docs/briefer/faktablad/kunskap-radon.md` och ska bytas.
3. **Omprövas** när en mätare hos Proffsmagasinet har tillverkarens uppgift om mätosäkerhet vid 200 Bq/m³ och ett kalibreringsintyg med intervall. Underlagsarbetaren kontrollerar det vid nästa radonomgång; jag beställer.

## 1b. Radonsugar och radonfläktar: inga

Proffsmagasinets sitemap (179 963 adresser) har ingen radonsug, radonfläkt eller radonbrunnsfläkt. Underlagsarbetaren sökte på radon, radonsug, radonett, radonova, radonbrunn, sugpunkt, markluft, Corroventa och Östberg med radon.

- Det enda i närheten är ett radonmembran (Tecca), som inte hör till sidans fråga.
- Östbergs CK-kanalfläktar säljs inte som radonfläktar och får inget kort; att använda en kanalfläkt som radonsug vore vårt eget resonemang.

**Sidan har inga produkter och inget reklamband.** Sugarna som nämns (Corroventa, Weller) nämns utan länk, med tillverkarens dokument som källa.

## 2. Effekten för elkostnadens förval

Varken SSM eller Boverket anger W eller kWh per år för en radonsug. Tillverkarnas tal, där kWh per år är egen räkning med drift dygnet runt (W × 8 760 ÷ 1 000):

| Sug | Tillverkarens uppgift | kWh/år, egen räkning | Källa |
|---|---|---|---|
| Corroventa RS 400 | "Normal förbrukning 10-25 W"; anslutningseffekt 105 W. Instruktionen 2012: läge 1–4 ger 15/27/60/96 W | 87,6–219 (normal); 919,8 (max) | corroventa.se och instruktionen |
| Corroventa R2 ES | "Normal förbrukning 87 W"; maxeffekt 690 W (webbsidan) eller 700 W (manualen) | 762,1 (normal) | corroventa.se och bruksanvisning 2024.10 |
| Weller RS202 | 70 W "Upptagen effekt", driftpunkt ej angiven | 613,2 | weller-tools.com och bruksanvisningen |

**Mitt förslag till UX** är Corroventa RS 400 på 25 W, den övre gränsen av tillverkarens "normal förbrukning". Det ger 219 kWh per år med drift dygnet runt.

- Skäl: det är den enda sugen där tillverkaren anger normal drift med ett spann och lägena i watt.
- Räknaren bör låta läsaren byta till ett eget värde och visa R2 ES (87 W) som exempel på en sug med flera sugpunkter.
- Danska Bolius anger 260–610 kWh per år utan källa och används inte.

Förvalet är UX och bygge-agentens beslut. Källorna står i faktabladet RS-raderna och i `kallor`-formatet sist i det.

## 3. RF-givare för betong på `/fukt/fuktmatning-betong/`: nej

### Vem som får mäta

- **RBK:** en RBK-mätning får bara göras av en RBK-auktoriserad fuktkontrollant. Auktorisationen är personlig, gäller fem år och kräver tentamen och praktiskt prov per metod. RBK:s blanketter "förutsätter att den som utför mätningen är RBK-auktoriserad".
- **Golvbranschen och limleverantörerna** (GBR/SVEFF, mars 2026) skriver att en RBK-auktoriserad fuktkontrollant "skall" anlitas och att det åligger beställaren.
- **Andra regelverk:** Boverket (BFS 2024:8), GVK Säkra Våtrum 2026 och BBV 26:1 kräver ingen metod och ingen RBK.
- **Godkända givare:** RBK:s manual version 7 (flik 0 och avsnitt 2.8) listar Testo 605-H1, Vaisala HMP40S och HumiGuard; flik 10 är rutinen för Testo. Att andra fabrikat inte ger en RBK-mätning är underlagsarbetarens slutsats ur flik 0, avsnitt 2.8 och regelverkets punkt 9; ordet "bara" står inte i källan. Av dem säljer Proffsmagasinet bara Testo, 605 RBK-kitet för 11 013 kr och 605-H1 för 1 659 kr, båda beställningsvaror.

### Varför inget kort

- **Mätningen som golv- och limleverantörerna godtar görs av en person med auktorisation, inte av en givare.** En husägare eller hantverkare som köper Testo-kitet får en avläsning, inte en mätning som gäller mot leverantörens krav. RBK:s auktorisationsregler (R:15) redovisar "+/- 5-10% RF" mellan parallella mätningar före RBK-systemet, mot ±3 % med metodbeskrivningarna.
- **Kortet skulle sälja det sidan inte kan rekommendera.** Sidans råd är att anlita en RBK-auktoriserad fuktkontrollant. En kontrollant köper sin utrustning genom sin egen kanal och kalibrerar den mot RBK.
- **Övriga givare saknas i RBK:s manual.** Det gäller Protimeter HygroMaster och HygroStick, Tramex Hygro-i och DeFelsko CMM IS. Tramex CME5 mäter ingen RF alls, och RBK säger att mätningen ska göras i borrhål, "inte på betongytan".

### Villkor för sidan

1. **Testo 605-H1 får nämnas utan länk** som exempel på en givare som står i RBK:s manual (version 7, flik 0 och avsnitt 2.8), med RBK som källa och inte butikens text. Butikens kit säljs utan kalibreringscertifikat; RBK kräver kalibrering vid 75, 85, 90 och 95 % innan givaren används.
2. **Rättelser till faktabladen:**
   - Tramex CME5 mäter elektrisk impedans, inte kapacitivt. Det står fel i `underlag-fukt-sortiment-2026-09-30.md` del 2d.
   - Testo-kitets område är 5–95 %RH enligt Nordtec, inte butikens 0–100 %.
3. **Sidan skriver inte** att försäkringen kräver RBK. Inga försäkringsvillkor är lästa.
4. **Omprövas inte** utan en ny fråga från SEO om sidans läsare.

## Vad som kräver Christian

Inget.
