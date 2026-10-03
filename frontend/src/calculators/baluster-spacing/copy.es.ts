import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de separación de balaustres",
  "slug": "separacion-de-balaustres",
  "shortDescription": "Cuántos balaustres lleva un tramo con una separación máxima admitida.",
  "seoTitle": "Calculadora de separación de balaustres — cantidad según la separación máxima",
  "seoDescription": "Calcula cuántos balaustres necesita un tramo a partir del ancho del balaustre y la separación máxima admitida, con la separación real y el paso.",
  "h1": "Calculadora de separación de balaustres",
  "keywords": [
    "calculadora de separación de balaustres",
    "separación de barrotes",
    "separación de una barandilla",
    "cuántos balaustres"
  ]
};

export const balusterSpacingCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
