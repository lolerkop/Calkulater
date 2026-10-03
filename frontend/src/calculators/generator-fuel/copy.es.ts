import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const generatorFuelCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de combustible de un generador",
  "slug": "combustible-de-un-generador",
  "shortDescription": "Cuánto combustible quema un generador en una jornada y lo que cuesta.",
  "seoTitle": "Calculadora de consumo de combustible de un generador",
  "seoDescription": "Calcula el consumo de combustible de un generador a partir de la carga, el consumo específico y el tiempo de funcionamiento, junto con el coste.",
  "h1": "Calculadora de combustible de un generador",
  "keywords": [
    "calculadora de combustible de un generador",
    "consumo de un generador",
    "cuánto combustible gasta un generador"
  ]
},
  ...contractContent.es,
};
