import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const singlePhaseCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für Wechselstromleistung einphasig",
  "slug": "einphasige-leistung",
  "shortDescription": "Wirk-, Schein- und Blindleistung eines einphasigen Stromkreises oder der Strom aus der Leistung.",
  "seoTitle": "Einphasige Leistung berechnen — Wirk-, Schein-, Blindleistung",
  "seoDescription": "Berechne Wirk-, Schein- und Blindleistung eines einphasigen Stromkreises aus Spannung, Strom und Leistungsfaktor oder den Strom aus der Leistung.",
  "h1": "Rechner für Wechselstromleistung einphasig",
  "keywords": [
    "einphasige Leistung berechnen",
    "Strom aus Leistung",
    "Leistungsfaktor",
    "Scheinleistung"
  ]
},
  ...contractContent.de,
};
