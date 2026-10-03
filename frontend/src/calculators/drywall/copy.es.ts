import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de placas de yeso",
  "slug": "placas-de-yeso",
  "shortDescription": "Placas, perfilería y tornillos para un tabique o un techo de yeso laminado.",
  "seoTitle": "Calculadora de placas de yeso: placas, perfilería y tornillos",
  "seoDescription": "Calcula cuántas placas de yeso laminado, metros de perfilería y tornillos necesita un tabique o un techo, con capas y margen incluidos.",
  "h1": "Calculadora de placas de yeso",
  "keywords": [
    "calculadora de placas de yeso",
    "placas de yeso laminado",
    "separación de montantes",
    "tornillos para placa de yeso"
  ]
};

export const drywallCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
