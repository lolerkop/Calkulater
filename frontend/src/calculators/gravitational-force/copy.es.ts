import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const gravitationalForceCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de fuerza gravitatoria",
  "slug": "fuerza-gravitatoria",
  "shortDescription": "Atracción entre dos cuerpos según la ley de gravitación universal.",
  "seoTitle": "Calculadora de fuerza gravitatoria — dos cuerpos",
  "seoDescription": "Calcula la fuerza de gravitación universal entre dos masas a una distancia dada, junto con la aceleración del primer cuerpo.",
  "h1": "Calculadora de fuerza gravitatoria",
  "keywords": [
    "calculadora de fuerza gravitatoria",
    "ley de gravitación universal",
    "constante G",
    "atracción entre cuerpos"
  ]
},
  ...contract.es,
};
