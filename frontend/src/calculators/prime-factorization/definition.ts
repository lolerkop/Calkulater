// Разложение на простые множители. Целочисленный домен с явной верхней границей.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { primeFactorizationCopyEn } from './copy.en';
import { primeFactorizationCopyUk } from './copy.uk';
import { primeFactorizationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'prime-factorization',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: primeFactorizationCopyEn, uk: primeFactorizationCopyUk },
  referenceCases: primeFactorizationReferenceCases,
  publishedExample: { inputs: { n: 360 }, expected: ['360 = 2³ · 3² · 5', '24'] },
  presentation: {
    id: 'prime-factorization',
    name: 'Разложение на простые множители',
    slug: 'prime-factorization',
    fullPath: '/math/prime-factorization/',
    category: 'math',
    icon: 'calculator',
    popularity: 45,
    isNew: false,
    shortDescription: 'Разложение числа на простые множители и число делителей.',
    longDescription:
      'Раскладывает целое число на простые множители пробным делением и показывает канонический вид со степенями, количество различных простых и число делителей, которое из них следует.',
    seoTitle: 'Разложение на простые множители — калькулятор онлайн',
    seoDescription:
      'Разложите целое число на простые множители, посмотрите канонический вид со степенями и количество делителей.',
    h1: 'Разложение числа на простые множители',
    keywords: ['разложение на простые множители', 'простые множители', 'делители числа'],
    fields: [
      { name: 'n', label: 'Число', type: 'number', defaultValue: 360, min: 2, step: 1 },
    ],
    resultLabels: { factorization: 'Разложение', divisors: 'Всего делителей' },
    howToUse: ['Введите целое число от двух.', 'Прочитайте разложение.', 'При необходимости посмотрите число делителей.'],
    howItWorks:
      'Пробное деление идёт до корня из числа; всё, что остаётся больше единицы, само является простым.',
    example: '360 = 2³ · 3² · 5, отсюда (3+1)(2+1)(1+1) = 24 делителя.',
    faq: [
      { q: 'Как получается число делителей?', a: 'Перемножьте степени, увеличенные на единицу. Для 2³ · 3² · 5 это 4 × 3 × 2 = 24.' },
      { q: 'Почему нельзя разложить единицу?', a: 'У единицы нет простых множителей, поэтому разложение не определено, а не пусто.' },
      { q: 'Есть ли верхняя граница?', a: 'Да. Выше 10¹² пробное деление становится медленным, а обычная числовая точность начинает терять разряды, поэтому такой ввод отклоняется, а не отвечается неверно.' },
      { q: 'Как понять, что число простое?', a: 'Его разложение равно самому числу, и калькулятор пишет это отдельной строкой.' },
    ],
    relatedCalculatorIds: ['modulo', 'quadratic-equation', 'percent-calculator'],
  },
};
