import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de tensión de flexión en una viga",
  "slug": "tension-de-flexion-en-una-viga",
  "shortDescription": "Tensión de flexión a partir del momento y la forma de la sección de la viga.",
  "seoTitle": "Calculadora de tensión de flexión — módulo resistente",
  "seoDescription": "Calcula la tensión de flexión en una viga a partir del momento flector y la forma de la sección, rectángulo o círculo, con el módulo resistente.",
  "h1": "Calculadora de tensión de flexión en una viga",
  "keywords": [
    "calculadora de tensión de flexión",
    "módulo resistente",
    "cálculo de vigas",
    "momento flector"
  ]
};

export const beamStressCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
