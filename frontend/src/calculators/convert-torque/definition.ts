// Единицы крутящего момента. База — ньютон-метр. Американские единицы выведены
// перемножением точных определений фунт-силы и фута, а не отдельным
// приближением: иначе равенство «фут = двенадцать дюймов» перестало бы
// выполняться точно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { torqueNames, torqueUnits } from './units';
import { torqueCopyEn } from './copy.en';
import { torqueCopyUk } from './copy.uk';
import { torqueReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-torque',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: torqueCopyEn, uk: torqueCopyUk },
  referenceCases: torqueReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'lbfft', to: 'nm' }, expected: ['1,3558 Н·м'] },
  presentation: {
    id: 'convert-torque',
    name: 'Конвертер крутящего момента',
    slug: 'convert-torque',
    fullPath: '/converters/convert-torque/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 45,
    isNew: true,
    shortDescription: 'Перевод момента между Н·м, кгс·м и фунт-сила-футами.',
    longDescription:
      'Переводит крутящий момент между ньютон-метрами, килоньютон-метрами, ньютон-сантиметрами, килограмм-сила-метрами, фунт-сила-футами, фунт-сила-дюймами и унция-сила-дюймами. Ньютон-метры стоят в европейских инструкциях по затяжке, фунт-сила-футы — в американских.',
    seoTitle: 'Конвертер крутящего момента — Н·м, кгс·м, lbf·ft',
    seoDescription:
      'Перевод крутящего момента между ньютон-метрами, килограмм-сила-метрами, фунт-сила-футами и фунт-сила-дюймами.',
    h1: 'Конвертер крутящего момента',
    keywords: ['конвертер момента', 'Нм в фунт-фут', 'момент затяжки'],
    fields: [
      { name: 'value', label: 'Момент', type: 'number', defaultValue: 100, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'nm', options: unitOptions(torqueUnits, torqueNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'lbfft', options: unitOptions(torqueUnits, torqueNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к ньютон-метру через точные множители силы и длины.',
    example: 'Момент затяжки 100 Н·м — это примерно 73,76 фунт-сила-фута.',
    faq: [
      { q: 'Чем момент отличается от силы?', a: 'Момент — произведение силы на плечо, поэтому его единица составная: ньютон, умноженный на метр.' },
      { q: 'Точен ли перевод фунт-сила-фута?', a: 'Да: фунт, фут и стандартное ускорение определены точно, поэтому 1 lbf·ft равен ровно 1,3558179483314 Н·м.' },
      { q: 'Что такое унция-сила-дюйм?', a: 'Мелкая американская единица для точной механики: одна шестнадцатая фунт-сила-дюйма.' },
      { q: 'Можно ли переводить момент в энергию?', a: 'Нет. Ньютон-метр момента и джоуль энергии совпадают по размерности, но это разные величины.' },
    ],
    relatedCalculatorIds: ['convert-force', 'convert-energy', 'convert-length'],
  },
};
