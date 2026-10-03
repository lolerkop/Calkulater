import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const dopplerCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora del efecto Doppler",
  "slug": "efecto-doppler",
  "shortDescription": "La frecuencia que se oye cuando se mueve la fuente o el oyente.",
  "seoTitle": "Calculadora del efecto Doppler — desplazamiento de frecuencia",
  "seoDescription": "Calcula la frecuencia que se oye cuando se mueve una fuente sonora o el oyente, con el desplazamiento en hercios y en porcentaje.",
  "h1": "Calculadora del efecto Doppler",
  "keywords": [
    "efecto Doppler",
    "desplazamiento de frecuencia",
    "frecuencia de una sirena",
    "velocidad del sonido"
  ]
},
  ...contract.es,
};
