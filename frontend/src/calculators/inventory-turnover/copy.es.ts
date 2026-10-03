import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const inventoryTurnoverCopyEs: CalculatorCopy = {
  "name": "Calculadora de rotación de existencias",
  "slug": "rotacion-de-existencias",
  "shortDescription": "Rotación de existencias y días de cobertura a partir del coste de las mercancías vendidas.",
  "seoTitle": "Calculadora de rotación de existencias — rotaciones y días de cobertura",
  "seoDescription": "Calcula la rotación de existencias a partir del coste de las mercancías vendidas y las existencias medias, más los días medios de cobertura.",
  "h1": "Calculadora de rotación de existencias",
  "keywords": [
    "calculadora de rotación de existencias",
    "ratio de rotación de stock",
    "días de existencias",
    "coste de ventas"
  ],
  ...contractContent.es,
};
