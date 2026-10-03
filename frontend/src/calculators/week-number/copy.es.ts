import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const weekNumberCopyEs: CalculatorCopy = {
  name: "Calculadora de número de semana",
  slug: "numero-de-semana",
  shortDescription: "Semana ISO y día ordinal de una fecha gregoriana válida.",
  seoTitle: "Calculadora de número de semana — semana ISO y día del año",
  seoDescription: "Calcula semana ISO, año ISO, día ordinal y días restantes para fechas gregorianas de los años 0001–9999.",
  h1: "Calculadora de número de semana",
  keywords: ["número de semana","semana iso","día del año"],
  ...contractContent.es,
};
