import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für das Gewicht von Stangenmaterial",
  "slug": "stahlgewicht-rechner",
  "shortDescription": "Masse von Rund-, Vierkant- und Flachstahl aus Querschnittsmaß und Länge.",
  "seoTitle": "Gewicht von Stangenmaterial berechnen — rund, vierkant, flach",
  "seoDescription": "Berechne das Gewicht von Stangenmaterial: rund, vierkant oder flach, aus den Querschnittsmaßen, der Länge und der Dichte der Legierung.",
  "h1": "Rechner für das Gewicht von Stangenmaterial",
  "keywords": [
    "Stahlgewicht berechnen",
    "Gewicht Rundstahl",
    "Flachstahl Gewicht",
    "Metergewicht"
  ]
};

export const metalWeightCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
