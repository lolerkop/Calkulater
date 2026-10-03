import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const caloriesPerServingCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор калорій на порцію",
  "slug": "kalorii-na-porciyu-ua",
  "shortDescription": "Калорійність усієї страви і однієї порції за списком інгредієнтів.",
  "seoTitle": "Калькулятор калорій на порцію за списком інгредієнтів",
  "seoDescription": "Порахуйте калорійність страви за інгредієнтами і дізнайтеся, скільки калорій в одній порції.",
  "h1": "Калькулятор калорій на порцію",
  "keywords": [
    "калорії на порцію",
    "калорійність рецепта",
    "калорійність страви",
    "калорії за інгредієнтами"
  ]
},
  ...contractContent.uk,
};
