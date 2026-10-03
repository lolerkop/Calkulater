// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dividendYieldCopyEs: CalculatorCopy = {
  name: "Calculadora de rentabilidad por dividendo",
  slug: "rentabilidad-por-dividendo",
  shortDescription: "Dividendo anual como proporción del precio de acción indicado.",
  seoTitle: "Calculadora de rentabilidad por dividendo — rentabilidad en porcentaje",
  seoDescription: "Calcula la rentabilidad por dividendo a partir del dividendo anual por acción y el precio de la acción, más los ingresos de tu paquete.",
  h1: "Calculadora de rentabilidad por dividendo",
  keywords: ["rentabilidad por dividendo", "calculadora de dividendos", "rentabilidad de unas acciones"],
  ...contractContent.es,
};
