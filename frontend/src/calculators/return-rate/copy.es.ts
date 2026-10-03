// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const returnRateCopyEs: CalculatorCopy = {
  name: "Calculadora de tasa de devoluciones",
  slug: "tasa-de-devoluciones",
  shortDescription: "Qué proporción de los pedidos volvió.",
  seoTitle: "Calculadora de tasa de devoluciones — proporción de pedidos devueltos",
  seoDescription: "Calcula los pedidos devueltos únicos como proporción de una cohorte y su complemento hasta el 100%. Las devoluciones y el denominador deben corresponder a los mismos pedidos.",
  h1: "Calculadora de tasa de devoluciones",
  keywords: ["tasa de devoluciones", "porcentaje de devoluciones", "devoluciones en comercio electrónico"],
  ...contractContent.es,
};
