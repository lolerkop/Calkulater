import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const buoyancyCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор виштовхувальної сили",
  "slug": "vyshtovhuvalna-syla",
  "shortDescription": "Сила Архімеда, вага тіла і чи спливе воно.",
  "seoTitle": "Калькулятор виштовхувальної сили — закон Архімеда",
  "seoDescription": "Розрахуйте силу Архімеда за об’ємом тіла та густиною рідини, з вагою і рівнодійною.",
  "h1": "Калькулятор виштовхувальної сили",
  "keywords": [
    "сила Архімеда",
    "виштовхувальна сила",
    "плавучість"
  ]
},
  ...contract.uk,
};
