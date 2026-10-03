import { buildingWave16ContractContent } from './contractContent';
// Объём помещения — завершающий калькулятор волны: режимы, условные поля,
// единицы и разный набор результатов в зависимости от того, что известно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { BUILD_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { roomVolumeCopyEn } from './copy.en';
import { roomVolumeCopyUk } from './copy.uk';
import { roomVolumeCopyDe } from './copy.de';
import { roomVolumeCopyEs } from './copy.es';
import { roomVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'room-volume',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roomVolumeCopyEn, uk: roomVolumeCopyUk, de: roomVolumeCopyDe, es: roomVolumeCopyEs },
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
      buildingWave16ContractContent.ru.longDescription,
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
      { name: 'length', label: "Длина", type: 'number', unit: 'м', defaultValue: 5, min: 0.01, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'width', label: "Ширина", type: 'number', unit: 'м', defaultValue: 4, min: 0.01, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'area', label: "Площадь пола", type: 'number', unit: 'м²', defaultValue: 20, min: 0.01, showIf: { field: 'mode', equals: 'area' } },
      { name: 'height', label: "Высота", type: 'number', unit: 'м', defaultValue: 2.7, min: 0.01, step: 0.1 },
    ],
    resultLabels: { volume: 'Объём помещения', floor: 'Площадь пола', walls: 'Площадь стен' },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks: buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ['paint-calculator', 'wallpaper-calculator', 'laminate-calculator'],
    disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
