import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const romanNumeralsCopyEn: CalculatorCopy = {
  name: 'Roman numeral converter',
  slug: 'roman-numerals',
  shortDescription: 'Convert between Roman and Arabic numbers, both ways.',
  seoTitle: 'Roman numeral converter — Roman to Arabic and back',
  seoDescription: 'Convert Arabic numbers to Roman numerals and Roman numerals back to numbers, from 1 to 3999.',
  h1: 'Roman numeral converter',
  keywords: ['roman numerals', 'roman to arabic', 'number to roman'],
  ...mathWave8ContractContent.en,
};
