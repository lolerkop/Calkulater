// Единицы силы. База — ньютон. Килограмм-сила и фунт-сила выражены через точное
// стандартное ускорение свободного падения 9,80665 м/с², а не десятичным
// приближением: иначе равенство «килограмм-сила = вес килограмма» перестало бы
// выполняться точно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { forceNames, forceUnits } from './units';
import { forceCopyEn } from './copy.en';
import { forceCopyUk } from './copy.uk';
import { forceCopyDe } from './copy.de';
import { forceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-force',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: forceCopyEn, uk: forceCopyUk, de: forceCopyDe },
  referenceCases: forceReferenceCases,
  publishedExample: { inputs: { value: 10, from: 'kgf', to: 'n' }, expected: ['98,0665 Н'] },
  presentation: {
    id: 'convert-force',
    name: 'Конвертер силы',
    slug: 'convert-force',
    fullPath: '/converters/convert-force/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 48,
    isNew: false,
    shortDescription: 'Перевод силы между ньютонами, килограмм-силами и фунт-силами.',
    longDescription:
      'Переводит силу между ньютонами, килоньютонами, миллиньютонами, килограмм-силами, тонна-силами, фунт-силами и динами. Килограмм-сила и тонна-сила встречаются в технических паспортах и справочниках по материалам, фунт-сила — в американской документации.',
    seoTitle: 'Конвертер силы — ньютоны, килограмм-силы, фунт-силы',
    seoDescription:
      'Перевод силы между ньютонами, килоньютонами, килограмм-силами, тонна-силами, фунт-силами и динами.',
    h1: 'Конвертер силы',
    keywords: ['конвертер силы', 'ньютоны в килограммы', 'кгс в Н'],
    fields: [
      { name: 'value', label: 'Сила', type: 'number', defaultValue: 10, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'kgf', options: unitOptions(forceUnits, forceNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'n', options: unitOptions(forceUnits, forceNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к ньютону через точные множители.',
    example: 'Один килограмм-сила — это 9,80665 ньютона, ровно столько, сколько весит килограмм при стандартном ускорении свободного падения.',
    faq: [
      { q: 'Чем килограмм-сила отличается от килограмма?', a: 'Килограмм — единица массы, килограмм-сила — единица силы: это вес одного килограмма при стандартном ускорении свободного падения 9,80665 м/с².' },
      { q: 'Точен ли перевод фунт-силы?', a: 'Да. Фунт определён как 0,45359237 кг, стандартное ускорение — как 9,80665 м/с², поэтому фунт-сила равна ровно 4,4482216152605 Н.' },
      { q: 'Где встречается дина?', a: 'В системе СГС и старых физических справочниках: одна дина равна стотысячной ньютона.' },
      { q: 'Можно ли перевести силу в массу?', a: 'Нет: это разные величины. Килограмм-сила лишь названа по массе, которая её создаёт при стандартной гравитации.' },
    ],
    relatedCalculatorIds: ['convert-mass', 'convert-torque', 'convert-pressure'],
  },
};
