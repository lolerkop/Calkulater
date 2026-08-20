import type { CalculatorCopy } from '../../lib/platform/types';

export const slopeCopyEn: CalculatorCopy = {
  name: 'Slope calculator',
  slug: 'slope-calculator',
  shortDescription: 'Slope in per cent and degrees from rise and run.',
  longDescription:
    'Per cent and degrees are not the same thing, and confusing them is expensive. A hundred per cent slope is forty-five degrees, not the limit of steepness; fifteen per cent is only eight and a half degrees. Both are shown side by side because accessibility standards for ramps are written in per cent while the tool on site usually reads degrees. The slope length is given separately because that is what gets bought by the metre — a handrail, cladding, or a cable running along the pitch — and using the run instead leaves the job short.',
  seoTitle: 'Slope calculator — per cent, degrees and length',
  seoDescription:
    'Calculate slope in per cent and degrees from rise and run, together with the ratio and the true length of the inclined section.',
  h1: 'Slope calculator',
  keywords: ['slope calculator', 'gradient in percent', 'angle of incline', 'ramp slope'],
  howToUse: [
    'Enter the rise — the vertical difference in metres.',
    'Enter the run — the horizontal distance in metres.',
    'Read per cent for standards and degrees for tools.',
    'Use the slope length when ordering material along the incline.',
  ],
  howItWorks:
    'Slope = rise ÷ run × 100 per cent. The angle is the arctangent of that ratio, and the length is the hypotenuse of rise and run.',
  example: 'A rise of 1.2 m over 8 m is a 15% slope, 8.531 degrees, with a slope length of 8.089 m.',
  faq: [
    {
      q: 'How do per cent and degrees relate?',
      a: 'Per cent is the tangent of the angle times a hundred. They agree closely only near zero: 5% is 2.86° and 10% is 5.71°, but 100% is 45°.',
    },
    {
      q: 'What slope is acceptable for a wheelchair ramp?',
      a: 'Common standards cap it around 8%, or 1:12, for public ramps, with shorter runs allowed to be a little steeper. Check the rule that applies where you are building.',
    },
    {
      q: 'Should the run be measured horizontally or along the ground?',
      a: 'Horizontally. Measuring along the incline gives the slope length instead, and using it as the run understates the gradient.',
    },
    {
      q: 'Can the rise be negative?',
      a: 'Yes, and it means a descent. The percentage and the angle both come out negative, which is the honest description of going down.',
    },
  ],
};
