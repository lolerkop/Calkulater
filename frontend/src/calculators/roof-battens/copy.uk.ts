import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор обрешітки даху",
  "slug": "obreshitka",
  "shortDescription": "Погонні метри, бруски і об’єм деревини для обрешітки даху.",
  "seoTitle": "Калькулятор обрешітки даху: метри, бруски й об’єм",
  "seoDescription": "Порахуйте погонні метри, кількість брусків і об’єм деревини для обрешітки даху за площею і кроком.",
  "h1": "Калькулятор обрешітки даху",
  "keywords": [
    "розрахунок обрешітки",
    "крок обрешітки",
    "об’єм деревини на дах",
    "брусків на квадратний метр"
  ]
};
export const roofBattensCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
