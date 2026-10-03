import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const poolFillTimeCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор наповнення басейну",
  "slug": "napovnennya-baseynu",
  "shortDescription": "За скільки наповниться басейн за відомої витрати води.",
  "seoTitle": "Калькулятор наповнення басейну — години за об’ємом",
  "seoDescription": "Дізнайтеся, за скільки наповниться басейн, за його об’ємом або розмірами та витратою води.",
  "h1": "Калькулятор наповнення басейну",
  "keywords": [
    "наповнення басейну",
    "об’єм басейну",
    "витрата води"
  ]
},
  ...contractContent.uk,
};
