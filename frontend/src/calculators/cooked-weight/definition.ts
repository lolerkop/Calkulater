import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { cookedWeightCopyEn } from './copy.en';
import { cookedWeightCopyUk } from './copy.uk';
import { cookedWeightCopyDe } from './copy.de';
import { cookedWeightCopyEs } from './copy.es';
import { cookedWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "cooked-weight",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: cookedWeightCopyEn, uk: cookedWeightCopyUk, de: cookedWeightCopyDe, es: cookedWeightCopyEs },
  referenceCases: cookedWeightReferenceCases,
  publishedExample: {
    inputs: { mode: 'rawToCooked', raw: 200, cooked: 0, factor: 2.5, kcalPer100Raw: 350 },
    expected: ["500 г"],
  },
  presentation: {
    ...contractContent.ru,
    id: "cooked-weight",
    name: "Калькулятор сухого и готового веса",
    slug: "cooked-weight",
    fullPath: "/household/cooked-weight/",
    category: "household",
    icon: "shopping-basket",
    popularity: 37,
    isNew: false,
    shortDescription: "Пересчёт сухого веса крупы в готовый и обратно вместе с калорийностью порции.",
    seoTitle: "Калькулятор сухого и готового веса продуктов",
    seoDescription: "Пересчитайте сухой вес крупы в готовый и обратно, а также калорийность ста граммов готового блюда по коэффициенту разварки.",
    h1: "Калькулятор сухого и готового веса",
    keywords: ["сухой и готовый вес", "коэффициент разварки", "калорийность готовой каши", "вес крупы после варки"],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'rawToCooked',
        options: [
          { value: 'rawToCooked', label: 'сырой/сухой вес — найти готовый' },
          { value: 'cookedToRaw', label: 'готовый вес — найти сырой/сухой' },
        ],
      },
      { name: 'raw', label: 'Сырой или сухой вес, г', type: 'number', defaultValue: 200, min: 0, step: 10, showIf: { field: 'mode', equals: 'rawToCooked' } },
      { name: 'cooked', label: 'Готовый вес, г', type: 'number', defaultValue: 500, min: 0, step: 10, showIf: { field: 'mode', equals: 'cookedToRaw' } },
      { name: 'factor', label: 'Коэффициент готового к исходному весу', type: 'number', defaultValue: 2.5, min: 0, step: 0.1 },
      { name: 'kcalPer100Raw', label: 'Ккал на 100 г исходного', type: 'number', defaultValue: 350, min: 0, step: 10 },
    ],
    resultLabels: {
      "cooked": "Готовый вес",
      "raw": "Сухой вес",
      "factor": "Коэффициент разварки",
      "kcal": "Калорий всего",
      "per100": "Ккал на 100 г готового",
    },
    relatedCalculatorIds: ["price-per-unit", "stock-duration", "calories-from-macros"],
  },
};
