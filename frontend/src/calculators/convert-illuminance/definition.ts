// Единицы освещённости. База — люкс. Фут-кандела выражена через точный
// квадратный фут (0,3048² м²), а не десятичным приближением.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { illuminanceNames, illuminanceUnits } from './units';
import { illuminanceCopyEn } from './copy.en';
import { illuminanceCopyUk } from './copy.uk';
import { illuminanceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-illuminance',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: illuminanceCopyEn, uk: illuminanceCopyUk },
  referenceCases: illuminanceReferenceCases,
  publishedExample: { inputs: { value: 500, from: 'lx', to: 'fc' }, expected: ['46,4515 фк'] },
  presentation: {
    id: 'convert-illuminance',
    name: 'Конвертер освещённости',
    slug: 'convert-illuminance',
    fullPath: '/converters/convert-illuminance/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 43,
    isNew: true,
    shortDescription: 'Перевод освещённости между люксами, фут-канделами и фотами.',
    longDescription:
      'Переводит освещённость между люксами, килолюксами, миллилюксами, фут-канделами, фотами и ноксами. Люксы стоят в строительных нормах освещения рабочих мест, фут-канделы — в американской светотехнической документации.',
    seoTitle: 'Конвертер освещённости — люксы, фут-канделы, фоты',
    seoDescription:
      'Перевод освещённости между люксами, килолюксами, фут-канделами, фотами и ноксами.',
    h1: 'Конвертер освещённости',
    keywords: ['конвертер освещённости', 'люксы в фут-канделы', 'освещённость'],
    fields: [
      { name: 'value', label: 'Освещённость', type: 'number', defaultValue: 500, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'lx', options: unitOptions(illuminanceUnits, illuminanceNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'fc', options: unitOptions(illuminanceUnits, illuminanceNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к люксу через точные множители площади.',
    example: 'Норма освещённости рабочего места — около 500 люксов, то есть примерно 46,45 фут-канделы.',
    faq: [
      { q: 'Чем освещённость отличается от светового потока?', a: 'Световой поток измеряется в люменах и описывает лампу целиком; освещённость — это поток, приходящийся на квадратный метр поверхности.' },
      { q: 'Что такое фут-кандела?', a: 'Один люмен на квадратный фут. Поскольку фут определён точно, фут-кандела равна 10,7639 люкса.' },
      { q: 'Где встречается фот?', a: 'В системе СГС: один люмен на квадратный сантиметр, то есть десять тысяч люксов.' },
      { q: 'Можно ли перевести люксы в ватты?', a: 'Нет: это разные величины, и связь между ними зависит от спектра источника.' },
    ],
    relatedCalculatorIds: ['convert-area', 'convert-power', 'convert-energy'],
  },
};
