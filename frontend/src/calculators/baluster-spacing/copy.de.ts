import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für den Geländerstababstand",
  "slug": "gelaenderstaebe-abstand",
  "shortDescription": "Wie viele Geländerstäbe ein Feld bei höchstzulässiger Lücke braucht.",
  "seoTitle": "Geländerstäbe berechnen — Anzahl aus der Höchstlücke",
  "seoDescription": "Berechne, wie viele Geländerstäbe ein Feld braucht, aus Stabbreite und höchstzulässiger Lücke, mit tatsächlicher Lücke und Achsabstand.",
  "h1": "Rechner für den Geländerstababstand",
  "keywords": [
    "Geländerstäbe berechnen",
    "Abstand Geländerstäbe",
    "Höchstlücke Geländer",
    "Gelaenderstaebe"
  ]
};

export const balusterSpacingCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
