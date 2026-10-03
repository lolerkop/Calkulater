import { buildingWave13ContractContent } from './contractContent';
import { validate } from './validate';
// Бетон: объём заливки по форме плюс запас.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { concreteCopyEn } from './copy.en';
import { concreteCopyUk } from './copy.uk';
import { concreteCopyDe } from './copy.de';
import { concreteCopyEs } from './copy.es';
import { concreteReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'concrete',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: concreteCopyEn, uk: concreteCopyUk, de: concreteCopyDe, es: concreteCopyEs },
  referenceCases: concreteReferenceCases,
  publishedExample: { inputs: { mode: 'slab', length: 6, width: 4, thickness: 0.2, waste: 5 }, expected: ['5,04 м³'] },
  presentation: {
    id: 'concrete',
    name: 'Калькулятор бетона',
    slug: 'concrete',
    fullPath: '/building/concrete/',
    category: 'building',
    icon: 'wall',
    popularity: 53,
    isNew: false,
    shortDescription: 'Объём бетона для плиты, ленты или столбов с запасом на потери.',
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор бетона — объём для плиты, ленты и столбов',
    seoDescription: 'Рассчитайте объём бетона для плиты, ленточного фундамента или столбов с запасом на потери.',
    h1: 'Калькулятор бетона',
    keywords: ['калькулятор бетона', 'объём бетона', 'сколько бетона нужно', 'бетон на фундамент'],
    fields: [
      {
        name: 'mode', label: 'Форма заливки', type: 'select', defaultValue: 'slab',
        options: [
          { value: 'slab', label: 'плита' },
          { value: 'strip', label: 'лента' },
          { value: 'columns', label: 'столбы' },
        ],
      },
      { name: 'length', label: "Длина плиты", type: 'number', unit: "м", defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'slab' } },
      { name: 'width', label: "Ширина плиты", type: 'number', unit: "м", defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'slab' } },
      { name: 'thickness', label: "Толщина плиты", type: 'number', unit: "м", defaultValue: 0.2, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'slab' } },
      { name: 'perimeter', label: "Длина ленты", type: 'number', unit: "м", defaultValue: 40, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'strip' } },
      { name: 'stripWidth', label: "Ширина ленты", type: 'number', unit: "м", defaultValue: 0.4, min: 0, step: 0.05, showIf: { field: 'mode', equals: 'strip' } },
      { name: 'depth', label: "Глубина ленты", type: 'number', unit: "м", defaultValue: 0.8, min: 0, step: 0.05, showIf: { field: 'mode', equals: 'strip' } },
      { name: 'sectionArea', label: "Площадь сечения столба", type: 'number', unit: "м²", defaultValue: 0.09, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'columns' } },
      { name: 'height', label: "Высота столба", type: 'number', unit: "м", defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'columns' } },
      { name: 'count', label: 'Количество столбов', type: 'number', defaultValue: 12, min: 1, step: 1, showIf: { field: 'mode', equals: 'columns' } },
      { name: 'waste', label: "Запас", type: 'number', unit: "%", defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: { total: 'Объём бетона', clean: 'Чистый объём', waste: 'Запас' },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ['brick-calculator', 'screed-calculator', 'room-volume'],
  },
};

