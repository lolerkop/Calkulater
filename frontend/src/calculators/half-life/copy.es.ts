import type { CalculatorCopy } from '../../lib/platform/types';
import { halfLifeContractContent } from './contractContent';

export const halfLifeCopyEs: CalculatorCopy = {
  name: "Calculadora de semivida",
  slug: "periodo-de-semidesintegracion",
  shortDescription: "Cantidad restante a partir de una semivida, o el tiempo para llegar a un resto dado.",
  seoTitle: "Calculadora de semivida — cantidad restante y tiempo",
  seoDescription: "Calcula cuánta sustancia queda tras un tiempo dado, o cuánto hay que esperar para el resto que necesitas.",
  h1: "Calculadora de semivida",
  keywords: ["semivida", "desintegración radiactiva", "cantidad restante", "vida media"],
  ...halfLifeContractContent.es,
};
