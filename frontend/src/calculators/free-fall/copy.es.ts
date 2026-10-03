import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const freeFallCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de caída libre",
  "slug": "caida-libre",
  "shortDescription": "Velocidad de impacto y tiempo de caída a partir de la altura o del tiempo.",
  "seoTitle": "Calculadora de caída libre — velocidad y tiempo",
  "seoDescription": "Calcula la velocidad de impacto y el tiempo de caída libre a partir de una altura o de una duración, con la gravedad como campo editable.",
  "h1": "Calculadora de caída libre",
  "keywords": [
    "caída libre",
    "velocidad de impacto",
    "tiempo de caída",
    "gravedad"
  ]
},
  ...contract.es,
};
