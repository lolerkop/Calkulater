import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de peso de la madera",
  "slug": "peso-de-la-madera",
  "shortDescription": "Peso de la madera a partir de su volumen, su especie y su humedad.",
  "seoTitle": "Calculadora de peso de la madera por especie y humedad",
  "seoDescription": "Calcula cuánto pesa la madera a partir de su volumen, su especie y su humedad, con la densidad empleada a la vista.",
  "h1": "Calculadora de peso de la madera",
  "keywords": [
    "calculadora de peso de la madera",
    "peso de la madera por metro cúbico",
    "densidad de la madera por especie",
    "peso de madera aserrada"
  ]
};
export const woodWeightCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
