import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de volumen de una habitación",
  "slug": "volumen-de-una-habitacion",
  "shortDescription": "Volumen de una habitación a partir de sus dimensiones o de la superficie del suelo.",
  "seoTitle": "Calculadora de volumen de una habitación — metros cúbicos a partir de las dimensiones",
  "seoDescription": "Calcula el volumen de una habitación en metros cúbicos a partir de sus dimensiones o de la superficie del suelo, además del perímetro y la superficie de las paredes.",
  "h1": "Calculadora de volumen de una habitación",
  "keywords": [
    "volumen de una habitación",
    "metros cúbicos",
    "superficie de las paredes"
  ]
};
export const roomVolumeCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
