import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор стовпчастого фундаменту",
  "slug": "stovpchastyy-fundament",
  "shortDescription": "Бетон на буронабивні палі та ростверк, що їх зв’язує.",
  "seoTitle": "Калькулятор стовпчастого фундаменту: палі та ростверк",
  "seoDescription": "Порахуйте об’єм бетону на буронабивні палі та ростверк з окремо показаним поділом між ними.",
  "h1": "Калькулятор стовпчастого фундаменту",
  "keywords": [
    "стовпчастий фундамент",
    "бетон на палі",
    "об’єм ростверку",
    "пальовий фундамент розрахунок"
  ]
};

export const pileFoundationCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
