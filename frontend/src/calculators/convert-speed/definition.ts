// Конвертер скорости. Десятичная точность на неокруглых множителях.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { speedNames, speedUnits } from './units';
import { speedCopyEn } from './copy.en';
import { speedCopyUk } from './copy.uk';
import { speedCopyDe } from './copy.de';
import { speedReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-speed',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: speedCopyEn, uk: speedCopyUk, de: speedCopyDe },
  referenceCases: speedReferenceCases,
  publishedExample: { inputs: { value: 100, from: 'kmh', to: 'mph' }, expected: ['62,1371 миль/ч'] },
  presentation: {
    id: 'convert-speed',
    name: 'Конвертер скорости',
    slug: 'convert-speed',
    fullPath: '/converters/convert-speed/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 54,
    isNew: false,
    shortDescription: 'Перевод скорости между км/ч, м/с, милями в час и узлами.',
    longDescription:
      'Переводит скорость между метрами в секунду, километрами в час, милями в час, узлами и футами в секунду. Узлы используются в морской и авиационной навигации, мили в час — в дорожных знаках США и Великобритании.',
    seoTitle: 'Конвертер скорости — км/ч, м/с, мили в час, узлы',
    seoDescription:
      'Перевод скорости между километрами в час, метрами в секунду, милями в час, узлами и футами в секунду.',
    h1: 'Конвертер скорости',
    keywords: ['конвертер скорости', 'км/ч в м/с', 'узлы'],
    fields: [
      { name: 'value', label: 'Скорость', type: 'number', defaultValue: 100, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'kmh', options: unitOptions(speedUnits, speedNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'mph', options: unitOptions(speedUnits, speedNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к метрам в секунду через точные множители.',
    example: '36 км/ч — это ровно 10 м/с, а 1 узел — 1,852 км/ч.',
    faq: [
      { q: 'Что такое узел?', a: 'Одна морская миля в час, то есть 1,852 км/ч. Используется в морской и авиационной навигации.' },
      { q: 'Почему 36 км/ч ровно 10 м/с?', a: 'В часе 3600 секунд, а в километре 1000 метров, поэтому км/ч ровно в 3,6 раза меньше м/с.' },
      { q: 'Точен ли перевод миль в час?', a: 'Да. Миля определена как 1609,344 м, поэтому 1 миля/ч равна ровно 0,44704 м/с.' },
      { q: 'Подходит ли для бега?', a: 'Для темпа бега удобнее минуты на километр — для этого есть отдельный калькулятор темпа.' },
    ],
    relatedCalculatorIds: ['convert-length', 'convert-time', 'convert-power'],
  },
};
