import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rafter length calculator",
  "slug": "rafter-length-calculator",
  "shortDescription": "Rafter length, roof angle and slope for a gable roof.",
  "seoTitle": "Rafter length calculator for a gable roof",
  "seoDescription": "Calculate rafter length from the building span, ridge rise and eaves overhang, along with the roof angle and the slope in per cent.",
  "h1": "Rafter length calculator",
  "keywords": [
    "rafter length calculator",
    "roof angle",
    "roof slope",
    "gable roof"
  ]
};
export const raftersCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
