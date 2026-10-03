import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Putzrechner",
  "slug": "putz-rechner",
  "shortDescription": "Wie viel Trockenmörtel eine Wand bei gegebener Schichtdicke braucht.",
  "seoTitle": "Putz berechnen — nötiger Trockenmörtel für eine Wand",
  "seoDescription": "Berechne die Masse an Putzmörtel und die Zahl der Säcke aus Wandfläche, Schichtdicke und Verbrauch.",
  "h1": "Putzrechner",
  "keywords": [
    "Putz berechnen",
    "Putzmörtel Menge",
    "Gipsputz Verbrauch",
    "Putz Saecke"
  ]
};

export const plasterCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
