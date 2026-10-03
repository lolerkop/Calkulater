import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const coaxialCableImpedanceCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de impedancia de cable coaxial",
    "slug": "impedancia-de-cable-coaxial",
    "shortDescription": "Impedancia característica del coaxial a partir de los diámetros del conductor y la malla y del dieléctrico.",
    "seoTitle": "Calculadora de impedancia de cable coaxial",
    "seoDescription": "Calcula la impedancia característica de un cable coaxial a partir de los diámetros del conductor y de la malla, con la capacidad por metro y el factor de velocidad.",
    "h1": "Calculadora de impedancia de cable coaxial",
    "keywords": [
      "impedancia característica",
      "cable coaxial",
      "factor de velocidad",
      "50 ohmios"
    ]
  },
  ...contract.es,
};
