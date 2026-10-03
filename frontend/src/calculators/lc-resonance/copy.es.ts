import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const lcResonanceCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de frecuencia de resonancia LC",
    "slug": "frecuencia-de-resonancia-lc",
    "shortDescription": "Frecuencia de un circuito tanque a partir de la inductancia y la capacidad.",
    "seoTitle": "Calculadora de frecuencia de resonancia LC",
    "seoDescription": "Calcula la frecuencia de resonancia de un circuito tanque a partir de la inductancia en microhenrios y la capacidad en nanofaradios.",
    "h1": "Calculadora de frecuencia de resonancia LC",
    "keywords": [
      "frecuencia de resonancia",
      "circuito LC",
      "circuito tanque",
      "fórmula de Thomson"
    ]
  },
  ...contract.es,
};
