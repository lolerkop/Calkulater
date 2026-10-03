import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const specificHeatCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de calor específico",
  "slug": "calor-especifico",
  "shortDescription": "Cuánta energía cuesta calentar un cuerpo: Q = c·m·ΔT.",
  "seoTitle": "Calculadora de calor específico — Q = c·m·ΔT",
  "seoDescription": "Calcula el calor necesario para calentar o enfriar un cuerpo a partir de su calor específico, su masa y la variación de temperatura.",
  "h1": "Calculadora de calor específico",
  "keywords": [
    "calculadora de calor específico",
    "calculadora de energía térmica",
    "calculadora q = mcΔt",
    "energía para calentar agua"
  ]
},
  ...contract.es,
};
