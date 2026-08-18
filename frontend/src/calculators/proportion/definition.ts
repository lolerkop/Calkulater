// Пропорция. Четырёхрежимный калькулятор: искомый член выбирается явно, а его
// поле скрывается — пустое числовое поле неотличимо от нуля, а ноль здесь
// законное значение члена.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { proportionCopyEn } from './copy.en';
import { proportionCopyUk } from './copy.uk';
import { proportionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'proportion',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: proportionCopyEn, uk: proportionCopyUk },
  referenceCases: proportionReferenceCases,
  publishedExample: { inputs: { find: 'd', a: 2, b: 3, c: 4, d: 0 }, expected: ['6', '2 : 3 = 4 : 6'] },
  presentation: {
    id: 'proportion',
    name: 'Калькулятор пропорции',
    slug: 'proportion',
    fullPath: '/math/proportion/',
    category: 'math',
    icon: 'calculator',
    popularity: 48,
    isNew: true,
    shortDescription: 'Решение a : b = c : d по любому из четырёх членов.',
    longDescription:
      'Решает пропорцию относительно того члена, который вы выберете. Перекрёстное умножение превращает равенство в одно деление, а калькулятор показывает заполненную пропорцию вместе с проверкой произведений.',
    seoTitle: 'Калькулятор пропорции — решите a : b = c : d онлайн',
    seoDescription:
      'Найдите любой член пропорции перекрёстным умножением, с заполненной пропорцией и проверкой.',
    h1: 'Калькулятор пропорции',
    keywords: ['калькулятор пропорции', 'перекрёстное умножение', 'отношение'],
    fields: [
      {
        name: 'find', label: 'Какой член искать', type: 'select', defaultValue: 'd',
        options: [
          { value: 'a', label: 'Первый член a' },
          { value: 'b', label: 'Второй член b' },
          { value: 'c', label: 'Третий член c' },
          { value: 'd', label: 'Четвёртый член d' },
        ],
      },
      { name: 'a', label: 'Член a', type: 'number', defaultValue: 2, signed: true },
      { name: 'b', label: 'Член b', type: 'number', defaultValue: 3, signed: true },
      { name: 'c', label: 'Член c', type: 'number', defaultValue: 4, signed: true },
      { name: 'd', label: 'Член d', type: 'number', defaultValue: 0, signed: true },
    ],
    resultLabels: { unknown: 'Неизвестный член', proportion: 'Пропорция' },
    howToUse: ['Выберите, какой член искать.', 'Заполните три известных члена.', 'Прочитайте ответ и проверку.'],
    howItWorks:
      'Из a : b = c : d следует a × d = b × c, поэтому каждый член равен произведению другой пары, делённому на член напротив него.',
    example: 'В пропорции 2 : 3 = 4 : d четвёртый член равен 3 × 4 ÷ 2 = 6.',
    faq: [
      { q: 'Почему одно поле скрыто?', a: 'Искомый член вычисляется, и если оставить его видимым, введённое значение будет проигнорировано.' },
      { q: 'Какой член не может быть нулём?', a: 'Тот, что стоит по диагонали от неизвестного, — он становится делителем.' },
      { q: 'Можно ли использовать отрицательные числа?', a: 'Да. Перекрёстное умножение верно при любых знаках, а строка проверки позволяет убедиться в ответе.' },
      { q: 'Что такое проверка произведений?', a: 'Она перемножает обе диагонали. В верной пропорции произведения равны.' },
    ],
    relatedCalculatorIds: ['modulo', 'quadratic-equation', 'percent-calculator'],
  },
};
