import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const electricityUsageCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de consumo eléctrico",
  "slug": "consumo-electrico",
  "shortDescription": "Kilovatios hora que consume un aparato y lo que eso cuesta.",
  "seoTitle": "Calculadora de consumo eléctrico — kWh y coste",
  "seoDescription": "Calcula cuántos kilovatios hora consume un aparato en un periodo y lo que cuesta con tu tarifa.",
  "h1": "Calculadora de consumo eléctrico",
  "keywords": [
    "calculadora de consumo eléctrico",
    "calculadora de kwh",
    "coste de funcionamiento de un electrodoméstico"
  ]
},
  ...contractContent.es,
};
