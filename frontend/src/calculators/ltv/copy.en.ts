import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const ltvCopyEn: CalculatorCopy = {
  "name": "LTV calculator",
  "slug": "ltv-calculator",
  "shortDescription": "Customer lifetime value from lifetime or churn.",
  "seoTitle": "LTV calculator — customer lifetime value",
  "seoDescription": "Customer lifetime value from monthly revenue, lifetime or constant monthly churn and gross margin, before CAC and costs excluded from the margin.",
  "h1": "LTV calculator",
  "keywords": [
    "ltv calculator",
    "customer lifetime value",
    "ltv to cac"
  ],
  ...contractContent.en,
};
