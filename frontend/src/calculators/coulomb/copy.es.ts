import type { CalculatorCopy } from '../../lib/platform/types';
import { coulombContractContent } from './contractContent';

export const coulombCopyEs: CalculatorCopy = {
  name: "Calculadora de la ley de Coulomb",
  slug: "ley-de-coulomb",
  shortDescription: "La fuerza entre dos cargas puntuales.",
  seoTitle: "Calculadora de la ley de Coulomb — fuerza entre cargas",
  seoDescription: "Calcula la fuerza entre dos cargas puntuales por la ley de Coulomb, con la intensidad del campo y la energía potencial.",
  h1: "Calculadora de la ley de Coulomb",
  keywords: ["ley de Coulomb", "fuerza entre cargas", "electrostática", "intensidad del campo eléctrico"],
  ...coulombContractContent.es,
};
