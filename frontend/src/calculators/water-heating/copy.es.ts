import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const waterHeatingCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de tiempo de calentamiento del agua",
  "slug": "tiempo-de-calentamiento-del-agua",
  "shortDescription": "Cuánto se tarda en calentar agua con una potencia dada.",
  "seoTitle": "Calculadora de tiempo de calentamiento del agua — termo, resistencia, hervidor",
  "seoDescription": "Calcula el tiempo de calentamiento del agua a partir del volumen, la temperatura inicial y la objetivo, la potencia del calentador y el rendimiento.",
  "h1": "Calculadora de tiempo de calentamiento del agua",
  "keywords": [
    "tiempo de calentamiento del agua",
    "potencia de un termo",
    "calentar agua",
    "kilovatios hora para calentar"
  ]
},
  ...contractContent.es,
};
