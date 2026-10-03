import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const generatorFuelCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор витрати пального генератора",
  "slug": "vytrata-palnoho-heneratora",
  "shortDescription": "Скільки пального спалить генератор за зміну і скільки це коштує.",
  "seoTitle": "Калькулятор витрати пального генератора",
  "seoDescription": "Обчисліть витрату пального генератора за навантаженням, питомою витратою та часом роботи.",
  "h1": "Калькулятор витрати пального генератора",
  "keywords": [
    "витрата пального генератора",
    "скільки пального їсть генератор"
  ]
},
  ...contractContent.uk,
};
