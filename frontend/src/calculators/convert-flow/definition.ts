// Единицы объёмного расхода. База — кубометр в секунду. Массовый расход сюда не
// входит: он требует плотности вещества, то есть данных, которых у конвертера
// единиц нет.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { flowNames, flowUnits } from './units';
import { flowCopyEn } from './copy.en';
import { flowCopyUk } from './copy.uk';
import { flowReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-flow',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: flowCopyEn, uk: flowCopyUk },
  referenceCases: flowReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'm3h', to: 'lmin' }, expected: ['16,6667 л/мин'] },
  presentation: {
    id: 'convert-flow',
    name: 'Конвертер расхода',
    slug: 'convert-flow',
    fullPath: '/converters/convert-flow/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 46,
    isNew: true,
    shortDescription: 'Перевод объёмного расхода между м³/ч, литрами в минуту и CFM.',
    longDescription:
      'Переводит объёмный расход между кубометрами в секунду и в час, литрами в секунду, минуту и час, кубическими футами в минуту и галлонами США в минуту. Кубометры в час стоят в характеристиках насосов и вытяжек, CFM — в американской вентиляционной документации.',
    seoTitle: 'Конвертер расхода — м³/ч, л/мин, CFM, GPM',
    seoDescription:
      'Перевод объёмного расхода между кубометрами в час, литрами в минуту, кубическими футами в минуту и галлонами в минуту.',
    h1: 'Конвертер расхода',
    keywords: ['конвертер расхода', 'м3/ч в л/мин', 'CFM'],
    fields: [
      { name: 'value', label: 'Расход', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'm3h', options: unitOptions(flowUnits, flowNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'lmin', options: unitOptions(flowUnits, flowNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к кубометру в секунду через точные множители.',
    example: 'Кубометр в час — это 16,67 литра в минуту; вытяжка на 300 м³/ч прогоняет пять литров воздуха в секунду.',
    faq: [
      { q: 'Это объёмный или массовый расход?', a: 'Объёмный: конвертер работает с объёмом в единицу времени и не требует плотности вещества.' },
      { q: 'Что такое CFM и GPM?', a: 'CFM — кубические футы в минуту, применяется для вентиляции; GPM — галлоны США в минуту, применяется для насосов.' },
      { q: 'Как перевести расход в массовый?', a: 'Умножить объёмный расход на плотность вещества. Для самой плотности есть отдельный конвертер.' },
      { q: 'Галлон в минуту — какой именно галлон?', a: 'Американский: 3,785411784 литра. Британский галлон больше, и в характеристиках насосов под GPM подразумевают американский.' },
    ],
    relatedCalculatorIds: ['convert-volume', 'convert-density', 'convert-time'],
  },
};
