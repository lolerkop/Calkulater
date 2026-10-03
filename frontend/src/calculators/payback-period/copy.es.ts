import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const paybackPeriodCopyEs: CalculatorCopy = {
  name: "Calculadora de plazo de recuperación",
  slug: "plazo-de-recuperacion",
  shortDescription: "Cuánto tarda una inversión en recuperarse.",
  seoTitle: "Calculadora de plazo de recuperación — simple y descontado",
  seoDescription: "Calcula el plazo de recuperación de una inversión a partir del flujo de caja anual, con descuento a un tipo dado.",
  h1: "Calculadora de plazo de recuperación",
  keywords: ["plazo de recuperación","recuperación descontada","flujo de caja","evaluación de inversiones"],
  ...contractContent.es,
};
