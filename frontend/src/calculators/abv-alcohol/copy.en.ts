import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const abvAlcoholCopyEn: CalculatorCopy = {
  ...{
  "name": "ABV from gravity calculator",
  "slug": "abv-from-gravity",
  "shortDescription": "Alcohol strength from original and final gravity.",
  "seoTitle": "ABV from gravity calculator — beer, wine, mead",
  "seoDescription": "Calculate alcohol by volume from original and final gravity, with the apparent attenuation.",
  "h1": "ABV from gravity calculator",
  "keywords": [
    "abv from gravity",
    "original gravity",
    "final gravity",
    "apparent attenuation"
  ]
},
  ...contractContent.en,
};
