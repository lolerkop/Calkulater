import type { CalculatorCopy } from '../../lib/platform/types';
import { inverseSquareContractContent } from './contractContent';

export const inverseSquareCopyEs: CalculatorCopy = {
  name: "Calculadora de la ley de la inversa del cuadrado",
  slug: "ley-de-la-inversa-del-cuadrado",
  shortDescription: "Cómo cae la intensidad con la distancia a una fuente puntual.",
  seoTitle: "Calculadora de la ley de la inversa del cuadrado — intensidad y distancia",
  seoDescription: "Calcula cómo cambia la intensidad lineal o la iluminancia con la distancia a una fuente puntual mediante la ley del inverso del cuadrado.",
  h1: "Calculadora de la ley de la inversa del cuadrado",
  keywords: ["ley de la inversa del cuadrado", "intensidad y distancia", "iluminancia", "caída del nivel"],
  ...inverseSquareContractContent.es,
};
