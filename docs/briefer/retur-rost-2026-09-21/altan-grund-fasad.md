# Retur efter omskrivningen i Christians röst, altan, grund och fasad

Läst 2026-09-21 av SEO-strategen mot `docs/briefer/seo-checklista-2026-09-20/altan-grund-fasad.md`, punkt för punkt. Bara sökrelaterade ändringar står här: saknad fras på angiven plats, längder på title och description, interna länkar och ankartexter, alt-text, avsnitt som intentionen kräver, strukturerad data och komponenter. Stil och röst granskas av någon annan och kommenteras inte.

Kontrollerat och godkänt för alla fjorton sidorna: `seoTitle`/`title` och `description` ligger inom sina intervall, ordantalen ligger inom sina spann, samtliga H2-avsnitt finns kvar i rätt ordning, alla föreskrivna interna länkar ut finns kvar med ankare som säger vart de leder, komponenterna (`Kalkylator`, `Verktygskort`, `Varning`, `Faktaruta`, `Markering`, `Illustration`) och antalet Faq-frågor är oförändrade, alla tabeller har kvar sin källrad, och ingen alt-text är över 125 tecken. `npm run kontrollera` är grön: 45 publicerade sidor, 0 fel, 0 varningar.

Sex punkter kvarstår.

## /altan/bygga-altan/

1. `src/content/guider/altan/bygga-altan.mdx` rad 142, alt-texten på `<Illustration namn="altan/bygga-altan-fall">`. Alten tappade springorna. Checklistan punkt 8 kräver att alten beskriver genomskärning, **trall med springor**, lutning bort från huset, inre och yttre bärlina, rörelsefog och en centimeter fall per meter. Ändra till: `Genomskärning av altan: trall med springor lutar från huset, yttre bärlinan lägre än inre, rörelsefog, 1 cm fall per meter.` (123 tecken, ordet fall kvar.)

## /altan/tradack-pa-mark/

Inget att ändra.

## /altan/trallskruv/

Inget att ändra.

## /altan/bygglov-altan/

Inget att ändra.

## /altan/reglar-avstand-och-dimensioner/

Inget att ändra.

## /altan/

Inget att ändra.

## /grund/dranera-hus/

1. `src/content/guider/grund/dranera-hus.mdx` rad 107, H2 "Så går en dränering till, moment för moment". Sidofrasen *dränering steg för steg* ska enligt checklistan punkt 2 ligga i H2:n om momenten. Den fanns tidigare i `seoTitle` ("Dränera hus, steg för steg med mått och källa"), och den titeln är bytt med rätta, men frasen finns nu ingenstans på sidan utom i två källtitlar i frontmatter. Skriv H2:n som **"Så går en dränering till, steg för steg"**. Den numrerade listan under rubriken rörs inte.

## /grund/inreda-kallare/

1. `src/content/guider/golv/lagga-klickgolv.mdx` rad 126, ankartexten `[inreda källaren, fuktkraven först](/grund/inreda-kallare/)`. H1 på målsidan är sedan omskrivningen "Inreda källaren, mät fukten innan du bygger något", så ankaret namnger en rubrik som inte finns. Byt ankartexten till **"inreda källaren, mät fukten innan du bygger något"**, eller korta den till **"inreda källaren"**, som sajtens sex övriga inlänkar till sidan använder. Länkmålet ändras inte.

## /grund/isolera-krypgrund/

1. `src/content/guider/grund/isolera-krypgrund.mdx` rad 2 (`title`, som är sidans `<title>` eftersom `seoTitle` saknas) och rad 106 (H2 "Isolering i bjälklaget, det du vinner och det grunden betalar"). Sidan äger **krypgrund isolering, 480/mån**, och checklistan punkt 2 kräver frasen i `seoTitle` eller i en H2 i någon naturlig ordföljd. Den gamla titeln "Isolera krypgrunden, fukten först och isoleringen sist" bar båda orden; den nya, "Isolera krypgrunden, men mät fukten först", bär bara det ena, och ingen H2 har krypgrund och isolering tillsammans. Välj en av två vägar: skriv om H2:n på rad 106 till **"Isolering i krypgrundens bjälklag, det du vinner och det grunden betalar"**, eller flagga till mig så sätter jag en `seoTitle` på 40 till 58 tecken som börjar med huvudfrasen och bär ordet isolering. H1 får stå kvar som den är i båda fallen, och de sex inlänkarnas ankare "isolera krypgrunden" berörs inte.

## /grund/sprickor-i-husgrunden/

1. `src/content/guider/grund/sprickor-i-husgrunden.mdx`, avsnittet "Krympsprickorna får vara kvar" (rad 78 till 84). Sidofrasen *spricka i betongplatta* 50/mån ska enligt checklistan punkt 2 finnas i brödtext, och ordet betongplatta finns inte någonstans på sidan. Det här är inget omskrivningen tog bort, det saknades även före, men det hör till frasuppsättningen sidan ska bära. Lägg en mening i det avsnittet om att en krympspricka i betongplattan, källargolvet, är samma fenomen som i muren och bedöms på samma sätt: står den still får den vara kvar. Ingen ny källa krävs, resonemanget är redan sidans eget.

## /grund/isolera-kallarvagg/

Inget att ändra.

## /grund/

1. `src/content/pelare/grund.mdx` rad 2 mot `src/lib/pelare.ts` rad 56. Hubbens `title` är ändrad från "Grund och dränering" till "Grund, källare och dränering", medan `PELARE[].namn` i koden fortfarande är "Grund och dränering". Det namnet driver menyn i `Bas.astro`, brödsmulan på varje grundartikel via `Artikel.astro` rad 114, korten och rubrikerna på `/amnen/` samt raden "Alla guider om …" i `PelarHub.astro`, och brödsmulan är i sin tur det som `BreadcrumbList` byggs av. Pelaren heter alltså två saker på samma sida. Hubben har ingen manuell inlänk att skydda, så båda vägarna är öppna: ändra `title` på rad 2 tillbaka till **"Grund och dränering"**, eller be tekniskt ansvarig ändra `namn` på rad 56 i `pelare.ts` till **"Grund, källare och dränering"** (längden 28 tecken ligger inom kravet 15 till 40). Fasad och altan stämmer redan mot koden.

## /fasad/dreva-fonster/

Inget att ändra.

## /fasad/

Inget att ändra.
