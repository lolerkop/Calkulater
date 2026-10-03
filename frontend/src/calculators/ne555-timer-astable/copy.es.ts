import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const ne555TimerAstableCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de temporizador astable NE555",
    "slug": "temporizador-astable-ne555",
    "shortDescription": "Frecuencia, periodo y ciclo de trabajo de un multivibrador NE555 con dos resistencias y un condensador.",
    "seoTitle": "Calculadora NE555 — frecuencia, periodo y ciclo de trabajo",
    "seoDescription": "Calcula la frecuencia, el periodo, los tiempos alto y bajo y el ciclo de trabajo de un multivibrador astable NE555.",
    "h1": "Calculadora de temporizador astable NE555",
    "keywords": [
      "NE555",
      "multivibrador astable",
      "ciclo de trabajo",
      "generador de pulsos"
    ]
  },
  ...contract.es,
};
