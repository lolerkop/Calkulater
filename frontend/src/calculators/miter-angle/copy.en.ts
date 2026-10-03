import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Miter angle calculator",
  "slug": "miter-angle",
  "shortDescription": "The cut angle for joining two pieces at a corner.",
  "seoTitle": "Miter angle calculator — mitred joint",
  "seoDescription": "Calculate the cut angle for skirting or trim at a mitred joint: half the corner angle and the value for the mitre saw scale.",
  "h1": "Miter angle calculator",
  "keywords": [
    "miter angle",
    "mitred joint",
    "mitre saw",
    "trim cut angle"
  ]
};

export const miterAngleCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
