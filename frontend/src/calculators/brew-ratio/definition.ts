import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { brewRatioCopyEn } from './copy.en';
import { brewRatioCopyUk } from './copy.uk';
import { brewRatioCopyDe } from './copy.de';
import { brewRatioCopyEs } from './copy.es';
import { brewRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "brew-ratio",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: brewRatioCopyEn, uk: brewRatioCopyUk, de: brewRatioCopyDe, es: brewRatioCopyEs },
  referenceCases: brewRatioReferenceCases,
  publishedExample: { inputs: { mode: 'coffee', water: 500, coffee: 30, ratio: 16 }, expected: ["31,25 г"] },
  presentation: {
    ...contractContent.ru,
    id: "brew-ratio",
    name: "Калькулятор соотношения кофе и воды",
    slug: "sootnoshenie-kofe-i-vody",
    fullPath: "/household/sootnoshenie-kofe-i-vody/",
    category: "household",
    icon: "shopping-basket",
    popularity: 36,
    isNew: false,
    shortDescription: "Сколько кофе на объём воды при заданном соотношении заварки.",
    seoTitle: "Калькулятор соотношения кофе и воды — навеска под объём",
    seoDescription: "Рассчитайте, сколько кофе нужно на заданный объём воды при соотношении 1:15, 1:16 или 1:18, или найдите соотношение по своей чашке.",
    h1: "Калькулятор соотношения кофе и воды",
    keywords: ["соотношение кофе и воды", "сколько кофе на 500 мл", "пропорция кофе воронка", "калькулятор заварки кофе"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'coffee',
        options: [
          { value: 'coffee', label: 'массу кофе' },
          { value: 'water', label: 'объём воды' },
          { value: 'ratio', label: 'соотношение' },
        ],
      },
      { name: 'water', label: 'Вода, мл', type: 'number', defaultValue: 500, min: 0, step: 10, showIf: { field: 'mode', oneOf: ['coffee', 'ratio'] } },
      { name: 'coffee', label: 'Кофе, г', type: 'number', defaultValue: 30, min: 0, step: 0.5, showIf: { field: 'mode', oneOf: ['water', 'ratio'] } },
      { name: 'ratio', label: 'Соотношение 1:k', type: 'number', defaultValue: 16, min: 0, step: 0.5, showIf: { field: 'mode', oneOf: ['coffee', 'water'] } },
    ],
    resultLabels: {
      "coffee": "Кофе",
      "water": "Вода",
      "ratio": "Соотношение",
      "absorbed": "Условная ёмкость гущи",
    },
    relatedCalculatorIds: ["recipe-scale", "recipe-cost", "price-per-unit"],
  },
};
