import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор кута запилу",
  "slug": "kut-zapylu",
  "shortDescription": "Кут різу двох планок для з’єднання на вус.",
  "seoTitle": "Калькулятор кута запилу — з’єднання на вус",
  "seoDescription": "Розрахуйте кут різу плінтуса чи багета для з’єднання на вус і значення для шкали торцювальної пилки.",
  "h1": "Калькулятор кута запилу",
  "keywords": [
    "кут запилу",
    "з’єднання на вус",
    "торцювальна пилка"
  ]
};

export const miterAngleCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
