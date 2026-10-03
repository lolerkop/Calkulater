import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de tablas de revestimiento",
  "slug": "tablas-de-revestimiento",
  "shortDescription": "Cuántas tablas lleva una pared una vez contado el solape.",
  "seoTitle": "Calculadora de tablas de revestimiento — cantidad con solape",
  "seoDescription": "Calcula cuántas tablas de revestimiento necesita una pared: ancho útil tras el solape, margen de corte y metros lineales necesarios.",
  "h1": "Calculadora de tablas de revestimiento",
  "keywords": [
    "calculadora de tablas de revestimiento",
    "cuántas tablas para una pared",
    "calculadora de friso",
    "calculadora de tablas y listones"
  ]
};

export const claddingBoardsCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
