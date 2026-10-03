import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const weightedMeanCopyEn: CalculatorCopy = {
  name: 'Weighted average calculator',
  slug: 'weighted-average-calculator',
  shortDescription: 'An average that respects how much each value counts: grades, shares, volumes.',
  seoTitle: 'Weighted average calculator',
  seoDescription: 'Calculate a weighted average from value and weight pairs: grades with credits, prices with volumes, scores with hours.',
  h1: 'Weighted average calculator',
  keywords: ['weighted average calculator', 'weighted mean', 'grade weighted average'],
  ...mathWave8ContractContent.en,
};
