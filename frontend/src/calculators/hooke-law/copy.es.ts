import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hookeLawCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de la ley de Hooke",
  "slug": "ley-de-hooke",
  "shortDescription": "Fuerza, alargamiento o constante de un muelle, más la energía almacenada.",
  "seoTitle": "Calculadora de la ley de Hooke — fuerza, alargamiento y constante del muelle",
  "seoDescription": "Calcula la fuerza del muelle, el alargamiento o la constante elástica con la ley de Hooke F = k·x, junto con la energía almacenada en el muelle.",
  "h1": "Calculadora de la ley de Hooke",
  "keywords": [
    "calculadora de la ley de Hooke",
    "calculadora de constante elástica",
    "calculadora de fuerza de un muelle",
    "calculadora de energía de un muelle"
  ]
},
  ...contract.es,
};
