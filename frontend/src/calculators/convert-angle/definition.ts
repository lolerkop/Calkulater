// Конвертер углов. Единственное семейство волны с иррациональными множителями:
// все они записаны через π, а не десятичным приближением.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { angleNames, angleUnits } from './units';
import { angleCopyEn } from './copy.en';
import { angleCopyUk } from './copy.uk';
import { angleCopyDe } from './copy.de';
import { angleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-angle',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: angleCopyEn, uk: angleCopyUk, de: angleCopyDe },
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
      'Переводит углы между радианами, градусами, градами, полными оборотами, угловыми минутами и секундами. Все множители выражены через π, а не десятичным приближением, поэтому 180° дают ровно π, а 400 градов — ровно один оборот.',
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
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к радиану через множители, записанные долями π.',
    example: '180 градусов — это π радиан, а один градус — 60 угловых минут или 3600 угловых секунд.',
    faq: [
      { q: 'Что такое град?', a: 'Сотая часть прямого угла: полный оборот равен 400 градам. Единица применяется в геодезии.' },
      { q: 'Почему градус не записан как 0,0174533 рад?', a: 'Десятичное приближение ошибается в шестом знаке, и точные равенства вроде 180° = π перестали бы выполняться.' },
      { q: 'Где используются угловые минуты?', a: 'В астрономии, навигации и оптике: угловая минута — шестидесятая доля градуса.' },
      { q: 'Подходит ли для широты и долготы?', a: 'Конвертер переводит сам угол. Запись координат в градусах, минутах и секундах — отдельный формат.' },
    ],
    relatedCalculatorIds: ['convert-length', 'convert-time', 'convert-area'],
  },
};
