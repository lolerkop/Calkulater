import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Zaunrechner",
  "slug": "zaun-rechner",
  "shortDescription": "Pfosten, Felder und Riegel für einen Zaun gegebener Länge.",
  "seoTitle": "Zaun berechnen: Pfosten, Felder und Riegel",
  "seoDescription": "Ermittle, wie viele Pfosten, Felder und Meter Riegel ein Zaun braucht, samt Torpfosten und dem tatsächlichen Abstand.",
  "h1": "Zaunrechner",
  "keywords": [
    "Zaun berechnen",
    "Pfosten berechnen",
    "Zaunfelder",
    "Zaunpfosten Abstand"
  ]
};

export const fenceCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
