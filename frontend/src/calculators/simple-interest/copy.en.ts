import type { CalculatorCopy } from '../../lib/platform/types';

export const simpleInterestCopyEn: CalculatorCopy = {
  name: 'Simple interest calculator',
  slug: 'simple-interest',
  shortDescription: 'Interest charged on the initial amount only, in both directions.',
  longDescription:
    'Simple interest accrues on the initial amount and never on interest already earned. The calculator works both ways: it finds the interest for a known rate, or the rate that would produce a known amount of interest.',
  seoTitle: 'Simple interest calculator — interest and required rate',
  seoDescription: 'Calculate simple interest on the initial amount, the total and the rate needed for a given interest.',
  h1: 'Simple interest calculator',
  keywords: ['simple interest', 'interest calculator', 'required rate'],
  howToUse: ['Choose what to find.', 'Enter the initial amount and the term.', 'Enter the rate or the interest, depending on the mode.'],
  howItWorks: 'Interest = amount × rate × term ÷ 100. The second mode solves the same equation for the rate.',
  example: '100,000 at 8% for three years earns 24,000 in interest, bringing the total to 124,000.',
  faq: [
    { q: 'How does this differ from compound interest?', a: 'Simple interest never accrues on interest. Over the same term compound interest yields more, and the gap widens with time.' },
    { q: 'Where is simple interest used?', a: 'In short loans, instalments, penalties and some bonds — wherever the base is fixed by contract.' },
    { q: 'Can the term be fractional?', a: 'Yes. Half a year is 0.5, and the formula stays linear in the term.' },
    { q: 'Why is a zero term rejected?', a: 'The rate has no value in that case: the formula divides by the term.' },
  ],
};
