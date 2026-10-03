import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const escapeVelocityCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de velocidad de escape",
  "slug": "velocidad-de-escape",
  "shortDescription": "La velocidad necesaria para abandonar un planeta, a partir de su masa y su radio.",
  "seoTitle": "Calculadora de velocidad de escape — por masa y radio",
  "seoDescription": "Calcula las velocidades de escape y orbital circular en un modelo esférico newtoniano por masa y distancia al centro, con aceleración gravitatoria.",
  "h1": "Calculadora de velocidad de escape",
  "keywords": [
    "calculadora de velocidad de escape",
    "velocidad orbital",
    "gravedad de un planeta",
    "velocidad de fuga"
  ]
},
  ...contract.es,
};
