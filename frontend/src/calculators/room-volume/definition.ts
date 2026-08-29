// Объём помещения — завершающий калькулятор волны: режимы, условные поля,
// единицы и разный набор результатов в зависимости от того, что известно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { BUILD_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { roomVolumeCopyEn } from './copy.en';
import { roomVolumeCopyUk } from './copy.uk';
import { roomVolumeCopyDe } from './copy.de';
import { roomVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'room-volume',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roomVolumeCopyEn, uk: roomVolumeCopyUk, de: roomVolumeCopyDe },
  referenceCases: roomVolumeReferenceCases,
  publishedExample: {
    inputs: { mode: 'dimensions', length: 5, width: 4, height: 2.7 },
    expected: ['54,00 м³', '48,60 м²'],
  },
  presentation: {
    id: 'room-volume',
    name: 'Калькулятор объёма помещения',
    slug: 'room-volume',
    fullPath: '/building/room-volume/',
    category: 'building',
    icon: 'square',
    popularity: 49,
    isNew: false,
    shortDescription: 'Объём комнаты по размерам или площади пола.',
    longDescription:
      'Считает объём помещения по длине, ширине и высоте или по известной площади пола и высоте. В режиме размеров дополнительно показывает периметр и площадь стен — величины, с которых начинается расчёт краски и обоев.',
    seoTitle: 'Калькулятор объёма помещения — кубометры по размерам',
    seoDescription:
      'Расчёт объёма комнаты в кубометрах по размерам или площади пола, а также периметр и площадь стен.',
    h1: 'Калькулятор объёма помещения',
    keywords: ['объём помещения', 'кубометры', 'площадь стен'],
    fields: [
      {
        name: 'mode', label: 'Как измеряем', type: 'toggle', defaultValue: 'dimensions',
        options: [
          { value: 'dimensions', label: 'По размерам комнаты' },
          { value: 'area', label: 'По площади пола' },
        ],
      },
      { name: 'length', label: 'Длина', type: 'number', unit: 'м', defaultValue: 5, min: 0.01, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'width', label: 'Ширина', type: 'number', unit: 'м', defaultValue: 4, min: 0.01, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'area', label: 'Площадь пола', type: 'number', unit: 'м²', defaultValue: 20, min: 0.01, showIf: { field: 'mode', equals: 'area' } },
      { name: 'height', label: 'Высота', type: 'number', unit: 'м', defaultValue: 2.7, min: 0.01, step: 0.1 },
    ],
    resultLabels: { volume: 'Объём помещения', floor: 'Площадь пола', walls: 'Площадь стен' },
    howToUse: [
      'Выберите, чем измеряете помещение.',
      'Введите размеры или площадь пола.',
      'Укажите высоту потолка.',
    ],
    howItWorks: 'Объём = площадь пола × высота. По размерам площадь стен = 2 × (длина + ширина) × высота.',
    example: 'Комната 5 × 4 м с потолком 2,7 м вмещает 54 м³.',
    faq: [
      { q: 'Почему в режиме площади нет площади стен?', a: 'Стены зависят от периметра, а одну и ту же площадь пола дают комнаты разной формы. Без длины и ширины считать не из чего.' },
      { q: 'Вычитаются ли двери и окна?', a: 'Нет, это полная величина. Проёмы учитывают калькуляторы краски и обоев.' },
      { q: 'Для чего нужен объём помещения?', a: 'Чаще всего для подбора вентиляции и отопления: там важен объём воздуха, который нужно прогреть или переместить.' },
      { q: 'Влияет ли форма потолка?', a: 'Калькулятор считает потолок ровным. Для скошенных и сводчатых потолков нужно брать среднюю высоту.' },
    ],
    relatedCalculatorIds: ['paint-calculator', 'wallpaper-calculator', 'laminate-calculator'],
    disclaimer: BUILD_DISCLAIMER,
  },
};
