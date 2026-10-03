import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Concrete calculator",
  "slug": "concrete-calculator",
  "shortDescription": "Concrete volume for a slab, a strip or columns, with an allowance.",
  "seoTitle": "Concrete calculator — volume for a slab, strip or columns",
  "seoDescription": "Calculate the concrete volume for a slab, a strip foundation or columns, with an allowance for losses.",
  "h1": "Concrete calculator",
  "keywords": [
    "concrete calculator",
    "concrete volume",
    "how much concrete",
    "concrete for a foundation"
  ]
};

export const concreteCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
