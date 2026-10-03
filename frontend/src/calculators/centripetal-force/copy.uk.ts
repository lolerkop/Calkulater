import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const centripetalForceCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор доцентрової сили",
  "slug": "dotsentrova-syla",
  "shortDescription": "Доцентрова сила, прискорення, кутова швидкість і період обертання.",
  "seoTitle": "Калькулятор доцентрової сили та прискорення",
  "seoDescription": "Розрахунок доцентрової сили за масою, швидкістю та радіусом разом із доцентровим прискоренням, кутовою швидкістю та періодом обертання.",
  "h1": "Калькулятор доцентрової сили",
  "keywords": [
    "доцентрова сила",
    "рух по колу",
    "кутова швидкість",
    "період обертання"
  ]
},
  ...contract.uk,
};
