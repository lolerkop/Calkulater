import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор кубатури дошок",
  "slug": "kubatura-doshok",
  "shortDescription": "Об’єм пиломатеріалу, об’єм однієї дошки та скільки дошок у кубометрі.",
  "seoTitle": "Калькулятор кубатури дошок — об’єм пиломатеріалу",
  "seoDescription": "Обчисліть об’єм дошок у кубометрах за довжиною та перерізом, а також кількість дошок у кубометрі.",
  "h1": "Калькулятор кубатури дошок",
  "keywords": [
    "кубатура дошок",
    "об’єм дошки",
    "скільки дошок у кубі"
  ]
};

export const boardVolumeCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
