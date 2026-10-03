import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hydrostaticPressureCopyEn: CalculatorCopy = {
  ...{
  "name": "Hydrostatic pressure calculator",
  "slug": "hydrostatic-pressure-calculator",
  "shortDescription": "Pressure of a liquid column from density and depth.",
  "seoTitle": "Hydrostatic pressure calculator — p = ρgh",
  "seoDescription": "Calculate the hydrostatic pressure of a liquid column from density and depth, with or without atmospheric pressure.",
  "h1": "Hydrostatic pressure calculator",
  "keywords": [
    "hydrostatic pressure calculator",
    "pressure at depth",
    "liquid column pressure"
  ]
},
  ...contract.en,
};
