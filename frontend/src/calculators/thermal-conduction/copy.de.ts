import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const thermalConductionCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Wärmeleitung",
  "slug": "waermeleitung-rechner",
  "shortDescription": "Wärmestrom, Wärmedurchlasswiderstand und U-Wert einer einzelnen Schicht.",
  "seoTitle": "Wärmeleitung berechnen — Wärmestrom und Widerstand",
  "seoDescription": "Berechne den Wärmestrom durch eine Dämm- oder Wandschicht: Wärmedurchlasswiderstand, U-Wert und Wärmestromdichte.",
  "h1": "Rechner für die Wärmeleitung",
  "keywords": [
    "Wärmeleitung berechnen",
    "U-Wert berechnen",
    "Wärmedurchlasswiderstand",
    "Waermeleitung"
  ]
},
  ...contract.de,
};
