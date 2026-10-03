import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de peldaños de escalera",
  "slug": "peldanos-de-escalera",
  "shortDescription": "Número de peldaños, altura de contrahuella, longitud del tramo y ángulo de inclinación.",
  "seoTitle": "Calculadora de escaleras — peldaños, contrahuella e inclinación",
  "seoDescription": "Calcula una escalera: número de peldaños a partir de la altura máxima de contrahuella, la longitud del tramo, el ángulo de inclinación y la regla de comodidad 2h + b.",
  "h1": "Calculadora de peldaños de escalera",
  "keywords": [
    "calculadora de escaleras",
    "calculadora de huella y contrahuella",
    "altura de contrahuella",
    "inclinación de una escalera"
  ]
};
export const stairsCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
