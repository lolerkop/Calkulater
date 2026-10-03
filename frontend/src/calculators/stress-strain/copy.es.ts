import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const stressStrainCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de tensión, deformación y módulo de Young",
  "slug": "tension-deformacion-y-modulo-de-young",
  "shortDescription": "Tensión, deformación y módulo de Young de una probeta a tracción.",
  "seoTitle": "Calculadora de tensión y deformación — módulo de Young en un ensayo de tracción",
  "seoDescription": "Calcula la tensión, la deformación y el módulo de Young a tracción a partir de la fuerza, la sección, la longitud inicial y el alargamiento medido.",
  "h1": "Calculadora de tensión, deformación y módulo de Young",
  "keywords": [
    "calculadora de tensión y deformación",
    "calculadora del módulo de Young",
    "calculadora de tensión de tracción",
    "calculadora de alargamiento"
  ]
},
 ...contract.es,
};
