import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const machNumberCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de número de Mach",
  "slug": "numero-de-mach",
  "shortDescription": "Número de Mach a partir de la velocidad y la temperatura del aire, con el régimen de vuelo indicado.",
  "seoTitle": "Calculadora de número de Mach — velocidad del sonido y régimen de vuelo",
  "seoDescription": "Número de Mach con velocidad respecto al aire y temperatura en modelo aproximado de aire seco, sonido y clasificación general de régimen.",
  "h1": "Calculadora de número de Mach",
  "keywords": [
    "número de Mach",
    "velocidad del sonido",
    "barrera del sonido",
    "supersónico"
  ]
},
 ...contract.es,
};
