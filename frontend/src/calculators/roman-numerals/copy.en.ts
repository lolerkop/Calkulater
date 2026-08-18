import type { CalculatorCopy } from '../../lib/platform/types';

export const romanNumeralsCopyEn: CalculatorCopy = {
  name: 'Roman numeral converter',
  slug: 'roman-numerals',
  shortDescription: 'Convert between Roman and Arabic numbers, both ways.',
  longDescription:
    'Converts an Arabic number into a Roman numeral and back. The range runs from 1 to 3999, the largest number writable without an overline, and the reverse direction accepts only the canonical form so that every number has exactly one spelling.',
  seoTitle: 'Roman numeral converter — Roman to Arabic and back',
  seoDescription: 'Convert Arabic numbers to Roman numerals and Roman numerals back to numbers, from 1 to 3999.',
  h1: 'Roman numeral converter',
  keywords: ['roman numerals', 'roman to arabic', 'number to roman'],
  howToUse: ['Choose the direction.', 'Enter the number or the numeral.', 'Read the result.'],
  howItWorks: 'Symbols are taken largest first; the subtractive pairs CM, CD, XC, XL, IX and IV keep the writing canonical.',
  example: '1994 is MCMXCIV: M + CM + XC + IV.',
  faq: [
    { q: 'Why does the range stop at 3999?', a: 'Beyond it thousands need an overline, which is not part of plain text.' },
    { q: 'Why is IIII rejected?', a: 'The canonical spelling of four is IV. Accepting both would mean a number has more than one correct form and the reverse conversion stops being unique.' },
    { q: 'Is there a Roman zero?', a: 'No. The system has no symbol for zero and no negative numbers.' },
    { q: 'Are lowercase letters accepted?', a: 'Yes, the input is read case-insensitively and the answer is shown in capitals.' },
  ],
};
