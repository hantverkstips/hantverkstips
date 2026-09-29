/**
 * Källraden ("Källorna står i tabellen längre ner" och motsvarande) står högst
 * en gång på en räknarsida (stil-och-design). Har stycket ovanför regellistan
 * redan raden visas den inte under reglerna; annars står den under den sista
 * regeln vars källa är en förmedlare, alltså den sista utan namngivna källor.
 *
 * @param kallor De namngivna källorna per regel, i listans ordning.
 * @param redanVisad Om raden redan står ovanför regellistan.
 * @returns Index för regeln som får raden, eller -1 när ingen ska ha den.
 */
export function kallradEfterRegel(kallor: readonly (readonly unknown[])[], redanVisad: boolean): number {
  if (redanVisad) return -1;
  for (let i = kallor.length - 1; i >= 0; i--) {
    if ((kallor[i] ?? []).length === 0) return i;
  }
  return -1;
}
