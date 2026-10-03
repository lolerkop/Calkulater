import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const headphonePowerCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de potencia para auriculares",
    "slug": "potencia-para-auriculares",
    "shortDescription": "Volumen a partir de la sensibilidad y la potencia aplicada.",
    "seoTitle": "Calculadora de potencia para auriculares — volumen y tensión",
    "seoDescription": "Calcula el nivel de presión sonora de unos auriculares a partir de la sensibilidad, la impedancia y la potencia aplicada, con la tensión y la corriente.",
    "h1": "Calculadora de potencia para auriculares",
    "keywords": [
      "potencia para auriculares",
      "sensibilidad de auriculares",
      "impedancia de auriculares",
      "amplificador de auriculares"
    ]
  },
  ...contract.es,
};
