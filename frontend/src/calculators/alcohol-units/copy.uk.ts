import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const alcoholUnitsCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор стандартних одиниць алкоголю",
  "slug": "odynyci-alkoholyu",
  "shortDescription": "Скільки чистого спирту та стандартних одиниць у порції напою.",
  "seoTitle": "Калькулятор стандартних одиниць алкоголю та чистого спирту",
  "seoDescription": "Розрахуйте, скільки чистого спирту та стандартних одиниць містить порція напою за об'ємом і міцністю.",
  "h1": "Калькулятор стандартних одиниць алкоголю",
  "keywords": [
    "стандартна одиниця алкоголю",
    "скільки спирту у вині",
    "чистий спирт у напої"
  ]
},
  ...contractContent.uk,
};
