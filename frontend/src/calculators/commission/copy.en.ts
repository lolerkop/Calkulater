import type { CalculatorCopy } from '../../lib/platform/types';

export const commissionCopyEn: CalculatorCopy = {
  name: 'Commission calculator',
  slug: 'commission-calculator',
  shortDescription: 'Commission, deal amount or rate — whichever you are missing.',
  longDescription:
    'Work out a commission from a deal amount and a rate, recover the amount from a known commission, or find the rate when both figures are known. The mode decides which two values you enter and which one is calculated.',
  seoTitle: 'Commission calculator — amount, rate and payout',
  seoDescription: 'Calculate commission from an amount and rate, the amount behind a commission, or the effective rate.',
  h1: 'Commission calculator',
  keywords: ['commission calculator', 'commission rate', 'sales commission'],
  howToUse: ['Pick the mode for what you already know.', 'Enter the two known values.', 'Read the missing figure and the payout.'],
  howItWorks: 'Commission = amount × rate / 100. The other modes rearrange the same equation.',
  example: 'A deal of 100,000 at 2.5% gives a commission of 2,500 and a payout of 97,500.',
  faq: [
    { q: 'Which mode should I use?', a: 'Pick the one naming the two values you already have. The third is what the calculator returns.' },
    { q: 'Does it include tax?', a: 'No. The result is gross commission; taxes and fees depend on your jurisdiction and contract.' },
    { q: 'Can the rate be zero?', a: 'Yes when computing commission from an amount — the result is simply zero. Recovering an amount from a zero rate has no answer.' },
    { q: 'Why does the payout appear in every mode?', a: 'It is the figure most people actually need, and it is the same subtraction in all three directions.' },
  ],
};
