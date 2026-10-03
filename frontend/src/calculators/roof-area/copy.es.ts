import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de superficie de cubierta",
  "slug": "superficie-de-cubierta",
  "shortDescription": "Superficie de faldón a partir de la planta y la pendiente, en grados o en porcentaje.",
  "seoTitle": "Calculadora de superficie de cubierta — faldones según la pendiente",
  "seoDescription": "Calcula la superficie de cubierta a partir del largo y el ancho en planta y de la pendiente en grados o en porcentaje.",
  "h1": "Calculadora de superficie de cubierta",
  "keywords": [
    "calculadora de superficie de cubierta",
    "superficie según la pendiente",
    "superficie de faldón",
    "calculadora de cubiertas"
  ]
};
export const roofAreaCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
