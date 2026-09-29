# Texter till publiceringen av takpelaren, 2026-09-29

Skrivna av hantverkaren. Koordinatorn lägger in dem i publiceringscommitarna. Varje text står ordagrant. Radnumren gäller filerna den 29 september 2026.

## 1. Hubben, src/content/pelare/tak.mdx

Rad 3, `description` (135 tecken):

```
Här räknar du ut vad ett nytt tak kostar och vilken hängränna taket behöver, och läser om plåttak, takstolar och snörasskydd, med källor.
```

Rad 4, `ingress`:

```
Taket byts sällan, och därför vet få hur det är byggt när det väl är dags. Här ser du vad ett nytt tak eller nya rännor kostar, vilka regler som gäller och vad du kan göra själv.
```

## 2. src/lib/pelare.ts, rad 37, `rad` för tak

Samma form som raderna för de andra pelarna:

```
rad: 'Plåttak, hängrännor, takstolar och snörasskydd.',
```

## 3. Registerposterna i src/lib/kalkyl/register.ts

Takbyte:

```
namn: 'Räkna ut vad det kostar att byta tak',
rad: 'Skriv in husets mått och takvinkel, så räknar jag ut takytan och vad ett nytt tak kostar efter rotavdraget.',
```

Takavvattning:

```
namn: 'Räkna ut takavvattningen för ditt tak',
rad: 'Mät huset eller takfallet, så får du hängrännans bredd, stuprörets storlek och hur många rör och krokar som går åt.',
```

## 4. Länkarna

Varje text ersätter kommentaren `{/* LÄNK NÄR SIDAN FINNS ... */}` på raden och läggs sist i stycket ovanför den, om inget annat står.

**src/content/kunskap/tak/takstolar.mdx, rad 96** (till plåttaket). Läggs sist i stycket om takbeläggningens vikt:

```
Går du åt andra hållet, från pannor till [plåttak](/tak/plattak/), blir taket lättare.
```

**src/content/kunskap/tak/takstolar.mdx, rad 140** (till plåttaket). Läggs sist i stycket om den låga lutningen:

```
Några plåtar klarar betydligt flackare tak, och jag har skrivit om [vilka plåtar som klarar låg lutning](/tak/plattak/) och gränsen för varje sort.
```

**src/content/kunskap/tak/snorasskydd.mdx, rad 96** (till hängrännorna). Läggs sist i stycket om ordningslagen:

```
Is och snö som rasar kan också ta [hängrännorna](/tak/hangrannor/) med sig.
```

**src/content/kunskap/tak/snorasskydd.mdx, rad 116** (till plåttaket). Läggs sist i stycket om falsade plåttak:

```
Byter du pannor mot plåt behöver skyddet nya fästen, och i övrigt handlar [bytet till plåttak](/tak/plattak/) mest om pris, underlag och bygglov.
```

**src/content/kunskap/tak/plattak.mdx, rad 185** (till hängrännorna). Läggs sist i stycket om takfotsbeslaget:

```
Precis under beslaget sitter [hängrännorna](/tak/hangrannor/), som tar emot vattnet från plåten.
```

**src/content/guider/el/tillaggsisolera-vind.mdx, rad 155** (till takstolarna). Läggs in efter meningen som börjar "Takstolar, stödben som lyfter takstolen ...":

```
Ju tätare [takstolarna](/tak/takstolar/) står, desto trängre blir det.
```

**src/pages/rakna/fasadyta.astro, rad 91 till 96, `LAS_VIDARE`**. Ny rad:

```
{ href: '/rakna/takbyte/', text: 'Räkna ut takytan och vad ett nytt tak kostar' },
```

## 5. src/content/guider/grund/dranera-hus.mdx, rad 103

De två första meningarna i stycket ("Sedan stuprören. De ska sluta i en ledning som för vattnet bort från huset, inte i en utkastare en halvmeter från sockeln.") ersätts med:

```
Sedan stuprören. Vattnet från [hängrännor och stuprör](/tak/hangrannor/) ska antingen ledas ner i en ledning eller via utkastaren ut i en ränndal, och aldrig släppas vid sockeln. Ystads kommun vill att ränndalen är minst 2 meter lång, och minst 3 meter om huset har källare.
```

Längre ner i samma stycke ändras också en mening, eftersom ränndalen nu är ett tredje alternativ. "De literna hamnar antingen i en ledning eller vid sockeln, och i det andra fallet arbetar den nya dräneringen mot stupröret varje gång det regnar." ersätts med:

```
De literna hamnar i en ledning, i en ränndal eller vid sockeln, och i det sista fallet arbetar den nya dräneringen mot stupröret varje gång det regnar.
```

Resten av stycket, från "Anticimex räknar ...", står kvar.

Ny post i `kallor`:

```
  - titel: Ystads kommun, Ränndal och koppla bort stuprör, uppdaterad 2026-04-21
    url: https://ystad.se/bygga-och-bo/vatten-och-avlopp/gor-plats-for-vattnet/ranndal-och-koppla-bort-stupror
```
