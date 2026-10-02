/**
 * Säsongsraden på startsidan: en mening per månad om vad som är aktuellt i
 * huset, med en länk. Bygget väljer månaden ur byggdatumet i svensk tid, så
 * sidan byts vid första bygget i en ny månad. Säsongsetiketten ovanför H1 och
 * rubriken Börja här tar månadsnamnet ur samma val.
 *
 * Texterna skrivs av hantverkaren (docs/briefer/texter-designlyft-2026-10-02.md):
 * `fras` är meningen, `lank` de ord i frasen som blir länk, ordagrant ett
 * utsnitt ur `fras`, och `href` en publicerad sida med avslutande snedstreck.
 * Ingen Astro-import: scripts/kontrollera-innehall.ts läser SASONG och
 * kontrollerar varje href som en intern länk.
 * Spec: docs/briefer/spec-designlyft-a-2026-10-02.md avsnitt 5.1.
 */

export interface Sasongspost {
  fras: string;
  lank: string;
  href: string;
}

type Manad = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const SASONG: Record<Manad, Sasongspost> = {
  1: {
    fras: 'Inomhusluften är torr i januari, och rätt luftfuktighet inomhus beror då på den kallaste ytan i rummet.', // sasong.1.fras
    lank: 'rätt luftfuktighet inomhus', // sasong.1.lank
    href: '/fukt/luftfuktighet-inomhus/', // sasong.1.href
  },
  2: {
    fras: 'När januaris elräkning har kommit är det läge att gå upp på vinden. Tilläggsisolering lönar sig om du tätar först.', // sasong.2.fras
    lank: 'Tilläggsisolering lönar sig', // sasong.2.lank
    href: '/el/tillaggsisolera-vind/', // sasong.2.href
  },
  3: {
    fras: 'I mars ritar många sin altan, och då ska du ta reda på om altanen behöver bygglov innan virket beställs.', // sasong.3.fras
    lank: 'om altanen behöver bygglov', // sasong.3.lank
    href: '/altan/bygglov-altan/', // sasong.3.href
  },
  4: {
    fras: 'Altanbyggena börjar i april, och ligger din altan nära tomtgränsen kan du behöva ett skriftligt grannemedgivande.', // sasong.4.fras
    lank: 'ett skriftligt grannemedgivande', // sasong.4.lank
    href: '/rakna/grannemedgivande/', // sasong.4.href
  },
  5: {
    fras: 'Målarsäsongen börjar i maj, men färgen måste hinna torka före kvällens dagg. Räkna på dagens väder och se när du ska sluta.', // sasong.5.fras
    lank: 'Räkna på dagens väder', // sasong.5.lank
    href: '/rakna/mala-ute/', // sasong.5.href
  },
  6: {
    fras: 'Bygger du altan i juni räcker det med altanens mått för att få en inköpslista till bygghandeln.', // sasong.6.fras
    lank: 'en inköpslista till bygghandeln', // sasong.6.lank
    href: '/rakna/altan/', // sasong.6.href
  },
  7: {
    fras: 'Ska fasaden målas på semestern i juli börjar jobbet med att tvätta den och låta den torka.', // sasong.7.fras
    lank: 'tvätta den och låta den torka', // sasong.7.lank
    href: '/fasad/tvatta-fasad/', // sasong.7.href
  },
  8: {
    fras: 'I augusti är källarluften som fuktigast, så det är nu du ser hur stor avfuktare rummet kräver.', // sasong.8.fras
    lank: 'hur stor avfuktare rummet kräver', // sasong.8.lank
    href: '/rakna/avfuktare/', // sasong.8.href
  },
  9: {
    fras: 'Badrum och kök planeras ofta på hösten, och om du vet vad badrummet kostar post för post blir offerterna lättare att läsa.', // sasong.9.fras
    lank: 'vad badrummet kostar post för post', // sasong.9.lank
    href: '/rakna/badrum-kostnad/', // sasong.9.href
  },
  10: {
    fras: 'Luktar källaren instängt i oktober kan ett tejptest på väggen visa på två dygn varifrån fukten kommer.', // sasong.10.fras
    lank: 'ett tejptest på väggen', // sasong.10.lank
    href: '/fukt/fukt-i-kallaren/', // sasong.10.href
  },
  11: {
    fras: 'Med novembers kalla nätter kommer imman på fönstrens insida, och den är ofarlig så länge kondensen inte rinner varje morgon.', // sasong.11.fras
    lank: 'kondensen inte rinner varje morgon', // sasong.11.lank
    href: '/fukt/kondens-pa-fonster/', // sasong.11.href
  },
  12: {
    fras: 'Rotavdraget räknas på det år du betalar fakturan, och varje år har sitt eget maxbelopp. Räkna ut hur mycket som dras av.', // sasong.12.fras
    lank: 'Räkna ut hur mycket som dras av', // sasong.12.lank
    href: '/rakna/rotavdrag/', // sasong.12.href
  },
};

/** Månaden, 1 till 12, i Europe/Stockholm. Utan argument: nu, alltså byggdagen. */
export function byggmanad(nu: Date = new Date()): number {
  const manad = new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: 'Europe/Stockholm' }).format(nu);
  return Number(manad);
}

/** "januari" till "december", gemener. */
export function manadsnamn(m: number): string {
  if (!Number.isInteger(m) || m < 1 || m > 12) throw new Error(`[sasong] ${m} är ingen månad`);
  return new Intl.DateTimeFormat('sv-SE', { month: 'long', timeZone: 'UTC' })
    .format(new Date(Date.UTC(2000, m - 1, 1)))
    .toLowerCase();
}

/** Om månaden ligger i säsongen. Tål säsonger över årsskiftet, som [11, 2]. */
export function iSasong(sasong: readonly [number, number], m: number): boolean {
  const [fran, till] = sasong;
  return fran <= till ? m >= fran && m <= till : m >= fran || m <= till;
}

/** Månadens fras delad kring länken. Kastar när länkens ord inte står i frasen. */
export function sasongsrad(m: number): { fore: string; lank: string; efter: string; href: string } {
  const post = SASONG[m as Manad];
  if (!post) throw new Error(`[sasong] ${m} är ingen månad`);
  const i = post.fras.indexOf(post.lank);
  if (post.lank === '' || i === -1) {
    throw new Error(`[sasong] månad ${m}: länkens ord "${post.lank}" står inte i frasen "${post.fras}"`);
  }
  return {
    fore: post.fras.slice(0, i),
    lank: post.lank,
    efter: post.fras.slice(i + post.lank.length),
    href: post.href,
  };
}
