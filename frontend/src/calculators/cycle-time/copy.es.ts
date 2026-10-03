import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const cycleTimeCopyEs: CalculatorCopy = {
  "name": "Calculadora de tiempo takt",
  "slug": "tiempo-takt",
  "shortDescription": "Cuánto tiempo puedes dedicar a cada unidad para seguir el ritmo de la demanda.",
  "seoTitle": "Calculadora de tiempo takt — tiempo disponible por unidad",
  "seoDescription": "Calcula el tiempo takt a partir del tiempo disponible de turno y la demanda, compáralo con el ciclo real y consulta la utilización.",
  "h1": "Calculadora de tiempo takt",
  "keywords": [
    "tiempo takt",
    "tiempo de ciclo",
    "lean manufacturing",
    "utilización de la línea"
  ],
  ...contractContent.es,
};
