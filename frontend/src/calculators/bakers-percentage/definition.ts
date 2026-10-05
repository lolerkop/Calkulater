import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bakersPercentageCopyEn } from './copy.en';
import { bakersPercentageCopyUk } from './copy.uk';
import { bakersPercentageCopyDe } from './copy.de';
import { bakersPercentageCopyEs } from './copy.es';
import { bakersPercentageReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bakers-percentage",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: bakersPercentageCopyEn, uk: bakersPercentageCopyUk, de: bakersPercentageCopyDe, es: bakersPercentageCopyEs },
  referenceCases: bakersPercentageReferenceCases,
  publishedExample: { inputs: { flour: 500, ingredients: 'water 68\nsalt 2\nyeast 1.2' }, expected: ["856 г"] },
  presentation: {
    ...contractContent.ru,
    id: "bakers-percentage",
    name: "Калькулятор пекарских процентов",
    slug: "bakers-percentage",
    fullPath: "/household/bakers-percentage/",
    category: "household",
    icon: "layers",
    popularity: 36,
    isNew: false,
    shortDescription: "Вес ингредиентов и гидратация теста по пекарским процентам от муки.",
    seoTitle: "Калькулятор пекарских процентов и гидратации теста",
    seoDescription: "Переведите пекарские проценты в граммы для своего количества муки и рассчитайте гидратацию теста.",
    h1: "Калькулятор пекарских процентов",
    keywords: ["пекарские проценты", "гидратация теста", "расчёт теста", "рецепт хлеба в процентах"],
    fields: [
      { name: 'flour', label: 'Мука, г', type: 'number', defaultValue: 500, min: 0, step: 10 },
      {
        name: 'ingredients', label: 'Ингредиенты: название и процент от муки в строке', type: 'textarea',
        defaultValue: 'вода 68\nсоль 2\nдрожжи 1,2',
        defaultValueByLocale: {
          en: 'water 68\nsalt 2\nyeast 1.2',
          uk: 'вода 68\nсіль 2\nдріжджі 1,2',
          de: 'Wasser 68\nSalz 2\nHefe 1,2',
          es: 'agua 68\nsal 2\nlevadura 1,2',
        },
      },
    ],
    resultLabels: {
      "dough": "Вес теста",
      "hydration": "Гидратация",
      "flour": "Мука",
      "count": "Ингредиентов",
      "table": "Ингредиенты по пекарским процентам",
    },
    relatedCalculatorIds: ["recipe-scale", "recipe-cost", "percent-calculator"],
  },
};
