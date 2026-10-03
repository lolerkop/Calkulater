import { buildingWave16ContractContent } from './contractContent';
// Ленточный фундамент: объём бетона по длине ленты.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stripFoundationCopyEn } from './copy.en';
import { stripFoundationCopyUk } from './copy.uk';
import { stripFoundationCopyDe } from './copy.de';
import { stripFoundationCopyEs } from './copy.es';
import { stripFoundationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'strip-foundation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: stripFoundationCopyEn, uk: stripFoundationCopyUk, de: stripFoundationCopyDe, es: stripFoundationCopyEs },
  referenceCases: stripFoundationReferenceCases,
  publishedExample: { inputs: { perimeter: 40, width: 0.4, depth: 0.8, waste: 5 }, expected: ['13,44 м³'] },
  presentation: {
    id: 'strip-foundation',
    name: 'Калькулятор ленточного фундамента',
    slug: 'strip-foundation',
    fullPath: '/building/strip-foundation/',
    category: 'building',
    icon: 'wall',
    popularity: 52,
    isNew: false,
    shortDescription: 'Объём бетона для ленты по её длине, ширине и глубине.',
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор ленточного фундамента — объём бетона',
    seoDescription: 'Рассчитайте объём бетона для ленточного фундамента по длине ленты, её ширине и глубине с запасом.',
    h1: 'Калькулятор ленточного фундамента',
    keywords: ['ленточный фундамент', 'объём бетона на фундамент', 'калькулятор фундамента', 'бетон на ленту'],
    fields: [
      { name: 'perimeter', label: "Общая длина ленты", type: 'number', defaultValue: 40, min: 0, step: 0.1 , unit: "м" },
      { name: 'width', label: "Ширина ленты", type: 'number', defaultValue: 0.4, min: 0, step: 0.05 , unit: "м" },
      { name: 'depth', label: "Глубина ленты", type: 'number', defaultValue: 0.8, min: 0, step: 0.05 , unit: "м" },
      { name: 'waste', label: "Запас", type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 , unit: "%" },
    ],
    resultLabels: { total: 'Объём бетона', clean: 'Чистый объём', waste: 'Запас', section: 'Площадь сечения ленты' },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ['concrete', 'brick-calculator', 'screed-calculator'],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
