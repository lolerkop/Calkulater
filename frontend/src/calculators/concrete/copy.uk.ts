import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор бетону",
  "slug": "beton",
  "shortDescription": "Об’єм бетону для плити, стрічки або стовпів із запасом на втрати.",
  "seoTitle": "Калькулятор бетону — об’єм для плити, стрічки та стовпів",
  "seoDescription": "Обчисліть об’єм бетону для плити, стрічкового фундаменту або стовпів із запасом на втрати.",
  "h1": "Калькулятор бетону",
  "keywords": [
    "калькулятор бетону",
    "об’єм бетону",
    "скільки бетону потрібно"
  ]
};

export const concreteCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
