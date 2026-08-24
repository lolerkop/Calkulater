// Конвертер длины — первый сентинел движка конвертеров.
// Чисто множительное преобразование с самым большим набором единиц в волне.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { lengthNames, lengthUnits } from './units';
import { lengthCopyEn } from './copy.en';
import { lengthCopyUk } from './copy.uk';
import { lengthReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-length',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: lengthCopyEn, uk: lengthCopyUk },
  referenceCases: lengthReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'in', to: 'cm' }, expected: ['2,5400 см'] },
  presentation: {
    id: 'convert-length',
    name: 'Конвертер длины',
    slug: 'convert-length',
    fullPath: '/converters/convert-length/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 60,
    isNew: false,
    shortDescription: 'Перевод длины между метрическими и имперскими единицами.',
    longDescription:
      'Переводит длину между метрическими и имперскими единицами: миллиметры, сантиметры, метры, километры, дюймы, футы, ярды, мили и морские мили. Направление задаётся выбором единиц, поэтому один конвертер закрывает все пары.',
    seoTitle: 'Конвертер длины — метры, футы, дюймы, мили',
    seoDescription:
      'Перевод длины между метрами, сантиметрами, километрами, дюймами, футами, ярдами, милями и морскими милями.',
    h1: 'Конвертер длины',
    keywords: ['конвертер длины', 'метры в футы', 'дюймы в см'],
    fields: [
      { name: 'value', label: 'Значение', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'm', options: unitOptions(lengthUnits, lengthNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'ft', options: unitOptions(lengthUnits, lengthNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'У каждой единицы задан точный множитель к метру, и перевод идёт через эту базу.',
    example: 'Дюйм равен ровно 2,54 см, а миля — ровно 1609,344 м.',
    faq: [
      { q: 'Точны ли переводы имперских единиц?', a: 'Да. Дюйм определён как ровно 0,0254 м, а футы, ярды и мили — целые кратные ему, поэтому перевод точен, а не приближён.' },
      { q: 'Что такое морская миля?', a: 'Ровно 1852 метра, используется в морской и воздушной навигации. Она длиннее сухопутной мили в 1609,344 м.' },
      { q: 'Работает ли конвертер в обе стороны?', a: 'Да. Поменяйте местами исходную и целевую единицу, и перевод пойдёт в обратном направлении.' },
      { q: 'Почему одинаковые единицы возвращают значение без изменений?', a: 'Перевод единицы в саму себя не идёт через базу, поэтому не возникает погрешности плавающей арифметики.' },
    ],
    relatedCalculatorIds: ['convert-area', 'convert-volume', 'convert-mass'],
  },
};
