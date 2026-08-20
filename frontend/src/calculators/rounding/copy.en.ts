import type { CalculatorCopy } from '../../lib/platform/types';

export const roundingCopyEn: CalculatorCopy = {
  name: 'Rounding calculator',
  slug: 'rounding-calculator',
  shortDescription: 'Round to a chosen number of decimal places, to the nearest, down or up.',
  longDescription:
    'Three directions cover the cases that actually differ. Rounding to the nearest sends a half away from zero, so 2.5 becomes 3 and −2.5 becomes −3. Down and up here mean floor and ceiling on the number line rather than dropping or padding the magnitude, and for negative numbers that distinction matters: −2.44 rounded down to one place is −2.5, not −2.4. The difference row shows exactly what the rounding threw away, which is the part that accumulates when the same operation is applied to a column of figures rather than to one.',
  seoTitle: 'Rounding calculator — decimal places up or down',
  seoDescription:
    'Round a number to a chosen number of decimal places three ways — nearest, down and up — and see the difference the rounding discarded.',
  h1: 'Rounding calculator',
  keywords: ['rounding calculator', 'round to decimal places', 'round down', 'round up'],
  howToUse: [
    'Enter the number you want to round.',
    'Enter how many decimal places to keep.',
    'Choose the direction: nearest, down or up.',
    'Read the difference row to see what was discarded.',
  ],
  howItWorks:
    'The value is scaled by ten to the power of the places, rounded in the chosen direction, then scaled back. Zero places rounds to a whole number.',
  example: 'Rounding 2,748.536 to two places gives 2,748.54 and discards 0.004.',
  faq: [
    {
      q: 'Where does a half go when rounding to the nearest?',
      a: 'Away from zero: 2.5 becomes 3 and −2.5 becomes −3. That is the convention used in everyday arithmetic and in most financial rules.',
    },
    {
      q: 'Is rounding down the same as dropping the extra digits?',
      a: 'Only for positive numbers. For negatives, dropping digits moves towards zero while rounding down moves away from it: −2.44 becomes −2.5 at one place.',
    },
    {
      q: 'Why does the difference matter?',
      a: 'Because it accumulates. Rounding a thousand invoice lines the same direction can shift a total by a visible amount, which is why accounting rules specify the direction rather than leaving it open.',
    },
    {
      q: 'Can I round to tens or hundreds?',
      a: 'Not with this field, which takes decimal places from zero upwards. Dividing by ten before and multiplying after gives the same effect.',
    },
  ],
};
