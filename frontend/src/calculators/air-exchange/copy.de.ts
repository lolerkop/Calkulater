import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für den Luftwechsel",
  "slug": "luftwechselrate-rechner",
  "shortDescription": "Nötiger Volumenstrom aus Raumvolumen und Luftwechselrate.",
  "seoTitle": "Luftwechselrate berechnen — nötiger Volumenstrom",
  "seoDescription": "Berechne den nötigen Volumenstrom aus Raumfläche, Raumhöhe und Luftwechselrate — in m³/h und l/s.",
  "h1": "Rechner für den Luftwechsel",
  "keywords": [
    "Luftwechselrate berechnen",
    "Volumenstrom Lüftung",
    "Luftwechsel je Stunde",
    "Lueftung Volumenstrom"
  ]
};

export const airExchangeCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
