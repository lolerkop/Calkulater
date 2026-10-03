import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const riskRewardCopyEs: CalculatorCopy = {
  "name": "Calculadora de ratio riesgo-beneficio",
  "slug": "ratio-riesgo-beneficio",
  "shortDescription": "Relación riesgo-beneficio a partir de tres precios y el porcentaje de aciertos necesario para no perder.",
  "seoTitle": "Calculadora de ratio riesgo-beneficio con porcentaje de equilibrio",
  "seoDescription": "Calcula la relación riesgo-beneficio a partir de los precios de entrada, stop y objetivo, más la proporción de operaciones ganadoras necesaria para no perder.",
  "h1": "Calculadora de ratio riesgo-beneficio",
  "keywords": [
    "calculadora de ratio riesgo-beneficio",
    "riesgo frente a beneficio",
    "porcentaje de aciertos de equilibrio",
    "calculadora de ratio de operación"
  ],
  ...contractContent.es,
};
