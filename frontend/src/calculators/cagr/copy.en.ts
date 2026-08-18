import type { CalculatorCopy } from '../../lib/platform/types';

export const cagrCopyEn: CalculatorCopy = {
  name: 'CAGR calculator',
  slug: 'cagr-calculator',
  shortDescription: 'Average annual growth rate between two values.',
  longDescription:
    'The compound annual growth rate spreads total growth evenly across the period, so a five-year doubling reads as one annual figure instead of a lump sum. It makes investments of different lengths comparable.',
  seoTitle: 'CAGR calculator — compound annual growth rate',
  seoDescription: 'Calculate the compound annual growth rate between a starting and an ending value over any number of years.',
  h1: 'CAGR calculator',
  keywords: ['cagr calculator', 'compound annual growth rate', 'annual return'],
  howToUse: ['Enter the starting value.', 'Enter the ending value.', 'Enter how many years passed between them.'],
  howItWorks: 'CAGR = (ending / starting) ^ (1 / years) − 1, shown as a percentage.',
  example: 'Growing 100,000 to 200,000 over five years is 14.87% a year.',
  faq: [
    { q: 'Why not just divide total growth by years?', a: 'That ignores compounding. Doubling over five years is 14.87% a year, not 20% — each year grows on top of the previous one.' },
    { q: 'Can CAGR be negative?', a: 'Yes. A decline gives a negative annual rate, which is the honest way to describe a shrinking value.' },
    { q: 'Does it show volatility?', a: 'No. CAGR is a smoothed average — two investments with the same start, end and duration share a CAGR however differently they moved in between.' },
    { q: 'What if the period is not whole years?', a: 'Enter fractional years. Eighteen months is 1.5.' },
  ],
};
