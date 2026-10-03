import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const carnotCopyEn: CalculatorCopy = {
  ...{
  "name": "Carnot efficiency calculator",
  "slug": "carnot-efficiency",
  "shortDescription": "The ceiling efficiency of a heat engine from two temperatures.",
  "seoTitle": "Carnot efficiency calculator — the heat engine limit",
  "seoDescription": "Calculate the maximum efficiency of a heat engine from the hot and cold reservoir temperatures in kelvin.",
  "h1": "Carnot efficiency calculator",
  "keywords": [
    "carnot efficiency",
    "maximum efficiency",
    "heat engine",
    "second law of thermodynamics"
  ]
},
  ...contract.en,
};
