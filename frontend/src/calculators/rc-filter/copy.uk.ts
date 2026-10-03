import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rcFilterCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор RC-кола",
    "slug": "rc-filtr",
    "shortDescription": "Частота зрізу та стала часу резистора з конденсатором.",
    "seoTitle": "Калькулятор RC-кола — частота зрізу та стала часу",
    "seoDescription": "Розрахуйте частоту зрізу RC-фільтра та сталу часу за опором і ємністю.",
    "h1": "Калькулятор RC-кола",
    "keywords": [
      "rc фільтр",
      "частота зрізу",
      "стала часу rc"
    ]
  },
  ...contract.uk,
};
