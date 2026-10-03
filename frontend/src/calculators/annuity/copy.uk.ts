import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const annuityCopyUk: CalculatorCopy = {
  "name": "Калькулятор ануїтету",
  "slug": "anuitet",
  "shortDescription": "Рівний платіж і помісячний графік: скільки йде у відсотки, скільки в тіло боргу.",
  "seoTitle": "Калькулятор ануїтету — платіж і графік погашення",
  "seoDescription": "Обчисліть ануїтетний платіж і отримайте помісячний графік: відсотки, основний борг і залишок.",
  "h1": "Калькулятор ануїтету",
  "keywords": [
    "ануїтетний платіж",
    "калькулятор ануїтету",
    "графік погашення"
  ],
  "resultTitle": "Калькулятор ануїтету",
  ...contractContent.uk,
};
