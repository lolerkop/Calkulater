import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de enlucido",
  "slug": "calculadora-de-enlucido",
  "shortDescription": "Cuánta mezcla seca lleva una pared con un espesor de capa dado.",
  "seoTitle": "Calculadora de enlucido — mezcla seca necesaria para una pared",
  "seoDescription": "Calcula la masa de mezcla de enlucido y el número de sacos a partir de la superficie de la pared, el espesor de la capa y el rendimiento.",
  "h1": "Calculadora de enlucido",
  "keywords": [
    "calculadora de enlucido",
    "consumo de enlucido",
    "enlucido por m2",
    "sacos de enlucido"
  ]
};

export const plasterCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
