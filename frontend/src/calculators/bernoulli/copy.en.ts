import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const bernoulliCopyEn: CalculatorCopy = {
 ...{
  "name": "Bernoulli equation calculator",
  "slug": "bernoulli-equation",
  "shortDescription": "Pressure at the second section of a flow from speeds and heights, with the total head.",
  "seoTitle": "Bernoulli equation calculator — pressure in a flow",
  "seoDescription": "Compute the pressure at the second section of a flow from Bernoulli's equation: speeds, heights, density and total head.",
  "h1": "Bernoulli equation calculator",
  "keywords": [
    "Bernoulli equation",
    "total head",
    "dynamic head",
    "flow pressure"
  ]
},
 ...contract.en,
};
