import type { CalculatorCopy } from '../../lib/platform/types';

export const aovCopyEn: CalculatorCopy = {
  name: 'Average order value calculator',
  slug: 'average-order-value',
  shortDescription: 'Revenue divided by the number of orders.',
  longDescription:
    'Average order value divides revenue by the orders that produced it. It is the simplest lever in unit economics: raising the average basket costs nothing in acquisition.',
  seoTitle: 'Average order value calculator — AOV from revenue and orders',
  seoDescription: 'Calculate average order value by dividing revenue for a period by the number of orders in the same period.',
  h1: 'Average order value calculator',
  keywords: ['average order value', 'AOV', 'average basket'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'AOV = revenue ÷ orders, both taken over the same period.',
  example: 'Revenue of 250,000 across 200 orders gives an average order value of 1,250.',
  faq: [
    { q: 'Should returns be subtracted?', a: 'If you want net AOV, use revenue after returns and count only completed orders. What matters is that both figures follow one rule.' },
    { q: 'Why must orders be whole?', a: 'There is no half order; a fractional count means the period or the data source is wrong.' },
    { q: 'Does AOV include delivery?', a: 'That is your choice, but keep it consistent across periods or the trend becomes meaningless.' },
    { q: 'What raises average order value?', a: 'Bundles, thresholds for free delivery and cross-selling. Unlike acquisition, they cost almost nothing per extra unit sold.' },
  ],
};
