// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const aovCopyEs: CalculatorCopy = {
  name: "Calculadora de ticket medio",
  slug: "ticket-medio",
  shortDescription: "Ingresos divididos entre el número de pedidos.",
  seoTitle: "Calculadora de ticket medio — a partir de los ingresos y los pedidos",
  seoDescription: "Calcula el ticket medio dividiendo los ingresos de un periodo entre el número de pedidos del mismo periodo.",
  h1: "Calculadora de ticket medio",
  keywords: ["ticket medio", "valor medio de pedido", "cesta media"],
  ...contractContent.es,
};
