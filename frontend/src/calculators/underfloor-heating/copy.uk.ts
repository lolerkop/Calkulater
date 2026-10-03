import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор труби теплої підлоги",
  "slug": "tepla-pidloga",
  "shortDescription": "Довжина труби і кількість петель для водяної теплої підлоги.",
  "seoTitle": "Калькулятор труби теплої підлоги: довжина і петлі",
  "seoDescription": "Порахуйте довжину труби і кількість петель теплої підлоги за площею, кроком укладання і краєвою зоною.",
  "h1": "Калькулятор труби теплої підлоги",
  "keywords": [
    "тепла підлога розрахунок",
    "довжина труби теплої підлоги",
    "довжина петлі опалення",
    "крок укладання труби"
  ]
};
export const underfloorHeatingCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
