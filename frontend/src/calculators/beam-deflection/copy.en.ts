import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Beam deflection calculator",
  "slug": "beam-deflection",
  "shortDescription": "Deflection of a simply supported beam under uniform or point load.",
  "seoTitle": "Beam deflection calculator — uniform and point load",
  "seoDescription": "Calculate the deflection of a simply supported beam from load, span, modulus of elasticity and second moment of area.",
  "h1": "Beam deflection calculator",
  "keywords": [
    "beam deflection",
    "floor stiffness",
    "second moment of area",
    "relative deflection"
  ]
};

export const beamDeflectionCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
