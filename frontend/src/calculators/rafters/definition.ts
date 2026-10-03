import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { BUILD_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { raftersCopyEn } from './copy.en';
import { raftersCopyUk } from './copy.uk';
import { raftersCopyDe } from './copy.de';
import { raftersCopyEs } from './copy.es';
import { raftersReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'rafters',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: raftersCopyEn, uk: raftersCopyUk, de: raftersCopyDe, es: raftersCopyEs },
  referenceCases: raftersReferenceCases,
  publishedExample: {
    inputs: { span: 8, rise: 2.4, overhang: 0.5 },
    expected: ['5,165 м'],
  },
  presentation: {
    id: 'rafters',
    name: 'Калькулятор длины стропил',
    slug: 'rafters',
    fullPath: '/building/rafters/',
    category: 'building',
    icon: 'triangle',
    popularity: 22,
    isNew: false,
    shortDescription: 'Длина стропила, угол наклона и уклон двускатной крыши.',
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор длины стропил двускатной крыши',
    seoDescription:
      'Рассчитайте длину стропила по пролёту, подъёму конька и свесу вместе с углом наклона и уклоном кровли в процентах.',
    h1: 'Калькулятор длины стропил',
    keywords: ['длина стропил', 'угол крыши', 'уклон кровли', 'двускатная крыша'],
    fields: [
      { name: 'span', label: "Пролёт здания", type: 'number', defaultValue: 8, min: 0, step: 0.5 , unit: "м" },
      { name: 'rise', label: "Подъём конька", type: 'number', defaultValue: 2.4, min: 0, step: 0.1 , unit: "м" },
      { name: 'overhang', label: "Свес вдоль стропила", type: 'number', defaultValue: 0.5, min: 0, step: 0.1 , unit: "м" },
    ],
    resultLabels: {
      length: 'Длина стропила',
      angle: 'Угол наклона',
      run: 'Заложение',
      slope: 'Уклон',
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ['roof-area', 'slope', 'board-volume'],
    disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
