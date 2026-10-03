import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Wood weight calculator",
  "slug": "wood-weight",
  "shortDescription": "Weight of timber from its volume, species and moisture content.",
  "seoTitle": "Wood weight calculator by species and moisture",
  "seoDescription": "Work out how much timber weighs from its volume, species and moisture content, with the density used shown alongside.",
  "h1": "Wood weight calculator",
  "keywords": [
    "wood weight calculator",
    "timber weight per cubic metre",
    "wood density by species",
    "lumber weight"
  ]
};
export const woodWeightCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
