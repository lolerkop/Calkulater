import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de volumen de tablas",
  "slug": "volumen-de-tablas",
  "shortDescription": "Volumen de madera, de una tabla suelta y tablas por metro cúbico.",
  "seoTitle": "Calculadora de volumen de tablas — metros cúbicos de madera",
  "seoDescription": "Calcula el volumen de tablas en metros cúbicos a partir del largo y la sección, el volumen de una tabla y las tablas por metro cúbico.",
  "h1": "Calculadora de volumen de tablas",
  "keywords": [
    "calculadora de volumen de tablas",
    "volumen de madera",
    "tablas por metro cúbico",
    "calculadora de madera aserrada"
  ]
};

export const boardVolumeCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
