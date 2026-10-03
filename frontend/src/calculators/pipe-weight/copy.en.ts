import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Pipe weight calculator",
  "slug": "pipe-weight",
  "shortDescription": "Pipe mass from outside diameter, wall thickness, length and material density.",
  "seoTitle": "Pipe weight calculator — by diameter, wall and length",
  "seoDescription": "Calculate the mass of a steel or plastic pipe from its outside diameter, wall thickness, length and material density.",
  "h1": "Pipe weight calculator",
  "keywords": [
    "pipe weight",
    "pipe mass",
    "mass per metre",
    "inside diameter"
  ]
};

export const pipeWeightCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
