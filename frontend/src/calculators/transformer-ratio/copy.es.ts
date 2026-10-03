import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const transformerRatioCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de relación de transformación",
    "slug": "relacion-de-transformacion",
    "shortDescription": "Espiras, tensiones y corrientes de un transformador ideal.",
    "seoTitle": "Calculadora de relación de transformación — espiras, tensión y corriente",
    "seoDescription": "Calcula la tensión y la corriente del secundario de un transformador ideal a partir de las espiras, o halla la relación de devanados que necesitas.",
    "h1": "Calculadora de relación de transformación",
    "keywords": [
      "relación de transformación",
      "calculadora de tensión del secundario",
      "transformador ideal",
      "relación de devanados"
    ]
  },
  ...contract.es,
};
