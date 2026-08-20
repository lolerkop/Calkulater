import type { CalculatorCopy } from '../../lib/platform/types';

export const raftersCopyEn: CalculatorCopy = {
  name: 'Rafter length calculator',
  slug: 'rafter-length-calculator',
  shortDescription: 'Rafter length, roof angle and slope for a gable roof.',
  longDescription:
    'A rafter runs from the ridge to the wall, so the span is halved before anything else — using the full span is the mistake that produces timber twice as long as the roof needs. The overhang is added after the hypotenuse rather than to the horizontal run, because it continues the same inclined line; adding it in the wrong place shortens every rafter in the order by several centimetres, and a roof is not a place to discover that. Slope is shown in per cent beside the angle because roofing materials specify a minimum slope while the saw is set to an angle.',
  seoTitle: 'Rafter length calculator for a gable roof',
  seoDescription:
    'Calculate rafter length from the building span, ridge rise and eaves overhang, along with the roof angle and the slope in per cent.',
  h1: 'Rafter length calculator',
  keywords: ['rafter length calculator', 'roof angle', 'roof slope', 'gable roof'],
  howToUse: [
    'Enter the span of the building between the outer walls.',
    'Enter the rise from the wall plate to the ridge.',
    'Enter the eaves overhang beyond the wall.',
    'Add a cutting allowance before ordering timber.',
  ],
  howItWorks:
    'Run = span ÷ 2. Length = the hypotenuse of run and rise, plus the overhang. The angle is the arctangent of rise over run.',
  example: 'An 8 m span with a 2.4 m rise and 0.5 m overhang needs a 5.165 m rafter at 30.964 degrees.',
  faq: [
    {
      q: 'Is the span measured between walls or across the whole building?',
      a: 'Across the building, between the outer wall plates. The calculation halves it, because one rafter covers one slope.',
    },
    {
      q: 'Why add the overhang after the hypotenuse?',
      a: 'Because the overhang continues the rafter along the same incline. Adding it to the horizontal run understates the length by a few centimetres on every piece.',
    },
    {
      q: 'What roof slope is usable?',
      a: 'It depends on the covering: profiled sheet usually needs at least 12%, tiles far more, and membrane roofs work almost flat. Check the manufacturer\'s minimum before choosing the rise.',
    },
    {
      q: 'Does this cover hip roofs?',
      a: 'No. This is a gable roof with two equal slopes. Hip rafters run diagonally and are longer than the figure here.',
    },
  ],
};
