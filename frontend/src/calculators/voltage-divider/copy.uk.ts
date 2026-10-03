import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const voltageDividerCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор дільника напруги",
    "slug": "dilnyk-napruhy",
    "shortDescription": "Вихідна напруга, струм і потужність плечей дільника на двох резисторах.",
    "seoTitle": "Калькулятор дільника напруги — вихід, струм і потужність плечей",
    "seoDescription": "Розрахуйте вихідну напругу дільника на двох резисторах, струм через нього та потужність кожного плеча.",
    "h1": "Калькулятор дільника напруги",
    "keywords": [
      "дільник напруги",
      "розрахунок дільника",
      "знизити напругу резисторами"
    ]
  },
  ...contract.uk,
};
