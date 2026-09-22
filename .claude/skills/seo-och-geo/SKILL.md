---
name: seo-och-geo
description: Sök och AI-synlighet på hantverkstips.se. Sökordsanalys, en fras per sida, checklistan per sida före skrivning och kontrollen efter, metadata, strukturerad data, intern länkning, hubregeln, och GEO, alltså att bli källan när en AI svarar. Läs innan en sida planeras, briefas eller granskas.
---

# SEO och GEO

Sajten lever på organisk trafik till sidor som är bättre än den som rankar högst, och på att bli källan när någon frågar en AI om fukt i källaren eller hur man bygger en altan. De två målen har samma medel: ett rakt svar högt upp, tal med källa, tydliga rubriker som bär resonemanget, strukturerad data som stämmer med det som syns, och ett kluster där varje sida äger sin fras.

## 1. Grundregler

- **En fras, en sida.** Registret över vem som äger vad är tabellerna i `docs/INNEHALLSARKITEKTUR.md` avsnitt 2 och `docs/SOKORDSANALYS.md`. Mönstren: "bästa X", "X bäst i test", "X test" ägs av kategorisidan; "X plats" ("avfuktare källare") av köpguiden; "[modell] test" av testsidan; "X eller Y" av kunskap eller jämförelse; problemfraser av problemguider; "räkna ut X" av räknaren. Två sidor delar aldrig de tre första orden i title.
- **Sökintention först.** Kommersiell fras får en köpsida, informativ fras en guide eller kunskap. Blanda aldrig.
- **Bättre än ettan, konkret.** Innan en sida skrivs läses de fem som rankar. Underlaget listar vad ettan har, vad den saknar och vad som är fel eller gammalt, och sedan minst tre punkter vår sida har som ettan saknar: eget tal med källa, en tabell, en skiss, en räknare, ett rakare svar, aktuellare regelverk. Punkterna är krav, och den färdiga sidan kontrolleras mot dem.
- **Kluster, aldrig en ensam sida.** Varje sida hör till en pelare med en hub som publiceras vid fem sidor (`utkast: false` i `src/content/pelare/[slug].mdx`). Grupperna i hubben: Hitta felet (problemguider, kunskap), Välj rätt (köpguider, jämförelser, kategorier), Gör det själv (projektguider), Räkna (räknare med pelaren i registret).
- **Volymer** kommer från Keyword Planner-exporterna i `docs/data/` (Keyword Stats, UTF-16 med tabbar) och står i SOKORDSANALYS.md med vinnbarhet 1 till 5. Gissar du volym, skriv att du gissar.
- **Affiliatesajter granskas hårdare.** Aldrig tunna sidor för att täcka en fras. Kunskap och problemguider ska vara majoriteten; produktsidorna får sin trovärdighet därifrån. Googles recensionsriktlinjer gäller varje test och kategorisida (egna mätvärden, egna bilder, för vem, ärliga nackdelar, Test mot Granskning).

## 2. Metadata

- **title** (`seoTitle`, annars `title`): högst 60 tecken. Layouten lägger på " · Hantverkstips" bara när totalen ryms i 60, alltså vid 44 tecken eller kortare. Håll titeln under 44 om inte frasen kräver mer. Huvudfrasen tidigt, läsbar svenska, aldrig bara sökfrasen.
- **H1** (`title`) är sidans löfte, inte sökfrasen. Title och H1 får skilja sig; de ska inte dela de tre första orden i onödan.
- **description**: 120 till 155 tecken, en eller två meningar som lovar vad sidan ger, med huvudfrasen, utan utropstecken, som en mening Christian skulle säga.
- **H2** delar texten så att den går att skumma och bär sidofraserna i naturlig form. Aldrig fem rubriker efter samma mall.
- **alt** på varje bild högst 125 tecken, beskrivande, frasen med när den passar. Måtten går i bildtexten.
- **Canonical, sitemap, robots** sköts av bygget (`docs/ARKITEKTUR.md`, Konventioner). Rör dem inte per sida.

## 3. Strukturerad data

Byggs i `src/lib/strukturdata.ts` och renderas av `<StrukturData>`. `Article` på guider, kunskap, jämförelser och om-sidor; `Product` med `AggregateOffer` på tester; `ItemList` på kategorisidor; `Person` på författarsidor med Christian som `author` överallt; `Organization` som `publisher`; `BreadcrumbList` på alla sidor; `WebApplication` på räknarna; `FAQPage` bara där ett riktigt Faq-avsnitt finns, ett per sida, med samma text som syns. Markup för något som inte står på sidan är en felaktig signal. Test: klistra en testsida och en kategorisida i Rich Results Test efter större ändringar.

## 4. Intern länkning

- Varje ny sida får minst tre utgående länkar och minst två inlänkar från andra innehållsfiler inom en vecka. Sidfot, meny och automatiska listor räknas inte. `npm run kontrollera` varnar för föräldralösa sidor.
- Ankartexten säger vart länken leder, aldrig "här" eller "läs mer", och behöver inte vara målsidans rubrik ordagrant.
- Kunskap och problemguider länkar till köpguiden, inte direkt till kategorisidan, högst en gång per H2 i löptext. Kategorisidan länkar till hubben, köpguiden, räknaren och alla tester. Testet länkar till kategorisidan, köpguiden och en kunskapsartikel. Räknaren länkas med `<Verktygskort>` (ett per sida) eller bäddas in med `<Kalkylator>` där läsaren just förstått talet.
- Sidor som länkar till ett utkast stoppar bygget. En adress byts aldrig utan 301.

## 5. GEO, att bli källan för en AI

Det AI-svar bygger på är samma sak som Google belönar, bara tydligare:

- **Ett citerbart svar högst upp.** Kort svar i tre till fem meningar med talet och villkoret, i klartext utan att förutsätta resten av sidan. Det är stycket en modell lyfter.
- **Entiteten är tydlig.** Sajten heter Hantverkstips, personen heter Christian Karlsson, författarsidan finns, `Organization` och `Person` stämmer med om-sidorna. Samma namn överallt.
- **Tal med källa och datum.** "Skatteverket, 2026" i texten, inte bara i en fotnot. Källförteckningen i frontmatter (`kallor`) är en av de starkaste signalerna vi har.
- **Rubriker som är frågor någon ställer** där det passar naturligt, och Faq med riktiga frågor och egna svar, aldrig dubbletter av brödtexten.
- **Tabeller med rubrikrad och enhet**, de plockas rakt av.
- **Uppdaterad-datum** som stämmer, och att vi säger vad som ändrats när regler byts (rotavdraget varje december, BFS-föreskrifter).
- **Ingenting som ser ut som genererat.** Modellerna filtrerar på samma tecken som läsare: mallrubriker, aforismer, tankstreck. Rösten i `docs/ROST.md` är också en GEO-åtgärd.
- **Kontroll**: fråga en AI om frasen efter publicering och se om sajten nämns eller citeras. Anteckna i SOKORDSANALYS.md när den gör det.

## 6. Checklistan per sida

Skrivs före skrivningen till `docs/briefer/seo-checklista-[datum]/[grupp].md`, ett H2 per sida, och används igen som facit efteråt. Punkterna i ordning:

1. Adress och sidtyp.
2. Huvudfras med volym, tre till fem sidofraser med plats (H1, en H2, brödtext), i naturlig svenska.
3. Title: nuvarande, teckenantal, krav.
4. Description: nuvarande, teckenantal, krav.
5. H1: krav.
6. H2-struktur: vilka avsnitt som måste finnas för intentionen och vilken H2 som bär vilken fras.
7. Längd: nuvarande och målintervall, motiverat av vad som rankar.
8. Bilder: varje bild med krav på alt.
9. Interna länkar ut som ska finnas, och inlänkar som andra sidor bygger på.
10. Strukturerad data och komponenter som inte får ändras i form.
11. Det ettan har som vi måste behålla eller överträffa, högst fem punkter.
12. Fällor: sådant som bär ranking och lätt stryks, och sådant som ska bort ur publik text (internt arbete, inklistrade fraser).

Efter skrivningen läses sidan mot samma lista. Returen är konkreta punkter med rad och vad som ska stå, "Inget att ändra" där det stämmer. Stil och röst bedöms inte här, det gör läsaren.

## 7. Verktyg och underlag

- `docs/SOKORDSANALYS.md`: konkurrentkarta, startlistor, körningar. Uppdateras vid varje ny Keyword Planner-export.
- `docs/INNEHALLSARKITEKTUR.md`: pelare, kluster, URL-mönster, länkregler, E-E-A-T.
- `docs/VERKTYGSPLAN.md`: räknarna, byggda och planerade, med sökfras.
- Search Console när den är kopplad: begär indexering på hubbarna och toppsidorna, resten följer via sitemap-index.xml inom några dagar.
- `npm run kontrollera` räknar tecken, hittar föräldralösa sidor, döda länkar och alt över gränsen. Räkna inte det för hand.
