import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const leasePaymentCopyUk: CalculatorCopy = {
  "name": "Калькулятор платежу за лізингом",
  "slug": "platizh-za-lizyngom",
  "shortDescription": "Щомісячний платіж з урахуванням залишкової вартості.",
  "seoTitle": "Калькулятор платежу за лізингом — із залишковою вартістю",
  "seoDescription": "Розрахуйте щомісячний платіж за лізингом з авансом і залишковою вартістю.",
  "h1": "Калькулятор платежу за лізингом",
  "keywords": [
    "платіж за лізингом",
    "залишкова вартість",
    "лізинг автомобіля"
  ],
  "resultTitle": "Калькулятор платежу за лізингом",
  ...contractContent.uk,
};
