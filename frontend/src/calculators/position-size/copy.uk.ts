import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const positionSizeCopyUk: CalculatorCopy = {
  "name": "Калькулятор розміру позиції",
  "slug": "rozmir-pozytsii",
  "shortDescription": "Обсяг угоди за допустимим ризиком на депозит і відстанню до стоп-наказу.",
  "seoTitle": "Калькулятор розміру позиції за ризиком",
  "seoDescription": "Розрахуйте обсяг угоди за допустимим ризиком на депозит і відстанню від ціни входу до стоп-наказу, включно з часткою депозиту.",
  "h1": "Калькулятор розміру позиції",
  "keywords": [
    "розмір позиції",
    "ризик на угоду",
    "обсяг угоди за стопом"
  ],
  ...contractContent.uk,
};
