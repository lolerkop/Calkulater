import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const orbitalPeriodCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Umlaufzeit",
  "slug": "umlaufzeit-rechner",
  "shortDescription": "Umlaufzeit aus der Masse des Zentralkörpers und dem Bahnradius.",
  "seoTitle": "Umlaufzeit berechnen — Satellit und geostationäre Bahn",
  "seoDescription": "Berechne Umlaufzeit und Bahngeschwindigkeit einer Kreisbahn aus der Masse des Zentralkörpers und dem Bahnradius.",
  "h1": "Rechner für die Umlaufzeit",
  "keywords": [
    "Umlaufzeit berechnen",
    "Bahngeschwindigkeit",
    "geostationäre Bahn",
    "Satellit Umlauf"
  ]
},
  ...contract.de,
};
