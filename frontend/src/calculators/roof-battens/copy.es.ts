import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de rastreles de cubierta",
  "slug": "rastreles-de-cubierta",
  "shortDescription": "Metros lineales, rastreles y volumen de madera para el rastrelado de una cubierta.",
  "seoTitle": "Calculadora de rastreles de cubierta: metros, piezas y volumen",
  "seoDescription": "Calcula los metros lineales, el número de rastreles y el volumen de madera de una cubierta a partir de su superficie y la separación entre rastreles.",
  "h1": "Calculadora de rastreles de cubierta",
  "keywords": [
    "calculadora de rastreles de cubierta",
    "separación de rastreles",
    "volumen de madera de cubierta",
    "rastreles por metro cuadrado"
  ]
};
export const roofBattensCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
