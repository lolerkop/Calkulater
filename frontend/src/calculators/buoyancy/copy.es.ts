import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const buoyancyCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de empuje",
  "slug": "fuerza-de-empuje",
  "shortDescription": "La fuerza de Arquímedes, el peso del cuerpo y si flota.",
  "seoTitle": "Calculadora de empuje — principio de Arquímedes",
  "seoDescription": "Calcula el empuje a partir del volumen del cuerpo y la densidad del fluido, con el peso, la fuerza resultante y la masa desplazada.",
  "h1": "Calculadora de empuje",
  "keywords": [
    "fuerza de Arquímedes",
    "fuerza de empuje",
    "flotabilidad",
    "agua desplazada"
  ]
},
  ...contract.es,
};
