# SEO-checklista, isolera krypgrund, utbyggnad, startlista 6 omgång F, 2026-10-07

Omgång F i startlista 6 (`docs/SOKORDSANALYS.md` 12.7, rad F4; 12.4 Grund), deadline **31 mars**. Det här är en utbyggnad av en publicerad projektguide. Sidan får en ny H2 om hur bjälklaget isoleras underifrån, från krypgrunden och utan att golvet rivs. **Hantverkaren skriver inte om sidan i övrigt.** Det som inte nämns nedan står kvar ordagrant.

Underlaget är registret i 12.4 (vinnbarhet 3, SERP läst i körning 2). Ingen ny SERP-läsning görs, eftersom frasen är en del av sidans avsikt och sidan redan har rätt ämne. Title räknas utan suffix.

---

## /grund/isolera-krypgrund/

### 1. Adress och sidtyp

`/grund/isolera-krypgrund/` · `src/content/guider/grund/isolera-krypgrund.mdx` · projektguide, oförändrad. `uppdaterad` sätts till publiceringsdagen.

### 2. Huvudfras och sidofraser

**Huvudfras: krypgrund isolering, 480 per månad**, oförändrad. Sidan äger **1 110**.

Fraser som flyttar in, med plats:

- **isolera krypgrund underifrån** (110, −36 %, topp i februari): ny H2 nedan.
- **isolering krypgrund cellplast** (20) och **isolera krypgrund själv** (20): i den nya H2:n, en mening var.
- **uteluftsventilerad krypgrund** (90) bärs redan av H2 "Uteluftsventilerad krypgrund eller varmgrund". Ingen ändring.

### 3. Title, 4. Description, 5. H1

**Ändras inte.**

### 6. H2-struktur, exakt vad som ändras

Sidans H2 i dag, i ordning:

1. Uteluftsventilerad krypgrund eller varmgrund
2. En hel sommar med hygrometern i grunden
3. Isolering i bjälklaget, det du vinner och det grunden betalar
4. Isolera marken och gör grunden till varmgrund
5. Ångspärren sitter ovanpå, aldrig under isoleringen
6. Ordningen, från hygrometern till sista skivan
7. Lägen där ullen får stanna i förpackningen

**Ny H2 "Isolera krypgrunden underifrån"** (hantverkaren formulerar rubriken, men "underifrån" och "krypgrund" ska stå i den). Den läggs direkt efter "Isolering i bjälklaget, det du vinner och det grunden betalar" och före "Isolera marken och gör grunden till varmgrund".

Den befintliga H2:n om bjälklaget handlar om varför och vad det ger: U-värdet, kronorna och risken. Den nya handlar om hur arbetet görs underifrån. Innehåll, 350 till 550 ord:

- **Vad underifrån betyder:** bjälklaget isoleras från krypgrunden, utan att golvet i rummet ovanför rivs. Det är något annat än att isolera marken, som har en egen H2 med länk.
- **Arbetsgången i ordning, med källa:** fukten mäts först (sidans tes, med länk till H2 2), sedan kommer isoleringen mellan bjälkarna, det obrutna lagret under dem och skivan eller vindskyddet underst som håller ullen på plats. Tjocklekar och material bara ur tillverkarens anvisning för krypgrundsbjälklag (Rockwool, som sidan redan citerar, eller Isover eller Paroc).
- **Cellplast underifrån:** en mening om vad tillverkaren eller Boverket säger om skivor av cellplast under bjälklaget och fukten bakom dem. Bara med källa. Saknas källa står inget.
- **Att isolera själv:** utrymmet, att krypa och skyddet, med Arbetsmiljöverket om mineralull om det citeras. När grunden är för låg för att göra jobbet underifrån länkas `/fukt/torpargrund/`.
- **Risken står i H2 3.** Underifrån-isoleringen gör grunden kallare precis som annan isolering i bjälklaget. Här står en mening som pekar dit, utan upprepning.

**Allt annat står kvar.**

### 7. Längd

Sidan får 350 till 550 ord till.

### 8. Bilder

Inget krav. Om UX vill rita något är det ett snitt genom bjälklaget sett från krypgrunden, med ull mellan bjälkarna, lager under och skiva underst.

### 9. Interna länkar

**Ut, nya:** `/fukt/torpargrund/` (finns kanske redan efter omgång D, kontrollera) och `/fukt/fukt-i-krypgrund/` i den nya H2:n. Samma mål länkas inte två gånger i samma H2.

**In:** inget krav, eftersom sidan har inlänkar. `/fukt/fukt-i-krypgrund/` länkar redan hit i H2 "Vad du gör vid varje mätvärde". Lägg ingen andra länk i samma H2.

### 10. Strukturerad data och komponenter

Ingen ändring. `dateModified` följer `uppdaterad`.

### 11. Bättre än ettan, för utbyggnaden

1. **Arbetsgången underifrån** i ordning, med tillverkarens anvisning som källa.
2. **Underifrån skilt från att isolera marken**, med var och en av dem kopplad till fukten.

**Krav på faktabladet** (tillägg till sidans faktablad): tillverkarens anvisning för krypgrundsbjälklag underifrån, ordagrant. Boverkets energiguide om bjälklag mot krypgrund. Arbetsmiljöverket om arbete med mineralull, om det citeras.

### 12. Fällor

- **Krypgrundens fukt och gränser** ägs av `/fukt/fukt-i-krypgrund/`.
- **Inga nya U-värden eller kronor.** De står i H2 3.
- **Inga befintliga H2 skrivs om.**
- **Länkar i Faq-svar** fungerar inte.

---

## Kontroll efter utbyggnaden, 2026-10-08

SEO och GEO-agenten har läst `src/content/guider/grund/isolera-krypgrund.mdx` (committad lokalt) mot punkt 1 till 12. **Godkänd av SEO och GEO**, med en ändring i kortSvar.

- **Den nya H2:n** "Isolera krypgrunden underifrån och låt golvet ligga kvar" bär "underifrån" och "krypgrund" och står mellan bjälklaget och marken, som checklistan ville.
- **Rättelserna i gamla stycken godkänns.** De följer av det nya innehållet, och alla har källa:
  - cellplast under bjälkarna med Fuktcentrum, Svenskt Trä och SBUF 11148
  - Fuktcentrums varning om markplasten
  - Rockwools 500 mm
  - partikelfilter i stället för FFP3
  - ordningen i tio steg
  - den kortade H2:n om bjälklaget

  Det är sakrättelser och ingen omskrivning.
- **H2:n "Ångspärren sitter ovanpå, aldrig under isoleringen" står kvar.** Den säger fortfarande vad texten under säger: ångspärren hör hemma på ovansidan och plastfolie ska inte ligga under ullen. Att vindskyddet under ullen också nämns gör inte rubriken fel.
- **Mönstren "först" (14), "där nere" (6) och "står i [länk]" (6)** är röst och läsbarhet. De påverkar inte sökningen och går till läsvarvet. Ankarna i "står i [länk]" säger vart länken leder, och det räcker för SEO.

**Ändras:**

1. **KortSvar, "Isoleringen är alltid sista steget":** det stämmer inte längre. I ordningen kommer isoleringen i steg 8 av 10, före ångspärren och uppföljningen. KortSvar är stycket AI-svaren lyfter, så det ska vara exakt. Skriv till exempel att isoleringen kommer efter allt som tar bort fukten. Hantverkaren formulerar.

**Får ändras:**

- **Description** får uppdateras nu, eftersom sidans innehåll har ändrats i sak. En ändrad description kostar inte samma omindexering som en ändrad title. Förslag i sak: nämn underifrån, och behåll att fukten mäts först. Inget "Se …", och 120 till 155 tecken. Den gamla meningen "Mät fukten först, annars blir grunden blötare" stämmer fortfarande och får stå kvar om hantverkaren vill. **Title och H1 ändras inte.**
