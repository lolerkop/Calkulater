import type { CalculatorCopy } from '../../lib/platform/types';

export const returnRateCopyEn: CalculatorCopy = {
  name: 'Return rate calculator',
  slug: 'return-rate',
  shortDescription: 'What share of orders came back.',
  longDescription:
    'Return rate divides returned orders by total orders in the same period. Both counts are whole numbers, and returns cannot exceed orders — that combination means the two figures come from different periods.',
  seoTitle: 'Return rate calculator — share of orders returned',
  seoDescription: 'Calculate the return rate from returned and total orders, with the share kept by customers.',
  h1: 'Return rate calculator',
  keywords: ['return rate', 'returns percentage', 'ecommerce returns'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'Return rate = returns ÷ orders × 100, both counted over the same period.',
  example: '45 returns out of 900 orders give a return rate of 5%.',
  faq: [
    { q: 'What counts as a return?', a: 'An order the customer sent back and was refunded for. Cancellations before dispatch are usually counted separately.' },
    { q: 'Why can returns not exceed orders?', a: 'Because the two counts would then come from different periods, and any percentage from them would be plausible but wrong.' },
    { q: 'Is a high return rate always bad?', a: 'Not necessarily. In clothing it is normal and priced in; in electronics the same figure would signal a problem.' },
    { q: 'How does this affect unit economics?', a: 'Returns cut revenue and add logistics costs, so contribution margin should be recalculated on kept orders.' },
  ],
};
