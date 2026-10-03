import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const recipeCostCopyEn: CalculatorCopy = {
  ...{
  "name": "Recipe cost calculator",
  "slug": "recipe-cost-calculator",
  "shortDescription": "Cost of a dish from its ingredient list, and the price of a single serving.",
  "seoTitle": "Recipe cost calculator and cost per serving",
  "seoDescription": "Work out the cost of a dish from a list of ingredients with prices and see what a single serving costs.",
  "h1": "Recipe cost calculator",
  "keywords": [
    "recipe cost calculator",
    "cost per serving",
    "food cost calculator",
    "dish cost breakdown"
  ]
},
  ...contractContent.en,
};
