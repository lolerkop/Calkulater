import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор утеплювача",
  "slug": "utepliuvach",
  "shortDescription": "Об’єм утеплювача, кількість плит і упаковок за площею та товщиною.",
  "seoTitle": "Калькулятор утеплювача — об’єм, плити та упаковки",
  "seoDescription": "Обчисліть об’єм утеплювача, кількість плит і упаковок за площею та товщиною шару.",
  "h1": "Калькулятор утеплювача",
  "keywords": [
    "калькулятор утеплювача",
    "скільки утеплювача потрібно",
    "розрахунок мінвати"
  ]
};

export const insulationCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
