import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de losa de cimentación",
  "slug": "losa-de-cimentacion",
  "shortDescription": "Volumen de hormigón y mallazo de armadura para una losa de cimentación.",
  "seoTitle": "Calculadora de losa de cimentación: hormigón y armadura",
  "seoDescription": "Calcula el volumen de hormigón y la longitud y el peso del mallazo de armadura de una losa de cimentación.",
  "h1": "Calculadora de losa de cimentación",
  "keywords": [
    "calculadora de losa de cimentación",
    "hormigón de una losa",
    "calculadora de mallazo",
    "volumen de hormigón de cimentación"
  ]
};
export const slabFoundationCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
