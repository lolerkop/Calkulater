import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const statsDescriptiveCopyEn: CalculatorCopy = {
  name: 'Mean, median and standard deviation calculator',
  slug: 'descriptive-statistics-calculator',
  shortDescription: 'Mean, median, mode, range and standard deviation for a list of numbers.',
  seoTitle: 'Mean and standard deviation calculator — median, mode, variance',
  seoDescription: 'Calculate the mean, median, mode, range, variance and standard deviation of a list of numbers.',
  h1: 'Mean and statistics calculator',
  keywords: ['mean calculator', 'median calculator', 'standard deviation calculator', 'variance calculator'],
  ...mathWave8ContractContent.en,
};
