// Деление с остатком. Первый калькулятор категории «Математика».

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { moduloCopyEn } from './copy.en';
import { moduloCopyUk } from './copy.uk';
import { moduloReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'modulo',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: moduloCopyEn, uk: moduloCopyUk },
  referenceCases: moduloReferenceCases,
  publishedExample: { inputs: { a: 17, b: 5 }, expected: ['2', '3'] },
  presentation: {
    id: 'modulo',
    name: 'Калькулятор остатка от деления',
    slug: 'modulo',
    fullPath: '/math/modulo/',
    category: 'math',
    icon: 'calculator',
    popularity: 46,
    isNew: true,
    shortDescription: 'Деление с остатком: остаток, частное и проверка.',
    longDescription:
      'Делит одно целое число на другое и показывает остаток, частное и равенство, которое их связывает. Соглашение о знаке взято школьное и совпадающее с большинством языков программирования: частное усекается к нулю, а остаток наследует знак делимого.',
    seoTitle: 'Калькулятор остатка от деления — деление с остатком онлайн',
    seoDescription:
      'Деление целых чисел с остатком: остаток, частное и проверка a = b × q + r, в том числе для отрицательных чисел.',
    h1: 'Калькулятор остатка от деления',
    keywords: ['остаток от деления', 'деление с остатком', 'модуль числа'],
    fields: [
      { name: 'a', label: 'Делимое', type: 'number', defaultValue: 17, step: 1, signed: true },
      { name: 'b', label: 'Делитель', type: 'number', defaultValue: 5, step: 1, signed: true },
    ],
    resultLabels: { remainder: 'Остаток', quotient: 'Частное' },
    howToUse: ['Введите делимое.', 'Введите делитель.', 'Прочитайте остаток и частное.'],
    howItWorks:
      'Частное — это результат деления, усечённый к нулю. Остаток — то, что остаётся в равенстве a = b × q + r.',
    example: '17 разделить на 5 даёт частное 3 и остаток 2, потому что 17 = 5 × 3 + 2.',
    faq: [
      { q: 'Что происходит с отрицательными числами?', a: 'Остаток берёт знак делимого: −17 и 5 дают частное −3 и остаток −2, поскольку −17 = 5 × (−3) + (−2).' },
      { q: 'Это то же самое, что модуль в Python?', a: 'Нет. Python возвращает остаток со знаком делителя, там −17 mod 5 равно 3. Здесь используется усекающее соглашение.' },
      { q: 'Можно ли вводить дробные числа?', a: 'Нет. Деление с остатком определено для целых, поэтому дробный ввод отклоняется, а не округляется.' },
      { q: 'Зачем показана строка проверки?', a: 'По ней ответ виден сразу: умножьте делитель на частное, прибавьте остаток — получится делимое.' },
    ],
    relatedCalculatorIds: ['prime-factorization', 'quadratic-equation', 'percent-calculator'],
  },
};
