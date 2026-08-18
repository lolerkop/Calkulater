import type { CalculatorCopy } from '../../lib/platform/types';

export const contributionMarginCopyEn: CalculatorCopy = {
  name: 'Contribution margin calculator',
  slug: 'contribution-margin',
  shortDescription: 'What is left of the price after variable costs.',
  longDescription:
    'Contribution margin is the part of the price that survives variable costs and goes towards fixed costs and profit. The share of the price matters more than the absolute figure: it lets you compare products with very different price tags.',
  seoTitle: 'Contribution margin calculator — margin per unit and its share',
  seoDescription: 'Calculate contribution margin per unit, its share of the price and the margin on a given volume.',
  h1: 'Contribution margin calculator',
  keywords: ['contribution margin', 'margin per unit', 'unit economics'],
  howToUse: ['Enter the price per unit.', 'Enter the variable cost per unit.', 'Add the volume if you need the total.'],
  howItWorks: 'Contribution margin = price − variable cost. Its share of the price is that difference divided by the price.',
  example: 'A price of 500 with variable costs of 300 leaves a margin of 200, which is 40% of the price.',
  faq: [
    { q: 'Which costs count as variable?', a: 'Those that grow with each additional unit: materials, piece rates, packaging, transaction fees. Rent and salaries are fixed and stay out.' },
    { q: 'Why is the share more useful than the amount?', a: 'It does not depend on the price level, so products of very different prices become comparable.' },
    { q: 'What does a negative margin mean?', a: 'Every unit sold deepens the loss. The calculator shows it plainly instead of rejecting the input.' },
    { q: 'Is this the same as gross profit?', a: 'No. Gross profit subtracts the full cost of goods; contribution margin subtracts only the variable part.' },
  ],
};
