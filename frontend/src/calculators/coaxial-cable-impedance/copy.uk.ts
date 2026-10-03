import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const coaxialCableImpedanceCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор хвильового опору коаксіального кабелю",
    "slug": "hvylovyi-opir-kabelyu",
    "shortDescription": "Хвильовий опір коаксіалу за діаметрами жили, обплетення та діелектриком.",
    "seoTitle": "Калькулятор хвильового опору коаксіального кабелю",
    "seoDescription": "Розрахуйте хвильовий опір коаксіального кабелю за діаметрами жили та обплетення, ємність на метр і коефіцієнт укорочення.",
    "h1": "Калькулятор хвильового опору коаксіального кабелю",
    "keywords": [
      "хвильовий опір",
      "коаксіальний кабель",
      "коефіцієнт укорочення",
      "50 Ом"
    ]
  },
  ...contract.uk,
};
