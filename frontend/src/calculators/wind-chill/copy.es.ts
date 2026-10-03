import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windChillCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de sensación térmica por viento",
  "slug": "sensacion-termica-por-viento",
  "shortDescription": "Cuánto más frío se siente con viento, según la fórmula de los servicios meteorológicos.",
  "seoTitle": "Calculadora de sensación térmica por viento — el frío que se siente de verdad",
  "seoDescription": "Calcula el índice de enfriamiento por viento con temperatura en °C y velocidad en km/h. Estima piel expuesta y respeta el dominio indicado.",
  "h1": "Calculadora de sensación térmica por viento",
  "keywords": [
    "calculadora de sensación térmica",
    "temperatura que se siente",
    "fórmula de sensación por viento",
    "cuánto frío se siente"
  ]
},
 ...contract.es,
};
