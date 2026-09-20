# Faktablad: / (startsidan)

Ur `src/content/sidor/startsida.mdx`, läst 2026-09-20. Sidmallen `src/pages/index.astro` renderar H1 ur `title`, det enda stycket i heron, och bygger resten själv (ämnesrad, rutnät, bäst i test, räkna själv, "Så jobbar vi"). Bara innehållsfilen rörs.

## Frontmatter

- title: renderas som H1. I dag "Kunskap om huset, från källaren till taket", 42 tecken. Krav: ett påstående om huset, ordet hus, inte om verktygsköp. "från källaren till taket" får gå.
- seoTitle: saknas i dag; sidmallen faller då tillbaka på "Hantverkstips, kunskap om huset från källaren till taket". Sätts seoTitle vinner den. Title och H1 ska inte vara samma sträng.
- description: 136 tecken i dag, håller. Behåll orden guider, kalkylatorer, hus. Ska lova kunskap, inte produkter. Sidofras "skruv i gipsvägg" eller motsvarande.
- justNu: samling guider, id avfuktare-kallare. Chefredaktörens fält, rörs inte. Kommentaren ovanför står kvar.
- uppdaterad: sätts till 2026-09-20
- utkast: false

## Stycket

- Ett enda stycke, 70 till 120 ord. Inga H2.
- Påståenden i dag: det mesta med huset går att lösa själv; ett tejptest på källarväggen visar på två dygn varifrån vattnet kommer; räkna först ut hur stor avfuktare rummet kräver, sedan priser; guiderna skrivs av folk som läser databladen, räknar själva och säger ifrån när rätt svar är att låta bli.
- Den sista meningens innebörd (läser datablad, räknar själv, säger ifrån) är E-E-A-T-signalen och ska överleva, men formuleringen delas ordagrant med om-sidans description; en av dem byts.
- Formen "Fråga? Svar." upprepas tre gånger; ska varieras.
- Tre signaler ska finnas kvar: sajten handlar om huset och inte om butiken, någon räknar och läser datablad, svaret är ibland att låta bli.

## Länkar

Exakt två i heron, inte fler:

- `/fukt/fukt-i-kallaren/`, i dag med ankaret "Ett tejptest på källarväggen visar på två dygn varifrån vattnet kommer". Ankaret ska fortsätta bära frasen fukt i källaren och tejptestet.
- `/rakna/avfuktare/`, i dag med ankaret "Räkna först ut hur stor avfuktare rummet kräver". Ankaret ska fortsätta bära avfuktare.

## Utanför innehållsfilen, noteras bara

- Husskissen i heron har tom alt och ligger i sidmallen.
- Blocket "Så jobbar vi" i index.astro säger "Vi testar själva när vi kan..." och "Vårt val", "Alla vi granskat" i bäst i test-blocket är också "vi". Ligger i sidmallen, rörs inte av skribenten.
