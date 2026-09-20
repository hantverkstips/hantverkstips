# Faktablad: /om/sa-tjanar-vi-pengar/

Ur `src/content/sidor/sa-tjanar-vi-pengar.mdx`, läst 2026-09-20. Läsarutredningen gav sidan 5 av 5; formen rörs varsamt, "vi" byts till "jag" där Christian menas.

## Frontmatter

- title: "Så tjänar vi pengar". Låst: står likadant i sidfoten, menyn och reklambandet. Byts inte.
- description: 120 till 155 tecken. Behåll "annonslänkar" och "provision". Dagens "vad den påverkar och vad den inte påverkar" är formen "X, inte Y"; skrivs om.
- uppdaterad: sätts till 2026-09-20
- strukturdata: Article (rörs inte)
- utkast: false

## Hur länken fungerar

- Köpknapp leder till Proffsmagasinet via en annonslänk.
- Handlar läsaren där betalar butiken en provision på ordervärdet, via affiliatenätverket Adtraction.
- Priset för läsaren är detsamma som om hen gått direkt till butiken.

## Läget i september 2026

- MDX-kommentaren `{/* Stycket nedan byts när Adtraction godkänt programmet. */}` står kvar, renderas inte.
- Sajten är ny och ännu inte godkänd i Proffsmagasinets program.
- Tills dess går länkarna till butikens produktsida utan spårning, och sajten tjänar ingenting på dem.
- Sidan skrivs om när det ändras. Påståendena ändras inte utan besked från affiliateansvarig.

## Vad provisionen inte påverkar

- Vilka maskiner en sida tar upp, och vilken som lyfts fram, bestäms innan annonslänkarna kommer in i bilden. Gammal lydelse: "Produktexperten väljer ... innan den av oss som sköter annonslänkarna får se texten." Med en person bakom sajten skrivs det som ordning i arbetet, inte som två roller. Sakinnehållet: valet görs oberoende av länkarna.
- Provisionen är densamma oavsett maskin, så det finns inget att vinna på att peka på en dyrare. Starkaste argumentet, ska stå kvar.
- "Köp inte" skrivs när det är svaret.
- Exempel: två av maskinerna i köpguiden om avfuktare (`/fukt/avfuktare-kallare/`) avråds från, med angivet skäl. Kontrollerat 2026-09-20: guiden har avsnittet "Två maskiner avråder vi från, och skälen är olika" (rad 277). Stämmer.
- Ingen betalning tas från tillverkare eller butiker. Ingen annonsör ser en sida innan den publiceras.
- Lånas en maskin för ett test står det på testsidan.

## Så syns länkarna

- Varje sida med annonslänkar har ett band överst som säger det (komponenten Reklamband).
- Under varje köpknapp står "Annonslänk" med datumet priset hämtades (komponenten Kopknapp).
- Länkar i källförteckningen är vanliga länkar utan provision.
- Kunskapsartiklar utan produkter har varken band eller köpknappar.

## Vad som loggas vid klick

- Produkt, butik, vilken sida på sajten läsaren kom från, var på sidan knappen satt.
- Ingen IP-adress, ingen uppgift som kan kopplas till läsaren.
- Länk till `/om/integritet/`, i dag med ankaret "integritet"; ska skrivas om till något beskrivande.

## Krav ur checklistan

- Tre H2 kvar i sak: vad provisionen inte påverkar, så ser du var länkarna finns, vad som loggas vid klick.
- 350 till 500 ord, i dag 316. Avsnittet om produktvalet tål att bli fylligare.
- Inga bilder.
- Sidofraser: annonslänk (första stycket och H2 om var länkarna finns), provision på ordervärdet (första stycket), priset är detsamma för dig (första stycket), "köp inte" när det är svaret (H2 om vad provisionen inte påverkar).
