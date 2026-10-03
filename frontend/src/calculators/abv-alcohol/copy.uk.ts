import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const abvAlcoholCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор міцності за щільністю",
  "slug": "mitsnist-za-shchilnistyu",
  "shortDescription": "Міцність напою за щільністю сусла до і після бродіння.",
  "seoTitle": "Калькулятор міцності за щільністю — ABV для пива, вина, браги",
  "seoDescription": "Розрахуйте міцність напою за початковою та кінцевою щільністю сусла.",
  "h1": "Калькулятор міцності за щільністю",
  "keywords": [
    "міцність за щільністю",
    "ABV",
    "початкова щільність сусла"
  ]
},
  ...contractContent.uk,
};
