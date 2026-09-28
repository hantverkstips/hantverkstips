# Spec: generatorn /rakna/kontrollplan/

UX och bygge-agenten, 2026-09-28. Gäller steg 1 till 6 i skillen nytt-verktyg, utskriften och bilderna. Underlaget är `docs/briefer/underlag-kalkyl-kontrollplan-2026-09-28.md` (här "underlaget", avsnittsnummer därifrån). SERP-läsningen är `docs/briefer/serp-raknare-2026-09-28.md` avsnitt A. Mönstret är `docs/SPEC-SIDMALLAR.md` 4.7; närmaste förebilder är `src/lib/kalkyl/bygglov-altan.ts` (beslutsverktyg med lagrum per rad, `vardefullt`), `src/lib/kalkyl/kallare.ts` (kryssrutor med `getAll`, ordning efter katalogen) och `src/lib/kalkyl/u-varde.ts` (`TEXT`, `ANTAGANDEN`, `delbarQuery`).

Verktyget räknar inget. Det väljer rader ur en katalog och ställer upp dem som en kontrollplan. Utvecklaren gissar ingenting. Står något inte här gäller 4.7, och står det inte där frågar utvecklaren innan hen bygger.

**Allt som står "TEXT SAKNAS" skrivs av hantverkaren.** Innebörden står bredvid, så att utvecklaren kan bygga med platshållaren `TEXT SAKNAS: <nyckel>` och testet kan pröva att strängen finns. Lagrummen i kolumnen Krav är data och ägs av den här specen, inte av hantverkaren.

**Status 2026-09-28, efter varv 2: uppdrag A är godkänt att bygga.** Varv 2 (`docs/briefer/underlag-kalkyl-kontrollplan-varv-2-2026-09-28.md`, här "varv 2") är godkänt. Avsnitt 3 och 6 och besluten nedan är rättade efter det, och avsnitt 0.2 listar varje ändring. Lagrummen i avsnitt 3 är nu de som testet låser. Uppdrag C (varumärkesbilden) kan ges parallellt, uppdrag B när hantverkaren skrivit skissens etiketter.

---

## 0. Godkännande av underlaget

Underlaget är **godkänt med villkor**. Strukturen, källförteckningen, genomgången av 10 kap. PBL i lydelse Lag (2026:712), KA-tabellen ur PBF 7 kap. 5 § och de två exempelplanerna i avsnitt 7 används. Att underlaget läst varje BFS-paragraf i grundförfattningen och själv pekat ut fyra fel i Västerås exempel är precis rätt arbete. Men lagrummen är inte lästa i gällande lydelse, och det är villkoret: **ingen kod skrivs förrän varv 2 (avsnitt 13) är levererat och godkänt av mig**, utom varumärkesbilden (uppdrag C). Villkoret är uppfyllt 2026-09-28, se 0.2.

Ändringar mot underlaget:

| # | Underlaget säger | Beslut | Varför |
|---|---|---|---|
| 1 | Åtgärd 7.1: "bygglov enligt PBL 9 kap. 19 §" även med skärmtak | Utan tak: "PBL 9 kap. 19 §". Med skärmtak: bara ordet bygglov utan paragraf tills varv 2 fråga F2 är besvarad | Är skärmtaket en tillbyggnad är 9:19 fel grund. Ingen paragraf är bättre än fel paragraf |
| 2 | Rad 3 i 7.1 bär krav "BFS 2024:6 1 kap. 2 § andra st., 12 och 18 §§" | Behålls, och varv 2 lägger till den paragraf i BFS 2024:6 som ställer själva kravet på bärförmåga (F9) | 1 kap. 2 § är tillämpningsområdet, 12 och 18 §§ är utförande och kontroll. Kravet självt saknas i cellen |
| 3 | Eldstadens utsläpp (4.3 första raden, att verifiera 5) | **Ingen rad.** Prestandadeklarationen kontrolleras i rad `eld-egenskaper` | De nya reglerna har inget tal att kontrollera mot. En rad utan krav är ingen kontrollpunkt |
| 4 | Rivningens "kvarstående delars bärförmåga" (4.8) | **Ingen rad.** Rivning i generatorn betyder rivning av en hel byggnad; att riva i en bärande del är åtgärden `barande` | En hel byggnad har inga kvarstående delar |
| 5 | Ljud (BFS 2024:10), tillgänglighet (BFS 2024:12), glas ("BFS 2025:9"), takskydd för ventilation, VA-ledningarnas placering | **Inga rader** i version 1 | Författningarna är olästa (att verifiera 10), eller cellen "mot vilket krav" blir en ritning i stället för ett lagrum |
| 6 | Avfallshanteringsplan: ANTAGANDE "ej behövlig" i 7.1 och 7.2 | **Generatorn tar aldrig ställning.** Utskriften har alltid rutan för "uppenbart inte behövs" och alltid den tomma planen under | Det är byggherrens bedömning och nämndens prövning (10 kap. 8 a och 23 §§). Sidan får inte kryssa i den åt läsaren |
| 7 | Energi för tillbyggnad (avsnitt 5) | Raden `till-energi` finns, med lagrum efter när ansökan kom in, men låses först efter varv 2 fråga F6 | Övergången 1 oktober 2026 ger två regelverk, och vilken paragraf som gäller en tillbyggnad är inte läst |
| 8 | Hallstahammar- och Degerforsiakttagelserna, filernas ålder (att verifiera 7, 11) | Används inte på sidan | Internt arbete. Står inte i publik text |
| 9 | "Ring Stockholm och Västerås innan sidan lovar det" (att verifiera 8) | **Inte blockerande.** Sidan lovar aldrig att planen godtas (beslut 3) | Utan löfte finns inget att verifiera. Samtalet får gärna göras, och svaret kan bli en fråga i Faq |

Underlagets ANTAGANDEN godkänns med de ändringar som står i avsnitt 11, antagandetabellen.

---

## 0.2 Rättat efter varv 2 (2026-09-28)

Varv 2 är **godkänt**. Det har läst varje lagrum i gällande lydelse via Boverkets rinfo-flöde och riksdagens SFS-text, och där det gör egen läsning säger det det. Besluten:

| # | Varv 2 säger | Beslut |
|---|---|---|
| R1 | `altan-barformaga`: tillämpningen på anläggningar står i 1 kap. 2 § **femte** st., inte andra | Rättat i 3.1 |
| R2 | `till-barformaga`, `komp-barformaga`: kravparagraferna är BFS 2024:6 2 kap. 2, 3, 12, 13 §§, laster 4 kap. 27–37 §§ | Rättat i 3.3 och 3.4 |
| R3 | `till-brandvarnare`: kravet att brandvarnare ska finnas står i BFS 2024:7 7 kap. 47 §; 2 kap. 34–35 §§ är utformning och placering | Rättat i 3.3 |
| R4 | `komp-brandspridning`: 6 kap. 10 § har ny lydelse genom BFS 2025:10; undantaget gäller bara komplementbyggnad till en- eller tvåbostadshus, högst 15 m² byggnadsarea | Rättat i 3.4, ny konstant `KOMPLEMENT_BRANDUNDANTAG_M2 = 15` |
| R5 | `vent-brandtatning`: 5 kap. 42 § stämmer men säger inte klassen; lägg till 5 kap. 29 § | Rättat i 3.7 |
| R6 | `till-energi` juli–september: BBR 1:22347 (tillbyggnad som separat enhet) och 9:92; från oktober BFS 2026:9 3 kap. 1 § med bilaga 2 tabell 6, där tillbyggnaden räknas som ändring | Rättat i 3.3. Nytt ANTAGANDE A13 om 1 kap. 3 § BFS 2026:9 |
| R7 | F1: fristående altan bärs av **PBF 3 kap. 10 §** (via PBL 8 kap. 4 § första st. 4 och 8 kap. 5 § tredje st.; "byggnadsverk" omfattar anläggningar) | **Räckesraden står med i båda fallen.** `plac` byter bara kravet: vid huset BFS 2024:9 2 kap. 10–11 §§, fristående PBF 3 kap. 10 §. Beslut 2 och A8 rättade |
| R8 | F2: ett skärmtak som ger volymökning är en tillbyggnad (Boverket), lovgrund PBL 9 kap. 9 §, men en konstruktion med inslag av både altan och tillbyggnad bedöms från fall till fall och kräver lov som en åtgärd. Om PBF 7 kap. 5 § första st. 6 omfattar altan med skärmtak **kan inte bekräftas** | Förbehållet står kvar. Lovgrunden med tak säger båda paragraferna och att nämnden bedömer (2.6). KA-raden `nej-skarmtak` får PBL 10 kap. 10 § 1 som alternativ grund (2.5) |
| R9 | F3: ingen läst författning kräver skorstensfejarmästarens besiktning före första användning, och den är inte sakkunnigkontroll i PBL:s mening. Boverket kallar läckagemätning och röktrycksprovning lämpliga i kontrollplanen | `eld-tathet` står kvar som **egenkontroll** med skorstensfejarmästaren som kontrollant och täthetsprovning som metod. Boverkets text är källan för att raden finns (A12). Ingen publik text säger att besiktningen är lagkrav |
| R10 | F9: en komplementbyggnad där få vistas tillfälligt **får** hänföras till säkerhetsklass 1 (BFS 2024:6 2 kap. 7 § 1), och då krävs ingen dimensioneringskontroll. Ett komplementbostadshus hör snarare till säkerhetsklass 2 | `komplement` betyder **komplementbyggnad som inte är bostad** (garage, förråd, carport). A7 får källan 2 kap. 7 § 1. Komplementbostadshus med bygglov ingår inte i version 1 (A14); hjälpraden till `komplement` säger det. Det lovfria komplementbostadshuset med installationer (`hus`) påverkas inte, eftersom planen där bara gäller installationerna |
| R11 | F7: PBL 10 kap. 3 och 4 §§ bekräftade ordagrant | `borja-fore-startbesked` och `ta-i-bruk` står med. `ta-i-bruk` bär förbehållet "om nämnden inte beslutar annat", som i paragrafen |
| R12 | 10 kap. 8 a §: undantaget "uppenbart" står i **andra stycket**; punkt 2 har underpunkterna a och b | Rutan i avfallsdelen hänvisar till "PBL 10 kap. 8 a § andra st." |
| R13 | 13.2: Lag (2026:746) och Förordning (2026:1265) ändrar inget lagrum i planen. PBF 7 kap. 1 § och 3 kap. 21 § (etapper) upphör utan ersättare | Inget fjärde värde i `inkom`. Antagandetabellen får raden A15 med läsdatum. Ingen text på sidan nämner etapper |
| R14 | BFS 2025:9 gäller energiexperter och rör inte BFS 2024:9 | Inget att ändra; ingen glasrad finns |
| R15 | `till-fukt`: dokumentet heter "fuktsäkerhetsdokumentation" (BFS 2024:8 1 kap. 18 §) | Innebörden för "mot" rättad i 3.3 och 3.4 |
| R16 | Alla konstanter i 2.2 ordagrant bekräftade: 0,30, 0,10, 0,20, 1,0, 0,35, 4,0, 50, 60 | Oförändrade |

**Princip för kravkolumnen, beslutad nu.** Flera rader gäller ändring av en befintlig byggnad (eldstad, ventilation, VA, bärande, tillbyggnad), medan föreskrifternas 2 kap. formellt gäller nya byggnader och ändringskapitlet hänvisar tillbaka dit. Planen hänvisar till **den paragraf som ställer kravet i sak**, inte till ändringskapitlets hänvisning. Det är så Boverket själv skriver sina exempelrader (underlaget K3: "3 kap. 1 § BFS 2024:8", "7 kap. 11 § BFS 2024:8"). Varje sådan rad står under "Därför blev svaret så" med regeln `anpassad` (PBL 10 kap. 7 §), som säger att kraven vid ändring kan anpassas.

**F10** (lovfri tillbyggnad och anmälan): källorna säger olika. Inget om det på sidan, inte heller i Faq.

---

## 0.1 De fyra besluten

### Beslut 1. Lagrummen verifieras i gällande lydelse innan något kodas

Varje lagrum i avsnitt 3 och 6 stäms av mot konsoliderad text i ett andra varv av underlagsarbetaren. Exakt beställning i avsnitt 13. Reglerna för resultatet:

- Stämmer paragrafen i gällande lydelse står den kvar som den står här.
- Har paragrafen fått nytt nummer eller ny lydelse skriver varv 2 det nya, med ändringsförfattningens beteckning, och jag rättar specen.
- **Går paragrafen inte att bekräfta i gällande lydelse stryks raden.** Den ersätts aldrig av en närliggande paragraf eller en gissning.
- Testet låser lagrummen först efter varv 2. Tills dess finns inga lagrumssträngar i koden.
- Lag (2026:746) och förordning (2026:1265), som träder i kraft 1 januari 2027, läses i varv 2. Sidan publiceras inte förrän det är gjort, eftersom den är live över årsskiftet och inte läser dagens datum. Gjort 2026-09-28: de ändrar inget lagrum i planen (R13).

### Beslut 2. De osäkra punkterna

| Punkt | Beslut | Hur |
|---|---|---|
| Räcken på fristående altan | **Med** (rättat efter varv 2, R7) | Fältet `plac` byter kravet. Vid huset: BFS 2024:9 2 kap. 10–11 §§, eftersom 10 § själv nämner vistelseytor "i anslutning till byggnader". Fristående: PBF 3 kap. 10 §, kravet på säkerhet vid användning för varje byggnadsverk. Raden står med i båda fallen |
| Skärmtak som tillbyggnad | **Med förbehåll** (bekräftat efter varv 2, R8) | Raderna 7 till 9 i 7.1 följer med när `tak=skarmtak`; deras krav gäller taket vad det än kallas. KA-raden får statusen `nej-skarmtak`. Lovgrunden nämner både 9 kap. 19 § och 9 kap. 9 § och säger att nämnden bedömer vilken åtgärd det är |
| Lovfri tillbyggnad och anmälan | **Bort** (F10: källorna säger olika) | Inget eget val. Påverkar tillbyggnaden bärande delar väljer läsaren `barande`, drar hen installationer väljer hen dem. Sidan påstår inget om lovfria tillbyggnader |
| Sotarbesiktningens lagrum | **Med, utan påstående om lagkrav** (bekräftat efter varv 2, R9) | Raden `eld-tathet` står kvar som egenkontroll. Kravkolumnen bär de tekniska kraven (BFS 2024:7 4 kap. 17 och 21 §§, BFS 2024:9 2 kap. 38 §), som är det som kontrolleras. Kontrollanten är skorstensfejarmästaren. Ingen text på sidan säger att besiktningen är lagkrav |
| Lag (2026:746), förordning (2026:1265) | **Lästa i varv 2, ändrar inget** (R13) | Inget fjärde värde i `inkom`. Antagandetabellen har raden A15 med datum för läsningen. Publiceringen är inte längre blockerad av dem |

### Beslut 3. Ansvarsraden

Sidan säger aldrig att kommunen godtar planen. Den säger vad planen är, vem som bestämmer och vad läsaren ansvarar för, på tre ställen:

1. **Beskedet i spalten** (`TEXT.besked.*`) har alltid en andra mening (`TEXT.spalt.ansvar`, TEXT SAKNAS). Innebörd: det här är ditt förslag; byggnadsnämnden prövar det och fastställer planen i startbeskedet, och den kan ändra den. Lagrum efter meningen: PBL 10 kap. 23 och 24 §§.
2. **Överst på utskriften**, direkt under rubriken, i brödstorlek och inte finstilt (`TEXT.utskrift.ansvar`, TEXT SAKNAS). Innebörd, fyra led: (a) förslag till kontrollplan enligt PBL 10 kap. 6 §; (b) gäller först när byggnadsnämnden fastställt den i startbeskedet, 10 kap. 24 §; (c) vill kommunen ha sin egen blankett förs raderna över dit (Stockholm skriver det på sina exempel, underlaget S2); (d) byggherren ansvarar för att planen passar det som faktiskt byggs.
3. **"Därför blev svaret så"**, regeln `faststalls` (avsnitt 2.9).

Testet söker igenom hela `TEXT` och rutten efter orden "godkän", "godta", "garanter" och "alla kommuner" (skiftlägesokänsligt) och fäller vid träff. Hantverkaren får veta det innan hen skriver.

### Beslut 4. Värdartikeln

SEO och GEO-agenten väljer. Båda alternativen är specade i avsnitt 10.

- **Alternativ A, `/altan/bygglov-altan/`.** Bär sidfrasen "kontrollplan altan", och standardfallet är en altan. Sidan väger 60,1 kB i dagens bygge (`dist/client/altan/bygglov-altan/index.html`, 2026-09-28) och har redan en `<Kalkylator namn="bygglov-altan" />`. Ett andra inbäddat formulär ryms under 66 kB om det kompakta formuläret håller sig under 4 kB (avsnitt 4.4).
- **Alternativ B, `/grund/inreda-kallare/`.** Läsaren där har tre av generatorns åtgärder framför sig (ventilation, VA, bärande), och artikeln talar redan om anmälan och startbesked. Men sidan väger **79,4 kB** i dagens bygge, alltså redan 13 kB över budgeten. B godkänns bara om samma leverans tar bort minst lika mycket från sidan som formuläret lägger till, uppmätt. Annars är det retur.

Min rekommendation ur budgeten är A. Läsarens behov talar för B. Det är SEO och GEO-agentens avvägning.

---

## 1. Filer

| Fil | Gör | Uppdrag |
|---|---|---|
| `src/lib/kalkyl/kontrollplan.ts` | skapas | A |
| `scripts/test-kalkyl-kontrollplan.mjs` | skapas | A |
| `src/components/kalkyl/KontrollplanForm.astro` | skapas | A |
| `src/components/kalkyl/KontrollplanPlan.astro` | skapas, planen på skärm och i utskrift | A |
| `src/pages/rakna/kontrollplan.astro` | skapas | A |
| `src/styles/global.css` | ett nytt block sist, "Kontrollplanen" (avsnitt 7) | A |
| `src/layouts/Bas.astro` | `print:hidden` på fyra element (avsnitt 7.1), inget annat | A |
| `src/lib/kalkyl/register.ts` | en post | A |
| `src/components/ui/Kalkylator.astro` | import, `'kontrollplan'` i `MED_FORMULAR`, en renderingsrad | A |
| värdartikeln enligt beslut 4 | **en rad** | A, efter SEO och GEO-agentens val |
| `src/assets/illustrationer/rakna/varumarke/kontrollplan.svg` | skapas | C |
| `src/assets/illustrationer-kallor/rakna/kontrollplan.svg` | skapas, `npm run illustrationer` skriver den publicerade | B |

Rörs inte: `src/lib/kalkyl/stil.ts`, `src/lib/verktygsbild.ts`, `src/lib/strukturdata.ts`, andra kalkylmoduler och formulär, någon annan del av `Bas.astro`, någon annan mening i värdartikeln. `docs/SPEC-SIDMALLAR.md` 4.7.16 skriver jag efter granskningen.

- **Uppdrag C** (varumärkesbilden) kan ges nu.
- **Uppdrag A är godkänt att bygga** (2026-09-28). Varv 2 är godkänt, avsnitt 3 och 6 är rättade (0.2), och stycket om utskrift står i `docs/ARKITEKTUR.md`.
- **Uppdrag B** (skissen) ges när hantverkaren skrivit skissens etiketter (avsnitt 12.1).

Sidan fungerar utan skiss. Arbetaren kör inte `npm run build`.

---

## 2. Modulen `src/lib/kalkyl/kontrollplan.ts`

Ren modul utan Astro-importer och utan importer alls. Varje konstant namngiven överst med `Källa:` (K-nummer ur underlaget, titel, adress, lästdatum) eller `ANTAGANDE:` med numret i avsnitt 11. Modulen läser aldrig dagens datum.

### 2.1 Typer

```ts
export type Atgard = 'altan' | 'tillbyggnad' | 'komplement' | 'eldstad' | 'ventilation' | 'va' | 'barande' | 'rivning';
export type Tak = 'nej' | 'skarmtak';
export type Placering = 'vid-huset' | 'fristaende';
export type Rokkanal = 'ny' | 'befintlig';
export type Hus = 'bostadshus' | 'komplementbostadshus';
export type JaNej = 'ja' | 'nej';
export type Inkom = 'fore-juli-2026' | 'juli-sept-2026' | 'fran-okt-2026';

export interface KontrollplanIndata {
  atgarder: Atgard[];     // i ATGARD_ORDNING, utan dubbletter
  tak: Tak;               // läses bara när altan är vald
  plac: Placering;        // läses bara när altan är vald
  rok: Rokkanal;          // läses bara när eldstad är vald
  hus: Hus;
  vardefullt: JaNej;
  inkom: Inkom;
}

export type Kontrollant = 'B' | 'E' | 'B/E' | 'sotare' | 'funktionskontrollant' | 'konstruktor';
export type Kontrollform = 'egenkontroll' | 'sakkunnig';
export type KaStatus = 'nej' | 'nej-skarmtak' | 'beror' | 'huvudregel';   // stigande styrka
export type Besked = 'plan' | 'plan-ka-skarmtak' | 'plan-ka-beror' | 'plan-ka';
export type Anmalan = 'slutbesked' | 'sotarprotokoll' | 'funktionskontroll';
export type Besok = 'inga-foreslas' | 'namnden';
export type AvfallTips = 'rivning' | 'bedom';
export type FelNyckel = 'a' | 'hus';

export interface Punkt {
  nr: number;             // 1..n i planens ordning
  nyckel: PunktNyckel;    // se avsnitt 3
  krav: string;           // lagrummet, ur KATALOG, efter inkom för till-energi
  vem: Kontrollant;
  form: Kontrollform;
}

export type KontrollplanResultat =
  | {
      status: 'ok';
      indata: KontrollplanIndata;
      punkter: Punkt[];
      ka: KaStatus;
      besked: Besked;
      forfattningar: string[];     // regelverksraden, avsnitt 2.7
      anmalningar: Anmalan[];
      besok: Besok;
      avfall: AvfallTips;
      tommaAvfallsrader: 3 | 6;
      regler: RegelNyckel[];
      gorInteDetHar: GorInte[];
    }
  | { status: 'utanfor'; orsak: 'aldre-regler'; indata: KontrollplanIndata; regler: RegelNyckel[] }
  | { status: 'ogiltig'; fel: Partial<Record<FelNyckel, string>> };
```

`PunktNyckel` är unionen av alla nycklar i avsnitt 3. `RegelNyckel` och `GorInte` står i 2.9.

Export utöver typerna: `ATGARD_ORDNING`, `STANDARD`, `GRANSER`, `KATALOG`, `DELADE`, `LOVGRUND`, `KA_PER_ATGARD`, `KA_LAGRUM`, `ELDSTADSPLAN_M`, `MYNNING_OVER_TAKTACKNING_M`, `FLODE_BOSTAD_L_S_M2`, `FLODE_PER_PERSON_L_S`, `VARMVATTEN_MIN_C`, `SKALLNING_MAX_C`, `KOMPLEMENT_BRANDUNDANTAG_M2`, `ANTAGANDEN`, `TEXT`, `tolkaQuery`, `genereraKontrollplan`, `delbarQuery`.

### 2.2 Konstanter

| Namn | Värde | Märkning |
|---|---|---|
| `ATGARD_ORDNING` | `['altan', 'tillbyggnad', 'komplement', 'rivning', 'barande', 'eldstad', 'ventilation', 'va']` | ANTAGANDE A6: byggnadsverk först, installationer sist, i den ordning man bygger |
| `GRANSER` | `{ atgarder: [1, 3] }` | ANTAGANDE A5 |
| `ELDSTADSPLAN_M` | `{ fram: 0.30, sida: 0.10, utanforOppning: 0.20 }` | Källa: BFS 2024:7 4 kap. 10 § (B7) |
| `MYNNING_OVER_TAKTACKNING_M` | `1.0` | Källa: BFS 2024:7 4 kap. 16 § (B7) |
| `FLODE_BOSTAD_L_S_M2` | `0.35` | Källa: BFS 2024:8 3 kap. 5 § (B8) |
| `FLODE_PER_PERSON_L_S` | `4.0` | Källa: BFS 2024:8 3 kap. 5 § (B8) |
| `VARMVATTEN_MIN_C` | `50` | Källa: BFS 2024:8 8 kap. 6 § (B8) |
| `SKALLNING_MAX_C` | `60` | Källa: BFS 2024:9 2 kap. 33 § (B9) |
| `KOMPLEMENT_BRANDUNDANTAG_M2` | `15` | Källa: BFS 2024:7 6 kap. 10 § i lydelse BFS 2025:10 (varv 2, B7a) |
| `KATALOG` | avsnitt 3 | lagrum per rad, Källa per författning |
| `LOVGRUND` | avsnitt 2.6 | Källa per rad |
| `KA_PER_ATGARD`, `KA_LAGRUM` | avsnitt 2.5 | Källa: PBL 10 kap. 9–10 §§ (K6), PBF 7 kap. 5 § (K7) |

Talen i tabellen ovan skrivs in i `TEXT` med platshållare (`{fram}`, `{mynning}` och så vidare) och formateras med decimalkomma. Hantverkaren skriver aldrig talen själv. Alla tal kontrolleras i varv 2 som alla andra lagrum.

### 2.3 Standardvärden

```ts
export const STANDARD: KontrollplanIndata = {
  atgarder: ['altan'], tak: 'nej', plac: 'vid-huset', rok: 'ny',
  hus: 'bostadshus', vardefullt: 'nej', inkom: 'fran-okt-2026',
};
```

Altan med bygglov utan tak är det vanligaste fallet och bär sidfrasen. Det ger åtta punkter (fall T1). Underlagets exempel 7.1 är fall T2.

### 2.4 `tolkaQuery(q: URLSearchParams): { indata; harIndata }`

| Nyckel | Värden | Saknas | Okänt värde |
|---|---|---|---|
| `a` | upprepad, en per kryssruta, värden ur `Atgard` | se nedan | faller bort tyst |
| `tak` | `nej`, `skarmtak` | standard | standard |
| `plac` | `vid-huset`, `fristaende` | standard | standard |
| `rok` | `ny`, `befintlig` | standard | standard |
| `hus` | `bostadshus`, `komplementbostadshus` | standard | standard |
| `vardefullt` | `ja`, `nej` | standard | standard |
| `inkom` | `fore-juli-2026`, `juli-sept-2026`, `fran-okt-2026` | standard | standard |

- `harIndata` är sant när adressen har minst en av nycklarna ovan. Alla andra nycklar ignoreras och följer aldrig med vidare.
- `a` läses med `getAll`, dubbletter tas bort och listan sorteras i `ATGARD_ORDNING` oavsett ordningen i adressen.
- Har adressen `harIndata` men inget giltigt `a` blir `atgarder` tom, och `genereraKontrollplan` ger fel på `a`. Saknas alla nycklar blir `atgarder` `STANDARD.atgarder`.
- Fler än tre giltiga `a` behålls alla, och felet kommer från `genereraKontrollplan`.

### 2.5 Kontrollansvarig

```ts
export const KA_PER_ATGARD: Record<Atgard, KaStatus> = {
  altan: 'nej',            // PBF 7 kap. 5 § första st. 6; blir 'nej-skarmtak' när tak = skarmtak
  tillbyggnad: 'huvudregel', // PBL 10 kap. 9 §; undantag 10 kap. 10 § 1
  komplement: 'nej',       // PBF 7 kap. 5 § första st. 3
  rivning: 'beror',        // rivningslov: PBL 10 kap. 9 §, utom PBF 7:5 p. 9; anmälan: PBF 7:5 p. 2
  barande: 'nej', eldstad: 'nej', ventilation: 'nej', va: 'nej',  // PBF 7 kap. 5 § första st. 2
};
```

Planens status är den starkaste bland de valda åtgärderna i ordningen `nej` < `nej-skarmtak` < `beror` < `huvudregel`. `KA_LAGRUM[status]` är lagrumssträngen som står efter texten på KA-raden, och varje status utom `huvudregel` slutar med andra stycket: "om nämnden inte beslutar annat (PBF 7 kap. 5 § andra st.)" som text plus lagrum.

| Status | Lagrum efter texten | Innebörd, `TEXT.ka.*` (TEXT SAKNAS) |
|---|---|---|
| `nej` | PBF 7 kap. 5 § första och andra st. | Krävs inte för den här åtgärden, om nämnden inte beslutar annat |
| `nej-skarmtak` | PBF 7 kap. 5 § första st. 6 och andra st.; PBL 10 kap. 10 § 1 | Krävs normalt inte för en altan. Bedömer nämnden skärmtaket som en tillbyggnad gäller undantaget för små ändringar av en- eller tvåbostadshus, och nämnden kan ändå kräva en |
| `beror` | PBL 10 kap. 9 §; PBF 7 kap. 5 § första st. 2 och 9 | Rivningslov: krävs som huvudregel. Anmälan: krävs inte |
| `huvudregel` | PBL 10 kap. 9 och 10 §§ | Krävs som huvudregel. Kontrollansvarig biträder med planen; små ändringar av en- eller tvåbostadshus kan undantas |

`Besked` följer av status: `nej` ger `plan`, `nej-skarmtak` ger `plan-ka-skarmtak`, `beror` ger `plan-ka-beror`, `huvudregel` ger `plan-ka`.

### 2.6 Lovgrund per åtgärd (`LOVGRUND`)

Står på planens rad "Åtgärd" efter `TEXT.atgard.<a>.plan`. Alla bekräftade i varv 2.

| Åtgärd | Lagrum | Anmärkning |
|---|---|---|
| altan, `tak=nej` | Bygglov, PBL 9 kap. 19 § | |
| altan, `tak=skarmtak` | Bygglov, PBL 9 kap. 19 § eller 9 kap. 9 § | Egen text `atgard.altan.plan-skarmtak` (TEXT SAKNAS): nämnden bedömer om det är en altan eller en tillbyggnad (R8) |
| tillbyggnad | Bygglov, PBL 9 kap. 9 § | |
| komplement | Bygglov, PBL 9 kap. 3 § | |
| rivning | Rivningslov, PBL 9 kap. 43 §, eller anmälan, PBF 6 kap. 1 § 1 | |
| barande | Anmälan, PBF 6 kap. 1 § 2 | |
| eldstad, ventilation | Anmälan, PBF 6 kap. 1 § 4 | |
| va | Anmälan, PBF 6 kap. 1 § 5 | |

När `hus = komplementbostadshus` står `TEXT.atgard.komplementbostadshus` (TEXT SAKNAS) före installationerna. Innebörd: själva huset kräver varken lov eller anmälan; anmälan och planen gäller installationerna (K13, PBF 6 kap. 1 § 4 och 5).

### 2.7 `genereraKontrollplan(i: KontrollplanIndata): KontrollplanResultat`

Stegen i ordning:

1. **Giltighet.** `atgarder` tom ger `fel.a` = `TEXT.fel['a-tom']`. Fler än `GRANSER.atgarder[1]` ger `fel.a` = `TEXT.fel['a-for-manga']`. `hus = komplementbostadshus` med någon åtgärd utanför `eldstad`, `ventilation`, `va` ger `fel.hus` = `TEXT.fel['hus-komplement']`. Flera fel samtidigt ger flera nycklar. Något fel ger `status: 'ogiltig'`.
2. **Äldre regler.** `inkom = fore-juli-2026` ger `status: 'utanfor'`, `orsak: 'aldre-regler'` och `regler: ['aldre-lydelse', 'aldre-byggregler']`. Ingen plan. Skälet: 10 kap. 6 § ska tillämpas i äldre lydelse (övergångsbestämmelse 2 till Lag 2026:712) och äldre byggregler kan ha valts (BFS 2024:14 övergång p. 3). En plan med fel lydelse är värre än ingen.
3. **Raderna.** För varje åtgärd i `ATGARD_ORDNING` som är vald, katalogens rader i katalogens ordning, med villkoren i avsnitt 3 (`tak`, `plac`, `rok`). Delade rader (`DELADE`: `vardefullt`, `aktsamhet`, `overens`) läggs aldrig in här.
4. **Delade rader.** `vardefullt` först i planen när `vardefullt = ja`. Sist, i den ordningen: `aktsamhet` om någon vald åtgärd har den i avsnitt 3, och alltid `overens`. Varje delad rad förekommer högst en gång.
5. **Numrering** 1..n. `krav` för `till-energi` väljs efter `inkom`.
6. **KA och besked** enligt 2.5.
7. **Regelverksraden** `forfattningar`: varje författning som förekommer i någon rads `krav`, unik, i ordningen PBL, PBF, BFS 2024:4, 2024:6, 2024:7, 2024:8, 2024:9, BFS 2011:6, BFS 2026:9. PBL skrivs alltid, som "PBL 10 kap. 6 § i lydelse Lag (2026:712)", övriga med beteckningen. BFS 2024:7 skrivs "BFS 2024:7 i lydelse BFS 2025:10" när `komp-brandspridning` finns i planen.
8. **Anmälningar.** Alltid `slutbesked`. Plus `sotarprotokoll` när eldstad är vald och `funktionskontroll` när ventilation är vald.
9. **Arbetsplatsbesök.** `namnden` när KA-status är `beror` eller `huvudregel`, annars `inga-foreslas` (ANTAGANDE A2).
10. **Avfall.** `rivning` och `tommaAvfallsrader: 6` när rivning är vald, annars `bedom` och `3`.
11. **Regler och Gör inte** enligt 2.9.

### 2.8 `delbarQuery(i: KontrollplanIndata): string`

Alltid alla nycklar i ordningen `a` (en per vald åtgärd, i `ATGARD_ORDNING`), `tak`, `plac`, `rok`, `hus`, `vardefullt`, `inkom`. Ingen annan nyckel kan komma ut, oavsett vad adressen innehöll. Standardfallet blir:

```
a=altan&tak=nej&plac=vid-huset&rok=ny&hus=bostadshus&vardefullt=nej&inkom=fran-okt-2026
```

Samma sträng står i det skrivskyddade fältet på skärmen och i sidfoten på utskriften (avsnitt 7.3). **Inga personuppgifter i adressen**: namn, fastighetsbeteckning, diarienummer och datum finns inte som fält någonstans; de fylls i för hand på papperet.

### 2.9 Regler och Gör inte

`RegelNyckel` och när de visas. Lagrummet är data i modulen, texten TEXT SAKNAS med innebörden i tabellen.

| Nyckel | När | Lagrum | Innebörd |
|---|---|---|---|
| `innehall` | alltid | PBL 10 kap. 6 § | Planen ska säga vilka kontroller och mot vilka krav, vem och hur, vilka anmälningar och vilka arbetsplatsbesök |
| `anpassad` | alltid | PBL 10 kap. 7 § | Planen anpassas till just det här bygget; stryk och lägg till |
| `egen-sakkunnig` | alltid | PBL 10 kap. 8 § | Det ska framgå vad som är egenkontroll och vad en sakkunnig gör |
| `byggbedomare` | alltid | PBL 10 kap. 6 § första st. | Kontrollerar en byggbedömare utförandet behövs ingen kontrollplan för den delen |
| `avsta` | alltid | PBL 10 kap. 6 a § | Nämnden får besluta att en plan inte behövs för enklare åtgärder |
| `avfall` | alltid | PBL 10 kap. 8 a § | Avfallshanteringsplanen är en egen plan; den behövs inte när det är uppenbart |
| `faststalls` | alltid | PBL 10 kap. 23 och 24 §§ | Nämnden prövar förslaget och fastställer planen i startbeskedet (beslut 3) |
| `slutbesked` | alltid | PBL 10 kap. 34 § 1 | Slutbesked kräver att planen är följd |
| `nya-byggregler` | alltid | BFS 2024:14 övergångsbestämmelse 3 | Hänvisningarna går till Boverkets nya föreskrifter; BBR och EKS används inte i ärenden från 1 juli 2026 |
| `ka` | alltid | `KA_LAGRUM[ka]` | Samma innebörd som KA-raden |
| `funktionskontroll` | ventilation | PBL 8 kap. 25 §; PBF 5 kap. 1–2 §§ | Funktionskontroll före första användning, av certifierad kontrollant |
| `energi` | tillbyggnad | `juli-sept-2026`: BFS 2011:6 avsnitt 1:22347 och 9:92; `fran-okt-2026`: PBL 1 kap. 4 §; BFS 2026:9 3 kap. 1 § | Vilket energiregelverk raden hänvisar till och varför |
| `aldre-lydelse` | utanför | övergångsbestämmelse 2 till Lag (2026:712) | Ansökan före 1 juli 2026 följer den äldre lydelsen; använd kommunens mall för äldre regler |
| `aldre-byggregler` | utanför | BFS 2024:14 övergångsbestämmelse 3 | Äldre byggregler kan ha valts i lovet |

`GorInte`:

| Nyckel | När | Lagrum | Innebörd |
|---|---|---|---|
| `bbr-eks` | alltid | BFS 2024:14 övergångsbestämmelse 3 | Skriv inte BBR- eller EKS-hänvisningar i en ny plan, även om kommunens mall har dem |
| `borja-fore-startbesked` | alltid | PBL 10 kap. 3 § | Börja inte innan startbeskedet kommit |
| `ta-i-bruk` | eldstad, ventilation eller va vald | PBL 10 kap. 4 § | Elda inte, starta inte fläkten och använd inte vattnet innan slutbeskedet, om nämnden inte beslutat annat |

Båda paragraferna bekräftade ordagrant i varv 2 (R11).

### 2.10 Publika strängar, `TEXT`

Samma mönster som `u-varde.ts`: ett objekt med alla strängar läsaren ser och som modulen äger, en nyckel per rad nedan, platshållaren `TEXT SAKNAS: <nyckel>` tills hantverkaren skrivit. Testet kräver att varje nyckel finns och är icke-tom, och att ingen innehåller orden i beslut 3.

- `atgard.<Atgard>.etikett`, `atgard.<Atgard>.hjalp`, `atgard.<Atgard>.plan`, `atgard.altan.plan-skarmtak`, `atgard.komplementbostadshus`
- `falt.a`, `falt.tak`, `falt.tak.<Tak>`, `falt.plac`, `falt.plac.<Placering>`, `falt.rok`, `falt.rok.<Rokkanal>`, `falt.hus`, `falt.hus.<Hus>`, `falt.vardefullt`, `falt.vardefullt.<JaNej>`, `falt.inkom`, `falt.inkom.<Inkom>`, `falt.altan-hjalp`, `falt.eldstad-hjalp`
- `fel.a-tom`, `fel.a-for-manga`, `fel.hus-komplement`
- `besked.<Besked>`, `besked.aldre-regler`, `spalt.enhet`, `spalt.ansvar`, `spalt.pekrad`, `spalt.utskrift`
- `ka.<KaStatus>`
- `punkt.<PunktNyckel>.vad`, `.hur`, `.mot`, `.verifikat`, `.nar`
- `vem.<Kontrollant>`, `form.<Kontrollform>`, `kolumn.nr`, `kolumn.kontroll`, `kolumn.krav`, `kolumn.hur`, `kolumn.vem`, `kolumn.verifikat`, `kolumn.signatur`, `kolumn.teckenforklaring`
- `anmalan.<Anmalan>`, `besok.<Besok>`
- `avfall.rubrik`, `avfall.ruta`, `avfall.tips.<AvfallTips>`, `avfall.del1`, `avfall.del2`, `avfall.del3`, `avfall.kolumn.sak`, `avfall.kolumn.hur`
- `utskrift.titel`, `utskrift.ansvar`, `utskrift.falt.fastighet`, `.byggherre`, `.entreprenor`, `.diarienummer`, `.upprattad`, `.atgard`, `.ka`, `.regelverk`, `utskrift.anmalningar`, `utskrift.besok`, `utskrift.intygande`, `utskrift.datum`, `utskrift.underskrift`, `utskrift.namnfortydligande`, `utskrift.skapad`, `utskrift.handskrift`
- `regel.<RegelNyckel>`, `gorInte.<GorInte>`, `antagande.<nr>`

Standardvarningen och delatexten är gränssnitt och tas ordagrant från skillen nytt-verktyg: "Ett av fälten gick inte att läsa, så jag visar standardvärdena tills du rättat det." och "Dina värden ligger i adressen. Markera den och kopiera, så får den du skickar länken till samma svar."

---

## 3. Katalogen

Kolumnerna: nyckel, villkor, **Krav** (data, låst efter varv 2), kontrollant, egenkontroll (E) eller sakkunnig (S), och innebörden som hantverkaren skriver `vad / hur / mot / verifikat / när` efter. Innebörden är underlagets celler. **Varje Krav i det här avsnittet är bekräftat i gällande lydelse i varv 2** och skrivs in i `KATALOG` och testet tecken för tecken som det står här.

`aktsamhet` i kolumnen "delad" betyder att åtgärden tar med den delade raden `aktsamhet`.

### 3.1 Altan (underlaget 7.1), delad: `aktsamhet`

| # i 7.1 | Nyckel | Villkor | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|---|---|
| 1 | `altan-lage` | | Bygglovet; PBL 10 kap. 34 § 1 | B | E | Läge och höjd enligt lovet / mätning / situationsplanen i lovet / signatur, foto / efter utsättning, före plintar |
| 2 | `altan-grund` | | BFS 2024:6 1 kap. 12 och 18 §§ | B/E | E | Grundläggning, plintar / visuellt, mätning / K-ritning eller tillverkarens anvisning / foto / före igenfyllnad |
| 3 | `altan-barformaga` | | BFS 2024:6 1 kap. 2 § femte st., 12 och 18 §§ | B/E | E | Bärlinor, reglar och, med tak, skärmtakets bärverk / visuellt, mätning av dimensioner / K-ritning, tillverkarens anvisning för snö och vind / signatur / före trall och takbeklädnad |
| 4 | `altan-mottagning` | | BFS 2024:6 1 kap. 19 § | B/E | E | Virke och beslag vid leverans / visuellt, märkning / följesedel mot K-ritning / följesedel / vid leverans |
| 5 | `altan-racke` | alltid; kravet efter `plac` | `vid-huset`: BFS 2024:9 2 kap. 10–11 §§; `fristaende`: PBF 3 kap. 10 § | B/E | E | Skydd mot fall, räcke / mätning av höjd och öppningar / A-ritning / signatur, foto / efter montering |
| 6 | `altan-trappa` | | BFS 2024:9 2 kap. 5 och 12–13 §§ | B/E | E | Trappa och ledstång / mätning / A-ritning / signatur / efter montering |
| 7 | `altan-taktackning` | `tak = skarmtak` | BFS 2024:7 5 kap. 50 § andra st. 2 | B/E | E | Taktäckningens brandklass / visuellt, produktblad / produktens brandklass / produktblad / vid leverans |
| 8 | `altan-brandspridning` | `tak = skarmtak` | BFS 2024:7 6 kap. 5 § | B/E | E | Avstånd till grannens byggnad inom 8 m / mätning, visuellt / A-ritning, situationsplan / signatur / före byggstart |
| 9 | `altan-dagvatten` | `tak = skarmtak` | BFS 2024:8 7 kap. 4 § | B/E | E | Regnvatten från taket leds bort från huset / visuellt / A-ritning / foto / efter montering av hängränna |

### 3.2 Eldstad (underlaget 7.2), ingen `aktsamhet`

| # i 7.2 | Nyckel | Villkor | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|---|---|
| 1 | `eld-egenskaper` | | BFS 2024:7 1 kap. 7 och 18 §§ | B | E | Eldstad och skorsten har dokumenterade egenskaper / visuellt, märkning / prestandadeklaration, CE-märkning / prestandadeklaration / vid leverans |
| 2 | `eld-underlag` | | BFS 2024:7 4 kap. 13 § | B/E | E | Underlagets bärförmåga / visuellt / tillverkarens anvisning, vikt / signatur / före montering |
| 3 | `eld-genomforing` | `rok = ny` | BFS 2024:6 1 kap. 12 och 18 §§; BFS 2024:7 4 kap. 19 § | B/E | E | Genomföring i bjälklag och tak, avväxling / visuellt, mätning / monteringsanvisning / foto / före igensättning |
| 4 | `eld-avstand` | | BFS 2024:7 4 kap. 8 och 14 §§ | B/E | E | Avstånd till brännbart, yttemperatur / mätning / monteringsanvisningens skyddsavstånd / foto med mått / efter montering, före inklädnad |
| 5 | `eld-eldstadsplan` | | BFS 2024:7 4 kap. 10 § | B/E | E | Eldstadsplan i obrännbart material / mätning / `{fram}` m fram, `{sida}` m vid sidorna, eller `{utanforOppning}` m utanför öppningen / foto med mått / efter montering |
| 6 | `eld-forbranningsluft` | | BFS 2024:7 4 kap. 9 § | B/E | E | Förbränningsluft / visuellt / monteringsanvisning / signatur / efter montering |
| 7 | `eld-mynning` | `rok = ny` | BFS 2024:7 4 kap. 16 § | B/E | E | Mynning minst `{mynning}` m över taktäckningen / mätning / A-ritning, monteringsanvisning / foto med mått / efter montering |
| 8 | `eld-gaser` | | BFS 2024:8 9 kap. 4 § | B/E | E | Förbränningsgaser förs inte tillbaka in / visuellt / A-ritning / signatur / efter montering |
| 9 | `eld-tathet` | | BFS 2024:7 4 kap. 17 och 21 §§; BFS 2024:9 2 kap. 38 § | sotare | E | Täthet, rensning och inspektion / täthetsprovning (läckagemätning, röktrycksprovning) / monteringsanvisning / protokoll / före första eldning |
| 10 | `eld-takskydd` | `rok = ny` | BFS 2024:9 2 kap. 15–21 §§ | B/E | E | Takskydd för sotaren / visuellt / tillverkarens anvisning / foto / efter montering |

`rok = befintlig` tar bort 3, 7 och 10 (ANTAGANDE A3).

### 3.3 Tillbyggnad (underlaget 4.7, varv 2 F5), delad: `aktsamhet`

| Nyckel | Villkor | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|---|
| `till-lage` | | Bygglovet; PBL 10 kap. 34 § 1 | B | E | Utstakning, läge och höjd / mätning / situationsplan / signatur / efter utstakning |
| `till-grund` | | BFS 2024:6 1 kap. 12 och 18 §§ | B/E | E | Grundläggning och armering / visuellt, mätning / K-ritning / foto / före gjutning |
| `till-fukt` | | BFS 2024:8 7 kap. 1 § | B/E | E | Fuktsäkerhet / visuellt / A-ritning, fuktsäkerhetsdokumentation (BFS 2024:8 1 kap. 18 §) / signatur / före igensättning |
| `till-barformaga` | | BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§ | B/E | E | Bärförmåga för snö och vind, takstolar / visuellt, mätning / K-ritning / signatur / före inklädnad |
| `till-dimensionering` | | BFS 2024:6 1 kap. 17 § | konstruktor | E | Dimensioneringskontroll av någon som inte gjort beräkningen / granskning / konstruktionshandlingar / intyg / före utförande |
| `till-mottagning` | | BFS 2024:6 1 kap. 19 § | B/E | E | Byggprodukter vid leverans / visuellt, märkning / följesedel mot handlingar / följesedel / vid leverans |
| `till-brandspridning` | | BFS 2024:7 6 kap. 5 § | B/E | E | Brandspridning till annan byggnad / mätning / situationsplan / signatur / före byggstart |
| `till-brandvarnare` | | BFS 2024:7 7 kap. 47 §; 2 kap. 34–35 §§ | B/E | E | Brandvarnare / visuellt / A-ritning / foto / efter montering |
| `till-luftfloden` | | BFS 2024:8 3 kap. 4 och 5 §§ | B/E | E | Luftflöden / mätning / `{flodeM2}` l/s per m² och `{flodePerson}` l/s per person / mätprotokoll / före inflyttning |
| `till-energi` | | `juli-sept-2026`: BFS 2011:6 avsnitt 1:22347 och 9:92; `fran-okt-2026`: BFS 2026:9 3 kap. 1 § och bilaga 2 tabell 6 | B/E | E | Klimatskärmens värmeisolering / visuellt, produktblad / A-ritning, energiberäkning / produktblad / före inklädnad |

`till-dimensionering` gäller eftersom ett en- eller tvåbostadshus hör till säkerhetsklass 2 (BFS 2024:6 2 kap. 6 § 1). Regeln `energi` säger vid `juli-sept-2026` att tillbyggnaden följer kraven för nya byggnader om den är en separat enhet (1:22347), annars U-värdena i 9:92, och vid `fran-okt-2026` att tillbyggnaden räknas som ändring (PBL 1 kap. 4 §, BFS 2026:9 3 kap. 1 §).

### 3.4 Komplementbyggnad med bygglov, inte bostad (underlaget 4.7, varv 2 F5 och F9), delad: `aktsamhet`

| Nyckel | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|
| `komp-lage` | Bygglovet; PBL 10 kap. 34 § 1 | B | E | som `till-lage` |
| `komp-grund` | BFS 2024:6 1 kap. 12 och 18 §§ | B/E | E | som `till-grund` |
| `komp-fukt` | BFS 2024:8 7 kap. 1 § | B/E | E | som `till-fukt` |
| `komp-barformaga` | BFS 2024:6 2 kap. 2, 3, 12 och 13 §§; 4 kap. 27–37 §§; 1 kap. 12 och 18 §§ | B/E | E | som `till-barformaga` |
| `komp-mottagning` | BFS 2024:6 1 kap. 19 § | B/E | E | som `till-mottagning` |
| `komp-brandspridning` | BFS 2024:7 6 kap. 5 och 10 §§ i lydelse BFS 2025:10 | B/E | E | Brandspridning till och från huset; undantaget gäller komplementbyggnad till ett en- eller tvåbostadshus på högst `{komplementUndantag}` m² byggnadsarea / mätning / situationsplan / signatur / före byggstart |

Ingen dimensioneringskontroll, energi, luftflöden eller brandvarnare (ANTAGANDE A7, med källan BFS 2024:6 2 kap. 7 § 1: en komplementbyggnad där få vistas tillfälligt får hänföras till säkerhetsklass 1, och 1 kap. 17 § kräver dimensioneringskontroll bara i klass 2 och 3). `atgard.komplement.hjalp` säger att valet gäller garage, förråd och liknande, inte ett komplementbostadshus som kräver lov (A14).

### 3.5 Rivning (underlaget 4.8), delad: `aktsamhet`

| Nyckel | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|
| `riv-inventering` | PBL 10 kap. 8 a §; BFS 2024:4 9 § 2 | B | E | Farliga ämnen inventerade före rivning / inventering / materialinventering / inventeringsprotokoll / före rivning |
| `riv-skadedjur` | BFS 2024:4 9 § 1 | B | E | Skadedjur i byggnaden / visuellt / – / signatur / före rivning |
| `riv-avfallsplan` | PBL 10 kap. 5 a och 8 a §§ | B/E | E | Avfallet hanteras enligt avfallshanteringsplanen / visuellt / avfallshanteringsplanen / mottagningskvitton / under rivningen |

### 3.6 Ändring i bärande konstruktion (underlaget 4.6), delad: `aktsamhet`

| Nyckel | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|
| `bar-befintligt` | BFS 2024:6 1 kap. 13 § | B/E | E | Befintliga bärverk klarlagda / visuellt / konstruktionshandling / signatur / före håltagning |
| `bar-dimensionering` | BFS 2024:6 1 kap. 17 § | konstruktor | E | Dimensioneringskontroll av någon som inte gjort beräkningen / granskning / konstruktionshandlingar / intyg / före utförande |
| `bar-mottagning` | BFS 2024:6 1 kap. 19 § | B/E | E | Byggprodukter vid leverans / visuellt, märkning / följesedel / följesedel / vid leverans |
| `bar-utforande` | BFS 2024:6 1 kap. 12 och 18 §§ | B/E | E | Utfört enligt konstruktionshandlingen / visuellt / konstruktionshandling / foto / före inklädnad |

### 3.7 Ventilation (underlaget 4.4), ingen `aktsamhet`

| Nyckel | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|
| `vent-barverk` | BFS 2024:6 1 kap. 13 § | B/E | E | Befintliga bärverk vid håltagning / visuellt / konstruktionshandling / signatur / före håltagning |
| `vent-brandtatning` | BFS 2024:7 5 kap. 29 och 42 §§ | B/E | E | Brandtätning där kanalen går genom en brandavskiljande konstruktion / visuellt / monteringsanvisning / foto / före igensättning |
| `vent-floden` | BFS 2024:8 3 kap. 4 och 5 §§ | B/E | E | Luftflöden / mätning / `{flodeM2}` l/s per m² och `{flodePerson}` l/s per person / mätprotokoll / efter injustering |
| `vent-funktionskontroll` | PBL 8 kap. 25 §; PBF 5 kap. 1–2 §§ | funktionskontrollant | S | Funktionskontroll / besiktning / – / protokoll / före första användning |

### 3.8 VA (underlaget 4.5), ingen `aktsamhet`

| Nyckel | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|
| `va-varmvatten` | BFS 2024:8 8 kap. 6 § | B/E | E | Tappvarmvatten minst `{varmvatten}` °C, skydd mot mikrobiell tillväxt / mätning / – / mätvärde / efter installation |
| `va-aterstromning` | BFS 2024:8 8 kap. 5 § | B/E | E | Skydd mot återströmning / visuellt / monteringsanvisning / foto / efter installation |
| `va-fall` | BFS 2024:8 8 kap. 1 och 10 §§ | B/E | E | Avloppets fall / mätning / ritning / foto med mått / före igenfyllnad |
| `va-tathet` | BFS 2024:8 8 kap. 1 och 2 §§ | B/E | E | Täthet / provtryckning / tillverkarens anvisning / protokoll / före igensättning |
| `va-skallning` | BFS 2024:9 2 kap. 33 § | B/E | E | Högst `{skallning}` °C vid tappstället / mätning / – / mätvärde / efter installation |

### 3.9 Delade rader (`DELADE`)

| Nyckel | Plats | Krav | Vem | E/S | Innebörd |
|---|---|---|---|---|---|
| `vardefullt` | först, när `vardefullt = ja` | PBL 8 kap. 13 och 17 §§ | B | E | Förvanskning och varsamhet / visuellt / lovet, antikvarisk bedömning om nämnden krävt en / signatur, foto / under hela bygget |
| `aktsamhet` | näst sist, när någon åtgärd har den | BFS 2024:4 6–7 §§ | B | E | Aktsamhet på arbetsplatsen: obehöriga, brand, buller, damm / visuellt / – / signatur / under byggtiden |
| `overens` | sist, alltid | PBL 10 kap. 34 § 1 | B | E | Utfört enligt lov eller anmälan och startbesked / visuellt / beslutshandlingarna / signatur / före begäran om slutbesked |

---

## 4. Formuläret `src/components/kalkyl/KontrollplanForm.astro`

Props som de andra: `indata`, `fel`, `kompakt`, `idPrefix`, `knappText`. Inga talfält, alltså ingen `varden`. `<form method="get" action="/rakna/kontrollplan/">`. Klasserna från `stil.ts`. Kryssrutorna och felet på en grupp byggs som i `KallareForm.astro`.

### 4.1 Ordning och layout på 375 px

Fälten står i en spalt, 343 px brett innanför 16 px sidmarginal. Varje alternativ är en rad på minst 48 px med kryssrutan eller radioknappen 24 px till vänster och etiketten bredvid; hjälpraden står under etiketten i `HJALP_KLASS`. Alla grupper är `<fieldset>` med `<legend>` i `ETIKETT_KLASS`.

1. **`a`**, kryssrutor, legend `TEXT.falt.a`. Åtta alternativ i `ATGARD_ORDNING`, var och en med `atgard.<a>.etikett` och `atgard.<a>.hjalp`. Hjälpraden under legenden säger att man kan välja upp till tre (TEXT SAKNAS, i `falt.a` eller som egen rad, hantverkaren väljer).
2. **`hus`**, radio, två alternativ.
3. **Altanen**: `tak` och `plac`, två radiogrupper under en gemensam rubrikrad `falt.altan-hjalp` som säger att de bara läses när altan är vald.
4. **Eldstaden**: `rok`, radio, med `falt.eldstad-hjalp` på samma sätt.
5. **`vardefullt`**, radio.
6. **`inkom`**, radio, tre alternativ.
7. Knappen, `KNAPP_KLASS`, text `knappText` (TEXT SAKNAS, sidans standard).

**Alla grupper står alltid framme**, som i trappräknaren. Att dölja altanens frågor tills altan är vald kräver skript.

### 4.2 Tillstånd

- **Tomt** (ingen query): STANDARD förvalt, planen visas under verktyget.
- **Ifyllt**: värdena ur `indata` förvalda.
- **Fel på `a` eller `hus`**: gruppens `<fieldset>` får `aria-describedby` till feltexten, som står direkt under legenden i `FEL_KLASS`; legenden får ramen i `varning` till vänster (samma som kallare). Kryssrutorna behåller läsarens val. Resten av sidan visar STANDARD med standardvarningen överst i spalten.
- **Utanför** (`fore-juli-2026`): formuläret som vanligt; spalten har beskedet `aldre-regler`; ingen plan renderas.

### 4.3 Kompakt

`kompakt = true` visar **bara `a`**, utan förval, och knappen. Övriga värden kommer från STANDARD när läsaren landar. Utan förval, eftersom värdartikeln kan vara källaren och en förvald altan där vore fel. Trycker läsaren utan att kryssa i något landar hen på verktyget med felet på `a`, vilket är rätt beteende.

### 4.4 Storlek

Kompakta formuläret under 4 kB HTML. Det fulla under 9 kB. Utvecklaren mäter och rapporterar båda.

---

## 5. Sidan `src/pages/rakna/kontrollplan.astro`

Som 4.7: `prerender = false`, `Astro.locals.sidtyp = 'verktyg'`, `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` på alla svar, `bred={true}`, `reklam={false}` (inga produkter), brödsmulor Hantverkstips / Räkna själv / `VERKTYGSNAMN`. `SLUG = 'kontrollplan'`, `VERKTYGSNAMN`, `BESKRIVNING` och `titel` som konstanter överst, alla TEXT SAKNAS. `<StrukturData slot="head" data={verktyg({ url, namn, beskrivning })} />`.

### 5.1 Flöde

```ts
const { indata, harIndata } = tolkaQuery(Astro.url.searchParams);
const resultat = genereraKontrollplan(indata);
const visat = resultat.status === 'ogiltig' ? genereraKontrollplan(STANDARD) : resultat;
const adress = `${Astro.site}rakna/kontrollplan/?${delbarQuery(visat.indata)}`;  // absolut, för utskriften
```

### 5.2 Ordningen på sidan

1. H1, ingress, varumärkesbilden till höger (under på mobil). `print:hidden`.
2. `<Faktaruta variant="kortsvar">`, TEXT SAKNAS: tre till fem meningar om vad en kontrollplan ska innehålla, att man väljer åtgärd och skriver ut, och att nämnden fastställer den. `print:hidden`.
3. Formuläret och resultatspalten på linjerat papper. `print:hidden`.
4. **H2 planen**, `id="planen"`, rubriken `utskrift.titel`: `<KontrollplanPlan resultat={visat} adress={adress} />`. Renderas inte vid `utanfor`. **Det enda som skrivs ut.**
5. H2 "Därför blev svaret så": `regler` som listan i trappräknaren, etikett, text och lagrum per rad. `print:hidden`.
6. H2 "Gör inte det här". `print:hidden`.
7. H2 "Så räknar jag" med `<Illustration namn="rakna/kontrollplan">` när skissen finns, stegen i ord (TEXT SAKNAS, innebörd: 2.7 steg 3 till 10) och H3 "Vad siffrorna vilar på" med antagandetabellen i `<Tabellyta kolumner={3}>`. `print:hidden`.
8. H2 "Läs vidare": `/rakna/bygglov-altan/`, `/altan/bygglov-altan/`, värdartikeln. `print:hidden`.
9. `<Faq>` med tre till fem frågor, TEXT SAKNAS. Kandidater ur SERP-läsningen: vad skriver jag i "mot vad" när BBR är borta, behövs avfallshanteringsplan, när behövs ingen kontrollplan, kan jag skriva planen själv. `print:hidden`.

**Avvikelse från 4.7, med skäl:** planen står mellan verktyget och "Därför blev svaret så". Den är resultatet, den är för lång för spalten, och den ska skrivas ut som ett sammanhängande block.

### 5.3 Resultatspalten

Kort, som alla spalter sedan 2026-09-19. Uppifrån:

1. Beskedet, `besked.<Besked>`, en mening med verb i H3-stil, och `spalt.ansvar` under (beslut 3) med lagrummet.
2. Det stora talet: antalet punkter i `text-siffra` med `<Markering>`, `spalt.enhet` på samma baslinje.
3. En rad i `text-liten`: `ka.<status>` med lagrummet.
4. `spalt.pekrad`: planen står under verktyget.
5. `spalt.utskrift`: hur man skriver ut, alltså webbläsarens meny eller Dela och Skriv ut på telefonen, och att man kan spara som PDF där. **Ingen skriv ut-knapp**: `window.print()` är JavaScript, och webbläsarens egen utskrift gör samma sak.
6. Länkarna "Till planen" (`#planen`) och "Så räknar jag" (`#sa-raknar-jag`), och den delbara adressen i ett skrivskyddat fält med delatexten.

Vid `utanfor`: `besked.aldre-regler` och `spalt.ansvar` ersätts av reglerna `aldre-lydelse` och `aldre-byggregler` i kort form; inget tal, ingen KA-rad.

Spalten under 600 tecken vid standard. Utvecklaren rapporterar talet.

---

## 6. Planen `src/components/kalkyl/KontrollplanPlan.astro`

Props: `resultat` (ok-grenen), `adress`. En enda markup för skärm och papper. Utseendet ligger i `global.css` (avsnitt 7), inte i klasser per cell: det är samma beslut som u-värdets tabeller (spec-kalkyl-u-varde 12.1), och här kan planen ha trettio rader.

### 6.1 Uppifrån

1. **Titel och ansvar**, bara i utskrift: `utskrift.titel` som rubrik och `utskrift.ansvar` (beslut 3).
2. **Administrativa uppgifter.**
   - På skärm: en rad, `utskrift.handskrift`, som säger att namn, fastighet och datum fylls i för hand på utskriften.
   - I utskrift: ett rutnät i två kolumner med etikett och tom linje att skriva på, 9 mm hög, för `fastighet`, `byggherre`, `entreprenor`, `diarienummer` och `upprattad`.
   - På båda: `utskrift.falt.atgard` med `atgard.<a>.plan` och `LOVGRUND` per vald åtgärd (och `atgard.komplementbostadshus` när det gäller), `utskrift.falt.ka` med `ka.<status>` och lagrummet, och vid `huvudregel` eller `beror` även en tom linje för KA:s namn i utskriften. `utskrift.falt.regelverk` med `forfattningar`.
3. **Kontrollpunkterna** som `<table class="kp">`. Sju kolumner:

   | Kolumn | Innehåll |
   |---|---|
   | Nr | `nr` |
   | Kontroll | `punkt.*.vad`, och `punkt.*.nar` på egen rad under i `text-liten` |
   | Krav | `krav` |
   | Hur | `punkt.*.hur`, och `punkt.*.mot` på egen rad under |
   | Vem | `vem.<Kontrollant>`, och `form.<Kontrollform>` under |
   | Verifikat | `punkt.*.verifikat` |
   | Signatur och datum | tom |

   `<thead>` med `kolumn.*`. Under tabellen `kolumn.teckenforklaring` (vad B, E och S betyder).
4. **Anmälningar**, `utskrift.anmalningar`: listan `anmalan.*`. I utskrift två tomma rader till.
5. **Arbetsplatsbesök**, `utskrift.besok`: `besok.<Besok>`, och i utskrift en tom rad.
6. **Byggherrens intygande**: `utskrift.intygande`, och i utskrift tre tomma linjer för `utskrift.datum`, `utskrift.underskrift` och `utskrift.namnfortydligande`.
7. **Avfallshanteringsplanen**, en egen del (egen H3 på skärm, ny sida i utskrift):
   - `avfall.rubrik` med lagrummet PBL 10 kap. 8 a §.
   - Rutan: en tom fyrkant, 5 mm, med ram i `blyerts`, och `avfall.ruta` bredvid (byggherren bedömer att planen uppenbart inte behövs) med lagrummet PBL 10 kap. 8 a § andra st. **Aldrig ikryssad av sidan** (ändring 6 i avsnitt 0). Det är ett `<span>`, inte ett formulärfält.
   - `avfall.tips.<AvfallTips>` under: vid rivning att planen nästan alltid behövs, annars att byggherren gör bedömningen (TEXT SAKNAS, inget påstående utan källa).
   - På skärm: de tre delarna `avfall.del1` till `del3` som en kort lista.
   - I utskrift: tre tabeller med två kolumner (`avfall.kolumn.sak`, `avfall.kolumn.hur`) och `tommaAvfallsrader` tomma rader var, 9 mm höga. Delarna följer 8 a §: byggprodukter som kan återanvändas, avfall och hur det tas om hand, farliga ämnen.
8. **Sidfot**, bara i utskrift: `utskrift.skapad` och `adress` i klartext, så att papperet kan göras om. Adressen innehåller inga personuppgifter (2.8).

### 6.2 Tabellen på skärm, 375 px

Under `lg` visas varje `<tr>` som ett eget block, utan sidledsscroll:

```
┌ 343 px ─────────────────────────────┐
│ 3  Bärlinor, reglar och skärmtakets │  nr och Kontroll på en rad, text-kortrubrik
│    bärverk                          │
│    Före trall och takbeklädnad      │  när, text-liten blyerts-2
│ KRAV                                │  etikett, text-liten fet
│ BFS 2024:6 1 kap. 2 § andra st., 12 │
│ och 18 §§                           │
│ HUR                                 │
│ Visuellt, mätning av dimensioner    │
│ K-ritning, tillverkarens anvisning  │
│ VEM                                 │
│ Byggherren eller entreprenören      │
│ Egenkontroll                        │
│ VERIFIKAT                           │
│ Signatur                            │
└─────────────────────────────────────┘  1 px linje mellan blocken, 16 px luft
```

(Texten i skissen är innebörd, inte formulering.)

- `table, tbody, tr, td { display: block }`, `thead` visuellt dold (`sr-only`-mönstret, inte `display: none`).
- Etiketterna före varje cell skrivs med `td:nth-child(n)::before { content: var(--kp-e-n) }`. Variablerna sätts **en gång** i `style` på `<table>` ur `TEXT.kolumn.*`, med citattecken och bakstreck escapade. Inga etikettspann per cell: trettio rader gånger sex etiketter är för många byte.
- Signaturcellen döljs på skärm under `lg`; den finns i utskriften.
- Långa lagrum bryts vid mellanslag. Inget `white-space: nowrap` i tabellen.

Från `lg` och uppåt är det en vanlig tabell med `table-layout: fixed` och samma kolumnbredder som i utskriften.

---

## 7. Utskrift

### 7.1 `Bas.astro`

`print:hidden` (Tailwind 4:s inbyggda variant) på: länken `.hoppa`, `<header>`, brödsmulornas omslag och `<footer>`. Inget annat i layouten ändras. **Reklambandet döljs inte** (rättat 2026-09-28): på en sida med affiliatelänkar följer märkningen med även på papper, och kontrollplanen har inget band. Det gör alla sidor utskrivbara utan meny och sidfot, vilket är rätt även för artiklarna.

### 7.2 `global.css`, blocket "Kontrollplanen"

Sist i filen, med tokenvärdena, inga nya färger. Ingen annan komponent använder klasserna `kp*`.

- Stapelvyn under `lg` enligt 6.2.
- `@media print`:
  - `@page { size: A4 landscape; margin: 12mm; }`.
  - `body` bakgrund `vit`, text `blyerts`, 9,5 pt Atkinson. Rubriker Zilla Slab: titeln 16 pt, H3 12 pt.
  - `.kp` som tabell med `thead { display: table-header-group }` så att rubrikraden upprepas på varje sida, ram 0,5 pt `blyerts` på alla celler.
  - Kolumnbredder: Nr 8 mm, Kontroll 55 mm, Krav 38 mm, Hur 50 mm, Vem 30 mm, Verifikat 35 mm, Signatur och datum resten (cirka 57 mm).
  - `tr { break-inside: avoid; }`, rubriker `break-after: avoid`, radhöjd minst 12 mm så att signaturen får plats.
  - Avfallshanteringsplanen `break-before: page`.
  - Länkar skrivs i `blyerts` utan understrykning; `<Markering>` och det linjerade papperet syns inte (bakgrunder skrivs inte ut).
  - Allt som bara är för utskrift har klassen `kp-utskrift` (`display: none` på skärm), allt som bara är för skärm `kp-skarm`.

### 7.3 På sidan

Sektionerna i 5.2 som är märkta `print:hidden` får klassen på sitt yttersta element. Utskriften innehåller alltså bara `#planen`. Jag kontrollerar med utskriftsförhandsvisningen i Chrome och en PDF ur den, vid standard och vid fall T6 och T14.

### 7.4 Arkitekturen

Stycket "Utskrift" står sedan 2026-09-28 under Konventioner i `docs/ARKITEKTUR.md`: `print:hidden` i `Bas.astro`, att sidor som ska skrivas ut lägger sina regler i `global.css` och inte inline, och att ingen sida får en skriv ut-knapp med skript.

---

## 8. Registret

```ts
{
  slug: 'kontrollplan',
  namn: 'TEXT SAKNAS: register.namn',   // bär ordet kontrollplan, är ankartext i artiklarna
  rad: 'TEXT SAKNAS: register.rad',     // en mening med verb, högst tolv ord
  sasong: [2, 6],                       // samma som bygglov-altan: ansökningarna görs före byggsäsongen
  pelare: ['altan', 'grund'],           // rättat 2026-09-28 (16.1 D12), inte inomhus
}
```

---

## 9. Testet `scripts/test-kalkyl-kontrollplan.mjs`

`node --experimental-strip-types --test scripts/test-kalkyl-kontrollplan.mjs`. Lagrumssträngarna i facit är de i avsnitt 3, rättade efter varv 2, tecken för tecken.

### 9.1 Fallen

| # | Indata | Facit |
|---|---|---|
| T1 | STANDARD | 8 punkter: `altan-lage`, `altan-grund`, `altan-barformaga`, `altan-mottagning`, `altan-racke`, `altan-trappa`, `aktsamhet`, `overens`. KA `nej`, besked `plan`. Lagrum lika med 7.1 rad 1–6, 10, 11. Anmälningar `['slutbesked']`, besök `inga-foreslas`, avfall `bedom`, 3 tomma rader |
| T2 | underlaget 7.1: altan, `tak=skarmtak` | **11 punkter** i 7.1:s ordning, lagrum rad för rad lika med 7.1 (efter varv 2). KA `nej-skarmtak`, besked `plan-ka-skarmtak` |
| T3 | T2 med `plac=fristaende` | 11 punkter; `altan-racke` har krav `PBF 3 kap. 10 §` och innehåller inte `BFS 2024:9 2 kap. 10`; `forfattningar` innehåller PBF |
| T4 | underlaget 7.2: eldstad, `rok=ny` | **11 punkter** i 7.2:s ordning. Rad 7 (`eld-mynning`) har krav `BFS 2024:7 4 kap. 16 §` och innehåller inte `BFS 2024:8`. Ingen `aktsamhet`. KA `nej`. Anmälningar `['slutbesked', 'sotarprotokoll']`. `gorInteDetHar` innehåller `ta-i-bruk`. `eld-tathet` har `vem: 'sotare'` och `form: 'egenkontroll'` |
| T5 | eldstad, `rok=befintlig` | 8 punkter, utan `eld-genomforing`, `eld-mynning`, `eld-takskydd` |
| T6 | `hus=komplementbostadshus`, a = eldstad, ventilation, va | 20 punkter: eldstadens 10, ventilationens 4, VA:s 5, `overens`. Ingen `aktsamhet`. KA `nej`. Anmälningar `slutbesked`, `sotarprotokoll`, `funktionskontroll`. `vent-funktionskontroll` har `form: 'sakkunnig'` |
| T7 | `hus=komplementbostadshus`, a = altan | `ogiltig`, fel `hus` |
| T8 | `a` saknas men `tak=nej` finns | `ogiltig`, fel `a` (tom) |
| T9 | fyra åtgärder | `ogiltig`, fel `a` (för många) |
| T10 | T7 och T9 samtidigt | båda nycklarna |
| T11 | altan, `inkom=fore-juli-2026` | `utanfor`, `aldre-regler`, regler `aldre-lydelse`, `aldre-byggregler` |
| T12 | tillbyggnad, `inkom=juli-sept-2026` och `fran-okt-2026` | 12 punkter; `till-energi` har kravet `BFS 2011:6 avsnitt 1:22347 och 9:92` respektive `BFS 2026:9 3 kap. 1 § och bilaga 2 tabell 6`; `till-brandvarnare` börjar med `BFS 2024:7 7 kap. 47 §`; KA `huvudregel`, besked `plan-ka`, besök `namnden`; regler innehåller `energi` |
| T13 | rivning | 5 punkter (`riv-inventering`, `riv-skadedjur`, `riv-avfallsplan`, `aktsamhet`, `overens`); KA `beror`; avfall `rivning`, 6 tomma rader |
| T14 | altan (skärmtak), tillbyggnad, eldstad | 31 punkter; `aktsamhet` och `overens` en gång var, sist; KA `huvudregel` |
| T15 | T1 med `vardefullt=ja` | 9 punkter, `vardefullt` först |
| T16 | barande | 6 punkter; KA `nej` |
| T17 | komplement | 8 punkter; ingen dimensioneringskontroll; `komp-brandspridning` har krav `BFS 2024:7 6 kap. 5 och 10 §§ i lydelse BFS 2025:10`; KA `nej` |
| T18 | ventilation | 5 punkter; regler innehåller `funktionskontroll` |
| T19 | va | 6 punkter |

### 9.2 Övrigt

- `forfattningar` för T2: PBL, BFS 2024:4, 2024:6, 2024:7, 2024:8, 2024:9 i den ordningen.
- Varje punkt i varje fall har icke-tomt `krav` som börjar med `PBL `, `PBF `, `BFS ` eller `Bygglovet`.
- Inget `krav` i något fall innehåller `EKS`. `BBR` eller `BFS 2011:6` förekommer bara i `till-energi` vid `juli-sept-2026`.
- `KATALOG` mot avsnitt 3: varje nyckel finns, i rätt ordning, med villkor, kontrollant och form.
- Konstanterna i 2.2 mot underlaget.
- `tolkaQuery`: tom adress ger STANDARD och `harIndata: false`; `a=va&a=altan&a=va` ger `['altan', 'va']`; `a=garage` faller bort; okänd `inkom` ger standard; `namn=Anna&fastighet=X` ger `harIndata: false` och påverkar inget.
- `delbarQuery`: standardsträngen i 2.8 ordagrant; rundtur `tolkaQuery(delbarQuery(x))` ger `x` för T1, T2, T6, T14; utdata innehåller aldrig någon annan nyckel än de sju.
- `TEXT`: varje nyckel i 2.10 finns och är icke-tom, varje `PunktNyckel` har alla fem fält, och ingen sträng innehåller "godkän", "godta", "garanter" eller "alla kommuner". Samma sökning görs i `src/pages/rakna/kontrollplan.astro` och `KontrollplanPlan.astro` lästa från disk.
- `ANTAGANDEN` har en rad per ANTAGANDE i avsnitt 11, och varje rad med typ Källa har en `https`-adress.
- Modulen läser inte datum: källtexten innehåller inte `Date(` eller `Date.now` (läs filen och sök).

---

## 10. Inbäddningen

`'kontrollplan'` läggs i `MED_FORMULAR`, och renderingsraden är `{namn === 'kontrollplan' && <KontrollplanForm kompakt={true} idPrefix={prefix} knappText="TEXT SAKNAS: knapp-kompakt" />}`.

- **Alternativ A**, `src/content/kunskap/altan/bygglov-altan.mdx`: `<Kalkylator namn="kontrollplan" />` sist i avsnittet "Sätter du tak på altanen blir den en tillbyggnad", eller i ett nytt kort stycke om altanen som kräver lov, som hantverkaren skriver. Utvecklaren lägger bara in raden där hantverkaren anvisar. Sidan ska hålla sig under 66 kB mätt på bygget.
- **Alternativ B**, `src/content/guider/grund/inreda-kallare.mdx`: raden efter stycket som slutar "... innan de gett slutbesked." i avsnittet "Källare till bostad, lov, anmälan och vägen ut i en brand". Villkor: samma leverans sänker sidan med minst lika många byte som formuläret väger, uppmätt före och efter. Den sänkningen specar jag separat om B väljs.

En artikel får bara en rad; `<Verktygskort kalkylator="kontrollplan" />` kan stå i syskonsidor enligt SEO och GEO-agentens val.

---

## 11. Antagandetabellen (`ANTAGANDEN`)

Tre kolumner som i de andra verktygen: vad, värde eller beslut, Källa eller Antagande med länk. Texterna TEXT SAKNAS; innebörden här.

| Nr | Innebörd |
|---|---|
| A1 | Generatorn gäller en- eller tvåbostadshus och komplementbyggnader till dem |
| A2 | Utan kontrollansvarig föreslår planen inga arbetsplatsbesök; nämnden avgör (PBL 10 kap. 6 § 4) |
| A3 | Ansluts eldstaden till en befintlig skorsten tas genomföring, mynning och takskydd bort, eftersom de delarna inte byggs |
| A4 | Ventilationen får ingen rad för takskydd; lägg till en om huven sitter på taket |
| A5 | Högst tre åtgärder per plan, för att en plan ska gå att läsa och skriva ut och för att större projekt har en kontrollansvarig som skriver planen |
| A6 | Ordningen på raderna följer byggordningen: stommen först, installationerna sist, aktsamhet och överensstämmelse sist |
| A7 | Komplementbyggnaden räknas som ouppvärmd och i säkerhetsklass 1: ingen energirad, inga luftflöden, ingen brandvarnare, ingen dimensioneringskontroll. Källa: BFS 2024:6 2 kap. 7 § 1 och 1 kap. 17 § |
| A8 | Räcket på en altan vid huset kontrolleras mot BFS 2024:9, på en fristående altan mot PBF 3 kap. 10 §, eftersom föreskriften bara nämner ytor i anslutning till byggnader (beslut 2, R7) |
| A9 | Generatorn bedömer inte om avfallshanteringsplanen behövs; rutan och den tomma planen står alltid med |
| A10 | Raden om förvanskning och varsamhet står bara med när läsaren säger att huset är särskilt värdefullt |
| A11 | Från 1 oktober 2026 hänvisar energiraden till BFS 2026:9; möjligheten att tillämpa samtliga äldre bestämmelser till 30 september 2027 tas inte upp |
| A12 | Täthetsprovningen står som egenkontroll med skorstensfejarmästaren som kontrollant. Ingen författning kräver den före första eldning; Boverket kallar den lämplig i kontrollplanen (varv 2 F3, KB4) |
| A13 | Energiraden förutsätter ett hus som används året runt och har minst 50 m² temperaturreglerad area; annars gäller inte BFS 2026:9 (1 kap. 3 §) |
| A14 | Komplementbostadshus som kräver bygglov ingår inte; valet komplementbyggnad gäller byggnader som inte är bostad |
| A15 | Ändringarna i PBL och PBF 1 januari 2027, Lag (2026:746) och Förordning (2026:1265), ändrar inget lagrum i planen. Läst 2026-09-28 |

Plus en rad per författning (Källa, adress, lästdatum från varv 2) och en rad för kommunexemplen som jämförts (V2, V3, S2, typ Källa, "jämförda, inte kopierade").

---

## 12. Bilderna

### 12.1 Skissen, uppdrag B

`src/assets/illustrationer-kallor/rakna/kontrollplan.svg`, 600 × 360, blyerts på linjerat papper, handskrift Caveat 500 i 24 px, under 40 kB efter konvertering, ingen `<text>` kvar i den publicerade filen.

- **Motivet:** standardfallet från sidan, en altan i genomskärning från sidan. Husväggen till vänster, altanen på plintar med golvet 1,5 m över marken, räcke, trappa ner till höger. Marken skrafferad. Ingen människa, inget verktyg.
- **Numrerade ringar** i `blyerts-2`, 22 px, vid fem ställen: plinten (2), bärlinan (3), räcket (5), trappan (6), och en ring vid husväggen för läget (1). Siffrorna motsvarar planens rader vid standard.
- **Det enda som pekar:** en pil i `penna` mot plinten under marken, med etiketten om att den kontrolleras innan den grävs igen. Det är skissens poäng: en kontroll görs medan det som kontrolleras syns.
- **Mått:** bygel för höjden, 1,5 m.
- **Nyckeltalet** med gul markering nere till höger: antalet kontrollpunkter vid standard, 8.
- **Etiketterna ordagrant:** TEXT SAKNAS, hantverkaren skriver dem. Fyra: pilens etikett, måttet, nyckeltalet med sitt ord, och en rubrikrad om det behövs.
- Alt under 125 tecken och bildtext: TEXT SAKNAS.

Jag rendrar på 343 px innan den godkänns.

### 12.2 Varumärkesbilden, uppdrag C (kan ges nu)

`src/assets/illustrationer/rakna/varumarke/kontrollplan.svg`, 600 × 360, logotypens stil: konturer i `blyerts` (#hex ur token), 2 px, runda ändar, `tumstock` som enda fyllda färg, transparent bakgrund, ingen text, inga läsbara tal.

- **Motivet:** en skrivplatta på tvären (liggande papper, som utskriften) med tre rader. Varje rad har en ruta till vänster med en bock och ett streck till höger. Nederst ett pennstreck som signatur. En tumstock, delvis utfälld, ligger under plattans nederkant och sticker ut till höger. Klämman överst på plattan är tumstocksgul.
- En sjuåring ska se "lista som bockas av" på en sekund.
- Bbox-kvot 1,72 ± 0,05, fyller 90 till 94 procent av bredden. Tumstocken ger bredden.
- Under 30 kB. Tom alt.

Förebild är startsidans hero och de andra varumärkesbilderna i samma mapp; linjebredd och rundning ska se ut som dem bredvid varandra.

### 12.3 Delningsbilden

`public/og/rakna-kontrollplan.png` genereras av `npm run delningsbilder`. Rita inget.

---

## 13. Varv 2: beställning till underlagsarbetaren

**Levererad och godkänd 2026-09-28**, se 0.2. Beställningen står kvar som den gavs.

Koordinatorn beställer. Leverans: `docs/briefer/underlag-kalkyl-kontrollplan-varv-2-[datum].md`. Endast författningstext i gällande lydelse, riksdagen.se, svenskforfattningssamling.se, rinfo.boverket.se, forfattningssamling.boverket.se och boverket.se. Skriv inga slutsatser utan ordagrant utdrag.

### 13.1 Avstämning av lagrum

För varje lagrum i listan: en rad med (1) lagrummet som det står i specen, (2) konsoliderad lydelse med beteckning, "i lydelse BFS 20xx:y" eller "Lag (20xx:yyy)", (3) ett ordagrant utdrag på högst två meningar, (4) **Stämmer**, **Nytt nummer: …** eller **Ändrad lydelse: …**, eller **Hittas inte**, (5) adress och lästdatum.

Först, för var och en av BFS 2024:4, 2024:6, 2024:7, 2024:8, 2024:9 och 2026:9: listan över alla ändringsförfattningar hittills, med datum för ikraftträdande. Särskilt: vad BFS 2025:9 ändrar, och om den flyttar eller numrerar om något i 2 kap. BFS 2024:9.

- **BFS 2024:4**: 6 §, 7 §, 9 § 1 och 2.
- **BFS 2024:6**: 1 kap. 2 § andra st., 7, 12, 13, 15, 17, 18, 19 §§; 2 kap. 6 §.
- **BFS 2024:7**: 1 kap. 7 och 18 §§; 2 kap. 34 och 35 §§; 4 kap. 8, 9, 10, 13, 14, 16, 17, 19, 21 §§ (talen i 10 och 16 §§ ordagrant); 5 kap. 42 § och 50 § andra st. 2; 6 kap. 5 och 10 §§.
- **BFS 2024:8**: 3 kap. 4 och 5 §§ (talen ordagrant); 7 kap. 1 och 4 §§; 8 kap. 1, 2, 5, 6, 10 §§ (talet i 6 § ordagrant); 9 kap. 4 §.
- **BFS 2024:9**: 2 kap. 5, 10, 11, 12, 13, 15–21, 33 (talet ordagrant) och 38 §§.
- **BFS 2024:14**: övergångsbestämmelse 3.
- **PBL** (riksdagen.se, ange "ändrad t.o.m. SFS …"): 8 kap. 13, 17 och 25 §§; 9 kap. 19 och 43 §§; 10 kap. 3, 4, 5 a, 6 (båda styckena), 6 a, 7, 8, 8 a (vilket stycke undantaget "uppenbart" står i, och om punkt 2 har underpunkter a och b), 9, 10, 23, 24, 34 §§; övergångsbestämmelse 2 till Lag (2026:712).
- **PBF**: 5 kap. 1 och 2 §§; 6 kap. 1 § punkterna 1, 2, 4 och 5; 7 kap. 5 § första stycket punkterna 2, 3, 6, 9 och andra stycket. Ange om förordning (2026:709) ändrat något av dem.

### 13.2 Ändringarna 1 januari 2027

Läs Lag (2026:746) om ändring i PBL och Förordning (2026:1265) om ändring i PBF i sin helhet. Lista varje ändrad paragraf med ny lydelse ordagrant, ikraftträdande och övergångsbestämmelser. Svara särskilt: ändras något av lagrummen i 13.1, och vad ersätter PBF 7 kap. 1 § och 3 kap. 21 §?

### 13.3 Frågor

| Nr | Fråga | Var |
|---|---|---|
| F1 | Gäller BFS 2024:9 2 kap. 10–11 §§ en fristående altan som inte är ansluten till en byggnad? Om inte, finns ett krav på skydd mot fall för den i BFS 2024:13 eller annan föreskrift? Ordagrant 1 kap. 2 § BFS 2024:9 | BFS 2024:9, BFS 2024:13, Boverkets kunskapsbank om säkerhet vid användning |
| F2 | Är ett skärmtak över en altan som ansluter till huset en tillbyggnad? Vilken paragraf är då lovgrunden, och omfattar PBF 7 kap. 5 § första st. 6 ("altan") en altan med skärmtak? | Boverkets kunskapsbank om altaner och tillbyggnader, PBL 1 kap. 4 § (definitionen av tillbyggnad) |
| F3 | Vilken författning kräver skorstensfejarmästarens besiktning av en ny eldstad eller rökkanal före första användning? Är det en sakkunnigkontroll i mening PBL 10 kap. 8 §? | Lagen (2003:778) om skydd mot olyckor och förordningen (2003:789), Boverkets kunskapsbank |
| F4 | Vilken paragraf i PBL 9 kap. efter Lag (2025:974) kräver bygglov för tillbyggnad och för nybyggnad av komplementbyggnad? | PBL 9 kap. |
| F5 | Tabellerna 3.3 och 3.4: bekräfta eller rätta varje rads krav, och säg vilka rader som inte har ett lagrum som bär dem | författningarna i 13.1 |
| F6 | För en tillbyggnad av ett uppvärmt småhus: vilken paragraf gäller värmeisoleringen i BFS 2026:9 (ansökan från 1 oktober 2026) och i BFS 2011:6 avsnitt 9 (ansökan 1 juli till 30 september 2026)? Räknas tillbyggnaden som ändring eller som ny byggnad? Ordagrant 1 kap. 3 § BFS 2026:9 | BFS 2026:9, BFS 2011:6 i lydelse BFS 2024:14 |
| F7 | Ordagrant PBL 10 kap. 3 och 4 §§ om påbörjande före startbesked och ibruktagande före slutbesked | PBL |
| F8 | Ordagrant första stycket i PBL 10 kap. 6 § om byggbedömare | PBL |
| F9 | Vilken paragraf i BFS 2024:6 ställer kravet på bärförmåga, stadga och beständighet? I vilken säkerhetsklass hamnar en ouppvärmd komplementbyggnad (2 kap. 6 §), och krävs då dimensioneringskontroll enligt 1 kap. 17 §? | BFS 2024:6 |
| F10 | Utlöser en lovfri tillbyggnad enligt PBL 9 kap. 10 § anmälan enligt PBF 6 kap. 1 § 2 när den berör bärande delar väsentligt? Bara för Faq; inget i verktyget beror på svaret | PBF, Boverkets kunskapsbank |

Allt som inte går att läsa står som "Kunde inte läsas" med adress och felet, som i första varvet.

---

## 14. Budget och kontroller

- Testet grönt. `npx astro check --minimumSeverity error` 0 fel. `npm run kontrollera` 0 fel, varningarna rapporteras.
- `npm run preview` med `curl` (koordinatorn bygger): 0 `<script>` utöver JSON-LD, ingen `.js`-referens.
- **HTML-storlek** vid standard och vid T14 (den största tillåtna planen), mätt som i u-värdets 12.6: dev-HTML utan Vites skript och `data-astro-source-*`. Gränsen är 66 kB **med skalet räknat till de 6 kB budgeten avser**, alltså uppmätt storlek minus (skalets verkliga vikt minus 6 kB), tills skalspecen är genomförd. Utvecklaren rapporterar uppmätt storlek och skalets vikt på samma sida. Planen i T14 får inte väga mer än 14 kB.
- Inga klassattribut per cell i planen; `grep -c 'class=' ` på tabellens `<td>` ska vara 0.
- 375 px: ingen sidledsscroll (mätt med `scrollWidth` i en riktig 375-vy), alla alternativ 48 px, fokusring synlig, varje fält med etikett, felet kopplat med `aria-describedby`.
- Utskrift: förhandsvisning och PDF i Chrome vid standard, T6 och T14. Bara planen syns, rubrikraden upprepas på varje sida, ingen rad delas mellan sidor, avfallsdelen börjar på ny sida, adressen står sist.
- Varumärkesbilden under 30 kB, skissen under 40 kB utan `<text>`.

---

## 15. Godkännandekriterier (min granskning)

1. Allt i 14 grönt och uppmätt.
2. Raderna i T1 till T19 mot avsnitt 3 efter varv 2, lagrum för lagrum.
3. Delad adress ger samma plan i fyra prövade fall. Ingen annan nyckel än de sju kommer igenom.
4. Formuläret, felen och tomt tillstånd på 375 px.
5. Utskriften på papper eller PDF i A4 liggande, läst som en byggnadsinspektör läser den.
6. Ansvarsraden står på skärmen och överst på utskriften, och testet för orden i beslut 3 är grönt.
7. Bilderna mot DESIGN.md avsnitt 7 och bilaga A, rendrade på 343 px.

Sedan läsaren, hantverkaren, SEO och GEO-agenten, och koordinatorn med ett live-test av `?a=eldstad&rok=ny` som ska ge elva punkter.

---

## Etiketter till skissen

Hantverkaren, 2026-09-28, för uppdrag B (avsnitt 12.1). Orden står ordagrant, i Caveat 500, 24 px. Siffrorna i ringarna är bara siffror, ingen text bredvid dem.

| Plats | Text | Anmärkning |
|---|---|---|
| Ring vid husväggen | `1` | läget |
| Ring vid plinten | `2` | |
| Ring vid bärlinan | `3` | |
| Ring vid räcket | `5` | |
| Ring vid trappan | `6` | |
| Pilens etikett, i `penna`, vid pilen mot plinten under mark | `kolla plinten` / `innan gropen fylls igen` | två rader, den andra under den första |
| Måttbygeln för golvets höjd | `1,5 m` | |
| Nyckeltalet nere till höger | `8` med gul markering, och `kontroller` efter på samma baslinje | ordet utan markering |
| Rubrikrad, överst till vänster, bara om platsen finns | `altan utan tak, vid huset` | kan strykas om skissen blir trång; ordet står också i bildtexten |

Alt och bildtext står i `src/pages/rakna/kontrollplan.astro` (`SKISS_ALT`, 115 tecken, och `SKISS_BILDTEXT`). Bildtexten nämner ringarna 1, 2, 3, 5 och 6 och måttet 1,5 m, så ritas något annat ska bildtexten ändras med det.

---

## 16. Varv 3: returerna från läsaren, korrekturen och SEO (2026-09-28)

Underlag:
- `docs/briefer/retur-kontrollplan-2026-09-28.md`: läsaren, betyg 3, här "L" med punktnummer.
- `docs/briefer/korrektur-kontrollplan-2026-09-28.md`: 18 fel, här "K" med rad.
- `docs/briefer/retur-kontrollplan-seo-2026-09-28.md`: A1–A5 stoppar, B1–B3 inom en vecka.

Avsnittet ersätter det i avsnitt 1 till 10 som det säger emot. Arbetet delas i **ett byggvarv** för utvecklaren (16.2) och **ett textvarv** för hantverkaren (16.3). Byggvarvet går först och skriver platshållaren `TEXT SAKNAS: <nyckel>` för varje ny nyckel. Textvarvet fyller dem och skriver om de befintliga. Ingen av dem rör den andras del.

### 16.1 Beslut

| # | Fråga | Beslut |
|---|---|---|
| D1 | **Beteckningen "BFS 2011:6 avsnitt 1:22347"** (L1.8) | **Beteckningen är rätt.** Kontrollerad i omtrycket BFS 2024:14 (https://rinfo.boverket.se/BFS2011-6/pdf/BFS2024-14.pdf, läst 2026-09-28): avsnittet finns med rubriken "Särskilt om ändringens omfattning vid tillbyggnad" och innehåller meningen om separat enhet. Talet ser trasigt ut för den som inte känner BBR:s numrering. Därför får kravet förkortningen: `BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92`. Regelverksraden skriver också `BFS 2011:6 (BBR)` |
| D2 | **Planen är en handling till nämnden** (L1.2, L2) | Allt inuti `KontrollplanPlan.astro` är handlingstext, på skärm och papper: tredje person ("byggherren"), inget "du", inga råd. Råd till läsaren står i spalten eller i rader med klassen `kp-skarm`. Där samma sak också sägs i spalten får planens text egna nycklar under `utskrift.*` |
| D3 | **"Förslag" sju gånger** (L-mönster 3) | Ansvarsraden står på de tre ställen som beslut 3 anger: spalten, överst på papperet och regeln `faststalls`. Den stryks ur kortsvaret och ur "Gör inte det här". Faq får nämna fastställandet en gång |
| D4 | **SEO A1**: två statiska H2 | Två nya sektioner efter "Gör inte det här": vad som ändrades 1 juli 2026, och när ingen kontrollplan behövs. De renderas i **alla** tillstånd: ok, utanför och ogiltigt.<br><br>Reglerna `avsta`, `byggbedomare`, `avfall` och `nya-byggregler` tas bort ur `regler` och ur `TEXT`. Hantverkaren skriver in deras innehåll i de nya sektionerna. Byggbedömaren och avfallsplanens undantag står i den ena sektionen och får en hänvisning i den andra (SEO:s villkor) |
| D5 | **Rubrikerna** (L-mönster 1) | "Så räknar jag" och "Vad siffrorna vilar på" byts mot rubriker som passar en generator. Hantverkaren formulerar; läsaren föreslår "Så ställer jag upp planen" och "Det planen bygger på". Källarens "Så bedömer jag" får inte kopieras ordagrant, eftersom det bara flyttar mönstret till en ny rubrik. Ankaret blir `#sa-stalls-planen-upp`, och spaltens länk läser rubriken ur samma konstant |
| D6 | **Antagandetabellen** (L, "Vad siffrorna vilar på") | Tabellen visar bara antagandena A1–A16. Raderna per författning ("Grundförfattningen, som inte har ändrats") flyttas ut ur tabellen och står bara i källistan under den, med lästdatum |
| D7 | **Dubbletten Luftflöden** (L1.11) | När ventilation är vald tas `till-luftfloden` bort, eftersom `vent-floden` täcker tillbyggnadens flöden. Nytt ANTAGANDE A16 |
| D8 | **Befintlig skorsten** (L1.10) | `eld-egenskaper` får andra texter när `rok = befintlig`: bara eldstadens egenskaper, kontrollerade när eldstaden levereras |
| D9 | **Skorstensfejarmästaren och egenkontroll** (L1.9) | Formen står kvar som egenkontroll (R9). Teckenförklaringen på papperet säger att det är byggherrens egenkontroll även när byggherren anlitar någon för den |
| D10 | **Delningsfältet** (L4) | Visas bara när det finns en plan (`status === 'ok'`), och då med adressen till just den planen. Det visas aldrig vid ogiltigt värde och aldrig vid äldre regler |
| D11 | **Sidnummer och fastighet på varje blad** (L1.12) | Sidnumret står i sidfotens marginal, satt med CSS. Fastighetsbeteckningen blir en rad i tabellhuvudet, som upprepas på varje blad, och står också överst i avfallsdelen |
| D12 | **Pelarna** (SEO A3) | `['altan', 'grund']` |
| D13 | **Värdartikeln** (SEO:s beslut, A5) | **`/grund/inreda-kallare/`**, efter stycket som slutar "... kan ha rätt ord men fel innehåll."<br><br>Koordinatorn har beslutat att budgeten inte stoppar inbäddningen. Sidan ligger redan över 66 kB för att sidhuvud och sidfot är för tunga, och det löses för hela sajten. Villkoret i avsnitt 10 om att sänka sidan i samma leverans gäller därför inte.<br><br>**Inbäddningen mäts ändå** (16.2 K20). Min uppskattning ur formulärets markup är omkring 3,5 kB: åtta kryssrutor med etikett och hjälprad (omkring 2,8 kB) plus Kalkylators ram |
| D14 | **Titeln** (K, sidan rad 64) | "Kontrollplan mall" i `<title>` har SEO-agenten beslutat (retur, punkt 3: inget att ändra), så den ligger utanför det här varvet. Korrekturens anmärkning går till SEO |
| D15 | **Delatexten** (L-mönster 6 och 7) | Gränssnittstexten är gemensam för alla verktyg enligt skillen, så den ändras inte på en enskild sida. Etiketten över fältet heter "Dela planen" här och "Länk till ditt svar" på grannemedgivande; hantverkaren samordnar den över verktygen i ett eget varv |
| D16 | **Våtrum** (SEO:s beslut 2) | Förs in i listan för version 2 (16.5) |

### 16.2 Byggvarvet (utvecklaren)

Filer:
- `src/lib/kalkyl/kontrollplan.ts`
- `scripts/test-kalkyl-kontrollplan.mjs`
- `src/components/kalkyl/KontrollplanPlan.astro`
- `src/pages/rakna/kontrollplan.astro`
- `src/styles/global.css`, bara blocket "Kontrollplanen"
- `src/lib/kalkyl/register.ts`, en rad
- `src/pages/rakna/bygglov-altan.astro` (K22)
- `src/content/guider/grund/inreda-kallare.mdx`, bara raden `<Kalkylator namn="kontrollplan" />`

Inget annat rörs. Arbetaren kör inte `npm run build`.

**Spalten och tillstånden**

- **K1. Delningsfältet** (D10). `src/pages/rakna/kontrollplan.astro` rad 298–302: blocket renderas bara när `resultat.status === 'ok'`, och `adress` byggs av `resultat.indata`, inte av `visat`. Vid `ogiltig` och `utanfor` finns inget fält. Standardvärdenas plan räknas inte längre vid ogiltigt värde, om inget annat på sidan behöver den.
- **K2. Varningen vid ogiltigt värde** (L4). `spalt.beskedsvarning` har i dag text (modulen rad 811). Testet ska fälla varje `TEXT`-värde som börjar med `TEXT SAKNAS`, så att en platshållare aldrig kan nå en besökare igen. Varningen skiljer sig från standardvarningen i skillen, eftersom sidan inte visar standardvärdenas plan vid fel. Det är en godkänd avvikelse.

**Parentesen med lagrum** (K, sidan rad 259, 268, 276, 337; planen rad 101)

- **K3.** Ny exporterad funktion i modulen: `medLagrum(text: string, lagrum: string): string`. Slutar `text` på `.`, `!` eller `?` sätts ` (lagrum)` in före tecknet; annars läggs ` (lagrum)` till sist.
  - Alla ställen som i dag skriver `{text} ({lagrum})` använder den: spaltens ansvar, KA-raden i spalten och i planen, äldre regler i spalten, "Gör inte det här", åtgärdsraden, avfallsrubriken och rutan i avfallsdelen.
  - Testfall: `medLagrum('Krävs inte.', 'PBF 7 kap. 5 §')` ger `Krävs inte (PBF 7 kap. 5 §).`, och en text utan punkt ger `Text (lagrum)`.

**Katalogen**

- **K4. Öppen altan** (L1.1). `punkt.altan-barformaga.vad` och `.nar` får varianterna `.vad-skarmtak` och `.nar-skarmtak`, som används när `tak = skarmtak`. Utan tak används `.vad` och `.nar`, som hantverkaren skriver om utan skärmtak och takbeklädnad. Test: planens text i T1, med talen insatta, innehåller inte strängen "skärmtak" någonstans.
- **K5. Befintlig skorsten** (D8). Nya nycklar `punkt.eld-egenskaper.vad-befintlig` och `.nar-befintlig`, som används när `rok = befintlig`. Testas i T5.
- **K6. Luftflöden** (D7). I `genereraKontrollplan` steg 3 hoppas `till-luftfloden` över när `ventilation` är vald. `ANTAGANDEN` får A16.
  - Nytt fall **T20**: tillbyggnad, eldstad och ventilation ger 25 punkter (tillbyggnadens 9 utan luftflöden, eldstadens 10, ventilationens 4, `aktsamhet` och `overens`). Ingen `till-luftfloden`, en `vent-floden`.
  - T12 och T14 är oförändrade.
- **K7. Energiraden** (D1). Kravet vid `juli-sept-2026` blir `BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92`, och regelverksraden skriver `BFS 2011:6 (BBR)`. T12 rättas. Testet för att BBR bara står i energiraden gäller som förut.
- **K8. Regelverksraden** (L, planen). PBF skrivs `PBF (2011:338)`, inte bara `PBF`.

**Planen, handlingstext** (D2)

- **K9. Nycklar för papperet.**
  - I `KontrollplanPlan.astro` byts `ka.<status>` mot `utskrift.ka.<status>`. Spalten behåller `ka.*`.
  - `avfall.tips.<AvfallTips>` flyttas ut ur planens handlingstext och visas som en `kp-skarm`-rad under avfallsrubriken. Papperet får i stället `utskrift.avfall.instruktion`.
  - `utskrift.handskrift` står nu **både på skärm och papper**, direkt under `utskrift.ansvar`. Skärmens mening med "du" blir den nya nyckeln `skarm.handskrift` i spalten, under pekraden.
- **K10. Test för tilltal.** Modulen exporterar `PLAN_NYCKLAR`: varje `TEXT`-nyckel och nyckelmönster som `KontrollplanPlan.astro` läser utanför `kp-skarm`. Testet går igenom dem med talen insatta och fäller vid orden `du`, `dig`, `din`, `ditt`, `dina` och `jag` (hela ord, skiftlägesokänsligt).
- **K11. Etikett på linjen för kontrollansvarig** (L1.3). Den tomma linjen vid `huvudregel` och `beror` blir en `kp-linje` med `<dt>` = `utskrift.falt.ka-namn` och en tom `<dd>`, som de andra administrativa fälten.
- **K12. Intygandet** (L1.6). Ingen kodändring utöver att `utskrift.intygande` nu ska säga när det skrivs under, vilket är textvarvets sak. Blocket får `break-before: auto` och står kvar före avfallsdelen.
- **K13. Avfallstabellerna** (L1.7). `utskrift.avfall.instruktion` står mellan rutan och tabellerna på papperet. Inget annat ändras; tabellerna skrivs alltid ut (ändring 6 i avsnitt 0 gäller).
- **K14. Fastighet på varje blad** (D11).
  - `<thead>` i `.kp` får en första rad som bara syns i utskrift (`kp-utskrift`, `display: table-row` i print). Raden har en cell över alla sju kolumner med `utskrift.falt.fastighet` och en tom linje.
  - Samma rad står överst i avfallsdelen, före rutan.
  - Etiketten är samma nyckel som i det administrativa fältet, inte en ny.
- **K15. Sidnummer** (D11). I `global.css`, i `@page kontrollplan`: `@bottom-right { content: counter(page) " / " counter(pages); font-size: 8pt; }`. Inga ord i CSS. Firefox saknar stöd för marginalrutor och skriver ut sina egna sidnummer, och det godtas.
- **K16. Luft mellan fälten** (L1.5). I print: `.kp-admin .kp-bred { margin-top: 4mm; }`, och `.kp-admin dt { font-weight: 700; }` gäller också i det tvåspaltiga rutnätet, så att "Åtgärd" inte ser ut som svaret på datumfältet. Rendrera och jämför.
- **K17. Långa namn i Vem-kolumnen** (L1.4).
  - Kolumnbredderna i print: Vem från 30 till 36 mm, Hur från 50 till 46 mm, Kontroll från 55 till 53 mm.
  - `.kp td { overflow-wrap: break-word; hyphens: manual; }`.
  - I `vem.sotare` och `vem.funktionskontrollant` sätter utvecklaren mjuka bindestreck (U+00AD) vid sammansättningsfogarna i orden hantverkaren skrivit. Testet kontrollerar att strängarna innehåller U+00AD och att de utan dem är lika med hantverkarens text.

**Sidan**

- **K18. Två statiska sektioner** (D4, SEO A1).
  - I `kontrollplan.astro`, mellan "Gör inte det här" (slutar rad 342) och "Så räknar jag" (rad 344): två `<section class="print:hidden">` med var sin `Pennstreck`-H2, **utanför** alla villkor på `ogiltig` och `visat.status`. Id `andrat-1-juli-2026` och `nar-behovs-ingen-kontrollplan`.
  - Rubrik och stycken är konstanter överst i rutten (`ANDRAT_RUBRIK`, `ANDRAT_STYCKEN`, `INGEN_PLAN_RUBRIK`, `INGEN_PLAN_STYCKEN`), med `TEXT SAKNAS` tills textvarvet.
  - Modulen: `avsta`, `byggbedomare`, `avfall` och `nya-byggregler` tas bort ur `RegelNyckel`, `regelLagrum` och `TEXT`. Testet rad 564–565 rättas.
  - Test: ingen `regler`-lista i något fall innehåller de fyra.
- **K19. Rubrikerna och tabellen** (D5, D6).
  - `Så räknar jag` och `Vad siffrorna vilar på` blir konstanterna `STALLS_UPP_RUBRIK` och `BYGGER_PA_RUBRIK` (TEXT SAKNAS).
  - Ankaret blir `sa-stalls-planen-upp`, och spaltens länk läser `STALLS_UPP_RUBRIK`.
  - Antagandetabellen renderar bara de `ANTAGANDEN` vars `nr` börjar på A. Författningsraderna flyttas till källistan.
- **K20. Värdartikeln** (D13, SEO A5).
  - `src/content/guider/grund/inreda-kallare.mdx`: `<Kalkylator namn="kontrollplan" />` på egen rad efter stycket som slutar "... kan ha rätt ord men fel innehåll." och före "En sak gäller oavsett papper." Meningarna före inbäddningen skriver hantverkaren (T13).
  - **Mätning:** HTML-storleken för `/grund/inreda-kallare/` i `npm run dev` före och efter, rensad som i avsnitt 14, och storleken på det kompakta formuläret för sig. Utvecklaren rapporterar de tre talen, och koordinatorn mäter om på bygget. Ingen gräns stoppar leveransen (D13), men talen skrivs in i 16.4.
- **K21. Pelarna** (D12). `src/lib/kalkyl/register.ts` rad 185: `pelare: ['altan', 'grund'],`.
- **K22. Länk från bygglovsräknaren** (SEO B1). `src/pages/rakna/bygglov-altan.astro`:
  - I resultatspalten, efter länken "Så bedömer vi" (rad 440), står en rad till med länk till `/rakna/kontrollplan/?a=altan` när det sammanvägda svaret är `ja` eller `kanske`, aldrig vid `nej`. Med `?a=altan` landar läsaren på altanens plan.
  - Länktexten är konstanten `KONTROLLPLAN_LANK` överst i rutten (TEXT SAKNAS, ska innehålla ordet kontrollplan).
  - Inget verktygskort, ingen ny sektion. Kör bygglovsräknarens test efteråt; inget tal ändras.

**Kontroller för byggvarvet**

- Testet grönt med de nya fallen (T20, K3, K4, K5, K10, K17, K18).
- `npx astro check` 0 fel och `npm run kontrollera` 0 fel.
- Utskrift till PDF i Chrome eller Edge vid standard, T6 och T20: sidnummer, fastighetsraden på varje blad, inga namn som går in i nästa kolumn, luft mellan fälten.
- Leveransen har med de tre talen från K20.

### 16.3 Textvarvet (hantverkaren)

Efter byggvarvet. Bara text: `TEXT` i modulen, konstanterna överst i `kontrollplan.astro` och `bygglov-altan.astro`, och meningar i två MDX-filer. Inga lagrum, tal eller nycklar ändras. Korrekturen och läsaren läser efteråt.

**Nya nycklar och konstanter**

- **T1.** `punkt.altan-barformaga.vad` och `.nar` utan skärmtak och takbeklädnad; `.vad-skarmtak` och `.nar-skarmtak` med dem (K4).
- **T2.** `punkt.eld-egenskaper.vad-befintlig` och `.nar-befintlig`: bara eldstaden, och när den levereras (K5).
- **T3.** KA-texterna (K9).
  - `utskrift.ka.nej`, `utskrift.ka.nej-skarmtak`, `utskrift.ka.beror` och `utskrift.ka.huvudregel`: handlingstext för papperet, i tredje person och utan råd.
  - `ka.*` i spalten får behålla tilltalet men ska gå att förstå vid första läsningen: säg först om läsaren behöver en kontrollansvarig, sedan undantaget (L5, "jag fick läsa den tre gånger").
- **T4.** `utskrift.avfall.instruktion`: kryssas rutan lämnas tabellerna tomma, annars fylls de i (K13).
- **T5.** `utskrift.handskrift` som handlingstext: vilka fält som fylls i för hand före inlämningen, och att signatur och datum i tabellen fylls i när kontrollen är gjord. `skarm.handskrift` säger samma sak till läsaren, i spalten (K9, L2).
- **T6.** `utskrift.falt.ka-namn`, etiketten på KA-linjen. Innebörd: namn, certifiering och telefon (K11).
- **T7.** `utskrift.intygande`: säg att intygandet skrivs under när byggherren begär slutbesked (K12).
- **T8.** `ANDRAT_RUBRIK` (med datumet) och `ANDRAT_STYCKEN`, och `INGEN_PLAN_RUBRIK` och `INGEN_PLAN_STYCKEN` (K18).
  - Innehållet är SEO:s A1 punkt för punkt, med lagen och datumet.
  - Texterna från de borttagna reglerna `avsta`, `byggbedomare`, `avfall` och `nya-byggregler` flyttas hit och skrivs om. Ingen mening får stå två gånger på sidan.
  - Löptexten, räknad utan plan, formulär, antagandetabell, källista och Faq, får inte gå över 1 300 ord.
  - Byggbedömaren förklaras en gång, och det ska framgå att den gäller nybyggnad och inte altanen i standardfallet (L5).
- **T9.** `STALLS_UPP_RUBRIK` och `BYGGER_PA_RUBRIK` (D5).
- **T10.** `KONTROLLPLAN_LANK` i bygglovsräknaren (K22).

**Befintlig text som skrivs om**

- **T11. Planen i tredje person** (D2).
  - `kolumn.teckenforklaring`: "B är byggherren, E entreprenören", utan "alltså du", och med meningen om att egenkontroll gäller även när byggherren anlitar någon, till exempel skorstensfejarmästaren (D9).
  - `besok.*` och `anmalan.*` ska klara testet i K10.
  - `utskrift.ansvar`: rätta syftningen enligt korrekturen, rad 1137.
- **T12. VA-hjälpen** (SEO A4). `atgard.va.hjalp` nämner badrummet när ledningarna dras nytt eller flyttas.
- **T13. Värdartikeln** (SEO A5). I `inreda-kallare.mdx`, i stycket som slutar "... kan ha rätt ord men fel innehåll." eller i en mening direkt före inbäddningen, ska två saker in:
  - att startbeskedet förutsätter ett förslag till kontrollplan
  - att kontrollreglerna ändrades 1 juli 2026.

  Är lagrummet nytt för sidan läggs PBL 10 kap. 6 och 23 §§, Lag (2026:712), in i `kallor`.
- **T14. Altanartikeln** (SEO A2). `src/content/kunskap/altan/bygglov-altan.mdx` rad 104, efter "Räkna med bygglov och fråga kommunen först.": en mening om att en altan som kräver lov också kräver ett förslag till kontrollplan före startbeskedet. Länken går till `/rakna/kontrollplan/` och ankaret innehåller ordet kontrollplan. Meningen kopplas inte till den lovfria tillbyggnaden, och inget verktygskort läggs in.
- **T15. Korrekturens fel.**
  - Modulen, 13 fel: rad 755, 1043, 1057, 1127, 1137, 1160, 1161, 1163, 1166, 1168, 1170, 1203 och 1219.
  - Sidan, 2 fel: rad 102 och 138.
  - Rad 1160 och 1163 följer med när texten flyttas enligt T8.
  - Rad 64 (titeln) går till SEO (D14).
  - Rad 259–337 i sidan och rad 101 i planen är kod (K3).
- **T16. Kortsvaret och ansvarsraden** (D3). Kortsvarets första mening skrivs utan paragraf och utan ordet byggherre före förklaringen. Meningen om förslaget och fastställandet stryks där. "Gör inte det här" upprepar inte fastställandet.
- **T17. Läsarens meningar** (L5), var för sig:
  - BBR i ingressen förklaras eller stryks.
  - "ligger avfallet".
  - Gästhuset som inte får någon plan: säg vad läsaren gör i stället.
  - Komplementbostadshus får sitt vardagsnamn (attefallshus) en gång.
  - Datumvalet "eller inte än", som hamnar i fel period för den som skickar in 29 eller 30 september.
  - "Förvanskning och varsamhet" på raden som ska signeras.
  - Exemplet om ventilationens huv i `regel.anpassad`, som står även när altan är vald.
  - "i lydelse", "valda", "egen enhet", "författning" och "säkerhetsklass".
  - "lästa" som hänger löst.
  - Tekniskt samråd och slutsamråd i Faq.
  - "för sig" och "elva kontroller med den sista".
- **T18. Mönstren** (L-mönster 4 och 5).
  - Varje ordagrann upprepning står en gång: kontrollansvarigs förklaring i ingressen och i reglerna, "certifierad för sitt område", blanketten, "krävs inte för det här" i spalt och plan, och PDF, som i dag står tre gånger.
  - De kluvna satserna "det är … som" skrivs om. Högst en får stå kvar på sidan.
- **T19. Formulärets altanval** (L3). Etiketten för altan ska inte förutsätta att läsaren vet att lov krävs. Hjälpraden hänvisar i ord till bygglovsräknaren; länken finns i "Läs vidare".
- **T20. Antagandetabellen**: raden för A16 (D7), och texterna i raderna som flyttat (D6).

### 16.4 Min granskning efter båda varven

1. Testet grönt, också tilltalstestet och testet mot `TEXT SAKNAS`.
2. Delad adress ger samma plan. Vid ogiltigt värde och äldre regler finns inget delningsfält.
3. De två nya sektionerna syns i tre tillstånd, kontrollerat med `curl` på dev-servern:
   - standard
   - `?a=altan&a=tillbyggnad&a=eldstad&a=va` (ogiltigt)
   - `?a=altan&inkom=fore-juli-2026`
4. Utskrift till PDF i A4 liggande vid standard, T6 och T20, läst som en handläggare läser den: inget "du", etikett på KA-linjen, när intygandet skrivs under, instruktionen i avfallsdelen, sidnummer och fastighet på varje blad.
5. 375 px utan sidledsscroll, som förut.
6. Storleken för `/grund/inreda-kallare/` före och efter inbäddningen, och för `/rakna/kontrollplan/` vid standard och T14, skrivs in här.

Mätvärden (2026-09-28, egen dev-server på port 4471, HTML rensad som i avsnitt 14, skalet = `<header>` och `<footer>` = 17,8 kB):

| Sida | Uppmätt | Justerad (skalet räknat till 6 kB) | Gräns |
|---|---|---|---|
| `/rakna/kontrollplan/`, standard | 70,9 kB | 59,1 kB | 66 |
| `/rakna/kontrollplan/`, T14 | 78,5 kB | **66,6 kB** | 66 |
| planen i T14 (`#planen` till `#darfor-blev-svaret-sa`) | 14,7 kB | | 14 (höjs till 15, se 16.6) |
| `/grund/inreda-kallare/` med inbäddningen | 83,0 kB | 71,2 kB | ingen (D13) |
| inbäddningen själv (Kalkylators ram och formuläret) | 2,7 kB, varav formuläret 1,9 kB | | |
| inbäddningen plus meningen och källan i `kallor` | omkring 3,3 kB | | |

### 16.6 Granskning av varv 3 (UX och bygge, 2026-09-28)

**Kontrollerat:**
- Testet 39 av 39 och bygglovsräknarens test 22 av 22.
- `npx astro check` 0 fel. `npm run kontrollera` 0 fel och 10 varningar, som alla gäller bildtexter på andra sidor.
- Headless Edge på 375 px i åtta tillstånd: standard, ogiltigt, äldre regler, T20, komplementbostadshus med altan, källarguiden och bygglovsräknaren med ja och med nej. Resultat:
  - `scrollWidth` 375 i alla, inga val under 44 px.
  - Delningsfältet finns bara när det finns en plan.
  - De två nya sektionerna finns i alla tolv prövade adresser, och ingen sida visar `TEXT SAKNAS`.
  - Planen vid standard nämner inte skärmtak och har inga klasser per cell.
  - Länken till kontrollplanen står i bygglovsräknaren vid ja och kanske, inte vid nej.
- PDF i A4 liggande vid standard, T6, T13, T20 och `juli-sept-2026`:
  - sidnummer på varje blad
  - etikett på KA-linjen vid huvudregel
  - intygandet säger när det skrivs under
  - instruktionen i avfallsdelen
  - "Skorstens­fejar­mästaren" och "funktions­kontrollant" bryts inom sin kolumn
  - Luftflöden står en gång i T20
  - energiraden visar `BFS 2011:6 (BBR)`.

**Utvecklarens två avvikelser:**
- **Kolumnbredderna på `<col>`: godkänt.** Med en första rad i huvudet som spänner över alla kolumner tar `table-layout: fixed` bredderna från `<col>`, inte från cellerna. Det är rätt lösning, och den står sig även när fastighetsraden tas bort enligt punkt 2 nedan.
- **Regeln `energi` utan "(BBR)": retur**, punkt 3 nedan. Samma lagrum ska skrivas likadant överallt på en sida, och etiketten i "Därför blev svaret så" står under planen där energiraden säger `BFS 2011:6 (BBR)`.

**Frågan om `antagande.PBL` till `antagande.kommuner`: ja, stryk dem**, punkt 4 nedan. Text som inte renderas läses ändå av korrektur och läsare och kan glida isär från det som syns.

**Beslut om planens budget:** gränsen för planen i T14 höjs från 14 till **15 kB**. Markupen är redan den minsta som går, omkring 280 byte per rad utan klasser, och överskottet är riktig text. Sidans gräns på 66 kB står kvar.

**Retur, fyra punkter (utvecklaren):**

1. **Budgeten, `src/pages/rakna/kontrollplan.astro` rad 416–420.** T14 väger 66,6 kB justerat, alltså över 66. Källistans sjutton länkar bär var sin `class={LANK_KLASS}`, omkring 1,2 kB.
   - Stryk klassen på `<a>` och sätt den en gång på `<ul>` med ättlingsvarianter: `[&_a]:text-penna [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:decoration-2`, samma utseende som `LANK_KLASS`.
   - Mät om T14. Justerat ska ligga under 66 kB och planen under 15 kB.
2. **Fastighet på varje blad (D11).** I dag får intygandet ett eget blad utan fastighetsrad vid standard (blad 3 av 4), T20 (blad 5 av 6) och T13 (blad 3 av 5). Vid rivning hamnar tredje avfallstabellen på ett eget blad (5 av 5), också utan fastighetsrad. Lösningen är en marginalruta, som jag har provat i Edge headless med en variabel på rotelementet:
   - `src/styles/global.css` rad 885, i `@page kontrollplan`:
     - `@top-left { content: var(--kp-fastighet) "  ______________________________"; font-size: 9pt; }`
     - och `@page kontrollplan:first { @top-left { content: none; } }`, eftersom blad 1 redan har fältet.
   - `src/pages/rakna/kontrollplan.astro`, i `<Bas>`: `<style is:inline slot="head" set:html={`:root{--kp-fastighet:${cssStrang(TEXT['utskrift.falt.fastighet'])}}`} />`, med samma escapning som `cssStrang` i planen. Flytta `cssStrang` till modulen och exportera den.
   - Ta bort `<tr class="kp-utskrift kp-fastighetsrad">` (planen rad 126–130) och `<p class="kp-utskrift kp-linje kp-avfall-fastighet">` (planen rad 190–192), och deras regler i `global.css` rad 949–952.
   - Firefox saknar marginalrutor och visar fastigheten bara på blad 1; det godtas som för sidnumren (K15).
   - Skriv ut T13 och T20 igen. Varje blad utom det första ska ha fastighetsraden överst.
   - Undantag från ARKITEKTUR.md, stycket Utskrift: variabeln är ett värde ur `TEXT`, ingen utskriftsregel, och ligger därför inline. Jag skriver in undantaget i ARKITEKTUR.md när returen är godkänd.
3. **`src/lib/kalkyl/kontrollplan.ts` rad 598.** `'juli-sept-2026': 'BFS 2011:6 (BBR) avsnitt 1:22347 och 9:92',`. Lägg ett påstående i testet om att `regelLagrum('energi', …, 'juli-sept-2026')` är lika med kravet i `till-energi` för samma datum.
4. **Författningsraderna, `src/lib/kalkyl/kontrollplan.ts` rad 1219–1238 och 1276–1286.**
   - Stryk `TEXT`-nycklarna `antagande.<nr>` och `antagande.<nr>.varde` för de elva raderna som inte börjar på A (PBL, PBF, BFS-raderna och kommuner).
   - Flytta raderna ur `ANTAGANDEN` till en ny export `KALLOR_FORFATTNINGAR: readonly KallaRef[]`, i samma ordning.
   - I `kontrollplan.astro` rad 201: `antaganden` blir `ANTAGANDEN` utan filter, och källistan byggs av `ANTAGANDEN` följt av `KALLOR_FORFATTNINGAR`, så att ingen källa försvinner ur listan.
   - Test: varje `antagande.*`-nyckel i `TEXT` hör till en rad i `ANTAGANDEN`, och källistan har samma sjutton adresser som i dag.

Sedan testet, `npx astro check`, `npm run kontrollera` och de två utskrifterna igen. Språket bedöms inte här; läsaren, korrekturen och faktakollen pågår parallellt.

### 16.7 Slutgranskning (UX och bygge, 2026-09-28)

**Kontrollerat:**
- Testerna: kontrollplanen 43 av 43, bygglovsräknaren 22 av 22.
- `npx astro check`: 0 fel.
- `npm run kontrollera`: 0 fel, 10 varningar, alla om bildtexter på andra sidor.
- Egen dev-server på port 4472, stängd efteråt.

**Vikt** (rensad som i 16.4, skalet 17,8 kB räknat till 6):

| Sida | Justerad vikt | Planen |
|---|---|---|
| Standard | 57,7 kB | 7,3 kB |
| T13 | 57,2 kB | 6,8 kB |
| T14 | 65,2 kB | 14,0 kB |
| T20 | 64,0 kB | 12,5 kB |
| `/grund/inreda-kallare/` | 71,2 kB, inbäddningen 2,7 kB | |

Alla fall av `/rakna/kontrollplan/` ligger under 66 kB, och planen under 15 kB.

**375 px** (headless Edge, åtta tillstånd):
- `scrollWidth` 375, inga val under 44 px och inga fält utan etikett.
- Det dolda `f=1` finns i båda formulären och följer inte med i `delbarQuery`. `?f=1` utan kryss ger felet på a.
- Delningsfältet och "Därför blev svaret så" saknas vid ogiltigt värde och vid äldre regler. Hantverkarens ändring godkänns: utan plan finns inget svar att förklara.
- De två statiska sektionerna finns i alla tillstånd, och `TEXT SAKNAS` förekommer inte.
- I källarguiden står bärande, ventilation och VA först. Kontrollen i `Kalkylator` stoppar `forst` på andra verktyg och okända åtgärder, vilket godkänns.

**Utskrift:**

| Fall | Blad | Sidnummer | Fastighet på varje blad efter det första |
|---|---|---|---|
| Standard | 4 | 1 / 4 till 4 / 4 | ja |
| T13 | 4 | 1 / 4 till 4 / 4 | ja, också på bladet med tredje avfallstabellen |
| T20 | 5 | 1 / 5 till 5 / 5 | ja |

**Länken från bygglovsräknaren:**
- Tak, värdefullt hus och väggar eller glas (som ger `a=tillbyggnad`) godkänns.
- Placeringen godkänns inte, se punkt 1.

**Retur, två punkter (utvecklaren):**

1. **`src/pages/rakna/bygglov-altan.astro` rad 194**:

   ```ts
   plac: visatIndata.avstandByggnadM === 0 ? 'vid-huset' : 'fristaende',
   ```

   Skälet: 3,6 m är lovregelns "nära en byggnad" (PBL 9 kap. 19 §), inte "i anslutning till" en byggnad. Det senare är det som gör BFS 2024:9 2 kap. 10 § tillämplig (R7). Med dagens regel får en altan som står 3 m från huset räckesraden med ett lagrum som inte gäller den. Bara en altan som ansluter mot huset, alltså avstånd 0, räknas som vid huset. Läsaren kan ändra valet i kontrollplanens formulär. Uppdatera kommentaren på rad 183–189 och lägg ett fall i bygglovsräknarens test: avstånd 0 ger `plac=vid-huset`, avstånd 2 ger `plac=fristaende`.
2. **`src/components/kalkyl/KontrollplanPlan.astro` rad 165–166 och 171** (tomma linjer utan etikett).
   - Den första av de två tomma raderna under Anmälningar blir en `kp-linje` med etiketten `utskrift.falt.ovriga-anmalningar`, som hantverkaren föreslår ("Övriga anmälningar"). Den andra blir en vanlig tom linje under den.
   - Den tomma linjen under Arbetsplatsbesök (rad 171) stryks. Besöken bestämmer nämnden, och en linje utan etikett där säger ingenting.
   - Lägg nyckeln i `PLAN_NYCKLAR` så att tilltalstestet täcker den. Avsnitt 6.1 punkt 5 i den här specen gäller inte längre i den delen.

Allt annat är godkänt. Efter de två punkterna räcker det att köra testerna, `npx astro check` och en utskrift av standardfallet. Jag granskar inte om resten.

### 16.5 Version 2, inte nu

- Våtrum under VA: tätskikt och fall mot golvbrunn (BFS 2024:8 7 kap.), efter samma lagrumsläsning som varv 2 (SEO:s beslut 2).
- Komplementbostadshus med bygglov (A14).
- Ett kort avsnitt om hur ärendet går från ansökan till slutbesked (L6). Det måste rymmas inom 1 300 ord och avgörs när texten i T8 är skriven och räknad.
