import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const inverterPowerCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор потужності інвертора",
    "slug": "potuzhnist-invertora",
    "shortDescription": "Споживання інвертора за вихідною потужністю та ККД.",
    "seoTitle": "Калькулятор потужності інвертора — споживання та струм батареї",
    "seoDescription": "Обчисліть спожиту потужність, струм батареї та втрати інвертора за вихідною потужністю, ККД і напругою.",
    "h1": "Калькулятор потужності інвертора",
    "keywords": [
      "потужність інвертора",
      "струм інвертора",
      "ккд інвертора"
    ]
  },
  ...contract.uk,
};
