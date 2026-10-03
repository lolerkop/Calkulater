import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const rainfallVolumeCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de recogida de agua de lluvia",
  "slug": "recogida-de-agua-de-lluvia",
  "shortDescription": "Cuánta agua recoge un tejado con una cantidad de lluvia dada.",
  "seoTitle": "Calculadora de recogida de agua de lluvia — agua de un tejado",
  "seoDescription": "Calcula cuántos litros recoge un tejado de una superficie dada a partir de la precipitación, teniendo en cuenta el coeficiente de escorrentía y el número de depósitos.",
  "h1": "Calculadora de recogida de agua de lluvia",
  "keywords": [
    "recogida de agua de lluvia",
    "agua de un tejado",
    "coeficiente de escorrentía",
    "depósito de agua"
  ]
},
  ...contractContent.es,
};
