import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const stockDurationCopyEn: CalculatorCopy = {
  "name": "Stock duration calculator",
  "slug": "stock-duration-calculator",
  "shortDescription": "How many days a stock lasts at a known rate of use.",
  "seoTitle": "Stock duration calculator — how long supplies last",
  "seoDescription": "Calculate how many days a stock lasts at a known daily rate of use, and when to reorder.",
  "h1": "Stock duration calculator",
  "keywords": ["stock duration calculator", "how long will supplies last", "reorder point calculator"],
  ...contract.en,
};
