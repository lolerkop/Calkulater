import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const airDensityCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de densidad del aire",
  "slug": "densidad-del-aire",
  "shortDescription": "Densidad del aire húmedo a partir de la temperatura, la presión y la humedad.",
  "seoTitle": "Calculadora de densidad del aire — por temperatura, presión y humedad",
  "seoDescription": "Calcula la densidad del aire húmedo a partir de la temperatura, la presión atmosférica y la humedad relativa.",
  "h1": "Calculadora de densidad del aire",
  "keywords": [
    "densidad del aire",
    "aire húmedo",
    "presión de saturación",
    "atmósfera estándar"
  ]
},
 ...contract.es,
};
