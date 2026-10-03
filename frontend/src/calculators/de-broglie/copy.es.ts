import type { CalculatorCopy } from '../../lib/platform/types';
import { deBroglieContractContent } from './contractContent';

export const deBroglieCopyEs: CalculatorCopy = {
  name: "Calculadora de longitud de onda de De Broglie",
  slug: "longitud-de-onda-de-de-broglie",
  shortDescription: "La longitud de onda de una partícula a partir de su masa y su velocidad.",
  seoTitle: "Calculadora de longitud de onda de De Broglie — por masa y velocidad",
  seoDescription: "Calcula la longitud de onda de De Broglie por masa y velocidad, con momento lineal, energía cinética y fracción de la velocidad de la luz.",
  h1: "Calculadora de longitud de onda de De Broglie",
  keywords: ["longitud de onda de de broglie", "longitud de onda del electrón", "constante de Planck", "momento de una partícula"],
  ...deBroglieContractContent.es,
};
