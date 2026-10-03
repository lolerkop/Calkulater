import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const abvAlcoholCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de graduación por densidad",
  "slug": "graduacion-por-densidad",
  "shortDescription": "Graduación alcohólica a partir de la densidad inicial y la final.",
  "seoTitle": "Calculadora de graduación por densidad — cerveza, vino, hidromiel",
  "seoDescription": "Calcula el alcohol por volumen a partir de la densidad inicial y la final, con la atenuación aparente.",
  "h1": "Calculadora de graduación por densidad",
  "keywords": [
    "graduación por densidad",
    "densidad inicial",
    "densidad final",
    "atenuación aparente"
  ]
},
  ...contractContent.es,
};
