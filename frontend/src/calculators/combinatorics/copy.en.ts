import type { CalculatorCopy } from '../../lib/platform/types';

export const combinatoricsCopyEn: CalculatorCopy = {
  name: 'Combinations and permutations calculator',
  slug: 'combinations-permutations-calculator',
  shortDescription: 'Combinations and permutations, with or without repetition.',
  longDescription:
    'Counts how many ways a sample can be drawn from a set, in all four variants: order matters or not, repetition allowed or not. The arithmetic is exact whole-number arithmetic — the count grows fast enough that ordinary browser precision would quietly drop the low digits long before the answer stopped being meaningful.',
  seoTitle: 'Combinations and permutations calculator — nCr and nPr',
  seoDescription: 'Calculate combinations and permutations with or without repetition, with exact whole-number results.',
  h1: 'Combinations and permutations calculator',
  keywords: ['combinations calculator', 'permutations calculator', 'nCr nPr'],
  howToUse: ['Choose combinations or permutations.', 'Say whether repetition is allowed.', 'Enter the set size and the sample size.'],
  howItWorks: 'Combinations use C(n, k); permutations use P(n, k); with repetition they become C(n + k − 1, k) and n to the power k.',
  example: 'Choosing 5 cards from 52 gives C(52, 5) = 2 598 960 possible hands.',
  faq: [
    { q: 'What is the difference between combinations and permutations?', a: 'Order. Combinations treat AB and BA as the same selection; permutations count them separately.' },
    { q: 'When can the sample exceed the set?', a: 'Only with repetition allowed. Drawing 5 items from 3 kinds makes sense if each kind can be taken more than once.' },
    { q: 'Why is the result computed in exact integers?', a: 'Counts pass the safe range of ordinary numbers quickly. C(60, 30) already exceeds it, and rounding there would silently corrupt the answer.' },
    { q: 'Why is there an upper limit?', a: 'Above a thousand the result has hundreds of digits and stops being readable. The limit is about usefulness, not about the arithmetic.' },
  ],
};
