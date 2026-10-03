import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const differenceAbsRelCopyEn: CalculatorCopy = {
  name: 'Absolute and relative difference',
  slug: 'absolute-relative-difference',
  shortDescription: 'How much two values differ, in units and in per cent.',
  seoTitle: 'Absolute and relative difference calculator',
  seoDescription: "Find the signed difference between two values and the relative difference against the absolute starting value. Negative bases are valid; a zero base has no relative percentage.",
  h1: 'Absolute and relative difference',
  keywords: ['absolute difference', 'relative difference', 'difference in percent'],
  ...contractContent.en,
};
