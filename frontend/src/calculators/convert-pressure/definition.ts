// Конвертер давления. Четыре системы единиц в одном наборе.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { pressureNames, pressureUnits } from './units';
import { pressureCopyEn } from './copy.en';
import { pressureCopyUk } from './copy.uk';
import { pressureReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-pressure',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pressureCopyEn, uk: pressureCopyUk },
  referenceCases: pressureReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'bar', to: 'psi' }, expected: ['14,5038 psi'] },
  presentation: {
    id: 'convert-pressure',
    name: 'Конвертер давления',
    slug: 'convert-pressure',
    fullPath: '/converters/convert-pressure/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 53,
    isNew: false,
    shortDescription: 'Перевод давления между паскалями, барами, атмосферами и psi.',
    longDescription:
      'Переводит давление между паскалями, барами, атмосферами, psi и миллиметрами ртутного столба. В одном списке сходятся четыре системы: манометры и шины подписаны в бар или psi, метеосводки — в гектопаскалях, а медицина — в миллиметрах ртутного столба.',
    seoTitle: 'Конвертер давления — бар, атмосферы, psi, паскали',
    seoDescription:
      'Перевод давления между паскалями, килопаскалями, барами, атмосферами, psi и миллиметрами ртутного столба.',
    h1: 'Конвертер давления',
    keywords: ['конвертер давления', 'бар в psi', 'атмосферы'],
    fields: [
      { name: 'value', label: 'Давление', type: 'number', defaultValue: 1, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'bar', options: unitOptions(pressureUnits, pressureNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'psi', options: unitOptions(pressureUnits, pressureNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к паскалю через точные множители.',
    example: '1 бар — это 100 000 Па и примерно 14,5 psi.',
    faq: [
      { q: 'Бар и атмосфера — одно и то же?', a: 'Почти, но не совсем: бар равен 100 000 Па, атмосфера — 101 325 Па. Разница около 1,3 %.' },
      { q: 'Какое давление в шинах?', a: 'Обычно 2–2,5 бар, что примерно соответствует 29–36 psi. Точное значение указано на стойке двери или в инструкции.' },
      { q: 'Почему медицина использует миллиметры ртутного столба?', a: 'Историческая единица от ртутного манометра: 1 мм рт. ст. равен 133,322387415 Па. Нормальное атмосферное давление — 760 торр, а в конвенционных миллиметрах это 759,9999: торр и мм рт. ст. определены немного по-разному.' },
      { q: 'Что такое гектопаскаль в прогнозе погоды?', a: 'Это 100 Па, то есть ровно миллибар. Обе единицы численно совпадают.' },
    ],
    relatedCalculatorIds: ['convert-energy', 'convert-temperature', 'convert-area'],
  },
};
