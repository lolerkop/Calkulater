import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de vallas",
  "slug": "calculadora-de-vallas",
  "shortDescription": "Postes, tramos y travesaños para una valla de una longitud dada.",
  "seoTitle": "Calculadora de vallas: postes, tramos y travesaños",
  "seoDescription": "Calcula cuántos postes, tramos y metros de travesaño lleva una valla, con los postes de las puertas y el paso real.",
  "h1": "Calculadora de vallas",
  "keywords": [
    "calculadora de vallas",
    "separación de postes de valla",
    "cuántos postes de valla",
    "calculadora de travesaños"
  ]
};

export const fenceCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
