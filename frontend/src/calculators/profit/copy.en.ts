import type { CalculatorCopy } from '../../lib/platform/types';

export const profitCopyEn: CalculatorCopy = {
  name: 'Profit, margin and markup calculator',
  slug: 'profit-margin-markup-calculator',
  shortDescription: 'Profit, margin and markup from revenue and costs.',
  longDescription:
    'Profit is a subtraction anyone can do; the two percentages beside it are where deals go wrong. Margin divides profit by revenue, markup divides the same profit by cost, and the denominator is the entire difference between them. A markup of one hundred per cent is a margin of fifty, and both describe exactly the same transaction. Agreeing to "work at forty per cent" without naming which one is the ordinary way to end up one and a half times apart on price, and it happens most often between a supplier who thinks in markup and a retailer who thinks in margin.',
  seoTitle: 'Profit calculator — margin and markup',
  seoDescription:
    'Calculate profit, margin and markup from revenue and costs, and see plainly why the two percentages differ for the same deal.',
  h1: 'Profit, margin and markup calculator',
  keywords: ['profit calculator', 'margin', 'markup', 'revenue and cost'],
  howToUse: [
    'Enter the revenue for the period or the deal.',
    'Enter the costs that belong to that same revenue.',
    'Read margin when you speak about revenue, markup when you speak about cost.',
    'Keep both figures in the same currency and before or after tax consistently.',
  ],
  howItWorks:
    'Profit = revenue − costs. Margin = profit ÷ revenue × 100. Markup = profit ÷ costs × 100. With costs of zero there is nothing to divide by, so the markup row is omitted.',
  example: 'Revenue of 480,000 against costs of 315,000 gives 165,000 profit, a 34.38% margin and a 52.38% markup.',
  faq: [
    {
      q: 'Which is bigger, margin or markup?',
      a: 'Markup, always, for any profitable deal — it divides by the smaller number. They coincide only when profit is zero.',
    },
    {
      q: 'How do I turn a markup into a margin?',
      a: 'Margin = markup ÷ (100 + markup) × 100. A markup of 50% is a margin of 33.33%, and a markup of 100% is a margin of 50%.',
    },
    {
      q: 'Can the margin exceed one hundred per cent?',
      a: 'No. Profit cannot be larger than the revenue it came from, so the margin tops out at one hundred, which would mean costs of zero. Markup has no such ceiling.',
    },
    {
      q: 'Which costs should I include?',
      a: 'Whichever level you are measuring: only the cost of goods for gross margin, everything including salaries and rent for net margin. Mixing the two levels between periods is what makes trends meaningless.',
    },
  ],
};
