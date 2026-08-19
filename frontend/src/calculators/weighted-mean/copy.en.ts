import type { CalculatorCopy } from '../../lib/platform/types';

export const weightedMeanCopyEn: CalculatorCopy = {
  name: 'Weighted average calculator',
  slug: 'weighted-average-calculator',
  shortDescription: 'An average that respects how much each value counts: grades, shares, volumes.',
  longDescription:
    'Averages values that do not count equally: a course grade weighted by credits, an average price weighted by the volume bought, a score weighted by hours. Pairs are entered one per line — the value first, then its weight. A line with only one number is rejected outright, because filling in a weight of 1 on your behalf would average a set you never entered.',
  seoTitle: 'Weighted average calculator',
  seoDescription: 'Calculate a weighted average from value and weight pairs: grades with credits, prices with volumes, scores with hours.',
  h1: 'Weighted average calculator',
  keywords: ['weighted average calculator', 'weighted mean', 'grade weighted average'],
  howToUse: [
    'Enter the pairs one per line: the value, a space, then the weight.',
    'Check that every line holds exactly two numbers.',
    'Read the weighted average and the total weight.',
  ],
  howItWorks:
    'Each value is multiplied by its weight, the products are added up and divided by the total weight: x̄ = Σ(xᵢ·wᵢ) / Σwᵢ. When every weight is the same the result matches the plain arithmetic mean.',
  example: 'Grades of 90, 75 and 60 with weights 3, 4 and 2 give (270 + 300 + 120) / 9 = 76.6667 — closest to 75, which carries the largest weight.',
  faq: [
    { q: 'How is this different from a plain average?', a: 'A plain average treats every value as equally important. A weighted one accounts for some values mattering more — a four-credit exam moves the result further than a one-credit test.' },
    { q: 'What happens when all the weights are equal?', a: 'The result equals the plain arithmetic mean: the common factor cancels out of both the numerator and the denominator.' },
    { q: 'Can a weight be zero?', a: 'For an individual value, yes — it simply drops out of the result. If every weight is zero there is nothing to divide by, and the calculator says so.' },
    { q: 'Why is a line with one number an error?', a: 'Because there is no way to tell whether it is a value with no weight or a weight with no value. Supplying the missing number would be inventing data.' },
  ],
};
