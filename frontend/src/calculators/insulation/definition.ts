import { buildingWave13ContractContent } from './contractContent';
import { validate } from './validate';
// Утеплитель: объём, число плит и упаковок.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { insulationCopyEn } from './copy.en';
import { insulationCopyUk } from './copy.uk';
import { insulationCopyDe } from './copy.de';
import { insulationCopyEs } from './copy.es';
import { insulationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'insulation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: insulationCopyEn, uk: insulationCopyUk, de: insulationCopyDe, es: insulationCopyEs },
  referenceCases: insulationReferenceCases,
  publishedExample: { inputs: { area: 60, thickness: 100, slabArea: 0.72, perPack: 6 }, expected: ['6 м³'] },
  presentation: {
    id: 'insulation',
    name: 'Калькулятор утеплителя',
    slug: 'insulation',
    fullPath: '/building/insulation/',
    category: 'building',
    icon: 'wall',
    popularity: 50,
    isNew: false,
    shortDescription: 'Объём утеплителя, число плит и упаковок по площади и толщине.',
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор утеплителя — объём, плиты и упаковки',
    seoDescription: 'Рассчитайте объём утеплителя, число плит и число упаковок по площади утепления и толщине слоя.',
    h1: 'Калькулятор утеплителя',
    keywords: ['калькулятор утеплителя', 'сколько утеплителя нужно', 'утеплитель на м2', 'расчёт минваты'],
    fields: [
      { name: 'area', label: "Площадь утепления", type: 'number', unit: "м²", defaultValue: 60, min: 0, step: 0.1 },
      { name: 'thickness', label: "Толщина слоя", type: 'number', unit: "мм", defaultValue: 100, min: 0, step: 10 },
      { name: 'slabArea', label: "Площадь одной плиты", type: 'number', unit: "м²", defaultValue: 0.72, min: 0, step: 0.01 },
      { name: 'perPack', label: 'Плит в упаковке', type: 'number', defaultValue: 6, min: 1, step: 1 },
    ],
    resultLabels: { volume: 'Объём утеплителя', slabs: 'Плит', packs: 'Упаковок', slabArea: 'Площадь одной плиты' },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ['plaster', 'paint-calculator', 'room-volume'],
  },
};

