import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const stressStrainCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор напруження та модуля Юнга",
  "slug": "napruha-i-deformaciya",
  "shortDescription": "Напруження, відносна деформація та модуль Юнга під час розтягу.",
  "seoTitle": "Калькулятор напруження та модуля Юнга — розтяг зразка",
  "seoDescription": "Розрахуйте напруження, відносну деформацію та модуль Юнга під час розтягу за силою, перерізом, довжиною та видовженням.",
  "h1": "Калькулятор напруження та модуля Юнга",
  "keywords": [
    "модуль Юнга",
    "напруження розтягу",
    "відносна деформація"
  ]
},
 ...contract.uk,
};
