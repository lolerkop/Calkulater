import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const dewPointCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora del punto de rocío",
  "slug": "punto-de-rocio",
  "shortDescription": "La temperatura a la que el aire con esta humedad empieza a soltar agua.",
  "seoTitle": "Calculadora del punto de rocío — por temperatura y humedad",
  "seoDescription": "Calcula el punto de rocío a partir de la temperatura del aire y la humedad relativa, con el margen por debajo de la temperatura actual y el valor en grados Fahrenheit.",
  "h1": "Calculadora del punto de rocío",
  "keywords": [
    "calculadora del punto de rocío",
    "calculadora de condensación",
    "punto de rocío por humedad",
    "cuándo aparece la condensación"
  ]
},
 ...contract.es,
};
