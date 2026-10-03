import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de zapata corrida",
  "slug": "zapata-corrida",
  "shortDescription": "Volumen de hormigón de una zapata corrida a partir de su longitud, ancho y profundidad.",
  "seoTitle": "Calculadora de zapata corrida — volumen de hormigón",
  "seoDescription": "Calcula el volumen de hormigón de una zapata corrida a partir de la longitud, el ancho y la profundidad de la zapata, con margen.",
  "h1": "Calculadora de zapata corrida",
  "keywords": [
    "calculadora de zapata corrida",
    "hormigón para una cimentación",
    "volumen de una cimentación"
  ]
};
export const stripFoundationCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
