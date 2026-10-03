import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const generatorFuelCopyEn: CalculatorCopy = {
  ...{
  "name": "Generator fuel calculator",
  "slug": "generator-fuel-calculator",
  "shortDescription": "How much fuel a generator burns over a shift, and what it costs.",
  "seoTitle": "Generator fuel consumption calculator",
  "seoDescription": "Calculate generator fuel consumption from the load, the specific consumption and the running time, together with the cost.",
  "h1": "Generator fuel calculator",
  "keywords": [
    "generator fuel calculator",
    "generator fuel consumption",
    "how much fuel a generator uses"
  ]
},
  ...contractContent.en,
};
