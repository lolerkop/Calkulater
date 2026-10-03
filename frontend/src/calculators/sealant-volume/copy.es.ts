import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de sellador",
  "slug": "calculadora-de-sellador",
  "shortDescription": "Sellador necesario para una junta de sección dada, y a cuántos cartuchos equivale.",
  "seoTitle": "Calculadora de sellador — volumen y número de cartuchos",
  "seoDescription": "Calcula el sellador necesario a partir del ancho, la profundidad y la longitud de la junta, con el número de cartuchos y los metros por cartucho.",
  "h1": "Calculadora de sellador",
  "keywords": [
    "volumen de sellador",
    "cartucho de sellador",
    "sección de una junta",
    "silicona"
  ]
};
export const sealantVolumeCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
