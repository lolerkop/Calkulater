import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const voltageDividerCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de divisor de tensión",
    "slug": "divisor-de-tension",
    "shortDescription": "Tensión de salida, corriente y potencia por rama de un divisor de dos resistencias.",
    "seoTitle": "Calculadora de divisor de tensión — salida, corriente y potencia por rama",
    "seoDescription": "Calcula la tensión de salida, la corriente y la potencia disipada por rama de un divisor de dos resistencias a partir de la tensión de entrada y los valores de las resistencias.",
    "h1": "Calculadora de divisor de tensión",
    "keywords": [
      "calculadora de divisor de tensión",
      "divisor resistivo",
      "bajar tensión con resistencias",
      "tensión de salida de un divisor"
    ]
  },
  ...contract.es,
};
