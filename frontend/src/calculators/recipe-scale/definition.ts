import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { recipeScaleCopyEn } from './copy.en';
import { recipeScaleCopyUk } from './copy.uk';
import { recipeScaleCopyDe } from './copy.de';
import { recipeScaleCopyEs } from './copy.es';
import { recipeScaleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "recipe-scale",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: recipeScaleCopyEn, uk: recipeScaleCopyUk, de: recipeScaleCopyDe, es: recipeScaleCopyEs },
  referenceCases: recipeScaleReferenceCases,
  publishedExample: { inputs: { ingredients: 'flour 500\nwater 320\nsalt 10\nyeast 7', fromServings: 4, toServings: 6 }, expected: ["1,5"] },
  presentation: {
    ...contractContent.ru,
    id: "recipe-scale",
    name: "Калькулятор масштабирования рецепта",
    slug: "recipe-scale",
    fullPath: "/household/recipe-scale/",
    category: "household",
    icon: "repeat",
    popularity: 37,
    isNew: false,
    shortDescription: "Пересчёт всех ингредиентов рецепта на другое число порций.",
    seoTitle: "Калькулятор масштабирования рецепта на нужное число порций",
    seoDescription: "Пересчитайте ингредиенты рецепта с одного числа порций на другое и узнайте коэффициент пересчёта.",
    h1: "Калькулятор масштабирования рецепта",
    keywords: ["масштабирование рецепта", "пересчёт порций", "рецепт на другое количество", "коэффициент пересчёта"],
    fields: [
      {
        name: 'ingredients', label: 'Ингредиенты: название и количество в строке', type: 'textarea',
        // Умолчание не имеет пути локализации, поэтому названия нейтральны.
        defaultValue: 'flour 500\nwater 320\nsalt 10\nyeast 7',
      },
      { name: 'fromServings', label: 'Порций в рецепте', type: 'number', defaultValue: 4, min: 0, step: 1 },
      { name: 'toServings', label: 'Порций нужно', type: 'number', defaultValue: 6, min: 0, step: 1 },
    ],
    resultLabels: {
      "coefficient": "Коэффициент",
      "count": "Ингредиентов",
      "oldTotal": "Было всего",
      "newTotal": "Стало всего",
      "from": "Порций было",
      "to": "Порций стало",
      "table": "Пересчёт ингредиентов",
    },
    relatedCalculatorIds: ["recipe-cost", "bakers-percentage", "proportion"],
  },
};
