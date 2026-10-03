import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const recipeCostCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Kosten eines Rezepts",
  "slug": "rezeptkosten-rechner",
  "shortDescription": "Kosten eines Gerichts aus der Zutatenliste und der Preis einer Portion.",
  "seoTitle": "Rezeptkosten berechnen und Kosten je Portion",
  "seoDescription": "Ermittle die Kosten eines Gerichts aus einer Liste von Zutaten mit Preisen und sieh, was eine Portion kostet.",
  "h1": "Rechner für die Kosten eines Rezepts",
  "keywords": [
    "Rezeptkosten berechnen",
    "Kosten je Portion",
    "Zutatenkosten",
    "Gericht Kosten"
  ]
},
  ...contractContent.de,
};
