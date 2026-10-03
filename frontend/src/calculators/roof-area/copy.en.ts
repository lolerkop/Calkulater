import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Roof area calculator",
  "slug": "roof-area-calculator",
  "shortDescription": "Slope area from the footprint and the pitch, in degrees or per cent.",
  "seoTitle": "Roof area calculator — slopes from the pitch",
  "seoDescription": "Calculate the roof area from the footprint length and width and the pitch in degrees or per cent.",
  "h1": "Roof area calculator",
  "keywords": [
    "roof area calculator",
    "roof pitch area",
    "slope area",
    "roofing calculator"
  ]
};
export const roofAreaCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
