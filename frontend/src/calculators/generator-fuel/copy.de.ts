import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const generatorFuelCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für den Kraftstoffverbrauch eines Stromerzeugers",
  "slug": "stromerzeuger-verbrauch",
  "shortDescription": "Wie viel Kraftstoff ein Stromerzeuger in einer Schicht verbraucht und was das kostet.",
  "seoTitle": "Kraftstoffverbrauch eines Stromerzeugers berechnen",
  "seoDescription": "Berechne den Kraftstoffverbrauch eines Stromerzeugers aus Last, spezifischem Verbrauch und Laufzeit, samt Kosten.",
  "h1": "Rechner für den Kraftstoffverbrauch eines Stromerzeugers",
  "keywords": [
    "Stromerzeuger Verbrauch",
    "Notstromaggregat Kraftstoff",
    "spezifischer Verbrauch",
    "Generator Verbrauch"
  ]
},
  ...contractContent.de,
};
