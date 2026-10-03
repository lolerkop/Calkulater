import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hydrostaticPressureCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de presión hidrostática",
  "slug": "presion-hidrostatica",
  "shortDescription": "Presión de una columna de líquido a partir de la densidad y la profundidad.",
  "seoTitle": "Calculadora de presión hidrostática — p = ρgh",
  "seoDescription": "Calcula la presión hidrostática de una columna de líquido a partir de la densidad y la profundidad, con o sin presión atmosférica.",
  "h1": "Calculadora de presión hidrostática",
  "keywords": [
    "calculadora de presión hidrostática",
    "presión a una profundidad",
    "presión de una columna de líquido"
  ]
},
  ...contract.es,
};
