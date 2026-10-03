import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const dopplerCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор ефекту Доплера",
  "slug": "efekt-doplera",
  "shortDescription": "Чутна частота під час руху джерела або спостерігача.",
  "seoTitle": "Калькулятор ефекту Доплера — зсув частоти",
  "seoDescription": "Розрахуйте частоту звуку для рухомих джерела й спостерігача за одновимірною класичною моделлю в нерухомому середовищі.",
  "h1": "Калькулятор ефекту Доплера",
  "keywords": [
    "ефект Доплера",
    "зсув частоти",
    "швидкість звуку"
  ]
},
  ...contract.uk,
};
