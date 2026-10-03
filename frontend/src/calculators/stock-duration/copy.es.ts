import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const stockDurationCopyEs: CalculatorCopy = {
  "name": "Calculadora de duración de existencias",
  "slug": "duracion-de-existencias",
  "shortDescription": "Cuántos días duran unas existencias con un consumo conocido.",
  "seoTitle": "Calculadora de duración de existencias — cuánto duran los suministros",
  "seoDescription": "Calcula cuántos días duran unas existencias con un consumo diario conocido, y cuándo hacer el siguiente pedido.",
  "h1": "Calculadora de duración de existencias",
  "keywords": ["calculadora de duración de existencias", "cuánto durarán los suministros", "calculadora de punto de pedido"],
  ...contract.es,
};
