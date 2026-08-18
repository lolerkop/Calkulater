import type { CalculatorCopy } from '../../lib/platform/types';

export const adRoiCopyEn: CalculatorCopy = {
  name: 'Advertising ROI calculator',
  slug: 'advertising-roi',
  shortDescription: 'Campaign payback as ROI and ROAS side by side.',
  longDescription:
    'Shows both measures of campaign payback at once. They answer the same question on different scales, and confusing them is expensive: with revenue twice the spend, ROAS is 2 while ROI is 100 per cent.',
  seoTitle: 'Advertising ROI calculator — ROI and ROAS from spend and revenue',
  seoDescription: 'Calculate advertising payback: ROI in per cent and ROAS as a ratio, from campaign spend and revenue.',
  h1: 'Advertising ROI calculator',
  keywords: ['advertising ROI', 'ROAS calculator', 'campaign payback'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'ROI = (revenue − spend) ÷ spend × 100. ROAS = revenue ÷ spend.',
  example: 'Revenue of 300,000 on a spend of 100,000 gives ROI of 200% and ROAS of 3.',
  faq: [
    { q: 'Which figure should I use?', a: 'ROAS is easier to compare across channels; ROI answers whether the campaign made money. Both come from the same two numbers.' },
    { q: 'Where is break-even?', a: 'At ROAS of 1, which is ROI of zero per cent: revenue exactly covers the spend.' },
    { q: 'Should revenue be net of cost of goods?', a: 'If you want true payback, yes. Using gross revenue measures turnover, not profit.' },
    { q: 'Why can ROI be −100%?', a: 'The campaign brought no revenue at all, so the entire spend was lost.' },
  ],
};
