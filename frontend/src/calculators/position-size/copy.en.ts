import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const positionSizeCopyEn: CalculatorCopy = {
  "name": "Position size calculator",
  "slug": "position-size-calculator",
  "shortDescription": "Trade size from the risk you allow per account and the distance to the stop.",
  "seoTitle": "Position size calculator based on risk",
  "seoDescription": "Calculate trade size from the risk allowed per account and the distance between the entry price and the stop, including the account share.",
  "h1": "Position size calculator",
  "keywords": [
    "position size calculator",
    "risk per trade",
    "trade size from stop loss",
    "money management calculator"
  ],
  ...contractContent.en,
};
