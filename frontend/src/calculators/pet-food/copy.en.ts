import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petFoodCopyEn: CalculatorCopy = {
  ...{
  "name": "Pet food calculator",
  "slug": "pet-food-calculator",
  "shortDescription": "Daily food ration from body weight, requirement multiplier and food energy.",
  "seoTitle": "Pet food calculator — daily ration in grams",
  "seoDescription": "Calculate the daily food ration for a cat or dog from body weight, an energy requirement multiplier and the food energy per 100 grams.",
  "h1": "Pet food calculator",
  "keywords": [
    "pet food calculator",
    "how much to feed a dog",
    "pet energy requirement",
    "RER"
  ]
},
  ...contractContent.en,
};
