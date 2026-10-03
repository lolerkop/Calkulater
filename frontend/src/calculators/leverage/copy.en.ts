import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const leverageCopyEn: CalculatorCopy = {
  "name": "Leverage calculator",
  "slug": "leverage-calculator",
  "shortDescription": "Position size, liquidation price and the distance to it.",
  "seoTitle": "Leverage calculator — position size and liquidation",
  "seoDescription": "Calculate a leveraged position size, its liquidation price and the percentage drop that reaches it, from margin, leverage and maintenance margin.",
  "h1": "Leverage calculator",
  "keywords": [
    "leverage calculator",
    "liquidation price",
    "position size",
    "maintenance margin"
  ],
  ...contractContent.en,
};
