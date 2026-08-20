import type { CalculatorCopy } from '../../lib/platform/types';

export const carDepreciationCopyEn: CalculatorCopy = {
  name: 'Car depreciation calculator',
  slug: 'car-depreciation-calculator',
  shortDescription: 'Residual value of a car after several years of ownership.',
  longDescription:
    'A car loses value on a curve, not a straight line, and the first year is the steepest part of it. This calculator keeps that year as its own rate and applies the ordinary annual rate to the years that follow, so a three-year-old car is not valued as if it had aged evenly since new. The figure it produces is the part of the purchase price you can still expect to recover; the loss shown next to it is the real cost of having owned the car, and for most cars it is larger than fuel and servicing combined.',
  seoTitle: 'Car depreciation calculator — residual value',
  seoDescription:
    'Calculate the residual value of a car from its purchase price, years of ownership, annual depreciation rate and a separate first-year loss.',
  h1: 'Car depreciation calculator',
  keywords: ['car depreciation calculator', 'residual value', 'car value loss', 'vehicle depreciation'],
  howToUse: [
    'Enter the price the car was bought for.',
    'Enter how many full years it has been owned.',
    'Enter the annual loss rate applied after the first year.',
    'Enter the loss in the first year separately — it is normally the largest.',
  ],
  howItWorks:
    'Value = price × (1 − first-year loss) × (1 − annual rate) raised to the number of years after the first. With zero years the value equals the price.',
  example: 'A car bought for 2,400,000 loses 20% in year one and 12% a year after: four years later it is worth 1,308,426.24.',
  faq: [
    {
      q: 'Why is the first year a separate rate?',
      a: 'Because the drop is real and large: a car stops being new the moment it is registered. Averaging that loss across the whole period would overstate the value of every two- and three-year-old car.',
    },
    {
      q: 'What annual rate is realistic?',
      a: 'For mass-market models ten to fifteen per cent a year after the first is a common range. Rare models, commercial vehicles and cars in short supply can sit far outside it, so treat the default as a starting point rather than a fact.',
    },
    {
      q: 'Does mileage change the result?',
      a: 'Not in this model — it uses age only. High mileage pushes the real price below this figure, and unusually low mileage above it.',
    },
    {
      q: 'Why do part-years not count?',
      a: 'The market prices cars by year of age, so three and a half years trades as three. Years are rounded down for exactly that reason.',
    },
  ],
};
