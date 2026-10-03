import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Pile foundation calculator",
  "slug": "pile-foundation",
  "shortDescription": "Concrete for bored piles and the grillage beam that ties them together.",
  "seoTitle": "Pile foundation calculator: piles and grillage concrete",
  "seoDescription": "Calculate the concrete volume for bored piles and the grillage beam, with the split between them shown separately.",
  "h1": "Pile foundation calculator",
  "keywords": [
    "pile foundation calculator",
    "bored pile concrete",
    "grillage volume",
    "post foundation concrete"
  ]
};

export const pileFoundationCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
