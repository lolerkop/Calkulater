import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const heatIndexCopyDe: CalculatorCopy = {
 ...{
  "name": "Rechner für den Hitzeindex",
  "slug": "hitzeindex-rechner",
  "shortDescription": "Ein illustrativer Hitzeindex aus der Regression ohne Zusatzkorrekturen.",
  "seoTitle": "Hitzeindex berechnen — gefühlte Temperatur und Feuchte",
  "seoDescription": "Neungliedrige Rothfusz-Regression ohne zusätzliche NWS-Korrekturen: Hitzeindex, Temperaturdifferenz und Kategorien auf der °F-Skala.",
  "h1": "Rechner für den Hitzeindex",
  "keywords": [
    "Hitzeindex berechnen",
    "gefühlte Temperatur",
    "Schwüle",
    "Hitzeindex Feuchte"
  ]
},
 ...contract.de,
};
