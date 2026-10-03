import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const marketCapCopyEn: CalculatorCopy = {
  "name": "Market cap calculator",
  "slug": "market-cap-calculator",
  "shortDescription": "Market capitalisation from the share count and the price per share.",
  "seoTitle": "Market cap calculator — shares × price",
  "seoDescription": "Calculate a company market capitalisation from shares outstanding and share price, or find the price from the capitalisation.",
  "h1": "Market cap calculator",
  "keywords": [
    "market cap calculator",
    "market capitalisation",
    "company valuation by shares"
  ],
  ...contractContent.en,
};
