import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const caloriesPerServingCopyEn: CalculatorCopy = {
  ...{
  "name": "Calories per serving calculator",
  "slug": "calories-per-serving",
  "shortDescription": "Calories of a whole dish and of one serving, from the ingredient list.",
  "seoTitle": "Calories per serving calculator from an ingredient list",
  "seoDescription": "Work out the calories of a dish from its ingredients and see how many calories one serving contains.",
  "h1": "Calories per serving calculator",
  "keywords": [
    "calories per serving",
    "recipe calorie calculator",
    "dish calories",
    "calories from ingredients"
  ]
},
  ...contractContent.en,
};
