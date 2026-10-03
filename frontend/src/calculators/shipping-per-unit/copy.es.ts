// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const shippingPerUnitCopyEs: CalculatorCopy = {
  name: "Calculadora de envío por unidad",
  slug: "envio-por-unidad",
  shortDescription: "Lo que la logística añade al coste de un artículo.",
  seoTitle: "Calculadora de envío por unidad — coste logístico por artículo",
  seoDescription: "Calcula el coste de envío por unidad a partir del coste de la entrega, el número de unidades y un embalaje opcional.",
  h1: "Calculadora de envío por unidad",
  keywords: ["envío por unidad", "coste logístico por artículo", "coste de entrega"],
  ...contractContent.es,
};
