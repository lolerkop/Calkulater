import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор сходів",
  "slug": "rozrahunok-shodiv",
  "shortDescription": "Кількість сходинок, висота підсхідця, довжина маршу та кут нахилу.",
  "seoTitle": "Калькулятор сходів — сходинки, підсхідець, кут нахилу",
  "seoDescription": "Розрахуйте сходи: кількість сходинок за граничною висотою підсхідця, довжину маршу, кут нахилу та формулу зручності 2h + b.",
  "h1": "Калькулятор сходів",
  "keywords": [
    "розрахунок сходів",
    "калькулятор сходинок",
    "висота підсхідця"
  ]
};
export const stairsCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
