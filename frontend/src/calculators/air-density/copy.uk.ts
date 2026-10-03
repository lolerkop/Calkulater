import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const airDensityCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор густини повітря",
  "slug": "shchilnist-povitrya",
  "shortDescription": "Густина вологого повітря за температурою, тиском і вологістю.",
  "seoTitle": "Калькулятор густини повітря — за температурою і вологістю",
  "seoDescription": "Розрахуйте густину вологого повітря за температурою, атмосферним тиском і відносною вологістю.",
  "h1": "Калькулятор густини повітря",
  "keywords": [
    "густина повітря",
    "вологе повітря",
    "стандартна атмосфера"
  ]
},
 ...contract.uk,
};
