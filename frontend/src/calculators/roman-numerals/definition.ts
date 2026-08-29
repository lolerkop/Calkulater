// Римские и арабские числа. Двухрежимный калькулятор со строковым результатом
// и проверкой каноничности записи.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { romanNumeralsCopyEn } from './copy.en';
import { romanNumeralsCopyUk } from './copy.uk';
import { romanNumeralsCopyDe } from './copy.de';
import { romanNumeralsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'roman-numerals',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: romanNumeralsCopyEn, uk: romanNumeralsCopyUk, de: romanNumeralsCopyDe },
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
    longDescription:
      'Переводит арабское число в римскую запись и обратно. Диапазон — от 1 до 3999, наибольшего числа, записываемого без черты сверху, а обратный перевод принимает только каноническую форму, чтобы у каждого числа была ровно одна запись.',
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
    howToUse: ['Выберите направление перевода.', 'Введите число или запись.', 'Прочитайте результат.'],
    howItWorks:
      'Символы берутся от большего к меньшему; вычитательные пары CM, CD, XC, XL, IX и IV удерживают запись канонической.',
    example: '1994 записывается как MCMXCIV: M + CM + XC + IV.',
    faq: [
      { q: 'Почему диапазон заканчивается на 3999?', a: 'Дальше тысячи требуют черты сверху, а её нет в обычном тексте.' },
      { q: 'Почему IIII отклоняется?', a: 'Каноническая запись четырёх — IV. Принять обе значило бы согласиться, что у числа больше одной правильной формы, и обратный перевод перестал бы быть однозначным.' },
      { q: 'Есть ли римский ноль?', a: 'Нет. В системе нет символа для нуля и нет отрицательных чисел.' },
      { q: 'Принимаются ли строчные буквы?', a: 'Да, ввод читается без учёта регистра, а ответ показывается прописными.' },
    ],
    relatedCalculatorIds: ['modulo', 'prime-factorization', 'proportion'],
  },
};
