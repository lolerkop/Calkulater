import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор плінтуса",
  "slug": "plintus",
  "shortDescription": "Довжина плінтуса по периметру кімнати з відрахуванням прорізів і розкроєм на планки.",
  "seoTitle": "Калькулятор плінтуса — довжина та кількість планок",
  "seoDescription": "Розрахуйте довжину плінтуса за розмірами кімнати з відрахуванням дверних прорізів, запасом на підрізання та кількістю планок.",
  "h1": "Калькулятор плінтуса",
  "keywords": [
    "плінтус",
    "довжина плінтуса",
    "підлоговий плінтус",
    "розкрій планок"
  ]
};
export const skirtingCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
