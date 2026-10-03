import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const stockDurationCopyUk: CalculatorCopy = {
  "name": "Калькулятор запасу продукту",
  "slug": "zapas-produktu",
  "shortDescription": "На скільки днів вистачить запасу за відомої витрати.",
  "seoTitle": "Калькулятор запасу — на скільки днів вистачить",
  "h1": "Калькулятор запасу продукту",
  "keywords": ["на скільки вистачить запасу", "калькулятор запасу"],
  ...contract.uk,
};
