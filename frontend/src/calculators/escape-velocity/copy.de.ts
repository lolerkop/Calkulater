import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const escapeVelocityCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Fluchtgeschwindigkeit",
  "slug": "fluchtgeschwindigkeit-rechner",
  "shortDescription": "Die nötige Geschwindigkeit, um einen Planeten zu verlassen, aus Masse und Radius.",
  "seoTitle": "Fluchtgeschwindigkeit berechnen — aus Masse und Radius",
  "seoDescription": "Berechne Flucht- und Kreisbahngeschwindigkeit im newtonschen Kugelmodell aus Masse und Mittelpunktabstand, samt Fallbeschleunigung.",
  "h1": "Rechner für die Fluchtgeschwindigkeit",
  "keywords": [
    "Fluchtgeschwindigkeit berechnen",
    "zweite kosmische Geschwindigkeit",
    "Kreisbahngeschwindigkeit",
    "Fluchtgeschwindigkeit Erde"
  ]
},
  ...contract.de,
};
