import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const adRoiCopyEn: CalculatorCopy = {
  name: 'Advertising ROI calculator',
  slug: 'advertising-roi',
  shortDescription: "ROAS and simplified ROI from revenue and advertising spend.",
  seoTitle: 'Advertising ROI calculator — ROI and ROAS from spend and revenue',
  seoDescription: "Calculate ROAS and simplified ROI from campaign revenue and advertising spend only. Product costs, fees and other expenses are outside these inputs.",
  h1: 'Advertising ROI calculator',
  keywords: ['advertising ROI', 'ROAS calculator', 'campaign payback'],
  ...contractContent.en,
};
