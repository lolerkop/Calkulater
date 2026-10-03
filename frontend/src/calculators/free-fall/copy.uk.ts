import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const freeFallCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор вільного падіння",
  "slug": "vilne-padinnya",
  "shortDescription": "Швидкість біля землі та час падіння за висотою або за часом.",
  "seoTitle": "Калькулятор вільного падіння — швидкість і час",
  "seoDescription": "Розрахуйте швидкість біля землі та час вільного падіння за висотою або за часом.",
  "h1": "Калькулятор вільного падіння",
  "keywords": [
    "вільне падіння",
    "швидкість падіння",
    "час падіння"
  ]
},
  ...contract.uk,
};
