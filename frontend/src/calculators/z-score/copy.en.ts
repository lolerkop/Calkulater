import type { CalculatorCopy } from '../../lib/platform/types';

export const zScoreCopyEn: CalculatorCopy = {
  name: 'Z-score calculator',
  slug: 'z-score-calculator',
  shortDescription: 'How many standard deviations a value sits away from the mean.',
  longDescription:
    'Converts a single value into standard deviations from the mean so that results measured on different scales become comparable: a score of 80 against a mean of 75 with a spread of 8 is the same 0.625 sigma as a height of 178 against a mean of 172 with a spread of 9.6. The sign is kept — a negative score means the value sits below the mean, and that is an answer, not an input error.',
  seoTitle: 'Z-score calculator — standardised value',
  seoDescription: 'Calculate the z-score of a value from the mean and the standard deviation: z = (x − μ) / σ.',
  h1: 'Z-score calculator',
  keywords: ['z-score calculator', 'standard score', 'standardised value', 'sigma from the mean'],
  howToUse: ['Enter the value you want to place.', 'Give the mean and the standard deviation of the set.', 'Read how many sigmas away it falls.'],
  howItWorks:
    'z = (x − μ) / σ. The numerator is the ordinary deviation from the mean; the denominator rescales it into units of spread, which is why the z-score does not depend on the original measurement scale.',
  example: 'A value of 85 with a mean of 70 and a deviation of 10 gives z = 1.5: one and a half standard deviations above the mean.',
  faq: [
    { q: 'What does a negative z-score mean?', a: 'That the value is below the mean. The sign is part of the answer: −1.5 and +1.5 are equally far from the mean, just in opposite directions.' },
    { q: 'Why is a standard deviation of zero rejected?', a: 'Zero spread means every value is identical. There is nothing to divide by, and "infinitely far from the mean" is not a number.' },
    { q: 'Which z-scores count as large?', a: 'For roughly normal data about 68 % of values fall within ±1 and about 95 % within ±2, so a magnitude above 2 already stands out from the rest.' },
    { q: 'Where do the mean and deviation come from?', a: 'They can be computed from the list of values itself — the mean and statistics calculator reports both together.' },
  ],
};
