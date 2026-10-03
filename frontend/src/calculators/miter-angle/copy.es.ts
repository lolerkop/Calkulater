import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de ángulo de inglete",
  "slug": "angulo-de-inglete",
  "shortDescription": "El ángulo de corte para unir dos piezas en una esquina.",
  "seoTitle": "Calculadora de ángulo de inglete — unión a inglete",
  "seoDescription": "Calcula el ángulo de corte de un rodapié o una moldura en una unión a inglete: la mitad del ángulo de la esquina y el valor para la escala de la ingletadora.",
  "h1": "Calculadora de ángulo de inglete",
  "keywords": [
    "ángulo de inglete",
    "unión a inglete",
    "ingletadora",
    "ángulo de corte de molduras"
  ]
};

export const miterAngleCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
