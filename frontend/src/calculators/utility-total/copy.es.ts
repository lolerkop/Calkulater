import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const utilityTotalCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de facturas del hogar",
  "slug": "facturas-del-hogar",
  "shortDescription": "Suma los suministros con contador y los cargos fijos en un total mensual.",
  "seoTitle": "Calculadora de facturas del hogar: contadores, tarifas y cargos fijos",
  "seoDescription": "Suma luz, agua y gas a partir de las lecturas del contador y sus tarifas, más los cargos fijos, en un único total mensual.",
  "h1": "Calculadora de facturas del hogar",
  "keywords": [
    "facturas del hogar",
    "suma de suministros",
    "lecturas del contador",
    "gasto mensual de luz agua y gas"
  ]
},
  ...contractContent.es,
};
