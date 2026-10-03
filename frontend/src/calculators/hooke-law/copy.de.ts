import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hookeLawCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner zum hookeschen Gesetz",
  "slug": "hookesches-gesetz",
  "shortDescription": "Federkraft, Auslenkung oder Federkonstante, dazu die gespeicherte Energie.",
  "seoTitle": "Hookesches Gesetz berechnen — Federkraft, Auslenkung und Konstante",
  "seoDescription": "Berechne Federkraft, Auslenkung oder Federkonstante nach dem hookeschen Gesetz F = k·x, samt der in der Feder gespeicherten Energie.",
  "h1": "Rechner zum hookeschen Gesetz",
  "keywords": [
    "hookesches Gesetz",
    "Federkraft berechnen",
    "Federkonstante",
    "Federenergie"
  ]
},
  ...contract.de,
};
