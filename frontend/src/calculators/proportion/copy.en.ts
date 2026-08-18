import type { CalculatorCopy } from '../../lib/platform/types';

export const proportionCopyEn: CalculatorCopy = {
  name: 'Proportion calculator',
  slug: 'proportion-calculator',
  shortDescription: 'Solve a : b = c : d for any of the four terms.',
  longDescription:
    'Solves a proportion for whichever term you choose. Cross multiplication turns the equality into a single division, and the calculator shows the completed proportion together with the cross-product check.',
  seoTitle: 'Proportion calculator — solve a : b = c : d online',
  seoDescription: 'Find any term of a proportion by cross multiplication, with the completed proportion and the check.',
  h1: 'Proportion calculator',
  keywords: ['proportion calculator', 'cross multiplication', 'ratio'],
  howToUse: ['Choose which term to find.', 'Fill in the three known terms.', 'Read the answer and the check.'],
  howItWorks: 'From a : b = c : d follows a × d = b × c, so each term equals the product of the other pair divided by the term opposite it.',
  example: 'In 2 : 3 = 4 : d the fourth term is 3 × 4 ÷ 2 = 6.',
  faq: [
    { q: 'Why is one field hidden?', a: 'The term you are solving for is computed, so leaving it visible would invite a value that is then ignored.' },
    { q: 'Which term cannot be zero?', a: 'The one diagonally opposite the unknown — it becomes the divisor.' },
    { q: 'Can the terms be negative?', a: 'Yes. Cross multiplication holds for any signs, and the check line makes the result verifiable.' },
    { q: 'What is the cross-product check?', a: 'It multiplies both diagonals. In a correct proportion the two products are equal.' },
  ],
};
