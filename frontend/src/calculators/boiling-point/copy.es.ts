import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const boilingPointCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora del punto de ebullición",
  "slug": "punto-de-ebullicion-por-altitud",
  "shortDescription": "El punto de ebullición del agua a una altitud dada sobre el nivel del mar.",
  "seoTitle": "Calculadora del punto de ebullición — agua en altitud",
  "seoDescription": "Temperatura aproximada de ebullición de agua pura entre −430 y 9000 m con presión modelada y calor latente constante.",
  "h1": "Calculadora del punto de ebullición",
  "keywords": [
    "punto de ebullición",
    "ebullición en altitud",
    "presión atmosférica",
    "presión de vapor"
  ]
},
 ...contract.es,
};
