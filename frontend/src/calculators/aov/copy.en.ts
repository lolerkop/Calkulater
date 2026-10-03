import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const aovCopyEn: CalculatorCopy = {
  name: 'Average order value calculator',
  slug: 'average-order-value',
  shortDescription: 'Revenue divided by the number of orders.',
  seoTitle: 'Average order value calculator — AOV from revenue and orders',
  seoDescription: 'Calculate average order value by dividing revenue for a period by the number of orders in the same period.',
  h1: 'Average order value calculator',
  keywords: ['average order value', 'AOV', 'average basket'],
  ...contractContent.en,
};
