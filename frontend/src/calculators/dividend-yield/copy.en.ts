import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dividendYieldCopyEn: CalculatorCopy = {
  name: 'Dividend yield calculator',
  slug: 'dividend-yield',
  shortDescription: "Annual dividend as a share of the entered share price.",
  seoTitle: 'Dividend yield calculator — yield in per cent',
  seoDescription: 'Calculate dividend yield from the annual dividend per share and the share price, plus the income on your holding.',
  h1: 'Dividend yield calculator',
  keywords: ['dividend yield', 'dividend calculator', 'yield on shares'],
  ...contractContent.en,
};
