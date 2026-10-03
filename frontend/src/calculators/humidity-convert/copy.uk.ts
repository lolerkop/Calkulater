import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const humidityConvertCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор абсолютної вологості",
  "slug": "absolyutna-vologist",
  "shortDescription": "Скільки грамів води в кубометрі повітря.",
  "seoTitle": "Калькулятор абсолютної вологості — грами води в кубометрі",
  "seoDescription": "Абсолютна вологість у г/м³ і вологовміст у г/кг сухого повітря за температурою, відносною вологістю й місцевим абсолютним тиском.",
  "h1": "Калькулятор абсолютної вологості",
  "keywords": [
    "абсолютна вологість",
    "вологовміст",
    "тиск пари"
  ]
},
 ...contract.uk,
};
