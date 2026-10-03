import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const employeeCostCopyUk: CalculatorCopy = {
  "name": "Калькулятор вартості співробітника",
  "slug": "vartist-spivrobitnyka",
  "shortDescription": "Повна вартість співробітника з внесками та накладними витратами.",
  "seoTitle": "Калькулятор вартості співробітника для бізнесу",
  "seoDescription": "Розрахунок повної вартості співробітника за окладом, ставкою внесків і накладними витратами з множником до окладу.",
  "h1": "Калькулятор вартості співробітника",
  "keywords": [
    "вартість співробітника",
    "внески на зарплату",
    "накладні витрати",
    "витрати на персонал"
  ],
  ...contractContent.uk,
};
