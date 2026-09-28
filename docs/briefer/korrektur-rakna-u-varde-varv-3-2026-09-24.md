# Korrektur, /rakna/u-varde/, varv 3 (2026-09-24)

Jag har bara läst svenskan: grammatik, meningsbyggnad, idiom och kommatering. Radnumren gäller filerna som de ser ut i arbetskopian i dag. Rättelserna från varv 2 är införda och korrekta.

## src/pages/rakna/u-varde.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 69 | ”… och ta 1 delat med summan, så har du U-värdet i watt per kvadratmeter och grad, och ju lägre det är, desto mindre värme går ut.” | ”… och ta 1 delat med summan, så har du U-värdet i watt per kvadratmeter och grad. Ju lägre det är, desto mindre värme går ut.” | satsradning |
| 103 | ”väljer du luftspalt, och då räknas varken spalten eller teglet” | ”väljer du Ventilerad luftspalt, och då räknas varken spalten eller teglet” | benämning (alternativet heter Ventilerad luftspalt, och sidan skriver annars valen med sina egna namn: Inga reglar, Jag vet U-värdet) |

Övrig text (BESKRIVNING, titel, H1, INGRESS, övriga KORTSVAR, SKISS_ALT, SKISS_BILDTEXT, STEG, LAS_VIDARE, övriga FRAGOR, STANDARDVARNING, DELATEXT och rubrikerna i mallen) är korrekt svenska.

## src/components/kalkyl/UVardeForm.astro

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Inga egna texter utom knappen ”Räkna ut”, som är korrekt. All synlig text kommer ur TEXT.

## src/lib/kalkyl/u-varde.ts (TEXT)

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| 643 | ”Vill du ändå se vad mer isolering sparar, välj den under Det du lägger till och räkna igen.” | ”Vill du ändå se vad mer isolering sparar, välj isoleringen under Det du lägger till och räkna igen.” | syftning (”den” pekar på det obestämda ”mer isolering”) |
| 654 | ”så det lägre talet hör hemma i fältet för efter” | ”så det lägre talet hör hemma i fältet U-värde efter” | ihoptryckt |
| 654 | ”Har du skrivit dem i fel fält byter du bara plats på dem.” | ”Har du skrivit talen i fel fält byter du bara plats på dem.” | syftning (”dem” har inget plural att peka på, meningen före talar om ett tal) |
| 661 | ”för fem sorters värmepump” | ”för fem sorters värmepumpar” | numerus |
| 671 | ”${v.mm} mm till utöver de ${v.mmValt} du lagt in” | ”${v.mm} mm utöver de ${v.mmValt} du lagt in” | ord för mycket (”till” och ”utöver” säger samma sak) |
| 717 | ”Första gången räknar jag som om värmen antingen går rakt genom ullen eller rakt genom en regel” | ”Första gången räknar jag som om värmen antingen gick rakt genom ullen eller rakt genom en regel” | tempus (”som om” tar preteritum, och nästa mening har ”vore”) |
| 721 | ”Jag sätter den till noll, så är din konstruktion byggd som i exemplet kan du lägga till ungefär 0,01 på U-värdet här.” | ”Jag sätter den till noll. Är din konstruktion byggd som i exemplet kan du lägga till ungefär 0,01 på U-värdet här.” | meningsbyggnad (”så” följt av en villkorsbisats med omvänd ordföljd) |
| 721 | ”… för spik och skruv som går igenom den. I Svenskt Träs exempel är den 0,01.” | ”… för spik och skruv som går igenom den. I Svenskt Träs exempel är korrektionen 0,01.” | syftning (”den” närmast före är isoleringen) |

Övriga strängar i TEXT (övriga besked och rubrikfunktioner, fel, gorInte, regel, kolumn, klarar, aterbetalningSaknas, region, del, vp, antagande, form, spalt, darfor) är korrekt svenska. Elprisregeln blir med antaganden.ts: ”… SCB:s genomsnitt för juli till december 2025, för hushåll med 5 000 till 14 999 kWh per år, med elhandel, nätavgift, energiskatt och moms inräknade.”, vilket är korrekt.

## src/lib/kalkyl/register.ts, posten u-varde

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

Namnet och raden är korrekta.

## src/content/kunskap/el/u-varde.mdx, meningen om elkostnadsräknaren

| Rad | Felaktig lydelse | Rättad lydelse | Fel |
|---|---|---|---|
| – | – | – | – |

”Samma pris står förifyllt i elkostnadsräknaren, där du räknar ut vad en maskin kostar att ha igång.” är korrekt.

## Summering

10 fel: 2 i u-varde.astro, 0 i UVardeForm.astro, 8 i u-varde.ts, 0 i register.ts, 0 i u-varde.mdx. Inget av dem är grovt, och texten är i stort sett korrekt svenska. De åtta i TEXT bör rättas innan sidan publiceras, men det behövs inget fullt varv till. En kontroll av just de raderna räcker.
