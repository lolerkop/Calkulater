import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de longitud de pares",
  "slug": "longitud-de-pares",
  "shortDescription": "Longitud del par, ángulo de cubierta y pendiente en una cubierta a dos aguas.",
  "seoTitle": "Calculadora de longitud de pares para una cubierta a dos aguas",
  "seoDescription": "Calcula la longitud del par a partir de la luz del edificio, la altura de cumbrera y el vuelo del alero, junto con el ángulo de cubierta y la pendiente en porcentaje.",
  "h1": "Calculadora de longitud de pares",
  "keywords": [
    "calculadora de longitud de pares",
    "ángulo de cubierta",
    "pendiente de cubierta",
    "cubierta a dos aguas"
  ]
};
export const raftersCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
