import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const testScorePercentCopyEn: CalculatorCopy = {
  name: 'Test score percentage calculator',
  slug: 'test-score-percentage-calculator',
  shortDescription: 'Turn correct answers into a percentage, with an optional pass mark.',
  seoTitle: 'Test score percentage calculator — correct answers to percent',
  seoDescription: 'Convert correct answers into a test percentage, see how many you got wrong and whether you cleared the pass mark.',
  h1: 'Test score percentage calculator',
  keywords: ['test score calculator', 'percentage of correct answers', 'exam percentage'],
  ...contractContent.en
};
