import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petAgeCopyEn: CalculatorCopy = {
  ...{
  "name": "Pet age calculator",
  "slug": "pet-age-calculator",
  "shortDescription": "Age of a cat or dog in human years from a veterinary table.",
  "seoTitle": "Pet age calculator — cat and dog years",
  "seoDescription": "Convert the age of a cat or dog into human years using a non-linear veterinary table with a separate rate for large breeds.",
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
