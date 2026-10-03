import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const heatingPowerCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de potencia de calefacción",
  "slug": "potencia-de-calefaccion",
  "shortDescription": "Potencia de un calefactor o radiador a partir del volumen de la habitación y una demanda específica de calor.",
  "seoTitle": "Calculadora de potencia de calefacción para una habitación",
  "seoDescription": "Calcula la potencia de calefacción que necesita una habitación a partir de su volumen, la demanda específica de calor y el número de ventanas, en kilovatios y en vatios.",
  "h1": "Calculadora de potencia de calefacción",
  "keywords": [
    "calculadora de potencia de calefacción",
    "calculadora de tamaño de radiador",
    "potencia de calefactor para una habitación",
    "kw para calentar una habitación"
  ]
},
  ...contractContent.es,
};
