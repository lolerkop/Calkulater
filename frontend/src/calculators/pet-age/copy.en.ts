import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petAgeCopyEn: CalculatorCopy = {
  ...{
  "name": "Pet age calculator",
  "slug": "pet-age-calculator",
  "shortDescription": "Illustrative human-age estimate for a cat or dog using the 15/9/4/7 scale.",
  "seoTitle": "Pet age calculator — cat and dog years",
  "seoDescription": "Estimate a cat or dog’s illustrative human age using the 15/9/4/7 scale. This is not a veterinary assessment of health or life expectancy.",
  "h1": "Pet age calculator",
  "keywords": [
    "pet age calculator",
    "cat years",
    "dog years",
    "human years"
  ]
},
  ...contractContent.en,
};
