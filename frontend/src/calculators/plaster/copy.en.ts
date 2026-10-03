import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Plaster calculator",
  "slug": "plaster-calculator",
  "shortDescription": "How much dry mix a wall needs at a given layer thickness.",
  "seoTitle": "Plaster calculator — dry mix needed for a wall",
  "seoDescription": "Calculate the mass of plaster mix and the number of bags from the wall area, layer thickness and consumption.",
  "h1": "Plaster calculator",
  "keywords": [
    "plaster calculator",
    "plaster consumption",
    "plaster per m2",
    "bags of plaster"
  ]
};

export const plasterCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
