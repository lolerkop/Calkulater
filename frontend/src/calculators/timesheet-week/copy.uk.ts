import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const timesheetWeekCopyUk: CalculatorCopy = {
  "name": "Калькулятор табеля робочого часу",
  "slug": "tabel-robochogo-chasu",
  "shortDescription": "Години за тиждень за рядками «початок, кінець, перерва», з понаднормовими та заробітком.",
  "seoTitle": "Калькулятор табеля робочого часу за тиждень",
  "seoDescription": "Порахуйте години за тиждень за змінами з перервами, отримайте понаднормові понад норму та нараховану суму.",
  "h1": "Калькулятор табеля робочого часу",
  "keywords": [
    "табель робочого часу",
    "облік годин",
    "понаднормові",
    "нічна зміна"
  ],
  ...contractContent.uk,
};
