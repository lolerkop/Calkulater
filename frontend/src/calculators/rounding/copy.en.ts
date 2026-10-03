import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const roundingCopyEn: CalculatorCopy = {
  name: 'Rounding calculator',
  slug: 'rounding-calculator',
  shortDescription: 'Round to a chosen number of decimal places, to the nearest, down or up.',
  seoTitle: 'Rounding calculator — decimal places up or down',
  seoDescription:
    'Round a number to a chosen number of decimal places three ways — nearest, down and up — and see the difference the rounding discarded.',
  h1: 'Rounding calculator',
  keywords: ['rounding calculator', 'round to decimal places', 'round down', 'round up'],
  ...mathWave8ContractContent.en,
};
