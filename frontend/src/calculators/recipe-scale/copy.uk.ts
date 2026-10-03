import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const recipeScaleCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор масштабування рецепта",
  "slug": "masshtabuvannya-retsepta",
  "shortDescription": "Перерахунок усіх інгредієнтів рецепта на іншу кількість порцій.",
  "seoTitle": "Калькулятор масштабування рецепта на потрібну кількість порцій",
  "seoDescription": "Перерахуйте інгредієнти рецепта з однієї кількості порцій на іншу та дізнайтеся коефіцієнт перерахунку.",
  "h1": "Калькулятор масштабування рецепта",
  "keywords": [
    "масштабування рецепта",
    "перерахунок порцій",
    "коефіцієнт перерахунку"
  ]
},
  ...contractContent.uk,
};
