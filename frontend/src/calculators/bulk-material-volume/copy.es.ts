import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de áridos",
  "slug": "calculadora-de-aridos",
  "shortDescription": "Volumen y masa de grava, arena o gravilla para una capa de base.",
  "seoTitle": "Calculadora de áridos — volumen y masa de una capa de base",
  "seoDescription": "Calcula el volumen y la masa de grava, arena o gravilla para una capa de base a partir de la superficie, el espesor de la capa y la densidad aparente.",
  "h1": "Calculadora de áridos",
  "keywords": [
    "calculadora de grava",
    "cuánta arena para una base",
    "calculadora de volumen de áridos",
    "calculadora de zahorra"
  ]
};

export const bulkMaterialVolumeCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
