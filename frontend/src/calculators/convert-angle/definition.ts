// Конвертер углов. Единственное семейство волны с иррациональными множителями:
// все они записаны через π, а не десятичным приближением.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { angleNames, angleUnits } from './units';
import { angleCopyEn } from './copy.en';
import { angleCopyUk } from './copy.uk';
import { angleCopyDe } from './copy.de';
import { convertAngleCopyEs } from './copy.es';
import { angleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-angle',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: angleCopyEn, uk: angleCopyUk, de: angleCopyDe, es: convertAngleCopyEs },
  referenceCases: angleReferenceCases,
  publishedExample: { inputs: { value: 90, from: 'deg', to: 'rad' }, expected: ['1,5708 рад'] },
  presentation: {
    id: 'convert-angle',
    name: 'Конвертер углов',
    slug: 'convert-angle',
    fullPath: '/converters/convert-angle/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 49,
    isNew: false,
    shortDescription: 'Перевод углов между градусами, радианами, градами и оборотами.',
    longDescription:
      "Переводит углы между радианами, градусами, градами, оборотами, угловыми минутами и секундами. По определению 180° = π рад и 400 градов = 1 оборот; численный результат на экране округляется.",
    seoTitle: 'Конвертер углов — градусы, радианы, грады, угловые минуты',
    seoDescription:
      'Перевод углов между градусами, радианами, градами, оборотами, угловыми минутами и секундами.',
    h1: 'Конвертер углов',
    keywords: ['конвертер углов', 'градусы в радианы', 'грады'],
    fields: [
      { name: 'value', label: 'Угол', type: 'number', defaultValue: 90, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'deg', options: unitOptions(angleUnits, angleNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'rad', options: unitOptions(angleUnits, angleNames) },
    ],
    resultLabels: { result: 'Результат' },
    disclaimer: "Результат — округлённый перевод единиц. Проверьте введённое значение и выбранные единицы.",
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: "Перевод использует отношения единиц к радиану: например, 1° = π/180 рад. В расчёте π представлено численным приближением, поэтому результат не является символической записью точного угла.",
    example: "180 градусов — это π радиан, а один градус — 60 угловых минут или 3600 угловых секунд.",
    faq: [
      {
        "q": "Что такое град?",
        "a": "Сотая часть прямого угла: полный оборот равен 400 градам. Единица применяется в геодезии."
      },
      {
        "q": "Почему используется π/180, а не короткая десятичная запись?",
        "a": "Соотношение 1° = π/180 рад задаёт перевод по определению. Расчёт использует доступное численное приближение π, а результат округляет для отображения; запись 0,0174533 рад дополнительно сокращает точность."
      },
      {
        "q": "Где используются угловые минуты?",
        "a": "В астрономии, навигации и оптике: угловая минута — шестидесятая доля градуса."
      },
      {
        "q": "Подходит ли для широты и долготы?",
        "a": "Конвертер переводит сам угол. Запись координат в градусах, минутах и секундах — отдельный формат."
      }
    ],
    relatedCalculatorIds: ['convert-length', 'convert-time', 'convert-area'],
  },
};
