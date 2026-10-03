import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const freeFallCopyEn: CalculatorCopy = {
  ...{
  "name": "Free fall calculator",
  "slug": "free-fall",
  "shortDescription": "Impact speed and fall time from a height or from a duration.",
  "seoTitle": "Free fall calculator — speed and time",
  "seoDescription": "Calculate impact speed and free-fall time from a height or a duration, with gravitational acceleration as a field.",
  "h1": "Free fall calculator",
  "keywords": [
    "free fall calculator",
    "impact speed",
    "fall time calculator",
    "falling object speed"
  ]
},
  ...contract.en,
};
