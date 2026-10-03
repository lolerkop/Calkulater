import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const singlePhaseCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de potencia monofásica",
  "slug": "potencia-monofasica",
  "shortDescription": "Potencia activa, aparente y reactiva de un circuito monofásico, o corriente a partir de la potencia.",
  "seoTitle": "Calculadora de potencia monofásica — activa, aparente y reactiva",
  "seoDescription": "Calcula la potencia activa, aparente y reactiva de un circuito monofásico a partir de la tensión, la corriente y el factor de potencia, o halla la corriente a partir de la potencia.",
  "h1": "Calculadora de potencia monofásica",
  "keywords": [
    "calculadora de potencia monofásica",
    "corriente a partir de la potencia",
    "factor de potencia",
    "potencia aparente"
  ]
},
  ...contractContent.es,
};
