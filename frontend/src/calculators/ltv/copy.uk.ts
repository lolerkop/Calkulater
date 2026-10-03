import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const ltvCopyUk: CalculatorCopy = {
  "name": "Калькулятор LTV",
  "slug": "ltv",
  "shortDescription": "Цінність клієнта за строком життя або відтіком.",
  "seoTitle": "Калькулятор LTV — цінність клієнта за весь час",
  "seoDescription": "Цінність клієнта за місячним виторгом, строком або сталим місячним відтоком і валовою маржею, до CAC та неврахованих витрат.",
  "h1": "Калькулятор LTV",
  "keywords": [
    "ltv калькулятор",
    "цінність клієнта",
    "ltv до cac"
  ],
  ...contractContent.uk,
};
