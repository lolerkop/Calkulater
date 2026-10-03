import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Beam bending stress calculator",
  "slug": "beam-bending-stress",
  "shortDescription": "Bending stress from the moment and the shape of the beam's cross-section.",
  "seoTitle": "Beam bending stress calculator — section modulus",
  "seoDescription": "Calculate bending stress in a beam from the bending moment and the cross-section shape, rectangle or circle, with the section modulus.",
  "h1": "Beam bending stress calculator",
  "keywords": [
    "bending stress calculator",
    "section modulus",
    "beam calculation",
    "bending moment"
  ]
};

export const beamStressCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
