import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { caloriesPerServingCopyEn } from './copy.en';
import { caloriesPerServingCopyUk } from './copy.uk';
import { caloriesPerServingCopyDe } from './copy.de';
import { caloriesPerServingCopyEs } from './copy.es';
import { caloriesPerServingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "calories-per-serving",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: caloriesPerServingCopyEn, uk: caloriesPerServingCopyUk, de: caloriesPerServingCopyDe, es: caloriesPerServingCopyEs },
  referenceCases: caloriesPerServingReferenceCases,
  publishedExample: { inputs: { ingredients: 'мука 300 364\nмасло 100 717\nсахар 150 387', servings: 4 }, expected: ["597 ккал"] },
  presentation: {
    ...contractContent.ru,
    id: "calories-per-serving",
    name: "Калькулятор калорий на порцию",
    slug: "kalorii-na-porciyu",
    fullPath: "/household/kalorii-na-porciyu/",
    category: "household",
    icon: "shopping-basket",
    popularity: 46,
    isNew: false,
    shortDescription: "Калорийность всего блюда и одной порции по списку ингредиентов.",
    seoTitle: "Калькулятор калорий на порцию по списку ингредиентов",
    seoDescription: "Посчитайте калорийность блюда по ингредиентам и узнайте, сколько калорий в одной порции.",
    h1: "Калькулятор калорий на порцию",
    keywords: ["калории на порцию", "калорийность рецепта", "калорийность блюда", "калории по ингредиентам"],
    fields: [
      {
        name: 'ingredients', label: 'Ингредиенты: название, граммы и ккал на 100 г в строке', type: 'textarea',
        // Умолчание не имеет пути локализации, поэтому названия здесь нейтральны.
        defaultValue: 'flour 300 364\nbutter 100 717\nsugar 150 387',
      },
      { name: 'servings', label: 'Порций', type: 'number', defaultValue: 4, min: 0, step: 1 },
    ],
    resultLabels: {
      "perServing": "Калорий в порции",
      "total": "Всего калорий",
      "count": "Ингредиентов",
      "topName": "Самый калорийный",
      "servings": "Порций",
      "massPerServing": "Масса порции",
      "table": "Вклад ингредиентов",
    },
    relatedCalculatorIds: ["recipe-cost", "recipe-scale", "cooked-weight"],
  },
};
