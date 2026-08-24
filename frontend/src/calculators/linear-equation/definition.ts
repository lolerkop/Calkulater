// Линейное уравнение ax + b = c с разбором шагов и вырожденными случаями.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { linearEquationCopyEn } from './copy.en';
import { linearEquationCopyUk } from './copy.uk';
import { linearEquationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'linear-equation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: linearEquationCopyEn, uk: linearEquationCopyUk },
  referenceCases: linearEquationReferenceCases,
  publishedExample: { inputs: { a: 3, b: 5, c: 20 }, expected: ['x = 5'] },
  presentation: {
    id: 'linear-equation',
    name: 'Калькулятор линейного уравнения',
    slug: 'linear-equation',
    fullPath: '/math/linear-equation/',
    category: 'math',
    icon: 'calculator',
    popularity: 36,
    isNew: false,
    shortDescription: 'Решает ax + b = c и показывает каждый шаг.',
    longDescription:
      'Переносит свободный член, делит на коэффициент и проверяет ответ подстановкой. Вырожденные случаи здесь ответы, а не ошибки ввода: при нулевом коэффициенте уравнение сводится к b = c, которое либо верно при любом x, либо не верно никогда, и оба исхода названы прямо, а не спрятаны за прочерком.',
    seoTitle: 'Калькулятор линейного уравнения — решить ax + b = c',
    seoDescription:
      'Решите линейное уравнение вида ax + b = c с показом шагов и проверкой подстановкой.',
    h1: 'Калькулятор линейного уравнения',
    keywords: ['линейное уравнение', 'решить уравнение', 'найти x'],
    fields: [
      { name: 'a', label: 'Коэффициент a', type: 'number', defaultValue: 3, step: 0.5, signed: true },
      { name: 'b', label: 'Свободный член b', type: 'number', defaultValue: 5, step: 0.5, signed: true },
      { name: 'c', label: 'Правая часть c', type: 'number', defaultValue: 20, step: 0.5, signed: true },
    ],
    resultLabels: { result: 'Корень', equation: 'Уравнение', move: 'Перенос свободного члена', check: 'Проверка подстановкой' },
    howToUse: ['Введите коэффициент при x.', 'Введите свободный член и правую часть.', 'Прочитайте корень и разбор шагов.'],
    howItWorks: 'x = (c − b) ÷ a, если a не равен нулю; при нулевом a уравнение сводится к сравнению b и c.',
    example: 'Для 3x + 5 = 20 перенос пятёрки даёт 3x = 15, а деление — x = 5.',
    faq: [
      { q: 'Что происходит при нулевом коэффициенте?', a: 'Слагаемое с x исчезает, и уравнение превращается в b = c. Если равенство верно, корнем будет любое число; если нет — корня не существует.' },
      { q: 'Поддерживаются ли отрицательные коэффициенты?', a: 'Да, все три величины могут быть отрицательными или дробными. Знак переносится через деление.' },
      { q: 'Зачем строка проверки подстановкой?', a: 'Она подставляет найденный корень обратно в уравнение. Совпадение с правой частью подтверждает ответ сразу.' },
      { q: 'Решает ли калькулятор квадратные уравнения?', a: 'Нет, здесь только первая степень. Для уравнений с x в квадрате есть отдельный калькулятор.' },
    ],
    relatedCalculatorIds: ['quadratic-equation', 'proportion', 'combinatorics'],
  },
};
