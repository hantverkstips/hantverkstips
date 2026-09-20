# Faktablad: /om/integritet/

Ur `src/content/sidor/integritet.mdx`, läst 2026-09-20. Läsarutredningen gav sidan 5 av 5; juridiken står orörd i sak, "vi" byts till "jag" där Christian menas.

## Frontmatter

- title: "Integritet", behålls.
- description: 120 till 155 tecken. Behåll "kakor" och "IP-adress". Dagens öppning "vad som loggas ... och vad som inte loggas" är formen "X, och inte X"; skrivs om.
- uppdaterad: sätts till 2026-09-20
- utkast: false
- Ingen strukturdata.

## Kakor

- Hantverkstips sätter inga kakor som kräver samtycke. Därför ingen samtyckesruta.
- Adtraction sätter inga kakor på sajten.
- Butiken läsaren kommer till har egna villkor och egna kakor, som hen tar ställning till där.

## När du klickar på en köpknapp (juridiskt bindande uppräkning, varje punkt ska stå kvar)

- Klicket går genom en egen adress på hantverkstips.se innan det skickas vidare till butiken.
- Sparas: vilken produkt, vilken butik länken gick till, vilken sida på hantverkstips.se läsaren kom från, var på sidan knappen satt.
- Sparas inte: IP-adress, ingen annan uppgift som kan kopplas till läsaren.
- Klicket får ett löpnummer som följer med till affiliatenätverket Adtraction, så att ett köp kan räknas till rätt sida. Numret säger inget om vem läsaren är. Meningen ska stanna.
- Kontrollerat mot `src/pages/go/[slug].ts` 2026-09-20: loggar produkt_id, butik_id, sida (bara sökväg på egen domän), position, kategori. Kategorin är härledd ur produkten och nämns inte i texten. Noteras i rapporten, ändras inte.

## MDX-kommentaren om besöksstatistik

Står kvar ordagrant, med texten om Vercel Analytics inuti. Flyttas inte ut i sidan förrän paketet är installerat.

## Kalkylatorerna

- Det som fylls i ligger i adressfältet, så att uträkningen kan delas.
- Sparas inte hos sajten. Meningen är både integritetsupplysning och förklaring av delningsfunktionen på fjorton sidor.
- H2:n "Kalkylatorerna" är en etikett; skrivs om så att den säger vad avsnittet svarar på.

## Frågor

- Länk till `/om/kontakt/` med ankaret "kontaktsidan". Ska vara kvar.

## Krav ur checklistan

- Tre H2 kvar i sak: klick på köpknapp, kalkylatorerna, frågor.
- 250 till 400 ord, i dag 254. Inte längre än nödvändigt.
- Inga bilder.
- Sidofraser: inga kakor som kräver samtycke (första stycket), ingen IP-adress (H2 om klick), det du fyller i ligger i adressfältet (H2 om kalkylatorerna).
