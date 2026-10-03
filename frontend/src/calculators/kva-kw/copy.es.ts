import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const kvaKwCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de kVA a kW",
  "slug": "de-kva-a-kw",
  "shortDescription": "Conversión de potencia aparente a potencia activa a través del factor de potencia.",
  "seoTitle": "Calculadora de kVA a kW — conversión por el factor de potencia",
  "seoDescription": "Convierte kVA a kW y al revés por el factor de potencia, con la componente reactiva: lo que un generador o un SAI entregan de verdad.",
  "h1": "Calculadora de kVA a kW",
  "keywords": [
    "calculadora de kva a kw",
    "calculadora de factor de potencia",
    "de kw a kva",
    "potencia nominal de un generador"
  ]
},
  ...contractContent.es,
};
