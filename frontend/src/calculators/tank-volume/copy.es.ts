import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de volumen de depósitos",
  "slug": "volumen-de-depositos",
  "shortDescription": "Volumen total de un depósito y volumen contenido a un nivel dado.",
  "seoTitle": "Calculadora de volumen de depósitos — cilindro, depósito horizontal, bidón",
  "seoDescription": "Calcula el volumen total de un depósito y el volumen contenido a un nivel dado en formas vertical, horizontal, rectangular y de cápsula.",
  "h1": "Calculadora de volumen de depósitos",
  "keywords": [
    "calculadora de volumen de depósitos",
    "volumen de un depósito horizontal",
    "cuántos litros tiene un bidón",
    "capacidad de un depósito"
  ]
};
export const tankVolumeCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
