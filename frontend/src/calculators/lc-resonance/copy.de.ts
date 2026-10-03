import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const lcResonanceCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für die LC-Resonanzfrequenz",
    "slug": "lc-resonanzfrequenz",
    "shortDescription": "Frequenz eines Schwingkreises aus Induktivität und Kapazität.",
    "seoTitle": "LC-Resonanzfrequenz berechnen",
    "seoDescription": "Berechne die Resonanzfrequenz eines Schwingkreises aus der Induktivität in Mikrohenry und der Kapazität in Nanofarad.",
    "h1": "Rechner für die LC-Resonanzfrequenz",
    "keywords": [
      "Resonanzfrequenz berechnen",
      "LC-Schwingkreis",
      "Schwingkreis",
      "Thomsonsche Formel"
    ]
  },
  ...contract.de,
};
