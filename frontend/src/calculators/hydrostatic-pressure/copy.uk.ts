import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hydrostaticPressureCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор гідростатичного тиску",
  "slug": "hidrostatychnyi-tysk",
  "shortDescription": "Тиск стовпа рідини за густиною та глибиною.",
  "seoTitle": "Калькулятор гідростатичного тиску — p = ρgh",
  "seoDescription": "Обчисліть гідростатичний тиск стовпа рідини за густиною та глибиною, з атмосферним тиском або без нього.",
  "h1": "Калькулятор гідростатичного тиску",
  "keywords": [
    "гідростатичний тиск",
    "тиск стовпа рідини",
    "тиск на глибині"
  ]
},
  ...contract.uk,
};
