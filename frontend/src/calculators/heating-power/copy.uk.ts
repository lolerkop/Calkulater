import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const heatingPowerCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор потужності опалення",
  "slug": "potuzhnist-opalennya",
  "shortDescription": "Потужність обігрівача або радіатора за об'ємом приміщення та питомою нормою.",
  "seoTitle": "Калькулятор потужності опалення приміщення",
  "seoDescription": "Розрахуйте необхідну потужність опалення за об'ємом приміщення, питомою нормою та кількістю вікон — у кіловатах і ватах.",
  "h1": "Калькулятор потужності опалення",
  "keywords": [
    "потужність опалення",
    "потужність обігрівача",
    "розрахунок радіатора"
  ]
},
  ...contractContent.uk,
};
