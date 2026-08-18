// Конвертер площади. Проверяет размерность второй степени.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { areaNames, areaUnits } from './units';
import { areaCopyEn } from './copy.en';
import { areaCopyUk } from './copy.uk';
import { areaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-area',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: areaCopyEn, uk: areaCopyUk },
  referenceCases: areaReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'ha', to: 'ac' }, expected: ['2,4711 акр'] },
  presentation: {
    id: 'convert-area',
    name: 'Конвертер площади',
    slug: 'convert-area',
    fullPath: '/converters/convert-area/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 56,
    isNew: true,
    shortDescription: 'Перевод площади между метрическими и имперскими единицами.',
    longDescription:
      'Переводит площадь между квадратными миллиметрами, сантиметрами, метрами и километрами, гектарами, квадратными дюймами и футами, а также акрами. Множители второй степени заданы точно, поэтому перевод земельных мер не накапливает погрешность.',
    seoTitle: 'Конвертер площади — м², гектары, акры, футы²',
    seoDescription:
      'Перевод площади между квадратными метрами, гектарами, акрами, квадратными футами и дюймами.',
    h1: 'Конвертер площади',
    keywords: ['конвертер площади', 'гектары в акры', 'м² в футы²'],
    fields: [
      { name: 'value', label: 'Площадь', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'm2', options: unitOptions(areaUnits, areaNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'ft2', options: unitOptions(areaUnits, areaNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'У каждой единицы задан точный множитель к квадратному метру.',
    example: 'Гектар — это 10 000 м², а акр — 4046,8564224 м².',
    faq: [
      { q: 'Чем отличается гектар от акра?', a: 'Гектар — это ровно 10 000 м², акр — 4046,86 м². В гектаре примерно 2,47 акра.' },
      { q: 'Почему множители не квадраты множителей длины?', a: 'По сути они ими и являются, но записаны готовыми числами: так конвертер не зависит от анализа размерностей и его легче проверить.' },
      { q: 'Подходит ли для земельных участков?', a: 'Да, гектары и акры — стандартные земельные меры. Для документов сверьтесь с официальным замером.' },
      { q: 'Точны ли имперские единицы площади?', a: 'Да. Квадратный дюйм равен 0,00064516 м² по определению дюйма.' },
    ],
    relatedCalculatorIds: ['convert-length', 'convert-volume', 'convert-mass'],
  },
};
