import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Dämmstoffrechner",
  "slug": "daemmstoff-rechner",
  "shortDescription": "Volumen, Zahl der Platten und Pakete aus Fläche und Dicke.",
  "seoTitle": "Dämmstoff berechnen — Volumen, Platten und Pakete",
  "seoDescription": "Berechne Volumen, Zahl der Platten und Zahl der Pakete an Dämmstoff aus der Fläche und der Schichtdicke.",
  "h1": "Dämmstoffrechner",
  "keywords": [
    "Dämmstoff berechnen",
    "Dämmplatten Menge",
    "Dämmung Kubikmeter",
    "Daemmstoff berechnen"
  ]
};

export const insulationCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
