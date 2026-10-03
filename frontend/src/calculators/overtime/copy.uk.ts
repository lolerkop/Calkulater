import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const overtimeCopyUk: CalculatorCopy = {
  "name": "Калькулятор надурочних",
  "slug": "nadurochni",
  "shortDescription": "Оплата за місяць із надурочними годинами та середня ставка за годину.",
  "seoTitle": "Калькулятор надурочних: оплата та середня ставка",
  "seoDescription": "Розрахунок оплати за місяць за ставкою, звичайними та надурочними годинами і коефіцієнтом, разом із середньою ставкою за годину.",
  "h1": "Калькулятор надурочних",
  "keywords": [
    "надурочні",
    "оплата понаднормових",
    "ставка за годину",
    "коефіцієнт надурочних"
  ],
  ...contractContent.uk,
};
