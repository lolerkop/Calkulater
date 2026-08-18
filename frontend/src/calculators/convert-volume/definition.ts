// Конвертер объёма. Третья степень плюс две несовпадающие имперские системы.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { volumeNames, volumeUnits } from './units';
import { volumeCopyEn } from './copy.en';
import { volumeCopyUk } from './copy.uk';
import { volumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-volume',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: volumeCopyEn, uk: volumeCopyUk },
  referenceCases: volumeReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'galUS', to: 'l' }, expected: ['3,7854 л'] },
  presentation: {
    id: 'convert-volume',
    name: 'Конвертер объёма',
    slug: 'convert-volume',
    fullPath: '/converters/convert-volume/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 55,
    isNew: true,
    shortDescription: 'Перевод объёма между литрами, кубометрами и галлонами.',
    longDescription:
      'Переводит объём между миллилитрами, литрами, кубическими сантиметрами, метрами и футами, а также американскими и британскими галлонами. Галлоны США и Великобритании различаются примерно на 20 %, поэтому в списке они разделены.',
    seoTitle: 'Конвертер объёма — литры, кубометры, галлоны',
    seoDescription:
      'Перевод объёма между литрами, миллилитрами, кубометрами, кубическими футами и галлонами США и Великобритании.',
    h1: 'Конвертер объёма',
    keywords: ['конвертер объёма', 'литры в галлоны', 'кубометры'],
    fields: [
      { name: 'value', label: 'Объём', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'l', options: unitOptions(volumeUnits, volumeNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'galUS', options: unitOptions(volumeUnits, volumeNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'У каждой единицы задан точный множитель к кубическому метру.',
    example: 'Американский галлон — 3,785 литра, британский — 4,546 литра.',
    faq: [
      { q: 'Чем отличается американский галлон от британского?', a: 'Это исторически разные меры: американский равен 3,785 литра, британский — 4,546. Разница около 20 %, и её легко не заметить в рецепте или инструкции.' },
      { q: 'Литр и кубический дециметр — одно и то же?', a: 'Да, ровно. Литр определён как кубический дециметр, то есть 0,001 м³.' },
      { q: 'Миллилитр равен кубическому сантиметру?', a: 'Да, ровно. Обе единицы равны 10⁻⁶ м³.' },
      { q: 'Есть ли кулинарные меры?', a: 'Чашки и ложки в этот конвертер не входят: их объём различается по странам. Для них нужен отдельный кулинарный конвертер.' },
    ],
    relatedCalculatorIds: ['convert-area', 'convert-mass', 'convert-length'],
  },
};
