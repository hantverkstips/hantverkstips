# Faktablad: rakna/kallare

Ur verktygssidan 2026-09-20, före omskrivningen. Fyra filer: `src/pages/rakna/kallare.astro`, `src/components/kalkyl/KallareForm.astro`, `src/lib/kalkyl/kallare.ts`, raden i `src/lib/kalkyl/register.ts`. Konstanter, källor, logik och tester rörs inte.

## Konstanter och tal

- KRITISK_RF 75 procent relativ luftfuktighet, Boverket BBR 6:52. HYGROSTAT_RF 60 (antagande, guidens). TEJPTEST_DYGN 2 (Gör Det Själv säger två veckor, målerifirma ett till två dygn). HYGROMETER_DYGN 7 (antagande). KAN_HALLA_AR 50 (Villaägarna, villkor: används som källare).
- AVFUKTARE_KR 5 948 (Wood's SW39FW, Proffsmagasinet, läst 16 september 2026). FUKTUTREDNING_KR 5 355 inkl. moms (Ocab, hämtat 18 september 2026). DRANERING_KR_PER_LOPMETER 3 000 i arbete (Villaägarna), kan bli det dubbla. VILLAGRUND_LOPMETER 40, ger 120 000 kr.
- TAK_KVM 150, REGN_MM 20, REGN_LITER 3 000 (Anticimex). Kondenssäsong juli till september.
- Källarvägg gärna 12 grader; luft på 20 grader och 70 procent RF fäller ut vatten vid 14,4 grader (daggpunkt).
- Kondens eller sorption: 10 grader vårt val (Dantherm 8, Ljungby Fuktkontroll 15). Radon 200 becquerel per kubikmeter (Strålsäkerhetsmyndigheten), verktyget ser det inte.
- Gränser hygrometer 1 till 100 procent.
- Standard: inget ikryssat, tejptest inte gjort, hygrometer null, sommar, källare.

## Sex symptomrader (etikett, trolig, nästa steg är låsta till guidens tabell av testet)

salt → Markfukt, Tejptestet (Villaägarna). flagnar → Markfukt, Tejptestet (guiden). imma → Kondens, Tejptestet sedan hygrometer (guiden). horn → Kondens, Flytta hyllan, mät om efter två veckor (guiden). rinner → Läckage, Följ vattnet uppåt och utåt (guiden). lukt → Hög luftfuktighet, Hygrometer i en vecka (Folkhälsomyndigheten).

## Prioritet (antagande, vår)

Läckage först (akut, tejptestet ser det aldrig), sedan tejptestet (mätning), sedan symptomen, hygrometern sist (säger fuktig luft, aldrig varifrån). Markfukt och kondens samtidigt utan tejptest = oklart. Torr plast = oklart, fel vägg.

## Testlåsta strängar i modulen

- Tom: /ficklampa och en torr trasa/. Salt: kalla /Villaägarna, saltutfällningar/. Läckage: /Följ vattnet uppåt och utåt/, /väntar inte till helgen/. Lukt: /Folkhälsomyndigheten/. Tejp markfukt: /skyddet mot den hör hemma på utsidan av väggen/i, "3 000 kr per löpmeter". Kondens: "5 948 kr", hygrostaten ... "60 procent". Torrt: /betyder inte att du är frisk/, /fel vägg/. RF över: /över Boverkets gräns/. Sommar+kondens: /Vädra inte en varm eftermiddag/. Vinter+kondens: /uteluften är torr på vintern/, /tvätt som torkar inomhus/. Källare: "kan fungera i 50 år". Bebodd: "50 år för en dränering gäller uttryckligen", /olägenhet för hälsan/. Utredning: "5 355 kr inklusive moms". Ogjort tejptest: "vänta minst 2 dygn".
- gorInte: [0] /avfuktare mot markfukt/, [1] /torr plast/i, [2] /fuktutredning med mätvärden/, [3] /tät plastmatta mot källarväggens utsida/.
- Fel: /mellan 1 och 100 procent/.
- Varje regel bär källa. Ordning titta, tejpa, mat, atgarda.

## Regler (innehåll)

- Titta: en rad per kryss med guidens tolkning. Tom: ficklampa, torr trasa, torka där väggen är mörkast, känn på golvet längs ytterväggarna, dra ut det som står tätt.
- Tejpa: markfukt (Boverket: skyddet på utsidan), kondens (enda fallet där maskin är rätt), torrt (fel vägg), ogjort (plastfolie 50 × 50 cm, minst 2 dygn). Om tejpat ut: två lappar, golv och brösthöjd, Polygon: vatten stiger högre i finporösa material.
- Mät: hygrometer inte avläst (7 dygn), över 75, under 75 (bakom skiva fuktigare). Kondens+sommar: vädra tidigt på morgonen. Kondens+vinter: leta inne, tvätt. Bebodd: 50 år gäller källare som källare, olägenhet för hälsan. Källare: gräv inte i förebyggande syfte.
- Åtgärda: läckage (följ vattnet, regn eller dusch; väntar inte till helgen, syll och bjälklag, fotografera). Markfukt (Boverket utsidan; stuprör, markfall, dagvattenbrunn, 150 kvm ger 3 000 liter; dränering 3 000 kr/lm, 40 lm = 120 000). Kondens (5 948 kr, 40 kvm, hygrostat 60; över 10 grader kondensavfuktare, annars sorption). Hög RF (tejptest nästa, flytta tvätten, hyllor en handsbredd). Oklart (köp inget). Utredning (Ocab 5 355).

## Sidan

- Tre orsaker: markfukt kapillär (Boverket), skydd på utsidan, avfuktare fel (torkar, ökar avdunstning, suger mer); ytskikt diffusionsöppet, tät färg trycker upp i sjok; kondens 12 grader vägg, 14,4 grader daggpunkt vid 20 grader/70 procent; läckage på ett ställe, rörgenomföring, spricka, fönsterbrunn, stuprör; gissa fel: avfuktare 5 948 kr bortkastad, dränering tjugo gånger summan.
- Så bedömer vi, sex steg + "ordningen är vår". Tre saker verktyget inte ser: fukt i materialet, bakom skiva, radon.
- Illustration `rakna/kallare`: källare i genomskärning, tre numrerade stopp: väggen med flagnande färg och salt nedtill, plast med tejp över hörnen "markfukt eller kondens", hygrometer på hylla över 75 procent RF.
- Tfoot: "Priserna är hämtade 16 och 18 september 2026" (vårt datum, bort). Behåll att pris är färskvara och att Antagande är våra.
- Antagandetabell 20 rader (rörs bara i text). Prisdatum i källcellerna behålls som del av talet.
- Faq tre: vad göra, markfukt eller kondens, besiktiga själv.
- Interna länkar: /fukt/fukt-i-kallaren/ (×2 + formulärets länk), /fukt/luftfuktighet-inomhus/, /grund/inreda-kallare/, /rakna/dranering/, /om/sa-testar-vi/, /fukt/sorptionsavfuktare/ (tabellen). Verktygskort avfuktare och dranering villkorade.
- Pennstreck-id: darfor-blev-svaret-sa, gor-inte-det-har, tre-orsaker, sa-bedomer-vi, las-vidare.

## Metadata

- Title 58 tecken, ska ner till högst 52 och börja med besiktningen/genomgången. H1 "Gå igenom källaren själv och få veta varifrån vattnet kommer" behålls, får inte bli samma som title.
- Description 156, ner till 120–155, "vad tejptestet gav" får gå.
- Register: namn ska leda med handlingen (inte "Fuktig källare"), rad mening med verb.
