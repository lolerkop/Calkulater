import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Metal bar weight calculator",
  "slug": "metal-weight",
  "shortDescription": "Mass of round, square and flat bar from the section size and length.",
  "seoTitle": "Metal bar weight calculator — round, square and flat bar",
  "seoDescription": "Calculate the weight of metal bar stock: round, square or flat, from the cross-section dimensions, length and alloy density.",
  "h1": "Metal bar weight calculator",
  "keywords": [
    "metal weight calculator",
    "steel bar weight calculator",
    "flat bar weight",
    "weight per metre of steel"
  ]
};

export const metalWeightCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
