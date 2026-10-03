import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор стрічкового фундаменту",
  "slug": "strichkovyi-fundament",
  "shortDescription": "Об’єм бетону для стрічки за її довжиною, шириною та глибиною.",
  "seoTitle": "Калькулятор стрічкового фундаменту — об’єм бетону",
  "seoDescription": "Обчисліть об’єм бетону для стрічкового фундаменту за довжиною стрічки, її шириною та глибиною.",
  "h1": "Калькулятор стрічкового фундаменту",
  "keywords": [
    "стрічковий фундамент",
    "об’єм бетону на фундамент"
  ]
};
export const stripFoundationCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
