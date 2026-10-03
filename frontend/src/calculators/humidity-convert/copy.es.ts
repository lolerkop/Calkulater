import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const humidityConvertCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de humedad absoluta",
  "slug": "humedad-absoluta",
  "shortDescription": "Cuántos gramos de agua hay en un metro cúbico de aire.",
  "seoTitle": "Calculadora de humedad absoluta — gramos de agua por metro cúbico",
  "seoDescription": "Humedad absoluta en g/m³ y razón de mezcla en g/kg de aire seco con temperatura, humedad relativa y presión absoluta local.",
  "h1": "Calculadora de humedad absoluta",
  "keywords": [
    "humedad absoluta",
    "razón de mezcla",
    "presión de vapor",
    "humedad del aire"
  ]
},
 ...contract.es,
};
