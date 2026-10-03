import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const carnotCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de rendimiento de Carnot",
  "slug": "rendimiento-de-carnot",
  "shortDescription": "El rendimiento máximo de una máquina térmica a partir de dos temperaturas.",
  "seoTitle": "Calculadora de rendimiento de Carnot — el límite de una máquina térmica",
  "seoDescription": "Calcula el rendimiento máximo de una máquina térmica a partir de las temperaturas del foco caliente y del frío en kelvin.",
  "h1": "Calculadora de rendimiento de Carnot",
  "keywords": [
    "rendimiento de Carnot",
    "rendimiento máximo",
    "máquina térmica",
    "segundo principio de la termodinámica"
  ]
},
  ...contract.es,
};
