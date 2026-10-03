import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const marketCapCopyUk: CalculatorCopy = {
  "name": "Калькулятор ринкової капіталізації",
  "slug": "rynkova-kapitalizatsiya",
  "shortDescription": "Ринкова капіталізація за кількістю акцій і ціною однієї акції.",
  "seoTitle": "Калькулятор ринкової капіталізації — акції × ціна",
  "seoDescription": "Обчисліть ринкову капіталізацію компанії за кількістю акцій та ціною акції.",
  "h1": "Калькулятор ринкової капіталізації",
  "keywords": [
    "калькулятор капіталізації",
    "ринкова капіталізація"
  ],
  ...contractContent.uk,
};
