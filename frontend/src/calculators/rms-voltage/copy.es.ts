import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rmsVoltageCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de tensión eficaz",
    "slug": "tension-eficaz",
    "shortDescription": "Convierte entre tensión de pico, pico a pico y eficaz para ondas senoidal, cuadrada y triangular.",
    "seoTitle": "Calculadora de tensión eficaz — pico, pico a pico y eficaz",
    "seoDescription": "Convierte el valor de pico, el pico a pico y la tensión eficaz para formas de onda senoidal, cuadrada y triangular.",
    "h1": "Calculadora de tensión eficaz",
    "keywords": [
      "tensión eficaz",
      "valor de pico",
      "pico a pico",
      "factor de cresta"
    ]
  },
  ...contract.es,
};
