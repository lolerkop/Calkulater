import type { CalculatorCopy } from '../../lib/platform/types';

export const differenceAbsRelCopyEn: CalculatorCopy = {
  name: 'Absolute and relative difference',
  slug: 'absolute-relative-difference',
  shortDescription: 'How much two values differ, in units and in per cent.',
  longDescription:
    'Shows both differences at once: the plain subtraction and its size relative to the starting value. The denominator is the absolute value of the base, so a rise from a negative number reads as growth rather than as a negative percentage.',
  seoTitle: 'Absolute and relative difference calculator',
  seoDescription: 'Find the absolute difference between two values and the relative difference in per cent, including negative bases.',
  h1: 'Absolute and relative difference',
  keywords: ['absolute difference', 'relative difference', 'difference in percent'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'Absolute = after − before. Relative = that difference divided by the absolute value of before, times 100.',
  example: 'From 100 to 120 the absolute difference is 20 and the relative difference is 20%.',
  faq: [
    { q: 'How is this different from percentage change?', a: 'Percentage change divides by the base itself. Here the divisor is its absolute value, so growth from a negative number reads as positive.' },
    { q: 'Why is relative difference missing sometimes?', a: 'When the starting value is zero there is nothing to divide by, so only the absolute difference exists.' },
    { q: 'Which value is the base?', a: 'The first one — the value you started from. Swapping the two changes the percentage.' },
    { q: 'Can both values be negative?', a: 'Yes. The absolute difference keeps its sign and the relative one is measured against the size of the base.' },
  ],
};
