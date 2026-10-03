import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const specificHeatCopyEn: CalculatorCopy = {
  ...{
  "name": "Specific heat calculator",
  "slug": "specific-heat",
  "shortDescription": "How much energy it takes to heat a body: Q = c·m·ΔT.",
  "seoTitle": "Specific heat calculator — Q = c·m·ΔT",
  "seoDescription": "Calculate the heat required to warm or cool a body from its specific heat capacity, mass and temperature change.",
  "h1": "Specific heat calculator",
  "keywords": [
    "specific heat calculator",
    "heat energy calculator",
    "q = mcat calculator",
    "energy to heat water"
  ]
},
  ...contract.en,
};
