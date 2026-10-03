import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hookeLawCopyEn: CalculatorCopy = {
  ...{
  "name": "Hooke's law calculator",
  "slug": "hookes-law",
  "shortDescription": "Spring force, extension or rate, plus the energy stored.",
  "seoTitle": "Hooke's law calculator — spring force, extension and rate",
  "seoDescription": "Calculate the spring force, extension or spring rate from Hooke's law F = k·x, along with the energy stored in the spring.",
  "h1": "Hooke's law calculator",
  "keywords": [
    "hooke's law calculator",
    "spring constant calculator",
    "spring force calculator",
    "spring energy calculator"
  ]
},
  ...contract.en,
};
