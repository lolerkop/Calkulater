import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const inventoryTurnoverCopyUk: CalculatorCopy = {
  "name": "Калькулятор оборотності запасів",
  "slug": "oborotnist-zapasiv",
  "shortDescription": "Оборотність запасів і термін зберігання за собівартістю продажів.",
  "seoTitle": "Калькулятор оборотності запасів — обороти й дні зберігання",
  "seoDescription": "Обчисліть оборотність запасів за собівартістю продажів і середнім запасом.",
  "h1": "Калькулятор оборотності запасів",
  "keywords": [
    "оборотність запасів",
    "калькулятор оборотності"
  ],
  ...contractContent.uk,
};
