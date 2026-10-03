import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const gravitationalForceCopyEn: CalculatorCopy = {
  ...{
  "name": "Gravitational force calculator",
  "slug": "gravitational-force-calculator",
  "shortDescription": "Attraction between two bodies from the law of universal gravitation.",
  "seoTitle": "Gravitational force calculator — two bodies",
  "seoDescription": "Calculate the force of universal gravitation between two masses at a given distance, along with the acceleration of the first body.",
  "h1": "Gravitational force calculator",
  "keywords": [
    "gravitational force calculator",
    "law of universal gravitation",
    "constant G",
    "attraction between bodies"
  ]
},
  ...contract.en,
};
