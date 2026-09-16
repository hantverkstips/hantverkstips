# Dimensioneringstabell, avfuktare

Underlag till köpguiden /fukt/avfuktare-kallare/ (SEO-granskningen 2026-09-16, avsnitt 2 punkt 1).
Skribenten lägger in tabellen under H2 "Så stor avfuktare behöver du".

Talen är **märkt kapacitet i liter per dygn**, alltså siffran på lådan, inte vad maskinen tar upp i din källare.
Kondens gäller utrymmen över 15 grader, sorption utrymmen mellan 5 och 15 grader. Under 5 grader räknar vi inte.
Fuktnivån är den du mäter i dag: medel 60 till 70 % RF, hög 70 till 80 %, mycket hög över 80 %.

| Yta | Medel, kondens | Medel, sorption | Hög, kondens | Hög, sorption | Mycket hög, kondens | Mycket hög, sorption |
|---|---|---|---|---|---|---|
| 20 kvm | 8 | 5 | 11 | 6 | 17 | 8 |
| 40 kvm | 16 | 10 | 22 | 12 | 33 | 16 |
| 60 kvm | 24 | 14 | 33 | 17 | 49 | 23 |
| 80 kvm | 32 | 19 | 43 | 23 | 65 | 31 |

Antaganden: takhöjd 2,2 m, målnivå 55 % RF, 0,5 luftomsättningar i timmen, uteluft 10,0 g/m³ (augusti),
markfukt 10, 40 respektive 100 g per kvm och dygn, marginal 1,3, och omräkning från märkt kapacitet till
verklig med 0,30 vid 15 grader (kondens) och 0,80 vid 10 grader (sorption). Varje konstant med källa eller
med ordet antagande står i src/lib/kalkyl/avfuktare.ts och i docs/briefer/underlag-kalkyl-avfuktare.md.
Samma formel som kalkylatorn på /rakna/avfuktare/, så tabellen och räknaren kan inte säga olika saker.

Genererad av scripts/tabell-dimensionering.ts. Ändra inte siffrorna för hand, kör om skriptet.
