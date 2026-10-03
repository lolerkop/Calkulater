// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const adRoiCopyEs: CalculatorCopy = {
  name: "Calculadora de ROI publicitario",
  slug: "roi-publicitario",
  shortDescription: "ROAS y ROI simplificado a partir de ingresos y gasto publicitario.",
  seoTitle: "Calculadora de ROI publicitario — ROI y ROAS a partir de la inversión y los ingresos",
  seoDescription: "Calcula ROAS y ROI simplificado con los ingresos de la campaña y solo el gasto publicitario. Productos, comisiones y otros costes no forman parte de los campos.",
  h1: "Calculadora de ROI publicitario",
  keywords: ["ROI publicitario", "calculadora de ROAS", "rentabilidad de una campaña"],
  ...contractContent.es,
};
