import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const resistorColorCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora del código de colores de resistencias",
    "slug": "codigo-de-colores-de-resistencias",
    "shortDescription": "Valor de una resistencia a partir de sus cuatro bandas de color, con el margen de tolerancia.",
    "seoTitle": "Calculadora del código de colores de resistencias — valor según las bandas",
    "seoDescription": "Descodifica una resistencia por sus bandas de color: dos cifras, un multiplicador y una tolerancia. Muestra los límites del margen de tolerancia en ohmios.",
    "h1": "Calculadora del código de colores de resistencias",
    "keywords": [
      "calculadora del código de colores de resistencias",
      "bandas de color de una resistencia",
      "calculadora de resistencia de 4 bandas",
      "valor de una resistencia por colores"
    ]
  },
  ...contract.es,
};
