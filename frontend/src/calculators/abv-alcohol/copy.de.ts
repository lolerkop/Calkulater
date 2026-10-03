import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const abvAlcoholCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für den Alkoholgehalt aus der Stammwürze",
  "slug": "alkoholgehalt-aus-dichte",
  "shortDescription": "Alkoholgehalt aus Anfangs- und Endstammwürze.",
  "seoTitle": "Alkoholgehalt aus der Dichte berechnen — Bier, Wein, Met",
  "seoDescription": "Berechne den Alkoholgehalt in Volumenprozent aus Anfangs- und Enddichte, mit dem scheinbaren Vergärungsgrad.",
  "h1": "Rechner für den Alkoholgehalt aus der Stammwürze",
  "keywords": [
    "Alkoholgehalt berechnen",
    "Stammwürze",
    "Vergärungsgrad",
    "Alkohol aus Dichte"
  ]
},
  ...contractContent.de,
};
