import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { recipeCostCopyEn } from './copy.en';
import { recipeCostCopyUk } from './copy.uk';
import { recipeCostCopyDe } from './copy.de';
import { recipeCostCopyEs } from './copy.es';
import { recipeCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "recipe-cost",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: recipeCostCopyEn, uk: recipeCostCopyUk, de: recipeCostCopyDe, es: recipeCostCopyEs },
  referenceCases: recipeCostReferenceCases,
  publishedExample: { inputs: { ingredients: 'flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68', servings: 4 }, expected: ["55,23 ₽"] },
  presentation: {
    ...contractContent.ru,
    id: "recipe-cost",
    name: "Калькулятор стоимости рецепта",
    slug: "recipe-cost",
    fullPath: "/household/recipe-cost/",
    category: "household",
    icon: "shopping-basket",
    popularity: 38,
    isNew: false,
    shortDescription: "Себестоимость блюда по списку ингредиентов и цена одной порции.",
    seoTitle: "Калькулятор стоимости рецепта и цены порции",
    seoDescription: "Рассчитайте себестоимость блюда по списку ингредиентов с ценами и узнайте, во сколько обходится одна порция.",
    h1: "Калькулятор стоимости рецепта",
    keywords: ["стоимость рецепта", "себестоимость блюда", "цена порции", "расчёт стоимости готовки"],
    fields: [
      {
        name: 'ingredients', label: 'Ингредиенты: название, количество и цена в строке', type: 'textarea',
        // Умолчание не имеет пути локализации, поэтому названия здесь нейтральны:
        // русские слова утекли бы в английские данные.
        defaultValue: 'flour 0.5 45\nbutter 0.2 890\nsugar 0.3 68',
      },
      { name: 'servings', label: 'Порций', type: 'number', defaultValue: 4, min: 0, step: 1 },
    ],
    resultLabels: {
      "perServing": "Стоимость порции",
      "total": "Стоимость всего",
      "count": "Ингредиентов",
      "dearest": "Самый дорогой",
      "servings": "Порций",
      "table": "Состав и стоимость",
    },
    relatedCalculatorIds: ["price-per-unit", "cooked-weight", "stock-duration"],
  },
};
