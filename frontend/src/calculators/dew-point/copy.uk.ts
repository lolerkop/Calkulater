import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const dewPointCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор точки роси",
  "slug": "tochka-rosy",
  "shortDescription": "Температура, за якої повітря такої вологості почне віддавати вологу.",
  "seoTitle": "Калькулятор точки роси — за температурою та вологістю",
  "seoDescription": "Розрахуйте точку роси за температурою повітря та відносною вологістю, із розривом до поточної температури.",
  "h1": "Калькулятор точки роси",
  "keywords": [
    "точка роси",
    "калькулятор точки роси",
    "конденсат на стіні"
  ]
},
 ...contract.uk,
};
