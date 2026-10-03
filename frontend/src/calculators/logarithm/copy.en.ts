import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const logarithmCopyEn: CalculatorCopy = {
  name: 'Logarithm calculator',
  slug: 'logarithm-calculator',
  shortDescription: 'Common, natural and any-base logarithms with a check.',
  seoTitle: 'Logarithm calculator — log base 10, natural log and any base',
  seoDescription: 'Calculate a logarithm to base 10, base e or any base you choose, with the domain checked before the result.',
  h1: 'Logarithm calculator',
  keywords: ['logarithm calculator', 'log base 2', 'natural logarithm'],
  ...contractContent.en,
};
