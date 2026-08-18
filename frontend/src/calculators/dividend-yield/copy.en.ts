import type { CalculatorCopy } from '../../lib/platform/types';

export const dividendYieldCopyEn: CalculatorCopy = {
  name: 'Dividend yield calculator',
  slug: 'dividend-yield',
  shortDescription: 'Annual dividend as a share of the price you paid.',
  longDescription:
    'Dividend yield measures the annual dividend against the share price. Both figures are yours to enter: the yield on your purchase price is not the yield on today market price, and the calculator will not silently substitute one for the other.',
  seoTitle: 'Dividend yield calculator — yield in per cent',
  seoDescription: 'Calculate dividend yield from the annual dividend per share and the share price, plus the income on your holding.',
  h1: 'Dividend yield calculator',
  keywords: ['dividend yield', 'dividend calculator', 'yield on shares'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'Yield = annual dividend per share ÷ share price × 100.',
  example: 'A dividend of 12 on a share priced at 200 is a yield of 6%.',
  faq: [
    { q: 'Which price should I use?', a: 'Your purchase price gives the yield on your cost; the current price gives the yield a new buyer would get. They are different numbers and both are legitimate.' },
    { q: 'Are taxes accounted for?', a: 'No. Enter the dividend after tax if you want the net yield.' },
    { q: 'Does the calculator fetch quotes?', a: 'No. It works only with the numbers you enter and connects to nothing.' },
    { q: 'Is a high yield always good?', a: 'Not necessarily. Yield rises when the price falls, so an unusually high figure often reflects a problem rather than generosity.' },
  ],
};
