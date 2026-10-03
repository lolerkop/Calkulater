import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const brewRatioCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de ratio de café",
  "slug": "ratio-de-cafe",
  "shortDescription": "Cuánto café pide un volumen de agua con un ratio de extracción elegido.",
  "seoTitle": "Calculadora de ratio de café — dosis para un volumen de agua",
  "seoDescription": "Calcula cuánto café necesita un volumen de agua dado con 1:15, 1:16 o 1:18, o averigua el ratio que has usado realmente.",
  "h1": "Calculadora de ratio de café",
  "keywords": [
    "calculadora de ratio de café",
    "proporción café agua",
    "cuánto café para 500 ml",
    "calculadora de ratio para v60"
  ]
},
  ...contractContent.es,
};
