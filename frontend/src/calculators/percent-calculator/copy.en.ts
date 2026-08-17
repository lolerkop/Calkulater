// Английский копирайт калькулятора процентов.
// Перенесён из `enCalculatorCopy` в `i18n.ts` дословно. FAQ строился общим
// помощником `faq(topic)`; здесь используется его точный аналог из платформы,
// поэтому итоговый объект не меняется — это подтверждает тест эквивалентности.

import type { CalculatorCopy } from '../../lib/platform/types';
import { genericEnFaq } from '../../lib/platform/copyHelpers';

export const percentCopyEn: CalculatorCopy = {
  name: 'Percentage calculator',
  slug: 'percentage-calculator',
  shortDescription: 'Calculate percentages, percentage change and values before or after percent adjustments.',
  longDescription: 'Use this percentage calculator for everyday math: percent of a number, percentage change, markups and reverse percentages.',
  seoTitle: 'Percentage calculator — percent of a number and percentage change',
  seoDescription: 'Free percentage calculator for percent of a number, percentage change, increase, decrease and reverse calculations.',
  h1: 'Percentage calculator',
  keywords: ['percentage calculator', 'percent change', 'percent of number'],
  howToUse: ['Choose the calculation mode.', 'Enter values A and B.', 'Read the result and helper values.'],
  howItWorks: 'The calculator applies the selected percentage formula to the two input values.',
  example: 'Find 15% of 200 or calculate the percentage change from 80 to 100.',
  faq: genericEnFaq('percentage calculator'),
};
