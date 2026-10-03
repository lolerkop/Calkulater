import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const decibelCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор децибелів",
  "slug": "decybely",
  "shortDescription": "Додавання рівнів шуму та переведення відношення величин у децибели.",
  "seoTitle": "Калькулятор децибелів — додавання рівнів шуму та відношення в дБ",
  "seoDescription": "Додайте рівні шуму кількох джерел за правилами логарифмічної шкали та переведіть відношення потужностей або амплітуд у децибели.",
  "h1": "Калькулятор децибелів",
  "keywords": [
    "децибели",
    "додавання рівнів шуму",
    "переведення в дБ"
  ]
},
 ...contract.uk,
};
