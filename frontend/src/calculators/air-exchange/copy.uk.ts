import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор повітрообміну",
  "slug": "kratnist-povitroobminu",
  "shortDescription": "Потрібна витрата повітря за об’ємом приміщення та кратністю.",
  "seoTitle": "Калькулятор повітрообміну — витрата повітря за кратністю",
  "seoDescription": "Розрахуйте потрібну витрату повітря за площею, висотою приміщення та кратністю повітрообміну.",
  "h1": "Калькулятор повітрообміну",
  "keywords": [
    "кратність повітрообміну",
    "витрата повітря",
    "підбір вентилятора"
  ]
};

export const airExchangeCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
