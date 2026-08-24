import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { linearSystemCopyEn } from './copy.en';
import { linearSystemCopyUk } from './copy.uk';
import { linearSystemReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'linear-system',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: linearSystemCopyEn, uk: linearSystemCopyUk },
  referenceCases: linearSystemReferenceCases,
  publishedExample: {
    inputs: { a1: 2, b1: 3, c1: 13, a2: 4, b2: -1, c2: 5 },
    expected: ['x = 2'],
  },
  presentation: {
    id: 'linear-system',
    name: 'Калькулятор системы линейных уравнений',
    slug: 'linear-system',
    fullPath: '/math/linear-system/',
    category: 'math',
    icon: 'sigma',
    popularity: 25,
    isNew: false,
    shortDescription: 'Решает систему двух линейных уравнений с двумя неизвестными по правилу Крамера.',
    longDescription:
      'Два линейных уравнения с двумя неизвестными описывают две прямые, и решить систему — значит найти точку их пересечения. Правило Крамера приходит к ней через определители, а не через подстановку: арифметики меньше, а особый случай виден сразу. Когда главный определитель равен нулю, прямые параллельны или совпадают, и точки пересечения либо нет вовсе, либо их бесконечно много. Определитель показан рядом с ответом именно поэтому: он и решает, существует ли ответ.',
    seoTitle: 'Калькулятор системы линейных уравнений с двумя неизвестными',
    seoDescription:
      'Решение системы двух линейных уравнений с двумя неизвестными по правилу Крамера с показом главного определителя системы.',
    h1: 'Калькулятор системы линейных уравнений',
    keywords: ['система линейных уравнений', 'правило Крамера', 'две неизвестные', 'определитель системы'],
    fields: [
      { name: 'a1', label: 'a₁ — коэффициент при x в первом уравнении', type: 'number', defaultValue: 2, signed: true, step: 1 },
      { name: 'b1', label: 'b₁ — коэффициент при y в первом уравнении', type: 'number', defaultValue: 3, signed: true, step: 1 },
      { name: 'c1', label: 'c₁ — правая часть первого уравнения', type: 'number', defaultValue: 13, signed: true, step: 1 },
      { name: 'a2', label: 'a₂ — коэффициент при x во втором уравнении', type: 'number', defaultValue: 4, signed: true, step: 1 },
      { name: 'b2', label: 'b₂ — коэффициент при y во втором уравнении', type: 'number', defaultValue: -1, signed: true, step: 1 },
      { name: 'c2', label: 'c₂ — правая часть второго уравнения', type: 'number', defaultValue: 5, signed: true, step: 1 },
    ],
    resultLabels: {
      solution: 'Решение системы',
      y: 'y',
      det: 'Определитель',
    },
    howToUse: [
      'Приведите оба уравнения к виду ax + by = c.',
      'Введите коэффициенты первого уравнения: a₁, b₁ и c₁.',
      'Введите коэффициенты второго уравнения: a₂, b₂ и c₂.',
      'Отсутствующая неизвестная — это коэффициент нуль, а не пустое поле.',
    ],
    howItWorks:
      'Главный определитель Δ = a₁b₂ − a₂b₁. Далее x = (c₁b₂ − c₂b₁) ÷ Δ и y = (a₁c₂ − a₂c₁) ÷ Δ. Нулевой определитель означает, что единственного решения нет.',
    example: 'Для 2x + 3y = 13 и 4x − y = 5 определитель равен −14, а решение — x = 2, y = 3.',
    faq: [
      {
        q: 'Что означает нулевой определитель системы?',
        a: 'Прямые параллельны или это одна и та же прямая. Параллельные не пересекаются, совпадающие пересекаются всюду, и ни один из этих случаев нельзя записать одной парой чисел.',
      },
      {
        q: 'Можно ли вводить отрицательные и дробные коэффициенты?',
        a: 'Да, подходят любые действительные числа, включая отрицательные и десятичные. Расчёт останавливает только нулевой определитель.',
      },
      {
        q: 'Как ввести уравнение, где есть только одна неизвестная?',
        a: 'Поставьте нуль коэффициентом при отсутствующей неизвестной. Уравнение 3x = 12 записывается как a = 3, b = 0, c = 12.',
      },
      {
        q: 'Почему правило Крамера, а не подстановка?',
        a: 'Для двух уравнений ответ одинаков, но форма с определителем отделяет вопрос «есть ли решение» от самого решения — а ошибаются обычно именно в этом.',
      },
    ],
    relatedCalculatorIds: ['linear-equation', 'quadratic-equation', 'proportion'],
  },
};
