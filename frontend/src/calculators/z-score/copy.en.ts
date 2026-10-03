import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const zScoreCopyEn: CalculatorCopy = {
  name: 'Z-score calculator',
  slug: 'z-score-calculator',
  shortDescription: 'How many standard deviations a value sits away from the mean.',
  seoTitle: 'Z-score calculator — standardised value',
  seoDescription: 'Calculate the z-score of a value from the mean and the standard deviation: z = (x − μ) / σ.',
  h1: 'Z-score calculator',
  keywords: ['z-score calculator', 'standard score', 'standardised value', 'sigma from the mean'],
  ...mathWave8ContractContent.en,
};
