import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batteryChargeTimeCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор часу заряджання батареї",
  "slug": "chas-zaryadzhannya",
  "shortDescription": "Скільки часу займе заряджання батареї за заданого струму.",
  "seoTitle": "Калькулятор часу заряджання батареї",
  "seoDescription": "Обчисліть час заряджання акумулятора за ємністю, струмом зарядного пристрою та ККД.",
  "h1": "Калькулятор часу заряджання батареї",
  "keywords": [
    "час заряджання акумулятора",
    "калькулятор заряджання батареї"
  ]
},
  ...contractContent.uk,
};
