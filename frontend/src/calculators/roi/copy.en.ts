import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const roiCopyEn: CalculatorCopy = {
  name: 'ROI calculator',
  slug: 'roi-calculator',
  shortDescription: 'Return on investment, with additional costs counted properly.',
  seoTitle: 'ROI calculator — return on investment in per cent',
  seoDescription: 'Calculate return on investment from the amount received and the amount invested, including additional costs.',
  h1: 'ROI calculator',
  keywords: ['ROI calculator', 'return on investment', 'investment return'],
  ...contractContent.en,
};
