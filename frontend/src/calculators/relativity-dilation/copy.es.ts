import type { CalculatorCopy } from '../../lib/platform/types';
import { relativityDilationContractContent } from './contractContent';

export const relativityDilationCopyEs: CalculatorCopy = {
  name: "Calculadora de dilatación del tiempo",
  slug: "dilatacion-del-tiempo",
  shortDescription: "Factor de Lorentz, dilatación del tiempo y contracción de la longitud.",
  seoTitle: "Calculadora de dilatación del tiempo — factor de Lorentz",
  seoDescription: "Calcula el factor de Lorentz, la dilatación del tiempo y la contracción de la longitud a partir de una fracción de la velocidad de la luz.",
  h1: "Calculadora de dilatación del tiempo",
  keywords: ["dilatación del tiempo", "factor de Lorentz", "contracción de la longitud", "relatividad especial"],
  ...relativityDilationContractContent.es,
};
