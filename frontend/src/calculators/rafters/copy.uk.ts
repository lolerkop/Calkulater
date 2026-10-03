import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор довжини крокв",
  "slug": "krokvy",
  "shortDescription": "Довжина кроквини, кут нахилу та ухил двосхилого даху.",
  "seoTitle": "Калькулятор довжини крокв двосхилого даху",
  "seoDescription": "Розрахунок довжини кроквини за прольотом, підйомом і звисом разом із кутом нахилу та ухилом покрівлі у відсотках.",
  "h1": "Калькулятор довжини крокв",
  "keywords": [
    "довжина крокв",
    "кут даху",
    "ухил покрівлі",
    "двосхилий дах"
  ]
};
export const raftersCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
