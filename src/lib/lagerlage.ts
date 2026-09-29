/**
 * Lagerstatus i fyra lägen, ur erbjudanden.lagerstatus. Ren modul utan
 * importer, så att scripts/test-lagerlage.mjs kan köra den utan Supabase.
 * produkter.ts exporterar funktionerna vidare; komponenterna importerar därifrån.
 *
 * NULL eller tomt betyder okänt och visas som köpbar (importen ska sätta
 * i_lager när det är kontrollerat). Texten kommer från butikens feed och
 * varierar i form: ej_bestallningsbar, "Ej beställningsbar", "slut i lager",
 * restnoterad, utgått.
 *
 * restnoterad (beslut UX och bygge 2026-09-29, avstämt med affiliateagenten):
 * butiken tar emot beställningen och levererar när varan kommer in, som
 * Acetec EvoDry 6H 2.0 med 7 till 9 dagar hos Proffsmagasinet
 * (docs/briefer/underlag-avfuktare-garage-2026-09-29.md). Knappen är en vanlig
 * annonslänk, läget skrivs i raden under knappen (lagerstatus visas när den är
 * negativ, docs/AFFILIATE.md avsnitt 4), och strukturdatan säger BackOrder.
 * Leveranstiden finns inte i databasen och visas därför inte.
 */
export type Lagerlage = 'kopbar' | 'restnoterad' | 'slut' | 'ej_bestallningsbar';

/** Går inte att beställa alls, till skillnad från tillfälligt slut. */
const EJ_BESTALLNINGSBAR = /ej.?best|icke.?best/i;
/** Går att beställa, levereras när butiken fått in varan. */
const RESTNOTERAD = /restnot|beställningsvara|bestallningsvara/i;
/** Övriga negativa lägen: tillfälligt slut, ej i lager, utgått. */
const SLUT = /slut|ej.?i.?lager|utg/i;

export function lagerlage(e: { lagerstatus: string | null } | null): Lagerlage {
  if (!e || !e.lagerstatus) return 'kopbar';
  const status = e.lagerstatus.trim();
  if (status === '') return 'kopbar';
  if (EJ_BESTALLNINGSBAR.test(status)) return 'ej_bestallningsbar';
  if (RESTNOTERAD.test(status)) return 'restnoterad';
  if (SLUT.test(status)) return 'slut';
  return 'kopbar';
}

/** Sant när erbjudandet inte går att köpa: slut eller ej beställningsbart. Restnoterat går att köpa. */
export function arSlut(e: { lagerstatus: string | null } | null): boolean {
  const l = lagerlage(e);
  return l === 'slut' || l === 'ej_bestallningsbar';
}

/** Sant bara för produkter butiken inte tar hem igen. Styr knapptexten. */
export function arEjBestallningsbar(e: { lagerstatus: string | null } | null): boolean {
  return lagerlage(e) === 'ej_bestallningsbar';
}

/** Sant när varan går att beställa men inte finns i lager. */
export function arRestnoterad(e: { lagerstatus: string | null } | null): boolean {
  return lagerlage(e) === 'restnoterad';
}
