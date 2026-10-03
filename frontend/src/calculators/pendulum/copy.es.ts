import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pendulumCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora del periodo de un péndulo",
  "slug": "periodo-de-un-pendulo",
  "shortDescription": "Periodo de un péndulo simple a partir de su longitud.",
  "seoTitle": "Calculadora del periodo de un péndulo — por la longitud del hilo",
  "seoDescription": "Calcula el periodo y la frecuencia de un péndulo simple a partir de su longitud y la aceleración de la gravedad.",
  "h1": "Calculadora del periodo de un péndulo",
  "keywords": [
    "periodo de un péndulo",
    "péndulo simple",
    "frecuencia de oscilación",
    "péndulo de segundos"
  ]
},
  ...contract.es,
};
