/**
 * Räkna själv-indexets grupper (/rakna/), i den ordning sidan visar dem. Varje
 * räknare i registret står i exakt en grupp, och modulen kastar vid import om
 * en räknare saknas, står i två grupper eller om en grupp nämner en okänd
 * slug. En ny räknare läggs alltså i en grupp i samma ändring som i registret.
 *
 * Rubrik och rad skrivs av hantverkaren (docs/briefer/texter-designlyft-2026-10-02.md);
 * en tom rad renderas inte. Ingen Astro-import.
 * Spec: docs/briefer/spec-designlyft-a-2026-10-02.md avsnitt 5.3.
 */
import { KALKYLATORER } from './register.ts';

export interface Raknegrupp {
  id: 'fukt' | 'el' | 'kostnad' | 'inne' | 'ute';
  rubrik: string;
  rad: string;
  slugs: readonly string[];
}

export const RAKNEGRUPPER: readonly Raknegrupp[] = [
  {
    id: 'fukt',
    rubrik: 'Fukt och kondens', // grupper.fukt.rubrik
    rad: 'Hitta orsaken först och räkna på maskinen sist.', // grupper.fukt.rad
    slugs: ['daggpunkt', 'fuktkvot', 'avfuktare', 'kallare', 'elkostnad'],
  },
  {
    id: 'el',
    rubrik: 'Isolering och rotavdrag', // grupper.el.rubrik
    rad: 'Se vad isoleringen sparar och vad rotavdraget blir.', // grupper.el.rad
    slugs: ['u-varde', 'rotavdrag'],
  },
  {
    id: 'kostnad',
    rubrik: 'Vad jobbet kostar', // grupper.kostnad.rubrik
    rad: 'Arbete och material står för sig, som i en offert.', // grupper.kostnad.rad
    slugs: ['kok-kostnad', 'badrum-kostnad', 'takbyte', 'dranering'],
  },
  {
    id: 'inne',
    rubrik: 'Inne i huset', // grupper.inne.rubrik
    rad: '', // grupper.inne.rad
    slugs: ['innervagg', 'gipsplugg', 'gipsskruv', 'kvadratmeter', 'trappa'],
  },
  {
    id: 'ute',
    rubrik: 'Altan, fasad och bygglov', // grupper.ute.rubrik
    rad: 'Börja med lovet och ta virket och färgen sedan.', // grupper.ute.rad
    slugs: ['bygglov-altan', 'grannemedgivande', 'altan', 'kontrollplan', 'mala-ute', 'fasadyta', 'takavvattning'],
  },
];

/* Kontrollen vid import: varje räknare i exakt en grupp, inga okända slugs. */
{
  const kanda = new Set(KALKYLATORER.map((k) => k.slug));
  const sedda = new Map<string, string>();
  for (const g of RAKNEGRUPPER) {
    for (const s of g.slugs) {
      if (!kanda.has(s)) throw new Error(`[grupper] Gruppen ${g.id} nämner "${s}", som inte finns i src/lib/kalkyl/register.ts`);
      const forra = sedda.get(s);
      if (forra) throw new Error(`[grupper] "${s}" står i både ${forra} och ${g.id}`);
      sedda.set(s, g.id);
    }
  }
  for (const s of kanda) {
    if (!sedda.has(s)) throw new Error(`[grupper] Räknaren "${s}" står inte i någon grupp i src/lib/kalkyl/grupper.ts`);
  }
}
