import { mathWave8ContractContent } from './contractContent';
import { validate } from './validate';
// Римские и арабские числа. Двухрежимный калькулятор со строковым результатом
// и проверкой каноничности записи.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { romanNumeralsCopyEn } from './copy.en';
import { romanNumeralsCopyUk } from './copy.uk';
import { romanNumeralsCopyDe } from './copy.de';
import { romanNumeralsCopyEs } from './copy.es';
import { romanNumeralsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'roman-numerals',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: romanNumeralsCopyEn, uk: romanNumeralsCopyUk, de: romanNumeralsCopyDe, es: romanNumeralsCopyEs },
  referenceCases: romanNumeralsReferenceCases,
  publishedExample: { inputs: { mode: 'toRoman', arabic: 1994 }, expected: ['MCMXCIV'] },
  presentation: {
    id: 'roman-numerals',
    name: 'Римские числа',
    slug: 'roman-numerals',
    fullPath: '/math/roman-numerals/',
    category: 'math',
    icon: 'calculator',
    popularity: 44,
    isNew: false,
    shortDescription: 'Перевод между римскими и арабскими числами в обе стороны.',
    seoTitle: 'Римские числа — перевод в арабские и обратно',
    seoDescription:
      'Перевод арабских чисел в римские и римских обратно в числа, от 1 до 3999, с проверкой канонической записи.',
    h1: 'Римские числа',
    keywords: ['римские числа', 'римские в арабские', 'число римскими цифрами'],
    fields: [
      {
        name: 'mode', label: 'Направление', type: 'select', defaultValue: 'toRoman',
        options: [
          { value: 'toRoman', label: 'Арабское в римское' },
          { value: 'toArabic', label: 'Римское в арабское' },
        ],
      },
      { name: 'arabic', label: 'Арабское число', type: 'number', defaultValue: 1994, min: 1, max: 3999, step: 1, showIf: { field: 'mode', equals: 'toRoman' } },
      { name: 'roman', label: 'Римское число', type: 'textarea', defaultValue: 'MMXXIV', showIf: { field: 'mode', equals: 'toArabic' } },
    ],
    resultLabels: { roman: 'Римское число', arabic: 'Арабское число' },
    relatedCalculatorIds: ['modulo', 'prime-factorization', 'proportion'],
    ...mathWave8ContractContent.ru,
  },
};
