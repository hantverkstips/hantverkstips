# SEO-kontroll, elhubben `/el/`, 2026-09-28

Fil: `src/content/pelare/el.mdx`, i dag `utkast: true`. Kontrollerad mot de publicerade hubbarna `src/content/pelare/golv.mdx` och `src/content/pelare/fasad.mdx`, mot hubmallen `src/components/vyer/PelarHub.astro` och mot sidhuvudet i `src/layouts/Bas.astro`. Den här filen innehåller krav och förslag. Ingen innehållsfil är ändrad. Hantverkaren formulerar ingress och description.

## 1. Hubregeln

**Uppfylld.** Skillen `seo-och-geo` kräver fem sidor. El har fem publicerade sidor att länka till, och mallen hittar sju poster:

| Grupp i hubben | Sida | Typ | Varför den hamnar där |
|---|---|---|---|
| Hitta felet | `/el/jordfelsbrytare-loser-ut/` | problemguide | `typ` |
| Hitta felet | `/el/byta-elcentral/` | problemguide | `typ` |
| Hitta felet | `/el/u-varde/` | kunskap | `typ` |
| Gör det själv | `/el/tillaggsisolera-vind/` | projektguide | `typ` |
| Räkna | `/rakna/elkostnad/` | räknare | `pelare: ['el', 'fukt']` i `src/lib/kalkyl/register.ts` |
| Räkna | `/rakna/u-varde/` | räknare | `pelare: ['el']` |
| Räkna | `/rakna/rotavdrag/` | räknare | `pelare: ['grund', 'golv', 'kok', 'el']` |

Välj rätt blir tom och döljs av mallen (`synliga` filtrerar grupper med noll poster). Det är rätt: El har ingen köpguide och ingen kategori.

Två saker att veta:

- **Raden under ingressen säger "4 sidor".** Mallen räknar `totalt` som artiklar plus jämförelser, inte räknare. Samma siffra står på kortet på startsidan och på `/amnen/`. Hubregeln räknar räknaren, så regeln är uppfylld även om etiketten säger fyra. Ingen ändring krävs.
- **Två regler står i dokumenten.** `docs/INNEHALLSARKITEKTUR.md` avsnitt 1 (från omgörningen 2026-09-17) säger att en hub publiceras så snart den har en sida; skillen, `ny-sida` och `stil-och-design` säger fem. El uppfyller båda. Fasadhubben är publicerad med två artiklar och en räknare och uppfyller bara den äldre regeln; det tas upp i `fasad.md`. Koordinatorn bör be Christian välja en regel och stryka den andra.

## 2. Title

Nu: `title: El, värme och energi`, ingen `seoTitle`. 20 tecken, får suffixet och blir `El, värme och energi · Hantverkstips`, 36 tecken.

**Inget att ändra.** Samma mönster som Golv (`Golv och trappor`) och Fasad (`Fasad, fönster och dörrar`): pelarens namn ur registret, ingen `seoTitle`. Huben äger ingen sökfras, precis som `/fukt/` (INNEHALLSARKITEKTUR avsnitt 2, "ingen fras"). Den ska inte jaga "el" eller "energi"; de fraserna är för breda och ägs av myndigheter och elbolag. Ingen annan sida på sajten börjar med "El, värme och", så titeln kolliderar inte. `/rakna/elkostnad/` börjar med "Vad kostar maskinen", ingen konflikt.

H1 renderas ur samma `title`. Inget att ändra.

## 3. Description

Nu: `Guider om el, värme och isolering. Vad en lekman får göra själv, vad som kräver behörighet, och hur du sänker elräkningen utan att bygga in fukt.` 153 tecken, inom 120 till 155.

**Ändras.** Tre skäl, alla för sökningen:

1. **Den nämner inte en enda av sidorna.** Golv och Fasad räknar upp sina ämnen i första meningen med de ord folk söker på ("trägolv, laminat, klinker och trappor", "fasadpanel, puts, fönster, ytterdörrar och drevningen"). Els första mening är tre abstrakta ord. Den som söker på jordfelsbrytare eller U-värde och får huben i resultatet ska se ordet i snippeten, och en AI som läser huben ska se vilka ämnen sajten täcker.
2. **Den lovar värme, som huben inte har.** Ingen sida handlar om uppvärmning. "Värme" får stå i pelarnamnet, men description ska lova det som finns.
3. **Den upprepar ingressen.** "utan att bygga in fukt" står ordagrant i båda. Description och ingress ska ge två olika saker, som på Golv och Fasad.

Krav:

- 120 till 155 tecken, `npm run kontrollera` räknar.
- Första meningen följer mönstret från Golv och Fasad, "Guider om …", och namnger minst tre av de här med sökordets form: **jordfelsbrytaren**, **elcentralen**, **U-värdet**, **tilläggsisolering av vinden** (eller "isoleringen på vinden").
- Andra meningen säger vad läsaren får: vad du får göra själv och när det är en elektriker (det är vad de två elsidorna och Elsäkerhetsverket bär), och att isoleringen räknas i kronor (det är vad U-värdessidan och räknaren har som ingen annan har).
- Inget utropstecken, ingen fråga, inget "värme" som löfte.

Förslag att utgå från, inte att klistra in: första meningen de fyra ämnena, andra meningen "vad du får göra själv, när elektrikern behövs och vad isoleringen sparar i kronor". Det ligger kring 150 tecken.

## 4. Ingress

Nu: `Ta reda på vad du får göra själv innan du rör elen, och isolera aldrig utan att täta först. Det är så du sparar el utan att bygga in fukt.` 147 tecken.

**Ändras, men lätt.** Första ledet är bra och har samma form som Golv ("Mät innan du köper.") och Fasad ("Ta reda på var vädret kommer in innan …"): en uppmaning och det som avgör. Två krav:

- **Ingen upprepning av description.** Andra meningen upprepar "utan att bygga in fukt". Stryk den eller byt innehåll.
- **Kortare.** De publicerade hubbarnas ingresser är 109 till 141 tecken; Golv och Fasad 109 och 112. El är längst av alla. Sikta under 125.

Ingressen bär ingen fras och behöver ingen. Den är det första stycket en AI läser på huben, så den ska vara en mening som stämmer utan resten av sidan, vilket den nuvarande första meningen gör.

## 5. Övriga fält

- **`uppdaterad: 2026-09-17`** ska sättas till publiceringsdagen. Fältet går ut som `dateModified` i `Article` på huben, och 2026-09-17 är före den första elsidan.
- **`utkast: false`** är själva publiceringen.
- Ingen brödtext i filen, inga fler fält. Mallen bygger resten.

## 6. Strukturerad data

Huben får `Article` (via `artikel()` i `src/lib/strukturdata.ts`) med `headline` = title, `description`, `dateModified` = `uppdaterad` och delningsbilden `public/og/pelare-el.png`, som `npm run delningsbilder` genererar vid bygget. Inget att ändra i form. Kontrollera efter bygget att filen `public/og/pelare-el.png` finns.

**Brödsmulorna på de fyra elartiklarna ändras automatiskt.** `src/components/vyer/Artikel.astro` (rad 109 till 114) lägger bara in pelarnivån när huben är publicerad. I dag är `BreadcrumbList` på elsidorna två led, Hantverkstips och sidan. Efter publiceringen blir den tre: Hantverkstips / El, värme och energi (`/el/`) / sidan. Det är önskat, och det är den viktigaste interna signalen huben ger artiklarna. Inget att göra, men kontrollera en elsida i Rich Results Test efter bygget.

## 7. Vad som ändras i menyn och på sajten när huben publiceras

Allt styrs av `utkast: false`. Ingen kod ändras (kommentaren i `Bas.astro` rad 114 till 116).

1. **Ämnesraden i sidhuvudet på desktop** får en åttonde pelare. I dag, i registrets ordning: Fasad, Altan, Grund, Väggar, Golv, Kök och bad, Fukt, sedan Alla ämnen. Efter: samma plus **El och energi** (kortnamnet `kort` i `src/lib/pelare.ts`) med elikonen, direkt efter Fukt och före Alla ämnen. Raden scrollar i sidled när den blir bredare än skärmen (INNEHALLSARKITEKTUR avsnitt 4); UX och bygge-agenten bör titta på 1024 px och 375 px att den nionde posten inte skjuter Alla ämnen utom synhåll utan att det syns att raden scrollar.
2. **Mobilmenyn**, gruppen Hela huset: i dag bara Fukt och inomhusklimat. Efter: Fukt och inomhusklimat, **El, värme och energi**. Fullt namn (`namn`), inte kortnamnet.
3. **Sidfoten**, spalten Ämnen: El, värme och energi läggs till efter Fukt.
4. **Startsidans ämnesrad** (`src/components/ui/Amnesrad.astro`): El-kortet går från dämpat med etiketten "Kommer" till länk med etiketten "4 sidor".
5. **`/amnen/`** och **404-sidan** listar El som länk.
6. **Brödsmulorna** på de fyra elartiklarna får länken till `/el/` (punkt 6 ovan).
7. **Sitemapen** får `/el/`. Search Console: begär indexering av `/el/` när Christian ber om det; huben är en av de sidor skillen säger att vi begär manuellt.

Menyposten "Om oss" i INNEHALLSARKITEKTUR avsnitt 4 och gränsen `MAX_HUBBAR_I_MENY` på tre gäller inte längre; sidhuvudet gjordes om 2026-09-17 och listar alla publicerade pelare. Dokumentet bör rättas, men det påverkar inte den här publiceringen.

## 8. Intern länkning

- Huben länkar till alla sju poster automatiskt. Inga inlänkar till huben krävs från brödtext; meny, sidfot, brödsmulor och startsidans kort bär den.
- **Klustret är två par som inte länkar till varandra.** Jordfelsbrytaren och elcentralen länkar till varandra, vinden och U-värdet länkar till varandra och till räknarna, men inget av paren länkar till det andra. Det är naturligt, ämnena är olika, och huben är bryggan. Inget krav nu. När El får en sjätte sida om vad man får göra själv med elen (frasen "vad får man göra själv el", 30, flaggad i checklistan 2026-09-23) blir den bryggan.
- Ingen sida får längre ett byggstopp för att länka till `/el/` efter publiceringen. Artiklarna behöver inte länka till huben i brödtext.

## 9. Fällor

- **Rör inte `title`.** Den är pelarens namn och delas med registret och menyn. En `seoTitle` som jagar en fras skulle bryta mönstret mot övriga hubbar och inte vinna något.
- **Klistra inte in sidornas fraser i ingressen.** Fraserna hör hemma i description (som förklarar innehållet), inte i ingressen (som är en mening till läsaren).
- **Publicera inte huben i samma commit som en ny elsida som är utkast.** Mallen listar bara publicerade sidor, men en länk från en publicerad sida till ett utkast stoppar bygget.

## Sammanfattning

Tre punkter: description skrivs om (nämner ämnena, lovar inte värme, upprepar inte ingressen), ingressen kortas och slutar upprepa description, `uppdaterad` sätts till publiceringsdagen. Title, H1, hubregeln, strukturerad data och menyn: inget att ändra. När de tre punkterna är gjorda och `npm run build` är grönt är huben godkänd av SEO och GEO.
