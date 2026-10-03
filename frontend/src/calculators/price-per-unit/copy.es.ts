import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const pricePerUnitCopyEs: CalculatorCopy = {
  "name": "Calculadora de precio por unidad",
  "slug": "precio-por-unidad",
  "shortDescription": "Precio por kilogramo, litro o unidad, y comparación de dos envases.",
  "seoTitle": "Calculadora de precio por unidad — compara tamaños de envase",
  "seoDescription": "Calcula el precio por kilogramo, litro o unidad y compara dos envases para ver cuál sale más barato.",
  "h1": "Calculadora de precio por unidad",
  "keywords": ["calculadora de precio por unidad", "precio por kg", "comparación de precio unitario", "qué envase sale más barato"],
  ...contract.es,
};
