import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const contributionMarginCopyDe: CalculatorCopy = {
  name: "Rechner für den Deckungsbeitrag",
  slug: "deckungsbeitrag-rechner",
  shortDescription: "Was vom Preis nach den variablen Kosten übrig bleibt.",
  seoTitle: "Deckungsbeitrag berechnen — je Stück und als Anteil",
  seoDescription: "Berechne den Deckungsbeitrag je Stück, seinen Anteil am Preis und den Deckungsbeitrag auf eine gegebene Menge.",
  h1: "Rechner für den Deckungsbeitrag",
  keywords: ["Deckungsbeitrag berechnen","variable Kosten","Deckungsbeitrag je Stück","Deckungsbeitragsrechnung"],
  ...contractContent.de,
};
