import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const installmentCopyEs: CalculatorCopy = {
  "name": "Calculadora de compra a plazos",
  "slug": "compra-a-plazos",
  "shortDescription": "La cuota mensual de una compra a plazos con recargo, con el cuadro de pagos.",
  "seoTitle": "Calculadora de compra a plazos — cuota y cuadro de pagos",
  "seoDescription": "Calcula la cuota mensual de una compra a plazos con entrada y recargo, con un cuadro mes a mes.",
  "h1": "Calculadora de compra a plazos",
  "keywords": [
    "calculadora de compra a plazos",
    "cuota a plazos",
    "plazos sin intereses"
  ],
  ...contractContent.es,
};
