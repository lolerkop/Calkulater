import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batteryRuntimeCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор часу роботи акумулятора",
  "slug": "chas-roboty-akumulyatora",
  "shortDescription": "Скільки пропрацює акумулятор під заданим навантаженням.",
  "seoTitle": "Калькулятор часу роботи акумулятора — години за ємністю",
  "seoDescription": "Оцініть час роботи акумулятора за ємністю, напругою, глибиною розряду та ККД перетворення.",
  "h1": "Калькулятор часу роботи акумулятора",
  "keywords": [
    "час роботи акумулятора",
    "ампер-години у ват-години",
    "ресурс батареї"
  ]
},
  ...contractContent.uk,
};
