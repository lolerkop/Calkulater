import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const resistorColorCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für den Farbcode eines Widerstands",
    "slug": "widerstand-farbcode",
    "shortDescription": "Widerstandswert aus vier Farbringen, samt Toleranzbereich.",
    "seoTitle": "Farbcode eines Widerstands — Wert aus den Ringen",
    "seoDescription": "Lies einen Widerstand aus seinen Farbringen ab: zwei Ziffern, ein Multiplikator und eine Toleranz. Zeigt die Grenzen des Toleranzbereichs in Ohm.",
    "h1": "Rechner für den Farbcode eines Widerstands",
    "keywords": [
      "Widerstand Farbcode",
      "Farbringe Widerstand",
      "Widerstand ablesen",
      "Widerstandswert aus Farben"
    ]
  },
  ...contract.de,
};
