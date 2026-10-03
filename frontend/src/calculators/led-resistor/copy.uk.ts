import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const ledResistorCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор резистора для світлодіода",
    "slug": "rezystor-dlya-svitlodioda",
    "shortDescription": "Гасильний резистор для світлодіода та його потужність.",
    "seoTitle": "Калькулятор резистора для світлодіода — опір і потужність",
    "seoDescription": "Розрахуйте гасильний резистор для світлодіода за напругою живлення, прямою напругою та струмом.",
    "h1": "Калькулятор резистора для світлодіода",
    "keywords": [
      "резистор для світлодіода",
      "гасильний резистор",
      "розрахунок резистора led"
    ]
  },
  ...contract.uk,
};
