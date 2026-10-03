import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const returnRateCopyEn: CalculatorCopy = {
  name: 'Return rate calculator',
  slug: 'return-rate',
  shortDescription: 'What share of orders came back.',
  seoTitle: 'Return rate calculator — share of orders returned',
  seoDescription: "Calculate unique returned orders as a share of one order cohort and its complement to 100%. Returns and the denominator must refer to the same orders.",
  h1: 'Return rate calculator',
  keywords: ['return rate', 'returns percentage', 'ecommerce returns'],
  ...contractContent.en,
};
