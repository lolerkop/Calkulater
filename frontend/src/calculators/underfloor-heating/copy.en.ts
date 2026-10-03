import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Underfloor heating pipe calculator",
  "slug": "underfloor-heating",
  "shortDescription": "Pipe length and number of loops for a wet underfloor heating layout.",
  "seoTitle": "Underfloor heating pipe calculator: length and loops",
  "seoDescription": "Calculate the pipe length and the number of loops for underfloor heating from area, spacing and edge zone.",
  "h1": "Underfloor heating pipe calculator",
  "keywords": [
    "underfloor heating calculator",
    "pipe length underfloor",
    "heating loop length",
    "floor heating spacing"
  ]
};
export const underfloorHeatingCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
