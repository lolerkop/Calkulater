import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const recipeScaleCopyEn: CalculatorCopy = {
  ...{
  "name": "Recipe scaling calculator",
  "slug": "recipe-scaling-calculator",
  "shortDescription": "Rescale every ingredient in a recipe to a different number of servings.",
  "seoTitle": "Recipe scaling calculator for any number of servings",
  "seoDescription": "Rescale recipe ingredients from one serving count to another and see the scaling factor.",
  "h1": "Recipe scaling calculator",
  "keywords": [
    "recipe scaling calculator",
    "resize a recipe",
    "servings converter",
    "scale ingredients"
  ]
},
  ...contractContent.en,
};
