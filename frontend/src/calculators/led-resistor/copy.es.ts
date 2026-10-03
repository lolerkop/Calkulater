import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const ledResistorCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de resistencia para LED",
    "slug": "resistencia-para-led",
    "shortDescription": "Resistencia en serie para un LED, con la potencia que disipará.",
    "seoTitle": "Calculadora de resistencia para LED — resistencia en serie y potencia",
    "seoDescription": "Calcula la resistencia en serie de un LED a partir de la tensión de alimentación, la tensión directa y la corriente, con la potencia disipada en la resistencia.",
    "h1": "Calculadora de resistencia para LED",
    "keywords": [
      "calculadora de resistencia para led",
      "resistencia en serie para led",
      "resistencia limitadora de corriente"
    ]
  },
  ...contract.es,
};
