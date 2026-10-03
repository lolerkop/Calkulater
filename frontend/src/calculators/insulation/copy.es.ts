import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de aislamiento",
  "slug": "calculadora-de-aislamiento",
  "shortDescription": "Volumen de aislamiento, número de paneles y de paquetes a partir de la superficie y el espesor.",
  "seoTitle": "Calculadora de aislamiento — volumen, paneles y paquetes",
  "seoDescription": "Calcula el volumen de aislamiento, el número de paneles y el de paquetes a partir de la superficie y el espesor de la capa.",
  "h1": "Calculadora de aislamiento",
  "keywords": [
    "calculadora de aislamiento",
    "cuánto aislamiento",
    "aislamiento por m2",
    "calculadora de lana mineral"
  ]
};

export const insulationCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
