// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const roiCopyEs: CalculatorCopy = {
  name: "Calculadora de ROI",
  slug: "calculadora-de-roi",
  shortDescription: "Retorno de la inversión, con los costes adicionales contados como es debido.",
  seoTitle: "Calculadora de ROI — retorno de la inversión en porcentaje",
  seoDescription: "Calcula el retorno de la inversión a partir del importe recibido y el invertido, con los costes adicionales incluidos.",
  h1: "Calculadora de ROI",
  keywords: ["calculadora de ROI", "retorno de la inversión", "rentabilidad de una inversión"],
  ...contractContent.es,
};
