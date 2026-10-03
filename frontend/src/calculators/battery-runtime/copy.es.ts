import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batteryRuntimeCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de autonomía de una batería",
  "slug": "autonomia-de-bateria",
  "shortDescription": "Cuánto dura una batería con una carga dada.",
  "seoTitle": "Calculadora de autonomía de una batería — horas según capacidad y consumo",
  "seoDescription": "Estima cuánto tiempo alimentará una batería un consumo dado a partir de su capacidad, su tensión, la profundidad de descarga y el rendimiento de conversión.",
  "h1": "Calculadora de autonomía de una batería",
  "keywords": [
    "calculadora de autonomía de una batería",
    "horas de duración de una batería",
    "de amperios hora a vatios hora"
  ]
},
  ...contractContent.es,
};
