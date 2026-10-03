import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Roof batten calculator",
  "slug": "roof-battens",
  "shortDescription": "Running metres, battens and timber volume for roof battening.",
  "seoTitle": "Roof batten calculator: metres, pieces and volume",
  "seoDescription": "Work out the running metres, number of battens and timber volume for a roof from its area and batten spacing.",
  "h1": "Roof batten calculator",
  "keywords": [
    "roof batten calculator",
    "batten spacing",
    "roof timber volume",
    "battens per square metre"
  ]
};
export const roofBattensCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
