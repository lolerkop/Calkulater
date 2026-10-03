import type { CalculatorCopy } from '../../lib/platform/types';
import { gasLawsContractContent } from './contractContent';

export const gasLawsCopyEs: CalculatorCopy = {
  name: "Calculadora de la ley combinada de los gases",
  slug: "ley-combinada-de-los-gases",
  shortDescription: "Un gas que pasa de un estado a otro: p₁V₁/T₁ = p₂V₂/T₂.",
  seoTitle: "Calculadora de la ley combinada de los gases — p₁V₁/T₁ = p₂V₂/T₂",
  seoDescription: "Calcula la presión, el volumen o la temperatura de un gas que pasa de un estado a otro con la ley combinada de los gases.",
  h1: "Calculadora de la ley combinada de los gases",
  keywords: ["calculadora de la ley combinada de los gases", "calculadora de la ley de Boyle", "calculadora de la ley de Charles", "p1v1 t1 p2v2 t2"],
  ...gasLawsContractContent.es,
};
