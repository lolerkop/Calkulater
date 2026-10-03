// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const logarithmCopyEs: CalculatorCopy = {
  name: "Calculadora de logaritmos",
  slug: "calculadora-de-logaritmos",
  shortDescription: "Logaritmos decimales, naturales y de cualquier base, con comprobación.",
  seoTitle: "Calculadora de logaritmos — base 10, logaritmo natural y cualquier base",
  seoDescription: "Calcula un logaritmo en base 10, en base e o en la base que elijas, con el dominio comprobado antes del resultado.",
  h1: "Calculadora de logaritmos",
  keywords: ["calculadora de logaritmos", "log en base 2", "logaritmo natural"],
  ...contractContent.es,
};
