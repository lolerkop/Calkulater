import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const heatIndexCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de índice de calor",
  "slug": "indice-de-calor",
  "shortDescription": "Índice de calor ilustrativo con regresión sin ajustes adicionales.",
  "seoTitle": "Calculadora de índice de calor — sensación térmica y humedad",
  "seoDescription": "Regresión Rothfusz de nueve términos sin ajustes NWS: índice de calor, diferencia con el aire y categorías en escala °F.",
  "h1": "Calculadora de índice de calor",
  "keywords": [
    "calculadora de índice de calor",
    "calculadora de sensación térmica",
    "temperatura que se siente",
    "calor y humedad"
  ]
},
 ...contract.es,
};
