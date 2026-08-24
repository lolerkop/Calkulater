// Количество вещества: n = m / M и число частиц.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { molesCopyEn } from './copy.en';
import { molesCopyUk } from './copy.uk';
import { molesReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'moles',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: molesCopyEn, uk: molesCopyUk },
  referenceCases: molesReferenceCases,
  publishedExample: { inputs: { mode: 'mass', mass: 18, molarMass: 18.02 }, expected: ['0,9989 моль'] },
  presentation: {
    id: 'moles',
    name: 'Калькулятор количества вещества',
    slug: 'moles',
    fullPath: '/chemistry/moles/',
    category: 'chemistry',
    icon: 'flask',
    popularity: 41,
    isNew: false,
    shortDescription: 'Моли по массе и молярной массе, а также число частиц.',
    longDescription:
      'Переводит массу в количество вещества и обратно, попутно показывая, сколько это частиц. Число Авогадро взято точным — 6,02214076·10²³ моль⁻¹ по определению СИ 2019 года, — поэтому округлять в расчёте нечего. Молярная масса вводится как обычное число: состав вещества калькулятор не разбирает и справочником не притворяется, зато и не ошибается в нём за вас.',
    seoTitle: 'Калькулятор количества вещества — моли по массе',
    seoDescription: 'Рассчитайте количество вещества в молях по массе и молярной массе, а также число частиц.',
    h1: 'Калькулятор количества вещества',
    keywords: ['количество вещества', 'калькулятор молей', 'число Авогадро', 'моль'],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'mass',
        options: [
          { value: 'mass', label: 'масса' },
          { value: 'amount', label: 'количество вещества' },
        ],
      },
      { name: 'mass', label: 'Масса, г', type: 'number', defaultValue: 18, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'mass' } },
      { name: 'moles', label: 'Количество вещества, моль', type: 'number', defaultValue: 1, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'amount' } },
      // Значение по умолчанию намеренно с двумя знаками: общий разборщик чисел
      // читает точку перед ровно тремя цифрами как разделитель разрядов.
      { name: 'molarMass', label: 'Молярная масса, г/моль', type: 'number', defaultValue: 18.02, min: 0, step: 0.01 },
    ],
    resultLabels: { moles: 'Количество вещества', mass: 'Масса', particles: 'Число частиц', molarMass: 'Молярная масса' },
    howToUse: ['Выберите, что известно — масса или количество вещества.', 'Введите значение.', 'Укажите молярную массу вещества из справочника.'],
    howItWorks:
      'n = m / M — масса, делённая на молярную массу. Обратный режим находит массу как m = n · M. Число частиц получается умножением количества вещества на число Авогадро N_A = 6,02214076·10²³ моль⁻¹.',
    example: '18 граммов воды при молярной массе 18,02 г/моль дают 0,9989 моль — чуть меньше одного моля.',
    faq: [
      { q: 'Где взять молярную массу?', a: 'Из таблицы Менделеева: сложите атомные массы всех атомов формулы. Калькулятор её не выводит — он не разбирает химическую формулу и не притворяется справочником.' },
      { q: 'Почему 18 граммов воды — это не ровно один моль?', a: 'Потому что молярная масса воды около 18,02, а не 18. Ровно моль дают 18,02 грамма; разница небольшая, но в расчёте она видна.' },
      { q: 'Что означает число частиц?', a: 'Сколько молекул, атомов или ионов содержится в этом количестве вещества. Оно равно количеству молей, умноженному на число Авогадро.' },
      { q: 'Число Авогадро округлено?', a: 'Нет. С 2019 года оно задано точно: 6,02214076·10²³ моль⁻¹ — это определение единицы, а не результат измерения.' },
    ],
    relatedCalculatorIds: ['molarity', 'ideal-gas-law', 'solution-concentration'],
  },
};
