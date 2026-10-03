import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de hormigón",
  "slug": "calculadora-de-hormigon",
  "shortDescription": "Volumen de hormigón para una losa, una zapata corrida o pilares, con margen.",
  "seoTitle": "Calculadora de hormigón — volumen para losa, zapata corrida o pilares",
  "seoDescription": "Calcula el volumen de hormigón para una losa, una zapata corrida o pilares, con un margen por pérdidas.",
  "h1": "Calculadora de hormigón",
  "keywords": [
    "calculadora de hormigón",
    "volumen de hormigón",
    "cuánto hormigón",
    "hormigón para una cimentación"
  ]
};

export const concreteCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
