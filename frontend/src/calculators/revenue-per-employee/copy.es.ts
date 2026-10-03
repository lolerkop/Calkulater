// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const revenuePerEmployeeCopyEs: CalculatorCopy = {
  name: "Calculadora de ingresos por empleado",
  slug: "ingresos-por-empleado",
  shortDescription: "Ingresos anuales divididos entre una plantilla entera.",
  seoTitle: "Calculadora de ingresos por empleado — productividad laboral",
  seoDescription: "Calcula los ingresos anuales por empleado con ingresos anuales y una plantilla entera. La fila mensual divide ese valor entre 12; no se admiten FTE fraccionarios.",
  h1: "Calculadora de ingresos por empleado",
  keywords: ["ingresos por empleado", "productividad laboral", "eficiencia de la plantilla"],
  ...contractContent.es,
};
