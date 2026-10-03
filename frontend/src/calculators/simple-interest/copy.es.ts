import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const simpleInterestCopyEs: CalculatorCopy = {
  name: "Calculadora de interés simple",
  slug: "interes-simple",
  shortDescription: "Intereses calculados solo sobre el importe inicial, en ambos sentidos.",
  seoTitle: "Calculadora de interés simple — intereses y tipo necesario",
  seoDescription: "Calcula el interés simple sobre el importe inicial, el total y el tipo necesario para unos intereses dados.",
  h1: "Calculadora de interés simple",
  keywords: ["interés simple","calculadora de intereses","tipo necesario"],
  ...contractContent.es,
};
