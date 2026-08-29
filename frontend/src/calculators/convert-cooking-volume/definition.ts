// Кулинарные меры объёма. База — миллилитр. Только объём в объём: перевод
// «стакан муки → граммы» требует плотности продукта, то есть датасета, и сюда
// не входит. Меры разных стран названы явно, а не выбираются по контексту.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { cookingVolumeNames, cookingVolumeUnits } from './units';
import { cookingVolumeCopyEn } from './copy.en';
import { cookingVolumeCopyUk } from './copy.uk';
import { cookingVolumeCopyDe } from './copy.de';
import { cookingVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-cooking-volume',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: cookingVolumeCopyEn, uk: cookingVolumeCopyUk, de: cookingVolumeCopyDe },
  referenceCases: cookingVolumeReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'cupUS', to: 'ml' }, expected: ['236,5882 мл'] },
  presentation: {
    id: 'convert-cooking-volume',
    name: 'Конвертер кулинарных мер объёма',
    slug: 'convert-cooking-volume',
    fullPath: '/converters/convert-cooking-volume/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 51,
    isNew: false,
    shortDescription: 'Перевод стаканов, ложек и миллилитров: метрические и американские меры разные.',
    longDescription:
      'Переводит кулинарные меры объёма между миллилитрами, литрами, чайными и столовыми ложками, стаканами и жидкими унциями. Американский стакан — 236,59 мл, метрический — 250 мл, поэтому каждая мера названа явно, а не выбирается молча.',
    seoTitle: 'Конвертер кулинарных мер — стаканы, ложки, миллилитры',
    seoDescription:
      'Перевод кулинарных мер объёма между стаканами, столовыми и чайными ложками, миллилитрами и жидкими унциями.',
    h1: 'Конвертер кулинарных мер объёма',
    keywords: ['стакан в миллилитры', 'столовая ложка мл', 'кулинарные меры'],
    fields: [
      { name: 'value', label: 'Объём', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'cupUS', options: unitOptions(cookingVolumeUnits, cookingVolumeNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'ml', options: unitOptions(cookingVolumeUnits, cookingVolumeNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все меры приводятся к миллилитру через точные множители.',
    example: 'Американский стакан — 236,59 мл, метрический — 250 мл: рецепт, переписанный без учёта разницы, даёт ошибку в пять процентов.',
    faq: [
      { q: 'Какой стакан имеется в виду в рецепте?', a: 'Зависит от источника: американский равен 236,59 мл, метрический — 250 мл. Здесь обе меры названы явно, чтобы выбор был вашим.' },
      { q: 'Можно ли перевести стакан муки в граммы?', a: 'Нет: для этого нужна плотность конкретного продукта, а конвертер работает только с объёмом.' },
      { q: 'Сколько чайных ложек в столовой?', a: 'Три — и в метрической системе, и в американской.' },
      { q: 'Чему равна жидкая унция?', a: 'Американская жидкая унция — ровно 29,5735295625 мл; британская отличается и здесь не применяется.' },
    ],
    relatedCalculatorIds: ['convert-volume', 'convert-mass', 'calories-from-macros'],
  },
};
