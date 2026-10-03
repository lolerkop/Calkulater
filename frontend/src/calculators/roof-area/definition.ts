import { buildingWave16ContractContent } from './contractContent';
// Площадь крыши по габаритам основания и уклону.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roofAreaCopyEn } from './copy.en';
import { roofAreaCopyUk } from './copy.uk';
import { roofAreaCopyDe } from './copy.de';
import { roofAreaCopyEs } from './copy.es';
import { roofAreaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'roof-area',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roofAreaCopyEn, uk: roofAreaCopyUk, de: roofAreaCopyDe, es: roofAreaCopyEs },
  referenceCases: roofAreaReferenceCases,
  publishedExample: { inputs: { mode: 'gable', length: 10, width: 8, slopeMode: 'degrees', angle: 30 }, expected: ['92,376 м²'] },
  presentation: {
    id: 'roof-area',
    name: 'Калькулятор площади крыши',
    slug: 'roof-area',
    fullPath: '/building/roof-area/',
    category: 'building',
    icon: 'wall',
    popularity: 49,
    isNew: false,
    shortDescription: 'Площадь скатов по размерам основания и уклону, в градусах или процентах.',
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор площади крыши — скаты по уклону',
    seoDescription: 'Рассчитайте площадь крыши по длине и ширине основания и уклону в градусах или процентах.',
    h1: 'Калькулятор площади крыши',
    keywords: ['площадь крыши', 'калькулятор кровли', 'площадь ската', 'уклон крыши'],
    fields: [
      {
        name: 'mode', label: 'Форма крыши', type: 'select', defaultValue: 'gable',
        options: [
          { value: 'shed', label: 'односкатная' },
          { value: 'gable', label: 'двускатная' },
          { value: 'hip', label: 'вальмовая' },
        ],
      },
      { name: 'length', label: "Длина основания", type: 'number', defaultValue: 10, min: 0, step: 0.1 , unit: "м" },
      { name: 'width', label: "Ширина основания", type: 'number', defaultValue: 8, min: 0, step: 0.1 , unit: "м" },
      {
        name: 'slopeMode', label: 'Как задан уклон', type: 'select', defaultValue: 'degrees',
        options: [
          { value: 'degrees', label: 'в градусах' },
          { value: 'percent', label: 'в процентах' },
        ],
      },
      { name: 'angle', label: "Уклон", type: 'number', defaultValue: 30, min: 0, max: 90, step: 1, showIf: { field: 'slopeMode', equals: 'degrees' } , unit: "°" },
      { name: 'slopePercent', label: "Уклон", type: 'number', defaultValue: 30, min: 0, step: 1, showIf: { field: 'slopeMode', equals: 'percent' } , unit: "%" },
    ],
    resultLabels: {
      total: 'Площадь крыши', slope: 'Площадь одного ската', slopes: 'Скатов',
      plan: 'Площадь основания', angle: 'Уклон', check: 'Проверьте данные',
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ['insulation', 'brick-calculator', 'room-volume'],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
