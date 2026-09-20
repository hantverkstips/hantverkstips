# Faktablad: /rakna/avfuktare/

Ur `src/pages/rakna/avfuktare.astro`, `AvfuktareForm.astro`, `src/lib/kalkyl/avfuktare.ts` och registret, lästa 2026-09-20. Inget här ändras i sak.

## Metadata och namn

- SLUG avfuktare, VERKTYGSNAMN "Avfuktarkalkylator". Sidan har reklam={true}, butikNamn, produktkort variant kompakt modul kalkylator. Rörs inte.
- Title i dag inline i Bas, kolonform, 50 tecken. Ska bli konstant `titel`, utan kolon, med avfuktare och hur stor. Ordet kalkylator får gå.
- Description 130 tecken i dag. Krav: hur stor avfuktare eller liter per dygn + löftet att maskinerna visas. Uppräkningen får gå.
- H1 "Hur stor avfuktare behöver du?" behåll hur stor + avfuktare, inte samma som title.
- Registret: namn "Hur stor avfuktare behöver du?" (bär "hur stor avfuktare", ankare i sju inbäddningar). rad substantivramsa, skrivs om.

## Formuläret

- yta: Yta, kvm. takhojd: Takhöjd, m, hjälp "Krypgrund räknas också, ner till 0,5 m."
- fukt: radio FUKTNIVAER: medel "60 till 70 procent, lite unket", hog "70 till 80 procent, fuktfläckar och lukt", mycket_hog "över 80 procent, synligt mögel".
- temp: radio TEMPERATURVAL: over_15 "Uppvärmt, över 15 grader", fem_till_15 "Ouppvärmt, 5 till 15 grader", under_5 "Kallt, under 5 grader".
- Knapp Räkna ut.

## Konstanter (rörs inte)

- Magnus a 6,1094 b 17,625 c 243,04, ånghaltkonstant 216,68. Lawrence 2005 BAMS 86(2). Mättnadsånghalt 9,38 g/m³ vid 10 grader, 12,80 vid 15.
- MAL_RF 0,55. Källa BBR 6:52, 75 procent kritiskt, 55 ger marginal.
- Luftomsättning 0,5 oms/h. Antagande. FoHMFS 2014:18 ger 0,35 l/s per m² i bostad (= 0,5 oms/h vid 2,5 m tak). Att källare och krypgrund ventileras lika är egen gissning.
- Uteluft i augusti 10,0 g/m³. Källa SMHI 70 till 80 procent RF i juli i inlandet (vid 17 grader 10,1 till 11,6), försiktiga änden.
- MARGINAL 1,3. Antagande: maskinen ska klara dygnet på ca 18 timmar så hygrostaten hinner stänga av. LFS och Luftmiljöbutiken säger hellre för stor än för liten utan siffra. Christians mätning i höst avgör 1,2 eller 1,5.
- RF_START medel 0,65, hog 0,75, mycket_hog 0,85.
- Markfukt g per m² och dygn: medel 10, hog 40 (antagande, tät resp kapillärt fuktig betongplatta, svagaste led), mycket_hog 100 (källa Kurnitski 2001, Building and Environment 36(3), 86 till 137 från bar mark).
- Temperaturlägen: over_15: dim 15 grader, kondens, faktor 0,30 (0,25 till 0,35), interpolerat mellan Meacos 0,38 vid 20 och 0,20 vid 10, villkor 30 °C och 80 % RF. fem_till_15: dim 10, sorption, faktor 0,80 (0,75 till 1,0), Corroventa CTR STD-TT 0,76, Meaco DD8L 0,99, villkor 20 °C och 60 % RF. under_5: dim 5, sorption, 0,65, ger status utanfor.
- UNDER_FEM_GRADER: under 5 grader tappar även sorptionsmaskiner fart, kondensmaskiner står stilla, läs guiden om krypgrund. Testet matchar /Under 5 grader/.
- Över 300 kvm: utanfor, "två maskiner eller en fast installation, läs guiden om krypgrund". Testet matchar /två maskiner/.
- STANDARD 40 kvm, 2,4 m, hog, fem_till_15. GRANSER yta 5 till 300, takhöjd 0,5 till 4.
- Felsträngar "Ange yta mellan 5 och 300 kvm", "Ange takhöjd mellan 0,5 och 4 m".

## Räkningen (sju steg)

Intro: luften i rummet är inte problemet. Källare 96 m³ vid 15 grader och 75 procent bär 0,9 liter vatten, ner till 55 procent kostar ett kvarts glas. Maskinen köps för det som kommer in varje dygn; räknar på augusti.
1. Yta × takhöjd = volym. 40 kvm × 2,4 = 96 m³.
2. Temperaturvalet sätter dimensionerande temp, 15 uppvärmt, 10 ouppvärmt. Magnus ger vad luften rymmer, 55 procent av det är målet.
3. Engångsuttag: vattnet som redan står i luften, skillnaden mellan din nivå och 55 procent. Ett par deciliter.
4. Uteluften: halvt luftbyte i timmen bär in augustiluft på 10 g/m³; ju kallare utrymme desto mer blir över. Därför blir ett kallt utrymme fuktigare av att vädras.
5. Marken: 10, 40 eller 100 g per m² golv och dygn.
6. Summan × 1,3 så maskinen klarar dygnet på ca 18 timmar.
7. Omräkning till lådans tal. Tillverkarna mäter kondens vid 30 grader och 80 procent; kondensmaskin ger ungefär 30 procent av märkt vid 15 grader (får inte tunnas ut). Sorption mäts vid 20 grader och 60 procent, ger ca 80 procent vid 10 grader.

## Resultatspalten i dag

- "Minst X liter per dygn" märkt kapacitet, uppgiven vid villkor, motsvarar cirka Y liter i din källare vid Z grader. Volym m³ + fuktnivåetikett.
- typtext: kondens: leta efter kondensavfuktare, tar mest vatten per krona över 15 grader. sorption: kondensmaskin tappar fart under 15 grader, avfrostar mer än avfuktar.
- Intervall: omräkningen osäkrast, läs talet som A till B liter (ska stå kvar). "Köp hellre en för stor än för liten" står i spalten och i Faq; behåll en.
- Utanför spannet: Faktaruta med resultat.text + länk /fukt/ "Läs mer om fukt i huset".

## Under verktyget

- H2 Produkter som klarar det: produktkort (max tre, filtrerade på typ och kapacitet), annars Faktaruta "Vi har inte granskat någon avfuktare i den storleken" + länk /luftavfuktare/. Länk "Alla avfuktare vi granskat" /luftavfuktare/.
- H2 Så räknar vi (id sa-raknar-vi): skiss rakna/avfuktare (alt i dag 136 tecken: källare i genomskärning 2,2 m takhöjd, droppar på väggen, avfuktare på golvet som drar till sig fuktig luft). Intro + sju steg. H3 Vad siffrorna vilar på + tabell (tio rader, se konstanter). "Vi verifierar formeln med egna mätningar under hösten." Länk /om/sa-testar-vi/.
- Läs vidare: /luftavfuktare/, /fukt/avfuktare-kallare/, /fukt/sorptionsavfuktare/.
- Faq: Hur stor avfuktare behöver jag? (köps för vattnet som kommer in per dygn, augusti, marginal så maskinen klarar dygnet på ca 18 timmar, fyll i yta takhöjd fukt, liter per dygn). Varför stämmer inte kapaciteten på förpackningen? (mäts vid 30 grader 80 procent, aldrig så i svensk källare, ca en tredjedel i svalt utrymme; sorption torkar med fuktsugande hjul, tappar mindre). Kondens eller sorption? (temperaturen avgör, kondens i uppvärmd källare, sorption håller ner mot nollan, krypgrund, ouppvärmt garage, sommarstuga; hellre för stor; lank /fukt/sorptionsavfuktare/).

## Krav ur checklistan

- Sidofraser: hur stor avfuktare du behöver (H1), liter per dygn (ingress, spalt), märkt kapacitet mot verklig (H2 Så räknar vi), sorption eller kondens (under Så räknar vi + Faq).
- Behåll: tabell/koppling storlek till liter per dygn, varför lådans siffra inte gäller, kondens mot sorption med temperatur, väg till maskiner, elkostnaden nämns (saknas i dag, läggs till med länk /rakna/elkostnad/).
- Längd 800 till 1 000 plus Faq, inte över 1 100.
- Delningsfältet är ett skrivskyddat input, ingen knapp.
