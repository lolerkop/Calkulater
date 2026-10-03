import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const tipCopyEn: CalculatorCopy = {
  "name": "Tip calculator",
  "slug": "tip-calculator",
  "shortDescription": "Tip, total and an even split across the table.",
  "seoTitle": "Tip calculator — tip, total and split per person",
  "seoDescription": "Work out the tip, the total bill and how much each person pays, with optional rounding up per share.",
  "h1": "Tip calculator",
  "keywords": ["tip calculator", "split the bill", "gratuity calculator"],
  ...contract.en,
};
