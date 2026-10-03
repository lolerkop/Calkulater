import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Insulation calculator",
  "slug": "insulation-calculator",
  "shortDescription": "Insulation volume, number of slabs and packs from area and thickness.",
  "seoTitle": "Insulation calculator — volume, slabs and packs",
  "seoDescription": "Calculate the insulation volume, the number of slabs and the number of packs from the area and the layer thickness.",
  "h1": "Insulation calculator",
  "keywords": [
    "insulation calculator",
    "how much insulation",
    "insulation per m2",
    "mineral wool calculator"
  ]
};

export const insulationCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
